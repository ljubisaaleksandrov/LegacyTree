! function(t, n) {
    "object" == typeof exports && "object" == typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define([], n) : "object" == typeof exports ? exports.Treeviz = n() : t.Treeviz = n()
}(window, function() {
    return function(t) {
        var n = {};

        function e(i) {
            if (n[i]) return n[i].exports;
            var r = n[i] = {
                i: i,
                l: !1,
                exports: {}
            };
            return t[i].call(r.exports, r, r.exports, e), r.l = !0, r.exports
        }
        return e.m = t, e.c = n, e.d = function(t, n, i) {
            e.o(t, n) || Object.defineProperty(t, n, {
                enumerable: !0,
                get: i
            })
        }, e.r = function(t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(t, "__esModule", {
                value: !0
            })
        }, e.t = function(t, n) {
            if (1 & n && (t = e(t)), 8 & n) return t;
            if (4 & n && "object" == typeof t && t && t.__esModule) return t;
            var i = Object.create(null);
            if (e.r(i), Object.defineProperty(i, "default", {
                    enumerable: !0,
                    value: t
                }), 2 & n && "string" != typeof t)
                for (var r in t) e.d(i, r, function(n) {
                    return t[n]
                }.bind(null, r));
            return i
        }, e.n = function(t) {
            var n = t && t.__esModule ? function() {
                return t.default
            } : function() {
                return t
            };
            return e.d(n, "a", n), n
        }, e.o = function(t, n) {
            return Object.prototype.hasOwnProperty.call(t, n)
        }, e.p = "/", e(e.s = 0)
    }([function(t, n, e) {
        "use strict";
        e.r(n);
        const i = (t, n, e) => {
            const {
                horizontalLayout: i,
                nodeHeight: r,
                nodeWidth: a,
                linkShape: f
            } = e;
			// console.log(t.x + " - " + t.y + " - " + r + " - " + n.x + " - " + n.y + " - " + a)
            return "orthogonal" === f ? i ? `M ${t.y} ${t.x+r/2}\n        L ${(t.y+n.y+a)/2} ${t.x+r/2},\n        L  ${(t.y+n.y+a)/2} ${n.x+r/2},\n          ${n.y+a} ${n.x+r/2}` : `M ${t.x+a/2} ${t.y}\n        L ${t.x+a/2} ${(t.y+n.y+r)/2},\n        L  ${n.x+a/2} ${(t.y+n.y+r)/2},\n          ${n.x+a/2} ${n.y+r} ` : i ? `M ${t.y} ${t.x+r/2}\n        C ${(t.y+n.y+a)/2} ${t.x+r/2},\n          ${(t.y+n.y+a)/2} ${n.x+r/2},\n          ${n.y+a} ${n.x+r/2}` : `M ${t.x+a/2} ${t.y+r}\n        C ${t.x+a/2} ${(t.y+n.y)/2+r},\n          ${n.x+a/2} ${(t.y+n.y)/2+r},\n          ${n.x+a/2} ${n.y} `
            // return "orthogonal" === f ? i ? `M ${t.y} ${t.x+r/2}\n        L ${(t.y+n.y+a)/2} ${t.x+r/2},\n        L  ${(t.y+n.y+a)/2} ${n.x+r/2},\n          ${n.y+a} ${n.x+r/2}` : `M ${t.x+a/2} ${t.y}\n        L ${t.x+a/2} ${(t.y+n.y+r)/2},\n        L  ${n.x+a/2} ${(t.y+n.y+r)/2},\n          ${n.x+a/2} ${n.y+r} ` : i ? `M ${t.y} ${t.x+r/2}\n        C ${(t.y+n.y+a)/2} ${t.x+r/2},\n          ${(t.y+n.y+a)/2} ${n.x+r/2},\n          ${n.y+a} ${n.x+r/2}` : `M ${t.x+a/2} ${t.y}\n        C ${t.x+a/2} ${(t.y+n.y+r)/2},\n          ${n.x+a/2} ${(t.y+n.y+r)/2},\n          ${n.x+a/2} ${n.y+r} `
        };
        var r = function(t, n) {
                return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN
            },
            a = function(t) {
                var n;
                return 1 === t.length && (n = t, t = function(t, e) {
                    return r(n(t), e)
                }), {
                    left: function(n, e, i, r) {
                        for (null == i && (i = 0), null == r && (r = n.length); i < r;) {
                            var a = i + r >>> 1;
                            t(n[a], e) < 0 ? i = a + 1 : r = a
                        }
                        return i
                    },
                    right: function(n, e, i, r) {
                        for (null == i && (i = 0), null == r && (r = n.length); i < r;) {
                            var a = i + r >>> 1;
                            t(n[a], e) > 0 ? r = a : i = a + 1
                        }
                        return i
                    }
                }
            };
        var f = a(r);
        f.right, f.left;
        var o = Array.prototype;
        o.slice, o.map, Math.sqrt(50), Math.sqrt(10), Math.sqrt(2);
        var c = function(t) {
            for (var n, e, i, r = t.length, a = -1, f = 0; ++a < r;) f += t[a].length;
            for (e = new Array(f); --r >= 0;)
                for (n = (i = t[r]).length; --n >= 0;) e[--f] = i[n];
            return e
        };
        Array.prototype.slice;
        var u = {
            value: function() {}
        };

        function s() {
            for (var t, n = 0, e = arguments.length, i = {}; n < e; ++n) {
                if (!(t = arguments[n] + "") || t in i) throw new Error("illegal type: " + t);
                i[t] = []
            }
            return new h(i)
        }

        function h(t) {
            this._ = t
        }

        function l(t, n) {
            for (var e, i = 0, r = t.length; i < r; ++i)
                if ((e = t[i]).name === n) return e.value
        }

        function d(t, n, e) {
            for (var i = 0, r = t.length; i < r; ++i)
                if (t[i].name === n) {
                    t[i] = u, t = t.slice(0, i).concat(t.slice(i + 1));
                    break
                }
            return null != e && t.push({
                name: n,
                value: e
            }), t
        }
        h.prototype = s.prototype = {
            constructor: h,
            on: function(t, n) {
                var e, i, r = this._,
                    a = (i = r, (t + "").trim().split(/^|\s+/).map(function(t) {
                        var n = "",
                            e = t.indexOf(".");
                        if (e >= 0 && (n = t.slice(e + 1), t = t.slice(0, e)), t && !i.hasOwnProperty(t)) throw new Error("unknown type: " + t);
                        return {
                            type: t,
                            name: n
                        }
                    })),
                    f = -1,
                    o = a.length;
                if (!(arguments.length < 2)) {
                    if (null != n && "function" != typeof n) throw new Error("invalid callback: " + n);
                    for (; ++f < o;)
                        if (e = (t = a[f]).type) r[e] = d(r[e], t.name, n);
                        else if (null == n)
                        for (e in r) r[e] = d(r[e], t.name, null);
                    return this
                }
                for (; ++f < o;)
                    if ((e = (t = a[f]).type) && (e = l(r[e], t.name))) return e
            },
            copy: function() {
                var t = {},
                    n = this._;
                for (var e in n) t[e] = n[e].slice();
                return new h(t)
            },
            call: function(t, n) {
                if ((e = arguments.length - 2) > 0)
                    for (var e, i, r = new Array(e), a = 0; a < e; ++a) r[a] = arguments[a + 2];
                if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
                for (a = 0, e = (i = this._[t]).length; a < e; ++a) i[a].value.apply(n, r)
            },
            apply: function(t, n, e) {
                if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
                for (var i = this._[t], r = 0, a = i.length; r < a; ++r) i[r].value.apply(n, e)
            }
        };
        var _ = s,
            b = "http://www.w3.org/1999/xhtml",
            p = {
                svg: "http://www.w3.org/2000/svg",
                xhtml: b,
                xlink: "http://www.w3.org/1999/xlink",
                xml: "http://www.w3.org/XML/1998/namespace",
                xmlns: "http://www.w3.org/2000/xmlns/"
            },
            g = function(t) {
                var n = t += "",
                    e = n.indexOf(":");
                return e >= 0 && "xmlns" !== (n = t.slice(0, e)) && (t = t.slice(e + 1)), p.hasOwnProperty(n) ? {
                    space: p[n],
                    local: t
                } : t
            };
        var v = function(t) {
            var n = g(t);
            return (n.local ? function(t) {
                return function() {
                    return this.ownerDocument.createElementNS(t.space, t.local)
                }
            } : function(t) {
                return function() {
                    var n = this.ownerDocument,
                        e = this.namespaceURI;
                    return e === b && n.documentElement.namespaceURI === b ? n.createElement(t) : n.createElementNS(e, t)
                }
            })(n)
        };

        function y() {}
        var m = function(t) {
            return null == t ? y : function() {
                return this.querySelector(t)
            }
        };

        function w() {
            return []
        }
        var x = function(t) {
                return null == t ? w : function() {
                    return this.querySelectorAll(t)
                }
            },
            M = function(t) {
                return function() {
                    return this.matches(t)
                }
            };
        if ("undefined" != typeof document) {
            var T = document.documentElement;
            if (!T.matches) {
                var N = T.webkitMatchesSelector || T.msMatchesSelector || T.mozMatchesSelector || T.oMatchesSelector;
                M = function(t) {
                    return function() {
                        return N.call(this, t)
                    }
                }
            }
        }
        var C = M,
            A = function(t) {
                return new Array(t.length)
            };

        function E(t, n) {
            this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = n
        }
        E.prototype = {
            constructor: E,
            appendChild: function(t) {
                return this._parent.insertBefore(t, this._next)
            },
            insertBefore: function(t, n) {
                return this._parent.insertBefore(t, n)
            },
            querySelector: function(t) {
                return this._parent.querySelector(t)
            },
            querySelectorAll: function(t) {
                return this._parent.querySelectorAll(t)
            }
        };
        var S = "$";

        function k(t, n, e, i, r, a) {
            for (var f, o = 0, c = n.length, u = a.length; o < u; ++o)(f = n[o]) ? (f.__data__ = a[o], i[o] = f) : e[o] = new E(t, a[o]);
            for (; o < c; ++o)(f = n[o]) && (r[o] = f)
        }

        function z(t, n, e, i, r, a, f) {
            var o, c, u, s = {},
                h = n.length,
                l = a.length,
                d = new Array(h);
            for (o = 0; o < h; ++o)(c = n[o]) && (d[o] = u = S + f.call(c, c.__data__, o, n), u in s ? r[o] = c : s[u] = c);
            for (o = 0; o < l; ++o)(c = s[u = S + f.call(t, a[o], o, a)]) ? (i[o] = c, c.__data__ = a[o], s[u] = null) : e[o] = new E(t, a[o]);
            for (o = 0; o < h; ++o)(c = n[o]) && s[d[o]] === c && (r[o] = c)
        }

        function U(t, n) {
            return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN
        }
        var L = function(t) {
            return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView
        };

        function P(t, n) {
            return t.style.getPropertyValue(n) || L(t).getComputedStyle(t, null).getPropertyValue(n)
        }

        function D(t) {
            return t.trim().split(/^|\s+/)
        }

        function $(t) {
            return t.classList || new Y(t)
        }

        function Y(t) {
            this._node = t, this._names = D(t.getAttribute("class") || "")
        }

        function F(t, n) {
            for (var e = $(t), i = -1, r = n.length; ++i < r;) e.add(n[i])
        }

        function R(t, n) {
            for (var e = $(t), i = -1, r = n.length; ++i < r;) e.remove(n[i])
        }
        Y.prototype = {
            add: function(t) {
                this._names.indexOf(t) < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")))
            },
            remove: function(t) {
                var n = this._names.indexOf(t);
                n >= 0 && (this._names.splice(n, 1), this._node.setAttribute("class", this._names.join(" ")))
            },
            contains: function(t) {
                return this._names.indexOf(t) >= 0
            }
        };

        function H() {
            this.textContent = ""
        }

        function O() {
            this.innerHTML = ""
        }

        function X() {
            this.nextSibling && this.parentNode.appendChild(this)
        }

        function I() {
            this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild)
        }

        function V() {
            return null
        }

        function q() {
            var t = this.parentNode;
            t && t.removeChild(this)
        }

        function B() {
            return this.parentNode.insertBefore(this.cloneNode(!1), this.nextSibling)
        }

        function W() {
            return this.parentNode.insertBefore(this.cloneNode(!0), this.nextSibling)
        }
        var Z = {},
            j = null;
        "undefined" != typeof document && ("onmouseenter" in document.documentElement || (Z = {
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        }));

        function Q(t, n, e) {
            return t = J(t, n, e),
                function(n) {
                    var e = n.relatedTarget;
                    e && (e === this || 8 & e.compareDocumentPosition(this)) || t.call(this, n)
                }
        }

        function J(t, n, e) {
            return function(i) {
                var r = j;
                j = i;
                try {
                    t.call(this, this.__data__, n, e)
                } finally {
                    j = r
                }
            }
        }

        function G(t) {
            return function() {
                var n = this.__on;
                if (n) {
                    for (var e, i = 0, r = -1, a = n.length; i < a; ++i) e = n[i], t.type && e.type !== t.type || e.name !== t.name ? n[++r] = e : this.removeEventListener(e.type, e.listener, e.capture);
                    ++r ? n.length = r : delete this.__on
                }
            }
        }

        function K(t, n, e) {
            var i = Z.hasOwnProperty(t.type) ? Q : J;
            return function(r, a, f) {
                var o, c = this.__on,
                    u = i(n, a, f);
                if (c)
                    for (var s = 0, h = c.length; s < h; ++s)
                        if ((o = c[s]).type === t.type && o.name === t.name) return this.removeEventListener(o.type, o.listener, o.capture), this.addEventListener(o.type, o.listener = u, o.capture = e), void(o.value = n);
                this.addEventListener(t.type, u, e), o = {
                    type: t.type,
                    name: t.name,
                    value: n,
                    listener: u,
                    capture: e
                }, c ? c.push(o) : this.__on = [o]
            }
        }

        function tt(t, n, e, i) {
            var r = j;
            t.sourceEvent = j, j = t;
            try {
                return n.apply(e, i)
            } finally {
                j = r
            }
        }

        function nt(t, n, e) {
            var i = L(t),
                r = i.CustomEvent;
            "function" == typeof r ? r = new r(n, e) : (r = i.document.createEvent("Event"), e ? (r.initEvent(n, e.bubbles, e.cancelable), r.detail = e.detail) : r.initEvent(n, !1, !1)), t.dispatchEvent(r)
        }
        var et = [null];

        function it(t, n) {
            this._groups = t, this._parents = n
        }

        function rt() {
            return new it([
                [document.documentElement]
            ], et)
        }
        it.prototype = rt.prototype = {
            constructor: it,
            select: function(t) {
                "function" != typeof t && (t = m(t));
                for (var n = this._groups, e = n.length, i = new Array(e), r = 0; r < e; ++r)
                    for (var a, f, o = n[r], c = o.length, u = i[r] = new Array(c), s = 0; s < c; ++s)(a = o[s]) && (f = t.call(a, a.__data__, s, o)) && ("__data__" in a && (f.__data__ = a.__data__), u[s] = f);
                return new it(i, this._parents)
            },
            selectAll: function(t) {
                "function" != typeof t && (t = x(t));
                for (var n = this._groups, e = n.length, i = [], r = [], a = 0; a < e; ++a)
                    for (var f, o = n[a], c = o.length, u = 0; u < c; ++u)(f = o[u]) && (i.push(t.call(f, f.__data__, u, o)), r.push(f));
                return new it(i, r)
            },
            filter: function(t) {
                "function" != typeof t && (t = C(t));
                for (var n = this._groups, e = n.length, i = new Array(e), r = 0; r < e; ++r)
                    for (var a, f = n[r], o = f.length, c = i[r] = [], u = 0; u < o; ++u)(a = f[u]) && t.call(a, a.__data__, u, f) && c.push(a);
                return new it(i, this._parents)
            },
            data: function(t, n) {
                if (!t) return _ = new Array(this.size()), s = -1, this.each(function(t) {
                    _[++s] = t
                }), _;
                var e, i = n ? z : k,
                    r = this._parents,
                    a = this._groups;
                "function" != typeof t && (e = t, t = function() {
                    return e
                });
                for (var f = a.length, o = new Array(f), c = new Array(f), u = new Array(f), s = 0; s < f; ++s) {
                    var h = r[s],
                        l = a[s],
                        d = l.length,
                        _ = t.call(h, h && h.__data__, s, r),
                        b = _.length,
                        p = c[s] = new Array(b),
                        g = o[s] = new Array(b);
                    i(h, l, p, g, u[s] = new Array(d), _, n);
                    for (var v, y, m = 0, w = 0; m < b; ++m)
                        if (v = p[m]) {
                            for (m >= w && (w = m + 1); !(y = g[w]) && ++w < b;);
                            v._next = y || null
                        }
                }
                return (o = new it(o, r))._enter = c, o._exit = u, o
            },
            enter: function() {
                return new it(this._enter || this._groups.map(A), this._parents)
            },
            exit: function() {
                return new it(this._exit || this._groups.map(A), this._parents)
            },
            merge: function(t) {
                for (var n = this._groups, e = t._groups, i = n.length, r = e.length, a = Math.min(i, r), f = new Array(i), o = 0; o < a; ++o)
                    for (var c, u = n[o], s = e[o], h = u.length, l = f[o] = new Array(h), d = 0; d < h; ++d){
						(c = u[d] || s[d]) && (l[d] = c);
					}
                for (; o < i; ++o) f[o] = n[o];
                return new it(f, this._parents)
            },
            order: function() {
                for (var t = this._groups, n = -1, e = t.length; ++n < e;)
                    for (var i, r = t[n], a = r.length - 1, f = r[a]; --a >= 0;)(i = r[a]) && (f && f !== i.nextSibling && f.parentNode.insertBefore(i, f), f = i);
                return this
            },
            sort: function(t) {
                function n(n, e) {
                    return n && e ? t(n.__data__, e.__data__) : !n - !e
                }
                t || (t = U);
                for (var e = this._groups, i = e.length, r = new Array(i), a = 0; a < i; ++a) {
                    for (var f, o = e[a], c = o.length, u = r[a] = new Array(c), s = 0; s < c; ++s)(f = o[s]) && (u[s] = f);
                    u.sort(n)
                }
                return new it(r, this._parents).order()
            },
            call: function() {
                var t = arguments[0];
                return arguments[0] = this, t.apply(null, arguments), this
            },
            nodes: function() {
                var t = new Array(this.size()),
                    n = -1;
                return this.each(function() {
                    t[++n] = this
                }), t
            },
            node: function() {
                for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
                    for (var i = t[n], r = 0, a = i.length; r < a; ++r) {
                        var f = i[r];
                        if (f) return f
                    }
                return null
            },
            size: function() {
                var t = 0;
                return this.each(function() {
                    ++t
                }), t
            },
            empty: function() {
                return !this.node()
            },
            each: function(t) {
                for (var n = this._groups, e = 0, i = n.length; e < i; ++e)
                    for (var r, a = n[e], f = 0, o = a.length; f < o; ++f)(r = a[f]) && t.call(r, r.__data__, f, a);
                return this
            },
            attr: function(t, n) {
                var e = g(t);
                if (arguments.length < 2) {
                    var i = this.node();
                    return e.local ? i.getAttributeNS(e.space, e.local) : i.getAttribute(e)
                }
                return this.each((null == n ? e.local ? function(t) {
                    return function() {
                        this.removeAttributeNS(t.space, t.local)
                    }
                } : function(t) {
                    return function() {
                        this.removeAttribute(t)
                    }
                } : "function" == typeof n ? e.local ? function(t, n) {
                    return function() {
                        var e = n.apply(this, arguments);
                        null == e ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e)
                    }
                } : function(t, n) {
                    return function() {
                        var e = n.apply(this, arguments);
                        null == e ? this.removeAttribute(t) : this.setAttribute(t, e)
                    }
                } : e.local ? function(t, n) {
                    return function() {
                        this.setAttributeNS(t.space, t.local, n)
                    }
                } : function(t, n) {
                    return function() {
                        this.setAttribute(t, n)
                    }
                })(e, n))
            },
            style: function(t, n, e) {
                return arguments.length > 1 ? this.each((null == n ? function(t) {
                    return function() {
                        this.style.removeProperty(t)
                    }
                } : "function" == typeof n ? function(t, n, e) {
                    return function() {
                        var i = n.apply(this, arguments);
                        null == i ? this.style.removeProperty(t) : this.style.setProperty(t, i, e)
                    }
                } : function(t, n, e) {
                    return function() {
                        this.style.setProperty(t, n, e)
                    }
                })(t, n, null == e ? "" : e)) : P(this.node(), t)
            },
            property: function(t, n) {
                return arguments.length > 1 ? this.each((null == n ? function(t) {
                    return function() {
                        delete this[t]
                    }
                } : "function" == typeof n ? function(t, n) {
                    return function() {
                        var e = n.apply(this, arguments);
                        null == e ? delete this[t] : this[t] = e
                    }
                } : function(t, n) {
                    return function() {
                        this[t] = n
                    }
                })(t, n)) : this.node()[t]
            },
            classed: function(t, n) {
                var e = D(t + "");
                if (arguments.length < 2) {
                    for (var i = $(this.node()), r = -1, a = e.length; ++r < a;)
                        if (!i.contains(e[r])) return !1;
                    return !0
                }
                return this.each(("function" == typeof n ? function(t, n) {
                    return function() {
                        (n.apply(this, arguments) ? F : R)(this, t)
                    }
                } : n ? function(t) {
                    return function() {
                        F(this, t)
                    }
                } : function(t) {
                    return function() {
                        R(this, t)
                    }
                })(e, n))
            },
            text: function(t) {
                return arguments.length ? this.each(null == t ? H : ("function" == typeof t ? function(t) {
                    return function() {
                        var n = t.apply(this, arguments);
                        this.textContent = null == n ? "" : n
                    }
                } : function(t) {
                    return function() {
                        this.textContent = t
                    }
                })(t)) : this.node().textContent
            },
            html: function(t) {
                return arguments.length ? this.each(null == t ? O : ("function" == typeof t ? function(t) {
                    return function() {
                        var n = t.apply(this, arguments);
                        this.innerHTML = null == n ? "" : n
                    }
                } : function(t) {
                    return function() {
                        this.innerHTML = t
                    }
                })(t)) : this.node().innerHTML
            },
            raise: function() {
                return this.each(X)
            },
            lower: function() {
                return this.each(I)
            },
            append: function(t) {
                var n = "function" == typeof t ? t : v(t);
                return this.select(function() {
                    return this.appendChild(n.apply(this, arguments))
                })
            },
            insert: function(t, n) {
                var e = "function" == typeof t ? t : v(t),
                    i = null == n ? V : "function" == typeof n ? n : m(n);
                return this.select(function() {
                    return this.insertBefore(e.apply(this, arguments), i.apply(this, arguments) || null)
                })
            },
            remove: function() {
                return this.each(q)
            },
            clone: function(t) {
                return this.select(t ? W : B)
            },
            datum: function(t) {
                return arguments.length ? this.property("__data__", t) : this.node().__data__
            },
            on: function(t, n, e) {
                var i, r, a = function(t) {
                        return t.trim().split(/^|\s+/).map(function(t) {
                            var n = "",
                                e = t.indexOf(".");
                            return e >= 0 && (n = t.slice(e + 1), t = t.slice(0, e)), {
                                type: t,
                                name: n
                            }
                        })
                    }(t + ""),
                    f = a.length;
                if (!(arguments.length < 2)) {
                    for (o = n ? K : G, null == e && (e = !1), i = 0; i < f; ++i) this.each(o(a[i], n, e));
                    return this
                }
                var o = this.node().__on;
                if (o)
                    for (var c, u = 0, s = o.length; u < s; ++u)
                        for (i = 0, c = o[u]; i < f; ++i)
                            if ((r = a[i]).type === c.type && r.name === c.name) return c.value
            },
            dispatch: function(t, n) {
                return this.each(("function" == typeof n ? function(t, n) {
                    return function() {
                        return nt(this, t, n.apply(this, arguments))
                    }
                } : function(t, n) {
                    return function() {
                        return nt(this, t, n)
                    }
                })(t, n))
            }
        };
        var at = rt,
            ft = function(t) {
                return "string" == typeof t ? new it([
                    [document.querySelector(t)]
                ], [document.documentElement]) : new it([
                    [t]
                ], et)
            },
            ot = 0;

        function ct() {
            this._ = "@" + (++ot).toString(36)
        }
        ct.prototype = function() {
            return new ct
        }.prototype = {
            constructor: ct,
            get: function(t) {
                for (var n = this._; !(n in t);)
                    if (!(t = t.parentNode)) return;
                return t[n]
            },
            set: function(t, n) {
                return t[this._] = n
            },
            remove: function(t) {
                return this._ in t && delete t[this._]
            },
            toString: function() {
                return this._
            }
        };
        var ut = function() {
                for (var t, n = j; t = n.sourceEvent;) n = t;
                return n
            },
            st = function(t, n) {
                var e = t.ownerSVGElement || t;
                if (e.createSVGPoint) {
                    var i = e.createSVGPoint();
                    return i.x = n.clientX, i.y = n.clientY, [(i = i.matrixTransform(t.getScreenCTM().inverse())).x, i.y]
                }
                var r = t.getBoundingClientRect();
                return [n.clientX - r.left - t.clientLeft, n.clientY - r.top - t.clientTop]
            },
            ht = function(t) {
                var n = ut();
                return n.changedTouches && (n = n.changedTouches[0]), st(t, n)
            },
            lt = function(t, n, e) {
                arguments.length < 3 && (e = n, n = ut().changedTouches);
                for (var i, r = 0, a = n ? n.length : 0; r < a; ++r)
                    if ((i = n[r]).identifier === e) return st(t, i);
                return null
            };
        var dt = function() {
                j.preventDefault(), j.stopImmediatePropagation()
            },
            _t = function(t) {
                var n = t.document.documentElement,
                    e = ft(t).on("dragstart.drag", dt, !0);
                "onselectstart" in n ? e.on("selectstart.drag", dt, !0) : (n.__noselect = n.style.MozUserSelect, n.style.MozUserSelect = "none")
            };

        function bt(t, n) {
            var e = t.document.documentElement,
                i = ft(t).on("dragstart.drag", null);
            n && (i.on("click.drag", dt, !0), setTimeout(function() {
                i.on("click.drag", null)
            }, 0)), "onselectstart" in e ? i.on("selectstart.drag", null) : (e.style.MozUserSelect = e.__noselect, delete e.__noselect)
        }

        function pt(t, n, e, i, r, a, f, o, c, u) {
            this.target = t, this.type = n, this.subject = e, this.identifier = i, this.active = r, this.x = a, this.y = f, this.dx = o, this.dy = c, this._ = u
        }
        pt.prototype.on = function() {
            var t = this._.on.apply(this._, arguments);
            return t === this._ ? this : t
        };
        var gt = function(t, n, e) {
            t.prototype = n.prototype = e, e.constructor = t
        };

        function vt(t, n) {
            var e = Object.create(t.prototype);
            for (var i in n) e[i] = n[i];
            return e
        }

        function yt() {}
        var mt = "\\s*([+-]?\\d+)\\s*",
            wt = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
            xt = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
            Mt = /^#([0-9a-f]{3})$/,
            Tt = /^#([0-9a-f]{6})$/,
            Nt = new RegExp("^rgb\\(" + [mt, mt, mt] + "\\)$"),
            Ct = new RegExp("^rgb\\(" + [xt, xt, xt] + "\\)$"),
            At = new RegExp("^rgba\\(" + [mt, mt, mt, wt] + "\\)$"),
            Et = new RegExp("^rgba\\(" + [xt, xt, xt, wt] + "\\)$"),
            St = new RegExp("^hsl\\(" + [wt, xt, xt] + "\\)$"),
            kt = new RegExp("^hsla\\(" + [wt, xt, xt, wt] + "\\)$"),
            zt = {
                aliceblue: 15792383,
                antiquewhite: 16444375,
                aqua: 65535,
                aquamarine: 8388564,
                azure: 15794175,
                beige: 16119260,
                bisque: 16770244,
                black: 0,
                blanchedalmond: 16772045,
                blue: 255,
                blueviolet: 9055202,
                brown: 10824234,
                burlywood: 14596231,
                cadetblue: 6266528,
                chartreuse: 8388352,
                chocolate: 13789470,
                coral: 16744272,
                cornflowerblue: 6591981,
                cornsilk: 16775388,
                crimson: 14423100,
                cyan: 65535,
                darkblue: 139,
                darkcyan: 35723,
                darkgoldenrod: 12092939,
                darkgray: 11119017,
                darkgreen: 25600,
                darkgrey: 11119017,
                darkkhaki: 12433259,
                darkmagenta: 9109643,
                darkolivegreen: 5597999,
                darkorange: 16747520,
                darkorchid: 10040012,
                darkred: 9109504,
                darksalmon: 15308410,
                darkseagreen: 9419919,
                darkslateblue: 4734347,
                darkslategray: 3100495,
                darkslategrey: 3100495,
                darkturquoise: 52945,
                darkviolet: 9699539,
                deeppink: 16716947,
                deepskyblue: 49151,
                dimgray: 6908265,
                dimgrey: 6908265,
                dodgerblue: 2003199,
                firebrick: 11674146,
                floralwhite: 16775920,
                forestgreen: 2263842,
                fuchsia: 16711935,
                gainsboro: 14474460,
                ghostwhite: 16316671,
                gold: 16766720,
                goldenrod: 14329120,
                gray: 8421504,
                green: 32768,
                greenyellow: 11403055,
                grey: 8421504,
                honeydew: 15794160,
                hotpink: 16738740,
                indianred: 13458524,
                indigo: 4915330,
                ivory: 16777200,
                khaki: 15787660,
                lavender: 15132410,
                lavenderblush: 16773365,
                lawngreen: 8190976,
                lemonchiffon: 16775885,
                lightblue: 11393254,
                lightcoral: 15761536,
                lightcyan: 14745599,
                lightgoldenrodyellow: 16448210,
                lightgray: 13882323,
                lightgreen: 9498256,
                lightgrey: 13882323,
                lightpink: 16758465,
                lightsalmon: 16752762,
                lightseagreen: 2142890,
                lightskyblue: 8900346,
                lightslategray: 7833753,
                lightslategrey: 7833753,
                lightsteelblue: 11584734,
                lightyellow: 16777184,
                lime: 65280,
                limegreen: 3329330,
                linen: 16445670,
                magenta: 16711935,
                maroon: 8388608,
                mediumaquamarine: 6737322,
                mediumblue: 205,
                mediumorchid: 12211667,
                mediumpurple: 9662683,
                mediumseagreen: 3978097,
                mediumslateblue: 8087790,
                mediumspringgreen: 64154,
                mediumturquoise: 4772300,
                mediumvioletred: 13047173,
                midnightblue: 1644912,
                mintcream: 16121850,
                mistyrose: 16770273,
                moccasin: 16770229,
                navajowhite: 16768685,
                navy: 128,
                oldlace: 16643558,
                olive: 8421376,
                olivedrab: 7048739,
                orange: 16753920,
                orangered: 16729344,
                orchid: 14315734,
                palegoldenrod: 15657130,
                palegreen: 10025880,
                paleturquoise: 11529966,
                palevioletred: 14381203,
                papayawhip: 16773077,
                peachpuff: 16767673,
                peru: 13468991,
                pink: 16761035,
                plum: 14524637,
                powderblue: 11591910,
                purple: 8388736,
                rebeccapurple: 6697881,
                red: 16711680,
                rosybrown: 12357519,
                royalblue: 4286945,
                saddlebrown: 9127187,
                salmon: 16416882,
                sandybrown: 16032864,
                seagreen: 3050327,
                seashell: 16774638,
                sienna: 10506797,
                silver: 12632256,
                skyblue: 8900331,
                slateblue: 6970061,
                slategray: 7372944,
                slategrey: 7372944,
                snow: 16775930,
                springgreen: 65407,
                steelblue: 4620980,
                tan: 13808780,
                teal: 32896,
                thistle: 14204888,
                tomato: 16737095,
                turquoise: 4251856,
                violet: 15631086,
                wheat: 16113331,
                white: 16777215,
                whitesmoke: 16119285,
                yellow: 16776960,
                yellowgreen: 10145074
            };

        function Ut(t) {
            var n;
            return t = (t + "").trim().toLowerCase(), (n = Mt.exec(t)) ? new Yt((n = parseInt(n[1], 16)) >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | 240 & n, (15 & n) << 4 | 15 & n, 1) : (n = Tt.exec(t)) ? Lt(parseInt(n[1], 16)) : (n = Nt.exec(t)) ? new Yt(n[1], n[2], n[3], 1) : (n = Ct.exec(t)) ? new Yt(255 * n[1] / 100, 255 * n[2] / 100, 255 * n[3] / 100, 1) : (n = At.exec(t)) ? Pt(n[1], n[2], n[3], n[4]) : (n = Et.exec(t)) ? Pt(255 * n[1] / 100, 255 * n[2] / 100, 255 * n[3] / 100, n[4]) : (n = St.exec(t)) ? Rt(n[1], n[2] / 100, n[3] / 100, 1) : (n = kt.exec(t)) ? Rt(n[1], n[2] / 100, n[3] / 100, n[4]) : zt.hasOwnProperty(t) ? Lt(zt[t]) : "transparent" === t ? new Yt(NaN, NaN, NaN, 0) : null
        }

        function Lt(t) {
            return new Yt(t >> 16 & 255, t >> 8 & 255, 255 & t, 1)
        }

        function Pt(t, n, e, i) {
            return i <= 0 && (t = n = e = NaN), new Yt(t, n, e, i)
        }

        function Dt(t) {
            return t instanceof yt || (t = Ut(t)), t ? new Yt((t = t.rgb()).r, t.g, t.b, t.opacity) : new Yt
        }

        function $t(t, n, e, i) {
            return 1 === arguments.length ? Dt(t) : new Yt(t, n, e, null == i ? 1 : i)
        }

        function Yt(t, n, e, i) {
            this.r = +t, this.g = +n, this.b = +e, this.opacity = +i
        }

        function Ft(t) {
            return ((t = Math.max(0, Math.min(255, Math.round(t) || 0))) < 16 ? "0" : "") + t.toString(16)
        }

        function Rt(t, n, e, i) {
            return i <= 0 ? t = n = e = NaN : e <= 0 || e >= 1 ? t = n = NaN : n <= 0 && (t = NaN), new Ot(t, n, e, i)
        }

        function Ht(t, n, e, i) {
            return 1 === arguments.length ? function(t) {
                if (t instanceof Ot) return new Ot(t.h, t.s, t.l, t.opacity);
                if (t instanceof yt || (t = Ut(t)), !t) return new Ot;
                if (t instanceof Ot) return t;
                var n = (t = t.rgb()).r / 255,
                    e = t.g / 255,
                    i = t.b / 255,
                    r = Math.min(n, e, i),
                    a = Math.max(n, e, i),
                    f = NaN,
                    o = a - r,
                    c = (a + r) / 2;
                return o ? (f = n === a ? (e - i) / o + 6 * (e < i) : e === a ? (i - n) / o + 2 : (n - e) / o + 4, o /= c < .5 ? a + r : 2 - a - r, f *= 60) : o = c > 0 && c < 1 ? 0 : f, new Ot(f, o, c, t.opacity)
            }(t) : new Ot(t, n, e, null == i ? 1 : i)
        }

        function Ot(t, n, e, i) {
            this.h = +t, this.s = +n, this.l = +e, this.opacity = +i
        }

        function Xt(t, n, e) {
            return 255 * (t < 60 ? n + (e - n) * t / 60 : t < 180 ? e : t < 240 ? n + (e - n) * (240 - t) / 60 : n)
        }
        gt(yt, Ut, {
            displayable: function() {
                return this.rgb().displayable()
            },
            hex: function() {
                return this.rgb().hex()
            },
            toString: function() {
                return this.rgb() + ""
            }
        }), gt(Yt, $t, vt(yt, {
            brighter: function(t) {
                return t = null == t ? 1 / .7 : Math.pow(1 / .7, t), new Yt(this.r * t, this.g * t, this.b * t, this.opacity)
            },
            darker: function(t) {
                return t = null == t ? .7 : Math.pow(.7, t), new Yt(this.r * t, this.g * t, this.b * t, this.opacity)
            },
            rgb: function() {
                return this
            },
            displayable: function() {
                return 0 <= this.r && this.r <= 255 && 0 <= this.g && this.g <= 255 && 0 <= this.b && this.b <= 255 && 0 <= this.opacity && this.opacity <= 1
            },
            hex: function() {
                return "#" + Ft(this.r) + Ft(this.g) + Ft(this.b)
            },
            toString: function() {
                var t = this.opacity;
                return (1 === (t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t))) ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (1 === t ? ")" : ", " + t + ")")
            }
        })), gt(Ot, Ht, vt(yt, {
            brighter: function(t) {
                return t = null == t ? 1 / .7 : Math.pow(1 / .7, t), new Ot(this.h, this.s, this.l * t, this.opacity)
            },
            darker: function(t) {
                return t = null == t ? .7 : Math.pow(.7, t), new Ot(this.h, this.s, this.l * t, this.opacity)
            },
            rgb: function() {
                var t = this.h % 360 + 360 * (this.h < 0),
                    n = isNaN(t) || isNaN(this.s) ? 0 : this.s,
                    e = this.l,
                    i = e + (e < .5 ? e : 1 - e) * n,
                    r = 2 * e - i;
                return new Yt(Xt(t >= 240 ? t - 240 : t + 120, r, i), Xt(t, r, i), Xt(t < 120 ? t + 240 : t - 120, r, i), this.opacity)
            },
            displayable: function() {
                return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1
            }
        }));
        var It = Math.PI / 180,
            Vt = 180 / Math.PI,
            qt = .96422,
            Bt = 1,
            Wt = .82521,
            Zt = 4 / 29,
            jt = 6 / 29,
            Qt = 3 * jt * jt,
            Jt = jt * jt * jt;

        function Gt(t) {
            if (t instanceof tn) return new tn(t.l, t.a, t.b, t.opacity);
            if (t instanceof cn) {
                if (isNaN(t.h)) return new tn(t.l, 0, 0, t.opacity);
                var n = t.h * It;
                return new tn(t.l, Math.cos(n) * t.c, Math.sin(n) * t.c, t.opacity)
            }
            t instanceof Yt || (t = Dt(t));
            var e, i, r = an(t.r),
                a = an(t.g),
                f = an(t.b),
                o = nn((.2225045 * r + .7168786 * a + .0606169 * f) / Bt);
            return r === a && a === f ? e = i = o : (e = nn((.4360747 * r + .3850649 * a + .1430804 * f) / qt), i = nn((.0139322 * r + .0971045 * a + .7141733 * f) / Wt)), new tn(116 * o - 16, 500 * (e - o), 200 * (o - i), t.opacity)
        }

        function Kt(t, n, e, i) {
            return 1 === arguments.length ? Gt(t) : new tn(t, n, e, null == i ? 1 : i)
        }

        function tn(t, n, e, i) {
            this.l = +t, this.a = +n, this.b = +e, this.opacity = +i
        }

        function nn(t) {
            return t > Jt ? Math.pow(t, 1 / 3) : t / Qt + Zt
        }

        function en(t) {
            return t > jt ? t * t * t : Qt * (t - Zt)
        }

        function rn(t) {
            return 255 * (t <= .0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - .055)
        }

        function an(t) {
            return (t /= 255) <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4)
        }

        function fn(t) {
            if (t instanceof cn) return new cn(t.h, t.c, t.l, t.opacity);
            if (t instanceof tn || (t = Gt(t)), 0 === t.a && 0 === t.b) return new cn(NaN, 0, t.l, t.opacity);
            var n = Math.atan2(t.b, t.a) * Vt;
            return new cn(n < 0 ? n + 360 : n, Math.sqrt(t.a * t.a + t.b * t.b), t.l, t.opacity)
        }

        function on(t, n, e, i) {
            return 1 === arguments.length ? fn(t) : new cn(t, n, e, null == i ? 1 : i)
        }

        function cn(t, n, e, i) {
            this.h = +t, this.c = +n, this.l = +e, this.opacity = +i
        }
        gt(tn, Kt, vt(yt, {
            brighter: function(t) {
                return new tn(this.l + 18 * (null == t ? 1 : t), this.a, this.b, this.opacity)
            },
            darker: function(t) {
                return new tn(this.l - 18 * (null == t ? 1 : t), this.a, this.b, this.opacity)
            },
            rgb: function() {
                var t = (this.l + 16) / 116,
                    n = isNaN(this.a) ? t : t + this.a / 500,
                    e = isNaN(this.b) ? t : t - this.b / 200;
                return new Yt(rn(3.1338561 * (n = qt * en(n)) - 1.6168667 * (t = Bt * en(t)) - .4906146 * (e = Wt * en(e))), rn(-.9787684 * n + 1.9161415 * t + .033454 * e), rn(.0719453 * n - .2289914 * t + 1.4052427 * e), this.opacity)
            }
        })), gt(cn, on, vt(yt, {
            brighter: function(t) {
                return new cn(this.h, this.c, this.l + 18 * (null == t ? 1 : t), this.opacity)
            },
            darker: function(t) {
                return new cn(this.h, this.c, this.l - 18 * (null == t ? 1 : t), this.opacity)
            },
            rgb: function() {
                return Gt(this).rgb()
            }
        }));
        var un = -.29227,
            sn = -.90649,
            hn = 1.97294,
            ln = hn * sn,
            dn = 1.78277 * hn,
            _n = 1.78277 * un - -.14861 * sn;

        function bn(t, n, e, i) {
            return 1 === arguments.length ? function(t) {
                if (t instanceof pn) return new pn(t.h, t.s, t.l, t.opacity);
                t instanceof Yt || (t = Dt(t));
                var n = t.r / 255,
                    e = t.g / 255,
                    i = t.b / 255,
                    r = (_n * i + ln * n - dn * e) / (_n + ln - dn),
                    a = i - r,
                    f = (hn * (e - r) - un * a) / sn,
                    o = Math.sqrt(f * f + a * a) / (hn * r * (1 - r)),
                    c = o ? Math.atan2(f, a) * Vt - 120 : NaN;
                return new pn(c < 0 ? c + 360 : c, o, r, t.opacity)
            }(t) : new pn(t, n, e, null == i ? 1 : i)
        }

        function pn(t, n, e, i) {
            this.h = +t, this.s = +n, this.l = +e, this.opacity = +i
        }

        function gn(t, n, e, i, r) {
            var a = t * t,
                f = a * t;
            return ((1 - 3 * t + 3 * a - f) * n + (4 - 6 * a + 3 * f) * e + (1 + 3 * t + 3 * a - 3 * f) * i + f * r) / 6
        }
        gt(pn, bn, vt(yt, {
            brighter: function(t) {
                return t = null == t ? 1 / .7 : Math.pow(1 / .7, t), new pn(this.h, this.s, this.l * t, this.opacity)
            },
            darker: function(t) {
                return t = null == t ? .7 : Math.pow(.7, t), new pn(this.h, this.s, this.l * t, this.opacity)
            },
            rgb: function() {
                var t = isNaN(this.h) ? 0 : (this.h + 120) * It,
                    n = +this.l,
                    e = isNaN(this.s) ? 0 : this.s * n * (1 - n),
                    i = Math.cos(t),
                    r = Math.sin(t);
                return new Yt(255 * (n + e * (-.14861 * i + 1.78277 * r)), 255 * (n + e * (un * i + sn * r)), 255 * (n + e * (hn * i)), this.opacity)
            }
        }));
        var vn = function(t) {
            return function() {
                return t
            }
        };

        function yn(t, n) {
            return function(e) {
                return t + e * n
            }
        }

        function mn(t, n) {
            var e = n - t;
            return e ? yn(t, e > 180 || e < -180 ? e - 360 * Math.round(e / 360) : e) : vn(isNaN(t) ? n : t)
        }

        function wn(t) {
            return 1 == (t = +t) ? xn : function(n, e) {
                return e - n ? function(t, n, e) {
                    return t = Math.pow(t, e), n = Math.pow(n, e) - t, e = 1 / e,
                        function(i) {
                            return Math.pow(t + i * n, e)
                        }
                }(n, e, t) : vn(isNaN(n) ? e : n)
            }
        }

        function xn(t, n) {
            var e = n - t;
            return e ? yn(t, e) : vn(isNaN(t) ? n : t)
        }
        var Mn = function t(n) {
            var e = wn(n);

            function i(t, n) {
                var i = e((t = $t(t)).r, (n = $t(n)).r),
                    r = e(t.g, n.g),
                    a = e(t.b, n.b),
                    f = xn(t.opacity, n.opacity);
                return function(n) {
                    return t.r = i(n), t.g = r(n), t.b = a(n), t.opacity = f(n), t + ""
                }
            }
            return i.gamma = t, i
        }(1);

        function Tn(t) {
            return function(n) {
                var e, i, r = n.length,
                    a = new Array(r),
                    f = new Array(r),
                    o = new Array(r);
                for (e = 0; e < r; ++e) i = $t(n[e]), a[e] = i.r || 0, f[e] = i.g || 0, o[e] = i.b || 0;
                return a = t(a), f = t(f), o = t(o), i.opacity = 1,
                    function(t) {
                        return i.r = a(t), i.g = f(t), i.b = o(t), i + ""
                    }
            }
        }
        var Nn = Tn(function(t) {
                var n = t.length - 1;
                return function(e) {
                    var i = e <= 0 ? e = 0 : e >= 1 ? (e = 1, n - 1) : Math.floor(e * n),
                        r = t[i],
                        a = t[i + 1],
                        f = i > 0 ? t[i - 1] : 2 * r - a,
                        o = i < n - 1 ? t[i + 2] : 2 * a - r;
                    return gn((e - i / n) * n, f, r, a, o)
                }
            }),
            Cn = (Tn(function(t) {
                var n = t.length;
                return function(e) {
                    var i = Math.floor(((e %= 1) < 0 ? ++e : e) * n),
                        r = t[(i + n - 1) % n],
                        a = t[i % n],
                        f = t[(i + 1) % n],
                        o = t[(i + 2) % n];
                    return gn((e - i / n) * n, r, a, f, o)
                }
            }), function(t, n) {
                return n -= t = +t,
                    function(e) {
                        return t + n * e
                    }
            }),
            An = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
            En = new RegExp(An.source, "g");
        var Sn, kn, zn, Un, Ln = function(t, n) {
                var e, i, r, a = An.lastIndex = En.lastIndex = 0,
                    f = -1,
                    o = [],
                    c = [];
                for (t += "", n += "";
                    (e = An.exec(t)) && (i = En.exec(n));)(r = i.index) > a && (r = n.slice(a, r), o[f] ? o[f] += r : o[++f] = r), (e = e[0]) === (i = i[0]) ? o[f] ? o[f] += i : o[++f] = i : (o[++f] = null, c.push({
                    i: f,
                    x: Cn(e, i)
                })), a = En.lastIndex;
                return a < n.length && (r = n.slice(a), o[f] ? o[f] += r : o[++f] = r), o.length < 2 ? c[0] ? function(t) {
                    return function(n) {
                        return t(n) + ""
                    }
                }(c[0].x) : function(t) {
                    return function() {
                        return t
                    }
                }(n) : (n = c.length, function(t) {
                    for (var e, i = 0; i < n; ++i) o[(e = c[i]).i] = e.x(t);
                    return o.join("")
                })
            },
            Pn = 180 / Math.PI,
            Dn = {
                translateX: 0,
                translateY: 0,
                rotate: 0,
                skewX: 0,
                scaleX: 1,
                scaleY: 1
            },
            $n = function(t, n, e, i, r, a) {
                var f, o, c;
                return (f = Math.sqrt(t * t + n * n)) && (t /= f, n /= f), (c = t * e + n * i) && (e -= t * c, i -= n * c), (o = Math.sqrt(e * e + i * i)) && (e /= o, i /= o, c /= o), t * i < n * e && (t = -t, n = -n, c = -c, f = -f), {
                    translateX: r,
                    translateY: a,
                    rotate: Math.atan2(n, t) * Pn,
                    skewX: Math.atan(c) * Pn,
                    scaleX: f,
                    scaleY: o
                }
            };

        function Yn(t, n, e, i) {
            function r(t) {
                return t.length ? t.pop() + " " : ""
            }
            return function(a, f) {
                var o = [],
                    c = [];
                return a = t(a), f = t(f),
                    function(t, i, r, a, f, o) {
                        if (t !== r || i !== a) {
                            var c = f.push("translate(", null, n, null, e);
                            o.push({
                                i: c - 4,
                                x: Cn(t, r)
                            }, {
                                i: c - 2,
                                x: Cn(i, a)
                            })
                        } else(r || a) && f.push("translate(" + r + n + a + e)
                    }(a.translateX, a.translateY, f.translateX, f.translateY, o, c),
                    function(t, n, e, a) {
                        t !== n ? (t - n > 180 ? n += 360 : n - t > 180 && (t += 360), a.push({
                            i: e.push(r(e) + "rotate(", null, i) - 2,
                            x: Cn(t, n)
                        })) : n && e.push(r(e) + "rotate(" + n + i)
                    }(a.rotate, f.rotate, o, c),
                    function(t, n, e, a) {
                        t !== n ? a.push({
                            i: e.push(r(e) + "skewX(", null, i) - 2,
                            x: Cn(t, n)
                        }) : n && e.push(r(e) + "skewX(" + n + i)
                    }(a.skewX, f.skewX, o, c),
                    function(t, n, e, i, a, f) {
                        if (t !== e || n !== i) {
                            var o = a.push(r(a) + "scale(", null, ",", null, ")");
                            f.push({
                                i: o - 4,
                                x: Cn(t, e)
                            }, {
                                i: o - 2,
                                x: Cn(n, i)
                            })
                        } else 1 === e && 1 === i || a.push(r(a) + "scale(" + e + "," + i + ")")
                    }(a.scaleX, a.scaleY, f.scaleX, f.scaleY, o, c), a = f = null,
                    function(t) {
                        for (var n, e = -1, i = c.length; ++e < i;) o[(n = c[e]).i] = n.x(t);
                        return o.join("")
                    }
            }
        }
        var Fn = Yn(function(t) {
                return "none" === t ? Dn : (Sn || (Sn = document.createElement("DIV"), kn = document.documentElement, zn = document.defaultView), Sn.style.transform = t, t = zn.getComputedStyle(kn.appendChild(Sn), null).getPropertyValue("transform"), kn.removeChild(Sn), t = t.slice(7, -1).split(","), $n(+t[0], +t[1], +t[2], +t[3], +t[4], +t[5]))
            }, "px, ", "px)", "deg)"),
            Rn = Yn(function(t) {
                return null == t ? Dn : (Un || (Un = document.createElementNS("http://www.w3.org/2000/svg", "g")), Un.setAttribute("transform", t), (t = Un.transform.baseVal.consolidate()) ? (t = t.matrix, $n(t.a, t.b, t.c, t.d, t.e, t.f)) : Dn)
            }, ", ", ")", ")"),
            Hn = Math.SQRT2;

        function On(t) {
            return ((t = Math.exp(t)) + 1 / t) / 2
        }
        var Xn = function(t, n) {
            var e, i, r = t[0],
                a = t[1],
                f = t[2],
                o = n[0],
                c = n[1],
                u = n[2],
                s = o - r,
                h = c - a,
                l = s * s + h * h;
            if (l < 1e-12) i = Math.log(u / f) / Hn, e = function(t) {
                return [r + t * s, a + t * h, f * Math.exp(Hn * t * i)]
            };
            else {
                var d = Math.sqrt(l),
                    _ = (u * u - f * f + 4 * l) / (2 * f * 2 * d),
                    b = (u * u - f * f - 4 * l) / (2 * u * 2 * d),
                    p = Math.log(Math.sqrt(_ * _ + 1) - _),
                    g = Math.log(Math.sqrt(b * b + 1) - b);
                i = (g - p) / Hn, e = function(t) {
                    var n, e = t * i,
                        o = On(p),
                        c = f / (2 * d) * (o * (n = Hn * e + p, ((n = Math.exp(2 * n)) - 1) / (n + 1)) - function(t) {
                            return ((t = Math.exp(t)) - 1 / t) / 2
                        }(p));
                    return [r + c * s, a + c * h, f * o / On(Hn * e + p)]
                }
            }
            return e.duration = 1e3 * i, e
        };

        function In(t) {
            return function(n, e) {
                var i = t((n = Ht(n)).h, (e = Ht(e)).h),
                    r = xn(n.s, e.s),
                    a = xn(n.l, e.l),
                    f = xn(n.opacity, e.opacity);
                return function(t) {
                    return n.h = i(t), n.s = r(t), n.l = a(t), n.opacity = f(t), n + ""
                }
            }
        }
        In(mn), In(xn);

        function Vn(t) {
            return function(n, e) {
                var i = t((n = on(n)).h, (e = on(e)).h),
                    r = xn(n.c, e.c),
                    a = xn(n.l, e.l),
                    f = xn(n.opacity, e.opacity);
                return function(t) {
                    return n.h = i(t), n.c = r(t), n.l = a(t), n.opacity = f(t), n + ""
                }
            }
        }
        Vn(mn), Vn(xn);

        function qn(t) {
            return function n(e) {
                function i(n, i) {
                    var r = t((n = bn(n)).h, (i = bn(i)).h),
                        a = xn(n.s, i.s),
                        f = xn(n.l, i.l),
                        o = xn(n.opacity, i.opacity);
                    return function(t) {
                        return n.h = r(t), n.s = a(t), n.l = f(Math.pow(t, e)), n.opacity = o(t), n + ""
                    }
                }
                return e = +e, i.gamma = n, i
            }(1)
        }
        qn(mn);
        var Bn = qn(xn);
        var Wn, Zn, jn = 0,
            Qn = 0,
            Jn = 0,
            Gn = 1e3,
            Kn = 0,
            te = 0,
            ne = 0,
            ee = "object" == typeof performance && performance.now ? performance : Date,
            ie = "object" == typeof window && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
                setTimeout(t, 17)
            };

        function re() {
            return te || (ie(ae), te = ee.now() + ne)
        }

        function ae() {
            te = 0
        }

        function fe() {
            this._call = this._time = this._next = null
        }

        function oe(t, n, e) {
            var i = new fe;
            return i.restart(t, n, e), i
        }

        function ce() {
            te = (Kn = ee.now()) + ne, jn = Qn = 0;
            try {
                ! function() {
                    re(), ++jn;
                    for (var t, n = Wn; n;)(t = te - n._time) >= 0 && n._call.call(null, t), n = n._next;
                    --jn
                }()
            } finally {
                jn = 0,
                    function() {
                        var t, n, e = Wn,
                            i = 1 / 0;
                        for (; e;) e._call ? (i > e._time && (i = e._time), t = e, e = e._next) : (n = e._next, e._next = null, e = t ? t._next = n : Wn = n);
                        Zn = t, se(i)
                    }(), te = 0
            }
        }

        function ue() {
            var t = ee.now(),
                n = t - Kn;
            n > Gn && (ne -= n, Kn = t)
        }

        function se(t) {
            jn || (Qn && (Qn = clearTimeout(Qn)), t - te > 24 ? (t < 1 / 0 && (Qn = setTimeout(ce, t - ee.now() - ne)), Jn && (Jn = clearInterval(Jn))) : (Jn || (Kn = ee.now(), Jn = setInterval(ue, Gn)), jn = 1, ie(ce)))
        }
        fe.prototype = oe.prototype = {
            constructor: fe,
            restart: function(t, n, e) {
                if ("function" != typeof t) throw new TypeError("callback is not a function");
                e = (null == e ? re() : +e) + (null == n ? 0 : +n), this._next || Zn === this || (Zn ? Zn._next = this : Wn = this, Zn = this), this._call = t, this._time = e, se()
            },
            stop: function() {
                this._call && (this._call = null, this._time = 1 / 0, se())
            }
        };
        var he = function(t, n, e) {
                var i = new fe;
                return n = null == n ? 0 : +n, i.restart(function(e) {
                    i.stop(), t(e + n)
                }, n, e), i
            },
            le = _("start", "end", "interrupt"),
            de = [],
            _e = 0,
            be = 1,
            pe = 2,
            ge = 3,
            ve = 4,
            ye = 5,
            me = 6,
            we = function(t, n, e, i, r, a) {
                var f = t.__transition;
                if (f) {
                    if (e in f) return
                } else t.__transition = {};
                ! function(t, n, e) {
                    var i, r = t.__transition;

                    function a(c) {
                        var u, s, h, l;
                        if (e.state !== be) return o();
                        for (u in r)
                            if ((l = r[u]).name === e.name) {
                                if (l.state === ge) return he(a);
                                l.state === ve ? (l.state = me, l.timer.stop(), l.on.call("interrupt", t, t.__data__, l.index, l.group), delete r[u]) : +u < n && (l.state = me, l.timer.stop(), delete r[u])
                            }
                        if (he(function() {
                                e.state === ge && (e.state = ve, e.timer.restart(f, e.delay, e.time), f(c))
                            }), e.state = pe, e.on.call("start", t, t.__data__, e.index, e.group), e.state === pe) {
                            for (e.state = ge, i = new Array(h = e.tween.length), u = 0, s = -1; u < h; ++u)(l = e.tween[u].value.call(t, t.__data__, e.index, e.group)) && (i[++s] = l);
                            i.length = s + 1
                        }
                    }

                    function f(n) {
                        for (var r = n < e.duration ? e.ease.call(null, n / e.duration) : (e.timer.restart(o), e.state = ye, 1), a = -1, f = i.length; ++a < f;) i[a].call(null, r);
                        e.state === ye && (e.on.call("end", t, t.__data__, e.index, e.group), o())
                    }

                    function o() {
                        for (var i in e.state = me, e.timer.stop(), delete r[n], r) return;
                        delete t.__transition
                    }
                    r[n] = e, e.timer = oe(function(t) {
                        e.state = be, e.timer.restart(a, e.delay, e.time), e.delay <= t && a(t - e.delay)
                    }, 0, e.time)
                }(t, e, {
                    name: n,
                    index: i,
                    group: r,
                    on: le,
                    tween: de,
                    time: a.time,
                    delay: a.delay,
                    duration: a.duration,
                    ease: a.ease,
                    timer: null,
                    state: _e
                })
            };

        function xe(t, n) {
            var e = Te(t, n);
            if (e.state > _e) throw new Error("too late; already scheduled");
            return e
        }

        function Me(t, n) {
            var e = Te(t, n);
            if (e.state > pe) throw new Error("too late; already started");
            return e
        }

        function Te(t, n) {
            var e = t.__transition;
            if (!e || !(e = e[n])) throw new Error("transition not found");
            return e
        }
        var Ne = function(t, n) {
            var e, i, r, a = t.__transition,
                f = !0;
            if (a) {
                for (r in n = null == n ? null : n + "", a)(e = a[r]).name === n ? (i = e.state > pe && e.state < ye, e.state = me, e.timer.stop(), i && e.on.call("interrupt", t, t.__data__, e.index, e.group), delete a[r]) : f = !1;
                f && delete t.__transition
            }
        };

        function Ce(t, n, e) {
            var i = t._id;
            return t.each(function() {
                    var t = Me(this, i);
                    (t.value || (t.value = {}))[n] = e.apply(this, arguments)
                }),
                function(t) {
                    return Te(t, i).value[n]
                }
        }
        var Ae = function(t, n) {
            var e;
            return ("number" == typeof n ? Cn : n instanceof Ut ? Mn : (e = Ut(n)) ? (n = e, Mn) : Ln)(t, n)
        };
        var Ee = at.prototype.constructor;
        var Se = 0;

        function ke(t, n, e, i) {
            this._groups = t, this._parents = n, this._name = e, this._id = i
        }

        function ze() {
            return ++Se
        }
        var Ue = at.prototype;
        ke.prototype = function(t) {
            return at().transition(t)
        }.prototype = {
            constructor: ke,
            select: function(t) {
                var n = this._name,
                    e = this._id;
                "function" != typeof t && (t = m(t));
                for (var i = this._groups, r = i.length, a = new Array(r), f = 0; f < r; ++f)
                    for (var o, c, u = i[f], s = u.length, h = a[f] = new Array(s), l = 0; l < s; ++l)(o = u[l]) && (c = t.call(o, o.__data__, l, u)) && ("__data__" in o && (c.__data__ = o.__data__), h[l] = c, we(h[l], n, e, l, h, Te(o, e)));
                return new ke(a, this._parents, n, e)
            },
            selectAll: function(t) {
                var n = this._name,
                    e = this._id;
                "function" != typeof t && (t = x(t));
                for (var i = this._groups, r = i.length, a = [], f = [], o = 0; o < r; ++o)
                    for (var c, u = i[o], s = u.length, h = 0; h < s; ++h)
                        if (c = u[h]) {
                            for (var l, d = t.call(c, c.__data__, h, u), _ = Te(c, e), b = 0, p = d.length; b < p; ++b)(l = d[b]) && we(l, n, e, b, d, _);
                            a.push(d), f.push(c)
                        }
                return new ke(a, f, n, e)
            },
            filter: function(t) {
                "function" != typeof t && (t = C(t));
                for (var n = this._groups, e = n.length, i = new Array(e), r = 0; r < e; ++r)
                    for (var a, f = n[r], o = f.length, c = i[r] = [], u = 0; u < o; ++u)(a = f[u]) && t.call(a, a.__data__, u, f) && c.push(a);
                return new ke(i, this._parents, this._name, this._id)
            },
            merge: function(t) {
                if (t._id !== this._id) throw new Error;
                for (var n = this._groups, e = t._groups, i = n.length, r = e.length, a = Math.min(i, r), f = new Array(i), o = 0; o < a; ++o)
                    for (var c, u = n[o], s = e[o], h = u.length, l = f[o] = new Array(h), d = 0; d < h; ++d)(c = u[d] || s[d]) && (l[d] = c);
                for (; o < i; ++o) f[o] = n[o];
                return new ke(f, this._parents, this._name, this._id)
            },
            selection: function() {
                return new Ee(this._groups, this._parents)
            },
            transition: function() {
                for (var t = this._name, n = this._id, e = ze(), i = this._groups, r = i.length, a = 0; a < r; ++a)
                    for (var f, o = i[a], c = o.length, u = 0; u < c; ++u)
                        if (f = o[u]) {
                            var s = Te(f, n);
                            we(f, t, e, u, o, {
                                time: s.time + s.delay + s.duration,
                                delay: 0,
                                duration: s.duration,
                                ease: s.ease
                            })
                        }
                return new ke(i, this._parents, t, e)
            },
            call: Ue.call,
            nodes: Ue.nodes,
            node: Ue.node,
            size: Ue.size,
            empty: Ue.empty,
            each: Ue.each,
            on: function(t, n) {
                var e = this._id;
                return arguments.length < 2 ? Te(this.node(), e).on.on(t) : this.each(function(t, n, e) {
                    var i, r, a = function(t) {
                        return (t + "").trim().split(/^|\s+/).every(function(t) {
                            var n = t.indexOf(".");
                            return n >= 0 && (t = t.slice(0, n)), !t || "start" === t
                        })
                    }(n) ? xe : Me;
                    return function() {
                        var f = a(this, t),
                            o = f.on;
                        o !== i && (r = (i = o).copy()).on(n, e), f.on = r
                    }
                }(e, t, n))
            },
            attr: function(t, n) {
                var e = g(t),
                    i = "transform" === e ? Rn : Ae;
                return this.attrTween(t, "function" == typeof n ? (e.local ? function(t, n, e) {
                    var i, r, a;
                    return function() {
                        var f, o = e(this);
                        if (null != o) return (f = this.getAttributeNS(t.space, t.local)) === o ? null : f === i && o === r ? a : a = n(i = f, r = o);
                        this.removeAttributeNS(t.space, t.local)
                    }
                } : function(t, n, e) {
                    var i, r, a;
                    return function() {
                        var f, o = e(this);
                        if (null != o) return (f = this.getAttribute(t)) === o ? null : f === i && o === r ? a : a = n(i = f, r = o);
                        this.removeAttribute(t)
                    }
                })(e, i, Ce(this, "attr." + t, n)) : null == n ? (e.local ? function(t) {
                    return function() {
                        this.removeAttributeNS(t.space, t.local)
                    }
                } : function(t) {
                    return function() {
                        this.removeAttribute(t)
                    }
                })(e) : (e.local ? function(t, n, e) {
                    var i, r;
                    return function() {
                        var a = this.getAttributeNS(t.space, t.local);
                        return a === e ? null : a === i ? r : r = n(i = a, e)
                    }
                } : function(t, n, e) {
                    var i, r;
                    return function() {
                        var a = this.getAttribute(t);
                        return a === e ? null : a === i ? r : r = n(i = a, e)
                    }
                })(e, i, n + ""))
            },
            attrTween: function(t, n) {
                var e = "attr." + t;
                if (arguments.length < 2) return (e = this.tween(e)) && e._value;
                if (null == n) return this.tween(e, null);
                if ("function" != typeof n) throw new Error;
                var i = g(t);
                return this.tween(e, (i.local ? function(t, n) {
                    function e() {
                        var e = this,
                            i = n.apply(e, arguments);
                        return i && function(n) {
                            e.setAttributeNS(t.space, t.local, i(n))
                        }
                    }
                    return e._value = n, e
                } : function(t, n) {
                    function e() {
                        var e = this,
                            i = n.apply(e, arguments);
                        return i && function(n) {
                            e.setAttribute(t, i(n))
                        }
                    }
                    return e._value = n, e
                })(i, n))
            },
            style: function(t, n, e) {
                var i = "transform" == (t += "") ? Fn : Ae;
                return null == n ? this.styleTween(t, function(t, n) {
                    var e, i, r;
                    return function() {
                        var a = P(this, t),
                            f = (this.style.removeProperty(t), P(this, t));
                        return a === f ? null : a === e && f === i ? r : r = n(e = a, i = f)
                    }
                }(t, i)).on("end.style." + t, function(t) {
                    return function() {
                        this.style.removeProperty(t)
                    }
                }(t)) : this.styleTween(t, "function" == typeof n ? function(t, n, e) {
                    var i, r, a;
                    return function() {
                        var f = P(this, t),
                            o = e(this);
                        return null == o && (this.style.removeProperty(t), o = P(this, t)), f === o ? null : f === i && o === r ? a : a = n(i = f, r = o)
                    }
                }(t, i, Ce(this, "style." + t, n)) : function(t, n, e) {
                    var i, r;
                    return function() {
                        var a = P(this, t);
                        return a === e ? null : a === i ? r : r = n(i = a, e)
                    }
                }(t, i, n + ""), e)
            },
            styleTween: function(t, n, e) {
                var i = "style." + (t += "");
                if (arguments.length < 2) return (i = this.tween(i)) && i._value;
                if (null == n) return this.tween(i, null);
                if ("function" != typeof n) throw new Error;
                return this.tween(i, function(t, n, e) {
                    function i() {
                        var i = this,
                            r = n.apply(i, arguments);
                        return r && function(n) {
                            i.style.setProperty(t, r(n), e)
                        }
                    }
                    return i._value = n, i
                }(t, n, null == e ? "" : e))
            },
            text: function(t) {
                return this.tween("text", "function" == typeof t ? function(t) {
                    return function() {
                        var n = t(this);
                        this.textContent = null == n ? "" : n
                    }
                }(Ce(this, "text", t)) : function(t) {
                    return function() {
                        this.textContent = t
                    }
                }(null == t ? "" : t + ""))
            },
            remove: function() {
                return this.on("end.remove", (t = this._id, function() {
                    var n = this.parentNode;
                    for (var e in this.__transition)
                        if (+e !== t) return;
                    n && n.removeChild(this)
                }));
                var t
            },
            tween: function(t, n) {
                var e = this._id;
                if (t += "", arguments.length < 2) {
                    for (var i, r = Te(this.node(), e).tween, a = 0, f = r.length; a < f; ++a)
                        if ((i = r[a]).name === t) return i.value;
                    return null
                }
                return this.each((null == n ? function(t, n) {
                    var e, i;
                    return function() {
                        var r = Me(this, t),
                            a = r.tween;
                        if (a !== e)
                            for (var f = 0, o = (i = e = a).length; f < o; ++f)
                                if (i[f].name === n) {
                                    (i = i.slice()).splice(f, 1);
                                    break
                                }
                        r.tween = i
                    }
                } : function(t, n, e) {
                    var i, r;
                    if ("function" != typeof e) throw new Error;
                    return function() {
                        var a = Me(this, t),
                            f = a.tween;
                        if (f !== i) {
                            r = (i = f).slice();
                            for (var o = {
                                    name: n,
                                    value: e
                                }, c = 0, u = r.length; c < u; ++c)
                                if (r[c].name === n) {
                                    r[c] = o;
                                    break
                                }
                            c === u && r.push(o)
                        }
                        a.tween = r
                    }
                })(e, t, n))
            },
            delay: function(t) {
                var n = this._id;
                return arguments.length ? this.each(("function" == typeof t ? function(t, n) {
                    return function() {
                        xe(this, t).delay = +n.apply(this, arguments)
                    }
                } : function(t, n) {
                    return n = +n,
                        function() {
                            xe(this, t).delay = n
                        }
                })(n, t)) : Te(this.node(), n).delay
            },
            duration: function(t) {
                var n = this._id;
                return arguments.length ? this.each(("function" == typeof t ? function(t, n) {
                    return function() {
                        Me(this, t).duration = +n.apply(this, arguments)
                    }
                } : function(t, n) {
                    return n = +n,
                        function() {
                            Me(this, t).duration = n
                        }
                })(n, t)) : Te(this.node(), n).duration
            },
            ease: function(t) {
                var n = this._id;
                return arguments.length ? this.each(function(t, n) {
                    if ("function" != typeof n) throw new Error;
                    return function() {
                        Me(this, t).ease = n
                    }
                }(n, t)) : Te(this.node(), n).ease
            }
        };
        (function t(n) {
            function e(t) {
                return Math.pow(t, n)
            }
            return n = +n, e.exponent = t, e
        })(3),
        function t(n) {
            function e(t) {
                return 1 - Math.pow(1 - t, n)
            }
            return n = +n, e.exponent = t, e
        }(3),
        function t(n) {
            function e(t) {
                return ((t *= 2) <= 1 ? Math.pow(t, n) : 2 - Math.pow(2 - t, n)) / 2
            }
            return n = +n, e.exponent = t, e
        }(3), Math.PI;
        (function t(n) {
            function e(t) {
                return t * t * ((n + 1) * t - n)
            }
            return n = +n, e.overshoot = t, e
        })(1.70158),
        function t(n) {
            function e(t) {
                return --t * t * ((n + 1) * t + n) + 1
            }
            return n = +n, e.overshoot = t, e
        }(1.70158),
        function t(n) {
            function e(t) {
                return ((t *= 2) < 1 ? t * t * ((n + 1) * t - n) : (t -= 2) * t * ((n + 1) * t + n) + 2) / 2
            }
            return n = +n, e.overshoot = t, e
        }(1.70158);
        var Le = 2 * Math.PI,
            Pe = (function t(n, e) {
                var i = Math.asin(1 / (n = Math.max(1, n))) * (e /= Le);

                function r(t) {
                    return n * Math.pow(2, 10 * --t) * Math.sin((i - t) / e)
                }
                return r.amplitude = function(n) {
                    return t(n, e * Le)
                }, r.period = function(e) {
                    return t(n, e)
                }, r
            }(1, .3), function t(n, e) {
                var i = Math.asin(1 / (n = Math.max(1, n))) * (e /= Le);

                function r(t) {
                    return 1 - n * Math.pow(2, -10 * (t = +t)) * Math.sin((t + i) / e)
                }
                return r.amplitude = function(n) {
                    return t(n, e * Le)
                }, r.period = function(e) {
                    return t(n, e)
                }, r
            }(1, .3), function t(n, e) {
                var i = Math.asin(1 / (n = Math.max(1, n))) * (e /= Le);

                function r(t) {
                    return ((t = 2 * t - 1) < 0 ? n * Math.pow(2, 10 * t) * Math.sin((i - t) / e) : 2 - n * Math.pow(2, -10 * t) * Math.sin((i + t) / e)) / 2
                }
                return r.amplitude = function(n) {
                    return t(n, e * Le)
                }, r.period = function(e) {
                    return t(n, e)
                }, r
            }(1, .3), {
                time: null,
                delay: 0,
                duration: 250,
                ease: function(t) {
                    return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2
                }
            });

        function De(t, n) {
            for (var e; !(e = t.__transition) || !(e = e[n]);)
                if (!(t = t.parentNode)) return Pe.time = re(), Pe;
            return e
        }
        at.prototype.interrupt = function(t) {
            return this.each(function() {
                Ne(this, t)
            })
        }, at.prototype.transition = function(t) {
            var n, e;
            t instanceof ke ? (n = t._id, t = t._name) : (n = ze(), (e = Pe).time = re(), t = null == t ? null : t + "");
            for (var i = this._groups, r = i.length, a = 0; a < r; ++a)
                for (var f, o = i[a], c = o.length, u = 0; u < c; ++u)(f = o[u]) && we(f, t, n, u, o, e || De(f, n));
            return new ke(i, this._parents, t, n)
        };
        ["e", "w"].map($e), ["n", "s"].map($e), ["n", "e", "s", "w", "nw", "ne", "se", "sw"].map($e);

        function $e(t) {
            return {
                type: t
            }
        }
        Math.cos, Math.sin, Math.PI, Math.max;
        Array.prototype.slice;
        var Ye = Math.PI,
            Fe = 2 * Ye,
            Re = Fe - 1e-6;

        function He() {
            this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = ""
        }

        function Oe() {
            return new He
        }
        He.prototype = Oe.prototype = {
            constructor: He,
            moveTo: function(t, n) {
                this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +n)
            },
            closePath: function() {
                null !== this._x1 && (this._x1 = this._x0, this._y1 = this._y0, this._ += "Z")
            },
            lineTo: function(t, n) {
                this._ += "L" + (this._x1 = +t) + "," + (this._y1 = +n)
            },
            quadraticCurveTo: function(t, n, e, i) {
                this._ += "Q" + +t + "," + +n + "," + (this._x1 = +e) + "," + (this._y1 = +i)
            },
            bezierCurveTo: function(t, n, e, i, r, a) {
                this._ += "C" + +t + "," + +n + "," + +e + "," + +i + "," + (this._x1 = +r) + "," + (this._y1 = +a)
            },
            arcTo: function(t, n, e, i, r) {
                t = +t, n = +n, e = +e, i = +i, r = +r;
                var a = this._x1,
                    f = this._y1,
                    o = e - t,
                    c = i - n,
                    u = a - t,
                    s = f - n,
                    h = u * u + s * s;
                if (r < 0) throw new Error("negative radius: " + r);
                if (null === this._x1) this._ += "M" + (this._x1 = t) + "," + (this._y1 = n);
                else if (h > 1e-6)
                    if (Math.abs(s * o - c * u) > 1e-6 && r) {
                        var l = e - a,
                            d = i - f,
                            _ = o * o + c * c,
                            b = l * l + d * d,
                            p = Math.sqrt(_),
                            g = Math.sqrt(h),
                            v = r * Math.tan((Ye - Math.acos((_ + h - b) / (2 * p * g))) / 2),
                            y = v / g,
                            m = v / p;
                        Math.abs(y - 1) > 1e-6 && (this._ += "L" + (t + y * u) + "," + (n + y * s)), this._ += "A" + r + "," + r + ",0,0," + +(s * l > u * d) + "," + (this._x1 = t + m * o) + "," + (this._y1 = n + m * c)
                    } else this._ += "L" + (this._x1 = t) + "," + (this._y1 = n);
                else;
            },
            arc: function(t, n, e, i, r, a) {
                t = +t, n = +n;
                var f = (e = +e) * Math.cos(i),
                    o = e * Math.sin(i),
                    c = t + f,
                    u = n + o,
                    s = 1 ^ a,
                    h = a ? i - r : r - i;
                if (e < 0) throw new Error("negative radius: " + e);
                null === this._x1 ? this._ += "M" + c + "," + u : (Math.abs(this._x1 - c) > 1e-6 || Math.abs(this._y1 - u) > 1e-6) && (this._ += "L" + c + "," + u), e && (h < 0 && (h = h % Fe + Fe), h > Re ? this._ += "A" + e + "," + e + ",0,1," + s + "," + (t - f) + "," + (n - o) + "A" + e + "," + e + ",0,1," + s + "," + (this._x1 = c) + "," + (this._y1 = u) : h > 1e-6 && (this._ += "A" + e + "," + e + ",0," + +(h >= Ye) + "," + s + "," + (this._x1 = t + e * Math.cos(r)) + "," + (this._y1 = n + e * Math.sin(r))))
            },
            rect: function(t, n, e, i) {
                this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +n) + "h" + +e + "v" + +i + "h" + -e + "Z"
            },
            toString: function() {
                return this._
            }
        };

        function Xe() {}

        function Ie(t, n) {
            var e = new Xe;
            if (t instanceof Xe) t.each(function(t, n) {
                e.set(n, t)
            });
            else if (Array.isArray(t)) {
                var i, r = -1,
                    a = t.length;
                if (null == n)
                    for (; ++r < a;) e.set(r, t[r]);
                else
                    for (; ++r < a;) e.set(n(i = t[r], r, t), i)
            } else if (t)
                for (var f in t) e.set(f, t[f]);
            return e
        }
        Xe.prototype = Ie.prototype = {
            constructor: Xe,
            has: function(t) {
                return "$" + t in this
            },
            get: function(t) {
                return this["$" + t]
            },
            set: function(t, n) {
                return this["$" + t] = n, this
            },
            remove: function(t) {
                var n = "$" + t;
                return n in this && delete this[n]
            },
            clear: function() {
                for (var t in this) "$" === t[0] && delete this[t]
            },
            keys: function() {
                var t = [];
                for (var n in this) "$" === n[0] && t.push(n.slice(1));
                return t
            },
            values: function() {
                var t = [];
                for (var n in this) "$" === n[0] && t.push(this[n]);
                return t
            },
            entries: function() {
                var t = [];
                for (var n in this) "$" === n[0] && t.push({
                    key: n.slice(1),
                    value: this[n]
                });
                return t
            },
            size: function() {
                var t = 0;
                for (var n in this) "$" === n[0] && ++t;
                return t
            },
            empty: function() {
                for (var t in this)
                    if ("$" === t[0]) return !1;
                return !0
            },
            each: function(t) {
                for (var n in this) "$" === n[0] && t(this[n], n.slice(1), this)
            }
        };
        var Ve = Ie;

        function qe() {}
        var Be = Ve.prototype;

        function We(t, n) {
            var e = new qe;
            if (t instanceof qe) t.each(function(t) {
                e.add(t)
            });
            else if (t) {
                var i = -1,
                    r = t.length;
                if (null == n)
                    for (; ++i < r;) e.add(t[i]);
                else
                    for (; ++i < r;) e.add(n(t[i], i, t))
            }
            return e
        }
        qe.prototype = We.prototype = {
            constructor: qe,
            has: Be.has,
            add: function(t) {
                return this["$" + (t += "")] = t, this
            },
            remove: Be.remove,
            clear: Be.clear,
            values: Be.keys,
            size: Be.size,
            empty: Be.empty,
            each: Be.each
        };
        Array.prototype.slice;
        var Ze = {},
            je = {},
            Qe = 34,
            Je = 10,
            Ge = 13;

        function Ke(t) {
            return new Function("d", "return {" + t.map(function(t, n) {
                return JSON.stringify(t) + ": d[" + n + "]"
            }).join(",") + "}")
        }
        var ti = function(t) {
                var n = new RegExp('["' + t + "\n\r]"),
                    e = t.charCodeAt(0);

                function i(t, n) {
                    var i, r = [],
                        a = t.length,
                        f = 0,
                        o = 0,
                        c = a <= 0,
                        u = !1;

                    function s() {
                        if (c) return je;
                        if (u) return u = !1, Ze;
                        var n, i, r = f;
                        if (t.charCodeAt(r) === Qe) {
                            for (; f++ < a && t.charCodeAt(f) !== Qe || t.charCodeAt(++f) === Qe;);
                            return (n = f) >= a ? c = !0 : (i = t.charCodeAt(f++)) === Je ? u = !0 : i === Ge && (u = !0, t.charCodeAt(f) === Je && ++f), t.slice(r + 1, n - 1).replace(/""/g, '"')
                        }
                        for (; f < a;) {
                            if ((i = t.charCodeAt(n = f++)) === Je) u = !0;
                            else if (i === Ge) u = !0, t.charCodeAt(f) === Je && ++f;
                            else if (i !== e) continue;
                            return t.slice(r, n)
                        }
                        return c = !0, t.slice(r, a)
                    }
                    for (t.charCodeAt(a - 1) === Je && --a, t.charCodeAt(a - 1) === Ge && --a;
                        (i = s()) !== je;) {
                        for (var h = []; i !== Ze && i !== je;) h.push(i), i = s();
                        n && null == (h = n(h, o++)) || r.push(h)
                    }
                    return r
                }

                function r(n) {
                    return n.map(a).join(t)
                }

                function a(t) {
                    return null == t ? "" : n.test(t += "") ? '"' + t.replace(/"/g, '""') + '"' : t
                }
                return {
                    parse: function(t, n) {
                        var e, r, a = i(t, function(t, i) {
                            if (e) return e(t, i - 1);
                            r = t, e = n ? function(t, n) {
                                var e = Ke(t);
                                return function(i, r) {
                                    return n(e(i), r, t)
                                }
                            }(t, n) : Ke(t)
                        });
                        return a.columns = r || [], a
                    },
                    parseRows: i,
                    format: function(n, e) {
                        return null == e && (e = function(t) {
                            var n = Object.create(null),
                                e = [];
                            return t.forEach(function(t) {
                                for (var i in t) i in n || e.push(n[i] = i)
                            }), e
                        }(n)), [e.map(a).join(t)].concat(n.map(function(n) {
                            return e.map(function(t) {
                                return a(n[t])
                            }).join(t)
                        })).join("\n")
                    },
                    formatRows: function(t) {
                        return t.map(r).join("\n")
                    }
                }
            },
            ni = ti(","),
            ei = ni.parse,
            ii = (ni.parseRows, ni.format, ni.formatRows, ti("\t")),
            ri = ii.parse;
        ii.parseRows, ii.format, ii.formatRows;

        function ai(t) {
            if (!t.ok) throw new Error(t.status + " " + t.statusText);
            return t.text()
        }
        var fi = function(t, n) {
            return fetch(t, n).then(ai)
        };

        function oi(t) {
            return function(n, e, i) {
                return 2 === arguments.length && "function" == typeof e && (i = e, e = void 0), fi(n, e).then(function(n) {
                    return t(n, i)
                })
            }
        }
        oi(ei), oi(ri);

        function ci(t) {
            return function(n, e) {
                return fi(n, e).then(function(n) {
                    return (new DOMParser).parseFromString(n, t)
                })
            }
        }
        ci("application/xml"), ci("text/html"), ci("image/svg+xml");

        function ui(t, n, e, i) {
            if (isNaN(n) || isNaN(e)) return t;
            var r, a, f, o, c, u, s, h, l, d = t._root,
                _ = {
                    data: i
                },
                b = t._x0,
                p = t._y0,
                g = t._x1,
                v = t._y1;
            if (!d) return t._root = _, t;
            for (; d.length;)
                if ((u = n >= (a = (b + g) / 2)) ? b = a : g = a, (s = e >= (f = (p + v) / 2)) ? p = f : v = f, r = d, !(d = d[h = s << 1 | u])) return r[h] = _, t;
            if (o = +t._x.call(null, d.data), c = +t._y.call(null, d.data), n === o && e === c) return _.next = d, r ? r[h] = _ : t._root = _, t;
            do {
                r = r ? r[h] = new Array(4) : t._root = new Array(4), (u = n >= (a = (b + g) / 2)) ? b = a : g = a, (s = e >= (f = (p + v) / 2)) ? p = f : v = f
            } while ((h = s << 1 | u) == (l = (c >= f) << 1 | o >= a));
            return r[l] = d, r[h] = _, t
        }
        var si = function(t, n, e, i, r) {
            this.node = t, this.x0 = n, this.y0 = e, this.x1 = i, this.y1 = r
        };

        function hi(t) {
            return t[0]
        }

        function li(t) {
            return t[1]
        }

        function di(t, n, e) {
            var i = new _i(null == n ? hi : n, null == e ? li : e, NaN, NaN, NaN, NaN);
            return null == t ? i : i.addAll(t)
        }

        function _i(t, n, e, i, r, a) {
            this._x = t, this._y = n, this._x0 = e, this._y0 = i, this._x1 = r, this._y1 = a, this._root = void 0
        }

        function bi(t) {
            for (var n = {
                    data: t.data
                }, e = n; t = t.next;) e = e.next = {
                data: t.data
            };
            return n
        }
        var pi = di.prototype = _i.prototype;
        pi.copy = function() {
            var t, n, e = new _i(this._x, this._y, this._x0, this._y0, this._x1, this._y1),
                i = this._root;
            if (!i) return e;
            if (!i.length) return e._root = bi(i), e;
            for (t = [{
                    source: i,
                    target: e._root = new Array(4)
                }]; i = t.pop();)
                for (var r = 0; r < 4; ++r)(n = i.source[r]) && (n.length ? t.push({
                    source: n,
                    target: i.target[r] = new Array(4)
                }) : i.target[r] = bi(n));
            return e
        }, pi.add = function(t) {
            var n = +this._x.call(null, t),
                e = +this._y.call(null, t);
            return ui(this.cover(n, e), n, e, t)
        }, pi.addAll = function(t) {
            var n, e, i, r, a = t.length,
                f = new Array(a),
                o = new Array(a),
                c = 1 / 0,
                u = 1 / 0,
                s = -1 / 0,
                h = -1 / 0;
            for (e = 0; e < a; ++e) isNaN(i = +this._x.call(null, n = t[e])) || isNaN(r = +this._y.call(null, n)) || (f[e] = i, o[e] = r, i < c && (c = i), i > s && (s = i), r < u && (u = r), r > h && (h = r));
            for (s < c && (c = this._x0, s = this._x1), h < u && (u = this._y0, h = this._y1), this.cover(c, u).cover(s, h), e = 0; e < a; ++e) ui(this, f[e], o[e], t[e]);
            return this
        }, pi.cover = function(t, n) {
            if (isNaN(t = +t) || isNaN(n = +n)) return this;
            var e = this._x0,
                i = this._y0,
                r = this._x1,
                a = this._y1;
            if (isNaN(e)) r = (e = Math.floor(t)) + 1, a = (i = Math.floor(n)) + 1;
            else {
                if (!(e > t || t > r || i > n || n > a)) return this;
                var f, o, c = r - e,
                    u = this._root;
                switch (o = (n < (i + a) / 2) << 1 | t < (e + r) / 2) {
                    case 0:
                        do {
                            (f = new Array(4))[o] = u, u = f
                        } while (a = i + (c *= 2), t > (r = e + c) || n > a);
                        break;
                    case 1:
                        do {
                            (f = new Array(4))[o] = u, u = f
                        } while (a = i + (c *= 2), (e = r - c) > t || n > a);
                        break;
                    case 2:
                        do {
                            (f = new Array(4))[o] = u, u = f
                        } while (i = a - (c *= 2), t > (r = e + c) || i > n);
                        break;
                    case 3:
                        do {
                            (f = new Array(4))[o] = u, u = f
                        } while (i = a - (c *= 2), (e = r - c) > t || i > n)
                }
                this._root && this._root.length && (this._root = u)
            }
            return this._x0 = e, this._y0 = i, this._x1 = r, this._y1 = a, this
        }, pi.data = function() {
            var t = [];
            return this.visit(function(n) {
                if (!n.length)
                    do {
                        t.push(n.data)
                    } while (n = n.next)
            }), t
        }, pi.extent = function(t) {
            return arguments.length ? this.cover(+t[0][0], +t[0][1]).cover(+t[1][0], +t[1][1]) : isNaN(this._x0) ? void 0 : [
                [this._x0, this._y0],
                [this._x1, this._y1]
            ]
        }, pi.find = function(t, n, e) {
            var i, r, a, f, o, c, u, s = this._x0,
                h = this._y0,
                l = this._x1,
                d = this._y1,
                _ = [],
                b = this._root;
            for (b && _.push(new si(b, s, h, l, d)), null == e ? e = 1 / 0 : (s = t - e, h = n - e, l = t + e, d = n + e, e *= e); c = _.pop();)
                if (!(!(b = c.node) || (r = c.x0) > l || (a = c.y0) > d || (f = c.x1) < s || (o = c.y1) < h))
                    if (b.length) {
                        var p = (r + f) / 2,
                            g = (a + o) / 2;
                        _.push(new si(b[3], p, g, f, o), new si(b[2], r, g, p, o), new si(b[1], p, a, f, g), new si(b[0], r, a, p, g)), (u = (n >= g) << 1 | t >= p) && (c = _[_.length - 1], _[_.length - 1] = _[_.length - 1 - u], _[_.length - 1 - u] = c)
                    } else {
                        var v = t - +this._x.call(null, b.data),
                            y = n - +this._y.call(null, b.data),
                            m = v * v + y * y;
                        if (m < e) {
                            var w = Math.sqrt(e = m);
                            s = t - w, h = n - w, l = t + w, d = n + w, i = b.data
                        }
                    }
            return i
        }, pi.remove = function(t) {
            if (isNaN(a = +this._x.call(null, t)) || isNaN(f = +this._y.call(null, t))) return this;
            var n, e, i, r, a, f, o, c, u, s, h, l, d = this._root,
                _ = this._x0,
                b = this._y0,
                p = this._x1,
                g = this._y1;
            if (!d) return this;
            if (d.length)
                for (;;) {
                    if ((u = a >= (o = (_ + p) / 2)) ? _ = o : p = o, (s = f >= (c = (b + g) / 2)) ? b = c : g = c, n = d, !(d = d[h = s << 1 | u])) return this;
                    if (!d.length) break;
                    (n[h + 1 & 3] || n[h + 2 & 3] || n[h + 3 & 3]) && (e = n, l = h)
                }
            for (; d.data !== t;)
                if (i = d, !(d = d.next)) return this;
            return (r = d.next) && delete d.next, i ? (r ? i.next = r : delete i.next, this) : n ? (r ? n[h] = r : delete n[h], (d = n[0] || n[1] || n[2] || n[3]) && d === (n[3] || n[2] || n[1] || n[0]) && !d.length && (e ? e[l] = d : this._root = d), this) : (this._root = r, this)
        }, pi.removeAll = function(t) {
            for (var n = 0, e = t.length; n < e; ++n) this.remove(t[n]);
            return this
        }, pi.root = function() {
            return this._root
        }, pi.size = function() {
            var t = 0;
            return this.visit(function(n) {
                if (!n.length)
                    do {
                        ++t
                    } while (n = n.next)
            }), t
        }, pi.visit = function(t) {
            var n, e, i, r, a, f, o = [],
                c = this._root;
            for (c && o.push(new si(c, this._x0, this._y0, this._x1, this._y1)); n = o.pop();)
                if (!t(c = n.node, i = n.x0, r = n.y0, a = n.x1, f = n.y1) && c.length) {
                    var u = (i + a) / 2,
                        s = (r + f) / 2;
                    (e = c[3]) && o.push(new si(e, u, s, a, f)), (e = c[2]) && o.push(new si(e, i, s, u, f)), (e = c[1]) && o.push(new si(e, u, r, a, s)), (e = c[0]) && o.push(new si(e, i, r, u, s))
                }
            return this
        }, pi.visitAfter = function(t) {
            var n, e = [],
                i = [];
            for (this._root && e.push(new si(this._root, this._x0, this._y0, this._x1, this._y1)); n = e.pop();) {
                var r = n.node;
                if (r.length) {
                    var a, f = n.x0,
                        o = n.y0,
                        c = n.x1,
                        u = n.y1,
                        s = (f + c) / 2,
                        h = (o + u) / 2;
                    (a = r[0]) && e.push(new si(a, f, o, s, h)), (a = r[1]) && e.push(new si(a, s, o, c, h)), (a = r[2]) && e.push(new si(a, f, h, s, u)), (a = r[3]) && e.push(new si(a, s, h, c, u))
                }
                i.push(n)
            }
            for (; n = i.pop();) t(n.node, n.x0, n.y0, n.x1, n.y1);
            return this
        }, pi.x = function(t) {
            return arguments.length ? (this._x = t, this) : this._x
        }, pi.y = function(t) {
            return arguments.length ? (this._y = t, this) : this._y
        };
        Math.PI, Math.sqrt(5);
        var gi = function(t, n) {
                if ((e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf("e")) < 0) return null;
                var e, i = t.slice(0, e);
                return [i.length > 1 ? i[0] + i.slice(2) : i, +t.slice(e + 1)]
            },
            vi = function(t) {
                return (t = gi(Math.abs(t))) ? t[1] : NaN
            },
            yi = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;

        function mi(t) {
            return new wi(t)
        }

        function wi(t) {
            if (!(n = yi.exec(t))) throw new Error("invalid format: " + t);
            var n;
            this.fill = n[1] || " ", this.align = n[2] || ">", this.sign = n[3] || "-", this.symbol = n[4] || "", this.zero = !!n[5], this.width = n[6] && +n[6], this.comma = !!n[7], this.precision = n[8] && +n[8].slice(1), this.trim = !!n[9], this.type = n[10] || ""
        }
        mi.prototype = wi.prototype, wi.prototype.toString = function() {
            return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (null == this.width ? "" : Math.max(1, 0 | this.width)) + (this.comma ? "," : "") + (null == this.precision ? "" : "." + Math.max(0, 0 | this.precision)) + (this.trim ? "~" : "") + this.type
        };
        var xi, Mi, Ti = function(t) {
                t: for (var n, e = t.length, i = 1, r = -1; i < e; ++i) switch (t[i]) {
                    case ".":
                        r = n = i;
                        break;
                    case "0":
                        0 === r && (r = i), n = i;
                        break;
                    default:
                        if (r > 0) {
                            if (!+t[i]) break t;
                            r = 0
                        }
                }
                return r > 0 ? t.slice(0, r) + t.slice(n + 1) : t
            },
            Ni = function(t, n) {
                var e = gi(t, n);
                if (!e) return t + "";
                var i = e[0],
                    r = e[1];
                return r < 0 ? "0." + new Array(-r).join("0") + i : i.length > r + 1 ? i.slice(0, r + 1) + "." + i.slice(r + 1) : i + new Array(r - i.length + 2).join("0")
            },
            Ci = {
                "%": function(t, n) {
                    return (100 * t).toFixed(n)
                },
                b: function(t) {
                    return Math.round(t).toString(2)
                },
                c: function(t) {
                    return t + ""
                },
                d: function(t) {
                    return Math.round(t).toString(10)
                },
                e: function(t, n) {
                    return t.toExponential(n)
                },
                f: function(t, n) {
                    return t.toFixed(n)
                },
                g: function(t, n) {
                    return t.toPrecision(n)
                },
                o: function(t) {
                    return Math.round(t).toString(8)
                },
                p: function(t, n) {
                    return Ni(100 * t, n)
                },
                r: Ni,
                s: function(t, n) {
                    var e = gi(t, n);
                    if (!e) return t + "";
                    var i = e[0],
                        r = e[1],
                        a = r - (xi = 3 * Math.max(-8, Math.min(8, Math.floor(r / 3)))) + 1,
                        f = i.length;
                    return a === f ? i : a > f ? i + new Array(a - f + 1).join("0") : a > 0 ? i.slice(0, a) + "." + i.slice(a) : "0." + new Array(1 - a).join("0") + gi(t, Math.max(0, n + a - 1))[0]
                },
                X: function(t) {
                    return Math.round(t).toString(16).toUpperCase()
                },
                x: function(t) {
                    return Math.round(t).toString(16)
                }
            },
            Ai = function(t) {
                return t
            },
            Ei = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
        Mi = function(t) {
            var n, e, i = t.grouping && t.thousands ? (n = t.grouping, e = t.thousands, function(t, i) {
                    for (var r = t.length, a = [], f = 0, o = n[0], c = 0; r > 0 && o > 0 && (c + o + 1 > i && (o = Math.max(1, i - c)), a.push(t.substring(r -= o, r + o)), !((c += o + 1) > i));) o = n[f = (f + 1) % n.length];
                    return a.reverse().join(e)
                }) : Ai,
                r = t.currency,
                a = t.decimal,
                f = t.numerals ? function(t) {
                    return function(n) {
                        return n.replace(/[0-9]/g, function(n) {
                            return t[+n]
                        })
                    }
                }(t.numerals) : Ai,
                o = t.percent || "%";

            function c(t) {
                var n = (t = mi(t)).fill,
                    e = t.align,
                    c = t.sign,
                    u = t.symbol,
                    s = t.zero,
                    h = t.width,
                    l = t.comma,
                    d = t.precision,
                    _ = t.trim,
                    b = t.type;
                "n" === b ? (l = !0, b = "g") : Ci[b] || (null == d && (d = 12), _ = !0, b = "g"), (s || "0" === n && "=" === e) && (s = !0, n = "0", e = "=");
                var p = "$" === u ? r[0] : "#" === u && /[boxX]/.test(b) ? "0" + b.toLowerCase() : "",
                    g = "$" === u ? r[1] : /[%p]/.test(b) ? o : "",
                    v = Ci[b],
                    y = /[defgprs%]/.test(b);

                function m(t) {
                    var r, o, u, m = p,
                        w = g;
                    if ("c" === b) w = v(t) + w, t = "";
                    else {
                        var x = (t = +t) < 0;
                        if (t = v(Math.abs(t), d), _ && (t = Ti(t)), x && 0 == +t && (x = !1), m = (x ? "(" === c ? c : "-" : "-" === c || "(" === c ? "" : c) + m, w = ("s" === b ? Ei[8 + xi / 3] : "") + w + (x && "(" === c ? ")" : ""), y)
                            for (r = -1, o = t.length; ++r < o;)
                                if (48 > (u = t.charCodeAt(r)) || u > 57) {
                                    w = (46 === u ? a + t.slice(r + 1) : t.slice(r)) + w, t = t.slice(0, r);
                                    break
                                }
                    }
                    l && !s && (t = i(t, 1 / 0));
                    var M = m.length + t.length + w.length,
                        T = M < h ? new Array(h - M + 1).join(n) : "";
                    switch (l && s && (t = i(T + t, T.length ? h - w.length : 1 / 0), T = ""), e) {
                        case "<":
                            t = m + t + w + T;
                            break;
                        case "=":
                            t = m + T + t + w;
                            break;
                        case "^":
                            t = T.slice(0, M = T.length >> 1) + m + t + w + T.slice(M);
                            break;
                        default:
                            t = T + m + t + w
                    }
                    return f(t)
                }
                return d = null == d ? 6 : /[gprs]/.test(b) ? Math.max(1, Math.min(21, d)) : Math.max(0, Math.min(20, d)), m.toString = function() {
                    return t + ""
                }, m
            }
            return {
                format: c,
                formatPrefix: function(t, n) {
                    var e = c(((t = mi(t)).type = "f", t)),
                        i = 3 * Math.max(-8, Math.min(8, Math.floor(vi(n) / 3))),
                        r = Math.pow(10, -i),
                        a = Ei[8 + i / 3];
                    return function(t) {
                        return e(r * t) + a
                    }
                }
            }
        }({
            decimal: ".",
            thousands: ",",
            grouping: [3],
            currency: ["$", ""]
        }), Mi.format, Mi.formatPrefix;
        var Si = function() {
            return new ki
        };

        function ki() {
            this.reset()
        }
        ki.prototype = {
            constructor: ki,
            reset: function() {
                this.s = this.t = 0
            },
            add: function(t) {
                Ui(zi, t, this.t), Ui(this, zi.s, this.s), this.s ? this.t += zi.t : this.s = zi.t
            },
            valueOf: function() {
                return this.s
            }
        };
        var zi = new ki;

        function Ui(t, n, e) {
            var i = t.s = n + e,
                r = i - n,
                a = i - r;
            t.t = n - a + (e - r)
        }
        var Li = 1e-6,
            Pi = Math.PI,
            Di = Pi / 2,
            $i = Pi / 4,
            Yi = 2 * Pi,
            Fi = Pi / 180,
            Ri = Math.abs,
            Hi = Math.atan,
            Oi = Math.atan2,
            Xi = Math.cos,
            Ii = (Math.ceil, Math.exp),
            Vi = (Math.floor, Math.log),
            qi = (Math.pow, Math.sin),
            Bi = (Math.sign, Math.sqrt),
            Wi = Math.tan;

        function Zi(t) {
            return t > 1 ? 0 : t < -1 ? Pi : Math.acos(t)
        }

        function ji(t) {
            return t > 1 ? Di : t < -1 ? -Di : Math.asin(t)
        }

        function Qi() {}
        Si(), Si();

        function Ji(t) {
            var n = t[0],
                e = t[1],
                i = Xi(e);
            return [i * Xi(n), i * qi(n), qi(e)]
        }

        function Gi(t, n) {
            return [t[1] * n[2] - t[2] * n[1], t[2] * n[0] - t[0] * n[2], t[0] * n[1] - t[1] * n[0]]
        }

        function Ki(t) {
            var n = Bi(t[0] * t[0] + t[1] * t[1] + t[2] * t[2]);
            t[0] /= n, t[1] /= n, t[2] /= n
        }
        Si();

        function tr(t, n) {
            return [Ri(t) > Pi ? t + Math.round(-t / Yi) * Yi : t, n]
        }
        tr.invert = tr;
        var nr = function() {
                var t, n = [];
                return {
                    point: function(n, e) {
                        t.push([n, e])
                    },
                    lineStart: function() {
                        n.push(t = [])
                    },
                    lineEnd: Qi,
                    rejoin: function() {
                        n.length > 1 && n.push(n.pop().concat(n.shift()))
                    },
                    result: function() {
                        var e = n;
                        return n = [], t = null, e
                    }
                }
            },
            er = function(t, n) {
                return Ri(t[0] - n[0]) < Li && Ri(t[1] - n[1]) < Li
            };

        function ir(t, n, e, i) {
            this.x = t, this.z = n, this.o = e, this.e = i, this.v = !1, this.n = this.p = null
        }
        var rr = function(t, n, e, i, r) {
            var a, f, o = [],
                c = [];
            if (t.forEach(function(t) {
                    if (!((n = t.length - 1) <= 0)) {
                        var n, e, i = t[0],
                            f = t[n];
                        if (er(i, f)) {
                            for (r.lineStart(), a = 0; a < n; ++a) r.point((i = t[a])[0], i[1]);
                            r.lineEnd()
                        } else o.push(e = new ir(i, t, null, !0)), c.push(e.o = new ir(i, null, e, !1)), o.push(e = new ir(f, t, null, !1)), c.push(e.o = new ir(f, null, e, !0))
                    }
                }), o.length) {
                for (c.sort(n), ar(o), ar(c), a = 0, f = c.length; a < f; ++a) c[a].e = e = !e;
                for (var u, s, h = o[0];;) {
                    for (var l = h, d = !0; l.v;)
                        if ((l = l.n) === h) return;
                    u = l.z, r.lineStart();
                    do {
                        if (l.v = l.o.v = !0, l.e) {
                            if (d)
                                for (a = 0, f = u.length; a < f; ++a) r.point((s = u[a])[0], s[1]);
                            else i(l.x, l.n.x, 1, r);
                            l = l.n
                        } else {
                            if (d)
                                for (u = l.p.z, a = u.length - 1; a >= 0; --a) r.point((s = u[a])[0], s[1]);
                            else i(l.x, l.p.x, -1, r);
                            l = l.p
                        }
                        u = (l = l.o).z, d = !d
                    } while (!l.v);
                    r.lineEnd()
                }
            }
        };

        function ar(t) {
            if (n = t.length) {
                for (var n, e, i = 0, r = t[0]; ++i < n;) r.n = e = t[i], e.p = r, r = e;
                r.n = e = t[0], e.p = r
            }
        }
        var fr = Si(),
            or = function(t, n) {
                var e = n[0],
                    i = n[1],
                    r = qi(i),
                    a = [qi(e), -Xi(e), 0],
                    f = 0,
                    o = 0;
                fr.reset(), 1 === r ? i = Di + Li : -1 === r && (i = -Di - Li);
                for (var c = 0, u = t.length; c < u; ++c)
                    if (h = (s = t[c]).length)
                        for (var s, h, l = s[h - 1], d = l[0], _ = l[1] / 2 + $i, b = qi(_), p = Xi(_), g = 0; g < h; ++g, d = y, b = w, p = x, l = v) {
                            var v = s[g],
                                y = v[0],
                                m = v[1] / 2 + $i,
                                w = qi(m),
                                x = Xi(m),
                                M = y - d,
                                T = M >= 0 ? 1 : -1,
                                N = T * M,
                                C = N > Pi,
                                A = b * w;
                            if (fr.add(Oi(A * T * qi(N), p * x + A * Xi(N))), f += C ? M + T * Yi : M, C ^ d >= e ^ y >= e) {
                                var E = Gi(Ji(l), Ji(v));
                                Ki(E);
                                var S = Gi(a, E);
                                Ki(S);
                                var k = (C ^ M >= 0 ? -1 : 1) * ji(S[2]);
                                (i > k || i === k && (E[0] || E[1])) && (o += C ^ M >= 0 ? 1 : -1)
                            }
                        }
                    return (f < -Li || f < Li && fr < -Li) ^ 1 & o
            },
            cr = function(t, n, e, i) {
                return function(r) {
                    var a, f, o, u = n(r),
                        s = nr(),
                        h = n(s),
                        l = !1,
                        d = {
                            point: _,
                            lineStart: p,
                            lineEnd: g,
                            polygonStart: function() {
                                d.point = v, d.lineStart = y, d.lineEnd = m, f = [], a = []
                            },
                            polygonEnd: function() {
                                d.point = _, d.lineStart = p, d.lineEnd = g, f = c(f);
                                var t = or(a, i);
                                f.length ? (l || (r.polygonStart(), l = !0), rr(f, sr, t, e, r)) : t && (l || (r.polygonStart(), l = !0), r.lineStart(), e(null, null, 1, r), r.lineEnd()), l && (r.polygonEnd(), l = !1), f = a = null
                            },
                            sphere: function() {
                                r.polygonStart(), r.lineStart(), e(null, null, 1, r), r.lineEnd(), r.polygonEnd()
                            }
                        };

                    function _(n, e) {
                        t(n, e) && r.point(n, e)
                    }

                    function b(t, n) {
                        u.point(t, n)
                    }

                    function p() {
                        d.point = b, u.lineStart()
                    }

                    function g() {
                        d.point = _, u.lineEnd()
                    }

                    function v(t, n) {
                        o.push([t, n]), h.point(t, n)
                    }

                    function y() {
                        h.lineStart(), o = []
                    }

                    function m() {
                        v(o[0][0], o[0][1]), h.lineEnd();
                        var t, n, e, i, c = h.clean(),
                            u = s.result(),
                            d = u.length;
                        if (o.pop(), a.push(o), o = null, d)
                            if (1 & c) {
                                if ((n = (e = u[0]).length - 1) > 0) {
                                    for (l || (r.polygonStart(), l = !0), r.lineStart(), t = 0; t < n; ++t) r.point((i = e[t])[0], i[1]);
                                    r.lineEnd()
                                }
                            } else d > 1 && 2 & c && u.push(u.pop().concat(u.shift())), f.push(u.filter(ur))
                    }
                    return d
                }
            };

        function ur(t) {
            return t.length > 1
        }

        function sr(t, n) {
            return ((t = t.x)[0] < 0 ? t[1] - Di - Li : Di - t[1]) - ((n = n.x)[0] < 0 ? n[1] - Di - Li : Di - n[1])
        }
        cr(function() {
            return !0
        }, function(t) {
            var n, e = NaN,
                i = NaN,
                r = NaN;
            return {
                lineStart: function() {
                    t.lineStart(), n = 1
                },
                point: function(a, f) {
                    var o = a > 0 ? Pi : -Pi,
                        c = Ri(a - e);
                    Ri(c - Pi) < Li ? (t.point(e, i = (i + f) / 2 > 0 ? Di : -Di), t.point(r, i), t.lineEnd(), t.lineStart(), t.point(o, i), t.point(a, i), n = 0) : r !== o && c >= Pi && (Ri(e - r) < Li && (e -= r * Li), Ri(a - o) < Li && (a -= o * Li), i = function(t, n, e, i) {
                        var r, a, f = qi(t - e);
                        return Ri(f) > Li ? Hi((qi(n) * (a = Xi(i)) * qi(e) - qi(i) * (r = Xi(n)) * qi(t)) / (r * a * f)) : (n + i) / 2
                    }(e, i, a, f), t.point(r, i), t.lineEnd(), t.lineStart(), t.point(o, i), n = 0), t.point(e = a, i = f), r = o
                },
                lineEnd: function() {
                    t.lineEnd(), e = i = NaN
                },
                clean: function() {
                    return 2 - n
                }
            }
        }, function(t, n, e, i) {
            var r;
            if (null == t) r = e * Di, i.point(-Pi, r), i.point(0, r), i.point(Pi, r), i.point(Pi, 0), i.point(Pi, -r), i.point(0, -r), i.point(-Pi, -r), i.point(-Pi, 0), i.point(-Pi, r);
            else if (Ri(t[0] - n[0]) > Li) {
                var a = t[0] < n[0] ? Pi : -Pi;
                r = e * a / 2, i.point(-a, r), i.point(0, r), i.point(a, r)
            } else i.point(n[0], n[1])
        }, [-Pi, -Di]);
        Si();
        Si(), Si();

        function hr(t) {
            this._context = t
        }
        hr.prototype = {
            _radius: 4.5,
            pointRadius: function(t) {
                return this._radius = t, this
            },
            polygonStart: function() {
                this._line = 0
            },
            polygonEnd: function() {
                this._line = NaN
            },
            lineStart: function() {
                this._point = 0
            },
            lineEnd: function() {
                0 === this._line && this._context.closePath(), this._point = NaN
            },
            point: function(t, n) {
                switch (this._point) {
                    case 0:
                        this._context.moveTo(t, n), this._point = 1;
                        break;
                    case 1:
                        this._context.lineTo(t, n);
                        break;
                    default:
                        this._context.moveTo(t + this._radius, n), this._context.arc(t, n, this._radius, 0, Yi)
                }
            },
            result: Qi
        };
        Si();

        function lr() {
            this._string = []
        }

        function dr(t) {
            return "m0," + t + "a" + t + "," + t + " 0 1,1 0," + -2 * t + "a" + t + "," + t + " 0 1,1 0," + 2 * t + "z"
        }
        lr.prototype = {
            _radius: 4.5,
            _circle: dr(4.5),
            pointRadius: function(t) {
                return (t = +t) !== this._radius && (this._radius = t, this._circle = null), this
            },
            polygonStart: function() {
                this._line = 0
            },
            polygonEnd: function() {
                this._line = NaN
            },
            lineStart: function() {
                this._point = 0
            },
            lineEnd: function() {
                0 === this._line && this._string.push("Z"), this._point = NaN
            },
            point: function(t, n) {
                switch (this._point) {
                    case 0:
                        this._string.push("M", t, ",", n), this._point = 1;
                        break;
                    case 1:
                        this._string.push("L", t, ",", n);
                        break;
                    default:
                        null == this._circle && (this._circle = dr(this._radius)), this._string.push("M", t, ",", n, this._circle)
                }
            },
            result: function() {
                if (this._string.length) {
                    var t = this._string.join("");
                    return this._string = [], t
                }
                return null
            }
        };

        function _r(t) {
            return function(n) {
                var e = new br;
                for (var i in t) e[i] = t[i];
                return e.stream = n, e
            }
        }

        function br() {}
        br.prototype = {
            constructor: br,
            point: function(t, n) {
                this.stream.point(t, n)
            },
            sphere: function() {
                this.stream.sphere()
            },
            lineStart: function() {
                this.stream.lineStart()
            },
            lineEnd: function() {
                this.stream.lineEnd()
            },
            polygonStart: function() {
                this.stream.polygonStart()
            },
            polygonEnd: function() {
                this.stream.polygonEnd()
            }
        };
        Xi(30 * Fi);
        _r({
            point: function(t, n) {
                this.stream.point(t * Fi, n * Fi)
            }
        });

        function pr(t) {
            return function(n, e) {
                var i = Xi(n),
                    r = Xi(e),
                    a = t(i * r);
                return [a * r * qi(n), a * qi(e)]
            }
        }

        function gr(t) {
            return function(n, e) {
                var i = Bi(n * n + e * e),
                    r = t(i),
                    a = qi(r),
                    f = Xi(r);
                return [Oi(n * a, i * f), ji(i && e * a / i)]
            }
        }
        var vr = pr(function(t) {
            return Bi(2 / (1 + t))
        });
        vr.invert = gr(function(t) {
            return 2 * ji(t / 2)
        });
        var yr = pr(function(t) {
            return (t = Zi(t)) && t / qi(t)
        });
        yr.invert = gr(function(t) {
            return t
        });

        function mr(t, n) {
            return [t, Vi(Wi((Di + n) / 2))]
        }
        mr.invert = function(t, n) {
            return [t, 2 * Hi(Ii(n)) - Di]
        };

        function wr(t, n) {
            return [t, n]
        }
        wr.invert = wr;
        var xr = 1.340264,
            Mr = -.081106,
            Tr = 893e-6,
            Nr = .003796,
            Cr = Bi(3) / 2;

        function Ar(t, n) {
            var e = ji(Cr * qi(n)),
                i = e * e,
                r = i * i * i;
            return [t * Xi(e) / (Cr * (xr + 3 * Mr * i + r * (7 * Tr + 9 * Nr * i))), e * (xr + Mr * i + r * (Tr + Nr * i))]
        }
        Ar.invert = function(t, n) {
            for (var e, i = n, r = i * i, a = r * r * r, f = 0; f < 12 && (a = (r = (i -= e = (i * (xr + Mr * r + a * (Tr + Nr * r)) - n) / (xr + 3 * Mr * r + a * (7 * Tr + 9 * Nr * r))) * i) * r * r, !(Ri(e) < 1e-12)); ++f);
            return [Cr * t * (xr + 3 * Mr * r + a * (7 * Tr + 9 * Nr * r)) / Xi(i), ji(qi(i) / Cr)]
        };

        function Er(t, n) {
            var e = Xi(n),
                i = Xi(t) * e;
            return [e * qi(t) / i, qi(n) / i]
        }
        Er.invert = gr(Hi);

        function Sr(t, n) {
            var e = n * n,
                i = e * e;
            return [t * (.8707 - .131979 * e + i * (i * (.003971 * e - .001529 * i) - .013791)), n * (1.007226 + e * (.015085 + i * (.028874 * e - .044475 - .005916 * i)))]
        }
        Sr.invert = function(t, n) {
            var e, i = n,
                r = 25;
            do {
                var a = i * i,
                    f = a * a;
                i -= e = (i * (1.007226 + a * (.015085 + f * (.028874 * a - .044475 - .005916 * f))) - n) / (1.007226 + a * (.045255 + f * (.259866 * a - .311325 - .005916 * 11 * f)))
            } while (Ri(e) > Li && --r > 0);
            return [t / (.8707 + (a = i * i) * (a * (a * a * a * (.003971 - .001529 * a) - .013791) - .131979)), i]
        };

        function kr(t, n) {
            return [Xi(n) * qi(t), qi(n)]
        }
        kr.invert = gr(ji);

        function zr(t, n) {
            var e = Xi(n),
                i = 1 + Xi(t) * e;
            return [e * qi(t) / i, qi(n) / i]
        }
        zr.invert = gr(function(t) {
            return 2 * Hi(t)
        });

        function Ur(t, n) {
            return [Vi(Wi((Di + n) / 2)), -t]
        }
        Ur.invert = function(t, n) {
            return [-n, 2 * Hi(Ii(t)) - Di]
        };

        function Lr(t) {
            var n = 0,
                e = t.children,
                i = e && e.length;
            if (i)
                for (; --i >= 0;) n += e[i].value;
            else n = 1;
            t.value = n
        }

        function Pr(t, n) {
            var e, i, r, a, f, o = new Fr(t),
                c = +t.value && (o.value = t.value),
                u = [o];
            for (null == n && (n = Dr); e = u.pop();)
                if (c && (e.value = +e.data.value), (r = n(e.data)) && (f = r.length))
                    for (e.children = new Array(f), a = f - 1; a >= 0; --a) u.push(i = e.children[a] = new Fr(r[a])), i.parent = e, i.depth = e.depth + 1;
            return o.eachBefore(Yr)
        }

        function Dr(t) {
            return t.children
        }

        function $r(t) {
            t.data = t.data.data
        }

        function Yr(t) {
            var n = 0;
            do {
                t.height = n
            } while ((t = t.parent) && t.height < ++n)
        }

        function Fr(t) {
            this.data = t, this.depth = this.height = 0, this.parent = null
        }
        Fr.prototype = Pr.prototype = {
            constructor: Fr,
            count: function() {
                return this.eachAfter(Lr)
            },
            each: function(t) {
                var n, e, i, r, a = this,
                    f = [a];
                do {
                    for (n = f.reverse(), f = []; a = n.pop();)
                        if (t(a), e = a.children)
                            for (i = 0, r = e.length; i < r; ++i) f.push(e[i])
                } while (f.length);
                return this
            },
            eachAfter: function(t) {
                for (var n, e, i, r = this, a = [r], f = []; r = a.pop();)
                    if (f.push(r), n = r.children)
                        for (e = 0, i = n.length; e < i; ++e) a.push(n[e]);
                for (; r = f.pop();) t(r);
                return this
            },
            eachBefore: function(t) {
                for (var n, e, i = this, r = [i]; i = r.pop();)
                    if (t(i), n = i.children)
                        for (e = n.length - 1; e >= 0; --e) r.push(n[e]);
                return this
            },
            sum: function(t) {
                return this.eachAfter(function(n) {
                    for (var e = +t(n.data) || 0, i = n.children, r = i && i.length; --r >= 0;) e += i[r].value;
                    n.value = e
                })
            },
            sort: function(t) {
                return this.eachBefore(function(n) {
                    n.children && n.children.sort(t)
                })
            },
            path: function(t) {
                for (var n = this, e = function(t, n) {
                        if (t === n) return t;
                        var e = t.ancestors(),
                            i = n.ancestors(),
                            r = null;
                        for (t = e.pop(), n = i.pop(); t === n;) r = t, t = e.pop(), n = i.pop();
                        return r
                    }(n, t), i = [n]; n !== e;) n = n.parent, i.push(n);
                for (var r = i.length; t !== e;) i.splice(r, 0, t), t = t.parent;
                return i
            },
            ancestors: function() {
                for (var t = this, n = [t]; t = t.parent;) n.push(t);
                return n
            },
            descendants: function() {
                var t = [];
                return this.each(function(n) {
                    t.push(n)
                }), t
            },
            leaves: function() {
                var t = [];
                return this.eachBefore(function(n) {
                    n.children || t.push(n)
                }), t
            },
            links: function() {
                var t = this,
                    n = [];
                return t.each(function(e) {
                    e !== t && n.push({
                        source: e.parent,
                        target: e
                    })
                }), n
            },
            copy: function() {
                return Pr(this).eachBefore($r)
            }
        };
        Array.prototype.slice;

        function Rr(t) {
            if ("function" != typeof t) throw new Error;
            return t
        }
        var Hr = function(t, n, e, i, r) {
                for (var a, f = t.children, o = -1, c = f.length, u = t.value && (i - n) / t.value; ++o < c;)(a = f[o]).y0 = e, a.y1 = r, a.x0 = n, a.x1 = n += a.value * u
            },
            Or = "$",
            Xr = {
                depth: -1
            },
            Ir = {};

        function Vr(t) {
            return t.id
        }

        function qr(t) {
            return t.parentId
        }

        function Br(t, n) {
            return t.parent === n.parent ? 1 : 2
        }

        function Wr(t) {
            var n = t.children;
            return n ? n[0] : t.t
        }

        function Zr(t) {
            var n = t.children;
            return n ? n[n.length - 1] : t.t
        }

        function jr(t, n, e) {
            var i = e / (n.i - t.i);
            n.c -= i, n.s += e, t.c += i, n.z += e, n.m += e
        }

        function Qr(t, n, e) {
            return t.a.parent === n.parent ? t.a : e
        }

        function Jr(t, n) {
            this._ = t, this.parent = null, this.children = null, this.A = null, this.a = this, this.z = 0, this.m = 0, this.c = 0, this.s = 0, this.t = null, this.i = n
        }
        Jr.prototype = Object.create(Fr.prototype);
        var Gr = function() {
                var t = Br,
                    n = 1,
                    e = 1,
                    i = null;

                function r(r) {
                    var c = function(t) {
                        for (var n, e, i, r, a, f = new Jr(t, 0), o = [f]; n = o.pop();)
                            if (i = n._.children)
                                for (n.children = new Array(a = i.length), r = a - 1; r >= 0; --r) o.push(e = n.children[r] = new Jr(i[r], r)), e.parent = n;
                        return (f.parent = new Jr(null, 0)).children = [f], f
                    }(r);
                    if (c.eachAfter(a), c.parent.m = -c.z, c.eachBefore(f), i) r.eachBefore(o);
                    else {
                        var u = r,
                            s = r,
                            h = r;
                        r.eachBefore(function(t) {
                            t.x < u.x && (u = t), t.x > s.x && (s = t), t.depth > h.depth && (h = t)
                        });
                        var l = u === s ? 1 : t(u, s) / 2,
                            d = l - u.x,
                            _ = n / (s.x + l + d),
                            b = e / (h.depth || 1);
                        r.eachBefore(function(t) {
                            t.x = (t.x + d) * _, t.y = t.depth * b
                        })
                    }
                    return r
                }

                function a(n) {
                    var e = n.children,
                        i = n.parent.children,
                        r = n.i ? i[n.i - 1] : null;
                    if (e) {
                        ! function(t) {
                            for (var n, e = 0, i = 0, r = t.children, a = r.length; --a >= 0;)(n = r[a]).z += e, n.m += e, e += n.s + (i += n.c)
                        }(n);
                        var a = (e[0].z + e[e.length - 1].z) / 2;
                        r ? (n.z = r.z + t(n._, r._), n.m = n.z - a) : n.z = a
                    } else r && (n.z = r.z + t(n._, r._));
                    n.parent.A = function(n, e, i) {
                        if (e) {
                            for (var r, a = n, f = n, o = e, c = a.parent.children[0], u = a.m, s = f.m, h = o.m, l = c.m; o = Zr(o), a = Wr(a), o && a;) c = Wr(c), (f = Zr(f)).a = n, (r = o.z + h - a.z - u + t(o._, a._)) > 0 && (jr(Qr(o, n, i), n, r), u += r, s += r), h += o.m, u += a.m, l += c.m, s += f.m;
                            o && !Zr(f) && (f.t = o, f.m += h - s), a && !Wr(c) && (c.t = a, c.m += u - l, i = n)
                        }
                        return i
                    }(n, r, n.parent.A || i[0])
                }

                function f(t) {
                    t._.x = t.z + t.parent.m, t.m += t.parent.m
                }

                function o(t) {
                    t.x *= n * 1.3, t.y = t.depth * e	//	custom code for y.x
                }
                return r.separation = function(n) {
                    return arguments.length ? (t = n, r) : t
                }, r.size = function(t) {
                    return arguments.length ? (i = !1, n = +t[0], e = +t[1], r) : i ? null : [n, e]
                }, r.nodeSize = function(t) {
                    return arguments.length ? (i = !0, n = +t[0], e = +t[1], r) : i ? [n, e] : null
                }, r
            },
            Kr = function(t, n, e, i, r) {
                for (var a, f = t.children, o = -1, c = f.length, u = t.value && (r - e) / t.value; ++o < c;)(a = f[o]).x0 = n, a.x1 = i, a.y0 = e, a.y1 = e += a.value * u
            },
            ta = (1 + Math.sqrt(5)) / 2;

        function na(t, n, e, i, r, a) {
            for (var f, o, c, u, s, h, l, d, _, b, p, g = [], v = n.children, y = 0, m = 0, w = v.length, x = n.value; y < w;) {
                c = r - e, u = a - i;
                do {
                    s = v[m++].value
                } while (!s && m < w);
                for (h = l = s, p = s * s * (b = Math.max(u / c, c / u) / (x * t)), _ = Math.max(l / p, p / h); m < w; ++m) {
                    if (s += o = v[m].value, o < h && (h = o), o > l && (l = o), p = s * s * b, (d = Math.max(l / p, p / h)) > _) {
                        s -= o;
                        break
                    }
                    _ = d
                }
                g.push(f = {
                    value: s,
                    dice: c < u,
                    children: v.slice(y, m)
                }), f.dice ? Hr(f, e, i, r, x ? i += u * s / x : a) : Kr(f, e, i, x ? e += c * s / x : r, a), x -= s, y = m
            }
            return g
        }(function t(n) {
            function e(t, e, i, r, a) {
                na(n, t, e, i, r, a)
            }
            return e.ratio = function(n) {
                return t((n = +n) > 1 ? n : 1)
            }, e
        })(ta),
        function t(n) {
            function e(t, e, i, r, a) {
                if ((f = t._squarify) && f.ratio === n)
                    for (var f, o, c, u, s, h = -1, l = f.length, d = t.value; ++h < l;) {
                        for (c = (o = f[h]).children, u = o.value = 0, s = c.length; u < s; ++u) o.value += c[u].value;
                        o.dice ? Hr(o, e, i, r, i += (a - i) * o.value / d) : Kr(o, e, i, e += (r - e) * o.value / d, a), d -= o.value
                    } else t._squarify = f = na(n, t, e, i, r, a), f.ratio = n
            }
            return e.ratio = function(n) {
                return t((n = +n) > 1 ? n : 1)
            }, e
        }(ta);
        var ea = function() {
                return Math.random()
            },
            ia = (function t(n) {
                function e(t, e) {
                    return t = null == t ? 0 : +t, e = null == e ? 1 : +e, 1 === arguments.length ? (e = t, t = 0) : e -= t,
                        function() {
                            return n() * e + t
                        }
                }
                return e.source = t, e
            }(ea), function t(n) {
                function e(t, e) {
                    var i, r;
                    return t = null == t ? 0 : +t, e = null == e ? 1 : +e,
                        function() {
                            var a;
                            if (null != i) a = i, i = null;
                            else
                                do {
                                    i = 2 * n() - 1, a = 2 * n() - 1, r = i * i + a * a
                                } while (!r || r > 1);
                            return t + e * a * Math.sqrt(-2 * Math.log(r) / r)
                        }
                }
                return e.source = t, e
            }(ea)),
            ra = (function t(n) {
                function e() {
                    var t = ia.source(n).apply(this, arguments);
                    return function() {
                        return Math.exp(t())
                    }
                }
                return e.source = t, e
            }(ea), function t(n) {
                function e(t) {
                    return function() {
                        for (var e = 0, i = 0; i < t; ++i) e += n();
                        return e
                    }
                }
                return e.source = t, e
            }(ea)),
            aa = (function t(n) {
                function e(t) {
                    var e = ra.source(n)(t);
                    return function() {
                        return e() / t
                    }
                }
                return e.source = t, e
            }(ea), function t(n) {
                function e(t) {
                    return function() {
                        return -Math.log(1 - n()) / t
                    }
                }
                return e.source = t, e
            }(ea), Array.prototype);
        aa.map, aa.slice;
        var fa = new Date,
            oa = new Date;

        function ca(t, n, e, i) {
            function r(n) {
                return t(n = new Date(+n)), n
            }
            return r.floor = r, r.ceil = function(e) {
                return t(e = new Date(e - 1)), n(e, 1), t(e), e
            }, r.round = function(t) {
                var n = r(t),
                    e = r.ceil(t);
                return t - n < e - t ? n : e
            }, r.offset = function(t, e) {
                return n(t = new Date(+t), null == e ? 1 : Math.floor(e)), t
            }, r.range = function(e, i, a) {
                var f, o = [];
                if (e = r.ceil(e), a = null == a ? 1 : Math.floor(a), !(e < i && a > 0)) return o;
                do {
                    o.push(f = new Date(+e)), n(e, a), t(e)
                } while (f < e && e < i);
                return o
            }, r.filter = function(e) {
                return ca(function(n) {
                    if (n >= n)
                        for (; t(n), !e(n);) n.setTime(n - 1)
                }, function(t, i) {
                    if (t >= t)
                        if (i < 0)
                            for (; ++i <= 0;)
                                for (; n(t, -1), !e(t););
                        else
                            for (; --i >= 0;)
                                for (; n(t, 1), !e(t););
                })
            }, e && (r.count = function(n, i) {
                return fa.setTime(+n), oa.setTime(+i), t(fa), t(oa), Math.floor(e(fa, oa))
            }, r.every = function(t) {
                return t = Math.floor(t), isFinite(t) && t > 0 ? t > 1 ? r.filter(i ? function(n) {
                    return i(n) % t == 0
                } : function(n) {
                    return r.count(0, n) % t == 0
                }) : r : null
            }), r
        }
        var ua = ca(function() {}, function(t, n) {
            t.setTime(+t + n)
        }, function(t, n) {
            return n - t
        });
        ua.every = function(t) {
            return t = Math.floor(t), isFinite(t) && t > 0 ? t > 1 ? ca(function(n) {
                n.setTime(Math.floor(n / t) * t)
            }, function(n, e) {
                n.setTime(+n + e * t)
            }, function(n, e) {
                return (e - n) / t
            }) : ua : null
        };
        ua.range;
        var sa = 6e4,
            ha = 6048e5,
            la = ca(function(t) {
                t.setTime(1e3 * Math.floor(t / 1e3))
            }, function(t, n) {
                t.setTime(+t + 1e3 * n)
            }, function(t, n) {
                return (n - t) / 1e3
            }, function(t) {
                return t.getUTCSeconds()
            }),
            da = (la.range, ca(function(t) {
                t.setTime(Math.floor(t / sa) * sa)
            }, function(t, n) {
                t.setTime(+t + n * sa)
            }, function(t, n) {
                return (n - t) / sa
            }, function(t) {
                return t.getMinutes()
            })),
            _a = (da.range, ca(function(t) {
                var n = t.getTimezoneOffset() * sa % 36e5;
                n < 0 && (n += 36e5), t.setTime(36e5 * Math.floor((+t - n) / 36e5) + n)
            }, function(t, n) {
                t.setTime(+t + 36e5 * n)
            }, function(t, n) {
                return (n - t) / 36e5
            }, function(t) {
                return t.getHours()
            })),
            ba = (_a.range, ca(function(t) {
                t.setHours(0, 0, 0, 0)
            }, function(t, n) {
                t.setDate(t.getDate() + n)
            }, function(t, n) {
                return (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * sa) / 864e5
            }, function(t) {
                return t.getDate() - 1
            })),
            pa = ba;
        ba.range;

        function ga(t) {
            return ca(function(n) {
                n.setDate(n.getDate() - (n.getDay() + 7 - t) % 7), n.setHours(0, 0, 0, 0)
            }, function(t, n) {
                t.setDate(t.getDate() + 7 * n)
            }, function(t, n) {
                return (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * sa) / ha
            })
        }
        var va = ga(0),
            ya = ga(1),
            ma = ga(2),
            wa = ga(3),
            xa = ga(4),
            Ma = ga(5),
            Ta = ga(6),
            Na = (va.range, ya.range, ma.range, wa.range, xa.range, Ma.range, Ta.range, ca(function(t) {
                t.setDate(1), t.setHours(0, 0, 0, 0)
            }, function(t, n) {
                t.setMonth(t.getMonth() + n)
            }, function(t, n) {
                return n.getMonth() - t.getMonth() + 12 * (n.getFullYear() - t.getFullYear())
            }, function(t) {
                return t.getMonth()
            })),
            Ca = (Na.range, ca(function(t) {
                t.setMonth(0, 1), t.setHours(0, 0, 0, 0)
            }, function(t, n) {
                t.setFullYear(t.getFullYear() + n)
            }, function(t, n) {
                return n.getFullYear() - t.getFullYear()
            }, function(t) {
                return t.getFullYear()
            }));
        Ca.every = function(t) {
            return isFinite(t = Math.floor(t)) && t > 0 ? ca(function(n) {
                n.setFullYear(Math.floor(n.getFullYear() / t) * t), n.setMonth(0, 1), n.setHours(0, 0, 0, 0)
            }, function(n, e) {
                n.setFullYear(n.getFullYear() + e * t)
            }) : null
        };
        var Aa = Ca,
            Ea = (Ca.range, ca(function(t) {
                t.setUTCSeconds(0, 0)
            }, function(t, n) {
                t.setTime(+t + n * sa)
            }, function(t, n) {
                return (n - t) / sa
            }, function(t) {
                return t.getUTCMinutes()
            })),
            Sa = (Ea.range, ca(function(t) {
                t.setUTCMinutes(0, 0, 0)
            }, function(t, n) {
                t.setTime(+t + 36e5 * n)
            }, function(t, n) {
                return (n - t) / 36e5
            }, function(t) {
                return t.getUTCHours()
            })),
            ka = (Sa.range, ca(function(t) {
                t.setUTCHours(0, 0, 0, 0)
            }, function(t, n) {
                t.setUTCDate(t.getUTCDate() + n)
            }, function(t, n) {
                return (n - t) / 864e5
            }, function(t) {
                return t.getUTCDate() - 1
            })),
            za = ka;
        ka.range;

        function Ua(t) {
            return ca(function(n) {
                n.setUTCDate(n.getUTCDate() - (n.getUTCDay() + 7 - t) % 7), n.setUTCHours(0, 0, 0, 0)
            }, function(t, n) {
                t.setUTCDate(t.getUTCDate() + 7 * n)
            }, function(t, n) {
                return (n - t) / ha
            })
        }
        var La = Ua(0),
            Pa = Ua(1),
            Da = Ua(2),
            $a = Ua(3),
            Ya = Ua(4),
            Fa = Ua(5),
            Ra = Ua(6),
            Ha = (La.range, Pa.range, Da.range, $a.range, Ya.range, Fa.range, Ra.range, ca(function(t) {
                t.setUTCDate(1), t.setUTCHours(0, 0, 0, 0)
            }, function(t, n) {
                t.setUTCMonth(t.getUTCMonth() + n)
            }, function(t, n) {
                return n.getUTCMonth() - t.getUTCMonth() + 12 * (n.getUTCFullYear() - t.getUTCFullYear())
            }, function(t) {
                return t.getUTCMonth()
            })),
            Oa = (Ha.range, ca(function(t) {
                t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0)
            }, function(t, n) {
                t.setUTCFullYear(t.getUTCFullYear() + n)
            }, function(t, n) {
                return n.getUTCFullYear() - t.getUTCFullYear()
            }, function(t) {
                return t.getUTCFullYear()
            }));
        Oa.every = function(t) {
            return isFinite(t = Math.floor(t)) && t > 0 ? ca(function(n) {
                n.setUTCFullYear(Math.floor(n.getUTCFullYear() / t) * t), n.setUTCMonth(0, 1), n.setUTCHours(0, 0, 0, 0)
            }, function(n, e) {
                n.setUTCFullYear(n.getUTCFullYear() + e * t)
            }) : null
        };
        var Xa = Oa;
        Oa.range;

        function Ia(t) {
            if (0 <= t.y && t.y < 100) {
                var n = new Date(-1, t.m, t.d, t.H, t.M, t.S, t.L);
                return n.setFullYear(t.y), n
            }
            return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L)
        }

        function Va(t) {
            if (0 <= t.y && t.y < 100) {
                var n = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L));
                return n.setUTCFullYear(t.y), n
            }
            return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L))
        }

        function qa(t) {
            return {
                y: t,
                m: 0,
                d: 1,
                H: 0,
                M: 0,
                S: 0,
                L: 0
            }
        }
        var Ba, Wa, Za, ja = {
                "-": "",
                _: " ",
                0: "0"
            },
            Qa = /^\s*\d+/,
            Ja = /^%/,
            Ga = /[\\^$*+?|[\]().{}]/g;

        function Ka(t, n, e) {
            var i = t < 0 ? "-" : "",
                r = (i ? -t : t) + "",
                a = r.length;
            return i + (a < e ? new Array(e - a + 1).join(n) + r : r)
        }

        function tf(t) {
            return t.replace(Ga, "\\$&")
        }

        function nf(t) {
            return new RegExp("^(?:" + t.map(tf).join("|") + ")", "i")
        }

        function ef(t) {
            for (var n = {}, e = -1, i = t.length; ++e < i;) n[t[e].toLowerCase()] = e;
            return n
        }

        function rf(t, n, e) {
            var i = Qa.exec(n.slice(e, e + 1));
            return i ? (t.w = +i[0], e + i[0].length) : -1
        }

        function af(t, n, e) {
            var i = Qa.exec(n.slice(e, e + 1));
            return i ? (t.u = +i[0], e + i[0].length) : -1
        }

        function ff(t, n, e) {
            var i = Qa.exec(n.slice(e, e + 2));
            return i ? (t.U = +i[0], e + i[0].length) : -1
        }

        function of(t, n, e) {
            var i = Qa.exec(n.slice(e, e + 2));
            return i ? (t.V = +i[0], e + i[0].length) : -1
        }

        function cf(t, n, e) {
            var i = Qa.exec(n.slice(e, e + 2));
            return i ? (t.W = +i[0], e + i[0].length) : -1
        }

        function uf(t, n, e) {
            var i = Qa.exec(n.slice(e, e + 4));
            return i ? (t.y = +i[0], e + i[0].length) : -1
        }

        function sf(t, n, e) {
            var i = Qa.exec(n.slice(e, e + 2));
            return i ? (t.y = +i[0] + (+i[0] > 68 ? 1900 : 2e3), e + i[0].length) : -1
        }

        function hf(t, n, e) {
            var i = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(n.slice(e, e + 6));
            return i ? (t.Z = i[1] ? 0 : -(i[2] + (i[3] || "00")), e + i[0].length) : -1
        }

        function lf(t, n, e) {
            var i = Qa.exec(n.slice(e, e + 2));
            return i ? (t.m = i[0] - 1, e + i[0].length) : -1
        }

        function df(t, n, e) {
            var i = Qa.exec(n.slice(e, e + 2));
            return i ? (t.d = +i[0], e + i[0].length) : -1
        }

        function _f(t, n, e) {
            var i = Qa.exec(n.slice(e, e + 3));
            return i ? (t.m = 0, t.d = +i[0], e + i[0].length) : -1
        }

        function bf(t, n, e) {
            var i = Qa.exec(n.slice(e, e + 2));
            return i ? (t.H = +i[0], e + i[0].length) : -1
        }

        function pf(t, n, e) {
            var i = Qa.exec(n.slice(e, e + 2));
            return i ? (t.M = +i[0], e + i[0].length) : -1
        }

        function gf(t, n, e) {
            var i = Qa.exec(n.slice(e, e + 2));
            return i ? (t.S = +i[0], e + i[0].length) : -1
        }

        function vf(t, n, e) {
            var i = Qa.exec(n.slice(e, e + 3));
            return i ? (t.L = +i[0], e + i[0].length) : -1
        }

        function yf(t, n, e) {
            var i = Qa.exec(n.slice(e, e + 6));
            return i ? (t.L = Math.floor(i[0] / 1e3), e + i[0].length) : -1
        }

        function mf(t, n, e) {
            var i = Ja.exec(n.slice(e, e + 1));
            return i ? e + i[0].length : -1
        }

        function wf(t, n, e) {
            var i = Qa.exec(n.slice(e));
            return i ? (t.Q = +i[0], e + i[0].length) : -1
        }

        function xf(t, n, e) {
            var i = Qa.exec(n.slice(e));
            return i ? (t.Q = 1e3 * +i[0], e + i[0].length) : -1
        }

        function Mf(t, n) {
            return Ka(t.getDate(), n, 2)
        }

        function Tf(t, n) {
            return Ka(t.getHours(), n, 2)
        }

        function Nf(t, n) {
            return Ka(t.getHours() % 12 || 12, n, 2)
        }

        function Cf(t, n) {
            return Ka(1 + pa.count(Aa(t), t), n, 3)
        }

        function Af(t, n) {
            return Ka(t.getMilliseconds(), n, 3)
        }

        function Ef(t, n) {
            return Af(t, n) + "000"
        }

        function Sf(t, n) {
            return Ka(t.getMonth() + 1, n, 2)
        }

        function kf(t, n) {
            return Ka(t.getMinutes(), n, 2)
        }

        function zf(t, n) {
            return Ka(t.getSeconds(), n, 2)
        }

        function Uf(t) {
            var n = t.getDay();
            return 0 === n ? 7 : n
        }

        function Lf(t, n) {
            return Ka(va.count(Aa(t), t), n, 2)
        }

        function Pf(t, n) {
            var e = t.getDay();
            return t = e >= 4 || 0 === e ? xa(t) : xa.ceil(t), Ka(xa.count(Aa(t), t) + (4 === Aa(t).getDay()), n, 2)
        }

        function Df(t) {
            return t.getDay()
        }

        function $f(t, n) {
            return Ka(ya.count(Aa(t), t), n, 2)
        }

        function Yf(t, n) {
            return Ka(t.getFullYear() % 100, n, 2)
        }

        function Ff(t, n) {
            return Ka(t.getFullYear() % 1e4, n, 4)
        }

        function Rf(t) {
            var n = t.getTimezoneOffset();
            return (n > 0 ? "-" : (n *= -1, "+")) + Ka(n / 60 | 0, "0", 2) + Ka(n % 60, "0", 2)
        }

        function Hf(t, n) {
            return Ka(t.getUTCDate(), n, 2)
        }

        function Of(t, n) {
            return Ka(t.getUTCHours(), n, 2)
        }

        function Xf(t, n) {
            return Ka(t.getUTCHours() % 12 || 12, n, 2)
        }

        function If(t, n) {
            return Ka(1 + za.count(Xa(t), t), n, 3)
        }

        function Vf(t, n) {
            return Ka(t.getUTCMilliseconds(), n, 3)
        }

        function qf(t, n) {
            return Vf(t, n) + "000"
        }

        function Bf(t, n) {
            return Ka(t.getUTCMonth() + 1, n, 2)
        }

        function Wf(t, n) {
            return Ka(t.getUTCMinutes(), n, 2)
        }

        function Zf(t, n) {
            return Ka(t.getUTCSeconds(), n, 2)
        }

        function jf(t) {
            var n = t.getUTCDay();
            return 0 === n ? 7 : n
        }

        function Qf(t, n) {
            return Ka(La.count(Xa(t), t), n, 2)
        }

        function Jf(t, n) {
            var e = t.getUTCDay();
            return t = e >= 4 || 0 === e ? Ya(t) : Ya.ceil(t), Ka(Ya.count(Xa(t), t) + (4 === Xa(t).getUTCDay()), n, 2)
        }

        function Gf(t) {
            return t.getUTCDay()
        }

        function Kf(t, n) {
            return Ka(Pa.count(Xa(t), t), n, 2)
        }

        function to(t, n) {
            return Ka(t.getUTCFullYear() % 100, n, 2)
        }

        function no(t, n) {
            return Ka(t.getUTCFullYear() % 1e4, n, 4)
        }

        function eo() {
            return "+0000"
        }

        function io() {
            return "%"
        }

        function ro(t) {
            return +t
        }

        function ao(t) {
            return Math.floor(+t / 1e3)
        }! function(t) {
            Ba = function(t) {
                var n = t.dateTime,
                    e = t.date,
                    i = t.time,
                    r = t.periods,
                    a = t.days,
                    f = t.shortDays,
                    o = t.months,
                    c = t.shortMonths,
                    u = nf(r),
                    s = ef(r),
                    h = nf(a),
                    l = ef(a),
                    d = nf(f),
                    _ = ef(f),
                    b = nf(o),
                    p = ef(o),
                    g = nf(c),
                    v = ef(c),
                    y = {
                        a: function(t) {
                            return f[t.getDay()]
                        },
                        A: function(t) {
                            return a[t.getDay()]
                        },
                        b: function(t) {
                            return c[t.getMonth()]
                        },
                        B: function(t) {
                            return o[t.getMonth()]
                        },
                        c: null,
                        d: Mf,
                        e: Mf,
                        f: Ef,
                        H: Tf,
                        I: Nf,
                        j: Cf,
                        L: Af,
                        m: Sf,
                        M: kf,
                        p: function(t) {
                            return r[+(t.getHours() >= 12)]
                        },
                        Q: ro,
                        s: ao,
                        S: zf,
                        u: Uf,
                        U: Lf,
                        V: Pf,
                        w: Df,
                        W: $f,
                        x: null,
                        X: null,
                        y: Yf,
                        Y: Ff,
                        Z: Rf,
                        "%": io
                    },
                    m = {
                        a: function(t) {
                            return f[t.getUTCDay()]
                        },
                        A: function(t) {
                            return a[t.getUTCDay()]
                        },
                        b: function(t) {
                            return c[t.getUTCMonth()]
                        },
                        B: function(t) {
                            return o[t.getUTCMonth()]
                        },
                        c: null,
                        d: Hf,
                        e: Hf,
                        f: qf,
                        H: Of,
                        I: Xf,
                        j: If,
                        L: Vf,
                        m: Bf,
                        M: Wf,
                        p: function(t) {
                            return r[+(t.getUTCHours() >= 12)]
                        },
                        Q: ro,
                        s: ao,
                        S: Zf,
                        u: jf,
                        U: Qf,
                        V: Jf,
                        w: Gf,
                        W: Kf,
                        x: null,
                        X: null,
                        y: to,
                        Y: no,
                        Z: eo,
                        "%": io
                    },
                    w = {
                        a: function(t, n, e) {
                            var i = d.exec(n.slice(e));
                            return i ? (t.w = _[i[0].toLowerCase()], e + i[0].length) : -1
                        },
                        A: function(t, n, e) {
                            var i = h.exec(n.slice(e));
                            return i ? (t.w = l[i[0].toLowerCase()], e + i[0].length) : -1
                        },
                        b: function(t, n, e) {
                            var i = g.exec(n.slice(e));
                            return i ? (t.m = v[i[0].toLowerCase()], e + i[0].length) : -1
                        },
                        B: function(t, n, e) {
                            var i = b.exec(n.slice(e));
                            return i ? (t.m = p[i[0].toLowerCase()], e + i[0].length) : -1
                        },
                        c: function(t, e, i) {
                            return T(t, n, e, i)
                        },
                        d: df,
                        e: df,
                        f: yf,
                        H: bf,
                        I: bf,
                        j: _f,
                        L: vf,
                        m: lf,
                        M: pf,
                        p: function(t, n, e) {
                            var i = u.exec(n.slice(e));
                            return i ? (t.p = s[i[0].toLowerCase()], e + i[0].length) : -1
                        },
                        Q: wf,
                        s: xf,
                        S: gf,
                        u: af,
                        U: ff,
                        V: of,
                        w: rf,
                        W: cf,
                        x: function(t, n, i) {
                            return T(t, e, n, i)
                        },
                        X: function(t, n, e) {
                            return T(t, i, n, e)
                        },
                        y: sf,
                        Y: uf,
                        Z: hf,
                        "%": mf
                    };

                function x(t, n) {
                    return function(e) {
                        var i, r, a, f = [],
                            o = -1,
                            c = 0,
                            u = t.length;
                        for (e instanceof Date || (e = new Date(+e)); ++o < u;) 37 === t.charCodeAt(o) && (f.push(t.slice(c, o)), null != (r = ja[i = t.charAt(++o)]) ? i = t.charAt(++o) : r = "e" === i ? " " : "0", (a = n[i]) && (i = a(e, r)), f.push(i), c = o + 1);
                        return f.push(t.slice(c, o)), f.join("")
                    }
                }

                function M(t, n) {
                    return function(e) {
                        var i, r, a = qa(1900);
                        if (T(a, t, e += "", 0) != e.length) return null;
                        if ("Q" in a) return new Date(a.Q);
                        if ("p" in a && (a.H = a.H % 12 + 12 * a.p), "V" in a) {
                            if (a.V < 1 || a.V > 53) return null;
                            "w" in a || (a.w = 1), "Z" in a ? (r = (i = Va(qa(a.y))).getUTCDay(), i = r > 4 || 0 === r ? Pa.ceil(i) : Pa(i), i = za.offset(i, 7 * (a.V - 1)), a.y = i.getUTCFullYear(), a.m = i.getUTCMonth(), a.d = i.getUTCDate() + (a.w + 6) % 7) : (r = (i = n(qa(a.y))).getDay(), i = r > 4 || 0 === r ? ya.ceil(i) : ya(i), i = pa.offset(i, 7 * (a.V - 1)), a.y = i.getFullYear(), a.m = i.getMonth(), a.d = i.getDate() + (a.w + 6) % 7)
                        } else("W" in a || "U" in a) && ("w" in a || (a.w = "u" in a ? a.u % 7 : "W" in a ? 1 : 0), r = "Z" in a ? Va(qa(a.y)).getUTCDay() : n(qa(a.y)).getDay(), a.m = 0, a.d = "W" in a ? (a.w + 6) % 7 + 7 * a.W - (r + 5) % 7 : a.w + 7 * a.U - (r + 6) % 7);
                        return "Z" in a ? (a.H += a.Z / 100 | 0, a.M += a.Z % 100, Va(a)) : n(a)
                    }
                }

                function T(t, n, e, i) {
                    for (var r, a, f = 0, o = n.length, c = e.length; f < o;) {
                        if (i >= c) return -1;
                        if (37 === (r = n.charCodeAt(f++))) {
                            if (r = n.charAt(f++), !(a = w[r in ja ? n.charAt(f++) : r]) || (i = a(t, e, i)) < 0) return -1
                        } else if (r != e.charCodeAt(i++)) return -1
                    }
                    return i
                }
                return y.x = x(e, y), y.X = x(i, y), y.c = x(n, y), m.x = x(e, m), m.X = x(i, m), m.c = x(n, m), {
                    format: function(t) {
                        var n = x(t += "", y);
                        return n.toString = function() {
                            return t
                        }, n
                    },
                    parse: function(t) {
                        var n = M(t += "", Ia);
                        return n.toString = function() {
                            return t
                        }, n
                    },
                    utcFormat: function(t) {
                        var n = x(t += "", m);
                        return n.toString = function() {
                            return t
                        }, n
                    },
                    utcParse: function(t) {
                        var n = M(t, Va);
                        return n.toString = function() {
                            return t
                        }, n
                    }
                }
            }(t), Ba.format, Ba.parse, Wa = Ba.utcFormat, Za = Ba.utcParse
        }({
            dateTime: "%x, %X",
            date: "%-m/%-d/%Y",
            time: "%-I:%M:%S %p",
            periods: ["AM", "PM"],
            days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        });
        Date.prototype.toISOString || Wa("%Y-%m-%dT%H:%M:%S.%LZ"); + new Date("2000-01-01T00:00:00.000Z") || Za("%Y-%m-%dT%H:%M:%S.%LZ");
        var fo = function(t) {
                for (var n = t.length / 6 | 0, e = new Array(n), i = 0; i < n;) e[i] = "#" + t.slice(6 * i, 6 * ++i);
                return e
            },
            oo = (fo("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"), fo("7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666"), fo("1b9e77d95f027570b3e7298a66a61ee6ab02a6761d666666"), fo("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928"), fo("fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2"), fo("b3e2cdfdcdaccbd5e8f4cae4e6f5c9fff2aef1e2cccccccc"), fo("e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999"), fo("66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3"), fo("8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f"), function(t) {
                return Nn(t[t.length - 1])
            });
        oo(new Array(3).concat("d8b365f5f5f55ab4ac", "a6611adfc27d80cdc1018571", "a6611adfc27df5f5f580cdc1018571", "8c510ad8b365f6e8c3c7eae55ab4ac01665e", "8c510ad8b365f6e8c3f5f5f5c7eae55ab4ac01665e", "8c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e", "8c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e", "5430058c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e003c30", "5430058c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e003c30").map(fo)), oo(new Array(3).concat("af8dc3f7f7f77fbf7b", "7b3294c2a5cfa6dba0008837", "7b3294c2a5cff7f7f7a6dba0008837", "762a83af8dc3e7d4e8d9f0d37fbf7b1b7837", "762a83af8dc3e7d4e8f7f7f7d9f0d37fbf7b1b7837", "762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b7837", "762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b7837", "40004b762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b783700441b", "40004b762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b783700441b").map(fo)), oo(new Array(3).concat("e9a3c9f7f7f7a1d76a", "d01c8bf1b6dab8e1864dac26", "d01c8bf1b6daf7f7f7b8e1864dac26", "c51b7de9a3c9fde0efe6f5d0a1d76a4d9221", "c51b7de9a3c9fde0eff7f7f7e6f5d0a1d76a4d9221", "c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221", "c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221", "8e0152c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221276419", "8e0152c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221276419").map(fo)), oo(new Array(3).concat("998ec3f7f7f7f1a340", "5e3c99b2abd2fdb863e66101", "5e3c99b2abd2f7f7f7fdb863e66101", "542788998ec3d8daebfee0b6f1a340b35806", "542788998ec3d8daebf7f7f7fee0b6f1a340b35806", "5427888073acb2abd2d8daebfee0b6fdb863e08214b35806", "5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b35806", "2d004b5427888073acb2abd2d8daebfee0b6fdb863e08214b358067f3b08", "2d004b5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b358067f3b08").map(fo)), oo(new Array(3).concat("ef8a62f7f7f767a9cf", "ca0020f4a58292c5de0571b0", "ca0020f4a582f7f7f792c5de0571b0", "b2182bef8a62fddbc7d1e5f067a9cf2166ac", "b2182bef8a62fddbc7f7f7f7d1e5f067a9cf2166ac", "b2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac", "b2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac", "67001fb2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac053061", "67001fb2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac053061").map(fo)), oo(new Array(3).concat("ef8a62ffffff999999", "ca0020f4a582bababa404040", "ca0020f4a582ffffffbababa404040", "b2182bef8a62fddbc7e0e0e09999994d4d4d", "b2182bef8a62fddbc7ffffffe0e0e09999994d4d4d", "b2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d", "b2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d", "67001fb2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d1a1a1a", "67001fb2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d1a1a1a").map(fo)), oo(new Array(3).concat("fc8d59ffffbf91bfdb", "d7191cfdae61abd9e92c7bb6", "d7191cfdae61ffffbfabd9e92c7bb6", "d73027fc8d59fee090e0f3f891bfdb4575b4", "d73027fc8d59fee090ffffbfe0f3f891bfdb4575b4", "d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4", "d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4", "a50026d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4313695", "a50026d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4313695").map(fo)), oo(new Array(3).concat("fc8d59ffffbf91cf60", "d7191cfdae61a6d96a1a9641", "d7191cfdae61ffffbfa6d96a1a9641", "d73027fc8d59fee08bd9ef8b91cf601a9850", "d73027fc8d59fee08bffffbfd9ef8b91cf601a9850", "d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850", "d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850", "a50026d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850006837", "a50026d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850006837").map(fo)), oo(new Array(3).concat("fc8d59ffffbf99d594", "d7191cfdae61abdda42b83ba", "d7191cfdae61ffffbfabdda42b83ba", "d53e4ffc8d59fee08be6f59899d5943288bd", "d53e4ffc8d59fee08bffffbfe6f59899d5943288bd", "d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd", "d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd", "9e0142d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd5e4fa2", "9e0142d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd5e4fa2").map(fo)), oo(new Array(3).concat("e5f5f999d8c92ca25f", "edf8fbb2e2e266c2a4238b45", "edf8fbb2e2e266c2a42ca25f006d2c", "edf8fbccece699d8c966c2a42ca25f006d2c", "edf8fbccece699d8c966c2a441ae76238b45005824", "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45005824", "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45006d2c00441b").map(fo)), oo(new Array(3).concat("e0ecf49ebcda8856a7", "edf8fbb3cde38c96c688419d", "edf8fbb3cde38c96c68856a7810f7c", "edf8fbbfd3e69ebcda8c96c68856a7810f7c", "edf8fbbfd3e69ebcda8c96c68c6bb188419d6e016b", "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d6e016b", "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d810f7c4d004b").map(fo)), oo(new Array(3).concat("e0f3dba8ddb543a2ca", "f0f9e8bae4bc7bccc42b8cbe", "f0f9e8bae4bc7bccc443a2ca0868ac", "f0f9e8ccebc5a8ddb57bccc443a2ca0868ac", "f0f9e8ccebc5a8ddb57bccc44eb3d32b8cbe08589e", "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe08589e", "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe0868ac084081").map(fo)), oo(new Array(3).concat("fee8c8fdbb84e34a33", "fef0d9fdcc8afc8d59d7301f", "fef0d9fdcc8afc8d59e34a33b30000", "fef0d9fdd49efdbb84fc8d59e34a33b30000", "fef0d9fdd49efdbb84fc8d59ef6548d7301f990000", "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301f990000", "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301fb300007f0000").map(fo)), oo(new Array(3).concat("ece2f0a6bddb1c9099", "f6eff7bdc9e167a9cf02818a", "f6eff7bdc9e167a9cf1c9099016c59", "f6eff7d0d1e6a6bddb67a9cf1c9099016c59", "f6eff7d0d1e6a6bddb67a9cf3690c002818a016450", "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016450", "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016c59014636").map(fo)), oo(new Array(3).concat("ece7f2a6bddb2b8cbe", "f1eef6bdc9e174a9cf0570b0", "f1eef6bdc9e174a9cf2b8cbe045a8d", "f1eef6d0d1e6a6bddb74a9cf2b8cbe045a8d", "f1eef6d0d1e6a6bddb74a9cf3690c00570b0034e7b", "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0034e7b", "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0045a8d023858").map(fo)), oo(new Array(3).concat("e7e1efc994c7dd1c77", "f1eef6d7b5d8df65b0ce1256", "f1eef6d7b5d8df65b0dd1c77980043", "f1eef6d4b9dac994c7df65b0dd1c77980043", "f1eef6d4b9dac994c7df65b0e7298ace125691003f", "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125691003f", "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125698004367001f").map(fo)), oo(new Array(3).concat("fde0ddfa9fb5c51b8a", "feebe2fbb4b9f768a1ae017e", "feebe2fbb4b9f768a1c51b8a7a0177", "feebe2fcc5c0fa9fb5f768a1c51b8a7a0177", "feebe2fcc5c0fa9fb5f768a1dd3497ae017e7a0177", "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a0177", "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a017749006a").map(fo)), oo(new Array(3).concat("edf8b17fcdbb2c7fb8", "ffffcca1dab441b6c4225ea8", "ffffcca1dab441b6c42c7fb8253494", "ffffccc7e9b47fcdbb41b6c42c7fb8253494", "ffffccc7e9b47fcdbb41b6c41d91c0225ea80c2c84", "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea80c2c84", "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea8253494081d58").map(fo)), oo(new Array(3).concat("f7fcb9addd8e31a354", "ffffccc2e69978c679238443", "ffffccc2e69978c67931a354006837", "ffffccd9f0a3addd8e78c67931a354006837", "ffffccd9f0a3addd8e78c67941ab5d238443005a32", "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443005a32", "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443006837004529").map(fo)), oo(new Array(3).concat("fff7bcfec44fd95f0e", "ffffd4fed98efe9929cc4c02", "ffffd4fed98efe9929d95f0e993404", "ffffd4fee391fec44ffe9929d95f0e993404", "ffffd4fee391fec44ffe9929ec7014cc4c028c2d04", "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c028c2d04", "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c02993404662506").map(fo)), oo(new Array(3).concat("ffeda0feb24cf03b20", "ffffb2fecc5cfd8d3ce31a1c", "ffffb2fecc5cfd8d3cf03b20bd0026", "ffffb2fed976feb24cfd8d3cf03b20bd0026", "ffffb2fed976feb24cfd8d3cfc4e2ae31a1cb10026", "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cb10026", "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cbd0026800026").map(fo)), oo(new Array(3).concat("deebf79ecae13182bd", "eff3ffbdd7e76baed62171b5", "eff3ffbdd7e76baed63182bd08519c", "eff3ffc6dbef9ecae16baed63182bd08519c", "eff3ffc6dbef9ecae16baed64292c62171b5084594", "f7fbffdeebf7c6dbef9ecae16baed64292c62171b5084594", "f7fbffdeebf7c6dbef9ecae16baed64292c62171b508519c08306b").map(fo)), oo(new Array(3).concat("e5f5e0a1d99b31a354", "edf8e9bae4b374c476238b45", "edf8e9bae4b374c47631a354006d2c", "edf8e9c7e9c0a1d99b74c47631a354006d2c", "edf8e9c7e9c0a1d99b74c47641ab5d238b45005a32", "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45005a32", "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45006d2c00441b").map(fo)), oo(new Array(3).concat("f0f0f0bdbdbd636363", "f7f7f7cccccc969696525252", "f7f7f7cccccc969696636363252525", "f7f7f7d9d9d9bdbdbd969696636363252525", "f7f7f7d9d9d9bdbdbd969696737373525252252525", "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525", "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525000000").map(fo)), oo(new Array(3).concat("efedf5bcbddc756bb1", "f2f0f7cbc9e29e9ac86a51a3", "f2f0f7cbc9e29e9ac8756bb154278f", "f2f0f7dadaebbcbddc9e9ac8756bb154278f", "f2f0f7dadaebbcbddc9e9ac8807dba6a51a34a1486", "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a34a1486", "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a354278f3f007d").map(fo)), oo(new Array(3).concat("fee0d2fc9272de2d26", "fee5d9fcae91fb6a4acb181d", "fee5d9fcae91fb6a4ade2d26a50f15", "fee5d9fcbba1fc9272fb6a4ade2d26a50f15", "fee5d9fcbba1fc9272fb6a4aef3b2ccb181d99000d", "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181d99000d", "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181da50f1567000d").map(fo)), oo(new Array(3).concat("fee6cefdae6be6550d", "feeddefdbe85fd8d3cd94701", "feeddefdbe85fd8d3ce6550da63603", "feeddefdd0a2fdae6bfd8d3ce6550da63603", "feeddefdd0a2fdae6bfd8d3cf16913d948018c2d04", "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d948018c2d04", "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d94801a636037f2704").map(fo)), Bn(bn(300, .5, 0), bn(-240, .5, 1)), Bn(bn(-100, .75, .35), bn(80, 1.5, .8)), Bn(bn(260, .75, .35), bn(80, 1.5, .8)), bn(), $t(), Math.PI, Math.PI;

        function co(t) {
            var n = t.length;
            return function(e) {
                return t[Math.max(0, Math.min(n - 1, Math.floor(e * n)))]
            }
        }
        co(fo("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725")), co(fo("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf")), co(fo("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4")), co(fo("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921")), Math.abs, Math.atan2, Math.cos, Math.max, Math.min, Math.sin, Math.sqrt;
        var uo = 1e-12,
            so = Math.PI,
            ho = 2 * so;

        function lo(t) {
            this._context = t
        }
        lo.prototype = {
            areaStart: function() {
                this._line = 0
            },
            areaEnd: function() {
                this._line = NaN
            },
            lineStart: function() {
                this._point = 0
            },
            lineEnd: function() {
                (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
            },
            point: function(t, n) {
                switch (t = +t, n = +n, this._point) {
                    case 0:
                        this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                        break;
                    case 1:
                        this._point = 2;
                    default:
                        this._context.lineTo(t, n)
                }
            }
        };
        var _o = function(t) {
            return new lo(t)
        };
        po(_o);

        function bo(t) {
            this._curve = t
        }

        function po(t) {
            function n(n) {
                return new bo(t(n))
            }
            return n._curve = t, n
        }
        bo.prototype = {
            areaStart: function() {
                this._curve.areaStart()
            },
            areaEnd: function() {
                this._curve.areaEnd()
            },
            lineStart: function() {
                this._curve.lineStart()
            },
            lineEnd: function() {
                this._curve.lineEnd()
            },
            point: function(t, n) {
                this._curve.point(n * Math.sin(t), n * -Math.cos(t))
            }
        };
        Array.prototype.slice;
        Math.sqrt(1 / 3);
        var go = Math.sin(so / 10) / Math.sin(7 * so / 10),
            vo = (Math.sin(ho / 10), Math.cos(ho / 10), Math.sqrt(3), Math.sqrt(3), Math.sqrt(12), function() {});

        function yo(t, n, e) {
            t._context.bezierCurveTo((2 * t._x0 + t._x1) / 3, (2 * t._y0 + t._y1) / 3, (t._x0 + 2 * t._x1) / 3, (t._y0 + 2 * t._y1) / 3, (t._x0 + 4 * t._x1 + n) / 6, (t._y0 + 4 * t._y1 + e) / 6)
        }

        function mo(t) {
            this._context = t
        }
        mo.prototype = {
            areaStart: function() {
                this._line = 0
            },
            areaEnd: function() {
                this._line = NaN
            },
            lineStart: function() {
                this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0
            },
            lineEnd: function() {
                switch (this._point) {
                    case 3:
                        yo(this, this._x1, this._y1);
                    case 2:
                        this._context.lineTo(this._x1, this._y1)
                }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
            },
            point: function(t, n) {
                switch (t = +t, n = +n, this._point) {
                    case 0:
                        this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                        break;
                    case 1:
                        this._point = 2;
                        break;
                    case 2:
                        this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
                    default:
                        yo(this, t, n)
                }
                this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n
            }
        };

        function wo(t) {
            this._context = t
        }
        wo.prototype = {
            areaStart: vo,
            areaEnd: vo,
            lineStart: function() {
                this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN, this._point = 0
            },
            lineEnd: function() {
                switch (this._point) {
                    case 1:
                        this._context.moveTo(this._x2, this._y2), this._context.closePath();
                        break;
                    case 2:
                        this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3), this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3), this._context.closePath();
                        break;
                    case 3:
                        this.point(this._x2, this._y2), this.point(this._x3, this._y3), this.point(this._x4, this._y4)
                }
            },
            point: function(t, n) {
                switch (t = +t, n = +n, this._point) {
                    case 0:
                        this._point = 1, this._x2 = t, this._y2 = n;
                        break;
                    case 1:
                        this._point = 2, this._x3 = t, this._y3 = n;
                        break;
                    case 2:
                        this._point = 3, this._x4 = t, this._y4 = n, this._context.moveTo((this._x0 + 4 * this._x1 + t) / 6, (this._y0 + 4 * this._y1 + n) / 6);
                        break;
                    default:
                        yo(this, t, n)
                }
                this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n
            }
        };

        function xo(t) {
            this._context = t
        }
        xo.prototype = {
            areaStart: function() {
                this._line = 0
            },
            areaEnd: function() {
                this._line = NaN
            },
            lineStart: function() {
                this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0
            },
            lineEnd: function() {
                (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line
            },
            point: function(t, n) {
                switch (t = +t, n = +n, this._point) {
                    case 0:
                        this._point = 1;
                        break;
                    case 1:
                        this._point = 2;
                        break;
                    case 2:
                        this._point = 3;
                        var e = (this._x0 + 4 * this._x1 + t) / 6,
                            i = (this._y0 + 4 * this._y1 + n) / 6;
                        this._line ? this._context.lineTo(e, i) : this._context.moveTo(e, i);
                        break;
                    case 3:
                        this._point = 4;
                    default:
                        yo(this, t, n)
                }
                this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n
            }
        };

        function Mo(t, n) {
            this._basis = new mo(t), this._beta = n
        }
        Mo.prototype = {
            lineStart: function() {
                this._x = [], this._y = [], this._basis.lineStart()
            },
            lineEnd: function() {
                var t = this._x,
                    n = this._y,
                    e = t.length - 1;
                if (e > 0)
                    for (var i, r = t[0], a = n[0], f = t[e] - r, o = n[e] - a, c = -1; ++c <= e;) i = c / e, this._basis.point(this._beta * t[c] + (1 - this._beta) * (r + i * f), this._beta * n[c] + (1 - this._beta) * (a + i * o));
                this._x = this._y = null, this._basis.lineEnd()
            },
            point: function(t, n) {
                this._x.push(+t), this._y.push(+n)
            }
        };
        (function t(n) {
            function e(t) {
                return 1 === n ? new mo(t) : new Mo(t, n)
            }
            return e.beta = function(n) {
                return t(+n)
            }, e
        })(.85);

        function To(t, n, e) {
            t._context.bezierCurveTo(t._x1 + t._k * (t._x2 - t._x0), t._y1 + t._k * (t._y2 - t._y0), t._x2 + t._k * (t._x1 - n), t._y2 + t._k * (t._y1 - e), t._x2, t._y2)
        }

        function No(t, n) {
            this._context = t, this._k = (1 - n) / 6
        }
        No.prototype = {
            areaStart: function() {
                this._line = 0
            },
            areaEnd: function() {
                this._line = NaN
            },
            lineStart: function() {
                this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0
            },
            lineEnd: function() {
                switch (this._point) {
                    case 2:
                        this._context.lineTo(this._x2, this._y2);
                        break;
                    case 3:
                        To(this, this._x1, this._y1)
                }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
            },
            point: function(t, n) {
                switch (t = +t, n = +n, this._point) {
                    case 0:
                        this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                        break;
                    case 1:
                        this._point = 2, this._x1 = t, this._y1 = n;
                        break;
                    case 2:
                        this._point = 3;
                    default:
                        To(this, t, n)
                }
                this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
            }
        };
        (function t(n) {
            function e(t) {
                return new No(t, n)
            }
            return e.tension = function(n) {
                return t(+n)
            }, e
        })(0);

        function Co(t, n) {
            this._context = t, this._k = (1 - n) / 6
        }
        Co.prototype = {
            areaStart: vo,
            areaEnd: vo,
            lineStart: function() {
                this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._point = 0
            },
            lineEnd: function() {
                switch (this._point) {
                    case 1:
                        this._context.moveTo(this._x3, this._y3), this._context.closePath();
                        break;
                    case 2:
                        this._context.lineTo(this._x3, this._y3), this._context.closePath();
                        break;
                    case 3:
                        this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5)
                }
            },
            point: function(t, n) {
                switch (t = +t, n = +n, this._point) {
                    case 0:
                        this._point = 1, this._x3 = t, this._y3 = n;
                        break;
                    case 1:
                        this._point = 2, this._context.moveTo(this._x4 = t, this._y4 = n);
                        break;
                    case 2:
                        this._point = 3, this._x5 = t, this._y5 = n;
                        break;
                    default:
                        To(this, t, n)
                }
                this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
            }
        };
        (function t(n) {
            function e(t) {
                return new Co(t, n)
            }
            return e.tension = function(n) {
                return t(+n)
            }, e
        })(0);

        function Ao(t, n) {
            this._context = t, this._k = (1 - n) / 6
        }
        Ao.prototype = {
            areaStart: function() {
                this._line = 0
            },
            areaEnd: function() {
                this._line = NaN
            },
            lineStart: function() {
                this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0
            },
            lineEnd: function() {
                (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line
            },
            point: function(t, n) {
                switch (t = +t, n = +n, this._point) {
                    case 0:
                        this._point = 1;
                        break;
                    case 1:
                        this._point = 2;
                        break;
                    case 2:
                        this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
                        break;
                    case 3:
                        this._point = 4;
                    default:
                        To(this, t, n)
                }
                this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
            }
        };
        (function t(n) {
            function e(t) {
                return new Ao(t, n)
            }
            return e.tension = function(n) {
                return t(+n)
            }, e
        })(0);

        function Eo(t, n, e) {
            var i = t._x1,
                r = t._y1,
                a = t._x2,
                f = t._y2;
            if (t._l01_a > uo) {
                var o = 2 * t._l01_2a + 3 * t._l01_a * t._l12_a + t._l12_2a,
                    c = 3 * t._l01_a * (t._l01_a + t._l12_a);
                i = (i * o - t._x0 * t._l12_2a + t._x2 * t._l01_2a) / c, r = (r * o - t._y0 * t._l12_2a + t._y2 * t._l01_2a) / c
            }
            if (t._l23_a > uo) {
                var u = 2 * t._l23_2a + 3 * t._l23_a * t._l12_a + t._l12_2a,
                    s = 3 * t._l23_a * (t._l23_a + t._l12_a);
                a = (a * u + t._x1 * t._l23_2a - n * t._l12_2a) / s, f = (f * u + t._y1 * t._l23_2a - e * t._l12_2a) / s
            }
            t._context.bezierCurveTo(i, r, a, f, t._x2, t._y2)
        }

        function So(t, n) {
            this._context = t, this._alpha = n
        }
        So.prototype = {
            areaStart: function() {
                this._line = 0
            },
            areaEnd: function() {
                this._line = NaN
            },
            lineStart: function() {
                this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0
            },
            lineEnd: function() {
                switch (this._point) {
                    case 2:
                        this._context.lineTo(this._x2, this._y2);
                        break;
                    case 3:
                        this.point(this._x2, this._y2)
                }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
            },
            point: function(t, n) {
                if (t = +t, n = +n, this._point) {
                    var e = this._x2 - t,
                        i = this._y2 - n;
                    this._l23_a = Math.sqrt(this._l23_2a = Math.pow(e * e + i * i, this._alpha))
                }
                switch (this._point) {
                    case 0:
                        this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                        break;
                    case 1:
                        this._point = 2;
                        break;
                    case 2:
                        this._point = 3;
                    default:
                        Eo(this, t, n)
                }
                this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
            }
        };
        (function t(n) {
            function e(t) {
                return n ? new So(t, n) : new No(t, 0)
            }
            return e.alpha = function(n) {
                return t(+n)
            }, e
        })(.5);

        function ko(t, n) {
            this._context = t, this._alpha = n
        }
        ko.prototype = {
            areaStart: vo,
            areaEnd: vo,
            lineStart: function() {
                this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0
            },
            lineEnd: function() {
                switch (this._point) {
                    case 1:
                        this._context.moveTo(this._x3, this._y3), this._context.closePath();
                        break;
                    case 2:
                        this._context.lineTo(this._x3, this._y3), this._context.closePath();
                        break;
                    case 3:
                        this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5)
                }
            },
            point: function(t, n) {
                if (t = +t, n = +n, this._point) {
                    var e = this._x2 - t,
                        i = this._y2 - n;
                    this._l23_a = Math.sqrt(this._l23_2a = Math.pow(e * e + i * i, this._alpha))
                }
                switch (this._point) {
                    case 0:
                        this._point = 1, this._x3 = t, this._y3 = n;
                        break;
                    case 1:
                        this._point = 2, this._context.moveTo(this._x4 = t, this._y4 = n);
                        break;
                    case 2:
                        this._point = 3, this._x5 = t, this._y5 = n;
                        break;
                    default:
                        Eo(this, t, n)
                }
                this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
            }
        };
        (function t(n) {
            function e(t) {
                return n ? new ko(t, n) : new Co(t, 0)
            }
            return e.alpha = function(n) {
                return t(+n)
            }, e
        })(.5);

        function zo(t, n) {
            this._context = t, this._alpha = n
        }
        zo.prototype = {
            areaStart: function() {
                this._line = 0
            },
            areaEnd: function() {
                this._line = NaN
            },
            lineStart: function() {
                this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0
            },
            lineEnd: function() {
                (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line
            },
            point: function(t, n) {
                if (t = +t, n = +n, this._point) {
                    var e = this._x2 - t,
                        i = this._y2 - n;
                    this._l23_a = Math.sqrt(this._l23_2a = Math.pow(e * e + i * i, this._alpha))
                }
                switch (this._point) {
                    case 0:
                        this._point = 1;
                        break;
                    case 1:
                        this._point = 2;
                        break;
                    case 2:
                        this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
                        break;
                    case 3:
                        this._point = 4;
                    default:
                        Eo(this, t, n)
                }
                this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
            }
        };
        (function t(n) {
            function e(t) {
                return n ? new zo(t, n) : new Ao(t, 0)
            }
            return e.alpha = function(n) {
                return t(+n)
            }, e
        })(.5);

        function Uo(t) {
            this._context = t
        }
        Uo.prototype = {
            areaStart: vo,
            areaEnd: vo,
            lineStart: function() {
                this._point = 0
            },
            lineEnd: function() {
                this._point && this._context.closePath()
            },
            point: function(t, n) {
                t = +t, n = +n, this._point ? this._context.lineTo(t, n) : (this._point = 1, this._context.moveTo(t, n))
            }
        };

        function Lo(t) {
            return t < 0 ? -1 : 1
        }

        function Po(t, n, e) {
            var i = t._x1 - t._x0,
                r = n - t._x1,
                a = (t._y1 - t._y0) / (i || r < 0 && -0),
                f = (e - t._y1) / (r || i < 0 && -0),
                o = (a * r + f * i) / (i + r);
            return (Lo(a) + Lo(f)) * Math.min(Math.abs(a), Math.abs(f), .5 * Math.abs(o)) || 0
        }

        function Do(t, n) {
            var e = t._x1 - t._x0;
            return e ? (3 * (t._y1 - t._y0) / e - n) / 2 : n
        }

        function $o(t, n, e) {
            var i = t._x0,
                r = t._y0,
                a = t._x1,
                f = t._y1,
                o = (a - i) / 3;
            t._context.bezierCurveTo(i + o, r + o * n, a - o, f - o * e, a, f)
        }

        function Yo(t) {
            this._context = t
        }

        function Fo(t) {
            this._context = new Ro(t)
        }

        function Ro(t) {
            this._context = t
        }

        function Ho(t) {
            this._context = t
        }

        function Oo(t) {
            var n, e, i = t.length - 1,
                r = new Array(i),
                a = new Array(i),
                f = new Array(i);
            for (r[0] = 0, a[0] = 2, f[0] = t[0] + 2 * t[1], n = 1; n < i - 1; ++n) r[n] = 1, a[n] = 4, f[n] = 4 * t[n] + 2 * t[n + 1];
            for (r[i - 1] = 2, a[i - 1] = 7, f[i - 1] = 8 * t[i - 1] + t[i], n = 1; n < i; ++n) e = r[n] / a[n - 1], a[n] -= e, f[n] -= e * f[n - 1];
            for (r[i - 1] = f[i - 1] / a[i - 1], n = i - 2; n >= 0; --n) r[n] = (f[n] - r[n + 1]) / a[n];
            for (a[i - 1] = (t[i] + r[i - 1]) / 2, n = 0; n < i - 1; ++n) a[n] = 2 * t[n + 1] - r[n + 1];
            return [r, a]
        }
        Yo.prototype = {
            areaStart: function() {
                this._line = 0
            },
            areaEnd: function() {
                this._line = NaN
            },
            lineStart: function() {
                this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0
            },
            lineEnd: function() {
                switch (this._point) {
                    case 2:
                        this._context.lineTo(this._x1, this._y1);
                        break;
                    case 3:
                        $o(this, this._t0, Do(this, this._t0))
                }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
            },
            point: function(t, n) {
                var e = NaN;
                if (n = +n, (t = +t) !== this._x1 || n !== this._y1) {
                    switch (this._point) {
                        case 0:
                            this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                            break;
                        case 1:
                            this._point = 2;
                            break;
                        case 2:
                            this._point = 3, $o(this, Do(this, e = Po(this, t, n)), e);
                            break;
                        default:
                            $o(this, this._t0, e = Po(this, t, n))
                    }
                    this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n, this._t0 = e
                }
            }
        }, (Fo.prototype = Object.create(Yo.prototype)).point = function(t, n) {
            Yo.prototype.point.call(this, n, t)
        }, Ro.prototype = {
            moveTo: function(t, n) {
                this._context.moveTo(n, t)
            },
            closePath: function() {
                this._context.closePath()
            },
            lineTo: function(t, n) {
                this._context.lineTo(n, t)
            },
            bezierCurveTo: function(t, n, e, i, r, a) {
                this._context.bezierCurveTo(n, t, i, e, a, r)
            }
        }, Ho.prototype = {
            areaStart: function() {
                this._line = 0
            },
            areaEnd: function() {
                this._line = NaN
            },
            lineStart: function() {
                this._x = [], this._y = []
            },
            lineEnd: function() {
                var t = this._x,
                    n = this._y,
                    e = t.length;
                if (e)
                    if (this._line ? this._context.lineTo(t[0], n[0]) : this._context.moveTo(t[0], n[0]), 2 === e) this._context.lineTo(t[1], n[1]);
                    else
                        for (var i = Oo(t), r = Oo(n), a = 0, f = 1; f < e; ++a, ++f) this._context.bezierCurveTo(i[0][a], r[0][a], i[1][a], r[1][a], t[f], n[f]);
                    (this._line || 0 !== this._line && 1 === e) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null
            },
            point: function(t, n) {
                this._x.push(+t), this._y.push(+n)
            }
        };

        function Xo(t, n) {
            this._context = t, this._t = n
        }
        Xo.prototype = {
            areaStart: function() {
                this._line = 0
            },
            areaEnd: function() {
                this._line = NaN
            },
            lineStart: function() {
                this._x = this._y = NaN, this._point = 0
            },
            lineEnd: function() {
                0 < this._t && this._t < 1 && 2 === this._point && this._context.lineTo(this._x, this._y), (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line >= 0 && (this._t = 1 - this._t, this._line = 1 - this._line)
            },
            point: function(t, n) {
                switch (t = +t, n = +n, this._point) {
                    case 0:
                        this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                        break;
                    case 1:
                        this._point = 2;
                    default:
                        if (this._t <= 0) this._context.lineTo(this._x, n), this._context.lineTo(t, n);
                        else {
                            var e = this._x * (1 - this._t) + t * this._t;
                            this._context.lineTo(e, this._y), this._context.lineTo(e, n)
                        }
                }
                this._x = t, this._y = n
            }
        };

        function Io() {
            this._ = null
        }

        function Vo(t) {
            t.U = t.C = t.L = t.R = t.P = t.N = null
        }

        function qo(t, n) {
            var e = n,
                i = n.R,
                r = e.U;
            r ? r.L === e ? r.L = i : r.R = i : t._ = i, i.U = r, e.U = i, e.R = i.L, e.R && (e.R.U = e), i.L = e
        }

        function Bo(t, n) {
            var e = n,
                i = n.L,
                r = e.U;
            r ? r.L === e ? r.L = i : r.R = i : t._ = i, i.U = r, e.U = i, e.L = i.R, e.L && (e.L.U = e), i.R = e
        }

        function Wo(t) {
            for (; t.L;) t = t.L;
            return t
        }
        Io.prototype = {
            constructor: Io,
            insert: function(t, n) {
                var e, i, r;
                if (t) {
                    if (n.P = t, n.N = t.N, t.N && (t.N.P = n), t.N = n, t.R) {
                        for (t = t.R; t.L;) t = t.L;
                        t.L = n
                    } else t.R = n;
                    e = t
                } else this._ ? (t = Wo(this._), n.P = null, n.N = t, t.P = t.L = n, e = t) : (n.P = n.N = null, this._ = n, e = null);
                for (n.L = n.R = null, n.U = e, n.C = !0, t = n; e && e.C;) e === (i = e.U).L ? (r = i.R) && r.C ? (e.C = r.C = !1, i.C = !0, t = i) : (t === e.R && (qo(this, e), e = (t = e).U), e.C = !1, i.C = !0, Bo(this, i)) : (r = i.L) && r.C ? (e.C = r.C = !1, i.C = !0, t = i) : (t === e.L && (Bo(this, e), e = (t = e).U), e.C = !1, i.C = !0, qo(this, i)), e = t.U;
                this._.C = !1
            },
            remove: function(t) {
                t.N && (t.N.P = t.P), t.P && (t.P.N = t.N), t.N = t.P = null;
                var n, e, i, r = t.U,
                    a = t.L,
                    f = t.R;
                if (e = a ? f ? Wo(f) : a : f, r ? r.L === t ? r.L = e : r.R = e : this._ = e, a && f ? (i = e.C, e.C = t.C, e.L = a, a.U = e, e !== f ? (r = e.U, e.U = t.U, t = e.R, r.L = t, e.R = f, f.U = e) : (e.U = r, r = e, t = e.R)) : (i = t.C, t = e), t && (t.U = r), !i)
                    if (t && t.C) t.C = !1;
                    else {
                        do {
                            if (t === this._) break;
                            if (t === r.L) {
                                if ((n = r.R).C && (n.C = !1, r.C = !0, qo(this, r), n = r.R), n.L && n.L.C || n.R && n.R.C) {
                                    n.R && n.R.C || (n.L.C = !1, n.C = !0, Bo(this, n), n = r.R), n.C = r.C, r.C = n.R.C = !1, qo(this, r), t = this._;
                                    break
                                }
                            } else if ((n = r.L).C && (n.C = !1, r.C = !0, Bo(this, r), n = r.L), n.L && n.L.C || n.R && n.R.C) {
                                n.L && n.L.C || (n.R.C = !1, n.C = !0, qo(this, n), n = r.L), n.C = r.C, r.C = n.L.C = !1, Bo(this, r), t = this._;
                                break
                            }
                            n.C = !0, t = r, r = r.U
                        } while (!t.C);
                        t && (t.C = !1)
                    }
            }
        };
        var Zo = Io;

        function jo(t, n, e, i) {
            var r = [null, null],
                a = yc.push(r) - 1;
            return r.left = t, r.right = n, e && Jo(r, t, n, e), i && Jo(r, n, t, i), gc[t.index].halfedges.push(a), gc[n.index].halfedges.push(a), r
        }

        function Qo(t, n, e) {
            var i = [n, e];
            return i.left = t, i
        }

        function Jo(t, n, e, i) {
            t[0] || t[1] ? t.left === e ? t[1] = i : t[0] = i : (t[0] = i, t.left = n, t.right = e)
        }

        function Go(t, n, e, i, r) {
            var a, f = t[0],
                o = t[1],
                c = f[0],
                u = f[1],
                s = 0,
                h = 1,
                l = o[0] - c,
                d = o[1] - u;
            if (a = n - c, l || !(a > 0)) {
                if (a /= l, l < 0) {
                    if (a < s) return;
                    a < h && (h = a)
                } else if (l > 0) {
                    if (a > h) return;
                    a > s && (s = a)
                }
                if (a = i - c, l || !(a < 0)) {
                    if (a /= l, l < 0) {
                        if (a > h) return;
                        a > s && (s = a)
                    } else if (l > 0) {
                        if (a < s) return;
                        a < h && (h = a)
                    }
                    if (a = e - u, d || !(a > 0)) {
                        if (a /= d, d < 0) {
                            if (a < s) return;
                            a < h && (h = a)
                        } else if (d > 0) {
                            if (a > h) return;
                            a > s && (s = a)
                        }
                        if (a = r - u, d || !(a < 0)) {
                            if (a /= d, d < 0) {
                                if (a > h) return;
                                a > s && (s = a)
                            } else if (d > 0) {
                                if (a < s) return;
                                a < h && (h = a)
                            }
                            return !(s > 0 || h < 1) || (s > 0 && (t[0] = [c + s * l, u + s * d]), h < 1 && (t[1] = [c + h * l, u + h * d]), !0)
                        }
                    }
                }
            }
        }

        function Ko(t, n, e, i, r) {
            var a = t[1];
            if (a) return !0;
            var f, o, c = t[0],
                u = t.left,
                s = t.right,
                h = u[0],
                l = u[1],
                d = s[0],
                _ = s[1],
                b = (h + d) / 2,
                p = (l + _) / 2;
            if (_ === l) {
                if (b < n || b >= i) return;
                if (h > d) {
                    if (c) {
                        if (c[1] >= r) return
                    } else c = [b, e];
                    a = [b, r]
                } else {
                    if (c) {
                        if (c[1] < e) return
                    } else c = [b, r];
                    a = [b, e]
                }
            } else if (o = p - (f = (h - d) / (_ - l)) * b, f < -1 || f > 1)
                if (h > d) {
                    if (c) {
                        if (c[1] >= r) return
                    } else c = [(e - o) / f, e];
                    a = [(r - o) / f, r]
                } else {
                    if (c) {
                        if (c[1] < e) return
                    } else c = [(r - o) / f, r];
                    a = [(e - o) / f, e]
                } else if (l < _) {
                if (c) {
                    if (c[0] >= i) return
                } else c = [n, f * n + o];
                a = [i, f * i + o]
            } else {
                if (c) {
                    if (c[0] < n) return
                } else c = [i, f * i + o];
                a = [n, f * n + o]
            }
            return t[0] = c, t[1] = a, !0
        }

        function tc(t, n) {
            var e = t.site,
                i = n.left,
                r = n.right;
            return e === r && (r = i, i = e), r ? Math.atan2(r[1] - i[1], r[0] - i[0]) : (e === i ? (i = n[1], r = n[0]) : (i = n[0], r = n[1]), Math.atan2(i[0] - r[0], r[1] - i[1]))
        }

        function nc(t, n) {
            return n[+(n.left !== t.site)]
        }

        function ec(t, n) {
            return n[+(n.left === t.site)]
        }
        var ic, rc = [];

        function ac() {
            Vo(this), this.x = this.y = this.arc = this.site = this.cy = null
        }

        function fc(t) {
            var n = t.P,
                e = t.N;
            if (n && e) {
                var i = n.site,
                    r = t.site,
                    a = e.site;
                if (i !== a) {
                    var f = r[0],
                        o = r[1],
                        c = i[0] - f,
                        u = i[1] - o,
                        s = a[0] - f,
                        h = a[1] - o,
                        l = 2 * (c * h - u * s);
                    if (!(l >= -wc)) {
                        var d = c * c + u * u,
                            _ = s * s + h * h,
                            b = (h * d - u * _) / l,
                            p = (c * _ - s * d) / l,
                            g = rc.pop() || new ac;
                        g.arc = t, g.site = r, g.x = b + f, g.y = (g.cy = p + o) + Math.sqrt(b * b + p * p), t.circle = g;
                        for (var v = null, y = vc._; y;)
                            if (g.y < y.y || g.y === y.y && g.x <= y.x) {
                                if (!y.L) {
                                    v = y.P;
                                    break
                                }
                                y = y.L
                            } else {
                                if (!y.R) {
                                    v = y;
                                    break
                                }
                                y = y.R
                            }
                        vc.insert(v, g), v || (ic = g)
                    }
                }
            }
        }

        function oc(t) {
            var n = t.circle;
            n && (n.P || (ic = n.N), vc.remove(n), rc.push(n), Vo(n), t.circle = null)
        }
        var cc = [];

        function uc() {
            Vo(this), this.edge = this.site = this.circle = null
        }

        function sc(t) {
            var n = cc.pop() || new uc;
            return n.site = t, n
        }

        function hc(t) {
            oc(t), pc.remove(t), cc.push(t), Vo(t)
        }

        function lc(t) {
            var n = t.circle,
                e = n.x,
                i = n.cy,
                r = [e, i],
                a = t.P,
                f = t.N,
                o = [t];
            hc(t);
            for (var c = a; c.circle && Math.abs(e - c.circle.x) < mc && Math.abs(i - c.circle.cy) < mc;) a = c.P, o.unshift(c), hc(c), c = a;
            o.unshift(c), oc(c);
            for (var u = f; u.circle && Math.abs(e - u.circle.x) < mc && Math.abs(i - u.circle.cy) < mc;) f = u.N, o.push(u), hc(u), u = f;
            o.push(u), oc(u);
            var s, h = o.length;
            for (s = 1; s < h; ++s) u = o[s], c = o[s - 1], Jo(u.edge, c.site, u.site, r);
            c = o[0], (u = o[h - 1]).edge = jo(c.site, u.site, null, r), fc(c), fc(u)
        }

        function dc(t) {
            for (var n, e, i, r, a = t[0], f = t[1], o = pc._; o;)
                if ((i = _c(o, f) - a) > mc) o = o.L;
                else {
                    if (!((r = a - bc(o, f)) > mc)) {
                        i > -mc ? (n = o.P, e = o) : r > -mc ? (n = o, e = o.N) : n = e = o;
                        break
                    }
                    if (!o.R) {
                        n = o;
                        break
                    }
                    o = o.R
                }! function(t) {
                gc[t.index] = {
                    site: t,
                    halfedges: []
                }
            }(t);
            var c = sc(t);
            if (pc.insert(n, c), n || e) {
                if (n === e) return oc(n), e = sc(n.site), pc.insert(c, e), c.edge = e.edge = jo(n.site, c.site), fc(n), void fc(e);
                if (e) {
                    oc(n), oc(e);
                    var u = n.site,
                        s = u[0],
                        h = u[1],
                        l = t[0] - s,
                        d = t[1] - h,
                        _ = e.site,
                        b = _[0] - s,
                        p = _[1] - h,
                        g = 2 * (l * p - d * b),
                        v = l * l + d * d,
                        y = b * b + p * p,
                        m = [(p * v - d * y) / g + s, (l * y - b * v) / g + h];
                    Jo(e.edge, u, _, m), c.edge = jo(u, t, null, m), e.edge = jo(t, _, null, m), fc(n), fc(e)
                } else c.edge = jo(n.site, c.site)
            }
        }

        function _c(t, n) {
            var e = t.site,
                i = e[0],
                r = e[1],
                a = r - n;
            if (!a) return i;
            var f = t.P;
            if (!f) return -1 / 0;
            var o = (e = f.site)[0],
                c = e[1],
                u = c - n;
            if (!u) return o;
            var s = o - i,
                h = 1 / a - 1 / u,
                l = s / u;
            return h ? (-l + Math.sqrt(l * l - 2 * h * (s * s / (-2 * u) - c + u / 2 + r - a / 2))) / h + i : (i + o) / 2
        }

        function bc(t, n) {
            var e = t.N;
            if (e) return _c(e, n);
            var i = t.site;
            return i[1] === n ? i[0] : 1 / 0
        }
        var pc, gc, vc, yc, mc = 1e-6,
            wc = 1e-12;

        function xc(t, n) {
			console.log(t[0] + " - " + n[0]);
            return n[1] - t[1] || n[0] - t[0]
        }

        function Mc(t, n) {
            var e, i, r, a = t.sort(xc).pop();
            for (yc = [], gc = new Array(t.length), pc = new Zo, vc = new Zo;;)
                if (r = ic, a && (!r || a[1] < r.y || a[1] === r.y && a[0] < r.x)) a[0] === e && a[1] === i || (dc(a), e = a[0], i = a[1]), a = t.pop();
                else {
                    if (!r) break;
                    lc(r.arc)
                }
            if (function() {
                    for (var t, n, e, i, r = 0, a = gc.length; r < a; ++r)
                        if ((t = gc[r]) && (i = (n = t.halfedges).length)) {
                            var f = new Array(i),
                                o = new Array(i);
                            for (e = 0; e < i; ++e) f[e] = e, o[e] = tc(t, yc[n[e]]);
                            for (f.sort(function(t, n) {
                                    return o[n] - o[t]
                                }), e = 0; e < i; ++e) o[e] = n[f[e]];
                            for (e = 0; e < i; ++e) n[e] = o[e]
                        }
                }(), n) {
                var f = +n[0][0],
                    o = +n[0][1],
                    c = +n[1][0],
                    u = +n[1][1];
                ! function(t, n, e, i) {
                    for (var r, a = yc.length; a--;) Ko(r = yc[a], t, n, e, i) && Go(r, t, n, e, i) && (Math.abs(r[0][0] - r[1][0]) > mc || Math.abs(r[0][1] - r[1][1]) > mc) || delete yc[a]
                }(f, o, c, u),
                function(t, n, e, i) {
                    var r, a, f, o, c, u, s, h, l, d, _, b, p = gc.length,
                        g = !0;
                    for (r = 0; r < p; ++r)
                        if (a = gc[r]) {
                            for (f = a.site, o = (c = a.halfedges).length; o--;) yc[c[o]] || c.splice(o, 1);
                            for (o = 0, u = c.length; o < u;) _ = (d = ec(a, yc[c[o]]))[0], b = d[1], h = (s = nc(a, yc[c[++o % u]]))[0], l = s[1], (Math.abs(_ - h) > mc || Math.abs(b - l) > mc) && (c.splice(o, 0, yc.push(Qo(f, d, Math.abs(_ - t) < mc && i - b > mc ? [t, Math.abs(h - t) < mc ? l : i] : Math.abs(b - i) < mc && e - _ > mc ? [Math.abs(l - i) < mc ? h : e, i] : Math.abs(_ - e) < mc && b - n > mc ? [e, Math.abs(h - e) < mc ? l : n] : Math.abs(b - n) < mc && _ - t > mc ? [Math.abs(l - n) < mc ? h : t, n] : null)) - 1), ++u);
                            u && (g = !1)
                        }
                    if (g) {
                        var v, y, m, w = 1 / 0;
                        for (r = 0, g = null; r < p; ++r)(a = gc[r]) && (m = (v = (f = a.site)[0] - t) * v + (y = f[1] - n) * y) < w && (w = m, g = a);
                        if (g) {
                            var x = [t, n],
                                M = [t, i],
                                T = [e, i],
                                N = [e, n];
                            g.halfedges.push(yc.push(Qo(f = g.site, x, M)) - 1, yc.push(Qo(f, M, T)) - 1, yc.push(Qo(f, T, N)) - 1, yc.push(Qo(f, N, x)) - 1)
                        }
                    }
                    for (r = 0; r < p; ++r)(a = gc[r]) && (a.halfedges.length || delete gc[r])
                }(f, o, c, u)
            }
            this.edges = yc, this.cells = gc, pc = vc = yc = gc = null
        }
        Mc.prototype = {
            constructor: Mc,
            polygons: function() {
                var t = this.edges;
                return this.cells.map(function(n) {
                    var e = n.halfedges.map(function(e) {
                        return nc(n, t[e])
                    });
                    return e.data = n.site.data, e
                })
            },
            triangles: function() {
                var t = [],
                    n = this.edges;
                return this.cells.forEach(function(e, i) {
                    if (a = (r = e.halfedges).length)
                        for (var r, a, f, o, c, u, s = e.site, h = -1, l = n[r[a - 1]], d = l.left === s ? l.right : l.left; ++h < a;) f = d, d = (l = n[r[h]]).left === s ? l.right : l.left, f && d && i < f.index && i < d.index && (c = f, u = d, ((o = s)[0] - u[0]) * (c[1] - o[1]) - (o[0] - c[0]) * (u[1] - o[1]) < 0) && t.push([s.data, f.data, d.data])
                }), t
            },
            links: function() {
                return this.edges.filter(function(t) {
                    return t.right
                }).map(function(t) {
                    return {
                        source: t.left.data,
                        target: t.right.data
                    }
                })
            },
            find: function(t, n, e) {
                for (var i, r, a = this, f = a._found || 0, o = a.cells.length; !(r = a.cells[f]);)
                    if (++f >= o) return null;
                var c = t - r.site[0],
                    u = n - r.site[1],
                    s = c * c + u * u;
                do {
                    r = a.cells[i = f], f = null, r.halfedges.forEach(function(e) {
                        var i = a.edges[e],
                            o = i.left;
                        if (o !== r.site && o || (o = i.right)) {
                            var c = t - o[0],
                                u = n - o[1],
                                h = c * c + u * u;
                            h < s && (s = h, f = o.index)
                        }
                    })
                } while (null !== f);
                return a._found = i, null == e || s <= e * e ? r.site : null
            }
        };
        var Tc = function(t) {
            return function() {
                return t
            }
        };

        function Nc(t, n, e) {
            this.target = t, this.type = n, this.transform = e
        }

        function Cc(t, n, e) {
            this.k = t, this.x = n, this.y = e
        }
        Cc.prototype = {
            constructor: Cc,
            scale: function(t) {
                return 1 === t ? this : new Cc(this.k * t, this.x, this.y)
            },
            translate: function(t, n) {
                return 0 === t & 0 === n ? this : new Cc(this.k, this.x + this.k * t, this.y + this.k * n)
            },
            apply: function(t) {
                return [t[0] * this.k + this.x, t[1] * this.k + this.y]
            },
            applyX: function(t) {
                return t * this.k + this.x
            },
            applyY: function(t) {
                return t * this.k + this.y
            },
            invert: function(t) {
                return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k]
            },
            invertX: function(t) {
                return (t - this.x) / this.k
            },
            invertY: function(t) {
                return (t - this.y) / this.k
            },
            rescaleX: function(t) {
                return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t))
            },
            rescaleY: function(t) {
                return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t))
            },
            toString: function() {
                return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")"
            }
        };
        var Ac = new Cc(1, 0, 0);

        function Ec() {
            j.stopImmediatePropagation()
        }
        Cc.prototype;
        var Sc = function() {
            j.preventDefault(), j.stopImmediatePropagation()
        };

        function kc() {
            return !j.button
        }

        function zc() {
            var t, n, e = this;
            return e instanceof SVGElement ? (t = (e = e.ownerSVGElement || e).width.baseVal.value, n = e.height.baseVal.value) : (t = e.clientWidth, n = e.clientHeight), [
                [0, 0],
                [t, n]
            ]
        }

        function Uc() {
            return this.__zoom || Ac
        }

        function Lc() {
            return -j.deltaY * (j.deltaMode ? 120 : 1) / 500
        }

        function Pc() {
            return "ontouchstart" in this
        }

        function Dc(t, n, e) {
            var i = t.invertX(n[0][0]) - e[0][0],
                r = t.invertX(n[1][0]) - e[1][0],
                a = t.invertY(n[0][1]) - e[0][1],
                f = t.invertY(n[1][1]) - e[1][1];
            return t.translate(r > i ? (i + r) / 2 : Math.min(0, i) || Math.max(0, r), f > a ? (a + f) / 2 : Math.min(0, a) || Math.max(0, f))
        }
        const $c = t => {
                const {
                    htmlID: n,
                    horizontalLayout: e,
                    zoomBehavior: i
                } = t, r = 20, a = 90, f = 30, o = 90;
                if (null === document.querySelector(`#${n}`)) throw new Error(`Unable to find the html element with id value : ${n}. \n    The tree can't be display`);
                const c = document.querySelector(`#${n}`).clientWidth,
                    u = document.querySelector(`#${n}`).clientHeight;
                if (0 === u || 0 === c) throw new Error("The tree can't be display because the svg height or width of the container is null");
                const s = c - o - a,
                    h = u - r - f,
                    l = function() {
                        var t, n, e = kc,
                            i = zc,
                            r = Dc,
                            a = Lc,
                            f = Pc,
                            o = [0, 1 / 0],
                            c = [
                                [-1 / 0, -1 / 0],
                                [1 / 0, 1 / 0]
                            ],
                            u = 250,
                            s = Xn,
                            h = [],
                            l = _("start", "zoom", "end"),
                            d = 500,
                            b = 150,
                            p = 0;

                        function g(t) {
                            t.property("__zoom", Uc).on("wheel.zoom", T).on("mousedown.zoom", N).on("dblclick.zoom", C).filter(f).on("touchstart.zoom", A).on("touchmove.zoom", E).on("touchend.zoom touchcancel.zoom", S).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)")
                        }

                        function v(t, n) {
                            return (n = Math.max(o[0], Math.min(o[1], n))) === t.k ? t : new Cc(n, t.x, t.y)
                        }

                        function y(t, n, e) {
                            var i = n[0] - e[0] * t.k,
                                r = n[1] - e[1] * t.k;
                            return i === t.x && r === t.y ? t : new Cc(t.k, i, r)
                        }

                        function m(t) {
                            return [(+t[0][0] + +t[1][0]) / 2, (+t[0][1] + +t[1][1]) / 2]
                        }

                        function w(t, n, e) {
                            t.on("start.zoom", function() {
                                x(this, arguments).start()
                            }).on("interrupt.zoom end.zoom", function() {
                                x(this, arguments).end()
                            }).tween("zoom", function() {
                                var t = arguments,
                                    r = x(this, t),
                                    a = i.apply(this, t),
                                    f = e || m(a),
                                    o = Math.max(a[1][0] - a[0][0], a[1][1] - a[0][1]),
                                    c = this.__zoom,
                                    u = "function" == typeof n ? n.apply(this, t) : n,
                                    h = s(c.invert(f).concat(o / c.k), u.invert(f).concat(o / u.k));
                                return function(t) {
                                    if (1 === t) t = u;
                                    else {
                                        var n = h(t),
                                            e = o / n[2];
                                        t = new Cc(e, f[0] - n[0] * e, f[1] - n[1] * e)
                                    }
                                    r.zoom(null, t)
                                }
                            })
                        }

                        function x(t, n) {
                            for (var e, i = 0, r = h.length; i < r; ++i)
                                if ((e = h[i]).that === t) return e;
                            return new M(t, n)
                        }

                        function M(t, n) {
                            this.that = t, this.args = n, this.index = -1, this.active = 0, this.extent = i.apply(t, n)
                        }

                        function T() {
                            if (e.apply(this, arguments)) {
                                var t = x(this, arguments),
                                    n = this.__zoom,
                                    i = Math.max(o[0], Math.min(o[1], n.k * Math.pow(2, a.apply(this, arguments)))),
                                    f = ht(this);
                                if (t.wheel) t.mouse[0][0] === f[0] && t.mouse[0][1] === f[1] || (t.mouse[1] = n.invert(t.mouse[0] = f)), clearTimeout(t.wheel);
                                else {
                                    if (n.k === i) return;
                                    t.mouse = [f, n.invert(f)], Ne(this), t.start()
                                }
                                Sc(), t.wheel = setTimeout(function() {
                                    t.wheel = null, t.end()
                                }, b), t.zoom("mouse", r(y(v(n, i), t.mouse[0], t.mouse[1]), t.extent, c))
                            }
                        }

                        function N() {
                            if (!n && e.apply(this, arguments)) {
                                var t = x(this, arguments),
                                    i = ft(j.view).on("mousemove.zoom", function() {
                                        if (Sc(), !t.moved) {
                                            var n = j.clientX - f,
                                                e = j.clientY - o;
                                            t.moved = n * n + e * e > p
                                        }
                                        t.zoom("mouse", r(y(t.that.__zoom, t.mouse[0] = ht(t.that), t.mouse[1]), t.extent, c))
                                    }, !0).on("mouseup.zoom", function() {
                                        i.on("mousemove.zoom mouseup.zoom", null), bt(j.view, t.moved), Sc(), t.end()
                                    }, !0),
                                    a = ht(this),
                                    f = j.clientX,
                                    o = j.clientY;
                                _t(j.view), Ec(), t.mouse = [a, this.__zoom.invert(a)], Ne(this), t.start()
                            }
                        }

                        function C() {
                            if (e.apply(this, arguments)) {
                                var t = this.__zoom,
                                    n = ht(this),
                                    a = t.invert(n),
                                    f = t.k * (j.shiftKey ? .5 : 2),
                                    o = r(y(v(t, f), n, a), i.apply(this, arguments), c);
                                Sc(), u > 0 ? ft(this).transition().duration(u).call(w, o, n) : ft(this).call(g.transform, o)
                            }
                        }

                        function A() {
                            if (e.apply(this, arguments)) {
                                var n, i, r, a, f = x(this, arguments),
                                    o = j.changedTouches,
                                    c = o.length;
                                for (Ec(), i = 0; i < c; ++i) r = o[i], a = [a = lt(this, o, r.identifier), this.__zoom.invert(a), r.identifier], f.touch0 ? f.touch1 || (f.touch1 = a) : (f.touch0 = a, n = !0);
                                if (t && (t = clearTimeout(t), !f.touch1)) return f.end(), void((a = ft(this).on("dblclick.zoom")) && a.apply(this, arguments));
                                n && (t = setTimeout(function() {
                                    t = null
                                }, d), Ne(this), f.start())
                            }
                        }

                        function E() {
                            var n, e, i, a, f = x(this, arguments),
                                o = j.changedTouches,
                                u = o.length;
                            for (Sc(), t && (t = clearTimeout(t)), n = 0; n < u; ++n) e = o[n], i = lt(this, o, e.identifier), f.touch0 && f.touch0[2] === e.identifier ? f.touch0[0] = i : f.touch1 && f.touch1[2] === e.identifier && (f.touch1[0] = i);
                            if (e = f.that.__zoom, f.touch1) {
                                var s = f.touch0[0],
                                    h = f.touch0[1],
                                    l = f.touch1[0],
                                    d = f.touch1[1],
                                    _ = (_ = l[0] - s[0]) * _ + (_ = l[1] - s[1]) * _,
                                    b = (b = d[0] - h[0]) * b + (b = d[1] - h[1]) * b;
                                e = v(e, Math.sqrt(_ / b)), i = [(s[0] + l[0]) / 2, (s[1] + l[1]) / 2], a = [(h[0] + d[0]) / 2, (h[1] + d[1]) / 2]
                            } else {
                                if (!f.touch0) return;
                                i = f.touch0[0], a = f.touch0[1]
                            }
                            f.zoom("touch", r(y(e, i, a), f.extent, c))
                        }

                        function S() {
                            var t, e, i = x(this, arguments),
                                r = j.changedTouches,
                                a = r.length;
                            for (Ec(), n && clearTimeout(n), n = setTimeout(function() {
                                    n = null
                                }, d), t = 0; t < a; ++t) e = r[t], i.touch0 && i.touch0[2] === e.identifier ? delete i.touch0 : i.touch1 && i.touch1[2] === e.identifier && delete i.touch1;
                            i.touch1 && !i.touch0 && (i.touch0 = i.touch1, delete i.touch1), i.touch0 ? i.touch0[1] = this.__zoom.invert(i.touch0[0]) : i.end()
                        }
                        return g.transform = function(t, n) {
                            var e = t.selection ? t.selection() : t;
                            e.property("__zoom", Uc), t !== e ? w(t, n) : e.interrupt().each(function() {
                                x(this, arguments).start().zoom(null, "function" == typeof n ? n.apply(this, arguments) : n).end()
                            })
                        }, g.scaleBy = function(t, n) {
                            g.scaleTo(t, function() {
                                return this.__zoom.k * ("function" == typeof n ? n.apply(this, arguments) : n)
                            })
                        }, g.scaleTo = function(t, n) {
                            g.transform(t, function() {
                                var t = i.apply(this, arguments),
                                    e = this.__zoom,
                                    a = m(t),
                                    f = e.invert(a),
                                    o = "function" == typeof n ? n.apply(this, arguments) : n;
                                return r(y(v(e, o), a, f), t, c)
                            })
                        }, g.translateBy = function(t, n, e) {
                            g.transform(t, function() {
                                return r(this.__zoom.translate("function" == typeof n ? n.apply(this, arguments) : n, "function" == typeof e ? e.apply(this, arguments) : e), i.apply(this, arguments), c)
                            })
                        }, g.translateTo = function(t, n, e) {
                            g.transform(t, function() {
                                var t = i.apply(this, arguments),
                                    a = this.__zoom,
                                    f = m(t);
                                return r(Ac.translate(f[0], f[1]).scale(a.k).translate("function" == typeof n ? -n.apply(this, arguments) : -n, "function" == typeof e ? -e.apply(this, arguments) : -e), t, c)
                            })
                        }, M.prototype = {
                            start: function() {
                                return 1 == ++this.active && (this.index = h.push(this) - 1, this.emit("start")), this
                            },
                            zoom: function(t, n) {
                                return this.mouse && "mouse" !== t && (this.mouse[1] = n.invert(this.mouse[0])), this.touch0 && "touch" !== t && (this.touch0[1] = n.invert(this.touch0[0])), this.touch1 && "touch" !== t && (this.touch1[1] = n.invert(this.touch1[0])), this.that.__zoom = n, this.emit("zoom"), this
                            },
                            end: function() {
                                return 0 == --this.active && (h.splice(this.index, 1), this.index = -1, this.emit("end")), this
                            },
                            emit: function(t) {
                                tt(new Nc(g, t, this.that.__zoom), l.apply, l, [t, this.that, this.args])
                            }
                        }, g.wheelDelta = function(t) {
                            return arguments.length ? (a = "function" == typeof t ? t : Tc(+t), g) : a
                        }, g.filter = function(t) {
                            return arguments.length ? (e = "function" == typeof t ? t : Tc(!!t), g) : e
                        }, g.touchable = function(t) {
                            return arguments.length ? (f = "function" == typeof t ? t : Tc(!!t), g) : f
                        }, g.extent = function(t) {
                            return arguments.length ? (i = "function" == typeof t ? t : Tc([
                                [+t[0][0], +t[0][1]],
                                [+t[1][0], +t[1][1]]
                            ]), g) : i
                        }, g.scaleExtent = function(t) {
                            return arguments.length ? (o[0] = +t[0], o[1] = +t[1], g) : [o[0], o[1]]
                        }, g.translateExtent = function(t) {
                            return arguments.length ? (c[0][0] = +t[0][0], c[1][0] = +t[1][0], c[0][1] = +t[0][1], c[1][1] = +t[1][1], g) : [
                                [c[0][0], c[0][1]],
                                [c[1][0], c[1][1]]
                            ]
                        }, g.constrain = function(t) {
                            return arguments.length ? (r = t, g) : r
                        }, g.duration = function(t) {
                            return arguments.length ? (u = +t, g) : u
                        }, g.interpolate = function(t) {
                            return arguments.length ? (s = t, g) : s
                        }, g.on = function() {
                            var t = l.on.apply(l, arguments);
                            return t === l ? g : t
                        }, g.clickDistance = function(t) {
                            return arguments.length ? (p = (t = +t) * t, g) : Math.sqrt(p)
                        }, g
                    }().scaleExtent([.2, 20]).on("zoom", () => {
                        d.attr("transform", () => e ? "translate(" + (o + j.transform.x) + "," + (r + h / 2 + j.transform.y) + ")scale(" + j.transform.k + ")" : "translate(" + (o + s / 2 + j.transform.x) + "," + (r + j.transform.y) + ")scale(" + j.transform.k + ")")
                    }),
                    d = ft("#" + n).append("svg").attr("width", s + a + o).attr("height", h + r + f).call(i ? l : () => void 0).append("g").attr("transform", e ? "translate(" + o + "," + (r + h / 2) + ")" : "translate(" + (o + s / 2) + "," + r + ")");
                return d
            },
            Yc = (t, n, e) => t.enter().insert("path", "g").attr("class", "link").attr("d", t => {
                const r = void 0 !== t.ancestors()[1] && void 0 !== t.ancestors()[1].x0 ? {
                    x: t.ancestors()[1].x0,
                    y: t.ancestors()[1].y0
                } : {
                    x: n.x,
                    y: n.y
                };
                return i(r, r, e)
            }).attr("fill", "none").attr("stroke-width", ({
                data: t
            }) => e.linkWidth(t)).attr("stroke", ({
                data: t
            }) => e.linkColor(t)),
            Fc = (t, n) => t.enter().append("g").attr("class", "node").attr("transform", t => t.ancestors()[1] ? t.ancestors()[1].y0 ? Rc(t.ancestors()[1].x0, t.ancestors()[1].y0, n) : Rc(t.ancestors()[1].x, t.ancestors()[1].y, n) : Rc(t.x, t.y, n)),
            Rc = (t, n, e) => e.horizontalLayout ? "translate(" + n + "," + t + ")" : "translate(" + t + "," + n + ")",
            Hc = (t, n) => t.exit().transition().duration(n.duration).attr("transform", t => n.horizontalLayout ? "translate(-" + t.ancestors()[1].y0 + ",-" + t.ancestors()[1].x0 + ")" : "translate(-" + t.ancestors()[1].x0 + ",-" + t.ancestors()[1].y0 + ")").remove(),
            Oc = (t, n) => {
                const {
                    nodeField: e,
                    relationnalField: i,
                    flatData: r
                } = n;
                return r ? function() {
                    var t = Vr,
                        n = qr;

                    function e(e) {
                        var i, r, a, f, o, c, u, s = e.length,
                            h = new Array(s),
                            l = {};
                        for (r = 0; r < s; ++r) i = e[r], o = h[r] = new Fr(i), null != (c = t(i, r, e)) && (c += "") && (l[u = Or + (o.id = c)] = u in l ? Ir : o);
                        for (r = 0; r < s; ++r)
                            if (o = h[r], null != (c = n(e[r], r, e)) && (c += "")) {
                                if (!(f = l[Or + c])) throw new Error("missing: " + c);
                                if (f === Ir) throw new Error("ambiguous: " + c);
                                f.children ? f.children.push(o) : f.children = [o], o.parent = f
                            } else {
                                if (a) throw new Error("multiple roots");
                                a = o
                            }
                        if (!a) throw new Error("no root");
                        if (a.parent = Xr, a.eachBefore(function(t) {
                                t.depth = t.parent.depth + 1, --s
                            }).eachBefore(Yr), a.parent = null, s > 0) throw new Error("cycle");
                        return a
                    }
                    return e.id = function(n) {
                        return arguments.length ? (t = Rr(n), e) : t
                    }, e.parentId = function(t) {
                        return arguments.length ? (n = Rr(t), e) : n
                    }, e
                }().id(t => t[e]).parentId(t => t[i])(t) : Pr(t, t => t[i])
            },
            Xc = t => Gr().nodeSize([1.25 * t.nodeHeight, 1.5 * t.nodeWidth]);

        function Ic(t) {
            const n = {
                    htmlID: "",
                    nodeField: "",
                    relationnalField: "",
                    flatData: !0,
                    nodeWidth: 120,
                    nodeHeight: 80,
                    nodeDepthDistance: 300,
                    nodeColor: () => "#2196f3",
                    nodeTemplate: () => "Node",
                    linkColor: () => "#ffcc80",
                    linkWidth: () => 10,
                    linkShape: "quadraticBeziers",
                    horizontalLayout: !0,
                    zoomBehavior: !1,
                    duration: 400,
                    onNodeClick: () => void 0,
                    onNodeMouseEnter: () => void 0,
                    onNodeMouseLeave: () => void 0
                },
                e = Object.assign({}, n, t),
                r = [];
            const a = {
                    refresh: function(t) {
                        const n = Oc(t, e),
                            a = Xc(e)(n);
							console.log(a);
                        ! function(t, n) {
                            const a = n.descendants(),
                                f = n.descendants().slice(1);
                            a.forEach(t => {
                                t.y = -(t.depth * e.nodeDepthDistance)
                            }), a.forEach(t => {
                                t.x0 = Object.assign({}, t, {
                                    x0: void 0,
                                    y0: void 0
                                }, r.filter(n => n.id === t.id)[0]).x0, t.y0 = Object.assign({}, t, {
                                    x0: void 0,
                                    y0: void 0
                                }, r.filter(n => n.id === t.id)[0]).y0
                            });
                            const o = t.selectAll("g.node").data(a, t => t[e.nodeField]),
                                c = Fc(o, e);
                            c.append("rect").attr("class", "node").attr("rx", 5).attr("ry", 5).attr("width", e.nodeWidth).attr("height", e.nodeHeight).style("fill", ({
                                data: t
                            }) => e.nodeColor(t)).style("cursor", "pointer").on("click", e.onNodeClick).on("mouseenter", e.onNodeMouseEnter).on("mouseleave", e.onNodeMouseLeave), c.append("foreignObject").attr("width", e.nodeWidth).attr("height", e.nodeHeight).style("pointer-events", "none").html(({
                                data: t
                            }) => e.nodeTemplate(t)), c.merge(o).transition().duration(600).attr("transform", t => e.horizontalLayout ? "translate(" + t.y + "," + t.x + ")" : "translate(" + t.x + "," + t.y + ")");
                            const u = Hc(o, e);
                            u.select("rect").style("fill-opacity", 1e-6), u.select("circle").attr("r", 1e-6), u.select("text").style("fill-opacity", 1e-6);
                            const s = t.selectAll("path.link").data(f, t => t.id);
                            Yc(s, n, e).merge(s).transition().duration(600).attr("d", t => i(t, t.parent, e)), s.exit().transition().duration(600).attr("d", t => {
                                const n = {
                                    x: t.ancestors()[1].x0,
                                    y: t.ancestors()[1].y0
                                };
                                return i(n, n, e)
                            }).remove().select(".link").attr("stroke-opacity", 1e-6), a.forEach((t, n) => {
                                r[n] = {
                                    x0: t.x,
                                    y0: t.y,
                                    id: t.id
                                }
                            })
                        }(f, a)
                    }
                },
                f = $c(e);
            return a
        }
        e.d(n, "create", function() {
            return Ic
        })
    }])
});