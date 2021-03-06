/// BareSpecifier=@webcomponents/webcomponentsjs/bundles/webcomponents-sd
/**
@license @nocompile
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
(function () {
  /*
  Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */
  'use strict';
  var n;function aa(a) {
    var b = 0;return function () {
      return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
    };
  }function ba(a) {
    var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];return b ? b.call(a) : { next: aa(a) };
  }function p(a) {
    if (!(a instanceof Array)) {
      a = ba(a);for (var b, c = []; !(b = a.next()).done;) c.push(b.value);a = c;
    }return a;
  }var ca = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this;function da() {}da.prototype.toJSON = function () {
    return {};
  };
  function q(a) {
    a.__shady || (a.__shady = new da());return a.__shady;
  }function t(a) {
    return a && a.__shady;
  }var v = window.ShadyDOM || {};v.na = !(!Element.prototype.attachShadow || !Node.prototype.getRootNode);var ea = Object.getOwnPropertyDescriptor(Node.prototype, "firstChild");v.h = !!(ea && ea.configurable && ea.get);v.R = v.force || !v.na;v.j = v.noPatch || !1;v.D = v.preferPerformance;v.T = "on-demand" === v.j;v.ca = navigator.userAgent.match("Trident");function w(a) {
    return (a = t(a)) && void 0 !== a.firstChild;
  }function x(a) {
    return a instanceof ShadowRoot;
  }function fa(a) {
    return (a = (a = t(a)) && a.root) && ha(a);
  }
  var y = Element.prototype,
      ia = y.matches || y.matchesSelector || y.mozMatchesSelector || y.msMatchesSelector || y.oMatchesSelector || y.webkitMatchesSelector,
      ja = document.createTextNode(""),
      ka = 0,
      la = [];new MutationObserver(function () {
    for (; la.length;) try {
      la.shift()();
    } catch (a) {
      throw ja.textContent = ka++, a;
    }
  }).observe(ja, { characterData: !0 });function ma(a) {
    la.push(a);ja.textContent = ka++;
  }var na = document.contains ? function (a, b) {
    return a.__shady_native_contains(b);
  } : function (a, b) {
    return a === b || a.documentElement && a.documentElement.__shady_native_contains(b);
  };
  function oa(a, b) {
    for (; b;) {
      if (b == a) return !0;b = b.__shady_parentNode;
    }return !1;
  }function pa(a) {
    for (var b = a.length - 1; 0 <= b; b--) {
      var c = a[b],
          d = c.getAttribute("id") || c.getAttribute("name");d && "length" !== d && isNaN(d) && (a[d] = c);
    }a.item = function (e) {
      return a[e];
    };a.namedItem = function (e) {
      if ("length" !== e && isNaN(e) && a[e]) return a[e];for (var f = ba(a), g = f.next(); !g.done; g = f.next()) if (g = g.value, (g.getAttribute("id") || g.getAttribute("name")) == e) return g;return null;
    };return a;
  }
  function qa(a) {
    var b = [];for (a = a.__shady_native_firstChild; a; a = a.__shady_native_nextSibling) b.push(a);return b;
  }function ra(a) {
    var b = [];for (a = a.__shady_firstChild; a; a = a.__shady_nextSibling) b.push(a);return b;
  }function sa(a, b, c) {
    c.configurable = !0;if (c.value) a[b] = c.value;else try {
      Object.defineProperty(a, b, c);
    } catch (d) {}
  }function z(a, b, c, d) {
    c = void 0 === c ? "" : c;for (var e in b) d && 0 <= d.indexOf(e) || sa(a, c + e, b[e]);
  }function ta(a, b) {
    for (var c in b) c in a && sa(a, c, b[c]);
  }
  function A(a) {
    var b = {};Object.getOwnPropertyNames(a).forEach(function (c) {
      b[c] = Object.getOwnPropertyDescriptor(a, c);
    });return b;
  }function ua(a, b) {
    for (var c = Object.getOwnPropertyNames(b), d = 0, e; d < c.length; d++) e = c[d], a[e] = b[e];
  }function va(a) {
    return a instanceof Node ? a : document.createTextNode("" + a);
  }
  function B(a) {
    for (var b = [], c = 0; c < arguments.length; ++c) b[c] = arguments[c];if (1 === b.length) return va(b[0]);c = document.createDocumentFragment();b = ba(b);for (var d = b.next(); !d.done; d = b.next()) c.appendChild(va(d.value));return c;
  }var wa = [],
      xa;function ya(a) {
    xa || (xa = !0, ma(za));wa.push(a);
  }function za() {
    xa = !1;for (var a = !!wa.length; wa.length;) wa.shift()();return a;
  }za.list = wa;function Aa() {
    this.a = !1;this.addedNodes = [];this.removedNodes = [];this.J = new Set();
  }function Ba(a) {
    a.a || (a.a = !0, ma(function () {
      a.flush();
    }));
  }Aa.prototype.flush = function () {
    if (this.a) {
      this.a = !1;var a = this.takeRecords();a.length && this.J.forEach(function (b) {
        b(a);
      });
    }
  };Aa.prototype.takeRecords = function () {
    if (this.addedNodes.length || this.removedNodes.length) {
      var a = [{ addedNodes: this.addedNodes, removedNodes: this.removedNodes }];this.addedNodes = [];this.removedNodes = [];return a;
    }return [];
  };
  function Ca(a, b) {
    var c = q(a);c.C || (c.C = new Aa());c.C.J.add(b);var d = c.C;return { ga: b, ia: d, ha: a, takeRecords: function () {
        return d.takeRecords();
      } };
  }function Da(a) {
    var b = a && a.ia;b && (b.J.delete(a.ga), b.J.size || (q(a.ha).C = null));
  }
  function Ea(a, b) {
    var c = b.getRootNode();return a.map(function (d) {
      var e = c === d.target.getRootNode();if (e && d.addedNodes) {
        if (e = [].slice.call(d.addedNodes).filter(function (f) {
          return c === f.getRootNode();
        }), e.length) return d = Object.create(d), Object.defineProperty(d, "addedNodes", { value: e, configurable: !0 }), d;
      } else if (e) return d;
    }).filter(function (d) {
      return d;
    });
  }var Fa = /[&\u00A0"]/g,
      Ga = /[&\u00A0<>]/g;function Ha(a) {
    switch (a) {case "&":
        return "&amp;";case "<":
        return "&lt;";case ">":
        return "&gt;";case '"':
        return "&quot;";case "\u00a0":
        return "&nbsp;";}
  }function Ia(a) {
    for (var b = {}, c = 0; c < a.length; c++) b[a[c]] = !0;return b;
  }var Ja = Ia("area base br col command embed hr img input keygen link meta param source track wbr".split(" ")),
      Ka = Ia("style script xmp iframe noembed noframes plaintext noscript".split(" "));
  function La(a, b) {
    "template" === a.localName && (a = a.content);for (var c = "", d = b ? b(a) : a.childNodes, e = 0, f = d.length, g = void 0; e < f && (g = d[e]); e++) {
      a: {
        var h = g;var l = a,
            k = b;switch (h.nodeType) {case Node.ELEMENT_NODE:
            l = h.localName;for (var m = "<" + l, r = h.attributes, u = 0, M; M = r[u]; u++) m += " " + M.name + '="' + M.value.replace(Fa, Ha) + '"';m += ">";h = Ja[l] ? m : m + La(h, k) + "</" + l + ">";break a;case Node.TEXT_NODE:
            h = h.data;h = l && Ka[l.localName] ? h : h.replace(Ga, Ha);break a;case Node.COMMENT_NODE:
            h = "\x3c!--" + h.data + "--\x3e";break a;default:
            throw window.console.error(h), Error("not implemented");}
      }c += h;
    }return c;
  }var Na = v.h,
      Oa = { querySelector: function (a) {
      return this.__shady_native_querySelector(a);
    }, querySelectorAll: function (a) {
      return this.__shady_native_querySelectorAll(a);
    } },
      Pa = {};function Qa(a) {
    Pa[a] = function (b) {
      return b["__shady_native_" + a];
    };
  }function Ra(a, b) {
    z(a, b, "__shady_native_");for (var c in b) Qa(c);
  }function C(a, b) {
    b = void 0 === b ? [] : b;for (var c = 0; c < b.length; c++) {
      var d = b[c],
          e = Object.getOwnPropertyDescriptor(a, d);e && (Object.defineProperty(a, "__shady_native_" + d, e), e.value ? Oa[d] || (Oa[d] = e.value) : Qa(d));
    }
  }
  var D = document.createTreeWalker(document, NodeFilter.SHOW_ALL, null, !1),
      E = document.createTreeWalker(document, NodeFilter.SHOW_ELEMENT, null, !1),
      Sa = document.implementation.createHTMLDocument("inert");function Ta(a) {
    for (var b; b = a.__shady_native_firstChild;) a.__shady_native_removeChild(b);
  }var Ua = ["firstElementChild", "lastElementChild", "children", "childElementCount"],
      Va = ["querySelector", "querySelectorAll", "append", "prepend", "replaceChildren"];
  function Wa() {
    var a = ["dispatchEvent", "addEventListener", "removeEventListener"];window.EventTarget ? C(window.EventTarget.prototype, a) : (C(Node.prototype, a), C(Window.prototype, a));Na ? C(Node.prototype, "parentNode firstChild lastChild previousSibling nextSibling childNodes parentElement textContent".split(" ")) : Ra(Node.prototype, { parentNode: { get: function () {
          D.currentNode = this;return D.parentNode();
        } }, firstChild: { get: function () {
          D.currentNode = this;return D.firstChild();
        } }, lastChild: { get: function () {
          D.currentNode = this;return D.lastChild();
        } }, previousSibling: { get: function () {
          D.currentNode = this;return D.previousSibling();
        } }, nextSibling: { get: function () {
          D.currentNode = this;return D.nextSibling();
        } }, childNodes: { get: function () {
          var b = [];D.currentNode = this;for (var c = D.firstChild(); c;) b.push(c), c = D.nextSibling();return b;
        } }, parentElement: { get: function () {
          E.currentNode = this;return E.parentNode();
        } }, textContent: { get: function () {
          switch (this.nodeType) {case Node.ELEMENT_NODE:case Node.DOCUMENT_FRAGMENT_NODE:
              for (var b = document.createTreeWalker(this, NodeFilter.SHOW_TEXT, null, !1), c = "", d; d = b.nextNode();) c += d.nodeValue;return c;default:
              return this.nodeValue;}
        }, set: function (b) {
          if ("undefined" === typeof b || null === b) b = "";switch (this.nodeType) {case Node.ELEMENT_NODE:case Node.DOCUMENT_FRAGMENT_NODE:
              Ta(this);(0 < b.length || this.nodeType === Node.ELEMENT_NODE) && this.__shady_native_insertBefore(document.createTextNode(b), void 0);break;default:
              this.nodeValue = b;}
        } } });C(Node.prototype, "appendChild insertBefore removeChild replaceChild cloneNode contains".split(" "));
    C(HTMLElement.prototype, ["parentElement", "contains"]);a = { firstElementChild: { get: function () {
          E.currentNode = this;return E.firstChild();
        } }, lastElementChild: { get: function () {
          E.currentNode = this;return E.lastChild();
        } }, children: { get: function () {
          var b = [];E.currentNode = this;for (var c = E.firstChild(); c;) b.push(c), c = E.nextSibling();return pa(b);
        } }, childElementCount: { get: function () {
          return this.children ? this.children.length : 0;
        } } };Na ? (C(Element.prototype, Ua), C(Element.prototype, ["previousElementSibling", "nextElementSibling", "innerHTML", "className"]), C(HTMLElement.prototype, ["children", "innerHTML", "className"])) : (Ra(Element.prototype, a), Ra(Element.prototype, { previousElementSibling: { get: function () {
          E.currentNode = this;return E.previousSibling();
        } }, nextElementSibling: { get: function () {
          E.currentNode = this;return E.nextSibling();
        } }, innerHTML: { get: function () {
          return La(this, qa);
        }, set: function (b) {
          var c = "template" === this.localName ? this.content : this;Ta(c);var d = this.localName || "div";d = this.namespaceURI && this.namespaceURI !== Sa.namespaceURI ? Sa.createElementNS(this.namespaceURI, d) : Sa.createElement(d);d.innerHTML = b;for (b = "template" === this.localName ? d.content : d; d = b.__shady_native_firstChild;) c.__shady_native_insertBefore(d, void 0);
        } }, className: { get: function () {
          return this.getAttribute("class") || "";
        }, set: function (b) {
          this.setAttribute("class", b);
        } } }));C(Element.prototype, "setAttribute getAttribute hasAttribute removeAttribute focus blur".split(" "));C(Element.prototype, Va);C(HTMLElement.prototype, ["focus", "blur"]);window.HTMLTemplateElement && C(window.HTMLTemplateElement.prototype, ["innerHTML"]);Na ? C(DocumentFragment.prototype, Ua) : Ra(DocumentFragment.prototype, a);C(DocumentFragment.prototype, Va);Na ? (C(Document.prototype, Ua), C(Document.prototype, ["activeElement"])) : Ra(Document.prototype, a);C(Document.prototype, ["importNode", "getElementById"]);C(Document.prototype, Va);
  }var Xa = A({ get childNodes() {
      return this.__shady_childNodes;
    }, get firstChild() {
      return this.__shady_firstChild;
    }, get lastChild() {
      return this.__shady_lastChild;
    }, get childElementCount() {
      return this.__shady_childElementCount;
    }, get children() {
      return this.__shady_children;
    }, get firstElementChild() {
      return this.__shady_firstElementChild;
    }, get lastElementChild() {
      return this.__shady_lastElementChild;
    }, get shadowRoot() {
      return this.__shady_shadowRoot;
    } }),
      Ya = A({ get textContent() {
      return this.__shady_textContent;
    }, set textContent(a) {
      this.__shady_textContent = a;
    }, get innerHTML() {
      return this.__shady_innerHTML;
    }, set innerHTML(a) {
      return this.__shady_innerHTML = a;
    } }),
      Za = A({ get parentElement() {
      return this.__shady_parentElement;
    }, get parentNode() {
      return this.__shady_parentNode;
    }, get nextSibling() {
      return this.__shady_nextSibling;
    }, get previousSibling() {
      return this.__shady_previousSibling;
    }, get nextElementSibling() {
      return this.__shady_nextElementSibling;
    }, get previousElementSibling() {
      return this.__shady_previousElementSibling;
    }, get className() {
      return this.__shady_className;
    },
    set className(a) {
      return this.__shady_className = a;
    } });function $a(a) {
    for (var b in a) {
      var c = a[b];c && (c.enumerable = !1);
    }
  }$a(Xa);$a(Ya);$a(Za);var ab = v.h || !0 === v.j,
      bb = ab ? function () {} : function (a) {
    var b = q(a);b.ea || (b.ea = !0, ta(a, Za));
  },
      cb = ab ? function () {} : function (a) {
    var b = q(a);b.da || (b.da = !0, ta(a, Xa), window.customElements && window.customElements.polyfillWrapFlushCallback && !v.j || ta(a, Ya));
  };var db = "__eventWrappers" + Date.now(),
      eb = function () {
    var a = Object.getOwnPropertyDescriptor(Event.prototype, "composed");return a ? function (b) {
      return a.get.call(b);
    } : null;
  }(),
      fb = function () {
    function a() {}var b = !1,
        c = { get capture() {
        b = !0;return !1;
      } };window.addEventListener("test", a, c);window.removeEventListener("test", a, c);return b;
  }();function gb(a) {
    if (a && "object" === typeof a) {
      var b = !!a.capture;var c = !!a.once;var d = !!a.passive;var e = a.w;
    } else b = !!a, d = c = !1;return { aa: e, capture: b, once: c, passive: d, Z: fb ? a : b };
  }
  var hb = { blur: !0, focus: !0, focusin: !0, focusout: !0, click: !0, dblclick: !0, mousedown: !0, mouseenter: !0, mouseleave: !0, mousemove: !0, mouseout: !0, mouseover: !0, mouseup: !0, wheel: !0, beforeinput: !0, input: !0, keydown: !0, keyup: !0, compositionstart: !0, compositionupdate: !0, compositionend: !0, touchstart: !0, touchend: !0, touchmove: !0, touchcancel: !0, pointerover: !0, pointerenter: !0, pointerdown: !0, pointermove: !0, pointerup: !0, pointercancel: !0, pointerout: !0, pointerleave: !0, gotpointercapture: !0, lostpointercapture: !0, dragstart: !0,
    drag: !0, dragenter: !0, dragleave: !0, dragover: !0, drop: !0, dragend: !0, DOMActivate: !0, DOMFocusIn: !0, DOMFocusOut: !0, keypress: !0 },
      ib = { DOMAttrModified: !0, DOMAttributeNameChanged: !0, DOMCharacterDataModified: !0, DOMElementNameChanged: !0, DOMNodeInserted: !0, DOMNodeInsertedIntoDocument: !0, DOMNodeRemoved: !0, DOMNodeRemovedFromDocument: !0, DOMSubtreeModified: !0 };function jb(a) {
    return a instanceof Node ? a.__shady_getRootNode() : a;
  }
  function kb(a, b) {
    var c = [],
        d = a;for (a = jb(a); d;) c.push(d), d.__shady_assignedSlot ? d = d.__shady_assignedSlot : d.nodeType === Node.DOCUMENT_FRAGMENT_NODE && d.host && (b || d !== a) ? d = d.host : d = d.__shady_parentNode;c[c.length - 1] === document && c.push(window);return c;
  }function lb(a) {
    a.__composedPath || (a.__composedPath = kb(a.target, !0));return a.__composedPath;
  }function mb(a, b) {
    if (!x) return a;a = kb(a, !0);for (var c = 0, d, e = void 0, f, g = void 0; c < b.length; c++) if (d = b[c], f = jb(d), f !== e && (g = a.indexOf(f), e = f), !x(f) || -1 < g) return d;
  }
  function nb(a) {
    function b(c, d) {
      c = new a(c, d);c.__composed = d && !!d.composed;return c;
    }b.__proto__ = a;b.prototype = a.prototype;return b;
  }var ob = { focus: !0, blur: !0 };function pb(a) {
    return a.__target !== a.target || a.__relatedTarget !== a.relatedTarget;
  }function qb(a, b, c) {
    if (c = b.__handlers && b.__handlers[a.type] && b.__handlers[a.type][c]) for (var d = 0, e; (e = c[d]) && (!pb(a) || a.target !== a.relatedTarget) && (e.call(b, a), !a.__immediatePropagationStopped); d++);
  }
  function rb(a) {
    var b = a.composedPath(),
        c = b.map(function (l) {
      return mb(l, b);
    }),
        d = a.bubbles;Object.defineProperty(a, "currentTarget", { configurable: !0, enumerable: !0, get: function () {
        return g;
      } });var e = Event.CAPTURING_PHASE;Object.defineProperty(a, "eventPhase", { configurable: !0, enumerable: !0, get: function () {
        return e;
      } });for (var f = b.length - 1; 0 <= f; f--) {
      var g = b[f];e = g === c[f] ? Event.AT_TARGET : Event.CAPTURING_PHASE;qb(a, g, "capture");if (a.N) return;
    }for (f = 0; f < b.length; f++) {
      g = b[f];var h = g === c[f];if (h || d) if (e = h ? Event.AT_TARGET : Event.BUBBLING_PHASE, qb(a, g, "bubble"), a.N) return;
    }e = 0;g = null;
  }function sb(a, b, c, d, e, f) {
    for (var g = 0; g < a.length; g++) {
      var h = a[g],
          l = h.type,
          k = h.capture,
          m = h.once,
          r = h.passive;if (b === h.node && c === l && d === k && e === m && f === r) return g;
    }return -1;
  }function tb(a) {
    za();return !v.D && this instanceof Node && !na(document, this) ? (a.__target || ub(a, this), rb(a)) : this.__shady_native_dispatchEvent(a);
  }
  function vb(a, b, c) {
    var d = gb(c),
        e = d.capture,
        f = d.once,
        g = d.passive,
        h = d.aa;d = d.Z;if (b) {
      var l = typeof b;if ("function" === l || "object" === l) if ("object" !== l || b.handleEvent && "function" === typeof b.handleEvent) {
        if (ib[a]) return this.__shady_native_addEventListener(a, b, d);var k = h || this;if (h = b[db]) {
          if (-1 < sb(h, k, a, e, f, g)) return;
        } else b[db] = [];h = function (m) {
          f && this.__shady_removeEventListener(a, b, c);m.__target || ub(m);if (k !== this) {
            var r = Object.getOwnPropertyDescriptor(m, "currentTarget");Object.defineProperty(m, "currentTarget", { get: function () {
                return k;
              }, configurable: !0 });var u = Object.getOwnPropertyDescriptor(m, "eventPhase");Object.defineProperty(m, "eventPhase", { configurable: !0, enumerable: !0, get: function () {
                return e ? Event.CAPTURING_PHASE : Event.BUBBLING_PHASE;
              } });
          }m.__previousCurrentTarget = m.currentTarget;if (!x(k) && "slot" !== k.localName || -1 != m.composedPath().indexOf(k)) if (m.composed || -1 < m.composedPath().indexOf(k)) if (pb(m) && m.target === m.relatedTarget) m.eventPhase === Event.BUBBLING_PHASE && m.stopImmediatePropagation();else if (m.eventPhase === Event.CAPTURING_PHASE || m.bubbles || m.target === k || k instanceof Window) {
            var M = "function" === l ? b.call(k, m) : b.handleEvent && b.handleEvent(m);k !== this && (r ? (Object.defineProperty(m, "currentTarget", r), r = null) : delete m.currentTarget, u ? (Object.defineProperty(m, "eventPhase", u), u = null) : delete m.eventPhase);return M;
          }
        };b[db].push({ node: k, type: a, capture: e, once: f, passive: g, ya: h });this.__handlers = this.__handlers || {};this.__handlers[a] = this.__handlers[a] || { capture: [], bubble: [] };this.__handlers[a][e ? "capture" : "bubble"].push(h);
        ob[a] || this.__shady_native_addEventListener(a, h, d);
      }
    }
  }
  function wb(a, b, c) {
    if (b) {
      var d = gb(c);c = d.capture;var e = d.once,
          f = d.passive,
          g = d.aa;d = d.Z;if (ib[a]) return this.__shady_native_removeEventListener(a, b, d);var h = g || this;g = void 0;var l = null;try {
        l = b[db];
      } catch (k) {}l && (e = sb(l, h, a, c, e, f), -1 < e && (g = l.splice(e, 1)[0].ya, l.length || (b[db] = void 0)));this.__shady_native_removeEventListener(a, g || b, d);g && this.__handlers && this.__handlers[a] && (a = this.__handlers[a][c ? "capture" : "bubble"], b = a.indexOf(g), -1 < b && a.splice(b, 1));
    }
  }
  function xb() {
    for (var a in ob) window.__shady_native_addEventListener(a, function (b) {
      b.__target || (ub(b), rb(b));
    }, !0);
  }
  var yb = A({ get composed() {
      void 0 === this.__composed && (eb ? this.__composed = "focusin" === this.type || "focusout" === this.type || eb(this) : !1 !== this.isTrusted && (this.__composed = hb[this.type]));return this.__composed || !1;
    }, composedPath: function () {
      this.__composedPath || (this.__composedPath = kb(this.__target, this.composed));return this.__composedPath;
    }, get target() {
      return mb(this.currentTarget || this.__previousCurrentTarget, this.composedPath());
    }, get relatedTarget() {
      if (!this.__relatedTarget) return null;this.__relatedTargetComposedPath || (this.__relatedTargetComposedPath = kb(this.__relatedTarget, !0));return mb(this.currentTarget || this.__previousCurrentTarget, this.__relatedTargetComposedPath);
    }, stopPropagation: function () {
      Event.prototype.stopPropagation.call(this);this.N = !0;
    }, stopImmediatePropagation: function () {
      Event.prototype.stopImmediatePropagation.call(this);this.N = this.__immediatePropagationStopped = !0;
    } });
  function ub(a, b) {
    b = void 0 === b ? a.target : b;a.__target = b;a.__relatedTarget = a.relatedTarget;if (v.h) {
      b = Object.getPrototypeOf(a);if (!b.hasOwnProperty("__shady_patchedProto")) {
        var c = Object.create(b);c.__shady_sourceProto = b;z(c, yb);b.__shady_patchedProto = c;
      }a.__proto__ = b.__shady_patchedProto;
    } else z(a, yb);
  }var zb = nb(Event),
      Ab = nb(CustomEvent),
      Bb = nb(MouseEvent);
  function Cb() {
    if (!eb && Object.getOwnPropertyDescriptor(Event.prototype, "isTrusted")) {
      var a = function () {
        var b = new MouseEvent("click", { bubbles: !0, cancelable: !0, composed: !0 });this.__shady_dispatchEvent(b);
      };Element.prototype.click ? Element.prototype.click = a : HTMLElement.prototype.click && (HTMLElement.prototype.click = a);
    }
  }
  var Db = Object.getOwnPropertyNames(Element.prototype).filter(function (a) {
    return "on" === a.substring(0, 2);
  }),
      Eb = Object.getOwnPropertyNames(HTMLElement.prototype).filter(function (a) {
    return "on" === a.substring(0, 2);
  });function Fb(a) {
    return { set: function (b) {
        var c = q(this),
            d = a.substring(2);c.v || (c.v = {});c.v[a] && this.removeEventListener(d, c.v[a]);this.__shady_addEventListener(d, b);c.v[a] = b;
      }, get: function () {
        var b = t(this);return b && b.v && b.v[a];
      }, configurable: !0 };
  }function Gb(a, b) {
    return { index: a, F: [], I: b };
  }
  function Hb(a, b, c, d) {
    var e = 0,
        f = 0,
        g = 0,
        h = 0,
        l = Math.min(b - e, d - f);if (0 == e && 0 == f) a: {
      for (g = 0; g < l; g++) if (a[g] !== c[g]) break a;g = l;
    }if (b == a.length && d == c.length) {
      h = a.length;for (var k = c.length, m = 0; m < l - g && Ib(a[--h], c[--k]);) m++;h = m;
    }e += g;f += g;b -= h;d -= h;if (0 == b - e && 0 == d - f) return [];if (e == b) {
      for (b = Gb(e, 0); f < d;) b.F.push(c[f++]);return [b];
    }if (f == d) return [Gb(e, b - e)];l = e;g = f;d = d - g + 1;h = b - l + 1;b = Array(d);for (k = 0; k < d; k++) b[k] = Array(h), b[k][0] = k;for (k = 0; k < h; k++) b[0][k] = k;for (k = 1; k < d; k++) for (m = 1; m < h; m++) if (a[l + m - 1] === c[g + k - 1]) b[k][m] = b[k - 1][m - 1];else {
      var r = b[k - 1][m] + 1,
          u = b[k][m - 1] + 1;b[k][m] = r < u ? r : u;
    }l = b.length - 1;g = b[0].length - 1;d = b[l][g];for (a = []; 0 < l || 0 < g;) 0 == l ? (a.push(2), g--) : 0 == g ? (a.push(3), l--) : (h = b[l - 1][g - 1], k = b[l - 1][g], m = b[l][g - 1], r = k < m ? k < h ? k : h : m < h ? m : h, r == h ? (h == d ? a.push(0) : (a.push(1), d = h), l--, g--) : r == k ? (a.push(3), l--, d = k) : (a.push(2), g--, d = m));a.reverse();b = void 0;l = [];for (g = 0; g < a.length; g++) switch (a[g]) {case 0:
        b && (l.push(b), b = void 0);e++;f++;break;case 1:
        b || (b = Gb(e, 0));b.I++;e++;b.F.push(c[f]);f++;break;case 2:
        b || (b = Gb(e, 0));
        b.I++;e++;break;case 3:
        b || (b = Gb(e, 0)), b.F.push(c[f]), f++;}b && l.push(b);return l;
  }function Ib(a, b) {
    return a === b;
  }var Jb = A({ dispatchEvent: tb, addEventListener: vb, removeEventListener: wb });var Kb = null;function F() {
    Kb || (Kb = window.ShadyCSS && window.ShadyCSS.ScopingShim);return Kb || null;
  }function Lb(a, b, c) {
    var d = F();return d && "class" === b ? (d.setElementClass(a, c), !0) : !1;
  }function Mb(a, b) {
    var c = F();c && c.unscopeNode(a, b);
  }function Nb(a, b) {
    var c = F();if (!c) return !0;if (a.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
      c = !0;for (a = a.__shady_firstChild; a; a = a.__shady_nextSibling) c = c && Nb(a, b);return c;
    }return a.nodeType !== Node.ELEMENT_NODE ? !0 : c.currentScopeForNode(a) === b;
  }
  function Ob(a) {
    if (a.nodeType !== Node.ELEMENT_NODE) return "";var b = F();return b ? b.currentScopeForNode(a) : "";
  }function Pb(a, b) {
    if (a) for (a.nodeType === Node.ELEMENT_NODE && b(a), a = a.__shady_firstChild; a; a = a.__shady_nextSibling) a.nodeType === Node.ELEMENT_NODE && Pb(a, b);
  }var Qb = window.document,
      Rb = v.D,
      Sb = Object.getOwnPropertyDescriptor(Node.prototype, "isConnected"),
      Tb = Sb && Sb.get;function Ub(a) {
    for (var b; b = a.__shady_firstChild;) a.__shady_removeChild(b);
  }function Vb(a) {
    var b = t(a);if (b && void 0 !== b.M) for (b = a.__shady_firstChild; b; b = b.__shady_nextSibling) Vb(b);if (a = t(a)) a.M = void 0;
  }function Wb(a) {
    var b = a;if (a && "slot" === a.localName) {
      var c = t(a);(c = c && c.B) && (b = c.length ? c[0] : Wb(a.__shady_nextSibling));
    }return b;
  }
  function Xb(a, b, c) {
    if (a = (a = t(a)) && a.C) {
      if (b) if (b.nodeType === Node.DOCUMENT_FRAGMENT_NODE) for (var d = 0, e = b.childNodes.length; d < e; d++) a.addedNodes.push(b.childNodes[d]);else a.addedNodes.push(b);c && a.removedNodes.push(c);Ba(a);
    }
  }
  var bc = A({ get parentNode() {
      var a = t(this);a = a && a.parentNode;return void 0 !== a ? a : this.__shady_native_parentNode;
    }, get firstChild() {
      var a = t(this);a = a && a.firstChild;return void 0 !== a ? a : this.__shady_native_firstChild;
    }, get lastChild() {
      var a = t(this);a = a && a.lastChild;return void 0 !== a ? a : this.__shady_native_lastChild;
    }, get nextSibling() {
      var a = t(this);a = a && a.nextSibling;return void 0 !== a ? a : this.__shady_native_nextSibling;
    }, get previousSibling() {
      var a = t(this);a = a && a.previousSibling;return void 0 !== a ? a : this.__shady_native_previousSibling;
    },
    get childNodes() {
      if (w(this)) {
        var a = t(this);if (!a.childNodes) {
          a.childNodes = [];for (var b = this.__shady_firstChild; b; b = b.__shady_nextSibling) a.childNodes.push(b);
        }var c = a.childNodes;
      } else c = this.__shady_native_childNodes;c.item = function (d) {
        return c[d];
      };return c;
    }, get parentElement() {
      var a = t(this);(a = a && a.parentNode) && a.nodeType !== Node.ELEMENT_NODE && (a = null);return void 0 !== a ? a : this.__shady_native_parentElement;
    }, get isConnected() {
      if (Tb && Tb.call(this)) return !0;if (this.nodeType == Node.DOCUMENT_FRAGMENT_NODE) return !1;
      var a = this.ownerDocument;if (null === a || na(a, this)) return !0;for (a = this; a && !(a instanceof Document);) a = a.__shady_parentNode || (x(a) ? a.host : void 0);return !!(a && a instanceof Document);
    }, get textContent() {
      if (w(this)) {
        for (var a = [], b = this.__shady_firstChild; b; b = b.__shady_nextSibling) b.nodeType !== Node.COMMENT_NODE && a.push(b.__shady_textContent);return a.join("");
      }return this.__shady_native_textContent;
    }, set textContent(a) {
      if ("undefined" === typeof a || null === a) a = "";switch (this.nodeType) {case Node.ELEMENT_NODE:case Node.DOCUMENT_FRAGMENT_NODE:
          if (!w(this) && v.h) {
            var b = this.__shady_firstChild;(b != this.__shady_lastChild || b && b.nodeType != Node.TEXT_NODE) && Ub(this);this.__shady_native_textContent = a;
          } else Ub(this), (0 < a.length || this.nodeType === Node.ELEMENT_NODE) && this.__shady_insertBefore(document.createTextNode(a));break;default:
          this.nodeValue = a;}
    }, insertBefore: function (a, b) {
      if (this.ownerDocument !== Qb && a.ownerDocument !== Qb) return this.__shady_native_insertBefore(a, b), a;if (a === this) throw Error("Failed to execute 'appendChild' on 'Node': The new child element contains the parent.");
      if (b) {
        var c = t(b);c = c && c.parentNode;if (void 0 !== c && c !== this || void 0 === c && b.__shady_native_parentNode !== this) throw Error("Failed to execute 'insertBefore' on 'Node': The node before which the new node is to be inserted is not a child of this node.");
      }if (b === a) return a;Xb(this, a);var d = [],
          e = (c = G(this)) ? c.host.localName : Ob(this),
          f = a.__shady_parentNode;if (f) {
        var g = Ob(a);var h = !!c || !G(a) || Rb && void 0 !== this.__noInsertionPoint;f.__shady_removeChild(a, h);
      }f = !0;var l = (!Rb || void 0 === a.__noInsertionPoint && void 0 === this.__noInsertionPoint) && !Nb(a, e),
          k = c && !a.__noInsertionPoint && (!Rb || a.nodeType === Node.DOCUMENT_FRAGMENT_NODE);if (k || l) l && (g = g || Ob(a)), Pb(a, function (m) {
        k && "slot" === m.localName && d.push(m);if (l) {
          var r = g;F() && (r && Mb(m, r), (r = F()) && r.scopeNode(m, e));
        }
      });d.length && (Yb(c), c.c.push.apply(c.c, p(d)), H(c));w(this) && (Zb(a, this, b), h = t(this), h.root ? (f = !1, fa(this) && H(h.root)) : c && "slot" === this.localName && (f = !1, H(c)));f ? (c = x(this) ? this.host : this, b ? (b = Wb(b), c.__shady_native_insertBefore(a, b)) : c.__shady_native_appendChild(a)) : a.ownerDocument !== this.ownerDocument && this.ownerDocument.adoptNode(a);return a;
    }, appendChild: function (a) {
      if (this != a || !x(a)) return this.__shady_insertBefore(a);
    }, removeChild: function (a, b) {
      b = void 0 === b ? !1 : b;if (this.ownerDocument !== Qb) return this.__shady_native_removeChild(a);if (a.__shady_parentNode !== this) throw Error("The node to be removed is not a child of this node: " + a);Xb(this, null, a);var c = G(a),
          d = c && $b(c, a),
          e = t(this);if (w(this) && (ac(a, this), fa(this))) {
        H(e.root);var f = !0;
      }if (F() && !b && c && a.nodeType !== Node.TEXT_NODE) {
        var g = Ob(a);Pb(a, function (h) {
          Mb(h, g);
        });
      }Vb(a);c && ((b = "slot" === this.localName) && (f = !0), (d || b) && H(c));f || (f = x(this) ? this.host : this, (!e.root && "slot" !== a.localName || f === a.__shady_native_parentNode) && f.__shady_native_removeChild(a));return a;
    }, replaceChild: function (a, b) {
      this.__shady_insertBefore(a, b);this.__shady_removeChild(b);return a;
    }, cloneNode: function (a) {
      if ("template" == this.localName) return this.__shady_native_cloneNode(a);var b = this.__shady_native_cloneNode(!1);if (a && b.nodeType !== Node.ATTRIBUTE_NODE) {
        a = this.__shady_firstChild;for (var c; a; a = a.__shady_nextSibling) c = a.__shady_cloneNode(!0), b.__shady_appendChild(c);
      }return b;
    }, getRootNode: function (a) {
      if (this && this.nodeType) {
        var b = q(this),
            c = b.M;void 0 === c && (x(this) ? (c = this, b.M = c) : (c = (c = this.__shady_parentNode) ? c.__shady_getRootNode(a) : this, document.documentElement.__shady_native_contains(this) && (b.M = c)));return c;
      }
    }, contains: function (a) {
      return oa(this, a);
    } });var dc = A({ get assignedSlot() {
      var a = this.__shady_parentNode;(a = a && a.__shady_shadowRoot) && cc(a);return (a = t(this)) && a.assignedSlot || null;
    } });function ec(a, b, c) {
    var d = [];fc(a, b, c, d);return d;
  }function fc(a, b, c, d) {
    for (a = a.__shady_firstChild; a; a = a.__shady_nextSibling) {
      var e;if (e = a.nodeType === Node.ELEMENT_NODE) {
        e = a;var f = b,
            g = c,
            h = d,
            l = f(e);l && h.push(e);g && g(l) ? e = l : (fc(e, f, g, h), e = void 0);
      }if (e) break;
    }
  }
  var gc = { get firstElementChild() {
      var a = t(this);if (a && void 0 !== a.firstChild) {
        for (a = this.__shady_firstChild; a && a.nodeType !== Node.ELEMENT_NODE;) a = a.__shady_nextSibling;return a;
      }return this.__shady_native_firstElementChild;
    }, get lastElementChild() {
      var a = t(this);if (a && void 0 !== a.lastChild) {
        for (a = this.__shady_lastChild; a && a.nodeType !== Node.ELEMENT_NODE;) a = a.__shady_previousSibling;return a;
      }return this.__shady_native_lastElementChild;
    }, get children() {
      return w(this) ? pa(Array.prototype.filter.call(ra(this), function (a) {
        return a.nodeType === Node.ELEMENT_NODE;
      })) : this.__shady_native_children;
    }, get childElementCount() {
      var a = this.__shady_children;return a ? a.length : 0;
    } },
      I = A((gc.append = function (a) {
    for (var b = [], c = 0; c < arguments.length; ++c) b[c] = arguments[c];this.__shady_insertBefore(B.apply(null, p(b)), null);
  }, gc.prepend = function (a) {
    for (var b = [], c = 0; c < arguments.length; ++c) b[c] = arguments[c];this.__shady_insertBefore(B.apply(null, p(b)), this.__shady_firstChild);
  }, gc.replaceChildren = function (a) {
    for (var b = [], c = 0; c < arguments.length; ++c) b[c] = arguments[c];
    for (; null !== (c = this.__shady_firstChild);) this.__shady_removeChild(c);this.__shady_insertBefore(B.apply(null, p(b)), null);
  }, gc)),
      hc = A({ querySelector: function (a) {
      return ec(this, function (b) {
        return ia.call(b, a);
      }, function (b) {
        return !!b;
      })[0] || null;
    }, querySelectorAll: function (a, b) {
      if (b) {
        b = Array.prototype.slice.call(this.__shady_native_querySelectorAll(a));var c = this.__shady_getRootNode();return pa(b.filter(function (d) {
          return d.__shady_getRootNode() == c;
        }));
      }return pa(ec(this, function (d) {
        return ia.call(d, a);
      }));
    } }),
      ic = v.D && !v.j ? ua({}, I) : I;ua(I, hc); /*
                                                  Copyright (c) 2020 The Polymer Project Authors. All rights reserved.
                                                  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
                                                  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
                                                  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
                                                  Code distributed by Google as part of the polymer project is also
                                                  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
                                                  */
  var jc = A({ after: function (a) {
      for (var b = [], c = 0; c < arguments.length; ++c) b[c] = arguments[c];c = this.__shady_parentNode;if (null !== c) {
        var d = this.__shady_nextSibling;c.__shady_insertBefore(B.apply(null, p(b)), d);
      }
    }, before: function (a) {
      for (var b = [], c = 0; c < arguments.length; ++c) b[c] = arguments[c];c = this.__shady_parentNode;null !== c && c.__shady_insertBefore(B.apply(null, p(b)), this);
    }, remove: function () {
      var a = this.__shady_parentNode;null !== a && a.__shady_removeChild(this);
    }, replaceWith: function (a) {
      for (var b = [], c = 0; c < arguments.length; ++c) b[c] = arguments[c];c = this.__shady_parentNode;if (null !== c) {
        var d = this.__shady_nextSibling;c.__shady_removeChild(this);c.__shady_insertBefore(B.apply(null, p(b)), d);
      }
    } });var kc = window.document;function lc(a, b) {
    if ("slot" === b) a = a.__shady_parentNode, fa(a) && H(t(a).root);else if ("slot" === a.localName && "name" === b && (b = G(a))) {
      if (b.a) {
        mc(b);var c = a.fa,
            d = nc(a);if (d !== c) {
          c = b.b[c];var e = c.indexOf(a);0 <= e && c.splice(e, 1);c = b.b[d] || (b.b[d] = []);c.push(a);1 < c.length && (b.b[d] = oc(c));
        }
      }H(b);
    }
  }
  var pc = A({ get previousElementSibling() {
      var a = t(this);if (a && void 0 !== a.previousSibling) {
        for (a = this.__shady_previousSibling; a && a.nodeType !== Node.ELEMENT_NODE;) a = a.__shady_previousSibling;return a;
      }return this.__shady_native_previousElementSibling;
    }, get nextElementSibling() {
      var a = t(this);if (a && void 0 !== a.nextSibling) {
        for (a = this.__shady_nextSibling; a && a.nodeType !== Node.ELEMENT_NODE;) a = a.__shady_nextSibling;return a;
      }return this.__shady_native_nextElementSibling;
    }, get slot() {
      return this.getAttribute("slot");
    },
    set slot(a) {
      this.__shady_setAttribute("slot", a);
    }, get className() {
      return this.getAttribute("class") || "";
    }, set className(a) {
      this.__shady_setAttribute("class", a);
    }, setAttribute: function (a, b) {
      this.ownerDocument !== kc ? this.__shady_native_setAttribute(a, b) : Lb(this, a, b) || (this.__shady_native_setAttribute(a, b), lc(this, a));
    }, removeAttribute: function (a) {
      this.ownerDocument !== kc ? this.__shady_native_removeAttribute(a) : Lb(this, a, "") ? "" === this.getAttribute(a) && this.__shady_native_removeAttribute(a) : (this.__shady_native_removeAttribute(a), lc(this, a));
    } });v.D || Db.forEach(function (a) {
    pc[a] = Fb(a);
  });
  var uc = A({ attachShadow: function (a) {
      if (!this) throw Error("Must provide a host.");if (!a) throw Error("Not enough arguments.");if (a.shadyUpgradeFragment && !v.ca) {
        var b = a.shadyUpgradeFragment;b.__proto__ = ShadowRoot.prototype;qc(b, this, a);rc(b, b);a = b.__noInsertionPoint ? null : b.querySelectorAll("slot");b.__noInsertionPoint = void 0;if (a && a.length) {
          var c = b;Yb(c);c.c.push.apply(c.c, p(a));H(b);
        }b.host.__shady_native_appendChild(b);
      } else b = new sc(tc, this, a);return this.__CE_shadowRoot = b;
    }, get shadowRoot() {
      var a = t(this);
      return a && a.ra || null;
    } });ua(pc, uc);var vc = document.implementation.createHTMLDocument("inert"),
      wc = A({ get innerHTML() {
      return w(this) ? La("template" === this.localName ? this.content : this, ra) : this.__shady_native_innerHTML;
    }, set innerHTML(a) {
      if ("template" === this.localName) this.__shady_native_innerHTML = a;else {
        Ub(this);var b = this.localName || "div";b = this.namespaceURI && this.namespaceURI !== vc.namespaceURI ? vc.createElementNS(this.namespaceURI, b) : vc.createElement(b);for (v.h ? b.__shady_native_innerHTML = a : b.innerHTML = a; a = b.__shady_firstChild;) this.__shady_insertBefore(a);
      }
    } });var xc = A({ blur: function () {
      var a = t(this);(a = (a = a && a.root) && a.activeElement) ? a.__shady_blur() : this.__shady_native_blur();
    } });v.D || Eb.forEach(function (a) {
    xc[a] = Fb(a);
  });var yc = A({ assignedNodes: function (a) {
      if ("slot" === this.localName) {
        var b = this.__shady_getRootNode();b && x(b) && cc(b);return (b = t(this)) ? (a && a.flatten ? b.B : b.assignedNodes) || [] : [];
      }
    }, addEventListener: function (a, b, c) {
      if ("slot" !== this.localName || "slotchange" === a) vb.call(this, a, b, c);else {
        "object" !== typeof c && (c = { capture: !!c });var d = this.__shady_parentNode;if (!d) throw Error("ShadyDOM cannot attach event to slot unless it has a `parentNode`");c.w = this;d.__shady_addEventListener(a, b, c);
      }
    }, removeEventListener: function (a, b, c) {
      if ("slot" !== this.localName || "slotchange" === a) wb.call(this, a, b, c);else {
        "object" !== typeof c && (c = { capture: !!c });var d = this.__shady_parentNode;if (!d) throw Error("ShadyDOM cannot attach event to slot unless it has a `parentNode`");c.w = this;d.__shady_removeEventListener(a, b, c);
      }
    } });var zc = A({ getElementById: function (a) {
      return "" === a ? null : ec(this, function (b) {
        return b.id == a;
      }, function (b) {
        return !!b;
      })[0] || null;
    } });var Ac = A({ get activeElement() {
      var a = v.h ? document.__shady_native_activeElement : document.activeElement;if (!a || !a.nodeType) return null;var b = !!x(this);if (!(this === document || b && this.host !== a && this.host.__shady_native_contains(a))) return null;for (b = G(a); b && b !== this;) a = b.host, b = G(a);return this === document ? b ? null : a : b === this ? a : null;
    } });var Bc = window.document,
      Cc = A({ importNode: function (a, b) {
      if (a.ownerDocument !== Bc || "template" === a.localName) return this.__shady_native_importNode(a, b);var c = this.__shady_native_importNode(a, !1);if (b) for (a = a.__shady_firstChild; a; a = a.__shady_nextSibling) b = this.__shady_importNode(a, !0), c.__shady_appendChild(b);return c;
    } });var Dc = A({ dispatchEvent: tb, addEventListener: vb.bind(window), removeEventListener: wb.bind(window) });var J = {};Object.getOwnPropertyDescriptor(HTMLElement.prototype, "parentElement") && (J.parentElement = bc.parentElement);Object.getOwnPropertyDescriptor(HTMLElement.prototype, "contains") && (J.contains = bc.contains);Object.getOwnPropertyDescriptor(HTMLElement.prototype, "children") && (J.children = I.children);Object.getOwnPropertyDescriptor(HTMLElement.prototype, "innerHTML") && (J.innerHTML = wc.innerHTML);Object.getOwnPropertyDescriptor(HTMLElement.prototype, "className") && (J.className = pc.className);
  var K = { EventTarget: [Jb], Node: [bc, window.EventTarget ? null : Jb], Text: [dc], Comment: [dc], CDATASection: [dc], ProcessingInstruction: [dc], Element: [pc, I, jc, dc, !v.h || "innerHTML" in Element.prototype ? wc : null, window.HTMLSlotElement ? null : yc], HTMLElement: [xc, J], HTMLSlotElement: [yc], DocumentFragment: [ic, zc], Document: [Cc, ic, zc, Ac], Window: [Dc], CharacterData: [jc] },
      Ec = v.h ? null : ["innerHTML", "textContent"];function L(a, b, c, d) {
    b.forEach(function (e) {
      return a && e && z(a, e, c, d);
    });
  }
  function Fc(a) {
    var b = a ? null : Ec,
        c;for (c in K) L(window[c] && window[c].prototype, K[c], a, b);
  }["Text", "Comment", "CDATASection", "ProcessingInstruction"].forEach(function (a) {
    var b = window[a],
        c = Object.create(b.prototype);c.__shady_protoIsPatched = !0;L(c, K.EventTarget);L(c, K.Node);K[a] && L(c, K[a]);b.prototype.__shady_patchedProto = c;
  });function Gc(a) {
    a.__shady_protoIsPatched = !0;L(a, K.EventTarget);L(a, K.Node);L(a, K.Element);L(a, K.HTMLElement);L(a, K.HTMLSlotElement);return a;
  }var Hc = v.T,
      Ic = v.h;function Jc(a, b) {
    if (Hc && !a.__shady_protoIsPatched && !x(a)) {
      var c = Object.getPrototypeOf(a),
          d = c.hasOwnProperty("__shady_patchedProto") && c.__shady_patchedProto;d || (d = Object.create(c), Gc(d), c.__shady_patchedProto = d);Object.setPrototypeOf(a, d);
    }Ic || (1 === b ? bb(a) : 2 === b && cb(a));
  }
  function Kc(a, b, c, d) {
    Jc(a, 1);d = d || null;var e = q(a),
        f = d ? q(d) : null;e.previousSibling = d ? f.previousSibling : b.__shady_lastChild;if (f = t(e.previousSibling)) f.nextSibling = a;if (f = t(e.nextSibling = d)) f.previousSibling = a;e.parentNode = b;d ? d === c.firstChild && (c.firstChild = a) : (c.lastChild = a, c.firstChild || (c.firstChild = a));c.childNodes = null;
  }
  function Zb(a, b, c) {
    Jc(b, 2);var d = q(b);void 0 !== d.firstChild && (d.childNodes = null);if (a.nodeType === Node.DOCUMENT_FRAGMENT_NODE) for (a = a.__shady_native_firstChild; a; a = a.__shady_native_nextSibling) Kc(a, b, d, c);else Kc(a, b, d, c);
  }
  function ac(a, b) {
    var c = q(a);b = q(b);a === b.firstChild && (b.firstChild = c.nextSibling);a === b.lastChild && (b.lastChild = c.previousSibling);a = c.previousSibling;var d = c.nextSibling;a && (q(a).nextSibling = d);d && (q(d).previousSibling = a);c.parentNode = c.previousSibling = c.nextSibling = void 0;void 0 !== b.childNodes && (b.childNodes = null);
  }
  function rc(a, b) {
    var c = q(a);if (b || void 0 === c.firstChild) {
      c.childNodes = null;var d = c.firstChild = a.__shady_native_firstChild;c.lastChild = a.__shady_native_lastChild;Jc(a, 2);c = d;for (d = void 0; c; c = c.__shady_native_nextSibling) {
        var e = q(c);e.parentNode = b || a;e.nextSibling = c.__shady_native_nextSibling;e.previousSibling = d || null;d = c;Jc(c, 1);
      }
    }
  }var Lc = A({ addEventListener: function (a, b, c) {
      "object" !== typeof c && (c = { capture: !!c });c.w = c.w || this;this.host.__shady_addEventListener(a, b, c);
    }, removeEventListener: function (a, b, c) {
      "object" !== typeof c && (c = { capture: !!c });c.w = c.w || this;this.host.__shady_removeEventListener(a, b, c);
    } });function Mc(a, b) {
    z(a, Lc, b);z(a, Ac, b);z(a, wc, b);z(a, I, b);v.j && !b ? (z(a, bc, b), z(a, zc, b)) : v.h || (z(a, Za), z(a, Xa), z(a, Ya));
  }var tc = {},
      N = v.deferConnectionCallbacks && "loading" === document.readyState,
      Nc;function Oc(a) {
    var b = [];do b.unshift(a); while (a = a.__shady_parentNode);return b;
  }function sc(a, b, c) {
    if (a !== tc) throw new TypeError("Illegal constructor");this.a = null;qc(this, b, c);
  }
  function qc(a, b, c) {
    a.host = b;a.mode = c && c.mode;rc(a.host);b = q(a.host);b.root = a;b.ra = "closed" !== a.mode ? a : null;b = q(a);b.firstChild = b.lastChild = b.parentNode = b.nextSibling = b.previousSibling = null;if (v.preferPerformance) for (; b = a.host.__shady_native_firstChild;) a.host.__shady_native_removeChild(b);else H(a);
  }function H(a) {
    a.A || (a.A = !0, ya(function () {
      return cc(a);
    }));
  }
  function cc(a) {
    var b;if (b = a.A) {
      for (var c; a;) a: {
        a.A && (c = a), b = a;a = b.host.__shady_getRootNode();if (x(a) && (b = t(b.host)) && 0 < b.H) break a;a = void 0;
      }b = c;
    }(c = b) && c._renderSelf();
  }
  sc.prototype._renderSelf = function () {
    var a = N;N = !0;this.A = !1;if (this.a) {
      mc(this);for (var b = 0, c; b < this.a.length; b++) {
        c = this.a[b];var d = t(c),
            e = d.assignedNodes;d.assignedNodes = [];d.B = [];if (d.W = e) for (d = 0; d < e.length; d++) {
          var f = t(e[d]);f.O = f.assignedSlot;f.assignedSlot === c && (f.assignedSlot = null);
        }
      }for (b = this.host.__shady_firstChild; b; b = b.__shady_nextSibling) Pc(this, b);for (b = 0; b < this.a.length; b++) {
        c = this.a[b];e = t(c);if (!e.assignedNodes.length) for (d = c.__shady_firstChild; d; d = d.__shady_nextSibling) Pc(this, d, c);
        (d = (d = t(c.__shady_parentNode)) && d.root) && (ha(d) || d.A) && d._renderSelf();Qc(this, e.B, e.assignedNodes);if (d = e.W) {
          for (f = 0; f < d.length; f++) t(d[f]).O = null;e.W = null;d.length > e.assignedNodes.length && (e.P = !0);
        }e.P && (e.P = !1, Rc(this, c));
      }c = this.a;b = [];for (e = 0; e < c.length; e++) d = c[e].__shady_parentNode, (f = t(d)) && f.root || !(0 > b.indexOf(d)) || b.push(d);for (c = 0; c < b.length; c++) {
        f = b[c];e = f === this ? this.host : f;d = [];for (f = f.__shady_firstChild; f; f = f.__shady_nextSibling) if ("slot" == f.localName) for (var g = t(f).B, h = 0; h < g.length; h++) d.push(g[h]);else d.push(f);f = qa(e);g = Hb(d, d.length, f, f.length);for (var l = h = 0, k = void 0; h < g.length && (k = g[h]); h++) {
          for (var m = 0, r = void 0; m < k.F.length && (r = k.F[m]); m++) r.__shady_native_parentNode === e && e.__shady_native_removeChild(r), f.splice(k.index + l, 1);l -= k.I;
        }l = 0;for (k = void 0; l < g.length && (k = g[l]); l++) for (h = f[k.index], m = k.index; m < k.index + k.I; m++) r = d[m], e.__shady_native_insertBefore(r, h), f.splice(m, 0, r);
      }
    }if (!v.preferPerformance && !this.V) for (b = this.host.__shady_firstChild; b; b = b.__shady_nextSibling) c = t(b), b.__shady_native_parentNode !== this.host || "slot" !== b.localName && c.assignedSlot || this.host.__shady_native_removeChild(b);this.V = !0;N = a;Nc && Nc();
  };function Pc(a, b, c) {
    var d = q(b),
        e = d.O;d.O = null;c || (c = (a = a.b[b.__shady_slot || "__catchall"]) && a[0]);c ? (q(c).assignedNodes.push(b), d.assignedSlot = c) : d.assignedSlot = void 0;e !== d.assignedSlot && d.assignedSlot && (q(d.assignedSlot).P = !0);
  }function Qc(a, b, c) {
    for (var d = 0, e = void 0; d < c.length && (e = c[d]); d++) if ("slot" == e.localName) {
      var f = t(e).assignedNodes;f && f.length && Qc(a, b, f);
    } else b.push(c[d]);
  }
  function Rc(a, b) {
    b.__shady_native_dispatchEvent(new Event("slotchange"));b = t(b);b.assignedSlot && Rc(a, b.assignedSlot);
  }function Yb(a) {
    a.c = a.c || [];a.a = a.a || [];a.b = a.b || {};
  }function mc(a) {
    if (a.c && a.c.length) {
      for (var b = a.c, c, d = 0; d < b.length; d++) {
        var e = b[d];rc(e);var f = e.__shady_parentNode;rc(f);f = t(f);f.H = (f.H || 0) + 1;f = nc(e);a.b[f] ? (c = c || {}, c[f] = !0, a.b[f].push(e)) : a.b[f] = [e];a.a.push(e);
      }if (c) for (var g in c) a.b[g] = oc(a.b[g]);a.c = [];
    }
  }
  function nc(a) {
    var b = a.name || a.getAttribute("name") || "__catchall";return a.fa = b;
  }function oc(a) {
    return a.sort(function (b, c) {
      b = Oc(b);for (var d = Oc(c), e = 0; e < b.length; e++) {
        c = b[e];var f = d[e];if (c !== f) return b = ra(c.__shady_parentNode), b.indexOf(c) - b.indexOf(f);
      }
    });
  }
  function $b(a, b) {
    if (a.a) {
      mc(a);var c = a.b,
          d;for (d in c) for (var e = c[d], f = 0; f < e.length; f++) {
        var g = e[f];if (oa(b, g)) {
          e.splice(f, 1);var h = a.a.indexOf(g);0 <= h && (a.a.splice(h, 1), (h = t(g.__shady_parentNode)) && h.H && h.H--);f--;g = t(g);if (h = g.B) for (var l = 0; l < h.length; l++) {
            var k = h[l],
                m = k.__shady_native_parentNode;m && m.__shady_native_removeChild(k);
          }g.B = [];g.assignedNodes = [];h = !0;
        }
      }return h;
    }
  }function ha(a) {
    mc(a);return !(!a.a || !a.a.length);
  }
  (function (a) {
    a.__proto__ = DocumentFragment.prototype;Mc(a, "__shady_");Mc(a);Object.defineProperties(a, { nodeType: { value: Node.DOCUMENT_FRAGMENT_NODE, configurable: !0 }, nodeName: { value: "#document-fragment", configurable: !0 }, nodeValue: { value: null, configurable: !0 } });["localName", "namespaceURI", "prefix"].forEach(function (b) {
      Object.defineProperty(a, b, { value: void 0, configurable: !0 });
    });["ownerDocument", "baseURI", "isConnected"].forEach(function (b) {
      Object.defineProperty(a, b, { get: function () {
          return this.host[b];
        },
        configurable: !0 });
    });
  })(sc.prototype);
  if (window.customElements && window.customElements.define && v.R && !v.preferPerformance) {
    var Sc = new Map();Nc = function () {
      var a = [];Sc.forEach(function (d, e) {
        a.push([e, d]);
      });Sc.clear();for (var b = 0; b < a.length; b++) {
        var c = a[b][0];a[b][1] ? c.__shadydom_connectedCallback() : c.__shadydom_disconnectedCallback();
      }
    };N && document.addEventListener("readystatechange", function () {
      N = !1;Nc();
    }, { once: !0 });var Tc = function (a, b, c) {
      var d = 0,
          e = "__isConnected" + d++;if (b || c) a.prototype.connectedCallback = a.prototype.__shadydom_connectedCallback = function () {
        N ? Sc.set(this, !0) : this[e] || (this[e] = !0, b && b.call(this));
      }, a.prototype.disconnectedCallback = a.prototype.__shadydom_disconnectedCallback = function () {
        N ? this.isConnected || Sc.set(this, !1) : this[e] && (this[e] = !1, c && c.call(this));
      };return a;
    },
        Uc = window.customElements.define,
        Vc = function (a, b) {
      var c = b.prototype.connectedCallback,
          d = b.prototype.disconnectedCallback;Uc.call(window.customElements, a, Tc(b, c, d));b.prototype.connectedCallback = c;b.prototype.disconnectedCallback = d;
    };window.customElements.define = Vc;Object.defineProperty(window.CustomElementRegistry.prototype, "define", { value: Vc, configurable: !0 });
  }function G(a) {
    a = a.__shady_getRootNode();if (x(a)) return a;
  }function O(a) {
    this.node = a;
  }n = O.prototype;n.addEventListener = function (a, b, c) {
    return this.node.__shady_addEventListener(a, b, c);
  };n.removeEventListener = function (a, b, c) {
    return this.node.__shady_removeEventListener(a, b, c);
  };n.appendChild = function (a) {
    return this.node.__shady_appendChild(a);
  };n.insertBefore = function (a, b) {
    return this.node.__shady_insertBefore(a, b);
  };n.removeChild = function (a) {
    return this.node.__shady_removeChild(a);
  };n.replaceChild = function (a, b) {
    return this.node.__shady_replaceChild(a, b);
  };
  n.cloneNode = function (a) {
    return this.node.__shady_cloneNode(a);
  };n.getRootNode = function (a) {
    return this.node.__shady_getRootNode(a);
  };n.contains = function (a) {
    return this.node.__shady_contains(a);
  };n.dispatchEvent = function (a) {
    return this.node.__shady_dispatchEvent(a);
  };n.setAttribute = function (a, b) {
    this.node.__shady_setAttribute(a, b);
  };n.getAttribute = function (a) {
    return this.node.__shady_native_getAttribute(a);
  };n.removeAttribute = function (a) {
    this.node.__shady_removeAttribute(a);
  };n.attachShadow = function (a) {
    return this.node.__shady_attachShadow(a);
  };
  n.focus = function () {
    this.node.__shady_native_focus();
  };n.blur = function () {
    this.node.__shady_blur();
  };n.importNode = function (a, b) {
    if (this.node.nodeType === Node.DOCUMENT_NODE) return this.node.__shady_importNode(a, b);
  };n.getElementById = function (a) {
    if (this.node.nodeType === Node.DOCUMENT_NODE) return this.node.__shady_getElementById(a);
  };n.querySelector = function (a) {
    return this.node.__shady_querySelector(a);
  };n.querySelectorAll = function (a, b) {
    return this.node.__shady_querySelectorAll(a, b);
  };
  n.assignedNodes = function (a) {
    if ("slot" === this.node.localName) return this.node.__shady_assignedNodes(a);
  };n.append = function (a) {
    for (var b = [], c = 0; c < arguments.length; ++c) b[c] = arguments[c];return this.node.__shady_append.apply(this.node, p(b));
  };n.prepend = function (a) {
    for (var b = [], c = 0; c < arguments.length; ++c) b[c] = arguments[c];return this.node.__shady_prepend.apply(this.node, p(b));
  };n.after = function (a) {
    for (var b = [], c = 0; c < arguments.length; ++c) b[c] = arguments[c];return this.node.__shady_after.apply(this.node, p(b));
  };
  n.before = function (a) {
    for (var b = [], c = 0; c < arguments.length; ++c) b[c] = arguments[c];return this.node.__shady_before.apply(this.node, p(b));
  };n.remove = function () {
    return this.node.__shady_remove();
  };n.replaceWith = function (a) {
    for (var b = [], c = 0; c < arguments.length; ++c) b[c] = arguments[c];return this.node.__shady_replaceWith.apply(this.node, p(b));
  };
  ca.Object.defineProperties(O.prototype, { activeElement: { configurable: !0, enumerable: !0, get: function () {
        if (x(this.node) || this.node.nodeType === Node.DOCUMENT_NODE) return this.node.__shady_activeElement;
      } }, _activeElement: { configurable: !0, enumerable: !0, get: function () {
        return this.activeElement;
      } }, host: { configurable: !0, enumerable: !0, get: function () {
        if (x(this.node)) return this.node.host;
      } }, parentNode: { configurable: !0, enumerable: !0, get: function () {
        return this.node.__shady_parentNode;
      } }, firstChild: { configurable: !0,
      enumerable: !0, get: function () {
        return this.node.__shady_firstChild;
      } }, lastChild: { configurable: !0, enumerable: !0, get: function () {
        return this.node.__shady_lastChild;
      } }, nextSibling: { configurable: !0, enumerable: !0, get: function () {
        return this.node.__shady_nextSibling;
      } }, previousSibling: { configurable: !0, enumerable: !0, get: function () {
        return this.node.__shady_previousSibling;
      } }, childNodes: { configurable: !0, enumerable: !0, get: function () {
        return this.node.__shady_childNodes;
      } }, parentElement: { configurable: !0, enumerable: !0,
      get: function () {
        return this.node.__shady_parentElement;
      } }, firstElementChild: { configurable: !0, enumerable: !0, get: function () {
        return this.node.__shady_firstElementChild;
      } }, lastElementChild: { configurable: !0, enumerable: !0, get: function () {
        return this.node.__shady_lastElementChild;
      } }, nextElementSibling: { configurable: !0, enumerable: !0, get: function () {
        return this.node.__shady_nextElementSibling;
      } }, previousElementSibling: { configurable: !0, enumerable: !0, get: function () {
        return this.node.__shady_previousElementSibling;
      } },
    children: { configurable: !0, enumerable: !0, get: function () {
        return this.node.__shady_children;
      } }, childElementCount: { configurable: !0, enumerable: !0, get: function () {
        return this.node.__shady_childElementCount;
      } }, shadowRoot: { configurable: !0, enumerable: !0, get: function () {
        return this.node.__shady_shadowRoot;
      } }, assignedSlot: { configurable: !0, enumerable: !0, get: function () {
        return this.node.__shady_assignedSlot;
      } }, isConnected: { configurable: !0, enumerable: !0, get: function () {
        return this.node.__shady_isConnected;
      } }, innerHTML: { configurable: !0,
      enumerable: !0, get: function () {
        return this.node.__shady_innerHTML;
      }, set: function (a) {
        this.node.__shady_innerHTML = a;
      } }, textContent: { configurable: !0, enumerable: !0, get: function () {
        return this.node.__shady_textContent;
      }, set: function (a) {
        this.node.__shady_textContent = a;
      } }, slot: { configurable: !0, enumerable: !0, get: function () {
        return this.node.__shady_slot;
      }, set: function (a) {
        this.node.__shady_slot = a;
      } }, className: { configurable: !0, enumerable: !0, get: function () {
        return this.node.__shady_className;
      }, set: function (a) {
        return this.node.__shady_className = a;
      } } });function Wc(a) {
    Object.defineProperty(O.prototype, a, { get: function () {
        return this.node["__shady_" + a];
      }, set: function (b) {
        this.node["__shady_" + a] = b;
      }, configurable: !0 });
  }Db.forEach(function (a) {
    return Wc(a);
  });Eb.forEach(function (a) {
    return Wc(a);
  });var Xc = new WeakMap();function Yc(a) {
    if (x(a) || a instanceof O) return a;var b = Xc.get(a);b || (b = new O(a), Xc.set(a, b));return b;
  }if (v.R) {
    var Zc = v.h ? function (a) {
      return a;
    } : function (a) {
      cb(a);bb(a);return a;
    },
        ShadyDOM = { inUse: v.R, patch: Zc, isShadyRoot: x, enqueue: ya, flush: za, flushInitial: function (a) {
        !a.V && a.A && cc(a);
      }, settings: v, filterMutations: Ea, observeChildren: Ca, unobserveChildren: Da, deferConnectionCallbacks: v.deferConnectionCallbacks, preferPerformance: v.preferPerformance, handlesDynamicScoping: !0, wrap: v.j ? Yc : Zc, wrapIfNeeded: !0 === v.j ? Yc : function (a) {
        return a;
      }, Wrapper: O, composedPath: lb, noPatch: v.j, patchOnDemand: v.T, nativeMethods: Oa,
      nativeTree: Pa, patchElementProto: Gc };window.ShadyDOM = ShadyDOM;Wa();Fc("__shady_");Object.defineProperty(document, "_activeElement", Ac.activeElement);z(Window.prototype, Dc, "__shady_");v.j ? v.T && z(Element.prototype, uc) : (Fc(), Cb());xb();window.Event = zb;window.CustomEvent = Ab;window.MouseEvent = Bb;window.ShadowRoot = sc;
  } /*
     Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
     The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
     The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
     Code distributed by Google as part of the polymer project is also
     subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
     */
  function $c() {
    this.end = this.start = 0;this.rules = this.parent = this.previous = null;this.cssText = this.parsedCssText = "";this.atRule = !1;this.type = 0;this.parsedSelector = this.selector = this.keyframesName = "";
  }
  function ad(a) {
    var b = a = a.replace(bd, "").replace(cd, ""),
        c = new $c();c.start = 0;c.end = b.length;for (var d = c, e = 0, f = b.length; e < f; e++) if ("{" === b[e]) {
      d.rules || (d.rules = []);var g = d,
          h = g.rules[g.rules.length - 1] || null;d = new $c();d.start = e + 1;d.parent = g;d.previous = h;g.rules.push(d);
    } else "}" === b[e] && (d.end = e + 1, d = d.parent || c);return dd(c, a);
  }
  function dd(a, b) {
    var c = b.substring(a.start, a.end - 1);a.parsedCssText = a.cssText = c.trim();a.parent && (c = b.substring(a.previous ? a.previous.end : a.parent.start, a.start - 1), c = ed(c), c = c.replace(fd, " "), c = c.substring(c.lastIndexOf(";") + 1), c = a.parsedSelector = a.selector = c.trim(), a.atRule = 0 === c.indexOf("@"), a.atRule ? 0 === c.indexOf("@media") ? a.type = gd : c.match(hd) && (a.type = id, a.keyframesName = a.selector.split(fd).pop()) : a.type = 0 === c.indexOf("--") ? jd : kd);if (c = a.rules) for (var d = 0, e = c.length, f = void 0; d < e && (f = c[d]); d++) dd(f, b);return a;
  }function ed(a) {
    return a.replace(/\\([0-9a-f]{1,6})\s/gi, function (b, c) {
      b = c;for (c = 6 - b.length; c--;) b = "0" + b;return "\\" + b;
    });
  }
  function ld(a, b, c) {
    c = void 0 === c ? "" : c;var d = "";if (a.cssText || a.rules) {
      var e = a.rules,
          f;if (f = e) f = e[0], f = !(f && f.selector && 0 === f.selector.indexOf("--"));if (f) {
        f = 0;for (var g = e.length, h = void 0; f < g && (h = e[f]); f++) d = ld(h, b, d);
      } else b ? b = a.cssText : (b = a.cssText, b = b.replace(md, "").replace(nd, ""), b = b.replace(od, "").replace(pd, "")), (d = b.trim()) && (d = "  " + d + "\n");
    }d && (a.selector && (c += a.selector + " {\n"), c += d, a.selector && (c += "}\n\n"));return c;
  }
  var kd = 1,
      id = 7,
      gd = 4,
      jd = 1E3,
      bd = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,
      cd = /@import[^;]*;/gim,
      md = /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,
      nd = /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,
      od = /@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,
      pd = /[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,
      hd = /^@[^\s]*keyframes/,
      fd = /\s+/g;var P = !(window.ShadyDOM && window.ShadyDOM.inUse),
      qd;function rd(a) {
    qd = a && a.shimcssproperties ? !1 : P || !(navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/) || !window.CSS || !CSS.supports || !CSS.supports("box-shadow", "0 0 0 var(--foo)"));
  }var sd;window.ShadyCSS && void 0 !== window.ShadyCSS.cssBuild && (sd = window.ShadyCSS.cssBuild);var Q = !(!window.ShadyCSS || !window.ShadyCSS.disableRuntime);
  window.ShadyCSS && void 0 !== window.ShadyCSS.nativeCss ? qd = window.ShadyCSS.nativeCss : window.ShadyCSS ? (rd(window.ShadyCSS), window.ShadyCSS = void 0) : rd(window.WebComponents && window.WebComponents.flags);var R = qd;var td = /(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,
      ud = /(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,
      vd = /(--[\w-]+)\s*([:,;)]|$)/gi,
      wd = /(animation\s*:)|(animation-name\s*:)/,
      xd = /@media\s(.*)/,
      yd = /\{[^}]*\}/g;var zd = new Set();function S(a, b) {
    if (!a) return "";"string" === typeof a && (a = ad(a));b && Ad(a, b);return ld(a, R);
  }function Bd(a) {
    !a.__cssRules && a.textContent && (a.__cssRules = ad(a.textContent));return a.__cssRules || null;
  }function Cd(a) {
    return !!a.parent && a.parent.type === id;
  }function Ad(a, b, c, d) {
    if (a) {
      var e = !1,
          f = a.type;if (d && f === gd) {
        var g = a.selector.match(xd);g && (window.matchMedia(g[1]).matches || (e = !0));
      }f === kd ? b(a) : c && f === id ? c(a) : f === jd && (e = !0);if ((a = a.rules) && !e) for (e = 0, f = a.length, g = void 0; e < f && (g = a[e]); e++) Ad(g, b, c, d);
    }
  }
  function Dd(a, b, c, d) {
    var e = document.createElement("style");b && e.setAttribute("scope", b);e.textContent = a;Ed(e, c, d);return e;
  }var T = null;function Fd(a) {
    a = document.createComment(" Shady DOM styles for " + a + " ");var b = document.head;b.insertBefore(a, (T ? T.nextSibling : null) || b.firstChild);return T = a;
  }function Ed(a, b, c) {
    b = b || document.head;b.insertBefore(a, c && c.nextSibling || b.firstChild);T ? a.compareDocumentPosition(T) === Node.DOCUMENT_POSITION_PRECEDING && (T = a) : T = a;
  }
  function Gd(a, b) {
    for (var c = 0, d = a.length; b < d; b++) if ("(" === a[b]) c++;else if (")" === a[b] && 0 === --c) return b;return -1;
  }function Hd(a, b) {
    var c = a.indexOf("var(");if (-1 === c) return b(a, "", "", "");var d = Gd(a, c + 3),
        e = a.substring(c + 4, d);c = a.substring(0, c);a = Hd(a.substring(d + 1), b);d = e.indexOf(",");return -1 === d ? b(c, e.trim(), "", a) : b(c, e.substring(0, d).trim(), e.substring(d + 1).trim(), a);
  }function Id(a, b) {
    P ? a.setAttribute("class", b) : window.ShadyDOM.nativeMethods.setAttribute.call(a, "class", b);
  }
  var Jd = window.ShadyDOM && window.ShadyDOM.wrap || function (a) {
    return a;
  };function U(a) {
    var b = a.localName,
        c = "";b ? -1 < b.indexOf("-") || (c = b, b = a.getAttribute && a.getAttribute("is") || "") : (b = a.is, c = a.extends);return { is: b, G: c };
  }function Kd(a) {
    for (var b = [], c = "", d = 0; 0 <= d && d < a.length; d++) if ("(" === a[d]) {
      var e = Gd(a, d);c += a.slice(d, e + 1);d = e;
    } else "," === a[d] ? (b.push(c), c = "") : c += a[d];c && b.push(c);return b;
  }
  function Ld(a) {
    if (void 0 !== sd) return sd;if (void 0 === a.__cssBuild) {
      var b = a.getAttribute("css-build");if (b) a.__cssBuild = b;else {
        a: {
          b = "template" === a.localName ? a.content.firstChild : a.firstChild;if (b instanceof Comment && (b = b.textContent.trim().split(":"), "css-build" === b[0])) {
            b = b[1];break a;
          }b = "";
        }if ("" !== b) {
          var c = "template" === a.localName ? a.content.firstChild : a.firstChild;c.parentNode.removeChild(c);
        }a.__cssBuild = b;
      }
    }return a.__cssBuild || "";
  }
  function Md(a) {
    a = void 0 === a ? "" : a;return "" !== a && R ? P ? "shadow" === a : "shady" === a : !1;
  }function Nd() {}function Od(a, b) {
    Pd(V, a, function (c) {
      W(c, b || "");
    });
  }function Pd(a, b, c) {
    b.nodeType === Node.ELEMENT_NODE && c(b);var d;"template" === b.localName ? d = (b.content || b._content || b).childNodes : d = b.children || b.childNodes;if (d) for (b = 0; b < d.length; b++) Pd(a, d[b], c);
  }
  function W(a, b, c) {
    if (b) if (a.classList) c ? (a.classList.remove("style-scope"), a.classList.remove(b)) : (a.classList.add("style-scope"), a.classList.add(b));else if (a.getAttribute) {
      var d = a.getAttribute("class");c ? d && (b = d.replace("style-scope", "").replace(b, ""), Id(a, b)) : Id(a, (d ? d + " " : "") + "style-scope " + b);
    }
  }function Qd(a, b, c) {
    Pd(V, a, function (d) {
      W(d, b, !0);W(d, c);
    });
  }function Rd(a, b) {
    Pd(V, a, function (c) {
      W(c, b || "", !0);
    });
  }
  function Sd(a, b, c, d, e) {
    var f = V;e = void 0 === e ? "" : e;"" === e && (P || "shady" === (void 0 === d ? "" : d) ? e = S(b, c) : (a = U(a), e = Td(f, b, a.is, a.G, c) + "\n\n"));return e.trim();
  }function Td(a, b, c, d, e) {
    var f = Ud(c, d);c = c ? "." + c : "";return S(b, function (g) {
      g.c || (g.selector = g.g = Vd(a, g, a.b, c, f), g.c = !0);e && e(g, c, f);
    });
  }function Ud(a, b) {
    return b ? "[is=" + a + "]" : a;
  }
  function Vd(a, b, c, d, e) {
    var f = Kd(b.selector);if (!Cd(b)) {
      b = 0;for (var g = f.length, h = void 0; b < g && (h = f[b]); b++) f[b] = c.call(a, h, d, e);
    }return f.filter(function (l) {
      return !!l;
    }).join(",");
  }function Wd(a) {
    return a.replace(Xd, function (b, c, d) {
      -1 < d.indexOf("+") ? d = d.replace(/\+/g, "___") : -1 < d.indexOf("___") && (d = d.replace(/___/g, "+"));return ":" + c + "(" + d + ")";
    });
  }
  function Yd(a) {
    for (var b = [], c; c = a.match(Zd);) {
      var d = c.index,
          e = Gd(a, d);if (-1 === e) throw Error(c.input + " selector missing ')'");c = a.slice(d, e + 1);a = a.replace(c, "\ue000");b.push(c);
    }return { U: a, matches: b };
  }function $d(a, b) {
    var c = a.split("\ue000");return b.reduce(function (d, e, f) {
      return d + e + c[f + 1];
    }, c[0]);
  }
  Nd.prototype.b = function (a, b, c) {
    var d = !1;a = a.trim();var e = Xd.test(a);e && (a = a.replace(Xd, function (h, l, k) {
      return ":" + l + "(" + k.replace(/\s/g, "") + ")";
    }), a = Wd(a));var f = Zd.test(a);if (f) {
      var g = Yd(a);a = g.U;g = g.matches;
    }a = a.replace(ae, ":host $1");a = a.replace(be, function (h, l, k) {
      d || (h = ce(k, l, b, c), d = d || h.stop, l = h.ka, k = h.value);return l + k;
    });f && (a = $d(a, g));e && (a = Wd(a));return a = a.replace(de, function (h, l, k, m) {
      return '[dir="' + k + '"] ' + l + m + ", " + l + '[dir="' + k + '"]' + m;
    });
  };
  function ce(a, b, c, d) {
    var e = a.indexOf("::slotted");0 <= a.indexOf(":host") ? a = ee(a, d) : 0 !== e && (a = c ? fe(a, c) : a);c = !1;0 <= e && (b = "", c = !0);if (c) {
      var f = !0;c && (a = a.replace(ge, function (g, h) {
        return " > " + h;
      }));
    }return { value: a, ka: b, stop: f };
  }function fe(a, b) {
    a = a.split(/(\[.+?\])/);for (var c = [], d = 0; d < a.length; d++) if (1 === d % 2) c.push(a[d]);else {
      var e = a[d];if ("" !== e || d !== a.length - 1) e = e.split(":"), e[0] += b, c.push(e.join(":"));
    }return c.join("");
  }
  function ee(a, b) {
    var c = a.match(he);return (c = c && c[2].trim() || "") ? c[0].match(ie) ? a.replace(he, function (d, e, f) {
      return b + f;
    }) : c.split(ie)[0] === b ? c : "should_not_match" : a.replace(":host", b);
  }function je(a) {
    ":root" === a.selector && (a.selector = "html");
  }Nd.prototype.c = function (a) {
    return a.match(":host") ? "" : a.match("::slotted") ? this.b(a, ":not(.style-scope)") : fe(a.trim(), ":not(.style-scope)");
  };ca.Object.defineProperties(Nd.prototype, { a: { configurable: !0, enumerable: !0, get: function () {
        return "style-scope";
      } } });
  var Xd = /:(nth[-\w]+)\(([^)]+)\)/,
      be = /(^|[\s>+~]+)((?:\[.+?\]|[^\s>+~=[])+)/g,
      ie = /[[.:#*]/,
      ae = /^(::slotted)/,
      he = /(:host)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/,
      ge = /(?:::slotted)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/,
      de = /(.*):dir\((?:(ltr|rtl))\)(.*)/,
      Zd = /:(?:matches|any|-(?:webkit|moz)-any)/,
      V = new Nd();function ke(a, b, c, d, e) {
    this.o = a || null;this.b = b || null;this.S = c || [];this.l = null;this.cssBuild = e || "";this.G = d || "";this.a = this.m = this.u = null;
  }function X(a) {
    return a ? a.__styleInfo : null;
  }function le(a, b) {
    return a.__styleInfo = b;
  }ke.prototype.c = function () {
    return this.o;
  };ke.prototype._getStyleRules = ke.prototype.c;function me(a) {
    var b = this.matches || this.matchesSelector || this.mozMatchesSelector || this.msMatchesSelector || this.oMatchesSelector || this.webkitMatchesSelector;return b && b.call(this, a);
  }var ne = /:host\s*>\s*/,
      oe = navigator.userAgent.match("Trident");function pe() {}function qe(a) {
    var b = {},
        c = [],
        d = 0;Ad(a, function (f) {
      re(f);f.index = d++;f = f.f.cssText;for (var g; g = vd.exec(f);) {
        var h = g[1];":" !== g[2] && (b[h] = !0);
      }
    }, function (f) {
      c.push(f);
    });a.b = c;a = [];for (var e in b) a.push(e);return a;
  }
  function re(a) {
    if (!a.f) {
      var b = {},
          c = {};se(a, c) && (b.s = c, a.rules = null);b.cssText = a.parsedCssText.replace(yd, "").replace(td, "");a.f = b;
    }
  }function se(a, b) {
    var c = a.f;if (c) {
      if (c.s) return Object.assign(b, c.s), !0;
    } else {
      c = a.parsedCssText;for (var d; a = td.exec(c);) {
        d = (a[2] || a[3]).trim();if ("inherit" !== d || "unset" !== d) b[a[1].trim()] = d;d = !0;
      }return d;
    }
  }
  function te(a, b, c) {
    b && (b = 0 <= b.indexOf(";") ? ue(a, b, c) : Hd(b, function (d, e, f, g) {
      if (!e) return d + g;(e = te(a, c[e], c)) && "initial" !== e ? "apply-shim-inherit" === e && (e = "inherit") : e = te(a, c[f] || f, c) || f;return d + (e || "") + g;
    }));return b && b.trim() || "";
  }
  function ue(a, b, c) {
    b = b.split(";");for (var d = 0, e, f; d < b.length; d++) if (e = b[d]) {
      ud.lastIndex = 0;if (f = ud.exec(e)) e = te(a, c[f[1]], c);else if (f = e.indexOf(":"), -1 !== f) {
        var g = e.substring(f);g = g.trim();g = te(a, g, c) || g;e = e.substring(0, f) + g;
      }b[d] = e && e.lastIndexOf(";") === e.length - 1 ? e.slice(0, -1) : e || "";
    }return b.join(";");
  }
  function ve(a, b) {
    var c = {},
        d = [];Ad(a, function (e) {
      e.f || re(e);var f = e.g || e.parsedSelector;b && e.f.s && f && me.call(b, f) && (se(e, c), e = e.index, f = parseInt(e / 32, 10), d[f] = (d[f] || 0) | 1 << e % 32);
    }, null, !0);return { s: c, key: d };
  }
  function we(a, b, c, d) {
    b.f || re(b);if (b.f.s) {
      var e = U(a);a = e.is;e = e.G;e = a ? Ud(a, e) : "html";var f = b.parsedSelector;var g = !!f.match(ne) || "html" === e && -1 < f.indexOf("html");var h = 0 === f.indexOf(":host") && !g;"shady" === c && (g = f === e + " > *." + e || -1 !== f.indexOf("html"), h = !g && 0 === f.indexOf(e));if (g || h) c = e, h && (b.g || (b.g = Vd(V, b, V.b, a ? "." + a : "", e)), c = b.g || e), g && "html" === e && (c = b.g || b.K), d({ U: c, pa: h, za: g });
    }
  }
  function xe(a, b, c) {
    var d = {},
        e = {};Ad(b, function (f) {
      we(a, f, c, function (g) {
        me.call(a._element || a, g.U) && (g.pa ? se(f, d) : se(f, e));
      });
    }, null, !0);return { sa: e, oa: d };
  }
  function ye(a, b, c, d) {
    var e = U(b),
        f = Ud(e.is, e.G),
        g = new RegExp("(?:^|[^.#[:])" + (b.extends ? "\\" + f.slice(0, -1) + "\\]" : f) + "($|[.:[\\s>+~])"),
        h = X(b);e = h.o;h = h.cssBuild;var l = ze(e, d);return Sd(b, e, function (k) {
      var m = "";k.f || re(k);k.f.cssText && (m = ue(a, k.f.cssText, c));k.cssText = m;if (!P && !Cd(k) && k.cssText) {
        var r = m = k.cssText;null == k.Y && (k.Y = wd.test(m));if (k.Y) if (null == k.L) {
          k.L = [];for (var u in l) r = l[u], r = r(m), m !== r && (m = r, k.L.push(u));
        } else {
          for (u = 0; u < k.L.length; ++u) r = l[k.L[u]], m = r(m);r = m;
        }k.cssText = r;k.g = k.g || k.selector;
        m = "." + d;u = Kd(k.g);r = 0;for (var M = u.length, Ma = void 0; r < M && (Ma = u[r]); r++) u[r] = Ma.match(g) ? Ma.replace(f, m) : m + " " + Ma;k.selector = u.join(",");
      }
    }, h);
  }function ze(a, b) {
    a = a.b;var c = {};if (!P && a) for (var d = 0, e = a[d]; d < a.length; e = a[++d]) {
      var f = e,
          g = b;f.i = new RegExp("\\b" + f.keyframesName + "(?!\\B|-)", "g");f.a = f.keyframesName + "-" + g;f.g = f.g || f.selector;f.selector = f.g.replace(f.keyframesName, f.a);c[e.keyframesName] = Ae(e);
    }return c;
  }function Ae(a) {
    return function (b) {
      return b.replace(a.i, a.a);
    };
  }
  function Be(a, b) {
    var c = Ce,
        d = Bd(a);a.textContent = S(d, function (e) {
      var f = e.cssText = e.parsedCssText;e.f && e.f.cssText && (f = f.replace(md, "").replace(nd, ""), e.cssText = ue(c, f, b));
    });
  }ca.Object.defineProperties(pe.prototype, { a: { configurable: !0, enumerable: !0, get: function () {
        return "x-scope";
      } } });var Ce = new pe();var De = {},
      Ee = window.customElements;if (Ee && !P && !Q) {
    var Fe = Ee.define;Ee.define = function (a, b, c) {
      De[a] || (De[a] = Fd(a));Fe.call(Ee, a, b, c);
    };
  }function Ge() {
    this.cache = {};
  }Ge.prototype.store = function (a, b, c, d) {
    var e = this.cache[a] || [];e.push({ s: b, styleElement: c, m: d });100 < e.length && e.shift();this.cache[a] = e;
  };function He() {}var Ie = new RegExp(V.a + "\\s*([^\\s]*)");function Je(a) {
    return (a = (a.classList && a.classList.value ? a.classList.value : a.getAttribute("class") || "").match(Ie)) ? a[1] : "";
  }function Ke(a) {
    var b = Jd(a).getRootNode();return b === a || b === a.ownerDocument ? "" : (a = b.host) ? U(a).is : "";
  }
  function Le(a) {
    for (var b = 0; b < a.length; b++) {
      var c = a[b];if (c.target !== document.documentElement && c.target !== document.head) for (var d = 0; d < c.addedNodes.length; d++) {
        var e = c.addedNodes[d];if (e.nodeType === Node.ELEMENT_NODE) {
          var f = e.getRootNode(),
              g = Je(e);if (g && f === e.ownerDocument && ("style" !== e.localName && "template" !== e.localName || "" === Ld(e))) Rd(e, g);else if (f instanceof ShadowRoot) for (f = Ke(e), f !== g && Qd(e, g, f), e = window.ShadyDOM.nativeMethods.querySelectorAll.call(e, ":not(." + V.a + ")"), g = 0; g < e.length; g++) {
            f = e[g];
            var h = Ke(f);h && W(f, h);
          }
        }
      }
    }
  }
  if (!(P || window.ShadyDOM && window.ShadyDOM.handlesDynamicScoping)) {
    var Me = new MutationObserver(Le),
        Ne = function (a) {
      Me.observe(a, { childList: !0, subtree: !0 });
    };if (window.customElements && !window.customElements.polyfillWrapFlushCallback) Ne(document);else {
      var Oe = function () {
        Ne(document.body);
      };window.HTMLImports ? window.HTMLImports.whenReady(Oe) : requestAnimationFrame(function () {
        if ("loading" === document.readyState) {
          var a = function () {
            Oe();document.removeEventListener("readystatechange", a);
          };document.addEventListener("readystatechange", a);
        } else Oe();
      });
    }He = function () {
      Le(Me.takeRecords());
    };
  }var Pe = {};var Qe = Promise.resolve();function Re(a) {
    if (a = Pe[a]) a._applyShimCurrentVersion = a._applyShimCurrentVersion || 0, a._applyShimValidatingVersion = a._applyShimValidatingVersion || 0, a._applyShimNextVersion = (a._applyShimNextVersion || 0) + 1;
  }function Se(a) {
    return a._applyShimCurrentVersion === a._applyShimNextVersion;
  }function Te(a) {
    a._applyShimValidatingVersion = a._applyShimNextVersion;a._validating || (a._validating = !0, Qe.then(function () {
      a._applyShimCurrentVersion = a._applyShimNextVersion;a._validating = !1;
    }));
  }var Ue = {},
      Ve = new Ge();function Y() {
    this.X = {};this.c = document.documentElement;var a = new $c();a.rules = [];this.i = le(this.c, new ke(a));this.K = !1;this.a = this.b = null;
  }n = Y.prototype;n.flush = function () {
    He();
  };n.ma = function (a) {
    return Bd(a);
  };n.wa = function (a) {
    return S(a);
  };n.prepareTemplate = function (a, b, c) {
    this.prepareTemplateDom(a, b);this.prepareTemplateStyles(a, b, c);
  };
  n.prepareTemplateStyles = function (a, b, c) {
    if (!a._prepared && !Q) {
      P || De[b] || (De[b] = Fd(b));a._prepared = !0;a.name = b;a.extends = c;Pe[b] = a;var d = Ld(a),
          e = Md(d);c = { is: b, extends: c };for (var f = [], g = a.content.querySelectorAll("style"), h = 0; h < g.length; h++) {
        var l = g[h];if (l.hasAttribute("shady-unscoped")) {
          if (!P) {
            var k = l.textContent;if (!zd.has(k)) {
              zd.add(k);var m = document.createElement("style");m.setAttribute("shady-unscoped", "");m.textContent = k;document.head.appendChild(m);
            }l.parentNode.removeChild(l);
          }
        } else f.push(l.textContent), l.parentNode.removeChild(l);
      }f = f.join("").trim() + (Ue[b] || "");We(this);if (!e) {
        if (g = !d) g = ud.test(f) || td.test(f), ud.lastIndex = 0, td.lastIndex = 0;h = ad(f);g && R && this.b && this.b.transformRules(h, b);a._styleAst = h;
      }g = [];R || (g = qe(a._styleAst));if (!g.length || R) h = P ? a.content : null, b = De[b] || null, d = Sd(c, a._styleAst, null, d, e ? f : ""), d = d.length ? Dd(d, c.is, h, b) : null, a._style = d;a.a = g;
    }
  };n.qa = function (a, b) {
    Ue[b] = a.join(" ");
  };
  n.prepareTemplateDom = function (a, b) {
    if (!Q) {
      var c = Ld(a);P || "shady" === c || a._domPrepared || (a._domPrepared = !0, Od(a.content, b));
    }
  };function Xe(a) {
    var b = U(a),
        c = b.is;b = b.G;var d = De[c] || null,
        e = Pe[c];if (e) {
      c = e._styleAst;var f = e.a;e = Ld(e);b = new ke(c, d, f, b, e);le(a, b);return b;
    }
  }
  function Ye(a) {
    !a.a && window.ShadyCSS && window.ShadyCSS.CustomStyleInterface && (a.a = window.ShadyCSS.CustomStyleInterface, a.a.transformCallback = function (b) {
      a.ba(b);
    }, a.a.validateCallback = function () {
      requestAnimationFrame(function () {
        (a.a.enqueued || a.K) && a.flushCustomStyles();
      });
    });
  }function We(a) {
    if (!a.b && window.ShadyCSS && window.ShadyCSS.ApplyShim) {
      a.b = window.ShadyCSS.ApplyShim;a.b.invalidCallback = Re;var b = !0;
    } else b = !1;Ye(a);return b;
  }
  n.flushCustomStyles = function () {
    if (!Q) {
      var a = We(this);if (this.a) {
        var b = this.a.processStyles();if ((a || this.a.enqueued) && !Md(this.i.cssBuild)) {
          if (R) {
            if (!this.i.cssBuild) for (a = 0; a < b.length; a++) {
              var c = this.a.getStyleForCustomStyle(b[a]);if (c && R && this.b) {
                var d = Bd(c);We(this);this.b.transformRules(d);c.textContent = S(d);
              }
            }
          } else {
            Ze(this, b);$e(this, this.c, this.i);for (a = 0; a < b.length; a++) (c = this.a.getStyleForCustomStyle(b[a])) && Be(c, this.i.u);this.K && this.styleDocument();
          }this.a.enqueued = !1;
        }
      }
    }
  };
  function Ze(a, b) {
    b = b.map(function (c) {
      return a.a.getStyleForCustomStyle(c);
    }).filter(function (c) {
      return !!c;
    });b.sort(function (c, d) {
      c = d.compareDocumentPosition(c);return c & Node.DOCUMENT_POSITION_FOLLOWING ? 1 : c & Node.DOCUMENT_POSITION_PRECEDING ? -1 : 0;
    });a.i.o.rules = b.map(function (c) {
      return Bd(c);
    });
  }
  n.styleElement = function (a, b) {
    if (Q) {
      if (b) {
        X(a) || le(a, new ke(null));var c = X(a);c.l = c.l || {};Object.assign(c.l, b);af(this, a, c);
      }
    } else if (c = X(a) || Xe(a)) if (a !== this.c && (this.K = !0), b && (c.l = c.l || {}, Object.assign(c.l, b)), R) af(this, a, c);else if (this.flush(), $e(this, a, c), c.S && c.S.length) {
      b = U(a).is;var d;a: {
        if (d = Ve.cache[b]) for (var e = d.length - 1; 0 <= e; e--) {
          var f = d[e];b: {
            var g = c.S;for (var h = 0; h < g.length; h++) {
              var l = g[h];if (f.s[l] !== c.u[l]) {
                g = !1;break b;
              }
            }g = !0;
          }if (g) {
            d = f;break a;
          }
        }d = void 0;
      }g = d ? d.styleElement : null;e = c.m;
      (f = d && d.m) || (f = this.X[b] = (this.X[b] || 0) + 1, f = b + "-" + f);c.m = f;f = c.m;h = Ce;h = g ? g.textContent || "" : ye(h, a, c.u, f);l = X(a);var k = l.a;k && !P && k !== g && (k._useCount--, 0 >= k._useCount && k.parentNode && k.parentNode.removeChild(k));P ? l.a ? (l.a.textContent = h, g = l.a) : h && (g = Dd(h, f, a.shadowRoot, l.b)) : g ? g.parentNode || (oe && -1 < h.indexOf("@media") && (g.textContent = h), Ed(g, null, l.b)) : h && (g = Dd(h, f, null, l.b));g && (g._useCount = g._useCount || 0, l.a != g && g._useCount++, l.a = g);f = g;P || (g = c.m, l = h = a.getAttribute("class") || "", e && (l = h.replace(new RegExp("\\s*x-scope\\s*" + e + "\\s*", "g"), " ")), l += (l ? " " : "") + "x-scope " + g, h !== l && Id(a, l));d || Ve.store(b, c.u, f, c.m);
    }
  };
  function af(a, b, c) {
    var d = U(b).is;if (c.l) {
      var e = c.l,
          f;for (f in e) null === f ? b.style.removeProperty(f) : b.style.setProperty(f, e[f]);
    }e = Pe[d];if (!(!e && b !== a.c || e && "" !== Ld(e)) && e && e._style && !Se(e)) {
      if (Se(e) || e._applyShimValidatingVersion !== e._applyShimNextVersion) We(a), a.b && a.b.transformRules(e._styleAst, d), e._style.textContent = Sd(b, c.o), Te(e);P && (a = b.shadowRoot) && (a = a.querySelector("style")) && (a.textContent = Sd(b, c.o));c.o = e._styleAst;
    }
  }
  function bf(a, b) {
    return (b = Jd(b).getRootNode().host) ? X(b) || Xe(b) ? b : bf(a, b) : a.c;
  }function $e(a, b, c) {
    var d = bf(a, b),
        e = X(d),
        f = e.u;d === a.c || f || ($e(a, d, e), f = e.u);a = Object.create(f || null);d = xe(b, c.o, c.cssBuild);b = ve(e.o, b).s;Object.assign(a, d.oa, b, d.sa);b = c.l;for (var g in b) if ((e = b[g]) || 0 === e) a[g] = e;g = Ce;b = Object.getOwnPropertyNames(a);for (e = 0; e < b.length; e++) d = b[e], a[d] = te(g, a[d], a);c.u = a;
  }n.styleDocument = function (a) {
    this.styleSubtree(this.c, a);
  };
  n.styleSubtree = function (a, b) {
    var c = Jd(a),
        d = c.shadowRoot,
        e = a === this.c;(d || e) && this.styleElement(a, b);if (a = e ? c : d) for (a = Array.from(a.querySelectorAll("*")).filter(function (f) {
      return Jd(f).shadowRoot;
    }), b = 0; b < a.length; b++) this.styleSubtree(a[b]);
  };
  n.ba = function (a) {
    var b = this,
        c = Ld(a);c !== this.i.cssBuild && (this.i.cssBuild = c);if (!Md(c)) {
      var d = Bd(a);Ad(d, function (e) {
        if (P) je(e);else {
          var f = V;e.selector = e.parsedSelector;je(e);e.selector = e.g = Vd(f, e, f.c, void 0, void 0);
        }R && "" === c && (We(b), b.b && b.b.transformRule(e));
      });R ? a.textContent = S(d) : this.i.o.rules.push(d);
    }
  };n.getComputedStyleValue = function (a, b) {
    var c;R || (c = (X(a) || X(bf(this, a))).u[b]);return (c = c || window.getComputedStyle(a).getPropertyValue(b)) ? c.trim() : "";
  };
  n.va = function (a, b) {
    var c = Jd(a).getRootNode(),
        d;b ? d = ("string" === typeof b ? b : String(b)).split(/\s/) : d = [];b = c.host && c.host.localName;if (!b && (c = a.getAttribute("class"))) {
      c = c.split(/\s/);for (var e = 0; e < c.length; e++) if (c[e] === V.a) {
        b = c[e + 1];break;
      }
    }b && d.push(V.a, b);R || (b = X(a)) && b.m && d.push(Ce.a, b.m);Id(a, d.join(" "));
  };n.ja = function (a) {
    return X(a);
  };n.ua = function (a, b) {
    W(a, b);
  };n.xa = function (a, b) {
    W(a, b, !0);
  };n.ta = function (a) {
    return Ke(a);
  };n.la = function (a) {
    return Je(a);
  };Y.prototype.flush = Y.prototype.flush;
  Y.prototype.prepareTemplate = Y.prototype.prepareTemplate;Y.prototype.styleElement = Y.prototype.styleElement;Y.prototype.styleDocument = Y.prototype.styleDocument;Y.prototype.styleSubtree = Y.prototype.styleSubtree;Y.prototype.getComputedStyleValue = Y.prototype.getComputedStyleValue;Y.prototype.setElementClass = Y.prototype.va;Y.prototype._styleInfoForNode = Y.prototype.ja;Y.prototype.transformCustomStyleForDocument = Y.prototype.ba;Y.prototype.getStyleAst = Y.prototype.ma;Y.prototype.styleAstToString = Y.prototype.wa;
  Y.prototype.flushCustomStyles = Y.prototype.flushCustomStyles;Y.prototype.scopeNode = Y.prototype.ua;Y.prototype.unscopeNode = Y.prototype.xa;Y.prototype.scopeForNode = Y.prototype.ta;Y.prototype.currentScopeForNode = Y.prototype.la;Y.prototype.prepareAdoptedCssText = Y.prototype.qa;Object.defineProperties(Y.prototype, { nativeShadow: { get: function () {
        return P;
      } }, nativeCss: { get: function () {
        return R;
      } } });var Z = new Y(),
      cf,
      df;window.ShadyCSS && (cf = window.ShadyCSS.ApplyShim, df = window.ShadyCSS.CustomStyleInterface);
  window.ShadyCSS = { ScopingShim: Z, prepareTemplate: function (a, b, c) {
      Z.flushCustomStyles();Z.prepareTemplate(a, b, c);
    }, prepareTemplateDom: function (a, b) {
      Z.prepareTemplateDom(a, b);
    }, prepareTemplateStyles: function (a, b, c) {
      Z.flushCustomStyles();Z.prepareTemplateStyles(a, b, c);
    }, styleSubtree: function (a, b) {
      Z.flushCustomStyles();Z.styleSubtree(a, b);
    }, styleElement: function (a) {
      Z.flushCustomStyles();Z.styleElement(a);
    }, styleDocument: function (a) {
      Z.flushCustomStyles();Z.styleDocument(a);
    }, flushCustomStyles: function () {
      Z.flushCustomStyles();
    },
    getComputedStyleValue: function (a, b) {
      return Z.getComputedStyleValue(a, b);
    }, nativeCss: R, nativeShadow: P, cssBuild: sd, disableRuntime: Q };cf && (window.ShadyCSS.ApplyShim = cf);df && (window.ShadyCSS.CustomStyleInterface = df);
}).call(this);

//# sourceMappingURL=webcomponents-sd.js.map