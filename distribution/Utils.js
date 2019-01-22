function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj &&
        typeof Symbol === "function" &&
        obj.constructor === Symbol &&
        obj !== Symbol.prototype
        ? "symbol"
        : typeof obj;
    };
  }
  return _typeof(obj);
}

// This method gives us a tool to walk down an Elm history entry, processing all the Elm objects contained within per the provided transformation function. Whatever the function returns will become the value at that point.
//
// To simplify matters, this doesn't process primitive values. Additionally, while each value an
// Elm record (a plain Javascript object) is examined, the overall record itself is never passed to
// the block -- to examine/alter an Elm record, do so in the callback for whichever Elm object
// contains it. (All history entries are Message objects, so there's always an entry point.)
export function transformObject(entry, transformation) {
  if (!entry) {
    return entry;
  } else if (_typeof(entry) != "object") {
    return entry;
  } else if (entry.ctor || entry.$) {
    // If you want to walk down sub-entries, call transformObject again within your transform
    // function
    return transformation(entry);
  } else {
    // Each value in an Elm record is examined on its own
    var result = {};
    Object.keys(entry).forEach(function(key) {
      result[key] = transformObject(entry[key], transformation);
    });
    return result;
  }
}
