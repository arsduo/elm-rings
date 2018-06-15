// Given a raw Elm history object, a set of key terms to watch for (password, token,
// etc.), and a callback, sanitize a history so it doesn't contain sensitive information.
//
// This method will crawl down the history, sanitizing objects and records nested inside the
// history, up to and including entire history entries.  Whenever a watched word is detected in
// either an Elm object constructor or as an Elm record key, the callback will be called with that
// object or record. The callback's return value will be substituted for the original data.
//
//  As each ELm app will have such different entry structures that there's no easy to generalize this completely. The sanitizing function will have to detect what the content is and clean it appropriately.
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
//   {"ctor": "MySecretData", "_0": "access_token", "_1": {"password": "myP@ssw0rd", "expiration": "tomorrow"}}
//
//   // If we run
//   sanitizeElmHistory(historyData, ["MySecretData", "password"], function(elmObjectOrRecord) {
//    if (elmObjectOrRecord.ctor == "MySecretData") {
//      // replace the access token
//      // make sure to return the updated object!
//      return {...elmObjectOrRecord, "_0": "[FILTERED]"}
//    }
//    else {
//      // we have the record
//      return {...elmObjectOrRecord, "password": "[FILTERED]"}
//    }
//  })
//
//  // We'll receive back a sanitized entry:
//  {"ctor": "MySecretData", "_0": "[FILTERED]", "_1": {"password": "[FILTERED]", "expiration": "tomorrow"}}

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

  return {
    ...historyData,
    history: historyData.history.map(entry =>
      sanitizeObject(entry, watchWords, sanitizingCallback)
    )
  };
}

function sanitizeObject(object, watchWords, sanitizingCallback) {
  return transformObject(object, elmObject => {
    const constructor = elmObject.ctor;
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
      if (value.ctor) {
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
