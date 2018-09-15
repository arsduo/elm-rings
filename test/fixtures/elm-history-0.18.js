export default {
  metadata: {
    versions: {
      elm: "0.18.0"
    },
    types: {
      message: "Messages.Msg",
      aliases: {
        "Http.Response": {
          args: ["body"],
          type:
            "{ url : String , status : { code : Int, message : String } , headers : Dict.Dict String String , body : body }"
        },
        "Models.Book.Book": {
          args: [],
          type: "{ id : Int, title : String, isbn : String }"
        },
        "Models.Quote.Quote": {
          args: [],
          type: "{ text : String }"
        }
      },
      unions: {
        "Dict.Dict": {
          args: ["k", "v"],
          tags: {
            RBEmpty_elm_builtin: ["Dict.LeafColor"],
            RBNode_elm_builtin: [
              "Dict.NColor",
              "k",
              "v",
              "Dict.Dict k v",
              "Dict.Dict k v"
            ]
          }
        },
        "Dict.LeafColor": {
          args: [],
          tags: {
            LBBlack: [],
            LBlack: []
          }
        },
        "Dict.NColor": {
          args: [],
          tags: {
            BBlack: [],
            Black: [],
            NBlack: [],
            Red: []
          }
        },
        "Http.Error": {
          args: [],
          tags: {
            BadPayload: ["String", "Http.Response String"],
            BadStatus: ["Http.Response String"],
            BadUrl: ["String"],
            NetworkError: [],
            Timeout: []
          }
        },
        "Maybe.Maybe": {
          args: ["a"],
          tags: {
            Just: ["a"],
            Nothing: []
          }
        },
        "Messages.Msg": {
          args: [],
          tags: {
            BookChoiceCleared: [],
            BookChosen: ["Models.Book.Book"],
            BookCreated: ["Result.Result Http.Error Models.Book.Book"],
            BookListReceived: [
              "Result.Result Http.Error (List Models.Book.Book)"
            ],
            BookSaved: [],
            NewBookISBNEntered: ["String"],
            NewBookTitleEntered: ["String"],
            NewQuoteKindSelected: ["Models.Quote.QuoteKind"],
            NewQuotePageEntered: ["String"],
            NewQuoteTextEntered: ["String"],
            QuoteCreated: ["Result.Result Http.Error Models.Quote.Quote"],
            QuoteListReceived: [
              "Result.Result Http.Error (List Models.Quote.Quote)"
            ],
            QuoteSaved: []
          }
        },
        "Models.Quote.QuoteKind": {
          args: [],
          tags: {
            DirectQuote: [],
            Thought: []
          }
        },
        "Result.Result": {
          args: ["error", "value"],
          tags: {
            Err: ["error"],
            Ok: ["value"]
          }
        }
      }
    }
  },
  history: [
    {
      ctor: "BookListReceived",
      _0: {
        ctor: "Ok",
        _0: {
          ctor: "::",
          _0: {
            id: 1,
            title: "The Book of the City of Ladies",
            isbn: "0140446893"
          },
          _1: {
            ctor: "::",
            _0: {
              id: 2,
              title: "Good Strategy, Bad Strategy",
              isbn: "9780307886231"
            },
            _1: {
              ctor: "::",
              _0: {
                id: 3,
                title: "The Metamorphoses of Ovid",
                isbn: "9780156001267"
              },
              _1: {
                ctor: "::",
                _0: {
                  id: 4,
                  title: "Parable of the Sower",
                  isbn: "9780446675505"
                },
                _1: {
                  ctor: "::",
                  _0: {
                    id: 5,
                    title: "Too Like the Lightning",
                    isbn: "9780765378019"
                  },
                  _1: {
                    ctor: "::",
                    _0: {
                      id: 6,
                      title: "The Fear of Barbarians",
                      isbn: "97802268065757"
                    },
                    _1: {
                      ctor: "::",
                      _0: {
                        id: 7,
                        title: "Evicted",
                        isbn: "9780553447453"
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
                    _0: {
                      text: '"A new Realm of Femininia is at hand"'
                    },
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
                            'This translation uses the word "werewolf", but the Latin is literally "ambiguous wolf." 🐺🤷'
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
      _0: {
        id: 5,
        title: "Too Like the Lightning",
        isbn: "9780765378019"
      }
    },
    {
      ctor: "QuoteListReceived",
      _0: {
        ctor: "Ok",
        _0: {
          ctor: "::",
          _0: {
            id: {
              ctor: "Just",
              _0: 48
            },
            text:
              '"that desperate Middle Age when images were objects of utility more than art."',
            page: {
              ctor: "Just",
              _0: "232"
            },
            kind: {
              ctor: "DirectQuote"
            },
            bookId: 5
          },
          _1: {
            ctor: "::",
            _0: {
              id: {
                ctor: "Just",
                _0: 49
              },
              text:
                "One of the most striking aspects to this book's world is how alien the flows of information and trust are. It's coherent, just alien.",
              page: {
                ctor: "Just",
                _0: "161"
              },
              kind: {
                ctor: "Thought"
              },
              bookId: 5
            },
            _1: {
              ctor: "::",
              _0: {
                id: {
                  ctor: "Just",
                  _0: 54
                },
                text: '"the disapproval of a nun is extremely powerful"',
                page: {
                  ctor: "Just",
                  _0: "304"
                },
                kind: {
                  ctor: "DirectQuote"
                },
                bookId: 5
              },
              _1: {
                ctor: "::",
                _0: {
                  id: {
                    ctor: "Just",
                    _0: 55
                  },
                  text: '"Celibacy is the most extreme of sexual perversions."',
                  page: {
                    ctor: "Just",
                    _0: "305"
                  },
                  kind: {
                    ctor: "DirectQuote"
                  },
                  bookId: 5
                },
                _1: {
                  ctor: "::",
                  _0: {
                    id: {
                      ctor: "Just",
                      _0: 56
                    },
                    text:
                      '"lips which had tasted many vitamins but never candy"',
                    page: {
                      ctor: "Just",
                      _0: "357"
                    },
                    kind: {
                      ctor: "DirectQuote"
                    },
                    bookId: 5
                  },
                  _1: {
                    ctor: "::",
                    _0: {
                      id: {
                        ctor: "Just",
                        _0: 57
                      },
                      text:
                        '"words with only one chance to persuade, or fail and perish"',
                      page: {
                        ctor: "Just",
                        _0: "358"
                      },
                      kind: {
                        ctor: "DirectQuote"
                      },
                      bookId: 5
                    },
                    _1: {
                      ctor: "[]"
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
      ctor: "NewQuoteTextEntered",
      _0: "a"
    },
    {
      ctor: "NewQuoteTextEntered",
      _0: "ab"
    },
    {
      ctor: "NewQuoteTextEntered",
      _0: "abc"
    }
  ]
};
