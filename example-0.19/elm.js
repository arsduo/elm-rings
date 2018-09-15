(function(scope) {
  "use strict";

  function F(arity, fun, wrapper) {
    wrapper.a = arity;
    wrapper.f = fun;
    return wrapper;
  }

  function F2(fun) {
    return F(2, fun, function(a) {
      return function(b) {
        return fun(a, b);
      };
    });
  }
  function F3(fun) {
    return F(3, fun, function(a) {
      return function(b) {
        return function(c) {
          return fun(a, b, c);
        };
      };
    });
  }
  function F4(fun) {
    return F(4, fun, function(a) {
      return function(b) {
        return function(c) {
          return function(d) {
            return fun(a, b, c, d);
          };
        };
      };
    });
  }
  function F5(fun) {
    return F(5, fun, function(a) {
      return function(b) {
        return function(c) {
          return function(d) {
            return function(e) {
              return fun(a, b, c, d, e);
            };
          };
        };
      };
    });
  }
  function F6(fun) {
    return F(6, fun, function(a) {
      return function(b) {
        return function(c) {
          return function(d) {
            return function(e) {
              return function(f) {
                return fun(a, b, c, d, e, f);
              };
            };
          };
        };
      };
    });
  }
  function F7(fun) {
    return F(7, fun, function(a) {
      return function(b) {
        return function(c) {
          return function(d) {
            return function(e) {
              return function(f) {
                return function(g) {
                  return fun(a, b, c, d, e, f, g);
                };
              };
            };
          };
        };
      };
    });
  }
  function F8(fun) {
    return F(8, fun, function(a) {
      return function(b) {
        return function(c) {
          return function(d) {
            return function(e) {
              return function(f) {
                return function(g) {
                  return function(h) {
                    return fun(a, b, c, d, e, f, g, h);
                  };
                };
              };
            };
          };
        };
      };
    });
  }
  function F9(fun) {
    return F(9, fun, function(a) {
      return function(b) {
        return function(c) {
          return function(d) {
            return function(e) {
              return function(f) {
                return function(g) {
                  return function(h) {
                    return function(i) {
                      return fun(a, b, c, d, e, f, g, h, i);
                    };
                  };
                };
              };
            };
          };
        };
      };
    });
  }

  function A2(fun, a, b) {
    return fun.a === 2 ? fun.f(a, b) : fun(a)(b);
  }
  function A3(fun, a, b, c) {
    return fun.a === 3 ? fun.f(a, b, c) : fun(a)(b)(c);
  }
  function A4(fun, a, b, c, d) {
    return fun.a === 4 ? fun.f(a, b, c, d) : fun(a)(b)(c)(d);
  }
  function A5(fun, a, b, c, d, e) {
    return fun.a === 5 ? fun.f(a, b, c, d, e) : fun(a)(b)(c)(d)(e);
  }
  function A6(fun, a, b, c, d, e, f) {
    return fun.a === 6 ? fun.f(a, b, c, d, e, f) : fun(a)(b)(c)(d)(e)(f);
  }
  function A7(fun, a, b, c, d, e, f, g) {
    return fun.a === 7 ? fun.f(a, b, c, d, e, f, g) : fun(a)(b)(c)(d)(e)(f)(g);
  }
  function A8(fun, a, b, c, d, e, f, g, h) {
    return fun.a === 8
      ? fun.f(a, b, c, d, e, f, g, h)
      : fun(a)(b)(c)(d)(e)(f)(g)(h);
  }
  function A9(fun, a, b, c, d, e, f, g, h, i) {
    return fun.a === 9
      ? fun.f(a, b, c, d, e, f, g, h, i)
      : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
  }

  console.warn(
    "Compiled in DEBUG mode. Follow the advice at https://elm-lang.org/0.19.0/optimize for better performance and smaller assets."
  );

  var _List_Nil_UNUSED = { $: 0 };
  var _List_Nil = { $: "[]" };

  function _List_Cons_UNUSED(hd, tl) {
    return { $: 1, a: hd, b: tl };
  }
  function _List_Cons(hd, tl) {
    return { $: "::", a: hd, b: tl };
  }

  var _List_cons = F2(_List_Cons);

  function _List_fromArray(arr) {
    var out = _List_Nil;
    for (var i = arr.length; i--; ) {
      out = _List_Cons(arr[i], out);
    }
    return out;
  }

  function _List_toArray(xs) {
    for (
      var out = [];
      xs.b;
      xs = xs.b // WHILE_CONS
    ) {
      out.push(xs.a);
    }
    return out;
  }

  var _List_map2 = F3(function(f, xs, ys) {
    for (
      var arr = [];
      xs.b && ys.b;
      xs = xs.b, ys = ys.b // WHILE_CONSES
    ) {
      arr.push(A2(f, xs.a, ys.a));
    }
    return _List_fromArray(arr);
  });

  var _List_map3 = F4(function(f, xs, ys, zs) {
    for (
      var arr = [];
      xs.b && ys.b && zs.b;
      xs = xs.b, ys = ys.b, zs = zs.b // WHILE_CONSES
    ) {
      arr.push(A3(f, xs.a, ys.a, zs.a));
    }
    return _List_fromArray(arr);
  });

  var _List_map4 = F5(function(f, ws, xs, ys, zs) {
    for (
      var arr = [];
      ws.b && xs.b && ys.b && zs.b;
      ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b // WHILE_CONSES
    ) {
      arr.push(A4(f, ws.a, xs.a, ys.a, zs.a));
    }
    return _List_fromArray(arr);
  });

  var _List_map5 = F6(function(f, vs, ws, xs, ys, zs) {
    for (
      var arr = [];
      vs.b && ws.b && xs.b && ys.b && zs.b;
      vs = vs.b, ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b // WHILE_CONSES
    ) {
      arr.push(A5(f, vs.a, ws.a, xs.a, ys.a, zs.a));
    }
    return _List_fromArray(arr);
  });

  var _List_sortBy = F2(function(f, xs) {
    return _List_fromArray(
      _List_toArray(xs).sort(function(a, b) {
        return _Utils_cmp(f(a), f(b));
      })
    );
  });

  var _List_sortWith = F2(function(f, xs) {
    return _List_fromArray(
      _List_toArray(xs).sort(function(a, b) {
        var ord = A2(f, a, b);
        return ord === elm$core$Basics$EQ
          ? 0
          : ord === elm$core$Basics$LT
            ? -1
            : 1;
      })
    );
  });

  // EQUALITY

  function _Utils_eq(x, y) {
    for (
      var pair, stack = [], isEqual = _Utils_eqHelp(x, y, 0, stack);
      isEqual && (pair = stack.pop());
      isEqual = _Utils_eqHelp(pair.a, pair.b, 0, stack)
    ) {}

    return isEqual;
  }

  function _Utils_eqHelp(x, y, depth, stack) {
    if (depth > 100) {
      stack.push(_Utils_Tuple2(x, y));
      return true;
    }

    if (x === y) {
      return true;
    }

    if (typeof x !== "object" || x === null || y === null) {
      typeof x === "function" && _Debug_crash(5);
      return false;
    }

    /**/
    if (x.$ === "Set_elm_builtin") {
      x = elm$core$Set$toList(x);
      y = elm$core$Set$toList(y);
    }
    if (x.$ === "RBNode_elm_builtin" || x.$ === "RBEmpty_elm_builtin") {
      x = elm$core$Dict$toList(x);
      y = elm$core$Dict$toList(y);
    }
    //*/

    /**_UNUSED/
	if (x.$ < 0)
	{
		x = elm$core$Dict$toList(x);
		y = elm$core$Dict$toList(y);
	}
	//*/

    for (var key in x) {
      if (!_Utils_eqHelp(x[key], y[key], depth + 1, stack)) {
        return false;
      }
    }
    return true;
  }

  var _Utils_equal = F2(_Utils_eq);
  var _Utils_notEqual = F2(function(a, b) {
    return !_Utils_eq(a, b);
  });

  // COMPARISONS

  // Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
  // the particular integer values assigned to LT, EQ, and GT.

  function _Utils_cmp(x, y, ord) {
    if (typeof x !== "object") {
      return x === y ? /*EQ*/ 0 : x < y ? /*LT*/ -1 : /*GT*/ 1;
    }

    /**/
    if (x instanceof String) {
      var a = x.valueOf();
      var b = y.valueOf();
      return a === b ? 0 : a < b ? -1 : 1;
    }
    //*/

    /**_UNUSED/
	if (!x.$)
	//*/
    /**/
    if (x.$[0] === "#") {
      //*/
      return (ord = _Utils_cmp(x.a, y.a))
        ? ord
        : (ord = _Utils_cmp(x.b, y.b))
          ? ord
          : _Utils_cmp(x.c, y.c);
    }

    // traverse conses until end of a list or a mismatch
    for (; x.b && y.b && !(ord = _Utils_cmp(x.a, y.a)); x = x.b, y = y.b) {} // WHILE_CONSES
    return ord || (x.b ? /*GT*/ 1 : y.b ? /*LT*/ -1 : /*EQ*/ 0);
  }

  var _Utils_lt = F2(function(a, b) {
    return _Utils_cmp(a, b) < 0;
  });
  var _Utils_le = F2(function(a, b) {
    return _Utils_cmp(a, b) < 1;
  });
  var _Utils_gt = F2(function(a, b) {
    return _Utils_cmp(a, b) > 0;
  });
  var _Utils_ge = F2(function(a, b) {
    return _Utils_cmp(a, b) >= 0;
  });

  var _Utils_compare = F2(function(x, y) {
    var n = _Utils_cmp(x, y);
    return n < 0
      ? elm$core$Basics$LT
      : n
        ? elm$core$Basics$GT
        : elm$core$Basics$EQ;
  });

  // COMMON VALUES

  var _Utils_Tuple0_UNUSED = 0;
  var _Utils_Tuple0 = { $: "#0" };

  function _Utils_Tuple2_UNUSED(a, b) {
    return { a: a, b: b };
  }
  function _Utils_Tuple2(a, b) {
    return { $: "#2", a: a, b: b };
  }

  function _Utils_Tuple3_UNUSED(a, b, c) {
    return { a: a, b: b, c: c };
  }
  function _Utils_Tuple3(a, b, c) {
    return { $: "#3", a: a, b: b, c: c };
  }

  function _Utils_chr_UNUSED(c) {
    return c;
  }
  function _Utils_chr(c) {
    return new String(c);
  }

  // RECORDS

  function _Utils_update(oldRecord, updatedFields) {
    var newRecord = {};

    for (var key in oldRecord) {
      newRecord[key] = oldRecord[key];
    }

    for (var key in updatedFields) {
      newRecord[key] = updatedFields[key];
    }

    return newRecord;
  }

  // APPEND

  var _Utils_append = F2(_Utils_ap);

  function _Utils_ap(xs, ys) {
    // append Strings
    if (typeof xs === "string") {
      return xs + ys;
    }

    // append Lists
    if (!xs.b) {
      return ys;
    }
    var root = _List_Cons(xs.a, ys);
    xs = xs.b;
    for (
      var curr = root;
      xs.b;
      xs = xs.b // WHILE_CONS
    ) {
      curr = curr.b = _List_Cons(xs.a, ys);
    }
    return root;
  }

  var _JsArray_empty = [];

  function _JsArray_singleton(value) {
    return [value];
  }

  function _JsArray_length(array) {
    return array.length;
  }

  var _JsArray_initialize = F3(function(size, offset, func) {
    var result = new Array(size);

    for (var i = 0; i < size; i++) {
      result[i] = func(offset + i);
    }

    return result;
  });

  var _JsArray_initializeFromList = F2(function(max, ls) {
    var result = new Array(max);

    for (var i = 0; i < max && ls.b; i++) {
      result[i] = ls.a;
      ls = ls.b;
    }

    result.length = i;
    return _Utils_Tuple2(result, ls);
  });

  var _JsArray_unsafeGet = F2(function(index, array) {
    return array[index];
  });

  var _JsArray_unsafeSet = F3(function(index, value, array) {
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++) {
      result[i] = array[i];
    }

    result[index] = value;
    return result;
  });

  var _JsArray_push = F2(function(value, array) {
    var length = array.length;
    var result = new Array(length + 1);

    for (var i = 0; i < length; i++) {
      result[i] = array[i];
    }

    result[length] = value;
    return result;
  });

  var _JsArray_foldl = F3(function(func, acc, array) {
    var length = array.length;

    for (var i = 0; i < length; i++) {
      acc = A2(func, array[i], acc);
    }

    return acc;
  });

  var _JsArray_foldr = F3(function(func, acc, array) {
    for (var i = array.length - 1; i >= 0; i--) {
      acc = A2(func, array[i], acc);
    }

    return acc;
  });

  var _JsArray_map = F2(function(func, array) {
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++) {
      result[i] = func(array[i]);
    }

    return result;
  });

  var _JsArray_indexedMap = F3(function(func, offset, array) {
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++) {
      result[i] = A2(func, offset + i, array[i]);
    }

    return result;
  });

  var _JsArray_slice = F3(function(from, to, array) {
    return array.slice(from, to);
  });

  var _JsArray_appendN = F3(function(n, dest, source) {
    var destLen = dest.length;
    var itemsToCopy = n - destLen;

    if (itemsToCopy > source.length) {
      itemsToCopy = source.length;
    }

    var size = destLen + itemsToCopy;
    var result = new Array(size);

    for (var i = 0; i < destLen; i++) {
      result[i] = dest[i];
    }

    for (var i = 0; i < itemsToCopy; i++) {
      result[i + destLen] = source[i];
    }

    return result;
  });

  // LOG

  var _Debug_log_UNUSED = F2(function(tag, value) {
    return value;
  });

  var _Debug_log = F2(function(tag, value) {
    console.log(tag + ": " + _Debug_toString(value));
    return value;
  });

  // TODOS

  function _Debug_todo(moduleName, region) {
    return function(message) {
      _Debug_crash(8, moduleName, region, message);
    };
  }

  function _Debug_todoCase(moduleName, region, value) {
    return function(message) {
      _Debug_crash(9, moduleName, region, value, message);
    };
  }

  // TO STRING

  function _Debug_toString_UNUSED(value) {
    return "<internals>";
  }

  function _Debug_toString(value) {
    return _Debug_toAnsiString(false, value);
  }

  function _Debug_toAnsiString(ansi, value) {
    if (typeof value === "function") {
      return _Debug_internalColor(ansi, "<function>");
    }

    if (typeof value === "boolean") {
      return _Debug_ctorColor(ansi, value ? "True" : "False");
    }

    if (typeof value === "number") {
      return _Debug_numberColor(ansi, value + "");
    }

    if (value instanceof String) {
      return _Debug_charColor(ansi, "'" + _Debug_addSlashes(value, true) + "'");
    }

    if (typeof value === "string") {
      return _Debug_stringColor(
        ansi,
        '"' + _Debug_addSlashes(value, false) + '"'
      );
    }

    if (typeof value === "object" && "$" in value) {
      var tag = value.$;

      if (typeof tag === "number") {
        return _Debug_internalColor(ansi, "<internals>");
      }

      if (tag[0] === "#") {
        var output = [];
        for (var k in value) {
          if (k === "$") continue;
          output.push(_Debug_toAnsiString(ansi, value[k]));
        }
        return "(" + output.join(",") + ")";
      }

      if (tag === "Set_elm_builtin") {
        return (
          _Debug_ctorColor(ansi, "Set") +
          _Debug_fadeColor(ansi, ".fromList") +
          " " +
          _Debug_toAnsiString(ansi, elm$core$Set$toList(value))
        );
      }

      if (tag === "RBNode_elm_builtin" || tag === "RBEmpty_elm_builtin") {
        return (
          _Debug_ctorColor(ansi, "Dict") +
          _Debug_fadeColor(ansi, ".fromList") +
          " " +
          _Debug_toAnsiString(ansi, elm$core$Dict$toList(value))
        );
      }

      if (tag === "Array_elm_builtin") {
        return (
          _Debug_ctorColor(ansi, "Array") +
          _Debug_fadeColor(ansi, ".fromList") +
          " " +
          _Debug_toAnsiString(ansi, elm$core$Array$toList(value))
        );
      }

      if (tag === "::" || tag === "[]") {
        var output = "[";

        value.b &&
          ((output += _Debug_toAnsiString(ansi, value.a)), (value = value.b));

        for (
          ;
          value.b;
          value = value.b // WHILE_CONS
        ) {
          output += "," + _Debug_toAnsiString(ansi, value.a);
        }
        return output + "]";
      }

      var output = "";
      for (var i in value) {
        if (i === "$") continue;
        var str = _Debug_toAnsiString(ansi, value[i]);
        var c0 = str[0];
        var parenless =
          c0 === "{" ||
          c0 === "(" ||
          c0 === "[" ||
          c0 === "<" ||
          c0 === '"' ||
          str.indexOf(" ") < 0;
        output += " " + (parenless ? str : "(" + str + ")");
      }
      return _Debug_ctorColor(ansi, tag) + output;
    }

    if (typeof value === "object") {
      var output = [];
      for (var key in value) {
        var field = key[0] === "_" ? key.slice(1) : key;
        output.push(
          _Debug_fadeColor(ansi, field) +
            " = " +
            _Debug_toAnsiString(ansi, value[key])
        );
      }
      if (output.length === 0) {
        return "{}";
      }
      return "{ " + output.join(", ") + " }";
    }

    return _Debug_internalColor(ansi, "<internals>");
  }

  function _Debug_addSlashes(str, isChar) {
    var s = str
      .replace(/\\/g, "\\\\")
      .replace(/\n/g, "\\n")
      .replace(/\t/g, "\\t")
      .replace(/\r/g, "\\r")
      .replace(/\v/g, "\\v")
      .replace(/\0/g, "\\0");

    if (isChar) {
      return s.replace(/\'/g, "\\'");
    } else {
      return s.replace(/\"/g, '\\"');
    }
  }

  function _Debug_ctorColor(ansi, string) {
    return ansi ? "\x1b[96m" + string + "\x1b[0m" : string;
  }

  function _Debug_numberColor(ansi, string) {
    return ansi ? "\x1b[95m" + string + "\x1b[0m" : string;
  }

  function _Debug_stringColor(ansi, string) {
    return ansi ? "\x1b[93m" + string + "\x1b[0m" : string;
  }

  function _Debug_charColor(ansi, string) {
    return ansi ? "\x1b[92m" + string + "\x1b[0m" : string;
  }

  function _Debug_fadeColor(ansi, string) {
    return ansi ? "\x1b[37m" + string + "\x1b[0m" : string;
  }

  function _Debug_internalColor(ansi, string) {
    return ansi ? "\x1b[94m" + string + "\x1b[0m" : string;
  }

  // CRASH

  function _Debug_crash_UNUSED(identifier) {
    throw new Error(
      "https://github.com/elm/core/blob/1.0.0/hints/" + identifier + ".md"
    );
  }

  function _Debug_crash(identifier, fact1, fact2, fact3, fact4) {
    switch (identifier) {
      case 0:
        throw new Error(
          'What node should I take over? In JavaScript I need something like:\n\n    Elm.Main.init({\n        node: document.getElementById("elm-node")\n    })\n\nYou need to do this with any Browser.sandbox or Browser.element program.'
        );

      case 1:
        throw new Error(
          "Browser.application programs cannot handle URLs like this:\n\n    " +
            document.location.href +
            "\n\nWhat is the root? The root of your file system? Try looking at this program with `elm reactor` or some other server."
        );

      case 2:
        var jsonErrorString = fact1;
        throw new Error(
          "Problem with the flags given to your Elm program on initialization.\n\n" +
            jsonErrorString
        );

      case 3:
        var portName = fact1;
        throw new Error(
          "There can only be one port named `" +
            portName +
            "`, but your program has multiple."
        );

      case 4:
        var portName = fact1;
        var problem = fact2;
        throw new Error(
          "Trying to send an unexpected type of value through port `" +
            portName +
            "`:\n" +
            problem
        );

      case 5:
        throw new Error(
          'Trying to use `(==)` on functions.\nThere is no way to know if functions are "the same" in the Elm sense.\nRead more about this at https://package.elm-lang.org/packages/elm/core/latest/Basics#== which describes why it is this way and what the better version will look like.'
        );

      case 6:
        var moduleName = fact1;
        throw new Error(
          "Your page is loading multiple Elm scripts with a module named " +
            moduleName +
            ". Maybe a duplicate script is getting loaded accidentally? If not, rename one of them so I know which is which!"
        );

      case 8:
        var moduleName = fact1;
        var region = fact2;
        var message = fact3;
        throw new Error(
          "TODO in module `" +
            moduleName +
            "` " +
            _Debug_regionToString(region) +
            "\n\n" +
            message
        );

      case 9:
        var moduleName = fact1;
        var region = fact2;
        var value = fact3;
        var message = fact4;
        throw new Error(
          "TODO in module `" +
            moduleName +
            "` from the `case` expression " +
            _Debug_regionToString(region) +
            "\n\nIt received the following value:\n\n    " +
            _Debug_toString(value).replace("\n", "\n    ") +
            "\n\nBut the branch that handles it says:\n\n    " +
            message.replace("\n", "\n    ")
        );

      case 10:
        throw new Error("Bug in https://github.com/elm/virtual-dom/issues");

      case 11:
        throw new Error("Cannot perform mod 0. Division by zero error.");
    }
  }

  function _Debug_regionToString(region) {
    if (region.start.line === region.end.line) {
      return "on line " + region.start.line;
    }
    return "on lines " + region.start.line + " through " + region.end.line;
  }

  // MATH

  var _Basics_add = F2(function(a, b) {
    return a + b;
  });
  var _Basics_sub = F2(function(a, b) {
    return a - b;
  });
  var _Basics_mul = F2(function(a, b) {
    return a * b;
  });
  var _Basics_fdiv = F2(function(a, b) {
    return a / b;
  });
  var _Basics_idiv = F2(function(a, b) {
    return (a / b) | 0;
  });
  var _Basics_pow = F2(Math.pow);

  var _Basics_remainderBy = F2(function(b, a) {
    return a % b;
  });

  // https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/divmodnote-letter.pdf
  var _Basics_modBy = F2(function(modulus, x) {
    var answer = x % modulus;
    return modulus === 0
      ? _Debug_crash(11)
      : (answer > 0 && modulus < 0) || (answer < 0 && modulus > 0)
        ? answer + modulus
        : answer;
  });

  // TRIGONOMETRY

  var _Basics_pi = Math.PI;
  var _Basics_e = Math.E;
  var _Basics_cos = Math.cos;
  var _Basics_sin = Math.sin;
  var _Basics_tan = Math.tan;
  var _Basics_acos = Math.acos;
  var _Basics_asin = Math.asin;
  var _Basics_atan = Math.atan;
  var _Basics_atan2 = F2(Math.atan2);

  // MORE MATH

  function _Basics_toFloat(x) {
    return x;
  }
  function _Basics_truncate(n) {
    return n | 0;
  }
  function _Basics_isInfinite(n) {
    return n === Infinity || n === -Infinity;
  }

  var _Basics_ceiling = Math.ceil;
  var _Basics_floor = Math.floor;
  var _Basics_round = Math.round;
  var _Basics_sqrt = Math.sqrt;
  var _Basics_log = Math.log;
  var _Basics_isNaN = isNaN;

  // BOOLEANS

  function _Basics_not(bool) {
    return !bool;
  }
  var _Basics_and = F2(function(a, b) {
    return a && b;
  });
  var _Basics_or = F2(function(a, b) {
    return a || b;
  });
  var _Basics_xor = F2(function(a, b) {
    return a !== b;
  });

  function _Char_toCode(char) {
    var code = char.charCodeAt(0);
    if (0xd800 <= code && code <= 0xdbff) {
      return (code - 0xd800) * 0x400 + char.charCodeAt(1) - 0xdc00 + 0x10000;
    }
    return code;
  }

  function _Char_fromCode(code) {
    return _Utils_chr(
      code < 0 || 0x10ffff < code
        ? "\uFFFD"
        : code <= 0xffff
          ? String.fromCharCode(code)
          : ((code -= 0x10000),
            String.fromCharCode(Math.floor(code / 0x400) + 0xd800) +
              String.fromCharCode((code % 0x400) + 0xdc00))
    );
  }

  function _Char_toUpper(char) {
    return _Utils_chr(char.toUpperCase());
  }

  function _Char_toLower(char) {
    return _Utils_chr(char.toLowerCase());
  }

  function _Char_toLocaleUpper(char) {
    return _Utils_chr(char.toLocaleUpperCase());
  }

  function _Char_toLocaleLower(char) {
    return _Utils_chr(char.toLocaleLowerCase());
  }

  var _String_cons = F2(function(chr, str) {
    return chr + str;
  });

  function _String_uncons(string) {
    var word = string.charCodeAt(0);
    return word
      ? elm$core$Maybe$Just(
          0xd800 <= word && word <= 0xdbff
            ? _Utils_Tuple2(_Utils_chr(string[0] + string[1]), string.slice(2))
            : _Utils_Tuple2(_Utils_chr(string[0]), string.slice(1))
        )
      : elm$core$Maybe$Nothing;
  }

  var _String_append = F2(function(a, b) {
    return a + b;
  });

  function _String_length(str) {
    return str.length;
  }

  var _String_map = F2(function(func, string) {
    var len = string.length;
    var array = new Array(len);
    var i = 0;
    while (i < len) {
      var word = string.charCodeAt(i);
      if (0xd800 <= word && word <= 0xdbff) {
        array[i] = func(_Utils_chr(string[i] + string[i + 1]));
        i += 2;
        continue;
      }
      array[i] = func(_Utils_chr(string[i]));
      i++;
    }
    return array.join("");
  });

  var _String_filter = F2(function(isGood, str) {
    var arr = [];
    var len = str.length;
    var i = 0;
    while (i < len) {
      var char = str[i];
      var word = str.charCodeAt(i);
      i++;
      if (0xd800 <= word && word <= 0xdbff) {
        char += str[i];
        i++;
      }

      if (isGood(_Utils_chr(char))) {
        arr.push(char);
      }
    }
    return arr.join("");
  });

  function _String_reverse(str) {
    var len = str.length;
    var arr = new Array(len);
    var i = 0;
    while (i < len) {
      var word = str.charCodeAt(i);
      if (0xd800 <= word && word <= 0xdbff) {
        arr[len - i] = str[i + 1];
        i++;
        arr[len - i] = str[i - 1];
        i++;
      } else {
        arr[len - i] = str[i];
        i++;
      }
    }
    return arr.join("");
  }

  var _String_foldl = F3(function(func, state, string) {
    var len = string.length;
    var i = 0;
    while (i < len) {
      var char = string[i];
      var word = string.charCodeAt(i);
      i++;
      if (0xd800 <= word && word <= 0xdbff) {
        char += string[i];
        i++;
      }
      state = A2(func, _Utils_chr(char), state);
    }
    return state;
  });

  var _String_foldr = F3(function(func, state, string) {
    var i = string.length;
    while (i--) {
      var char = string[i];
      var word = string.charCodeAt(i);
      if (0xdc00 <= word && word <= 0xdfff) {
        i--;
        char = string[i] + char;
      }
      state = A2(func, _Utils_chr(char), state);
    }
    return state;
  });

  var _String_split = F2(function(sep, str) {
    return str.split(sep);
  });

  var _String_join = F2(function(sep, strs) {
    return strs.join(sep);
  });

  var _String_slice = F3(function(start, end, str) {
    return str.slice(start, end);
  });

  function _String_trim(str) {
    return str.trim();
  }

  function _String_trimLeft(str) {
    return str.replace(/^\s+/, "");
  }

  function _String_trimRight(str) {
    return str.replace(/\s+$/, "");
  }

  function _String_words(str) {
    return _List_fromArray(str.trim().split(/\s+/g));
  }

  function _String_lines(str) {
    return _List_fromArray(str.split(/\r\n|\r|\n/g));
  }

  function _String_toUpper(str) {
    return str.toUpperCase();
  }

  function _String_toLower(str) {
    return str.toLowerCase();
  }

  var _String_any = F2(function(isGood, string) {
    var i = string.length;
    while (i--) {
      var char = string[i];
      var word = string.charCodeAt(i);
      if (0xdc00 <= word && word <= 0xdfff) {
        i--;
        char = string[i] + char;
      }
      if (isGood(_Utils_chr(char))) {
        return true;
      }
    }
    return false;
  });

  var _String_all = F2(function(isGood, string) {
    var i = string.length;
    while (i--) {
      var char = string[i];
      var word = string.charCodeAt(i);
      if (0xdc00 <= word && word <= 0xdfff) {
        i--;
        char = string[i] + char;
      }
      if (!isGood(_Utils_chr(char))) {
        return false;
      }
    }
    return true;
  });

  var _String_contains = F2(function(sub, str) {
    return str.indexOf(sub) > -1;
  });

  var _String_startsWith = F2(function(sub, str) {
    return str.indexOf(sub) === 0;
  });

  var _String_endsWith = F2(function(sub, str) {
    return (
      str.length >= sub.length &&
      str.lastIndexOf(sub) === str.length - sub.length
    );
  });

  var _String_indexes = F2(function(sub, str) {
    var subLen = sub.length;

    if (subLen < 1) {
      return _List_Nil;
    }

    var i = 0;
    var is = [];

    while ((i = str.indexOf(sub, i)) > -1) {
      is.push(i);
      i = i + subLen;
    }

    return _List_fromArray(is);
  });

  // TO STRING

  function _String_fromNumber(number) {
    return number + "";
  }

  // INT CONVERSIONS

  function _String_toInt(str) {
    var total = 0;
    var code0 = str.charCodeAt(0);
    var start = code0 == 0x2b /* + */ || code0 == 0x2d /* - */ ? 1 : 0;

    for (var i = start; i < str.length; ++i) {
      var code = str.charCodeAt(i);
      if (code < 0x30 || 0x39 < code) {
        return elm$core$Maybe$Nothing;
      }
      total = 10 * total + code - 0x30;
    }

    return i == start
      ? elm$core$Maybe$Nothing
      : elm$core$Maybe$Just(code0 == 0x2d ? -total : total);
  }

  // FLOAT CONVERSIONS

  function _String_toFloat(s) {
    // check if it is a hex, octal, or binary number
    if (s.length === 0 || /[\sxbo]/.test(s)) {
      return elm$core$Maybe$Nothing;
    }
    var n = +s;
    // faster isNaN check
    return n === n ? elm$core$Maybe$Just(n) : elm$core$Maybe$Nothing;
  }

  function _String_fromList(chars) {
    return _List_toArray(chars).join("");
  }

  /**/
  function _Json_errorToString(error) {
    return elm$json$Json$Decode$errorToString(error);
  }
  //*/

  // CORE DECODERS

  function _Json_succeed(msg) {
    return {
      $: 0,
      a: msg
    };
  }

  function _Json_fail(msg) {
    return {
      $: 1,
      a: msg
    };
  }

  var _Json_decodeInt = { $: 2 };
  var _Json_decodeBool = { $: 3 };
  var _Json_decodeFloat = { $: 4 };
  var _Json_decodeValue = { $: 5 };
  var _Json_decodeString = { $: 6 };

  function _Json_decodeList(decoder) {
    return { $: 7, b: decoder };
  }
  function _Json_decodeArray(decoder) {
    return { $: 8, b: decoder };
  }

  function _Json_decodeNull(value) {
    return { $: 9, c: value };
  }

  var _Json_decodeField = F2(function(field, decoder) {
    return {
      $: 10,
      d: field,
      b: decoder
    };
  });

  var _Json_decodeIndex = F2(function(index, decoder) {
    return {
      $: 11,
      e: index,
      b: decoder
    };
  });

  function _Json_decodeKeyValuePairs(decoder) {
    return {
      $: 12,
      b: decoder
    };
  }

  function _Json_mapMany(f, decoders) {
    return {
      $: 13,
      f: f,
      g: decoders
    };
  }

  var _Json_andThen = F2(function(callback, decoder) {
    return {
      $: 14,
      b: decoder,
      h: callback
    };
  });

  function _Json_oneOf(decoders) {
    return {
      $: 15,
      g: decoders
    };
  }

  // DECODING OBJECTS

  var _Json_map1 = F2(function(f, d1) {
    return _Json_mapMany(f, [d1]);
  });

  var _Json_map2 = F3(function(f, d1, d2) {
    return _Json_mapMany(f, [d1, d2]);
  });

  var _Json_map3 = F4(function(f, d1, d2, d3) {
    return _Json_mapMany(f, [d1, d2, d3]);
  });

  var _Json_map4 = F5(function(f, d1, d2, d3, d4) {
    return _Json_mapMany(f, [d1, d2, d3, d4]);
  });

  var _Json_map5 = F6(function(f, d1, d2, d3, d4, d5) {
    return _Json_mapMany(f, [d1, d2, d3, d4, d5]);
  });

  var _Json_map6 = F7(function(f, d1, d2, d3, d4, d5, d6) {
    return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6]);
  });

  var _Json_map7 = F8(function(f, d1, d2, d3, d4, d5, d6, d7) {
    return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7]);
  });

  var _Json_map8 = F9(function(f, d1, d2, d3, d4, d5, d6, d7, d8) {
    return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
  });

  // DECODE

  var _Json_runOnString = F2(function(decoder, string) {
    try {
      var value = JSON.parse(string);
      return _Json_runHelp(decoder, value);
    } catch (e) {
      return elm$core$Result$Err(
        A2(
          elm$json$Json$Decode$Failure,
          "This is not valid JSON! " + e.message,
          _Json_wrap(string)
        )
      );
    }
  });

  var _Json_run = F2(function(decoder, value) {
    return _Json_runHelp(decoder, _Json_unwrap(value));
  });

  function _Json_runHelp(decoder, value) {
    switch (decoder.$) {
      case 3:
        return typeof value === "boolean"
          ? elm$core$Result$Ok(value)
          : _Json_expecting("a BOOL", value);

      case 2:
        if (typeof value !== "number") {
          return _Json_expecting("an INT", value);
        }

        if (
          -2147483647 < value &&
          value < 2147483647 &&
          (value | 0) === value
        ) {
          return elm$core$Result$Ok(value);
        }

        if (isFinite(value) && !(value % 1)) {
          return elm$core$Result$Ok(value);
        }

        return _Json_expecting("an INT", value);

      case 4:
        return typeof value === "number"
          ? elm$core$Result$Ok(value)
          : _Json_expecting("a FLOAT", value);

      case 6:
        return typeof value === "string"
          ? elm$core$Result$Ok(value)
          : value instanceof String
            ? elm$core$Result$Ok(value + "")
            : _Json_expecting("a STRING", value);

      case 9:
        return value === null
          ? elm$core$Result$Ok(decoder.c)
          : _Json_expecting("null", value);

      case 5:
        return elm$core$Result$Ok(_Json_wrap(value));

      case 7:
        if (!Array.isArray(value)) {
          return _Json_expecting("a LIST", value);
        }
        return _Json_runArrayDecoder(decoder.b, value, _List_fromArray);

      case 8:
        if (!Array.isArray(value)) {
          return _Json_expecting("an ARRAY", value);
        }
        return _Json_runArrayDecoder(decoder.b, value, _Json_toElmArray);

      case 10:
        var field = decoder.d;
        if (typeof value !== "object" || value === null || !(field in value)) {
          return _Json_expecting(
            "an OBJECT with a field named `" + field + "`",
            value
          );
        }
        var result = _Json_runHelp(decoder.b, value[field]);
        return elm$core$Result$isOk(result)
          ? result
          : elm$core$Result$Err(
              A2(elm$json$Json$Decode$Field, field, result.a)
            );

      case 11:
        var index = decoder.e;
        if (!Array.isArray(value)) {
          return _Json_expecting("an ARRAY", value);
        }
        if (index >= value.length) {
          return _Json_expecting(
            "a LONGER array. Need index " +
              index +
              " but only see " +
              value.length +
              " entries",
            value
          );
        }
        var result = _Json_runHelp(decoder.b, value[index]);
        return elm$core$Result$isOk(result)
          ? result
          : elm$core$Result$Err(
              A2(elm$json$Json$Decode$Index, index, result.a)
            );

      case 12:
        if (
          typeof value !== "object" ||
          value === null ||
          Array.isArray(value)
        ) {
          return _Json_expecting("an OBJECT", value);
        }

        var keyValuePairs = _List_Nil;
        // TODO test perf of Object.keys and switch when support is good enough
        for (var key in value) {
          if (value.hasOwnProperty(key)) {
            var result = _Json_runHelp(decoder.b, value[key]);
            if (!elm$core$Result$isOk(result)) {
              return elm$core$Result$Err(
                A2(elm$json$Json$Decode$Field, key, result.a)
              );
            }
            keyValuePairs = _List_Cons(
              _Utils_Tuple2(key, result.a),
              keyValuePairs
            );
          }
        }
        return elm$core$Result$Ok(elm$core$List$reverse(keyValuePairs));

      case 13:
        var answer = decoder.f;
        var decoders = decoder.g;
        for (var i = 0; i < decoders.length; i++) {
          var result = _Json_runHelp(decoders[i], value);
          if (!elm$core$Result$isOk(result)) {
            return result;
          }
          answer = answer(result.a);
        }
        return elm$core$Result$Ok(answer);

      case 14:
        var result = _Json_runHelp(decoder.b, value);
        return !elm$core$Result$isOk(result)
          ? result
          : _Json_runHelp(decoder.h(result.a), value);

      case 15:
        var errors = _List_Nil;
        for (
          var temp = decoder.g;
          temp.b;
          temp = temp.b // WHILE_CONS
        ) {
          var result = _Json_runHelp(temp.a, value);
          if (elm$core$Result$isOk(result)) {
            return result;
          }
          errors = _List_Cons(result.a, errors);
        }
        return elm$core$Result$Err(
          elm$json$Json$Decode$OneOf(elm$core$List$reverse(errors))
        );

      case 1:
        return elm$core$Result$Err(
          A2(elm$json$Json$Decode$Failure, decoder.a, _Json_wrap(value))
        );

      case 0:
        return elm$core$Result$Ok(decoder.a);
    }
  }

  function _Json_runArrayDecoder(decoder, value, toElmValue) {
    var len = value.length;
    var array = new Array(len);
    for (var i = 0; i < len; i++) {
      var result = _Json_runHelp(decoder, value[i]);
      if (!elm$core$Result$isOk(result)) {
        return elm$core$Result$Err(A2(elm$json$Json$Decode$Index, i, result.a));
      }
      array[i] = result.a;
    }
    return elm$core$Result$Ok(toElmValue(array));
  }

  function _Json_toElmArray(array) {
    return A2(elm$core$Array$initialize, array.length, function(i) {
      return array[i];
    });
  }

  function _Json_expecting(type, value) {
    return elm$core$Result$Err(
      A2(elm$json$Json$Decode$Failure, "Expecting " + type, _Json_wrap(value))
    );
  }

  // EQUALITY

  function _Json_equality(x, y) {
    if (x === y) {
      return true;
    }

    if (x.$ !== y.$) {
      return false;
    }

    switch (x.$) {
      case 0:
      case 1:
        return x.a === y.a;

      case 3:
      case 2:
      case 4:
      case 6:
      case 5:
        return true;

      case 9:
        return x.c === y.c;

      case 7:
      case 8:
      case 12:
        return _Json_equality(x.b, y.b);

      case 10:
        return x.d === y.d && _Json_equality(x.b, y.b);

      case 11:
        return x.e === y.e && _Json_equality(x.b, y.b);

      case 13:
        return x.f === y.f && _Json_listEquality(x.g, y.g);

      case 14:
        return x.h === y.h && _Json_equality(x.b, y.b);

      case 15:
        return _Json_listEquality(x.g, y.g);
    }
  }

  function _Json_listEquality(aDecoders, bDecoders) {
    var len = aDecoders.length;
    if (len !== bDecoders.length) {
      return false;
    }
    for (var i = 0; i < len; i++) {
      if (!_Json_equality(aDecoders[i], bDecoders[i])) {
        return false;
      }
    }
    return true;
  }

  // ENCODE

  var _Json_encode = F2(function(indentLevel, value) {
    return JSON.stringify(_Json_unwrap(value), null, indentLevel) + "";
  });

  function _Json_wrap(value) {
    return { $: 0, a: value };
  }
  function _Json_unwrap(value) {
    return value.a;
  }

  function _Json_wrap_UNUSED(value) {
    return value;
  }
  function _Json_unwrap_UNUSED(value) {
    return value;
  }

  function _Json_emptyArray() {
    return [];
  }
  function _Json_emptyObject() {
    return {};
  }

  var _Json_addField = F3(function(key, value, object) {
    object[key] = _Json_unwrap(value);
    return object;
  });

  function _Json_addEntry(func) {
    return F2(function(entry, array) {
      array.push(_Json_unwrap(func(entry)));
      return array;
    });
  }

  var _Json_encodeNull = _Json_wrap(null);

  // TASKS

  function _Scheduler_succeed(value) {
    return {
      $: 0,
      a: value
    };
  }

  function _Scheduler_fail(error) {
    return {
      $: 1,
      a: error
    };
  }

  function _Scheduler_binding(callback) {
    return {
      $: 2,
      b: callback,
      c: null
    };
  }

  var _Scheduler_andThen = F2(function(callback, task) {
    return {
      $: 3,
      b: callback,
      d: task
    };
  });

  var _Scheduler_onError = F2(function(callback, task) {
    return {
      $: 4,
      b: callback,
      d: task
    };
  });

  function _Scheduler_receive(callback) {
    return {
      $: 5,
      b: callback
    };
  }

  // PROCESSES

  var _Scheduler_guid = 0;

  function _Scheduler_rawSpawn(task) {
    var proc = {
      $: 0,
      e: _Scheduler_guid++,
      f: task,
      g: null,
      h: []
    };

    _Scheduler_enqueue(proc);

    return proc;
  }

  function _Scheduler_spawn(task) {
    return _Scheduler_binding(function(callback) {
      callback(_Scheduler_succeed(_Scheduler_rawSpawn(task)));
    });
  }

  function _Scheduler_rawSend(proc, msg) {
    proc.h.push(msg);
    _Scheduler_enqueue(proc);
  }

  var _Scheduler_send = F2(function(proc, msg) {
    return _Scheduler_binding(function(callback) {
      _Scheduler_rawSend(proc, msg);
      callback(_Scheduler_succeed(_Utils_Tuple0));
    });
  });

  function _Scheduler_kill(proc) {
    return _Scheduler_binding(function(callback) {
      var task = proc.f;
      if (task.$ === 2 && task.c) {
        task.c();
      }

      proc.f = null;

      callback(_Scheduler_succeed(_Utils_Tuple0));
    });
  }

  /* STEP PROCESSES

type alias Process =
  { $ : tag
  , id : unique_id
  , root : Task
  , stack : null | { $: SUCCEED | FAIL, a: callback, b: stack }
  , mailbox : [msg]
  }

*/

  var _Scheduler_working = false;
  var _Scheduler_queue = [];

  function _Scheduler_enqueue(proc) {
    _Scheduler_queue.push(proc);
    if (_Scheduler_working) {
      return;
    }
    _Scheduler_working = true;
    while ((proc = _Scheduler_queue.shift())) {
      _Scheduler_step(proc);
    }
    _Scheduler_working = false;
  }

  function _Scheduler_step(proc) {
    while (proc.f) {
      var rootTag = proc.f.$;
      if (rootTag === 0 || rootTag === 1) {
        while (proc.g && proc.g.$ !== rootTag) {
          proc.g = proc.g.i;
        }
        if (!proc.g) {
          return;
        }
        proc.f = proc.g.b(proc.f.a);
        proc.g = proc.g.i;
      } else if (rootTag === 2) {
        proc.f.c = proc.f.b(function(newRoot) {
          proc.f = newRoot;
          _Scheduler_enqueue(proc);
        });
        return;
      } else if (rootTag === 5) {
        if (proc.h.length === 0) {
          return;
        }
        proc.f = proc.f.b(proc.h.shift());
      } // if (rootTag === 3 || rootTag === 4)
      else {
        proc.g = {
          $: rootTag === 3 ? 0 : 1,
          b: proc.f.b,
          i: proc.g
        };
        proc.f = proc.f.d;
      }
    }
  }

  function _Process_sleep(time) {
    return _Scheduler_binding(function(callback) {
      var id = setTimeout(function() {
        callback(_Scheduler_succeed(_Utils_Tuple0));
      }, time);

      return function() {
        clearTimeout(id);
      };
    });
  }

  // PROGRAMS

  var _Platform_worker = F4(function(impl, flagDecoder, debugMetadata, args) {
    return _Platform_initialize(
      flagDecoder,
      args,
      impl.init,
      impl.update,
      impl.subscriptions,
      function() {
        return function() {};
      }
    );
  });

  // INITIALIZE A PROGRAM

  function _Platform_initialize(
    flagDecoder,
    args,
    init,
    update,
    subscriptions,
    stepperBuilder
  ) {
    var result = A2(
      _Json_run,
      flagDecoder,
      _Json_wrap(args ? args["flags"] : undefined)
    );
    elm$core$Result$isOk(result) ||
      _Debug_crash(2 /**/, _Json_errorToString(result.a) /**/);
    var managers = {};
    result = init(result.a);
    var model = result.a;
    var stepper = stepperBuilder(sendToApp, model);
    var ports = _Platform_setupEffects(managers, sendToApp);

    function sendToApp(msg, viewMetadata) {
      result = A2(update, msg, model);
      stepper((model = result.a), viewMetadata);
      _Platform_dispatchEffects(managers, result.b, subscriptions(model));
    }

    _Platform_dispatchEffects(managers, result.b, subscriptions(model));

    return ports ? { ports: ports } : {};
  }

  // TRACK PRELOADS
  //
  // This is used by code in elm/browser and elm/http
  // to register any HTTP requests that are triggered by init.
  //

  var _Platform_preload;

  function _Platform_registerPreload(url) {
    _Platform_preload.add(url);
  }

  // EFFECT MANAGERS

  var _Platform_effectManagers = {};

  function _Platform_setupEffects(managers, sendToApp) {
    var ports;

    // setup all necessary effect managers
    for (var key in _Platform_effectManagers) {
      var manager = _Platform_effectManagers[key];

      if (manager.a) {
        ports = ports || {};
        ports[key] = manager.a(key, sendToApp);
      }

      managers[key] = _Platform_instantiateManager(manager, sendToApp);
    }

    return ports;
  }

  function _Platform_createManager(init, onEffects, onSelfMsg, cmdMap, subMap) {
    return {
      b: init,
      c: onEffects,
      d: onSelfMsg,
      e: cmdMap,
      f: subMap
    };
  }

  function _Platform_instantiateManager(info, sendToApp) {
    var router = {
      g: sendToApp,
      h: undefined
    };

    var onEffects = info.c;
    var onSelfMsg = info.d;
    var cmdMap = info.e;
    var subMap = info.f;

    function loop(state) {
      return A2(
        _Scheduler_andThen,
        loop,
        _Scheduler_receive(function(msg) {
          var value = msg.a;

          if (msg.$ === 0) {
            return A3(onSelfMsg, router, value, state);
          }

          return cmdMap && subMap
            ? A4(onEffects, router, value.i, value.j, state)
            : A3(onEffects, router, cmdMap ? value.i : value.j, state);
        })
      );
    }

    return (router.h = _Scheduler_rawSpawn(
      A2(_Scheduler_andThen, loop, info.b)
    ));
  }

  // ROUTING

  var _Platform_sendToApp = F2(function(router, msg) {
    return _Scheduler_binding(function(callback) {
      router.g(msg);
      callback(_Scheduler_succeed(_Utils_Tuple0));
    });
  });

  var _Platform_sendToSelf = F2(function(router, msg) {
    return A2(_Scheduler_send, router.h, {
      $: 0,
      a: msg
    });
  });

  // BAGS

  function _Platform_leaf(home) {
    return function(value) {
      return {
        $: 1,
        k: home,
        l: value
      };
    };
  }

  function _Platform_batch(list) {
    return {
      $: 2,
      m: list
    };
  }

  var _Platform_map = F2(function(tagger, bag) {
    return {
      $: 3,
      n: tagger,
      o: bag
    };
  });

  // PIPE BAGS INTO EFFECT MANAGERS

  function _Platform_dispatchEffects(managers, cmdBag, subBag) {
    var effectsDict = {};
    _Platform_gatherEffects(true, cmdBag, effectsDict, null);
    _Platform_gatherEffects(false, subBag, effectsDict, null);

    for (var home in managers) {
      _Scheduler_rawSend(managers[home], {
        $: "fx",
        a: effectsDict[home] || { i: _List_Nil, j: _List_Nil }
      });
    }
  }

  function _Platform_gatherEffects(isCmd, bag, effectsDict, taggers) {
    switch (bag.$) {
      case 1:
        var home = bag.k;
        var effect = _Platform_toEffect(isCmd, home, taggers, bag.l);
        effectsDict[home] = _Platform_insert(isCmd, effect, effectsDict[home]);
        return;

      case 2:
        for (
          var list = bag.m;
          list.b;
          list = list.b // WHILE_CONS
        ) {
          _Platform_gatherEffects(isCmd, list.a, effectsDict, taggers);
        }
        return;

      case 3:
        _Platform_gatherEffects(isCmd, bag.o, effectsDict, {
          p: bag.n,
          q: taggers
        });
        return;
    }
  }

  function _Platform_toEffect(isCmd, home, taggers, value) {
    function applyTaggers(x) {
      for (var temp = taggers; temp; temp = temp.q) {
        x = temp.p(x);
      }
      return x;
    }

    var map = isCmd
      ? _Platform_effectManagers[home].e
      : _Platform_effectManagers[home].f;

    return A2(map, applyTaggers, value);
  }

  function _Platform_insert(isCmd, newEffect, effects) {
    effects = effects || { i: _List_Nil, j: _List_Nil };

    isCmd
      ? (effects.i = _List_Cons(newEffect, effects.i))
      : (effects.j = _List_Cons(newEffect, effects.j));

    return effects;
  }

  // PORTS

  function _Platform_checkPortName(name) {
    if (_Platform_effectManagers[name]) {
      _Debug_crash(3, name);
    }
  }

  // OUTGOING PORTS

  function _Platform_outgoingPort(name, converter) {
    _Platform_checkPortName(name);
    _Platform_effectManagers[name] = {
      e: _Platform_outgoingPortMap,
      r: converter,
      a: _Platform_setupOutgoingPort
    };
    return _Platform_leaf(name);
  }

  var _Platform_outgoingPortMap = F2(function(tagger, value) {
    return value;
  });

  function _Platform_setupOutgoingPort(name) {
    var subs = [];
    var converter = _Platform_effectManagers[name].r;

    // CREATE MANAGER

    var init = _Process_sleep(0);

    _Platform_effectManagers[name].b = init;
    _Platform_effectManagers[name].c = F3(function(router, cmdList, state) {
      for (
        ;
        cmdList.b;
        cmdList = cmdList.b // WHILE_CONS
      ) {
        // grab a separate reference to subs in case unsubscribe is called
        var currentSubs = subs;
        var value = _Json_unwrap(converter(cmdList.a));
        for (var i = 0; i < currentSubs.length; i++) {
          currentSubs[i](value);
        }
      }
      return init;
    });

    // PUBLIC API

    function subscribe(callback) {
      subs.push(callback);
    }

    function unsubscribe(callback) {
      // copy subs into a new array in case unsubscribe is called within a
      // subscribed callback
      subs = subs.slice();
      var index = subs.indexOf(callback);
      if (index >= 0) {
        subs.splice(index, 1);
      }
    }

    return {
      subscribe: subscribe,
      unsubscribe: unsubscribe
    };
  }

  // INCOMING PORTS

  function _Platform_incomingPort(name, converter) {
    _Platform_checkPortName(name);
    _Platform_effectManagers[name] = {
      f: _Platform_incomingPortMap,
      r: converter,
      a: _Platform_setupIncomingPort
    };
    return _Platform_leaf(name);
  }

  var _Platform_incomingPortMap = F2(function(tagger, finalTagger) {
    return function(value) {
      return tagger(finalTagger(value));
    };
  });

  function _Platform_setupIncomingPort(name, sendToApp) {
    var subs = _List_Nil;
    var converter = _Platform_effectManagers[name].r;

    // CREATE MANAGER

    var init = _Scheduler_succeed(null);

    _Platform_effectManagers[name].b = init;
    _Platform_effectManagers[name].c = F3(function(router, subList, state) {
      subs = subList;
      return init;
    });

    // PUBLIC API

    function send(incomingValue) {
      var result = A2(_Json_run, converter, _Json_wrap(incomingValue));

      elm$core$Result$isOk(result) || _Debug_crash(4, name, result.a);

      var value = result.a;
      for (
        var temp = subs;
        temp.b;
        temp = temp.b // WHILE_CONS
      ) {
        sendToApp(temp.a(value));
      }
    }

    return { send: send };
  }

  // EXPORT ELM MODULES
  //
  // Have DEBUG and PROD versions so that we can (1) give nicer errors in
  // debug mode and (2) not pay for the bits needed for that in prod mode.
  //

  function _Platform_export_UNUSED(exports) {
    scope["Elm"]
      ? _Platform_mergeExportsProd(scope["Elm"], exports)
      : (scope["Elm"] = exports);
  }

  function _Platform_mergeExportsProd(obj, exports) {
    for (var name in exports) {
      name in obj
        ? name == "init"
          ? _Debug_crash(6)
          : _Platform_mergeExportsProd(obj[name], exports[name])
        : (obj[name] = exports[name]);
    }
  }

  function _Platform_export(exports) {
    scope["Elm"]
      ? _Platform_mergeExportsDebug("Elm", scope["Elm"], exports)
      : (scope["Elm"] = exports);
  }

  function _Platform_mergeExportsDebug(moduleName, obj, exports) {
    for (var name in exports) {
      name in obj
        ? name == "init"
          ? _Debug_crash(6, moduleName)
          : _Platform_mergeExportsDebug(
              moduleName + "." + name,
              obj[name],
              exports[name]
            )
        : (obj[name] = exports[name]);
    }
  }

  // HELPERS

  var _VirtualDom_divertHrefToApp;

  var _VirtualDom_doc = typeof document !== "undefined" ? document : {};

  function _VirtualDom_appendChild(parent, child) {
    parent.appendChild(child);
  }

  var _VirtualDom_init = F4(function(
    virtualNode,
    flagDecoder,
    debugMetadata,
    args
  ) {
    // NOTE: this function needs _Platform_export available to work

    /**_UNUSED/
	var node = args['node'];
	//*/
    /**/
    var node = args && args["node"] ? args["node"] : _Debug_crash(0);
    //*/

    node.parentNode.replaceChild(
      _VirtualDom_render(virtualNode, function() {}),
      node
    );

    return {};
  });

  // TEXT

  function _VirtualDom_text(string) {
    return {
      $: 0,
      a: string
    };
  }

  // NODE

  var _VirtualDom_nodeNS = F2(function(namespace, tag) {
    return F2(function(factList, kidList) {
      for (
        var kids = [], descendantsCount = 0;
        kidList.b;
        kidList = kidList.b // WHILE_CONS
      ) {
        var kid = kidList.a;
        descendantsCount += kid.b || 0;
        kids.push(kid);
      }
      descendantsCount += kids.length;

      return {
        $: 1,
        c: tag,
        d: _VirtualDom_organizeFacts(factList),
        e: kids,
        f: namespace,
        b: descendantsCount
      };
    });
  });

  var _VirtualDom_node = _VirtualDom_nodeNS(undefined);

  // KEYED NODE

  var _VirtualDom_keyedNodeNS = F2(function(namespace, tag) {
    return F2(function(factList, kidList) {
      for (
        var kids = [], descendantsCount = 0;
        kidList.b;
        kidList = kidList.b // WHILE_CONS
      ) {
        var kid = kidList.a;
        descendantsCount += kid.b.b || 0;
        kids.push(kid);
      }
      descendantsCount += kids.length;

      return {
        $: 2,
        c: tag,
        d: _VirtualDom_organizeFacts(factList),
        e: kids,
        f: namespace,
        b: descendantsCount
      };
    });
  });

  var _VirtualDom_keyedNode = _VirtualDom_keyedNodeNS(undefined);

  // CUSTOM

  function _VirtualDom_custom(factList, model, render, diff) {
    return {
      $: 3,
      d: _VirtualDom_organizeFacts(factList),
      g: model,
      h: render,
      i: diff
    };
  }

  // MAP

  var _VirtualDom_map = F2(function(tagger, node) {
    return {
      $: 4,
      j: tagger,
      k: node,
      b: 1 + (node.b || 0)
    };
  });

  // LAZY

  function _VirtualDom_thunk(refs, thunk) {
    return {
      $: 5,
      l: refs,
      m: thunk,
      k: undefined
    };
  }

  var _VirtualDom_lazy = F2(function(func, a) {
    return _VirtualDom_thunk([func, a], function() {
      return func(a);
    });
  });

  var _VirtualDom_lazy2 = F3(function(func, a, b) {
    return _VirtualDom_thunk([func, a, b], function() {
      return A2(func, a, b);
    });
  });

  var _VirtualDom_lazy3 = F4(function(func, a, b, c) {
    return _VirtualDom_thunk([func, a, b, c], function() {
      return A3(func, a, b, c);
    });
  });

  var _VirtualDom_lazy4 = F5(function(func, a, b, c, d) {
    return _VirtualDom_thunk([func, a, b, c, d], function() {
      return A4(func, a, b, c, d);
    });
  });

  var _VirtualDom_lazy5 = F6(function(func, a, b, c, d, e) {
    return _VirtualDom_thunk([func, a, b, c, d, e], function() {
      return A5(func, a, b, c, d, e);
    });
  });

  var _VirtualDom_lazy6 = F7(function(func, a, b, c, d, e, f) {
    return _VirtualDom_thunk([func, a, b, c, d, e, f], function() {
      return A6(func, a, b, c, d, e, f);
    });
  });

  var _VirtualDom_lazy7 = F8(function(func, a, b, c, d, e, f, g) {
    return _VirtualDom_thunk([func, a, b, c, d, e, f, g], function() {
      return A7(func, a, b, c, d, e, f, g);
    });
  });

  var _VirtualDom_lazy8 = F9(function(func, a, b, c, d, e, f, g, h) {
    return _VirtualDom_thunk([func, a, b, c, d, e, f, g, h], function() {
      return A8(func, a, b, c, d, e, f, g, h);
    });
  });

  // FACTS

  var _VirtualDom_on = F2(function(key, handler) {
    return {
      $: "a0",
      n: key,
      o: handler
    };
  });
  var _VirtualDom_style = F2(function(key, value) {
    return {
      $: "a1",
      n: key,
      o: value
    };
  });
  var _VirtualDom_property = F2(function(key, value) {
    return {
      $: "a2",
      n: key,
      o: value
    };
  });
  var _VirtualDom_attribute = F2(function(key, value) {
    return {
      $: "a3",
      n: key,
      o: value
    };
  });
  var _VirtualDom_attributeNS = F3(function(namespace, key, value) {
    return {
      $: "a4",
      n: key,
      o: { f: namespace, o: value }
    };
  });

  // XSS ATTACK VECTOR CHECKS

  function _VirtualDom_noScript(tag) {
    return tag == "script" ? "p" : tag;
  }

  function _VirtualDom_noOnOrFormAction(key) {
    return /^(on|formAction$)/i.test(key) ? "data-" + key : key;
  }

  function _VirtualDom_noInnerHtmlOrFormAction(key) {
    return key == "innerHTML" || key == "formAction" ? "data-" + key : key;
  }

  function _VirtualDom_noJavaScriptUri_UNUSED(value) {
    return /^javascript:/i.test(value.replace(/\s/g, "")) ? "" : value;
  }

  function _VirtualDom_noJavaScriptUri(value) {
    return /^javascript:/i.test(value.replace(/\s/g, ""))
      ? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'
      : value;
  }

  function _VirtualDom_noJavaScriptOrHtmlUri_UNUSED(value) {
    return /^\s*(javascript:|data:text\/html)/i.test(value) ? "" : value;
  }

  function _VirtualDom_noJavaScriptOrHtmlUri(value) {
    return /^\s*(javascript:|data:text\/html)/i.test(value)
      ? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'
      : value;
  }

  // MAP FACTS

  var _VirtualDom_mapAttribute = F2(function(func, attr) {
    return attr.$ === "a0"
      ? A2(_VirtualDom_on, attr.n, _VirtualDom_mapHandler(func, attr.o))
      : attr;
  });

  function _VirtualDom_mapHandler(func, handler) {
    var tag = elm$virtual_dom$VirtualDom$toHandlerInt(handler);

    // 0 = Normal
    // 1 = MayStopPropagation
    // 2 = MayPreventDefault
    // 3 = Custom

    return {
      $: handler.$,
      a: !tag
        ? A2(elm$json$Json$Decode$map, func, handler.a)
        : A3(
            elm$json$Json$Decode$map2,
            tag < 3 ? _VirtualDom_mapEventTuple : _VirtualDom_mapEventRecord,
            elm$json$Json$Decode$succeed(func),
            handler.a
          )
    };
  }

  var _VirtualDom_mapEventTuple = F2(function(func, tuple) {
    return _Utils_Tuple2(func(tuple.a), tuple.b);
  });

  var _VirtualDom_mapEventRecord = F2(function(func, record) {
    return {
      message: func(record.message),
      stopPropagation: record.stopPropagation,
      preventDefault: record.preventDefault
    };
  });

  // ORGANIZE FACTS

  function _VirtualDom_organizeFacts(factList) {
    for (
      var facts = {};
      factList.b;
      factList = factList.b // WHILE_CONS
    ) {
      var entry = factList.a;

      var tag = entry.$;
      var key = entry.n;
      var value = entry.o;

      if (tag === "a2") {
        key === "className"
          ? _VirtualDom_addClass(facts, key, _Json_unwrap(value))
          : (facts[key] = _Json_unwrap(value));

        continue;
      }

      var subFacts = facts[tag] || (facts[tag] = {});
      tag === "a3" && key === "class"
        ? _VirtualDom_addClass(subFacts, key, value)
        : (subFacts[key] = value);
    }

    return facts;
  }

  function _VirtualDom_addClass(object, key, newClass) {
    var classes = object[key];
    object[key] = classes ? classes + " " + newClass : newClass;
  }

  // RENDER

  function _VirtualDom_render(vNode, eventNode) {
    var tag = vNode.$;

    if (tag === 5) {
      return _VirtualDom_render(vNode.k || (vNode.k = vNode.m()), eventNode);
    }

    if (tag === 0) {
      return _VirtualDom_doc.createTextNode(vNode.a);
    }

    if (tag === 4) {
      var subNode = vNode.k;
      var tagger = vNode.j;

      while (subNode.$ === 4) {
        typeof tagger !== "object"
          ? (tagger = [tagger, subNode.j])
          : tagger.push(subNode.j);

        subNode = subNode.k;
      }

      var subEventRoot = { j: tagger, p: eventNode };
      var domNode = _VirtualDom_render(subNode, subEventRoot);
      domNode.elm_event_node_ref = subEventRoot;
      return domNode;
    }

    if (tag === 3) {
      var domNode = vNode.h(vNode.g);
      _VirtualDom_applyFacts(domNode, eventNode, vNode.d);
      return domNode;
    }

    // at this point `tag` must be 1 or 2

    var domNode = vNode.f
      ? _VirtualDom_doc.createElementNS(vNode.f, vNode.c)
      : _VirtualDom_doc.createElement(vNode.c);

    if (_VirtualDom_divertHrefToApp && vNode.c == "a") {
      domNode.addEventListener("click", _VirtualDom_divertHrefToApp(domNode));
    }

    _VirtualDom_applyFacts(domNode, eventNode, vNode.d);

    for (var kids = vNode.e, i = 0; i < kids.length; i++) {
      _VirtualDom_appendChild(
        domNode,
        _VirtualDom_render(tag === 1 ? kids[i] : kids[i].b, eventNode)
      );
    }

    return domNode;
  }

  // APPLY FACTS

  function _VirtualDom_applyFacts(domNode, eventNode, facts) {
    for (var key in facts) {
      var value = facts[key];

      key === "a1"
        ? _VirtualDom_applyStyles(domNode, value)
        : key === "a0"
          ? _VirtualDom_applyEvents(domNode, eventNode, value)
          : key === "a3"
            ? _VirtualDom_applyAttrs(domNode, value)
            : key === "a4"
              ? _VirtualDom_applyAttrsNS(domNode, value)
              : (key !== "value" ||
                  key !== "checked" ||
                  domNode[key] !== value) &&
                (domNode[key] = value);
    }
  }

  // APPLY STYLES

  function _VirtualDom_applyStyles(domNode, styles) {
    var domNodeStyle = domNode.style;

    for (var key in styles) {
      domNodeStyle[key] = styles[key];
    }
  }

  // APPLY ATTRS

  function _VirtualDom_applyAttrs(domNode, attrs) {
    for (var key in attrs) {
      var value = attrs[key];
      value ? domNode.setAttribute(key, value) : domNode.removeAttribute(key);
    }
  }

  // APPLY NAMESPACED ATTRS

  function _VirtualDom_applyAttrsNS(domNode, nsAttrs) {
    for (var key in nsAttrs) {
      var pair = nsAttrs[key];
      var namespace = pair.f;
      var value = pair.o;

      value
        ? domNode.setAttributeNS(namespace, key, value)
        : domNode.removeAttributeNS(namespace, key);
    }
  }

  // APPLY EVENTS

  function _VirtualDom_applyEvents(domNode, eventNode, events) {
    var allCallbacks = domNode.elmFs || (domNode.elmFs = {});

    for (var key in events) {
      var newHandler = events[key];
      var oldCallback = allCallbacks[key];

      if (!newHandler) {
        domNode.removeEventListener(key, oldCallback);
        allCallbacks[key] = undefined;
        continue;
      }

      if (oldCallback) {
        var oldHandler = oldCallback.q;
        if (oldHandler.$ === newHandler.$) {
          oldCallback.q = newHandler;
          continue;
        }
        domNode.removeEventListener(key, oldCallback);
      }

      oldCallback = _VirtualDom_makeCallback(eventNode, newHandler);
      domNode.addEventListener(
        key,
        oldCallback,
        _VirtualDom_passiveSupported && {
          passive: elm$virtual_dom$VirtualDom$toHandlerInt(newHandler) < 2
        }
      );
      allCallbacks[key] = oldCallback;
    }
  }

  // PASSIVE EVENTS

  var _VirtualDom_passiveSupported;

  try {
    window.addEventListener(
      "t",
      null,
      Object.defineProperty({}, "passive", {
        get: function() {
          _VirtualDom_passiveSupported = true;
        }
      })
    );
  } catch (e) {}

  // EVENT HANDLERS

  function _VirtualDom_makeCallback(eventNode, initialHandler) {
    function callback(event) {
      var handler = callback.q;
      var result = _Json_runHelp(handler.a, event);

      if (!elm$core$Result$isOk(result)) {
        return;
      }

      var tag = elm$virtual_dom$VirtualDom$toHandlerInt(handler);

      // 0 = Normal
      // 1 = MayStopPropagation
      // 2 = MayPreventDefault
      // 3 = Custom

      var value = result.a;
      var message = !tag ? value : tag < 3 ? value.a : value.message;
      var stopPropagation =
        tag == 1 ? value.b : tag == 3 && value.stopPropagation;
      var currentEventNode = (stopPropagation && event.stopPropagation(),
      (tag == 2 ? value.b : tag == 3 && value.preventDefault) &&
        event.preventDefault(),
      eventNode);
      var tagger;
      var i;
      while ((tagger = currentEventNode.j)) {
        if (typeof tagger == "function") {
          message = tagger(message);
        } else {
          for (var i = tagger.length; i--; ) {
            message = tagger[i](message);
          }
        }
        currentEventNode = currentEventNode.p;
      }
      currentEventNode(message, stopPropagation); // stopPropagation implies isSync
    }

    callback.q = initialHandler;

    return callback;
  }

  function _VirtualDom_equalEvents(x, y) {
    return x.$ == y.$ && _Json_equality(x.a, y.a);
  }

  // DIFF

  // TODO: Should we do patches like in iOS?
  //
  // type Patch
  //   = At Int Patch
  //   | Batch (List Patch)
  //   | Change ...
  //
  // How could it not be better?
  //
  function _VirtualDom_diff(x, y) {
    var patches = [];
    _VirtualDom_diffHelp(x, y, patches, 0);
    return patches;
  }

  function _VirtualDom_pushPatch(patches, type, index, data) {
    var patch = {
      $: type,
      r: index,
      s: data,
      t: undefined,
      u: undefined
    };
    patches.push(patch);
    return patch;
  }

  function _VirtualDom_diffHelp(x, y, patches, index) {
    if (x === y) {
      return;
    }

    var xType = x.$;
    var yType = y.$;

    // Bail if you run into different types of nodes. Implies that the
    // structure has changed significantly and it's not worth a diff.
    if (xType !== yType) {
      if (xType === 1 && yType === 2) {
        y = _VirtualDom_dekey(y);
        yType = 1;
      } else {
        _VirtualDom_pushPatch(patches, 0, index, y);
        return;
      }
    }

    // Now we know that both nodes are the same $.
    switch (yType) {
      case 5:
        var xRefs = x.l;
        var yRefs = y.l;
        var i = xRefs.length;
        var same = i === yRefs.length;
        while (same && i--) {
          same = xRefs[i] === yRefs[i];
        }
        if (same) {
          y.k = x.k;
          return;
        }
        y.k = y.m();
        var subPatches = [];
        _VirtualDom_diffHelp(x.k, y.k, subPatches, 0);
        subPatches.length > 0 &&
          _VirtualDom_pushPatch(patches, 1, index, subPatches);
        return;

      case 4:
        // gather nested taggers
        var xTaggers = x.j;
        var yTaggers = y.j;
        var nesting = false;

        var xSubNode = x.k;
        while (xSubNode.$ === 4) {
          nesting = true;

          typeof xTaggers !== "object"
            ? (xTaggers = [xTaggers, xSubNode.j])
            : xTaggers.push(xSubNode.j);

          xSubNode = xSubNode.k;
        }

        var ySubNode = y.k;
        while (ySubNode.$ === 4) {
          nesting = true;

          typeof yTaggers !== "object"
            ? (yTaggers = [yTaggers, ySubNode.j])
            : yTaggers.push(ySubNode.j);

          ySubNode = ySubNode.k;
        }

        // Just bail if different numbers of taggers. This implies the
        // structure of the virtual DOM has changed.
        if (nesting && xTaggers.length !== yTaggers.length) {
          _VirtualDom_pushPatch(patches, 0, index, y);
          return;
        }

        // check if taggers are "the same"
        if (
          nesting
            ? !_VirtualDom_pairwiseRefEqual(xTaggers, yTaggers)
            : xTaggers !== yTaggers
        ) {
          _VirtualDom_pushPatch(patches, 2, index, yTaggers);
        }

        // diff everything below the taggers
        _VirtualDom_diffHelp(xSubNode, ySubNode, patches, index + 1);
        return;

      case 0:
        if (x.a !== y.a) {
          _VirtualDom_pushPatch(patches, 3, index, y.a);
        }
        return;

      case 1:
        _VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKids);
        return;

      case 2:
        _VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKeyedKids);
        return;

      case 3:
        if (x.h !== y.h) {
          _VirtualDom_pushPatch(patches, 0, index, y);
          return;
        }

        var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
        factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

        var patch = y.i(x.g, y.g);
        patch && _VirtualDom_pushPatch(patches, 5, index, patch);

        return;
    }
  }

  // assumes the incoming arrays are the same length
  function _VirtualDom_pairwiseRefEqual(as, bs) {
    for (var i = 0; i < as.length; i++) {
      if (as[i] !== bs[i]) {
        return false;
      }
    }

    return true;
  }

  function _VirtualDom_diffNodes(x, y, patches, index, diffKids) {
    // Bail if obvious indicators have changed. Implies more serious
    // structural changes such that it's not worth it to diff.
    if (x.c !== y.c || x.f !== y.f) {
      _VirtualDom_pushPatch(patches, 0, index, y);
      return;
    }

    var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
    factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

    diffKids(x, y, patches, index);
  }

  // DIFF FACTS

  // TODO Instead of creating a new diff object, it's possible to just test if
  // there *is* a diff. During the actual patch, do the diff again and make the
  // modifications directly. This way, there's no new allocations. Worth it?
  function _VirtualDom_diffFacts(x, y, category) {
    var diff;

    // look for changes and removals
    for (var xKey in x) {
      if (xKey === "a1" || xKey === "a0" || xKey === "a3" || xKey === "a4") {
        var subDiff = _VirtualDom_diffFacts(x[xKey], y[xKey] || {}, xKey);
        if (subDiff) {
          diff = diff || {};
          diff[xKey] = subDiff;
        }
        continue;
      }

      // remove if not in the new facts
      if (!(xKey in y)) {
        diff = diff || {};
        diff[xKey] = !category
          ? typeof x[xKey] === "string"
            ? ""
            : null
          : category === "a1"
            ? ""
            : category === "a0" || category === "a3"
              ? undefined
              : { f: x[xKey].f, o: undefined };

        continue;
      }

      var xValue = x[xKey];
      var yValue = y[xKey];

      // reference equal, so don't worry about it
      if (
        (xValue === yValue && xKey !== "value" && xKey !== "checked") ||
        (category === "a0" && _VirtualDom_equalEvents(xValue, yValue))
      ) {
        continue;
      }

      diff = diff || {};
      diff[xKey] = yValue;
    }

    // add new stuff
    for (var yKey in y) {
      if (!(yKey in x)) {
        diff = diff || {};
        diff[yKey] = y[yKey];
      }
    }

    return diff;
  }

  // DIFF KIDS

  function _VirtualDom_diffKids(xParent, yParent, patches, index) {
    var xKids = xParent.e;
    var yKids = yParent.e;

    var xLen = xKids.length;
    var yLen = yKids.length;

    // FIGURE OUT IF THERE ARE INSERTS OR REMOVALS

    if (xLen > yLen) {
      _VirtualDom_pushPatch(patches, 6, index, {
        v: yLen,
        i: xLen - yLen
      });
    } else if (xLen < yLen) {
      _VirtualDom_pushPatch(patches, 7, index, {
        v: xLen,
        e: yKids
      });
    }

    // PAIRWISE DIFF EVERYTHING ELSE

    for (var minLen = xLen < yLen ? xLen : yLen, i = 0; i < minLen; i++) {
      var xKid = xKids[i];
      _VirtualDom_diffHelp(xKid, yKids[i], patches, ++index);
      index += xKid.b || 0;
    }
  }

  // KEYED DIFF

  function _VirtualDom_diffKeyedKids(xParent, yParent, patches, rootIndex) {
    var localPatches = [];

    var changes = {}; // Dict String Entry
    var inserts = []; // Array { index : Int, entry : Entry }
    // type Entry = { tag : String, vnode : VNode, index : Int, data : _ }

    var xKids = xParent.e;
    var yKids = yParent.e;
    var xLen = xKids.length;
    var yLen = yKids.length;
    var xIndex = 0;
    var yIndex = 0;

    var index = rootIndex;

    while (xIndex < xLen && yIndex < yLen) {
      var x = xKids[xIndex];
      var y = yKids[yIndex];

      var xKey = x.a;
      var yKey = y.a;
      var xNode = x.b;
      var yNode = y.b;

      // check if keys match

      if (xKey === yKey) {
        index++;
        _VirtualDom_diffHelp(xNode, yNode, localPatches, index);
        index += xNode.b || 0;

        xIndex++;
        yIndex++;
        continue;
      }

      // look ahead 1 to detect insertions and removals.

      var xNext = xKids[xIndex + 1];
      var yNext = yKids[yIndex + 1];

      if (xNext) {
        var xNextKey = xNext.a;
        var xNextNode = xNext.b;
        var oldMatch = yKey === xNextKey;
      }

      if (yNext) {
        var yNextKey = yNext.a;
        var yNextNode = yNext.b;
        var newMatch = xKey === yNextKey;
      }

      // swap x and y
      if (newMatch && oldMatch) {
        index++;
        _VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
        _VirtualDom_insertNode(
          changes,
          localPatches,
          xKey,
          yNode,
          yIndex,
          inserts
        );
        index += xNode.b || 0;

        index++;
        _VirtualDom_removeNode(changes, localPatches, xKey, xNextNode, index);
        index += xNextNode.b || 0;

        xIndex += 2;
        yIndex += 2;
        continue;
      }

      // insert y
      if (newMatch) {
        index++;
        _VirtualDom_insertNode(
          changes,
          localPatches,
          yKey,
          yNode,
          yIndex,
          inserts
        );
        _VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
        index += xNode.b || 0;

        xIndex += 1;
        yIndex += 2;
        continue;
      }

      // remove x
      if (oldMatch) {
        index++;
        _VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
        index += xNode.b || 0;

        index++;
        _VirtualDom_diffHelp(xNextNode, yNode, localPatches, index);
        index += xNextNode.b || 0;

        xIndex += 2;
        yIndex += 1;
        continue;
      }

      // remove x, insert y
      if (xNext && xNextKey === yNextKey) {
        index++;
        _VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
        _VirtualDom_insertNode(
          changes,
          localPatches,
          yKey,
          yNode,
          yIndex,
          inserts
        );
        index += xNode.b || 0;

        index++;
        _VirtualDom_diffHelp(xNextNode, yNextNode, localPatches, index);
        index += xNextNode.b || 0;

        xIndex += 2;
        yIndex += 2;
        continue;
      }

      break;
    }

    // eat up any remaining nodes with removeNode and insertNode

    while (xIndex < xLen) {
      index++;
      var x = xKids[xIndex];
      var xNode = x.b;
      _VirtualDom_removeNode(changes, localPatches, x.a, xNode, index);
      index += xNode.b || 0;
      xIndex++;
    }

    while (yIndex < yLen) {
      var endInserts = endInserts || [];
      var y = yKids[yIndex];
      _VirtualDom_insertNode(
        changes,
        localPatches,
        y.a,
        y.b,
        undefined,
        endInserts
      );
      yIndex++;
    }

    if (localPatches.length > 0 || inserts.length > 0 || endInserts) {
      _VirtualDom_pushPatch(patches, 8, rootIndex, {
        w: localPatches,
        x: inserts,
        y: endInserts
      });
    }
  }

  // CHANGES FROM KEYED DIFF

  var _VirtualDom_POSTFIX = "_elmW6BL";

  function _VirtualDom_insertNode(
    changes,
    localPatches,
    key,
    vnode,
    yIndex,
    inserts
  ) {
    var entry = changes[key];

    // never seen this key before
    if (!entry) {
      entry = {
        c: 0,
        z: vnode,
        r: yIndex,
        s: undefined
      };

      inserts.push({ r: yIndex, A: entry });
      changes[key] = entry;

      return;
    }

    // this key was removed earlier, a match!
    if (entry.c === 1) {
      inserts.push({ r: yIndex, A: entry });

      entry.c = 2;
      var subPatches = [];
      _VirtualDom_diffHelp(entry.z, vnode, subPatches, entry.r);
      entry.r = yIndex;
      entry.s.s = {
        w: subPatches,
        A: entry
      };

      return;
    }

    // this key has already been inserted or moved, a duplicate!
    _VirtualDom_insertNode(
      changes,
      localPatches,
      key + _VirtualDom_POSTFIX,
      vnode,
      yIndex,
      inserts
    );
  }

  function _VirtualDom_removeNode(changes, localPatches, key, vnode, index) {
    var entry = changes[key];

    // never seen this key before
    if (!entry) {
      var patch = _VirtualDom_pushPatch(localPatches, 9, index, undefined);

      changes[key] = {
        c: 1,
        z: vnode,
        r: index,
        s: patch
      };

      return;
    }

    // this key was inserted earlier, a match!
    if (entry.c === 0) {
      entry.c = 2;
      var subPatches = [];
      _VirtualDom_diffHelp(vnode, entry.z, subPatches, index);

      _VirtualDom_pushPatch(localPatches, 9, index, {
        w: subPatches,
        A: entry
      });

      return;
    }

    // this key has already been removed or moved, a duplicate!
    _VirtualDom_removeNode(
      changes,
      localPatches,
      key + _VirtualDom_POSTFIX,
      vnode,
      index
    );
  }

  // ADD DOM NODES
  //
  // Each DOM node has an "index" assigned in order of traversal. It is important
  // to minimize our crawl over the actual DOM, so these indexes (along with the
  // descendantsCount of virtual nodes) let us skip touching entire subtrees of
  // the DOM if we know there are no patches there.

  function _VirtualDom_addDomNodes(domNode, vNode, patches, eventNode) {
    _VirtualDom_addDomNodesHelp(
      domNode,
      vNode,
      patches,
      0,
      0,
      vNode.b,
      eventNode
    );
  }

  // assumes `patches` is non-empty and indexes increase monotonically.
  function _VirtualDom_addDomNodesHelp(
    domNode,
    vNode,
    patches,
    i,
    low,
    high,
    eventNode
  ) {
    var patch = patches[i];
    var index = patch.r;

    while (index === low) {
      var patchType = patch.$;

      if (patchType === 1) {
        _VirtualDom_addDomNodes(domNode, vNode.k, patch.s, eventNode);
      } else if (patchType === 8) {
        patch.t = domNode;
        patch.u = eventNode;

        var subPatches = patch.s.w;
        if (subPatches.length > 0) {
          _VirtualDom_addDomNodesHelp(
            domNode,
            vNode,
            subPatches,
            0,
            low,
            high,
            eventNode
          );
        }
      } else if (patchType === 9) {
        patch.t = domNode;
        patch.u = eventNode;

        var data = patch.s;
        if (data) {
          data.A.s = domNode;
          var subPatches = data.w;
          if (subPatches.length > 0) {
            _VirtualDom_addDomNodesHelp(
              domNode,
              vNode,
              subPatches,
              0,
              low,
              high,
              eventNode
            );
          }
        }
      } else {
        patch.t = domNode;
        patch.u = eventNode;
      }

      i++;

      if (!(patch = patches[i]) || (index = patch.r) > high) {
        return i;
      }
    }

    var tag = vNode.$;

    if (tag === 4) {
      var subNode = vNode.k;

      while (subNode.$ === 4) {
        subNode = subNode.k;
      }

      return _VirtualDom_addDomNodesHelp(
        domNode,
        subNode,
        patches,
        i,
        low + 1,
        high,
        domNode.elm_event_node_ref
      );
    }

    // tag must be 1 or 2 at this point

    var vKids = vNode.e;
    var childNodes = domNode.childNodes;
    for (var j = 0; j < vKids.length; j++) {
      low++;
      var vKid = tag === 1 ? vKids[j] : vKids[j].b;
      var nextLow = low + (vKid.b || 0);
      if (low <= index && index <= nextLow) {
        i = _VirtualDom_addDomNodesHelp(
          childNodes[j],
          vKid,
          patches,
          i,
          low,
          nextLow,
          eventNode
        );
        if (!(patch = patches[i]) || (index = patch.r) > high) {
          return i;
        }
      }
      low = nextLow;
    }
    return i;
  }

  // APPLY PATCHES

  function _VirtualDom_applyPatches(
    rootDomNode,
    oldVirtualNode,
    patches,
    eventNode
  ) {
    if (patches.length === 0) {
      return rootDomNode;
    }

    _VirtualDom_addDomNodes(rootDomNode, oldVirtualNode, patches, eventNode);
    return _VirtualDom_applyPatchesHelp(rootDomNode, patches);
  }

  function _VirtualDom_applyPatchesHelp(rootDomNode, patches) {
    for (var i = 0; i < patches.length; i++) {
      var patch = patches[i];
      var localDomNode = patch.t;
      var newNode = _VirtualDom_applyPatch(localDomNode, patch);
      if (localDomNode === rootDomNode) {
        rootDomNode = newNode;
      }
    }
    return rootDomNode;
  }

  function _VirtualDom_applyPatch(domNode, patch) {
    switch (patch.$) {
      case 0:
        return _VirtualDom_applyPatchRedraw(domNode, patch.s, patch.u);

      case 4:
        _VirtualDom_applyFacts(domNode, patch.u, patch.s);
        return domNode;

      case 3:
        domNode.replaceData(0, domNode.length, patch.s);
        return domNode;

      case 1:
        return _VirtualDom_applyPatchesHelp(domNode, patch.s);

      case 2:
        if (domNode.elm_event_node_ref) {
          domNode.elm_event_node_ref.j = patch.s;
        } else {
          domNode.elm_event_node_ref = { j: patch.s, p: patch.u };
        }
        return domNode;

      case 6:
        var data = patch.s;
        for (var i = 0; i < data.i; i++) {
          domNode.removeChild(domNode.childNodes[data.v]);
        }
        return domNode;

      case 7:
        var data = patch.s;
        var kids = data.e;
        var i = data.v;
        var theEnd = domNode.childNodes[i];
        for (; i < kids.length; i++) {
          domNode.insertBefore(_VirtualDom_render(kids[i], patch.u), theEnd);
        }
        return domNode;

      case 9:
        var data = patch.s;
        if (!data) {
          domNode.parentNode.removeChild(domNode);
          return domNode;
        }
        var entry = data.A;
        if (typeof entry.r !== "undefined") {
          domNode.parentNode.removeChild(domNode);
        }
        entry.s = _VirtualDom_applyPatchesHelp(domNode, data.w);
        return domNode;

      case 8:
        return _VirtualDom_applyPatchReorder(domNode, patch);

      case 5:
        return patch.s(domNode);

      default:
        _Debug_crash(10); // 'Ran into an unknown patch!'
    }
  }

  function _VirtualDom_applyPatchRedraw(domNode, vNode, eventNode) {
    var parentNode = domNode.parentNode;
    var newNode = _VirtualDom_render(vNode, eventNode);

    if (!newNode.elm_event_node_ref) {
      newNode.elm_event_node_ref = domNode.elm_event_node_ref;
    }

    if (parentNode && newNode !== domNode) {
      parentNode.replaceChild(newNode, domNode);
    }
    return newNode;
  }

  function _VirtualDom_applyPatchReorder(domNode, patch) {
    var data = patch.s;

    // remove end inserts
    var frag = _VirtualDom_applyPatchReorderEndInsertsHelp(data.y, patch);

    // removals
    domNode = _VirtualDom_applyPatchesHelp(domNode, data.w);

    // inserts
    var inserts = data.x;
    for (var i = 0; i < inserts.length; i++) {
      var insert = inserts[i];
      var entry = insert.A;
      var node = entry.c === 2 ? entry.s : _VirtualDom_render(entry.z, patch.u);
      domNode.insertBefore(node, domNode.childNodes[insert.r]);
    }

    // add end inserts
    if (frag) {
      _VirtualDom_appendChild(domNode, frag);
    }

    return domNode;
  }

  function _VirtualDom_applyPatchReorderEndInsertsHelp(endInserts, patch) {
    if (!endInserts) {
      return;
    }

    var frag = _VirtualDom_doc.createDocumentFragment();
    for (var i = 0; i < endInserts.length; i++) {
      var insert = endInserts[i];
      var entry = insert.A;
      _VirtualDom_appendChild(
        frag,
        entry.c === 2 ? entry.s : _VirtualDom_render(entry.z, patch.u)
      );
    }
    return frag;
  }

  function _VirtualDom_virtualize(node) {
    // TEXT NODES

    if (node.nodeType === 3) {
      return _VirtualDom_text(node.textContent);
    }

    // WEIRD NODES

    if (node.nodeType !== 1) {
      return _VirtualDom_text("");
    }

    // ELEMENT NODES

    var attrList = _List_Nil;
    var attrs = node.attributes;
    for (var i = attrs.length; i--; ) {
      var attr = attrs[i];
      var name = attr.name;
      var value = attr.value;
      attrList = _List_Cons(A2(_VirtualDom_attribute, name, value), attrList);
    }

    var tag = node.tagName.toLowerCase();
    var kidList = _List_Nil;
    var kids = node.childNodes;

    for (var i = kids.length; i--; ) {
      kidList = _List_Cons(_VirtualDom_virtualize(kids[i]), kidList);
    }
    return A3(_VirtualDom_node, tag, attrList, kidList);
  }

  function _VirtualDom_dekey(keyedNode) {
    var keyedKids = keyedNode.e;
    var len = keyedKids.length;
    var kids = new Array(len);
    for (var i = 0; i < len; i++) {
      kids[i] = keyedKids[i].b;
    }

    return {
      $: 1,
      c: keyedNode.c,
      d: keyedNode.d,
      e: kids,
      f: keyedNode.f,
      b: keyedNode.b
    };
  }

  var _Bitwise_and = F2(function(a, b) {
    return a & b;
  });

  var _Bitwise_or = F2(function(a, b) {
    return a | b;
  });

  var _Bitwise_xor = F2(function(a, b) {
    return a ^ b;
  });

  function _Bitwise_complement(a) {
    return ~a;
  }

  var _Bitwise_shiftLeftBy = F2(function(offset, a) {
    return a << offset;
  });

  var _Bitwise_shiftRightBy = F2(function(offset, a) {
    return a >> offset;
  });

  var _Bitwise_shiftRightZfBy = F2(function(offset, a) {
    return a >>> offset;
  });

  // HELPERS

  function _Debugger_unsafeCoerce(value) {
    return value;
  }

  // PROGRAMS

  var _Debugger_element = F4(function(impl, flagDecoder, debugMetadata, args) {
    return _Platform_initialize(
      flagDecoder,
      args,
      A3(
        elm$browser$Debugger$Main$wrapInit,
        _Json_wrap(debugMetadata),
        _Debugger_popout(),
        impl.init
      ),
      elm$browser$Debugger$Main$wrapUpdate(impl.update),
      elm$browser$Debugger$Main$wrapSubs(impl.subscriptions),
      function(sendToApp, initialModel) {
        var view = impl.view;
        var title = _VirtualDom_doc.title;
        var domNode = args && args["node"] ? args["node"] : _Debug_crash(0);
        var currNode = _VirtualDom_virtualize(domNode);
        var currBlocker = elm$browser$Debugger$Main$toBlockerType(initialModel);
        var currPopout;

        var cornerNode = _VirtualDom_doc.createElement("div");
        domNode.parentNode.insertBefore(cornerNode, domNode.nextSibling);
        var cornerCurr = _VirtualDom_virtualize(cornerNode);

        initialModel.popout.a = sendToApp;

        return _Browser_makeAnimator(initialModel, function(model) {
          var nextNode = A2(
            _VirtualDom_map,
            elm$browser$Debugger$Main$UserMsg,
            view(elm$browser$Debugger$Main$getUserModel(model))
          );
          var patches = _VirtualDom_diff(currNode, nextNode);
          domNode = _VirtualDom_applyPatches(
            domNode,
            currNode,
            patches,
            sendToApp
          );
          currNode = nextNode;

          // update blocker

          var nextBlocker = elm$browser$Debugger$Main$toBlockerType(model);
          _Debugger_updateBlocker(currBlocker, nextBlocker);
          currBlocker = nextBlocker;

          // view corner

          if (!model.popout.b) {
            var cornerNext = elm$browser$Debugger$Main$cornerView(model);
            var cornerPatches = _VirtualDom_diff(cornerCurr, cornerNext);
            cornerNode = _VirtualDom_applyPatches(
              cornerNode,
              cornerCurr,
              cornerPatches,
              sendToApp
            );
            cornerCurr = cornerNext;
            currPopout = undefined;
            return;
          }

          // view popout

          _VirtualDom_doc = model.popout.b; // SWITCH TO POPOUT DOC
          currPopout || (currPopout = _VirtualDom_virtualize(model.popout.b));
          var nextPopout = elm$browser$Debugger$Main$popoutView(model);
          var popoutPatches = _VirtualDom_diff(currPopout, nextPopout);
          _VirtualDom_applyPatches(
            model.popout.b.body,
            currPopout,
            popoutPatches,
            sendToApp
          );
          currPopout = nextPopout;
          _VirtualDom_doc = document; // SWITCH BACK TO NORMAL DOC
        });
      }
    );
  });

  var _Debugger_document = F4(function(impl, flagDecoder, debugMetadata, args) {
    return _Platform_initialize(
      flagDecoder,
      args,
      A3(
        elm$browser$Debugger$Main$wrapInit,
        _Json_wrap(debugMetadata),
        _Debugger_popout(),
        impl.init
      ),
      elm$browser$Debugger$Main$wrapUpdate(impl.update),
      elm$browser$Debugger$Main$wrapSubs(impl.subscriptions),
      function(sendToApp, initialModel) {
        var divertHrefToApp =
          impl.setup &&
          impl.setup(function(x) {
            return sendToApp(elm$browser$Debugger$Main$UserMsg(x));
          });
        var view = impl.view;
        var title = _VirtualDom_doc.title;
        var bodyNode = _VirtualDom_doc.body;
        var currNode = _VirtualDom_virtualize(bodyNode);
        var currBlocker = elm$browser$Debugger$Main$toBlockerType(initialModel);
        var currPopout;

        initialModel.popout.a = sendToApp;

        return _Browser_makeAnimator(initialModel, function(model) {
          _VirtualDom_divertHrefToApp = divertHrefToApp;
          var doc = view(elm$browser$Debugger$Main$getUserModel(model));
          var nextNode = _VirtualDom_node("body")(_List_Nil)(
            _Utils_ap(
              A2(
                elm$core$List$map,
                _VirtualDom_map(elm$browser$Debugger$Main$UserMsg),
                doc.body
              ),
              _List_Cons(elm$browser$Debugger$Main$cornerView(model), _List_Nil)
            )
          );
          var patches = _VirtualDom_diff(currNode, nextNode);
          bodyNode = _VirtualDom_applyPatches(
            bodyNode,
            currNode,
            patches,
            sendToApp
          );
          currNode = nextNode;
          _VirtualDom_divertHrefToApp = 0;
          title !== doc.title && (_VirtualDom_doc.title = title = doc.title);

          // update blocker

          var nextBlocker = elm$browser$Debugger$Main$toBlockerType(model);
          _Debugger_updateBlocker(currBlocker, nextBlocker);
          currBlocker = nextBlocker;

          // view popout

          if (!model.popout.b) {
            currPopout = undefined;
            return;
          }

          _VirtualDom_doc = model.popout.b; // SWITCH TO POPOUT DOC
          currPopout || (currPopout = _VirtualDom_virtualize(model.popout.b));
          var nextPopout = elm$browser$Debugger$Main$popoutView(model);
          var popoutPatches = _VirtualDom_diff(currPopout, nextPopout);
          _VirtualDom_applyPatches(
            model.popout.b.body,
            currPopout,
            popoutPatches,
            sendToApp
          );
          currPopout = nextPopout;
          _VirtualDom_doc = document; // SWITCH BACK TO NORMAL DOC
        });
      }
    );
  });

  function _Debugger_popout() {
    return {
      b: undefined,
      a: undefined
    };
  }

  function _Debugger_isOpen(popout) {
    return !!popout.b;
  }

  function _Debugger_open(popout) {
    return _Scheduler_binding(function(callback) {
      _Debugger_openWindow(popout);
      callback(_Scheduler_succeed(_Utils_Tuple0));
    });
  }

  function _Debugger_openWindow(popout) {
    var w = 900,
      h = 360,
      x = screen.width - w,
      y = screen.height - h;
    var debuggerWindow = window.open(
      "",
      "",
      "width=" + w + ",height=" + h + ",left=" + x + ",top=" + y
    );
    var doc = debuggerWindow.document;
    doc.title = "Elm Debugger";

    // handle arrow keys
    doc.addEventListener("keydown", function(event) {
      event.metaKey && event.which === 82 && window.location.reload();
      event.which === 38 &&
        (popout.a(elm$browser$Debugger$Main$Up), event.preventDefault());
      event.which === 40 &&
        (popout.a(elm$browser$Debugger$Main$Down), event.preventDefault());
    });

    // handle window close
    window.addEventListener("unload", close);
    debuggerWindow.addEventListener("unload", function() {
      popout.b = undefined;
      popout.a(elm$browser$Debugger$Main$NoOp);
      window.removeEventListener("unload", close);
    });
    function close() {
      popout.b = undefined;
      popout.a(elm$browser$Debugger$Main$NoOp);
      debuggerWindow.close();
    }

    // register new window
    popout.b = doc;
  }

  // SCROLL

  function _Debugger_scroll(popout) {
    return _Scheduler_binding(function(callback) {
      if (popout.b) {
        var msgs = popout.b.getElementById("elm-debugger-sidebar");
        if (msgs) {
          msgs.scrollTop = msgs.scrollHeight;
        }
      }
      callback(_Scheduler_succeed(_Utils_Tuple0));
    });
  }

  // UPLOAD

  function _Debugger_upload() {
    return _Scheduler_binding(function(callback) {
      var element = document.createElement("input");
      element.setAttribute("type", "file");
      element.setAttribute("accept", "text/json");
      element.style.display = "none";
      element.addEventListener("change", function(event) {
        var fileReader = new FileReader();
        fileReader.onload = function(e) {
          callback(_Scheduler_succeed(e.target.result));
        };
        fileReader.readAsText(event.target.files[0]);
        document.body.removeChild(element);
      });
      document.body.appendChild(element);
      element.click();
    });
  }

  // DOWNLOAD

  var _Debugger_download = F2(function(historyLength, json) {
    return _Scheduler_binding(function(callback) {
      var fileName = "history-" + historyLength + ".txt";
      var jsonString = JSON.stringify(json);
      var mime = "text/plain;charset=utf-8";
      var done = _Scheduler_succeed(_Utils_Tuple0);

      // for IE10+
      if (navigator.msSaveBlob) {
        navigator.msSaveBlob(new Blob([jsonString], { type: mime }), fileName);
        return callback(done);
      }

      // for HTML5
      var element = document.createElement("a");
      element.setAttribute(
        "href",
        "data:" + mime + "," + encodeURIComponent(jsonString)
      );
      element.setAttribute("download", fileName);
      element.style.display = "none";
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
      callback(done);
    });
  });

  // POPOUT CONTENT

  function _Debugger_messageToString(value) {
    if (typeof value === "boolean") {
      return value ? "True" : "False";
    }

    if (typeof value === "number") {
      return value + "";
    }

    if (typeof value === "string") {
      return '"' + _Debugger_addSlashes(value, false) + '"';
    }

    if (value instanceof String) {
      return "'" + _Debugger_addSlashes(value, true) + "'";
    }

    if (typeof value !== "object" || value === null || !("$" in value)) {
      return "…";
    }

    if (typeof value.$ === "number") {
      return "…";
    }

    var code = value.$.charCodeAt(0);
    if (
      code === 0x23 /* # */ ||
      /* a */ (0x61 <= code && code <= 0x7a) /* z */
    ) {
      return "…";
    }

    if (
      [
        "Array_elm_builtin",
        "Set_elm_builtin",
        "RBNode_elm_builtin",
        "RBEmpty_elm_builtin"
      ].indexOf(value.$) >= 0
    ) {
      return "…";
    }

    var keys = Object.keys(value);
    switch (keys.length) {
      case 1:
        return value.$;
      case 2:
        return value.$ + " " + _Debugger_messageToString(value.a);
      default:
        return (
          value.$ +
          " … " +
          _Debugger_messageToString(value[keys[keys.length - 1]])
        );
    }
  }

  function _Debugger_init(value) {
    if (typeof value === "boolean") {
      return A3(
        elm$browser$Debugger$Expando$Constructor,
        elm$core$Maybe$Just(value ? "True" : "False"),
        true,
        _List_Nil
      );
    }

    if (typeof value === "number") {
      return elm$browser$Debugger$Expando$Primitive(value + "");
    }

    if (typeof value === "string") {
      return elm$browser$Debugger$Expando$S(
        '"' + _Debugger_addSlashes(value, false) + '"'
      );
    }

    if (value instanceof String) {
      return elm$browser$Debugger$Expando$S(
        "'" + _Debugger_addSlashes(value, true) + "'"
      );
    }

    if (typeof value === "object" && "$" in value) {
      var tag = value.$;

      if (tag === "::" || tag === "[]") {
        return A3(
          elm$browser$Debugger$Expando$Sequence,
          elm$browser$Debugger$Expando$ListSeq,
          true,
          A2(elm$core$List$map, _Debugger_init, value)
        );
      }

      if (tag === "Set_elm_builtin") {
        return A3(
          elm$browser$Debugger$Expando$Sequence,
          elm$browser$Debugger$Expando$SetSeq,
          true,
          A3(elm$core$Set$foldr, _Debugger_initCons, _List_Nil, value)
        );
      }

      if (tag === "RBNode_elm_builtin" || tag == "RBEmpty_elm_builtin") {
        return A2(
          elm$browser$Debugger$Expando$Dictionary,
          true,
          A3(elm$core$Dict$foldr, _Debugger_initKeyValueCons, _List_Nil, value)
        );
      }

      if (tag === "Array_elm_builtin") {
        return A3(
          elm$browser$Debugger$Expando$Sequence,
          elm$browser$Debugger$Expando$ArraySeq,
          true,
          A3(elm$core$Array$foldr, _Debugger_initCons, _List_Nil, value)
        );
      }

      if (typeof tag === "number") {
        return elm$browser$Debugger$Expando$Primitive("<internals>");
      }

      var char = tag.charCodeAt(0);
      if (char === 35 || (65 <= char && char <= 90)) {
        var list = _List_Nil;
        for (var i in value) {
          if (i === "$") continue;
          list = _List_Cons(_Debugger_init(value[i]), list);
        }
        return A3(
          elm$browser$Debugger$Expando$Constructor,
          char === 35 ? elm$core$Maybe$Nothing : elm$core$Maybe$Just(tag),
          true,
          elm$core$List$reverse(list)
        );
      }

      return elm$browser$Debugger$Expando$Primitive("<internals>");
    }

    if (typeof value === "object") {
      var dict = elm$core$Dict$empty;
      for (var i in value) {
        dict = A3(elm$core$Dict$insert, i, _Debugger_init(value[i]), dict);
      }
      return A2(elm$browser$Debugger$Expando$Record, true, dict);
    }

    return elm$browser$Debugger$Expando$Primitive("<internals>");
  }

  var _Debugger_initCons = F2(function initConsHelp(value, list) {
    return _List_Cons(_Debugger_init(value), list);
  });

  var _Debugger_initKeyValueCons = F3(function(key, value, list) {
    return _List_Cons(
      _Utils_Tuple2(_Debugger_init(key), _Debugger_init(value)),
      list
    );
  });

  function _Debugger_addSlashes(str, isChar) {
    var s = str
      .replace(/\\/g, "\\\\")
      .replace(/\n/g, "\\n")
      .replace(/\t/g, "\\t")
      .replace(/\r/g, "\\r")
      .replace(/\v/g, "\\v")
      .replace(/\0/g, "\\0");
    if (isChar) {
      return s.replace(/\'/g, "\\'");
    } else {
      return s.replace(/\"/g, '\\"');
    }
  }

  // BLOCK EVENTS

  function _Debugger_updateBlocker(oldBlocker, newBlocker) {
    if (oldBlocker === newBlocker) return;

    var oldEvents = _Debugger_blockerToEvents(oldBlocker);
    var newEvents = _Debugger_blockerToEvents(newBlocker);

    // remove old blockers
    for (var i = 0; i < oldEvents.length; i++) {
      document.removeEventListener(oldEvents[i], _Debugger_blocker, true);
    }

    // add new blockers
    for (var i = 0; i < newEvents.length; i++) {
      document.addEventListener(newEvents[i], _Debugger_blocker, true);
    }
  }

  function _Debugger_blocker(event) {
    if (event.type === "keydown" && event.metaKey && event.which === 82) {
      return;
    }

    var isScroll = event.type === "scroll" || event.type === "wheel";
    for (var node = event.target; node; node = node.parentNode) {
      if (
        isScroll
          ? node.id === "elm-debugger-details"
          : node.id === "elm-debugger-overlay"
      ) {
        return;
      }
    }

    event.stopPropagation();
    event.preventDefault();
  }

  function _Debugger_blockerToEvents(blocker) {
    return blocker === elm$browser$Debugger$Overlay$BlockNone
      ? []
      : blocker === elm$browser$Debugger$Overlay$BlockMost
        ? _Debugger_mostEvents
        : _Debugger_allEvents;
  }

  var _Debugger_mostEvents = [
    "click",
    "dblclick",
    "mousemove",
    "mouseup",
    "mousedown",
    "mouseenter",
    "mouseleave",
    "touchstart",
    "touchend",
    "touchcancel",
    "touchmove",
    "pointerdown",
    "pointerup",
    "pointerover",
    "pointerout",
    "pointerenter",
    "pointerleave",
    "pointermove",
    "pointercancel",
    "dragstart",
    "drag",
    "dragend",
    "dragenter",
    "dragover",
    "dragleave",
    "drop",
    "keyup",
    "keydown",
    "keypress",
    "input",
    "change",
    "focus",
    "blur"
  ];

  var _Debugger_allEvents = _Debugger_mostEvents.concat("wheel", "scroll");

  // ELEMENT

  var _Debugger_element;

  var _Browser_element =
    _Debugger_element ||
    F4(function(impl, flagDecoder, debugMetadata, args) {
      return _Platform_initialize(
        flagDecoder,
        args,
        impl.init,
        impl.update,
        impl.subscriptions,
        function(sendToApp, initialModel) {
          var view = impl.view;
          /**_UNUSED/
			var domNode = args['node'];
			//*/
          /**/
          var domNode = args && args["node"] ? args["node"] : _Debug_crash(0);
          //*/
          var currNode = _VirtualDom_virtualize(domNode);

          return _Browser_makeAnimator(initialModel, function(model) {
            var nextNode = view(model);
            var patches = _VirtualDom_diff(currNode, nextNode);
            domNode = _VirtualDom_applyPatches(
              domNode,
              currNode,
              patches,
              sendToApp
            );
            currNode = nextNode;
          });
        }
      );
    });

  // DOCUMENT

  var _Debugger_document;

  var _Browser_document =
    _Debugger_document ||
    F4(function(impl, flagDecoder, debugMetadata, args) {
      return _Platform_initialize(
        flagDecoder,
        args,
        impl.init,
        impl.update,
        impl.subscriptions,
        function(sendToApp, initialModel) {
          var divertHrefToApp = impl.setup && impl.setup(sendToApp);
          var view = impl.view;
          var title = _VirtualDom_doc.title;
          var bodyNode = _VirtualDom_doc.body;
          var currNode = _VirtualDom_virtualize(bodyNode);
          return _Browser_makeAnimator(initialModel, function(model) {
            _VirtualDom_divertHrefToApp = divertHrefToApp;
            var doc = view(model);
            var nextNode = _VirtualDom_node("body")(_List_Nil)(doc.body);
            var patches = _VirtualDom_diff(currNode, nextNode);
            bodyNode = _VirtualDom_applyPatches(
              bodyNode,
              currNode,
              patches,
              sendToApp
            );
            currNode = nextNode;
            _VirtualDom_divertHrefToApp = 0;
            title !== doc.title && (_VirtualDom_doc.title = title = doc.title);
          });
        }
      );
    });

  // ANIMATION

  var _Browser_requestAnimationFrame =
    typeof requestAnimationFrame !== "undefined"
      ? requestAnimationFrame
      : function(callback) {
          setTimeout(callback, 1000 / 60);
        };

  function _Browser_makeAnimator(model, draw) {
    draw(model);

    var state = 0;

    function updateIfNeeded() {
      state =
        state === 1
          ? 0
          : (_Browser_requestAnimationFrame(updateIfNeeded), draw(model), 1);
    }

    return function(nextModel, isSync) {
      model = nextModel;

      isSync
        ? (draw(model), state === 2 && (state = 1))
        : (state === 0 && _Browser_requestAnimationFrame(updateIfNeeded),
          (state = 2));
    };
  }

  // APPLICATION

  function _Browser_application(impl) {
    var onUrlChange = impl.onUrlChange;
    var onUrlRequest = impl.onUrlRequest;
    var key = function() {
      key.a(onUrlChange(_Browser_getUrl()));
    };

    return _Browser_document({
      setup: function(sendToApp) {
        key.a = sendToApp;
        _Browser_window.addEventListener("popstate", key);
        _Browser_window.navigator.userAgent.indexOf("Trident") < 0 ||
          _Browser_window.addEventListener("hashchange", key);

        return F2(function(domNode, event) {
          if (
            !event.ctrlKey &&
            !event.metaKey &&
            !event.shiftKey &&
            event.button < 1 &&
            !domNode.target &&
            !domNode.download
          ) {
            event.preventDefault();
            var href = domNode.href;
            var curr = _Browser_getUrl();
            var next = elm$url$Url$fromString(href).a;
            sendToApp(
              onUrlRequest(
                next &&
                curr.protocol === next.protocol &&
                curr.host === next.host &&
                curr.port_.a === next.port_.a
                  ? elm$browser$Browser$Internal(next)
                  : elm$browser$Browser$External(href)
              )
            );
          }
        });
      },
      init: function(flags) {
        return A3(impl.init, flags, _Browser_getUrl(), key);
      },
      view: impl.view,
      update: impl.update,
      subscriptions: impl.subscriptions
    });
  }

  function _Browser_getUrl() {
    return (
      elm$url$Url$fromString(_VirtualDom_doc.location.href).a || _Debug_crash(1)
    );
  }

  var _Browser_go = F2(function(key, n) {
    return A2(
      elm$core$Task$perform,
      elm$core$Basics$never,
      _Scheduler_binding(function() {
        n && history.go(n);
        key();
      })
    );
  });

  var _Browser_pushUrl = F2(function(key, url) {
    return A2(
      elm$core$Task$perform,
      elm$core$Basics$never,
      _Scheduler_binding(function() {
        history.pushState({}, "", url);
        key();
      })
    );
  });

  var _Browser_replaceUrl = F2(function(key, url) {
    return A2(
      elm$core$Task$perform,
      elm$core$Basics$never,
      _Scheduler_binding(function() {
        history.replaceState({}, "", url);
        key();
      })
    );
  });

  // GLOBAL EVENTS

  var _Browser_fakeNode = {
    addEventListener: function() {},
    removeEventListener: function() {}
  };
  var _Browser_doc =
    typeof document !== "undefined" ? document : _Browser_fakeNode;
  var _Browser_window =
    typeof window !== "undefined" ? window : _Browser_fakeNode;

  var _Browser_on = F3(function(node, eventName, sendToSelf) {
    return _Scheduler_spawn(
      _Scheduler_binding(function(callback) {
        function handler(event) {
          _Scheduler_rawSpawn(sendToSelf(event));
        }
        node.addEventListener(
          eventName,
          handler,
          _VirtualDom_passiveSupported && { passive: true }
        );
        return function() {
          node.removeEventListener(eventName, handler);
        };
      })
    );
  });

  var _Browser_decodeEvent = F2(function(decoder, event) {
    var result = _Json_runHelp(decoder, event);
    return elm$core$Result$isOk(result)
      ? elm$core$Maybe$Just(result.a)
      : elm$core$Maybe$Nothing;
  });

  // PAGE VISIBILITY

  function _Browser_visibilityInfo() {
    return typeof _VirtualDom_doc.hidden !== "undefined"
      ? { hidden: "hidden", change: "visibilitychange" }
      : typeof _VirtualDom_doc.mozHidden !== "undefined"
        ? { hidden: "mozHidden", change: "mozvisibilitychange" }
        : typeof _VirtualDom_doc.msHidden !== "undefined"
          ? { hidden: "msHidden", change: "msvisibilitychange" }
          : typeof _VirtualDom_doc.webkitHidden !== "undefined"
            ? { hidden: "webkitHidden", change: "webkitvisibilitychange" }
            : { hidden: "hidden", change: "visibilitychange" };
  }

  // ANIMATION FRAMES

  function _Browser_rAF() {
    return _Scheduler_binding(function(callback) {
      var id = requestAnimationFrame(function() {
        callback(_Scheduler_succeed(Date.now()));
      });

      return function() {
        cancelAnimationFrame(id);
      };
    });
  }

  function _Browser_now() {
    return _Scheduler_binding(function(callback) {
      callback(_Scheduler_succeed(Date.now()));
    });
  }

  // DOM STUFF

  function _Browser_withNode(id, doStuff) {
    return _Scheduler_binding(function(callback) {
      _Browser_requestAnimationFrame(function() {
        var node = document.getElementById(id);
        callback(
          node
            ? _Scheduler_succeed(doStuff(node))
            : _Scheduler_fail(elm$browser$Browser$Dom$NotFound(id))
        );
      });
    });
  }

  function _Browser_withWindow(doStuff) {
    return _Scheduler_binding(function(callback) {
      _Browser_requestAnimationFrame(function() {
        callback(_Scheduler_succeed(doStuff()));
      });
    });
  }

  // FOCUS and BLUR

  var _Browser_call = F2(function(functionName, id) {
    return _Browser_withNode(id, function(node) {
      node[functionName]();
      return _Utils_Tuple0;
    });
  });

  // WINDOW VIEWPORT

  function _Browser_getViewport() {
    return {
      scene: _Browser_getScene(),
      viewport: {
        x: _Browser_window.pageXOffset,
        y: _Browser_window.pageYOffset,
        width: _Browser_doc.documentElement.clientWidth,
        height: _Browser_doc.documentElement.clientHeight
      }
    };
  }

  function _Browser_getScene() {
    var body = _Browser_doc.body;
    var elem = _Browser_doc.documentElement;
    return {
      width: Math.max(
        body.scrollWidth,
        body.offsetWidth,
        elem.scrollWidth,
        elem.offsetWidth,
        elem.clientWidth
      ),
      height: Math.max(
        body.scrollHeight,
        body.offsetHeight,
        elem.scrollHeight,
        elem.offsetHeight,
        elem.clientHeight
      )
    };
  }

  var _Browser_setViewport = F2(function(x, y) {
    return _Browser_withWindow(function() {
      _Browser_window.scroll(x, y);
      return _Utils_Tuple0;
    });
  });

  // ELEMENT VIEWPORT

  function _Browser_getViewportOf(id) {
    return _Browser_withNode(id, function(node) {
      return {
        scene: {
          width: node.scrollWidth,
          height: node.scrollHeight
        },
        viewport: {
          x: node.scrollLeft,
          y: node.scrollTop,
          width: node.clientWidth,
          height: node.clientHeight
        }
      };
    });
  }

  var _Browser_setViewportOf = F3(function(id, x, y) {
    return _Browser_withNode(id, function(node) {
      node.scrollLeft = x;
      node.scrollTop = y;
      return _Utils_Tuple0;
    });
  });

  // ELEMENT

  function _Browser_getElement(id) {
    return _Browser_withNode(id, function(node) {
      var rect = node.getBoundingClientRect();
      var x = _Browser_window.pageXOffset;
      var y = _Browser_window.pageYOffset;
      return {
        scene: _Browser_getScene(),
        viewport: {
          x: x,
          y: y,
          width: _Browser_doc.documentElement.clientWidth,
          height: _Browser_doc.documentElement.clientHeight
        },
        element: {
          x: x + rect.left,
          y: y + rect.top,
          width: rect.width,
          height: rect.height
        }
      };
    });
  }

  // LOAD and RELOAD

  function _Browser_reload(skipCache) {
    return A2(
      elm$core$Task$perform,
      elm$core$Basics$never,
      _Scheduler_binding(function(callback) {
        _VirtualDom_doc.location.reload(skipCache);
      })
    );
  }

  function _Browser_load(url) {
    return A2(
      elm$core$Task$perform,
      elm$core$Basics$never,
      _Scheduler_binding(function(callback) {
        try {
          _Browser_window.location = url;
        } catch (err) {
          // Only Firefox can throw a NS_ERROR_MALFORMED_URI exception here.
          // Other browsers reload the page, so let's be consistent about that.
          _VirtualDom_doc.location.reload(false);
        }
      })
    );
  }

  // SEND REQUEST

  var _Http_toTask = F2(function(request, maybeProgress) {
    return _Scheduler_binding(function(callback) {
      var xhr = new XMLHttpRequest();

      _Http_configureProgress(xhr, maybeProgress);

      xhr.addEventListener("error", function() {
        callback(_Scheduler_fail(elm$http$Http$NetworkError));
      });
      xhr.addEventListener("timeout", function() {
        callback(_Scheduler_fail(elm$http$Http$Timeout));
      });
      xhr.addEventListener("load", function() {
        callback(_Http_handleResponse(xhr, request.expect.a));
      });

      try {
        xhr.open(request.method, request.url, true);
      } catch (e) {
        return callback(_Scheduler_fail(elm$http$Http$BadUrl(request.url)));
      }

      _Http_configureRequest(xhr, request);

      var body = request.body;
      xhr.send(
        elm$http$Http$Internal$isStringBody(body)
          ? (xhr.setRequestHeader("Content-Type", body.a), body.b)
          : body.a
      );

      return function() {
        xhr.abort();
      };
    });
  });

  function _Http_configureProgress(xhr, maybeProgress) {
    if (!elm$core$Maybe$isJust(maybeProgress)) {
      return;
    }

    xhr.addEventListener("progress", function(event) {
      if (!event.lengthComputable) {
        return;
      }
      _Scheduler_rawSpawn(
        maybeProgress.a({
          bytes: event.loaded,
          bytesExpected: event.total
        })
      );
    });
  }

  function _Http_configureRequest(xhr, request) {
    for (
      var headers = request.headers;
      headers.b;
      headers = headers.b // WHILE_CONS
    ) {
      xhr.setRequestHeader(headers.a.a, headers.a.b);
    }

    xhr.responseType = request.expect.b;
    xhr.withCredentials = request.withCredentials;

    elm$core$Maybe$isJust(request.timeout) && (xhr.timeout = request.timeout.a);
  }

  // RESPONSES

  function _Http_handleResponse(xhr, responseToResult) {
    var response = _Http_toResponse(xhr);

    if (xhr.status < 200 || 300 <= xhr.status) {
      response.body = xhr.responseText;
      return _Scheduler_fail(elm$http$Http$BadStatus(response));
    }

    var result = responseToResult(response);

    if (elm$core$Result$isOk(result)) {
      return _Scheduler_succeed(result.a);
    } else {
      response.body = xhr.responseText;
      return _Scheduler_fail(A2(elm$http$Http$BadPayload, result.a, response));
    }
  }

  function _Http_toResponse(xhr) {
    return {
      url: xhr.responseURL,
      status: { code: xhr.status, message: xhr.statusText },
      headers: _Http_parseHeaders(xhr.getAllResponseHeaders()),
      body: xhr.response
    };
  }

  function _Http_parseHeaders(rawHeaders) {
    var headers = elm$core$Dict$empty;

    if (!rawHeaders) {
      return headers;
    }

    var headerPairs = rawHeaders.split("\u000d\u000a");
    for (var i = headerPairs.length; i--; ) {
      var headerPair = headerPairs[i];
      var index = headerPair.indexOf("\u003a\u0020");
      if (index > 0) {
        var key = headerPair.substring(0, index);
        var value = headerPair.substring(index + 2);

        headers = A3(
          elm$core$Dict$update,
          key,
          function(oldValue) {
            return elm$core$Maybe$Just(
              elm$core$Maybe$isJust(oldValue)
                ? value + ", " + oldValue.a
                : value
            );
          },
          headers
        );
      }
    }

    return headers;
  }

  // EXPECTORS

  function _Http_expectStringResponse(responseToResult) {
    return {
      $: 0,
      b: "text",
      a: responseToResult
    };
  }

  var _Http_mapExpect = F2(function(func, expect) {
    return {
      $: 0,
      b: expect.b,
      a: function(response) {
        var convertedResponse = expect.a(response);
        return A2(elm$core$Result$map, func, convertedResponse);
      }
    };
  });

  // BODY

  function _Http_multipart(parts) {
    for (
      var formData = new FormData();
      parts.b;
      parts = parts.b // WHILE_CONS
    ) {
      var part = parts.a;
      formData.append(part.a, part.b);
    }

    return elm$http$Http$Internal$FormDataBody(formData);
  }

  // STRINGS

  var _Parser_isSubString = F5(function(
    smallString,
    offset,
    row,
    col,
    bigString
  ) {
    var smallLength = smallString.length;
    var isGood = offset + smallLength <= bigString.length;

    for (var i = 0; isGood && i < smallLength; ) {
      var code = bigString.charCodeAt(offset);
      isGood =
        smallString[i++] === bigString[offset++] &&
        (code === 0x000a /* \n */
          ? (row++, (col = 1))
          : (col++,
            (code & 0xf800) === 0xd800
              ? smallString[i++] === bigString[offset++]
              : 1));
    }

    return _Utils_Tuple3(isGood ? offset : -1, row, col);
  });

  // CHARS

  var _Parser_isSubChar = F3(function(predicate, offset, string) {
    return string.length <= offset
      ? -1
      : (string.charCodeAt(offset) & 0xf800) === 0xd800
        ? predicate(_Utils_chr(string.substr(offset, 2)))
          ? offset + 2
          : -1
        : predicate(_Utils_chr(string[offset]))
          ? string[offset] === "\n"
            ? -2
            : offset + 1
          : -1;
  });

  var _Parser_isAsciiCode = F3(function(code, offset, string) {
    return string.charCodeAt(offset) === code;
  });

  // NUMBERS

  var _Parser_chompBase10 = F2(function(offset, string) {
    for (; offset < string.length; offset++) {
      var code = string.charCodeAt(offset);
      if (code < 0x30 || 0x39 < code) {
        return offset;
      }
    }
    return offset;
  });

  var _Parser_consumeBase = F3(function(base, offset, string) {
    for (var total = 0; offset < string.length; offset++) {
      var digit = string.charCodeAt(offset) - 0x30;
      if (digit < 0 || base <= digit) break;
      total = base * total + digit;
    }
    return _Utils_Tuple2(offset, total);
  });

  var _Parser_consumeBase16 = F2(function(offset, string) {
    for (var total = 0; offset < string.length; offset++) {
      var code = string.charCodeAt(offset);
      if (0x30 <= code && code <= 0x39) {
        total = 16 * total + code - 0x30;
      } else if (0x41 <= code && code <= 0x46) {
        total = 16 * total + code - 55;
      } else if (0x61 <= code && code <= 0x66) {
        total = 16 * total + code - 87;
      } else {
        break;
      }
    }
    return _Utils_Tuple2(offset, total);
  });

  // FIND STRING

  var _Parser_findSubString = F5(function(
    smallString,
    offset,
    row,
    col,
    bigString
  ) {
    var newOffset = bigString.indexOf(smallString, offset);
    var target =
      newOffset < 0 ? bigString.length : newOffset + smallString.length;

    while (offset < target) {
      var code = bigString.charCodeAt(offset++);
      code === 0x000a /* \n */
        ? ((col = 1), row++)
        : (col++, (code & 0xf800) === 0xd800 && offset++);
    }

    return _Utils_Tuple3(newOffset, row, col);
  });

  function _Time_now(millisToPosix) {
    return _Scheduler_binding(function(callback) {
      callback(_Scheduler_succeed(millisToPosix(Date.now())));
    });
  }

  var _Time_setInterval = F2(function(interval, task) {
    return _Scheduler_binding(function(callback) {
      var id = setInterval(function() {
        _Scheduler_rawSpawn(task);
      }, interval);
      return function() {
        clearInterval(id);
      };
    });
  });

  function _Time_here() {
    return _Scheduler_binding(function(callback) {
      callback(
        _Scheduler_succeed(
          A2(
            elm$time$Time$customZone,
            -new Date().getTimezoneOffset(),
            _List_Nil
          )
        )
      );
    });
  }

  function _Time_getZoneName() {
    return _Scheduler_binding(function(callback) {
      try {
        var name = elm$time$Time$Name(
          Intl.DateTimeFormat().resolvedOptions().timeZone
        );
      } catch (e) {
        var name = elm$time$Time$Offset(new Date().getTimezoneOffset());
      }
      callback(_Scheduler_succeed(name));
    });
  }

  function _Url_percentEncode(string) {
    return encodeURIComponent(string);
  }

  function _Url_percentDecode(string) {
    try {
      return elm$core$Maybe$Just(decodeURIComponent(string));
    } catch (e) {
      return elm$core$Maybe$Nothing;
    }
  }

  // VIRTUAL-DOM WIDGETS

  var _Markdown_toHtml = F3(function(options, factList, rawMarkdown) {
    return _VirtualDom_custom(
      factList,
      {
        a: options,
        b: rawMarkdown
      },
      _Markdown_render,
      _Markdown_diff
    );
  });

  // WIDGET IMPLEMENTATION

  function _Markdown_render(model) {
    return A2(_Markdown_replace, model, _VirtualDom_doc.createElement("div"));
  }

  function _Markdown_diff(x, y) {
    return x.b === y.b && x.a === y.a ? false : _Markdown_replace(y);
  }

  var _Markdown_replace = F2(function(model, div) {
    div.innerHTML = _Markdown_marked(model.b, _Markdown_formatOptions(model.a));
    return div;
  });

  // ACTUAL MARKDOWN PARSER

  var _Markdown_marked = (function() {
    // catch the `marked` object regardless of the outer environment.
    // (ex. a CommonJS module compatible environment.)
    // note that this depends on marked's implementation of environment detection.
    var module = {};
    var exports = (module.exports = {});

    /**
     * marked - a markdown parser
     * Copyright (c) 2011-2014, Christopher Jeffrey. (MIT Licensed)
     * https://github.com/chjj/marked
     * commit cd2f6f5b7091154c5526e79b5f3bfb4d15995a51
     */
    (function() {
      var block = {
        newline: /^\n+/,
        code: /^( {4}[^\n]+\n*)+/,
        fences: noop,
        hr: /^( *[-*_]){3,} *(?:\n+|$)/,
        heading: /^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,
        nptable: noop,
        lheading: /^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,
        blockquote: /^( *>[^\n]+(\n(?!def)[^\n]+)*\n*)+/,
        list: /^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
        html: /^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,
        def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,
        table: noop,
        paragraph: /^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,
        text: /^[^\n]+/
      };
      block.bullet = /(?:[*+-]|\d+\.)/;
      block.item = /^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/;
      block.item = replace(block.item, "gm")(/bull/g, block.bullet)();
      block.list = replace(block.list)(/bull/g, block.bullet)(
        "hr",
        "\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))"
      )("def", "\\n+(?=" + block.def.source + ")")();
      block.blockquote = replace(block.blockquote)("def", block.def)();
      block._tag =
        "(?!(?:" +
        "a|em|strong|small|s|cite|q|dfn|abbr|data|time|code" +
        "|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo" +
        "|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|[^\\w\\s@]*@)\\b";
      block.html = replace(block.html)("comment", /<!--[\s\S]*?-->/)(
        "closed",
        /<(tag)[\s\S]+?<\/\1>/
      )("closing", /<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)(/tag/g, block._tag)();
      block.paragraph = replace(block.paragraph)("hr", block.hr)(
        "heading",
        block.heading
      )("lheading", block.lheading)("blockquote", block.blockquote)(
        "tag",
        "<" + block._tag
      )("def", block.def)();
      block.normal = merge({}, block);
      block.gfm = merge({}, block.normal, {
        fences: /^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\s*\1 *(?:\n+|$)/,
        paragraph: /^/,
        heading: /^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/
      });
      block.gfm.paragraph = replace(block.paragraph)(
        "(?!",
        "(?!" +
          block.gfm.fences.source.replace("\\1", "\\2") +
          "|" +
          block.list.source.replace("\\1", "\\3") +
          "|"
      )();
      block.tables = merge({}, block.gfm, {
        nptable: /^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,
        table: /^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/
      });
      function Lexer(options) {
        this.tokens = [];
        this.tokens.links = {};
        this.options = options || marked.defaults;
        this.rules = block.normal;
        if (this.options.gfm) {
          if (this.options.tables) {
            this.rules = block.tables;
          } else {
            this.rules = block.gfm;
          }
        }
      }
      Lexer.rules = block;
      Lexer.lex = function(src, options) {
        var lexer = new Lexer(options);
        return lexer.lex(src);
      };
      Lexer.prototype.lex = function(src) {
        src = src
          .replace(/\r\n|\r/g, "\n")
          .replace(/\t/g, "    ")
          .replace(/\u00a0/g, " ")
          .replace(/\u2424/g, "\n");
        return this.token(src, true);
      };
      Lexer.prototype.token = function(src, top, bq) {
        var src = src.replace(/^ +$/gm, ""),
          next,
          loose,
          cap,
          bull,
          b,
          item,
          space,
          i,
          l;
        while (src) {
          if ((cap = this.rules.newline.exec(src))) {
            src = src.substring(cap[0].length);
            if (cap[0].length > 1) {
              this.tokens.push({ type: "space" });
            }
          }
          if ((cap = this.rules.code.exec(src))) {
            src = src.substring(cap[0].length);
            cap = cap[0].replace(/^ {4}/gm, "");
            this.tokens.push({
              type: "code",
              text: !this.options.pedantic ? cap.replace(/\n+$/, "") : cap
            });
            continue;
          }
          if ((cap = this.rules.fences.exec(src))) {
            src = src.substring(cap[0].length);
            this.tokens.push({
              type: "code",
              lang: cap[2],
              text: cap[3] || ""
            });
            continue;
          }
          if ((cap = this.rules.heading.exec(src))) {
            src = src.substring(cap[0].length);
            this.tokens.push({
              type: "heading",
              depth: cap[1].length,
              text: cap[2]
            });
            continue;
          }
          if (top && (cap = this.rules.nptable.exec(src))) {
            src = src.substring(cap[0].length);
            item = {
              type: "table",
              header: cap[1].replace(/^ *| *\| *$/g, "").split(/ *\| */),
              align: cap[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
              cells: cap[3].replace(/\n$/, "").split("\n")
            };
            for (i = 0; i < item.align.length; i++) {
              if (/^ *-+: *$/.test(item.align[i])) {
                item.align[i] = "right";
              } else if (/^ *:-+: *$/.test(item.align[i])) {
                item.align[i] = "center";
              } else if (/^ *:-+ *$/.test(item.align[i])) {
                item.align[i] = "left";
              } else {
                item.align[i] = null;
              }
            }
            for (i = 0; i < item.cells.length; i++) {
              item.cells[i] = item.cells[i].split(/ *\| */);
            }
            this.tokens.push(item);
            continue;
          }
          if ((cap = this.rules.lheading.exec(src))) {
            src = src.substring(cap[0].length);
            this.tokens.push({
              type: "heading",
              depth: cap[2] === "=" ? 1 : 2,
              text: cap[1]
            });
            continue;
          }
          if ((cap = this.rules.hr.exec(src))) {
            src = src.substring(cap[0].length);
            this.tokens.push({ type: "hr" });
            continue;
          }
          if ((cap = this.rules.blockquote.exec(src))) {
            src = src.substring(cap[0].length);
            this.tokens.push({ type: "blockquote_start" });
            cap = cap[0].replace(/^ *> ?/gm, "");
            this.token(cap, top, true);
            this.tokens.push({ type: "blockquote_end" });
            continue;
          }
          if ((cap = this.rules.list.exec(src))) {
            src = src.substring(cap[0].length);
            bull = cap[2];
            this.tokens.push({ type: "list_start", ordered: bull.length > 1 });
            cap = cap[0].match(this.rules.item);
            next = false;
            l = cap.length;
            i = 0;
            for (; i < l; i++) {
              item = cap[i];
              space = item.length;
              item = item.replace(/^ *([*+-]|\d+\.) +/, "");
              if (~item.indexOf("\n ")) {
                space -= item.length;
                item = !this.options.pedantic
                  ? item.replace(new RegExp("^ {1," + space + "}", "gm"), "")
                  : item.replace(/^ {1,4}/gm, "");
              }
              if (this.options.smartLists && i !== l - 1) {
                b = block.bullet.exec(cap[i + 1])[0];
                if (bull !== b && !(bull.length > 1 && b.length > 1)) {
                  src = cap.slice(i + 1).join("\n") + src;
                  i = l - 1;
                }
              }
              loose = next || /\n\n(?!\s*$)/.test(item);
              if (i !== l - 1) {
                next = item.charAt(item.length - 1) === "\n";
                if (!loose) loose = next;
              }
              this.tokens.push({
                type: loose ? "loose_item_start" : "list_item_start"
              });
              this.token(item, false, bq);
              this.tokens.push({ type: "list_item_end" });
            }
            this.tokens.push({ type: "list_end" });
            continue;
          }
          if ((cap = this.rules.html.exec(src))) {
            src = src.substring(cap[0].length);
            this.tokens.push({
              type: this.options.sanitize ? "paragraph" : "html",
              pre:
                !this.options.sanitizer &&
                (cap[1] === "pre" || cap[1] === "script" || cap[1] === "style"),
              text: cap[0]
            });
            continue;
          }
          if (!bq && top && (cap = this.rules.def.exec(src))) {
            src = src.substring(cap[0].length);
            this.tokens.links[cap[1].toLowerCase()] = {
              href: cap[2],
              title: cap[3]
            };
            continue;
          }
          if (top && (cap = this.rules.table.exec(src))) {
            src = src.substring(cap[0].length);
            item = {
              type: "table",
              header: cap[1].replace(/^ *| *\| *$/g, "").split(/ *\| */),
              align: cap[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
              cells: cap[3].replace(/(?: *\| *)?\n$/, "").split("\n")
            };
            for (i = 0; i < item.align.length; i++) {
              if (/^ *-+: *$/.test(item.align[i])) {
                item.align[i] = "right";
              } else if (/^ *:-+: *$/.test(item.align[i])) {
                item.align[i] = "center";
              } else if (/^ *:-+ *$/.test(item.align[i])) {
                item.align[i] = "left";
              } else {
                item.align[i] = null;
              }
            }
            for (i = 0; i < item.cells.length; i++) {
              item.cells[i] = item.cells[i]
                .replace(/^ *\| *| *\| *$/g, "")
                .split(/ *\| */);
            }
            this.tokens.push(item);
            continue;
          }
          if (top && (cap = this.rules.paragraph.exec(src))) {
            src = src.substring(cap[0].length);
            this.tokens.push({
              type: "paragraph",
              text:
                cap[1].charAt(cap[1].length - 1) === "\n"
                  ? cap[1].slice(0, -1)
                  : cap[1]
            });
            continue;
          }
          if ((cap = this.rules.text.exec(src))) {
            src = src.substring(cap[0].length);
            this.tokens.push({ type: "text", text: cap[0] });
            continue;
          }
          if (src) {
            throw new Error("Infinite loop on byte: " + src.charCodeAt(0));
          }
        }
        return this.tokens;
      };
      var inline = {
        escape: /^\\([\\`*{}\[\]()#+\-.!_>])/,
        autolink: /^<([^ >]+(@|:\/)[^ >]+)>/,
        url: noop,
        tag: /^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/,
        link: /^!?\[(inside)\]\(href\)/,
        reflink: /^!?\[(inside)\]\s*\[([^\]]*)\]/,
        nolink: /^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,
        strong: /^_\_([\s\S]+?)_\_(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,
        em: /^\b_((?:[^_]|_\_)+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,
        code: /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,
        br: /^ {2,}\n(?!\s*$)/,
        del: noop,
        text: /^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/
      };
      inline._inside = /(?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*/;
      inline._href = /\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/;
      inline.link = replace(inline.link)("inside", inline._inside)(
        "href",
        inline._href
      )();
      inline.reflink = replace(inline.reflink)("inside", inline._inside)();
      inline.normal = merge({}, inline);
      inline.pedantic = merge({}, inline.normal, {
        strong: /^_\_(?=\S)([\s\S]*?\S)_\_(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
        em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/
      });
      inline.gfm = merge({}, inline.normal, {
        escape: replace(inline.escape)("])", "~|])")(),
        url: /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,
        del: /^~~(?=\S)([\s\S]*?\S)~~/,
        text: replace(inline.text)("]|", "~]|")("|", "|https?://|")()
      });
      inline.breaks = merge({}, inline.gfm, {
        br: replace(inline.br)("{2,}", "*")(),
        text: replace(inline.gfm.text)("{2,}", "*")()
      });
      function InlineLexer(links, options) {
        this.options = options || marked.defaults;
        this.links = links;
        this.rules = inline.normal;
        this.renderer = this.options.renderer || new Renderer();
        this.renderer.options = this.options;
        if (!this.links) {
          throw new Error("Tokens array requires a `links` property.");
        }
        if (this.options.gfm) {
          if (this.options.breaks) {
            this.rules = inline.breaks;
          } else {
            this.rules = inline.gfm;
          }
        } else if (this.options.pedantic) {
          this.rules = inline.pedantic;
        }
      }
      InlineLexer.rules = inline;
      InlineLexer.output = function(src, links, options) {
        var inline = new InlineLexer(links, options);
        return inline.output(src);
      };
      InlineLexer.prototype.output = function(src) {
        var out = "",
          link,
          text,
          href,
          cap;
        while (src) {
          if ((cap = this.rules.escape.exec(src))) {
            src = src.substring(cap[0].length);
            out += cap[1];
            continue;
          }
          if ((cap = this.rules.autolink.exec(src))) {
            src = src.substring(cap[0].length);
            if (cap[2] === "@") {
              text =
                cap[1].charAt(6) === ":"
                  ? this.mangle(cap[1].substring(7))
                  : this.mangle(cap[1]);
              href = this.mangle("mailto:") + text;
            } else {
              text = escape(cap[1]);
              href = text;
            }
            out += this.renderer.link(href, null, text);
            continue;
          }
          if (!this.inLink && (cap = this.rules.url.exec(src))) {
            src = src.substring(cap[0].length);
            text = escape(cap[1]);
            href = text;
            out += this.renderer.link(href, null, text);
            continue;
          }
          if ((cap = this.rules.tag.exec(src))) {
            if (!this.inLink && /^<a /i.test(cap[0])) {
              this.inLink = true;
            } else if (this.inLink && /^<\/a>/i.test(cap[0])) {
              this.inLink = false;
            }
            src = src.substring(cap[0].length);
            out += this.options.sanitize
              ? this.options.sanitizer
                ? this.options.sanitizer(cap[0])
                : escape(cap[0])
              : cap[0];
            continue;
          }
          if ((cap = this.rules.link.exec(src))) {
            src = src.substring(cap[0].length);
            this.inLink = true;
            out += this.outputLink(cap, { href: cap[2], title: cap[3] });
            this.inLink = false;
            continue;
          }
          if (
            (cap = this.rules.reflink.exec(src)) ||
            (cap = this.rules.nolink.exec(src))
          ) {
            src = src.substring(cap[0].length);
            link = (cap[2] || cap[1]).replace(/\s+/g, " ");
            link = this.links[link.toLowerCase()];
            if (!link || !link.href) {
              out += cap[0].charAt(0);
              src = cap[0].substring(1) + src;
              continue;
            }
            this.inLink = true;
            out += this.outputLink(cap, link);
            this.inLink = false;
            continue;
          }
          if ((cap = this.rules.strong.exec(src))) {
            src = src.substring(cap[0].length);
            out += this.renderer.strong(this.output(cap[2] || cap[1]));
            continue;
          }
          if ((cap = this.rules.em.exec(src))) {
            src = src.substring(cap[0].length);
            out += this.renderer.em(this.output(cap[2] || cap[1]));
            continue;
          }
          if ((cap = this.rules.code.exec(src))) {
            src = src.substring(cap[0].length);
            out += this.renderer.codespan(escape(cap[2], true));
            continue;
          }
          if ((cap = this.rules.br.exec(src))) {
            src = src.substring(cap[0].length);
            out += this.renderer.br();
            continue;
          }
          if ((cap = this.rules.del.exec(src))) {
            src = src.substring(cap[0].length);
            out += this.renderer.del(this.output(cap[1]));
            continue;
          }
          if ((cap = this.rules.text.exec(src))) {
            src = src.substring(cap[0].length);
            out += this.renderer.text(escape(this.smartypants(cap[0])));
            continue;
          }
          if (src) {
            throw new Error("Infinite loop on byte: " + src.charCodeAt(0));
          }
        }
        return out;
      };
      InlineLexer.prototype.outputLink = function(cap, link) {
        var href = escape(link.href),
          title = link.title ? escape(link.title) : null;
        return cap[0].charAt(0) !== "!"
          ? this.renderer.link(href, title, this.output(cap[1]))
          : this.renderer.image(href, title, escape(cap[1]));
      };
      InlineLexer.prototype.smartypants = function(text) {
        if (!this.options.smartypants) return text;
        return text
          .replace(/---/g, "—")
          .replace(/--/g, "–")
          .replace(/(^|[-\u2014\/(\[{"\s])'/g, "$1‘")
          .replace(/'/g, "’")
          .replace(/(^|[-\u2014\/(\[{\u2018\s])"/g, "$1“")
          .replace(/"/g, "”")
          .replace(/\.{3}/g, "…");
      };
      InlineLexer.prototype.mangle = function(text) {
        if (!this.options.mangle) return text;
        var out = "",
          l = text.length,
          i = 0,
          ch;
        for (; i < l; i++) {
          ch = text.charCodeAt(i);
          if (Math.random() > 0.5) {
            ch = "x" + ch.toString(16);
          }
          out += "&#" + ch + ";";
        }
        return out;
      };
      function Renderer(options) {
        this.options = options || {};
      }
      Renderer.prototype.code = function(code, lang, escaped) {
        if (this.options.highlight) {
          var out = this.options.highlight(code, lang);
          if (out != null && out !== code) {
            escaped = true;
            code = out;
          }
        }
        if (!lang) {
          return (
            "<pre><code>" +
            (escaped ? code : escape(code, true)) +
            "\n</code></pre>"
          );
        }
        return (
          '<pre><code class="' +
          this.options.langPrefix +
          escape(lang, true) +
          '">' +
          (escaped ? code : escape(code, true)) +
          "\n</code></pre>\n"
        );
      };
      Renderer.prototype.blockquote = function(quote) {
        return "<blockquote>\n" + quote + "</blockquote>\n";
      };
      Renderer.prototype.html = function(html) {
        return html;
      };
      Renderer.prototype.heading = function(text, level, raw) {
        return (
          "<h" +
          level +
          ' id="' +
          this.options.headerPrefix +
          raw.toLowerCase().replace(/[^\w]+/g, "-") +
          '">' +
          text +
          "</h" +
          level +
          ">\n"
        );
      };
      Renderer.prototype.hr = function() {
        return this.options.xhtml ? "<hr/>\n" : "<hr>\n";
      };
      Renderer.prototype.list = function(body, ordered) {
        var type = ordered ? "ol" : "ul";
        return "<" + type + ">\n" + body + "</" + type + ">\n";
      };
      Renderer.prototype.listitem = function(text) {
        return "<li>" + text + "</li>\n";
      };
      Renderer.prototype.paragraph = function(text) {
        return "<p>" + text + "</p>\n";
      };
      Renderer.prototype.table = function(header, body) {
        return (
          "<table>\n" +
          "<thead>\n" +
          header +
          "</thead>\n" +
          "<tbody>\n" +
          body +
          "</tbody>\n" +
          "</table>\n"
        );
      };
      Renderer.prototype.tablerow = function(content) {
        return "<tr>\n" + content + "</tr>\n";
      };
      Renderer.prototype.tablecell = function(content, flags) {
        var type = flags.header ? "th" : "td";
        var tag = flags.align
          ? "<" + type + ' style="text-align:' + flags.align + '">'
          : "<" + type + ">";
        return tag + content + "</" + type + ">\n";
      };
      Renderer.prototype.strong = function(text) {
        return "<strong>" + text + "</strong>";
      };
      Renderer.prototype.em = function(text) {
        return "<em>" + text + "</em>";
      };
      Renderer.prototype.codespan = function(text) {
        return "<code>" + text + "</code>";
      };
      Renderer.prototype.br = function() {
        return this.options.xhtml ? "<br/>" : "<br>";
      };
      Renderer.prototype.del = function(text) {
        return "<del>" + text + "</del>";
      };
      Renderer.prototype.link = function(href, title, text) {
        if (this.options.sanitize) {
          try {
            var prot = decodeURIComponent(unescape(href))
              .replace(/[^\w:]/g, "")
              .toLowerCase();
          } catch (e) {
            return "";
          }
          if (
            prot.indexOf("javascript:") === 0 ||
            prot.indexOf("vbscript:") === 0 ||
            prot.indexOf("data:") === 0
          ) {
            return "";
          }
        }
        var out = '<a href="' + href + '"';
        if (title) {
          out += ' title="' + title + '"';
        }
        out += ">" + text + "</a>";
        return out;
      };
      Renderer.prototype.image = function(href, title, text) {
        var out = '<img src="' + href + '" alt="' + text + '"';
        if (title) {
          out += ' title="' + title + '"';
        }
        out += this.options.xhtml ? "/>" : ">";
        return out;
      };
      Renderer.prototype.text = function(text) {
        return text;
      };
      function Parser(options) {
        this.tokens = [];
        this.token = null;
        this.options = options || marked.defaults;
        this.options.renderer = this.options.renderer || new Renderer();
        this.renderer = this.options.renderer;
        this.renderer.options = this.options;
      }
      Parser.parse = function(src, options, renderer) {
        var parser = new Parser(options, renderer);
        return parser.parse(src);
      };
      Parser.prototype.parse = function(src) {
        this.inline = new InlineLexer(src.links, this.options, this.renderer);
        this.tokens = src.reverse();
        var out = "";
        while (this.next()) {
          out += this.tok();
        }
        return out;
      };
      Parser.prototype.next = function() {
        return (this.token = this.tokens.pop());
      };
      Parser.prototype.peek = function() {
        return this.tokens[this.tokens.length - 1] || 0;
      };
      Parser.prototype.parseText = function() {
        var body = this.token.text;
        while (this.peek().type === "text") {
          body += "\n" + this.next().text;
        }
        return this.inline.output(body);
      };
      Parser.prototype.tok = function() {
        switch (this.token.type) {
          case "space": {
            return "";
          }
          case "hr": {
            return this.renderer.hr();
          }
          case "heading": {
            return this.renderer.heading(
              this.inline.output(this.token.text),
              this.token.depth,
              this.token.text
            );
          }
          case "code": {
            return this.renderer.code(
              this.token.text,
              this.token.lang,
              this.token.escaped
            );
          }
          case "table": {
            var header = "",
              body = "",
              i,
              row,
              cell,
              flags,
              j;
            cell = "";
            for (i = 0; i < this.token.header.length; i++) {
              flags = { header: true, align: this.token.align[i] };
              cell += this.renderer.tablecell(
                this.inline.output(this.token.header[i]),
                { header: true, align: this.token.align[i] }
              );
            }
            header += this.renderer.tablerow(cell);
            for (i = 0; i < this.token.cells.length; i++) {
              row = this.token.cells[i];
              cell = "";
              for (j = 0; j < row.length; j++) {
                cell += this.renderer.tablecell(this.inline.output(row[j]), {
                  header: false,
                  align: this.token.align[j]
                });
              }
              body += this.renderer.tablerow(cell);
            }
            return this.renderer.table(header, body);
          }
          case "blockquote_start": {
            var body = "";
            while (this.next().type !== "blockquote_end") {
              body += this.tok();
            }
            return this.renderer.blockquote(body);
          }
          case "list_start": {
            var body = "",
              ordered = this.token.ordered;
            while (this.next().type !== "list_end") {
              body += this.tok();
            }
            return this.renderer.list(body, ordered);
          }
          case "list_item_start": {
            var body = "";
            while (this.next().type !== "list_item_end") {
              body +=
                this.token.type === "text" ? this.parseText() : this.tok();
            }
            return this.renderer.listitem(body);
          }
          case "loose_item_start": {
            var body = "";
            while (this.next().type !== "list_item_end") {
              body += this.tok();
            }
            return this.renderer.listitem(body);
          }
          case "html": {
            var html =
              !this.token.pre && !this.options.pedantic
                ? this.inline.output(this.token.text)
                : this.token.text;
            return this.renderer.html(html);
          }
          case "paragraph": {
            return this.renderer.paragraph(this.inline.output(this.token.text));
          }
          case "text": {
            return this.renderer.paragraph(this.parseText());
          }
        }
      };
      function escape(html, encode) {
        return html
          .replace(!encode ? /&(?!#?\w+;)/g : /&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/"/g, "&quot;")
          .replace(/'/g, "&#39;");
      }
      function unescape(html) {
        return html.replace(
          /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/g,
          function(_, n) {
            n = n.toLowerCase();
            if (n === "colon") return ":";
            if (n.charAt(0) === "#") {
              return n.charAt(1) === "x"
                ? String.fromCharCode(parseInt(n.substring(2), 16))
                : String.fromCharCode(+n.substring(1));
            }
            return "";
          }
        );
      }
      function replace(regex, opt) {
        regex = regex.source;
        opt = opt || "";
        return function self(name, val) {
          if (!name) return new RegExp(regex, opt);
          val = val.source || val;
          val = val.replace(/(^|[^\[])\^/g, "$1");
          regex = regex.replace(name, val);
          return self;
        };
      }
      function noop() {}
      noop.exec = noop;
      function merge(obj) {
        var i = 1,
          target,
          key;
        for (; i < arguments.length; i++) {
          target = arguments[i];
          for (key in target) {
            if (Object.prototype.hasOwnProperty.call(target, key)) {
              obj[key] = target[key];
            }
          }
        }
        return obj;
      }
      function marked(src, opt, callback) {
        if (callback || typeof opt === "function") {
          if (!callback) {
            callback = opt;
            opt = null;
          }
          opt = merge({}, marked.defaults, opt || {});
          var highlight = opt.highlight,
            tokens,
            pending,
            i = 0;
          try {
            tokens = Lexer.lex(src, opt);
          } catch (e) {
            return callback(e);
          }
          pending = tokens.length;
          var done = function(err) {
            if (err) {
              opt.highlight = highlight;
              return callback(err);
            }
            var out;
            try {
              out = Parser.parse(tokens, opt);
            } catch (e) {
              err = e;
            }
            opt.highlight = highlight;
            return err ? callback(err) : callback(null, out);
          };
          if (!highlight || highlight.length < 3) {
            return done();
          }
          delete opt.highlight;
          if (!pending) return done();
          for (; i < tokens.length; i++) {
            (function(token) {
              if (token.type !== "code") {
                return --pending || done();
              }
              return highlight(token.text, token.lang, function(err, code) {
                if (err) return done(err);
                if (code == null || code === token.text) {
                  return --pending || done();
                }
                token.text = code;
                token.escaped = true;
                --pending || done();
              });
            })(tokens[i]);
          }
          return;
        }
        try {
          if (opt) opt = merge({}, marked.defaults, opt);
          return Parser.parse(Lexer.lex(src, opt), opt);
        } catch (e) {
          e.message +=
            "\nPlease report this to https://github.com/chjj/marked.";
          if ((opt || marked.defaults).silent) {
            return (
              "<p>An error occured:</p><pre>" +
              escape(e.message + "", true) +
              "</pre>"
            );
          }
          throw e;
        }
      }
      marked.options = marked.setOptions = function(opt) {
        merge(marked.defaults, opt);
        return marked;
      };
      marked.defaults = {
        gfm: true,
        tables: true,
        breaks: false,
        pedantic: false,
        sanitize: false,
        sanitizer: null,
        mangle: true,
        smartLists: false,
        silent: false,
        highlight: null,
        langPrefix: "lang-",
        smartypants: false,
        headerPrefix: "",
        renderer: new Renderer(),
        xhtml: false
      };
      marked.Parser = Parser;
      marked.parser = Parser.parse;
      marked.Renderer = Renderer;
      marked.Lexer = Lexer;
      marked.lexer = Lexer.lex;
      marked.InlineLexer = InlineLexer;
      marked.inlineLexer = InlineLexer.output;
      marked.parse = marked;
      if (typeof module !== "undefined" && typeof exports === "object") {
        module.exports = marked;
      } else if (typeof define === "function" && define.amd) {
        define(function() {
          return marked;
        });
      } else {
        this.marked = marked;
      }
    }.call(
      (function() {
        return this || (typeof window !== "undefined" ? window : global);
      })()
    ));

    return module.exports;
  })();

  // FORMAT OPTIONS FOR MARKED IMPLEMENTATION

  function _Markdown_formatOptions(options) {
    function toHighlight(code, lang) {
      if (!lang && elm$core$Maybe$isJust(options.defaultHighlighting)) {
        lang = options.defaultHighlighting.a;
      }

      if (
        typeof hljs !== "undefined" &&
        lang &&
        hljs.listLanguages().indexOf(lang) >= 0
      ) {
        return hljs.highlight(lang, code, true).value;
      }

      return code;
    }

    var gfm = options.githubFlavored.a;

    return {
      highlight: toHighlight,
      gfm: gfm,
      tables: gfm && gfm.tables,
      breaks: gfm && gfm.breaks,
      sanitize: options.sanitize,
      smartypants: options.smartypants
    };
  }
  var elm$core$Basics$apR = F2(function(x, f) {
    return f(x);
  });
  var elm$core$Array$branchFactor = 32;
  var elm$core$Array$Array_elm_builtin = F4(function(a, b, c, d) {
    return { $: "Array_elm_builtin", a: a, b: b, c: c, d: d };
  });
  var elm$core$Basics$EQ = { $: "EQ" };
  var elm$core$Basics$GT = { $: "GT" };
  var elm$core$Basics$LT = { $: "LT" };
  var elm$core$Dict$foldr = F3(function(func, acc, t) {
    foldr: while (true) {
      if (t.$ === "RBEmpty_elm_builtin") {
        return acc;
      } else {
        var key = t.b;
        var value = t.c;
        var left = t.d;
        var right = t.e;
        var $temp$func = func,
          $temp$acc = A3(
            func,
            key,
            value,
            A3(elm$core$Dict$foldr, func, acc, right)
          ),
          $temp$t = left;
        func = $temp$func;
        acc = $temp$acc;
        t = $temp$t;
        continue foldr;
      }
    }
  });
  var elm$core$List$cons = _List_cons;
  var elm$core$Dict$toList = function(dict) {
    return A3(
      elm$core$Dict$foldr,
      F3(function(key, value, list) {
        return A2(elm$core$List$cons, _Utils_Tuple2(key, value), list);
      }),
      _List_Nil,
      dict
    );
  };
  var elm$core$Dict$keys = function(dict) {
    return A3(
      elm$core$Dict$foldr,
      F3(function(key, value, keyList) {
        return A2(elm$core$List$cons, key, keyList);
      }),
      _List_Nil,
      dict
    );
  };
  var elm$core$Set$toList = function(_n0) {
    var dict = _n0.a;
    return elm$core$Dict$keys(dict);
  };
  var elm$core$Elm$JsArray$foldr = _JsArray_foldr;
  var elm$core$Array$foldr = F3(function(func, baseCase, _n0) {
    var tree = _n0.c;
    var tail = _n0.d;
    var helper = F2(function(node, acc) {
      if (node.$ === "SubTree") {
        var subTree = node.a;
        return A3(elm$core$Elm$JsArray$foldr, helper, acc, subTree);
      } else {
        var values = node.a;
        return A3(elm$core$Elm$JsArray$foldr, func, acc, values);
      }
    });
    return A3(
      elm$core$Elm$JsArray$foldr,
      helper,
      A3(elm$core$Elm$JsArray$foldr, func, baseCase, tail),
      tree
    );
  });
  var elm$core$Array$toList = function(array) {
    return A3(elm$core$Array$foldr, elm$core$List$cons, _List_Nil, array);
  };
  var elm$core$Basics$ceiling = _Basics_ceiling;
  var elm$core$Basics$fdiv = _Basics_fdiv;
  var elm$core$Basics$logBase = F2(function(base, number) {
    return _Basics_log(number) / _Basics_log(base);
  });
  var elm$core$Basics$toFloat = _Basics_toFloat;
  var elm$core$Array$shiftStep = elm$core$Basics$ceiling(
    A2(elm$core$Basics$logBase, 2, elm$core$Array$branchFactor)
  );
  var elm$core$Elm$JsArray$empty = _JsArray_empty;
  var elm$core$Array$empty = A4(
    elm$core$Array$Array_elm_builtin,
    0,
    elm$core$Array$shiftStep,
    elm$core$Elm$JsArray$empty,
    elm$core$Elm$JsArray$empty
  );
  var elm$core$Array$Leaf = function(a) {
    return { $: "Leaf", a: a };
  };
  var elm$core$Array$SubTree = function(a) {
    return { $: "SubTree", a: a };
  };
  var elm$core$Elm$JsArray$initializeFromList = _JsArray_initializeFromList;
  var elm$core$List$foldl = F3(function(func, acc, list) {
    foldl: while (true) {
      if (!list.b) {
        return acc;
      } else {
        var x = list.a;
        var xs = list.b;
        var $temp$func = func,
          $temp$acc = A2(func, x, acc),
          $temp$list = xs;
        func = $temp$func;
        acc = $temp$acc;
        list = $temp$list;
        continue foldl;
      }
    }
  });
  var elm$core$List$reverse = function(list) {
    return A3(elm$core$List$foldl, elm$core$List$cons, _List_Nil, list);
  };
  var elm$core$Array$compressNodes = F2(function(nodes, acc) {
    compressNodes: while (true) {
      var _n0 = A2(
        elm$core$Elm$JsArray$initializeFromList,
        elm$core$Array$branchFactor,
        nodes
      );
      var node = _n0.a;
      var remainingNodes = _n0.b;
      var newAcc = A2(elm$core$List$cons, elm$core$Array$SubTree(node), acc);
      if (!remainingNodes.b) {
        return elm$core$List$reverse(newAcc);
      } else {
        var $temp$nodes = remainingNodes,
          $temp$acc = newAcc;
        nodes = $temp$nodes;
        acc = $temp$acc;
        continue compressNodes;
      }
    }
  });
  var elm$core$Basics$eq = _Utils_equal;
  var elm$core$Tuple$first = function(_n0) {
    var x = _n0.a;
    return x;
  };
  var elm$core$Array$treeFromBuilder = F2(function(nodeList, nodeListSize) {
    treeFromBuilder: while (true) {
      var newNodeSize = elm$core$Basics$ceiling(
        nodeListSize / elm$core$Array$branchFactor
      );
      if (newNodeSize === 1) {
        return A2(
          elm$core$Elm$JsArray$initializeFromList,
          elm$core$Array$branchFactor,
          nodeList
        ).a;
      } else {
        var $temp$nodeList = A2(
            elm$core$Array$compressNodes,
            nodeList,
            _List_Nil
          ),
          $temp$nodeListSize = newNodeSize;
        nodeList = $temp$nodeList;
        nodeListSize = $temp$nodeListSize;
        continue treeFromBuilder;
      }
    }
  });
  var elm$core$Basics$add = _Basics_add;
  var elm$core$Basics$apL = F2(function(f, x) {
    return f(x);
  });
  var elm$core$Basics$floor = _Basics_floor;
  var elm$core$Basics$gt = _Utils_gt;
  var elm$core$Basics$max = F2(function(x, y) {
    return _Utils_cmp(x, y) > 0 ? x : y;
  });
  var elm$core$Basics$mul = _Basics_mul;
  var elm$core$Basics$sub = _Basics_sub;
  var elm$core$Elm$JsArray$length = _JsArray_length;
  var elm$core$Array$builderToArray = F2(function(reverseNodeList, builder) {
    if (!builder.nodeListSize) {
      return A4(
        elm$core$Array$Array_elm_builtin,
        elm$core$Elm$JsArray$length(builder.tail),
        elm$core$Array$shiftStep,
        elm$core$Elm$JsArray$empty,
        builder.tail
      );
    } else {
      var treeLen = builder.nodeListSize * elm$core$Array$branchFactor;
      var depth = elm$core$Basics$floor(
        A2(elm$core$Basics$logBase, elm$core$Array$branchFactor, treeLen - 1)
      );
      var correctNodeList = reverseNodeList
        ? elm$core$List$reverse(builder.nodeList)
        : builder.nodeList;
      var tree = A2(
        elm$core$Array$treeFromBuilder,
        correctNodeList,
        builder.nodeListSize
      );
      return A4(
        elm$core$Array$Array_elm_builtin,
        elm$core$Elm$JsArray$length(builder.tail) + treeLen,
        A2(elm$core$Basics$max, 5, depth * elm$core$Array$shiftStep),
        tree,
        builder.tail
      );
    }
  });
  var elm$core$Basics$False = { $: "False" };
  var elm$core$Basics$idiv = _Basics_idiv;
  var elm$core$Basics$lt = _Utils_lt;
  var elm$core$Elm$JsArray$initialize = _JsArray_initialize;
  var elm$core$Array$initializeHelp = F5(function(
    fn,
    fromIndex,
    len,
    nodeList,
    tail
  ) {
    initializeHelp: while (true) {
      if (fromIndex < 0) {
        return A2(elm$core$Array$builderToArray, false, {
          nodeList: nodeList,
          nodeListSize: (len / elm$core$Array$branchFactor) | 0,
          tail: tail
        });
      } else {
        var leaf = elm$core$Array$Leaf(
          A3(
            elm$core$Elm$JsArray$initialize,
            elm$core$Array$branchFactor,
            fromIndex,
            fn
          )
        );
        var $temp$fn = fn,
          $temp$fromIndex = fromIndex - elm$core$Array$branchFactor,
          $temp$len = len,
          $temp$nodeList = A2(elm$core$List$cons, leaf, nodeList),
          $temp$tail = tail;
        fn = $temp$fn;
        fromIndex = $temp$fromIndex;
        len = $temp$len;
        nodeList = $temp$nodeList;
        tail = $temp$tail;
        continue initializeHelp;
      }
    }
  });
  var elm$core$Basics$le = _Utils_le;
  var elm$core$Basics$remainderBy = _Basics_remainderBy;
  var elm$core$Array$initialize = F2(function(len, fn) {
    if (len <= 0) {
      return elm$core$Array$empty;
    } else {
      var tailLen = len % elm$core$Array$branchFactor;
      var tail = A3(
        elm$core$Elm$JsArray$initialize,
        tailLen,
        len - tailLen,
        fn
      );
      var initialFromIndex = len - tailLen - elm$core$Array$branchFactor;
      return A5(
        elm$core$Array$initializeHelp,
        fn,
        initialFromIndex,
        len,
        _List_Nil,
        tail
      );
    }
  });
  var elm$core$Maybe$Just = function(a) {
    return { $: "Just", a: a };
  };
  var elm$core$Maybe$Nothing = { $: "Nothing" };
  var elm$core$Result$Err = function(a) {
    return { $: "Err", a: a };
  };
  var elm$core$Result$Ok = function(a) {
    return { $: "Ok", a: a };
  };
  var elm$core$Basics$True = { $: "True" };
  var elm$core$Result$isOk = function(result) {
    if (result.$ === "Ok") {
      return true;
    } else {
      return false;
    }
  };
  var elm$json$Json$Decode$Failure = F2(function(a, b) {
    return { $: "Failure", a: a, b: b };
  });
  var elm$json$Json$Decode$Field = F2(function(a, b) {
    return { $: "Field", a: a, b: b };
  });
  var elm$json$Json$Decode$Index = F2(function(a, b) {
    return { $: "Index", a: a, b: b };
  });
  var elm$json$Json$Decode$OneOf = function(a) {
    return { $: "OneOf", a: a };
  };
  var elm$core$Basics$and = _Basics_and;
  var elm$core$Basics$append = _Utils_append;
  var elm$core$Basics$or = _Basics_or;
  var elm$core$Char$toCode = _Char_toCode;
  var elm$core$Char$isLower = function(_char) {
    var code = elm$core$Char$toCode(_char);
    return 97 <= code && code <= 122;
  };
  var elm$core$Char$isUpper = function(_char) {
    var code = elm$core$Char$toCode(_char);
    return code <= 90 && 65 <= code;
  };
  var elm$core$Char$isAlpha = function(_char) {
    return elm$core$Char$isLower(_char) || elm$core$Char$isUpper(_char);
  };
  var elm$core$Char$isDigit = function(_char) {
    var code = elm$core$Char$toCode(_char);
    return code <= 57 && 48 <= code;
  };
  var elm$core$Char$isAlphaNum = function(_char) {
    return (
      elm$core$Char$isLower(_char) ||
      (elm$core$Char$isUpper(_char) || elm$core$Char$isDigit(_char))
    );
  };
  var elm$core$List$length = function(xs) {
    return A3(
      elm$core$List$foldl,
      F2(function(_n0, i) {
        return i + 1;
      }),
      0,
      xs
    );
  };
  var elm$core$List$map2 = _List_map2;
  var elm$core$List$rangeHelp = F3(function(lo, hi, list) {
    rangeHelp: while (true) {
      if (_Utils_cmp(lo, hi) < 1) {
        var $temp$lo = lo,
          $temp$hi = hi - 1,
          $temp$list = A2(elm$core$List$cons, hi, list);
        lo = $temp$lo;
        hi = $temp$hi;
        list = $temp$list;
        continue rangeHelp;
      } else {
        return list;
      }
    }
  });
  var elm$core$List$range = F2(function(lo, hi) {
    return A3(elm$core$List$rangeHelp, lo, hi, _List_Nil);
  });
  var elm$core$List$indexedMap = F2(function(f, xs) {
    return A3(
      elm$core$List$map2,
      f,
      A2(elm$core$List$range, 0, elm$core$List$length(xs) - 1),
      xs
    );
  });
  var elm$core$String$all = _String_all;
  var elm$core$String$fromInt = _String_fromNumber;
  var elm$core$String$join = F2(function(sep, chunks) {
    return A2(_String_join, sep, _List_toArray(chunks));
  });
  var elm$core$String$uncons = _String_uncons;
  var elm$core$String$split = F2(function(sep, string) {
    return _List_fromArray(A2(_String_split, sep, string));
  });
  var elm$json$Json$Decode$indent = function(str) {
    return A2(
      elm$core$String$join,
      "\n    ",
      A2(elm$core$String$split, "\n", str)
    );
  };
  var elm$json$Json$Encode$encode = _Json_encode;
  var elm$json$Json$Decode$errorOneOf = F2(function(i, error) {
    return (
      "\n\n(" +
      (elm$core$String$fromInt(i + 1) +
        (") " +
          elm$json$Json$Decode$indent(
            elm$json$Json$Decode$errorToString(error)
          )))
    );
  });
  var elm$json$Json$Decode$errorToString = function(error) {
    return A2(elm$json$Json$Decode$errorToStringHelp, error, _List_Nil);
  };
  var elm$json$Json$Decode$errorToStringHelp = F2(function(error, context) {
    errorToStringHelp: while (true) {
      switch (error.$) {
        case "Field":
          var f = error.a;
          var err = error.b;
          var isSimple = (function() {
            var _n1 = elm$core$String$uncons(f);
            if (_n1.$ === "Nothing") {
              return false;
            } else {
              var _n2 = _n1.a;
              var _char = _n2.a;
              var rest = _n2.b;
              return (
                elm$core$Char$isAlpha(_char) &&
                A2(elm$core$String$all, elm$core$Char$isAlphaNum, rest)
              );
            }
          })();
          var fieldName = isSimple ? "." + f : "['" + (f + "']");
          var $temp$error = err,
            $temp$context = A2(elm$core$List$cons, fieldName, context);
          error = $temp$error;
          context = $temp$context;
          continue errorToStringHelp;
        case "Index":
          var i = error.a;
          var err = error.b;
          var indexName = "[" + (elm$core$String$fromInt(i) + "]");
          var $temp$error = err,
            $temp$context = A2(elm$core$List$cons, indexName, context);
          error = $temp$error;
          context = $temp$context;
          continue errorToStringHelp;
        case "OneOf":
          var errors = error.a;
          if (!errors.b) {
            return (
              "Ran into a Json.Decode.oneOf with no possibilities" +
              (function() {
                if (!context.b) {
                  return "!";
                } else {
                  return (
                    " at json" +
                    A2(elm$core$String$join, "", elm$core$List$reverse(context))
                  );
                }
              })()
            );
          } else {
            if (!errors.b.b) {
              var err = errors.a;
              var $temp$error = err,
                $temp$context = context;
              error = $temp$error;
              context = $temp$context;
              continue errorToStringHelp;
            } else {
              var starter = (function() {
                if (!context.b) {
                  return "Json.Decode.oneOf";
                } else {
                  return (
                    "The Json.Decode.oneOf at json" +
                    A2(elm$core$String$join, "", elm$core$List$reverse(context))
                  );
                }
              })();
              var introduction =
                starter +
                (" failed in the following " +
                  (elm$core$String$fromInt(elm$core$List$length(errors)) +
                    " ways:"));
              return A2(
                elm$core$String$join,
                "\n\n",
                A2(
                  elm$core$List$cons,
                  introduction,
                  A2(
                    elm$core$List$indexedMap,
                    elm$json$Json$Decode$errorOneOf,
                    errors
                  )
                )
              );
            }
          }
        default:
          var msg = error.a;
          var json = error.b;
          var introduction = (function() {
            if (!context.b) {
              return "Problem with the given value:\n\n";
            } else {
              return (
                "Problem with the value at json" +
                (A2(elm$core$String$join, "", elm$core$List$reverse(context)) +
                  ":\n\n    ")
              );
            }
          })();
          return (
            introduction +
            (elm$json$Json$Decode$indent(
              A2(elm$json$Json$Encode$encode, 4, json)
            ) +
              ("\n\n" + msg))
          );
      }
    }
  });
  var elm$json$Json$Decode$map2 = _Json_map2;
  var NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$custom = elm$json$Json$Decode$map2(
    elm$core$Basics$apR
  );
  var elm$json$Json$Decode$field = _Json_decodeField;
  var NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required = F3(
    function(key, valDecoder, decoder) {
      return A2(
        NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$custom,
        A2(elm$json$Json$Decode$field, key, valDecoder),
        decoder
      );
    }
  );
  var author$project$Api$Cred = F2(function(a, b) {
    return { $: "Cred", a: a, b: b };
  });
  var author$project$Username$Username = function(a) {
    return { $: "Username", a: a };
  };
  var elm$core$Basics$identity = function(x) {
    return x;
  };
  var elm$json$Json$Decode$map = _Json_map1;
  var elm$json$Json$Decode$string = _Json_decodeString;
  var author$project$Username$decoder = A2(
    elm$json$Json$Decode$map,
    author$project$Username$Username,
    elm$json$Json$Decode$string
  );
  var elm$json$Json$Decode$succeed = _Json_succeed;
  var author$project$Api$credDecoder = A3(
    NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
    "token",
    elm$json$Json$Decode$string,
    A3(
      NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
      "username",
      author$project$Username$decoder,
      elm$json$Json$Decode$succeed(author$project$Api$Cred)
    )
  );
  var author$project$Api$decoderFromCred = function(decoder) {
    return A3(
      elm$json$Json$Decode$map2,
      F2(function(fromCred, cred) {
        return fromCred(cred);
      }),
      decoder,
      author$project$Api$credDecoder
    );
  };
  var author$project$Api$storageDecoder = function(viewerDecoder) {
    return A2(
      elm$json$Json$Decode$field,
      "user",
      author$project$Api$decoderFromCred(viewerDecoder)
    );
  };
  var elm$browser$Browser$External = function(a) {
    return { $: "External", a: a };
  };
  var elm$browser$Browser$Internal = function(a) {
    return { $: "Internal", a: a };
  };
  var elm$browser$Browser$Dom$NotFound = function(a) {
    return { $: "NotFound", a: a };
  };
  var elm$core$Basics$never = function(_n0) {
    never: while (true) {
      var nvr = _n0.a;
      var $temp$_n0 = nvr;
      _n0 = $temp$_n0;
      continue never;
    }
  };
  var elm$core$Task$Perform = function(a) {
    return { $: "Perform", a: a };
  };
  var elm$core$Task$succeed = _Scheduler_succeed;
  var elm$core$Task$init = elm$core$Task$succeed(_Utils_Tuple0);
  var elm$core$List$foldrHelper = F4(function(fn, acc, ctr, ls) {
    if (!ls.b) {
      return acc;
    } else {
      var a = ls.a;
      var r1 = ls.b;
      if (!r1.b) {
        return A2(fn, a, acc);
      } else {
        var b = r1.a;
        var r2 = r1.b;
        if (!r2.b) {
          return A2(fn, a, A2(fn, b, acc));
        } else {
          var c = r2.a;
          var r3 = r2.b;
          if (!r3.b) {
            return A2(fn, a, A2(fn, b, A2(fn, c, acc)));
          } else {
            var d = r3.a;
            var r4 = r3.b;
            var res =
              ctr > 500
                ? A3(elm$core$List$foldl, fn, acc, elm$core$List$reverse(r4))
                : A4(elm$core$List$foldrHelper, fn, acc, ctr + 1, r4);
            return A2(fn, a, A2(fn, b, A2(fn, c, A2(fn, d, res))));
          }
        }
      }
    }
  });
  var elm$core$List$foldr = F3(function(fn, acc, ls) {
    return A4(elm$core$List$foldrHelper, fn, acc, 0, ls);
  });
  var elm$core$List$map = F2(function(f, xs) {
    return A3(
      elm$core$List$foldr,
      F2(function(x, acc) {
        return A2(elm$core$List$cons, f(x), acc);
      }),
      _List_Nil,
      xs
    );
  });
  var elm$core$Task$andThen = _Scheduler_andThen;
  var elm$core$Task$map = F2(function(func, taskA) {
    return A2(
      elm$core$Task$andThen,
      function(a) {
        return elm$core$Task$succeed(func(a));
      },
      taskA
    );
  });
  var elm$core$Task$map2 = F3(function(func, taskA, taskB) {
    return A2(
      elm$core$Task$andThen,
      function(a) {
        return A2(
          elm$core$Task$andThen,
          function(b) {
            return elm$core$Task$succeed(A2(func, a, b));
          },
          taskB
        );
      },
      taskA
    );
  });
  var elm$core$Task$sequence = function(tasks) {
    return A3(
      elm$core$List$foldr,
      elm$core$Task$map2(elm$core$List$cons),
      elm$core$Task$succeed(_List_Nil),
      tasks
    );
  };
  var elm$core$Platform$sendToApp = _Platform_sendToApp;
  var elm$core$Task$spawnCmd = F2(function(router, _n0) {
    var task = _n0.a;
    return _Scheduler_spawn(
      A2(elm$core$Task$andThen, elm$core$Platform$sendToApp(router), task)
    );
  });
  var elm$core$Task$onEffects = F3(function(router, commands, state) {
    return A2(
      elm$core$Task$map,
      function(_n0) {
        return _Utils_Tuple0;
      },
      elm$core$Task$sequence(
        A2(elm$core$List$map, elm$core$Task$spawnCmd(router), commands)
      )
    );
  });
  var elm$core$Task$onSelfMsg = F3(function(_n0, _n1, _n2) {
    return elm$core$Task$succeed(_Utils_Tuple0);
  });
  var elm$core$Task$cmdMap = F2(function(tagger, _n0) {
    var task = _n0.a;
    return elm$core$Task$Perform(A2(elm$core$Task$map, tagger, task));
  });
  _Platform_effectManagers["Task"] = _Platform_createManager(
    elm$core$Task$init,
    elm$core$Task$onEffects,
    elm$core$Task$onSelfMsg,
    elm$core$Task$cmdMap
  );
  var elm$core$Task$command = _Platform_leaf("Task");
  var elm$core$Task$perform = F2(function(toMessage, task) {
    return elm$core$Task$command(
      elm$core$Task$Perform(A2(elm$core$Task$map, toMessage, task))
    );
  });
  var elm$browser$Debugger$Expando$ArraySeq = { $: "ArraySeq" };
  var elm$browser$Debugger$Expando$Constructor = F3(function(a, b, c) {
    return { $: "Constructor", a: a, b: b, c: c };
  });
  var elm$browser$Debugger$Expando$Dictionary = F2(function(a, b) {
    return { $: "Dictionary", a: a, b: b };
  });
  var elm$browser$Debugger$Expando$ListSeq = { $: "ListSeq" };
  var elm$browser$Debugger$Expando$Primitive = function(a) {
    return { $: "Primitive", a: a };
  };
  var elm$browser$Debugger$Expando$Record = F2(function(a, b) {
    return { $: "Record", a: a, b: b };
  });
  var elm$browser$Debugger$Expando$S = function(a) {
    return { $: "S", a: a };
  };
  var elm$browser$Debugger$Expando$Sequence = F3(function(a, b, c) {
    return { $: "Sequence", a: a, b: b, c: c };
  });
  var elm$browser$Debugger$Expando$SetSeq = { $: "SetSeq" };
  var elm$browser$Debugger$Main$Down = { $: "Down" };
  var elm$browser$Debugger$Main$NoOp = { $: "NoOp" };
  var elm$browser$Debugger$Main$Up = { $: "Up" };
  var elm$browser$Debugger$Main$UserMsg = function(a) {
    return { $: "UserMsg", a: a };
  };
  var elm$browser$Debugger$History$size = function(history) {
    return history.numMessages;
  };
  var elm$browser$Debugger$Main$Export = { $: "Export" };
  var elm$browser$Debugger$Main$Import = { $: "Import" };
  var elm$browser$Debugger$Main$Open = { $: "Open" };
  var elm$browser$Debugger$Main$OverlayMsg = function(a) {
    return { $: "OverlayMsg", a: a };
  };
  var elm$browser$Debugger$Main$Resume = { $: "Resume" };
  var elm$browser$Debugger$Main$isPaused = function(state) {
    if (state.$ === "Running") {
      return false;
    } else {
      return true;
    }
  };
  var elm$browser$Debugger$Overlay$Accept = function(a) {
    return { $: "Accept", a: a };
  };
  var elm$browser$Debugger$Overlay$Choose = F2(function(a, b) {
    return { $: "Choose", a: a, b: b };
  });
  var elm$browser$Debugger$Overlay$goodNews1 =
    "\nThe good news is that having values like this in your message type is not\nso great in the long run. You are better off using simpler data, like\n";
  var elm$browser$Debugger$Overlay$goodNews2 =
    "\nfunction can pattern match on that data and call whatever functions, JSON\ndecoders, etc. you need. This makes the code much more explicit and easy to\nfollow for other readers (or you in a few months!)\n";
  var elm$virtual_dom$VirtualDom$toHandlerInt = function(handler) {
    switch (handler.$) {
      case "Normal":
        return 0;
      case "MayStopPropagation":
        return 1;
      case "MayPreventDefault":
        return 2;
      default:
        return 3;
    }
  };
  var elm$html$Html$code = _VirtualDom_node("code");
  var elm$virtual_dom$VirtualDom$text = _VirtualDom_text;
  var elm$html$Html$text = elm$virtual_dom$VirtualDom$text;
  var elm$browser$Debugger$Overlay$viewCode = function(name) {
    return A2(
      elm$html$Html$code,
      _List_Nil,
      _List_fromArray([elm$html$Html$text(name)])
    );
  };
  var elm$browser$Debugger$Overlay$addCommas = function(items) {
    if (!items.b) {
      return "";
    } else {
      if (!items.b.b) {
        var item = items.a;
        return item;
      } else {
        if (!items.b.b.b) {
          var item1 = items.a;
          var _n1 = items.b;
          var item2 = _n1.a;
          return item1 + (" and " + item2);
        } else {
          var lastItem = items.a;
          var otherItems = items.b;
          return A2(
            elm$core$String$join,
            ", ",
            _Utils_ap(otherItems, _List_fromArray([" and " + lastItem]))
          );
        }
      }
    }
  };
  var elm$browser$Debugger$Overlay$problemToString = function(problem) {
    switch (problem.$) {
      case "Function":
        return "functions";
      case "Decoder":
        return "JSON decoders";
      case "Task":
        return "tasks";
      case "Process":
        return "processes";
      case "Socket":
        return "web sockets";
      case "Request":
        return "HTTP requests";
      case "Program":
        return "programs";
      default:
        return "virtual DOM values";
    }
  };
  var elm$html$Html$li = _VirtualDom_node("li");
  var elm$browser$Debugger$Overlay$viewProblemType = function(_n0) {
    var name = _n0.name;
    var problems = _n0.problems;
    return A2(
      elm$html$Html$li,
      _List_Nil,
      _List_fromArray([
        elm$browser$Debugger$Overlay$viewCode(name),
        elm$html$Html$text(
          " can contain " +
            (elm$browser$Debugger$Overlay$addCommas(
              A2(
                elm$core$List$map,
                elm$browser$Debugger$Overlay$problemToString,
                problems
              )
            ) +
              ".")
        )
      ])
    );
  };
  var elm$html$Html$a = _VirtualDom_node("a");
  var elm$html$Html$p = _VirtualDom_node("p");
  var elm$html$Html$ul = _VirtualDom_node("ul");
  var elm$json$Json$Encode$string = _Json_wrap;
  var elm$html$Html$Attributes$stringProperty = F2(function(key, string) {
    return A2(_VirtualDom_property, key, elm$json$Json$Encode$string(string));
  });
  var elm$html$Html$Attributes$href = function(url) {
    return A2(
      elm$html$Html$Attributes$stringProperty,
      "href",
      _VirtualDom_noJavaScriptUri(url)
    );
  };
  var elm$browser$Debugger$Overlay$viewBadMetadata = function(_n0) {
    var message = _n0.message;
    var problems = _n0.problems;
    return _List_fromArray([
      A2(
        elm$html$Html$p,
        _List_Nil,
        _List_fromArray([
          elm$html$Html$text("The "),
          elm$browser$Debugger$Overlay$viewCode(message),
          elm$html$Html$text(
            " type of your program cannot be reliably serialized for history files."
          )
        ])
      ),
      A2(
        elm$html$Html$p,
        _List_Nil,
        _List_fromArray([
          elm$html$Html$text(
            "Functions cannot be serialized, nor can values that contain functions. This is a problem in these places:"
          )
        ])
      ),
      A2(
        elm$html$Html$ul,
        _List_Nil,
        A2(
          elm$core$List$map,
          elm$browser$Debugger$Overlay$viewProblemType,
          problems
        )
      ),
      A2(
        elm$html$Html$p,
        _List_Nil,
        _List_fromArray([
          elm$html$Html$text(elm$browser$Debugger$Overlay$goodNews1),
          A2(
            elm$html$Html$a,
            _List_fromArray([
              elm$html$Html$Attributes$href(
                "https://guide.elm-lang.org/types/union_types.html"
              )
            ]),
            _List_fromArray([elm$html$Html$text("union types")])
          ),
          elm$html$Html$text(", in your messages. From there, your "),
          elm$browser$Debugger$Overlay$viewCode("update"),
          elm$html$Html$text(elm$browser$Debugger$Overlay$goodNews2)
        ])
      )
    ]);
  };
  var elm$browser$Debugger$Overlay$Cancel = { $: "Cancel" };
  var elm$browser$Debugger$Overlay$Proceed = { $: "Proceed" };
  var elm$html$Html$button = _VirtualDom_node("button");
  var elm$html$Html$div = _VirtualDom_node("div");
  var elm$virtual_dom$VirtualDom$style = _VirtualDom_style;
  var elm$html$Html$Attributes$style = elm$virtual_dom$VirtualDom$style;
  var elm$virtual_dom$VirtualDom$Normal = function(a) {
    return { $: "Normal", a: a };
  };
  var elm$virtual_dom$VirtualDom$on = _VirtualDom_on;
  var elm$html$Html$Events$on = F2(function(event, decoder) {
    return A2(
      elm$virtual_dom$VirtualDom$on,
      event,
      elm$virtual_dom$VirtualDom$Normal(decoder)
    );
  });
  var elm$html$Html$Events$onClick = function(msg) {
    return A2(
      elm$html$Html$Events$on,
      "click",
      elm$json$Json$Decode$succeed(msg)
    );
  };
  var elm$browser$Debugger$Overlay$viewButtons = function(buttons) {
    var btn = F2(function(msg, string) {
      return A2(
        elm$html$Html$button,
        _List_fromArray([
          A2(elm$html$Html$Attributes$style, "margin-right", "20px"),
          elm$html$Html$Events$onClick(msg)
        ]),
        _List_fromArray([elm$html$Html$text(string)])
      );
    });
    var buttonNodes = (function() {
      if (buttons.$ === "Accept") {
        var proceed = buttons.a;
        return _List_fromArray([
          A2(btn, elm$browser$Debugger$Overlay$Proceed, proceed)
        ]);
      } else {
        var cancel = buttons.a;
        var proceed = buttons.b;
        return _List_fromArray([
          A2(btn, elm$browser$Debugger$Overlay$Cancel, cancel),
          A2(btn, elm$browser$Debugger$Overlay$Proceed, proceed)
        ]);
      }
    })();
    return A2(
      elm$html$Html$div,
      _List_fromArray([
        A2(elm$html$Html$Attributes$style, "height", "60px"),
        A2(elm$html$Html$Attributes$style, "line-height", "60px"),
        A2(elm$html$Html$Attributes$style, "text-align", "right"),
        A2(
          elm$html$Html$Attributes$style,
          "background-color",
          "rgb(50, 50, 50)"
        )
      ]),
      buttonNodes
    );
  };
  var elm$virtual_dom$VirtualDom$map = _VirtualDom_map;
  var elm$html$Html$map = elm$virtual_dom$VirtualDom$map;
  var elm$html$Html$Attributes$id = elm$html$Html$Attributes$stringProperty(
    "id"
  );
  var elm$browser$Debugger$Overlay$viewMessage = F4(function(
    config,
    title,
    details,
    buttons
  ) {
    return A2(
      elm$html$Html$div,
      _List_fromArray([
        elm$html$Html$Attributes$id("elm-debugger-overlay"),
        A2(elm$html$Html$Attributes$style, "position", "fixed"),
        A2(elm$html$Html$Attributes$style, "top", "0"),
        A2(elm$html$Html$Attributes$style, "left", "0"),
        A2(elm$html$Html$Attributes$style, "width", "100%"),
        A2(elm$html$Html$Attributes$style, "height", "100%"),
        A2(elm$html$Html$Attributes$style, "color", "white"),
        A2(elm$html$Html$Attributes$style, "pointer-events", "none"),
        A2(
          elm$html$Html$Attributes$style,
          "font-family",
          "'Trebuchet MS', 'Lucida Grande', 'Bitstream Vera Sans', 'Helvetica Neue', sans-serif"
        ),
        A2(elm$html$Html$Attributes$style, "z-index", "2147483647")
      ]),
      _List_fromArray([
        A2(
          elm$html$Html$div,
          _List_fromArray([
            A2(elm$html$Html$Attributes$style, "position", "absolute"),
            A2(elm$html$Html$Attributes$style, "width", "600px"),
            A2(elm$html$Html$Attributes$style, "height", "100%"),
            A2(
              elm$html$Html$Attributes$style,
              "padding-left",
              "calc(50% - 300px)"
            ),
            A2(
              elm$html$Html$Attributes$style,
              "padding-right",
              "calc(50% - 300px)"
            ),
            A2(
              elm$html$Html$Attributes$style,
              "background-color",
              "rgba(200, 200, 200, 0.7)"
            ),
            A2(elm$html$Html$Attributes$style, "pointer-events", "auto")
          ]),
          _List_fromArray([
            A2(
              elm$html$Html$div,
              _List_fromArray([
                A2(elm$html$Html$Attributes$style, "font-size", "36px"),
                A2(elm$html$Html$Attributes$style, "height", "80px"),
                A2(
                  elm$html$Html$Attributes$style,
                  "background-color",
                  "rgb(50, 50, 50)"
                ),
                A2(elm$html$Html$Attributes$style, "padding-left", "22px"),
                A2(elm$html$Html$Attributes$style, "vertical-align", "middle"),
                A2(elm$html$Html$Attributes$style, "line-height", "80px")
              ]),
              _List_fromArray([elm$html$Html$text(title)])
            ),
            A2(
              elm$html$Html$div,
              _List_fromArray([
                elm$html$Html$Attributes$id("elm-debugger-details"),
                A2(elm$html$Html$Attributes$style, "padding", " 8px 20px"),
                A2(elm$html$Html$Attributes$style, "overflow-y", "auto"),
                A2(
                  elm$html$Html$Attributes$style,
                  "max-height",
                  "calc(100% - 156px)"
                ),
                A2(
                  elm$html$Html$Attributes$style,
                  "background-color",
                  "rgb(61, 61, 61)"
                )
              ]),
              details
            ),
            A2(
              elm$html$Html$map,
              config.wrap,
              elm$browser$Debugger$Overlay$viewButtons(buttons)
            )
          ])
        )
      ])
    );
  });
  var elm$html$Html$span = _VirtualDom_node("span");
  var elm$browser$Debugger$Overlay$button = F2(function(msg, label) {
    return A2(
      elm$html$Html$span,
      _List_fromArray([
        elm$html$Html$Events$onClick(msg),
        A2(elm$html$Html$Attributes$style, "cursor", "pointer")
      ]),
      _List_fromArray([elm$html$Html$text(label)])
    );
  });
  var elm$browser$Debugger$Overlay$viewImportExport = F3(function(
    props,
    importMsg,
    exportMsg
  ) {
    return A2(
      elm$html$Html$div,
      props,
      _List_fromArray([
        A2(elm$browser$Debugger$Overlay$button, importMsg, "Import"),
        elm$html$Html$text(" / "),
        A2(elm$browser$Debugger$Overlay$button, exportMsg, "Export")
      ])
    );
  });
  var elm$browser$Debugger$Overlay$viewMiniControls = F2(function(
    config,
    numMsgs
  ) {
    return A2(
      elm$html$Html$div,
      _List_fromArray([
        A2(elm$html$Html$Attributes$style, "position", "fixed"),
        A2(elm$html$Html$Attributes$style, "bottom", "0"),
        A2(elm$html$Html$Attributes$style, "right", "6px"),
        A2(elm$html$Html$Attributes$style, "border-radius", "4px"),
        A2(
          elm$html$Html$Attributes$style,
          "background-color",
          "rgb(61, 61, 61)"
        ),
        A2(elm$html$Html$Attributes$style, "color", "white"),
        A2(elm$html$Html$Attributes$style, "font-family", "monospace"),
        A2(elm$html$Html$Attributes$style, "pointer-events", "auto"),
        A2(elm$html$Html$Attributes$style, "z-index", "2147483647")
      ]),
      _List_fromArray([
        A2(
          elm$html$Html$div,
          _List_fromArray([
            A2(elm$html$Html$Attributes$style, "padding", "6px"),
            A2(elm$html$Html$Attributes$style, "cursor", "pointer"),
            A2(elm$html$Html$Attributes$style, "text-align", "center"),
            A2(elm$html$Html$Attributes$style, "min-width", "24ch"),
            elm$html$Html$Events$onClick(config.open)
          ]),
          _List_fromArray([
            elm$html$Html$text(
              "Explore History (" + (elm$core$String$fromInt(numMsgs) + ")")
            )
          ])
        ),
        A3(
          elm$browser$Debugger$Overlay$viewImportExport,
          _List_fromArray([
            A2(elm$html$Html$Attributes$style, "padding", "4px 0"),
            A2(elm$html$Html$Attributes$style, "font-size", "0.8em"),
            A2(elm$html$Html$Attributes$style, "text-align", "center"),
            A2(
              elm$html$Html$Attributes$style,
              "background-color",
              "rgb(50, 50, 50)"
            )
          ]),
          config.importHistory,
          config.exportHistory
        )
      ])
    );
  });
  var elm$browser$Debugger$Overlay$explanationBad =
    "\nThe messages in this history do not match the messages handled by your\nprogram. I noticed changes in the following types:\n";
  var elm$browser$Debugger$Overlay$explanationRisky =
    "\nThis history seems old. It will work with this program, but some\nmessages have been added since the history was created:\n";
  var elm$core$List$intersperse = F2(function(sep, xs) {
    if (!xs.b) {
      return _List_Nil;
    } else {
      var hd = xs.a;
      var tl = xs.b;
      var step = F2(function(x, rest) {
        return A2(elm$core$List$cons, sep, A2(elm$core$List$cons, x, rest));
      });
      var spersed = A3(elm$core$List$foldr, step, _List_Nil, tl);
      return A2(elm$core$List$cons, hd, spersed);
    }
  });
  var elm$browser$Debugger$Overlay$viewMention = F2(function(tags, verbed) {
    var _n0 = A2(
      elm$core$List$map,
      elm$browser$Debugger$Overlay$viewCode,
      elm$core$List$reverse(tags)
    );
    if (!_n0.b) {
      return elm$html$Html$text("");
    } else {
      if (!_n0.b.b) {
        var tag = _n0.a;
        return A2(
          elm$html$Html$li,
          _List_Nil,
          _List_fromArray([
            elm$html$Html$text(verbed),
            tag,
            elm$html$Html$text(".")
          ])
        );
      } else {
        if (!_n0.b.b.b) {
          var tag2 = _n0.a;
          var _n1 = _n0.b;
          var tag1 = _n1.a;
          return A2(
            elm$html$Html$li,
            _List_Nil,
            _List_fromArray([
              elm$html$Html$text(verbed),
              tag1,
              elm$html$Html$text(" and "),
              tag2,
              elm$html$Html$text(".")
            ])
          );
        } else {
          var lastTag = _n0.a;
          var otherTags = _n0.b;
          return A2(
            elm$html$Html$li,
            _List_Nil,
            A2(
              elm$core$List$cons,
              elm$html$Html$text(verbed),
              _Utils_ap(
                A2(
                  elm$core$List$intersperse,
                  elm$html$Html$text(", "),
                  elm$core$List$reverse(otherTags)
                ),
                _List_fromArray([
                  elm$html$Html$text(", and "),
                  lastTag,
                  elm$html$Html$text(".")
                ])
              )
            )
          );
        }
      }
    }
  });
  var elm$browser$Debugger$Overlay$viewChange = function(change) {
    return A2(
      elm$html$Html$li,
      _List_fromArray([A2(elm$html$Html$Attributes$style, "margin", "8px 0")]),
      (function() {
        if (change.$ === "AliasChange") {
          var name = change.a;
          return _List_fromArray([
            A2(
              elm$html$Html$span,
              _List_fromArray([
                A2(elm$html$Html$Attributes$style, "font-size", "1.5em")
              ]),
              _List_fromArray([elm$browser$Debugger$Overlay$viewCode(name)])
            )
          ]);
        } else {
          var name = change.a;
          var removed = change.b.removed;
          var changed = change.b.changed;
          var added = change.b.added;
          var argsMatch = change.b.argsMatch;
          return _List_fromArray([
            A2(
              elm$html$Html$span,
              _List_fromArray([
                A2(elm$html$Html$Attributes$style, "font-size", "1.5em")
              ]),
              _List_fromArray([elm$browser$Debugger$Overlay$viewCode(name)])
            ),
            A2(
              elm$html$Html$ul,
              _List_fromArray([
                A2(elm$html$Html$Attributes$style, "list-style-type", "disc"),
                A2(elm$html$Html$Attributes$style, "padding-left", "2em")
              ]),
              _List_fromArray([
                A2(
                  elm$browser$Debugger$Overlay$viewMention,
                  removed,
                  "Removed "
                ),
                A2(
                  elm$browser$Debugger$Overlay$viewMention,
                  changed,
                  "Changed "
                ),
                A2(elm$browser$Debugger$Overlay$viewMention, added, "Added ")
              ])
            ),
            argsMatch
              ? elm$html$Html$text("")
              : elm$html$Html$text(
                  "This may be due to the fact that the type variable names changed."
                )
          ]);
        }
      })()
    );
  };
  var elm$browser$Debugger$Overlay$viewReport = F2(function(isBad, report) {
    switch (report.$) {
      case "CorruptHistory":
        return _List_fromArray([
          elm$html$Html$text(
            "Looks like this history file is corrupt. I cannot understand it."
          )
        ]);
      case "VersionChanged":
        var old = report.a;
        var _new = report.b;
        return _List_fromArray([
          elm$html$Html$text(
            "This history was created with Elm " +
              (old + (", but you are using Elm " + (_new + " right now.")))
          )
        ]);
      case "MessageChanged":
        var old = report.a;
        var _new = report.b;
        return _List_fromArray([
          elm$html$Html$text(
            "To import some other history, the overall message type must" +
              " be the same. The old history has "
          ),
          elm$browser$Debugger$Overlay$viewCode(old),
          elm$html$Html$text(" messages, but the new program works with "),
          elm$browser$Debugger$Overlay$viewCode(_new),
          elm$html$Html$text(" messages.")
        ]);
      default:
        var changes = report.a;
        return _List_fromArray([
          A2(
            elm$html$Html$p,
            _List_Nil,
            _List_fromArray([
              elm$html$Html$text(
                isBad
                  ? elm$browser$Debugger$Overlay$explanationBad
                  : elm$browser$Debugger$Overlay$explanationRisky
              )
            ])
          ),
          A2(
            elm$html$Html$ul,
            _List_fromArray([
              A2(elm$html$Html$Attributes$style, "list-style-type", "none"),
              A2(elm$html$Html$Attributes$style, "padding-left", "20px")
            ]),
            A2(
              elm$core$List$map,
              elm$browser$Debugger$Overlay$viewChange,
              changes
            )
          )
        ]);
    }
  });
  var elm$browser$Debugger$Overlay$view = F5(function(
    config,
    isPaused,
    isOpen,
    numMsgs,
    state
  ) {
    switch (state.$) {
      case "None":
        return isOpen
          ? elm$html$Html$text("")
          : isPaused
            ? A2(
                elm$html$Html$div,
                _List_fromArray([
                  A2(elm$html$Html$Attributes$style, "width", "100%"),
                  A2(elm$html$Html$Attributes$style, "height", "100%"),
                  A2(elm$html$Html$Attributes$style, "cursor", "pointer"),
                  A2(elm$html$Html$Attributes$style, "text-align", "center"),
                  A2(elm$html$Html$Attributes$style, "pointer-events", "auto"),
                  A2(
                    elm$html$Html$Attributes$style,
                    "background-color",
                    "rgba(200, 200, 200, 0.7)"
                  ),
                  A2(elm$html$Html$Attributes$style, "color", "white"),
                  A2(
                    elm$html$Html$Attributes$style,
                    "font-family",
                    "'Trebuchet MS', 'Lucida Grande', 'Bitstream Vera Sans', 'Helvetica Neue', sans-serif"
                  ),
                  A2(elm$html$Html$Attributes$style, "z-index", "2147483646"),
                  elm$html$Html$Events$onClick(config.resume)
                ]),
                _List_fromArray([
                  A2(
                    elm$html$Html$div,
                    _List_fromArray([
                      A2(
                        elm$html$Html$Attributes$style,
                        "position",
                        "absolute"
                      ),
                      A2(
                        elm$html$Html$Attributes$style,
                        "top",
                        "calc(50% - 40px)"
                      ),
                      A2(elm$html$Html$Attributes$style, "font-size", "80px"),
                      A2(elm$html$Html$Attributes$style, "line-height", "80px"),
                      A2(elm$html$Html$Attributes$style, "height", "80px"),
                      A2(elm$html$Html$Attributes$style, "width", "100%")
                    ]),
                    _List_fromArray([elm$html$Html$text("Click to Resume")])
                  ),
                  A2(
                    elm$browser$Debugger$Overlay$viewMiniControls,
                    config,
                    numMsgs
                  )
                ])
              )
            : A2(
                elm$browser$Debugger$Overlay$viewMiniControls,
                config,
                numMsgs
              );
      case "BadMetadata":
        var badMetadata_ = state.a;
        return A4(
          elm$browser$Debugger$Overlay$viewMessage,
          config,
          "Cannot use Import or Export",
          elm$browser$Debugger$Overlay$viewBadMetadata(badMetadata_),
          elm$browser$Debugger$Overlay$Accept("Ok")
        );
      case "BadImport":
        var report = state.a;
        return A4(
          elm$browser$Debugger$Overlay$viewMessage,
          config,
          "Cannot Import History",
          A2(elm$browser$Debugger$Overlay$viewReport, true, report),
          elm$browser$Debugger$Overlay$Accept("Ok")
        );
      default:
        var report = state.a;
        return A4(
          elm$browser$Debugger$Overlay$viewMessage,
          config,
          "Warning",
          A2(elm$browser$Debugger$Overlay$viewReport, false, report),
          A2(elm$browser$Debugger$Overlay$Choose, "Cancel", "Import Anyway")
        );
    }
  });
  var elm$browser$Debugger$Main$cornerView = function(model) {
    return A5(
      elm$browser$Debugger$Overlay$view,
      {
        exportHistory: elm$browser$Debugger$Main$Export,
        importHistory: elm$browser$Debugger$Main$Import,
        open: elm$browser$Debugger$Main$Open,
        resume: elm$browser$Debugger$Main$Resume,
        wrap: elm$browser$Debugger$Main$OverlayMsg
      },
      elm$browser$Debugger$Main$isPaused(model.state),
      _Debugger_isOpen(model.popout),
      elm$browser$Debugger$History$size(model.history),
      model.overlay
    );
  };
  var elm$browser$Debugger$Main$getCurrentModel = function(state) {
    if (state.$ === "Running") {
      var model = state.a;
      return model;
    } else {
      var model = state.b;
      return model;
    }
  };
  var elm$browser$Debugger$Main$getUserModel = function(model) {
    return elm$browser$Debugger$Main$getCurrentModel(model.state);
  };
  var elm$browser$Debugger$Expando$Field = F2(function(a, b) {
    return { $: "Field", a: a, b: b };
  });
  var elm$browser$Debugger$Expando$Index = F3(function(a, b, c) {
    return { $: "Index", a: a, b: b, c: c };
  });
  var elm$browser$Debugger$Expando$Key = { $: "Key" };
  var elm$browser$Debugger$Expando$None = { $: "None" };
  var elm$browser$Debugger$Expando$Toggle = { $: "Toggle" };
  var elm$browser$Debugger$Expando$Value = { $: "Value" };
  var elm$browser$Debugger$Expando$blue = A2(
    elm$html$Html$Attributes$style,
    "color",
    "rgb(28, 0, 207)"
  );
  var elm$browser$Debugger$Expando$leftPad = function(maybeKey) {
    if (maybeKey.$ === "Nothing") {
      return _List_Nil;
    } else {
      return _List_fromArray([
        A2(elm$html$Html$Attributes$style, "padding-left", "4ch")
      ]);
    }
  };
  var elm$browser$Debugger$Expando$makeArrow = function(arrow) {
    return A2(
      elm$html$Html$span,
      _List_fromArray([
        A2(elm$html$Html$Attributes$style, "color", "#777"),
        A2(elm$html$Html$Attributes$style, "padding-left", "2ch"),
        A2(elm$html$Html$Attributes$style, "width", "2ch"),
        A2(elm$html$Html$Attributes$style, "display", "inline-block")
      ]),
      _List_fromArray([elm$html$Html$text(arrow)])
    );
  };
  var elm$browser$Debugger$Expando$purple = A2(
    elm$html$Html$Attributes$style,
    "color",
    "rgb(136, 19, 145)"
  );
  var elm$browser$Debugger$Expando$lineStarter = F3(function(
    maybeKey,
    maybeIsClosed,
    description
  ) {
    var arrow = (function() {
      if (maybeIsClosed.$ === "Nothing") {
        return elm$browser$Debugger$Expando$makeArrow("");
      } else {
        if (maybeIsClosed.a) {
          return elm$browser$Debugger$Expando$makeArrow("▸");
        } else {
          return elm$browser$Debugger$Expando$makeArrow("▾");
        }
      }
    })();
    if (maybeKey.$ === "Nothing") {
      return A2(elm$core$List$cons, arrow, description);
    } else {
      var key = maybeKey.a;
      return A2(
        elm$core$List$cons,
        arrow,
        A2(
          elm$core$List$cons,
          A2(
            elm$html$Html$span,
            _List_fromArray([elm$browser$Debugger$Expando$purple]),
            _List_fromArray([elm$html$Html$text(key)])
          ),
          A2(elm$core$List$cons, elm$html$Html$text(" = "), description)
        )
      );
    }
  });
  var elm$browser$Debugger$Expando$red = A2(
    elm$html$Html$Attributes$style,
    "color",
    "rgb(196, 26, 22)"
  );
  var elm$browser$Debugger$Expando$seqTypeToString = F2(function(n, seqType) {
    switch (seqType.$) {
      case "ListSeq":
        return "List(" + (elm$core$String$fromInt(n) + ")");
      case "SetSeq":
        return "Set(" + (elm$core$String$fromInt(n) + ")");
      default:
        return "Array(" + (elm$core$String$fromInt(n) + ")");
    }
  });
  var elm$core$String$slice = _String_slice;
  var elm$core$String$left = F2(function(n, string) {
    return n < 1 ? "" : A3(elm$core$String$slice, 0, n, string);
  });
  var elm$core$String$length = _String_length;
  var elm$core$Basics$negate = function(n) {
    return -n;
  };
  var elm$core$String$right = F2(function(n, string) {
    return n < 1
      ? ""
      : A3(elm$core$String$slice, -n, elm$core$String$length(string), string);
  });
  var elm$browser$Debugger$Expando$elideMiddle = function(str) {
    return elm$core$String$length(str) <= 18
      ? str
      : A2(elm$core$String$left, 8, str) +
          ("..." + A2(elm$core$String$right, 8, str));
  };
  var elm$browser$Debugger$Expando$viewExtraTinyRecord = F3(function(
    length,
    starter,
    entries
  ) {
    if (!entries.b) {
      return _Utils_Tuple2(
        length + 1,
        _List_fromArray([elm$html$Html$text("}")])
      );
    } else {
      var field = entries.a;
      var rest = entries.b;
      var nextLength = length + elm$core$String$length(field) + 1;
      if (nextLength > 18) {
        return _Utils_Tuple2(
          length + 2,
          _List_fromArray([elm$html$Html$text("…}")])
        );
      } else {
        var _n1 = A3(
          elm$browser$Debugger$Expando$viewExtraTinyRecord,
          nextLength,
          ",",
          rest
        );
        var finalLength = _n1.a;
        var otherHtmls = _n1.b;
        return _Utils_Tuple2(
          finalLength,
          A2(
            elm$core$List$cons,
            elm$html$Html$text(starter),
            A2(
              elm$core$List$cons,
              A2(
                elm$html$Html$span,
                _List_fromArray([elm$browser$Debugger$Expando$purple]),
                _List_fromArray([elm$html$Html$text(field)])
              ),
              otherHtmls
            )
          )
        );
      }
    }
  });
  var elm$browser$Debugger$Expando$viewTinyHelp = function(str) {
    return _Utils_Tuple2(
      elm$core$String$length(str),
      _List_fromArray([elm$html$Html$text(str)])
    );
  };
  var elm$core$Dict$isEmpty = function(dict) {
    if (dict.$ === "RBEmpty_elm_builtin") {
      return true;
    } else {
      return false;
    }
  };
  var elm$core$Maybe$withDefault = F2(function(_default, maybe) {
    if (maybe.$ === "Just") {
      var value = maybe.a;
      return value;
    } else {
      return _default;
    }
  });
  var elm$browser$Debugger$Expando$viewExtraTiny = function(value) {
    if (value.$ === "Record") {
      var record = value.b;
      return A3(
        elm$browser$Debugger$Expando$viewExtraTinyRecord,
        0,
        "{",
        elm$core$Dict$keys(record)
      );
    } else {
      return elm$browser$Debugger$Expando$viewTiny(value);
    }
  };
  var elm$browser$Debugger$Expando$viewTiny = function(value) {
    switch (value.$) {
      case "S":
        var stringRep = value.a;
        var str = elm$browser$Debugger$Expando$elideMiddle(stringRep);
        return _Utils_Tuple2(
          elm$core$String$length(str),
          _List_fromArray([
            A2(
              elm$html$Html$span,
              _List_fromArray([elm$browser$Debugger$Expando$red]),
              _List_fromArray([elm$html$Html$text(str)])
            )
          ])
        );
      case "Primitive":
        var stringRep = value.a;
        return _Utils_Tuple2(
          elm$core$String$length(stringRep),
          _List_fromArray([
            A2(
              elm$html$Html$span,
              _List_fromArray([elm$browser$Debugger$Expando$blue]),
              _List_fromArray([elm$html$Html$text(stringRep)])
            )
          ])
        );
      case "Sequence":
        var seqType = value.a;
        var valueList = value.c;
        return elm$browser$Debugger$Expando$viewTinyHelp(
          A2(
            elm$browser$Debugger$Expando$seqTypeToString,
            elm$core$List$length(valueList),
            seqType
          )
        );
      case "Dictionary":
        var keyValuePairs = value.b;
        return elm$browser$Debugger$Expando$viewTinyHelp(
          "Dict(" +
            (elm$core$String$fromInt(elm$core$List$length(keyValuePairs)) + ")")
        );
      case "Record":
        var record = value.b;
        return elm$browser$Debugger$Expando$viewTinyRecord(record);
      default:
        if (!value.c.b) {
          var maybeName = value.a;
          return elm$browser$Debugger$Expando$viewTinyHelp(
            A2(elm$core$Maybe$withDefault, "Unit", maybeName)
          );
        } else {
          var maybeName = value.a;
          var valueList = value.c;
          return elm$browser$Debugger$Expando$viewTinyHelp(
            (function() {
              if (maybeName.$ === "Nothing") {
                return (
                  "Tuple(" +
                  (elm$core$String$fromInt(elm$core$List$length(valueList)) +
                    ")")
                );
              } else {
                var name = maybeName.a;
                return name + " …";
              }
            })()
          );
        }
    }
  };
  var elm$browser$Debugger$Expando$viewTinyRecord = function(record) {
    return elm$core$Dict$isEmpty(record)
      ? _Utils_Tuple2(2, _List_fromArray([elm$html$Html$text("{}")]))
      : A3(
          elm$browser$Debugger$Expando$viewTinyRecordHelp,
          0,
          "{ ",
          elm$core$Dict$toList(record)
        );
  };
  var elm$browser$Debugger$Expando$viewTinyRecordHelp = F3(function(
    length,
    starter,
    entries
  ) {
    if (!entries.b) {
      return _Utils_Tuple2(
        length + 2,
        _List_fromArray([elm$html$Html$text(" }")])
      );
    } else {
      var _n1 = entries.a;
      var field = _n1.a;
      var value = _n1.b;
      var rest = entries.b;
      var fieldLen = elm$core$String$length(field);
      var _n2 = elm$browser$Debugger$Expando$viewExtraTiny(value);
      var valueLen = _n2.a;
      var valueHtmls = _n2.b;
      var newLength = length + fieldLen + valueLen + 5;
      if (newLength > 60) {
        return _Utils_Tuple2(
          length + 4,
          _List_fromArray([elm$html$Html$text(", … }")])
        );
      } else {
        var _n3 = A3(
          elm$browser$Debugger$Expando$viewTinyRecordHelp,
          newLength,
          ", ",
          rest
        );
        var finalLength = _n3.a;
        var otherHtmls = _n3.b;
        return _Utils_Tuple2(
          finalLength,
          A2(
            elm$core$List$cons,
            elm$html$Html$text(starter),
            A2(
              elm$core$List$cons,
              A2(
                elm$html$Html$span,
                _List_fromArray([elm$browser$Debugger$Expando$purple]),
                _List_fromArray([elm$html$Html$text(field)])
              ),
              A2(
                elm$core$List$cons,
                elm$html$Html$text(" = "),
                A2(
                  elm$core$List$cons,
                  A2(elm$html$Html$span, _List_Nil, valueHtmls),
                  otherHtmls
                )
              )
            )
          )
        );
      }
    }
  });
  var elm$core$Basics$composeL = F3(function(g, f, x) {
    return g(f(x));
  });
  var elm$core$Tuple$second = function(_n0) {
    var y = _n0.b;
    return y;
  };
  var elm$browser$Debugger$Expando$view = F2(function(maybeKey, expando) {
    switch (expando.$) {
      case "S":
        var stringRep = expando.a;
        return A2(
          elm$html$Html$div,
          elm$browser$Debugger$Expando$leftPad(maybeKey),
          A3(
            elm$browser$Debugger$Expando$lineStarter,
            maybeKey,
            elm$core$Maybe$Nothing,
            _List_fromArray([
              A2(
                elm$html$Html$span,
                _List_fromArray([elm$browser$Debugger$Expando$red]),
                _List_fromArray([elm$html$Html$text(stringRep)])
              )
            ])
          )
        );
      case "Primitive":
        var stringRep = expando.a;
        return A2(
          elm$html$Html$div,
          elm$browser$Debugger$Expando$leftPad(maybeKey),
          A3(
            elm$browser$Debugger$Expando$lineStarter,
            maybeKey,
            elm$core$Maybe$Nothing,
            _List_fromArray([
              A2(
                elm$html$Html$span,
                _List_fromArray([elm$browser$Debugger$Expando$blue]),
                _List_fromArray([elm$html$Html$text(stringRep)])
              )
            ])
          )
        );
      case "Sequence":
        var seqType = expando.a;
        var isClosed = expando.b;
        var valueList = expando.c;
        return A4(
          elm$browser$Debugger$Expando$viewSequence,
          maybeKey,
          seqType,
          isClosed,
          valueList
        );
      case "Dictionary":
        var isClosed = expando.a;
        var keyValuePairs = expando.b;
        return A3(
          elm$browser$Debugger$Expando$viewDictionary,
          maybeKey,
          isClosed,
          keyValuePairs
        );
      case "Record":
        var isClosed = expando.a;
        var valueDict = expando.b;
        return A3(
          elm$browser$Debugger$Expando$viewRecord,
          maybeKey,
          isClosed,
          valueDict
        );
      default:
        var maybeName = expando.a;
        var isClosed = expando.b;
        var valueList = expando.c;
        return A4(
          elm$browser$Debugger$Expando$viewConstructor,
          maybeKey,
          maybeName,
          isClosed,
          valueList
        );
    }
  });
  var elm$browser$Debugger$Expando$viewConstructor = F4(function(
    maybeKey,
    maybeName,
    isClosed,
    valueList
  ) {
    var tinyArgs = A2(
      elm$core$List$map,
      A2(
        elm$core$Basics$composeL,
        elm$core$Tuple$second,
        elm$browser$Debugger$Expando$viewExtraTiny
      ),
      valueList
    );
    var description = (function() {
      var _n7 = _Utils_Tuple2(maybeName, tinyArgs);
      if (_n7.a.$ === "Nothing") {
        if (!_n7.b.b) {
          var _n8 = _n7.a;
          return _List_fromArray([elm$html$Html$text("()")]);
        } else {
          var _n9 = _n7.a;
          var _n10 = _n7.b;
          var x = _n10.a;
          var xs = _n10.b;
          return A2(
            elm$core$List$cons,
            elm$html$Html$text("( "),
            A2(
              elm$core$List$cons,
              A2(elm$html$Html$span, _List_Nil, x),
              A3(
                elm$core$List$foldr,
                F2(function(args, rest) {
                  return A2(
                    elm$core$List$cons,
                    elm$html$Html$text(", "),
                    A2(
                      elm$core$List$cons,
                      A2(elm$html$Html$span, _List_Nil, args),
                      rest
                    )
                  );
                }),
                _List_fromArray([elm$html$Html$text(" )")]),
                xs
              )
            )
          );
        }
      } else {
        if (!_n7.b.b) {
          var name = _n7.a.a;
          return _List_fromArray([elm$html$Html$text(name)]);
        } else {
          var name = _n7.a.a;
          var _n11 = _n7.b;
          var x = _n11.a;
          var xs = _n11.b;
          return A2(
            elm$core$List$cons,
            elm$html$Html$text(name + " "),
            A2(
              elm$core$List$cons,
              A2(elm$html$Html$span, _List_Nil, x),
              A3(
                elm$core$List$foldr,
                F2(function(args, rest) {
                  return A2(
                    elm$core$List$cons,
                    elm$html$Html$text(" "),
                    A2(
                      elm$core$List$cons,
                      A2(elm$html$Html$span, _List_Nil, args),
                      rest
                    )
                  );
                }),
                _List_Nil,
                xs
              )
            )
          );
        }
      }
    })();
    var _n4 = (function() {
      if (!valueList.b) {
        return _Utils_Tuple2(
          elm$core$Maybe$Nothing,
          A2(elm$html$Html$div, _List_Nil, _List_Nil)
        );
      } else {
        if (!valueList.b.b) {
          var entry = valueList.a;
          switch (entry.$) {
            case "S":
              return _Utils_Tuple2(
                elm$core$Maybe$Nothing,
                A2(elm$html$Html$div, _List_Nil, _List_Nil)
              );
            case "Primitive":
              return _Utils_Tuple2(
                elm$core$Maybe$Nothing,
                A2(elm$html$Html$div, _List_Nil, _List_Nil)
              );
            case "Sequence":
              var subValueList = entry.c;
              return _Utils_Tuple2(
                elm$core$Maybe$Just(isClosed),
                isClosed
                  ? A2(elm$html$Html$div, _List_Nil, _List_Nil)
                  : A2(
                      elm$html$Html$map,
                      A2(
                        elm$browser$Debugger$Expando$Index,
                        elm$browser$Debugger$Expando$None,
                        0
                      ),
                      elm$browser$Debugger$Expando$viewSequenceOpen(
                        subValueList
                      )
                    )
              );
            case "Dictionary":
              var keyValuePairs = entry.b;
              return _Utils_Tuple2(
                elm$core$Maybe$Just(isClosed),
                isClosed
                  ? A2(elm$html$Html$div, _List_Nil, _List_Nil)
                  : A2(
                      elm$html$Html$map,
                      A2(
                        elm$browser$Debugger$Expando$Index,
                        elm$browser$Debugger$Expando$None,
                        0
                      ),
                      elm$browser$Debugger$Expando$viewDictionaryOpen(
                        keyValuePairs
                      )
                    )
              );
            case "Record":
              var record = entry.b;
              return _Utils_Tuple2(
                elm$core$Maybe$Just(isClosed),
                isClosed
                  ? A2(elm$html$Html$div, _List_Nil, _List_Nil)
                  : A2(
                      elm$html$Html$map,
                      A2(
                        elm$browser$Debugger$Expando$Index,
                        elm$browser$Debugger$Expando$None,
                        0
                      ),
                      elm$browser$Debugger$Expando$viewRecordOpen(record)
                    )
              );
            default:
              var subValueList = entry.c;
              return _Utils_Tuple2(
                elm$core$Maybe$Just(isClosed),
                isClosed
                  ? A2(elm$html$Html$div, _List_Nil, _List_Nil)
                  : A2(
                      elm$html$Html$map,
                      A2(
                        elm$browser$Debugger$Expando$Index,
                        elm$browser$Debugger$Expando$None,
                        0
                      ),
                      elm$browser$Debugger$Expando$viewConstructorOpen(
                        subValueList
                      )
                    )
              );
          }
        } else {
          return _Utils_Tuple2(
            elm$core$Maybe$Just(isClosed),
            isClosed
              ? A2(elm$html$Html$div, _List_Nil, _List_Nil)
              : elm$browser$Debugger$Expando$viewConstructorOpen(valueList)
          );
        }
      }
    })();
    var maybeIsClosed = _n4.a;
    var openHtml = _n4.b;
    return A2(
      elm$html$Html$div,
      elm$browser$Debugger$Expando$leftPad(maybeKey),
      _List_fromArray([
        A2(
          elm$html$Html$div,
          _List_fromArray([
            elm$html$Html$Events$onClick(elm$browser$Debugger$Expando$Toggle)
          ]),
          A3(
            elm$browser$Debugger$Expando$lineStarter,
            maybeKey,
            maybeIsClosed,
            description
          )
        ),
        openHtml
      ])
    );
  });
  var elm$browser$Debugger$Expando$viewConstructorEntry = F2(function(
    index,
    value
  ) {
    return A2(
      elm$html$Html$map,
      A2(
        elm$browser$Debugger$Expando$Index,
        elm$browser$Debugger$Expando$None,
        index
      ),
      A2(
        elm$browser$Debugger$Expando$view,
        elm$core$Maybe$Just(elm$core$String$fromInt(index)),
        value
      )
    );
  });
  var elm$browser$Debugger$Expando$viewConstructorOpen = function(valueList) {
    return A2(
      elm$html$Html$div,
      _List_Nil,
      A2(
        elm$core$List$indexedMap,
        elm$browser$Debugger$Expando$viewConstructorEntry,
        valueList
      )
    );
  };
  var elm$browser$Debugger$Expando$viewDictionary = F3(function(
    maybeKey,
    isClosed,
    keyValuePairs
  ) {
    var starter =
      "Dict(" +
      (elm$core$String$fromInt(elm$core$List$length(keyValuePairs)) + ")");
    return A2(
      elm$html$Html$div,
      elm$browser$Debugger$Expando$leftPad(maybeKey),
      _List_fromArray([
        A2(
          elm$html$Html$div,
          _List_fromArray([
            elm$html$Html$Events$onClick(elm$browser$Debugger$Expando$Toggle)
          ]),
          A3(
            elm$browser$Debugger$Expando$lineStarter,
            maybeKey,
            elm$core$Maybe$Just(isClosed),
            _List_fromArray([elm$html$Html$text(starter)])
          )
        ),
        isClosed
          ? elm$html$Html$text("")
          : elm$browser$Debugger$Expando$viewDictionaryOpen(keyValuePairs)
      ])
    );
  });
  var elm$browser$Debugger$Expando$viewDictionaryEntry = F2(function(
    index,
    _n2
  ) {
    var key = _n2.a;
    var value = _n2.b;
    switch (key.$) {
      case "S":
        var stringRep = key.a;
        return A2(
          elm$html$Html$map,
          A2(
            elm$browser$Debugger$Expando$Index,
            elm$browser$Debugger$Expando$Value,
            index
          ),
          A2(
            elm$browser$Debugger$Expando$view,
            elm$core$Maybe$Just(stringRep),
            value
          )
        );
      case "Primitive":
        var stringRep = key.a;
        return A2(
          elm$html$Html$map,
          A2(
            elm$browser$Debugger$Expando$Index,
            elm$browser$Debugger$Expando$Value,
            index
          ),
          A2(
            elm$browser$Debugger$Expando$view,
            elm$core$Maybe$Just(stringRep),
            value
          )
        );
      default:
        return A2(
          elm$html$Html$div,
          _List_Nil,
          _List_fromArray([
            A2(
              elm$html$Html$map,
              A2(
                elm$browser$Debugger$Expando$Index,
                elm$browser$Debugger$Expando$Key,
                index
              ),
              A2(
                elm$browser$Debugger$Expando$view,
                elm$core$Maybe$Just("key"),
                key
              )
            ),
            A2(
              elm$html$Html$map,
              A2(
                elm$browser$Debugger$Expando$Index,
                elm$browser$Debugger$Expando$Value,
                index
              ),
              A2(
                elm$browser$Debugger$Expando$view,
                elm$core$Maybe$Just("value"),
                value
              )
            )
          ])
        );
    }
  });
  var elm$browser$Debugger$Expando$viewDictionaryOpen = function(
    keyValuePairs
  ) {
    return A2(
      elm$html$Html$div,
      _List_Nil,
      A2(
        elm$core$List$indexedMap,
        elm$browser$Debugger$Expando$viewDictionaryEntry,
        keyValuePairs
      )
    );
  };
  var elm$browser$Debugger$Expando$viewRecord = F3(function(
    maybeKey,
    isClosed,
    record
  ) {
    var _n1 = isClosed
      ? _Utils_Tuple3(
          elm$browser$Debugger$Expando$viewTinyRecord(record).b,
          elm$html$Html$text(""),
          elm$html$Html$text("")
        )
      : _Utils_Tuple3(
          _List_fromArray([elm$html$Html$text("{")]),
          elm$browser$Debugger$Expando$viewRecordOpen(record),
          A2(
            elm$html$Html$div,
            elm$browser$Debugger$Expando$leftPad(
              elm$core$Maybe$Just(_Utils_Tuple0)
            ),
            _List_fromArray([elm$html$Html$text("}")])
          )
        );
    var start = _n1.a;
    var middle = _n1.b;
    var end = _n1.c;
    return A2(
      elm$html$Html$div,
      elm$browser$Debugger$Expando$leftPad(maybeKey),
      _List_fromArray([
        A2(
          elm$html$Html$div,
          _List_fromArray([
            elm$html$Html$Events$onClick(elm$browser$Debugger$Expando$Toggle)
          ]),
          A3(
            elm$browser$Debugger$Expando$lineStarter,
            maybeKey,
            elm$core$Maybe$Just(isClosed),
            start
          )
        ),
        middle,
        end
      ])
    );
  });
  var elm$browser$Debugger$Expando$viewRecordEntry = function(_n0) {
    var field = _n0.a;
    var value = _n0.b;
    return A2(
      elm$html$Html$map,
      elm$browser$Debugger$Expando$Field(field),
      A2(elm$browser$Debugger$Expando$view, elm$core$Maybe$Just(field), value)
    );
  };
  var elm$browser$Debugger$Expando$viewRecordOpen = function(record) {
    return A2(
      elm$html$Html$div,
      _List_Nil,
      A2(
        elm$core$List$map,
        elm$browser$Debugger$Expando$viewRecordEntry,
        elm$core$Dict$toList(record)
      )
    );
  };
  var elm$browser$Debugger$Expando$viewSequence = F4(function(
    maybeKey,
    seqType,
    isClosed,
    valueList
  ) {
    var starter = A2(
      elm$browser$Debugger$Expando$seqTypeToString,
      elm$core$List$length(valueList),
      seqType
    );
    return A2(
      elm$html$Html$div,
      elm$browser$Debugger$Expando$leftPad(maybeKey),
      _List_fromArray([
        A2(
          elm$html$Html$div,
          _List_fromArray([
            elm$html$Html$Events$onClick(elm$browser$Debugger$Expando$Toggle)
          ]),
          A3(
            elm$browser$Debugger$Expando$lineStarter,
            maybeKey,
            elm$core$Maybe$Just(isClosed),
            _List_fromArray([elm$html$Html$text(starter)])
          )
        ),
        isClosed
          ? elm$html$Html$text("")
          : elm$browser$Debugger$Expando$viewSequenceOpen(valueList)
      ])
    );
  });
  var elm$browser$Debugger$Expando$viewSequenceOpen = function(values) {
    return A2(
      elm$html$Html$div,
      _List_Nil,
      A2(
        elm$core$List$indexedMap,
        elm$browser$Debugger$Expando$viewConstructorEntry,
        values
      )
    );
  };
  var elm$browser$Debugger$Main$ExpandoMsg = function(a) {
    return { $: "ExpandoMsg", a: a };
  };
  var elm$html$Html$Attributes$class = elm$html$Html$Attributes$stringProperty(
    "className"
  );
  var elm$html$Html$Attributes$title = elm$html$Html$Attributes$stringProperty(
    "title"
  );
  var elm$browser$Debugger$History$viewMessage = F3(function(
    currentIndex,
    index,
    msg
  ) {
    var messageName = _Debugger_messageToString(msg);
    var className = _Utils_eq(currentIndex, index)
      ? "elm-debugger-entry elm-debugger-entry-selected"
      : "elm-debugger-entry";
    return A2(
      elm$html$Html$div,
      _List_fromArray([
        elm$html$Html$Attributes$class(className),
        elm$html$Html$Events$onClick(index)
      ]),
      _List_fromArray([
        A2(
          elm$html$Html$span,
          _List_fromArray([
            elm$html$Html$Attributes$title(messageName),
            elm$html$Html$Attributes$class("elm-debugger-entry-content")
          ]),
          _List_fromArray([elm$html$Html$text(messageName)])
        ),
        A2(
          elm$html$Html$span,
          _List_fromArray([
            elm$html$Html$Attributes$class("elm-debugger-entry-index")
          ]),
          _List_fromArray([elm$html$Html$text(elm$core$String$fromInt(index))])
        )
      ])
    );
  });
  var elm$virtual_dom$VirtualDom$lazy3 = _VirtualDom_lazy3;
  var elm$html$Html$Lazy$lazy3 = elm$virtual_dom$VirtualDom$lazy3;
  var elm$browser$Debugger$History$consMsg = F3(function(
    currentIndex,
    msg,
    _n0
  ) {
    var index = _n0.a;
    var rest = _n0.b;
    return _Utils_Tuple2(
      index - 1,
      A2(
        elm$core$List$cons,
        A4(
          elm$html$Html$Lazy$lazy3,
          elm$browser$Debugger$History$viewMessage,
          currentIndex,
          index,
          msg
        ),
        rest
      )
    );
  });
  var elm$virtual_dom$VirtualDom$node = function(tag) {
    return _VirtualDom_node(_VirtualDom_noScript(tag));
  };
  var elm$html$Html$node = elm$virtual_dom$VirtualDom$node;
  var elm$browser$Debugger$History$styles = A3(
    elm$html$Html$node,
    "style",
    _List_Nil,
    _List_fromArray([
      elm$html$Html$text(
        "\n\n.elm-debugger-entry {\n  cursor: pointer;\n  width: 100%;\n}\n\n.elm-debugger-entry:hover {\n  background-color: rgb(41, 41, 41);\n}\n\n.elm-debugger-entry-selected, .elm-debugger-entry-selected:hover {\n  background-color: rgb(10, 10, 10);\n}\n\n.elm-debugger-entry-content {\n  width: calc(100% - 7ch);\n  padding-top: 4px;\n  padding-bottom: 4px;\n  padding-left: 1ch;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  display: inline-block;\n}\n\n.elm-debugger-entry-index {\n  color: #666;\n  width: 5ch;\n  padding-top: 4px;\n  padding-bottom: 4px;\n  padding-right: 1ch;\n  text-align: right;\n  display: block;\n  float: right;\n}\n\n"
      )
    ])
  );
  var elm$browser$Debugger$History$maxSnapshotSize = 64;
  var elm$core$Elm$JsArray$foldl = _JsArray_foldl;
  var elm$core$Array$foldl = F3(function(func, baseCase, _n0) {
    var tree = _n0.c;
    var tail = _n0.d;
    var helper = F2(function(node, acc) {
      if (node.$ === "SubTree") {
        var subTree = node.a;
        return A3(elm$core$Elm$JsArray$foldl, helper, acc, subTree);
      } else {
        var values = node.a;
        return A3(elm$core$Elm$JsArray$foldl, func, acc, values);
      }
    });
    return A3(
      elm$core$Elm$JsArray$foldl,
      func,
      A3(elm$core$Elm$JsArray$foldl, helper, baseCase, tree),
      tail
    );
  });
  var elm$browser$Debugger$History$viewSnapshot = F3(function(
    currentIndex,
    index,
    _n0
  ) {
    var messages = _n0.messages;
    return A2(
      elm$html$Html$div,
      _List_Nil,
      A3(
        elm$core$Array$foldl,
        elm$browser$Debugger$History$consMsg(currentIndex),
        _Utils_Tuple2(index - 1, _List_Nil),
        messages
      ).b
    );
  });
  var elm$browser$Debugger$History$consSnapshot = F3(function(
    currentIndex,
    snapshot,
    _n0
  ) {
    var index = _n0.a;
    var rest = _n0.b;
    var nextIndex = index - elm$browser$Debugger$History$maxSnapshotSize;
    var currentIndexHelp =
      _Utils_cmp(nextIndex, currentIndex) < 1 &&
      _Utils_cmp(currentIndex, index) < 0
        ? currentIndex
        : -1;
    return _Utils_Tuple2(
      index - elm$browser$Debugger$History$maxSnapshotSize,
      A2(
        elm$core$List$cons,
        A4(
          elm$html$Html$Lazy$lazy3,
          elm$browser$Debugger$History$viewSnapshot,
          currentIndexHelp,
          index,
          snapshot
        ),
        rest
      )
    );
  });
  var elm$core$Array$length = function(_n0) {
    var len = _n0.a;
    return len;
  };
  var elm$browser$Debugger$History$viewSnapshots = F2(function(
    currentIndex,
    snapshots
  ) {
    var highIndex =
      elm$browser$Debugger$History$maxSnapshotSize *
      elm$core$Array$length(snapshots);
    return A2(
      elm$html$Html$div,
      _List_Nil,
      A3(
        elm$core$Array$foldr,
        elm$browser$Debugger$History$consSnapshot(currentIndex),
        _Utils_Tuple2(highIndex, _List_Nil),
        snapshots
      ).b
    );
  });
  var elm$virtual_dom$VirtualDom$lazy2 = _VirtualDom_lazy2;
  var elm$html$Html$Lazy$lazy2 = elm$virtual_dom$VirtualDom$lazy2;
  var elm$browser$Debugger$History$view = F2(function(maybeIndex, _n0) {
    var snapshots = _n0.snapshots;
    var recent = _n0.recent;
    var numMessages = _n0.numMessages;
    var _n1 = (function() {
      if (maybeIndex.$ === "Nothing") {
        return _Utils_Tuple2(-1, "calc(100% - 24px)");
      } else {
        var i = maybeIndex.a;
        return _Utils_Tuple2(i, "calc(100% - 54px)");
      }
    })();
    var index = _n1.a;
    var height = _n1.b;
    var newStuff = A3(
      elm$core$List$foldl,
      elm$browser$Debugger$History$consMsg(index),
      _Utils_Tuple2(numMessages - 1, _List_Nil),
      recent.messages
    ).b;
    var oldStuff = A3(
      elm$html$Html$Lazy$lazy2,
      elm$browser$Debugger$History$viewSnapshots,
      index,
      snapshots
    );
    return A2(
      elm$html$Html$div,
      _List_fromArray([
        elm$html$Html$Attributes$id("elm-debugger-sidebar"),
        A2(elm$html$Html$Attributes$style, "width", "100%"),
        A2(elm$html$Html$Attributes$style, "overflow-y", "auto"),
        A2(elm$html$Html$Attributes$style, "height", height)
      ]),
      A2(
        elm$core$List$cons,
        elm$browser$Debugger$History$styles,
        A2(elm$core$List$cons, oldStuff, newStuff)
      )
    );
  });
  var elm$browser$Debugger$Main$Jump = function(a) {
    return { $: "Jump", a: a };
  };
  var elm$browser$Debugger$Main$resumeStyle =
    "\n\n.elm-debugger-resume {\n  width: 100%;\n  height: 30px;\n  line-height: 30px;\n  cursor: pointer;\n}\n\n.elm-debugger-resume:hover {\n  background-color: rgb(41, 41, 41);\n}\n\n";
  var elm$browser$Debugger$Main$viewResumeButton = function(maybeIndex) {
    if (maybeIndex.$ === "Nothing") {
      return elm$html$Html$text("");
    } else {
      return A2(
        elm$html$Html$div,
        _List_fromArray([
          elm$html$Html$Events$onClick(elm$browser$Debugger$Main$Resume),
          elm$html$Html$Attributes$class("elm-debugger-resume")
        ]),
        _List_fromArray([
          elm$html$Html$text("Resume"),
          A3(
            elm$html$Html$node,
            "style",
            _List_Nil,
            _List_fromArray([
              elm$html$Html$text(elm$browser$Debugger$Main$resumeStyle)
            ])
          )
        ])
      );
    }
  };
  var elm$browser$Debugger$Main$viewTextButton = F2(function(msg, label) {
    return A2(
      elm$html$Html$span,
      _List_fromArray([
        elm$html$Html$Events$onClick(msg),
        A2(elm$html$Html$Attributes$style, "cursor", "pointer")
      ]),
      _List_fromArray([elm$html$Html$text(label)])
    );
  });
  var elm$browser$Debugger$Main$playButton = function(maybeIndex) {
    return A2(
      elm$html$Html$div,
      _List_fromArray([
        A2(elm$html$Html$Attributes$style, "width", "100%"),
        A2(elm$html$Html$Attributes$style, "text-align", "center"),
        A2(
          elm$html$Html$Attributes$style,
          "background-color",
          "rgb(50, 50, 50)"
        )
      ]),
      _List_fromArray([
        elm$browser$Debugger$Main$viewResumeButton(maybeIndex),
        A2(
          elm$html$Html$div,
          _List_fromArray([
            A2(elm$html$Html$Attributes$style, "width", "100%"),
            A2(elm$html$Html$Attributes$style, "height", "24px"),
            A2(elm$html$Html$Attributes$style, "line-height", "24px"),
            A2(elm$html$Html$Attributes$style, "font-size", "12px")
          ]),
          _List_fromArray([
            A2(
              elm$browser$Debugger$Main$viewTextButton,
              elm$browser$Debugger$Main$Import,
              "Import"
            ),
            elm$html$Html$text(" / "),
            A2(
              elm$browser$Debugger$Main$viewTextButton,
              elm$browser$Debugger$Main$Export,
              "Export"
            )
          ])
        )
      ])
    );
  };
  var elm$browser$Debugger$Main$viewSidebar = F2(function(state, history) {
    var maybeIndex = (function() {
      if (state.$ === "Running") {
        return elm$core$Maybe$Nothing;
      } else {
        var index = state.a;
        return elm$core$Maybe$Just(index);
      }
    })();
    return A2(
      elm$html$Html$div,
      _List_fromArray([
        A2(elm$html$Html$Attributes$style, "display", "block"),
        A2(elm$html$Html$Attributes$style, "float", "left"),
        A2(elm$html$Html$Attributes$style, "width", "30ch"),
        A2(elm$html$Html$Attributes$style, "height", "100%"),
        A2(elm$html$Html$Attributes$style, "color", "white"),
        A2(
          elm$html$Html$Attributes$style,
          "background-color",
          "rgb(61, 61, 61)"
        )
      ]),
      _List_fromArray([
        A2(
          elm$html$Html$map,
          elm$browser$Debugger$Main$Jump,
          A2(elm$browser$Debugger$History$view, maybeIndex, history)
        ),
        elm$browser$Debugger$Main$playButton(maybeIndex)
      ])
    );
  });
  var elm$browser$Debugger$Main$popoutView = function(_n0) {
    var history = _n0.history;
    var state = _n0.state;
    var expando = _n0.expando;
    return A3(
      elm$html$Html$node,
      "body",
      _List_fromArray([
        A2(elm$html$Html$Attributes$style, "margin", "0"),
        A2(elm$html$Html$Attributes$style, "padding", "0"),
        A2(elm$html$Html$Attributes$style, "width", "100%"),
        A2(elm$html$Html$Attributes$style, "height", "100%"),
        A2(elm$html$Html$Attributes$style, "font-family", "monospace"),
        A2(elm$html$Html$Attributes$style, "overflow", "auto")
      ]),
      _List_fromArray([
        A2(elm$browser$Debugger$Main$viewSidebar, state, history),
        A2(
          elm$html$Html$map,
          elm$browser$Debugger$Main$ExpandoMsg,
          A2(
            elm$html$Html$div,
            _List_fromArray([
              A2(elm$html$Html$Attributes$style, "display", "block"),
              A2(elm$html$Html$Attributes$style, "float", "left"),
              A2(elm$html$Html$Attributes$style, "height", "100%"),
              A2(elm$html$Html$Attributes$style, "width", "calc(100% - 30ch)"),
              A2(elm$html$Html$Attributes$style, "margin", "0"),
              A2(elm$html$Html$Attributes$style, "overflow", "auto"),
              A2(elm$html$Html$Attributes$style, "cursor", "default")
            ]),
            _List_fromArray([
              A2(
                elm$browser$Debugger$Expando$view,
                elm$core$Maybe$Nothing,
                expando
              )
            ])
          )
        )
      ])
    );
  };
  var elm$browser$Debugger$Overlay$BlockAll = { $: "BlockAll" };
  var elm$browser$Debugger$Overlay$BlockMost = { $: "BlockMost" };
  var elm$browser$Debugger$Overlay$BlockNone = { $: "BlockNone" };
  var elm$browser$Debugger$Overlay$toBlockerType = F2(function(
    isPaused,
    state
  ) {
    switch (state.$) {
      case "None":
        return isPaused
          ? elm$browser$Debugger$Overlay$BlockAll
          : elm$browser$Debugger$Overlay$BlockNone;
      case "BadMetadata":
        return elm$browser$Debugger$Overlay$BlockMost;
      case "BadImport":
        return elm$browser$Debugger$Overlay$BlockMost;
      default:
        return elm$browser$Debugger$Overlay$BlockMost;
    }
  });
  var elm$browser$Debugger$Main$toBlockerType = function(model) {
    return A2(
      elm$browser$Debugger$Overlay$toBlockerType,
      elm$browser$Debugger$Main$isPaused(model.state),
      model.overlay
    );
  };
  var elm$core$Dict$RBEmpty_elm_builtin = { $: "RBEmpty_elm_builtin" };
  var elm$core$Dict$RBNode_elm_builtin = F5(function(a, b, c, d, e) {
    return { $: "RBNode_elm_builtin", a: a, b: b, c: c, d: d, e: e };
  });
  var elm$core$Dict$map = F2(function(func, dict) {
    if (dict.$ === "RBEmpty_elm_builtin") {
      return elm$core$Dict$RBEmpty_elm_builtin;
    } else {
      var color = dict.a;
      var key = dict.b;
      var value = dict.c;
      var left = dict.d;
      var right = dict.e;
      return A5(
        elm$core$Dict$RBNode_elm_builtin,
        color,
        key,
        A2(func, key, value),
        A2(elm$core$Dict$map, func, left),
        A2(elm$core$Dict$map, func, right)
      );
    }
  });
  var elm$core$Dict$sizeHelp = F2(function(n, dict) {
    sizeHelp: while (true) {
      if (dict.$ === "RBEmpty_elm_builtin") {
        return n;
      } else {
        var left = dict.d;
        var right = dict.e;
        var $temp$n = A2(elm$core$Dict$sizeHelp, n + 1, right),
          $temp$dict = left;
        n = $temp$n;
        dict = $temp$dict;
        continue sizeHelp;
      }
    }
  });
  var elm$core$Dict$size = function(dict) {
    return A2(elm$core$Dict$sizeHelp, 0, dict);
  };
  var elm$browser$Debugger$Expando$initHelp = F2(function(isOuter, expando) {
    switch (expando.$) {
      case "S":
        return expando;
      case "Primitive":
        return expando;
      case "Sequence":
        var seqType = expando.a;
        var isClosed = expando.b;
        var items = expando.c;
        return isOuter
          ? A3(
              elm$browser$Debugger$Expando$Sequence,
              seqType,
              false,
              A2(
                elm$core$List$map,
                elm$browser$Debugger$Expando$initHelp(false),
                items
              )
            )
          : elm$core$List$length(items) <= 8
            ? A3(elm$browser$Debugger$Expando$Sequence, seqType, false, items)
            : expando;
      case "Dictionary":
        var isClosed = expando.a;
        var keyValuePairs = expando.b;
        return isOuter
          ? A2(
              elm$browser$Debugger$Expando$Dictionary,
              false,
              A2(
                elm$core$List$map,
                function(_n1) {
                  var k = _n1.a;
                  var v = _n1.b;
                  return _Utils_Tuple2(
                    k,
                    A2(elm$browser$Debugger$Expando$initHelp, false, v)
                  );
                },
                keyValuePairs
              )
            )
          : elm$core$List$length(keyValuePairs) <= 8
            ? A2(elm$browser$Debugger$Expando$Dictionary, false, keyValuePairs)
            : expando;
      case "Record":
        var isClosed = expando.a;
        var entries = expando.b;
        return isOuter
          ? A2(
              elm$browser$Debugger$Expando$Record,
              false,
              A2(
                elm$core$Dict$map,
                F2(function(_n2, v) {
                  return A2(elm$browser$Debugger$Expando$initHelp, false, v);
                }),
                entries
              )
            )
          : elm$core$Dict$size(entries) <= 4
            ? A2(elm$browser$Debugger$Expando$Record, false, entries)
            : expando;
      default:
        var maybeName = expando.a;
        var isClosed = expando.b;
        var args = expando.c;
        return isOuter
          ? A3(
              elm$browser$Debugger$Expando$Constructor,
              maybeName,
              false,
              A2(
                elm$core$List$map,
                elm$browser$Debugger$Expando$initHelp(false),
                args
              )
            )
          : elm$core$List$length(args) <= 4
            ? A3(
                elm$browser$Debugger$Expando$Constructor,
                maybeName,
                false,
                args
              )
            : expando;
    }
  });
  var elm$browser$Debugger$Expando$init = function(value) {
    return A2(
      elm$browser$Debugger$Expando$initHelp,
      true,
      _Debugger_init(value)
    );
  };
  var elm$browser$Debugger$History$History = F3(function(
    snapshots,
    recent,
    numMessages
  ) {
    return { numMessages: numMessages, recent: recent, snapshots: snapshots };
  });
  var elm$browser$Debugger$History$RecentHistory = F3(function(
    model,
    messages,
    numMessages
  ) {
    return { messages: messages, model: model, numMessages: numMessages };
  });
  var elm$browser$Debugger$History$empty = function(model) {
    return A3(
      elm$browser$Debugger$History$History,
      elm$core$Array$empty,
      A3(elm$browser$Debugger$History$RecentHistory, model, _List_Nil, 0),
      0
    );
  };
  var elm$browser$Debugger$Main$Running = function(a) {
    return { $: "Running", a: a };
  };
  var elm$browser$Debugger$Metadata$Error = F2(function(message, problems) {
    return { message: message, problems: problems };
  });
  var elm$browser$Debugger$Metadata$Metadata = F2(function(versions, types) {
    return { types: types, versions: versions };
  });
  var elm$browser$Debugger$Metadata$Types = F3(function(
    message,
    aliases,
    unions
  ) {
    return { aliases: aliases, message: message, unions: unions };
  });
  var elm$browser$Debugger$Metadata$Alias = F2(function(args, tipe) {
    return { args: args, tipe: tipe };
  });
  var elm$json$Json$Decode$list = _Json_decodeList;
  var elm$browser$Debugger$Metadata$decodeAlias = A3(
    elm$json$Json$Decode$map2,
    elm$browser$Debugger$Metadata$Alias,
    A2(
      elm$json$Json$Decode$field,
      "args",
      elm$json$Json$Decode$list(elm$json$Json$Decode$string)
    ),
    A2(elm$json$Json$Decode$field, "type", elm$json$Json$Decode$string)
  );
  var elm$browser$Debugger$Metadata$Union = F2(function(args, tags) {
    return { args: args, tags: tags };
  });
  var elm$core$Dict$empty = elm$core$Dict$RBEmpty_elm_builtin;
  var elm$core$Dict$Black = { $: "Black" };
  var elm$core$Basics$compare = _Utils_compare;
  var elm$core$Dict$Red = { $: "Red" };
  var elm$core$Dict$balance = F5(function(color, key, value, left, right) {
    if (right.$ === "RBNode_elm_builtin" && right.a.$ === "Red") {
      var _n1 = right.a;
      var rK = right.b;
      var rV = right.c;
      var rLeft = right.d;
      var rRight = right.e;
      if (left.$ === "RBNode_elm_builtin" && left.a.$ === "Red") {
        var _n3 = left.a;
        var lK = left.b;
        var lV = left.c;
        var lLeft = left.d;
        var lRight = left.e;
        return A5(
          elm$core$Dict$RBNode_elm_builtin,
          elm$core$Dict$Red,
          key,
          value,
          A5(
            elm$core$Dict$RBNode_elm_builtin,
            elm$core$Dict$Black,
            lK,
            lV,
            lLeft,
            lRight
          ),
          A5(
            elm$core$Dict$RBNode_elm_builtin,
            elm$core$Dict$Black,
            rK,
            rV,
            rLeft,
            rRight
          )
        );
      } else {
        return A5(
          elm$core$Dict$RBNode_elm_builtin,
          color,
          rK,
          rV,
          A5(
            elm$core$Dict$RBNode_elm_builtin,
            elm$core$Dict$Red,
            key,
            value,
            left,
            rLeft
          ),
          rRight
        );
      }
    } else {
      if (
        left.$ === "RBNode_elm_builtin" &&
        left.a.$ === "Red" &&
        left.d.$ === "RBNode_elm_builtin" &&
        left.d.a.$ === "Red"
      ) {
        var _n5 = left.a;
        var lK = left.b;
        var lV = left.c;
        var _n6 = left.d;
        var _n7 = _n6.a;
        var llK = _n6.b;
        var llV = _n6.c;
        var llLeft = _n6.d;
        var llRight = _n6.e;
        var lRight = left.e;
        return A5(
          elm$core$Dict$RBNode_elm_builtin,
          elm$core$Dict$Red,
          lK,
          lV,
          A5(
            elm$core$Dict$RBNode_elm_builtin,
            elm$core$Dict$Black,
            llK,
            llV,
            llLeft,
            llRight
          ),
          A5(
            elm$core$Dict$RBNode_elm_builtin,
            elm$core$Dict$Black,
            key,
            value,
            lRight,
            right
          )
        );
      } else {
        return A5(
          elm$core$Dict$RBNode_elm_builtin,
          color,
          key,
          value,
          left,
          right
        );
      }
    }
  });
  var elm$core$Dict$insertHelp = F3(function(key, value, dict) {
    if (dict.$ === "RBEmpty_elm_builtin") {
      return A5(
        elm$core$Dict$RBNode_elm_builtin,
        elm$core$Dict$Red,
        key,
        value,
        elm$core$Dict$RBEmpty_elm_builtin,
        elm$core$Dict$RBEmpty_elm_builtin
      );
    } else {
      var nColor = dict.a;
      var nKey = dict.b;
      var nValue = dict.c;
      var nLeft = dict.d;
      var nRight = dict.e;
      var _n1 = A2(elm$core$Basics$compare, key, nKey);
      switch (_n1.$) {
        case "LT":
          return A5(
            elm$core$Dict$balance,
            nColor,
            nKey,
            nValue,
            A3(elm$core$Dict$insertHelp, key, value, nLeft),
            nRight
          );
        case "EQ":
          return A5(
            elm$core$Dict$RBNode_elm_builtin,
            nColor,
            nKey,
            value,
            nLeft,
            nRight
          );
        default:
          return A5(
            elm$core$Dict$balance,
            nColor,
            nKey,
            nValue,
            nLeft,
            A3(elm$core$Dict$insertHelp, key, value, nRight)
          );
      }
    }
  });
  var elm$core$Dict$insert = F3(function(key, value, dict) {
    var _n0 = A3(elm$core$Dict$insertHelp, key, value, dict);
    if (_n0.$ === "RBNode_elm_builtin" && _n0.a.$ === "Red") {
      var _n1 = _n0.a;
      var k = _n0.b;
      var v = _n0.c;
      var l = _n0.d;
      var r = _n0.e;
      return A5(
        elm$core$Dict$RBNode_elm_builtin,
        elm$core$Dict$Black,
        k,
        v,
        l,
        r
      );
    } else {
      var x = _n0;
      return x;
    }
  });
  var elm$core$Dict$fromList = function(assocs) {
    return A3(
      elm$core$List$foldl,
      F2(function(_n0, dict) {
        var key = _n0.a;
        var value = _n0.b;
        return A3(elm$core$Dict$insert, key, value, dict);
      }),
      elm$core$Dict$empty,
      assocs
    );
  };
  var elm$json$Json$Decode$keyValuePairs = _Json_decodeKeyValuePairs;
  var elm$json$Json$Decode$dict = function(decoder) {
    return A2(
      elm$json$Json$Decode$map,
      elm$core$Dict$fromList,
      elm$json$Json$Decode$keyValuePairs(decoder)
    );
  };
  var elm$browser$Debugger$Metadata$decodeUnion = A3(
    elm$json$Json$Decode$map2,
    elm$browser$Debugger$Metadata$Union,
    A2(
      elm$json$Json$Decode$field,
      "args",
      elm$json$Json$Decode$list(elm$json$Json$Decode$string)
    ),
    A2(
      elm$json$Json$Decode$field,
      "tags",
      elm$json$Json$Decode$dict(
        elm$json$Json$Decode$list(elm$json$Json$Decode$string)
      )
    )
  );
  var elm$json$Json$Decode$map3 = _Json_map3;
  var elm$browser$Debugger$Metadata$decodeTypes = A4(
    elm$json$Json$Decode$map3,
    elm$browser$Debugger$Metadata$Types,
    A2(elm$json$Json$Decode$field, "message", elm$json$Json$Decode$string),
    A2(
      elm$json$Json$Decode$field,
      "aliases",
      elm$json$Json$Decode$dict(elm$browser$Debugger$Metadata$decodeAlias)
    ),
    A2(
      elm$json$Json$Decode$field,
      "unions",
      elm$json$Json$Decode$dict(elm$browser$Debugger$Metadata$decodeUnion)
    )
  );
  var elm$browser$Debugger$Metadata$Versions = function(elm) {
    return { elm: elm };
  };
  var elm$browser$Debugger$Metadata$decodeVersions = A2(
    elm$json$Json$Decode$map,
    elm$browser$Debugger$Metadata$Versions,
    A2(elm$json$Json$Decode$field, "elm", elm$json$Json$Decode$string)
  );
  var elm$browser$Debugger$Metadata$decoder = A3(
    elm$json$Json$Decode$map2,
    elm$browser$Debugger$Metadata$Metadata,
    A2(
      elm$json$Json$Decode$field,
      "versions",
      elm$browser$Debugger$Metadata$decodeVersions
    ),
    A2(
      elm$json$Json$Decode$field,
      "types",
      elm$browser$Debugger$Metadata$decodeTypes
    )
  );
  var elm$browser$Debugger$Metadata$ProblemType = F2(function(name, problems) {
    return { name: name, problems: problems };
  });
  var elm$core$String$contains = _String_contains;
  var elm$browser$Debugger$Metadata$hasProblem = F2(function(tipe, _n0) {
    var problem = _n0.a;
    var token = _n0.b;
    return A2(elm$core$String$contains, token, tipe)
      ? elm$core$Maybe$Just(problem)
      : elm$core$Maybe$Nothing;
  });
  var elm$browser$Debugger$Metadata$Decoder = { $: "Decoder" };
  var elm$browser$Debugger$Metadata$Function = { $: "Function" };
  var elm$browser$Debugger$Metadata$Process = { $: "Process" };
  var elm$browser$Debugger$Metadata$Program = { $: "Program" };
  var elm$browser$Debugger$Metadata$Request = { $: "Request" };
  var elm$browser$Debugger$Metadata$Socket = { $: "Socket" };
  var elm$browser$Debugger$Metadata$Task = { $: "Task" };
  var elm$browser$Debugger$Metadata$VirtualDom = { $: "VirtualDom" };
  var elm$browser$Debugger$Metadata$problemTable = _List_fromArray([
    _Utils_Tuple2(elm$browser$Debugger$Metadata$Function, "->"),
    _Utils_Tuple2(elm$browser$Debugger$Metadata$Decoder, "Json.Decode.Decoder"),
    _Utils_Tuple2(elm$browser$Debugger$Metadata$Task, "Task.Task"),
    _Utils_Tuple2(elm$browser$Debugger$Metadata$Process, "Process.Id"),
    _Utils_Tuple2(
      elm$browser$Debugger$Metadata$Socket,
      "WebSocket.LowLevel.WebSocket"
    ),
    _Utils_Tuple2(elm$browser$Debugger$Metadata$Request, "Http.Request"),
    _Utils_Tuple2(elm$browser$Debugger$Metadata$Program, "Platform.Program"),
    _Utils_Tuple2(elm$browser$Debugger$Metadata$VirtualDom, "VirtualDom.Node"),
    _Utils_Tuple2(
      elm$browser$Debugger$Metadata$VirtualDom,
      "VirtualDom.Attribute"
    )
  ]);
  var elm$core$List$maybeCons = F3(function(f, mx, xs) {
    var _n0 = f(mx);
    if (_n0.$ === "Just") {
      var x = _n0.a;
      return A2(elm$core$List$cons, x, xs);
    } else {
      return xs;
    }
  });
  var elm$core$List$filterMap = F2(function(f, xs) {
    return A3(elm$core$List$foldr, elm$core$List$maybeCons(f), _List_Nil, xs);
  });
  var elm$browser$Debugger$Metadata$findProblems = function(tipe) {
    return A2(
      elm$core$List$filterMap,
      elm$browser$Debugger$Metadata$hasProblem(tipe),
      elm$browser$Debugger$Metadata$problemTable
    );
  };
  var elm$browser$Debugger$Metadata$collectBadAliases = F3(function(
    name,
    _n0,
    list
  ) {
    var tipe = _n0.tipe;
    var _n1 = elm$browser$Debugger$Metadata$findProblems(tipe);
    if (!_n1.b) {
      return list;
    } else {
      var problems = _n1;
      return A2(
        elm$core$List$cons,
        A2(elm$browser$Debugger$Metadata$ProblemType, name, problems),
        list
      );
    }
  });
  var elm$core$Dict$values = function(dict) {
    return A3(
      elm$core$Dict$foldr,
      F3(function(key, value, valueList) {
        return A2(elm$core$List$cons, value, valueList);
      }),
      _List_Nil,
      dict
    );
  };
  var elm$core$List$append = F2(function(xs, ys) {
    if (!ys.b) {
      return xs;
    } else {
      return A3(elm$core$List$foldr, elm$core$List$cons, ys, xs);
    }
  });
  var elm$core$List$concat = function(lists) {
    return A3(elm$core$List$foldr, elm$core$List$append, _List_Nil, lists);
  };
  var elm$core$List$concatMap = F2(function(f, list) {
    return elm$core$List$concat(A2(elm$core$List$map, f, list));
  });
  var elm$browser$Debugger$Metadata$collectBadUnions = F3(function(
    name,
    _n0,
    list
  ) {
    var tags = _n0.tags;
    var _n1 = A2(
      elm$core$List$concatMap,
      elm$browser$Debugger$Metadata$findProblems,
      elm$core$List$concat(elm$core$Dict$values(tags))
    );
    if (!_n1.b) {
      return list;
    } else {
      var problems = _n1;
      return A2(
        elm$core$List$cons,
        A2(elm$browser$Debugger$Metadata$ProblemType, name, problems),
        list
      );
    }
  });
  var elm$core$Dict$foldl = F3(function(func, acc, dict) {
    foldl: while (true) {
      if (dict.$ === "RBEmpty_elm_builtin") {
        return acc;
      } else {
        var key = dict.b;
        var value = dict.c;
        var left = dict.d;
        var right = dict.e;
        var $temp$func = func,
          $temp$acc = A3(
            func,
            key,
            value,
            A3(elm$core$Dict$foldl, func, acc, left)
          ),
          $temp$dict = right;
        func = $temp$func;
        acc = $temp$acc;
        dict = $temp$dict;
        continue foldl;
      }
    }
  });
  var elm$browser$Debugger$Metadata$isPortable = function(_n0) {
    var types = _n0.types;
    var badAliases = A3(
      elm$core$Dict$foldl,
      elm$browser$Debugger$Metadata$collectBadAliases,
      _List_Nil,
      types.aliases
    );
    var _n1 = A3(
      elm$core$Dict$foldl,
      elm$browser$Debugger$Metadata$collectBadUnions,
      badAliases,
      types.unions
    );
    if (!_n1.b) {
      return elm$core$Maybe$Nothing;
    } else {
      var problems = _n1;
      return elm$core$Maybe$Just(
        A2(elm$browser$Debugger$Metadata$Error, types.message, problems)
      );
    }
  };
  var elm$json$Json$Decode$decodeValue = _Json_run;
  var elm$browser$Debugger$Metadata$decode = function(value) {
    var _n0 = A2(
      elm$json$Json$Decode$decodeValue,
      elm$browser$Debugger$Metadata$decoder,
      value
    );
    if (_n0.$ === "Err") {
      return elm$core$Result$Err(
        A2(
          elm$browser$Debugger$Metadata$Error,
          "The compiler is generating bad metadata. This is a compiler bug!",
          _List_Nil
        )
      );
    } else {
      var metadata = _n0.a;
      var _n1 = elm$browser$Debugger$Metadata$isPortable(metadata);
      if (_n1.$ === "Nothing") {
        return elm$core$Result$Ok(metadata);
      } else {
        var error = _n1.a;
        return elm$core$Result$Err(error);
      }
    }
  };
  var elm$browser$Debugger$Overlay$None = { $: "None" };
  var elm$browser$Debugger$Overlay$none = elm$browser$Debugger$Overlay$None;
  var elm$core$Platform$Cmd$map = _Platform_map;
  var elm$browser$Debugger$Main$wrapInit = F4(function(
    metadata,
    popout,
    init,
    flags
  ) {
    var _n0 = init(flags);
    var userModel = _n0.a;
    var userCommands = _n0.b;
    return _Utils_Tuple2(
      {
        expando: elm$browser$Debugger$Expando$init(userModel),
        history: elm$browser$Debugger$History$empty(userModel),
        metadata: elm$browser$Debugger$Metadata$decode(metadata),
        overlay: elm$browser$Debugger$Overlay$none,
        popout: popout,
        state: elm$browser$Debugger$Main$Running(userModel)
      },
      A2(
        elm$core$Platform$Cmd$map,
        elm$browser$Debugger$Main$UserMsg,
        userCommands
      )
    );
  });
  var elm$browser$Debugger$Main$getLatestModel = function(state) {
    if (state.$ === "Running") {
      var model = state.a;
      return model;
    } else {
      var model = state.c;
      return model;
    }
  };
  var elm$core$Platform$Sub$map = _Platform_map;
  var elm$browser$Debugger$Main$wrapSubs = F2(function(subscriptions, model) {
    return A2(
      elm$core$Platform$Sub$map,
      elm$browser$Debugger$Main$UserMsg,
      subscriptions(elm$browser$Debugger$Main$getLatestModel(model.state))
    );
  });
  var elm$core$Dict$get = F2(function(targetKey, dict) {
    get: while (true) {
      if (dict.$ === "RBEmpty_elm_builtin") {
        return elm$core$Maybe$Nothing;
      } else {
        var key = dict.b;
        var value = dict.c;
        var left = dict.d;
        var right = dict.e;
        var _n1 = A2(elm$core$Basics$compare, targetKey, key);
        switch (_n1.$) {
          case "LT":
            var $temp$targetKey = targetKey,
              $temp$dict = left;
            targetKey = $temp$targetKey;
            dict = $temp$dict;
            continue get;
          case "EQ":
            return elm$core$Maybe$Just(value);
          default:
            var $temp$targetKey = targetKey,
              $temp$dict = right;
            targetKey = $temp$targetKey;
            dict = $temp$dict;
            continue get;
        }
      }
    }
  });
  var elm$browser$Debugger$Expando$mergeDictHelp = F3(function(
    oldDict,
    key,
    value
  ) {
    var _n12 = A2(elm$core$Dict$get, key, oldDict);
    if (_n12.$ === "Nothing") {
      return value;
    } else {
      var oldValue = _n12.a;
      return A2(elm$browser$Debugger$Expando$mergeHelp, oldValue, value);
    }
  });
  var elm$browser$Debugger$Expando$mergeHelp = F2(function(old, _new) {
    var _n3 = _Utils_Tuple2(old, _new);
    _n3$6: while (true) {
      switch (_n3.b.$) {
        case "S":
          return _new;
        case "Primitive":
          return _new;
        case "Sequence":
          if (_n3.a.$ === "Sequence") {
            var _n4 = _n3.a;
            var isClosed = _n4.b;
            var oldValues = _n4.c;
            var _n5 = _n3.b;
            var seqType = _n5.a;
            var newValues = _n5.c;
            return A3(
              elm$browser$Debugger$Expando$Sequence,
              seqType,
              isClosed,
              A2(
                elm$browser$Debugger$Expando$mergeListHelp,
                oldValues,
                newValues
              )
            );
          } else {
            break _n3$6;
          }
        case "Dictionary":
          if (_n3.a.$ === "Dictionary") {
            var _n6 = _n3.a;
            var isClosed = _n6.a;
            var _n7 = _n3.b;
            var keyValuePairs = _n7.b;
            return A2(
              elm$browser$Debugger$Expando$Dictionary,
              isClosed,
              keyValuePairs
            );
          } else {
            break _n3$6;
          }
        case "Record":
          if (_n3.a.$ === "Record") {
            var _n8 = _n3.a;
            var isClosed = _n8.a;
            var oldDict = _n8.b;
            var _n9 = _n3.b;
            var newDict = _n9.b;
            return A2(
              elm$browser$Debugger$Expando$Record,
              isClosed,
              A2(
                elm$core$Dict$map,
                elm$browser$Debugger$Expando$mergeDictHelp(oldDict),
                newDict
              )
            );
          } else {
            break _n3$6;
          }
        default:
          if (_n3.a.$ === "Constructor") {
            var _n10 = _n3.a;
            var isClosed = _n10.b;
            var oldValues = _n10.c;
            var _n11 = _n3.b;
            var maybeName = _n11.a;
            var newValues = _n11.c;
            return A3(
              elm$browser$Debugger$Expando$Constructor,
              maybeName,
              isClosed,
              A2(
                elm$browser$Debugger$Expando$mergeListHelp,
                oldValues,
                newValues
              )
            );
          } else {
            break _n3$6;
          }
      }
    }
    return _new;
  });
  var elm$browser$Debugger$Expando$mergeListHelp = F2(function(olds, news) {
    var _n0 = _Utils_Tuple2(olds, news);
    if (!_n0.a.b) {
      return news;
    } else {
      if (!_n0.b.b) {
        return news;
      } else {
        var _n1 = _n0.a;
        var x = _n1.a;
        var xs = _n1.b;
        var _n2 = _n0.b;
        var y = _n2.a;
        var ys = _n2.b;
        return A2(
          elm$core$List$cons,
          A2(elm$browser$Debugger$Expando$mergeHelp, x, y),
          A2(elm$browser$Debugger$Expando$mergeListHelp, xs, ys)
        );
      }
    }
  });
  var elm$browser$Debugger$Expando$merge = F2(function(value, expando) {
    return A2(
      elm$browser$Debugger$Expando$mergeHelp,
      expando,
      _Debugger_init(value)
    );
  });
  var elm$browser$Debugger$Expando$updateIndex = F3(function(n, func, list) {
    if (!list.b) {
      return _List_Nil;
    } else {
      var x = list.a;
      var xs = list.b;
      return n <= 0
        ? A2(elm$core$List$cons, func(x), xs)
        : A2(
            elm$core$List$cons,
            x,
            A3(elm$browser$Debugger$Expando$updateIndex, n - 1, func, xs)
          );
    }
  });
  var elm$core$Basics$not = _Basics_not;
  var elm$core$Dict$getMin = function(dict) {
    getMin: while (true) {
      if (
        dict.$ === "RBNode_elm_builtin" &&
        dict.d.$ === "RBNode_elm_builtin"
      ) {
        var left = dict.d;
        var $temp$dict = left;
        dict = $temp$dict;
        continue getMin;
      } else {
        return dict;
      }
    }
  };
  var elm$core$Dict$moveRedLeft = function(dict) {
    if (
      dict.$ === "RBNode_elm_builtin" &&
      dict.d.$ === "RBNode_elm_builtin" &&
      dict.e.$ === "RBNode_elm_builtin"
    ) {
      if (dict.e.d.$ === "RBNode_elm_builtin" && dict.e.d.a.$ === "Red") {
        var clr = dict.a;
        var k = dict.b;
        var v = dict.c;
        var _n1 = dict.d;
        var lClr = _n1.a;
        var lK = _n1.b;
        var lV = _n1.c;
        var lLeft = _n1.d;
        var lRight = _n1.e;
        var _n2 = dict.e;
        var rClr = _n2.a;
        var rK = _n2.b;
        var rV = _n2.c;
        var rLeft = _n2.d;
        var _n3 = rLeft.a;
        var rlK = rLeft.b;
        var rlV = rLeft.c;
        var rlL = rLeft.d;
        var rlR = rLeft.e;
        var rRight = _n2.e;
        return A5(
          elm$core$Dict$RBNode_elm_builtin,
          elm$core$Dict$Red,
          rlK,
          rlV,
          A5(
            elm$core$Dict$RBNode_elm_builtin,
            elm$core$Dict$Black,
            k,
            v,
            A5(
              elm$core$Dict$RBNode_elm_builtin,
              elm$core$Dict$Red,
              lK,
              lV,
              lLeft,
              lRight
            ),
            rlL
          ),
          A5(
            elm$core$Dict$RBNode_elm_builtin,
            elm$core$Dict$Black,
            rK,
            rV,
            rlR,
            rRight
          )
        );
      } else {
        var clr = dict.a;
        var k = dict.b;
        var v = dict.c;
        var _n4 = dict.d;
        var lClr = _n4.a;
        var lK = _n4.b;
        var lV = _n4.c;
        var lLeft = _n4.d;
        var lRight = _n4.e;
        var _n5 = dict.e;
        var rClr = _n5.a;
        var rK = _n5.b;
        var rV = _n5.c;
        var rLeft = _n5.d;
        var rRight = _n5.e;
        if (clr.$ === "Black") {
          return A5(
            elm$core$Dict$RBNode_elm_builtin,
            elm$core$Dict$Black,
            k,
            v,
            A5(
              elm$core$Dict$RBNode_elm_builtin,
              elm$core$Dict$Red,
              lK,
              lV,
              lLeft,
              lRight
            ),
            A5(
              elm$core$Dict$RBNode_elm_builtin,
              elm$core$Dict$Red,
              rK,
              rV,
              rLeft,
              rRight
            )
          );
        } else {
          return A5(
            elm$core$Dict$RBNode_elm_builtin,
            elm$core$Dict$Black,
            k,
            v,
            A5(
              elm$core$Dict$RBNode_elm_builtin,
              elm$core$Dict$Red,
              lK,
              lV,
              lLeft,
              lRight
            ),
            A5(
              elm$core$Dict$RBNode_elm_builtin,
              elm$core$Dict$Red,
              rK,
              rV,
              rLeft,
              rRight
            )
          );
        }
      }
    } else {
      return dict;
    }
  };
  var elm$core$Dict$moveRedRight = function(dict) {
    if (
      dict.$ === "RBNode_elm_builtin" &&
      dict.d.$ === "RBNode_elm_builtin" &&
      dict.e.$ === "RBNode_elm_builtin"
    ) {
      if (dict.d.d.$ === "RBNode_elm_builtin" && dict.d.d.a.$ === "Red") {
        var clr = dict.a;
        var k = dict.b;
        var v = dict.c;
        var _n1 = dict.d;
        var lClr = _n1.a;
        var lK = _n1.b;
        var lV = _n1.c;
        var _n2 = _n1.d;
        var _n3 = _n2.a;
        var llK = _n2.b;
        var llV = _n2.c;
        var llLeft = _n2.d;
        var llRight = _n2.e;
        var lRight = _n1.e;
        var _n4 = dict.e;
        var rClr = _n4.a;
        var rK = _n4.b;
        var rV = _n4.c;
        var rLeft = _n4.d;
        var rRight = _n4.e;
        return A5(
          elm$core$Dict$RBNode_elm_builtin,
          elm$core$Dict$Red,
          lK,
          lV,
          A5(
            elm$core$Dict$RBNode_elm_builtin,
            elm$core$Dict$Black,
            llK,
            llV,
            llLeft,
            llRight
          ),
          A5(
            elm$core$Dict$RBNode_elm_builtin,
            elm$core$Dict$Black,
            k,
            v,
            lRight,
            A5(
              elm$core$Dict$RBNode_elm_builtin,
              elm$core$Dict$Red,
              rK,
              rV,
              rLeft,
              rRight
            )
          )
        );
      } else {
        var clr = dict.a;
        var k = dict.b;
        var v = dict.c;
        var _n5 = dict.d;
        var lClr = _n5.a;
        var lK = _n5.b;
        var lV = _n5.c;
        var lLeft = _n5.d;
        var lRight = _n5.e;
        var _n6 = dict.e;
        var rClr = _n6.a;
        var rK = _n6.b;
        var rV = _n6.c;
        var rLeft = _n6.d;
        var rRight = _n6.e;
        if (clr.$ === "Black") {
          return A5(
            elm$core$Dict$RBNode_elm_builtin,
            elm$core$Dict$Black,
            k,
            v,
            A5(
              elm$core$Dict$RBNode_elm_builtin,
              elm$core$Dict$Red,
              lK,
              lV,
              lLeft,
              lRight
            ),
            A5(
              elm$core$Dict$RBNode_elm_builtin,
              elm$core$Dict$Red,
              rK,
              rV,
              rLeft,
              rRight
            )
          );
        } else {
          return A5(
            elm$core$Dict$RBNode_elm_builtin,
            elm$core$Dict$Black,
            k,
            v,
            A5(
              elm$core$Dict$RBNode_elm_builtin,
              elm$core$Dict$Red,
              lK,
              lV,
              lLeft,
              lRight
            ),
            A5(
              elm$core$Dict$RBNode_elm_builtin,
              elm$core$Dict$Red,
              rK,
              rV,
              rLeft,
              rRight
            )
          );
        }
      }
    } else {
      return dict;
    }
  };
  var elm$core$Dict$removeHelpPrepEQGT = F7(function(
    targetKey,
    dict,
    color,
    key,
    value,
    left,
    right
  ) {
    if (left.$ === "RBNode_elm_builtin" && left.a.$ === "Red") {
      var _n1 = left.a;
      var lK = left.b;
      var lV = left.c;
      var lLeft = left.d;
      var lRight = left.e;
      return A5(
        elm$core$Dict$RBNode_elm_builtin,
        color,
        lK,
        lV,
        lLeft,
        A5(
          elm$core$Dict$RBNode_elm_builtin,
          elm$core$Dict$Red,
          key,
          value,
          lRight,
          right
        )
      );
    } else {
      _n2$2: while (true) {
        if (right.$ === "RBNode_elm_builtin" && right.a.$ === "Black") {
          if (right.d.$ === "RBNode_elm_builtin") {
            if (right.d.a.$ === "Black") {
              var _n3 = right.a;
              var _n4 = right.d;
              var _n5 = _n4.a;
              return elm$core$Dict$moveRedRight(dict);
            } else {
              break _n2$2;
            }
          } else {
            var _n6 = right.a;
            var _n7 = right.d;
            return elm$core$Dict$moveRedRight(dict);
          }
        } else {
          break _n2$2;
        }
      }
      return dict;
    }
  });
  var elm$core$Dict$removeMin = function(dict) {
    if (dict.$ === "RBNode_elm_builtin" && dict.d.$ === "RBNode_elm_builtin") {
      var color = dict.a;
      var key = dict.b;
      var value = dict.c;
      var left = dict.d;
      var lColor = left.a;
      var lLeft = left.d;
      var right = dict.e;
      if (lColor.$ === "Black") {
        if (lLeft.$ === "RBNode_elm_builtin" && lLeft.a.$ === "Red") {
          var _n3 = lLeft.a;
          return A5(
            elm$core$Dict$RBNode_elm_builtin,
            color,
            key,
            value,
            elm$core$Dict$removeMin(left),
            right
          );
        } else {
          var _n4 = elm$core$Dict$moveRedLeft(dict);
          if (_n4.$ === "RBNode_elm_builtin") {
            var nColor = _n4.a;
            var nKey = _n4.b;
            var nValue = _n4.c;
            var nLeft = _n4.d;
            var nRight = _n4.e;
            return A5(
              elm$core$Dict$balance,
              nColor,
              nKey,
              nValue,
              elm$core$Dict$removeMin(nLeft),
              nRight
            );
          } else {
            return elm$core$Dict$RBEmpty_elm_builtin;
          }
        }
      } else {
        return A5(
          elm$core$Dict$RBNode_elm_builtin,
          color,
          key,
          value,
          elm$core$Dict$removeMin(left),
          right
        );
      }
    } else {
      return elm$core$Dict$RBEmpty_elm_builtin;
    }
  };
  var elm$core$Dict$removeHelp = F2(function(targetKey, dict) {
    if (dict.$ === "RBEmpty_elm_builtin") {
      return elm$core$Dict$RBEmpty_elm_builtin;
    } else {
      var color = dict.a;
      var key = dict.b;
      var value = dict.c;
      var left = dict.d;
      var right = dict.e;
      if (_Utils_cmp(targetKey, key) < 0) {
        if (left.$ === "RBNode_elm_builtin" && left.a.$ === "Black") {
          var _n4 = left.a;
          var lLeft = left.d;
          if (lLeft.$ === "RBNode_elm_builtin" && lLeft.a.$ === "Red") {
            var _n6 = lLeft.a;
            return A5(
              elm$core$Dict$RBNode_elm_builtin,
              color,
              key,
              value,
              A2(elm$core$Dict$removeHelp, targetKey, left),
              right
            );
          } else {
            var _n7 = elm$core$Dict$moveRedLeft(dict);
            if (_n7.$ === "RBNode_elm_builtin") {
              var nColor = _n7.a;
              var nKey = _n7.b;
              var nValue = _n7.c;
              var nLeft = _n7.d;
              var nRight = _n7.e;
              return A5(
                elm$core$Dict$balance,
                nColor,
                nKey,
                nValue,
                A2(elm$core$Dict$removeHelp, targetKey, nLeft),
                nRight
              );
            } else {
              return elm$core$Dict$RBEmpty_elm_builtin;
            }
          }
        } else {
          return A5(
            elm$core$Dict$RBNode_elm_builtin,
            color,
            key,
            value,
            A2(elm$core$Dict$removeHelp, targetKey, left),
            right
          );
        }
      } else {
        return A2(
          elm$core$Dict$removeHelpEQGT,
          targetKey,
          A7(
            elm$core$Dict$removeHelpPrepEQGT,
            targetKey,
            dict,
            color,
            key,
            value,
            left,
            right
          )
        );
      }
    }
  });
  var elm$core$Dict$removeHelpEQGT = F2(function(targetKey, dict) {
    if (dict.$ === "RBNode_elm_builtin") {
      var color = dict.a;
      var key = dict.b;
      var value = dict.c;
      var left = dict.d;
      var right = dict.e;
      if (_Utils_eq(targetKey, key)) {
        var _n1 = elm$core$Dict$getMin(right);
        if (_n1.$ === "RBNode_elm_builtin") {
          var minKey = _n1.b;
          var minValue = _n1.c;
          return A5(
            elm$core$Dict$balance,
            color,
            minKey,
            minValue,
            left,
            elm$core$Dict$removeMin(right)
          );
        } else {
          return elm$core$Dict$RBEmpty_elm_builtin;
        }
      } else {
        return A5(
          elm$core$Dict$balance,
          color,
          key,
          value,
          left,
          A2(elm$core$Dict$removeHelp, targetKey, right)
        );
      }
    } else {
      return elm$core$Dict$RBEmpty_elm_builtin;
    }
  });
  var elm$core$Dict$remove = F2(function(key, dict) {
    var _n0 = A2(elm$core$Dict$removeHelp, key, dict);
    if (_n0.$ === "RBNode_elm_builtin" && _n0.a.$ === "Red") {
      var _n1 = _n0.a;
      var k = _n0.b;
      var v = _n0.c;
      var l = _n0.d;
      var r = _n0.e;
      return A5(
        elm$core$Dict$RBNode_elm_builtin,
        elm$core$Dict$Black,
        k,
        v,
        l,
        r
      );
    } else {
      var x = _n0;
      return x;
    }
  });
  var elm$core$Dict$update = F3(function(targetKey, alter, dictionary) {
    var _n0 = alter(A2(elm$core$Dict$get, targetKey, dictionary));
    if (_n0.$ === "Just") {
      var value = _n0.a;
      return A3(elm$core$Dict$insert, targetKey, value, dictionary);
    } else {
      return A2(elm$core$Dict$remove, targetKey, dictionary);
    }
  });
  var elm$browser$Debugger$Expando$update = F2(function(msg, value) {
    switch (value.$) {
      case "S":
        return value;
      case "Primitive":
        return value;
      case "Sequence":
        var seqType = value.a;
        var isClosed = value.b;
        var valueList = value.c;
        switch (msg.$) {
          case "Toggle":
            return A3(
              elm$browser$Debugger$Expando$Sequence,
              seqType,
              !isClosed,
              valueList
            );
          case "Index":
            if (msg.a.$ === "None") {
              var _n3 = msg.a;
              var index = msg.b;
              var subMsg = msg.c;
              return A3(
                elm$browser$Debugger$Expando$Sequence,
                seqType,
                isClosed,
                A3(
                  elm$browser$Debugger$Expando$updateIndex,
                  index,
                  elm$browser$Debugger$Expando$update(subMsg),
                  valueList
                )
              );
            } else {
              return value;
            }
          default:
            return value;
        }
      case "Dictionary":
        var isClosed = value.a;
        var keyValuePairs = value.b;
        switch (msg.$) {
          case "Toggle":
            return A2(
              elm$browser$Debugger$Expando$Dictionary,
              !isClosed,
              keyValuePairs
            );
          case "Index":
            var redirect = msg.a;
            var index = msg.b;
            var subMsg = msg.c;
            switch (redirect.$) {
              case "None":
                return value;
              case "Key":
                return A2(
                  elm$browser$Debugger$Expando$Dictionary,
                  isClosed,
                  A3(
                    elm$browser$Debugger$Expando$updateIndex,
                    index,
                    function(_n6) {
                      var k = _n6.a;
                      var v = _n6.b;
                      return _Utils_Tuple2(
                        A2(elm$browser$Debugger$Expando$update, subMsg, k),
                        v
                      );
                    },
                    keyValuePairs
                  )
                );
              default:
                return A2(
                  elm$browser$Debugger$Expando$Dictionary,
                  isClosed,
                  A3(
                    elm$browser$Debugger$Expando$updateIndex,
                    index,
                    function(_n7) {
                      var k = _n7.a;
                      var v = _n7.b;
                      return _Utils_Tuple2(
                        k,
                        A2(elm$browser$Debugger$Expando$update, subMsg, v)
                      );
                    },
                    keyValuePairs
                  )
                );
            }
          default:
            return value;
        }
      case "Record":
        var isClosed = value.a;
        var valueDict = value.b;
        switch (msg.$) {
          case "Toggle":
            return A2(
              elm$browser$Debugger$Expando$Record,
              !isClosed,
              valueDict
            );
          case "Index":
            return value;
          default:
            var field = msg.a;
            var subMsg = msg.b;
            return A2(
              elm$browser$Debugger$Expando$Record,
              isClosed,
              A3(
                elm$core$Dict$update,
                field,
                elm$browser$Debugger$Expando$updateField(subMsg),
                valueDict
              )
            );
        }
      default:
        var maybeName = value.a;
        var isClosed = value.b;
        var valueList = value.c;
        switch (msg.$) {
          case "Toggle":
            return A3(
              elm$browser$Debugger$Expando$Constructor,
              maybeName,
              !isClosed,
              valueList
            );
          case "Index":
            if (msg.a.$ === "None") {
              var _n10 = msg.a;
              var index = msg.b;
              var subMsg = msg.c;
              return A3(
                elm$browser$Debugger$Expando$Constructor,
                maybeName,
                isClosed,
                A3(
                  elm$browser$Debugger$Expando$updateIndex,
                  index,
                  elm$browser$Debugger$Expando$update(subMsg),
                  valueList
                )
              );
            } else {
              return value;
            }
          default:
            return value;
        }
    }
  });
  var elm$browser$Debugger$Expando$updateField = F2(function(
    msg,
    maybeExpando
  ) {
    if (maybeExpando.$ === "Nothing") {
      return maybeExpando;
    } else {
      var expando = maybeExpando.a;
      return elm$core$Maybe$Just(
        A2(elm$browser$Debugger$Expando$update, msg, expando)
      );
    }
  });
  var elm$browser$Debugger$History$Snapshot = F2(function(model, messages) {
    return { messages: messages, model: model };
  });
  var elm$core$Array$fromListHelp = F3(function(list, nodeList, nodeListSize) {
    fromListHelp: while (true) {
      var _n0 = A2(
        elm$core$Elm$JsArray$initializeFromList,
        elm$core$Array$branchFactor,
        list
      );
      var jsArray = _n0.a;
      var remainingItems = _n0.b;
      if (
        _Utils_cmp(
          elm$core$Elm$JsArray$length(jsArray),
          elm$core$Array$branchFactor
        ) < 0
      ) {
        return A2(elm$core$Array$builderToArray, true, {
          nodeList: nodeList,
          nodeListSize: nodeListSize,
          tail: jsArray
        });
      } else {
        var $temp$list = remainingItems,
          $temp$nodeList = A2(
            elm$core$List$cons,
            elm$core$Array$Leaf(jsArray),
            nodeList
          ),
          $temp$nodeListSize = nodeListSize + 1;
        list = $temp$list;
        nodeList = $temp$nodeList;
        nodeListSize = $temp$nodeListSize;
        continue fromListHelp;
      }
    }
  });
  var elm$core$Array$fromList = function(list) {
    if (!list.b) {
      return elm$core$Array$empty;
    } else {
      return A3(elm$core$Array$fromListHelp, list, _List_Nil, 0);
    }
  };
  var elm$browser$Debugger$History$addRecent = F3(function(msg, newModel, _n0) {
    var model = _n0.model;
    var messages = _n0.messages;
    var numMessages = _n0.numMessages;
    return _Utils_eq(numMessages, elm$browser$Debugger$History$maxSnapshotSize)
      ? _Utils_Tuple2(
          elm$core$Maybe$Just(
            A2(
              elm$browser$Debugger$History$Snapshot,
              model,
              elm$core$Array$fromList(messages)
            )
          ),
          A3(
            elm$browser$Debugger$History$RecentHistory,
            newModel,
            _List_fromArray([msg]),
            1
          )
        )
      : _Utils_Tuple2(
          elm$core$Maybe$Nothing,
          A3(
            elm$browser$Debugger$History$RecentHistory,
            model,
            A2(elm$core$List$cons, msg, messages),
            numMessages + 1
          )
        );
  });
  var elm$core$Bitwise$shiftRightZfBy = _Bitwise_shiftRightZfBy;
  var elm$core$Array$bitMask = 4294967295 >>> (32 - elm$core$Array$shiftStep);
  var elm$core$Basics$ge = _Utils_ge;
  var elm$core$Bitwise$and = _Bitwise_and;
  var elm$core$Elm$JsArray$push = _JsArray_push;
  var elm$core$Elm$JsArray$singleton = _JsArray_singleton;
  var elm$core$Elm$JsArray$unsafeGet = _JsArray_unsafeGet;
  var elm$core$Elm$JsArray$unsafeSet = _JsArray_unsafeSet;
  var elm$core$Array$insertTailInTree = F4(function(shift, index, tail, tree) {
    var pos = elm$core$Array$bitMask & (index >>> shift);
    if (_Utils_cmp(pos, elm$core$Elm$JsArray$length(tree)) > -1) {
      if (shift === 5) {
        return A2(elm$core$Elm$JsArray$push, elm$core$Array$Leaf(tail), tree);
      } else {
        var newSub = elm$core$Array$SubTree(
          A4(
            elm$core$Array$insertTailInTree,
            shift - elm$core$Array$shiftStep,
            index,
            tail,
            elm$core$Elm$JsArray$empty
          )
        );
        return A2(elm$core$Elm$JsArray$push, newSub, tree);
      }
    } else {
      var value = A2(elm$core$Elm$JsArray$unsafeGet, pos, tree);
      if (value.$ === "SubTree") {
        var subTree = value.a;
        var newSub = elm$core$Array$SubTree(
          A4(
            elm$core$Array$insertTailInTree,
            shift - elm$core$Array$shiftStep,
            index,
            tail,
            subTree
          )
        );
        return A3(elm$core$Elm$JsArray$unsafeSet, pos, newSub, tree);
      } else {
        var newSub = elm$core$Array$SubTree(
          A4(
            elm$core$Array$insertTailInTree,
            shift - elm$core$Array$shiftStep,
            index,
            tail,
            elm$core$Elm$JsArray$singleton(value)
          )
        );
        return A3(elm$core$Elm$JsArray$unsafeSet, pos, newSub, tree);
      }
    }
  });
  var elm$core$Bitwise$shiftLeftBy = _Bitwise_shiftLeftBy;
  var elm$core$Array$unsafeReplaceTail = F2(function(newTail, _n0) {
    var len = _n0.a;
    var startShift = _n0.b;
    var tree = _n0.c;
    var tail = _n0.d;
    var originalTailLen = elm$core$Elm$JsArray$length(tail);
    var newTailLen = elm$core$Elm$JsArray$length(newTail);
    var newArrayLen = len + (newTailLen - originalTailLen);
    if (_Utils_eq(newTailLen, elm$core$Array$branchFactor)) {
      var overflow =
        _Utils_cmp(newArrayLen >>> elm$core$Array$shiftStep, 1 << startShift) >
        0;
      if (overflow) {
        var newShift = startShift + elm$core$Array$shiftStep;
        var newTree = A4(
          elm$core$Array$insertTailInTree,
          newShift,
          len,
          newTail,
          elm$core$Elm$JsArray$singleton(elm$core$Array$SubTree(tree))
        );
        return A4(
          elm$core$Array$Array_elm_builtin,
          newArrayLen,
          newShift,
          newTree,
          elm$core$Elm$JsArray$empty
        );
      } else {
        return A4(
          elm$core$Array$Array_elm_builtin,
          newArrayLen,
          startShift,
          A4(elm$core$Array$insertTailInTree, startShift, len, newTail, tree),
          elm$core$Elm$JsArray$empty
        );
      }
    } else {
      return A4(
        elm$core$Array$Array_elm_builtin,
        newArrayLen,
        startShift,
        tree,
        newTail
      );
    }
  });
  var elm$core$Array$push = F2(function(a, array) {
    var tail = array.d;
    return A2(
      elm$core$Array$unsafeReplaceTail,
      A2(elm$core$Elm$JsArray$push, a, tail),
      array
    );
  });
  var elm$browser$Debugger$History$add = F3(function(msg, model, _n0) {
    var snapshots = _n0.snapshots;
    var recent = _n0.recent;
    var numMessages = _n0.numMessages;
    var _n1 = A3(elm$browser$Debugger$History$addRecent, msg, model, recent);
    if (_n1.a.$ === "Just") {
      var snapshot = _n1.a.a;
      var newRecent = _n1.b;
      return A3(
        elm$browser$Debugger$History$History,
        A2(elm$core$Array$push, snapshot, snapshots),
        newRecent,
        numMessages + 1
      );
    } else {
      var _n2 = _n1.a;
      var newRecent = _n1.b;
      return A3(
        elm$browser$Debugger$History$History,
        snapshots,
        newRecent,
        numMessages + 1
      );
    }
  });
  var elm$browser$Debugger$History$Stepping = F2(function(a, b) {
    return { $: "Stepping", a: a, b: b };
  });
  var elm$browser$Debugger$History$Done = F2(function(a, b) {
    return { $: "Done", a: a, b: b };
  });
  var elm$browser$Debugger$History$getHelp = F3(function(
    update,
    msg,
    getResult
  ) {
    if (getResult.$ === "Done") {
      return getResult;
    } else {
      var n = getResult.a;
      var model = getResult.b;
      return !n
        ? A2(elm$browser$Debugger$History$Done, msg, A2(update, msg, model).a)
        : A2(
            elm$browser$Debugger$History$Stepping,
            n - 1,
            A2(update, msg, model).a
          );
    }
  });
  var elm$browser$Debugger$History$undone = function(getResult) {
    undone: while (true) {
      if (getResult.$ === "Done") {
        var msg = getResult.a;
        var model = getResult.b;
        return _Utils_Tuple2(model, msg);
      } else {
        var $temp$getResult = getResult;
        getResult = $temp$getResult;
        continue undone;
      }
    }
  };
  var elm$core$Array$getHelp = F3(function(shift, index, tree) {
    getHelp: while (true) {
      var pos = elm$core$Array$bitMask & (index >>> shift);
      var _n0 = A2(elm$core$Elm$JsArray$unsafeGet, pos, tree);
      if (_n0.$ === "SubTree") {
        var subTree = _n0.a;
        var $temp$shift = shift - elm$core$Array$shiftStep,
          $temp$index = index,
          $temp$tree = subTree;
        shift = $temp$shift;
        index = $temp$index;
        tree = $temp$tree;
        continue getHelp;
      } else {
        var values = _n0.a;
        return A2(
          elm$core$Elm$JsArray$unsafeGet,
          elm$core$Array$bitMask & index,
          values
        );
      }
    }
  });
  var elm$core$Array$tailIndex = function(len) {
    return (len >>> 5) << 5;
  };
  var elm$core$Array$get = F2(function(index, _n0) {
    var len = _n0.a;
    var startShift = _n0.b;
    var tree = _n0.c;
    var tail = _n0.d;
    return index < 0 || _Utils_cmp(index, len) > -1
      ? elm$core$Maybe$Nothing
      : _Utils_cmp(index, elm$core$Array$tailIndex(len)) > -1
        ? elm$core$Maybe$Just(
            A2(
              elm$core$Elm$JsArray$unsafeGet,
              elm$core$Array$bitMask & index,
              tail
            )
          )
        : elm$core$Maybe$Just(
            A3(elm$core$Array$getHelp, startShift, index, tree)
          );
  });
  var elm$browser$Debugger$History$get = F3(function(update, index, history) {
    get: while (true) {
      var recent = history.recent;
      var snapshotMax = history.numMessages - recent.numMessages;
      if (_Utils_cmp(index, snapshotMax) > -1) {
        return elm$browser$Debugger$History$undone(
          A3(
            elm$core$List$foldr,
            elm$browser$Debugger$History$getHelp(update),
            A2(
              elm$browser$Debugger$History$Stepping,
              index - snapshotMax,
              recent.model
            ),
            recent.messages
          )
        );
      } else {
        var _n0 = A2(
          elm$core$Array$get,
          (index / elm$browser$Debugger$History$maxSnapshotSize) | 0,
          history.snapshots
        );
        if (_n0.$ === "Nothing") {
          var $temp$update = update,
            $temp$index = index,
            $temp$history = history;
          update = $temp$update;
          index = $temp$index;
          history = $temp$history;
          continue get;
        } else {
          var model = _n0.a.model;
          var messages = _n0.a.messages;
          return elm$browser$Debugger$History$undone(
            A3(
              elm$core$Array$foldr,
              elm$browser$Debugger$History$getHelp(update),
              A2(
                elm$browser$Debugger$History$Stepping,
                index % elm$browser$Debugger$History$maxSnapshotSize,
                model
              ),
              messages
            )
          );
        }
      }
    }
  });
  var elm$browser$Debugger$Main$Paused = F3(function(a, b, c) {
    return { $: "Paused", a: a, b: b, c: c };
  });
  var elm$browser$Debugger$History$elmToJs = _Debugger_unsafeCoerce;
  var elm$browser$Debugger$History$encodeHelp = F2(function(
    snapshot,
    allMessages
  ) {
    return A3(
      elm$core$Array$foldl,
      elm$core$List$cons,
      allMessages,
      snapshot.messages
    );
  });
  var elm$json$Json$Encode$list = F2(function(func, entries) {
    return _Json_wrap(
      A3(
        elm$core$List$foldl,
        _Json_addEntry(func),
        _Json_emptyArray(_Utils_Tuple0),
        entries
      )
    );
  });
  var elm$browser$Debugger$History$encode = function(_n0) {
    var snapshots = _n0.snapshots;
    var recent = _n0.recent;
    return A2(
      elm$json$Json$Encode$list,
      elm$browser$Debugger$History$elmToJs,
      A3(
        elm$core$Array$foldr,
        elm$browser$Debugger$History$encodeHelp,
        elm$core$List$reverse(recent.messages),
        snapshots
      )
    );
  };
  var elm$json$Json$Encode$object = function(pairs) {
    return _Json_wrap(
      A3(
        elm$core$List$foldl,
        F2(function(_n0, obj) {
          var k = _n0.a;
          var v = _n0.b;
          return A3(_Json_addField, k, v, obj);
        }),
        _Json_emptyObject(_Utils_Tuple0),
        pairs
      )
    );
  };
  var elm$browser$Debugger$Metadata$encodeAlias = function(_n0) {
    var args = _n0.args;
    var tipe = _n0.tipe;
    return elm$json$Json$Encode$object(
      _List_fromArray([
        _Utils_Tuple2(
          "args",
          A2(elm$json$Json$Encode$list, elm$json$Json$Encode$string, args)
        ),
        _Utils_Tuple2("type", elm$json$Json$Encode$string(tipe))
      ])
    );
  };
  var elm$browser$Debugger$Metadata$encodeDict = F2(function(f, dict) {
    return elm$json$Json$Encode$object(
      elm$core$Dict$toList(
        A2(
          elm$core$Dict$map,
          F2(function(key, value) {
            return f(value);
          }),
          dict
        )
      )
    );
  });
  var elm$browser$Debugger$Metadata$encodeUnion = function(_n0) {
    var args = _n0.args;
    var tags = _n0.tags;
    return elm$json$Json$Encode$object(
      _List_fromArray([
        _Utils_Tuple2(
          "args",
          A2(elm$json$Json$Encode$list, elm$json$Json$Encode$string, args)
        ),
        _Utils_Tuple2(
          "tags",
          A2(
            elm$browser$Debugger$Metadata$encodeDict,
            elm$json$Json$Encode$list(elm$json$Json$Encode$string),
            tags
          )
        )
      ])
    );
  };
  var elm$browser$Debugger$Metadata$encodeTypes = function(_n0) {
    var message = _n0.message;
    var unions = _n0.unions;
    var aliases = _n0.aliases;
    return elm$json$Json$Encode$object(
      _List_fromArray([
        _Utils_Tuple2("message", elm$json$Json$Encode$string(message)),
        _Utils_Tuple2(
          "aliases",
          A2(
            elm$browser$Debugger$Metadata$encodeDict,
            elm$browser$Debugger$Metadata$encodeAlias,
            aliases
          )
        ),
        _Utils_Tuple2(
          "unions",
          A2(
            elm$browser$Debugger$Metadata$encodeDict,
            elm$browser$Debugger$Metadata$encodeUnion,
            unions
          )
        )
      ])
    );
  };
  var elm$browser$Debugger$Metadata$encodeVersions = function(_n0) {
    var elm = _n0.elm;
    return elm$json$Json$Encode$object(
      _List_fromArray([_Utils_Tuple2("elm", elm$json$Json$Encode$string(elm))])
    );
  };
  var elm$browser$Debugger$Metadata$encode = function(_n0) {
    var versions = _n0.versions;
    var types = _n0.types;
    return elm$json$Json$Encode$object(
      _List_fromArray([
        _Utils_Tuple2(
          "versions",
          elm$browser$Debugger$Metadata$encodeVersions(versions)
        ),
        _Utils_Tuple2("types", elm$browser$Debugger$Metadata$encodeTypes(types))
      ])
    );
  };
  var elm$browser$Debugger$Main$download = F2(function(metadata, history) {
    var json = elm$json$Json$Encode$object(
      _List_fromArray([
        _Utils_Tuple2(
          "metadata",
          elm$browser$Debugger$Metadata$encode(metadata)
        ),
        _Utils_Tuple2("history", elm$browser$Debugger$History$encode(history))
      ])
    );
    var historyLength = elm$browser$Debugger$History$size(history);
    return A2(
      elm$core$Task$perform,
      function(_n0) {
        return elm$browser$Debugger$Main$NoOp;
      },
      A2(_Debugger_download, historyLength, json)
    );
  });
  var elm$browser$Debugger$History$jsToElm = _Debugger_unsafeCoerce;
  var elm$json$Json$Decode$value = _Json_decodeValue;
  var elm$browser$Debugger$History$decoder = F2(function(initialModel, update) {
    var addMessage = F2(function(rawMsg, _n0) {
      var model = _n0.a;
      var history = _n0.b;
      var msg = elm$browser$Debugger$History$jsToElm(rawMsg);
      return _Utils_Tuple2(
        A2(update, msg, model),
        A3(elm$browser$Debugger$History$add, msg, model, history)
      );
    });
    var updateModel = function(rawMsgs) {
      return A3(
        elm$core$List$foldl,
        addMessage,
        _Utils_Tuple2(
          initialModel,
          elm$browser$Debugger$History$empty(initialModel)
        ),
        rawMsgs
      );
    };
    return A2(
      elm$json$Json$Decode$map,
      updateModel,
      elm$json$Json$Decode$list(elm$json$Json$Decode$value)
    );
  });
  var elm$browser$Debugger$History$getInitialModel = function(_n0) {
    var snapshots = _n0.snapshots;
    var recent = _n0.recent;
    var _n1 = A2(elm$core$Array$get, 0, snapshots);
    if (_n1.$ === "Just") {
      var model = _n1.a.model;
      return model;
    } else {
      return recent.model;
    }
  };
  var elm$browser$Debugger$Overlay$BadImport = function(a) {
    return { $: "BadImport", a: a };
  };
  var elm$browser$Debugger$Report$CorruptHistory = { $: "CorruptHistory" };
  var elm$browser$Debugger$Overlay$corruptImport = elm$browser$Debugger$Overlay$BadImport(
    elm$browser$Debugger$Report$CorruptHistory
  );
  var elm$core$Platform$Cmd$batch = _Platform_batch;
  var elm$core$Platform$Cmd$none = elm$core$Platform$Cmd$batch(_List_Nil);
  var elm$browser$Debugger$Main$loadNewHistory = F3(function(
    rawHistory,
    update,
    model
  ) {
    var pureUserUpdate = F2(function(msg, userModel) {
      return A2(update, msg, userModel).a;
    });
    var initialUserModel = elm$browser$Debugger$History$getInitialModel(
      model.history
    );
    var decoder = A2(
      elm$browser$Debugger$History$decoder,
      initialUserModel,
      pureUserUpdate
    );
    var _n0 = A2(elm$json$Json$Decode$decodeValue, decoder, rawHistory);
    if (_n0.$ === "Err") {
      return _Utils_Tuple2(
        _Utils_update(model, {
          overlay: elm$browser$Debugger$Overlay$corruptImport
        }),
        elm$core$Platform$Cmd$none
      );
    } else {
      var _n1 = _n0.a;
      var latestUserModel = _n1.a;
      var newHistory = _n1.b;
      return _Utils_Tuple2(
        _Utils_update(model, {
          expando: elm$browser$Debugger$Expando$init(latestUserModel),
          history: newHistory,
          overlay: elm$browser$Debugger$Overlay$none,
          state: elm$browser$Debugger$Main$Running(latestUserModel)
        }),
        elm$core$Platform$Cmd$none
      );
    }
  });
  var elm$core$Basics$always = F2(function(a, _n0) {
    return a;
  });
  var elm$browser$Debugger$Main$scroll = function(popout) {
    return A2(
      elm$core$Task$perform,
      elm$core$Basics$always(elm$browser$Debugger$Main$NoOp),
      _Debugger_scroll(popout)
    );
  };
  var elm$browser$Debugger$Main$Upload = function(a) {
    return { $: "Upload", a: a };
  };
  var elm$browser$Debugger$Main$upload = A2(
    elm$core$Task$perform,
    elm$browser$Debugger$Main$Upload,
    _Debugger_upload(_Utils_Tuple0)
  );
  var elm$browser$Debugger$Overlay$BadMetadata = function(a) {
    return { $: "BadMetadata", a: a };
  };
  var elm$browser$Debugger$Overlay$badMetadata = elm$browser$Debugger$Overlay$BadMetadata;
  var elm$browser$Debugger$Main$withGoodMetadata = F2(function(model, func) {
    var _n0 = model.metadata;
    if (_n0.$ === "Ok") {
      var metadata = _n0.a;
      return func(metadata);
    } else {
      var error = _n0.a;
      return _Utils_Tuple2(
        _Utils_update(model, {
          overlay: elm$browser$Debugger$Overlay$badMetadata(error)
        }),
        elm$core$Platform$Cmd$none
      );
    }
  });
  var elm$browser$Debugger$Report$AliasChange = function(a) {
    return { $: "AliasChange", a: a };
  };
  var elm$browser$Debugger$Metadata$checkAlias = F4(function(
    name,
    old,
    _new,
    changes
  ) {
    return _Utils_eq(old.tipe, _new.tipe) && _Utils_eq(old.args, _new.args)
      ? changes
      : A2(
          elm$core$List$cons,
          elm$browser$Debugger$Report$AliasChange(name),
          changes
        );
  });
  var elm$browser$Debugger$Metadata$addTag = F3(function(tag, _n0, changes) {
    return _Utils_update(changes, {
      added: A2(elm$core$List$cons, tag, changes.added)
    });
  });
  var elm$browser$Debugger$Metadata$checkTag = F4(function(
    tag,
    old,
    _new,
    changes
  ) {
    return _Utils_eq(old, _new)
      ? changes
      : _Utils_update(changes, {
          changed: A2(elm$core$List$cons, tag, changes.changed)
        });
  });
  var elm$browser$Debugger$Metadata$removeTag = F3(function(tag, _n0, changes) {
    return _Utils_update(changes, {
      removed: A2(elm$core$List$cons, tag, changes.removed)
    });
  });
  var elm$browser$Debugger$Report$UnionChange = F2(function(a, b) {
    return { $: "UnionChange", a: a, b: b };
  });
  var elm$browser$Debugger$Report$TagChanges = F4(function(
    removed,
    changed,
    added,
    argsMatch
  ) {
    return {
      added: added,
      argsMatch: argsMatch,
      changed: changed,
      removed: removed
    };
  });
  var elm$browser$Debugger$Report$emptyTagChanges = function(argsMatch) {
    return A4(
      elm$browser$Debugger$Report$TagChanges,
      _List_Nil,
      _List_Nil,
      _List_Nil,
      argsMatch
    );
  };
  var elm$browser$Debugger$Report$hasTagChanges = function(tagChanges) {
    return _Utils_eq(
      tagChanges,
      A4(
        elm$browser$Debugger$Report$TagChanges,
        _List_Nil,
        _List_Nil,
        _List_Nil,
        true
      )
    );
  };
  var elm$core$Dict$merge = F6(function(
    leftStep,
    bothStep,
    rightStep,
    leftDict,
    rightDict,
    initialResult
  ) {
    var stepState = F3(function(rKey, rValue, _n0) {
      stepState: while (true) {
        var list = _n0.a;
        var result = _n0.b;
        if (!list.b) {
          return _Utils_Tuple2(list, A3(rightStep, rKey, rValue, result));
        } else {
          var _n2 = list.a;
          var lKey = _n2.a;
          var lValue = _n2.b;
          var rest = list.b;
          if (_Utils_cmp(lKey, rKey) < 0) {
            var $temp$rKey = rKey,
              $temp$rValue = rValue,
              $temp$_n0 = _Utils_Tuple2(
                rest,
                A3(leftStep, lKey, lValue, result)
              );
            rKey = $temp$rKey;
            rValue = $temp$rValue;
            _n0 = $temp$_n0;
            continue stepState;
          } else {
            if (_Utils_cmp(lKey, rKey) > 0) {
              return _Utils_Tuple2(list, A3(rightStep, rKey, rValue, result));
            } else {
              return _Utils_Tuple2(
                rest,
                A4(bothStep, lKey, lValue, rValue, result)
              );
            }
          }
        }
      }
    });
    var _n3 = A3(
      elm$core$Dict$foldl,
      stepState,
      _Utils_Tuple2(elm$core$Dict$toList(leftDict), initialResult),
      rightDict
    );
    var leftovers = _n3.a;
    var intermediateResult = _n3.b;
    return A3(
      elm$core$List$foldl,
      F2(function(_n4, result) {
        var k = _n4.a;
        var v = _n4.b;
        return A3(leftStep, k, v, result);
      }),
      intermediateResult,
      leftovers
    );
  });
  var elm$browser$Debugger$Metadata$checkUnion = F4(function(
    name,
    old,
    _new,
    changes
  ) {
    var tagChanges = A6(
      elm$core$Dict$merge,
      elm$browser$Debugger$Metadata$removeTag,
      elm$browser$Debugger$Metadata$checkTag,
      elm$browser$Debugger$Metadata$addTag,
      old.tags,
      _new.tags,
      elm$browser$Debugger$Report$emptyTagChanges(
        _Utils_eq(old.args, _new.args)
      )
    );
    return elm$browser$Debugger$Report$hasTagChanges(tagChanges)
      ? changes
      : A2(
          elm$core$List$cons,
          A2(elm$browser$Debugger$Report$UnionChange, name, tagChanges),
          changes
        );
  });
  var elm$browser$Debugger$Metadata$ignore = F3(function(key, value, report) {
    return report;
  });
  var elm$browser$Debugger$Report$MessageChanged = F2(function(a, b) {
    return { $: "MessageChanged", a: a, b: b };
  });
  var elm$browser$Debugger$Report$SomethingChanged = function(a) {
    return { $: "SomethingChanged", a: a };
  };
  var elm$core$Basics$neq = _Utils_notEqual;
  var elm$browser$Debugger$Metadata$checkTypes = F2(function(old, _new) {
    return !_Utils_eq(old.message, _new.message)
      ? A2(
          elm$browser$Debugger$Report$MessageChanged,
          old.message,
          _new.message
        )
      : elm$browser$Debugger$Report$SomethingChanged(
          A6(
            elm$core$Dict$merge,
            elm$browser$Debugger$Metadata$ignore,
            elm$browser$Debugger$Metadata$checkUnion,
            elm$browser$Debugger$Metadata$ignore,
            old.unions,
            _new.unions,
            A6(
              elm$core$Dict$merge,
              elm$browser$Debugger$Metadata$ignore,
              elm$browser$Debugger$Metadata$checkAlias,
              elm$browser$Debugger$Metadata$ignore,
              old.aliases,
              _new.aliases,
              _List_Nil
            )
          )
        );
  });
  var elm$browser$Debugger$Report$VersionChanged = F2(function(a, b) {
    return { $: "VersionChanged", a: a, b: b };
  });
  var elm$browser$Debugger$Metadata$check = F2(function(old, _new) {
    return !_Utils_eq(old.versions.elm, _new.versions.elm)
      ? A2(
          elm$browser$Debugger$Report$VersionChanged,
          old.versions.elm,
          _new.versions.elm
        )
      : A2(elm$browser$Debugger$Metadata$checkTypes, old.types, _new.types);
  });
  var elm$browser$Debugger$Overlay$RiskyImport = F2(function(a, b) {
    return { $: "RiskyImport", a: a, b: b };
  });
  var elm$browser$Debugger$Overlay$uploadDecoder = A3(
    elm$json$Json$Decode$map2,
    F2(function(x, y) {
      return _Utils_Tuple2(x, y);
    }),
    A2(
      elm$json$Json$Decode$field,
      "metadata",
      elm$browser$Debugger$Metadata$decoder
    ),
    A2(elm$json$Json$Decode$field, "history", elm$json$Json$Decode$value)
  );
  var elm$browser$Debugger$Report$Fine = { $: "Fine" };
  var elm$browser$Debugger$Report$Impossible = { $: "Impossible" };
  var elm$browser$Debugger$Report$Risky = { $: "Risky" };
  var elm$core$List$isEmpty = function(xs) {
    if (!xs.b) {
      return true;
    } else {
      return false;
    }
  };
  var elm$browser$Debugger$Report$some = function(list) {
    return !elm$core$List$isEmpty(list);
  };
  var elm$browser$Debugger$Report$evaluateChange = function(change) {
    if (change.$ === "AliasChange") {
      return elm$browser$Debugger$Report$Impossible;
    } else {
      var removed = change.b.removed;
      var changed = change.b.changed;
      var added = change.b.added;
      var argsMatch = change.b.argsMatch;
      return !argsMatch ||
        (elm$browser$Debugger$Report$some(changed) ||
          elm$browser$Debugger$Report$some(removed))
        ? elm$browser$Debugger$Report$Impossible
        : elm$browser$Debugger$Report$some(added)
          ? elm$browser$Debugger$Report$Risky
          : elm$browser$Debugger$Report$Fine;
    }
  };
  var elm$browser$Debugger$Report$worstCase = F2(function(status, statusList) {
    worstCase: while (true) {
      if (!statusList.b) {
        return status;
      } else {
        switch (statusList.a.$) {
          case "Impossible":
            var _n1 = statusList.a;
            return elm$browser$Debugger$Report$Impossible;
          case "Risky":
            var _n2 = statusList.a;
            var rest = statusList.b;
            var $temp$status = elm$browser$Debugger$Report$Risky,
              $temp$statusList = rest;
            status = $temp$status;
            statusList = $temp$statusList;
            continue worstCase;
          default:
            var _n3 = statusList.a;
            var rest = statusList.b;
            var $temp$status = status,
              $temp$statusList = rest;
            status = $temp$status;
            statusList = $temp$statusList;
            continue worstCase;
        }
      }
    }
  });
  var elm$browser$Debugger$Report$evaluate = function(report) {
    switch (report.$) {
      case "CorruptHistory":
        return elm$browser$Debugger$Report$Impossible;
      case "VersionChanged":
        return elm$browser$Debugger$Report$Impossible;
      case "MessageChanged":
        return elm$browser$Debugger$Report$Impossible;
      default:
        var changes = report.a;
        return A2(
          elm$browser$Debugger$Report$worstCase,
          elm$browser$Debugger$Report$Fine,
          A2(
            elm$core$List$map,
            elm$browser$Debugger$Report$evaluateChange,
            changes
          )
        );
    }
  };
  var elm$json$Json$Decode$decodeString = _Json_runOnString;
  var elm$browser$Debugger$Overlay$assessImport = F2(function(
    metadata,
    jsonString
  ) {
    var _n0 = A2(
      elm$json$Json$Decode$decodeString,
      elm$browser$Debugger$Overlay$uploadDecoder,
      jsonString
    );
    if (_n0.$ === "Err") {
      return elm$core$Result$Err(elm$browser$Debugger$Overlay$corruptImport);
    } else {
      var _n1 = _n0.a;
      var foreignMetadata = _n1.a;
      var rawHistory = _n1.b;
      var report = A2(
        elm$browser$Debugger$Metadata$check,
        foreignMetadata,
        metadata
      );
      var _n2 = elm$browser$Debugger$Report$evaluate(report);
      switch (_n2.$) {
        case "Impossible":
          return elm$core$Result$Err(
            elm$browser$Debugger$Overlay$BadImport(report)
          );
        case "Risky":
          return elm$core$Result$Err(
            A2(elm$browser$Debugger$Overlay$RiskyImport, report, rawHistory)
          );
        default:
          return elm$core$Result$Ok(rawHistory);
      }
    }
  });
  var elm$browser$Debugger$Overlay$close = F2(function(msg, state) {
    switch (state.$) {
      case "None":
        return elm$core$Maybe$Nothing;
      case "BadMetadata":
        return elm$core$Maybe$Nothing;
      case "BadImport":
        return elm$core$Maybe$Nothing;
      default:
        var rawHistory = state.b;
        if (msg.$ === "Cancel") {
          return elm$core$Maybe$Nothing;
        } else {
          return elm$core$Maybe$Just(rawHistory);
        }
    }
  });
  var elm$browser$Debugger$Main$wrapUpdate = F3(function(update, msg, model) {
    wrapUpdate: while (true) {
      switch (msg.$) {
        case "NoOp":
          return _Utils_Tuple2(model, elm$core$Platform$Cmd$none);
        case "UserMsg":
          var userMsg = msg.a;
          var userModel = elm$browser$Debugger$Main$getLatestModel(model.state);
          var newHistory = A3(
            elm$browser$Debugger$History$add,
            userMsg,
            userModel,
            model.history
          );
          var _n1 = A2(update, userMsg, userModel);
          var newUserModel = _n1.a;
          var userCmds = _n1.b;
          var commands = A2(
            elm$core$Platform$Cmd$map,
            elm$browser$Debugger$Main$UserMsg,
            userCmds
          );
          var _n2 = model.state;
          if (_n2.$ === "Running") {
            return _Utils_Tuple2(
              _Utils_update(model, {
                expando: A2(
                  elm$browser$Debugger$Expando$merge,
                  newUserModel,
                  model.expando
                ),
                history: newHistory,
                state: elm$browser$Debugger$Main$Running(newUserModel)
              }),
              elm$core$Platform$Cmd$batch(
                _List_fromArray([
                  commands,
                  elm$browser$Debugger$Main$scroll(model.popout)
                ])
              )
            );
          } else {
            var index = _n2.a;
            var indexModel = _n2.b;
            return _Utils_Tuple2(
              _Utils_update(model, {
                history: newHistory,
                state: A3(
                  elm$browser$Debugger$Main$Paused,
                  index,
                  indexModel,
                  newUserModel
                )
              }),
              commands
            );
          }
        case "ExpandoMsg":
          var eMsg = msg.a;
          return _Utils_Tuple2(
            _Utils_update(model, {
              expando: A2(
                elm$browser$Debugger$Expando$update,
                eMsg,
                model.expando
              )
            }),
            elm$core$Platform$Cmd$none
          );
        case "Resume":
          var _n3 = model.state;
          if (_n3.$ === "Running") {
            return _Utils_Tuple2(model, elm$core$Platform$Cmd$none);
          } else {
            var userModel = _n3.c;
            return _Utils_Tuple2(
              _Utils_update(model, {
                expando: A2(
                  elm$browser$Debugger$Expando$merge,
                  userModel,
                  model.expando
                ),
                state: elm$browser$Debugger$Main$Running(userModel)
              }),
              elm$browser$Debugger$Main$scroll(model.popout)
            );
          }
        case "Jump":
          var index = msg.a;
          var _n4 = A3(
            elm$browser$Debugger$History$get,
            update,
            index,
            model.history
          );
          var indexModel = _n4.a;
          var indexMsg = _n4.b;
          return _Utils_Tuple2(
            _Utils_update(model, {
              expando: A2(
                elm$browser$Debugger$Expando$merge,
                indexModel,
                model.expando
              ),
              state: A3(
                elm$browser$Debugger$Main$Paused,
                index,
                indexModel,
                elm$browser$Debugger$Main$getLatestModel(model.state)
              )
            }),
            elm$core$Platform$Cmd$none
          );
        case "Open":
          return _Utils_Tuple2(
            model,
            A2(
              elm$core$Task$perform,
              function(_n5) {
                return elm$browser$Debugger$Main$NoOp;
              },
              _Debugger_open(model.popout)
            )
          );
        case "Up":
          var index = (function() {
            var _n6 = model.state;
            if (_n6.$ === "Paused") {
              var i = _n6.a;
              return i;
            } else {
              return elm$browser$Debugger$History$size(model.history);
            }
          })();
          if (index > 0) {
            var $temp$update = update,
              $temp$msg = elm$browser$Debugger$Main$Jump(index - 1),
              $temp$model = model;
            update = $temp$update;
            msg = $temp$msg;
            model = $temp$model;
            continue wrapUpdate;
          } else {
            return _Utils_Tuple2(model, elm$core$Platform$Cmd$none);
          }
        case "Down":
          var _n7 = model.state;
          if (_n7.$ === "Running") {
            return _Utils_Tuple2(model, elm$core$Platform$Cmd$none);
          } else {
            var index = _n7.a;
            var userModel = _n7.c;
            if (
              _Utils_eq(
                index,
                elm$browser$Debugger$History$size(model.history) - 1
              )
            ) {
              var $temp$update = update,
                $temp$msg = elm$browser$Debugger$Main$Resume,
                $temp$model = model;
              update = $temp$update;
              msg = $temp$msg;
              model = $temp$model;
              continue wrapUpdate;
            } else {
              var $temp$update = update,
                $temp$msg = elm$browser$Debugger$Main$Jump(index + 1),
                $temp$model = model;
              update = $temp$update;
              msg = $temp$msg;
              model = $temp$model;
              continue wrapUpdate;
            }
          }
        case "Import":
          return A2(elm$browser$Debugger$Main$withGoodMetadata, model, function(
            _n8
          ) {
            return _Utils_Tuple2(model, elm$browser$Debugger$Main$upload);
          });
        case "Export":
          return A2(elm$browser$Debugger$Main$withGoodMetadata, model, function(
            metadata
          ) {
            return _Utils_Tuple2(
              model,
              A2(elm$browser$Debugger$Main$download, metadata, model.history)
            );
          });
        case "Upload":
          var jsonString = msg.a;
          return A2(elm$browser$Debugger$Main$withGoodMetadata, model, function(
            metadata
          ) {
            var _n9 = A2(
              elm$browser$Debugger$Overlay$assessImport,
              metadata,
              jsonString
            );
            if (_n9.$ === "Err") {
              var newOverlay = _n9.a;
              return _Utils_Tuple2(
                _Utils_update(model, { overlay: newOverlay }),
                elm$core$Platform$Cmd$none
              );
            } else {
              var rawHistory = _n9.a;
              return A3(
                elm$browser$Debugger$Main$loadNewHistory,
                rawHistory,
                update,
                model
              );
            }
          });
        default:
          var overlayMsg = msg.a;
          var _n10 = A2(
            elm$browser$Debugger$Overlay$close,
            overlayMsg,
            model.overlay
          );
          if (_n10.$ === "Nothing") {
            return _Utils_Tuple2(
              _Utils_update(model, {
                overlay: elm$browser$Debugger$Overlay$none
              }),
              elm$core$Platform$Cmd$none
            );
          } else {
            var rawHistory = _n10.a;
            return A3(
              elm$browser$Debugger$Main$loadNewHistory,
              rawHistory,
              update,
              model
            );
          }
      }
    }
  });
  var elm$core$Set$foldr = F3(function(func, initialState, _n0) {
    var dict = _n0.a;
    return A3(
      elm$core$Dict$foldr,
      F3(function(key, _n1, state) {
        return A2(func, key, state);
      }),
      initialState,
      dict
    );
  });
  var elm$core$String$dropLeft = F2(function(n, string) {
    return n < 1
      ? string
      : A3(elm$core$String$slice, n, elm$core$String$length(string), string);
  });
  var elm$core$String$startsWith = _String_startsWith;
  var elm$url$Url$Http = { $: "Http" };
  var elm$url$Url$Https = { $: "Https" };
  var elm$core$String$indexes = _String_indexes;
  var elm$core$String$isEmpty = function(string) {
    return string === "";
  };
  var elm$core$String$toInt = _String_toInt;
  var elm$url$Url$Url = F6(function(
    protocol,
    host,
    port_,
    path,
    query,
    fragment
  ) {
    return {
      fragment: fragment,
      host: host,
      path: path,
      port_: port_,
      protocol: protocol,
      query: query
    };
  });
  var elm$url$Url$chompBeforePath = F5(function(
    protocol,
    path,
    params,
    frag,
    str
  ) {
    if (
      elm$core$String$isEmpty(str) ||
      A2(elm$core$String$contains, "@", str)
    ) {
      return elm$core$Maybe$Nothing;
    } else {
      var _n0 = A2(elm$core$String$indexes, ":", str);
      if (!_n0.b) {
        return elm$core$Maybe$Just(
          A6(
            elm$url$Url$Url,
            protocol,
            str,
            elm$core$Maybe$Nothing,
            path,
            params,
            frag
          )
        );
      } else {
        if (!_n0.b.b) {
          var i = _n0.a;
          var _n1 = elm$core$String$toInt(
            A2(elm$core$String$dropLeft, i + 1, str)
          );
          if (_n1.$ === "Nothing") {
            return elm$core$Maybe$Nothing;
          } else {
            var port_ = _n1;
            return elm$core$Maybe$Just(
              A6(
                elm$url$Url$Url,
                protocol,
                A2(elm$core$String$left, i, str),
                port_,
                path,
                params,
                frag
              )
            );
          }
        } else {
          return elm$core$Maybe$Nothing;
        }
      }
    }
  });
  var elm$url$Url$chompBeforeQuery = F4(function(protocol, params, frag, str) {
    if (elm$core$String$isEmpty(str)) {
      return elm$core$Maybe$Nothing;
    } else {
      var _n0 = A2(elm$core$String$indexes, "/", str);
      if (!_n0.b) {
        return A5(
          elm$url$Url$chompBeforePath,
          protocol,
          "/",
          params,
          frag,
          str
        );
      } else {
        var i = _n0.a;
        return A5(
          elm$url$Url$chompBeforePath,
          protocol,
          A2(elm$core$String$dropLeft, i, str),
          params,
          frag,
          A2(elm$core$String$left, i, str)
        );
      }
    }
  });
  var elm$url$Url$chompBeforeFragment = F3(function(protocol, frag, str) {
    if (elm$core$String$isEmpty(str)) {
      return elm$core$Maybe$Nothing;
    } else {
      var _n0 = A2(elm$core$String$indexes, "?", str);
      if (!_n0.b) {
        return A4(
          elm$url$Url$chompBeforeQuery,
          protocol,
          elm$core$Maybe$Nothing,
          frag,
          str
        );
      } else {
        var i = _n0.a;
        return A4(
          elm$url$Url$chompBeforeQuery,
          protocol,
          elm$core$Maybe$Just(A2(elm$core$String$dropLeft, i + 1, str)),
          frag,
          A2(elm$core$String$left, i, str)
        );
      }
    }
  });
  var elm$url$Url$chompAfterProtocol = F2(function(protocol, str) {
    if (elm$core$String$isEmpty(str)) {
      return elm$core$Maybe$Nothing;
    } else {
      var _n0 = A2(elm$core$String$indexes, "#", str);
      if (!_n0.b) {
        return A3(
          elm$url$Url$chompBeforeFragment,
          protocol,
          elm$core$Maybe$Nothing,
          str
        );
      } else {
        var i = _n0.a;
        return A3(
          elm$url$Url$chompBeforeFragment,
          protocol,
          elm$core$Maybe$Just(A2(elm$core$String$dropLeft, i + 1, str)),
          A2(elm$core$String$left, i, str)
        );
      }
    }
  });
  var elm$url$Url$fromString = function(str) {
    return A2(elm$core$String$startsWith, "http://", str)
      ? A2(
          elm$url$Url$chompAfterProtocol,
          elm$url$Url$Http,
          A2(elm$core$String$dropLeft, 7, str)
        )
      : A2(elm$core$String$startsWith, "https://", str)
        ? A2(
            elm$url$Url$chompAfterProtocol,
            elm$url$Url$Https,
            A2(elm$core$String$dropLeft, 8, str)
          )
        : elm$core$Maybe$Nothing;
  };
  var elm$browser$Browser$application = _Browser_application;
  var elm$core$Result$andThen = F2(function(callback, result) {
    if (result.$ === "Ok") {
      var value = result.a;
      return callback(value);
    } else {
      var msg = result.a;
      return elm$core$Result$Err(msg);
    }
  });
  var elm$core$Result$toMaybe = function(result) {
    if (result.$ === "Ok") {
      var v = result.a;
      return elm$core$Maybe$Just(v);
    } else {
      return elm$core$Maybe$Nothing;
    }
  };
  var author$project$Api$application = F2(function(viewerDecoder, config) {
    var init = F3(function(flags, url, navKey) {
      var maybeViewer = elm$core$Result$toMaybe(
        A2(
          elm$core$Result$andThen,
          elm$json$Json$Decode$decodeString(
            author$project$Api$storageDecoder(viewerDecoder)
          ),
          A2(
            elm$json$Json$Decode$decodeValue,
            elm$json$Json$Decode$string,
            flags
          )
        )
      );
      return A3(config.init, maybeViewer, url, navKey);
    });
    return elm$browser$Browser$application({
      init: init,
      onUrlChange: config.onUrlChange,
      onUrlRequest: config.onUrlRequest,
      subscriptions: config.subscriptions,
      update: config.update,
      view: config.view
    });
  });
  var author$project$Main$ChangedUrl = function(a) {
    return { $: "ChangedUrl", a: a };
  };
  var author$project$Main$ClickedLink = function(a) {
    return { $: "ClickedLink", a: a };
  };
  var author$project$Main$Redirect = function(a) {
    return { $: "Redirect", a: a };
  };
  var elm$core$Maybe$destruct = F3(function(_default, func, maybe) {
    if (maybe.$ === "Just") {
      var a = maybe.a;
      return func(a);
    } else {
      return _default;
    }
  });
  var elm$json$Json$Encode$null = _Json_encodeNull;
  var author$project$Api$storeCache = _Platform_outgoingPort(
    "storeCache",
    function($) {
      return A3(
        elm$core$Maybe$destruct,
        elm$json$Json$Encode$null,
        elm$core$Basics$identity,
        $
      );
    }
  );
  var author$project$Api$logout = author$project$Api$storeCache(
    elm$core$Maybe$Nothing
  );
  var author$project$Main$Article = function(a) {
    return { $: "Article", a: a };
  };
  var author$project$Main$Editor = F2(function(a, b) {
    return { $: "Editor", a: a, b: b };
  });
  var author$project$Main$GotArticleMsg = function(a) {
    return { $: "GotArticleMsg", a: a };
  };
  var author$project$Main$GotEditorMsg = function(a) {
    return { $: "GotEditorMsg", a: a };
  };
  var author$project$Main$GotHomeMsg = function(a) {
    return { $: "GotHomeMsg", a: a };
  };
  var author$project$Main$GotLoginMsg = function(a) {
    return { $: "GotLoginMsg", a: a };
  };
  var author$project$Main$GotProfileMsg = function(a) {
    return { $: "GotProfileMsg", a: a };
  };
  var author$project$Main$GotRegisterMsg = function(a) {
    return { $: "GotRegisterMsg", a: a };
  };
  var author$project$Main$GotSettingsMsg = function(a) {
    return { $: "GotSettingsMsg", a: a };
  };
  var author$project$Main$Home = function(a) {
    return { $: "Home", a: a };
  };
  var author$project$Main$Login = function(a) {
    return { $: "Login", a: a };
  };
  var author$project$Main$NotFound = function(a) {
    return { $: "NotFound", a: a };
  };
  var author$project$Main$Profile = F2(function(a, b) {
    return { $: "Profile", a: a, b: b };
  });
  var author$project$Main$Register = function(a) {
    return { $: "Register", a: a };
  };
  var author$project$Main$Settings = function(a) {
    return { $: "Settings", a: a };
  };
  var author$project$Page$Article$toSession = function(model) {
    return model.session;
  };
  var author$project$Page$Article$Editor$toSession = function(model) {
    return model.session;
  };
  var author$project$Page$Home$toSession = function(model) {
    return model.session;
  };
  var author$project$Page$Login$toSession = function(model) {
    return model.session;
  };
  var author$project$Page$Profile$toSession = function(model) {
    return model.session;
  };
  var author$project$Page$Register$toSession = function(model) {
    return model.session;
  };
  var author$project$Page$Settings$toSession = function(model) {
    return model.session;
  };
  var author$project$Main$toSession = function(page) {
    switch (page.$) {
      case "Redirect":
        var session = page.a;
        return session;
      case "NotFound":
        var session = page.a;
        return session;
      case "Home":
        var home = page.a;
        return author$project$Page$Home$toSession(home);
      case "Settings":
        var settings = page.a;
        return author$project$Page$Settings$toSession(settings);
      case "Login":
        var login = page.a;
        return author$project$Page$Login$toSession(login);
      case "Register":
        var register = page.a;
        return author$project$Page$Register$toSession(register);
      case "Profile":
        var profile = page.b;
        return author$project$Page$Profile$toSession(profile);
      case "Article":
        var article = page.a;
        return author$project$Page$Article$toSession(article);
      default:
        var editor = page.b;
        return author$project$Page$Article$Editor$toSession(editor);
    }
  };
  var author$project$Main$updateWith = F4(function(toModel, toMsg, model, _n0) {
    var subModel = _n0.a;
    var subCmd = _n0.b;
    return _Utils_Tuple2(
      toModel(subModel),
      A2(elm$core$Platform$Cmd$map, toMsg, subCmd)
    );
  });
  var elm$http$Http$Internal$Header = F2(function(a, b) {
    return { $: "Header", a: a, b: b };
  });
  var elm$http$Http$header = elm$http$Http$Internal$Header;
  var author$project$Api$credHeader = function(_n0) {
    var str = _n0.b;
    return A2(elm$http$Http$header, "authorization", "Token " + str);
  };
  var author$project$Api$Endpoint$unwrap = function(_n0) {
    var str = _n0.a;
    return str;
  };
  var elm$http$Http$Internal$Request = function(a) {
    return { $: "Request", a: a };
  };
  var elm$http$Http$request = elm$http$Http$Internal$Request;
  var author$project$Api$Endpoint$request = function(config) {
    return elm$http$Http$request({
      body: config.body,
      expect: config.expect,
      headers: config.headers,
      method: config.method,
      timeout: config.timeout,
      url: author$project$Api$Endpoint$unwrap(config.url),
      withCredentials: config.withCredentials
    });
  };
  var elm$http$Http$Internal$EmptyBody = { $: "EmptyBody" };
  var elm$http$Http$emptyBody = elm$http$Http$Internal$EmptyBody;
  var elm$core$Maybe$isJust = function(maybe) {
    if (maybe.$ === "Just") {
      return true;
    } else {
      return false;
    }
  };
  var elm$core$Result$map = F2(function(func, ra) {
    if (ra.$ === "Ok") {
      var a = ra.a;
      return elm$core$Result$Ok(func(a));
    } else {
      var e = ra.a;
      return elm$core$Result$Err(e);
    }
  });
  var elm$http$Http$BadPayload = F2(function(a, b) {
    return { $: "BadPayload", a: a, b: b };
  });
  var elm$http$Http$BadStatus = function(a) {
    return { $: "BadStatus", a: a };
  };
  var elm$http$Http$BadUrl = function(a) {
    return { $: "BadUrl", a: a };
  };
  var elm$http$Http$NetworkError = { $: "NetworkError" };
  var elm$http$Http$Timeout = { $: "Timeout" };
  var elm$http$Http$Internal$FormDataBody = function(a) {
    return { $: "FormDataBody", a: a };
  };
  var elm$http$Http$Internal$isStringBody = function(body) {
    if (body.$ === "StringBody") {
      return true;
    } else {
      return false;
    }
  };
  var elm$http$Http$expectStringResponse = _Http_expectStringResponse;
  var elm$http$Http$expectJson = function(decoder) {
    return elm$http$Http$expectStringResponse(function(response) {
      var _n0 = A2(elm$json$Json$Decode$decodeString, decoder, response.body);
      if (_n0.$ === "Err") {
        var decodeError = _n0.a;
        return elm$core$Result$Err(
          elm$json$Json$Decode$errorToString(decodeError)
        );
      } else {
        var value = _n0.a;
        return elm$core$Result$Ok(value);
      }
    });
  };
  var author$project$Api$get = F3(function(url, maybeCred, decoder) {
    return author$project$Api$Endpoint$request({
      body: elm$http$Http$emptyBody,
      expect: elm$http$Http$expectJson(decoder),
      headers: (function() {
        if (maybeCred.$ === "Just") {
          var cred = maybeCred.a;
          return _List_fromArray([author$project$Api$credHeader(cred)]);
        } else {
          return _List_Nil;
        }
      })(),
      method: "GET",
      timeout: elm$core$Maybe$Nothing,
      url: url,
      withCredentials: false
    });
  });
  var author$project$Api$Endpoint$Endpoint = function(a) {
    return { $: "Endpoint", a: a };
  };
  var elm$url$Url$Builder$toQueryPair = function(_n0) {
    var key = _n0.a;
    var value = _n0.b;
    return key + ("=" + value);
  };
  var elm$url$Url$Builder$toQuery = function(parameters) {
    if (!parameters.b) {
      return "";
    } else {
      return (
        "?" +
        A2(
          elm$core$String$join,
          "&",
          A2(elm$core$List$map, elm$url$Url$Builder$toQueryPair, parameters)
        )
      );
    }
  };
  var elm$url$Url$Builder$crossOrigin = F3(function(
    prePath,
    pathSegments,
    parameters
  ) {
    return (
      prePath +
      ("/" +
        (A2(elm$core$String$join, "/", pathSegments) +
          elm$url$Url$Builder$toQuery(parameters)))
    );
  });
  var author$project$Api$Endpoint$url = F2(function(paths, queryParams) {
    return author$project$Api$Endpoint$Endpoint(
      A3(
        elm$url$Url$Builder$crossOrigin,
        "https://conduit.productionready.io",
        A2(elm$core$List$cons, "api", paths),
        queryParams
      )
    );
  });
  var author$project$Article$Slug$toString = function(_n0) {
    var str = _n0.a;
    return str;
  };
  var author$project$Api$Endpoint$article = function(slug) {
    return A2(
      author$project$Api$Endpoint$url,
      _List_fromArray(["articles", author$project$Article$Slug$toString(slug)]),
      _List_Nil
    );
  };
  var author$project$Article$Article = F2(function(a, b) {
    return { $: "Article", a: a, b: b };
  });
  var author$project$Article$Full = function(a) {
    return { $: "Full", a: a };
  };
  var author$project$Article$Internals = F3(function(slug, author, metadata) {
    return { author: author, metadata: metadata, slug: slug };
  });
  var author$project$Article$Metadata = F6(function(
    description,
    title,
    tags,
    createdAt,
    favorited,
    favoritesCount
  ) {
    return {
      createdAt: createdAt,
      description: description,
      favorited: favorited,
      favoritesCount: favoritesCount,
      tags: tags,
      title: title
    };
  });
  var elm$json$Json$Decode$bool = _Json_decodeBool;
  var elm$json$Json$Decode$int = _Json_decodeInt;
  var elm$json$Json$Decode$null = _Json_decodeNull;
  var elm$json$Json$Decode$oneOf = _Json_oneOf;
  var elm$json$Json$Decode$nullable = function(decoder) {
    return elm$json$Json$Decode$oneOf(
      _List_fromArray([
        elm$json$Json$Decode$null(elm$core$Maybe$Nothing),
        A2(elm$json$Json$Decode$map, elm$core$Maybe$Just, decoder)
      ])
    );
  };
  var elm$json$Json$Decode$andThen = _Json_andThen;
  var elm$json$Json$Decode$fail = _Json_fail;
  var elm$parser$Parser$deadEndsToString = function(deadEnds) {
    return "TODO deadEndsToString";
  };
  var elm$parser$Parser$DeadEnd = F3(function(row, col, problem) {
    return { col: col, problem: problem, row: row };
  });
  var elm$parser$Parser$problemToDeadEnd = function(p) {
    return A3(elm$parser$Parser$DeadEnd, p.row, p.col, p.problem);
  };
  var elm$parser$Parser$Advanced$bagToList = F2(function(bag, list) {
    bagToList: while (true) {
      switch (bag.$) {
        case "Empty":
          return list;
        case "AddRight":
          var bag1 = bag.a;
          var x = bag.b;
          var $temp$bag = bag1,
            $temp$list = A2(elm$core$List$cons, x, list);
          bag = $temp$bag;
          list = $temp$list;
          continue bagToList;
        default:
          var bag1 = bag.a;
          var bag2 = bag.b;
          var $temp$bag = bag1,
            $temp$list = A2(elm$parser$Parser$Advanced$bagToList, bag2, list);
          bag = $temp$bag;
          list = $temp$list;
          continue bagToList;
      }
    }
  });
  var elm$parser$Parser$Advanced$run = F2(function(_n0, src) {
    var parse = _n0.a;
    var _n1 = parse({
      col: 1,
      context: _List_Nil,
      indent: 1,
      offset: 0,
      row: 1,
      src: src
    });
    if (_n1.$ === "Good") {
      var value = _n1.b;
      return elm$core$Result$Ok(value);
    } else {
      var bag = _n1.b;
      return elm$core$Result$Err(
        A2(elm$parser$Parser$Advanced$bagToList, bag, _List_Nil)
      );
    }
  });
  var elm$parser$Parser$run = F2(function(parser, source) {
    var _n0 = A2(elm$parser$Parser$Advanced$run, parser, source);
    if (_n0.$ === "Ok") {
      var a = _n0.a;
      return elm$core$Result$Ok(a);
    } else {
      var problems = _n0.a;
      return elm$core$Result$Err(
        A2(elm$core$List$map, elm$parser$Parser$problemToDeadEnd, problems)
      );
    }
  });
  var elm$parser$Parser$Advanced$Bad = F2(function(a, b) {
    return { $: "Bad", a: a, b: b };
  });
  var elm$parser$Parser$Advanced$Good = F3(function(a, b, c) {
    return { $: "Good", a: a, b: b, c: c };
  });
  var elm$parser$Parser$Advanced$Parser = function(a) {
    return { $: "Parser", a: a };
  };
  var elm$parser$Parser$Advanced$andThen = F2(function(callback, _n0) {
    var parseA = _n0.a;
    return elm$parser$Parser$Advanced$Parser(function(s0) {
      var _n1 = parseA(s0);
      if (_n1.$ === "Bad") {
        var p = _n1.a;
        var x = _n1.b;
        return A2(elm$parser$Parser$Advanced$Bad, p, x);
      } else {
        var p1 = _n1.a;
        var a = _n1.b;
        var s1 = _n1.c;
        var _n2 = callback(a);
        var parseB = _n2.a;
        var _n3 = parseB(s1);
        if (_n3.$ === "Bad") {
          var p2 = _n3.a;
          var x = _n3.b;
          return A2(elm$parser$Parser$Advanced$Bad, p1 || p2, x);
        } else {
          var p2 = _n3.a;
          var b = _n3.b;
          var s2 = _n3.c;
          return A3(elm$parser$Parser$Advanced$Good, p1 || p2, b, s2);
        }
      }
    });
  });
  var elm$parser$Parser$andThen = elm$parser$Parser$Advanced$andThen;
  var elm$parser$Parser$ExpectingEnd = { $: "ExpectingEnd" };
  var elm$parser$Parser$Advanced$AddRight = F2(function(a, b) {
    return { $: "AddRight", a: a, b: b };
  });
  var elm$parser$Parser$Advanced$Empty = { $: "Empty" };
  var elm$parser$Parser$Advanced$Problem = F4(function(
    row,
    col,
    problem,
    contextStack
  ) {
    return { col: col, contextStack: contextStack, problem: problem, row: row };
  });
  var elm$parser$Parser$Advanced$fromState = F2(function(s, x) {
    return A2(
      elm$parser$Parser$Advanced$AddRight,
      elm$parser$Parser$Advanced$Empty,
      A4(elm$parser$Parser$Advanced$Problem, s.row, s.col, x, s.context)
    );
  });
  var elm$parser$Parser$Advanced$end = function(x) {
    return elm$parser$Parser$Advanced$Parser(function(s) {
      return _Utils_eq(elm$core$String$length(s.src), s.offset)
        ? A3(elm$parser$Parser$Advanced$Good, false, _Utils_Tuple0, s)
        : A2(
            elm$parser$Parser$Advanced$Bad,
            false,
            A2(elm$parser$Parser$Advanced$fromState, s, x)
          );
    });
  };
  var elm$parser$Parser$end = elm$parser$Parser$Advanced$end(
    elm$parser$Parser$ExpectingEnd
  );
  var elm$parser$Parser$Advanced$map2 = F3(function(func, _n0, _n1) {
    var parseA = _n0.a;
    var parseB = _n1.a;
    return elm$parser$Parser$Advanced$Parser(function(s0) {
      var _n2 = parseA(s0);
      if (_n2.$ === "Bad") {
        var p = _n2.a;
        var x = _n2.b;
        return A2(elm$parser$Parser$Advanced$Bad, p, x);
      } else {
        var p1 = _n2.a;
        var a = _n2.b;
        var s1 = _n2.c;
        var _n3 = parseB(s1);
        if (_n3.$ === "Bad") {
          var p2 = _n3.a;
          var x = _n3.b;
          return A2(elm$parser$Parser$Advanced$Bad, p1 || p2, x);
        } else {
          var p2 = _n3.a;
          var b = _n3.b;
          var s2 = _n3.c;
          return A3(
            elm$parser$Parser$Advanced$Good,
            p1 || p2,
            A2(func, a, b),
            s2
          );
        }
      }
    });
  });
  var elm$parser$Parser$Advanced$ignorer = F2(function(
    keepParser,
    ignoreParser
  ) {
    return A3(
      elm$parser$Parser$Advanced$map2,
      elm$core$Basics$always,
      keepParser,
      ignoreParser
    );
  });
  var elm$parser$Parser$ignorer = elm$parser$Parser$Advanced$ignorer;
  var elm$parser$Parser$Advanced$keeper = F2(function(parseFunc, parseArg) {
    return A3(
      elm$parser$Parser$Advanced$map2,
      elm$core$Basics$apL,
      parseFunc,
      parseArg
    );
  });
  var elm$parser$Parser$keeper = elm$parser$Parser$Advanced$keeper;
  var elm$parser$Parser$Advanced$map = F2(function(func, _n0) {
    var parse = _n0.a;
    return elm$parser$Parser$Advanced$Parser(function(s0) {
      var _n1 = parse(s0);
      if (_n1.$ === "Good") {
        var p = _n1.a;
        var a = _n1.b;
        var s1 = _n1.c;
        return A3(elm$parser$Parser$Advanced$Good, p, func(a), s1);
      } else {
        var p = _n1.a;
        var x = _n1.b;
        return A2(elm$parser$Parser$Advanced$Bad, p, x);
      }
    });
  });
  var elm$parser$Parser$map = elm$parser$Parser$Advanced$map;
  var elm$parser$Parser$Advanced$Append = F2(function(a, b) {
    return { $: "Append", a: a, b: b };
  });
  var elm$parser$Parser$Advanced$oneOfHelp = F3(function(s0, bag, parsers) {
    oneOfHelp: while (true) {
      if (!parsers.b) {
        return A2(elm$parser$Parser$Advanced$Bad, false, bag);
      } else {
        var parse = parsers.a.a;
        var remainingParsers = parsers.b;
        var _n1 = parse(s0);
        if (_n1.$ === "Good") {
          var step = _n1;
          return step;
        } else {
          var step = _n1;
          var p = step.a;
          var x = step.b;
          if (p) {
            return step;
          } else {
            var $temp$s0 = s0,
              $temp$bag = A2(elm$parser$Parser$Advanced$Append, bag, x),
              $temp$parsers = remainingParsers;
            s0 = $temp$s0;
            bag = $temp$bag;
            parsers = $temp$parsers;
            continue oneOfHelp;
          }
        }
      }
    }
  });
  var elm$parser$Parser$Advanced$oneOf = function(parsers) {
    return elm$parser$Parser$Advanced$Parser(function(s) {
      return A3(
        elm$parser$Parser$Advanced$oneOfHelp,
        s,
        elm$parser$Parser$Advanced$Empty,
        parsers
      );
    });
  };
  var elm$parser$Parser$oneOf = elm$parser$Parser$Advanced$oneOf;
  var elm$parser$Parser$Advanced$succeed = function(a) {
    return elm$parser$Parser$Advanced$Parser(function(s) {
      return A3(elm$parser$Parser$Advanced$Good, false, a, s);
    });
  };
  var elm$parser$Parser$succeed = elm$parser$Parser$Advanced$succeed;
  var elm$parser$Parser$ExpectingSymbol = function(a) {
    return { $: "ExpectingSymbol", a: a };
  };
  var elm$parser$Parser$Advanced$Token = F2(function(a, b) {
    return { $: "Token", a: a, b: b };
  });
  var elm$parser$Parser$Advanced$isSubString = _Parser_isSubString;
  var elm$parser$Parser$Advanced$token = function(_n0) {
    var str = _n0.a;
    var expecting = _n0.b;
    var progress = !elm$core$String$isEmpty(str);
    return elm$parser$Parser$Advanced$Parser(function(s) {
      var _n1 = A5(
        elm$parser$Parser$Advanced$isSubString,
        str,
        s.offset,
        s.row,
        s.col,
        s.src
      );
      var newOffset = _n1.a;
      var newRow = _n1.b;
      var newCol = _n1.c;
      return _Utils_eq(newOffset, -1)
        ? A2(
            elm$parser$Parser$Advanced$Bad,
            false,
            A2(elm$parser$Parser$Advanced$fromState, s, expecting)
          )
        : A3(elm$parser$Parser$Advanced$Good, progress, _Utils_Tuple0, {
            col: newCol,
            context: s.context,
            indent: s.indent,
            offset: newOffset,
            row: newRow,
            src: s.src
          });
    });
  };
  var elm$parser$Parser$Advanced$symbol = elm$parser$Parser$Advanced$token;
  var elm$parser$Parser$symbol = function(str) {
    return elm$parser$Parser$Advanced$symbol(
      A2(
        elm$parser$Parser$Advanced$Token,
        str,
        elm$parser$Parser$ExpectingSymbol(str)
      )
    );
  };
  var elm$time$Time$Posix = function(a) {
    return { $: "Posix", a: a };
  };
  var elm$time$Time$millisToPosix = elm$time$Time$Posix;
  var rtfeldman$elm_iso8601_date_strings$Iso8601$fromParts = F6(function(
    monthYearDayMs,
    hour,
    minute,
    second,
    ms,
    utcOffsetMinutes
  ) {
    return elm$time$Time$millisToPosix(
      monthYearDayMs +
        hour * 60 * 60 * 1000 +
        (minute - utcOffsetMinutes) * 60 * 1000 +
        second * 1000 +
        ms
    );
  });
  var elm$parser$Parser$Advanced$isSubChar = _Parser_isSubChar;
  var elm$parser$Parser$Advanced$chompWhileHelp = F5(function(
    isGood,
    offset,
    row,
    col,
    s0
  ) {
    chompWhileHelp: while (true) {
      var newOffset = A3(
        elm$parser$Parser$Advanced$isSubChar,
        isGood,
        offset,
        s0.src
      );
      if (_Utils_eq(newOffset, -1)) {
        return A3(
          elm$parser$Parser$Advanced$Good,
          _Utils_cmp(s0.offset, offset) < 0,
          _Utils_Tuple0,
          {
            col: col,
            context: s0.context,
            indent: s0.indent,
            offset: offset,
            row: row,
            src: s0.src
          }
        );
      } else {
        if (_Utils_eq(newOffset, -2)) {
          var $temp$isGood = isGood,
            $temp$offset = offset + 1,
            $temp$row = row + 1,
            $temp$col = 1,
            $temp$s0 = s0;
          isGood = $temp$isGood;
          offset = $temp$offset;
          row = $temp$row;
          col = $temp$col;
          s0 = $temp$s0;
          continue chompWhileHelp;
        } else {
          var $temp$isGood = isGood,
            $temp$offset = newOffset,
            $temp$row = row,
            $temp$col = col + 1,
            $temp$s0 = s0;
          isGood = $temp$isGood;
          offset = $temp$offset;
          row = $temp$row;
          col = $temp$col;
          s0 = $temp$s0;
          continue chompWhileHelp;
        }
      }
    }
  });
  var elm$parser$Parser$Advanced$chompWhile = function(isGood) {
    return elm$parser$Parser$Advanced$Parser(function(s) {
      return A5(
        elm$parser$Parser$Advanced$chompWhileHelp,
        isGood,
        s.offset,
        s.row,
        s.col,
        s
      );
    });
  };
  var elm$parser$Parser$chompWhile = elm$parser$Parser$Advanced$chompWhile;
  var elm$parser$Parser$Advanced$mapChompedString = F2(function(func, _n0) {
    var parse = _n0.a;
    return elm$parser$Parser$Advanced$Parser(function(s0) {
      var _n1 = parse(s0);
      if (_n1.$ === "Bad") {
        var p = _n1.a;
        var x = _n1.b;
        return A2(elm$parser$Parser$Advanced$Bad, p, x);
      } else {
        var p = _n1.a;
        var a = _n1.b;
        var s1 = _n1.c;
        return A3(
          elm$parser$Parser$Advanced$Good,
          p,
          A2(func, A3(elm$core$String$slice, s0.offset, s1.offset, s0.src), a),
          s1
        );
      }
    });
  });
  var elm$parser$Parser$Advanced$getChompedString = function(parser) {
    return A2(
      elm$parser$Parser$Advanced$mapChompedString,
      elm$core$Basics$always,
      parser
    );
  };
  var elm$parser$Parser$getChompedString = elm$parser$Parser$Advanced$getChompedString;
  var elm$parser$Parser$Problem = function(a) {
    return { $: "Problem", a: a };
  };
  var elm$parser$Parser$Advanced$problem = function(x) {
    return elm$parser$Parser$Advanced$Parser(function(s) {
      return A2(
        elm$parser$Parser$Advanced$Bad,
        false,
        A2(elm$parser$Parser$Advanced$fromState, s, x)
      );
    });
  };
  var elm$parser$Parser$problem = function(msg) {
    return elm$parser$Parser$Advanced$problem(elm$parser$Parser$Problem(msg));
  };
  var rtfeldman$elm_iso8601_date_strings$Iso8601$paddedInt = function(
    quantity
  ) {
    return A2(
      elm$parser$Parser$andThen,
      function(str) {
        if (_Utils_eq(elm$core$String$length(str), quantity)) {
          var _n0 = elm$core$String$toInt(str);
          if (_n0.$ === "Just") {
            var intVal = _n0.a;
            return elm$parser$Parser$succeed(intVal);
          } else {
            return elm$parser$Parser$problem(
              'Invalid integer: "' + (str + '"')
            );
          }
        } else {
          return elm$parser$Parser$problem(
            "Expected " +
              (elm$core$String$fromInt(quantity) +
                (" digits, but got " +
                  elm$core$String$fromInt(elm$core$String$length(str))))
          );
        }
      },
      elm$parser$Parser$getChompedString(
        elm$parser$Parser$chompWhile(elm$core$Char$isDigit)
      )
    );
  };
  var rtfeldman$elm_iso8601_date_strings$Iso8601$epochYear = 1970;
  var rtfeldman$elm_iso8601_date_strings$Iso8601$invalidDay = function(day) {
    return elm$parser$Parser$problem(
      "Invalid day: " + elm$core$String$fromInt(day)
    );
  };
  var elm$core$Basics$modBy = _Basics_modBy;
  var rtfeldman$elm_iso8601_date_strings$Iso8601$isLeapYear = function(year) {
    return (
      !A2(elm$core$Basics$modBy, 4, year) &&
      (A2(elm$core$Basics$modBy, 100, year) ||
        !A2(elm$core$Basics$modBy, 400, year))
    );
  };
  var rtfeldman$elm_iso8601_date_strings$Iso8601$leapYearsBefore = function(
    y1
  ) {
    var y = y1 - 1;
    return ((y / 4) | 0) - ((y / 100) | 0) + ((y / 400) | 0);
  };
  var rtfeldman$elm_iso8601_date_strings$Iso8601$msPerDay = 86400000;
  var rtfeldman$elm_iso8601_date_strings$Iso8601$msPerYear = 31536000000;
  var rtfeldman$elm_iso8601_date_strings$Iso8601$yearMonthDay = function(_n0) {
    var year = _n0.a;
    var month = _n0.b;
    var dayInMonth = _n0.c;
    if (dayInMonth < 0) {
      return rtfeldman$elm_iso8601_date_strings$Iso8601$invalidDay(dayInMonth);
    } else {
      var succeedWith = function(extraMs) {
        var yearMs =
          rtfeldman$elm_iso8601_date_strings$Iso8601$msPerYear *
          (year - rtfeldman$elm_iso8601_date_strings$Iso8601$epochYear);
        var days =
          month < 3 ||
          !rtfeldman$elm_iso8601_date_strings$Iso8601$isLeapYear(year)
            ? dayInMonth - 1
            : dayInMonth;
        var dayMs =
          rtfeldman$elm_iso8601_date_strings$Iso8601$msPerDay *
          (days +
            (rtfeldman$elm_iso8601_date_strings$Iso8601$leapYearsBefore(year) -
              rtfeldman$elm_iso8601_date_strings$Iso8601$leapYearsBefore(
                rtfeldman$elm_iso8601_date_strings$Iso8601$epochYear
              )));
        return elm$parser$Parser$succeed(extraMs + yearMs + dayMs);
      };
      switch (month) {
        case 1:
          return dayInMonth > 31
            ? rtfeldman$elm_iso8601_date_strings$Iso8601$invalidDay(dayInMonth)
            : succeedWith(0);
        case 2:
          return dayInMonth > 29 ||
            (dayInMonth === 29 &&
              !rtfeldman$elm_iso8601_date_strings$Iso8601$isLeapYear(year))
            ? rtfeldman$elm_iso8601_date_strings$Iso8601$invalidDay(dayInMonth)
            : succeedWith(2678400000);
        case 3:
          return dayInMonth > 31
            ? rtfeldman$elm_iso8601_date_strings$Iso8601$invalidDay(dayInMonth)
            : succeedWith(5097600000);
        case 4:
          return dayInMonth > 30
            ? rtfeldman$elm_iso8601_date_strings$Iso8601$invalidDay(dayInMonth)
            : succeedWith(7776000000);
        case 5:
          return dayInMonth > 31
            ? rtfeldman$elm_iso8601_date_strings$Iso8601$invalidDay(dayInMonth)
            : succeedWith(10368000000);
        case 6:
          return dayInMonth > 30
            ? rtfeldman$elm_iso8601_date_strings$Iso8601$invalidDay(dayInMonth)
            : succeedWith(13046400000);
        case 7:
          return dayInMonth > 31
            ? rtfeldman$elm_iso8601_date_strings$Iso8601$invalidDay(dayInMonth)
            : succeedWith(15638400000);
        case 8:
          return dayInMonth > 31
            ? rtfeldman$elm_iso8601_date_strings$Iso8601$invalidDay(dayInMonth)
            : succeedWith(18316800000);
        case 9:
          return dayInMonth > 30
            ? rtfeldman$elm_iso8601_date_strings$Iso8601$invalidDay(dayInMonth)
            : succeedWith(20995200000);
        case 10:
          return dayInMonth > 31
            ? rtfeldman$elm_iso8601_date_strings$Iso8601$invalidDay(dayInMonth)
            : succeedWith(23587200000);
        case 11:
          return dayInMonth > 30
            ? rtfeldman$elm_iso8601_date_strings$Iso8601$invalidDay(dayInMonth)
            : succeedWith(26265600000);
        case 12:
          return dayInMonth > 31
            ? rtfeldman$elm_iso8601_date_strings$Iso8601$invalidDay(dayInMonth)
            : succeedWith(28857600000);
        default:
          return elm$parser$Parser$problem(
            'Invalid month: "' + (elm$core$String$fromInt(month) + '"')
          );
      }
    }
  };
  var rtfeldman$elm_iso8601_date_strings$Iso8601$monthYearDayInMs = A2(
    elm$parser$Parser$andThen,
    rtfeldman$elm_iso8601_date_strings$Iso8601$yearMonthDay,
    A2(
      elm$parser$Parser$keeper,
      A2(
        elm$parser$Parser$keeper,
        A2(
          elm$parser$Parser$keeper,
          elm$parser$Parser$succeed(
            F3(function(year, month, day) {
              return _Utils_Tuple3(year, month, day);
            })
          ),
          A2(
            elm$parser$Parser$ignorer,
            rtfeldman$elm_iso8601_date_strings$Iso8601$paddedInt(4),
            elm$parser$Parser$symbol("-")
          )
        ),
        A2(
          elm$parser$Parser$ignorer,
          rtfeldman$elm_iso8601_date_strings$Iso8601$paddedInt(2),
          elm$parser$Parser$symbol("-")
        )
      ),
      rtfeldman$elm_iso8601_date_strings$Iso8601$paddedInt(2)
    )
  );
  var rtfeldman$elm_iso8601_date_strings$Iso8601$utcOffsetMinutesFromParts = F3(
    function(multiplier, hours, minutes) {
      return multiplier * (hours * 60 + minutes);
    }
  );
  var rtfeldman$elm_iso8601_date_strings$Iso8601$iso8601 = A2(
    elm$parser$Parser$andThen,
    function(datePart) {
      return elm$parser$Parser$oneOf(
        _List_fromArray([
          A2(
            elm$parser$Parser$keeper,
            A2(
              elm$parser$Parser$keeper,
              A2(
                elm$parser$Parser$keeper,
                A2(
                  elm$parser$Parser$keeper,
                  A2(
                    elm$parser$Parser$keeper,
                    A2(
                      elm$parser$Parser$ignorer,
                      elm$parser$Parser$succeed(
                        rtfeldman$elm_iso8601_date_strings$Iso8601$fromParts(
                          datePart
                        )
                      ),
                      elm$parser$Parser$symbol("T")
                    ),
                    A2(
                      elm$parser$Parser$ignorer,
                      rtfeldman$elm_iso8601_date_strings$Iso8601$paddedInt(2),
                      elm$parser$Parser$symbol(":")
                    )
                  ),
                  A2(
                    elm$parser$Parser$ignorer,
                    rtfeldman$elm_iso8601_date_strings$Iso8601$paddedInt(2),
                    elm$parser$Parser$symbol(":")
                  )
                ),
                rtfeldman$elm_iso8601_date_strings$Iso8601$paddedInt(2)
              ),
              elm$parser$Parser$oneOf(
                _List_fromArray([
                  A2(
                    elm$parser$Parser$keeper,
                    A2(
                      elm$parser$Parser$ignorer,
                      elm$parser$Parser$succeed(elm$core$Basics$identity),
                      elm$parser$Parser$symbol(".")
                    ),
                    rtfeldman$elm_iso8601_date_strings$Iso8601$paddedInt(3)
                  ),
                  elm$parser$Parser$succeed(0)
                ])
              )
            ),
            elm$parser$Parser$oneOf(
              _List_fromArray([
                A2(
                  elm$parser$Parser$map,
                  function(_n0) {
                    return 0;
                  },
                  elm$parser$Parser$symbol("Z")
                ),
                A2(
                  elm$parser$Parser$keeper,
                  A2(
                    elm$parser$Parser$keeper,
                    A2(
                      elm$parser$Parser$keeper,
                      elm$parser$Parser$succeed(
                        rtfeldman$elm_iso8601_date_strings$Iso8601$utcOffsetMinutesFromParts
                      ),
                      elm$parser$Parser$oneOf(
                        _List_fromArray([
                          A2(
                            elm$parser$Parser$map,
                            function(_n1) {
                              return 1;
                            },
                            elm$parser$Parser$symbol("+")
                          ),
                          A2(
                            elm$parser$Parser$map,
                            function(_n2) {
                              return -1;
                            },
                            elm$parser$Parser$symbol("-")
                          )
                        ])
                      )
                    ),
                    A2(
                      elm$parser$Parser$ignorer,
                      rtfeldman$elm_iso8601_date_strings$Iso8601$paddedInt(2),
                      elm$parser$Parser$symbol(":")
                    )
                  ),
                  rtfeldman$elm_iso8601_date_strings$Iso8601$paddedInt(2)
                )
              ])
            )
          ),
          A2(
            elm$parser$Parser$ignorer,
            elm$parser$Parser$succeed(
              A6(
                rtfeldman$elm_iso8601_date_strings$Iso8601$fromParts,
                datePart,
                0,
                0,
                0,
                0,
                0
              )
            ),
            elm$parser$Parser$end
          )
        ])
      );
    },
    rtfeldman$elm_iso8601_date_strings$Iso8601$monthYearDayInMs
  );
  var rtfeldman$elm_iso8601_date_strings$Iso8601$toTime = function(str) {
    return A2(
      elm$parser$Parser$run,
      rtfeldman$elm_iso8601_date_strings$Iso8601$iso8601,
      str
    );
  };
  var rtfeldman$elm_iso8601_date_strings$Iso8601$decoder = A2(
    elm$json$Json$Decode$andThen,
    function(str) {
      var _n0 = rtfeldman$elm_iso8601_date_strings$Iso8601$toTime(str);
      if (_n0.$ === "Err") {
        var deadEnds = _n0.a;
        return elm$json$Json$Decode$fail(
          elm$parser$Parser$deadEndsToString(deadEnds)
        );
      } else {
        var time = _n0.a;
        return elm$json$Json$Decode$succeed(time);
      }
    },
    elm$json$Json$Decode$string
  );
  var author$project$Article$metadataDecoder = A3(
    NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
    "favoritesCount",
    elm$json$Json$Decode$int,
    A3(
      NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
      "favorited",
      elm$json$Json$Decode$bool,
      A3(
        NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
        "createdAt",
        rtfeldman$elm_iso8601_date_strings$Iso8601$decoder,
        A3(
          NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
          "tagList",
          elm$json$Json$Decode$list(elm$json$Json$Decode$string),
          A3(
            NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
            "title",
            elm$json$Json$Decode$string,
            A3(
              NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
              "description",
              A2(
                elm$json$Json$Decode$map,
                elm$core$Maybe$withDefault(""),
                elm$json$Json$Decode$nullable(elm$json$Json$Decode$string)
              ),
              elm$json$Json$Decode$succeed(author$project$Article$Metadata)
            )
          )
        )
      )
    )
  );
  var author$project$Article$Slug$Slug = function(a) {
    return { $: "Slug", a: a };
  };
  var author$project$Article$Slug$decoder = A2(
    elm$json$Json$Decode$map,
    author$project$Article$Slug$Slug,
    elm$json$Json$Decode$string
  );
  var author$project$Api$username = function(_n0) {
    var val = _n0.a;
    return val;
  };
  var author$project$Author$IsNotFollowing = function(a) {
    return { $: "IsNotFollowing", a: a };
  };
  var author$project$Author$IsViewer = F2(function(a, b) {
    return { $: "IsViewer", a: a, b: b };
  });
  var author$project$Author$UnfollowedAuthor = F2(function(a, b) {
    return { $: "UnfollowedAuthor", a: a, b: b };
  });
  var NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optionalDecoder = F3(
    function(pathDecoder, valDecoder, fallback) {
      var nullOr = function(decoder) {
        return elm$json$Json$Decode$oneOf(
          _List_fromArray([decoder, elm$json$Json$Decode$null(fallback)])
        );
      };
      var handleResult = function(input) {
        var _n0 = A2(elm$json$Json$Decode$decodeValue, pathDecoder, input);
        if (_n0.$ === "Ok") {
          var rawValue = _n0.a;
          var _n1 = A2(
            elm$json$Json$Decode$decodeValue,
            nullOr(valDecoder),
            rawValue
          );
          if (_n1.$ === "Ok") {
            var finalResult = _n1.a;
            return elm$json$Json$Decode$succeed(finalResult);
          } else {
            var finalErr = _n1.a;
            return elm$json$Json$Decode$fail(
              elm$json$Json$Decode$errorToString(finalErr)
            );
          }
        } else {
          return elm$json$Json$Decode$succeed(fallback);
        }
      };
      return A2(
        elm$json$Json$Decode$andThen,
        handleResult,
        elm$json$Json$Decode$value
      );
    }
  );
  var NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional = F4(
    function(key, valDecoder, fallback, decoder) {
      return A2(
        NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$custom,
        A3(
          NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optionalDecoder,
          A2(elm$json$Json$Decode$field, key, elm$json$Json$Decode$value),
          valDecoder,
          fallback
        ),
        decoder
      );
    }
  );
  var author$project$Author$FollowedAuthor = F2(function(a, b) {
    return { $: "FollowedAuthor", a: a, b: b };
  });
  var author$project$Author$IsFollowing = function(a) {
    return { $: "IsFollowing", a: a };
  };
  var author$project$Author$authorFromFollowing = F3(function(
    prof,
    uname,
    isFollowing
  ) {
    return isFollowing
      ? author$project$Author$IsFollowing(
          A2(author$project$Author$FollowedAuthor, uname, prof)
        )
      : author$project$Author$IsNotFollowing(
          A2(author$project$Author$UnfollowedAuthor, uname, prof)
        );
  });
  var author$project$Author$nonViewerDecoder = F2(function(prof, uname) {
    return A4(
      NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
      "following",
      elm$json$Json$Decode$bool,
      false,
      elm$json$Json$Decode$succeed(
        A2(author$project$Author$authorFromFollowing, prof, uname)
      )
    );
  });
  var author$project$Author$decodeFromPair = F2(function(maybeCred, _n0) {
    var prof = _n0.a;
    var uname = _n0.b;
    if (maybeCred.$ === "Nothing") {
      return elm$json$Json$Decode$succeed(
        author$project$Author$IsNotFollowing(
          A2(author$project$Author$UnfollowedAuthor, uname, prof)
        )
      );
    } else {
      var cred = maybeCred.a;
      return _Utils_eq(uname, author$project$Api$username(cred))
        ? elm$json$Json$Decode$succeed(
            A2(author$project$Author$IsViewer, cred, prof)
          )
        : A2(author$project$Author$nonViewerDecoder, prof, uname);
    }
  });
  var author$project$Avatar$Avatar = function(a) {
    return { $: "Avatar", a: a };
  };
  var author$project$Avatar$decoder = A2(
    elm$json$Json$Decode$map,
    author$project$Avatar$Avatar,
    elm$json$Json$Decode$nullable(elm$json$Json$Decode$string)
  );
  var author$project$Profile$Internals = F2(function(bio, avatar) {
    return { avatar: avatar, bio: bio };
  });
  var author$project$Profile$Profile = function(a) {
    return { $: "Profile", a: a };
  };
  var author$project$Profile$decoder = A2(
    elm$json$Json$Decode$map,
    author$project$Profile$Profile,
    A3(
      NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
      "image",
      author$project$Avatar$decoder,
      A3(
        NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
        "bio",
        elm$json$Json$Decode$nullable(elm$json$Json$Decode$string),
        elm$json$Json$Decode$succeed(author$project$Profile$Internals)
      )
    )
  );
  var elm$core$Tuple$pair = F2(function(a, b) {
    return _Utils_Tuple2(a, b);
  });
  var author$project$Author$decoder = function(maybeCred) {
    return A2(
      elm$json$Json$Decode$andThen,
      author$project$Author$decodeFromPair(maybeCred),
      A3(
        NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
        "username",
        author$project$Username$decoder,
        A2(
          NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$custom,
          author$project$Profile$decoder,
          elm$json$Json$Decode$succeed(elm$core$Tuple$pair)
        )
      )
    );
  };
  var author$project$Article$internalsDecoder = function(maybeCred) {
    return A2(
      NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$custom,
      author$project$Article$metadataDecoder,
      A3(
        NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
        "author",
        author$project$Author$decoder(maybeCred),
        A3(
          NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
          "slug",
          author$project$Article$Slug$decoder,
          elm$json$Json$Decode$succeed(author$project$Article$Internals)
        )
      )
    );
  };
  var author$project$Article$Body$Body = function(a) {
    return { $: "Body", a: a };
  };
  var author$project$Article$Body$decoder = A2(
    elm$json$Json$Decode$map,
    author$project$Article$Body$Body,
    elm$json$Json$Decode$string
  );
  var author$project$Article$fullDecoder = function(maybeCred) {
    return A3(
      NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
      "body",
      A2(
        elm$json$Json$Decode$map,
        author$project$Article$Full,
        author$project$Article$Body$decoder
      ),
      A2(
        NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$custom,
        author$project$Article$internalsDecoder(maybeCred),
        elm$json$Json$Decode$succeed(author$project$Article$Article)
      )
    );
  };
  var author$project$Article$fetch = F2(function(maybeCred, articleSlug) {
    return A3(
      author$project$Api$get,
      author$project$Api$Endpoint$article(articleSlug),
      maybeCred,
      A2(
        elm$json$Json$Decode$field,
        "article",
        author$project$Article$fullDecoder(maybeCred)
      )
    );
  });
  var author$project$Api$Endpoint$comments = function(slug) {
    return A2(
      author$project$Api$Endpoint$url,
      _List_fromArray([
        "articles",
        author$project$Article$Slug$toString(slug),
        "comments"
      ]),
      _List_Nil
    );
  };
  var author$project$Article$Comment$Comment = function(a) {
    return { $: "Comment", a: a };
  };
  var author$project$Article$Comment$Internals = F4(function(
    id,
    body,
    createdAt,
    author
  ) {
    return { author: author, body: body, createdAt: createdAt, id: id };
  });
  var author$project$CommentId$CommentId = function(a) {
    return { $: "CommentId", a: a };
  };
  var author$project$CommentId$decoder = A2(
    elm$json$Json$Decode$map,
    author$project$CommentId$CommentId,
    elm$json$Json$Decode$int
  );
  var author$project$Article$Comment$decoder = function(maybeCred) {
    return A2(
      elm$json$Json$Decode$map,
      author$project$Article$Comment$Comment,
      A3(
        NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
        "author",
        author$project$Author$decoder(maybeCred),
        A3(
          NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
          "createdAt",
          rtfeldman$elm_iso8601_date_strings$Iso8601$decoder,
          A3(
            NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
            "body",
            elm$json$Json$Decode$string,
            A3(
              NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
              "id",
              author$project$CommentId$decoder,
              elm$json$Json$Decode$succeed(
                author$project$Article$Comment$Internals
              )
            )
          )
        )
      )
    );
  };
  var author$project$Article$Comment$list = F2(function(
    maybeCred,
    articleSlug
  ) {
    return A3(
      author$project$Api$get,
      author$project$Api$Endpoint$comments(articleSlug),
      maybeCred,
      A2(
        elm$json$Json$Decode$field,
        "comments",
        elm$json$Json$Decode$list(
          author$project$Article$Comment$decoder(maybeCred)
        )
      )
    );
  });
  var elm$core$Process$sleep = _Process_sleep;
  var author$project$Loading$slowThreshold = elm$core$Process$sleep(500);
  var author$project$Page$Article$CompletedLoadArticle = function(a) {
    return { $: "CompletedLoadArticle", a: a };
  };
  var author$project$Page$Article$CompletedLoadComments = function(a) {
    return { $: "CompletedLoadComments", a: a };
  };
  var author$project$Page$Article$GotTimeZone = function(a) {
    return { $: "GotTimeZone", a: a };
  };
  var author$project$Page$Article$Loading = { $: "Loading" };
  var author$project$Page$Article$PassedSlowLoadThreshold = {
    $: "PassedSlowLoadThreshold"
  };
  var author$project$Viewer$cred = function(_n0) {
    var val = _n0.b;
    return val;
  };
  var author$project$Session$cred = function(session) {
    if (session.$ === "LoggedIn") {
      var val = session.b;
      return elm$core$Maybe$Just(author$project$Viewer$cred(val));
    } else {
      return elm$core$Maybe$Nothing;
    }
  };
  var elm$core$Task$onError = _Scheduler_onError;
  var elm$core$Task$attempt = F2(function(resultToMessage, task) {
    return elm$core$Task$command(
      elm$core$Task$Perform(
        A2(
          elm$core$Task$onError,
          A2(
            elm$core$Basics$composeL,
            A2(
              elm$core$Basics$composeL,
              elm$core$Task$succeed,
              resultToMessage
            ),
            elm$core$Result$Err
          ),
          A2(
            elm$core$Task$andThen,
            A2(
              elm$core$Basics$composeL,
              A2(
                elm$core$Basics$composeL,
                elm$core$Task$succeed,
                resultToMessage
              ),
              elm$core$Result$Ok
            ),
            task
          )
        )
      )
    );
  });
  var elm$http$Http$toTask = function(_n0) {
    var request_ = _n0.a;
    return A2(_Http_toTask, request_, elm$core$Maybe$Nothing);
  };
  var elm$http$Http$send = F2(function(resultToMessage, request_) {
    return A2(
      elm$core$Task$attempt,
      resultToMessage,
      elm$http$Http$toTask(request_)
    );
  });
  var elm$time$Time$Name = function(a) {
    return { $: "Name", a: a };
  };
  var elm$time$Time$Offset = function(a) {
    return { $: "Offset", a: a };
  };
  var elm$time$Time$Zone = F2(function(a, b) {
    return { $: "Zone", a: a, b: b };
  });
  var elm$time$Time$customZone = elm$time$Time$Zone;
  var elm$time$Time$here = _Time_here(_Utils_Tuple0);
  var elm$time$Time$utc = A2(elm$time$Time$Zone, 0, _List_Nil);
  var author$project$Page$Article$init = F2(function(session, slug) {
    var maybeCred = author$project$Session$cred(session);
    return _Utils_Tuple2(
      {
        article: author$project$Page$Article$Loading,
        comments: author$project$Page$Article$Loading,
        errors: _List_Nil,
        session: session,
        timeZone: elm$time$Time$utc
      },
      elm$core$Platform$Cmd$batch(
        _List_fromArray([
          A2(
            elm$http$Http$send,
            author$project$Page$Article$CompletedLoadArticle,
            A2(author$project$Article$fetch, maybeCred, slug)
          ),
          A2(
            elm$http$Http$send,
            author$project$Page$Article$CompletedLoadComments,
            A2(author$project$Article$Comment$list, maybeCred, slug)
          ),
          A2(
            elm$core$Task$perform,
            author$project$Page$Article$GotTimeZone,
            elm$time$Time$here
          ),
          A2(
            elm$core$Task$perform,
            function(_n0) {
              return author$project$Page$Article$PassedSlowLoadThreshold;
            },
            author$project$Loading$slowThreshold
          )
        ])
      )
    );
  });
  var author$project$Page$Article$Editor$CompletedArticleLoad = function(a) {
    return { $: "CompletedArticleLoad", a: a };
  };
  var author$project$Page$Article$Editor$Loading = function(a) {
    return { $: "Loading", a: a };
  };
  var author$project$Page$Article$Editor$PassedSlowLoadThreshold = {
    $: "PassedSlowLoadThreshold"
  };
  var elm$core$Task$fail = _Scheduler_fail;
  var elm$core$Task$mapError = F2(function(convert, task) {
    return A2(
      elm$core$Task$onError,
      A2(elm$core$Basics$composeL, elm$core$Task$fail, convert),
      task
    );
  });
  var author$project$Page$Article$Editor$initEdit = F2(function(session, slug) {
    return _Utils_Tuple2(
      {
        session: session,
        status: author$project$Page$Article$Editor$Loading(slug)
      },
      elm$core$Platform$Cmd$batch(
        _List_fromArray([
          A2(
            elm$core$Task$attempt,
            author$project$Page$Article$Editor$CompletedArticleLoad,
            A2(
              elm$core$Task$mapError,
              function(httpError) {
                return _Utils_Tuple2(slug, httpError);
              },
              elm$http$Http$toTask(
                A2(
                  author$project$Article$fetch,
                  author$project$Session$cred(session),
                  slug
                )
              )
            )
          ),
          A2(
            elm$core$Task$perform,
            function(_n0) {
              return author$project$Page$Article$Editor$PassedSlowLoadThreshold;
            },
            author$project$Loading$slowThreshold
          )
        ])
      )
    );
  });
  var author$project$Page$Article$Editor$EditingNew = F2(function(a, b) {
    return { $: "EditingNew", a: a, b: b };
  });
  var author$project$Page$Article$Editor$initNew = function(session) {
    return _Utils_Tuple2(
      {
        session: session,
        status: A2(author$project$Page$Article$Editor$EditingNew, _List_Nil, {
          body: "",
          description: "",
          tags: "",
          title: ""
        })
      },
      elm$core$Platform$Cmd$none
    );
  };
  var author$project$Api$Endpoint$tags = A2(
    author$project$Api$Endpoint$url,
    _List_fromArray(["tags"]),
    _List_Nil
  );
  var author$project$Article$Tag$Tag = function(a) {
    return { $: "Tag", a: a };
  };
  var author$project$Article$Tag$decoder = A2(
    elm$json$Json$Decode$map,
    author$project$Article$Tag$Tag,
    elm$json$Json$Decode$string
  );
  var author$project$Article$Tag$list = A3(
    author$project$Api$get,
    author$project$Api$Endpoint$tags,
    elm$core$Maybe$Nothing,
    A2(
      elm$json$Json$Decode$field,
      "tags",
      elm$json$Json$Decode$list(author$project$Article$Tag$decoder)
    )
  );
  var author$project$Page$Home$CompletedFeedLoad = function(a) {
    return { $: "CompletedFeedLoad", a: a };
  };
  var author$project$Page$Home$CompletedTagsLoad = function(a) {
    return { $: "CompletedTagsLoad", a: a };
  };
  var author$project$Page$Home$GlobalFeed = { $: "GlobalFeed" };
  var author$project$Page$Home$GotTimeZone = function(a) {
    return { $: "GotTimeZone", a: a };
  };
  var author$project$Page$Home$Loading = { $: "Loading" };
  var author$project$Page$Home$PassedSlowLoadThreshold = {
    $: "PassedSlowLoadThreshold"
  };
  var author$project$Page$Home$YourFeed = function(a) {
    return { $: "YourFeed", a: a };
  };
  var author$project$Api$Endpoint$articles = function(params) {
    return A2(
      author$project$Api$Endpoint$url,
      _List_fromArray(["articles"]),
      params
    );
  };
  var author$project$Api$Endpoint$feed = function(params) {
    return A2(
      author$project$Api$Endpoint$url,
      _List_fromArray(["articles", "feed"]),
      params
    );
  };
  var elm$core$Basics$composeR = F3(function(f, g, x) {
    return g(f(x));
  });
  var NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$hardcoded = A2(
    elm$core$Basics$composeR,
    elm$json$Json$Decode$succeed,
    NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$custom
  );
  var author$project$Article$Preview = { $: "Preview" };
  var author$project$Article$previewDecoder = function(maybeCred) {
    return A2(
      NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$hardcoded,
      author$project$Article$Preview,
      A2(
        NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$custom,
        author$project$Article$internalsDecoder(maybeCred),
        elm$json$Json$Decode$succeed(author$project$Article$Article)
      )
    );
  };
  var author$project$Article$Feed$pageCountDecoder = function(resultsPerPage) {
    return A2(
      elm$json$Json$Decode$map,
      function(total) {
        return elm$core$Basics$ceiling(total / resultsPerPage);
      },
      elm$json$Json$Decode$int
    );
  };
  var author$project$PaginatedList$PaginatedList = function(a) {
    return { $: "PaginatedList", a: a };
  };
  var author$project$PaginatedList$fromList = F2(function(totalCount, list) {
    return author$project$PaginatedList$PaginatedList({
      total: totalCount,
      values: list
    });
  });
  var author$project$Article$Feed$decoder = F2(function(
    maybeCred,
    resultsPerPage
  ) {
    return A3(
      NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
      "articles",
      elm$json$Json$Decode$list(
        author$project$Article$previewDecoder(maybeCred)
      ),
      A3(
        NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
        "articlesCount",
        author$project$Article$Feed$pageCountDecoder(resultsPerPage),
        elm$json$Json$Decode$succeed(author$project$PaginatedList$fromList)
      )
    );
  });
  var author$project$Article$Feed$Model = function(a) {
    return { $: "Model", a: a };
  };
  var author$project$Article$Feed$init = F2(function(session, articles) {
    return author$project$Article$Feed$Model({
      articles: articles,
      errors: _List_Nil,
      isLoading: false,
      session: session
    });
  });
  var author$project$Article$Tag$toString = function(_n0) {
    var slug = _n0.a;
    return slug;
  };
  var author$project$Page$Home$articlesPerPage = 10;
  var elm$url$Url$percentEncode = _Url_percentEncode;
  var elm$url$Url$Builder$QueryParameter = F2(function(a, b) {
    return { $: "QueryParameter", a: a, b: b };
  });
  var elm$url$Url$Builder$string = F2(function(key, value) {
    return A2(
      elm$url$Url$Builder$QueryParameter,
      elm$url$Url$percentEncode(key),
      elm$url$Url$percentEncode(value)
    );
  });
  var author$project$PaginatedList$params = function(_n0) {
    var page = _n0.page;
    var resultsPerPage = _n0.resultsPerPage;
    var offset = (page - 1) * resultsPerPage;
    return _List_fromArray([
      A2(
        elm$url$Url$Builder$string,
        "limit",
        elm$core$String$fromInt(resultsPerPage)
      ),
      A2(elm$url$Url$Builder$string, "offset", elm$core$String$fromInt(offset))
    ]);
  };
  var author$project$Page$Home$fetchFeed = F3(function(
    session,
    feedTabs,
    page
  ) {
    var params = author$project$PaginatedList$params({
      page: page,
      resultsPerPage: author$project$Page$Home$articlesPerPage
    });
    var maybeCred = author$project$Session$cred(session);
    var decoder = A2(
      author$project$Article$Feed$decoder,
      maybeCred,
      author$project$Page$Home$articlesPerPage
    );
    var request = (function() {
      switch (feedTabs.$) {
        case "YourFeed":
          var cred = feedTabs.a;
          return A3(
            author$project$Api$get,
            author$project$Api$Endpoint$feed(params),
            maybeCred,
            decoder
          );
        case "GlobalFeed":
          return A3(
            author$project$Api$get,
            author$project$Api$Endpoint$articles(params),
            maybeCred,
            decoder
          );
        default:
          var tag = feedTabs.a;
          var firstParam = A2(
            elm$url$Url$Builder$string,
            "tag",
            author$project$Article$Tag$toString(tag)
          );
          return A3(
            author$project$Api$get,
            author$project$Api$Endpoint$articles(
              A2(elm$core$List$cons, firstParam, params)
            ),
            maybeCred,
            decoder
          );
      }
    })();
    return A2(
      elm$core$Task$map,
      author$project$Article$Feed$init(session),
      elm$http$Http$toTask(request)
    );
  });
  var author$project$Page$Home$init = function(session) {
    var loadTags = elm$http$Http$toTask(author$project$Article$Tag$list);
    var feedTab = (function() {
      var _n1 = author$project$Session$cred(session);
      if (_n1.$ === "Just") {
        var cred = _n1.a;
        return author$project$Page$Home$YourFeed(cred);
      } else {
        return author$project$Page$Home$GlobalFeed;
      }
    })();
    return _Utils_Tuple2(
      {
        feed: author$project$Page$Home$Loading,
        feedPage: 1,
        feedTab: feedTab,
        session: session,
        tags: author$project$Page$Home$Loading,
        timeZone: elm$time$Time$utc
      },
      elm$core$Platform$Cmd$batch(
        _List_fromArray([
          A2(
            elm$core$Task$attempt,
            author$project$Page$Home$CompletedFeedLoad,
            A3(author$project$Page$Home$fetchFeed, session, feedTab, 1)
          ),
          A2(
            elm$http$Http$send,
            author$project$Page$Home$CompletedTagsLoad,
            author$project$Article$Tag$list
          ),
          A2(
            elm$core$Task$perform,
            author$project$Page$Home$GotTimeZone,
            elm$time$Time$here
          ),
          A2(
            elm$core$Task$perform,
            function(_n0) {
              return author$project$Page$Home$PassedSlowLoadThreshold;
            },
            author$project$Loading$slowThreshold
          )
        ])
      )
    );
  };
  var author$project$Page$Login$init = function(session) {
    return _Utils_Tuple2(
      {
        form: { email: "", password: "" },
        problems: _List_Nil,
        session: session
      },
      elm$core$Platform$Cmd$none
    );
  };
  var author$project$Username$toString = function(_n0) {
    var username = _n0.a;
    return username;
  };
  var author$project$Api$Endpoint$profiles = function(uname) {
    return A2(
      author$project$Api$Endpoint$url,
      _List_fromArray(["profiles", author$project$Username$toString(uname)]),
      _List_Nil
    );
  };
  var author$project$Author$fetch = F2(function(uname, maybeCred) {
    return A3(
      author$project$Api$get,
      author$project$Api$Endpoint$profiles(uname),
      maybeCred,
      A2(
        elm$json$Json$Decode$field,
        "profile",
        author$project$Author$decoder(maybeCred)
      )
    );
  });
  var author$project$Page$Profile$CompletedAuthorLoad = function(a) {
    return { $: "CompletedAuthorLoad", a: a };
  };
  var author$project$Page$Profile$GotTimeZone = function(a) {
    return { $: "GotTimeZone", a: a };
  };
  var author$project$Page$Profile$Loading = function(a) {
    return { $: "Loading", a: a };
  };
  var author$project$Page$Profile$PassedSlowLoadThreshold = {
    $: "PassedSlowLoadThreshold"
  };
  var author$project$Page$Profile$MyArticles = { $: "MyArticles" };
  var author$project$Page$Profile$defaultFeedTab = author$project$Page$Profile$MyArticles;
  var author$project$Page$Profile$CompletedFeedLoad = function(a) {
    return { $: "CompletedFeedLoad", a: a };
  };
  var author$project$Page$Profile$articlesPerPage = 5;
  var author$project$Page$Profile$fetchFeed = F4(function(
    session,
    feedTabs,
    username,
    page
  ) {
    var maybeCred = author$project$Session$cred(session);
    var firstParam = (function() {
      if (feedTabs.$ === "MyArticles") {
        return A2(
          elm$url$Url$Builder$string,
          "author",
          author$project$Username$toString(username)
        );
      } else {
        return A2(
          elm$url$Url$Builder$string,
          "favorited",
          author$project$Username$toString(username)
        );
      }
    })();
    var params = A2(
      elm$core$List$cons,
      firstParam,
      author$project$PaginatedList$params({
        page: page,
        resultsPerPage: author$project$Page$Profile$articlesPerPage
      })
    );
    var expect = A2(
      author$project$Article$Feed$decoder,
      maybeCred,
      author$project$Page$Profile$articlesPerPage
    );
    return A2(
      elm$core$Task$attempt,
      author$project$Page$Profile$CompletedFeedLoad,
      A2(
        elm$core$Task$mapError,
        elm$core$Tuple$pair(username),
        A2(
          elm$core$Task$map,
          author$project$Article$Feed$init(session),
          elm$http$Http$toTask(
            A3(
              author$project$Api$get,
              author$project$Api$Endpoint$articles(params),
              maybeCred,
              expect
            )
          )
        )
      )
    );
  });
  var author$project$Page$Profile$init = F2(function(session, username) {
    var maybeCred = author$project$Session$cred(session);
    return _Utils_Tuple2(
      {
        author: author$project$Page$Profile$Loading(username),
        errors: _List_Nil,
        feed: author$project$Page$Profile$Loading(username),
        feedPage: 1,
        feedTab: author$project$Page$Profile$defaultFeedTab,
        session: session,
        timeZone: elm$time$Time$utc
      },
      elm$core$Platform$Cmd$batch(
        _List_fromArray([
          A2(
            elm$core$Task$attempt,
            author$project$Page$Profile$CompletedAuthorLoad,
            A2(
              elm$core$Task$mapError,
              elm$core$Tuple$pair(username),
              elm$http$Http$toTask(
                A2(author$project$Author$fetch, username, maybeCred)
              )
            )
          ),
          A4(
            author$project$Page$Profile$fetchFeed,
            session,
            author$project$Page$Profile$defaultFeedTab,
            username,
            1
          ),
          A2(
            elm$core$Task$perform,
            author$project$Page$Profile$GotTimeZone,
            elm$time$Time$here
          ),
          A2(
            elm$core$Task$perform,
            function(_n0) {
              return author$project$Page$Profile$PassedSlowLoadThreshold;
            },
            author$project$Loading$slowThreshold
          )
        ])
      )
    );
  });
  var author$project$Page$Register$init = function(session) {
    return _Utils_Tuple2(
      {
        form: { email: "", password: "", username: "" },
        problems: _List_Nil,
        session: session
      },
      elm$core$Platform$Cmd$none
    );
  };
  var author$project$Api$Endpoint$user = A2(
    author$project$Api$Endpoint$url,
    _List_fromArray(["user"]),
    _List_Nil
  );
  var author$project$Page$Settings$CompletedFormLoad = function(a) {
    return { $: "CompletedFormLoad", a: a };
  };
  var author$project$Page$Settings$Loading = { $: "Loading" };
  var author$project$Page$Settings$PassedSlowLoadThreshold = {
    $: "PassedSlowLoadThreshold"
  };
  var author$project$Page$Settings$Form = F5(function(
    avatar,
    bio,
    email,
    username,
    password
  ) {
    return {
      avatar: avatar,
      bio: bio,
      email: email,
      password: password,
      username: username
    };
  });
  var author$project$Page$Settings$formDecoder = A2(
    NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$hardcoded,
    "",
    A3(
      NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
      "username",
      elm$json$Json$Decode$string,
      A3(
        NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
        "email",
        elm$json$Json$Decode$string,
        A3(
          NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
          "bio",
          A2(
            elm$json$Json$Decode$map,
            elm$core$Maybe$withDefault(""),
            elm$json$Json$Decode$nullable(elm$json$Json$Decode$string)
          ),
          A3(
            NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
            "image",
            A2(
              elm$json$Json$Decode$map,
              elm$core$Maybe$withDefault(""),
              elm$json$Json$Decode$nullable(elm$json$Json$Decode$string)
            ),
            elm$json$Json$Decode$succeed(author$project$Page$Settings$Form)
          )
        )
      )
    )
  );
  var author$project$Page$Settings$init = function(session) {
    return _Utils_Tuple2(
      {
        problems: _List_Nil,
        session: session,
        status: author$project$Page$Settings$Loading
      },
      elm$core$Platform$Cmd$batch(
        _List_fromArray([
          A2(
            elm$http$Http$send,
            author$project$Page$Settings$CompletedFormLoad,
            A3(
              author$project$Api$get,
              author$project$Api$Endpoint$user,
              author$project$Session$cred(session),
              A2(
                elm$json$Json$Decode$field,
                "user",
                author$project$Page$Settings$formDecoder
              )
            )
          ),
          A2(
            elm$core$Task$perform,
            function(_n0) {
              return author$project$Page$Settings$PassedSlowLoadThreshold;
            },
            author$project$Loading$slowThreshold
          )
        ])
      )
    );
  };
  var author$project$Route$Home = { $: "Home" };
  var author$project$Route$routeToString = function(page) {
    var pieces = (function() {
      switch (page.$) {
        case "Home":
          return _List_Nil;
        case "Root":
          return _List_Nil;
        case "Login":
          return _List_fromArray(["login"]);
        case "Logout":
          return _List_fromArray(["logout"]);
        case "Register":
          return _List_fromArray(["register"]);
        case "Settings":
          return _List_fromArray(["settings"]);
        case "Article":
          var slug = page.a;
          return _List_fromArray([
            "article",
            author$project$Article$Slug$toString(slug)
          ]);
        case "Profile":
          var username = page.a;
          return _List_fromArray([
            "profile",
            author$project$Username$toString(username)
          ]);
        case "NewArticle":
          return _List_fromArray(["editor"]);
        default:
          var slug = page.a;
          return _List_fromArray([
            "editor",
            author$project$Article$Slug$toString(slug)
          ]);
      }
    })();
    return "#/" + A2(elm$core$String$join, "/", pieces);
  };
  var elm$browser$Browser$Navigation$replaceUrl = _Browser_replaceUrl;
  var author$project$Route$replaceUrl = F2(function(key, route) {
    return A2(
      elm$browser$Browser$Navigation$replaceUrl,
      key,
      author$project$Route$routeToString(route)
    );
  });
  var author$project$Session$navKey = function(session) {
    if (session.$ === "LoggedIn") {
      var key = session.a;
      return key;
    } else {
      var key = session.a;
      return key;
    }
  };
  var author$project$Main$changeRouteTo = F2(function(maybeRoute, model) {
    var session = author$project$Main$toSession(model);
    if (maybeRoute.$ === "Nothing") {
      return _Utils_Tuple2(
        author$project$Main$NotFound(session),
        elm$core$Platform$Cmd$none
      );
    } else {
      switch (maybeRoute.a.$) {
        case "Root":
          var _n1 = maybeRoute.a;
          return _Utils_Tuple2(
            model,
            A2(
              author$project$Route$replaceUrl,
              author$project$Session$navKey(session),
              author$project$Route$Home
            )
          );
        case "Logout":
          var _n2 = maybeRoute.a;
          return _Utils_Tuple2(model, author$project$Api$logout);
        case "NewArticle":
          var _n3 = maybeRoute.a;
          return A4(
            author$project$Main$updateWith,
            author$project$Main$Editor(elm$core$Maybe$Nothing),
            author$project$Main$GotEditorMsg,
            model,
            author$project$Page$Article$Editor$initNew(session)
          );
        case "EditArticle":
          var slug = maybeRoute.a.a;
          return A4(
            author$project$Main$updateWith,
            author$project$Main$Editor(elm$core$Maybe$Just(slug)),
            author$project$Main$GotEditorMsg,
            model,
            A2(author$project$Page$Article$Editor$initEdit, session, slug)
          );
        case "Settings":
          var _n4 = maybeRoute.a;
          return A4(
            author$project$Main$updateWith,
            author$project$Main$Settings,
            author$project$Main$GotSettingsMsg,
            model,
            author$project$Page$Settings$init(session)
          );
        case "Home":
          var _n5 = maybeRoute.a;
          return A4(
            author$project$Main$updateWith,
            author$project$Main$Home,
            author$project$Main$GotHomeMsg,
            model,
            author$project$Page$Home$init(session)
          );
        case "Login":
          var _n6 = maybeRoute.a;
          return A4(
            author$project$Main$updateWith,
            author$project$Main$Login,
            author$project$Main$GotLoginMsg,
            model,
            author$project$Page$Login$init(session)
          );
        case "Register":
          var _n7 = maybeRoute.a;
          return A4(
            author$project$Main$updateWith,
            author$project$Main$Register,
            author$project$Main$GotRegisterMsg,
            model,
            author$project$Page$Register$init(session)
          );
        case "Profile":
          var username = maybeRoute.a.a;
          return A4(
            author$project$Main$updateWith,
            author$project$Main$Profile(username),
            author$project$Main$GotProfileMsg,
            model,
            A2(author$project$Page$Profile$init, session, username)
          );
        default:
          var slug = maybeRoute.a.a;
          return A4(
            author$project$Main$updateWith,
            author$project$Main$Article,
            author$project$Main$GotArticleMsg,
            model,
            A2(author$project$Page$Article$init, session, slug)
          );
      }
    }
  });
  var elm$url$Url$Parser$Parser = function(a) {
    return { $: "Parser", a: a };
  };
  var elm$url$Url$Parser$State = F5(function(
    visited,
    unvisited,
    params,
    frag,
    value
  ) {
    return {
      frag: frag,
      params: params,
      unvisited: unvisited,
      value: value,
      visited: visited
    };
  });
  var elm$url$Url$Parser$custom = F2(function(tipe, stringToSomething) {
    return elm$url$Url$Parser$Parser(function(_n0) {
      var visited = _n0.visited;
      var unvisited = _n0.unvisited;
      var params = _n0.params;
      var frag = _n0.frag;
      var value = _n0.value;
      if (!unvisited.b) {
        return _List_Nil;
      } else {
        var next = unvisited.a;
        var rest = unvisited.b;
        var _n2 = stringToSomething(next);
        if (_n2.$ === "Just") {
          var nextValue = _n2.a;
          return _List_fromArray([
            A5(
              elm$url$Url$Parser$State,
              A2(elm$core$List$cons, next, visited),
              rest,
              params,
              frag,
              value(nextValue)
            )
          ]);
        } else {
          return _List_Nil;
        }
      }
    });
  });
  var author$project$Article$Slug$urlParser = A2(
    elm$url$Url$Parser$custom,
    "SLUG",
    function(str) {
      return elm$core$Maybe$Just(author$project$Article$Slug$Slug(str));
    }
  );
  var author$project$Route$Article = function(a) {
    return { $: "Article", a: a };
  };
  var author$project$Route$EditArticle = function(a) {
    return { $: "EditArticle", a: a };
  };
  var author$project$Route$Login = { $: "Login" };
  var author$project$Route$Logout = { $: "Logout" };
  var author$project$Route$NewArticle = { $: "NewArticle" };
  var author$project$Route$Profile = function(a) {
    return { $: "Profile", a: a };
  };
  var author$project$Route$Register = { $: "Register" };
  var author$project$Route$Settings = { $: "Settings" };
  var author$project$Username$urlParser = A2(
    elm$url$Url$Parser$custom,
    "USERNAME",
    function(str) {
      return elm$core$Maybe$Just(author$project$Username$Username(str));
    }
  );
  var elm$url$Url$Parser$mapState = F2(function(func, _n0) {
    var visited = _n0.visited;
    var unvisited = _n0.unvisited;
    var params = _n0.params;
    var frag = _n0.frag;
    var value = _n0.value;
    return A5(
      elm$url$Url$Parser$State,
      visited,
      unvisited,
      params,
      frag,
      func(value)
    );
  });
  var elm$url$Url$Parser$map = F2(function(subValue, _n0) {
    var parseArg = _n0.a;
    return elm$url$Url$Parser$Parser(function(_n1) {
      var visited = _n1.visited;
      var unvisited = _n1.unvisited;
      var params = _n1.params;
      var frag = _n1.frag;
      var value = _n1.value;
      return A2(
        elm$core$List$map,
        elm$url$Url$Parser$mapState(value),
        parseArg(
          A5(
            elm$url$Url$Parser$State,
            visited,
            unvisited,
            params,
            frag,
            subValue
          )
        )
      );
    });
  });
  var elm$url$Url$Parser$oneOf = function(parsers) {
    return elm$url$Url$Parser$Parser(function(state) {
      return A2(
        elm$core$List$concatMap,
        function(_n0) {
          var parser = _n0.a;
          return parser(state);
        },
        parsers
      );
    });
  };
  var elm$url$Url$Parser$s = function(str) {
    return elm$url$Url$Parser$Parser(function(_n0) {
      var visited = _n0.visited;
      var unvisited = _n0.unvisited;
      var params = _n0.params;
      var frag = _n0.frag;
      var value = _n0.value;
      if (!unvisited.b) {
        return _List_Nil;
      } else {
        var next = unvisited.a;
        var rest = unvisited.b;
        return _Utils_eq(next, str)
          ? _List_fromArray([
              A5(
                elm$url$Url$Parser$State,
                A2(elm$core$List$cons, next, visited),
                rest,
                params,
                frag,
                value
              )
            ])
          : _List_Nil;
      }
    });
  };
  var elm$url$Url$Parser$slash = F2(function(_n0, _n1) {
    var parseBefore = _n0.a;
    var parseAfter = _n1.a;
    return elm$url$Url$Parser$Parser(function(state) {
      return A2(elm$core$List$concatMap, parseAfter, parseBefore(state));
    });
  });
  var elm$url$Url$Parser$top = elm$url$Url$Parser$Parser(function(state) {
    return _List_fromArray([state]);
  });
  var author$project$Route$parser = elm$url$Url$Parser$oneOf(
    _List_fromArray([
      A2(
        elm$url$Url$Parser$map,
        author$project$Route$Home,
        elm$url$Url$Parser$top
      ),
      A2(
        elm$url$Url$Parser$map,
        author$project$Route$Login,
        elm$url$Url$Parser$s("login")
      ),
      A2(
        elm$url$Url$Parser$map,
        author$project$Route$Logout,
        elm$url$Url$Parser$s("logout")
      ),
      A2(
        elm$url$Url$Parser$map,
        author$project$Route$Settings,
        elm$url$Url$Parser$s("settings")
      ),
      A2(
        elm$url$Url$Parser$map,
        author$project$Route$Profile,
        A2(
          elm$url$Url$Parser$slash,
          elm$url$Url$Parser$s("profile"),
          author$project$Username$urlParser
        )
      ),
      A2(
        elm$url$Url$Parser$map,
        author$project$Route$Register,
        elm$url$Url$Parser$s("register")
      ),
      A2(
        elm$url$Url$Parser$map,
        author$project$Route$Article,
        A2(
          elm$url$Url$Parser$slash,
          elm$url$Url$Parser$s("article"),
          author$project$Article$Slug$urlParser
        )
      ),
      A2(
        elm$url$Url$Parser$map,
        author$project$Route$NewArticle,
        elm$url$Url$Parser$s("editor")
      ),
      A2(
        elm$url$Url$Parser$map,
        author$project$Route$EditArticle,
        A2(
          elm$url$Url$Parser$slash,
          elm$url$Url$Parser$s("editor"),
          author$project$Article$Slug$urlParser
        )
      )
    ])
  );
  var elm$url$Url$Parser$getFirstMatch = function(states) {
    getFirstMatch: while (true) {
      if (!states.b) {
        return elm$core$Maybe$Nothing;
      } else {
        var state = states.a;
        var rest = states.b;
        var _n1 = state.unvisited;
        if (!_n1.b) {
          return elm$core$Maybe$Just(state.value);
        } else {
          if (_n1.a === "" && !_n1.b.b) {
            return elm$core$Maybe$Just(state.value);
          } else {
            var $temp$states = rest;
            states = $temp$states;
            continue getFirstMatch;
          }
        }
      }
    }
  };
  var elm$url$Url$Parser$removeFinalEmpty = function(segments) {
    if (!segments.b) {
      return _List_Nil;
    } else {
      if (segments.a === "" && !segments.b.b) {
        return _List_Nil;
      } else {
        var segment = segments.a;
        var rest = segments.b;
        return A2(
          elm$core$List$cons,
          segment,
          elm$url$Url$Parser$removeFinalEmpty(rest)
        );
      }
    }
  };
  var elm$url$Url$Parser$preparePath = function(path) {
    var _n0 = A2(elm$core$String$split, "/", path);
    if (_n0.b && _n0.a === "") {
      var segments = _n0.b;
      return elm$url$Url$Parser$removeFinalEmpty(segments);
    } else {
      var segments = _n0;
      return elm$url$Url$Parser$removeFinalEmpty(segments);
    }
  };
  var elm$url$Url$percentDecode = _Url_percentDecode;
  var elm$url$Url$Parser$addToParametersHelp = F2(function(value, maybeList) {
    if (maybeList.$ === "Nothing") {
      return elm$core$Maybe$Just(_List_fromArray([value]));
    } else {
      var list = maybeList.a;
      return elm$core$Maybe$Just(A2(elm$core$List$cons, value, list));
    }
  });
  var elm$url$Url$Parser$addParam = F2(function(segment, dict) {
    var _n0 = A2(elm$core$String$split, "=", segment);
    if (_n0.b && _n0.b.b && !_n0.b.b.b) {
      var rawKey = _n0.a;
      var _n1 = _n0.b;
      var rawValue = _n1.a;
      var _n2 = elm$url$Url$percentDecode(rawKey);
      if (_n2.$ === "Nothing") {
        return dict;
      } else {
        var key = _n2.a;
        var _n3 = elm$url$Url$percentDecode(rawValue);
        if (_n3.$ === "Nothing") {
          return dict;
        } else {
          var value = _n3.a;
          return A3(
            elm$core$Dict$update,
            key,
            elm$url$Url$Parser$addToParametersHelp(value),
            dict
          );
        }
      }
    } else {
      return dict;
    }
  });
  var elm$url$Url$Parser$prepareQuery = function(maybeQuery) {
    if (maybeQuery.$ === "Nothing") {
      return elm$core$Dict$empty;
    } else {
      var qry = maybeQuery.a;
      return A3(
        elm$core$List$foldr,
        elm$url$Url$Parser$addParam,
        elm$core$Dict$empty,
        A2(elm$core$String$split, "&", qry)
      );
    }
  };
  var elm$url$Url$Parser$parse = F2(function(_n0, url) {
    var parser = _n0.a;
    return elm$url$Url$Parser$getFirstMatch(
      parser(
        A5(
          elm$url$Url$Parser$State,
          _List_Nil,
          elm$url$Url$Parser$preparePath(url.path),
          elm$url$Url$Parser$prepareQuery(url.query),
          url.fragment,
          elm$core$Basics$identity
        )
      )
    );
  });
  var author$project$Route$fromUrl = function(url) {
    return A2(
      elm$url$Url$Parser$parse,
      author$project$Route$parser,
      _Utils_update(url, {
        fragment: elm$core$Maybe$Nothing,
        path: A2(elm$core$Maybe$withDefault, "", url.fragment)
      })
    );
  };
  var author$project$Session$Guest = function(a) {
    return { $: "Guest", a: a };
  };
  var author$project$Session$LoggedIn = F2(function(a, b) {
    return { $: "LoggedIn", a: a, b: b };
  });
  var author$project$Session$fromViewer = F2(function(key, maybeViewer) {
    if (maybeViewer.$ === "Just") {
      var viewerVal = maybeViewer.a;
      return A2(author$project$Session$LoggedIn, key, viewerVal);
    } else {
      return author$project$Session$Guest(key);
    }
  });
  var author$project$Main$init = F3(function(maybeViewer, url, navKey) {
    return A2(
      author$project$Main$changeRouteTo,
      author$project$Route$fromUrl(url),
      author$project$Main$Redirect(
        A2(author$project$Session$fromViewer, navKey, maybeViewer)
      )
    );
  });
  var author$project$Main$GotSession = function(a) {
    return { $: "GotSession", a: a };
  };
  var author$project$Page$Article$GotSession = function(a) {
    return { $: "GotSession", a: a };
  };
  var author$project$Api$decodeFromChange = F2(function(viewerDecoder, val) {
    return elm$core$Result$toMaybe(
      A2(
        elm$json$Json$Decode$decodeValue,
        author$project$Api$storageDecoder(viewerDecoder),
        val
      )
    );
  });
  var author$project$Api$onStoreChange = _Platform_incomingPort(
    "onStoreChange",
    elm$json$Json$Decode$value
  );
  var author$project$Api$viewerChanges = F2(function(toMsg, decoder) {
    return author$project$Api$onStoreChange(function(value) {
      return toMsg(A2(author$project$Api$decodeFromChange, decoder, value));
    });
  });
  var author$project$Viewer$Viewer = F2(function(a, b) {
    return { $: "Viewer", a: a, b: b };
  });
  var author$project$Viewer$decoder = A2(
    NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$custom,
    A2(elm$json$Json$Decode$field, "image", author$project$Avatar$decoder),
    elm$json$Json$Decode$succeed(author$project$Viewer$Viewer)
  );
  var author$project$Session$changes = F2(function(toMsg, key) {
    return A2(
      author$project$Api$viewerChanges,
      function(maybeViewer) {
        return toMsg(A2(author$project$Session$fromViewer, key, maybeViewer));
      },
      author$project$Viewer$decoder
    );
  });
  var author$project$Page$Article$subscriptions = function(model) {
    return A2(
      author$project$Session$changes,
      author$project$Page$Article$GotSession,
      author$project$Session$navKey(model.session)
    );
  };
  var author$project$Page$Article$Editor$GotSession = function(a) {
    return { $: "GotSession", a: a };
  };
  var author$project$Page$Article$Editor$subscriptions = function(model) {
    return A2(
      author$project$Session$changes,
      author$project$Page$Article$Editor$GotSession,
      author$project$Session$navKey(model.session)
    );
  };
  var author$project$Page$Home$GotSession = function(a) {
    return { $: "GotSession", a: a };
  };
  var author$project$Page$Home$subscriptions = function(model) {
    return A2(
      author$project$Session$changes,
      author$project$Page$Home$GotSession,
      author$project$Session$navKey(model.session)
    );
  };
  var author$project$Page$Login$GotSession = function(a) {
    return { $: "GotSession", a: a };
  };
  var author$project$Page$Login$subscriptions = function(model) {
    return A2(
      author$project$Session$changes,
      author$project$Page$Login$GotSession,
      author$project$Session$navKey(model.session)
    );
  };
  var author$project$Page$Profile$GotSession = function(a) {
    return { $: "GotSession", a: a };
  };
  var author$project$Page$Profile$subscriptions = function(model) {
    return A2(
      author$project$Session$changes,
      author$project$Page$Profile$GotSession,
      author$project$Session$navKey(model.session)
    );
  };
  var author$project$Page$Register$GotSession = function(a) {
    return { $: "GotSession", a: a };
  };
  var author$project$Page$Register$subscriptions = function(model) {
    return A2(
      author$project$Session$changes,
      author$project$Page$Register$GotSession,
      author$project$Session$navKey(model.session)
    );
  };
  var author$project$Page$Settings$GotSession = function(a) {
    return { $: "GotSession", a: a };
  };
  var author$project$Page$Settings$subscriptions = function(model) {
    return A2(
      author$project$Session$changes,
      author$project$Page$Settings$GotSession,
      author$project$Session$navKey(model.session)
    );
  };
  var elm$core$Platform$Sub$batch = _Platform_batch;
  var elm$core$Platform$Sub$none = elm$core$Platform$Sub$batch(_List_Nil);
  var author$project$Main$subscriptions = function(model) {
    switch (model.$) {
      case "NotFound":
        return elm$core$Platform$Sub$none;
      case "Redirect":
        return A2(
          author$project$Session$changes,
          author$project$Main$GotSession,
          author$project$Session$navKey(author$project$Main$toSession(model))
        );
      case "Settings":
        var settings = model.a;
        return A2(
          elm$core$Platform$Sub$map,
          author$project$Main$GotSettingsMsg,
          author$project$Page$Settings$subscriptions(settings)
        );
      case "Home":
        var home = model.a;
        return A2(
          elm$core$Platform$Sub$map,
          author$project$Main$GotHomeMsg,
          author$project$Page$Home$subscriptions(home)
        );
      case "Login":
        var login = model.a;
        return A2(
          elm$core$Platform$Sub$map,
          author$project$Main$GotLoginMsg,
          author$project$Page$Login$subscriptions(login)
        );
      case "Register":
        var register = model.a;
        return A2(
          elm$core$Platform$Sub$map,
          author$project$Main$GotRegisterMsg,
          author$project$Page$Register$subscriptions(register)
        );
      case "Profile":
        var profile = model.b;
        return A2(
          elm$core$Platform$Sub$map,
          author$project$Main$GotProfileMsg,
          author$project$Page$Profile$subscriptions(profile)
        );
      case "Article":
        var article = model.a;
        return A2(
          elm$core$Platform$Sub$map,
          author$project$Main$GotArticleMsg,
          author$project$Page$Article$subscriptions(article)
        );
      default:
        var editor = model.b;
        return A2(
          elm$core$Platform$Sub$map,
          author$project$Main$GotEditorMsg,
          author$project$Page$Article$Editor$subscriptions(editor)
        );
    }
  };
  var author$project$Api$addServerError = function(list) {
    return A2(elm$core$List$cons, "Server error", list);
  };
  var author$project$Api$post = F4(function(url, maybeCred, body, decoder) {
    return author$project$Api$Endpoint$request({
      body: body,
      expect: elm$http$Http$expectJson(decoder),
      headers: (function() {
        if (maybeCred.$ === "Just") {
          var cred = maybeCred.a;
          return _List_fromArray([author$project$Api$credHeader(cred)]);
        } else {
          return _List_Nil;
        }
      })(),
      method: "POST",
      timeout: elm$core$Maybe$Nothing,
      url: url,
      withCredentials: false
    });
  });
  var author$project$Api$Endpoint$favorite = function(slug) {
    return A2(
      author$project$Api$Endpoint$url,
      _List_fromArray([
        "articles",
        author$project$Article$Slug$toString(slug),
        "favorite"
      ]),
      _List_Nil
    );
  };
  var author$project$Article$faveDecoder = function(cred) {
    return A2(
      elm$json$Json$Decode$field,
      "article",
      author$project$Article$previewDecoder(elm$core$Maybe$Just(cred))
    );
  };
  var author$project$Article$favorite = F2(function(articleSlug, cred) {
    return A4(
      author$project$Api$post,
      author$project$Api$Endpoint$favorite(articleSlug),
      elm$core$Maybe$Just(cred),
      elm$http$Http$emptyBody,
      author$project$Article$faveDecoder(cred)
    );
  });
  var author$project$Article$mapAuthor = F2(function(transform, _n0) {
    var info = _n0.a;
    var extras = _n0.b;
    return A2(
      author$project$Article$Article,
      _Utils_update(info, {
        author: transform(info.author)
      }),
      extras
    );
  });
  var author$project$Api$delete = F4(function(url, cred, body, decoder) {
    return author$project$Api$Endpoint$request({
      body: body,
      expect: elm$http$Http$expectJson(decoder),
      headers: _List_fromArray([author$project$Api$credHeader(cred)]),
      method: "DELETE",
      timeout: elm$core$Maybe$Nothing,
      url: url,
      withCredentials: false
    });
  });
  var author$project$Article$unfavorite = F2(function(articleSlug, cred) {
    return A4(
      author$project$Api$delete,
      author$project$Api$Endpoint$favorite(articleSlug),
      cred,
      elm$http$Http$emptyBody,
      author$project$Article$faveDecoder(cred)
    );
  });
  var author$project$CommentId$toString = function(_n0) {
    var id = _n0.a;
    return elm$core$String$fromInt(id);
  };
  var author$project$Api$Endpoint$comment = F2(function(slug, commentId) {
    return A2(
      author$project$Api$Endpoint$url,
      _List_fromArray([
        "articles",
        author$project$Article$Slug$toString(slug),
        "comments",
        author$project$CommentId$toString(commentId)
      ]),
      _List_Nil
    );
  });
  var author$project$Article$Comment$delete = F3(function(
    articleSlug,
    commentId,
    cred
  ) {
    return A4(
      author$project$Api$delete,
      A2(author$project$Api$Endpoint$comment, articleSlug, commentId),
      cred,
      elm$http$Http$emptyBody,
      elm$json$Json$Decode$succeed(_Utils_Tuple0)
    );
  });
  var author$project$Article$Comment$encodeCommentBody = function(str) {
    return elm$json$Json$Encode$object(
      _List_fromArray([
        _Utils_Tuple2(
          "comment",
          elm$json$Json$Encode$object(
            _List_fromArray([
              _Utils_Tuple2("body", elm$json$Json$Encode$string(str))
            ])
          )
        )
      ])
    );
  };
  var elm$http$Http$Internal$StringBody = F2(function(a, b) {
    return { $: "StringBody", a: a, b: b };
  });
  var elm$http$Http$jsonBody = function(value) {
    return A2(
      elm$http$Http$Internal$StringBody,
      "application/json",
      A2(elm$json$Json$Encode$encode, 0, value)
    );
  };
  var author$project$Article$Comment$post = F3(function(
    articleSlug,
    commentBody,
    cred
  ) {
    var bod = elm$http$Http$jsonBody(
      author$project$Article$Comment$encodeCommentBody(commentBody)
    );
    return A4(
      author$project$Api$post,
      author$project$Api$Endpoint$comments(articleSlug),
      elm$core$Maybe$Just(cred),
      bod,
      A2(
        elm$json$Json$Decode$field,
        "comment",
        author$project$Article$Comment$decoder(elm$core$Maybe$Just(cred))
      )
    );
  });
  var author$project$Api$Endpoint$follow = function(uname) {
    return A2(
      author$project$Api$Endpoint$url,
      _List_fromArray([
        "profiles",
        author$project$Username$toString(uname),
        "follow"
      ]),
      _List_Nil
    );
  };
  var author$project$Author$followDecoder = function(cred) {
    return A2(
      elm$json$Json$Decode$field,
      "profile",
      author$project$Author$decoder(elm$core$Maybe$Just(cred))
    );
  };
  var author$project$Author$requestFollow = F2(function(_n0, cred) {
    var uname = _n0.a;
    return A4(
      author$project$Api$post,
      author$project$Api$Endpoint$follow(uname),
      elm$core$Maybe$Just(cred),
      elm$http$Http$emptyBody,
      author$project$Author$followDecoder(cred)
    );
  });
  var author$project$Author$requestUnfollow = F2(function(_n0, cred) {
    var uname = _n0.a;
    return A4(
      author$project$Api$delete,
      author$project$Api$Endpoint$follow(uname),
      cred,
      elm$http$Http$emptyBody,
      author$project$Author$followDecoder(cred)
    );
  });
  var author$project$Log$error = elm$core$Platform$Cmd$none;
  var author$project$Page$Article$CompletedDeleteArticle = function(a) {
    return { $: "CompletedDeleteArticle", a: a };
  };
  var author$project$Page$Article$CompletedDeleteComment = F2(function(a, b) {
    return { $: "CompletedDeleteComment", a: a, b: b };
  });
  var author$project$Page$Article$CompletedFollowChange = function(a) {
    return { $: "CompletedFollowChange", a: a };
  };
  var author$project$Page$Article$CompletedPostComment = function(a) {
    return { $: "CompletedPostComment", a: a };
  };
  var author$project$Page$Article$Editing = function(a) {
    return { $: "Editing", a: a };
  };
  var author$project$Page$Article$Failed = { $: "Failed" };
  var author$project$Page$Article$Loaded = function(a) {
    return { $: "Loaded", a: a };
  };
  var author$project$Page$Article$LoadingSlowly = { $: "LoadingSlowly" };
  var author$project$Page$Article$Sending = function(a) {
    return { $: "Sending", a: a };
  };
  var author$project$Page$Article$delete = F2(function(slug, cred) {
    return A4(
      author$project$Api$delete,
      author$project$Api$Endpoint$article(slug),
      cred,
      elm$http$Http$emptyBody,
      elm$json$Json$Decode$succeed(_Utils_Tuple0)
    );
  });
  var author$project$Article$fromPreview = F2(function(newBody, _n0) {
    var info = _n0.a;
    var _n1 = _n0.b;
    return A2(
      author$project$Article$Article,
      info,
      author$project$Article$Full(newBody)
    );
  });
  var author$project$Page$Article$CompletedFavoriteChange = function(a) {
    return { $: "CompletedFavoriteChange", a: a };
  };
  var author$project$Page$Article$fave = F4(function(
    toRequest,
    cred,
    slug,
    body
  ) {
    return A2(
      elm$core$Task$attempt,
      author$project$Page$Article$CompletedFavoriteChange,
      A2(
        elm$core$Task$map,
        author$project$Article$fromPreview(body),
        elm$http$Http$toTask(A2(toRequest, slug, cred))
      )
    );
  });
  var author$project$Article$Comment$id = function(_n0) {
    var comment = _n0.a;
    return comment.id;
  };
  var elm$core$List$filter = F2(function(isGood, list) {
    return A3(
      elm$core$List$foldr,
      F2(function(x, xs) {
        return isGood(x) ? A2(elm$core$List$cons, x, xs) : xs;
      }),
      _List_Nil,
      list
    );
  });
  var author$project$Page$Article$withoutComment = F2(function(id, list) {
    return A2(
      elm$core$List$filter,
      function(comment) {
        return !_Utils_eq(author$project$Article$Comment$id(comment), id);
      },
      list
    );
  });
  var author$project$Page$Article$update = F2(function(msg, model) {
    switch (msg.$) {
      case "ClickedDismissErrors":
        return _Utils_Tuple2(
          _Utils_update(model, { errors: _List_Nil }),
          elm$core$Platform$Cmd$none
        );
      case "ClickedFavorite":
        var cred = msg.a;
        var slug = msg.b;
        var body = msg.c;
        return _Utils_Tuple2(
          model,
          A4(
            author$project$Page$Article$fave,
            author$project$Article$favorite,
            cred,
            slug,
            body
          )
        );
      case "ClickedUnfavorite":
        var cred = msg.a;
        var slug = msg.b;
        var body = msg.c;
        return _Utils_Tuple2(
          model,
          A4(
            author$project$Page$Article$fave,
            author$project$Article$unfavorite,
            cred,
            slug,
            body
          )
        );
      case "CompletedLoadArticle":
        if (msg.a.$ === "Ok") {
          var article = msg.a.a;
          return _Utils_Tuple2(
            _Utils_update(model, {
              article: author$project$Page$Article$Loaded(article)
            }),
            elm$core$Platform$Cmd$none
          );
        } else {
          var error = msg.a.a;
          return _Utils_Tuple2(
            _Utils_update(model, {
              article: author$project$Page$Article$Failed
            }),
            author$project$Log$error
          );
        }
      case "CompletedLoadComments":
        if (msg.a.$ === "Ok") {
          var comments = msg.a.a;
          return _Utils_Tuple2(
            _Utils_update(model, {
              comments: author$project$Page$Article$Loaded(
                _Utils_Tuple2(author$project$Page$Article$Editing(""), comments)
              )
            }),
            elm$core$Platform$Cmd$none
          );
        } else {
          var error = msg.a.a;
          return _Utils_Tuple2(
            _Utils_update(model, {
              article: author$project$Page$Article$Failed
            }),
            author$project$Log$error
          );
        }
      case "CompletedFavoriteChange":
        if (msg.a.$ === "Ok") {
          var newArticle = msg.a.a;
          return _Utils_Tuple2(
            _Utils_update(model, {
              article: author$project$Page$Article$Loaded(newArticle)
            }),
            elm$core$Platform$Cmd$none
          );
        } else {
          var error = msg.a.a;
          return _Utils_Tuple2(
            _Utils_update(model, {
              errors: author$project$Api$addServerError(model.errors)
            }),
            author$project$Log$error
          );
        }
      case "ClickedUnfollow":
        var cred = msg.a;
        var followedAuthor = msg.b;
        return _Utils_Tuple2(
          model,
          A2(
            elm$http$Http$send,
            author$project$Page$Article$CompletedFollowChange,
            A2(author$project$Author$requestUnfollow, followedAuthor, cred)
          )
        );
      case "ClickedFollow":
        var cred = msg.a;
        var unfollowedAuthor = msg.b;
        return _Utils_Tuple2(
          model,
          A2(
            elm$http$Http$send,
            author$project$Page$Article$CompletedFollowChange,
            A2(author$project$Author$requestFollow, unfollowedAuthor, cred)
          )
        );
      case "CompletedFollowChange":
        if (msg.a.$ === "Ok") {
          var newAuthor = msg.a.a;
          var _n1 = model.article;
          if (_n1.$ === "Loaded") {
            var article = _n1.a;
            return _Utils_Tuple2(
              _Utils_update(model, {
                article: author$project$Page$Article$Loaded(
                  A2(
                    author$project$Article$mapAuthor,
                    function(_n2) {
                      return newAuthor;
                    },
                    article
                  )
                )
              }),
              elm$core$Platform$Cmd$none
            );
          } else {
            return _Utils_Tuple2(model, author$project$Log$error);
          }
        } else {
          var error = msg.a.a;
          return _Utils_Tuple2(
            _Utils_update(model, {
              errors: author$project$Api$addServerError(model.errors)
            }),
            author$project$Log$error
          );
        }
      case "EnteredCommentText":
        var str = msg.a;
        var _n3 = model.comments;
        if (_n3.$ === "Loaded" && _n3.a.a.$ === "Editing") {
          var _n4 = _n3.a;
          var comments = _n4.b;
          return _Utils_Tuple2(
            _Utils_update(model, {
              comments: author$project$Page$Article$Loaded(
                _Utils_Tuple2(
                  author$project$Page$Article$Editing(str),
                  comments
                )
              )
            }),
            elm$core$Platform$Cmd$none
          );
        } else {
          return _Utils_Tuple2(model, author$project$Log$error);
        }
      case "ClickedPostComment":
        var cred = msg.a;
        var slug = msg.b;
        var _n5 = model.comments;
        if (_n5.$ === "Loaded" && _n5.a.a.$ === "Editing") {
          if (_n5.a.a.a === "") {
            var _n6 = _n5.a;
            var comments = _n6.b;
            return _Utils_Tuple2(model, elm$core$Platform$Cmd$none);
          } else {
            var _n7 = _n5.a;
            var str = _n7.a.a;
            var comments = _n7.b;
            return _Utils_Tuple2(
              _Utils_update(model, {
                comments: author$project$Page$Article$Loaded(
                  _Utils_Tuple2(
                    author$project$Page$Article$Sending(str),
                    comments
                  )
                )
              }),
              A2(
                elm$http$Http$send,
                author$project$Page$Article$CompletedPostComment,
                A3(author$project$Article$Comment$post, slug, str, cred)
              )
            );
          }
        } else {
          return _Utils_Tuple2(model, author$project$Log$error);
        }
      case "CompletedPostComment":
        if (msg.a.$ === "Ok") {
          var comment = msg.a.a;
          var _n8 = model.comments;
          if (_n8.$ === "Loaded") {
            var _n9 = _n8.a;
            var comments = _n9.b;
            return _Utils_Tuple2(
              _Utils_update(model, {
                comments: author$project$Page$Article$Loaded(
                  _Utils_Tuple2(
                    author$project$Page$Article$Editing(""),
                    A2(elm$core$List$cons, comment, comments)
                  )
                )
              }),
              elm$core$Platform$Cmd$none
            );
          } else {
            return _Utils_Tuple2(model, author$project$Log$error);
          }
        } else {
          var error = msg.a.a;
          return _Utils_Tuple2(
            _Utils_update(model, {
              errors: author$project$Api$addServerError(model.errors)
            }),
            author$project$Log$error
          );
        }
      case "ClickedDeleteComment":
        var cred = msg.a;
        var slug = msg.b;
        var id = msg.c;
        return _Utils_Tuple2(
          model,
          A2(
            elm$http$Http$send,
            author$project$Page$Article$CompletedDeleteComment(id),
            A3(author$project$Article$Comment$delete, slug, id, cred)
          )
        );
      case "CompletedDeleteComment":
        if (msg.b.$ === "Ok") {
          var id = msg.a;
          var _n10 = model.comments;
          if (_n10.$ === "Loaded") {
            var _n11 = _n10.a;
            var commentText = _n11.a;
            var comments = _n11.b;
            return _Utils_Tuple2(
              _Utils_update(model, {
                comments: author$project$Page$Article$Loaded(
                  _Utils_Tuple2(
                    commentText,
                    A2(author$project$Page$Article$withoutComment, id, comments)
                  )
                )
              }),
              elm$core$Platform$Cmd$none
            );
          } else {
            return _Utils_Tuple2(model, author$project$Log$error);
          }
        } else {
          var id = msg.a;
          var error = msg.b.a;
          return _Utils_Tuple2(
            _Utils_update(model, {
              errors: author$project$Api$addServerError(model.errors)
            }),
            author$project$Log$error
          );
        }
      case "ClickedDeleteArticle":
        var cred = msg.a;
        var slug = msg.b;
        return _Utils_Tuple2(
          model,
          A2(
            elm$http$Http$send,
            author$project$Page$Article$CompletedDeleteArticle,
            A2(author$project$Page$Article$delete, slug, cred)
          )
        );
      case "CompletedDeleteArticle":
        if (msg.a.$ === "Ok") {
          return _Utils_Tuple2(
            model,
            A2(
              author$project$Route$replaceUrl,
              author$project$Session$navKey(model.session),
              author$project$Route$Home
            )
          );
        } else {
          var error = msg.a.a;
          return _Utils_Tuple2(
            _Utils_update(model, {
              errors: author$project$Api$addServerError(model.errors)
            }),
            author$project$Log$error
          );
        }
      case "GotTimeZone":
        var tz = msg.a;
        return _Utils_Tuple2(
          _Utils_update(model, { timeZone: tz }),
          elm$core$Platform$Cmd$none
        );
      case "GotSession":
        var session = msg.a;
        return _Utils_Tuple2(
          _Utils_update(model, { session: session }),
          A2(
            author$project$Route$replaceUrl,
            author$project$Session$navKey(session),
            author$project$Route$Home
          )
        );
      default:
        var comments = (function() {
          var _n13 = model.comments;
          if (_n13.$ === "Loading") {
            return author$project$Page$Article$LoadingSlowly;
          } else {
            var other = _n13;
            return other;
          }
        })();
        var article = (function() {
          var _n12 = model.article;
          if (_n12.$ === "Loading") {
            return author$project$Page$Article$LoadingSlowly;
          } else {
            var other = _n12;
            return other;
          }
        })();
        return _Utils_Tuple2(
          _Utils_update(model, { article: article, comments: comments }),
          elm$core$Platform$Cmd$none
        );
    }
  });
  var author$project$Article$body = function(_n0) {
    var extraInfo = _n0.b.a;
    return extraInfo;
  };
  var author$project$Article$metadata = function(_n0) {
    var internals = _n0.a;
    return internals.metadata;
  };
  var author$project$Article$slug = function(_n0) {
    var internals = _n0.a;
    return internals.slug;
  };
  var author$project$Article$Body$toMarkdownString = function(_n0) {
    var markdown = _n0.a;
    return markdown;
  };
  var author$project$Page$Article$Editor$Editing = F3(function(a, b, c) {
    return { $: "Editing", a: a, b: b, c: c };
  });
  var author$project$Page$Article$Editor$LoadingFailed = function(a) {
    return { $: "LoadingFailed", a: a };
  };
  var author$project$Page$Article$Editor$LoadingSlowly = function(a) {
    return { $: "LoadingSlowly", a: a };
  };
  var author$project$Page$Article$Editor$CompletedCreate = function(a) {
    return { $: "CompletedCreate", a: a };
  };
  var author$project$Page$Article$Editor$CompletedEdit = function(a) {
    return { $: "CompletedEdit", a: a };
  };
  var author$project$Page$Article$Editor$Creating = function(a) {
    return { $: "Creating", a: a };
  };
  var author$project$Page$Article$Editor$Saving = F2(function(a, b) {
    return { $: "Saving", a: a, b: b };
  });
  var elm$core$String$trim = _String_trim;
  var author$project$Page$Article$Editor$tagsFromString = function(str) {
    return A2(
      elm$core$List$filter,
      A2(
        elm$core$Basics$composeL,
        elm$core$Basics$not,
        elm$core$String$isEmpty
      ),
      A2(
        elm$core$List$map,
        elm$core$String$trim,
        A2(elm$core$String$split, " ", str)
      )
    );
  };
  var author$project$Page$Article$Editor$create = F2(function(_n0, cred) {
    var form = _n0.a;
    var article = elm$json$Json$Encode$object(
      _List_fromArray([
        _Utils_Tuple2("title", elm$json$Json$Encode$string(form.title)),
        _Utils_Tuple2(
          "description",
          elm$json$Json$Encode$string(form.description)
        ),
        _Utils_Tuple2("body", elm$json$Json$Encode$string(form.body)),
        _Utils_Tuple2(
          "tagList",
          A2(
            elm$json$Json$Encode$list,
            elm$json$Json$Encode$string,
            author$project$Page$Article$Editor$tagsFromString(form.tags)
          )
        )
      ])
    );
    var body = elm$http$Http$jsonBody(
      elm$json$Json$Encode$object(
        _List_fromArray([_Utils_Tuple2("article", article)])
      )
    );
    return A4(
      author$project$Api$post,
      author$project$Api$Endpoint$articles(_List_Nil),
      elm$core$Maybe$Just(cred),
      body,
      A2(
        elm$json$Json$Decode$field,
        "article",
        author$project$Article$fullDecoder(elm$core$Maybe$Just(cred))
      )
    );
  });
  var author$project$Api$put = F4(function(url, cred, body, decoder) {
    return author$project$Api$Endpoint$request({
      body: body,
      expect: elm$http$Http$expectJson(decoder),
      headers: _List_fromArray([author$project$Api$credHeader(cred)]),
      method: "PUT",
      timeout: elm$core$Maybe$Nothing,
      url: url,
      withCredentials: false
    });
  });
  var author$project$Page$Article$Editor$edit = F3(function(
    articleSlug,
    _n0,
    cred
  ) {
    var form = _n0.a;
    var article = elm$json$Json$Encode$object(
      _List_fromArray([
        _Utils_Tuple2("title", elm$json$Json$Encode$string(form.title)),
        _Utils_Tuple2(
          "description",
          elm$json$Json$Encode$string(form.description)
        ),
        _Utils_Tuple2("body", elm$json$Json$Encode$string(form.body))
      ])
    );
    var body = elm$http$Http$jsonBody(
      elm$json$Json$Encode$object(
        _List_fromArray([_Utils_Tuple2("article", article)])
      )
    );
    return A4(
      author$project$Api$put,
      author$project$Api$Endpoint$article(articleSlug),
      cred,
      body,
      A2(
        elm$json$Json$Decode$field,
        "article",
        author$project$Article$fullDecoder(elm$core$Maybe$Just(cred))
      )
    );
  });
  var author$project$Page$Article$Editor$Body = { $: "Body" };
  var author$project$Page$Article$Editor$Title = { $: "Title" };
  var author$project$Page$Article$Editor$fieldsToValidate = _List_fromArray([
    author$project$Page$Article$Editor$Title,
    author$project$Page$Article$Editor$Body
  ]);
  var author$project$Page$Article$Editor$Trimmed = function(a) {
    return { $: "Trimmed", a: a };
  };
  var author$project$Page$Article$Editor$trimFields = function(form) {
    return author$project$Page$Article$Editor$Trimmed({
      body: elm$core$String$trim(form.body),
      description: elm$core$String$trim(form.description),
      tags: elm$core$String$trim(form.tags),
      title: elm$core$String$trim(form.title)
    });
  };
  var author$project$Page$Article$Editor$InvalidEntry = F2(function(a, b) {
    return { $: "InvalidEntry", a: a, b: b };
  });
  var author$project$Page$Article$Editor$validateField = F2(function(
    _n0,
    field
  ) {
    var form = _n0.a;
    return A2(
      elm$core$List$map,
      author$project$Page$Article$Editor$InvalidEntry(field),
      (function() {
        if (field.$ === "Title") {
          return elm$core$String$isEmpty(form.title)
            ? _List_fromArray(["title can't be blank."])
            : _List_Nil;
        } else {
          return elm$core$String$isEmpty(form.body)
            ? _List_fromArray(["body can't be blank."])
            : _List_Nil;
        }
      })()
    );
  });
  var author$project$Page$Article$Editor$validate = function(form) {
    var trimmedForm = author$project$Page$Article$Editor$trimFields(form);
    var _n0 = A2(
      elm$core$List$concatMap,
      author$project$Page$Article$Editor$validateField(trimmedForm),
      author$project$Page$Article$Editor$fieldsToValidate
    );
    if (!_n0.b) {
      return elm$core$Result$Ok(trimmedForm);
    } else {
      var problems = _n0;
      return elm$core$Result$Err(problems);
    }
  };
  var author$project$Page$Article$Editor$save = F2(function(cred, status) {
    switch (status.$) {
      case "Editing":
        var slug = status.a;
        var form = status.c;
        var _n1 = author$project$Page$Article$Editor$validate(form);
        if (_n1.$ === "Ok") {
          var validForm = _n1.a;
          return _Utils_Tuple2(
            A2(author$project$Page$Article$Editor$Saving, slug, form),
            A2(
              elm$http$Http$send,
              author$project$Page$Article$Editor$CompletedEdit,
              A3(author$project$Page$Article$Editor$edit, slug, validForm, cred)
            )
          );
        } else {
          var problems = _n1.a;
          return _Utils_Tuple2(
            A3(
              author$project$Page$Article$Editor$Editing,
              slug,
              problems,
              form
            ),
            elm$core$Platform$Cmd$none
          );
        }
      case "EditingNew":
        var form = status.b;
        var _n2 = author$project$Page$Article$Editor$validate(form);
        if (_n2.$ === "Ok") {
          var validForm = _n2.a;
          return _Utils_Tuple2(
            author$project$Page$Article$Editor$Creating(form),
            A2(
              elm$http$Http$send,
              author$project$Page$Article$Editor$CompletedCreate,
              A2(author$project$Page$Article$Editor$create, validForm, cred)
            )
          );
        } else {
          var problems = _n2.a;
          return _Utils_Tuple2(
            A2(author$project$Page$Article$Editor$EditingNew, problems, form),
            elm$core$Platform$Cmd$none
          );
        }
      default:
        return _Utils_Tuple2(status, elm$core$Platform$Cmd$none);
    }
  });
  var author$project$Page$Article$Editor$ServerError = function(a) {
    return { $: "ServerError", a: a };
  };
  var author$project$Page$Article$Editor$savingError = F2(function(
    error,
    status
  ) {
    var problems = _List_fromArray([
      author$project$Page$Article$Editor$ServerError("Error saving article")
    ]);
    switch (status.$) {
      case "Saving":
        var slug = status.a;
        var form = status.b;
        return A3(
          author$project$Page$Article$Editor$Editing,
          slug,
          problems,
          form
        );
      case "Creating":
        var form = status.a;
        return A2(
          author$project$Page$Article$Editor$EditingNew,
          problems,
          form
        );
      default:
        return status;
    }
  });
  var author$project$Page$Article$Editor$updateForm = F2(function(
    transform,
    model
  ) {
    var newModel = (function() {
      var _n0 = model.status;
      switch (_n0.$) {
        case "Loading":
          return model;
        case "LoadingSlowly":
          return model;
        case "LoadingFailed":
          return model;
        case "Saving":
          var slug = _n0.a;
          var form = _n0.b;
          return _Utils_update(model, {
            status: A2(
              author$project$Page$Article$Editor$Saving,
              slug,
              transform(form)
            )
          });
        case "Editing":
          var slug = _n0.a;
          var errors = _n0.b;
          var form = _n0.c;
          return _Utils_update(model, {
            status: A3(
              author$project$Page$Article$Editor$Editing,
              slug,
              errors,
              transform(form)
            )
          });
        case "EditingNew":
          var errors = _n0.a;
          var form = _n0.b;
          return _Utils_update(model, {
            status: A2(
              author$project$Page$Article$Editor$EditingNew,
              errors,
              transform(form)
            )
          });
        default:
          var form = _n0.a;
          return _Utils_update(model, {
            status: author$project$Page$Article$Editor$Creating(transform(form))
          });
      }
    })();
    return _Utils_Tuple2(newModel, elm$core$Platform$Cmd$none);
  });
  var elm$core$Tuple$mapFirst = F2(function(func, _n0) {
    var x = _n0.a;
    var y = _n0.b;
    return _Utils_Tuple2(func(x), y);
  });
  var author$project$Page$Article$Editor$update = F2(function(msg, model) {
    switch (msg.$) {
      case "ClickedSave":
        var cred = msg.a;
        return A2(
          elm$core$Tuple$mapFirst,
          function(status) {
            return _Utils_update(model, { status: status });
          },
          A2(author$project$Page$Article$Editor$save, cred, model.status)
        );
      case "EnteredTitle":
        var title = msg.a;
        return A2(
          author$project$Page$Article$Editor$updateForm,
          function(form) {
            return _Utils_update(form, { title: title });
          },
          model
        );
      case "EnteredDescription":
        var description = msg.a;
        return A2(
          author$project$Page$Article$Editor$updateForm,
          function(form) {
            return _Utils_update(form, { description: description });
          },
          model
        );
      case "EnteredTags":
        var tags = msg.a;
        return A2(
          author$project$Page$Article$Editor$updateForm,
          function(form) {
            return _Utils_update(form, { tags: tags });
          },
          model
        );
      case "EnteredBody":
        var body = msg.a;
        return A2(
          author$project$Page$Article$Editor$updateForm,
          function(form) {
            return _Utils_update(form, { body: body });
          },
          model
        );
      case "CompletedCreate":
        if (msg.a.$ === "Ok") {
          var article = msg.a.a;
          return _Utils_Tuple2(
            model,
            A2(
              author$project$Route$replaceUrl,
              author$project$Session$navKey(model.session),
              author$project$Route$Article(author$project$Article$slug(article))
            )
          );
        } else {
          var error = msg.a.a;
          return _Utils_Tuple2(
            _Utils_update(model, {
              status: A2(
                author$project$Page$Article$Editor$savingError,
                error,
                model.status
              )
            }),
            elm$core$Platform$Cmd$none
          );
        }
      case "CompletedEdit":
        if (msg.a.$ === "Ok") {
          var article = msg.a.a;
          return _Utils_Tuple2(
            model,
            A2(
              author$project$Route$replaceUrl,
              author$project$Session$navKey(model.session),
              author$project$Route$Article(author$project$Article$slug(article))
            )
          );
        } else {
          var error = msg.a.a;
          return _Utils_Tuple2(
            _Utils_update(model, {
              status: A2(
                author$project$Page$Article$Editor$savingError,
                error,
                model.status
              )
            }),
            elm$core$Platform$Cmd$none
          );
        }
      case "CompletedArticleLoad":
        if (msg.a.$ === "Err") {
          var _n1 = msg.a.a;
          var slug = _n1.a;
          var error = _n1.b;
          return _Utils_Tuple2(
            _Utils_update(model, {
              status: author$project$Page$Article$Editor$LoadingFailed(slug)
            }),
            elm$core$Platform$Cmd$none
          );
        } else {
          var article = msg.a.a;
          var _n2 = author$project$Article$metadata(article);
          var title = _n2.title;
          var description = _n2.description;
          var tags = _n2.tags;
          var status = A3(
            author$project$Page$Article$Editor$Editing,
            author$project$Article$slug(article),
            _List_Nil,
            {
              body: author$project$Article$Body$toMarkdownString(
                author$project$Article$body(article)
              ),
              description: description,
              tags: A2(elm$core$String$join, " ", tags),
              title: title
            }
          );
          return _Utils_Tuple2(
            _Utils_update(model, { status: status }),
            elm$core$Platform$Cmd$none
          );
        }
      case "GotSession":
        var session = msg.a;
        return _Utils_Tuple2(
          _Utils_update(model, { session: session }),
          A2(
            author$project$Route$replaceUrl,
            author$project$Session$navKey(session),
            author$project$Route$Home
          )
        );
      default:
        var status = (function() {
          var _n3 = model.status;
          if (_n3.$ === "Loading") {
            var slug = _n3.a;
            return author$project$Page$Article$Editor$LoadingSlowly(slug);
          } else {
            var other = _n3;
            return other;
          }
        })();
        return _Utils_Tuple2(
          _Utils_update(model, { status: status }),
          elm$core$Platform$Cmd$none
        );
    }
  });
  var author$project$Article$Feed$CompletedFavorite = function(a) {
    return { $: "CompletedFavorite", a: a };
  };
  var author$project$Article$Feed$fave = F4(function(
    toRequest,
    cred,
    slug,
    model
  ) {
    return _Utils_Tuple2(
      author$project$Article$Feed$Model(model),
      A2(
        elm$core$Task$attempt,
        author$project$Article$Feed$CompletedFavorite,
        elm$http$Http$toTask(A2(toRequest, slug, cred))
      )
    );
  });
  var author$project$Article$Feed$replaceArticle = F2(function(
    newArticle,
    oldArticle
  ) {
    return _Utils_eq(
      author$project$Article$slug(newArticle),
      author$project$Article$slug(oldArticle)
    )
      ? newArticle
      : oldArticle;
  });
  var author$project$PaginatedList$map = F2(function(transform, _n0) {
    var info = _n0.a;
    return author$project$PaginatedList$PaginatedList(
      _Utils_update(info, {
        values: A2(elm$core$List$map, transform, info.values)
      })
    );
  });
  var author$project$Article$Feed$update = F3(function(maybeCred, msg, _n0) {
    var model = _n0.a;
    switch (msg.$) {
      case "ClickedDismissErrors":
        return _Utils_Tuple2(
          author$project$Article$Feed$Model(
            _Utils_update(model, { errors: _List_Nil })
          ),
          elm$core$Platform$Cmd$none
        );
      case "ClickedFavorite":
        var cred = msg.a;
        var slug = msg.b;
        return A4(
          author$project$Article$Feed$fave,
          author$project$Article$favorite,
          cred,
          slug,
          model
        );
      case "ClickedUnfavorite":
        var cred = msg.a;
        var slug = msg.b;
        return A4(
          author$project$Article$Feed$fave,
          author$project$Article$unfavorite,
          cred,
          slug,
          model
        );
      default:
        if (msg.a.$ === "Ok") {
          var article = msg.a.a;
          return _Utils_Tuple2(
            author$project$Article$Feed$Model(
              _Utils_update(model, {
                articles: A2(
                  author$project$PaginatedList$map,
                  author$project$Article$Feed$replaceArticle(article),
                  model.articles
                )
              })
            ),
            elm$core$Platform$Cmd$none
          );
        } else {
          var error = msg.a.a;
          return _Utils_Tuple2(
            author$project$Article$Feed$Model(
              _Utils_update(model, {
                errors: author$project$Api$addServerError(model.errors)
              })
            ),
            elm$core$Platform$Cmd$none
          );
        }
    }
  });
  var author$project$Page$Home$Failed = { $: "Failed" };
  var author$project$Page$Home$GotFeedMsg = function(a) {
    return { $: "GotFeedMsg", a: a };
  };
  var author$project$Page$Home$Loaded = function(a) {
    return { $: "Loaded", a: a };
  };
  var author$project$Page$Home$LoadingSlowly = { $: "LoadingSlowly" };
  var author$project$Page$Home$TagFeed = function(a) {
    return { $: "TagFeed", a: a };
  };
  var elm$browser$Browser$Dom$setViewport = _Browser_setViewport;
  var author$project$Page$Home$scrollToTop = A2(
    elm$core$Task$onError,
    function(_n0) {
      return elm$core$Task$succeed(_Utils_Tuple0);
    },
    A2(elm$browser$Browser$Dom$setViewport, 0, 0)
  );
  var author$project$Page$Home$update = F2(function(msg, model) {
    switch (msg.$) {
      case "ClickedTag":
        var tag = msg.a;
        var feedTab = author$project$Page$Home$TagFeed(tag);
        return _Utils_Tuple2(
          _Utils_update(model, { feedTab: feedTab }),
          A2(
            elm$core$Task$attempt,
            author$project$Page$Home$CompletedFeedLoad,
            A3(author$project$Page$Home$fetchFeed, model.session, feedTab, 1)
          )
        );
      case "ClickedTab":
        var tab = msg.a;
        return _Utils_Tuple2(
          _Utils_update(model, { feedTab: tab }),
          A2(
            elm$core$Task$attempt,
            author$project$Page$Home$CompletedFeedLoad,
            A3(author$project$Page$Home$fetchFeed, model.session, tab, 1)
          )
        );
      case "ClickedFeedPage":
        var page = msg.a;
        return _Utils_Tuple2(
          _Utils_update(model, { feedPage: page }),
          A2(
            elm$core$Task$attempt,
            author$project$Page$Home$CompletedFeedLoad,
            A2(
              elm$core$Task$andThen,
              function(feed) {
                return A2(
                  elm$core$Task$map,
                  function(_n1) {
                    return feed;
                  },
                  author$project$Page$Home$scrollToTop
                );
              },
              A3(
                author$project$Page$Home$fetchFeed,
                model.session,
                model.feedTab,
                page
              )
            )
          )
        );
      case "CompletedFeedLoad":
        if (msg.a.$ === "Ok") {
          var feed = msg.a.a;
          return _Utils_Tuple2(
            _Utils_update(model, {
              feed: author$project$Page$Home$Loaded(feed)
            }),
            elm$core$Platform$Cmd$none
          );
        } else {
          var error = msg.a.a;
          return _Utils_Tuple2(
            _Utils_update(model, { feed: author$project$Page$Home$Failed }),
            elm$core$Platform$Cmd$none
          );
        }
      case "CompletedTagsLoad":
        if (msg.a.$ === "Ok") {
          var tags = msg.a.a;
          return _Utils_Tuple2(
            _Utils_update(model, {
              tags: author$project$Page$Home$Loaded(tags)
            }),
            elm$core$Platform$Cmd$none
          );
        } else {
          var error = msg.a.a;
          return _Utils_Tuple2(
            _Utils_update(model, { tags: author$project$Page$Home$Failed }),
            author$project$Log$error
          );
        }
      case "GotFeedMsg":
        var subMsg = msg.a;
        var _n2 = model.feed;
        switch (_n2.$) {
          case "Loaded":
            var feed = _n2.a;
            var _n3 = A3(
              author$project$Article$Feed$update,
              author$project$Session$cred(model.session),
              subMsg,
              feed
            );
            var newFeed = _n3.a;
            var subCmd = _n3.b;
            return _Utils_Tuple2(
              _Utils_update(model, {
                feed: author$project$Page$Home$Loaded(newFeed)
              }),
              A2(
                elm$core$Platform$Cmd$map,
                author$project$Page$Home$GotFeedMsg,
                subCmd
              )
            );
          case "Loading":
            return _Utils_Tuple2(model, author$project$Log$error);
          case "LoadingSlowly":
            return _Utils_Tuple2(model, author$project$Log$error);
          default:
            return _Utils_Tuple2(model, author$project$Log$error);
        }
      case "GotTimeZone":
        var tz = msg.a;
        return _Utils_Tuple2(
          _Utils_update(model, { timeZone: tz }),
          elm$core$Platform$Cmd$none
        );
      case "GotSession":
        var session = msg.a;
        return _Utils_Tuple2(
          _Utils_update(model, { session: session }),
          elm$core$Platform$Cmd$none
        );
      default:
        var tags = (function() {
          var _n5 = model.tags;
          if (_n5.$ === "Loading") {
            return author$project$Page$Home$LoadingSlowly;
          } else {
            var other = _n5;
            return other;
          }
        })();
        var feed = (function() {
          var _n4 = model.feed;
          if (_n4.$ === "Loading") {
            return author$project$Page$Home$LoadingSlowly;
          } else {
            var other = _n4;
            return other;
          }
        })();
        return _Utils_Tuple2(
          _Utils_update(model, { feed: feed, tags: tags }),
          elm$core$Platform$Cmd$none
        );
    }
  });
  var author$project$Api$fromPair = function(_n0) {
    var field = _n0.a;
    var errors = _n0.b;
    return A2(
      elm$core$List$map,
      function(error) {
        return field + (" " + error);
      },
      errors
    );
  };
  var author$project$Api$errorsDecoder = A2(
    elm$json$Json$Decode$map,
    elm$core$List$concatMap(author$project$Api$fromPair),
    elm$json$Json$Decode$keyValuePairs(
      elm$json$Json$Decode$list(elm$json$Json$Decode$string)
    )
  );
  var elm$core$Result$withDefault = F2(function(def, result) {
    if (result.$ === "Ok") {
      var a = result.a;
      return a;
    } else {
      return def;
    }
  });
  var author$project$Api$decodeErrors = function(error) {
    if (error.$ === "BadStatus") {
      var response = error.a;
      return A2(
        elm$core$Result$withDefault,
        _List_fromArray(["Server error"]),
        A2(
          elm$json$Json$Decode$decodeString,
          A2(
            elm$json$Json$Decode$field,
            "errors",
            author$project$Api$errorsDecoder
          ),
          response.body
        )
      );
    } else {
      var err = error;
      return _List_fromArray(["Server error"]);
    }
  };
  var author$project$Page$Login$CompletedLogin = function(a) {
    return { $: "CompletedLogin", a: a };
  };
  var author$project$Page$Login$ServerError = function(a) {
    return { $: "ServerError", a: a };
  };
  var author$project$Api$Endpoint$login = A2(
    author$project$Api$Endpoint$url,
    _List_fromArray(["users", "login"]),
    _List_Nil
  );
  var author$project$Api$login = F2(function(body, decoder) {
    return A4(
      author$project$Api$post,
      author$project$Api$Endpoint$login,
      elm$core$Maybe$Nothing,
      body,
      A2(
        elm$json$Json$Decode$field,
        "user",
        author$project$Api$decoderFromCred(decoder)
      )
    );
  });
  var author$project$Page$Login$login = function(_n0) {
    var form = _n0.a;
    var user = elm$json$Json$Encode$object(
      _List_fromArray([
        _Utils_Tuple2("email", elm$json$Json$Encode$string(form.email)),
        _Utils_Tuple2("password", elm$json$Json$Encode$string(form.password))
      ])
    );
    var body = elm$http$Http$jsonBody(
      elm$json$Json$Encode$object(
        _List_fromArray([_Utils_Tuple2("user", user)])
      )
    );
    return A2(author$project$Api$login, body, author$project$Viewer$decoder);
  };
  var author$project$Page$Login$updateForm = F2(function(transform, model) {
    return _Utils_Tuple2(
      _Utils_update(model, {
        form: transform(model.form)
      }),
      elm$core$Platform$Cmd$none
    );
  });
  var author$project$Page$Login$Email = { $: "Email" };
  var author$project$Page$Login$Password = { $: "Password" };
  var author$project$Page$Login$fieldsToValidate = _List_fromArray([
    author$project$Page$Login$Email,
    author$project$Page$Login$Password
  ]);
  var author$project$Page$Login$Trimmed = function(a) {
    return { $: "Trimmed", a: a };
  };
  var author$project$Page$Login$trimFields = function(form) {
    return author$project$Page$Login$Trimmed({
      email: elm$core$String$trim(form.email),
      password: elm$core$String$trim(form.password)
    });
  };
  var author$project$Page$Login$InvalidEntry = F2(function(a, b) {
    return { $: "InvalidEntry", a: a, b: b };
  });
  var author$project$Page$Login$validateField = F2(function(_n0, field) {
    var form = _n0.a;
    return A2(
      elm$core$List$map,
      author$project$Page$Login$InvalidEntry(field),
      (function() {
        if (field.$ === "Email") {
          return elm$core$String$isEmpty(form.email)
            ? _List_fromArray(["email can't be blank."])
            : _List_Nil;
        } else {
          return elm$core$String$isEmpty(form.password)
            ? _List_fromArray(["password can't be blank."])
            : _List_Nil;
        }
      })()
    );
  });
  var author$project$Page$Login$validate = function(form) {
    var trimmedForm = author$project$Page$Login$trimFields(form);
    var _n0 = A2(
      elm$core$List$concatMap,
      author$project$Page$Login$validateField(trimmedForm),
      author$project$Page$Login$fieldsToValidate
    );
    if (!_n0.b) {
      return elm$core$Result$Ok(trimmedForm);
    } else {
      var problems = _n0;
      return elm$core$Result$Err(problems);
    }
  };
  var author$project$Avatar$encode = function(_n0) {
    var maybeUrl = _n0.a;
    if (maybeUrl.$ === "Just") {
      var url = maybeUrl.a;
      return elm$json$Json$Encode$string(url);
    } else {
      return elm$json$Json$Encode$null;
    }
  };
  var author$project$Username$encode = function(_n0) {
    var username = _n0.a;
    return elm$json$Json$Encode$string(username);
  };
  var author$project$Api$storeCredWith = F2(function(_n0, avatar) {
    var uname = _n0.a;
    var token = _n0.b;
    var json = elm$json$Json$Encode$object(
      _List_fromArray([
        _Utils_Tuple2(
          "user",
          elm$json$Json$Encode$object(
            _List_fromArray([
              _Utils_Tuple2("username", author$project$Username$encode(uname)),
              _Utils_Tuple2("token", elm$json$Json$Encode$string(token)),
              _Utils_Tuple2("image", author$project$Avatar$encode(avatar))
            ])
          )
        )
      ])
    );
    return author$project$Api$storeCache(elm$core$Maybe$Just(json));
  });
  var author$project$Viewer$store = function(_n0) {
    var avatarVal = _n0.a;
    var credVal = _n0.b;
    return A2(author$project$Api$storeCredWith, credVal, avatarVal);
  };
  var author$project$Page$Login$update = F2(function(msg, model) {
    switch (msg.$) {
      case "SubmittedForm":
        var _n1 = author$project$Page$Login$validate(model.form);
        if (_n1.$ === "Ok") {
          var validForm = _n1.a;
          return _Utils_Tuple2(
            _Utils_update(model, { problems: _List_Nil }),
            A2(
              elm$http$Http$send,
              author$project$Page$Login$CompletedLogin,
              author$project$Page$Login$login(validForm)
            )
          );
        } else {
          var problems = _n1.a;
          return _Utils_Tuple2(
            _Utils_update(model, { problems: problems }),
            elm$core$Platform$Cmd$none
          );
        }
      case "EnteredEmail":
        var email = msg.a;
        return A2(
          author$project$Page$Login$updateForm,
          function(form) {
            return _Utils_update(form, { email: email });
          },
          model
        );
      case "EnteredPassword":
        var password = msg.a;
        return A2(
          author$project$Page$Login$updateForm,
          function(form) {
            return _Utils_update(form, { password: password });
          },
          model
        );
      case "CompletedLogin":
        if (msg.a.$ === "Err") {
          var error = msg.a.a;
          var serverErrors = A2(
            elm$core$List$map,
            author$project$Page$Login$ServerError,
            author$project$Api$decodeErrors(error)
          );
          return _Utils_Tuple2(
            _Utils_update(model, {
              problems: A2(elm$core$List$append, model.problems, serverErrors)
            }),
            elm$core$Platform$Cmd$none
          );
        } else {
          var viewer = msg.a.a;
          return _Utils_Tuple2(model, author$project$Viewer$store(viewer));
        }
      default:
        var session = msg.a;
        return _Utils_Tuple2(
          _Utils_update(model, { session: session }),
          A2(
            author$project$Route$replaceUrl,
            author$project$Session$navKey(session),
            author$project$Route$Home
          )
        );
    }
  });
  var author$project$Page$Profile$CompletedFollowChange = function(a) {
    return { $: "CompletedFollowChange", a: a };
  };
  var author$project$Page$Profile$Failed = function(a) {
    return { $: "Failed", a: a };
  };
  var author$project$Page$Profile$GotFeedMsg = function(a) {
    return { $: "GotFeedMsg", a: a };
  };
  var author$project$Page$Profile$Loaded = function(a) {
    return { $: "Loaded", a: a };
  };
  var author$project$Page$Profile$LoadingSlowly = function(a) {
    return { $: "LoadingSlowly", a: a };
  };
  var author$project$Author$username = function(author) {
    switch (author.$) {
      case "IsViewer":
        var cred = author.a;
        return author$project$Api$username(cred);
      case "IsFollowing":
        var _n1 = author.a;
        var val = _n1.a;
        return val;
      default:
        var _n2 = author.a;
        var val = _n2.a;
        return val;
    }
  };
  var author$project$Page$Profile$currentUsername = function(model) {
    var _n0 = model.author;
    switch (_n0.$) {
      case "Loading":
        var username = _n0.a;
        return username;
      case "LoadingSlowly":
        var username = _n0.a;
        return username;
      case "Loaded":
        var author = _n0.a;
        return author$project$Author$username(author);
      default:
        var username = _n0.a;
        return username;
    }
  };
  var author$project$Page$Profile$update = F2(function(msg, model) {
    switch (msg.$) {
      case "ClickedDismissErrors":
        return _Utils_Tuple2(
          _Utils_update(model, { errors: _List_Nil }),
          elm$core$Platform$Cmd$none
        );
      case "ClickedUnfollow":
        var cred = msg.a;
        var followedAuthor = msg.b;
        return _Utils_Tuple2(
          model,
          A2(
            elm$http$Http$send,
            author$project$Page$Profile$CompletedFollowChange,
            A2(author$project$Author$requestUnfollow, followedAuthor, cred)
          )
        );
      case "ClickedFollow":
        var cred = msg.a;
        var unfollowedAuthor = msg.b;
        return _Utils_Tuple2(
          model,
          A2(
            elm$http$Http$send,
            author$project$Page$Profile$CompletedFollowChange,
            A2(author$project$Author$requestFollow, unfollowedAuthor, cred)
          )
        );
      case "ClickedTab":
        var tab = msg.a;
        return _Utils_Tuple2(
          _Utils_update(model, { feedTab: tab }),
          A4(
            author$project$Page$Profile$fetchFeed,
            model.session,
            tab,
            author$project$Page$Profile$currentUsername(model),
            1
          )
        );
      case "ClickedFeedPage":
        var page = msg.a;
        return _Utils_Tuple2(
          _Utils_update(model, { feedPage: page }),
          A4(
            author$project$Page$Profile$fetchFeed,
            model.session,
            model.feedTab,
            author$project$Page$Profile$currentUsername(model),
            page
          )
        );
      case "CompletedFollowChange":
        if (msg.a.$ === "Ok") {
          var newAuthor = msg.a.a;
          return _Utils_Tuple2(
            _Utils_update(model, {
              author: author$project$Page$Profile$Loaded(newAuthor)
            }),
            elm$core$Platform$Cmd$none
          );
        } else {
          var error = msg.a.a;
          return _Utils_Tuple2(model, author$project$Log$error);
        }
      case "CompletedAuthorLoad":
        if (msg.a.$ === "Ok") {
          var author = msg.a.a;
          return _Utils_Tuple2(
            _Utils_update(model, {
              author: author$project$Page$Profile$Loaded(author)
            }),
            elm$core$Platform$Cmd$none
          );
        } else {
          var _n1 = msg.a.a;
          var username = _n1.a;
          var err = _n1.b;
          return _Utils_Tuple2(
            _Utils_update(model, {
              author: author$project$Page$Profile$Failed(username)
            }),
            author$project$Log$error
          );
        }
      case "CompletedFeedLoad":
        if (msg.a.$ === "Ok") {
          var feed = msg.a.a;
          return _Utils_Tuple2(
            _Utils_update(model, {
              feed: author$project$Page$Profile$Loaded(feed)
            }),
            elm$core$Platform$Cmd$none
          );
        } else {
          var _n2 = msg.a.a;
          var username = _n2.a;
          var err = _n2.b;
          return _Utils_Tuple2(
            _Utils_update(model, {
              feed: author$project$Page$Profile$Failed(username)
            }),
            author$project$Log$error
          );
        }
      case "GotFeedMsg":
        var subMsg = msg.a;
        var _n3 = model.feed;
        switch (_n3.$) {
          case "Loaded":
            var feed = _n3.a;
            var _n4 = A3(
              author$project$Article$Feed$update,
              author$project$Session$cred(model.session),
              subMsg,
              feed
            );
            var newFeed = _n4.a;
            var subCmd = _n4.b;
            return _Utils_Tuple2(
              _Utils_update(model, {
                feed: author$project$Page$Profile$Loaded(newFeed)
              }),
              A2(
                elm$core$Platform$Cmd$map,
                author$project$Page$Profile$GotFeedMsg,
                subCmd
              )
            );
          case "Loading":
            return _Utils_Tuple2(model, author$project$Log$error);
          case "LoadingSlowly":
            return _Utils_Tuple2(model, author$project$Log$error);
          default:
            return _Utils_Tuple2(model, author$project$Log$error);
        }
      case "GotTimeZone":
        var tz = msg.a;
        return _Utils_Tuple2(
          _Utils_update(model, { timeZone: tz }),
          elm$core$Platform$Cmd$none
        );
      case "GotSession":
        var session = msg.a;
        return _Utils_Tuple2(
          _Utils_update(model, { session: session }),
          A2(
            author$project$Route$replaceUrl,
            author$project$Session$navKey(session),
            author$project$Route$Home
          )
        );
      default:
        var feed = (function() {
          var _n5 = model.feed;
          if (_n5.$ === "Loading") {
            var username = _n5.a;
            return author$project$Page$Profile$LoadingSlowly(username);
          } else {
            var other = _n5;
            return other;
          }
        })();
        return _Utils_Tuple2(
          _Utils_update(model, { feed: feed }),
          elm$core$Platform$Cmd$none
        );
    }
  });
  var author$project$Page$Register$CompletedRegister = function(a) {
    return { $: "CompletedRegister", a: a };
  };
  var author$project$Page$Register$ServerError = function(a) {
    return { $: "ServerError", a: a };
  };
  var author$project$Api$Endpoint$users = A2(
    author$project$Api$Endpoint$url,
    _List_fromArray(["users"]),
    _List_Nil
  );
  var author$project$Api$register = F2(function(body, decoder) {
    return A4(
      author$project$Api$post,
      author$project$Api$Endpoint$users,
      elm$core$Maybe$Nothing,
      body,
      A2(
        elm$json$Json$Decode$field,
        "user",
        author$project$Api$decoderFromCred(decoder)
      )
    );
  });
  var author$project$Page$Register$register = function(_n0) {
    var form = _n0.a;
    var user = elm$json$Json$Encode$object(
      _List_fromArray([
        _Utils_Tuple2("username", elm$json$Json$Encode$string(form.username)),
        _Utils_Tuple2("email", elm$json$Json$Encode$string(form.email)),
        _Utils_Tuple2("password", elm$json$Json$Encode$string(form.password))
      ])
    );
    var body = elm$http$Http$jsonBody(
      elm$json$Json$Encode$object(
        _List_fromArray([_Utils_Tuple2("user", user)])
      )
    );
    return A2(author$project$Api$register, body, author$project$Viewer$decoder);
  };
  var author$project$Page$Register$updateForm = F2(function(transform, model) {
    return _Utils_Tuple2(
      _Utils_update(model, {
        form: transform(model.form)
      }),
      elm$core$Platform$Cmd$none
    );
  });
  var author$project$Page$Register$Email = { $: "Email" };
  var author$project$Page$Register$Password = { $: "Password" };
  var author$project$Page$Register$Username = { $: "Username" };
  var author$project$Page$Register$fieldsToValidate = _List_fromArray([
    author$project$Page$Register$Username,
    author$project$Page$Register$Email,
    author$project$Page$Register$Password
  ]);
  var author$project$Page$Register$Trimmed = function(a) {
    return { $: "Trimmed", a: a };
  };
  var author$project$Page$Register$trimFields = function(form) {
    return author$project$Page$Register$Trimmed({
      email: elm$core$String$trim(form.email),
      password: elm$core$String$trim(form.password),
      username: elm$core$String$trim(form.username)
    });
  };
  var author$project$Page$Register$InvalidEntry = F2(function(a, b) {
    return { $: "InvalidEntry", a: a, b: b };
  });
  var author$project$Viewer$minPasswordChars = 6;
  var author$project$Page$Register$validateField = F2(function(_n0, field) {
    var form = _n0.a;
    return A2(
      elm$core$List$map,
      author$project$Page$Register$InvalidEntry(field),
      (function() {
        switch (field.$) {
          case "Username":
            return elm$core$String$isEmpty(form.username)
              ? _List_fromArray(["username can't be blank."])
              : _List_Nil;
          case "Email":
            return elm$core$String$isEmpty(form.email)
              ? _List_fromArray(["email can't be blank."])
              : _List_Nil;
          default:
            return elm$core$String$isEmpty(form.password)
              ? _List_fromArray(["password can't be blank."])
              : _Utils_cmp(
                  elm$core$String$length(form.password),
                  author$project$Viewer$minPasswordChars
                ) < 0
                ? _List_fromArray([
                    "password must be at least " +
                      (elm$core$String$fromInt(
                        author$project$Viewer$minPasswordChars
                      ) +
                        " characters long.")
                  ])
                : _List_Nil;
        }
      })()
    );
  });
  var author$project$Page$Register$validate = function(form) {
    var trimmedForm = author$project$Page$Register$trimFields(form);
    var _n0 = A2(
      elm$core$List$concatMap,
      author$project$Page$Register$validateField(trimmedForm),
      author$project$Page$Register$fieldsToValidate
    );
    if (!_n0.b) {
      return elm$core$Result$Ok(trimmedForm);
    } else {
      var problems = _n0;
      return elm$core$Result$Err(problems);
    }
  };
  var author$project$Page$Register$update = F2(function(msg, model) {
    switch (msg.$) {
      case "SubmittedForm":
        var _n1 = author$project$Page$Register$validate(model.form);
        if (_n1.$ === "Ok") {
          var validForm = _n1.a;
          return _Utils_Tuple2(
            _Utils_update(model, { problems: _List_Nil }),
            A2(
              elm$http$Http$send,
              author$project$Page$Register$CompletedRegister,
              author$project$Page$Register$register(validForm)
            )
          );
        } else {
          var problems = _n1.a;
          return _Utils_Tuple2(
            _Utils_update(model, { problems: problems }),
            elm$core$Platform$Cmd$none
          );
        }
      case "EnteredUsername":
        var username = msg.a;
        return A2(
          author$project$Page$Register$updateForm,
          function(form) {
            return _Utils_update(form, { username: username });
          },
          model
        );
      case "EnteredEmail":
        var email = msg.a;
        return A2(
          author$project$Page$Register$updateForm,
          function(form) {
            return _Utils_update(form, { email: email });
          },
          model
        );
      case "EnteredPassword":
        var password = msg.a;
        return A2(
          author$project$Page$Register$updateForm,
          function(form) {
            return _Utils_update(form, { password: password });
          },
          model
        );
      case "CompletedRegister":
        if (msg.a.$ === "Err") {
          var error = msg.a.a;
          var serverErrors = A2(
            elm$core$List$map,
            author$project$Page$Register$ServerError,
            author$project$Api$decodeErrors(error)
          );
          return _Utils_Tuple2(
            _Utils_update(model, {
              problems: A2(elm$core$List$append, model.problems, serverErrors)
            }),
            elm$core$Platform$Cmd$none
          );
        } else {
          var viewer = msg.a.a;
          return _Utils_Tuple2(model, author$project$Viewer$store(viewer));
        }
      default:
        var session = msg.a;
        return _Utils_Tuple2(
          _Utils_update(model, { session: session }),
          A2(
            author$project$Route$replaceUrl,
            author$project$Session$navKey(session),
            author$project$Route$Home
          )
        );
    }
  });
  var author$project$Page$Settings$CompletedSave = function(a) {
    return { $: "CompletedSave", a: a };
  };
  var author$project$Page$Settings$Failed = { $: "Failed" };
  var author$project$Page$Settings$Loaded = function(a) {
    return { $: "Loaded", a: a };
  };
  var author$project$Page$Settings$LoadingSlowly = { $: "LoadingSlowly" };
  var author$project$Page$Settings$ServerError = function(a) {
    return { $: "ServerError", a: a };
  };
  var author$project$Api$settings = F3(function(cred, body, decoder) {
    return A4(
      author$project$Api$put,
      author$project$Api$Endpoint$user,
      cred,
      body,
      A2(
        elm$json$Json$Decode$field,
        "user",
        author$project$Api$decoderFromCred(decoder)
      )
    );
  });
  var author$project$Page$Settings$edit = F2(function(cred, _n0) {
    var form = _n0.a;
    var encodedAvatar = (function() {
      var _n2 = form.avatar;
      if (_n2 === "") {
        return elm$json$Json$Encode$null;
      } else {
        var avatar = _n2;
        return elm$json$Json$Encode$string(avatar);
      }
    })();
    var updates = _List_fromArray([
      _Utils_Tuple2("username", elm$json$Json$Encode$string(form.username)),
      _Utils_Tuple2("email", elm$json$Json$Encode$string(form.email)),
      _Utils_Tuple2("bio", elm$json$Json$Encode$string(form.bio)),
      _Utils_Tuple2("image", encodedAvatar)
    ]);
    var encodedUser = elm$json$Json$Encode$object(
      (function() {
        var _n1 = form.password;
        if (_n1 === "") {
          return updates;
        } else {
          var password = _n1;
          return A2(
            elm$core$List$cons,
            _Utils_Tuple2("password", elm$json$Json$Encode$string(password)),
            updates
          );
        }
      })()
    );
    var body = elm$http$Http$jsonBody(
      elm$json$Json$Encode$object(
        _List_fromArray([_Utils_Tuple2("user", encodedUser)])
      )
    );
    return A3(
      author$project$Api$settings,
      cred,
      body,
      author$project$Viewer$decoder
    );
  });
  var author$project$Page$Settings$updateForm = F2(function(transform, model) {
    var _n0 = model.status;
    if (_n0.$ === "Loaded") {
      var form = _n0.a;
      return _Utils_Tuple2(
        _Utils_update(model, {
          status: author$project$Page$Settings$Loaded(transform(form))
        }),
        elm$core$Platform$Cmd$none
      );
    } else {
      return _Utils_Tuple2(model, author$project$Log$error);
    }
  });
  var author$project$Page$Settings$Email = { $: "Email" };
  var author$project$Page$Settings$Password = { $: "Password" };
  var author$project$Page$Settings$Username = { $: "Username" };
  var author$project$Page$Settings$fieldsToValidate = _List_fromArray([
    author$project$Page$Settings$Username,
    author$project$Page$Settings$Email,
    author$project$Page$Settings$Password
  ]);
  var author$project$Page$Settings$Trimmed = function(a) {
    return { $: "Trimmed", a: a };
  };
  var author$project$Page$Settings$trimFields = function(form) {
    return author$project$Page$Settings$Trimmed({
      avatar: elm$core$String$trim(form.avatar),
      bio: elm$core$String$trim(form.bio),
      email: elm$core$String$trim(form.email),
      password: elm$core$String$trim(form.password),
      username: elm$core$String$trim(form.username)
    });
  };
  var author$project$Page$Settings$InvalidEntry = F2(function(a, b) {
    return { $: "InvalidEntry", a: a, b: b };
  });
  var author$project$Page$Settings$validateField = F2(function(_n0, field) {
    var form = _n0.a;
    return A2(
      elm$core$List$map,
      author$project$Page$Settings$InvalidEntry(field),
      (function() {
        switch (field.$) {
          case "Username":
            return elm$core$String$isEmpty(form.username)
              ? _List_fromArray(["username can't be blank."])
              : _List_Nil;
          case "Email":
            return elm$core$String$isEmpty(form.email)
              ? _List_fromArray(["email can't be blank."])
              : _List_Nil;
          default:
            var passwordLength = elm$core$String$length(form.password);
            return passwordLength > 0 &&
              _Utils_cmp(
                passwordLength,
                author$project$Viewer$minPasswordChars
              ) < 0
              ? _List_fromArray([
                  "password must be at least " +
                    (elm$core$String$fromInt(
                      author$project$Viewer$minPasswordChars
                    ) +
                      " characters long.")
                ])
              : _List_Nil;
        }
      })()
    );
  });
  var author$project$Page$Settings$validate = function(form) {
    var trimmedForm = author$project$Page$Settings$trimFields(form);
    var _n0 = A2(
      elm$core$List$concatMap,
      author$project$Page$Settings$validateField(trimmedForm),
      author$project$Page$Settings$fieldsToValidate
    );
    if (!_n0.b) {
      return elm$core$Result$Ok(trimmedForm);
    } else {
      var problems = _n0;
      return elm$core$Result$Err(problems);
    }
  };
  var author$project$Page$Settings$update = F2(function(msg, model) {
    switch (msg.$) {
      case "CompletedFormLoad":
        if (msg.a.$ === "Ok") {
          var form = msg.a.a;
          return _Utils_Tuple2(
            _Utils_update(model, {
              status: author$project$Page$Settings$Loaded(form)
            }),
            elm$core$Platform$Cmd$none
          );
        } else {
          return _Utils_Tuple2(
            _Utils_update(model, {
              status: author$project$Page$Settings$Failed
            }),
            elm$core$Platform$Cmd$none
          );
        }
      case "SubmittedForm":
        var cred = msg.a;
        var form = msg.b;
        var _n1 = author$project$Page$Settings$validate(form);
        if (_n1.$ === "Ok") {
          var validForm = _n1.a;
          return _Utils_Tuple2(
            _Utils_update(model, {
              status: author$project$Page$Settings$Loaded(form)
            }),
            A2(
              elm$http$Http$send,
              author$project$Page$Settings$CompletedSave,
              A2(author$project$Page$Settings$edit, cred, validForm)
            )
          );
        } else {
          var problems = _n1.a;
          return _Utils_Tuple2(
            _Utils_update(model, { problems: problems }),
            elm$core$Platform$Cmd$none
          );
        }
      case "EnteredEmail":
        var email = msg.a;
        return A2(
          author$project$Page$Settings$updateForm,
          function(form) {
            return _Utils_update(form, { email: email });
          },
          model
        );
      case "EnteredUsername":
        var username = msg.a;
        return A2(
          author$project$Page$Settings$updateForm,
          function(form) {
            return _Utils_update(form, { username: username });
          },
          model
        );
      case "EnteredPassword":
        var password = msg.a;
        return A2(
          author$project$Page$Settings$updateForm,
          function(form) {
            return _Utils_update(form, { password: password });
          },
          model
        );
      case "EnteredBio":
        var bio = msg.a;
        return A2(
          author$project$Page$Settings$updateForm,
          function(form) {
            return _Utils_update(form, { bio: bio });
          },
          model
        );
      case "EnteredAvatar":
        var avatar = msg.a;
        return A2(
          author$project$Page$Settings$updateForm,
          function(form) {
            return _Utils_update(form, { avatar: avatar });
          },
          model
        );
      case "CompletedSave":
        if (msg.a.$ === "Err") {
          var error = msg.a.a;
          var serverErrors = A2(
            elm$core$List$map,
            author$project$Page$Settings$ServerError,
            author$project$Api$decodeErrors(error)
          );
          return _Utils_Tuple2(
            _Utils_update(model, {
              problems: A2(elm$core$List$append, model.problems, serverErrors)
            }),
            elm$core$Platform$Cmd$none
          );
        } else {
          var viewer = msg.a.a;
          return _Utils_Tuple2(model, author$project$Viewer$store(viewer));
        }
      case "GotSession":
        var session = msg.a;
        return _Utils_Tuple2(
          _Utils_update(model, { session: session }),
          A2(
            author$project$Route$replaceUrl,
            author$project$Session$navKey(session),
            author$project$Route$Home
          )
        );
      default:
        var _n2 = model.status;
        if (_n2.$ === "Loading") {
          return _Utils_Tuple2(
            _Utils_update(model, {
              status: author$project$Page$Settings$LoadingSlowly
            }),
            elm$core$Platform$Cmd$none
          );
        } else {
          return _Utils_Tuple2(model, elm$core$Platform$Cmd$none);
        }
    }
  });
  var elm$browser$Browser$Navigation$load = _Browser_load;
  var elm$browser$Browser$Navigation$pushUrl = _Browser_pushUrl;
  var elm$url$Url$addPort = F2(function(maybePort, starter) {
    if (maybePort.$ === "Nothing") {
      return starter;
    } else {
      var port_ = maybePort.a;
      return starter + (":" + elm$core$String$fromInt(port_));
    }
  });
  var elm$url$Url$addPrefixed = F3(function(prefix, maybeSegment, starter) {
    if (maybeSegment.$ === "Nothing") {
      return starter;
    } else {
      var segment = maybeSegment.a;
      return _Utils_ap(starter, _Utils_ap(prefix, segment));
    }
  });
  var elm$url$Url$toString = function(url) {
    var http = (function() {
      var _n0 = url.protocol;
      if (_n0.$ === "Http") {
        return "http://";
      } else {
        return "https://";
      }
    })();
    return A3(
      elm$url$Url$addPrefixed,
      "#",
      url.fragment,
      A3(
        elm$url$Url$addPrefixed,
        "?",
        url.query,
        _Utils_ap(
          A2(elm$url$Url$addPort, url.port_, _Utils_ap(http, url.host)),
          url.path
        )
      )
    );
  };
  var author$project$Main$update = F2(function(msg, model) {
    var _n0 = _Utils_Tuple2(msg, model);
    _n0$12: while (true) {
      switch (_n0.a.$) {
        case "Ignored":
          var _n1 = _n0.a;
          return _Utils_Tuple2(model, elm$core$Platform$Cmd$none);
        case "ClickedLink":
          var urlRequest = _n0.a.a;
          if (urlRequest.$ === "Internal") {
            var url = urlRequest.a;
            var _n3 = url.fragment;
            if (_n3.$ === "Nothing") {
              return _Utils_Tuple2(model, elm$core$Platform$Cmd$none);
            } else {
              return _Utils_Tuple2(
                model,
                A2(
                  elm$browser$Browser$Navigation$pushUrl,
                  author$project$Session$navKey(
                    author$project$Main$toSession(model)
                  ),
                  elm$url$Url$toString(url)
                )
              );
            }
          } else {
            var href = urlRequest.a;
            return _Utils_Tuple2(
              model,
              elm$browser$Browser$Navigation$load(href)
            );
          }
        case "ChangedUrl":
          var url = _n0.a.a;
          return A2(
            author$project$Main$changeRouteTo,
            author$project$Route$fromUrl(url),
            model
          );
        case "ChangedRoute":
          var route = _n0.a.a;
          return A2(author$project$Main$changeRouteTo, route, model);
        case "GotSettingsMsg":
          if (_n0.b.$ === "Settings") {
            var subMsg = _n0.a.a;
            var settings = _n0.b.a;
            return A4(
              author$project$Main$updateWith,
              author$project$Main$Settings,
              author$project$Main$GotSettingsMsg,
              model,
              A2(author$project$Page$Settings$update, subMsg, settings)
            );
          } else {
            break _n0$12;
          }
        case "GotLoginMsg":
          if (_n0.b.$ === "Login") {
            var subMsg = _n0.a.a;
            var login = _n0.b.a;
            return A4(
              author$project$Main$updateWith,
              author$project$Main$Login,
              author$project$Main$GotLoginMsg,
              model,
              A2(author$project$Page$Login$update, subMsg, login)
            );
          } else {
            break _n0$12;
          }
        case "GotRegisterMsg":
          if (_n0.b.$ === "Register") {
            var subMsg = _n0.a.a;
            var register = _n0.b.a;
            return A4(
              author$project$Main$updateWith,
              author$project$Main$Register,
              author$project$Main$GotRegisterMsg,
              model,
              A2(author$project$Page$Register$update, subMsg, register)
            );
          } else {
            break _n0$12;
          }
        case "GotHomeMsg":
          if (_n0.b.$ === "Home") {
            var subMsg = _n0.a.a;
            var home = _n0.b.a;
            return A4(
              author$project$Main$updateWith,
              author$project$Main$Home,
              author$project$Main$GotHomeMsg,
              model,
              A2(author$project$Page$Home$update, subMsg, home)
            );
          } else {
            break _n0$12;
          }
        case "GotProfileMsg":
          if (_n0.b.$ === "Profile") {
            var subMsg = _n0.a.a;
            var _n4 = _n0.b;
            var username = _n4.a;
            var profile = _n4.b;
            return A4(
              author$project$Main$updateWith,
              author$project$Main$Profile(username),
              author$project$Main$GotProfileMsg,
              model,
              A2(author$project$Page$Profile$update, subMsg, profile)
            );
          } else {
            break _n0$12;
          }
        case "GotArticleMsg":
          if (_n0.b.$ === "Article") {
            var subMsg = _n0.a.a;
            var article = _n0.b.a;
            return A4(
              author$project$Main$updateWith,
              author$project$Main$Article,
              author$project$Main$GotArticleMsg,
              model,
              A2(author$project$Page$Article$update, subMsg, article)
            );
          } else {
            break _n0$12;
          }
        case "GotEditorMsg":
          if (_n0.b.$ === "Editor") {
            var subMsg = _n0.a.a;
            var _n5 = _n0.b;
            var slug = _n5.a;
            var editor = _n5.b;
            return A4(
              author$project$Main$updateWith,
              author$project$Main$Editor(slug),
              author$project$Main$GotEditorMsg,
              model,
              A2(author$project$Page$Article$Editor$update, subMsg, editor)
            );
          } else {
            break _n0$12;
          }
        default:
          if (_n0.b.$ === "Redirect") {
            var session = _n0.a.a;
            return _Utils_Tuple2(
              author$project$Main$Redirect(session),
              A2(
                author$project$Route$replaceUrl,
                author$project$Session$navKey(session),
                author$project$Route$Home
              )
            );
          } else {
            break _n0$12;
          }
      }
    }
    return _Utils_Tuple2(model, elm$core$Platform$Cmd$none);
  });
  var author$project$Main$Ignored = { $: "Ignored" };
  var author$project$Page$Home = { $: "Home" };
  var author$project$Page$NewArticle = { $: "NewArticle" };
  var author$project$Page$Other = { $: "Other" };
  var author$project$Page$Profile = function(a) {
    return { $: "Profile", a: a };
  };
  var elm$html$Html$footer = _VirtualDom_node("footer");
  var author$project$Page$viewFooter = A2(
    elm$html$Html$footer,
    _List_Nil,
    _List_fromArray([
      A2(
        elm$html$Html$div,
        _List_fromArray([elm$html$Html$Attributes$class("container")]),
        _List_fromArray([
          A2(
            elm$html$Html$a,
            _List_fromArray([
              elm$html$Html$Attributes$class("logo-font"),
              elm$html$Html$Attributes$href("/")
            ]),
            _List_fromArray([elm$html$Html$text("conduit")])
          ),
          A2(
            elm$html$Html$span,
            _List_fromArray([elm$html$Html$Attributes$class("attribution")]),
            _List_fromArray([
              elm$html$Html$text("An interactive learning project from "),
              A2(
                elm$html$Html$a,
                _List_fromArray([
                  elm$html$Html$Attributes$href("https://thinkster.io")
                ]),
                _List_fromArray([elm$html$Html$text("Thinkster")])
              ),
              elm$html$Html$text(". Code & design licensed under MIT.")
            ])
          )
        ])
      )
    ])
  );
  var author$project$Page$isActive = F2(function(page, route) {
    var _n0 = _Utils_Tuple2(page, route);
    _n0$6: while (true) {
      switch (_n0.a.$) {
        case "Home":
          if (_n0.b.$ === "Home") {
            var _n1 = _n0.a;
            var _n2 = _n0.b;
            return true;
          } else {
            break _n0$6;
          }
        case "Login":
          if (_n0.b.$ === "Login") {
            var _n3 = _n0.a;
            var _n4 = _n0.b;
            return true;
          } else {
            break _n0$6;
          }
        case "Register":
          if (_n0.b.$ === "Register") {
            var _n5 = _n0.a;
            var _n6 = _n0.b;
            return true;
          } else {
            break _n0$6;
          }
        case "Settings":
          if (_n0.b.$ === "Settings") {
            var _n7 = _n0.a;
            var _n8 = _n0.b;
            return true;
          } else {
            break _n0$6;
          }
        case "Profile":
          if (_n0.b.$ === "Profile") {
            var pageUsername = _n0.a.a;
            var routeUsername = _n0.b.a;
            return _Utils_eq(pageUsername, routeUsername);
          } else {
            break _n0$6;
          }
        case "NewArticle":
          if (_n0.b.$ === "NewArticle") {
            var _n9 = _n0.a;
            var _n10 = _n0.b;
            return true;
          } else {
            break _n0$6;
          }
        default:
          break _n0$6;
      }
    }
    return false;
  });
  var author$project$Route$href = function(targetRoute) {
    return elm$html$Html$Attributes$href(
      author$project$Route$routeToString(targetRoute)
    );
  };
  var elm$html$Html$Attributes$classList = function(classes) {
    return elm$html$Html$Attributes$class(
      A2(
        elm$core$String$join,
        " ",
        A2(
          elm$core$List$map,
          elm$core$Tuple$first,
          A2(elm$core$List$filter, elm$core$Tuple$second, classes)
        )
      )
    );
  };
  var author$project$Page$navbarLink = F3(function(page, route, linkContent) {
    return A2(
      elm$html$Html$li,
      _List_fromArray([
        elm$html$Html$Attributes$classList(
          _List_fromArray([
            _Utils_Tuple2("nav-item", true),
            _Utils_Tuple2(
              "active",
              A2(author$project$Page$isActive, page, route)
            )
          ])
        )
      ]),
      _List_fromArray([
        A2(
          elm$html$Html$a,
          _List_fromArray([
            elm$html$Html$Attributes$class("nav-link"),
            author$project$Route$href(route)
          ]),
          linkContent
        )
      ])
    );
  });
  var author$project$Asset$Image = function(a) {
    return { $: "Image", a: a };
  };
  var author$project$Asset$image = function(filename) {
    return author$project$Asset$Image("/assets/images/" + filename);
  };
  var author$project$Asset$defaultAvatar = author$project$Asset$image(
    "smiley-cyrus.jpg"
  );
  var elm$html$Html$Attributes$src = function(url) {
    return A2(
      elm$html$Html$Attributes$stringProperty,
      "src",
      _VirtualDom_noJavaScriptOrHtmlUri(url)
    );
  };
  var author$project$Asset$src = function(_n0) {
    var url = _n0.a;
    return elm$html$Html$Attributes$src(url);
  };
  var author$project$Avatar$src = function(_n0) {
    var maybeUrl = _n0.a;
    if (maybeUrl.$ === "Nothing") {
      return author$project$Asset$src(author$project$Asset$defaultAvatar);
    } else {
      if (maybeUrl.a === "") {
        return author$project$Asset$src(author$project$Asset$defaultAvatar);
      } else {
        var url = maybeUrl.a;
        return elm$html$Html$Attributes$src(url);
      }
    }
  };
  var author$project$Username$toHtml = function(_n0) {
    var username = _n0.a;
    return elm$html$Html$text(username);
  };
  var author$project$Viewer$avatar = function(_n0) {
    var val = _n0.a;
    return val;
  };
  var author$project$Viewer$username = function(_n0) {
    var val = _n0.b;
    return author$project$Api$username(val);
  };
  var elm$html$Html$i = _VirtualDom_node("i");
  var elm$html$Html$img = _VirtualDom_node("img");
  var author$project$Page$viewMenu = F2(function(page, maybeViewer) {
    var linkTo = author$project$Page$navbarLink(page);
    if (maybeViewer.$ === "Just") {
      var viewer = maybeViewer.a;
      var username = author$project$Viewer$username(viewer);
      var avatar = author$project$Viewer$avatar(viewer);
      return _List_fromArray([
        A2(
          linkTo,
          author$project$Route$NewArticle,
          _List_fromArray([
            A2(
              elm$html$Html$i,
              _List_fromArray([elm$html$Html$Attributes$class("ion-compose")]),
              _List_Nil
            ),
            elm$html$Html$text("\u00a0New Post")
          ])
        ),
        A2(
          linkTo,
          author$project$Route$Settings,
          _List_fromArray([
            A2(
              elm$html$Html$i,
              _List_fromArray([elm$html$Html$Attributes$class("ion-gear-a")]),
              _List_Nil
            ),
            elm$html$Html$text("\u00a0Settings")
          ])
        ),
        A2(
          linkTo,
          author$project$Route$Profile(username),
          _List_fromArray([
            A2(
              elm$html$Html$img,
              _List_fromArray([
                elm$html$Html$Attributes$class("user-pic"),
                author$project$Avatar$src(avatar)
              ]),
              _List_Nil
            ),
            author$project$Username$toHtml(username)
          ])
        ),
        A2(
          linkTo,
          author$project$Route$Logout,
          _List_fromArray([elm$html$Html$text("Sign out")])
        )
      ]);
    } else {
      return _List_fromArray([
        A2(
          linkTo,
          author$project$Route$Login,
          _List_fromArray([elm$html$Html$text("Sign in")])
        ),
        A2(
          linkTo,
          author$project$Route$Register,
          _List_fromArray([elm$html$Html$text("Sign up")])
        )
      ]);
    }
  });
  var elm$html$Html$nav = _VirtualDom_node("nav");
  var author$project$Page$viewHeader = F2(function(page, maybeViewer) {
    return A2(
      elm$html$Html$nav,
      _List_fromArray([elm$html$Html$Attributes$class("navbar navbar-light")]),
      _List_fromArray([
        A2(
          elm$html$Html$div,
          _List_fromArray([elm$html$Html$Attributes$class("container")]),
          _List_fromArray([
            A2(
              elm$html$Html$a,
              _List_fromArray([
                elm$html$Html$Attributes$class("navbar-brand"),
                author$project$Route$href(author$project$Route$Home)
              ]),
              _List_fromArray([elm$html$Html$text("conduit")])
            ),
            A2(
              elm$html$Html$ul,
              _List_fromArray([
                elm$html$Html$Attributes$class("nav navbar-nav pull-xs-right")
              ]),
              A2(
                elm$core$List$cons,
                A3(
                  author$project$Page$navbarLink,
                  page,
                  author$project$Route$Home,
                  _List_fromArray([elm$html$Html$text("Home")])
                ),
                A2(author$project$Page$viewMenu, page, maybeViewer)
              )
            )
          ])
        )
      ])
    );
  });
  var author$project$Page$view = F3(function(maybeViewer, page, _n0) {
    var title = _n0.title;
    var content = _n0.content;
    return {
      body: A2(
        elm$core$List$cons,
        A2(author$project$Page$viewHeader, page, maybeViewer),
        A2(
          elm$core$List$cons,
          content,
          _List_fromArray([author$project$Page$viewFooter])
        )
      ),
      title: title + " - Conduit"
    };
  });
  var author$project$Article$author = function(_n0) {
    var internals = _n0.a;
    return internals.author;
  };
  var elm_explorations$markdown$Markdown$defaultOptions = {
    defaultHighlighting: elm$core$Maybe$Nothing,
    githubFlavored: elm$core$Maybe$Just({ breaks: false, tables: false }),
    sanitize: true,
    smartypants: false
  };
  var elm_explorations$markdown$Markdown$toHtmlWith = _Markdown_toHtml;
  var elm_explorations$markdown$Markdown$toHtml = elm_explorations$markdown$Markdown$toHtmlWith(
    elm_explorations$markdown$Markdown$defaultOptions
  );
  var author$project$Article$Body$toHtml = F2(function(_n0, attributes) {
    var markdown = _n0.a;
    return A2(elm_explorations$markdown$Markdown$toHtml, attributes, markdown);
  });
  var author$project$Author$profile = function(author) {
    switch (author.$) {
      case "IsViewer":
        var val = author.b;
        return val;
      case "IsFollowing":
        var _n1 = author.a;
        var val = _n1.b;
        return val;
      default:
        var _n2 = author.a;
        var val = _n2.b;
        return val;
    }
  };
  var author$project$Author$view = function(uname) {
    return A2(
      elm$html$Html$a,
      _List_fromArray([
        elm$html$Html$Attributes$class("author"),
        author$project$Route$href(author$project$Route$Profile(uname))
      ]),
      _List_fromArray([author$project$Username$toHtml(uname)])
    );
  };
  var author$project$Loading$error = function(str) {
    return elm$html$Html$text("Error loading " + (str + "."));
  };
  var author$project$Asset$loading = author$project$Asset$image("loading.svg");
  var elm$html$Html$Attributes$alt = elm$html$Html$Attributes$stringProperty(
    "alt"
  );
  var elm$html$Html$Attributes$height = function(n) {
    return A2(_VirtualDom_attribute, "height", elm$core$String$fromInt(n));
  };
  var elm$html$Html$Attributes$width = function(n) {
    return A2(_VirtualDom_attribute, "width", elm$core$String$fromInt(n));
  };
  var author$project$Loading$icon = A2(
    elm$html$Html$img,
    _List_fromArray([
      author$project$Asset$src(author$project$Asset$loading),
      elm$html$Html$Attributes$width(64),
      elm$html$Html$Attributes$height(64),
      elm$html$Html$Attributes$alt("Loading...")
    ]),
    _List_Nil
  );
  var author$project$Page$viewErrors = F2(function(dismissErrors, errors) {
    return elm$core$List$isEmpty(errors)
      ? elm$html$Html$text("")
      : A2(
          elm$html$Html$div,
          _List_fromArray([
            elm$html$Html$Attributes$class("error-messages"),
            A2(elm$html$Html$Attributes$style, "position", "fixed"),
            A2(elm$html$Html$Attributes$style, "top", "0"),
            A2(
              elm$html$Html$Attributes$style,
              "background",
              "rgb(250, 250, 250)"
            ),
            A2(elm$html$Html$Attributes$style, "padding", "20px"),
            A2(elm$html$Html$Attributes$style, "border", "1px solid")
          ]),
          _Utils_ap(
            A2(
              elm$core$List$map,
              function(error) {
                return A2(
                  elm$html$Html$p,
                  _List_Nil,
                  _List_fromArray([elm$html$Html$text(error)])
                );
              },
              errors
            ),
            _List_fromArray([
              A2(
                elm$html$Html$button,
                _List_fromArray([elm$html$Html$Events$onClick(dismissErrors)]),
                _List_fromArray([elm$html$Html$text("Ok")])
              )
            ])
          )
        );
  });
  var author$project$Page$Article$ClickedDismissErrors = {
    $: "ClickedDismissErrors"
  };
  var author$project$Page$Article$ClickedPostComment = F2(function(a, b) {
    return { $: "ClickedPostComment", a: a, b: b };
  });
  var author$project$Page$Article$EnteredCommentText = function(a) {
    return { $: "EnteredCommentText", a: a };
  };
  var elm$html$Html$form = _VirtualDom_node("form");
  var elm$html$Html$textarea = _VirtualDom_node("textarea");
  var elm$virtual_dom$VirtualDom$attribute = F2(function(key, value) {
    return A2(
      _VirtualDom_attribute,
      _VirtualDom_noOnOrFormAction(key),
      _VirtualDom_noJavaScriptOrHtmlUri(value)
    );
  });
  var elm$html$Html$Attributes$attribute = elm$virtual_dom$VirtualDom$attribute;
  var elm$json$Json$Encode$bool = _Json_wrap;
  var elm$html$Html$Attributes$boolProperty = F2(function(key, bool) {
    return A2(_VirtualDom_property, key, elm$json$Json$Encode$bool(bool));
  });
  var elm$html$Html$Attributes$disabled = elm$html$Html$Attributes$boolProperty(
    "disabled"
  );
  var elm$html$Html$Attributes$placeholder = elm$html$Html$Attributes$stringProperty(
    "placeholder"
  );
  var elm$html$Html$Attributes$value = elm$html$Html$Attributes$stringProperty(
    "value"
  );
  var elm$html$Html$Events$alwaysStop = function(x) {
    return _Utils_Tuple2(x, true);
  };
  var elm$virtual_dom$VirtualDom$MayStopPropagation = function(a) {
    return { $: "MayStopPropagation", a: a };
  };
  var elm$html$Html$Events$stopPropagationOn = F2(function(event, decoder) {
    return A2(
      elm$virtual_dom$VirtualDom$on,
      event,
      elm$virtual_dom$VirtualDom$MayStopPropagation(decoder)
    );
  });
  var elm$json$Json$Decode$at = F2(function(fields, decoder) {
    return A3(elm$core$List$foldr, elm$json$Json$Decode$field, decoder, fields);
  });
  var elm$html$Html$Events$targetValue = A2(
    elm$json$Json$Decode$at,
    _List_fromArray(["target", "value"]),
    elm$json$Json$Decode$string
  );
  var elm$html$Html$Events$onInput = function(tagger) {
    return A2(
      elm$html$Html$Events$stopPropagationOn,
      "input",
      A2(
        elm$json$Json$Decode$map,
        elm$html$Html$Events$alwaysStop,
        A2(elm$json$Json$Decode$map, tagger, elm$html$Html$Events$targetValue)
      )
    );
  };
  var elm$html$Html$Events$alwaysPreventDefault = function(msg) {
    return _Utils_Tuple2(msg, true);
  };
  var elm$virtual_dom$VirtualDom$MayPreventDefault = function(a) {
    return { $: "MayPreventDefault", a: a };
  };
  var elm$html$Html$Events$preventDefaultOn = F2(function(event, decoder) {
    return A2(
      elm$virtual_dom$VirtualDom$on,
      event,
      elm$virtual_dom$VirtualDom$MayPreventDefault(decoder)
    );
  });
  var elm$html$Html$Events$onSubmit = function(msg) {
    return A2(
      elm$html$Html$Events$preventDefaultOn,
      "submit",
      A2(
        elm$json$Json$Decode$map,
        elm$html$Html$Events$alwaysPreventDefault,
        elm$json$Json$Decode$succeed(msg)
      )
    );
  };
  var author$project$Page$Article$viewAddComment = F3(function(
    slug,
    commentText,
    maybeViewer
  ) {
    if (maybeViewer.$ === "Just") {
      var viewer = maybeViewer.a;
      var cred = author$project$Viewer$cred(viewer);
      var avatar = author$project$Viewer$avatar(viewer);
      var _n1 = (function() {
        if (commentText.$ === "Editing") {
          var str = commentText.a;
          return _Utils_Tuple2(str, _List_Nil);
        } else {
          var str = commentText.a;
          return _Utils_Tuple2(
            str,
            _List_fromArray([elm$html$Html$Attributes$disabled(true)])
          );
        }
      })();
      var commentStr = _n1.a;
      var buttonAttrs = _n1.b;
      return A2(
        elm$html$Html$form,
        _List_fromArray([
          elm$html$Html$Attributes$class("card comment-form"),
          elm$html$Html$Events$onSubmit(
            A2(author$project$Page$Article$ClickedPostComment, cred, slug)
          )
        ]),
        _List_fromArray([
          A2(
            elm$html$Html$div,
            _List_fromArray([elm$html$Html$Attributes$class("card-block")]),
            _List_fromArray([
              A2(
                elm$html$Html$textarea,
                _List_fromArray([
                  elm$html$Html$Attributes$class("form-control"),
                  elm$html$Html$Attributes$placeholder("Write a comment..."),
                  A2(elm$html$Html$Attributes$attribute, "rows", "3"),
                  elm$html$Html$Events$onInput(
                    author$project$Page$Article$EnteredCommentText
                  ),
                  elm$html$Html$Attributes$value(commentStr)
                ]),
                _List_Nil
              )
            ])
          ),
          A2(
            elm$html$Html$div,
            _List_fromArray([elm$html$Html$Attributes$class("card-footer")]),
            _List_fromArray([
              A2(
                elm$html$Html$img,
                _List_fromArray([
                  elm$html$Html$Attributes$class("comment-author-img"),
                  author$project$Avatar$src(avatar)
                ]),
                _List_Nil
              ),
              A2(
                elm$html$Html$button,
                A2(
                  elm$core$List$cons,
                  elm$html$Html$Attributes$class("btn btn-sm btn-primary"),
                  buttonAttrs
                ),
                _List_fromArray([elm$html$Html$text("Post Comment")])
              )
            ])
          )
        ])
      );
    } else {
      return A2(
        elm$html$Html$p,
        _List_Nil,
        _List_fromArray([
          A2(
            elm$html$Html$a,
            _List_fromArray([
              author$project$Route$href(author$project$Route$Login)
            ]),
            _List_fromArray([elm$html$Html$text("Sign in")])
          ),
          elm$html$Html$text(" or "),
          A2(
            elm$html$Html$a,
            _List_fromArray([
              author$project$Route$href(author$project$Route$Register)
            ]),
            _List_fromArray([elm$html$Html$text("sign up")])
          ),
          elm$html$Html$text(" to comment.")
        ])
      );
    }
  });
  var author$project$Author$toggleFollowButton = F4(function(
    txt,
    extraClasses,
    msgWhenClicked,
    uname
  ) {
    var classStr =
      "btn btn-sm " +
      (A2(elm$core$String$join, " ", extraClasses) + " action-btn");
    var caption =
      "\u00a0" + (txt + (" " + author$project$Username$toString(uname)));
    return A2(
      elm$html$Html$button,
      _List_fromArray([
        elm$html$Html$Attributes$class(classStr),
        elm$html$Html$Events$onClick(msgWhenClicked)
      ]),
      _List_fromArray([
        A2(
          elm$html$Html$i,
          _List_fromArray([elm$html$Html$Attributes$class("ion-plus-round")]),
          _List_Nil
        ),
        elm$html$Html$text(caption)
      ])
    );
  });
  var author$project$Author$followButton = F3(function(toMsg, cred, author) {
    var uname = author.a;
    return A4(
      author$project$Author$toggleFollowButton,
      "Follow",
      _List_fromArray(["btn-outline-secondary"]),
      A2(toMsg, cred, author),
      uname
    );
  });
  var author$project$Author$unfollowButton = F3(function(toMsg, cred, author) {
    var uname = author.a;
    return A4(
      author$project$Author$toggleFollowButton,
      "Unfollow",
      _List_fromArray(["btn-secondary"]),
      A2(toMsg, cred, author),
      uname
    );
  });
  var author$project$Page$Article$ClickedFollow = F2(function(a, b) {
    return { $: "ClickedFollow", a: a, b: b };
  });
  var author$project$Page$Article$ClickedUnfollow = F2(function(a, b) {
    return { $: "ClickedUnfollow", a: a, b: b };
  });
  var author$project$Page$Article$ClickedDeleteArticle = F2(function(a, b) {
    return { $: "ClickedDeleteArticle", a: a, b: b };
  });
  var author$project$Page$Article$deleteButton = F2(function(cred, article) {
    var msg = A2(
      author$project$Page$Article$ClickedDeleteArticle,
      cred,
      author$project$Article$slug(article)
    );
    return A2(
      elm$html$Html$button,
      _List_fromArray([
        elm$html$Html$Attributes$class("btn btn-outline-danger btn-sm"),
        elm$html$Html$Events$onClick(msg)
      ]),
      _List_fromArray([
        A2(
          elm$html$Html$i,
          _List_fromArray([elm$html$Html$Attributes$class("ion-trash-a")]),
          _List_Nil
        ),
        elm$html$Html$text(" Delete Article")
      ])
    );
  });
  var author$project$Page$Article$editButton = function(article) {
    return A2(
      elm$html$Html$a,
      _List_fromArray([
        elm$html$Html$Attributes$class("btn btn-outline-secondary btn-sm"),
        author$project$Route$href(
          author$project$Route$EditArticle(author$project$Article$slug(article))
        )
      ]),
      _List_fromArray([
        A2(
          elm$html$Html$i,
          _List_fromArray([elm$html$Html$Attributes$class("ion-edit")]),
          _List_Nil
        ),
        elm$html$Html$text(" Edit Article")
      ])
    );
  };
  var author$project$Article$onClickStopPropagation = function(msg) {
    return A2(
      elm$html$Html$Events$stopPropagationOn,
      "click",
      elm$json$Json$Decode$succeed(_Utils_Tuple2(msg, true))
    );
  };
  var author$project$Article$toggleFavoriteButton = F4(function(
    classStr,
    msg,
    attrs,
    kids
  ) {
    return A2(
      elm$html$Html$button,
      A2(
        elm$core$List$cons,
        elm$html$Html$Attributes$class(classStr),
        A2(
          elm$core$List$cons,
          author$project$Article$onClickStopPropagation(msg),
          attrs
        )
      ),
      A2(
        elm$core$List$cons,
        A2(
          elm$html$Html$i,
          _List_fromArray([elm$html$Html$Attributes$class("ion-heart")]),
          _List_Nil
        ),
        kids
      )
    );
  });
  var author$project$Article$favoriteButton = F4(function(
    _n0,
    msg,
    attrs,
    kids
  ) {
    return A4(
      author$project$Article$toggleFavoriteButton,
      "btn btn-sm btn-outline-primary",
      msg,
      attrs,
      kids
    );
  });
  var author$project$Article$unfavoriteButton = F4(function(
    _n0,
    msg,
    attrs,
    kids
  ) {
    return A4(
      author$project$Article$toggleFavoriteButton,
      "btn btn-sm btn-primary",
      msg,
      attrs,
      kids
    );
  });
  var author$project$Page$Article$ClickedFavorite = F3(function(a, b, c) {
    return { $: "ClickedFavorite", a: a, b: b, c: c };
  });
  var author$project$Page$Article$ClickedUnfavorite = F3(function(a, b, c) {
    return { $: "ClickedUnfavorite", a: a, b: b, c: c };
  });
  var author$project$Page$Article$favoriteButton = F2(function(cred, article) {
    var slug = author$project$Article$slug(article);
    var body = author$project$Article$body(article);
    var _n0 = author$project$Article$metadata(article);
    var favoritesCount = _n0.favoritesCount;
    var favorited = _n0.favorited;
    var kids = _List_fromArray([
      elm$html$Html$text(
        " Favorite Article (" + (elm$core$String$fromInt(favoritesCount) + ")")
      )
    ]);
    return favorited
      ? A4(
          author$project$Article$unfavoriteButton,
          cred,
          A3(author$project$Page$Article$ClickedUnfavorite, cred, slug, body),
          _List_Nil,
          kids
        )
      : A4(
          author$project$Article$favoriteButton,
          cred,
          A3(author$project$Page$Article$ClickedFavorite, cred, slug, body),
          _List_Nil,
          kids
        );
  });
  var author$project$Page$Article$viewButtons = F3(function(
    cred,
    article,
    author
  ) {
    switch (author.$) {
      case "IsFollowing":
        var followedAuthor = author.a;
        return _List_fromArray([
          A3(
            author$project$Author$unfollowButton,
            author$project$Page$Article$ClickedUnfollow,
            cred,
            followedAuthor
          ),
          elm$html$Html$text(" "),
          A2(author$project$Page$Article$favoriteButton, cred, article)
        ]);
      case "IsNotFollowing":
        var unfollowedAuthor = author.a;
        return _List_fromArray([
          A3(
            author$project$Author$followButton,
            author$project$Page$Article$ClickedFollow,
            cred,
            unfollowedAuthor
          ),
          elm$html$Html$text(" "),
          A2(author$project$Page$Article$favoriteButton, cred, article)
        ]);
      default:
        return _List_fromArray([
          author$project$Page$Article$editButton(article),
          elm$html$Html$text(" "),
          A2(author$project$Page$Article$deleteButton, cred, article)
        ]);
    }
  });
  var author$project$Article$Comment$author = function(_n0) {
    var comment = _n0.a;
    return comment.author;
  };
  var author$project$Article$Comment$body = function(_n0) {
    var comment = _n0.a;
    return comment.body;
  };
  var author$project$Article$Comment$createdAt = function(_n0) {
    var comment = _n0.a;
    return comment.createdAt;
  };
  var author$project$Page$Article$ClickedDeleteComment = F3(function(a, b, c) {
    return { $: "ClickedDeleteComment", a: a, b: b, c: c };
  });
  var author$project$Profile$avatar = function(_n0) {
    var info = _n0.a;
    return info.avatar;
  };
  var elm$time$Time$flooredDiv = F2(function(numerator, denominator) {
    return elm$core$Basics$floor(numerator / denominator);
  });
  var elm$time$Time$posixToMillis = function(_n0) {
    var millis = _n0.a;
    return millis;
  };
  var elm$time$Time$toAdjustedMinutesHelp = F3(function(
    defaultOffset,
    posixMinutes,
    eras
  ) {
    toAdjustedMinutesHelp: while (true) {
      if (!eras.b) {
        return posixMinutes + defaultOffset;
      } else {
        var era = eras.a;
        var olderEras = eras.b;
        if (_Utils_cmp(era.start, posixMinutes) < 0) {
          return posixMinutes + era.offset;
        } else {
          var $temp$defaultOffset = defaultOffset,
            $temp$posixMinutes = posixMinutes,
            $temp$eras = olderEras;
          defaultOffset = $temp$defaultOffset;
          posixMinutes = $temp$posixMinutes;
          eras = $temp$eras;
          continue toAdjustedMinutesHelp;
        }
      }
    }
  });
  var elm$time$Time$toAdjustedMinutes = F2(function(_n0, time) {
    var defaultOffset = _n0.a;
    var eras = _n0.b;
    return A3(
      elm$time$Time$toAdjustedMinutesHelp,
      defaultOffset,
      A2(elm$time$Time$flooredDiv, elm$time$Time$posixToMillis(time), 60000),
      eras
    );
  });
  var elm$time$Time$toCivil = function(minutes) {
    var rawDay = A2(elm$time$Time$flooredDiv, minutes, 60 * 24) + 719468;
    var era = ((rawDay >= 0 ? rawDay : rawDay - 146096) / 146097) | 0;
    var dayOfEra = rawDay - era * 146097;
    var yearOfEra =
      ((dayOfEra -
        ((dayOfEra / 1460) | 0) +
        ((dayOfEra / 36524) | 0) -
        ((dayOfEra / 146096) | 0)) /
        365) |
      0;
    var dayOfYear =
      dayOfEra -
      (365 * yearOfEra + ((yearOfEra / 4) | 0) - ((yearOfEra / 100) | 0));
    var mp = ((5 * dayOfYear + 2) / 153) | 0;
    var month = mp + (mp < 10 ? 3 : -9);
    var year = yearOfEra + era * 400;
    return {
      day: dayOfYear - (((153 * mp + 2) / 5) | 0) + 1,
      month: month,
      year: year + (month <= 2 ? 1 : 0)
    };
  };
  var elm$time$Time$toDay = F2(function(zone, time) {
    return elm$time$Time$toCivil(
      A2(elm$time$Time$toAdjustedMinutes, zone, time)
    ).day;
  });
  var elm$time$Time$Apr = { $: "Apr" };
  var elm$time$Time$Aug = { $: "Aug" };
  var elm$time$Time$Dec = { $: "Dec" };
  var elm$time$Time$Feb = { $: "Feb" };
  var elm$time$Time$Jan = { $: "Jan" };
  var elm$time$Time$Jul = { $: "Jul" };
  var elm$time$Time$Jun = { $: "Jun" };
  var elm$time$Time$Mar = { $: "Mar" };
  var elm$time$Time$May = { $: "May" };
  var elm$time$Time$Nov = { $: "Nov" };
  var elm$time$Time$Oct = { $: "Oct" };
  var elm$time$Time$Sep = { $: "Sep" };
  var elm$time$Time$toMonth = F2(function(zone, time) {
    var _n0 = elm$time$Time$toCivil(
      A2(elm$time$Time$toAdjustedMinutes, zone, time)
    ).month;
    switch (_n0) {
      case 1:
        return elm$time$Time$Jan;
      case 2:
        return elm$time$Time$Feb;
      case 3:
        return elm$time$Time$Mar;
      case 4:
        return elm$time$Time$Apr;
      case 5:
        return elm$time$Time$May;
      case 6:
        return elm$time$Time$Jun;
      case 7:
        return elm$time$Time$Jul;
      case 8:
        return elm$time$Time$Aug;
      case 9:
        return elm$time$Time$Sep;
      case 10:
        return elm$time$Time$Oct;
      case 11:
        return elm$time$Time$Nov;
      default:
        return elm$time$Time$Dec;
    }
  });
  var elm$time$Time$toYear = F2(function(zone, time) {
    return elm$time$Time$toCivil(
      A2(elm$time$Time$toAdjustedMinutes, zone, time)
    ).year;
  });
  var author$project$Timestamp$format = F2(function(zone, time) {
    var year = elm$core$String$fromInt(A2(elm$time$Time$toYear, zone, time));
    var month = (function() {
      var _n0 = A2(elm$time$Time$toMonth, zone, time);
      switch (_n0.$) {
        case "Jan":
          return "January";
        case "Feb":
          return "February";
        case "Mar":
          return "March";
        case "Apr":
          return "April";
        case "May":
          return "May";
        case "Jun":
          return "June";
        case "Jul":
          return "July";
        case "Aug":
          return "August";
        case "Sep":
          return "September";
        case "Oct":
          return "October";
        case "Nov":
          return "November";
        default:
          return "December";
      }
    })();
    var day = elm$core$String$fromInt(A2(elm$time$Time$toDay, zone, time));
    return month + (" " + (day + (", " + year)));
  });
  var author$project$Page$Article$viewComment = F3(function(
    timeZone,
    slug,
    comment
  ) {
    var timestamp = A2(
      author$project$Timestamp$format,
      timeZone,
      author$project$Article$Comment$createdAt(comment)
    );
    var author = author$project$Article$Comment$author(comment);
    var authorUsername = author$project$Author$username(author);
    var deleteCommentButton = (function() {
      if (author.$ === "IsViewer") {
        var cred = author.a;
        var msg = A3(
          author$project$Page$Article$ClickedDeleteComment,
          cred,
          slug,
          author$project$Article$Comment$id(comment)
        );
        return A2(
          elm$html$Html$span,
          _List_fromArray([
            elm$html$Html$Attributes$class("mod-options"),
            elm$html$Html$Events$onClick(msg)
          ]),
          _List_fromArray([
            A2(
              elm$html$Html$i,
              _List_fromArray([elm$html$Html$Attributes$class("ion-trash-a")]),
              _List_Nil
            )
          ])
        );
      } else {
        return elm$html$Html$text("");
      }
    })();
    var profile = author$project$Author$profile(author);
    return A2(
      elm$html$Html$div,
      _List_fromArray([elm$html$Html$Attributes$class("card")]),
      _List_fromArray([
        A2(
          elm$html$Html$div,
          _List_fromArray([elm$html$Html$Attributes$class("card-block")]),
          _List_fromArray([
            A2(
              elm$html$Html$p,
              _List_fromArray([elm$html$Html$Attributes$class("card-text")]),
              _List_fromArray([
                elm$html$Html$text(author$project$Article$Comment$body(comment))
              ])
            )
          ])
        ),
        A2(
          elm$html$Html$div,
          _List_fromArray([elm$html$Html$Attributes$class("card-footer")]),
          _List_fromArray([
            A2(
              elm$html$Html$a,
              _List_fromArray([
                elm$html$Html$Attributes$class("comment-author"),
                elm$html$Html$Attributes$href("")
              ]),
              _List_fromArray([
                A2(
                  elm$html$Html$img,
                  _List_fromArray([
                    elm$html$Html$Attributes$class("comment-author-img"),
                    author$project$Avatar$src(
                      author$project$Profile$avatar(profile)
                    )
                  ]),
                  _List_Nil
                ),
                elm$html$Html$text(" ")
              ])
            ),
            elm$html$Html$text(" "),
            A2(
              elm$html$Html$a,
              _List_fromArray([
                elm$html$Html$Attributes$class("comment-author"),
                author$project$Route$href(
                  author$project$Route$Profile(authorUsername)
                )
              ]),
              _List_fromArray([
                elm$html$Html$text(
                  author$project$Username$toString(authorUsername)
                )
              ])
            ),
            A2(
              elm$html$Html$span,
              _List_fromArray([elm$html$Html$Attributes$class("date-posted")]),
              _List_fromArray([elm$html$Html$text(timestamp)])
            ),
            deleteCommentButton
          ])
        )
      ])
    );
  });
  var author$project$Session$viewer = function(session) {
    if (session.$ === "LoggedIn") {
      var val = session.b;
      return elm$core$Maybe$Just(val);
    } else {
      return elm$core$Maybe$Nothing;
    }
  };
  var author$project$Timestamp$view = F2(function(timeZone, timestamp) {
    return A2(
      elm$html$Html$span,
      _List_fromArray([elm$html$Html$Attributes$class("date")]),
      _List_fromArray([
        elm$html$Html$text(
          A2(author$project$Timestamp$format, timeZone, timestamp)
        )
      ])
    );
  });
  var elm$html$Html$h1 = _VirtualDom_node("h1");
  var elm$html$Html$hr = _VirtualDom_node("hr");
  var author$project$Page$Article$view = function(model) {
    var _n0 = model.article;
    switch (_n0.$) {
      case "Loaded":
        var article = _n0.a;
        var slug = author$project$Article$slug(article);
        var author = author$project$Article$author(article);
        var avatar = author$project$Profile$avatar(
          author$project$Author$profile(author)
        );
        var buttons = (function() {
          var _n4 = author$project$Session$cred(model.session);
          if (_n4.$ === "Just") {
            var cred = _n4.a;
            return A3(
              author$project$Page$Article$viewButtons,
              cred,
              article,
              author
            );
          } else {
            return _List_Nil;
          }
        })();
        var profile = author$project$Author$profile(author);
        var _n1 = author$project$Article$metadata(article);
        var title = _n1.title;
        return {
          content: A2(
            elm$html$Html$div,
            _List_fromArray([elm$html$Html$Attributes$class("article-page")]),
            _List_fromArray([
              A2(
                elm$html$Html$div,
                _List_fromArray([elm$html$Html$Attributes$class("banner")]),
                _List_fromArray([
                  A2(
                    elm$html$Html$div,
                    _List_fromArray([
                      elm$html$Html$Attributes$class("container")
                    ]),
                    _List_fromArray([
                      A2(
                        elm$html$Html$h1,
                        _List_Nil,
                        _List_fromArray([elm$html$Html$text(title)])
                      ),
                      A2(
                        elm$html$Html$div,
                        _List_fromArray([
                          elm$html$Html$Attributes$class("article-meta")
                        ]),
                        A2(
                          elm$core$List$append,
                          _List_fromArray([
                            A2(
                              elm$html$Html$a,
                              _List_fromArray([
                                author$project$Route$href(
                                  author$project$Route$Profile(
                                    author$project$Author$username(author)
                                  )
                                )
                              ]),
                              _List_fromArray([
                                A2(
                                  elm$html$Html$img,
                                  _List_fromArray([
                                    author$project$Avatar$src(
                                      author$project$Profile$avatar(profile)
                                    )
                                  ]),
                                  _List_Nil
                                )
                              ])
                            ),
                            A2(
                              elm$html$Html$div,
                              _List_fromArray([
                                elm$html$Html$Attributes$class("info")
                              ]),
                              _List_fromArray([
                                author$project$Author$view(
                                  author$project$Author$username(author)
                                ),
                                A2(
                                  author$project$Timestamp$view,
                                  model.timeZone,
                                  author$project$Article$metadata(article)
                                    .createdAt
                                )
                              ])
                            )
                          ]),
                          buttons
                        )
                      ),
                      A2(
                        author$project$Page$viewErrors,
                        author$project$Page$Article$ClickedDismissErrors,
                        model.errors
                      )
                    ])
                  )
                ])
              ),
              A2(
                elm$html$Html$div,
                _List_fromArray([
                  elm$html$Html$Attributes$class("container page")
                ]),
                _List_fromArray([
                  A2(
                    elm$html$Html$div,
                    _List_fromArray([
                      elm$html$Html$Attributes$class("row article-content")
                    ]),
                    _List_fromArray([
                      A2(
                        elm$html$Html$div,
                        _List_fromArray([
                          elm$html$Html$Attributes$class("col-md-12")
                        ]),
                        _List_fromArray([
                          A2(
                            author$project$Article$Body$toHtml,
                            author$project$Article$body(article),
                            _List_Nil
                          )
                        ])
                      )
                    ])
                  ),
                  A2(elm$html$Html$hr, _List_Nil, _List_Nil),
                  A2(
                    elm$html$Html$div,
                    _List_fromArray([
                      elm$html$Html$Attributes$class("article-actions")
                    ]),
                    _List_fromArray([
                      A2(
                        elm$html$Html$div,
                        _List_fromArray([
                          elm$html$Html$Attributes$class("article-meta")
                        ]),
                        A2(
                          elm$core$List$append,
                          _List_fromArray([
                            A2(
                              elm$html$Html$a,
                              _List_fromArray([
                                author$project$Route$href(
                                  author$project$Route$Profile(
                                    author$project$Author$username(author)
                                  )
                                )
                              ]),
                              _List_fromArray([
                                A2(
                                  elm$html$Html$img,
                                  _List_fromArray([
                                    author$project$Avatar$src(avatar)
                                  ]),
                                  _List_Nil
                                )
                              ])
                            ),
                            A2(
                              elm$html$Html$div,
                              _List_fromArray([
                                elm$html$Html$Attributes$class("info")
                              ]),
                              _List_fromArray([
                                author$project$Author$view(
                                  author$project$Author$username(author)
                                ),
                                A2(
                                  author$project$Timestamp$view,
                                  model.timeZone,
                                  author$project$Article$metadata(article)
                                    .createdAt
                                )
                              ])
                            )
                          ]),
                          buttons
                        )
                      )
                    ])
                  ),
                  A2(
                    elm$html$Html$div,
                    _List_fromArray([elm$html$Html$Attributes$class("row")]),
                    _List_fromArray([
                      A2(
                        elm$html$Html$div,
                        _List_fromArray([
                          elm$html$Html$Attributes$class(
                            "col-xs-12 col-md-8 offset-md-2"
                          )
                        ]),
                        (function() {
                          var _n2 = model.comments;
                          switch (_n2.$) {
                            case "Loading":
                              return _List_Nil;
                            case "LoadingSlowly":
                              return _List_fromArray([
                                author$project$Loading$icon
                              ]);
                            case "Loaded":
                              var _n3 = _n2.a;
                              var commentText = _n3.a;
                              var comments = _n3.b;
                              return A2(
                                elm$core$List$cons,
                                A3(
                                  author$project$Page$Article$viewAddComment,
                                  slug,
                                  commentText,
                                  author$project$Session$viewer(model.session)
                                ),
                                A2(
                                  elm$core$List$map,
                                  A2(
                                    author$project$Page$Article$viewComment,
                                    model.timeZone,
                                    slug
                                  ),
                                  comments
                                )
                              );
                            default:
                              return _List_fromArray([
                                author$project$Loading$error("comments")
                              ]);
                          }
                        })()
                      )
                    ])
                  )
                ])
              )
            ])
          ),
          title: title
        };
      case "Loading":
        return {
          content: elm$html$Html$text(""),
          title: "Article"
        };
      case "LoadingSlowly":
        return { content: author$project$Loading$icon, title: "Article" };
      default:
        return {
          content: author$project$Loading$error("article"),
          title: "Article"
        };
    }
  };
  var author$project$Page$Article$Editor$getSlug = function(status) {
    switch (status.$) {
      case "Loading":
        var slug = status.a;
        return elm$core$Maybe$Just(slug);
      case "LoadingSlowly":
        var slug = status.a;
        return elm$core$Maybe$Just(slug);
      case "LoadingFailed":
        var slug = status.a;
        return elm$core$Maybe$Just(slug);
      case "Saving":
        var slug = status.a;
        return elm$core$Maybe$Just(slug);
      case "Editing":
        var slug = status.a;
        return elm$core$Maybe$Just(slug);
      case "EditingNew":
        return elm$core$Maybe$Nothing;
      default:
        return elm$core$Maybe$Nothing;
    }
  };
  var author$project$Page$Article$Editor$saveArticleButton = F2(function(
    caption,
    extraAttrs
  ) {
    return A2(
      elm$html$Html$button,
      A2(
        elm$core$List$cons,
        elm$html$Html$Attributes$class("btn btn-lg pull-xs-right btn-primary"),
        extraAttrs
      ),
      _List_fromArray([elm$html$Html$text(caption)])
    );
  });
  var author$project$Page$Article$Editor$editArticleSaveButton = function(
    extraAttrs
  ) {
    return A2(
      author$project$Page$Article$Editor$saveArticleButton,
      "Update Article",
      extraAttrs
    );
  };
  var author$project$Page$Article$Editor$newArticleSaveButton = function(
    extraAttrs
  ) {
    return A2(
      author$project$Page$Article$Editor$saveArticleButton,
      "Publish Article",
      extraAttrs
    );
  };
  var author$project$Page$Article$Editor$ClickedSave = function(a) {
    return { $: "ClickedSave", a: a };
  };
  var author$project$Page$Article$Editor$EnteredBody = function(a) {
    return { $: "EnteredBody", a: a };
  };
  var author$project$Page$Article$Editor$EnteredDescription = function(a) {
    return { $: "EnteredDescription", a: a };
  };
  var author$project$Page$Article$Editor$EnteredTags = function(a) {
    return { $: "EnteredTags", a: a };
  };
  var author$project$Page$Article$Editor$EnteredTitle = function(a) {
    return { $: "EnteredTitle", a: a };
  };
  var elm$html$Html$fieldset = _VirtualDom_node("fieldset");
  var elm$html$Html$input = _VirtualDom_node("input");
  var author$project$Page$Article$Editor$viewForm = F3(function(
    cred,
    fields,
    saveButton
  ) {
    return A2(
      elm$html$Html$form,
      _List_fromArray([
        elm$html$Html$Events$onSubmit(
          author$project$Page$Article$Editor$ClickedSave(cred)
        )
      ]),
      _List_fromArray([
        A2(
          elm$html$Html$fieldset,
          _List_Nil,
          _List_fromArray([
            A2(
              elm$html$Html$fieldset,
              _List_fromArray([elm$html$Html$Attributes$class("form-group")]),
              _List_fromArray([
                A2(
                  elm$html$Html$input,
                  _List_fromArray([
                    elm$html$Html$Attributes$class(
                      "form-control form-control-lg"
                    ),
                    elm$html$Html$Attributes$placeholder("Article Title"),
                    elm$html$Html$Events$onInput(
                      author$project$Page$Article$Editor$EnteredTitle
                    ),
                    elm$html$Html$Attributes$value(fields.title)
                  ]),
                  _List_Nil
                )
              ])
            ),
            A2(
              elm$html$Html$fieldset,
              _List_fromArray([elm$html$Html$Attributes$class("form-group")]),
              _List_fromArray([
                A2(
                  elm$html$Html$input,
                  _List_fromArray([
                    elm$html$Html$Attributes$class("form-control"),
                    elm$html$Html$Attributes$placeholder(
                      "What's this article about?"
                    ),
                    elm$html$Html$Events$onInput(
                      author$project$Page$Article$Editor$EnteredDescription
                    ),
                    elm$html$Html$Attributes$value(fields.description)
                  ]),
                  _List_Nil
                )
              ])
            ),
            A2(
              elm$html$Html$fieldset,
              _List_fromArray([elm$html$Html$Attributes$class("form-group")]),
              _List_fromArray([
                A2(
                  elm$html$Html$textarea,
                  _List_fromArray([
                    elm$html$Html$Attributes$class("form-control"),
                    elm$html$Html$Attributes$placeholder(
                      "Write your article (in markdown)"
                    ),
                    A2(elm$html$Html$Attributes$attribute, "rows", "8"),
                    elm$html$Html$Events$onInput(
                      author$project$Page$Article$Editor$EnteredBody
                    ),
                    elm$html$Html$Attributes$value(fields.body)
                  ]),
                  _List_Nil
                )
              ])
            ),
            A2(
              elm$html$Html$fieldset,
              _List_fromArray([elm$html$Html$Attributes$class("form-group")]),
              _List_fromArray([
                A2(
                  elm$html$Html$input,
                  _List_fromArray([
                    elm$html$Html$Attributes$class("form-control"),
                    elm$html$Html$Attributes$placeholder("Enter tags"),
                    elm$html$Html$Events$onInput(
                      author$project$Page$Article$Editor$EnteredTags
                    ),
                    elm$html$Html$Attributes$value(fields.tags)
                  ]),
                  _List_Nil
                )
              ])
            ),
            saveButton
          ])
        )
      ])
    );
  });
  var author$project$Page$Article$Editor$viewProblem = function(problem) {
    var errorMessage = (function() {
      if (problem.$ === "InvalidEntry") {
        var message = problem.b;
        return message;
      } else {
        var message = problem.a;
        return message;
      }
    })();
    return A2(
      elm$html$Html$li,
      _List_Nil,
      _List_fromArray([elm$html$Html$text(errorMessage)])
    );
  };
  var author$project$Page$Article$Editor$viewProblems = function(problems) {
    return A2(
      elm$html$Html$ul,
      _List_fromArray([elm$html$Html$Attributes$class("error-messages")]),
      A2(
        elm$core$List$map,
        author$project$Page$Article$Editor$viewProblem,
        problems
      )
    );
  };
  var author$project$Page$Article$Editor$viewAuthenticated = F2(function(
    cred,
    model
  ) {
    var formHtml = (function() {
      var _n0 = model.status;
      switch (_n0.$) {
        case "Loading":
          return _List_Nil;
        case "LoadingSlowly":
          return _List_fromArray([author$project$Loading$icon]);
        case "Saving":
          var slug = _n0.a;
          var form = _n0.b;
          return _List_fromArray([
            A3(
              author$project$Page$Article$Editor$viewForm,
              cred,
              form,
              author$project$Page$Article$Editor$editArticleSaveButton(
                _List_fromArray([elm$html$Html$Attributes$disabled(true)])
              )
            )
          ]);
        case "Creating":
          var form = _n0.a;
          return _List_fromArray([
            A3(
              author$project$Page$Article$Editor$viewForm,
              cred,
              form,
              author$project$Page$Article$Editor$newArticleSaveButton(
                _List_fromArray([elm$html$Html$Attributes$disabled(true)])
              )
            )
          ]);
        case "Editing":
          var slug = _n0.a;
          var problems = _n0.b;
          var form = _n0.c;
          return _List_fromArray([
            author$project$Page$Article$Editor$viewProblems(problems),
            A3(
              author$project$Page$Article$Editor$viewForm,
              cred,
              form,
              author$project$Page$Article$Editor$editArticleSaveButton(
                _List_Nil
              )
            )
          ]);
        case "EditingNew":
          var problems = _n0.a;
          var form = _n0.b;
          return _List_fromArray([
            author$project$Page$Article$Editor$viewProblems(problems),
            A3(
              author$project$Page$Article$Editor$viewForm,
              cred,
              form,
              author$project$Page$Article$Editor$newArticleSaveButton(_List_Nil)
            )
          ]);
        default:
          return _List_fromArray([
            elm$html$Html$text("Article failed to load.")
          ]);
      }
    })();
    return A2(
      elm$html$Html$div,
      _List_fromArray([elm$html$Html$Attributes$class("editor-page")]),
      _List_fromArray([
        A2(
          elm$html$Html$div,
          _List_fromArray([elm$html$Html$Attributes$class("container page")]),
          _List_fromArray([
            A2(
              elm$html$Html$div,
              _List_fromArray([elm$html$Html$Attributes$class("row")]),
              _List_fromArray([
                A2(
                  elm$html$Html$div,
                  _List_fromArray([
                    elm$html$Html$Attributes$class(
                      "col-md-10 offset-md-1 col-xs-12"
                    )
                  ]),
                  formHtml
                )
              ])
            )
          ])
        )
      ])
    );
  });
  var author$project$Page$Article$Editor$view = function(model) {
    return {
      content: (function() {
        var _n0 = author$project$Session$cred(model.session);
        if (_n0.$ === "Just") {
          var cred = _n0.a;
          return A2(
            author$project$Page$Article$Editor$viewAuthenticated,
            cred,
            model
          );
        } else {
          return elm$html$Html$text("Sign in to edit this article.");
        }
      })(),
      title: (function() {
        var _n1 = author$project$Page$Article$Editor$getSlug(model.status);
        if (_n1.$ === "Just") {
          var slug = _n1.a;
          return "Edit Article - " + author$project$Article$Slug$toString(slug);
        } else {
          return "New Article";
        }
      })()
    };
  };
  var author$project$Page$Blank$view = {
    content: elm$html$Html$text(""),
    title: ""
  };
  var author$project$Article$Feed$ClickedDismissErrors = {
    $: "ClickedDismissErrors"
  };
  var author$project$Article$Feed$ClickedFavorite = F2(function(a, b) {
    return { $: "ClickedFavorite", a: a, b: b };
  });
  var author$project$Article$Feed$ClickedUnfavorite = F2(function(a, b) {
    return { $: "ClickedUnfavorite", a: a, b: b };
  });
  var author$project$Article$Feed$viewTag = function(tagName) {
    return A2(
      elm$html$Html$li,
      _List_fromArray([
        elm$html$Html$Attributes$class("tag-default tag-pill tag-outline")
      ]),
      _List_fromArray([elm$html$Html$text(tagName)])
    );
  };
  var author$project$Article$Feed$viewPreview = F3(function(
    maybeCred,
    timeZone,
    article
  ) {
    var slug = author$project$Article$slug(article);
    var faveButton = (function() {
      if (maybeCred.$ === "Just") {
        var cred = maybeCred.a;
        var _n2 = author$project$Article$metadata(article);
        var favoritesCount = _n2.favoritesCount;
        var favorited = _n2.favorited;
        var viewButton = favorited
          ? A2(
              author$project$Article$unfavoriteButton,
              cred,
              A2(author$project$Article$Feed$ClickedUnfavorite, cred, slug)
            )
          : A2(
              author$project$Article$favoriteButton,
              cred,
              A2(author$project$Article$Feed$ClickedFavorite, cred, slug)
            );
        return A2(
          viewButton,
          _List_fromArray([elm$html$Html$Attributes$class("pull-xs-right")]),
          _List_fromArray([
            elm$html$Html$text(" " + elm$core$String$fromInt(favoritesCount))
          ])
        );
      } else {
        return elm$html$Html$text("");
      }
    })();
    var author = author$project$Article$author(article);
    var profile = author$project$Author$profile(author);
    var username = author$project$Author$username(author);
    var _n0 = author$project$Article$metadata(article);
    var title = _n0.title;
    var description = _n0.description;
    var createdAt = _n0.createdAt;
    return A2(
      elm$html$Html$div,
      _List_fromArray([elm$html$Html$Attributes$class("article-preview")]),
      _List_fromArray([
        A2(
          elm$html$Html$div,
          _List_fromArray([elm$html$Html$Attributes$class("article-meta")]),
          _List_fromArray([
            A2(
              elm$html$Html$a,
              _List_fromArray([
                author$project$Route$href(
                  author$project$Route$Profile(username)
                )
              ]),
              _List_fromArray([
                A2(
                  elm$html$Html$img,
                  _List_fromArray([
                    author$project$Avatar$src(
                      author$project$Profile$avatar(profile)
                    )
                  ]),
                  _List_Nil
                )
              ])
            ),
            A2(
              elm$html$Html$div,
              _List_fromArray([elm$html$Html$Attributes$class("info")]),
              _List_fromArray([
                author$project$Author$view(username),
                A2(author$project$Timestamp$view, timeZone, createdAt)
              ])
            ),
            faveButton
          ])
        ),
        A2(
          elm$html$Html$a,
          _List_fromArray([
            elm$html$Html$Attributes$class("preview-link"),
            author$project$Route$href(
              author$project$Route$Article(author$project$Article$slug(article))
            )
          ]),
          _List_fromArray([
            A2(
              elm$html$Html$h1,
              _List_Nil,
              _List_fromArray([elm$html$Html$text(title)])
            ),
            A2(
              elm$html$Html$p,
              _List_Nil,
              _List_fromArray([elm$html$Html$text(description)])
            ),
            A2(
              elm$html$Html$span,
              _List_Nil,
              _List_fromArray([elm$html$Html$text("Read more...")])
            ),
            A2(
              elm$html$Html$ul,
              _List_fromArray([elm$html$Html$Attributes$class("tag-list")]),
              A2(
                elm$core$List$map,
                author$project$Article$Feed$viewTag,
                author$project$Article$metadata(article).tags
              )
            )
          ])
        )
      ])
    );
  });
  var author$project$PaginatedList$values = function(_n0) {
    var info = _n0.a;
    return info.values;
  };
  var author$project$Article$Feed$viewArticles = F2(function(timeZone, _n0) {
    var articles = _n0.a.articles;
    var session = _n0.a.session;
    var errors = _n0.a.errors;
    var maybeCred = author$project$Session$cred(session);
    var articlesHtml = A2(
      elm$core$List$map,
      A2(author$project$Article$Feed$viewPreview, maybeCred, timeZone),
      author$project$PaginatedList$values(articles)
    );
    return A2(
      elm$core$List$cons,
      A2(
        author$project$Page$viewErrors,
        author$project$Article$Feed$ClickedDismissErrors,
        errors
      ),
      articlesHtml
    );
  });
  var author$project$Article$Feed$pageLink = F3(function(
    toMsg,
    targetPage,
    isActive
  ) {
    return A2(
      elm$html$Html$li,
      _List_fromArray([
        elm$html$Html$Attributes$classList(
          _List_fromArray([
            _Utils_Tuple2("page-item", true),
            _Utils_Tuple2("active", isActive)
          ])
        )
      ]),
      _List_fromArray([
        A2(
          elm$html$Html$a,
          _List_fromArray([
            elm$html$Html$Attributes$class("page-link"),
            elm$html$Html$Events$onClick(toMsg(targetPage)),
            elm$html$Html$Attributes$href("")
          ]),
          _List_fromArray([
            elm$html$Html$text(elm$core$String$fromInt(targetPage))
          ])
        )
      ])
    );
  });
  var author$project$PaginatedList$total = function(_n0) {
    var info = _n0.a;
    return info.total;
  };
  var author$project$Article$Feed$viewPagination = F3(function(
    toMsg,
    page,
    _n0
  ) {
    var feed = _n0.a;
    var viewPageLink = function(currentPage) {
      return A3(
        author$project$Article$Feed$pageLink,
        toMsg,
        currentPage,
        _Utils_eq(currentPage, page)
      );
    };
    var totalPages = author$project$PaginatedList$total(feed.articles);
    return totalPages > 1
      ? A2(
          elm$html$Html$ul,
          _List_fromArray([elm$html$Html$Attributes$class("pagination")]),
          A2(
            elm$core$List$map,
            viewPageLink,
            A2(elm$core$List$range, 1, totalPages)
          )
        )
      : elm$html$Html$text("");
  });
  var author$project$Page$Home$ClickedFeedPage = function(a) {
    return { $: "ClickedFeedPage", a: a };
  };
  var author$project$Page$Home$viewBanner = A2(
    elm$html$Html$div,
    _List_fromArray([elm$html$Html$Attributes$class("banner")]),
    _List_fromArray([
      A2(
        elm$html$Html$div,
        _List_fromArray([elm$html$Html$Attributes$class("container")]),
        _List_fromArray([
          A2(
            elm$html$Html$h1,
            _List_fromArray([elm$html$Html$Attributes$class("logo-font")]),
            _List_fromArray([elm$html$Html$text("conduit")])
          ),
          A2(
            elm$html$Html$p,
            _List_Nil,
            _List_fromArray([
              elm$html$Html$text("A place to share your knowledge.")
            ])
          )
        ])
      )
    ])
  );
  var author$project$Article$Feed$viewTab = F2(function(attrs, _n0) {
    var name = _n0.a;
    var msg = _n0.b;
    return A2(
      elm$html$Html$li,
      _List_fromArray([elm$html$Html$Attributes$class("nav-item")]),
      _List_fromArray([
        A2(
          elm$html$Html$a,
          A2(
            elm$core$List$cons,
            elm$html$Html$Attributes$class("nav-link"),
            A2(
              elm$core$List$cons,
              elm$html$Html$Events$onClick(msg),
              A2(elm$core$List$cons, elm$html$Html$Attributes$href(""), attrs)
            )
          ),
          _List_fromArray([elm$html$Html$text(name)])
        )
      ])
    );
  });
  var author$project$Article$Feed$viewTabs = F3(function(
    before,
    selected,
    after
  ) {
    return A2(
      elm$html$Html$ul,
      _List_fromArray([
        elm$html$Html$Attributes$class("nav nav-pills outline-active")
      ]),
      elm$core$List$concat(
        _List_fromArray([
          A2(
            elm$core$List$map,
            author$project$Article$Feed$viewTab(_List_Nil),
            before
          ),
          _List_fromArray([
            A2(
              author$project$Article$Feed$viewTab,
              _List_fromArray([elm$html$Html$Attributes$class("active")]),
              selected
            )
          ]),
          A2(
            elm$core$List$map,
            author$project$Article$Feed$viewTab(_List_Nil),
            after
          )
        ])
      )
    );
  });
  var author$project$Page$Home$ClickedTab = function(a) {
    return { $: "ClickedTab", a: a };
  };
  var author$project$Page$Home$globalFeed = _Utils_Tuple2(
    "Global Feed",
    author$project$Page$Home$ClickedTab(author$project$Page$Home$GlobalFeed)
  );
  var author$project$Page$Home$tagFeed = function(tag) {
    return _Utils_Tuple2(
      "#" + author$project$Article$Tag$toString(tag),
      author$project$Page$Home$ClickedTab(author$project$Page$Home$TagFeed(tag))
    );
  };
  var author$project$Page$Home$yourFeed = function(cred) {
    return _Utils_Tuple2(
      "Your Feed",
      author$project$Page$Home$ClickedTab(
        author$project$Page$Home$YourFeed(cred)
      )
    );
  };
  var author$project$Page$Home$viewTabs = F2(function(maybeCred, tab) {
    switch (tab.$) {
      case "YourFeed":
        var cred = tab.a;
        return A3(
          author$project$Article$Feed$viewTabs,
          _List_Nil,
          author$project$Page$Home$yourFeed(cred),
          _List_fromArray([author$project$Page$Home$globalFeed])
        );
      case "GlobalFeed":
        var otherTabs = (function() {
          if (maybeCred.$ === "Just") {
            var cred = maybeCred.a;
            return _List_fromArray([author$project$Page$Home$yourFeed(cred)]);
          } else {
            return _List_Nil;
          }
        })();
        return A3(
          author$project$Article$Feed$viewTabs,
          otherTabs,
          author$project$Page$Home$globalFeed,
          _List_Nil
        );
      default:
        var tag = tab.a;
        var otherTabs = (function() {
          if (maybeCred.$ === "Just") {
            var cred = maybeCred.a;
            return _List_fromArray([
              author$project$Page$Home$yourFeed(cred),
              author$project$Page$Home$globalFeed
            ]);
          } else {
            return _List_fromArray([author$project$Page$Home$globalFeed]);
          }
        })();
        return A3(
          author$project$Article$Feed$viewTabs,
          otherTabs,
          author$project$Page$Home$tagFeed(tag),
          _List_Nil
        );
    }
  });
  var author$project$Page$Home$ClickedTag = function(a) {
    return { $: "ClickedTag", a: a };
  };
  var author$project$Page$Home$viewTag = function(tagName) {
    return A2(
      elm$html$Html$a,
      _List_fromArray([
        elm$html$Html$Attributes$class("tag-pill tag-default"),
        elm$html$Html$Events$onClick(
          author$project$Page$Home$ClickedTag(tagName)
        ),
        elm$html$Html$Attributes$href("")
      ]),
      _List_fromArray([
        elm$html$Html$text(author$project$Article$Tag$toString(tagName))
      ])
    );
  };
  var author$project$Page$Home$viewTags = function(tags) {
    return A2(
      elm$html$Html$div,
      _List_fromArray([elm$html$Html$Attributes$class("tag-list")]),
      A2(elm$core$List$map, author$project$Page$Home$viewTag, tags)
    );
  };
  var author$project$Page$Home$view = function(model) {
    return {
      content: A2(
        elm$html$Html$div,
        _List_fromArray([elm$html$Html$Attributes$class("home-page")]),
        _List_fromArray([
          author$project$Page$Home$viewBanner,
          A2(
            elm$html$Html$div,
            _List_fromArray([elm$html$Html$Attributes$class("container page")]),
            _List_fromArray([
              A2(
                elm$html$Html$div,
                _List_fromArray([elm$html$Html$Attributes$class("row")]),
                _List_fromArray([
                  A2(
                    elm$html$Html$div,
                    _List_fromArray([
                      elm$html$Html$Attributes$class("col-md-9")
                    ]),
                    (function() {
                      var _n0 = model.feed;
                      switch (_n0.$) {
                        case "Loaded":
                          var feed = _n0.a;
                          return _List_fromArray([
                            A2(
                              elm$html$Html$div,
                              _List_fromArray([
                                elm$html$Html$Attributes$class("feed-toggle")
                              ]),
                              elm$core$List$concat(
                                _List_fromArray([
                                  _List_fromArray([
                                    A2(
                                      author$project$Page$Home$viewTabs,
                                      author$project$Session$cred(
                                        model.session
                                      ),
                                      model.feedTab
                                    )
                                  ]),
                                  A2(
                                    elm$core$List$map,
                                    elm$html$Html$map(
                                      author$project$Page$Home$GotFeedMsg
                                    ),
                                    A2(
                                      author$project$Article$Feed$viewArticles,
                                      model.timeZone,
                                      feed
                                    )
                                  ),
                                  _List_fromArray([
                                    A3(
                                      author$project$Article$Feed$viewPagination,
                                      author$project$Page$Home$ClickedFeedPage,
                                      model.feedPage,
                                      feed
                                    )
                                  ])
                                ])
                              )
                            )
                          ]);
                        case "Loading":
                          return _List_Nil;
                        case "LoadingSlowly":
                          return _List_fromArray([author$project$Loading$icon]);
                        default:
                          return _List_fromArray([
                            author$project$Loading$error("feed")
                          ]);
                      }
                    })()
                  ),
                  A2(
                    elm$html$Html$div,
                    _List_fromArray([
                      elm$html$Html$Attributes$class("col-md-3")
                    ]),
                    (function() {
                      var _n1 = model.tags;
                      switch (_n1.$) {
                        case "Loaded":
                          var tags = _n1.a;
                          return _List_fromArray([
                            A2(
                              elm$html$Html$div,
                              _List_fromArray([
                                elm$html$Html$Attributes$class("sidebar")
                              ]),
                              _List_fromArray([
                                A2(
                                  elm$html$Html$p,
                                  _List_Nil,
                                  _List_fromArray([
                                    elm$html$Html$text("Popular Tags")
                                  ])
                                ),
                                author$project$Page$Home$viewTags(tags)
                              ])
                            )
                          ]);
                        case "Loading":
                          return _List_Nil;
                        case "LoadingSlowly":
                          return _List_fromArray([author$project$Loading$icon]);
                        default:
                          return _List_fromArray([
                            author$project$Loading$error("tags")
                          ]);
                      }
                    })()
                  )
                ])
              )
            ])
          )
        ])
      ),
      title: "Conduit"
    };
  };
  var author$project$Page$Login$EnteredEmail = function(a) {
    return { $: "EnteredEmail", a: a };
  };
  var author$project$Page$Login$EnteredPassword = function(a) {
    return { $: "EnteredPassword", a: a };
  };
  var author$project$Page$Login$SubmittedForm = { $: "SubmittedForm" };
  var elm$html$Html$Attributes$type_ = elm$html$Html$Attributes$stringProperty(
    "type"
  );
  var author$project$Page$Login$viewForm = function(form) {
    return A2(
      elm$html$Html$form,
      _List_fromArray([
        elm$html$Html$Events$onSubmit(author$project$Page$Login$SubmittedForm)
      ]),
      _List_fromArray([
        A2(
          elm$html$Html$fieldset,
          _List_fromArray([elm$html$Html$Attributes$class("form-group")]),
          _List_fromArray([
            A2(
              elm$html$Html$input,
              _List_fromArray([
                elm$html$Html$Attributes$class("form-control form-control-lg"),
                elm$html$Html$Attributes$placeholder("Email"),
                elm$html$Html$Events$onInput(
                  author$project$Page$Login$EnteredEmail
                ),
                elm$html$Html$Attributes$value(form.email)
              ]),
              _List_Nil
            )
          ])
        ),
        A2(
          elm$html$Html$fieldset,
          _List_fromArray([elm$html$Html$Attributes$class("form-group")]),
          _List_fromArray([
            A2(
              elm$html$Html$input,
              _List_fromArray([
                elm$html$Html$Attributes$class("form-control form-control-lg"),
                elm$html$Html$Attributes$type_("password"),
                elm$html$Html$Attributes$placeholder("Password"),
                elm$html$Html$Events$onInput(
                  author$project$Page$Login$EnteredPassword
                ),
                elm$html$Html$Attributes$value(form.password)
              ]),
              _List_Nil
            )
          ])
        ),
        A2(
          elm$html$Html$button,
          _List_fromArray([
            elm$html$Html$Attributes$class(
              "btn btn-lg btn-primary pull-xs-right"
            )
          ]),
          _List_fromArray([elm$html$Html$text("Sign in")])
        )
      ])
    );
  };
  var author$project$Page$Login$viewProblem = function(problem) {
    var errorMessage = (function() {
      if (problem.$ === "InvalidEntry") {
        var str = problem.b;
        return str;
      } else {
        var str = problem.a;
        return str;
      }
    })();
    return A2(
      elm$html$Html$li,
      _List_Nil,
      _List_fromArray([elm$html$Html$text(errorMessage)])
    );
  };
  var author$project$Page$Login$view = function(model) {
    return {
      content: A2(
        elm$html$Html$div,
        _List_fromArray([elm$html$Html$Attributes$class("cred-page")]),
        _List_fromArray([
          A2(
            elm$html$Html$div,
            _List_fromArray([elm$html$Html$Attributes$class("container page")]),
            _List_fromArray([
              A2(
                elm$html$Html$div,
                _List_fromArray([elm$html$Html$Attributes$class("row")]),
                _List_fromArray([
                  A2(
                    elm$html$Html$div,
                    _List_fromArray([
                      elm$html$Html$Attributes$class(
                        "col-md-6 offset-md-3 col-xs-12"
                      )
                    ]),
                    _List_fromArray([
                      A2(
                        elm$html$Html$h1,
                        _List_fromArray([
                          elm$html$Html$Attributes$class("text-xs-center")
                        ]),
                        _List_fromArray([elm$html$Html$text("Sign in")])
                      ),
                      A2(
                        elm$html$Html$p,
                        _List_fromArray([
                          elm$html$Html$Attributes$class("text-xs-center")
                        ]),
                        _List_fromArray([
                          A2(
                            elm$html$Html$a,
                            _List_fromArray([
                              author$project$Route$href(
                                author$project$Route$Register
                              )
                            ]),
                            _List_fromArray([
                              elm$html$Html$text("Need an account?")
                            ])
                          )
                        ])
                      ),
                      A2(
                        elm$html$Html$ul,
                        _List_fromArray([
                          elm$html$Html$Attributes$class("error-messages")
                        ]),
                        A2(
                          elm$core$List$map,
                          author$project$Page$Login$viewProblem,
                          model.problems
                        )
                      ),
                      author$project$Page$Login$viewForm(model.form)
                    ])
                  )
                ])
              )
            ])
          )
        ])
      ),
      title: "Login"
    };
  };
  var author$project$Asset$error = author$project$Asset$image("error.jpg");
  var elm$html$Html$main_ = _VirtualDom_node("main");
  var elm$html$Html$Attributes$tabindex = function(n) {
    return A2(_VirtualDom_attribute, "tabIndex", elm$core$String$fromInt(n));
  };
  var author$project$Page$NotFound$view = {
    content: A2(
      elm$html$Html$main_,
      _List_fromArray([
        elm$html$Html$Attributes$id("content"),
        elm$html$Html$Attributes$class("container"),
        elm$html$Html$Attributes$tabindex(-1)
      ]),
      _List_fromArray([
        A2(
          elm$html$Html$h1,
          _List_Nil,
          _List_fromArray([elm$html$Html$text("Not Found")])
        ),
        A2(
          elm$html$Html$div,
          _List_fromArray([elm$html$Html$Attributes$class("row")]),
          _List_fromArray([
            A2(
              elm$html$Html$img,
              _List_fromArray([
                author$project$Asset$src(author$project$Asset$error)
              ]),
              _List_Nil
            )
          ])
        )
      ])
    ),
    title: "Page Not Found"
  };
  var author$project$Page$Profile$ClickedDismissErrors = {
    $: "ClickedDismissErrors"
  };
  var author$project$Page$Profile$ClickedFeedPage = function(a) {
    return { $: "ClickedFeedPage", a: a };
  };
  var author$project$Page$Profile$ClickedFollow = F2(function(a, b) {
    return { $: "ClickedFollow", a: a, b: b };
  });
  var author$project$Page$Profile$ClickedUnfollow = F2(function(a, b) {
    return { $: "ClickedUnfollow", a: a, b: b };
  });
  var author$project$Page$Profile$myProfileTitle = "My Profile";
  var author$project$Page$Profile$defaultTitle = "Profile";
  var author$project$Page$Profile$titleForMe = F2(function(
    maybeCred,
    username
  ) {
    if (maybeCred.$ === "Just") {
      var cred = maybeCred.a;
      return _Utils_eq(username, author$project$Api$username(cred))
        ? author$project$Page$Profile$myProfileTitle
        : author$project$Page$Profile$defaultTitle;
    } else {
      return author$project$Page$Profile$defaultTitle;
    }
  });
  var author$project$Page$Profile$titleForOther = function(otherUsername) {
    return "Profile — " + author$project$Username$toString(otherUsername);
  };
  var author$project$Page$Profile$ClickedTab = function(a) {
    return { $: "ClickedTab", a: a };
  };
  var author$project$Page$Profile$FavoritedArticles = {
    $: "FavoritedArticles"
  };
  var author$project$Page$Profile$favoritedArticles = _Utils_Tuple2(
    "Favorited Articles",
    author$project$Page$Profile$ClickedTab(
      author$project$Page$Profile$FavoritedArticles
    )
  );
  var author$project$Page$Profile$myArticles = _Utils_Tuple2(
    "My Articles",
    author$project$Page$Profile$ClickedTab(
      author$project$Page$Profile$MyArticles
    )
  );
  var author$project$Page$Profile$viewTabs = function(tab) {
    if (tab.$ === "MyArticles") {
      return A3(
        author$project$Article$Feed$viewTabs,
        _List_Nil,
        author$project$Page$Profile$myArticles,
        _List_fromArray([author$project$Page$Profile$favoritedArticles])
      );
    } else {
      return A3(
        author$project$Article$Feed$viewTabs,
        _List_fromArray([author$project$Page$Profile$myArticles]),
        author$project$Page$Profile$favoritedArticles,
        _List_Nil
      );
    }
  };
  var author$project$Profile$bio = function(_n0) {
    var info = _n0.a;
    return info.bio;
  };
  var elm$html$Html$h4 = _VirtualDom_node("h4");
  var author$project$Page$Profile$view = function(model) {
    var title = (function() {
      var _n4 = model.author;
      switch (_n4.$) {
        case "Loaded":
          switch (_n4.a.$) {
            case "IsViewer":
              var _n5 = _n4.a;
              return author$project$Page$Profile$myProfileTitle;
            case "IsFollowing":
              var author = _n4.a;
              var followedAuthor = author.a;
              return author$project$Page$Profile$titleForOther(
                author$project$Author$username(author)
              );
            default:
              var author = _n4.a;
              var unfollowedAuthor = author.a;
              return author$project$Page$Profile$titleForOther(
                author$project$Author$username(author)
              );
          }
        case "Loading":
          var username = _n4.a;
          return A2(
            author$project$Page$Profile$titleForMe,
            author$project$Session$cred(model.session),
            username
          );
        case "LoadingSlowly":
          var username = _n4.a;
          return A2(
            author$project$Page$Profile$titleForMe,
            author$project$Session$cred(model.session),
            username
          );
        default:
          var username = _n4.a;
          return A2(
            author$project$Page$Profile$titleForMe,
            author$project$Session$cred(model.session),
            username
          );
      }
    })();
    return {
      content: (function() {
        var _n0 = model.author;
        switch (_n0.$) {
          case "Loaded":
            var author = _n0.a;
            var username = author$project$Author$username(author);
            var profile = author$project$Author$profile(author);
            var followButton = (function() {
              var _n2 = author$project$Session$cred(model.session);
              if (_n2.$ === "Just") {
                var cred = _n2.a;
                switch (author.$) {
                  case "IsViewer":
                    return elm$html$Html$text("");
                  case "IsFollowing":
                    var followedAuthor = author.a;
                    return A3(
                      author$project$Author$unfollowButton,
                      author$project$Page$Profile$ClickedUnfollow,
                      cred,
                      followedAuthor
                    );
                  default:
                    var unfollowedAuthor = author.a;
                    return A3(
                      author$project$Author$followButton,
                      author$project$Page$Profile$ClickedFollow,
                      cred,
                      unfollowedAuthor
                    );
                }
              } else {
                return elm$html$Html$text("");
              }
            })();
            return A2(
              elm$html$Html$div,
              _List_fromArray([elm$html$Html$Attributes$class("profile-page")]),
              _List_fromArray([
                A2(
                  author$project$Page$viewErrors,
                  author$project$Page$Profile$ClickedDismissErrors,
                  model.errors
                ),
                A2(
                  elm$html$Html$div,
                  _List_fromArray([
                    elm$html$Html$Attributes$class("user-info")
                  ]),
                  _List_fromArray([
                    A2(
                      elm$html$Html$div,
                      _List_fromArray([
                        elm$html$Html$Attributes$class("container")
                      ]),
                      _List_fromArray([
                        A2(
                          elm$html$Html$div,
                          _List_fromArray([
                            elm$html$Html$Attributes$class("row")
                          ]),
                          _List_fromArray([
                            A2(
                              elm$html$Html$div,
                              _List_fromArray([
                                elm$html$Html$Attributes$class(
                                  "col-xs-12 col-md-10 offset-md-1"
                                )
                              ]),
                              _List_fromArray([
                                A2(
                                  elm$html$Html$img,
                                  _List_fromArray([
                                    elm$html$Html$Attributes$class("user-img"),
                                    author$project$Avatar$src(
                                      author$project$Profile$avatar(profile)
                                    )
                                  ]),
                                  _List_Nil
                                ),
                                A2(
                                  elm$html$Html$h4,
                                  _List_Nil,
                                  _List_fromArray([
                                    author$project$Username$toHtml(username)
                                  ])
                                ),
                                A2(
                                  elm$html$Html$p,
                                  _List_Nil,
                                  _List_fromArray([
                                    elm$html$Html$text(
                                      A2(
                                        elm$core$Maybe$withDefault,
                                        "",
                                        author$project$Profile$bio(profile)
                                      )
                                    )
                                  ])
                                ),
                                followButton
                              ])
                            )
                          ])
                        )
                      ])
                    )
                  ])
                ),
                (function() {
                  var _n1 = model.feed;
                  switch (_n1.$) {
                    case "Loaded":
                      var feed = _n1.a;
                      return A2(
                        elm$html$Html$div,
                        _List_fromArray([
                          elm$html$Html$Attributes$class("container")
                        ]),
                        _List_fromArray([
                          A2(
                            elm$html$Html$div,
                            _List_fromArray([
                              elm$html$Html$Attributes$class("row")
                            ]),
                            _List_fromArray([
                              A2(
                                elm$html$Html$div,
                                _List_fromArray([
                                  elm$html$Html$Attributes$class(
                                    "col-xs-12 col-md-10 offset-md-1"
                                  )
                                ]),
                                _List_fromArray([
                                  A2(
                                    elm$html$Html$div,
                                    _List_fromArray([
                                      elm$html$Html$Attributes$class(
                                        "articles-toggle"
                                      )
                                    ]),
                                    elm$core$List$concat(
                                      _List_fromArray([
                                        _List_fromArray([
                                          author$project$Page$Profile$viewTabs(
                                            model.feedTab
                                          )
                                        ]),
                                        A2(
                                          elm$core$List$map,
                                          elm$html$Html$map(
                                            author$project$Page$Profile$GotFeedMsg
                                          ),
                                          A2(
                                            author$project$Article$Feed$viewArticles,
                                            model.timeZone,
                                            feed
                                          )
                                        ),
                                        _List_fromArray([
                                          A3(
                                            author$project$Article$Feed$viewPagination,
                                            author$project$Page$Profile$ClickedFeedPage,
                                            model.feedPage,
                                            feed
                                          )
                                        ])
                                      ])
                                    )
                                  )
                                ])
                              )
                            ])
                          )
                        ])
                      );
                    case "Loading":
                      return elm$html$Html$text("");
                    case "LoadingSlowly":
                      return author$project$Loading$icon;
                    default:
                      return author$project$Loading$error("feed");
                  }
                })()
              ])
            );
          case "Loading":
            return elm$html$Html$text("");
          case "LoadingSlowly":
            return author$project$Loading$icon;
          default:
            return author$project$Loading$error("profile");
        }
      })(),
      title: title
    };
  };
  var author$project$Page$Register$EnteredEmail = function(a) {
    return { $: "EnteredEmail", a: a };
  };
  var author$project$Page$Register$EnteredPassword = function(a) {
    return { $: "EnteredPassword", a: a };
  };
  var author$project$Page$Register$EnteredUsername = function(a) {
    return { $: "EnteredUsername", a: a };
  };
  var author$project$Page$Register$SubmittedForm = { $: "SubmittedForm" };
  var author$project$Page$Register$viewForm = function(form) {
    return A2(
      elm$html$Html$form,
      _List_fromArray([
        elm$html$Html$Events$onSubmit(
          author$project$Page$Register$SubmittedForm
        )
      ]),
      _List_fromArray([
        A2(
          elm$html$Html$fieldset,
          _List_fromArray([elm$html$Html$Attributes$class("form-group")]),
          _List_fromArray([
            A2(
              elm$html$Html$input,
              _List_fromArray([
                elm$html$Html$Attributes$class("form-control form-control-lg"),
                elm$html$Html$Attributes$placeholder("Username"),
                elm$html$Html$Events$onInput(
                  author$project$Page$Register$EnteredUsername
                ),
                elm$html$Html$Attributes$value(form.username)
              ]),
              _List_Nil
            )
          ])
        ),
        A2(
          elm$html$Html$fieldset,
          _List_fromArray([elm$html$Html$Attributes$class("form-group")]),
          _List_fromArray([
            A2(
              elm$html$Html$input,
              _List_fromArray([
                elm$html$Html$Attributes$class("form-control form-control-lg"),
                elm$html$Html$Attributes$placeholder("Email"),
                elm$html$Html$Events$onInput(
                  author$project$Page$Register$EnteredEmail
                ),
                elm$html$Html$Attributes$value(form.email)
              ]),
              _List_Nil
            )
          ])
        ),
        A2(
          elm$html$Html$fieldset,
          _List_fromArray([elm$html$Html$Attributes$class("form-group")]),
          _List_fromArray([
            A2(
              elm$html$Html$input,
              _List_fromArray([
                elm$html$Html$Attributes$class("form-control form-control-lg"),
                elm$html$Html$Attributes$type_("password"),
                elm$html$Html$Attributes$placeholder("Password"),
                elm$html$Html$Events$onInput(
                  author$project$Page$Register$EnteredPassword
                ),
                elm$html$Html$Attributes$value(form.password)
              ]),
              _List_Nil
            )
          ])
        ),
        A2(
          elm$html$Html$button,
          _List_fromArray([
            elm$html$Html$Attributes$class(
              "btn btn-lg btn-primary pull-xs-right"
            )
          ]),
          _List_fromArray([elm$html$Html$text("Sign up")])
        )
      ])
    );
  };
  var author$project$Page$Register$viewProblem = function(problem) {
    var errorMessage = (function() {
      if (problem.$ === "InvalidEntry") {
        var str = problem.b;
        return str;
      } else {
        var str = problem.a;
        return str;
      }
    })();
    return A2(
      elm$html$Html$li,
      _List_Nil,
      _List_fromArray([elm$html$Html$text(errorMessage)])
    );
  };
  var author$project$Page$Register$view = function(model) {
    return {
      content: A2(
        elm$html$Html$div,
        _List_fromArray([elm$html$Html$Attributes$class("cred-page")]),
        _List_fromArray([
          A2(
            elm$html$Html$div,
            _List_fromArray([elm$html$Html$Attributes$class("container page")]),
            _List_fromArray([
              A2(
                elm$html$Html$div,
                _List_fromArray([elm$html$Html$Attributes$class("row")]),
                _List_fromArray([
                  A2(
                    elm$html$Html$div,
                    _List_fromArray([
                      elm$html$Html$Attributes$class(
                        "col-md-6 offset-md-3 col-xs-12"
                      )
                    ]),
                    _List_fromArray([
                      A2(
                        elm$html$Html$h1,
                        _List_fromArray([
                          elm$html$Html$Attributes$class("text-xs-center")
                        ]),
                        _List_fromArray([elm$html$Html$text("Sign up")])
                      ),
                      A2(
                        elm$html$Html$p,
                        _List_fromArray([
                          elm$html$Html$Attributes$class("text-xs-center")
                        ]),
                        _List_fromArray([
                          A2(
                            elm$html$Html$a,
                            _List_fromArray([
                              author$project$Route$href(
                                author$project$Route$Login
                              )
                            ]),
                            _List_fromArray([
                              elm$html$Html$text("Have an account?")
                            ])
                          )
                        ])
                      ),
                      A2(
                        elm$html$Html$ul,
                        _List_fromArray([
                          elm$html$Html$Attributes$class("error-messages")
                        ]),
                        A2(
                          elm$core$List$map,
                          author$project$Page$Register$viewProblem,
                          model.problems
                        )
                      ),
                      author$project$Page$Register$viewForm(model.form)
                    ])
                  )
                ])
              )
            ])
          )
        ])
      ),
      title: "Register"
    };
  };
  var author$project$Page$Settings$EnteredAvatar = function(a) {
    return { $: "EnteredAvatar", a: a };
  };
  var author$project$Page$Settings$EnteredBio = function(a) {
    return { $: "EnteredBio", a: a };
  };
  var author$project$Page$Settings$EnteredEmail = function(a) {
    return { $: "EnteredEmail", a: a };
  };
  var author$project$Page$Settings$EnteredPassword = function(a) {
    return { $: "EnteredPassword", a: a };
  };
  var author$project$Page$Settings$EnteredUsername = function(a) {
    return { $: "EnteredUsername", a: a };
  };
  var author$project$Page$Settings$SubmittedForm = F2(function(a, b) {
    return { $: "SubmittedForm", a: a, b: b };
  });
  var author$project$Page$Settings$viewForm = F2(function(cred, form) {
    return A2(
      elm$html$Html$form,
      _List_fromArray([
        elm$html$Html$Events$onSubmit(
          A2(author$project$Page$Settings$SubmittedForm, cred, form)
        )
      ]),
      _List_fromArray([
        A2(
          elm$html$Html$fieldset,
          _List_Nil,
          _List_fromArray([
            A2(
              elm$html$Html$fieldset,
              _List_fromArray([elm$html$Html$Attributes$class("form-group")]),
              _List_fromArray([
                A2(
                  elm$html$Html$input,
                  _List_fromArray([
                    elm$html$Html$Attributes$class("form-control"),
                    elm$html$Html$Attributes$placeholder(
                      "URL of profile picture"
                    ),
                    elm$html$Html$Attributes$value(form.avatar),
                    elm$html$Html$Events$onInput(
                      author$project$Page$Settings$EnteredAvatar
                    )
                  ]),
                  _List_Nil
                )
              ])
            ),
            A2(
              elm$html$Html$fieldset,
              _List_fromArray([elm$html$Html$Attributes$class("form-group")]),
              _List_fromArray([
                A2(
                  elm$html$Html$input,
                  _List_fromArray([
                    elm$html$Html$Attributes$class(
                      "form-control form-control-lg"
                    ),
                    elm$html$Html$Attributes$placeholder("Username"),
                    elm$html$Html$Attributes$value(form.username),
                    elm$html$Html$Events$onInput(
                      author$project$Page$Settings$EnteredUsername
                    )
                  ]),
                  _List_Nil
                )
              ])
            ),
            A2(
              elm$html$Html$fieldset,
              _List_fromArray([elm$html$Html$Attributes$class("form-group")]),
              _List_fromArray([
                A2(
                  elm$html$Html$textarea,
                  _List_fromArray([
                    elm$html$Html$Attributes$class(
                      "form-control form-control-lg"
                    ),
                    elm$html$Html$Attributes$placeholder("Short bio about you"),
                    A2(elm$html$Html$Attributes$attribute, "rows", "8"),
                    elm$html$Html$Attributes$value(form.bio),
                    elm$html$Html$Events$onInput(
                      author$project$Page$Settings$EnteredBio
                    )
                  ]),
                  _List_Nil
                )
              ])
            ),
            A2(
              elm$html$Html$fieldset,
              _List_fromArray([elm$html$Html$Attributes$class("form-group")]),
              _List_fromArray([
                A2(
                  elm$html$Html$input,
                  _List_fromArray([
                    elm$html$Html$Attributes$class(
                      "form-control form-control-lg"
                    ),
                    elm$html$Html$Attributes$placeholder("Email"),
                    elm$html$Html$Attributes$value(form.email),
                    elm$html$Html$Events$onInput(
                      author$project$Page$Settings$EnteredEmail
                    )
                  ]),
                  _List_Nil
                )
              ])
            ),
            A2(
              elm$html$Html$fieldset,
              _List_fromArray([elm$html$Html$Attributes$class("form-group")]),
              _List_fromArray([
                A2(
                  elm$html$Html$input,
                  _List_fromArray([
                    elm$html$Html$Attributes$class(
                      "form-control form-control-lg"
                    ),
                    elm$html$Html$Attributes$type_("password"),
                    elm$html$Html$Attributes$placeholder("Password"),
                    elm$html$Html$Attributes$value(form.password),
                    elm$html$Html$Events$onInput(
                      author$project$Page$Settings$EnteredPassword
                    )
                  ]),
                  _List_Nil
                )
              ])
            ),
            A2(
              elm$html$Html$button,
              _List_fromArray([
                elm$html$Html$Attributes$class(
                  "btn btn-lg btn-primary pull-xs-right"
                )
              ]),
              _List_fromArray([elm$html$Html$text("Update Settings")])
            )
          ])
        )
      ])
    );
  });
  var author$project$Page$Settings$viewProblem = function(problem) {
    var errorMessage = (function() {
      if (problem.$ === "InvalidEntry") {
        var message = problem.b;
        return message;
      } else {
        var message = problem.a;
        return message;
      }
    })();
    return A2(
      elm$html$Html$li,
      _List_Nil,
      _List_fromArray([elm$html$Html$text(errorMessage)])
    );
  };
  var author$project$Page$Settings$view = function(model) {
    return {
      content: (function() {
        var _n0 = author$project$Session$cred(model.session);
        if (_n0.$ === "Just") {
          var cred = _n0.a;
          return A2(
            elm$html$Html$div,
            _List_fromArray([elm$html$Html$Attributes$class("settings-page")]),
            _List_fromArray([
              A2(
                elm$html$Html$div,
                _List_fromArray([
                  elm$html$Html$Attributes$class("container page")
                ]),
                _List_fromArray([
                  A2(
                    elm$html$Html$div,
                    _List_fromArray([elm$html$Html$Attributes$class("row")]),
                    _List_fromArray([
                      A2(
                        elm$html$Html$div,
                        _List_fromArray([
                          elm$html$Html$Attributes$class(
                            "col-md-6 offset-md-3 col-xs-12"
                          )
                        ]),
                        _List_fromArray([
                          A2(
                            elm$html$Html$h1,
                            _List_fromArray([
                              elm$html$Html$Attributes$class("text-xs-center")
                            ]),
                            _List_fromArray([
                              elm$html$Html$text("Your Settings")
                            ])
                          ),
                          A2(
                            elm$html$Html$ul,
                            _List_fromArray([
                              elm$html$Html$Attributes$class("error-messages")
                            ]),
                            A2(
                              elm$core$List$map,
                              author$project$Page$Settings$viewProblem,
                              model.problems
                            )
                          ),
                          (function() {
                            var _n1 = model.status;
                            switch (_n1.$) {
                              case "Loaded":
                                var form = _n1.a;
                                return A2(
                                  author$project$Page$Settings$viewForm,
                                  cred,
                                  form
                                );
                              case "Loading":
                                return elm$html$Html$text("");
                              case "LoadingSlowly":
                                return author$project$Loading$icon;
                              default:
                                return elm$html$Html$text(
                                  "Error loading page."
                                );
                            }
                          })()
                        ])
                      )
                    ])
                  )
                ])
              )
            ])
          );
        } else {
          return elm$html$Html$text("Sign in to view your settings.");
        }
      })(),
      title: "Settings"
    };
  };
  var author$project$Main$view = function(model) {
    var viewPage = F3(function(page, toMsg, config) {
      var _n4 = A3(
        author$project$Page$view,
        author$project$Session$viewer(author$project$Main$toSession(model)),
        page,
        config
      );
      var title = _n4.title;
      var body = _n4.body;
      return {
        body: A2(elm$core$List$map, elm$html$Html$map(toMsg), body),
        title: title
      };
    });
    switch (model.$) {
      case "Redirect":
        return A3(
          viewPage,
          author$project$Page$Other,
          function(_n1) {
            return author$project$Main$Ignored;
          },
          author$project$Page$Blank$view
        );
      case "NotFound":
        return A3(
          viewPage,
          author$project$Page$Other,
          function(_n2) {
            return author$project$Main$Ignored;
          },
          author$project$Page$NotFound$view
        );
      case "Settings":
        var settings = model.a;
        return A3(
          viewPage,
          author$project$Page$Other,
          author$project$Main$GotSettingsMsg,
          author$project$Page$Settings$view(settings)
        );
      case "Home":
        var home = model.a;
        return A3(
          viewPage,
          author$project$Page$Home,
          author$project$Main$GotHomeMsg,
          author$project$Page$Home$view(home)
        );
      case "Login":
        var login = model.a;
        return A3(
          viewPage,
          author$project$Page$Other,
          author$project$Main$GotLoginMsg,
          author$project$Page$Login$view(login)
        );
      case "Register":
        var register = model.a;
        return A3(
          viewPage,
          author$project$Page$Other,
          author$project$Main$GotRegisterMsg,
          author$project$Page$Register$view(register)
        );
      case "Profile":
        var username = model.a;
        var profile = model.b;
        return A3(
          viewPage,
          author$project$Page$Profile(username),
          author$project$Main$GotProfileMsg,
          author$project$Page$Profile$view(profile)
        );
      case "Article":
        var article = model.a;
        return A3(
          viewPage,
          author$project$Page$Other,
          author$project$Main$GotArticleMsg,
          author$project$Page$Article$view(article)
        );
      default:
        if (model.a.$ === "Nothing") {
          var _n3 = model.a;
          var editor = model.b;
          return A3(
            viewPage,
            author$project$Page$NewArticle,
            author$project$Main$GotEditorMsg,
            author$project$Page$Article$Editor$view(editor)
          );
        } else {
          var editor = model.b;
          return A3(
            viewPage,
            author$project$Page$Other,
            author$project$Main$GotEditorMsg,
            author$project$Page$Article$Editor$view(editor)
          );
        }
    }
  };
  var author$project$Main$main = A2(
    author$project$Api$application,
    author$project$Viewer$decoder,
    {
      init: author$project$Main$init,
      onUrlChange: author$project$Main$ChangedUrl,
      onUrlRequest: author$project$Main$ClickedLink,
      subscriptions: author$project$Main$subscriptions,
      update: author$project$Main$update,
      view: author$project$Main$view
    }
  );
  _Platform_export({
    Main: {
      init: author$project$Main$main(elm$json$Json$Decode$value)({
        versions: { elm: "0.19.0" },
        types: {
          message: "Main.Msg",
          aliases: {
            "Url.Url": {
              args: [],
              type:
                "{ protocol : Url.Protocol, host : String.String, port_ : Maybe.Maybe Basics.Int, path : String.String, query : Maybe.Maybe String.String, fragment : Maybe.Maybe String.String }"
            },
            "Page.Settings.Form": {
              args: [],
              type:
                "{ avatar : String.String, bio : String.String, email : String.String, username : String.String, password : String.String }"
            },
            "Article.Internals": {
              args: [],
              type:
                "{ slug : Article.Slug.Slug, author : Author.Author, metadata : Article.Metadata }"
            },
            "Article.Metadata": {
              args: [],
              type:
                "{ description : String.String, title : String.String, tags : List.List String.String, createdAt : Time.Posix, favorited : Basics.Bool, favoritesCount : Basics.Int }"
            },
            "Article.Body.MarkdownString": { args: [], type: "String.String" },
            "Article.Comment.Internals": {
              args: [],
              type:
                "{ id : CommentId.CommentId, body : String.String, createdAt : Time.Posix, author : Author.Author }"
            },
            "Article.Feed.Internals": {
              args: [],
              type:
                "{ session : Session.Session, errors : List.List String.String, articles : PaginatedList.PaginatedList (Article.Article Article.Preview), isLoading : Basics.Bool }"
            },
            "Http.Response": {
              args: ["body"],
              type:
                "{ url : String.String, status : { code : Basics.Int, message : String.String }, headers : Dict.Dict String.String String.String, body : body }"
            },
            "Time.Era": {
              args: [],
              type: "{ start : Basics.Int, offset : Basics.Int }"
            },
            "Profile.Internals": {
              args: [],
              type:
                "{ bio : Maybe.Maybe String.String, avatar : Avatar.Avatar }"
            }
          },
          unions: {
            "Main.Msg": {
              args: [],
              tags: {
                Ignored: [],
                ChangedRoute: ["Maybe.Maybe Route.Route"],
                ChangedUrl: ["Url.Url"],
                ClickedLink: ["Browser.UrlRequest"],
                GotHomeMsg: ["Page.Home.Msg"],
                GotSettingsMsg: ["Page.Settings.Msg"],
                GotLoginMsg: ["Page.Login.Msg"],
                GotRegisterMsg: ["Page.Register.Msg"],
                GotProfileMsg: ["Page.Profile.Msg"],
                GotArticleMsg: ["Page.Article.Msg"],
                GotEditorMsg: ["Page.Article.Editor.Msg"],
                GotSession: ["Session.Session"]
              }
            },
            "Page.Article.Msg": {
              args: [],
              tags: {
                ClickedDeleteArticle: ["Api.Cred", "Article.Slug.Slug"],
                ClickedDeleteComment: [
                  "Api.Cred",
                  "Article.Slug.Slug",
                  "CommentId.CommentId"
                ],
                ClickedDismissErrors: [],
                ClickedFavorite: [
                  "Api.Cred",
                  "Article.Slug.Slug",
                  "Article.Body.Body"
                ],
                ClickedUnfavorite: [
                  "Api.Cred",
                  "Article.Slug.Slug",
                  "Article.Body.Body"
                ],
                ClickedFollow: ["Api.Cred", "Author.UnfollowedAuthor"],
                ClickedUnfollow: ["Api.Cred", "Author.FollowedAuthor"],
                ClickedPostComment: ["Api.Cred", "Article.Slug.Slug"],
                EnteredCommentText: ["String.String"],
                CompletedLoadArticle: [
                  "Result.Result Http.Error (Article.Article Article.Full)"
                ],
                CompletedLoadComments: [
                  "Result.Result Http.Error (List.List Article.Comment.Comment)"
                ],
                CompletedDeleteArticle: ["Result.Result Http.Error ()"],
                CompletedDeleteComment: [
                  "CommentId.CommentId",
                  "Result.Result Http.Error ()"
                ],
                CompletedFavoriteChange: [
                  "Result.Result Http.Error (Article.Article Article.Full)"
                ],
                CompletedFollowChange: [
                  "Result.Result Http.Error Author.Author"
                ],
                CompletedPostComment: [
                  "Result.Result Http.Error Article.Comment.Comment"
                ],
                GotTimeZone: ["Time.Zone"],
                GotSession: ["Session.Session"],
                PassedSlowLoadThreshold: []
              }
            },
            "Page.Article.Editor.Msg": {
              args: [],
              tags: {
                ClickedSave: ["Api.Cred"],
                EnteredBody: ["String.String"],
                EnteredDescription: ["String.String"],
                EnteredTags: ["String.String"],
                EnteredTitle: ["String.String"],
                CompletedCreate: [
                  "Result.Result Http.Error (Article.Article Article.Full)"
                ],
                CompletedEdit: [
                  "Result.Result Http.Error (Article.Article Article.Full)"
                ],
                CompletedArticleLoad: [
                  "Result.Result ( Article.Slug.Slug, Http.Error ) (Article.Article Article.Full)"
                ],
                GotSession: ["Session.Session"],
                PassedSlowLoadThreshold: []
              }
            },
            "Page.Home.Msg": {
              args: [],
              tags: {
                ClickedTag: ["Article.Tag.Tag"],
                ClickedTab: ["Page.Home.FeedTab"],
                ClickedFeedPage: ["Basics.Int"],
                CompletedFeedLoad: [
                  "Result.Result Http.Error Article.Feed.Model"
                ],
                CompletedTagsLoad: [
                  "Result.Result Http.Error (List.List Article.Tag.Tag)"
                ],
                GotTimeZone: ["Time.Zone"],
                GotFeedMsg: ["Article.Feed.Msg"],
                GotSession: ["Session.Session"],
                PassedSlowLoadThreshold: []
              }
            },
            "Page.Login.Msg": {
              args: [],
              tags: {
                SubmittedForm: [],
                EnteredEmail: ["String.String"],
                EnteredPassword: ["String.String"],
                CompletedLogin: ["Result.Result Http.Error Viewer.Viewer"],
                GotSession: ["Session.Session"]
              }
            },
            "Page.Profile.Msg": {
              args: [],
              tags: {
                ClickedDismissErrors: [],
                ClickedFollow: ["Api.Cred", "Author.UnfollowedAuthor"],
                ClickedUnfollow: ["Api.Cred", "Author.FollowedAuthor"],
                ClickedTab: ["Page.Profile.FeedTab"],
                ClickedFeedPage: ["Basics.Int"],
                CompletedFollowChange: [
                  "Result.Result Http.Error Author.Author"
                ],
                CompletedAuthorLoad: [
                  "Result.Result ( Username.Username, Http.Error ) Author.Author"
                ],
                CompletedFeedLoad: [
                  "Result.Result ( Username.Username, Http.Error ) Article.Feed.Model"
                ],
                GotTimeZone: ["Time.Zone"],
                GotFeedMsg: ["Article.Feed.Msg"],
                GotSession: ["Session.Session"],
                PassedSlowLoadThreshold: []
              }
            },
            "Page.Register.Msg": {
              args: [],
              tags: {
                SubmittedForm: [],
                EnteredEmail: ["String.String"],
                EnteredUsername: ["String.String"],
                EnteredPassword: ["String.String"],
                CompletedRegister: ["Result.Result Http.Error Viewer.Viewer"],
                GotSession: ["Session.Session"]
              }
            },
            "Page.Settings.Msg": {
              args: [],
              tags: {
                SubmittedForm: ["Api.Cred", "Page.Settings.Form"],
                EnteredEmail: ["String.String"],
                EnteredUsername: ["String.String"],
                EnteredPassword: ["String.String"],
                EnteredBio: ["String.String"],
                EnteredAvatar: ["String.String"],
                CompletedFormLoad: [
                  "Result.Result Http.Error Page.Settings.Form"
                ],
                CompletedSave: ["Result.Result Http.Error Viewer.Viewer"],
                GotSession: ["Session.Session"],
                PassedSlowLoadThreshold: []
              }
            },
            "Route.Route": {
              args: [],
              tags: {
                Home: [],
                Root: [],
                Login: [],
                Logout: [],
                Register: [],
                Settings: [],
                Article: ["Article.Slug.Slug"],
                Profile: ["Username.Username"],
                NewArticle: [],
                EditArticle: ["Article.Slug.Slug"]
              }
            },
            "Session.Session": {
              args: [],
              tags: {
                LoggedIn: ["Browser.Navigation.Key", "Viewer.Viewer"],
                Guest: ["Browser.Navigation.Key"]
              }
            },
            "Browser.UrlRequest": {
              args: [],
              tags: { Internal: ["Url.Url"], External: ["String.String"] }
            },
            "Basics.Int": { args: [], tags: { Int: [] } },
            "Maybe.Maybe": { args: ["a"], tags: { Just: ["a"], Nothing: [] } },
            "String.String": { args: [], tags: { String: [] } },
            "Url.Protocol": { args: [], tags: { Http: [], Https: [] } },
            "Api.Cred": {
              args: [],
              tags: { Cred: ["Username.Username", "String.String"] }
            },
            "Article.Article": {
              args: ["a"],
              tags: { Article: ["Article.Internals", "a"] }
            },
            "Article.Full": { args: [], tags: { Full: ["Article.Body.Body"] } },
            "Article.Body.Body": {
              args: [],
              tags: { Body: ["Article.Body.MarkdownString"] }
            },
            "Article.Comment.Comment": {
              args: [],
              tags: { Comment: ["Article.Comment.Internals"] }
            },
            "Article.Feed.Model": {
              args: [],
              tags: { Model: ["Article.Feed.Internals"] }
            },
            "Article.Feed.Msg": {
              args: [],
              tags: {
                ClickedDismissErrors: [],
                ClickedFavorite: ["Api.Cred", "Article.Slug.Slug"],
                ClickedUnfavorite: ["Api.Cred", "Article.Slug.Slug"],
                CompletedFavorite: [
                  "Result.Result Http.Error (Article.Article Article.Preview)"
                ]
              }
            },
            "Article.Slug.Slug": {
              args: [],
              tags: { Slug: ["String.String"] }
            },
            "Article.Tag.Tag": { args: [], tags: { Tag: ["String.String"] } },
            "Author.Author": {
              args: [],
              tags: {
                IsFollowing: ["Author.FollowedAuthor"],
                IsNotFollowing: ["Author.UnfollowedAuthor"],
                IsViewer: ["Api.Cred", "Profile.Profile"]
              }
            },
            "Author.FollowedAuthor": {
              args: [],
              tags: { FollowedAuthor: ["Username.Username", "Profile.Profile"] }
            },
            "Author.UnfollowedAuthor": {
              args: [],
              tags: {
                UnfollowedAuthor: ["Username.Username", "Profile.Profile"]
              }
            },
            "CommentId.CommentId": {
              args: [],
              tags: { CommentId: ["Basics.Int"] }
            },
            "Page.Home.FeedTab": {
              args: [],
              tags: {
                YourFeed: ["Api.Cred"],
                GlobalFeed: [],
                TagFeed: ["Article.Tag.Tag"]
              }
            },
            "Page.Profile.FeedTab": {
              args: [],
              tags: { MyArticles: [], FavoritedArticles: [] }
            },
            "Username.Username": {
              args: [],
              tags: { Username: ["String.String"] }
            },
            "Viewer.Viewer": {
              args: [],
              tags: { Viewer: ["Avatar.Avatar", "Api.Cred"] }
            },
            "Browser.Navigation.Key": { args: [], tags: { Key: [] } },
            "List.List": { args: ["a"], tags: {} },
            "Result.Result": {
              args: ["error", "value"],
              tags: { Ok: ["value"], Err: ["error"] }
            },
            "Http.Error": {
              args: [],
              tags: {
                BadUrl: ["String.String"],
                Timeout: [],
                NetworkError: [],
                BadStatus: ["Http.Response String.String"],
                BadPayload: ["String.String", "Http.Response String.String"]
              }
            },
            "Time.Zone": {
              args: [],
              tags: { Zone: ["Basics.Int", "List.List Time.Era"] }
            },
            "Article.Preview": { args: [], tags: { Preview: [] } },
            "Avatar.Avatar": {
              args: [],
              tags: { Avatar: ["Maybe.Maybe String.String"] }
            },
            "PaginatedList.PaginatedList": {
              args: ["a"],
              tags: {
                PaginatedList: ["{ values : List.List a, total : Basics.Int }"]
              }
            },
            "Profile.Profile": {
              args: [],
              tags: { Profile: ["Profile.Internals"] }
            },
            "Basics.Bool": { args: [], tags: { True: [], False: [] } },
            "Dict.Dict": {
              args: ["k", "v"],
              tags: {
                RBNode_elm_builtin: [
                  "Dict.NColor",
                  "k",
                  "v",
                  "Dict.Dict k v",
                  "Dict.Dict k v"
                ],
                RBEmpty_elm_builtin: []
              }
            },
            "Time.Posix": { args: [], tags: { Posix: ["Basics.Int"] } },
            "Dict.NColor": { args: [], tags: { Red: [], Black: [] } }
          }
        }
      })
    }
  });
})(this);
