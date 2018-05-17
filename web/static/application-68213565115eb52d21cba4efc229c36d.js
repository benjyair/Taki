/*
 MIT License - http://www.opensource.org/licenses/mit-license.php

 For usage and examples, visit:
 http://timeago.yarp.com/

 Copyright (c) 2008-2012, Ryan McGeary (ryan -[at]- mcgeary [*dot*] org)
*/
(function (a, d) {
    function b(M, a, b) {
        if (b === d && 1 === M.nodeType) if (b = "data-" + a.replace(cc, "-$1").toLowerCase(), b = M.getAttribute(b), "string" === typeof b) {
            try {
                b = "true" === b ? !0 : "false" === b ? !1 : "null" === b ? null : k.isNumeric(b) ? +b : dc.test(b) ? k.parseJSON(b) : b
            } catch (c) {
            }
            k.data(M, a, b)
        } else b = d;
        return b
    }

    function c(M) {
        for (var a in M) if (!("data" === a && k.isEmptyObject(M[a])) && "toJSON" !== a) return !1;
        return !0
    }

    function f(M, a, b) {
        var c = a + "defer", d = a + "queue", f = a + "mark", g = k._data(M, c);
        g && (("queue" === b || !k._data(M, d)) && ("mark" ===
            b || !k._data(M, f))) && setTimeout(function () {
            !k._data(M, d) && !k._data(M, f) && (k.removeData(M, c, !0), g.fire())
        }, 0)
    }

    function g() {
        return !1
    }

    function j() {
        return !0
    }

    function m(a, b, c) {
        b = b || 0;
        if (k.isFunction(b)) return k.grep(a, function (a, M) {
            return !!b.call(a, M, a) === c
        });
        if (b.nodeType) return k.grep(a, function (a) {
            return a === b === c
        });
        if ("string" === typeof b) {
            var d = k.grep(a, function (a) {
                return 1 === a.nodeType
            });
            if (ec.test(b)) return k.filter(b, d, !c);
            b = k.filter(b, d)
        }
        return k.grep(a, function (a) {
            return 0 <= k.inArray(a, b) === c
        })
    }

    function o(a) {
        var b = vb.split("|"), a = a.createDocumentFragment();
        if (a.createElement) for (; b.length;) a.createElement(b.pop());
        return a
    }

    function n(a, b) {
        if (1 === b.nodeType && k.hasData(a)) {
            var c, d, f;
            d = k._data(a);
            var g = k._data(b, d), l = d.events;
            if (l) for (c in delete g.handle, g.events = {}, l) {
                d = 0;
                for (f = l[c].length; d < f; d++) k.event.add(b, c, l[c][d])
            }
            g.data && (g.data = k.extend({}, g.data))
        }
    }

    function l(a, b) {
        var c;
        if (1 === b.nodeType) {
            b.clearAttributes && b.clearAttributes();
            b.mergeAttributes && b.mergeAttributes(a);
            c = b.nodeName.toLowerCase();
            if ("object" === c) b.outerHTML = a.outerHTML; else if ("input" === c && ("checkbox" === a.type || "radio" === a.type)) {
                if (a.checked && (b.defaultChecked = b.checked = a.checked), b.value !== a.value) b.value = a.value
            } else "option" === c ? b.selected = a.defaultSelected : "input" === c || "textarea" === c ? b.defaultValue = a.defaultValue : "script" === c && b.text !== a.text && (b.text = a.text);
            b.removeAttribute(k.expando);
            b.removeAttribute("_submit_attached");
            b.removeAttribute("_change_attached")
        }
    }

    function p(a) {
        return "undefined" !== typeof a.getElementsByTagName ?
            a.getElementsByTagName("*") : "undefined" !== typeof a.querySelectorAll ? a.querySelectorAll("*") : []
    }

    function r(a) {
        if ("checkbox" === a.type || "radio" === a.type) a.defaultChecked = a.checked
    }

    function w(a) {
        var b = (a.nodeName || "").toLowerCase();
        "input" === b ? r(a) : "script" !== b && "undefined" !== typeof a.getElementsByTagName && k.grep(a.getElementsByTagName("input"), r)
    }

    function v(a, b, c) {
        var d = "width" === b ? a.offsetWidth : a.offsetHeight, f = "width" === b ? 1 : 0;
        if (0 < d) {
            if ("border" !== c) for (; 4 > f; f += 2) c || (d -= parseFloat(k.css(a, "padding" +
                oa[f])) || 0), d = "margin" === c ? d + (parseFloat(k.css(a, c + oa[f])) || 0) : d - (parseFloat(k.css(a, "border" + oa[f] + "Width")) || 0);
            return d + "px"
        }
        d = wa(a, b);
        if (0 > d || null == d) d = a.style[b];
        if (fb.test(d)) return d;
        d = parseFloat(d) || 0;
        if (c) for (; 4 > f; f += 2) d += parseFloat(k.css(a, "padding" + oa[f])) || 0, "padding" !== c && (d += parseFloat(k.css(a, "border" + oa[f] + "Width")) || 0), "margin" === c && (d += parseFloat(k.css(a, c + oa[f])) || 0);
        return d + "px"
    }

    function s(a) {
        return function (b, c) {
            "string" !== typeof b && (c = b, b = "*");
            if (k.isFunction(c)) for (var d = b.toLowerCase().split(wb),
                                          f = 0, g = d.length, l, j; f < g; f++) l = d[f], (j = /^\+/.test(l)) && (l = l.substr(1) || "*"), l = a[l] = a[l] || [], l[j ? "unshift" : "push"](c)
        }
    }

    function x(a, b, c, f, k, g) {
        k = k || b.dataTypes[0];
        g = g || {};
        g[k] = !0;
        for (var k = a[k], l = 0, j = k ? k.length : 0, q = a === gb, p; l < j && (q || !p); l++) p = k[l](b, c, f), "string" === typeof p && (!q || g[p] ? p = d : (b.dataTypes.unshift(p), p = x(a, b, c, f, p, g)));
        if ((q || !p) && !g["*"]) p = x(a, b, c, f, "*", g);
        return p
    }

    function B(a, b) {
        var c, f, g = k.ajaxSettings.flatOptions || {};
        for (c in b) b[c] !== d && ((g[c] ? a : f || (f = {}))[c] = b[c]);
        f && k.extend(!0, a,
            f)
    }

    function E(a, b, c, d) {
        if (k.isArray(b)) k.each(b, function (b, f) {
            c || fc.test(a) ? d(a, f) : E(a + "[" + ("object" === typeof f ? b : "") + "]", f, c, d)
        }); else if (!c && "object" === k.type(b)) for (var f in b) E(a + "[" + f + "]", b[f], c, d); else d(a, b)
    }

    function y() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {
        }
    }

    function D() {
        setTimeout(t, 0);
        return Na = k.now()
    }

    function t() {
        Na = d
    }

    function A(a, b) {
        var c = {};
        k.each(Oa.concat.apply([], Oa.slice(0, b)), function () {
            c[this] = a
        });
        return c
    }

    function J(a) {
        if (!hb[a]) {
            var b = q.body, c = k("<" + a + ">").appendTo(b), d =
                c.css("display");
            c.remove();
            if ("none" === d || "" === d) {
                ca || (ca = q.createElement("iframe"), ca.frameBorder = ca.width = ca.height = 0);
                b.appendChild(ca);
                if (!xa || !ca.createElement) xa = (ca.contentWindow || ca.contentDocument).document, xa.write((k.support.boxModel ? "<!doctype html>" : "") + "<html><body>"), xa.close();
                c = xa.createElement(a);
                xa.body.appendChild(c);
                d = k.css(c, "display");
                b.removeChild(ca)
            }
            hb[a] = d
        }
        return hb[a]
    }

    function C(a) {
        return k.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
    }

    var q = a.document,
        u = a.location, k, K = function () {
            if (!z.isReady) {
                try {
                    q.documentElement.doScroll("left")
                } catch (a) {
                    setTimeout(K, 1);
                    return
                }
                z.ready()
            }
        }, z = function (a, b) {
            return new z.fn.init(a, b, L)
        }, O = a.jQuery, S = a.$, L, T = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/, H = /\S/, N = /^\s+/, aa = /\s+$/,
        Q = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, W = /^[\],:{}\s]*$/, ya = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
        da = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, za = /(?:^|:|,)(?:\s*\[)+/g,
        Ha = /(webkit)[ \/]([\w.]+)/, pa = /(opera)(?:.*version)?[ \/]([\w.]+)/,
        qa = /(msie) ([\w.]+)/, Pa = /(mozilla)(?:.*? rv:([\w.]+))?/, Qa = /-([a-z]|[0-9])/ig, Ra = /^-ms-/,
        R = function (a, b) {
            return (b + "").toUpperCase()
        }, Aa = a.navigator.userAgent, Y, Z, U, ea = Object.prototype.toString, ha = Object.prototype.hasOwnProperty,
        Ia = Array.prototype.push, fa = Array.prototype.slice, ia = String.prototype.trim, la = Array.prototype.indexOf,
        ra = {};
    z.fn = z.prototype = {
        constructor: z, init: function (a, b, c) {
            var f;
            if (!a) return this;
            if (a.nodeType) return this.context = this[0] = a, this.length = 1, this;
            if ("body" === a && !b && q.body) return this.context =
                q, this[0] = q.body, this.selector = a, this.length = 1, this;
            if ("string" === typeof a) {
                if ((f = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && 3 <= a.length ? [null, a, null] : T.exec(a)) && (f[1] || !b)) {
                    if (f[1]) return c = (b = b instanceof z ? b[0] : b) ? b.ownerDocument || b : q, (a = Q.exec(a)) ? z.isPlainObject(b) ? (a = [q.createElement(a[1])], z.fn.attr.call(a, b, !0)) : a = [c.createElement(a[1])] : (a = z.buildFragment([f[1]], [c]), a = (a.cacheable ? z.clone(a.fragment) : a.fragment).childNodes), z.merge(this, a);
                    if ((b = q.getElementById(f[2])) && b.parentNode) {
                        if (b.id !==
                            f[2]) return c.find(a);
                        this.length = 1;
                        this[0] = b
                    }
                    this.context = q;
                    this.selector = a;
                    return this
                }
                return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a)
            }
            if (z.isFunction(a)) return c.ready(a);
            a.selector !== d && (this.selector = a.selector, this.context = a.context);
            return z.makeArray(a, this)
        }, selector: "", jquery: "1.7.2", length: 0, size: function () {
            return this.length
        }, toArray: function () {
            return fa.call(this, 0)
        }, get: function (a) {
            return null == a ? this.toArray() : 0 > a ? this[this.length + a] : this[a]
        }, pushStack: function (a, b, c) {
            var d =
                this.constructor();
            z.isArray(a) ? Ia.apply(d, a) : z.merge(d, a);
            d.prevObject = this;
            d.context = this.context;
            "find" === b ? d.selector = this.selector + (this.selector ? " " : "") + c : b && (d.selector = this.selector + "." + b + "(" + c + ")");
            return d
        }, each: function (a, b) {
            return z.each(this, a, b)
        }, ready: function (a) {
            z.bindReady();
            Z.add(a);
            return this
        }, eq: function (a) {
            a = +a;
            return -1 === a ? this.slice(a) : this.slice(a, a + 1)
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, slice: function () {
            return this.pushStack(fa.apply(this,
                arguments), "slice", fa.call(arguments).join(","))
        }, map: function (a) {
            return this.pushStack(z.map(this, function (b, c) {
                return a.call(b, c, b)
            }))
        }, end: function () {
            return this.prevObject || this.constructor(null)
        }, push: Ia, sort: [].sort, splice: [].splice
    };
    z.fn.init.prototype = z.fn;
    z.extend = z.fn.extend = function () {
        var a, b, c, f, k, g = arguments[0] || {}, l = 1, j = arguments.length, q = !1;
        "boolean" === typeof g && (q = g, g = arguments[1] || {}, l = 2);
        "object" !== typeof g && !z.isFunction(g) && (g = {});
        j === l && (g = this, --l);
        for (; l < j; l++) if (null != (a = arguments[l])) for (b in a) c =
            g[b], f = a[b], g !== f && (q && f && (z.isPlainObject(f) || (k = z.isArray(f))) ? (k ? (k = !1, c = c && z.isArray(c) ? c : []) : c = c && z.isPlainObject(c) ? c : {}, g[b] = z.extend(q, c, f)) : f !== d && (g[b] = f));
        return g
    };
    z.extend({
        noConflict: function (b) {
            a.$ === z && (a.$ = S);
            b && a.jQuery === z && (a.jQuery = O);
            return z
        }, isReady: !1, readyWait: 1, holdReady: function (a) {
            a ? z.readyWait++ : z.ready(!0)
        }, ready: function (a) {
            if (!0 === a && !--z.readyWait || !0 !== a && !z.isReady) {
                if (!q.body) return setTimeout(z.ready, 1);
                z.isReady = !0;
                !0 !== a && 0 < --z.readyWait || (Z.fireWith(q, [z]),
                z.fn.trigger && z(q).trigger("ready").off("ready"))
            }
        }, bindReady: function () {
            if (!Z) {
                Z = z.Callbacks("once memory");
                if ("complete" === q.readyState) return setTimeout(z.ready, 1);
                if (q.addEventListener) q.addEventListener("DOMContentLoaded", U, !1), a.addEventListener("load", z.ready, !1); else if (q.attachEvent) {
                    q.attachEvent("onreadystatechange", U);
                    a.attachEvent("onload", z.ready);
                    var b = !1;
                    try {
                        b = null == a.frameElement
                    } catch (c) {
                    }
                    q.documentElement.doScroll && b && K()
                }
            }
        }, isFunction: function (a) {
            return "function" === z.type(a)
        },
        isArray: Array.isArray || function (a) {
            return "array" === z.type(a)
        }, isWindow: function (a) {
            return null != a && a == a.window
        }, isNumeric: function (a) {
            return !isNaN(parseFloat(a)) && isFinite(a)
        }, type: function (a) {
            return null == a ? String(a) : ra[ea.call(a)] || "object"
        }, isPlainObject: function (a) {
            if (!a || "object" !== z.type(a) || a.nodeType || z.isWindow(a)) return !1;
            try {
                if (a.constructor && !ha.call(a, "constructor") && !ha.call(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (b) {
                return !1
            }
            for (var c in a) ;
            return c === d || ha.call(a, c)
        },
        isEmptyObject: function (a) {
            for (var b in a) return !1;
            return !0
        }, error: function (a) {
            throw Error(a);
        }, parseJSON: function (b) {
            if ("string" !== typeof b || !b) return null;
            b = z.trim(b);
            if (a.JSON && a.JSON.parse) return a.JSON.parse(b);
            if (W.test(b.replace(ya, "@").replace(da, "]").replace(za, ""))) return (new Function("return " + b))();
            z.error("Invalid JSON: " + b)
        }, parseXML: function (b) {
            if ("string" !== typeof b || !b) return null;
            var c, f;
            try {
                a.DOMParser ? (f = new DOMParser, c = f.parseFromString(b, "text/xml")) : (c = new ActiveXObject("Microsoft.XMLDOM"),
                    c.async = "false", c.loadXML(b))
            } catch (k) {
                c = d
            }
            (!c || !c.documentElement || c.getElementsByTagName("parsererror").length) && z.error("Invalid XML: " + b);
            return c
        }, noop: function () {
        }, globalEval: function (b) {
            b && H.test(b) && (a.execScript || function (b) {
                a.eval.call(a, b)
            })(b)
        }, camelCase: function (a) {
            return a.replace(Ra, "ms-").replace(Qa, R)
        }, nodeName: function (a, b) {
            return a.nodeName && a.nodeName.toUpperCase() === b.toUpperCase()
        }, each: function (a, b, c) {
            var f, k = 0, g = a.length, l = g === d || z.isFunction(a);
            if (c) if (l) for (f in a) {
                if (!1 ===
                    b.apply(a[f], c)) break
            } else for (; k < g && !1 !== b.apply(a[k++], c);) ; else if (l) for (f in a) {
                if (!1 === b.call(a[f], f, a[f])) break
            } else for (; k < g && !1 !== b.call(a[k], k, a[k++]);) ;
            return a
        }, trim: ia ? function (a) {
            return null == a ? "" : ia.call(a)
        } : function (a) {
            return null == a ? "" : a.toString().replace(N, "").replace(aa, "")
        }, makeArray: function (a, b) {
            var c = b || [];
            if (null != a) {
                var d = z.type(a);
                null == a.length || "string" === d || "function" === d || "regexp" === d || z.isWindow(a) ? Ia.call(c, a) : z.merge(c, a)
            }
            return c
        }, inArray: function (a, b, c) {
            var d;
            if (b) {
                if (la) return la.call(b,
                    a, c);
                d = b.length;
                for (c = c ? 0 > c ? Math.max(0, d + c) : c : 0; c < d; c++) if (c in b && b[c] === a) return c
            }
            return -1
        }, merge: function (a, b) {
            var c = a.length, f = 0;
            if ("number" === typeof b.length) for (var k = b.length; f < k; f++) a[c++] = b[f]; else for (; b[f] !== d;) a[c++] = b[f++];
            a.length = c;
            return a
        }, grep: function (a, b, c) {
            for (var d = [], f, c = !!c, k = 0, g = a.length; k < g; k++) f = !!b(a[k], k), c !== f && d.push(a[k]);
            return d
        }, map: function (a, b, c) {
            var f, k, g = [], l = 0, j = a.length;
            if (a instanceof z || j !== d && "number" === typeof j && (0 < j && a[0] && a[j - 1] || 0 === j || z.isArray(a))) for (; l <
                                                                                                                                     j; l++) f = b(a[l], l, c), null != f && (g[g.length] = f); else for (k in a) f = b(a[k], k, c), null != f && (g[g.length] = f);
            return g.concat.apply([], g)
        }, guid: 1, proxy: function (a, b) {
            if ("string" === typeof b) var c = a[b], b = a, a = c;
            if (!z.isFunction(a)) return d;
            var f = fa.call(arguments, 2), c = function () {
                return a.apply(b, f.concat(fa.call(arguments)))
            };
            c.guid = a.guid = a.guid || c.guid || z.guid++;
            return c
        }, access: function (a, b, c, f, k, g, l) {
            var j, q = null == c, p = 0, n = a.length;
            if (c && "object" === typeof c) {
                for (p in c) z.access(a, b, p, c[p], 1, g, f);
                k = 1
            } else if (f !==
                d) {
                j = l === d && z.isFunction(f);
                q && (j ? (j = b, b = function (a, b, c) {
                    return j.call(z(a), c)
                }) : (b.call(a, f), b = null));
                if (b) for (; p < n; p++) b(a[p], c, j ? f.call(a[p], p, b(a[p], c)) : f, l);
                k = 1
            }
            return k ? a : q ? b.call(a) : n ? b(a[0], c) : g
        }, now: function () {
            return (new Date).getTime()
        }, uaMatch: function (a) {
            a = a.toLowerCase();
            a = Ha.exec(a) || pa.exec(a) || qa.exec(a) || 0 > a.indexOf("compatible") && Pa.exec(a) || [];
            return {browser: a[1] || "", version: a[2] || "0"}
        }, sub: function () {
            function a(b, c) {
                return new a.fn.init(b, c)
            }

            z.extend(!0, a, this);
            a.superclass = this;
            a.fn = a.prototype = this();
            a.fn.constructor = a;
            a.sub = this.sub;
            a.fn.init = function (c, d) {
                d && (d instanceof z && !(d instanceof a)) && (d = a(d));
                return z.fn.init.call(this, c, d, b)
            };
            a.fn.init.prototype = a.fn;
            var b = a(q);
            return a
        }, browser: {}
    });
    z.each("Boolean Number String Function Array Date RegExp Object".split(" "), function (a, b) {
        ra["[object " + b + "]"] = b.toLowerCase()
    });
    Y = z.uaMatch(Aa);
    Y.browser && (z.browser[Y.browser] = !0, z.browser.version = Y.version);
    z.browser.webkit && (z.browser.safari = !0);
    H.test("\u00a0") && (N = /^[\s\xA0]+/,
        aa = /[\s\xA0]+$/);
    L = z(q);
    q.addEventListener ? U = function () {
        q.removeEventListener("DOMContentLoaded", U, false);
        z.ready()
    } : q.attachEvent && (U = function () {
        if (q.readyState === "complete") {
            q.detachEvent("onreadystatechange", U);
            z.ready()
        }
    });
    k = z;
    var ga = {};
    k.Callbacks = function (a) {
        var b;
        if (a) {
            if (!(b = ga[a])) {
                b = a;
                var c = ga[b] = {}, f, g;
                b = b.split(/\s+/);
                f = 0;
                for (g = b.length; f < g; f++) c[b[f]] = true;
                b = c
            }
        } else b = {};
        var a = b, l = [], j = [], q, p, n, m, u, o, r = function (b) {
            var c, d, f, g;
            c = 0;
            for (d = b.length; c < d; c++) {
                f = b[c];
                g = k.type(f);
                g === "array" ?
                    r(f) : g === "function" && (!a.unique || !s.has(f)) && l.push(f)
            }
        }, H = function (b, c) {
            c = c || [];
            q = !a.memory || [b, c];
            n = p = true;
            o = m || 0;
            m = 0;
            for (u = l.length; l && o < u; o++) if (l[o].apply(b, c) === false && a.stopOnFalse) {
                q = true;
                break
            }
            n = false;
            if (l) if (a.once) q === true ? s.disable() : l = []; else if (j && j.length) {
                q = j.shift();
                s.fireWith(q[0], q[1])
            }
        }, s = {
            add: function () {
                if (l) {
                    var a = l.length;
                    r(arguments);
                    if (n) u = l.length; else if (q && q !== true) {
                        m = a;
                        H(q[0], q[1])
                    }
                }
                return this
            }, remove: function () {
                if (l) for (var b = arguments, c = 0, d = b.length; c < d; c++) for (var f =
                    0; f < l.length; f++) if (b[c] === l[f]) {
                    if (n && f <= u) {
                        u--;
                        f <= o && o--
                    }
                    l.splice(f--, 1);
                    if (a.unique) break
                }
                return this
            }, has: function (a) {
                if (l) for (var b = 0, c = l.length; b < c; b++) if (a === l[b]) return true;
                return false
            }, empty: function () {
                l = [];
                return this
            }, disable: function () {
                l = j = q = d;
                return this
            }, disabled: function () {
                return !l
            }, lock: function () {
                j = d;
                (!q || q === true) && s.disable();
                return this
            }, locked: function () {
                return !j
            }, fireWith: function (b, c) {
                j && (n ? a.once || j.push([b, c]) : (!a.once || !q) && H(b, c));
                return this
            }, fire: function () {
                s.fireWith(this,
                    arguments);
                return this
            }, fired: function () {
                return !!p
            }
        };
        return s
    };
    var ja = [].slice;
    k.extend({
        Deferred: function (a) {
            var b = k.Callbacks("once memory"), c = k.Callbacks("once memory"), d = k.Callbacks("memory"),
                f = "pending", g = {resolve: b, reject: c, notify: d}, l = {
                    done: b.add, fail: c.add, progress: d.add, state: function () {
                        return f
                    }, isResolved: b.fired, isRejected: c.fired, then: function (a, b, c) {
                        j.done(a).fail(b).progress(c);
                        return this
                    }, always: function () {
                        j.done.apply(j, arguments).fail.apply(j, arguments);
                        return this
                    }, pipe: function (a,
                                       b, c) {
                        return k.Deferred(function (d) {
                            k.each({done: [a, "resolve"], fail: [b, "reject"], progress: [c, "notify"]}, function (a, b) {
                                var c = b[0], f = b[1], M;
                                if (k.isFunction(c)) j[a](function () {
                                    if ((M = c.apply(this, arguments)) && k.isFunction(M.promise)) M.promise().then(d.resolve, d.reject, d.notify); else d[f + "With"](this === j ? d : this, [M])
                                }); else j[a](d[f])
                            })
                        }).promise()
                    }, promise: function (a) {
                        if (a == null) a = l; else for (var b in l) a[b] = l[b];
                        return a
                    }
                }, j = l.promise({}), q;
            for (q in g) {
                j[q] = g[q].fire;
                j[q + "With"] = g[q].fireWith
            }
            j.done(function () {
                f =
                    "resolved"
            }, c.disable, d.lock).fail(function () {
                f = "rejected"
            }, b.disable, d.lock);
            a && a.call(j, j);
            return j
        }, when: function (a) {
            function b(a) {
                return function (b) {
                    d[a] = arguments.length > 1 ? ja.call(arguments, 0) : b;
                    --j || q.resolveWith(q, d)
                }
            }

            function c(a) {
                return function (b) {
                    l[a] = arguments.length > 1 ? ja.call(arguments, 0) : b;
                    q.notifyWith(p, l)
                }
            }

            var d = ja.call(arguments, 0), f = 0, g = d.length, l = Array(g), j = g,
                q = g <= 1 && a && k.isFunction(a.promise) ? a : k.Deferred(), p = q.promise();
            if (g > 1) {
                for (; f < g; f++) d[f] && d[f].promise && k.isFunction(d[f].promise) ?
                    d[f].promise().then(b(f), q.reject, c(f)) : --j;
                j || q.resolveWith(q, d)
            } else q !== a && q.resolveWith(q, g ? [a] : []);
            return p
        }
    });
    var Ja = k, ma;
    var P, ib, Ba, Sa, Ta, V, sa, Ka, Ua, jb, Ca, F = q.createElement("div");
    F.setAttribute("className", "t");
    F.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
    ib = F.getElementsByTagName("*");
    Ba = F.getElementsByTagName("a")[0];
    if (!ib || !ib.length || !Ba) ma = {}; else {
        Sa = q.createElement("select");
        Ta = Sa.appendChild(q.createElement("option"));
        V = F.getElementsByTagName("input")[0];
        P = {
            leadingWhitespace: 3 === F.firstChild.nodeType,
            tbody: !F.getElementsByTagName("tbody").length,
            htmlSerialize: !!F.getElementsByTagName("link").length,
            style: /top/.test(Ba.getAttribute("style")),
            hrefNormalized: "/a" === Ba.getAttribute("href"),
            opacity: /^0.55/.test(Ba.style.opacity),
            cssFloat: !!Ba.style.cssFloat,
            checkOn: "on" === V.value,
            optSelected: Ta.selected,
            getSetAttribute: "t" !== F.className,
            enctype: !!q.createElement("form").enctype,
            html5Clone: "<:nav></:nav>" !== q.createElement("nav").cloneNode(!0).outerHTML,
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            pixelMargin: !0
        };
        k.boxModel = P.boxModel = "CSS1Compat" === q.compatMode;
        V.checked = !0;
        P.noCloneChecked = V.cloneNode(!0).checked;
        Sa.disabled = !0;
        P.optDisabled = !Ta.disabled;
        try {
            delete F.test
        } catch (Xc) {
            P.deleteExpando = !1
        }
        !F.addEventListener && (F.attachEvent && F.fireEvent) && (F.attachEvent("onclick", function () {
            P.noCloneEvent = false
        }), F.cloneNode(!0).fireEvent("onclick"));
        V = q.createElement("input");
        V.value = "t";
        V.setAttribute("type", "radio");
        P.radioValue = "t" === V.value;
        V.setAttribute("checked", "checked");
        V.setAttribute("name", "t");
        F.appendChild(V);
        sa = q.createDocumentFragment();
        sa.appendChild(F.lastChild);
        P.checkClone = sa.cloneNode(!0).cloneNode(!0).lastChild.checked;
        P.appendChecked = V.checked;
        sa.removeChild(V);
        sa.appendChild(F);
        if (F.attachEvent) for (jb in{
            submit: 1,
            change: 1,
            focusin: 1
        }) Ua = "on" + jb, Ca = Ua in F, Ca || (F.setAttribute(Ua, "return;"), Ca = "function" === typeof F[Ua]),
            P[jb + "Bubbles"] = Ca;
        sa.removeChild(F);
        sa = Sa = Ta = F = V = null;
        k(function () {
            var b, c, d, f, g = q.getElementsByTagName("body")[0];
            if (g) {
                b = q.createElement("div");
                b.style.cssText = "padding:0;margin:0;border:0;visibility:hidden;width:0;height:0;position:static;top:0;margin-top:1px";
                g.insertBefore(b, g.firstChild);
                F = q.createElement("div");
                b.appendChild(F);
                F.innerHTML = "<table><tr><td style='padding:0;margin:0;border:0;display:none'></td><td>t</td></tr></table>";
                Ka = F.getElementsByTagName("td");
                Ca = Ka[0].offsetHeight ===
                    0;
                Ka[0].style.display = "";
                Ka[1].style.display = "none";
                P.reliableHiddenOffsets = Ca && Ka[0].offsetHeight === 0;
                if (a.getComputedStyle) {
                    F.innerHTML = "";
                    c = q.createElement("div");
                    c.style.width = "0";
                    c.style.marginRight = "0";
                    F.style.width = "2px";
                    F.appendChild(c);
                    P.reliableMarginRight = (parseInt((a.getComputedStyle(c, null) || {marginRight: 0}).marginRight, 10) || 0) === 0
                }
                if (typeof F.style.zoom !== "undefined") {
                    F.innerHTML = "";
                    F.style.width = F.style.padding = "1px";
                    F.style.border = 0;
                    F.style.overflow = "hidden";
                    F.style.display = "inline";
                    F.style.zoom = 1;
                    P.inlineBlockNeedsLayout = F.offsetWidth === 3;
                    F.style.display = "block";
                    F.style.overflow = "visible";
                    F.innerHTML = "<div style='width:5px;'></div>";
                    P.shrinkWrapBlocks = F.offsetWidth !== 3
                }
                F.style.cssText = "position:absolute;top:0;left:0;width:1px;height:1px;padding:0;margin:0;border:0;visibility:hidden;";
                F.innerHTML = "<div style='position:absolute;top:0;left:0;width:1px;height:1px;padding:0;margin:0;border:5px solid #000;display:block;'><div style='padding:0;margin:0;border:0;display:block;overflow:hidden;'></div></div><table style='position:absolute;top:0;left:0;width:1px;height:1px;padding:0;margin:0;border:5px solid #000;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
                c = F.firstChild;
                d = c.firstChild;
                f = c.nextSibling.firstChild.firstChild;
                f = {doesNotAddBorder: d.offsetTop !== 5, doesAddBorderForTableAndCells: f.offsetTop === 5};
                d.style.position = "fixed";
                d.style.top = "20px";
                f.fixedPosition = d.offsetTop === 20 || d.offsetTop === 15;
                d.style.position = d.style.top = "";
                c.style.overflow = "hidden";
                c.style.position = "relative";
                f.subtractsBorderForOverflowNotVisible = d.offsetTop === -5;
                f.doesNotIncludeMarginInBodyOffset = g.offsetTop !== 1;
                if (a.getComputedStyle) {
                    F.style.marginTop = "1%";
                    P.pixelMargin = (a.getComputedStyle(F,
                        null) || {marginTop: 0}).marginTop !== "1%"
                }
                if (typeof b.style.zoom !== "undefined") b.style.zoom = 1;
                g.removeChild(b);
                F = null;
                k.extend(P, f)
            }
        });
        ma = P
    }
    Ja.support = ma;
    var dc = /^(?:\{.*\}|\[.*\])$/, cc = /([A-Z])/g;
    k.extend({
        cache: {},
        uuid: 0,
        expando: "jQuery" + (k.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {embed: !0, object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000", applet: !0},
        hasData: function (a) {
            a = a.nodeType ? k.cache[a[k.expando]] : a[k.expando];
            return !!a && !c(a)
        },
        data: function (a, b, c, f) {
            if (k.acceptData(a)) {
                var g;
                g = k.expando;
                var l = typeof b === "string", j = a.nodeType, q = j ? k.cache : a, p = j ? a[g] : a[g] && g,
                    n = b === "events";
                if (p && q[p] && (n || f || q[p].data) || !(l && c === d)) {
                    p || (j ? a[g] = p = ++k.uuid : p = g);
                    if (!q[p]) {
                        q[p] = {};
                        if (!j) q[p].toJSON = k.noop
                    }
                    if (typeof b === "object" || typeof b === "function") f ? q[p] = k.extend(q[p], b) : q[p].data = k.extend(q[p].data, b);
                    g = a = q[p];
                    if (!f) {
                        if (!a.data) a.data = {};
                        a = a.data
                    }
                    c !== d && (a[k.camelCase(b)] = c);
                    if (n && !a[b]) return g.events;
                    if (l) {
                        c = a[b];
                        c == null && (c = a[k.camelCase(b)])
                    } else c = a;
                    return c
                }
            }
        },
        removeData: function (a, b, d) {
            if (k.acceptData(a)) {
                var f,
                    g, l, j = k.expando, q = a.nodeType, p = q ? k.cache : a, n = q ? a[j] : j;
                if (p[n]) {
                    if (b) if (f = d ? p[n] : p[n].data) {
                        if (!k.isArray(b)) if (b in f) b = [b]; else {
                            b = k.camelCase(b);
                            b = b in f ? [b] : b.split(" ")
                        }
                        g = 0;
                        for (l = b.length; g < l; g++) delete f[b[g]];
                        if (!(d ? c : k.isEmptyObject)(f)) return
                    }
                    if (!d) {
                        delete p[n].data;
                        if (!c(p[n])) return
                    }
                    k.support.deleteExpando || !p.setInterval ? delete p[n] : p[n] = null;
                    q && (k.support.deleteExpando ? delete a[j] : a.removeAttribute ? a.removeAttribute(j) : a[j] = null)
                }
            }
        },
        _data: function (a, b, c) {
            return k.data(a, b, c, true)
        },
        acceptData: function (a) {
            if (a.nodeName) {
                var b =
                    k.noData[a.nodeName.toLowerCase()];
                if (b) return !(b === true || a.getAttribute("classid") !== b)
            }
            return true
        }
    });
    k.fn.extend({
        data: function (a, c) {
            var f, g, l, j, q, p = this[0], n = 0, m = null;
            if (a === d) {
                if (this.length) {
                    m = k.data(p);
                    if (p.nodeType === 1 && !k._data(p, "parsedAttrs")) {
                        l = p.attributes;
                        for (q = l.length; n < q; n++) {
                            j = l[n].name;
                            if (j.indexOf("data-") === 0) {
                                j = k.camelCase(j.substring(5));
                                b(p, j, m[j])
                            }
                        }
                        k._data(p, "parsedAttrs", true)
                    }
                }
                return m
            }
            if (typeof a === "object") return this.each(function () {
                k.data(this, a)
            });
            f = a.split(".", 2);
            f[1] = f[1] ? "." + f[1] : "";
            g = f[1] + "!";
            return k.access(this, function (c) {
                if (c === d) {
                    m = this.triggerHandler("getData" + g, [f[0]]);
                    if (m === d && p) {
                        m = k.data(p, a);
                        m = b(p, a, m)
                    }
                    return m === d && f[1] ? this.data(f[0]) : m
                }
                f[1] = c;
                this.each(function () {
                    var b = k(this);
                    b.triggerHandler("setData" + g, f);
                    k.data(this, a, c);
                    b.triggerHandler("changeData" + g, f)
                })
            }, null, c, arguments.length > 1, null, false)
        }, removeData: function (a) {
            return this.each(function () {
                k.removeData(this, a)
            })
        }
    });
    k.extend({
        _mark: function (a, b) {
            if (a) {
                b = (b || "fx") + "mark";
                k._data(a,
                    b, (k._data(a, b) || 0) + 1)
            }
        }, _unmark: function (a, b, c) {
            if (a !== true) {
                c = b;
                b = a;
                a = false
            }
            if (b) {
                var c = c || "fx", d = c + "mark";
                if (a = a ? 0 : (k._data(b, d) || 1) - 1) k._data(b, d, a); else {
                    k.removeData(b, d, true);
                    f(b, c, "mark")
                }
            }
        }, queue: function (a, b, c) {
            var d;
            if (a) {
                b = (b || "fx") + "queue";
                d = k._data(a, b);
                c && (!d || k.isArray(c) ? d = k._data(a, b, k.makeArray(c)) : d.push(c));
                return d || []
            }
        }, dequeue: function (a, b) {
            var b = b || "fx", c = k.queue(a, b), d = c.shift(), g = {};
            d === "inprogress" && (d = c.shift());
            if (d) {
                b === "fx" && c.unshift("inprogress");
                k._data(a, b + ".run",
                    g);
                d.call(a, function () {
                    k.dequeue(a, b)
                }, g)
            }
            if (!c.length) {
                k.removeData(a, b + "queue " + b + ".run", true);
                f(a, b, "queue")
            }
        }
    });
    k.fn.extend({
        queue: function (a, b) {
            var c = 2;
            if (typeof a !== "string") {
                b = a;
                a = "fx";
                c--
            }
            return arguments.length < c ? k.queue(this[0], a) : b === d ? this : this.each(function () {
                var c = k.queue(this, a, b);
                a === "fx" && c[0] !== "inprogress" && k.dequeue(this, a)
            })
        }, dequeue: function (a) {
            return this.each(function () {
                k.dequeue(this, a)
            })
        }, delay: function (a, b) {
            a = k.fx ? k.fx.speeds[a] || a : a;
            return this.queue(b || "fx", function (b,
                                                   c) {
                var d = setTimeout(b, a);
                c.stop = function () {
                    clearTimeout(d)
                }
            })
        }, clearQueue: function (a) {
            return this.queue(a || "fx", [])
        }, promise: function (a, b) {
            function c() {
                --j || f.resolveWith(g, [g])
            }

            if (typeof a !== "string") {
                b = a;
                a = d
            }
            for (var a = a || "fx", f = k.Deferred(), g = this, l = g.length, j = 1, q = a + "defer", p = a + "queue", n = a + "mark", m; l--;) if (m = k.data(g[l], q, d, true) || (k.data(g[l], p, d, true) || k.data(g[l], n, d, true)) && k.data(g[l], q, k.Callbacks("once memory"), true)) {
                j++;
                m.add(c)
            }
            c();
            return f.promise(b)
        }
    });
    var xb = /[\n\t\r]/g, Va = /\s+/, gc =
            /\r/g, hc = /^(?:button|input)$/i, ic = /^(?:button|input|object|select|textarea)$/i, jc = /^a(?:rea)?$/i,
        yb = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        zb = k.support.getSetAttribute, ka, Ab, Bb;
    k.fn.extend({
        attr: function (a, b) {
            return k.access(this, k.attr, a, b, arguments.length > 1)
        }, removeAttr: function (a) {
            return this.each(function () {
                k.removeAttr(this, a)
            })
        }, prop: function (a, b) {
            return k.access(this, k.prop, a, b, arguments.length > 1)
        }, removeProp: function (a) {
            a =
                k.propFix[a] || a;
            return this.each(function () {
                try {
                    this[a] = d;
                    delete this[a]
                } catch (b) {
                }
            })
        }, addClass: function (a) {
            var b, c, d, f, g, l, j;
            if (k.isFunction(a)) return this.each(function (b) {
                k(this).addClass(a.call(this, b, this.className))
            });
            if (a && typeof a === "string") {
                b = a.split(Va);
                c = 0;
                for (d = this.length; c < d; c++) {
                    f = this[c];
                    if (f.nodeType === 1) if (!f.className && b.length === 1) f.className = a; else {
                        g = " " + f.className + " ";
                        l = 0;
                        for (j = b.length; l < j; l++) ~g.indexOf(" " + b[l] + " ") || (g = g + (b[l] + " "));
                        f.className = k.trim(g)
                    }
                }
            }
            return this
        },
        removeClass: function (a) {
            var b, c, f, g, l, j, q;
            if (k.isFunction(a)) return this.each(function (b) {
                k(this).removeClass(a.call(this, b, this.className))
            });
            if (a && typeof a === "string" || a === d) {
                b = (a || "").split(Va);
                c = 0;
                for (f = this.length; c < f; c++) {
                    g = this[c];
                    if (g.nodeType === 1 && g.className) if (a) {
                        l = (" " + g.className + " ").replace(xb, " ");
                        j = 0;
                        for (q = b.length; j < q; j++) l = l.replace(" " + b[j] + " ", " ");
                        g.className = k.trim(l)
                    } else g.className = ""
                }
            }
            return this
        }, toggleClass: function (a, b) {
            var c = typeof a, d = typeof b === "boolean";
            return k.isFunction(a) ?
                this.each(function (c) {
                    k(this).toggleClass(a.call(this, c, this.className, b), b)
                }) : this.each(function () {
                    if (c === "string") for (var f, g = 0, l = k(this), j = b, q = a.split(Va); f = q[g++];) {
                        j = d ? j : !l.hasClass(f);
                        l[j ? "addClass" : "removeClass"](f)
                    } else if (c === "undefined" || c === "boolean") {
                        this.className && k._data(this, "__className__", this.className);
                        this.className = this.className || a === false ? "" : k._data(this, "__className__") || ""
                    }
                })
        }, hasClass: function (a) {
            for (var a = " " + a + " ", b = 0, c = this.length; b < c; b++) if (this[b].nodeType === 1 && (" " +
                    this[b].className + " ").replace(xb, " ").indexOf(a) > -1) return true;
            return false
        }, val: function (a) {
            var b, c, f, g = this[0];
            if (arguments.length) {
                f = k.isFunction(a);
                return this.each(function (c) {
                    var g = k(this);
                    if (this.nodeType === 1) {
                        c = f ? a.call(this, c, g.val()) : a;
                        c == null ? c = "" : typeof c === "number" ? c = c + "" : k.isArray(c) && (c = k.map(c, function (a) {
                            return a == null ? "" : a + ""
                        }));
                        b = k.valHooks[this.type] || k.valHooks[this.nodeName.toLowerCase()];
                        if (!b || !("set" in b) || b.set(this, c, "value") === d) this.value = c
                    }
                })
            }
            if (g) {
                if ((b = k.valHooks[g.type] ||
                        k.valHooks[g.nodeName.toLowerCase()]) && "get" in b && (c = b.get(g, "value")) !== d) return c;
                c = g.value;
                return typeof c === "string" ? c.replace(gc, "") : c == null ? "" : c
            }
        }
    });
    k.extend({
        valHooks: {
            option: {
                get: function (a) {
                    var b = a.attributes.value;
                    return !b || b.specified ? a.value : a.text
                }
            }, select: {
                get: function (a) {
                    var b, c, d = a.selectedIndex, f = [], g = a.options, l = a.type === "select-one";
                    if (d < 0) return null;
                    a = l ? d : 0;
                    for (c = l ? d + 1 : g.length; a < c; a++) {
                        b = g[a];
                        if (b.selected && (k.support.optDisabled ? !b.disabled : b.getAttribute("disabled") === null) &&
                            (!b.parentNode.disabled || !k.nodeName(b.parentNode, "optgroup"))) {
                            b = k(b).val();
                            if (l) return b;
                            f.push(b)
                        }
                    }
                    return l && !f.length && g.length ? k(g[d]).val() : f
                }, set: function (a, b) {
                    var c = k.makeArray(b);
                    k(a).find("option").each(function () {
                        this.selected = k.inArray(k(this).val(), c) >= 0
                    });
                    if (!c.length) a.selectedIndex = -1;
                    return c
                }
            }
        },
        attrFn: {val: !0, css: !0, html: !0, text: !0, data: !0, width: !0, height: !0, offset: !0},
        attr: function (a, b, c, f) {
            var g, l, j = a.nodeType;
            if (a && !(j === 3 || j === 8 || j === 2)) {
                if (f && b in k.attrFn) return k(a)[b](c);
                if (typeof a.getAttribute === "undefined") return k.prop(a, b, c);
                if (f = j !== 1 || !k.isXMLDoc(a)) {
                    b = b.toLowerCase();
                    l = k.attrHooks[b] || (yb.test(b) ? Ab : ka)
                }
                if (c !== d) if (c === null) k.removeAttr(a, b); else {
                    if (l && "set" in l && f && (g = l.set(a, c, b)) !== d) return g;
                    a.setAttribute(b, "" + c);
                    return c
                } else {
                    if (l && "get" in l && f && (g = l.get(a, b)) !== null) return g;
                    g = a.getAttribute(b);
                    return g === null ? d : g
                }
            }
        },
        removeAttr: function (a, b) {
            var c, d, f, g, l, j = 0;
            if (b && a.nodeType === 1) {
                d = b.toLowerCase().split(Va);
                for (g = d.length; j < g; j++) if (f = d[j]) {
                    c = k.propFix[f] ||
                        f;
                    (l = yb.test(f)) || k.attr(a, f, "");
                    a.removeAttribute(zb ? f : c);
                    l && c in a && (a[c] = false)
                }
            }
        },
        attrHooks: {
            type: {
                set: function (a, b) {
                    if (hc.test(a.nodeName) && a.parentNode) k.error("type property can't be changed"); else if (!k.support.radioValue && b === "radio" && k.nodeName(a, "input")) {
                        var c = a.value;
                        a.setAttribute("type", b);
                        if (c) a.value = c;
                        return b
                    }
                }
            }, value: {
                get: function (a, b) {
                    return ka && k.nodeName(a, "button") ? ka.get(a, b) : b in a ? a.value : null
                }, set: function (a, b, c) {
                    if (ka && k.nodeName(a, "button")) return ka.set(a, b, c);
                    a.value =
                        b
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function (a, b, c) {
            var f, g, l;
            l = a.nodeType;
            if (a && !(l === 3 || l === 8 || l === 2)) {
                if (l = l !== 1 || !k.isXMLDoc(a)) {
                    b = k.propFix[b] || b;
                    g = k.propHooks[b]
                }
                return c !== d ? g && "set" in g && (f = g.set(a, c, b)) !== d ? f : a[b] = c : g && "get" in g && (f = g.get(a, b)) !==
                null ? f : a[b]
            }
        },
        propHooks: {
            tabIndex: {
                get: function (a) {
                    var b = a.getAttributeNode("tabindex");
                    return b && b.specified ? parseInt(b.value, 10) : ic.test(a.nodeName) || jc.test(a.nodeName) && a.href ? 0 : d
                }
            }
        }
    });
    k.attrHooks.tabindex = k.propHooks.tabIndex;
    Ab = {
        get: function (a, b) {
            var c, f = k.prop(a, b);
            return f === true || typeof f !== "boolean" && (c = a.getAttributeNode(b)) && c.nodeValue !== false ? b.toLowerCase() : d
        }, set: function (a, b, c) {
            if (b === false) k.removeAttr(a, c); else {
                b = k.propFix[c] || c;
                b in a && (a[b] = true);
                a.setAttribute(c, c.toLowerCase())
            }
            return c
        }
    };
    zb || (Bb = {name: !0, id: !0, coords: !0}, ka = k.valHooks.button = {
        get: function (a, b) {
            var c;
            return (c = a.getAttributeNode(b)) && (Bb[b] ? c.nodeValue !== "" : c.specified) ? c.nodeValue : d
        }, set: function (a, b, c) {
            var d = a.getAttributeNode(c);
            if (!d) {
                d = q.createAttribute(c);
                a.setAttributeNode(d)
            }
            return d.nodeValue = b + ""
        }
    }, k.attrHooks.tabindex.set = ka.set, k.each(["width", "height"], function (a, b) {
        k.attrHooks[b] = k.extend(k.attrHooks[b], {
            set: function (a, c) {
                if (c === "") {
                    a.setAttribute(b, "auto");
                    return c
                }
            }
        })
    }), k.attrHooks.contenteditable = {
        get: ka.get,
        set: function (a, b, c) {
            b === "" && (b = "false");
            ka.set(a, b, c)
        }
    });
    k.support.hrefNormalized || k.each(["href", "src", "width", "height"], function (a, b) {
        k.attrHooks[b] = k.extend(k.attrHooks[b], {
            get: function (a) {
                a = a.getAttribute(b, 2);
                return a === null ? d : a
            }
        })
    });
    k.support.style || (k.attrHooks.style = {
        get: function (a) {
            return a.style.cssText.toLowerCase() || d
        }, set: function (a, b) {
            return a.style.cssText = "" + b
        }
    });
    k.support.optSelected || (k.propHooks.selected = k.extend(k.propHooks.selected, {
        get: function (a) {
            if (a = a.parentNode) {
                a.selectedIndex;
                a.parentNode && a.parentNode.selectedIndex
            }
            return null
        }
    }));
    k.support.enctype || (k.propFix.enctype = "encoding");
    k.support.checkOn || k.each(["radio", "checkbox"], function () {
        k.valHooks[this] = {
            get: function (a) {
                return a.getAttribute("value") === null ? "on" : a.value
            }
        }
    });
    k.each(["radio", "checkbox"], function () {
        k.valHooks[this] = k.extend(k.valHooks[this], {
            set: function (a, b) {
                if (k.isArray(b)) return a.checked = k.inArray(k(a).val(), b) >= 0
            }
        })
    });
    var kb = /^(?:textarea|input|select)$/i, Cb = /^([^\.]*)?(?:\.(.+))?$/, kc = /(?:^|\s)hover(\.\S+)?\b/,
        lc = /^key/, mc = /^(?:mouse|contextmenu)|click/, Db = /^(?:focusinfocus|focusoutblur)$/,
        nc = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/, oc = function (a) {
            if (a = nc.exec(a)) {
                a[1] = (a[1] || "").toLowerCase();
                a[3] = a[3] && RegExp("(?:^|\\s)" + a[3] + "(?:\\s|$)")
            }
            return a
        }, Eb = function (a) {
            return k.event.special.hover ? a : a.replace(kc, "mouseenter$1 mouseleave$1")
        };
    k.event = {
        add: function (a, b, c, f, g) {
            var l, j, q, p, n, m, u, o, r;
            if (!(a.nodeType === 3 || a.nodeType === 8 || !b || !c || !(l = k._data(a)))) {
                if (c.handler) {
                    u = c;
                    c = u.handler;
                    g = u.selector
                }
                if (!c.guid) c.guid =
                    k.guid++;
                q = l.events;
                if (!q) l.events = q = {};
                j = l.handle;
                if (!j) {
                    l.handle = j = function (a) {
                        return typeof k !== "undefined" && (!a || k.event.triggered !== a.type) ? k.event.dispatch.apply(j.elem, arguments) : d
                    };
                    j.elem = a
                }
                b = k.trim(Eb(b)).split(" ");
                for (l = 0; l < b.length; l++) {
                    p = Cb.exec(b[l]) || [];
                    n = p[1];
                    m = (p[2] || "").split(".").sort();
                    r = k.event.special[n] || {};
                    n = (g ? r.delegateType : r.bindType) || n;
                    r = k.event.special[n] || {};
                    p = k.extend({
                            type: n,
                            origType: p[1],
                            data: f,
                            handler: c,
                            guid: c.guid,
                            selector: g,
                            quick: g && oc(g),
                            namespace: m.join(".")
                        },
                        u);
                    o = q[n];
                    if (!o) {
                        o = q[n] = [];
                        o.delegateCount = 0;
                        if (!r.setup || r.setup.call(a, f, m, j) === false) a.addEventListener ? a.addEventListener(n, j, false) : a.attachEvent && a.attachEvent("on" + n, j)
                    }
                    if (r.add) {
                        r.add.call(a, p);
                        if (!p.handler.guid) p.handler.guid = c.guid
                    }
                    g ? o.splice(o.delegateCount++, 0, p) : o.push(p);
                    k.event.global[n] = true
                }
                a = null
            }
        },
        global: {},
        remove: function (a, b, c, d, f) {
            var g = k.hasData(a) && k._data(a), l, j, q, p, n, m, u, o, r, H;
            if (g && (u = g.events)) {
                b = k.trim(Eb(b || "")).split(" ");
                for (l = 0; l < b.length; l++) {
                    j = Cb.exec(b[l]) || [];
                    q = p = j[1];
                    j = j[2];
                    if (q) {
                        o = k.event.special[q] || {};
                        q = (d ? o.delegateType : o.bindType) || q;
                        r = u[q] || [];
                        n = r.length;
                        j = j ? RegExp("(^|\\.)" + j.split(".").sort().join("\\.(?:.*\\.)?") + "(\\.|$)") : null;
                        for (m = 0; m < r.length; m++) {
                            H = r[m];
                            if ((f || p === H.origType) && (!c || c.guid === H.guid) && (!j || j.test(H.namespace)) && (!d || d === H.selector || d === "**" && H.selector)) {
                                r.splice(m--, 1);
                                H.selector && r.delegateCount--;
                                o.remove && o.remove.call(a, H)
                            }
                        }
                        if (r.length === 0 && n !== r.length) {
                            (!o.teardown || o.teardown.call(a, j) === false) && k.removeEvent(a, q,
                                g.handle);
                            delete u[q]
                        }
                    } else for (q in u) k.event.remove(a, q + b[l], c, d, true)
                }
                if (k.isEmptyObject(u)) {
                    if (b = g.handle) b.elem = null;
                    k.removeData(a, ["events", "handle"], true)
                }
            }
        },
        customEvent: {getData: !0, setData: !0, changeData: !0},
        trigger: function (b, c, f, g) {
            if (!f || !(f.nodeType === 3 || f.nodeType === 8)) {
                var l = b.type || b, j = [], q, p, n, m, u;
                if (!Db.test(l + k.event.triggered)) {
                    if (l.indexOf("!") >= 0) {
                        l = l.slice(0, -1);
                        q = true
                    }
                    if (l.indexOf(".") >= 0) {
                        j = l.split(".");
                        l = j.shift();
                        j.sort()
                    }
                    if (f && !k.event.customEvent[l] || k.event.global[l]) {
                        b =
                            typeof b === "object" ? b[k.expando] ? b : new k.Event(l, b) : new k.Event(l);
                        b.type = l;
                        b.isTrigger = true;
                        b.exclusive = q;
                        b.namespace = j.join(".");
                        b.namespace_re = b.namespace ? RegExp("(^|\\.)" + j.join("\\.(?:.*\\.)?") + "(\\.|$)") : null;
                        q = l.indexOf(":") < 0 ? "on" + l : "";
                        if (f) {
                            b.result = d;
                            if (!b.target) b.target = f;
                            c = c != null ? k.makeArray(c) : [];
                            c.unshift(b);
                            n = k.event.special[l] || {};
                            if (!(n.trigger && n.trigger.apply(f, c) === false)) {
                                u = [[f, n.bindType || l]];
                                if (!g && !n.noBubble && !k.isWindow(f)) {
                                    m = n.delegateType || l;
                                    j = Db.test(m + l) ? f : f.parentNode;
                                    for (p = null; j; j = j.parentNode) {
                                        u.push([j, m]);
                                        p = j
                                    }
                                    p && p === f.ownerDocument && u.push([p.defaultView || p.parentWindow || a, m])
                                }
                                for (p = 0; p < u.length && !b.isPropagationStopped(); p++) {
                                    j = u[p][0];
                                    b.type = u[p][1];
                                    (m = (k._data(j, "events") || {})[b.type] && k._data(j, "handle")) && m.apply(j, c);
                                    (m = q && j[q]) && (k.acceptData(j) && m.apply(j, c) === false) && b.preventDefault()
                                }
                                b.type = l;
                                if (!g && !b.isDefaultPrevented() && (!n._default || n._default.apply(f.ownerDocument, c) === false) && !(l === "click" && k.nodeName(f, "a")) && k.acceptData(f)) if (q && f[l] &&
                                    (l !== "focus" && l !== "blur" || b.target.offsetWidth !== 0) && !k.isWindow(f)) {
                                    (p = f[q]) && (f[q] = null);
                                    k.event.triggered = l;
                                    f[l]();
                                    k.event.triggered = d;
                                    p && (f[q] = p)
                                }
                                return b.result
                            }
                        } else {
                            f = k.cache;
                            for (p in f) f[p].events && f[p].events[l] && k.event.trigger(b, c, f[p].handle.elem, true)
                        }
                    }
                }
            }
        },
        dispatch: function (b) {
            var b = k.event.fix(b || a.event), c = (k._data(this, "events") || {})[b.type] || [], f = c.delegateCount,
                g = [].slice.call(arguments, 0), l = !b.exclusive && !b.namespace, j = k.event.special[b.type] || {},
                q = [], p, n, m, u, o, r, H;
            g[0] = b;
            b.delegateTarget =
                this;
            if (!(j.preDispatch && j.preDispatch.call(this, b) === false)) {
                if (f && !(b.button && b.type === "click")) {
                    m = k(this);
                    m.context = this.ownerDocument || this;
                    for (n = b.target; n != this; n = n.parentNode || this) if (n.disabled !== true) {
                        o = {};
                        r = [];
                        m[0] = n;
                        for (p = 0; p < f; p++) {
                            u = c[p];
                            H = u.selector;
                            if (o[H] === d) {
                                var s = o, B = H, A;
                                if (u.quick) {
                                    A = u.quick;
                                    var x = n.attributes || {};
                                    A = (!A[1] || n.nodeName.toLowerCase() === A[1]) && (!A[2] || (x.id || {}).value === A[2]) && (!A[3] || A[3].test((x["class"] || {}).value))
                                } else A = m.is(H);
                                s[B] = A
                            }
                            o[H] && r.push(u)
                        }
                        r.length &&
                        q.push({elem: n, matches: r})
                    }
                }
                c.length > f && q.push({elem: this, matches: c.slice(f)});
                for (p = 0; p < q.length && !b.isPropagationStopped(); p++) {
                    f = q[p];
                    b.currentTarget = f.elem;
                    for (c = 0; c < f.matches.length && !b.isImmediatePropagationStopped(); c++) {
                        u = f.matches[c];
                        if (l || !b.namespace && !u.namespace || b.namespace_re && b.namespace_re.test(u.namespace)) {
                            b.data = u.data;
                            b.handleObj = u;
                            u = ((k.event.special[u.origType] || {}).handle || u.handler).apply(f.elem, g);
                            if (u !== d) {
                                b.result = u;
                                if (u === false) {
                                    b.preventDefault();
                                    b.stopPropagation()
                                }
                            }
                        }
                    }
                }
                j.postDispatch &&
                j.postDispatch.call(this, b);
                return b.result
            }
        },
        props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: ["char", "charCode", "key", "keyCode"], filter: function (a, b) {
                if (a.which == null) a.which = b.charCode != null ? b.charCode : b.keyCode;
                return a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (a, b) {
                var c, f, g = b.button, k = b.fromElement;
                if (a.pageX == null && b.clientX != null) {
                    c = a.target.ownerDocument || q;
                    f = c.documentElement;
                    c = c.body;
                    a.pageX = b.clientX + (f && f.scrollLeft || c && c.scrollLeft || 0) - (f && f.clientLeft || c && c.clientLeft || 0);
                    a.pageY = b.clientY + (f && f.scrollTop || c && c.scrollTop || 0) - (f && f.clientTop || c && c.clientTop || 0)
                }
                if (!a.relatedTarget && k) a.relatedTarget = k === a.target ? b.toElement : k;
                if (!a.which && g !== d) a.which = g & 1 ? 1 : g & 2 ? 3 : g & 4 ? 2 : 0;
                return a
            }
        },
        fix: function (a) {
            if (a[k.expando]) return a;
            var b,
                c, f = a, g = k.event.fixHooks[a.type] || {}, l = g.props ? this.props.concat(g.props) : this.props,
                a = k.Event(f);
            for (b = l.length; b;) {
                c = l[--b];
                a[c] = f[c]
            }
            if (!a.target) a.target = f.srcElement || q;
            if (a.target.nodeType === 3) a.target = a.target.parentNode;
            if (a.metaKey === d) a.metaKey = a.ctrlKey;
            return g.filter ? g.filter(a, f) : a
        },
        special: {
            ready: {setup: k.bindReady},
            load: {noBubble: !0},
            focus: {delegateType: "focusin"},
            blur: {delegateType: "focusout"},
            beforeunload: {
                setup: function (a, b, c) {
                    if (k.isWindow(this)) this.onbeforeunload = c
                }, teardown: function (a,
                                       b) {
                    if (this.onbeforeunload === b) this.onbeforeunload = null
                }
            }
        },
        simulate: function (a, b, c, d) {
            a = k.extend(new k.Event, c, {type: a, isSimulated: true, originalEvent: {}});
            d ? k.event.trigger(a, null, b) : k.event.dispatch.call(b, a);
            a.isDefaultPrevented() && c.preventDefault()
        }
    };
    k.event.handle = k.event.dispatch;
    k.removeEvent = q.removeEventListener ? function (a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, false)
    } : function (a, b, c) {
        a.detachEvent && a.detachEvent("on" + b, c)
    };
    k.Event = function (a, b) {
        if (!(this instanceof k.Event)) return new k.Event(a,
            b);
        if (a && a.type) {
            this.originalEvent = a;
            this.type = a.type;
            this.isDefaultPrevented = a.defaultPrevented || a.returnValue === false || a.getPreventDefault && a.getPreventDefault() ? j : g
        } else this.type = a;
        b && k.extend(this, b);
        this.timeStamp = a && a.timeStamp || k.now();
        this[k.expando] = true
    };
    k.Event.prototype = {
        preventDefault: function () {
            this.isDefaultPrevented = j;
            var a = this.originalEvent;
            if (a) a.preventDefault ? a.preventDefault() : a.returnValue = false
        }, stopPropagation: function () {
            this.isPropagationStopped = j;
            var a = this.originalEvent;
            if (a) {
                a.stopPropagation && a.stopPropagation();
                a.cancelBubble = true
            }
        }, stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = j;
            this.stopPropagation()
        }, isDefaultPrevented: g, isPropagationStopped: g, isImmediatePropagationStopped: g
    };
    k.each({mouseenter: "mouseover", mouseleave: "mouseout"}, function (a, b) {
        k.event.special[a] = {
            delegateType: b, bindType: b, handle: function (a) {
                var c = a.relatedTarget, d = a.handleObj, f;
                if (!c || c !== this && !k.contains(this, c)) {
                    a.type = d.origType;
                    f = d.handler.apply(this, arguments);
                    a.type = b
                }
                return f
            }
        }
    });
    k.support.submitBubbles || (k.event.special.submit = {
        setup: function () {
            if (k.nodeName(this, "form")) return false;
            k.event.add(this, "click._submit keypress._submit", function (a) {
                a = a.target;
                if ((a = k.nodeName(a, "input") || k.nodeName(a, "button") ? a.form : d) && !a._submit_attached) {
                    k.event.add(a, "submit._submit", function (a) {
                        a._submit_bubble = true
                    });
                    a._submit_attached = true
                }
            })
        }, postDispatch: function (a) {
            if (a._submit_bubble) {
                delete a._submit_bubble;
                this.parentNode && !a.isTrigger && k.event.simulate("submit",
                    this.parentNode, a, true)
            }
        }, teardown: function () {
            if (k.nodeName(this, "form")) return false;
            k.event.remove(this, "._submit")
        }
    });
    k.support.changeBubbles || (k.event.special.change = {
        setup: function () {
            if (kb.test(this.nodeName)) {
                if (this.type === "checkbox" || this.type === "radio") {
                    k.event.add(this, "propertychange._change", function (a) {
                        if (a.originalEvent.propertyName === "checked") this._just_changed = true
                    });
                    k.event.add(this, "click._change", function (a) {
                        if (this._just_changed && !a.isTrigger) {
                            this._just_changed = false;
                            k.event.simulate("change",
                                this, a, true)
                        }
                    })
                }
                return false
            }
            k.event.add(this, "beforeactivate._change", function (a) {
                a = a.target;
                if (kb.test(a.nodeName) && !a._change_attached) {
                    k.event.add(a, "change._change", function (a) {
                        this.parentNode && (!a.isSimulated && !a.isTrigger) && k.event.simulate("change", this.parentNode, a, true)
                    });
                    a._change_attached = true
                }
            })
        }, handle: function (a) {
            var b = a.target;
            if (this !== b || a.isSimulated || a.isTrigger || b.type !== "radio" && b.type !== "checkbox") return a.handleObj.handler.apply(this, arguments)
        }, teardown: function () {
            k.event.remove(this,
                "._change");
            return kb.test(this.nodeName)
        }
    });
    k.support.focusinBubbles || k.each({focus: "focusin", blur: "focusout"}, function (a, b) {
        var c = 0, d = function (a) {
            k.event.simulate(b, a.target, k.event.fix(a), true)
        };
        k.event.special[b] = {
            setup: function () {
                c++ === 0 && q.addEventListener(a, d, true)
            }, teardown: function () {
                --c === 0 && q.removeEventListener(a, d, true)
            }
        }
    });
    k.fn.extend({
        on: function (a, b, c, f, l) {
            var j, q;
            if (typeof a === "object") {
                if (typeof b !== "string") {
                    c = c || b;
                    b = d
                }
                for (q in a) this.on(q, b, c, a[q], l);
                return this
            }
            if (c == null && f ==
                null) {
                f = b;
                c = b = d
            } else if (f == null) if (typeof b === "string") {
                f = c;
                c = d
            } else {
                f = c;
                c = b;
                b = d
            }
            if (f === false) f = g; else if (!f) return this;
            if (l === 1) {
                j = f;
                f = function (a) {
                    k().off(a);
                    return j.apply(this, arguments)
                };
                f.guid = j.guid || (j.guid = k.guid++)
            }
            return this.each(function () {
                k.event.add(this, a, f, c, b)
            })
        }, one: function (a, b, c, d) {
            return this.on(a, b, c, d, 1)
        }, off: function (a, b, c) {
            if (a && a.preventDefault && a.handleObj) {
                var f = a.handleObj;
                k(a.delegateTarget).off(f.namespace ? f.origType + "." + f.namespace : f.origType, f.selector, f.handler);
                return this
            }
            if (typeof a === "object") {
                for (f in a) this.off(f, b, a[f]);
                return this
            }
            if (b === false || typeof b === "function") {
                c = b;
                b = d
            }
            c === false && (c = g);
            return this.each(function () {
                k.event.remove(this, a, c, b)
            })
        }, bind: function (a, b, c) {
            return this.on(a, null, b, c)
        }, unbind: function (a, b) {
            return this.off(a, null, b)
        }, live: function (a, b, c) {
            k(this.context).on(a, this.selector, b, c);
            return this
        }, die: function (a, b) {
            k(this.context).off(a, this.selector || "**", b);
            return this
        }, delegate: function (a, b, c, d) {
            return this.on(b, a, c, d)
        }, undelegate: function (a,
                                 b, c) {
            return arguments.length == 1 ? this.off(a, "**") : this.off(b, a, c)
        }, trigger: function (a, b) {
            return this.each(function () {
                k.event.trigger(a, b, this)
            })
        }, triggerHandler: function (a, b) {
            if (this[0]) return k.event.trigger(a, b, this[0], true)
        }, toggle: function (a) {
            var b = arguments, c = a.guid || k.guid++, d = 0, f = function (c) {
                var f = (k._data(this, "lastToggle" + a.guid) || 0) % d;
                k._data(this, "lastToggle" + a.guid, f + 1);
                c.preventDefault();
                return b[f].apply(this, arguments) || false
            };
            for (f.guid = c; d < b.length;) b[d++].guid = c;
            return this.click(f)
        },
        hover: function (a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }
    });
    k.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
        k.fn[b] = function (a, c) {
            if (c == null) {
                c = a;
                a = null
            }
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        };
        k.attrFn && (k.attrFn[b] = true);
        if (lc.test(b)) k.event.fixHooks[b] = k.event.keyHooks;
        if (mc.test(b)) k.event.fixHooks[b] =
            k.event.mouseHooks
    });
    var Fb = function (a, b, c, d, f, g) {
            for (var f = 0, k = d.length; f < k; f++) {
                var l = d[f];
                if (l) {
                    for (var j = false, l = l[a]; l;) {
                        if (l[Da] === c) {
                            j = d[l.sizset];
                            break
                        }
                        if (l.nodeType === 1 && !g) {
                            l[Da] = c;
                            l.sizset = f
                        }
                        if (l.nodeName.toLowerCase() === b) {
                            j = l;
                            break
                        }
                        l = l[a]
                    }
                    d[f] = j
                }
            }
        }, Gb = function (a, b, c, d, f, g) {
            for (var f = 0, k = d.length; f < k; f++) {
                var l = d[f];
                if (l) {
                    for (var j = false, l = l[a]; l;) {
                        if (l[Da] === c) {
                            j = d[l.sizset];
                            break
                        }
                        if (l.nodeType === 1) {
                            if (!g) {
                                l[Da] = c;
                                l.sizset = f
                            }
                            if (typeof b !== "string") {
                                if (l === b) {
                                    j = true;
                                    break
                                }
                            } else if (G.filter(b,
                                    [l]).length > 0) {
                                j = l;
                                break
                            }
                        }
                        l = l[a]
                    }
                    d[f] = j
                }
            }
        },
        lb = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
        Da = "sizcache" + (Math.random() + "").replace(".", ""), mb = 0, Hb = Object.prototype.toString, Wa = !1,
        Ib = !0, Ea = /\\/g, pc = /\r\n/g, Xa = /\W/;
    [0, 0].sort(function () {
        Ib = false;
        return 0
    });
    var G = function (a, b, c, d) {
        var c = c || [], f = b = b || q;
        if (b.nodeType !== 1 && b.nodeType !== 9) return [];
        if (!a || typeof a !== "string") return c;
        var g, l, k, j, p, n = true, m = G.isXML(b),
            u = [], o = a;
        do {
            lb.exec("");
            if (g = lb.exec(o)) {
                o = g[3];
                u.push(g[1]);
                if (g[2]) {
                    j = g[3];
                    break
                }
            }
        } while (g);
        if (u.length > 1 && Jb.exec(a)) if (u.length === 2 && I.relative[u[0]]) l = Kb(u[0] + u[1], b, d); else for (l = I.relative[u[0]] ? [b] : G(u.shift(), b); u.length;) {
            a = u.shift();
            I.relative[a] && (a = a + u.shift());
            l = Kb(a, l, d)
        } else {
            if (!d && u.length > 1 && b.nodeType === 9 && !m && I.match.ID.test(u[0]) && !I.match.ID.test(u[u.length - 1])) {
                g = G.find(u.shift(), b, m);
                b = g.expr ? G.filter(g.expr, g.set)[0] : g.set[0]
            }
            if (b) {
                g = d ? {expr: u.pop(), set: ba(d)} : G.find(u.pop(),
                    u.length === 1 && (u[0] === "~" || u[0] === "+") && b.parentNode ? b.parentNode : b, m);
                l = g.expr ? G.filter(g.expr, g.set) : g.set;
                for (u.length > 0 ? k = ba(l) : n = false; u.length;) {
                    g = p = u.pop();
                    I.relative[p] ? g = u.pop() : p = "";
                    g == null && (g = b);
                    I.relative[p](k, g, m)
                }
            } else k = []
        }
        k || (k = l);
        k || G.error(p || a);
        if (Hb.call(k) === "[object Array]") if (n) if (b && b.nodeType === 1) for (a = 0; k[a] != null; a++) k[a] && (k[a] === true || k[a].nodeType === 1 && G.contains(b, k[a])) && c.push(l[a]); else for (a = 0; k[a] != null; a++) k[a] && k[a].nodeType === 1 && c.push(l[a]); else c.push.apply(c,
            k); else ba(k, c);
        if (j) {
            G(j, f, c, d);
            G.uniqueSort(c)
        }
        return c
    };
    G.uniqueSort = function (a) {
        if (Ya) {
            Wa = Ib;
            a.sort(Ya);
            if (Wa) for (var b = 1; b < a.length; b++) a[b] === a[b - 1] && a.splice(b--, 1)
        }
        return a
    };
    G.matches = function (a, b) {
        return G(a, null, null, b)
    };
    G.matchesSelector = function (a, b) {
        return G(b, null, null, [a]).length > 0
    };
    G.find = function (a, b, c) {
        var d, f, g, l, k, j;
        if (!a) return [];
        f = 0;
        for (g = I.order.length; f < g; f++) {
            k = I.order[f];
            if (l = I.leftMatch[k].exec(a)) {
                j = l[1];
                l.splice(1, 1);
                if (j.substr(j.length - 1) !== "\\") {
                    l[1] = (l[1] || "").replace(Ea,
                        "");
                    d = I.find[k](l, b, c);
                    if (d != null) {
                        a = a.replace(I.match[k], "");
                        break
                    }
                }
            }
        }
        d || (d = typeof b.getElementsByTagName !== "undefined" ? b.getElementsByTagName("*") : []);
        return {set: d, expr: a}
    };
    G.filter = function (a, b, c, f) {
        for (var g, l, k, j, q, p, n, m, u = a, o = [], r = b, H = b && b[0] && G.isXML(b[0]); a && b.length;) {
            for (k in I.filter) if ((g = I.leftMatch[k].exec(a)) != null && g[2]) {
                p = I.filter[k];
                q = g[1];
                l = false;
                g.splice(1, 1);
                if (q.substr(q.length - 1) !== "\\") {
                    r === o && (o = []);
                    if (I.preFilter[k]) if (g = I.preFilter[k](g, r, c, o, f, H)) {
                        if (g === true) continue
                    } else l =
                        j = true;
                    if (g) for (n = 0; (q = r[n]) != null; n++) if (q) {
                        j = p(q, g, n, r);
                        m = f ^ j;
                        if (c && j != null) m ? l = true : r[n] = false; else if (m) {
                            o.push(q);
                            l = true
                        }
                    }
                    if (j !== d) {
                        c || (r = o);
                        a = a.replace(I.match[k], "");
                        if (!l) return [];
                        break
                    }
                }
            }
            if (a === u) if (l == null) G.error(a); else break;
            u = a
        }
        return r
    };
    G.error = function (a) {
        throw Error("Syntax error, unrecognized expression: " + a);
    };
    var nb = G.getText = function (a) {
        var b, c;
        b = a.nodeType;
        var d = "";
        if (b) if (b === 1 || b === 9 || b === 11) {
            if (typeof a.textContent === "string") return a.textContent;
            if (typeof a.innerText === "string") return a.innerText.replace(pc,
                "");
            for (a = a.firstChild; a; a = a.nextSibling) d = d + nb(a)
        } else {
            if (b === 3 || b === 4) return a.nodeValue
        } else for (b = 0; c = a[b]; b++) c.nodeType !== 8 && (d = d + nb(c));
        return d
    }, I = G.selectors = {
        order: ["ID", "NAME", "TAG"], match: {
            ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
            CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
            NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
            ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
            TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
            CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
            POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
            PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
        }, leftMatch: {}, attrMap: {"class": "className", "for": "htmlFor"}, attrHandle: {
            href: function (a) {
                return a.getAttribute("href")
            }, type: function (a) {
                return a.getAttribute("type")
            }
        }, relative: {
            "+": function (a, b) {
                var c = typeof b === "string", d = c && !Xa.test(b), c = c && !d;
                d && (b = b.toLowerCase());
                for (var d = 0, f = a.length, g; d < f; d++) if (g = a[d]) {
                    for (; (g = g.previousSibling) && g.nodeType !==
                    1;) ;
                    a[d] = c || g && g.nodeName.toLowerCase() === b ? g || false : g === b
                }
                c && G.filter(b, a, true)
            }, ">": function (a, b) {
                var c, d = typeof b === "string", f = 0, g = a.length;
                if (d && !Xa.test(b)) for (b = b.toLowerCase(); f < g; f++) {
                    if (c = a[f]) {
                        c = c.parentNode;
                        a[f] = c.nodeName.toLowerCase() === b ? c : false
                    }
                } else {
                    for (; f < g; f++) (c = a[f]) && (a[f] = d ? c.parentNode : c.parentNode === b);
                    d && G.filter(b, a, true)
                }
            }, "": function (a, b, c) {
                var d, f = mb++, g = Gb;
                if (typeof b === "string" && !Xa.test(b)) {
                    d = b = b.toLowerCase();
                    g = Fb
                }
                g("parentNode", b, f, a, d, c)
            }, "~": function (a, b, c) {
                var d,
                    f = mb++, g = Gb;
                if (typeof b === "string" && !Xa.test(b)) {
                    d = b = b.toLowerCase();
                    g = Fb
                }
                g("previousSibling", b, f, a, d, c)
            }
        }, find: {
            ID: function (a, b, c) {
                if (typeof b.getElementById !== "undefined" && !c) return (a = b.getElementById(a[1])) && a.parentNode ? [a] : []
            }, NAME: function (a, b) {
                if (typeof b.getElementsByName !== "undefined") {
                    for (var c = [], d = b.getElementsByName(a[1]), f = 0, g = d.length; f < g; f++) d[f].getAttribute("name") === a[1] && c.push(d[f]);
                    return c.length === 0 ? null : c
                }
            }, TAG: function (a, b) {
                if (typeof b.getElementsByTagName !== "undefined") return b.getElementsByTagName(a[1])
            }
        },
        preFilter: {
            CLASS: function (a, b, c, d, f, g) {
                a = " " + a[1].replace(Ea, "") + " ";
                if (g) return a;
                for (var g = 0, l; (l = b[g]) != null; g++) l && (f ^ (l.className && (" " + l.className + " ").replace(/[\t\n\r]/g, " ").indexOf(a) >= 0) ? c || d.push(l) : c && (b[g] = false));
                return false
            }, ID: function (a) {
                return a[1].replace(Ea, "")
            }, TAG: function (a) {
                return a[1].replace(Ea, "").toLowerCase()
            }, CHILD: function (a) {
                if (a[1] === "nth") {
                    a[2] || G.error(a[0]);
                    a[2] = a[2].replace(/^\+|\s*/g, "");
                    var b = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2] === "even" && "2n" || a[2] === "odd" &&
                        "2n+1" || !/\D/.test(a[2]) && "0n+" + a[2] || a[2]);
                    a[2] = b[1] + (b[2] || 1) - 0;
                    a[3] = b[3] - 0
                } else a[2] && G.error(a[0]);
                a[0] = mb++;
                return a
            }, ATTR: function (a, b, c, d, f, g) {
                b = a[1] = a[1].replace(Ea, "");
                !g && I.attrMap[b] && (a[1] = I.attrMap[b]);
                a[4] = (a[4] || a[5] || "").replace(Ea, "");
                a[2] === "~=" && (a[4] = " " + a[4] + " ");
                return a
            }, PSEUDO: function (a, b, c, d, f) {
                if (a[1] === "not") if ((lb.exec(a[3]) || "").length > 1 || /^\w/.test(a[3])) a[3] = G(a[3], null, null, b); else {
                    a = G.filter(a[3], b, c, 1 ^ f);
                    c || d.push.apply(d, a);
                    return false
                } else if (I.match.POS.test(a[0]) ||
                    I.match.CHILD.test(a[0])) return true;
                return a
            }, POS: function (a) {
                a.unshift(true);
                return a
            }
        }, filters: {
            enabled: function (a) {
                return a.disabled === false && a.type !== "hidden"
            }, disabled: function (a) {
                return a.disabled === true
            }, checked: function (a) {
                return a.checked === true
            }, selected: function (a) {
                a.parentNode && a.parentNode.selectedIndex;
                return a.selected === true
            }, parent: function (a) {
                return !!a.firstChild
            }, empty: function (a) {
                return !a.firstChild
            }, has: function (a, b, c) {
                return !!G(c[3], a).length
            }, header: function (a) {
                return /h\d/i.test(a.nodeName)
            },
            text: function (a) {
                var b = a.getAttribute("type"), c = a.type;
                return a.nodeName.toLowerCase() === "input" && "text" === c && (b === c || b === null)
            }, radio: function (a) {
                return a.nodeName.toLowerCase() === "input" && "radio" === a.type
            }, checkbox: function (a) {
                return a.nodeName.toLowerCase() === "input" && "checkbox" === a.type
            }, file: function (a) {
                return a.nodeName.toLowerCase() === "input" && "file" === a.type
            }, password: function (a) {
                return a.nodeName.toLowerCase() === "input" && "password" === a.type
            }, submit: function (a) {
                var b = a.nodeName.toLowerCase();
                return (b === "input" || b === "button") && "submit" === a.type
            }, image: function (a) {
                return a.nodeName.toLowerCase() === "input" && "image" === a.type
            }, reset: function (a) {
                var b = a.nodeName.toLowerCase();
                return (b === "input" || b === "button") && "reset" === a.type
            }, button: function (a) {
                var b = a.nodeName.toLowerCase();
                return b === "input" && "button" === a.type || b === "button"
            }, input: function (a) {
                return /input|select|textarea|button/i.test(a.nodeName)
            }, focus: function (a) {
                return a === a.ownerDocument.activeElement
            }
        }, setFilters: {
            first: function (a,
                             b) {
                return b === 0
            }, last: function (a, b, c, d) {
                return b === d.length - 1
            }, even: function (a, b) {
                return b % 2 === 0
            }, odd: function (a, b) {
                return b % 2 === 1
            }, lt: function (a, b, c) {
                return b < c[3] - 0
            }, gt: function (a, b, c) {
                return b > c[3] - 0
            }, nth: function (a, b, c) {
                return c[3] - 0 === b
            }, eq: function (a, b, c) {
                return c[3] - 0 === b
            }
        }, filter: {
            PSEUDO: function (a, b, c, d) {
                var f = b[1], g = I.filters[f];
                if (g) return g(a, c, b, d);
                if (f === "contains") return (a.textContent || a.innerText || nb([a]) || "").indexOf(b[3]) >= 0;
                if (f === "not") {
                    b = b[3];
                    c = 0;
                    for (d = b.length; c < d; c++) if (b[c] ===
                        a) return false;
                    return true
                }
                G.error(f)
            }, CHILD: function (a, b) {
                var c, d, f, g, l, k;
                c = b[1];
                k = a;
                switch (c) {
                    case "only":
                    case "first":
                        for (; k = k.previousSibling;) if (k.nodeType === 1) return false;
                        if (c === "first") return true;
                        k = a;
                    case "last":
                        for (; k = k.nextSibling;) if (k.nodeType === 1) return false;
                        return true;
                    case "nth":
                        c = b[2];
                        d = b[3];
                        if (c === 1 && d === 0) return true;
                        f = b[0];
                        if ((g = a.parentNode) && (g[Da] !== f || !a.nodeIndex)) {
                            l = 0;
                            for (k = g.firstChild; k; k = k.nextSibling) if (k.nodeType === 1) k.nodeIndex = ++l;
                            g[Da] = f
                        }
                        k = a.nodeIndex - d;
                        return c ===
                        0 ? k === 0 : k % c === 0 && k / c >= 0
                }
            }, ID: function (a, b) {
                return a.nodeType === 1 && a.getAttribute("id") === b
            }, TAG: function (a, b) {
                return b === "*" && a.nodeType === 1 || !!a.nodeName && a.nodeName.toLowerCase() === b
            }, CLASS: function (a, b) {
                return (" " + (a.className || a.getAttribute("class")) + " ").indexOf(b) > -1
            }, ATTR: function (a, b) {
                var c = b[1],
                    c = G.attr ? G.attr(a, c) : I.attrHandle[c] ? I.attrHandle[c](a) : a[c] != null ? a[c] : a.getAttribute(c),
                    d = c + "", f = b[2], g = b[4];
                return c == null ? f === "!=" : !f && G.attr ? c != null : f === "=" ? d === g : f === "*=" ? d.indexOf(g) >= 0 : f ===
                "~=" ? (" " + d + " ").indexOf(g) >= 0 : !g ? d && c !== false : f === "!=" ? d !== g : f === "^=" ? d.indexOf(g) === 0 : f === "$=" ? d.substr(d.length - g.length) === g : f === "|=" ? d === g || d.substr(0, g.length + 1) === g + "-" : false
            }, POS: function (a, b, c, d) {
                var f = I.setFilters[b[2]];
                if (f) return f(a, c, b, d)
            }
        }
    }, Jb = I.match.POS, qc = function (a, b) {
        return "\\" + (b - 0 + 1)
    }, La;
    for (La in I.match) I.match[La] = RegExp(I.match[La].source + /(?![^\[]*\])(?![^\(]*\))/.source), I.leftMatch[La] = RegExp(/(^(?:.|\r|\n)*?)/.source + I.match[La].source.replace(/\\(\d+)/g, qc));
    I.match.globalPOS =
        Jb;
    var ba = function (a, b) {
        a = Array.prototype.slice.call(a, 0);
        if (b) {
            b.push.apply(b, a);
            return b
        }
        return a
    };
    try {
        Array.prototype.slice.call(q.documentElement.childNodes, 0)[0].nodeType
    } catch (Yc) {
        ba = function (a, b) {
            var c = 0, d = b || [];
            if (Hb.call(a) === "[object Array]") Array.prototype.push.apply(d, a); else if (typeof a.length === "number") for (var f = a.length; c < f; c++) d.push(a[c]); else for (; a[c]; c++) d.push(a[c]);
            return d
        }
    }
    var Ya, Ma;
    q.documentElement.compareDocumentPosition ? Ya = function (a, b) {
        if (a === b) {
            Wa = true;
            return 0
        }
        return !a.compareDocumentPosition ||
        !b.compareDocumentPosition ? a.compareDocumentPosition ? -1 : 1 : a.compareDocumentPosition(b) & 4 ? -1 : 1
    } : (Ya = function (a, b) {
        if (a === b) {
            Wa = true;
            return 0
        }
        if (a.sourceIndex && b.sourceIndex) return a.sourceIndex - b.sourceIndex;
        var c, d, f = [], g = [];
        c = a.parentNode;
        d = b.parentNode;
        var k = c;
        if (c === d) return Ma(a, b);
        if (c) {
            if (!d) return 1
        } else return -1;
        for (; k;) {
            f.unshift(k);
            k = k.parentNode
        }
        for (k = d; k;) {
            g.unshift(k);
            k = k.parentNode
        }
        c = f.length;
        d = g.length;
        for (k = 0; k < c && k < d; k++) if (f[k] !== g[k]) return Ma(f[k], g[k]);
        return k === c ? Ma(a, g[k],
            -1) : Ma(f[k], b, 1)
    }, Ma = function (a, b, c) {
        if (a === b) return c;
        for (a = a.nextSibling; a;) {
            if (a === b) return -1;
            a = a.nextSibling
        }
        return 1
    });
    var Za = q.createElement("div"), Lb = "script" + (new Date).getTime(), $a = q.documentElement;
    Za.innerHTML = "<a name='" + Lb + "'/>";
    $a.insertBefore(Za, $a.firstChild);
    q.getElementById(Lb) && (I.find.ID = function (a, b, c) {
        if (typeof b.getElementById !== "undefined" && !c) return (b = b.getElementById(a[1])) ? b.id === a[1] || typeof b.getAttributeNode !== "undefined" && b.getAttributeNode("id").nodeValue === a[1] ? [b] :
            d : []
    }, I.filter.ID = function (a, b) {
        var c = typeof a.getAttributeNode !== "undefined" && a.getAttributeNode("id");
        return a.nodeType === 1 && c && c.nodeValue === b
    });
    $a.removeChild(Za);
    var $a = Za = null, ta = q.createElement("div");
    ta.appendChild(q.createComment(""));
    0 < ta.getElementsByTagName("*").length && (I.find.TAG = function (a, b) {
        var c = b.getElementsByTagName(a[1]);
        if (a[1] === "*") {
            for (var d = [], f = 0; c[f]; f++) c[f].nodeType === 1 && d.push(c[f]);
            c = d
        }
        return c
    });
    ta.innerHTML = "<a href='#'></a>";
    ta.firstChild && ("undefined" !== typeof ta.firstChild.getAttribute &&
        "#" !== ta.firstChild.getAttribute("href")) && (I.attrHandle.href = function (a) {
        return a.getAttribute("href", 2)
    });
    ta = null;
    if (q.querySelectorAll) {
        var ob = G, ab = q.createElement("div");
        ab.innerHTML = "<p class='TEST'></p>";
        if (!(ab.querySelectorAll && 0 === ab.querySelectorAll(".TEST").length)) {
            var G = function (a, b, c, d) {
                b = b || q;
                if (!d && !G.isXML(b)) {
                    var f = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(a);
                    if (f && (b.nodeType === 1 || b.nodeType === 9)) {
                        if (f[1]) return ba(b.getElementsByTagName(a), c);
                        if (f[2] && I.find.CLASS && b.getElementsByClassName) return ba(b.getElementsByClassName(f[2]),
                            c)
                    }
                    if (b.nodeType === 9) {
                        if (a === "body" && b.body) return ba([b.body], c);
                        if (f && f[3]) {
                            var g = b.getElementById(f[3]);
                            if (g && g.parentNode) {
                                if (g.id === f[3]) return ba([g], c)
                            } else return ba([], c)
                        }
                        try {
                            return ba(b.querySelectorAll(a), c)
                        } catch (k) {
                        }
                    } else if (b.nodeType === 1 && b.nodeName.toLowerCase() !== "object") {
                        var f = b, l = (g = b.getAttribute("id")) || "__sizzle__", j = b.parentNode,
                            p = /^\s*[+~]/.test(a);
                        g ? l = l.replace(/'/g, "\\$&") : b.setAttribute("id", l);
                        if (p && j) b = b.parentNode;
                        try {
                            if (!p || j) return ba(b.querySelectorAll("[id='" + l +
                                "'] " + a), c)
                        } catch (n) {
                        } finally {
                            g || f.removeAttribute("id")
                        }
                    }
                }
                return ob(a, b, c, d)
            }, pb;
            for (pb in ob) G[pb] = ob[pb];
            ab = null
        }
    }
    var bb = q.documentElement,
        cb = bb.matchesSelector || bb.mozMatchesSelector || bb.webkitMatchesSelector || bb.msMatchesSelector;
    if (cb) {
        var rc = !cb.call(q.createElement("div"), "div"), Mb = !1;
        try {
            cb.call(q.documentElement, "[test!='']:sizzle")
        } catch (Zc) {
            Mb = !0
        }
        G.matchesSelector = function (a, b) {
            b = b.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
            if (!G.isXML(a)) try {
                if (Mb || !I.match.PSEUDO.test(b) && !/!=/.test(b)) {
                    var c =
                        cb.call(a, b);
                    if (c || !rc || a.document && a.document.nodeType !== 11) return c
                }
            } catch (d) {
            }
            return G(b, null, null, [a]).length > 0
        }
    }
    var Fa = q.createElement("div");
    Fa.innerHTML = "<div class='test e'></div><div class='test'></div>";
    Fa.getElementsByClassName && 0 !== Fa.getElementsByClassName("e").length && (Fa.lastChild.className = "e", 1 !== Fa.getElementsByClassName("e").length && (I.order.splice(1, 0, "CLASS"), I.find.CLASS = function (a, b, c) {
        if (typeof b.getElementsByClassName !== "undefined" && !c) return b.getElementsByClassName(a[1])
    },
        Fa = null));
    G.contains = q.documentElement.contains ? function (a, b) {
        return a !== b && (a.contains ? a.contains(b) : true)
    } : q.documentElement.compareDocumentPosition ? function (a, b) {
        return !!(a.compareDocumentPosition(b) & 16)
    } : function () {
        return false
    };
    G.isXML = function (a) {
        return (a = (a ? a.ownerDocument || a : 0).documentElement) ? a.nodeName !== "HTML" : false
    };
    var Kb = function (a, b, c) {
        for (var d, f = [], g = "", b = b.nodeType ? [b] : b; d = I.match.PSEUDO.exec(a);) {
            g = g + d[0];
            a = a.replace(I.match.PSEUDO, "")
        }
        a = I.relative[a] ? a + "*" : a;
        d = 0;
        for (var k = b.length; d <
        k; d++) G(a, b[d], f, c);
        return G.filter(g, f)
    };
    G.attr = k.attr;
    G.selectors.attrMap = {};
    k.find = G;
    k.expr = G.selectors;
    k.expr[":"] = k.expr.filters;
    k.unique = G.uniqueSort;
    k.text = G.getText;
    k.isXMLDoc = G.isXML;
    k.contains = G.contains;
    var sc = /Until$/, tc = /^(?:parents|prevUntil|prevAll)/, uc = /,/, ec = /^.[^:#\[\.,]*$/,
        vc = Array.prototype.slice, Nb = k.expr.match.globalPOS, wc = {children: !0, contents: !0, next: !0, prev: !0};
    k.fn.extend({
        find: function (a) {
            var b = this, c, d;
            if (typeof a !== "string") return k(a).filter(function () {
                c = 0;
                for (d = b.length; c <
                d; c++) if (k.contains(b[c], this)) return true
            });
            var f = this.pushStack("", "find", a), g, l, j;
            c = 0;
            for (d = this.length; c < d; c++) {
                g = f.length;
                k.find(a, this[c], f);
                if (c > 0) for (l = g; l < f.length; l++) for (j = 0; j < g; j++) if (f[j] === f[l]) {
                    f.splice(l--, 1);
                    break
                }
            }
            return f
        }, has: function (a) {
            var b = k(a);
            return this.filter(function () {
                for (var a = 0, c = b.length; a < c; a++) if (k.contains(this, b[a])) return true
            })
        }, not: function (a) {
            return this.pushStack(m(this, a, false), "not", a)
        }, filter: function (a) {
            return this.pushStack(m(this, a, true), "filter", a)
        },
        is: function (a) {
            return !!a && (typeof a === "string" ? Nb.test(a) ? k(a, this.context).index(this[0]) >= 0 : k.filter(a, this).length > 0 : this.filter(a).length > 0)
        }, closest: function (a, b) {
            var c = [], d, f, g = this[0];
            if (k.isArray(a)) {
                for (f = 1; g && g.ownerDocument && g !== b;) {
                    for (d = 0; d < a.length; d++) k(g).is(a[d]) && c.push({selector: a[d], elem: g, level: f});
                    g = g.parentNode;
                    f++
                }
                return c
            }
            var l = Nb.test(a) || typeof a !== "string" ? k(a, b || this.context) : 0;
            d = 0;
            for (f = this.length; d < f; d++) for (g = this[d]; g;) if (l ? l.index(g) > -1 : k.find.matchesSelector(g,
                    a)) {
                c.push(g);
                break
            } else {
                g = g.parentNode;
                if (!g || !g.ownerDocument || g === b || g.nodeType === 11) break
            }
            c = c.length > 1 ? k.unique(c) : c;
            return this.pushStack(c, "closest", a)
        }, index: function (a) {
            return !a ? this[0] && this[0].parentNode ? this.prevAll().length : -1 : typeof a === "string" ? k.inArray(this[0], k(a)) : k.inArray(a.jquery ? a[0] : a, this)
        }, add: function (a, b) {
            var c = typeof a === "string" ? k(a, b) : k.makeArray(a && a.nodeType ? [a] : a),
                d = k.merge(this.get(), c);
            return this.pushStack(!c[0] || !c[0].parentNode || c[0].parentNode.nodeType === 11 ||
            !d[0] || !d[0].parentNode || d[0].parentNode.nodeType === 11 ? d : k.unique(d))
        }, andSelf: function () {
            return this.add(this.prevObject)
        }
    });
    k.each({
        parent: function (a) {
            return (a = a.parentNode) && a.nodeType !== 11 ? a : null
        }, parents: function (a) {
            return k.dir(a, "parentNode")
        }, parentsUntil: function (a, b, c) {
            return k.dir(a, "parentNode", c)
        }, next: function (a) {
            return k.nth(a, 2, "nextSibling")
        }, prev: function (a) {
            return k.nth(a, 2, "previousSibling")
        }, nextAll: function (a) {
            return k.dir(a, "nextSibling")
        }, prevAll: function (a) {
            return k.dir(a,
                "previousSibling")
        }, nextUntil: function (a, b, c) {
            return k.dir(a, "nextSibling", c)
        }, prevUntil: function (a, b, c) {
            return k.dir(a, "previousSibling", c)
        }, siblings: function (a) {
            return k.sibling((a.parentNode || {}).firstChild, a)
        }, children: function (a) {
            return k.sibling(a.firstChild)
        }, contents: function (a) {
            return k.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : k.makeArray(a.childNodes)
        }
    }, function (a, b) {
        k.fn[a] = function (c, d) {
            var f = k.map(this, b, c);
            sc.test(a) || (d = c);
            d && typeof d === "string" && (f = k.filter(d,
                f));
            f = this.length > 1 && !wc[a] ? k.unique(f) : f;
            if ((this.length > 1 || uc.test(d)) && tc.test(a)) f = f.reverse();
            return this.pushStack(f, a, vc.call(arguments).join(","))
        }
    });
    k.extend({
        filter: function (a, b, c) {
            c && (a = ":not(" + a + ")");
            return b.length === 1 ? k.find.matchesSelector(b[0], a) ? [b[0]] : [] : k.find.matches(a, b)
        }, dir: function (a, b, c) {
            for (var f = [], a = a[b]; a && a.nodeType !== 9 && (c === d || a.nodeType !== 1 || !k(a).is(c));) {
                a.nodeType === 1 && f.push(a);
                a = a[b]
            }
            return f
        }, nth: function (a, b, c) {
            for (var b = b || 1, d = 0; a; a = a[c]) if (a.nodeType === 1 &&
                ++d === b) break;
            return a
        }, sibling: function (a, b) {
            for (var c = []; a; a = a.nextSibling) a.nodeType === 1 && a !== b && c.push(a);
            return c
        }
    });
    var vb = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        xc = / jQuery\d+="(?:\d+|null)"/g, qb = /^\s+/,
        Ob = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig, Pb = /<([\w:]+)/,
        yc = /<tbody/i, zc = /<|&#?\w+;/, Ac = /<(?:script|style)/i, Bc = /<(?:script|object|embed|option|style)/i,
        Qb = RegExp("<(?:" + vb + ")[\\s/>]", "i"), Rb = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Sb = /\/(java|ecma)script/i, Cc = /^\s*<!(?:\[CDATA\[|\-\-)/, X = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            area: [1, "<map>", "</map>"],
            _default: [0, "", ""]
        }, rb = o(q);
    X.optgroup = X.option;
    X.tbody = X.tfoot =
        X.colgroup = X.caption = X.thead;
    X.th = X.td;
    k.support.htmlSerialize || (X._default = [1, "div<div>", "</div>"]);
    k.fn.extend({
        text: function (a) {
            return k.access(this, function (a) {
                return a === d ? k.text(this) : this.empty().append((this[0] && this[0].ownerDocument || q).createTextNode(a))
            }, null, a, arguments.length)
        }, wrapAll: function (a) {
            if (k.isFunction(a)) return this.each(function (b) {
                k(this).wrapAll(a.call(this, b))
            });
            if (this[0]) {
                var b = k(a, this[0].ownerDocument).eq(0).clone(true);
                this[0].parentNode && b.insertBefore(this[0]);
                b.map(function () {
                    for (var a = this; a.firstChild && a.firstChild.nodeType === 1;) a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        }, wrapInner: function (a) {
            return k.isFunction(a) ? this.each(function (b) {
                k(this).wrapInner(a.call(this, b))
            }) : this.each(function () {
                var b = k(this), c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        }, wrap: function (a) {
            var b = k.isFunction(a);
            return this.each(function (c) {
                k(this).wrapAll(b ? a.call(this, c) : a)
            })
        }, unwrap: function () {
            return this.parent().each(function () {
                k.nodeName(this, "body") ||
                k(this).replaceWith(this.childNodes)
            }).end()
        }, append: function () {
            return this.domManip(arguments, true, function (a) {
                this.nodeType === 1 && this.appendChild(a)
            })
        }, prepend: function () {
            return this.domManip(arguments, true, function (a) {
                this.nodeType === 1 && this.insertBefore(a, this.firstChild)
            })
        }, before: function () {
            if (this[0] && this[0].parentNode) return this.domManip(arguments, false, function (a) {
                this.parentNode.insertBefore(a, this)
            });
            if (arguments.length) {
                var a = k.clean(arguments);
                a.push.apply(a, this.toArray());
                return this.pushStack(a,
                    "before", arguments)
            }
        }, after: function () {
            if (this[0] && this[0].parentNode) return this.domManip(arguments, false, function (a) {
                this.parentNode.insertBefore(a, this.nextSibling)
            });
            if (arguments.length) {
                var a = this.pushStack(this, "after", arguments);
                a.push.apply(a, k.clean(arguments));
                return a
            }
        }, remove: function (a, b) {
            for (var c = 0, d; (d = this[c]) != null; c++) if (!a || k.filter(a, [d]).length) {
                if (!b && d.nodeType === 1) {
                    k.cleanData(d.getElementsByTagName("*"));
                    k.cleanData([d])
                }
                d.parentNode && d.parentNode.removeChild(d)
            }
            return this
        },
        empty: function () {
            for (var a = 0, b; (b = this[a]) != null; a++) for (b.nodeType === 1 && k.cleanData(b.getElementsByTagName("*")); b.firstChild;) b.removeChild(b.firstChild);
            return this
        }, clone: function (a, b) {
            a = a == null ? false : a;
            b = b == null ? a : b;
            return this.map(function () {
                return k.clone(this, a, b)
            })
        }, html: function (a) {
            return k.access(this, function (a) {
                var b = this[0] || {}, c = 0, f = this.length;
                if (a === d) return b.nodeType === 1 ? b.innerHTML.replace(xc, "") : null;
                if (typeof a === "string" && !Ac.test(a) && (k.support.leadingWhitespace || !qb.test(a)) &&
                    !X[(Pb.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = a.replace(Ob, "<$1></$2>");
                    try {
                        for (; c < f; c++) {
                            b = this[c] || {};
                            if (b.nodeType === 1) {
                                k.cleanData(b.getElementsByTagName("*"));
                                b.innerHTML = a
                            }
                        }
                        b = 0
                    } catch (g) {
                    }
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        }, replaceWith: function (a) {
            if (this[0] && this[0].parentNode) {
                if (k.isFunction(a)) return this.each(function (b) {
                    var c = k(this), d = c.html();
                    c.replaceWith(a.call(this, b, d))
                });
                typeof a !== "string" && (a = k(a).detach());
                return this.each(function () {
                    var b = this.nextSibling, c =
                        this.parentNode;
                    k(this).remove();
                    b ? k(b).before(a) : k(c).append(a)
                })
            }
            return this.length ? this.pushStack(k(k.isFunction(a) ? a() : a), "replaceWith", a) : this
        }, detach: function (a) {
            return this.remove(a, true)
        }, domManip: function (a, b, c) {
            var f, g, l, j = a[0], q = [];
            if (!k.support.checkClone && arguments.length === 3 && typeof j === "string" && Rb.test(j)) return this.each(function () {
                k(this).domManip(a, b, c, true)
            });
            if (k.isFunction(j)) return this.each(function (f) {
                var g = k(this);
                a[0] = j.call(this, f, b ? g.html() : d);
                g.domManip(a, b, c)
            });
            if (this[0]) {
                f =
                    j && j.parentNode;
                f = k.support.parentNode && f && f.nodeType === 11 && f.childNodes.length === this.length ? {fragment: f} : k.buildFragment(a, this, q);
                l = f.fragment;
                if (g = l.childNodes.length === 1 ? l = l.firstChild : l.firstChild) {
                    b = b && k.nodeName(g, "tr");
                    g = 0;
                    for (var p = this.length, n = p - 1; g < p; g++) c.call(b ? k.nodeName(this[g], "table") ? this[g].getElementsByTagName("tbody")[0] || this[g].appendChild(this[g].ownerDocument.createElement("tbody")) : this[g] : this[g], f.cacheable || p > 1 && g < n ? k.clone(l, true, true) : l)
                }
                q.length && k.each(q, function (a,
                                                b) {
                    b.src ? k.ajax({
                        type: "GET",
                        global: false,
                        url: b.src,
                        async: false,
                        dataType: "script"
                    }) : k.globalEval((b.text || b.textContent || b.innerHTML || "").replace(Cc, "/*$0*/"));
                    b.parentNode && b.parentNode.removeChild(b)
                })
            }
            return this
        }
    });
    k.buildFragment = function (a, b, c) {
        var d, f, g, l, j = a[0];
        b && b[0] && (l = b[0].ownerDocument || b[0]);
        l.createDocumentFragment || (l = q);
        if (a.length === 1 && typeof j === "string" && j.length < 512 && l === q && j.charAt(0) === "<" && !Bc.test(j) && (k.support.checkClone || !Rb.test(j)) && (k.support.html5Clone || !Qb.test(j))) {
            f =
                true;
            (g = k.fragments[j]) && g !== 1 && (d = g)
        }
        if (!d) {
            d = l.createDocumentFragment();
            k.clean(a, l, d, c)
        }
        f && (k.fragments[j] = g ? d : 1);
        return {fragment: d, cacheable: f}
    };
    k.fragments = {};
    k.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (a, b) {
        k.fn[a] = function (c) {
            var d = [], c = k(c), f = this.length === 1 && this[0].parentNode;
            if (f && f.nodeType === 11 && f.childNodes.length === 1 && c.length === 1) {
                c[b](this[0]);
                return this
            }
            for (var f = 0, g = c.length; f < g; f++) {
                var l = (f > 0 ? this.clone(true) :
                    this).get();
                k(c[f])[b](l);
                d = d.concat(l)
            }
            return this.pushStack(d, a, c.selector)
        }
    });
    k.extend({
        clone: function (a, b, c) {
            var d, f, g;
            if (k.support.html5Clone || k.isXMLDoc(a) || !Qb.test("<" + a.nodeName + ">")) d = a.cloneNode(true); else {
                d = q.createElement("div");
                rb.appendChild(d);
                d.innerHTML = a.outerHTML;
                d = d.firstChild
            }
            var j = d;
            if ((!k.support.noCloneEvent || !k.support.noCloneChecked) && (a.nodeType === 1 || a.nodeType === 11) && !k.isXMLDoc(a)) {
                l(a, j);
                d = p(a);
                f = p(j);
                for (g = 0; d[g]; ++g) f[g] && l(d[g], f[g])
            }
            if (b) {
                n(a, j);
                if (c) {
                    d = p(a);
                    f = p(j);
                    for (g = 0; d[g]; ++g) n(d[g], f[g])
                }
            }
            return j
        }, clean: function (a, b, c, d) {
            var f, g = [], b = b || q;
            typeof b.createElement === "undefined" && (b = b.ownerDocument || b[0] && b[0].ownerDocument || q);
            for (var l = 0, j; (j = a[l]) != null; l++) {
                typeof j === "number" && (j = j + "");
                if (j) {
                    if (typeof j === "string") if (zc.test(j)) {
                        j = j.replace(Ob, "<$1></$2>");
                        f = (Pb.exec(j) || ["", ""])[1].toLowerCase();
                        var p = X[f] || X._default, n = p[0], m = b.createElement("div"), u = rb.childNodes;
                        b === q ? rb.appendChild(m) : o(b).appendChild(m);
                        for (m.innerHTML = p[1] + j + p[2]; n--;) m = m.lastChild;
                        if (!k.support.tbody) {
                            n = yc.test(j);
                            p = f === "table" && !n ? m.firstChild && m.firstChild.childNodes : p[1] === "<table>" && !n ? m.childNodes : [];
                            for (f = p.length - 1; f >= 0; --f) k.nodeName(p[f], "tbody") && !p[f].childNodes.length && p[f].parentNode.removeChild(p[f])
                        }
                        !k.support.leadingWhitespace && qb.test(j) && m.insertBefore(b.createTextNode(qb.exec(j)[0]), m.firstChild);
                        j = m.childNodes;
                        if (m) {
                            m.parentNode.removeChild(m);
                            if (u.length > 0) (m = u[u.length - 1]) && m.parentNode && m.parentNode.removeChild(m)
                        }
                    } else j = b.createTextNode(j);
                    var r;
                    if (!k.support.appendChecked) if (j[0] &&
                        typeof(r = j.length) === "number") for (f = 0; f < r; f++) w(j[f]); else w(j);
                    j.nodeType ? g.push(j) : g = k.merge(g, j)
                }
            }
            if (c) {
                a = function (a) {
                    return !a.type || Sb.test(a.type)
                };
                for (l = 0; g[l]; l++) {
                    b = g[l];
                    if (d && k.nodeName(b, "script") && (!b.type || Sb.test(b.type))) d.push(b.parentNode ? b.parentNode.removeChild(b) : b); else {
                        if (b.nodeType === 1) {
                            j = k.grep(b.getElementsByTagName("script"), a);
                            g.splice.apply(g, [l + 1, 0].concat(j))
                        }
                        c.appendChild(b)
                    }
                }
            }
            return g
        }, cleanData: function (a) {
            for (var b, c, d = k.cache, f = k.event.special, g = k.support.deleteExpando,
                     l = 0, j; (j = a[l]) != null; l++) if (!j.nodeName || !k.noData[j.nodeName.toLowerCase()]) if (c = j[k.expando]) {
                if ((b = d[c]) && b.events) {
                    for (var q in b.events) f[q] ? k.event.remove(j, q) : k.removeEvent(j, q, b.handle);
                    if (b.handle) b.handle.elem = null
                }
                g ? delete j[k.expando] : j.removeAttribute && j.removeAttribute(k.expando);
                delete d[c]
            }
        }
    });
    var sb = /alpha\([^)]*\)/i, Dc = /opacity=([^)]*)/, Ec = /([A-Z]|^ms)/g, Fc = /^[\-+]?(?:\d*\.)?\d+$/i,
        fb = /^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i, Gc = /^([\-+])=([\-+.\de]+)/, Hc = /^margin/, Ic = {
            position: "absolute",
            visibility: "hidden", display: "block"
        }, oa = ["Top", "Right", "Bottom", "Left"], wa, Tb, Ub;
    k.fn.css = function (a, b) {
        return k.access(this, function (a, b, c) {
            return c !== d ? k.style(a, b, c) : k.css(a, b)
        }, a, b, arguments.length > 1)
    };
    k.extend({
        cssHooks: {
            opacity: {
                get: function (a, b) {
                    if (b) {
                        var c = wa(a, "opacity");
                        return c === "" ? "1" : c
                    }
                    return a.style.opacity
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {"float": k.support.cssFloat ? "cssFloat" : "styleFloat"},
        style: function (a,
                         b, c, f) {
            if (a && !(a.nodeType === 3 || a.nodeType === 8 || !a.style)) {
                var g, l = k.camelCase(b), j = a.style, q = k.cssHooks[l], b = k.cssProps[l] || l;
                if (c !== d) {
                    f = typeof c;
                    if (f === "string" && (g = Gc.exec(c))) {
                        c = +(g[1] + 1) * +g[2] + parseFloat(k.css(a, b));
                        f = "number"
                    }
                    if (!(c == null || f === "number" && isNaN(c))) {
                        f === "number" && !k.cssNumber[l] && (c = c + "px");
                        if (!q || !("set" in q) || (c = q.set(a, c)) !== d) try {
                            j[b] = c
                        } catch (p) {
                        }
                    }
                } else return q && "get" in q && (g = q.get(a, false, f)) !== d ? g : j[b]
            }
        },
        css: function (a, b, c) {
            var f, g, b = k.camelCase(b);
            g = k.cssHooks[b];
            b = k.cssProps[b] ||
                b;
            b === "cssFloat" && (b = "float");
            if (g && "get" in g && (f = g.get(a, true, c)) !== d) return f;
            if (wa) return wa(a, b)
        },
        swap: function (a, b, c) {
            var d = {}, f;
            for (f in b) {
                d[f] = a.style[f];
                a.style[f] = b[f]
            }
            c = c.call(a);
            for (f in b) a.style[f] = d[f];
            return c
        }
    });
    k.curCSS = k.css;
    q.defaultView && q.defaultView.getComputedStyle && (Tb = function (a, b) {
        var c, d, f, g = a.style, b = b.replace(Ec, "-$1").toLowerCase();
        if ((d = a.ownerDocument.defaultView) && (f = d.getComputedStyle(a, null))) {
            c = f.getPropertyValue(b);
            c === "" && !k.contains(a.ownerDocument.documentElement,
                a) && (c = k.style(a, b))
        }
        if (!k.support.pixelMargin && f && Hc.test(b) && fb.test(c)) {
            d = g.width;
            g.width = c;
            c = f.width;
            g.width = d
        }
        return c
    });
    q.documentElement.currentStyle && (Ub = function (a, b) {
        var c, d, f = a.currentStyle && a.currentStyle[b], g = a.style;
        if (f == null && g && (c = g[b])) f = c;
        if (fb.test(f)) {
            c = g.left;
            if (d = a.runtimeStyle && a.runtimeStyle.left) a.runtimeStyle.left = a.currentStyle.left;
            g.left = b === "fontSize" ? "1em" : f;
            f = g.pixelLeft + "px";
            g.left = c;
            if (d) a.runtimeStyle.left = d
        }
        return f === "" ? "auto" : f
    });
    wa = Tb || Ub;
    k.each(["height", "width"],
        function (a, b) {
            k.cssHooks[b] = {
                get: function (a, c, d) {
                    if (c) return a.offsetWidth !== 0 ? v(a, b, d) : k.swap(a, Ic, function () {
                        return v(a, b, d)
                    })
                }, set: function (a, b) {
                    return Fc.test(b) ? b + "px" : b
                }
            }
        });
    k.support.opacity || (k.cssHooks.opacity = {
        get: function (a, b) {
            return Dc.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : b ? "1" : ""
        }, set: function (a, b) {
            var c = a.style, d = a.currentStyle, f = k.isNumeric(b) ? "alpha(opacity=" + b * 100 + ")" : "",
                g = d && d.filter || c.filter || "";
            c.zoom = 1;
            if (b >= 1 && k.trim(g.replace(sb,
                    "")) === "") {
                c.removeAttribute("filter");
                if (d && !d.filter) return
            }
            c.filter = sb.test(g) ? g.replace(sb, f) : g + " " + f
        }
    });
    k(function () {
        if (!k.support.reliableMarginRight) k.cssHooks.marginRight = {
            get: function (a, b) {
                return k.swap(a, {display: "inline-block"}, function () {
                    return b ? wa(a, "margin-right") : a.style.marginRight
                })
            }
        }
    });
    k.expr && k.expr.filters && (k.expr.filters.hidden = function (a) {
        var b = a.offsetHeight;
        return a.offsetWidth === 0 && b === 0 || !k.support.reliableHiddenOffsets && (a.style && a.style.display || k.css(a, "display")) ===
            "none"
    }, k.expr.filters.visible = function (a) {
        return !k.expr.filters.hidden(a)
    });
    k.each({margin: "", padding: "", border: "Width"}, function (a, b) {
        k.cssHooks[a + b] = {
            expand: function (c) {
                for (var d = typeof c === "string" ? c.split(" ") : [c], f = {}, c = 0; c < 4; c++) f[a + oa[c] + b] = d[c] || d[c - 2] || d[0];
                return f
            }
        }
    });
    var Jc = /%20/g, fc = /\[\]$/, Vb = /\r?\n/g, Kc = /#.*$/, Lc = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
        Mc = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
        Nc = /^(?:GET|HEAD)$/,
        Oc = /^\/\//, Wb = /\?/, Pc = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        Qc = /^(?:select|textarea)/i, wb = /\s+/, Rc = /([?&])_=[^&]*/,
        Xb = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/, Yb = k.fn.load, gb = {}, Zb = {}, ua, va,
        $b = ["*/"] + ["*"];
    try {
        ua = u.href
    } catch ($c) {
        ua = q.createElement("a"), ua.href = "", ua = ua.href
    }
    va = Xb.exec(ua.toLowerCase()) || [];
    k.fn.extend({
        load: function (a, b, c) {
            if (typeof a !== "string" && Yb) return Yb.apply(this, arguments);
            if (!this.length) return this;
            var f = a.indexOf(" ");
            if (f >= 0) var g = a.slice(f, a.length),
                a = a.slice(0, f);
            f = "GET";
            if (b) if (k.isFunction(b)) {
                c = b;
                b = d
            } else if (typeof b === "object") {
                b = k.param(b, k.ajaxSettings.traditional);
                f = "POST"
            }
            var l = this;
            k.ajax({
                url: a, type: f, dataType: "html", data: b, complete: function (a, b, d) {
                    d = a.responseText;
                    if (a.isResolved()) {
                        a.done(function (a) {
                            d = a
                        });
                        l.html(g ? k("<div>").append(d.replace(Pc, "")).find(g) : d)
                    }
                    c && l.each(c, [d, b, a])
                }
            });
            return this
        }, serialize: function () {
            return k.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                return this.elements ?
                    k.makeArray(this.elements) : this
            }).filter(function () {
                return this.name && !this.disabled && (this.checked || Qc.test(this.nodeName) || Mc.test(this.type))
            }).map(function (a, b) {
                var c = k(this).val();
                return c == null ? null : k.isArray(c) ? k.map(c, function (a) {
                    return {name: b.name, value: a.replace(Vb, "\r\n")}
                }) : {name: b.name, value: c.replace(Vb, "\r\n")}
            }).get()
        }
    });
    k.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (a, b) {
        k.fn[b] = function (a) {
            return this.on(b, a)
        }
    });
    k.each(["get", "post"],
        function (a, b) {
            k[b] = function (a, c, f, g) {
                if (k.isFunction(c)) {
                    g = g || f;
                    f = c;
                    c = d
                }
                return k.ajax({type: b, url: a, data: c, success: f, dataType: g})
            }
        });
    k.extend({
        getScript: function (a, b) {
            return k.get(a, d, b, "script")
        }, getJSON: function (a, b, c) {
            return k.get(a, b, c, "json")
        }, ajaxSetup: function (a, b) {
            if (b) B(a, k.ajaxSettings); else {
                b = a;
                a = k.ajaxSettings
            }
            B(a, b);
            return a
        }, ajaxSettings: {
            url: ua,
            isLocal: /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/.test(va[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": $b
            },
            contents: {xml: /xml/, html: /html/, json: /json/},
            responseFields: {xml: "responseXML", text: "responseText"},
            converters: {"* text": a.String, "text html": !0, "text json": k.parseJSON, "text xml": k.parseXML},
            flatOptions: {context: !0, url: !0}
        }, ajaxPrefilter: s(gb), ajaxTransport: s(Zb), ajax: function (a, b) {
            function c(a, b, m, u) {
                if (A !== 2) {
                    A = 2;
                    s && clearTimeout(s);
                    H = d;
                    o = u || "";
                    C.readyState =
                        a > 0 ? 4 : 0;
                    var r, B, x, u = b;
                    if (m) {
                        var y = f, ja = C, w = y.contents, K = y.dataTypes, E = y.responseFields, M, N, v, z;
                        for (N in E) N in m && (ja[E[N]] = m[N]);
                        for (; K[0] === "*";) {
                            K.shift();
                            M === d && (M = y.mimeType || ja.getResponseHeader("content-type"))
                        }
                        if (M) for (N in w) if (w[N] && w[N].test(M)) {
                            K.unshift(N);
                            break
                        }
                        if (K[0] in m) v = K[0]; else {
                            for (N in m) {
                                if (!K[0] || y.converters[N + " " + K[0]]) {
                                    v = N;
                                    break
                                }
                                z || (z = N)
                            }
                            v = v || z
                        }
                        if (v) {
                            v !== K[0] && K.unshift(v);
                            m = m[v]
                        } else m = void 0
                    } else m = d;
                    if (a >= 200 && a < 300 || a === 304) {
                        if (f.ifModified) {
                            if (M = C.getResponseHeader("Last-Modified")) k.lastModified[n] =
                                M;
                            if (M = C.getResponseHeader("Etag")) k.etag[n] = M
                        }
                        if (a === 304) {
                            u = "notmodified";
                            r = true
                        } else try {
                            M = f;
                            M.dataFilter && (m = M.dataFilter(m, M.dataType));
                            var Ja = M.dataTypes;
                            N = {};
                            var D, J, aa = Ja.length, ma, P = Ja[0], Q, da, O, na, L;
                            for (D = 1; D < aa; D++) {
                                if (D === 1) for (J in M.converters) typeof J === "string" && (N[J.toLowerCase()] = M.converters[J]);
                                Q = P;
                                P = Ja[D];
                                if (P === "*") P = Q; else if (Q !== "*" && Q !== P) {
                                    da = Q + " " + P;
                                    O = N[da] || N["* " + P];
                                    if (!O) {
                                        L = d;
                                        for (na in N) {
                                            ma = na.split(" ");
                                            if (ma[0] === Q || ma[0] === "*") if (L = N[ma[1] + " " + P]) {
                                                na = N[na];
                                                na === true ?
                                                    O = L : L === true && (O = na);
                                                break
                                            }
                                        }
                                    }
                                    !O && !L && k.error("No conversion from " + da.replace(" ", " to "));
                                    O !== true && (m = O ? O(m) : L(na(m)))
                                }
                            }
                            B = m;
                            u = "success";
                            r = true
                        } catch (W) {
                            u = "parsererror";
                            x = W
                        }
                    } else {
                        x = u;
                        if (!u || a) {
                            u = "error";
                            a < 0 && (a = 0)
                        }
                    }
                    C.status = a;
                    C.statusText = "" + (b || u);
                    r ? j.resolveWith(g, [B, u, C]) : j.rejectWith(g, [C, u, x]);
                    C.statusCode(p);
                    p = d;
                    t && l.trigger("ajax" + (r ? "Success" : "Error"), [C, f, r ? B : x]);
                    q.fireWith(g, [C, u]);
                    if (t) {
                        l.trigger("ajaxComplete", [C, f]);
                        --k.active || k.event.trigger("ajaxStop")
                    }
                }
            }

            if (typeof a === "object") {
                b =
                    a;
                a = d
            }
            var b = b || {}, f = k.ajaxSetup({}, b), g = f.context || f,
                l = g !== f && (g.nodeType || g instanceof k) ? k(g) : k.event, j = k.Deferred(),
                q = k.Callbacks("once memory"), p = f.statusCode || {}, n, m = {}, u = {}, o, r, H, s, B, A = 0, t, y,
                C = {
                    readyState: 0, setRequestHeader: function (a, b) {
                        if (!A) {
                            var c = a.toLowerCase(), a = u[c] = u[c] || a;
                            m[a] = b
                        }
                        return this
                    }, getAllResponseHeaders: function () {
                        return A === 2 ? o : null
                    }, getResponseHeader: function (a) {
                        var b;
                        if (A === 2) {
                            if (!r) for (r = {}; b = Lc.exec(o);) r[b[1].toLowerCase()] = b[2];
                            b = r[a.toLowerCase()]
                        }
                        return b === d ? null :
                            b
                    }, overrideMimeType: function (a) {
                        if (!A) f.mimeType = a;
                        return this
                    }, abort: function (a) {
                        a = a || "abort";
                        H && H.abort(a);
                        c(0, a);
                        return this
                    }
                };
            j.promise(C);
            C.success = C.done;
            C.error = C.fail;
            C.complete = q.add;
            C.statusCode = function (a) {
                if (a) {
                    var b;
                    if (A < 2) for (b in a) p[b] = [p[b], a[b]]; else {
                        b = a[C.status];
                        C.then(b, b)
                    }
                }
                return this
            };
            f.url = ((a || f.url) + "").replace(Kc, "").replace(Oc, va[1] + "//");
            f.dataTypes = k.trim(f.dataType || "*").toLowerCase().split(wb);
            if (f.crossDomain == null) {
                B = Xb.exec(f.url.toLowerCase());
                f.crossDomain = !(!B ||
                    !(B[1] != va[1] || B[2] != va[2] || (B[3] || (B[1] === "http:" ? 80 : 443)) != (va[3] || (va[1] === "http:" ? 80 : 443))))
            }
            if (f.data && f.processData && typeof f.data !== "string") f.data = k.param(f.data, f.traditional);
            x(gb, f, b, C);
            if (A === 2) return false;
            t = f.global;
            f.type = f.type.toUpperCase();
            f.hasContent = !Nc.test(f.type);
            t && k.active++ === 0 && k.event.trigger("ajaxStart");
            if (!f.hasContent) {
                if (f.data) {
                    f.url = f.url + ((Wb.test(f.url) ? "&" : "?") + f.data);
                    delete f.data
                }
                n = f.url;
                if (f.cache === false) {
                    B = k.now();
                    var ja = f.url.replace(Rc, "$1_=" + B);
                    f.url =
                        ja + (ja === f.url ? (Wb.test(f.url) ? "&" : "?") + "_=" + B : "")
                }
            }
            (f.data && f.hasContent && f.contentType !== false || b.contentType) && C.setRequestHeader("Content-Type", f.contentType);
            if (f.ifModified) {
                n = n || f.url;
                k.lastModified[n] && C.setRequestHeader("If-Modified-Since", k.lastModified[n]);
                k.etag[n] && C.setRequestHeader("If-None-Match", k.etag[n])
            }
            C.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + (f.dataTypes[0] !== "*" ? ", " + $b + "; q=0.01" : "") : f.accepts["*"]);
            for (y in f.headers) C.setRequestHeader(y,
                f.headers[y]);
            if (f.beforeSend && (f.beforeSend.call(g, C, f) === false || A === 2)) {
                C.abort();
                return false
            }
            for (y in{success: 1, error: 1, complete: 1}) C[y](f[y]);
            if (H = x(Zb, f, b, C)) {
                C.readyState = 1;
                t && l.trigger("ajaxSend", [C, f]);
                f.async && f.timeout > 0 && (s = setTimeout(function () {
                    C.abort("timeout")
                }, f.timeout));
                try {
                    A = 1;
                    H.send(m, c)
                } catch (w) {
                    if (A < 2) c(-1, w); else throw w;
                }
            } else c(-1, "No Transport");
            return C
        }, param: function (a, b) {
            var c = [], f = function (a, b) {
                b = k.isFunction(b) ? b() : b;
                c[c.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
            if (b === d) b = k.ajaxSettings.traditional;
            if (k.isArray(a) || a.jquery && !k.isPlainObject(a)) k.each(a, function () {
                f(this.name, this.value)
            }); else for (var g in a) E(g, a[g], b, f);
            return c.join("&").replace(Jc, "+")
        }
    });
    k.extend({active: 0, lastModified: {}, etag: {}});
    var Sc = k.now(), db = /(\=)\?(&|$)|\?\?/i;
    k.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            return k.expando + "_" + Sc++
        }
    });
    k.ajaxPrefilter("json jsonp", function (b, c, f) {
        c = typeof b.data === "string" && /^application\/x\-www\-form\-urlencoded/.test(b.contentType);
        if (b.dataTypes[0] === "jsonp" || b.jsonp !== false && (db.test(b.url) || c && db.test(b.data))) {
            var d, g = b.jsonpCallback = k.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, l = a[g],
                j = b.url, q = b.data, p = "$1" + g + "$2";
            if (b.jsonp !== false) {
                j = j.replace(db, p);
                if (b.url === j) {
                    c && (q = q.replace(db, p));
                    b.data === q && (j = j + ((/\?/.test(j) ? "&" : "?") + b.jsonp + "=" + g))
                }
            }
            b.url = j;
            b.data = q;
            a[g] = function (a) {
                d = [a]
            };
            f.always(function () {
                a[g] = l;
                if (d && k.isFunction(l)) a[g](d[0])
            });
            b.converters["script json"] = function () {
                d || k.error(g + " was not called");
                return d[0]
            };
            b.dataTypes[0] = "json";
            return "script"
        }
    });
    k.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /javascript|ecmascript/},
        converters: {
            "text script": function (a) {
                k.globalEval(a);
                return a
            }
        }
    });
    k.ajaxPrefilter("script", function (a) {
        if (a.cache === d) a.cache = false;
        if (a.crossDomain) {
            a.type = "GET";
            a.global = false
        }
    });
    k.ajaxTransport("script", function (a) {
        if (a.crossDomain) {
            var b, c = q.head || q.getElementsByTagName("head")[0] ||
                q.documentElement;
            return {
                send: function (f, g) {
                    b = q.createElement("script");
                    b.async = "async";
                    if (a.scriptCharset) b.charset = a.scriptCharset;
                    b.src = a.url;
                    b.onload = b.onreadystatechange = function (a, f) {
                        if (f || !b.readyState || /loaded|complete/.test(b.readyState)) {
                            b.onload = b.onreadystatechange = null;
                            c && b.parentNode && c.removeChild(b);
                            b = d;
                            f || g(200, "success")
                        }
                    };
                    c.insertBefore(b, c.firstChild)
                }, abort: function () {
                    if (b) b.onload(0, 1)
                }
            }
        }
    });
    var tb = a.ActiveXObject ? function () {
        for (var a in Ga) Ga[a](0, 1)
    } : !1, Tc = 0, Ga;
    k.ajaxSettings.xhr =
        a.ActiveXObject ? function () {
            var b;
            if (!(b = !this.isLocal && y())) a:{
                try {
                    b = new a.ActiveXObject("Microsoft.XMLHTTP");
                    break a
                } catch (c) {
                }
                b = void 0
            }
            return b
        } : y;
    var ub = k.ajaxSettings.xhr();
    k.extend(k.support, {ajax: !!ub, cors: !!ub && "withCredentials" in ub});
    k.support.ajax && k.ajaxTransport(function (b) {
        if (!b.crossDomain || k.support.cors) {
            var c;
            return {
                send: function (f, g) {
                    var l = b.xhr(), j, q;
                    b.username ? l.open(b.type, b.url, b.async, b.username, b.password) : l.open(b.type, b.url, b.async);
                    if (b.xhrFields) for (q in b.xhrFields) l[q] =
                        b.xhrFields[q];
                    b.mimeType && l.overrideMimeType && l.overrideMimeType(b.mimeType);
                    !b.crossDomain && !f["X-Requested-With"] && (f["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (q in f) l.setRequestHeader(q, f[q])
                    } catch (p) {
                    }
                    l.send(b.hasContent && b.data || null);
                    c = function (a, f) {
                        var q, p, n, m, u;
                        try {
                            if (c && (f || l.readyState === 4)) {
                                c = d;
                                if (j) {
                                    l.onreadystatechange = k.noop;
                                    tb && delete Ga[j]
                                }
                                if (f) l.readyState !== 4 && l.abort(); else {
                                    q = l.status;
                                    n = l.getAllResponseHeaders();
                                    m = {};
                                    if ((u = l.responseXML) && u.documentElement) m.xml = u;
                                    try {
                                        m.text =
                                            l.responseText
                                    } catch (o) {
                                    }
                                    try {
                                        p = l.statusText
                                    } catch (r) {
                                        p = ""
                                    }
                                    !q && b.isLocal && !b.crossDomain ? q = m.text ? 200 : 404 : q === 1223 && (q = 204)
                                }
                            }
                        } catch (H) {
                            f || g(-1, H)
                        }
                        m && g(q, p, m, n)
                    };
                    if (!b.async || l.readyState === 4) c(); else {
                        j = ++Tc;
                        if (tb) {
                            if (!Ga) {
                                Ga = {};
                                k(a).unload(tb)
                            }
                            Ga[j] = c
                        }
                        l.onreadystatechange = c
                    }
                }, abort: function () {
                    c && c(0, 1)
                }
            }
        }
    });
    var hb = {}, ca, xa, Uc = /^(?:toggle|show|hide)$/, Vc = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i, eb,
        Oa = [["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"], ["width", "marginLeft", "marginRight", "paddingLeft",
            "paddingRight"], ["opacity"]], Na;
    k.fn.extend({
        show: function (a, b, c) {
            if (a || a === 0) return this.animate(A("show", 3), a, b, c);
            for (var c = 0, f = this.length; c < f; c++) {
                a = this[c];
                if (a.style) {
                    b = a.style.display;
                    if (!k._data(a, "olddisplay") && b === "none") b = a.style.display = "";
                    (b === "" && k.css(a, "display") === "none" || !k.contains(a.ownerDocument.documentElement, a)) && k._data(a, "olddisplay", J(a.nodeName))
                }
            }
            for (c = 0; c < f; c++) {
                a = this[c];
                if (a.style) {
                    b = a.style.display;
                    if (b === "" || b === "none") a.style.display = k._data(a, "olddisplay") || ""
                }
            }
            return this
        },
        hide: function (a, b, c) {
            if (a || a === 0) return this.animate(A("hide", 3), a, b, c);
            for (var c = 0, f = this.length; c < f; c++) {
                a = this[c];
                if (a.style) {
                    b = k.css(a, "display");
                    b !== "none" && !k._data(a, "olddisplay") && k._data(a, "olddisplay", b)
                }
            }
            for (c = 0; c < f; c++) if (this[c].style) this[c].style.display = "none";
            return this
        }, _toggle: k.fn.toggle, toggle: function (a, b, c) {
            var f = typeof a === "boolean";
            k.isFunction(a) && k.isFunction(b) ? this._toggle.apply(this, arguments) : a == null || f ? this.each(function () {
                var b = f ? a : k(this).is(":hidden");
                k(this)[b ?
                    "show" : "hide"]()
            }) : this.animate(A("toggle", 3), a, b, c);
            return this
        }, fadeTo: function (a, b, c, f) {
            return this.filter(":hidden").css("opacity", 0).show().end().animate({opacity: b}, a, c, f)
        }, animate: function (a, b, c, f) {
            function d() {
                g.queue === false && k._mark(this);
                var b = k.extend({}, g), c = this.nodeType === 1, f = c && k(this).is(":hidden"), l, j, q, p, n;
                b.animatedProperties = {};
                for (q in a) {
                    l = k.camelCase(q);
                    if (q !== l) {
                        a[l] = a[q];
                        delete a[q]
                    }
                    if ((j = k.cssHooks[l]) && "expand" in j) {
                        p = j.expand(a[l]);
                        delete a[l];
                        for (q in p) q in a || (a[q] =
                            p[q])
                    }
                }
                for (l in a) {
                    j = a[l];
                    if (k.isArray(j)) {
                        b.animatedProperties[l] = j[1];
                        j = a[l] = j[0]
                    } else b.animatedProperties[l] = b.specialEasing && b.specialEasing[l] || b.easing || "swing";
                    if (j === "hide" && f || j === "show" && !f) return b.complete.call(this);
                    if (c && (l === "height" || l === "width")) {
                        b.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY];
                        if (k.css(this, "display") === "inline" && k.css(this, "float") === "none") !k.support.inlineBlockNeedsLayout || J(this.nodeName) === "inline" ? this.style.display = "inline-block" :
                            this.style.zoom = 1
                    }
                }
                if (b.overflow != null) this.style.overflow = "hidden";
                for (q in a) {
                    c = new k.fx(this, b, q);
                    j = a[q];
                    if (Uc.test(j)) if (l = k._data(this, "toggle" + q) || (j === "toggle" ? f ? "show" : "hide" : 0)) {
                        k._data(this, "toggle" + q, l === "show" ? "hide" : "show");
                        c[l]()
                    } else c[j](); else {
                        l = Vc.exec(j);
                        p = c.cur();
                        if (l) {
                            j = parseFloat(l[2]);
                            n = l[3] || (k.cssNumber[q] ? "" : "px");
                            if (n !== "px") {
                                k.style(this, q, (j || 1) + n);
                                p = (j || 1) / c.cur() * p;
                                k.style(this, q, p + n)
                            }
                            l[1] && (j = (l[1] === "-=" ? -1 : 1) * j + p);
                            c.custom(p, j, n)
                        } else c.custom(p, j, "")
                    }
                }
                return true
            }

            var g = k.speed(b, c, f);
            if (k.isEmptyObject(a)) return this.each(g.complete, [false]);
            a = k.extend({}, a);
            return g.queue === false ? this.each(d) : this.queue(g.queue, d)
        }, stop: function (a, b, c) {
            if (typeof a !== "string") {
                c = b;
                b = a;
                a = d
            }
            b && a !== false && this.queue(a || "fx", []);
            return this.each(function () {
                var b, f = false, d = k.timers, g = k._data(this);
                c || k._unmark(true, this);
                if (a == null) for (b in g) {
                    if (g[b] && g[b].stop && b.indexOf(".run") === b.length - 4) {
                        var l = g[b];
                        k.removeData(this, b, true);
                        l.stop(c)
                    }
                } else if (g[b = a + ".run"] && g[b].stop) {
                    g =
                        g[b];
                    k.removeData(this, b, true);
                    g.stop(c)
                }
                for (b = d.length; b--;) if (d[b].elem === this && (a == null || d[b].queue === a)) {
                    if (c) d[b](true); else d[b].saveState();
                    f = true;
                    d.splice(b, 1)
                }
                (!c || !f) && k.dequeue(this, a)
            })
        }
    });
    k.each({
        slideDown: A("show", 1),
        slideUp: A("hide", 1),
        slideToggle: A("toggle", 1),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (a, b) {
        k.fn[a] = function (a, c, f) {
            return this.animate(b, a, c, f)
        }
    });
    k.extend({
        speed: function (a, b, c) {
            var f = a && typeof a === "object" ? k.extend({}, a) :
                {
                    complete: c || !c && b || k.isFunction(a) && a,
                    duration: a,
                    easing: c && b || b && !k.isFunction(b) && b
                };
            f.duration = k.fx.off ? 0 : typeof f.duration === "number" ? f.duration : f.duration in k.fx.speeds ? k.fx.speeds[f.duration] : k.fx.speeds._default;
            if (f.queue == null || f.queue === true) f.queue = "fx";
            f.old = f.complete;
            f.complete = function (a) {
                k.isFunction(f.old) && f.old.call(this);
                f.queue ? k.dequeue(this, f.queue) : a !== false && k._unmark(this)
            };
            return f
        }, easing: {
            linear: function (a) {
                return a
            }, swing: function (a) {
                return -Math.cos(a * Math.PI) / 2 + 0.5
            }
        },
        timers: [], fx: function (a, b, c) {
            this.options = b;
            this.elem = a;
            this.prop = c;
            b.orig = b.orig || {}
        }
    });
    k.fx.prototype = {
        update: function () {
            this.options.step && this.options.step.call(this.elem, this.now, this);
            (k.fx.step[this.prop] || k.fx.step._default)(this)
        }, cur: function () {
            if (this.elem[this.prop] != null && (!this.elem.style || this.elem.style[this.prop] == null)) return this.elem[this.prop];
            var a, b = k.css(this.elem, this.prop);
            return isNaN(a = parseFloat(b)) ? !b || b === "auto" ? 0 : b : a
        }, custom: function (a, b, c) {
            function f(a) {
                return g.step(a)
            }

            var g = this, l = k.fx;
            this.startTime = Na || D();
            this.end = b;
            this.now = this.start = a;
            this.pos = this.state = 0;
            this.unit = c || this.unit || (k.cssNumber[this.prop] ? "" : "px");
            f.queue = this.options.queue;
            f.elem = this.elem;
            f.saveState = function () {
                k._data(g.elem, "fxshow" + g.prop) === d && (g.options.hide ? k._data(g.elem, "fxshow" + g.prop, g.start) : g.options.show && k._data(g.elem, "fxshow" + g.prop, g.end))
            };
            f() && (k.timers.push(f) && !eb) && (eb = setInterval(l.tick, l.interval))
        }, show: function () {
            var a = k._data(this.elem, "fxshow" + this.prop);
            this.options.orig[this.prop] =
                a || k.style(this.elem, this.prop);
            this.options.show = true;
            a !== d ? this.custom(this.cur(), a) : this.custom(this.prop === "width" || this.prop === "height" ? 1 : 0, this.cur());
            k(this.elem).show()
        }, hide: function () {
            this.options.orig[this.prop] = k._data(this.elem, "fxshow" + this.prop) || k.style(this.elem, this.prop);
            this.options.hide = true;
            this.custom(this.cur(), 0)
        }, step: function (a) {
            var b, c = Na || D(), f = true, d = this.elem, g = this.options;
            if (a || c >= g.duration + this.startTime) {
                this.now = this.end;
                this.pos = this.state = 1;
                this.update();
                g.animatedProperties[this.prop] =
                    true;
                for (b in g.animatedProperties) g.animatedProperties[b] !== true && (f = false);
                if (f) {
                    g.overflow != null && !k.support.shrinkWrapBlocks && k.each(["", "X", "Y"], function (a, b) {
                        d.style["overflow" + b] = g.overflow[a]
                    });
                    g.hide && k(d).hide();
                    if (g.hide || g.show) for (b in g.animatedProperties) {
                        k.style(d, b, g.orig[b]);
                        k.removeData(d, "fxshow" + b, true);
                        k.removeData(d, "toggle" + b, true)
                    }
                    if (a = g.complete) {
                        g.complete = false;
                        a.call(d)
                    }
                }
                return false
            }
            if (g.duration == Infinity) this.now = c; else {
                a = c - this.startTime;
                this.state = a / g.duration;
                this.pos =
                    k.easing[g.animatedProperties[this.prop]](this.state, a, 0, 1, g.duration);
                this.now = this.start + (this.end - this.start) * this.pos
            }
            this.update();
            return true
        }
    };
    k.extend(k.fx, {
        tick: function () {
            for (var a, b = k.timers, c = 0; c < b.length; c++) {
                a = b[c];
                !a() && b[c] === a && b.splice(c--, 1)
            }
            b.length || k.fx.stop()
        }, interval: 13, stop: function () {
            clearInterval(eb);
            eb = null
        }, speeds: {slow: 600, fast: 200, _default: 400}, step: {
            opacity: function (a) {
                k.style(a.elem, "opacity", a.now)
            }, _default: function (a) {
                a.elem.style && a.elem.style[a.prop] != null ? a.elem.style[a.prop] =
                    a.now + a.unit : a.elem[a.prop] = a.now
            }
        }
    });
    k.each(Oa.concat.apply([], Oa), function (a, b) {
        b.indexOf("margin") && (k.fx.step[b] = function (a) {
            k.style(a.elem, b, Math.max(0, a.now) + a.unit)
        })
    });
    k.expr && k.expr.filters && (k.expr.filters.animated = function (a) {
        return k.grep(k.timers, function (b) {
            return a === b.elem
        }).length
    });
    var ac, Wc = /^t(?:able|d|h)$/i, bc = /^(?:body|html)$/i;
    ac = "getBoundingClientRect" in q.documentElement ? function (a, b, c, f) {
        try {
            f = a.getBoundingClientRect()
        } catch (d) {
        }
        if (!f || !k.contains(c, a)) return f ? {
            top: f.top,
            left: f.left
        } : {top: 0, left: 0};
        a = b.body;
        b = C(b);
        return {
            top: f.top + (b.pageYOffset || k.support.boxModel && c.scrollTop || a.scrollTop) - (c.clientTop || a.clientTop || 0),
            left: f.left + (b.pageXOffset || k.support.boxModel && c.scrollLeft || a.scrollLeft) - (c.clientLeft || a.clientLeft || 0)
        }
    } : function (a, b, c) {
        var f, d = a.offsetParent, g = b.body;
        f = (b = b.defaultView) ? b.getComputedStyle(a, null) : a.currentStyle;
        for (var l = a.offsetTop, j = a.offsetLeft; (a = a.parentNode) && a !== g && a !== c;) {
            if (k.support.fixedPosition && f.position === "fixed") break;
            f = b ?
                b.getComputedStyle(a, null) : a.currentStyle;
            l = l - a.scrollTop;
            j = j - a.scrollLeft;
            if (a === d) {
                l = l + a.offsetTop;
                j = j + a.offsetLeft;
                if (k.support.doesNotAddBorder && (!k.support.doesAddBorderForTableAndCells || !Wc.test(a.nodeName))) {
                    l = l + (parseFloat(f.borderTopWidth) || 0);
                    j = j + (parseFloat(f.borderLeftWidth) || 0)
                }
                d = a.offsetParent
            }
            if (k.support.subtractsBorderForOverflowNotVisible && f.overflow !== "visible") {
                l = l + (parseFloat(f.borderTopWidth) || 0);
                j = j + (parseFloat(f.borderLeftWidth) || 0)
            }
        }
        if (f.position === "relative" || f.position ===
            "static") {
            l = l + g.offsetTop;
            j = j + g.offsetLeft
        }
        if (k.support.fixedPosition && f.position === "fixed") {
            l = l + Math.max(c.scrollTop, g.scrollTop);
            j = j + Math.max(c.scrollLeft, g.scrollLeft)
        }
        return {top: l, left: j}
    };
    k.fn.offset = function (a) {
        if (arguments.length) return a === d ? this : this.each(function (b) {
            k.offset.setOffset(this, a, b)
        });
        var b = this[0], c = b && b.ownerDocument;
        return !c ? null : b === c.body ? k.offset.bodyOffset(b) : ac(b, c, c.documentElement)
    };
    k.offset = {
        bodyOffset: function (a) {
            var b = a.offsetTop, c = a.offsetLeft;
            if (k.support.doesNotIncludeMarginInBodyOffset) {
                b =
                    b + (parseFloat(k.css(a, "marginTop")) || 0);
                c = c + (parseFloat(k.css(a, "marginLeft")) || 0)
            }
            return {top: b, left: c}
        }, setOffset: function (a, b, c) {
            var f = k.css(a, "position");
            if (f === "static") a.style.position = "relative";
            var d = k(a), g = d.offset(), l = k.css(a, "top"), j = k.css(a, "left"), q = {}, p = {};
            if ((f === "absolute" || f === "fixed") && k.inArray("auto", [l, j]) > -1) {
                p = d.position();
                f = p.top;
                j = p.left
            } else {
                f = parseFloat(l) || 0;
                j = parseFloat(j) || 0
            }
            k.isFunction(b) && (b = b.call(a, c, g));
            if (b.top != null) q.top = b.top - g.top + f;
            if (b.left != null) q.left = b.left -
                g.left + j;
            "using" in b ? b.using.call(a, q) : d.css(q)
        }
    };
    k.fn.extend({
        position: function () {
            if (!this[0]) return null;
            var a = this[0], b = this.offsetParent(), c = this.offset(),
                f = bc.test(b[0].nodeName) ? {top: 0, left: 0} : b.offset();
            c.top = c.top - (parseFloat(k.css(a, "marginTop")) || 0);
            c.left = c.left - (parseFloat(k.css(a, "marginLeft")) || 0);
            f.top = f.top + (parseFloat(k.css(b[0], "borderTopWidth")) || 0);
            f.left = f.left + (parseFloat(k.css(b[0], "borderLeftWidth")) || 0);
            return {top: c.top - f.top, left: c.left - f.left}
        }, offsetParent: function () {
            return this.map(function () {
                for (var a =
                    this.offsetParent || q.body; a && !bc.test(a.nodeName) && k.css(a, "position") === "static";) a = a.offsetParent;
                return a
            })
        }
    });
    k.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (a, b) {
        var c = /Y/.test(b);
        k.fn[a] = function (f) {
            return k.access(this, function (a, f, g) {
                var l = C(a);
                if (g === d) return l ? b in l ? l[b] : k.support.boxModel && l.document.documentElement[f] || l.document.body[f] : a[f];
                l ? l.scrollTo(!c ? g : k(l).scrollLeft(), c ? g : k(l).scrollTop()) : a[f] = g
            }, a, f, arguments.length, null)
        }
    });
    k.each({Height: "height", Width: "width"},
        function (a, b) {
            var c = "client" + a, f = "scroll" + a, g = "offset" + a;
            k.fn["inner" + a] = function () {
                var a = this[0];
                return a ? a.style ? parseFloat(k.css(a, b, "padding")) : this[b]() : null
            };
            k.fn["outer" + a] = function (a) {
                var c = this[0];
                return c ? c.style ? parseFloat(k.css(c, b, a ? "margin" : "border")) : this[b]() : null
            };
            k.fn[b] = function (a) {
                return k.access(this, function (a, b, l) {
                    if (k.isWindow(a)) {
                        b = a.document;
                        a = b.documentElement[c];
                        return k.support.boxModel && a || b.body && b.body[c] || a
                    }
                    if (a.nodeType === 9) {
                        b = a.documentElement;
                        return b[c] >= b[f] ?
                            b[c] : Math.max(a.body[f], b[f], a.body[g], b[g])
                    }
                    if (l === d) {
                        a = k.css(a, b);
                        b = parseFloat(a);
                        return k.isNumeric(b) ? b : a
                    }
                    k(a).css(b, l)
                }, b, a, arguments.length, null)
            }
        });
    a.jQuery = a.$ = k;
    "function" === typeof define && (define.amd && define.amd.jQuery) && define("jquery", [], function () {
        return k
    })
})(window);
(function (a) {
    function d(b) {
        var c = b || window.event, d = [].slice.call(arguments, 1), m = 0, o = 0, n = 0, b = a.event.fix(c);
        b.type = "mousewheel";
        c.wheelDelta && (m = c.wheelDelta / 120);
        c.detail && (m = -c.detail / 3);
        n = m;
        void 0 !== c.axis && c.axis === c.HORIZONTAL_AXIS && (n = 0, o = -1 * m);
        void 0 !== c.wheelDeltaY && (n = c.wheelDeltaY / 120);
        void 0 !== c.wheelDeltaX && (o = -1 * c.wheelDeltaX / 120);
        d.unshift(b, m, o, n);
        return (a.event.dispatch || a.event.handle).apply(this, d)
    }

    var b = ["DOMMouseScroll", "mousewheel"];
    if (a.event.fixHooks) for (var c = b.length; c;) a.event.fixHooks[b[--c]] =
        a.event.mouseHooks;
    a.event.special.mousewheel = {
        setup: function () {
            if (this.addEventListener) for (var a = b.length; a;) this.addEventListener(b[--a], d, !1); else this.onmousewheel = d
        }, teardown: function () {
            if (this.removeEventListener) for (var a = b.length; a;) this.removeEventListener(b[--a], d, !1); else this.onmousewheel = null
        }
    };
    a.fn.extend({
        mousewheel: function (a) {
            return a ? this.bind("mousewheel", a) : this.trigger("mousewheel")
        }, unmousewheel: function (a) {
            return this.unbind("mousewheel", a)
        }
    })
})(jQuery);
(function () {
    function a(b, c, f) {
        if (b === c) return 0 !== b || 1 / b == 1 / c;
        if (null == b || null == c) return b === c;
        b._chain && (b = b._wrapped);
        c._chain && (c = c._wrapped);
        if (b.isEqual && t.isFunction(b.isEqual)) return b.isEqual(c);
        if (c.isEqual && t.isFunction(c.isEqual)) return c.isEqual(b);
        var d = o.call(b);
        if (d != o.call(c)) return !1;
        switch (d) {
            case "[object String]":
                return b == "" + c;
            case "[object Number]":
                return b != +b ? c != +c : 0 == b ? 1 / b == 1 / c : b == +c;
            case "[object Date]":
            case "[object Boolean]":
                return +b == +c;
            case "[object RegExp]":
                return b.source ==
                    c.source && b.global == c.global && b.multiline == c.multiline && b.ignoreCase == c.ignoreCase
        }
        if ("object" != typeof b || "object" != typeof c) return !1;
        for (var g = f.length; g--;) if (f[g] == b) return !0;
        f.push(b);
        var g = 0, l = !0;
        if ("[object Array]" == d) {
            if (g = b.length, l = g == c.length) for (; g-- && (l = g in b == g in c && a(b[g], c[g], f));) ;
        } else {
            if ("constructor" in b != "constructor" in c || b.constructor != c.constructor) return !1;
            for (var k in b) if (t.has(b, k) && (g++, !(l = t.has(c, k) && a(b[k], c[k], f)))) break;
            if (l) {
                for (k in c) if (t.has(c, k) && !g--) break;
                l = !g
            }
        }
        f.pop();
        return l
    }

    var d = this, b = d._, c = {}, f = Array.prototype, g = Object.prototype, j = f.slice, m = f.unshift,
        o = g.toString, n = g.hasOwnProperty, l = f.forEach, p = f.map, r = f.reduce, w = f.reduceRight, v = f.filter,
        s = f.every, x = f.some, B = f.indexOf, E = f.lastIndexOf, g = Array.isArray, y = Object.keys,
        D = Function.prototype.bind, t = function (a) {
            return new L(a)
        };
    "undefined" !== typeof exports ? ("undefined" !== typeof module && module.exports && (exports = module.exports = t), exports._ = t) : d._ = t;
    t.VERSION = "1.3.3";
    var A = t.each = t.forEach = function (a,
                                           b, f) {
        if (null != a) if (l && a.forEach === l) a.forEach(b, f); else if (a.length === +a.length) for (var d = 0, g = a.length; d < g && !(d in a && b.call(f, a[d], d, a) === c); d++) ; else for (d in a) if (t.has(a, d) && b.call(f, a[d], d, a) === c) break
    };
    t.map = t.collect = function (a, b, c) {
        var f = [];
        if (null == a) return f;
        if (p && a.map === p) return a.map(b, c);
        A(a, function (a, d, g) {
            f[f.length] = b.call(c, a, d, g)
        });
        a.length === +a.length && (f.length = a.length);
        return f
    };
    t.reduce = t.foldl = t.inject = function (a, b, c, f) {
        var d = 2 < arguments.length;
        null == a && (a = []);
        if (r && a.reduce ===
            r) return f && (b = t.bind(b, f)), d ? a.reduce(b, c) : a.reduce(b);
        A(a, function (a, g, l) {
            d ? c = b.call(f, c, a, g, l) : (c = a, d = !0)
        });
        if (!d) throw new TypeError("Reduce of empty array with no initial value");
        return c
    };
    t.reduceRight = t.foldr = function (a, b, c, f) {
        var d = 2 < arguments.length;
        null == a && (a = []);
        if (w && a.reduceRight === w) return f && (b = t.bind(b, f)), d ? a.reduceRight(b, c) : a.reduceRight(b);
        var g = t.toArray(a).reverse();
        f && !d && (b = t.bind(b, f));
        return d ? t.reduce(g, b, c, f) : t.reduce(g, b)
    };
    t.find = t.detect = function (a, b, c) {
        var f;
        J(a, function (a,
                       d, g) {
            if (b.call(c, a, d, g)) return f = a, !0
        });
        return f
    };
    t.filter = t.select = function (a, b, c) {
        var f = [];
        if (null == a) return f;
        if (v && a.filter === v) return a.filter(b, c);
        A(a, function (a, d, g) {
            b.call(c, a, d, g) && (f[f.length] = a)
        });
        return f
    };
    t.reject = function (a, b, c) {
        var f = [];
        if (null == a) return f;
        A(a, function (a, d, g) {
            b.call(c, a, d, g) || (f[f.length] = a)
        });
        return f
    };
    t.every = t.all = function (a, b, f) {
        var d = !0;
        if (null == a) return d;
        if (s && a.every === s) return a.every(b, f);
        A(a, function (a, g, l) {
            if (!(d = d && b.call(f, a, g, l))) return c
        });
        return !!d
    };
    var J = t.some = t.any = function (a, b, f) {
        b || (b = t.identity);
        var d = !1;
        if (null == a) return d;
        if (x && a.some === x) return a.some(b, f);
        A(a, function (a, g, l) {
            if (d || (d = b.call(f, a, g, l))) return c
        });
        return !!d
    };
    t.include = t.contains = function (a, b) {
        return null == a ? !1 : B && a.indexOf === B ? -1 != a.indexOf(b) : J(a, function (a) {
            return a === b
        })
    };
    t.invoke = function (a, b) {
        var c = j.call(arguments, 2);
        return t.map(a, function (a) {
            return (t.isFunction(b) ? b || a : a[b]).apply(a, c)
        })
    };
    t.pluck = function (a, b) {
        return t.map(a, function (a) {
            return a[b]
        })
    };
    t.max = function (a,
                      b, c) {
        if (!b && t.isArray(a) && a[0] === +a[0]) return Math.max.apply(Math, a);
        if (!b && t.isEmpty(a)) return -Infinity;
        var f = {computed: -Infinity};
        A(a, function (a, d, g) {
            d = b ? b.call(c, a, d, g) : a;
            d >= f.computed && (f = {value: a, computed: d})
        });
        return f.value
    };
    t.min = function (a, b, c) {
        if (!b && t.isArray(a) && a[0] === +a[0]) return Math.min.apply(Math, a);
        if (!b && t.isEmpty(a)) return Infinity;
        var f = {computed: Infinity};
        A(a, function (a, d, g) {
            d = b ? b.call(c, a, d, g) : a;
            d < f.computed && (f = {value: a, computed: d})
        });
        return f.value
    };
    t.shuffle = function (a) {
        var b =
            [], c;
        A(a, function (a, f) {
            c = Math.floor(Math.random() * (f + 1));
            b[f] = b[c];
            b[c] = a
        });
        return b
    };
    t.sortBy = function (a, b, c) {
        var f = t.isFunction(b) ? b : function (a) {
            return a[b]
        };
        return t.pluck(t.map(a, function (a, b, d) {
            return {value: a, criteria: f.call(c, a, b, d)}
        }).sort(function (a, b) {
            var c = a.criteria, f = b.criteria;
            return void 0 === c ? 1 : void 0 === f ? -1 : c < f ? -1 : c > f ? 1 : 0
        }), "value")
    };
    t.groupBy = function (a, b) {
        var c = {}, f = t.isFunction(b) ? b : function (a) {
            return a[b]
        };
        A(a, function (a, b) {
            var d = f(a, b);
            (c[d] || (c[d] = [])).push(a)
        });
        return c
    };
    t.sortedIndex =
        function (a, b, c) {
            c || (c = t.identity);
            for (var f = 0, d = a.length; f < d;) {
                var g = f + d >> 1;
                c(a[g]) < c(b) ? f = g + 1 : d = g
            }
            return f
        };
    t.toArray = function (a) {
        return !a ? [] : t.isArray(a) || t.isArguments(a) ? j.call(a) : a.toArray && t.isFunction(a.toArray) ? a.toArray() : t.values(a)
    };
    t.size = function (a) {
        return t.isArray(a) ? a.length : t.keys(a).length
    };
    t.first = t.head = t.take = function (a, b, c) {
        return null != b && !c ? j.call(a, 0, b) : a[0]
    };
    t.initial = function (a, b, c) {
        return j.call(a, 0, a.length - (null == b || c ? 1 : b))
    };
    t.last = function (a, b, c) {
        return null != b && !c ?
            j.call(a, Math.max(a.length - b, 0)) : a[a.length - 1]
    };
    t.rest = t.tail = function (a, b, c) {
        return j.call(a, null == b || c ? 1 : b)
    };
    t.compact = function (a) {
        return t.filter(a, function (a) {
            return !!a
        })
    };
    t.flatten = function (a, b) {
        return t.reduce(a, function (a, c) {
            if (t.isArray(c)) return a.concat(b ? c : t.flatten(c));
            a[a.length] = c;
            return a
        }, [])
    };
    t.without = function (a) {
        return t.difference(a, j.call(arguments, 1))
    };
    t.uniq = t.unique = function (a, b, c) {
        var c = c ? t.map(a, c) : a, f = [];
        3 > a.length && (b = !0);
        t.reduce(c, function (c, d, g) {
            if (b ? t.last(c) !== d ||
                    !c.length : !t.include(c, d)) c.push(d), f.push(a[g]);
            return c
        }, []);
        return f
    };
    t.union = function () {
        return t.uniq(t.flatten(arguments, !0))
    };
    t.intersection = t.intersect = function (a) {
        var b = j.call(arguments, 1);
        return t.filter(t.uniq(a), function (a) {
            return t.every(b, function (b) {
                return 0 <= t.indexOf(b, a)
            })
        })
    };
    t.difference = function (a) {
        var b = t.flatten(j.call(arguments, 1), !0);
        return t.filter(a, function (a) {
            return !t.include(b, a)
        })
    };
    t.zip = function () {
        for (var a = j.call(arguments), b = t.max(t.pluck(a, "length")), c = Array(b), f =
            0; f < b; f++) c[f] = t.pluck(a, "" + f);
        return c
    };
    t.indexOf = function (a, b, c) {
        if (null == a) return -1;
        var f;
        if (c) return c = t.sortedIndex(a, b), a[c] === b ? c : -1;
        if (B && a.indexOf === B) return a.indexOf(b);
        c = 0;
        for (f = a.length; c < f; c++) if (c in a && a[c] === b) return c;
        return -1
    };
    t.lastIndexOf = function (a, b) {
        if (null == a) return -1;
        if (E && a.lastIndexOf === E) return a.lastIndexOf(b);
        for (var c = a.length; c--;) if (c in a && a[c] === b) return c;
        return -1
    };
    t.range = function (a, b, c) {
        1 >= arguments.length && (b = a || 0, a = 0);
        for (var c = arguments[2] || 1, f = Math.max(Math.ceil((b -
            a) / c), 0), d = 0, g = Array(f); d < f;) g[d++] = a, a += c;
        return g
    };
    var C = function () {
    };
    t.bind = function (a, b) {
        var c, f;
        if (a.bind === D && D) return D.apply(a, j.call(arguments, 1));
        if (!t.isFunction(a)) throw new TypeError;
        f = j.call(arguments, 2);
        return c = function () {
            if (!(this instanceof c)) return a.apply(b, f.concat(j.call(arguments)));
            C.prototype = a.prototype;
            var d = new C, g = a.apply(d, f.concat(j.call(arguments)));
            return Object(g) === g ? g : d
        }
    };
    t.bindAll = function (a) {
        var b = j.call(arguments, 1);
        0 == b.length && (b = t.functions(a));
        A(b, function (b) {
            a[b] =
                t.bind(a[b], a)
        });
        return a
    };
    t.memoize = function (a, b) {
        var c = {};
        b || (b = t.identity);
        return function () {
            var f = b.apply(this, arguments);
            return t.has(c, f) ? c[f] : c[f] = a.apply(this, arguments)
        }
    };
    t.delay = function (a, b) {
        var c = j.call(arguments, 2);
        return setTimeout(function () {
            return a.apply(null, c)
        }, b)
    };
    t.defer = function (a) {
        return t.delay.apply(t, [a, 1].concat(j.call(arguments, 1)))
    };
    t.throttle = function (a, b) {
        var c, f, d, g, l, k, j = t.debounce(function () {
            l = g = !1
        }, b);
        return function () {
            c = this;
            f = arguments;
            d || (d = setTimeout(function () {
                d =
                    null;
                l && a.apply(c, f);
                j()
            }, b));
            g ? l = !0 : k = a.apply(c, f);
            j();
            g = !0;
            return k
        }
    };
    t.debounce = function (a, b, c) {
        var f;
        return function () {
            var d = this, g = arguments;
            c && !f && a.apply(d, g);
            clearTimeout(f);
            f = setTimeout(function () {
                f = null;
                c || a.apply(d, g)
            }, b)
        }
    };
    t.once = function (a) {
        var b = !1, c;
        return function () {
            if (b) return c;
            b = !0;
            return c = a.apply(this, arguments)
        }
    };
    t.wrap = function (a, b) {
        return function () {
            var c = [a].concat(j.call(arguments, 0));
            return b.apply(this, c)
        }
    };
    t.compose = function () {
        var a = arguments;
        return function () {
            for (var b =
                arguments, c = a.length - 1; 0 <= c; c--) b = [a[c].apply(this, b)];
            return b[0]
        }
    };
    t.after = function (a, b) {
        return 0 >= a ? b() : function () {
            if (1 > --a) return b.apply(this, arguments)
        }
    };
    t.keys = y || function (a) {
        if (a !== Object(a)) throw new TypeError("Invalid object");
        var b = [], c;
        for (c in a) t.has(a, c) && (b[b.length] = c);
        return b
    };
    t.values = function (a) {
        return t.map(a, t.identity)
    };
    t.functions = t.methods = function (a) {
        var b = [], c;
        for (c in a) t.isFunction(a[c]) && b.push(c);
        return b.sort()
    };
    t.extend = function (a) {
        A(j.call(arguments, 1), function (b) {
            for (var c in b) a[c] =
                b[c]
        });
        return a
    };
    t.pick = function (a) {
        var b = {};
        A(t.flatten(j.call(arguments, 1)), function (c) {
            c in a && (b[c] = a[c])
        });
        return b
    };
    t.defaults = function (a) {
        A(j.call(arguments, 1), function (b) {
            for (var c in b) null == a[c] && (a[c] = b[c])
        });
        return a
    };
    t.clone = function (a) {
        return !t.isObject(a) ? a : t.isArray(a) ? a.slice() : t.extend({}, a)
    };
    t.tap = function (a, b) {
        b(a);
        return a
    };
    t.isEqual = function (b, c) {
        return a(b, c, [])
    };
    t.isEmpty = function (a) {
        if (null == a) return !0;
        if (t.isArray(a) || t.isString(a)) return 0 === a.length;
        for (var b in a) if (t.has(a,
                b)) return !1;
        return !0
    };
    t.isElement = function (a) {
        return !!(a && 1 == a.nodeType)
    };
    t.isArray = g || function (a) {
        return "[object Array]" == o.call(a)
    };
    t.isObject = function (a) {
        return a === Object(a)
    };
    t.isArguments = function (a) {
        return "[object Arguments]" == o.call(a)
    };
    t.isArguments(arguments) || (t.isArguments = function (a) {
        return !(!a || !t.has(a, "callee"))
    });
    t.isFunction = function (a) {
        return "[object Function]" == o.call(a)
    };
    t.isString = function (a) {
        return "[object String]" == o.call(a)
    };
    t.isNumber = function (a) {
        return "[object Number]" ==
            o.call(a)
    };
    t.isFinite = function (a) {
        return t.isNumber(a) && isFinite(a)
    };
    t.isNaN = function (a) {
        return a !== a
    };
    t.isBoolean = function (a) {
        return !0 === a || !1 === a || "[object Boolean]" == o.call(a)
    };
    t.isDate = function (a) {
        return "[object Date]" == o.call(a)
    };
    t.isRegExp = function (a) {
        return "[object RegExp]" == o.call(a)
    };
    t.isNull = function (a) {
        return null === a
    };
    t.isUndefined = function (a) {
        return void 0 === a
    };
    t.has = function (a, b) {
        return n.call(a, b)
    };
    t.noConflict = function () {
        d._ = b;
        return this
    };
    t.identity = function (a) {
        return a
    };
    t.times =
        function (a, b, c) {
            for (var f = 0; f < a; f++) b.call(c, f)
        };
    t.escape = function (a) {
        return ("" + a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;")
    };
    t.result = function (a, b) {
        if (null == a) return null;
        var c = a[b];
        return t.isFunction(c) ? c.call(a) : c
    };
    t.mixin = function (a) {
        A(t.functions(a), function (b) {
            var c = t[b] = a[b];
            L.prototype[b] = function () {
                var a = j.call(arguments);
                m.call(a, this._wrapped);
                return T(c.apply(t, a), this._chain)
            }
        })
    };
    var q = 0;
    t.uniqueId =
        function (a) {
            var b = q++;
            return a ? a + b : b
        };
    t.templateSettings = {evaluate: /<%([\s\S]+?)%>/g, interpolate: /<%=([\s\S]+?)%>/g, escape: /<%-([\s\S]+?)%>/g};
    var u = /.^/, k = {"\\": "\\", "'": "'", r: "\r", n: "\n", t: "\t", u2028: "\u2028", u2029: "\u2029"}, K;
    for (K in k) k[k[K]] = K;
    var z = /\\|'|\r|\n|\t|\u2028|\u2029/g, O = /\\(\\|'|r|n|t|u2028|u2029)/g, S = function (a) {
        return a.replace(O, function (a, b) {
            return k[b]
        })
    };
    t.template = function (a, b, c) {
        c = t.defaults(c || {}, t.templateSettings);
        a = "__p+='" + a.replace(z, function (a) {
            return "\\" + k[a]
        }).replace(c.escape ||
            u, function (a, b) {
            return "'+\n_.escape(" + S(b) + ")+\n'"
        }).replace(c.interpolate || u, function (a, b) {
            return "'+\n(" + S(b) + ")+\n'"
        }).replace(c.evaluate || u, function (a, b) {
            return "';\n" + S(b) + "\n;__p+='"
        }) + "';\n";
        c.variable || (a = "with(obj||{}){\n" + a + "}\n");
        var a = "var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};\n" + a + "return __p;\n",
            f = new Function(c.variable || "obj", "_", a);
        if (b) return f(b, t);
        b = function (a) {
            return f.call(this, a, t)
        };
        b.source = "function(" + (c.variable || "obj") + "){\n" + a + "}";
        return b
    };
    t.chain = function (a) {
        return t(a).chain()
    };
    var L = function (a) {
        this._wrapped = a
    };
    t.prototype = L.prototype;
    var T = function (a, b) {
        return b ? t(a).chain() : a
    };
    t.mixin(t);
    A("pop push reverse shift sort splice unshift".split(" "), function (a) {
        var b = f[a];
        L.prototype[a] = function () {
            var c = this._wrapped;
            b.apply(c, arguments);
            var f = c.length;
            (a == "shift" || a == "splice") && f === 0 && delete c[0];
            return T(c, this._chain)
        }
    });
    A(["concat", "join", "slice"], function (a) {
        var b = f[a];
        L.prototype[a] = function () {
            return T(b.apply(this._wrapped, arguments),
                this._chain)
        }
    });
    L.prototype.chain = function () {
        this._chain = !0;
        return this
    };
    L.prototype.value = function () {
        return this._wrapped
    }
}).call(this);
(function () {
    var a = this, d = a.Backbone, b = Array.prototype.slice, c = Array.prototype.splice, f;
    f = "undefined" !== typeof exports ? exports : a.Backbone = {};
    f.VERSION = "0.9.2";
    var g = a._;
    !g && "undefined" !== typeof require && (g = require("underscore"));
    var j = a.jQuery || a.Zepto || a.ender;
    f.setDomLibrary = function (a) {
        j = a
    };
    f.noConflict = function () {
        a.Backbone = d;
        return this
    };
    f.emulateHTTP = !1;
    f.emulateJSON = !1;
    var m = /\s+/, o = f.Events = {
        on: function (a, b, c) {
            var f, d, g, l, j;
            if (!b) return this;
            a = a.split(m);
            for (f = this._callbacks || (this._callbacks =
                {}); d = a.shift();) g = (j = f[d]) ? j.tail : {}, g.next = l = {}, g.context = c, g.callback = b, f[d] = {
                tail: l,
                next: j ? j.next : g
            };
            return this
        }, off: function (a, b, c) {
            var f, d, l, j, p, n;
            if (d = this._callbacks) {
                if (!a && !b && !c) return delete this._callbacks, this;
                for (a = a ? a.split(m) : g.keys(d); f = a.shift();) if (l = d[f], delete d[f], l && (b || c)) for (j = l.tail; (l = l.next) !== j;) if (p = l.callback, n = l.context, b && p !== b || c && n !== c) this.on(f, p, n);
                return this
            }
        }, trigger: function (a) {
            var c, f, d, g, l, j;
            if (!(d = this._callbacks)) return this;
            l = d.all;
            a = a.split(m);
            for (j =
                     b.call(arguments, 1); c = a.shift();) {
                if (f = d[c]) for (g = f.tail; (f = f.next) !== g;) f.callback.apply(f.context || this, j);
                if (f = l) {
                    g = f.tail;
                    for (c = [c].concat(j); (f = f.next) !== g;) f.callback.apply(f.context || this, c)
                }
            }
            return this
        }
    };
    o.bind = o.on;
    o.unbind = o.off;
    var n = f.Model = function (a, b) {
        var c;
        a || (a = {});
        b && b.parse && (a = this.parse(a));
        if (c = J(this, "defaults")) a = g.extend({}, c, a);
        b && b.collection && (this.collection = b.collection);
        this.attributes = {};
        this._escapedAttributes = {};
        this.cid = g.uniqueId("c");
        this.changed = {};
        this._silent =
            {};
        this._pending = {};
        this.set(a, {silent: !0});
        this.changed = {};
        this._silent = {};
        this._pending = {};
        this._previousAttributes = g.clone(this.attributes);
        this.initialize.apply(this, arguments)
    };
    g.extend(n.prototype, o, {
        changed: null, _silent: null, _pending: null, idAttribute: "id", initialize: function () {
        }, toJSON: function () {
            return g.clone(this.attributes)
        }, get: function (a) {
            return this.attributes[a]
        }, escape: function (a) {
            var b;
            if (b = this._escapedAttributes[a]) return b;
            b = this.get(a);
            return this._escapedAttributes[a] = g.escape(null ==
            b ? "" : "" + b)
        }, has: function (a) {
            return null != this.get(a)
        }, set: function (a, b, c) {
            var f, d;
            g.isObject(a) || null == a ? (f = a, c = b) : (f = {}, f[a] = b);
            c || (c = {});
            if (!f) return this;
            f instanceof n && (f = f.attributes);
            if (c.unset) for (d in f) f[d] = void 0;
            if (!this._validate(f, c)) return !1;
            this.idAttribute in f && (this.id = f[this.idAttribute]);
            var b = c.changes = {}, l = this.attributes, j = this._escapedAttributes,
                p = this._previousAttributes || {};
            for (d in f) {
                a = f[d];
                if (!g.isEqual(l[d], a) || c.unset && g.has(l, d)) delete j[d], (c.silent ? this._silent :
                    b)[d] = !0;
                c.unset ? delete l[d] : l[d] = a;
                !g.isEqual(p[d], a) || g.has(l, d) != g.has(p, d) ? (this.changed[d] = a, c.silent || (this._pending[d] = !0)) : (delete this.changed[d], delete this._pending[d])
            }
            c.silent || this.change(c);
            return this
        }, unset: function (a, b) {
            (b || (b = {})).unset = !0;
            return this.set(a, null, b)
        }, clear: function (a) {
            (a || (a = {})).unset = !0;
            return this.set(g.clone(this.attributes), a)
        }, fetch: function (a) {
            var a = a ? g.clone(a) : {}, b = this, c = a.success;
            a.success = function (f, d, g) {
                if (!b.set(b.parse(f, g), a)) return !1;
                c && c(b, f)
            };
            a.error = f.wrapError(a.error, b, a);
            return (this.sync || f.sync).call(this, "read", this, a)
        }, save: function (a, b, c) {
            var d, l;
            g.isObject(a) || null == a ? (d = a, c = b) : (d = {}, d[a] = b);
            c = c ? g.clone(c) : {};
            if (c.wait) {
                if (!this._validate(d, c)) return !1;
                l = g.clone(this.attributes)
            }
            a = g.extend({}, c, {silent: !0});
            if (d && !this.set(d, c.wait ? a : c)) return !1;
            var j = this, p = c.success;
            c.success = function (a, b, f) {
                b = j.parse(a, f);
                if (c.wait) {
                    delete c.wait;
                    b = g.extend(d || {}, b)
                }
                if (!j.set(b, c)) return false;
                p ? p(j, a) : j.trigger("sync", j, a, c)
            };
            c.error = f.wrapError(c.error,
                j, c);
            b = this.isNew() ? "create" : "update";
            b = (this.sync || f.sync).call(this, b, this, c);
            c.wait && this.set(l, a);
            return b
        }, destroy: function (a) {
            var a = a ? g.clone(a) : {}, b = this, c = a.success, d = function () {
                b.trigger("destroy", b, b.collection, a)
            };
            if (this.isNew()) return d(), !1;
            a.success = function (f) {
                a.wait && d();
                c ? c(b, f) : b.trigger("sync", b, f, a)
            };
            a.error = f.wrapError(a.error, b, a);
            var l = (this.sync || f.sync).call(this, "delete", this, a);
            a.wait || d();
            return l
        }, url: function () {
            var a = J(this, "urlRoot") || J(this.collection, "url") || C();
            return this.isNew() ? a : a + ("/" == a.charAt(a.length - 1) ? "" : "/") + encodeURIComponent(this.id)
        }, parse: function (a) {
            return a
        }, clone: function () {
            return new this.constructor(this.attributes)
        }, isNew: function () {
            return null == this.id
        }, change: function (a) {
            a || (a = {});
            var b = this._changing;
            this._changing = !0;
            for (var c in this._silent) this._pending[c] = !0;
            var f = g.extend({}, a.changes, this._silent);
            this._silent = {};
            for (c in f) this.trigger("change:" + c, this, this.get(c), a);
            if (b) return this;
            for (; !g.isEmpty(this._pending);) {
                this._pending =
                    {};
                this.trigger("change", this, a);
                for (c in this.changed) !this._pending[c] && !this._silent[c] && delete this.changed[c];
                this._previousAttributes = g.clone(this.attributes)
            }
            this._changing = !1;
            return this
        }, hasChanged: function (a) {
            return !arguments.length ? !g.isEmpty(this.changed) : g.has(this.changed, a)
        }, changedAttributes: function (a) {
            if (!a) return this.hasChanged() ? g.clone(this.changed) : !1;
            var b, c = !1, f = this._previousAttributes, d;
            for (d in a) if (!g.isEqual(f[d], b = a[d])) (c || (c = {}))[d] = b;
            return c
        }, previous: function (a) {
            return !arguments.length ||
            !this._previousAttributes ? null : this._previousAttributes[a]
        }, previousAttributes: function () {
            return g.clone(this._previousAttributes)
        }, isValid: function () {
            return !this.validate(this.attributes)
        }, _validate: function (a, b) {
            if (b.silent || !this.validate) return !0;
            var a = g.extend({}, this.attributes, a), c = this.validate(a, b);
            if (!c) return !0;
            b && b.error ? b.error(this, c, b) : this.trigger("error", this, c, b);
            return !1
        }
    });
    var l = f.Collection = function (a, b) {
        b || (b = {});
        b.model && (this.model = b.model);
        b.comparator && (this.comparator = b.comparator);
        this._reset();
        this.initialize.apply(this, arguments);
        a && this.reset(a, {silent: !0, parse: b.parse})
    };
    g.extend(l.prototype, o, {
        model: n, initialize: function () {
        }, toJSON: function (a) {
            return this.map(function (b) {
                return b.toJSON(a)
            })
        }, add: function (a, b) {
            var f, d, l, j, p, n = {}, m = {}, o = [];
            b || (b = {});
            a = g.isArray(a) ? a.slice() : [a];
            f = 0;
            for (d = a.length; f < d; f++) {
                if (!(l = a[f] = this._prepareModel(a[f], b))) throw Error("Can't add an invalid model to a collection");
                j = l.cid;
                p = l.id;
                n[j] || this._byCid[j] || null != p && (m[p] || this._byId[p]) ?
                    o.push(f) : n[j] = m[p] = l
            }
            for (f = o.length; f--;) a.splice(o[f], 1);
            f = 0;
            for (d = a.length; f < d; f++) (l = a[f]).on("all", this._onModelEvent, this), this._byCid[l.cid] = l, null != l.id && (this._byId[l.id] = l);
            this.length += d;
            c.apply(this.models, [null != b.at ? b.at : this.models.length, 0].concat(a));
            this.comparator && this.sort({silent: !0});
            if (b.silent) return this;
            f = 0;
            for (d = this.models.length; f < d; f++) if (n[(l = this.models[f]).cid]) b.index = f, l.trigger("add", l, this, b);
            return this
        }, remove: function (a, b) {
            var c, f, d, l;
            b || (b = {});
            a = g.isArray(a) ?
                a.slice() : [a];
            c = 0;
            for (f = a.length; c < f; c++) if (l = this.getByCid(a[c]) || this.get(a[c])) delete this._byId[l.id], delete this._byCid[l.cid], d = this.indexOf(l), this.models.splice(d, 1), this.length--, b.silent || (b.index = d, l.trigger("remove", l, this, b)), this._removeReference(l);
            return this
        }, push: function (a, b) {
            a = this._prepareModel(a, b);
            this.add(a, b);
            return a
        }, pop: function (a) {
            var b = this.at(this.length - 1);
            this.remove(b, a);
            return b
        }, unshift: function (a, b) {
            a = this._prepareModel(a, b);
            this.add(a, g.extend({at: 0}, b));
            return a
        },
        shift: function (a) {
            var b = this.at(0);
            this.remove(b, a);
            return b
        }, get: function (a) {
            return null == a ? void 0 : this._byId[null != a.id ? a.id : a]
        }, getByCid: function (a) {
            return a && this._byCid[a.cid || a]
        }, at: function (a) {
            return this.models[a]
        }, where: function (a) {
            return g.isEmpty(a) ? [] : this.filter(function (b) {
                for (var c in a) if (a[c] !== b.get(c)) return !1;
                return !0
            })
        }, sort: function (a) {
            a || (a = {});
            if (!this.comparator) throw Error("Cannot sort a set without a comparator");
            var b = g.bind(this.comparator, this);
            1 == this.comparator.length ?
                this.models = this.sortBy(b) : this.models.sort(b);
            a.silent || this.trigger("reset", this, a);
            return this
        }, pluck: function (a) {
            return g.map(this.models, function (b) {
                return b.get(a)
            })
        }, reset: function (a, b) {
            a || (a = []);
            b || (b = {});
            for (var c = 0, f = this.models.length; c < f; c++) this._removeReference(this.models[c]);
            this._reset();
            this.add(a, g.extend({silent: !0}, b));
            b.silent || this.trigger("reset", this, b);
            return this
        }, fetch: function (a) {
            a = a ? g.clone(a) : {};
            void 0 === a.parse && (a.parse = !0);
            var b = this, c = a.success;
            a.success = function (f,
                                  d, g) {
                b[a.add ? "add" : "reset"](b.parse(f, g), a);
                c && c(b, f)
            };
            a.error = f.wrapError(a.error, b, a);
            return (this.sync || f.sync).call(this, "read", this, a)
        }, create: function (a, b) {
            var c = this, b = b ? g.clone(b) : {}, a = this._prepareModel(a, b);
            if (!a) return !1;
            b.wait || c.add(a, b);
            var f = b.success;
            b.success = function (d, g) {
                b.wait && c.add(d, b);
                f ? f(d, g) : d.trigger("sync", a, g, b)
            };
            a.save(null, b);
            return a
        }, parse: function (a) {
            return a
        }, chain: function () {
            return g(this.models).chain()
        }, _reset: function () {
            this.length = 0;
            this.models = [];
            this._byId =
                {};
            this._byCid = {}
        }, _prepareModel: function (a, b) {
            b || (b = {});
            a instanceof n ? a.collection || (a.collection = this) : (b.collection = this, a = new this.model(a, b), a._validate(a.attributes, b) || (a = !1));
            return a
        }, _removeReference: function (a) {
            this == a.collection && delete a.collection;
            a.off("all", this._onModelEvent, this)
        }, _onModelEvent: function (a, b, c, f) {
            ("add" == a || "remove" == a) && c != this || ("destroy" == a && this.remove(b, f), b && a === "change:" + b.idAttribute && (delete this._byId[b.previous(b.idAttribute)], this._byId[b.id] = b), this.trigger.apply(this,
                arguments))
        }
    });
    g.each("forEach each map reduce reduceRight find detect filter select reject every all some any include contains invoke max min sortBy sortedIndex toArray size first initial rest last without indexOf shuffle lastIndexOf isEmpty groupBy".split(" "), function (a) {
        l.prototype[a] = function () {
            return g[a].apply(g, [this.models].concat(g.toArray(arguments)))
        }
    });
    var p = f.Router = function (a) {
            a || (a = {});
            a.routes && (this.routes = a.routes);
            this._bindRoutes();
            this.initialize.apply(this, arguments)
        }, r = /:\w+/g,
        w = /\*\w+/g, v = /[-[\]{}()+?.,\\^$|#\s]/g;
    g.extend(p.prototype, o, {
        initialize: function () {
        }, route: function (a, b, c) {
            f.history || (f.history = new s);
            g.isRegExp(a) || (a = this._routeToRegExp(a));
            c || (c = this[b]);
            f.history.route(a, g.bind(function (d) {
                d = this._extractParameters(a, d);
                c && c.apply(this, d);
                this.trigger.apply(this, ["route:" + b].concat(d));
                f.history.trigger("route", this, b, d)
            }, this));
            return this
        }, navigate: function (a, b) {
            f.history.navigate(a, b)
        }, _bindRoutes: function () {
            if (this.routes) {
                var a = [], b;
                for (b in this.routes) a.unshift([b,
                    this.routes[b]]);
                b = 0;
                for (var c = a.length; b < c; b++) this.route(a[b][0], a[b][1], this[a[b][1]])
            }
        }, _routeToRegExp: function (a) {
            a = a.replace(v, "\\$&").replace(r, "([^/]+)").replace(w, "(.*?)");
            return RegExp("^" + a + "$")
        }, _extractParameters: function (a, b) {
            return a.exec(b).slice(1)
        }
    });
    var s = f.History = function () {
        this.handlers = [];
        g.bindAll(this, "checkUrl")
    }, x = /^[#\/]/, B = /msie [\w.]+/;
    s.started = !1;
    g.extend(s.prototype, o, {
        interval: 50, getHash: function (a) {
            return (a = (a ? a.location : window.location).href.match(/#(.*)$/)) ? a[1] :
                ""
        }, getFragment: function (a, b) {
            if (null == a) if (this._hasPushState || b) {
                var a = window.location.pathname, c = window.location.search;
                c && (a += c)
            } else a = this.getHash();
            a.indexOf(this.options.root) || (a = a.substr(this.options.root.length));
            return a.replace(x, "")
        }, start: function (a) {
            if (s.started) throw Error("Backbone.history has already been started");
            s.started = !0;
            this.options = g.extend({}, {root: "/"}, this.options, a);
            this._wantsHashChange = !1 !== this.options.hashChange;
            this._wantsPushState = !!this.options.pushState;
            this._hasPushState =
                !(!this.options.pushState || !window.history || !window.history.pushState);
            var a = this.getFragment(), b = document.documentMode;
            if (b = B.exec(navigator.userAgent.toLowerCase()) && (!b || 7 >= b)) this.iframe = j('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow, this.navigate(a);
            this._hasPushState ? j(window).bind("popstate", this.checkUrl) : this._wantsHashChange && "onhashchange" in window && !b ? j(window).bind("hashchange", this.checkUrl) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl,
                this.interval));
            this.fragment = a;
            a = window.location;
            b = a.pathname == this.options.root;
            if (this._wantsHashChange && this._wantsPushState && !this._hasPushState && !b) return this.fragment = this.getFragment(null, !0), window.location.replace(this.options.root + "#" + this.fragment), !0;
            this._wantsPushState && (this._hasPushState && b && a.hash) && (this.fragment = this.getHash().replace(x, ""), window.history.replaceState({}, document.title, a.protocol + "//" + a.host + this.options.root + this.fragment));
            if (!this.options.silent) return this.loadUrl()
        },
        stop: function () {
            j(window).unbind("popstate", this.checkUrl).unbind("hashchange", this.checkUrl);
            clearInterval(this._checkUrlInterval);
            s.started = !1
        }, route: function (a, b) {
            this.handlers.unshift({route: a, callback: b})
        }, checkUrl: function () {
            var a = this.getFragment();
            a == this.fragment && this.iframe && (a = this.getFragment(this.getHash(this.iframe)));
            if (a == this.fragment) return !1;
            this.iframe && this.navigate(a);
            this.loadUrl() || this.loadUrl(this.getHash())
        }, loadUrl: function (a) {
            var b = this.fragment = this.getFragment(a);
            return g.any(this.handlers,
                function (a) {
                    if (a.route.test(b)) return a.callback(b), !0
                })
        }, navigate: function (a, b) {
            if (!s.started) return !1;
            if (!b || !0 === b) b = {trigger: b};
            var c = (a || "").replace(x, "");
            this.fragment != c && (this._hasPushState ? (0 != c.indexOf(this.options.root) && (c = this.options.root + c), this.fragment = c, window.history[b.replace ? "replaceState" : "pushState"]({}, document.title, c)) : this._wantsHashChange ? (this.fragment = c, this._updateHash(window.location, c, b.replace), this.iframe && c != this.getFragment(this.getHash(this.iframe)) && (b.replace ||
            this.iframe.document.open().close(), this._updateHash(this.iframe.location, c, b.replace))) : window.location.assign(this.options.root + a), b.trigger && this.loadUrl(a))
        }, _updateHash: function (a, b, c) {
            c ? a.replace(a.toString().replace(/(javascript:|#).*$/, "") + "#" + b) : a.hash = b
        }
    });
    var E = f.View = function (a) {
        this.cid = g.uniqueId("view");
        this._configure(a || {});
        this._ensureElement();
        this.initialize.apply(this, arguments);
        this.delegateEvents()
    }, y = /^(\S+)\s*(.*)$/, D = "model collection el id attributes className tagName".split(" ");
    g.extend(E.prototype, o, {
        tagName: "div", $: function (a) {
            return this.$el.find(a)
        }, initialize: function () {
        }, render: function () {
            return this
        }, remove: function () {
            this.$el.remove();
            return this
        }, make: function (a, b, c) {
            a = document.createElement(a);
            b && j(a).attr(b);
            c && j(a).html(c);
            return a
        }, setElement: function (a, b) {
            this.$el && this.undelegateEvents();
            this.$el = a instanceof j ? a : j(a);
            this.el = this.$el[0];
            !1 !== b && this.delegateEvents();
            return this
        }, delegateEvents: function (a) {
            if (a || (a = J(this, "events"))) {
                this.undelegateEvents();
                for (var b in a) {
                    var c = a[b];
                    g.isFunction(c) || (c = this[a[b]]);
                    if (!c) throw Error('Method "' + a[b] + '" does not exist');
                    var f = b.match(y), d = f[1], f = f[2], c = g.bind(c, this), d = d + (".delegateEvents" + this.cid);
                    "" === f ? this.$el.bind(d, c) : this.$el.delegate(f, d, c)
                }
            }
        }, undelegateEvents: function () {
            this.$el.unbind(".delegateEvents" + this.cid)
        }, _configure: function (a) {
            this.options && (a = g.extend({}, this.options, a));
            for (var b = 0, c = D.length; b < c; b++) {
                var f = D[b];
                a[f] && (this[f] = a[f])
            }
            this.options = a
        }, _ensureElement: function () {
            if (this.el) this.setElement(this.el,
                !1); else {
                var a = J(this, "attributes") || {};
                this.id && (a.id = this.id);
                this.className && (a["class"] = this.className);
                this.setElement(this.make(this.tagName, a), !1)
            }
        }
    });
    n.extend = l.extend = p.extend = E.extend = function (a, b) {
        var c = this, f;
        f = a && a.hasOwnProperty("constructor") ? a.constructor : function () {
            c.apply(this, arguments)
        };
        g.extend(f, c);
        A.prototype = c.prototype;
        f.prototype = new A;
        a && g.extend(f.prototype, a);
        b && g.extend(f, b);
        f.prototype.constructor = f;
        f.__super__ = c.prototype;
        f.extend = this.extend;
        return f
    };
    var t = {
        create: "POST",
        update: "PUT", "delete": "DELETE", read: "GET"
    };
    f.sync = function (a, b, c) {
        var d = t[a];
        c || (c = {});
        var l = {type: d, dataType: "json"};
        c.url || (l.url = J(b, "url") || C());
        if (!c.data && b && ("create" == a || "update" == a)) l.contentType = "application/json", l.data = JSON.stringify(b.toJSON());
        f.emulateJSON && (l.contentType = "application/x-www-form-urlencoded", l.data = l.data ? {model: l.data} : {});
        if (f.emulateHTTP && ("PUT" === d || "DELETE" === d)) f.emulateJSON && (l.data._method = d), l.type = "POST", l.beforeSend = function (a) {
            a.setRequestHeader("X-HTTP-Method-Override",
                d)
        };
        "GET" !== l.type && !f.emulateJSON && (l.processData = !1);
        return j.ajax(g.extend(l, c))
    };
    f.wrapError = function (a, b, c) {
        return function (f, d) {
            d = f === b ? d : f;
            a ? a(b, d, c) : b.trigger("error", b, d, c)
        }
    };
    var A = function () {
    }, J = function (a, b) {
        return !a || !a[b] ? null : g.isFunction(a[b]) ? a[b]() : a[b]
    }, C = function () {
        throw Error('A "url" property or function must be specified');
    }
}).call(this);
DEBUG = !1;
window.console || (window.console = {
    info: function () {
    }
});

function isMobileDevice() {
    return /(mobile|iphone|ipad|android)/gi.test(navigator.appVersion)
}

function setElementUnselectable(a, d) {
    if (a.nodeType == 1) {
        var b = a.tagName.toUpperCase();
        b !== "TEXTAREA" && b !== "INPUT" && a.setAttribute("unselectable", d)
    }
    for (b = a.firstChild; b;) {
        setElementUnselectable(b, d);
        b = b.nextSibling
    }
}

function setUnselectable(a, d) {
    var b = $(a), c = b[0], f = {}, g = $.support.cssAttrCheck("userSelect");
    if (g) {
        f[g] = d == "on" ? "none" : "text";
        b.css(f)
    } else setElementUnselectable(c, d)
}

function scaleImage(a, d, b, c) {
    return c > b ? scaleHeight(a, d, b, c) : c / b < d / a ? scaleWidth(a, d, b, c) : scaleHeight(a, d, b, c)
}

function scaleHeight(a, d, b, c) {
    b = Math.ceil(a / b * c);
    if (b < d) {
        b = d;
        a = "auto"
    }
    return {top: -parseInt((b - d) / 5 * 2), left: 0, height: b, width: a}
}

function scaleWidth(a, d, b, c) {
    b = Math.ceil(d / c * b);
    if (b < a) {
        b = a;
        d = "auto"
    }
    return {top: 0, left: -parseInt((b - a) / 2), width: b, height: d}
}

Date.now || (Date.now = function () {
    return +new Date
});
(function (a, d) {
    d.support.placeholder = false;
    test = a.createElement("input");
    if ("placeholder" in test) d.support.placeholder = true;
    var b = {};
    d.extend(d.support, {
        cssAttrCheck: function (c) {
            if (!c) return c;
            if (b[c]) return b[c];
            var f = a.createElement("div"), d = ["Webkit", "Moz", "O", "ms"];
            if (f.style[c] === void 0) {
                for (var j = 0, m = d.length, o; j < m; j++) {
                    o = d[j] + c.replace(/\w/, function (a) {
                        return a.toUpperCase()
                    });
                    if (f.style[o] !== void 0) {
                        b[c] = o;
                        return b[c]
                    }
                }
                return false
            }
            b[c] = c.replace(/([A-Z])/g, "-$1");
            return c
        }, positionFixed: function () {
            var a =
                true, b;
            return function () {
                if (!b) {
                    var g = d('<div style="position:fixed;left:-9999px;top:-9999px">');
                    d("body").append(g);
                    g.offset().left >= 0 && (a = false);
                    g.remove();
                    b = true
                }
                return a
            }
        }(), positionfullSize: function () {
            var a = true, b;
            return function () {
                if (!b) {
                    var g = d('<div style="position:absolute;left:-9999px;top:-9999px;width:50px;height:50px;"></div>'),
                        j = d('<div style="position:absolute;left:0;right:0;top:0;bottom:0;"></div>');
                    g.append(j);
                    d("body").append(g);
                    j.height() != 50 && (a = false);
                    g.remove();
                    b = true
                }
                return a
            }
        }(),
        minHeight: function () {
            var a, b = true;
            return function () {
                if (!a) {
                    var g = d("<div>").css("min-height", "50px").appendTo("body");
                    g.height() !== 50 && (b = false);
                    a = true;
                    g.remove()
                }
                return b
            }
        }(), webp: function () {
            var a, b = new Image;
            b.onload = function () {
                a = b.height === 2
            };
            b.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
            return function () {
                return a
            }
        }()
    });
    d.extend(d.fn, {
        getPadding: function () {
            if (!this.length) return false;
            var a = this.eq(0), b = parseInt(a.css("padding-top")),
                d = parseInt(a.css("padding-bottom")), j = parseInt(a.css("padding-left")),
                a = parseInt(a.css("padding-right"));
            isNaN(b) && (b = 0);
            isNaN(d) && (d = 0);
            isNaN(j) && (j = 0);
            isNaN(a) && (a = 0);
            return {top: b, right: a, bottom: d, left: j}
        }, lineHeight: function () {
            if (!this.length) return false;
            var a = this.eq(0), b = parseInt(a.css("font-size")), a = a.css("line-height");
            isNaN(b) && (b = 14);
            return a = a.indexOf("px") != -1 ? parseInt(a) : b * (a - 0)
        }, lineLimit: function (a) {
            a && this.each(function () {
                var b = d(this), g = b.lineHeight(), j = b.height(), g = g * a;
                j > g && b.height(Math.floor(g))
            })
        }
    });
    d.extend({
        timeParse: function (a) {
            a = Date.parse(a);
            if (!a) return "";
            var b = (+new Date - a) / 1E3;
            if (b < 60) return "\u521a\u521a";
            if (b < 3600) return Math.floor(b / 60) + "\u5206\u949f\u524d";
            if (b < 86400) return Math.floor(b / 3600) + "\u5c0f\u65f6\u524d";
            if (b < 1296E3) return Math.floor(b / 86400) + "\u5929\u524d";
            a = new Date(a);
            return a.getFullYear() + "/" + d.pad(a.getMonth() + 1, 2) + "/" + d.pad(a.getDate(), 2) + " " + d.pad(a.getHours(), 2) + ":" + d.pad(a.getMinutes(), 2)
        }, clearTimer: function (a) {
            clearInterval(a);
            clearTimeout(a);
            return null
        }, pad: function (a,
                          b) {
            for (var d = a.toString().length; d < b;) {
                a = "0" + a;
                d++
            }
            return a.toString()
        }, isClickInside: function (b, f) {
            if (!b || b.nodeType !== 1 || !f || f.nodeType !== 1) throw Error("target or elm undefined");
            var g = d(b), j = false;
            if (b === f) j = true; else {
                if (this === a.body) return false;
                g.parents().each(function () {
                    if (this === a.body) return j = false;
                    if (this === f) {
                        j = true;
                        return false
                    }
                })
            }
            return j
        }, rnd: function (a, b) {
            return Math.floor((b - a + 1) * Math.random() + a)
        }, isString: function (a) {
            return typeof a === "string"
        }, isNotEmptyString: function (a) {
            return d.isString(a) &&
                a !== ""
        }, getByteLen: function (a) {
            if (!a) return 0;
            var b = a.match(/[^\x00-\xff]/ig);
            return a.length + (b == null ? 0 : b.length)
        }, getChsLen: function (a) {
            if (!a) return 0;
            var b = a.match(/[^\x00-\xff]/ig);
            return a.length * 0.5 + (b == null ? 0 : b.length * 0.5)
        }, substr: function (a, b) {
            if (!a) return "";
            for (var d = /[^\x00-\xff]/ig, j = 0, m = "", o = 0; o < a.length; o++) {
                var n = a.charAt(o), j = n.match(d) ? j + 2 : j + 1;
                if (j > b) break;
                m = m + n
            }
            return m
        }, clonePlainObject: function () {
            function a(b) {
                if (!d.isPlainObject(b)) return b;
                var g = {}, j;
                for (j in b) g[j] = a(b[j]);
                return g
            }

            return a
        }(), isEmail: function (a) {
            return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(a)
        }, Cookie: {
            get: function (b) {
                var f, g;
                if (d.isNotEmptyString(b) && (g = a.cookie.match("(?:^| )" + b + "(?:(?:=([^;]*))|;|$)"))) f = g[1] ? decodeURIComponent(g[1]) : "";
                return f
            }, set: function (b, f, g, j, m) {
                b = b + "=" + encodeURIComponent(f);
                if (typeof g === "number") {
                    f = new Date;
                    f.setTime(f.getTime() + g * 864E5);
                    b = b + ("; expires=" + f.toUTCString())
                }
                d.isNotEmptyString(j) && (b = b + ("; domain=" + j));
                d.isNotEmptyString(m) && (b = b + ("; path=" + m));
                a.cookie =
                    b
            }
        }, Storage: function (a, b) {
            var d = true, j = a.localStorage, m, o = function () {
            };
            if (j && j.getItem) m = {
                set: function (a, b) {
                    return j.setItem(a, b)
                }, get: function (a) {
                    return j.getItem(a)
                }, del: function (a) {
                    return j.removeItem(a)
                }
            }; else {
                j = b.documentElement;
                try {
                    j.addBehavior("#default#userdata");
                    j.save("localstorage")
                } catch (n) {
                    d = false
                }
                d && (m = {
                    set: function (a, b) {
                        j.setAttribute(a, b);
                        j.save("localstorage")
                    }, get: function (a) {
                        j.load("localstorage");
                        return j.getAttribute(a)
                    }, del: function (a) {
                        j.removeAttribute(a);
                        j.save("localstorage")
                    }
                })
            }
            m ||
            (m = {set: o, get: o, del: o});
            m.support = function () {
                return d
            };
            return m
        }(window, document), log: function () {
            if (!DEBUG) return function () {
            };
            var a;
            return function () {
                if (window.console) console.info(arguments); else {
                    a || (a = d("<textarea>").css({
                        position: "absolute",
                        bottom: 0,
                        width: "100%",
                        height: 100,
                        left: 0,
                        overflow: "auto",
                        margin: 0,
                        padding: 0,
                        border: "1px solid #DDD",
                        background: "#f3f3f3",
                        zIndex: 99999
                    }).appendTo("body"));
                    for (var b = arguments, g = a.val(), j = 0, m = b.length; j < m; j++) g = g + (b[j] + " , ");
                    a.val(g + "\r\n")
                }
            }
        }()
    });
    d.fn.moveCursorToEnd =
        function () {
            if (this.length === 0) return this;
            var b = this[0], f = b.value.length;
            this.val(this.val()).focus();
            if (a.selection) {
                b = b.createTextRange();
                b.moveStart("character", f);
                b.collapse();
                b.select()
            } else if (typeof b.selectionStart == "number" && typeof b.selectionEnd == "number") b.selectionStart = b.selectionEnd = f;
            return this
        };
    d.fn.fixPosition = function () {
        if (!d.browser.msie || d.browser.version != "6.0") return this;
        this.each(function () {
            var a = d(this), b = a.css("position");
            if (b === "fixed" || b === "absolute") {
                var g = a.parent(),
                    b = g.width(), g = g.height(), j = parseInt(a.css("top")), m = parseInt(a.css("right")),
                    o = parseInt(a.css("bottom")), n = parseInt(a.css("left"));
                a.css({width: b - n - m, height: g - j - o})
            }
        })
    }
})(document, jQuery);
(function () {
    var a = isMobileDevice();
    $.fn.touchClick = function (d, b) {
        if (typeof d !== "string") {
            b = d;
            d = null
        }
        var c = null, f = null, g = null, j = null;
        if (a) {
            this.on("touchstart", d, function (a) {
                a = a.originalEvent.touches[0];
                c = a.pageX;
                f = a.pageY
            });
            this.on("touchmove", d, function (a) {
                a = a.originalEvent.touches[0];
                g = a.pageX;
                j = a.pageY
            });
            this.on("touchend", d, function (a) {
                g === null && (g = c);
                j === null && (j = f);
                c !== null && (f !== null && c === g && f === j) && b.call(this, a);
                c = f = g = j = null
            })
        } else this.on("click", d, b);
        return this
    }
})();
jQuery.easing.jswing = jQuery.easing.swing;
jQuery.extend(jQuery.easing, {
    def: "easeOutQuad", swing: function (a, d, b, c, f) {
        return jQuery.easing[jQuery.easing.def](a, d, b, c, f)
    }, easeInQuad: function (a, d, b, c, f) {
        return c * (d = d / f) * d + b
    }, easeOutQuad: function (a, d, b, c, f) {
        return -c * (d = d / f) * (d - 2) + b
    }, easeInOutQuad: function (a, d, b, c, f) {
        return (d = d / (f / 2)) < 1 ? c / 2 * d * d + b : -c / 2 * (--d * (d - 2) - 1) + b
    }, easeInCubic: function (a, d, b, c, f) {
        return c * (d = d / f) * d * d + b
    }, easeOutCubic: function (a, d, b, c, f) {
        return c * ((d = d / f - 1) * d * d + 1) + b
    }, easeInOutCubic: function (a, d, b, c, f) {
        return (d = d / (f / 2)) < 1 ? c / 2 * d *
            d * d + b : c / 2 * ((d = d - 2) * d * d + 2) + b
    }, easeInQuart: function (a, d, b, c, f) {
        return c * (d = d / f) * d * d * d + b
    }, easeOutQuart: function (a, d, b, c, f) {
        return -c * ((d = d / f - 1) * d * d * d - 1) + b
    }, easeInOutQuart: function (a, d, b, c, f) {
        return (d = d / (f / 2)) < 1 ? c / 2 * d * d * d * d + b : -c / 2 * ((d = d - 2) * d * d * d - 2) + b
    }, easeInQuint: function (a, d, b, c, f) {
        return c * (d = d / f) * d * d * d * d + b
    }, easeOutQuint: function (a, d, b, c, f) {
        return c * ((d = d / f - 1) * d * d * d * d + 1) + b
    }, easeInOutQuint: function (a, d, b, c, f) {
        return (d = d / (f / 2)) < 1 ? c / 2 * d * d * d * d * d + b : c / 2 * ((d = d - 2) * d * d * d * d + 2) + b
    }, easeInSine: function (a, d, b, c, f) {
        return -c *
            Math.cos(d / f * (Math.PI / 2)) + c + b
    }, easeOutSine: function (a, d, b, c, f) {
        return c * Math.sin(d / f * (Math.PI / 2)) + b
    }, easeInOutSine: function (a, d, b, c, f) {
        return -c / 2 * (Math.cos(Math.PI * d / f) - 1) + b
    }, easeInExpo: function (a, d, b, c, f) {
        return d == 0 ? b : c * Math.pow(2, 10 * (d / f - 1)) + b
    }, easeOutExpo: function (a, d, b, c, f) {
        return d == f ? b + c : c * (-Math.pow(2, -10 * d / f) + 1) + b
    }, easeInOutExpo: function (a, d, b, c, f) {
        return d == 0 ? b : d == f ? b + c : (d = d / (f / 2)) < 1 ? c / 2 * Math.pow(2, 10 * (d - 1)) + b : c / 2 * (-Math.pow(2, -10 * --d) + 2) + b
    }, easeInCirc: function (a, d, b, c, f) {
        return -c * (Math.sqrt(1 -
            (d = d / f) * d) - 1) + b
    }, easeOutCirc: function (a, d, b, c, f) {
        return c * Math.sqrt(1 - (d = d / f - 1) * d) + b
    }, easeInOutCirc: function (a, d, b, c, f) {
        return (d = d / (f / 2)) < 1 ? -c / 2 * (Math.sqrt(1 - d * d) - 1) + b : c / 2 * (Math.sqrt(1 - (d = d - 2) * d) + 1) + b
    }, easeInElastic: function (a, d, b, c, f) {
        var a = 1.70158, g = 0, j = c;
        if (d == 0) return b;
        if ((d = d / f) == 1) return b + c;
        g || (g = f * 0.3);
        if (j < Math.abs(c)) {
            j = c;
            a = g / 4
        } else a = g / (2 * Math.PI) * Math.asin(c / j);
        return -(j * Math.pow(2, 10 * (d = d - 1)) * Math.sin((d * f - a) * 2 * Math.PI / g)) + b
    }, easeOutElastic: function (a, d, b, c, f) {
        var a = 1.70158, g = 0, j = c;
        if (d == 0) return b;
        if ((d = d / f) == 1) return b + c;
        g || (g = f * 0.3);
        if (j < Math.abs(c)) {
            j = c;
            a = g / 4
        } else a = g / (2 * Math.PI) * Math.asin(c / j);
        return j * Math.pow(2, -10 * d) * Math.sin((d * f - a) * 2 * Math.PI / g) + c + b
    }, easeInOutElastic: function (a, d, b, c, f) {
        var a = 1.70158, g = 0, j = c;
        if (d == 0) return b;
        if ((d = d / (f / 2)) == 2) return b + c;
        g || (g = f * 0.3 * 1.5);
        if (j < Math.abs(c)) {
            j = c;
            a = g / 4
        } else a = g / (2 * Math.PI) * Math.asin(c / j);
        return d < 1 ? -0.5 * j * Math.pow(2, 10 * (d = d - 1)) * Math.sin((d * f - a) * 2 * Math.PI / g) + b : j * Math.pow(2, -10 * (d = d - 1)) * Math.sin((d * f - a) * 2 * Math.PI / g) * 0.5 + c +
            b
    }, easeInBack: function (a, d, b, c, f, g) {
        g == void 0 && (g = 1.70158);
        return c * (d = d / f) * d * ((g + 1) * d - g) + b
    }, easeOutBack: function (a, d, b, c, f, g) {
        g == void 0 && (g = 1.70158);
        return c * ((d = d / f - 1) * d * ((g + 1) * d + g) + 1) + b
    }, easeInOutBack: function (a, d, b, c, f, g) {
        g == void 0 && (g = 1.70158);
        return (d = d / (f / 2)) < 1 ? c / 2 * d * d * (((g = g * 1.525) + 1) * d - g) + b : c / 2 * ((d = d - 2) * d * (((g = g * 1.525) + 1) * d + g) + 2) + b
    }, easeInBounce: function (a, d, b, c, f) {
        return c - jQuery.easing.easeOutBounce(a, f - d, 0, c, f) + b
    }, easeOutBounce: function (a, d, b, c, f) {
        return (d = d / f) < 1 / 2.75 ? c * 7.5625 * d * d + b : d <
        2 / 2.75 ? c * (7.5625 * (d = d - 1.5 / 2.75) * d + 0.75) + b : d < 2.5 / 2.75 ? c * (7.5625 * (d = d - 2.25 / 2.75) * d + 0.9375) + b : c * (7.5625 * (d = d - 2.625 / 2.75) * d + 0.984375) + b
    }, easeInOutBounce: function (a, d, b, c, f) {
        return d < f / 2 ? jQuery.easing.easeInBounce(a, d * 2, 0, c, f) * 0.5 + b : jQuery.easing.easeOutBounce(a, d * 2 - f, 0, c, f) * 0.5 + c * 0.5 + b
    }
});
var KeyEventListener = function () {
    var a, d = {}, b = [], c;
    return {
        bind: function (f, g) {
            if (!c) {
                $(document).keydown(function (c) {
                    clearTimeout(a);
                    b.push(c.keyCode);
                    if (c = d[b.join(",")]) {
                        c();
                        b = []
                    } else a = setTimeout(function () {
                        b = []
                    }, 500)
                });
                c = true
            }
            d[f] = g
        }
    }
}();
(function (a, d) {
    var b = d(a), c, f;
    d("*").on("mousemove keydown scroll", function () {
        clearTimeout(c);
        c = setTimeout(function () {
            b.trigger("useridle");
            f = true
        }, 6E4);
        if (f) {
            f = false;
            b.trigger("userpresent")
        }
    })
})(window, jQuery);
(function (a, d) {
    function b() {
        var a = o.length, b = 0;
        setTimeout(function () {
            for (; b < a; b++) o[b].call(g)
        }, 20)
    }

    var c = d(a), f = isMobileDevice(), g = {
        measure: function () {
            var b = f ? a.innerWidth : c.width(), d = f ? a.innerHeight : c.height();
            if (f) for (var j = document.getElementsByTagName("meta"), n = j.length, m = 0; m < n; m++) {
                var o = j[m];
                if (o.getAttribute("name") == "viewport") {
                    o.setAttribute("content", "width = " + b + ",maximum-scale=1,user-scalable=no");
                    break
                }
            }
            g.width = b;
            g.height = d
        }
    };
    g.measure();
    d(document).ready(function () {
        g.measure()
    });
    var j,
        m, o = [], n = {
            add: function (a) {
                if (!j) {
                    c.resize(function () {
                        clearTimeout(m);
                        m = setTimeout(b, 100)
                    });
                    j = true
                }
                a:{
                    for (var f = o.length, d = 0; d < f; d++) if (a === o[d]) break a;
                    o.push(a)
                }
            }, remove: function (a) {
                o = _.without(o, a)
            }
        };
    n.add(function () {
        g.measure()
    });
    a.WindowResizeListener = n;
    a.WindowSize = g
})(window, jQuery);
(function (a) {
    function d() {
        var f;
        f = a(this);
        if (!f.data("timeago")) {
            var d = c.datetime(f);
            f.data("timeago", {datetime: d});
            a.trim(f.text()).length > 0 && (!c.isTime(f) || f.attr("title"))
        }
        f = f.data("timeago");
        isNaN(f.datetime) || a(this).text(b(f.datetime));
        return this
    }

    function b(a) {
        return c.inWords((new Date).getTime() - a.getTime())
    }

    a.timeago = function (c) {
        return c instanceof Date ? b(c) : typeof c === "string" ? b(a.timeago.parse(c)) : typeof c === "number" ? b(new Date(c)) : b(a.timeago.datetime(c))
    };
    var c = a.timeago;
    a.extend(a.timeago,
        {
            settings: {
                refreshMillis: 6E4,
                allowFuture: true,
                strings: {
                    prefixAgo: null,
                    prefixFromNow: null,
                    suffixAgo: "\u524d",
                    suffixFromNow: "",
                    seconds: "\u521a\u521a",
                    minute: "1\u5206\u949f",
                    minutes: "%d\u5206\u949f",
                    hour: "1\u5c0f\u65f6",
                    hours: "%d\u5c0f\u65f6",
                    day: "1\u5929",
                    days: "%d\u5929",
                    month: "1\u4e2a\u6708",
                    months: "%d\u6708",
                    year: "1\u5e74",
                    years: "%d\u5e74",
                    wordSeparator: "",
                    numbers: []
                }
            }, inWords: function (b) {
                function c(g, l) {
                    return (a.isFunction(g) ? g(l, b) : g).replace(/%d/i, d.numbers && d.numbers[l] || l || 1)
                }

                var d = this.settings.strings,
                    m = d.prefixAgo, o = d.suffixAgo;
                if (this.settings.allowFuture && b < 0) {
                    m = d.prefixFromNow;
                    o = d.suffixFromNow
                }
                var n = Math.abs(b) / 1E3, l = n / 60, p = l / 60, r = p / 24, w = r / 365,
                    n = n < 45 && c(d.seconds, Math.round(n)) || n < 90 && c(d.minute, 1) || l < 45 && c(d.minutes, Math.round(l)) || l < 90 && c(d.hour, 1) || p < 24 && c(d.hours, Math.round(p)) || p < 42 && c(d.day, 1) || r < 30 && c(d.days, Math.round(r)) || r < 45 && c(d.month, 1) || r < 365 && c(d.months, Math.round(r / 30)) || w < 1.5 && c(d.year, 1) || c(d.years, Math.round(w));
                return n === d.seconds ? d.seconds : a.trim([m, n, o].join(d.wordSeparator ===
                void 0 ? " " : d.wordSeparator))
            }, parse: function (b) {
                b = a.trim(b);
                b = b.replace(/\.\d\d\d+/, "");
                b = b.replace(/-/, "/").replace(/-/, "/");
                b = b.replace(/([\+\-]\d\d)\:?(\d\d)/, " $1$2");
                return new Date(b)
            }, datetime: function (b) {
                b = c.isTime(b) ? a(b).attr("datetime") : a(b).attr("rel");
                return c.parse(b)
            }, isTime: function (b) {
                return a(b).get(0).tagName.toLowerCase() === "time"
            }
        });
    a.fn.timeago = function () {
        this.each(d);
        return this
    };
    document.createElement("abbr");
    document.createElement("time")
})(jQuery);
(function (a) {
    var d = "hidden",
        b = ["fontFamily", "fontSize", "fontWeight", "fontStyle", "letterSpacing", "textTransform", "wordSpacing", "textIndent"],
        c = a('<textarea tabindex="-1" style="position:absolute; top:-9999px; left:-9999px; right:auto; bottom:auto; -moz-box-sizing:content-box; -webkit-box-sizing:content-box; box-sizing:content-box; word-wrap:break-word; height:0 !important; min-height:0 !important; overflow:hidden;">')[0];
    c.setAttribute("oninput", "return");
    if (a.isFunction(c.oninput) || "onpropertychange" in
        c) {
        a(c).css("lineHeight", "99px");
        a(c).css("lineHeight") === "99px" && b.push("lineHeight");
        a.fn.autosize = function (c) {
            return this.each(function () {
                function g() {
                    var a, b;
                    if (!p) {
                        p = true;
                        o.value = j.value;
                        o.style.overflowY = j.style.overflowY;
                        o.style.width = m.css("width");
                        o.scrollTop = 0;
                        o.scrollTop = 9E4;
                        a = o.scrollTop;
                        b = d;
                        if (a > l) {
                            a = l;
                            b = "scroll"
                        } else a < n && (a = n);
                        j.style.overflowY = b;
                        j.style.height = a + v + "px";
                        setTimeout(function () {
                            p = false
                        }, 1)
                    }
                }

                var j = this, m = a(j), o, n = m.height(), l = parseInt(m.css("maxHeight"), 10), p, r = b.length,
                    w, v = 0;
                if (m.css("box-sizing") === "border-box" || m.css("-moz-box-sizing") === "border-box" || m.css("-webkit-box-sizing") === "border-box") v = m.outerHeight() - m.height();
                if (!m.data("mirror") && !m.data("ismirror")) {
                    o = a('<textarea tabindex="-1" style="position:absolute; top:-9999px; left:-9999px; right:auto; bottom:auto; -moz-box-sizing:content-box; -webkit-box-sizing:content-box; box-sizing:content-box; word-wrap:break-word; height:0 !important; min-height:0 !important; overflow:hidden;">').data("ismirror", true).addClass(c ||
                        "autosizejs")[0];
                    w = m.css("resize") === "none" ? "none" : "horizontal";
                    m.data("mirror", a(o)).css({overflow: d, overflowY: d, wordWrap: "break-word", resize: w});
                    for (l = l && l > 0 ? l : 9E4; r--;) o.style[b[r]] = m.css(b[r]);
                    a("body").append(o);
                    "onpropertychange" in j ? "oninput" in j ? j.oninput = j.onkeyup = g : j.onpropertychange = g : j.oninput = g;
                    a(window).resize(g);
                    m.bind("autosize", g);
                    m.text(m.text());
                    g()
                }
            })
        }
    } else a.fn.autosize = function () {
        return this
    }
})(jQuery);
(function (a, d) {
    var b;
    a.rails = b = {
        linkClickSelector: "a[data-confirm], a[data-method], a[data-remote], a[data-disable-with]",
        inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
        formSubmitSelector: "form",
        formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not(button[type])",
        disableSelector: "input[data-disable-with], button[data-disable-with], textarea[data-disable-with]",
        enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled",
        requiredInputSelector: "input[name][required]:not([disabled]),textarea[name][required]:not([disabled])",
        fileInputSelector: "input:file",
        linkDisableSelector: "a[data-disable-with]",
        CSRFProtection: function (b) {
            var f = a('meta[name="csrf-token"]').attr("content");
            f && b.setRequestHeader("X-CSRF-Token", f)
        },
        fire: function (b, f, d) {
            f = a.Event(f);
            b.trigger(f, d);
            return f.result !== false
        },
        confirm: function (a) {
            return confirm(a)
        },
        ajax: function (b) {
            return a.ajax(b)
        },
        href: function (a) {
            return a.attr("href")
        },
        handleRemote: function (c) {
            var f,
                g, j, m, o;
            if (b.fire(c, "ajax:before")) {
                m = c.data("cross-domain") || null;
                o = c.data("type") || a.ajaxSettings && a.ajaxSettings.dataType;
                if (c.is("form")) {
                    f = c.attr("method");
                    g = c.attr("action");
                    j = c.serializeArray();
                    var n = c.data("ujs:submit-button");
                    if (n) {
                        j.push(n);
                        c.data("ujs:submit-button", null)
                    }
                } else if (c.is(b.inputChangeSelector)) {
                    f = c.data("method");
                    g = c.data("url");
                    j = c.serialize();
                    c.data("params") && (j = j + "&" + c.data("params"))
                } else {
                    f = c.data("method");
                    g = b.href(c);
                    j = c.data("params") || null
                }
                f = {
                    type: f || "GET", data: j,
                    dataType: o, crossDomain: m, beforeSend: function (a, f) {
                        f.dataType === d && a.setRequestHeader("accept", "*/*;q=0.5, " + f.accepts.script);
                        return b.fire(c, "ajax:beforeSend", [a, f])
                    }, success: function (a, b, f) {
                        c.trigger("ajax:success", [a, b, f])
                    }, complete: function (a, b) {
                        c.trigger("ajax:complete", [a, b])
                    }, error: function (a, b, f) {
                        c.trigger("ajax:error", [a, b, f])
                    }
                };
                if (g) f.url = g;
                return b.ajax(f)
            }
            return false
        },
        handleMethod: function (c) {
            var f = b.href(c), g = c.data("method"), c = c.attr("target"),
                j = a("meta[name=csrf-token]").attr("content"),
                m = a("meta[name=csrf-param]").attr("content"), f = a('<form method="post" action="' + f + '"></form>'),
                g = '<input name="_method" value="' + g + '" type="hidden" />';
            m !== d && j !== d && (g = g + ('<input name="' + m + '" value="' + j + '" type="hidden" />'));
            c && f.attr("target", c);
            f.hide().append(g).appendTo("body");
            f.submit()
        },
        disableFormElements: function (c) {
            c.find(b.disableSelector).each(function () {
                var b = a(this), c = b.is("button") ? "html" : "val";
                b.data("ujs:enable-with", b[c]());
                b[c](b.data("disable-with"));
                b.prop("disabled", true)
            })
        },
        enableFormElements: function (c) {
            c.find(b.enableSelector).each(function () {
                var b = a(this), c = b.is("button") ? "html" : "val";
                if (b.data("ujs:enable-with")) b[c](b.data("ujs:enable-with"));
                b.prop("disabled", false)
            })
        },
        allowAction: function (a) {
            var f = a.data("confirm"), d = false, j;
            if (!f) return true;
            if (b.fire(a, "confirm")) {
                d = b.confirm(f);
                j = b.fire(a, "confirm:complete", [d])
            }
            return d && j
        },
        blankInputs: function (b, f, d) {
            var j = a(), m;
            b.find(f || "input,textarea").each(function () {
                m = a(this);
                if (d ? m.val() : !m.val()) j = j.add(m)
            });
            return j.length ?
                j : false
        },
        nonBlankInputs: function (a, f) {
            return b.blankInputs(a, f, true)
        },
        stopEverything: function (b) {
            a(b.target).trigger("ujs:everythingStopped");
            b.stopImmediatePropagation();
            return false
        },
        callFormSubmitBindings: function (b, f) {
            var g = b.data("events"), j = true;
            g !== d && g.submit !== d && a.each(g.submit, function (a, b) {
                if (typeof b.handler === "function") return j = b.handler(f)
            });
            return j
        },
        disableElement: function (a) {
            a.data("ujs:enable-with", a.html());
            a.html(a.data("disable-with"));
            a.bind("click.railsDisable", function (a) {
                return b.stopEverything(a)
            })
        },
        enableElement: function (a) {
            if (a.data("ujs:enable-with") !== d) {
                a.html(a.data("ujs:enable-with"));
                a.data("ujs:enable-with", false)
            }
            a.unbind("click.railsDisable")
        }
    };
    a.ajaxPrefilter(function (a, f, d) {
        a.crossDomain || b.CSRFProtection(d)
    });
    a(document).delegate(b.linkDisableSelector, "ajax:complete", function () {
        b.enableElement(a(this))
    });
    a(document).delegate(b.linkClickSelector, "click.rails", function (c) {
        var f = a(this), g = f.data("method"), j = f.data("params");
        if (!b.allowAction(f)) return b.stopEverything(c);
        f.is(b.linkDisableSelector) &&
        b.disableElement(f);
        if (f.data("remote") !== d) {
            if ((c.metaKey || c.ctrlKey) && (!g || g === "GET") && !j) return true;
            b.handleRemote(f) === false && b.enableElement(f);
            return false
        }
        if (f.data("method")) {
            b.handleMethod(f);
            return false
        }
    });
    a(document).delegate(b.inputChangeSelector, "change.rails", function (c) {
        var f = a(this);
        if (!b.allowAction(f)) return b.stopEverything(c);
        b.handleRemote(f);
        return false
    });
    a(document).delegate(b.formSubmitSelector, "submit.rails", function (c) {
        var f = a(this), g = f.data("remote") !== d, j = b.blankInputs(f,
            b.requiredInputSelector), m = b.nonBlankInputs(f, b.fileInputSelector);
        if (!b.allowAction(f) || j && f.attr("novalidate") == d && b.fire(f, "ajax:aborted:required", [j])) return b.stopEverything(c);
        if (g) {
            if (m) return b.fire(f, "ajax:aborted:file", [m]);
            if (!a.support.submitBubbles && a().jquery < "1.7" && b.callFormSubmitBindings(f, c) === false) return b.stopEverything(c);
            b.handleRemote(f);
            return false
        }
        setTimeout(function () {
            b.disableFormElements(f)
        }, 13)
    });
    a(document).delegate(b.formInputClickSelector, "click.rails", function (c) {
        var f =
            a(this);
        if (!b.allowAction(f)) return b.stopEverything(c);
        c = (c = f.attr("name")) ? {name: c, value: f.val()} : null;
        f.closest("form").data("ujs:submit-button", c)
    });
    a(document).delegate(b.formSubmitSelector, "ajax:beforeSend.rails", function (c) {
        this == c.target && b.disableFormElements(a(this))
    });
    a(document).delegate(b.formSubmitSelector, "ajax:complete.rails", function (c) {
        this == c.target && b.enableFormElements(a(this))
    })
})(jQuery);
(function () {
    function a() {
        this.returnValue = false
    }

    function d() {
        this.cancelBubble = true
    }

    var b = 0, c = [], f = {}, g = {}, j = {"<": "lt", ">": "gt", "&": "amp", '"': "quot", "'": "#39"},
        m = /[<>&\"\']/g, o = window.setTimeout, n = {}, l,
        p = "application/msword,doc dot,application/pdf,pdf,application/pgp-signature,pgp,application/postscript,ps ai eps,application/rtf,rtf,application/vnd.ms-excel,xls xlb,application/vnd.ms-powerpoint,ppt pps pot,application/zip,zip,application/x-shockwave-flash,swf swfl,application/vnd.openxmlformats-officedocument.wordprocessingml.document,docx,application/vnd.openxmlformats-officedocument.wordprocessingml.template,dotx,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,xlsx,application/vnd.openxmlformats-officedocument.presentationml.presentation,pptx,application/vnd.openxmlformats-officedocument.presentationml.template,potx,application/vnd.openxmlformats-officedocument.presentationml.slideshow,ppsx,application/x-javascript,js,application/json,json,audio/mpeg,mpga mpega mp2 mp3,audio/x-wav,wav,audio/mp4,m4a,image/bmp,bmp,image/gif,gif,image/jpeg,jpeg jpg jpe,image/photoshop,psd,image/png,png,image/svg+xml,svg svgz,image/tiff,tiff tif,text/plain,asc txt text diff log,text/html,htm html xhtml,text/css,css,text/csv,csv,text/rtf,rtf,video/mpeg,mpeg mpg mpe,video/quicktime,qt mov,video/mp4,mp4,video/x-m4v,m4v,video/x-flv,flv,video/x-ms-wmv,wmv,video/avi,avi,video/webm,webm,video/vnd.rn-realvideo,rv,application/vnd.oasis.opendocument.formula-template,otf,application/octet-stream,exe".split(/,/),
        r, w, v;
    for (r = 0; r < p.length; r = r + 2) {
        v = p[r + 1].split(/ /);
        for (w = 0; w < v.length; w++) g[v[w]] = p[r]
    }
    p = navigator;
    r = p.userAgent;
    v = p.vendor;
    var s;
    s = (w = /WebKit/.test(r)) && v.indexOf("Apple") !== -1;
    v = window.opera && window.opera.buildNumber;
    var p = {
        windows: navigator.platform.indexOf("Win") !== -1,
        ie: !w && !v && /MSIE/gi.test(r) && /Explorer/gi.test(p.appName),
        webkit: w,
        gecko: !w && /Gecko/.test(r),
        safari: s,
        opera: !!v
    }, x = {
        VERSION: "@@version@@",
        STOPPED: 1,
        STARTED: 2,
        QUEUED: 1,
        UPLOADING: 2,
        FAILED: 4,
        DONE: 5,
        GENERIC_ERROR: -100,
        HTTP_ERROR: -200,
        IO_ERROR: -300,
        SECURITY_ERROR: -400,
        INIT_ERROR: -500,
        FILE_SIZE_ERROR: -600,
        FILE_EXTENSION_ERROR: -601,
        IMAGE_FORMAT_ERROR: -700,
        IMAGE_MEMORY_ERROR: -701,
        IMAGE_DIMENSIONS_ERROR: -702,
        mimeTypes: g,
        ua: p,
        typeOf: function (a) {
            return {}.toString.call(a).match(/\s([a-z|A-Z]+)/)[1].toLowerCase()
        },
        extend: function (a) {
            x.each(arguments, function (b, c) {
                c > 0 && x.each(b, function (b, c) {
                    a[c] = b
                })
            });
            return a
        },
        cleanName: function (a) {
            var b, c;
            c = [/[\300-\306]/g, "A", /[\340-\346]/g, "a", /\307/g, "C", /\347/g, "c", /[\310-\313]/g, "E", /[\350-\353]/g,
                "e", /[\314-\317]/g, "I", /[\354-\357]/g, "i", /\321/g, "N", /\361/g, "n", /[\322-\330]/g, "O", /[\362-\370]/g, "o", /[\331-\334]/g, "U", /[\371-\374]/g, "u"];
            for (b = 0; b < c.length; b = b + 2) a = a.replace(c[b], c[b + 1]);
            a = a.replace(/\s+/g, "_");
            return a = a.replace(/[^a-z0-9_\-\.]+/gi, "")
        },
        addRuntime: function (a, b) {
            b.name = a;
            c[a] = b;
            c.push(b);
            return b
        },
        guid: function () {
            var a = (new Date).getTime().toString(32), c;
            for (c = 0; c < 5; c++) a = a + Math.floor(Math.random() * 65535).toString(32);
            return (x.guidPrefix || "p") + a + (b++).toString(32)
        },
        buildUrl: function (a,
                            b) {
            var c = "";
            x.each(b, function (a, b) {
                c = c + ((c ? "&" : "") + encodeURIComponent(b) + "=" + encodeURIComponent(a))
            });
            c && (a = a + ((a.indexOf("?") > 0 ? "&" : "?") + c));
            return a
        },
        each: function (a, b) {
            var c, f;
            if (a) {
                c = a.length;
                if (c === void 0) for (f in a) {
                    if (a.hasOwnProperty(f) && b(a[f], f) === false) break
                } else for (f = 0; f < c; f++) if (b(a[f], f) === false) break
            }
        },
        formatSize: function (a) {
            return a === void 0 || /\D/.test(a) ? x.translate("N/A") : a > 1073741824 ? Math.round(a / 1073741824, 1) + " GB" : a > 1048576 ? Math.round(a / 1048576, 1) + " MB" : a > 1024 ? Math.round(a / 1024,
                1) + " KB" : a + " b"
        },
        getPos: function (a, b) {
            function c(a) {
                var b, f = 0;
                b = 0;
                if (a) {
                    b = a.getBoundingClientRect();
                    a = l.compatMode === "CSS1Compat" ? l.documentElement : l.body;
                    f = b.left + a.scrollLeft;
                    b = b.top + a.scrollTop
                }
                return {x: f, y: b}
            }

            var f = 0, d = 0, g, l = document, b = b || l.body;
            if (a && a.getBoundingClientRect && navigator.userAgent.indexOf("MSIE") > 0 && l.documentMode < 8) {
                f = c(a);
                d = c(b);
                return {x: f.x - d.x, y: f.y - d.y}
            }
            for (g = a; g && g != b && g.nodeType;) {
                f = f + (g.offsetLeft || 0);
                d = d + (g.offsetTop || 0);
                g = g.offsetParent
            }
            for (g = a.parentNode; g && g != b && g.nodeType;) {
                f =
                    f - (g.scrollLeft || 0);
                d = d - (g.scrollTop || 0);
                g = g.parentNode
            }
            return {x: f, y: d}
        },
        getSize: function (a) {
            return {w: a.offsetWidth || a.clientWidth, h: a.offsetHeight || a.clientHeight}
        },
        parseSize: function (a) {
            var b;
            if (typeof a == "string") {
                a = /^([0-9]+)([mgk]?)$/.exec(a.toLowerCase().replace(/[^0-9mkg]/g, ""));
                b = a[2];
                a = +a[1];
                b == "g" && (a = a * 1073741824);
                b == "m" && (a = a * 1048576);
                b == "k" && (a = a * 1024)
            }
            return a
        },
        xmlEncode: function (a) {
            return a ? ("" + a).replace(m, function (a) {
                return j[a] ? "&" + j[a] + ";" : a
            }) : a
        },
        toArray: function (a) {
            var b, c = [];
            for (b = 0; b < a.length; b++) c[b] = a[b];
            return c
        },
        inArray: function (a, b) {
            if (b) {
                if (Array.prototype.indexOf) return Array.prototype.indexOf.call(b, a);
                for (var c = 0, f = b.length; c < f; c++) if (b[c] === a) return c
            }
            return -1
        },
        addI18n: function (a) {
            return x.extend(f, a)
        },
        translate: function (a) {
            return f[a] || a
        },
        isEmptyObj: function (a) {
            if (a === void 0) return true;
            for (var b in a) return false;
            return true
        },
        hasClass: function (a, b) {
            return a.className == "" ? false : RegExp("(^|\\s+)" + b + "(\\s+|$)").test(a.className)
        },
        addClass: function (a, b) {
            if (!x.hasClass(a,
                    b)) a.className = a.className == "" ? b : a.className.replace(/\s+$/, "") + " " + b
        },
        removeClass: function (a, b) {
            a.className = a.className.replace(RegExp("(^|\\s+)" + b + "(\\s+|$)"), function (a, b, c) {
                return b === " " && c === " " ? " " : ""
            })
        },
        getStyle: function (a, b) {
            if (a.currentStyle) return a.currentStyle[b];
            if (window.getComputedStyle) return window.getComputedStyle(a, null)[b]
        },
        addEvent: function (b, c, f, g) {
            var j, c = c.toLowerCase();
            l === void 0 && (l = "Plupload_" + x.guid());
            if (b.addEventListener) {
                j = f;
                b.addEventListener(c, j, false)
            } else if (b.attachEvent) {
                j =
                    function () {
                        var b = window.event;
                        if (!b.target) b.target = b.srcElement;
                        b.preventDefault = a;
                        b.stopPropagation = d;
                        f(b)
                    };
                b.attachEvent("on" + c, j)
            }
            b[l] === void 0 && (b[l] = x.guid());
            n.hasOwnProperty(b[l]) || (n[b[l]] = {});
            b = n[b[l]];
            b.hasOwnProperty(c) || (b[c] = []);
            b[c].push({func: j, orig: f, key: g})
        },
        removeEvent: function (a, b, c) {
            var f, d;
            typeof c == "function" ? f = c : d = c;
            b = b.toLowerCase();
            if (a[l] && n[a[l]] && n[a[l]][b]) {
                for (var c = n[a[l]][b], g = c.length - 1; g >= 0; g--) if (c[g].key === d || c[g].orig === f) {
                    a.removeEventListener ? a.removeEventListener(b,
                        c[g].func, false) : a.detachEvent && a.detachEvent("on" + b, c[g].func);
                    c[g].orig = null;
                    c[g].func = null;
                    c.splice(g, 1);
                    if (f !== void 0) break
                }
                c.length || delete n[a[l]][b];
                if (x.isEmptyObj(n[a[l]])) {
                    delete n[a[l]];
                    try {
                        delete a[l]
                    } catch (j) {
                        a[l] = void 0
                    }
                }
            }
        },
        removeAllEvents: function (a, b) {
            a[l] !== void 0 && a[l] && x.each(n[a[l]], function (c, f) {
                x.removeEvent(a, f, b)
            })
        },
        Uploader: function (a) {
            function b() {
                var a, c = 0, f;
                if (this.state == x.STARTED) {
                    for (f = 0; f < l.length; f++) if (!a && l[f].status == x.QUEUED) {
                        a = l[f];
                        a.status = x.UPLOADING;
                        this.trigger("BeforeUpload",
                            a) && this.trigger("UploadFile", a)
                    } else c++;
                    if (c == l.length) {
                        this.stop();
                        this.trigger("UploadComplete", l)
                    }
                }
            }

            function f() {
                var a, b;
                g.reset();
                for (a = 0; a < l.length; a++) {
                    b = l[a];
                    if (b.size !== void 0) {
                        g.size = g.size + b.size;
                        g.loaded = g.loaded + b.loaded
                    } else g.size = void 0;
                    b.status == x.DONE ? g.uploaded++ : b.status == x.FAILED ? g.failed++ : g.queued++
                }
                if (g.size === void 0) g.percent = l.length > 0 ? Math.ceil(g.uploaded / l.length * 100) : 0; else {
                    g.bytesPerSec = Math.ceil(g.loaded / ((+new Date - j || 1) / 1E3));
                    g.percent = g.size > 0 ? Math.ceil(g.loaded /
                        g.size * 100) : 0
                }
            }

            var d = {}, g, l = [], j, p = false;
            g = new x.QueueProgress;
            a = x.extend({
                chunk_size: 0,
                multipart: true,
                multi_selection: true,
                file_data_name: "file",
                filters: []
            }, a);
            x.extend(this, {
                state: x.STOPPED,
                runtime: "",
                features: {},
                files: l,
                settings: a,
                total: g,
                id: x.guid(),
                init: function () {
                    function d() {
                        var a = p[n++], b, c, f;
                        if (a) {
                            b = a.getFeatures();
                            if (c = g.settings.required_features) {
                                c = c.split(",");
                                for (f = 0; f < c.length; f++) if (!b[c[f]]) {
                                    d();
                                    return
                                }
                            }
                            a.init(g, function (c) {
                                if (c && c.success) {
                                    g.features = b;
                                    g.runtime = a.name;
                                    g.trigger("Init",
                                        {runtime: a.name});
                                    g.trigger("PostInit");
                                    g.refresh()
                                } else d()
                            })
                        } else g.trigger("Error", {code: x.INIT_ERROR, message: x.translate("Init error.")})
                    }

                    var g = this, k, p, n = 0, m;
                    typeof a.preinit == "function" ? a.preinit(g) : x.each(a.preinit, function (a, b) {
                        g.bind(b, a)
                    });
                    a.page_url = a.page_url || document.location.pathname.replace(/\/[^\/]+$/g, "/");
                    if (!/^(\w+:\/\/|\/)/.test(a.url)) a.url = a.page_url + a.url;
                    a.chunk_size = x.parseSize(a.chunk_size);
                    a.max_file_size = x.parseSize(a.max_file_size);
                    g.bind("FilesAdded", function (b, c) {
                        var f,
                            d, j = 0, k;
                        if ((f = a.filters) && f.length) {
                            k = [];
                            x.each(f, function (a) {
                                x.each(a.extensions.split(/,/), function (a) {
                                    /^\s*\*\s*$/.test(a) ? k.push("\\.*") : k.push("\\." + a.replace(RegExp("[" + "/^$.*+?|()[]{}\\".replace(/./g, "\\$&") + "]", "g"), "\\$&"))
                                })
                            });
                            k = RegExp(k.join("|") + "$", "i")
                        }
                        for (f = 0; f < c.length; f++) {
                            d = c[f];
                            d.loaded = 0;
                            d.percent = 0;
                            d.status = x.QUEUED;
                            if (k && !k.test(d.name)) b.trigger("Error", {
                                code: x.FILE_EXTENSION_ERROR,
                                message: x.translate("File extension error."),
                                file: d
                            }); else if (d.size !== void 0 && d.size > a.max_file_size) b.trigger("Error",
                                {code: x.FILE_SIZE_ERROR, message: x.translate("File size error."), file: d}); else {
                                l.push(d);
                                j++
                            }
                        }
                        if (j) o(function () {
                            g.trigger("QueueChanged");
                            g.refresh()
                        }, 1); else return false
                    });
                    a.unique_names && g.bind("UploadFile", function (a, b) {
                        var c = b.name.match(/\.([^.]+)$/), f = "tmp";
                        c && (f = c[1]);
                        b.target_name = b.id + "." + f
                    });
                    g.bind("UploadProgress", function (a, b) {
                        b.percent = b.size > 0 ? Math.ceil(b.loaded / b.size * 100) : 100;
                        f()
                    });
                    g.bind("StateChanged", function (a) {
                        if (a.state == x.STARTED) j = +new Date; else if (a.state == x.STOPPED) for (k =
                                                                                                         a.files.length - 1; k >= 0; k--) if (a.files[k].status == x.UPLOADING) {
                            a.files[k].status = x.QUEUED;
                            f()
                        }
                    });
                    g.bind("QueueChanged", f);
                    g.bind("Error", function (a, c) {
                        if (c.file) {
                            c.file.status = x.FAILED;
                            f();
                            a.state == x.STARTED && o(function () {
                                b.call(g)
                            }, 1)
                        }
                    });
                    g.bind("FileUploaded", function (a, c) {
                        c.status = x.DONE;
                        c.loaded = c.size;
                        a.trigger("UploadProgress", c);
                        o(function () {
                            b.call(g)
                        }, 1)
                    });
                    if (a.runtimes) {
                        p = [];
                        m = a.runtimes.split(/\s?,\s?/);
                        for (k = 0; k < m.length; k++) c[m[k]] && p.push(c[m[k]])
                    } else p = c;
                    d();
                    typeof a.init == "function" ?
                        a.init(g) : x.each(a.init, function (a, b) {
                            g.bind(b, a)
                        })
                },
                refresh: function () {
                    this.trigger("Refresh")
                },
                start: function () {
                    if (l.length && this.state != x.STARTED) {
                        this.state = x.STARTED;
                        this.trigger("StateChanged");
                        b.call(this)
                    }
                },
                stop: function () {
                    if (this.state != x.STOPPED) {
                        this.state = x.STOPPED;
                        this.trigger("CancelUpload");
                        this.trigger("StateChanged")
                    }
                },
                disableBrowse: function (a) {
                    p = a !== void 0 ? a : true;
                    this.trigger("DisableBrowse", p)
                },
                getFile: function (a) {
                    var b;
                    for (b = l.length - 1; b >= 0; b--) if (l[b].id === a) return l[b]
                },
                removeFile: function (a) {
                    var b;
                    for (b = l.length - 1; b >= 0; b--) if (l[b].id === a.id) return this.splice(b, 1)[0]
                },
                splice: function (a, b) {
                    var c;
                    c = l.splice(a === void 0 ? 0 : a, b === void 0 ? l.length : b);
                    this.trigger("FilesRemoved", c);
                    this.trigger("QueueChanged");
                    return c
                },
                trigger: function (a) {
                    var b = d[a.toLowerCase()], c, f;
                    if (b) {
                        f = Array.prototype.slice.call(arguments);
                        f[0] = this;
                        for (c = 0; c < b.length; c++) if (b[c].func.apply(b[c].scope, f) === false) return false
                    }
                    return true
                },
                hasEventListener: function (a) {
                    return !!d[a.toLowerCase()]
                },
                bind: function (a, b, c) {
                    var f, a = a.toLowerCase();
                    f = d[a] || [];
                    f.push({func: b, scope: c || this});
                    d[a] = f
                },
                unbind: function (a, b) {
                    var a = a.toLowerCase(), c = d[a], f;
                    if (c) {
                        if (b !== void 0) for (f = c.length - 1; f >= 0; f--) {
                            if (c[f].func === b) {
                                c.splice(f, 1);
                                break
                            }
                        } else c = [];
                        c.length || delete d[a]
                    }
                },
                unbindAll: function () {
                    var a = this;
                    x.each(d, function (b, c) {
                        a.unbind(c)
                    })
                },
                destroy: function () {
                    this.stop();
                    this.trigger("Destroy");
                    this.unbindAll()
                }
            })
        },
        File: function (a, b, c) {
            this.id = a;
            this.name = b;
            this.size = c;
            this.status = this.percent = this.loaded = 0
        },
        Runtime: function () {
            this.getFeatures = function () {
            };
            this.init = function () {
            }
        },
        QueueProgress: function () {
            var a = this;
            a.size = 0;
            a.loaded = 0;
            a.uploaded = 0;
            a.failed = 0;
            a.queued = 0;
            a.percent = 0;
            a.bytesPerSec = 0;
            a.reset = function () {
                a.size = a.loaded = a.uploaded = a.failed = a.queued = a.percent = a.bytesPerSec = 0
            }
        },
        runtimes: {}
    };
    window.plupload = x
})();
(function (a, d, b) {
    var c = {}, f = {};
    b.flash = {
        trigger: function (a, b, f) {
            setTimeout(function () {
                var d = c[a];
                d && d.trigger("Flash:" + b, f)
            }, 0)
        }
    };
    b.runtimes.Flash = b.addRuntime("flash", {
        getFeatures: function () {
            return {
                jpgresize: true,
                pngresize: true,
                maxWidth: 8091,
                maxHeight: 8091,
                chunks: true,
                progress: true,
                multipart: true,
                multi_selection: true
            }
        }, init: function (a, j) {
            function m() {
                return d.getElementById(a.id + "_flash")
            }

            function o() {
                l++ > 5E3 ? j({success: false}) : f[a.id] === false && setTimeout(o, 1)
            }

            var n, l = 0, p = d.body;
            try {
                n = navigator.plugins["Shockwave Flash"];
                n = n.description
            } catch (r) {
                try {
                    n = (new ActiveXObject("ShockwaveFlash.ShockwaveFlash")).GetVariable("$version")
                } catch (w) {
                    n = "0.0"
                }
            }
            n = n.match(/\d+/g);
            if (parseFloat(n[0] + "." + n[1]) < 10) j({success: false}); else {
                f[a.id] = false;
                c[a.id] = a;
                d.getElementById(a.settings.browse_button);
                n = d.createElement("div");
                n.id = a.id + "_flash_container";
                b.extend(n.style, {
                    position: "absolute",
                    top: "0px",
                    background: a.settings.shim_bgcolor || "transparent",
                    zIndex: 99,
                    width: "100%",
                    height: "100%"
                });
                n.className = "plupload flash";
                if (a.settings.container) {
                    p =
                        d.getElementById(a.settings.container);
                    if (b.getStyle(p, "position") === "static") p.style.position = "relative"
                }
                p.appendChild(n);
                var v, s;
                v = '<object id="' + a.id + '_flash" type="application/x-shockwave-flash" data="' + a.settings.flash_swf_url + '" ';
                b.ua.ie && (v = v + 'classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" ');
                v = v + ('width="100%" height="100%" style="outline:0"><param name="movie" value="' + a.settings.flash_swf_url + '" /><param name="flashvars" value="id=' + escape(a.id) + '" /><param name="wmode" value="transparent" /><param name="allowscriptaccess" value="always" /></object>');
                if (b.ua.ie) {
                    s = d.createElement("div");
                    n.appendChild(s);
                    s.outerHTML = v
                } else n.innerHTML = v;
                o();
                n = null;
                a.bind("Destroy", function (a) {
                    b.removeAllEvents(d.body, a.id);
                    delete f[a.id];
                    delete c[a.id];
                    (a = d.getElementById(a.id + "_flash_container")) && p.removeChild(a)
                });
                a.bind("Flash:Init", function () {
                    var c = {};
                    try {
                        m().setFileFilters(a.settings.filters, a.settings.multi_selection)
                    } catch (l) {
                        j({success: false});
                        return
                    }
                    if (!f[a.id]) {
                        f[a.id] = true;
                        a.bind("UploadFile", function (f, d) {
                            var l = f.settings, j = a.settings.resize || {};
                            m().uploadFile(c[d.id],
                                l.url, {
                                    name: d.target_name || d.name,
                                    mime: b.mimeTypes[d.name.replace(/^.+\.([^.]+)/, "$1").toLowerCase()] || "application/octet-stream",
                                    chunk_size: l.chunk_size,
                                    width: j.width,
                                    height: j.height,
                                    quality: j.quality,
                                    multipart: l.multipart,
                                    multipart_params: l.multipart_params || {},
                                    file_data_name: l.file_data_name,
                                    format: /\.(jpg|jpeg)$/i.test(d.name) ? "jpg" : "png",
                                    headers: l.headers,
                                    urlstream_upload: l.urlstream_upload
                                })
                        });
                        a.bind("CancelUpload", function () {
                            m().cancelUpload()
                        });
                        a.bind("Flash:UploadProcess", function (a, f) {
                            var d =
                                a.getFile(c[f.id]);
                            if (d.status != b.FAILED) {
                                d.loaded = f.loaded;
                                d.size = f.size;
                                a.trigger("UploadProgress", d)
                            }
                        });
                        a.bind("Flash:UploadChunkComplete", function (a, f) {
                            var d = a.getFile(c[f.id]);
                            a.trigger("ChunkUploaded", d, {chunk: f.chunk, chunks: f.chunks, response: f.text});
                            d.status !== b.FAILED && a.state !== b.STOPPED && m().uploadNextChunk();
                            if (f.chunk == f.chunks - 1) {
                                d.status = b.DONE;
                                a.trigger("FileUploaded", d, {response: f.text})
                            }
                        });
                        a.bind("Flash:SelectFiles", function (f, d) {
                            var l, j, p = [], n;
                            for (j = 0; j < d.length; j++) {
                                l = d[j];
                                n = b.guid();
                                c[n] = l.id;
                                c[l.id] = n;
                                p.push(new b.File(n, l.name, l.size))
                            }
                            p.length && a.trigger("FilesAdded", p)
                        });
                        a.bind("Flash:SecurityError", function (f, d) {
                            a.trigger("Error", {
                                code: b.SECURITY_ERROR,
                                message: b.translate("Security error."),
                                details: d.message,
                                file: a.getFile(c[d.id])
                            })
                        });
                        a.bind("Flash:GenericError", function (f, d) {
                            a.trigger("Error", {
                                code: b.GENERIC_ERROR,
                                message: b.translate("Generic error."),
                                details: d.message,
                                file: a.getFile(c[d.id])
                            })
                        });
                        a.bind("Flash:IOError", function (f, d) {
                            a.trigger("Error", {
                                code: b.IO_ERROR,
                                message: b.translate("IO error."), details: d.message, file: a.getFile(c[d.id])
                            })
                        });
                        a.bind("Flash:HttpStatus", function (b, f) {
                            a.trigger("HttpStatus", {
                                code: -1024,
                                message: "http status",
                                details: f.status,
                                file: a.getFile(c[f.id])
                            })
                        });
                        a.bind("Flash:ImageError", function (f, d) {
                            a.trigger("Error", {
                                code: parseInt(d.code, 10),
                                message: b.translate("Image error."),
                                file: a.getFile(c[d.id])
                            })
                        });
                        a.bind("Flash:StageEvent:rollOver", function (c) {
                            var f;
                            f = d.getElementById(a.settings.browse_button);
                            c = c.settings.browse_button_hover;
                            f &&
                            c && b.addClass(f, c)
                        });
                        a.bind("Flash:StageEvent:rollOut", function (c) {
                            var f;
                            f = d.getElementById(a.settings.browse_button);
                            c = c.settings.browse_button_hover;
                            f && c && b.removeClass(f, c)
                        });
                        a.bind("Flash:StageEvent:mouseDown", function (c) {
                            var f, l;
                            f = d.getElementById(a.settings.browse_button);
                            l = c.settings.browse_button_active;
                            if (f && l) {
                                b.addClass(f, l);
                                b.addEvent(d.body, "mouseup", function () {
                                    b.removeClass(f, l)
                                }, c.id)
                            }
                        });
                        a.bind("Flash:StageEvent:mouseUp", function (c) {
                            var f;
                            f = d.getElementById(a.settings.browse_button);
                            c = c.settings.browse_button_active;
                            f && c && b.removeClass(f, c)
                        });
                        a.bind("Flash:ExifData", function (b, f) {
                            a.trigger("ExifData", a.getFile(c[f.id]), f.data)
                        });
                        a.bind("Flash:GpsData", function (b, f) {
                            a.trigger("GpsData", a.getFile(c[f.id]), f.data)
                        });
                        a.bind("QueueChanged", function () {
                            a.refresh()
                        });
                        a.bind("FilesRemoved", function (a, b) {
                            var f;
                            for (f = 0; f < b.length; f++) m().removeFile(c[b[f].id])
                        });
                        a.bind("StateChanged", function () {
                            a.refresh()
                        });
                        a.bind("Refresh", function (c) {
                            var f, l;
                            m().setFileFilters(a.settings.filters, a.settings.multi_selection);
                            if (f = d.getElementById(c.settings.browse_button)) {
                                l = b.getPos(f, d.getElementById(c.settings.container));
                                f = b.getSize(f);
                                b.extend(d.getElementById(c.id + "_flash_container").style, {
                                    top: l.y + "px",
                                    left: l.x + "px",
                                    width: f.w + "px",
                                    height: f.h + "px"
                                })
                            }
                        });
                        a.bind("DisableBrowse", function (a, b) {
                            m().disableBrowse(b)
                        });
                        j({success: true})
                    }
                })
            }
        }
    })
})(window, document, plupload);
(function (a) {
    var d, b, c, f, g, j, m, o, n, l, p = 0, r = {}, w = [], v = 0, s = {}, x = [], B = null, E = new Image,
        y = /\.(jpg|gif|png|bmp|jpeg)(.*)?$/i, D = /[^\.]\.(swf)\s*$/i, t, A = 1, J = 0, C = "", q, u, k = false,
        K = a.extend(a("<div/>")[0], {prop: 0}), z = a.browser.msie && a.browser.version < 7 && !window.XMLHttpRequest,
        O = function () {
            b.hide();
            E.onerror = E.onload = null;
            B && B.abort();
            d.empty()
        }, S = function () {
            if (false === r.onError(w, p, r)) {
                b.hide();
                k = false
            } else {
                r.titleShow = false;
                r.width = "auto";
                r.height = "auto";
                d.html('<p id="fancybox-error">The requested content cannot be loaded.<br />Please try again later.</p>');
                T()
            }
        }, L = function () {
            var c = w[p], f, l, n, m, q, o;
            O();
            r = a.extend({}, a.fn.fancybox.defaults, typeof a(c).data("fancybox") == "undefined" ? r : a(c).data("fancybox"));
            o = r.onStart(w, p, r);
            if (o === false) k = false; else {
                typeof o == "object" && (r = a.extend(r, o));
                n = r.title || (c.nodeName ? a(c).attr("title") : c.title) || "";
                if (c.nodeName && !r.orig) r.orig = a(c).children("img:first").length ? a(c).children("img:first") : a(c);
                n === "" && (r.orig && r.titleFromAlt) && (n = r.orig.attr("alt"));
                f = r.href || (c.nodeName ? a(c).attr("href") : c.href) || null;
                if (/^(?:javascript)/i.test(f) ||
                    f == "#") f = null;
                if (r.type) {
                    l = r.type;
                    if (!f) f = r.content
                } else r.content ? l = "html" : f && (l = f.match(y) ? "image" : f.match(D) ? "swf" : a(c).hasClass("iframe") ? "iframe" : f.indexOf("#") === 0 ? "inline" : "ajax");
                if (l) {
                    if (l == "inline") {
                        c = f.substr(f.indexOf("#"));
                        l = a(c).length > 0 ? "inline" : "ajax"
                    }
                    r.extraClass ? g.addClass(r.extraClass) : g.removeAttr("class");
                    r.type = l;
                    r.href = f;
                    r.title = n;
                    if (r.autoDimensions) if (r.type == "html" || r.type == "inline" || r.type == "ajax") {
                        r.width = "auto";
                        r.height = "auto"
                    } else r.autoDimensions = false;
                    if (r.modal) {
                        r.overlayShow =
                            true;
                        r.hideOnOverlayClick = false;
                        r.hideOnContentClick = false;
                        r.enableEscapeButton = false;
                        r.showCloseButton = false
                    }
                    r.padding = parseInt(r.padding, 10);
                    r.margin = parseInt(r.margin, 10);
                    d.css("padding", r.padding + r.margin);
                    a(".fancybox-inline-tmp").unbind("fancybox-cancel").bind("fancybox-change", function () {
                        a(this).replaceWith(j.children())
                    });
                    switch (l) {
                        case "html":
                            d.html(r.content);
                            T();
                            break;
                        case "inline":
                            if (a(c).parent().is("#fancybox-content") === true) {
                                k = false;
                                break
                            }
                            a('<div class="fancybox-inline-tmp" />').hide().insertBefore(a(c)).bind("fancybox-cleanup",
                                function () {
                                    a(this).replaceWith(j.children())
                                }).bind("fancybox-cancel", function () {
                                a(this).replaceWith(d.children())
                            });
                            a(c).appendTo(d);
                            T();
                            break;
                        case "image":
                            k = false;
                            a.fancybox.showActivity();
                            E = new Image;
                            E.onerror = function () {
                                S()
                            };
                            E.onload = function () {
                                k = true;
                                E.onerror = E.onload = null;
                                r.width = E.width;
                                r.height = E.height;
                                a("<img />").attr({id: "fancybox-img", src: E.src, alt: r.title}).appendTo(d);
                                H()
                            };
                            E.src = f;
                            break;
                        case "swf":
                            r.scrolling = "no";
                            m = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="' +
                                r.width + '" height="' + r.height + '"><param name="movie" value="' + f + '"></param>';
                            q = "";
                            a.each(r.swf, function (a, b) {
                                m = m + ('<param name="' + a + '" value="' + b + '"></param>');
                                q = q + (" " + a + '="' + b + '"')
                            });
                            m = m + ('<embed src="' + f + '" type="application/x-shockwave-flash" width="' + r.width + '" height="' + r.height + '"' + q + "></embed></object>");
                            d.html(m);
                            T();
                            break;
                        case "ajax":
                            k = false;
                            a.fancybox.showActivity();
                            r.ajax.win = r.ajax.success;
                            B = a.ajax(a.extend({}, r.ajax, {
                                url: f, data: r.ajax.data || {}, error: function (a) {
                                    a.status > 0 && S()
                                }, success: function (a,
                                                      c, g) {
                                    if ((typeof g == "object" ? g : B).status == 200) {
                                        if (typeof r.ajax.win == "function") {
                                            o = r.ajax.win(f, a, c, g);
                                            if (o === false) {
                                                b.hide();
                                                return
                                            }
                                            if (typeof o == "string" || typeof o == "object") a = o
                                        }
                                        d.html(a);
                                        T()
                                    }
                                }
                            }));
                            break;
                        case "iframe":
                            H()
                    }
                } else S()
            }
        }, T = function () {
            var b = r.width, c = r.height,
                b = b.toString().indexOf("%") > -1 ? parseInt((a(window).width() - r.margin * 2) * parseFloat(b) / 100, 10) + "px" : b == "auto" ? "auto" : b + "px",
                c = c.toString().indexOf("%") > -1 ? parseInt((a(window).height() - r.margin * 2) * parseFloat(c) / 100, 10) + "px" : c == "auto" ?
                    "auto" : c + "px";
            d.wrapInner('<div style="width:' + b + ";height:" + c + ";overflow: " + (r.scrolling == "auto" ? "auto" : r.scrolling == "yes" ? "scroll" : "hidden") + ';position:relative;"></div>');
            r.width = d.width();
            r.height = d.height();
            H()
        }, H = function () {
            var A, t;
            b.hide();
            if (f.is(":visible") && false === s.onCleanup(x, v, s)) {
                a.event.trigger("fancybox-cancel");
                k = false
            } else {
                k = true;
                a(j.add(c)).unbind();
                a(window).unbind("resize.fb scroll.fb");
                a(document).unbind("keydown.fb");
                f.is(":visible") && s.titlePosition !== "outside" && f.css("height",
                    f.height());
                x = w;
                v = p;
                s = r;
                if (s.overlayShow) {
                    c.css({
                        "background-color": s.overlayColor,
                        opacity: s.overlayOpacity,
                        cursor: s.hideOnOverlayClick ? "pointer" : "auto",
                        height: a(document).height()
                    }).on("mousemove", function (a) {
                        a.stopPropagation();
                        a.preventDefault()
                    });
                    if (!c.is(":visible")) {
                        if (z) a("select:not(#fancybox-tmp select)").filter(function () {
                            return this.style.visibility !== "hidden"
                        }).css({visibility: "hidden"}).one("fancybox-cleanup", function () {
                            this.style.visibility = "inherit"
                        });
                        c.show()
                    }
                } else c.hide();
                A = Q();
                var y = {}, B = s.autoScale, D = s.padding * 2;
                y.width = s.width.toString().indexOf("%") > -1 ? parseInt(A[0] * parseFloat(s.width) / 100, 10) : s.width + D;
                y.height = s.height.toString().indexOf("%") > -1 ? parseInt(A[1] * parseFloat(s.height) / 100, 10) : s.height + D;
                if (B && (y.width > A[0] || y.height > A[1])) if (r.type == "image" || r.type == "swf") {
                    B = s.width / s.height;
                    if (y.width > A[0]) {
                        y.width = A[0];
                        y.height = parseInt((y.width - D) / B + D, 10)
                    }
                    if (y.height > A[1]) {
                        y.height = A[1];
                        y.width = parseInt((y.height - D) * B + D, 10)
                    }
                } else {
                    y.width = Math.min(y.width, A[0]);
                    y.height =
                        Math.min(y.height, A[1])
                }
                y.top = parseInt(Math.max(A[3] - 20, A[3] + (A[1] - y.height - 40) * 0.5), 10);
                y.left = parseInt(Math.max(A[2] - 20, A[2] + (A[0] - y.width - 40) * 0.5), 10);
                u = y;
                C = s.title || "";
                J = 0;
                o.empty().removeAttr("style").removeClass();
                if (s.titleShow !== false) if ((C = a.isFunction(s.titleFormat) ? s.titleFormat(C, x, v, s) : C && C.length ? s.titlePosition == "float" ? '<table id="fancybox-title-float-wrap" cellpadding="0" cellspacing="0"><tr><td id="fancybox-title-float-left"></td><td id="fancybox-title-float-main">' + C + '</td><td id="fancybox-title-float-right"></td></tr></table>' :
                        '<div id="fancybox-title-' + s.titlePosition + '">' + C + "</div>" : false) && C !== "") {
                    o.addClass("fancybox-title-" + s.titlePosition).html(C).appendTo("body").show();
                    switch (s.titlePosition) {
                        case "inside":
                            o.css({width: u.width - s.padding * 2, marginLeft: s.padding, marginRight: s.padding});
                            J = o.outerHeight(true);
                            o.appendTo(g);
                            u.height = u.height + J;
                            break;
                        case "over":
                            o.css({marginLeft: s.padding, width: u.width - s.padding * 2, bottom: s.padding}).appendTo(g);
                            break;
                        case "float":
                            o.css("left", parseInt((o.width() - u.width - 40) / 2, 10) * -1).appendTo(f);
                            break;
                        default:
                            o.css({
                                width: u.width - s.padding * 2,
                                paddingLeft: s.padding,
                                paddingRight: s.padding
                            }).appendTo(f)
                    }
                }
                o.hide();
                if (f.is(":visible")) {
                    a(m.add(n).add(l)).hide();
                    A = f.position();
                    q = {top: A.top, left: A.left, width: f.width(), height: f.height()};
                    t = q.width == u.width && q.height == u.height;
                    j.fadeTo(s.changeFade, 0.3, function () {
                        var b = function () {
                            j.html(d.contents()).fadeTo(s.changeFade, 1, N)
                        };
                        a.event.trigger("fancybox-change");
                        j.empty().removeAttr("filter").css({
                            "border-width": s.padding, width: u.width - s.padding * 2, height: r.autoDimensions ?
                                "auto" : u.height - J - s.padding * 2
                        });
                        if (t) b(); else {
                            K.prop = 0;
                            a(K).animate({prop: 1}, {
                                duration: s.changeSpeed,
                                easing: s.easingChange,
                                step: aa,
                                complete: b
                            })
                        }
                    })
                } else {
                    f.removeAttr("style");
                    j.css("border-width", s.padding);
                    if (s.transitionIn == "elastic") {
                        q = W();
                        j.html(d.contents());
                        f.show();
                        if (s.opacity) u.opacity = 0;
                        K.prop = 0;
                        a(K).animate({prop: 1}, {duration: s.speedIn, easing: s.easingIn, step: aa, complete: N})
                    } else {
                        s.titlePosition == "inside" && J > 0 && o.show();
                        j.css({
                            width: u.width - s.padding * 2, height: r.autoDimensions ? "auto" : u.height -
                                J - s.padding * 2
                        }).html(d.contents());
                        f.css(u).fadeIn(s.transitionIn == "none" ? 0 : s.speedIn, N)
                    }
                }
            }
        }, N = function () {
            if (!a.support.opacity) {
                j.get(0).style.removeAttribute("filter");
                f.get(0).style.removeAttribute("filter")
            }
            r.autoDimensions && j.css("height", "auto");
            f.css("height", "auto");
            C && C.length && o.show();
            s.showCloseButton && m.show();
            (s.enableEscapeButton || s.enableKeyboardNav) && a(document).bind("keydown.fb", function (b) {
                if (b.keyCode == 27 && s.enableEscapeButton) {
                    b.preventDefault();
                    a.fancybox.close()
                } else if ((b.keyCode ==
                        37 || b.keyCode == 39) && s.enableKeyboardNav && b.target.tagName !== "INPUT" && b.target.tagName !== "TEXTAREA" && b.target.tagName !== "SELECT") {
                    b.preventDefault();
                    a.fancybox[b.keyCode == 37 ? "prev" : "next"]()
                }
            });
            if (s.showNavArrows) {
                (s.cyclic && x.length > 1 || v !== 0) && n.show();
                (s.cyclic && x.length > 1 || v != x.length - 1) && l.show()
            } else {
                n.hide();
                l.hide()
            }
            s.hideOnContentClick && j.bind("click", a.fancybox.close);
            s.hideOnOverlayClick && c.bind("click", a.fancybox.close);
            a(window).bind("resize.fb", a.fancybox.resize);
            s.centerOnScroll && a(window).bind("scroll.fb",
                a.fancybox.center);
            s.type == "iframe" && a('<iframe id="fancybox-frame" name="fancybox-frame' + (new Date).getTime() + '" frameborder="0" hspace="0" ' + (a.browser.msie ? 'allowtransparency="true""' : "") + ' scrolling="' + r.scrolling + '" src="' + s.href + '"></iframe>').appendTo(j);
            f.show();
            k = false;
            a.fancybox.center();
            s.onComplete(x, v, s);
            var b, d;
            if (x.length - 1 > v) {
                b = x[v + 1].href;
                if (typeof b !== "undefined" && b.match(y)) {
                    d = new Image;
                    d.src = b
                }
            }
            if (v > 0) {
                b = x[v - 1].href;
                if (typeof b !== "undefined" && b.match(y)) {
                    d = new Image;
                    d.src = b
                }
            }
        },
        aa = function (a) {
            var b = {
                width: parseInt(q.width + (u.width - q.width) * a, 10),
                height: parseInt(q.height + (u.height - q.height) * a, 10),
                top: parseInt(q.top + (u.top - q.top) * a, 10),
                left: parseInt(q.left + (u.left - q.left) * a, 10)
            };
            if (typeof u.opacity !== "undefined") b.opacity = a < 0.5 ? 0.5 : a;
            f.css(b);
            j.css({width: b.width - s.padding * 2, height: b.height - J * a - s.padding * 2})
        }, Q = function () {
            return [a(window).width() - s.margin * 2, a(window).height() - s.margin * 2, a(document).scrollLeft() + s.margin, a(document).scrollTop() + s.margin]
        }, W = function () {
            var b =
                r.orig ? a(r.orig) : false, c = {};
            if (b && b.length) {
                c = b.offset();
                c.top = c.top + (parseInt(b.css("paddingTop"), 10) || 0);
                c.left = c.left + (parseInt(b.css("paddingLeft"), 10) || 0);
                c.top = c.top + (parseInt(b.css("border-top-width"), 10) || 0);
                c.left = c.left + (parseInt(b.css("border-left-width"), 10) || 0);
                c.width = b.width();
                c.height = b.height();
                c = {
                    width: c.width + s.padding * 2,
                    height: c.height + s.padding * 2,
                    top: c.top - s.padding - 20,
                    left: c.left - s.padding - 20
                }
            } else {
                b = Q();
                c = {
                    width: s.padding * 2, height: s.padding * 2, top: parseInt(b[3] + b[1] * 0.5, 10),
                    left: parseInt(b[2] + b[0] * 0.5, 10)
                }
            }
            return c
        }, ya = function () {
            if (b.is(":visible")) {
                a("div", b).css("top", A * -40 + "px");
                A = (A + 1) % 12
            } else clearInterval(t)
        };
    a.fn.fancybox = function (b) {
        if (!a(this).length) return this;
        a(this).data("fancybox", a.extend({}, b, a.metadata ? a(this).metadata() : {})).unbind("click.fb").bind("click.fb", function (b) {
            b.preventDefault();
            if (!k) {
                k = true;
                a(this).blur();
                w = [];
                p = 0;
                b = a(this).attr("rel") || "";
                if (!b || b == "" || b === "nofollow") w.push(this); else {
                    w = a("a[rel=" + b + "], area[rel=" + b + "]");
                    p = w.index(this)
                }
                L()
            }
        });
        return this
    };
    a.fancybox = function (b, c) {
        var f;
        if (!k) {
            k = true;
            f = typeof c !== "undefined" ? c : {};
            w = [];
            p = parseInt(f.index, 10) || 0;
            if (a.isArray(b)) {
                for (var d = 0, g = b.length; d < g; d++) typeof b[d] == "object" ? a(b[d]).data("fancybox", a.extend({}, f, b[d])) : b[d] = a({}).data("fancybox", a.extend({content: b[d]}, f));
                w = jQuery.merge(w, b)
            } else {
                typeof b == "object" ? a(b).data("fancybox", a.extend({}, f, b)) : b = a({}).data("fancybox", a.extend({content: b}, f));
                w.push(b)
            }
            if (p > w.length || p < 0) p = 0;
            L()
        }
    };
    a.fancybox.showActivity = function () {
        clearInterval(t);
        b.show();
        t = setInterval(ya, 66)
    };
    a.fancybox.hideActivity = function () {
        b.hide()
    };
    a.fancybox.next = function () {
        return a.fancybox.pos(v + 1)
    };
    a.fancybox.prev = function () {
        return a.fancybox.pos(v - 1)
    };
    a.fancybox.pos = function (a) {
        if (!k) {
            a = parseInt(a);
            w = x;
            if (a > -1 && a < x.length) {
                p = a;
                L()
            } else if (s.cyclic && x.length > 1) {
                p = a >= x.length ? 0 : x.length - 1;
                L()
            }
        }
    };
    a.fancybox.cancel = function () {
        if (!k) {
            k = true;
            a.event.trigger("fancybox-cancel");
            O();
            r.onCancel(w, p, r);
            k = false
        }
    };
    a.fancybox.close = function () {
        function b() {
            c.hide();
            o.empty().hide();
            f.hide();
            a.event.trigger("fancybox-cleanup");
            j.empty();
            s.onClosed(x, v, s);
            x = r = [];
            v = p = 0;
            s = r = {};
            k = false
        }

        if (!k && !f.is(":hidden")) {
            k = true;
            if (s && false === s.onCleanup(x, v, s)) k = false; else {
                O();
                a(m.add(n).add(l)).hide();
                a(j.add(c)).unbind();
                a(window).unbind("resize.fb scroll.fb");
                a(document).unbind("keydown.fb");
                j.find("iframe").attr("src", z && /^https/i.test(window.location.href || "") ? "javascript:void(false)" : "about:blank");
                s.titlePosition !== "inside" && o.empty();
                f.stop();
                if (s.transitionOut == "elastic") {
                    q = W();
                    var d =
                        f.position();
                    u = {top: d.top, left: d.left, width: f.width(), height: f.height()};
                    if (s.opacity) u.opacity = 1;
                    o.empty().hide();
                    K.prop = 1;
                    a(K).animate({prop: 0}, {duration: s.speedOut, easing: s.easingOut, step: aa, complete: b})
                } else f.fadeOut(s.transitionOut == "none" ? 0 : s.speedOut, b)
            }
        }
    };
    a.fancybox.resize = function () {
        c.is(":visible") && c.css("height", a(document).height());
        a.fancybox.center(true)
    };
    a.fancybox.center = function (a) {
        var b, c;
        if (!k) {
            c = a === true ? 1 : 0;
            b = Q();
            if (c || !(f.width() > b[0] || f.height() > b[1])) f.stop().animate({
                top: parseInt(Math.max(b[3] -
                    20, b[3] + (b[1] - j.height() - 40) * 0.5 - s.padding)),
                left: parseInt(Math.max(b[2] - 20, b[2] + (b[0] - j.width() - 40) * 0.5 - s.padding))
            }, typeof a == "number" ? a : 200)
        }
    };
    a.fancybox.init = function () {
        if (!a("#fancybox-wrap").length) {
            a("body").append(d = a('<div id="fancybox-tmp"></div>'), b = a('<div id="fancybox-loading"><div></div></div>'), c = a('<div id="fancybox-overlay"></div>'), f = a('<div id="fancybox-wrap"></div>'));
            g = a('<div id="fancybox-outer"></div>').append('<div class="fancybox-bg" id="fancybox-bg-n"></div><div class="fancybox-bg" id="fancybox-bg-ne"></div><div class="fancybox-bg" id="fancybox-bg-e"></div><div class="fancybox-bg" id="fancybox-bg-se"></div><div class="fancybox-bg" id="fancybox-bg-s"></div><div class="fancybox-bg" id="fancybox-bg-sw"></div><div class="fancybox-bg" id="fancybox-bg-w"></div><div class="fancybox-bg" id="fancybox-bg-nw"></div>').appendTo(f);
            g.append(j = a('<div id="fancybox-content"></div>'), m = a('<a id="fancybox-close"></a>'), o = a('<div id="fancybox-title"></div>'), n = a('<a href="javascript:;" id="fancybox-left"><span class="fancy-ico" id="fancybox-left-ico"></span></a>'), l = a('<a href="javascript:;" id="fancybox-right"><span class="fancy-ico" id="fancybox-right-ico"></span></a>'));
            m.click(a.fancybox.close);
            b.click(a.fancybox.cancel);
            n.click(function (b) {
                b.preventDefault();
                a.fancybox.prev()
            });
            l.click(function (b) {
                b.preventDefault();
                a.fancybox.next()
            });
            a.support.opacity || f.addClass("fancybox-ie");
            if (z) {
                b.addClass("fancybox-ie6");
                f.addClass("fancybox-ie6");
                a('<iframe id="fancybox-hide-sel-frame" src="' + (/^https/i.test(window.location.href || "") ? "javascript:void(false)" : "about:blank") + '" scrolling="no" border="0" frameborder="0" tabindex="-1"></iframe>').prependTo(g)
            }
        }
    };
    a.fn.fancybox.defaults = {
        padding: 10,
        margin: 40,
        opacity: false,
        modal: false,
        cyclic: false,
        scrolling: "auto",
        width: 560,
        height: 340,
        autoScale: true,
        autoDimensions: true,
        centerOnScroll: false,
        ajax: {},
        swf: {wmode: "transparent"},
        hideOnOverlayClick: true,
        hideOnContentClick: false,
        overlayShow: true,
        overlayOpacity: 0.7,
        overlayColor: "#000",
        titleShow: true,
        titlePosition: "float",
        titleFormat: null,
        titleFromAlt: false,
        transitionIn: "none",
        transitionOut: "none",
        speedIn: 300,
        speedOut: 300,
        changeSpeed: 100,
        changeFade: "fast",
        easingIn: "swing",
        easingOut: "swing",
        showCloseButton: true,
        showNavArrows: true,
        enableEscapeButton: false,
        enableKeyboardNav: true,
        extraClass: "",
        onStart: function () {
        },
        onCancel: function () {
        },
        onComplete: function () {
        },
        onCleanup: function () {
        },
        onClosed: function () {
        },
        onError: function () {
        }
    };
    a(document).ready(function () {
        a.fancybox.init()
    })
})(jQuery);
$.fn.valid = function () {
    if (!this.length) return true;
    var a = ["minlen", "maxlen"], d = {
        minlen: function (a, b) {
            if (!b) return true;
            var c = $.getByteLen(a);
            return !c && b || c < b ? false : true
        }, maxlen: function (a, b) {
            var c = $.getByteLen(a);
            return !b || !c ? true : c > b ? false : true
        }
    }, b = this.eq(0), c = b.val(), f = true, g = {};
    $.each(a, function (c) {
        c = a[c];
        g[c] = b.attr(c)
    });
    $.each(g, function (a, b) {
        var g = d[a];
        if (g && !g(c, b)) return f = false
    });
    return f
};
(function () {
    var a = {}, d = $(window);
    $.fn.showErrorTips = function (b) {
        this.each(function () {
            var c = $(this), f = b || c.data("error-tip"), g;
            if (f) {
                var j = c.data("form-error-id");
                if (!j || j < 1) {
                    j = 1;
                    g = $('<div class="form-tips-error">').text(f).appendTo("body");
                    c.data("form-error-id", j).on("keyup", function () {
                    });
                    a[j] = g
                } else g = a[j];
                g.outerWidth();
                f = g.outerHeight();
                c = c.offset();
                d.scrollLeft();
                d.scrollTop();
                g.css({position: "absolute", left: c.left, top: c.top - f}).show();
                setTimeout(function () {
                    g.fadeOut(300)
                }, 3E3)
            }
        });
        return this
    };
    $.fn.textCounter = function () {
        if (!this.length) return this;
        this.each(function () {
            var a = $(this), c = parseInt(a.attr("maxlen")), f, g, j;
            if (!(isNaN(c) || c <= 0)) {
                var c = Math.ceil(c / 2), m = a.data("form-info-id");
                if (!m) {
                    f = $('<div class="form-tips-info" style="width:60px;text-align:center"><span></span>/' + c + "</div>").appendTo("body").data("form-info-id", 1);
                    g = f.find("span");
                    a.on("focus blur", function (m) {
                        clearInterval(j);
                        if (m.type == "focus") {
                            var m = f.outerHeight(), n = f.outerWidth(), l = a.offset(), p = a.outerWidth();
                            d.scrollLeft();
                            d.scrollTop();
                            f.css({position: "absolute", left: l.left + p - n, top: l.top - m}).show();
                            j = setInterval(function () {
                                var d = a.val(), d = Math.ceil($.getChsLen(d));
                                g.text(d);
                                d > c ? f.addClass("form-tips-error") : f.removeClass("form-tips-error")
                            }, 20)
                        } else f.hide()
                    })
                }
            }
        });
        return this
    }
})();
(function (a, d, b) {
    var c = Math, f = d.createElement("div").style, g = "ontouchstart" in a, j, m = b(d);
    "webkitTransform" in f && (j = true);
    a.ScrollbarBase = Backbone.View.extend({
        initialize: function (a) {
            Backbone.View.prototype.initialize.call(this, a);
            this._scrollPosition = 0;
            this._init()
        }, _init: function () {
            var a = this, c, f = a.$el.css({overflow: "hidden", "overflow-y": "hidden"});
            a.$content = b(".scroller", f);
            c = a.$bar = b('<div class="scrollbar" unselectable="on"><div class="track" unselectable="on"></div><div class="thumb" unselectable="on"></div></div>');
            var d = f.css("position");
            (!d || d === "static") && f.css("position", "relative");
            d = a.$content.css("position");
            (!d || d === "static") && a.$content.css("position", "relative");
            a._onMouseWheel = function (b, c) {
                b.preventDefault();
                a._scroll(c)
            };
            f.append(c).bind("mousewheel", a._onMouseWheel);
            if (g) {
                var j = null, n = null;
                a._onTouchMove = function (b) {
                    b.preventDefault();
                    b = b.originalEvent.touches[0];
                    if (j === null) {
                        j = b.pageY;
                        n = b.pageX
                    }
                    a._moveThumb({pageY: j, pageX: n}, {pageY: b.pageY, pageX: b.pageX});
                    j = b.pageY;
                    n = b.pageX
                };
                a._onTouchStart =
                    function (a) {
                        a.preventDefault()
                    };
                a._onTouchEnd = function () {
                    n = j = null
                };
                a.$content.on("touchstart", a._onTouchStart).on("touchmove", a._onTouchMove).on("touchend", a._onTouchEnd)
            }
            a.$track = b(".track", c).on("click", function (b) {
                a._onClickTrack(b)
            });
            var o;
            a.$thumb = b(".thumb", c).on("mousedown", function (b) {
                b.stopPropagation();
                b.preventDefault();
                o = b;
                m.on("mousemove.scroll", function (b) {
                    b.preventDefault();
                    a._moveThumb(b, o);
                    o = b
                }).on("mouseup.scroll", function () {
                    m.off("mousemove.scroll mouseup.scroll");
                    o = null
                })
            });
            a.refresh()
        },
        disable: function () {
            this.disabled = true;
            this.scrollTo(0);
            this.$bar.hide();
            this.$el.unbind("mousewheel", this._onMouseWheel);
            this.$content.off("touchstart", this._onTouchStart).off("touchmove", this._onTouchMove).off("touchend", this._onTouchEnd);
            return this
        }, _enable: function () {
            if (this.disabled) {
                this.disabled = false;
                this.$bar.show();
                this.$el.bind("mousewheel", this._onMouseWheel);
                this.$content.on("touchstart", this._onTouchStart).on("touchmove", this._onTouchMove).on("touchend", this._onTouchEnd)
            }
        }, isActive: function () {
            return this._contentWidth >
            this._wrapperWidth ? true : false
        }, refresh: function (a) {
            a || (this._contentWidth > this._wrapperWidth ? this._enable() : this.disable());
            this._maxPosition = this._contentWidth - this._wrapperWidth + this._wrapperPadding;
            this._thumbWidth = c.floor(this._wrapperWidth / this._contentWidth * this._wrapperWidth);
            this._maxThumbPosition = this._wrapperWidth - this._thumbWidth;
            this._positionThumb()
        }, scrollTo: function (a) {
            var b = this._maxPosition;
            a <= 0 ? a = 0 : a >= b && (a = b);
            this._scrollContent(-a);
            this._positionThumb();
            return this
        }, _onClickTrack: function () {
        },
        _moveThumb: function () {
        }, _scroll: function (a, b) {
            var f;
            f = b ? this._wrapperWidth : 50;
            f = a < 0 ? this._scrollPosition - f : this._scrollPosition + f;
            f >= 0 && (f = 0);
            this.scrollTo(c.abs(f))
        }, _scrollContent: function () {
        }, _positionContent: function () {
        }, _positionThumb: function () {
        }
    });
    ScrollbarBase.need = function () {
        return !j
    };
    var o = ScrollbarBase.extend({
        initialize: function (a) {
            ScrollbarBase.prototype.initialize.call(this, a);
            this.$bar.addClass("scrollbar-h")
        }, _onClickTrack: function (a) {
            var b = this.$thumb.offset();
            a.pageX < b.left ? this._scroll(1,
                true) : this._scroll(-1, true)
        }, _scrollContent: function (a) {
            this._scrollPosition = a;
            this.$content.css("left", a)
        }, _moveThumb: function (a, b) {
            var f = a.pageX - b.pageX, d = this.$thumb.position(),
                f = c.ceil(c.max(c.min(d.left + f, this._maxThumbPosition), 0));
            this.$thumb.css("left", f);
            this._positionContent(f)
        }, _positionContent: function (a) {
            if (a === void 0) a = this.$thumb.position().left;
            a = -c.ceil(a / this._maxThumbPosition * this._maxPosition);
            this._scrollContent(a)
        }, _positionThumb: function () {
            var a = c.abs(c.min(c.ceil(this._scrollPosition /
                this._maxPosition * this._maxThumbPosition), this._maxThumbPosition));
            this.$thumb.css("left", a)
        }, refresh: function (a) {
            this._wrapperWidth = this.$el.innerWidth();
            this._wrapperPadding = this._wrapperWidth - this.$el.width();
            this._contentWidth = this.$content.outerWidth();
            ScrollbarBase.prototype.refresh.call(this, a);
            this.$thumb.width(this._thumbWidth);
            return this
        }
    }), n = ScrollbarBase.extend({
        initialize: function (a) {
            ScrollbarBase.prototype.initialize.call(this, a);
            this.$bar.addClass("scrollbar-v")
        }, refresh: function (a) {
            this._wrapperWidth =
                this.$el.innerHeight();
            this._wrapperPadding = this._wrapperWidth - this.$el.height();
            this._contentWidth = this.$content.height();
            ScrollbarBase.prototype.refresh.call(this, a);
            this.$bar.height(this._wrapperWidth);
            this.$thumb.height(this._thumbWidth);
            return this
        }, _onClickTrack: function (a) {
            var b = this.$thumb.offset();
            a.pageY < b.top ? this._scroll(1, true) : this._scroll(-1, true)
        }, _scrollContent: function (a) {
            this._scrollPosition = a;
            this.$content.css("top", a)
        }, _moveThumb: function (a, b) {
            var f = a.pageY - b.pageY, d = this.$thumb.position(),
                f = c.ceil(c.max(c.min(d.top + f, this._maxThumbPosition), 0));
            this.$thumb.css("top", f);
            this._positionContent(f)
        }, _positionContent: function (a) {
            if (a === void 0) a = this.$thumb.position().top;
            a = -c.ceil(a / this._maxThumbPosition * this._maxPosition);
            this._scrollContent(a)
        }, _positionThumb: function () {
            var a = c.abs(c.min(c.ceil(this._scrollPosition / this._maxPosition * this._maxThumbPosition), this._maxThumbPosition));
            this.$thumb.css("top", a)
        }
    });
    b.fn.scrollbar = function (a) {
        if (!this.length) return this;
        var a = a || {}, b = a.type ||
            "ver";
        if (this.length == 1) {
            a = this[0];
            if (a.scrollbar) return a.scrollbar
        }
        this.each(function () {
            b === "hor" ? this.scrollbar = new o({el: this}) : b === "ver" && (this.scrollbar = new n({el: this}))
        });
        return this
    }
})(window, document, jQuery);
(function (a) {
    var d;
    a.fn.textareaAutosize = function (b) {
        b = b || {};
        return this.each(function () {
            var c, f, g, j = a(this);
            j.focus(function () {
                d || (d = a('<pre style="position:absolute;left:-9999px;top:0;word-wrap:break-word;height:auto;">').appendTo("body"));
                c = d.removeAttr("class");
                b.className && c.addClass(b.className);
                c.width(j.width());
                f = setInterval(function () {
                    c.html(j.val());
                    var a = c.height();
                    if (g !== a) {
                        g = a;
                        j.height(g)
                    }
                }, 30)
            }).blur(function () {
                clearInterval(f)
            })
        })
    }
})(jQuery);
(function (a) {
    var d = 0;
    a.fn.extend({
        bubbletip: function (b, c) {
            function f() {
                var a;
                if (!w) {
                    w = true;
                    v && s.stop(true, false);
                    n.calculateOnShow && j();
                    if (n.positionAt.match(/^element|body$/i)) if (n.deltaDirection.match(/^up|down$/i)) {
                        v || s.css("top", parseInt(l.top + l.delta) + "px");
                        a = {top: l.top + "px"}
                    } else {
                        v || s.css("left", parseInt(l.left + l.delta) + "px");
                        a = {left: l.left + "px"}
                    } else if (n.deltaDirection.match(/^up|down$/i)) {
                        if (!v) {
                            l.mouseTop = e.pageY + l.top;
                            s.css({
                                top: parseInt(l.mouseTop + l.delta) + "px", left: parseInt(e.pageX - s.width() /
                                    2) + "px"
                            })
                        }
                        a = {top: l.mouseTop + "px"}
                    } else {
                        if (!v) {
                            l.mouseLeft = e.pageX + l.left;
                            s.css({
                                left: parseInt(l.mouseLeft + l.delta) + "px",
                                top: parseInt(e.pageY - s.height() / 2) + "px"
                            })
                        }
                        a = {left: l.left + "px"}
                    }
                    v = false;
                    s.show();
                    s.animate(a, n.animationDuration, n.animationEasing, function () {
                        w = true
                    })
                }
            }

            function g() {
                var a;
                w = false;
                v = true;
                a = n.positionAt.match(/^element|body$/i) ? n.deltaDirection.match(/^up|down$/i) ? {top: parseInt(l.top - l.delta) + "px"} : {left: parseInt(l.left - l.delta) + "px"} : n.deltaDirection.match(/^up|down$/i) ? {
                    top: parseInt(l.mouseTop -
                        l.delta) + "px"
                } : {left: parseInt(l.mouseLeft - l.delta) + "px"};
                s.animate(a, n.animationDuration, n.animationEasing, function () {
                    s.hide();
                    v = false
                })
            }

            function j() {
                if (n.positionAt.match(/^element$/i)) {
                    var a = n.positionAtElement.offset();
                    if (n.deltaDirection.match(/^up$/i)) {
                        l.top = a.top + n.offsetTop - s.outerHeight();
                        l.left = a.left + n.offsetLeft + (n.positionAtElement.outerWidth() - s.outerWidth()) / 2;
                        l.delta = n.deltaPosition
                    } else if (n.deltaDirection.match(/^down$/i)) {
                        l.top = a.top + n.positionAtElement.outerHeight() + n.offsetTop;
                        l.left = a.left + n.offsetLeft + (n.positionAtElement.outerWidth() - s.outerWidth()) / 2;
                        l.delta = -n.deltaPosition
                    } else if (n.deltaDirection.match(/^left$/i)) {
                        l.top = a.top + n.offsetTop + (n.positionAtElement.outerHeight() - s.outerHeight()) / 2;
                        l.left = a.left + n.offsetLeft - s.outerWidth();
                        l.delta = n.deltaPosition
                    } else if (n.deltaDirection.match(/^right$/i)) {
                        l.top = a.top + n.offsetTop + (n.positionAtElement.outerHeight() - s.outerHeight()) / 2;
                        l.left = a.left + n.positionAtElement.outerWidth() + n.offsetLeft;
                        l.delta = -n.deltaPosition
                    }
                } else if (n.positionAt.match(/^body$/i)) if (n.deltaDirection.match(/^up|left$/i)) {
                    l.top =
                        n.offsetTop;
                    l.left = n.offsetLeft;
                    l.delta = n.deltaPosition
                } else {
                    if (n.deltaDirection.match(/^down$/i)) {
                        l.top = parseInt(n.offsetTop + s.outerHeight());
                        l.left = n.offsetLeft
                    } else {
                        l.top = n.offsetTop;
                        l.left = parseInt(n.offsetLeft + s.outerWidth())
                    }
                    l.delta = -n.deltaPosition
                } else if (n.positionAt.match(/^mouse$/i)) if (n.deltaDirection.match(/^up|left$/i)) {
                    if (n.deltaDirection.match(/^up$/i)) {
                        l.top = -(n.offsetTop + s.outerHeight());
                        l.left = n.offsetLeft
                    } else if (n.deltaDirection.match(/^left$/i)) {
                        l.top = n.offsetTop;
                        l.left = -(n.offsetLeft +
                            s.outerWidth())
                    }
                    l.delta = n.deltaPosition
                } else {
                    l.top = n.offsetTop;
                    l.left = n.offsetLeft;
                    l.delta = -n.deltaPosition
                }
                n.positionAt.match(/^element|body$/i) && s.css({
                    position: "absolute",
                    top: l.top + "px",
                    left: l.left + "px"
                })
            }

            if (a("table.bubbletip #" + a(b).get(0).id).length > 0) return this;
            var m, o, n, l, p, r, w, v, s, x, B, E;
            m = a(this);
            o = a(b);
            x = d++;
            n = {
                positionAt: "element",
                positionAtElement: m,
                offsetTop: 0,
                offsetLeft: 0,
                deltaPosition: 30,
                deltaDirection: "up",
                animationDuration: 250,
                animationEasing: "swing",
                bindShow: "mouseover",
                bindHide: "mouseout",
                delayShow: 0,
                delayHide: 500,
                calculateOnShow: false
            };
            c && (n = a.extend(n, c));
            l = {
                top: 0,
                left: 0,
                delta: 0,
                mouseTop: 0,
                mouseLeft: 0,
                tipHeight: 0,
                bindShow: (n.bindShow + " ").replace(/ +/g, ".bubbletip" + x),
                bindHide: (n.bindHide + " ").replace(/ +/g, ".bubbletip" + x),
                alwayShow: n.alwayShow || false
            };
            r = p = null;
            v = w = false;
            m.data("bubbletip_tips") ? m.data("bubbletip_tips", a.merge(m.data("bubbletip_tips"), [[o.get(0).id, x]])) : m.data("bubbletip_tips", [[o.get(0).id, x]]);
            if (!n.positionAt.match(/^element|body|mouse$/i)) n.positionAt = "element";
            if (!n.deltaDirection.match(/^up|down|left|right$/i)) n.deltaDirection = "up";
            n.deltaDirection.match(/^up$/i) ? s = a('<table class="bubbletip" cellspacing="0" cellpadding="0"><tbody><tr><td class="bt-topleft"></td><td class="bt-top"></td><td class="bt-topright"></td></tr><tr><td class="bt-left"></td><td class="bt-content"></td><td class="bt-right"></td></tr><tr><td class="bt-bottomleft"></td><td><table class="bt-bottom" cellspacing="0" cellpadding="0"><tr><th></th><td><div></div></td><th></th></tr></table></td><td class="bt-bottomright"></td></tr></tbody></table>') :
                n.deltaDirection.match(/^down$/i) ? s = a('<table class="bubbletip" cellspacing="0" cellpadding="0"><tbody><tr><td class="bt-topleft"></td><td><table class="bt-top" cellspacing="0" cellpadding="0"><tr><th></th><td><div></div></td><th></th></tr></table></td><td class="bt-topright"></td></tr><tr><td class="bt-left"></td><td class="bt-content"></td><td class="bt-right"></td></tr><tr><td class="bt-bottomleft"></td><td class="bt-bottom"></td><td class="bt-bottomright"></td></tr></tbody></table>') : n.deltaDirection.match(/^left$/i) ?
                    s = a('<table class="bubbletip" cellspacing="0" cellpadding="0"><tbody><tr><td class="bt-topleft"></td><td class="bt-top"></td><td class="bt-topright"></td></tr><tr><td class="bt-left"></td><td class="bt-content"></td><td class="bt-right-tail"><div class="bt-right"></div><div class="bt-right-tail"></div><div class="bt-right"></div></td></tr><tr><td class="bt-bottomleft"></td><td class="bt-bottom"></td><td class="bt-bottomright"></td></tr></tbody></table>') : n.deltaDirection.match(/^right$/i) && (s = a('<table class="bubbletip" cellspacing="0" cellpadding="0"><tbody><tr><td class="bt-topleft"></td><td class="bt-top"></td><td class="bt-topright"></td></tr><tr><td class="bt-left-tail"><div class="bt-left"></div><div class="bt-left-tail"></div><div class="bt-left"></div></td><td class="bt-content"></td><td class="bt-right"></td></tr><tr><td class="bt-bottomleft"></td><td class="bt-bottom"></td><td class="bt-bottomright"></td></tr></tbody></table>'));
            s.appendTo("body");
            a(".bt-content", s).append(o);
            o.show();
            if (n.deltaDirection.match(/^left|right$/i)) {
                l.tipHeight = parseInt(o.height() / 2);
                o.height() % 2 == 1 && l.tipHeight++;
                l.tipHeight = l.tipHeight < 20 ? 1 : l.tipHeight - 20;
                n.deltaDirection.match(/^left$/i) ? a("div.bt-right", s).css("height", l.tipHeight + "px") : a("div.bt-left", s).css("height", l.tipHeight + "px")
            }
            s.css({width: s.width(), height: s.height()});
            j();
            s.hide();
            a(window).bind("resize.bubbletip" + x, function () {
                var b = a(window).width(), c = a(window).height();
                if (!(b ===
                        B && c === E)) {
                    B = b;
                    E = c;
                    r && clearTimeout(r);
                    r = setTimeout(function () {
                        j()
                    }, 250)
                }
            });
            l.alwayShow ? f() : a([s.get(0), this.get(0)]).bind(l.bindShow, function () {
                p && clearTimeout(p);
                n.delayShow === 0 ? f() : p = setTimeout(function () {
                    f()
                }, n.delayShow);
                return false
            }).bind(l.bindHide, function () {
                p && clearTimeout(p);
                n.delayHide === 0 ? g() : p = setTimeout(function () {
                    g()
                }, n.delayHide);
                return false
            });
            return this
        }, removeBubbletip: function (b) {
            var c, f = [], d = [], j;
            c = a.makeArray(a(this).data("bubbletip_tips"));
            j = a.makeArray(b);
            for (b = 0; b < j.length; b++) f.push(a(j[b]).get(0).id);
            for (b = 0; b < c.length; b++) if (f.length == 0 || a.inArray(c[b][0], f) >= 0) {
                for (j = a("#" + c[b][0]).get(0).parentNode; j.tagName.toLowerCase() != "table";) j = j.parentNode;
                a("#" + c[b][0]).appendTo("body").hide();
                a(j).remove();
                a(this).unbind(".bubbletip" + c[b][1]);
                a(window).unbind(".bubbletip" + c[b][1])
            } else d.push(c[b]);
            a(this).data("bubbletip_tips", d);
            return this
        }
    })
})(jQuery);
(function (a, d, b) {
    a:for (var c = /audio(.min)?.js.*/, f = document.getElementsByTagName("script"), g = 0, j = f.length; g < j; g++) {
        var m = f[g].getAttribute("src");
        if (c.test(m)) {
            m.replace(c, "");
            break a
        }
    }
    c = '      <object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" id="$1" width="1" height="1" name="$1" style="position: absolute; left: -1px;">         <param name="movie" value="$2?playerInstance=' + a + '.instances[\'$1\']&datetime=$3">         <param name="allowscriptaccess" value="always">         <embed name="$1" src="$2?playerInstance=' +
        a + '.instances[\'$1\']&datetime=$3" width="1" height="1" allowscriptaccess="always">       </object>';
    f = document.createElement("audio");
    f = !(f.canPlayType && f.canPlayType("audio/mpeg;").replace(/no/, ""));
    b[a] = {
        instanceCount: 0, instances: {}, flashSource: c, settings: {
            autoplay: false,
            loop: false,
            preload: true,
            imageLocation: "/static/player-graphics-87bc2eca3137ee42171127c9c1b6e29f.gif",
            swfLocation: "/static/audiojs-4f4d281512a2b356b8a98ddaf0e4bfab.swf",
            useFlash: f,
            hasFlash: function () {
                if (navigator.plugins && navigator.plugins.length && navigator.plugins["Shockwave Flash"]) return true;
                if (navigator.mimeTypes && navigator.mimeTypes.length) {
                    var a = navigator.mimeTypes["application/x-shockwave-flash"];
                    return a && a.enabledPlugin
                }
                try {
                    new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
                    return true
                } catch (b) {
                }
                return false
            }(),
            createPlayer: {
                markup: '          <div class="play-pause">             <p class="play"></p>             <p class="pause"></p>             <p class="loading"></p>             <p class="error"></p>           </div>           <div class="scrubber">             <div class="progress"></div>             <div class="loaded"></div>           </div>           <div class="time">             <em class="played">00:00</em>/<strong class="duration">00:00</strong>           </div>           <div class="error-message"></div>',
                playPauseClass: "play-pause",
                scrubberClass: "scrubber",
                progressClass: "progress",
                loaderClass: "loaded",
                timeClass: "time",
                durationClass: "duration",
                playedClass: "played",
                errorMessageClass: "error-message",
                playingClass: "playing",
                loadingClass: "loading",
                errorClass: "error"
            },
            css: '        .audiojs audio { position: absolute; left: -1px; }         .audiojs { width: 460px; height: 36px; background: #404040; overflow: hidden; font-family: monospace; font-size: 12px;           background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0, #444), color-stop(0.5, #555), color-stop(0.51, #444), color-stop(1, #444));           background-image: -moz-linear-gradient(center top, #444 0%, #555 50%, #444 51%, #444 100%);           -webkit-box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.3); -moz-box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.3);           -o-box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.3); box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.3); }         .audiojs .play-pause { width: 25px; height: 40px; padding: 4px 6px; margin: 0px; float: left; overflow: hidden; border-right: 1px solid #000; }         .audiojs p { display: none; width: 25px; height: 40px; margin: 0px; cursor: pointer; }         .audiojs .play { display: block; }         .audiojs .scrubber { position: relative; float: left; width: 280px; background: #5a5a5a; height: 14px; margin: 10px; border-top: 1px solid #3f3f3f; border-left: 0px; border-bottom: 0px; overflow: hidden; }         .audiojs .progress { position: absolute; top: 0px; left: 0px; height: 14px; width: 0px; background: #ccc; z-index: 1;           background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0, #ccc), color-stop(0.5, #ddd), color-stop(0.51, #ccc), color-stop(1, #ccc));           background-image: -moz-linear-gradient(center top, #ccc 0%, #ddd 50%, #ccc 51%, #ccc 100%); }         .audiojs .loaded { position: absolute; top: 0px; left: 0px; height: 14px; width: 0px; background: #000;           background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0, #222), color-stop(0.5, #333), color-stop(0.51, #222), color-stop(1, #222));           background-image: -moz-linear-gradient(center top, #222 0%, #333 50%, #222 51%, #222 100%); }         .audiojs .time { float: left; height: 36px; line-height: 36px; margin: 0px 0px 0px 6px; padding: 0px 6px 0px 12px; border-left: 1px solid #000; color: #ddd; text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.5); }         .audiojs .time em { padding: 0px 2px 0px 0px; color: #f9f9f9; font-style: normal; }         .audiojs .time strong { padding: 0px 0px 0px 2px; font-weight: normal; }         .audiojs .error-message { float: left; display: none; margin: 0px 10px; height: 36px; width: 400px; overflow: hidden; line-height: 36px; white-space: nowrap; color: #fff;           text-overflow: ellipsis; -o-text-overflow: ellipsis; -icab-text-overflow: ellipsis; -khtml-text-overflow: ellipsis; -moz-text-overflow: ellipsis; -webkit-text-overflow: ellipsis; }         .audiojs .error-message a { color: #eee; text-decoration: none; padding-bottom: 1px; border-bottom: 1px solid #999; white-space: wrap; }                 .audiojs .play { background: url("$1") -2px -1px no-repeat; }         .audiojs .loading { background: url("$1") -2px -31px no-repeat; }         .audiojs .error { background: url("$1") -2px -61px no-repeat; }         .audiojs .pause { background: url("$1") -2px -91px no-repeat; }                 .playing .play, .playing .loading, .playing .error { display: none; }         .playing .pause { display: block; }                 .loading .play, .loading .pause, .loading .error { display: none; }         .loading .loading { display: block; }                 .error .time, .error .play, .error .pause, .error .scrubber, .error .loading { display: none; }         .error .error { display: block; }         .error .play-pause p { cursor: auto; }         .error .error-message { display: block; }',
            trackEnded: function () {
            },
            flashError: function () {
                var c = this.settings.createPlayer, f = o(c.errorMessageClass, this.wrapper),
                    d = 'Missing <a href="http://get.adobe.com/flashplayer/">flash player</a> plugin.';
                this.mp3 && (d = d + (' <a href="' + this.mp3 + '">Download audio file</a>.'));
                b[a].helpers.removeClass(this.wrapper, c.loadingClass);
                b[a].helpers.addClass(this.wrapper, c.errorClass);
                f.innerHTML = d
            },
            loadError: function () {
                var c = this.settings.createPlayer, f = o(c.errorMessageClass, this.wrapper);
                b[a].helpers.removeClass(this.wrapper,
                    c.loadingClass);
                b[a].helpers.addClass(this.wrapper, c.errorClass);
                f.innerHTML = 'Error loading: "' + this.mp3 + '"'
            },
            init: function () {
                b[a].helpers.addClass(this.wrapper, this.settings.createPlayer.loadingClass)
            },
            loadStarted: function () {
                var c = this.settings.createPlayer, f = o(c.durationClass, this.wrapper),
                    d = Math.floor(this.duration / 60), g = Math.floor(this.duration % 60);
                b[a].helpers.removeClass(this.wrapper, c.loadingClass);
                f.innerHTML = (d < 10 ? "0" : "") + d + ":" + (g < 10 ? "0" : "") + g
            },
            loadProgress: function (a) {
                var b = this.settings.createPlayer,
                    c = o(b.scrubberClass, this.wrapper);
                o(b.loaderClass, this.wrapper).style.width = c.offsetWidth * a + "px"
            },
            playPause: function () {
                this.playing ? this.settings.play() : this.settings.pause()
            },
            play: function () {
                b[a].helpers.addClass(this.wrapper, this.settings.createPlayer.playingClass)
            },
            pause: function () {
                b[a].helpers.removeClass(this.wrapper, this.settings.createPlayer.playingClass)
            },
            updatePlayhead: function (a) {
                var b = this.settings.createPlayer, c = o(b.scrubberClass, this.wrapper);
                o(b.progressClass, this.wrapper).style.width =
                    c.offsetWidth * a + "px";
                b = o(b.playedClass, this.wrapper);
                c = this.duration * a;
                a = Math.floor(c / 60);
                c = Math.floor(c % 60);
                b.innerHTML = (a < 10 ? "0" : "") + a + ":" + (c < 10 ? "0" : "") + c
            }
        }, create: function (a, b) {
            b = b || {};
            return a.length ? this.createAll(b, a) : this.newInstance(a, b)
        }, createAll: function (a, b) {
            for (var c = b || document.getElementsByTagName("audio"), f = [], a = a || {}, d = 0, g = c.length; d < g; d++) f.push(this.newInstance(c[d], a));
            return f
        }, newInstance: function (a, c) {
            var f = this.helpers.clone(this.settings), g = "audiojs" + this.instanceCount, j =
                "audiojs_wrapper" + this.instanceCount;
            this.instanceCount++;
            if (a.getAttribute("autoplay") != null) f.autoplay = true;
            if (a.getAttribute("loop") != null) f.loop = true;
            if (a.getAttribute("preload") == "none") f.preload = false;
            c && this.helpers.merge(f, c);
            f.createPlayer.markup ? a = this.createPlayer(a, f.createPlayer, j) : a.parentNode.setAttribute("id", j);
            j = new b[d](a, f);
            f.css && this.helpers.injectCss(j, f.css);
            if (f.useFlash && f.hasFlash) {
                this.injectFlash(j, g);
                this.attachFlashEvents(j.wrapper, j)
            } else f.useFlash && !f.hasFlash && this.settings.flashError.apply(j);
            (!f.useFlash || f.useFlash && f.hasFlash) && this.attachEvents(j.wrapper, j);
            return this.instances[g] = j
        }, createPlayer: function (a, b, c) {
            var f = document.createElement("div"), d = a.cloneNode(true);
            f.setAttribute("class", "audiojs");
            f.setAttribute("className", "audiojs");
            f.setAttribute("id", c);
            if (d.outerHTML && !document.createElement("audio").canPlayType) {
                d = this.helpers.cloneHtml5Node(a);
                f.innerHTML = b.markup;
                f.appendChild(d);
                a.outerHTML = f.outerHTML;
                f = document.getElementById(c)
            } else {
                f.appendChild(d);
                f.innerHTML = f.innerHTML +
                    b.markup;
                a.parentNode.replaceChild(f, a)
            }
            return f.getElementsByTagName("audio")[0]
        }, attachEvents: function (c, f) {
            if (f.settings.createPlayer) {
                var d = f.settings.createPlayer, g = o(d.playPauseClass, c), j = o(d.scrubberClass, c);
                b[a].events.addListener(g, "click", function () {
                    f.playPause.apply(f)
                });
                b[a].events.addListener(j, "click", function (a) {
                    var a = a.clientX, b = this, c = 0;
                    if (b.offsetParent) {
                        do c = c + b.offsetLeft; while (b = b.offsetParent)
                    }
                    f.skipTo((a - c) / j.offsetWidth)
                });
                if (!f.settings.useFlash) {
                    b[a].events.trackLoadProgress(f);
                    b[a].events.addListener(f.element, "timeupdate", function () {
                        f.updatePlayhead.apply(f)
                    });
                    b[a].events.addListener(f.element, "ended", function () {
                        f.trackEnded.apply(f)
                    });
                    b[a].events.addListener(f.source, "error", function () {
                        clearInterval(f.readyTimer);
                        clearInterval(f.loadTimer);
                        f.settings.loadError.apply(f)
                    })
                }
            }
        }, attachFlashEvents: function (a, b) {
            b.swfReady = false;
            b.load = function (a) {
                b.mp3 = a;
                b.swfReady && b.element.load(a)
            };
            b.loadProgress = function (a, c) {
                b.loadedPercent = a;
                b.duration = c;
                b.settings.loadStarted.apply(b);
                b.settings.loadProgress.apply(b, [a])
            };
            b.skipTo = function (a) {
                if (!(a > b.loadedPercent)) {
                    b.updatePlayhead.call(b, [a]);
                    b.element.skipTo(a)
                }
            };
            b.updatePlayhead = function (a) {
                b.settings.updatePlayhead.apply(b, [a])
            };
            b.play = function () {
                if (!b.settings.preload) {
                    b.settings.preload = true;
                    b.element.init(b.mp3)
                }
                b.playing = true;
                b.element.pplay();
                b.settings.play.apply(b)
            };
            b.pause = function () {
                b.playing = false;
                b.element.ppause();
                b.settings.pause.apply(b)
            };
            b.setVolume = function (a) {
                b.element.setVolume(a)
            };
            b.loadStarted = function () {
                b.swfReady =
                    true;
                b.settings.preload && b.element.init(b.mp3);
                b.settings.autoplay && b.play.apply(b)
            }
        }, injectFlash: function (a, b) {
            var c = this.flashSource.replace(/\$1/g, b), c = c.replace(/\$2/g, a.settings.swfLocation),
                c = c.replace(/\$3/g, +new Date + Math.random()), f = a.wrapper.innerHTML,
                d = document.createElement("div");
            d.innerHTML = c + f;
            a.wrapper.innerHTML = d.innerHTML;
            a.element = this.helpers.getSwf(b)
        }, helpers: {
            merge: function (a, b) {
                for (attr in b) if (a.hasOwnProperty(attr) || b.hasOwnProperty(attr)) a[attr] = b[attr]
            }, clone: function (a) {
                if (a ==
                    null || typeof a !== "object") return a;
                var b = new a.constructor, c;
                for (c in a) b[c] = arguments.callee(a[c]);
                return b
            }, addClass: function (a, b) {
                RegExp("(\\s|^)" + b + "(\\s|$)").test(a.className) || (a.className = a.className + (" " + b))
            }, removeClass: function (a, b) {
                a.className = a.className.replace(RegExp("(\\s|^)" + b + "(\\s|$)"), " ")
            }, injectCss: function (a, b) {
                for (var c = "", f = document.getElementsByTagName("style"), d = b.replace(/\$1/g, a.settings.imageLocation), g = 0, j = f.length; g < j; g++) {
                    var m = f[g].getAttribute("title");
                    if (m && ~m.indexOf("audiojs")) {
                        j =
                            f[g];
                        if (j.innerHTML === d) return;
                        c = j.innerHTML;
                        break
                    }
                }
                f = document.getElementsByTagName("head")[0];
                g = f.firstChild;
                j = document.createElement("style");
                if (f) {
                    j.setAttribute("type", "text/css");
                    j.setAttribute("title", "audiojs");
                    j.styleSheet ? j.styleSheet.cssText = c + d : j.appendChild(document.createTextNode(c + d));
                    g ? f.insertBefore(j, g) : f.appendChild(styleElement)
                }
            }, cloneHtml5Node: function (a) {
                var b = document.createDocumentFragment(), c = b.createElement ? b : document;
                c.createElement("audio");
                c = c.createElement("div");
                b.appendChild(c);
                c.innerHTML = a.outerHTML;
                return c.firstChild
            }, getSwf: function (a) {
                a = document[a] || window[a];
                return a.length > 1 ? a[a.length - 1] : a
            }
        }, events: {
            memoryLeaking: false, listeners: [], addListener: function (c, f, d) {
                if (c.addEventListener) c.addEventListener(f, d, false); else if (c.attachEvent) {
                    this.listeners.push(c);
                    if (!this.memoryLeaking) {
                        window.attachEvent("onunload", function () {
                            if (this.listeners) for (var c = 0, f = this.listeners.length; c < f; c++) b[a].events.purge(this.listeners[c])
                        });
                        this.memoryLeaking = true
                    }
                    c.attachEvent("on" +
                        f, function () {
                        d.call(c, window.event)
                    })
                }
            }, trackLoadProgress: function (a) {
                if (a.settings.preload) {
                    var b, c, f = /(ipod|iphone|ipad)/i.test(navigator.userAgent);
                    b = setInterval(function () {
                        a.element.readyState > -1 && (f || a.init.apply(a));
                        if (a.element.readyState > 1) {
                            a.settings.autoplay && a.play.apply(a);
                            clearInterval(b);
                            c = setInterval(function () {
                                a.loadProgress.apply(a);
                                a.loadedPercent >= 1 && clearInterval(c)
                            })
                        }
                    }, 10);
                    a.readyTimer = b;
                    a.loadTimer = c
                }
            }, purge: function (a) {
                var b = a.attributes, c;
                if (b) for (c = 0; c < b.length; c = c + 1) typeof a[b[c].name] ===
                "function" && (a[b[c].name] = null);
                if (b = a.childNodes) for (c = 0; c < b.length; c = c + 1) purge(a.childNodes[c])
            }, ready: function (a) {
                var b = window, c = false, f = true, d = b.document, g = d.documentElement,
                    j = d.addEventListener ? "addEventListener" : "attachEvent",
                    m = d.addEventListener ? "removeEventListener" : "detachEvent", o = d.addEventListener ? "" : "on",
                    E = function (f) {
                        if (!(f.type == "readystatechange" && d.readyState != "complete")) {
                            (f.type == "load" ? b : d)[m](o + f.type, E, false);
                            if (!c && (c = true)) a.call(b, f.type || f)
                        }
                    }, y = function () {
                        try {
                            g.doScroll("left")
                        } catch (a) {
                            setTimeout(y,
                                50);
                            return
                        }
                        E("poll")
                    };
                if (d.readyState == "complete") a.call(b, "lazy"); else {
                    if (d.createEventObject && g.doScroll) {
                        try {
                            f = !b.frameElement
                        } catch (D) {
                        }
                        f && y()
                    }
                    d[j](o + "DOMContentLoaded", E, false);
                    d[j](o + "readystatechange", E, false);
                    b[j](o + "load", E, false)
                }
            }
        }
    };
    b[d] = function (a, b) {
        this.element = a;
        this.wrapper = a.parentNode;
        this.source = a.getElementsByTagName("source")[0] || a;
        var c = a.getElementsByTagName("source")[0];
        this.mp3 = a.getAttribute("src") || (c ? c.getAttribute("src") : null);
        this.settings = b;
        this.loadStartedCalled = false;
        this.loadedPercent = 0;
        this.duration = 1;
        this.playing = false
    };
    b[d].prototype = {
        updatePlayhead: function () {
            this.settings.updatePlayhead.apply(this, [this.element.currentTime / this.duration])
        }, skipTo: function (a) {
            if (!(a > this.loadedPercent)) {
                this.element.currentTime = this.duration * a;
                this.updatePlayhead()
            }
        }, load: function (c) {
            this.loadStartedCalled = false;
            this.source.setAttribute("src", c);
            this.element.load();
            this.mp3 = c;
            b[a].events.trackLoadProgress(this)
        }, loadError: function () {
            this.settings.loadError.apply(this)
        }, init: function () {
            this.settings.init.apply(this)
        },
        loadStarted: function () {
            if (!this.element.duration) return false;
            this.duration = this.element.duration;
            this.updatePlayhead();
            this.settings.loadStarted.apply(this)
        }, loadProgress: function () {
            if (this.element.buffered != null && this.element.buffered.length) {
                if (!this.loadStartedCalled) this.loadStartedCalled = this.loadStarted();
                this.loadedPercent = this.element.buffered.end(this.element.buffered.length - 1) / this.duration;
                this.settings.loadProgress.apply(this, [this.loadedPercent])
            }
        }, playPause: function () {
            this.playing ?
                this.pause() : this.play()
        }, play: function () {
            /(ipod|iphone|ipad)/i.test(navigator.userAgent) && this.element.readyState == 0 && this.init.apply(this);
            if (!this.settings.preload) {
                this.settings.preload = true;
                this.element.setAttribute("preload", "auto");
                b[a].events.trackLoadProgress(this)
            }
            this.playing = true;
            this.element.play();
            this.settings.play.apply(this)
        }, pause: function () {
            this.playing = false;
            this.element.pause();
            this.settings.pause.apply(this)
        }, setVolume: function (a) {
            this.element.volume = a
        }, trackEnded: function () {
            this.skipTo.apply(this,
                [0]);
            this.settings.loop || this.pause.apply(this);
            this.settings.trackEnded.apply(this)
        }
    };
    var o = function (a, b) {
        var c = [], b = b || document;
        if (b.getElementsByClassName) c = b.getElementsByClassName(a); else {
            var f, d, g = b.getElementsByTagName("*"), j = RegExp("(^|\\s)" + a + "(\\s|$)");
            f = 0;
            for (d = g.length; f < d; f++) j.test(g[f].className) && c.push(g[f])
        }
        return c.length > 1 ? c : c[0]
    }
})("audiojs", "audiojsInstance", this);
var FX = {transitionend: "transitionend oTransitionEnd webkitTransitionEnd MSTransitionEnd"}, nextFrame = function () {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (a) {
        return setTimeout(function () {
            a(Date.now())
        }, 5)
    }
}(), cancelFrame = function () {
    return window.cancelRequestAnimationFrame || window.webkitCancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame ||
        window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout
}();
$.fn.hasPlaceholder = function () {
    $.support.placeholder || this.each(function () {
        var a = $(this), d = a.attr("placeholder");
        a.focus(function () {
            a.val() == d && a.val("");
            a.removeClass("has-placeholder")
        }).blur(function () {
            a.val() == "" && a.val(d).addClass("has-placeholder")
        });
        a.blur()
    });
    return this
};
$.fn.iPhoneSimulator = function () {
    if (!this.length) return this;
    var a = $(".app-content", this), d = a.width(), b = $(".app-slider", a).width() - d, c = $(".app-scroller", this),
        f = $(".s-thumb", this);
    c.width();
    var c = f.width(), g = d - c, j = 1, m = a.scrollLeft(), o = function () {
        if (m >= b) {
            m = a.scrollLeft();
            clearInterval(n)
        } else {
            a.scrollLeft(m = m + j);
            f.css({left: Math.min(Math.ceil(m / b * g), g)})
        }
    }, n = setInterval(o, 25);
    a.on("mouseover", function () {
        clearInterval(n)
    }).on("mouseout", function () {
        if (m == b) {
            j = -1;
            a.scrollLeft(m = m + j)
        } else j = 1;
        n = setInterval(o,
            25)
    });
    return this
};
var getHidder = function () {
    var a;
    return function () {
        if (!a) {
            a = $("#hider");
            a.length || (a = $('<div id="hider" style="position:absolute;left:-9999px;top:-9999px;"/>').appendTo("body"))
        }
        return a
    }
}();
(function () {
    function a() {
        $(document).off("keydown.confirm");
        $.fancybox.close()
    }

    var d, b, c, f, g;
    $.extend({
        confirm: function (j, m, o) {
            c = o || {};
            f = m || null;
            if (!d) {
                d = $('<div id="_dialog-confirm" class="dialog-confirm"><div class="message"></div><div class="action"><button class="ok">\u786e\u8ba4</button><button class="cancel">\u53d6\u6d88</button></div></div>').click(function (a) {
                    a.stopPropagation()
                });
                getHidder().append(d);
                b = d.find(".message");
                g = d.find(".cancel").click(a);
                d.find(".ok").click(function () {
                    f && f(true);
                    a()
                });
                c.btnCancel === false ? g.hide() : g.show()
            }
            $(document).on("keydown.confirm", function (a) {
                a.preventDefault();
                a.stopPropagation();
                if (a.keyCode == 13) {
                    f && f(true);
                    $.fancybox.close();
                    $(document).off("keydown.confirm")
                }
            });
            b.html(j);
            $.fancybox({
                padding: 0,
                showCloseButton: false,
                hideOnOverlayClick: false,
                transitionIn: "none",
                transitionOut: "none",
                extraClass: "fancybox-confirm",
                href: "#_dialog-confirm",
                onClose: function () {
                    f && f(false)
                }
            })
        }
    })
})();

function checkButtonStatus(a, d) {
    this.val() != "" ? a.removeClass(d).prop("disabled", false) : a.addClass(d).prop("disabled", true)
}

$.fn.dropMenu = function () {
    return this.each(function () {
        var a = $(this);
        a.find(".ico-arr").mouseenter(function () {
            a.addClass("open")
        });
        a.mouseleave(function () {
            a.removeClass("open")
        })
    })
};
$.rails.allowAction = function (a) {
    var d = a.data("confirm"), b;
    if (!d) return true;
    $.rails.fire(a, "confirm") && $.confirm(d, function (c) {
        if (b = $.rails.fire(a, "confirm:complete", [c])) {
            c = $.rails.allowAction;
            $.rails.allowAction = function () {
                return true
            };
            a.trigger("click");
            $.rails.allowAction = c
        }
    });
    return false
};
$.fn.sideTips = function (a) {
    var a = $.extend({useAjax: true}, a), d = a.direction || "right";
    return this.each(function () {
        var b = $(this), c = b.data("id"), f, g = {}, j = {};
        f = d === "right" ? b.outerWidth() : b.outerHeight();
        g[d] = -(f + 15);
        j[d] = parseInt(b.css(d));
        b.css(d, g[d]).find(".close").click(function () {
            b.animate(g, 300);
            a.useAjax && $.ajax({type: "POST", url: "/util/cookie/" + c})
        });
        a.handle && $(a.handle).click(function () {
            b.animate(j, 300)
        });
        a.useAjax && !userCookie(c) && b.animate(j, 300)
    })
};
var open_map_info_window = function () {
    var a = {};
    return function (d, b) {
        if (d) {
            var c = b.data("user-entry-index"), f = a[c];
            if (!f) {
                f = $('<div class="map-info-window">' + $.map(d, function (a) {
                    return a ? "<div>" + a + "</div>" : ""
                }).join("") + '<i class="close"></i></div>');
                $(".close", f).click(function () {
                    f.hide()
                });
                a[c] = f;
                $("body").append(f)
            }
            c = b.offset().left < WindowSize.width / 2 ? {left: 40, right: "auto"} : {left: "auto", right: 40};
            f.css(c).show();
            return f
        }
    }
}(), trip_thumb_gmap_callback = function (a) {
    return function () {
        var d, b;
        $(".trip-node[data-poi-entry-index]").on("click",
            function () {
                var a = $(this), a = Gmaps.map.markers[a.data("poi-entry-index")], f = a.infowindow;
                d && d.close();
                b && b.hide();
                Gmaps.map.map.setCenter(new google.maps.LatLng(a.lat, a.lng));
                Gmaps.map.map.setZoom(14);
                f.open(Gmaps.map.map, a.serviceObject);
                d = f
            });
        $(".trip-node").click(function () {
            window.parent && parent.$(parent).trigger("dochaschanged", [$(this).data("hash")])
        });
        $(".trip-node[data-user-entry-index]").on("click", function () {
            var c = $(this);
            d && d.close();
            b && b.hide();
            b = open_map_info_window(a[c.data("user-entry-index")],
                c)
        })
    }
};

function userCookie(a) {
    var d = window._G_current_user_cookie ? window._G_current_user_cookie.split(",") : [];
    return _.indexOf(d, a) != -1
}

function likesZoomIn(a) {
    $(window).on("note:like", function (b, c) {
        var f = c.model, d;
        d = f.get("likes_count") || 0;
        if (f.get("current_user_like")) {
            d = {likes_count: Math.max(d - 1, 0), current_user_like: false};
            var j = a.indexOf(f);
            $('#my-likes li[data-index="' + j + '"]').remove()
        } else d = {likes_count: d + 1, current_user_like: true};
        f.set(d);
        $.ajax({
            url: "/trips/" + f.get("trip_id") + "/like",
            type: "POST",
            data: {likeable_id: f.get("sid"), likeable_type: TripUtils.noteServerType(c.type)}
        })
    });
    var d = tripshow.View.FullScreenViewer;
    d.setCollection(a);
    $("#my-likes a").click(function (a) {
        a.stopPropagation()
    });
    $("#my-likes li").click(function () {
        var b = $(this).data("index"), b = a.at(b);
        d.open(b)
    });
    $(document).keydown(function (a) {
        var c = a.keyCode;
        if (d.isOpened()) switch (c) {
            case 37:
                d.prev();
                break;
            case 39:
                d.next();
                break;
            case 27:
                a.preventDefault();
                d.close();
                break;
            case 80:
                d.isPlaying() ? d.stopPlay() : d.autoPlay();
                break;
            case 32:
                a.preventDefault();
                d.next()
        }
    })
}

function destinationNoteZoom(a) {
    var d = tripshow.View.FullScreenViewer;
    $(".photos .clickable").click(function (b) {
        b.preventDefault();
        var c = $(this), b = c.parent().data("id"), c = c.data("id"), f = a[b];
        void 0 != b && d.setCollection(f);
        b = f.get(c);
        d.open(b)
    })
}

$.fn.indexCover = function () {
    function a() {
        var a = {display: "block"};
        if (WindowSize.width > j) {
            var c = Math.floor(WindowSize.width / j * m);
            $.extend(a, {
                width: WindowSize.width,
                height: c,
                marginTop: -Math.floor(c / 2),
                marginLeft: -Math.floor(WindowSize.width / 2) + "px"
            })
        } else $.extend(a, {width: j, height: m, marginLeft: "-800px", marginTop: "-215px"});
        b.css(a);
        if (WindowSize.width > 1024) {
            o.removeClass("hidden");
            n.removeClass("hidden")
        } else {
            o.addClass("hidden");
            n.addClass("hidden")
        }
    }

    function d(a) {
        a < 0 ? a = f - 1 : a > f - 1 && (a = 0);
        g = a;
        var d = b.hide().eq(a).show();
        d.data("src") && d.attr("src", d.data("src"));
        c.hide();
        a < c.length && c.eq(a).show();
        a == 0 ? o.hide() : o.show();
        a == f - 1 ? n.hide() : n.show()
    }

    var b = $(".index-banner", this), c = $(".cover-info", this), f = b.length, g = 0, j = 1600, m = 430,
        o = $(".prev", this), n = $(".next", this);
    b.hide();
    c.hide();
    a();
    d($.rnd(0, f - 1));
    WindowResizeListener.add(a);
    o.on("click", function () {
        d(g - 1)
    });
    n.on("click", function () {
        d(g + 1)
    });
    return this
};
$.fn.tripManager = function () {
    $(".trip-list-item", this).each(function () {
        var a = $(this).data("id");
        $(".modify-privacy", this).click(function () {
            $.fancybox({
                type: "iframe",
                padding: 0,
                transitionIn: "none",
                transitionOut: "none",
                width: 450,
                height: 320,
                autoScale: false,
                href: "/trips/" + a + "/privacy"
            })
        })
    })
};

function indexTrips() {
    var a = $(window), d = $(document), b = 1, c, f = _.throttle(function () {
        if ($("#index-trips .row").last().offset().top < d.scrollTop() + a.height()) if (!(b < 1 || b >= 5 || c)) {
            c = true;
            $.ajax({
                url: "?page=" + ++b, success: function (a) {
                    a ? $("#index-trips").append(a) : b = -1
                }, complete: function () {
                    c = false
                }
            })
        }
    }, 100);
    a.scroll(f)
}

$.fn.tripPreview = function () {
    this.each(function () {
        var a = $(this), d = $(".trip-scroller-content", this), b = $(".trip-scroller", this), c = $(".s-item", this),
            f = d.find(".s-item").length * 175, g = b.width(), j = f - g;
        d.css("width", f);
        var m = $(".scroll-left", a), o = $(".scroll-right", a);
        m.on("click", function () {
            b.animate({scrollLeft: "-=525"}, 400, "easeInOutQuad")
        });
        o.on("click", function () {
            b.animate({scrollLeft: "+=525"}, 400, "easeInOutQuad")
        });
        a = function () {
            if (c.length != 0) {
                c.each(function () {
                    var a = $(this), c = $(".lazy", this);
                    c.length !=
                    0 && b.scrollLeft() + g > a.position().left && c.on("load", function () {
                        c.off("load").removeClass("lazy")
                    }).attr("src", c.data("src"))
                });
                if (f <= g) {
                    m.hide();
                    o.hide()
                } else {
                    var a = b.scrollLeft();
                    a == 0 ? m.addClass("disable") : m.removeClass("disable");
                    a >= j ? o.addClass("disable") : o.removeClass("disable")
                }
            }
        };
        b.on("scroll", _.throttle(a, 100));
        a()
    })
};
$.fn.guideCategorites = function () {
    function a(a) {
        d && d[0] !== a[0] && $("ul", d).slideUp(function () {
            d.removeClass("open")
        });
        $("ul", a).slideDown(function () {
            a.addClass("open");
            d = a
        })
    }

    var d;
    this.each(function () {
        var b = $(this);
        $(".switch-icon", this).on("click", function () {
            a(b)
        });
        b.hasClass("open") && a(b)
    })
};
var showLightBoxTrip = function () {
    function a(a) {
        a.stopPropagation();
        a.preventDefault();
        return false
    }

    function d() {
        b && b.hide();
        c && c.empty();
        cleanLightBoxTrip()
    }

    var b, c, f;
    return function (g, j) {
        if (!b) {
            b = $("#trip-lightbox").mousewheel(a);
            c = $(".content", b);
            f = $(".loading-ico", b);
            b.on("click", function (a) {
                a && (a.target && a.target.id == "viewer") && d()
            });
            $(".t-close", b).on("click", d)
        }
        $("body");
        b.show();
        f.show();
        $.get("/trips/" + g + "?partial=true", function (a) {
            c.html(a);
            initLightBoxTrip({anchor: j, playVideoInTrainView: true});
            f.hide()
        });
        $(".trip-show-tips").sideTips({direction: "top"});
        return false
    }
}();

function attractionShareToolbar() {
    var a = $(window), d = $("#page-body"), b = $("#dest-share"), c;
    $(".close", b).on("click", function () {
        b.remove();
        c = true
    });
    a.on("scroll", function () {
        if (!c) {
            var f = a.scrollTop();
            if (f > 200) {
                b.show();
                f = d.outerHeight() - f - a.height();
                f <= 50 ? b.css("bottom", 50 - f) : b.css("bottom", 0)
            } else b.hide()
        }
    })
}

function isotopeInit() {
    function a(a, f) {
        var g = d.width(), j = Math.floor(g / c), l = Math.floor((g - j * c) / j + b);
        a.each(function () {
            var a = $("img", this),
                b = $(this).css({width: l, height: Math.floor(l / a.data("width") * a.data("height"))});
            if (!b.hasClass("loaded")) a.on("load", function () {
                a.off("load");
                b.addClass("loaded")
            })
        });
        f && d.isotope("reLayout")
    }

    var d = $("#photos-flow"), b = 300, c = b + 16;
    a($(".photo", d));
    d.isotope({
        itemSelector: ".photo",
        resizable: false,
        transformsEnabled: false,
        animationEngine: "best-available",
        animationOptions: {
            duration: 350,
            easing: "linear", queue: false
        }
    });
    WindowResizeListener.add(function () {
        a($(".photo", d), true)
    });
    var f, g = function () {
        j.hide();
        m.find("img").remove()
    }, j = $("#full-photo"), m = $(".photo", j), o = $(".trip-name", j), n = $(".desc", j);
    j.click(function (a) {
        a.target === $(".content", j)[0] && g()
    });
    $(".t-close", j).click(g);
    f = {
        show: function (a) {
            var b = suitedFullPhoto(a.photoWidth, a.photoHeight);
            m.append('<img src="' + a.photoUrl + b.suffix + '">');
            o.text(a.tripName).attr("href", "/trips/" + a.tripId + "/#nt/" + a.noteId);
            a.description ? n.text(a.description).show() :
                n.hide();
            var a = b.width, c = b.height, b = WindowSize.width - 100, f = WindowSize.height - 100;
            if (a < b && c < f) a = {width: a, height: c}; else var d = Math.max(c / f, a / b),
                a = {width: a / d, height: c / d};
            a.width = Math.floor(Math.min(a.width, b));
            a.height = Math.floor(Math.min(a.height, f));
            m.css(a).css({marginLeft: -a.width / 2, marginTop: -a.height / 2});
            j.show()
        }, hide: g
    };
    $("#photos-flow").on("click", ".photo", function () {
        var a = $("img", this), a = {
            description: a.attr("alt"),
            noteId: a.data("note-id"),
            tripId: a.data("trip-id"),
            tripName: a.data("trip-name"),
            photoUrl: a.attr("src").replace("-400w", ""),
            photoWidth: a.data("width"),
            photoHeight: a.data("height")
        };
        f.show(a)
    });
    var l = $(window), p = $(document), r = 1, w, v = _.throttle(function () {
        if ($(".photo", d).last().offset().top < p.scrollTop() + l.height() && !(r < 1 || w)) {
            w = true;
            d.addClass("loading");
            $.ajax({
                url: "?page=" + ++r, success: function (b) {
                    b = $("<div>" + b + "</div>");
                    b = $(".photo", b);
                    if (b.length > 0) {
                        a(b);
                        d.isotope("insert", b)
                    } else r = -1
                }, complete: function () {
                    w = false;
                    d.removeClass("loading")
                }
            })
        }
    }, 100);
    l.scroll(v)
}

function suitedFullPhoto(a, d) {
    var b = a / d, c = window.devicePixelRatio && window.devicePixelRatio > 1, f,
        g = Math.max(WindowSize.height, screen.height - (screen.height - WindowSize.height));
    c && (g = g * 2);
    var j;
    $.each([{size: 800, alias: "-display"}, {size: 1024, alias: "-display_g"}, {
        size: 1280,
        alias: "-display_gg"
    }], function (a, c) {
        if ((b < 1 ? c.size : c.size / b) - g > -20) {
            f = c.size;
            j = c.alias;
            return false
        }
    });
    j || (j = "-o");
    var m;
    if (f) if (b > 1) {
        c = f;
        m = f / b
    } else {
        c = f * b;
        m = f
    } else {
        c = a;
        m = d
    }
    return {suffix: j, width: c, height: m}
}

function editPlan(a) {
    var d = "/plans/" + a;
    $("body").on("focus", "input,textarea", function () {
        var a = $(this);
        a.data("val", a.val())
    }).on("blur", "input,textarea", function () {
        var a = $(this);
        if (!a.valid()) {
            a.showErrorTips();
            return false
        }
        var b = a.data("day-index"), c = a.data("node-index"), m = a.data("val"), o = a.val();
        if (o && o != m) {
            m = {};
            m[a.attr("name")] = o;
            if (b > -1) {
                a = $("#plan_plan_days_attributes_" + b + "_id");
                m[a.attr("name")] = a.val()
            }
            if (c > -1) {
                b = $("#plan_plan_days_attributes_" + b + "_plan_nodes_attributes_" + c + "_id");
                m[b.attr("name")] =
                    b.val()
            }
            $.ajax({url: d, type: "PUT", data: m, dataType: "html"})
        }
    }).on("click", "a.up,a.down,a.delete,a.candidate", function () {
        var a = $(this), b = function () {
            $.ajax({
                url: a.attr("href"), type: a.data("method"), success: function (a) {
                    a = $(a);
                    $("#" + a.attr("id")).replaceWith(a)
                }
            })
        };
        a.data("method") == "delete" ? $.confirm("\u4f60\u786e\u5b9a\u8981\u5220\u9664\u8fd9\u4e2a\u5730\u70b9\uff1f", function (a) {
            a && b()
        }) : b();
        return false
    }).on("click", ".iframe", function () {
        $.fancybox({
            scrolling: "no", padding: 0, width: 700, height: 440, hideOnOverlayClick: false,
            transitionIn: "none", transitionOut: "none", href: this.href, type: "iframe"
        });
        return false
    });
    var b, c = $("#plan_budget");
    c.focus(function () {
        clearInterval(b);
        b = setInterval(function () {
            var a = c.val(), b = a.replace(/[^0-9]*/ig, "");
            a != b && c.val(b)
        }, 16)
    }).blur(function () {
        clearInterval(b)
    });
    $(window).on("node:added", function (a, b, c) {
        a = $(c);
        $("#" + a.attr("id")).replaceWith(a)
    })
}

function editArticle(a) {
    var d = "/articles/" + a;
    $("body").on("focus", "input,textarea", function () {
        var a = $(this);
        a.data("val", a.val())
    }).on("blur", "input,textarea", function () {
        var a = $(this), c = a.data("section-index"), f = a.data("val"), g = a.val();
        if (g && g != f) {
            f = {};
            f[a.attr("name")] = g;
            if (c > -1) {
                a = $("#article_sections_attributes_" + c + "_id");
                f[a.attr("name")] = a.val()
            }
            $.ajax({url: d, type: "PUT", data: f, dataType: "html"})
        }
    }).on("click", "a.add,a.up,a.down,a.delete", function () {
        var a = $(this), c = function () {
            $.ajax({
                url: a.attr("href"),
                type: a.data("method"), success: function (a) {
                    a = $(a);
                    $("#sections").html(a)
                }
            })
        };
        a.data("method") == "delete" ? $.confirm("\u4f60\u786e\u5b9a\u8981\u5220\u9664\u8fd9\u4e2a\u6a21\u5757\uff1f", function (a) {
            a && c()
        }) : c();
        return false
    })
}

$.fn.destinationTips = function () {
    function a() {
        var a = $(this).data("id");
        $(".destination-tip-content").hide();
        $("#destination-tip-" + a).show();
        d.removeClass("selected");
        $(this).addClass("selected")
    }

    var d = $(".destination-tips-category a", this);
    d.on("click", function (b) {
        b.preventDefault();
        a.call(this)
    });
    a.call($(".destination-tips-category a:first", this));
    return this
};
$.fn.attractionTips = function () {
    var a = this;
    $(".read-more", a).on("click", function (d) {
        d.preventDefault();
        $(".summary", a).remove();
        $(".content", a).show();
        $(this).remove()
    });
    return this
};

function privateMessageForm(a) {
    var d = $(".btn-l", a).prop("disabled", true).addClass("btn-disable"),
        b = $("textarea.textarea", a).on("keydown", function () {
            setTimeout(function () {
                b.val() ? d.prop("disabled", false).removeClass("btn-disable") : d.prop("disabled", true).addClass("btn-disable")
            }, 0)
        })
}

function tripFormValidate() {
    var a, d = $(".input-txt").on("focus", function () {
        clearInterval(a);
        a = setInterval(function () {
            checkButtonStatus.call(d, $(".btn-l"), "btn-l-disable")
        }, 32)
    }).on("blur", function () {
        clearInterval(a)
    }).focus();
    $("form#new_trip").on("submit", function () {
        var a = $('input[name="trip[name]"]');
        if (!a.valid()) {
            a.showErrorTips();
            return false
        }
    })
}

(function () {
    var a = true;
    try {
        document.createElement("canvas").getContext("2d")
    } catch (d) {
        a = false
    }
    $.fn.clock = function () {
        function b(a, b, d, j) {
            this.beginPath();
            this.lineWidth = b;
            a = a * Math.PI * 2 - Math.PI / 2;
            this.moveTo(j, j);
            this.lineTo(j + d * Math.cos(a), j + d * Math.sin(a));
            this.closePath();
            this.stroke()
        }

        if (!a) return this;
        this.each(function () {
            var a = $(this), f = a.text();
            if (f) try {
                var f = f.split(":"), d = parseInt(f[0], 10), j = parseInt(f[1], 10),
                    d = ((d > 12 ? d - 12 : d) + j / 60) / 12, j = j / 60, m = document.createElement("canvas"),
                    o = m.getContext("2d");
                $(m).attr({width: 20, height: 20}).appendTo(a.addClass("has-clock"));
                o.beginPath();
                o.lineWidth = 2;
                o.strokeStyle = "#a8a8a8";
                o.arc(10, 10, 7, 0, Math.PI * 2, true);
                o.closePath();
                o.stroke();
                b.call(o, d, 2, 4, 10);
                b.call(o, j, 2, 5, 10)
            } catch (n) {
            }
        });
        return this
    }
})();
(function (a, d) {
    var b, c;

    function f(a, b) {
        var b = b || {}, c = this, f = $(a), d = $('<div class="dummy">');
        this.data = b.data || {};
        this.$dummy = d.appendTo(f);
        this.options = b;
        f.on("mousedown", ".ico-remove", function (a) {
            a.stopPropagation()
        });
        f.on("mousedown", ".dbox-item", function (a) {
            var b = $(this);
            if (!b.hasClass("is-clone")) {
                l.onMousedown(c);
                c.$items = f.find(".dbox-item");
                b.on("mousemove", function () {
                    c.offset = j(a, b);
                    c.elOffset = f.offset();
                    c.limitMax = {x: f.width() - b.outerWidth(), y: f.height() - b.outerHeight()};
                    c.createDummy(a,
                        b);
                    b.off("mousemove").off("mouseup")
                }).on("mouseup", function () {
                    b.off("mousemove").off("mouseup")
                })
            }
        });
        this.$el = f
    }

    function g() {
        function a() {
            $.each(b.days, function () {
                this.photos.reLayout()
            })
        }

        var b = this;
        b.days = {};
        $(".day:not(.add-day)").each(function () {
            b.days[this.id] = new t({el: this})
        });
        WindowResizeListener.add(a);
        a()
    }

    function j(a, b) {
        var c = $(b).offset();
        return {x: a.pageX - c.left, y: a.pageY - c.top}
    }

    function m(a, b) {
        var b = $(b), c = b.outerWidth(), f = b.outerHeight(), d = b.offset();
        return a.x >= d.left && a.x <= d.left +
        c && a.y >= d.top && a.y <= d.top + f ? {left: a.x - d.left < c / 2} : false
    }

    var o = $(d), n = $(a);
    f.prototype = {
        createDummy: function (a, b) {
            this.clean();
            var c = b.clone().css("margin", "0").addClass(".is-clone");
            this.$dummy.empty().append(c).show();
            this.clickItem = b.css("visibility", "hidden");
            this.clickItemIndex = this.$items.index(b);
            this.moveDummy(a)
        }, clean: function () {
            this.$dummy.hide();
            if (this.clickItem && this.clickItem.length) {
                this.clickItem.css("visibility", "visible");
                this.clickItem = null
            }
        }, moveDummy: function (a) {
            var b = a.pageY -
                this.elOffset.top - this.offset.y, b = {
                left: Math.min(Math.max(a.pageX - this.elOffset.left - this.offset.x, 0), this.limitMax.x),
                top: Math.min(Math.max(b, 0), this.limitMax.y)
            };
            this.$dummy.css(b);
            var c = {x: a.pageX, y: a.pageY}, f = this;
            f.$items.each(function () {
                var a = $(this), b = m(c, this);
                if (b) {
                    if (f.clickItem[0] !== this) {
                        b.left ? a.before(f.clickItem) : a.after(f.clickItem);
                        f.$items = f.$el.find(">.dbox-item")
                    }
                    return false
                }
            })
        }, onMouseup: function () {
            if (this.clickItem && this.clickItem.length) {
                var a = this.$items.index(this.clickItem);
                this.clickItemIndex != a && this.trigger("statuschange", this, this.clickItem.data("id"), a)
            }
            this.clean()
        }
    };
    _.extend(f.prototype, Backbone.Events);
    var l, p;
    l = {
        onMousedown: function (a) {
            p = a;
            $(d).on("mousemove", this.onMousemove).on("mouseup", this.onMouseup)
        }, onMouseup: function (a) {
            $(d).off("mousemove", this.onMousemove).off("mouseup", this.onMouseup);
            p && p.onMouseup(a)
        }, onMousemove: function (a) {
            p && p.moveDummy(a)
        }
    };
    var r, w, v, s, x, B, E, y, D;
    r = {
        init: function (a) {
            w = a;
            o.on("photos:mousedown", function (a, b) {
                v = b
            })
        }, onMousedown: function (a) {
            b =
                a.clientX;
            c = a.clientY;
            o.on("mousemove", this.onMousemove).on("mouseup", this.onMouseup)
        }, onMouseup: function (a) {
            $(d).off("mousemove", this.onMousemove).off("mouseup", this.onMouseup);
            $.clearTimer(B);
            E = false;
            $.clearTimer(y);
            D = false;
            w.clearActive();
            if (v && v.isMousedown) {
                w.checkDropInside(a, v);
                s && s.remove();
                s = null;
                v.stopDrag();
                v.isMousedown = false
            }
        }, onMousemove: function (f) {
            if (v && v.isMousedown) {
                var d = this;
                Date.now();
                d.mousemoveEvent = f;
                if (!s) {
                    if (v) {
                        x = v.clickPos;
                        var g = v.getSelected(), j = v.clickItem, l = [];
                        s = $('<div class="dragger" unselectable="on"><div class="photos-count"></div><div class="mask"></div></div>');
                        s.find(".photos-count").text(g.length + "\u5f20");
                        $.each(g, function (f) {
                            var d, p, m = $('<div class="clone-photo">'), q = $(g[f]).offset();
                            p = $(a);
                            d = q.left - p.scrollLeft();
                            p = q.top - p.scrollTop();
                            q = j[0] === g[f];
                            d = {left: d - b + x.x, top: p - c + x.y, zIndex: q ? 1 : 0};
                            f = $(g[f]).find("img").clone();
                            m.append(f);
                            m.css(d);
                            q ? l.unshift(m) : l.push(m)
                        });
                        $.each(l, function (a) {
                            s.append(l[a])
                        });
                        $("body").append(s);
                        setTimeout(function () {
                            $.each(l, function (a) {
                                var b = {left: 0, top: 0};
                                $.support.cssAttrCheck("transform") ? l[a].css(b) : l[a].animate(b,
                                    200)
                            });
                            setTimeout(function () {
                                s && s.addClass("dragger-bundled")
                            }, 100)
                        }, 0)
                    }
                    v.startDrag()
                }
                s.css({left: f.pageX - x.x, top: f.pageY - x.y});
                if (!D) {
                    D = true;
                    $.clearTimer(y);
                    y = setTimeout(function () {
                        y = setInterval(function () {
                            w.insideTest(d.mousemoveEvent)
                        }, 100)
                    }, 1E3)
                }
                if (!E) {
                    E = true;
                    $.clearTimer(B);
                    var p = function () {
                        if (s) {
                            var a = WindowSize.height, b = n.scrollTop(), c = s.offset(), f;
                            if (c.top - b < 0) {
                                f = true;
                                $("html,body").animate({scrollTop: "-=" + Math.ceil(a * 0.7)}, {duration: 500})
                            } else if (b + a - c.top < 80) {
                                f = true;
                                $("html,body").animate({
                                    scrollTop: "+=" +
                                    Math.ceil(a * 0.7)
                                }, {duration: 500})
                            }
                            if (f) {
                                $.clearTimer(B);
                                setTimeout(function () {
                                    B = setInterval(p, 1E3)
                                }, 1500)
                            }
                        }
                    };
                    B = setInterval(p, 1E3)
                }
            }
        }
    };
    var t = Backbone.View.extend({
        initialize: function (a) {
            Backbone.View.prototype.initialize.call(this, a);
            var b = this;
            b.defaultNodeId = b.$el.data("default-node-id");
            b.dayId = b.$el.data("id");
            b.photos = new A({el: b.$el.find(".photo-list")});
            b.nodes = new J({el: b.$el.find(".nodes"), dayId: b.dayId});
            b.nodes.on("node:deleted", function (a, c) {
                b.photos.unbindNode(c)
            });
            b.$body = b.$el.find(".container");
            b.$el.on("mousedown.dotted", function (a) {
                var c = $(a.target).parents();
                if (!c.hasClass("photo") && !c.hasClass("trip-node") && !c.hasClass("header")) {
                    b._photoState = {};
                    $.each(b.photos.children(), function () {
                        var a = $(this);
                        b._photoState[a.data("note-id")] = {
                            $el: a,
                            selected: a.hasClass("selected"),
                            pos: $.extend(a.offset(), {width: a.width(), height: a.height()})
                        }
                    });
                    o.on("mousemove.dotted", function (a) {
                        b._moveDotted(a);
                        b._selectPhoto(a)
                    }).on("mouseup.dotted", function (a) {
                        o.off("mousemove.dotted mousedown.dotted mouseup.dotted");
                        b._hideDotted(a);
                        b._photoState = null
                    });
                    b._showDotted(a)
                }
            });
            b.updateNodeCount()
        }, _rect: function (a, b) {
            var c = Math.abs(a.x - b.x), f = Math.abs(a.y - b.y);
            return {left: Math.min(a.x, b.x), top: Math.min(a.y, b.y), width: c, height: f}
        }, _selectPhoto: function (a) {
            var b = this._rect({x: a.pageX, y: a.pageY}, this._dottedStartPoint);
            $.each(this._photoState, function () {
                var a = this.$el, c = this.pos, f;
                $.each([{x: c.left, y: c.top}, {x: c.left + c.width, y: c.top}, {
                    x: c.left,
                    y: c.top + c.height
                }, {x: c.left + c.width, y: c.top + c.height}], function () {
                    var a;
                    a = this.x > b.left && this.x < b.left + b.width && this.y > b.top && this.y < b.top + b.height ? true : false;
                    if (a) {
                        f = true;
                        return false
                    }
                });
                f ? a.addClass("selected") : a.removeClass("selected")
            })
        }, _moveDotted: function (a) {
            a = {x: a.pageX, y: a.pageY};
            $("#dotted-frame").css(this._rect(a, this._dottedStartPoint))
        }, _hideDotted: function () {
            $("#dotted-frame").hide().css({top: 0, left: 0, width: 0, height: 0})
        }, _showDotted: function (a) {
            this._dottedStartPoint = {x: a.pageX, y: a.pageY};
            $("#dotted-frame").css({left: a.pageX, top: a.pageY}).show()
        }, clearActive: function () {
            this.$body.removeClass("day-active");
            this.nodes.clearActive()
        }, insideTest: function (a) {
            var b = {x: a.pageX, y: a.pageY}, a = this.$body;
            if (m(b, a)) {
                b = this.nodes.insideTest(b);
                b === false ? a.addClass("day-active") : b.addClass("trip-node-active");
                return true
            }
            return false
        }, dropInside: function (a, b) {
            var c = this.$body, f = {x: a.pageX, y: a.pageY}, d = b.getSelected(), g = b.getSelectedIds();
            if (m(f, c)) {
                var j, f = this.nodes.insideTest(f);
                if (f !== false) {
                    j = true;
                    c = f.data("id");
                    f = f.data("name");
                    if (!c) return false;
                    b.bindNode(c, f) && this.photos.trigger("note:bound", this.dayId,
                        c, g);
                    this.updateNodeCount(true)
                }
                if (b !== this.photos) {
                    j || b.unbindNode();
                    this.photos.$el.prepend(d);
                    this.photos.chkPhotos();
                    b.chkPhotos();
                    j || this.photos.trigger("note:bound", this.dayId, this.defaultNodeId, g);
                    this.photos.clearSelected()
                }
                j && this.photos.clearSelected();
                this.photos.stopDrag();
                return true
            }
            return false
        }, updateNodeCount: function (a) {
            var b = this;
            this.nodes.getChildren().each(function () {
                var c = $(this), f = c.data("id"), f = b.photos.photosCount(f), d = c.find(".count"),
                    g = parseInt(d.text());
                isNaN(g) && (g = 0);
                f > 0 ? d.text(f + " \u5f20").show() : d.html('<span style="color:#F7002F">\u672a\u5173\u8054\u76f8\u7247</span>').show();
                if (a) {
                    f = f - g;
                    if (f > 0) {
                        var j = $('<div class="bubble">' + (f > 0 ? "+" : "") + f + "</div>").appendTo(c);
                        f > 0 && j.addClass("bubble-add");
                        j.animate({top: -40}, 500, function () {
                            setTimeout(function () {
                                j.fadeOut(500, function () {
                                    j.remove()
                                })
                            }, 1E3)
                        })
                    }
                }
            })
        }
    }), A = Backbone.View.extend({
        initialize: function (a) {
            Backbone.View.prototype.initialize.call(this, a);
            var b = this;
            b.$el.on("mousedown mouseup", ".photo .unbind-note, .photo .ico-remove",
                function (a) {
                    a.stopPropagation()
                });
            b.$el.find(".photo").on("click", ".unbind-note", function (a) {
                a.stopPropagation();
                var a = $(a.delegateTarget), c = a.data("note-id");
                a.find(".node-name span").empty();
                a.find(".node-name").addClass("hidden");
                b.trigger("note:unbound", c)
            }).on("click", ".ico-remove", function (a) {
                a.stopPropagation();
                var c = $(a.delegateTarget);
                $.confirm("\u786e\u8ba4\u5220\u9664\u8fd9\u5f20\u76f8\u7247\uff1f", function (a) {
                    if (a) {
                        a = c.data("note-id");
                        c.remove();
                        b.trigger("note:deleted", a);
                        var a = $("#photo-action .photo-num"),
                            f = a.text() - 0 || 0;
                        a.text(f - 1);
                        $("#photo-action .link-upload").show();
                        $("#photo-action .overload").hide()
                    }
                })
            });
            var c;
            this.$el.on("mousedown", ".photo", function (a) {
                var f = $(this), d = a.shiftKey;
                o.trigger("photos:mousedown", b);
                b.isMousedown = true;
                b.clickItem = f;
                b.clickPos = j(a, f);
                f.on("mouseup", function () {
                    clearTimeout(c);
                    f.off("mousemove").off("mouseup");
                    b.isMousedown = false;
                    var a = f.data("note-id"), g, j;
                    if (d && b.lastSelectPhotoId > 0) b.$el.find(".photo").removeClass("selected").each(function () {
                        var c = $(this), f = c.data("note-id");
                        if (!g && (f === b.lastSelectPhotoId || f === a) && !(f === b.lastSelectPhotoId && f === a)) {
                            g = true;
                            j = f
                        }
                        if (g) {
                            c.addClass("selected");
                            if (f !== j && (f === b.lastSelectPhotoId || f === a)) return false
                        }
                    }); else if (f.hasClass("selected")) {
                        f.removeClass("selected");
                        b.lastSelectPhotoId = 0
                    } else {
                        f.addClass("selected");
                        b.lastSelectPhotoId = a
                    }
                });
                clearTimeout(c);
                c = setTimeout(function () {
                    r.onMousedown(a);
                    f.on("mousemove", function () {
                        f.off("mousemove").off("mouseup");
                        f.hasClass("selected") || f.addClass("selected")
                    })
                }, 30)
            })
        }, children: function () {
            return this.$(".photo")
        },
        photosCount: function (a) {
            return this.$el.find('.photo[data-node-id="' + a + '"]').length
        }, chkPhotos: function () {
            this.$el.find(".photo").length ? this.$el.find(".no-photo").hide() : this.$el.find(".no-photo").show()
        }, unbindNode: function (a) {
            var a = a ? this.$el.find('.photo[data-node-id="' + a + '"]') : this.getSelected(), b = a.length;
            a.find(".node-name").addClass("hidden").find("span").text("");
            return b
        }, bindNode: function (a, b) {
            var c = this.getSelected().attr("data-node-id", a);
            c.find(".node-name").removeClass("hidden").find("span").text(b);
            return c.length
        }, clearSelected: function () {
            this.getSelected().removeClass("selected")
        }, getSelected: function () {
            return this.$el.find(".selected")
        }, getSelectedIds: function () {
            var a = [];
            this.getSelected().each(function () {
                a.push($(this).data("note-id"))
            });
            return a
        }, startDrag: function () {
            this.isDragging = true;
            this.getSelected().addClass("mv")
        }, stopDrag: function () {
            this.isDragging = false;
            this.$el.find(".photo").removeClass("mv")
        }, reLayout: function () {
            var a = this.$el.find(".photo");
            if (a.length) {
                var b = this.$el.width(),
                    c = a.eq(0).width() + 20, f = Math.floor(b / c);
                a.css({"margin-left": Math.floor((b - (c - 20) * f) / (f + 1))})
            }
        }
    }), J = Backbone.View.extend({
        initialize: function (a) {
            Backbone.View.prototype.initialize.call(this, a);
            var b = this;
            this.$addBtn = this.$el.find(".add-node");
            this.$addBtn.find(".iframe").fancybox({
                scrolling: "no",
                padding: 0,
                width: 700,
                height: 440,
                hideOnOverlayClick: false,
                transitionIn: "none",
                transitionOut: "none"
            });
            this.$el.on("click", ".ico-remove", function () {
                var a = $(this).parent(".trip-node");
                $.confirm("\u786e\u8ba4\u5220\u9664\u8fd9\u4e2a\u62cd\u6444\u5730\u70b9\uff1f",
                    function (c) {
                        if (c) {
                            c = a.data("id");
                            b.trigger("node:deleted", b.options.dayId, c);
                            a.remove()
                        }
                    })
            })
        }, getChildren: function () {
            return this.$el.find(".trip-node:not(.add-node)")
        }, insideTest: function (a) {
            var b = false;
            this.$el.find(".trip-node").each(function () {
                if (m(a, this)) {
                    b = $(this);
                    return false
                }
            });
            return b
        }, clearActive: function () {
            this.$el.find(".trip-node").removeClass("trip-node-active")
        }, addNode: function (a) {
            if (!a || this.$el.find('.trip-node[data-id="' + a.id + '"]').length) return false;
            this.$addBtn.before('<div class="dbox-item trip-node" unselectable="on" data-id="' +
                a.id + '" data-name="' + a.name + '"><div class="ico ' + a.type + '"></div><div class="name" unselectable="on">' + a.name + '</div><div class="count" unselectable="on"><span style="color:#F7002F">\u672a\u5173\u8054\u76f8\u7247</span></div><i class="ico-remove"></i><i class="ico-arrow"></i></div>');
            if (_G_guide) {
                $(".add-node:first").removeBubbletip([$("#no-node")]);
                setTimeout(function () {
                    $(".trip-node:not(.add-node):first").bubbletip($("#first-add-node"), {
                        alwayShow: true,
                        deltaDirection: "top"
                    })
                }, 500);
                _G_guide = false
            }
        }
    });
    g.prototype = {
        checkDropInside: function (a, b) {
            $.each(this.days, function () {
                if (this.dropInside(a, b)) return false
            })
        }, insideTest: function (a) {
            this.clearActive();
            $.each(this.days, function () {
                if (this.insideTest(a)) return false
            })
        }, clearActive: function () {
            $.each(this.days, function () {
                this.clearActive()
            })
        }, getDay: function (a) {
            return this.days[a]
        }
    };
    a.tripDaysInit = function (a) {
        function b() {
            $(".trip-node:not(.add-node):first").removeBubbletip([$("#first-add-node")])
        }

        setUnselectable($("body"), "on");
        $("body").on("mousedown",
            "img", function (a) {
                a.preventDefault()
            });
        $("#photo-action").on("mouseover", ".serial-tip", function () {
            $("#photo-action .serial-tip-detail").show()
        }).on("mouseout", ".serial-tip", function () {
            $("#photo-action .serial-tip-detail").hide()
        });
        var c = new g;
        r.init(c);
        $.each(c.days, function () {
            this.photos.on("note:unbound", function (b) {
                $.ajax({type: "PUT", url: "/trips/" + a + "/notes/" + b + "/unbind"})
            });
            this.photos.on("note:deleted", function (b) {
                $.ajax({type: "DELETE", url: "/trips/" + a + "/notes/" + b})
            });
            this.photos.on("note:bound",
                function (c, f, d) {
                    b();
                    $.ajax({
                        type: "PUT",
                        url: "/trips/" + a + "/trip_days/" + c + "/nodes/" + f + "/bind_notes",
                        data: {note_ids: d}
                    })
                });
            this.nodes.on("node:deleted", function (c, f) {
                b();
                $.ajax({type: "DELETE", url: "/trips/" + a + "/trip_days/" + c + "/nodes/" + f})
            })
        });
        $(".dbox").each(function () {
            var b = new f(this), c = $(this).data("id");
            b.on("statuschange", function (b, f, d) {
                $.ajax({type: "PUT", url: "/trips/" + a + "/trip_days/" + c + "/nodes/" + f, data: {position: d}})
            })
        });
        $(window).on("node:added", function (a, b, f) {
            var d = c.getDay("day-" + b);
            d && $.each(f,
                function (a) {
                    d.nodes.addNode(f[a])
                })
        })
    }
})(window, document);
$.fn.tabable = function (a) {
    a = a || {};
    this.each(function () {
        function d(b) {
            c.removeClass(a.currentClass).eq(b).addClass(a.currentClass);
            f.hide().eq(b).show()
        }

        var b = $(this), c = b.find(a.nav), f = b.find(a.contents);
        c.each(function (a) {
            $(this).click(function () {
                d(a);
                return false
            })
        });
        d(0)
    })
};
var NodeAddManager;
(function (a, d) {
    $(a);
    $(d);
    var b, c, f = [];
    NodeAdderManager = {
        add: function (a) {
            f.push(a)
        }, getSelected: function () {
            var a = [];
            $.each(f, function () {
                a = a.concat(this.getSelected())
            });
            return a
        }
    };
    $.fn.isNodeAdder = function () {
        this.each(function () {
            var a = $(this), b = a.find(".search-panel"), c = !!b.length, f,
                d = new j({el: a.find(".add-panel"), searchBar: c});
            if (c) {
                f = new g({el: b});
                f.on("node:createnew", function (a) {
                    d.$key.val(a).focus();
                    d.$el.show();
                    b.hide()
                }).on("node:remove", function (a, b) {
                    d.del(b)
                });
                NodeAdderManager.add(f)
            }
            NodeAdderManager.add(d);
            d.on("node:created node:createcancel", function (a) {
                if (c) {
                    b.show();
                    d.$el.hide();
                    f.hideResult();
                    a && f.insert(0, a)
                }
            })
        });
        return this
    };
    var g = Backbone.View.extend({
        initialize: function (a) {
            Backbone.View.prototype.initialize.call(this, a);
            var f = this, a = this.$el, d = this.$key = a.find(".key"), g = this.$results = a.find(".search-results");
            this.$searchBar = a.find(".node-search-bar");
            this.$nearby = a.find(".nearby");
            this.$nearbyList = this.$nearby.find(".nearby-list");
            this.type = a.find('input[name="type"]').val();
            this.repository =
                {};
            this.selected = [];
            var j = {}, r, w;
            this.$nearbyList.on("click", ".trip-node", function () {
                f.add($(this).data("id"))
            });
            a.find(".inputer").click(function () {
                d.focus()
            });
            a.on("click", ".added .ico", function () {
                var a = $(this).parent(), b = a.data("id");
                b > 0 ? f.del(b) : f.trigger("node:remove", 0, a.data("name"));
                a.remove()
            });
            g.on("click", ".item", function () {
                $(this).addClass("current");
                f.selectCurrent()
            }).on("click", ".create", function () {
                f.trigger("node:createnew", w);
                d.val("")
            });
            d.keydown(function (a) {
                switch (a.keyCode) {
                    case 38:
                        f.prevItem();
                        break;
                    case 40:
                        f.nextItem();
                        break;
                    case 13:
                        a.preventDefault();
                        f.selectCurrent();
                        break;
                    case 27:
                        a.preventDefault();
                        a.stopPropagation();
                        d.val("")
                }
            }).focus(function () {
                clearInterval(r);
                r = setInterval(function () {
                    var a = $.trim(d.val());
                    if (w != a) if ((w = a) && w.length > 1) {
                        f.currentKey = w;
                        if (j[w]) {
                            f.parseData(j[w]);
                            f.positionResults()
                        } else {
                            a = {q: w, entry_type: f.type};
                            if (c && b) {
                                a.last_entry_type = b;
                                a.last_entry_id = c
                            }
                            $.ajax({
                                url: _G_search_url, type: "GET", dataType: "json", data: a, success: function (a) {
                                    if (a && a.q) {
                                        j[a.q] = a.entries;
                                        if (a.q == w) {
                                            f.parseData(a.entries);
                                            f.positionResults()
                                        }
                                    }
                                }
                            })
                        }
                    } else f.parseData(null)
                }, 20)
            }).blur(function () {
                clearInterval(r)
            })
        }, getSelected: function () {
            var a = [], b = this;
            $.each(this.selected, function (c) {
                a.push({entry_type: b.type, entry_id: b.selected[c]})
            });
            return a
        }, selectCurrent: function () {
            var a = this.$results.find(".current");
            if (a.length) if (a.hasClass("create")) {
                this.trigger("node:createnew", this.$key.val());
                this.$key.val("")
            } else {
                a = a.data("id");
                this.add(a);
                this.hideResult();
                this.$key.val("");
                c = a;
                b = this.type;
                this.getNearby(a)
            }
        }, prevItem: function () {
            var a = this.$results.find("li");
            if (this.$currentItem) {
                this.$currentItem.removeClass("current");
                var b = this.$currentItem.prev();
                this.$currentItem = b.length ? b.addClass("current") : a.last().addClass("current")
            } else this.$currentItem = a.last().addClass("current");
            this._autoScroll()
        }, nextItem: function () {
            var a = this.$results.find("li");
            if (this.$currentItem) {
                this.$currentItem.removeClass("current");
                var b = this.$currentItem.next();
                this.$currentItem = b.length ? b.addClass("current") :
                    a.eq(0).addClass("current")
            } else this.$currentItem = a.eq(0).addClass("current");
            this._autoScroll()
        }, _autoScroll: function () {
            var a = this.$currentItem.parent(), b = this.$currentItem.position(), c = a.height(), f = a.scrollTop(),
                d = this.$currentItem.outerHeight();
            (b.top < 0 || b.top + d >= c) && a.animate({scrollTop: f + (b.top - c + d)}, {duration: 100})
        }, hideResult: function () {
            this.$results.hide().find("ul").html("")
        }, add: function (a) {
            if ((a = this.repository[a]) && _.indexOf(this.selected, a.id) < 0) {
                this.selected.push(a.id);
                this.insert(a.id,
                    a.name_zh_cn)
            }
        }, del: function (a) {
            this.selected = _.without(this.selected, a)
        }, insert: function (a, b) {
            this.$key.before('<span data-id="' + (a || 0) + '" data-name="' + b + '" class="added"><span>' + b + '</span><i class="ico"></i></span>')
        }, positionResults: function () {
            var a = this.$searchBar.outerHeight();
            this.$results.css({top: a})
        }, parseData: function (a) {
            if (a) {
                var b = "", c = this;
                $.each(a, function () {
                    b = b + ('<li class="item" data-id="' + this.id + '">' + this.name_zh_cn + (this.name_alias ? "(" + this.name_alias + ")" : "") + ", " + this.destination +
                        "</li>");
                    c.repository[this.id] || (c.repository[this.id] = this)
                });
                b = b + ('<li class="create">+ \u521b\u5efa \u201c' + escape(this.currentKey) + "\u201d</li>");
                this.$results.show().find("ul").html(b).scrollTop(0)
            } else this.hideResult()
        }, getNearby: function (a) {
            var b = this;
            b.$nearbyList.html("").addClass("loading");
            b.$nearby.show();
            $.ajax({
                url: _G_nearby_url, type: "GET", data: {entry_type: this.type, q: a}, success: function (a) {
                    b.parseNearby(a)
                }
            })
        }, parseNearby: function (a) {
            if (a && a.length) {
                var b = "", c = this;
                $.each(a, function () {
                    b =
                        b + ('<li class="trip-node" data-id="' + this.id + '"><i class="ico ' + this.type + '"></i><span class="name">' + this.name_zh_cn + "</span></li>");
                    c.repository[this.id] || (c.repository[this.id] = this)
                });
                this.$nearbyList.removeClass("loading").html(b)
            } else this.$nearby.hide()
        }
    }), j = Backbone.View.extend({
        initialize: function (a) {
            Backbone.View.prototype.initialize.call(this, a);
            var b = this, c = this.$el, f = this.$key = c.find("input.key"), d = this.$btnOk = c.find(".ok"),
                g = this.$btnCancel = c.find(".cancel");
            this.type = c.find('input[name="type"]').val();
            this.added = [];
            if (!a.searchBar) c.on("click", ".added .ico", function () {
                var a = $(this).parent();
                a.remove();
                b.del(a.data("name"))
            });
            c.find(".inputer").click(function () {
                f.focus()
            });
            g.click(function () {
                b.trigger("node:createcancel");
                f.val("");
                return false
            });
            f.keydown(function (a) {
                a.keyCode === 13 && b._enter()
            });
            d.click(function () {
                b._enter()
            })
        }, _enter: function () {
            var a = this.$key.val();
            if (a != this.$key.attr("placeholder")) {
                if ($.getByteLen(a) > 28) {
                    this.$key.showErrorTips();
                    return false
                }
                if (a) {
                    this.add(a);
                    this.trigger("node:created",
                        a, this.type)
                }
                this.$key.val("")
            }
        }, getSelected: function () {
            this._enter();
            var a = [], b = this;
            $.each(this.added, function (c) {
                a.push({user_entry: true, entry_type: b.type, name: b.added[c]})
            });
            return a
        }, add: function (a) {
            if (_.indexOf(this.added, a) < 0) {
                this.added.push(a);
                this.options.searchBar || this.$key.before('<span class="added" data-name="' + a + '"><span>' + a + '</span><i class="ico"></i></span>')
            }
        }, del: function (a) {
            this.added = _.without(this.added, a)
        }
    })
})(window, document);
$.fn.score = function (a) {
    a = a || {};
    this.each(function () {
        var d = $(this), b = d.find("a.checked"), c = d.find("a");
        c.removeClass("checked");
        a.score > 0 && (b = c.eq(a.score - 1).addClass("checked"));
        a.receiver && $(a.receiver).val(a.score || 0);
        if (d.data("score-inited")) return false;
        c.each(function (c) {
            var d = $(this);
            d.on("click", function () {
                b && b.removeClass("checked");
                b = d.addClass("checked");
                a.receiver && $(a.receiver).val(c + 1);
                return false
            })
        });
        d.data("score-inited", true)
    });
    return this
};
var TripUnitTest = {
    validsize: function (a) {
        return "width" in a && "height" in a && "left" in a && "top" in a
    }
}, tripshow = {
    View: {
        TripShow: function () {
            return {
                init: function () {
                    this.$logo = $(".logo");
                    this.$topMenu = $(".show-top-menu");
                    this.$moreLink = $(".more-travels");
                    this.$header = $(".cover-header");
                    this.$thumb = $("#open-trips")
                }, openMode: function (a) {
                    var d = this;
                    if (d.mode !== a) {
                        switch (a) {
                            case "trainView":
                                $("body").addClass("mode-train-view");
                                $.support.cssAttrCheck("transition") || d.$logo.animate({top: "-=200"}, 300, function () {
                                    d.$logo.css({
                                        top: "auto",
                                        bottom: 12
                                    })
                                });
                                break;
                            case "editCoverPhoto":
                                $("body").addClass("edit-cover");
                                if (!$.support.cssAttrCheck("transition")) {
                                    this.$logo.animate({top: "-=200"}, 300);
                                    this.$topMenu.animate({top: "-=200"}, 300);
                                    this.$moreLink.animate({right: "-=500"}, 300);
                                    this.$thumb.animate({left: "+=300"}, 300)
                                }
                        }
                        this.mode = a
                    }
                }, closeMode: function (a) {
                    var d = this;
                    switch (a) {
                        case "trainView":
                            $("body").removeClass("mode-train-view");
                            $.support.cssAttrCheck("transition") || d.$logo.animate({bottom: "-=200"}, 300, function () {
                                d.$logo.css({
                                    top: 10,
                                    bottom: "auto"
                                })
                            });
                            break;
                        case "editCoverPhoto":
                            $("body").removeClass("edit-cover");
                            if (!$.support.cssAttrCheck("transition")) {
                                this.$logo.animate({top: "+=200"}, 300);
                                this.$topMenu.animate({top: "+=200"}, 300);
                                this.$moreLink.animate({right: "+=500"}, 300);
                                this.$thumb.animate({left: "-=300"}, 300)
                            }
                    }
                    this.mode = null
                }
            }
        }()
    }
};
(function (a) {
    var d = [["\u4eba\u6c11\u5e01", "CNY", "\u5143"], ["\u7f8e\u5143", "USD", "\u7f8e\u5143"], ["\u6b27\u5143", "EUR", "\u6b27\u5143"], ["\u82f1\u9551", "GBP", "\u82f1\u9551"], ["\u65e5\u5143", "JPY", "\u65e5\u5143"], ["\u6e2f\u5e01", "HKD", "\u6e2f\u5e01"], ["\u6cf0\u94e2", "THB", "\u6cf0\u94e2"], ["\u97e9\u5143", "KRW", "\u97e9\u5143"], ["\u65b0\u53f0\u5e01", "TWD", "\u53f0\u5e01"], ["\u65b0\u52a0\u5761\u5143", "SGD", "\u65b0\u5e01"], ["\u5362\u5e03", "RUB", "\u5362\u5e03"], ["\u6fb3\u5143", "AUD", "\u6fb3\u5143"], ["\u65b0\u897f\u5170\u5143",
        "NZD", "\u7ebd\u5e01"], ["\u5370\u5c3c\u76fe", "IDR", "\u5362\u6bd4"], ["\u9a6c\u6765\u897f\u4e9a\u5143", "MYR", "MYR"], ["\u6fb3\u95e8\u5143", "MOP", "\u8461\u5e01"], ["\u745e\u58eb\u6cd5\u90ce", "CHF", "\u745e\u90ce"], ["\u5370\u5ea6\u5362\u6bd4", "INR", "\u5362\u6bd4"], ["\u5357\u975e\u5170\u7279", "ZAR", "\u5170\u7279"], ["\u57c3\u53ca\u9551", "EGP", "\u57c3\u9551"], ["\u83f2\u5f8b\u5bbe\u6bd4\u7d22", "PHP", "\u6bd4\u7d22"], ["\u963f\u6839\u5ef7\u6bd4\u7d22", "ARS", "\u6bd4\u7d22"], ["\u51b0\u5c9b\u514b\u6717", "ISK", "\u514b\u6717"],
        ["\u4e39\u9ea6\u514b\u6717", "DKK", "\u514b\u6717"], ["\u798f\u6797", "HUF", "\u798f\u6797"], ["\u54e5\u4f26\u6bd4\u4e9a\u6bd4\u7d22", "COP", "\u6bd4\u7d22"], ["\u6377\u514b\u514b\u6717", "CZK", "\u514b\u6717"], ["\u52a0\u5143", "CAD", "\u52a0\u5143"], ["\u80af\u5c3c\u4e9a\u5148\u4ee4", "KES", "\u5148\u4ee4"], ["\u96f7\u4e9a\u5c14", "BRL", "BRL"], ["\u62c9\u83f2\u4e9a", "MVR", "MVR"], ["\u58a8\u897f\u54e5\u6bd4\u7d22", "MXN", "\u6bd4\u7d22"], ["\u6bdb\u91cc\u6c42\u65af\u5362\u6bd4", "MUR", "\u5362\u6bd4"], ["\u5c3c\u6cca\u5c14\u5362\u6bd4",
            "NPR", "\u5362\u6bd4"], ["\u632a\u5a01\u514b\u6717", "NOK", "\u514b\u6717"], ["\u745e\u5178\u514b\u6717", "SEK", "\u514b\u6717"], ["\u745e\u5c14", "KHR", "\u745e\u5c14"], ["\u65af\u91cc\u5170\u5361\u5362\u6bd4", "LKR", "\u5362\u6bd4"], ["\u571f\u8033\u5176\u65b0\u91cc\u62c9", "TRY", "\u91cc\u62c9"], ["\u65b0\u7d22\u5c14", "PEN", "\u7d22\u5c14"], ["\u8d8a\u5357\u76fe", "VND", "\u76fe"], ["\u667a\u5229\u6bd4\u7d22", "CLP", "\u6bd4\u7d22"], ["\u5179\u7f57\u63d0", "PLN", "PLN"], ["\u8001\u631d\u57fa\u666e", "LAK", "\u57fa\u666e"],
        ["\u7f05\u7538\u5143", "MMK", "\u7f05\u5143"]], b;
    a.TripUtils = {
        resizeCount: 0, getNoteHash: function (a) {
            var b = tripshow.View.Note.NOTE_TYPE, d = false;
            if (a) {
                var j = a.model.get("sid");
                switch (a.type) {
                    case b.DAY:
                        d = "day/" + j;
                        break;
                    case b.NODE:
                        d = "nd/" + j;
                        break;
                    case b.VIDEO:
                    case b.TEXT:
                    case b.PHOTO:
                        d = "nt/" + j;
                        break;
                    case b.THEEND:
                    case b.TIPS:
                        d = "end"
                }
            }
            return d
        }, getPriceLabel: function (a) {
            a = a.toLowerCase();
            switch (a) {
                case "attraction":
                case "sight":
                    return "\u95e8\u7968";
                case "activity":
                case "restaurant":
                    return "\u4eba\u5747";
                case "hotel":
                    return "\u623f\u95f4"
            }
        }, PriceCurrencyManager: {
            lastPriceCurrency: "CNY", optionString: function () {
                if (!b) {
                    var a = "";
                    $.each(d, function (b) {
                        a = a + ('<option value="' + d[b][1] + '">' + d[b][0] + "</option>")
                    });
                    b = a
                }
                return b
            }, getName: function (a) {
                var b = "";
                $.each(d, function (g) {
                    g = d[g];
                    if (g[1] === a) {
                        b = g[2] || g[1];
                        return false
                    }
                });
                return b
            }
        }, noteServerType: function (a) {
            var b = tripshow.View.Note.NOTE_TYPE;
            switch (a) {
                case b.VIDEO:
                case b.PHOTO:
                case b.TEXT:
                    return "note";
                case b.NODE:
                    return "node";
                case b.TIPS:
                    return "tip"
            }
            return a
        }
    }
})(window);
var AudioPlayer = function () {
    var a, d = {
        currentAudioPlayButton: null, audioButtonHidden: null, currentAudioPlayProgress: null, getPlayer: function (b) {
            if (a) b && b(a); else {
                document.getElementById("audio-player-c") || $("body").append('<div id="audio-player-c" style="position:absolute;top:-999px;left:-999px;"><audio preload="auto" id="audio-player" /></div>');
                audiojs.events.ready(function () {
                    a = audiojs.create(document.getElementById("audio-player"), {
                        trackEnded: function () {
                            if (d.currentAudioPlayButton) {
                                d.currentAudioPlayButton.show();
                                d.currentAudioPlayButton.removeClass("play-pause");
                                d.currentAudioPlayProgress && d.currentAudioPlayProgress.hide()
                            }
                        }, loadError: function () {
                            if (d.currentAudioPlayButton) {
                                d.currentAudioPlayButton.show();
                                d.currentAudioPlayButton.removeClass("play-pause")
                            }
                        }, play: function () {
                            if (d.currentAudioPlayButton) {
                                d.audioButtonHidden && d.currentAudioPlayButton.hide();
                                d.currentAudioPlayButton.addClass("play-pause");
                                d.currentAudioPlayProgress && d.currentAudioPlayProgress.show()
                            }
                        }, pause: function () {
                            if (d.currentAudioPlayButton) {
                                d.currentAudioPlayButton.show();
                                d.currentAudioPlayButton.removeClass("play-pause");
                                d.currentAudioPlayProgress && d.currentAudioPlayProgress.hide()
                            }
                        }, updatePlayhead: function (a) {
                            d.currentAudioPlayProgress && d.currentAudioPlayProgress.css("width", a * 100 + "%")
                        }
                    });
                    b && b(a)
                })
            }
        }
    };
    return d
}();
(function (a, d, b) {
    var c = b(d), f = b(a);
    b.support.cssAttrCheck("transition");
    var g = TripUtils.PriceCurrencyManager, j = "ontouchstart" in document.documentElement, m = isMobileDevice(),
        o = window.devicePixelRatio && window.devicePixelRatio > 1;
    NO_PHOTO_NOTE_WIDTH_RATIO = 12 / 17;
    NO_PHOTO_FULL_NOTE_MAX_WIDTH = 500;
    FONT_SIZE_MAX = 36;
    FONT_SIZE_MIN = 14;
    textNoteFontSize = screen.width < 1440 ? 14 : screen.width <= 1680 ? 16 : 18;
    MEMO_TEMPLATE = {
        price_amount: "<span>{label}{price_amount}{price_currency}</span>",
        food: "<span>\u63a8\u8350\u7f8e\u98df\uff1a{food}</span>",
        time: "<span>\u6e38\u89c8{time}{time_unit}</span>"
    };
    windowMaxHeight = screen.height - (screen.height - WindowSize.height);
    View = {};
    var n = {
        DAY: "day",
        NODE: "node",
        TEXT: "text",
        PHOTO: "photo",
        VIDEO: "video",
        THEEND: "theend",
        TIPS: "tips",
        ACCOUNTBOOK: "accountbook"
    };
    View.FullNote = Backbone.View.extend({
        initialize: function (a) {
            Backbone.View.prototype.initialize.call(this, a);
            var b = this;
            this.$content = this.$el.find(".note-content");
            this._findFooter();
            this.model.on("change", function (a) {
                a.hasChanged("likes_count") || a.hasChanged("comments_count") ?
                    b.renderMeta() : b.render()
            })
        }, _findFooter: function () {
            var a = this;
            a.$footer = a.$el.find(".note-footer");
            a.$like = a.$footer.find(".like").touchClick(function () {
                f.trigger("note:like", [a])
            });
            a.$comment = a.$footer.find(".comment").touchClick(function (b) {
                var c = a.$comment[0];
                b.type = "note:comments";
                b.srcElement = c;
                f.trigger(b, [a, a.type]);
                b.stopPropagation()
            });
            var b = a.$footer.find("time"), c = a.model.get("datetime");
            if (c) b.text(c).clock(); else {
                b.hide();
                a.$footer.addClass("no-date")
            }
        }, render: function () {
            this.renderMeta()
        },
        renderMeta: function () {
            if (this.$like.length) {
                this.$like.find("span").text(this.model.get("likes_count"));
                this.$comment.find("span").text(this.model.get("comments_count"));
                this.model.get("current_user_like") ? this.$like.addClass("liked") : this.$like.removeClass("liked");
                this.model.get("current_user_comment") ? this.$comment.addClass("commented") : this.$comment.removeClass("commented")
            }
        }, position: function () {
        }, close: function () {
            this.$el.hide()
        }
    });
    View.FullDay = View.FullNote.extend({
        initialize: function (a) {
            this.$el =
                b(b("#_tpl_full_note_day").html());
            this.type = n.DAY;
            View.FullNote.prototype.initialize.call(this, a)
        }, render: function () {
            var a = this.$el;
            b(".day-index", a).text("\u7b2c" + this.model.get("day") + "\u5929");
            b(".day-date", a).text(this.model.get("trip_date") || "");
            var c = this.model.get("day_of_week"), a = b(".day-week", a).text(c ? "\u661f\u671f" + c : ""),
                c = this.model.get("weather");
            c != void 0 && a.after('<div class="day-weather"><div class="ico-weather-' + c + '"></div>' + this.model.get("temperature") + "</div>")
        }, position: function () {
            var a =
                WindowSize.height - 40, b = a / 7 * 5;
            this.$el.css({left: Math.ceil((WindowSize.width - b) / 2), top: 20, width: b, height: a})
        }
    });
    View.FullTheEnd = View.FullNote.extend({
        initialize: function (a) {
            this.$el = b(b("#_tpl_full_theend").html());
            this.type = n.THEEND;
            View.FullNote.prototype.initialize.call(this, a)
        }, render: function () {
        }, position: function () {
            var a = WindowSize.height - 40, b = a / 7 * 5;
            this.$el.css({left: Math.ceil((WindowSize.width - b) / 2), top: 20, width: b, height: a})
        }
    });
    View.FullPhotoNote = View.FullNote.extend({
        initialize: function (a) {
            var c =
                this;
            c.type = n.PHOTO;
            c.$el = b(b("#_tpl_full_note_photo").html());
            c.$photo = c.$el.find(".photo");
            c.$description = c.$el.find(".desc");
            c.photoSrc();
            c.descriptionFullDisplayed = true;
            var f = c.model;
            f.on("change", function () {
                if (f.hasChanged("photo")) {
                    c.photoSrc();
                    c.$photo.attr("src", c.src)
                }
            });
            View.FullNote.prototype.initialize.call(this, a)
        }, _findFooter: function () {
            View.FullNote.prototype._findFooter.call(this);
            var a = this, c = a.$footer, f = b(".exif", c), d = b(".exif-info", c), g = b("ul", d), j = this.model;
            j.get("trip_id");
            f.on("mouseover",
                function () {
                    d.show();
                    b.ajax({
                        url: "/trips/" + j.get("trip_id") + "/notes/" + j.get("sid") + "/exif",
                        dataType: "json",
                        success: function (b) {
                            b ? g.html(a._parseExif(b)) : g.html("<li>\u65e0 exif \u4fe1\u606f</li>")
                        },
                        error: function () {
                            g.html("<li>\u65e0 exif \u4fe1\u606f</li>")
                        }
                    })
                }).on("mouseout", function () {
                d.hide()
            });
            var f = "http://chanyouji.com/trips/" + j.get("trip_id") + "#" + TripUtils.getNoteHash(this),
                m = "\u5206\u4eab\u4e00\u5f20\u597d\u56fe\uff0c\u6765\u81ea#\u8749\u6e38\u8bb0#\u7684\u300a" + j.get("trip_name") + "\u300b";
            b(".weibo", c).attr("href", "http://service.weibo.com/share/share.php?url=" + encodeURIComponent(f) + "&pic=" + encodeURIComponent(j.get("photo").src) + "&title=" + encodeURIComponent(m) + "&content=utf-8");
            b(".qzone", c).attr("href", "http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=" + encodeURIComponent(f) + "&pics=" + encodeURIComponent(j.get("photo").src) + "&title=" + encodeURIComponent(m));
            b(".douban", c).attr("href", "http://shuo.douban.com/!service/share?href=" + encodeURIComponent(f) + "&image=" + encodeURIComponent(j.get("photo").src) +
                "&name=" + encodeURIComponent(m))
        }, _parseExif: function (a) {
            var a = a || {}, b = "";
            a.Make && (b = b + ("<li>\u5382\u5546: " + a.Make.val + "</li>"));
            a.Model && (b = b + ("<li>\u578b\u53f7: " + a.Model.val + "</li>"));
            a.FNumber && (b = b + ("<li>\u5149\u5708: " + a.FNumber.val + "</li>"));
            a.ExposureTime && (b = b + ("<li>\u5feb\u95e8: " + a.ExposureTime.val + "</li>"));
            a.ISOSpeedRatings && (b = b + ("<li>ISO : " + a.ISOSpeedRatings.val + "</li>"));
            a.ExposureBiasValue && (b = b + ("<li>\u66dd\u5149\u8865\u507f: " + a.ExposureBiasValue.val + "</li>"));
            a.FocalLength && (b =
                b + ("<li>\u7126\u8ddd: " + a.FocalLength.val + "</li>"));
            b || (b = "<li> \u65e0exif\u4fe1\u606f </li>");
            return b
        }, photoSrc: function () {
            var a = this.model.get("photo"), b = a.src, a = suitedFullPhoto(a.width, a.height);
            this.photoWidth = a.width;
            this.photoHeight = a.height;
            this.src = b + a.suffix
        }, close: function () {
            View.FullNote.prototype.close.call(this);
            AudioPlayer.getPlayer(function (a) {
                a && a.pause()
            })
        }, render: function () {
            var a = this;
            a.$photo.load(function () {
                a.$photo.addClass("noloading").off("load");
                if (a.model.get("audio")) {
                    var c =
                        a.model.get("audio").src + "?avthumb/mp3";
                    if (a.$(".play-button").length == 0) {
                        a.$content.append('<div class="play-button' + (WindowSize.height < 700 ? " s" : WindowSize.height < 800 ? " m" : "") + '"></div>');
                        a.$content.append('<div class="play-track"><div class="play-progress"></div></div>');
                        var f = b(".play-progress", this.$content), d = a.$(".play-button");
                        d.touchClick(function (a) {
                            a.stopPropagation();
                            AudioPlayer.getPlayer(function (a) {
                                if (a) {
                                    if (c != a.mp3) {
                                        a.pause();
                                        a.load(c)
                                    }
                                    AudioPlayer.audioButtonHidden = true;
                                    AudioPlayer.currentAudioPlayProgress =
                                        f;
                                    AudioPlayer.currentAudioPlayButton = d;
                                    a.playPause()
                                }
                            })
                        })
                    }
                }
            }).attr("src", this.src);
            var c = this.model.get("description");
            if (c) {
                this.$description.find("p").text(c);
                this.$description.show()
            } else this.$description.hide();
            View.FullNote.prototype.render.call(a)
        }, position: function () {
            var a = WindowSize.width, c = WindowSize.height, f = this.$footer.outerHeight(), d = this.photoWidth,
                g = this.photoHeight, j = Math.max(a - (m ? 40 : 300), 300), n = c - f - 40;
            if (d < j && g < n) d = {width: d, height: g}; else var o = Math.max(g / n, d / j), d = {
                width: d / o, height: g /
                o
            };
            d.width = Math.floor(Math.min(d.width, j));
            d.height = Math.floor(Math.min(d.height, n));
            this.$photo.css(d);
            d.height = d.height + f;
            this.$el.css(b.extend(d, {left: Math.floor((a - d.width) / 2), top: Math.floor((c - d.height) / 2)}));
            this.descriptionFullDisplayed = true;
            this.$description.css("bottom", 35);
            this.descriptionEvent()
        }, descriptionEvent: function () {
            var a = this, b = a.$description;
            if (!a._descEventListened && b.is(":visible")) {
                var c = b.outerHeight();
                b.addClass("slidable").touchClick(function () {
                    if (a.descriptionFullDisplayed) {
                        b.animate({
                            bottom: 35 -
                            c
                        }, 200);
                        a.descriptionFullDisplayed = false
                    }
                });
                this._descEventListened = true
            } else if (!b.is(":visible")) {
                b.off("click").removeClass("slidable");
                this._descEventListened = false
            }
        }
    });
    View.FullVideoNote = View.FullNote.extend({
        initialize: function (a) {
            this.type = n.VIDEO;
            this.$el = b(b("#_tpl_full_note_video").html());
            this.$description = this.$el.find(".desc");
            this.descriptionFullDisplayed = true;
            View.FullNote.prototype.initialize.call(this, a)
        }, render: function () {
            var a = this.model.get("description");
            if (a) {
                this.$description.find("p").text(a);
                this.$description.show()
            } else this.$description.hide();
            View.FullNote.prototype.render.call(this)
        }, position: function () {
            var a = this, b = WindowSize.width, c = WindowSize.height, f = this.$footer.outerHeight(),
                d = Math.max(b - (m ? 40 : 300), 300), g = c - f - 40, j;
            j = a.model.get("video").width;
            var n = a.model.get("video").height;
            if (j < d && n < g) j = {width: j, height: n}; else {
                d = Math.max(n / g, j / d);
                j = {width: Math.ceil(j / d), height: Math.ceil(n / d)}
            }
            a.$el.css({
                left: Math.floor((b - j.width) / 2),
                top: Math.floor((c - j.height) / 2),
                height: j.height + f,
                width: j.width
            });
            a.$(".flowplayer").css(j);
            a.descriptionFullDisplayed = true;
            a.$description.css("bottom", 35);
            a.descriptionEvent();
            if (a.player) {
                a.$(".flowplayer video").attr(j);
                a.player.setPlayerSize(j.width, j.height);
                a.player.play()
            } else {
                var b = a.model.get("video").src + "?avthumb/mp4/rotate/auto",
                    o = a.$(".flowplayer video").attr(_.extend({src: b}, j));
                setTimeout(function () {
                    a.player = new MediaElementPlayer(o[0], {
                        success: function (b) {
                            b.addEventListener("play", function () {
                                a.$description.hide()
                            }, false);
                            b.addEventListener("ended",
                                function () {
                                    a.$description.show()
                                }, false);
                            b.addEventListener("pause", function () {
                                a.$description.show()
                            }, false);
                            b.play()
                        }
                    })
                }, 50)
            }
        }, descriptionEvent: function () {
            var a = this, b = this.$description;
            if (!this._descEventListened && b.is(":visible")) {
                var c = b.find("p").height();
                b.addClass("slidable").touchClick(function () {
                    if (a.descriptionFullDisplayed) {
                        b.animate({bottom: 35 - c}, 200);
                        a.descriptionFullDisplayed = false
                    }
                });
                this._descEventListened = true
            } else if (!b.is(":visible")) {
                b.off("click").removeClass("slidable");
                this._descEventListened =
                    false
            }
        }, close: function () {
            View.FullNote.prototype.close.call(this);
            this.player && this.player.pause()
        }
    });
    View.FullTextNote = View.FullNote.extend({
        initialize: function (a) {
            this.type = n.TEXT;
            this.$el = b(b("#_tpl_full_note_text").html());
            this.$text = this.$el.find(".note-text");
            this.$textWrapper = this.$text.parent();
            this.$textWrapper.scrollbar({type: "ver"});
            View.FullNote.prototype.initialize.call(this, a)
        }, render: function () {
            var a = this.model.get("description_display") || this.model.get("description");
            this.$text.html(a);
            View.FullNote.prototype.render.call(this)
        }, position: function () {
            var a = WindowSize.width, b = WindowSize.height, c = this.$footer.outerHeight(), b = b - 40,
                f = Math.ceil(b / 7 * 6), c = b - c;
            this.$el.css({left: Math.ceil((a - f) / 2), top: 20, width: f, height: b});
            this.$textWrapper.css({width: f, height: c});
            var a = this.$text.outerWidth(), d = this.$text.outerHeight();
            d > c && this.$textWrapper.scrollbar().refresh();
            this.$text.css({marginLeft: Math.ceil((f - a) * 0.5), marginTop: Math.ceil(Math.max(b - d, 0) * 0.5)})
        }
    });
    View.FullTips = View.FullNote.extend({
        initialize: function (a) {
            this.type =
                n.TIPS;
            var c = this.$el = b(b("#_tpl_full_tips").html());
            this.$items = b(".tip-items", c);
            this.$itemsWrapper = b(".tip-items-wrapper", c);
            this.$tipsContent = b(".tips-content", c);
            this.$tipsHeader = b(".tips-header", c);
            this.$itemsWrapper.scrollbar({type: "ver"});
            View.FullNote.prototype.initialize.call(this, a)
        }, render: function () {
            var a = this.model.get("tips") || [], c = "";
            if (a.length) {
                b.each(a, function (b) {
                    c = c + ("<li>" + _.escape(a[b]) + "</li>")
                });
                this.$items.html(c).show()
            } else this.$items.hide();
            View.FullNote.prototype.render.call(this)
        },
        position: function () {
            var a = WindowSize.width, b = WindowSize.height - 40, c = Math.ceil(b * 0.7), f = this.$tipsHeader.height(),
                d = b - f - 40, g = 0;
            this.$el.css({left: Math.ceil((a - c) * 0.5), top: 20, width: c, height: b});
            if (this.$items.is(":visible")) {
                g = this.$items.height();
                if (g > d) {
                    this.$itemsWrapper.css({height: d});
                    this.$itemsWrapper.scrollbar().refresh()
                }
            }
            a = Math.min(g, d) + f;
            this.$tipsContent.css("margin-top", (b - a) * 0.33)
        }
    });
    View.FullNode = View.FullNote.extend({
        initialize: function (a) {
            this.type = n.NODE;
            this.$el = b(b("#_tpl_full_node").html());
            this.$nodeContent = this.$el.find(".node-content");
            View.FullNote.prototype.initialize.call(this, a)
        }, render: function () {
            View.FullNote.prototype.render.call(this);
            var a = this.model, b = "", c = a.get("entry"), f = a.get("memo"), d;
            d = c.type.toLowerCase() == "hotel" ? c.type.toLowerCase() : c.attraction_type;
            this.$el.find(".ico").addClass("ico-" + d);
            this.$el.find(".node-name").text(c.name_zh_cn);
            this.$el.find(".node-name-en").text(c.name_en || "");
            if (f.price_amount || f.time) {
                c = '<div class="memo"><span class="memo-inner">';
                d =
                    a.get("entry").type;
                if (f.price_amount) {
                    c = c + MEMO_TEMPLATE.price_amount;
                    c = c.replace("{price_amount}", f.price_amount).replace("{price_currency}", g.getName(f.price_currency)).replace("{label}", TripUtils.getPriceLabel(d))
                }
                f.price_amount && f.time && (c = c + '<span class="space">|</span>');
                if (f.time) {
                    c = c + MEMO_TEMPLATE.time;
                    c = c.replace("{time}", f.time).replace("{time_unit}", f.time_unit == "day" ? "\u5929" : f.time_unit == "minute" ? "\u5206\u949f" : "\u5c0f\u65f6")
                }
                b = b + (c + "</span></div>")
            }
            a.get("score") > 0 && (b = b + ('<div class="single-row"><span class="attr">\u6211\u7684\u8bc4\u4ef7\uff1a</span><span class="val"><span class="star-score"><i class="star-score-' +
                a.get("score") + '"></i></span></span></div>'));
            a.get("comment") && (b = b + ('<div class="node-description">' + a.escape("comment") + "</div>"));
            this.$nodeContent.css({height: "auto"}).find(".node-info").html(b)
        }, position: function () {
            var a = WindowSize.width, b = WindowSize.height - 40, c = Math.ceil(b / 7 * 5);
            this.$el.css({left: Math.ceil((a - c) / 2), top: 20, width: c, height: b});
            this.$nodeContent.css({width: "auto", height: "auto", marginTop: 0, marginLeft: 0, overflow: "visible"});
            var f = this.$nodeContent.outerWidth(), a = this.$nodeContent.outerHeight(),
                f = Math.min(f, c), d = Math.min(a, b), f = Math.min(f, 500), c = {
                    width: f - 40,
                    height: d - 40,
                    marginLeft: Math.ceil((c - f) / 2),
                    marginTop: Math.ceil((b - d) * 0.33)
                };
            if (a > b) {
                c.overflow = "hidden";
                c.overflowY = "auto"
            }
            this.$nodeContent.css(c)
        }
    });
    View.Note = Backbone.View.extend({
        initialize: function (a) {
            Backbone.View.prototype.initialize.call(this, a);
            var b = this, c = this.$el;
            b._isAuthor = !!a.isAuthor;
            b._contentPadding = [70, 70];
            b.top = 0;
            b.iLeft = 0;
            b.iTop = 0;
            b.group = a.group;
            b.$mask = c.find(".replace-layer");
            b.$content = c.find(".note-content");
            b._id = c.attr("id");
            c.mouseenter(function () {
                c.addClass("note-hover")
            }).mouseleave(function () {
                c.removeClass("note-hover")
            });
            b._findFooter();
            b.model.on("change", function (a) {
                if (a.hasChanged("likes_count") || a.hasChanged("comments_count")) {
                    b.$like.removeClass("loading");
                    b.renderMeta()
                } else {
                    b.render();
                    b.resizeContent()
                }
            });
            b.renderMeta()
        }, needZoomin: function () {
            var a = this;
            this.$content.touchClick(function () {
                c.trigger("note:zoomin", [a]);
                a.zoomin()
            })
        }, zoomin: function () {
        }, _findFooter: View.FullNote.prototype._findFooter,
        renderMeta: View.FullNote.prototype.renderMeta, canEdit: function () {
            var a = this, b = this.$el;
            a._canEdit = true;
            b.find(".edit, .delete, .js-edit, .rotate").on("mousedown, mouseup", function (a) {
                a.stopPropagation()
            });
            b.find(".btn-drag").on("mousedown", function (b) {
                b.type = "note:drag";
                c.trigger(b, [a]);
                b.stopPropagation()
            });
            b.find(".edit, .js-edit").on("click", function (b) {
                b.stopPropagation();
                c.trigger("note:edit", [a])
            });
            b.find(".delete").on("click", function () {
                c.trigger("note:delete", [a])
            })
        }, showMask: function () {
            this.$mask &&
            this.$mask.show()
        }, hideMask: function () {
            this.$mask && this.$mask.hide()
        }, remove: function () {
            this.group && this.group.removeNote(this);
            Backbone.View.prototype.remove.call(this)
        }, setGroup: function (a) {
            this.group = a
        }, getId: function (a) {
            var b = this._id;
            a === "int" && (b = b.split("-")[1]);
            return b
        }, setPosition: function (a) {
            var b = this.$el, c = this._sizeCss || {}, a = a + this.iLeft;
            if (a !== this.left) this.left = c.left = a;
            b.css(c)
        }, setGroupLayout: function (a) {
            this._groupLayout = a;
            this.$el.data("layout", a)
        }, getGroupLayout: function () {
            if (!this._groupLayout) this._groupLayout =
                this.$el.data("layout");
            return this._groupLayout
        }, resizeContent: function () {
        }, resize: function (a) {
            return this._resize(a)
        }, _resize: function (a) {
            var c = a.width, f = a.height || this.$el.height(), d = {}, g;
            if (this.width !== c) {
                g = true;
                this.width = d.width = c
            }
            if (this.height !== f) {
                g = true;
                this.height = d.height = f
            }
            if (this.iTop !== a.top) this.iTop = this.top = d.top = a.top;
            if (this.iLeft !== a.left) this.iLeft = a.left;
            if (g) {
                this.contentHeight = f - this._contentPadding[0];
                this.contentWidth = c - this._contentPadding[1];
                this.$content.css({
                    width: this.contentWidth,
                    height: this.contentHeight
                });
                this.resizeContent()
            }
            this._sizeCss = b.isEmptyObject(d) ? null : d;
            return c
        }, lazyLoad: function () {
        }
    });
    View.Note.NOTE_TYPE = n;
    View.Note.isNode = function (a) {
        var b = View.Note.NOTE_TYPE;
        return a.type === b.DAY || a.type === b.NODE || a.type === b.TIPS || a.type === b.THEEND
    };
    View.TheEnd = View.Note.extend({
        initialize: function (a) {
            View.Note.prototype.initialize.call(this, a);
            this.type = n.THEEND
        }, resize: function (a) {
            if (!a.width) a.width = Math.min(Math.ceil(a.height * NO_PHOTO_NOTE_WIDTH_RATIO), NO_PHOTO_FULL_NOTE_MAX_WIDTH);
            return View.Note.prototype.resize.call(this, a)
        }
    });
    View.Tips = View.Note.extend({
        initialize: function (a) {
            View.Note.prototype.initialize.call(this, a);
            var c = this, a = c.$el;
            c.type = "tips";
            c._contentPadding = [70, 0];
            c.type = n.TIPS;
            c.$itemsWrapper = b(".tip-items-wrapper", a).scrollbar({type: "ver"});
            c.$items = b(".tip-items", a);
            c.$tipsContent = b(".tips-content", a);
            c.$header = b(".tips-header", a);
            if (!j) {
                var f = c.$itemsWrapper.scrollbar().disable(), d, g = function (a) {
                    a.stopPropagation()
                };
                c.$content.mouseenter(function () {
                    clearTimeout(d);
                    d = setTimeout(function () {
                        f.refresh();
                        f.isActive() && c.$itemsWrapper.bind("mousewheel", g)
                    }, 1E3)
                }).mouseleave(function () {
                    clearTimeout(d);
                    f.disable();
                    c.$itemsWrapper.unbind("mousewheel", g)
                })
            }
        }, getId: function () {
            return "theend"
        }, resize: function (a) {
            if (a.height) a.width = Math.min(Math.ceil(a.height * NO_PHOTO_NOTE_WIDTH_RATIO), NO_PHOTO_FULL_NOTE_MAX_WIDTH);
            return View.Note.prototype.resize.call(this, a)
        }, resizeContent: function () {
            var a = this, b = a.$itemsWrapper, c, f, d;
            setTimeout(function () {
                c = a.$header.height();
                d = a.$items.height();
                f = a.contentHeight - c;
                d > f ? b.css("height", f) : b.css("height", "auto");
                a.$tipsContent.css("margin-top", Math.floor((f - Math.min(f, d)) * 0.5));
                a.$itemsWrapper.scrollbar().refresh(!j)
            }, 300)
        }, render: function () {
            var a = this.model.get("tips") || [], c = "";
            b.each(a, function (b) {
                c = c + ("<li>" + a[b] + "</li>")
            });
            this.$items.html(c)
        }
    });
    View.Day = View.Note.extend({
        initialize: function (a) {
            View.Note.prototype.initialize.call(this, a);
            this.type = n.DAY;
            this.$daycontent = this.$el.find(".day-content");
            this.$(".day-weather").length || this.$daycontent.addClass("no-weather")
        },
        resize: function (a) {
            if (!a.width) a.width = Math.min(Math.ceil(a.height * NO_PHOTO_NOTE_WIDTH_RATIO), NO_PHOTO_FULL_NOTE_MAX_WIDTH);
            View.Note.prototype.resize.call(this, a);
            return this.width
        }
    });
    View.Node = View.Note.extend({
        initialize: function (a) {
            this.type = "node";
            View.Note.prototype.initialize.call(this, a);
            this.type = n.NODE;
            this.$nodeContent = this.$el.find(".node-content")
        }, resizeContent: function () {
            this.$nodeContent.css("height", "auto");
            var a = Math.min(this.contentHeight, this.$nodeContent.innerHeight());
            this.$nodeContent.css({
                marginTop: Math.ceil((this.contentHeight -
                    a) / 2), height: a
            });
            this.height < 465 ? this.$el.addClass("node-s") : this.$el.removeClass("node-s")
        }, resize: View.Day.prototype.resize, render: function () {
            var a = this.model, b = "", c = a.get("score"), f = a.get("memo"), d = a.get("comment");
            this.$(".node-name").text(a.get("entry").name_zh_cn);
            if (f.price_amount || f.time) {
                var j = '<div class="memo"><span class="memo-inner">', a = a.get("entry"),
                    a = a.type.toLowerCase() == "hotel" ? a.type : a.attraction_type;
                if (f.price_amount) {
                    j = j + MEMO_TEMPLATE.price_amount;
                    j = j.replace("{price_amount}",
                        f.price_amount).replace("{price_currency}", g.getName(f.price_currency)).replace("{label}", TripUtils.getPriceLabel(a))
                }
                f.price_amount && f.time && (j = j + '<span class="space">|</span>');
                if (f.time) {
                    j = j + MEMO_TEMPLATE.time;
                    j = j.replace("{time}", f.time).replace("{time_unit}", f.time_unit == "day" ? "\u5929" : f.time_unit == "minute" ? "\u5206\u949f" : "\u5c0f\u65f6")
                }
                b = b + (j + "</span></div>")
            }
            if (d || c > 0) {
                b = b + '<div class="single-row"><span class="attr">\u6211\u7684\u8bc4\u4ef7\uff1a</span>';
                c > 0 && (b = b + ('<span class="val"><span class="star-score"><i class="star-score-' +
                    c + '"></i></span></span>'));
                b = b + "</div>"
            }
            d && (b = b + ('<div class="desc">' + d + "</div>"));
            this.$el.find(".node-info").html(b)
        }
    });
    View.TextNote = View.Note.extend({
        initialize: function (a) {
            View.Note.prototype.initialize.call(this, a);
            var c = this, a = c.$el;
            c.type = n.TEXT;
            c._contentPadding = [70, 25];
            c.type = n.TEXT;
            c.$textContent = b(".text-content", a);
            c.$textWrapper = b(".text-wrapper", a).scrollbar({type: "ver"});
            a.mouseenter(function () {
                c.group.showLayoutToolbar()
            }).mouseleave(function () {
                c.group.hideLayoutToolbar()
            });
            if (!j) {
                var f =
                    c.$textWrapper.scrollbar().disable(), d, g = function (a) {
                    a.stopPropagation()
                };
                c.$content.mouseenter(function () {
                    clearTimeout(d);
                    d = setTimeout(function () {
                        f.refresh();
                        f.isActive() && c.$textWrapper.bind("mousewheel", g)
                    }, 1E3)
                }).mouseleave(function () {
                    clearTimeout(d);
                    f.disable();
                    c.$textWrapper.unbind("mousewheel", g)
                })
            }
            c.$textContent.css("font-size", textNoteFontSize)
        }, resizeContent: function () {
            this.$textWrapper.scrollbar().refresh(!j);
            var a = this.$textContent.height();
            a <= this.contentHeight ? this.$textContent.css({
                "margin-top": (this.contentHeight -
                    a) / 2, "margin-left": Math.max((this.contentWidth - this.$textContent.width()) / 2 - 15, 0)
            }) : this.$textContent.css("margin", 0)
        }, resize: function (a) {
            if (!a.width) a.width = Math.min(Math.ceil(a.height * NO_PHOTO_NOTE_WIDTH_RATIO), NO_PHOTO_FULL_NOTE_MAX_WIDTH);
            return View.Note.prototype.resize.call(this, a)
        }, setGroupLayout: function (a) {
            View.Note.prototype.setGroupLayout.call(this, a);
            var b = this.$el;
            a === "full" ? b.addClass("text-full") : b.removeClass("text-full")
        }, render: function () {
            this.$textContent.html(this.model.get("description_display")).show();
            this.renderMeta()
        }
    });
    View.PhotoNote = View.Note.extend({
        initialize: function (a) {
            View.Note.prototype.initialize.call(this, a);
            var f = this, a = this.$el;
            f.type = n.PHOTO;
            f._contentPadding = [44, 20];
            f.type = n.PHOTO;
            f.$description = b("figcaption", a).on("mousedown", function (a) {
                a.stopPropagation()
            });
            f.$photo = b(".photo", a).on("mousedown mousemove", function (a) {
                a.preventDefault()
            });
            b(".rotate", a).click(function () {
                c.trigger("photo:rotate", [f])
            });
            f.$el.mouseenter(function () {
                f.group.showLayoutToolbar()
            }).mouseleave(function () {
                f.group.hideLayoutToolbar()
            });
            f.photoSize();
            f.needZoomin();
            var d = f.model;
            d.on("change", function () {
                if (d.hasChanged("photo")) {
                    f.src = null;
                    f.photoSize();
                    f.resizeContent();
                    var a = f.$photo.css("visibility", "hidden"), b = a.parent().addClass("pl");
                    a.on("load", function () {
                        a.off("load");
                        b.removeClass("pl");
                        a.css("visibility", "visible")
                    }).attr("src", f.src)
                }
            })
        }, photoSize: function () {
            var a = this.model.get("photo");
            this.picNaturalWidth = a.width;
            this.picNaturalHeight = a.height
        }, photoSrc: function (a) {
            this.src = this.model.get("photo").src
        }, resizeContent: function () {
            this.$photo.parent().css({width: this.contentWidth, height: this.contentHeight});
            var a = scaleImage(this.contentWidth, this.contentHeight, this.picNaturalWidth, this.picNaturalHeight);
            this.$photo.css(a);
            this.src || this.photoSrc(a)
        }, setGroupLayout: function (a) {
            View.Note.prototype.setGroupLayout.call(this,
                a);
            var b = this.$el;
            a === "full" ? b.addClass("photo-full") : b.removeClass("photo-full")
        }, resize: function (a, b) {
            var c = WindowSize.width;
            if (b) {
                var f = a.height / this.picNaturalHeight * this.picNaturalWidth;
                a.width = a.width ? a.width > f ? a.width : f : f
            }
            if (a.width && a.width >= c) a.width = c * 0.7;
            a.width = Math.ceil(a.width);
            return View.Note.prototype.resize.call(this, a)
        }, canEdit: function () {
            View.Note.prototype.canEdit.call(this);
            var a = this, f;
            a.$description.addClass("canedit").on("click", function (d) {
                function g() {
                    if (!m.valid()) {
                        m.showErrorTips();
                        return false
                    }
                    f = false;
                    var b = m.val();
                    if (b != j) {
                        a.model.set("description", b);
                        c.trigger("note:edit", [a, b])
                    } else a.render()
                }

                if (b("body").hasClass("edit-view") && !f) {
                    f = true;
                    d.stopPropagation();
                    var j = a.model.get("description") || "",
                        m = a.$description.html('<div class="edit-wrapper textarea inset-shadow clearfix"><textarea maxlen="300" data-error-tip="\u6700\u591a150\u5b57">' + j + "</textarea></div>").find("textarea");
                    m.on("click", function (a) {
                        a.stopPropagation()
                    }).autosize("photo-description-measure").blur(g).on("keydown",
                        function (b) {
                            switch (b.keyCode) {
                                case 13:
                                    b.preventDefault();
                                    g();
                                    break;
                                case 27:
                                    f = false;
                                    b.preventDefault();
                                    a.render()
                            }
                        }).moveCursorToEnd()
                }
            })
        }, render: function () {
            var a = this.model.get("description"), b = this.$description;
            a ? b.removeClass("nocaption").html("<p>" + a + "</p>") : b.addClass("nocaption").html("<p>\u6dfb\u52a0\u76f8\u7247\u8bf4\u660e</p>");
            this.renderMeta()
        }, zoomin: function () {
            AudioPlayer.getPlayer(function (a) {
                a && a.pause()
            })
        }, lazyLoad: function () {
            if (!this.lazyLoaded) {
                var a = this.$photo, c = a.parent().addClass("loading");
                a.on("load", function () {
                    a.off("load").css("visibility", "visible");
                    c.removeClass("loading")
                }).attr("src", this.src);
                this.lazyLoaded = true;
                if (this.model.get("audio")) {
                    var f = this.model.get("audio").src + "?avthumb/mp3";
                    this.$content.append('<div class="play-button' + (WindowSize.height < 700 ? " s" : WindowSize.height < 800 ? " m" : "") + '"></div>');
                    this.$content.append('<div class="play-track"><div class="play-progress"></div></div>');
                    var d = b(".play-progress", this.$content), g = this.$(".play-button");
                    g.touchClick(function (a) {
                        a.stopPropagation();
                        AudioPlayer.getPlayer(function (a) {
                            if (a) {
                                if (f != a.mp3) {
                                    a.pause();
                                    a.load(f)
                                }
                                AudioPlayer.audioButtonHidden = true;
                                AudioPlayer.currentAudioPlayProgress = d;
                                AudioPlayer.currentAudioPlayButton = g;
                                a.playPause()
                            }
                        })
                    })
                }
            }
        }
    });
    View.VideoNote = View.Note.extend({
        initialize: function (a) {
            View.Note.prototype.initialize.call(this, a);
            var f = this, a = f.$el;
            f.type = n.VIDEO;
            f._contentPadding = [44, 20];
            f.$description = b(".caption", a).on("mousedown", function (a) {
                a.stopPropagation()
            });
            var d = WindowSize.height < 700 ? " s" : WindowSize.height < 800 ?
                " m" : "";
            f.$(".play-button").touchClick(function () {
                c.trigger("note:zoomin", [f])
            }).addClass(d);
            a.mouseenter(function () {
                f.group.showLayoutToolbar()
            }).mouseleave(function () {
                f.group.hideLayoutToolbar()
            })
        }, canEdit: View.PhotoNote.prototype.canEdit, resize: function (a) {
            if (!a.width) {
                var b = this.model.get("video");
                a.width = b ? Math.ceil(a.height / b.height * b.width) : a.height
            }
            return View.Note.prototype.resize.call(this, a)
        }, setGroupLayout: function (a) {
            View.Note.prototype.setGroupLayout.call(this, a)
        }, render: function () {
            var a =
                this.model.get("description"), b = this.$description;
            a ? b.removeClass("nocaption").html("<p>" + a + "</p>") : b.addClass("nocaption").html("<p>\u6dfb\u52a0\u89c6\u9891\u8bf4\u660e</p>");
            this.renderMeta()
        }, lazyLoad: function () {
            var a = this;
            if (!this.lazyLoaded) {
                var c = a.model.get("video").src + "?vframe/jpg/offset/0/rotate/auto";
                a.$(".video-screenshot").attr("src", c);
                if (a.options.playVideoInTrainView) {
                    var c = "#video-" + a.model.get("sid"), f = a.$content.find(".video-content");
                    b(c).css({width: f.width(), height: f.height()});
                    new MediaElementPlayer(c, {
                        success: function (b) {
                            b.addEventListener("play", function () {
                                a.$description.hide()
                            }, false);
                            b.addEventListener("ended", function () {
                                a.$description.show()
                            }, false);
                            b.addEventListener("pause", function () {
                                a.$description.show()
                            }, false)
                        }
                    })
                }
                this.lazyLoaded = true
            }
        }
    });
    View.ABChart = View.Note.extend({
        initialize: function (a) {
            View.Note.prototype.initialize.call(this, a);
            this.type = n.ACCOUNTBOOK;
            this._contentPadding = [44, 20]
        }, canEdit: function () {
        }, resize: function (a) {
            if (!a.width) a.width = Math.min(Math.ceil(a.height *
                NO_PHOTO_NOTE_WIDTH_RATIO), NO_PHOTO_FULL_NOTE_MAX_WIDTH);
            return View.Note.prototype.resize.call(this, a)
        }, setGroupLayout: function (a) {
            View.Note.prototype.setGroupLayout.call(this, a)
        }, render: function () {
            var a = this.model.get("description"), b = this.$description;
            a ? b.removeClass("nocaption").html("<p>" + a + "</p>") : b.addClass("nocaption").html("<p>\u6dfb\u52a0\u89c6\u9891\u8bf4\u660e</p>");
            this.renderMeta()
        }
    });
    a = Backbone.Model.extend({
        parse: function (a) {
            a.type = a.day ? "day" : a.memo ? "node" : a.video ? "video" : a.photo ?
                "photo" : "description" in a ? "text" : a.tips ? "tips" : a.summary ? "accountbook" : "theend";
            return a
        }
    });
    tripshow = b.extend(true, tripshow, {
        NOTE_CLASSES: {
            photo: View.PhotoNote,
            text: View.TextNote,
            video: View.VideoNote,
            node: View.Node,
            day: View.Day,
            theend: View.TheEnd,
            tips: View.Tips,
            accountbook: View.ABChart
        },
        FULL_NOTE_CLASSES: {
            text: View.FullTextNote,
            photo: View.FullPhotoNote,
            video: View.FullVideoNote,
            node: View.FullNode,
            day: View.FullDay,
            theend: View.FullTheEnd,
            tips: View.FullTips
        },
        View: View,
        TripsCollection: Backbone.Collection.extend({
            model: a,
            prev: function (a) {
                a = this.indexOf(a);
                return a === 0 ? false : this.models[a - 1]
            }, next: function (a) {
                a = this.indexOf(a);
                return a === this.length - 1 ? false : this.models[a + 1]
            }
        })
    })
})(window, document, jQuery);
(function (a) {
    a.MiniComments = Backbone.View.extend({
        initialize: function (a) {
            Backbone.View.prototype.initialize.call(this, a);
            var b = this, c = b.$el, f = c.find('input[name="reply_to_id"]'), g = $('input[name="reply_prefix"]', c);
            $(".close", c).click(function () {
                b.close();
                return false
            });
            $(".need-login", c).click(function () {
                open_sign_in_window();
                b.note && $(window).trigger("dochaschanged", ["nt/" + b.note.model.get("sid"), true]);
                return false
            });
            b.$replay_prefix = g;
            b.$reply_to_id = f;
            b.$posting = b.$(".posting");
            b.$text = b.$("textarea").autosize("textarea").on("keydown",
                function (a) {
                    a.stopPropagation();
                    setTimeout(function () {
                        if (!b.$text.val()) {
                            f.val("");
                            g.val("")
                        }
                    }, 5);
                    if (a.keyCode === 13) {
                        a.preventDefault();
                        if (!b.$text.valid()) {
                            b.$text.showErrorTips();
                            return false
                        }
                        var a = f.val(), c = b.$text.val();
                        if (c == g.val()) {
                            b.$text.showErrorTips("\u8bf7\u8f93\u5165\u5185\u5bb9");
                            return false
                        }
                        if (!b.posting) {
                            b.posting = true;
                            b.$posting.show();
                            c = {
                                text: c,
                                commentable_id: b.noteId,
                                commentable_type: TripUtils.noteServerType(b.type),
                                popup: true
                            };
                            if (a) c.reply_to_id = a;
                            $.ajax({
                                url: "/trips/" + b.options.tripId +
                                "/comments", type: "POST", data: c, dataType: "html", success: function (a) {
                                    b.$list.find("ul").prepend(a);
                                    b.$list.find(".nocomment").remove();
                                    b.$text.val("");
                                    f.val("");
                                    g.val("");
                                    b.resize();
                                    $(window).trigger("note:commented");
                                    a = b.note.model;
                                    a.set({
                                        current_user_comment: true,
                                        comments_count: (a.get("comments_count") || 0) + 1
                                    });
                                    b.$list.scrollTop(0).find(".time").timeago()
                                }, complete: function () {
                                    b.posting = false;
                                    b.$posting.hide()
                                }
                            })
                        }
                    }
                }).hasPlaceholder();
            b.$list = $(".list", c);
            b.$listWrapper = b.$list.parent().scrollbar({type: "ver"});
            b.$list.on("click", ".btn-more", function () {
                b.load();
                return false
            }).on("ajax:success", ".delete", function (a, c) {
                $(this).parent().parent().remove();
                $(window).trigger("note:commentdeleted");
                var f = b.note.model, d = {comments_count: f.get("comments_count") - 1};
                c && !c.current_user_comment && (d.current_user_comment = false);
                f.set(d);
                b.$listWrapper.scrollbar().refresh()
            }).on("click", ".reply", function () {
                var a = $(this).parents("li");
                f.val(a.data("id"));
                a = "\u56de\u590d " + a.data("username") + "\uff1a";
                b.$text.val(a).moveCursorToEnd();
                g.val(a)
            });
            b.width = c.outerWidth();
            b.url = "/trips/" + a.tripId + "/comments?commentable_id=";
            b.heightLimit = WindowSize.height - 80
        }, empty: function () {
            this.$text.val("").css("height", 15);
            this.$reply_to_id.val("");
            this.$replay_prefix.val("");
            this.$list.empty();
            this.$listWrapper.css({height: "auto"}).scrollbar().scrollTo(0).refresh();
            this.$el.hide();
            this.nextId = this.noteId = 0;
            this.note = this.$src = null;
            $(document).off("click.comments", this.onClickHandle)
        }, open: function (a, b, c) {
            this.empty();
            this.type = c;
            this.note = b;
            this.noteId = b.model.get("sid");
            this._position(a);
            this.$el.show();
            this.load();
            this.$text.focus();
            this.displayed = true;
            var f = this;
            $(document).on("click.comments", function (a) {
                f.displayed && !$.isClickInside(a.target, f.el) && f.close()
            })
        }, close: function () {
            if (this.displayed) {
                this.displayed = false;
                this.empty()
            }
        }, _position: function (a) {
            if (this.$src || a) {
                var b;
                this.$src = b = a ? $(a.srcElement) : this.$src;
                var c = b.outerWidth(true), a = b.height(), f = b.offset();
                b = {};
                b.left = WindowSize.width - f.left < this.width ? f.left - this.width :
                    f.left + c;
                var c = this.$el.height(), g = f.top;
                g + c > WindowSize.height && (g = f.top + a - c);
                a = $(window).scrollTop();
                g <= a && (g = a + Math.floor((WindowSize.height - c) / 2));
                b.top = g;
                this.$el.css(b)
            }
        }, resize: function () {
            var a = this.$el.height();
            if (a > this.heightLimit) {
                a = this.heightLimit - 84;
                this.$listWrapper.css({height: a}).scrollbar().refresh()
            }
            this._position()
        }, load: function () {
            if (!this.loading) {
                this.loading = true;
                var a = this, b = this.url + this.noteId + "&commentable_type=" + TripUtils.noteServerType(this.type);
                a.nextId && (b = b + ("&next_id=" +
                    a.nextId));
                this.$list.addClass("loading");
                $.ajax({
                    url: b, dataType: "html", success: function (b) {
                        if (a.nextId) {
                            var b = $("<div>" + b + "</div>"), f = b.find("li");
                            a.$list.find("ul").append(f);
                            b.find(".btn-more").length < 1 && a.$list.find(".btn-more").remove()
                        } else a.$list.html(b);
                        a.nextId = a.$list.find("li:last").data("id");
                        a.$list.find(".time").timeago();
                        a.resize()
                    }, complete: function () {
                        a.$list.removeClass("loading");
                        a.loading = false
                    }
                })
            }
        }
    })
})(tripshow.View);
(function (a, d, b) {
    function c(a) {
        this.coverPhoto = a
    }

    var f = $(d), g = Math, a = Backbone.View.extend({
        initialize: function (a) {
            Backbone.View.prototype.initialize.call(this, a);
            this.$loadico = this.$el.find(".load-ico");
            this.$img = this.$el.find(".img").on("mousedown", function (a) {
                a.preventDefault()
            });
            this.isCustom = !!this.$img.data("custom")
        }, setSrc: function (a, b) {
            if (b != void 0) this.isCustom = !b;
            var c = this, f = $('<img style="position:absolute;top:-9999px;left:-9999px;">');
            c.loaded = false;
            c.$loadico.removeClass("loaded").show();
            f.on("load", function () {
                c.loaded = true;
                c.$loadico.hide().addClass("loaded");
                c._imgWidth = f.width();
                c._imgHeight = f.height();
                c.$img.attr("src", a);
                c.resize();
                c.trigger("load");
                f.off("load error").remove()
            }).on("error", function () {
                c.trigger("load");
                f.off("load error").remove()
            }).appendTo("body").attr("src", a)
        }, resize: function () {
            if (this.loaded) {
                var a = this.$el.width(), b = this.$el.height(), c = scaleImage(a, b, this._imgWidth, this._imgHeight);
                if (this.isCustom) {
                    var f = this.$img.position();
                    c.top = Math.max(-(c.height -
                        b), f.top);
                    c.left = Math.max(-(c.width - a), f.left)
                }
                this.$img.css(c)
            } else (a = this.$img.attr("src")) && this.setSrc(a, this.isCustom)
        }
    });
    _.extend(c.prototype, Backbone.Events, {
        checkBtnStatus: function () {
            var a = this.$listContainer.width(), a = (this.listWidth || 0) - a, b = this.$listContainer.scrollLeft();
            b == 0 ? this.$btnPrev.addClass("disable") : this.$btnPrev.removeClass("disable");
            b >= a ? this.$btnNext.addClass("disable") : this.$btnNext.removeClass("disable");
            return this
        }, openGuide: function () {
            this.$guide = this.$el.find(".cover-guide").show().appendTo("body");
            return this
        }, closeGuide: function () {
            this.$guide && this.$guide.hide()
        }, open: function () {
            var a = this;
            if (!a.$el) {
                var b = $($("#_tpl_coverphoto_editor").html());
                a.$el = b;
                a.$listContainer = b.find(".list");
                a.$list = b.find("ul");
                $("body").append(b);
                a.$list.on("click", "li", function () {
                    a.selectedItem && a.selectedItem.removeClass("selected");
                    var b = $(this);
                    a.selectedItem = b.addClass("selected");
                    a.coverPhoto.setSrc(b.data("src"), true);
                    a.selectedId = b.data("id");
                    a.closeGuide();
                    a.$btnClose.attr("disabled", false).removeClass("btn-disable")
                });
                a.$btnNext = b.find(".next").click(function () {
                    var b = a.$listContainer.width(), b = a.listWidth - b,
                        b = Math.min(a.$listContainer.scrollLeft() + a.$listContainer.width() - 152, b);
                    a.$listContainer.animate({scrollLeft: b}, {
                        duration: 300, complete: function () {
                            a.checkBtnStatus()
                        }
                    })
                });
                a.$btnPrev = b.find(".prev").click(function () {
                    a.$listContainer.width();
                    var b = Math.max(a.$listContainer.scrollLeft() - a.$listContainer.width() - 152, 0);
                    a.$listContainer.animate({scrollLeft: b}, {
                        duration: 300, complete: function () {
                            a.checkBtnStatus()
                        }
                    })
                });
                a.$btnClose = b.find(".btn").click(function () {
                    $.ajax({
                        url: "/trips/" + _G_trip_id,
                        type: "PUT",
                        data: {"trip[front_cover_photo_id]": a.selectedId, "trip[customize]": a.getCustomPostion()}
                    });
                    a.close()
                }).attr("disabled", true).addClass("btn-disable");
                a.height = a.$el.outerHeight();
                var c = $("#cover"), d = $("#cover-header"), b = $(".drag-handle", d), l = $("#cover-guide-line"), p, r,
                    w, v, s, x, B;
                a.$header = d;
                a.$headerWrapper = c;
                a.$coverImg = $("#cover-img");
                b.mousedown(function (a) {
                    a.stopPropagation();
                    r = a;
                    v = c.width();
                    s = c.height();
                    x = d.outerWidth();
                    B = d.outerHeight();
                    p = d.position();
                    w = [v - x, s - B - 50];
                    l.css("visibility", "visible");
                    f.on("mousemove.cover", function (a) {
                        var b = a.pageX - r.pageX + p.left, a = a.pageY - r.pageY + p.top,
                            b = g.ceil(g.min(g.max(b, 0), w[0])), a = g.ceil(g.min(g.max(a, 100), w[1]));
                        g.abs(a / WindowSize.height * 100 - 45) < 1 && (a = g.ceil(WindowSize.height * 0.45));
                        d.css({left: b, top: a, right: "auto", bottom: "auto"})
                    }).on("mouseup.cover", function () {
                        l.css("visibility", "hidden");
                        f.off("mousemove.cover mouseup.cover")
                    })
                })
            }
            a.$el.animate({top: 0}, {
                duration: 200, complete: function () {
                    a.load();
                    a.trigger("opened")
                }
            });
            var E, y, D;
            f.on("mousedown.coverimg", function (b) {
                r = b;
                E = a.$coverImg.position();
                y = a.$coverImg.width();
                D = a.$coverImg.height();
                f.on("mousemove.coverimg", function (b) {
                    var c = b.pageX - r.pageX + E.left, b = b.pageY - r.pageY + E.top,
                        f = g.max(y - WindowSize.width, 0), d = g.max(D - WindowSize.height, 0),
                        b = g.min(g.max(b, -d), 0), c = g.min(g.max(c, -f), 0);
                    a.$coverImg.css({top: b, left: c})
                }).on("mouseup.coverimg", function () {
                    f.off("mousemove.coverimg mouseup.coverimg")
                })
            });
            return this
        }, getPosition: function (a, b, c) {
            var f =
                    a.outerWidth(), d = a.outerHeight(), g = b.outerWidth(), b = b.outerHeight(), a = a.position(), r = [],
                w = a.left / g * 100, v = a.top / b * 100;
            w > 50 && !c ? r.push("right:" + ((g - a.left - f) / g * 100).toFixed(1) + "%") : r.push("left:" + w.toFixed(1) + "%");
            v > 50 && !c ? r.push("bottom:" + ((b - a.top - d) / b * 100).toFixed(1) + "%") : r.push("top:" + v.toFixed(1) + "%");
            return r.join(";")
        }, getCustomPostion: function () {
            return '{"cover-photo":"' + this.getPosition(this.$coverImg, this.$coverImg.parent(), true) + '", "cover-header":"' + this.getPosition(this.$header, this.$headerWrapper) +
                '"}'
        }, close: function () {
            this.$el && this.$el.animate({top: -this.height}, {duration: 200});
            f.off("mousedown.coverimg");
            this.closeGuide();
            this.trigger("closed");
            return this
        }, load: function () {
            var a = this;
            this.data || $.ajax({
                url: "/trips/" + _G_trip_id + "/photos.json",
                dataType: "json",
                type: "GET",
                success: function (b) {
                    if (b) {
                        a.data = b;
                        a.updateList()
                    }
                }
            });
            return this
        }, updateList: function () {
            var a = this, b = "";
            $.each(this.data, function (c) {
                c = a.data[c];
                b = b + ("<li" + (c.current ? ' class="selected"' : "") + ' style="background:url(' + c.thumb +
                    ') no-repeat 0 -30px;" data-src="' + c.display + '" data-id="' + c.id + '"><i></i></li>')
            });
            a.$list.html(b);
            var c = this.data.length * 156;
            a.$list.width(c);
            a.listWidth = c;
            a.checkBtnStatus();
            a.selectedItem = a.$list.find(".selected");
            a.selectedItem.length && a.$btnClose.attr("disabled", false).removeClass("btn-disable");
            return this
        }
    });
    b.CoverPhoto = a;
    b.CoverPhotoEditor = c
})(window, document, tripshow.View);
(function () {
    function a(a, c, f) {
        var f = f || {}, g = this;
        g.slider = c;
        g.$el = $(a);
        g.nav = new d(g.$el.find(".trips-nav-wrapper"), c, f);
        g.nav.target = g;
        WindowResizeListener.add(function () {
            g.resize()
        });
        g.resize()
    }

    function d(a, c, f) {
        var d = this;
        d.options = f;
        this.$el = a = $(a);
        this.$nav = a.find(".trips-nav");
        this.$list = a.find(".trips");
        this.$listWrapper = a.find(".trip-nodes");
        this.$control = a.find(".trips-cont");
        this.$controlLeft = a.find(".left").click(function () {
            d.$listWrapper.animate({scrollLeft: "-=50"}, 200, function () {
                d._checkControlStatus()
            })
        });
        this.$controlRight = a.find(".right").click(function () {
            d.$listWrapper.animate({scrollLeft: "+=50"}, 200, function () {
                d._checkControlStatus()
            })
        });
        this.slider = c;
        this.children = [];
        this._createMeasureBox();
        $.each(c.getChildren(), function () {
            d.add(this)
        });
        this.measure()
    }

    a.prototype = {
        resize: function () {
            var a = WindowSize.width, c = this.$el,
                f = a - c.find(".trips-thumb").width() - c.find(".trips-comments").width() - 500;
            this.nav.resize(f);
            c.css("left", Math.ceil((a - c.outerWidth()) / 2))
        }
    };
    _.extend(a.prototype, Backbone.Events);
    d.prototype = {
        _createNode: function (a, c, f) {
            var d = this, c = $("<a>").text(c).attr({href: a, title: f});
            if (d.options.useAnchor) c.on("click", function (c) {
                c.preventDefault();
                c = a.replace("#", "").replace("/", "-").replace("day", "d");
                c == "end" && (c = "theend");
                d.target.trigger("tripanchor", c)
            });
            return c
        }, add: function (a) {
            if (a.layout === "full") {
                var c = a.getFirstChild(), f = c.type, c = c.model;
                if (f === tripshow.View.Note.NOTE_TYPE.DAY || f === tripshow.View.Note.NOTE_TYPE.NODE || f === tripshow.View.Note.NOTE_TYPE.THEEND) {
                    var d = $("<div>").addClass("d-" +
                        f), j = this.children[this.children.length - 1];
                    if (f === tripshow.View.Note.NOTE_TYPE.DAY) {
                        this.children.push([d, a, []]);
                        a = c.get("day");
                        d.append(this._createNode("#day/" + c.get("sid"), "D" + a, "\u7b2c" + a + "\u5929"))
                    } else if (f === tripshow.View.Note.NOTE_TYPE.NODE) {
                        j[2].push([d, a]);
                        d.append(this._createNode("#nd/" + c.get("sid"), c.get("entry").name_zh_cn, c.get("entry").name_zh_cn))
                    } else if (f === tripshow.View.Note.NOTE_TYPE.THEEND) {
                        this.children.push([d, a, []]);
                        d.append(this._createNode("#end", "End", "\u65c5\u7a0b\u7ed3\u675f"))
                    }
                    this.$list.append(d);
                    this.$measureBoxContent.append(d.clone())
                }
            }
        }, _createMeasureBox: function () {
            this.$measureBox = $('<div class="trips-measure">');
            this.$measureBoxContent = $('<div class="inner clearfix">').appendTo(this.$measureBox);
            $("body").append(this.$measureBox)
        }, measure: function () {
            this.$list.css("width", this.listWidth = this.$measureBoxContent.outerWidth() + 6);
            this.$measureBox.remove()
        }, setCurrentStyle: function (a) {
            var c = this;
            if (!(this.current && this.current[0] === a[0])) {
                this.current && this.current.removeClass("current");
                this.current = a.addClass("current");
                var a = a.position(), f = this.$listWrapper.scrollLeft(), d = this.listWrapperWidth / 2, j = f + d;
                if (a.left >= j && f < this.listWidth - this.listWrapperWidth || a.left <= j && f > 0) {
                    a = {scrollLeft: "+=" + (a.left - d)};
                    this.$listWrapper.animate(a, 200, function () {
                        c._checkControlStatus()
                    })
                }
            }
        }, setCurrent: function (a) {
            var c = this, f;
            $.each(c.children, function (d) {
                var d = c.children[d], j = d[2];
                if (d[1] === a) {
                    f = d[0];
                    return false
                }
                $.each(j, function (c) {
                    if (j[c][1] === a) {
                        f = j[c][0];
                        return false
                    }
                })
            });
            f && c.setCurrentStyle(f)
        },
        _disableControl: function () {
            this.controlEnable = false;
            this.$nav.addClass("disable-control")
        }, _enableControl: function () {
            this.controlEnable = true;
            this.$nav.removeClass("disable-control")
        }, _checkControlStatus: function () {
            if (this.controlEnable) {
                var a = this.$listWrapper.scrollLeft();
                a == 0 ? this.$controlLeft.addClass("left-disable") : this.$controlLeft.removeClass("left-disable");
                a >= this.listWidth - this.listWrapperWidth ? this.$controlRight.addClass("right-disable") : this.$controlRight.removeClass("right-disable")
            }
        },
        resize: function (a) {
            if (this.listWidth <= a) {
                a = this.listWidth;
                this._disableControl()
            } else {
                this._enableControl();
                this._checkControlStatus()
            }
            this.$listWrapper.width(a);
            this.listWrapperWidth = a
        }
    };
    tripshow.View.TripNav = a
})();
var TripEditor = {};
(function () {
    var a = TripUtils.PriceCurrencyManager, d, b, c, f;
    TripEditor.photoRotate = {
        success: function (a) {
            b.model.set("photo", a);
            $.fancybox.close()
        }, open: function (a) {
            if (!d) {
                d = $($("#_tpl_photo_rotate").html());
                f = $('input[name="rotate_type"]', d);
                c = $("form", d).on("ajax:before", function () {
                    var a = f.val();
                    if (a < 1 || a > 3) {
                        $.fancybox.close();
                        return false
                    }
                });
                var g = $(".img", d);
                g.each(function (a) {
                    var b = $(this);
                    b.click(function () {
                        g.removeClass("selected");
                        b.addClass("selected");
                        f.val(a + 1)
                    })
                });
                getHidder().append(d)
            }
            b =
                a;
            c.attr("action", "/trips/" + _G_trip_id + "/notes/" + b.model.get("sid") + "/rotate");
            var a = b.model.get("photo"), a = a.width / a.height, j, k;
            if (a > 1) {
                j = 140;
                k = Math.ceil(140 / a)
            } else {
                j = Math.ceil(140 * a);
                k = 140
            }
            $(".img", d).removeClass("selected");
            f.val(0);
            d.find("img").attr("src", b.src).css({width: j, height: k, margin: 0}).each(function (a) {
                var b = {};
                if ($.support.cssAttrCheck("transform")) if (a % 2 === 1) {
                    b["margin-top"] = Math.ceil((140 - k) * 0.5);
                    b["margin-left"] = Math.ceil((140 - j) * 0.5)
                } else {
                    b["margin-top"] = Math.ceil((140 - j) * 0.5 +
                        (j - k) * 0.5);
                    b["margin-left"] = Math.ceil((140 - k) * 0.5 + (k - j) * 0.5)
                } else {
                    b["margin-top"] = Math.ceil((140 - (a % 2 === 0 ? j : k)) * 0.5);
                    b["margin-left"] = Math.ceil((140 - (a % 2 === 0 ? k : j)) * 0.5)
                }
                $(this).css(b)
            });
            $.fancybox({width: 546, padding: 0, href: "#photo-rotate"})
        }
    };
    var g, j, m, o, n;
    TripEditor.photoEditor = {
        open: function (a) {
            if (!g) {
                g = $($("#_tpl_photo_edit").html());
                j = g.find(".photo img");
                m = g.find("textarea").textCounter();
                o = g.find("form");
                getHidder().append(g)
            }
            n = a;
            a = n.model;
            o.attr("action", "/trips/" + _G_trip_id + "/notes/" + a.get("sid"));
            j.attr("src", n.src);
            m.val(a.get("description") || "");
            $.fancybox({
                padding: 0,
                autoDimensions: true,
                href: "#edit-photo",
                hideOnOverlayClick: false,
                onComplete: function () {
                    m.focus()
                }
            })
        }, success: function (a) {
            n.model.set({description: a.description});
            $.fancybox.close()
        }
    };
    var l, p, r, w, v;
    TripEditor.textEditor = {
        open: function (a, b) {
            if (!l) {
                l = $($("#_tpl_text_edit").html());
                w = l.find('input[name="target"]');
                r = l.find("form");
                method = l.find('input[name="_method"]');
                v = l.find(".btn-submit");
                p = l.find("textarea").on("keydown", function () {
                    setTimeout(function () {
                        checkButtonStatus.call(p,
                            v, "btn-submit-disable")
                    }, 30)
                }).textCounter();
                WindowSize.height < 600 && p.css("height", WindowSize.height - 170);
                getHidder().append(l)
            }
            if (b) {
                r.attr({action: "/trips/" + _G_trip_id + "/notes"});
                method.val("POST");
                w.val(b);
                p.val("")
            } else {
                var c = a.model;
                r.attr({action: "/trips/" + _G_trip_id + "/notes/" + c.get("sid")});
                method.val("PUT");
                p.val(c.get("description"))
            }
            checkButtonStatus.call(p, v, "btn-submit-disable");
            $.fancybox({
                padding: 0,
                autoDimensions: true,
                href: "#edit-text",
                hideOnOverlayClick: false,
                onComplete: function () {
                    p.focus()
                }
            })
        }
    };
    var s, x, B;
    TripEditor.titleEditor = {
        open: function () {
            if (!s) {
                s = $($("#_tpl_change_title").html());
                x = s.find('input[name="trip[name]"]');
                s.find("form");
                B = x.val();
                getHidder().append(s)
            }
            x.val(B);
            $.fancybox({
                padding: 0,
                scrolling: "no",
                href: "#edit-title",
                width: 460,
                height: 155,
                hideOnOverlayClick: false,
                onComplete: function () {
                    x.focus()
                }
            })
        }, success: function () {
            B = x.val();
            $("#js-cover-title").css("font-size", Math.floor(Math.max(Math.min(360 / $.getChsLen(B), 48), 36)));
            $("#js-cover-title .inner-text").text(B);
            $("#back-cover h1 .inner-text").text(B);
            $.fancybox.close();
            $(".form-tips-error").hide()
        }
    };
    var E = function () {
        D.remove();
        D = t = A = J = null;
        C = {};
        $(".form-tips-error").hide()
    }, y = {
        attraction: ["price_amount", "price_currency", "time", "time_unit"],
        sight: ["price_amount", "price_currency", "time", "time_unit"],
        hotel: ["price_amount", "price_currency"],
        restaurant: ["price_amount", "price_currency"],
        activity: ["price_amount", "price_currency"],
        shopping: [],
        transport: []
    }, D, t, A, J, C = {}, q;
    TripEditor.nodeEditor = {
        open: function (b) {
            q = b;
            var c = q.model;
            if (!D) {
                D = $($("#_tpl_edit_node").html());
                getHidder().append(D);
                var f = $(".entry-name", D);
                f.on("click", ".change", function (a) {
                    a.preventDefault();
                    $("h3, span", f).hide();
                    f.append('<input class="input-txt" data-error-tip="\u6700\u591a14\u5b57" minlen="1" maxlen="28" name="name" value="' + q.model.get("entry").name_zh_cn + '" > <a href="#" class="cancel">\u53d6\u6d88</a>')
                }).on("click", ".cancel", function (a) {
                    a.preventDefault();
                    $("input, .cancel", f).remove();
                    $("h3, span", f).show()
                })
            }
            D.find(".star").score({receiver: D.find('input[name="score"]'), score: c.get("score")});
            D.find("form").attr({action: "/trips/" + _G_trip_id + "/trip_days/" + c.get("trip_day_id") + "/nodes/" + c.get("sid")});
            A = D.find('textarea[name="comment"]').textCounter().val(c.get("comment"));
            J = D.find('textarea[name="tips"]').textCounter().val(c.get("tips"));
            t = D.find('input[name="score"]');
            var d = c.get("entry");
            D.find("h3").text(d.name_zh_cn);
            D.find("h4").text(d.name_en || "");
            D.find(".address").text(d.address || "");
            d.user_entry ? $(".entry-name", D).append('<span><a href="#" class="change">\u6539\u540d</a></span>') :
                $(".entry-name span", D).remove();
            b = d.type == "hotel" ? y[d.type.toLowerCase()] : y[d.attraction_type];
            if (b.length) {
                d = d.type == "hotel" ? $("#_tpl_edit_node_" + d.type.toLowerCase()).html() : $("#_tpl_edit_node_" + d.attraction_type).html();
                D.find(".memo").html(d);
                $.each(b, function (b, f) {
                    C[f] = D.find('[name="memo[' + f + ']"]');
                    f === "price_currency" ? D.find('select[name="memo[price_currency]"]').append(a.optionString()).val(c.get("memo")[f] || a.lastPriceCurrency) : C[f].val(c.get("memo")[f] || "")
                })
            }
            D.find('input[name="memo[price_amount]"],input[name="memo[time]"]').keydown(function () {
                var a =
                    $(this), b = /[^\d\.]/g;
                setTimeout(function () {
                    var c = a.val();
                    b.test(c) && a.val(c.replace(b, ""))
                }, 10)
            });
            $.fancybox({padding: 0, autoDimensions: true, href: "#edit-node", hideOnOverlayClick: false, onClosed: E})
        }, success: function () {
            var b = t.val(), c = A.val(), f = J.val(), d = {};
            C && $.each(C, function (b, c) {
                d[b] = c.val();
                if (b == "price_currency") a.lastPriceCurrency = c.val()
            });
            b = {score: b, comment: c, tips: f, memo: d};
            c = $(".entry-name input", D);
            if (c.length) {
                b.entry = q.model.get("entry");
                b.entry.name_zh_cn = c.val()
            }
            q.model.set(b);
            $.fancybox.close()
        }
    };
    var u = function (a) {
        return '<div class="item"><label>' + (S + 1) + '\u3001</label><textarea class="textarea" name="trip[tip_attributes][texts][]" maxlen="300" data-error-tip="\u6700\u591a150\u5b57">' + (a ? a : "") + "</textarea></div>"
    }, k = function (a) {
        for (var b = "", c = 0; c < a; c++) {
            b = b + u();
            S++
        }
        return b
    }, K, z, O, S;
    TripEditor.tipsEditor = {
        open: function (a) {
            if (!K) {
                K = $($("#_tpl_edit_tips").html());
                K.find("form");
                z = K.find(".list");
                getHidder().append(K)
            }
            O = a;
            var a = O.model, b = a.get("tips") || [];
            $('input[name="trip[tip_attributes][id]"]',
                K).val(a.get("sid") || "");
            var c = "", a = b.length;
            S = 0;
            $.each(b, function (a) {
                c = c + u(b[a]);
                S++
            });
            (a = 5 - a) && (c = c + k(a));
            c = c + '<div class="item-add">\u589e\u52a05\u6761</div>';
            z.html(c);
            $("textarea", z).autosize("textarea");
            $(".item-add", z).click(function () {
                $(this).before(k(5));
                $("textarea", z).autosize("textarea")
            });
            $.fancybox({
                padding: 0,
                autoDimensions: true,
                href: "#edit-tips",
                height: 540,
                width: 480,
                scrolling: "no",
                hideOnOverlayClick: false
            })
        }, success: function (a) {
            a && a.tip && O.model.set({sid: a.tip.id, tips: a.tip.texts});
            $.fancybox.close()
        }
    }
})();
(function (a, d) {
    function b(a) {
        var b = a.id;
        if (j[b]) a = j[b]; else {
            a = new (p[a.get("type")])({model: a});
            a.render();
            o.append(a.$el.hide());
            j[b] = a
        }
        return a
    }

    var c, f, g, j = {}, m, o, n, l, p = tripshow.FULL_NOTE_CLASSES, r = "ontouchstart" in a, w, v, s = {
        setCollection: function (a) {
            w = a;
            v = null
        }, isOpened: function () {
            return g
        }, autoPlay: function () {
            var a = this;
            if (!a._autoPlayTimer) {
                a.next();
                a._autoPlayTimer = setInterval(function () {
                    if (a.next() === false) a._autoPlayTimer = d.clearTimer(a._autoPlayTimer)
                }, 5E3)
            }
        }, stopPlay: function () {
            this._autoPlayTimer = d.clearTimer(this._autoPlayTimer)
        },
        isPlaying: function () {
            return !!this._autoPlayTimer
        }, next: function () {
            var a = w.next(v);
            if (!a) return false;
            this.open(a);
            n.removeClass("left-disable");
            if (!w.next(a)) {
                l.addClass("right-disable");
                return false
            }
        }, prev: function () {
            var a = w.prev(v);
            if (!a) return false;
            this.open(a);
            l.removeClass("right-disable");
            if (!w.prev(a)) {
                n.addClass("left-disable");
                return false
            }
        }, open: function (a) {
            if (a) {
                if (!f) {
                    m = d("#full-viewer-overlay");
                    o = d("#full-viewer").touchClick(function (a) {
                        a && a.target === this && s.close()
                    });
                    d(".close", o).touchClick(function () {
                        s.close();
                        return false
                    });
                    n = d(".left", o).click(function () {
                        s.prev();
                        return false
                    });
                    l = d(".right", o).click(function () {
                        s.next();
                        return false
                    });
                    if (r) {
                        n.hide();
                        l.hide();
                        var j = null, p = null;
                        o.on("touchstart", function (a) {
                            a.preventDefault();
                            j = a.originalEvent.touches[0].pageX
                        }).on("touchmove", function (a) {
                            a.preventDefault();
                            p = a.originalEvent.touches[0].pageX
                        }).on("touchend", function (a) {
                            a.preventDefault();
                            p === null && (p = j);
                            p - j > 80 ? s.prev() : p - j < -80 && s.next();
                            j = p = null
                        })
                    }
                    f = true
                }
                if (!g) {
                    m.show();
                    o.css({height: WindowSize.height, top: d(window).scrollTop()}).show();
                    g = true
                }
                c && c.close();
                var y = b(a);
                y.$el.show();
                y.position();
                c && s.trigger("noteshow", a.id);
                c = y;
                v = a;
                this.trigger("open", TripUtils.getNoteHash(y));
                (a = w.next(a)) && b(a)
            }
        }, resize: function () {
            c && c.position()
        }, close: function () {
            this.stopPlay();
            if (g) {
                m.hide();
                o.hide();
                c && c.close();
                c = null;
                g = false
            }
            this.trigger("close")
        }
    };
    _.extend(s, Backbone.Events);
    tripshow.View.FullScreenViewer = s
})(window, jQuery);
(function (a) {
    a.TrainView = Backbone.View.extend({
        show: function () {
            $.support.cssAttrCheck("transition") ? this.$el.css("left", 0) : this.$el.animate({left: 0}, {duration: 200});
            this.visibility = true;
            this.trigger("opened")
        }, hide: function () {
            var a = this;
            $.support.cssAttrCheck("transition") ? a.$el.on(FX.transitionend, function () {
                a.$el.off(FX.transitionend);
                a.trigger("closed")
            }).css("left", "100%") : a.$el.animate({left: "100%"}, {
                duration: 200, complete: function () {
                    a.trigger("closed")
                }
            });
            a.visibility = false
        }
    })
})(tripshow.View);
(function (a, d, b) {
    function c() {
        if (r) {
            D = 40;
            t = 5
        } else {
            D = 100;
            t = 50
        }
    }

    function f(a, c) {
        var f = this;
        f.$viewport = b(c).bind("mousewheel", function (a, b) {
            b || (b = 1);
            b > 0 ? f.slideLeft(b) : f.slideRight(Math.abs(b))
        });
        f.groups = [];
        f.$el = b(a);
        f.left = 0;
        f._currentScrollLeft = 0;
        f.resizeViewport();
        f.addTextButtons = {};
        f.textButtonsVisibility = true;
        f.dragEvent()
    }

    function g(a) {
        this.notes = [];
        this.slider = a;
        this.left = 0
    }

    function j() {
        var a = _G_trip_current_user_likes, b = _G_trip_current_user_comments;
        _G_trip_collection.each(function (c) {
            var f =
                {trip_id: _G_trip_id, trip_name: _G_trip_name};
            a && _.indexOf(a, c.id) !== -1 && (f.current_user_like = true);
            b && _.indexOf(b, c.id) !== -1 && (f.current_user_comment = true);
            c.set(f, {silent: true})
        })
    }

    function m() {
        b("#trip-loading").remove();
        b("#js-trip").addClass("trips-wrapper-visible");
        if (a._G_is_trip_first_view && a._G_is_trip_author) {
            fa.open().openGuide();
            b("body").addClass("first-view")
        }
    }

    function o() {
        AudioPlayer.getPlayer();
        b("#trip-comments").fancybox({
            margin: 0, padding: 0, width: 700, height: 540, type: "iframe", href: "/trips/" +
            _G_trip_id + "/comments", scrolling: "no", hideOnOverlayClick: false
        });
        b("#trip-thumb").on("click", function (a) {
            a.preventDefault();
            s.trigger("open_trip_thumb", [b(this).attr("href")])
        });
        b("#link-favorite").on("ajax:success", function () {
            var a = b(this);
            a.hasClass("favorited") ? a.attr("title", "\u6536\u85cf").removeClass("favorited") : a.attr("title", "\u53d6\u6d88\u6536\u85cf").addClass("favorited")
        }).on("ajax:beforeSend", function () {
            b(this).addClass("loading")
        }).on("ajax:complete", function () {
            b(this).removeClass("loading")
        })
    }

    function n(a, b, c) {
        if (a && b) {
            a.visibility || a.show();
            var f = b.findNote(c);
            if (f && f.group && f.group.left) b.scrollToGroup(f.group, true); else if (f) b.on("rendered", function () {
                b.scrollToGroup(f.group, true);
                b.off("rendered", arguments.callee)
            })
        }
    }

    function l(c, f) {
        var d, j, k;
        b("#slider .note").each(function () {
            var l = b(this), m = l.data("group"), n;
            n = l.data("type");
            n === y.THEEND && _G_trip_collection.add({id: "theend", sid: 0, type: "theend"});
            l = b.extend({
                    el: l,
                    model: _G_trip_collection.get(l.attr("id")),
                    inited: true,
                    isAuthor: !!a._G_is_trip_author
                },
                f);
            n = new tripshow.NOTE_CLASSES[n](l);
            a._G_is_trip_author && n.canEdit();
            if (B.Note.isNode(n) || m != d) {
                k && k.checkLayout();
                j = new g(c);
                j.add(n);
                c.add(j);
                k = j
            } else j.add(n);
            d = m
        });
        k && k.checkLayout();
        d = j = k = null
    }

    function p(c) {
        s.off("note:like").off("note:comments");
        s.on("note:like", function (c, f) {
            var d = f.model, g;
            g = d.get("likes_count") || 0;
            var j = b("#cover-header .liked-num span").text() - 0 || 0;
            if (d.get("current_user_like")) {
                g = {likes_count: Math.max(g - 1, 0), current_user_like: false};
                j = j - 1
            } else {
                g = {likes_count: g + 1, current_user_like: true};
                j = j + 1
            }
            if (a._G_user_signed_in) {
                d.set(g);
                b("#cover-header .liked-num span").text(Math.max(j, 0));
                b.ajax({
                    url: "/trips/" + _G_trip_id + "/like",
                    type: "POST",
                    data: {likeable_id: d.get("sid"), likeable_type: TripUtils.noteServerType(f.type)}
                })
            } else open_sign_in_window()
        }).on("note:comments", function (a, b, f) {
            c.open(a, b, f)
        })
    }

    var r = screen.height <= 568, w = isMobileDevice(), v = "ontouchstart" in document.documentElement, s = b(a),
        x = b(d), B = tripshow.View, E = B.FullScreenViewer, y = B.Note.NOTE_TYPE, D = 100, t = 50,
        A = ["bottomHeavy", "equally",
            "topHeavy"];
    c.call(WindowSize);
    WindowResizeListener.add(c);
    var J, C = A[b.rnd(0, 2)];
    J = function (a) {
        var c, f = A.length, d;
        if (a === "full" || !a) {
            a = C;
            d = true
        }
        b.each(A, function (b, g) {
            if (a === g) {
                c = A[b === f - 1 ? 0 : b + 1];
                d && (C = c);
                return false
            }
        });
        return c
    };
    var q, u = function () {
        if (!K) {
            K = true;
            if (k.length) {
                var a = k.shift();
                if (a.complete) {
                    var c = a.complete;
                    a.complete = function () {
                        c();
                        K = false;
                        u()
                    }
                } else a.complete = function () {
                    K = false;
                    u()
                };
                var f = a.error;
                a.error = function () {
                    f && f();
                    b.confirm("\u7f51\u7edc\u5f02\u5e38\uff0c\u8bf7\u5237\u65b0\u9875\u9762\u540e\u91cd\u8bd5\u3002",
                        function () {
                            location.reload()
                        }, {btnCancel: false})
                };
                a = b.extend({timeout: 1E4}, a);
                b.ajax(a)
            } else K = false
        }
    }, k = [], K;
    q = {
        add: function (a) {
            if (a && a.url) {
                k.push(a);
                return this
            }
        }, run: function () {
            u();
            return this
        }
    };
    var z, O = function () {
        if (L) {
            N = setTimeout(function () {
                L.css("left", "-3000px");
                H = null
            }, 100);
            clearTimeout(aa)
        }
    }, S = function (a) {
        L.find("span").removeClass("selected");
        L.find('[data-layout="' + a + '"]').addClass("selected")
    }, L, T, H, N, aa;
    z = {
        init: function (a) {
            T = a;
            L = b("#layout-toolbar").mouseenter(function () {
                clearTimeout(N)
            }).mouseleave(O);
            b("span", L).click(function () {
                if (H) {
                    var a = b(this).data("layout");
                    S(a);
                    H.setLayout(a);
                    T.render();
                    var c = H.getFirstChild();
                    q.add({
                        url: "/trips/" + _G_trip_id + "/notes/" + c.getId("int"),
                        type: "PUT",
                        data: {new_layout: a}
                    }).run()
                }
            })
        }, show: function (a, b, c) {
            H !== a && L.css("left", "-3000px");
            clearTimeout(N);
            aa = setTimeout(function () {
                    H = a;
                    L.find("span").removeClass("selected");
                    L.css({top: T.viewportTop - 40, left: c - T.getScrollLeft(), width: b});
                    S(H.layout);
                    H.getChildren().length > 2 ? L.addClass("layout-toolbar-3") : L.removeClass("layout-toolbar-3")
                },
                500)
        }, hide: O
    };
    var Q, W, ya, da, za, Ha = false;
    Q = {
        init: function () {
            W = b("#dragdrop-box");
            ya = W.find(".cloner-content");
            return this
        }, move: function (a) {
            W.css({left: a.x - da / 2, top: a.y - za / 2});
            return this
        }, setContent: function (a, b) {
            if (a === "img" || a === "video") {
                da = 100;
                za = Math.ceil(100 / b.data("width") * b.data("height"))
            } else {
                da = 100;
                za = 80
            }
            ya.text(b).css({width: da, height: za});
            return this
        }, show: function () {
            W.css({visibility: "visible", left: 0});
            Ha = true;
            return this
        }, hide: function () {
            W.css({visibility: "hidden", left: "-999px"});
            Ha =
                false;
            return this
        }, getPosition: function () {
            return Ha ? W.position() : false
        }
    };
    var pa, qa = function () {
        var a = {visibility: "hidden", left: "-999px"};
        Y && Y.css(a);
        Z && Z.css(a)
    }, Pa = function () {
        qa();
        Y && Y.css({visibility: "visible"})
    }, Qa = function (a) {
        Y && Y.css({left: a - 4})
    }, Ra, R, Aa, Y, Z, U, ea, ha;
    pa = {
        hideSpacer: qa, showSpacer: Pa, moveSpacer: Qa, init: function (a) {
            if (!Ra) {
                Ra = true;
                R = a;
                Y = b("#dragdrop-spacer");
                Z = b("#dragdrop-spacer-hor")
            }
        }, reset: function () {
            ea = null;
            U && U.hideMask();
            Q.hide();
            qa()
        }, clonerCopy: function (a, c) {
            var f = c.type,
                d = c.model;
            if (f === y.PHOTO) {
                f = d.get("photo");
                Q.setContent("img", b("<img>").attr("src", c.src).data({width: f.width, height: f.height})).show()
            } else f === y.TEXT ? Q.setContent("text", d.get("description")).show() : f == y.VIDEO && Q.setContent("video", b('<img src="' + d.get("video").src + '?vframe/jpg/offset/0/w/400/h/400/rotate/auto" data-width="400" data-height="400">')).show();
            this.moveCloner(a)
        }, moveCloner: function (a) {
            Q.move({x: a.pageX, y: a.pageY})
        }, onMousedown: function (a, c) {
            function f() {
                var a = Q.getPosition(), c;
                if (a) {
                    if (a.left <
                        0) {
                        c = true;
                        R.slideRightScreen()
                    } else if (a.left > WindowSize.width - 200) {
                        c = true;
                        R.slideLeftScreen()
                    }
                    if (c) {
                        b.clearTimer(ha);
                        setTimeout(function () {
                            ha = setInterval(f, 500)
                        }, 1E3)
                    }
                }
            }

            ea = c;
            this.clonerCopy(a, c);
            clearInterval(ha);
            ha = setInterval(f, 500)
        }, onMousemove: function (a) {
            var b = this;
            b._mousemoveEvent = a;
            b.moveCloner(a);
            Aa || (Aa = setInterval(function () {
                b.checkInsertable(b._mousemoveEvent, function (a, b, c, f) {
                    if (a === false && b === false) qa(); else if (a === false) {
                        var c = f.width, d = f.group.left;
                        qa();
                        Z && Z.css({
                            visibility: "visible",
                            width: c, left: d
                        });
                        Z && Z.css({top: b})
                    } else {
                        Pa();
                        Qa(a)
                    }
                    if (f && a === false && b === false) {
                        U = f;
                        f.showMask()
                    } else U && U.hideMask()
                })
            }, 100));
            R.textButtonsVisibility && R.hideTextButtons()
        }, onMouseup: function (a, c) {
            var f = this;
            b.clearTimer(ha);
            Aa = b.clearTimer(Aa);
            f.checkInsertable(a, function (a, b, d, j, k) {
                var l;
                if (a !== false || b !== false) {
                    if (d.getChildren().length === 1 && d.getFirstChild() === c) return;
                    c.group.removeNote(c);
                    if (a !== false) {
                        k = d.nextSibling().getFirstChild();
                        a = new g(R);
                        a.add(c);
                        a.checkLayout();
                        j = d.getLastChild();
                        j.$el.after(c.$el);
                        R.insertAfter(d, a);
                        q.add({
                            url: "/trips/" + _G_trip_id + "/notes/" + c.getId("int") + "/move",
                            type: "put",
                            data: {target: k.getId(), position: 0}
                        }).run()
                    } else {
                        d = j.group;
                        a = d.getChildIndexOf(j);
                        d.add(c, k === 1 ? a : a + 1);
                        d.setLayout("equally");
                        k === 1 ? j.$el.before(c.$el) : j.$el.after(c.$el);
                        q.add({
                            url: "/trips/" + _G_trip_id + "/notes/" + c.getId("int") + "/move",
                            type: "put",
                            data: {target: j.getId(), position: k}
                        }).run()
                    }
                    l = true
                } else if (j && j != c) {
                    f.swapNote(c, j);
                    l = true;
                    q.add({
                        url: "/trips/" + _G_trip_id + "/notes/" + c.getId("int") + "/exchange", type: "put",
                        data: {target: j.getId()}
                    }).run()
                }
                if (l) {
                    R.render();
                    R.measureScrollLeft()
                }
            });
            f.reset();
            R.textButtonsVisibility || R.showTextButtons()
        }, checkInsertable: function (a, c) {
            var f = a.pageX, d = a.pageY, g = R.getScrollLeft(), j = R.viewportTop, k = 0, l;
            U && U.hideMask();
            b.each(R.getChildren(), function () {
                var a = this;
                k = k + (1 + this.width);
                var m = k - g, n = m - this.width + 30, q = m - 30, o = this.getType();
                if (f > m - 30 && f < m + 30 && d > j && d < j + R.viewportHeight) {
                    if (o === y.TIPS || o === y.ACCOUNTBOOK || o === y.THEEND) return l = false;
                    l = true;
                    c && c(k, false, a);
                    return false
                }
                if (f >
                    n && f < q) {
                    if (o === y.DAY || o === y.NODE || o === y.THEEND || o === y.TIPS) return false;
                    l = true;
                    var p, A = this.numChildren(), r = d - j;
                    b.each(this.getChildren(), function (b) {
                        if (A < 3) {
                            var d = this.top + this.height;
                            if (r > -30 && r - this.top < 30) {
                                p = true;
                                ea !== this && c && c(false, this.top, a, this, 1);
                                return false
                            }
                            if (b === A - 1 && r > d - 30 && r < d + 30) {
                                p = true;
                                ea !== this && c && c(false, this.top + this.height - 9, a, this, 2);
                                return false
                            }
                        }
                        b = this.left - g;
                        if (f > b && f < b + this.width && r > this.top && r < this.top + this.height) {
                            ea && ea !== this && c && c(false, false, a, this);
                            p = true;
                            return false
                        }
                    });
                    if (p) return false
                }
            });
            !l && c && c(false, false)
        }, checkReplace: function (a, c, f) {
            var d = a.pageX, g = a.pageY - R.viewportTop, j = R.getScrollLeft();
            b.each(c.getChildren(), function () {
                var a = this.left - j;
                if (d > a && d < a + this.width && g > this.top && g < this.top + this.height) {
                    (!ea || ea != this) && f && f(false, false, c, this);
                    return false
                }
            })
        }, swapNote: function (a, b) {
            var c = a.group, f = b.group;
            if (c === f) c.swap(a, b); else {
                c.replace(b, a);
                f.replace(a, b)
            }
            c = b.$el.next();
            if (c[0] !== a.$el[0]) {
                a.$el.prev().after(b.$el);
                c.before(a.$el)
            } else {
                c = b.$el.prev();
                a.$el.next().before(b.$el);
                c.after(a.$el)
            }
        }
    };
    var Ia = {
        measureHeavy: function (a, b) {
            var c = Math.ceil(b / 5 * 3), f = {height: c};
            f.width = a.type === y.TEXT ? c / 3 * 4 : b / 7 * 5;
            f.width = Math.ceil(f.width);
            return f
        }, measureLight: function (a, b) {
            var c = b - Math.ceil(b / 5 * 3) - 1, f = {height: c};
            f.width = a.type === y.TEXT ? c / 3 * 4 : b / 7 * 5;
            f.width = Math.ceil(f.width);
            return f
        }, full: function (a, b) {
            return a.getChildren()[0].resize({height: b, top: 0, left: 0}, true)
        }, bottomHeavySplit: function (a, c, f) {
            var a = a.getChildren(), d = a.shift(), g = a.length, j = this.measureLight(d,
                c), k = b.extend(j, {top: 0, left: 0}), d = d.resize(k, true), l = c - j.height - 1, m, n;
            if (g > 1) {
                m = d - 1 * (g - 1);
                n = Math.floor(m / g)
            } else n = d;
            f = 0;
            b.each(a, function (a) {
                a = g > 1 ? a == g - 1 ? m - n * (g - 1) : n : n;
                this.resize({top: c - l, left: f, height: l, width: a});
                f = f + (1 + a)
            });
            return d
        }, topHeavySplit: function (a, c, f) {
            var a = a.getChildren(), d = a.pop(), g = a.length, j = this.measureLight(d, c), k = c - j.height - 1,
                c = b.extend(j, {top: c - j.height, left: 0}), c = d.resize(c, true), l, m;
            if (g > 1) {
                l = c - 1 * (g - 1);
                m = Math.floor(l / g)
            } else m = c;
            f = 0;
            b.each(a, function (a) {
                a = g > 1 ? a == g - 1 ? l - m *
                    (g - 1) : m : m;
                this.resize({top: 0, left: f, height: k, width: a});
                f = f + (1 + a)
            });
            return c
        }, topHeavy: function (a, c, f) {
            var a = a.getChildren(), d = a.shift(), g = a.length, j = this.measureHeavy(d, c),
                k = b.extend(j, {top: 0, left: 0}), d = d.resize(k, true), l = c - j.height - 1, m, n;
            if (g > 1) {
                n = d - 1 * (g - 1);
                m = Math.floor(n / g)
            } else m = d;
            f = 0;
            b.each(a, function (a) {
                a = g > 1 ? a == g - 1 ? n - m * (g - 1) : m : m;
                this.resize({top: c - l, left: f, height: l, width: a});
                f = f + (1 + a)
            });
            return d
        }, bottomHeavy: function (a, c) {
            var f = a.getChildren(), d = f.pop(), g = f.length, j = this.measureHeavy(d, c),
                k = b.extend(j, {top: c - j.height, left: 0}), d = d.resize(k, true), l = c - j.height - 1, m;
            if (g > 1) {
                var j = 1 * (g - 1), n = Math.floor((d - j) / g);
                m = d - n * (g - 1) - j
            } else n = d;
            b.each(f, function (a) {
                this.resize({top: 0, left: (1 + n) * a, height: l, width: a === g - 1 && m ? m : n})
            });
            return d
        }, equally: function (a, c) {
            var f = a.getChildren();
            len = f.length;
            width = 0;
            h = Math.ceil(c / len);
            used = 0;
            width = c / 7 * 5;
            width = Math.ceil(width);
            b.each(f, function (a) {
                var b = {left: 0, height: h, top: (1 + h) * a, width: width};
                if (a == len - 1) b.height = c - used - 1;
                used = used + (b.height + 1 * a);
                a === 0 ? width = this.resize(b,
                    true) : this.resize(b)
            });
            return width
        }
    };
    f.prototype = {
        dragEvent: function () {
            if (v) {
                var a = this, b = v ? "touchstart" : "mousedown", c = v ? "touchmove" : "mousemove",
                    f = v ? "touchend" : "mouseup.dragviewport", d = this.$viewport, g = d[0], j, k, l;
                if (v) {
                    g.addEventListener(b, function (a) {
                        a.preventDefault();
                        k = j = a.touches[0].pageX
                    }, false);
                    g.addEventListener(c, function (b) {
                        b.preventDefault();
                        b = b.touches[0].pageX;
                        a.scrollTo(g.scrollLeft + -(b - k), true, true);
                        k = b;
                        l || (l = Date.now())
                    }, false);
                    g.addEventListener(f, function (b) {
                        b.preventDefault();
                        (b =
                            b.touches && b.touches.length > 0 ? b.touches[0].pageX : k) && Date.now() - l < 250 && (j - b > 50 ? a.slideLeftScreen() : b - j > 50 && a.slideRightScreen());
                        l = null
                    }, false)
                } else d.on(b, function (b) {
                    b.preventDefault();
                    k = j = b;
                    d.on(c, function (b) {
                        b.preventDefault();
                        a.scrollTo(d[0].scrollLeft + -(b.pageX - k.pageX), true, true);
                        k = b;
                        l || (l = Date.now())
                    });
                    x.on(f, function (b) {
                        d.off(c);
                        x.off(f);
                        Date.now() - l < 250 && (j.pageX - b.pageX > 20 ? a.slideLeftScreen() : b.pageX - j.pageX > 20 && a.slideRightScreen());
                        l = null
                    })
                })
            }
        }, add: function (a, c) {
            b.isArray(a) || (a = [a]);
            var f = this;
            c === void 0 ? this.groups = this.groups.concat(a) : b.each(a, function (b) {
                f.groups.splice(c, 0, a[b])
            });
            if (!this.currentGroup) this.currentGroup = this.groups[0]
        }, insertAfter: function (a, b) {
            var c = this.getChildIndexOf(a);
            c > -1 && this.add(b, c + 1)
        }, insertBefore: function (a, b) {
            var c = this.getChildIndexOf(a);
            c > -1 && this.add(b, c)
        }, remove: function (a) {
            var c = this;
            b.each(c.groups, function (b) {
                if (this === a) {
                    c.groups.splice(b, 1);
                    return false
                }
            })
        }, getHeight: function () {
            return this.viewportHeight
        }, getChildren: function () {
            return this.groups.concat()
        },
        getChildAt: function (a) {
            return this.groups[a]
        }, getChildIndexOf: function (a) {
            return _.indexOf(this.groups, a)
        }, findNote: function (a) {
            var c;
            b.each(this.getChildren(), function () {
                if (c = this.findChildren(a)) return false
            });
            return c
        }, getNextNote: function (a) {
            var c, f;
            b.each(this.getChildren(), function () {
                if (c) return false;
                b.each(this.getChildren(), function () {
                    if (f) {
                        c = this;
                        return false
                    }
                    this === a && (f = true)
                })
            });
            return c
        }, getPrevNote: function (a) {
            var c, f;
            b.each(this.getChildren(), function () {
                if (c) return false;
                b.each(this.getChildren(),
                    function () {
                        if (this === a) {
                            c = f;
                            return false
                        }
                        f = this
                    })
            });
            return c
        }, render: function () {
            var a = 0;
            b.each(this.getChildren(), function () {
                var b = this.render(a + 1);
                a = a + (1 + b)
            });
            this.$el.width(a);
            this.width = a;
            this.trigger("rendered");
            this.isEditView && this.relayoutTextButton();
            this._updateNodeTitle()
        }, relayoutTextButton: function () {
            var a = this, c = a.addTextButtons, f = this.getChildren();
            a._resetTextButton();
            b.each(f, function (b) {
                var f = this, d = f.getType();
                if (b > 0 && d != y.THEEND && d != y.ACCOUNTBOOK) {
                    d = c["b" + b];
                    if (!d) {
                        d = c["b" + b] = a._createAddTextButton();
                        a.$viewport.append(d)
                    }
                    d.css("left", f.left - 6).off("click.addtext").on("click.addtext", function (a) {
                        a.stopPropagation();
                        x.trigger("addtext", [f])
                    })
                }
            })
        }, showTextButtons: function () {
            b.each(this.addTextButtons, function () {
                this.css("visibility", "visible")
            });
            this.textButtonsVisibility = true
        }, hideTextButtons: function () {
            b.each(this.addTextButtons, function () {
                this.css("visibility", "hidden")
            });
            this.textButtonsVisibility = false
        }, _resetTextButton: function () {
            b.each(this.addTextButtons, function () {
                this.css("left", "-100px")
            })
        },
        _createAddTextButton: function () {
            return b('<div class="add-text-btn"></div>')
        }, findNearestGroup: function (a) {
            var c = a.getType(), f;
            c === y.DAY || c === y.NODE ? f = a : b.each(this.getChildren(), function () {
                var b = this.getType();
                if (b === y.DAY || b === y.NODE) f = this;
                if (this === a) return false
            });
            return f
        }, setPath: function (a) {
            this.nav = a;
            this.setPathCurrent(this.currentGroup)
        }, setPathCurrent: function (a) {
            if (this.nav) {
                a = this.findNearestGroup(a);
                this.nav.setCurrent(a)
            }
        }, firstVisiable: function () {
            var a = this.getScrollLeft(), c = 0, f;
            b.each(this.getChildren(), function () {
                if (c + this.width >= a) {
                    f = this;
                    return false
                }
                c = c + (1 + this.width)
            });
            return f
        }, _findCurrentGroup: function () {
            var a, c = 0, f = this, d = WindowSize.width / 2;
            b.each(this.getChildren(), function () {
                if (c + this.width > f._currentScrollLeft + d) {
                    f.currentGroup = a = this;
                    return false
                }
                c = c + (1 + this.width)
            });
            return a
        }, slideLeftScreen: function () {
            var a = this._currentScrollLeft + this.viewportWidth;
            if (!(this._currentScrollLeft >= this.width)) {
                var c = 0;
                b.each(this.getChildren(), function () {
                    if (c >= a || c + this.width >
                        a) return false;
                    c = c + (1 + this.width)
                });
                this.scrollTo(c)
            }
        }, slideRightScreen: function () {
            this.getScrollLeft();
            if (!(this._currentScrollLeft <= 0)) {
                var a = this, c = 0;
                b.each(this.getChildren(), function () {
                    if (c + this.width >= a._currentScrollLeft) {
                        c = c - (a.viewportWidth - this.width - 2);
                        return false
                    }
                    c = c + (1 + this.width)
                });
                this.scrollTo(c)
            }
        }, slideLeft: function (a) {
            a = Math.min(a || 1, 5);
            a = this._currentScrollLeft - 150 * a;
            a < 0 && (a = 0);
            this.scrollTo(a, true, true)
        }, slideRight: function (a) {
            a = Math.min(a || 1, 5);
            this.scrollTo(this._currentScrollLeft +
                150 * a, true, true)
        }, scrollTo: function (a, c, f) {
            var d = this, g = d.$viewport;
            d.trigger("slider:scroll");
            a = Math.floor(a);
            a < 0 && (a = 0);
            a > this.width - this.viewportWidth && (a = this.width - this.viewportWidth);
            if (f) {
                d._currentScrollLeft = a;
                g.scrollLeft(a);
                d.preload();
                d._updateNodeTitle();
                d.setPathCurrent(d._findCurrentGroup())
            } else {
                if (c) cancelFrame(d._reqId); else if (this._scrolling) return;
                this._scrolling = true;
                var j = Date.now(), k = 0, l = this._currentScrollLeft, m = a - this._currentScrollLeft,
                    n = Math.min(Math.abs(m), 800), q = function (c) {
                        c =
                            Date.now();
                        if (c - j >= 10) {
                            k = k + (c - j);
                            d._currentScrollLeft = Math.ceil(b.easing.swing(void 0, k, l, m, n));
                            if (k >= n) {
                                d._currentScrollLeft = a;
                                d.$viewport.scrollLeft(d._currentScrollLeft);
                                cancelFrame(d._reqId);
                                d._scrolling = false;
                                d.preload();
                                d._updateNodeTitle();
                                d.setPathCurrent(d._findCurrentGroup());
                                return
                            }
                            j = c;
                            d.$viewport.scrollLeft(d._currentScrollLeft)
                        }
                        return nextFrame(q)
                    };
                d._reqId = nextFrame(q)
            }
        }, isEnd: function () {
            return this._currentScrollLeft >= this.width - this.viewportWidth ? true : false
        }, autoPlay: function () {
            var a =
                this;
            if (!a._autoPlayTimer) {
                a.slideLeftScreen();
                a._autoPlayTimer = setInterval(function () {
                    a.slideLeftScreen();
                    if (a.isEnd()) a._autoPlayTimer = b.clearTimer(a._autoPlayTimer)
                }, 5E3)
            }
        }, stopPlay: function () {
            this._autoPlayTimer = b.clearTimer(this._autoPlayTimer)
        }, isPlaying: function () {
            return !!this._autoPlayTimer
        }, _updateNodeTitle: function () {
            var a, c, f = 0, d = this, g = WindowSize.width / 2;
            b.each(this.getChildren(), function () {
                if (this.layout === "full") {
                    var b = this.getFirstChild();
                    if (b.type === y.DAY) {
                        a = b;
                        c = null
                    } else b.type ===
                    y.NODE && (c = b)
                }
                if (f + this.width > d._currentScrollLeft + g && a) return false;
                f = f + (1 + this.width)
            });
            var j = "\u7b2c" + a.model.get("day") + "\u5929";
            if (c) {
                var j = j + ("\uff1a" + c.model.get("entry").name_zh_cn), k = c.model.get("entry").attraction_id;
                k ? b("#nav-board .anchor").css("display", "inline-block").attr("href", "/attractions/" + k) : b("#nav-board .anchor").hide()
            } else b("#nav-board .anchor").hide();
            b("#nav-board span").text(j)
        }, scrollToGroup: function (a, b) {
            if (a && a.left !== void 0) {
                var c = a.left;
                b && (c = c - (WindowSize.width -
                    a.width) / 2);
                this.scrollTo(c, true)
            }
        }, getScrollLeft: function () {
            return this._currentScrollLeft
        }, measureScrollLeft: function () {
            var a = this;
            setTimeout(function () {
                a._currentScrollLeft = a.$viewport.scrollLeft()
            }, 500)
        }, resizeViewport: function (a) {
            var c = WindowSize.height, f = this.$viewport;
            this.viewportWidth = WindowSize.width;
            this.viewportHeight = a ? a : Math.ceil(Math.max(200, c - D - t));
            this.viewportTop = Math.ceil(Math.max(D, (c - this.viewportHeight) / 2));
            a = {height: this.viewportHeight, top: this.viewportTop};
            f.css("height", a.height).parent().css(a);
            f = b("#nav-board");
            a = f.height();
            f.css("top", this.viewportTop - a);
            a = b("#trips-header");
            a.css("bottom", WindowSize.height - (this.viewportTop + this.viewportHeight + a.height()))
        }, openEditView: function () {
            this.isEditView = true;
            this.trigger("openeditview");
            this._textButtonAdded || this.relayoutTextButton()
        }, closeEditView: function () {
            this.isEditView = false;
            this.trigger("closeeditview");
            this.isZoomOut && this.restore()
        }, zoomout: function () {
            var a = this, b = a.firstVisiable();
            a.isZoomOut = true;
            a.resizeViewport(300);
            a.render();
            a.trigger("zoomout");
            setTimeout(function () {
                a.scrollToGroup(b)
            }, 5);
            this.preload()
        }, restore: function () {
            var a = this, b = a.firstVisiable();
            a.trigger("restore");
            a.isZoomOut = false;
            a.resizeViewport();
            a.render();
            setTimeout(function () {
                a.scrollToGroup(b)
            }, 5)
        }, chkAllIsLoaded: function () {
            if (!this._allLoaded) {
                var a = true, c;
                b.each(this.getChildren(), function () {
                    if (c) return false;
                    b.each(this.getChildren(), function () {
                        if ((this.type === y.PHOTO || this.type === y.VIDEO) && !this.lazyLoaded) {
                            a = false;
                            c = true;
                            return false
                        }
                    })
                });
                this._allLoaded =
                    a
            }
        }, preload: function () {
            // if (!this._allLoaded) {
            //     var a = this, c = this.firstVisiable(), f = this.getScrollLeft(), d;
            //     b.each(this.getChildren(), function () {
            //         this === c && (d = true);
            //         if (d) {
            //             if (this.left - f >= a.viewportWidth * 2) return false;
            //             b.each(this.getChildren(), function () {
            //                 (this.type === y.PHOTO || this.type === y.VIDEO) && this.lazyLoad()
            //             })
            //         }
            //     });
            //     this.chkAllIsLoaded()
            // }
        }
    };
    _.extend(f.prototype, Backbone.Events);
    g.prototype = {
        constructor: g, render: function (a) {
            var b = this.slider.getHeight(), c = this.layout;
            this.height = b;
            this.width = Ia[c](this,
                b);
            this.setPosition(a);
            return this.width
        }, setPosition: function (a) {
            this.left = a;
            b.each(this.notes, function () {
                this.setPosition(a)
            })
        }, getType: function () {
            return this.notes[0].type
        }, isEditable: function () {
            var a = this.notes[0];
            return a.type === y.PHOTO || a.type === y.TEXT
        }, add: function (a, c) {
            b.isArray(a) || (a = [a]);
            var f = this;
            b.each(a, function (b) {
                var d = a[b];
                d.setGroup(f);
                c === void 0 ? f.notes.push(d) : f.notes.splice(b + c, 0, d)
            })
        }, numChildren: function () {
            return this.notes.length
        }, findChildren: function (a) {
            var c;
            b.each(this.notes,
                function () {
                    if (this._id == a) {
                        c = this;
                        return false
                    }
                });
            return c
        }, getChildren: function () {
            return this.notes.concat()
        }, getLastChild: function () {
            return _.last(this.notes)
        }, getFirstChild: function () {
            return this.notes[0]
        }, getChildIndexOf: function (a) {
            return _.indexOf(this.notes, a)
        }, prevSibling: function () {
            var a = this.slider;
            return a.getChildAt(a.getChildIndexOf(this) - 1)
        }, nextSibling: function () {
            var a = this.slider;
            return a.getChildAt(a.getChildIndexOf(this) + 1)
        }, checkLayout: function () {
            var a;
            if (this.notes.length === 1) a =
                "full"; else {
                a = this.notes[0].getGroupLayout();
                a == "full" && (a = J(a))
            }
            this.setLayout(a)
        }, setLayout: function (a) {
            this.layout = a;
            b.each(this.notes, function () {
                this.setGroupLayout(a)
            })
        }, swap: function (a, b) {
            if (a.group === b.group && a.group === this) {
                var c = this.getChildIndexOf(a), f = this.getChildIndexOf(b);
                this.notes[c] = b;
                this.notes[f] = a
            }
        }, replace: function (a, b) {
            a.setGroupLayout(this.layout);
            a.setGroup(this);
            var c = this.getChildIndexOf(b);
            this.notes[c] = a
        }, shift: function () {
            return this.notes.shift()
        }, removeNote: function (a) {
            var b =
                this.getChildIndexOf(a);
            b > -1 && this.notes.splice(b, 1);
            if (this.notes.length === 0) {
                this.slider.remove(this);
                return a
            }
            this.checkLayout();
            return a
        }, join: function (a) {
            if (this.isEditable()) {
                var b = a.getGroupLayout();
                this.add(a);
                this.setLayout(J(b))
            }
        }, concat: function (a) {
            if (a.isEditable()) {
                var c = this, f = a.getChildren(), d = a.layout;
                b.each(f, function () {
                    c.add(this)
                });
                this.slider.remove(a);
                this.setLayout(J(d))
            }
        }, split: function (a) {
            var b = this.slider.getChildIndexOf(this) + 1;
            if (a === 0) {
                var c = this.notes.splice(1, this.notes.length -
                    1), a = new g(this.slider);
                a.add(c);
                a.checkLayout();
                this.slider.add(a, b)
            } else {
                c = this.notes.splice(a, this.notes.length - a);
                if (c.length > 1) {
                    a = new g(this.slider);
                    a.add(c.splice(1, 1));
                    a.checkLayout();
                    this.slider.add(a, b);
                    a = new g(this.slider);
                    a.add(c);
                    a.checkLayout();
                    this.slider.add(a, b)
                } else {
                    a = new g(this.slider);
                    a.add(c);
                    a.checkLayout();
                    this.slider.add(a, this.slider.getChildIndexOf(this) + 1)
                }
            }
            this.checkLayout()
        }, showLayoutToolbar: function () {
            this.slider.isEditView && this.layout !== "full" && z.show(this, this.width,
                this.left)
        }, hideLayoutToolbar: function () {
            this.slider.isEditView && z.hide()
        }
    };
    var fa, ia, la = B.TripShow, ra, ga;
    a.tripShowInit = function () {
        j();
        var c = !!a._G_is_trip_author;
        ia = new B.CoverPhoto({el: b("#cover-photo")});
        if (c) {
            fa = new B.CoverPhotoEditor(ia);
            fa.on("opened", function () {
                la.openMode("editCoverPhoto")
            }).on("closed", function () {
                la.closeMode("editCoverPhoto");
                b("body").removeClass("first-view")
            });
            b("#set-cover").click(function () {
                fa.open();
                return false
            });
            b("#download-pdf").fancybox({
                scrolling: "no", padding: 0,
                type: "iframe", width: 360, height: 370
            });
            b("#share-trip").fancybox({
                href: "/trips/" + _G_trip_id + "/share",
                type: "iframe",
                width: 354,
                height: 506,
                padding: 0,
                scrolling: "no"
            });
            b("body").on("ajax:success", "form", function (c, f) {
                var d = b(this).data("callback");
                if (a[d]) a[d](f)
            }).on("ajax:before", "form", function () {
                var a;
                b(this).find("input, textarea").each(function () {
                    var c = b(this);
                    if (!c.valid()) {
                        a = false;
                        c.showErrorTips()
                    }
                });
                return a
            }).on("ajax:beforeSend", "form", function () {
                b.fancybox.showActivity()
            }).on("ajax:complete",
                "form", function () {
                    b.fancybox.hideActivity()
                })
        }
        b("html,body").css({width: WindowSize.width, height: WindowSize.height, overflow: "hidden"});
        x.ready(function () {
            o();
            var c = document.title;
            try {
                document.attachEvent("onpropertychange", function () {
                    if (document.title != c) document.title = c
                })
            } catch (d) {
            }
            la.init();
            var j = b("html,body");
            WindowResizeListener.add(function () {
                j.css({width: WindowSize.width, height: WindowSize.height})
            });
            s.on("orientationchange", function () {
                    j.css({width: WindowSize.width, height: WindowSize.height})
                },
                false);
            j.on("keydown keyup", "input, textarea", function (a) {
                a.keyCode != 27 && a.stopPropagation()
            });
            if (r) {
                b("#share-bar").hide();
                b("#top-menu").hide();
                b("#trips-header").hide()
            }
            w && b("#edit-menu").hide();
            var k = !!a._G_is_trip_author, A = b("body"), t, u = new f("#slider", "#viewport"),
                C = new B.TrainView({el: b("#viewer")}),
                J = new B.MiniComments({el: b("#comments-mini"), tripId: _G_trip_id}),
                v = new Backbone.Router({routes: {"nt/:id": "note", "nd/:id": "node", "day/:id": "day", end: "end"}}),
                D = true;
            l(u);
            if (k && !userCookie("tips-ew")) {
                var K =
                        b('<div id="tips-edit-view" class="tips-edit-view">\u7f16\u8f91\u6a21\u5f0f\u4e0b\u4fee\u6539\u6e38\u8bb0\u8d85\u65b9\u4fbf\u54e6</div>'),
                    O = b("#edit-menu"), F = O.height(), O = O.offset();
                K.css({top: O.top + F + 8, left: O.left});
                b("#viewer").append(K);
                u.on("openeditview", function () {
                    K.remove();
                    b.ajax({type: "POST", url: "/util/cookie/tips-ew"});
                    u.off("openeditview", arguments.callee)
                })
            }
            E.setCollection(_G_trip_collection);
            ia.on("load", function () {
                ia.off("load");
                m();
                u.render();
                b("#js-trip").bind("mousewheel", function () {
                    C.visibility ||
                    C.show()
                })
            });
            C.on("opened", function () {
                la.openMode("trainView");
                u.preload();
                t && u.openEditView();
                D = true
            }).on("closed", function () {
                la.closeMode("trainView");
                (t = u.isEditView) && u.closeEditView();
                u.stopPlay();
                D = false
            });
            u.on("slider:scroll", function () {
                J.close()
            }).on("openeditview", function () {
                A.addClass("edit-view");
                setUnselectable(u.$viewport, "on");
                b("#tips-edit-view").remove()
            }).on("closeeditview", function () {
                A.removeClass("edit-view");
                setUnselectable(u.$viewport, "off")
            }).on("zoomout", function () {
                A.addClass("slider-zoom-out")
            }).on("restore",
                function () {
                    A.removeClass("slider-zoom-out")
                });
            var H, F = function () {
                ia.resize();
                E.resize();
                if (C.visibility) {
                    u.resizeViewport();
                    u.render()
                } else {
                    clearTimeout(H);
                    H = setTimeout(function () {
                        u.resizeViewport();
                        u.render()
                    }, 300)
                }
                u.preload()
            };
            WindowResizeListener.add(F);
            s.on("orientationchange", F).on("open_trip_thumb", function (a, c) {
                var f = u.findNearestGroup(u.firstVisiable()).getFirstChild();
                b.fancybox({
                    href: c + "#" + TripUtils.getNoteHash(f),
                    margin: 0,
                    padding: 0,
                    width: 720,
                    height: 540,
                    scrolling: "no",
                    type: "iframe",
                    onClosed: function () {
                        s.trigger("dochaschanged",
                            ["", true])
                    }
                })
            });
            F = new B.TripNav("#trips-header", u);
            u.setPath(F.nav);
            x.on("keydown", function (a) {
                var b = a.keyCode;
                if (E.isOpened()) switch (b) {
                    case 37:
                        E.prev();
                        break;
                    case 39:
                        E.next();
                        break;
                    case 27:
                        E.close();
                        break;
                    case 80:
                        E.isPlaying() ? E.stopPlay() : E.autoPlay();
                        break;
                    case 32:
                        E.next()
                } else if (C.visibility) {
                    u.isEditView && (b === 90 && !u.isZoomOut ? u.zoomout() : b === 27 && u.isZoomOut && u.restore());
                    if (a.shiftKey && b === 32) u.slideRightScreen(); else switch (b) {
                        case 38:
                            u.slideLeft();
                            a.stopPropagation();
                            a.preventDefault();
                            break;
                        case 40:
                            u.slideRight();
                            a.stopPropagation();
                            a.preventDefault();
                            break;
                        case 37:
                        case 33:
                            a.stopPropagation();
                            a.preventDefault();
                            u.slideRightScreen();
                            break;
                        case 39:
                        case 34:
                        case 32:
                            a.stopPropagation();
                            a.preventDefault();
                            u.slideLeftScreen();
                            break;
                        case 80:
                            u.isPlaying() ? u.stopPlay() : u.autoPlay()
                    }
                }
            }).on("note:zoomin", function (a, b) {
                var c = b.model;
                c && E.open(c)
            });
            b("#cover-header, #open-trips").click(function () {
                C.show()
            });
            b("#open-layout").click(function () {
                u.openEditView()
            });
            b("#quit-layout").click(function () {
                u.closeEditView()
            });
            b("#back-cover").click(function () {
                C.hide();
                v.navigate("")
            });
            b("#slider-zoom").click(function () {
                u.restore()
            });
            s.on("dochaschanged", function (a, b, c) {
                v.navigate(b, {trigger: !c})
            }).on("note:commented", function () {
                var a = b("#cover-header .comments-num span"), c = a.text() - 0 + 1;
                a.text(c);
                b("#trip-comments span").text(c)
            }).on("note:commentdeleted", function () {
                var a = b("#cover-header .comments-num span"), c = a.text() - 0 - 1;
                a.text(c);
                b("#trip-comments span").text(c)
            });
            E.on("open", function (a) {
                u.stopPlay();
                a !== false && v.navigate(a)
            }).on("close",
                function () {
                    v.navigate("");
                    u.stopPlay()
                }).on("noteshow", function (a) {
                (a = u.findNote(a)) && u.scrollToGroup(a.group, true)
            });
            p(J);
            if (k) {
                z.init(u);
                _G_trip_collection.every(function (a) {
                    if ((a = a.get("memo")) && a.price_currency) {
                        TripUtils.PriceCurrencyManager.lastPriceCurrency = a.price_currency;
                        return false
                    }
                    return true
                });
                Q.init();
                pa.init(u);
                a.editTitleCallback = function () {
                    TripEditor.titleEditor.success()
                };
                a.editPhotoCallback = function (a) {
                    TripEditor.photoEditor.success(a)
                };
                a.editNodeCallback = function () {
                    TripEditor.nodeEditor.success()
                };
                a.editTipsCallback = function (a) {
                    TripEditor.tipsEditor.success(a)
                };
                a.photoRotateCallback = function (a) {
                    TripEditor.photoRotate.success(a);
                    u.render()
                };
                b("#edit-trip-name").click(function (a) {
                    a.stopPropagation();
                    TripEditor.titleEditor.open()
                });
                var L = function (a) {
                    pa.onMousemove(a)
                };
                x.on("addtext", function (c, f) {
                    var d = f.getFirstChild(), j = d.getId();
                    a.textNoteCallback = function (a) {
                        if (a) {
                            a.sid = a.id;
                            a.id = "nt-" + a.id;
                            _G_trip_collection.add(a);
                            var c = b(b("#_tpl_note_text").html()).attr({id: a.id}), a = new tripshow.View.TextNote({
                                el: c,
                                model: _G_trip_collection.get(a.id), isAuthor: true
                            });
                            a.render();
                            a.canEdit();
                            c = new g(u);
                            c.add(a);
                            c.checkLayout();
                            u.insertBefore(f, c);
                            d.$el.before(a.$el);
                            u.render();
                            b.fancybox.close()
                        }
                    };
                    TripEditor.textEditor.open(null, j)
                }).on("note:drag", function (a, b) {
                    pa.onMousedown(a, b);
                    x.on("mousemove", L).on("mouseup", function (a) {
                        x.off("mousemove", L).off("mouseup", arguments.callee);
                        pa.onMouseup(a, b)
                    })
                }).on("note:edit", function (c, f, d) {
                    if (A.hasClass("edit-view")) {
                        c = f.model;
                        switch (f.type) {
                            case y.VIDEO:
                            case y.PHOTO:
                                q.add({
                                    url: "/trips/" +
                                    _G_trip_id + "/notes/" + f.model.get("sid"),
                                    type: "PUT",
                                    data: {description: d || ""}
                                }).run();
                                break;
                            case y.TEXT:
                                a.textNoteCallback = function (a) {
                                    if (a) {
                                        _G_trip_collection.get("nt-" + a.id).set({
                                            description: a.description,
                                            description_display: a.description_display
                                        });
                                        b.fancybox.close()
                                    }
                                };
                                TripEditor.textEditor.open(f);
                                break;
                            case y.NODE:
                                TripEditor.nodeEditor.open(f, c);
                                break;
                            case y.TIPS:
                                TripEditor.tipsEditor.open(f)
                        }
                    }
                }).on("note:delete", function (a, c) {
                    b.confirm("\u786e\u8ba4\u5220\u9664\u6b64\u5185\u5bb9\uff1f", function (a) {
                        if (a) {
                            q.add({
                                url: "/trips/" +
                                _G_trip_id + "/notes/" + c.getId("int"), type: "DELETE"
                            }).run();
                            if (c.type === y.PHOTO) {
                                var a = b("#open-trips .photo-count"), f = parseInt(a.text(), 10) || 0;
                                a.text(f - 1 + "\u56fe")
                            }
                            c.remove();
                            u.render()
                        }
                    })
                }).on("photo:rotate", function (a, b) {
                    TripEditor.photoRotate.open(b)
                })
            }
            var N;
            v.on("route:note", function (a) {
                n(C, u, "nt-" + a);
                N = true
            }).on("route:node", function (a) {
                n(C, u, "nd-" + a);
                N = true
            }).on("route:day", function (a) {
                n(C, u, "d-" + a);
                N = true
            }).on("route:end", function () {
                n(C, u, "theend");
                N = true
            });
            Backbone.history.start();
            s.on("unload",
                function () {
                    if (!k) try {
                        var a = "TRIP-" + _G_trip_id;
                        if (D) {
                            var c = u.firstVisiable(), f = u.getChildIndexOf(c);
                            if (f > 3 && f < u.getChildren().length - 3) {
                                var d = c.getFirstChild();
                                d && b.Storage.set(a, d.getId())
                            } else b.Storage.del(a)
                        } else b.Storage.del(a)
                    } catch (g) {
                    }
                });
            if ((F = b.Storage.get("TRIP-" + _G_trip_id)) && !N) {
                n(C, u, F);
                b("body").append('<div id="trip-bookmark-tip" class="trip-bookmark-tip">\u4f60\u4e0a\u6b21\u770b\u5230\u8fd9\u91cc...<i class="bookmark-icon"></i></div>');
                setTimeout(function () {
                        b("#trip-bookmark-tip").remove()
                    },
                    2E3)
            }
            setTimeout(function () {
                var b = a._G_trip_front_cover_photo;
                WindowSize.height < 500 && /\.jpg$/.test(b) && (b = b + "-display");
                ia.setSrc(b)
            }, 50)
        })
    };
    a.initLightBoxTrip = function (a) {
        a = a || {};
        j();
        b("body");
        var c = new f("#slider", "#viewport"), d = new B.TrainView({el: b("#viewer")});
        ra || (ra = new B.MiniComments({el: b("#comments-mini"), tripId: _G_trip_id}));
        c.resizeViewport(450);
        l(c, a);
        c.on("slider:scroll", function () {
            ra.close()
        });
        var g = new B.TripNav("#trips-header", c, {useAnchor: true});
        g.on("tripanchor", function (a) {
            n(d,
                c, a)
        });
        c.setPath(g.nav);
        m();
        c.render();
        c.preload();
        p(ra);
        ga && WindowResizeListener.remove(ga);
        ga = function () {
            c.resizeViewport(450);
            c.render();
            c.preload()
        };
        WindowResizeListener.add(ga);
        s.off("open_trip_thumb dochaschanged").on("open_trip_thumb", function (a, f) {
            var d = c.findNearestGroup(c.firstVisiable()).getFirstChild();
            b.fancybox({
                href: f + "#" + TripUtils.getNoteHash(d),
                margin: 0,
                padding: 0,
                width: 720,
                height: 540,
                scrolling: "no",
                type: "iframe",
                onClosed: function () {
                    s.trigger("dochaschanged", ["", true])
                }
            })
        }).on("dochaschanged",
            function (a, b) {
                b = b.replace("/", "-").replace("day", "d");
                n(d, c, b)
            });
        x.off("keydown.tripshow").on("keydown.tripshow", function (a) {
            var b = a.keyCode;
            if (d.visibility) {
                a.stopPropagation();
                a.preventDefault();
                if (a.shiftKey && b === 32) c.slideRightScreen(); else switch (b) {
                    case 38:
                        c.slideLeft();
                        break;
                    case 40:
                        c.slideRight();
                        break;
                    case 37:
                    case 33:
                        c.slideRightScreen();
                        break;
                    case 39:
                    case 34:
                    case 32:
                        c.slideLeftScreen()
                }
            }
        });
        o();
        n(d, c, a.anchor)
    };
    a.cleanLightBoxTrip = function () {
        x.off("keydown.tripshow");
        s.off("open_trip_thumb dochaschanged");
        if (ga) {
            WindowResizeListener.remove(ga);
            ga = null
        }
    }
})(window, document, jQuery);

function utf8_encode(a) {
    if (a === null || typeof a === "undefined") return "";
    var a = a + "", d = "", b, c, f = 0;
    b = c = 0;
    for (var f = a.length, g = 0; g < f; g++) {
        var j = a.charCodeAt(g), m = null;
        j < 128 ? c++ : m = j > 127 && j < 2048 ? String.fromCharCode(j >> 6 | 192) + String.fromCharCode(j & 63 | 128) : String.fromCharCode(j >> 12 | 224) + String.fromCharCode(j >> 6 & 63 | 128) + String.fromCharCode(j & 63 | 128);
        if (m !== null) {
            c > b && (d = d + a.slice(b, c));
            d = d + m;
            b = c = g + 1
        }
    }
    c > b && (d = d + a.slice(b, f));
    return d
}

function base64_encode(a) {
    var d, b, c, f, g = 0, j = 0, m = "", m = [];
    if (!a) return a;
    a = utf8_encode(a + "");
    do {
        d = a.charCodeAt(g++);
        b = a.charCodeAt(g++);
        c = a.charCodeAt(g++);
        f = d << 16 | b << 8 | c;
        d = f >> 18 & 63;
        b = f >> 12 & 63;
        c = f >> 6 & 63;
        f = f & 63;
        m[j++] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(d) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(b) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(c) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(f)
    } while (g <
    a.length);
    m = m.join("");
    switch (a.length % 3) {
        case 1:
            m = m.slice(0, -2) + "==";
            break;
        case 2:
            m = m.slice(0, -1) + "="
    }
    return m
}

function urlsafe_base64_encode(a) {
    return base64_encode(a).replace(/\+/g, "-").replace(/\//g, "_")
}

function generate_rs_put_path(a, d, b) {
    b = b || "image/jpeg";
    return "/rs-put/" + urlsafe_base64_encode(a + ":" + d) + "/mimeType/" + urlsafe_base64_encode(b) + "/rotate/0"
}

var NodesEditor;
(function (a, d, b) {
    var c, f;

    function g(a, c) {
        var c = c || {}, f = this, d = b(a), g = b('<div class="dummy">');
        this.data = c.data || {};
        this.$dummy = g.appendTo(d);
        this.options = c;
        d.on("mousedown", ".ico-remove", function (a) {
            a.stopPropagation()
        });
        d.on("mousedown", ".dbox-item", function (a) {
            B.onMousedown(f);
            f.$items = d.find(".dbox-item");
            var c = b(this);
            c.on("mousemove", function () {
                f.offset = o(a, c);
                f.elOffset = d.offset();
                f.limitMax = {x: d.width() - c.outerWidth(), y: d.height() - c.outerHeight()};
                f.createDummy(a, c);
                c.off("mousemove").off("mouseup")
            }).on("mouseup",
                function () {
                    c.off("mousemove").off("mouseup")
                })
        });
        this.$el = d
    }

    function j(a, c) {
        this.$el = b("#" + a);
        this.$photoList = this.$el.find(".photo-list");
        this.$nodes = this.$el.find(".nodes .trip-node");
        this.dayId = this.$el.data("id");
        this.options = c;
        this.resize();
        this.updateNodeCount();
        var f = this;
        this.dbox = new g(this.$el.find(".dbox"), b.extend(c, {data: {dayId: this.dayId}}));
        this.$el.on("mousedown mouseup", ".photo .unbind-note, .photo .ico-remove", function (a) {
            a.stopPropagation()
        });
        this.$el.on("click", ".photo .unbind-note",
            function (a) {
                a.stopPropagation();
                var a = b(this).parent().parent(".photo"), c = a.data("note-id"),
                    d = f.options.callback.onPhotoUnbindNode;
                a.find(".node-name span").empty();
                a.find(".node-name").hide();
                d && d(c || 0)
            }).on("click", ".photo .ico-remove", function (a) {
            a.stopPropagation();
            var c = b(this).parent(".photo");
            b.confirm("\u786e\u8ba4\u5220\u9664\u8fd9\u5f20\u76f8\u7247\uff1f", function (a) {
                if (a) {
                    var a = c.data("note-id"), d = f.options.callback.onRemovePhoto;
                    d && d(a || 0);
                    c.remove();
                    a = b(".photo-list .photo").length;
                    b(".photo-num").text(a);
                    a || b(".btn-gen-trip").addClass("btn-submit-disable")
                }
            })
        }).on("click", ".trip-node .ico-remove", function () {
            var a = b(this).parent(".trip-node");
            b.confirm("\u786e\u8ba4\u5220\u9664\u884c\u7a0b\u4e2d\u7684\u8fd9\u4e2a\u4e8b\u4ef6\uff1f", function (b) {
                if (b) {
                    var b = a.data("id"), c = f.options.callback.onRemoveNode;
                    c && c(f.dayId, b || 0);
                    a.remove();
                    f.nodeDeleted(b)
                }
            })
        }).on("click", ".trip-node", function () {
            var a = b(this), c = a.data("id"), a = a.data("name");
            if (c && f.bindNode(c, a)) {
                (a = f.options.callback.onPhotoBindNode) && a(f.dayId,
                    c, f.getSelectedIds());
                f.clearSelected()
            }
        });
        this.$el.on("mousedown", ".photo", function (a) {
            var c = b(this), g = a.shiftKey;
            b(d).trigger("photogroup:mousedown", f);
            f.isMousedown = true;
            f.clickItem = c;
            f.clickPos = o(a, c);
            c.on("mouseup", function () {
                c.off("mousemove").off("mouseup");
                f.isMousedown = false;
                var a = c.data("note-id"), d, j;
                if (g && f.lastSelectPhotoId > 0) f.$photoList.find(".photo").removeClass("selected").each(function () {
                    var c = b(this), g = c.data("note-id");
                    if (!d && (g === f.lastSelectPhotoId || g === a) && !(g === f.lastSelectPhotoId &&
                            g === a)) {
                        d = true;
                        j = g
                    }
                    if (d) {
                        c.addClass("selected");
                        if (g !== j && (g === f.lastSelectPhotoId || g === a)) return false
                    }
                }); else if (c.hasClass("selected")) {
                    c.removeClass("selected");
                    f.lastSelectPhotoId = 0
                } else {
                    c.addClass("selected");
                    f.lastSelectPhotoId = a
                }
            }).on("mousemove", function () {
                c.off("mousemove").off("mouseup");
                c.hasClass("selected") || c.addClass("selected")
            });
            l.onMousedown(a)
        })
    }

    function m(a, c) {
        var c = b(c), f = c.outerWidth(), d = c.outerHeight(), g = c.offset();
        return a.x >= g.left && a.x <= g.left + f && a.y >= g.top && a.y <= g.top +
        d ? {left: a.x - g.left < f / 2} : false
    }

    function o(a, c) {
        var f = b(c).offset();
        return {x: a.pageX - f.left, y: a.pageY - f.top}
    }

    var n = b(a), l, p, r, w, v, s, x;
    l = {
        init: function (a) {
            p = a;
            b(d).on("photogroup:mousedown", function (a, b) {
                r = b
            })
        }, onMousedown: function (a) {
            c = a.clientX;
            f = a.clientY;
            b(d).on("mousemove", this.onMousemove).on("mouseup", this.onMouseup)
        }, onMouseup: function (a) {
            b(d).off("mousemove", this.onMousemove).off("mouseup", this.onMouseup);
            clearInterval(s);
            x = false;
            if (r && r.isMousedown) {
                p.checkDropInside(a, r);
                w && w.remove();
                w = null;
                r.stopDrag();
                r.isMousedown = false
            }
        }, onMousemove: function (d) {
            if (r && r.isMousedown) {
                Date.now();
                if (!w) {
                    if (r) {
                        v = r.clickPos;
                        var g = r.getSelected(), j = r.clickItem, l = [];
                        w = b('<div class="dragger" unselectable="on"><div class="photos-count"></div><div class="mask"></div></div>');
                        w.find(".photos-count").text(g.length + "\u5f20");
                        b.each(g, function (d) {
                            var m, n, k = b('<div class="clone-photo">'), o = b(g[d]).offset();
                            n = b(a);
                            m = o.left - n.scrollLeft();
                            n = o.top - n.scrollTop();
                            o = j === g[d];
                            m = {left: m - c + v.x, top: n - f + v.y, zIndex: o ? 1 : 0};
                            d = b(g[d]).find("img").clone();
                            k.append(d);
                            k.css(m);
                            o ? l.unshift(k) : l.push(k)
                        });
                        b.each(l, function (a) {
                            w.append(l[a])
                        });
                        b("body").append(w);
                        setTimeout(function () {
                            b.each(l, function (a) {
                                var c = {left: 0, top: 0};
                                b.support.cssAttrCheck("transform") ? l[a].css(c) : l[a].animate(c, {duration: 200})
                            });
                            setTimeout(function () {
                                w && w.addClass("dragger-bundled")
                            }, 100)
                        }, 25)
                    }
                    r.startDrag()
                }
                w.css({left: d.pageX - v.x, top: d.pageY - v.y});
                if (!x) {
                    x = true;
                    clearInterval(s);
                    var m = function () {
                        if (w) {
                            var a = n.height(), c = n.scrollTop(), f = w.offset(),
                                d;
                            if (f.top - c < 0) {
                                d = true;
                                b("html,body").animate({scrollTop: "-=" + Math.ceil(a * 0.7)}, {duration: 500})
                            } else if (c + a - f.top < 80) {
                                d = true;
                                b("html,body").animate({scrollTop: "+=" + Math.ceil(a * 0.7)}, {duration: 500})
                            }
                            if (d) {
                                clearInterval(s);
                                setTimeout(function () {
                                    s = setInterval(m, 1E3)
                                }, 1500)
                            }
                        }
                    };
                    s = setInterval(m, 1E3)
                }
            }
        }
    };
    NodesEditor = function (a, c) {
        var f = this, c = b.extend({callback: {}}, c);
        this.photoGroups = {};
        a.each(function () {
            var a = new j(this.id, c);
            f.photoGroups[this.id] = a
        });
        l.init(this);
        WindowResizeListener.add(function () {
            b.each(f.photoGroups,
                function () {
                    this.resize()
                })
        });
        b(window).on("node:added", function (a, c, d) {
            b.each(d, function (a) {
                f.addNodeToDay(c, d[a])
            })
        })
    };
    NodesEditor.prototype = {
        checkDropInside: function (a, c) {
            b.each(this.photoGroups, function () {
                if (this.dropInside(a, c)) return false
            })
        }, addNodeToDay: function (a, b) {
            a = "day-" + a;
            this.photoGroups[a] && this.photoGroups[a].addNode(b)
        }, removeNode: function (a, b) {
            a = "day-" + a;
            this.photoGroups[a] && this.photoGroups[a].removeNode(b)
        }
    };
    var B, E;
    B = {
        onMousedown: function (a) {
            E = a;
            b(d).on("mousemove", this.onMousemove).on("mouseup",
                this.onMouseup)
        }, onMouseup: function (a) {
            b(d).off("mousemove", this.onMousemove).off("mouseup", this.onMouseup);
            E && E.onMouseup(a)
        }, onMousemove: function (a) {
            E && E.moveDummy(a)
        }
    };
    g.prototype = {
        createDummy: function (a, b) {
            var c = b.clone();
            this.$dummy.empty().append(c.css("margin", "0")).show();
            this.clickItem = b.css("visibility", "hidden");
            this.clickItemIndex = this.$items.index(b);
            this.moveDummy(a)
        }, moveDummy: function (a) {
            var c = a.pageY - this.elOffset.top - this.offset.y, c = {
                left: Math.min(Math.max(a.pageX - this.elOffset.left -
                    this.offset.x, 0), this.limitMax.x), top: Math.min(Math.max(c, 0), this.limitMax.y)
            };
            this.$dummy.css(c);
            var f = {x: a.pageX, y: a.pageY}, d = this;
            d.$items.each(function () {
                var a = b(this), c = m(f, this);
                if (c) {
                    if (d.clickItem[0] !== this) {
                        c.left ? a.before(d.clickItem) : a.after(d.clickItem);
                        d.$items = d.$el.find(">.dbox-item")
                    }
                    return false
                }
            })
        }, onMouseup: function () {
            this.$dummy.hide();
            if (this.clickItem && this.clickItem.length) {
                this.clickItem.css("visibility", "visible");
                var a = this.$items.index(this.clickItem);
                if (this.clickItemIndex !=
                    a) {
                    var b = this.options.callback.onNodeStatusChange;
                    b && b.call(this, this.clickItem.data("id"), a)
                }
            }
            this.clickItem = null
        }
    };
    j.prototype.nodeDeleted = function (a) {
        this.$photoList.find('.photo[data-node-id="' + a + '"]').find(".node-name").hide().find("span").text("")
    };
    j.prototype.updateNodeCount = function (a) {
        var c = this;
        this.$nodes.each(function () {
            var f = b(this), d = f.data("id"), d = c.$photoList.find('.photo[data-node-id="' + d + '"]').length,
                g = f.find(".count"), j = parseInt(g.text());
            isNaN(j) && (j = 0);
            d > 0 ? g.text(d + " \u5f20").show() :
                g.hide();
            if (a) {
                d = d - j;
                if (d > 0) {
                    var l = b('<div class="bubble">' + (d > 0 ? "+" : "") + d + "</div>").appendTo(f);
                    d > 0 && l.addClass("bubble-add");
                    l.animate({fontSize: "50px", opacity: 1}, 400).animate({
                        top: "-25px",
                        fontSize: "12px"
                    }, {
                        duration: 300, complete: function () {
                            l.remove()
                        }
                    })
                }
            }
        })
    };
    j.prototype.resize = function () {
        var a = this.$photoList.find(".photo"), b = this.$photoList.width(), c = a.eq(0).width() + 20;
        if (a.length) {
            var f = Math.floor(b / c);
            a.css({"margin-left": Math.floor((b - (c - 20) * f) / (f + 1))})
        }
    };
    j.prototype.chkPhotos = function () {
        this.$el.find(".photo").length ?
            this.$el.find(".no-photo").hide() : this.$el.find(".no-photo").show()
    };
    j.prototype.dropInside = function (a, c) {
        var f = this, d = this.$el, g = {x: a.pageX, y: a.pageY}, j = c.getSelected(), l = c.getSelectedIds(),
            n = f.options.callback.onPhotoBindNode;
        if (m(g, d)) {
            var k;
            this.$nodes.each(function () {
                var d = b(this);
                if (m({x: a.pageX, y: a.pageY}, d)) {
                    var g = d.data("id"), j = d.data("name");
                    if (!g) {
                        d.find(".iframe").click();
                        return false
                    }
                    c.bindNode(g, j) && n && n(f.dayId, g, l);
                    k = true;
                    f.updateNodeCount(true);
                    return false
                }
            });
            if (c !== f) {
                k || c.unbindNode();
                f.$photoList.prepend(j);
                f.chkPhotos();
                c.chkPhotos();
                k || n && n(f.dayId, f.$el.data("default-node-id"), l);
                f.clearSelected()
            }
            k && f.clearSelected();
            f.stopDrag();
            return true
        }
        return false
    };
    j.prototype.startDrag = function () {
        this.isDragging = true;
        this.getSelected().addClass("mv")
    };
    j.prototype.stopDrag = function () {
        this.isDragging = false;
        this.$el.find(".photo").removeClass("mv")
    };
    j.prototype.getSelected = function () {
        return this.$el.find(".photo.selected")
    };
    j.prototype.getSelectedIds = function () {
        var a = [];
        this.getSelected().each(function () {
            a.push(b(this).data("note-id"))
        });
        return a
    };
    j.prototype.unbindNode = function () {
        var a = this.getSelected(), b = a.length;
        a.find(".node-name").addClass("hidden").find("span").text("");
        return b
    };
    j.prototype.bindNode = function (a, b) {
        var c = this.getSelected().attr("data-node-id", a);
        c.find(".node-name").removeClass("hidden").find("span").text(b);
        return c.length
    };
    j.prototype.clearSelected = function () {
        this.getSelected().removeClass("selected")
    };
    j.prototype.addNode = function (a) {
        if (this.$el.find('.nodes .trip-node[data-id="' + a.id + '"]').length) return false;
        a = '<div unselectable="on" class="dbox-item trip-node" data-id="' + a.id + '" data-name="' + a.name + '"><div class="ico ' + a.type + '"></div><div class="name">' + a.name + '</div><div class="count"></div><i class="ico-remove"></i><i class="ico-arrow"></i></div>';
        this.$el.find(".nodes .add-node").before(a);
        this.$nodes = this.$el.find(".nodes .trip-node")
    };
    j.prototype.removeNode = function (a) {
        this.$el.find('.nodes .trip-node[data-id="' + a + '"]').remove()
    }
})(window, document, jQuery);
$.fn.uploader = function (a, d) {
    function b(a, b) {
        this.file = a;
        this.callback = b || {};
        this._createEl()
    }

    function c(a) {
        var b = a.files.length, c = Date.now(), f = 12;
        a.total.uploaded && (f = (c - J) / 1E3 / a.total.uploaded);
        return b * f
    }

    function f(a) {
        return a && a > 60 ? Math.floor(a / 60) + "\u5206\u949f" + a % 60 + "\u79d2" : "\u4e0d\u52301\u5206\u949f"
    }

    function g() {
        var a = w.find(".timeleft"), b = a.attr("time") - 0, b = b - 1;
        a.text(f(b)).attr("time", b)
    }

    function j(a) {
        if (plupload.STOPPED != a.state) {
            var b = Math.floor(c(a) - (Date.now() - J) / 1E3);
            w.html("\u5df2\u4e0a\u4f20 <i>" +
                a.total.uploaded + "/" + a.files.length + '</i> \u5f20\u76f8\u7247\uff0c\u9884\u8ba1\u8fd8\u9700 <i class="timeleft" time="' + b + '">' + f(b) + "</i> \u4e0a\u4f20\u5b8c\u6210")
        }
    }

    var m = d.photosLimit, o = d.formUrl, n = d.photosCount,
        l = "\u8be5\u6e38\u8bb0\u5df2\u8fbe\u5230" + m + "\u5f20\u76f8\u7247\u4e0a\u9650";
    b.prototype._createEl = function () {
        var a = this.file, b = this;
        if (!this.$el) {
            var c = $('<li class="clearfix"><div class="filename">' + a.name + '</div><div class="progress-bar"><div class="bar"><span></span></div><div class="status">\u7b49\u5f85\u4e0a\u4f20</div></div></li>');
            this.$btnDel = c.find(".delete").click(function () {
                b.callback.delFun && b.callback.delFun(a);
                c.remove();
                return false
            });
            this.$el = c;
            this.$progressBar = c.find(".bar");
            this.$text = this.$progressBar.find("span");
            this.$status = c.find(".status")
        }
        return this.$el
    };
    b.prototype.setError = function (a) {
        this.error = true;
        this.$progressBar.stop().addClass("error").width("100%");
        this.$text.text(a)
    };
    b.prototype.startUpload = function (a) {
        this.$status.addClass("hidden");
        this.$progressBar.addClass("uploading");
        this.percent = a;
        this.ani(1E4)
    };
    b.prototype.ani = function (a) {
        var b = this;
        this.$progressBar.stop().animate({width: this.percent + "%"}, {
            duration: a, step: function (a) {
                b.$text.text(a.toFixed(1) + "%")
            }, complete: function () {
                b.percent == 100 && b.$text.text("\u5df2\u4e0a\u4f20")
            }
        })
    };
    b.prototype.setProgress = function (a) {
        if (!this.error) if (a === 0) this.ani(3E4); else if (a === 100) {
            this.percent = 100;
            this.ani(200)
        }
    };
    b.prototype.reset = function () {
        this.error = false;
        this.$progressBar.stop().removeClass("error").width("0");
        this.$status.removeClass("hidden")
    };
    b.prototype.remove =
        function () {
            this.$el && this.$el.remove()
        };
    $("#uploader .js-uploader-box").html('<div class="filelist-wrapper"><ul id="uploader-filelist" class="filelist"></ul>');
    var p = $("#uploader-filelist"), r = this.attr("id"), w = $("#upload-status .status"),
        v = $("#upload-status .btn-next-step"), s = $("#upload-status .try-again"),
        x = $("#upload-status .try-again .btn"), B = {};
    p.height();
    var E = 0, y = 0, D = 0, t, A, J;
    if (!r) {
        r = plupload.guid();
        this.attr("id", r)
    }
    var C = new plupload.Uploader($.extend({
        browse_button: "btn-upload", container: r,
        drop_element: r + "-filelist"
    }, a));
    x.click(function (a) {
        a.preventDefault();
        for (var a = C.files.concat(), b = a.length, c = 0, f; c < b; c++) if (f = a[c]) {
            var d = B[f.id];
            if (f.status === plupload.FAILED) {
                f.status = plupload.QUEUED;
                d && d.reset()
            }
        }
        C.start()
    });
    C.bind("FilesAdded", function (a, c) {
        var f = $();
        $.each(c, function (d, g) {
            var j = new b(g, {
                delFun: function (b) {
                    a.removeFile(b);
                    delete c[b.id]
                }
            });
            B[g.id] = j;
            f = f.add(j.$el)
        });
        p.append(f);
        $("#upload-guide").remove()
    });
    C.bind("Init", function () {
        n >= m && $.confirm(l, function () {
            window.location.href =
                o
        }, {btnCancel: false})
    });
    C.bind("Refresh", function (a) {
        j(a);
        if (!A && a.total.queued) {
            a.start();
            J = Date.now();
            $.clearTimer(t);
            t = setInterval(g, 1E3)
        }
    });
    C.bind("Error", function (a, b) {
        try {
            _gaq.push(["_trackEvent", "upload_error", "trip_" + _G_trip_id, "error" + b.code + ":" + b.details])
        } catch (c) {
        }
        if (b && b.file) {
            var f = B[b.file.id];
            if (f) switch (b.code) {
                case -702:
                    f.setError("\u76f8\u7247\u5bbd\u9ad8\u5927\u4e8e8100px");
                    y++;
                    break;
                default:
                    E++;
                    f.setError("\u4e0a\u4f20\u5931\u8d25\uff0c\u8bf7\u68c0\u67e5\u7f51\u7edc\u72b6\u6001")
            }
        } else E++
    });
    C.bind("BeforeUpload", function (a, b) {
        if (n >= m) {
            A = true;
            D = a.files.length - a.total.uploaded;
            $.confirm(l, null, {btnCancel: false});
            a.stop();
            return false
        }
        var c = B[b.id], f = $.rnd(75, 99);
        c && c.startUpload(f);
        _G_qiniu_key = _G_trip_id + "/" + Date.now() + b.id;
        C.settings.multipart_params.action = generate_rs_put_path(_G_qiniu_production ? "TripPhoto" : "DevTripPhoto", _G_qiniu_key + ".jpg");
        C.settings.multipart_params.params = "key=" + _G_qiniu_key + "&width=$(imageInfo.width)&height=$(imageInfo.height)&hash=$(etag)&fsize=$(fsize)&exif=$(exif)"
    });
    C.bind("QueueChanged", function (a) {
        w.removeClass("hidden");
        j(a)
    });
    C.bind("FileUploaded", function (a, b, c) {
        var a = B[b.id], f;
        c && (f = $.parseJSON(c.response));
        if (f && f.result) switch (f.result) {
            case 1:
                a && a.setError("\u76f8\u7247\u5bbd\u9ad8\u5c0f\u4e8e400px");
                y++;
                break;
            case 2:
                a && a.setError("\u8d85\u8fc7" + m + "\u5f20");
                D++;
                break;
            case 0:
                n = n + 1
        } else n = n + 1;
        c = $("#uploader");
        f = c.scrollTop();
        b = c.height();
        a = a.$el.position().top;
        f = f + b / 2;
        a > f && c.animate({scrollTop: f}, 200)
    });
    C.bind("StateChanged", function (a) {
        if (plupload.STOPPED ==
            a.state) if (E || y || D) {
            var b = "\u4e0a\u4f20\u4e0d\u6210\u529f";
            E ? b = E + "\u5f20\u76f8\u7247\u56e0\u7f51\u7edc\u5835\u585e\uff0c" + b : y && (b = y + "\u5f20\u76f8\u7247\u5c3a\u5bf8\u4e0d\u5408\u89c4\u8303\uff0c" + b);
            D && (b = D + "\u5f20\u76f8\u7247\u8d85\u51fa" + m + "\u5f20\u76f8\u7247\u4e0a\u9650\uff0c" + b + '<a href="#" class="serial-tip">\u6e38\u8bb0\u8fde\u8f7d\u8bf4\u660e</a><div id="serial-tip-detail" class="serial-tip-detail clearfix" style="display:none;"><p>\u8fd9\u7bc7\u6e38\u8bb0\u7684\u76f8\u7247\u8d85\u51fa\u4e86\u6570\u91cf\u4e0a\u9650\u3002</p><p>\u5982\u679c\u76f8\u7247\u592a\u591a\uff0c\u53ef\u5c06\u6e38\u8bb0\u5206\u6210\u591a\u7bc7\u53d1\u5e03\uff0c\u7136\u540e\u5728\u9876\u680f\u53f3\u4fa7\u4e0b\u62c9\u83dc\u5355\u4e2d\uff0c\u9009\u62e9\u6e38\u8bb0\u8bbe\u7f6e\u2192\u6e38\u8bb0\u8fde\u8f7d\u3002</p><p>\u201c\u8fde\u8f7d\u201d\u5c06\u5efa\u7acb\u591a\u7bc7\u6e38\u8bb0\u7684\u524d\u540e\u5173\u8054\u3002</p></div>');
            w.html(b);
            D && $(".serial-tip", w).bubbletip($("#serial-tip-detail"), {deltaDirection: "top"});
            if (E) {
                D = y = E = 0;
                for (var a = C.files.concat(), b = a.length, c = 0, f; c < b; c++) if (f = a[c]) {
                    var d = B[f.id];
                    if (f.status === plupload.DONE && d) {
                        d.remove();
                        delete B[f.id];
                        C.removeFile(f)
                    }
                }
                s.show();
                v.hide()
            } else if (a.total.uploaded > 0 && (y || D)) {
                v.show();
                s.hide()
            }
        } else window.location.href = o
    });
    C.bind("UploadProgress", function (a, b) {
        var c = B[b.id];
        c && c.setProgress(b.percent);
        j(a)
    });
    C.init();
    v.click(function () {
        window.location.href = o;
        return false
    });
    return C
};

function swfuploadInit(a, d, b, c, f) {
    var a = a - 0, b = {
        runtimes: "flash",
        max_file_size: "30mb",
        url: "http://up.qbox.me/upload",
        flash_swf_url: c,
        filters: [{title: "\u76f8\u7247", extensions: "jpg,JPG,jpeg,JPEG"}],
        resize: {width: 1600, height: 1600, quality: 80},
        multipart_params: {auth: b}
    }, g = $(".add-trip-upload");
    g.uploader(b, {photosCount: a, photosLimit: d, formUrl: f});
    WindowResizeListener.add(function () {
        var a = $("#btn-upload")[0], b = plupload.getPos(a, g[0]), a = plupload.getSize(a);
        $(".plupload").css({
            top: b.y + "px", left: b.x + "px",
            width: a.w + "px", height: a.h + "px"
        })
    })
}

(function () {
    $.fn.isCommentsPopup = function (a) {
        var a = a || {}, d = window.parent ? parent.document.location.href : "";
        if (!a.tripId) return this;
        var b = ScrollbarBase.need();
        this.each(function () {
            var c = $(this), f = $(".loading", c), g = $('input[name="reply_to_id"]', c),
                j = $('input[name="reply_prefix"]', c), m = $('input[name="commentable_type"]', c),
                o = $('input[name="commentable_id"]', c), n = $(".comment-list", c);
            $(".success", c);
            var l;
            b ? n.scrollbar({type: "ver"}) : n.css("overflow-y", "auto");
            var p, r = $(".textarea", c);
            r.length > 0 && r[0].tagName.toLowerCase() ==
            "textarea" && (p = r.textCounter().hasPlaceholder());
            $(".time", c).timeago();
            var w, v = n.find("li:last").data("id"), s = c.find(".btn-more").on("click", function () {
                v && $.ajax({
                    url: "/trips/" + a.tripId + "/comments?next_id=" + v,
                    dataType: "html",
                    success: function (a) {
                        var a = $("<div>" + a + "</div>"), f = a.find("li");
                        n.find("ul").append(f);
                        a.find(".btn-more").length || s.remove();
                        v = n.find("li:last").data("id");
                        c.find(".time").timeago();
                        b && n.scrollbar().refresh()
                    }
                });
                return false
            });
            p && p.focus(function () {
                clearInterval(w);
                w = setInterval(function () {
                    if (p.val() ===
                        "") {
                        g.val("");
                        j.val("");
                        o.val("");
                        m.val("")
                    }
                }, 30)
            }).blur(function () {
                clearInterval(w)
            }).keydown(function (d) {
                if (d.keyCode === 13) {
                    d.preventDefault();
                    d = p.val();
                    if (d == j.val()) {
                        p.showErrorTips("\u8bf7\u8f93\u5165\u5185\u5bb9");
                        return false
                    }
                    if (!l) {
                        l = true;
                        if (!p.valid()) {
                            l = false;
                            p.showErrorTips();
                            return false
                        }
                        var r = g.val(), s = o.val(), v = m.val(), d = {text: d};
                        if (r) d.reply_to_id = r;
                        if (s && v) {
                            d.commentable_id = s;
                            d.commentable_type = v
                        }
                        r = function (a) {
                            l = false;
                            p.val("").focus();
                            n.find("ul").prepend(a).find(".nocomment").remove();
                            c.find(".time").timeago();
                            b && n.scrollbar().refresh().scrollTo(0);
                            a = $("#comments-popup h1 span");
                            a.text(a.text() - 0 + 1);
                            window.parent && parent.$(parent).trigger("note:commented")
                        };
                        s = function () {
                            f.hide()
                        };
                        d = {url: "/trips/" + a.tripId + "/comments", type: "POST", data: d};
                        if (r) d.success = r;
                        if (s) d.complete = s;
                        $.ajax(d)
                    }
                }
            });
            n.on("click", ".reply", function () {
                if (p) {
                    var a = $(this).parents("li");
                    g.val(a.data("id"));
                    o.val(a.data("commentable-id"));
                    m.val(a.data("commentable-type"));
                    a = "\u56de\u590d " + a.data("username") + "\uff1a";
                    p.val(a).moveCursorToEnd();
                    j.val(a)
                }
            }).on("click", ".reply-image a, .reply-text a", function () {
                var a = $(this).attr("href").split("#");
                if (d && d.indexOf(a[0]) > -1) {
                    parent.$(parent).trigger("dochaschanged", [a[1]]);
                    return false
                }
                return true
            })
        });
        return this
    }
})();
var noticePopup = function () {
    function a(a) {
        this.$wrapper = $(a, j);
        this.$btnMore = this.$wrapper.find(".btn-more");
        this.$list = this.$wrapper.find("ul");
        this.$replyForm = $('<div class="replyform"><textarea name="text" class="textarea" minlen="1" maxlen="300" data-error-tip="\u6700\u591a150\u5b57"></textarea><div class="c-tip">\u56de\u8f66\u53d1\u8868\u8bc4\u8bba</div><input type="hidden" name="note_id" value=""><input type="hidden" name="reply_to_id" value=""></div>');
        this.$list.on("ajax:success", 'a[data-method="delete"]',
            function () {
                $(this).parents("li").remove()
            });
        var b = this;
        $("textarea", this.$replyForm).autosize().keydown(function (a) {
            if (a.keyCode === 13) {
                var c = $(this);
                a.stopPropagation();
                a.preventDefault();
                if (!p) {
                    p = true;
                    if (!c.valid()) {
                        p = false;
                        c.showErrorTips();
                        return false
                    }
                    var a = c.val(), f = b.replyAjaxData.complete;
                    if (a != "") {
                        b.replyAjaxData.data.text = a;
                        b.replyAjaxData.complete = function () {
                            f && f();
                            p = false
                        };
                        $.ajax(b.replyAjaxData)
                    }
                }
            } else if (a.keyCode === 27) {
                a.stopPropagation();
                b.$replyForm.find("textarea").val("");
                b.$replyForm.slideUp()
            }
        });
        this.$list.touchClick(".reply", function () {
            var a = $(this).parents("li"), c = a.data("trip-id"), f = a.data("comment-id"),
                d = a.data("commentable-id"), g = a.data("commentable-type"), f = {reply_to_id: f};
            if (d) {
                f.commentable_id = d;
                f.commentable_type = g
            }
            b.replyAjaxData = {
                url: "/trips/" + c + "/comments", type: "POST", data: f, success: function () {
                    b.replySuccess()
                }
            };
            b.$replyForm.appendTo(a).slideDown(200, function () {
                b.$replyForm.find("textarea").val("").focus();
                b.resize();
                b.$wrapper.scrollbar().refresh()
            })
        }).touchClick(".reply-image a, .reply-text a",
            function () {
                var a = $(this).attr("href").split("#"), b = document.location.href;
                if (b && b.indexOf(a[0]) > -1) {
                    $(window).trigger("dochaschanged", [a[1]]);
                    return false
                }
                return true
            });
        b.$wrapper.scrollbar({type: "ver"})
    }

    function d(a) {
        this.$wrapper = $(a, j);
        this.$btnMore = this.$wrapper.find(".btn-more");
        this.$list = this.$wrapper.find(".private-message ul").on("click", "li:not(.nonotice)", function () {
            var a = $(this);
            r.view(a.data("thread-id"), _.escape(a.data("username")))
        });
        this.$wrapper.scrollbar({type: "ver"})
    }

    function b() {
        $(document).off("click.notice");
        $("body").removeClass("notice-open");
        g.hide();
        j.hide();
        w.reset();
        v.reset();
        n && o.css("overflow", "auto")
    }

    var c, f, g, j, m, o = $("html"), n, l, p;
    a.prototype = {
        replySuccess: function () {
            var a = this;
            a.$replyForm.find("textarea").val("").blur();
            a.$replyForm.slideUp(function () {
                a.$wrapper.scrollbar().refresh()
            });
            var b = $('<div class="success">\u56de\u590d\u6210\u529f</div>');
            a.$replyForm.before(b);
            setTimeout(function () {
                b.remove()
            }, 1E3)
        }, load: function () {
            var a = this;
            a.$list.addClass("loading");
            $.ajax({
                url: "/notifications",
                data: {last_id: a.lastId}, success: function (b) {
                    var b = $("<div>" + b + "</div>"), c = b.find("li"), f;
                    !a.lastId && (f = c.filter(".unread").length) > 0 && a.$list.addClass("unread");
                    if (c.length) {
                        a.$list.append(c);
                        $("time", c).timeago()
                    } else a.lastId || a.$list.append('<li class="nonotice">\u76ee\u524d\u6ca1\u6709\u6d88\u606f</li>');
                    if (b.find(".btn-more").length) {
                        a.lastId = a.$list.find("li:last").data("id");
                        a.$btnMore.css("visibility", "visible").off("click");
                        f ? a.$btnMore.click(function () {
                            a.showAll();
                            a.$btnMore.click(function () {
                                a.load()
                            });
                            return false
                        }) : a.$btnMore.click(function () {
                            a.load()
                        })
                    } else !f || f === c.length ? a.$btnMore.css("visibility", "hidden") : a.$btnMore.css("visibility", "visible").off("click").click(function () {
                        a.showAll();
                        a.$btnMore.css("visibility", "hidden")
                    });
                    setTimeout(function () {
                        a.resize()
                    }, 5)
                }, complete: function () {
                    a.$list.removeClass("loading")
                }
            });
            return false
        }, showAll: function () {
            this.$list.removeClass("unread");
            this.resize();
            return false
        }, resize: function () {
            var a = WindowSize.height - m - 52;
            j.css("height", a);
            this.$wrapper.css("height",
                a - 40).scrollbar().refresh()
        }, reset: function () {
            getHidder().append(this.$replyForm);
            this.$replyForm.find("textarea").val("");
            this.lastId = 0;
            this.$list.empty().removeClass("unread")
        }
    };
    d.prototype = {
        resize: a.prototype.resize, reset: function () {
            this.$list.empty().removeClass("unread")
        }, showAll: function () {
            this.$list.removeClass("unread");
            this.resize();
            return false
        }, load: function () {
            var a = this;
            a.$list.addClass("loading");
            $.ajax({
                url: "/private_messages", success: function (b) {
                    var b = $("<div>" + b + "</div>"), c = b.find("li"),
                        f;
                    (f = c.filter(".unread").length) > 0 && a.$list.addClass("unread");
                    if (c.length) {
                        a.$list.append(c);
                        $("time", c).timeago()
                    } else a.$list.append('<li class="nonotice">\u76ee\u524d\u6ca1\u6709\u6d88\u606f</li>');
                    if (b.find(".btn-more").length) {
                        a.$btnMore.css("visibility", "visible").off("click");
                        f ? a.$btnMore.click(function () {
                            a.showAll();
                            a.$btnMore.click(function () {
                                a.load()
                            });
                            return false
                        }) : a.$btnMore.click(function () {
                            a.load()
                        })
                    } else !f || f === c.length ? a.$btnMore.css("visibility", "hidden") : a.$btnMore.css("visibility",
                        "visible").off("click").click(function () {
                        a.showAll();
                        a.$btnMore.css("visibility", "hidden")
                    });
                    setTimeout(function () {
                        a.resize()
                    }, 5)
                }, complete: function () {
                    a.$list.removeClass("loading")
                }
            });
            return false
        }
    };
    var r = {
        init: function (a) {
            this.$el = $(a, j);
            this.$wrapper = this.$el.find(".scroller-wrapper");
            this.$list = this.$el.find("ul");
            this.$title = this.$el.find(".thread-title");
            this.$wrapper.scrollbar({type: "ver"});
            this.$btnMore = this.$el.find(".btn-more").click(function () {
                b.load()
            });
            var b = this;
            this.$title.on("click",
                "a", function (a) {
                    a.preventDefault();
                    b.$el.hide();
                    b.reset()
                })
        }, resize: function () {
            var a = WindowSize.height - m - 52;
            j.css("height", a);
            this.$wrapper.css("height", a - 200);
            this.$wrapper.scrollbar().refresh()
        }, reset: function () {
            this.$list.empty();
            this.$form.remove();
            this.$form = null
        }, view: function (a, b) {
            this.page = 1;
            this.$el.show();
            this.$title.html("\u548c" + b + '\u7684\u5bf9\u8bdd <a href="#" class="back">\u8fd4\u56de></a>');
            this.load(a)
        }, load: function (a) {
            var b = this;
            b.$list.addClass("loading");
            $.ajax({
                url: "/private_messages/" +
                a + "?page=" + b.page, success: function (a) {
                    var a = $("<div>" + a + "</div>"), c = a.find("li");
                    if (c.length > 0) {
                        b.$list.append(c);
                        $("time", c).timeago()
                    }
                    c.length == 10 ? b.$btnMore.css("visibility", "visible") : b.$btnMore.css("visibility", "hidden");
                    if (!b.$form) {
                        var f = a.find('input[type="submit"]').prop("disabled", true).addClass("btn-disable"),
                            d = a.find("textarea").on("keydown", function () {
                                d.val() ? f.prop("disabled", false).removeClass("btn-disable") : f.prop("disabled", true).addClass("btn-disable")
                            });
                        b.$form = a.find("form").on("submit",
                            function (a) {
                                if (!d.val()) {
                                    a.preventDefault();
                                    a.stopPropagation()
                                }
                            }).on("ajax:success", function (a, c) {
                            var f = $(c);
                            $("time", f).timeago();
                            b.$list.prepend(f);
                            b.$form.find("textarea").val("");
                            b.resize()
                        });
                        b.$wrapper.before(b.$form)
                    }
                    setTimeout(function () {
                        b.resize()
                    }, 5)
                }, complete: function () {
                    b.$list.removeClass("loading")
                }
            })
        }
    }, w, v, s;
    return {
        open: function (p, B, E) {
            f || (f = $(p));
            l || (l = B ? $(B) : $("body"));
            p = E ? 1 : 0;
            if (!c) {
                B = f.find(".js-n-offset");
                m = B.offset().top + B.height();
                g = $('<div class="notice-overlay"></div>');
                j = $('<div class="notice-popup"><div class="notice-inner"><div class="notice-tab clearfix"><div class="tab-item selected"><i>\u6d88\u606f</i></div><i class="s"></i><div class="tab-item"><i>\u79c1\u4fe1</i></div></div><div class="clearfix" style="position:relative;"><div id="notice-tab-notification" class="scroller-wrapper tab-content"><div class="comment-list scroller clearfix"><ul class="clearfix loading"></ul><div class="btn-more" style="visibility:hidden;">\u52a0\u8f7d\u66f4\u591a\u6d88\u606f...</div></div></div><div id="notice-tab-privatemessage" class="scroller-wrapper tab-content"><div class="comment-list scroller clearfix private-message"><ul class="clearfix loading"></ul><div class="btn-more" style="visibility:hidden;">\u52a0\u8f7d\u66f4\u591a\u6d88\u606f...</div></div></div><div id="view-private-message"><div class="thread-title"></div><div class="scroller-wrapper"><div class="comment-list scroller clearfix"><ul class="clearfix loading"></ul><div class="btn-more" style="visibility:hidden;">\u52a0\u8f7d\u66f4\u591a\u6d88\u606f...</div></div></div></div></div></div></div>').css("top",
                    m);
                w = new a("#notice-tab-notification");
                v = new d("#notice-tab-privatemessage");
                r.init("#view-private-message");
                var y = $(".tab-content", j);
                s = $(".tab-item", j);
                s.each(function (a) {
                    $(this).on("click", function () {
                        s.removeClass("selected");
                        $(this).addClass("selected");
                        y.hide().eq(a).show();
                        a == 0 ? w.resize() : v.resize()
                    })
                });
                j.find(".notice-inner");
                $(".close", j).click(b);
                l.append(g, j);
                c = 1
            }
            s.eq(p).click();
            w.load();
            v.load();
            $("body").addClass("notice-open");
            g.show();
            j.show();
            f.find(".n-count").hide();
            if (o.css("overflow") !=
                "hidden") {
                n = true;
                o.css("overflow", "hidden")
            }
            $(document).on("click.notice", function (a) {
                $.isClickInside(a.target, j[0]) || b()
            })
        }
    }
}();

function destinationMapInit() {
    function a(a) {
        return function () {
            var b = j[a.id];
            if (b) {
                if (b.page == -1 && b.index == b.list.length - 1) b.index = -1;
                c(a)
            } else d(a)
        }
    }

    function d(a) {
        b('<div class="dest-infowindow loading"></div>', a);
        var f = j[a.id];
        if (!f) {
            f = {page: 1, index: -1, list: []};
            j[a.id] = f
        }
        $.get(a.data.src + "?page=" + f.page, function (b) {
            if (b && b.length) {
                f.list = f.list.concat(b);
                f.page = b.length < 5 ? -1 : f.page + 1
            } else f.page = -1;
            c(a)
        })
    }

    function b(a, b) {
        var c = Gmaps.map, f = c.visibleInfoWindow;
        if (m == b.id && f !== null) f.setContent(a);
        else {
            m = b.id;
            f && f.close();
            f = new google.maps.InfoWindow({content: a});
            f.open(c.map, b.serviceObject);
            c.visibleInfoWindow = f
        }
    }

    function c(a) {
        var g = j[a.id];
        if (g) {
            var m = g.list[g.index + 1];
            if (m) {
                g.index = g.index + 1;
                b(f(m, g.index, a), a)
            } else if (g.page == -1) {
                g.index = -1;
                c(a)
            } else d(a)
        }
    }

    function f(a, d, g) {
        var m = '<div class="dest-infowindow"><h3>' + a.attraction + "</h3>",
            m = m + ('<div class="trips-count"><a href="/trips/' + a.trip_id + "#nd/" + a.node_id + '" target="_blank">' + (d + 1) + " / " + a.trips_count + " \u6e38\u8bb0</a></div>");
        a.comment &&
        (m = m + ('<div class="comment">' + a.comment + "</div>"));
        if (a.photos && a.photos.length) {
            for (var m = m + '<div class="photos clearfix">', d = 0, o = a.photos.length; d < o; d++) m = m + ('<img src="' + a.photos[d] + '" />');
            m = m + "</div>"
        }
        a = j[g.id];
        m = m + ('<div class="prev' + (a.index <= 0 ? " disable" : "") + '"></div>');
        m = m + ('<div class="next' + (a.page == -1 && a.index == a.list.length - 1 ? "disable" : "") + '"></div>');
        m = $(m + "</div>");
        $(".next", m).click(function () {
            c(g)
        });
        $(".prev", m).click(function () {
            var a = j[g.id], c = a.index - 1;
            if (!(c < 0)) {
                a.index = a.index -
                    1;
                (a = a.list[c]) && b(f(a, c, g), g)
            }
        });
        return m[0]
    }

    function g(b) {
        for (var c = Gmaps.map.markers, f = 0; f < c.length; f++) if (c[f].id == b) {
            a(c[f])();
            return false
        }
    }

    for (var j = {}, m, o = 0; o < this.markers.length; ++o) google.maps.event.addListener(Gmaps.map.markers[o].serviceObject, "click", a(Gmaps.map.markers[o]));
    $("#page-body").height(WindowSize.height - 85);
    $("html,body").css({overflow: "hidden"});
    o = $("#user-destination");
    o.scrollbar({type: "ver"});
    $(".map-attractions li", o).click(function () {
        var a = $(this).data("id");
        g(a);
        return false
    });
    (new Backbone.Router({routes: {"attractions/:id": "attractions"}})).on("route:attractions", function (a) {
        g(a)
    });
    Backbone.history.start()
}

(function () {
    var a;
    a = {
        triggerOldOnload: function () {
            if (typeof a.oldOnload === "function") return a.oldOnload()
        }, loadMaps: function () {
            var b, c, f;
            f = [];
            for (b in a) {
                c = b.search(/load/);
                if (c === -1) {
                    c = "load_" + b;
                    f.push(a[c]())
                } else f.push(void 0)
            }
            return f
        }
    };
    window.Gmaps = a;
    var d = function () {
        this.userLocation = this.visibleInfoWindow = this.serviceObject = this.map = null;
        this.geolocationFailure = function () {
            return false
        };
        this.callback = function () {
            return false
        };
        this.customClusterer = function () {
            return false
        };
        this.infobox = function () {
            return false
        };
        this.jsTemplate = false;
        this.default_map_options = {
            id: "map",
            draggable: true,
            detect_location: false,
            center_on_user: false,
            center_latitude: 0,
            center_longitude: 0,
            zoom: 7,
            maxZoom: null,
            minZoom: null,
            auto_adjust: true,
            auto_zoom: true,
            bounds: [],
            raw: {}
        };
        this.default_markers_conf = {
            title: "",
            picture: "",
            width: 22,
            length: 32,
            draggable: false,
            do_clustering: false,
            randomize: false,
            max_random_distance: 100,
            list_container: null,
            offset: 0,
            raw: {}
        };
        this.markers = [];
        this.boundsObject = null;
        this.polygons = [];
        this.polylines = [];
        this.circles =
            [];
        this.markerClusterer = null;
        this.markerImages = []
    };
    d.prototype.initialize = function () {
        this.map = this.serviceObject = this.createMap();
        (this.map_options.detect_location === true || this.map_options.center_on_user === true) && this.findUserLocation(this);
        return this.resetSidebarContent()
    };
    d.prototype.findUserLocation = function (a) {
        var c;
        if (navigator.geolocation) {
            c = function (c) {
                a.userLocation = a.createLatLng(c.coords.latitude, c.coords.longitude);
                if (a.map_options.center_on_user === true) return a.centerMapOnUser()
            };
            return navigator.geolocation.getCurrentPosition(c,
                function () {
                    return a.geolocationFailure(true)
                })
        }
        return a.geolocationFailure(false)
    };
    d.prototype.create_direction = function () {
        var a, c;
        a = new google.maps.DirectionsRenderer;
        c = new google.maps.DirectionsService;
        a.setMap(this.serviceObject);
        this.direction_conf.display_panel && a.setPanel(document.getElementById(this.direction_conf.panel_id));
        a.setOptions({suppressMarkers: false, suppressInfoWindows: false, suppressPolylines: false});
        return c.route({
            origin: this.direction_conf.origin,
            destination: this.direction_conf.destination,
            waypoints: this.direction_conf.waypoints,
            optimizeWaypoints: this.direction_conf.optimizeWaypoints,
            unitSystem: google.maps.DirectionsUnitSystem[this.direction_conf.unitSystem],
            avoidHighways: this.direction_conf.avoidHighways,
            avoidTolls: this.direction_conf.avoidTolls,
            region: this.direction_conf.region,
            travelMode: google.maps.DirectionsTravelMode[this.direction_conf.travelMode],
            language: "en"
        }, function (c, d) {
            if (d === google.maps.DirectionsStatus.OK) return a.setDirections(c)
        })
    };
    d.prototype.create_circles = function () {
        var a,
            c, f, d, j;
        d = this.circles;
        j = [];
        c = 0;
        for (f = d.length; c < f; c++) {
            a = d[c];
            j.push(this.create_circle(a))
        }
        return j
    };
    d.prototype.create_circle = function (a) {
        var c;
        if (a === this.circles[0]) {
            if (a.strokeColor != null) this.circles_conf.strokeColor = a.strokeColor;
            if (a.strokeOpacity != null) this.circles_conf.strokeOpacity = a.strokeOpacity;
            if (a.strokeWeight != null) this.circles_conf.strokeWeight = a.strokeWeight;
            if (a.fillColor != null) this.circles_conf.fillColor = a.fillColor;
            if (a.fillOpacity != null) this.circles_conf.fillOpacity = a.fillOpacity
        }
        if (a.lat !=
            null && a.lng != null) {
            c = new google.maps.Circle({
                center: this.createLatLng(a.lat, a.lng),
                strokeColor: a.strokeColor || this.circles_conf.strokeColor,
                strokeOpacity: a.strokeOpacity || this.circles_conf.strokeOpacity,
                strokeWeight: a.strokeWeight || this.circles_conf.strokeWeight,
                fillOpacity: a.fillOpacity || this.circles_conf.fillOpacity,
                fillColor: a.fillColor || this.circles_conf.fillColor,
                clickable: a.clickable || this.circles_conf.clickable,
                zIndex: a.zIndex || this.circles_conf.zIndex,
                radius: a.radius
            });
            a.serviceObject = c;
            return c.setMap(this.serviceObject)
        }
    };
    d.prototype.clear_circles = function () {
        var a, c, f, d, j;
        d = this.circles;
        j = [];
        c = 0;
        for (f = d.length; c < f; c++) {
            a = d[c];
            j.push(this.clear_circle(a))
        }
        return j
    };
    d.prototype.clear_circle = function (a) {
        return a.serviceObject.setMap(null)
    };
    d.prototype.hide_circles = function () {
        var a, c, f, d, j;
        d = this.circles;
        j = [];
        c = 0;
        for (f = d.length; c < f; c++) {
            a = d[c];
            j.push(this.hide_circle(a))
        }
        return j
    };
    d.prototype.hide_circle = function (a) {
        return a.serviceObject.setMap(null)
    };
    d.prototype.show_circles = function () {
        var a, c, f;
        c = this.circles;
        f = [];
        a = 0;
        for (c = c.length; a < c; a++) f.push(this.show_circle(this.circle));
        return f
    };
    d.prototype.show_circle = function (a) {
        return a.serviceObject.setMap(this.serviceObject)
    };
    d.prototype.create_polygons = function () {
        var a, c, f, d, j;
        d = this.polygons;
        j = [];
        c = 0;
        for (f = d.length; c < f; c++) {
            a = d[c];
            j.push(this.create_polygon(a))
        }
        return j
    };
    d.prototype.create_polygon = function (a) {
        var c, f, d, j, m, o, n, l, p, r, w;
        o = [];
        r = 0;
        for (w = a.length; r < w; r++) {
            m = a[r];
            j = this.createLatLng(m.lat, m.lng);
            o.push(j);
            if (m === a[0]) {
                n = m.strokeColor || this.polygons_conf.strokeColor;
                l = m.strokeOpacity || this.polygons_conf.strokeOpacity;
                p = m.strokeWeight || this.polygons_conf.strokeWeight;
                f = m.fillColor || this.polygons_conf.fillColor;
                d = m.fillOpacity || this.polygons_conf.fillOpacity;
                c = m.clickable || this.polygons_conf.clickable
            }
        }
        c = new google.maps.Polygon({
            paths: o,
            strokeColor: n,
            strokeOpacity: l,
            strokeWeight: p,
            fillColor: f,
            fillOpacity: d,
            clickable: c,
            map: this.serviceObject
        });
        return a.serviceObject = c
    };
    d.prototype.replacePolylines = function (a) {
        this.destroy_polylines();
        this.polylines = a;
        this.create_polylines();
        return this.adjustMapToBounds()
    };
    d.prototype.destroy_polylines = function () {
        var a, c, f, d;
        d = this.polylines;
        c = 0;
        for (f = d.length; c < f; c++) {
            a = d[c];
            a.serviceObject.setMap(null)
        }
        return this.polylines = []
    };
    d.prototype.create_polylines = function () {
        var a, c, f, d, j;
        d = this.polylines;
        j = [];
        c = 0;
        for (f = d.length; c < f; c++) {
            a = d[c];
            j.push(this.create_polyline(a))
        }
        return j
    };
    d.prototype.create_polyline = function (a) {
        var c, f, d, j, m, o, n, l, p, r, w, v;
        j = [];
        p = 0;
        for (w = a.length; p < w; p++) {
            f = a[p];
            if (f.coded_array != null) {
                f = new google.maps.geometry.encoding.decodePath(f.coded_array);
                r = 0;
                for (v = f.length; r < v; r++) {
                    d = f[r];
                    j.push(d)
                }
            } else {
                if (f === a[0]) {
                    m = f.strokeColor || this.polylines_conf.strokeColor;
                    o = f.strokeOpacity || this.polylines_conf.strokeOpacity;
                    n = f.strokeWeight || this.polylines_conf.strokeWeight;
                    c = f.clickable || this.polylines_conf.clickable;
                    l = f.zIndex || this.polylines_conf.zIndex
                }
                if (f.lat != null && f.lng != null) {
                    f = this.createLatLng(f.lat, f.lng);
                    j.push(f)
                }
            }
        }
        c = new google.maps.Polyline({
            path: j,
            strokeColor: m,
            strokeOpacity: o,
            strokeWeight: n,
            clickable: c,
            zIndex: l
        });
        a.serviceObject = c;
        return c.setMap(this.serviceObject)
    };
    d.prototype.create_markers = function () {
        this.createServiceMarkersFromMarkers();
        return this.clusterize()
    };
    d.prototype.createServiceMarkersFromMarkers = function () {
        var a, c, f, d, j;
        a = this.markers;
        f = d = 0;
        for (j = a.length; d < j; f = ++d) if (this.markers[f].serviceObject == null) {
            a = this.markers[f].lat;
            c = this.markers[f].lng;
            if (this.markers_conf.randomize) {
                c = this.randomize(a, c);
                a = c[0];
                c = c[1]
            }
            this.markers[f].serviceObject = this.createMarker({
                marker_picture: this.markers[f].picture ? this.markers[f].picture : this.markers_conf.picture,
                marker_width: this.markers[f].width ? this.markers[f].width : this.markers_conf.width,
                marker_height: this.markers[f].height ? this.markers[f].height : this.markers_conf.length,
                marker_title: this.markers[f].title ? this.markers[f].title : null,
                marker_anchor: this.markers[f].marker_anchor ? this.markers[f].marker_anchor : null,
                shadow_anchor: this.markers[f].shadow_anchor ? this.markers[f].shadow_anchor : null,
                shadow_picture: this.markers[f].shadow_picture ? this.markers[f].shadow_picture : null,
                shadow_width: this.markers[f].shadow_width ?
                    this.markers[f].shadow_width : null,
                shadow_height: this.markers[f].shadow_height ? this.markers[f].shadow_height : null,
                marker_draggable: this.markers[f].draggable ? this.markers[f].draggable : this.markers_conf.draggable,
                rich_marker: this.markers[f].rich_marker ? this.markers[f].rich_marker : null,
                zindex: this.markers[f].zindex ? this.markers[f].zindex : null,
                Lat: a,
                Lng: c,
                index: f
            });
            this.createInfoWindow(this.markers[f]);
            this.createSidebar(this.markers[f])
        }
        return this.markers_conf.offset = this.markers.length
    };
    d.prototype.createImageAnchorPosition =
        function (a) {
            return a === null ? null : this.createPoint(a[0], a[1])
        };
    d.prototype.replaceMarkers = function (a) {
        this.clearMarkers();
        this.markers = [];
        this.boundsObject = this.createLatLngBounds();
        this.resetSidebarContent();
        this.markers_conf.offset = 0;
        return this.addMarkers(a)
    };
    d.prototype.addMarkers = function (a) {
        this.markers = this.markers.concat(a);
        this.create_markers();
        return this.adjustMapToBounds()
    };
    d.prototype.createSidebar = function (a) {
        var c, f, d, j;
        if (this.markers_conf.list_container) {
            j = document.getElementById(this.markers_conf.list_container);
            d = document.createElement("li");
            c = document.createElement("a");
            c.href = "javascript:void(0);";
            f = a.sidebar != null ? a.sidebar : "Marker";
            c.innerHTML = f;
            c.onclick = this.sidebar_element_handler(this, a.serviceObject, "click");
            d.appendChild(c);
            return j.appendChild(d)
        }
    };
    d.prototype.sidebar_element_handler = function (a, c, f) {
        return function () {
            a.map.panTo(c.position);
            return google.maps.event.trigger(c, f)
        }
    };
    d.prototype.resetSidebarContent = function () {
        var a;
        if (this.markers_conf.list_container !== null) {
            a = document.getElementById(this.markers_conf.list_container);
            return a.innerHTML = ""
        }
    };
    d.prototype.adjustMapToBounds = function () {
        var a, c, f, d, j, m, o;
        if (this.map_options.auto_adjust || this.map_options.bounds !== null) this.boundsObject = this.createLatLngBounds();
        if (this.map_options.auto_adjust) {
            this.extendBoundsWithMarkers();
            o = this.polylines;
            f = 0;
            for (j = o.length; f < j; f++) {
                a = o[f];
                c = a.serviceObject.latLngs.getArray()[0].getArray();
                d = 0;
                for (m = c.length; d < m; d++) {
                    a = c[d];
                    this.boundsObject.extend(a)
                }
            }
            o = this.polygons;
            f = 0;
            for (j = o.length; f < j; f++) {
                a = o[f];
                c = a.serviceObject.latLngs.getArray()[0].getArray();
                d = 0;
                for (m = c.length; d < m; d++) {
                    a = c[d];
                    this.boundsObject.extend(a)
                }
            }
            o = this.circles;
            j = 0;
            for (f = o.length; j < f; j++) {
                a = o[j];
                this.boundsObject.extend(a.serviceObject.getBounds().getNorthEast());
                this.boundsObject.extend(a.serviceObject.getBounds().getSouthWest())
            }
        }
        o = this.map_options.bounds;
        j = 0;
        for (f = o.length; j < f; j++) {
            a = o[j];
            a = this.createLatLng(a.lat, a.lng);
            this.boundsObject.extend(a)
        }
        if (this.map_options.auto_adjust || this.map_options.bounds.length > 0) {
            if (this.map_options.auto_zoom) return this.fitBounds();
            a = this.boundsObject.getCenter();
            this.map_options.center_latitude = a.lat();
            this.map_options.center_longitude = a.lng();
            return this.serviceObject.setCenter(a)
        }
    };
    d.prototype.create_kml = function () {
        var a, c, f, d, j;
        d = this.kml;
        j = [];
        c = 0;
        for (f = d.length; c < f; c++) {
            a = d[c];
            j.push(a.serviceObject = this.createKmlLayer(a))
        }
        return j
    };
    d.prototype.exists = function (a) {
        return a !== "" && typeof a !== "undefined"
    };
    d.prototype.randomize = function (a, c) {
        var f, d;
        d = this.markers_conf.max_random_distance * this.random();
        f = this.markers_conf.max_random_distance * this.random();
        f = parseFloat(a) + 180 / Math.PI * (f / 6378137);
        d = parseFloat(c) + 90 / Math.PI * (d / 6378137) / Math.cos(a);
        return [f, d]
    };
    d.prototype.mergeObjectWithDefault = function (a, c) {
        var f, d, j;
        f = {};
        for (d in a) {
            j = a[d];
            f[d] = j
        }
        for (d in c) {
            j = c[d];
            f[d] == null && (f[d] = j)
        }
        return f
    };
    d.prototype.mergeWithDefault = function (a) {
        this[a] = this.mergeObjectWithDefault(this[a], this["default_" + a]);
        return true
    };
    d.prototype.random = function () {
        return Math.random() * 2 - 1
    };
    this.Gmaps4Rails = d
}).call(this);
(function () {
    var a = {}.hasOwnProperty, d = function () {
        d.__super__.constructor.apply(this, arguments);
        this.map_options = {disableDefaultUI: false, disableDoubleClickZoom: false, type: "ROADMAP"};
        this.markers_conf = {
            clusterer_gridSize: 50,
            clusterer_maxZoom: 5,
            custom_cluster_pictures: null,
            custom_infowindow_class: null
        };
        this.mergeWithDefault("map_options");
        this.mergeWithDefault("markers_conf");
        this.kml_options = {clickable: true, preserveViewport: false, suppressInfoWindows: false};
        this.polygons_conf = {
            strokeColor: "#FFAA00",
            strokeOpacity: 0.8, strokeWeight: 2, fillColor: "#000000", fillOpacity: 0.35, clickable: false
        };
        this.polylines_conf = {
            strokeColor: "#FF0000",
            strokeOpacity: 1,
            strokeWeight: 2,
            clickable: false,
            zIndex: null
        };
        this.circles_conf = {
            fillColor: "#00AAFF",
            fillOpacity: 0.35,
            strokeColor: "#FFAA00",
            strokeOpacity: 0.8,
            strokeWeight: 2,
            clickable: false,
            zIndex: null
        };
        this.direction_conf = {
            panel_id: null,
            display_panel: false,
            origin: null,
            destination: null,
            waypoints: [],
            optimizeWaypoints: false,
            unitSystem: "METRIC",
            avoidHighways: false,
            avoidTolls: false,
            region: null,
            travelMode: "DRIVING"
        }
    }, b = d, c = Gmaps4Rails, f = function () {
        this.constructor = b
    }, g;
    for (g in c) a.call(c, g) && (b[g] = c[g]);
    f.prototype = c.prototype;
    b.prototype = new f;
    b.__super__ = c.prototype;
    d.prototype.createPoint = function (a, b) {
        return new google.maps.Point(a, b)
    };
    d.prototype.createLatLng = function (a, b) {
        return new google.maps.LatLng(a, b)
    };
    d.prototype.createLatLngBounds = function () {
        return new google.maps.LatLngBounds
    };
    d.prototype.createMap = function () {
        var a;
        a = {
            maxZoom: this.map_options.maxZoom,
            minZoom: this.map_options.minZoom,
            zoom: this.map_options.zoom,
            center: this.createLatLng(this.map_options.center_latitude, this.map_options.center_longitude),
            mapTypeId: google.maps.MapTypeId[this.map_options.type],
            mapTypeControl: this.map_options.mapTypeControl,
            disableDefaultUI: this.map_options.disableDefaultUI,
            disableDoubleClickZoom: this.map_options.disableDoubleClickZoom,
            draggable: this.map_options.draggable
        };
        a = this.mergeObjectWithDefault(this.map_options.raw, a);
        return new google.maps.Map(document.getElementById(this.map_options.id), a)
    };
    d.prototype.createMarkerImage = function (a, b, c, f, d) {
        return new google.maps.MarkerImage(a, b, c, f, d)
    };
    d.prototype.createSize = function (a, b) {
        return new google.maps.Size(a, b)
    };
    d.prototype.createMarker = function (a) {
        var b, c, f;
        c = this.createLatLng(a.Lat, a.Lng);
        if (a.marker_picture === "" && a.rich_marker === null) {
            a = {
                position: c,
                map: this.serviceObject,
                title: a.marker_title,
                draggable: a.marker_draggable,
                zIndex: a.zindex
            };
            a = this.mergeObjectWithDefault(this.markers_conf.raw, a);
            return new google.maps.Marker(a)
        }
        if (a.rich_marker !==
            null) return new RichMarker({
            position: c,
            map: this.serviceObject,
            draggable: a.marker_draggable,
            content: a.rich_marker,
            flat: a.marker_anchor === null ? false : a.marker_anchor[1],
            anchor: a.marker_anchor === null ? 0 : a.marker_anchor[0],
            zIndex: a.zindex
        });
        b = this.createImageAnchorPosition(a.marker_anchor);
        f = this.createImageAnchorPosition(a.shadow_anchor);
        b = this.createOrRetrieveImage(a.marker_picture, a.marker_width, a.marker_height, b);
        f = this.createOrRetrieveImage(a.shadow_picture, a.shadow_width, a.shadow_height, f);
        a = {
            position: c,
            map: this.serviceObject,
            icon: b,
            title: a.marker_title,
            draggable: a.marker_draggable,
            shadow: f,
            zIndex: a.zindex
        };
        a = this.mergeObjectWithDefault(this.markers_conf.raw, a);
        return new google.maps.Marker(a)
    };
    d.prototype.includeMarkerImage = function (a, b) {
        var c, f, d, g;
        c = d = 0;
        for (g = a.length; d < g; c = ++d) {
            f = a[c];
            if (f.url === b) return c
        }
        return false
    };
    d.prototype.createOrRetrieveImage = function (a, b, c, f) {
        var d;
        if (a === "" || a === null) return null;
        d = this.includeMarkerImage(this.markerImages, a);
        switch (d) {
            case false:
                a = this.createMarkerImage(a,
                    this.createSize(b, c), null, f, null);
                this.markerImages.push(a);
                return a;
            default:
                return typeof d === "number" ? this.markerImages[d] : false
        }
    };
    d.prototype.clearMarkers = function () {
        var a, b, c, f, d;
        f = this.markers;
        d = [];
        b = 0;
        for (c = f.length; b < c; b++) {
            a = f[b];
            d.push(this.clearMarker(a))
        }
        return d
    };
    d.prototype.showMarkers = function () {
        var a, b, c, f, d;
        f = this.markers;
        d = [];
        b = 0;
        for (c = f.length; b < c; b++) {
            a = f[b];
            d.push(this.showMarker(a))
        }
        return d
    };
    d.prototype.hideMarkers = function () {
        var a, b, c, f, d;
        f = this.markers;
        d = [];
        b = 0;
        for (c = f.length; b <
        c; b++) {
            a = f[b];
            d.push(this.hideMarker(a))
        }
        return d
    };
    d.prototype.clearMarker = function (a) {
        return a.serviceObject.setMap(null)
    };
    d.prototype.showMarker = function (a) {
        return a.serviceObject.setVisible(true)
    };
    d.prototype.hideMarker = function (a) {
        return a.serviceObject.setVisible(false)
    };
    d.prototype.extendBoundsWithMarkers = function () {
        var a, b, c, f, d;
        f = this.markers;
        d = [];
        b = 0;
        for (c = f.length; b < c; b++) {
            a = f[b];
            d.push(this.boundsObject.extend(a.serviceObject.position))
        }
        return d
    };
    d.prototype.createClusterer = function (a) {
        return new MarkerClusterer(this.serviceObject,
            a, {
                maxZoom: this.markers_conf.clusterer_maxZoom,
                gridSize: this.markers_conf.clusterer_gridSize,
                styles: this.customClusterer()
            })
    };
    d.prototype.clearClusterer = function () {
        return this.markerClusterer.clearMarkers()
    };
    d.prototype.clusterize = function () {
        var a, b, c, f, d;
        if (this.markers_conf.do_clustering === true) {
            this.markerClusterer !== null && this.clearClusterer();
            b = [];
            d = this.markers;
            c = 0;
            for (f = d.length; c < f; c++) {
                a = d[c];
                b.push(a.serviceObject)
            }
            return this.markerClusterer = this.createClusterer(b)
        }
    };
    d.prototype.createInfoWindow =
        function (a) {
            var b;
            if (typeof this.jsTemplate === "function" || a.description != null) {
                if (typeof this.jsTemplate === "function") a.description = this.jsTemplate(a);
                if (this.markers_conf.custom_infowindow_class !== null) {
                    b = document.createElement("div");
                    b.setAttribute("class", this.markers_conf.custom_infowindow_class);
                    b.innerHTML = a.description;
                    a.infowindow = new InfoBox(this.infobox(b))
                } else a.infowindow = new google.maps.InfoWindow({content: a.description});
                return google.maps.event.addListener(a.serviceObject, "click",
                    this.openInfoWindow(this, a.infowindow, a.serviceObject))
            }
        };
    d.prototype.openInfoWindow = function (a, b, c) {
        return function () {
            a.visibleInfoWindow !== null && a.visibleInfoWindow.close();
            b.open(a.serviceObject, c);
            return a.visibleInfoWindow = b
        }
    };
    d.prototype.createKmlLayer = function (a) {
        var b;
        b = a.options || {};
        b = this.mergeObjectWithDefault(b, this.kml_options);
        a = new google.maps.KmlLayer(a.url, b);
        a.setMap(this.serviceObject);
        return a
    };
    d.prototype.fitBounds = function () {
        if (!this.boundsObject.isEmpty()) return this.serviceObject.fitBounds(this.boundsObject)
    };
    d.prototype.centerMapOnUser = function () {
        return this.serviceObject.setCenter(this.userLocation)
    };
    this.Gmaps4RailsGoogle = d
}).call(this);

function ClusterIcon(a, d) {
    a.getMarkerClusterer().extend(ClusterIcon, google.maps.OverlayView);
    this.cluster_ = a;
    this.className_ = a.getMarkerClusterer().getClusterClass();
    this.styles_ = d;
    this.sums_ = this.div_ = this.center_ = null;
    this.visible_ = false;
    this.setMap(a.getMap())
}

ClusterIcon.prototype.onAdd = function () {
    var a = this, d, b;
    this.div_ = document.createElement("div");
    this.div_.className = this.className_;
    this.visible_ && this.show();
    this.getPanes().overlayMouseTarget.appendChild(this.div_);
    google.maps.event.addListener(this.getMap(), "bounds_changed", function () {
        b = d
    });
    google.maps.event.addDomListener(this.div_, "mousedown", function () {
        d = true;
        b = false
    });
    google.maps.event.addDomListener(this.div_, "click", function (c) {
        d = false;
        if (!b) {
            var f, g, j = a.cluster_.getMarkerClusterer();
            google.maps.event.trigger(j,
                "click", a.cluster_);
            google.maps.event.trigger(j, "clusterclick", a.cluster_);
            if (j.getZoomOnClick()) {
                g = j.getMaxZoom();
                f = a.cluster_.getBounds();
                j.getMap().fitBounds(f);
                setTimeout(function () {
                    j.getMap().fitBounds(f);
                    g !== null && j.getMap().getZoom() > g && j.getMap().setZoom(g + 1)
                }, 100)
            }
            c.cancelBubble = true;
            c.stopPropagation && c.stopPropagation()
        }
    });
    google.maps.event.addDomListener(this.div_, "mouseover", function () {
        var b = a.cluster_.getMarkerClusterer();
        google.maps.event.trigger(b, "mouseover", a.cluster_)
    });
    google.maps.event.addDomListener(this.div_,
        "mouseout", function () {
            var b = a.cluster_.getMarkerClusterer();
            google.maps.event.trigger(b, "mouseout", a.cluster_)
        })
};
ClusterIcon.prototype.onRemove = function () {
    if (this.div_ && this.div_.parentNode) {
        this.hide();
        google.maps.event.clearInstanceListeners(this.div_);
        this.div_.parentNode.removeChild(this.div_);
        this.div_ = null
    }
};
ClusterIcon.prototype.draw = function () {
    if (this.visible_) {
        var a = this.getPosFromLatLng_(this.center_);
        this.div_.style.top = a.y + "px";
        this.div_.style.left = a.x + "px"
    }
};
ClusterIcon.prototype.hide = function () {
    if (this.div_) this.div_.style.display = "none";
    this.visible_ = false
};
ClusterIcon.prototype.show = function () {
    if (this.div_) {
        var a = this.getPosFromLatLng_(this.center_);
        this.div_.style.cssText = this.createCss(a);
        this.div_.innerHTML = this.cluster_.printable_ ? "<img src='" + this.url_ + "'><div style='position: absolute; top: 0px; left: 0px; width: " + this.width_ + "px;'>" + this.sums_.text + "</div>" : this.sums_.text;
        this.div_.title = typeof this.sums_.title === "undefined" || this.sums_.title === "" ? this.cluster_.getMarkerClusterer().getTitle() : this.sums_.title;
        this.div_.style.display = ""
    }
    this.visible_ =
        true
};
ClusterIcon.prototype.useStyle = function (a) {
    this.sums_ = a;
    a = Math.max(0, a.index - 1);
    a = Math.min(this.styles_.length - 1, a);
    a = this.styles_[a];
    this.url_ = a.url;
    this.height_ = a.height;
    this.width_ = a.width;
    this.anchor_ = a.anchor;
    this.anchorIcon_ = a.anchorIcon || [parseInt(this.height_ / 2, 10), parseInt(this.width_ / 2, 10)];
    this.textColor_ = a.textColor || "black";
    this.textSize_ = a.textSize || 11;
    this.textDecoration_ = a.textDecoration || "none";
    this.fontWeight_ = a.fontWeight || "bold";
    this.fontStyle_ = a.fontStyle || "normal";
    this.fontFamily_ = a.fontFamily ||
        "Arial,sans-serif";
    this.backgroundPosition_ = a.backgroundPosition || "0 0"
};
ClusterIcon.prototype.setCenter = function (a) {
    this.center_ = a
};
ClusterIcon.prototype.createCss = function (a) {
    var d = [];
    if (!this.cluster_.printable_) {
        d.push("background-image:url(" + this.url_ + ");");
        d.push("background-position:" + this.backgroundPosition_ + ";")
    }
    if (typeof this.anchor_ === "object") {
        typeof this.anchor_[0] === "number" && this.anchor_[0] > 0 && this.anchor_[0] < this.height_ ? d.push("height:" + (this.height_ - this.anchor_[0]) + "px; padding-top:" + this.anchor_[0] + "px;") : d.push("height:" + this.height_ + "px; line-height:" + this.height_ + "px;");
        typeof this.anchor_[1] === "number" &&
        this.anchor_[1] > 0 && this.anchor_[1] < this.width_ ? d.push("width:" + (this.width_ - this.anchor_[1]) + "px; padding-left:" + this.anchor_[1] + "px;") : d.push("width:" + this.width_ + "px; text-align:center;")
    } else d.push("height:" + this.height_ + "px; line-height:" + this.height_ + "px; width:" + this.width_ + "px; text-align:center;");
    d.push("cursor:pointer; top:" + a.y + "px; left:" + a.x + "px; color:" + this.textColor_ + "; position:absolute; font-size:" + this.textSize_ + "px; font-family:" + this.fontFamily_ + "; font-weight:" + this.fontWeight_ +
        "; font-style:" + this.fontStyle_ + "; text-decoration:" + this.textDecoration_ + ";");
    return d.join("")
};
ClusterIcon.prototype.getPosFromLatLng_ = function (a) {
    a = this.getProjection().fromLatLngToDivPixel(a);
    a.x = a.x - this.anchorIcon_[1];
    a.y = a.y - this.anchorIcon_[0];
    return a
};

function Cluster(a) {
    this.markerClusterer_ = a;
    this.map_ = a.getMap();
    this.gridSize_ = a.getGridSize();
    this.minClusterSize_ = a.getMinimumClusterSize();
    this.averageCenter_ = a.getAverageCenter();
    this.printable_ = a.getPrintable();
    this.markers_ = [];
    this.bounds_ = this.center_ = null;
    this.clusterIcon_ = new ClusterIcon(this, a.getStyles())
}

Cluster.prototype.getSize = function () {
    return this.markers_.length
};
Cluster.prototype.getMarkers = function () {
    return this.markers_
};
Cluster.prototype.getCenter = function () {
    return this.center_
};
Cluster.prototype.getMap = function () {
    return this.map_
};
Cluster.prototype.getMarkerClusterer = function () {
    return this.markerClusterer_
};
Cluster.prototype.getBounds = function () {
    var a, d = new google.maps.LatLngBounds(this.center_, this.center_), b = this.getMarkers();
    for (a = 0; a < b.length; a++) d.extend(b[a].getPosition());
    return d
};
Cluster.prototype.remove = function () {
    this.clusterIcon_.setMap(null);
    this.markers_ = [];
    delete this.markers_
};
Cluster.prototype.addMarker = function (a) {
    var d, b;
    if (this.isMarkerAlreadyAdded_(a)) return false;
    if (this.center_) {
        if (this.averageCenter_) {
            b = this.markers_.length + 1;
            d = (this.center_.lat() * (b - 1) + a.getPosition().lat()) / b;
            b = (this.center_.lng() * (b - 1) + a.getPosition().lng()) / b;
            this.center_ = new google.maps.LatLng(d, b);
            this.calculateBounds_()
        }
    } else {
        this.center_ = a.getPosition();
        this.calculateBounds_()
    }
    a.isAdded = true;
    this.markers_.push(a);
    d = this.markers_.length;
    b = this.markerClusterer_.getMaxZoom();
    if (b !== null && this.map_.getZoom() >
        b) a.getMap() !== this.map_ && a.setMap(this.map_); else if (d < this.minClusterSize_) a.getMap() !== this.map_ && a.setMap(this.map_); else if (d === this.minClusterSize_) for (a = 0; a < d; a++) this.markers_[a].setMap(null); else a.setMap(null);
    this.updateIcon_();
    return true
};
Cluster.prototype.isMarkerInClusterBounds = function (a) {
    return this.bounds_.contains(a.getPosition())
};
Cluster.prototype.calculateBounds_ = function () {
    var a = new google.maps.LatLngBounds(this.center_, this.center_);
    this.bounds_ = this.markerClusterer_.getExtendedBounds(a)
};
Cluster.prototype.updateIcon_ = function () {
    var a = this.markers_.length, d = this.markerClusterer_.getMaxZoom();
    if (d !== null && this.map_.getZoom() > d) this.clusterIcon_.hide(); else if (a < this.minClusterSize_) this.clusterIcon_.hide(); else {
        a = this.markerClusterer_.getStyles().length;
        a = this.markerClusterer_.getCalculator()(this.markers_, a);
        this.clusterIcon_.setCenter(this.center_);
        this.clusterIcon_.useStyle(a);
        this.clusterIcon_.show()
    }
};
Cluster.prototype.isMarkerAlreadyAdded_ = function (a) {
    var d;
    if (this.markers_.indexOf) return this.markers_.indexOf(a) !== -1;
    for (d = 0; d < this.markers_.length; d++) if (a === this.markers_[d]) return true;
    return false
};

function MarkerClusterer(a, d, b) {
    this.extend(MarkerClusterer, google.maps.OverlayView);
    d = d || [];
    b = b || {};
    this.markers_ = [];
    this.clusters_ = [];
    this.listeners_ = [];
    this.activeMap_ = null;
    this.ready_ = false;
    this.gridSize_ = b.gridSize || 60;
    this.minClusterSize_ = b.minimumClusterSize || 2;
    this.maxZoom_ = b.maxZoom || null;
    this.styles_ = b.styles || [];
    this.title_ = b.title || "";
    this.zoomOnClick_ = true;
    if (b.zoomOnClick !== void 0) this.zoomOnClick_ = b.zoomOnClick;
    this.averageCenter_ = false;
    if (b.averageCenter !== void 0) this.averageCenter_ =
        b.averageCenter;
    this.ignoreHidden_ = false;
    if (b.ignoreHidden !== void 0) this.ignoreHidden_ = b.ignoreHidden;
    this.printable_ = false;
    if (b.printable !== void 0) this.printable_ = b.printable;
    this.imagePath_ = b.imagePath || MarkerClusterer.IMAGE_PATH;
    this.imageExtension_ = b.imageExtension || MarkerClusterer.IMAGE_EXTENSION;
    this.imageSizes_ = b.imageSizes || MarkerClusterer.IMAGE_SIZES;
    this.calculator_ = b.calculator || MarkerClusterer.CALCULATOR;
    this.batchSize_ = b.batchSize || MarkerClusterer.BATCH_SIZE;
    this.batchSizeIE_ = b.batchSizeIE ||
        MarkerClusterer.BATCH_SIZE_IE;
    this.clusterClass_ = b.clusterClass || "cluster";
    if (navigator.userAgent.toLowerCase().indexOf("msie") !== -1) this.batchSize_ = this.batchSizeIE_;
    this.setupStyles_();
    this.addMarkers(d, true);
    this.setMap(a)
}

MarkerClusterer.prototype.onAdd = function () {
    var a = this;
    this.activeMap_ = this.getMap();
    this.ready_ = true;
    this.repaint();
    this.listeners_ = [google.maps.event.addListener(this.getMap(), "zoom_changed", function () {
        a.resetViewport_(false);
        (this.getZoom() === (this.get("minZoom") || 0) || this.getZoom() === this.get("maxZoom")) && google.maps.event.trigger(this, "idle")
    }), google.maps.event.addListener(this.getMap(), "idle", function () {
        a.redraw_()
    })]
};
MarkerClusterer.prototype.onRemove = function () {
    var a;
    for (a = 0; a < this.markers_.length; a++) this.markers_[a].setMap(this.activeMap_);
    for (a = 0; a < this.clusters_.length; a++) this.clusters_[a].remove();
    this.clusters_ = [];
    for (a = 0; a < this.listeners_.length; a++) google.maps.event.removeListener(this.listeners_[a]);
    this.listeners_ = [];
    this.activeMap_ = null;
    this.ready_ = false
};
MarkerClusterer.prototype.draw = function () {
};
MarkerClusterer.prototype.setupStyles_ = function () {
    var a, d;
    if (!(this.styles_.length > 0)) for (a = 0; a < this.imageSizes_.length; a++) {
        d = this.imageSizes_[a];
        this.styles_.push({url: this.imagePath_ + (a + 1) + "." + this.imageExtension_, height: d, width: d})
    }
};
MarkerClusterer.prototype.fitMapToMarkers = function () {
    var a, d = this.getMarkers(), b = new google.maps.LatLngBounds;
    for (a = 0; a < d.length; a++) b.extend(d[a].getPosition());
    this.getMap().fitBounds(b)
};
MarkerClusterer.prototype.getGridSize = function () {
    return this.gridSize_
};
MarkerClusterer.prototype.setGridSize = function (a) {
    this.gridSize_ = a
};
MarkerClusterer.prototype.getMinimumClusterSize = function () {
    return this.minClusterSize_
};
MarkerClusterer.prototype.setMinimumClusterSize = function (a) {
    this.minClusterSize_ = a
};
MarkerClusterer.prototype.getMaxZoom = function () {
    return this.maxZoom_
};
MarkerClusterer.prototype.setMaxZoom = function (a) {
    this.maxZoom_ = a
};
MarkerClusterer.prototype.getStyles = function () {
    return this.styles_
};
MarkerClusterer.prototype.setStyles = function (a) {
    this.styles_ = a
};
MarkerClusterer.prototype.getTitle = function () {
    return this.title_
};
MarkerClusterer.prototype.setTitle = function (a) {
    this.title_ = a
};
MarkerClusterer.prototype.getZoomOnClick = function () {
    return this.zoomOnClick_
};
MarkerClusterer.prototype.setZoomOnClick = function (a) {
    this.zoomOnClick_ = a
};
MarkerClusterer.prototype.getAverageCenter = function () {
    return this.averageCenter_
};
MarkerClusterer.prototype.setAverageCenter = function (a) {
    this.averageCenter_ = a
};
MarkerClusterer.prototype.getIgnoreHidden = function () {
    return this.ignoreHidden_
};
MarkerClusterer.prototype.setIgnoreHidden = function (a) {
    this.ignoreHidden_ = a
};
MarkerClusterer.prototype.getImageExtension = function () {
    return this.imageExtension_
};
MarkerClusterer.prototype.setImageExtension = function (a) {
    this.imageExtension_ = a
};
MarkerClusterer.prototype.getImagePath = function () {
    return this.imagePath_
};
MarkerClusterer.prototype.setImagePath = function (a) {
    this.imagePath_ = a
};
MarkerClusterer.prototype.getImageSizes = function () {
    return this.imageSizes_
};
MarkerClusterer.prototype.setImageSizes = function (a) {
    this.imageSizes_ = a
};
MarkerClusterer.prototype.getCalculator = function () {
    return this.calculator_
};
MarkerClusterer.prototype.setCalculator = function (a) {
    this.calculator_ = a
};
MarkerClusterer.prototype.getPrintable = function () {
    return this.printable_
};
MarkerClusterer.prototype.setPrintable = function (a) {
    this.printable_ = a
};
MarkerClusterer.prototype.getBatchSizeIE = function () {
    return this.batchSizeIE_
};
MarkerClusterer.prototype.setBatchSizeIE = function (a) {
    this.batchSizeIE_ = a
};
MarkerClusterer.prototype.getClusterClass = function () {
    return this.clusterClass_
};
MarkerClusterer.prototype.setClusterClass = function (a) {
    this.clusterClass_ = a
};
MarkerClusterer.prototype.getMarkers = function () {
    return this.markers_
};
MarkerClusterer.prototype.getTotalMarkers = function () {
    return this.markers_.length
};
MarkerClusterer.prototype.getClusters = function () {
    return this.clusters_
};
MarkerClusterer.prototype.getTotalClusters = function () {
    return this.clusters_.length
};
MarkerClusterer.prototype.addMarker = function (a, d) {
    this.pushMarkerTo_(a);
    d || this.redraw_()
};
MarkerClusterer.prototype.addMarkers = function (a, d) {
    var b;
    for (b = 0; b < a.length; b++) this.pushMarkerTo_(a[b]);
    d || this.redraw_()
};
MarkerClusterer.prototype.pushMarkerTo_ = function (a) {
    if (a.getDraggable()) {
        var d = this;
        google.maps.event.addListener(a, "dragend", function () {
            if (d.ready_) {
                this.isAdded = false;
                d.repaint()
            }
        })
    }
    a.isAdded = false;
    this.markers_.push(a)
};
MarkerClusterer.prototype.removeMarker = function (a, d) {
    var b = this.removeMarker_(a);
    !d && b && this.repaint();
    return b
};
MarkerClusterer.prototype.removeMarkers = function (a, d) {
    var b, c, f = false;
    for (b = 0; b < a.length; b++) {
        c = this.removeMarker_(a[b]);
        f = f || c
    }
    !d && f && this.repaint();
    return f
};
MarkerClusterer.prototype.removeMarker_ = function (a) {
    var d, b = -1;
    if (this.markers_.indexOf) b = this.markers_.indexOf(a); else for (d = 0; d < this.markers_.length; d++) if (a === this.markers_[d]) {
        b = d;
        break
    }
    if (b === -1) return false;
    a.setMap(null);
    this.markers_.splice(b, 1);
    return true
};
MarkerClusterer.prototype.clearMarkers = function () {
    this.resetViewport_(true);
    this.markers_ = []
};
MarkerClusterer.prototype.repaint = function () {
    var a = this.clusters_.slice();
    this.clusters_ = [];
    this.resetViewport_(false);
    this.redraw_();
    setTimeout(function () {
        var d;
        for (d = 0; d < a.length; d++) a[d].remove()
    }, 0)
};
MarkerClusterer.prototype.getExtendedBounds = function (a) {
    var d = this.getProjection(), b = new google.maps.LatLng(a.getNorthEast().lat(), a.getNorthEast().lng()),
        c = new google.maps.LatLng(a.getSouthWest().lat(), a.getSouthWest().lng()), b = d.fromLatLngToDivPixel(b);
    b.x = b.x + this.gridSize_;
    b.y = b.y - this.gridSize_;
    c = d.fromLatLngToDivPixel(c);
    c.x = c.x - this.gridSize_;
    c.y = c.y + this.gridSize_;
    b = d.fromDivPixelToLatLng(b);
    d = d.fromDivPixelToLatLng(c);
    a.extend(b);
    a.extend(d);
    return a
};
MarkerClusterer.prototype.redraw_ = function () {
    this.createClusters_(0)
};
MarkerClusterer.prototype.resetViewport_ = function (a) {
    var d, b;
    for (d = 0; d < this.clusters_.length; d++) this.clusters_[d].remove();
    this.clusters_ = [];
    for (d = 0; d < this.markers_.length; d++) {
        b = this.markers_[d];
        b.isAdded = false;
        a && b.setMap(null)
    }
};
MarkerClusterer.prototype.distanceBetweenPoints_ = function (a, d) {
    var b = (d.lat() - a.lat()) * Math.PI / 180, c = (d.lng() - a.lng()) * Math.PI / 180,
        b = Math.sin(b / 2) * Math.sin(b / 2) + Math.cos(a.lat() * Math.PI / 180) * Math.cos(d.lat() * Math.PI / 180) * Math.sin(c / 2) * Math.sin(c / 2);
    return 6371 * 2 * Math.atan2(Math.sqrt(b), Math.sqrt(1 - b))
};
MarkerClusterer.prototype.isMarkerInBounds_ = function (a, d) {
    return d.contains(a.getPosition())
};
MarkerClusterer.prototype.addToClosestCluster_ = function (a) {
    var d, b, c, f = 4E4, g = null;
    for (d = 0; d < this.clusters_.length; d++) {
        c = this.clusters_[d];
        if (b = c.getCenter()) {
            b = this.distanceBetweenPoints_(b, a.getPosition());
            if (b < f) {
                f = b;
                g = c
            }
        }
    }
    if (g && g.isMarkerInClusterBounds(a)) g.addMarker(a); else {
        c = new Cluster(this);
        c.addMarker(a);
        this.clusters_.push(c)
    }
};
MarkerClusterer.prototype.createClusters_ = function (a) {
    var d, b, c = this;
    if (this.ready_) {
        if (a === 0) {
            google.maps.event.trigger(this, "clusteringbegin", this);
            if (typeof this.timerRefStatic !== "undefined") {
                clearTimeout(this.timerRefStatic);
                delete this.timerRefStatic
            }
        }
        b = this.getMap().getZoom() > 3 ? new google.maps.LatLngBounds(this.getMap().getBounds().getSouthWest(), this.getMap().getBounds().getNorthEast()) : new google.maps.LatLngBounds(new google.maps.LatLng(85.02070771743472, -178.48388434375), new google.maps.LatLng(-85.08136444384544,
            178.00048865625));
        b = this.getExtendedBounds(b);
        for (var f = Math.min(a + this.batchSize_, this.markers_.length); a < f; a++) {
            d = this.markers_[a];
            !d.isAdded && this.isMarkerInBounds_(d, b) && (!this.ignoreHidden_ || this.ignoreHidden_ && d.getVisible()) && this.addToClosestCluster_(d)
        }
        if (f < this.markers_.length) this.timerRefStatic = setTimeout(function () {
            c.createClusters_(f)
        }, 0); else {
            delete this.timerRefStatic;
            google.maps.event.trigger(this, "clusteringend", this)
        }
    }
};
MarkerClusterer.prototype.extend = function (a, d) {
    return function (a) {
        for (var c in a.prototype) this.prototype[c] = a.prototype[c];
        return this
    }.apply(a, [d])
};
MarkerClusterer.CALCULATOR = function (a, d) {
    for (var b = 0, c = a.length.toString(), f = c; f !== 0;) {
        f = parseInt(f / 10, 10);
        b++
    }
    b = Math.min(b, d);
    return {text: c, index: b, title: ""}
};
MarkerClusterer.BATCH_SIZE = 2E3;
MarkerClusterer.BATCH_SIZE_IE = 500;
MarkerClusterer.IMAGE_PATH = "http://m.chanyouji.cn/gmap_cluster/m";
MarkerClusterer.IMAGE_EXTENSION = "png";
MarkerClusterer.IMAGE_SIZES = [53, 56, 66, 78, 90];
(function () {
    window.SocialShareButton = {
        openUrl: function (a) {
            window.open(a);
            return false
        }, share: function (a) {
            var d, b, c;
            d = $(a).data("site");
            b = encodeURIComponent($(a).parent().data("title").replace("|SUB|", $(a).data("substitute")));
            a = encodeURIComponent($(a).parent().data("img"));
            c = encodeURIComponent(location.href);
            switch (d) {
                case "weibo":
                    SocialShareButton.openUrl("http://v.t.sina.com.cn/share/share.php?url=" + c + "&pic=" + a + "&title=" + b + "&content=utf-8");
                    break;
                case "twitter":
                    SocialShareButton.openUrl("https://twitter.com/home?status=" + b +
                        ": " + c);
                    break;
                case "douban":
                    SocialShareButton.openUrl("http://www.douban.com/recommend/?url=" + c + "&title=" + b + "&image=" + a);
                    break;
                case "facebook":
                    SocialShareButton.openUrl("http://www.facebook.com/sharer.php?t=" + b + "&u=" + c);
                    break;
                case "qq":
                    SocialShareButton.openUrl("http://connect.qq.com/widget/shareqq/index.html?url=" + c + "&desc=" + b + "&pics=" + a);
                    break;
                case "qzone":
                    SocialShareButton.openUrl("http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=" + c + "&title=" + b + "&pics=" + a);
                    break;
                case "tqq":
                    SocialShareButton.openUrl("http://share.v.t.qq.com/index.php?c=share&a=index&url=" +
                        c + "&title=" + b + "&pic=" + a);
                    break;
                case "baidu":
                    SocialShareButton.openUrl("http://apps.hi.baidu.com/share/?url=" + c + "&title=" + b);
                    break;
                case "kaixin001":
                    SocialShareButton.openUrl("http://www.kaixin001.com/rest/records.php?url=" + c + "&content=" + b + "&style=11&pic=" + a);
                    break;
                case "renren":
                    SocialShareButton.openUrl("http://widget.renren.com/dialog/share?resourceUrl=" + c + "&title=" + b);
                    break;
                case "google_plus":
                    SocialShareButton.openUrl("https://plus.google.com/share?url=" + c + "&t=" + b)
            }
            return false
        }
    }
}).call(this);

function BestInPlaceEditor(a) {
    this.element = a;
    this.initOptions();
    this.bindForm();
    this.initNil();
    jQuery(this.activator).bind("click", {editor: this}, this.clickHandler)
}

BestInPlaceEditor.prototype = {
    activate: function () {
        var a = "",
            a = this.isNil() ? "" : this.original_content ? this.original_content : this.sanitize ? this.element.text() : this.element.html().replace("&amp;", "&");
        this.oldValue = this.isNil() ? "" : this.element.html();
        this.display_value = a;
        jQuery(this.activator).unbind("click", this.clickHandler);
        this.activateForm();
        this.element.trigger(jQuery.Event("best_in_place:activate"))
    }, abort: function () {
        this.activateText(this.oldValue);
        jQuery(this.activator).bind("click", {editor: this},
            this.clickHandler);
        this.element.trigger(jQuery.Event("best_in_place:abort"));
        this.element.trigger(jQuery.Event("best_in_place:deactivate"))
    }, abortIfConfirm: function () {
        this.useConfirm ? confirm("Are you sure you want to discard your changes?") && this.abort() : this.abort()
    }, update: function () {
        var a = this;
        if (this.formType in {input: 1, textarea: 1} && this.getValue() == this.oldValue) {
            this.abort();
            return true
        }
        a.ajax({
            type: "post", dataType: "text", data: a.requestData(), success: function (b) {
                a.loadSuccessCallback(b)
            }, error: function (b,
                                c) {
                a.loadErrorCallback(b, c)
            }
        });
        if (this.formType == "select") {
            var d = this.getValue();
            this.previousCollectionValue = d;
            jQuery.each(this.values, function (b, c) {
                d == c[0] && a.element.html(c[1])
            })
        } else this.formType == "checkbox" ? a.element.html(this.getValue() ? this.values[1] : this.values[0]) : this.getValue() !== "" ? a.element.text(this.getValue()) : a.element.html(this.nil);
        a.element.trigger(jQuery.Event("best_in_place:update"))
    }, activateForm: function () {
        alert("The form was not properly initialized. activateForm is unbound")
    },
    activateText: function (a) {
        this.element.html(a);
        this.isNil() && this.element.html(this.nil)
    }, initOptions: function () {
        var a = this;
        a.element.parents().each(function () {
            $parent = jQuery(this);
            a.url = a.url || $parent.attr("data-url");
            a.collection = a.collection || $parent.attr("data-collection");
            a.formType = a.formType || $parent.attr("data-type");
            a.objectName = a.objectName || $parent.attr("data-object");
            a.attributeName = a.attributeName || $parent.attr("data-attribute");
            a.activator = a.activator || $parent.attr("data-activator");
            a.okButton = a.okButton || $parent.attr("data-ok-button");
            a.okButtonClass = a.okButtonClass || $parent.attr("data-ok-button-class");
            a.cancelButton = a.cancelButton || $parent.attr("data-cancel-button");
            a.cancelButtonClass = a.cancelButtonClass || $parent.attr("data-cancel-button-class");
            a.nil = a.nil || $parent.attr("data-nil");
            a.inner_class = a.inner_class || $parent.attr("data-inner-class");
            a.html_attrs = a.html_attrs || $parent.attr("data-html-attrs");
            a.original_content = a.original_content || $parent.attr("data-original-content");
            a.collectionValue = a.collectionValue || $parent.attr("data-value")
        });
        a.element.parents().each(function () {
            var d = this.id.match(/^(\w+)_(\d+)$/i);
            if (d) a.objectName = a.objectName || d[1]
        });
        a.url = a.element.attr("data-url") || a.url || document.location.pathname;
        a.collection = a.element.attr("data-collection") || a.collection;
        a.formType = a.element.attr("data-type") || a.formtype || "input";
        a.objectName = a.element.attr("data-object") || a.objectName;
        a.attributeName = a.element.attr("data-attribute") || a.attributeName;
        a.activator =
            a.element.attr("data-activator") || a.element;
        a.okButton = a.element.attr("data-ok-button") || a.okButton;
        a.okButtonClass = a.element.attr("data-ok-button-class") || a.okButtonClass || "";
        a.cancelButton = a.element.attr("data-cancel-button") || a.cancelButton;
        a.cancelButtonClass = a.element.attr("data-cancel-button-class") || a.cancelButtonClass || "";
        a.nil = a.element.attr("data-nil") || a.nil || "\u2014";
        a.inner_class = a.element.attr("data-inner-class") || a.inner_class || null;
        a.html_attrs = a.element.attr("data-html-attrs") || a.html_attrs;
        a.original_content = a.element.attr("data-original-content") || a.original_content;
        a.collectionValue = a.element.attr("data-value") || a.collectionValue;
        a.sanitize = a.element.attr("data-sanitize") ? a.element.attr("data-sanitize") == "true" : true;
        a.useConfirm = a.element.attr("data-use-confirm") ? a.element.attr("data-use-confirm") != "false" : true;
        if ((a.formType == "select" || a.formType == "checkbox") && a.collection !== null) a.values = jQuery.parseJSON(a.collection)
    }, bindForm: function () {
        this.activateForm = BestInPlaceEditor.forms[this.formType].activateForm;
        this.getValue = BestInPlaceEditor.forms[this.formType].getValue
    }, initNil: function () {
        this.element.html() === "" && this.element.html(this.nil)
    }, isNil: function () {
        return this.element.html() === "" || this.element.html() === this.nil
    }, getValue: function () {
        alert("The form was not properly initialized. getValue is unbound")
    }, sanitizeValue: function (a) {
        return jQuery.trim(a)
    }, requestData: function () {
        csrf_token = jQuery("meta[name=csrf-token]").attr("content");
        csrf_param = jQuery("meta[name=csrf-param]").attr("content");
        var a;
        a = "_method=put" + ("&" + this.objectName + "[" + this.attributeName + "]=" + encodeURIComponent(this.getValue()));
        csrf_param !== void 0 && csrf_token !== void 0 && (a = a + ("&" + csrf_param + "=" + encodeURIComponent(csrf_token)));
        return a
    }, ajax: function (a) {
        a.url = this.url;
        a.beforeSend = function (a) {
            a.setRequestHeader("Accept", "application/json")
        };
        return jQuery.ajax(a)
    }, loadSuccessCallback: function (a) {
        if ((a = jQuery.trim(a)) && a != "") {
            var d = jQuery.parseJSON(jQuery.trim(a));
            if (d !== null && d.hasOwnProperty("display_as")) {
                this.element.attr("data-original-content",
                    this.element.text());
                this.original_content = this.element.text();
                this.element.html(d.display_as)
            }
            this.element.trigger(jQuery.Event("best_in_place:success"), a);
            this.element.trigger(jQuery.Event("ajax:success"), a)
        } else {
            this.element.trigger(jQuery.Event("best_in_place:success"));
            this.element.trigger(jQuery.Event("ajax:success"))
        }
        jQuery(this.activator).bind("click", {editor: this}, this.clickHandler);
        this.element.trigger(jQuery.Event("best_in_place:deactivate"));
        if (this.collectionValue !== null && this.formType ==
            "select") {
            this.collectionValue = this.previousCollectionValue;
            this.previousCollectionValue = null
        }
    }, loadErrorCallback: function (a, d) {
        this.activateText(this.oldValue);
        this.element.trigger(jQuery.Event("best_in_place:error"), [a, d]);
        this.element.trigger(jQuery.Event("ajax:error"), a, d);
        jQuery(this.activator).bind("click", {editor: this}, this.clickHandler);
        this.element.trigger(jQuery.Event("best_in_place:deactivate"))
    }, clickHandler: function (a) {
        a.preventDefault();
        a.data.editor.activate()
    }, setHtmlAttributes: function () {
        var a =
            this.element.find(this.formType);
        if (this.html_attrs) {
            var d = jQuery.parseJSON(this.html_attrs), b;
            for (b in d) a.attr(b, d[b])
        }
    }
};
BestInPlaceEditor.forms = {
    input: {
        activateForm: function () {
            var a = jQuery(document.createElement("form")).addClass("form_in_place").attr("action", "javascript:void(0);").attr("style", "display:inline"),
                d = jQuery(document.createElement("input")).attr("type", "text").attr("name", this.attributeName).val(this.display_value);
            this.inner_class !== null && d.addClass(this.inner_class);
            a.append(d);
            this.okButton && a.append(jQuery(document.createElement("input")).attr("type", "submit").attr("class", this.okButtonClass).attr("value",
                this.okButton));
            this.cancelButton && a.append(jQuery(document.createElement("input")).attr("type", "button").attr("class", this.cancelButtonClass).attr("value", this.cancelButton));
            this.element.html(a);
            this.setHtmlAttributes();
            this.element.find("input[type='text']")[0].select();
            this.element.find("form").bind("submit", {editor: this}, BestInPlaceEditor.forms.input.submitHandler);
            this.cancelButton && this.element.find("input[type='button']").bind("click", {editor: this}, BestInPlaceEditor.forms.input.cancelButtonHandler);
            this.element.find("input[type='text']").bind("blur", {editor: this}, BestInPlaceEditor.forms.input.inputBlurHandler);
            this.element.find("input[type='text']").bind("keyup", {editor: this}, BestInPlaceEditor.forms.input.keyupHandler);
            this.blurTimer = null;
            this.userClicked = false
        }, getValue: function () {
            return this.sanitizeValue(this.element.find("input").val())
        }, inputBlurHandler: function (a) {
            a.data.editor.okButton ? a.data.editor.blurTimer = setTimeout(function () {
                    a.data.editor.userClicked || a.data.editor.abort()
                }, 500) :
                a.data.editor.cancelButton ? a.data.editor.blurTimer = setTimeout(function () {
                    a.data.editor.userClicked || a.data.editor.update()
                }, 500) : a.data.editor.update()
        }, submitHandler: function (a) {
            a.data.editor.userClicked = true;
            clearTimeout(a.data.editor.blurTimer);
            a.data.editor.update()
        }, cancelButtonHandler: function (a) {
            a.data.editor.userClicked = true;
            clearTimeout(a.data.editor.blurTimer);
            a.data.editor.abort();
            a.stopPropagation()
        }, keyupHandler: function (a) {
            a.keyCode == 27 && a.data.editor.abort()
        }
    }, date: {
        activateForm: function () {
            var a =
                    this,
                d = jQuery(document.createElement("form")).addClass("form_in_place").attr("action", "javascript:void(0);").attr("style", "display:inline"),
                b = jQuery(document.createElement("input")).attr("type", "text").attr("name", this.attributeName).attr("value", this.sanitizeValue(this.display_value));
            this.inner_class !== null && b.addClass(this.inner_class);
            d.append(b);
            this.element.html(d);
            this.setHtmlAttributes();
            this.element.find("input")[0].select();
            this.element.find("form").bind("submit", {editor: this}, BestInPlaceEditor.forms.input.submitHandler);
            this.element.find("input").bind("keyup", {editor: this}, BestInPlaceEditor.forms.input.keyupHandler);
            this.element.find("input").datepicker({
                onClose: function () {
                    a.update()
                }
            }).datepicker("show")
        }, getValue: function () {
            return this.sanitizeValue(this.element.find("input").val())
        }, submitHandler: function (a) {
            a.data.editor.update()
        }, keyupHandler: function (a) {
            a.keyCode == 27 && a.data.editor.abort()
        }
    }, select: {
        activateForm: function () {
            var a = jQuery(document.createElement("form")).attr("action", "javascript:void(0)").attr("style",
                "display:inline");
            selected = "";
            oldValue = this.oldValue;
            select_elt = jQuery(document.createElement("select")).attr("class", this.inned_class !== null ? this.inner_class : "");
            currentCollectionValue = this.collectionValue;
            jQuery.each(this.values, function (a, b) {
                var c = jQuery(document.createElement("option")).val(b[0]).html(b[1]);
                b[0] == currentCollectionValue && c.attr("selected", "selected");
                select_elt.append(c)
            });
            a.append(select_elt);
            this.element.html(a);
            this.setHtmlAttributes();
            this.element.find("select").bind("change",
                {editor: this}, BestInPlaceEditor.forms.select.blurHandler);
            this.element.find("select").bind("blur", {editor: this}, BestInPlaceEditor.forms.select.blurHandler);
            this.element.find("select").bind("keyup", {editor: this}, BestInPlaceEditor.forms.select.keyupHandler);
            this.element.find("select")[0].focus()
        }, getValue: function () {
            return this.sanitizeValue(this.element.find("select").val())
        }, blurHandler: function (a) {
            a.data.editor.update()
        }, keyupHandler: function (a) {
            a.keyCode == 27 && a.data.editor.abort()
        }
    }, checkbox: {
        activateForm: function () {
            this.collectionValue =
                !this.getValue();
            this.setHtmlAttributes();
            this.update()
        }, getValue: function () {
            return this.collectionValue
        }
    }, textarea: {
        activateForm: function () {
            width = this.element.css("width");
            height = this.element.css("height");
            var a = jQuery(document.createElement("form")).attr("action", "javascript:void(0)").attr("style", "display:inline").append(jQuery(document.createElement("textarea")).val(this.sanitizeValue(this.display_value)));
            this.okButton && a.append(jQuery(document.createElement("input")).attr("type", "submit").attr("value",
                this.okButton));
            this.cancelButton && a.append(jQuery(document.createElement("input")).attr("type", "button").attr("value", this.cancelButton));
            this.element.html(a);
            this.setHtmlAttributes();
            jQuery(this.element.find("textarea")[0]).css({"min-width": width, "min-height": height});
            jQuery(this.element.find("textarea")[0]).elastic();
            this.element.find("textarea")[0].focus();
            this.element.find("form").bind("submit", {editor: this}, BestInPlaceEditor.forms.textarea.submitHandler);
            this.cancelButton && this.element.find("input[type='button']").bind("click",
                {editor: this}, BestInPlaceEditor.forms.textarea.cancelButtonHandler);
            this.element.find("textarea").bind("blur", {editor: this}, BestInPlaceEditor.forms.textarea.blurHandler);
            this.element.find("textarea").bind("keyup", {editor: this}, BestInPlaceEditor.forms.textarea.keyupHandler);
            this.blurTimer = null;
            this.userClicked = false
        }, getValue: function () {
            return this.sanitizeValue(this.element.find("textarea").val())
        }, blurHandler: function (a) {
            a.data.editor.okButton ? a.data.editor.blurTimer = setTimeout(function () {
                a.data.editor.userClicked ||
                a.data.editor.abortIfConfirm()
            }, 500) : a.data.editor.cancelButton ? a.data.editor.blurTimer = setTimeout(function () {
                a.data.editor.userClicked || a.data.editor.update()
            }, 500) : a.data.editor.update()
        }, submitHandler: function (a) {
            a.data.editor.userClicked = true;
            clearTimeout(a.data.editor.blurTimer);
            a.data.editor.update()
        }, cancelButtonHandler: function (a) {
            a.data.editor.userClicked = true;
            clearTimeout(a.data.editor.blurTimer);
            a.data.editor.abortIfConfirm();
            a.stopPropagation()
        }, keyupHandler: function (a) {
            a.keyCode == 27 &&
            a.data.editor.abortIfConfirm()
        }
    }
};
jQuery.fn.best_in_place = function () {
    function a(a) {
        if (!a.data("bestInPlaceEditor")) {
            a.data("bestInPlaceEditor", new BestInPlaceEditor(a));
            return true
        }
    }

    jQuery(this.context).delegate(this.selector, "click", function () {
        var d = jQuery(this);
        a(d) && d.click()
    });
    this.each(function () {
        a(jQuery(this))
    });
    return this
};
(function (a) {
    typeof a.fn.elastic === "undefined" && a.fn.extend({
        elastic: function () {
            var d = ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "fontSize", "lineHeight", "fontFamily", "width", "fontWeight"];
            return this.each(function () {
                function b(a, b) {
                    curratedHeight = Math.floor(parseInt(a, 10));
                    f.height() != curratedHeight && f.css({height: curratedHeight + "px", overflow: b})
                }

                function c() {
                    var a = f.val().replace(/&/g, "&amp;").replace(/  /g, "&nbsp;").replace(/<|>/g, "&gt;").replace(/\n/g, "<br />"),
                        c = g.html().replace(/<br>/ig,
                            "<br />");
                    if (a + "&nbsp;" != c) {
                        g.html(a + "&nbsp;");
                        if (Math.abs(g.height() + j - f.height()) > 3) {
                            a = g.height() + j;
                            a >= o ? b(o, "auto") : a <= m ? b(m, "hidden") : b(a, "hidden")
                        }
                    }
                }

                if (this.type != "textarea") return false;
                var f = a(this),
                    g = a("<div />").css({position: "absolute", display: "none", "word-wrap": "break-word"}),
                    j = parseInt(f.css("line-height"), 10) || parseInt(f.css("font-size"), "10"),
                    m = parseInt(f.css("height"), 10) || j * 3,
                    o = parseInt(f.css("max-height"), 10) || Number.MAX_VALUE, n = 0;
                if (o < 0) o = Number.MAX_VALUE;
                g.appendTo(f.parent());
                for (n = d.length; n--;) g.css(d[n].toString(), f.css(d[n].toString()));
                f.css({overflow: "hidden"});
                f.bind("keyup change cut paste", function () {
                    c()
                });
                f.bind("blur", function () {
                    g.height() < o && (g.height() > m ? f.height(g.height()) : f.height(m))
                });
                f.on("input paste", function () {
                    setTimeout(c, 250)
                });
                c()
            })
        }
    })
})(jQuery);
Date.dayNames = "\u65e5\u4e00\u4e8c\u4e09\u56db\u4e94\u516d".split("");
Date.abbrDayNames = "\u65e5\u4e00\u4e8c\u4e09\u56db\u4e94\u516d".split("");
Date.monthNames = "\u4e00\u6708 \u4e8c\u6708 \u4e09\u6708 \u56db\u6708 \u4e94\u6708 \u516d\u6708 \u4e03\u6708 \u516b\u6708 \u4e5d\u6708 \u5341\u6708 \u5341\u4e00\u6708 \u5341\u4e8c\u6708".split(" ");
Date.abbrMonthNames = "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" ");
Date.firstDayOfWeek = 1;
Date.format = "yyyy-mm-dd";
Date.fullYearStart = "20";
(function () {
    function a(a, c) {
        Date.prototype[a] || (Date.prototype[a] = c)
    }

    a("isLeapYear", function () {
        var a = this.getFullYear();
        return a % 4 == 0 && a % 100 != 0 || a % 400 == 0
    });
    a("isWeekend", function () {
        return this.getDay() == 0 || this.getDay() == 6
    });
    a("isWeekDay", function () {
        return !this.isWeekend()
    });
    a("getDaysInMonth", function () {
        return [31, this.isLeapYear() ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][this.getMonth()]
    });
    a("getDayName", function (a) {
        return a ? Date.abbrDayNames[this.getDay()] : Date.dayNames[this.getDay()]
    });
    a("getMonthName",
        function (a) {
            return a ? Date.abbrMonthNames[this.getMonth()] : Date.monthNames[this.getMonth()]
        });
    a("getDayOfYear", function () {
        var a = new Date("1/1/" + this.getFullYear());
        return Math.floor((this.getTime() - a.getTime()) / 864E5)
    });
    a("getWeekOfYear", function () {
        return Math.ceil(this.getDayOfYear() / 7)
    });
    a("setDayOfYear", function (a) {
        this.setMonth(0);
        this.setDate(a);
        return this
    });
    a("addYears", function (a) {
        this.setFullYear(this.getFullYear() + a);
        return this
    });
    a("addMonths", function (a) {
        var c = this.getDate();
        this.setMonth(this.getMonth() +
            a);
        c > this.getDate() && this.addDays(-this.getDate());
        return this
    });
    a("addDays", function (a) {
        var c = this.getTimezoneOffset();
        this.setTime(this.getTime() + a * 864E5);
        a = this.getTimezoneOffset();
        a !== c && this.setTime(this.getTime() + (a - c) * 6E4);
        return this
    });
    a("addHours", function (a) {
        this.setHours(this.getHours() + a);
        return this
    });
    a("addMinutes", function (a) {
        this.setMinutes(this.getMinutes() + a);
        return this
    });
    a("addSeconds", function (a) {
        this.setSeconds(this.getSeconds() + a);
        return this
    });
    a("zeroTime", function () {
        this.setMilliseconds(0);
        this.setSeconds(0);
        this.setMinutes(0);
        this.setHours(0);
        return this
    });
    a("asString", function (a) {
        return (a || Date.format).split("yyyy").join(this.getFullYear()).split("yy").join((this.getFullYear() + "").substring(2)).split("dd").join(d(this.getDate())).split("d").join(this.getDate()).split("DD").join(this.getDayName(false)).split("D").join(this.getDayName(true)).split("mmmm").join(this.getMonthName(false)).split("mmm").join(this.getMonthName(true)).split("mm").join(d(this.getMonth() + 1)).split("hh").join(d(this.getHours())).split("min").join(d(this.getMinutes())).split("ss").join(d(this.getSeconds()))
    });
    Date.fromString = function (a, c) {
        var f = c || Date.format, d = new Date("01/01/1977"), j = 0, m, o, n;
        m = f.indexOf("mmmm");
        if (m > -1) {
            for (o = 0; o < Date.monthNames.length; o++) {
                n = a.substr(m, Date.monthNames[o].length);
                if (Date.monthNames[o] == n) {
                    j = Date.monthNames[o].length - 4;
                    break
                }
            }
            d.setMonth(o)
        } else {
            m = f.indexOf("mmm");
            if (m > -1) {
                n = a.substr(m, 3);
                for (o = 0; o < Date.abbrMonthNames.length; o++) if (Date.abbrMonthNames[o] == n) break;
                d.setMonth(o)
            } else d.setMonth(Number(a.substr(f.indexOf("mm"), 2)) - 1)
        }
        o = f.indexOf("yyyy");
        if (o > -1) {
            m < o && (o =
                o + j);
            d.setFullYear(Number(a.substr(o, 4)))
        } else d.setFullYear(Number(Date.fullYearStart + a.substr(f.indexOf("yy"), 2)));
        f = f.indexOf("dd");
        m < f && (f = f + j);
        d.setDate(Number(a.substr(f, 2)));
        return isNaN(d.getTime()) ? false : d
    };
    var d = function (a) {
        a = "0" + a;
        return a.substring(a.length - 2)
    }
})();
(function (a) {
    function d(a) {
        this.ele = a;
        this.button = this.horizontalOffset = this.verticalOffset = this.horizontalPosition = this.verticalPosition = this.numSelected = this.numSelectable = this.selectMultiple = this.rememberViewedMonth = this.displayClose = this.closeOnSelect = this.showYearNavigation = this.endDate = this.startDate = this.displayedYear = this.displayedMonth = null;
        this.renderCallback = [];
        this.selectedDates = {};
        this.inline = null;
        this.context = "#dp-popup";
        this.settings = {}
    }

    a.fn.extend({
        renderCalendar: function (b) {
            b = a.extend({},
                a.fn.datePicker.defaults, b);
            if (b.showHeader != a.dpConst.SHOW_HEADER_NONE) for (var f = a(document.createElement("tr")), d = Date.firstDayOfWeek; d < Date.firstDayOfWeek + 7; d++) {
                var j = d % 7, m = Date.dayNames[j];
                f.append(jQuery(document.createElement("th")).attr({
                    scope: "col",
                    abbr: m,
                    title: m,
                    "class": j == 0 || j == 6 ? "weekend" : "weekday"
                }).html(b.showHeader == a.dpConst.SHOW_HEADER_SHORT ? m.substr(0, 1) : m))
            }
            var o = a(document.createElement("table")).attr({cellspacing: 2}).addClass("jCalendar").append(b.showHeader != a.dpConst.SHOW_HEADER_NONE ?
                a(document.createElement("thead")).append(f) : document.createElement("thead")),
                f = a(document.createElement("tbody")), j = (new Date).zeroTime();
            j.setHours(12);
            var m = b.month == void 0 ? j.getMonth() : b.month, n = b.year || j.getFullYear(),
                l = new Date(n, m, 1, 12, 0, 0), d = Date.firstDayOfWeek - l.getDay() + 1;
            d > 1 && (d = d - 7);
            var p = Math.ceil((-1 * d + 1 + l.getDaysInMonth()) / 7);
            l.addDays(d - 1);
            for (var r = function (f) {
                return function () {
                    if (b.hoverClass) {
                        var d = a(this);
                        b.selectWeek ? f && !d.is(".disabled") && d.parent().addClass("activeWeekHover") :
                            d.addClass(b.hoverClass)
                    }
                }
            }, w = function () {
                if (b.hoverClass) {
                    var f = a(this);
                    f.removeClass(b.hoverClass);
                    f.parent().removeClass("activeWeekHover")
                }
            }, v = 0; v++ < p;) {
                for (var s = jQuery(document.createElement("tr")), x = b.dpController ? l > b.dpController.startDate : false, d = 0; d < 7; d++) {
                    var B = l.getMonth() == m,
                        B = a(document.createElement("td")).text(l.getDate() + "").addClass((B ? "current-month " : "other-month ") + (l.isWeekend() ? "weekend " : "weekday ") + (B && l.getTime() == j.getTime() ? "today " : "")).data("datePickerDate", l.asString()).hover(r(x),
                            w);
                    s.append(B);
                    b.renderCallback && b.renderCallback(B, l, m, n);
                    l = new Date(l.getFullYear(), l.getMonth(), l.getDate() + 1, 12, 0, 0)
                }
                f.append(s)
            }
            o.append(f);
            return this.each(function () {
                a(this).empty().append(o)
            })
        }, datePicker: function (b) {
            if (!a.event._dpCache) a.event._dpCache = [];
            b = a.extend({}, a.fn.datePicker.defaults, b);
            return this.each(function () {
                var f = a(this), g = true;
                if (!this._dpId) {
                    this._dpId = a.guid++;
                    a.event._dpCache[this._dpId] = new d(this);
                    g = false
                }
                if (b.inline) {
                    b.createButton = false;
                    b.displayClose = false;
                    b.closeOnSelect =
                        false;
                    f.empty()
                }
                var j = a.event._dpCache[this._dpId];
                j.init(b);
                if (!g && b.createButton) {
                    j.button = a('<a href="#" class="dp-choose-date" title="' + a.dpText.TEXT_CHOOSE_DATE + '">' + a.dpText.TEXT_CHOOSE_DATE + "</a>").bind("click", function () {
                        f.dpDisplay(this);
                        this.blur();
                        return false
                    });
                    f.after(j.button)
                }
                if (!g && f.is(":text")) {
                    f.bind("dateSelected", function (a, b) {
                        this.value = b.asString()
                    }).bind("change", function () {
                        if (this.value == "") j.clearSelected(); else {
                            var a = Date.fromString(this.value);
                            a && j.setSelected(a, true, true)
                        }
                    });
                    b.clickInput && f.bind("click", function () {
                        f.trigger("change");
                        f.dpDisplay()
                    });
                    g = Date.fromString(this.value);
                    this.value != "" && g && j.setSelected(g, true, true)
                }
                f.addClass("dp-applied")
            })
        }, dpSetDisabled: function (a) {
            return b.call(this, "setDisabled", a)
        }, dpSetStartDate: function (a) {
            return b.call(this, "setStartDate", a)
        }, dpSetEndDate: function (a) {
            return b.call(this, "setEndDate", a)
        }, dpGetSelected: function () {
            var b = this[0]._dpId ? a.event._dpCache[this[0]._dpId] : false;
            return b ? b.getSelected() : null
        }, dpSetSelected: function (a,
                                    f, d, j) {
            f == void 0 && (f = true);
            d == void 0 && (d = true);
            j == void 0 && (j = true);
            return b.call(this, "setSelected", Date.fromString(a), f, d, j)
        }, dpSetDisplayedMonth: function (a, f) {
            return b.call(this, "setDisplayedMonth", Number(a), Number(f), true)
        }, dpDisplay: function (a) {
            return b.call(this, "display", a)
        }, dpSetRenderCallback: function (a) {
            return b.call(this, "setRenderCallback", a)
        }, dpSetPosition: function (a, f) {
            return b.call(this, "setPosition", a, f)
        }, dpSetOffset: function (a, f) {
            return b.call(this, "setOffset", a, f)
        }, dpClose: function () {
            return b.call(this,
                "_closeCalendar", false, this[0])
        }, dpRerenderCalendar: function () {
            return b.call(this, "_rerenderCalendar")
        }, _dpDestroy: function () {
        }
    });
    var b = function (b, f, d, j, m) {
        return this.each(function () {
            var o = this._dpId ? a.event._dpCache[this._dpId] : false;
            if (o) o[b](f, d, j, m)
        })
    };
    a.extend(d.prototype, {
        init: function (a) {
            this.setStartDate(a.startDate);
            this.setEndDate(a.endDate);
            this.setDisplayedMonth(Number(a.month), Number(a.year));
            this.setRenderCallback(a.renderCallback);
            this.showYearNavigation = a.showYearNavigation;
            this.closeOnSelect =
                a.closeOnSelect;
            this.displayClose = a.displayClose;
            this.rememberViewedMonth = a.rememberViewedMonth;
            this.numSelectable = (this.selectMultiple = a.selectMultiple) ? a.numSelectable : 1;
            this.numSelected = 0;
            this.verticalPosition = a.verticalPosition;
            this.horizontalPosition = a.horizontalPosition;
            this.hoverClass = a.hoverClass;
            this.setOffset(a.verticalOffset, a.horizontalOffset);
            this.inline = a.inline;
            this.settings = a;
            if (this.inline) {
                this.context = this.ele;
                this.display()
            }
        }, setStartDate: function (a) {
            if (a) this.startDate = a instanceof
            Date ? a : Date.fromString(a);
            if (!this.startDate) this.startDate = (new Date).zeroTime();
            this.setDisplayedMonth(this.displayedMonth, this.displayedYear)
        }, setEndDate: function (a) {
            if (a) this.endDate = a instanceof Date ? a : Date.fromString(a);
            if (!this.endDate) this.endDate = new Date("12/31/2999");
            if (this.endDate.getTime() < this.startDate.getTime()) this.endDate = this.startDate;
            this.setDisplayedMonth(this.displayedMonth, this.displayedYear)
        }, setPosition: function (a, b) {
            this.verticalPosition = a;
            this.horizontalPosition = b
        }, setOffset: function (a,
                                b) {
            this.verticalOffset = parseInt(a) || 0;
            this.horizontalOffset = parseInt(b) || 0
        }, setDisabled: function (b) {
            $e = a(this.ele);
            $e[b ? "addClass" : "removeClass"]("dp-disabled");
            if (this.button) {
                $but = a(this.button);
                $but[b ? "addClass" : "removeClass"]("dp-disabled");
                $but.attr("title", b ? "" : a.dpText.TEXT_CHOOSE_DATE)
            }
            $e.is(":text") && $e.attr("disabled", b ? "disabled" : "")
        }, setDisplayedMonth: function (b, f, d) {
            if (!(this.startDate == void 0 || this.endDate == void 0)) {
                var j = new Date(this.startDate.getTime());
                j.setDate(1);
                var m = new Date(this.endDate.getTime());
                m.setDate(1);
                if (!b && !f || isNaN(b) && isNaN(f)) {
                    b = (new Date).zeroTime();
                    b.setDate(1)
                } else b = isNaN(b) ? new Date(f, this.displayedMonth, 1) : isNaN(f) ? new Date(this.displayedYear, b, 1) : new Date(f, b, 1);
                b.getTime() < j.getTime() ? b = j : b.getTime() > m.getTime() && (b = m);
                j = this.displayedMonth;
                m = this.displayedYear;
                this.displayedMonth = b.getMonth();
                this.displayedYear = b.getFullYear();
                if (d && (this.displayedMonth != j || this.displayedYear != m)) {
                    this._rerenderCalendar();
                    a(this.ele).trigger("dpMonthChanged", [this.displayedMonth, this.displayedYear])
                }
            }
        },
        setSelected: function (b, f, d, j) {
            if (!(b < this.startDate || b.zeroTime() > this.endDate.zeroTime())) {
                var m = this.settings;
                if (m.selectWeek) {
                    b = b.addDays(-(b.getDay() - Date.firstDayOfWeek + 7) % 7);
                    if (b < this.startDate) return
                }
                if (f != this.isSelected(b)) {
                    if (this.selectMultiple == false) this.clearSelected(); else if (f && this.numSelected == this.numSelectable) return;
                    d && (this.displayedMonth != b.getMonth() || this.displayedYear != b.getFullYear()) && this.setDisplayedMonth(b.getMonth(), b.getFullYear(), true);
                    this.selectedDates[b.asString()] =
                        f;
                    this.numSelected = this.numSelected + (f ? 1 : -1);
                    var d = "td." + (b.getMonth() == this.displayedMonth ? "current-month" : "other-month"), o;
                    a(d, this.context).each(function () {
                        if (a(this).data("datePickerDate") == b.asString()) {
                            o = a(this);
                            if (m.selectWeek) o.parent()[f ? "addClass" : "removeClass"]("selectedWeek");
                            o[f ? "addClass" : "removeClass"]("selected")
                        }
                    });
                    a("td", this.context).not(".selected")[this.selectMultiple && this.numSelected == this.numSelectable ? "addClass" : "removeClass"]("unselectable");
                    if (j) {
                        m = this.isSelected(b);
                        $e =
                            a(this.ele);
                        j = Date.fromString(b.asString());
                        $e.trigger("dateSelected", [j, o, m]);
                        $e.trigger("change")
                    }
                }
            }
        }, isSelected: function (a) {
            return this.selectedDates[a.asString()]
        }, getSelected: function () {
            var a = [], b;
            for (b in this.selectedDates) this.selectedDates[b] == true && a.push(Date.fromString(b));
            return a
        }, clearSelected: function () {
            this.selectedDates = {};
            this.numSelected = 0;
            a("td.selected", this.context).removeClass("selected").parent().removeClass("selectedWeek")
        }, display: function (b) {
            if (!a(this.ele).is(".dp-disabled")) {
                var b =
                    b || this.ele, f = this, b = a(b), d = b.offset(), j, m, o;
                if (f.inline) {
                    j = a(this.ele);
                    m = {id: "calendar-" + this.ele._dpId, "class": "dp-popup dp-popup-inline"};
                    a(".dp-popup", j).remove();
                    o = {}
                } else {
                    j = a("body");
                    m = {id: "dp-popup", "class": "dp-popup"};
                    o = {top: d.top + f.verticalOffset, left: d.left + f.horizontalOffset};
                    this._checkMouse = function (b) {
                        for (var b = b.target, c = a("#dp-popup")[0]; ;) {
                            if (b == c) return true;
                            if (b == document) {
                                f._closeCalendar();
                                return false
                            }
                            b = a(b).parent()[0]
                        }
                    };
                    f._closeCalendar(true);
                    a(document).bind("keydown.datepicker",
                        function (a) {
                            a.keyCode == 27 && f._closeCalendar()
                        })
                }
                if (!f.rememberViewedMonth) {
                    var n = this.getSelected()[0];
                    if (n) {
                        n = new Date(n);
                        this.setDisplayedMonth(n.getMonth(), n.getFullYear(), false)
                    }
                }
                j.append(a("<div></div>").attr(m).css(o).append(a("<h2></h2>"), a('<div class="dp-nav-prev"></div>').append(a('<a class="dp-nav-prev-year" href="#" title="' + a.dpText.TEXT_PREV_YEAR + '">&lt;&lt;</a>').bind("click", function () {
                    return f._displayNewMonth.call(f, this, 0, -1)
                }), a('<a class="dp-nav-prev-month" href="#" title="' +
                    a.dpText.TEXT_PREV_MONTH + '">&lt;</a>').bind("click", function () {
                    return f._displayNewMonth.call(f, this, -1, 0)
                })), a('<div class="dp-nav-next"></div>').append(a('<a class="dp-nav-next-year" href="#" title="' + a.dpText.TEXT_NEXT_YEAR + '">&gt;&gt;</a>').bind("click", function () {
                    return f._displayNewMonth.call(f, this, 0, 1)
                }), a('<a class="dp-nav-next-month" href="#" title="' + a.dpText.TEXT_NEXT_MONTH + '">&gt;</a>').bind("click", function () {
                    return f._displayNewMonth.call(f, this, 1, 0)
                })), a('<div class="dp-calendar"></div>')).bgIframe());
                j = this.inline ? a(".dp-popup", this.context) : a("#dp-popup");
                this.showYearNavigation == false && a(".dp-nav-prev-year, .dp-nav-next-year", f.context).css("display", "none");
                this.displayClose && j.append(a('<a href="#" id="dp-close">' + a.dpText.TEXT_CLOSE + "</a>").bind("click", function () {
                    f._closeCalendar();
                    return false
                }));
                f._renderCalendar();
                a(this.ele).trigger("dpDisplayed", j);
                if (!f.inline) {
                    this.verticalPosition == a.dpConst.POS_BOTTOM && j.css("top", d.top + b.height() - j.height() + f.verticalOffset);
                    this.horizontalPosition ==
                    a.dpConst.POS_RIGHT && j.css("left", d.left + b.width() - j.width() + f.horizontalOffset);
                    a(document).bind("mousedown.datepicker", this._checkMouse)
                }
            }
        }, setRenderCallback: function (a) {
            if (a != null) {
                a && typeof a == "function" && (a = [a]);
                this.renderCallback = this.renderCallback.concat(a)
            }
        }, cellRender: function (b, f) {
            var d = this.dpController, j = new Date(f.getTime());
            b.bind("click", function () {
                var b = a(this);
                if (!b.is(".disabled")) {
                    d.setSelected(j, !b.is(".selected") || !d.selectMultiple, false, true);
                    if (d.closeOnSelect) {
                        if (d.settings.autoFocusNextInput) {
                            var c =
                                d.ele, f = false;
                            a(":input", c.form).each(function () {
                                if (f) {
                                    a(this).focus();
                                    return false
                                }
                                this == c && (f = true)
                            })
                        } else try {
                            d.ele.focus()
                        } catch (l) {
                        }
                        d._closeCalendar()
                    }
                }
            });
            if (d.isSelected(j)) {
                b.addClass("selected");
                d.settings.selectWeek && b.parent().addClass("selectedWeek")
            } else d.selectMultiple && d.numSelected == d.numSelectable && b.addClass("unselectable")
        }, _applyRenderCallbacks: function () {
            var b = this;
            a("td", this.context).each(function () {
                for (var f = 0; f < b.renderCallback.length; f++) {
                    $td = a(this);
                    b.renderCallback[f].apply(this,
                        [$td, Date.fromString($td.data("datePickerDate")), b.displayedMonth, b.displayedYear])
                }
            })
        }, _displayNewMonth: function (b, f, d) {
            a(b).is(".disabled") || this.setDisplayedMonth(this.displayedMonth + f, this.displayedYear + d, true);
            b.blur();
            return false
        }, _rerenderCalendar: function () {
            this._clearCalendar();
            this._renderCalendar()
        }, _renderCalendar: function () {
            a("h2", this.context).html((new Date(this.displayedYear, this.displayedMonth, 1)).asString(a.dpText.HEADER_FORMAT));
            a(".dp-calendar", this.context).renderCalendar(a.extend({},
                this.settings, {
                    month: this.displayedMonth,
                    year: this.displayedYear,
                    renderCallback: this.cellRender,
                    dpController: this,
                    hoverClass: this.hoverClass
                }));
            if (this.displayedYear == this.startDate.getFullYear() && this.displayedMonth == this.startDate.getMonth()) {
                a(".dp-nav-prev-year", this.context).addClass("disabled");
                a(".dp-nav-prev-month", this.context).addClass("disabled");
                a(".dp-calendar td.other-month", this.context).each(function () {
                    var b = a(this);
                    Number(b.text()) > 20 && b.addClass("disabled")
                });
                var b = this.startDate.getDate();
                a(".dp-calendar td.current-month", this.context).each(function () {
                    var f = a(this);
                    Number(f.text()) < b && f.addClass("disabled")
                })
            } else {
                a(".dp-nav-prev-year", this.context).removeClass("disabled");
                a(".dp-nav-prev-month", this.context).removeClass("disabled");
                b = this.startDate.getDate();
                if (b > 20) {
                    var f = this.startDate.getTime(), d = new Date(f);
                    d.addMonths(1);
                    this.displayedYear == d.getFullYear() && this.displayedMonth == d.getMonth() && a(".dp-calendar td.other-month", this.context).each(function () {
                        var b = a(this);
                        Date.fromString(b.data("datePickerDate")).getTime() <
                        f && b.addClass("disabled")
                    })
                }
            }
            if (this.displayedYear == this.endDate.getFullYear() && this.displayedMonth == this.endDate.getMonth()) {
                a(".dp-nav-next-year", this.context).addClass("disabled");
                a(".dp-nav-next-month", this.context).addClass("disabled");
                a(".dp-calendar td.other-month", this.context).each(function () {
                    var b = a(this);
                    Number(b.text()) < 14 && b.addClass("disabled")
                });
                b = this.endDate.getDate();
                a(".dp-calendar td.current-month", this.context).each(function () {
                    var f = a(this);
                    Number(f.text()) > b && f.addClass("disabled")
                })
            } else {
                a(".dp-nav-next-year",
                    this.context).removeClass("disabled");
                a(".dp-nav-next-month", this.context).removeClass("disabled");
                b = this.endDate.getDate();
                if (b < 13) {
                    d = new Date(this.endDate.getTime());
                    d.addMonths(-1);
                    this.displayedYear == d.getFullYear() && this.displayedMonth == d.getMonth() && a(".dp-calendar td.other-month", this.context).each(function () {
                        var f = a(this), d = Number(f.text());
                        d < 13 && d > b && f.addClass("disabled")
                    })
                }
            }
            this._applyRenderCallbacks()
        }, _closeCalendar: function (b, f) {
            if (!f || f == this.ele) {
                a(document).unbind("mousedown.datepicker");
                a(document).unbind("keydown.datepicker");
                this._clearCalendar();
                a("#dp-popup a").unbind();
                a("#dp-popup").empty().remove();
                b || a(this.ele).trigger("dpClosed", [this.getSelected()])
            }
        }, _clearCalendar: function () {
            a(".dp-calendar td", this.context).unbind();
            a(".dp-calendar", this.context).empty()
        }
    });
    a.dpConst = {
        SHOW_HEADER_NONE: 0,
        SHOW_HEADER_SHORT: 1,
        SHOW_HEADER_LONG: 2,
        POS_TOP: 0,
        POS_BOTTOM: 1,
        POS_LEFT: 0,
        POS_RIGHT: 1,
        DP_INTERNAL_FOCUS: "dpInternalFocusTrigger"
    };
    a.dpText = {
        TEXT_PREV_YEAR: "Previous year",
        TEXT_PREV_MONTH: "Previous month",
        TEXT_NEXT_YEAR: "Next year",
        TEXT_NEXT_MONTH: "Next month",
        TEXT_CLOSE: "Close",
        TEXT_CHOOSE_DATE: "Choose date",
        HEADER_FORMAT: "mmmm yyyy"
    };
    a.dpVersion = "$Id$";
    a.fn.datePicker.defaults = {
        month: void 0,
        year: void 0,
        showHeader: a.dpConst.SHOW_HEADER_SHORT,
        startDate: void 0,
        endDate: void 0,
        inline: false,
        renderCallback: null,
        createButton: true,
        showYearNavigation: true,
        closeOnSelect: true,
        displayClose: false,
        selectMultiple: false,
        numSelectable: Number.MAX_VALUE,
        clickInput: false,
        rememberViewedMonth: true,
        selectWeek: false,
        verticalPosition: a.dpConst.POS_TOP,
        horizontalPosition: a.dpConst.POS_LEFT,
        verticalOffset: 0,
        horizontalOffset: 0,
        hoverClass: "dp-hover",
        autoFocusNextInput: false
    };
    if (a.fn.bgIframe == void 0) a.fn.bgIframe = function () {
        return this
    };
    a(window).bind("unload", function () {
        var b = a.event._dpCache || [], f;
        for (f in b) a(b[f].ele)._dpDestroy()
    })
})(jQuery);
(function () {
    if ($.browser.msie && $.browser.version < 7) {
        document.write('<div class="ie6-notsupported"><div class="broswer-update"><div class="a-broswer"><a class="chrome" href="http://www.google.cn/chrome/intl/zh-CN/landing_chrome.html" target="_blank">\u8c37\u6b4c\u6d4f\u89c8\u5668</a><a class="ie" href="" target="_blank">\u5347\u7ea7IE</a></div></div></div>');
        $("html,body").css({width: "100%", height: "100%", overflow: "hidden"});
        $("#logo").css("top", (WindowSize.height - 306) / 4 - 36);
        navigator.userAgent.indexOf("Windows NT 6.1") >
        -1 ? $(".ie").attr("href", "http://dl.pconline.com.cn/download/60835.html?cyj") : $(".ie").attr("href", "http://dl.pconline.com.cn/html_2/1/104/id=49581&pn=0.html")
    }
})();
$(function () {
    var a = $("body"), d = $("#flash-notice,#flash-error,#flash-alert"), b;
    if (d.length) {
        b = d.width();
        d.css("margin-left", -b / 2);
        setTimeout(function () {
            d.fadeOut(200, function () {
                d.remove();
                d = null
            })
        }, 3E3)
    }
    $("button").prop("hidefocus", true).attr("hidefocus", "true");
    a.append('<div class="g-preload"><i class="l1"></i><i class="l2"></i></div>');
    var c, f = $("#new-notice"), g = function () {
        $.get("/notifications.json", function (a) {
            if (a && a.notifications_unread_count + a.pm_unread_count > 0) {
                f.text(a.notifications_unread_count +
                    a.pm_unread_count).removeClass("hidden");
                f.data("pm-unread", a.pm_unread_count > 0)
            } else f.addClass("hidden")
        }, "json")
    };
    if (f.length > 0) {
        c = setInterval(g, 6E4);
        $(window).on("useridle", function () {
            clearInterval(c);
            c = setInterval(g, 12E5)
        }).on("userpresent", function () {
            clearInterval(c);
            c = setInterval(g, 6E4)
        })
    }
});
$(document).ajaxError(function (a, d) {
    d.status == 401 ? open_sign_in_window() : d.status == 403 && $(function () {
        $.confirm("\u7f51\u7edc\u5f02\u5e38\uff0c\u8bf7\u5237\u65b0\u9875\u9762\u540e\u91cd\u8bd5", null, {btnCancel: false})
    })
});

function open_sign_in_window() {
    $.fancybox("/users/sign_in?iframe=true", {scrolling: "no", padding: 0, width: 450, height: 540, type: "iframe"})
}

function topSearchBar() {
    var a = $('#top-search-bar input[name="q"]').hasPlaceholder();
    $("#top-search-bar").submit(function () {
        var d = a.val();
        if (!d || d == a.attr("placeholder")) return false
    })
}

var _gaq = _gaq || [];
_gaq.push(["_setAccount", "UA-33504546-1"]);
_gaq.push(["_trackPageview"]);
$(function () {

});
var mejs = mejs || {};
mejs.version = "2.12.0";
mejs.meIndex = 0;
mejs.plugins = {
    silverlight: [{
        version: [3, 0],
        types: "video/mp4 video/m4v video/mov video/wmv audio/wma audio/m4a audio/mp3 audio/wav audio/mpeg".split(" ")
    }],
    flash: [{
        version: [9, 0, 124],
        types: "video/mp4 video/m4v video/mov video/flv video/rtmp video/x-flv audio/flv audio/x-flv audio/mp3 audio/m4a audio/mpeg video/youtube video/x-youtube".split(" ")
    }],
    youtube: [{version: null, types: ["video/youtube", "video/x-youtube", "audio/youtube", "audio/x-youtube"]}],
    vimeo: [{version: null, types: ["video/vimeo", "video/x-vimeo"]}]
};
mejs.Utility = {
    encodeUrl: function (a) {
        return encodeURIComponent(a)
    }, escapeHTML: function (a) {
        return a.toString().split("&").join("&amp;").split("<").join("&lt;").split('"').join("&quot;")
    }, absolutizeUrl: function (a) {
        var d = document.createElement("div");
        d.innerHTML = '<a href="' + this.escapeHTML(a) + '">x</a>';
        return d.firstChild.href
    }, getScriptPath: function (a) {
        for (var d = 0, b, c = "", f = "", g, j, m = document.getElementsByTagName("script"), o = m.length, n = a.length; d < o; d++) {
            g = m[d].src;
            b = g.lastIndexOf("/");
            if (b > -1) {
                j = g.substring(b +
                    1);
                g = g.substring(0, b + 1)
            } else {
                j = g;
                g = ""
            }
            for (b = 0; b < n; b++) {
                f = a[b];
                f = j.indexOf(f);
                if (f > -1) {
                    c = g;
                    break
                }
            }
            if (c !== "") break
        }
        return c
    }, secondsToTimeCode: function (a, d, b, c) {
        typeof b == "undefined" ? b = false : typeof c == "undefined" && (c = 25);
        var f = Math.floor(a / 3600) % 24, g = Math.floor(a / 60) % 60, j = Math.floor(a % 60),
            a = Math.floor((a % 1 * c).toFixed(3));
        return (d || f > 0 ? (f < 10 ? "0" + f : f) + ":" : "") + (g < 10 ? "0" + g : g) + ":" + (j < 10 ? "0" + j : j) + (b ? ":" + (a < 10 ? "0" + a : a) : "")
    }, timeCodeToSeconds: function (a, d, b, c) {
        typeof b == "undefined" ? b = false : typeof c == "undefined" &&
            (c = 25);
        var a = a.split(":"), d = parseInt(a[0], 10), f = parseInt(a[1], 10), g = parseInt(a[2], 10), j = 0;
        b && (j = parseInt(a[3]) / c);
        return d * 3600 + f * 60 + g + j
    }, convertSMPTEtoSeconds: function (a) {
        if (typeof a != "string") return false;
        for (var a = a.replace(",", "."), d = 0, b = a.indexOf(".") != -1 ? a.split(".")[1].length : 0, c = 1, a = a.split(":").reverse(), f = 0; f < a.length; f++) {
            c = 1;
            f > 0 && (c = Math.pow(60, f));
            d = d + Number(a[f]) * c
        }
        return Number(d.toFixed(b))
    }, removeSwf: function (a) {
        var d = document.getElementById(a);
        if (d && /object|embed/i.test(d.nodeName)) if (mejs.MediaFeatures.isIE) {
            d.style.display =
                "none";
            (function () {
                d.readyState == 4 ? mejs.Utility.removeObjectInIE(a) : setTimeout(arguments.callee, 10)
            })()
        } else d.parentNode.removeChild(d)
    }, removeObjectInIE: function (a) {
        if (a = document.getElementById(a)) {
            for (var d in a) typeof a[d] == "function" && (a[d] = null);
            a.parentNode.removeChild(a)
        }
    }
};
mejs.PluginDetector = {
    hasPluginVersion: function (a, d) {
        var b = this.plugins[a];
        d[1] = d[1] || 0;
        d[2] = d[2] || 0;
        return b[0] > d[0] || b[0] == d[0] && b[1] > d[1] || b[0] == d[0] && b[1] == d[1] && b[2] >= d[2] ? true : false
    },
    nav: window.navigator,
    ua: window.navigator.userAgent.toLowerCase(),
    plugins: [],
    addPlugin: function (a, d, b, c, f) {
        this.plugins[a] = this.detectPlugin(d, b, c, f)
    },
    detectPlugin: function (a, d, b, c) {
        var f = [0, 0, 0], g;
        if (typeof this.nav.plugins != "undefined" && typeof this.nav.plugins[a] == "object") {
            if ((b = this.nav.plugins[a].description) &&
                !(typeof this.nav.mimeTypes != "undefined" && this.nav.mimeTypes[d] && !this.nav.mimeTypes[d].enabledPlugin)) {
                f = b.replace(a, "").replace(/^\s+/, "").replace(/\sr/gi, ".").split(".");
                for (a = 0; a < f.length; a++) f[a] = parseInt(f[a].match(/\d+/), 10)
            }
        } else if (typeof window.ActiveXObject != "undefined") try {
            if (g = new ActiveXObject(b)) f = c(g)
        } catch (j) {
        }
        return f
    }
};
mejs.PluginDetector.addPlugin("flash", "Shockwave Flash", "application/x-shockwave-flash", "ShockwaveFlash.ShockwaveFlash", function (a) {
    var d = [];
    if (a = a.GetVariable("$version")) {
        a = a.split(" ")[1].split(",");
        d = [parseInt(a[0], 10), parseInt(a[1], 10), parseInt(a[2], 10)]
    }
    return d
});
mejs.PluginDetector.addPlugin("silverlight", "Silverlight Plug-In", "application/x-silverlight-2", "AgControl.AgControl", function (a) {
    var d = [0, 0, 0, 0], b = function (a, b, d, j) {
        for (; a.isVersionSupported(b[0] + "." + b[1] + "." + b[2] + "." + b[3]);) b[d] = b[d] + j;
        b[d] = b[d] - j
    };
    b(a, d, 0, 1);
    b(a, d, 1, 1);
    b(a, d, 2, 1E4);
    b(a, d, 2, 1E3);
    b(a, d, 2, 100);
    b(a, d, 2, 10);
    b(a, d, 2, 1);
    b(a, d, 3, 1);
    return d
});
mejs.MediaFeatures = {
    init: function () {
        var a = this, d = document, b = mejs.PluginDetector.nav, c = mejs.PluginDetector.ua.toLowerCase(), f,
            g = ["source", "track", "audio", "video"];
        a.isiPad = c.match(/ipad/i) !== null;
        a.isiPhone = c.match(/iphone/i) !== null;
        a.isiOS = a.isiPhone || a.isiPad;
        a.isAndroid = c.match(/android/i) !== null;
        a.isBustedAndroid = c.match(/android 2\.[12]/) !== null;
        a.isBustedNativeHTTPS = location.protocol === "https:" && (c.match(/android [12]\./) !== null || c.match(/macintosh.* version.* safari/) !== null);
        a.isIE = b.appName.toLowerCase().indexOf("microsoft") !=
            -1;
        a.isChrome = c.match(/chrome/gi) !== null;
        a.isFirefox = c.match(/firefox/gi) !== null;
        a.isWebkit = c.match(/webkit/gi) !== null;
        a.isGecko = c.match(/gecko/gi) !== null && !a.isWebkit;
        a.isOpera = c.match(/opera/gi) !== null;
        a.hasTouch = "ontouchstart" in window;
        a.svg = !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect;
        for (b = 0; b < g.length; b++) f = document.createElement(g[b]);
        a.supportsMediaTag = typeof f.canPlayType !== "undefined" || a.isBustedAndroid;
        try {
            f.canPlayType("video/mp4")
        } catch (j) {
            a.supportsMediaTag =
                false
        }
        a.hasSemiNativeFullScreen = typeof f.webkitEnterFullscreen !== "undefined";
        a.hasWebkitNativeFullScreen = typeof f.webkitRequestFullScreen !== "undefined";
        a.hasMozNativeFullScreen = typeof f.mozRequestFullScreen !== "undefined";
        a.hasTrueNativeFullScreen = a.hasWebkitNativeFullScreen || a.hasMozNativeFullScreen;
        a.nativeFullScreenEnabled = a.hasTrueNativeFullScreen;
        if (a.hasMozNativeFullScreen) a.nativeFullScreenEnabled = f.mozFullScreenEnabled;
        if (this.isChrome) a.hasSemiNativeFullScreen = false;
        if (a.hasTrueNativeFullScreen) {
            a.fullScreenEventName =
                a.hasWebkitNativeFullScreen ? "webkitfullscreenchange" : "mozfullscreenchange";
            a.isFullScreen = function () {
                if (f.mozRequestFullScreen) return d.mozFullScreen;
                if (f.webkitRequestFullScreen) return d.webkitIsFullScreen
            };
            a.requestFullScreen = function (b) {
                a.hasWebkitNativeFullScreen ? b.webkitRequestFullScreen() : a.hasMozNativeFullScreen && b.mozRequestFullScreen()
            };
            a.cancelFullScreen = function () {
                a.hasWebkitNativeFullScreen ? document.webkitCancelFullScreen() : a.hasMozNativeFullScreen && document.mozCancelFullScreen()
            }
        }
        if (a.hasSemiNativeFullScreen &&
            c.match(/mac os x 10_5/i)) {
            a.hasNativeFullScreen = false;
            a.hasSemiNativeFullScreen = false
        }
    }
};
mejs.MediaFeatures.init();
mejs.HtmlMediaElement = {
    pluginType: "native", isFullScreen: !1, setCurrentTime: function (a) {
        this.currentTime = a
    }, setMuted: function (a) {
        this.muted = a
    }, setVolume: function (a) {
        this.volume = a
    }, stop: function () {
        this.pause()
    }, setSrc: function (a) {
        for (var d = this.getElementsByTagName("source"); d.length > 0;) this.removeChild(d[0]);
        if (typeof a == "string") this.src = a; else for (var b, d = 0; d < a.length; d++) {
            b = a[d];
            if (this.canPlayType(b.type)) {
                this.src = b.src;
                break
            }
        }
    }, setVideoSize: function (a, d) {
        this.width = a;
        this.height = d
    }
};
mejs.PluginMediaElement = function (a, d, b) {
    this.id = a;
    this.pluginType = d;
    this.src = b;
    this.events = {};
    this.attributes = {}
};
mejs.PluginMediaElement.prototype = {
    pluginElement: null,
    pluginType: "",
    isFullScreen: !1,
    playbackRate: -1,
    defaultPlaybackRate: -1,
    seekable: [],
    played: [],
    paused: !0,
    ended: !1,
    seeking: !1,
    duration: 0,
    error: null,
    tagName: "",
    muted: !1,
    volume: 1,
    currentTime: 0,
    play: function () {
        if (this.pluginApi != null) {
            this.pluginType == "youtube" ? this.pluginApi.playVideo() : this.pluginApi.playMedia();
            this.paused = false
        }
    },
    load: function () {
        if (this.pluginApi != null) {
            this.pluginType != "youtube" && this.pluginApi.loadMedia();
            this.paused = false
        }
    },
    pause: function () {
        if (this.pluginApi !=
            null) {
            this.pluginType == "youtube" ? this.pluginApi.pauseVideo() : this.pluginApi.pauseMedia();
            this.paused = true
        }
    },
    stop: function () {
        if (this.pluginApi != null) {
            this.pluginType == "youtube" ? this.pluginApi.stopVideo() : this.pluginApi.stopMedia();
            this.paused = true
        }
    },
    canPlayType: function (a) {
        var d, b, c, f = mejs.plugins[this.pluginType];
        for (d = 0; d < f.length; d++) {
            c = f[d];
            if (mejs.PluginDetector.hasPluginVersion(this.pluginType, c.version)) for (b = 0; b < c.types.length; b++) if (a == c.types[b]) return "probably"
        }
        return ""
    },
    positionFullscreenButton: function (a,
                                        d, b) {
        this.pluginApi != null && this.pluginApi.positionFullscreenButton && this.pluginApi.positionFullscreenButton(Math.floor(a), Math.floor(d), b)
    },
    hideFullscreenButton: function () {
        this.pluginApi != null && this.pluginApi.hideFullscreenButton && this.pluginApi.hideFullscreenButton()
    },
    setSrc: function (a) {
        if (typeof a == "string") {
            this.pluginApi.setSrc(mejs.Utility.absolutizeUrl(a));
            this.src = mejs.Utility.absolutizeUrl(a)
        } else {
            var d, b;
            for (d = 0; d < a.length; d++) {
                b = a[d];
                if (this.canPlayType(b.type)) {
                    this.pluginApi.setSrc(mejs.Utility.absolutizeUrl(b.src));
                    this.src = mejs.Utility.absolutizeUrl(a);
                    break
                }
            }
        }
    },
    setCurrentTime: function (a) {
        if (this.pluginApi != null) {
            this.pluginType == "youtube" ? this.pluginApi.seekTo(a) : this.pluginApi.setCurrentTime(a);
            this.currentTime = a
        }
    },
    setVolume: function (a) {
        if (this.pluginApi != null) {
            this.pluginType == "youtube" ? this.pluginApi.setVolume(a * 100) : this.pluginApi.setVolume(a);
            this.volume = a
        }
    },
    setMuted: function (a) {
        if (this.pluginApi != null) {
            if (this.pluginType == "youtube") {
                a ? this.pluginApi.mute() : this.pluginApi.unMute();
                this.muted = a;
                this.dispatchEvent("volumechange")
            } else this.pluginApi.setMuted(a);
            this.muted = a
        }
    },
    setVideoSize: function (a, d) {
        if (this.pluginElement.style) {
            this.pluginElement.style.width = a + "px";
            this.pluginElement.style.height = d + "px"
        }
        this.pluginApi != null && this.pluginApi.setVideoSize && this.pluginApi.setVideoSize(a, d)
    },
    setFullscreen: function (a) {
        this.pluginApi != null && this.pluginApi.setFullscreen && this.pluginApi.setFullscreen(a)
    },
    enterFullScreen: function () {
        this.pluginApi != null && this.pluginApi.setFullscreen && this.setFullscreen(true)
    },
    exitFullScreen: function () {
        this.pluginApi != null && this.pluginApi.setFullscreen &&
        this.setFullscreen(false)
    },
    addEventListener: function (a, d) {
        this.events[a] = this.events[a] || [];
        this.events[a].push(d)
    },
    removeEventListener: function (a, d) {
        if (!a) {
            this.events = {};
            return true
        }
        var b = this.events[a];
        if (!b) return true;
        if (!d) {
            this.events[a] = [];
            return true
        }
        for (i = 0; i < b.length; i++) if (b[i] === d) {
            this.events[a].splice(i, 1);
            return true
        }
        return false
    },
    dispatchEvent: function (a) {
        var d, b, c = this.events[a];
        if (c) {
            b = Array.prototype.slice.call(arguments, 1);
            for (d = 0; d < c.length; d++) c[d].apply(null, b)
        }
    },
    hasAttribute: function (a) {
        return a in
            this.attributes
    },
    removeAttribute: function (a) {
        delete this.attributes[a]
    },
    getAttribute: function (a) {
        return this.hasAttribute(a) ? this.attributes[a] : ""
    },
    setAttribute: function (a, d) {
        this.attributes[a] = d
    },
    remove: function () {
        mejs.Utility.removeSwf(this.pluginElement.id);
        mejs.MediaPluginBridge.unregisterPluginElement(this.pluginElement.id)
    }
};
mejs.MediaPluginBridge = {
    pluginMediaElements: {}, htmlMediaElements: {}, registerPluginElement: function (a, d, b) {
        this.pluginMediaElements[a] = d;
        this.htmlMediaElements[a] = b
    }, unregisterPluginElement: function (a) {
        delete this.pluginMediaElements[a];
        delete this.htmlMediaElements[a]
    }, initPlugin: function (a) {
        var d = this.pluginMediaElements[a], b = this.htmlMediaElements[a];
        if (d) {
            switch (d.pluginType) {
                case "flash":
                    d.pluginElement = d.pluginApi = document.getElementById(a);
                    break;
                case "silverlight":
                    d.pluginElement = document.getElementById(d.id);
                    d.pluginApi = d.pluginElement.Content.MediaElementJS
            }
            d.pluginApi != null && d.success && d.success(d, b)
        }
    }, fireEvent: function (a, d, b) {
        var c, f, a = this.pluginMediaElements[a], d = {type: d, target: a};
        for (c in b) {
            a[c] = b[c];
            d[c] = b[c]
        }
        f = b.bufferedTime || 0;
        d.target.buffered = d.buffered = {
            start: function () {
                return 0
            }, end: function () {
                return f
            }, length: 1
        };
        a.dispatchEvent(d.type, d)
    }
};
mejs.MediaElementDefaults = {
    mode: "auto",
    plugins: ["flash", "silverlight", "youtube", "vimeo"],
    enablePluginDebug: !1,
    type: "",
    pluginPath: mejs.Utility.getScriptPath(["mediaelement.js", "mediaelement.min.js", "mediaelement-and-player.js", "mediaelement-and-player.min.js"]),
    flashName: "flashmediaelement.swf",
    flashStreamer: "",
    enablePluginSmoothing: !1,
    enablePseudoStreaming: !1,
    pseudoStreamingStartQueryParam: "start",
    silverlightName: "silverlightmediaelement.xap",
    defaultVideoWidth: 480,
    defaultVideoHeight: 270,
    pluginWidth: -1,
    pluginHeight: -1,
    pluginVars: [],
    timerRate: 250,
    startVolume: 0.8,
    success: function () {
    },
    error: function () {
    }
};
mejs.MediaElement = function (a, d) {
    return mejs.HtmlMediaElementShim.create(a, d)
};
mejs.HtmlMediaElementShim = {
    create: function (a, d) {
        var b = mejs.MediaElementDefaults, c = typeof a == "string" ? document.getElementById(a) : a,
            f = c.tagName.toLowerCase(), g = f === "audio" || f === "video",
            j = g ? c.getAttribute("src") : c.getAttribute("href"), f = c.getAttribute("poster"),
            m = c.getAttribute("autoplay"), o = c.getAttribute("preload"), n = c.getAttribute("controls"), l;
        for (l in d) b[l] = d[l];
        f = typeof f == "undefined" || f === null ? "" : f;
        o = typeof o == "undefined" || o === null || o === "false" ? "none" : o;
        m = !(typeof m == "undefined" || m === null || m ===
            "false");
        n = !(typeof n == "undefined" || n === null || n === "false");
        l = this.determinePlayback(c, b, mejs.MediaFeatures.supportsMediaTag, g, typeof j == "undefined" || j === null || j == "" ? null : j);
        l.url = l.url !== null ? mejs.Utility.absolutizeUrl(l.url) : "";
        if (l.method == "native") {
            if (mejs.MediaFeatures.isBustedAndroid) {
                c.src = l.url;
                c.addEventListener("click", function () {
                    c.play()
                }, false)
            }
            return this.updateNative(l, b, m, o)
        }
        if (l.method !== "") return this.createPlugin(l, b, f, m, o, n);
        this.createErrorMessage(l, b, f);
        return this
    }, determinePlayback: function (a,
                                    d, b, c, f) {
        var g = [], j, m, o,
            n = {method: "", url: "", htmlMediaElement: a, isVideo: a.tagName.toLowerCase() != "audio"}, l;
        if (typeof d.type != "undefined" && d.type !== "") if (typeof d.type == "string") g.push({
            type: d.type,
            url: f
        }); else for (j = 0; j < d.type.length; j++) g.push({type: d.type[j], url: f}); else if (f !== null) {
            o = this.formatType(f, a.getAttribute("type"));
            g.push({type: o, url: f})
        } else for (j = 0; j < a.childNodes.length; j++) {
            m = a.childNodes[j];
            if (m.nodeType == 1 && m.tagName.toLowerCase() == "source") {
                f = m.getAttribute("src");
                o = this.formatType(f,
                    m.getAttribute("type"));
                m = m.getAttribute("media");
                (!m || !window.matchMedia || window.matchMedia && window.matchMedia(m).matches) && g.push({
                    type: o,
                    url: f
                })
            }
        }
        if (!c && g.length > 0 && g[0].url !== null && this.getTypeFromFile(g[0].url).indexOf("audio") > -1) n.isVideo = false;
        if (mejs.MediaFeatures.isBustedAndroid) a.canPlayType = function (a) {
            return a.match(/video\/(mp4|m4v)/gi) !== null ? "maybe" : ""
        };
        if (b && (d.mode === "auto" || d.mode === "auto_plugin" || d.mode === "native") && !mejs.MediaFeatures.isBustedNativeHTTPS) {
            if (!c) {
                j = document.createElement(n.isVideo ?
                    "video" : "audio");
                a.parentNode.insertBefore(j, a);
                a.style.display = "none";
                n.htmlMediaElement = a = j
            }
            for (j = 0; j < g.length; j++) if (a.canPlayType(g[j].type).replace(/no/, "") !== "" || a.canPlayType(g[j].type.replace(/mp3/, "mpeg")).replace(/no/, "") !== "") {
                n.method = "native";
                n.url = g[j].url;
                break
            }
            if (n.method === "native") {
                if (n.url !== null) a.src = n.url;
                if (d.mode !== "auto_plugin") return n
            }
        }
        if (d.mode === "auto" || d.mode === "auto_plugin" || d.mode === "shim") for (j = 0; j < g.length; j++) {
            o = g[j].type;
            for (a = 0; a < d.plugins.length; a++) {
                f = d.plugins[a];
                m = mejs.plugins[f];
                for (b = 0; b < m.length; b++) {
                    l = m[b];
                    if (l.version == null || mejs.PluginDetector.hasPluginVersion(f, l.version)) for (c = 0; c < l.types.length; c++) if (o == l.types[c]) {
                        n.method = f;
                        n.url = g[j].url;
                        return n
                    }
                }
            }
        }
        if (d.mode === "auto_plugin" && n.method === "native") return n;
        if (n.method === "" && g.length > 0) n.url = g[0].url;
        return n
    }, formatType: function (a, d) {
        return a && !d ? this.getTypeFromFile(a) : d && ~d.indexOf(";") ? d.substr(0, d.indexOf(";")) : d
    }, getTypeFromFile: function (a) {
        a = a.split("?")[0];
        a = a.substring(a.lastIndexOf(".") +
            1).toLowerCase();
        return (/(mp4|m4v|ogg|ogv|webm|webmv|flv|wmv|mpeg|mov)/gi.test(a) ? "video" : "audio") + "/" + this.getTypeFromExtension(a)
    }, getTypeFromExtension: function (a) {
        switch (a) {
            case "mp4":
            case "m4v":
                return "mp4";
            case "webm":
            case "webma":
            case "webmv":
                return "webm";
            case "ogg":
            case "oga":
            case "ogv":
                return "ogg";
            default:
                return a
        }
    }, createErrorMessage: function (a, d, b) {
        var c = a.htmlMediaElement, f = document.createElement("div");
        f.className = "me-cannotplay";
        try {
            f.style.width = c.width + "px";
            f.style.height = c.height + "px"
        } catch (g) {
        }
        f.innerHTML =
            d.customError ? d.customError : b !== "" ? '<a href="' + a.url + '"><img src="' + b + '" width="100%" height="100%" /></a>' : '<a href="' + a.url + '"><span>' + mejs.i18n.t("Download File") + "</span></a>";
        c.parentNode.insertBefore(f, c);
        c.style.display = "none";
        d.error(c)
    }, createPlugin: function (a, d, b, c, f, g) {
        var b = a.htmlMediaElement, j = 1, m = 1, o = "me_" + a.method + "_" + mejs.meIndex++,
            n = new mejs.PluginMediaElement(o, a.method, a.url), l = document.createElement("div"), p;
        n.tagName = b.tagName;
        for (p = 0; p < b.attributes.length; p++) {
            var r = b.attributes[p];
            r.specified == true && n.setAttribute(r.name, r.value)
        }
        for (p = b.parentNode; p !== null && p.tagName.toLowerCase() != "body";) {
            if (p.parentNode.tagName.toLowerCase() == "p") {
                p.parentNode.parentNode.insertBefore(p, p.parentNode);
                break
            }
            p = p.parentNode
        }
        if (a.isVideo) {
            j = d.pluginWidth > 0 ? d.pluginWidth : d.videoWidth > 0 ? d.videoWidth : b.getAttribute("width") !== null ? b.getAttribute("width") : d.defaultVideoWidth;
            m = d.pluginHeight > 0 ? d.pluginHeight : d.videoHeight > 0 ? d.videoHeight : b.getAttribute("height") !== null ? b.getAttribute("height") :
                d.defaultVideoHeight;
            j = mejs.Utility.encodeUrl(j);
            m = mejs.Utility.encodeUrl(m)
        } else if (d.enablePluginDebug) {
            j = 320;
            m = 240
        }
        n.success = d.success;
        mejs.MediaPluginBridge.registerPluginElement(o, n, b);
        l.className = "me-plugin";
        l.id = o + "_container";
        a.isVideo ? b.parentNode.insertBefore(l, b) : document.body.insertBefore(l, document.body.childNodes[0]);
        c = ["id=" + o, "isvideo=" + (a.isVideo ? "true" : "false"), "autoplay=" + (c ? "true" : "false"), "preload=" + f, "width=" + j, "startvolume=" + d.startVolume, "timerrate=" + d.timerRate, "flashstreamer=" +
        d.flashStreamer, "height=" + m, "pseudostreamstart=" + d.pseudoStreamingStartQueryParam];
        a.url !== null && (a.method == "flash" ? c.push("file=" + mejs.Utility.encodeUrl(a.url)) : c.push("file=" + a.url));
        d.enablePluginDebug && c.push("debug=true");
        d.enablePluginSmoothing && c.push("smoothing=true");
        d.enablePseudoStreaming && c.push("pseudostreaming=true");
        g && c.push("controls=true");
        d.pluginVars && (c = c.concat(d.pluginVars));
        switch (a.method) {
            case "silverlight":
                l.innerHTML = '<object data="data:application/x-silverlight-2," type="application/x-silverlight-2" id="' +
                    o + '" name="' + o + '" width="' + j + '" height="' + m + '" class="mejs-shim"><param name="initParams" value="' + c.join(",") + '" /><param name="windowless" value="true" /><param name="background" value="black" /><param name="minRuntimeVersion" value="3.0.0.0" /><param name="autoUpgrade" value="true" /><param name="source" value="' + d.pluginPath + d.silverlightName + '" /></object>';
                break;
            case "flash":
                if (mejs.MediaFeatures.isIE) {
                    a = document.createElement("div");
                    l.appendChild(a);
                    a.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab" id="' +
                        o + '" width="' + j + '" height="' + m + '" class="mejs-shim"><param name="movie" value="' + d.pluginPath + d.flashName + "?x=" + new Date + '" /><param name="flashvars" value="' + c.join("&amp;") + '" /><param name="quality" value="high" /><param name="bgcolor" value="#000000" /><param name="wmode" value="transparent" /><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="true" /></object>'
                } else l.innerHTML = '<embed id="' + o + '" name="' + o + '" play="true" loop="false" quality="high" bgcolor="#000000" wmode="transparent" allowScriptAccess="always" allowFullScreen="true" type="application/x-shockwave-flash" pluginspage="//www.macromedia.com/go/getflashplayer" src="' +
                    d.pluginPath + d.flashName + '" flashvars="' + c.join("&") + '" width="' + j + '" height="' + m + '" class="mejs-shim"></embed>';
                break;
            case "youtube":
                d = a.url.substr(a.url.lastIndexOf("=") + 1);
                youtubeSettings = {
                    container: l,
                    containerId: l.id,
                    pluginMediaElement: n,
                    pluginId: o,
                    videoId: d,
                    height: m,
                    width: j
                };
                mejs.PluginDetector.hasPluginVersion("flash", [10, 0, 0]) ? mejs.YouTubeApi.createFlash(youtubeSettings) : mejs.YouTubeApi.enqueueIframe(youtubeSettings);
                break;
            case "vimeo":
                n.vimeoid = a.url.substr(a.url.lastIndexOf("/") + 1);
                l.innerHTML =
                    '<iframe src="http://player.vimeo.com/video/' + n.vimeoid + '?portrait=0&byline=0&title=0" width="' + j + '" height="' + m + '" frameborder="0" class="mejs-shim"></iframe>'
        }
        b.style.display = "none";
        return n
    }, updateNative: function (a, d) {
        var b = a.htmlMediaElement, c;
        for (c in mejs.HtmlMediaElement) b[c] = mejs.HtmlMediaElement[c];
        d.success(b, b);
        return b
    }
};
mejs.YouTubeApi = {
    isIframeStarted: !1, isIframeLoaded: !1, loadIframeApi: function () {
        if (!this.isIframeStarted) {
            var a = document.createElement("script");
            a.src = "//www.youtube.com/player_api";
            var d = document.getElementsByTagName("script")[0];
            d.parentNode.insertBefore(a, d);
            this.isIframeStarted = true
        }
    }, iframeQueue: [], enqueueIframe: function (a) {
        if (this.isLoaded) this.createIframe(a); else {
            this.loadIframeApi();
            this.iframeQueue.push(a)
        }
    }, createIframe: function (a) {
        var d = a.pluginMediaElement, b = new YT.Player(a.containerId,
            {
                height: a.height,
                width: a.width,
                videoId: a.videoId,
                playerVars: {controls: 0},
                events: {
                    onReady: function () {
                        a.pluginMediaElement.pluginApi = b;
                        mejs.MediaPluginBridge.initPlugin(a.pluginId);
                        setInterval(function () {
                            mejs.YouTubeApi.createEvent(b, d, "timeupdate")
                        }, 250)
                    }, onStateChange: function (a) {
                        mejs.YouTubeApi.handleStateChange(a.data, b, d)
                    }
                }
            })
    }, createEvent: function (a, d, b) {
        b = {type: b, target: d};
        if (a && a.getDuration) {
            d.currentTime = b.currentTime = a.getCurrentTime();
            d.duration = b.duration = a.getDuration();
            b.paused = d.paused;
            b.ended = d.ended;
            b.muted = a.isMuted();
            b.volume = a.getVolume() / 100;
            b.bytesTotal = a.getVideoBytesTotal();
            b.bufferedBytes = a.getVideoBytesLoaded();
            var c = b.bufferedBytes / b.bytesTotal * b.duration;
            b.target.buffered = b.buffered = {
                start: function () {
                    return 0
                }, end: function () {
                    return c
                }, length: 1
            }
        }
        d.dispatchEvent(b.type, b)
    }, iFrameReady: function () {
        for (this.isIframeLoaded = this.isLoaded = true; this.iframeQueue.length > 0;) this.createIframe(this.iframeQueue.pop())
    }, flashPlayers: {}, createFlash: function (a) {
        this.flashPlayers[a.pluginId] =
            a;
        var d,
            b = "//www.youtube.com/apiplayer?enablejsapi=1&amp;playerapiid=" + a.pluginId + "&amp;version=3&amp;autoplay=0&amp;controls=0&amp;modestbranding=1&loop=0";
        if (mejs.MediaFeatures.isIE) {
            d = document.createElement("div");
            a.container.appendChild(d);
            d.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab" id="' + a.pluginId + '" width="' + a.width + '" height="' + a.height + '" class="mejs-shim"><param name="movie" value="' +
                b + '" /><param name="wmode" value="transparent" /><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="true" /></object>'
        } else a.container.innerHTML = '<object type="application/x-shockwave-flash" id="' + a.pluginId + '" data="' + b + '" width="' + a.width + '" height="' + a.height + '" style="visibility: visible; " class="mejs-shim"><param name="allowScriptAccess" value="always"><param name="wmode" value="transparent"></object>'
    }, flashReady: function (a) {
        var d = this.flashPlayers[a], b =
            document.getElementById(a), c = d.pluginMediaElement;
        c.pluginApi = c.pluginElement = b;
        mejs.MediaPluginBridge.initPlugin(a);
        b.cueVideoById(d.videoId);
        a = d.containerId + "_callback";
        window[a] = function (a) {
            mejs.YouTubeApi.handleStateChange(a, b, c)
        };
        b.addEventListener("onStateChange", a);
        setInterval(function () {
            mejs.YouTubeApi.createEvent(b, c, "timeupdate")
        }, 250)
    }, handleStateChange: function (a, d, b) {
        switch (a) {
            case -1:
                b.paused = true;
                b.ended = true;
                mejs.YouTubeApi.createEvent(d, b, "loadedmetadata");
                break;
            case 0:
                b.paused = false;
                b.ended = true;
                mejs.YouTubeApi.createEvent(d, b, "ended");
                break;
            case 1:
                b.paused = false;
                b.ended = false;
                mejs.YouTubeApi.createEvent(d, b, "play");
                mejs.YouTubeApi.createEvent(d, b, "playing");
                break;
            case 2:
                b.paused = true;
                b.ended = false;
                mejs.YouTubeApi.createEvent(d, b, "pause");
                break;
            case 3:
                mejs.YouTubeApi.createEvent(d, b, "progress")
        }
    }
};

function onYouTubePlayerAPIReady() {
    mejs.YouTubeApi.iFrameReady()
}

function onYouTubePlayerReady(a) {
    mejs.YouTubeApi.flashReady(a)
}

window.mejs = mejs;
window.MediaElement = mejs.MediaElement;
(function (a, d) {
    var b = {locale: {strings: {}}, methods: {}};
    b.locale.getLanguage = function () {
        return b.locale || {language: navigator.language}
    };
    b.locale.INIT_LANGUAGE = b.locale.getLanguage();
    b.methods.checkPlain = function (a) {
        var b, d, j = {"&": "&amp;", '"': "&quot;", "<": "&lt;", ">": "&gt;"}, a = String(a);
        for (b in j) if (j.hasOwnProperty(b)) {
            d = RegExp(b, "g");
            a = a.replace(d, j[b])
        }
        return a
    };
    b.methods.formatString = function (a, f) {
        for (var d in f) {
            switch (d.charAt(0)) {
                case "@":
                    f[d] = b.methods.checkPlain(f[d]);
                    break;
                case "!":
                    break;
                default:
                    f[d] =
                        '<em class="placeholder">' + b.methods.checkPlain(f[d]) + "</em>"
            }
            a = a.replace(d, f[d])
        }
        return a
    };
    b.methods.t = function (a, f, d) {
        b.locale.strings && (b.locale.strings[d.context] && b.locale.strings[d.context][a]) && (a = b.locale.strings[d.context][a]);
        f && (a = b.methods.formatString(a, f));
        return a
    };
    b.t = function (a, f, d) {
        if (typeof a === "string" && a.length > 0) {
            var j = b.locale.getLanguage(), d = d || {context: j.language};
            return b.methods.t(a, f, d)
        }
        throw{name: "InvalidArgumentException", message: "First argument is either not a string or empty."};
    };
    d.i18n = b
})(document, mejs);
(function (a) {
    if (mejs.i18n.locale.language && mejs.i18n.locale.strings) a[mejs.i18n.locale.language] = mejs.i18n.locale.strings
})(mejs.i18n.locale.strings);
(function (a) {
    a.de = {
        Fullscreen: "Vollbild",
        "Go Fullscreen": "Vollbild an",
        "Turn off Fullscreen": "Vollbild aus",
        Close: "Schlie\u00dfen"
    }
})(mejs.i18n.locale.strings);
(function (a) {
    a.zh = {
        Fullscreen: "\u5168\u87a2\u5e55",
        "Go Fullscreen": "\u5168\u5c4f\u6a21\u5f0f",
        "Turn off Fullscreen": "\u9000\u51fa\u5168\u5c4f\u6a21\u5f0f",
        Close: "\u95dc\u9589"
    }
})(mejs.i18n.locale.strings);
"undefined" != typeof jQuery ? mejs.$ = jQuery : "undefined" != typeof ender && (mejs.$ = ender);
(function (a) {
    mejs.MepDefaults = {
        poster: "",
        defaultVideoWidth: 480,
        defaultVideoHeight: 270,
        videoWidth: -1,
        videoHeight: -1,
        defaultAudioWidth: 400,
        defaultAudioHeight: 30,
        defaultSeekBackwardInterval: function (a) {
            return a.duration * 0.05
        },
        defaultSeekForwardInterval: function (a) {
            return a.duration * 0.05
        },
        audioWidth: -1,
        audioHeight: -1,
        startVolume: 0.8,
        loop: false,
        autoRewind: true,
        enableAutosize: true,
        alwaysShowHours: false,
        showTimecodeFrameCount: false,
        framesPerSecond: 25,
        autosizeProgress: true,
        alwaysShowControls: false,
        hideVideoControlsOnLoad: false,
        clickToPlayPause: true,
        iPadUseNativeControls: false,
        iPhoneUseNativeControls: false,
        AndroidUseNativeControls: false,
        features: ["playpause", "current", "progress", "duration", "tracks", "volume", "fullscreen"],
        isVideo: true,
        enableKeyboard: true,
        pauseOtherPlayers: true,
        keyActions: [{
            keys: [32, 179], action: function (a, b) {
                b.paused || b.ended ? b.play() : b.pause()
            }
        }, {
            keys: [38], action: function (a, b) {
                b.setVolume(Math.min(b.volume + 0.1, 1))
            }
        }, {
            keys: [40], action: function (a, b) {
                b.setVolume(Math.max(b.volume - 0.1, 0))
            }
        }, {
            keys: [37, 227], action: function (a,
                                               b) {
                if (!isNaN(b.duration) && b.duration > 0) {
                    if (a.isVideo) {
                        a.showControls();
                        a.startControlsTimer()
                    }
                    var d = Math.max(b.currentTime - a.options.defaultSeekBackwardInterval(b), 0);
                    b.setCurrentTime(d)
                }
            }
        }, {
            keys: [39, 228], action: function (a, b) {
                if (!isNaN(b.duration) && b.duration > 0) {
                    if (a.isVideo) {
                        a.showControls();
                        a.startControlsTimer()
                    }
                    var d = Math.min(b.currentTime + a.options.defaultSeekForwardInterval(b), b.duration);
                    b.setCurrentTime(d)
                }
            }
        }, {
            keys: [70], action: function (a) {
                typeof a.enterFullScreen != "undefined" && (a.isFullScreen ?
                    a.exitFullScreen() : a.enterFullScreen())
            }
        }]
    };
    mejs.mepIndex = 0;
    mejs.players = {};
    mejs.MediaElementPlayer = function (b, f) {
        if (!(this instanceof mejs.MediaElementPlayer)) return new mejs.MediaElementPlayer(b, f);
        this.$media = this.$node = a(b);
        this.node = this.media = this.$media[0];
        if (typeof this.node.player != "undefined") return this.node.player;
        this.node.player = this;
        typeof f == "undefined" && (f = this.$node.data("mejsoptions"));
        this.options = a.extend({}, mejs.MepDefaults, f);
        this.id = "mep_" + mejs.mepIndex++;
        mejs.players[this.id] =
            this;
        this.init();
        return this
    };
    mejs.MediaElementPlayer.prototype = {
        hasFocus: false, controlsAreVisible: true, init: function () {
            var b = this, f = mejs.MediaFeatures, d = a.extend(true, {}, b.options, {
                success: function (a, f) {
                    b.meReady(a, f)
                }, error: function (a) {
                    b.handleError(a)
                }
            }), j = b.media.tagName.toLowerCase();
            b.isDynamic = j !== "audio" && j !== "video";
            b.isVideo = b.isDynamic ? b.options.isVideo : j !== "audio" && b.options.isVideo;
            if (f.isiPad && b.options.iPadUseNativeControls || f.isiPhone && b.options.iPhoneUseNativeControls) {
                b.$media.attr("controls",
                    "controls");
                if (f.isiPad && b.media.getAttribute("autoplay") !== null) {
                    b.media.load();
                    b.media.play()
                }
            } else if (!f.isAndroid || !b.options.AndroidUseNativeControls) {
                b.$media.removeAttr("controls");
                b.container = a('<div id="' + b.id + '" class="mejs-container ' + (mejs.MediaFeatures.svg ? "svg" : "no-svg") + '"><div class="mejs-inner"><div class="mejs-mediaelement"></div><div class="mejs-layers"></div><div class="mejs-controls"></div><div class="mejs-clear"></div></div></div>').addClass(b.$media[0].className).insertBefore(b.$media);
                b.container.addClass((f.isAndroid ? "mejs-android " : "") + (f.isiOS ? "mejs-ios " : "") + (f.isiPad ? "mejs-ipad " : "") + (f.isiPhone ? "mejs-iphone " : "") + (b.isVideo ? "mejs-video " : "mejs-audio "));
                if (f.isiOS) {
                    f = b.$media.clone();
                    b.container.find(".mejs-mediaelement").append(f);
                    b.$media.remove();
                    b.$node = b.$media = f;
                    b.node = b.media = f[0]
                } else b.container.find(".mejs-mediaelement").append(b.$media);
                b.controls = b.container.find(".mejs-controls");
                b.layers = b.container.find(".mejs-layers");
                f = b.isVideo ? "video" : "audio";
                j = f.substring(0,
                    1).toUpperCase() + f.substring(1);
                b.width = b.options[f + "Width"] > 0 || b.options[f + "Width"].toString().indexOf("%") > -1 ? b.options[f + "Width"] : b.media.style.width !== "" && b.media.style.width !== null ? b.media.style.width : b.media.getAttribute("width") !== null ? b.$media.attr("width") : b.options["default" + j + "Width"];
                b.height = b.options[f + "Height"] > 0 || b.options[f + "Height"].toString().indexOf("%") > -1 ? b.options[f + "Height"] : b.media.style.height !== "" && b.media.style.height !== null ? b.media.style.height : b.$media[0].getAttribute("height") !==
                null ? b.$media.attr("height") : b.options["default" + j + "Height"];
                b.setPlayerSize(b.width, b.height);
                d.pluginWidth = b.width;
                d.pluginHeight = b.height
            }
            mejs.MediaElement(b.$media[0], d);
            typeof b.container != "undefined" && b.container.trigger("controlsshown")
        }, showControls: function (a) {
            var b = this;
            if (!b.controlsAreVisible) {
                if (typeof a == "undefined" || a) {
                    b.controls.css("visibility", "visible").stop(true, true).fadeIn(200, function () {
                        b.controlsAreVisible = true;
                        b.container.trigger("controlsshown")
                    });
                    b.container.find(".mejs-control").css("visibility",
                        "visible").stop(true, true).fadeIn(200, function () {
                        b.controlsAreVisible = true
                    })
                } else {
                    b.controls.css("visibility", "visible").css("display", "block");
                    b.container.find(".mejs-control").css("visibility", "visible").css("display", "block");
                    b.controlsAreVisible = true;
                    b.container.trigger("controlsshown")
                }
                b.setControlsSize()
            }
        }, hideControls: function (b) {
            var f = this;
            if (f.controlsAreVisible) if (typeof b == "undefined" || b) {
                f.controls.stop(true, true).fadeOut(200, function () {
                    a(this).css("visibility", "hidden").css("display",
                        "block");
                    f.controlsAreVisible = false;
                    f.container.trigger("controlshidden")
                });
                f.container.find(".mejs-control").stop(true, true).fadeOut(200, function () {
                    a(this).css("visibility", "hidden").css("display", "block")
                })
            } else {
                f.controls.css("visibility", "hidden").css("display", "block");
                f.container.find(".mejs-control").css("visibility", "hidden").css("display", "block");
                f.controlsAreVisible = false;
                f.container.trigger("controlshidden")
            }
        }, controlsTimer: null, startControlsTimer: function (a) {
            var b = this, a = typeof a != "undefined" ?
                a : 1500;
            b.killControlsTimer("start");
            b.controlsTimer = setTimeout(function () {
                b.hideControls();
                b.killControlsTimer("hide")
            }, a)
        }, killControlsTimer: function () {
            if (this.controlsTimer !== null) {
                clearTimeout(this.controlsTimer);
                delete this.controlsTimer;
                this.controlsTimer = null
            }
        }, controlsEnabled: true, disableControls: function () {
            this.killControlsTimer();
            this.hideControls(false);
            this.controlsEnabled = false
        }, enableControls: function () {
            this.showControls(false);
            this.controlsEnabled = true
        }, meReady: function (a, b) {
            var d = this,
                j = mejs.MediaFeatures, m = b.getAttribute("autoplay"),
                m = !(typeof m == "undefined" || m === null || m === "false"), o;
            if (!d.created) {
                d.created = true;
                d.media = a;
                d.domNode = b;
                if ((!j.isAndroid || !d.options.AndroidUseNativeControls) && (!j.isiPad || !d.options.iPadUseNativeControls) && (!j.isiPhone || !d.options.iPhoneUseNativeControls)) {
                    d.buildposter(d, d.controls, d.layers, d.media);
                    d.buildkeyboard(d, d.controls, d.layers, d.media);
                    d.buildoverlays(d, d.controls, d.layers, d.media);
                    d.findTracks();
                    for (o in d.options.features) {
                        j = d.options.features[o];
                        if (d["build" + j]) try {
                            d["build" + j](d, d.controls, d.layers, d.media)
                        } catch (n) {
                        }
                    }
                    d.container.trigger("controlsready");
                    d.setPlayerSize(d.width, d.height);
                    d.setControlsSize();
                    if (d.isVideo) {
                        if (mejs.MediaFeatures.hasTouch) d.$media.bind("touchstart", function () {
                            d.controlsAreVisible ? d.hideControls(false) : d.controlsEnabled && d.showControls(false)
                        }); else {
                            mejs.MediaElementPlayer.prototype.clickToPlayPauseCallback = function () {
                                console.log("media clicked", d.media, d.media.paused);
                                d.options.clickToPlayPause && (d.media.paused ?
                                    d.media.play() : d.media.pause())
                            };
                            d.media.addEventListener("click", d.clickToPlayPauseCallback);
                            d.container.bind("mouseenter mouseover", function () {
                                if (d.controlsEnabled && !d.options.alwaysShowControls) {
                                    d.killControlsTimer("enter");
                                    d.showControls();
                                    d.startControlsTimer(2500)
                                }
                            }).bind("mousemove", function () {
                                if (d.controlsEnabled) {
                                    d.controlsAreVisible || d.showControls();
                                    d.options.alwaysShowControls || d.startControlsTimer(2500)
                                }
                            }).bind("mouseleave", function () {
                                d.controlsEnabled && !d.media.paused && !d.options.alwaysShowControls &&
                                d.startControlsTimer(1E3)
                            })
                        }
                        d.options.hideVideoControlsOnLoad && d.hideControls(false);
                        m && !d.options.alwaysShowControls && d.hideControls();
                        d.options.enableAutosize && d.media.addEventListener("loadedmetadata", function (a) {
                            if (d.options.videoHeight <= 0 && d.domNode.getAttribute("height") === null && !isNaN(a.target.videoHeight)) {
                                d.setPlayerSize(a.target.videoWidth, a.target.videoHeight);
                                d.setControlsSize();
                                d.media.setVideoSize(a.target.videoWidth, a.target.videoHeight)
                            }
                        }, false)
                    }
                    a.addEventListener("play", function () {
                        for (var a in mejs.players) {
                            var b =
                                mejs.players[a];
                            b.id != d.id && d.options.pauseOtherPlayers && !b.paused && !b.ended && b.pause();
                            b.hasFocus = false
                        }
                        d.hasFocus = true
                    }, false);
                    d.media.addEventListener("ended", function () {
                        if (d.options.autoRewind) try {
                            d.media.setCurrentTime(0)
                        } catch (a) {
                        }
                        d.media.pause();
                        d.setProgressRail && d.setProgressRail();
                        d.setCurrentRail && d.setCurrentRail();
                        d.options.loop ? d.media.play() : !d.options.alwaysShowControls && d.controlsEnabled && d.showControls()
                    }, false);
                    d.media.addEventListener("loadedmetadata", function () {
                        d.updateDuration &&
                        d.updateDuration();
                        d.updateCurrent && d.updateCurrent();
                        if (!d.isFullScreen) {
                            d.setPlayerSize(d.width, d.height);
                            d.setControlsSize()
                        }
                    }, false);
                    setTimeout(function () {
                        d.setPlayerSize(d.width, d.height);
                        d.setControlsSize()
                    }, 50);
                    d.globalBind("resize", function () {
                        d.isFullScreen || mejs.MediaFeatures.hasTrueNativeFullScreen && document.webkitIsFullScreen || d.setPlayerSize(d.width, d.height);
                        d.setControlsSize()
                    });
                    d.media.pluginType == "youtube" && d.container.find(".mejs-overlay-play").hide()
                }
                if (m && a.pluginType == "native") {
                    a.load();
                    a.play()
                }
                d.options.success && (typeof d.options.success == "string" ? window[d.options.success](d.media, d.domNode, d) : d.options.success(d.media, d.domNode, d))
            }
        }, handleError: function (a) {
            this.controls.hide();
            this.options.error && this.options.error(a)
        }, setPlayerSize: function (b, d) {
            if (typeof b != "undefined") this.width = b;
            if (typeof d != "undefined") this.height = d;
            if (this.height.toString().indexOf("%") > 0 || this.$node.css("max-width") === "100%" || this.$node[0].currentStyle && this.$node[0].currentStyle.maxWidth === "100%") {
                var g =
                        this.isVideo ? this.media.videoWidth && this.media.videoWidth > 0 ? this.media.videoWidth : this.options.defaultVideoWidth : this.options.defaultAudioWidth,
                    j = this.isVideo ? this.media.videoHeight && this.media.videoHeight > 0 ? this.media.videoHeight : this.options.defaultVideoHeight : this.options.defaultAudioHeight,
                    m = this.container.parent().closest(":visible").width(),
                    g = this.isVideo || !this.options.autosizeProgress ? parseInt(m * j / g, 10) : j;
                if (this.container.parent()[0].tagName.toLowerCase() === "body") {
                    m = a(window).width();
                    g =
                        a(window).height()
                }
                if (g != 0 && m != 0) {
                    this.container.width(m).height(g);
                    this.$media.add(this.container.find(".mejs-shim")).width("100%").height("100%");
                    this.isVideo && this.media.setVideoSize && this.media.setVideoSize(m, g);
                    this.layers.children(".mejs-layer").width("100%").height("100%")
                }
            } else {
                this.container.width(this.width).height(this.height);
                this.layers.children(".mejs-layer").width(this.width).height(this.height)
            }
            m = this.layers.find(".mejs-overlay-play");
            g = m.find(".mejs-overlay-button");
            m.height(this.container.height() -
                this.controls.height());
            g.css("margin-top", "-" + (g.height() / 2 - this.controls.height() / 2).toString() + "px")
        }, setControlsSize: function () {
            var b = 0, d = 0, g = this.controls.find(".mejs-time-rail"), j = this.controls.find(".mejs-time-total");
            this.controls.find(".mejs-time-current");
            this.controls.find(".mejs-time-loaded");
            var m = g.siblings();
            this.options && !this.options.autosizeProgress && (d = parseInt(g.css("width")));
            if (d === 0 || !d) {
                m.each(function () {
                    var d = a(this);
                    d.css("position") != "absolute" && d.is(":visible") && (b = b + a(this).outerWidth(true))
                });
                d = this.controls.width() - b - (g.outerWidth(true) - g.width())
            }
            g.width(d);
            j.width(d - (j.outerWidth(true) - j.width()));
            this.setProgressRail && this.setProgressRail();
            this.setCurrentRail && this.setCurrentRail()
        }, buildposter: function (b, d, g, j) {
            var m = a('<div class="mejs-poster mejs-layer"></div>').appendTo(g), d = b.$media.attr("poster");
            if (b.options.poster !== "") d = b.options.poster;
            d !== "" && d != null ? this.setPoster(d) : m.hide();
            j.addEventListener("play", function () {
                m.hide()
            }, false)
        }, setPoster: function (b) {
            var d = this.container.find(".mejs-poster"),
                g = d.find("img");
            g.length == 0 && (g = a('<img width="100%" height="100%" />').appendTo(d));
            g.attr("src", b);
            d.css({"background-image": "url(" + b + ")"})
        }, buildoverlays: function (b, d, g, j) {
            var m = this;
            if (b.isVideo) {
                var o = a('<div class="mejs-overlay mejs-layer"><div class="mejs-overlay-loading"><span></span></div></div>').hide().appendTo(g),
                    n = a('<div class="mejs-overlay mejs-layer"><div class="mejs-overlay-error"></div></div>').hide().appendTo(g),
                    l = a('<div class="mejs-overlay mejs-layer mejs-overlay-play"><div class="mejs-overlay-button"></div></div>').appendTo(g).click(function () {
                        m.options.clickToPlayPause &&
                        (j.paused ? j.play() : j.pause())
                    });
                j.addEventListener("play", function () {
                    l.hide();
                    o.hide();
                    d.find(".mejs-time-buffering").hide();
                    n.hide()
                }, false);
                j.addEventListener("playing", function () {
                    l.hide();
                    o.hide();
                    d.find(".mejs-time-buffering").hide();
                    n.hide()
                }, false);
                j.addEventListener("seeking", function () {
                    o.show();
                    d.find(".mejs-time-buffering").show()
                }, false);
                j.addEventListener("seeked", function () {
                    o.hide();
                    d.find(".mejs-time-buffering").hide()
                }, false);
                j.addEventListener("pause", function () {
                    mejs.MediaFeatures.isiPhone ||
                    l.show()
                }, false);
                j.addEventListener("waiting", function () {
                    o.show();
                    d.find(".mejs-time-buffering").show()
                }, false);
                j.addEventListener("loadeddata", function () {
                    o.show();
                    d.find(".mejs-time-buffering").show()
                }, false);
                j.addEventListener("canplay", function () {
                    o.hide();
                    d.find(".mejs-time-buffering").hide()
                }, false);
                j.addEventListener("error", function () {
                    o.hide();
                    d.find(".mejs-time-buffering").hide();
                    n.show();
                    n.find("mejs-overlay-error").html("Error loading this resource")
                }, false)
            }
        }, buildkeyboard: function (b, d,
                                    g, j) {
            this.globalBind("keydown", function (a) {
                if (b.hasFocus && b.options.enableKeyboard) for (var d = 0, f = b.options.keyActions.length; d < f; d++) for (var g = b.options.keyActions[d], p = 0, r = g.keys.length; p < r; p++) if (a.keyCode == g.keys[p]) {
                    a.preventDefault();
                    g.action(b, j, a.keyCode);
                    return false
                }
                return true
            });
            this.globalBind("click", function (d) {
                if (a(d.target).closest(".mejs-container").length == 0) b.hasFocus = false
            })
        }, findTracks: function () {
            var b = this, d = b.$media.find("track");
            b.tracks = [];
            d.each(function (d, f) {
                f = a(f);
                b.tracks.push({
                    srclang: f.attr("srclang") ?
                        f.attr("srclang").toLowerCase() : "",
                    src: f.attr("src"),
                    kind: f.attr("kind"),
                    label: f.attr("label") || "",
                    entries: [],
                    isLoaded: false
                })
            })
        }, changeSkin: function (a) {
            this.container[0].className = "mejs-container " + a;
            this.setPlayerSize(this.width, this.height);
            this.setControlsSize()
        }, play: function () {
            this.media.play()
        }, pause: function () {
            this.media.pause()
        }, load: function () {
            this.media.load()
        }, setMuted: function (a) {
            this.media.setMuted(a)
        }, setCurrentTime: function (a) {
            this.media.setCurrentTime(a)
        }, getCurrentTime: function () {
            return this.media.currentTime
        },
        setVolume: function (a) {
            this.media.setVolume(a)
        }, getVolume: function () {
            return this.media.volume
        }, setSrc: function (a) {
            this.media.setSrc(a)
        }, remove: function () {
            var a, b;
            for (a in this.options.features) {
                b = this.options.features[a];
                if (this["clean" + b]) try {
                    this["clean" + b](this)
                } catch (d) {
                }
            }
            this.media.pluginType === "native" ? this.$media.prop("controls", true) : this.media.remove();
            this.isDynamic || this.$node.insertBefore(this.container);
            delete mejs.players[this.id];
            this.container.remove();
            this.globalUnbind();
            delete this.node.player
        }
    };
    var d = function (c, d) {
            var g = {d: [], w: []};
            a.each((c || "").split(" "), function (a, c) {
                var o = c + "." + d;
                if (o.indexOf(".") === 0) {
                    g.d.push(o);
                    g.w.push(o)
                } else g[b.test(c) ? "w" : "d"].push(o)
            });
            g.d = g.d.join(" ");
            g.w = g.w.join(" ");
            return g
        },
        b = /^((after|before)print|(before)?unload|hashchange|message|o(ff|n)line|page(hide|show)|popstate|resize|storage)\b/;
    mejs.MediaElementPlayer.prototype.globalBind = function (b, f, g) {
        b = d(b, this.id);
        b.d && a(document).bind(b.d, f, g);
        b.w && a(window).bind(b.w, f, g)
    };
    mejs.MediaElementPlayer.prototype.globalUnbind =
        function (b, f) {
            b = d(b, this.id);
            b.d && a(document).unbind(b.d, f);
            b.w && a(window).unbind(b.w, f)
        };
    if (typeof jQuery != "undefined") jQuery.fn.mediaelementplayer = function (a) {
        a === false ? this.each(function () {
            var a = jQuery(this).data("mediaelementplayer");
            a && a.remove();
            jQuery(this).removeData("mediaelementplayer")
        }) : this.each(function () {
            jQuery(this).data("mediaelementplayer", new mejs.MediaElementPlayer(this, a))
        });
        return this
    };
    a(document).ready(function () {
        a(".mejs-player").mediaelementplayer()
    });
    window.MediaElementPlayer =
        mejs.MediaElementPlayer
})(mejs.$);
(function (a) {
    a.extend(mejs.MepDefaults, {playpauseText: mejs.i18n.t("Play/Pause")});
    a.extend(MediaElementPlayer.prototype, {
        buildplaypause: function (d, b, c, f) {
            var g = a('<div class="mejs-button mejs-playpause-button mejs-play" ><button type="button" aria-controls="' + this.id + '" title="' + this.options.playpauseText + '" aria-label="' + this.options.playpauseText + '"></button></div>').appendTo(b).click(function (a) {
                a.preventDefault();
                f.paused ? f.play() : f.pause();
                return false
            });
            f.addEventListener("play", function () {
                    g.removeClass("mejs-play").addClass("mejs-pause")
                },
                false);
            f.addEventListener("playing", function () {
                g.removeClass("mejs-play").addClass("mejs-pause")
            }, false);
            f.addEventListener("pause", function () {
                g.removeClass("mejs-pause").addClass("mejs-play")
            }, false);
            f.addEventListener("paused", function () {
                g.removeClass("mejs-pause").addClass("mejs-play")
            }, false)
        }
    })
})(mejs.$);
(function (a) {
    a.extend(mejs.MepDefaults, {stopText: "Stop"});
    a.extend(MediaElementPlayer.prototype, {
        buildstop: function (d, b, c, f) {
            a('<div class="mejs-button mejs-stop-button mejs-stop"><button type="button" aria-controls="' + this.id + '" title="' + this.options.stopText + '" aria-label="' + this.options.stopText + '"></button></div>').appendTo(b).click(function () {
                f.paused || f.pause();
                if (f.currentTime > 0) {
                    f.setCurrentTime(0);
                    f.pause();
                    b.find(".mejs-time-current").width("0px");
                    b.find(".mejs-time-handle").css("left",
                        "0px");
                    b.find(".mejs-time-float-current").html(mejs.Utility.secondsToTimeCode(0));
                    b.find(".mejs-currenttime").html(mejs.Utility.secondsToTimeCode(0));
                    c.find(".mejs-poster").show()
                }
            })
        }
    })
})(mejs.$);
(function (a) {
    a.extend(MediaElementPlayer.prototype, {
        buildprogress: function (d, b, c, f) {
            a('<div class="mejs-time-rail"><span class="mejs-time-total"><span class="mejs-time-buffering"></span><span class="mejs-time-loaded"></span><span class="mejs-time-current"></span><span class="mejs-time-handle"></span><span class="mejs-time-float"><span class="mejs-time-float-current">00:00</span><span class="mejs-time-float-corner"></span></span></span></div>').appendTo(b);
            b.find(".mejs-time-buffering").hide();
            var g =
                    this, j = b.find(".mejs-time-total"), c = b.find(".mejs-time-loaded"), m = b.find(".mejs-time-current"),
                o = b.find(".mejs-time-handle"), n = b.find(".mejs-time-float"), l = b.find(".mejs-time-float-current"),
                p = function (a) {
                    var a = a.pageX, b = j.offset(), c = j.outerWidth(true), d = 0, g = 0;
                    if (f.duration) {
                        a < b.left ? a = b.left : a > c + b.left && (a = c + b.left);
                        g = a - b.left;
                        d = g / c;
                        d = d <= 0.02 ? 0 : d * f.duration;
                        r && d !== f.currentTime && f.setCurrentTime(d);
                        if (!mejs.MediaFeatures.hasTouch) {
                            n.css("left", g);
                            l.html(mejs.Utility.secondsToTimeCode(d));
                            n.show()
                        }
                    }
                },
                r = false;
            j.bind("mousedown", function (a) {
                if (a.which === 1) {
                    r = true;
                    p(a);
                    g.globalBind("mousemove.dur", function (a) {
                        p(a)
                    });
                    g.globalBind("mouseup.dur", function () {
                        r = false;
                        n.hide();
                        g.globalUnbind(".dur")
                    });
                    return false
                }
            }).bind("mouseenter", function () {
                g.globalBind("mousemove.dur", function (a) {
                    p(a)
                });
                mejs.MediaFeatures.hasTouch || n.show()
            }).bind("mouseleave", function () {
                if (!r) {
                    g.globalUnbind(".dur");
                    n.hide()
                }
            });
            f.addEventListener("progress", function (a) {
                d.setProgressRail(a);
                d.setCurrentRail(a)
            }, false);
            f.addEventListener("timeupdate",
                function (a) {
                    d.setProgressRail(a);
                    d.setCurrentRail(a)
                }, false);
            g.loaded = c;
            g.total = j;
            g.current = m;
            g.handle = o
        }, setProgressRail: function (a) {
            var b = a != void 0 ? a.target : this.media, c = null;
            b && b.buffered && b.buffered.length > 0 && b.buffered.end && b.duration ? c = b.buffered.end(0) / b.duration : b && b.bytesTotal != void 0 && b.bytesTotal > 0 && b.bufferedBytes != void 0 ? c = b.bufferedBytes / b.bytesTotal : a && (a.lengthComputable && a.total != 0) && (c = a.loaded / a.total);
            if (c !== null) {
                c = Math.min(1, Math.max(0, c));
                this.loaded && this.total && this.loaded.width(this.total.width() *
                    c)
            }
        }, setCurrentRail: function () {
            if (this.media.currentTime != void 0 && this.media.duration && this.total && this.handle) {
                var a = Math.round(this.total.width() * this.media.currentTime / this.media.duration),
                    b = a - Math.round(this.handle.outerWidth(true) / 2);
                this.current.width(a);
                this.handle.css("left", b)
            }
        }
    })
})(mejs.$);
(function (a) {
    a.extend(mejs.MepDefaults, {duration: -1, timeAndDurationSeparator: " <span> / </span> "});
    a.extend(MediaElementPlayer.prototype, {
        buildcurrent: function (d, b, c, f) {
            a('<div class="mejs-time"><span class="mejs-currenttime">' + (d.options.alwaysShowHours ? "00:" : "") + (d.options.showTimecodeFrameCount ? "00:00:00" : "00:00") + "</span></div>").appendTo(b);
            this.currenttime = this.controls.find(".mejs-currenttime");
            f.addEventListener("timeupdate", function () {
                d.updateCurrent()
            }, false)
        }, buildduration: function (d,
                                    b, c, f) {
            if (b.children().last().find(".mejs-currenttime").length > 0) a(this.options.timeAndDurationSeparator + '<span class="mejs-duration">' + (this.options.duration > 0 ? mejs.Utility.secondsToTimeCode(this.options.duration, this.options.alwaysShowHours || this.media.duration > 3600, this.options.showTimecodeFrameCount, this.options.framesPerSecond || 25) : (d.options.alwaysShowHours ? "00:" : "") + (d.options.showTimecodeFrameCount ? "00:00:00" : "00:00")) + "</span>").appendTo(b.find(".mejs-time")); else {
                b.find(".mejs-currenttime").parent().addClass("mejs-currenttime-container");
                a('<div class="mejs-time mejs-duration-container"><span class="mejs-duration">' + (this.options.duration > 0 ? mejs.Utility.secondsToTimeCode(this.options.duration, this.options.alwaysShowHours || this.media.duration > 3600, this.options.showTimecodeFrameCount, this.options.framesPerSecond || 25) : (d.options.alwaysShowHours ? "00:" : "") + (d.options.showTimecodeFrameCount ? "00:00:00" : "00:00")) + "</span></div>").appendTo(b)
            }
            this.durationD = this.controls.find(".mejs-duration");
            f.addEventListener("timeupdate", function () {
                    d.updateDuration()
                },
                false)
        }, updateCurrent: function () {
            this.currenttime && this.currenttime.html(mejs.Utility.secondsToTimeCode(this.media.currentTime, this.options.alwaysShowHours || this.media.duration > 3600, this.options.showTimecodeFrameCount, this.options.framesPerSecond || 25))
        }, updateDuration: function () {
            this.container.toggleClass("mejs-long-video", this.media.duration > 3600);
            if (this.durationD && (this.options.duration > 0 || this.media.duration)) this.durationD.html(mejs.Utility.secondsToTimeCode(this.options.duration > 0 ? this.options.duration :
                this.media.duration, this.options.alwaysShowHours, this.options.showTimecodeFrameCount, this.options.framesPerSecond || 25))
        }
    })
})(mejs.$);
(function (a) {
    a.extend(mejs.MepDefaults, {
        muteText: mejs.i18n.t("Mute Toggle"),
        hideVolumeOnTouchDevices: true,
        audioVolume: "horizontal",
        videoVolume: "vertical"
    });
    a.extend(MediaElementPlayer.prototype, {
        buildvolume: function (d, b, c, f) {
            if (!mejs.MediaFeatures.hasTouch || !this.options.hideVolumeOnTouchDevices) {
                var g = this, j = g.isVideo ? g.options.videoVolume : g.options.audioVolume,
                    m = j == "horizontal" ? a('<div class="mejs-button mejs-volume-button mejs-mute"><button type="button" aria-controls="' + g.id + '" title="' + g.options.muteText +
                        '" aria-label="' + g.options.muteText + '"></button></div><div class="mejs-horizontal-volume-slider"><div class="mejs-horizontal-volume-total"></div><div class="mejs-horizontal-volume-current"></div><div class="mejs-horizontal-volume-handle"></div></div>').appendTo(b) : a('<div class="mejs-button mejs-volume-button mejs-mute"><button type="button" aria-controls="' + g.id + '" title="' + g.options.muteText + '" aria-label="' + g.options.muteText + '"></button><div class="mejs-volume-slider"><div class="mejs-volume-total"></div><div class="mejs-volume-current"></div><div class="mejs-volume-handle"></div></div></div>').appendTo(b),
                    o = g.container.find(".mejs-volume-slider, .mejs-horizontal-volume-slider"),
                    n = g.container.find(".mejs-volume-total, .mejs-horizontal-volume-total"),
                    l = g.container.find(".mejs-volume-current, .mejs-horizontal-volume-current"),
                    p = g.container.find(".mejs-volume-handle, .mejs-horizontal-volume-handle"), r = function (a, b) {
                        if (!o.is(":visible") && typeof b == "undefined") {
                            o.show();
                            r(a, true);
                            o.hide()
                        } else {
                            a = Math.max(0, a);
                            a = Math.min(a, 1);
                            a == 0 ? m.removeClass("mejs-mute").addClass("mejs-unmute") : m.removeClass("mejs-unmute").addClass("mejs-mute");
                            if (j == "vertical") {
                                var c = n.height(), d = n.position(), f = c - c * a;
                                p.css("top", Math.round(d.top + f - p.height() / 2));
                                l.height(c - f);
                                l.css("top", d.top + f)
                            } else {
                                c = n.width();
                                d = n.position();
                                c = c * a;
                                p.css("left", Math.round(d.left + c - p.width() / 2));
                                l.width(Math.round(c))
                            }
                        }
                    }, w = function (a) {
                        var b = null, c = n.offset();
                        if (j == "vertical") {
                            b = n.height();
                            parseInt(n.css("top").replace(/px/, ""), 10);
                            b = (b - (a.pageY - c.top)) / b;
                            if (c.top == 0 || c.left == 0) return
                        } else {
                            b = n.width();
                            b = (a.pageX - c.left) / b
                        }
                        b = Math.max(0, b);
                        b = Math.min(b, 1);
                        r(b);
                        b == 0 ? f.setMuted(true) :
                            f.setMuted(false);
                        f.setVolume(b)
                    }, v = false, s = false;
                m.hover(function () {
                    o.show();
                    s = true
                }, function () {
                    s = false;
                    !v && j == "vertical" && o.hide()
                });
                o.bind("mouseover", function () {
                    s = true
                }).bind("mousedown", function (a) {
                    w(a);
                    g.globalBind("mousemove.vol", function (a) {
                        w(a)
                    });
                    g.globalBind("mouseup.vol", function () {
                        v = false;
                        g.globalUnbind(".vol");
                        !s && j == "vertical" && o.hide()
                    });
                    v = true;
                    return false
                });
                m.find("button").click(function () {
                    f.setMuted(!f.muted)
                });
                f.addEventListener("volumechange", function () {
                    if (!v) if (f.muted) {
                        r(0);
                        m.removeClass("mejs-mute").addClass("mejs-unmute")
                    } else {
                        r(f.volume);
                        m.removeClass("mejs-unmute").addClass("mejs-mute")
                    }
                }, false);
                if (g.container.is(":visible")) {
                    r(d.options.startVolume);
                    d.options.startVolume === 0 && f.setMuted(true);
                    f.pluginType === "native" && f.setVolume(d.options.startVolume)
                }
            }
        }
    })
})(mejs.$);
(function (a) {
    a.extend(mejs.MepDefaults, {
        usePluginFullScreen: true, newWindowCallback: function () {
            return ""
        }, fullscreenText: mejs.i18n.t("Fullscreen")
    });
    a.extend(MediaElementPlayer.prototype, {
        isFullScreen: false,
        isNativeFullScreen: false,
        docStyleOverflow: null,
        isInIframe: false,
        buildfullscreen: function (d, b, c, f) {
            if (d.isVideo) {
                d.isInIframe = window.location != window.parent.location;
                if (mejs.MediaFeatures.hasTrueNativeFullScreen) {
                    c = function () {
                        if (mejs.MediaFeatures.isFullScreen()) {
                            d.isNativeFullScreen = true;
                            d.setControlsSize()
                        } else {
                            d.isNativeFullScreen =
                                false;
                            d.exitFullScreen()
                        }
                    };
                    mejs.MediaFeatures.hasMozNativeFullScreen ? d.globalBind(mejs.MediaFeatures.fullScreenEventName, c) : d.container.bind(mejs.MediaFeatures.fullScreenEventName, c)
                }
                var g = this,
                    j = a('<div class="mejs-button mejs-fullscreen-button"><button type="button" aria-controls="' + g.id + '" title="' + g.options.fullscreenText + '" aria-label="' + g.options.fullscreenText + '"></button></div>').appendTo(b);
                if (g.media.pluginType === "native" || !g.options.usePluginFullScreen && !mejs.MediaFeatures.isFirefox) j.click(function () {
                    mejs.MediaFeatures.hasTrueNativeFullScreen &&
                    mejs.MediaFeatures.isFullScreen() || d.isFullScreen ? d.exitFullScreen() : d.enterFullScreen()
                }); else {
                    var m = null;
                    var b = document.createElement("x"), c = document.documentElement, o = window.getComputedStyle;
                    if ("pointerEvents" in b.style) {
                        b.style.pointerEvents = "auto";
                        b.style.pointerEvents = "x";
                        c.appendChild(b);
                        o = o && o(b, "").pointerEvents === "auto";
                        c.removeChild(b);
                        b = !!o
                    } else b = false;
                    if (b && !mejs.MediaFeatures.isOpera) {
                        var n = false, l = function () {
                            if (n) {
                                for (var a in p) p[a].hide();
                                j.css("pointer-events", "");
                                g.controls.css("pointer-events",
                                    "");
                                g.media.removeEventListener("click", g.clickToPlayPauseCallback);
                                n = false
                            }
                        }, p = {}, b = ["top", "left", "right", "bottom"], r, w = function () {
                            var a = j.offset().left - g.container.offset().left,
                                b = j.offset().top - g.container.offset().top, c = j.outerWidth(true),
                                d = j.outerHeight(true), f = g.container.width(), l = g.container.height();
                            for (r in p) p[r].css({position: "absolute", top: 0, left: 0});
                            p.top.width(f).height(b);
                            p.left.width(a).height(d).css({top: b});
                            p.right.width(f - a - c).height(d).css({top: b, left: a + c});
                            p.bottom.width(f).height(l -
                                d - b).css({top: b + d})
                        };
                        g.globalBind("resize", function () {
                            w()
                        });
                        r = 0;
                        for (c = b.length; r < c; r++) p[b[r]] = a('<div class="mejs-fullscreen-hover" />').appendTo(g.container).mouseover(l).hide();
                        j.on("mouseover", function () {
                            if (!g.isFullScreen) {
                                var a = j.offset(), b = d.container.offset();
                                f.positionFullscreenButton(a.left - b.left, a.top - b.top, false);
                                j.css("pointer-events", "none");
                                g.controls.css("pointer-events", "none");
                                g.media.addEventListener("click", g.clickToPlayPauseCallback);
                                for (r in p) p[r].show();
                                w();
                                n = true
                            }
                        });
                        f.addEventListener("fullscreenchange",
                            function () {
                                g.isFullScreen = !g.isFullScreen;
                                g.isFullScreen ? g.media.removeEventListener("click", g.clickToPlayPauseCallback) : g.media.addEventListener("click", g.clickToPlayPauseCallback);
                                l()
                            });
                        g.globalBind("mousemove", function (a) {
                            if (n) {
                                var b = j.offset();
                                if (a.pageY < b.top || a.pageY > b.top + j.outerHeight(true) || a.pageX < b.left || a.pageX > b.left + j.outerWidth(true)) {
                                    j.css("pointer-events", "");
                                    g.controls.css("pointer-events", "");
                                    n = false
                                }
                            }
                        })
                    } else j.on("mouseover", function () {
                        if (m !== null) {
                            clearTimeout(m);
                            delete m
                        }
                        var a =
                            j.offset(), b = d.container.offset();
                        f.positionFullscreenButton(a.left - b.left, a.top - b.top, true)
                    }).on("mouseout", function () {
                        if (m !== null) {
                            clearTimeout(m);
                            delete m
                        }
                        m = setTimeout(function () {
                            f.hideFullscreenButton()
                        }, 1500)
                    })
                }
                d.fullscreenBtn = j;
                g.globalBind("keydown", function (a) {
                    (mejs.MediaFeatures.hasTrueNativeFullScreen && mejs.MediaFeatures.isFullScreen() || g.isFullScreen) && a.keyCode == 27 && d.exitFullScreen()
                })
            }
        },
        cleanfullscreen: function (a) {
            a.exitFullScreen()
        },
        containerSizeTimeout: null,
        enterFullScreen: function () {
            var d =
                this;
            if (!(d.media.pluginType !== "native" && (mejs.MediaFeatures.isFirefox || d.options.usePluginFullScreen))) {
                docStyleOverflow = document.documentElement.style.overflow;
                document.documentElement.style.overflow = "hidden";
                normalHeight = d.container.height();
                normalWidth = d.container.width();
                if (d.media.pluginType === "native") if (mejs.MediaFeatures.hasTrueNativeFullScreen) {
                    mejs.MediaFeatures.requestFullScreen(d.container[0]);
                    d.isInIframe && setTimeout(function f() {
                        d.isNativeFullScreen && (a(window).width() !== screen.width ?
                            d.exitFullScreen() : setTimeout(f, 500))
                    }, 500)
                } else if (mejs.MediaFeatures.hasSemiNativeFullScreen) {
                    d.media.webkitEnterFullscreen();
                    return
                }
                if (d.isInIframe) {
                    var b = d.options.newWindowCallback(this);
                    if (b !== "") if (mejs.MediaFeatures.hasTrueNativeFullScreen) setTimeout(function () {
                        if (!d.isNativeFullScreen) {
                            d.pause();
                            window.open(b, d.id, "top=0,left=0,width=" + screen.availWidth + ",height=" + screen.availHeight + ",resizable=yes,scrollbars=no,status=no,toolbar=no")
                        }
                    }, 250); else {
                        d.pause();
                        window.open(b, d.id, "top=0,left=0,width=" +
                            screen.availWidth + ",height=" + screen.availHeight + ",resizable=yes,scrollbars=no,status=no,toolbar=no");
                        return
                    }
                }
                d.container.addClass("mejs-container-fullscreen").width("100%").height("100%");
                d.containerSizeTimeout = setTimeout(function () {
                    d.container.css({width: "100%", height: "100%"});
                    d.setControlsSize()
                }, 500);
                if (d.media.pluginType === "native") d.$media.width("100%").height("100%"); else {
                    d.container.find(".mejs-shim").width("100%").height("100%");
                    d.media.setVideoSize(a(window).width(), a(window).height())
                }
                d.layers.children("div").width("100%").height("100%");
                d.fullscreenBtn && d.fullscreenBtn.removeClass("mejs-fullscreen").addClass("mejs-unfullscreen");
                d.setControlsSize();
                d.isFullScreen = true
            }
        },
        exitFullScreen: function () {
            clearTimeout(this.containerSizeTimeout);
            if (this.media.pluginType !== "native" && mejs.MediaFeatures.isFirefox) this.media.setFullscreen(false); else {
                mejs.MediaFeatures.hasTrueNativeFullScreen && (mejs.MediaFeatures.isFullScreen() || this.isFullScreen) && mejs.MediaFeatures.cancelFullScreen();
                document.documentElement.style.overflow = docStyleOverflow;
                this.container.removeClass("mejs-container-fullscreen").width(normalWidth).height(normalHeight);
                if (this.media.pluginType === "native") this.$media.width(normalWidth).height(normalHeight); else {
                    this.container.find(".mejs-shim").width(normalWidth).height(normalHeight);
                    this.media.setVideoSize(normalWidth, normalHeight)
                }
                this.layers.children("div").width(normalWidth).height(normalHeight);
                this.fullscreenBtn.removeClass("mejs-unfullscreen").addClass("mejs-fullscreen");
                this.setControlsSize();
                this.isFullScreen = false
            }
        }
    })
})(mejs.$);
(function (a) {
    a.extend(mejs.MepDefaults, {
        startLanguage: "",
        tracksText: mejs.i18n.t("Captions/Subtitles"),
        hideCaptionsButtonWhenEmpty: true,
        toggleCaptionsButtonWhenOnlyOne: false,
        slidesSelector: ""
    });
    a.extend(MediaElementPlayer.prototype, {
        hasChapters: false, buildtracks: function (d, b, c, f) {
            if (d.tracks.length != 0) {
                d.chapters = a('<div class="mejs-chapters mejs-layer"></div>').prependTo(c).hide();
                d.captions = a('<div class="mejs-captions-layer mejs-layer"><div class="mejs-captions-position mejs-captions-position-hover"><span class="mejs-captions-text"></span></div></div>').prependTo(c).hide();
                d.captionsText = d.captions.find(".mejs-captions-text");
                d.captionsButton = a('<div class="mejs-button mejs-captions-button"><button type="button" aria-controls="' + this.id + '" title="' + this.options.tracksText + '" aria-label="' + this.options.tracksText + '"></button><div class="mejs-captions-selector"><ul><li><input type="radio" name="' + d.id + '_captions" id="' + d.id + '_captions_none" value="none" checked="checked" /><label for="' + d.id + '_captions_none">' + mejs.i18n.t("None") + "</label></li></ul></div></div>").appendTo(b);
                for (b = c = 0; b < d.tracks.length; b++) d.tracks[b].kind == "subtitles" && c++;
                this.options.toggleCaptionsButtonWhenOnlyOne && c == 1 ? d.captionsButton.on("click", function () {
                    d.setTrack(d.selectedTrack == null ? d.tracks[0].srclang : "none")
                }) : d.captionsButton.hover(function () {
                    a(this).find(".mejs-captions-selector").css("visibility", "visible")
                }, function () {
                    a(this).find(".mejs-captions-selector").css("visibility", "hidden")
                }).on("click", "input[type=radio]", function () {
                    lang = this.value;
                    d.setTrack(lang)
                });
                d.options.alwaysShowControls ?
                    d.container.find(".mejs-captions-position").addClass("mejs-captions-position-hover") : d.container.bind("controlsshown", function () {
                        d.container.find(".mejs-captions-position").addClass("mejs-captions-position-hover")
                    }).bind("controlshidden", function () {
                        f.paused || d.container.find(".mejs-captions-position").removeClass("mejs-captions-position-hover")
                    });
                d.trackToLoad = -1;
                d.selectedTrack = null;
                d.isLoadingTrack = false;
                for (b = 0; b < d.tracks.length; b++) d.tracks[b].kind == "subtitles" && d.addTrackButton(d.tracks[b].srclang,
                    d.tracks[b].label);
                d.loadNextTrack();
                f.addEventListener("timeupdate", function () {
                    d.displayCaptions()
                }, false);
                if (d.options.slidesSelector != "") {
                    d.slidesContainer = a(d.options.slidesSelector);
                    f.addEventListener("timeupdate", function () {
                        d.displaySlides()
                    }, false)
                }
                f.addEventListener("loadedmetadata", function () {
                    d.displayChapters()
                }, false);
                d.container.hover(function () {
                    if (d.hasChapters) {
                        d.chapters.css("visibility", "visible");
                        d.chapters.fadeIn(200).height(d.chapters.find(".mejs-chapter").outerHeight())
                    }
                }, function () {
                    d.hasChapters &&
                    !f.paused && d.chapters.fadeOut(200, function () {
                        a(this).css("visibility", "hidden");
                        a(this).css("display", "block")
                    })
                });
                d.node.getAttribute("autoplay") !== null && d.chapters.css("visibility", "hidden")
            }
        }, setTrack: function (a) {
            var b;
            if (a == "none") {
                this.selectedTrack = null;
                this.captionsButton.removeClass("mejs-captions-enabled")
            } else for (b = 0; b < this.tracks.length; b++) if (this.tracks[b].srclang == a) {
                this.selectedTrack == null && this.captionsButton.addClass("mejs-captions-enabled");
                this.selectedTrack = this.tracks[b];
                this.captions.attr("lang",
                    this.selectedTrack.srclang);
                this.displayCaptions();
                break
            }
        }, loadNextTrack: function () {
            this.trackToLoad++;
            if (this.trackToLoad < this.tracks.length) {
                this.isLoadingTrack = true;
                this.loadTrack(this.trackToLoad)
            } else {
                this.isLoadingTrack = false;
                this.checkForTracks()
            }
        }, loadTrack: function (d) {
            var b = this, c = b.tracks[d];
            a.ajax({
                url: c.src, dataType: "text", success: function (a) {
                    c.entries = typeof a == "string" && /<tt\s+xml/ig.exec(a) ? mejs.TrackFormatParser.dfxp.parse(a) : mejs.TrackFormatParser.webvvt.parse(a);
                    c.isLoaded = true;
                    b.enableTrackButton(c.srclang, c.label);
                    b.loadNextTrack();
                    c.kind == "chapters" && b.media.addEventListener("play", function () {
                        b.media.duration > 0 && b.displayChapters(c)
                    }, false);
                    c.kind == "slides" && b.setupSlides(c)
                }, error: function () {
                    b.loadNextTrack()
                }
            })
        }, enableTrackButton: function (d, b) {
            b === "" && (b = mejs.language.codes[d] || d);
            this.captionsButton.find("input[value=" + d + "]").prop("disabled", false).siblings("label").html(b);
            this.options.startLanguage == d && a("#" + this.id + "_captions_" + d).click();
            this.adjustLanguageBox()
        },
        addTrackButton: function (d, b) {
            b === "" && (b = mejs.language.codes[d] || d);
            this.captionsButton.find("ul").append(a('<li><input type="radio" name="' + this.id + '_captions" id="' + this.id + "_captions_" + d + '" value="' + d + '" disabled="disabled" /><label for="' + this.id + "_captions_" + d + '">' + b + " (loading)</label></li>"));
            this.adjustLanguageBox();
            this.container.find(".mejs-captions-translations option[value=" + d + "]").remove()
        }, adjustLanguageBox: function () {
            this.captionsButton.find(".mejs-captions-selector").height(this.captionsButton.find(".mejs-captions-selector ul").outerHeight(true) +
                this.captionsButton.find(".mejs-captions-translations").outerHeight(true))
        }, checkForTracks: function () {
            var a = false;
            if (this.options.hideCaptionsButtonWhenEmpty) {
                for (i = 0; i < this.tracks.length; i++) if (this.tracks[i].kind == "subtitles") {
                    a = true;
                    break
                }
                if (!a) {
                    this.captionsButton.hide();
                    this.setControlsSize()
                }
            }
        }, displayCaptions: function () {
            if (typeof this.tracks != "undefined") {
                var a, b = this.selectedTrack;
                if (b != null && b.isLoaded) for (a = 0; a < b.entries.times.length; a++) if (this.media.currentTime >= b.entries.times[a].start &&
                    this.media.currentTime <= b.entries.times[a].stop) {
                    this.captionsText.html(b.entries.text[a]);
                    this.captions.show().height(0);
                    return
                }
                this.captions.hide()
            }
        }, setupSlides: function (a) {
            this.slides = a;
            this.slides.entries.imgs = [this.slides.entries.text.length];
            this.showSlide(0)
        }, showSlide: function (d) {
            if (!(typeof this.tracks == "undefined" || typeof this.slidesContainer == "undefined")) {
                var b = this, c = b.slides.entries.text[d], f = b.slides.entries.imgs[d];
                if (typeof f == "undefined" || typeof f.fadeIn == "undefined") b.slides.entries.imgs[d] =
                    f = a('<img src="' + c + '">').on("load", function () {
                        f.appendTo(b.slidesContainer).hide().fadeIn().siblings(":visible").fadeOut()
                    }); else if (!f.is(":visible") && !f.is(":animated")) {
                    console.log("showing existing slide");
                    f.fadeIn().siblings(":visible").fadeOut()
                }
            }
        }, displaySlides: function () {
            if (typeof this.slides != "undefined") {
                var a = this.slides, b;
                for (b = 0; b < a.entries.times.length; b++) if (this.media.currentTime >= a.entries.times[b].start && this.media.currentTime <= a.entries.times[b].stop) {
                    this.showSlide(b);
                    break
                }
            }
        },
        displayChapters: function () {
            var a;
            for (a = 0; a < this.tracks.length; a++) if (this.tracks[a].kind == "chapters" && this.tracks[a].isLoaded) {
                this.drawChapters(this.tracks[a]);
                this.hasChapters = true;
                break
            }
        }, drawChapters: function (d) {
            var b = this, c, f, g = f = 0;
            b.chapters.empty();
            for (c = 0; c < d.entries.times.length; c++) {
                f = d.entries.times[c].stop - d.entries.times[c].start;
                f = Math.floor(f / b.media.duration * 100);
                if (f + g > 100 || c == d.entries.times.length - 1 && f + g < 100) f = 100 - g;
                b.chapters.append(a('<div class="mejs-chapter" rel="' + d.entries.times[c].start +
                    '" style="left: ' + g.toString() + "%;width: " + f.toString() + '%;"><div class="mejs-chapter-block' + (c == d.entries.times.length - 1 ? " mejs-chapter-block-last" : "") + '"><span class="ch-title">' + d.entries.text[c] + '</span><span class="ch-time">' + mejs.Utility.secondsToTimeCode(d.entries.times[c].start) + "&ndash;" + mejs.Utility.secondsToTimeCode(d.entries.times[c].stop) + "</span></div></div>"));
                g = g + f
            }
            b.chapters.find("div.mejs-chapter").click(function () {
                b.media.setCurrentTime(parseFloat(a(this).attr("rel")));
                b.media.paused &&
                b.media.play()
            });
            b.chapters.show()
        }
    });
    mejs.language = {
        codes: {
            af: "Afrikaans",
            sq: "Albanian",
            ar: "Arabic",
            be: "Belarusian",
            bg: "Bulgarian",
            ca: "Catalan",
            zh: "Chinese",
            "zh-cn": "Chinese Simplified",
            "zh-tw": "Chinese Traditional",
            hr: "Croatian",
            cs: "Czech",
            da: "Danish",
            nl: "Dutch",
            en: "English",
            et: "Estonian",
            tl: "Filipino",
            fi: "Finnish",
            fr: "French",
            gl: "Galician",
            de: "German",
            el: "Greek",
            ht: "Haitian Creole",
            iw: "Hebrew",
            hi: "Hindi",
            hu: "Hungarian",
            is: "Icelandic",
            id: "Indonesian",
            ga: "Irish",
            it: "Italian",
            ja: "Japanese",
            ko: "Korean",
            lv: "Latvian",
            lt: "Lithuanian",
            mk: "Macedonian",
            ms: "Malay",
            mt: "Maltese",
            no: "Norwegian",
            fa: "Persian",
            pl: "Polish",
            pt: "Portuguese",
            ro: "Romanian",
            ru: "Russian",
            sr: "Serbian",
            sk: "Slovak",
            sl: "Slovenian",
            es: "Spanish",
            sw: "Swahili",
            sv: "Swedish",
            tl: "Tagalog",
            th: "Thai",
            tr: "Turkish",
            uk: "Ukrainian",
            vi: "Vietnamese",
            cy: "Welsh",
            yi: "Yiddish"
        }
    };
    mejs.TrackFormatParser = {
        webvvt: {
            pattern_identifier: /^([a-zA-z]+-)?[0-9]+$/,
            pattern_timecode: /^([0-9]{2}:[0-9]{2}:[0-9]{2}([,.][0-9]{1,3})?) --\> ([0-9]{2}:[0-9]{2}:[0-9]{2}([,.][0-9]{3})?)(.*)$/,
            parse: function (d) {
                for (var b = 0, d = mejs.TrackFormatParser.split2(d, /\r?\n/), c = {
                    text: [],
                    times: []
                }, f, g; b < d.length; b++) if (this.pattern_identifier.exec(d[b])) {
                    b++;
                    if ((f = this.pattern_timecode.exec(d[b])) && b < d.length) {
                        b++;
                        g = d[b];
                        for (b++; d[b] !== "" && b < d.length;) {
                            g = g + "\n" + d[b];
                            b++
                        }
                        g = a.trim(g).replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig, "<a href='$1' target='_blank'>$1</a>");
                        c.text.push(g);
                        c.times.push({
                            start: mejs.Utility.convertSMPTEtoSeconds(f[1]) == 0 ? 0.2 : mejs.Utility.convertSMPTEtoSeconds(f[1]),
                            stop: mejs.Utility.convertSMPTEtoSeconds(f[3]), settings: f[5]
                        })
                    }
                }
                return c
            }
        }, dfxp: {
            parse: function (d) {
                var d = a(d).filter("tt"), b = 0, b = d.children("div").eq(0), c = b.find("p"),
                    b = d.find("#" + b.attr("style")), f, g, d = {text: [], times: []};
                if (b.length) {
                    g = b.removeAttr("id").get(0).attributes;
                    if (g.length) {
                        f = {};
                        for (b = 0; b < g.length; b++) f[g[b].name.split(":")[1]] = g[b].value
                    }
                }
                for (b = 0; b < c.length; b++) {
                    var j;
                    g = {start: null, stop: null, style: null};
                    if (c.eq(b).attr("begin")) g.start = mejs.Utility.convertSMPTEtoSeconds(c.eq(b).attr("begin"));
                    if (!g.start && c.eq(b - 1).attr("end")) g.start = mejs.Utility.convertSMPTEtoSeconds(c.eq(b - 1).attr("end"));
                    if (c.eq(b).attr("end")) g.stop = mejs.Utility.convertSMPTEtoSeconds(c.eq(b).attr("end"));
                    if (!g.stop && c.eq(b + 1).attr("begin")) g.stop = mejs.Utility.convertSMPTEtoSeconds(c.eq(b + 1).attr("begin"));
                    if (f) {
                        j = "";
                        for (var m in f) j = j + (m + ":" + f[m] + ";")
                    }
                    if (j) g.style = j;
                    if (g.start == 0) g.start = 0.2;
                    d.times.push(g);
                    g = a.trim(c.eq(b).html()).replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig,
                        "<a href='$1' target='_blank'>$1</a>");
                    d.text.push(g);
                    if (d.times.start == 0) d.times.start = 2
                }
                return d
            }
        }, split2: function (a, b) {
            return a.split(b)
        }
    };
    if ("x\n\ny".split(/\n/gi).length != 3) mejs.TrackFormatParser.split2 = function (a, b) {
        var c = [], f = "", g;
        for (g = 0; g < a.length; g++) {
            f = f + a.substring(g, g + 1);
            if (b.test(f)) {
                c.push(f.replace(b, ""));
                f = ""
            }
        }
        c.push(f);
        return c
    }
})(mejs.$);
(function (a) {
    a.extend(mejs.MepDefaults, {
        contextMenuItems: [{
            render: function (a) {
                return typeof a.enterFullScreen == "undefined" ? null : a.isFullScreen ? mejs.i18n.t("Turn off Fullscreen") : mejs.i18n.t("Go Fullscreen")
            }, click: function (a) {
                a.isFullScreen ? a.exitFullScreen() : a.enterFullScreen()
            }
        }, {
            render: function (a) {
                return a.media.muted ? mejs.i18n.t("Unmute") : mejs.i18n.t("Mute")
            }, click: function (a) {
                a.media.muted ? a.setMuted(false) : a.setMuted(true)
            }
        }, {isSeparator: true}, {
            render: function () {
                return mejs.i18n.t("Download Video")
            },
            click: function (a) {
                window.location.href = a.media.currentSrc
            }
        }]
    });
    a.extend(MediaElementPlayer.prototype, {
        buildcontextmenu: function (d) {
            d.contextMenu = a('<div class="mejs-contextmenu"></div>').appendTo(a("body")).hide();
            d.container.bind("contextmenu", function (a) {
                if (d.isContextMenuEnabled) {
                    a.preventDefault();
                    d.renderContextMenu(a.clientX - 1, a.clientY - 1);
                    return false
                }
            });
            d.container.bind("click", function () {
                d.contextMenu.hide()
            });
            d.contextMenu.bind("mouseleave", function () {
                d.startContextMenuTimer()
            })
        }, cleancontextmenu: function (a) {
            a.contextMenu.remove()
        },
        isContextMenuEnabled: true, enableContextMenu: function () {
            this.isContextMenuEnabled = true
        }, disableContextMenu: function () {
            this.isContextMenuEnabled = false
        }, contextMenuTimeout: null, startContextMenuTimer: function () {
            var a = this;
            a.killContextMenuTimer();
            a.contextMenuTimer = setTimeout(function () {
                a.hideContextMenu();
                a.killContextMenuTimer()
            }, 750)
        }, killContextMenuTimer: function () {
            var a = this.contextMenuTimer;
            if (a != null) {
                clearTimeout(a);
                delete a
            }
        }, hideContextMenu: function () {
            this.contextMenu.hide()
        }, renderContextMenu: function (d,
                                        b) {
            for (var c = this, f = "", g = c.options.contextMenuItems, j = 0, m = g.length; j < m; j++) if (g[j].isSeparator) f = f + '<div class="mejs-contextmenu-separator"></div>'; else {
                var o = g[j].render(c);
                o != null && (f = f + ('<div class="mejs-contextmenu-item" data-itemindex="' + j + '" id="element-' + Math.random() * 1E6 + '">' + o + "</div>"))
            }
            c.contextMenu.empty().append(a(f)).css({top: b, left: d}).show();
            c.contextMenu.find(".mejs-contextmenu-item").each(function () {
                var b = a(this), d = parseInt(b.data("itemindex"), 10), f = c.options.contextMenuItems[d];
                typeof f.show != "undefined" && f.show(b, c);
                b.click(function () {
                    typeof f.click != "undefined" && f.click(c);
                    c.contextMenu.hide()
                })
            });
            setTimeout(function () {
                c.killControlsTimer("rev3")
            }, 100)
        }
    })
})(mejs.$);
(function (a) {
    a.extend(mejs.MepDefaults, {postrollCloseText: mejs.i18n.t("Close")});
    a.extend(MediaElementPlayer.prototype, {
        buildpostroll: function (d, b, c) {
            var f = this.container.find('link[rel="postroll"]').attr("href");
            if (typeof f !== "undefined") {
                d.postroll = a('<div class="mejs-postroll-layer mejs-layer"><a class="mejs-postroll-close" onclick="$(this).parent().hide();return false;">' + this.options.postrollCloseText + '</a><div class="mejs-postroll-layer-content"></div></div>').prependTo(c).hide();
                this.media.addEventListener("ended",
                    function () {
                        a.ajax({
                            dataType: "html", url: f, success: function (a) {
                                c.find(".mejs-postroll-layer-content").html(a)
                            }
                        });
                        d.postroll.show()
                    }, false)
            }
        }
    })
})(mejs.$);
mejs.MediaElementDefaults.pluginPath = "";
mejs.MediaElementDefaults.flashName = "/static/flashmediaelement-363caf5d69226ac0f541057f95369311.swf";
mejs.MediaElementDefaults.plugins = ["flash"];
(function (a, d) {
    var b = a.document, c = a.Modernizr, f = function (a) {
        return a.charAt(0).toUpperCase() + a.slice(1)
    }, g = ["Moz", "Webkit", "O", "Ms"], j = function (a) {
        var c = b.documentElement.style, d;
        if (typeof c[a] === "string") return a;
        for (var a = f(a), j = 0, l = g.length; j < l; j++) {
            d = g[j] + a;
            if (typeof c[d] === "string") return d
        }
    }, m = j("transform"), o = j("transitionProperty"), n = {
        csstransforms: function () {
            return !!m
        }, csstransforms3d: function () {
            var a = !!j("perspective");
            if (a) {
                var a = "@media (" + ["", "-o-", "-moz-", "-ms-", "-webkit-", "-khtml-"].join("transform-3d),(") +
                    "modernizr)", b = d("<style>" + a + "{#modernizr{height:3px}}</style>").appendTo("head"),
                    c = d('<div id="modernizr" />').appendTo("html"), a = c.height() === 3;
                c.remove();
                b.remove()
            }
            return a
        }, csstransitions: function () {
            return !!o
        }
    }, l;
    if (c) for (l in n) c.hasOwnProperty(l) || c.addTest(l, n[l]); else {
        var c = a.Modernizr = {_version: "1.6ish: miniModernizr for Isotope"}, p = " ", r;
        for (l in n) {
            r = n[l]();
            c[l] = r;
            p = p + (" " + (r ? "" : "no-") + l)
        }
        d("html").addClass(p)
    }
    if (c.csstransforms) {
        var w = c.csstransforms3d ? {
            translate: function (a) {
                return "translate3d(" +
                    a[0] + "px, " + a[1] + "px, 0) "
            }, scale: function (a) {
                return "scale3d(" + a + ", " + a + ", 1) "
            }
        } : {
            translate: function (a) {
                return "translate(" + a[0] + "px, " + a[1] + "px) "
            }, scale: function (a) {
                return "scale(" + a + ") "
            }
        }, v = function (a, b, c) {
            var f = d.data(a, "isoTransform") || {}, g = {}, j, l = {};
            g[b] = c;
            d.extend(f, g);
            for (j in f) {
                b = f[j];
                l[j] = w[j](b)
            }
            j = (l.translate || "") + (l.scale || "");
            d.data(a, "isoTransform", f);
            a.style[m] = j
        };
        d.cssNumber.scale = true;
        d.cssHooks.scale = {
            set: function (a, b) {
                v(a, "scale", b)
            }, get: function (a) {
                return (a = d.data(a, "isoTransform")) &&
                a.scale ? a.scale : 1
            }
        };
        d.fx.step.scale = function (a) {
            d.cssHooks.scale.set(a.elem, a.now + a.unit)
        };
        d.cssNumber.translate = true;
        d.cssHooks.translate = {
            set: function (a, b) {
                v(a, "translate", b)
            }, get: function (a) {
                return (a = d.data(a, "isoTransform")) && a.translate ? a.translate : [0, 0]
            }
        }
    }
    var s, x;
    if (c.csstransitions) {
        s = {
            WebkitTransitionProperty: "webkitTransitionEnd",
            MozTransitionProperty: "transitionend",
            OTransitionProperty: "oTransitionEnd otransitionend",
            transitionProperty: "transitionend"
        }[o];
        x = j("transitionDuration")
    }
    var B =
        d.event, E = d.event.handle ? "handle" : "dispatch", y;
    B.special.smartresize = {
        setup: function () {
            d(this).bind("resize", B.special.smartresize.handler)
        }, teardown: function () {
            d(this).unbind("resize", B.special.smartresize.handler)
        }, handler: function (a, b) {
            var c = this, d = arguments;
            a.type = "smartresize";
            y && clearTimeout(y);
            y = setTimeout(function () {
                B[E].apply(c, d)
            }, b === "execAsap" ? 0 : 100)
        }
    };
    d.fn.smartresize = function (a) {
        return a ? this.bind("smartresize", a) : this.trigger("smartresize", ["execAsap"])
    };
    d.Isotope = function (a, b, c) {
        this.element =
            d(b);
        this._create(a);
        this._init(c)
    };
    var D = ["width", "height"], t = d(a);
    d.Isotope.settings = {
        resizable: true,
        layoutMode: "masonry",
        containerClass: "isotope",
        itemClass: "isotope-item",
        hiddenClass: "isotope-hidden",
        hiddenStyle: {opacity: 0, scale: 0.001},
        visibleStyle: {opacity: 1, scale: 1},
        containerStyle: {position: "relative", overflow: "hidden"},
        animationEngine: "best-available",
        animationOptions: {queue: false, duration: 800},
        sortBy: "original-order",
        sortAscending: true,
        resizesContainer: true,
        transformsEnabled: true,
        itemPositionDataEnabled: false
    };
    d.Isotope.prototype = {
        _create: function (a) {
            this.options = d.extend({}, d.Isotope.settings, a);
            this.styleQueue = [];
            this.elemCount = 0;
            a = this.element[0].style;
            this.originalStyle = {};
            var b = D.slice(0), c;
            for (c in this.options.containerStyle) b.push(c);
            for (var f = 0, g = b.length; f < g; f++) {
                c = b[f];
                this.originalStyle[c] = a[c] || ""
            }
            this.element.css(this.options.containerStyle);
            this._updateAnimationEngine();
            this._updateUsingTransforms();
            this.options.getSortData = d.extend(this.options.getSortData, {
                "original-order": function (a, b) {
                    b.elemCount++;
                    return b.elemCount
                }, random: function () {
                    return Math.random()
                }
            });
            this.reloadItems();
            this.offset = {
                left: parseInt(this.element.css("padding-left") || 0, 10),
                top: parseInt(this.element.css("padding-top") || 0, 10)
            };
            var j = this;
            setTimeout(function () {
                j.element.addClass(j.options.containerClass)
            }, 0);
            this.options.resizable && t.bind("smartresize.isotope", function () {
                j.resize()
            });
            this.element.delegate("." + this.options.hiddenClass, "click", function () {
                return false
            })
        }, _getAtoms: function (a) {
            var b = this.options.itemSelector, a =
                b ? a.filter(b).add(a.find(b)) : a, b = {position: "absolute"}, a = a.filter(function (a, b) {
                return b.nodeType === 1
            });
            if (this.usingTransforms) {
                b.left = 0;
                b.top = 0
            }
            a.css(b).addClass(this.options.itemClass);
            this.updateSortData(a, true);
            return a
        }, _init: function (a) {
            this.$filteredAtoms = this._filter(this.$allAtoms);
            this._sort();
            this.reLayout(a)
        }, option: function (a) {
            if (d.isPlainObject(a)) {
                this.options = d.extend(true, this.options, a);
                for (var b in a) {
                    a = "_update" + f(b);
                    if (this[a]) this[a]()
                }
            }
        }, _updateAnimationEngine: function () {
            var a;
            switch (this.options.animationEngine.toLowerCase().replace(/[ _\-]/g, "")) {
                case "css":
                case "none":
                    a = false;
                    break;
                case "jquery":
                    a = true;
                    break;
                default:
                    a = !c.csstransitions
            }
            this.isUsingJQueryAnimation = a;
            this._updateUsingTransforms()
        }, _updateTransformsEnabled: function () {
            this._updateUsingTransforms()
        }, _updateUsingTransforms: function () {
            var a = this.usingTransforms = this.options.transformsEnabled && c.csstransforms && c.csstransitions && !this.isUsingJQueryAnimation;
            if (!a) {
                delete this.options.hiddenStyle.scale;
                delete this.options.visibleStyle.scale
            }
            this.getPositionStyles =
                a ? this._translate : this._positionAbs
        }, _filter: function (a) {
            var b = this.options.filter === "" ? "*" : this.options.filter;
            if (!b) return a;
            var c = this.options.hiddenClass, d = "." + c, f = a.filter(d), g = f;
            if (b !== "*") {
                g = f.filter(b);
                d = a.not(d).not(b).addClass(c);
                this.styleQueue.push({$el: d, style: this.options.hiddenStyle})
            }
            this.styleQueue.push({$el: g, style: this.options.visibleStyle});
            g.removeClass(c);
            return a.filter(b)
        }, updateSortData: function (a, b) {
            var c = this, f = this.options.getSortData, g, j;
            a.each(function () {
                g = d(this);
                j =
                    {};
                for (var a in f) j[a] = !b && a === "original-order" ? d.data(this, "isotope-sort-data")[a] : f[a](g, c);
                d.data(this, "isotope-sort-data", j)
            })
        }, _sort: function () {
            var a = this.options.sortBy, b = this._getSorter, c = this.options.sortAscending ? 1 : -1;
            this.$filteredAtoms.sort(function (d, f) {
                var g = b(d, a), j = b(f, a);
                if (g === j && a !== "original-order") {
                    g = b(d, "original-order");
                    j = b(f, "original-order")
                }
                return (g > j ? 1 : g < j ? -1 : 0) * c
            })
        }, _getSorter: function (a, b) {
            return d.data(a, "isotope-sort-data")[b]
        }, _translate: function (a, b) {
            return {
                translate: [a,
                    b]
            }
        }, _positionAbs: function (a, b) {
            return {left: a, top: b}
        }, _pushPosition: function (a, b, c) {
            var b = Math.round(b + this.offset.left), c = Math.round(c + this.offset.top),
                d = this.getPositionStyles(b, c);
            this.styleQueue.push({$el: a, style: d});
            this.options.itemPositionDataEnabled && a.data("isotope-item-position", {x: b, y: c})
        }, layout: function (a, b) {
            var c = this.options.layoutMode;
            this["_" + c + "Layout"](a);
            if (this.options.resizesContainer) {
                c = this["_" + c + "GetContainerSize"]();
                this.styleQueue.push({$el: this.element, style: c})
            }
            this._processStyleQueue(a,
                b);
            this.isLaidOut = true
        }, _processStyleQueue: function (a, b) {
            var f = !this.isLaidOut ? "css" : this.isUsingJQueryAnimation ? "animate" : "css",
                g = this.options.animationOptions, j = this.options.onLayout, k, l, m, n;
            l = function (a, b) {
                b.$el[f](b.style, g)
            };
            if (this._isInserting && this.isUsingJQueryAnimation) l = function (a, b) {
                k = b.$el.hasClass("no-transition") ? "css" : f;
                b.$el[k](b.style, g)
            }; else if (b || j || g.complete) {
                var o = false, p = [b, j, g.complete], r = this;
                m = true;
                n = function () {
                    if (!o) {
                        for (var b, c = 0, d = p.length; c < d; c++) {
                            b = p[c];
                            typeof b ===
                            "function" && b.call(r.element, a, r)
                        }
                        o = true
                    }
                };
                if (this.isUsingJQueryAnimation && f === "animate") {
                    g.complete = n;
                    m = false
                } else if (c.csstransitions) {
                    for (var j = 0, t = this.styleQueue[0], t = t && t.$el; !t || !t.length;) {
                        t = this.styleQueue[j++];
                        if (!t) return;
                        t = t.$el
                    }
                    if (parseFloat(getComputedStyle(t[0])[x]) > 0) {
                        l = function (a, b) {
                            b.$el[f](b.style, g).one(s, n)
                        };
                        m = false
                    }
                }
            }
            d.each(this.styleQueue, l);
            m && n();
            this.styleQueue = []
        }, resize: function () {
            this["_" + this.options.layoutMode + "ResizeChanged"]() && this.reLayout()
        }, reLayout: function (a) {
            this["_" +
            this.options.layoutMode + "Reset"]();
            this.layout(this.$filteredAtoms, a)
        }, addItems: function (a, b) {
            var c = this._getAtoms(a);
            this.$allAtoms = this.$allAtoms.add(c);
            b && b(c)
        }, insert: function (a, b) {
            this.element.append(a);
            var c = this;
            this.addItems(a, function (a) {
                a = c._filter(a);
                c._addHideAppended(a);
                c._sort();
                c.reLayout();
                c._revealAppended(a, b)
            })
        }, appended: function (a, b) {
            var c = this;
            this.addItems(a, function (a) {
                c._addHideAppended(a);
                c.layout(a);
                c._revealAppended(a, b)
            })
        }, _addHideAppended: function (a) {
            this.$filteredAtoms =
                this.$filteredAtoms.add(a);
            a.addClass("no-transition");
            this._isInserting = true;
            this.styleQueue.push({$el: a, style: this.options.hiddenStyle})
        }, _revealAppended: function (a, b) {
            var c = this;
            setTimeout(function () {
                a.removeClass("no-transition");
                c.styleQueue.push({$el: a, style: c.options.visibleStyle});
                c._isInserting = false;
                c._processStyleQueue(a, b)
            }, 10)
        }, reloadItems: function () {
            this.$allAtoms = this._getAtoms(this.element.children())
        }, remove: function (a, b) {
            this.$allAtoms = this.$allAtoms.not(a);
            this.$filteredAtoms = this.$filteredAtoms.not(a);
            var c = this, d = function () {
                a.remove();
                b && b.call(c.element)
            };
            if (a.filter(":not(." + this.options.hiddenClass + ")").length) {
                this.styleQueue.push({$el: a, style: this.options.hiddenStyle});
                this._sort();
                this.reLayout(d)
            } else d()
        }, shuffle: function (a) {
            this.updateSortData(this.$allAtoms);
            this.options.sortBy = "random";
            this._sort();
            this.reLayout(a)
        }, destroy: function () {
            var a = this.usingTransforms, b = this.options;
            this.$allAtoms.removeClass(b.hiddenClass + " " + b.itemClass).each(function () {
                var b = this.style;
                b.position = "";
                b.top =
                    "";
                b.left = "";
                b.opacity = "";
                a && (b[m] = "")
            });
            var c = this.element[0].style, d;
            for (d in this.originalStyle) c[d] = this.originalStyle[d];
            this.element.unbind(".isotope").undelegate("." + b.hiddenClass, "click").removeClass(b.containerClass).removeData("isotope");
            t.unbind(".isotope")
        }, _getSegments: function (a) {
            var b = this.options.layoutMode, c = a ? "rowHeight" : "columnWidth", d = a ? "height" : "width",
                a = a ? "rows" : "cols", g = this.element[d](),
                d = this.options[b] && this.options[b][c] || this.$filteredAtoms["outer" + f(d)](true) || g,
                g = Math.floor(g /
                    d), g = Math.max(g, 1);
            this[b][a] = g;
            this[b][c] = d
        }, _checkIfSegmentsChanged: function (a) {
            var b = this.options.layoutMode, c = a ? "rows" : "cols", d = this[b][c];
            this._getSegments(a);
            return this[b][c] !== d
        }, _masonryReset: function () {
            this.masonry = {};
            this._getSegments();
            var a = this.masonry.cols;
            for (this.masonry.colYs = []; a--;) this.masonry.colYs.push(0)
        }, _masonryLayout: function (a) {
            var b = this, c = b.masonry;
            a.each(function () {
                var a = d(this), f = Math.ceil(a.outerWidth(true) / c.columnWidth), f = Math.min(f, c.cols);
                if (f === 1) b._masonryPlaceBrick(a,
                    c.colYs); else {
                    var g = c.cols + 1 - f, j = [], l, m;
                    for (m = 0; m < g; m++) {
                        l = c.colYs.slice(m, m + f);
                        j[m] = Math.max.apply(Math, l)
                    }
                    b._masonryPlaceBrick(a, j)
                }
            })
        }, _masonryPlaceBrick: function (a, b) {
            for (var c = Math.min.apply(Math, b), d = 0, f = 0, g = b.length; f < g; f++) if (b[f] === c) {
                d = f;
                break
            }
            this._pushPosition(a, this.masonry.columnWidth * d, c);
            c = c + a.outerHeight(true);
            g = this.masonry.cols + 1 - g;
            for (f = 0; f < g; f++) this.masonry.colYs[d + f] = c
        }, _masonryGetContainerSize: function () {
            return {height: Math.max.apply(Math, this.masonry.colYs)}
        }, _masonryResizeChanged: function () {
            return this._checkIfSegmentsChanged()
        },
        _fitRowsReset: function () {
            this.fitRows = {x: 0, y: 0, height: 0}
        }, _fitRowsLayout: function (a) {
            var b = this, c = this.element.width(), f = this.fitRows;
            a.each(function () {
                var a = d(this), g = a.outerWidth(true), j = a.outerHeight(true);
                if (f.x !== 0 && g + f.x > c) {
                    f.x = 0;
                    f.y = f.height
                }
                b._pushPosition(a, f.x, f.y);
                f.height = Math.max(f.y + j, f.height);
                f.x = f.x + g
            })
        }, _fitRowsGetContainerSize: function () {
            return {height: this.fitRows.height}
        }, _fitRowsResizeChanged: function () {
            return true
        }, _cellsByRowReset: function () {
            this.cellsByRow = {index: 0};
            this._getSegments();
            this._getSegments(true)
        }, _cellsByRowLayout: function (a) {
            var b = this, c = this.cellsByRow;
            a.each(function () {
                var a = d(this), f = Math.floor(c.index / c.cols),
                    g = (c.index % c.cols + 0.5) * c.columnWidth - a.outerWidth(true) / 2,
                    f = (f + 0.5) * c.rowHeight - a.outerHeight(true) / 2;
                b._pushPosition(a, g, f);
                c.index++
            })
        }, _cellsByRowGetContainerSize: function () {
            return {height: Math.ceil(this.$filteredAtoms.length / this.cellsByRow.cols) * this.cellsByRow.rowHeight + this.offset.top}
        }, _cellsByRowResizeChanged: function () {
            return this._checkIfSegmentsChanged()
        },
        _straightDownReset: function () {
            this.straightDown = {y: 0}
        }, _straightDownLayout: function (a) {
            var b = this;
            a.each(function () {
                var a = d(this);
                b._pushPosition(a, 0, b.straightDown.y);
                b.straightDown.y = b.straightDown.y + a.outerHeight(true)
            })
        }, _straightDownGetContainerSize: function () {
            return {height: this.straightDown.y}
        }, _straightDownResizeChanged: function () {
            return true
        }, _masonryHorizontalReset: function () {
            this.masonryHorizontal = {};
            this._getSegments(true);
            var a = this.masonryHorizontal.rows;
            for (this.masonryHorizontal.rowXs =
                     []; a--;) this.masonryHorizontal.rowXs.push(0)
        }, _masonryHorizontalLayout: function (a) {
            var b = this, c = b.masonryHorizontal;
            a.each(function () {
                var a = d(this), f = Math.ceil(a.outerHeight(true) / c.rowHeight), f = Math.min(f, c.rows);
                if (f === 1) b._masonryHorizontalPlaceBrick(a, c.rowXs); else {
                    var g = c.rows + 1 - f, j = [], l, m;
                    for (m = 0; m < g; m++) {
                        l = c.rowXs.slice(m, m + f);
                        j[m] = Math.max.apply(Math, l)
                    }
                    b._masonryHorizontalPlaceBrick(a, j)
                }
            })
        }, _masonryHorizontalPlaceBrick: function (a, b) {
            for (var c = Math.min.apply(Math, b), d = 0, f = 0, g = b.length; f <
            g; f++) if (b[f] === c) {
                d = f;
                break
            }
            this._pushPosition(a, c, this.masonryHorizontal.rowHeight * d);
            c = c + a.outerWidth(true);
            g = this.masonryHorizontal.rows + 1 - g;
            for (f = 0; f < g; f++) this.masonryHorizontal.rowXs[d + f] = c
        }, _masonryHorizontalGetContainerSize: function () {
            return {width: Math.max.apply(Math, this.masonryHorizontal.rowXs)}
        }, _masonryHorizontalResizeChanged: function () {
            return this._checkIfSegmentsChanged(true)
        }, _fitColumnsReset: function () {
            this.fitColumns = {x: 0, y: 0, width: 0}
        }, _fitColumnsLayout: function (a) {
            var b = this, c =
                this.element.height(), f = this.fitColumns;
            a.each(function () {
                var a = d(this), g = a.outerWidth(true), j = a.outerHeight(true);
                if (f.y !== 0 && j + f.y > c) {
                    f.x = f.width;
                    f.y = 0
                }
                b._pushPosition(a, f.x, f.y);
                f.width = Math.max(f.x + g, f.width);
                f.y = f.y + j
            })
        }, _fitColumnsGetContainerSize: function () {
            return {width: this.fitColumns.width}
        }, _fitColumnsResizeChanged: function () {
            return true
        }, _cellsByColumnReset: function () {
            this.cellsByColumn = {index: 0};
            this._getSegments();
            this._getSegments(true)
        }, _cellsByColumnLayout: function (a) {
            var b = this, c =
                this.cellsByColumn;
            a.each(function () {
                var a = d(this), f = c.index % c.rows,
                    g = (Math.floor(c.index / c.rows) + 0.5) * c.columnWidth - a.outerWidth(true) / 2,
                    f = (f + 0.5) * c.rowHeight - a.outerHeight(true) / 2;
                b._pushPosition(a, g, f);
                c.index++
            })
        }, _cellsByColumnGetContainerSize: function () {
            return {width: Math.ceil(this.$filteredAtoms.length / this.cellsByColumn.rows) * this.cellsByColumn.columnWidth}
        }, _cellsByColumnResizeChanged: function () {
            return this._checkIfSegmentsChanged(true)
        }, _straightAcrossReset: function () {
            this.straightAcross =
                {x: 0}
        }, _straightAcrossLayout: function (a) {
            var b = this;
            a.each(function () {
                var a = d(this);
                b._pushPosition(a, b.straightAcross.x, 0);
                b.straightAcross.x = b.straightAcross.x + a.outerWidth(true)
            })
        }, _straightAcrossGetContainerSize: function () {
            return {width: this.straightAcross.x}
        }, _straightAcrossResizeChanged: function () {
            return true
        }
    };
    d.fn.imagesLoaded = function (a) {
        function b() {
            a.call(f, g)
        }

        function c(a) {
            a = a.target;
            if (a.src !== l && d.inArray(a, m) === -1) {
                m.push(a);
                if (--j <= 0) {
                    setTimeout(b);
                    g.unbind(".imagesLoaded", c)
                }
            }
        }

        var f =
                this, g = f.find("img").add(f.filter("img")), j = g.length,
            l = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==", m = [];
        j || b();
        g.bind("load.imagesLoaded error.imagesLoaded", c).each(function () {
            var a = this.src;
            this.src = l;
            this.src = a
        });
        return f
    };
    d.fn.isotope = function (b, c) {
        if (typeof b === "string") {
            var f = Array.prototype.slice.call(arguments, 1);
            this.each(function () {
                var c = d.data(this, "isotope");
                c ? !d.isFunction(c[b]) || b.charAt(0) === "_" ? a.console && a.console.error("no such method '" + b + "' for isotope instance") :
                    c[b].apply(c, f) : a.console && a.console.error("cannot call methods on isotope prior to initialization; attempted to call method '" + b + "'")
            })
        } else this.each(function () {
            var a = d.data(this, "isotope");
            if (a) {
                a.option(b);
                a._init(c)
            } else d.data(this, "isotope", new d.Isotope(b, this, c))
        });
        return this
    }
})(window, jQuery);

function editItem(a) {
    var d = "/items/" + a;
    $("body").on("focus", "input,textarea", function () {
        var a = $(this);
        a.data("val", a.val())
    }).on("blur", "input,textarea,select", function () {
        var a = $(this), c = a.data("content-index"), f = a.data("compare-index"), g = a.data("val"), j = a.val();
        if (j && j != g) {
            g = {};
            g[a.attr("name")] = j;
            if (c > -1) {
                a = $("#item_contents_attributes_" + c + "_id");
                g[a.attr("name")] = a.val();
                if (f > -1) {
                    c = $("#item_contents_attributes_" + c + "_compares_attributes_" + f + "_id");
                    g[c.attr("name")] = c.val()
                }
            }
            $.ajax({
                url: d, type: "PUT",
                data: g, dataType: "html"
            })
        }
    }).on("click", "a.add,a.up,a.down,a.delete", function () {
        var a = $(this), c = function () {
            $.ajax({
                url: a.attr("href"), type: a.data("method"), success: function (a) {
                    a = $(a);
                    $("#contents").html(a)
                }
            })
        };
        a.data("method") == "delete" ? $.confirm("\u4f60\u786e\u5b9a\u8981\u6267\u884c\u8fd9\u4e2a\u64cd\u4f5c\uff1f", function (a) {
            a && c()
        }) : c();
        return false
    }).on("ajax:success", "a.move", function (a, c) {
        $("#contents").html(c)
    })
}

function trips_list_filter_init() {
    var a = $(".trips-filter-dropdown").css("visibility", "hidden").show(), d;
    a.on("mouseenter", function () {
        clearTimeout(d)
    }).on("mouseleave", function () {
        d = setTimeout(function () {
            a.hide()
        }, 200)
    });
    $(".contents-filter .filter-item").on("mouseenter", function () {
        var b = $(this).attr("rel");
        if (b) {
            clearTimeout(d);
            a.hide();
            $(".trips-filter-" + b).show()
        }
    }).on("mouseleave", function () {
        d = setTimeout(function () {
            a.hide()
        }, 200)
    });
    $(function () {
        a.scrollbar().css("visibility", "visible").hide()
    })
}

function destinations_list_filter_init() {
    var a = $(".filter-item");
    a.on("click", function (d) {
        d.preventDefault();
        a.removeClass("selected");
        $(".destinations-list-v2").hide();
        $("#dc-" + $(this).data("category")).show();
        $(this).addClass("selected");
        return false
    })
}

function destinations_children_slider(a) {
    var d = $(a), b = $(".content-list", d), a = $("li", b), c = a.length, f = $(".btn-prev", d), d = $(".btn-next", d);
    $("ul", b).width((a.first().outerWidth() + 20) * c);
    var g = b.width();
    f.click(function () {
        b.animate({scrollLeft: b.scrollLeft() - g * 0.8}, 300);
        return false
    });
    d.click(function () {
        b.animate({scrollLeft: b.scrollLeft() + g * 0.8}, 300);
        return false
    })
}

$.fn.indexBanners = function () {
    function a() {
        var a = {};
        if (WindowSize.width > g) {
            var c = Math.floor(WindowSize.width / g * j);
            $.extend(a, {
                width: WindowSize.width,
                height: c,
                marginTop: -Math.ceil(c / 2),
                marginLeft: -Math.floor(WindowSize.width / 2) + "px"
            })
        } else $.extend(a, {width: g, height: j, marginLeft: "-800px", marginTop: "-215px", top: "50%"});
        b.css(a)
    }

    function d(a) {
        a < 0 ? a = f - 1 : a > f - 1 && (a = 0);
        var d = b.hide().eq(a).show();
        d.data("src") && d.attr("src", d.data("src"));
        c.hide();
        a < c.length && c.eq(a).show();
        n.removeClass("active").eq(a).addClass("active")
    }

    var b = $(".banner", this), c = $(".cover-info", this), f = b.length, g = 1600, j = 430;
    b.hide();
    c.hide();
    for (var m = $('<div class="page-control">'), o = 0; o < f; o++) m.append('<span class="item">');
    m.css("margin-left", -(f * 25) / 2);
    this.append(m);
    var n = $(".item", m).on("click", function () {
        d(n.index(this))
    });
    d($.rnd(0, f - 1));
    a();
    WindowResizeListener.add(a);
    return this
};

function app_home() {
    $(".rc .h").click(function () {
        var a = $(this);
        a.hasClass("opened") ? a.closest(".rc").animate({left: 232}, 200, function () {
            a.removeClass("opened")
        }) : a.closest(".rc").animate({left: 362}, 200, function () {
            a.addClass("opened")
        })
    });
    var a = $(".app-home"), d = $(".app-home-slider", a).width() / 3, b = $(".index-navi a").click(function (c) {
        c.preventDefault();
        var f = $(this), c = f.data("index");
        a.animate({scrollLeft: d * c}, 300, function () {
            b.removeClass("selected");
            f.addClass("selected")
        })
    });
    $(location.hash).click()
}

function collapseAttractions(a) {
    var d = $("li", a);
    if (d.length > 6) {
        d.each(function (a) {
            a > 5 && $(this).hide()
        });
        var b = $('<div class="expand-link"><span>\u5c55\u5f00</span></div>').click(function () {
            d.show();
            b.remove()
        });
        $(a).after(b)
    }
}
