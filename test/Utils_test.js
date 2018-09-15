import { transformObject } from "../source/Utils.js";

describe("Utils", () => {
  describe("transformObject", () => {
    let sampleObject;

    describe("for 0.19", () => {
      beforeEach(() => {
        sampleObject = {
          $: "TestMessage",
          a: "a primitive value",
          b: {
            type: "record",
            containing: {
              $: "AnObject",
              a: "SomeValue"
            }
          },
          c: {
            $: "AnotherObject"
          }
        };
      });

      it("transforms the entry according to the block provided", () => {
        const transformation = entry => {
          const result = {};
          Object.keys(entry).forEach(key => {
            if (key == "$") {
              result.constructor = entry.$;
            } else {
              result[key.toUpperCase() + "processed"] = transformObject(
                entry[key],
                transformation
              );
            }
          });

          return result;
        };

        expect(transformObject(sampleObject, transformation)).toEqual({
          constructor: "TestMessage",
          Aprocessed: "a primitive value",
          Bprocessed: {
            // records are handled differently than objects
            type: "record",
            containing: {
              // this shows that embedded objects are also processed
              constructor: "AnObject",
              Aprocessed: "SomeValue"
            }
          },
          Cprocessed: {
            constructor: "AnotherObject"
          }
        });
      });
    });

    describe("for 0.18", () => {
      beforeEach(() => {
        sampleObject = {
          ctor: "TestMessage",
          _0: "a primitive value",
          _1: {
            type: "record",
            containing: {
              ctor: "AnObject",
              _0: "SomeValue"
            }
          },
          _2: {
            ctor: "AnotherObject"
          }
        };
      });

      it("transforms the entry according to the block provided", () => {
        const transformation = entry => {
          const result = {};
          Object.keys(entry).forEach(key => {
            if (key == "ctor") {
              result.constructor = entry.ctor;
            } else {
              result[key.toUpperCase() + "processed"] = transformObject(
                entry[key],
                transformation
              );
            }
          });

          return result;
        };

        expect(transformObject(sampleObject, transformation)).toEqual({
          constructor: "TestMessage",
          _0processed: "a primitive value",
          _1processed: {
            // records are handled differently than objects
            type: "record",
            containing: {
              // this shows that embedded objects are also processed
              constructor: "AnObject",
              _0processed: "SomeValue"
            }
          },
          _2processed: {
            constructor: "AnotherObject"
          }
        });
      });
    });
  });
});
