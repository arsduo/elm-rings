export default {
  $: 0,
  a: {
    metadata: {
      versions: {
        elm: "0.19.0"
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
        $: "BookListReceived",
        a: {
          $: "Ok",
          a: {
            $: "::",
            a: {
              id: 1,
              title: "The Book of the City of Ladies",
              isbn: "0140446893"
            },
            b: {
              $: "::",
              a: {
                id: 2,
                title: "Good Strategy, Bad Strategy",
                isbn: "9780307886231"
              },
              b: {
                $: "::",
                a: {
                  id: 3,
                  title: "The Metamorphoses of Ovid",
                  isbn: "9780156001267"
                },
                b: {
                  $: "::",
                  a: {
                    id: 4,
                    title: "Parable of the Sower",
                    isbn: "9780446675505"
                  },
                  b: {
                    $: "::",
                    a: {
                      id: 5,
                      title: "Too Like the Lightning",
                      isbn: "9780765378019"
                    },
                    b: {
                      $: "::",
                      a: {
                        id: 6,
                        title: "The Fear of Barbarians",
                        isbn: "97802268065757"
                      },
                      b: {
                        $: "::",
                        a: {
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
        $: "QuoteListReceived",
        a: {
          $: "Ok",
          a: {
            $: "::",
            a: {
              text:
                "I am amused how Reason, despite being a visitor from Heaven, keeps referencing a particular Italian writer as her source."
            },
            b: {
              $: "::",
              a: {
                text:
                  '"certain writers…maintain…the world was a better place before human beings learned more sophisticated ways and simply lived off acorns" '
              },
              b: {
                $: "::",
                a: {
                  text:
                    "The idea that culture bad, state of nature good is thus at least 600 years old, and surely older."
                },
                b: {
                  $: "::",
                  a: {
                    text:
                      '"Don\'t hesitate to mix the mortar well in your inkpot and set to on the masonry work with great strokes of your pen."'
                  },
                  b: {
                    $: "::",
                    a: {
                      text:
                        "I can't tell if the author truly believes good upbringing will lead to dutiful children or if it's just what one had to write back then. "
                    },
                    b: {
                      $: "::",
                      a: {
                        text: '"A new Realm of Femininia is at hand"'
                      },
                      b: {
                        $: "::",
                        a: {
                          text:
                            'Another misogynist idea that\'s over 600 years old: women " cause trouble, lack affection, and gossip incessantly".'
                        },
                        b: {
                          $: "::",
                          a: {
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
        $: "BookChosen",
        a: {
          id: 5,
          title: "Too Like the Lightning",
          isbn: "9780765378019"
        }
      },
      {
        $: "QuoteListReceived",
        a: {
          $: "Ok",
          a: {
            $: "::",
            a: {
              id: {
                $: "Just",
                a: 48
              },
              text:
                '"that desperate Middle Age when images were objects of utility more than art."',
              page: {
                $: "Just",
                a: "232"
              },
              kind: {
                $: "DirectQuote"
              },
              bookId: 5
            },
            b: {
              $: "::",
              a: {
                id: {
                  $: "Just",
                  a: 49
                },
                text:
                  "One of the most striking aspects to this book's world is how alien the flows of information and trust are. It's coherent, just alien.",
                page: {
                  $: "Just",
                  a: "161"
                },
                kind: {
                  $: "Thought"
                },
                bookId: 5
              },
              b: {
                $: "::",
                a: {
                  id: {
                    $: "Just",
                    a: 54
                  },
                  text: '"the disapproval of a nun is extremely powerful"',
                  page: {
                    $: "Just",
                    a: "304"
                  },
                  kind: {
                    $: "DirectQuote"
                  },
                  bookId: 5
                },
                b: {
                  $: "::",
                  a: {
                    id: {
                      $: "Just",
                      a: 55
                    },
                    text:
                      '"Celibacy is the most extreme of sexual perversions."',
                    page: {
                      $: "Just",
                      a: "305"
                    },
                    kind: {
                      $: "DirectQuote"
                    },
                    bookId: 5
                  },
                  b: {
                    $: "::",
                    a: {
                      id: {
                        $: "Just",
                        a: 56
                      },
                      text:
                        '"lips which had tasted many vitamins but never candy"',
                      page: {
                        $: "Just",
                        a: "357"
                      },
                      kind: {
                        $: "DirectQuote"
                      },
                      bookId: 5
                    },
                    b: {
                      $: "::",
                      a: {
                        id: {
                          $: "Just",
                          a: 57
                        },
                        text:
                          '"words with only one chance to persuade, or fail and perish"',
                        page: {
                          $: "Just",
                          a: "358"
                        },
                        kind: {
                          $: "DirectQuote"
                        },
                        bookId: 5
                      },
                      b: {
                        $: "[]"
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
        $: "NewQuoteTextEntered",
        a: "a"
      },
      {
        $: "NewQuoteTextEntered",
        a: "ab"
      },
      {
        $: "NewQuoteTextEntered",
        a: "abc"
      }
    ]
  }
};
