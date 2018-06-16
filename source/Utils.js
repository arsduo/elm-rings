// This method gives us a tool to walk down an Elm history entry, processing all the Elm objects contained within per the provided transformation function. Whatever the function returns will become the value at that point.
//
// To simplify matters, this doesn't process primitive values. Additionally, while each value an
// Elm record (a plain Javascript object) is examined, the overall record itself is never passed to
// the block -- to examine/alter an Elm record, do so in the callback for whichever Elm object
// contains it. (All history entries are Message objects, so there's always an entry point.)
export function transformObject(entry, transformation) {
  if (typeof entry != "object") {
    return entry;
  } else if (entry.ctor) {
    // If you want to walk down sub-entries, call transformObject again within your transform
    // function
    return transformation(entry);
  } else {
    // Each value in an Elm record is examined on its own
    const result = {};
    Object.keys(entry).forEach(key => {
      result[key] = transformObject(entry[key], transformation);
    });
    return result;
  }
}
