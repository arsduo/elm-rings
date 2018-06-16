import sanitizeElmHistory from "../source/HistorySanitizer.js";
import historyFixture from "./fixtures/elm-history.js";

describe("sanitizeElmHistory", () => {
  describe("with a simple example", () => {
    let historyData, watchWords;

    beforeEach(() => {
      historyData = {
        history: [
          {
            ctor: "MySecretData",
            _0: "access_token",
            _1: { password: "myP@ssw0rd", expiration: "tomorrow" }
          }
        ]
      };
      watchWords = ["MySecretData", "password"];
    });

    const sanitize = elmObjectOrRecord => {
      if (elmObjectOrRecord.ctor == "MySecretData") {
        // replace the access token
        // make sure to return the updated object!
        return { ...elmObjectOrRecord, _0: "[FILTERED]" };
      } else {
        // we have the record
        return { ...elmObjectOrRecord, password: "[FILTERED]" };
      }
    };

    it("sanitizes properly", () => {
      expect(
        sanitizeElmHistory(historyData, watchWords, sanitize).history
      ).toEqual([
        {
          ctor: "MySecretData",
          _0: "[FILTERED]",
          _1: { password: "[FILTERED]", expiration: "tomorrow" }
        }
      ]);
    });
  });

  describe("with a real example", () => {
    let watchWords;
    beforeEach(() => {
      // one constructor for an Elm type, one field in a record
      watchWords = ["NewQuote", "isbn"];
    });
    const sanitize = elmObjectOrRecord => {
      if (/NewQuote/.test(elmObjectOrRecord.ctor)) {
        return { ...elmObjectOrRecord, _0: "[FILTERED]" };
      } else {
        // it's an ISBN value in a record
        const result = {};
        Object.keys(elmObjectOrRecord).forEach(key => {
          result[key] = key == "isbn" ? "[FILTERED]" : elmObjectOrRecord[key];
        });
        return result;
      }
    };

    it("properly sanitizes the history", () => {
      expect(
        sanitizeElmHistory(historyFixture, watchWords, sanitize).history
      ).toEqual([
        {
          ctor: "BookListReceived",
          _0: {
            ctor: "Ok",
            _0: {
              ctor: "::",
              _0: {
                id: 1,
                title: "The Book of the City of Ladies",
                isbn: "[FILTERED]"
              },
              _1: {
                ctor: "::",
                _0: {
                  id: 2,
                  title: "Good Strategy, Bad Strategy",
                  isbn: "[FILTERED]"
                },
                _1: {
                  ctor: "::",
                  _0: {
                    id: 3,
                    title: "The Metamorphoses of Ovid",
                    isbn: "[FILTERED]"
                  },
                  _1: {
                    ctor: "::",
                    _0: {
                      id: 4,
                      title: "Parable of the Sower",
                      isbn: "[FILTERED]"
                    },
                    _1: {
                      ctor: "::",
                      _0: {
                        id: 5,
                        title: "Too Like the Lightning",
                        isbn: "[FILTERED]"
                      },
                      _1: {
                        ctor: "::",
                        _0: {
                          id: 6,
                          title: "The Fear of Barbarians",
                          isbn: "[FILTERED]"
                        },
                        _1: {
                          ctor: "::",
                          _0: {
                            id: 7,
                            title: "Evicted",
                            isbn: "[FILTERED]"
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        {
          ctor: "QuoteListReceived",
          _0: {
            ctor: "Ok",
            _0: {
              ctor: "::",
              _0: {
                text:
                  "I am amused how Reason, despite being a visitor from Heaven, keeps referencing a particular Italian writer as her source."
              },
              _1: {
                ctor: "::",
                _0: {
                  text:
                    '"certain writers…maintain…the world was a better place before human beings learned more sophisticated ways and simply lived off acorns" '
                },
                _1: {
                  ctor: "::",
                  _0: {
                    text:
                      "The idea that culture bad, state of nature good is thus at least 600 years old, and surely older."
                  },
                  _1: {
                    ctor: "::",
                    _0: {
                      text:
                        '"Don\'t hesitate to mix the mortar well in your inkpot and set to on the masonry work with great strokes of your pen."'
                    },
                    _1: {
                      ctor: "::",
                      _0: {
                        text:
                          "I can't tell if the author truly believes good upbringing will lead to dutiful children or if it's just what one had to write back then. "
                      },
                      _1: {
                        ctor: "::",
                        _0: { text: '"A new Realm of Femininia is at hand"' },
                        _1: {
                          ctor: "::",
                          _0: {
                            text:
                              'Another misogynist idea that\'s over 600 years old: women " cause trouble, lack affection, and gossip incessantly".'
                          },
                          _1: {
                            ctor: "::",
                            _0: {
                              text:
                                'This translation uses the word "werewolf", but the Latin is literally "ambiguous wolf." 🐺\u{1F937}'
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        {
          ctor: "BookChosen",
          _0: { id: 5, title: "Too Like the Lightning", isbn: "[FILTERED]" }
        },
        {
          ctor: "QuoteListReceived",
          _0: {
            ctor: "Ok",
            _0: {
              ctor: "::",
              _0: {
                id: { ctor: "Just", _0: 48 },
                text:
                  '"that desperate Middle Age when images were objects of utility more than art."',
                page: { ctor: "Just", _0: "232" },
                kind: { ctor: "DirectQuote" },
                bookId: 5
              },
              _1: {
                ctor: "::",
                _0: {
                  id: { ctor: "Just", _0: 49 },
                  text:
                    "One of the most striking aspects to this book's world is how alien the flows of information and trust are. It's coherent, just alien.",
                  page: { ctor: "Just", _0: "161" },
                  kind: { ctor: "Thought" },
                  bookId: 5
                },
                _1: {
                  ctor: "::",
                  _0: {
                    id: { ctor: "Just", _0: 54 },
                    text: '"the disapproval of a nun is extremely powerful"',
                    page: { ctor: "Just", _0: "304" },
                    kind: { ctor: "DirectQuote" },
                    bookId: 5
                  },
                  _1: {
                    ctor: "::",
                    _0: {
                      id: { ctor: "Just", _0: 55 },
                      text:
                        '"Celibacy is the most extreme of sexual perversions."',
                      page: { ctor: "Just", _0: "305" },
                      kind: { ctor: "DirectQuote" },
                      bookId: 5
                    },
                    _1: {
                      ctor: "::",
                      _0: {
                        id: { ctor: "Just", _0: 56 },
                        text:
                          '"lips which had tasted many vitamins but never candy"',
                        page: { ctor: "Just", _0: "357" },
                        kind: { ctor: "DirectQuote" },
                        bookId: 5
                      },
                      _1: {
                        ctor: "::",
                        _0: {
                          id: { ctor: "Just", _0: 57 },
                          text:
                            '"words with only one chance to persuade, or fail and perish"',
                          page: { ctor: "Just", _0: "358" },
                          kind: { ctor: "DirectQuote" },
                          bookId: 5
                        },
                        _1: { ctor: "[]" }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        { ctor: "NewQuoteTextEntered", _0: "[FILTERED]" },
        { ctor: "NewQuoteTextEntered", _0: "[FILTERED]" },
        { ctor: "NewQuoteTextEntered", _0: "[FILTERED]" }
      ]);
    });
  });
});
