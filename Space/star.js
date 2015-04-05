function animate() {
	requestAnimFrame(function() {
		animate()
	})
}
function MultipleUnderline(a, b, c) {
}

window.requestAnimFrame = function() {
	return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
	function(a) {
		window.setTimeout(a, 1e3 / 60)
	}
} ();

animate();


MultipleUnderline.prototype.draw = function() {
},
function(a, b) {
	
	function c(a) {
		var b = a.length,
		c = hb.type(a);
		return hb.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || "function" !== c && (0 === b || "number" == typeof b && b > 0 && b - 1 in a)
	}
	function d(a) {
		var b = vb[a] = {};
		return hb.each(a.match(jb) || [],
		function(a, c) {
			b[c] = !0
		}),
		b
	}
	function e(a, c, d, e) {
		if (hb.acceptData(a)) {
			var f, g, h = hb.expando,
			i = "string" == typeof c,
			j = a.nodeType,
			k = j ? hb.cache: a,
			l = j ? a[h] : a[h] && h;
			if (l && k[l] && (e || k[l].data) || !i || d !== b) return l || (j ? a[h] = l = $.pop() || hb.guid++:l = h),
			k[l] || (k[l] = {},
			j || (k[l].toJSON = hb.noop)),
			("object" == typeof c || "function" == typeof c) && (e ? k[l] = hb.extend(k[l], c) : k[l].data = hb.extend(k[l].data, c)),
			f = k[l],
			e || (f.data || (f.data = {}), f = f.data),
			d !== b && (f[hb.camelCase(c)] = d),
			i ? (g = f[c], null == g && (g = f[hb.camelCase(c)])) : g = f,
			g
		}
	}
	function f(a, b, c) {
		if (hb.acceptData(a)) {
			var d, e, f, g = a.nodeType,
			i = g ? hb.cache: a,
			j = g ? a[hb.expando] : hb.expando;
			if (i[j]) {
				if (b && (d = c ? i[j] : i[j].data)) {
					hb.isArray(b) ? b = b.concat(hb.map(b, hb.camelCase)) : b in d ? b = [b] : (b = hb.camelCase(b), b = b in d ? [b] : b.split(" "));
					for (e = 0, f = b.length; f > e; e++) delete d[b[e]];
					if (! (c ? h: hb.isEmptyObject)(d)) return
				} (c || (delete i[j].data, h(i[j]))) && (g ? hb.cleanData([a], !0) : hb.support.deleteExpando || i != i.window ? delete i[j] : i[j] = null)
			}
		}
	}
	function g(a, c, d) {
		if (d === b && 1 === a.nodeType) {
			var e = "data-" + c.replace(xb, "-$1").toLowerCase();
			if (d = a.getAttribute(e), "string" == typeof d) {
				try {
					d = "true" === d ? !0 : "false" === d ? !1 : "null" === d ? null: +d + "" === d ? +d: wb.test(d) ? hb.parseJSON(d) : d
				} catch(f) {}
				hb.data(a, c, d)
			} else d = b
		}
		return d
	}
	function h(a) {
		var b;
		for (b in a) if (("data" !== b || !hb.isEmptyObject(a[b])) && "toJSON" !== b) return ! 1;
		return ! 0
	}
	function i() {
		return ! 0
	}
	function j() {
		return ! 1
	}
	function k(a, b) {
		do a = a[b];
		while (a && 1 !== a.nodeType);
		return a
	}
	function l(a, b, c) {
		if (b = b || 0, hb.isFunction(b)) return hb.grep(a,
		function(a, d) {
			var e = !!b.call(a, d, a);
			return e === c
		});
		if (b.nodeType) return hb.grep(a,
		function(a) {
			return a === b === c
		});
		if ("string" == typeof b) {
			var d = hb.grep(a,
			function(a) {
				return 1 === a.nodeType
			});
			if (Pb.test(b)) return hb.filter(b, d, !c);
			b = hb.filter(b, d)
		}
		return hb.grep(a,
		function(a) {
			return hb.inArray(a, b) >= 0 === c
		})
	}
	function m(a) {
		var b = Sb.split("|"),
		c = a.createDocumentFragment();
		if (c.createElement) for (; b.length;) c.createElement(b.pop());
		return c
	}
	function n(a, b) {
		return a.getElementsByTagName(b)[0] || a.appendChild(a.ownerDocument.createElement(b))
	}
	function o(a) {
		var b = a.getAttributeNode("type");
		return a.type = (b && b.specified) + "/" + a.type,
		a
	}
	function p(a) {
		var b = cc.exec(a.type);
		return b ? a.type = b[1] : a.removeAttribute("type"),
		a
	}
	function q(a, b) {
		for (var c, d = 0; null != (c = a[d]); d++) hb._data(c, "globalEval", !b || hb._data(b[d], "globalEval"))
	}
	function r(a, b) {
		if (1 === b.nodeType && hb.hasData(a)) {
			var c, d, e, f = hb._data(a),
			g = hb._data(b, f),
			h = f.events;
			if (h) {
				delete g.handle,
				g.events = {};
				for (c in h) for (d = 0, e = h[c].length; e > d; d++) hb.event.add(b, c, h[c][d])
			}
			g.data && (g.data = hb.extend({},
			g.data))
		}
	}
	function s(a, b) {
		var c, d, e;
		if (1 === b.nodeType) {
			if (c = b.nodeName.toLowerCase(), !hb.support.noCloneEvent && b[hb.expando]) {
				d = hb._data(b);
				for (e in d.events) hb.removeEvent(b, e, d.handle);
				b.removeAttribute(hb.expando)
			}
			"script" === c && b.text !== a.text ? (o(b).text = a.text, p(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), hb.support.html5Clone && a.innerHTML && !hb.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && _b.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected: ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
		}
	}
	function t(a, c) {
		var d, e, f = 0,
		g = a.getElementsByTagName !== b ? a.getElementsByTagName(c || "*") : a.querySelectorAll !== b ? a.querySelectorAll(c || "*") : b;
		if (!g) for (g = [], d = a.childNodes || a; null != (e = d[f]); f++) ! c || hb.nodeName(e, c) ? g.push(e) : hb.merge(g, t(e, c));
		return c === b || c && hb.nodeName(a, c) ? hb.merge([a], g) : g
	}
	function u(a) {
		_b.test(a.type) && (a.defaultChecked = a.checked)
	}
	function v(a, b) {
		if (b in a) return b;
		for (var c = b.charAt(0).toUpperCase() + b.slice(1), d = b, e = wc.length; e--;) if (b = wc[e] + c, b in a) return b;
		return d
	}
	function w(a, b) {
		return a = b || a,
		"none" === hb.css(a, "display") || !hb.contains(a.ownerDocument, a)
	}
	function x(a, b) {
		for (var c, d = [], e = 0, f = a.length; f > e; e++) c = a[e],
		c.style && (d[e] = hb._data(c, "olddisplay"), b ? (d[e] || "none" !== c.style.display || (c.style.display = ""), "" === c.style.display && w(c) && (d[e] = hb._data(c, "olddisplay", B(c.nodeName)))) : d[e] || w(c) || hb._data(c, "olddisplay", hb.css(c, "display")));
		for (e = 0; f > e; e++) c = a[e],
		c.style && (b && "none" !== c.style.display && "" !== c.style.display || (c.style.display = b ? d[e] || "": "none"));
		return a
	}
	function y(a, b, c) {
		var d = pc.exec(b);
		return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
	}
	function z(a, b, c, d, e) {
		for (var f = c === (d ? "border": "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2)"margin" === c && (g += hb.css(a, c + vc[f], !0, e)),
		d ? ("content" === c && (g -= hb.css(a, "padding" + vc[f], !0, e)), "margin" !== c && (g -= hb.css(a, "border" + vc[f] + "Width", !0, e))) : (g += hb.css(a, "padding" + vc[f], !0, e), "padding" !== c && (g += hb.css(a, "border" + vc[f] + "Width", !0, e)));
		return g
	}
	function A(a, b, c) {
		var d = !0,
		e = "width" === b ? a.offsetWidth: a.offsetHeight,
		f = ic(a),
		g = hb.support.boxSizing && "border-box" === hb.css(a, "boxSizing", !1, f);
		if (0 >= e || null == e) {
			if (e = hc(a, b, f), (0 > e || null == e) && (e = a.style[b]), qc.test(e)) return e;
			d = g && (hb.support.boxSizingReliable || e === a.style[b]),
			e = parseFloat(e) || 0
		}
		return e + z(a, b, c || (g ? "border": "content"), d, f) + "px"
	}
	function B(a) {
		var b = V,
		c = sc[a];
		return c || (c = C(a, b), "none" !== c && c || (jc = (jc || hb("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(b.documentElement), b = (jc[0].contentWindow || jc[0].contentDocument).document, b.write("<!doctype html><html><body>"), b.close(), c = C(a, b), jc.detach()), sc[a] = c),
		c
	}
	function C(a, b) {
		var c = hb(b.createElement(a)).appendTo(b.body),
		d = hb.css(c[0], "display");
		return c.remove(),
		d
	}
	function D(a, b, c, d) {
		var e;
		if (hb.isArray(b)) hb.each(b,
		function(b, e) {
			c || yc.test(a) ? d(a, e) : D(a + "[" + ("object" == typeof e ? b: "") + "]", e, c, d)
		});
		else if (c || "object" !== hb.type(b)) d(a, b);
		else for (e in b) D(a + "[" + e + "]", b[e], c, d)
	}
	function E(a) {
		return function(b, c) {
			"string" != typeof b && (c = b, b = "*");
			var d, e = 0,
			f = b.toLowerCase().match(jb) || [];
			if (hb.isFunction(c)) for (; d = f[e++];)"+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
		}
	}
	function F(a, c, d, e) {
		function f(i) {
			var j;
			return g[i] = !0,
			hb.each(a[i] || [],
			function(a, i) {
				var k = i(c, d, e);
				return "string" != typeof k || h || g[k] ? h ? !(j = k) : b: (c.dataTypes.unshift(k), f(k), !1)
			}),
			j
		}
		var g = {},
		h = a === Pc;
		return f(c.dataTypes[0]) || !g["*"] && f("*")
	}
	function G(a, c) {
		var d, e, f = hb.ajaxSettings.flatOptions || {};
		for (d in c) c[d] !== b && ((f[d] ? a: e || (e = {}))[d] = c[d]);
		return e && hb.extend(!0, a, e),
		a
	}
	function H(a, c, d) {
		var e, f, g, h, i = a.contents,
		j = a.dataTypes,
		k = a.responseFields;
		for (f in k) f in d && (c[k[f]] = d[f]);
		for (;
		"*" === j[0];) j.shift(),
		e === b && (e = a.mimeType || c.getResponseHeader("Content-Type"));
		if (e) for (f in i) if (i[f] && i[f].test(e)) {
			j.unshift(f);
			break
		}
		if (j[0] in d) g = j[0];
		else {
			for (f in d) {
				if (!j[0] || a.converters[f + " " + j[0]]) {
					g = f;
					break
				}
				h || (h = f)
			}
			g = g || h
		}
		return g ? (g !== j[0] && j.unshift(g), d[g]) : b
	}
	function I(a, b) {
		var c, d, e, f, g = {},
		h = 0,
		i = a.dataTypes.slice(),
		j = i[0];
		if (a.dataFilter && (b = a.dataFilter(b, a.dataType)), i[1]) for (c in a.converters) g[c.toLowerCase()] = a.converters[c];
		for (; e = i[++h];) if ("*" !== e) {
			if ("*" !== j && j !== e) {
				if (c = g[j + " " + e] || g["* " + e], !c) for (d in g) if (f = d.split(" "), f[1] === e && (c = g[j + " " + f[0]] || g["* " + f[0]])) {
					c === !0 ? c = g[d] : g[d] !== !0 && (e = f[0], i.splice(h--, 0, e));
					break
				}
				if (c !== !0) if (c && a["throws"]) b = c(b);
				else try {
					b = c(b)
				} catch(k) {
					return {
						state: "parsererror",
						error: c ? k: "No conversion from " + j + " to " + e
					}
				}
			}
			j = e
		}
		return {
			state: "success",
			data: b
		}
	}
	function J() {
		try {
			return new a.XMLHttpRequest
		} catch(b) {}
	}
	function K() {
		try {
			return new a.ActiveXObject("Microsoft.XMLHTTP")
		} catch(b) {}
	}
	function L() {
		return setTimeout(function() {
			Yc = b
		}),
		Yc = hb.now()
	}
	function M(a, b) {
		hb.each(b,
		function(b, c) {
			for (var d = (cd[b] || []).concat(cd["*"]), e = 0, f = d.length; f > e; e++) if (d[e].call(a, b, c)) return
		})
	}
	function N(a, b, c) {
		var d, e, f = 0,
		g = bd.length,
		h = hb.Deferred().always(function() {
			delete i.elem
		}),
		i = function() {
			if (e) return ! 1;
			for (var b = Yc || L(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
			return h.notifyWith(a, [j, f, c]),
			1 > f && i ? c: (h.resolveWith(a, [j]), !1)
		},
		j = h.promise({
			elem: a,
			props: hb.extend({},
			b),
			opts: hb.extend(!0, {
				specialEasing: {}
			},
			c),
			originalProperties: b,
			originalOptions: c,
			startTime: Yc || L(),
			duration: c.duration,
			tweens: [],
			createTween: function(b, c) {
				var d = hb.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
				return j.tweens.push(d),
				d
			},
			stop: function(b) {
				var c = 0,
				d = b ? j.tweens.length: 0;
				if (e) return this;
				for (e = !0; d > c; c++) j.tweens[c].run(1);
				return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]),
				this
			}
		}),
		k = j.props;
		for (O(k, j.opts.specialEasing); g > f; f++) if (d = bd[f].call(j, a, k, j.opts)) return d;
		return M(j, k),
		hb.isFunction(j.opts.start) && j.opts.start.call(a, j),
		hb.fx.timer(hb.extend(i, {
			elem: a,
			anim: j,
			queue: j.opts.queue
		})),
		j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
	}
	function O(a, b) {
		var c, d, e, f, g;
		for (c in a) if (d = hb.camelCase(c), e = b[d], f = a[c], hb.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = hb.cssHooks[d], g && "expand" in g) {
			f = g.expand(f),
			delete a[d];
			for (c in f) c in a || (a[c] = f[c], b[c] = e)
		} else b[d] = e
	}
	function P(a, b, c) {
		var d, e, f, g, h, i, j, k, l, m = this,
		n = a.style,
		o = {},
		p = [],
		q = a.nodeType && w(a);
		c.queue || (k = hb._queueHooks(a, "fx"), null == k.unqueued && (k.unqueued = 0, l = k.empty.fire, k.empty.fire = function() {
			k.unqueued || l()
		}), k.unqueued++, m.always(function() {
			m.always(function() {
				k.unqueued--,
				hb.queue(a, "fx").length || k.empty.fire()
			})
		})),
		1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [n.overflow, n.overflowX, n.overflowY], "inline" === hb.css(a, "display") && "none" === hb.css(a, "float") && (hb.support.inlineBlockNeedsLayout && "inline" !== B(a.nodeName) ? n.zoom = 1 : n.display = "inline-block")),
		c.overflow && (n.overflow = "hidden", hb.support.shrinkWrapBlocks || m.done(function() {
			n.overflow = c.overflow[0],
			n.overflowX = c.overflow[1],
			n.overflowY = c.overflow[2]
		}));
		for (d in b) if (f = b[d], $c.exec(f)) {
			if (delete b[d], i = i || "toggle" === f, f === (q ? "hide": "show")) continue;
			p.push(d)
		}
		if (g = p.length) {
			h = hb._data(a, "fxshow") || hb._data(a, "fxshow", {}),
			"hidden" in h && (q = h.hidden),
			i && (h.hidden = !q),
			q ? hb(a).show() : m.done(function() {
				hb(a).hide()
			}),
			m.done(function() {
				var b;
				hb._removeData(a, "fxshow");
				for (b in o) hb.style(a, b, o[b])
			});
			for (d = 0; g > d; d++) e = p[d],
			j = m.createTween(e, q ? h[e] : 0),
			o[e] = h[e] || hb.style(a, e),
			e in h || (h[e] = j.start, q && (j.end = j.start, j.start = "width" === e || "height" === e ? 1 : 0))
		}
	}
	function Q(a, b, c, d, e) {
		return new Q.prototype.init(a, b, c, d, e)
	}
	function R(a, b) {
		var c, d = {
			height: a
		},
		e = 0;
		for (b = b ? 1 : 0; 4 > e; e += 2 - b) c = vc[e],
		d["margin" + c] = d["padding" + c] = a;
		return b && (d.opacity = d.width = a),
		d
	}
	function S(a) {
		return hb.isWindow(a) ? a: 9 === a.nodeType ? a.defaultView || a.parentWindow: !1
	}
	var T, U, V = a.document,
	W = a.location,
	X = a.jQuery,
	Y = a.$,
	Z = {},
	$ = [],
	_ = "1.9.0",
	ab = $.concat,
	bb = $.push,
	cb = $.slice,
	db = $.indexOf,
	eb = Z.toString,
	fb = Z.hasOwnProperty,
	gb = _.trim,
	hb = function(a, b) {
		return new hb.fn.init(a, b, T)
	},
	ib = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
	jb = /\S+/g,
	kb = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
	lb = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,
	mb = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
	nb = /^[\],:{}\s]*$/,
	ob = /(?:^|:|,)(?:\s*\[)+/g,
	pb = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
	qb = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
	rb = /^-ms-/,
	sb = /-([\da-z])/gi,
	tb = function(a, b) {
		return b.toUpperCase()
	},
	ub = function() {
		V.addEventListener ? (V.removeEventListener("DOMContentLoaded", ub, !1), hb.ready()) : "complete" === V.readyState && (V.detachEvent("onreadystatechange", ub), hb.ready())
	};
	hb.fn = hb.prototype = {
		jquery: _,
		constructor: hb,
		init: function(a, c, d) {
			var e, f;
			if (!a) return this;
			if ("string" == typeof a) {
				if (e = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : lb.exec(a), !e || !e[1] && c) return ! c || c.jquery ? (c || d).find(a) : this.constructor(c).find(a);
				if (e[1]) {
					if (c = c instanceof hb ? c[0] : c, hb.merge(this, hb.parseHTML(e[1], c && c.nodeType ? c.ownerDocument || c: V, !0)), mb.test(e[1]) && hb.isPlainObject(c)) for (e in c) hb.isFunction(this[e]) ? this[e](c[e]) : this.attr(e, c[e]);
					return this
				}
				if (f = V.getElementById(e[2]), f && f.parentNode) {
					if (f.id !== e[2]) return d.find(a);
					this.length = 1,
					this[0] = f
				}
				return this.context = V,
				this.selector = a,
				this
			}
			return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : hb.isFunction(a) ? d.ready(a) : (a.selector !== b && (this.selector = a.selector, this.context = a.context), hb.makeArray(a, this))
		},
		selector: "",
		length: 0,
		size: function() {
			return this.length
		},
		toArray: function() {
			return cb.call(this)
		},
		get: function(a) {
			return null == a ? this.toArray() : 0 > a ? this[this.length + a] : this[a]
		},
		pushStack: function(a) {
			var b = hb.merge(this.constructor(), a);
			return b.prevObject = this,
			b.context = this.context,
			b
		},
		each: function(a, b) {
			return hb.each(this, a, b)
		},
		ready: function(a) {
			return hb.ready.promise().done(a),
			this
		},
		slice: function() {
			return this.pushStack(cb.apply(this, arguments))
		},
		first: function() {
			return this.eq(0)
		},
		last: function() {
			return this.eq( - 1)
		},
		eq: function(a) {
			var b = this.length,
			c = +a + (0 > a ? b: 0);
			return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
		},
		map: function(a) {
			return this.pushStack(hb.map(this,
			function(b, c) {
				return a.call(b, c, b)
			}))
		},
		end: function() {
			return this.prevObject || this.constructor(null)
		},
		push: bb,
		sort: [].sort,
		splice: [].splice
	},
	hb.fn.init.prototype = hb.fn,
	hb.extend = hb.fn.extend = function() {
		var a, c, d, e, f, g, h = arguments[0] || {},
		i = 1,
		j = arguments.length,
		k = !1;
		for ("boolean" == typeof h && (k = h, h = arguments[1] || {},
		i = 2), "object" == typeof h || hb.isFunction(h) || (h = {}), j === i && (h = this, --i); j > i; i++) if (null != (a = arguments[i])) for (c in a) d = h[c],
		e = a[c],
		h !== e && (k && e && (hb.isPlainObject(e) || (f = hb.isArray(e))) ? (f ? (f = !1, g = d && hb.isArray(d) ? d: []) : g = d && hb.isPlainObject(d) ? d: {},
		h[c] = hb.extend(k, g, e)) : e !== b && (h[c] = e));
		return h
	},
	hb.extend({
		noConflict: function(b) {
			return a.$ === hb && (a.$ = Y),
			b && a.jQuery === hb && (a.jQuery = X),
			hb
		},
		isReady: !1,
		readyWait: 1,
		holdReady: function(a) {
			a ? hb.readyWait++:hb.ready(!0)
		},
		ready: function(a) {
			if (a === !0 ? !--hb.readyWait: !hb.isReady) {
				if (!V.body) return setTimeout(hb.ready);
				hb.isReady = !0,
				a !== !0 && --hb.readyWait > 0 || (U.resolveWith(V, [hb]), hb.fn.trigger && hb(V).trigger("ready").off("ready"))
			}
		},
		isFunction: function(a) {
			return "function" === hb.type(a)
		},
		isArray: Array.isArray ||
		function(a) {
			return "array" === hb.type(a)
		},
		isWindow: function(a) {
			return null != a && a == a.window
		},
		isNumeric: function(a) {
			return ! isNaN(parseFloat(a)) && isFinite(a)
		},
		type: function(a) {
			return null == a ? a + "": "object" == typeof a || "function" == typeof a ? Z[eb.call(a)] || "object": typeof a
		},
		isPlainObject: function(a) {
			if (!a || "object" !== hb.type(a) || a.nodeType || hb.isWindow(a)) return ! 1;
			try {
				if (a.constructor && !fb.call(a, "constructor") && !fb.call(a.constructor.prototype, "isPrototypeOf")) return ! 1
			} catch(c) {
				return ! 1
			}
			var d;
			for (d in a);
			return d === b || fb.call(a, d)
		},
		isEmptyObject: function(a) {
			var b;
			for (b in a) return ! 1;
			return ! 0
		},
		error: function(a) {
			throw Error(a)
		},
		parseHTML: function(a, b, c) {
			if (!a || "string" != typeof a) return null;
			"boolean" == typeof b && (c = b, b = !1),
			b = b || V;
			var d = mb.exec(a),
			e = !c && [];
			return d ? [b.createElement(d[1])] : (d = hb.buildFragment([a], b, e), e && hb(e).remove(), hb.merge([], d.childNodes))
		},
		parseJSON: function(c) {
			return a.JSON && a.JSON.parse ? a.JSON.parse(c) : null === c ? c: "string" == typeof c && (c = hb.trim(c), c && nb.test(c.replace(pb, "@").replace(qb, "]").replace(ob, ""))) ? Function("return " + c)() : (hb.error("Invalid JSON: " + c), b)
		},
		parseXML: function(c) {
			var d, e;
			if (!c || "string" != typeof c) return null;
			try {
				a.DOMParser ? (e = new DOMParser, d = e.parseFromString(c, "text/xml")) : (d = new ActiveXObject("Microsoft.XMLDOM"), d.async = "false", d.loadXML(c))
			} catch(f) {
				d = b
			}
			return d && d.documentElement && !d.getElementsByTagName("parsererror").length || hb.error("Invalid XML: " + c),
			d
		},
		noop: function() {},
		globalEval: function(b) {
			b && hb.trim(b) && (a.execScript ||
			function(b) {
				a.eval.call(a, b)
			})(b)
		},
		camelCase: function(a) {
			return a.replace(rb, "ms-").replace(sb, tb)
		},
		nodeName: function(a, b) {
			return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
		},
		each: function(a, b, d) {
			var e, f = 0,
			g = a.length,
			h = c(a);
			if (d) {
				if (h) for (; g > f && (e = b.apply(a[f], d), e !== !1); f++);
				else for (f in a) if (e = b.apply(a[f], d), e === !1) break
			} else if (h) for (; g > f && (e = b.call(a[f], f, a[f]), e !== !1); f++);
			else for (f in a) if (e = b.call(a[f], f, a[f]), e === !1) break;
			return a
		},
		trim: gb && !gb.call("﻿ ") ?
		function(a) {
			return null == a ? "": gb.call(a)
		}: function(a) {
			return null == a ? "": (a + "").replace(kb, "")
		},
		makeArray: function(a, b) {
			var d = b || [];
			return null != a && (c(Object(a)) ? hb.merge(d, "string" == typeof a ? [a] : a) : bb.call(d, a)),
			d
		},
		inArray: function(a, b, c) {
			var d;
			if (b) {
				if (db) return db.call(b, a, c);
				for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c: 0; d > c; c++) if (c in b && b[c] === a) return c
			}
			return - 1
		},
		merge: function(a, c) {
			var d = c.length,
			e = a.length,
			f = 0;
			if ("number" == typeof d) for (; d > f; f++) a[e++] = c[f];
			else for (; c[f] !== b;) a[e++] = c[f++];
			return a.length = e,
			a
		},
		grep: function(a, b, c) {
			var d, e = [],
			f = 0,
			g = a.length;
			for (c = !!c; g > f; f++) d = !!b(a[f], f),
			c !== d && e.push(a[f]);
			return e
		},
		map: function(a, b, d) {
			var e, f = 0,
			g = a.length,
			h = c(a),
			i = [];
			if (h) for (; g > f; f++) e = b(a[f], f, d),
			null != e && (i[i.length] = e);
			else for (f in a) e = b(a[f], f, d),
			null != e && (i[i.length] = e);
			return ab.apply([], i)
		},
		guid: 1,
		proxy: function(a, c) {
			var d, e, f;
			return "string" == typeof c && (d = a[c], c = a, a = d),
			hb.isFunction(a) ? (e = cb.call(arguments, 2), f = function() {
				return a.apply(c || this, e.concat(cb.call(arguments)))
			},
			f.guid = a.guid = a.guid || hb.guid++, f) : b
		},
		access: function(a, c, d, e, f, g, h) {
			var i = 0,
			j = a.length,
			k = null == d;
			if ("object" === hb.type(d)) {
				f = !0;
				for (i in d) hb.access(a, c, i, d[i], !0, g, h)
			} else if (e !== b && (f = !0, hb.isFunction(e) || (h = !0), k && (h ? (c.call(a, e), c = null) : (k = c, c = function(a, b, c) {
				return k.call(hb(a), c)
			})), c)) for (; j > i; i++) c(a[i], d, h ? e: e.call(a[i], i, c(a[i], d)));
			return f ? a: k ? c.call(a) : j ? c(a[0], d) : g
		},
		now: function() {
			return (new Date).getTime()
		}
	}),
	hb.ready.promise = function(b) {
		if (!U) if (U = hb.Deferred(), "complete" === V.readyState) setTimeout(hb.ready);
		else if (V.addEventListener) V.addEventListener("DOMContentLoaded", ub, !1),
		a.addEventListener("load", hb.ready, !1);
		else {
			V.attachEvent("onreadystatechange", ub),
			a.attachEvent("onload", hb.ready);
			var c = !1;
			try {
				c = null == a.frameElement && V.documentElement
			} catch(d) {}
			c && c.doScroll &&
			function e() {
				if (!hb.isReady) {
					try {
						c.doScroll("left")
					} catch(a) {
						return setTimeout(e, 50)
					}
					hb.ready()
				}
			} ()
		}
		return U.promise(b)
	},
	hb.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),
	function(a, b) {
		Z["[object " + b + "]"] = b.toLowerCase()
	}),
	T = hb(V);
	var vb = {};
	hb.Callbacks = function(a) {
		a = "string" == typeof a ? vb[a] || d(a) : hb.extend({},
		a);
		var c, e, f, g, h, i, j = [],
		k = !a.once && [],
		l = function(b) {
			for (c = a.memory && b, e = !0, i = g || 0, g = 0, h = j.length, f = !0; j && h > i; i++) if (j[i].apply(b[0], b[1]) === !1 && a.stopOnFalse) {
				c = !1;
				break
			}
			f = !1,
			j && (k ? k.length && l(k.shift()) : c ? j = [] : m.disable())
		},
		m = {
			add: function() {
				if (j) {
					var b = j.length; !
					function d(b) {
						hb.each(b,
						function(b, c) {
							var e = hb.type(c);
							"function" === e ? a.unique && m.has(c) || j.push(c) : c && c.length && "string" !== e && d(c)
						})
					} (arguments),
					f ? h = j.length: c && (g = b, l(c))
				}
				return this
			},
			remove: function() {
				return j && hb.each(arguments,
				function(a, b) {
					for (var c; (c = hb.inArray(b, j, c)) > -1;) j.splice(c, 1),
					f && (h >= c && h--, i >= c && i--)
				}),
				this
			},
			has: function(a) {
				return hb.inArray(a, j) > -1
			},
			empty: function() {
				return j = [],
				this
			},
			disable: function() {
				return j = k = c = b,
				this
			},
			disabled: function() {
				return ! j
			},
			lock: function() {
				return k = b,
				c || m.disable(),
				this
			},
			locked: function() {
				return ! k
			},
			fireWith: function(a, b) {
				return b = b || [],
				b = [a, b.slice ? b.slice() : b],
				!j || e && !k || (f ? k.push(b) : l(b)),
				this
			},
			fire: function() {
				return m.fireWith(this, arguments),
				this
			},
			fired: function() {
				return !! e
			}
		};
		return m
	},
	hb.extend({
		Deferred: function(a) {
			var b = [["resolve", "done", hb.Callbacks("once memory"), "resolved"], ["reject", "fail", hb.Callbacks("once memory"), "rejected"], ["notify", "progress", hb.Callbacks("memory")]],
			c = "pending",
			d = {
				state: function() {
					return c
				},
				always: function() {
					return e.done(arguments).fail(arguments),
					this
				},
				then: function() {
					var a = arguments;
					return hb.Deferred(function(c) {
						hb.each(b,
						function(b, f) {
							var g = f[0],
							h = hb.isFunction(a[b]) && a[b];
							e[f[1]](function() {
								var a = h && h.apply(this, arguments);
								a && hb.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[g + "With"](this === d ? c.promise() : this, h ? [a] : arguments)
							})
						}),
						a = null
					}).promise()
				},
				promise: function(a) {
					return null != a ? hb.extend(a, d) : d
				}
			},
			e = {};
			return d.pipe = d.then,
			hb.each(b,
			function(a, f) {
				var g = f[2],
				h = f[3];
				d[f[1]] = g.add,
				h && g.add(function() {
					c = h
				},
				b[1 ^ a][2].disable, b[2][2].lock),
				e[f[0]] = function() {
					return e[f[0] + "With"](this === e ? d: this, arguments),
					this
				},
				e[f[0] + "With"] = g.fireWith
			}),
			d.promise(e),
			a && a.call(e, e),
			e
		},
		when: function(a) {
			var b, c, d, e = 0,
			f = cb.call(arguments),
			g = f.length,
			h = 1 !== g || a && hb.isFunction(a.promise) ? g: 0,
			i = 1 === h ? a: hb.Deferred(),
			j = function(a, c, d) {
				return function(e) {
					c[a] = this,
					d[a] = arguments.length > 1 ? cb.call(arguments) : e,
					d === b ? i.notifyWith(c, d) : --h || i.resolveWith(c, d)
				}
			};
			if (g > 1) for (b = Array(g), c = Array(g), d = Array(g); g > e; e++) f[e] && hb.isFunction(f[e].promise) ? f[e].promise().done(j(e, d, f)).fail(i.reject).progress(j(e, c, b)) : --h;
			return h || i.resolveWith(d, f),
			i.promise()
		}
	}),
	hb.support = function() {
		var c, d, e, f, g, h, i, j, k, l, m = V.createElement("div");
		if (m.setAttribute("className", "t"), m.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", d = m.getElementsByTagName("*"), e = m.getElementsByTagName("a")[0], !d || !e || !d.length) return {};
		f = V.createElement("select"),
		g = f.appendChild(V.createElement("option")),
		h = m.getElementsByTagName("input")[0],
		e.style.cssText = "top:1px;float:left;opacity:.5",
		c = {
			getSetAttribute: "t" !== m.className,
			leadingWhitespace: 3 === m.firstChild.nodeType,
			tbody: !m.getElementsByTagName("tbody").length,
			htmlSerialize: !!m.getElementsByTagName("link").length,
			style: /top/.test(e.getAttribute("style")),
			hrefNormalized: "/a" === e.getAttribute("href"),
			opacity: /^0.5/.test(e.style.opacity),
			cssFloat: !!e.style.cssFloat,
			checkOn: !!h.value,
			optSelected: g.selected,
			enctype: !!V.createElement("form").enctype,
			html5Clone: "<:nav></:nav>" !== V.createElement("nav").cloneNode(!0).outerHTML,
			boxModel: "CSS1Compat" === V.compatMode,
			deleteExpando: !0,
			noCloneEvent: !0,
			inlineBlockNeedsLayout: !1,
			shrinkWrapBlocks: !1,
			reliableMarginRight: !0,
			boxSizingReliable: !0,
			pixelPosition: !1
		},
		h.checked = !0,
		c.noCloneChecked = h.cloneNode(!0).checked,
		f.disabled = !0,
		c.optDisabled = !g.disabled;
		try {
			delete m.test
		} catch(n) {
			c.deleteExpando = !1
		}
		h = V.createElement("input"),
		h.setAttribute("value", ""),
		c.input = "" === h.getAttribute("value"),
		h.value = "t",
		h.setAttribute("type", "radio"),
		c.radioValue = "t" === h.value,
		h.setAttribute("checked", "t"),
		h.setAttribute("name", "t"),
		i = V.createDocumentFragment(),
		i.appendChild(h),
		c.appendChecked = h.checked,
		c.checkClone = i.cloneNode(!0).cloneNode(!0).lastChild.checked,
		m.attachEvent && (m.attachEvent("onclick",
		function() {
			c.noCloneEvent = !1
		}), m.cloneNode(!0).click());
		for (l in {
			submit: !0,
			change: !0,
			focusin: !0
		}) m.setAttribute(j = "on" + l, "t"),
		c[l + "Bubbles"] = j in a || m.attributes[j].expando === !1;
		return m.style.backgroundClip = "content-box",
		m.cloneNode(!0).style.backgroundClip = "",
		c.clearCloneStyle = "content-box" === m.style.backgroundClip,
		hb(function() {
			var d, e, f, g = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
			h = V.getElementsByTagName("body")[0];
			h && (d = V.createElement("div"), d.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", h.appendChild(d).appendChild(m), m.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", f = m.getElementsByTagName("td"), f[0].style.cssText = "padding:0;margin:0;border:0;display:none", k = 0 === f[0].offsetHeight, f[0].style.display = "", f[1].style.display = "none", c.reliableHiddenOffsets = k && 0 === f[0].offsetHeight, m.innerHTML = "", m.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", c.boxSizing = 4 === m.offsetWidth, c.doesNotIncludeMarginInBodyOffset = 1 !== h.offsetTop, a.getComputedStyle && (c.pixelPosition = "1%" !== (a.getComputedStyle(m, null) || {}).top, c.boxSizingReliable = "4px" === (a.getComputedStyle(m, null) || {
				width: "4px"
			}).width, e = m.appendChild(V.createElement("div")), e.style.cssText = m.style.cssText = g, e.style.marginRight = e.style.width = "0", m.style.width = "1px", c.reliableMarginRight = !parseFloat((a.getComputedStyle(e, null) || {}).marginRight)), m.style.zoom !== b && (m.innerHTML = "", m.style.cssText = g + "width:1px;padding:1px;display:inline;zoom:1", c.inlineBlockNeedsLayout = 3 === m.offsetWidth, m.style.display = "block", m.innerHTML = "<div></div>", m.firstChild.style.width = "5px", c.shrinkWrapBlocks = 3 !== m.offsetWidth, h.style.zoom = 1), h.removeChild(d), d = m = f = e = null)
		}),
		d = f = i = g = e = h = null,
		c
	} ();
	var wb = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
	xb = /([A-Z])/g;
	hb.extend({
		cache: {},
		expando: "jQuery" + (_ + Math.random()).replace(/\D/g, ""),
		noData: {
			embed: !0,
			object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
			applet: !0
		},
		hasData: function(a) {
			return a = a.nodeType ? hb.cache[a[hb.expando]] : a[hb.expando],
			!!a && !h(a)
		},
		data: function(a, b, c) {
			return e(a, b, c, !1)
		},
		removeData: function(a, b) {
			return f(a, b, !1)
		},
		_data: function(a, b, c) {
			return e(a, b, c, !0)
		},
		_removeData: function(a, b) {
			return f(a, b, !0)
		},
		acceptData: function(a) {
			var b = a.nodeName && hb.noData[a.nodeName.toLowerCase()];
			return ! b || b !== !0 && a.getAttribute("classid") === b
		}
	}),
	hb.fn.extend({
		data: function(a, c) {
			var d, e, f = this[0],
			h = 0,
			i = null;
			if (a === b) {
				if (this.length && (i = hb.data(f), 1 === f.nodeType && !hb._data(f, "parsedAttrs"))) {
					for (d = f.attributes; d.length > h; h++) e = d[h].name,
					e.indexOf("data-") || (e = hb.camelCase(e.substring(5)), g(f, e, i[e]));
					hb._data(f, "parsedAttrs", !0)
				}
				return i
			}
			return "object" == typeof a ? this.each(function() {
				hb.data(this, a)
			}) : hb.access(this,
			function(c) {
				return c === b ? f ? g(f, a, hb.data(f, a)) : null: (this.each(function() {
					hb.data(this, a, c)
				}), b)
			},
			null, c, arguments.length > 1, null, !0)
		},
		removeData: function(a) {
			return this.each(function() {
				hb.removeData(this, a)
			})
		}
	}),
	hb.extend({
		queue: function(a, c, d) {
			var e;
			return a ? (c = (c || "fx") + "queue", e = hb._data(a, c), d && (!e || hb.isArray(d) ? e = hb._data(a, c, hb.makeArray(d)) : e.push(d)), e || []) : b
		},
		dequeue: function(a, b) {
			b = b || "fx";
			var c = hb.queue(a, b),
			d = c.length,
			e = c.shift(),
			f = hb._queueHooks(a, b),
			g = function() {
				hb.dequeue(a, b)
			};
			"inprogress" === e && (e = c.shift(), d--),
			f.cur = e,
			e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)),
			!d && f && f.empty.fire()
		},
		_queueHooks: function(a, b) {
			var c = b + "queueHooks";
			return hb._data(a, c) || hb._data(a, c, {
				empty: hb.Callbacks("once memory").add(function() {
					hb._removeData(a, b + "queue"),
					hb._removeData(a, c)
				})
			})
		}
	}),
	hb.fn.extend({
		queue: function(a, c) {
			var d = 2;
			return "string" != typeof a && (c = a, a = "fx", d--),
			d > arguments.length ? hb.queue(this[0], a) : c === b ? this: this.each(function() {
				var b = hb.queue(this, a, c);
				hb._queueHooks(this, a),
				"fx" === a && "inprogress" !== b[0] && hb.dequeue(this, a)
			})
		},
		dequeue: function(a) {
			return this.each(function() {
				hb.dequeue(this, a)
			})
		},
		delay: function(a, b) {
			return a = hb.fx ? hb.fx.speeds[a] || a: a,
			b = b || "fx",
			this.queue(b,
			function(b, c) {
				var d = setTimeout(b, a);
				c.stop = function() {
					clearTimeout(d)
				}
			})
		},
		clearQueue: function(a) {
			return this.queue(a || "fx", [])
		},
		promise: function(a, c) {
			var d, e = 1,
			f = hb.Deferred(),
			g = this,
			h = this.length,
			i = function() {--e || f.resolveWith(g, [g])
			};
			for ("string" != typeof a && (c = a, a = b), a = a || "fx"; h--;) d = hb._data(g[h], a + "queueHooks"),
			d && d.empty && (e++, d.empty.add(i));
			return i(),
			f.promise(c)
		}
	});
	var yb, zb, Ab = /[\t\r\n]/g,
	Bb = /\r/g,
	Cb = /^(?:input|select|textarea|button|object)$/i,
	Db = /^(?:a|area)$/i,
	Eb = /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,
	Fb = /^(?:checked|selected)$/i,
	Gb = hb.support.getSetAttribute,
	Hb = hb.support.input;
	hb.fn.extend({
		attr: function(a, b) {
			return hb.access(this, hb.attr, a, b, arguments.length > 1)
		},
		removeAttr: function(a) {
			return this.each(function() {
				hb.removeAttr(this, a)
			})
		},
		prop: function(a, b) {
			return hb.access(this, hb.prop, a, b, arguments.length > 1)
		},
		removeProp: function(a) {
			return a = hb.propFix[a] || a,
			this.each(function() {
				try {
					this[a] = b,
					delete this[a]
				} catch(c) {}
			})
		},
		addClass: function(a) {
			var b, c, d, e, f, g = 0,
			h = this.length,
			i = "string" == typeof a && a;
			if (hb.isFunction(a)) return this.each(function(b) {
				hb(this).addClass(a.call(this, b, this.className))
			});
			if (i) for (b = (a || "").match(jb) || []; h > g; g++) if (c = this[g], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(Ab, " ") : " ")) {
				for (f = 0; e = b[f++];) 0 > d.indexOf(" " + e + " ") && (d += e + " ");
				c.className = hb.trim(d)
			}
			return this
		},
		removeClass: function(a) {
			var b, c, d, e, f, g = 0,
			h = this.length,
			i = 0 === arguments.length || "string" == typeof a && a;
			if (hb.isFunction(a)) return this.each(function(b) {
				hb(this).removeClass(a.call(this, b, this.className))
			});
			if (i) for (b = (a || "").match(jb) || []; h > g; g++) if (c = this[g], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(Ab, " ") : "")) {
				for (f = 0; e = b[f++];) for (; d.indexOf(" " + e + " ") >= 0;) d = d.replace(" " + e + " ", " ");
				c.className = a ? hb.trim(d) : ""
			}
			return this
		},
		toggleClass: function(a, b) {
			var c = typeof a,
			d = "boolean" == typeof b;
			return this.each(hb.isFunction(a) ?
			function(c) {
				hb(this).toggleClass(a.call(this, c, this.className, b), b)
			}: function() {
				if ("string" === c) for (var e, f = 0,
				g = hb(this), h = b, i = a.match(jb) || []; e = i[f++];) h = d ? h: !g.hasClass(e),
				g[h ? "addClass": "removeClass"](e);
				else("undefined" === c || "boolean" === c) && (this.className && hb._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "": hb._data(this, "__className__") || "")
			})
		},
		hasClass: function(a) {
			for (var b = " " + a + " ",
			c = 0,
			d = this.length; d > c; c++) if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(Ab, " ").indexOf(b) >= 0) return ! 0;
			return ! 1
		},
		val: function(a) {
			var c, d, e, f = this[0];
			return arguments.length ? (e = hb.isFunction(a), this.each(function(d) {
				var f, g = hb(this);
				1 === this.nodeType && (f = e ? a.call(this, d, g.val()) : a, null == f ? f = "": "number" == typeof f ? f += "": hb.isArray(f) && (f = hb.map(f,
				function(a) {
					return null == a ? "": a + ""
				})), c = hb.valHooks[this.type] || hb.valHooks[this.nodeName.toLowerCase()], c && "set" in c && c.set(this, f, "value") !== b || (this.value = f))
			})) : f ? (c = hb.valHooks[f.type] || hb.valHooks[f.nodeName.toLowerCase()], c && "get" in c && (d = c.get(f, "value")) !== b ? d: (d = f.value, "string" == typeof d ? d.replace(Bb, "") : null == d ? "": d)) : void 0
		}
	}),
	hb.extend({
		valHooks: {
			option: {
				get: function(a) {
					var b = a.attributes.value;
					return ! b || b.specified ? a.value: a.text
				}
			},
			select: {
				get: function(a) {
					for (var b, c, d = a.options,
					e = a.selectedIndex,
					f = "select-one" === a.type || 0 > e,
					g = f ? null: [], h = f ? e + 1 : d.length, i = 0 > e ? h: f ? e: 0; h > i; i++) if (c = d[i], !(!c.selected && i !== e || (hb.support.optDisabled ? c.disabled: null !== c.getAttribute("disabled")) || c.parentNode.disabled && hb.nodeName(c.parentNode, "optgroup"))) {
						if (b = hb(c).val(), f) return b;
						g.push(b)
					}
					return g
				},
				set: function(a, b) {
					var c = hb.makeArray(b);
					return hb(a).find("option").each(function() {
						this.selected = hb.inArray(hb(this).val(), c) >= 0
					}),
					c.length || (a.selectedIndex = -1),
					c
				}
			}
		},
		attr: function(a, c, d) {
			var e, f, g, h = a.nodeType;
			return a && 3 !== h && 8 !== h && 2 !== h ? a.getAttribute === b ? hb.prop(a, c, d) : (g = 1 !== h || !hb.isXMLDoc(a), g && (c = c.toLowerCase(), f = hb.attrHooks[c] || (Eb.test(c) ? zb: yb)), d === b ? f && g && "get" in f && null !== (e = f.get(a, c)) ? e: (a.getAttribute !== b && (e = a.getAttribute(c)), null == e ? b: e) : null !== d ? f && g && "set" in f && (e = f.set(a, d, c)) !== b ? e: (a.setAttribute(c, d + ""), d) : (hb.removeAttr(a, c), b)) : void 0
		},
		removeAttr: function(a, b) {
			var c, d, e = 0,
			f = b && b.match(jb);
			if (f && 1 === a.nodeType) for (; c = f[e++];) d = hb.propFix[c] || c,
			Eb.test(c) ? !Gb && Fb.test(c) ? a[hb.camelCase("default-" + c)] = a[d] = !1 : a[d] = !1 : hb.attr(a, c, ""),
			a.removeAttribute(Gb ? c: d)
		},
		attrHooks: {
			type: {
				set: function(a, b) {
					if (!hb.support.radioValue && "radio" === b && hb.nodeName(a, "input")) {
						var c = a.value;
						return a.setAttribute("type", b),
						c && (a.value = c),
						b
					}
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
		prop: function(a, c, d) {
			var e, f, g, h = a.nodeType;
			return a && 3 !== h && 8 !== h && 2 !== h ? (g = 1 !== h || !hb.isXMLDoc(a), g && (c = hb.propFix[c] || c, f = hb.propHooks[c]), d !== b ? f && "set" in f && (e = f.set(a, d, c)) !== b ? e: a[c] = d: f && "get" in f && null !== (e = f.get(a, c)) ? e: a[c]) : void 0
		},
		propHooks: {
			tabIndex: {
				get: function(a) {
					var c = a.getAttributeNode("tabindex");
					return c && c.specified ? parseInt(c.value, 10) : Cb.test(a.nodeName) || Db.test(a.nodeName) && a.href ? 0 : b
				}
			}
		}
	}),
	zb = {
		get: function(a, c) {
			var d = hb.prop(a, c),
			e = "boolean" == typeof d && a.getAttribute(c),
			f = "boolean" == typeof d ? Hb && Gb ? null != e: Fb.test(c) ? a[hb.camelCase("default-" + c)] : !!e: a.getAttributeNode(c);
			return f && f.value !== !1 ? c.toLowerCase() : b
		},
		set: function(a, b, c) {
			return b === !1 ? hb.removeAttr(a, c) : Hb && Gb || !Fb.test(c) ? a.setAttribute(!Gb && hb.propFix[c] || c, c) : a[hb.camelCase("default-" + c)] = a[c] = !0,
			c
		}
	},
	Hb && Gb || (hb.attrHooks.value = {
		get: function(a, c) {
			var d = a.getAttributeNode(c);
			return hb.nodeName(a, "input") ? a.defaultValue: d && d.specified ? d.value: b
		},
		set: function(a, c, d) {
			return hb.nodeName(a, "input") ? (a.defaultValue = c, b) : yb && yb.set(a, c, d)
		}
	}),
	Gb || (yb = hb.valHooks.button = {
		get: function(a, c) {
			var d = a.getAttributeNode(c);
			return d && ("id" === c || "name" === c || "coords" === c ? "" !== d.value: d.specified) ? d.value: b
		},
		set: function(a, c, d) {
			var e = a.getAttributeNode(d);
			return e || a.setAttributeNode(e = a.ownerDocument.createAttribute(d)),
			e.value = c += "",
			"value" === d || c === a.getAttribute(d) ? c: b
		}
	},
	hb.attrHooks.contenteditable = {
		get: yb.get,
		set: function(a, b, c) {
			yb.set(a, "" === b ? !1 : b, c)
		}
	},
	hb.each(["width", "height"],
	function(a, c) {
		hb.attrHooks[c] = hb.extend(hb.attrHooks[c], {
			set: function(a, d) {
				return "" === d ? (a.setAttribute(c, "auto"), d) : b
			}
		})
	})),
	hb.support.hrefNormalized || (hb.each(["href", "src", "width", "height"],
	function(a, c) {
		hb.attrHooks[c] = hb.extend(hb.attrHooks[c], {
			get: function(a) {
				var d = a.getAttribute(c, 2);
				return null == d ? b: d
			}
		})
	}), hb.each(["href", "src"],
	function(a, b) {
		hb.propHooks[b] = {
			get: function(a) {
				return a.getAttribute(b, 4)
			}
		}
	})),
	hb.support.style || (hb.attrHooks.style = {
		get: function(a) {
			return a.style.cssText || b
		},
		set: function(a, b) {
			return a.style.cssText = b + ""
		}
	}),
	hb.support.optSelected || (hb.propHooks.selected = hb.extend(hb.propHooks.selected, {
		get: function(a) {
			var b = a.parentNode;
			return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex),
			null
		}
	})),
	hb.support.enctype || (hb.propFix.enctype = "encoding"),
	hb.support.checkOn || hb.each(["radio", "checkbox"],
	function() {
		hb.valHooks[this] = {
			get: function(a) {
				return null === a.getAttribute("value") ? "on": a.value
			}
		}
	}),
	hb.each(["radio", "checkbox"],
	function() {
		hb.valHooks[this] = hb.extend(hb.valHooks[this], {
			set: function(a, c) {
				return hb.isArray(c) ? a.checked = hb.inArray(hb(a).val(), c) >= 0 : b
			}
		})
	});
	var Ib = /^(?:input|select|textarea)$/i,
	Jb = /^key/,
	Kb = /^(?:mouse|contextmenu)|click/,
	Lb = /^(?:focusinfocus|focusoutblur)$/,
	Mb = /^([^.]*)(?:\.(.+)|)$/;
	hb.event = {
		global: {},
		add: function(a, c, d, e, f) {
			var g, h, i, j, k, l, m, n, o, p, q, r = 3 !== a.nodeType && 8 !== a.nodeType && hb._data(a);
			if (r) {
				for (d.handler && (g = d, d = g.handler, f = g.selector), d.guid || (d.guid = hb.guid++), (j = r.events) || (j = r.events = {}), (h = r.handle) || (h = r.handle = function(a) {
					return hb === b || a && hb.event.triggered === a.type ? b: hb.event.dispatch.apply(h.elem, arguments)
				},
				h.elem = a), c = (c || "").match(jb) || [""], k = c.length; k--;) i = Mb.exec(c[k]) || [],
				o = q = i[1],
				p = (i[2] || "").split(".").sort(),
				m = hb.event.special[o] || {},
				o = (f ? m.delegateType: m.bindType) || o,
				m = hb.event.special[o] || {},
				l = hb.extend({
					type: o,
					origType: q,
					data: e,
					handler: d,
					guid: d.guid,
					selector: f,
					needsContext: f && hb.expr.match.needsContext.test(f),
					namespace: p.join(".")
				},
				g),
				(n = j[o]) || (n = j[o] = [], n.delegateCount = 0, m.setup && m.setup.call(a, e, p, h) !== !1 || (a.addEventListener ? a.addEventListener(o, h, !1) : a.attachEvent && a.attachEvent("on" + o, h))),
				m.add && (m.add.call(a, l), l.handler.guid || (l.handler.guid = d.guid)),
				f ? n.splice(n.delegateCount++, 0, l) : n.push(l),
				hb.event.global[o] = !0;
				a = null
			}
		},
		remove: function(a, b, c, d, e) {
			var f, g, h, i, j, k, l, m, n, o, p, q = hb.hasData(a) && hb._data(a);
			if (q && (i = q.events)) {
				for (b = (b || "").match(jb) || [""], j = b.length; j--;) if (h = Mb.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
					for (l = hb.event.special[n] || {},
					n = (d ? l.delegateType: l.bindType) || n, m = i[n] || [], h = h[2] && RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length; f--;) k = m[f],
					!e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
					g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || hb.removeEvent(a, n, q.handle), delete i[n])
				} else for (n in i) hb.event.remove(a, n + b[j], c, d, !0);
				hb.isEmptyObject(i) && (delete q.handle, hb._removeData(a, "events"))
			}
		},
		trigger: function(c, d, e, f) {
			var g, h, i, j, k, l, m, n = [e || V],
			o = c.type || c,
			p = c.namespace ? c.namespace.split(".") : [];
			if (h = i = e = e || V, 3 !== e.nodeType && 8 !== e.nodeType && !Lb.test(o + hb.event.triggered) && (o.indexOf(".") >= 0 && (p = o.split("."), o = p.shift(), p.sort()), k = 0 > o.indexOf(":") && "on" + o, c = c[hb.expando] ? c: new hb.Event(o, "object" == typeof c && c), c.isTrigger = !0, c.namespace = p.join("."), c.namespace_re = c.namespace ? RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, c.result = b, c.target || (c.target = e), d = null == d ? [c] : hb.makeArray(d, [c]), m = hb.event.special[o] || {},
			f || !m.trigger || m.trigger.apply(e, d) !== !1)) {
				if (!f && !m.noBubble && !hb.isWindow(e)) {
					for (j = m.delegateType || o, Lb.test(j + o) || (h = h.parentNode); h; h = h.parentNode) n.push(h),
					i = h;
					i === (e.ownerDocument || V) && n.push(i.defaultView || i.parentWindow || a)
				}
				for (g = 0; (h = n[g++]) && !c.isPropagationStopped();) c.type = g > 1 ? j: m.bindType || o,
				l = (hb._data(h, "events") || {})[c.type] && hb._data(h, "handle"),
				l && l.apply(h, d),
				l = k && h[k],
				l && hb.acceptData(h) && l.apply && l.apply(h, d) === !1 && c.preventDefault();
				if (c.type = o, !(f || c.isDefaultPrevented() || m._default && m._default.apply(e.ownerDocument, d) !== !1 || "click" === o && hb.nodeName(e, "a") || !hb.acceptData(e) || !k || !e[o] || hb.isWindow(e))) {
					i = e[k],
					i && (e[k] = null),
					hb.event.triggered = o;
					try {
						e[o]()
					} catch(q) {}
					hb.event.triggered = b,
					i && (e[k] = i)
				}
				return c.result
			}
		},
		dispatch: function(a) {
			a = hb.event.fix(a);
			var c, d, e, f, g, h = [],
			i = cb.call(arguments),
			j = (hb._data(this, "events") || {})[a.type] || [],
			k = hb.event.special[a.type] || {};
			if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
				for (h = hb.event.handlers.call(this, a, j), c = 0; (f = h[c++]) && !a.isPropagationStopped();) for (a.currentTarget = f.elem, d = 0; (g = f.handlers[d++]) && !a.isImmediatePropagationStopped();)(!a.namespace_re || a.namespace_re.test(g.namespace)) && (a.handleObj = g, a.data = g.data, e = ((hb.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), e !== b && (a.result = e) === !1 && (a.preventDefault(), a.stopPropagation()));
				return k.postDispatch && k.postDispatch.call(this, a),
				a.result
			}
		},
		handlers: function(a, c) {
			var d, e, f, g, h = [],
			i = c.delegateCount,
			j = a.target;
			if (i && j.nodeType && (!a.button || "click" !== a.type)) for (; j != this; j = j.parentNode || this) if (j.disabled !== !0 || "click" !== a.type) {
				for (e = [], d = 0; i > d; d++) g = c[d],
				f = g.selector + " ",
				e[f] === b && (e[f] = g.needsContext ? hb(f, this).index(j) >= 0 : hb.find(f, this, null, [j]).length),
				e[f] && e.push(g);
				e.length && h.push({
					elem: j,
					handlers: e
				})
			}
			return c.length > i && h.push({
				elem: this,
				handlers: c.slice(i)
			}),
			h
		},
		fix: function(a) {
			if (a[hb.expando]) return a;
			var b, c, d = a,
			e = hb.event.fixHooks[a.type] || {},
			f = e.props ? this.props.concat(e.props) : this.props;
			for (a = new hb.Event(d), b = f.length; b--;) c = f[b],
			a[c] = d[c];
			return a.target || (a.target = d.srcElement || V),
			3 === a.target.nodeType && (a.target = a.target.parentNode),
			a.metaKey = !!a.metaKey,
			e.filter ? e.filter(a, d) : a
		},
		props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
		fixHooks: {},
		keyHooks: {
			props: "char charCode key keyCode".split(" "),
			filter: function(a, b) {
				return null == a.which && (a.which = null != b.charCode ? b.charCode: b.keyCode),
				a
			}
		},
		mouseHooks: {
			props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
			filter: function(a, c) {
				var d, e, f, g = c.button,
				h = c.fromElement;
				return null == a.pageX && null != c.clientX && (d = a.target.ownerDocument || V, e = d.documentElement, f = d.body, a.pageX = c.clientX + (e && e.scrollLeft || f && f.scrollLeft || 0) - (e && e.clientLeft || f && f.clientLeft || 0), a.pageY = c.clientY + (e && e.scrollTop || f && f.scrollTop || 0) - (e && e.clientTop || f && f.clientTop || 0)),
				!a.relatedTarget && h && (a.relatedTarget = h === a.target ? c.toElement: h),
				a.which || g === b || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0),
				a
			}
		},
		special: {
			load: {
				noBubble: !0
			},
			click: {
				trigger: function() {
					return hb.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : b
				}
			},
			focus: {
				trigger: function() {
					if (this !== V.activeElement && this.focus) try {
						return this.focus(),
						!1
					} catch(a) {}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					return this === V.activeElement && this.blur ? (this.blur(), !1) : b
				},
				delegateType: "focusout"
			},
			beforeunload: {
				postDispatch: function(a) {
					a.result !== b && (a.originalEvent.returnValue = a.result)
				}
			}
		},
		simulate: function(a, b, c, d) {
			var e = hb.extend(new hb.Event, c, {
				type: a,
				isSimulated: !0,
				originalEvent: {}
			});
			d ? hb.event.trigger(e, null, b) : hb.event.dispatch.call(b, e),
			e.isDefaultPrevented() && c.preventDefault()
		}
	},
	hb.removeEvent = V.removeEventListener ?
	function(a, b, c) {
		a.removeEventListener && a.removeEventListener(b, c, !1)
	}: function(a, c, d) {
		var e = "on" + c;
		a.detachEvent && (a[e] === b && (a[e] = null), a.detachEvent(e, d))
	},
	hb.Event = function(a, c) {
		return this instanceof hb.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault() ? i: j) : this.type = a, c && hb.extend(this, c), this.timeStamp = a && a.timeStamp || hb.now(), this[hb.expando] = !0, b) : new hb.Event(a, c)
	},
	hb.Event.prototype = {
		isDefaultPrevented: j,
		isPropagationStopped: j,
		isImmediatePropagationStopped: j,
		preventDefault: function() {
			var a = this.originalEvent;
			this.isDefaultPrevented = i,
			a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
		},
		stopPropagation: function() {
			var a = this.originalEvent;
			this.isPropagationStopped = i,
			a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
		},
		stopImmediatePropagation: function() {
			this.isImmediatePropagationStopped = i,
			this.stopPropagation()
		}
	},
	hb.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout"
	},
	function(a, b) {
		hb.event.special[a] = {
			delegateType: b,
			bindType: b,
			handle: function(a) {
				var c, d = this,
				e = a.relatedTarget,
				f = a.handleObj;
				return (!e || e !== d && !hb.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b),
				c
			}
		}
	}),
	hb.support.submitBubbles || (hb.event.special.submit = {
		setup: function() {
			return hb.nodeName(this, "form") ? !1 : (hb.event.add(this, "click._submit keypress._submit",
			function(a) {
				var c = a.target,
				d = hb.nodeName(c, "input") || hb.nodeName(c, "button") ? c.form: b;
				d && !hb._data(d, "submitBubbles") && (hb.event.add(d, "submit._submit",
				function(a) {
					a._submit_bubble = !0
				}), hb._data(d, "submitBubbles", !0))
			}), b)
		},
		postDispatch: function(a) {
			a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && hb.event.simulate("submit", this.parentNode, a, !0))
		},
		teardown: function() {
			return hb.nodeName(this, "form") ? !1 : (hb.event.remove(this, "._submit"), b)
		}
	}),
	hb.support.changeBubbles || (hb.event.special.change = {
		setup: function() {
			return Ib.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (hb.event.add(this, "propertychange._change",
			function(a) {
				"checked" === a.originalEvent.propertyName && (this._just_changed = !0)
			}), hb.event.add(this, "click._change",
			function(a) {
				this._just_changed && !a.isTrigger && (this._just_changed = !1),
				hb.event.simulate("change", this, a, !0)
			})), !1) : (hb.event.add(this, "beforeactivate._change",
			function(a) {
				var b = a.target;
				Ib.test(b.nodeName) && !hb._data(b, "changeBubbles") && (hb.event.add(b, "change._change",
				function(a) { ! this.parentNode || a.isSimulated || a.isTrigger || hb.event.simulate("change", this.parentNode, a, !0)
				}), hb._data(b, "changeBubbles", !0))
			}), b)
		},
		handle: function(a) {
			var c = a.target;
			return this !== c || a.isSimulated || a.isTrigger || "radio" !== c.type && "checkbox" !== c.type ? a.handleObj.handler.apply(this, arguments) : b
		},
		teardown: function() {
			return hb.event.remove(this, "._change"),
			!Ib.test(this.nodeName)
		}
	}),
	hb.support.focusinBubbles || hb.each({
		focus: "focusin",
		blur: "focusout"
	},
	function(a, b) {
		var c = 0,
		d = function(a) {
			hb.event.simulate(b, a.target, hb.event.fix(a), !0)
		};
		hb.event.special[b] = {
			setup: function() {
				0 === c++&&V.addEventListener(a, d, !0)
			},
			teardown: function() {
				0 === --c && V.removeEventListener(a, d, !0)
			}
		}
	}),
	hb.fn.extend({
		on: function(a, c, d, e, f) {
			var g, h;
			if ("object" == typeof a) {
				"string" != typeof c && (d = d || c, c = b);
				for (h in a) this.on(h, c, d, a[h], f);
				return this
			}
			if (null == d && null == e ? (e = c, d = c = b) : null == e && ("string" == typeof c ? (e = d, d = b) : (e = d, d = c, c = b)), e === !1) e = j;
			else if (!e) return this;
			return 1 === f && (g = e, e = function(a) {
				return hb().off(a),
				g.apply(this, arguments)
			},
			e.guid = g.guid || (g.guid = hb.guid++)),
			this.each(function() {
				hb.event.add(this, a, e, d, c)
			})
		},
		one: function(a, b, c, d) {
			return this.on(a, b, c, d, 1)
		},
		off: function(a, c, d) {
			var e, f;
			if (a && a.preventDefault && a.handleObj) return e = a.handleObj,
			hb(a.delegateTarget).off(e.namespace ? e.origType + "." + e.namespace: e.origType, e.selector, e.handler),
			this;
			if ("object" == typeof a) {
				for (f in a) this.off(f, c, a[f]);
				return this
			}
			return (c === !1 || "function" == typeof c) && (d = c, c = b),
			d === !1 && (d = j),
			this.each(function() {
				hb.event.remove(this, a, d, c)
			})
		},
		bind: function(a, b, c) {
			return this.on(a, null, b, c)
		},
		unbind: function(a, b) {
			return this.off(a, null, b)
		},
		delegate: function(a, b, c, d) {
			return this.on(b, a, c, d)
		},
		undelegate: function(a, b, c) {
			return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
		},
		trigger: function(a, b) {
			return this.each(function() {
				hb.event.trigger(a, b, this)
			})
		},
		triggerHandler: function(a, c) {
			var d = this[0];
			return d ? hb.event.trigger(a, c, d, !0) : b
		},
		hover: function(a, b) {
			return this.mouseenter(a).mouseleave(b || a)
		}
	}),
	hb.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),
	function(a, b) {
		hb.fn[b] = function(a, c) {
			return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
		},
		Jb.test(b) && (hb.event.fixHooks[b] = hb.event.keyHooks),
		Kb.test(b) && (hb.event.fixHooks[b] = hb.event.mouseHooks)
	}),
	function(a, b) {
		function c(a) {
			return ob.test(a + "")
		}
		function d() {
			var a, b = [];
			return a = function(c, d) {
				return b.push(c += " ") > y.cacheLength && delete a[b.shift()],
				a[c] = d
			}
		}
		function e(a) {
			return a[N] = !0,
			a
		}
		function f(a) {
			var b = F.createElement("div");
			try {
				return a(b)
			} catch(c) {
				return ! 1
			} finally {
				b = null
			}
		}
		function g(a, b, c, d) {
			var e, f, g, h, i, j, k, n, o, p;
			if ((b ? b.ownerDocument || b: O) !== F && E(b), b = b || F, c = c || [], !a || "string" != typeof a) return c;
			if (1 !== (h = b.nodeType) && 9 !== h) return [];
			if (!H && !d) {
				if (e = pb.exec(a)) if (g = e[1]) {
					if (9 === h) {
						if (f = b.getElementById(g), !f || !f.parentNode) return c;
						if (f.id === g) return c.push(f),
						c
					} else if (b.ownerDocument && (f = b.ownerDocument.getElementById(g)) && L(b, f) && f.id === g) return c.push(f),
					c
				} else {
					if (e[2]) return Z.apply(c, $.call(b.getElementsByTagName(a), 0)),
					c;
					if ((g = e[3]) && P.getByClassName && b.getElementsByClassName) return Z.apply(c, $.call(b.getElementsByClassName(g), 0)),
					c
				}
				if (P.qsa && !I.test(a)) {
					if (k = !0, n = N, o = b, p = 9 === h && a, 1 === h && "object" !== b.nodeName.toLowerCase()) {
						for (j = l(a), (k = b.getAttribute("id")) ? n = k.replace(sb, "\\$&") : b.setAttribute("id", n), n = "[id='" + n + "'] ", i = j.length; i--;) j[i] = n + m(j[i]);
						o = nb.test(a) && b.parentNode || b,
						p = j.join(",")
					}
					if (p) try {
						return Z.apply(c, $.call(o.querySelectorAll(p), 0)),
						c
					} catch(q) {} finally {
						k || b.removeAttribute("id")
					}
				}
			}
			return u(a.replace(gb, "$1"), b, c, d)
		}
		function h(a, b) {
			for (var c = a && b && a.nextSibling; c; c = c.nextSibling) if (c === b) return - 1;
			return a ? 1 : -1
		}
		function i(a) {
			return function(b) {
				var c = b.nodeName.toLowerCase();
				return "input" === c && b.type === a
			}
		}
		function j(a) {
			return function(b) {
				var c = b.nodeName.toLowerCase();
				return ("input" === c || "button" === c) && b.type === a
			}
		}
		function k(a) {
			return e(function(b) {
				return b = +b,
				e(function(c, d) {
					for (var e, f = a([], c.length, b), g = f.length; g--;) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
				})
			})
		}
		function l(a, b) {
			var c, d, e, f, h, i, j, k = T[a + " "];
			if (k) return b ? 0 : k.slice(0);
			for (h = a, i = [], j = y.preFilter; h;) { (!c || (d = ib.exec(h))) && (d && (h = h.slice(d[0].length) || h), i.push(e = [])),
				c = !1,
				(d = jb.exec(h)) && (c = d.shift(), e.push({
					value: c,
					type: d[0].replace(gb, " ")
				}), h = h.slice(c.length));
				for (f in y.filter) ! (d = mb[f].exec(h)) || j[f] && !(d = j[f](d)) || (c = d.shift(), e.push({
					value: c,
					type: f,
					matches: d
				}), h = h.slice(c.length));
				if (!c) break
			}
			return b ? h.length: h ? g.error(a) : T(a, i).slice(0)
		}
		function m(a) {
			for (var b = 0,
			c = a.length,
			d = ""; c > b; b++) d += a[b].value;
			return d
		}
		function n(a, b, c) {
			var d = b.dir,
			e = c && "parentNode" === b.dir,
			f = R++;
			return b.first ?
			function(b, c, f) {
				for (; b = b[d];) if (1 === b.nodeType || e) return a(b, c, f)
			}: function(b, c, g) {
				var h, i, j, k = Q + " " + f;
				if (g) {
					for (; b = b[d];) if ((1 === b.nodeType || e) && a(b, c, g)) return ! 0
				} else for (; b = b[d];) if (1 === b.nodeType || e) if (j = b[N] || (b[N] = {}), (i = j[d]) && i[0] === k) {
					if ((h = i[1]) === !0 || h === x) return h === !0
				} else if (i = j[d] = [k], i[1] = a(b, c, g) || x, i[1] === !0) return ! 0
			}
		}
		function o(a) {
			return a.length > 1 ?
			function(b, c, d) {
				for (var e = a.length; e--;) if (!a[e](b, c, d)) return ! 1;
				return ! 0
			}: a[0]
		}
		function p(a, b, c, d, e) {
			for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
			return g
		}
		function q(a, b, c, d, f, g) {
			return d && !d[N] && (d = q(d)),
			f && !f[N] && (f = q(f, g)),
			e(function(e, g, h, i) {
				var j, k, l, m = [],
				n = [],
				o = g.length,
				q = e || t(b || "*", h.nodeType ? [h] : h, []),
				r = !a || !e && b ? q: p(q, m, a, h, i),
				s = c ? f || (e ? a: o || d) ? [] : g: r;
				if (c && c(r, s, h, i), d) for (j = p(s, n), d(j, [], h, i), k = j.length; k--;)(l = j[k]) && (s[n[k]] = !(r[n[k]] = l));
				if (e) {
					if (f || a) {
						if (f) {
							for (j = [], k = s.length; k--;)(l = s[k]) && j.push(r[k] = l);
							f(null, s = [], j, i)
						}
						for (k = s.length; k--;)(l = s[k]) && (j = f ? _.call(e, l) : m[k]) > -1 && (e[j] = !(g[j] = l))
					}
				} else s = p(s === g ? s.splice(o, s.length) : s),
				f ? f(null, g, s, i) : Z.apply(g, s)
			})
		}
		function r(a) {
			for (var b, c, d, e = a.length,
			f = y.relative[a[0].type], g = f || y.relative[" "], h = f ? 1 : 0, i = n(function(a) {
				return a === b
			},
			g, !0), j = n(function(a) {
				return _.call(b, a) > -1
			},
			g, !0), k = [function(a, c, d) {
				return ! f && (d || c !== D) || ((b = c).nodeType ? i(a, c, d) : j(a, c, d))
			}]; e > h; h++) if (c = y.relative[a[h].type]) k = [n(o(k), c)];
			else {
				if (c = y.filter[a[h].type].apply(null, a[h].matches), c[N]) {
					for (d = ++h; e > d && !y.relative[a[d].type]; d++);
					return q(h > 1 && o(k), h > 1 && m(a.slice(0, h - 1)).replace(gb, "$1"), c, d > h && r(a.slice(h, d)), e > d && r(a = a.slice(d)), e > d && m(a))
				}
				k.push(c)
			}
			return o(k)
		}
		function s(a, b) {
			var c = 0,
			d = b.length > 0,
			f = a.length > 0,
			h = function(e, h, i, j, k) {
				var l, m, n, o = [],
				q = 0,
				r = "0",
				s = e && [],
				t = null != k,
				u = D,
				v = e || f && y.find.TAG("*", k && h.parentNode || h),
				w = Q += null == u ? 1 : Math.E;
				for (t && (D = h !== F && h, x = c); null != (l = v[r]); r++) {
					if (f && l) {
						for (m = 0; n = a[m]; m++) if (n(l, h, i)) {
							j.push(l);
							break
						}
						t && (Q = w, x = ++c)
					}
					d && ((l = !n && l) && q--, e && s.push(l))
				}
				if (q += r, d && r !== q) {
					for (m = 0; n = b[m]; m++) n(s, o, h, i);
					if (e) {
						if (q > 0) for (; r--;) s[r] || o[r] || (o[r] = Y.call(j));
						o = p(o)
					}
					Z.apply(j, o),
					t && !e && o.length > 0 && q + b.length > 1 && g.uniqueSort(j)
				}
				return t && (Q = w, D = u),
				s
			};
			return d ? e(h) : h
		}
		function t(a, b, c) {
			for (var d = 0,
			e = b.length; e > d; d++) g(a, b[d], c);
			return c
		}
		function u(a, b, c, d) {
			var e, f, g, h, i, j = l(a);
			if (!d && 1 === j.length) {
				if (f = j[0] = j[0].slice(0), f.length > 2 && "ID" === (g = f[0]).type && 9 === b.nodeType && !H && y.relative[f[1].type]) {
					if (b = y.find.ID(g.matches[0].replace(ub, vb), b)[0], !b) return c;
					a = a.slice(f.shift().value.length)
				}
				for (e = mb.needsContext.test(a) ? -1 : f.length - 1; e >= 0 && (g = f[e], !y.relative[h = g.type]); e--) if ((i = y.find[h]) && (d = i(g.matches[0].replace(ub, vb), nb.test(f[0].type) && b.parentNode || b))) {
					if (f.splice(e, 1), a = d.length && m(f), !a) return Z.apply(c, $.call(d, 0)),
					c;
					break
				}
			}
			return B(a, j)(d, b, H, c, nb.test(a)),
			c
		}
		function v() {}
		var w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N = "sizzle" + -new Date,
		O = a.document,
		P = {},
		Q = 0,
		R = 0,
		S = d(),
		T = d(),
		U = d(),
		V = typeof b,
		W = 1 << 31,
		X = [],
		Y = X.pop,
		Z = X.push,
		$ = X.slice,
		_ = X.indexOf ||
		function(a) {
			for (var b = 0,
			c = this.length; c > b; b++) if (this[b] === a) return b;
			return - 1
		},
		ab = "[\\x20\\t\\r\\n\\f]",
		bb = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
		cb = bb.replace("w", "w#"),
		db = "([*^$|!~]?=)",
		eb = "\\[" + ab + "*(" + bb + ")" + ab + "*(?:" + db + ab + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + cb + ")|)|)" + ab + "*\\]",
		fb = ":(" + bb + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + eb.replace(3, 8) + ")*)|.*)\\)|)",
		gb = RegExp("^" + ab + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ab + "+$", "g"),
		ib = RegExp("^" + ab + "*," + ab + "*"),
		jb = RegExp("^" + ab + "*([\\x20\\t\\r\\n\\f>+~])" + ab + "*"),
		kb = RegExp(fb),
		lb = RegExp("^" + cb + "$"),
		mb = {
			ID: RegExp("^#(" + bb + ")"),
			CLASS: RegExp("^\\.(" + bb + ")"),
			NAME: RegExp("^\\[name=['\"]?(" + bb + ")['\"]?\\]"),
			TAG: RegExp("^(" + bb.replace("w", "w*") + ")"),
			ATTR: RegExp("^" + eb),
			PSEUDO: RegExp("^" + fb),
			CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ab + "*(even|odd|(([+-]|)(\\d*)n|)" + ab + "*(?:([+-]|)" + ab + "*(\\d+)|))" + ab + "*\\)|)", "i"),
			needsContext: RegExp("^" + ab + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ab + "*((?:-\\d)?\\d*)" + ab + "*\\)|)(?=[^-]|$)", "i")
		},
		nb = /[\x20\t\r\n\f]*[+~]/,
		ob = /\{\s*\[native code\]\s*\}/,
		pb = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
		qb = /^(?:input|select|textarea|button)$/i,
		rb = /^h\d$/i,
		sb = /'|\\/g,
		tb = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
		ub = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,
		vb = function(a, b) {
			var c = "0x" + b - 65536;
			return c !== c ? b: 0 > c ? String.fromCharCode(c + 65536) : String.fromCharCode(55296 | c >> 10, 56320 | 1023 & c)
		};
		try {
			$.call(G.childNodes, 0)[0].nodeType
		} catch(wb) {
			$ = function(a) {
				for (var b, c = []; b = this[a]; a++) c.push(b);
				return c
			}
		}
		A = g.isXML = function(a) {
			var b = a && (a.ownerDocument || a).documentElement;
			return b ? "HTML" !== b.nodeName: !1
		},
		E = g.setDocument = function(a) {
			var d = a ? a.ownerDocument || a: O;
			return d !== F && 9 === d.nodeType && d.documentElement ? (F = d, G = d.documentElement, H = A(d), P.tagNameNoComments = f(function(a) {
				return a.appendChild(d.createComment("")),
				!a.getElementsByTagName("*").length
			}), P.attributes = f(function(a) {
				a.innerHTML = "<select></select>";
				var b = typeof a.lastChild.getAttribute("multiple");
				return "boolean" !== b && "string" !== b
			}), P.getByClassName = f(function(a) {
				return a.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>",
				a.getElementsByClassName && a.getElementsByClassName("e").length ? (a.lastChild.className = "e", 2 === a.getElementsByClassName("e").length) : !1
			}), P.getByName = f(function(a) {
				a.id = N + 0,
				a.innerHTML = "<a name='" + N + "'></a><div name='" + N + "'></div>",
				G.insertBefore(a, G.firstChild);
				var b = d.getElementsByName && d.getElementsByName(N).length === 2 + d.getElementsByName(N + 0).length;
				return P.getIdNotName = !d.getElementById(N),
				G.removeChild(a),
				b
			}), y.attrHandle = f(function(a) {
				return a.innerHTML = "<a href='#'></a>",
				a.firstChild && typeof a.firstChild.getAttribute !== V && "#" === a.firstChild.getAttribute("href")
			}) ? {}: {
				href: function(a) {
					return a.getAttribute("href", 2)
				},
				type: function(a) {
					return a.getAttribute("type")
				}
			},
			P.getIdNotName ? (y.find.ID = function(a, b) {
				if (typeof b.getElementById !== V && !H) {
					var c = b.getElementById(a);
					return c && c.parentNode ? [c] : []
				}
			},
			y.filter.ID = function(a) {
				var b = a.replace(ub, vb);
				return function(a) {
					return a.getAttribute("id") === b
				}
			}) : (y.find.ID = function(a, c) {
				if (typeof c.getElementById !== V && !H) {
					var d = c.getElementById(a);
					return d ? d.id === a || typeof d.getAttributeNode !== V && d.getAttributeNode("id").value === a ? [d] : b: []
				}
			},
			y.filter.ID = function(a) {
				var b = a.replace(ub, vb);
				return function(a) {
					var c = typeof a.getAttributeNode !== V && a.getAttributeNode("id");
					return c && c.value === b
				}
			}), y.find.TAG = P.tagNameNoComments ?
			function(a, c) {
				return typeof c.getElementsByTagName !== V ? c.getElementsByTagName(a) : b
			}: function(a, b) {
				var c, d = [],
				e = 0,
				f = b.getElementsByTagName(a);
				if ("*" === a) {
					for (; c = f[e]; e++) 1 === c.nodeType && d.push(c);
					return d
				}
				return f
			},
			y.find.NAME = P.getByName &&
			function(a, c) {
				return typeof c.getElementsByName !== V ? c.getElementsByName(name) : b
			},
			y.find.CLASS = P.getByClassName &&
			function(a, c) {
				return typeof c.getElementsByClassName === V || H ? b: c.getElementsByClassName(a)
			},
			J = [], I = [":focus"], (P.qsa = c(d.querySelectorAll)) && (f(function(a) {
				a.innerHTML = "<select><option selected=''></option></select>",
				a.querySelectorAll("[selected]").length || I.push("\\[" + ab + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),
				a.querySelectorAll(":checked").length || I.push(":checked")
			}), f(function(a) {
				a.innerHTML = "<input type='hidden' i=''/>",
				a.querySelectorAll("[i^='']").length && I.push("[*^$]=" + ab + "*(?:\"\"|'')"),
				a.querySelectorAll(":enabled").length || I.push(":enabled", ":disabled"),
				a.querySelectorAll("*,:x"),
				I.push(",.*:")
			})), (P.matchesSelector = c(K = G.matchesSelector || G.mozMatchesSelector || G.webkitMatchesSelector || G.oMatchesSelector || G.msMatchesSelector)) && f(function(a) {
				P.disconnectedMatch = K.call(a, "div"),
				K.call(a, "[s!='']:x"),
				J.push("!=", fb)
			}), I = RegExp(I.join("|")), J = RegExp(J.join("|")), L = c(G.contains) || G.compareDocumentPosition ?
			function(a, b) {
				var c = 9 === a.nodeType ? a.documentElement: a,
				d = b && b.parentNode;
				return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
			}: function(a, b) {
				if (b) for (; b = b.parentNode;) if (b === a) return ! 0;
				return ! 1
			},
			M = G.compareDocumentPosition ?
			function(a, b) {
				var c;
				return a === b ? (C = !0, 0) : (c = b.compareDocumentPosition && a.compareDocumentPosition && a.compareDocumentPosition(b)) ? 1 & c || a.parentNode && 11 === a.parentNode.nodeType ? a === d || L(O, a) ? -1 : b === d || L(O, b) ? 1 : 0 : 4 & c ? -1 : 1 : a.compareDocumentPosition ? -1 : 1
			}: function(a, b) {
				var c, e = 0,
				f = a.parentNode,
				g = b.parentNode,
				i = [a],
				j = [b];
				if (a === b) return C = !0,
				0;
				if (a.sourceIndex && b.sourceIndex) return (~b.sourceIndex || W) - (L(O, a) && ~a.sourceIndex || W);
				if (!f || !g) return a === d ? -1 : b === d ? 1 : f ? -1 : g ? 1 : 0;
				if (f === g) return h(a, b);
				for (c = a; c = c.parentNode;) i.unshift(c);
				for (c = b; c = c.parentNode;) j.unshift(c);
				for (; i[e] === j[e];) e++;
				return e ? h(i[e], j[e]) : i[e] === O ? -1 : j[e] === O ? 1 : 0
			},
			C = !1, [0, 0].sort(M), P.detectDuplicates = C, F) : F
		},
		g.matches = function(a, b) {
			return g(a, null, null, b)
		},
		g.matchesSelector = function(a, b) {
			if ((a.ownerDocument || a) !== F && E(a), b = b.replace(tb, "='$1']"), !(!P.matchesSelector || H || J && J.test(b) || I.test(b))) try {
				var c = K.call(a, b);
				if (c || P.disconnectedMatch || a.document && 11 !== a.document.nodeType) return c
			} catch(d) {}
			return g(b, F, null, [a]).length > 0
		},
		g.contains = function(a, b) {
			return (a.ownerDocument || a) !== F && E(a),
			L(a, b)
		},
		g.attr = function(a, b) {
			var c;
			return (a.ownerDocument || a) !== F && E(a),
			H || (b = b.toLowerCase()),
			(c = y.attrHandle[b]) ? c(a) : H || P.attributes ? a.getAttribute(b) : ((c = a.getAttributeNode(b)) || a.getAttribute(b)) && a[b] === !0 ? b: c && c.specified ? c.value: null
		},
		g.error = function(a) {
			throw Error("Syntax error, unrecognized expression: " + a)
		},
		g.uniqueSort = function(a) {
			var b, c = [],
			d = 1,
			e = 0;
			if (C = !P.detectDuplicates, a.sort(M), C) {
				for (; b = a[d]; d++) b === a[d - 1] && (e = c.push(d));
				for (; e--;) a.splice(c[e], 1)
			}
			return a
		},
		z = g.getText = function(a) {
			var b, c = "",
			d = 0,
			e = a.nodeType;
			if (e) {
				if (1 === e || 9 === e || 11 === e) {
					if ("string" == typeof a.textContent) return a.textContent;
					for (a = a.firstChild; a; a = a.nextSibling) c += z(a)
				} else if (3 === e || 4 === e) return a.nodeValue
			} else for (; b = a[d]; d++) c += z(b);
			return c
		},
		y = g.selectors = {
			cacheLength: 50,
			createPseudo: e,
			match: mb,
			find: {},
			relative: {
				">": {
					dir: "parentNode",
					first: !0
				},
				" ": {
					dir: "parentNode"
				},
				"+": {
					dir: "previousSibling",
					first: !0
				},
				"~": {
					dir: "previousSibling"
				}
			},
			preFilter: {
				ATTR: function(a) {
					return a[1] = a[1].replace(ub, vb),
					a[3] = (a[4] || a[5] || "").replace(ub, vb),
					"~=" === a[2] && (a[3] = " " + a[3] + " "),
					a.slice(0, 4)
				},
				CHILD: function(a) {
					return a[1] = a[1].toLowerCase(),
					"nth" === a[1].slice(0, 3) ? (a[3] || g.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && g.error(a[0]),
					a
				},
				PSEUDO: function(a) {
					var b, c = !a[5] && a[2];
					return mb.CHILD.test(a[0]) ? null: (a[4] ? a[2] = a[4] : c && kb.test(c) && (b = l(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
				}
			},
			filter: {
				TAG: function(a) {
					return "*" === a ?
					function() {
						return ! 0
					}: (a = a.replace(ub, vb).toLowerCase(),
					function(b) {
						return b.nodeName && b.nodeName.toLowerCase() === a
					})
				},
				CLASS: function(a) {
					var b = S[a + " "];
					return b || (b = RegExp("(^|" + ab + ")" + a + "(" + ab + "|$)")) && S(a,
					function(a) {
						return b.test(a.className || typeof a.getAttribute !== V && a.getAttribute("class") || "")
					})
				},
				ATTR: function(a, b, c) {
					return function(d) {
						var e = g.attr(d, a);
						return null == e ? "!=" === b: b ? (e += "", "=" === b ? e === c: "!=" === b ? e !== c: "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.substr(e.length - c.length) === c: "~=" === b ? (" " + e + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.substr(0, c.length + 1) === c + "-": !1) : !0
					}
				},
				CHILD: function(a, b, c, d, e) {
					var f = "nth" !== a.slice(0, 3),
					g = "last" !== a.slice( - 4),
					h = "of-type" === b;
					return 1 === d && 0 === e ?
					function(a) {
						return !! a.parentNode
					}: function(b, c, i) {
						var j, k, l, m, n, o, p = f !== g ? "nextSibling": "previousSibling",
						q = b.parentNode,
						r = h && b.nodeName.toLowerCase(),
						s = !i && !h;
						if (q) {
							if (f) {
								for (; p;) {
									for (l = b; l = l[p];) if (h ? l.nodeName.toLowerCase() === r: 1 === l.nodeType) return ! 1;
									o = p = "only" === a && !o && "nextSibling"
								}
								return ! 0
							}
							if (o = [g ? q.firstChild: q.lastChild], g && s) {
								for (k = q[N] || (q[N] = {}), j = k[a] || [], n = j[0] === Q && j[1], m = j[0] === Q && j[2], l = n && q.childNodes[n]; l = ++n && l && l[p] || (m = n = 0) || o.pop();) if (1 === l.nodeType && ++m && l === b) {
									k[a] = [Q, n, m];
									break
								}
							} else if (s && (j = (b[N] || (b[N] = {}))[a]) && j[0] === Q) m = j[1];
							else for (; (l = ++n && l && l[p] || (m = n = 0) || o.pop()) && ((h ? l.nodeName.toLowerCase() !== r: 1 !== l.nodeType) || !++m || (s && ((l[N] || (l[N] = {}))[a] = [Q, m]), l !== b)););
							return m -= e,
							m === d || 0 === m % d && m / d >= 0
						}
					}
				},
				PSEUDO: function(a, b) {
					var c, d = y.pseudos[a] || y.setFilters[a.toLowerCase()] || g.error("unsupported pseudo: " + a);
					return d[N] ? d(b) : d.length > 1 ? (c = [a, a, "", b], y.setFilters.hasOwnProperty(a.toLowerCase()) ? e(function(a, c) {
						for (var e, f = d(a, b), g = f.length; g--;) e = _.call(a, f[g]),
						a[e] = !(c[e] = f[g])
					}) : function(a) {
						return d(a, 0, c)
					}) : d
				}
			},
			pseudos: {
				not: e(function(a) {
					var b = [],
					c = [],
					d = B(a.replace(gb, "$1"));
					return d[N] ? e(function(a, b, c, e) {
						for (var f, g = d(a, null, e, []), h = a.length; h--;)(f = g[h]) && (a[h] = !(b[h] = f))
					}) : function(a, e, f) {
						return b[0] = a,
						d(b, null, f, c),
						!c.pop()
					}
				}),
				has: e(function(a) {
					return function(b) {
						return g(a, b).length > 0
					}
				}),
				contains: e(function(a) {
					return function(b) {
						return (b.textContent || b.innerText || z(b)).indexOf(a) > -1
					}
				}),
				lang: e(function(a) {
					return lb.test(a || "") || g.error("unsupported lang: " + a),
					a = a.replace(ub, vb).toLowerCase(),
					function(b) {
						var c;
						do
						if (c = H ? b.getAttribute("xml:lang") || b.getAttribute("lang") : b.lang) return c = c.toLowerCase(),
						c === a || 0 === c.indexOf(a + "-");
						while ((b = b.parentNode) && 1 === b.nodeType);
						return ! 1
					}
				}),
				target: function(b) {
					var c = a.location && a.location.hash;
					return c && c.slice(1) === b.id
				},
				root: function(a) {
					return a === G
				},
				focus: function(a) {
					return a === F.activeElement && (!F.hasFocus || F.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
				},
				enabled: function(a) {
					return a.disabled === !1
				},
				disabled: function(a) {
					return a.disabled === !0
				},
				checked: function(a) {
					var b = a.nodeName.toLowerCase();
					return "input" === b && !!a.checked || "option" === b && !!a.selected
				},
				selected: function(a) {
					return a.parentNode && a.parentNode.selectedIndex,
					a.selected === !0
				},
				empty: function(a) {
					for (a = a.firstChild; a; a = a.nextSibling) if (a.nodeName > "@" || 3 === a.nodeType || 4 === a.nodeType) return ! 1;
					return ! 0
				},
				parent: function(a) {
					return ! y.pseudos.empty(a)
				},
				header: function(a) {
					return rb.test(a.nodeName)
				},
				input: function(a) {
					return qb.test(a.nodeName)
				},
				button: function(a) {
					var b = a.nodeName.toLowerCase();
					return "input" === b && "button" === a.type || "button" === b
				},
				text: function(a) {
					var b;
					return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || b.toLowerCase() === a.type)
				},
				first: k(function() {
					return [0]
				}),
				last: k(function(a, b) {
					return [b - 1]
				}),
				eq: k(function(a, b, c) {
					return [0 > c ? c + b: c]
				}),
				even: k(function(a, b) {
					for (var c = 0; b > c; c += 2) a.push(c);
					return a
				}),
				odd: k(function(a, b) {
					for (var c = 1; b > c; c += 2) a.push(c);
					return a
				}),
				lt: k(function(a, b, c) {
					for (var d = 0 > c ? c + b: c; --d >= 0;) a.push(d);
					return a
				}),
				gt: k(function(a, b, c) {
					for (var d = 0 > c ? c + b: c; b > ++d;) a.push(d);
					return a
				})
			}
		};
		for (w in {
			radio: !0,
			checkbox: !0,
			file: !0,
			password: !0,
			image: !0
		}) y.pseudos[w] = i(w);
		for (w in {
			submit: !0,
			reset: !0
		}) y.pseudos[w] = j(w);
		B = g.compile = function(a, b) {
			var c, d = [],
			e = [],
			f = U[a + " "];
			if (!f) {
				for (b || (b = l(a)), c = b.length; c--;) f = r(b[c]),
				f[N] ? d.push(f) : e.push(f);
				f = U(a, s(e, d))
			}
			return f
		},
		y.pseudos.nth = y.pseudos.eq,
		y.filters = v.prototype = y.pseudos,
		y.setFilters = new v,
		E(),
		g.attr = hb.attr,
		hb.find = g,
		hb.expr = g.selectors,
		hb.expr[":"] = hb.expr.pseudos,
		hb.unique = g.uniqueSort,
		hb.text = g.getText,
		hb.isXMLDoc = g.isXML,
		hb.contains = g.contains
	} (a);
	var Nb = /Until$/,
	Ob = /^(?:parents|prev(?:Until|All))/,
	Pb = /^.[^:#\[\.,]*$/,
	Qb = hb.expr.match.needsContext,
	Rb = {
		children: !0,
		contents: !0,
		next: !0,
		prev: !0
	};
	hb.fn.extend({
		find: function(a) {
			var b, c, d;
			if ("string" != typeof a) return d = this,
			this.pushStack(hb(a).filter(function() {
				for (b = 0; d.length > b; b++) if (hb.contains(d[b], this)) return ! 0
			}));
			for (c = [], b = 0; this.length > b; b++) hb.find(a, this[b], c);
			return c = this.pushStack(hb.unique(c)),
			c.selector = (this.selector ? this.selector + " ": "") + a,
			c
		},
		has: function(a) {
			var b, c = hb(a, this),
			d = c.length;
			return this.filter(function() {
				for (b = 0; d > b; b++) if (hb.contains(this, c[b])) return ! 0
			})
		},
		not: function(a) {
			return this.pushStack(l(this, a, !1))
		},
		filter: function(a) {
			return this.pushStack(l(this, a, !0))
		},
		is: function(a) {
			return !! a && ("string" == typeof a ? Qb.test(a) ? hb(a, this.context).index(this[0]) >= 0 : hb.filter(a, this).length > 0 : this.filter(a).length > 0)
		},
		closest: function(a, b) {
			for (var c, d = 0,
			e = this.length,
			f = [], g = Qb.test(a) || "string" != typeof a ? hb(a, b || this.context) : 0; e > d; d++) for (c = this[d]; c && c.ownerDocument && c !== b && 11 !== c.nodeType;) {
				if (g ? g.index(c) > -1 : hb.find.matchesSelector(c, a)) {
					f.push(c);
					break
				}
				c = c.parentNode
			}
			return this.pushStack(f.length > 1 ? hb.unique(f) : f)
		},
		index: function(a) {
			return a ? "string" == typeof a ? hb.inArray(this[0], hb(a)) : hb.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length: -1
		},
		add: function(a, b) {
			var c = "string" == typeof a ? hb(a, b) : hb.makeArray(a && a.nodeType ? [a] : a),
			d = hb.merge(this.get(), c);
			return this.pushStack(hb.unique(d))
		},
		addBack: function(a) {
			return this.add(null == a ? this.prevObject: this.prevObject.filter(a))
		}
	}),
	hb.fn.andSelf = hb.fn.addBack,
	hb.each({
		parent: function(a) {
			var b = a.parentNode;
			return b && 11 !== b.nodeType ? b: null
		},
		parents: function(a) {
			return hb.dir(a, "parentNode")
		},
		parentsUntil: function(a, b, c) {
			return hb.dir(a, "parentNode", c)
		},
		next: function(a) {
			return k(a, "nextSibling")
		},
		prev: function(a) {
			return k(a, "previousSibling")
		},
		nextAll: function(a) {
			return hb.dir(a, "nextSibling")
		},
		prevAll: function(a) {
			return hb.dir(a, "previousSibling")
		},
		nextUntil: function(a, b, c) {
			return hb.dir(a, "nextSibling", c)
		},
		prevUntil: function(a, b, c) {
			return hb.dir(a, "previousSibling", c)
		},
		siblings: function(a) {
			return hb.sibling((a.parentNode || {}).firstChild, a)
		},
		children: function(a) {
			return hb.sibling(a.firstChild)
		},
		contents: function(a) {
			return hb.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document: hb.merge([], a.childNodes)
		}
	},
	function(a, b) {
		hb.fn[a] = function(c, d) {
			var e = hb.map(this, b, c);
			return Nb.test(a) || (d = c),
			d && "string" == typeof d && (e = hb.filter(d, e)),
			e = this.length > 1 && !Rb[a] ? hb.unique(e) : e,
			this.length > 1 && Ob.test(a) && (e = e.reverse()),
			this.pushStack(e)
		}
	}),
	hb.extend({
		filter: function(a, b, c) {
			return c && (a = ":not(" + a + ")"),
			1 === b.length ? hb.find.matchesSelector(b[0], a) ? [b[0]] : [] : hb.find.matches(a, b)
		},
		dir: function(a, c, d) {
			for (var e = [], f = a[c]; f && 9 !== f.nodeType && (d === b || 1 !== f.nodeType || !hb(f).is(d));) 1 === f.nodeType && e.push(f),
			f = f[c];
			return e
		},
		sibling: function(a, b) {
			for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
			return c
		}
	});
	var Sb = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
	Tb = / jQuery\d+="(?:null|\d+)"/g,
	Ub = RegExp("<(?:" + Sb + ")[\\s/>]", "i"),
	Vb = /^\s+/,
	Wb = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
	Xb = /<([\w:]+)/,
	Yb = /<tbody/i,
	Zb = /<|&#?\w+;/,
	$b = /<(?:script|style|link)/i,
	_b = /^(?:checkbox|radio)$/i,
	ac = /checked\s*(?:[^=]|=\s*.checked.)/i,
	bc = /^$|\/(?:java|ecma)script/i,
	cc = /^true\/(.*)/,
	dc = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
	ec = {
		option: [1, "<select multiple='multiple'>", "</select>"],
		legend: [1, "<fieldset>", "</fieldset>"],
		area: [1, "<map>", "</map>"],
		param: [1, "<object>", "</object>"],
		thead: [1, "<table>", "</table>"],
		tr: [2, "<table><tbody>", "</tbody></table>"],
		col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
		td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
		_default: hb.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
	},
	fc = m(V),
	gc = fc.appendChild(V.createElement("div"));
	ec.optgroup = ec.option,
	ec.tbody = ec.tfoot = ec.colgroup = ec.caption = ec.thead,
	ec.th = ec.td,
	hb.fn.extend({
		text: function(a) {
			return hb.access(this,
			function(a) {
				return a === b ? hb.text(this) : this.empty().append((this[0] && this[0].ownerDocument || V).createTextNode(a))
			},
			null, a, arguments.length)
		},
		wrapAll: function(a) {
			if (hb.isFunction(a)) return this.each(function(b) {
				hb(this).wrapAll(a.call(this, b))
			});
			if (this[0]) {
				var b = hb(a, this[0].ownerDocument).eq(0).clone(!0);
				this[0].parentNode && b.insertBefore(this[0]),
				b.map(function() {
					for (var a = this; a.firstChild && 1 === a.firstChild.nodeType;) a = a.firstChild;
					return a
				}).append(this)
			}
			return this
		},
		wrapInner: function(a) {
			return this.each(hb.isFunction(a) ?
			function(b) {
				hb(this).wrapInner(a.call(this, b))
			}: function() {
				var b = hb(this),
				c = b.contents();
				c.length ? c.wrapAll(a) : b.append(a)
			})
		},
		wrap: function(a) {
			var b = hb.isFunction(a);
			return this.each(function(c) {
				hb(this).wrapAll(b ? a.call(this, c) : a)
			})
		},
		unwrap: function() {
			return this.parent().each(function() {
				hb.nodeName(this, "body") || hb(this).replaceWith(this.childNodes)
			}).end()
		},
		append: function() {
			return this.domManip(arguments, !0,
			function(a) { (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.appendChild(a)
			})
		},
		prepend: function() {
			return this.domManip(arguments, !0,
			function(a) { (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.insertBefore(a, this.firstChild)
			})
		},
		before: function() {
			return this.domManip(arguments, !1,
			function(a) {
				this.parentNode && this.parentNode.insertBefore(a, this)
			})
		},
		after: function() {
			return this.domManip(arguments, !1,
			function(a) {
				this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
			})
		},
		remove: function(a, b) {
			for (var c, d = 0; null != (c = this[d]); d++)(!a || hb.filter(a, [c]).length > 0) && (b || 1 !== c.nodeType || hb.cleanData(t(c)), c.parentNode && (b && hb.contains(c.ownerDocument, c) && q(t(c, "script")), c.parentNode.removeChild(c)));
			return this
		},
		empty: function() {
			for (var a, b = 0; null != (a = this[b]); b++) {
				for (1 === a.nodeType && hb.cleanData(t(a, !1)); a.firstChild;) a.removeChild(a.firstChild);
				a.options && hb.nodeName(a, "select") && (a.options.length = 0)
			}
			return this
		},
		clone: function(a, b) {
			return a = null == a ? !1 : a,
			b = null == b ? a: b,
			this.map(function() {
				return hb.clone(this, a, b)
			})
		},
		html: function(a) {
			return hb.access(this,
			function(a) {
				var c = this[0] || {},
				d = 0,
				e = this.length;
				if (a === b) return 1 === c.nodeType ? c.innerHTML.replace(Tb, "") : b;
				if (! ("string" != typeof a || $b.test(a) || !hb.support.htmlSerialize && Ub.test(a) || !hb.support.leadingWhitespace && Vb.test(a) || ec[(Xb.exec(a) || ["", ""])[1].toLowerCase()])) {
					a = a.replace(Wb, "<$1></$2>");
					try {
						for (; e > d; d++) c = this[d] || {},
						1 === c.nodeType && (hb.cleanData(t(c, !1)), c.innerHTML = a);
						c = 0
					} catch(f) {}
				}
				c && this.empty().append(a)
			},
			null, a, arguments.length)
		},
		replaceWith: function(a) {
			var b = hb.isFunction(a);
			return b || "string" == typeof a || (a = hb(a).not(this).detach()),
			this.domManip([a], !0,
			function(a) {
				var b = this.nextSibling,
				c = this.parentNode; (c && 1 === this.nodeType || 11 === this.nodeType) && (hb(this).remove(), b ? b.parentNode.insertBefore(a, b) : c.appendChild(a))
			})
		},
		detach: function(a) {
			return this.remove(a, !0)
		},
		domManip: function(a, c, d) {
			a = ab.apply([], a);
			var e, f, g, h, i, j, k = 0,
			l = this.length,
			m = this,
			q = l - 1,
			r = a[0],
			s = hb.isFunction(r);
			if (s || !(1 >= l || "string" != typeof r || hb.support.checkClone) && ac.test(r)) return this.each(function(e) {
				var f = m.eq(e);
				s && (a[0] = r.call(this, e, c ? f.html() : b)),
				f.domManip(a, c, d)
			});
			if (l && (e = hb.buildFragment(a, this[0].ownerDocument, !1, this), f = e.firstChild, 1 === e.childNodes.length && (e = f), f)) {
				for (c = c && hb.nodeName(f, "tr"), g = hb.map(t(e, "script"), o), h = g.length; l > k; k++) i = e,
				k !== q && (i = hb.clone(i, !0, !0), h && hb.merge(g, t(i, "script"))),
				d.call(c && hb.nodeName(this[k], "table") ? n(this[k], "tbody") : this[k], i, k);
				if (h) for (j = g[g.length - 1].ownerDocument, hb.map(g, p), k = 0; h > k; k++) i = g[k],
				bc.test(i.type || "") && !hb._data(i, "globalEval") && hb.contains(j, i) && (i.src ? hb.ajax({
					url: i.src,
					type: "GET",
					dataType: "script",
					async: !1,
					global: !1,
					"throws": !0
				}) : hb.globalEval((i.text || i.textContent || i.innerHTML || "").replace(dc, "")));
				e = f = null
			}
			return this
		}
	}),
	hb.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	},
	function(a, b) {
		hb.fn[a] = function(a) {
			for (var c, d = 0,
			e = [], f = hb(a), g = f.length - 1; g >= d; d++) c = d === g ? this: this.clone(!0),
			hb(f[d])[b](c),
			bb.apply(e, c.get());
			return this.pushStack(e)
		}
	}),
	hb.extend({
		clone: function(a, b, c) {
			var d, e, f, g, h, i = hb.contains(a.ownerDocument, a);
			if (hb.support.html5Clone || hb.isXMLDoc(a) || !Ub.test("<" + a.nodeName + ">") ? h = a.cloneNode(!0) : (gc.innerHTML = a.outerHTML, gc.removeChild(h = gc.firstChild)), !(hb.support.noCloneEvent && hb.support.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || hb.isXMLDoc(a))) for (d = t(h), e = t(a), g = 0; null != (f = e[g]); ++g) d[g] && s(f, d[g]);
			if (b) if (c) for (e = e || t(a), d = d || t(h), g = 0; null != (f = e[g]); g++) r(f, d[g]);
			else r(a, h);
			return d = t(h, "script"),
			d.length > 0 && q(d, !i && t(a, "script")),
			d = e = f = null,
			h
		},
		buildFragment: function(a, b, c, d) {
			for (var e, f, g, h, i, j, k, l = a.length,
			n = m(b), o = [], p = 0; l > p; p++) if (f = a[p], f || 0 === f) if ("object" === hb.type(f)) hb.merge(o, f.nodeType ? [f] : f);
			else if (Zb.test(f)) {
				for (h = h || n.appendChild(b.createElement("div")), g = (Xb.exec(f) || ["", ""])[1].toLowerCase(), i = ec[g] || ec._default, h.innerHTML = i[1] + f.replace(Wb, "<$1></$2>") + i[2], k = i[0]; k--;) h = h.lastChild;
				if (!hb.support.leadingWhitespace && Vb.test(f) && o.push(b.createTextNode(Vb.exec(f)[0])), !hb.support.tbody) for (f = "table" !== g || Yb.test(f) ? "<table>" !== i[1] || Yb.test(f) ? 0 : h: h.firstChild, k = f && f.childNodes.length; k--;) hb.nodeName(j = f.childNodes[k], "tbody") && !j.childNodes.length && f.removeChild(j);
				for (hb.merge(o, h.childNodes), h.textContent = ""; h.firstChild;) h.removeChild(h.firstChild);
				h = n.lastChild
			} else o.push(b.createTextNode(f));
			for (h && n.removeChild(h), hb.support.appendChecked || hb.grep(t(o, "input"), u), p = 0; f = o[p++];) if ((!d || -1 === hb.inArray(f, d)) && (e = hb.contains(f.ownerDocument, f), h = t(n.appendChild(f), "script"), e && q(h), c)) for (k = 0; f = h[k++];) bc.test(f.type || "") && c.push(f);
			return h = null,
			n
		},
		cleanData: function(a, c) {
			for (var d, e, f, g, h = 0,
			i = hb.expando,
			j = hb.cache,
			k = hb.support.deleteExpando,
			l = hb.event.special; null != (f = a[h]); h++) if ((c || hb.acceptData(f)) && (e = f[i], d = e && j[e])) {
				if (d.events) for (g in d.events) l[g] ? hb.event.remove(f, g) : hb.removeEvent(f, g, d.handle);
				j[e] && (delete j[e], k ? delete f[i] : f.removeAttribute !== b ? f.removeAttribute(i) : f[i] = null, $.push(e))
			}
		}
	});
	var hc, ic, jc, kc = /alpha\([^)]*\)/i,
	lc = /opacity\s*=\s*([^)]*)/,
	mc = /^(top|right|bottom|left)$/,
	nc = /^(none|table(?!-c[ea]).+)/,
	oc = /^margin/,
	pc = RegExp("^(" + ib + ")(.*)$", "i"),
	qc = RegExp("^(" + ib + ")(?!px)[a-z%]+$", "i"),
	rc = RegExp("^([+-])=(" + ib + ")", "i"),
	sc = {
		BODY: "block"
	},
	tc = {
		position: "absolute",
		visibility: "hidden",
		display: "block"
	},
	uc = {
		letterSpacing: 0,
		fontWeight: 400
	},
	vc = ["Top", "Right", "Bottom", "Left"],
	wc = ["Webkit", "O", "Moz", "ms"];
	hb.fn.extend({
		css: function(a, c) {
			return hb.access(this,
			function(a, c, d) {
				var e, f, g = {},
				h = 0;
				if (hb.isArray(c)) {
					for (e = ic(a), f = c.length; f > h; h++) g[c[h]] = hb.css(a, c[h], !1, e);
					return g
				}
				return d !== b ? hb.style(a, c, d) : hb.css(a, c)
			},
			a, c, arguments.length > 1)
		},
		show: function() {
			return x(this, !0)
		},
		hide: function() {
			return x(this)
		},
		toggle: function(a) {
			var b = "boolean" == typeof a;
			return this.each(function() { (b ? a: w(this)) ? hb(this).show() : hb(this).hide()
			})
		}
	}),
	hb.extend({
		cssHooks: {
			opacity: {
				get: function(a, b) {
					if (b) {
						var c = hc(a, "opacity");
						return "" === c ? "1": c
					}
				}
			}
		},
		cssNumber: {
			columnCount: !0,
			fillOpacity: !0,
			fontWeight: !0,
			lineHeight: !0,
			opacity: !0,
			orphans: !0,
			widows: !0,
			zIndex: !0,
			zoom: !0
		},
		cssProps: {
			"float": hb.support.cssFloat ? "cssFloat": "styleFloat"
		},
		style: function(a, c, d, e) {
			if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
				var f, g, h, i = hb.camelCase(c),
				j = a.style;
				if (c = hb.cssProps[i] || (hb.cssProps[i] = v(j, i)), h = hb.cssHooks[c] || hb.cssHooks[i], d === b) return h && "get" in h && (f = h.get(a, !1, e)) !== b ? f: j[c];
				if (g = typeof d, "string" === g && (f = rc.exec(d)) && (d = (f[1] + 1) * f[2] + parseFloat(hb.css(a, c)), g = "number"), !(null == d || "number" === g && isNaN(d) || ("number" !== g || hb.cssNumber[i] || (d += "px"), hb.support.clearCloneStyle || "" !== d || 0 !== c.indexOf("background") || (j[c] = "inherit"), h && "set" in h && (d = h.set(a, d, e)) === b))) try {
					j[c] = d
				} catch(k) {}
			}
		},
		css: function(a, c, d, e) {
			var f, g, h, i = hb.camelCase(c);
			return c = hb.cssProps[i] || (hb.cssProps[i] = v(a.style, i)),
			h = hb.cssHooks[c] || hb.cssHooks[i],
			h && "get" in h && (f = h.get(a, !0, d)),
			f === b && (f = hc(a, c, e)),
			"normal" === f && c in uc && (f = uc[c]),
			d ? (g = parseFloat(f), d === !0 || hb.isNumeric(g) ? g || 0 : f) : f
		},
		swap: function(a, b, c, d) {
			var e, f, g = {};
			for (f in b) g[f] = a.style[f],
			a.style[f] = b[f];
			e = c.apply(a, d || []);
			for (f in b) a.style[f] = g[f];
			return e
		}
	}),
	a.getComputedStyle ? (ic = function(b) {
		return a.getComputedStyle(b, null)
	},
	hc = function(a, c, d) {
		var e, f, g, h = d || ic(a),
		i = h ? h.getPropertyValue(c) || h[c] : b,
		j = a.style;
		return h && ("" !== i || hb.contains(a.ownerDocument, a) || (i = hb.style(a, c)), qc.test(i) && oc.test(c) && (e = j.width, f = j.minWidth, g = j.maxWidth, j.minWidth = j.maxWidth = j.width = i, i = h.width, j.width = e, j.minWidth = f, j.maxWidth = g)),
		i
	}) : V.documentElement.currentStyle && (ic = function(a) {
		return a.currentStyle
	},
	hc = function(a, c, d) {
		var e, f, g, h = d || ic(a),
		i = h ? h[c] : b,
		j = a.style;
		return null == i && j && j[c] && (i = j[c]),
		qc.test(i) && !mc.test(c) && (e = j.left, f = a.runtimeStyle, g = f && f.left, g && (f.left = a.currentStyle.left), j.left = "fontSize" === c ? "1em": i, i = j.pixelLeft + "px", j.left = e, g && (f.left = g)),
		"" === i ? "auto": i
	}),
	hb.each(["height", "width"],
	function(a, c) {
		hb.cssHooks[c] = {
			get: function(a, d, e) {
				return d ? 0 === a.offsetWidth && nc.test(hb.css(a, "display")) ? hb.swap(a, tc,
				function() {
					return A(a, c, e)
				}) : A(a, c, e) : b
			},
			set: function(a, b, d) {
				var e = d && ic(a);
				return y(a, b, d ? z(a, c, d, hb.support.boxSizing && "border-box" === hb.css(a, "boxSizing", !1, e), e) : 0)
			}
		}
	}),
	hb.support.opacity || (hb.cssHooks.opacity = {
		get: function(a, b) {
			return lc.test((b && a.currentStyle ? a.currentStyle.filter: a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "": b ? "1": ""
		},
		set: function(a, b) {
			var c = a.style,
			d = a.currentStyle,
			e = hb.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")": "",
			f = d && d.filter || c.filter || "";
			c.zoom = 1,
			(b >= 1 || "" === b) && "" === hb.trim(f.replace(kc, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = kc.test(f) ? f.replace(kc, e) : f + " " + e)
		}
	}),
	hb(function() {
		hb.support.reliableMarginRight || (hb.cssHooks.marginRight = {
			get: function(a, c) {
				return c ? hb.swap(a, {
					display: "inline-block"
				},
				hc, [a, "marginRight"]) : b
			}
		}),
		!hb.support.pixelPosition && hb.fn.position && hb.each(["top", "left"],
		function(a, c) {
			hb.cssHooks[c] = {
				get: function(a, d) {
					return d ? (d = hc(a, c), qc.test(d) ? hb(a).position()[c] + "px": d) : b
				}
			}
		})
	}),
	hb.expr && hb.expr.filters && (hb.expr.filters.hidden = function(a) {
		return 0 === a.offsetWidth && 0 === a.offsetHeight || !hb.support.reliableHiddenOffsets && "none" === (a.style && a.style.display || hb.css(a, "display"))
	},
	hb.expr.filters.visible = function(a) {
		return ! hb.expr.filters.hidden(a)
	}),
	hb.each({
		margin: "",
		padding: "",
		border: "Width"
	},
	function(a, b) {
		hb.cssHooks[a + b] = {
			expand: function(c) {
				for (var d = 0,
				e = {},
				f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + vc[d] + b] = f[d] || f[d - 2] || f[0];
				return e
			}
		},
		oc.test(a) || (hb.cssHooks[a + b].set = y)
	});
	var xc = /%20/g,
	yc = /\[\]$/,
	zc = /\r?\n/g,
	Ac = /^(?:submit|button|image|reset)$/i,
	Bc = /^(?:input|select|textarea|keygen)/i;
	hb.fn.extend({
		serialize: function() {
			return hb.param(this.serializeArray())
		},
		serializeArray: function() {
			return this.map(function() {
				var a = hb.prop(this, "elements");
				return a ? hb.makeArray(a) : this
			}).filter(function() {
				var a = this.type;
				return this.name && !hb(this).is(":disabled") && Bc.test(this.nodeName) && !Ac.test(a) && (this.checked || !_b.test(a))
			}).map(function(a, b) {
				var c = hb(this).val();
				return null == c ? null: hb.isArray(c) ? hb.map(c,
				function(a) {
					return {
						name: b.name,
						value: a.replace(zc, "\r\n")
					}
				}) : {
					name: b.name,
					value: c.replace(zc, "\r\n")
				}
			}).get()
		}
	}),
	hb.param = function(a, c) {
		var d, e = [],
		f = function(a, b) {
			b = hb.isFunction(b) ? b() : null == b ? "": b,
			e[e.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
		};
		if (c === b && (c = hb.ajaxSettings && hb.ajaxSettings.traditional), hb.isArray(a) || a.jquery && !hb.isPlainObject(a)) hb.each(a,
		function() {
			f(this.name, this.value)
		});
		else for (d in a) D(d, a[d], c, f);
		return e.join("&").replace(xc, "+")
	};
	var Cc, Dc, Ec = hb.now(),
	Fc = /\?/,
	Gc = /#.*$/,
	Hc = /([?&])_=[^&]*/,
	Ic = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
	Jc = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	Kc = /^(?:GET|HEAD)$/,
	Lc = /^\/\//,
	Mc = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
	Nc = hb.fn.load,
	Oc = {},
	Pc = {},
	Qc = "*/".concat("*");
	try {
		Dc = W.href
	} catch(Rc) {
		Dc = V.createElement("a"),
		Dc.href = "",
		Dc = Dc.href
	}
	Cc = Mc.exec(Dc.toLowerCase()) || [],
	hb.fn.load = function(a, c, d) {
		if ("string" != typeof a && Nc) return Nc.apply(this, arguments);
		var e, f, g, h = this,
		i = a.indexOf(" ");
		return i >= 0 && (e = a.slice(i, a.length), a = a.slice(0, i)),
		hb.isFunction(c) ? (d = c, c = b) : c && "object" == typeof c && (f = "POST"),
		h.length > 0 && hb.ajax({
			url: a,
			type: f,
			dataType: "html",
			data: c
		}).done(function(a) {
			g = arguments,
			h.html(e ? hb("<div>").append(hb.parseHTML(a)).find(e) : a)
		}).complete(d &&
		function(a, b) {
			h.each(d, g || [a.responseText, b, a])
		}),
		this
	},
	hb.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"],
	function(a, b) {
		hb.fn[b] = function(a) {
			return this.on(b, a)
		}
	}),
	hb.each(["get", "post"],
	function(a, c) {
		hb[c] = function(a, d, e, f) {
			return hb.isFunction(d) && (f = f || e, e = d, d = b),
			hb.ajax({
				url: a,
				type: c,
				dataType: f,
				data: d,
				success: e
			})
		}
	}),
	hb.extend({
		active: 0,
		lastModified: {},
		etag: {},
		ajaxSettings: {
			url: Dc,
			type: "GET",
			isLocal: Jc.test(Cc[1]),
			global: !0,
			processData: !0,
			async: !0,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			accepts: {
				"*": Qc,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
			contents: {
				xml: /xml/,
				html: /html/,
				json: /json/
			},
			responseFields: {
				xml: "responseXML",
				text: "responseText"
			},
			converters: {
				"* text": a.String,
				"text html": !0,
				"text json": hb.parseJSON,
				"text xml": hb.parseXML
			},
			flatOptions: {
				url: !0,
				context: !0
			}
		},
		ajaxSetup: function(a, b) {
			return b ? G(G(a, hb.ajaxSettings), b) : G(hb.ajaxSettings, a)
		},
		ajaxPrefilter: E(Oc),
		ajaxTransport: E(Pc),
		ajax: function(a, c) {
			function d(a, c, d, h) {
				var j, l, s, t, v, x = c;
				2 !== u && (u = 2, i && clearTimeout(i), e = b, g = h || "", w.readyState = a > 0 ? 4 : 0, d && (t = H(m, w, d)), a >= 200 && 300 > a || 304 === a ? (m.ifModified && (v = w.getResponseHeader("Last-Modified"), v && (hb.lastModified[f] = v), v = w.getResponseHeader("etag"), v && (hb.etag[f] = v)), 304 === a ? (j = !0, x = "notmodified") : (j = I(m, t), x = j.state, l = j.data, s = j.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), w.status = a, w.statusText = (c || x) + "", j ? p.resolveWith(n, [l, x, w]) : p.rejectWith(n, [w, x, s]), w.statusCode(r), r = b, k && o.trigger(j ? "ajaxSuccess": "ajaxError", [w, m, j ? l: s]), q.fireWith(n, [w, x]), k && (o.trigger("ajaxComplete", [w, m]), --hb.active || hb.event.trigger("ajaxStop")))
			}
			"object" == typeof a && (c = a, a = b),
			c = c || {};
			var e, f, g, h, i, j, k, l, m = hb.ajaxSetup({},
			c),
			n = m.context || m,
			o = m.context && (n.nodeType || n.jquery) ? hb(n) : hb.event,
			p = hb.Deferred(),
			q = hb.Callbacks("once memory"),
			r = m.statusCode || {},
			s = {},
			t = {},
			u = 0,
			v = "canceled",
			w = {
				readyState: 0,
				getResponseHeader: function(a) {
					var b;
					if (2 === u) {
						if (!h) for (h = {}; b = Ic.exec(g);) h[b[1].toLowerCase()] = b[2];
						b = h[a.toLowerCase()]
					}
					return null == b ? null: b
				},
				getAllResponseHeaders: function() {
					return 2 === u ? g: null
				},
				setRequestHeader: function(a, b) {
					var c = a.toLowerCase();
					return u || (a = t[c] = t[c] || a, s[a] = b),
					this
				},
				overrideMimeType: function(a) {
					return u || (m.mimeType = a),
					this
				},
				statusCode: function(a) {
					var b;
					if (a) if (2 > u) for (b in a) r[b] = [r[b], a[b]];
					else w.always(a[w.status]);
					return this
				},
				abort: function(a) {
					var b = a || v;
					return e && e.abort(b),
					d(0, b),
					this
				}
			};
			if (p.promise(w).complete = q.add, w.success = w.done, w.error = w.fail, m.url = ((a || m.url || Dc) + "").replace(Gc, "").replace(Lc, Cc[1] + "//"), m.type = c.method || c.type || m.method || m.type, m.dataTypes = hb.trim(m.dataType || "*").toLowerCase().match(jb) || [""], null == m.crossDomain && (j = Mc.exec(m.url.toLowerCase()), m.crossDomain = !(!j || j[1] === Cc[1] && j[2] === Cc[2] && (j[3] || ("http:" === j[1] ? 80 : 443)) == (Cc[3] || ("http:" === Cc[1] ? 80 : 443)))), m.data && m.processData && "string" != typeof m.data && (m.data = hb.param(m.data, m.traditional)), F(Oc, m, c, w), 2 === u) return w;
			k = m.global,
			k && 0 === hb.active++&&hb.event.trigger("ajaxStart"),
			m.type = m.type.toUpperCase(),
			m.hasContent = !Kc.test(m.type),
			f = m.url,
			m.hasContent || (m.data && (f = m.url += (Fc.test(f) ? "&": "?") + m.data, delete m.data), m.cache === !1 && (m.url = Hc.test(f) ? f.replace(Hc, "$1_=" + Ec++) : f + (Fc.test(f) ? "&": "?") + "_=" + Ec++)),
			m.ifModified && (hb.lastModified[f] && w.setRequestHeader("If-Modified-Since", hb.lastModified[f]), hb.etag[f] && w.setRequestHeader("If-None-Match", hb.etag[f])),
			(m.data && m.hasContent && m.contentType !== !1 || c.contentType) && w.setRequestHeader("Content-Type", m.contentType),
			w.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + Qc + "; q=0.01": "") : m.accepts["*"]);
			for (l in m.headers) w.setRequestHeader(l, m.headers[l]);
			if (m.beforeSend && (m.beforeSend.call(n, w, m) === !1 || 2 === u)) return w.abort();
			v = "abort";
			for (l in {
				success: 1,
				error: 1,
				complete: 1
			}) w[l](m[l]);
			if (e = F(Pc, m, c, w)) {
				w.readyState = 1,
				k && o.trigger("ajaxSend", [w, m]),
				m.async && m.timeout > 0 && (i = setTimeout(function() {
					w.abort("timeout")
				},
				m.timeout));
				try {
					u = 1,
					e.send(s, d)
				} catch(x) {
					if (! (2 > u)) throw x;
					d( - 1, x)
				}
			} else d( - 1, "No Transport");
			return w
		},
		getScript: function(a, c) {
			return hb.get(a, b, c, "script")
		},
		getJSON: function(a, b, c) {
			return hb.get(a, b, c, "json")
		}
	}),
	hb.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /(?:java|ecma)script/
		},
		converters: {
			"text script": function(a) {
				return hb.globalEval(a),
				a
			}
		}
	}),
	hb.ajaxPrefilter("script",
	function(a) {
		a.cache === b && (a.cache = !1),
		a.crossDomain && (a.type = "GET", a.global = !1)
	}),
	hb.ajaxTransport("script",
	function(a) {
		if (a.crossDomain) {
			var c, d = V.head || hb("head")[0] || V.documentElement;
			return {
				send: function(b, e) {
					c = V.createElement("script"),
					c.async = !0,
					a.scriptCharset && (c.charset = a.scriptCharset),
					c.src = a.url,
					c.onload = c.onreadystatechange = function(a, b) { (b || !c.readyState || /loaded|complete/.test(c.readyState)) && (c.onload = c.onreadystatechange = null, c.parentNode && c.parentNode.removeChild(c), c = null, b || e(200, "success"))
					},
					d.insertBefore(c, d.firstChild)
				},
				abort: function() {
					c && c.onload(b, !0)
				}
			}
		}
	});
	var Sc = [],
	Tc = /(=)\?(?=&|$)|\?\?/;
	hb.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function() {
			var a = Sc.pop() || hb.expando + "_" + Ec++;
			return this[a] = !0,
			a
		}
	}),
	hb.ajaxPrefilter("json jsonp",
	function(c, d, e) {
		var f, g, h, i = c.jsonp !== !1 && (Tc.test(c.url) ? "url": "string" == typeof c.data && !(c.contentType || "").indexOf("application/x-www-form-urlencoded") && Tc.test(c.data) && "data");
		return i || "jsonp" === c.dataTypes[0] ? (f = c.jsonpCallback = hb.isFunction(c.jsonpCallback) ? c.jsonpCallback() : c.jsonpCallback, i ? c[i] = c[i].replace(Tc, "$1" + f) : c.jsonp !== !1 && (c.url += (Fc.test(c.url) ? "&": "?") + c.jsonp + "=" + f), c.converters["script json"] = function() {
			return h || hb.error(f + " was not called"),
			h[0]
		},
		c.dataTypes[0] = "json", g = a[f], a[f] = function() {
			h = arguments
		},
		e.always(function() {
			a[f] = g,
			c[f] && (c.jsonpCallback = d.jsonpCallback, Sc.push(f)),
			h && hb.isFunction(g) && g(h[0]),
			h = g = b
		}), "script") : b
	});
	var Uc, Vc, Wc = 0,
	Xc = a.ActiveXObject &&
	function() {
		var a;
		for (a in Uc) Uc[a](b, !0)
	};
	hb.ajaxSettings.xhr = a.ActiveXObject ?
	function() {
		return ! this.isLocal && J() || K()
	}: J,
	Vc = hb.ajaxSettings.xhr(),
	hb.support.cors = !!Vc && "withCredentials" in Vc,
	Vc = hb.support.ajax = !!Vc,
	Vc && hb.ajaxTransport(function(c) {
		if (!c.crossDomain || hb.support.cors) {
			var d;
			return {
				send: function(e, f) {
					var g, h, i = c.xhr();
					if (c.username ? i.open(c.type, c.url, c.async, c.username, c.password) : i.open(c.type, c.url, c.async), c.xhrFields) for (h in c.xhrFields) i[h] = c.xhrFields[h];
					c.mimeType && i.overrideMimeType && i.overrideMimeType(c.mimeType),
					c.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
					try {
						for (h in e) i.setRequestHeader(h, e[h])
					} catch(j) {}
					i.send(c.hasContent && c.data || null),
					d = function(a, e) {
						var h, j, k, l, m;
						try {
							if (d && (e || 4 === i.readyState)) if (d = b, g && (i.onreadystatechange = hb.noop, Xc && delete Uc[g]), e) 4 !== i.readyState && i.abort();
							else {
								l = {},
								h = i.status,
								m = i.responseXML,
								k = i.getAllResponseHeaders(),
								m && m.documentElement && (l.xml = m),
								"string" == typeof i.responseText && (l.text = i.responseText);
								try {
									j = i.statusText
								} catch(n) {
									j = ""
								}
								h || !c.isLocal || c.crossDomain ? 1223 === h && (h = 204) : h = l.text ? 200 : 404
							}
						} catch(o) {
							e || f( - 1, o)
						}
						l && f(h, j, l, k)
					},
					c.async ? 4 === i.readyState ? setTimeout(d) : (g = ++Wc, Xc && (Uc || (Uc = {},
					hb(a).unload(Xc)), Uc[g] = d), i.onreadystatechange = d) : d()
				},
				abort: function() {
					d && d(b, !0)
				}
			}
		}
	});
	var Yc, Zc, $c = /^(?:toggle|show|hide)$/,
	_c = RegExp("^(?:([+-])=|)(" + ib + ")([a-z%]*)$", "i"),
	ad = /queueHooks$/,
	bd = [P],
	cd = {
		"*": [function(a, b) {
			var c, d, e = this.createTween(a, b),
			f = _c.exec(b),
			g = e.cur(),
			h = +g || 0,
			i = 1,
			j = 20;
			if (f) {
				if (c = +f[2], d = f[3] || (hb.cssNumber[a] ? "": "px"), "px" !== d && h) {
					h = hb.css(e.elem, a, !0) || c || 1;
					do i = i || ".5",
					h /= i,
					hb.style(e.elem, a, h + d);
					while (i !== (i = e.cur() / g) && 1 !== i && --j)
				}
				e.unit = d,
				e.start = h,
				e.end = f[1] ? h + (f[1] + 1) * c: c
			}
			return e
		}]
	};
	hb.Animation = hb.extend(N, {
		tweener: function(a, b) {
			hb.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
			for (var c, d = 0,
			e = a.length; e > d; d++) c = a[d],
			cd[c] = cd[c] || [],
			cd[c].unshift(b)
		},
		prefilter: function(a, b) {
			b ? bd.unshift(a) : bd.push(a)
		}
	}),
	hb.Tween = Q,
	Q.prototype = {
		constructor: Q,
		init: function(a, b, c, d, e, f) {
			this.elem = a,
			this.prop = c,
			this.easing = e || "swing",
			this.options = b,
			this.start = this.now = this.cur(),
			this.end = d,
			this.unit = f || (hb.cssNumber[c] ? "": "px")
		},
		cur: function() {
			var a = Q.propHooks[this.prop];
			return a && a.get ? a.get(this) : Q.propHooks._default.get(this)
		},
		run: function(a) {
			var b, c = Q.propHooks[this.prop];
			return this.pos = b = this.options.duration ? hb.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a,
			this.now = (this.end - this.start) * b + this.start,
			this.options.step && this.options.step.call(this.elem, this.now, this),
			c && c.set ? c.set(this) : Q.propHooks._default.set(this),
			this
		}
	},
	Q.prototype.init.prototype = Q.prototype,
	Q.propHooks = {
		_default: {
			get: function(a) {
				var b;
				return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = hb.css(a.elem, a.prop, "auto"), b && "auto" !== b ? b: 0) : a.elem[a.prop]
			},
			set: function(a) {
				hb.fx.step[a.prop] ? hb.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[hb.cssProps[a.prop]] || hb.cssHooks[a.prop]) ? hb.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
			}
		}
	},
	Q.propHooks.scrollTop = Q.propHooks.scrollLeft = {
		set: function(a) {
			a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
		}
	},
	hb.each(["toggle", "show", "hide"],
	function(a, b) {
		var c = hb.fn[b];
		hb.fn[b] = function(a, d, e) {
			return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(R(b, !0), a, d, e)
		}
	}),
	hb.fn.extend({
		fadeTo: function(a, b, c, d) {
			return this.filter(w).css("opacity", 0).show().end().animate({
				opacity: b
			},
			a, c, d)
		},
		animate: function(a, b, c, d) {
			var e = hb.isEmptyObject(a),
			f = hb.speed(b, c, d),
			g = function() {
				var b = N(this, hb.extend({},
				a), f);
				g.finish = function() {
					b.stop(!0)
				},
				(e || hb._data(this, "finish")) && b.stop(!0)
			};
			return g.finish = g,
			e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
		},
		stop: function(a, c, d) {
			var e = function(a) {
				var b = a.stop;
				delete a.stop,
				b(d)
			};
			return "string" != typeof a && (d = c, c = a, a = b),
			c && a !== !1 && this.queue(a || "fx", []),
			this.each(function() {
				var b = !0,
				c = null != a && a + "queueHooks",
				f = hb.timers,
				g = hb._data(this);
				if (c) g[c] && g[c].stop && e(g[c]);
				else for (c in g) g[c] && g[c].stop && ad.test(c) && e(g[c]);
				for (c = f.length; c--;) f[c].elem !== this || null != a && f[c].queue !== a || (f[c].anim.stop(d), b = !1, f.splice(c, 1)); (b || !d) && hb.dequeue(this, a)
			})
		},
		finish: function(a) {
			return a !== !1 && (a = a || "fx"),
			this.each(function() {
				var b, c = hb._data(this),
				d = c[a + "queue"],
				e = c[a + "queueHooks"],
				f = hb.timers,
				g = d ? d.length: 0;
				for (c.finish = !0, hb.queue(this, a, []), e && e.cur && e.cur.finish && e.cur.finish.call(this), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
				for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
				delete c.finish
			})
		}
	}),
	hb.each({
		slideDown: R("show"),
		slideUp: R("hide"),
		slideToggle: R("toggle"),
		fadeIn: {
			opacity: "show"
		},
		fadeOut: {
			opacity: "hide"
		},
		fadeToggle: {
			opacity: "toggle"
		}
	},
	function(a, b) {
		hb.fn[a] = function(a, c, d) {
			return this.animate(b, a, c, d)
		}
	}),
	hb.speed = function(a, b, c) {
		var d = a && "object" == typeof a ? hb.extend({},
		a) : {
			complete: c || !c && b || hb.isFunction(a) && a,
			duration: a,
			easing: c && b || b && !hb.isFunction(b) && b
		};
		return d.duration = hb.fx.off ? 0 : "number" == typeof d.duration ? d.duration: d.duration in hb.fx.speeds ? hb.fx.speeds[d.duration] : hb.fx.speeds._default,
		(null == d.queue || d.queue === !0) && (d.queue = "fx"),
		d.old = d.complete,
		d.complete = function() {
			hb.isFunction(d.old) && d.old.call(this),
			d.queue && hb.dequeue(this, d.queue)
		},
		d
	},
	hb.easing = {
		linear: function(a) {
			return a
		},
		swing: function(a) {
			return.5 - Math.cos(a * Math.PI) / 2
		}
	},
	hb.timers = [],
	hb.fx = Q.prototype.init,
	hb.fx.tick = function() {
		var a, c = hb.timers,
		d = 0;
		for (Yc = hb.now(); c.length > d; d++) a = c[d],
		a() || c[d] !== a || c.splice(d--, 1);
		c.length || hb.fx.stop(),
		Yc = b
	},
	hb.fx.timer = function(a) {
		a() && hb.timers.push(a) && hb.fx.start()
	},
	hb.fx.interval = 13,
	hb.fx.start = function() {
		Zc || (Zc = setInterval(hb.fx.tick, hb.fx.interval))
	},
	hb.fx.stop = function() {
		clearInterval(Zc),
		Zc = null
	},
	hb.fx.speeds = {
		slow: 600,
		fast: 200,
		_default: 400
	},
	hb.fx.step = {},
	hb.expr && hb.expr.filters && (hb.expr.filters.animated = function(a) {
		return hb.grep(hb.timers,
		function(b) {
			return a === b.elem
		}).length
	}),
	hb.fn.offset = function(a) {
		if (arguments.length) return a === b ? this: this.each(function(b) {
			hb.offset.setOffset(this, a, b)
		});
		var c, d, e = {
			top: 0,
			left: 0
		},
		f = this[0],
		g = f && f.ownerDocument;
		return g ? (c = g.documentElement, hb.contains(c, f) ? (f.getBoundingClientRect !== b && (e = f.getBoundingClientRect()), d = S(g), {
			top: e.top + (d.pageYOffset || c.scrollTop) - (c.clientTop || 0),
			left: e.left + (d.pageXOffset || c.scrollLeft) - (c.clientLeft || 0)
		}) : e) : void 0
	},
	hb.offset = {
		setOffset: function(a, b, c) {
			var d = hb.css(a, "position");
			"static" === d && (a.style.position = "relative");
			var e, f, g = hb(a),
			h = g.offset(),
			i = hb.css(a, "top"),
			j = hb.css(a, "left"),
			k = ("absolute" === d || "fixed" === d) && hb.inArray("auto", [i, j]) > -1,
			l = {},
			m = {};
			k ? (m = g.position(), e = m.top, f = m.left) : (e = parseFloat(i) || 0, f = parseFloat(j) || 0),
			hb.isFunction(b) && (b = b.call(a, c, h)),
			null != b.top && (l.top = b.top - h.top + e),
			null != b.left && (l.left = b.left - h.left + f),
			"using" in b ? b.using.call(a, l) : g.css(l)
		}
	},
	hb.fn.extend({
		position: function() {
			if (this[0]) {
				var a, b, c = {
					top: 0,
					left: 0
				},
				d = this[0];
				return "fixed" === hb.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), hb.nodeName(a[0], "html") || (c = a.offset()), c.top += hb.css(a[0], "borderTopWidth", !0), c.left += hb.css(a[0], "borderLeftWidth", !0)),
				{
					top: b.top - c.top - hb.css(d, "marginTop", !0),
					left: b.left - c.left - hb.css(d, "marginLeft", !0)
				}
			}
		},
		offsetParent: function() {
			return this.map(function() {
				for (var a = this.offsetParent || V.documentElement; a && !hb.nodeName(a, "html") && "static" === hb.css(a, "position");) a = a.offsetParent;
				return a || V.documentElement
			})
		}
	}),
	hb.each({
		scrollLeft: "pageXOffset",
		scrollTop: "pageYOffset"
	},
	function(a, c) {
		var d = /Y/.test(c);
		hb.fn[a] = function(e) {
			return hb.access(this,
			function(a, e, f) {
				var g = S(a);
				return f === b ? g ? c in g ? g[c] : g.document.documentElement[e] : a[e] : (g ? g.scrollTo(d ? hb(g).scrollLeft() : f, d ? f: hb(g).scrollTop()) : a[e] = f, b)
			},
			a, e, arguments.length, null)
		}
	}),
	hb.each({
		Height: "height",
		Width: "width"
	},
	function(a, c) {
		hb.each({
			padding: "inner" + a,
			content: c,
			"": "outer" + a
		},
		function(d, e) {
			hb.fn[e] = function(e, f) {
				var g = arguments.length && (d || "boolean" != typeof e),
				h = d || (e === !0 || f === !0 ? "margin": "border");
				return hb.access(this,
				function(c, d, e) {
					var f;
					return hb.isWindow(c) ? c.document.documentElement["client" + a] : 9 === c.nodeType ? (f = c.documentElement, Math.max(c.body["scroll" + a], f["scroll" + a], c.body["offset" + a], f["offset" + a], f["client" + a])) : e === b ? hb.css(c, d, h) : hb.style(c, d, e, h)
				},
				c, g ? e: b, g, null)
			}
		})
	}),
	a.jQuery = a.$ = hb,
	"function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [],function() {return hb})
} (window),
function(a) {
},
$(window).resize(function() {

});

