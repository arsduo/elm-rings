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

import sanitizeElmHistory from "./HistorySanitizer.js";

var ElmRings =
  /*#__PURE__*/
  (function() {
    function ElmRings(_ref) {
      var allowDownload = _ref.allowDownload,
        shouldSendHistory = _ref.shouldSendHistory,
        storeHistory = _ref.storeHistory,
        trackingFrequency = _ref.trackingFrequency,
        watchWords = _ref.watchWords,
        historySanitizer = _ref.historySanitizer,
        playDangerousWithData = _ref.playDangerousWithData;
      var body =
        arguments.length > 1 && arguments[1] !== undefined
          ? arguments[1]
          : document.body;

      _classCallCheck(this, ElmRings);

      // we allow the body to be passed in to ensure that we can test all behavior
      // in normal usage this should never be necessary
      this.body = body;

      if (!this.body.querySelectorAll) {
        throw new Error(
          "This browser doesn't support querySelectorAll -- unable to capture Elm history via ElmRings."
        );
      }

      this.allowDownload = allowDownload; // if no shouldSend method is defined, always send it

      this.shouldSendHistory = function() {
        return !shouldSendHistory || shouldSendHistory();
      };

      this.storeHistory = storeHistory; // default to tracking every minute

      this.trackingFrequency = trackingFrequency || 60000;
      this.historySanitizer = historySanitizer;
      this.watchWords = watchWords;

      if ((!historySanitizer || !watchWords) && !playDangerousWithData) {
        console.warn(
          "ElmRings was not provided both watchWords and historySanitizer, so sensitive data will remain in your history exports. This is probably a bad idea -- be careful!"
        );
      } // ensure that when the callback is called, we still have access to our settings

      this.handleHistoryExport = this.handleHistoryExport.bind(this);
      this.exportHistory = this.exportHistory.bind(this);
    }

    _createClass(ElmRings, [
      {
        key: "startTracking",
        value: function startTracking() {
          this.body.addEventListener("click", this.handleHistoryExport);
          this.trackingInterval = setInterval(
            this.exportHistory,
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
        key: "exportHistory",
        value: function exportHistory() {
          var _this = this;

          // if the user is no longer logged in, don't try to get/post the history
          if (!this.shouldSendHistory()) {
            return;
          } // 0.18

          var exportButton = this.body.querySelectorAll(
            ".elm-mini-controls-import-export span"
          )[1];

          if (!exportButton) {
            // in 0.19, we don't have classes, so we have to figure it out by DOM structure and content 🧐
            // also, NodeList doesn't support Array functions like find 🤪
            var exportButtonCandidates = Array.prototype.slice.call(
              this.body.querySelectorAll("div > div > span")
            );
            exportButton = exportButtonCandidates.find(function(candidate) {
              return candidate.innerHTML === "Export";
            });
          }

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

          if (target.href && unescape(target.href).match(/{"elm":/)) {
            // Elm delivers the data in the format
            // 'data:' + mime + ',' + encodeURIComponent(jsonString));
            var historyData = unescape(target.href.split(/,/)[1]);

            if (this.watchWords && this.historySanitizer) {
              // sanitize the history before passing it on
              var historyObject = JSON.parse(historyData);
              var sanitizedHistory = sanitizeElmHistory(
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
    ]);

    return ElmRings;
  })();

export { ElmRings as default };
