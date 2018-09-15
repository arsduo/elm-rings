// Given a raw Elm history object, a set of key terms to watch for (password, token,
// etc.), and a callback, sanitize a history so it doesn't contain sensitive information.
//
// This method will crawl down the history, sanitizing objects and records nested inside the
// history, up to and including entire history entries.  Whenever a watched word is detected in
// either an Elm object constructor or as an Elm record key, the callback will be called with that
// object or record. The callback's return value will be substituted for the original data.
//
//  As each Elm app will have such different entry structures that there's no easy to generalize this completely. The sanitizing function will have to detect what the content is and clean it appropriately.
//
//  For more information on the format Elm uses to export debugging history data, see an upcoming
//  blog post.
//
// Example:
//
//   // Let's say you have an Elm message like
//   // MySecretData "access_token" {password = "myP@ssw0rd", expiration = "tomorrow"}
//
//   // As an Elm history entry, this will look like
//   {"$": "MySecretData", "a": "access_token", "b": {"password": "myP@ssw0rd", "expiration": "tomorrow"}}
//   // for 0.18, replace $, a, b, etc. with ctor, _0, _1, etc.
//   {"ctor": "MySecretData", "_0": "access_token", "_1": {"password": "myP@ssw0rd", "expiration": "tomorrow"}}
//
//   // If we run
//   sanitizeElmHistory(historyData, ["MySecretData", "password"], function(elmObjectOrRecord) {
//    if (elmObjectOrRecord.$ == "MySecretData") {
//      // replace the access token
//      // make sure to return the updated object!
//      return {...elmObjectOrRecord, "a": "[FILTERED]"}
//    }
//    else {
//      // we have the record
//      return {...elmObjectOrRecord, "password": "[FILTERED]"}
//    }
//  })
//
//  // We'll receive back a sanitized entry:
//  {"$": "MySecretData", "a": "[FILTERED]", "b": {"password": "[FILTERED]", "expiration": "tomorrow"}}

import { transformObject } from "./Utils.js";

export default function sanitizeElmHistory(
  historyData,
  rawWatchWords,
  sanitizingCallback
) {
  const watchWords = rawWatchWords.map(word => {
    if (!(word instanceof RegExp)) {
      return new RegExp(word, "i");
    }
    return word;
  });

  const processData = historyEntries => {
    return historyEntries.map(entry => {
      return sanitizeObject(entry, watchWords, sanitizingCallback);
    });
  };

  if (historyData.a) {
    // 0.19 stores the data inside an Elm object, which we have to reconstruct
    return {
      ...historyData,
      a: {
        ...historyData.a,
        history: processData(historyData.a.history)
      }
    };
  } else {
    // 0.18 is simpler
    return {
      ...historyData,
      history: processData(historyData.history)
    };
  }
}

function sanitizeObject(object, watchWords, sanitizingCallback) {
  return transformObject(object, elmObject => {
    const constructor = elmObject.ctor || elmObject.$;
    // these are history entries, so they should have a constructor
    if (!constructor) {
      throw new Error(
        `Object without a constructor given to ElmRings, keys were: [${Object.keys(
          object
        ).join(", ")}]`
      );
    }

    // replace any records that need it
    const cleanedObject = {};
    Object.keys(elmObject).forEach(key => {
      const value = elmObject[key];
      if (value.ctor || value.$) {
        // we have an Elm object provided as an argument, so clean it
        cleanedObject[key] = sanitizeObject(
          value,
          watchWords,
          sanitizingCallback
        );
      } else if (typeof value == "object") {
        // We have an Elm record!
        // This is inefficient, but should hopefully be acceptable for the relatively low number of records
        // being processed.
        if (
          Object.keys(value).find(field =>
            watchWords.find(matcher => matcher.test(field))
          )
        ) {
          cleanedObject[key] = sanitizingCallback(value);
        } else {
          cleanedObject[key] = value;
        }
      } else {
        // raw values
        cleanedObject[key] = value;
      }
    });

    // now that we've sanitized any inner records or objects, sanitize the overall object (if
    // needed)

    if (watchWords.find(matcher => matcher.test(constructor))) {
      return sanitizingCallback(cleanedObject);
    }
    return cleanedObject;
  });
}
