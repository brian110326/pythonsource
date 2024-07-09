/*! For license information please see material.js.LICENSE.txt */
(() => {
  "use strict";
  var e = function (t, i) {
    return (
      (e =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (e, t) {
            e.__proto__ = t;
          }) ||
        function (e, t) {
          for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        }),
      e(t, i)
    );
  };
  function t(t, i) {
    if ("function" != typeof i && null !== i) throw new TypeError("Class extends value " + String(i) + " is not a constructor or null");
    function r() {
      this.constructor = t;
    }
    e(t, i), (t.prototype = null === i ? Object.create(i) : ((r.prototype = i.prototype), new r()));
  }
  var i = function () {
    return (
      (i =
        Object.assign ||
        function (e) {
          for (var t, i = 1, r = arguments.length; i < r; i++)
            for (var n in (t = arguments[i])) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
          return e;
        }),
      i.apply(this, arguments)
    );
  };
  function r(e, t, i, r) {
    var n,
      o = arguments.length,
      a = o < 3 ? t : null === r ? (r = Object.getOwnPropertyDescriptor(t, i)) : r;
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, i, r);
    else for (var d = e.length - 1; d >= 0; d--) (n = e[d]) && (a = (o < 3 ? n(a) : o > 3 ? n(t, i, a) : n(t, i)) || a);
    return o > 3 && a && Object.defineProperty(t, i, a), a;
  }
  function n(e) {
    var t = "function" == typeof Symbol && Symbol.iterator,
      i = t && e[t],
      r = 0;
    if (i) return i.call(e);
    if (e && "number" == typeof e.length)
      return {
        next: function () {
          return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e };
        },
      };
    throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
  }
  function o(e, t) {
    var i = "function" == typeof Symbol && e[Symbol.iterator];
    if (!i) return e;
    var r,
      n,
      o = i.call(e),
      a = [];
    try {
      for (; (void 0 === t || t-- > 0) && !(r = o.next()).done; ) a.push(r.value);
    } catch (e) {
      n = { error: e };
    } finally {
      try {
        r && !r.done && (i = o.return) && i.call(o);
      } finally {
        if (n) throw n.error;
      }
    }
    return a;
  }
  function a(e, t, i) {
    if (i || 2 === arguments.length)
      for (var r, n = 0, o = t.length; n < o; n++) (!r && n in t) || (r || (r = Array.prototype.slice.call(t, 0, n)), (r[n] = t[n]));
    return e.concat(r || Array.prototype.slice.call(t));
  }
  Object.create, Object.create;
  var d = (function () {
      function e(e) {
        void 0 === e && (e = {}), (this.adapter = e);
      }
      return (
        Object.defineProperty(e, "cssClasses", {
          get: function () {
            return {};
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e, "strings", {
          get: function () {
            return {};
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e, "numbers", {
          get: function () {
            return {};
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e, "defaultAdapter", {
          get: function () {
            return {};
          },
          enumerable: !1,
          configurable: !0,
        }),
        (e.prototype.init = function () {}),
        (e.prototype.destroy = function () {}),
        e
      );
    })(),
    c = (function () {
      function e(e, t) {
        for (var i = [], r = 2; r < arguments.length; r++) i[r - 2] = arguments[r];
        (this.root = e),
          this.initialize.apply(this, a([], o(i))),
          (this.foundation = void 0 === t ? this.getDefaultFoundation() : t),
          this.foundation.init(),
          this.initialSyncWithDOM();
      }
      return (
        (e.attachTo = function (t) {
          return new e(t, new d({}));
        }),
        (e.prototype.initialize = function () {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        }),
        (e.prototype.getDefaultFoundation = function () {
          throw new Error("Subclasses must override getDefaultFoundation to return a properly configured foundation class");
        }),
        (e.prototype.initialSyncWithDOM = function () {}),
        (e.prototype.destroy = function () {
          this.foundation.destroy();
        }),
        (e.prototype.listen = function (e, t, i) {
          this.root.addEventListener(e, t, i);
        }),
        (e.prototype.unlisten = function (e, t, i) {
          this.root.removeEventListener(e, t, i);
        }),
        (e.prototype.emit = function (e, t, i) {
          var r;
          void 0 === i && (i = !1),
            "function" == typeof CustomEvent
              ? (r = new CustomEvent(e, { bubbles: i, detail: t }))
              : (r = document.createEvent("CustomEvent")).initCustomEvent(e, i, !1, t),
            this.root.dispatchEvent(r);
        }),
        e
      );
    })();
  function s(e) {
    return (
      void 0 === e && (e = window),
      !!(function (e) {
        void 0 === e && (e = window);
        var t = !1;
        try {
          var i = {
              get passive() {
                return (t = !0), !1;
              },
            },
            r = function () {};
          e.document.addEventListener("test", r, i), e.document.removeEventListener("test", r, i);
        } catch (e) {
          t = !1;
        }
        return t;
      })(e) && { passive: !0 }
    );
  }
  var l,
    p = {
      BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
      FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
      FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
      ROOT: "mdc-ripple-upgraded",
      UNBOUNDED: "mdc-ripple-upgraded--unbounded",
    },
    m = {
      VAR_FG_SCALE: "--mdc-ripple-fg-scale",
      VAR_FG_SIZE: "--mdc-ripple-fg-size",
      VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
      VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
      VAR_LEFT: "--mdc-ripple-left",
      VAR_TOP: "--mdc-ripple-top",
    },
    h = { DEACTIVATION_TIMEOUT_MS: 225, FG_DEACTIVATION_MS: 150, INITIAL_ORIGIN_SCALE: 0.6, PADDING: 10, TAP_DELAY_MS: 300 },
    u = ["touchstart", "pointerdown", "mousedown", "keydown"],
    f = ["touchend", "pointerup", "mouseup", "contextmenu"],
    b = [],
    g = (function (e) {
      function r(t) {
        var n = e.call(this, i(i({}, r.defaultAdapter), t)) || this;
        return (
          (n.activationAnimationHasEnded = !1),
          (n.activationTimer = 0),
          (n.fgDeactivationRemovalTimer = 0),
          (n.fgScale = "0"),
          (n.frame = { width: 0, height: 0 }),
          (n.initialSize = 0),
          (n.layoutFrame = 0),
          (n.maxRadius = 0),
          (n.unboundedCoords = { left: 0, top: 0 }),
          (n.activationState = n.defaultActivationState()),
          (n.activationTimerCallback = function () {
            (n.activationAnimationHasEnded = !0), n.runDeactivationUXLogicIfReady();
          }),
          (n.activateHandler = function (e) {
            n.activateImpl(e);
          }),
          (n.deactivateHandler = function () {
            n.deactivateImpl();
          }),
          (n.focusHandler = function () {
            n.handleFocus();
          }),
          (n.blurHandler = function () {
            n.handleBlur();
          }),
          (n.resizeHandler = function () {
            n.layout();
          }),
          n
        );
      }
      return (
        t(r, e),
        Object.defineProperty(r, "cssClasses", {
          get: function () {
            return p;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(r, "strings", {
          get: function () {
            return m;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(r, "numbers", {
          get: function () {
            return h;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(r, "defaultAdapter", {
          get: function () {
            return {
              addClass: function () {},
              browserSupportsCssVars: function () {
                return !0;
              },
              computeBoundingRect: function () {
                return { top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 };
              },
              containsEventTarget: function () {
                return !0;
              },
              deregisterDocumentInteractionHandler: function () {},
              deregisterInteractionHandler: function () {},
              deregisterResizeHandler: function () {},
              getWindowPageOffset: function () {
                return { x: 0, y: 0 };
              },
              isSurfaceActive: function () {
                return !0;
              },
              isSurfaceDisabled: function () {
                return !0;
              },
              isUnbounded: function () {
                return !0;
              },
              registerDocumentInteractionHandler: function () {},
              registerInteractionHandler: function () {},
              registerResizeHandler: function () {},
              removeClass: function () {},
              updateCssVariable: function () {},
            };
          },
          enumerable: !1,
          configurable: !0,
        }),
        (r.prototype.init = function () {
          var e = this,
            t = this.supportsPressRipple();
          if ((this.registerRootHandlers(t), t)) {
            var i = r.cssClasses,
              n = i.ROOT,
              o = i.UNBOUNDED;
            requestAnimationFrame(function () {
              e.adapter.addClass(n), e.adapter.isUnbounded() && (e.adapter.addClass(o), e.layoutInternal());
            });
          }
        }),
        (r.prototype.destroy = function () {
          var e = this;
          if (this.supportsPressRipple()) {
            this.activationTimer &&
              (clearTimeout(this.activationTimer), (this.activationTimer = 0), this.adapter.removeClass(r.cssClasses.FG_ACTIVATION)),
              this.fgDeactivationRemovalTimer &&
                (clearTimeout(this.fgDeactivationRemovalTimer),
                (this.fgDeactivationRemovalTimer = 0),
                this.adapter.removeClass(r.cssClasses.FG_DEACTIVATION));
            var t = r.cssClasses,
              i = t.ROOT,
              n = t.UNBOUNDED;
            requestAnimationFrame(function () {
              e.adapter.removeClass(i), e.adapter.removeClass(n), e.removeCssVars();
            });
          }
          this.deregisterRootHandlers(), this.deregisterDeactivationHandlers();
        }),
        (r.prototype.activate = function (e) {
          this.activateImpl(e);
        }),
        (r.prototype.deactivate = function () {
          this.deactivateImpl();
        }),
        (r.prototype.layout = function () {
          var e = this;
          this.layoutFrame && cancelAnimationFrame(this.layoutFrame),
            (this.layoutFrame = requestAnimationFrame(function () {
              e.layoutInternal(), (e.layoutFrame = 0);
            }));
        }),
        (r.prototype.setUnbounded = function (e) {
          var t = r.cssClasses.UNBOUNDED;
          e ? this.adapter.addClass(t) : this.adapter.removeClass(t);
        }),
        (r.prototype.handleFocus = function () {
          var e = this;
          requestAnimationFrame(function () {
            return e.adapter.addClass(r.cssClasses.BG_FOCUSED);
          });
        }),
        (r.prototype.handleBlur = function () {
          var e = this;
          requestAnimationFrame(function () {
            return e.adapter.removeClass(r.cssClasses.BG_FOCUSED);
          });
        }),
        (r.prototype.supportsPressRipple = function () {
          return this.adapter.browserSupportsCssVars();
        }),
        (r.prototype.defaultActivationState = function () {
          return {
            activationEvent: void 0,
            hasDeactivationUXRun: !1,
            isActivated: !1,
            isProgrammatic: !1,
            wasActivatedByPointer: !1,
            wasElementMadeActive: !1,
          };
        }),
        (r.prototype.registerRootHandlers = function (e) {
          var t, i;
          if (e) {
            try {
              for (var r = n(u), o = r.next(); !o.done; o = r.next()) {
                var a = o.value;
                this.adapter.registerInteractionHandler(a, this.activateHandler);
              }
            } catch (e) {
              t = { error: e };
            } finally {
              try {
                o && !o.done && (i = r.return) && i.call(r);
              } finally {
                if (t) throw t.error;
              }
            }
            this.adapter.isUnbounded() && this.adapter.registerResizeHandler(this.resizeHandler);
          }
          this.adapter.registerInteractionHandler("focus", this.focusHandler), this.adapter.registerInteractionHandler("blur", this.blurHandler);
        }),
        (r.prototype.registerDeactivationHandlers = function (e) {
          var t, i;
          if ("keydown" === e.type) this.adapter.registerInteractionHandler("keyup", this.deactivateHandler);
          else
            try {
              for (var r = n(f), o = r.next(); !o.done; o = r.next()) {
                var a = o.value;
                this.adapter.registerDocumentInteractionHandler(a, this.deactivateHandler);
              }
            } catch (e) {
              t = { error: e };
            } finally {
              try {
                o && !o.done && (i = r.return) && i.call(r);
              } finally {
                if (t) throw t.error;
              }
            }
        }),
        (r.prototype.deregisterRootHandlers = function () {
          var e, t;
          try {
            for (var i = n(u), r = i.next(); !r.done; r = i.next()) {
              var o = r.value;
              this.adapter.deregisterInteractionHandler(o, this.activateHandler);
            }
          } catch (t) {
            e = { error: t };
          } finally {
            try {
              r && !r.done && (t = i.return) && t.call(i);
            } finally {
              if (e) throw e.error;
            }
          }
          this.adapter.deregisterInteractionHandler("focus", this.focusHandler),
            this.adapter.deregisterInteractionHandler("blur", this.blurHandler),
            this.adapter.isUnbounded() && this.adapter.deregisterResizeHandler(this.resizeHandler);
        }),
        (r.prototype.deregisterDeactivationHandlers = function () {
          var e, t;
          this.adapter.deregisterInteractionHandler("keyup", this.deactivateHandler);
          try {
            for (var i = n(f), r = i.next(); !r.done; r = i.next()) {
              var o = r.value;
              this.adapter.deregisterDocumentInteractionHandler(o, this.deactivateHandler);
            }
          } catch (t) {
            e = { error: t };
          } finally {
            try {
              r && !r.done && (t = i.return) && t.call(i);
            } finally {
              if (e) throw e.error;
            }
          }
        }),
        (r.prototype.removeCssVars = function () {
          var e = this,
            t = r.strings;
          Object.keys(t).forEach(function (i) {
            0 === i.indexOf("VAR_") && e.adapter.updateCssVariable(t[i], null);
          });
        }),
        (r.prototype.activateImpl = function (e) {
          var t = this;
          if (!this.adapter.isSurfaceDisabled()) {
            var i = this.activationState;
            if (!i.isActivated) {
              var r = this.previousActivationEvent;
              (r && void 0 !== e && r.type !== e.type) ||
                ((i.isActivated = !0),
                (i.isProgrammatic = void 0 === e),
                (i.activationEvent = e),
                (i.wasActivatedByPointer =
                  !i.isProgrammatic && void 0 !== e && ("mousedown" === e.type || "touchstart" === e.type || "pointerdown" === e.type)),
                void 0 !== e &&
                b.length > 0 &&
                b.some(function (e) {
                  return t.adapter.containsEventTarget(e);
                })
                  ? this.resetActivationState()
                  : (void 0 !== e && (b.push(e.target), this.registerDeactivationHandlers(e)),
                    (i.wasElementMadeActive = this.checkElementMadeActive(e)),
                    i.wasElementMadeActive && this.animateActivation(),
                    requestAnimationFrame(function () {
                      (b = []),
                        i.wasElementMadeActive ||
                          void 0 === e ||
                          (" " !== e.key && 32 !== e.keyCode) ||
                          ((i.wasElementMadeActive = t.checkElementMadeActive(e)), i.wasElementMadeActive && t.animateActivation()),
                        i.wasElementMadeActive || (t.activationState = t.defaultActivationState());
                    })));
            }
          }
        }),
        (r.prototype.checkElementMadeActive = function (e) {
          return void 0 === e || "keydown" !== e.type || this.adapter.isSurfaceActive();
        }),
        (r.prototype.animateActivation = function () {
          var e = this,
            t = r.strings,
            i = t.VAR_FG_TRANSLATE_START,
            n = t.VAR_FG_TRANSLATE_END,
            o = r.cssClasses,
            a = o.FG_DEACTIVATION,
            d = o.FG_ACTIVATION,
            c = r.numbers.DEACTIVATION_TIMEOUT_MS;
          this.layoutInternal();
          var s = "",
            l = "";
          if (!this.adapter.isUnbounded()) {
            var p = this.getFgTranslationCoordinates(),
              m = p.startPoint,
              h = p.endPoint;
            (s = m.x + "px, " + m.y + "px"), (l = h.x + "px, " + h.y + "px");
          }
          this.adapter.updateCssVariable(i, s),
            this.adapter.updateCssVariable(n, l),
            clearTimeout(this.activationTimer),
            clearTimeout(this.fgDeactivationRemovalTimer),
            this.rmBoundedActivationClasses(),
            this.adapter.removeClass(a),
            this.adapter.computeBoundingRect(),
            this.adapter.addClass(d),
            (this.activationTimer = setTimeout(function () {
              e.activationTimerCallback();
            }, c));
        }),
        (r.prototype.getFgTranslationCoordinates = function () {
          var e,
            t = this.activationState,
            i = t.activationEvent;
          return (
            (e = t.wasActivatedByPointer
              ? (function (e, t, i) {
                  if (!e) return { x: 0, y: 0 };
                  var r,
                    n,
                    o = t.x,
                    a = t.y,
                    d = o + i.left,
                    c = a + i.top;
                  if ("touchstart" === e.type) {
                    var s = e;
                    (r = s.changedTouches[0].pageX - d), (n = s.changedTouches[0].pageY - c);
                  } else {
                    var l = e;
                    (r = l.pageX - d), (n = l.pageY - c);
                  }
                  return { x: r, y: n };
                })(i, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect())
              : { x: this.frame.width / 2, y: this.frame.height / 2 }),
            {
              startPoint: (e = { x: e.x - this.initialSize / 2, y: e.y - this.initialSize / 2 }),
              endPoint: { x: this.frame.width / 2 - this.initialSize / 2, y: this.frame.height / 2 - this.initialSize / 2 },
            }
          );
        }),
        (r.prototype.runDeactivationUXLogicIfReady = function () {
          var e = this,
            t = r.cssClasses.FG_DEACTIVATION,
            i = this.activationState,
            n = i.hasDeactivationUXRun,
            o = i.isActivated;
          (n || !o) &&
            this.activationAnimationHasEnded &&
            (this.rmBoundedActivationClasses(),
            this.adapter.addClass(t),
            (this.fgDeactivationRemovalTimer = setTimeout(function () {
              e.adapter.removeClass(t);
            }, h.FG_DEACTIVATION_MS)));
        }),
        (r.prototype.rmBoundedActivationClasses = function () {
          var e = r.cssClasses.FG_ACTIVATION;
          this.adapter.removeClass(e), (this.activationAnimationHasEnded = !1), this.adapter.computeBoundingRect();
        }),
        (r.prototype.resetActivationState = function () {
          var e = this;
          (this.previousActivationEvent = this.activationState.activationEvent),
            (this.activationState = this.defaultActivationState()),
            setTimeout(function () {
              return (e.previousActivationEvent = void 0);
            }, r.numbers.TAP_DELAY_MS);
        }),
        (r.prototype.deactivateImpl = function () {
          var e = this,
            t = this.activationState;
          if (t.isActivated) {
            var r = i({}, t);
            t.isProgrammatic
              ? (requestAnimationFrame(function () {
                  e.animateDeactivation(r);
                }),
                this.resetActivationState())
              : (this.deregisterDeactivationHandlers(),
                requestAnimationFrame(function () {
                  (e.activationState.hasDeactivationUXRun = !0), e.animateDeactivation(r), e.resetActivationState();
                }));
          }
        }),
        (r.prototype.animateDeactivation = function (e) {
          var t = e.wasActivatedByPointer,
            i = e.wasElementMadeActive;
          (t || i) && this.runDeactivationUXLogicIfReady();
        }),
        (r.prototype.layoutInternal = function () {
          this.frame = this.adapter.computeBoundingRect();
          var e = Math.max(this.frame.height, this.frame.width);
          this.maxRadius = this.adapter.isUnbounded()
            ? e
            : Math.sqrt(Math.pow(this.frame.width, 2) + Math.pow(this.frame.height, 2)) + r.numbers.PADDING;
          var t = Math.floor(e * r.numbers.INITIAL_ORIGIN_SCALE);
          this.adapter.isUnbounded() && t % 2 != 0 ? (this.initialSize = t - 1) : (this.initialSize = t),
            (this.fgScale = "" + this.maxRadius / this.initialSize),
            this.updateLayoutCssVars();
        }),
        (r.prototype.updateLayoutCssVars = function () {
          var e = r.strings,
            t = e.VAR_FG_SIZE,
            i = e.VAR_LEFT,
            n = e.VAR_TOP,
            o = e.VAR_FG_SCALE;
          this.adapter.updateCssVariable(t, this.initialSize + "px"),
            this.adapter.updateCssVariable(o, this.fgScale),
            this.adapter.isUnbounded() &&
              ((this.unboundedCoords = {
                left: Math.round(this.frame.width / 2 - this.initialSize / 2),
                top: Math.round(this.frame.height / 2 - this.initialSize / 2),
              }),
              this.adapter.updateCssVariable(i, this.unboundedCoords.left + "px"),
              this.adapter.updateCssVariable(n, this.unboundedCoords.top + "px"));
        }),
        r
      );
    })(d),
    v = (function (e) {
      function i() {
        var t = (null !== e && e.apply(this, arguments)) || this;
        return (t.disabled = !1), t;
      }
      return (
        t(i, e),
        (i.attachTo = function (e, t) {
          void 0 === t && (t = { isUnbounded: void 0 });
          var r = new i(e);
          return void 0 !== t.isUnbounded && (r.unbounded = t.isUnbounded), r;
        }),
        (i.createAdapter = function (e) {
          return {
            addClass: function (t) {
              return e.root.classList.add(t);
            },
            browserSupportsCssVars: function () {
              return (function (e, t) {
                void 0 === t && (t = !1);
                var i,
                  r = window.CSS;
                if ("boolean" == typeof l && !t) return l;
                if (!r || "function" != typeof r.supports) return !1;
                var n = r.supports("--css-vars", "yes"),
                  o = r.supports("(--css-vars: yes)") && r.supports("color", "#00000000");
                return (i = n || o), t || (l = i), i;
              })();
            },
            computeBoundingRect: function () {
              return e.root.getBoundingClientRect();
            },
            containsEventTarget: function (t) {
              return e.root.contains(t);
            },
            deregisterDocumentInteractionHandler: function (e, t) {
              return document.documentElement.removeEventListener(e, t, s());
            },
            deregisterInteractionHandler: function (t, i) {
              return e.root.removeEventListener(t, i, s());
            },
            deregisterResizeHandler: function (e) {
              return window.removeEventListener("resize", e);
            },
            getWindowPageOffset: function () {
              return { x: window.pageXOffset, y: window.pageYOffset };
            },
            isSurfaceActive: function () {
              return (t = e.root), (i = ":active"), (t.matches || t.webkitMatchesSelector || t.msMatchesSelector).call(t, i);
              var t, i;
            },
            isSurfaceDisabled: function () {
              return Boolean(e.disabled);
            },
            isUnbounded: function () {
              return Boolean(e.unbounded);
            },
            registerDocumentInteractionHandler: function (e, t) {
              return document.documentElement.addEventListener(e, t, s());
            },
            registerInteractionHandler: function (t, i) {
              return e.root.addEventListener(t, i, s());
            },
            registerResizeHandler: function (e) {
              return window.addEventListener("resize", e);
            },
            removeClass: function (t) {
              return e.root.classList.remove(t);
            },
            updateCssVariable: function (t, i) {
              return e.root.style.setProperty(t, i);
            },
          };
        }),
        Object.defineProperty(i.prototype, "unbounded", {
          get: function () {
            return Boolean(this.isUnbounded);
          },
          set: function (e) {
            (this.isUnbounded = Boolean(e)), this.setUnbounded();
          },
          enumerable: !1,
          configurable: !0,
        }),
        (i.prototype.activate = function () {
          this.foundation.activate();
        }),
        (i.prototype.deactivate = function () {
          this.foundation.deactivate();
        }),
        (i.prototype.layout = function () {
          this.foundation.layout();
        }),
        (i.prototype.getDefaultFoundation = function () {
          return new g(i.createAdapter(this));
        }),
        (i.prototype.initialSyncWithDOM = function () {
          var e = this.root;
          this.isUnbounded = "mdcRippleIsUnbounded" in e.dataset;
        }),
        (i.prototype.setUnbounded = function () {
          this.foundation.setUnbounded(Boolean(this.isUnbounded));
        }),
        i
      );
    })(c);
  const _ = (e) => (t) =>
      "function" == typeof t
        ? ((e, t) => (customElements.define(e, t), t))(e, t)
        : ((e, t) => {
            const { kind: i, elements: r } = t;
            return {
              kind: i,
              elements: r,
              finisher(t) {
                customElements.define(e, t);
              },
            };
          })(e, t),
    x = (e, t) =>
      "method" === t.kind && t.descriptor && !("value" in t.descriptor)
        ? {
            ...t,
            finisher(i) {
              i.createProperty(t.key, e);
            },
          }
        : {
            kind: "field",
            key: Symbol(),
            placement: "own",
            descriptor: {},
            originalKey: t.key,
            initializer() {
              "function" == typeof t.initializer && (this[t.key] = t.initializer.call(this));
            },
            finisher(i) {
              i.createProperty(t.key, e);
            },
          };
  function y(e) {
    return (t, i) =>
      void 0 !== i
        ? ((e, t, i) => {
            t.constructor.createProperty(i, e);
          })(e, t, i)
        : x(e, t);
  }
  function w(e) {
    return y({ ...e, state: !0 });
  }
  const E =
    ({ finisher: e, descriptor: t }) =>
    (i, r) => {
      var n;
      if (void 0 === r) {
        const r = null !== (n = i.originalKey) && void 0 !== n ? n : i.key,
          o = null != t ? { kind: "method", placement: "prototype", key: r, descriptor: t(i.key) } : { ...i, key: r };
        return (
          null != e &&
            (o.finisher = function (t) {
              e(t, r);
            }),
          o
        );
      }
      {
        const n = i.constructor;
        void 0 !== t && Object.defineProperty(i, r, t(r)), null == e || e(n, r);
      }
    };
  function k(e) {
    return E({
      finisher: (t, i) => {
        Object.assign(t.prototype[i], e);
      },
    });
  }
  function T(e, t) {
    return E({
      descriptor: (i) => {
        const r = {
          get() {
            var t, i;
            return null !== (i = null === (t = this.renderRoot) || void 0 === t ? void 0 : t.querySelector(e)) && void 0 !== i ? i : null;
          },
          enumerable: !0,
          configurable: !0,
        };
        if (t) {
          const t = "symbol" == typeof i ? Symbol() : "__" + i;
          r.get = function () {
            var i, r;
            return (
              void 0 === this[t] &&
                (this[t] = null !== (r = null === (i = this.renderRoot) || void 0 === i ? void 0 : i.querySelector(e)) && void 0 !== r ? r : null),
              this[t]
            );
          };
        }
        return r;
      },
    });
  }
  function A(e) {
    return E({
      descriptor: (t) => ({
        async get() {
          var t;
          return await this.updateComplete, null === (t = this.renderRoot) || void 0 === t ? void 0 : t.querySelector(e);
        },
        enumerable: !0,
        configurable: !0,
      }),
    });
  }
  var I;
  const C =
    null != (null === (I = window.HTMLSlotElement) || void 0 === I ? void 0 : I.prototype.assignedElements)
      ? (e, t) => e.assignedElements(t)
      : (e, t) => e.assignedNodes(t).filter((e) => e.nodeType === Node.ELEMENT_NODE);
  function S(e, t, i) {
    let r,
      n = e;
    return (
      "object" == typeof e ? ((n = e.slot), (r = e)) : (r = { flatten: t }),
      i
        ? (function (e) {
            const { slot: t, selector: i } = null != e ? e : {};
            return E({
              descriptor: (r) => ({
                get() {
                  var r;
                  const n = "slot" + (t ? `[name=${t}]` : ":not([name])"),
                    o = null === (r = this.renderRoot) || void 0 === r ? void 0 : r.querySelector(n),
                    a = null != o ? C(o, e) : [];
                  return i ? a.filter((e) => e.matches(i)) : a;
                },
                enumerable: !0,
                configurable: !0,
              }),
            });
          })({ slot: n, flatten: t, selector: i })
        : E({
            descriptor: (e) => ({
              get() {
                var e, t;
                const i = "slot" + (n ? `[name=${n}]` : ":not([name])"),
                  o = null === (e = this.renderRoot) || void 0 === e ? void 0 : e.querySelector(i);
                return null !== (t = null == o ? void 0 : o.assignedNodes(r)) && void 0 !== t ? t : [];
              },
              enumerable: !0,
              configurable: !0,
            }),
          })
    );
  }
  const R = window,
    O =
      R.ShadowRoot &&
      (void 0 === R.ShadyCSS || R.ShadyCSS.nativeShadow) &&
      "adoptedStyleSheets" in Document.prototype &&
      "replace" in CSSStyleSheet.prototype,
    L = Symbol(),
    F = new WeakMap();
  class D {
    constructor(e, t, i) {
      if (((this._$cssResult$ = !0), i !== L)) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
      (this.cssText = e), (this.t = t);
    }
    get styleSheet() {
      let e = this.o;
      const t = this.t;
      if (O && void 0 === e) {
        const i = void 0 !== t && 1 === t.length;
        i && (e = F.get(t)), void 0 === e && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), i && F.set(t, e));
      }
      return e;
    }
    toString() {
      return this.cssText;
    }
  }
  const P = (e, ...t) => {
      const i =
        1 === e.length
          ? e[0]
          : t.reduce(
              (t, i, r) =>
                t +
                ((e) => {
                  if (!0 === e._$cssResult$) return e.cssText;
                  if ("number" == typeof e) return e;
                  throw Error(
                    "Value passed to 'css' function must be a 'css' function result: " +
                      e +
                      ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security."
                  );
                })(i) +
                e[r + 1],
              e[0]
            );
      return new D(i, e, L);
    },
    N = O
      ? (e) => e
      : (e) =>
          e instanceof CSSStyleSheet
            ? ((e) => {
                let t = "";
                for (const i of e.cssRules) t += i.cssText;
                return ((e) => new D("string" == typeof e ? e : e + "", void 0, L))(t);
              })(e)
            : e;
  var $;
  const M = window,
    z = M.trustedTypes,
    H = z ? z.emptyScript : "",
    B = M.reactiveElementPolyfillSupport,
    V = {
      toAttribute(e, t) {
        switch (t) {
          case Boolean:
            e = e ? H : null;
            break;
          case Object:
          case Array:
            e = null == e ? e : JSON.stringify(e);
        }
        return e;
      },
      fromAttribute(e, t) {
        let i = e;
        switch (t) {
          case Boolean:
            i = null !== e;
            break;
          case Number:
            i = null === e ? null : Number(e);
            break;
          case Object:
          case Array:
            try {
              i = JSON.parse(e);
            } catch (e) {
              i = null;
            }
        }
        return i;
      },
    },
    U = (e, t) => t !== e && (t == t || e == e),
    j = { attribute: !0, type: String, converter: V, reflect: !1, hasChanged: U };
  class X extends HTMLElement {
    constructor() {
      super(), (this._$Ei = new Map()), (this.isUpdatePending = !1), (this.hasUpdated = !1), (this._$El = null), this.u();
    }
    static addInitializer(e) {
      var t;
      this.finalize(), (null !== (t = this.h) && void 0 !== t ? t : (this.h = [])).push(e);
    }
    static get observedAttributes() {
      this.finalize();
      const e = [];
      return (
        this.elementProperties.forEach((t, i) => {
          const r = this._$Ep(i, t);
          void 0 !== r && (this._$Ev.set(r, i), e.push(r));
        }),
        e
      );
    }
    static createProperty(e, t = j) {
      if ((t.state && (t.attribute = !1), this.finalize(), this.elementProperties.set(e, t), !t.noAccessor && !this.prototype.hasOwnProperty(e))) {
        const i = "symbol" == typeof e ? Symbol() : "__" + e,
          r = this.getPropertyDescriptor(e, i, t);
        void 0 !== r && Object.defineProperty(this.prototype, e, r);
      }
    }
    static getPropertyDescriptor(e, t, i) {
      return {
        get() {
          return this[t];
        },
        set(r) {
          const n = this[e];
          (this[t] = r), this.requestUpdate(e, n, i);
        },
        configurable: !0,
        enumerable: !0,
      };
    }
    static getPropertyOptions(e) {
      return this.elementProperties.get(e) || j;
    }
    static finalize() {
      if (this.hasOwnProperty("finalized")) return !1;
      this.finalized = !0;
      const e = Object.getPrototypeOf(this);
      if (
        (e.finalize(),
        void 0 !== e.h && (this.h = [...e.h]),
        (this.elementProperties = new Map(e.elementProperties)),
        (this._$Ev = new Map()),
        this.hasOwnProperty("properties"))
      ) {
        const e = this.properties,
          t = [...Object.getOwnPropertyNames(e), ...Object.getOwnPropertySymbols(e)];
        for (const i of t) this.createProperty(i, e[i]);
      }
      return (this.elementStyles = this.finalizeStyles(this.styles)), !0;
    }
    static finalizeStyles(e) {
      const t = [];
      if (Array.isArray(e)) {
        const i = new Set(e.flat(1 / 0).reverse());
        for (const e of i) t.unshift(N(e));
      } else void 0 !== e && t.push(N(e));
      return t;
    }
    static _$Ep(e, t) {
      const i = t.attribute;
      return !1 === i ? void 0 : "string" == typeof i ? i : "string" == typeof e ? e.toLowerCase() : void 0;
    }
    u() {
      var e;
      (this._$E_ = new Promise((e) => (this.enableUpdating = e))),
        (this._$AL = new Map()),
        this._$Eg(),
        this.requestUpdate(),
        null === (e = this.constructor.h) || void 0 === e || e.forEach((e) => e(this));
    }
    addController(e) {
      var t, i;
      (null !== (t = this._$ES) && void 0 !== t ? t : (this._$ES = [])).push(e),
        void 0 !== this.renderRoot && this.isConnected && (null === (i = e.hostConnected) || void 0 === i || i.call(e));
    }
    removeController(e) {
      var t;
      null === (t = this._$ES) || void 0 === t || t.splice(this._$ES.indexOf(e) >>> 0, 1);
    }
    _$Eg() {
      this.constructor.elementProperties.forEach((e, t) => {
        this.hasOwnProperty(t) && (this._$Ei.set(t, this[t]), delete this[t]);
      });
    }
    createRenderRoot() {
      var e;
      const t = null !== (e = this.shadowRoot) && void 0 !== e ? e : this.attachShadow(this.constructor.shadowRootOptions);
      return (
        ((e, t) => {
          O
            ? (e.adoptedStyleSheets = t.map((e) => (e instanceof CSSStyleSheet ? e : e.styleSheet)))
            : t.forEach((t) => {
                const i = document.createElement("style"),
                  r = R.litNonce;
                void 0 !== r && i.setAttribute("nonce", r), (i.textContent = t.cssText), e.appendChild(i);
              });
        })(t, this.constructor.elementStyles),
        t
      );
    }
    connectedCallback() {
      var e;
      void 0 === this.renderRoot && (this.renderRoot = this.createRenderRoot()),
        this.enableUpdating(!0),
        null === (e = this._$ES) ||
          void 0 === e ||
          e.forEach((e) => {
            var t;
            return null === (t = e.hostConnected) || void 0 === t ? void 0 : t.call(e);
          });
    }
    enableUpdating(e) {}
    disconnectedCallback() {
      var e;
      null === (e = this._$ES) ||
        void 0 === e ||
        e.forEach((e) => {
          var t;
          return null === (t = e.hostDisconnected) || void 0 === t ? void 0 : t.call(e);
        });
    }
    attributeChangedCallback(e, t, i) {
      this._$AK(e, i);
    }
    _$EO(e, t, i = j) {
      var r;
      const n = this.constructor._$Ep(e, i);
      if (void 0 !== n && !0 === i.reflect) {
        const o = (void 0 !== (null === (r = i.converter) || void 0 === r ? void 0 : r.toAttribute) ? i.converter : V).toAttribute(t, i.type);
        (this._$El = e), null == o ? this.removeAttribute(n) : this.setAttribute(n, o), (this._$El = null);
      }
    }
    _$AK(e, t) {
      var i;
      const r = this.constructor,
        n = r._$Ev.get(e);
      if (void 0 !== n && this._$El !== n) {
        const e = r.getPropertyOptions(n),
          o =
            "function" == typeof e.converter
              ? { fromAttribute: e.converter }
              : void 0 !== (null === (i = e.converter) || void 0 === i ? void 0 : i.fromAttribute)
              ? e.converter
              : V;
        (this._$El = n), (this[n] = o.fromAttribute(t, e.type)), (this._$El = null);
      }
    }
    requestUpdate(e, t, i) {
      let r = !0;
      void 0 !== e &&
        (((i = i || this.constructor.getPropertyOptions(e)).hasChanged || U)(this[e], t)
          ? (this._$AL.has(e) || this._$AL.set(e, t),
            !0 === i.reflect && this._$El !== e && (void 0 === this._$EC && (this._$EC = new Map()), this._$EC.set(e, i)))
          : (r = !1)),
        !this.isUpdatePending && r && (this._$E_ = this._$Ej());
    }
    async _$Ej() {
      this.isUpdatePending = !0;
      try {
        await this._$E_;
      } catch (e) {
        Promise.reject(e);
      }
      const e = this.scheduleUpdate();
      return null != e && (await e), !this.isUpdatePending;
    }
    scheduleUpdate() {
      return this.performUpdate();
    }
    performUpdate() {
      var e;
      if (!this.isUpdatePending) return;
      this.hasUpdated, this._$Ei && (this._$Ei.forEach((e, t) => (this[t] = e)), (this._$Ei = void 0));
      let t = !1;
      const i = this._$AL;
      try {
        (t = this.shouldUpdate(i)),
          t
            ? (this.willUpdate(i),
              null === (e = this._$ES) ||
                void 0 === e ||
                e.forEach((e) => {
                  var t;
                  return null === (t = e.hostUpdate) || void 0 === t ? void 0 : t.call(e);
                }),
              this.update(i))
            : this._$Ek();
      } catch (e) {
        throw ((t = !1), this._$Ek(), e);
      }
      t && this._$AE(i);
    }
    willUpdate(e) {}
    _$AE(e) {
      var t;
      null === (t = this._$ES) ||
        void 0 === t ||
        t.forEach((e) => {
          var t;
          return null === (t = e.hostUpdated) || void 0 === t ? void 0 : t.call(e);
        }),
        this.hasUpdated || ((this.hasUpdated = !0), this.firstUpdated(e)),
        this.updated(e);
    }
    _$Ek() {
      (this._$AL = new Map()), (this.isUpdatePending = !1);
    }
    get updateComplete() {
      return this.getUpdateComplete();
    }
    getUpdateComplete() {
      return this._$E_;
    }
    shouldUpdate(e) {
      return !0;
    }
    update(e) {
      void 0 !== this._$EC && (this._$EC.forEach((e, t) => this._$EO(t, this[t], e)), (this._$EC = void 0)), this._$Ek();
    }
    updated(e) {}
    firstUpdated(e) {}
  }
  var W;
  (X.finalized = !0),
    (X.elementProperties = new Map()),
    (X.elementStyles = []),
    (X.shadowRootOptions = { mode: "open" }),
    null == B || B({ ReactiveElement: X }),
    (null !== ($ = M.reactiveElementVersions) && void 0 !== $ ? $ : (M.reactiveElementVersions = [])).push("1.6.1");
  const G = window,
    Y = G.trustedTypes,
    K = Y ? Y.createPolicy("lit-html", { createHTML: (e) => e }) : void 0,
    q = `lit$${(Math.random() + "").slice(9)}$`,
    Q = "?" + q,
    Z = `<${Q}>`,
    J = document,
    ee = (e = "") => J.createComment(e),
    te = (e) => null === e || ("object" != typeof e && "function" != typeof e),
    ie = Array.isArray,
    re = (e) => ie(e) || "function" == typeof (null == e ? void 0 : e[Symbol.iterator]),
    ne = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
    oe = /-->/g,
    ae = />/g,
    de = RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)", "g"),
    ce = /'/g,
    se = /"/g,
    le = /^(?:script|style|textarea|title)$/i,
    pe =
      (e) =>
      (t, ...i) => ({ _$litType$: e, strings: t, values: i }),
    me = pe(1),
    he = (pe(2), Symbol.for("lit-noChange")),
    ue = Symbol.for("lit-nothing"),
    fe = new WeakMap(),
    be = J.createTreeWalker(J, 129, null, !1),
    ge = (e, t) => {
      const i = e.length - 1,
        r = [];
      let n,
        o = 2 === t ? "<svg>" : "",
        a = ne;
      for (let t = 0; t < i; t++) {
        const i = e[t];
        let d,
          c,
          s = -1,
          l = 0;
        for (; l < i.length && ((a.lastIndex = l), (c = a.exec(i)), null !== c); )
          (l = a.lastIndex),
            a === ne
              ? "!--" === c[1]
                ? (a = oe)
                : void 0 !== c[1]
                ? (a = ae)
                : void 0 !== c[2]
                ? (le.test(c[2]) && (n = RegExp("</" + c[2], "g")), (a = de))
                : void 0 !== c[3] && (a = de)
              : a === de
              ? ">" === c[0]
                ? ((a = null != n ? n : ne), (s = -1))
                : void 0 === c[1]
                ? (s = -2)
                : ((s = a.lastIndex - c[2].length), (d = c[1]), (a = void 0 === c[3] ? de : '"' === c[3] ? se : ce))
              : a === se || a === ce
              ? (a = de)
              : a === oe || a === ae
              ? (a = ne)
              : ((a = de), (n = void 0));
        const p = a === de && e[t + 1].startsWith("/>") ? " " : "";
        o += a === ne ? i + Z : s >= 0 ? (r.push(d), i.slice(0, s) + "$lit$" + i.slice(s) + q + p) : i + q + (-2 === s ? (r.push(void 0), t) : p);
      }
      const d = o + (e[i] || "<?>") + (2 === t ? "</svg>" : "");
      if (!Array.isArray(e) || !e.hasOwnProperty("raw")) throw Error("invalid template strings array");
      return [void 0 !== K ? K.createHTML(d) : d, r];
    };
  class ve {
    constructor({ strings: e, _$litType$: t }, i) {
      let r;
      this.parts = [];
      let n = 0,
        o = 0;
      const a = e.length - 1,
        d = this.parts,
        [c, s] = ge(e, t);
      if (((this.el = ve.createElement(c, i)), (be.currentNode = this.el.content), 2 === t)) {
        const e = this.el.content,
          t = e.firstChild;
        t.remove(), e.append(...t.childNodes);
      }
      for (; null !== (r = be.nextNode()) && d.length < a; ) {
        if (1 === r.nodeType) {
          if (r.hasAttributes()) {
            const e = [];
            for (const t of r.getAttributeNames())
              if (t.endsWith("$lit$") || t.startsWith(q)) {
                const i = s[o++];
                if ((e.push(t), void 0 !== i)) {
                  const e = r.getAttribute(i.toLowerCase() + "$lit$").split(q),
                    t = /([.?@])?(.*)/.exec(i);
                  d.push({ type: 1, index: n, name: t[2], strings: e, ctor: "." === t[1] ? Ee : "?" === t[1] ? Te : "@" === t[1] ? Ae : we });
                } else d.push({ type: 6, index: n });
              }
            for (const t of e) r.removeAttribute(t);
          }
          if (le.test(r.tagName)) {
            const e = r.textContent.split(q),
              t = e.length - 1;
            if (t > 0) {
              r.textContent = Y ? Y.emptyScript : "";
              for (let i = 0; i < t; i++) r.append(e[i], ee()), be.nextNode(), d.push({ type: 2, index: ++n });
              r.append(e[t], ee());
            }
          }
        } else if (8 === r.nodeType)
          if (r.data === Q) d.push({ type: 2, index: n });
          else {
            let e = -1;
            for (; -1 !== (e = r.data.indexOf(q, e + 1)); ) d.push({ type: 7, index: n }), (e += q.length - 1);
          }
        n++;
      }
    }
    static createElement(e, t) {
      const i = J.createElement("template");
      return (i.innerHTML = e), i;
    }
  }
  function _e(e, t, i = e, r) {
    var n, o, a, d;
    if (t === he) return t;
    let c = void 0 !== r ? (null === (n = i._$Co) || void 0 === n ? void 0 : n[r]) : i._$Cl;
    const s = te(t) ? void 0 : t._$litDirective$;
    return (
      (null == c ? void 0 : c.constructor) !== s &&
        (null === (o = null == c ? void 0 : c._$AO) || void 0 === o || o.call(c, !1),
        void 0 === s ? (c = void 0) : ((c = new s(e)), c._$AT(e, i, r)),
        void 0 !== r ? ((null !== (a = (d = i)._$Co) && void 0 !== a ? a : (d._$Co = []))[r] = c) : (i._$Cl = c)),
      void 0 !== c && (t = _e(e, c._$AS(e, t.values), c, r)),
      t
    );
  }
  class xe {
    constructor(e, t) {
      (this.u = []), (this._$AN = void 0), (this._$AD = e), (this._$AM = t);
    }
    get parentNode() {
      return this._$AM.parentNode;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    v(e) {
      var t;
      const {
          el: { content: i },
          parts: r,
        } = this._$AD,
        n = (null !== (t = null == e ? void 0 : e.creationScope) && void 0 !== t ? t : J).importNode(i, !0);
      be.currentNode = n;
      let o = be.nextNode(),
        a = 0,
        d = 0,
        c = r[0];
      for (; void 0 !== c; ) {
        if (a === c.index) {
          let t;
          2 === c.type
            ? (t = new ye(o, o.nextSibling, this, e))
            : 1 === c.type
            ? (t = new c.ctor(o, c.name, c.strings, this, e))
            : 6 === c.type && (t = new Ie(o, this, e)),
            this.u.push(t),
            (c = r[++d]);
        }
        a !== (null == c ? void 0 : c.index) && ((o = be.nextNode()), a++);
      }
      return n;
    }
    p(e) {
      let t = 0;
      for (const i of this.u) void 0 !== i && (void 0 !== i.strings ? (i._$AI(e, i, t), (t += i.strings.length - 2)) : i._$AI(e[t])), t++;
    }
  }
  class ye {
    constructor(e, t, i, r) {
      var n;
      (this.type = 2),
        (this._$AH = ue),
        (this._$AN = void 0),
        (this._$AA = e),
        (this._$AB = t),
        (this._$AM = i),
        (this.options = r),
        (this._$Cm = null === (n = null == r ? void 0 : r.isConnected) || void 0 === n || n);
    }
    get _$AU() {
      var e, t;
      return null !== (t = null === (e = this._$AM) || void 0 === e ? void 0 : e._$AU) && void 0 !== t ? t : this._$Cm;
    }
    get parentNode() {
      let e = this._$AA.parentNode;
      const t = this._$AM;
      return void 0 !== t && 11 === e.nodeType && (e = t.parentNode), e;
    }
    get startNode() {
      return this._$AA;
    }
    get endNode() {
      return this._$AB;
    }
    _$AI(e, t = this) {
      (e = _e(this, e, t)),
        te(e)
          ? e === ue || null == e || "" === e
            ? (this._$AH !== ue && this._$AR(), (this._$AH = ue))
            : e !== this._$AH && e !== he && this.g(e)
          : void 0 !== e._$litType$
          ? this.$(e)
          : void 0 !== e.nodeType
          ? this.T(e)
          : re(e)
          ? this.k(e)
          : this.g(e);
    }
    O(e, t = this._$AB) {
      return this._$AA.parentNode.insertBefore(e, t);
    }
    T(e) {
      this._$AH !== e && (this._$AR(), (this._$AH = this.O(e)));
    }
    g(e) {
      this._$AH !== ue && te(this._$AH) ? (this._$AA.nextSibling.data = e) : this.T(J.createTextNode(e)), (this._$AH = e);
    }
    $(e) {
      var t;
      const { values: i, _$litType$: r } = e,
        n = "number" == typeof r ? this._$AC(e) : (void 0 === r.el && (r.el = ve.createElement(r.h, this.options)), r);
      if ((null === (t = this._$AH) || void 0 === t ? void 0 : t._$AD) === n) this._$AH.p(i);
      else {
        const e = new xe(n, this),
          t = e.v(this.options);
        e.p(i), this.T(t), (this._$AH = e);
      }
    }
    _$AC(e) {
      let t = fe.get(e.strings);
      return void 0 === t && fe.set(e.strings, (t = new ve(e))), t;
    }
    k(e) {
      ie(this._$AH) || ((this._$AH = []), this._$AR());
      const t = this._$AH;
      let i,
        r = 0;
      for (const n of e) r === t.length ? t.push((i = new ye(this.O(ee()), this.O(ee()), this, this.options))) : (i = t[r]), i._$AI(n), r++;
      r < t.length && (this._$AR(i && i._$AB.nextSibling, r), (t.length = r));
    }
    _$AR(e = this._$AA.nextSibling, t) {
      var i;
      for (null === (i = this._$AP) || void 0 === i || i.call(this, !1, !0, t); e && e !== this._$AB; ) {
        const t = e.nextSibling;
        e.remove(), (e = t);
      }
    }
    setConnected(e) {
      var t;
      void 0 === this._$AM && ((this._$Cm = e), null === (t = this._$AP) || void 0 === t || t.call(this, e));
    }
  }
  class we {
    constructor(e, t, i, r, n) {
      (this.type = 1),
        (this._$AH = ue),
        (this._$AN = void 0),
        (this.element = e),
        (this.name = t),
        (this._$AM = r),
        (this.options = n),
        i.length > 2 || "" !== i[0] || "" !== i[1] ? ((this._$AH = Array(i.length - 1).fill(new String())), (this.strings = i)) : (this._$AH = ue);
    }
    get tagName() {
      return this.element.tagName;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AI(e, t = this, i, r) {
      const n = this.strings;
      let o = !1;
      if (void 0 === n) (e = _e(this, e, t, 0)), (o = !te(e) || (e !== this._$AH && e !== he)), o && (this._$AH = e);
      else {
        const r = e;
        let a, d;
        for (e = n[0], a = 0; a < n.length - 1; a++)
          (d = _e(this, r[i + a], t, a)),
            d === he && (d = this._$AH[a]),
            o || (o = !te(d) || d !== this._$AH[a]),
            d === ue ? (e = ue) : e !== ue && (e += (null != d ? d : "") + n[a + 1]),
            (this._$AH[a] = d);
      }
      o && !r && this.j(e);
    }
    j(e) {
      e === ue ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, null != e ? e : "");
    }
  }
  class Ee extends we {
    constructor() {
      super(...arguments), (this.type = 3);
    }
    j(e) {
      this.element[this.name] = e === ue ? void 0 : e;
    }
  }
  const ke = Y ? Y.emptyScript : "";
  class Te extends we {
    constructor() {
      super(...arguments), (this.type = 4);
    }
    j(e) {
      e && e !== ue ? this.element.setAttribute(this.name, ke) : this.element.removeAttribute(this.name);
    }
  }
  class Ae extends we {
    constructor(e, t, i, r, n) {
      super(e, t, i, r, n), (this.type = 5);
    }
    _$AI(e, t = this) {
      var i;
      if ((e = null !== (i = _e(this, e, t, 0)) && void 0 !== i ? i : ue) === he) return;
      const r = this._$AH,
        n = (e === ue && r !== ue) || e.capture !== r.capture || e.once !== r.once || e.passive !== r.passive,
        o = e !== ue && (r === ue || n);
      n && this.element.removeEventListener(this.name, this, r), o && this.element.addEventListener(this.name, this, e), (this._$AH = e);
    }
    handleEvent(e) {
      var t, i;
      "function" == typeof this._$AH
        ? this._$AH.call(null !== (i = null === (t = this.options) || void 0 === t ? void 0 : t.host) && void 0 !== i ? i : this.element, e)
        : this._$AH.handleEvent(e);
    }
  }
  class Ie {
    constructor(e, t, i) {
      (this.element = e), (this.type = 6), (this._$AN = void 0), (this._$AM = t), (this.options = i);
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AI(e) {
      _e(this, e);
    }
  }
  const Ce = { P: "$lit$", A: q, M: Q, C: 1, L: ge, R: xe, D: re, V: _e, I: ye, H: we, N: Te, U: Ae, B: Ee, F: Ie },
    Se = G.litHtmlPolyfillSupport;
  null == Se || Se(ve, ye), (null !== (W = G.litHtmlVersions) && void 0 !== W ? W : (G.litHtmlVersions = [])).push("2.6.1");
  const Re = (e, t, i) => {
    var r, n;
    const o = null !== (r = null == i ? void 0 : i.renderBefore) && void 0 !== r ? r : t;
    let a = o._$litPart$;
    if (void 0 === a) {
      const e = null !== (n = null == i ? void 0 : i.renderBefore) && void 0 !== n ? n : null;
      o._$litPart$ = a = new ye(t.insertBefore(ee(), e), e, void 0, null != i ? i : {});
    }
    return a._$AI(e), a;
  };
  var Oe, Le;
  class Fe extends X {
    constructor() {
      super(...arguments), (this.renderOptions = { host: this }), (this._$Do = void 0);
    }
    createRenderRoot() {
      var e, t;
      const i = super.createRenderRoot();
      return (null !== (e = (t = this.renderOptions).renderBefore) && void 0 !== e) || (t.renderBefore = i.firstChild), i;
    }
    update(e) {
      const t = this.render();
      this.hasUpdated || (this.renderOptions.isConnected = this.isConnected),
        super.update(e),
        (this._$Do = Re(t, this.renderRoot, this.renderOptions));
    }
    connectedCallback() {
      var e;
      super.connectedCallback(), null === (e = this._$Do) || void 0 === e || e.setConnected(!0);
    }
    disconnectedCallback() {
      var e;
      super.disconnectedCallback(), null === (e = this._$Do) || void 0 === e || e.setConnected(!1);
    }
    render() {
      return he;
    }
  }
  (Fe.finalized = !0),
    (Fe._$litElement$ = !0),
    null === (Oe = globalThis.litElementHydrateSupport) || void 0 === Oe || Oe.call(globalThis, { LitElement: Fe });
  const De = globalThis.litElementPolyfillSupport;
  null == De || De({ LitElement: Fe }),
    (null !== (Le = globalThis.litElementVersions) && void 0 !== Le ? Le : (globalThis.litElementVersions = [])).push("3.2.2");
  const Pe = P`:host{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}`;
  let Ne = class extends Fe {
    render() {
      return me`<span><slot></slot></span>`;
    }
  };
  function $e(e, t) {
    return (e.matches || e.webkitMatchesSelector || e.msMatchesSelector).call(e, t);
  }
  (Ne.styles = [Pe]), (Ne = r([_("mwc-icon")], Ne));
  const Me = (e) => e.nodeType === Node.ELEMENT_NODE;
  function ze(e) {
    return {
      addClass: (t) => {
        e.classList.add(t);
      },
      removeClass: (t) => {
        e.classList.remove(t);
      },
      hasClass: (t) => e.classList.contains(t),
    };
  }
  let He = !1;
  const Be = () => {},
    Ve = {
      get passive() {
        return (He = !0), !1;
      },
    };
  document.addEventListener("x", Be, Ve), document.removeEventListener("x", Be);
  const Ue = (e = window.document) => {
      let t = e.activeElement;
      const i = [];
      if (!t) return i;
      for (; t && (i.push(t), t.shadowRoot); ) t = t.shadowRoot.activeElement;
      return i;
    },
    je = (e) => {
      const t = Ue();
      if (!t.length) return !1;
      const i = t[t.length - 1],
        r = new Event("check-if-focused", { bubbles: !0, composed: !0 });
      let n = [];
      const o = (e) => {
        n = e.composedPath();
      };
      return (
        document.body.addEventListener("check-if-focused", o),
        i.dispatchEvent(r),
        document.body.removeEventListener("check-if-focused", o),
        -1 !== n.indexOf(e)
      );
    };
  class Xe extends Fe {
    click() {
      if (this.mdcRoot) return this.mdcRoot.focus(), void this.mdcRoot.click();
      super.click();
    }
    createFoundation() {
      void 0 !== this.mdcFoundation && this.mdcFoundation.destroy(),
        this.mdcFoundationClass && ((this.mdcFoundation = new this.mdcFoundationClass(this.createAdapter())), this.mdcFoundation.init());
    }
    firstUpdated() {
      this.createFoundation();
    }
  }
  var We = (function () {
      function e(e) {
        void 0 === e && (e = {}), (this.adapter = e);
      }
      return (
        Object.defineProperty(e, "cssClasses", {
          get: function () {
            return {};
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e, "strings", {
          get: function () {
            return {};
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e, "numbers", {
          get: function () {
            return {};
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e, "defaultAdapter", {
          get: function () {
            return {};
          },
          enumerable: !1,
          configurable: !0,
        }),
        (e.prototype.init = function () {}),
        (e.prototype.destroy = function () {}),
        e
      );
    })(),
    Ge = {
      BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
      FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
      FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
      ROOT: "mdc-ripple-upgraded",
      UNBOUNDED: "mdc-ripple-upgraded--unbounded",
    },
    Ye = {
      VAR_FG_SCALE: "--mdc-ripple-fg-scale",
      VAR_FG_SIZE: "--mdc-ripple-fg-size",
      VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
      VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
      VAR_LEFT: "--mdc-ripple-left",
      VAR_TOP: "--mdc-ripple-top",
    },
    Ke = { DEACTIVATION_TIMEOUT_MS: 225, FG_DEACTIVATION_MS: 150, INITIAL_ORIGIN_SCALE: 0.6, PADDING: 10, TAP_DELAY_MS: 300 },
    qe = ["touchstart", "pointerdown", "mousedown", "keydown"],
    Qe = ["touchend", "pointerup", "mouseup", "contextmenu"],
    Ze = [],
    Je = (function (e) {
      function r(t) {
        var n = e.call(this, i(i({}, r.defaultAdapter), t)) || this;
        return (
          (n.activationAnimationHasEnded = !1),
          (n.activationTimer = 0),
          (n.fgDeactivationRemovalTimer = 0),
          (n.fgScale = "0"),
          (n.frame = { width: 0, height: 0 }),
          (n.initialSize = 0),
          (n.layoutFrame = 0),
          (n.maxRadius = 0),
          (n.unboundedCoords = { left: 0, top: 0 }),
          (n.activationState = n.defaultActivationState()),
          (n.activationTimerCallback = function () {
            (n.activationAnimationHasEnded = !0), n.runDeactivationUXLogicIfReady();
          }),
          (n.activateHandler = function (e) {
            n.activateImpl(e);
          }),
          (n.deactivateHandler = function () {
            n.deactivateImpl();
          }),
          (n.focusHandler = function () {
            n.handleFocus();
          }),
          (n.blurHandler = function () {
            n.handleBlur();
          }),
          (n.resizeHandler = function () {
            n.layout();
          }),
          n
        );
      }
      return (
        t(r, e),
        Object.defineProperty(r, "cssClasses", {
          get: function () {
            return Ge;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(r, "strings", {
          get: function () {
            return Ye;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(r, "numbers", {
          get: function () {
            return Ke;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(r, "defaultAdapter", {
          get: function () {
            return {
              addClass: function () {},
              browserSupportsCssVars: function () {
                return !0;
              },
              computeBoundingRect: function () {
                return { top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 };
              },
              containsEventTarget: function () {
                return !0;
              },
              deregisterDocumentInteractionHandler: function () {},
              deregisterInteractionHandler: function () {},
              deregisterResizeHandler: function () {},
              getWindowPageOffset: function () {
                return { x: 0, y: 0 };
              },
              isSurfaceActive: function () {
                return !0;
              },
              isSurfaceDisabled: function () {
                return !0;
              },
              isUnbounded: function () {
                return !0;
              },
              registerDocumentInteractionHandler: function () {},
              registerInteractionHandler: function () {},
              registerResizeHandler: function () {},
              removeClass: function () {},
              updateCssVariable: function () {},
            };
          },
          enumerable: !1,
          configurable: !0,
        }),
        (r.prototype.init = function () {
          var e = this,
            t = this.supportsPressRipple();
          if ((this.registerRootHandlers(t), t)) {
            var i = r.cssClasses,
              n = i.ROOT,
              o = i.UNBOUNDED;
            requestAnimationFrame(function () {
              e.adapter.addClass(n), e.adapter.isUnbounded() && (e.adapter.addClass(o), e.layoutInternal());
            });
          }
        }),
        (r.prototype.destroy = function () {
          var e = this;
          if (this.supportsPressRipple()) {
            this.activationTimer &&
              (clearTimeout(this.activationTimer), (this.activationTimer = 0), this.adapter.removeClass(r.cssClasses.FG_ACTIVATION)),
              this.fgDeactivationRemovalTimer &&
                (clearTimeout(this.fgDeactivationRemovalTimer),
                (this.fgDeactivationRemovalTimer = 0),
                this.adapter.removeClass(r.cssClasses.FG_DEACTIVATION));
            var t = r.cssClasses,
              i = t.ROOT,
              n = t.UNBOUNDED;
            requestAnimationFrame(function () {
              e.adapter.removeClass(i), e.adapter.removeClass(n), e.removeCssVars();
            });
          }
          this.deregisterRootHandlers(), this.deregisterDeactivationHandlers();
        }),
        (r.prototype.activate = function (e) {
          this.activateImpl(e);
        }),
        (r.prototype.deactivate = function () {
          this.deactivateImpl();
        }),
        (r.prototype.layout = function () {
          var e = this;
          this.layoutFrame && cancelAnimationFrame(this.layoutFrame),
            (this.layoutFrame = requestAnimationFrame(function () {
              e.layoutInternal(), (e.layoutFrame = 0);
            }));
        }),
        (r.prototype.setUnbounded = function (e) {
          var t = r.cssClasses.UNBOUNDED;
          e ? this.adapter.addClass(t) : this.adapter.removeClass(t);
        }),
        (r.prototype.handleFocus = function () {
          var e = this;
          requestAnimationFrame(function () {
            return e.adapter.addClass(r.cssClasses.BG_FOCUSED);
          });
        }),
        (r.prototype.handleBlur = function () {
          var e = this;
          requestAnimationFrame(function () {
            return e.adapter.removeClass(r.cssClasses.BG_FOCUSED);
          });
        }),
        (r.prototype.supportsPressRipple = function () {
          return this.adapter.browserSupportsCssVars();
        }),
        (r.prototype.defaultActivationState = function () {
          return {
            activationEvent: void 0,
            hasDeactivationUXRun: !1,
            isActivated: !1,
            isProgrammatic: !1,
            wasActivatedByPointer: !1,
            wasElementMadeActive: !1,
          };
        }),
        (r.prototype.registerRootHandlers = function (e) {
          var t, i;
          if (e) {
            try {
              for (var r = n(qe), o = r.next(); !o.done; o = r.next()) {
                var a = o.value;
                this.adapter.registerInteractionHandler(a, this.activateHandler);
              }
            } catch (e) {
              t = { error: e };
            } finally {
              try {
                o && !o.done && (i = r.return) && i.call(r);
              } finally {
                if (t) throw t.error;
              }
            }
            this.adapter.isUnbounded() && this.adapter.registerResizeHandler(this.resizeHandler);
          }
          this.adapter.registerInteractionHandler("focus", this.focusHandler), this.adapter.registerInteractionHandler("blur", this.blurHandler);
        }),
        (r.prototype.registerDeactivationHandlers = function (e) {
          var t, i;
          if ("keydown" === e.type) this.adapter.registerInteractionHandler("keyup", this.deactivateHandler);
          else
            try {
              for (var r = n(Qe), o = r.next(); !o.done; o = r.next()) {
                var a = o.value;
                this.adapter.registerDocumentInteractionHandler(a, this.deactivateHandler);
              }
            } catch (e) {
              t = { error: e };
            } finally {
              try {
                o && !o.done && (i = r.return) && i.call(r);
              } finally {
                if (t) throw t.error;
              }
            }
        }),
        (r.prototype.deregisterRootHandlers = function () {
          var e, t;
          try {
            for (var i = n(qe), r = i.next(); !r.done; r = i.next()) {
              var o = r.value;
              this.adapter.deregisterInteractionHandler(o, this.activateHandler);
            }
          } catch (t) {
            e = { error: t };
          } finally {
            try {
              r && !r.done && (t = i.return) && t.call(i);
            } finally {
              if (e) throw e.error;
            }
          }
          this.adapter.deregisterInteractionHandler("focus", this.focusHandler),
            this.adapter.deregisterInteractionHandler("blur", this.blurHandler),
            this.adapter.isUnbounded() && this.adapter.deregisterResizeHandler(this.resizeHandler);
        }),
        (r.prototype.deregisterDeactivationHandlers = function () {
          var e, t;
          this.adapter.deregisterInteractionHandler("keyup", this.deactivateHandler);
          try {
            for (var i = n(Qe), r = i.next(); !r.done; r = i.next()) {
              var o = r.value;
              this.adapter.deregisterDocumentInteractionHandler(o, this.deactivateHandler);
            }
          } catch (t) {
            e = { error: t };
          } finally {
            try {
              r && !r.done && (t = i.return) && t.call(i);
            } finally {
              if (e) throw e.error;
            }
          }
        }),
        (r.prototype.removeCssVars = function () {
          var e = this,
            t = r.strings;
          Object.keys(t).forEach(function (i) {
            0 === i.indexOf("VAR_") && e.adapter.updateCssVariable(t[i], null);
          });
        }),
        (r.prototype.activateImpl = function (e) {
          var t = this;
          if (!this.adapter.isSurfaceDisabled()) {
            var i = this.activationState;
            if (!i.isActivated) {
              var r = this.previousActivationEvent;
              (r && void 0 !== e && r.type !== e.type) ||
                ((i.isActivated = !0),
                (i.isProgrammatic = void 0 === e),
                (i.activationEvent = e),
                (i.wasActivatedByPointer =
                  !i.isProgrammatic && void 0 !== e && ("mousedown" === e.type || "touchstart" === e.type || "pointerdown" === e.type)),
                void 0 !== e &&
                Ze.length > 0 &&
                Ze.some(function (e) {
                  return t.adapter.containsEventTarget(e);
                })
                  ? this.resetActivationState()
                  : (void 0 !== e && (Ze.push(e.target), this.registerDeactivationHandlers(e)),
                    (i.wasElementMadeActive = this.checkElementMadeActive(e)),
                    i.wasElementMadeActive && this.animateActivation(),
                    requestAnimationFrame(function () {
                      (Ze = []),
                        i.wasElementMadeActive ||
                          void 0 === e ||
                          (" " !== e.key && 32 !== e.keyCode) ||
                          ((i.wasElementMadeActive = t.checkElementMadeActive(e)), i.wasElementMadeActive && t.animateActivation()),
                        i.wasElementMadeActive || (t.activationState = t.defaultActivationState());
                    })));
            }
          }
        }),
        (r.prototype.checkElementMadeActive = function (e) {
          return void 0 === e || "keydown" !== e.type || this.adapter.isSurfaceActive();
        }),
        (r.prototype.animateActivation = function () {
          var e = this,
            t = r.strings,
            i = t.VAR_FG_TRANSLATE_START,
            n = t.VAR_FG_TRANSLATE_END,
            o = r.cssClasses,
            a = o.FG_DEACTIVATION,
            d = o.FG_ACTIVATION,
            c = r.numbers.DEACTIVATION_TIMEOUT_MS;
          this.layoutInternal();
          var s = "",
            l = "";
          if (!this.adapter.isUnbounded()) {
            var p = this.getFgTranslationCoordinates(),
              m = p.startPoint,
              h = p.endPoint;
            (s = m.x + "px, " + m.y + "px"), (l = h.x + "px, " + h.y + "px");
          }
          this.adapter.updateCssVariable(i, s),
            this.adapter.updateCssVariable(n, l),
            clearTimeout(this.activationTimer),
            clearTimeout(this.fgDeactivationRemovalTimer),
            this.rmBoundedActivationClasses(),
            this.adapter.removeClass(a),
            this.adapter.computeBoundingRect(),
            this.adapter.addClass(d),
            (this.activationTimer = setTimeout(function () {
              e.activationTimerCallback();
            }, c));
        }),
        (r.prototype.getFgTranslationCoordinates = function () {
          var e,
            t = this.activationState,
            i = t.activationEvent;
          return (
            (e = t.wasActivatedByPointer
              ? (function (e, t, i) {
                  if (!e) return { x: 0, y: 0 };
                  var r,
                    n,
                    o = t.x,
                    a = t.y,
                    d = o + i.left,
                    c = a + i.top;
                  if ("touchstart" === e.type) {
                    var s = e;
                    (r = s.changedTouches[0].pageX - d), (n = s.changedTouches[0].pageY - c);
                  } else {
                    var l = e;
                    (r = l.pageX - d), (n = l.pageY - c);
                  }
                  return { x: r, y: n };
                })(i, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect())
              : { x: this.frame.width / 2, y: this.frame.height / 2 }),
            {
              startPoint: (e = { x: e.x - this.initialSize / 2, y: e.y - this.initialSize / 2 }),
              endPoint: { x: this.frame.width / 2 - this.initialSize / 2, y: this.frame.height / 2 - this.initialSize / 2 },
            }
          );
        }),
        (r.prototype.runDeactivationUXLogicIfReady = function () {
          var e = this,
            t = r.cssClasses.FG_DEACTIVATION,
            i = this.activationState,
            n = i.hasDeactivationUXRun,
            o = i.isActivated;
          (n || !o) &&
            this.activationAnimationHasEnded &&
            (this.rmBoundedActivationClasses(),
            this.adapter.addClass(t),
            (this.fgDeactivationRemovalTimer = setTimeout(function () {
              e.adapter.removeClass(t);
            }, Ke.FG_DEACTIVATION_MS)));
        }),
        (r.prototype.rmBoundedActivationClasses = function () {
          var e = r.cssClasses.FG_ACTIVATION;
          this.adapter.removeClass(e), (this.activationAnimationHasEnded = !1), this.adapter.computeBoundingRect();
        }),
        (r.prototype.resetActivationState = function () {
          var e = this;
          (this.previousActivationEvent = this.activationState.activationEvent),
            (this.activationState = this.defaultActivationState()),
            setTimeout(function () {
              return (e.previousActivationEvent = void 0);
            }, r.numbers.TAP_DELAY_MS);
        }),
        (r.prototype.deactivateImpl = function () {
          var e = this,
            t = this.activationState;
          if (t.isActivated) {
            var r = i({}, t);
            t.isProgrammatic
              ? (requestAnimationFrame(function () {
                  e.animateDeactivation(r);
                }),
                this.resetActivationState())
              : (this.deregisterDeactivationHandlers(),
                requestAnimationFrame(function () {
                  (e.activationState.hasDeactivationUXRun = !0), e.animateDeactivation(r), e.resetActivationState();
                }));
          }
        }),
        (r.prototype.animateDeactivation = function (e) {
          var t = e.wasActivatedByPointer,
            i = e.wasElementMadeActive;
          (t || i) && this.runDeactivationUXLogicIfReady();
        }),
        (r.prototype.layoutInternal = function () {
          this.frame = this.adapter.computeBoundingRect();
          var e = Math.max(this.frame.height, this.frame.width);
          this.maxRadius = this.adapter.isUnbounded()
            ? e
            : Math.sqrt(Math.pow(this.frame.width, 2) + Math.pow(this.frame.height, 2)) + r.numbers.PADDING;
          var t = Math.floor(e * r.numbers.INITIAL_ORIGIN_SCALE);
          this.adapter.isUnbounded() && t % 2 != 0 ? (this.initialSize = t - 1) : (this.initialSize = t),
            (this.fgScale = "" + this.maxRadius / this.initialSize),
            this.updateLayoutCssVars();
        }),
        (r.prototype.updateLayoutCssVars = function () {
          var e = r.strings,
            t = e.VAR_FG_SIZE,
            i = e.VAR_LEFT,
            n = e.VAR_TOP,
            o = e.VAR_FG_SCALE;
          this.adapter.updateCssVariable(t, this.initialSize + "px"),
            this.adapter.updateCssVariable(o, this.fgScale),
            this.adapter.isUnbounded() &&
              ((this.unboundedCoords = {
                left: Math.round(this.frame.width / 2 - this.initialSize / 2),
                top: Math.round(this.frame.height / 2 - this.initialSize / 2),
              }),
              this.adapter.updateCssVariable(i, this.unboundedCoords.left + "px"),
              this.adapter.updateCssVariable(n, this.unboundedCoords.top + "px"));
        }),
        r
      );
    })(We);
  const et = Je,
    tt =
      (e) =>
      (...t) => ({ _$litDirective$: e, values: t });
  class it {
    constructor(e) {}
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AT(e, t, i) {
      (this._$Ct = e), (this._$AM = t), (this._$Ci = i);
    }
    _$AS(e, t) {
      return this.update(e, t);
    }
    update(e, t) {
      return this.render(...t);
    }
  }
  const rt = tt(
      class extends it {
        constructor(e) {
          var t;
          if ((super(e), 1 !== e.type || "class" !== e.name || (null === (t = e.strings) || void 0 === t ? void 0 : t.length) > 2))
            throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
        }
        render(e) {
          return (
            " " +
            Object.keys(e)
              .filter((t) => e[t])
              .join(" ") +
            " "
          );
        }
        update(e, [t]) {
          var i, r;
          if (void 0 === this.nt) {
            (this.nt = new Set()),
              void 0 !== e.strings &&
                (this.st = new Set(
                  e.strings
                    .join(" ")
                    .split(/\s/)
                    .filter((e) => "" !== e)
                ));
            for (const e in t) t[e] && !(null === (i = this.st) || void 0 === i ? void 0 : i.has(e)) && this.nt.add(e);
            return this.render(t);
          }
          const n = e.element.classList;
          this.nt.forEach((e) => {
            e in t || (n.remove(e), this.nt.delete(e));
          });
          for (const e in t) {
            const i = !!t[e];
            i === this.nt.has(e) ||
              (null === (r = this.st) || void 0 === r ? void 0 : r.has(e)) ||
              (i ? (n.add(e), this.nt.add(e)) : (n.remove(e), this.nt.delete(e)));
          }
          return he;
        }
      }
    ),
    nt = tt(
      class extends it {
        constructor(e) {
          var t;
          if ((super(e), 1 !== e.type || "style" !== e.name || (null === (t = e.strings) || void 0 === t ? void 0 : t.length) > 2))
            throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.");
        }
        render(e) {
          return Object.keys(e).reduce((t, i) => {
            const r = e[i];
            return null == r ? t : t + `${(i = i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, "-$&").toLowerCase())}:${r};`;
          }, "");
        }
        update(e, [t]) {
          const { style: i } = e.element;
          if (void 0 === this.vt) {
            this.vt = new Set();
            for (const e in t) this.vt.add(e);
            return this.render(t);
          }
          this.vt.forEach((e) => {
            null == t[e] && (this.vt.delete(e), e.includes("-") ? i.removeProperty(e) : (i[e] = ""));
          });
          for (const e in t) {
            const r = t[e];
            null != r && (this.vt.add(e), e.includes("-") ? i.setProperty(e, r) : (i[e] = r));
          }
          return he;
        }
      }
    );
  class ot extends Xe {
    constructor() {
      super(...arguments),
        (this.primary = !1),
        (this.accent = !1),
        (this.unbounded = !1),
        (this.disabled = !1),
        (this.activated = !1),
        (this.selected = !1),
        (this.internalUseStateLayerCustomProperties = !1),
        (this.hovering = !1),
        (this.bgFocused = !1),
        (this.fgActivation = !1),
        (this.fgDeactivation = !1),
        (this.fgScale = ""),
        (this.fgSize = ""),
        (this.translateStart = ""),
        (this.translateEnd = ""),
        (this.leftPos = ""),
        (this.topPos = ""),
        (this.mdcFoundationClass = et);
    }
    get isActive() {
      return $e(this.parentElement || this, ":active");
    }
    createAdapter() {
      return {
        browserSupportsCssVars: () => !0,
        isUnbounded: () => this.unbounded,
        isSurfaceActive: () => this.isActive,
        isSurfaceDisabled: () => this.disabled,
        addClass: (e) => {
          switch (e) {
            case "mdc-ripple-upgraded--background-focused":
              this.bgFocused = !0;
              break;
            case "mdc-ripple-upgraded--foreground-activation":
              this.fgActivation = !0;
              break;
            case "mdc-ripple-upgraded--foreground-deactivation":
              this.fgDeactivation = !0;
          }
        },
        removeClass: (e) => {
          switch (e) {
            case "mdc-ripple-upgraded--background-focused":
              this.bgFocused = !1;
              break;
            case "mdc-ripple-upgraded--foreground-activation":
              this.fgActivation = !1;
              break;
            case "mdc-ripple-upgraded--foreground-deactivation":
              this.fgDeactivation = !1;
          }
        },
        containsEventTarget: () => !0,
        registerInteractionHandler: () => {},
        deregisterInteractionHandler: () => {},
        registerDocumentInteractionHandler: () => {},
        deregisterDocumentInteractionHandler: () => {},
        registerResizeHandler: () => {},
        deregisterResizeHandler: () => {},
        updateCssVariable: (e, t) => {
          switch (e) {
            case "--mdc-ripple-fg-scale":
              this.fgScale = t;
              break;
            case "--mdc-ripple-fg-size":
              this.fgSize = t;
              break;
            case "--mdc-ripple-fg-translate-end":
              this.translateEnd = t;
              break;
            case "--mdc-ripple-fg-translate-start":
              this.translateStart = t;
              break;
            case "--mdc-ripple-left":
              this.leftPos = t;
              break;
            case "--mdc-ripple-top":
              this.topPos = t;
          }
        },
        computeBoundingRect: () => (this.parentElement || this).getBoundingClientRect(),
        getWindowPageOffset: () => ({ x: window.pageXOffset, y: window.pageYOffset }),
      };
    }
    startPress(e) {
      this.waitForFoundation(() => {
        this.mdcFoundation.activate(e);
      });
    }
    endPress() {
      this.waitForFoundation(() => {
        this.mdcFoundation.deactivate();
      });
    }
    startFocus() {
      this.waitForFoundation(() => {
        this.mdcFoundation.handleFocus();
      });
    }
    endFocus() {
      this.waitForFoundation(() => {
        this.mdcFoundation.handleBlur();
      });
    }
    startHover() {
      this.hovering = !0;
    }
    endHover() {
      this.hovering = !1;
    }
    waitForFoundation(e) {
      this.mdcFoundation ? e() : this.updateComplete.then(e);
    }
    update(e) {
      e.has("disabled") && this.disabled && this.endHover(), super.update(e);
    }
    render() {
      const e = this.activated && (this.primary || !this.accent),
        t = this.selected && (this.primary || !this.accent),
        i = {
          "mdc-ripple-surface--accent": this.accent,
          "mdc-ripple-surface--primary--activated": e,
          "mdc-ripple-surface--accent--activated": this.accent && this.activated,
          "mdc-ripple-surface--primary--selected": t,
          "mdc-ripple-surface--accent--selected": this.accent && this.selected,
          "mdc-ripple-surface--disabled": this.disabled,
          "mdc-ripple-surface--hover": this.hovering,
          "mdc-ripple-surface--primary": this.primary,
          "mdc-ripple-surface--selected": this.selected,
          "mdc-ripple-upgraded--background-focused": this.bgFocused,
          "mdc-ripple-upgraded--foreground-activation": this.fgActivation,
          "mdc-ripple-upgraded--foreground-deactivation": this.fgDeactivation,
          "mdc-ripple-upgraded--unbounded": this.unbounded,
          "mdc-ripple-surface--internal-use-state-layer-custom-properties": this.internalUseStateLayerCustomProperties,
        };
      return me`
        <div class="mdc-ripple-surface mdc-ripple-upgraded ${rt(i)}"
          style="${nt({
            "--mdc-ripple-fg-scale": this.fgScale,
            "--mdc-ripple-fg-size": this.fgSize,
            "--mdc-ripple-fg-translate-end": this.translateEnd,
            "--mdc-ripple-fg-translate-start": this.translateStart,
            "--mdc-ripple-left": this.leftPos,
            "--mdc-ripple-top": this.topPos,
          })}"></div>`;
    }
  }
  r([T(".mdc-ripple-surface")], ot.prototype, "mdcRoot", void 0),
    r([y({ type: Boolean })], ot.prototype, "primary", void 0),
    r([y({ type: Boolean })], ot.prototype, "accent", void 0),
    r([y({ type: Boolean })], ot.prototype, "unbounded", void 0),
    r([y({ type: Boolean })], ot.prototype, "disabled", void 0),
    r([y({ type: Boolean })], ot.prototype, "activated", void 0),
    r([y({ type: Boolean })], ot.prototype, "selected", void 0),
    r([y({ type: Boolean })], ot.prototype, "internalUseStateLayerCustomProperties", void 0),
    r([w()], ot.prototype, "hovering", void 0),
    r([w()], ot.prototype, "bgFocused", void 0),
    r([w()], ot.prototype, "fgActivation", void 0),
    r([w()], ot.prototype, "fgDeactivation", void 0),
    r([w()], ot.prototype, "fgScale", void 0),
    r([w()], ot.prototype, "fgSize", void 0),
    r([w()], ot.prototype, "translateStart", void 0),
    r([w()], ot.prototype, "translateEnd", void 0),
    r([w()], ot.prototype, "leftPos", void 0),
    r([w()], ot.prototype, "topPos", void 0);
  const at = P`.mdc-ripple-surface{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity;position:relative;outline:none;overflow:hidden}.mdc-ripple-surface::before,.mdc-ripple-surface::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-ripple-surface::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-ripple-surface::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-ripple-surface.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface::before,.mdc-ripple-surface::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-ripple-surface.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded],.mdc-ripple-upgraded--unbounded{overflow:visible}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::after,.mdc-ripple-upgraded--unbounded::before,.mdc-ripple-upgraded--unbounded::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::before,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface::before,.mdc-ripple-surface::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-ripple-surface:hover::before,.mdc-ripple-surface.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;display:block}:host .mdc-ripple-surface{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;will-change:unset}.mdc-ripple-surface--primary::before,.mdc-ripple-surface--primary::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary:hover::before,.mdc-ripple-surface--primary.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--primary.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before,.mdc-ripple-surface--primary--activated::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--activated:hover::before,.mdc-ripple-surface--primary--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--primary--selected::before,.mdc-ripple-surface--primary--selected::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--selected:hover::before,.mdc-ripple-surface--primary--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent::before,.mdc-ripple-surface--accent::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent:hover::before,.mdc-ripple-surface--accent.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--accent.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before,.mdc-ripple-surface--accent--activated::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--activated:hover::before,.mdc-ripple-surface--accent--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--accent--selected::before,.mdc-ripple-surface--accent--selected::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--selected:hover::before,.mdc-ripple-surface--accent--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--disabled{opacity:0}.mdc-ripple-surface--internal-use-state-layer-custom-properties::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties::after{background-color:#000;background-color:var(--mdc-ripple-hover-state-layer-color, #000)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:hover::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-state-layer-opacity, 0.04)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}`;
  let dt = class extends ot {};
  function ct(e, t, i) {
    if (void 0 !== t)
      return (function (e, t, i) {
        const r = e.constructor;
        if (!i) {
          const e = `__${t}`;
          if (!(i = r.getPropertyDescriptor(t, e))) throw new Error("@ariaProperty must be used after a @property decorator");
        }
        const n = i;
        let o = "";
        if (!n.set) throw new Error(`@ariaProperty requires a setter for ${t}`);
        if (e.dispatchWizEvent) return i;
        const a = {
          configurable: !0,
          enumerable: !0,
          set(e) {
            if ("" === o) {
              const e = r.getPropertyOptions(t);
              o = "string" == typeof e.attribute ? e.attribute : t;
            }
            this.hasAttribute(o) && this.removeAttribute(o), n.set.call(this, e);
          },
        };
        return (
          n.get &&
            (a.get = function () {
              return n.get.call(this);
            }),
          a
        );
      })(e, t, i);
    throw new Error("@ariaProperty only supports TypeScript Decorators");
  }
  (dt.styles = [at]), (dt = r([_("mwc-ripple")], dt));
  class st {
    constructor(e) {
      (this.startPress = (t) => {
        e().then((e) => {
          e && e.startPress(t);
        });
      }),
        (this.endPress = () => {
          e().then((e) => {
            e && e.endPress();
          });
        }),
        (this.startFocus = () => {
          e().then((e) => {
            e && e.startFocus();
          });
        }),
        (this.endFocus = () => {
          e().then((e) => {
            e && e.endFocus();
          });
        }),
        (this.startHover = () => {
          e().then((e) => {
            e && e.startHover();
          });
        }),
        (this.endHover = () => {
          e().then((e) => {
            e && e.endHover();
          });
        });
    }
  }
  const lt = (e) => (null != e ? e : ue);
  class pt extends Fe {
    constructor() {
      super(...arguments),
        (this.raised = !1),
        (this.unelevated = !1),
        (this.outlined = !1),
        (this.dense = !1),
        (this.disabled = !1),
        (this.trailingIcon = !1),
        (this.fullwidth = !1),
        (this.icon = ""),
        (this.label = ""),
        (this.expandContent = !1),
        (this.shouldRenderRipple = !1),
        (this.rippleHandlers = new st(() => ((this.shouldRenderRipple = !0), this.ripple)));
    }
    renderOverlay() {
      return me``;
    }
    renderRipple() {
      const e = this.raised || this.unelevated;
      return this.shouldRenderRipple ? me`<mwc-ripple class="ripple" .primary="${!e}" .disabled="${this.disabled}"></mwc-ripple>` : "";
    }
    focus() {
      const e = this.buttonElement;
      e && (this.rippleHandlers.startFocus(), e.focus());
    }
    blur() {
      const e = this.buttonElement;
      e && (this.rippleHandlers.endFocus(), e.blur());
    }
    getRenderClasses() {
      return {
        "mdc-button--raised": this.raised,
        "mdc-button--unelevated": this.unelevated,
        "mdc-button--outlined": this.outlined,
        "mdc-button--dense": this.dense,
      };
    }
    render() {
      return me`
      <button
          id="button"
          class="mdc-button ${rt(this.getRenderClasses())}"
          ?disabled="${this.disabled}"
          aria-label="${this.label || this.icon}"
          aria-haspopup="${lt(this.ariaHasPopup)}"
          @focus="${this.handleRippleFocus}"
          @blur="${this.handleRippleBlur}"
          @mousedown="${this.handleRippleActivate}"
          @mouseenter="${this.handleRippleMouseEnter}"
          @mouseleave="${this.handleRippleMouseLeave}"
          @touchstart="${this.handleRippleActivate}"
          @touchend="${this.handleRippleDeactivate}"
          @touchcancel="${this.handleRippleDeactivate}">
        ${this.renderOverlay()}
        ${this.renderRipple()}
        <span class="leading-icon">
          <slot name="icon">
            ${this.icon && !this.trailingIcon ? this.renderIcon() : ""}
          </slot>
        </span>
        <span class="mdc-button__label">${this.label}</span>
        <span class="slot-container ${rt({ flex: this.expandContent })}">
          <slot></slot>
        </span>
        <span class="trailing-icon">
          <slot name="trailingIcon">
            ${this.icon && this.trailingIcon ? this.renderIcon() : ""}
          </slot>
        </span>
      </button>`;
    }
    renderIcon() {
      return me`
    <mwc-icon class="mdc-button__icon">
      ${this.icon}
    </mwc-icon>`;
    }
    handleRippleActivate(e) {
      const t = () => {
        window.removeEventListener("mouseup", t), this.handleRippleDeactivate();
      };
      window.addEventListener("mouseup", t), this.rippleHandlers.startPress(e);
    }
    handleRippleDeactivate() {
      this.rippleHandlers.endPress();
    }
    handleRippleMouseEnter() {
      this.rippleHandlers.startHover();
    }
    handleRippleMouseLeave() {
      this.rippleHandlers.endHover();
    }
    handleRippleFocus() {
      this.rippleHandlers.startFocus();
    }
    handleRippleBlur() {
      this.rippleHandlers.endFocus();
    }
  }
  (pt.shadowRootOptions = { mode: "open", delegatesFocus: !0 }),
    r([ct, y({ type: String, attribute: "aria-haspopup" })], pt.prototype, "ariaHasPopup", void 0),
    r([y({ type: Boolean, reflect: !0 })], pt.prototype, "raised", void 0),
    r([y({ type: Boolean, reflect: !0 })], pt.prototype, "unelevated", void 0),
    r([y({ type: Boolean, reflect: !0 })], pt.prototype, "outlined", void 0),
    r([y({ type: Boolean })], pt.prototype, "dense", void 0),
    r([y({ type: Boolean, reflect: !0 })], pt.prototype, "disabled", void 0),
    r([y({ type: Boolean, attribute: "trailingicon" })], pt.prototype, "trailingIcon", void 0),
    r([y({ type: Boolean, reflect: !0 })], pt.prototype, "fullwidth", void 0),
    r([y({ type: String })], pt.prototype, "icon", void 0),
    r([y({ type: String })], pt.prototype, "label", void 0),
    r([y({ type: Boolean })], pt.prototype, "expandContent", void 0),
    r([T("#button")], pt.prototype, "buttonElement", void 0),
    r([A("mwc-ripple")], pt.prototype, "ripple", void 0),
    r([w()], pt.prototype, "shouldRenderRipple", void 0),
    r([k({ passive: !0 })], pt.prototype, "handleRippleActivate", null);
  const mt = P`.mdc-button{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-button-font-size, 0.875rem);line-height:2.25rem;line-height:var(--mdc-typography-button-line-height, 2.25rem);font-weight:500;font-weight:var(--mdc-typography-button-font-weight, 500);letter-spacing:0.0892857143em;letter-spacing:var(--mdc-typography-button-letter-spacing, 0.0892857143em);text-decoration:none;text-decoration:var(--mdc-typography-button-text-decoration, none);text-transform:uppercase;text-transform:var(--mdc-typography-button-text-transform, uppercase)}.mdc-touch-target-wrapper{display:inline}.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:0;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1);background-color:#fff;background-color:var(--mdc-elevation-overlay-color, #fff)}.mdc-button{position:relative;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;min-width:64px;border:none;outline:none;line-height:inherit;user-select:none;-webkit-appearance:none;overflow:visible;vertical-align:middle;background:transparent}.mdc-button .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-button::-moz-focus-inner{padding:0;border:0}.mdc-button:active{outline:none}.mdc-button:hover{cursor:pointer}.mdc-button:disabled{cursor:default;pointer-events:none}.mdc-button .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;position:relative;vertical-align:top}[dir=rtl] .mdc-button .mdc-button__icon,.mdc-button .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:0}.mdc-button .mdc-button__label{position:relative}.mdc-button .mdc-button__focus-ring{display:none}@media screen and (forced-colors: active){.mdc-button.mdc-ripple-upgraded--background-focused .mdc-button__focus-ring,.mdc-button:not(.mdc-ripple-upgraded):focus .mdc-button__focus-ring{pointer-events:none;border:2px solid transparent;border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc( 100% + 4px );width:calc( 100% + 4px );display:block}}@media screen and (forced-colors: active)and (forced-colors: active){.mdc-button.mdc-ripple-upgraded--background-focused .mdc-button__focus-ring,.mdc-button:not(.mdc-ripple-upgraded):focus .mdc-button__focus-ring{border-color:CanvasText}}@media screen and (forced-colors: active){.mdc-button.mdc-ripple-upgraded--background-focused .mdc-button__focus-ring::after,.mdc-button:not(.mdc-ripple-upgraded):focus .mdc-button__focus-ring::after{content:"";border:2px solid transparent;border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px)}}@media screen and (forced-colors: active)and (forced-colors: active){.mdc-button.mdc-ripple-upgraded--background-focused .mdc-button__focus-ring::after,.mdc-button:not(.mdc-ripple-upgraded):focus .mdc-button__focus-ring::after{border-color:CanvasText}}.mdc-button .mdc-button__touch{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%)}.mdc-button__label+.mdc-button__icon{margin-left:8px;margin-right:0}[dir=rtl] .mdc-button__label+.mdc-button__icon,.mdc-button__label+.mdc-button__icon[dir=rtl]{margin-left:0;margin-right:8px}svg.mdc-button__icon{fill:currentColor}.mdc-button--touch{margin-top:6px;margin-bottom:6px}.mdc-button{padding:0 8px 0 8px}.mdc-button--unelevated{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);padding:0 16px 0 16px}.mdc-button--unelevated.mdc-button--icon-trailing{padding:0 12px 0 16px}.mdc-button--unelevated.mdc-button--icon-leading{padding:0 16px 0 12px}.mdc-button--raised{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);padding:0 16px 0 16px}.mdc-button--raised.mdc-button--icon-trailing{padding:0 12px 0 16px}.mdc-button--raised.mdc-button--icon-leading{padding:0 16px 0 12px}.mdc-button--outlined{border-style:solid;transition:border 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-button--outlined .mdc-button__ripple{border-style:solid;border-color:transparent}.mdc-button{height:36px;border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button:not(:disabled){color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}.mdc-button:disabled{color:rgba(0, 0, 0, 0.38)}.mdc-button .mdc-button__icon{font-size:1.125rem;width:1.125rem;height:1.125rem}.mdc-button .mdc-button__ripple{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button--raised,.mdc-button--unelevated{height:36px;border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){background-color:#6200ee;background-color:var(--mdc-theme-primary, #6200ee)}.mdc-button--raised:disabled,.mdc-button--unelevated:disabled{background-color:rgba(0, 0, 0, 0.12)}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){color:#fff;color:var(--mdc-theme-on-primary, #fff)}.mdc-button--raised:disabled,.mdc-button--unelevated:disabled{color:rgba(0, 0, 0, 0.38)}.mdc-button--raised .mdc-button__icon,.mdc-button--unelevated .mdc-button__icon{font-size:1.125rem;width:1.125rem;height:1.125rem}.mdc-button--raised .mdc-button__ripple,.mdc-button--unelevated .mdc-button__ripple{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button--outlined{height:36px;border-radius:4px;border-radius:var(--mdc-shape-small, 4px);padding:0 15px 0 15px;border-width:1px}.mdc-button--outlined:not(:disabled){color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}.mdc-button--outlined:disabled{color:rgba(0, 0, 0, 0.38)}.mdc-button--outlined .mdc-button__icon{font-size:1.125rem;width:1.125rem;height:1.125rem}.mdc-button--outlined .mdc-button__ripple{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button--outlined:not(:disabled){border-color:rgba(0, 0, 0, 0.12)}.mdc-button--outlined:disabled{border-color:rgba(0, 0, 0, 0.12)}.mdc-button--outlined.mdc-button--icon-trailing{padding:0 11px 0 15px}.mdc-button--outlined.mdc-button--icon-leading{padding:0 15px 0 11px}.mdc-button--outlined .mdc-button__ripple{top:-1px;left:-1px;bottom:-1px;right:-1px;border-width:1px}.mdc-button--outlined .mdc-button__touch{left:calc(-1 * 1px);width:calc(100% + 2 * 1px)}.mdc-button--raised{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0,0,0,.12);transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-button--raised:hover,.mdc-button--raised:focus{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12)}.mdc-button--raised:active{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12)}.mdc-button--raised:disabled{box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 0px rgba(0, 0, 0, 0.14),0px 0px 0px 0px rgba(0,0,0,.12)}:host{display:inline-flex;outline:none;-webkit-tap-highlight-color:transparent;vertical-align:top}:host([fullwidth]){width:100%}:host([raised]),:host([unelevated]){--mdc-ripple-color:#fff;--mdc-ripple-focus-opacity:0.24;--mdc-ripple-hover-opacity:0.08;--mdc-ripple-press-opacity:0.24}.trailing-icon ::slotted(*),.trailing-icon .mdc-button__icon,.leading-icon ::slotted(*),.leading-icon .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;position:relative;vertical-align:top;font-size:1.125rem;height:1.125rem;width:1.125rem}[dir=rtl] .trailing-icon ::slotted(*),[dir=rtl] .trailing-icon .mdc-button__icon,[dir=rtl] .leading-icon ::slotted(*),[dir=rtl] .leading-icon .mdc-button__icon,.trailing-icon ::slotted(*[dir=rtl]),.trailing-icon .mdc-button__icon[dir=rtl],.leading-icon ::slotted(*[dir=rtl]),.leading-icon .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:0}.trailing-icon ::slotted(*),.trailing-icon .mdc-button__icon{margin-left:8px;margin-right:0}[dir=rtl] .trailing-icon ::slotted(*),[dir=rtl] .trailing-icon .mdc-button__icon,.trailing-icon ::slotted(*[dir=rtl]),.trailing-icon .mdc-button__icon[dir=rtl]{margin-left:0;margin-right:8px}.slot-container{display:inline-flex;align-items:center;justify-content:center}.slot-container.flex{flex:auto}.mdc-button{flex:auto;overflow:hidden;padding-left:8px;padding-left:var(--mdc-button-horizontal-padding, 8px);padding-right:8px;padding-right:var(--mdc-button-horizontal-padding, 8px)}.mdc-button--raised{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12))}.mdc-button--raised:focus{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-focus, var(--mdc-button-raised-box-shadow-hover, 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)))}.mdc-button--raised:hover{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-hover, 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12))}.mdc-button--raised:active{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-active, 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12))}.mdc-button--raised:disabled{box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-disabled, 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12))}.mdc-button--raised,.mdc-button--unelevated{padding-left:16px;padding-left:var(--mdc-button-horizontal-padding, 16px);padding-right:16px;padding-right:var(--mdc-button-horizontal-padding, 16px)}.mdc-button--outlined{border-width:1px;border-width:var(--mdc-button-outline-width, 1px);padding-left:calc(16px - 1px);padding-left:calc(var(--mdc-button-horizontal-padding, 16px) - var(--mdc-button-outline-width, 1px));padding-right:calc(16px - 1px);padding-right:calc(var(--mdc-button-horizontal-padding, 16px) - var(--mdc-button-outline-width, 1px))}.mdc-button--outlined:not(:disabled){border-color:rgba(0, 0, 0, 0.12);border-color:var(--mdc-button-outline-color, rgba(0, 0, 0, 0.12))}.mdc-button--outlined .ripple{top:calc(-1 * 1px);top:calc(-1 * var(--mdc-button-outline-width, 1px));left:calc(-1 * 1px);left:calc(-1 * var(--mdc-button-outline-width, 1px));right:initial;right:initial;border-width:1px;border-width:var(--mdc-button-outline-width, 1px);border-style:solid;border-color:transparent}[dir=rtl] .mdc-button--outlined .ripple,.mdc-button--outlined .ripple[dir=rtl]{left:initial;left:initial;right:calc(-1 * 1px);right:calc(-1 * var(--mdc-button-outline-width, 1px))}.mdc-button--dense{height:28px;margin-top:0;margin-bottom:0}.mdc-button--dense .mdc-button__touch{height:100%}:host([disabled]){pointer-events:none}:host([disabled]) .mdc-button{color:rgba(0, 0, 0, 0.38);color:var(--mdc-button-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-button--raised,:host([disabled]) .mdc-button--unelevated{background-color:rgba(0, 0, 0, 0.12);background-color:var(--mdc-button-disabled-fill-color, rgba(0, 0, 0, 0.12))}:host([disabled]) .mdc-button--outlined{border-color:rgba(0, 0, 0, 0.12);border-color:var(--mdc-button-disabled-outline-color, rgba(0, 0, 0, 0.12))}`;
  let ht = class extends pt {};
  (ht.styles = [mt]), (ht = r([_("mwc-button")], ht));
  class ut extends Fe {
    constructor() {
      super(...arguments), (this.indeterminate = !1), (this.progress = 0), (this.density = 0), (this.closed = !1);
    }
    open() {
      this.closed = !1;
    }
    close() {
      this.closed = !0;
    }
    render() {
      const e = { "mdc-circular-progress--closed": this.closed, "mdc-circular-progress--indeterminate": this.indeterminate },
        t = 48 + 4 * this.density,
        i = { width: `${t}px`, height: `${t}px` };
      return me`
      <div
        class="mdc-circular-progress ${rt(e)}"
        style="${nt(i)}"
        role="progressbar"
        aria-label="${lt(this.ariaLabel)}"
        aria-valuemin="0"
        aria-valuemax="1"
        aria-valuenow="${lt(this.indeterminate ? void 0 : this.progress)}">
        ${this.renderDeterminateContainer()}
        ${this.renderIndeterminateContainer()}
      </div>`;
    }
    renderDeterminateContainer() {
      const e = 48 + 4 * this.density,
        t = e / 2,
        i = this.density >= -3 ? 18 + (11 * this.density) / 6 : 12.5 + (5 * (this.density + 3)) / 4,
        r = 6.2831852 * i,
        n = (1 - this.progress) * r,
        o = this.density >= -3 ? 4 + this.density * (1 / 3) : 3 + (this.density + 3) * (1 / 6);
      return me`
      <div class="mdc-circular-progress__determinate-container">
        <svg class="mdc-circular-progress__determinate-circle-graphic"
             viewBox="0 0 ${e} ${e}">
          <circle class="mdc-circular-progress__determinate-track"
                  cx="${t}" cy="${t}" r="${i}"
                  stroke-width="${o}"></circle>
          <circle class="mdc-circular-progress__determinate-circle"
                  cx="${t}" cy="${t}" r="${i}"
                  stroke-dasharray="${6.2831852 * i}"
                  stroke-dashoffset="${n}"
                  stroke-width="${o}"></circle>
        </svg>
      </div>`;
    }
    renderIndeterminateContainer() {
      return me`
      <div class="mdc-circular-progress__indeterminate-container">
        <div class="mdc-circular-progress__spinner-layer">
          ${this.renderIndeterminateSpinnerLayer()}
        </div>
      </div>`;
    }
    renderIndeterminateSpinnerLayer() {
      const e = 48 + 4 * this.density,
        t = e / 2,
        i = this.density >= -3 ? 18 + (11 * this.density) / 6 : 12.5 + (5 * (this.density + 3)) / 4,
        r = 6.2831852 * i,
        n = 0.5 * r,
        o = this.density >= -3 ? 4 + this.density * (1 / 3) : 3 + (this.density + 3) * (1 / 6);
      return me`
        <div class="mdc-circular-progress__circle-clipper mdc-circular-progress__circle-left">
          <svg class="mdc-circular-progress__indeterminate-circle-graphic"
               viewBox="0 0 ${e} ${e}">
            <circle cx="${t}" cy="${t}" r="${i}"
                    stroke-dasharray="${r}"
                    stroke-dashoffset="${n}"
                    stroke-width="${o}"></circle>
          </svg>
        </div>
        <div class="mdc-circular-progress__gap-patch">
          <svg class="mdc-circular-progress__indeterminate-circle-graphic"
               viewBox="0 0 ${e} ${e}">
            <circle cx="${t}" cy="${t}" r="${i}"
                    stroke-dasharray="${r}"
                    stroke-dashoffset="${n}"
                    stroke-width="${0.8 * o}"></circle>
          </svg>
        </div>
        <div class="mdc-circular-progress__circle-clipper mdc-circular-progress__circle-right">
          <svg class="mdc-circular-progress__indeterminate-circle-graphic"
               viewBox="0 0 ${e} ${e}">
            <circle cx="${t}" cy="${t}" r="${i}"
                    stroke-dasharray="${r}"
                    stroke-dashoffset="${n}"
                    stroke-width="${o}"></circle>
          </svg>
        </div>`;
    }
    update(e) {
      super.update(e), e.has("progress") && (this.progress > 1 && (this.progress = 1), this.progress < 0 && (this.progress = 0));
    }
  }
  r([y({ type: Boolean, reflect: !0 })], ut.prototype, "indeterminate", void 0),
    r([y({ type: Number, reflect: !0 })], ut.prototype, "progress", void 0),
    r([y({ type: Number, reflect: !0 })], ut.prototype, "density", void 0),
    r([y({ type: Boolean, reflect: !0 })], ut.prototype, "closed", void 0),
    r([ct, y({ type: String, attribute: "aria-label" })], ut.prototype, "ariaLabel", void 0);
  const ft = P`.mdc-circular-progress__determinate-circle,.mdc-circular-progress__indeterminate-circle-graphic{stroke:#6200ee;stroke:var(--mdc-theme-primary, #6200ee)}.mdc-circular-progress__determinate-track{stroke:transparent}@keyframes mdc-circular-progress-container-rotate{to{transform:rotate(360deg)}}@keyframes mdc-circular-progress-spinner-layer-rotate{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}100%{transform:rotate(1080deg)}}@keyframes mdc-circular-progress-color-1-fade-in-out{from{opacity:.99}25%{opacity:.99}26%{opacity:0}89%{opacity:0}90%{opacity:.99}to{opacity:.99}}@keyframes mdc-circular-progress-color-2-fade-in-out{from{opacity:0}15%{opacity:0}25%{opacity:.99}50%{opacity:.99}51%{opacity:0}to{opacity:0}}@keyframes mdc-circular-progress-color-3-fade-in-out{from{opacity:0}40%{opacity:0}50%{opacity:.99}75%{opacity:.99}76%{opacity:0}to{opacity:0}}@keyframes mdc-circular-progress-color-4-fade-in-out{from{opacity:0}65%{opacity:0}75%{opacity:.99}90%{opacity:.99}to{opacity:0}}@keyframes mdc-circular-progress-left-spin{from{transform:rotate(265deg)}50%{transform:rotate(130deg)}to{transform:rotate(265deg)}}@keyframes mdc-circular-progress-right-spin{from{transform:rotate(-265deg)}50%{transform:rotate(-130deg)}to{transform:rotate(-265deg)}}.mdc-circular-progress{display:inline-flex;position:relative;direction:ltr;line-height:0;transition:opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-circular-progress__determinate-container,.mdc-circular-progress__indeterminate-circle-graphic,.mdc-circular-progress__indeterminate-container,.mdc-circular-progress__spinner-layer{position:absolute;width:100%;height:100%}.mdc-circular-progress__determinate-container{transform:rotate(-90deg)}.mdc-circular-progress__indeterminate-container{font-size:0;letter-spacing:0;white-space:nowrap;opacity:0}.mdc-circular-progress__determinate-circle-graphic,.mdc-circular-progress__indeterminate-circle-graphic{fill:transparent}.mdc-circular-progress__determinate-circle{transition:stroke-dashoffset 500ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-circular-progress__gap-patch{position:absolute;top:0;left:47.5%;box-sizing:border-box;width:5%;height:100%;overflow:hidden}.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic{left:-900%;width:2000%;transform:rotate(180deg)}.mdc-circular-progress__circle-clipper{display:inline-flex;position:relative;width:50%;height:100%;overflow:hidden}.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic{width:200%}.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{left:-100%}.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container{opacity:0}.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container{opacity:1}.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container{animation:mdc-circular-progress-container-rotate 1568.2352941176ms linear infinite}.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-1{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-1-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-2{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-2-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-3{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-3-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-4{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-4-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--closed{opacity:0}:host{display:inline-flex}.mdc-circular-progress__determinate-track{stroke:transparent;stroke:var(--mdc-circular-progress-track-color, transparent)}`;
  let bt = class extends ut {};
  (bt.styles = [ft]), (bt = r([_("mwc-circular-progress")], bt));
  class gt extends ut {
    renderIndeterminateContainer() {
      return me`
      <div class="mdc-circular-progress__indeterminate-container">
        <div class="mdc-circular-progress__spinner-layer mdc-circular-progress__color-1">
          ${this.renderIndeterminateSpinnerLayer()}
        </div>
        <div class="mdc-circular-progress__spinner-layer mdc-circular-progress__color-2">
          ${this.renderIndeterminateSpinnerLayer()}
        </div>
        <div class="mdc-circular-progress__spinner-layer mdc-circular-progress__color-3">
          ${this.renderIndeterminateSpinnerLayer()}
        </div>
        <div class="mdc-circular-progress__spinner-layer mdc-circular-progress__color-4">
          ${this.renderIndeterminateSpinnerLayer()}
        </div>
      </div>`;
    }
  }
  const vt = P`.mdc-circular-progress__determinate-circle,.mdc-circular-progress__indeterminate-circle-graphic{stroke:#6200ee;stroke:var(--mdc-theme-primary, #6200ee)}.mdc-circular-progress__determinate-track{stroke:transparent}@keyframes mdc-circular-progress-container-rotate{to{transform:rotate(360deg)}}@keyframes mdc-circular-progress-spinner-layer-rotate{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}100%{transform:rotate(1080deg)}}@keyframes mdc-circular-progress-color-1-fade-in-out{from{opacity:.99}25%{opacity:.99}26%{opacity:0}89%{opacity:0}90%{opacity:.99}to{opacity:.99}}@keyframes mdc-circular-progress-color-2-fade-in-out{from{opacity:0}15%{opacity:0}25%{opacity:.99}50%{opacity:.99}51%{opacity:0}to{opacity:0}}@keyframes mdc-circular-progress-color-3-fade-in-out{from{opacity:0}40%{opacity:0}50%{opacity:.99}75%{opacity:.99}76%{opacity:0}to{opacity:0}}@keyframes mdc-circular-progress-color-4-fade-in-out{from{opacity:0}65%{opacity:0}75%{opacity:.99}90%{opacity:.99}to{opacity:0}}@keyframes mdc-circular-progress-left-spin{from{transform:rotate(265deg)}50%{transform:rotate(130deg)}to{transform:rotate(265deg)}}@keyframes mdc-circular-progress-right-spin{from{transform:rotate(-265deg)}50%{transform:rotate(-130deg)}to{transform:rotate(-265deg)}}.mdc-circular-progress{display:inline-flex;position:relative;direction:ltr;line-height:0;transition:opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-circular-progress__determinate-container,.mdc-circular-progress__indeterminate-circle-graphic,.mdc-circular-progress__indeterminate-container,.mdc-circular-progress__spinner-layer{position:absolute;width:100%;height:100%}.mdc-circular-progress__determinate-container{transform:rotate(-90deg)}.mdc-circular-progress__indeterminate-container{font-size:0;letter-spacing:0;white-space:nowrap;opacity:0}.mdc-circular-progress__determinate-circle-graphic,.mdc-circular-progress__indeterminate-circle-graphic{fill:transparent}.mdc-circular-progress__determinate-circle{transition:stroke-dashoffset 500ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-circular-progress__gap-patch{position:absolute;top:0;left:47.5%;box-sizing:border-box;width:5%;height:100%;overflow:hidden}.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic{left:-900%;width:2000%;transform:rotate(180deg)}.mdc-circular-progress__circle-clipper{display:inline-flex;position:relative;width:50%;height:100%;overflow:hidden}.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic{width:200%}.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{left:-100%}.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container{opacity:0}.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container{opacity:1}.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container{animation:mdc-circular-progress-container-rotate 1568.2352941176ms linear infinite}.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-1{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-1-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-2{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-2-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-3{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-3-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-4{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-4-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--closed{opacity:0}:host{display:inline-flex}.mdc-circular-progress__determinate-track{stroke:transparent;stroke:var(--mdc-circular-progress-track-color, transparent)}.mdc-circular-progress__color-1 .mdc-circular-progress__indeterminate-circle-graphic{stroke:#6200ee;stroke:var(--mdc-circular-progress-bar-color-1, var(--mdc-theme-primary, #6200ee))}.mdc-circular-progress__color-2 .mdc-circular-progress__indeterminate-circle-graphic{stroke:#6200ee;stroke:var(--mdc-circular-progress-bar-color-2, var(--mdc-theme-primary, #6200ee))}.mdc-circular-progress__color-3 .mdc-circular-progress__indeterminate-circle-graphic{stroke:#6200ee;stroke:var(--mdc-circular-progress-bar-color-3, var(--mdc-theme-primary, #6200ee))}.mdc-circular-progress__color-4 .mdc-circular-progress__indeterminate-circle-graphic{stroke:#6200ee;stroke:var(--mdc-circular-progress-bar-color-4, var(--mdc-theme-primary, #6200ee))}:host{display:inline-flex}`;
  let _t = class extends gt {};
  var xt, yt;
  (_t.styles = [vt]), (_t = r([_("mwc-circular-progress-four-color")], _t));
  const wt = null !== (yt = null === (xt = window.ShadyDOM) || void 0 === xt ? void 0 : xt.inUse) && void 0 !== yt && yt;
  class Et extends Xe {
    constructor() {
      super(...arguments),
        (this.disabled = !1),
        (this.containingForm = null),
        (this.formDataListener = (e) => {
          this.disabled || this.setFormData(e.formData);
        });
    }
    findFormElement() {
      if (!this.shadowRoot || wt) return null;
      const e = this.getRootNode().querySelectorAll("form");
      for (const t of Array.from(e)) if (t.contains(this)) return t;
      return null;
    }
    connectedCallback() {
      var e;
      super.connectedCallback(),
        (this.containingForm = this.findFormElement()),
        null === (e = this.containingForm) || void 0 === e || e.addEventListener("formdata", this.formDataListener);
    }
    disconnectedCallback() {
      var e;
      super.disconnectedCallback(),
        null === (e = this.containingForm) || void 0 === e || e.removeEventListener("formdata", this.formDataListener),
        (this.containingForm = null);
    }
    click() {
      this.formElement && !this.disabled && (this.formElement.focus(), this.formElement.click());
    }
    firstUpdated() {
      super.firstUpdated(),
        this.shadowRoot &&
          this.mdcRoot.addEventListener("change", (e) => {
            this.dispatchEvent(new Event("change", e));
          });
    }
  }
  (Et.shadowRootOptions = { mode: "open", delegatesFocus: !0 }), r([y({ type: Boolean })], Et.prototype, "disabled", void 0);
  class kt extends Et {
    constructor() {
      super(...arguments),
        (this.checked = !1),
        (this.indeterminate = !1),
        (this.disabled = !1),
        (this.name = ""),
        (this.value = "on"),
        (this.reducedTouchTarget = !1),
        (this.animationClass = ""),
        (this.shouldRenderRipple = !1),
        (this.focused = !1),
        (this.mdcFoundationClass = void 0),
        (this.mdcFoundation = void 0),
        (this.rippleElement = null),
        (this.rippleHandlers = new st(() => ((this.shouldRenderRipple = !0), this.ripple.then((e) => (this.rippleElement = e)), this.ripple)));
    }
    createAdapter() {
      return {};
    }
    update(e) {
      const t = e.get("indeterminate"),
        i = e.get("checked"),
        r = e.get("disabled");
      if (void 0 !== t || void 0 !== i || void 0 !== r) {
        const e = this.calculateAnimationStateName(!!i, !!t, !!r),
          n = this.calculateAnimationStateName(this.checked, this.indeterminate, this.disabled);
        this.animationClass = `${e}-${n}`;
      }
      super.update(e);
    }
    calculateAnimationStateName(e, t, i) {
      return i ? "disabled" : t ? "indeterminate" : e ? "checked" : "unchecked";
    }
    renderRipple() {
      return this.shouldRenderRipple ? this.renderRippleTemplate() : "";
    }
    renderRippleTemplate() {
      return me`<mwc-ripple
        .disabled="${this.disabled}"
        unbounded></mwc-ripple>`;
    }
    render() {
      const e = this.indeterminate || this.checked,
        t = {
          "mdc-checkbox--disabled": this.disabled,
          "mdc-checkbox--selected": e,
          "mdc-checkbox--touch": !this.reducedTouchTarget,
          "mdc-ripple-upgraded--background-focused": this.focused,
          "mdc-checkbox--anim-checked-indeterminate": "checked-indeterminate" == this.animationClass,
          "mdc-checkbox--anim-checked-unchecked": "checked-unchecked" == this.animationClass,
          "mdc-checkbox--anim-indeterminate-checked": "indeterminate-checked" == this.animationClass,
          "mdc-checkbox--anim-indeterminate-unchecked": "indeterminate-unchecked" == this.animationClass,
          "mdc-checkbox--anim-unchecked-checked": "unchecked-checked" == this.animationClass,
          "mdc-checkbox--anim-unchecked-indeterminate": "unchecked-indeterminate" == this.animationClass,
        },
        i = this.indeterminate ? "mixed" : void 0;
      return me`
      <div class="mdc-checkbox mdc-checkbox--upgraded ${rt(t)}">
        <input type="checkbox"
              class="mdc-checkbox__native-control"
              name="${lt(this.name)}"
              aria-checked="${lt(i)}"
              aria-label="${lt(this.ariaLabel)}"
              aria-labelledby="${lt(this.ariaLabelledBy)}"
              aria-describedby="${lt(this.ariaDescribedBy)}"
              data-indeterminate="${this.indeterminate ? "true" : "false"}"
              ?disabled="${this.disabled}"
              .indeterminate="${this.indeterminate}"
              .checked="${this.checked}"
              .value="${this.value}"
              @change="${this.handleChange}"
              @focus="${this.handleFocus}"
              @blur="${this.handleBlur}"
              @mousedown="${this.handleRippleMouseDown}"
              @mouseenter="${this.handleRippleMouseEnter}"
              @mouseleave="${this.handleRippleMouseLeave}"
              @touchstart="${this.handleRippleTouchStart}"
              @touchend="${this.handleRippleDeactivate}"
              @touchcancel="${this.handleRippleDeactivate}">
        <div class="mdc-checkbox__background"
          @animationend="${this.resetAnimationClass}">
          <svg class="mdc-checkbox__checkmark"
              viewBox="0 0 24 24">
            <path class="mdc-checkbox__checkmark-path"
                  fill="none"
                  d="M1.73,12.91 8.1,19.28 22.79,4.59"></path>
          </svg>
          <div class="mdc-checkbox__mixedmark"></div>
        </div>
        ${this.renderRipple()}
      </div>`;
    }
    setFormData(e) {
      this.name && this.checked && e.append(this.name, this.value);
    }
    handleFocus() {
      (this.focused = !0), this.handleRippleFocus();
    }
    handleBlur() {
      (this.focused = !1), this.handleRippleBlur();
    }
    handleRippleMouseDown(e) {
      const t = () => {
        window.removeEventListener("mouseup", t), this.handleRippleDeactivate();
      };
      window.addEventListener("mouseup", t), this.rippleHandlers.startPress(e);
    }
    handleRippleTouchStart(e) {
      this.rippleHandlers.startPress(e);
    }
    handleRippleDeactivate() {
      this.rippleHandlers.endPress();
    }
    handleRippleMouseEnter() {
      this.rippleHandlers.startHover();
    }
    handleRippleMouseLeave() {
      this.rippleHandlers.endHover();
    }
    handleRippleFocus() {
      this.rippleHandlers.startFocus();
    }
    handleRippleBlur() {
      this.rippleHandlers.endFocus();
    }
    handleChange() {
      (this.checked = this.formElement.checked), (this.indeterminate = this.formElement.indeterminate);
    }
    resetAnimationClass() {
      this.animationClass = "";
    }
    get isRippleActive() {
      var e;
      return (null === (e = this.rippleElement) || void 0 === e ? void 0 : e.isActive) || !1;
    }
  }
  r([T(".mdc-checkbox")], kt.prototype, "mdcRoot", void 0),
    r([T("input")], kt.prototype, "formElement", void 0),
    r([y({ type: Boolean, reflect: !0 })], kt.prototype, "checked", void 0),
    r([y({ type: Boolean })], kt.prototype, "indeterminate", void 0),
    r([y({ type: Boolean, reflect: !0 })], kt.prototype, "disabled", void 0),
    r([y({ type: String, reflect: !0 })], kt.prototype, "name", void 0),
    r([y({ type: String })], kt.prototype, "value", void 0),
    r([ct, y({ type: String, attribute: "aria-label" })], kt.prototype, "ariaLabel", void 0),
    r([ct, y({ type: String, attribute: "aria-labelledby" })], kt.prototype, "ariaLabelledBy", void 0),
    r([ct, y({ type: String, attribute: "aria-describedby" })], kt.prototype, "ariaDescribedBy", void 0),
    r([y({ type: Boolean })], kt.prototype, "reducedTouchTarget", void 0),
    r([w()], kt.prototype, "animationClass", void 0),
    r([w()], kt.prototype, "shouldRenderRipple", void 0),
    r([w()], kt.prototype, "focused", void 0),
    r([A("mwc-ripple")], kt.prototype, "ripple", void 0),
    r([k({ passive: !0 })], kt.prototype, "handleRippleTouchStart", null);
  const Tt = P`.mdc-checkbox{padding:calc((40px - 18px) / 2);padding:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);margin:calc((40px - 40px) / 2);margin:calc((var(--mdc-checkbox-touch-target-size, 40px) - 40px) / 2)}.mdc-checkbox .mdc-checkbox__ripple::before,.mdc-checkbox .mdc-checkbox__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-checkbox:hover .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-checkbox:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-checkbox.mdc-checkbox--selected:hover .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-checkbox .mdc-checkbox__background{top:calc((40px - 18px) / 2);top:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);left:calc((40px - 18px) / 2);left:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2)}.mdc-checkbox .mdc-checkbox__native-control{top:calc((40px - 40px) / 2);top:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);right:calc((40px - 40px) / 2);right:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);left:calc((40px - 40px) / 2);left:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);width:40px;width:var(--mdc-checkbox-touch-target-size, 40px);height:40px;height:var(--mdc-checkbox-touch-target-size, 40px)}.mdc-checkbox .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true]:enabled~.mdc-checkbox__background{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}@keyframes mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786{0%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}50%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}}@keyframes mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786{0%,80%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}100%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}}.mdc-checkbox.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786}.mdc-checkbox.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786}.mdc-checkbox .mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.38);border-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:transparent;background-color:rgba(0, 0, 0, 0.38);background-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38))}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}.mdc-touch-target-wrapper{display:inline}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(45deg);opacity:0}to{transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:mdc-animation-deceleration-curve-timing-function;transform:rotate(-45deg);opacity:0}to{transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,100%{transform:scaleX(0);opacity:0}}.mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom}.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__focus-ring,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__focus-ring{pointer-events:none;border:2px solid transparent;border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:100%;width:100%}@media screen and (forced-colors: active){.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__focus-ring,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__focus-ring{border-color:CanvasText}}.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__focus-ring::after,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__focus-ring::after{content:"";border:2px solid transparent;border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px)}@media screen and (forced-colors: active){.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__focus-ring::after,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__focus-ring::after{border-color:CanvasText}}@media all and (-ms-high-contrast: none){.mdc-checkbox .mdc-checkbox__focus-ring{display:none}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-checkbox__mixedmark{margin:0 1px}}.mdc-checkbox--disabled{cursor:default;pointer-events:none}.mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid currentColor;border-radius:2px;background-color:transparent;pointer-events:none;will-change:background-color,border-color;transition:background-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--upgraded .mdc-checkbox__checkmark{opacity:1}.mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mdc-checkbox__mixedmark{width:100%;height:0;transform:scaleX(0) rotate(0deg);border-width:1px;border-style:solid;opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-duration:180ms;animation-timing-function:linear}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-unchecked-checked-checkmark-path 180ms linear 0s;transition:none}.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:mdc-checkbox-indeterminate-checked-checkmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-checked-mixedmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear 0s;transition:none}.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background{transition:border-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mdc-checkbox__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit}.mdc-checkbox__native-control:disabled{cursor:default;pointer-events:none}.mdc-checkbox--touch{margin:calc((48px - 40px) / 2);margin:calc((var(--mdc-checkbox-state-layer-size, 48px) - var(--mdc-checkbox-state-layer-size, 40px)) / 2)}.mdc-checkbox--touch .mdc-checkbox__native-control{top:calc((40px - 48px) / 2);top:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);right:calc((40px - 48px) / 2);right:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);left:calc((40px - 48px) / 2);left:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);width:48px;width:var(--mdc-checkbox-state-layer-size, 48px);height:48px;height:var(--mdc-checkbox-state-layer-size, 48px)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark{transition:opacity 180ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 180ms 0ms cubic-bezier(0, 0, 0.2, 1);opacity:1}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark{transform:rotate(45deg);opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__mixedmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0deg);opacity:1}.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark-path,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__mixedmark{transition:none}:host{outline:none;display:inline-flex;-webkit-tap-highlight-color:transparent}:host([checked]),:host([indeterminate]){--mdc-ripple-color:var(--mdc-theme-secondary, #018786)}.mdc-checkbox .mdc-checkbox__background::before{content:none}`;
  let At = class extends kt {};
  (At.styles = [Tt]), (At = r([_("mwc-checkbox")], At));
  var It = (function () {
      function e(e) {
        void 0 === e && (e = {}), (this.adapter = e);
      }
      return (
        Object.defineProperty(e, "cssClasses", {
          get: function () {
            return {};
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e, "strings", {
          get: function () {
            return {};
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e, "numbers", {
          get: function () {
            return {};
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e, "defaultAdapter", {
          get: function () {
            return {};
          },
          enumerable: !1,
          configurable: !0,
        }),
        (e.prototype.init = function () {}),
        (e.prototype.destroy = function () {}),
        e
      );
    })(),
    Ct = { ROOT: "mdc-form-field" },
    St = { LABEL_SELECTOR: ".mdc-form-field > label" };
  const Rt = (function (e) {
      function r(t) {
        var n = e.call(this, i(i({}, r.defaultAdapter), t)) || this;
        return (
          (n.click = function () {
            n.handleClick();
          }),
          n
        );
      }
      return (
        t(r, e),
        Object.defineProperty(r, "cssClasses", {
          get: function () {
            return Ct;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(r, "strings", {
          get: function () {
            return St;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(r, "defaultAdapter", {
          get: function () {
            return {
              activateInputRipple: function () {},
              deactivateInputRipple: function () {},
              deregisterInteractionHandler: function () {},
              registerInteractionHandler: function () {},
            };
          },
          enumerable: !1,
          configurable: !0,
        }),
        (r.prototype.init = function () {
          this.adapter.registerInteractionHandler("click", this.click);
        }),
        (r.prototype.destroy = function () {
          this.adapter.deregisterInteractionHandler("click", this.click);
        }),
        (r.prototype.handleClick = function () {
          var e = this;
          this.adapter.activateInputRipple(),
            requestAnimationFrame(function () {
              e.adapter.deactivateInputRipple();
            });
        }),
        r
      );
    })(It),
    Ot = (e) => (t, i) => {
      if (t.constructor._observers) {
        if (!t.constructor.hasOwnProperty("_observers")) {
          const e = t.constructor._observers;
          (t.constructor._observers = new Map()), e.forEach((e, i) => t.constructor._observers.set(i, e));
        }
      } else {
        t.constructor._observers = new Map();
        const e = t.updated;
        t.updated = function (t) {
          e.call(this, t),
            t.forEach((e, t) => {
              const i = this.constructor._observers.get(t);
              void 0 !== i && i.call(this, this[t], e);
            });
        };
      }
      t.constructor._observers.set(i, e);
    };
  class Lt extends Xe {
    constructor() {
      super(...arguments), (this.alignEnd = !1), (this.spaceBetween = !1), (this.nowrap = !1), (this.label = ""), (this.mdcFoundationClass = Rt);
    }
    createAdapter() {
      return {
        registerInteractionHandler: (e, t) => {
          this.labelEl.addEventListener(e, t);
        },
        deregisterInteractionHandler: (e, t) => {
          this.labelEl.removeEventListener(e, t);
        },
        activateInputRipple: async () => {
          const e = this.input;
          if (e instanceof Et) {
            const t = await e.ripple;
            t && t.startPress();
          }
        },
        deactivateInputRipple: async () => {
          const e = this.input;
          if (e instanceof Et) {
            const t = await e.ripple;
            t && t.endPress();
          }
        },
      };
    }
    get input() {
      var e, t;
      return null !== (t = null === (e = this.slottedInputs) || void 0 === e ? void 0 : e[0]) && void 0 !== t ? t : null;
    }
    render() {
      const e = {
        "mdc-form-field--align-end": this.alignEnd,
        "mdc-form-field--space-between": this.spaceBetween,
        "mdc-form-field--nowrap": this.nowrap,
      };
      return me`
      <div class="mdc-form-field ${rt(e)}">
        <slot></slot>
        <label class="mdc-label"
               @click="${this._labelClick}">${this.label}</label>
      </div>`;
    }
    click() {
      this._labelClick();
    }
    _labelClick() {
      const e = this.input;
      e && (e.focus(), e.click());
    }
  }
  r([y({ type: Boolean })], Lt.prototype, "alignEnd", void 0),
    r([y({ type: Boolean })], Lt.prototype, "spaceBetween", void 0),
    r([y({ type: Boolean })], Lt.prototype, "nowrap", void 0),
    r(
      [
        y({ type: String }),
        Ot(async function (e) {
          var t;
          null === (t = this.input) || void 0 === t || t.setAttribute("aria-label", e);
        }),
      ],
      Lt.prototype,
      "label",
      void 0
    ),
    r([T(".mdc-form-field")], Lt.prototype, "mdcRoot", void 0),
    r([S("", !0, "*")], Lt.prototype, "slottedInputs", void 0),
    r([T("label")], Lt.prototype, "labelEl", void 0);
  const Ft = P`.mdc-form-field{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));display:inline-flex;align-items:center;vertical-align:middle}.mdc-form-field>label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0;order:0}[dir=rtl] .mdc-form-field>label,.mdc-form-field>label[dir=rtl]{margin-left:auto;margin-right:0}[dir=rtl] .mdc-form-field>label,.mdc-form-field>label[dir=rtl]{padding-left:0;padding-right:4px}.mdc-form-field--nowrap>label{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.mdc-form-field--align-end>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px;order:-1}[dir=rtl] .mdc-form-field--align-end>label,.mdc-form-field--align-end>label[dir=rtl]{margin-left:0;margin-right:auto}[dir=rtl] .mdc-form-field--align-end>label,.mdc-form-field--align-end>label[dir=rtl]{padding-left:4px;padding-right:0}.mdc-form-field--space-between{justify-content:space-between}.mdc-form-field--space-between>label{margin:0}[dir=rtl] .mdc-form-field--space-between>label,.mdc-form-field--space-between>label[dir=rtl]{margin:0}:host{display:inline-flex}.mdc-form-field{width:100%}::slotted(*){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}::slotted(mwc-switch){margin-right:10px}[dir=rtl] ::slotted(mwc-switch),::slotted(mwc-switch[dir=rtl]){margin-left:10px}`;
  let Dt = class extends Lt {};
  (Dt.styles = [Ft]), (Dt = r([_("mwc-formfield")], Dt));
  class Pt extends Fe {
    constructor() {
      super(...arguments),
        (this.disabled = !1),
        (this.icon = ""),
        (this.shouldRenderRipple = !1),
        (this.rippleHandlers = new st(() => ((this.shouldRenderRipple = !0), this.ripple)));
    }
    renderRipple() {
      return this.shouldRenderRipple
        ? me`
            <mwc-ripple
                .disabled="${this.disabled}"
                unbounded>
            </mwc-ripple>`
        : "";
    }
    focus() {
      const e = this.buttonElement;
      e && (this.rippleHandlers.startFocus(), e.focus());
    }
    blur() {
      const e = this.buttonElement;
      e && (this.rippleHandlers.endFocus(), e.blur());
    }
    render() {
      return me`<button
        class="mdc-icon-button mdc-icon-button--display-flex"
        aria-label="${this.ariaLabel || this.icon}"
        aria-haspopup="${lt(this.ariaHasPopup)}"
        ?disabled="${this.disabled}"
        @focus="${this.handleRippleFocus}"
        @blur="${this.handleRippleBlur}"
        @mousedown="${this.handleRippleMouseDown}"
        @mouseenter="${this.handleRippleMouseEnter}"
        @mouseleave="${this.handleRippleMouseLeave}"
        @touchstart="${this.handleRippleTouchStart}"
        @touchend="${this.handleRippleDeactivate}"
        @touchcancel="${this.handleRippleDeactivate}"
    >${this.renderRipple()}
    ${this.icon ? me`<i class="material-icons">${this.icon}</i>` : ""}
    <span
      ><slot></slot
    ></span>
  </button>`;
    }
    handleRippleMouseDown(e) {
      const t = () => {
        window.removeEventListener("mouseup", t), this.handleRippleDeactivate();
      };
      window.addEventListener("mouseup", t), this.rippleHandlers.startPress(e);
    }
    handleRippleTouchStart(e) {
      this.rippleHandlers.startPress(e);
    }
    handleRippleDeactivate() {
      this.rippleHandlers.endPress();
    }
    handleRippleMouseEnter() {
      this.rippleHandlers.startHover();
    }
    handleRippleMouseLeave() {
      this.rippleHandlers.endHover();
    }
    handleRippleFocus() {
      this.rippleHandlers.startFocus();
    }
    handleRippleBlur() {
      this.rippleHandlers.endFocus();
    }
  }
  r([y({ type: Boolean, reflect: !0 })], Pt.prototype, "disabled", void 0),
    r([y({ type: String })], Pt.prototype, "icon", void 0),
    r([ct, y({ type: String, attribute: "aria-label" })], Pt.prototype, "ariaLabel", void 0),
    r([ct, y({ type: String, attribute: "aria-haspopup" })], Pt.prototype, "ariaHasPopup", void 0),
    r([T("button")], Pt.prototype, "buttonElement", void 0),
    r([A("mwc-ripple")], Pt.prototype, "ripple", void 0),
    r([w()], Pt.prototype, "shouldRenderRipple", void 0),
    r([k({ passive: !0 })], Pt.prototype, "handleRippleMouseDown", null),
    r([k({ passive: !0 })], Pt.prototype, "handleRippleTouchStart", null);
  const Nt = P`.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}.mdc-icon-button{font-size:24px;width:48px;height:48px;padding:12px}.mdc-icon-button .mdc-icon-button__focus-ring{display:none}.mdc-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{display:block;max-height:48px;max-width:48px}@media screen and (forced-colors: active){.mdc-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{pointer-events:none;border:2px solid transparent;border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:100%;width:100%}}@media screen and (forced-colors: active)and (forced-colors: active){.mdc-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{border-color:CanvasText}}@media screen and (forced-colors: active){.mdc-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring::after,.mdc-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring::after{content:"";border:2px solid transparent;border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px)}}@media screen and (forced-colors: active)and (forced-colors: active){.mdc-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring::after,.mdc-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring::after{border-color:CanvasText}}.mdc-icon-button.mdc-icon-button--reduced-size .mdc-icon-button__ripple{width:40px;height:40px;margin-top:4px;margin-bottom:4px;margin-right:4px;margin-left:4px}.mdc-icon-button.mdc-icon-button--reduced-size.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-icon-button.mdc-icon-button--reduced-size:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{max-height:40px;max-width:40px}.mdc-icon-button .mdc-icon-button__touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}.mdc-icon-button:disabled{color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-disabled-on-light, rgba(0, 0, 0, 0.38))}.mdc-icon-button svg,.mdc-icon-button img{width:24px;height:24px}.mdc-icon-button{display:inline-block;position:relative;box-sizing:border-box;border:none;outline:none;background-color:transparent;fill:currentColor;color:inherit;text-decoration:none;cursor:pointer;user-select:none;z-index:0;overflow:visible}.mdc-icon-button .mdc-icon-button__touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}.mdc-icon-button:disabled{cursor:default;pointer-events:none}.mdc-icon-button--display-flex{align-items:center;display:inline-flex;justify-content:center}.mdc-icon-button__icon{display:inline-block}.mdc-icon-button__icon.mdc-icon-button__icon--on{display:none}.mdc-icon-button--on .mdc-icon-button__icon{display:none}.mdc-icon-button--on .mdc-icon-button__icon.mdc-icon-button__icon--on{display:inline-block}.mdc-icon-button__link{height:100%;left:0;outline:none;position:absolute;top:0;width:100%}.mdc-icon-button{display:inline-block;position:relative;box-sizing:border-box;border:none;outline:none;background-color:transparent;fill:currentColor;color:inherit;text-decoration:none;cursor:pointer;user-select:none;z-index:0;overflow:visible}.mdc-icon-button .mdc-icon-button__touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}.mdc-icon-button:disabled{cursor:default;pointer-events:none}.mdc-icon-button--display-flex{align-items:center;display:inline-flex;justify-content:center}.mdc-icon-button__icon{display:inline-block}.mdc-icon-button__icon.mdc-icon-button__icon--on{display:none}.mdc-icon-button--on .mdc-icon-button__icon{display:none}.mdc-icon-button--on .mdc-icon-button__icon.mdc-icon-button__icon--on{display:inline-block}.mdc-icon-button__link{height:100%;left:0;outline:none;position:absolute;top:0;width:100%}:host{display:inline-block;outline:none}:host([disabled]){pointer-events:none}.mdc-icon-button i,.mdc-icon-button svg,.mdc-icon-button img,.mdc-icon-button ::slotted(*){display:block}:host{--mdc-ripple-color: currentcolor;-webkit-tap-highlight-color:transparent}:host,.mdc-icon-button{vertical-align:top}.mdc-icon-button{width:var(--mdc-icon-button-size, 48px);height:var(--mdc-icon-button-size, 48px);padding:calc( (var(--mdc-icon-button-size, 48px) - var(--mdc-icon-size, 24px)) / 2 )}.mdc-icon-button i,.mdc-icon-button svg,.mdc-icon-button img,.mdc-icon-button ::slotted(*){display:block;width:var(--mdc-icon-size, 24px);height:var(--mdc-icon-size, 24px)}`;
  let $t = class extends Pt {};
  ($t.styles = [Nt]), ($t = r([_("mwc-icon-button")], $t));
  class Mt extends Fe {
    constructor() {
      super(...arguments),
        (this.indeterminate = !1),
        (this.progress = 0),
        (this.buffer = 1),
        (this.reverse = !1),
        (this.closed = !1),
        (this.stylePrimaryHalf = ""),
        (this.stylePrimaryFull = ""),
        (this.styleSecondaryQuarter = ""),
        (this.styleSecondaryHalf = ""),
        (this.styleSecondaryFull = ""),
        (this.animationReady = !0),
        (this.closedAnimationOff = !1),
        (this.resizeObserver = null);
    }
    connectedCallback() {
      super.connectedCallback(), this.rootEl && this.attachResizeObserver();
    }
    render() {
      const e = {
          "mdc-linear-progress--closed": this.closed,
          "mdc-linear-progress--closed-animation-off": this.closedAnimationOff,
          "mdc-linear-progress--indeterminate": this.indeterminate,
          "mdc-linear-progress--animation-ready": this.animationReady,
        },
        t = {
          "--mdc-linear-progress-primary-half": this.stylePrimaryHalf,
          "--mdc-linear-progress-primary-half-neg": "" !== this.stylePrimaryHalf ? `-${this.stylePrimaryHalf}` : "",
          "--mdc-linear-progress-primary-full": this.stylePrimaryFull,
          "--mdc-linear-progress-primary-full-neg": "" !== this.stylePrimaryFull ? `-${this.stylePrimaryFull}` : "",
          "--mdc-linear-progress-secondary-quarter": this.styleSecondaryQuarter,
          "--mdc-linear-progress-secondary-quarter-neg": "" !== this.styleSecondaryQuarter ? `-${this.styleSecondaryQuarter}` : "",
          "--mdc-linear-progress-secondary-half": this.styleSecondaryHalf,
          "--mdc-linear-progress-secondary-half-neg": "" !== this.styleSecondaryHalf ? `-${this.styleSecondaryHalf}` : "",
          "--mdc-linear-progress-secondary-full": this.styleSecondaryFull,
          "--mdc-linear-progress-secondary-full-neg": "" !== this.styleSecondaryFull ? `-${this.styleSecondaryFull}` : "",
        },
        i = { "flex-basis": this.indeterminate ? "100%" : 100 * this.buffer + "%" },
        r = { transform: this.indeterminate ? "scaleX(1)" : `scaleX(${this.progress})` };
      return me`
      <div
          role="progressbar"
          class="mdc-linear-progress ${rt(e)}"
          style="${nt(t)}"
          dir="${lt(this.reverse ? "rtl" : void 0)}"
          aria-label="${lt(this.ariaLabel)}"
          aria-valuemin="0"
          aria-valuemax="1"
          aria-valuenow="${lt(this.indeterminate ? void 0 : this.progress)}"
        @transitionend="${this.syncClosedState}">
        <div class="mdc-linear-progress__buffer">
          <div
            class="mdc-linear-progress__buffer-bar"
            style=${nt(i)}>
          </div>
          <div class="mdc-linear-progress__buffer-dots"></div>
        </div>
        <div
            class="mdc-linear-progress__bar mdc-linear-progress__primary-bar"
            style=${nt(r)}>
          <span class="mdc-linear-progress__bar-inner"></span>
        </div>
        <div class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">
          <span class="mdc-linear-progress__bar-inner"></span>
        </div>
      </div>`;
    }
    update(e) {
      !e.has("closed") || (this.closed && void 0 !== e.get("closed")) || this.syncClosedState(), super.update(e);
    }
    async firstUpdated(e) {
      super.firstUpdated(e), this.attachResizeObserver();
    }
    syncClosedState() {
      this.closedAnimationOff = this.closed;
    }
    updated(e) {
      !e.has("indeterminate") && e.has("reverse") && this.indeterminate && this.restartAnimation(),
        e.has("indeterminate") &&
          void 0 !== e.get("indeterminate") &&
          this.indeterminate &&
          window.ResizeObserver &&
          this.calculateAndSetAnimationDimensions(this.rootEl.offsetWidth),
        super.updated(e);
    }
    disconnectedCallback() {
      this.resizeObserver && (this.resizeObserver.disconnect(), (this.resizeObserver = null)), super.disconnectedCallback();
    }
    attachResizeObserver() {
      if (window.ResizeObserver)
        return (
          (this.resizeObserver = new window.ResizeObserver((e) => {
            if (this.indeterminate)
              for (const t of e)
                if (t.contentRect) {
                  const e = t.contentRect.width;
                  this.calculateAndSetAnimationDimensions(e);
                }
          })),
          void this.resizeObserver.observe(this.rootEl)
        );
      this.resizeObserver = null;
    }
    calculateAndSetAnimationDimensions(e) {
      const t = 0.8367142 * e,
        i = 2.00611057 * e,
        r = 0.37651913 * e,
        n = 0.84386165 * e,
        o = 1.60277782 * e;
      (this.stylePrimaryHalf = `${t}px`),
        (this.stylePrimaryFull = `${i}px`),
        (this.styleSecondaryQuarter = `${r}px`),
        (this.styleSecondaryHalf = `${n}px`),
        (this.styleSecondaryFull = `${o}px`),
        this.restartAnimation();
    }
    async restartAnimation() {
      (this.animationReady = !1),
        await this.updateComplete,
        await new Promise(requestAnimationFrame),
        (this.animationReady = !0),
        await this.updateComplete;
    }
    open() {
      this.closed = !1;
    }
    close() {
      this.closed = !0;
    }
  }
  r([T(".mdc-linear-progress")], Mt.prototype, "rootEl", void 0),
    r([y({ type: Boolean, reflect: !0 })], Mt.prototype, "indeterminate", void 0),
    r([y({ type: Number })], Mt.prototype, "progress", void 0),
    r([y({ type: Number })], Mt.prototype, "buffer", void 0),
    r([y({ type: Boolean, reflect: !0 })], Mt.prototype, "reverse", void 0),
    r([y({ type: Boolean, reflect: !0 })], Mt.prototype, "closed", void 0),
    r([ct, y({ attribute: "aria-label" })], Mt.prototype, "ariaLabel", void 0),
    r([w()], Mt.prototype, "stylePrimaryHalf", void 0),
    r([w()], Mt.prototype, "stylePrimaryFull", void 0),
    r([w()], Mt.prototype, "styleSecondaryQuarter", void 0),
    r([w()], Mt.prototype, "styleSecondaryHalf", void 0),
    r([w()], Mt.prototype, "styleSecondaryFull", void 0),
    r([w()], Mt.prototype, "animationReady", void 0),
    r([w()], Mt.prototype, "closedAnimationOff", void 0);
  const zt = P`@keyframes mdc-linear-progress-primary-indeterminate-translate{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(83.67142%);transform:translateX(var(--mdc-linear-progress-primary-half, 83.67142%))}100%{transform:translateX(200.611057%);transform:translateX(var(--mdc-linear-progress-primary-full, 200.611057%))}}@keyframes mdc-linear-progress-primary-indeterminate-scale{0%{transform:scaleX(0.08)}36.65%{animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);transform:scaleX(0.08)}69.15%{animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);transform:scaleX(0.661479)}100%{transform:scaleX(0.08)}}@keyframes mdc-linear-progress-secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(37.651913%);transform:translateX(var(--mdc-linear-progress-secondary-quarter, 37.651913%))}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(84.386165%);transform:translateX(var(--mdc-linear-progress-secondary-half, 84.386165%))}100%{transform:translateX(160.277782%);transform:translateX(var(--mdc-linear-progress-secondary-full, 160.277782%))}}@keyframes mdc-linear-progress-secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);transform:scaleX(0.08)}19.15%{animation-timing-function:cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);transform:scaleX(0.457104)}44.15%{animation-timing-function:cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);transform:scaleX(0.72796)}100%{transform:scaleX(0.08)}}@keyframes mdc-linear-progress-buffering{from{transform:rotate(180deg) translateX(-10px)}}@keyframes mdc-linear-progress-primary-indeterminate-translate-reverse{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(-83.67142%);transform:translateX(var(--mdc-linear-progress-primary-half-neg, -83.67142%))}100%{transform:translateX(-200.611057%);transform:translateX(var(--mdc-linear-progress-primary-full-neg, -200.611057%))}}@keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(-37.651913%);transform:translateX(var(--mdc-linear-progress-secondary-quarter-neg, -37.651913%))}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(-84.386165%);transform:translateX(var(--mdc-linear-progress-secondary-half-neg, -84.386165%))}100%{transform:translateX(-160.277782%);transform:translateX(var(--mdc-linear-progress-secondary-full-neg, -160.277782%))}}@keyframes mdc-linear-progress-buffering-reverse{from{transform:translateX(-10px)}}.mdc-linear-progress{position:relative;width:100%;transform:translateZ(0);outline:1px solid transparent;overflow:hidden;transition:opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}@media screen and (forced-colors: active){.mdc-linear-progress{outline-color:CanvasText}}.mdc-linear-progress__bar{position:absolute;width:100%;height:100%;animation:none;transform-origin:top left;transition:transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-linear-progress__bar-inner{display:inline-block;position:absolute;width:100%;animation:none;border-top-style:solid}.mdc-linear-progress__buffer{display:flex;position:absolute;width:100%;height:100%}.mdc-linear-progress__buffer-dots{background-repeat:repeat-x;flex:auto;transform:rotate(180deg);animation:mdc-linear-progress-buffering 250ms infinite linear}.mdc-linear-progress__buffer-bar{flex:0 1 100%;transition:flex-basis 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-linear-progress__primary-bar{transform:scaleX(0)}.mdc-linear-progress__secondary-bar{display:none}.mdc-linear-progress--indeterminate .mdc-linear-progress__bar{transition:none}.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar{left:-145.166611%}.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar{left:-54.888891%;display:block}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar{animation:mdc-linear-progress-primary-indeterminate-translate 2s infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar>.mdc-linear-progress__bar-inner{animation:mdc-linear-progress-primary-indeterminate-scale 2s infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar{animation:mdc-linear-progress-secondary-indeterminate-translate 2s infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar>.mdc-linear-progress__bar-inner{animation:mdc-linear-progress-secondary-indeterminate-scale 2s infinite linear}[dir=rtl] .mdc-linear-progress:not([dir=ltr]) .mdc-linear-progress__bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]) .mdc-linear-progress__bar{right:0;-webkit-transform-origin:center right;transform-origin:center right}[dir=rtl] .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar{animation-name:mdc-linear-progress-primary-indeterminate-translate-reverse}[dir=rtl] .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar{animation-name:mdc-linear-progress-secondary-indeterminate-translate-reverse}[dir=rtl] .mdc-linear-progress:not([dir=ltr]) .mdc-linear-progress__buffer-dots,.mdc-linear-progress[dir=rtl]:not([dir=ltr]) .mdc-linear-progress__buffer-dots{animation:mdc-linear-progress-buffering-reverse 250ms infinite linear;transform:rotate(0)}[dir=rtl] .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar{right:-145.166611%;left:auto}[dir=rtl] .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar{right:-54.888891%;left:auto}.mdc-linear-progress--closed{opacity:0}.mdc-linear-progress--closed-animation-off .mdc-linear-progress__buffer-dots{animation:none}.mdc-linear-progress--closed-animation-off.mdc-linear-progress--indeterminate .mdc-linear-progress__bar,.mdc-linear-progress--closed-animation-off.mdc-linear-progress--indeterminate .mdc-linear-progress__bar .mdc-linear-progress__bar-inner{animation:none}.mdc-linear-progress__bar-inner{border-color:#6200ee;border-color:var(--mdc-theme-primary, #6200ee)}.mdc-linear-progress__buffer-dots{background-image:url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='none slice'%3E%3Ccircle cx='1' cy='1' r='1' fill='%23e6e6e6'/%3E%3C/svg%3E")}.mdc-linear-progress__buffer-bar{background-color:#e6e6e6}.mdc-linear-progress{height:4px}.mdc-linear-progress__bar-inner{border-top-width:4px}.mdc-linear-progress__buffer-dots{background-size:10px 4px}:host{display:block}.mdc-linear-progress__buffer-bar{background-color:#e6e6e6;background-color:var(--mdc-linear-progress-buffer-color, #e6e6e6)}.mdc-linear-progress__buffer-dots{background-image:url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='none slice'%3E%3Ccircle cx='1' cy='1' r='1' fill='%23e6e6e6'/%3E%3C/svg%3E");background-image:var(--mdc-linear-progress-buffering-dots-image, url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='none slice'%3E%3Ccircle cx='1' cy='1' r='1' fill='%23e6e6e6'/%3E%3C/svg%3E"))}`;
  let Ht = class extends Mt {};
  (Ht.styles = [zt]), (Ht = r([_("mwc-linear-progress")], Ht));
  const Bt = Symbol("selection controller");
  class Vt {
    constructor() {
      (this.selected = null), (this.ordered = null), (this.set = new Set());
    }
  }
  class Ut {
    constructor(e) {
      (this.sets = {}),
        (this.focusedSet = null),
        (this.mouseIsDown = !1),
        (this.updating = !1),
        e.addEventListener("keydown", (e) => {
          this.keyDownHandler(e);
        }),
        e.addEventListener("mousedown", () => {
          this.mousedownHandler();
        }),
        e.addEventListener("mouseup", () => {
          this.mouseupHandler();
        });
    }
    static getController(e) {
      const t = !("global" in e) || ("global" in e && e.global) ? document : e.getRootNode();
      let i = t[Bt];
      return void 0 === i && ((i = new Ut(t)), (t[Bt] = i)), i;
    }
    keyDownHandler(e) {
      const t = e.target;
      "checked" in t &&
        this.has(t) &&
        ("ArrowRight" == e.key || "ArrowDown" == e.key ? this.selectNext(t) : ("ArrowLeft" != e.key && "ArrowUp" != e.key) || this.selectPrevious(t));
    }
    mousedownHandler() {
      this.mouseIsDown = !0;
    }
    mouseupHandler() {
      this.mouseIsDown = !1;
    }
    has(e) {
      return this.getSet(e.name).set.has(e);
    }
    selectPrevious(e) {
      const t = this.getOrdered(e),
        i = t.indexOf(e),
        r = t[i - 1] || t[t.length - 1];
      return this.select(r), r;
    }
    selectNext(e) {
      const t = this.getOrdered(e),
        i = t.indexOf(e),
        r = t[i + 1] || t[0];
      return this.select(r), r;
    }
    select(e) {
      e.click();
    }
    focus(e) {
      if (this.mouseIsDown) return;
      const t = this.getSet(e.name),
        i = this.focusedSet;
      (this.focusedSet = t), i != t && t.selected && t.selected != e && t.selected.focus();
    }
    isAnySelected(e) {
      const t = this.getSet(e.name);
      for (const e of t.set) if (e.checked) return !0;
      return !1;
    }
    getOrdered(e) {
      const t = this.getSet(e.name);
      return (
        t.ordered ||
          ((t.ordered = Array.from(t.set)), t.ordered.sort((e, t) => (e.compareDocumentPosition(t) == Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0))),
        t.ordered
      );
    }
    getSet(e) {
      return this.sets[e] || (this.sets[e] = new Vt()), this.sets[e];
    }
    register(e) {
      const t = e.name || e.getAttribute("name") || "",
        i = this.getSet(t);
      i.set.add(e), (i.ordered = null);
    }
    unregister(e) {
      const t = this.getSet(e.name);
      t.set.delete(e), (t.ordered = null), t.selected == e && (t.selected = null);
    }
    update(e) {
      if (this.updating) return;
      this.updating = !0;
      const t = this.getSet(e.name);
      if (e.checked) {
        for (const i of t.set) i != e && (i.checked = !1);
        t.selected = e;
      }
      if (this.isAnySelected(e))
        for (const e of t.set) {
          if (void 0 === e.formElementTabIndex) break;
          e.formElementTabIndex = e.checked ? 0 : -1;
        }
      this.updating = !1;
    }
  }
  var jt = (function () {
      function e(e) {
        void 0 === e && (e = {}), (this.adapter = e);
      }
      return (
        Object.defineProperty(e, "cssClasses", {
          get: function () {
            return {};
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e, "strings", {
          get: function () {
            return {};
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e, "numbers", {
          get: function () {
            return {};
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e, "defaultAdapter", {
          get: function () {
            return {};
          },
          enumerable: !1,
          configurable: !0,
        }),
        (e.prototype.init = function () {}),
        (e.prototype.destroy = function () {}),
        e
      );
    })(),
    Xt = { NATIVE_CONTROL_SELECTOR: ".mdc-radio__native-control" },
    Wt = { DISABLED: "mdc-radio--disabled", ROOT: "mdc-radio" };
  const Gt = (function (e) {
    function r(t) {
      return e.call(this, i(i({}, r.defaultAdapter), t)) || this;
    }
    return (
      t(r, e),
      Object.defineProperty(r, "cssClasses", {
        get: function () {
          return Wt;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(r, "strings", {
        get: function () {
          return Xt;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(r, "defaultAdapter", {
        get: function () {
          return { addClass: function () {}, removeClass: function () {}, setNativeControlDisabled: function () {} };
        },
        enumerable: !1,
        configurable: !0,
      }),
      (r.prototype.setDisabled = function (e) {
        var t = r.cssClasses.DISABLED;
        this.adapter.setNativeControlDisabled(e), e ? this.adapter.addClass(t) : this.adapter.removeClass(t);
      }),
      r
    );
  })(jt);
  class Yt extends Et {
    constructor() {
      super(...arguments),
        (this._checked = !1),
        (this.useStateLayerCustomProperties = !1),
        (this.global = !1),
        (this.disabled = !1),
        (this.value = "on"),
        (this.name = ""),
        (this.reducedTouchTarget = !1),
        (this.mdcFoundationClass = Gt),
        (this.formElementTabIndex = 0),
        (this.focused = !1),
        (this.shouldRenderRipple = !1),
        (this.rippleElement = null),
        (this.rippleHandlers = new st(
          () => (
            (this.shouldRenderRipple = !0),
            this.ripple.then((e) => {
              this.rippleElement = e;
            }),
            this.ripple
          )
        ));
    }
    get checked() {
      return this._checked;
    }
    set checked(e) {
      var t, i;
      const r = this._checked;
      e !== r &&
        ((this._checked = e),
        this.formElement && (this.formElement.checked = e),
        null === (t = this._selectionController) || void 0 === t || t.update(this),
        !1 === e && (null === (i = this.formElement) || void 0 === i || i.blur()),
        this.requestUpdate("checked", r),
        this.dispatchEvent(new Event("checked", { bubbles: !0, composed: !0 })));
    }
    _handleUpdatedValue(e) {
      this.formElement.value = e;
    }
    renderRipple() {
      return this.shouldRenderRipple
        ? me`<mwc-ripple unbounded accent
        .internalUseStateLayerCustomProperties="${this.useStateLayerCustomProperties}"
        .disabled="${this.disabled}"></mwc-ripple>`
        : "";
    }
    get isRippleActive() {
      var e;
      return (null === (e = this.rippleElement) || void 0 === e ? void 0 : e.isActive) || !1;
    }
    connectedCallback() {
      super.connectedCallback(),
        (this._selectionController = Ut.getController(this)),
        this._selectionController.register(this),
        this._selectionController.update(this);
    }
    disconnectedCallback() {
      this._selectionController.unregister(this), (this._selectionController = void 0);
    }
    focus() {
      this.formElement.focus();
    }
    createAdapter() {
      return Object.assign(Object.assign({}, ze(this.mdcRoot)), {
        setNativeControlDisabled: (e) => {
          this.formElement.disabled = e;
        },
      });
    }
    handleFocus() {
      (this.focused = !0), this.handleRippleFocus();
    }
    handleClick() {
      this.formElement.focus();
    }
    handleBlur() {
      (this.focused = !1), this.formElement.blur(), this.rippleHandlers.endFocus();
    }
    setFormData(e) {
      this.name && this.checked && e.append(this.name, this.value);
    }
    render() {
      const e = {
        "mdc-radio--touch": !this.reducedTouchTarget,
        "mdc-ripple-upgraded--background-focused": this.focused,
        "mdc-radio--disabled": this.disabled,
      };
      return me`
      <div class="mdc-radio ${rt(e)}">
        <input
          tabindex="${this.formElementTabIndex}"
          class="mdc-radio__native-control"
          type="radio"
          name="${this.name}"
          aria-label="${lt(this.ariaLabel)}"
          aria-labelledby="${lt(this.ariaLabelledBy)}"
          .checked="${this.checked}"
          .value="${this.value}"
          ?disabled="${this.disabled}"
          @change="${this.changeHandler}"
          @focus="${this.handleFocus}"
          @click="${this.handleClick}"
          @blur="${this.handleBlur}"
          @mousedown="${this.handleRippleMouseDown}"
          @mouseenter="${this.handleRippleMouseEnter}"
          @mouseleave="${this.handleRippleMouseLeave}"
          @touchstart="${this.handleRippleTouchStart}"
          @touchend="${this.handleRippleDeactivate}"
          @touchcancel="${this.handleRippleDeactivate}">
        <div class="mdc-radio__background">
          <div class="mdc-radio__outer-circle"></div>
          <div class="mdc-radio__inner-circle"></div>
        </div>
        ${this.renderRipple()}
      </div>`;
    }
    handleRippleMouseDown(e) {
      const t = () => {
        window.removeEventListener("mouseup", t), this.handleRippleDeactivate();
      };
      window.addEventListener("mouseup", t), this.rippleHandlers.startPress(e);
    }
    handleRippleTouchStart(e) {
      this.rippleHandlers.startPress(e);
    }
    handleRippleDeactivate() {
      this.rippleHandlers.endPress();
    }
    handleRippleMouseEnter() {
      this.rippleHandlers.startHover();
    }
    handleRippleMouseLeave() {
      this.rippleHandlers.endHover();
    }
    handleRippleFocus() {
      this.rippleHandlers.startFocus();
    }
    changeHandler() {
      this.checked = this.formElement.checked;
    }
  }
  r([T(".mdc-radio")], Yt.prototype, "mdcRoot", void 0),
    r([T("input")], Yt.prototype, "formElement", void 0),
    r([w()], Yt.prototype, "useStateLayerCustomProperties", void 0),
    r([y({ type: Boolean })], Yt.prototype, "global", void 0),
    r([y({ type: Boolean, reflect: !0 })], Yt.prototype, "checked", null),
    r(
      [
        y({ type: Boolean }),
        Ot(function (e) {
          this.mdcFoundation.setDisabled(e);
        }),
      ],
      Yt.prototype,
      "disabled",
      void 0
    ),
    r(
      [
        y({ type: String }),
        Ot(function (e) {
          this._handleUpdatedValue(e);
        }),
      ],
      Yt.prototype,
      "value",
      void 0
    ),
    r([y({ type: String })], Yt.prototype, "name", void 0),
    r([y({ type: Boolean })], Yt.prototype, "reducedTouchTarget", void 0),
    r([y({ type: Number })], Yt.prototype, "formElementTabIndex", void 0),
    r([w()], Yt.prototype, "focused", void 0),
    r([w()], Yt.prototype, "shouldRenderRipple", void 0),
    r([A("mwc-ripple")], Yt.prototype, "ripple", void 0),
    r([ct, y({ attribute: "aria-label" })], Yt.prototype, "ariaLabel", void 0),
    r([ct, y({ attribute: "aria-labelledby" })], Yt.prototype, "ariaLabelledBy", void 0),
    r([k({ passive: !0 })], Yt.prototype, "handleRippleTouchStart", null);
  const Kt = P`.mdc-touch-target-wrapper{display:inline}.mdc-radio{padding:calc((40px - 20px) / 2)}.mdc-radio .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:rgba(0, 0, 0, 0.54)}.mdc-radio .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:#018786;border-color:var(--mdc-theme-secondary, #018786)}.mdc-radio .mdc-radio__native-control:enabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:#018786;border-color:var(--mdc-theme-secondary, #018786)}.mdc-radio [aria-disabled=true] .mdc-radio__native-control:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio .mdc-radio__native-control:disabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:rgba(0, 0, 0, 0.38)}.mdc-radio [aria-disabled=true] .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio .mdc-radio__native-control:disabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:rgba(0, 0, 0, 0.38)}.mdc-radio [aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__inner-circle,.mdc-radio .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:rgba(0, 0, 0, 0.38)}.mdc-radio .mdc-radio__background::before{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-radio .mdc-radio__background::before{top:calc(-1 * (40px - 20px) / 2);left:calc(-1 * (40px - 20px) / 2);width:40px;height:40px}.mdc-radio .mdc-radio__native-control{top:calc((40px - 40px) / 2);right:calc((40px - 40px) / 2);left:calc((40px - 40px) / 2);width:40px;height:40px}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-radio.mdc-radio--disabled [aria-disabled=true] .mdc-radio__native-control:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio.mdc-radio--disabled .mdc-radio__native-control:disabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:GrayText}.mdc-radio.mdc-radio--disabled [aria-disabled=true] .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio.mdc-radio--disabled .mdc-radio__native-control:disabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:GrayText}.mdc-radio.mdc-radio--disabled [aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__inner-circle,.mdc-radio.mdc-radio--disabled .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:GrayText}}.mdc-radio{display:inline-block;position:relative;flex:0 0 auto;box-sizing:content-box;width:20px;height:20px;cursor:pointer;will-change:opacity,transform,border-color,color}.mdc-radio__background{display:inline-block;position:relative;box-sizing:border-box;width:20px;height:20px}.mdc-radio__background::before{position:absolute;transform:scale(0, 0);border-radius:50%;opacity:0;pointer-events:none;content:"";transition:opacity 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-radio__outer-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;border-width:2px;border-style:solid;border-radius:50%;transition:border-color 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-radio__inner-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;transform:scale(0, 0);border-width:10px;border-style:solid;border-radius:50%;transition:transform 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1),border-color 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-radio__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit;z-index:1}.mdc-radio--touch{margin-top:4px;margin-bottom:4px;margin-right:4px;margin-left:4px}.mdc-radio--touch .mdc-radio__native-control{top:calc((40px - 48px) / 2);right:calc((40px - 48px) / 2);left:calc((40px - 48px) / 2);width:48px;height:48px}.mdc-radio.mdc-ripple-upgraded--background-focused .mdc-radio__focus-ring,.mdc-radio:not(.mdc-ripple-upgraded):focus .mdc-radio__focus-ring{pointer-events:none;border:2px solid transparent;border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:100%;width:100%}@media screen and (forced-colors: active){.mdc-radio.mdc-ripple-upgraded--background-focused .mdc-radio__focus-ring,.mdc-radio:not(.mdc-ripple-upgraded):focus .mdc-radio__focus-ring{border-color:CanvasText}}.mdc-radio.mdc-ripple-upgraded--background-focused .mdc-radio__focus-ring::after,.mdc-radio:not(.mdc-ripple-upgraded):focus .mdc-radio__focus-ring::after{content:"";border:2px solid transparent;border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px)}@media screen and (forced-colors: active){.mdc-radio.mdc-ripple-upgraded--background-focused .mdc-radio__focus-ring::after,.mdc-radio:not(.mdc-ripple-upgraded):focus .mdc-radio__focus-ring::after{border-color:CanvasText}}.mdc-radio__native-control:checked+.mdc-radio__background,.mdc-radio__native-control:disabled+.mdc-radio__background{transition:opacity 120ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__outer-circle{transition:border-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__inner-circle,.mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{transition:transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1),border-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio--disabled{cursor:default;pointer-events:none}.mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__inner-circle{transform:scale(0.5);transition:transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1),border-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio__native-control:disabled+.mdc-radio__background,[aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background{cursor:default}.mdc-radio__native-control:focus+.mdc-radio__background::before{transform:scale(1);opacity:.12;transition:opacity 120ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}:host{display:inline-block;outline:none}.mdc-radio{vertical-align:bottom}.mdc-radio .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-unchecked-color, rgba(0, 0, 0, 0.54))}.mdc-radio [aria-disabled=true] .mdc-radio__native-control:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio .mdc-radio__native-control:disabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-color, rgba(0, 0, 0, 0.38))}.mdc-radio [aria-disabled=true] .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio .mdc-radio__native-control:disabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-color, rgba(0, 0, 0, 0.38))}.mdc-radio [aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__inner-circle,.mdc-radio .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:var(--mdc-radio-disabled-color, rgba(0, 0, 0, 0.38))}`;
  let qt = class extends Yt {};
  (qt.styles = [Kt]), (qt = r([_("mwc-radio")], qt));
  var Qt = (function () {
      function e(e) {
        void 0 === e && (e = {}), (this.adapter = e);
      }
      return (
        Object.defineProperty(e, "cssClasses", {
          get: function () {
            return {};
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e, "strings", {
          get: function () {
            return {};
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e, "numbers", {
          get: function () {
            return {};
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e, "defaultAdapter", {
          get: function () {
            return {};
          },
          enumerable: !1,
          configurable: !0,
        }),
        (e.prototype.init = function () {}),
        (e.prototype.destroy = function () {}),
        e
      );
    })(),
    Zt = { NOTCH_ELEMENT_SELECTOR: ".mdc-notched-outline__notch" },
    Jt = { NOTCH_ELEMENT_PADDING: 8 },
    ei = {
      NO_LABEL: "mdc-notched-outline--no-label",
      OUTLINE_NOTCHED: "mdc-notched-outline--notched",
      OUTLINE_UPGRADED: "mdc-notched-outline--upgraded",
    },
    ti = (function (e) {
      function r(t) {
        return e.call(this, i(i({}, r.defaultAdapter), t)) || this;
      }
      return (
        t(r, e),
        Object.defineProperty(r, "strings", {
          get: function () {
            return Zt;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(r, "cssClasses", {
          get: function () {
            return ei;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(r, "numbers", {
          get: function () {
            return Jt;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(r, "defaultAdapter", {
          get: function () {
            return {
              addClass: function () {},
              removeClass: function () {},
              setNotchWidthProperty: function () {},
              removeNotchWidthProperty: function () {},
            };
          },
          enumerable: !1,
          configurable: !0,
        }),
        (r.prototype.notch = function (e) {
          var t = r.cssClasses.OUTLINE_NOTCHED;
          e > 0 && (e += Jt.NOTCH_ELEMENT_PADDING), this.adapter.setNotchWidthProperty(e), this.adapter.addClass(t);
        }),
        (r.prototype.closeNotch = function () {
          var e = r.cssClasses.OUTLINE_NOTCHED;
          this.adapter.removeClass(e), this.adapter.removeNotchWidthProperty();
        }),
        r
      );
    })(Qt);
  class ii extends Xe {
    constructor() {
      super(...arguments), (this.mdcFoundationClass = ti), (this.width = 0), (this.open = !1), (this.lastOpen = this.open);
    }
    createAdapter() {
      return {
        addClass: (e) => this.mdcRoot.classList.add(e),
        removeClass: (e) => this.mdcRoot.classList.remove(e),
        setNotchWidthProperty: (e) => this.notchElement.style.setProperty("width", `${e}px`),
        removeNotchWidthProperty: () => this.notchElement.style.removeProperty("width"),
      };
    }
    openOrClose(e, t) {
      this.mdcFoundation && (e && void 0 !== t ? this.mdcFoundation.notch(t) : this.mdcFoundation.closeNotch());
    }
    render() {
      this.openOrClose(this.open, this.width);
      const e = rt({ "mdc-notched-outline--notched": this.open });
      return me`
      <span class="mdc-notched-outline ${e}">
        <span class="mdc-notched-outline__leading"></span>
        <span class="mdc-notched-outline__notch">
          <slot></slot>
        </span>
        <span class="mdc-notched-outline__trailing"></span>
      </span>`;
    }
  }
  r([T(".mdc-notched-outline")], ii.prototype, "mdcRoot", void 0),
    r([y({ type: Number })], ii.prototype, "width", void 0),
    r([y({ type: Boolean, reflect: !0 })], ii.prototype, "open", void 0),
    r([T(".mdc-notched-outline__notch")], ii.prototype, "notchElement", void 0);
  const ri = P`.mdc-notched-outline{display:flex;position:absolute;top:0;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] .mdc-notched-outline,.mdc-notched-outline[dir=rtl]{text-align:right}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{box-sizing:border-box;height:100%;border-top:1px solid;border-bottom:1px solid;pointer-events:none}.mdc-notched-outline__leading{border-left:1px solid;border-right:none;width:12px}[dir=rtl] .mdc-notched-outline__leading,.mdc-notched-outline__leading[dir=rtl]{border-left:none;border-right:1px solid}.mdc-notched-outline__trailing{border-left:none;border-right:1px solid;flex-grow:1}[dir=rtl] .mdc-notched-outline__trailing,.mdc-notched-outline__trailing[dir=rtl]{border-left:1px solid;border-right:none}.mdc-notched-outline__notch{flex:0 0 auto;width:auto;max-width:calc(100% - 12px * 2)}.mdc-notched-outline .mdc-floating-label{display:inline-block;position:relative;max-width:100%}.mdc-notched-outline .mdc-floating-label--float-above{text-overflow:clip}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:calc(100% / 0.75)}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:0;padding-right:8px;border-top:none}[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch,.mdc-notched-outline--notched .mdc-notched-outline__notch[dir=rtl]{padding-left:8px;padding-right:0}.mdc-notched-outline--no-label .mdc-notched-outline__notch{display:none}:host{display:block;position:absolute;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] :host,:host([dir=rtl]){text-align:right}::slotted(.mdc-floating-label){display:inline-block;position:relative;top:17px;bottom:auto;max-width:100%}::slotted(.mdc-floating-label--float-above){text-overflow:clip}.mdc-notched-outline--upgraded ::slotted(.mdc-floating-label--float-above){max-width:calc(100% / 0.75)}.mdc-notched-outline .mdc-notched-outline__leading{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}[dir=rtl] .mdc-notched-outline .mdc-notched-outline__leading,.mdc-notched-outline .mdc-notched-outline__leading[dir=rtl]{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}@supports(top: max(0%)){.mdc-notched-outline .mdc-notched-outline__leading{width:max(12px, var(--mdc-shape-small, 4px))}}@supports(top: max(0%)){.mdc-notched-outline .mdc-notched-outline__notch{max-width:calc(100% - max(12px, var(--mdc-shape-small, 4px)) * 2)}}.mdc-notched-outline .mdc-notched-outline__trailing{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}[dir=rtl] .mdc-notched-outline .mdc-notched-outline__trailing,.mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl]{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{border-color:var(--mdc-notched-outline-border-color, var(--mdc-theme-primary, #6200ee));border-width:1px;border-width:var(--mdc-notched-outline-stroke-width, 1px)}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:0;padding-top:var(--mdc-notched-outline-notch-offset, 0)}`;
  let ni = class extends ii {};
  (ni.styles = [ri]), (ni = r([_("mwc-notched-outline")], ni));
  class oi extends Fe {
    constructor() {
      super(...arguments),
        (this.value = ""),
        (this.group = null),
        (this.tabindex = -1),
        (this.disabled = !1),
        (this.twoline = !1),
        (this.activated = !1),
        (this.graphic = null),
        (this.multipleGraphics = !1),
        (this.hasMeta = !1),
        (this.noninteractive = !1),
        (this.selected = !1),
        (this.shouldRenderRipple = !1),
        (this._managingList = null),
        (this.boundOnClick = this.onClick.bind(this)),
        (this._firstChanged = !0),
        (this._skipPropRequest = !1),
        (this.rippleHandlers = new st(() => ((this.shouldRenderRipple = !0), this.ripple))),
        (this.listeners = [
          {
            target: this,
            eventNames: ["click"],
            cb: () => {
              this.onClick();
            },
          },
          { target: this, eventNames: ["mouseenter"], cb: this.rippleHandlers.startHover },
          { target: this, eventNames: ["mouseleave"], cb: this.rippleHandlers.endHover },
          { target: this, eventNames: ["focus"], cb: this.rippleHandlers.startFocus },
          { target: this, eventNames: ["blur"], cb: this.rippleHandlers.endFocus },
          {
            target: this,
            eventNames: ["mousedown", "touchstart"],
            cb: (e) => {
              const t = e.type;
              this.onDown("mousedown" === t ? "mouseup" : "touchend", e);
            },
          },
        ]);
    }
    get text() {
      const e = this.textContent;
      return e ? e.trim() : "";
    }
    render() {
      const e = this.renderText(),
        t = this.graphic ? this.renderGraphic() : me``,
        i = this.hasMeta ? this.renderMeta() : me``;
      return me`
      ${this.renderRipple()}
      ${t}
      ${e}
      ${i}`;
    }
    renderRipple() {
      return this.shouldRenderRipple
        ? me`
      <mwc-ripple
        .activated=${this.activated}>
      </mwc-ripple>`
        : this.activated
        ? me`<div class="fake-activated-ripple"></div>`
        : "";
    }
    renderGraphic() {
      const e = { multi: this.multipleGraphics };
      return me`
      <span class="mdc-deprecated-list-item__graphic material-icons ${rt(e)}">
        <slot name="graphic"></slot>
      </span>`;
    }
    renderMeta() {
      return me`
      <span class="mdc-deprecated-list-item__meta material-icons">
        <slot name="meta"></slot>
      </span>`;
    }
    renderText() {
      const e = this.twoline ? this.renderTwoline() : this.renderSingleLine();
      return me`
      <span class="mdc-deprecated-list-item__text">
        ${e}
      </span>`;
    }
    renderSingleLine() {
      return me`<slot></slot>`;
    }
    renderTwoline() {
      return me`
      <span class="mdc-deprecated-list-item__primary-text">
        <slot></slot>
      </span>
      <span class="mdc-deprecated-list-item__secondary-text">
        <slot name="secondary"></slot>
      </span>
    `;
    }
    onClick() {
      this.fireRequestSelected(!this.selected, "interaction");
    }
    onDown(e, t) {
      const i = () => {
        window.removeEventListener(e, i), this.rippleHandlers.endPress();
      };
      window.addEventListener(e, i), this.rippleHandlers.startPress(t);
    }
    fireRequestSelected(e, t) {
      if (this.noninteractive) return;
      const i = new CustomEvent("request-selected", { bubbles: !0, composed: !0, detail: { source: t, selected: e } });
      this.dispatchEvent(i);
    }
    connectedCallback() {
      super.connectedCallback(), this.noninteractive || this.setAttribute("mwc-list-item", "");
      for (const e of this.listeners) for (const t of e.eventNames) e.target.addEventListener(t, e.cb, { passive: !0 });
    }
    disconnectedCallback() {
      super.disconnectedCallback();
      for (const e of this.listeners) for (const t of e.eventNames) e.target.removeEventListener(t, e.cb);
      this._managingList && (this._managingList.debouncedLayout ? this._managingList.debouncedLayout(!0) : this._managingList.layout(!0));
    }
    firstUpdated() {
      const e = new Event("list-item-rendered", { bubbles: !0, composed: !0 });
      this.dispatchEvent(e);
    }
  }
  r([T("slot")], oi.prototype, "slotElement", void 0),
    r([A("mwc-ripple")], oi.prototype, "ripple", void 0),
    r([y({ type: String })], oi.prototype, "value", void 0),
    r([y({ type: String, reflect: !0 })], oi.prototype, "group", void 0),
    r([y({ type: Number, reflect: !0 })], oi.prototype, "tabindex", void 0),
    r(
      [
        y({ type: Boolean, reflect: !0 }),
        Ot(function (e) {
          e ? this.setAttribute("aria-disabled", "true") : this.setAttribute("aria-disabled", "false");
        }),
      ],
      oi.prototype,
      "disabled",
      void 0
    ),
    r([y({ type: Boolean, reflect: !0 })], oi.prototype, "twoline", void 0),
    r([y({ type: Boolean, reflect: !0 })], oi.prototype, "activated", void 0),
    r([y({ type: String, reflect: !0 })], oi.prototype, "graphic", void 0),
    r([y({ type: Boolean })], oi.prototype, "multipleGraphics", void 0),
    r([y({ type: Boolean })], oi.prototype, "hasMeta", void 0),
    r(
      [
        y({ type: Boolean, reflect: !0 }),
        Ot(function (e) {
          e
            ? (this.removeAttribute("aria-checked"),
              this.removeAttribute("mwc-list-item"),
              (this.selected = !1),
              (this.activated = !1),
              (this.tabIndex = -1))
            : this.setAttribute("mwc-list-item", "");
        }),
      ],
      oi.prototype,
      "noninteractive",
      void 0
    ),
    r(
      [
        y({ type: Boolean, reflect: !0 }),
        Ot(function (e) {
          const t = this.getAttribute("role"),
            i = "gridcell" === t || "option" === t || "row" === t || "tab" === t;
          i && e ? this.setAttribute("aria-selected", "true") : i && this.setAttribute("aria-selected", "false"),
            this._firstChanged ? (this._firstChanged = !1) : this._skipPropRequest || this.fireRequestSelected(e, "property");
        }),
      ],
      oi.prototype,
      "selected",
      void 0
    ),
    r([w()], oi.prototype, "shouldRenderRipple", void 0),
    r([w()], oi.prototype, "_managingList", void 0);
  const ai = P`:host{cursor:pointer;user-select:none;-webkit-tap-highlight-color:transparent;height:48px;display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;padding-left:var(--mdc-list-side-padding, 16px);padding-right:var(--mdc-list-side-padding, 16px);outline:none;height:48px;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host:focus{outline:none}:host([activated]){color:#6200ee;color:var(--mdc-theme-primary, #6200ee);--mdc-ripple-color: var( --mdc-theme-primary, #6200ee )}:host([activated]) .mdc-deprecated-list-item__graphic{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host([activated]) .fake-activated-ripple::before{position:absolute;display:block;top:0;bottom:0;left:0;right:0;width:100%;height:100%;pointer-events:none;z-index:1;content:"";opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12);background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-deprecated-list-item__graphic{flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;display:inline-flex}.mdc-deprecated-list-item__graphic ::slotted(*){flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;width:100%;height:100%;text-align:center}.mdc-deprecated-list-item__meta{width:var(--mdc-list-item-meta-size, 24px);height:var(--mdc-list-item-meta-size, 24px);margin-left:auto;margin-right:0;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-item__meta.multi{width:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:var(--mdc-list-item-meta-size, 24px);line-height:var(--mdc-list-item-meta-size, 24px)}.mdc-deprecated-list-item__meta ::slotted(.material-icons),.mdc-deprecated-list-item__meta ::slotted(mwc-icon){line-height:var(--mdc-list-item-meta-size, 24px) !important}.mdc-deprecated-list-item__meta ::slotted(:not(.material-icons):not(mwc-icon)){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit)}[dir=rtl] .mdc-deprecated-list-item__meta,.mdc-deprecated-list-item__meta[dir=rtl]{margin-left:0;margin-right:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:100%;height:100%}.mdc-deprecated-list-item__text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mdc-deprecated-list-item__text ::slotted([for]),.mdc-deprecated-list-item__text[for]{pointer-events:none}.mdc-deprecated-list-item__primary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;margin-bottom:-20px;display:block}.mdc-deprecated-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-deprecated-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-deprecated-list-item__secondary-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;display:block}.mdc-deprecated-list-item__secondary-text::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-deprecated-list--dense .mdc-deprecated-list-item__secondary-text{font-size:inherit}* ::slotted(a),a{color:inherit;text-decoration:none}:host([twoline]){height:72px}:host([twoline]) .mdc-deprecated-list-item__text{align-self:flex-start}:host([disabled]),:host([noninteractive]){cursor:default;pointer-events:none}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*){opacity:.38}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__primary-text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__secondary-text ::slotted(*){color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-deprecated-list-item__secondary-text ::slotted(*){color:rgba(0, 0, 0, 0.54);color:var(--mdc-theme-text-secondary-on-background, rgba(0, 0, 0, 0.54))}.mdc-deprecated-list-item__graphic ::slotted(*){background-color:transparent;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-icon-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-group__subheader ::slotted(*){color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 40px);height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 40px);line-height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 40px) !important}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){border-radius:50%}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic,:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic,:host([graphic=control]) .mdc-deprecated-list-item__graphic{margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 16px)}[dir=rtl] :host([graphic=avatar]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=medium]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=large]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=control]) .mdc-deprecated-list-item__graphic,:host([graphic=avatar]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=medium]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=large]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=control]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 16px);margin-right:0}:host([graphic=icon]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 24px);height:var(--mdc-list-item-graphic-size, 24px);margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 32px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 24px);line-height:var(--mdc-list-item-graphic-size, 24px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 24px) !important}[dir=rtl] :host([graphic=icon]) .mdc-deprecated-list-item__graphic,:host([graphic=icon]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 32px);margin-right:0}:host([graphic=avatar]:not([twoLine])),:host([graphic=icon]:not([twoLine])){height:56px}:host([graphic=medium]:not([twoLine])),:host([graphic=large]:not([twoLine])){height:72px}:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 56px);height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic.multi,:host([graphic=large]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(*),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 56px);line-height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 56px) !important}:host([graphic=large]){padding-left:0px}`;
  let di = class extends oi {};
  (di.styles = [ai]), (di = r([_("mwc-list-item")], di));
  var ci = (function () {
      function e(e) {
        void 0 === e && (e = {}), (this.adapter = e);
      }
      return (
        Object.defineProperty(e, "cssClasses", {
          get: function () {
            return {};
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e, "strings", {
          get: function () {
            return {};
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e, "numbers", {
          get: function () {
            return {};
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e, "defaultAdapter", {
          get: function () {
            return {};
          },
          enumerable: !1,
          configurable: !0,
        }),
        (e.prototype.init = function () {}),
        (e.prototype.destroy = function () {}),
        e
      );
    })(),
    si = {
      UNKNOWN: "Unknown",
      BACKSPACE: "Backspace",
      ENTER: "Enter",
      SPACEBAR: "Spacebar",
      PAGE_UP: "PageUp",
      PAGE_DOWN: "PageDown",
      END: "End",
      HOME: "Home",
      ARROW_LEFT: "ArrowLeft",
      ARROW_UP: "ArrowUp",
      ARROW_RIGHT: "ArrowRight",
      ARROW_DOWN: "ArrowDown",
      DELETE: "Delete",
      ESCAPE: "Escape",
      TAB: "Tab",
    },
    li = new Set();
  li.add(si.BACKSPACE),
    li.add(si.ENTER),
    li.add(si.SPACEBAR),
    li.add(si.PAGE_UP),
    li.add(si.PAGE_DOWN),
    li.add(si.END),
    li.add(si.HOME),
    li.add(si.ARROW_LEFT),
    li.add(si.ARROW_UP),
    li.add(si.ARROW_RIGHT),
    li.add(si.ARROW_DOWN),
    li.add(si.DELETE),
    li.add(si.ESCAPE),
    li.add(si.TAB);
  var pi = new Map();
  pi.set(8, si.BACKSPACE),
    pi.set(13, si.ENTER),
    pi.set(32, si.SPACEBAR),
    pi.set(33, si.PAGE_UP),
    pi.set(34, si.PAGE_DOWN),
    pi.set(35, si.END),
    pi.set(36, si.HOME),
    pi.set(37, si.ARROW_LEFT),
    pi.set(38, si.ARROW_UP),
    pi.set(39, si.ARROW_RIGHT),
    pi.set(40, si.ARROW_DOWN),
    pi.set(46, si.DELETE),
    pi.set(27, si.ESCAPE),
    pi.set(9, si.TAB);
  var mi,
    hi,
    ui = new Set();
  function fi(e) {
    var t = e.key;
    return li.has(t) ? t : pi.get(e.keyCode) || si.UNKNOWN;
  }
  ui.add(si.PAGE_UP),
    ui.add(si.PAGE_DOWN),
    ui.add(si.END),
    ui.add(si.HOME),
    ui.add(si.ARROW_LEFT),
    ui.add(si.ARROW_UP),
    ui.add(si.ARROW_RIGHT),
    ui.add(si.ARROW_DOWN);
  var bi = "mdc-list-item--activated",
    gi = "mdc-list-item",
    vi = "mdc-list-item--disabled",
    _i = "mdc-list-item--selected",
    xi = "mdc-list-item__primary-text",
    yi = "mdc-list",
    wi =
      (((mi = {})["" + bi] = "mdc-list-item--activated"),
      (mi["" + gi] = "mdc-list-item"),
      (mi["" + vi] = "mdc-list-item--disabled"),
      (mi["" + _i] = "mdc-list-item--selected"),
      (mi["" + xi] = "mdc-list-item__primary-text"),
      (mi["" + yi] = "mdc-list"),
      ((hi = {})["" + bi] = "mdc-deprecated-list-item--activated"),
      (hi["" + gi] = "mdc-deprecated-list-item"),
      (hi["" + vi] = "mdc-deprecated-list-item--disabled"),
      (hi["" + _i] = "mdc-deprecated-list-item--selected"),
      (hi["mdc-list-item__text"] = "mdc-deprecated-list-item__text"),
      (hi["" + xi] = "mdc-deprecated-list-item__primary-text"),
      (hi["" + yi] = "mdc-deprecated-list"),
      hi),
    Ei = {
      ACTION_EVENT: "MDCList:action",
      SELECTION_CHANGE_EVENT: "MDCList:selectionChange",
      ARIA_CHECKED: "aria-checked",
      ARIA_CHECKED_CHECKBOX_SELECTOR: '[role="checkbox"][aria-checked="true"]',
      ARIA_CHECKED_RADIO_SELECTOR: '[role="radio"][aria-checked="true"]',
      ARIA_CURRENT: "aria-current",
      ARIA_DISABLED: "aria-disabled",
      ARIA_ORIENTATION: "aria-orientation",
      ARIA_ORIENTATION_HORIZONTAL: "horizontal",
      ARIA_ROLE_CHECKBOX_SELECTOR: '[role="checkbox"]',
      ARIA_SELECTED: "aria-selected",
      ARIA_INTERACTIVE_ROLES_SELECTOR: '[role="listbox"], [role="menu"]',
      ARIA_MULTI_SELECTABLE_SELECTOR: '[aria-multiselectable="true"]',
      CHECKBOX_RADIO_SELECTOR: 'input[type="checkbox"], input[type="radio"]',
      CHECKBOX_SELECTOR: 'input[type="checkbox"]',
      CHILD_ELEMENTS_TO_TOGGLE_TABINDEX:
        "\n    ." + gi + " button:not(:disabled),\n    ." + gi + " a,\n    ." + wi[gi] + " button:not(:disabled),\n    ." + wi[gi] + " a\n  ",
      DEPRECATED_SELECTOR: ".mdc-deprecated-list",
      FOCUSABLE_CHILD_ELEMENTS:
        "\n    ." +
        gi +
        " button:not(:disabled),\n    ." +
        gi +
        " a,\n    ." +
        gi +
        ' input[type="radio"]:not(:disabled),\n    .' +
        gi +
        ' input[type="checkbox"]:not(:disabled),\n    .' +
        wi[gi] +
        " button:not(:disabled),\n    ." +
        wi[gi] +
        " a,\n    ." +
        wi[gi] +
        ' input[type="radio"]:not(:disabled),\n    .' +
        wi[gi] +
        ' input[type="checkbox"]:not(:disabled)\n  ',
      RADIO_SELECTOR: 'input[type="radio"]',
      SELECTED_ITEM_SELECTOR: '[aria-selected="true"], [aria-current="true"]',
    },
    ki = { UNSET_INDEX: -1, TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS: 300 };
  const Ti = (e, t) => e - t,
    Ai = ["input", "button", "textarea", "select"];
  function Ii(e) {
    return e instanceof Set;
  }
  const Ci = (e) => {
    const t = e === ki.UNSET_INDEX ? new Set() : e;
    return Ii(t) ? new Set(t) : new Set([t]);
  };
  class Si extends ci {
    constructor(e) {
      super(Object.assign(Object.assign({}, Si.defaultAdapter), e)),
        (this.isMulti_ = !1),
        (this.wrapFocus_ = !1),
        (this.isVertical_ = !0),
        (this.selectedIndex_ = ki.UNSET_INDEX),
        (this.focusedItemIndex_ = ki.UNSET_INDEX),
        (this.useActivatedClass_ = !1),
        (this.ariaCurrentAttrValue_ = null);
    }
    static get strings() {
      return Ei;
    }
    static get numbers() {
      return ki;
    }
    static get defaultAdapter() {
      return {
        focusItemAtIndex: () => {},
        getFocusedElementIndex: () => 0,
        getListItemCount: () => 0,
        isFocusInsideList: () => !1,
        isRootFocused: () => !1,
        notifyAction: () => {},
        notifySelected: () => {},
        getSelectedStateForElementIndex: () => !1,
        setDisabledStateForElementIndex: () => {},
        getDisabledStateForElementIndex: () => !1,
        setSelectedStateForElementIndex: () => {},
        setActivatedStateForElementIndex: () => {},
        setTabIndexForElementIndex: () => {},
        setAttributeForElementIndex: () => {},
        getAttributeForElementIndex: () => null,
      };
    }
    setWrapFocus(e) {
      this.wrapFocus_ = e;
    }
    setMulti(e) {
      this.isMulti_ = e;
      const t = this.selectedIndex_;
      if (e) {
        if (!Ii(t)) {
          const e = t === ki.UNSET_INDEX;
          this.selectedIndex_ = e ? new Set() : new Set([t]);
        }
      } else if (Ii(t))
        if (t.size) {
          const e = Array.from(t).sort(Ti);
          this.selectedIndex_ = e[0];
        } else this.selectedIndex_ = ki.UNSET_INDEX;
    }
    setVerticalOrientation(e) {
      this.isVertical_ = e;
    }
    setUseActivatedClass(e) {
      this.useActivatedClass_ = e;
    }
    getSelectedIndex() {
      return this.selectedIndex_;
    }
    setSelectedIndex(e) {
      this.isIndexValid_(e) && (this.isMulti_ ? this.setMultiSelectionAtIndex_(Ci(e)) : this.setSingleSelectionAtIndex_(e));
    }
    handleFocusIn(e, t) {
      t >= 0 && this.adapter.setTabIndexForElementIndex(t, 0);
    }
    handleFocusOut(e, t) {
      t >= 0 && this.adapter.setTabIndexForElementIndex(t, -1),
        setTimeout(() => {
          this.adapter.isFocusInsideList() || this.setTabindexToFirstSelectedItem_();
        }, 0);
    }
    handleKeydown(e, t, i) {
      const r = "ArrowLeft" === fi(e),
        n = "ArrowUp" === fi(e),
        o = "ArrowRight" === fi(e),
        a = "ArrowDown" === fi(e),
        d = "Home" === fi(e),
        c = "End" === fi(e),
        s = "Enter" === fi(e),
        l = "Spacebar" === fi(e);
      if (this.adapter.isRootFocused())
        return void (n || c ? (e.preventDefault(), this.focusLastElement()) : (a || d) && (e.preventDefault(), this.focusFirstElement()));
      let p,
        m = this.adapter.getFocusedElementIndex();
      if (!(-1 === m && ((m = i), m < 0))) {
        if ((this.isVertical_ && a) || (!this.isVertical_ && o)) this.preventDefaultEvent(e), (p = this.focusNextElement(m));
        else if ((this.isVertical_ && n) || (!this.isVertical_ && r)) this.preventDefaultEvent(e), (p = this.focusPrevElement(m));
        else if (d) this.preventDefaultEvent(e), (p = this.focusFirstElement());
        else if (c) this.preventDefaultEvent(e), (p = this.focusLastElement());
        else if ((s || l) && t) {
          const t = e.target;
          if (t && "A" === t.tagName && s) return;
          this.preventDefaultEvent(e), this.setSelectedIndexOnAction_(m, !0);
        }
        (this.focusedItemIndex_ = m), void 0 !== p && (this.setTabindexAtIndex_(p), (this.focusedItemIndex_ = p));
      }
    }
    handleSingleSelection(e, t, i) {
      e !== ki.UNSET_INDEX && (this.setSelectedIndexOnAction_(e, t, i), this.setTabindexAtIndex_(e), (this.focusedItemIndex_ = e));
    }
    focusNextElement(e) {
      let t = e + 1;
      if (t >= this.adapter.getListItemCount()) {
        if (!this.wrapFocus_) return e;
        t = 0;
      }
      return this.adapter.focusItemAtIndex(t), t;
    }
    focusPrevElement(e) {
      let t = e - 1;
      if (t < 0) {
        if (!this.wrapFocus_) return e;
        t = this.adapter.getListItemCount() - 1;
      }
      return this.adapter.focusItemAtIndex(t), t;
    }
    focusFirstElement() {
      return this.adapter.focusItemAtIndex(0), 0;
    }
    focusLastElement() {
      const e = this.adapter.getListItemCount() - 1;
      return this.adapter.focusItemAtIndex(e), e;
    }
    setEnabled(e, t) {
      this.isIndexValid_(e) && this.adapter.setDisabledStateForElementIndex(e, !t);
    }
    preventDefaultEvent(e) {
      const t = `${e.target.tagName}`.toLowerCase();
      -1 === Ai.indexOf(t) && e.preventDefault();
    }
    setSingleSelectionAtIndex_(e, t = !0) {
      this.selectedIndex_ !== e &&
        (this.selectedIndex_ !== ki.UNSET_INDEX &&
          (this.adapter.setSelectedStateForElementIndex(this.selectedIndex_, !1),
          this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(this.selectedIndex_, !1)),
        t && this.adapter.setSelectedStateForElementIndex(e, !0),
        this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(e, !0),
        this.setAriaForSingleSelectionAtIndex_(e),
        (this.selectedIndex_ = e),
        this.adapter.notifySelected(e));
    }
    setMultiSelectionAtIndex_(e, t = !0) {
      const i = ((e, t) => {
        const i = Array.from(e),
          r = Array.from(t),
          n = { added: [], removed: [] },
          o = i.sort(Ti),
          a = r.sort(Ti);
        let d = 0,
          c = 0;
        for (; d < o.length || c < a.length; ) {
          const e = o[d],
            t = a[c];
          e !== t
            ? void 0 !== e && (void 0 === t || e < t)
              ? (n.removed.push(e), d++)
              : void 0 !== t && (void 0 === e || t < e) && (n.added.push(t), c++)
            : (d++, c++);
        }
        return n;
      })(Ci(this.selectedIndex_), e);
      if (i.removed.length || i.added.length) {
        for (const e of i.removed)
          t && this.adapter.setSelectedStateForElementIndex(e, !1), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(e, !1);
        for (const e of i.added)
          t && this.adapter.setSelectedStateForElementIndex(e, !0), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(e, !0);
        (this.selectedIndex_ = e), this.adapter.notifySelected(e, i);
      }
    }
    setAriaForSingleSelectionAtIndex_(e) {
      this.selectedIndex_ === ki.UNSET_INDEX && (this.ariaCurrentAttrValue_ = this.adapter.getAttributeForElementIndex(e, Ei.ARIA_CURRENT));
      const t = null !== this.ariaCurrentAttrValue_,
        i = t ? Ei.ARIA_CURRENT : Ei.ARIA_SELECTED;
      this.selectedIndex_ !== ki.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex_, i, "false");
      const r = t ? this.ariaCurrentAttrValue_ : "true";
      this.adapter.setAttributeForElementIndex(e, i, r);
    }
    setTabindexAtIndex_(e) {
      this.focusedItemIndex_ === ki.UNSET_INDEX && 0 !== e
        ? this.adapter.setTabIndexForElementIndex(0, -1)
        : this.focusedItemIndex_ >= 0 && this.focusedItemIndex_ !== e && this.adapter.setTabIndexForElementIndex(this.focusedItemIndex_, -1),
        this.adapter.setTabIndexForElementIndex(e, 0);
    }
    setTabindexToFirstSelectedItem_() {
      let e = 0;
      "number" == typeof this.selectedIndex_ && this.selectedIndex_ !== ki.UNSET_INDEX
        ? (e = this.selectedIndex_)
        : Ii(this.selectedIndex_) && this.selectedIndex_.size > 0 && (e = Math.min(...this.selectedIndex_)),
        this.setTabindexAtIndex_(e);
    }
    isIndexValid_(e) {
      if (e instanceof Set) {
        if (!this.isMulti_) throw new Error("MDCListFoundation: Array of index is only supported for checkbox based list");
        if (0 === e.size) return !0;
        {
          let t = !1;
          for (const i of e) if (((t = this.isIndexInRange_(i)), t)) break;
          return t;
        }
      }
      if ("number" == typeof e) {
        if (this.isMulti_) throw new Error("MDCListFoundation: Expected array of index for checkbox based list but got number: " + e);
        return e === ki.UNSET_INDEX || this.isIndexInRange_(e);
      }
      return !1;
    }
    isIndexInRange_(e) {
      const t = this.adapter.getListItemCount();
      return e >= 0 && e < t;
    }
    setSelectedIndexOnAction_(e, t, i) {
      if (this.adapter.getDisabledStateForElementIndex(e)) return;
      let r = e;
      this.isMulti_ && (r = new Set([e])),
        this.isIndexValid_(r) &&
          (this.isMulti_
            ? this.toggleMultiAtIndex(e, i, t)
            : t || i
            ? this.setSingleSelectionAtIndex_(e, t)
            : this.selectedIndex_ === e && this.setSingleSelectionAtIndex_(ki.UNSET_INDEX),
          t && this.adapter.notifyAction(e));
    }
    toggleMultiAtIndex(e, t, i = !0) {
      let r = !1;
      r = void 0 === t ? !this.adapter.getSelectedStateForElementIndex(e) : t;
      const n = Ci(this.selectedIndex_);
      r ? n.add(e) : n.delete(e), this.setMultiSelectionAtIndex_(n, i);
    }
  }
  const Ri = Si,
    Oi = (e) => e.hasAttribute("mwc-list-item");
  function Li() {
    const e = this.itemsReadyResolver;
    (this.itemsReady = new Promise((e) => (this.itemsReadyResolver = e))), e();
  }
  class Fi extends Xe {
    constructor() {
      super(),
        (this.mdcAdapter = null),
        (this.mdcFoundationClass = Ri),
        (this.activatable = !1),
        (this.multi = !1),
        (this.wrapFocus = !1),
        (this.itemRoles = null),
        (this.innerRole = null),
        (this.innerAriaLabel = null),
        (this.rootTabbable = !1),
        (this.previousTabindex = null),
        (this.noninteractive = !1),
        (this.itemsReadyResolver = () => {}),
        (this.itemsReady = Promise.resolve([])),
        (this.items_ = []);
      const e = (function (e, t = 50) {
        let i;
        return function (r = !0) {
          clearTimeout(i),
            (i = setTimeout(() => {
              e(r);
            }, t));
        };
      })(this.layout.bind(this));
      this.debouncedLayout = (t = !0) => {
        Li.call(this), e(t);
      };
    }
    async getUpdateComplete() {
      const e = await super.getUpdateComplete();
      return await this.itemsReady, e;
    }
    get items() {
      return this.items_;
    }
    updateItems() {
      var e;
      const t = null !== (e = this.assignedElements) && void 0 !== e ? e : [],
        i = [];
      for (const e of t)
        Oi(e) && (i.push(e), (e._managingList = this)), e.hasAttribute("divider") && !e.hasAttribute("role") && e.setAttribute("role", "separator");
      this.items_ = i;
      const r = new Set();
      if (
        (this.items_.forEach((e, t) => {
          this.itemRoles ? e.setAttribute("role", this.itemRoles) : e.removeAttribute("role"), e.selected && r.add(t);
        }),
        this.multi)
      )
        this.select(r);
      else {
        const e = r.size ? r.entries().next().value[1] : -1;
        this.select(e);
      }
      const n = new Event("items-updated", { bubbles: !0, composed: !0 });
      this.dispatchEvent(n);
    }
    get selected() {
      const e = this.index;
      if (!Ii(e)) return -1 === e ? null : this.items[e];
      const t = [];
      for (const i of e) t.push(this.items[i]);
      return t;
    }
    get index() {
      return this.mdcFoundation ? this.mdcFoundation.getSelectedIndex() : -1;
    }
    render() {
      const e = null === this.innerRole ? void 0 : this.innerRole,
        t = null === this.innerAriaLabel ? void 0 : this.innerAriaLabel,
        i = this.rootTabbable ? "0" : "-1";
      return me`
      <!-- @ts-ignore -->
      <ul
          tabindex=${i}
          role="${lt(e)}"
          aria-label="${lt(t)}"
          class="mdc-deprecated-list"
          @keydown=${this.onKeydown}
          @focusin=${this.onFocusIn}
          @focusout=${this.onFocusOut}
          @request-selected=${this.onRequestSelected}
          @list-item-rendered=${this.onListItemConnected}>
        <slot></slot>
        ${this.renderPlaceholder()}
      </ul>
    `;
    }
    renderPlaceholder() {
      var e;
      const t = null !== (e = this.assignedElements) && void 0 !== e ? e : [];
      return void 0 !== this.emptyMessage && 0 === t.length
        ? me`
        <mwc-list-item noninteractive>${this.emptyMessage}</mwc-list-item>
      `
        : null;
    }
    firstUpdated() {
      super.firstUpdated(), this.items.length || (this.mdcFoundation.setMulti(this.multi), this.layout());
    }
    onFocusIn(e) {
      if (this.mdcFoundation && this.mdcRoot) {
        const t = this.getIndexOfTarget(e);
        this.mdcFoundation.handleFocusIn(e, t);
      }
    }
    onFocusOut(e) {
      if (this.mdcFoundation && this.mdcRoot) {
        const t = this.getIndexOfTarget(e);
        this.mdcFoundation.handleFocusOut(e, t);
      }
    }
    onKeydown(e) {
      if (this.mdcFoundation && this.mdcRoot) {
        const t = this.getIndexOfTarget(e),
          i = e.target,
          r = Oi(i);
        this.mdcFoundation.handleKeydown(e, r, t);
      }
    }
    onRequestSelected(e) {
      if (this.mdcFoundation) {
        let t = this.getIndexOfTarget(e);
        if (-1 === t && (this.layout(), (t = this.getIndexOfTarget(e)), -1 === t)) return;
        if (this.items[t].disabled) return;
        const i = e.detail.selected,
          r = e.detail.source;
        this.mdcFoundation.handleSingleSelection(t, "interaction" === r, i), e.stopPropagation();
      }
    }
    getIndexOfTarget(e) {
      const t = this.items,
        i = e.composedPath();
      for (const e of i) {
        let i = -1;
        if ((Me(e) && Oi(e) && (i = t.indexOf(e)), -1 !== i)) return i;
      }
      return -1;
    }
    createAdapter() {
      return (
        (this.mdcAdapter = {
          getListItemCount: () => (this.mdcRoot ? this.items.length : 0),
          getFocusedElementIndex: this.getFocusedItemIndex,
          getAttributeForElementIndex: (e, t) => {
            if (!this.mdcRoot) return "";
            const i = this.items[e];
            return i ? i.getAttribute(t) : "";
          },
          setAttributeForElementIndex: (e, t, i) => {
            if (!this.mdcRoot) return;
            const r = this.items[e];
            r && r.setAttribute(t, i);
          },
          focusItemAtIndex: (e) => {
            const t = this.items[e];
            t && t.focus();
          },
          setTabIndexForElementIndex: (e, t) => {
            const i = this.items[e];
            i && (i.tabindex = t);
          },
          notifyAction: (e) => {
            const t = { bubbles: !0, composed: !0 };
            t.detail = { index: e };
            const i = new CustomEvent("action", t);
            this.dispatchEvent(i);
          },
          notifySelected: (e, t) => {
            const i = { bubbles: !0, composed: !0 };
            i.detail = { index: e, diff: t };
            const r = new CustomEvent("selected", i);
            this.dispatchEvent(r);
          },
          isFocusInsideList: () => je(this),
          isRootFocused: () => {
            const e = this.mdcRoot;
            return e.getRootNode().activeElement === e;
          },
          setDisabledStateForElementIndex: (e, t) => {
            const i = this.items[e];
            i && (i.disabled = t);
          },
          getDisabledStateForElementIndex: (e) => {
            const t = this.items[e];
            return !!t && t.disabled;
          },
          setSelectedStateForElementIndex: (e, t) => {
            const i = this.items[e];
            i && (i.selected = t);
          },
          getSelectedStateForElementIndex: (e) => {
            const t = this.items[e];
            return !!t && t.selected;
          },
          setActivatedStateForElementIndex: (e, t) => {
            const i = this.items[e];
            i && (i.activated = t);
          },
        }),
        this.mdcAdapter
      );
    }
    selectUi(e, t = !1) {
      const i = this.items[e];
      i && ((i.selected = !0), (i.activated = t));
    }
    deselectUi(e) {
      const t = this.items[e];
      t && ((t.selected = !1), (t.activated = !1));
    }
    select(e) {
      this.mdcFoundation && this.mdcFoundation.setSelectedIndex(e);
    }
    toggle(e, t) {
      this.multi && this.mdcFoundation.toggleMultiAtIndex(e, t);
    }
    onListItemConnected(e) {
      const t = e.target;
      this.layout(-1 === this.items.indexOf(t));
    }
    layout(e = !0) {
      e && this.updateItems();
      const t = this.items[0];
      for (const e of this.items) e.tabindex = -1;
      t && (this.noninteractive ? this.previousTabindex || (this.previousTabindex = t) : (t.tabindex = 0)), this.itemsReadyResolver();
    }
    getFocusedItemIndex() {
      if (!this.mdcRoot) return -1;
      if (!this.items.length) return -1;
      const e = Ue();
      if (!e.length) return -1;
      for (let t = e.length - 1; t >= 0; t--) {
        const i = e[t];
        if (Oi(i)) return this.items.indexOf(i);
      }
      return -1;
    }
    focusItemAtIndex(e) {
      for (const e of this.items)
        if (0 === e.tabindex) {
          e.tabindex = -1;
          break;
        }
      (this.items[e].tabindex = 0), this.items[e].focus();
    }
    focus() {
      const e = this.mdcRoot;
      e && e.focus();
    }
    blur() {
      const e = this.mdcRoot;
      e && e.blur();
    }
  }
  r([y({ type: String })], Fi.prototype, "emptyMessage", void 0),
    r([T(".mdc-deprecated-list")], Fi.prototype, "mdcRoot", void 0),
    r([S("", !0, "*")], Fi.prototype, "assignedElements", void 0),
    r([S("", !0, '[tabindex="0"]')], Fi.prototype, "tabbableElements", void 0),
    r(
      [
        y({ type: Boolean }),
        Ot(function (e) {
          this.mdcFoundation && this.mdcFoundation.setUseActivatedClass(e);
        }),
      ],
      Fi.prototype,
      "activatable",
      void 0
    ),
    r(
      [
        y({ type: Boolean }),
        Ot(function (e, t) {
          this.mdcFoundation && this.mdcFoundation.setMulti(e), void 0 !== t && this.layout();
        }),
      ],
      Fi.prototype,
      "multi",
      void 0
    ),
    r(
      [
        y({ type: Boolean }),
        Ot(function (e) {
          this.mdcFoundation && this.mdcFoundation.setWrapFocus(e);
        }),
      ],
      Fi.prototype,
      "wrapFocus",
      void 0
    ),
    r(
      [
        y({ type: String }),
        Ot(function (e, t) {
          void 0 !== t && this.updateItems();
        }),
      ],
      Fi.prototype,
      "itemRoles",
      void 0
    ),
    r([y({ type: String })], Fi.prototype, "innerRole", void 0),
    r([y({ type: String })], Fi.prototype, "innerAriaLabel", void 0),
    r([y({ type: Boolean })], Fi.prototype, "rootTabbable", void 0),
    r(
      [
        y({ type: Boolean, reflect: !0 }),
        Ot(function (e) {
          var t, i;
          if (e) {
            const e = null !== (i = null === (t = this.tabbableElements) || void 0 === t ? void 0 : t[0]) && void 0 !== i ? i : null;
            (this.previousTabindex = e), e && e.setAttribute("tabindex", "-1");
          } else !e && this.previousTabindex && (this.previousTabindex.setAttribute("tabindex", "0"), (this.previousTabindex = null));
        }),
      ],
      Fi.prototype,
      "noninteractive",
      void 0
    );
  const Di = P`@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{display:block}.mdc-deprecated-list{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);line-height:1.75rem;line-height:var(--mdc-typography-subtitle1-line-height, 1.75rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);line-height:1.5rem;margin:0;padding:8px 0;list-style-type:none;color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));padding:var(--mdc-list-vertical-padding, 8px) 0}.mdc-deprecated-list:focus{outline:none}.mdc-deprecated-list-item{height:48px}.mdc-deprecated-list--dense{padding-top:4px;padding-bottom:4px;font-size:.812rem}.mdc-deprecated-list ::slotted([divider]){height:0;margin:0;border:none;border-bottom-width:1px;border-bottom-style:solid;border-bottom-color:rgba(0, 0, 0, 0.12)}.mdc-deprecated-list ::slotted([divider][padded]){margin:0 var(--mdc-list-side-padding, 16px)}.mdc-deprecated-list ::slotted([divider][inset]){margin-left:var(--mdc-list-inset-margin, 72px);margin-right:0;width:calc( 100% - var(--mdc-list-inset-margin, 72px) )}[dir=rtl] .mdc-deprecated-list ::slotted([divider][inset]),.mdc-deprecated-list ::slotted([divider][inset][dir=rtl]){margin-left:0;margin-right:var(--mdc-list-inset-margin, 72px)}.mdc-deprecated-list ::slotted([divider][inset][padded]){width:calc( 100% - var(--mdc-list-inset-margin, 72px) - var(--mdc-list-side-padding, 16px) )}.mdc-deprecated-list--dense ::slotted([mwc-list-item]){height:40px}.mdc-deprecated-list--dense ::slotted([mwc-list]){--mdc-list-item-graphic-size: 20px}.mdc-deprecated-list--two-line.mdc-deprecated-list--dense ::slotted([mwc-list-item]),.mdc-deprecated-list--avatar-list.mdc-deprecated-list--dense ::slotted([mwc-list-item]){height:60px}.mdc-deprecated-list--avatar-list.mdc-deprecated-list--dense ::slotted([mwc-list]){--mdc-list-item-graphic-size: 36px}:host([noninteractive]){pointer-events:none;cursor:default}.mdc-deprecated-list--dense ::slotted(.mdc-deprecated-list-item__primary-text){display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-deprecated-list--dense ::slotted(.mdc-deprecated-list-item__primary-text)::before{display:inline-block;width:0;height:24px;content:"";vertical-align:0}.mdc-deprecated-list--dense ::slotted(.mdc-deprecated-list-item__primary-text)::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}`;
  let Pi = class extends Fi {};
  (Pi.styles = [Di]), (Pi = r([_("mwc-list")], Pi));
  var Ni,
    $i,
    Mi = {
      ANCHOR: "mdc-menu-surface--anchor",
      ANIMATING_CLOSED: "mdc-menu-surface--animating-closed",
      ANIMATING_OPEN: "mdc-menu-surface--animating-open",
      FIXED: "mdc-menu-surface--fixed",
      IS_OPEN_BELOW: "mdc-menu-surface--is-open-below",
      OPEN: "mdc-menu-surface--open",
      ROOT: "mdc-menu-surface",
    },
    zi = {
      CLOSED_EVENT: "MDCMenuSurface:closed",
      CLOSING_EVENT: "MDCMenuSurface:closing",
      OPENED_EVENT: "MDCMenuSurface:opened",
      OPENING_EVENT: "MDCMenuSurface:opening",
      FOCUSABLE_ELEMENTS: [
        "button:not(:disabled)",
        '[href]:not([aria-disabled="true"])',
        "input:not(:disabled)",
        "select:not(:disabled)",
        "textarea:not(:disabled)",
        '[tabindex]:not([tabindex="-1"]):not([aria-disabled="true"])',
      ].join(", "),
    },
    Hi = {
      TRANSITION_OPEN_DURATION: 120,
      TRANSITION_CLOSE_DURATION: 75,
      MARGIN_TO_EDGE: 32,
      ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO: 0.67,
      TOUCH_EVENT_WAIT_MS: 30,
    };
  !(function (e) {
    (e[(e.BOTTOM = 1)] = "BOTTOM"), (e[(e.CENTER = 2)] = "CENTER"), (e[(e.RIGHT = 4)] = "RIGHT"), (e[(e.FLIP_RTL = 8)] = "FLIP_RTL");
  })(Ni || (Ni = {})),
    (function (e) {
      (e[(e.TOP_LEFT = 0)] = "TOP_LEFT"),
        (e[(e.TOP_RIGHT = 4)] = "TOP_RIGHT"),
        (e[(e.BOTTOM_LEFT = 1)] = "BOTTOM_LEFT"),
        (e[(e.BOTTOM_RIGHT = 5)] = "BOTTOM_RIGHT"),
        (e[(e.TOP_START = 8)] = "TOP_START"),
        (e[(e.TOP_END = 12)] = "TOP_END"),
        (e[(e.BOTTOM_START = 9)] = "BOTTOM_START"),
        (e[(e.BOTTOM_END = 13)] = "BOTTOM_END");
    })($i || ($i = {}));
  var Bi = (function () {
      function e(e) {
        void 0 === e && (e = {}), (this.adapter = e);
      }
      return (
        Object.defineProperty(e, "cssClasses", {
          get: function () {
            return {};
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e, "strings", {
          get: function () {
            return {};
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e, "numbers", {
          get: function () {
            return {};
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e, "defaultAdapter", {
          get: function () {
            return {};
          },
          enumerable: !1,
          configurable: !0,
        }),
        (e.prototype.init = function () {}),
        (e.prototype.destroy = function () {}),
        e
      );
    })(),
    Vi = (function (e) {
      function r(t) {
        var n = e.call(this, i(i({}, r.defaultAdapter), t)) || this;
        return (
          (n.isSurfaceOpen = !1),
          (n.isQuickOpen = !1),
          (n.isHoistedElement = !1),
          (n.isFixedPosition = !1),
          (n.isHorizontallyCenteredOnViewport = !1),
          (n.maxHeight = 0),
          (n.openBottomBias = 0),
          (n.openAnimationEndTimerId = 0),
          (n.closeAnimationEndTimerId = 0),
          (n.animationRequestId = 0),
          (n.anchorCorner = $i.TOP_START),
          (n.originCorner = $i.TOP_START),
          (n.anchorMargin = { top: 0, right: 0, bottom: 0, left: 0 }),
          (n.position = { x: 0, y: 0 }),
          n
        );
      }
      return (
        t(r, e),
        Object.defineProperty(r, "cssClasses", {
          get: function () {
            return Mi;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(r, "strings", {
          get: function () {
            return zi;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(r, "numbers", {
          get: function () {
            return Hi;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(r, "Corner", {
          get: function () {
            return $i;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(r, "defaultAdapter", {
          get: function () {
            return {
              addClass: function () {},
              removeClass: function () {},
              hasClass: function () {
                return !1;
              },
              hasAnchor: function () {
                return !1;
              },
              isElementInContainer: function () {
                return !1;
              },
              isFocused: function () {
                return !1;
              },
              isRtl: function () {
                return !1;
              },
              getInnerDimensions: function () {
                return { height: 0, width: 0 };
              },
              getAnchorDimensions: function () {
                return null;
              },
              getWindowDimensions: function () {
                return { height: 0, width: 0 };
              },
              getBodyDimensions: function () {
                return { height: 0, width: 0 };
              },
              getWindowScroll: function () {
                return { x: 0, y: 0 };
              },
              setPosition: function () {},
              setMaxHeight: function () {},
              setTransformOrigin: function () {},
              saveFocus: function () {},
              restoreFocus: function () {},
              notifyClose: function () {},
              notifyClosing: function () {},
              notifyOpen: function () {},
              notifyOpening: function () {},
            };
          },
          enumerable: !1,
          configurable: !0,
        }),
        (r.prototype.init = function () {
          var e = r.cssClasses,
            t = e.ROOT,
            i = e.OPEN;
          if (!this.adapter.hasClass(t)) throw new Error(t + " class required in root element.");
          this.adapter.hasClass(i) && (this.isSurfaceOpen = !0);
        }),
        (r.prototype.destroy = function () {
          clearTimeout(this.openAnimationEndTimerId), clearTimeout(this.closeAnimationEndTimerId), cancelAnimationFrame(this.animationRequestId);
        }),
        (r.prototype.setAnchorCorner = function (e) {
          this.anchorCorner = e;
        }),
        (r.prototype.flipCornerHorizontally = function () {
          this.originCorner = this.originCorner ^ Ni.RIGHT;
        }),
        (r.prototype.setAnchorMargin = function (e) {
          (this.anchorMargin.top = e.top || 0),
            (this.anchorMargin.right = e.right || 0),
            (this.anchorMargin.bottom = e.bottom || 0),
            (this.anchorMargin.left = e.left || 0);
        }),
        (r.prototype.setIsHoisted = function (e) {
          this.isHoistedElement = e;
        }),
        (r.prototype.setFixedPosition = function (e) {
          this.isFixedPosition = e;
        }),
        (r.prototype.isFixed = function () {
          return this.isFixedPosition;
        }),
        (r.prototype.setAbsolutePosition = function (e, t) {
          (this.position.x = this.isFinite(e) ? e : 0), (this.position.y = this.isFinite(t) ? t : 0);
        }),
        (r.prototype.setIsHorizontallyCenteredOnViewport = function (e) {
          this.isHorizontallyCenteredOnViewport = e;
        }),
        (r.prototype.setQuickOpen = function (e) {
          this.isQuickOpen = e;
        }),
        (r.prototype.setMaxHeight = function (e) {
          this.maxHeight = e;
        }),
        (r.prototype.setOpenBottomBias = function (e) {
          this.openBottomBias = e;
        }),
        (r.prototype.isOpen = function () {
          return this.isSurfaceOpen;
        }),
        (r.prototype.open = function () {
          var e = this;
          this.isSurfaceOpen ||
            (this.adapter.notifyOpening(),
            this.adapter.saveFocus(),
            this.isQuickOpen
              ? ((this.isSurfaceOpen = !0),
                this.adapter.addClass(r.cssClasses.OPEN),
                (this.dimensions = this.adapter.getInnerDimensions()),
                this.autoposition(),
                this.adapter.notifyOpen())
              : (this.adapter.addClass(r.cssClasses.ANIMATING_OPEN),
                (this.animationRequestId = requestAnimationFrame(function () {
                  (e.dimensions = e.adapter.getInnerDimensions()),
                    e.autoposition(),
                    e.adapter.addClass(r.cssClasses.OPEN),
                    (e.openAnimationEndTimerId = setTimeout(function () {
                      (e.openAnimationEndTimerId = 0), e.adapter.removeClass(r.cssClasses.ANIMATING_OPEN), e.adapter.notifyOpen();
                    }, Hi.TRANSITION_OPEN_DURATION));
                })),
                (this.isSurfaceOpen = !0)));
        }),
        (r.prototype.close = function (e) {
          var t = this;
          if ((void 0 === e && (e = !1), this.isSurfaceOpen)) {
            if ((this.adapter.notifyClosing(), this.isQuickOpen))
              return (
                (this.isSurfaceOpen = !1),
                e || this.maybeRestoreFocus(),
                this.adapter.removeClass(r.cssClasses.OPEN),
                this.adapter.removeClass(r.cssClasses.IS_OPEN_BELOW),
                void this.adapter.notifyClose()
              );
            this.adapter.addClass(r.cssClasses.ANIMATING_CLOSED),
              requestAnimationFrame(function () {
                t.adapter.removeClass(r.cssClasses.OPEN),
                  t.adapter.removeClass(r.cssClasses.IS_OPEN_BELOW),
                  (t.closeAnimationEndTimerId = setTimeout(function () {
                    (t.closeAnimationEndTimerId = 0), t.adapter.removeClass(r.cssClasses.ANIMATING_CLOSED), t.adapter.notifyClose();
                  }, Hi.TRANSITION_CLOSE_DURATION));
              }),
              (this.isSurfaceOpen = !1),
              e || this.maybeRestoreFocus();
          }
        }),
        (r.prototype.handleBodyClick = function (e) {
          var t = e.target;
          this.adapter.isElementInContainer(t) || this.close();
        }),
        (r.prototype.handleKeydown = function (e) {
          var t = e.keyCode;
          ("Escape" === e.key || 27 === t) && this.close();
        }),
        (r.prototype.autoposition = function () {
          var e;
          this.measurements = this.getAutoLayoutmeasurements();
          var t = this.getoriginCorner(),
            i = this.getMenuSurfaceMaxHeight(t),
            n = this.hasBit(t, Ni.BOTTOM) ? "bottom" : "top",
            o = this.hasBit(t, Ni.RIGHT) ? "right" : "left",
            a = this.getHorizontalOriginOffset(t),
            d = this.getVerticalOriginOffset(t),
            c = this.measurements,
            s = c.anchorSize,
            l = c.surfaceSize,
            p = (((e = {})[o] = a), (e[n] = d), e);
          s.width / l.width > Hi.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO && (o = "center"),
            (this.isHoistedElement || this.isFixedPosition) && this.adjustPositionForHoistedElement(p),
            this.adapter.setTransformOrigin(o + " " + n),
            this.adapter.setPosition(p),
            this.adapter.setMaxHeight(i ? i + "px" : ""),
            this.hasBit(t, Ni.BOTTOM) || this.adapter.addClass(r.cssClasses.IS_OPEN_BELOW);
        }),
        (r.prototype.getAutoLayoutmeasurements = function () {
          var e = this.adapter.getAnchorDimensions(),
            t = this.adapter.getBodyDimensions(),
            i = this.adapter.getWindowDimensions(),
            r = this.adapter.getWindowScroll();
          return (
            e || (e = { top: this.position.y, right: this.position.x, bottom: this.position.y, left: this.position.x, width: 0, height: 0 }),
            {
              anchorSize: e,
              bodySize: t,
              surfaceSize: this.dimensions,
              viewportDistance: { top: e.top, right: i.width - e.right, bottom: i.height - e.bottom, left: e.left },
              viewportSize: i,
              windowScroll: r,
            }
          );
        }),
        (r.prototype.getoriginCorner = function () {
          var e,
            t,
            i = this.originCorner,
            n = this.measurements,
            o = n.viewportDistance,
            a = n.anchorSize,
            d = n.surfaceSize,
            c = r.numbers.MARGIN_TO_EDGE;
          this.hasBit(this.anchorCorner, Ni.BOTTOM)
            ? ((e = o.top - c + this.anchorMargin.bottom), (t = o.bottom - c - this.anchorMargin.bottom))
            : ((e = o.top - c + this.anchorMargin.top), (t = o.bottom - c + a.height - this.anchorMargin.top)),
            !(t - d.height > 0) && e > t + this.openBottomBias && (i = this.setBit(i, Ni.BOTTOM));
          var s,
            l,
            p,
            m = this.adapter.isRtl(),
            h = this.hasBit(this.anchorCorner, Ni.FLIP_RTL),
            u = this.hasBit(this.anchorCorner, Ni.RIGHT) || this.hasBit(i, Ni.RIGHT);
          (p = m && h ? !u : u)
            ? ((s = o.left + a.width + this.anchorMargin.right), (l = o.right - this.anchorMargin.right))
            : ((s = o.left + this.anchorMargin.left), (l = o.right + a.width - this.anchorMargin.left));
          var f = s - d.width > 0,
            b = l - d.width > 0,
            g = this.hasBit(i, Ni.FLIP_RTL) && this.hasBit(i, Ni.RIGHT);
          return (
            (b && g && m) || (!f && g)
              ? (i = this.unsetBit(i, Ni.RIGHT))
              : ((f && p && m) || (f && !p && u) || (!b && s >= l)) && (i = this.setBit(i, Ni.RIGHT)),
            i
          );
        }),
        (r.prototype.getMenuSurfaceMaxHeight = function (e) {
          if (this.maxHeight > 0) return this.maxHeight;
          var t = this.measurements.viewportDistance,
            i = 0,
            n = this.hasBit(e, Ni.BOTTOM),
            o = this.hasBit(this.anchorCorner, Ni.BOTTOM),
            a = r.numbers.MARGIN_TO_EDGE;
          return (
            n
              ? ((i = t.top + this.anchorMargin.top - a), o || (i += this.measurements.anchorSize.height))
              : ((i = t.bottom - this.anchorMargin.bottom + this.measurements.anchorSize.height - a),
                o && (i -= this.measurements.anchorSize.height)),
            i
          );
        }),
        (r.prototype.getHorizontalOriginOffset = function (e) {
          var t = this.measurements.anchorSize,
            i = this.hasBit(e, Ni.RIGHT),
            r = this.hasBit(this.anchorCorner, Ni.RIGHT);
          if (i) {
            var n = r ? t.width - this.anchorMargin.left : this.anchorMargin.right;
            return this.isHoistedElement || this.isFixedPosition ? n - (this.measurements.viewportSize.width - this.measurements.bodySize.width) : n;
          }
          return r ? t.width - this.anchorMargin.right : this.anchorMargin.left;
        }),
        (r.prototype.getVerticalOriginOffset = function (e) {
          var t = this.measurements.anchorSize,
            i = this.hasBit(e, Ni.BOTTOM),
            r = this.hasBit(this.anchorCorner, Ni.BOTTOM);
          return i
            ? r
              ? t.height - this.anchorMargin.top
              : -this.anchorMargin.bottom
            : r
            ? t.height + this.anchorMargin.bottom
            : this.anchorMargin.top;
        }),
        (r.prototype.adjustPositionForHoistedElement = function (e) {
          var t,
            i,
            r = this.measurements,
            o = r.windowScroll,
            a = r.viewportDistance,
            d = r.surfaceSize,
            c = r.viewportSize,
            s = Object.keys(e);
          try {
            for (var l = n(s), p = l.next(); !p.done; p = l.next()) {
              var m = p.value,
                h = e[m] || 0;
              !this.isHorizontallyCenteredOnViewport || ("left" !== m && "right" !== m)
                ? ((h += a[m]),
                  this.isFixedPosition || ("top" === m ? (h += o.y) : "bottom" === m ? (h -= o.y) : "left" === m ? (h += o.x) : (h -= o.x)),
                  (e[m] = h))
                : (e[m] = (c.width - d.width) / 2);
            }
          } catch (e) {
            t = { error: e };
          } finally {
            try {
              p && !p.done && (i = l.return) && i.call(l);
            } finally {
              if (t) throw t.error;
            }
          }
        }),
        (r.prototype.maybeRestoreFocus = function () {
          var e = this,
            t = this.adapter.isFocused(),
            i = this.adapter.getOwnerDocument ? this.adapter.getOwnerDocument() : document,
            r = i.activeElement && this.adapter.isElementInContainer(i.activeElement);
          (t || r) &&
            setTimeout(function () {
              e.adapter.restoreFocus();
            }, Hi.TOUCH_EVENT_WAIT_MS);
        }),
        (r.prototype.hasBit = function (e, t) {
          return Boolean(e & t);
        }),
        (r.prototype.setBit = function (e, t) {
          return e | t;
        }),
        (r.prototype.unsetBit = function (e, t) {
          return e ^ t;
        }),
        (r.prototype.isFinite = function (e) {
          return "number" == typeof e && isFinite(e);
        }),
        r
      );
    })(Bi);
  const Ui = Vi,
    ji = {
      TOP_LEFT: $i.TOP_LEFT,
      TOP_RIGHT: $i.TOP_RIGHT,
      BOTTOM_LEFT: $i.BOTTOM_LEFT,
      BOTTOM_RIGHT: $i.BOTTOM_RIGHT,
      TOP_START: $i.TOP_START,
      TOP_END: $i.TOP_END,
      BOTTOM_START: $i.BOTTOM_START,
      BOTTOM_END: $i.BOTTOM_END,
    };
  class Xi extends Xe {
    constructor() {
      super(...arguments),
        (this.mdcFoundationClass = Ui),
        (this.absolute = !1),
        (this.fullwidth = !1),
        (this.fixed = !1),
        (this.x = null),
        (this.y = null),
        (this.quick = !1),
        (this.open = !1),
        (this.stayOpenOnBodyClick = !1),
        (this.bitwiseCorner = $i.TOP_START),
        (this.previousMenuCorner = null),
        (this.menuCorner = "START"),
        (this.corner = "TOP_START"),
        (this.styleTop = ""),
        (this.styleLeft = ""),
        (this.styleRight = ""),
        (this.styleBottom = ""),
        (this.styleMaxHeight = ""),
        (this.styleTransformOrigin = ""),
        (this.anchor = null),
        (this.previouslyFocused = null),
        (this.previousAnchor = null),
        (this.onBodyClickBound = () => {});
    }
    render() {
      return this.renderSurface();
    }
    renderSurface() {
      const e = this.getRootClasses(),
        t = this.getRootStyles();
      return me`
      <div
          class=${rt(e)}
          style="${nt(t)}"
          @keydown=${this.onKeydown}
          @opened=${this.registerBodyClick}
          @closed=${this.deregisterBodyClick}>
        ${this.renderContent()}
      </div>`;
    }
    getRootClasses() {
      return { "mdc-menu-surface": !0, "mdc-menu-surface--fixed": this.fixed, "mdc-menu-surface--fullwidth": this.fullwidth };
    }
    getRootStyles() {
      return {
        top: this.styleTop,
        left: this.styleLeft,
        right: this.styleRight,
        bottom: this.styleBottom,
        "max-height": this.styleMaxHeight,
        "transform-origin": this.styleTransformOrigin,
      };
    }
    renderContent() {
      return me`<slot></slot>`;
    }
    createAdapter() {
      return Object.assign(Object.assign({}, ze(this.mdcRoot)), {
        hasAnchor: () => !!this.anchor,
        notifyClose: () => {
          const e = new CustomEvent("closed", { bubbles: !0, composed: !0 });
          (this.open = !1), this.mdcRoot.dispatchEvent(e);
        },
        notifyClosing: () => {
          const e = new CustomEvent("closing", { bubbles: !0, composed: !0 });
          this.mdcRoot.dispatchEvent(e);
        },
        notifyOpen: () => {
          const e = new CustomEvent("opened", { bubbles: !0, composed: !0 });
          (this.open = !0), this.mdcRoot.dispatchEvent(e);
        },
        notifyOpening: () => {
          const e = new CustomEvent("opening", { bubbles: !0, composed: !0 });
          this.mdcRoot.dispatchEvent(e);
        },
        isElementInContainer: () => !1,
        isRtl: () => !!this.mdcRoot && "rtl" === getComputedStyle(this.mdcRoot).direction,
        setTransformOrigin: (e) => {
          this.mdcRoot && (this.styleTransformOrigin = e);
        },
        isFocused: () => je(this),
        saveFocus: () => {
          const e = Ue(),
            t = e.length;
          t || (this.previouslyFocused = null), (this.previouslyFocused = e[t - 1]);
        },
        restoreFocus: () => {
          this.previouslyFocused && "focus" in this.previouslyFocused && this.previouslyFocused.focus();
        },
        getInnerDimensions: () => {
          const e = this.mdcRoot;
          return e ? { width: e.offsetWidth, height: e.offsetHeight } : { width: 0, height: 0 };
        },
        getAnchorDimensions: () => {
          const e = this.anchor;
          return e ? e.getBoundingClientRect() : null;
        },
        getBodyDimensions: () => ({ width: document.body.clientWidth, height: document.body.clientHeight }),
        getWindowDimensions: () => ({ width: window.innerWidth, height: window.innerHeight }),
        getWindowScroll: () => ({ x: window.pageXOffset, y: window.pageYOffset }),
        setPosition: (e) => {
          this.mdcRoot &&
            ((this.styleLeft = "left" in e ? `${e.left}px` : ""),
            (this.styleRight = "right" in e ? `${e.right}px` : ""),
            (this.styleTop = "top" in e ? `${e.top}px` : ""),
            (this.styleBottom = "bottom" in e ? `${e.bottom}px` : ""));
        },
        setMaxHeight: async (e) => {
          this.mdcRoot && ((this.styleMaxHeight = e), await this.updateComplete, (this.styleMaxHeight = `var(--mdc-menu-max-height, ${e})`));
        },
      });
    }
    onKeydown(e) {
      this.mdcFoundation && this.mdcFoundation.handleKeydown(e);
    }
    onBodyClick(e) {
      this.stayOpenOnBodyClick || (-1 === e.composedPath().indexOf(this) && this.close());
    }
    registerBodyClick() {
      (this.onBodyClickBound = this.onBodyClick.bind(this)),
        document.body.addEventListener("click", this.onBodyClickBound, { passive: !0, capture: !0 });
    }
    deregisterBodyClick() {
      document.body.removeEventListener("click", this.onBodyClickBound, { capture: !0 });
    }
    onOpenChanged(e, t) {
      this.mdcFoundation && (e ? this.mdcFoundation.open() : void 0 !== t && this.mdcFoundation.close());
    }
    close() {
      this.open = !1;
    }
    show() {
      this.open = !0;
    }
  }
  r([T(".mdc-menu-surface")], Xi.prototype, "mdcRoot", void 0),
    r([T("slot")], Xi.prototype, "slotElement", void 0),
    r(
      [
        y({ type: Boolean }),
        Ot(function (e) {
          this.mdcFoundation && !this.fixed && this.mdcFoundation.setIsHoisted(e);
        }),
      ],
      Xi.prototype,
      "absolute",
      void 0
    ),
    r([y({ type: Boolean })], Xi.prototype, "fullwidth", void 0),
    r(
      [
        y({ type: Boolean }),
        Ot(function (e) {
          this.mdcFoundation && !this.absolute && this.mdcFoundation.setFixedPosition(e);
        }),
      ],
      Xi.prototype,
      "fixed",
      void 0
    ),
    r(
      [
        y({ type: Number }),
        Ot(function (e) {
          this.mdcFoundation &&
            null !== this.y &&
            null !== e &&
            (this.mdcFoundation.setAbsolutePosition(e, this.y),
            this.mdcFoundation.setAnchorMargin({ left: e, top: this.y, right: -e, bottom: this.y }));
        }),
      ],
      Xi.prototype,
      "x",
      void 0
    ),
    r(
      [
        y({ type: Number }),
        Ot(function (e) {
          this.mdcFoundation &&
            null !== this.x &&
            null !== e &&
            (this.mdcFoundation.setAbsolutePosition(this.x, e),
            this.mdcFoundation.setAnchorMargin({ left: this.x, top: e, right: -this.x, bottom: e }));
        }),
      ],
      Xi.prototype,
      "y",
      void 0
    ),
    r(
      [
        y({ type: Boolean }),
        Ot(function (e) {
          this.mdcFoundation && this.mdcFoundation.setQuickOpen(e);
        }),
      ],
      Xi.prototype,
      "quick",
      void 0
    ),
    r(
      [
        y({ type: Boolean, reflect: !0 }),
        Ot(function (e, t) {
          this.onOpenChanged(e, t);
        }),
      ],
      Xi.prototype,
      "open",
      void 0
    ),
    r([y({ type: Boolean })], Xi.prototype, "stayOpenOnBodyClick", void 0),
    r(
      [
        w(),
        Ot(function (e) {
          this.mdcFoundation && this.mdcFoundation.setAnchorCorner(e);
        }),
      ],
      Xi.prototype,
      "bitwiseCorner",
      void 0
    ),
    r(
      [
        y({ type: String }),
        Ot(function (e) {
          if (this.mdcFoundation) {
            const t = "START" === e || "END" === e,
              i = null === this.previousMenuCorner,
              r = !i && e !== this.previousMenuCorner;
            t &&
              (r || (i && "END" === e)) &&
              ((this.bitwiseCorner = this.bitwiseCorner ^ Ni.RIGHT), this.mdcFoundation.flipCornerHorizontally(), (this.previousMenuCorner = e));
          }
        }),
      ],
      Xi.prototype,
      "menuCorner",
      void 0
    ),
    r(
      [
        y({ type: String }),
        Ot(function (e) {
          if (this.mdcFoundation && e) {
            let t = ji[e];
            "END" === this.menuCorner && (t ^= Ni.RIGHT), (this.bitwiseCorner = t);
          }
        }),
      ],
      Xi.prototype,
      "corner",
      void 0
    ),
    r([w()], Xi.prototype, "styleTop", void 0),
    r([w()], Xi.prototype, "styleLeft", void 0),
    r([w()], Xi.prototype, "styleRight", void 0),
    r([w()], Xi.prototype, "styleBottom", void 0),
    r([w()], Xi.prototype, "styleMaxHeight", void 0),
    r([w()], Xi.prototype, "styleTransformOrigin", void 0);
  const Wi = P`.mdc-menu-surface{display:none;position:absolute;box-sizing:border-box;max-width:calc(100vw - 32px);max-width:var(--mdc-menu-max-width, calc(100vw - 32px));max-height:calc(100vh - 32px);max-height:var(--mdc-menu-max-height, calc(100vh - 32px));margin:0;padding:0;transform:scale(1);transform-origin:top left;opacity:0;overflow:auto;will-change:transform,opacity;z-index:8;transition:opacity .03s linear,transform .12s cubic-bezier(0, 0, 0.2, 1),height 250ms cubic-bezier(0, 0, 0.2, 1);box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12);background-color:#fff;background-color:var(--mdc-theme-surface, #fff);color:#000;color:var(--mdc-theme-on-surface, #000);border-radius:4px;border-radius:var(--mdc-shape-medium, 4px);transform-origin-left:top left;transform-origin-right:top right}.mdc-menu-surface:focus{outline:none}.mdc-menu-surface--animating-open{display:inline-block;transform:scale(0.8);opacity:0}.mdc-menu-surface--open{display:inline-block;transform:scale(1);opacity:1}.mdc-menu-surface--animating-closed{display:inline-block;opacity:0;transition:opacity .075s linear}[dir=rtl] .mdc-menu-surface,.mdc-menu-surface[dir=rtl]{transform-origin-left:top right;transform-origin-right:top left}.mdc-menu-surface--anchor{position:relative;overflow:visible}.mdc-menu-surface--fixed{position:fixed}.mdc-menu-surface--fullwidth{width:100%}:host(:not([open])){display:none}.mdc-menu-surface{z-index:8;z-index:var(--mdc-menu-z-index, 8);min-width:112px;min-width:var(--mdc-menu-min-width, 112px)}`;
  let Gi = class extends Xi {};
  (Gi.styles = [Wi]), (Gi = r([_("mwc-menu-surface")], Gi));
  var Yi,
    Ki = { MENU_SELECTED_LIST_ITEM: "mdc-menu-item--selected", MENU_SELECTION_GROUP: "mdc-menu__selection-group", ROOT: "mdc-menu" },
    qi = {
      ARIA_CHECKED_ATTR: "aria-checked",
      ARIA_DISABLED_ATTR: "aria-disabled",
      CHECKBOX_SELECTOR: 'input[type="checkbox"]',
      LIST_SELECTOR: ".mdc-list,.mdc-deprecated-list",
      SELECTED_EVENT: "MDCMenu:selected",
      SKIP_RESTORE_FOCUS: "data-menu-item-skip-restore-focus",
    },
    Qi = { FOCUS_ROOT_INDEX: -1 };
  !(function (e) {
    (e[(e.NONE = 0)] = "NONE"), (e[(e.LIST_ROOT = 1)] = "LIST_ROOT"), (e[(e.FIRST_ITEM = 2)] = "FIRST_ITEM"), (e[(e.LAST_ITEM = 3)] = "LAST_ITEM");
  })(Yi || (Yi = {}));
  var Zi = (function () {
    function e(e) {
      void 0 === e && (e = {}), (this.adapter = e);
    }
    return (
      Object.defineProperty(e, "cssClasses", {
        get: function () {
          return {};
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e, "strings", {
        get: function () {
          return {};
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e, "numbers", {
        get: function () {
          return {};
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e, "defaultAdapter", {
        get: function () {
          return {};
        },
        enumerable: !1,
        configurable: !0,
      }),
      (e.prototype.init = function () {}),
      (e.prototype.destroy = function () {}),
      e
    );
  })();
  const Ji = (function (e) {
    function r(t) {
      var n = e.call(this, i(i({}, r.defaultAdapter), t)) || this;
      return (n.closeAnimationEndTimerId = 0), (n.defaultFocusState = Yi.LIST_ROOT), (n.selectedIndex = -1), n;
    }
    return (
      t(r, e),
      Object.defineProperty(r, "cssClasses", {
        get: function () {
          return Ki;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(r, "strings", {
        get: function () {
          return qi;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(r, "numbers", {
        get: function () {
          return Qi;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(r, "defaultAdapter", {
        get: function () {
          return {
            addClassToElementAtIndex: function () {},
            removeClassFromElementAtIndex: function () {},
            addAttributeToElementAtIndex: function () {},
            removeAttributeFromElementAtIndex: function () {},
            getAttributeFromElementAtIndex: function () {
              return null;
            },
            elementContainsClass: function () {
              return !1;
            },
            closeSurface: function () {},
            getElementIndex: function () {
              return -1;
            },
            notifySelected: function () {},
            getMenuItemCount: function () {
              return 0;
            },
            focusItemAtIndex: function () {},
            focusListRoot: function () {},
            getSelectedSiblingOfItemAtIndex: function () {
              return -1;
            },
            isSelectableItemAtIndex: function () {
              return !1;
            },
          };
        },
        enumerable: !1,
        configurable: !0,
      }),
      (r.prototype.destroy = function () {
        this.closeAnimationEndTimerId && clearTimeout(this.closeAnimationEndTimerId), this.adapter.closeSurface();
      }),
      (r.prototype.handleKeydown = function (e) {
        var t = e.key,
          i = e.keyCode;
        ("Tab" === t || 9 === i) && this.adapter.closeSurface(!0);
      }),
      (r.prototype.handleItemAction = function (e) {
        var t = this,
          i = this.adapter.getElementIndex(e);
        if (!(i < 0)) {
          this.adapter.notifySelected({ index: i });
          var r = "true" === this.adapter.getAttributeFromElementAtIndex(i, qi.SKIP_RESTORE_FOCUS);
          this.adapter.closeSurface(r),
            (this.closeAnimationEndTimerId = setTimeout(function () {
              var i = t.adapter.getElementIndex(e);
              i >= 0 && t.adapter.isSelectableItemAtIndex(i) && t.setSelectedIndex(i);
            }, Vi.numbers.TRANSITION_CLOSE_DURATION));
        }
      }),
      (r.prototype.handleMenuSurfaceOpened = function () {
        switch (this.defaultFocusState) {
          case Yi.FIRST_ITEM:
            this.adapter.focusItemAtIndex(0);
            break;
          case Yi.LAST_ITEM:
            this.adapter.focusItemAtIndex(this.adapter.getMenuItemCount() - 1);
            break;
          case Yi.NONE:
            break;
          default:
            this.adapter.focusListRoot();
        }
      }),
      (r.prototype.setDefaultFocusState = function (e) {
        this.defaultFocusState = e;
      }),
      (r.prototype.getSelectedIndex = function () {
        return this.selectedIndex;
      }),
      (r.prototype.setSelectedIndex = function (e) {
        if ((this.validatedIndex(e), !this.adapter.isSelectableItemAtIndex(e)))
          throw new Error("MDCMenuFoundation: No selection group at specified index.");
        var t = this.adapter.getSelectedSiblingOfItemAtIndex(e);
        t >= 0 &&
          (this.adapter.removeAttributeFromElementAtIndex(t, qi.ARIA_CHECKED_ATTR),
          this.adapter.removeClassFromElementAtIndex(t, Ki.MENU_SELECTED_LIST_ITEM)),
          this.adapter.addClassToElementAtIndex(e, Ki.MENU_SELECTED_LIST_ITEM),
          this.adapter.addAttributeToElementAtIndex(e, qi.ARIA_CHECKED_ATTR, "true"),
          (this.selectedIndex = e);
      }),
      (r.prototype.setEnabled = function (e, t) {
        this.validatedIndex(e),
          t
            ? (this.adapter.removeClassFromElementAtIndex(e, vi), this.adapter.addAttributeToElementAtIndex(e, qi.ARIA_DISABLED_ATTR, "false"))
            : (this.adapter.addClassToElementAtIndex(e, vi), this.adapter.addAttributeToElementAtIndex(e, qi.ARIA_DISABLED_ATTR, "true"));
      }),
      (r.prototype.validatedIndex = function (e) {
        var t = this.adapter.getMenuItemCount();
        if (!(e >= 0 && e < t)) throw new Error("MDCMenuFoundation: No list item at specified index.");
      }),
      r
    );
  })(Zi);
  class er extends Xe {
    constructor() {
      super(...arguments),
        (this.mdcFoundationClass = Ji),
        (this.listElement_ = null),
        (this.anchor = null),
        (this.open = !1),
        (this.quick = !1),
        (this.wrapFocus = !1),
        (this.innerRole = "menu"),
        (this.innerAriaLabel = null),
        (this.corner = "TOP_START"),
        (this.x = null),
        (this.y = null),
        (this.absolute = !1),
        (this.multi = !1),
        (this.activatable = !1),
        (this.fixed = !1),
        (this.forceGroupSelection = !1),
        (this.fullwidth = !1),
        (this.menuCorner = "START"),
        (this.stayOpenOnBodyClick = !1),
        (this.defaultFocus = "LIST_ROOT"),
        (this._listUpdateComplete = null);
    }
    get listElement() {
      return this.listElement_ || (this.listElement_ = this.renderRoot.querySelector("mwc-list")), this.listElement_;
    }
    get items() {
      const e = this.listElement;
      return e ? e.items : [];
    }
    get index() {
      const e = this.listElement;
      return e ? e.index : -1;
    }
    get selected() {
      const e = this.listElement;
      return e ? e.selected : null;
    }
    render() {
      return this.renderSurface();
    }
    renderSurface() {
      const e = this.getSurfaceClasses();
      return me`
      <mwc-menu-surface
        ?hidden=${!this.open}
        .anchor=${this.anchor}
        .open=${this.open}
        .quick=${this.quick}
        .corner=${this.corner}
        .x=${this.x}
        .y=${this.y}
        .absolute=${this.absolute}
        .fixed=${this.fixed}
        .fullwidth=${this.fullwidth}
        .menuCorner=${this.menuCorner}
        ?stayOpenOnBodyClick=${this.stayOpenOnBodyClick}
        class=${rt(e)}
        @closed=${this.onClosed}
        @opened=${this.onOpened}
        @keydown=${this.onKeydown}>
      ${this.renderList()}
    </mwc-menu-surface>`;
    }
    getSurfaceClasses() {
      return { "mdc-menu": !0, "mdc-menu-surface": !0 };
    }
    renderList() {
      const e = "menu" === this.innerRole ? "menuitem" : "option",
        t = this.renderListClasses();
      return me`
      <mwc-list
          rootTabbable
          .innerAriaLabel=${this.innerAriaLabel}
          .innerRole=${this.innerRole}
          .multi=${this.multi}
          class=${rt(t)}
          .itemRoles=${e}
          .wrapFocus=${this.wrapFocus}
          .activatable=${this.activatable}
          @action=${this.onAction}>
        <slot></slot>
      </mwc-list>`;
    }
    renderListClasses() {
      return { "mdc-deprecated-list": !0 };
    }
    createAdapter() {
      return {
        addClassToElementAtIndex: (e, t) => {
          const i = this.listElement;
          if (!i) return;
          const r = i.items[e];
          r && ("mdc-menu-item--selected" === t ? this.forceGroupSelection && !r.selected && i.toggle(e, !0) : r.classList.add(t));
        },
        removeClassFromElementAtIndex: (e, t) => {
          const i = this.listElement;
          if (!i) return;
          const r = i.items[e];
          r && ("mdc-menu-item--selected" === t ? r.selected && i.toggle(e, !1) : r.classList.remove(t));
        },
        addAttributeToElementAtIndex: (e, t, i) => {
          const r = this.listElement;
          if (!r) return;
          const n = r.items[e];
          n && n.setAttribute(t, i);
        },
        removeAttributeFromElementAtIndex: (e, t) => {
          const i = this.listElement;
          if (!i) return;
          const r = i.items[e];
          r && r.removeAttribute(t);
        },
        getAttributeFromElementAtIndex: (e, t) => {
          const i = this.listElement;
          if (!i) return null;
          const r = i.items[e];
          return r ? r.getAttribute(t) : null;
        },
        elementContainsClass: (e, t) => e.classList.contains(t),
        closeSurface: () => {
          this.open = !1;
        },
        getElementIndex: (e) => {
          const t = this.listElement;
          return t ? t.items.indexOf(e) : -1;
        },
        notifySelected: () => {},
        getMenuItemCount: () => {
          const e = this.listElement;
          return e ? e.items.length : 0;
        },
        focusItemAtIndex: (e) => {
          const t = this.listElement;
          if (!t) return;
          const i = t.items[e];
          i && i.focus();
        },
        focusListRoot: () => {
          this.listElement && this.listElement.focus();
        },
        getSelectedSiblingOfItemAtIndex: (e) => {
          const t = this.listElement;
          if (!t) return -1;
          const i = t.items[e];
          if (!i || !i.group) return -1;
          for (let r = 0; r < t.items.length; r++) {
            if (r === e) continue;
            const n = t.items[r];
            if (n.selected && n.group === i.group) return r;
          }
          return -1;
        },
        isSelectableItemAtIndex: (e) => {
          const t = this.listElement;
          if (!t) return !1;
          const i = t.items[e];
          return !!i && i.hasAttribute("group");
        },
      };
    }
    onKeydown(e) {
      this.mdcFoundation && this.mdcFoundation.handleKeydown(e);
    }
    onAction(e) {
      const t = this.listElement;
      if (this.mdcFoundation && t) {
        const i = e.detail.index,
          r = t.items[i];
        r && this.mdcFoundation.handleItemAction(r);
      }
    }
    onOpened() {
      (this.open = !0), this.mdcFoundation && this.mdcFoundation.handleMenuSurfaceOpened();
    }
    onClosed() {
      this.open = !1;
    }
    async getUpdateComplete() {
      return await this._listUpdateComplete, await super.getUpdateComplete();
    }
    async firstUpdated() {
      super.firstUpdated();
      const e = this.listElement;
      e && ((this._listUpdateComplete = e.updateComplete), await this._listUpdateComplete);
    }
    select(e) {
      const t = this.listElement;
      t && t.select(e);
    }
    close() {
      this.open = !1;
    }
    show() {
      this.open = !0;
    }
    getFocusedItemIndex() {
      const e = this.listElement;
      return e ? e.getFocusedItemIndex() : -1;
    }
    focusItemAtIndex(e) {
      const t = this.listElement;
      t && t.focusItemAtIndex(e);
    }
    layout(e = !0) {
      const t = this.listElement;
      t && t.layout(e);
    }
  }
  r([T(".mdc-menu")], er.prototype, "mdcRoot", void 0),
    r([T("slot")], er.prototype, "slotElement", void 0),
    r([y({ type: Object })], er.prototype, "anchor", void 0),
    r([y({ type: Boolean, reflect: !0 })], er.prototype, "open", void 0),
    r([y({ type: Boolean })], er.prototype, "quick", void 0),
    r([y({ type: Boolean })], er.prototype, "wrapFocus", void 0),
    r([y({ type: String })], er.prototype, "innerRole", void 0),
    r([y({ type: String })], er.prototype, "innerAriaLabel", void 0),
    r([y({ type: String })], er.prototype, "corner", void 0),
    r([y({ type: Number })], er.prototype, "x", void 0),
    r([y({ type: Number })], er.prototype, "y", void 0),
    r([y({ type: Boolean })], er.prototype, "absolute", void 0),
    r([y({ type: Boolean })], er.prototype, "multi", void 0),
    r([y({ type: Boolean })], er.prototype, "activatable", void 0),
    r([y({ type: Boolean })], er.prototype, "fixed", void 0),
    r([y({ type: Boolean })], er.prototype, "forceGroupSelection", void 0),
    r([y({ type: Boolean })], er.prototype, "fullwidth", void 0),
    r([y({ type: String })], er.prototype, "menuCorner", void 0),
    r([y({ type: Boolean })], er.prototype, "stayOpenOnBodyClick", void 0),
    r(
      [
        y({ type: String }),
        Ot(function (e) {
          this.mdcFoundation && this.mdcFoundation.setDefaultFocusState(Yi[e]);
        }),
      ],
      er.prototype,
      "defaultFocus",
      void 0
    );
  const tr = P`mwc-list ::slotted([mwc-list-item]:not([twoline])),mwc-list ::slotted([noninteractive]:not([twoline])){height:var(--mdc-menu-item-height, 48px)}`;
  let ir = class extends er {};
  (ir.styles = [tr]), (ir = r([_("mwc-menu")], ir));
  var rr = ["input", "button", "textarea", "select"],
    nr = function (e) {
      var t = e.target;
      if (t) {
        var i = ("" + t.tagName).toLowerCase();
        -1 === rr.indexOf(i) && e.preventDefault();
      }
    };
  function or(e, t) {
    for (var i = new Map(), r = 0; r < e; r++) {
      var n = t(r).trim();
      if (n) {
        var o = n[0].toLowerCase();
        i.has(o) || i.set(o, []), i.get(o).push({ text: n.toLowerCase(), index: r });
      }
    }
    return (
      i.forEach(function (e) {
        e.sort(function (e, t) {
          return e.index - t.index;
        });
      }),
      i
    );
  }
  function ar(e, t) {
    var i,
      r = e.nextChar,
      n = e.focusItemAtIndex,
      o = e.sortedIndexByFirstChar,
      a = e.focusedItemIndex,
      d = e.skipFocus,
      c = e.isItemAtIndexDisabled;
    return (
      clearTimeout(t.bufferClearTimeout),
      (t.bufferClearTimeout = setTimeout(function () {
        !(function (e) {
          e.typeaheadBuffer = "";
        })(t);
      }, ki.TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS)),
      (t.typeaheadBuffer = t.typeaheadBuffer + r),
      (i =
        1 === t.typeaheadBuffer.length
          ? (function (e, t, i, r) {
              var n = r.typeaheadBuffer[0],
                o = e.get(n);
              if (!o) return -1;
              if (n === r.currentFirstChar && o[r.sortedIndexCursor].index === t) {
                r.sortedIndexCursor = (r.sortedIndexCursor + 1) % o.length;
                var a = o[r.sortedIndexCursor].index;
                if (!i(a)) return a;
              }
              r.currentFirstChar = n;
              var d,
                c = -1;
              for (d = 0; d < o.length; d++)
                if (!i(o[d].index)) {
                  c = d;
                  break;
                }
              for (; d < o.length; d++)
                if (o[d].index > t && !i(o[d].index)) {
                  c = d;
                  break;
                }
              return -1 !== c ? ((r.sortedIndexCursor = c), o[r.sortedIndexCursor].index) : -1;
            })(o, a, c, t)
          : (function (e, t, i) {
              var r = i.typeaheadBuffer[0],
                n = e.get(r);
              if (!n) return -1;
              var o = n[i.sortedIndexCursor];
              if (0 === o.text.lastIndexOf(i.typeaheadBuffer, 0) && !t(o.index)) return o.index;
              for (var a = (i.sortedIndexCursor + 1) % n.length, d = -1; a !== i.sortedIndexCursor; ) {
                var c = n[a],
                  s = 0 === c.text.lastIndexOf(i.typeaheadBuffer, 0),
                  l = !t(c.index);
                if (s && l) {
                  d = a;
                  break;
                }
                a = (a + 1) % n.length;
              }
              return -1 !== d ? ((i.sortedIndexCursor = d), n[i.sortedIndexCursor].index) : -1;
            })(o, c, t)),
      -1 === i || d || n(i),
      i
    );
  }
  function dr(e) {
    return e.typeaheadBuffer.length > 0;
  }
  var cr = (function () {
      function e(e) {
        void 0 === e && (e = {}), (this.adapter = e);
      }
      return (
        Object.defineProperty(e, "cssClasses", {
          get: function () {
            return {};
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e, "strings", {
          get: function () {
            return {};
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e, "numbers", {
          get: function () {
            return {};
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e, "defaultAdapter", {
          get: function () {
            return {};
          },
          enumerable: !1,
          configurable: !0,
        }),
        (e.prototype.init = function () {}),
        (e.prototype.destroy = function () {}),
        e
      );
    })(),
    sr = {
      LABEL_FLOAT_ABOVE: "mdc-floating-label--float-above",
      LABEL_REQUIRED: "mdc-floating-label--required",
      LABEL_SHAKE: "mdc-floating-label--shake",
      ROOT: "mdc-floating-label",
    },
    lr = (function (e) {
      function r(t) {
        var n = e.call(this, i(i({}, r.defaultAdapter), t)) || this;
        return (
          (n.shakeAnimationEndHandler = function () {
            n.handleShakeAnimationEnd();
          }),
          n
        );
      }
      return (
        t(r, e),
        Object.defineProperty(r, "cssClasses", {
          get: function () {
            return sr;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(r, "defaultAdapter", {
          get: function () {
            return {
              addClass: function () {},
              removeClass: function () {},
              getWidth: function () {
                return 0;
              },
              registerInteractionHandler: function () {},
              deregisterInteractionHandler: function () {},
            };
          },
          enumerable: !1,
          configurable: !0,
        }),
        (r.prototype.init = function () {
          this.adapter.registerInteractionHandler("animationend", this.shakeAnimationEndHandler);
        }),
        (r.prototype.destroy = function () {
          this.adapter.deregisterInteractionHandler("animationend", this.shakeAnimationEndHandler);
        }),
        (r.prototype.getWidth = function () {
          return this.adapter.getWidth();
        }),
        (r.prototype.shake = function (e) {
          var t = r.cssClasses.LABEL_SHAKE;
          e ? this.adapter.addClass(t) : this.adapter.removeClass(t);
        }),
        (r.prototype.float = function (e) {
          var t = r.cssClasses,
            i = t.LABEL_FLOAT_ABOVE,
            n = t.LABEL_SHAKE;
          e ? this.adapter.addClass(i) : (this.adapter.removeClass(i), this.adapter.removeClass(n));
        }),
        (r.prototype.setRequired = function (e) {
          var t = r.cssClasses.LABEL_REQUIRED;
          e ? this.adapter.addClass(t) : this.adapter.removeClass(t);
        }),
        (r.prototype.handleShakeAnimationEnd = function () {
          var e = r.cssClasses.LABEL_SHAKE;
          this.adapter.removeClass(e);
        }),
        r
      );
    })(cr);
  const pr = tt(
    class extends it {
      constructor(e) {
        switch ((super(e), (this.foundation = null), (this.previousPart = null), e.type)) {
          case 1:
          case 3:
            break;
          default:
            throw new Error("FloatingLabel directive only support attribute and property parts");
        }
      }
      update(e, [t]) {
        if (e !== this.previousPart) {
          this.foundation && this.foundation.destroy(), (this.previousPart = e);
          const t = e.element;
          t.classList.add("mdc-floating-label");
          const i = ((e) => ({
            addClass: (t) => e.classList.add(t),
            removeClass: (t) => e.classList.remove(t),
            getWidth: () => e.scrollWidth,
            registerInteractionHandler: (t, i) => {
              e.addEventListener(t, i);
            },
            deregisterInteractionHandler: (t, i) => {
              e.removeEventListener(t, i);
            },
          }))(t);
          (this.foundation = new lr(i)), this.foundation.init();
        }
        return this.render(t);
      }
      render(e) {
        return this.foundation;
      }
    }
  );
  var mr = (function () {
      function e(e) {
        void 0 === e && (e = {}), (this.adapter = e);
      }
      return (
        Object.defineProperty(e, "cssClasses", {
          get: function () {
            return {};
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e, "strings", {
          get: function () {
            return {};
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e, "numbers", {
          get: function () {
            return {};
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e, "defaultAdapter", {
          get: function () {
            return {};
          },
          enumerable: !1,
          configurable: !0,
        }),
        (e.prototype.init = function () {}),
        (e.prototype.destroy = function () {}),
        e
      );
    })(),
    hr = { LINE_RIPPLE_ACTIVE: "mdc-line-ripple--active", LINE_RIPPLE_DEACTIVATING: "mdc-line-ripple--deactivating" },
    ur = (function (e) {
      function r(t) {
        var n = e.call(this, i(i({}, r.defaultAdapter), t)) || this;
        return (
          (n.transitionEndHandler = function (e) {
            n.handleTransitionEnd(e);
          }),
          n
        );
      }
      return (
        t(r, e),
        Object.defineProperty(r, "cssClasses", {
          get: function () {
            return hr;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(r, "defaultAdapter", {
          get: function () {
            return {
              addClass: function () {},
              removeClass: function () {},
              hasClass: function () {
                return !1;
              },
              setStyle: function () {},
              registerEventHandler: function () {},
              deregisterEventHandler: function () {},
            };
          },
          enumerable: !1,
          configurable: !0,
        }),
        (r.prototype.init = function () {
          this.adapter.registerEventHandler("transitionend", this.transitionEndHandler);
        }),
        (r.prototype.destroy = function () {
          this.adapter.deregisterEventHandler("transitionend", this.transitionEndHandler);
        }),
        (r.prototype.activate = function () {
          this.adapter.removeClass(hr.LINE_RIPPLE_DEACTIVATING), this.adapter.addClass(hr.LINE_RIPPLE_ACTIVE);
        }),
        (r.prototype.setRippleCenter = function (e) {
          this.adapter.setStyle("transform-origin", e + "px center");
        }),
        (r.prototype.deactivate = function () {
          this.adapter.addClass(hr.LINE_RIPPLE_DEACTIVATING);
        }),
        (r.prototype.handleTransitionEnd = function (e) {
          var t = this.adapter.hasClass(hr.LINE_RIPPLE_DEACTIVATING);
          "opacity" === e.propertyName &&
            t &&
            (this.adapter.removeClass(hr.LINE_RIPPLE_ACTIVE), this.adapter.removeClass(hr.LINE_RIPPLE_DEACTIVATING));
        }),
        r
      );
    })(mr);
  const fr = tt(
    class extends it {
      constructor(e) {
        switch ((super(e), (this.previousPart = null), (this.foundation = null), e.type)) {
          case 1:
          case 3:
            return;
          default:
            throw new Error("LineRipple only support attribute and property parts.");
        }
      }
      update(e, t) {
        if (this.previousPart !== e) {
          this.foundation && this.foundation.destroy(), (this.previousPart = e);
          const t = e.element;
          t.classList.add("mdc-line-ripple");
          const i = ((e) => ({
            addClass: (t) => e.classList.add(t),
            removeClass: (t) => e.classList.remove(t),
            hasClass: (t) => e.classList.contains(t),
            setStyle: (t, i) => e.style.setProperty(t, i),
            registerEventHandler: (t, i) => {
              e.addEventListener(t, i);
            },
            deregisterEventHandler: (t, i) => {
              e.removeEventListener(t, i);
            },
          }))(t);
          (this.foundation = new ur(i)), this.foundation.init();
        }
        return this.render();
      }
      render() {
        return this.foundation;
      }
    }
  );
  var br = (function () {
      function e(e) {
        void 0 === e && (e = {}), (this.adapter = e);
      }
      return (
        Object.defineProperty(e, "cssClasses", {
          get: function () {
            return {};
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e, "strings", {
          get: function () {
            return {};
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e, "numbers", {
          get: function () {
            return {};
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e, "defaultAdapter", {
          get: function () {
            return {};
          },
          enumerable: !1,
          configurable: !0,
        }),
        (e.prototype.init = function () {}),
        (e.prototype.destroy = function () {}),
        e
      );
    })(),
    gr = {
      ACTIVATED: "mdc-select--activated",
      DISABLED: "mdc-select--disabled",
      FOCUSED: "mdc-select--focused",
      INVALID: "mdc-select--invalid",
      MENU_INVALID: "mdc-select__menu--invalid",
      OUTLINED: "mdc-select--outlined",
      REQUIRED: "mdc-select--required",
      ROOT: "mdc-select",
      WITH_LEADING_ICON: "mdc-select--with-leading-icon",
    },
    vr = {
      ARIA_CONTROLS: "aria-controls",
      ARIA_DESCRIBEDBY: "aria-describedby",
      ARIA_SELECTED_ATTR: "aria-selected",
      CHANGE_EVENT: "MDCSelect:change",
      HIDDEN_INPUT_SELECTOR: 'input[type="hidden"]',
      LABEL_SELECTOR: ".mdc-floating-label",
      LEADING_ICON_SELECTOR: ".mdc-select__icon",
      LINE_RIPPLE_SELECTOR: ".mdc-line-ripple",
      MENU_SELECTOR: ".mdc-select__menu",
      OUTLINE_SELECTOR: ".mdc-notched-outline",
      SELECTED_TEXT_SELECTOR: ".mdc-select__selected-text",
      SELECT_ANCHOR_SELECTOR: ".mdc-select__anchor",
      VALUE_ATTR: "data-value",
    },
    _r = { LABEL_SCALE: 0.75, UNSET_INDEX: -1, CLICK_DEBOUNCE_TIMEOUT_MS: 330 };
  const xr = (function (e) {
      function r(t, n) {
        void 0 === n && (n = {});
        var o = e.call(this, i(i({}, r.defaultAdapter), t)) || this;
        return (
          (o.disabled = !1),
          (o.isMenuOpen = !1),
          (o.useDefaultValidation = !0),
          (o.customValidity = !0),
          (o.lastSelectedIndex = _r.UNSET_INDEX),
          (o.clickDebounceTimeout = 0),
          (o.recentlyClicked = !1),
          (o.leadingIcon = n.leadingIcon),
          (o.helperText = n.helperText),
          o
        );
      }
      return (
        t(r, e),
        Object.defineProperty(r, "cssClasses", {
          get: function () {
            return gr;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(r, "numbers", {
          get: function () {
            return _r;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(r, "strings", {
          get: function () {
            return vr;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(r, "defaultAdapter", {
          get: function () {
            return {
              addClass: function () {},
              removeClass: function () {},
              hasClass: function () {
                return !1;
              },
              activateBottomLine: function () {},
              deactivateBottomLine: function () {},
              getSelectedIndex: function () {
                return -1;
              },
              setSelectedIndex: function () {},
              hasLabel: function () {
                return !1;
              },
              floatLabel: function () {},
              getLabelWidth: function () {
                return 0;
              },
              setLabelRequired: function () {},
              hasOutline: function () {
                return !1;
              },
              notchOutline: function () {},
              closeOutline: function () {},
              setRippleCenter: function () {},
              notifyChange: function () {},
              setSelectedText: function () {},
              isSelectAnchorFocused: function () {
                return !1;
              },
              getSelectAnchorAttr: function () {
                return "";
              },
              setSelectAnchorAttr: function () {},
              removeSelectAnchorAttr: function () {},
              addMenuClass: function () {},
              removeMenuClass: function () {},
              openMenu: function () {},
              closeMenu: function () {},
              getAnchorElement: function () {
                return null;
              },
              setMenuAnchorElement: function () {},
              setMenuAnchorCorner: function () {},
              setMenuWrapFocus: function () {},
              focusMenuItemAtIndex: function () {},
              getMenuItemCount: function () {
                return 0;
              },
              getMenuItemValues: function () {
                return [];
              },
              getMenuItemTextAtIndex: function () {
                return "";
              },
              isTypeaheadInProgress: function () {
                return !1;
              },
              typeaheadMatchItem: function () {
                return -1;
              },
            };
          },
          enumerable: !1,
          configurable: !0,
        }),
        (r.prototype.getSelectedIndex = function () {
          return this.adapter.getSelectedIndex();
        }),
        (r.prototype.setSelectedIndex = function (e, t, i) {
          void 0 === t && (t = !1),
            void 0 === i && (i = !1),
            e >= this.adapter.getMenuItemCount() ||
              (e === _r.UNSET_INDEX ? this.adapter.setSelectedText("") : this.adapter.setSelectedText(this.adapter.getMenuItemTextAtIndex(e).trim()),
              this.adapter.setSelectedIndex(e),
              t && this.adapter.closeMenu(),
              i || this.lastSelectedIndex === e || this.handleChange(),
              (this.lastSelectedIndex = e));
        }),
        (r.prototype.setValue = function (e, t) {
          void 0 === t && (t = !1);
          var i = this.adapter.getMenuItemValues().indexOf(e);
          this.setSelectedIndex(i, !1, t);
        }),
        (r.prototype.getValue = function () {
          var e = this.adapter.getSelectedIndex(),
            t = this.adapter.getMenuItemValues();
          return e !== _r.UNSET_INDEX ? t[e] : "";
        }),
        (r.prototype.getDisabled = function () {
          return this.disabled;
        }),
        (r.prototype.setDisabled = function (e) {
          (this.disabled = e),
            this.disabled ? (this.adapter.addClass(gr.DISABLED), this.adapter.closeMenu()) : this.adapter.removeClass(gr.DISABLED),
            this.leadingIcon && this.leadingIcon.setDisabled(this.disabled),
            this.disabled ? this.adapter.removeSelectAnchorAttr("tabindex") : this.adapter.setSelectAnchorAttr("tabindex", "0"),
            this.adapter.setSelectAnchorAttr("aria-disabled", this.disabled.toString());
        }),
        (r.prototype.openMenu = function () {
          this.adapter.addClass(gr.ACTIVATED),
            this.adapter.openMenu(),
            (this.isMenuOpen = !0),
            this.adapter.setSelectAnchorAttr("aria-expanded", "true");
        }),
        (r.prototype.setHelperTextContent = function (e) {
          this.helperText && this.helperText.setContent(e);
        }),
        (r.prototype.layout = function () {
          if (this.adapter.hasLabel()) {
            var e = this.getValue().length > 0,
              t = this.adapter.hasClass(gr.FOCUSED),
              i = e || t,
              r = this.adapter.hasClass(gr.REQUIRED);
            this.notchOutline(i), this.adapter.floatLabel(i), this.adapter.setLabelRequired(r);
          }
        }),
        (r.prototype.layoutOptions = function () {
          var e = this.adapter.getMenuItemValues().indexOf(this.getValue());
          this.setSelectedIndex(e, !1, !0);
        }),
        (r.prototype.handleMenuOpened = function () {
          if (0 !== this.adapter.getMenuItemValues().length) {
            var e = this.getSelectedIndex(),
              t = e >= 0 ? e : 0;
            this.adapter.focusMenuItemAtIndex(t);
          }
        }),
        (r.prototype.handleMenuClosing = function () {
          this.adapter.setSelectAnchorAttr("aria-expanded", "false");
        }),
        (r.prototype.handleMenuClosed = function () {
          this.adapter.removeClass(gr.ACTIVATED), (this.isMenuOpen = !1), this.adapter.isSelectAnchorFocused() || this.blur();
        }),
        (r.prototype.handleChange = function () {
          this.layout(),
            this.adapter.notifyChange(this.getValue()),
            this.adapter.hasClass(gr.REQUIRED) && this.useDefaultValidation && this.setValid(this.isValid());
        }),
        (r.prototype.handleMenuItemAction = function (e) {
          this.setSelectedIndex(e, !0);
        }),
        (r.prototype.handleFocus = function () {
          this.adapter.addClass(gr.FOCUSED), this.layout(), this.adapter.activateBottomLine();
        }),
        (r.prototype.handleBlur = function () {
          this.isMenuOpen || this.blur();
        }),
        (r.prototype.handleClick = function (e) {
          this.disabled ||
            this.recentlyClicked ||
            (this.setClickDebounceTimeout(), this.isMenuOpen ? this.adapter.closeMenu() : (this.adapter.setRippleCenter(e), this.openMenu()));
        }),
        (r.prototype.handleKeydown = function (e) {
          if (!this.isMenuOpen && this.adapter.hasClass(gr.FOCUSED)) {
            var t = fi(e) === si.ENTER,
              i = fi(e) === si.SPACEBAR,
              r = fi(e) === si.ARROW_UP,
              n = fi(e) === si.ARROW_DOWN;
            if (!e.ctrlKey && !e.metaKey && ((!i && e.key && 1 === e.key.length) || (i && this.adapter.isTypeaheadInProgress()))) {
              var o = i ? " " : e.key,
                a = this.adapter.typeaheadMatchItem(o, this.getSelectedIndex());
              return a >= 0 && this.setSelectedIndex(a), void e.preventDefault();
            }
            (t || i || r || n) && (this.openMenu(), e.preventDefault());
          }
        }),
        (r.prototype.notchOutline = function (e) {
          if (this.adapter.hasOutline()) {
            var t = this.adapter.hasClass(gr.FOCUSED);
            if (e) {
              var i = _r.LABEL_SCALE,
                r = this.adapter.getLabelWidth() * i;
              this.adapter.notchOutline(r);
            } else t || this.adapter.closeOutline();
          }
        }),
        (r.prototype.setLeadingIconAriaLabel = function (e) {
          this.leadingIcon && this.leadingIcon.setAriaLabel(e);
        }),
        (r.prototype.setLeadingIconContent = function (e) {
          this.leadingIcon && this.leadingIcon.setContent(e);
        }),
        (r.prototype.getUseDefaultValidation = function () {
          return this.useDefaultValidation;
        }),
        (r.prototype.setUseDefaultValidation = function (e) {
          this.useDefaultValidation = e;
        }),
        (r.prototype.setValid = function (e) {
          this.useDefaultValidation || (this.customValidity = e),
            this.adapter.setSelectAnchorAttr("aria-invalid", (!e).toString()),
            e
              ? (this.adapter.removeClass(gr.INVALID), this.adapter.removeMenuClass(gr.MENU_INVALID))
              : (this.adapter.addClass(gr.INVALID), this.adapter.addMenuClass(gr.MENU_INVALID)),
            this.syncHelperTextValidity(e);
        }),
        (r.prototype.isValid = function () {
          return this.useDefaultValidation && this.adapter.hasClass(gr.REQUIRED) && !this.adapter.hasClass(gr.DISABLED)
            ? this.getSelectedIndex() !== _r.UNSET_INDEX && (0 !== this.getSelectedIndex() || Boolean(this.getValue()))
            : this.customValidity;
        }),
        (r.prototype.setRequired = function (e) {
          e ? this.adapter.addClass(gr.REQUIRED) : this.adapter.removeClass(gr.REQUIRED),
            this.adapter.setSelectAnchorAttr("aria-required", e.toString()),
            this.adapter.setLabelRequired(e);
        }),
        (r.prototype.getRequired = function () {
          return "true" === this.adapter.getSelectAnchorAttr("aria-required");
        }),
        (r.prototype.init = function () {
          var e = this.adapter.getAnchorElement();
          e && (this.adapter.setMenuAnchorElement(e), this.adapter.setMenuAnchorCorner($i.BOTTOM_START)),
            this.adapter.setMenuWrapFocus(!1),
            this.setDisabled(this.adapter.hasClass(gr.DISABLED)),
            this.syncHelperTextValidity(!this.adapter.hasClass(gr.INVALID)),
            this.layout(),
            this.layoutOptions();
        }),
        (r.prototype.blur = function () {
          this.adapter.removeClass(gr.FOCUSED),
            this.layout(),
            this.adapter.deactivateBottomLine(),
            this.adapter.hasClass(gr.REQUIRED) && this.useDefaultValidation && this.setValid(this.isValid());
        }),
        (r.prototype.syncHelperTextValidity = function (e) {
          if (this.helperText) {
            this.helperText.setValidity(e);
            var t = this.helperText.isVisible(),
              i = this.helperText.getId();
            t && i ? this.adapter.setSelectAnchorAttr(vr.ARIA_DESCRIBEDBY, i) : this.adapter.removeSelectAnchorAttr(vr.ARIA_DESCRIBEDBY);
          }
        }),
        (r.prototype.setClickDebounceTimeout = function () {
          var e = this;
          clearTimeout(this.clickDebounceTimeout),
            (this.clickDebounceTimeout = setTimeout(function () {
              e.recentlyClicked = !1;
            }, _r.CLICK_DEBOUNCE_TIMEOUT_MS)),
            (this.recentlyClicked = !0);
        }),
        r
      );
    })(br),
    yr = (e = {}) => {
      const t = {};
      for (const i in e) t[i] = e[i];
      return Object.assign(
        {
          badInput: !1,
          customError: !1,
          patternMismatch: !1,
          rangeOverflow: !1,
          rangeUnderflow: !1,
          stepMismatch: !1,
          tooLong: !1,
          tooShort: !1,
          typeMismatch: !1,
          valid: !0,
          valueMissing: !1,
        },
        t
      );
    };
  class wr extends Et {
    constructor() {
      super(...arguments),
        (this.mdcFoundationClass = xr),
        (this.disabled = !1),
        (this.outlined = !1),
        (this.label = ""),
        (this.outlineOpen = !1),
        (this.outlineWidth = 0),
        (this.value = ""),
        (this.name = ""),
        (this.selectedText = ""),
        (this.icon = ""),
        (this.menuOpen = !1),
        (this.helper = ""),
        (this.validateOnInitialRender = !1),
        (this.validationMessage = ""),
        (this.required = !1),
        (this.naturalMenuWidth = !1),
        (this.isUiValid = !0),
        (this.fixedMenuPosition = !1),
        (this.typeaheadState = { bufferClearTimeout: 0, currentFirstChar: "", sortedIndexCursor: 0, typeaheadBuffer: "" }),
        (this.sortedIndexByFirstChar = new Map()),
        (this.menuElement_ = null),
        (this.listeners = []),
        (this.onBodyClickBound = () => {}),
        (this._menuUpdateComplete = null),
        (this.valueSetDirectly = !1),
        (this.validityTransform = null),
        (this._validity = yr());
    }
    get items() {
      return this.menuElement_ || (this.menuElement_ = this.menuElement), this.menuElement_ ? this.menuElement_.items : [];
    }
    get selected() {
      const e = this.menuElement;
      return e ? e.selected : null;
    }
    get index() {
      const e = this.menuElement;
      return e ? e.index : -1;
    }
    get shouldRenderHelperText() {
      return !!this.helper || !!this.validationMessage;
    }
    get validity() {
      return this._checkValidity(this.value), this._validity;
    }
    render() {
      const e = {
          "mdc-select--disabled": this.disabled,
          "mdc-select--no-label": !this.label,
          "mdc-select--filled": !this.outlined,
          "mdc-select--outlined": this.outlined,
          "mdc-select--with-leading-icon": !!this.icon,
          "mdc-select--required": this.required,
          "mdc-select--invalid": !this.isUiValid,
        },
        t = this.label ? "label" : void 0,
        i = this.shouldRenderHelperText ? "helper-text" : void 0;
      return me`
      <div
          class="mdc-select ${rt(e)}">
        <input
            class="formElement"
            name="${this.name}"
            .value="${this.value}"
            hidden
            ?disabled="${this.disabled}"
            ?required=${this.required}>
        <!-- @ts-ignore -->
        <div class="mdc-select__anchor"
            aria-autocomplete="none"
            role="combobox"
            aria-expanded=${this.menuOpen}
            aria-invalid=${!this.isUiValid}
            aria-haspopup="listbox"
            aria-labelledby=${lt(t)}
            aria-required=${this.required}
            aria-describedby=${lt(i)}
            @click=${this.onClick}
            @focus=${this.onFocus}
            @blur=${this.onBlur}
            @keydown=${this.onKeydown}>
          ${this.renderRipple()}
          ${this.outlined ? this.renderOutline() : this.renderLabel()}
          ${this.renderLeadingIcon()}
          <span class="mdc-select__selected-text-container">
            <span class="mdc-select__selected-text">${this.selectedText}</span>
          </span>
          <span class="mdc-select__dropdown-icon">
            <svg
                class="mdc-select__dropdown-icon-graphic"
                viewBox="7 10 10 5"
                focusable="false">
              <polygon
                  class="mdc-select__dropdown-icon-inactive"
                  stroke="none"
                  fill-rule="evenodd"
                  points="7 10 12 15 17 10">
              </polygon>
              <polygon
                  class="mdc-select__dropdown-icon-active"
                  stroke="none"
                  fill-rule="evenodd"
                  points="7 15 12 10 17 15">
              </polygon>
            </svg>
          </span>
          ${this.renderLineRipple()}
        </div>
        ${this.renderMenu()}
      </div>
      ${this.renderHelperText()}`;
    }
    renderMenu() {
      const e = this.getMenuClasses();
      return me`
      <mwc-menu
        innerRole="listbox"
        wrapFocus
        class=" ${rt(e)}"
        activatable
        .fullwidth=${!this.fixedMenuPosition && !this.naturalMenuWidth}
        .open=${this.menuOpen}
        .anchor=${this.anchorElement}
        .fixed=${this.fixedMenuPosition}
        @selected=${this.onSelected}
        @opened=${this.onOpened}
        @closed=${this.onClosed}
        @items-updated=${this.onItemsUpdated}
        @keydown=${this.handleTypeahead}>
      ${this.renderMenuContent()}
    </mwc-menu>`;
    }
    getMenuClasses() {
      return { "mdc-select__menu": !0, "mdc-menu": !0, "mdc-menu-surface": !0, "mdc-select__menu--invalid": !this.isUiValid };
    }
    renderMenuContent() {
      return me`<slot></slot>`;
    }
    renderRipple() {
      return this.outlined
        ? ue
        : me`
      <span class="mdc-select__ripple"></span>
    `;
    }
    renderOutline() {
      return this.outlined
        ? me`
      <mwc-notched-outline
          .width=${this.outlineWidth}
          .open=${this.outlineOpen}
          class="mdc-notched-outline">
        ${this.renderLabel()}
      </mwc-notched-outline>`
        : ue;
    }
    renderLabel() {
      return this.label
        ? me`
      <span
          .floatingLabelFoundation=${pr(this.label)}
          id="label">${this.label}</span>
    `
        : ue;
    }
    renderLeadingIcon() {
      return this.icon ? me`<mwc-icon class="mdc-select__icon"><div>${this.icon}</div></mwc-icon>` : ue;
    }
    renderLineRipple() {
      return this.outlined
        ? ue
        : me`
      <span .lineRippleFoundation=${fr()}></span>
    `;
    }
    renderHelperText() {
      if (!this.shouldRenderHelperText) return ue;
      const e = this.validationMessage && !this.isUiValid;
      return me`
        <p
          class="mdc-select-helper-text ${rt({ "mdc-select-helper-text--validation-msg": e })}"
          id="helper-text">${e ? this.validationMessage : this.helper}</p>`;
    }
    createAdapter() {
      return Object.assign(Object.assign({}, ze(this.mdcRoot)), {
        activateBottomLine: () => {
          this.lineRippleElement && this.lineRippleElement.lineRippleFoundation.activate();
        },
        deactivateBottomLine: () => {
          this.lineRippleElement && this.lineRippleElement.lineRippleFoundation.deactivate();
        },
        hasLabel: () => !!this.label,
        floatLabel: (e) => {
          this.labelElement && this.labelElement.floatingLabelFoundation.float(e);
        },
        getLabelWidth: () => (this.labelElement ? this.labelElement.floatingLabelFoundation.getWidth() : 0),
        setLabelRequired: (e) => {
          this.labelElement && this.labelElement.floatingLabelFoundation.setRequired(e);
        },
        hasOutline: () => this.outlined,
        notchOutline: (e) => {
          this.outlineElement && !this.outlineOpen && ((this.outlineWidth = e), (this.outlineOpen = !0));
        },
        closeOutline: () => {
          this.outlineElement && (this.outlineOpen = !1);
        },
        setRippleCenter: (e) => {
          this.lineRippleElement && this.lineRippleElement.lineRippleFoundation.setRippleCenter(e);
        },
        notifyChange: async (e) => {
          if (!this.valueSetDirectly && e === this.value) return;
          (this.valueSetDirectly = !1), (this.value = e), await this.updateComplete;
          const t = new Event("change", { bubbles: !0 });
          this.dispatchEvent(t);
        },
        setSelectedText: (e) => (this.selectedText = e),
        isSelectAnchorFocused: () => {
          const e = this.anchorElement;
          return !!e && e.getRootNode().activeElement === e;
        },
        getSelectAnchorAttr: (e) => {
          const t = this.anchorElement;
          return t ? t.getAttribute(e) : null;
        },
        setSelectAnchorAttr: (e, t) => {
          const i = this.anchorElement;
          i && i.setAttribute(e, t);
        },
        removeSelectAnchorAttr: (e) => {
          const t = this.anchorElement;
          t && t.removeAttribute(e);
        },
        openMenu: () => {
          this.menuOpen = !0;
        },
        closeMenu: () => {
          this.menuOpen = !1;
        },
        addMenuClass: () => {},
        removeMenuClass: () => {},
        getAnchorElement: () => this.anchorElement,
        setMenuAnchorElement: () => {},
        setMenuAnchorCorner: () => {
          const e = this.menuElement;
          e && (e.corner = "BOTTOM_START");
        },
        setMenuWrapFocus: (e) => {
          const t = this.menuElement;
          t && (t.wrapFocus = e);
        },
        focusMenuItemAtIndex: (e) => {
          const t = this.menuElement;
          if (!t) return;
          const i = t.items[e];
          i && i.focus();
        },
        getMenuItemCount: () => {
          const e = this.menuElement;
          return e ? e.items.length : 0;
        },
        getMenuItemValues: () => {
          const e = this.menuElement;
          return e ? e.items.map((e) => e.value) : [];
        },
        getMenuItemTextAtIndex: (e) => {
          const t = this.menuElement;
          if (!t) return "";
          const i = t.items[e];
          return i ? i.text : "";
        },
        getSelectedIndex: () => this.index,
        setSelectedIndex: () => {},
        isTypeaheadInProgress: () => dr(this.typeaheadState),
        typeaheadMatchItem: (e, t) => {
          if (!this.menuElement) return -1;
          const i = {
              focusItemAtIndex: (e) => {
                this.menuElement.focusItemAtIndex(e);
              },
              focusedItemIndex: t || this.menuElement.getFocusedItemIndex(),
              nextChar: e,
              sortedIndexByFirstChar: this.sortedIndexByFirstChar,
              skipFocus: !1,
              isItemAtIndexDisabled: (e) => this.items[e].disabled,
            },
            r = ar(i, this.typeaheadState);
          return -1 !== r && this.select(r), r;
        },
      });
    }
    checkValidity() {
      const e = this._checkValidity(this.value);
      if (!e) {
        const e = new Event("invalid", { bubbles: !1, cancelable: !0 });
        this.dispatchEvent(e);
      }
      return e;
    }
    reportValidity() {
      const e = this.checkValidity();
      return (this.isUiValid = e), e;
    }
    _checkValidity(e) {
      const t = this.formElement.validity;
      let i = yr(t);
      if (this.validityTransform) {
        const t = this.validityTransform(e, i);
        i = Object.assign(Object.assign({}, i), t);
      }
      return (this._validity = i), this._validity.valid;
    }
    setCustomValidity(e) {
      (this.validationMessage = e), this.formElement.setCustomValidity(e);
    }
    async getUpdateComplete() {
      return await this._menuUpdateComplete, await super.getUpdateComplete();
    }
    async firstUpdated() {
      const e = this.menuElement;
      if (
        (e && ((this._menuUpdateComplete = e.updateComplete), await this._menuUpdateComplete),
        super.firstUpdated(),
        (this.mdcFoundation.isValid = () => !0),
        (this.mdcFoundation.setValid = () => {}),
        this.mdcFoundation.setDisabled(this.disabled),
        this.validateOnInitialRender && this.reportValidity(),
        !this.selected)
      ) {
        !this.items.length &&
          this.slotElement &&
          this.slotElement.assignedNodes({ flatten: !0 }).length &&
          (await new Promise((e) => requestAnimationFrame(e)), await this.layout());
        const e = this.items.length && "" === this.items[0].value;
        if (!this.value && e) return void this.select(0);
        this.selectByValue(this.value);
      }
      this.sortedIndexByFirstChar = or(this.items.length, (e) => this.items[e].text);
    }
    onItemsUpdated() {
      this.sortedIndexByFirstChar = or(this.items.length, (e) => this.items[e].text);
    }
    select(e) {
      const t = this.menuElement;
      t && t.select(e);
    }
    selectByValue(e) {
      let t = -1;
      for (let i = 0; i < this.items.length; i++)
        if (this.items[i].value === e) {
          t = i;
          break;
        }
      (this.valueSetDirectly = !0), this.select(t), this.mdcFoundation.handleChange();
    }
    disconnectedCallback() {
      super.disconnectedCallback();
      for (const e of this.listeners) e.target.removeEventListener(e.name, e.cb);
    }
    focus() {
      const e = new CustomEvent("focus"),
        t = this.anchorElement;
      t && (t.dispatchEvent(e), t.focus());
    }
    blur() {
      const e = new CustomEvent("blur"),
        t = this.anchorElement;
      t && (t.dispatchEvent(e), t.blur());
    }
    onFocus() {
      this.mdcFoundation && this.mdcFoundation.handleFocus();
    }
    onBlur() {
      this.mdcFoundation && this.mdcFoundation.handleBlur();
      const e = this.menuElement;
      e && !e.open && this.reportValidity();
    }
    onClick(e) {
      if (this.mdcFoundation) {
        this.focus();
        const t = e.target.getBoundingClientRect();
        let i = 0;
        i = "touches" in e ? e.touches[0].clientX : e.clientX;
        const r = i - t.left;
        this.mdcFoundation.handleClick(r);
      }
    }
    onKeydown(e) {
      const t = fi(e) === si.ARROW_UP,
        i = fi(e) === si.ARROW_DOWN;
      if (i || t) {
        const r = t && this.index > 0,
          n = i && this.index < this.items.length - 1;
        return r ? this.select(this.index - 1) : n && this.select(this.index + 1), e.preventDefault(), void this.mdcFoundation.openMenu();
      }
      this.mdcFoundation.handleKeydown(e);
    }
    handleTypeahead(e) {
      if (!this.menuElement) return;
      const t = this.menuElement.getFocusedItemIndex(),
        i = Me(e.target) ? e.target : null;
      !(function (e, t) {
        var i = e.event,
          r = e.isTargetListItem,
          n = e.focusedItemIndex,
          o = e.focusItemAtIndex,
          a = e.sortedIndexByFirstChar,
          d = e.isItemAtIndexDisabled,
          c = "ArrowLeft" === fi(i),
          s = "ArrowUp" === fi(i),
          l = "ArrowRight" === fi(i),
          p = "ArrowDown" === fi(i),
          m = "Home" === fi(i),
          h = "End" === fi(i),
          u = "Enter" === fi(i),
          f = "Spacebar" === fi(i);
        i.altKey ||
          i.ctrlKey ||
          i.metaKey ||
          c ||
          s ||
          l ||
          p ||
          m ||
          h ||
          u ||
          (f || 1 !== i.key.length
            ? f &&
              (r && nr(i),
              r &&
                dr(t) &&
                ar(
                  { focusItemAtIndex: o, focusedItemIndex: n, nextChar: " ", sortedIndexByFirstChar: a, skipFocus: !1, isItemAtIndexDisabled: d },
                  t
                ))
            : (nr(i),
              ar(
                {
                  focusItemAtIndex: o,
                  focusedItemIndex: n,
                  nextChar: i.key.toLowerCase(),
                  sortedIndexByFirstChar: a,
                  skipFocus: !1,
                  isItemAtIndexDisabled: d,
                },
                t
              )));
      })(
        {
          event: e,
          focusItemAtIndex: (e) => {
            this.menuElement.focusItemAtIndex(e);
          },
          focusedItemIndex: t,
          isTargetListItem: !!i && i.hasAttribute("mwc-list-item"),
          sortedIndexByFirstChar: this.sortedIndexByFirstChar,
          isItemAtIndexDisabled: (e) => this.items[e].disabled,
        },
        this.typeaheadState
      );
    }
    async onSelected(e) {
      this.mdcFoundation || (await this.updateComplete), this.mdcFoundation.handleMenuItemAction(e.detail.index);
      const t = this.items[e.detail.index];
      t && (this.value = t.value);
    }
    onOpened() {
      this.mdcFoundation && ((this.menuOpen = !0), this.mdcFoundation.handleMenuOpened());
    }
    onClosed() {
      this.mdcFoundation && ((this.menuOpen = !1), this.mdcFoundation.handleMenuClosed());
    }
    setFormData(e) {
      this.name && null !== this.selected && e.append(this.name, this.value);
    }
    async layout(e = !0) {
      this.mdcFoundation && this.mdcFoundation.layout(), await this.updateComplete;
      const t = this.menuElement;
      t && t.layout(e);
      const i = this.labelElement;
      if (!i) return void (this.outlineOpen = !1);
      const r = !!this.label && !!this.value;
      if ((i.floatingLabelFoundation.float(r), !this.outlined)) return;
      (this.outlineOpen = r), await this.updateComplete;
      const n = i.floatingLabelFoundation.getWidth();
      this.outlineOpen && (this.outlineWidth = n);
    }
    async layoutOptions() {
      this.mdcFoundation && this.mdcFoundation.layoutOptions();
    }
  }
  r([T(".mdc-select")], wr.prototype, "mdcRoot", void 0),
    r([T(".formElement")], wr.prototype, "formElement", void 0),
    r([T("slot")], wr.prototype, "slotElement", void 0),
    r([T("select")], wr.prototype, "nativeSelectElement", void 0),
    r([T("input")], wr.prototype, "nativeInputElement", void 0),
    r([T(".mdc-line-ripple")], wr.prototype, "lineRippleElement", void 0),
    r([T(".mdc-floating-label")], wr.prototype, "labelElement", void 0),
    r([T("mwc-notched-outline")], wr.prototype, "outlineElement", void 0),
    r([T(".mdc-menu")], wr.prototype, "menuElement", void 0),
    r([T(".mdc-select__anchor")], wr.prototype, "anchorElement", void 0),
    r(
      [
        y({ type: Boolean, attribute: "disabled", reflect: !0 }),
        Ot(function (e) {
          this.mdcFoundation && this.mdcFoundation.setDisabled(e);
        }),
      ],
      wr.prototype,
      "disabled",
      void 0
    ),
    r(
      [
        y({ type: Boolean }),
        Ot(function (e, t) {
          void 0 !== t && this.outlined !== t && this.layout(!1);
        }),
      ],
      wr.prototype,
      "outlined",
      void 0
    ),
    r(
      [
        y({ type: String }),
        Ot(function (e, t) {
          void 0 !== t && this.label !== t && this.layout(!1);
        }),
      ],
      wr.prototype,
      "label",
      void 0
    ),
    r([w()], wr.prototype, "outlineOpen", void 0),
    r([w()], wr.prototype, "outlineWidth", void 0),
    r(
      [
        y({ type: String }),
        Ot(function (e) {
          if (this.mdcFoundation) {
            const t = null === this.selected && !!e,
              i = this.selected && this.selected.value !== e;
            (t || i) && this.selectByValue(e), this.reportValidity();
          }
        }),
      ],
      wr.prototype,
      "value",
      void 0
    ),
    r([y()], wr.prototype, "name", void 0),
    r([w()], wr.prototype, "selectedText", void 0),
    r([y({ type: String })], wr.prototype, "icon", void 0),
    r([w()], wr.prototype, "menuOpen", void 0),
    r([y({ type: String })], wr.prototype, "helper", void 0),
    r([y({ type: Boolean })], wr.prototype, "validateOnInitialRender", void 0),
    r([y({ type: String })], wr.prototype, "validationMessage", void 0),
    r([y({ type: Boolean })], wr.prototype, "required", void 0),
    r([y({ type: Boolean })], wr.prototype, "naturalMenuWidth", void 0),
    r([w()], wr.prototype, "isUiValid", void 0),
    r([y({ type: Boolean })], wr.prototype, "fixedMenuPosition", void 0),
    r([k({ capture: !0 })], wr.prototype, "handleTypeahead", null);
  const Er = P`.mdc-floating-label{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);position:absolute;left:0;-webkit-transform-origin:left top;transform-origin:left top;line-height:1.15rem;text-align:left;text-overflow:ellipsis;white-space:nowrap;cursor:text;overflow:hidden;will-change:transform;transition:transform 150ms cubic-bezier(0.4, 0, 0.2, 1),color 150ms cubic-bezier(0.4, 0, 0.2, 1)}[dir=rtl] .mdc-floating-label,.mdc-floating-label[dir=rtl]{right:0;left:auto;-webkit-transform-origin:right top;transform-origin:right top;text-align:right}.mdc-floating-label--float-above{cursor:auto}.mdc-floating-label--required::after{margin-left:1px;margin-right:0px;content:"*"}[dir=rtl] .mdc-floating-label--required::after,.mdc-floating-label--required[dir=rtl]::after{margin-left:0;margin-right:1px}.mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-standard 250ms 1}@keyframes mdc-floating-label-shake-float-above-standard{0%{transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-106%) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-106%) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75)}}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-line-ripple::before,.mdc-line-ripple::after{position:absolute;bottom:0;left:0;width:100%;border-bottom-style:solid;content:""}.mdc-line-ripple::before{border-bottom-width:1px}.mdc-line-ripple::before{z-index:1}.mdc-line-ripple::after{transform:scaleX(0);border-bottom-width:2px;opacity:0;z-index:2}.mdc-line-ripple::after{transition:transform 180ms cubic-bezier(0.4, 0, 0.2, 1),opacity 180ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-line-ripple--active::after{transform:scaleX(1);opacity:1}.mdc-line-ripple--deactivating::after{opacity:0}.mdc-notched-outline{display:flex;position:absolute;top:0;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] .mdc-notched-outline,.mdc-notched-outline[dir=rtl]{text-align:right}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{box-sizing:border-box;height:100%;border-top:1px solid;border-bottom:1px solid;pointer-events:none}.mdc-notched-outline__leading{border-left:1px solid;border-right:none;width:12px}[dir=rtl] .mdc-notched-outline__leading,.mdc-notched-outline__leading[dir=rtl]{border-left:none;border-right:1px solid}.mdc-notched-outline__trailing{border-left:none;border-right:1px solid;flex-grow:1}[dir=rtl] .mdc-notched-outline__trailing,.mdc-notched-outline__trailing[dir=rtl]{border-left:1px solid;border-right:none}.mdc-notched-outline__notch{flex:0 0 auto;width:auto;max-width:calc(100% - 12px * 2)}.mdc-notched-outline .mdc-floating-label{display:inline-block;position:relative;max-width:100%}.mdc-notched-outline .mdc-floating-label--float-above{text-overflow:clip}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:calc(100% / 0.75)}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:0;padding-right:8px;border-top:none}[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch,.mdc-notched-outline--notched .mdc-notched-outline__notch[dir=rtl]{padding-left:8px;padding-right:0}.mdc-notched-outline--no-label .mdc-notched-outline__notch{display:none}.mdc-select{display:inline-flex;position:relative}.mdc-select:not(.mdc-select--disabled) .mdc-select__selected-text{color:rgba(0, 0, 0, 0.87)}.mdc-select.mdc-select--disabled .mdc-select__selected-text{color:rgba(0, 0, 0, 0.38)}.mdc-select:not(.mdc-select--disabled) .mdc-floating-label{color:rgba(0, 0, 0, 0.6)}.mdc-select:not(.mdc-select--disabled).mdc-select--focused .mdc-floating-label{color:rgba(98, 0, 238, 0.87)}.mdc-select.mdc-select--disabled .mdc-floating-label{color:rgba(0, 0, 0, 0.38)}.mdc-select:not(.mdc-select--disabled) .mdc-select__dropdown-icon{fill:rgba(0, 0, 0, 0.54)}.mdc-select:not(.mdc-select--disabled).mdc-select--focused .mdc-select__dropdown-icon{fill:#6200ee;fill:var(--mdc-theme-primary, #6200ee)}.mdc-select.mdc-select--disabled .mdc-select__dropdown-icon{fill:rgba(0, 0, 0, 0.38)}.mdc-select:not(.mdc-select--disabled)+.mdc-select-helper-text{color:rgba(0, 0, 0, 0.6)}.mdc-select.mdc-select--disabled+.mdc-select-helper-text{color:rgba(0, 0, 0, 0.38)}.mdc-select:not(.mdc-select--disabled) .mdc-select__icon{color:rgba(0, 0, 0, 0.54)}.mdc-select.mdc-select--disabled .mdc-select__icon{color:rgba(0, 0, 0, 0.38)}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-select.mdc-select--disabled .mdc-select__selected-text{color:GrayText}.mdc-select.mdc-select--disabled .mdc-select__dropdown-icon{fill:red}.mdc-select.mdc-select--disabled .mdc-floating-label{color:GrayText}.mdc-select.mdc-select--disabled .mdc-line-ripple::before{border-bottom-color:GrayText}.mdc-select.mdc-select--disabled .mdc-notched-outline__leading,.mdc-select.mdc-select--disabled .mdc-notched-outline__notch,.mdc-select.mdc-select--disabled .mdc-notched-outline__trailing{border-color:GrayText}.mdc-select.mdc-select--disabled .mdc-select__icon{color:GrayText}.mdc-select.mdc-select--disabled+.mdc-select-helper-text{color:GrayText}}.mdc-select .mdc-floating-label{top:50%;transform:translateY(-50%);pointer-events:none}.mdc-select .mdc-select__anchor{padding-left:16px;padding-right:0}[dir=rtl] .mdc-select .mdc-select__anchor,.mdc-select .mdc-select__anchor[dir=rtl]{padding-left:0;padding-right:16px}.mdc-select.mdc-select--with-leading-icon .mdc-select__anchor{padding-left:0;padding-right:0}[dir=rtl] .mdc-select.mdc-select--with-leading-icon .mdc-select__anchor,.mdc-select.mdc-select--with-leading-icon .mdc-select__anchor[dir=rtl]{padding-left:0;padding-right:0}.mdc-select .mdc-select__icon{width:24px;height:24px;font-size:24px}.mdc-select .mdc-select__dropdown-icon{width:24px;height:24px}.mdc-select .mdc-select__menu .mdc-deprecated-list-item{padding-left:16px;padding-right:16px}[dir=rtl] .mdc-select .mdc-select__menu .mdc-deprecated-list-item,.mdc-select .mdc-select__menu .mdc-deprecated-list-item[dir=rtl]{padding-left:16px;padding-right:16px}.mdc-select .mdc-select__menu .mdc-deprecated-list-item__graphic{margin-left:0;margin-right:12px}[dir=rtl] .mdc-select .mdc-select__menu .mdc-deprecated-list-item__graphic,.mdc-select .mdc-select__menu .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:12px;margin-right:0}.mdc-select__dropdown-icon{margin-left:12px;margin-right:12px;display:inline-flex;position:relative;align-self:center;align-items:center;justify-content:center;flex-shrink:0;pointer-events:none}.mdc-select__dropdown-icon .mdc-select__dropdown-icon-active,.mdc-select__dropdown-icon .mdc-select__dropdown-icon-inactive{position:absolute;top:0;left:0}.mdc-select__dropdown-icon .mdc-select__dropdown-icon-graphic{width:41.6666666667%;height:20.8333333333%}.mdc-select__dropdown-icon .mdc-select__dropdown-icon-inactive{opacity:1;transition:opacity 75ms linear 75ms}.mdc-select__dropdown-icon .mdc-select__dropdown-icon-active{opacity:0;transition:opacity 75ms linear}[dir=rtl] .mdc-select__dropdown-icon,.mdc-select__dropdown-icon[dir=rtl]{margin-left:12px;margin-right:12px}.mdc-select--activated .mdc-select__dropdown-icon .mdc-select__dropdown-icon-inactive{opacity:0;transition:opacity 49.5ms linear}.mdc-select--activated .mdc-select__dropdown-icon .mdc-select__dropdown-icon-active{opacity:1;transition:opacity 100.5ms linear 49.5ms}.mdc-select__anchor{width:200px;min-width:0;flex:1 1 auto;position:relative;box-sizing:border-box;overflow:hidden;outline:none;cursor:pointer}.mdc-select__anchor .mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-select__selected-text-container{display:flex;appearance:none;pointer-events:none;box-sizing:border-box;width:auto;min-width:0;flex-grow:1;height:28px;border:none;outline:none;padding:0;background-color:transparent;color:inherit}.mdc-select__selected-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);line-height:1.75rem;line-height:var(--mdc-typography-subtitle1-line-height, 1.75rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;width:100%;text-align:left}[dir=rtl] .mdc-select__selected-text,.mdc-select__selected-text[dir=rtl]{text-align:right}.mdc-select--invalid:not(.mdc-select--disabled) .mdc-floating-label{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-floating-label{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--invalid+.mdc-select-helper-text--validation-msg{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled) .mdc-select__dropdown-icon{fill:#b00020;fill:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-select__dropdown-icon{fill:#b00020;fill:var(--mdc-theme-error, #b00020)}.mdc-select--disabled{cursor:default;pointer-events:none}.mdc-select--with-leading-icon .mdc-select__menu .mdc-deprecated-list-item{padding-left:12px;padding-right:12px}[dir=rtl] .mdc-select--with-leading-icon .mdc-select__menu .mdc-deprecated-list-item,.mdc-select--with-leading-icon .mdc-select__menu .mdc-deprecated-list-item[dir=rtl]{padding-left:12px;padding-right:12px}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-select__menu::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid transparent;border-radius:inherit;content:"";pointer-events:none}}@media screen and (forced-colors: active)and (forced-colors: active),screen and (-ms-high-contrast: active)and (forced-colors: active){.mdc-select__menu::before{border-color:CanvasText}}.mdc-select__menu .mdc-deprecated-list .mdc-select__icon,.mdc-select__menu .mdc-list .mdc-select__icon{margin-left:0;margin-right:0}[dir=rtl] .mdc-select__menu .mdc-deprecated-list .mdc-select__icon,[dir=rtl] .mdc-select__menu .mdc-list .mdc-select__icon,.mdc-select__menu .mdc-deprecated-list .mdc-select__icon[dir=rtl],.mdc-select__menu .mdc-list .mdc-select__icon[dir=rtl]{margin-left:0;margin-right:0}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--activated,.mdc-select__menu .mdc-list .mdc-deprecated-list-item--selected,.mdc-select__menu .mdc-list .mdc-deprecated-list-item--activated{color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected .mdc-deprecated-list-item__graphic,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--activated .mdc-deprecated-list-item__graphic,.mdc-select__menu .mdc-list .mdc-deprecated-list-item--selected .mdc-deprecated-list-item__graphic,.mdc-select__menu .mdc-list .mdc-deprecated-list-item--activated .mdc-deprecated-list-item__graphic{color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-select__menu .mdc-list-item__start{display:inline-flex;align-items:center}.mdc-select__option{padding-left:16px;padding-right:16px}[dir=rtl] .mdc-select__option,.mdc-select__option[dir=rtl]{padding-left:16px;padding-right:16px}.mdc-select__one-line-option.mdc-list-item--with-one-line{height:48px}.mdc-select__two-line-option.mdc-list-item--with-two-lines{height:64px}.mdc-select__two-line-option.mdc-list-item--with-two-lines .mdc-list-item__start{margin-top:20px}.mdc-select__two-line-option.mdc-list-item--with-two-lines .mdc-list-item__primary-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-select__two-line-option.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before{display:inline-block;width:0;height:28px;content:"";vertical-align:0}.mdc-select__two-line-option.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-select__two-line-option.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end{display:block;margin-top:0;line-height:normal}.mdc-select__two-line-option.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before{display:inline-block;width:0;height:36px;content:"";vertical-align:0}.mdc-select__option-with-leading-content{padding-left:0;padding-right:12px}.mdc-select__option-with-leading-content.mdc-list-item{padding-left:0;padding-right:auto}[dir=rtl] .mdc-select__option-with-leading-content.mdc-list-item,.mdc-select__option-with-leading-content.mdc-list-item[dir=rtl]{padding-left:auto;padding-right:0}.mdc-select__option-with-leading-content .mdc-list-item__start{margin-left:12px;margin-right:0}[dir=rtl] .mdc-select__option-with-leading-content .mdc-list-item__start,.mdc-select__option-with-leading-content .mdc-list-item__start[dir=rtl]{margin-left:0;margin-right:12px}.mdc-select__option-with-leading-content .mdc-list-item__start{width:36px;height:24px}[dir=rtl] .mdc-select__option-with-leading-content,.mdc-select__option-with-leading-content[dir=rtl]{padding-left:12px;padding-right:0}.mdc-select__option-with-meta.mdc-list-item{padding-left:auto;padding-right:0}[dir=rtl] .mdc-select__option-with-meta.mdc-list-item,.mdc-select__option-with-meta.mdc-list-item[dir=rtl]{padding-left:0;padding-right:auto}.mdc-select__option-with-meta .mdc-list-item__end{margin-left:12px;margin-right:12px}[dir=rtl] .mdc-select__option-with-meta .mdc-list-item__end,.mdc-select__option-with-meta .mdc-list-item__end[dir=rtl]{margin-left:12px;margin-right:12px}.mdc-select--filled .mdc-select__anchor{height:56px;display:flex;align-items:baseline}.mdc-select--filled .mdc-select__anchor::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}.mdc-select--filled.mdc-select--no-label .mdc-select__anchor .mdc-select__selected-text::before{content:"​"}.mdc-select--filled.mdc-select--no-label .mdc-select__anchor .mdc-select__selected-text-container{height:100%;display:inline-flex;align-items:center}.mdc-select--filled.mdc-select--no-label .mdc-select__anchor::before{display:none}.mdc-select--filled .mdc-select__anchor{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:0;border-bottom-left-radius:0}.mdc-select--filled:not(.mdc-select--disabled) .mdc-select__anchor{background-color:whitesmoke}.mdc-select--filled.mdc-select--disabled .mdc-select__anchor{background-color:#fafafa}.mdc-select--filled:not(.mdc-select--disabled) .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.42)}.mdc-select--filled:not(.mdc-select--disabled):hover .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.87)}.mdc-select--filled:not(.mdc-select--disabled) .mdc-line-ripple::after{border-bottom-color:#6200ee;border-bottom-color:var(--mdc-theme-primary, #6200ee)}.mdc-select--filled.mdc-select--disabled .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.06)}.mdc-select--filled .mdc-floating-label{max-width:calc(100% - 64px)}.mdc-select--filled .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 64px / 0.75)}.mdc-select--filled .mdc-menu-surface--is-open-below{border-top-left-radius:0px;border-top-right-radius:0px}.mdc-select--filled.mdc-select--focused.mdc-line-ripple::after{transform:scale(1, 2);opacity:1}.mdc-select--filled .mdc-floating-label{left:16px;right:initial}[dir=rtl] .mdc-select--filled .mdc-floating-label,.mdc-select--filled .mdc-floating-label[dir=rtl]{left:initial;right:16px}.mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label{left:48px;right:initial}[dir=rtl] .mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label,.mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label[dir=rtl]{left:initial;right:48px}.mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label{max-width:calc(100% - 96px)}.mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 96px / 0.75)}.mdc-select--invalid:not(.mdc-select--disabled) .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled):hover .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled) .mdc-line-ripple::after{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-select--outlined{border:none}.mdc-select--outlined .mdc-select__anchor{height:56px}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--float-above{transform:translateY(-37.25px) scale(1)}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--float-above{font-size:.75rem}.mdc-select--outlined .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) scale(0.75)}.mdc-select--outlined .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-select-outlined-56px 250ms 1}@keyframes mdc-floating-label-shake-float-above-select-outlined-56px{0%{transform:translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75)}}.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__leading{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}[dir=rtl] .mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__leading[dir=rtl]{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}@supports(top: max(0%)){.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__leading{width:max(12px, var(--mdc-shape-small, 4px))}}@supports(top: max(0%)){.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__notch{max-width:calc(100% - max(12px, var(--mdc-shape-small, 4px)) * 2)}}.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__trailing{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}[dir=rtl] .mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__trailing,.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl]{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}@supports(top: max(0%)){.mdc-select--outlined .mdc-select__anchor{padding-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}[dir=rtl] .mdc-select--outlined .mdc-select__anchor,.mdc-select--outlined .mdc-select__anchor[dir=rtl]{padding-left:0}@supports(top: max(0%)){[dir=rtl] .mdc-select--outlined .mdc-select__anchor,.mdc-select--outlined .mdc-select__anchor[dir=rtl]{padding-right:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}@supports(top: max(0%)){.mdc-select--outlined+.mdc-select-helper-text{margin-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}[dir=rtl] .mdc-select--outlined+.mdc-select-helper-text,.mdc-select--outlined+.mdc-select-helper-text[dir=rtl]{margin-left:0}@supports(top: max(0%)){[dir=rtl] .mdc-select--outlined+.mdc-select-helper-text,.mdc-select--outlined+.mdc-select-helper-text[dir=rtl]{margin-right:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}.mdc-select--outlined:not(.mdc-select--disabled) .mdc-select__anchor{background-color:transparent}.mdc-select--outlined.mdc-select--disabled .mdc-select__anchor{background-color:transparent}.mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__leading,.mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__notch,.mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.38)}.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.87)}.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-width:2px}.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-color:#6200ee;border-color:var(--mdc-theme-primary, #6200ee)}.mdc-select--outlined.mdc-select--disabled .mdc-notched-outline__leading,.mdc-select--outlined.mdc-select--disabled .mdc-notched-outline__notch,.mdc-select--outlined.mdc-select--disabled .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.06)}.mdc-select--outlined .mdc-select__anchor :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mdc-select--outlined .mdc-select__anchor{display:flex;align-items:baseline;overflow:visible}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-select-outlined 250ms 1}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--float-above{transform:translateY(-37.25px) scale(1)}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--float-above{font-size:.75rem}.mdc-select--outlined .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) scale(0.75)}.mdc-select--outlined .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:1px}.mdc-select--outlined .mdc-select__anchor .mdc-select__selected-text::before{content:"​"}.mdc-select--outlined .mdc-select__anchor .mdc-select__selected-text-container{height:100%;display:inline-flex;align-items:center}.mdc-select--outlined .mdc-select__anchor::before{display:none}.mdc-select--outlined .mdc-select__selected-text-container{display:flex;border:none;z-index:1;background-color:transparent}.mdc-select--outlined .mdc-select__icon{z-index:2}.mdc-select--outlined .mdc-floating-label{line-height:1.15rem;left:4px;right:initial}[dir=rtl] .mdc-select--outlined .mdc-floating-label,.mdc-select--outlined .mdc-floating-label[dir=rtl]{left:initial;right:4px}.mdc-select--outlined.mdc-select--focused .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:2px}.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled) .mdc-notched-outline__leading,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled) .mdc-notched-outline__notch,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled) .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-width:2px}.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label{left:36px;right:initial}[dir=rtl] .mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label,.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label[dir=rtl]{left:initial;right:36px}.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--float-above{transform:translateY(-37.25px) translateX(-32px) scale(1)}[dir=rtl] .mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--float-above,.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-37.25px) translateX(32px) scale(1)}.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--float-above{font-size:.75rem}.mdc-select--outlined.mdc-select--with-leading-icon.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined.mdc-select--with-leading-icon .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) translateX(-32px) scale(0.75)}[dir=rtl] .mdc-select--outlined.mdc-select--with-leading-icon.mdc-notched-outline--upgraded .mdc-floating-label--float-above,[dir=rtl] .mdc-select--outlined.mdc-select--with-leading-icon .mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined.mdc-select--with-leading-icon.mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl],.mdc-select--outlined.mdc-select--with-leading-icon .mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-34.75px) translateX(32px) scale(0.75)}.mdc-select--outlined.mdc-select--with-leading-icon.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined.mdc-select--with-leading-icon .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-select-outlined-leading-icon-56px 250ms 1}@keyframes mdc-floating-label-shake-float-above-select-outlined-leading-icon-56px{0%{transform:translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 32px)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 32px)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75)}}[dir=rtl] .mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--shake,.mdc-select--outlined.mdc-select--with-leading-icon[dir=rtl] .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-select-outlined-leading-icon-56px 250ms 1}@keyframes mdc-floating-label-shake-float-above-select-outlined-leading-icon-56px-rtl{0%{transform:translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - -32px)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - -32px)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75)}}.mdc-select--outlined.mdc-select--with-leading-icon .mdc-select__anchor :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 96px)}.mdc-select--outlined .mdc-menu-surface{margin-bottom:8px}.mdc-select--outlined.mdc-select--no-label .mdc-menu-surface,.mdc-select--outlined .mdc-menu-surface--is-open-below{margin-bottom:0}.mdc-select__anchor{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity}.mdc-select__anchor .mdc-select__ripple::before,.mdc-select__anchor .mdc-select__ripple::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-select__anchor .mdc-select__ripple::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-select__anchor .mdc-select__ripple::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-select__anchor.mdc-ripple-upgraded .mdc-select__ripple::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-select__anchor.mdc-ripple-upgraded .mdc-select__ripple::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-select__anchor.mdc-ripple-upgraded--unbounded .mdc-select__ripple::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-select__anchor.mdc-ripple-upgraded--foreground-activation .mdc-select__ripple::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-select__anchor.mdc-ripple-upgraded--foreground-deactivation .mdc-select__ripple::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-select__anchor .mdc-select__ripple::before,.mdc-select__anchor .mdc-select__ripple::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-select__anchor.mdc-ripple-upgraded .mdc-select__ripple::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-select__anchor .mdc-select__ripple::before,.mdc-select__anchor .mdc-select__ripple::after{background-color:rgba(0, 0, 0, 0.87);background-color:var(--mdc-ripple-color, rgba(0, 0, 0, 0.87))}.mdc-select__anchor:hover .mdc-select__ripple::before,.mdc-select__anchor.mdc-ripple-surface--hover .mdc-select__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-select__anchor.mdc-ripple-upgraded--background-focused .mdc-select__ripple::before,.mdc-select__anchor:not(.mdc-ripple-upgraded):focus .mdc-select__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-select__anchor .mdc-select__ripple{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected .mdc-deprecated-list-item__ripple::before,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected .mdc-deprecated-list-item__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, var(--mdc-theme-on-surface, #000))}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:hover .mdc-deprecated-list-item__ripple::before,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected.mdc-ripple-surface--hover .mdc-deprecated-list-item__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected.mdc-ripple-upgraded--background-focused .mdc-deprecated-list-item__ripple::before,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded):focus .mdc-deprecated-list-item__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded) .mdc-deprecated-list-item__ripple::after{transition:opacity 150ms linear}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded):active .mdc-deprecated-list-item__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected .mdc-list-item__ripple::before,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected .mdc-list-item__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, var(--mdc-theme-on-surface, #000))}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:hover .mdc-list-item__ripple::before,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected.mdc-ripple-surface--hover .mdc-list-item__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected.mdc-ripple-upgraded--background-focused .mdc-list-item__ripple::before,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded):focus .mdc-list-item__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded) .mdc-list-item__ripple::after{transition:opacity 150ms linear}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded):active .mdc-list-item__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-select-helper-text{margin:0;margin-left:16px;margin-right:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit);display:block;margin-top:0;line-height:normal}[dir=rtl] .mdc-select-helper-text,.mdc-select-helper-text[dir=rtl]{margin-left:16px;margin-right:16px}.mdc-select-helper-text::before{display:inline-block;width:0;height:16px;content:"";vertical-align:0}.mdc-select-helper-text--validation-msg{opacity:0;transition:opacity 180ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-select--invalid+.mdc-select-helper-text--validation-msg,.mdc-select-helper-text--validation-msg-persistent{opacity:1}.mdc-select--with-leading-icon .mdc-select__icon{display:inline-block;box-sizing:border-box;border:none;text-decoration:none;cursor:pointer;user-select:none;flex-shrink:0;align-self:center;background-color:transparent;fill:currentColor}.mdc-select--with-leading-icon .mdc-select__icon{margin-left:12px;margin-right:12px}[dir=rtl] .mdc-select--with-leading-icon .mdc-select__icon,.mdc-select--with-leading-icon .mdc-select__icon[dir=rtl]{margin-left:12px;margin-right:12px}.mdc-select__icon:not([tabindex]),.mdc-select__icon[tabindex="-1"]{cursor:default;pointer-events:none}.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}:host{display:inline-block;vertical-align:top;outline:none}.mdc-select{width:100%}[hidden]{display:none}.mdc-select__icon{z-index:2}.mdc-select--with-leading-icon{--mdc-list-item-graphic-margin: calc( 48px - var(--mdc-list-item-graphic-size, 24px) - var(--mdc-list-side-padding, 16px) )}.mdc-select .mdc-select__anchor .mdc-select__selected-text{overflow:hidden}.mdc-select .mdc-select__anchor *{display:inline-flex}.mdc-select .mdc-select__anchor .mdc-floating-label{display:inline-block}mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-select-outlined-idle-border-color, rgba(0, 0, 0, 0.38) );--mdc-notched-outline-notch-offset: 1px}:host(:not([disabled]):hover) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-select-outlined-hover-border-color, rgba(0, 0, 0, 0.87) )}:host(:not([disabled])) .mdc-select:not(.mdc-select--disabled) .mdc-select__selected-text{color:rgba(0, 0, 0, 0.87);color:var(--mdc-select-ink-color, rgba(0, 0, 0, 0.87))}:host(:not([disabled])) .mdc-select:not(.mdc-select--disabled) .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.42);border-bottom-color:var(--mdc-select-idle-line-color, rgba(0, 0, 0, 0.42))}:host(:not([disabled])) .mdc-select:not(.mdc-select--disabled):hover .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.87);border-bottom-color:var(--mdc-select-hover-line-color, rgba(0, 0, 0, 0.87))}:host(:not([disabled])) .mdc-select:not(.mdc-select--outlined):not(.mdc-select--disabled) .mdc-select__anchor{background-color:whitesmoke;background-color:var(--mdc-select-fill-color, whitesmoke)}:host(:not([disabled])) .mdc-select.mdc-select--invalid .mdc-select__dropdown-icon{fill:var(--mdc-select-error-dropdown-icon-color, var(--mdc-select-error-color, var(--mdc-theme-error, #b00020)))}:host(:not([disabled])) .mdc-select.mdc-select--invalid .mdc-floating-label,:host(:not([disabled])) .mdc-select.mdc-select--invalid .mdc-floating-label::after{color:var(--mdc-select-error-color, var(--mdc-theme-error, #b00020))}:host(:not([disabled])) .mdc-select.mdc-select--invalid mwc-notched-outline{--mdc-notched-outline-border-color: var(--mdc-select-error-color, var(--mdc-theme-error, #b00020))}.mdc-select__menu--invalid{--mdc-theme-primary: var(--mdc-select-error-color, var(--mdc-theme-error, #b00020))}:host(:not([disabled])) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) .mdc-floating-label,:host(:not([disabled])) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) .mdc-floating-label::after{color:rgba(0, 0, 0, 0.6);color:var(--mdc-select-label-ink-color, rgba(0, 0, 0, 0.6))}:host(:not([disabled])) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) .mdc-select__dropdown-icon{fill:rgba(0, 0, 0, 0.54);fill:var(--mdc-select-dropdown-icon-color, rgba(0, 0, 0, 0.54))}:host(:not([disabled])) .mdc-select.mdc-select--focused mwc-notched-outline{--mdc-notched-outline-stroke-width: 2px;--mdc-notched-outline-notch-offset: 2px}:host(:not([disabled])) .mdc-select.mdc-select--focused:not(.mdc-select--invalid) mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-select-focused-label-color, var(--mdc-theme-primary, rgba(98, 0, 238, 0.87)) )}:host(:not([disabled])) .mdc-select.mdc-select--focused:not(.mdc-select--invalid) .mdc-select__dropdown-icon{fill:rgba(98,0,238,.87);fill:var(--mdc-select-focused-dropdown-icon-color, var(--mdc-theme-primary, rgba(98, 0, 238, 0.87)))}:host(:not([disabled])) .mdc-select.mdc-select--focused:not(.mdc-select--invalid) .mdc-floating-label{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host(:not([disabled])) .mdc-select.mdc-select--focused:not(.mdc-select--invalid) .mdc-floating-label::after{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host(:not([disabled])) .mdc-select-helper-text:not(.mdc-select-helper-text--validation-msg){color:var(--mdc-select-label-ink-color, rgba(0, 0, 0, 0.6))}:host([disabled]){pointer-events:none}:host([disabled]) .mdc-select:not(.mdc-select--outlined).mdc-select--disabled .mdc-select__anchor{background-color:#fafafa;background-color:var(--mdc-select-disabled-fill-color, #fafafa)}:host([disabled]) .mdc-select.mdc-select--outlined mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-select-outlined-disabled-border-color, rgba(0, 0, 0, 0.06) )}:host([disabled]) .mdc-select .mdc-select__dropdown-icon{fill:rgba(0, 0, 0, 0.38);fill:var(--mdc-select-disabled-dropdown-icon-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) .mdc-floating-label,:host([disabled]) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) .mdc-floating-label::after{color:rgba(0, 0, 0, 0.38);color:var(--mdc-select-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-select-helper-text{color:rgba(0, 0, 0, 0.38);color:var(--mdc-select-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-select__selected-text{color:rgba(0, 0, 0, 0.38);color:var(--mdc-select-disabled-ink-color, rgba(0, 0, 0, 0.38))}`;
  let kr = class extends wr {};
  (kr.styles = [Er]), (kr = r([_("mwc-select")], kr));
  const Tr = P`.mdc-slider{cursor:pointer;height:48px;margin:0 24px;position:relative;touch-action:pan-y}.mdc-slider .mdc-slider__track{height:4px;position:absolute;top:50%;transform:translateY(-50%);width:100%}.mdc-slider .mdc-slider__track--active,.mdc-slider .mdc-slider__track--inactive{display:flex;height:100%;position:absolute;width:100%}.mdc-slider .mdc-slider__track--active{border-radius:3px;height:6px;overflow:hidden;top:-1px}.mdc-slider .mdc-slider__track--active_fill{border-top:6px solid;box-sizing:border-box;height:100%;width:100%;position:relative;-webkit-transform-origin:left;transform-origin:left}[dir=rtl] .mdc-slider .mdc-slider__track--active_fill,.mdc-slider .mdc-slider__track--active_fill[dir=rtl]{-webkit-transform-origin:right;transform-origin:right}.mdc-slider .mdc-slider__track--inactive{border-radius:2px;height:4px;left:0;top:0}.mdc-slider .mdc-slider__track--inactive::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid transparent;border-radius:inherit;content:"";pointer-events:none}@media screen and (forced-colors: active){.mdc-slider .mdc-slider__track--inactive::before{border-color:CanvasText}}.mdc-slider .mdc-slider__track--active_fill{border-color:#6200ee;border-color:var(--mdc-theme-primary, #6200ee)}.mdc-slider.mdc-slider--disabled .mdc-slider__track--active_fill{border-color:#000;border-color:var(--mdc-theme-on-surface, #000)}.mdc-slider .mdc-slider__track--inactive{background-color:#6200ee;background-color:var(--mdc-theme-primary, #6200ee);opacity:.24}.mdc-slider.mdc-slider--disabled .mdc-slider__track--inactive{background-color:#000;background-color:var(--mdc-theme-on-surface, #000);opacity:.24}.mdc-slider .mdc-slider__value-indicator-container{bottom:44px;left:50%;left:var(--slider-value-indicator-container-left, 50%);pointer-events:none;position:absolute;right:var(--slider-value-indicator-container-right);transform:translateX(-50%);transform:var(--slider-value-indicator-container-transform, translateX(-50%))}.mdc-slider .mdc-slider__value-indicator{transition:transform 100ms 0ms cubic-bezier(0.4, 0, 1, 1);align-items:center;border-radius:4px;display:flex;height:32px;padding:0 12px;transform:scale(0);transform-origin:bottom}.mdc-slider .mdc-slider__value-indicator::before{border-left:6px solid transparent;border-right:6px solid transparent;border-top:6px solid;bottom:-5px;content:"";height:0;left:50%;left:var(--slider-value-indicator-caret-left, 50%);position:absolute;right:var(--slider-value-indicator-caret-right);transform:translateX(-50%);transform:var(--slider-value-indicator-caret-transform, translateX(-50%));width:0}.mdc-slider .mdc-slider__value-indicator::after{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid transparent;border-radius:inherit;content:"";pointer-events:none}@media screen and (forced-colors: active){.mdc-slider .mdc-slider__value-indicator::after{border-color:CanvasText}}.mdc-slider .mdc-slider__thumb--with-indicator .mdc-slider__value-indicator-container{pointer-events:auto}.mdc-slider .mdc-slider__thumb--with-indicator .mdc-slider__value-indicator{transition:transform 100ms 0ms cubic-bezier(0, 0, 0.2, 1);transform:scale(1)}@media(prefers-reduced-motion){.mdc-slider .mdc-slider__value-indicator,.mdc-slider .mdc-slider__thumb--with-indicator .mdc-slider__value-indicator{transition:none}}.mdc-slider .mdc-slider__value-indicator-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-subtitle2-font-size, 0.875rem);line-height:1.375rem;line-height:var(--mdc-typography-subtitle2-line-height, 1.375rem);font-weight:500;font-weight:var(--mdc-typography-subtitle2-font-weight, 500);letter-spacing:0.0071428571em;letter-spacing:var(--mdc-typography-subtitle2-letter-spacing, 0.0071428571em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle2-text-transform, inherit)}.mdc-slider .mdc-slider__value-indicator{background-color:#000;opacity:.6}.mdc-slider .mdc-slider__value-indicator::before{border-top-color:#000}.mdc-slider .mdc-slider__value-indicator{color:#fff;color:var(--mdc-theme-on-primary, #fff)}.mdc-slider .mdc-slider__thumb{display:flex;height:48px;left:-24px;outline:none;position:absolute;user-select:none;width:48px}.mdc-slider .mdc-slider__thumb--top{z-index:1}.mdc-slider .mdc-slider__thumb--top .mdc-slider__thumb-knob,.mdc-slider .mdc-slider__thumb--top.mdc-slider__thumb:hover .mdc-slider__thumb-knob,.mdc-slider .mdc-slider__thumb--top.mdc-slider__thumb--focused .mdc-slider__thumb-knob{border-style:solid;border-width:1px;box-sizing:content-box}.mdc-slider .mdc-slider__thumb-knob{box-shadow:0px 2px 1px -1px rgba(0, 0, 0, 0.2),0px 1px 1px 0px rgba(0, 0, 0, 0.14),0px 1px 3px 0px rgba(0,0,0,.12);border:10px solid;border-radius:50%;box-sizing:border-box;height:20px;left:50%;position:absolute;top:50%;transform:translate(-50%, -50%);width:20px}.mdc-slider .mdc-slider__thumb-knob{background-color:#6200ee;background-color:var(--mdc-theme-primary, #6200ee);border-color:#6200ee;border-color:var(--mdc-theme-primary, #6200ee)}.mdc-slider .mdc-slider__thumb--top .mdc-slider__thumb-knob,.mdc-slider .mdc-slider__thumb--top.mdc-slider__thumb:hover .mdc-slider__thumb-knob,.mdc-slider .mdc-slider__thumb--top.mdc-slider__thumb--focused .mdc-slider__thumb-knob{border-color:#fff}.mdc-slider.mdc-slider--disabled .mdc-slider__thumb-knob{background-color:#000;background-color:var(--mdc-theme-on-surface, #000);border-color:#000;border-color:var(--mdc-theme-on-surface, #000)}.mdc-slider.mdc-slider--disabled .mdc-slider__thumb--top .mdc-slider__thumb-knob,.mdc-slider.mdc-slider--disabled .mdc-slider__thumb--top.mdc-slider__thumb:hover .mdc-slider__thumb-knob,.mdc-slider.mdc-slider--disabled .mdc-slider__thumb--top.mdc-slider__thumb--focused .mdc-slider__thumb-knob{border-color:#fff}.mdc-slider .mdc-slider__thumb::before,.mdc-slider .mdc-slider__thumb::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-slider .mdc-slider__thumb:hover::before,.mdc-slider .mdc-slider__thumb.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-slider .mdc-slider__thumb.mdc-ripple-upgraded--background-focused::before,.mdc-slider .mdc-slider__thumb:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-slider .mdc-slider__thumb:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-slider .mdc-slider__thumb:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-slider .mdc-slider__thumb.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-slider .mdc-slider__tick-marks{align-items:center;box-sizing:border-box;display:flex;height:100%;justify-content:space-between;padding:0 1px;position:absolute;width:100%}.mdc-slider .mdc-slider__tick-mark--active,.mdc-slider .mdc-slider__tick-mark--inactive{border-radius:50%;height:2px;width:2px}.mdc-slider .mdc-slider__tick-mark--active{background-color:#fff;background-color:var(--mdc-theme-on-primary, #fff);opacity:.6}.mdc-slider.mdc-slider--disabled .mdc-slider__tick-mark--active{background-color:#fff;background-color:var(--mdc-theme-on-primary, #fff);opacity:.6}.mdc-slider .mdc-slider__tick-mark--inactive{background-color:#6200ee;background-color:var(--mdc-theme-primary, #6200ee);opacity:.6}.mdc-slider.mdc-slider--disabled .mdc-slider__tick-mark--inactive{background-color:#000;background-color:var(--mdc-theme-on-surface, #000);opacity:.6}.mdc-slider--discrete .mdc-slider__thumb,.mdc-slider--discrete .mdc-slider__track--active_fill{transition:transform 80ms ease}@media(prefers-reduced-motion){.mdc-slider--discrete .mdc-slider__thumb,.mdc-slider--discrete .mdc-slider__track--active_fill{transition:none}}.mdc-slider--disabled{opacity:.38;cursor:auto}.mdc-slider--disabled .mdc-slider__thumb{pointer-events:none}.mdc-slider__input{cursor:pointer;left:0;margin:0;height:100%;opacity:0;pointer-events:none;position:absolute;top:0;width:100%}:host{outline:none;display:block;-webkit-tap-highlight-color:transparent}.ripple{--mdc-ripple-color:#6200ee;--mdc-ripple-color:var(--mdc-theme-primary, #6200ee)}`;
  var Ar, Ir;
  !(function (e) {
    (e[(e.ACTIVE = 0)] = "ACTIVE"), (e[(e.INACTIVE = 1)] = "INACTIVE");
  })(Ar || (Ar = {})),
    (function (e) {
      (e[(e.START = 1)] = "START"), (e[(e.END = 2)] = "END");
    })(Ir || (Ir = {}));
  var Cr = (function () {
      function e() {
        this.rafIDs = new Map();
      }
      return (
        (e.prototype.request = function (e, t) {
          var i = this;
          this.cancel(e);
          var r = requestAnimationFrame(function (r) {
            i.rafIDs.delete(e), t(r);
          });
          this.rafIDs.set(e, r);
        }),
        (e.prototype.cancel = function (e) {
          var t = this.rafIDs.get(e);
          t && (cancelAnimationFrame(t), this.rafIDs.delete(e));
        }),
        (e.prototype.cancelAll = function () {
          var e = this;
          this.rafIDs.forEach(function (t, i) {
            e.cancel(i);
          });
        }),
        (e.prototype.getQueue = function () {
          var e = [];
          return (
            this.rafIDs.forEach(function (t, i) {
              e.push(i);
            }),
            e
          );
        }),
        e
      );
    })(),
    Sr = {
      animation: { prefixed: "-webkit-animation", standard: "animation" },
      transform: { prefixed: "-webkit-transform", standard: "transform" },
      transition: { prefixed: "-webkit-transition", standard: "transition" },
    };
  function Rr(e, t) {
    if (
      (function (e) {
        return Boolean(e.document) && "function" == typeof e.document.createElement;
      })(e) &&
      t in Sr
    ) {
      var i = e.document.createElement("div"),
        r = Sr[t],
        n = r.standard,
        o = r.prefixed;
      return n in i.style ? n : o;
    }
    return t;
  }
  var Or,
    Lr = (function () {
      function e(e) {
        void 0 === e && (e = {}), (this.adapter = e);
      }
      return (
        Object.defineProperty(e, "cssClasses", {
          get: function () {
            return {};
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e, "strings", {
          get: function () {
            return {};
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e, "numbers", {
          get: function () {
            return {};
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e, "defaultAdapter", {
          get: function () {
            return {};
          },
          enumerable: !1,
          configurable: !0,
        }),
        (e.prototype.init = function () {}),
        (e.prototype.destroy = function () {}),
        e
      );
    })(),
    Fr = "mdc-slider--disabled",
    Dr = "mdc-slider__thumb--focused",
    Pr = "mdc-slider__thumb--top",
    Nr = "mdc-slider__thumb--with-indicator",
    $r = { STEP_SIZE: 1, MIN_RANGE: 0, THUMB_UPDATE_MIN_PX: 5 },
    Mr = "disabled",
    zr = "min",
    Hr = "max",
    Br = "value",
    Vr = "step",
    Ur = "data-min-range",
    jr = "--slider-value-indicator-caret-left",
    Xr = "--slider-value-indicator-caret-right",
    Wr = "--slider-value-indicator-caret-transform",
    Gr = "--slider-value-indicator-container-left",
    Yr = "--slider-value-indicator-container-right",
    Kr = "--slider-value-indicator-container-transform";
  !(function (e) {
    e.SLIDER_UPDATE = "slider_update";
  })(Or || (Or = {}));
  var qr = "undefined" != typeof window,
    Qr = (function (e) {
      function r(t) {
        var n = e.call(this, i(i({}, r.defaultAdapter), t)) || this;
        return (
          (n.initialStylesRemoved = !1),
          (n.isDisabled = !1),
          (n.isDiscrete = !1),
          (n.step = $r.STEP_SIZE),
          (n.minRange = $r.MIN_RANGE),
          (n.hasTickMarks = !1),
          (n.isRange = !1),
          (n.thumb = null),
          (n.downEventClientX = null),
          (n.startThumbKnobWidth = 0),
          (n.endThumbKnobWidth = 0),
          (n.animFrame = new Cr()),
          n
        );
      }
      return (
        t(r, e),
        Object.defineProperty(r, "defaultAdapter", {
          get: function () {
            return {
              hasClass: function () {
                return !1;
              },
              addClass: function () {},
              removeClass: function () {},
              addThumbClass: function () {},
              removeThumbClass: function () {},
              getAttribute: function () {
                return null;
              },
              getInputValue: function () {
                return "";
              },
              setInputValue: function () {},
              getInputAttribute: function () {
                return null;
              },
              setInputAttribute: function () {
                return null;
              },
              removeInputAttribute: function () {
                return null;
              },
              focusInput: function () {},
              isInputFocused: function () {
                return !1;
              },
              shouldHideFocusStylesForPointerEvents: function () {
                return !1;
              },
              getThumbKnobWidth: function () {
                return 0;
              },
              getValueIndicatorContainerWidth: function () {
                return 0;
              },
              getThumbBoundingClientRect: function () {
                return { top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 };
              },
              getBoundingClientRect: function () {
                return { top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 };
              },
              isRTL: function () {
                return !1;
              },
              setThumbStyleProperty: function () {},
              removeThumbStyleProperty: function () {},
              setTrackActiveStyleProperty: function () {},
              removeTrackActiveStyleProperty: function () {},
              setValueIndicatorText: function () {},
              getValueToAriaValueTextFn: function () {
                return null;
              },
              updateTickMarks: function () {},
              setPointerCapture: function () {},
              emitChangeEvent: function () {},
              emitInputEvent: function () {},
              emitDragStartEvent: function () {},
              emitDragEndEvent: function () {},
              registerEventHandler: function () {},
              deregisterEventHandler: function () {},
              registerThumbEventHandler: function () {},
              deregisterThumbEventHandler: function () {},
              registerInputEventHandler: function () {},
              deregisterInputEventHandler: function () {},
              registerBodyEventHandler: function () {},
              deregisterBodyEventHandler: function () {},
              registerWindowEventHandler: function () {},
              deregisterWindowEventHandler: function () {},
            };
          },
          enumerable: !1,
          configurable: !0,
        }),
        (r.prototype.init = function () {
          var e = this;
          (this.isDisabled = this.adapter.hasClass(Fr)),
            (this.isDiscrete = this.adapter.hasClass("mdc-slider--discrete")),
            (this.hasTickMarks = this.adapter.hasClass("mdc-slider--tick-marks")),
            (this.isRange = this.adapter.hasClass("mdc-slider--range"));
          var t = this.convertAttributeValueToNumber(this.adapter.getInputAttribute(zr, this.isRange ? Ir.START : Ir.END), zr),
            i = this.convertAttributeValueToNumber(this.adapter.getInputAttribute(Hr, Ir.END), Hr),
            r = this.convertAttributeValueToNumber(this.adapter.getInputAttribute(Br, Ir.END), Br),
            n = this.isRange ? this.convertAttributeValueToNumber(this.adapter.getInputAttribute(Br, Ir.START), Br) : t,
            o = this.adapter.getInputAttribute(Vr, Ir.END),
            a = o ? this.convertAttributeValueToNumber(o, Vr) : this.step,
            d = this.adapter.getAttribute(Ur),
            c = d ? this.convertAttributeValueToNumber(d, Ur) : this.minRange;
          this.validateProperties({ min: t, max: i, value: r, valueStart: n, step: a, minRange: c }),
            (this.min = t),
            (this.max = i),
            (this.value = r),
            (this.valueStart = n),
            (this.step = a),
            (this.minRange = c),
            (this.numDecimalPlaces = Zr(this.step)),
            (this.valueBeforeDownEvent = r),
            (this.valueStartBeforeDownEvent = n),
            (this.mousedownOrTouchstartListener = this.handleMousedownOrTouchstart.bind(this)),
            (this.moveListener = this.handleMove.bind(this)),
            (this.pointerdownListener = this.handlePointerdown.bind(this)),
            (this.pointerupListener = this.handlePointerup.bind(this)),
            (this.thumbMouseenterListener = this.handleThumbMouseenter.bind(this)),
            (this.thumbMouseleaveListener = this.handleThumbMouseleave.bind(this)),
            (this.inputStartChangeListener = function () {
              e.handleInputChange(Ir.START);
            }),
            (this.inputEndChangeListener = function () {
              e.handleInputChange(Ir.END);
            }),
            (this.inputStartFocusListener = function () {
              e.handleInputFocus(Ir.START);
            }),
            (this.inputEndFocusListener = function () {
              e.handleInputFocus(Ir.END);
            }),
            (this.inputStartBlurListener = function () {
              e.handleInputBlur(Ir.START);
            }),
            (this.inputEndBlurListener = function () {
              e.handleInputBlur(Ir.END);
            }),
            (this.resizeListener = this.handleResize.bind(this)),
            this.registerEventHandlers();
        }),
        (r.prototype.destroy = function () {
          this.deregisterEventHandlers();
        }),
        (r.prototype.setMin = function (e) {
          (this.min = e), this.isRange || (this.valueStart = e), this.updateUI();
        }),
        (r.prototype.setMax = function (e) {
          (this.max = e), this.updateUI();
        }),
        (r.prototype.getMin = function () {
          return this.min;
        }),
        (r.prototype.getMax = function () {
          return this.max;
        }),
        (r.prototype.getValue = function () {
          return this.value;
        }),
        (r.prototype.setValue = function (e) {
          if (this.isRange && e < this.valueStart + this.minRange)
            throw new Error("end thumb value (" + e + ") must be >= start thumb value (" + this.valueStart + ") + min range (" + this.minRange + ")");
          this.updateValue(e, Ir.END);
        }),
        (r.prototype.getValueStart = function () {
          if (!this.isRange) throw new Error("`valueStart` is only applicable for range sliders.");
          return this.valueStart;
        }),
        (r.prototype.setValueStart = function (e) {
          if (!this.isRange) throw new Error("`valueStart` is only applicable for range sliders.");
          if (this.isRange && e > this.value - this.minRange)
            throw new Error("start thumb value (" + e + ") must be <= end thumb value (" + this.value + ") - min range (" + this.minRange + ")");
          this.updateValue(e, Ir.START);
        }),
        (r.prototype.setStep = function (e) {
          (this.step = e), (this.numDecimalPlaces = Zr(e)), this.updateUI();
        }),
        (r.prototype.setMinRange = function (e) {
          if (!this.isRange) throw new Error("`minRange` is only applicable for range sliders.");
          if (e < 0) throw new Error("`minRange` must be non-negative. Current value: " + e);
          if (this.value - this.valueStart < e)
            throw new Error(
              "start thumb value (" + this.valueStart + ") and end thumb value (" + this.value + ") must differ by at least " + e + "."
            );
          this.minRange = e;
        }),
        (r.prototype.setIsDiscrete = function (e) {
          (this.isDiscrete = e), this.updateValueIndicatorUI(), this.updateTickMarksUI();
        }),
        (r.prototype.getStep = function () {
          return this.step;
        }),
        (r.prototype.getMinRange = function () {
          if (!this.isRange) throw new Error("`minRange` is only applicable for range sliders.");
          return this.minRange;
        }),
        (r.prototype.setHasTickMarks = function (e) {
          (this.hasTickMarks = e), this.updateTickMarksUI();
        }),
        (r.prototype.getDisabled = function () {
          return this.isDisabled;
        }),
        (r.prototype.setDisabled = function (e) {
          (this.isDisabled = e),
            e
              ? (this.adapter.addClass(Fr),
                this.isRange && this.adapter.setInputAttribute(Mr, "", Ir.START),
                this.adapter.setInputAttribute(Mr, "", Ir.END))
              : (this.adapter.removeClass(Fr),
                this.isRange && this.adapter.removeInputAttribute(Mr, Ir.START),
                this.adapter.removeInputAttribute(Mr, Ir.END));
        }),
        (r.prototype.getIsRange = function () {
          return this.isRange;
        }),
        (r.prototype.layout = function (e) {
          var t = (void 0 === e ? {} : e).skipUpdateUI;
          (this.rect = this.adapter.getBoundingClientRect()),
            this.isRange &&
              ((this.startThumbKnobWidth = this.adapter.getThumbKnobWidth(Ir.START)),
              (this.endThumbKnobWidth = this.adapter.getThumbKnobWidth(Ir.END))),
            t || this.updateUI();
        }),
        (r.prototype.handleResize = function () {
          this.layout();
        }),
        (r.prototype.handleDown = function (e) {
          if (!this.isDisabled) {
            (this.valueStartBeforeDownEvent = this.valueStart), (this.valueBeforeDownEvent = this.value);
            var t = null != e.clientX ? e.clientX : e.targetTouches[0].clientX;
            this.downEventClientX = t;
            var i = this.mapClientXOnSliderScale(t);
            (this.thumb = this.getThumbFromDownEvent(t, i)),
              null !== this.thumb && (this.handleDragStart(e, i, this.thumb), this.updateValue(i, this.thumb, { emitInputEvent: !0 }));
          }
        }),
        (r.prototype.handleMove = function (e) {
          if (!this.isDisabled) {
            e.preventDefault();
            var t = null != e.clientX ? e.clientX : e.targetTouches[0].clientX,
              i = null != this.thumb;
            if (((this.thumb = this.getThumbFromMoveEvent(t)), null !== this.thumb)) {
              var r = this.mapClientXOnSliderScale(t);
              i || (this.handleDragStart(e, r, this.thumb), this.adapter.emitDragStartEvent(r, this.thumb)),
                this.updateValue(r, this.thumb, { emitInputEvent: !0 });
            }
          }
        }),
        (r.prototype.handleUp = function () {
          var e, t;
          if (!this.isDisabled && null !== this.thumb) {
            (null === (t = (e = this.adapter).shouldHideFocusStylesForPointerEvents) || void 0 === t ? void 0 : t.call(e)) &&
              this.handleInputBlur(this.thumb);
            var i = this.thumb === Ir.START ? this.valueStartBeforeDownEvent : this.valueBeforeDownEvent,
              r = this.thumb === Ir.START ? this.valueStart : this.value;
            i !== r && this.adapter.emitChangeEvent(r, this.thumb), this.adapter.emitDragEndEvent(r, this.thumb), (this.thumb = null);
          }
        }),
        (r.prototype.handleThumbMouseenter = function () {
          this.isDiscrete && this.isRange && (this.adapter.addThumbClass(Nr, Ir.START), this.adapter.addThumbClass(Nr, Ir.END));
        }),
        (r.prototype.handleThumbMouseleave = function () {
          var e, t;
          this.isDiscrete &&
            this.isRange &&
            ((!(null === (t = (e = this.adapter).shouldHideFocusStylesForPointerEvents) || void 0 === t ? void 0 : t.call(e)) &&
              (this.adapter.isInputFocused(Ir.START) || this.adapter.isInputFocused(Ir.END))) ||
              this.thumb ||
              (this.adapter.removeThumbClass(Nr, Ir.START), this.adapter.removeThumbClass(Nr, Ir.END)));
        }),
        (r.prototype.handleMousedownOrTouchstart = function (e) {
          var t = this,
            i = "mousedown" === e.type ? "mousemove" : "touchmove";
          this.adapter.registerBodyEventHandler(i, this.moveListener);
          var r = function () {
            t.handleUp(),
              t.adapter.deregisterBodyEventHandler(i, t.moveListener),
              t.adapter.deregisterEventHandler("mouseup", r),
              t.adapter.deregisterEventHandler("touchend", r);
          };
          this.adapter.registerBodyEventHandler("mouseup", r), this.adapter.registerBodyEventHandler("touchend", r), this.handleDown(e);
        }),
        (r.prototype.handlePointerdown = function (e) {
          0 === e.button &&
            (null != e.pointerId && this.adapter.setPointerCapture(e.pointerId),
            this.adapter.registerEventHandler("pointermove", this.moveListener),
            this.handleDown(e));
        }),
        (r.prototype.handleInputChange = function (e) {
          var t = Number(this.adapter.getInputValue(e));
          e === Ir.START ? this.setValueStart(t) : this.setValue(t),
            this.adapter.emitChangeEvent(e === Ir.START ? this.valueStart : this.value, e),
            this.adapter.emitInputEvent(e === Ir.START ? this.valueStart : this.value, e);
        }),
        (r.prototype.handleInputFocus = function (e) {
          if ((this.adapter.addThumbClass(Dr, e), this.isDiscrete && (this.adapter.addThumbClass(Nr, e), this.isRange))) {
            var t = e === Ir.START ? Ir.END : Ir.START;
            this.adapter.addThumbClass(Nr, t);
          }
        }),
        (r.prototype.handleInputBlur = function (e) {
          if ((this.adapter.removeThumbClass(Dr, e), this.isDiscrete && (this.adapter.removeThumbClass(Nr, e), this.isRange))) {
            var t = e === Ir.START ? Ir.END : Ir.START;
            this.adapter.removeThumbClass(Nr, t);
          }
        }),
        (r.prototype.handleDragStart = function (e, t, i) {
          var r, n;
          this.adapter.emitDragStartEvent(t, i),
            this.adapter.focusInput(i),
            (null === (n = (r = this.adapter).shouldHideFocusStylesForPointerEvents) || void 0 === n ? void 0 : n.call(r)) &&
              this.handleInputFocus(i),
            e.preventDefault();
        }),
        (r.prototype.getThumbFromDownEvent = function (e, t) {
          if (!this.isRange) return Ir.END;
          var i = this.adapter.getThumbBoundingClientRect(Ir.START),
            r = this.adapter.getThumbBoundingClientRect(Ir.END),
            n = e >= i.left && e <= i.right,
            o = e >= r.left && e <= r.right;
          return n && o
            ? null
            : n
            ? Ir.START
            : o
            ? Ir.END
            : t < this.valueStart
            ? Ir.START
            : t > this.value
            ? Ir.END
            : t - this.valueStart <= this.value - t
            ? Ir.START
            : Ir.END;
        }),
        (r.prototype.getThumbFromMoveEvent = function (e) {
          if (null !== this.thumb) return this.thumb;
          if (null === this.downEventClientX) throw new Error("`downEventClientX` is null after move event.");
          return Math.abs(this.downEventClientX - e) < $r.THUMB_UPDATE_MIN_PX
            ? this.thumb
            : e < this.downEventClientX
            ? this.adapter.isRTL()
              ? Ir.END
              : Ir.START
            : this.adapter.isRTL()
            ? Ir.START
            : Ir.END;
        }),
        (r.prototype.updateUI = function (e) {
          e ? this.updateThumbAndInputAttributes(e) : (this.updateThumbAndInputAttributes(Ir.START), this.updateThumbAndInputAttributes(Ir.END)),
            this.updateThumbAndTrackUI(e),
            this.updateValueIndicatorUI(e),
            this.updateTickMarksUI();
        }),
        (r.prototype.updateThumbAndInputAttributes = function (e) {
          if (e) {
            var t = this.isRange && e === Ir.START ? this.valueStart : this.value,
              i = String(t);
            this.adapter.setInputAttribute(Br, i, e),
              this.isRange && e === Ir.START
                ? this.adapter.setInputAttribute(zr, String(t + this.minRange), Ir.END)
                : this.isRange && e === Ir.END && this.adapter.setInputAttribute(Hr, String(t - this.minRange), Ir.START),
              this.adapter.getInputValue(e) !== i && this.adapter.setInputValue(i, e);
            var r = this.adapter.getValueToAriaValueTextFn();
            r && this.adapter.setInputAttribute("aria-valuetext", r(t, e), e);
          }
        }),
        (r.prototype.updateValueIndicatorUI = function (e) {
          if (this.isDiscrete) {
            var t = this.isRange && e === Ir.START ? this.valueStart : this.value;
            this.adapter.setValueIndicatorText(t, e === Ir.START ? Ir.START : Ir.END),
              !e && this.isRange && this.adapter.setValueIndicatorText(this.valueStart, Ir.START);
          }
        }),
        (r.prototype.updateTickMarksUI = function () {
          if (this.isDiscrete && this.hasTickMarks) {
            var e = (this.valueStart - this.min) / this.step,
              t = (this.value - this.valueStart) / this.step + 1,
              i = (this.max - this.value) / this.step,
              r = Array.from({ length: e }).fill(Ar.INACTIVE),
              n = Array.from({ length: t }).fill(Ar.ACTIVE),
              o = Array.from({ length: i }).fill(Ar.INACTIVE);
            this.adapter.updateTickMarks(r.concat(n).concat(o));
          }
        }),
        (r.prototype.mapClientXOnSliderScale = function (e) {
          var t = (e - this.rect.left) / this.rect.width;
          this.adapter.isRTL() && (t = 1 - t);
          var i = this.min + t * (this.max - this.min);
          return i === this.max || i === this.min ? i : Number(this.quantize(i).toFixed(this.numDecimalPlaces));
        }),
        (r.prototype.quantize = function (e) {
          var t = Math.round((e - this.min) / this.step);
          return this.min + t * this.step;
        }),
        (r.prototype.updateValue = function (e, t, i) {
          var r = (void 0 === i ? {} : i).emitInputEvent;
          if (((e = this.clampValue(e, t)), this.isRange && t === Ir.START)) {
            if (this.valueStart === e) return;
            this.valueStart = e;
          } else {
            if (this.value === e) return;
            this.value = e;
          }
          this.updateUI(t), r && this.adapter.emitInputEvent(t === Ir.START ? this.valueStart : this.value, t);
        }),
        (r.prototype.clampValue = function (e, t) {
          return (
            (e = Math.min(Math.max(e, this.min), this.max)),
            this.isRange && t === Ir.START && e > this.value - this.minRange
              ? this.value - this.minRange
              : this.isRange && t === Ir.END && e < this.valueStart + this.minRange
              ? this.valueStart + this.minRange
              : e
          );
        }),
        (r.prototype.updateThumbAndTrackUI = function (e) {
          var t = this,
            i = this.max,
            r = this.min,
            n = (this.value - this.valueStart) / (i - r),
            o = n * this.rect.width,
            a = this.adapter.isRTL(),
            d = qr ? Rr(window, "transform") : "transform";
          if (this.isRange) {
            var c = this.adapter.isRTL() ? ((i - this.value) / (i - r)) * this.rect.width : ((this.valueStart - r) / (i - r)) * this.rect.width,
              s = c + o;
            this.animFrame.request(Or.SLIDER_UPDATE, function () {
              (!a && e === Ir.START) || (a && e !== Ir.START)
                ? (t.adapter.setTrackActiveStyleProperty("transform-origin", "right"),
                  t.adapter.setTrackActiveStyleProperty("left", "auto"),
                  t.adapter.setTrackActiveStyleProperty("right", t.rect.width - s + "px"))
                : (t.adapter.setTrackActiveStyleProperty("transform-origin", "left"),
                  t.adapter.setTrackActiveStyleProperty("right", "auto"),
                  t.adapter.setTrackActiveStyleProperty("left", c + "px")),
                t.adapter.setTrackActiveStyleProperty(d, "scaleX(" + n + ")");
              var i = a ? s : c,
                r = t.adapter.isRTL() ? c : s;
              (e !== Ir.START && e && t.initialStylesRemoved) ||
                (t.adapter.setThumbStyleProperty(d, "translateX(" + i + "px)", Ir.START), t.alignValueIndicator(Ir.START, i)),
                (e !== Ir.END && e && t.initialStylesRemoved) ||
                  (t.adapter.setThumbStyleProperty(d, "translateX(" + r + "px)", Ir.END), t.alignValueIndicator(Ir.END, r)),
                t.removeInitialStyles(a),
                t.updateOverlappingThumbsUI(i, r, e);
            });
          } else
            this.animFrame.request(Or.SLIDER_UPDATE, function () {
              var e = a ? t.rect.width - o : o;
              t.adapter.setThumbStyleProperty(d, "translateX(" + e + "px)", Ir.END),
                t.alignValueIndicator(Ir.END, e),
                t.adapter.setTrackActiveStyleProperty(d, "scaleX(" + n + ")"),
                t.removeInitialStyles(a);
            });
        }),
        (r.prototype.alignValueIndicator = function (e, t) {
          if (this.isDiscrete) {
            var i = this.adapter.getThumbBoundingClientRect(e).width / 2,
              r = this.adapter.getValueIndicatorContainerWidth(e),
              n = this.adapter.getBoundingClientRect().width;
            r / 2 > t + i
              ? (this.adapter.setThumbStyleProperty(jr, i + "px", e),
                this.adapter.setThumbStyleProperty(Xr, "auto", e),
                this.adapter.setThumbStyleProperty(Wr, "translateX(-50%)", e),
                this.adapter.setThumbStyleProperty(Gr, "0", e),
                this.adapter.setThumbStyleProperty(Yr, "auto", e),
                this.adapter.setThumbStyleProperty(Kr, "none", e))
              : r / 2 > n - t + i
              ? (this.adapter.setThumbStyleProperty(jr, "auto", e),
                this.adapter.setThumbStyleProperty(Xr, i + "px", e),
                this.adapter.setThumbStyleProperty(Wr, "translateX(50%)", e),
                this.adapter.setThumbStyleProperty(Gr, "auto", e),
                this.adapter.setThumbStyleProperty(Yr, "0", e),
                this.adapter.setThumbStyleProperty(Kr, "none", e))
              : (this.adapter.setThumbStyleProperty(jr, "50%", e),
                this.adapter.setThumbStyleProperty(Xr, "auto", e),
                this.adapter.setThumbStyleProperty(Wr, "translateX(-50%)", e),
                this.adapter.setThumbStyleProperty(Gr, "50%", e),
                this.adapter.setThumbStyleProperty(Yr, "auto", e),
                this.adapter.setThumbStyleProperty(Kr, "translateX(-50%)", e));
          }
        }),
        (r.prototype.removeInitialStyles = function (e) {
          if (!this.initialStylesRemoved) {
            var t = e ? "right" : "left";
            this.adapter.removeThumbStyleProperty(t, Ir.END),
              this.isRange && this.adapter.removeThumbStyleProperty(t, Ir.START),
              (this.initialStylesRemoved = !0),
              this.resetTrackAndThumbAnimation();
          }
        }),
        (r.prototype.resetTrackAndThumbAnimation = function () {
          var e = this;
          if (this.isDiscrete) {
            var t = qr ? Rr(window, "transition") : "transition",
              i = "none 0s ease 0s";
            this.adapter.setThumbStyleProperty(t, i, Ir.END),
              this.isRange && this.adapter.setThumbStyleProperty(t, i, Ir.START),
              this.adapter.setTrackActiveStyleProperty(t, i),
              requestAnimationFrame(function () {
                e.adapter.removeThumbStyleProperty(t, Ir.END),
                  e.adapter.removeTrackActiveStyleProperty(t),
                  e.isRange && e.adapter.removeThumbStyleProperty(t, Ir.START);
              });
          }
        }),
        (r.prototype.updateOverlappingThumbsUI = function (e, t, i) {
          var r = !1;
          if (this.adapter.isRTL()) {
            var n = e - this.startThumbKnobWidth / 2;
            r = t + this.endThumbKnobWidth / 2 >= n;
          } else r = e + this.startThumbKnobWidth / 2 >= t - this.endThumbKnobWidth / 2;
          r
            ? (this.adapter.addThumbClass(Pr, i || Ir.END), this.adapter.removeThumbClass(Pr, i === Ir.START ? Ir.END : Ir.START))
            : (this.adapter.removeThumbClass(Pr, Ir.START), this.adapter.removeThumbClass(Pr, Ir.END));
        }),
        (r.prototype.convertAttributeValueToNumber = function (e, t) {
          if (null === e) throw new Error("MDCSliderFoundation: `" + t + "` must be non-null.");
          var i = Number(e);
          if (isNaN(i)) throw new Error("MDCSliderFoundation: `" + t + "` value is `" + e + "`, but must be a number.");
          return i;
        }),
        (r.prototype.validateProperties = function (e) {
          var t = e.min,
            i = e.max,
            r = e.value,
            n = e.valueStart,
            o = e.step,
            a = e.minRange;
          if (t >= i) throw new Error("MDCSliderFoundation: min must be strictly less than max. Current: [min: " + t + ", max: " + i + "]");
          if (o <= 0) throw new Error("MDCSliderFoundation: step must be a positive number. Current step: " + o);
          if (this.isRange) {
            if (r < t || r > i || n < t || n > i)
              throw new Error(
                "MDCSliderFoundation: values must be in [min, max] range. Current values: [start value: " +
                  n +
                  ", end value: " +
                  r +
                  ", min: " +
                  t +
                  ", max: " +
                  i +
                  "]"
              );
            if (n > r)
              throw new Error(
                "MDCSliderFoundation: start value must be <= end value. Current values: [start value: " + n + ", end value: " + r + "]"
              );
            if (a < 0) throw new Error("MDCSliderFoundation: minimum range must be non-negative. Current min range: " + a);
            if (r - n < a)
              throw new Error(
                "MDCSliderFoundation: start value and end value must differ by at least " +
                  a +
                  ". Current values: [start value: " +
                  n +
                  ", end value: " +
                  r +
                  "]"
              );
            var d = (n - t) / o,
              c = (r - t) / o;
            if (!Number.isInteger(parseFloat(d.toFixed(6))) || !Number.isInteger(parseFloat(c.toFixed(6))))
              throw new Error(
                "MDCSliderFoundation: Slider values must be valid based on the step value (" +
                  o +
                  "). Current values: [start value: " +
                  n +
                  ", end value: " +
                  r +
                  ", min: " +
                  t +
                  "]"
              );
          } else {
            if (r < t || r > i)
              throw new Error(
                "MDCSliderFoundation: value must be in [min, max] range. Current values: [value: " + r + ", min: " + t + ", max: " + i + "]"
              );
            if (((c = (r - t) / o), !Number.isInteger(parseFloat(c.toFixed(6)))))
              throw new Error("MDCSliderFoundation: Slider value must be valid based on the step value (" + o + "). Current value: " + r);
          }
        }),
        (r.prototype.registerEventHandlers = function () {
          this.adapter.registerWindowEventHandler("resize", this.resizeListener),
            r.SUPPORTS_POINTER_EVENTS
              ? (this.adapter.registerEventHandler("pointerdown", this.pointerdownListener),
                this.adapter.registerEventHandler("pointerup", this.pointerupListener))
              : (this.adapter.registerEventHandler("mousedown", this.mousedownOrTouchstartListener),
                this.adapter.registerEventHandler("touchstart", this.mousedownOrTouchstartListener)),
            this.isRange &&
              (this.adapter.registerThumbEventHandler(Ir.START, "mouseenter", this.thumbMouseenterListener),
              this.adapter.registerThumbEventHandler(Ir.START, "mouseleave", this.thumbMouseleaveListener),
              this.adapter.registerInputEventHandler(Ir.START, "change", this.inputStartChangeListener),
              this.adapter.registerInputEventHandler(Ir.START, "focus", this.inputStartFocusListener),
              this.adapter.registerInputEventHandler(Ir.START, "blur", this.inputStartBlurListener)),
            this.adapter.registerThumbEventHandler(Ir.END, "mouseenter", this.thumbMouseenterListener),
            this.adapter.registerThumbEventHandler(Ir.END, "mouseleave", this.thumbMouseleaveListener),
            this.adapter.registerInputEventHandler(Ir.END, "change", this.inputEndChangeListener),
            this.adapter.registerInputEventHandler(Ir.END, "focus", this.inputEndFocusListener),
            this.adapter.registerInputEventHandler(Ir.END, "blur", this.inputEndBlurListener);
        }),
        (r.prototype.deregisterEventHandlers = function () {
          this.adapter.deregisterWindowEventHandler("resize", this.resizeListener),
            r.SUPPORTS_POINTER_EVENTS
              ? (this.adapter.deregisterEventHandler("pointerdown", this.pointerdownListener),
                this.adapter.deregisterEventHandler("pointerup", this.pointerupListener))
              : (this.adapter.deregisterEventHandler("mousedown", this.mousedownOrTouchstartListener),
                this.adapter.deregisterEventHandler("touchstart", this.mousedownOrTouchstartListener)),
            this.isRange &&
              (this.adapter.deregisterThumbEventHandler(Ir.START, "mouseenter", this.thumbMouseenterListener),
              this.adapter.deregisterThumbEventHandler(Ir.START, "mouseleave", this.thumbMouseleaveListener),
              this.adapter.deregisterInputEventHandler(Ir.START, "change", this.inputStartChangeListener),
              this.adapter.deregisterInputEventHandler(Ir.START, "focus", this.inputStartFocusListener),
              this.adapter.deregisterInputEventHandler(Ir.START, "blur", this.inputStartBlurListener)),
            this.adapter.deregisterThumbEventHandler(Ir.END, "mouseenter", this.thumbMouseenterListener),
            this.adapter.deregisterThumbEventHandler(Ir.END, "mouseleave", this.thumbMouseleaveListener),
            this.adapter.deregisterInputEventHandler(Ir.END, "change", this.inputEndChangeListener),
            this.adapter.deregisterInputEventHandler(Ir.END, "focus", this.inputEndFocusListener),
            this.adapter.deregisterInputEventHandler(Ir.END, "blur", this.inputEndBlurListener);
        }),
        (r.prototype.handlePointerup = function () {
          this.handleUp(), this.adapter.deregisterEventHandler("pointermove", this.moveListener);
        }),
        (r.SUPPORTS_POINTER_EVENTS =
          qr &&
          Boolean(window.PointerEvent) &&
          !(
            ["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"].includes(navigator.platform) ||
            (navigator.userAgent.includes("Mac") && "ontouchend" in document)
          )),
        r
      );
    })(Lr);
  function Zr(e) {
    var t = /(?:\.(\d+))?(?:[eE]([+\-]?\d+))?$/.exec(String(e));
    if (!t) return 0;
    var i = t[1] || "",
      r = t[2] || 0;
    return Math.max(0, ("0" === i ? 0 : i.length) - Number(r));
  }
  class Jr extends Et {
    constructor() {
      super(...arguments),
        (this.mdcFoundationClass = Qr),
        (this.disabled = !1),
        (this.min = 0),
        (this.max = 100),
        (this.valueEnd = 0),
        (this.name = ""),
        (this.step = 1),
        (this.withTickMarks = !1),
        (this.discrete = !1),
        (this.tickMarks = []),
        (this.trackTransformOriginStyle = ""),
        (this.trackLeftStyle = ""),
        (this.trackRightStyle = ""),
        (this.trackTransitionStyle = ""),
        (this.endThumbWithIndicator = !1),
        (this.endThumbTop = !1),
        (this.shouldRenderEndRipple = !1),
        (this.endThumbTransformStyle = ""),
        (this.endThumbTransitionStyle = ""),
        (this.endThumbCssProperties = {}),
        (this.valueToAriaTextTransform = null),
        (this.valueToValueIndicatorTransform = (e) => `${e}`),
        (this.boundMoveListener = null),
        (this.endRippleHandlers = new st(() => ((this.shouldRenderEndRipple = !0), this.endRipple)));
    }
    update(e) {
      if (e.has("valueEnd") && this.mdcFoundation) {
        this.mdcFoundation.setValue(this.valueEnd);
        const e = this.mdcFoundation.getValue();
        e !== this.valueEnd && (this.valueEnd = e);
      }
      e.has("discrete") && (this.discrete || (this.tickMarks = [])), super.update(e);
    }
    render() {
      return this.renderRootEl(me`
      ${this.renderStartInput()}
      ${this.renderEndInput()}
      ${this.renderTrack()}
      ${this.renderTickMarks()}
      ${this.renderStartThumb()}
      ${this.renderEndThumb()}`);
    }
    renderRootEl(e) {
      const t = rt({ "mdc-slider--disabled": this.disabled, "mdc-slider--discrete": this.discrete });
      return me`
    <div
        class="mdc-slider ${t}"
        @pointerdown=${this.onPointerdown}
        @pointerup=${this.onPointerup}
        @contextmenu=${this.onContextmenu}>
      ${e}
    </div>`;
    }
    renderStartInput() {
      return ue;
    }
    renderEndInput() {
      var e;
      return me`
      <input
          class="mdc-slider__input end"
          type="range"
          step=${this.step}
          min=${this.min}
          max=${this.max}
          .value=${this.valueEnd}
          @change=${this.onEndChange}
          @focus=${this.onEndFocus}
          @blur=${this.onEndBlur}
          ?disabled=${this.disabled}
          name=${this.name}
          aria-label=${lt(this.ariaLabel)}
          aria-labelledby=${lt(this.ariaLabelledBy)}
          aria-describedby=${lt(this.ariaDescribedBy)}
          aria-valuetext=${lt(null === (e = this.valueToAriaTextTransform) || void 0 === e ? void 0 : e.call(this, this.valueEnd))}>
    `;
    }
    renderTrack() {
      return ue;
    }
    renderTickMarks() {
      return this.withTickMarks
        ? me`
      <div class="mdc-slider__tick-marks">
        ${this.tickMarks.map((e) => {
          const t = e === Ar.ACTIVE;
          return me`<div class="${t ? "mdc-slider__tick-mark--active" : "mdc-slider__tick-mark--inactive"}"></div>`;
        })}
      </div>`
        : ue;
    }
    renderStartThumb() {
      return ue;
    }
    renderEndThumb() {
      const e = rt({ "mdc-slider__thumb--with-indicator": this.endThumbWithIndicator, "mdc-slider__thumb--top": this.endThumbTop }),
        t = nt(
          Object.assign(
            {
              "-webkit-transform": this.endThumbTransformStyle,
              transform: this.endThumbTransformStyle,
              "-webkit-transition": this.endThumbTransitionStyle,
              transition: this.endThumbTransitionStyle,
              left:
                this.endThumbTransformStyle || "rtl" === getComputedStyle(this).direction
                  ? ""
                  : `calc(${((this.valueEnd - this.min) / (this.max - this.min)) * 100}% - 24px)`,
              right:
                this.endThumbTransformStyle || "rtl" !== getComputedStyle(this).direction
                  ? ""
                  : `calc(${((this.valueEnd - this.min) / (this.max - this.min)) * 100}% - 24px)`,
            },
            this.endThumbCssProperties
          )
        ),
        i = this.shouldRenderEndRipple ? me`<mwc-ripple class="ripple" unbounded></mwc-ripple>` : ue;
      return me`
      <div
          class="mdc-slider__thumb end ${e}"
          style=${t}
          @mouseenter=${this.onEndMouseenter}
          @mouseleave=${this.onEndMouseleave}>
        ${i}
        ${this.renderValueIndicator(this.valueToValueIndicatorTransform(this.valueEnd))}
        <div class="mdc-slider__thumb-knob"></div>
      </div>
    `;
    }
    renderValueIndicator(e) {
      return this.discrete
        ? me`
    <div class="mdc-slider__value-indicator-container" aria-hidden="true">
      <div class="mdc-slider__value-indicator">
        <span class="mdc-slider__value-indicator-text">
          ${e}
        </span>
      </div>
    </div>`
        : ue;
    }
    disconnectedCallback() {
      super.disconnectedCallback(), this.mdcFoundation && this.mdcFoundation.destroy();
    }
    createAdapter() {}
    async firstUpdated() {
      super.firstUpdated(), await this.layout(!0);
    }
    updated(e) {
      super.updated(e),
        this.mdcFoundation &&
          (e.has("disabled") && this.mdcFoundation.setDisabled(this.disabled),
          e.has("min") && this.mdcFoundation.setMin(this.min),
          e.has("max") && this.mdcFoundation.setMax(this.max),
          e.has("step") && this.mdcFoundation.setStep(this.step),
          e.has("discrete") && this.mdcFoundation.setIsDiscrete(this.discrete),
          e.has("withTickMarks") && this.mdcFoundation.setHasTickMarks(this.withTickMarks));
    }
    async layout(e = !1) {
      var t;
      null === (t = this.mdcFoundation) || void 0 === t || t.layout({ skipUpdateUI: e }), this.requestUpdate(), await this.updateComplete;
    }
    onEndChange(e) {
      var t;
      (this.valueEnd = Number(e.target.value)), null === (t = this.mdcFoundation) || void 0 === t || t.handleInputChange(Ir.END);
    }
    onEndFocus() {
      var e;
      null === (e = this.mdcFoundation) || void 0 === e || e.handleInputFocus(Ir.END), this.endRippleHandlers.startFocus();
    }
    onEndBlur() {
      var e;
      null === (e = this.mdcFoundation) || void 0 === e || e.handleInputBlur(Ir.END), this.endRippleHandlers.endFocus();
    }
    onEndMouseenter() {
      var e;
      null === (e = this.mdcFoundation) || void 0 === e || e.handleThumbMouseenter(), this.endRippleHandlers.startHover();
    }
    onEndMouseleave() {
      var e;
      null === (e = this.mdcFoundation) || void 0 === e || e.handleThumbMouseleave(), this.endRippleHandlers.endHover();
    }
    onPointerdown(e) {
      this.layout(),
        this.mdcFoundation &&
          (this.mdcFoundation.handlePointerdown(e),
          (this.boundMoveListener = this.mdcFoundation.handleMove.bind(this.mdcFoundation)),
          this.mdcRoot.addEventListener("pointermove", this.boundMoveListener));
    }
    onPointerup() {
      this.mdcFoundation &&
        (this.mdcFoundation.handleUp(),
        this.boundMoveListener && (this.mdcRoot.removeEventListener("pointermove", this.boundMoveListener), (this.boundMoveListener = null)));
    }
    onContextmenu(e) {
      e.preventDefault();
    }
    setFormData(e) {
      this.name && e.append(this.name, `${this.valueEnd}`);
    }
  }
  r([T("input.end")], Jr.prototype, "formElement", void 0),
    r([T(".mdc-slider")], Jr.prototype, "mdcRoot", void 0),
    r([T(".end.mdc-slider__thumb")], Jr.prototype, "endThumb", void 0),
    r([T(".end.mdc-slider__thumb .mdc-slider__thumb-knob")], Jr.prototype, "endThumbKnob", void 0),
    r([T(".end.mdc-slider__thumb .mdc-slider__value-indicator-container")], Jr.prototype, "endValueIndicatorContainer", void 0),
    r([A(".end .ripple")], Jr.prototype, "endRipple", void 0),
    r([y({ type: Boolean, reflect: !0 })], Jr.prototype, "disabled", void 0),
    r([y({ type: Number })], Jr.prototype, "min", void 0),
    r([y({ type: Number })], Jr.prototype, "max", void 0),
    r([y({ type: Number })], Jr.prototype, "valueEnd", void 0),
    r([y({ type: String })], Jr.prototype, "name", void 0),
    r([y({ type: Number })], Jr.prototype, "step", void 0),
    r([y({ type: Boolean })], Jr.prototype, "withTickMarks", void 0),
    r([y({ type: Boolean })], Jr.prototype, "discrete", void 0),
    r([w()], Jr.prototype, "tickMarks", void 0),
    r([w()], Jr.prototype, "trackTransformOriginStyle", void 0),
    r([w()], Jr.prototype, "trackLeftStyle", void 0),
    r([w()], Jr.prototype, "trackRightStyle", void 0),
    r([w()], Jr.prototype, "trackTransitionStyle", void 0),
    r([w()], Jr.prototype, "endThumbWithIndicator", void 0),
    r([w()], Jr.prototype, "endThumbTop", void 0),
    r([w()], Jr.prototype, "shouldRenderEndRipple", void 0),
    r([w()], Jr.prototype, "endThumbTransformStyle", void 0),
    r([w()], Jr.prototype, "endThumbTransitionStyle", void 0),
    r([w()], Jr.prototype, "endThumbCssProperties", void 0),
    r([ct, y({ type: String, attribute: "aria-label" })], Jr.prototype, "ariaLabel", void 0),
    r([ct, y({ type: String, attribute: "aria-labelledby" })], Jr.prototype, "ariaLabelledBy", void 0),
    r([ct, y({ type: String, attribute: "aria-describedby" })], Jr.prototype, "ariaDescribedBy", void 0);
  class en extends Jr {
    get value() {
      return this.valueEnd;
    }
    set value(e) {
      this.valueEnd = e;
    }
    renderTrack() {
      const e = nt({
        "transform-origin": this.trackTransformOriginStyle,
        left: this.trackLeftStyle,
        right: this.trackRightStyle,
        "-webkit-transform": `scaleX(${(this.valueEnd - this.min) / (this.max - this.min)})`,
        transform: `scaleX(${(this.valueEnd - this.min) / (this.max - this.min)})`,
        "-webkit-transition": this.trackTransitionStyle,
        transition: this.trackTransitionStyle,
      });
      return me`
      <div class="mdc-slider__track">
        <div class="mdc-slider__track--inactive"></div>
        <div class="mdc-slider__track--active">
          <div
              class="mdc-slider__track--active_fill"
              style=${e}>
          </div>
        </div>
      </div>`;
    }
    createAdapter() {
      return {
        addClass: (e) => {
          "mdc-slider--disabled" === e && (this.disabled = !0);
        },
        removeClass: (e) => {
          "mdc-slider--disabled" === e && (this.disabled = !1);
        },
        hasClass: (e) => {
          switch (e) {
            case "mdc-slider--disabled":
              return this.disabled;
            case "mdc-slider--discrete":
              return this.discrete;
            default:
              return !1;
          }
        },
        addThumbClass: (e, t) => {
          t !== Ir.START && "mdc-slider__thumb--with-indicator" === e && (this.endThumbWithIndicator = !0);
        },
        removeThumbClass: (e, t) => {
          t !== Ir.START && "mdc-slider__thumb--with-indicator" === e && (this.endThumbWithIndicator = !1);
        },
        registerEventHandler: () => {},
        deregisterEventHandler: () => {},
        registerBodyEventHandler: (e, t) => {
          document.body.addEventListener(e, t);
        },
        deregisterBodyEventHandler: (e, t) => {
          document.body.removeEventListener(e, t);
        },
        registerInputEventHandler: (e, t, i) => {
          e !== Ir.START && this.formElement.addEventListener(t, i);
        },
        deregisterInputEventHandler: (e, t, i) => {
          e !== Ir.START && this.formElement.removeEventListener(t, i);
        },
        registerThumbEventHandler: () => {},
        deregisterThumbEventHandler: () => {},
        registerWindowEventHandler: (e, t) => {
          window.addEventListener(e, t);
        },
        deregisterWindowEventHandler: (e, t) => {
          window.addEventListener(e, t);
        },
        emitChangeEvent: (e, t) => {
          if (t === Ir.START) return;
          const i = new CustomEvent("change", { bubbles: !0, composed: !0, detail: { value: e, thumb: t } });
          this.dispatchEvent(i);
        },
        emitDragEndEvent: (e, t) => {
          t !== Ir.START && this.endRippleHandlers.endPress();
        },
        emitDragStartEvent: (e, t) => {
          t !== Ir.START && this.endRippleHandlers.startPress();
        },
        emitInputEvent: (e, t) => {
          if (t === Ir.START) return;
          const i = new CustomEvent("input", { bubbles: !0, composed: !0, detail: { value: e, thumb: t } });
          this.dispatchEvent(i);
        },
        focusInput: (e) => {
          e !== Ir.START && this.formElement.focus();
        },
        getAttribute: () => "",
        getBoundingClientRect: () => this.mdcRoot.getBoundingClientRect(),
        getInputAttribute: (e, t) => {
          if (t === Ir.START) return null;
          switch (e) {
            case "min":
              return this.min.toString();
            case "max":
              return this.max.toString();
            case "value":
              return this.valueEnd.toString();
            case "step":
              return this.step.toString();
            default:
              return null;
          }
        },
        getInputValue: (e) => (e === Ir.START ? "" : this.valueEnd.toString()),
        getThumbBoundingClientRect: (e) => (e === Ir.START ? this.getBoundingClientRect() : this.endThumb.getBoundingClientRect()),
        getThumbKnobWidth: (e) => (e === Ir.START ? 0 : this.endThumbKnob.getBoundingClientRect().width),
        getValueIndicatorContainerWidth: (e) => (e === Ir.START ? 0 : this.endValueIndicatorContainer.getBoundingClientRect().width),
        getValueToAriaValueTextFn: () => this.valueToAriaTextTransform,
        isInputFocused: (e) => {
          if (e === Ir.START) return !1;
          const t = Ue();
          return t[t.length - 1] === this.formElement;
        },
        isRTL: () => "rtl" === getComputedStyle(this).direction,
        setInputAttribute: (e, t, i) => {
          Ir.START;
        },
        removeInputAttribute: (e) => {},
        setThumbStyleProperty: (e, t, i) => {
          if (i !== Ir.START)
            switch (e) {
              case "transform":
              case "-webkit-transform":
                this.endThumbTransformStyle = t;
                break;
              case "transition":
              case "-webkit-transition":
                this.endThumbTransitionStyle = t;
                break;
              default:
                e.startsWith("--") && (this.endThumbCssProperties[e] = t);
            }
        },
        removeThumbStyleProperty: (e, t) => {
          if (t !== Ir.START)
            switch (e) {
              case "left":
              case "right":
                break;
              case "transition":
              case "-webkit-transition":
                this.endThumbTransitionStyle = "";
            }
        },
        setTrackActiveStyleProperty: (e, t) => {
          switch (e) {
            case "transform-origin":
              this.trackTransformOriginStyle = t;
              break;
            case "left":
              this.trackLeftStyle = t;
              break;
            case "right":
              this.trackRightStyle = t;
              break;
            case "transform":
            case "-webkit-transform":
              break;
            case "transition":
            case "-webkit-transition":
              this.trackTransitionStyle = t;
          }
        },
        removeTrackActiveStyleProperty: (e) => {
          switch (e) {
            case "transition":
            case "-webkit-transition":
              this.trackTransitionStyle = "";
          }
        },
        setInputValue: (e, t) => {
          t !== Ir.START && (this.valueEnd = Number(e));
        },
        setPointerCapture: (e) => {
          this.mdcRoot.setPointerCapture(e);
        },
        setValueIndicatorText: () => {},
        updateTickMarks: (e) => {
          this.tickMarks = e;
        },
      };
    }
  }
  r([y({ type: Number })], en.prototype, "value", null);
  let tn = class extends en {};
  (tn.styles = [Tr]), (tn = r([_("mwc-slider")], tn));
  var rn = (function () {
      function e(e) {
        void 0 === e && (e = {}), (this.adapter = e);
      }
      return (
        Object.defineProperty(e, "cssClasses", {
          get: function () {
            return {};
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e, "strings", {
          get: function () {
            return {};
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e, "numbers", {
          get: function () {
            return {};
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e, "defaultAdapter", {
          get: function () {
            return {};
          },
          enumerable: !1,
          configurable: !0,
        }),
        (e.prototype.init = function () {}),
        (e.prototype.destroy = function () {}),
        e
      );
    })(),
    nn = { CLOSING: "mdc-snackbar--closing", OPEN: "mdc-snackbar--open", OPENING: "mdc-snackbar--opening" },
    on = {
      ACTION_SELECTOR: ".mdc-snackbar__action",
      ARIA_LIVE_LABEL_TEXT_ATTR: "data-mdc-snackbar-label-text",
      CLOSED_EVENT: "MDCSnackbar:closed",
      CLOSING_EVENT: "MDCSnackbar:closing",
      DISMISS_SELECTOR: ".mdc-snackbar__dismiss",
      LABEL_SELECTOR: ".mdc-snackbar__label",
      OPENED_EVENT: "MDCSnackbar:opened",
      OPENING_EVENT: "MDCSnackbar:opening",
      REASON_ACTION: "action",
      REASON_DISMISS: "dismiss",
      SURFACE_SELECTOR: ".mdc-snackbar__surface",
    },
    an = {
      DEFAULT_AUTO_DISMISS_TIMEOUT_MS: 5e3,
      INDETERMINATE: -1,
      MAX_AUTO_DISMISS_TIMEOUT_MS: 1e4,
      MIN_AUTO_DISMISS_TIMEOUT_MS: 4e3,
      SNACKBAR_ANIMATION_CLOSE_TIME_MS: 75,
      SNACKBAR_ANIMATION_OPEN_TIME_MS: 150,
      ARIA_LIVE_DELAY_MS: 1e3,
    },
    dn = nn.OPENING,
    cn = nn.OPEN,
    sn = nn.CLOSING,
    ln = on.REASON_ACTION,
    pn = on.REASON_DISMISS;
  const mn = (function (e) {
      function r(t) {
        var n = e.call(this, i(i({}, r.defaultAdapter), t)) || this;
        return (
          (n.opened = !1),
          (n.animationFrame = 0),
          (n.animationTimer = 0),
          (n.autoDismissTimer = 0),
          (n.autoDismissTimeoutMs = an.DEFAULT_AUTO_DISMISS_TIMEOUT_MS),
          (n.closeOnEscape = !0),
          n
        );
      }
      return (
        t(r, e),
        Object.defineProperty(r, "cssClasses", {
          get: function () {
            return nn;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(r, "strings", {
          get: function () {
            return on;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(r, "numbers", {
          get: function () {
            return an;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(r, "defaultAdapter", {
          get: function () {
            return {
              addClass: function () {},
              announce: function () {},
              notifyClosed: function () {},
              notifyClosing: function () {},
              notifyOpened: function () {},
              notifyOpening: function () {},
              removeClass: function () {},
            };
          },
          enumerable: !1,
          configurable: !0,
        }),
        (r.prototype.destroy = function () {
          this.clearAutoDismissTimer(),
            cancelAnimationFrame(this.animationFrame),
            (this.animationFrame = 0),
            clearTimeout(this.animationTimer),
            (this.animationTimer = 0),
            this.adapter.removeClass(dn),
            this.adapter.removeClass(cn),
            this.adapter.removeClass(sn);
        }),
        (r.prototype.open = function () {
          var e = this;
          this.clearAutoDismissTimer(),
            (this.opened = !0),
            this.adapter.notifyOpening(),
            this.adapter.removeClass(sn),
            this.adapter.addClass(dn),
            this.adapter.announce(),
            this.runNextAnimationFrame(function () {
              e.adapter.addClass(cn),
                (e.animationTimer = setTimeout(function () {
                  var t = e.getTimeoutMs();
                  e.handleAnimationTimerEnd(),
                    e.adapter.notifyOpened(),
                    t !== an.INDETERMINATE &&
                      (e.autoDismissTimer = setTimeout(function () {
                        e.close(pn);
                      }, t));
                }, an.SNACKBAR_ANIMATION_OPEN_TIME_MS));
            });
        }),
        (r.prototype.close = function (e) {
          var t = this;
          void 0 === e && (e = ""),
            this.opened &&
              (cancelAnimationFrame(this.animationFrame),
              (this.animationFrame = 0),
              this.clearAutoDismissTimer(),
              (this.opened = !1),
              this.adapter.notifyClosing(e),
              this.adapter.addClass(nn.CLOSING),
              this.adapter.removeClass(nn.OPEN),
              this.adapter.removeClass(nn.OPENING),
              clearTimeout(this.animationTimer),
              (this.animationTimer = setTimeout(function () {
                t.handleAnimationTimerEnd(), t.adapter.notifyClosed(e);
              }, an.SNACKBAR_ANIMATION_CLOSE_TIME_MS)));
        }),
        (r.prototype.isOpen = function () {
          return this.opened;
        }),
        (r.prototype.getTimeoutMs = function () {
          return this.autoDismissTimeoutMs;
        }),
        (r.prototype.setTimeoutMs = function (e) {
          var t = an.MIN_AUTO_DISMISS_TIMEOUT_MS,
            i = an.MAX_AUTO_DISMISS_TIMEOUT_MS,
            r = an.INDETERMINATE;
          if (!(e === an.INDETERMINATE || (e <= i && e >= t)))
            throw new Error(
              "\n        timeoutMs must be an integer in the range " + t + "–" + i + "\n        (or " + r + " to disable), but got '" + e + "'"
            );
          this.autoDismissTimeoutMs = e;
        }),
        (r.prototype.getCloseOnEscape = function () {
          return this.closeOnEscape;
        }),
        (r.prototype.setCloseOnEscape = function (e) {
          this.closeOnEscape = e;
        }),
        (r.prototype.handleKeyDown = function (e) {
          ("Escape" === e.key || 27 === e.keyCode) && this.getCloseOnEscape() && this.close(pn);
        }),
        (r.prototype.handleActionButtonClick = function (e) {
          this.close(ln);
        }),
        (r.prototype.handleActionIconClick = function (e) {
          this.close(pn);
        }),
        (r.prototype.clearAutoDismissTimer = function () {
          clearTimeout(this.autoDismissTimer), (this.autoDismissTimer = 0);
        }),
        (r.prototype.handleAnimationTimerEnd = function () {
          (this.animationTimer = 0), this.adapter.removeClass(nn.OPENING), this.adapter.removeClass(nn.CLOSING);
        }),
        (r.prototype.runNextAnimationFrame = function (e) {
          var t = this;
          cancelAnimationFrame(this.animationFrame),
            (this.animationFrame = requestAnimationFrame(function () {
              (t.animationFrame = 0), clearTimeout(t.animationTimer), (t.animationTimer = setTimeout(e, 0));
            }));
        }),
        r
      );
    })(rn),
    { I: hn } = Ce,
    un = (e) => void 0 === e.strings,
    fn = {},
    bn = (e, t) => {
      var i, r;
      const n = e._$AN;
      if (void 0 === n) return !1;
      for (const e of n) null === (r = (i = e)._$AO) || void 0 === r || r.call(i, t, !1), bn(e, t);
      return !0;
    },
    gn = (e) => {
      let t, i;
      do {
        if (void 0 === (t = e._$AM)) break;
        (i = t._$AN), i.delete(e), (e = t);
      } while (0 === (null == i ? void 0 : i.size));
    },
    vn = (e) => {
      for (let t; (t = e._$AM); e = t) {
        let i = t._$AN;
        if (void 0 === i) t._$AN = i = new Set();
        else if (i.has(e)) break;
        i.add(e), yn(t);
      }
    };
  function _n(e) {
    void 0 !== this._$AN ? (gn(this), (this._$AM = e), vn(this)) : (this._$AM = e);
  }
  function xn(e, t = !1, i = 0) {
    const r = this._$AH,
      n = this._$AN;
    if (void 0 !== n && 0 !== n.size)
      if (t)
        if (Array.isArray(r)) for (let e = i; e < r.length; e++) bn(r[e], !1), gn(r[e]);
        else null != r && (bn(r, !1), gn(r));
      else bn(this, e);
  }
  const yn = (e) => {
    var t, i, r, n;
    2 == e.type && ((null !== (t = (r = e)._$AP) && void 0 !== t) || (r._$AP = xn), (null !== (i = (n = e)._$AQ) && void 0 !== i) || (n._$AQ = _n));
  };
  class wn extends it {
    constructor() {
      super(...arguments), (this._$AN = void 0);
    }
    _$AT(e, t, i) {
      super._$AT(e, t, i), vn(this), (this.isConnected = e._$AU);
    }
    _$AO(e, t = !0) {
      var i, r;
      e !== this.isConnected &&
        ((this.isConnected = e),
        e ? null === (i = this.reconnected) || void 0 === i || i.call(this) : null === (r = this.disconnected) || void 0 === r || r.call(this)),
        t && (bn(this, e), gn(this));
    }
    setValue(e) {
      if (un(this._$Ct)) this._$Ct._$AI(e, this);
      else {
        const t = [...this._$Ct._$AH];
        (t[this._$Ci] = e), this._$Ct._$AI(t, this, 0);
      }
    }
    disconnected() {}
    reconnected() {}
  }
  const { ARIA_LIVE_DELAY_MS: En } = mn.numbers,
    kn = tt(
      class extends wn {
        constructor(e) {
          if ((super(e), (this.labelEl = null), (this.timerId = null), (this.previousPart = null), 2 !== e.type))
            throw new Error("AccessibleSnackbarLabel only supports child parts.");
        }
        update(e, [t, i]) {
          var r;
          if (!i) return;
          if (null === this.labelEl) {
            const i = document.createElement("div"),
              n = me`<div class="mdc-snackbar__label" role="status" aria-live="polite"></div>`;
            Re(n, i);
            const o = i.firstElementChild;
            return (o.textContent = t), null === (r = e.endNode) || void 0 === r || r.parentNode.insertBefore(o, e.endNode), (this.labelEl = o), o;
          }
          const n = this.labelEl;
          n.setAttribute("aria-live", "off"), (n.textContent = "");
          const o = document.createElement("span");
          return (
            (o.style.display = "inline-block"),
            (o.style.width = "0"),
            (o.style.height = "1px"),
            (o.textContent = " "),
            n.appendChild(o),
            n.setAttribute("data-mdc-snackbar-label-text", t),
            null !== this.timerId && clearTimeout(this.timerId),
            (this.timerId = window.setTimeout(() => {
              (this.timerId = null),
                n.setAttribute("aria-live", "polite"),
                n.removeAttribute("data-mdc-snackbar-label-text"),
                (n.textContent = t),
                this.setValue(this.labelEl);
            }, En)),
            n
          );
        }
        render(e, t) {
          return t
            ? me`
      <div class="mdc-snackbar__label" role="status" aria-live="polite">${e}</div>`
            : me``;
        }
      }
    ),
    { OPENING_EVENT: Tn, OPENED_EVENT: An, CLOSING_EVENT: In, CLOSED_EVENT: Cn } = mn.strings;
  class Sn extends Xe {
    constructor() {
      super(...arguments),
        (this.mdcFoundationClass = mn),
        (this.open = !1),
        (this.timeoutMs = 5e3),
        (this.closeOnEscape = !1),
        (this.labelText = ""),
        (this.stacked = !1),
        (this.leading = !1),
        (this.reason = "");
    }
    render() {
      const e = { "mdc-snackbar--stacked": this.stacked, "mdc-snackbar--leading": this.leading };
      return me`
      <div class="mdc-snackbar ${rt(e)}" @keydown="${this._handleKeydown}">
        <div class="mdc-snackbar__surface">
          ${kn(this.labelText, this.open)}
          <div class="mdc-snackbar__actions">
            <slot name="action" @click="${this._handleActionClick}"></slot>
            <slot name="dismiss" @click="${this._handleDismissClick}"></slot>
          </div>
        </div>
      </div>`;
    }
    createAdapter() {
      return Object.assign(Object.assign({}, ze(this.mdcRoot)), {
        announce: () => {},
        notifyClosed: (e) => {
          this.dispatchEvent(new CustomEvent(Cn, { bubbles: !0, cancelable: !0, detail: { reason: e } }));
        },
        notifyClosing: (e) => {
          (this.open = !1), this.dispatchEvent(new CustomEvent(In, { bubbles: !0, cancelable: !0, detail: { reason: e } }));
        },
        notifyOpened: () => {
          this.dispatchEvent(new CustomEvent(An, { bubbles: !0, cancelable: !0 }));
        },
        notifyOpening: () => {
          (this.open = !0), this.dispatchEvent(new CustomEvent(Tn, { bubbles: !0, cancelable: !0 }));
        },
      });
    }
    show() {
      this.open = !0;
    }
    close(e = "") {
      (this.reason = e), (this.open = !1);
    }
    firstUpdated() {
      super.firstUpdated(), this.open && this.mdcFoundation.open();
    }
    _handleKeydown(e) {
      this.mdcFoundation.handleKeyDown(e);
    }
    _handleActionClick(e) {
      this.mdcFoundation.handleActionButtonClick(e);
    }
    _handleDismissClick(e) {
      this.mdcFoundation.handleActionIconClick(e);
    }
  }
  r([T(".mdc-snackbar")], Sn.prototype, "mdcRoot", void 0),
    r([T(".mdc-snackbar__label")], Sn.prototype, "labelElement", void 0),
    r(
      [
        y({ type: Boolean, reflect: !0 }),
        Ot(function (e) {
          this.mdcFoundation && (e ? this.mdcFoundation.open() : (this.mdcFoundation.close(this.reason), (this.reason = "")));
        }),
      ],
      Sn.prototype,
      "open",
      void 0
    ),
    r(
      [
        Ot(function (e) {
          this.mdcFoundation.setTimeoutMs(e);
        }),
        y({ type: Number }),
      ],
      Sn.prototype,
      "timeoutMs",
      void 0
    ),
    r(
      [
        Ot(function (e) {
          this.mdcFoundation.setCloseOnEscape(e);
        }),
        y({ type: Boolean }),
      ],
      Sn.prototype,
      "closeOnEscape",
      void 0
    ),
    r([y({ type: String })], Sn.prototype, "labelText", void 0),
    r([y({ type: Boolean })], Sn.prototype, "stacked", void 0),
    r([y({ type: Boolean })], Sn.prototype, "leading", void 0);
  const Rn = P`.mdc-snackbar{z-index:8;margin:8px;display:none;position:fixed;right:0;bottom:0;left:0;align-items:center;justify-content:center;box-sizing:border-box;pointer-events:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mdc-snackbar__surface{background-color:#333333}.mdc-snackbar__label{color:rgba(255, 255, 255, 0.87)}.mdc-snackbar__surface{min-width:344px}@media(max-width: 480px),(max-width: 344px){.mdc-snackbar__surface{min-width:100%}}.mdc-snackbar__surface{max-width:672px}.mdc-snackbar__surface{box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2),0px 6px 10px 0px rgba(0, 0, 0, 0.14),0px 1px 18px 0px rgba(0,0,0,.12)}.mdc-snackbar__surface{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-snackbar--opening,.mdc-snackbar--open,.mdc-snackbar--closing{display:flex}.mdc-snackbar--open .mdc-snackbar__label,.mdc-snackbar--open .mdc-snackbar__actions{visibility:visible}.mdc-snackbar--leading{justify-content:flex-start}.mdc-snackbar--stacked .mdc-snackbar__label{padding-left:16px;padding-right:8px;padding-bottom:12px}[dir=rtl] .mdc-snackbar--stacked .mdc-snackbar__label,.mdc-snackbar--stacked .mdc-snackbar__label[dir=rtl]{padding-left:8px;padding-right:16px}.mdc-snackbar--stacked .mdc-snackbar__surface{flex-direction:column;align-items:flex-start}.mdc-snackbar--stacked .mdc-snackbar__actions{align-self:flex-end;margin-bottom:8px}.mdc-snackbar__surface{padding-left:0;padding-right:8px;display:flex;align-items:center;justify-content:flex-start;box-sizing:border-box;transform:scale(0.8);opacity:0}.mdc-snackbar__surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid transparent;border-radius:inherit;content:"";pointer-events:none}@media screen and (forced-colors: active){.mdc-snackbar__surface::before{border-color:CanvasText}}[dir=rtl] .mdc-snackbar__surface,.mdc-snackbar__surface[dir=rtl]{padding-left:8px;padding-right:0}.mdc-snackbar--open .mdc-snackbar__surface{transform:scale(1);opacity:1;pointer-events:auto;transition:opacity 150ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-snackbar--closing .mdc-snackbar__surface{transform:scale(1);transition:opacity 75ms 0ms cubic-bezier(0.4, 0, 1, 1)}.mdc-snackbar__label{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);padding-left:16px;padding-right:8px;width:100%;flex-grow:1;box-sizing:border-box;margin:0;visibility:hidden;padding-top:14px;padding-bottom:14px}[dir=rtl] .mdc-snackbar__label,.mdc-snackbar__label[dir=rtl]{padding-left:8px;padding-right:16px}.mdc-snackbar__label::before{display:inline;content:attr(data-mdc-snackbar-label-text)}.mdc-snackbar__actions{display:flex;flex-shrink:0;align-items:center;box-sizing:border-box;visibility:hidden}.mdc-snackbar__action:not(:disabled){color:#bb86fc}.mdc-snackbar__action .mdc-button__ripple::before,.mdc-snackbar__action .mdc-button__ripple::after{background-color:#bb86fc;background-color:var(--mdc-ripple-color, #bb86fc)}.mdc-snackbar__action:hover .mdc-button__ripple::before,.mdc-snackbar__action.mdc-ripple-surface--hover .mdc-button__ripple::before{opacity:0.08;opacity:var(--mdc-ripple-hover-opacity, 0.08)}.mdc-snackbar__action.mdc-ripple-upgraded--background-focused .mdc-button__ripple::before,.mdc-snackbar__action:not(.mdc-ripple-upgraded):focus .mdc-button__ripple::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-snackbar__action:not(.mdc-ripple-upgraded) .mdc-button__ripple::after{transition:opacity 150ms linear}.mdc-snackbar__action:not(.mdc-ripple-upgraded):active .mdc-button__ripple::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-snackbar__action.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-snackbar__dismiss{color:rgba(255, 255, 255, 0.87)}.mdc-snackbar__dismiss .mdc-icon-button__ripple::before,.mdc-snackbar__dismiss .mdc-icon-button__ripple::after{background-color:rgba(255, 255, 255, 0.87);background-color:var(--mdc-ripple-color, rgba(255, 255, 255, 0.87))}.mdc-snackbar__dismiss:hover .mdc-icon-button__ripple::before,.mdc-snackbar__dismiss.mdc-ripple-surface--hover .mdc-icon-button__ripple::before{opacity:0.08;opacity:var(--mdc-ripple-hover-opacity, 0.08)}.mdc-snackbar__dismiss.mdc-ripple-upgraded--background-focused .mdc-icon-button__ripple::before,.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded):focus .mdc-icon-button__ripple::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded) .mdc-icon-button__ripple::after{transition:opacity 150ms linear}.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded):active .mdc-icon-button__ripple::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-snackbar__dismiss.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-snackbar__dismiss.mdc-snackbar__dismiss{width:36px;height:36px;padding:6px;font-size:18px}.mdc-snackbar__dismiss.mdc-snackbar__dismiss .mdc-icon-button__focus-ring{display:none}.mdc-snackbar__dismiss.mdc-snackbar__dismiss.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-snackbar__dismiss.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{display:block;max-height:36px;max-width:36px}@media screen and (forced-colors: active){.mdc-snackbar__dismiss.mdc-snackbar__dismiss.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-snackbar__dismiss.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{pointer-events:none;border:2px solid transparent;border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:100%;width:100%}}@media screen and (forced-colors: active)and (forced-colors: active){.mdc-snackbar__dismiss.mdc-snackbar__dismiss.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-snackbar__dismiss.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{border-color:CanvasText}}@media screen and (forced-colors: active){.mdc-snackbar__dismiss.mdc-snackbar__dismiss.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring::after,.mdc-snackbar__dismiss.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring::after{content:"";border:2px solid transparent;border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px)}}@media screen and (forced-colors: active)and (forced-colors: active){.mdc-snackbar__dismiss.mdc-snackbar__dismiss.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring::after,.mdc-snackbar__dismiss.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring::after{border-color:CanvasText}}.mdc-snackbar__dismiss.mdc-snackbar__dismiss.mdc-icon-button--reduced-size .mdc-icon-button__ripple{width:36px;height:36px;margin-top:0px;margin-bottom:0px;margin-right:0px;margin-left:0px}.mdc-snackbar__dismiss.mdc-snackbar__dismiss.mdc-icon-button--reduced-size.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-snackbar__dismiss.mdc-snackbar__dismiss.mdc-icon-button--reduced-size:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{max-height:36px;max-width:36px}.mdc-snackbar__dismiss.mdc-snackbar__dismiss .mdc-icon-button__touch{position:absolute;top:50%;height:36px;left:50%;width:36px;transform:translate(-50%, -50%)}.mdc-snackbar__action+.mdc-snackbar__dismiss{margin-left:8px;margin-right:0}[dir=rtl] .mdc-snackbar__action+.mdc-snackbar__dismiss,.mdc-snackbar__action+.mdc-snackbar__dismiss[dir=rtl]{margin-left:0;margin-right:8px}slot[name=action]::slotted(mwc-button){--mdc-theme-primary: var( --mdc-snackbar-action-color, #bb86fc )}slot[name=dismiss]::slotted(mwc-icon-button){--mdc-icon-size: 18px;--mdc-icon-button-size: 36px;color:rgba(255, 255, 255, 0.87);margin-left:8px;margin-right:0}[dir=rtl] slot[name=dismiss]::slotted(mwc-icon-button),::slotted(mwc-icon-buttonslot[name=dismiss][dir=rtl]){margin-left:0;margin-right:8px}`;
  let On = class extends Sn {};
  (On.styles = [Rn]), (On = r([_("mwc-snackbar")], On));
  var Ln = (function () {
    function e(e) {
      void 0 === e && (e = {}), (this.adapter = e);
    }
    return (
      Object.defineProperty(e, "cssClasses", {
        get: function () {
          return {};
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e, "strings", {
        get: function () {
          return {};
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e, "numbers", {
        get: function () {
          return {};
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e, "defaultAdapter", {
        get: function () {
          return {};
        },
        enumerable: !1,
        configurable: !0,
      }),
      (e.prototype.init = function () {}),
      (e.prototype.destroy = function () {}),
      e
    );
  })();
  var Fn = new WeakMap();
  var Dn,
    Pn,
    Nn = (function (e) {
      function r(t) {
        var i = e.call(this, t) || this;
        return (i.unobserves = new Set()), i;
      }
      return (
        t(r, e),
        (r.prototype.destroy = function () {
          e.prototype.destroy.call(this), this.unobserve();
        }),
        (r.prototype.observe = function (e, t) {
          var i,
            r,
            o = this,
            a = [];
          try {
            for (var d = n(Object.keys(t)), c = d.next(); !c.done; c = d.next()) {
              var s = c.value,
                l = t[s].bind(this);
              a.push(this.observeProperty(e, s, l));
            }
          } catch (e) {
            i = { error: e };
          } finally {
            try {
              c && !c.done && (r = d.return) && r.call(d);
            } finally {
              if (i) throw i.error;
            }
          }
          var p = function () {
            var e, t;
            try {
              for (var i = n(a), r = i.next(); !r.done; r = i.next()) (0, r.value)();
            } catch (t) {
              e = { error: t };
            } finally {
              try {
                r && !r.done && (t = i.return) && t.call(i);
              } finally {
                if (e) throw e.error;
              }
            }
            o.unobserves.delete(p);
          };
          return this.unobserves.add(p), p;
        }),
        (r.prototype.observeProperty = function (e, t, r) {
          return (function (e, t, r) {
            var o = (function (e, t) {
                var r = new Map();
                Fn.has(e) ||
                  Fn.set(e, {
                    isEnabled: !0,
                    getObservers: function (e) {
                      var t = r.get(e) || [];
                      return r.has(e) || r.set(e, t), t;
                    },
                    installedProperties: new Set(),
                  });
                var o = Fn.get(e);
                if (o.installedProperties.has(t)) return o;
                var a = (function (e, t) {
                    for (var i, r = e; r && !(i = Object.getOwnPropertyDescriptor(r, t)); ) r = Object.getPrototypeOf(r);
                    return i;
                  })(e, t) || { configurable: !0, enumerable: !0, value: e[t], writable: !0 },
                  d = i({}, a),
                  c = a.get,
                  s = a.set;
                if ("value" in a) {
                  delete d.value, delete d.writable;
                  var l = a.value;
                  (c = function () {
                    return l;
                  }),
                    a.writable &&
                      (s = function (e) {
                        l = e;
                      });
                }
                return (
                  c &&
                    (d.get = function () {
                      return c.call(this);
                    }),
                  s &&
                    (d.set = function (e) {
                      var i,
                        r,
                        a = c ? c.call(this) : e;
                      if ((s.call(this, e), o.isEnabled && (!c || e !== a)))
                        try {
                          for (var d = n(o.getObservers(t)), l = d.next(); !l.done; l = d.next()) (0, l.value)(e, a);
                        } catch (e) {
                          i = { error: e };
                        } finally {
                          try {
                            l && !l.done && (r = d.return) && r.call(d);
                          } finally {
                            if (i) throw i.error;
                          }
                        }
                    }),
                  o.installedProperties.add(t),
                  Object.defineProperty(e, t, d),
                  o
                );
              })(e, t),
              a = o.getObservers(t);
            return (
              a.push(r),
              function () {
                a.splice(a.indexOf(r), 1);
              }
            );
          })(e, t, r);
        }),
        (r.prototype.setObserversEnabled = function (e, t) {
          !(function (e, t) {
            var i = Fn.get(e);
            i && (i.isEnabled = t);
          })(e, t);
        }),
        (r.prototype.unobserve = function () {
          var e, t;
          try {
            for (var i = n(a([], o(this.unobserves))), r = i.next(); !r.done; r = i.next()) (0, r.value)();
          } catch (t) {
            e = { error: t };
          } finally {
            try {
              r && !r.done && (t = i.return) && t.call(i);
            } finally {
              if (e) throw e.error;
            }
          }
        }),
        r
      );
    })(Ln);
  !(function (e) {
    (e.PROCESSING = "mdc-switch--processing"), (e.SELECTED = "mdc-switch--selected"), (e.UNSELECTED = "mdc-switch--unselected");
  })(Dn || (Dn = {})),
    (function (e) {
      e.RIPPLE = ".mdc-switch__ripple";
    })(Pn || (Pn = {}));
  var $n = (function (e) {
    function i(t) {
      var i = e.call(this, t) || this;
      return (i.handleClick = i.handleClick.bind(i)), i;
    }
    return (
      t(i, e),
      (i.prototype.init = function () {
        this.observe(this.adapter.state, { disabled: this.stopProcessingIfDisabled, processing: this.stopProcessingIfDisabled });
      }),
      (i.prototype.handleClick = function () {
        this.adapter.state.disabled || (this.adapter.state.selected = !this.adapter.state.selected);
      }),
      (i.prototype.stopProcessingIfDisabled = function () {
        this.adapter.state.disabled && (this.adapter.state.processing = !1);
      }),
      i
    );
  })(Nn);
  !(function (e) {
    function i() {
      return (null !== e && e.apply(this, arguments)) || this;
    }
    t(i, e),
      (i.prototype.init = function () {
        e.prototype.init.call(this),
          this.observe(this.adapter.state, { disabled: this.onDisabledChange, processing: this.onProcessingChange, selected: this.onSelectedChange });
      }),
      (i.prototype.initFromDOM = function () {
        this.setObserversEnabled(this.adapter.state, !1),
          (this.adapter.state.selected = this.adapter.hasClass(Dn.SELECTED)),
          this.onSelectedChange(),
          (this.adapter.state.disabled = this.adapter.isDisabled()),
          (this.adapter.state.processing = this.adapter.hasClass(Dn.PROCESSING)),
          this.setObserversEnabled(this.adapter.state, !0),
          this.stopProcessingIfDisabled();
      }),
      (i.prototype.onDisabledChange = function () {
        this.adapter.setDisabled(this.adapter.state.disabled);
      }),
      (i.prototype.onProcessingChange = function () {
        this.toggleClass(this.adapter.state.processing, Dn.PROCESSING);
      }),
      (i.prototype.onSelectedChange = function () {
        this.adapter.setAriaChecked(String(this.adapter.state.selected)),
          this.toggleClass(this.adapter.state.selected, Dn.SELECTED),
          this.toggleClass(!this.adapter.state.selected, Dn.UNSELECTED);
      }),
      (i.prototype.toggleClass = function (e, t) {
        e ? this.adapter.addClass(t) : this.adapter.removeClass(t);
      });
  })($n);
  class Mn extends Et {
    constructor() {
      super(...arguments),
        (this.processing = !1),
        (this.selected = !1),
        (this.ariaLabel = ""),
        (this.ariaLabelledBy = ""),
        (this.shouldRenderRipple = !1),
        (this.rippleHandlers = new st(() => ((this.shouldRenderRipple = !0), this.ripple))),
        (this.name = ""),
        (this.value = "on"),
        (this.mdcFoundationClass = $n);
    }
    setFormData(e) {
      this.name && this.selected && e.append(this.name, this.value);
    }
    click() {
      var e, t;
      this.disabled || (null === (e = this.mdcRoot) || void 0 === e || e.focus(), null === (t = this.mdcRoot) || void 0 === t || t.click());
    }
    render() {
      return me`
      <button
        type="button"
        class="mdc-switch ${rt(this.getRenderClasses())}"
        role="switch"
        aria-checked="${this.selected}"
        aria-label="${lt(this.ariaLabel || void 0)}"
        aria-labelledby="${lt(this.ariaLabelledBy || void 0)}"
        .disabled=${this.disabled}
        @click=${this.handleClick}
        @focus="${this.handleFocus}"
        @blur="${this.handleBlur}"
        @pointerdown="${this.handlePointerDown}"
        @pointerup="${this.handlePointerUp}"
        @pointerenter="${this.handlePointerEnter}"
        @pointerleave="${this.handlePointerLeave}"
      >
        <div class="mdc-switch__track"></div>
        <div class="mdc-switch__handle-track">
          ${this.renderHandle()}
        </div>
      </button>

      <input
        type="checkbox"
        aria-hidden="true"
        name="${this.name}"
        .checked=${this.selected}
        .value=${this.value}
      >
    `;
    }
    getRenderClasses() {
      return { "mdc-switch--processing": this.processing, "mdc-switch--selected": this.selected, "mdc-switch--unselected": !this.selected };
    }
    renderHandle() {
      return me`
      <div class="mdc-switch__handle">
        ${this.renderShadow()}
        ${this.renderRipple()}
        <div class="mdc-switch__icons">
          ${this.renderOnIcon()}
          ${this.renderOffIcon()}
        </div>
      </div>
    `;
    }
    renderShadow() {
      return me`
      <div class="mdc-switch__shadow">
        <div class="mdc-elevation-overlay"></div>
      </div>
    `;
    }
    renderRipple() {
      return this.shouldRenderRipple
        ? me`
        <div class="mdc-switch__ripple">
          <mwc-ripple
            internalUseStateLayerCustomProperties
            .disabled="${this.disabled}"
            unbounded>
          </mwc-ripple>
        </div>
      `
        : me``;
    }
    renderOnIcon() {
      return me`
      <svg class="mdc-switch__icon mdc-switch__icon--on" viewBox="0 0 24 24">
        <path d="M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z" />
      </svg>
    `;
    }
    renderOffIcon() {
      return me`
      <svg class="mdc-switch__icon mdc-switch__icon--off" viewBox="0 0 24 24">
        <path d="M20 13H4v-2h16v2z" />
      </svg>
    `;
    }
    handleClick() {
      var e;
      null === (e = this.mdcFoundation) || void 0 === e || e.handleClick();
    }
    handleFocus() {
      this.rippleHandlers.startFocus();
    }
    handleBlur() {
      this.rippleHandlers.endFocus();
    }
    handlePointerDown(e) {
      e.target.setPointerCapture(e.pointerId), this.rippleHandlers.startPress(e);
    }
    handlePointerUp() {
      this.rippleHandlers.endPress();
    }
    handlePointerEnter() {
      this.rippleHandlers.startHover();
    }
    handlePointerLeave() {
      this.rippleHandlers.endHover();
    }
    createAdapter() {
      return { state: this };
    }
  }
  r([y({ type: Boolean })], Mn.prototype, "processing", void 0),
    r([y({ type: Boolean })], Mn.prototype, "selected", void 0),
    r([ct, y({ type: String, attribute: "aria-label" })], Mn.prototype, "ariaLabel", void 0),
    r([ct, y({ type: String, attribute: "aria-labelledby" })], Mn.prototype, "ariaLabelledBy", void 0),
    r([A("mwc-ripple")], Mn.prototype, "ripple", void 0),
    r([w()], Mn.prototype, "shouldRenderRipple", void 0),
    r([y({ type: String, reflect: !0 })], Mn.prototype, "name", void 0),
    r([y({ type: String })], Mn.prototype, "value", void 0),
    r([T("input")], Mn.prototype, "formElement", void 0),
    r([T(".mdc-switch")], Mn.prototype, "mdcRoot", void 0),
    r([k({ passive: !0 })], Mn.prototype, "handlePointerDown", null);
  const zn = P`.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:0;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1);background-color:#fff;background-color:var(--mdc-elevation-overlay-color, #fff)}.mdc-switch{align-items:center;background:none;border:none;cursor:pointer;display:inline-flex;flex-shrink:0;margin:0;outline:none;overflow:visible;padding:0;position:relative}.mdc-switch:disabled{cursor:default;pointer-events:none}.mdc-switch__track{overflow:hidden;position:relative;width:100%}.mdc-switch__track::before,.mdc-switch__track::after{border:1px solid transparent;border-radius:inherit;box-sizing:border-box;content:"";height:100%;left:0;position:absolute;width:100%}@media screen and (forced-colors: active){.mdc-switch__track::before,.mdc-switch__track::after{border-color:currentColor}}.mdc-switch__track::before{transition:transform 75ms 0ms cubic-bezier(0, 0, 0.2, 1);transform:translateX(0)}.mdc-switch__track::after{transition:transform 75ms 0ms cubic-bezier(0.4, 0, 0.6, 1);transform:translateX(-100%)}[dir=rtl] .mdc-switch__track::after,.mdc-switch__track[dir=rtl]::after{transform:translateX(100%)}.mdc-switch--selected .mdc-switch__track::before{transition:transform 75ms 0ms cubic-bezier(0.4, 0, 0.6, 1);transform:translateX(100%)}[dir=rtl] .mdc-switch--selected .mdc-switch__track::before,.mdc-switch--selected .mdc-switch__track[dir=rtl]::before{transform:translateX(-100%)}.mdc-switch--selected .mdc-switch__track::after{transition:transform 75ms 0ms cubic-bezier(0, 0, 0.2, 1);transform:translateX(0)}.mdc-switch__handle-track{height:100%;pointer-events:none;position:absolute;top:0;transition:transform 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);left:0;right:auto;transform:translateX(0)}[dir=rtl] .mdc-switch__handle-track,.mdc-switch__handle-track[dir=rtl]{left:auto;right:0}.mdc-switch--selected .mdc-switch__handle-track{transform:translateX(100%)}[dir=rtl] .mdc-switch--selected .mdc-switch__handle-track,.mdc-switch--selected .mdc-switch__handle-track[dir=rtl]{transform:translateX(-100%)}.mdc-switch__handle{display:flex;pointer-events:auto;position:absolute;top:50%;transform:translateY(-50%);left:0;right:auto}[dir=rtl] .mdc-switch__handle,.mdc-switch__handle[dir=rtl]{left:auto;right:0}.mdc-switch__handle::before,.mdc-switch__handle::after{border:1px solid transparent;border-radius:inherit;box-sizing:border-box;content:"";width:100%;height:100%;left:0;position:absolute;top:0;transition:background-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1),border-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);z-index:-1}@media screen and (forced-colors: active){.mdc-switch__handle::before,.mdc-switch__handle::after{border-color:currentColor}}.mdc-switch__shadow{border-radius:inherit;bottom:0;left:0;position:absolute;right:0;top:0}.mdc-elevation-overlay{bottom:0;left:0;right:0;top:0}.mdc-switch__ripple{left:50%;position:absolute;top:50%;transform:translate(-50%, -50%);z-index:-1}.mdc-switch:disabled .mdc-switch__ripple{display:none}.mdc-switch__icons{height:100%;position:relative;width:100%;z-index:1}.mdc-switch__icon{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0;opacity:0;transition:opacity 30ms 0ms cubic-bezier(0.4, 0, 1, 1)}.mdc-switch--selected .mdc-switch__icon--on,.mdc-switch--unselected .mdc-switch__icon--off{opacity:1;transition:opacity 45ms 30ms cubic-bezier(0, 0, 0.2, 1)}:host{display:inline-flex;outline:none}input{display:none}.mdc-switch{width:36px;width:var(--mdc-switch-track-width, 36px)}.mdc-switch.mdc-switch--selected:enabled .mdc-switch__handle::after{background:#6200ee;background:var(--mdc-switch-selected-handle-color, var(--mdc-theme-primary, #6200ee))}.mdc-switch.mdc-switch--selected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after{background:#310077;background:var(--mdc-switch-selected-hover-handle-color, #310077)}.mdc-switch.mdc-switch--selected:enabled:focus:not(:active) .mdc-switch__handle::after{background:#310077;background:var(--mdc-switch-selected-focus-handle-color, #310077)}.mdc-switch.mdc-switch--selected:enabled:active .mdc-switch__handle::after{background:#310077;background:var(--mdc-switch-selected-pressed-handle-color, #310077)}.mdc-switch.mdc-switch--selected:disabled .mdc-switch__handle::after{background:#424242;background:var(--mdc-switch-disabled-selected-handle-color, #424242)}.mdc-switch.mdc-switch--unselected:enabled .mdc-switch__handle::after{background:#616161;background:var(--mdc-switch-unselected-handle-color, #616161)}.mdc-switch.mdc-switch--unselected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after{background:#212121;background:var(--mdc-switch-unselected-hover-handle-color, #212121)}.mdc-switch.mdc-switch--unselected:enabled:focus:not(:active) .mdc-switch__handle::after{background:#212121;background:var(--mdc-switch-unselected-focus-handle-color, #212121)}.mdc-switch.mdc-switch--unselected:enabled:active .mdc-switch__handle::after{background:#212121;background:var(--mdc-switch-unselected-pressed-handle-color, #212121)}.mdc-switch.mdc-switch--unselected:disabled .mdc-switch__handle::after{background:#424242;background:var(--mdc-switch-disabled-unselected-handle-color, #424242)}.mdc-switch .mdc-switch__handle::before{background:#fff;background:var(--mdc-switch-handle-surface-color, var(--mdc-theme-surface, #fff))}.mdc-switch:enabled .mdc-switch__shadow{--mdc-elevation-box-shadow-for-gss:0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);box-shadow:0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-switch-handle-elevation, var(--mdc-elevation-box-shadow-for-gss))}.mdc-switch:disabled .mdc-switch__shadow{--mdc-elevation-box-shadow-for-gss:0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-switch-disabled-handle-elevation, var(--mdc-elevation-box-shadow-for-gss))}.mdc-switch .mdc-switch__focus-ring-wrapper,.mdc-switch .mdc-switch__handle{height:20px;height:var(--mdc-switch-handle-height, 20px)}.mdc-switch:disabled .mdc-switch__handle::after{opacity:0.38;opacity:var(--mdc-switch-disabled-handle-opacity, 0.38)}.mdc-switch .mdc-switch__handle{border-radius:10px;border-radius:var(--mdc-switch-handle-shape, 10px)}.mdc-switch .mdc-switch__handle{width:20px;width:var(--mdc-switch-handle-width, 20px)}.mdc-switch .mdc-switch__handle-track{width:calc(100% - 20px);width:calc(100% - var(--mdc-switch-handle-width, 20px))}.mdc-switch.mdc-switch--selected:enabled .mdc-switch__icon{fill:#fff;fill:var(--mdc-switch-selected-icon-color, var(--mdc-theme-on-primary, #fff))}.mdc-switch.mdc-switch--selected:disabled .mdc-switch__icon{fill:#fff;fill:var(--mdc-switch-disabled-selected-icon-color, var(--mdc-theme-on-primary, #fff))}.mdc-switch.mdc-switch--unselected:enabled .mdc-switch__icon{fill:#fff;fill:var(--mdc-switch-unselected-icon-color, var(--mdc-theme-on-primary, #fff))}.mdc-switch.mdc-switch--unselected:disabled .mdc-switch__icon{fill:#fff;fill:var(--mdc-switch-disabled-unselected-icon-color, var(--mdc-theme-on-primary, #fff))}.mdc-switch.mdc-switch--selected:disabled .mdc-switch__icons{opacity:0.38;opacity:var(--mdc-switch-disabled-selected-icon-opacity, 0.38)}.mdc-switch.mdc-switch--unselected:disabled .mdc-switch__icons{opacity:0.38;opacity:var(--mdc-switch-disabled-unselected-icon-opacity, 0.38)}.mdc-switch.mdc-switch--selected .mdc-switch__icon{width:18px;width:var(--mdc-switch-selected-icon-size, 18px);height:18px;height:var(--mdc-switch-selected-icon-size, 18px)}.mdc-switch.mdc-switch--unselected .mdc-switch__icon{width:18px;width:var(--mdc-switch-unselected-icon-size, 18px);height:18px;height:var(--mdc-switch-unselected-icon-size, 18px)}.mdc-switch .mdc-switch__ripple{height:48px;height:var(--mdc-switch-state-layer-size, 48px);width:48px;width:var(--mdc-switch-state-layer-size, 48px)}.mdc-switch .mdc-switch__track{height:14px;height:var(--mdc-switch-track-height, 14px)}.mdc-switch:disabled .mdc-switch__track{opacity:0.12;opacity:var(--mdc-switch-disabled-track-opacity, 0.12)}.mdc-switch:enabled .mdc-switch__track::after{background:#d7bbff;background:var(--mdc-switch-selected-track-color, #d7bbff)}.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::after{background:#d7bbff;background:var(--mdc-switch-selected-hover-track-color, #d7bbff)}.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::after{background:#d7bbff;background:var(--mdc-switch-selected-focus-track-color, #d7bbff)}.mdc-switch:enabled:active .mdc-switch__track::after{background:#d7bbff;background:var(--mdc-switch-selected-pressed-track-color, #d7bbff)}.mdc-switch:disabled .mdc-switch__track::after{background:#424242;background:var(--mdc-switch-disabled-selected-track-color, #424242)}.mdc-switch:enabled .mdc-switch__track::before{background:#e0e0e0;background:var(--mdc-switch-unselected-track-color, #e0e0e0)}.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::before{background:#e0e0e0;background:var(--mdc-switch-unselected-hover-track-color, #e0e0e0)}.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::before{background:#e0e0e0;background:var(--mdc-switch-unselected-focus-track-color, #e0e0e0)}.mdc-switch:enabled:active .mdc-switch__track::before{background:#e0e0e0;background:var(--mdc-switch-unselected-pressed-track-color, #e0e0e0)}.mdc-switch:disabled .mdc-switch__track::before{background:#424242;background:var(--mdc-switch-disabled-unselected-track-color, #424242)}.mdc-switch .mdc-switch__track{border-radius:7px;border-radius:var(--mdc-switch-track-shape, 7px)}.mdc-switch.mdc-switch--selected{--mdc-ripple-focus-state-layer-color:var(--mdc-switch-selected-focus-state-layer-color, var(--mdc-theme-primary, #6200ee));--mdc-ripple-focus-state-layer-opacity:var(--mdc-switch-selected-focus-state-layer-opacity, 0.12);--mdc-ripple-hover-state-layer-color:var(--mdc-switch-selected-hover-state-layer-color, var(--mdc-theme-primary, #6200ee));--mdc-ripple-hover-state-layer-opacity:var(--mdc-switch-selected-hover-state-layer-opacity, 0.04);--mdc-ripple-pressed-state-layer-color:var(--mdc-switch-selected-pressed-state-layer-color, var(--mdc-theme-primary, #6200ee));--mdc-ripple-pressed-state-layer-opacity:var(--mdc-switch-selected-pressed-state-layer-opacity, 0.1)}.mdc-switch.mdc-switch--selected:enabled:focus:not(:active){--mdc-ripple-hover-state-layer-color:var(--mdc-switch-selected-focus-state-layer-color, var(--mdc-theme-primary, #6200ee))}.mdc-switch.mdc-switch--selected:enabled:active{--mdc-ripple-hover-state-layer-color:var(--mdc-switch-selected-pressed-state-layer-color, var(--mdc-theme-primary, #6200ee))}.mdc-switch.mdc-switch--unselected{--mdc-ripple-focus-state-layer-color:var(--mdc-switch-unselected-focus-state-layer-color, #424242);--mdc-ripple-focus-state-layer-opacity:var(--mdc-switch-unselected-focus-state-layer-opacity, 0.12);--mdc-ripple-hover-state-layer-color:var(--mdc-switch-unselected-hover-state-layer-color, #424242);--mdc-ripple-hover-state-layer-opacity:var(--mdc-switch-unselected-hover-state-layer-opacity, 0.04);--mdc-ripple-pressed-state-layer-color:var(--mdc-switch-unselected-pressed-state-layer-color, #424242);--mdc-ripple-pressed-state-layer-opacity:var(--mdc-switch-unselected-pressed-state-layer-opacity, 0.1)}.mdc-switch.mdc-switch--unselected:enabled:focus:not(:active){--mdc-ripple-hover-state-layer-color:var(--mdc-switch-unselected-focus-state-layer-color, #424242)}.mdc-switch.mdc-switch--unselected:enabled:active{--mdc-ripple-hover-state-layer-color:var(--mdc-switch-unselected-pressed-state-layer-color, #424242)}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-switch:disabled .mdc-switch__handle::after{opacity:1;opacity:var(--mdc-switch-disabled-handle-opacity, 1)}.mdc-switch.mdc-switch--selected:enabled .mdc-switch__icon{fill:ButtonText;fill:var(--mdc-switch-selected-icon-color, ButtonText)}.mdc-switch.mdc-switch--selected:disabled .mdc-switch__icon{fill:GrayText;fill:var(--mdc-switch-disabled-selected-icon-color, GrayText)}.mdc-switch.mdc-switch--unselected:enabled .mdc-switch__icon{fill:ButtonText;fill:var(--mdc-switch-unselected-icon-color, ButtonText)}.mdc-switch.mdc-switch--unselected:disabled .mdc-switch__icon{fill:GrayText;fill:var(--mdc-switch-disabled-unselected-icon-color, GrayText)}.mdc-switch.mdc-switch--selected:disabled .mdc-switch__icons{opacity:1;opacity:var(--mdc-switch-disabled-selected-icon-opacity, 1)}.mdc-switch.mdc-switch--unselected:disabled .mdc-switch__icons{opacity:1;opacity:var(--mdc-switch-disabled-unselected-icon-opacity, 1)}.mdc-switch:disabled .mdc-switch__track{opacity:1;opacity:var(--mdc-switch-disabled-track-opacity, 1)}}`;
  let Hn = class extends Mn {};
  (Hn.styles = [zn]), (Hn = r([_("mwc-switch")], Hn));
  var Bn = (function () {
      function e(e) {
        void 0 === e && (e = {}), (this.adapter = e);
      }
      return (
        Object.defineProperty(e, "cssClasses", {
          get: function () {
            return {};
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e, "strings", {
          get: function () {
            return {};
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e, "numbers", {
          get: function () {
            return {};
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e, "defaultAdapter", {
          get: function () {
            return {};
          },
          enumerable: !1,
          configurable: !0,
        }),
        (e.prototype.init = function () {}),
        (e.prototype.destroy = function () {}),
        e
      );
    })(),
    Vn = { ACTIVE: "mdc-tab-indicator--active", FADE: "mdc-tab-indicator--fade", NO_TRANSITION: "mdc-tab-indicator--no-transition" },
    Un = { CONTENT_SELECTOR: ".mdc-tab-indicator__content" },
    jn = (function (e) {
      function r(t) {
        return e.call(this, i(i({}, r.defaultAdapter), t)) || this;
      }
      return (
        t(r, e),
        Object.defineProperty(r, "cssClasses", {
          get: function () {
            return Vn;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(r, "strings", {
          get: function () {
            return Un;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(r, "defaultAdapter", {
          get: function () {
            return {
              addClass: function () {},
              removeClass: function () {},
              computeContentClientRect: function () {
                return { top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 };
              },
              setContentStyleProperty: function () {},
            };
          },
          enumerable: !1,
          configurable: !0,
        }),
        (r.prototype.computeContentClientRect = function () {
          return this.adapter.computeContentClientRect();
        }),
        r
      );
    })(Bn);
  const Xn = (function (e) {
      function i() {
        return (null !== e && e.apply(this, arguments)) || this;
      }
      return (
        t(i, e),
        (i.prototype.activate = function () {
          this.adapter.addClass(jn.cssClasses.ACTIVE);
        }),
        (i.prototype.deactivate = function () {
          this.adapter.removeClass(jn.cssClasses.ACTIVE);
        }),
        i
      );
    })(jn),
    Wn = (function (e) {
      function i() {
        return (null !== e && e.apply(this, arguments)) || this;
      }
      return (
        t(i, e),
        (i.prototype.activate = function (e) {
          if (e) {
            var t = this.computeContentClientRect(),
              i = e.width / t.width,
              r = e.left - t.left;
            this.adapter.addClass(jn.cssClasses.NO_TRANSITION),
              this.adapter.setContentStyleProperty("transform", "translateX(" + r + "px) scaleX(" + i + ")"),
              this.computeContentClientRect(),
              this.adapter.removeClass(jn.cssClasses.NO_TRANSITION),
              this.adapter.addClass(jn.cssClasses.ACTIVE),
              this.adapter.setContentStyleProperty("transform", "");
          } else this.adapter.addClass(jn.cssClasses.ACTIVE);
        }),
        (i.prototype.deactivate = function () {
          this.adapter.removeClass(jn.cssClasses.ACTIVE);
        }),
        i
      );
    })(jn);
  class Gn extends Xe {
    constructor() {
      super(...arguments), (this.icon = ""), (this.fade = !1);
    }
    get mdcFoundationClass() {
      return this.fade ? Xn : Wn;
    }
    render() {
      const e = { "mdc-tab-indicator__content--icon": this.icon, "material-icons": this.icon, "mdc-tab-indicator__content--underline": !this.icon };
      return me`
      <span class="mdc-tab-indicator ${rt({ "mdc-tab-indicator--fade": this.fade })}">
        <span class="mdc-tab-indicator__content ${rt(e)}">${this.icon}</span>
      </span>
      `;
    }
    updated(e) {
      e.has("fade") && this.createFoundation();
    }
    createAdapter() {
      return Object.assign(Object.assign({}, ze(this.mdcRoot)), {
        computeContentClientRect: () => this.contentElement.getBoundingClientRect(),
        setContentStyleProperty: (e, t) => this.contentElement.style.setProperty(e, t),
      });
    }
    computeContentClientRect() {
      return this.mdcFoundation.computeContentClientRect();
    }
    activate(e) {
      this.mdcFoundation.activate(e);
    }
    deactivate() {
      this.mdcFoundation.deactivate();
    }
  }
  r([T(".mdc-tab-indicator")], Gn.prototype, "mdcRoot", void 0),
    r([T(".mdc-tab-indicator__content")], Gn.prototype, "contentElement", void 0),
    r([y()], Gn.prototype, "icon", void 0),
    r([y({ type: Boolean })], Gn.prototype, "fade", void 0);
  const Yn = P`.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}.mdc-tab-indicator .mdc-tab-indicator__content--underline{border-color:#6200ee;border-color:var(--mdc-theme-primary, #6200ee)}.mdc-tab-indicator .mdc-tab-indicator__content--icon{color:#018786;color:var(--mdc-theme-secondary, #018786)}.mdc-tab-indicator .mdc-tab-indicator__content--underline{border-top-width:2px}.mdc-tab-indicator .mdc-tab-indicator__content--icon{height:34px;font-size:34px}.mdc-tab-indicator{display:flex;position:absolute;top:0;left:0;justify-content:center;width:100%;height:100%;pointer-events:none;z-index:1}.mdc-tab-indicator__content{transform-origin:left;opacity:0}.mdc-tab-indicator__content--underline{align-self:flex-end;box-sizing:border-box;width:100%;border-top-style:solid}.mdc-tab-indicator__content--icon{align-self:center;margin:0 auto}.mdc-tab-indicator--active .mdc-tab-indicator__content{opacity:1}.mdc-tab-indicator .mdc-tab-indicator__content{transition:250ms transform cubic-bezier(0.4, 0, 0.2, 1)}.mdc-tab-indicator--no-transition .mdc-tab-indicator__content{transition:none}.mdc-tab-indicator--fade .mdc-tab-indicator__content{transition:150ms opacity linear}.mdc-tab-indicator--active.mdc-tab-indicator--fade .mdc-tab-indicator__content{transition-delay:100ms}`;
  let Kn = class extends Gn {};
  (Kn.styles = [Yn]), (Kn = r([_("mwc-tab-indicator")], Kn));
  var qn = (function () {
      function e(e) {
        void 0 === e && (e = {}), (this.adapter = e);
      }
      return (
        Object.defineProperty(e, "cssClasses", {
          get: function () {
            return {};
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e, "strings", {
          get: function () {
            return {};
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e, "numbers", {
          get: function () {
            return {};
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e, "defaultAdapter", {
          get: function () {
            return {};
          },
          enumerable: !1,
          configurable: !0,
        }),
        (e.prototype.init = function () {}),
        (e.prototype.destroy = function () {}),
        e
      );
    })(),
    Qn = { ACTIVE: "mdc-tab--active" },
    Zn = {
      ARIA_SELECTED: "aria-selected",
      CONTENT_SELECTOR: ".mdc-tab__content",
      INTERACTED_EVENT: "MDCTab:interacted",
      RIPPLE_SELECTOR: ".mdc-tab__ripple",
      TABINDEX: "tabIndex",
      TAB_INDICATOR_SELECTOR: ".mdc-tab-indicator",
    };
  const Jn = (function (e) {
    function r(t) {
      var n = e.call(this, i(i({}, r.defaultAdapter), t)) || this;
      return (n.focusOnActivate = !0), n;
    }
    return (
      t(r, e),
      Object.defineProperty(r, "cssClasses", {
        get: function () {
          return Qn;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(r, "strings", {
        get: function () {
          return Zn;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(r, "defaultAdapter", {
        get: function () {
          return {
            addClass: function () {},
            removeClass: function () {},
            hasClass: function () {
              return !1;
            },
            setAttr: function () {},
            activateIndicator: function () {},
            deactivateIndicator: function () {},
            notifyInteracted: function () {},
            getOffsetLeft: function () {
              return 0;
            },
            getOffsetWidth: function () {
              return 0;
            },
            getContentOffsetLeft: function () {
              return 0;
            },
            getContentOffsetWidth: function () {
              return 0;
            },
            focus: function () {},
          };
        },
        enumerable: !1,
        configurable: !0,
      }),
      (r.prototype.handleClick = function () {
        this.adapter.notifyInteracted();
      }),
      (r.prototype.isActive = function () {
        return this.adapter.hasClass(Qn.ACTIVE);
      }),
      (r.prototype.setFocusOnActivate = function (e) {
        this.focusOnActivate = e;
      }),
      (r.prototype.activate = function (e) {
        this.adapter.addClass(Qn.ACTIVE),
          this.adapter.setAttr(Zn.ARIA_SELECTED, "true"),
          this.adapter.setAttr(Zn.TABINDEX, "0"),
          this.adapter.activateIndicator(e),
          this.focusOnActivate && this.adapter.focus();
      }),
      (r.prototype.deactivate = function () {
        this.isActive() &&
          (this.adapter.removeClass(Qn.ACTIVE),
          this.adapter.setAttr(Zn.ARIA_SELECTED, "false"),
          this.adapter.setAttr(Zn.TABINDEX, "-1"),
          this.adapter.deactivateIndicator());
      }),
      (r.prototype.computeDimensions = function () {
        var e = this.adapter.getOffsetWidth(),
          t = this.adapter.getOffsetLeft(),
          i = this.adapter.getContentOffsetWidth(),
          r = this.adapter.getContentOffsetLeft();
        return { contentLeft: t + r, contentRight: t + r + i, rootLeft: t, rootRight: t + e };
      }),
      r
    );
  })(qn);
  let eo = 0;
  class to extends Xe {
    constructor() {
      super(...arguments),
        (this.mdcFoundationClass = Jn),
        (this.label = ""),
        (this.icon = ""),
        (this.hasImageIcon = !1),
        (this.isFadingIndicator = !1),
        (this.minWidth = !1),
        (this.isMinWidthIndicator = !1),
        (this.indicatorIcon = ""),
        (this.stacked = !1),
        (this.focusOnActivate = !0),
        (this._active = !1),
        (this.initFocus = !1),
        (this.shouldRenderRipple = !1),
        (this.useStateLayerCustomProperties = !1),
        (this.rippleElement = null),
        (this.rippleHandlers = new st(() => ((this.shouldRenderRipple = !0), this.ripple.then((e) => (this.rippleElement = e)), this.ripple)));
    }
    get active() {
      return this._active;
    }
    connectedCallback() {
      (this.dir = document.dir), super.connectedCallback();
    }
    firstUpdated() {
      super.firstUpdated(), (this.id = this.id || "mdc-tab-" + ++eo);
    }
    render() {
      const e = { "mdc-tab--min-width": this.minWidth, "mdc-tab--stacked": this.stacked };
      let t = me``;
      (this.hasImageIcon || this.icon) &&
        (t = me`
        <span class="mdc-tab__icon material-icons"><slot name="icon">${this.icon}</slot></span>`);
      let i = me``;
      return (
        this.label &&
          (i = me`
        <span class="mdc-tab__text-label">${this.label}</span>`),
        me`
      <button
        @click="${this.handleClick}"
        class="mdc-tab ${rt(e)}"
        role="tab"
        aria-selected="false"
        tabindex="-1"
        @focus="${this.focus}"
        @blur="${this.handleBlur}"
        @mousedown="${this.handleRippleMouseDown}"
        @mouseenter="${this.handleRippleMouseEnter}"
        @mouseleave="${this.handleRippleMouseLeave}"
        @touchstart="${this.handleRippleTouchStart}"
        @touchend="${this.handleRippleDeactivate}"
        @touchcancel="${this.handleRippleDeactivate}">
        <span class="mdc-tab__content">
          ${t}
          ${i}
          ${this.isMinWidthIndicator ? this.renderIndicator() : ""}
        </span>
        ${this.isMinWidthIndicator ? "" : this.renderIndicator()}
        ${this.renderRipple()}
      </button>`
      );
    }
    renderIndicator() {
      return me`<mwc-tab-indicator
        .icon="${this.indicatorIcon}"
        .fade="${this.isFadingIndicator}"></mwc-tab-indicator>`;
    }
    renderRipple() {
      return this.shouldRenderRipple
        ? me`<mwc-ripple primary
        .internalUseStateLayerCustomProperties="${this.useStateLayerCustomProperties}"></mwc-ripple>`
        : "";
    }
    createAdapter() {
      return Object.assign(Object.assign({}, ze(this.mdcRoot)), {
        setAttr: (e, t) => this.mdcRoot.setAttribute(e, t),
        activateIndicator: async (e) => {
          await this.tabIndicator.updateComplete, this.tabIndicator.activate(e);
        },
        deactivateIndicator: async () => {
          await this.tabIndicator.updateComplete, this.tabIndicator.deactivate();
        },
        notifyInteracted: () =>
          this.dispatchEvent(new CustomEvent(Jn.strings.INTERACTED_EVENT, { detail: { tabId: this.id }, bubbles: !0, composed: !0, cancelable: !0 })),
        getOffsetLeft: () => this.offsetLeft,
        getOffsetWidth: () => this.mdcRoot.offsetWidth,
        getContentOffsetLeft: () => this._contentElement.offsetLeft,
        getContentOffsetWidth: () => this._contentElement.offsetWidth,
        focus: () => {
          this.initFocus ? (this.initFocus = !1) : this.mdcRoot.focus();
        },
      });
    }
    activate(e) {
      e || (this.initFocus = !0),
        this.mdcFoundation
          ? (this.mdcFoundation.activate(e), this.setActive(this.mdcFoundation.isActive()))
          : this.updateComplete.then(() => {
              this.mdcFoundation.activate(e), this.setActive(this.mdcFoundation.isActive());
            });
    }
    deactivate() {
      this.mdcFoundation.deactivate(), this.setActive(this.mdcFoundation.isActive());
    }
    setActive(e) {
      const t = this.active;
      t !== e && ((this._active = e), this.requestUpdate("active", t));
    }
    computeDimensions() {
      return this.mdcFoundation.computeDimensions();
    }
    computeIndicatorClientRect() {
      return this.tabIndicator.computeContentClientRect();
    }
    focus() {
      this.mdcRoot.focus(), this.handleFocus();
    }
    handleClick() {
      this.handleFocus(), this.mdcFoundation.handleClick();
    }
    handleFocus() {
      this.handleRippleFocus();
    }
    handleBlur() {
      this.handleRippleBlur();
    }
    handleRippleMouseDown(e) {
      const t = () => {
        window.removeEventListener("mouseup", t), this.handleRippleDeactivate();
      };
      window.addEventListener("mouseup", t), this.rippleHandlers.startPress(e);
    }
    handleRippleTouchStart(e) {
      this.rippleHandlers.startPress(e);
    }
    handleRippleDeactivate() {
      this.rippleHandlers.endPress();
    }
    handleRippleMouseEnter() {
      this.rippleHandlers.startHover();
    }
    handleRippleMouseLeave() {
      this.rippleHandlers.endHover();
    }
    handleRippleFocus() {
      this.rippleHandlers.startFocus();
    }
    handleRippleBlur() {
      this.rippleHandlers.endFocus();
    }
    get isRippleActive() {
      var e;
      return (null === (e = this.rippleElement) || void 0 === e ? void 0 : e.isActive) || !1;
    }
  }
  (to.shadowRootOptions = { mode: "open", delegatesFocus: !0 }),
    r([T(".mdc-tab")], to.prototype, "mdcRoot", void 0),
    r([T("mwc-tab-indicator")], to.prototype, "tabIndicator", void 0),
    r([y()], to.prototype, "label", void 0),
    r([y()], to.prototype, "icon", void 0),
    r([y({ type: Boolean })], to.prototype, "hasImageIcon", void 0),
    r([y({ type: Boolean })], to.prototype, "isFadingIndicator", void 0),
    r([y({ type: Boolean })], to.prototype, "minWidth", void 0),
    r([y({ type: Boolean })], to.prototype, "isMinWidthIndicator", void 0),
    r([y({ type: Boolean, reflect: !0, attribute: "active" })], to.prototype, "active", null),
    r([y()], to.prototype, "indicatorIcon", void 0),
    r([y({ type: Boolean })], to.prototype, "stacked", void 0),
    r(
      [
        Ot(async function (e) {
          await this.updateComplete, this.mdcFoundation.setFocusOnActivate(e);
        }),
        y({ type: Boolean }),
      ],
      to.prototype,
      "focusOnActivate",
      void 0
    ),
    r([T(".mdc-tab__content")], to.prototype, "_contentElement", void 0),
    r([w()], to.prototype, "shouldRenderRipple", void 0),
    r([w()], to.prototype, "useStateLayerCustomProperties", void 0),
    r([A("mwc-ripple")], to.prototype, "ripple", void 0),
    r([k({ passive: !0 })], to.prototype, "handleRippleTouchStart", null);
  const io = P`.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}.mdc-tab{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-button-font-size, 0.875rem);line-height:2.25rem;line-height:var(--mdc-typography-button-line-height, 2.25rem);font-weight:500;font-weight:var(--mdc-typography-button-font-weight, 500);letter-spacing:0.0892857143em;letter-spacing:var(--mdc-typography-button-letter-spacing, 0.0892857143em);text-decoration:none;text-decoration:var(--mdc-typography-button-text-decoration, none);text-transform:uppercase;text-transform:var(--mdc-typography-button-text-transform, uppercase);position:relative}.mdc-tab .mdc-tab__text-label{color:rgba(0, 0, 0, 0.6)}.mdc-tab .mdc-tab__icon{color:rgba(0, 0, 0, 0.54);fill:currentColor}.mdc-tab.mdc-ripple-upgraded--background-focused.mdc-tab--active .mdc-tab__focus-ring,.mdc-tab:not(.mdc-ripple-upgraded):focus.mdc-tab--active .mdc-tab__focus-ring{pointer-events:none;border:2px solid transparent;border-radius:8px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc( 100% + -12px );width:calc( 100% + -8px );margin-top:-2px;z-index:2}@media screen and (forced-colors: active){.mdc-tab.mdc-ripple-upgraded--background-focused.mdc-tab--active .mdc-tab__focus-ring,.mdc-tab:not(.mdc-ripple-upgraded):focus.mdc-tab--active .mdc-tab__focus-ring{border-color:CanvasText}}.mdc-tab.mdc-ripple-upgraded--background-focused.mdc-tab--active .mdc-tab__focus-ring::after,.mdc-tab:not(.mdc-ripple-upgraded):focus.mdc-tab--active .mdc-tab__focus-ring::after{content:"";border:2px solid transparent;border-radius:10px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px)}@media screen and (forced-colors: active){.mdc-tab.mdc-ripple-upgraded--background-focused.mdc-tab--active .mdc-tab__focus-ring::after,.mdc-tab:not(.mdc-ripple-upgraded):focus.mdc-tab--active .mdc-tab__focus-ring::after{border-color:CanvasText}}.mdc-tab.mdc-ripple-upgraded--background-focused .mdc-tab__focus-ring,.mdc-tab:not(.mdc-ripple-upgraded):focus .mdc-tab__focus-ring{pointer-events:none;border:2px solid transparent;border-radius:8px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc( 100% + -8px );width:calc( 100% + -8px );z-index:2}@media screen and (forced-colors: active){.mdc-tab.mdc-ripple-upgraded--background-focused .mdc-tab__focus-ring,.mdc-tab:not(.mdc-ripple-upgraded):focus .mdc-tab__focus-ring{border-color:CanvasText}}.mdc-tab.mdc-ripple-upgraded--background-focused .mdc-tab__focus-ring::after,.mdc-tab:not(.mdc-ripple-upgraded):focus .mdc-tab__focus-ring::after{content:"";border:2px solid transparent;border-radius:10px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px)}@media screen and (forced-colors: active){.mdc-tab.mdc-ripple-upgraded--background-focused .mdc-tab__focus-ring::after,.mdc-tab:not(.mdc-ripple-upgraded):focus .mdc-tab__focus-ring::after{border-color:CanvasText}}.mdc-tab__content{position:relative}.mdc-tab__icon{width:24px;height:24px;font-size:24px}.mdc-tab--active .mdc-tab__text-label{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}.mdc-tab--active .mdc-tab__icon{color:#6200ee;color:var(--mdc-theme-primary, #6200ee);fill:currentColor}.mdc-tab{background:none}.mdc-tab{min-width:90px;padding-right:24px;padding-left:24px;display:flex;flex:1 0 auto;justify-content:center;box-sizing:border-box;margin:0;padding-top:0;padding-bottom:0;border:none;outline:none;text-align:center;white-space:nowrap;cursor:pointer;-webkit-appearance:none;z-index:1}.mdc-tab::-moz-focus-inner{padding:0;border:0}.mdc-tab--min-width{flex:0 1 auto}.mdc-tab__content{display:flex;align-items:center;justify-content:center;height:inherit;pointer-events:none}.mdc-tab__text-label{transition:150ms color linear;display:inline-block;line-height:1;z-index:2}.mdc-tab__icon{transition:150ms color linear;z-index:2}.mdc-tab--stacked .mdc-tab__content{flex-direction:column;align-items:center;justify-content:center}.mdc-tab--stacked .mdc-tab__text-label{padding-top:6px;padding-bottom:4px}.mdc-tab--active .mdc-tab__text-label,.mdc-tab--active .mdc-tab__icon{transition-delay:100ms}.mdc-tab:not(.mdc-tab--stacked) .mdc-tab__icon+.mdc-tab__text-label{padding-left:8px;padding-right:0}[dir=rtl] .mdc-tab:not(.mdc-tab--stacked) .mdc-tab__icon+.mdc-tab__text-label,.mdc-tab:not(.mdc-tab--stacked) .mdc-tab__icon+.mdc-tab__text-label[dir=rtl]{padding-left:0;padding-right:8px}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-tab{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mdc-tab .mdc-tab__ripple::before,.mdc-tab .mdc-tab__ripple::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-tab .mdc-tab__ripple::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-tab .mdc-tab__ripple::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-tab.mdc-ripple-upgraded .mdc-tab__ripple::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-tab.mdc-ripple-upgraded .mdc-tab__ripple::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-tab.mdc-ripple-upgraded--unbounded .mdc-tab__ripple::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-tab.mdc-ripple-upgraded--foreground-activation .mdc-tab__ripple::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-tab.mdc-ripple-upgraded--foreground-deactivation .mdc-tab__ripple::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-tab .mdc-tab__ripple::before,.mdc-tab .mdc-tab__ripple::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-tab.mdc-ripple-upgraded .mdc-tab__ripple::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-tab .mdc-tab__ripple::before,.mdc-tab .mdc-tab__ripple::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-tab:hover .mdc-tab__ripple::before,.mdc-tab.mdc-ripple-surface--hover .mdc-tab__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-tab.mdc-ripple-upgraded--background-focused .mdc-tab__ripple::before,.mdc-tab:not(.mdc-ripple-upgraded):focus .mdc-tab__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-tab:not(.mdc-ripple-upgraded) .mdc-tab__ripple::after{transition:opacity 150ms linear}.mdc-tab:not(.mdc-ripple-upgraded):active .mdc-tab__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-tab.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-tab__ripple{position:absolute;top:0;left:0;width:100%;height:100%;overflow:hidden;will-change:transform,opacity}:host{outline:none;flex:1 0 auto;display:flex;justify-content:center;-webkit-tap-highlight-color:transparent}.mdc-tab{height:var(--mdc-tab-height, 48px);margin-left:0;margin-right:0;padding-right:var(--mdc-tab-horizontal-padding, 24px);padding-left:var(--mdc-tab-horizontal-padding, 24px)}.mdc-tab--stacked{height:var(--mdc-tab-stacked-height, 72px)}.mdc-tab::-moz-focus-inner{border:0}.mdc-tab:not(.mdc-tab--stacked) .mdc-tab__icon+.mdc-tab__text-label{padding-left:8px;padding-right:0}[dir=rtl] .mdc-tab:not(.mdc-tab--stacked) .mdc-tab__icon+.mdc-tab__text-label,.mdc-tab:not(.mdc-tab--stacked) .mdc-tab__icon+.mdc-tab__text-label[dir=rtl]{padding-left:0;padding-right:8px}.mdc-tab:not(.mdc-tab--active) .mdc-tab__text-label{color:var(--mdc-tab-text-label-color-default, rgba(0, 0, 0, 0.6))}.mdc-tab:not(.mdc-tab--active) .mdc-tab__icon{color:var(--mdc-tab-color-default, rgba(0, 0, 0, 0.54))}`;
  let ro = class extends to {};
  (ro.styles = [io]), (ro = r([_("mwc-tab")], ro));
  var no = (function () {
      function e(e) {
        void 0 === e && (e = {}), (this.adapter = e);
      }
      return (
        Object.defineProperty(e, "cssClasses", {
          get: function () {
            return {};
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e, "strings", {
          get: function () {
            return {};
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e, "numbers", {
          get: function () {
            return {};
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e, "defaultAdapter", {
          get: function () {
            return {};
          },
          enumerable: !1,
          configurable: !0,
        }),
        (e.prototype.init = function () {}),
        (e.prototype.destroy = function () {}),
        e
      );
    })(),
    oo = {
      ANIMATING: "mdc-tab-scroller--animating",
      SCROLL_AREA_SCROLL: "mdc-tab-scroller__scroll-area--scroll",
      SCROLL_TEST: "mdc-tab-scroller__test",
    },
    ao = { AREA_SELECTOR: ".mdc-tab-scroller__scroll-area", CONTENT_SELECTOR: ".mdc-tab-scroller__scroll-content" },
    co = function (e) {
      this.adapter = e;
    },
    so = (function (e) {
      function i() {
        return (null !== e && e.apply(this, arguments)) || this;
      }
      return (
        t(i, e),
        (i.prototype.getScrollPositionRTL = function () {
          var e = this.adapter.getScrollAreaScrollLeft(),
            t = this.calculateScrollEdges().right;
          return Math.round(t - e);
        }),
        (i.prototype.scrollToRTL = function (e) {
          var t = this.calculateScrollEdges(),
            i = this.adapter.getScrollAreaScrollLeft(),
            r = this.clampScrollValue(t.right - e);
          return { finalScrollPosition: r, scrollDelta: r - i };
        }),
        (i.prototype.incrementScrollRTL = function (e) {
          var t = this.adapter.getScrollAreaScrollLeft(),
            i = this.clampScrollValue(t - e);
          return { finalScrollPosition: i, scrollDelta: i - t };
        }),
        (i.prototype.getAnimatingScrollPosition = function (e) {
          return e;
        }),
        (i.prototype.calculateScrollEdges = function () {
          return { left: 0, right: this.adapter.getScrollContentOffsetWidth() - this.adapter.getScrollAreaOffsetWidth() };
        }),
        (i.prototype.clampScrollValue = function (e) {
          var t = this.calculateScrollEdges();
          return Math.min(Math.max(t.left, e), t.right);
        }),
        i
      );
    })(co),
    lo = (function (e) {
      function i() {
        return (null !== e && e.apply(this, arguments)) || this;
      }
      return (
        t(i, e),
        (i.prototype.getScrollPositionRTL = function (e) {
          var t = this.adapter.getScrollAreaScrollLeft();
          return Math.round(e - t);
        }),
        (i.prototype.scrollToRTL = function (e) {
          var t = this.adapter.getScrollAreaScrollLeft(),
            i = this.clampScrollValue(-e);
          return { finalScrollPosition: i, scrollDelta: i - t };
        }),
        (i.prototype.incrementScrollRTL = function (e) {
          var t = this.adapter.getScrollAreaScrollLeft(),
            i = this.clampScrollValue(t - e);
          return { finalScrollPosition: i, scrollDelta: i - t };
        }),
        (i.prototype.getAnimatingScrollPosition = function (e, t) {
          return e - t;
        }),
        (i.prototype.calculateScrollEdges = function () {
          var e = this.adapter.getScrollContentOffsetWidth();
          return { left: this.adapter.getScrollAreaOffsetWidth() - e, right: 0 };
        }),
        (i.prototype.clampScrollValue = function (e) {
          var t = this.calculateScrollEdges();
          return Math.max(Math.min(t.right, e), t.left);
        }),
        i
      );
    })(co),
    po = (function (e) {
      function i() {
        return (null !== e && e.apply(this, arguments)) || this;
      }
      return (
        t(i, e),
        (i.prototype.getScrollPositionRTL = function (e) {
          var t = this.adapter.getScrollAreaScrollLeft();
          return Math.round(t - e);
        }),
        (i.prototype.scrollToRTL = function (e) {
          var t = this.adapter.getScrollAreaScrollLeft(),
            i = this.clampScrollValue(e);
          return { finalScrollPosition: i, scrollDelta: t - i };
        }),
        (i.prototype.incrementScrollRTL = function (e) {
          var t = this.adapter.getScrollAreaScrollLeft(),
            i = this.clampScrollValue(t + e);
          return { finalScrollPosition: i, scrollDelta: t - i };
        }),
        (i.prototype.getAnimatingScrollPosition = function (e, t) {
          return e + t;
        }),
        (i.prototype.calculateScrollEdges = function () {
          return { left: this.adapter.getScrollContentOffsetWidth() - this.adapter.getScrollAreaOffsetWidth(), right: 0 };
        }),
        (i.prototype.clampScrollValue = function (e) {
          var t = this.calculateScrollEdges();
          return Math.min(Math.max(t.right, e), t.left);
        }),
        i
      );
    })(co),
    mo = (function (e) {
      function r(t) {
        var n = e.call(this, i(i({}, r.defaultAdapter), t)) || this;
        return (n.isAnimating = !1), n;
      }
      return (
        t(r, e),
        Object.defineProperty(r, "cssClasses", {
          get: function () {
            return oo;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(r, "strings", {
          get: function () {
            return ao;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(r, "defaultAdapter", {
          get: function () {
            return {
              eventTargetMatchesSelector: function () {
                return !1;
              },
              addClass: function () {},
              removeClass: function () {},
              addScrollAreaClass: function () {},
              setScrollAreaStyleProperty: function () {},
              setScrollContentStyleProperty: function () {},
              getScrollContentStyleValue: function () {
                return "";
              },
              setScrollAreaScrollLeft: function () {},
              getScrollAreaScrollLeft: function () {
                return 0;
              },
              getScrollContentOffsetWidth: function () {
                return 0;
              },
              getScrollAreaOffsetWidth: function () {
                return 0;
              },
              computeScrollAreaClientRect: function () {
                return { top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 };
              },
              computeScrollContentClientRect: function () {
                return { top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 };
              },
              computeHorizontalScrollbarHeight: function () {
                return 0;
              },
            };
          },
          enumerable: !1,
          configurable: !0,
        }),
        (r.prototype.init = function () {
          var e = this.adapter.computeHorizontalScrollbarHeight();
          this.adapter.setScrollAreaStyleProperty("margin-bottom", -e + "px"), this.adapter.addScrollAreaClass(r.cssClasses.SCROLL_AREA_SCROLL);
        }),
        (r.prototype.getScrollPosition = function () {
          if (this.isRTL()) return this.computeCurrentScrollPositionRTL();
          var e = this.calculateCurrentTranslateX();
          return this.adapter.getScrollAreaScrollLeft() - e;
        }),
        (r.prototype.handleInteraction = function () {
          this.isAnimating && this.stopScrollAnimation();
        }),
        (r.prototype.handleTransitionEnd = function (e) {
          var t = e.target;
          this.isAnimating &&
            this.adapter.eventTargetMatchesSelector(t, r.strings.CONTENT_SELECTOR) &&
            ((this.isAnimating = !1), this.adapter.removeClass(r.cssClasses.ANIMATING));
        }),
        (r.prototype.incrementScroll = function (e) {
          0 !== e && this.animate(this.getIncrementScrollOperation(e));
        }),
        (r.prototype.incrementScrollImmediate = function (e) {
          if (0 !== e) {
            var t = this.getIncrementScrollOperation(e);
            0 !== t.scrollDelta && (this.stopScrollAnimation(), this.adapter.setScrollAreaScrollLeft(t.finalScrollPosition));
          }
        }),
        (r.prototype.scrollTo = function (e) {
          this.isRTL() ? this.scrollToImplRTL(e) : this.scrollToImpl(e);
        }),
        (r.prototype.getRTLScroller = function () {
          return this.rtlScrollerInstance || (this.rtlScrollerInstance = this.rtlScrollerFactory()), this.rtlScrollerInstance;
        }),
        (r.prototype.calculateCurrentTranslateX = function () {
          var e = this.adapter.getScrollContentStyleValue("transform");
          if ("none" === e) return 0;
          var t = /\((.+?)\)/.exec(e);
          if (!t) return 0;
          var i = o(t[1].split(","), 6),
            r = (i[0], i[1], i[2], i[3], i[4]);
          return i[5], parseFloat(r);
        }),
        (r.prototype.clampScrollValue = function (e) {
          var t = this.calculateScrollEdges();
          return Math.min(Math.max(t.left, e), t.right);
        }),
        (r.prototype.computeCurrentScrollPositionRTL = function () {
          var e = this.calculateCurrentTranslateX();
          return this.getRTLScroller().getScrollPositionRTL(e);
        }),
        (r.prototype.calculateScrollEdges = function () {
          return { left: 0, right: this.adapter.getScrollContentOffsetWidth() - this.adapter.getScrollAreaOffsetWidth() };
        }),
        (r.prototype.scrollToImpl = function (e) {
          var t = this.getScrollPosition(),
            i = this.clampScrollValue(e),
            r = i - t;
          this.animate({ finalScrollPosition: i, scrollDelta: r });
        }),
        (r.prototype.scrollToImplRTL = function (e) {
          var t = this.getRTLScroller().scrollToRTL(e);
          this.animate(t);
        }),
        (r.prototype.getIncrementScrollOperation = function (e) {
          if (this.isRTL()) return this.getRTLScroller().incrementScrollRTL(e);
          var t = this.getScrollPosition(),
            i = e + t,
            r = this.clampScrollValue(i);
          return { finalScrollPosition: r, scrollDelta: r - t };
        }),
        (r.prototype.animate = function (e) {
          var t = this;
          0 !== e.scrollDelta &&
            (this.stopScrollAnimation(),
            this.adapter.setScrollAreaScrollLeft(e.finalScrollPosition),
            this.adapter.setScrollContentStyleProperty("transform", "translateX(" + e.scrollDelta + "px)"),
            this.adapter.computeScrollAreaClientRect(),
            requestAnimationFrame(function () {
              t.adapter.addClass(r.cssClasses.ANIMATING), t.adapter.setScrollContentStyleProperty("transform", "none");
            }),
            (this.isAnimating = !0));
        }),
        (r.prototype.stopScrollAnimation = function () {
          this.isAnimating = !1;
          var e = this.getAnimatingScrollPosition();
          this.adapter.removeClass(r.cssClasses.ANIMATING),
            this.adapter.setScrollContentStyleProperty("transform", "translateX(0px)"),
            this.adapter.setScrollAreaScrollLeft(e);
        }),
        (r.prototype.getAnimatingScrollPosition = function () {
          var e = this.calculateCurrentTranslateX(),
            t = this.adapter.getScrollAreaScrollLeft();
          return this.isRTL() ? this.getRTLScroller().getAnimatingScrollPosition(t, e) : t - e;
        }),
        (r.prototype.rtlScrollerFactory = function () {
          var e = this.adapter.getScrollAreaScrollLeft();
          this.adapter.setScrollAreaScrollLeft(e - 1);
          var t = this.adapter.getScrollAreaScrollLeft();
          if (t < 0) return this.adapter.setScrollAreaScrollLeft(e), new lo(this.adapter);
          var i = this.adapter.computeScrollAreaClientRect(),
            r = this.adapter.computeScrollContentClientRect(),
            n = Math.round(r.right - i.right);
          return this.adapter.setScrollAreaScrollLeft(e), n === t ? new po(this.adapter) : new so(this.adapter);
        }),
        (r.prototype.isRTL = function () {
          return "rtl" === this.adapter.getScrollContentStyleValue("direction");
        }),
        r
      );
    })(no);
  const ho = mo;
  class uo extends Xe {
    constructor() {
      super(...arguments), (this.mdcFoundationClass = ho), (this._scrollbarHeight = -1);
    }
    _handleInteraction() {
      this.mdcFoundation.handleInteraction();
    }
    _handleTransitionEnd(e) {
      this.mdcFoundation.handleTransitionEnd(e);
    }
    render() {
      return me`
      <div class="mdc-tab-scroller">
        <div class="mdc-tab-scroller__scroll-area"
            @wheel="${this._handleInteraction}"
            @touchstart="${this._handleInteraction}"
            @pointerdown="${this._handleInteraction}"
            @mousedown="${this._handleInteraction}"
            @keydown="${this._handleInteraction}"
            @transitionend="${this._handleTransitionEnd}">
          <div class="mdc-tab-scroller__scroll-content"><slot></slot></div>
        </div>
      </div>
      `;
    }
    createAdapter() {
      return Object.assign(Object.assign({}, ze(this.mdcRoot)), {
        eventTargetMatchesSelector: (e, t) => $e(e, t),
        addScrollAreaClass: (e) => this.scrollAreaElement.classList.add(e),
        setScrollAreaStyleProperty: (e, t) => this.scrollAreaElement.style.setProperty(e, t),
        setScrollContentStyleProperty: (e, t) => this.scrollContentElement.style.setProperty(e, t),
        getScrollContentStyleValue: (e) => window.getComputedStyle(this.scrollContentElement).getPropertyValue(e),
        setScrollAreaScrollLeft: (e) => (this.scrollAreaElement.scrollLeft = e),
        getScrollAreaScrollLeft: () => this.scrollAreaElement.scrollLeft,
        getScrollContentOffsetWidth: () => this.scrollContentElement.offsetWidth,
        getScrollAreaOffsetWidth: () => this.scrollAreaElement.offsetWidth,
        computeScrollAreaClientRect: () => this.scrollAreaElement.getBoundingClientRect(),
        computeScrollContentClientRect: () => this.scrollContentElement.getBoundingClientRect(),
        computeHorizontalScrollbarHeight: () => (
          -1 === this._scrollbarHeight &&
            ((this.scrollAreaElement.style.overflowX = "scroll"),
            (this._scrollbarHeight = this.scrollAreaElement.offsetHeight - this.scrollAreaElement.clientHeight),
            (this.scrollAreaElement.style.overflowX = "")),
          this._scrollbarHeight
        ),
      });
    }
    getScrollPosition() {
      return this.mdcFoundation.getScrollPosition();
    }
    getScrollContentWidth() {
      return this.scrollContentElement.offsetWidth;
    }
    incrementScrollPosition(e) {
      this.mdcFoundation.incrementScroll(e);
    }
    scrollToPosition(e) {
      this.mdcFoundation.scrollTo(e);
    }
  }
  r([T(".mdc-tab-scroller")], uo.prototype, "mdcRoot", void 0),
    r([T(".mdc-tab-scroller__scroll-area")], uo.prototype, "scrollAreaElement", void 0),
    r([T(".mdc-tab-scroller__scroll-content")], uo.prototype, "scrollContentElement", void 0),
    r([k({ passive: !0 })], uo.prototype, "_handleInteraction", null);
  const fo = P`.mdc-tab-scroller{overflow-y:hidden}.mdc-tab-scroller.mdc-tab-scroller--animating .mdc-tab-scroller__scroll-content{transition:250ms transform cubic-bezier(0.4, 0, 0.2, 1)}.mdc-tab-scroller__test{position:absolute;top:-9999px;width:100px;height:100px;overflow-x:scroll}.mdc-tab-scroller__scroll-area{-webkit-overflow-scrolling:touch;display:flex;overflow-x:hidden}.mdc-tab-scroller__scroll-area::-webkit-scrollbar,.mdc-tab-scroller__test::-webkit-scrollbar{display:none}.mdc-tab-scroller__scroll-area--scroll{overflow-x:scroll}.mdc-tab-scroller__scroll-content{position:relative;display:flex;flex:1 0 auto;transform:none;will-change:transform}.mdc-tab-scroller--align-start .mdc-tab-scroller__scroll-content{justify-content:flex-start}.mdc-tab-scroller--align-end .mdc-tab-scroller__scroll-content{justify-content:flex-end}.mdc-tab-scroller--align-center .mdc-tab-scroller__scroll-content{justify-content:center}.mdc-tab-scroller--animating .mdc-tab-scroller__scroll-area{-webkit-overflow-scrolling:auto}:host{display:flex}.mdc-tab-scroller{flex:1}`;
  let bo = class extends uo {};
  (bo.styles = [fo]), (bo = r([_("mwc-tab-scroller")], bo));
  var go = (function () {
      function e(e) {
        void 0 === e && (e = {}), (this.adapter = e);
      }
      return (
        Object.defineProperty(e, "cssClasses", {
          get: function () {
            return {};
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e, "strings", {
          get: function () {
            return {};
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e, "numbers", {
          get: function () {
            return {};
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e, "defaultAdapter", {
          get: function () {
            return {};
          },
          enumerable: !1,
          configurable: !0,
        }),
        (e.prototype.init = function () {}),
        (e.prototype.destroy = function () {}),
        e
      );
    })(),
    vo = {
      ARROW_LEFT_KEY: "ArrowLeft",
      ARROW_RIGHT_KEY: "ArrowRight",
      END_KEY: "End",
      ENTER_KEY: "Enter",
      HOME_KEY: "Home",
      SPACE_KEY: "Space",
      TAB_ACTIVATED_EVENT: "MDCTabBar:activated",
      TAB_SCROLLER_SELECTOR: ".mdc-tab-scroller",
      TAB_SELECTOR: ".mdc-tab",
    },
    _o = {
      ARROW_LEFT_KEYCODE: 37,
      ARROW_RIGHT_KEYCODE: 39,
      END_KEYCODE: 35,
      ENTER_KEYCODE: 13,
      EXTRA_SCROLL_AMOUNT: 20,
      HOME_KEYCODE: 36,
      SPACE_KEYCODE: 32,
    },
    xo = new Set();
  xo.add(vo.ARROW_LEFT_KEY), xo.add(vo.ARROW_RIGHT_KEY), xo.add(vo.END_KEY), xo.add(vo.HOME_KEY), xo.add(vo.ENTER_KEY), xo.add(vo.SPACE_KEY);
  var yo = new Map();
  yo.set(_o.ARROW_LEFT_KEYCODE, vo.ARROW_LEFT_KEY),
    yo.set(_o.ARROW_RIGHT_KEYCODE, vo.ARROW_RIGHT_KEY),
    yo.set(_o.END_KEYCODE, vo.END_KEY),
    yo.set(_o.HOME_KEYCODE, vo.HOME_KEY),
    yo.set(_o.ENTER_KEYCODE, vo.ENTER_KEY),
    yo.set(_o.SPACE_KEYCODE, vo.SPACE_KEY);
  const wo = (function (e) {
    function r(t) {
      var n = e.call(this, i(i({}, r.defaultAdapter), t)) || this;
      return (n.useAutomaticActivation = !1), n;
    }
    return (
      t(r, e),
      Object.defineProperty(r, "strings", {
        get: function () {
          return vo;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(r, "numbers", {
        get: function () {
          return _o;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(r, "defaultAdapter", {
        get: function () {
          return {
            scrollTo: function () {},
            incrementScroll: function () {},
            getScrollPosition: function () {
              return 0;
            },
            getScrollContentWidth: function () {
              return 0;
            },
            getOffsetWidth: function () {
              return 0;
            },
            isRTL: function () {
              return !1;
            },
            setActiveTab: function () {},
            activateTabAtIndex: function () {},
            deactivateTabAtIndex: function () {},
            focusTabAtIndex: function () {},
            getTabIndicatorClientRectAtIndex: function () {
              return { top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 };
            },
            getTabDimensionsAtIndex: function () {
              return { rootLeft: 0, rootRight: 0, contentLeft: 0, contentRight: 0 };
            },
            getPreviousActiveTabIndex: function () {
              return -1;
            },
            getFocusedTabIndex: function () {
              return -1;
            },
            getIndexOfTabById: function () {
              return -1;
            },
            getTabListLength: function () {
              return 0;
            },
            notifyTabActivated: function () {},
          };
        },
        enumerable: !1,
        configurable: !0,
      }),
      (r.prototype.setUseAutomaticActivation = function (e) {
        this.useAutomaticActivation = e;
      }),
      (r.prototype.activateTab = function (e) {
        var t,
          i = this.adapter.getPreviousActiveTabIndex();
        this.indexIsInRange(e) &&
          e !== i &&
          (-1 !== i && (this.adapter.deactivateTabAtIndex(i), (t = this.adapter.getTabIndicatorClientRectAtIndex(i))),
          this.adapter.activateTabAtIndex(e, t),
          this.scrollIntoView(e),
          this.adapter.notifyTabActivated(e));
      }),
      (r.prototype.handleKeyDown = function (e) {
        var t = this.getKeyFromEvent(e);
        if (void 0 !== t)
          if ((this.isActivationKey(t) || e.preventDefault(), this.useAutomaticActivation)) {
            if (this.isActivationKey(t)) return;
            var i = this.determineTargetFromKey(this.adapter.getPreviousActiveTabIndex(), t);
            this.adapter.setActiveTab(i), this.scrollIntoView(i);
          } else {
            var r = this.adapter.getFocusedTabIndex();
            this.isActivationKey(t)
              ? this.adapter.setActiveTab(r)
              : ((i = this.determineTargetFromKey(r, t)), this.adapter.focusTabAtIndex(i), this.scrollIntoView(i));
          }
      }),
      (r.prototype.handleTabInteraction = function (e) {
        this.adapter.setActiveTab(this.adapter.getIndexOfTabById(e.detail.tabId));
      }),
      (r.prototype.scrollIntoView = function (e) {
        this.indexIsInRange(e) &&
          (0 !== e
            ? e !== this.adapter.getTabListLength() - 1
              ? this.isRTL()
                ? this.scrollIntoViewImplRTL(e)
                : this.scrollIntoViewImpl(e)
              : this.adapter.scrollTo(this.adapter.getScrollContentWidth())
            : this.adapter.scrollTo(0));
      }),
      (r.prototype.determineTargetFromKey = function (e, t) {
        var i = this.isRTL(),
          r = this.adapter.getTabListLength() - 1,
          n = e;
        return (
          t === vo.END_KEY
            ? (n = r)
            : (t === vo.ARROW_LEFT_KEY && !i) || (t === vo.ARROW_RIGHT_KEY && i)
            ? (n -= 1)
            : (t === vo.ARROW_RIGHT_KEY && !i) || (t === vo.ARROW_LEFT_KEY && i)
            ? (n += 1)
            : (n = 0),
          n < 0 ? (n = r) : n > r && (n = 0),
          n
        );
      }),
      (r.prototype.calculateScrollIncrement = function (e, t, i, r) {
        var n = this.adapter.getTabDimensionsAtIndex(t),
          o = n.contentLeft - i - r,
          a = n.contentRight - i - _o.EXTRA_SCROLL_AMOUNT,
          d = o + _o.EXTRA_SCROLL_AMOUNT;
        return t < e ? Math.min(a, 0) : Math.max(d, 0);
      }),
      (r.prototype.calculateScrollIncrementRTL = function (e, t, i, r, n) {
        var o = this.adapter.getTabDimensionsAtIndex(t),
          a = n - o.contentLeft - i,
          d = n - o.contentRight - i - r + _o.EXTRA_SCROLL_AMOUNT,
          c = a - _o.EXTRA_SCROLL_AMOUNT;
        return t > e ? Math.max(d, 0) : Math.min(c, 0);
      }),
      (r.prototype.findAdjacentTabIndexClosestToEdge = function (e, t, i, r) {
        var n = t.rootLeft - i,
          o = t.rootRight - i - r,
          a = n + o;
        return n < 0 || a < 0 ? e - 1 : o > 0 || a > 0 ? e + 1 : -1;
      }),
      (r.prototype.findAdjacentTabIndexClosestToEdgeRTL = function (e, t, i, r, n) {
        var o = n - t.rootLeft - r - i,
          a = n - t.rootRight - i,
          d = o + a;
        return o > 0 || d > 0 ? e + 1 : a < 0 || d < 0 ? e - 1 : -1;
      }),
      (r.prototype.getKeyFromEvent = function (e) {
        return xo.has(e.key) ? e.key : yo.get(e.keyCode);
      }),
      (r.prototype.isActivationKey = function (e) {
        return e === vo.SPACE_KEY || e === vo.ENTER_KEY;
      }),
      (r.prototype.indexIsInRange = function (e) {
        return e >= 0 && e < this.adapter.getTabListLength();
      }),
      (r.prototype.isRTL = function () {
        return this.adapter.isRTL();
      }),
      (r.prototype.scrollIntoViewImpl = function (e) {
        var t = this.adapter.getScrollPosition(),
          i = this.adapter.getOffsetWidth(),
          r = this.adapter.getTabDimensionsAtIndex(e),
          n = this.findAdjacentTabIndexClosestToEdge(e, r, t, i);
        if (this.indexIsInRange(n)) {
          var o = this.calculateScrollIncrement(e, n, t, i);
          this.adapter.incrementScroll(o);
        }
      }),
      (r.prototype.scrollIntoViewImplRTL = function (e) {
        var t = this.adapter.getScrollPosition(),
          i = this.adapter.getOffsetWidth(),
          r = this.adapter.getTabDimensionsAtIndex(e),
          n = this.adapter.getScrollContentWidth(),
          o = this.findAdjacentTabIndexClosestToEdgeRTL(e, r, t, i, n);
        if (this.indexIsInRange(o)) {
          var a = this.calculateScrollIncrementRTL(e, o, t, i, n);
          this.adapter.incrementScroll(a);
        }
      }),
      r
    );
  })(go);
  class Eo extends Xe {
    constructor() {
      super(...arguments), (this.mdcFoundationClass = wo), (this.activeIndex = 0), (this._previousActiveIndex = -1);
    }
    _handleTabInteraction(e) {
      this.mdcFoundation.handleTabInteraction(e);
    }
    _handleKeydown(e) {
      this.mdcFoundation.handleKeyDown(e);
    }
    render() {
      return me`
      <div class="mdc-tab-bar" role="tablist"
          @MDCTab:interacted="${this._handleTabInteraction}"
          @keydown="${this._handleKeydown}">
        <mwc-tab-scroller><slot></slot></mwc-tab-scroller>
      </div>
      `;
    }
    _getTabs() {
      return this.tabsSlot.assignedNodes({ flatten: !0 }).filter((e) => e instanceof to);
    }
    _getTab(e) {
      return this._getTabs()[e];
    }
    createAdapter() {
      return {
        scrollTo: (e) => this.scrollerElement.scrollToPosition(e),
        incrementScroll: (e) => this.scrollerElement.incrementScrollPosition(e),
        getScrollPosition: () => this.scrollerElement.getScrollPosition(),
        getScrollContentWidth: () => this.scrollerElement.getScrollContentWidth(),
        getOffsetWidth: () => this.mdcRoot.offsetWidth,
        isRTL: () => "rtl" === window.getComputedStyle(this.mdcRoot).getPropertyValue("direction"),
        setActiveTab: (e) => this.mdcFoundation.activateTab(e),
        activateTabAtIndex: (e, t) => {
          const i = this._getTab(e);
          void 0 !== i && i.activate(t), (this._previousActiveIndex = e);
        },
        deactivateTabAtIndex: (e) => {
          const t = this._getTab(e);
          void 0 !== t && t.deactivate();
        },
        focusTabAtIndex: (e) => {
          const t = this._getTab(e);
          void 0 !== t && t.focus();
        },
        getTabIndicatorClientRectAtIndex: (e) => {
          const t = this._getTab(e);
          return void 0 !== t ? t.computeIndicatorClientRect() : new DOMRect();
        },
        getTabDimensionsAtIndex: (e) => {
          const t = this._getTab(e);
          return void 0 !== t ? t.computeDimensions() : { rootLeft: 0, rootRight: 0, contentLeft: 0, contentRight: 0 };
        },
        getPreviousActiveTabIndex: () => this._previousActiveIndex,
        getFocusedTabIndex: () => {
          const e = this._getTabs(),
            t = this.getRootNode().activeElement;
          return e.indexOf(t);
        },
        getIndexOfTabById: (e) => {
          const t = this._getTabs();
          for (let i = 0; i < t.length; i++) if (t[i].id === e) return i;
          return -1;
        },
        getTabListLength: () => this._getTabs().length,
        notifyTabActivated: (e) => {
          (this.activeIndex = e),
            this.dispatchEvent(new CustomEvent(wo.strings.TAB_ACTIVATED_EVENT, { detail: { index: e }, bubbles: !0, cancelable: !0 }));
        },
      };
    }
    firstUpdated() {}
    async getUpdateComplete() {
      const e = await super.getUpdateComplete();
      return await this.scrollerElement.updateComplete, void 0 === this.mdcFoundation && this.createFoundation(), e;
    }
    scrollIndexIntoView(e) {
      this.mdcFoundation.scrollIntoView(e);
    }
  }
  r([T(".mdc-tab-bar")], Eo.prototype, "mdcRoot", void 0),
    r([T("mwc-tab-scroller")], Eo.prototype, "scrollerElement", void 0),
    r([T("slot")], Eo.prototype, "tabsSlot", void 0),
    r(
      [
        Ot(async function () {
          await this.updateComplete, this.activeIndex !== this._previousActiveIndex && this.mdcFoundation.activateTab(this.activeIndex);
        }),
        y({ type: Number }),
      ],
      Eo.prototype,
      "activeIndex",
      void 0
    );
  const ko = P`.mdc-tab-bar{width:100%}.mdc-tab{height:48px}.mdc-tab--stacked{height:72px}:host{display:block}.mdc-tab-bar{flex:1}mwc-tab{--mdc-tab-height: 48px;--mdc-tab-stacked-height: 72px}`;
  let To = class extends Eo {};
  (To.styles = [ko]), (To = r([_("mwc-tab-bar")], To));
  const Ao = P`.mdc-floating-label{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);position:absolute;left:0;-webkit-transform-origin:left top;transform-origin:left top;line-height:1.15rem;text-align:left;text-overflow:ellipsis;white-space:nowrap;cursor:text;overflow:hidden;will-change:transform;transition:transform 150ms cubic-bezier(0.4, 0, 0.2, 1),color 150ms cubic-bezier(0.4, 0, 0.2, 1)}[dir=rtl] .mdc-floating-label,.mdc-floating-label[dir=rtl]{right:0;left:auto;-webkit-transform-origin:right top;transform-origin:right top;text-align:right}.mdc-floating-label--float-above{cursor:auto}.mdc-floating-label--required::after{margin-left:1px;margin-right:0px;content:"*"}[dir=rtl] .mdc-floating-label--required::after,.mdc-floating-label--required[dir=rtl]::after{margin-left:0;margin-right:1px}.mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-standard 250ms 1}@keyframes mdc-floating-label-shake-float-above-standard{0%{transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-106%) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-106%) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75)}}.mdc-line-ripple::before,.mdc-line-ripple::after{position:absolute;bottom:0;left:0;width:100%;border-bottom-style:solid;content:""}.mdc-line-ripple::before{border-bottom-width:1px}.mdc-line-ripple::before{z-index:1}.mdc-line-ripple::after{transform:scaleX(0);border-bottom-width:2px;opacity:0;z-index:2}.mdc-line-ripple::after{transition:transform 180ms cubic-bezier(0.4, 0, 0.2, 1),opacity 180ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-line-ripple--active::after{transform:scaleX(1);opacity:1}.mdc-line-ripple--deactivating::after{opacity:0}.mdc-notched-outline{display:flex;position:absolute;top:0;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] .mdc-notched-outline,.mdc-notched-outline[dir=rtl]{text-align:right}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{box-sizing:border-box;height:100%;border-top:1px solid;border-bottom:1px solid;pointer-events:none}.mdc-notched-outline__leading{border-left:1px solid;border-right:none;width:12px}[dir=rtl] .mdc-notched-outline__leading,.mdc-notched-outline__leading[dir=rtl]{border-left:none;border-right:1px solid}.mdc-notched-outline__trailing{border-left:none;border-right:1px solid;flex-grow:1}[dir=rtl] .mdc-notched-outline__trailing,.mdc-notched-outline__trailing[dir=rtl]{border-left:1px solid;border-right:none}.mdc-notched-outline__notch{flex:0 0 auto;width:auto;max-width:calc(100% - 12px * 2)}.mdc-notched-outline .mdc-floating-label{display:inline-block;position:relative;max-width:100%}.mdc-notched-outline .mdc-floating-label--float-above{text-overflow:clip}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:calc(100% / 0.75)}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:0;padding-right:8px;border-top:none}[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch,.mdc-notched-outline--notched .mdc-notched-outline__notch[dir=rtl]{padding-left:8px;padding-right:0}.mdc-notched-outline--no-label .mdc-notched-outline__notch{display:none}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-text-field--filled{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity}.mdc-text-field--filled .mdc-text-field__ripple::before,.mdc-text-field--filled .mdc-text-field__ripple::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-text-field--filled .mdc-text-field__ripple::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-text-field--filled .mdc-text-field__ripple::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-text-field--filled.mdc-ripple-upgraded .mdc-text-field__ripple::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-text-field--filled.mdc-ripple-upgraded .mdc-text-field__ripple::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-text-field--filled.mdc-ripple-upgraded--unbounded .mdc-text-field__ripple::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-text-field--filled.mdc-ripple-upgraded--foreground-activation .mdc-text-field__ripple::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-text-field--filled.mdc-ripple-upgraded--foreground-deactivation .mdc-text-field__ripple::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-text-field--filled .mdc-text-field__ripple::before,.mdc-text-field--filled .mdc-text-field__ripple::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-text-field--filled.mdc-ripple-upgraded .mdc-text-field__ripple::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-text-field__ripple{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}.mdc-text-field{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:0;border-bottom-left-radius:0;display:inline-flex;align-items:baseline;padding:0 16px;position:relative;box-sizing:border-box;overflow:hidden;will-change:opacity,transform,color}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-floating-label{color:rgba(0, 0, 0, 0.6)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input{color:rgba(0, 0, 0, 0.87)}@media all{.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder{color:rgba(0, 0, 0, 0.54)}}@media all{.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder{color:rgba(0, 0, 0, 0.54)}}.mdc-text-field .mdc-text-field__input{caret-color:#6200ee;caret-color:var(--mdc-theme-primary, #6200ee)}.mdc-text-field:not(.mdc-text-field--disabled)+.mdc-text-field-helper-line .mdc-text-field-helper-text{color:rgba(0, 0, 0, 0.6)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field-character-counter,.mdc-text-field:not(.mdc-text-field--disabled)+.mdc-text-field-helper-line .mdc-text-field-character-counter{color:rgba(0, 0, 0, 0.6)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__icon--leading{color:rgba(0, 0, 0, 0.54)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__icon--trailing{color:rgba(0, 0, 0, 0.54)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__affix--prefix{color:rgba(0, 0, 0, 0.6)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__affix--suffix{color:rgba(0, 0, 0, 0.6)}.mdc-text-field .mdc-floating-label{top:50%;transform:translateY(-50%);pointer-events:none}.mdc-text-field__input{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);height:28px;transition:opacity 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);width:100%;min-width:0;border:none;border-radius:0;background:none;appearance:none;padding:0}.mdc-text-field__input::-ms-clear{display:none}.mdc-text-field__input::-webkit-calendar-picker-indicator{display:none}.mdc-text-field__input:focus{outline:none}.mdc-text-field__input:invalid{box-shadow:none}@media all{.mdc-text-field__input::placeholder{transition:opacity 67ms 0ms cubic-bezier(0.4, 0, 0.2, 1);opacity:0}}@media all{.mdc-text-field__input:-ms-input-placeholder{transition:opacity 67ms 0ms cubic-bezier(0.4, 0, 0.2, 1);opacity:0}}@media all{.mdc-text-field--no-label .mdc-text-field__input::placeholder,.mdc-text-field--focused .mdc-text-field__input::placeholder{transition-delay:40ms;transition-duration:110ms;opacity:1}}@media all{.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder,.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder{transition-delay:40ms;transition-duration:110ms;opacity:1}}.mdc-text-field__affix{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);height:28px;transition:opacity 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);opacity:0;white-space:nowrap}.mdc-text-field--label-floating .mdc-text-field__affix,.mdc-text-field--no-label .mdc-text-field__affix{opacity:1}@supports(-webkit-hyphens: none){.mdc-text-field--outlined .mdc-text-field__affix{align-items:center;align-self:center;display:inline-flex;height:100%}}.mdc-text-field__affix--prefix{padding-left:0;padding-right:2px}[dir=rtl] .mdc-text-field__affix--prefix,.mdc-text-field__affix--prefix[dir=rtl]{padding-left:2px;padding-right:0}.mdc-text-field--end-aligned .mdc-text-field__affix--prefix{padding-left:0;padding-right:12px}[dir=rtl] .mdc-text-field--end-aligned .mdc-text-field__affix--prefix,.mdc-text-field--end-aligned .mdc-text-field__affix--prefix[dir=rtl]{padding-left:12px;padding-right:0}.mdc-text-field__affix--suffix{padding-left:12px;padding-right:0}[dir=rtl] .mdc-text-field__affix--suffix,.mdc-text-field__affix--suffix[dir=rtl]{padding-left:0;padding-right:12px}.mdc-text-field--end-aligned .mdc-text-field__affix--suffix{padding-left:2px;padding-right:0}[dir=rtl] .mdc-text-field--end-aligned .mdc-text-field__affix--suffix,.mdc-text-field--end-aligned .mdc-text-field__affix--suffix[dir=rtl]{padding-left:0;padding-right:2px}.mdc-text-field--filled{height:56px}.mdc-text-field--filled .mdc-text-field__ripple::before,.mdc-text-field--filled .mdc-text-field__ripple::after{background-color:rgba(0, 0, 0, 0.87);background-color:var(--mdc-ripple-color, rgba(0, 0, 0, 0.87))}.mdc-text-field--filled:hover .mdc-text-field__ripple::before,.mdc-text-field--filled.mdc-ripple-surface--hover .mdc-text-field__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-text-field--filled.mdc-ripple-upgraded--background-focused .mdc-text-field__ripple::before,.mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-text-field--filled::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}.mdc-text-field--filled:not(.mdc-text-field--disabled){background-color:whitesmoke}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.42)}.mdc-text-field--filled:not(.mdc-text-field--disabled):hover .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.87)}.mdc-text-field--filled .mdc-line-ripple::after{border-bottom-color:#6200ee;border-bottom-color:var(--mdc-theme-primary, #6200ee)}.mdc-text-field--filled .mdc-floating-label{left:16px;right:initial}[dir=rtl] .mdc-text-field--filled .mdc-floating-label,.mdc-text-field--filled .mdc-floating-label[dir=rtl]{left:initial;right:16px}.mdc-text-field--filled .mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input{height:100%}.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label{display:none}.mdc-text-field--filled.mdc-text-field--no-label::before{display:none}@supports(-webkit-hyphens: none){.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__affix{align-items:center;align-self:center;display:inline-flex;height:100%}}.mdc-text-field--outlined{height:56px;overflow:visible}.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-37.25px) scale(1)}.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:.75rem}.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) scale(0.75)}.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined 250ms 1}@keyframes mdc-floating-label-shake-float-above-text-field-outlined{0%{transform:translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75)}}.mdc-text-field--outlined .mdc-text-field__input{height:100%}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.38)}.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.87)}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__trailing{border-color:#6200ee;border-color:var(--mdc-theme-primary, #6200ee)}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}[dir=rtl] .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading[dir=rtl]{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}@supports(top: max(0%)){.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading{width:max(12px, var(--mdc-shape-small, 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch{max-width:calc(100% - max(12px, var(--mdc-shape-small, 4px)) * 2)}}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}[dir=rtl] .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing,.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl]{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}@supports(top: max(0%)){.mdc-text-field--outlined{padding-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined{padding-right:max(16px, var(--mdc-shape-small, 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined+.mdc-text-field-helper-line{padding-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined+.mdc-text-field-helper-line{padding-right:max(16px, var(--mdc-shape-small, 4px))}}.mdc-text-field--outlined.mdc-text-field--with-leading-icon{padding-left:0}@supports(top: max(0%)){.mdc-text-field--outlined.mdc-text-field--with-leading-icon{padding-right:max(16px, var(--mdc-shape-small, 4px))}}[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-leading-icon,.mdc-text-field--outlined.mdc-text-field--with-leading-icon[dir=rtl]{padding-right:0}@supports(top: max(0%)){[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-leading-icon,.mdc-text-field--outlined.mdc-text-field--with-leading-icon[dir=rtl]{padding-left:max(16px, var(--mdc-shape-small, 4px))}}.mdc-text-field--outlined.mdc-text-field--with-trailing-icon{padding-right:0}@supports(top: max(0%)){.mdc-text-field--outlined.mdc-text-field--with-trailing-icon{padding-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-trailing-icon,.mdc-text-field--outlined.mdc-text-field--with-trailing-icon[dir=rtl]{padding-left:0}@supports(top: max(0%)){[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-trailing-icon,.mdc-text-field--outlined.mdc-text-field--with-trailing-icon[dir=rtl]{padding-right:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}.mdc-text-field--outlined.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon{padding-left:0;padding-right:0}.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:1px}.mdc-text-field--outlined .mdc-text-field__ripple::before,.mdc-text-field--outlined .mdc-text-field__ripple::after{background-color:transparent;background-color:var(--mdc-ripple-color, transparent)}.mdc-text-field--outlined .mdc-floating-label{left:4px;right:initial}[dir=rtl] .mdc-text-field--outlined .mdc-floating-label,.mdc-text-field--outlined .mdc-floating-label[dir=rtl]{left:initial;right:4px}.mdc-text-field--outlined .mdc-text-field__input{display:flex;border:none !important;background-color:transparent}.mdc-text-field--outlined .mdc-notched-outline{z-index:1}.mdc-text-field--textarea{flex-direction:column;align-items:center;width:auto;height:auto;padding:0;transition:none}.mdc-text-field--textarea .mdc-floating-label{top:19px}.mdc-text-field--textarea .mdc-floating-label:not(.mdc-floating-label--float-above){transform:none}.mdc-text-field--textarea .mdc-text-field__input{flex-grow:1;height:auto;min-height:1.5rem;overflow-x:hidden;overflow-y:auto;box-sizing:border-box;resize:none;padding:0 16px;line-height:1.5rem}.mdc-text-field--textarea.mdc-text-field--filled::before{display:none}.mdc-text-field--textarea.mdc-text-field--filled .mdc-floating-label--float-above{transform:translateY(-10.25px) scale(0.75)}.mdc-text-field--textarea.mdc-text-field--filled .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-textarea-filled 250ms 1}@keyframes mdc-floating-label-shake-float-above-textarea-filled{0%{transform:translateX(calc(0 - 0%)) translateY(-10.25px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-10.25px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-10.25px) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-10.25px) scale(0.75)}}.mdc-text-field--textarea.mdc-text-field--filled .mdc-text-field__input{margin-top:23px;margin-bottom:9px}.mdc-text-field--textarea.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input{margin-top:16px;margin-bottom:16px}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:0}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-27.25px) scale(1)}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:.75rem}.mdc-text-field--textarea.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-24.75px) scale(0.75)}.mdc-text-field--textarea.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-textarea-outlined 250ms 1}@keyframes mdc-floating-label-shake-float-above-textarea-outlined{0%{transform:translateX(calc(0 - 0%)) translateY(-24.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-24.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-24.75px) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-24.75px) scale(0.75)}}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-text-field__input{margin-top:16px;margin-bottom:16px}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label{top:18px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field__input{margin-bottom:2px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field-character-counter{align-self:flex-end;padding:0 16px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field-character-counter::after{display:inline-block;width:0;height:16px;content:"";vertical-align:-16px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field-character-counter::before{display:none}.mdc-text-field__resizer{align-self:stretch;display:inline-flex;flex-direction:column;flex-grow:1;max-height:100%;max-width:100%;min-height:56px;min-width:fit-content;min-width:-moz-available;min-width:-webkit-fill-available;overflow:hidden;resize:both}.mdc-text-field--filled .mdc-text-field__resizer{transform:translateY(-1px)}.mdc-text-field--filled .mdc-text-field__resizer .mdc-text-field__input,.mdc-text-field--filled .mdc-text-field__resizer .mdc-text-field-character-counter{transform:translateY(1px)}.mdc-text-field--outlined .mdc-text-field__resizer{transform:translateX(-1px) translateY(-1px)}[dir=rtl] .mdc-text-field--outlined .mdc-text-field__resizer,.mdc-text-field--outlined .mdc-text-field__resizer[dir=rtl]{transform:translateX(1px) translateY(-1px)}.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field__input,.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field-character-counter{transform:translateX(1px) translateY(1px)}[dir=rtl] .mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field__input,[dir=rtl] .mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field-character-counter,.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field__input[dir=rtl],.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field-character-counter[dir=rtl]{transform:translateX(-1px) translateY(1px)}.mdc-text-field--with-leading-icon{padding-left:0;padding-right:16px}[dir=rtl] .mdc-text-field--with-leading-icon,.mdc-text-field--with-leading-icon[dir=rtl]{padding-left:16px;padding-right:0}.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 48px);left:48px;right:initial}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label,.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label[dir=rtl]{left:initial;right:48px}.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 64px / 0.75)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label{left:36px;right:initial}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label[dir=rtl]{left:initial;right:36px}.mdc-text-field--with-leading-icon.mdc-text-field--outlined :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-37.25px) translateX(-32px) scale(1)}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-37.25px) translateX(32px) scale(1)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:.75rem}.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) translateX(-32px) scale(0.75)}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl],.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-34.75px) translateX(32px) scale(0.75)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined-leading-icon 250ms 1}@keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon{0%{transform:translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 32px)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 32px)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75)}}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--shake,.mdc-text-field--with-leading-icon.mdc-text-field--outlined[dir=rtl] .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined-leading-icon 250ms 1}@keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon-rtl{0%{transform:translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - -32px)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - -32px)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75)}}.mdc-text-field--with-trailing-icon{padding-left:16px;padding-right:0}[dir=rtl] .mdc-text-field--with-trailing-icon,.mdc-text-field--with-trailing-icon[dir=rtl]{padding-left:0;padding-right:16px}.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 64px)}.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 64px / 0.75)}.mdc-text-field--with-trailing-icon.mdc-text-field--outlined :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon{padding-left:0;padding-right:0}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 96px)}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 96px / 0.75)}.mdc-text-field-helper-line{display:flex;justify-content:space-between;box-sizing:border-box}.mdc-text-field+.mdc-text-field-helper-line{padding-right:16px;padding-left:16px}.mdc-form-field>.mdc-text-field+label{align-self:flex-start}.mdc-text-field--focused:not(.mdc-text-field--disabled) .mdc-floating-label{color:rgba(98, 0, 238, 0.87)}.mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--focused .mdc-notched-outline__trailing{border-width:2px}.mdc-text-field--focused+.mdc-text-field-helper-line .mdc-text-field-helper-text:not(.mdc-text-field-helper-text--validation-msg){opacity:1}.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:2px}.mdc-text-field--focused.mdc-text-field--outlined.mdc-text-field--textarea .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:0}.mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-floating-label{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--invalid+.mdc-text-field-helper-line .mdc-text-field-helper-text--validation-msg{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid .mdc-text-field__input{caret-color:#b00020;caret-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__icon--trailing{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__notch,.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid+.mdc-text-field-helper-line .mdc-text-field-helper-text--validation-msg{opacity:1}.mdc-text-field--disabled{pointer-events:none}.mdc-text-field--disabled .mdc-text-field__input{color:rgba(0, 0, 0, 0.38)}@media all{.mdc-text-field--disabled .mdc-text-field__input::placeholder{color:rgba(0, 0, 0, 0.38)}}@media all{.mdc-text-field--disabled .mdc-text-field__input:-ms-input-placeholder{color:rgba(0, 0, 0, 0.38)}}.mdc-text-field--disabled .mdc-floating-label{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled+.mdc-text-field-helper-line .mdc-text-field-helper-text{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled .mdc-text-field-character-counter,.mdc-text-field--disabled+.mdc-text-field-helper-line .mdc-text-field-character-counter{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled .mdc-text-field__icon--leading{color:rgba(0, 0, 0, 0.3)}.mdc-text-field--disabled .mdc-text-field__icon--trailing{color:rgba(0, 0, 0, 0.3)}.mdc-text-field--disabled .mdc-text-field__affix--prefix{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled .mdc-text-field__affix--suffix{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.06)}.mdc-text-field--disabled .mdc-notched-outline__leading,.mdc-text-field--disabled .mdc-notched-outline__notch,.mdc-text-field--disabled .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.06)}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__input::placeholder{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__input:-ms-input-placeholder{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-floating-label{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled+.mdc-text-field-helper-line .mdc-text-field-helper-text{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field-character-counter,.mdc-text-field--disabled+.mdc-text-field-helper-line .mdc-text-field-character-counter{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__icon--leading{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__icon--trailing{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__affix--prefix{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__affix--suffix{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-line-ripple::before{border-bottom-color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-notched-outline__leading,.mdc-text-field--disabled .mdc-notched-outline__notch,.mdc-text-field--disabled .mdc-notched-outline__trailing{border-color:GrayText}}@media screen and (forced-colors: active){.mdc-text-field--disabled .mdc-text-field__input{background-color:Window}.mdc-text-field--disabled .mdc-floating-label{z-index:1}}.mdc-text-field--disabled .mdc-floating-label{cursor:default}.mdc-text-field--disabled.mdc-text-field--filled{background-color:#fafafa}.mdc-text-field--disabled.mdc-text-field--filled .mdc-text-field__ripple{display:none}.mdc-text-field--disabled .mdc-text-field__input{pointer-events:auto}.mdc-text-field--end-aligned .mdc-text-field__input{text-align:right}[dir=rtl] .mdc-text-field--end-aligned .mdc-text-field__input,.mdc-text-field--end-aligned .mdc-text-field__input[dir=rtl]{text-align:left}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__input,[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__input,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix{direction:ltr}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--prefix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--prefix{padding-left:0;padding-right:2px}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--suffix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--suffix{padding-left:12px;padding-right:0}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__icon--leading,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__icon--leading{order:1}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--suffix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--suffix{order:2}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__input,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__input{order:3}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--prefix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--prefix{order:4}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__icon--trailing,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__icon--trailing{order:5}[dir=rtl] .mdc-text-field--ltr-text.mdc-text-field--end-aligned .mdc-text-field__input,.mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir=rtl] .mdc-text-field__input{text-align:right}[dir=rtl] .mdc-text-field--ltr-text.mdc-text-field--end-aligned .mdc-text-field__affix--prefix,.mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir=rtl] .mdc-text-field__affix--prefix{padding-right:12px}[dir=rtl] .mdc-text-field--ltr-text.mdc-text-field--end-aligned .mdc-text-field__affix--suffix,.mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir=rtl] .mdc-text-field__affix--suffix{padding-left:2px}.mdc-text-field-helper-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit);display:block;margin-top:0;line-height:normal;margin:0;opacity:0;will-change:opacity;transition:opacity 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-text-field-helper-text::before{display:inline-block;width:0;height:16px;content:"";vertical-align:0}.mdc-text-field-helper-text--persistent{transition:none;opacity:1;will-change:initial}.mdc-text-field-character-counter{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit);display:block;margin-top:0;line-height:normal;margin-left:auto;margin-right:0;padding-left:16px;padding-right:0;white-space:nowrap}.mdc-text-field-character-counter::before{display:inline-block;width:0;height:16px;content:"";vertical-align:0}[dir=rtl] .mdc-text-field-character-counter,.mdc-text-field-character-counter[dir=rtl]{margin-left:0;margin-right:auto}[dir=rtl] .mdc-text-field-character-counter,.mdc-text-field-character-counter[dir=rtl]{padding-left:0;padding-right:16px}.mdc-text-field__icon{align-self:center;cursor:pointer}.mdc-text-field__icon:not([tabindex]),.mdc-text-field__icon[tabindex="-1"]{cursor:default;pointer-events:none}.mdc-text-field__icon svg{display:block}.mdc-text-field__icon--leading{margin-left:16px;margin-right:8px}[dir=rtl] .mdc-text-field__icon--leading,.mdc-text-field__icon--leading[dir=rtl]{margin-left:8px;margin-right:16px}.mdc-text-field__icon--trailing{padding:12px;margin-left:0px;margin-right:0px}[dir=rtl] .mdc-text-field__icon--trailing,.mdc-text-field__icon--trailing[dir=rtl]{margin-left:0px;margin-right:0px}.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}:host{display:inline-flex;flex-direction:column;outline:none}.mdc-text-field{width:100%}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.42);border-bottom-color:var(--mdc-text-field-idle-line-color, rgba(0, 0, 0, 0.42))}.mdc-text-field:not(.mdc-text-field--disabled):hover .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.87);border-bottom-color:var(--mdc-text-field-hover-line-color, rgba(0, 0, 0, 0.87))}.mdc-text-field.mdc-text-field--disabled .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.06);border-bottom-color:var(--mdc-text-field-disabled-line-color, rgba(0, 0, 0, 0.06))}.mdc-text-field.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-text-field__input{direction:inherit}mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-text-field-outlined-idle-border-color, rgba(0, 0, 0, 0.38) )}:host(:not([disabled]):hover) :not(.mdc-text-field--invalid):not(.mdc-text-field--focused) mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-text-field-outlined-hover-border-color, rgba(0, 0, 0, 0.87) )}:host(:not([disabled])) .mdc-text-field:not(.mdc-text-field--outlined){background-color:var(--mdc-text-field-fill-color, whitesmoke)}:host(:not([disabled])) .mdc-text-field.mdc-text-field--invalid mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-text-field-error-color, var(--mdc-theme-error, #b00020) )}:host(:not([disabled])) .mdc-text-field.mdc-text-field--invalid+.mdc-text-field-helper-line .mdc-text-field-character-counter,:host(:not([disabled])) .mdc-text-field.mdc-text-field--invalid .mdc-text-field__icon{color:var(--mdc-text-field-error-color, var(--mdc-theme-error, #b00020))}:host(:not([disabled])) .mdc-text-field:not(.mdc-text-field--invalid):not(.mdc-text-field--focused) .mdc-floating-label,:host(:not([disabled])) .mdc-text-field:not(.mdc-text-field--invalid):not(.mdc-text-field--focused) .mdc-floating-label::after{color:var(--mdc-text-field-label-ink-color, rgba(0, 0, 0, 0.6))}:host(:not([disabled])) .mdc-text-field.mdc-text-field--focused mwc-notched-outline{--mdc-notched-outline-stroke-width: 2px}:host(:not([disabled])) .mdc-text-field.mdc-text-field--focused:not(.mdc-text-field--invalid) mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-text-field-focused-label-color, var(--mdc-theme-primary, rgba(98, 0, 238, 0.87)) )}:host(:not([disabled])) .mdc-text-field.mdc-text-field--focused:not(.mdc-text-field--invalid) .mdc-floating-label{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host(:not([disabled])) .mdc-text-field .mdc-text-field__input{color:var(--mdc-text-field-ink-color, rgba(0, 0, 0, 0.87))}:host(:not([disabled])) .mdc-text-field .mdc-text-field__input::placeholder{color:var(--mdc-text-field-label-ink-color, rgba(0, 0, 0, 0.6))}:host(:not([disabled])) .mdc-text-field-helper-line .mdc-text-field-helper-text:not(.mdc-text-field-helper-text--validation-msg),:host(:not([disabled])) .mdc-text-field-helper-line:not(.mdc-text-field--invalid) .mdc-text-field-character-counter{color:var(--mdc-text-field-label-ink-color, rgba(0, 0, 0, 0.6))}:host([disabled]) .mdc-text-field:not(.mdc-text-field--outlined){background-color:var(--mdc-text-field-disabled-fill-color, #fafafa)}:host([disabled]) .mdc-text-field.mdc-text-field--outlined mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-text-field-outlined-disabled-border-color, rgba(0, 0, 0, 0.06) )}:host([disabled]) .mdc-text-field:not(.mdc-text-field--invalid):not(.mdc-text-field--focused) .mdc-floating-label,:host([disabled]) .mdc-text-field:not(.mdc-text-field--invalid):not(.mdc-text-field--focused) .mdc-floating-label::after{color:var(--mdc-text-field-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-text-field .mdc-text-field__input,:host([disabled]) .mdc-text-field .mdc-text-field__input::placeholder{color:var(--mdc-text-field-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-text-field-helper-line .mdc-text-field-helper-text,:host([disabled]) .mdc-text-field-helper-line .mdc-text-field-character-counter{color:var(--mdc-text-field-disabled-ink-color, rgba(0, 0, 0, 0.38))}`;
  var Io = (function () {
      function e(e) {
        void 0 === e && (e = {}), (this.adapter = e);
      }
      return (
        Object.defineProperty(e, "cssClasses", {
          get: function () {
            return {};
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e, "strings", {
          get: function () {
            return {};
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e, "numbers", {
          get: function () {
            return {};
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e, "defaultAdapter", {
          get: function () {
            return {};
          },
          enumerable: !1,
          configurable: !0,
        }),
        (e.prototype.init = function () {}),
        (e.prototype.destroy = function () {}),
        e
      );
    })(),
    Co = {
      ARIA_CONTROLS: "aria-controls",
      ARIA_DESCRIBEDBY: "aria-describedby",
      INPUT_SELECTOR: ".mdc-text-field__input",
      LABEL_SELECTOR: ".mdc-floating-label",
      LEADING_ICON_SELECTOR: ".mdc-text-field__icon--leading",
      LINE_RIPPLE_SELECTOR: ".mdc-line-ripple",
      OUTLINE_SELECTOR: ".mdc-notched-outline",
      PREFIX_SELECTOR: ".mdc-text-field__affix--prefix",
      SUFFIX_SELECTOR: ".mdc-text-field__affix--suffix",
      TRAILING_ICON_SELECTOR: ".mdc-text-field__icon--trailing",
    },
    So = {
      DISABLED: "mdc-text-field--disabled",
      FOCUSED: "mdc-text-field--focused",
      HELPER_LINE: "mdc-text-field-helper-line",
      INVALID: "mdc-text-field--invalid",
      LABEL_FLOATING: "mdc-text-field--label-floating",
      NO_LABEL: "mdc-text-field--no-label",
      OUTLINED: "mdc-text-field--outlined",
      ROOT: "mdc-text-field",
      TEXTAREA: "mdc-text-field--textarea",
      WITH_LEADING_ICON: "mdc-text-field--with-leading-icon",
      WITH_TRAILING_ICON: "mdc-text-field--with-trailing-icon",
      WITH_INTERNAL_COUNTER: "mdc-text-field--with-internal-counter",
    },
    Ro = { LABEL_SCALE: 0.75 },
    Oo = ["pattern", "min", "max", "required", "step", "minlength", "maxlength"],
    Lo = ["color", "date", "datetime-local", "month", "range", "time", "week"],
    Fo = ["mousedown", "touchstart"],
    Do = ["click", "keydown"],
    Po = (function (e) {
      function r(t, n) {
        void 0 === n && (n = {});
        var o = e.call(this, i(i({}, r.defaultAdapter), t)) || this;
        return (
          (o.isFocused = !1),
          (o.receivedUserInput = !1),
          (o.valid = !0),
          (o.useNativeValidation = !0),
          (o.validateOnValueChange = !0),
          (o.helperText = n.helperText),
          (o.characterCounter = n.characterCounter),
          (o.leadingIcon = n.leadingIcon),
          (o.trailingIcon = n.trailingIcon),
          (o.inputFocusHandler = function () {
            o.activateFocus();
          }),
          (o.inputBlurHandler = function () {
            o.deactivateFocus();
          }),
          (o.inputInputHandler = function () {
            o.handleInput();
          }),
          (o.setPointerXOffset = function (e) {
            o.setTransformOrigin(e);
          }),
          (o.textFieldInteractionHandler = function () {
            o.handleTextFieldInteraction();
          }),
          (o.validationAttributeChangeHandler = function (e) {
            o.handleValidationAttributeChange(e);
          }),
          o
        );
      }
      return (
        t(r, e),
        Object.defineProperty(r, "cssClasses", {
          get: function () {
            return So;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(r, "strings", {
          get: function () {
            return Co;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(r, "numbers", {
          get: function () {
            return Ro;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(r.prototype, "shouldAlwaysFloat", {
          get: function () {
            var e = this.getNativeInput().type;
            return Lo.indexOf(e) >= 0;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(r.prototype, "shouldFloat", {
          get: function () {
            return this.shouldAlwaysFloat || this.isFocused || !!this.getValue() || this.isBadInput();
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(r.prototype, "shouldShake", {
          get: function () {
            return !this.isFocused && !this.isValid() && !!this.getValue();
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(r, "defaultAdapter", {
          get: function () {
            return {
              addClass: function () {},
              removeClass: function () {},
              hasClass: function () {
                return !0;
              },
              setInputAttr: function () {},
              removeInputAttr: function () {},
              registerTextFieldInteractionHandler: function () {},
              deregisterTextFieldInteractionHandler: function () {},
              registerInputInteractionHandler: function () {},
              deregisterInputInteractionHandler: function () {},
              registerValidationAttributeChangeHandler: function () {
                return new MutationObserver(function () {});
              },
              deregisterValidationAttributeChangeHandler: function () {},
              getNativeInput: function () {
                return null;
              },
              isFocused: function () {
                return !1;
              },
              activateLineRipple: function () {},
              deactivateLineRipple: function () {},
              setLineRippleTransformOrigin: function () {},
              shakeLabel: function () {},
              floatLabel: function () {},
              setLabelRequired: function () {},
              hasLabel: function () {
                return !1;
              },
              getLabelWidth: function () {
                return 0;
              },
              hasOutline: function () {
                return !1;
              },
              notchOutline: function () {},
              closeOutline: function () {},
            };
          },
          enumerable: !1,
          configurable: !0,
        }),
        (r.prototype.init = function () {
          var e, t, i, r;
          this.adapter.hasLabel() && this.getNativeInput().required && this.adapter.setLabelRequired(!0),
            this.adapter.isFocused()
              ? this.inputFocusHandler()
              : this.adapter.hasLabel() && this.shouldFloat && (this.notchOutline(!0), this.adapter.floatLabel(!0), this.styleFloating(!0)),
            this.adapter.registerInputInteractionHandler("focus", this.inputFocusHandler),
            this.adapter.registerInputInteractionHandler("blur", this.inputBlurHandler),
            this.adapter.registerInputInteractionHandler("input", this.inputInputHandler);
          try {
            for (var o = n(Fo), a = o.next(); !a.done; a = o.next()) {
              var d = a.value;
              this.adapter.registerInputInteractionHandler(d, this.setPointerXOffset);
            }
          } catch (t) {
            e = { error: t };
          } finally {
            try {
              a && !a.done && (t = o.return) && t.call(o);
            } finally {
              if (e) throw e.error;
            }
          }
          try {
            for (var c = n(Do), s = c.next(); !s.done; s = c.next())
              (d = s.value), this.adapter.registerTextFieldInteractionHandler(d, this.textFieldInteractionHandler);
          } catch (e) {
            i = { error: e };
          } finally {
            try {
              s && !s.done && (r = c.return) && r.call(c);
            } finally {
              if (i) throw i.error;
            }
          }
          (this.validationObserver = this.adapter.registerValidationAttributeChangeHandler(this.validationAttributeChangeHandler)),
            this.setcharacterCounter(this.getValue().length);
        }),
        (r.prototype.destroy = function () {
          var e, t, i, r;
          this.adapter.deregisterInputInteractionHandler("focus", this.inputFocusHandler),
            this.adapter.deregisterInputInteractionHandler("blur", this.inputBlurHandler),
            this.adapter.deregisterInputInteractionHandler("input", this.inputInputHandler);
          try {
            for (var o = n(Fo), a = o.next(); !a.done; a = o.next()) {
              var d = a.value;
              this.adapter.deregisterInputInteractionHandler(d, this.setPointerXOffset);
            }
          } catch (t) {
            e = { error: t };
          } finally {
            try {
              a && !a.done && (t = o.return) && t.call(o);
            } finally {
              if (e) throw e.error;
            }
          }
          try {
            for (var c = n(Do), s = c.next(); !s.done; s = c.next())
              (d = s.value), this.adapter.deregisterTextFieldInteractionHandler(d, this.textFieldInteractionHandler);
          } catch (e) {
            i = { error: e };
          } finally {
            try {
              s && !s.done && (r = c.return) && r.call(c);
            } finally {
              if (i) throw i.error;
            }
          }
          this.adapter.deregisterValidationAttributeChangeHandler(this.validationObserver);
        }),
        (r.prototype.handleTextFieldInteraction = function () {
          var e = this.adapter.getNativeInput();
          (e && e.disabled) || (this.receivedUserInput = !0);
        }),
        (r.prototype.handleValidationAttributeChange = function (e) {
          var t = this;
          e.some(function (e) {
            return Oo.indexOf(e) > -1 && (t.styleValidity(!0), t.adapter.setLabelRequired(t.getNativeInput().required), !0);
          }),
            e.indexOf("maxlength") > -1 && this.setcharacterCounter(this.getValue().length);
        }),
        (r.prototype.notchOutline = function (e) {
          if (this.adapter.hasOutline() && this.adapter.hasLabel())
            if (e) {
              var t = this.adapter.getLabelWidth() * Ro.LABEL_SCALE;
              this.adapter.notchOutline(t);
            } else this.adapter.closeOutline();
        }),
        (r.prototype.activateFocus = function () {
          (this.isFocused = !0),
            this.styleFocused(this.isFocused),
            this.adapter.activateLineRipple(),
            this.adapter.hasLabel() &&
              (this.notchOutline(this.shouldFloat),
              this.adapter.floatLabel(this.shouldFloat),
              this.styleFloating(this.shouldFloat),
              this.adapter.shakeLabel(this.shouldShake)),
            !this.helperText ||
              (!this.helperText.isPersistent() && this.helperText.isValidation() && this.valid) ||
              this.helperText.showToScreenReader();
        }),
        (r.prototype.setTransformOrigin = function (e) {
          if (!this.isDisabled() && !this.adapter.hasOutline()) {
            var t = e.touches,
              i = t ? t[0] : e,
              r = i.target.getBoundingClientRect(),
              n = i.clientX - r.left;
            this.adapter.setLineRippleTransformOrigin(n);
          }
        }),
        (r.prototype.handleInput = function () {
          this.autoCompleteFocus(), this.setcharacterCounter(this.getValue().length);
        }),
        (r.prototype.autoCompleteFocus = function () {
          this.receivedUserInput || this.activateFocus();
        }),
        (r.prototype.deactivateFocus = function () {
          (this.isFocused = !1), this.adapter.deactivateLineRipple();
          var e = this.isValid();
          this.styleValidity(e),
            this.styleFocused(this.isFocused),
            this.adapter.hasLabel() &&
              (this.notchOutline(this.shouldFloat),
              this.adapter.floatLabel(this.shouldFloat),
              this.styleFloating(this.shouldFloat),
              this.adapter.shakeLabel(this.shouldShake)),
            this.shouldFloat || (this.receivedUserInput = !1);
        }),
        (r.prototype.getValue = function () {
          return this.getNativeInput().value;
        }),
        (r.prototype.setValue = function (e) {
          if ((this.getValue() !== e && (this.getNativeInput().value = e), this.setcharacterCounter(e.length), this.validateOnValueChange)) {
            var t = this.isValid();
            this.styleValidity(t);
          }
          this.adapter.hasLabel() &&
            (this.notchOutline(this.shouldFloat),
            this.adapter.floatLabel(this.shouldFloat),
            this.styleFloating(this.shouldFloat),
            this.validateOnValueChange && this.adapter.shakeLabel(this.shouldShake));
        }),
        (r.prototype.isValid = function () {
          return this.useNativeValidation ? this.isNativeInputValid() : this.valid;
        }),
        (r.prototype.setValid = function (e) {
          (this.valid = e), this.styleValidity(e);
          var t = !e && !this.isFocused && !!this.getValue();
          this.adapter.hasLabel() && this.adapter.shakeLabel(t);
        }),
        (r.prototype.setValidateOnValueChange = function (e) {
          this.validateOnValueChange = e;
        }),
        (r.prototype.getValidateOnValueChange = function () {
          return this.validateOnValueChange;
        }),
        (r.prototype.setUseNativeValidation = function (e) {
          this.useNativeValidation = e;
        }),
        (r.prototype.isDisabled = function () {
          return this.getNativeInput().disabled;
        }),
        (r.prototype.setDisabled = function (e) {
          (this.getNativeInput().disabled = e), this.styleDisabled(e);
        }),
        (r.prototype.setHelperTextContent = function (e) {
          this.helperText && this.helperText.setContent(e);
        }),
        (r.prototype.setLeadingIconAriaLabel = function (e) {
          this.leadingIcon && this.leadingIcon.setAriaLabel(e);
        }),
        (r.prototype.setLeadingIconContent = function (e) {
          this.leadingIcon && this.leadingIcon.setContent(e);
        }),
        (r.prototype.setTrailingIconAriaLabel = function (e) {
          this.trailingIcon && this.trailingIcon.setAriaLabel(e);
        }),
        (r.prototype.setTrailingIconContent = function (e) {
          this.trailingIcon && this.trailingIcon.setContent(e);
        }),
        (r.prototype.setcharacterCounter = function (e) {
          if (this.characterCounter) {
            var t = this.getNativeInput().maxLength;
            if (-1 === t) throw new Error("MDCTextFieldFoundation: Expected maxlength html property on text input or textarea.");
            this.characterCounter.setCounterValue(e, t);
          }
        }),
        (r.prototype.isBadInput = function () {
          return this.getNativeInput().validity.badInput || !1;
        }),
        (r.prototype.isNativeInputValid = function () {
          return this.getNativeInput().validity.valid;
        }),
        (r.prototype.styleValidity = function (e) {
          var t = r.cssClasses.INVALID;
          if ((e ? this.adapter.removeClass(t) : this.adapter.addClass(t), this.helperText)) {
            if ((this.helperText.setValidity(e), !this.helperText.isValidation())) return;
            var i = this.helperText.isVisible(),
              n = this.helperText.getId();
            i && n ? this.adapter.setInputAttr(Co.ARIA_DESCRIBEDBY, n) : this.adapter.removeInputAttr(Co.ARIA_DESCRIBEDBY);
          }
        }),
        (r.prototype.styleFocused = function (e) {
          var t = r.cssClasses.FOCUSED;
          e ? this.adapter.addClass(t) : this.adapter.removeClass(t);
        }),
        (r.prototype.styleDisabled = function (e) {
          var t = r.cssClasses,
            i = t.DISABLED,
            n = t.INVALID;
          e ? (this.adapter.addClass(i), this.adapter.removeClass(n)) : this.adapter.removeClass(i),
            this.leadingIcon && this.leadingIcon.setDisabled(e),
            this.trailingIcon && this.trailingIcon.setDisabled(e);
        }),
        (r.prototype.styleFloating = function (e) {
          var t = r.cssClasses.LABEL_FLOATING;
          e ? this.adapter.addClass(t) : this.adapter.removeClass(t);
        }),
        (r.prototype.getNativeInput = function () {
          return (
            (this.adapter ? this.adapter.getNativeInput() : null) || {
              disabled: !1,
              maxLength: -1,
              required: !1,
              type: "input",
              validity: { badInput: !1, valid: !0 },
              value: "",
            }
          );
        }),
        r
      );
    })(Io);
  const No = Po,
    $o = tt(
      class extends it {
        constructor(e) {
          if ((super(e), 3 !== e.type && 1 !== e.type && 4 !== e.type)) throw Error("The `live` directive is not allowed on child or event bindings");
          if (!un(e)) throw Error("`live` bindings can only contain a single expression");
        }
        render(e) {
          return e;
        }
        update(e, [t]) {
          if (t === he || t === ue) return t;
          const i = e.element,
            r = e.name;
          if (3 === e.type) {
            if (t === i[r]) return he;
          } else if (4 === e.type) {
            if (!!t === i.hasAttribute(r)) return he;
          } else if (1 === e.type && i.getAttribute(r) === t + "") return he;
          return (
            ((e, t = fn) => {
              e._$AH = t;
            })(e),
            t
          );
        }
      }
    ),
    Mo = ["touchstart", "touchmove", "scroll", "mousewheel"],
    zo = (e = {}) => {
      const t = {};
      for (const i in e) t[i] = e[i];
      return Object.assign(
        {
          badInput: !1,
          customError: !1,
          patternMismatch: !1,
          rangeOverflow: !1,
          rangeUnderflow: !1,
          stepMismatch: !1,
          tooLong: !1,
          tooShort: !1,
          typeMismatch: !1,
          valid: !0,
          valueMissing: !1,
        },
        t
      );
    };
  class Ho extends Et {
    constructor() {
      super(...arguments),
        (this.mdcFoundationClass = No),
        (this.value = ""),
        (this.type = "text"),
        (this.placeholder = ""),
        (this.label = ""),
        (this.icon = ""),
        (this.iconTrailing = ""),
        (this.disabled = !1),
        (this.required = !1),
        (this.minLength = -1),
        (this.maxLength = -1),
        (this.outlined = !1),
        (this.helper = ""),
        (this.validateOnInitialRender = !1),
        (this.validationMessage = ""),
        (this.autoValidate = !1),
        (this.pattern = ""),
        (this.min = ""),
        (this.max = ""),
        (this.step = null),
        (this.size = null),
        (this.helperPersistent = !1),
        (this.charCounter = !1),
        (this.endAligned = !1),
        (this.prefix = ""),
        (this.suffix = ""),
        (this.name = ""),
        (this.readOnly = !1),
        (this.autocapitalize = ""),
        (this.outlineOpen = !1),
        (this.outlineWidth = 0),
        (this.isUiValid = !0),
        (this.focused = !1),
        (this._validity = zo()),
        (this.validityTransform = null);
    }
    get validity() {
      return this._checkValidity(this.value), this._validity;
    }
    get willValidate() {
      return this.formElement.willValidate;
    }
    get selectionStart() {
      return this.formElement.selectionStart;
    }
    get selectionEnd() {
      return this.formElement.selectionEnd;
    }
    focus() {
      const e = new CustomEvent("focus");
      this.formElement.dispatchEvent(e), this.formElement.focus();
    }
    blur() {
      const e = new CustomEvent("blur");
      this.formElement.dispatchEvent(e), this.formElement.blur();
    }
    select() {
      this.formElement.select();
    }
    setSelectionRange(e, t, i) {
      this.formElement.setSelectionRange(e, t, i);
    }
    update(e) {
      e.has("autoValidate") && this.mdcFoundation && this.mdcFoundation.setValidateOnValueChange(this.autoValidate),
        e.has("value") && "string" != typeof this.value && (this.value = `${this.value}`),
        super.update(e);
    }
    setFormData(e) {
      this.name && e.append(this.name, this.value);
    }
    render() {
      const e = this.charCounter && -1 !== this.maxLength,
        t = !!this.helper || !!this.validationMessage || e,
        i = {
          "mdc-text-field--disabled": this.disabled,
          "mdc-text-field--no-label": !this.label,
          "mdc-text-field--filled": !this.outlined,
          "mdc-text-field--outlined": this.outlined,
          "mdc-text-field--with-leading-icon": this.icon,
          "mdc-text-field--with-trailing-icon": this.iconTrailing,
          "mdc-text-field--end-aligned": this.endAligned,
        };
      return me`
      <label class="mdc-text-field ${rt(i)}">
        ${this.renderRipple()}
        ${this.outlined ? this.renderOutline() : this.renderLabel()}
        ${this.renderLeadingIcon()}
        ${this.renderPrefix()}
        ${this.renderInput(t)}
        ${this.renderSuffix()}
        ${this.renderTrailingIcon()}
        ${this.renderLineRipple()}
      </label>
      ${this.renderHelperText(t, e)}
    `;
    }
    updated(e) {
      e.has("value") && void 0 !== e.get("value") && (this.mdcFoundation.setValue(this.value), this.autoValidate && this.reportValidity());
    }
    renderRipple() {
      return this.outlined
        ? ""
        : me`
      <span class="mdc-text-field__ripple"></span>
    `;
    }
    renderOutline() {
      return this.outlined
        ? me`
      <mwc-notched-outline
          .width=${this.outlineWidth}
          .open=${this.outlineOpen}
          class="mdc-notched-outline">
        ${this.renderLabel()}
      </mwc-notched-outline>`
        : "";
    }
    renderLabel() {
      return this.label
        ? me`
      <span
          .floatingLabelFoundation=${pr(this.label)}
          id="label">${this.label}</span>
    `
        : "";
    }
    renderLeadingIcon() {
      return this.icon ? this.renderIcon(this.icon) : "";
    }
    renderTrailingIcon() {
      return this.iconTrailing ? this.renderIcon(this.iconTrailing, !0) : "";
    }
    renderIcon(e, t = !1) {
      return me`<i class="material-icons mdc-text-field__icon ${rt({
        "mdc-text-field__icon--leading": !t,
        "mdc-text-field__icon--trailing": t,
      })}">${e}</i>`;
    }
    renderPrefix() {
      return this.prefix ? this.renderAffix(this.prefix) : "";
    }
    renderSuffix() {
      return this.suffix ? this.renderAffix(this.suffix, !0) : "";
    }
    renderAffix(e, t = !1) {
      return me`<span class="mdc-text-field__affix ${rt({ "mdc-text-field__affix--prefix": !t, "mdc-text-field__affix--suffix": t })}">
        ${e}</span>`;
    }
    renderInput(e) {
      const t = -1 === this.minLength ? void 0 : this.minLength,
        i = -1 === this.maxLength ? void 0 : this.maxLength,
        r = this.autocapitalize ? this.autocapitalize : void 0,
        n = this.validationMessage && !this.isUiValid,
        o = this.label ? "label" : void 0,
        a = e ? "helper-text" : void 0,
        d = this.focused || this.helperPersistent || n ? "helper-text" : void 0;
      return me`
      <input
          aria-labelledby=${lt(o)}
          aria-controls="${lt(a)}"
          aria-describedby="${lt(d)}"
          class="mdc-text-field__input"
          type="${this.type}"
          .value="${$o(this.value)}"
          ?disabled="${this.disabled}"
          placeholder="${this.placeholder}"
          ?required="${this.required}"
          ?readonly="${this.readOnly}"
          minlength="${lt(t)}"
          maxlength="${lt(i)}"
          pattern="${lt(this.pattern ? this.pattern : void 0)}"
          min="${lt("" === this.min ? void 0 : this.min)}"
          max="${lt("" === this.max ? void 0 : this.max)}"
          step="${lt(null === this.step ? void 0 : this.step)}"
          size="${lt(null === this.size ? void 0 : this.size)}"
          name="${lt("" === this.name ? void 0 : this.name)}"
          inputmode="${lt(this.inputMode)}"
          autocapitalize="${lt(r)}"
          @input="${this.handleInputChange}"
          @focus="${this.onInputFocus}"
          @blur="${this.onInputBlur}">`;
    }
    renderLineRipple() {
      return this.outlined
        ? ""
        : me`
      <span .lineRippleFoundation=${fr()}></span>
    `;
    }
    renderHelperText(e, t) {
      const i = this.validationMessage && !this.isUiValid,
        r = { "mdc-text-field-helper-text--persistent": this.helperPersistent, "mdc-text-field-helper-text--validation-msg": i },
        n = this.focused || this.helperPersistent || i ? void 0 : "true",
        o = i ? this.validationMessage : this.helper;
      return e
        ? me`
      <div class="mdc-text-field-helper-line">
        <div id="helper-text"
             aria-hidden="${lt(n)}"
             class="mdc-text-field-helper-text ${rt(r)}"
             >${o}</div>
        ${this.renderCharCounter(t)}
      </div>`
        : "";
    }
    renderCharCounter(e) {
      const t = Math.min(this.value.length, this.maxLength);
      return e
        ? me`
      <span class="mdc-text-field-character-counter"
            >${t} / ${this.maxLength}</span>`
        : "";
    }
    onInputFocus() {
      this.focused = !0;
    }
    onInputBlur() {
      (this.focused = !1), this.reportValidity();
    }
    checkValidity() {
      const e = this._checkValidity(this.value);
      if (!e) {
        const e = new Event("invalid", { bubbles: !1, cancelable: !0 });
        this.dispatchEvent(e);
      }
      return e;
    }
    reportValidity() {
      const e = this.checkValidity();
      return this.mdcFoundation.setValid(e), (this.isUiValid = e), e;
    }
    _checkValidity(e) {
      const t = this.formElement.validity;
      let i = zo(t);
      if (this.validityTransform) {
        const t = this.validityTransform(e, i);
        (i = Object.assign(Object.assign({}, i), t)), this.mdcFoundation.setUseNativeValidation(!1);
      } else this.mdcFoundation.setUseNativeValidation(!0);
      return (this._validity = i), this._validity.valid;
    }
    setCustomValidity(e) {
      (this.validationMessage = e), this.formElement.setCustomValidity(e);
    }
    handleInputChange() {
      this.value = this.formElement.value;
    }
    createAdapter() {
      return Object.assign(
        Object.assign(
          Object.assign(Object.assign(Object.assign({}, this.getRootAdapterMethods()), this.getInputAdapterMethods()), this.getLabelAdapterMethods()),
          this.getLineRippleAdapterMethods()
        ),
        this.getOutlineAdapterMethods()
      );
    }
    getRootAdapterMethods() {
      return Object.assign(
        {
          registerTextFieldInteractionHandler: (e, t) => this.addEventListener(e, t),
          deregisterTextFieldInteractionHandler: (e, t) => this.removeEventListener(e, t),
          registerValidationAttributeChangeHandler: (e) => {
            const t = new MutationObserver((t) => {
              e(((e) => e.map((e) => e.attributeName).filter((e) => e))(t));
            });
            return t.observe(this.formElement, { attributes: !0 }), t;
          },
          deregisterValidationAttributeChangeHandler: (e) => e.disconnect(),
        },
        ze(this.mdcRoot)
      );
    }
    getInputAdapterMethods() {
      return {
        getNativeInput: () => this.formElement,
        setInputAttr: () => {},
        removeInputAttr: () => {},
        isFocused: () => !!this.shadowRoot && this.shadowRoot.activeElement === this.formElement,
        registerInputInteractionHandler: (e, t) => this.formElement.addEventListener(e, t, { passive: e in Mo }),
        deregisterInputInteractionHandler: (e, t) => this.formElement.removeEventListener(e, t),
      };
    }
    getLabelAdapterMethods() {
      return {
        floatLabel: (e) => this.labelElement && this.labelElement.floatingLabelFoundation.float(e),
        getLabelWidth: () => (this.labelElement ? this.labelElement.floatingLabelFoundation.getWidth() : 0),
        hasLabel: () => Boolean(this.labelElement),
        shakeLabel: (e) => this.labelElement && this.labelElement.floatingLabelFoundation.shake(e),
        setLabelRequired: (e) => {
          this.labelElement && this.labelElement.floatingLabelFoundation.setRequired(e);
        },
      };
    }
    getLineRippleAdapterMethods() {
      return {
        activateLineRipple: () => {
          this.lineRippleElement && this.lineRippleElement.lineRippleFoundation.activate();
        },
        deactivateLineRipple: () => {
          this.lineRippleElement && this.lineRippleElement.lineRippleFoundation.deactivate();
        },
        setLineRippleTransformOrigin: (e) => {
          this.lineRippleElement && this.lineRippleElement.lineRippleFoundation.setRippleCenter(e);
        },
      };
    }
    async getUpdateComplete() {
      var e;
      const t = await super.getUpdateComplete();
      return await (null === (e = this.outlineElement) || void 0 === e ? void 0 : e.updateComplete), t;
    }
    firstUpdated() {
      var e;
      super.firstUpdated(),
        this.mdcFoundation.setValidateOnValueChange(this.autoValidate),
        this.validateOnInitialRender && this.reportValidity(),
        null === (e = this.outlineElement) ||
          void 0 === e ||
          e.updateComplete.then(() => {
            var e;
            this.outlineWidth = (null === (e = this.labelElement) || void 0 === e ? void 0 : e.floatingLabelFoundation.getWidth()) || 0;
          });
    }
    getOutlineAdapterMethods() {
      return {
        closeOutline: () => this.outlineElement && (this.outlineOpen = !1),
        hasOutline: () => Boolean(this.outlineElement),
        notchOutline: (e) => {
          this.outlineElement && !this.outlineOpen && ((this.outlineWidth = e), (this.outlineOpen = !0));
        },
      };
    }
    async layout() {
      await this.updateComplete;
      const e = this.labelElement;
      if (!e) return void (this.outlineOpen = !1);
      const t = !!this.label && !!this.value;
      if ((e.floatingLabelFoundation.float(t), !this.outlined)) return;
      (this.outlineOpen = t), await this.updateComplete;
      const i = e.floatingLabelFoundation.getWidth();
      this.outlineOpen && ((this.outlineWidth = i), await this.updateComplete);
    }
  }
  r([T(".mdc-text-field")], Ho.prototype, "mdcRoot", void 0),
    r([T("input")], Ho.prototype, "formElement", void 0),
    r([T(".mdc-floating-label")], Ho.prototype, "labelElement", void 0),
    r([T(".mdc-line-ripple")], Ho.prototype, "lineRippleElement", void 0),
    r([T("mwc-notched-outline")], Ho.prototype, "outlineElement", void 0),
    r([T(".mdc-notched-outline__notch")], Ho.prototype, "notchElement", void 0),
    r([y({ type: String })], Ho.prototype, "value", void 0),
    r([y({ type: String })], Ho.prototype, "type", void 0),
    r([y({ type: String })], Ho.prototype, "placeholder", void 0),
    r(
      [
        y({ type: String }),
        Ot(function (e, t) {
          void 0 !== t && this.label !== t && this.layout();
        }),
      ],
      Ho.prototype,
      "label",
      void 0
    ),
    r([y({ type: String })], Ho.prototype, "icon", void 0),
    r([y({ type: String })], Ho.prototype, "iconTrailing", void 0),
    r([y({ type: Boolean, reflect: !0 })], Ho.prototype, "disabled", void 0),
    r([y({ type: Boolean })], Ho.prototype, "required", void 0),
    r([y({ type: Number })], Ho.prototype, "minLength", void 0),
    r([y({ type: Number })], Ho.prototype, "maxLength", void 0),
    r(
      [
        y({ type: Boolean, reflect: !0 }),
        Ot(function (e, t) {
          void 0 !== t && this.outlined !== t && this.layout();
        }),
      ],
      Ho.prototype,
      "outlined",
      void 0
    ),
    r([y({ type: String })], Ho.prototype, "helper", void 0),
    r([y({ type: Boolean })], Ho.prototype, "validateOnInitialRender", void 0),
    r([y({ type: String })], Ho.prototype, "validationMessage", void 0),
    r([y({ type: Boolean })], Ho.prototype, "autoValidate", void 0),
    r([y({ type: String })], Ho.prototype, "pattern", void 0),
    r([y({ type: String })], Ho.prototype, "min", void 0),
    r([y({ type: String })], Ho.prototype, "max", void 0),
    r([y({ type: String })], Ho.prototype, "step", void 0),
    r([y({ type: Number })], Ho.prototype, "size", void 0),
    r([y({ type: Boolean })], Ho.prototype, "helperPersistent", void 0),
    r([y({ type: Boolean })], Ho.prototype, "charCounter", void 0),
    r([y({ type: Boolean })], Ho.prototype, "endAligned", void 0),
    r([y({ type: String })], Ho.prototype, "prefix", void 0),
    r([y({ type: String })], Ho.prototype, "suffix", void 0),
    r([y({ type: String })], Ho.prototype, "name", void 0),
    r([y({ type: String })], Ho.prototype, "inputMode", void 0),
    r([y({ type: Boolean })], Ho.prototype, "readOnly", void 0),
    r([y({ type: String })], Ho.prototype, "autocapitalize", void 0),
    r([w()], Ho.prototype, "outlineOpen", void 0),
    r([w()], Ho.prototype, "outlineWidth", void 0),
    r([w()], Ho.prototype, "isUiValid", void 0),
    r([w()], Ho.prototype, "focused", void 0),
    r([k({ passive: !0 })], Ho.prototype, "handleInputChange", null);
  class Bo extends Ho {
    constructor() {
      super(...arguments), (this.rows = 2), (this.cols = 20), (this.charCounter = !1);
    }
    render() {
      const e = this.charCounter && -1 !== this.maxLength,
        t = e && "internal" === this.charCounter,
        i = e && !t,
        r = !!this.helper || !!this.validationMessage || i,
        n = {
          "mdc-text-field--disabled": this.disabled,
          "mdc-text-field--no-label": !this.label,
          "mdc-text-field--filled": !this.outlined,
          "mdc-text-field--outlined": this.outlined,
          "mdc-text-field--end-aligned": this.endAligned,
          "mdc-text-field--with-internal-counter": t,
        };
      return me`
      <label class="mdc-text-field mdc-text-field--textarea ${rt(n)}">
        ${this.renderRipple()}
        ${this.outlined ? this.renderOutline() : this.renderLabel()}
        ${this.renderInput()}
        ${this.renderCharCounter(t)}
        ${this.renderLineRipple()}
      </label>
      ${this.renderHelperText(r, i)}
    `;
    }
    renderInput() {
      const e = this.label ? "label" : void 0,
        t = -1 === this.minLength ? void 0 : this.minLength,
        i = -1 === this.maxLength ? void 0 : this.maxLength,
        r = this.autocapitalize ? this.autocapitalize : void 0;
      return me`
      <textarea
          aria-labelledby=${lt(e)}
          class="mdc-text-field__input"
          .value="${$o(this.value)}"
          rows="${this.rows}"
          cols="${this.cols}"
          ?disabled="${this.disabled}"
          placeholder="${this.placeholder}"
          ?required="${this.required}"
          ?readonly="${this.readOnly}"
          minlength="${lt(t)}"
          maxlength="${lt(i)}"
          name="${lt("" === this.name ? void 0 : this.name)}"
          inputmode="${lt(this.inputMode)}"
          autocapitalize="${lt(r)}"
          @input="${this.handleInputChange}"
          @blur="${this.onInputBlur}">
      </textarea>`;
    }
  }
  r([T("textarea")], Bo.prototype, "formElement", void 0),
    r([y({ type: Number })], Bo.prototype, "rows", void 0),
    r([y({ type: Number })], Bo.prototype, "cols", void 0),
    r(
      [y({ converter: { fromAttribute: (e) => null !== e && ("" === e || e), toAttribute: (e) => ("boolean" == typeof e ? (e ? "" : null) : e) } })],
      Bo.prototype,
      "charCounter",
      void 0
    );
  const Vo = P`.mdc-text-field{height:100%}.mdc-text-field__input{resize:none}`;
  let Uo = class extends Bo {};
  (Uo.styles = [Ao, Vo]), (Uo = r([_("mwc-textarea")], Uo));
  let jo = class extends Ho {};
  (jo.styles = [Ao]),
    (jo = r([_("mwc-textfield")], jo)),
    document.addEventListener("DOMContentLoaded", (e) => {
      document.querySelectorAll(".btn").forEach((e) => v.attachTo(e)),
        document.querySelectorAll(".card-collapsible .card-header").forEach((e) => v.attachTo(e)),
        document.querySelectorAll(".chip").forEach((e) => v.attachTo(e)),
        document.querySelectorAll(".dropdown-menu .dropdown-item").forEach((e) => v.attachTo(e)),
        document.querySelectorAll(".drawer-menu .nav-link").forEach((e) => v.attachTo(e)),
        document.querySelectorAll(".list-group .list-group-item-action").forEach((e) => v.attachTo(e)),
        document.querySelectorAll(".nav .nav-link").forEach((e) => v.attachTo(e)),
        document.querySelectorAll("[class*='ripple-']").forEach((e) => v.attachTo(e));
    });
})();
