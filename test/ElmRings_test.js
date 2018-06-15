import ElmRings from "../source/ElmRings.js";
jest.mock("../source/HistorySanitizer.js", () => {
  return function(data, watchWords, sanitizingFunction) {
    sanitizingFunction();
    return { sanitized: data, watchWords: watchWords };
  };
});
import sanitizeElmHistory from "../source/HistorySanitizer.js";

describe("ElmRings", () => {
  let mockBody,
    elmButton,
    elmRings,
    watchWords,
    historySanitizer,
    elmRingsOptions;

  beforeEach(() => {
    jest.useFakeTimers();

    mockBody = {
      querySelectorAll: jest.fn(() => [null, elmButton]),
      addEventListener: jest.fn()
    };

    elmButton = { click: jest.fn() };

    watchWords = ["Some", "words"];
    historySanitizer = jest.fn();

    elmRingsOptions = {
      allowDownload: true,
      shouldSendHistory: () => true,
      storeHistory: jest.fn(),
      watchWords,
      historySanitizer
    };

    // default setup; individual tests may change this
    elmRings = new ElmRings(elmRingsOptions, mockBody);
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
      elmRings.startTracking();
      expect(mockBody.addEventListener).toHaveBeenCalledWith(
        "click",
        elmRings.handleHistoryExport
      );
    });

    it("sets a the recording interval to a minute by default", () => {
      elmRings.exportHistory = jest.fn();
      elmRings.startTracking();

      jest.advanceTimersByTime(60000 - 1);
      expect(elmRings.exportHistory).not.toHaveBeenCalled();
      jest.advanceTimersByTime(2);
      expect(elmRings.exportHistory).toHaveBeenCalled();
      jest.advanceTimersByTime(60000);
      expect(elmRings.exportHistory.mock.calls.length).toEqual(2);
    });

    it("allows control over the interval", () => {
      elmRings = new ElmRings({
        mockBody,
        trackingFrequency: 10,
        shouldSendHistory: jest.fn(() => true),
        storeHistory: jest.fn()
      });
      elmRings.exportHistory = jest.fn();
      elmRings.startTracking();

      jest.advanceTimersByTime(9);
      expect(elmRings.exportHistory).not.toHaveBeenCalled();
      jest.advanceTimersByTime(2);
      expect(elmRings.exportHistory).toHaveBeenCalled();
      jest.advanceTimersByTime(10);
      expect(elmRings.exportHistory.mock.calls.length).toEqual(2);
    });
  });

  describe("stopTracking", () => {
    it("stops tracking", () => {
      elmRings.exportHistory = jest.fn();
      elmRings.startTracking();

      jest.advanceTimersByTime(60000);
      expect(elmRings.exportHistory).toHaveBeenCalled();

      elmRings.stopTracking();
      jest.advanceTimersByTime(60000);
      expect(elmRings.exportHistory.mock.calls.length).toEqual(1);
    });
  });

  describe("exportHistory", () => {
    it("triggers the history export", () => {
      elmRings.exportHistory();
      expect(elmButton.click).toHaveBeenCalled();
    });

    it("makes sure that allowDownload is false during the export", () => {
      elmButton.click = jest.fn(() => {
        expect(elmRings.allowDownload).toBe(false);
      });
      // first, make sure it starts out true
      expect(elmRings.allowDownload).toBe(true);

      // make sure we triggered the assertion
      elmRings.exportHistory();
      expect(elmButton.click).toHaveBeenCalled();

      // now ensure we reset it
      jest.advanceTimersByTime(51);
      expect(elmRings.allowDownload).toBe(true);
    });

    it("won't send if shouldSendHistory return false", () => {
      elmRings = new ElmRings({
        mockBody,
        allowDownload: true,
        shouldSendHistory: () => false,
        storeHistory: jest.fn()
      });

      elmRings.exportHistory();
      expect(elmButton.click).not.toHaveBeenCalled();
    });

    it("won't crash if there is no button", () => {
      mockBody.querySelectorAll = () => [];
      elmRings.exportHistory();
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
      it("fires the callback with the sanitized history", () => {
        elmRings.handleHistoryExport(event);
        expect(elmRingsOptions.storeHistory).toHaveBeenCalledWith(
          JSON.stringify({ sanitized: historyData, watchWords })
        );
        expect(historySanitizer).toHaveBeenCalled();
      });

      it("will fire the callback with unsanitized history data if no sanitization options provided", () => {
        new ElmRings(
          { ...elmRingsOptions, historySanitizer: null },
          mockBody
        ).handleHistoryExport(event);
        expect(elmRingsOptions.storeHistory).toHaveBeenCalledWith(
          JSON.stringify(historyData)
        );
      });

      it("won't stop you from downloading history if allowDownload is enabled", () => {
        expect(elmRings.handleHistoryExport(event)).not.toBe(false);
        expect(event.preventDefault).not.toHaveBeenCalled();
      });

      it("stops you from downloading history if allowDownload is disabled", () => {
        elmRings = new ElmRings({
          mockBody,
          allowDownload: false,
          shouldSendHistory: () => true,
          storeHistory: jest.fn()
        });
        expect(elmRings.handleHistoryExport(event)).toBe(false);
        expect(event.preventDefault).toHaveBeenCalled();
      });
    });

    describe("if it's not an Elm history export", () => {
      it("won't do anything on other links", () => {
        target.href = "http://google.com";
        expect(elmRings.handleHistoryExport(event)).not.toBe(false);
        expect(elmRings.storeHistory).not.toHaveBeenCalled();
        expect(event.preventDefault).not.toHaveBeenCalled();
      });

      it("won't do anything on clicks on other types of data", () => {
        delete target.href;
        expect(elmRings.handleHistoryExport(event)).not.toBe(false);
        expect(elmRings.storeHistory).not.toHaveBeenCalled();
        expect(event.preventDefault).not.toHaveBeenCalled();
      });
    });
  });
});
