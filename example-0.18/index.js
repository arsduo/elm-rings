// index.js
"use strict";

import { Elm } from "./Main.elm";
const mountNode = document.getElementById("elm-app");
const app = Elm.Main.init({ node: document.getElementById("elm-app") });

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
    // in 0.18, $ => ctor and a: => _0:
    if (elmObjectOrRecord.$ == "UpdateSecretField") {
      return { ...elmObjectOrRecord, a: "[HIDDEN FROM YOUR PRYING EYES]" };
    }
  }
});

// start tracking history
elmHistoryRecorder.startTracking();

document
  .getElementById("update-now")
  .addEventListener("click", elmHistoryRecorder.exportHistory);
setTimeout(elmHistoryRecorder.exportHistory, 1000);
