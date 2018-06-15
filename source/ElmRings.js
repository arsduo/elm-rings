import sanitizeElmHistory from "./HistorySanitizer.js";

export default class ElmRings {
  constructor(
    {
      allowDownload,
      shouldSendHistory,
      storeHistory,
      trackingFrequency,
      watchWords,
      historySanitizer,
      playDangerousWithData
    },
    body = document.body
  ) {
    // we allow the body to be passed in to ensure that we can test all behavior
    // in normal usage this should never be necessary
    this.body = body;

    if (!this.body.querySelectorAll) {
      throw new Error(
        "This browser doesn't support querySelectorAll -- unable to capture Elm history via ElmRings."
      );
    }

    this.allowDownload = allowDownload;
    // if no shouldSend method is defined, always send it
    this.shouldSendHistory = () => !shouldSendHistory || shouldSendHistory();
    this.storeHistory = storeHistory;
    // default to tracking every minute
    this.trackingFrequency = trackingFrequency || 60000;

    this.historySanitizer = historySanitizer;
    this.watchWords = watchWords;
    if ((!historySanitizer || !watchWords) && !playDangerousWithData) {
      console.warn(
        "ElmRings was not provided both watchWords and historySanitizer, so sensitive data will remain in your history exports. This is probably a bad idea -- be careful!"
      );
    }

    // ensure that when the callback is called, we still have access to our settings
    this.handleHistoryExport = this.handleHistoryExport.bind(this);
    this.exportHistory = this.exportHistory.bind(this);
  }

  startTracking() {
    this.body.addEventListener("click", this.handleHistoryExport);
    this.trackingInterval = setInterval(
      this.exportHistory,
      this.trackingFrequency
    );
  }

  stopTracking() {
    if (this.trackingInterval) {
      clearInterval(this.trackingInterval);
      this.trackingInterval = null;
    }
  }

  exportHistory() {
    // if the user is no longer logged in, don't try to get/post the history
    if (!this.shouldSendHistory()) {
      return;
    }

    const exportButton = this.body.querySelectorAll(
      ".elm-mini-controls-import-export span"
    )[1];

    if (!exportButton) {
      return;
    }

    const oldAllow = this.allowDownload;
    this.allowDownload = false;
    exportButton.click();
    // the setTimeout is necessary for Firefox; otherwise the allowDownload value will get
    // restored before the click handler, causing download prompts
    setTimeout(() => (this.allowDownload = oldAllow), 50);
  }

  handleHistoryExport(event) {
    const target = event.target;
    // see if we're downloading data from Elm 0.18.x
    // assuming that the history export format won't change in a patch version 🤞
    if (target.href && unescape(target.href).match(/{"elm":"0.18/)) {
      // Elm delivers the data in the format
      // 'data:' + mime + ',' + encodeURIComponent(jsonString));
      const historyData = unescape(target.href.split(/,/)[1]);

      if (this.watchWords && this.historySanitizer) {
        // sanitize the history before passing it on
        const historyObject = JSON.parse(historyData);

        const sanitizedHistory = sanitizeElmHistory(
          historyObject,
          this.watchWords,
          this.historySanitizer
        );

        this.storeHistory(JSON.stringify(sanitizedHistory));
      } else {
        // pass the data on to the user to do with as they like
        this.storeHistory(historyData);
      }

      if (!this.allowDownload) {
        event.preventDefault();
      }
      return this.allowDownload;
    }
  }
}
