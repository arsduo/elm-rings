import ElmRings from "../source/ElmRings.js";

describe("ElmRings", () => {
  let mockBody, elmButton, elmElmRings;

  beforeEach(() => {
    jest.useFakeTimers();

    mockBody = {
      querySelectorAll: jest.fn(() => [null, elmButton]),
      addEventListener: jest.fn()
    };

    elmButton = { click: jest.fn() };

    // default setup; individual tests may change this
    elmElmRings = new ElmRings(
      {
        allowDownload: true,
        shouldSendHistory: () => true,
        storeHistory: jest.fn()
      },
      mockBody
    );
  });

  it("requires a mockBody that supports querySelectorAll", () => {
    expect(
      () =>
        new ElmRings(
          {
            allowDownload: true,
            shouldSendHistory: () => true,
            storeHistory: jest.fn()
          },
          {}
        )
    ).toThrow();
  });

  describe("startTracking", () => {
    it("starts tracking", () => {
      elmElmRings.startTracking();
      expect(mockBody.addEventListener).toHaveBeenCalledWith(
        "click",
        elmElmRings.handleHistoryExport
      );
    });

    it("sets a the recording interval to a minute by default", () => {
      elmElmRings.exportHistory = jest.fn();
      elmElmRings.startTracking();

      jest.advanceTimersByTime(60000 - 1);
      expect(elmElmRings.exportHistory).not.toHaveBeenCalled();
      jest.advanceTimersByTime(2);
      expect(elmElmRings.exportHistory).toHaveBeenCalled();
      jest.advanceTimersByTime(60000);
      expect(elmElmRings.exportHistory.mock.calls.length).toEqual(2);
    });

    it("allows control over the interval", () => {
      elmElmRings = new ElmRings({
        mockBody,
        trackingFrequency: 10,
        shouldSendHistory: jest.fn(() => true),
        storeHistory: jest.fn()
      });
      elmElmRings.exportHistory = jest.fn();
      elmElmRings.startTracking();

      jest.advanceTimersByTime(9);
      expect(elmElmRings.exportHistory).not.toHaveBeenCalled();
      jest.advanceTimersByTime(2);
      expect(elmElmRings.exportHistory).toHaveBeenCalled();
      jest.advanceTimersByTime(10);
      expect(elmElmRings.exportHistory.mock.calls.length).toEqual(2);
    });
  });

  describe("stopTracking", () => {
    it("stops tracking", () => {
      elmElmRings.exportHistory = jest.fn();
      elmElmRings.startTracking();

      jest.advanceTimersByTime(60000);
      expect(elmElmRings.exportHistory).toHaveBeenCalled();

      elmElmRings.stopTracking();
      jest.advanceTimersByTime(60000);
      expect(elmElmRings.exportHistory.mock.calls.length).toEqual(1);
    });
  });

  describe("exportHistory", () => {
    it("triggers the history export", () => {
      elmElmRings.exportHistory();
      expect(elmButton.click).toHaveBeenCalled();
    });

    it("makes sure that allowDownload is false during the export", () => {
      elmButton.click = jest.fn(() => {
        expect(elmElmRings.allowDownload).toBe(false);
      });
      // first, make sure it starts out true
      expect(elmElmRings.allowDownload).toBe(true);

      // make sure we triggered the assertion
      elmElmRings.exportHistory();
      expect(elmButton.click).toHaveBeenCalled();

      // now ensure we reset it
      jest.advanceTimersByTime(51);
      expect(elmElmRings.allowDownload).toBe(true);
    });

    it("won't send if shouldSendHistory return false", () => {
      elmElmRings = new ElmRings({
        mockBody,
        allowDownload: true,
        shouldSendHistory: () => false,
        storeHistory: jest.fn()
      });

      elmElmRings.exportHistory();
      expect(elmButton.click).not.toHaveBeenCalled();
    });

    it("won't crash if there is no button", () => {
      mockBody.querySelectorAll = () => [];
      elmElmRings.exportHistory();
      expect(elmButton.click).not.toHaveBeenCalled();
    });
  });

  describe("handleHistoryExport", () => {
    let event, target;
    const historyData = {
      metadata: { versions: { elm: "0.18.0" } },
      types: {},
      history: []
    };
    const mimeType = "application/json";

    beforeEach(() => {
      target = {
        href: `data:${mimeType},${escape(JSON.stringify(historyData))}`
      };
      event = { target, preventDefault: jest.fn() };
    });

    describe("if this is an Elm history export", () => {
      it("will fire the callback with the history data", () => {
        elmElmRings.handleHistoryExport(event);
        expect(elmElmRings.storeHistory).toHaveBeenCalledWith(
          JSON.stringify(historyData)
        );
      });

      it("won't stop you from downloading history if allowDownload is enabled", () => {
        expect(elmElmRings.handleHistoryExport(event)).not.toBe(false);
        expect(event.preventDefault).not.toHaveBeenCalled();
      });

      it("stops you from downloading history if allowDownload is disabled", () => {
        elmElmRings = new ElmRings({
          mockBody,
          allowDownload: false,
          shouldSendHistory: () => true,
          storeHistory: jest.fn()
        });
        expect(elmElmRings.handleHistoryExport(event)).toBe(false);
        expect(event.preventDefault).toHaveBeenCalled();
      });
    });

    describe("if it's not an Elm history export", () => {
      it("won't do anything on other links", () => {
        target.href = "http://google.com";
        expect(elmElmRings.handleHistoryExport(event)).not.toBe(false);
        expect(elmElmRings.storeHistory).not.toHaveBeenCalled();
        expect(event.preventDefault).not.toHaveBeenCalled();
      });

      it("won't do anything on clicks on other types of data", () => {
        delete target.href;
        expect(elmElmRings.handleHistoryExport(event)).not.toBe(false);
        expect(elmElmRings.storeHistory).not.toHaveBeenCalled();
        expect(event.preventDefault).not.toHaveBeenCalled();
      });
    });
  });
});
