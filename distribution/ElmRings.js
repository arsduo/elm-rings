function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

var ElmRings =
  /*#__PURE__*/
  (function() {
    function ElmRings(_ref) {
      var containerElement = _ref.containerElement,
        allowDownload = _ref.allowDownload,
        shouldSendHistory = _ref.shouldSendHistory,
        storeHistory = _ref.storeHistory,
        trackingFrequency = _ref.trackingFrequency;

      _classCallCheck(this, ElmRings);

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

      this.allowDownload = allowDownload; // if no shouldSend method is defined, always send it

      this.shouldSendHistory = function() {
        return !shouldSendHistory || shouldSendHistory();
      };

      this.storeHistory = storeHistory; // default to tracking every minute

      this.trackingFrequency = trackingFrequency || 60000; // ensure that when the callback is called, we still have access to our settings

      this.handleHistoryExport = this.handleHistoryExport.bind(this);
      this.triggerHistoryExport = this.triggerHistoryExport.bind(this);
    }

    _createClass(ElmRings, [
      {
        key: "startTracking",
        value: function startTracking() {
          this.containerElement.addEventListener(
            "click",
            this.handleHistoryExport
          );
          this.trackingInterval = setInterval(
            this.triggerHistoryExport,
            this.trackingFrequency
          );
        }
      },
      {
        key: "stopTracking",
        value: function stopTracking() {
          if (this.trackingInterval) {
            clearInterval(this.trackingInterval);
            this.trackingInterval = null;
          }
        }
      },
      {
        key: "triggerHistoryExport",
        value: function triggerHistoryExport() {
          var _this = this;

          // if the user is no longer logged in, don't try to get/post the history
          if (!this.shouldSendHistory()) {
            return;
          }

          var exportButton = this.containerElement.querySelectorAll(
            ".elm-mini-controls-import-export span"
          )[1];

          if (!exportButton) {
            return;
          }

          var oldAllow = this.allowDownload;
          this.allowDownload = false;
          exportButton.click(); // the setTimeout is necessary for Firefox; otherwise the allowDownload value will get
          // restored before the click handler, causing download prompts

          setTimeout(function() {
            return (_this.allowDownload = oldAllow);
          }, 50);
        }
      },
      {
        key: "handleHistoryExport",
        value: function handleHistoryExport(event) {
          var target = event.target; // see if we're downloading data from Elm 0.18.x
          // assuming that the history export format won't change in a patch version 🤞

          if (target.href && unescape(target.href).match(/{"elm":"0.18/)) {
            // Elm delivers the data in the format
            // 'data:' + mime + ',' + encodeURIComponent(jsonString));
            var historyData = unescape(target.href.split(/,/)[1]);

            if (!this.allowDownload) {
              event.preventDefault();
            } // we have to post this data in Javascript, since doing so in Elm would cause the

            this.storeHistory(historyData);
            return this.allowDownload;
          }
        }
      }
    ]);

    return ElmRings;
  })();

export { ElmRings as default };
