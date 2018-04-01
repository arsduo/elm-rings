export default class ElmRings {
  constructor({
    containerElement,
    allowDownload,
    shouldSendHistory,
    storeHistory,
    trackingFrequency
  }) {
    this.containerElement = containerElement;
    if (!this.containerElement) {
      throw new Error(
        "You must supply a DOM node as containerElement to ElmRings!"
      );
    }
    if (!this.containerElement.querySelectorAll) {
      throw new Error(
        "The DOM node supplied as containerElement to ElmRings must support querySelectorAll!"
      );
    }

    this.allowDownload = allowDownload;
    // if no shouldSend method is defined, always send it
    this.shouldSendHistory = () => !shouldSendHistory || shouldSendHistory();
    this.storeHistory = storeHistory;
    // default to tracking every minute
    this.trackingFrequency = trackingFrequency || 60000;

    // ensure that when the callback is called, we still have access to our settings
    this.handleHistoryExport = this.handleHistoryExport.bind(this);
    this.triggerHistoryExport = this.triggerHistoryExport.bind(this);
  }

  startTracking() {
    this.containerElement.addEventListener("click", this.handleHistoryExport);
    this.trackingInterval = setInterval(
      this.triggerHistoryExport,
      this.trackingFrequency
    );
  }

  stopTracking() {
    if (this.trackingInterval) {
      clearInterval(this.trackingInterval);
      this.trackingInterval = null;
    }
  }

  triggerHistoryExport() {
    // if the user is no longer logged in, don't try to get/post the history
    if (!this.shouldSendHistory()) {
      return;
    }

    const exportButton = this.containerElement.querySelectorAll(
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

      if (!this.allowDownload) {
        event.preventDefault();
      }

      // we have to post this data in Javascript, since doing so in Elm would cause the
      this.storeHistory(historyData);

      return this.allowDownload;
    }
  }
}
