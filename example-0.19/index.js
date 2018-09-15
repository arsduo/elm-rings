import { Elm } from "./src/Main.elm";

import ElmRings from "../source/ElmRings";

var storageKey = "store";
var flags = localStorage.getItem(storageKey);
var app = Elm.Main.init({ flags: flags });

app.ports.storeCache.subscribe(function(val) {
  if (val === null) {
    localStorage.removeItem(storageKey);
  } else {
    localStorage.setItem(storageKey, JSON.stringify(val));
  }

  // Report that the new session was stored succesfully.
  setTimeout(function() {
    app.ports.onStoreChange.send(val);
  }, 0);
});

// Whenever localStorage changes in another tab, report it if necessary.
window.addEventListener(
  "storage",
  function(event) {
    if (event.storageArea === localStorage && event.key === storageKey) {
      app.ports.onStoreChange.send(event.newValue);
    }
  },
  false
);

const elmHistoryRecorder = new ElmRings({
  allowDownload: true,
  trackingFrequency: 5000,
  storeHistory: historyDataAsJsonString => {
    console.log("New history is", JSON.parse(historyDataAsJsonString));
  },
  watchWords: ["ClickedTag"],
  historySanitizer: elmObjectOrRecord => {
    // in 0.18, $ => ctor and a: => _0:
    if (elmObjectOrRecord.$ == "ClickedTag") {
      return Object.assign({}, elmObjectOrRecord, {
        a: "[HIDDEN FROM YOUR PRYING EYES]"
      });
    }
  }
});

// start tracking history
elmHistoryRecorder.startTracking();

setTimeout(elmHistoryRecorder.exportHistory, 1000);