var isLocal = function() {
	return null != location.href.match(/localhost/) ? !0 : void 0
},
canvas,
ctx,
circles,
tick = 0,
numCircles = 1000;
if ($(window).width() < 750) var numCircles = 500;
if ($(window).width() < 350) var numCircles = 200;

var colors = [
	"#282b30",
	"#43645a",
	"#624243", 
	"#352b2c", 
	"#26322e", 
	"#3b3c3e", 
	"#1f2022", 
	"#4f7457", 
	"#272d2b", 
	"#4b4d4a", 
	"#27817b", 
	"#3c8d86", 
	"#4b5453", 
	"#273737",
	"#4f5d6a",
	"#FFF"],
randomColor = function() {
	return colors[Math.floor(Math.random() * colors.length)]
},
resize = window.resize = function() {
	canvas.height = $(window).height(),
	canvas.width = $(window).width()
};

$(window).load(function() {
	canvas = document.getElementById("canvas"),
	ctx = canvas.getContext("2d"),
	resize(),
	circles = [];
	for (var a = 0; numCircles > a; a++) {
		var b = Math.random() * canvas.width,
		c = Math.random() * canvas.height,
		d = new Circle(b, c, canvas.width, canvas.height);
		d.draw(),
		circles.push(d)
	}
	var e = function() {
		window.requestAnimFrame(e),
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		for (var a = 0; a < circles.length; a++) circles[a].frame()
	};
	window.requestAnimFrame = function() {
		return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
		function(a) {
			window.setTimeout(a, 1e3 / 60)
		}
	} (),
	e()
});
var Circle = function(a, b) {
	this.pos = [a, b],
	this.r = Math.random() + 0.2,
	this.c = randomColor(),
	this.v = [.05 * (Math.random() - .5), .05 * (Math.random() - .5)]
};
Circle.prototype.getBound = function(a) {
	return a ? canvas.height: canvas.width
};
var i;
Circle.prototype.frame = function() {
	for (i = 0; 2 > i; i++) this.pos[i] > this.getBound(i) - 10 ? this.v[i] *= -1 : this.pos[i] < 10 && (this.v[i] *= -1),
	this.pos[i] += 3 * this.v[i];
	this.draw()
},
Circle.prototype.draw = function() {
	ctx.fillStyle = this.c,
	ctx.beginPath(),
	ctx.arc(this.pos[0], this.pos[1], this.r, 0, 2 * Math.PI, !1),
	ctx.fill()
},
jQuery(document).ready(function(a) {
	function b() {
		c(a(".headline.letters").find("b")),
		d(a(".headline"))
	}
	function c(b) {
		b.each(function() {
			var b = a(this),
			c = b.text().split(""),
			d = b.hasClass("is-visible");
			for (i in c) b.parents(".rotate-2").length > 0 && (c[i] = "<em>" + c[i] + "</em>"),
			c[i] = d ? '<i class="in">' + c[i] + "</i>": "<i>" + c[i] + "</i>";
			var e = c.join("");
			b.html(e).css("opacity", 1)
		})
	}
	function d(b) {
		var c = l;
		b.each(function() {
			var b = a(this);
			if (b.hasClass("loading-bar")) c = m,
			setTimeout(function() {
				b.find(".wrapper").addClass("is-loading")
			},
			n);
			else if (b.hasClass("clip")) {
				var d = b.find(".wrapper"),
				f = d.width() + 10;
				d.css("width", f)
			} else if (!b.hasClass("type")) {
				var g = b.find(".wrapper b"),
				h = 0;
				g.each(function() {
					var b = a(this).width();
					b > h && (h = b)
				}),
				b.find(".wrapper").css("width", h)
			}
			setTimeout(function() {
				e(b.find(".is-visible").eq(0))
			},
			c)
		})
	}
	function e(a) {
		var b = j(a);
		if (a.parents(".headline").hasClass("type")) {
			var c = a.parent(".wrapper");
			c.addClass("selected").removeClass("waiting"),
			setTimeout(function() {
				c.removeClass("selected"),
				a.removeClass("is-visible").addClass("is-hidden").children("i").removeClass("in").addClass("out")
			},
			q),
			setTimeout(function() {
				f(b, p)
			},
			r)
		} else if (a.parents(".headline").hasClass("letters")) {
			var d = a.children("i").length >= b.children("i").length ? !0 : !1;
			g(a.find("i").eq(0), a, d, o),
			h(b.find("i").eq(0), b, d, o)
		} else a.parents(".headline").hasClass("clip") ? a.parents(".wrapper").animate({
			width: "2px"
		},
		s,
		function() {
			k(a, b),
			f(b)
		}) : a.parents(".headline").hasClass("loading-bar") ? (a.parents(".wrapper").removeClass("is-loading"), k(a, b), setTimeout(function() {
			e(b)
		},
		m), setTimeout(function() {
			a.parents(".wrapper").addClass("is-loading")
		},
		n)) : (k(a, b), setTimeout(function() {
			e(b)
		},
		l))
	}
	function f(a, b) {
		a.parents(".headline").hasClass("type") ? (h(a.find("i").eq(0), a, !1, b), a.addClass("is-visible").removeClass("is-hidden")) : a.parents(".headline").hasClass("clip") && a.parents(".wrapper").animate({
			width: a.width() + 10
		},
		s,
		function() {
			setTimeout(function() {
				e(a)
			},
			t)
		})
	}
	function g(b, c, d, f) {
		if (b.removeClass("in").addClass("out"), b.is(":last-child") ? d && setTimeout(function() {
			e(j(c))
		},
		l) : setTimeout(function() {
			g(b.next(), c, d, f)
		},
		f), b.is(":last-child") && a("html").hasClass("no-csstransitions")) {
			var h = j(c);
			k(c, h)
		}
	}
	function h(a, b, c, d) {
		a.addClass("in").removeClass("out"),
		a.is(":last-child") ? (b.parents(".headline").hasClass("type") && setTimeout(function() {
			b.parents(".wrapper").addClass("waiting")
		},
		200), c || setTimeout(function() {
			e(b)
		},
		l)) : setTimeout(function() {
			h(a.next(), b, c, d)
		},
		d)
	}
	function j(a) {
		return a.is(":last-child") ? a.parent().children().eq(0) : a.next()
	}
	function k(a, b) {
		a.removeClass("is-visible").addClass("is-hidden"),
		b.removeClass("is-hidden").addClass("is-visible")
	}
	var l = 4500,
	m = 3800,
	n = m - 3e3,
	o = 50,
	p = 150,
	q = 500,
	r = q + 800,
	s = 600,
	t = 1500;
	b()
})