// index.js
"use strict";

import Elm from "./counter.elm";
const mountNode = document.getElementById("elm-app");
const app = Elm.Counter.embed(mountNode);

import ElmRings from "../source/ElmRings.js";
import JSONFormatter from "json-formatter-js";

const elmHistoryRecorder = new ElmRings({
  allowDownload: true,
  trackingFrequency: 10000,
  storeHistory: historyDataAsJsonString => {
    const newNode = new JSONFormatter(
      JSON.parse(historyDataAsJsonString),
      Infinity
    ).render();
    newNode.id = "history";
    document.getElementById("history").replaceWith(newNode);
  },
  watchWords: ["secret"],
  historySanitizer: elmObjectOrRecord => {
    if (elmObjectOrRecord.ctor == "UpdateSecretField") {
      return { ...elmObjectOrRecord, _0: "[HIDDEN FROM YOUR PRYING EYES]" };
    }
  }
});

// start tracking history
elmHistoryRecorder.startTracking();

document
  .getElementById("update-now")
  .addEventListener("click", elmHistoryRecorder.exportHistory);
setTimeout(elmHistoryRecorder.exportHistory, 1000);
