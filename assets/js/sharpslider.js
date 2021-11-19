(function (t) {
    var i = t;
    i._N2 = i._N2 || {
        _r: [],
        _d: [],
        r: function () {
            this._r.push(arguments)
        },
        d: function () {
            this._d.push(arguments)
        }
    };
    var s = t.document,
        n = s.documentElement,
        h, o, r = t.setTimeout,
        a = t.clearTimeout,
        u = i._N2,
        c = t.requestAnimationFrame,
        f = s.createElement.bind(s),
        l = function () {
            return f("div")
        },
        d = Object.assign,
        v = function (t, i) {
            for (var s = Object(t), n = 1; n < arguments.length; n++) {
                var h = arguments[n];
                if (null !== h && h !== o)
                    for (var r in h) null !== h[r] && Object.prototype.hasOwnProperty.call(h, r) && ("object" == typeof h[r] && (h[r].constructor === Object || Array.isArray(h[r])) ? (Array.isArray(h[r]) ? s[r] = [] : ("object" != typeof s[r] || Array.isArray(s[r])) && (s[r] = {}), s[r] = v(s[r], h[r])) : s[r] = h[r])
            }
            return s
        },
        p = function (t, i) {
            return t.getAttribute(i)
        },
        m = function (t, i, s) {
            t.setAttribute(i, s)
        },
        b = function (t, i) {
            for (var s in i) m(t, s, i[s])
        },
        S = function (t, i) {
            t.removeAttribute(i)
        },
        w = function (t, i, s) {
            t.forEach((function (t) {
                m(t, i, s)
            }))
        },
        y = function (t, i) {
            t.forEach((function (t) {
                b(t, i)
            }))
        },
        g = function (t, i) {
            t.forEach((function (t) {
                T(t, i)
            }))
        },
        k = function (t, i) {
            t.forEach((function (t) {
                _(t, i)
            }))
        },
        C = function (t, i) {
            return t.dataset[i]
        },
        x = function (t, i, s) {
            t.dataset[i] = s
        },
        A = function (t, s) {
            return i.getComputedStyle(t).getPropertyValue(s)
        },
        P = function (t, i, s) {
            t.style.setProperty(i, s)
        },
        I = function (t, i) {
            for (var s in i) P(t, s, i[s])
        },
        M = function (t, i) {
            t.style.removeProperty(i)
        },
        F = function (t, i) {
            i.forEach((function (i) {
                M(t, i)
            }))
        },
        R = function (t, i, s) {
            t.forEach((function (t) {
                P(t, i, s)
            }))
        },
        z = function (t, i) {
            t.forEach((function (t) {
                I(t, i)
            }))
        },
        D = function (t, i) {
            t.forEach((function (t) {
                M(t, i)
            }))
        },
        O = function (t) {
            t && t.parentNode && t.parentNode.removeChild(t)
        },
        L = function (t) {
            t.forEach((function (t) {
                O(t)
            }))
        },
        T = function (t, i) {
            t.classList.add(i)
        },
        _ = function (t, i) {
            t.classList.remove(i)
        },
        V = function (t, i) {
            return t.dispatchEvent(i)
        },
        E = function (t, i, s) {
            return s = d({
                bubbles: !0,
                cancelable: !0
            }, s), V(t, new Event(i, s))
        },
        j = function (t, i) {
            return V(t, new Event(i, {
                bubbles: !1,
                cancelable: !1
            }))
        },
        B = function (t, i, s) {
            return V(t, new CustomEvent(i, {
                bubbles: !1,
                cancelable: !1,
                detail: s
            }))
        },
        W = function (t, i, s, n) {
            t.removeEventListener(i, s, n)
        },
        H = function (t) {
            t.forEach((function (t) {
                t()
            })), t.splice(0, t.length)
        },
        Y = function (t, i, s, n) {
            return n = n || {}, t.addEventListener(i, s, n), t.removeEventListener.bind(t, i, s, n)
        },
        q = function (t, i, s, n) {
            n = n || {}, t.addEventListener(i, s, n)
        },
        N = function (t, i, s) {
            t.addEventListener(i, s, {
                once: !0
            })
        },
        U = function (t, i, s) {
            t.ssEvent && t.ssEvent[i] && t.ssEvent[i].forEach((function (t) {
                t(s)
            }))
        },
        G = function (t, i, s) {
            t.ssEvent || (t.ssEvent = {}), t.ssEvent[i] || (t.ssEvent[i] = []), t.ssEvent[i].push(s)
        },
        K = function (t, i, s) {
            return G(t, i, s), Z.bind(t, i, s)
        },
        Z = function (t, i) {
            if (this.ssEvent && this.ssEvent[t])
                for (var s = this.ssEvent[t], n = s.length - 1; n >= 0; n--) s[n] === i && s.splice(n, 1)
        },
        Q = function () {
            return n.scrollTop
        },
        X = function (t) {
            n.scrollTop = t
        },
        J = function () {
            return n.scrollLeft
        },
        tt = function (t) {
            return t.getBoundingClientRect().width
        },
        it = function (t) {
            return t.getBoundingClientRect().height
        },
        st = function (t) {
            return s.scrollingElement.scrollTop + t.getBoundingClientRect().top
        },
        nt = function (t) {
            "complete" === s.readyState || "interactive" === s.readyState ? t() : Document && Document.prototype && Document.prototype.addEventListener && Document.prototype.addEventListener !== s.addEventListener ? Document.prototype.addEventListener.call(s, "DOMContentLoaded", t) : s.addEventListener("DOMContentLoaded", t)
        },
        ht = function (t, i, s, n) {
            if (Math.abs(t.scrollTop - i) < 1) n && n();
            else {
                s = Math.max(300, s || 300);
                var h = t.scrollTop,
                    o = i - h,
                    r = performance.now(),
                    a = function (i) {
                        var u = Math.min(1, (i - r) / s);
                        u < .5 ? u *= 2 * u : u = (4 - 2 * u) * u - 1, t.scrollTop = h + u * o, u < 1 ? requestAnimationFrame(a) : n && n()
                    };
                a(r)
            }
        },
        et = function (t, i, n) {
            var h = s.createElementNS("http://www.w3.org/2000/svg", t);
            return i && (rt(h, i), n && n.appendChild(h)), h
        },
        ot = function (t, i, s) {
            t.setAttributeNS(null, i, s)
        },
        rt = function (t, i) {
            for (var s in i) ot(t, s, i[s])
        },
        at = function (t) {
            return t.charAt(0).toUpperCase() + t.slice(1)
        };

    function ut(t) {
        var i = s.getElementById(t);
        if (i && i.sheet) {
            var n, h = i.sheet;
            for (n = h.cssRules.length - 1; n >= 0; n--) h.cssRules[n].selectorText && h.cssRules[n].selectorText.includes("div#n2-ss-") && h.deleteRule(n)
        }
    }
    nt((function () {
        h = s.body
    })), u.d("SmartSliderBackgrounds", (function () {
        function t(t) {
            this.device = null, this.slider = t, this.hasFixed = !1, this.lazyLoad = parseInt(t.parameters.lazyLoad), this.lazyLoadNeighbor = parseInt(t.parameters.lazyLoadNeighbor), this.promise = new Promise(function (t) {
                this.resolve = t
            }.bind(this)), this.slider.stages.done("Resized", this.onResized.bind(this)), this.slider.stages.done("StarterSlide", this.onStarterSlide.bind(this))
        }
        return t.prototype.preLoad = function (t) {
            Promise.all(t).then(this.resolve)
        }, t.prototype.getBackgroundImages = function () {
            for (var t = [], i = 0; i < this.slider.realSlides.length; i++) t.push(this.slider.realSlides[i].background);
            return t
        }, t.prototype.onResized = function () {
            this.onSlideDeviceChanged(this.slider.responsive.getDeviceMode()), q(this.slider.sliderElement, "SliderDevice", function (e) {
                this.onSlideDeviceChanged(e.detail.device)
            }.bind(this))
        }, t.prototype.onStarterSlide = function () {
            1 === this.lazyLoad ? (this.preLoadSlides = this.preloadSlidesLazyNeighbor, this.preLoad(this.preLoadSlides(this.slider.getVisibleSlides(this.slider.currentSlide)))) : 2 === this.lazyLoad ? (this.preLoadSlides = this._preLoadSlides, this.slider.stages.done("SlidesReady", function () {
                u.r("windowLoad", this.preLoadAll.bind(this))
            }.bind(this)), this.preLoad(this.preLoadSlides(this.slider.getVisibleSlides(this.slider.currentSlide)))) : (this.preLoadSlides = this._preLoadSlides, this.preLoad(this.preLoadAll())), q(this.slider.sliderElement, "visibleSlidesChanged", this.onVisibleSlidesChanged.bind(this))
        }, t.prototype.onVisibleSlidesChanged = function () {
            1 !== this.lazyLoad && 2 !== this.lazyLoad || this.preLoadSlides(this.slider.getVisibleSlides())
        }, t.prototype.onSlideDeviceChanged = function (t) {
            this.device = t;
            for (var i = 0; i < this.slider.visibleRealSlides.length; i++) this.slider.visibleRealSlides[i].background && this.slider.visibleRealSlides[i].background.onSlideDeviceChanged(t)
        }, t.prototype.preLoadAll = function () {
            for (var t = [], i = 0; i < this.slider.visibleRealSlides.length; i++) t.push(this.slider.visibleRealSlides[i].preLoad());
            return t
        }, t.prototype._preLoadSlides = function (t) {
            for (var i = [], s = 0; s < t.length; s++) i.push(t[s].preLoad());
            return i
        }, t.prototype.preloadSlidesLazyNeighbor = function (t) {
            var i = this._preLoadSlides(t);
            if (this.lazyLoadNeighbor)
                for (var s = 0, n = t[0].getPrevious(), h = t[t.length - 1].getNext(); s < this.lazyLoadNeighbor;) n && (i.push(n.preLoad()), n = n.getPrevious()), h && (i.push(h.preLoad()), h = h.getNext()), s++;
            if (this.slider.stages.resolved("Visible"))
                for (var o = 0; o < i.length; o++) this.slider.H.addPromise(i[o]);
            return i
        }, t
    })), ut("litespeed-optm-css-rules"), ut("rocket-critical-css"), u.d("SmartSliderLoad", (function () {
        var t = performance.now();

        function s(t) {
            this.slider = t
        }
        return s.prototype.start = function () {
            this.showSlider()
        }, s.prototype.loadLayerImages = function () {
            var t = [];
            return this.slider.sliderElement.querySelectorAll(".n2-ss-layers-container").forEach((function (i) {
                u.ImagesLoaded(i), t.push(u.ImagesLoaded(i))
            })), Promise.all(t)
        }, s.prototype.showSlider = function () {
            this.slider.stages.done("ResizeFirst", this.stage1.bind(this))
        }, s.prototype.stage1 = function () {
            this.slider.responsive.isReadyToResize = !0, this.stage2()
        }, s.prototype.stage2 = function () {
            requestAnimationFrame(function () {
                this.slider.responsive.doResize(), this.slider.finalizeStarterSlide();
                var i = Promise.all([this.slider.backgrounds.promise, this.loadLayerImages(), this.slider.stages.get("Fonts").getPromise()]).finally(this.stage3.bind(this)),
                    s = r(function () {
                        this.slider.H.addPromise(i)
                    }.bind(this), Math.max(1, 2e3 - (performance.now() - t)));
                i.finally(a.bind(null, s))
            }.bind(this))
        }, s.prototype.stage3 = function () {
            this.slider.responsive.doResize(), this.slider.stages.resolve("LayerAnimations"), this.slider.stages.done("LayerAnimations", this.stage4.bind(this))
        }, s.prototype.stage4 = function () {
            this.slider.stages.resolve("BeforeShow"), this.slider.widgets.onReady(), u.MW.F(function () {
                T(this.slider.responsive.alignElement, "n2-ss-align-visible"), T(this.slider.sliderElement, "n2-ss-loaded"), _(this.slider.sliderElement, "n2notransition"), requestAnimationFrame((function () {
                    E(i, "scroll")
                })), requestIdleCallback(this.slider.startVisibilityCheck.bind(this.slider))
            }.bind(this)), this.slider.stages.resolve("Show")
        }, s
    })), u.d("SmartSliderPlugins", (function () {
        function t(t) {
            this.slider = t, this.plugins = {}
        }
        t.prototype.add = function (t, i) {
            this.plugins[t] = new i(this.slider)
        }, t.prototype.get = function (t) {
            return this.plugins[t] || !1
        };
        var i = {},
            s = [];
        return {
            addPlugin: function (t, n) {
                for (var h = 0; h < s.length; h++) s[h].plugins.add(t, n);
                i[t] = n
            },
            addSlider: function (n) {
                if (n.plugins === o)
                    for (var h in n.plugins = new t(n), i) n.plugins.add(h, i[h]);
                s.push(n)
            }
        }
    })), u.d("ScrollTracker", (function () {
        function t() {
            this.started = !1, this.items = [], this.onScrollCallback = this.onScroll.bind(this)
        }
        return t.prototype.add = function (t, s, h, o) {
            var r = {
                el: t,
                mode: s,
                onVisible: h,
                onHide: o,
                state: "unknown"
            };
            this.items.push(r), this._onScroll(r, Math.max(n.clientHeight, i.innerHeight)), this.started || this.start()
        }, t.prototype.start = function () {
            this.started || (i.addEventListener("scroll", this.onScrollCallback, {
                capture: !0,
                passive: !0
            }), this.started = !0)
        }, t.prototype.onScroll = function (e) {
            for (var t = Math.max(n.clientHeight, i.innerHeight), s = 0; s < this.items.length; s++) this._onScroll(this.items[s], t)
        }, t.prototype._onScroll = function (t, i) {
            var s = t.el.getBoundingClientRect(),
                n = s.height > .7 * i,
                h = !0;
            "partly-visible" === t.mode ? (n && (s.bottom < 0 || s.top >= s.height) || !n && (s.bottom - s.height < 0 || s.top - i + s.height >= 0)) && (h = !1) : "not-visible" === t.mode && (h = s.top - i < 0 && s.top + s.height > 0), !1 === h ? "hidden" !== t.state && ("function" == typeof t.onHide && t.onHide(), t.state = "hidden") : "visible" !== t.state && ("function" == typeof t.onVisible && t.onVisible(), t.state = "visible")
        }, new t
    })), u.d("SmartSliderApi", (function () {
        function t() {
            this.sliders = {}, this.readys = {}, this.eventListeners = {}
        }
        t.prototype.makeReady = function (t, i) {
            if (this.sliders[t] = i, this.readys[t] !== o)
                for (var s = 0; s < this.readys[t].length; s++) this.readys[t][s].call(i, i, i.sliderElement)
        }, t.prototype.ready = function (t, i) {
            this.sliders[t] !== o ? i.call(this.sliders[t], this.sliders[t], this.sliders[t].sliderElement) : (this.readys[t] === o && (this.readys[t] = []), this.readys[t].push(i))
        }, t.prototype.on = function (t, i) {
            this.eventListeners[t] === o && (this.eventListeners[t] = []), this.eventListeners[t].push(i)
        }, t.prototype.off = function (t, i) {
            if (this.eventListeners[t] !== o)
                for (var s = this.eventListeners[t].length - 1; s >= 0; s--) this.eventListeners[t][s] === i && this.eventListeners[t].splice(s, 1)
        }, t.prototype.dispatch = function (t, i) {
            if (this.eventListeners[t] !== o && this.eventListeners[t].length)
                for (var s = this.eventListeners[t].length - 1; s >= 0; s--) this.eventListeners[t][s] && this.eventListeners[t][s].call(i, i)
        }, t.prototype.trigger = function (t, i, e) {
            e && e.preventDefault();
            var s = i.split(","),
                n = t.closest(".n2-ss-slide,.n2-ss-static-slide"),
                h = n.ssLastEvent;
            t.ssResetEvents || (t.ssResetEvents = 1, q(n, "layerAnimationPlayIn", function (t) {
                t.ssLastEvent = ""
            }.bind(this, n)));
            for (var o = s.length - 1, r = 0; r < s.length; r++) s[r] === h && (o = r);
            i = o === s.length - 1 ? s[0] : s[o + 1], n.ssLastEvent = i, j(n, "ss" + i)
        }, t.prototype.applyAction = function (e, t) {
            if (this.isClickAllowed(e)) {
                var i = e.currentTarget,
                    s = this.findSliderByElement(i);
                s[t].apply(s, Array.prototype.slice.call(arguments, 2))
            }
        }, t.prototype.applyActionWithClick = function (e) {
            this.isClickAllowed(e) && (u._shouldPreventClick || (e.preventDefault(), this.applyAction.apply(this, arguments)))
        }, t.prototype.isClickAllowed = function (e) {
            var t = e.target.closest('a:not([href="#"]), *[onclick]:not([onclick=""]), *[data-n2click]:not([data-n2click=""]), *[data-n2-lightbox]');
            return !t || e.currentTarget === t || !e.currentTarget.contains(t)
        }, t.prototype.openUrl = function (e, t) {
            if (this.isClickAllowed(e)) {
                var s = C(e.currentTarget, "href");
                if (t === o && (t = C(e.currentTarget, "target")), "_blank" === t) {
                    var n = i.open();
                    n.opener = null, n.location = s
                } else n2const.setLocation(s)
            }
        }, t.prototype.openUrlKeyDown = function (e, t) {
            13 !== e.keyCode && 32 !== e.keyCode || !e.target.matches(":not(input,select,textarea)") || this.openUrl(e, t)
        };
        var r = {
            focusOffsetTop: 0,
            to: function (t) {
                var h = s.querySelector("html, body, .n2_iframe_application__content");
                "smooth" === A(n, "scroll-behavior") ? h.scrollTop = t : ht(h, t, i.n2ScrollSpeed || 400)
            },
            top: function () {
                r.to(0)
            },
            bottom: function () {
                r.to(h.scrollHeight - i.innerHeight)
            },
            before: function (t) {
                r.to(st(t) - i.innerHeight)
            },
            after: function (t) {
                r.to(st(t) + it(t) - r.focusOffsetTop)
            },
            next: function (t, i) {
                var n = s.querySelectorAll(i),
                    h = -1;
                n.forEach((function (i, s) {
                    if (t === i || i.contains(t)) return h = s + 1, !1
                })), -1 !== h && h <= n.length && r.element(n[h])
            },
            previous: function (t, i) {
                var n = s.querySelectorAll(i),
                    h = -1;
                n.forEach((function (i, s) {
                    if (t === i || i.contains(t)) return h = s - 1, !1
                })), h >= 0 && r.element(n[h])
            },
            element: function (t) {
                "string" == typeof t && (t = s.querySelector(t)), r.to(st(t) - r.focusOffsetTop)
            }
        };
        return t.prototype.scroll = function (e, t) {
            if (this.isClickAllowed(e)) {
                e.preventDefault();
                var s = this.findSliderByElement(e.target);
                s && (r.focusOffsetTop = s.responsive.focusOffsetTop), r[t].apply(i, Array.prototype.slice.call(arguments, 2))
            }
        }, t.prototype.findSliderByElement = function (t) {
            return (t = t.closest(".n2-ss-slider")) ? t.ss : null
        }, i.n2ss = new t, i.n2ss
    })), u.d("SmartSliderAbstract", (function () {
        function t(s, n) {
            if (this.editor = null, this.elementID = s, i[s] && i[s] instanceof t)
                if (i[s].__sliderElement && !h.contains(i[s].__sliderElement));
                else {
                    if (i[s].sliderElement === o) return void console.error("Slider [#" + s + "] inited multiple times");
                    if (h.contains(i[s].sliderElement)) return void console.error("Slider [#" + s + "] embedded multiple times")
                } this.stages = new u.Stages, u.d("#" + s, function () {
                return this
            }.bind(this)), this.isAdmin = !!n.admin, u.SmartSliderPlugins.addSlider(this), this.id = parseInt(s.replace("n2-ss-", "")), i[s] = this, n.isDelayed !== o && n.isDelayed ? nt(function () {
                this.waitForExists(s, n)
            }.bind(this)) : this.waitForExists(s, n)
        }
        t.prototype.kill = function () {
            this.killed = !0;
            var t = this.sliderElement.closest(".n2-ss-margin");
            t ? O(t) : u.r("documentReady", function () {
                O(this.sliderElement.closest(".n2-ss-margin"))
            }.bind(this));
            var i = this.sliderElement.closest(".n2-ss-align");
            i ? O(i) : u.r("documentReady", function () {
                O(this.sliderElement.closest(".n2-ss-align"))
            }.bind(this)), n2ss.makeReady(this.id, this)
        }, t.prototype.waitForExists = function (t, i) {
            new Promise((function (i) {
                var n = function () {
                    var h = s.getElementById(t) || s.getElementById(t + "_t");
                    h ? i(h) : r(n, 500)
                };
                n()
            })).then(this.onSliderExists.bind(this, t, i))
        };
        var n = [];

        function c(t, s) {
            if (i.IntersectionObserver) new IntersectionObserver(function (t, i) {
                for (var n = 0; n < t.length; n++) {
                    t[n].isIntersecting && (s(), i.disconnect())
                }
            }.bind(this), {
                rootMargin: "200px 0px 200px 0px"
            }).observe(t);
            else if (n.push({
                    element: t,
                    callback: s
                }), 1 === n.length) {
                var h = [],
                    o = function () {
                        for (var t = 1.4 * i.innerHeight, s = 0; s < n.length; s++)
                            if (n[s].element.getBoundingClientRect().y < t) {
                                var r = n[s].callback;
                                n.splice(s, 1), s--, r()
                            } 0 === n.length && (H(h), u.SmartSliderApi.off("SliderResize", o))
                    };
                h.push(Y(i, "resize", o, {
                    capture: !0
                })), h.push(Y(i, "scroll", o, {
                    capture: !0,
                    passive: !0
                })), u.SmartSliderApi.on("SliderResize", o), o()
            }
        }
        return t.prototype.onSliderExists = function (t, s, n) {
            if (this.__sliderElement = n, this.U = n.closest(".n2-section-smartslider"), this.H = this.U.querySelector("ss3-loader"), this.stages.resolve("Exists"), "TEMPLATE" === n.tagName) {
                var h = n.parentNode;
                h.removeChild(n);
                var o = C(n, "loadingType"),
                    a = n.content.children[0],
                    f = function () {
                        h.appendChild(a), M(this.U, "height"), this.waitForDimension(a, s), B(i, "n2Rocket", {
                            sliderElement: a
                        })
                    }.bind(this);
                "afterOnLoad" === o ? u.r("windowLoad", c.bind(this, this.U, f)) : "afterDelay" === o ? r(f, C(n, "loadingDelay")) : f()
            } else this.waitForDimension(n, s)
        }, t.prototype.waitForDimension = function (t, i) {
            n2const.isRTL() && I(t, {
                "--ss-fs": "flex-end",
                "--ss-fe": "flex-start",
                "--ss-r": "row-reverse",
                "--ss-rr": "row"
            });
            var s = new ResizeObserver(function () {
                s.disconnect(), this.onSliderHasDimension(t, i)
            }.bind(this));
            s.observe(t)
        }, t.prototype.onSliderHasDimension = function (t, i) {
            this.stages.resolve("HasDimension"), this.killed = !1, this.isVisible = !0, this.responsive = !1, this.mainAnimationLastChangeTime = 0, this.currentSlide = null, this.currentRealSlide = null, this.staticSlides = [], this.slides = [], this.visibleRealSlides = [], this.visibleSlides = [], t.ss = this, this.sliderElement = t, this.needBackgroundWrap = !1, this.blockCarousel = !1, this.parameters = d({
                plugins: [],
                admin: !1,
                playWhenVisible: 1,
                playWhenVisibleAt: .5,
                perspective: 1e3,
                callbacks: "",
                autoplay: {},
                blockrightclick: !1,
                maintainSession: 0,
                align: "normal",
                controls: {
                    touch: "horizontal",
                    keyboard: !1,
                    mousewheel: !1,
                    blockCarouselInteraction: 1
                },
                hardwareAcceleration: !0,
                layerMode: {
                    playOnce: 0,
                    playFirstLayer: 1,
                    mode: "skippable",
                    inAnimation: "mainInEnd"
                },
                parallax: {
                    enabled: 0,
                    mobile: 0,
                    horizontal: "mouse",
                    vertical: "mouse",
                    origin: "enter"
                },
                mainanimation: {},
                randomize: {
                    randomize: 0,
                    randomizeFirst: 0
                },
                responsive: {},
                lazyload: {
                    enabled: 0
                },
                postBackgroundAnimations: !1,
                initCallbacks: !1,
                titles: [],
                descriptions: [],
                backgroundParallax: {
                    strength: 0,
                    tablet: 0,
                    mobile: 0
                },
                alias: {
                    id: 0,
                    smoothScroll: 0,
                    slideSwitch: 0
                }
            }, i), this.stages.resolve("Parameters"), this.disabled = {
                layerAnimations: !1,
                layerSplitTextAnimations: !1,
                backgroundAnimations: !1,
                postBackgroundAnimations: !1
            }, n2const.isSamsungBrowser && (this.disabled.layerSplitTextAnimations = !0, this.disabled.postBackgroundAnimations = !0, this.parameters.postBackgroundAnimations && _(this.sliderElement, "n2-ss-feature-post-bg-loader"));
            try {
                eval(this.parameters.callbacks)
            } catch (t) {
                console.error(t)
            }
            n2ss.makeReady(this.id, this), this.isAdmin && (this.changeTo = function () {}), this.load = new u.SmartSliderLoad(this), this.backgrounds = new u.SmartSliderBackgrounds(this), this.initSlides(), "function" == typeof this.parameters.initCallbacks && this.parameters.initCallbacks.call(this), this.stages.done("VisibleSlides", this.onSlidesReady.bind(this)), requestAnimationFrame(this.initUI.bind(this))
        }, t.prototype.onSlidesReady = function () {
            this.stages.resolve("SlidesReady")
        }, t.prototype.initUI = function () {
            for (var t = 0; t < this.realSlides.length; t++) this.realSlides[t].setNext(this.realSlides[t + 1 > this.realSlides.length - 1 ? 0 : t + 1]);
            this.widgets = new u.SmartSliderWidgets(this);
            var s;
            if (new u.UniversalEnter(this.sliderElement, function (e) {
                    e.target.closest(".n2-full-screen-widget") || (a(s), !0, T(this.sliderElement, "n2-hover"), this.widgets.setState("hover", !0), N(this.sliderElement, "universalleave", function (e) {
                        e.stopPropagation(), s = r(function () {
                            !1, _(this.sliderElement, "n2-hover"), this.widgets.setState("hover", !1)
                        }.bind(this), 1e3)
                    }.bind(this)))
                }.bind(this)), this.parameters.carousel || this.initNotCarousel(), this.initHideArrow(), this.controls = {}, this.parameters.blockrightclick && q(this.sliderElement, "contextmenu", (function (e) {
                    e.preventDefault()
                })), this.initMainAnimation(), this.initResponsiveMode(), !this.killed) {
                if (q(this.sliderElement, "touchstart", function () {
                        _(this.sliderElement, "n2-has-hover")
                    }.bind(this), {
                        passive: !0,
                        once: !0
                    }), this.initControls(), this.stages.resolve("UIReady"), !this.isAdmin) {
                    var n = "click";
                    this.hasTouch() && (n = "n2click"), this.sliderElement.querySelectorAll('[data-n2click="url"]').forEach((function (t) {
                        q(t, n, (function (e) {
                            n2ss.openUrl(e)
                        })), q(t, "mousedown", (function (e) {
                            2 !== e.which && 4 !== e.which || (e.preventDefault(), n2ss.openUrl(e, "_blank"))
                        })), q(t, "keydown", (function (e) {
                            n2ss.openUrlKeyDown(e)
                        }))
                    }))
                }
                this.load.start(), q(this.sliderElement, "keydown", (function (t) {
                    32 !== t.charCode && 13 !== t.charCode || t.target.matches('[role="button"],[tabindex]') && t.target.matches(":not(a,input,select,textarea)") && (t.preventDefault(), t.target.click(), j(t.target, "n2Activate"))
                })), q(this.sliderElement, "mouseleave", (function (e) {
                    e.currentTarget.blur()
                })), i.jQuery && i.jQuery(this.sliderElement).find("[tabindex]").off("focus")
            }
        }, t.prototype.initSlides = function () {
            var t, i = this.sliderElement.querySelectorAll(".n2-ss-slide");
            for (t = 0; t < i.length; t++) this.slides.push(this.createSlide(i[t], t));
            for (t = 0; t < this.slides.length; t++) this.slides[t].init(), 1 == +C(this.slides[t].element, "first") && (this.originalRealStarterSlide = this.slides[t]);
            this.realSlides = this.slides, this.visibleSlides = this.slides, this.initSlidesEnd()
        }, t.prototype.initSlidesEnd = function () {
            this.afterRawSlidesReady(), this.stages.resolve("RawSlides"), this.randomize(this.realSlides), this.stages.resolve("RawSlidesOrdered"), this.G()
        }, t.prototype.G = function () {
            for (var t = this.sliderElement.querySelectorAll(".n2-ss-static-slide"), i = 0; i < t.length; i++) this.staticSlides.push(new u.FrontendSliderStaticSlide(this, t[i]))
        }, t.prototype.createSlide = function (t, i) {
            return new u.FrontendSliderSlide(this, t, i)
        }, t.prototype.afterRawSlidesReady = function () {}, t.prototype.K = function (t, i) {
            B(this.sliderElement, t, i)
        }, t.prototype.publicDispatchEvent = function (t, i) {
            this.K(t, i), u.SmartSliderApi.dispatch(t, this)
        }, t.prototype.getVisibleSlides = function (t) {
            return t === o && (t = this.currentSlide), [t]
        }, t.prototype.getActiveSlides = function (t) {
            return this.getVisibleSlides(t)
        }, t.prototype.findSlideBackground = function (t) {
            return this.sliderElement.querySelector('.n2-ss-slide-background[data-public-id="' + C(t.element, "slidePublicId") + '"]')
        }, t.prototype.getRealIndex = function (t) {
            return t
        }, t.prototype.finalizeStarterSlide = function () {
            var t = this.originalRealStarterSlide;
            if (this.isAdmin) this.finalizeStarterSlideComplete(t);
            else if (this.parameters.randomize.randomizeFirst) t = this.visibleRealSlides[Math.floor(Math.random() * this.visibleRealSlides.length)], this.finalizeStarterSlideComplete(t);
            else if (i["ss" + this.id] !== o) "object" == typeof i["ss" + this.id] ? i["ss" + this.id].done(this.overrideStarterSlideIndex.bind(this)) : this.overrideStarterSlideIndex(i["ss" + this.id]);
            else if (!this.isAdmin && this.parameters.maintainSession && i.localStorage !== o) {
                var s = i.localStorage.getItem("ss-" + this.id);
                this.overrideStarterSlideIndex(s), q(this.sliderElement, "mainAnimationComplete", function (e) {
                    i.localStorage.setItem("ss-" + this.id, e.detail.currentSlideIndex)
                }.bind(this))
            } else this.finalizeStarterSlideComplete(t)
        }, t.prototype.overrideStarterSlideIndex = function (t) {
            var i;
            null !== t && this.realSlides[t] && (i = this.realSlides[t]), this.finalizeStarterSlideComplete(i)
        }, t.prototype.finalizeStarterSlideComplete = function (t) {
            t !== o && t.isVisible || (t = this.visibleRealSlides[0]), t !== o ? this.finalizeStarterSlideComplete2(t) : (this.hide(), N(this.sliderElement, "SliderResize", function () {
                this.finalizeStarterSlideComplete(t)
            }.bind(this)))
        }, t.prototype.finalizeStarterSlideComplete2 = function (t) {
            t !== this.originalRealStarterSlide && this.originalRealStarterSlide !== o && this.originalRealStarterSlide.unsetActive(), this.responsive.onStarterSlide(t), this.stages.resolve("StarterSlide")
        }, t.prototype.randomize = function (t) {
            this.parameters.randomize.randomize && this.shuffleSlides(t)
        }, t.prototype.shuffleSlides = function (t) {
            t.sort((function () {
                return .5 - Math.random()
            }));
            for (var i = t[0].element.parentNode, s = 0; s < t.length; s++) i.appendChild(t[s].element), t[s].setIndex(s)
        }, t.prototype.started = function (t) {
            this.stages.done("UIReady", t.bind(this))
        }, t.prototype.ready = function (t) {
            this.stages.done("Show", t.bind(this))
        }, t.prototype.startVisibilityCheck = function () {
            if (!this.isAdmin && this.parameters.playWhenVisible && i.IntersectionObserver) {
                var t = this.parameters.playWhenVisibleAt,
                    s = t / 2,
                    n = 1 - t / 2,
                    h = new IntersectionObserver(function (t) {
                        t[0].isIntersecting && this._markVisible()
                    }.bind(this), {
                        rootMargin: -50 * t + "% 0px"
                    });
                h.observe(this.sliderElement);
                var o = new IntersectionObserver(function (t) {
                    t[0].isIntersecting && this._markVisible()
                }.bind(this), {
                    threshold: [s, n]
                });
                o.observe(this.sliderElement), this.Z = [h.disconnect.bind(h), o.disconnect.bind(o), Y(this.sliderElement, "pointerover", this._markVisible.bind(this))]
            } else this.stages.resolve("Visible")
        }, t.prototype._markVisible = function () {
            this.Z && H(this.Z), this.stages.resolve("Visible")
        }, t.prototype.visible = function (t) {
            this.stages.done("Visible", t.bind(this))
        }, t.prototype.isPlaying = function () {
            return "ended" !== this.mainAnimation.getState()
        }, t.prototype.focus = function (t) {
            var s = !1;
            if (this.responsive.parameters.focusUser && !t && (s = !0), s) {
                var n = Q(),
                    h = this.responsive.focusOffsetTop,
                    o = this.responsive.focusOffsetBottom,
                    r = i.innerHeight,
                    a = this.sliderElement.getBoundingClientRect(),
                    u = a.top - h,
                    c = r - a.bottom - o,
                    f = this.responsive.parameters.focusEdge,
                    l = "";
                "top-force" === f ? l = "top" : "bottom-force" === f ? l = "bottom" : u <= 0 && c <= 0 || u > 0 && c > 0 || (u < 0 ? l = "top" === f ? "top" : "bottom" === f ? "bottom" : -u <= c ? "top" : "bottom" : c < 0 && (l = "top" === f ? "top" : "bottom" === f || -c <= u ? "bottom" : "top"));
                var d = n;
                if ("top" === l ? d = n - h + a.top : "bottom" === l && (d = n + o + a.bottom - r), (d = Math.round(d)) !== n) return this._scrollTo(d, Math.abs(n - d))
            }
            return !0
        }, t.prototype._scrollTo = function (t, n) {
            return i.nextendScrollFocus = !0, new Promise((function (i) {
                ht(s.scrollingElement, t, n, i)
            })).then((function () {
                i.nextendScrollFocus = !1
            }))
        }, t.prototype.isChangeCarousel = function (t) {
            return "next" === t ? this.currentSlide.index + 1 >= this.slides.length : "previous" === t && this.currentSlide.index - 1 < 0
        }, t.prototype.initNotCarousel = function () {
            this.realSlides[0].setPrevious(!1), this.realSlides[this.realSlides.length - 1].setNext(!1)
        }, t.prototype.initHideArrow = function () {
            var t = function (t) {
                this.widgets.setState("nonCarouselFirst", !this.getUIPreviousSlide(t)), this.widgets.setState("nonCarouselLast", !this.getUINextSlide(t))
            }.bind(this);
            this.stages.done("StarterSlide", function () {
                t(this.currentSlide), q(this.sliderElement, "SliderResize", function () {
                    t(this.currentSlide)
                }.bind(this))
            }.bind(this)), q(this.sliderElement, "SlideWillChange", (function (e) {
                t(e.detail.targetSlide)
            }))
        }, t.prototype.next = function (t, i) {
            var s = this.currentSlide.getNext();
            return !(!s || !this.getUINextSlide(this.currentSlide)) && this.changeTo(s.index, !1, t, i)
        }, t.prototype.previous = function (t, i) {
            var s = this.getUIPreviousSlide(this.currentSlide);
            return !!s && this.changeTo(s.index, !0, t, i)
        }, t.prototype.isChangePossible = function (t) {
            var i = !1;
            if ("next" === t) {
                var s = this.currentSlide.getNext();
                s && (i = s.index)
            } else if ("previous" === t) {
                var n = this.currentSlide.getPrevious();
                n && (i = n.index)
            }
            return !1 !== i && i !== this.currentSlide.index
        }, t.prototype.nextCarousel = function (t, i) {
            return !!this.next(t, i) || this.changeTo(this.getFirstSlide().index, !1, t, i)
        }, t.prototype.getFirstSlide = function () {
            return this.slides[0].isVisible ? this.slides[0] : this.slides[0].getNext()
        }, t.prototype.getSlideCount = function () {
            for (var t = 0, i = 0; i < this.slides.length; i++) this.slides[i].isVisible && t++;
            return t
        }, t.prototype.directionalChangeToReal = function (t) {
            this.directionalChangeTo(t)
        }, t.prototype.directionalChangeTo = function (t) {
            t > this.currentSlide.index ? this.changeTo(t, !1) : this.changeTo(t, !0)
        }, t.prototype.changeTo = function (t, i, s, n) {
            if ((t = parseInt(t)) !== this.currentSlide.index) {
                if (!this.slides[t].isVisible) return console.error("this slide is not visible on this device"), !1;
                this.K("SlideWillChange", {
                    targetSlide: this.slides[t]
                }), this.K("SlideLoading");
                var h = performance.now();
                return Promise.all([Promise.all(this.backgrounds.preLoadSlides(this.getVisibleSlides(this.slides[t]))), this.focus(s)]).then(function () {
                    if (t !== this.currentSlide.index) {
                        if (this.mainAnimationLastChangeTime < h) {
                            this.mainAnimationLastChangeTime = h;
                            var r = this.mainAnimation.getState();
                            if ("ended" === r) {
                                s === o && (s = !1);
                                var a = this.mainAnimation;
                                n !== o && (a = n), this._changeTo(t, i, s, n), a.changeTo(this.currentSlide, this.slides[t], i, s), this._changeCurrentSlide(t)
                            } else "initAnimation" !== r && "playing" !== r || (this.__fastChangeRemoveCallback && this.__fastChangeRemoveCallback(), this.__fastChangeRemoveCallback = Y(this.sliderElement, "mainAnimationComplete", function () {
                                this.changeTo.call(this, t, i, s, n)
                            }.bind(this), {
                                once: !0
                            }), this.mainAnimation.timeScale(2 * this.mainAnimation.timeScale()))
                        }
                        this.K("SlideLoaded")
                    }
                }.bind(this)), !0
            }
            return !1
        }, t.prototype.setCurrentRealSlide = function (t) {
            this.currentRealSlide = this.currentSlide = t
        }, t.prototype._changeCurrentSlide = function (t) {
            this.setCurrentRealSlide(this.slides[t]), this.K("sliderChangeCurrentSlide")
        }, t.prototype._changeTo = function (t, i, s, n) {}, t.prototype.revertTo = function (t, i) {
            this.slides[i].unsetActive(), this.slides[t].setActive(), this._changeCurrentSlide(t), this.K("SlideWillChange", {
                targetSlide: this.slides[t]
            })
        }, t.prototype.forceSetActiveSlide = function (t) {
            t.setActive()
        }, t.prototype.forceUnsetActiveSlide = function (t) {
            t.unsetActive()
        }, t.prototype.updateInsideSlides = function (t) {
            for (var i = 0; i < this.slides.length; i++) this.slides[i].setInside(t.indexOf(this.slides[i]) >= 0)
        }, t.prototype.findSlideByElement = function (t) {
            var i;
            for (i = 0; i < this.realSlides.length; i++)
                if (this.realSlides[i].element.contains(t)) return this.realSlides[i];
            for (i = 0; i < this.staticSlides.length; i++)
                if (this.staticSlides[i].element.contains(t)) return this.staticSlides[i];
            return null
        }, t.prototype.findSlideIndexByElement = function (t) {
            var i = this.findSlideByElement(t);
            return i || -1
        }, t.prototype.initMainAnimation = function () {
            this.mainAnimation = !1
        }, t.prototype.initResponsiveMode = function () {}, t.prototype.hasTouch = function () {
            return "0" != this.parameters.controls.touch
        }, t.prototype.initControls = function () {
            if (!this.parameters.admin) {
                if (this.hasTouch()) switch (this.parameters.controls.touch) {
                    case "vertical":
                        new u.SmartSliderControlTouchVertical(this);
                        break;
                    case "horizontal":
                        new u.SmartSliderControlTouchHorizontal(this)
                }
                this.parameters.controls.keyboard && (this.controls.touch !== o ? new u.SmartSliderControlKeyboard(this, this.controls.touch.axis) : new u.SmartSliderControlKeyboard(this, "horizontal")), this.parameters.controls.mousewheel && new u.SmartSliderControlMouseWheel(this, this.parameters.controls.mousewheel), this.controlAutoplay = new u.SmartSliderControlAutoplay(this, this.parameters.autoplay), u.SmartSliderControlFullscreen.isSupported && (this.controlFullscreen = new u.SmartSliderControlFullscreen(this)), this.parameters.alias.id && new u.SmartSliderControlAlias(this, this.parameters.alias)
            }
        }, t.prototype.getSlideIndex = function (t) {
            return t
        }, t.prototype.slideToID = function (t, i, n) {
            for (var h = 0; h < this.realSlides.length; h++)
                if (+this.realSlides[h].id === t) return this.slide(this.getSlideIndex(h), i, n);
            var o = s.querySelector('[data-id="' + t + '"]');
            if (o && (o = o.closest(".n2-ss-slider")), o) return this.id === o.ss.id || (ht(s.scrollingElement, st(o), 400), o.ss.slideToID(t, i, !0))
        }, t.prototype.slide = function (t, i, s) {
            return t >= 0 && t < this.slides.length && (i === o ? this.parameters.carousel && this.currentSlide.index === this.slides.length - 1 && 0 === t ? this.next(s) : this.currentSlide.index > t ? this.changeTo(t, !0, s) : this.changeTo(t, !1, s) : this.changeTo(t, !i, s))
        }, t.prototype.hide = function () {
            this.isVisible && (T(this.responsive.alignElement, "n2-ss-slider-has-no-slide"), this.load.placeholder && T(this.load.placeholder, "n2-ss-slider-has-no-slide"), this.isVisible = !1)
        }, t.prototype.show = function () {
            this.isVisible || (T(this.responsive.alignElement, "n2-ss-slider-has-no-slide"), this.load.placeholder && _(this.load.placeholder, "n2-ss-slider-has-no-slide"), E(i, "scroll"), this.isVisible = !0)
        }, t.prototype.startAutoplay = function () {
            return this.controlAutoplay !== o && (this.controlAutoplay.setState("pausedSecondary", 0), !0)
        }, t.prototype.pauseAutoplay = function () {
            return this.controlAutoplay !== o && (this.controlAutoplay.setState("pausedSecondary", 1), !0)
        }, t.prototype.getAnimationAxis = function () {
            return "horizontal"
        }, t.prototype.getDirectionPrevious = function () {
            return n2const.isRTL() && "horizontal" === this.getAnimationAxis() ? "next" : "previous"
        }, t.prototype.getDirectionNext = function () {
            return n2const.isRTL() && "horizontal" === this.getAnimationAxis() ? "previous" : "next"
        }, t.prototype.previousWithDirection = function () {
            return this[this.getDirectionPrevious()]()
        }, t.prototype.nextWithDirection = function () {
            return this[this.getDirectionNext()]()
        }, t.prototype.getUIPreviousSlide = function (t) {
            return t.getPrevious()
        }, t.prototype.getUINextSlide = function (t) {
            return t.getNext()
        }, t.prototype.getHorizontalTouchDimension = function () {
            return this.responsive.resizeContext.sliderWidth
        }, t.prototype.getVerticalTouchDimension = function () {
            return this.responsive.resizeContext.sliderHeight
        }, t
    })), u.d("Stages", (function () {
        function t() {
            this.stages = {}
        }

        function i(t) {
            this.n = t, this._isResolved = !1, this._promise = new Promise(function (t, i) {
                this._resolve = t, this._reject = i
            }.bind(this)), this._promise.then(function () {
                this._isResolved = !0
            }.bind(this))
        }
        return t.prototype.get = function (t) {
            return this.stages[t] === o && (this.stages[t] = new i(t)), this.stages[t]
        }, t.prototype.resolve = function (t) {
            this.get(t).resolve()
        }, t.prototype.done = function (t, i) {
            var s;
            if ("string" == typeof t) s = this.get(t).getPromise();
            else {
                for (var n = [], h = 0; h < t.length; h++) n.push(this.get(t[h]).getPromise());
                s = Promise.all(n)
            }
            s.then(i)
        }, t.prototype.resolved = function (t) {
            return this.get(t).resolved()
        }, i.prototype.getPromise = function () {
            return this._promise
        }, i.prototype.resolve = function () {
            this.resolved() || this._resolve()
        }, i.prototype.done = function (t) {
            this._promise.then(t)
        }, i.prototype.resolved = function () {
            return this._isResolved
        }, t
    })), u.d("SmartSliderWidget", (function () {
        "use strict";

        function t(t, i, s) {
            this.slider = t, this.key = i, this.selector = s, this.slider.started(this.register.bind(this))
        }
        return t.prototype.register = function () {
            this.slider.widgets.has(this.key) || (this.widget = this.slider.sliderElement.querySelector(this.selector), this.widget && (this.slider.widgets.register(this.key, this), this.onStart()))
        }, t.prototype.onStart = function () {}, t.prototype.isVisible = function () {
            var t = this.widget.getBoundingClientRect();
            return !(!t.width || !t.height)
        }, t.prototype.getWidth = function () {
            return this.widget.getBoundingClientRect().width
        }, t.prototype.getHeight = function () {
            return this.widget.getBoundingClientRect().height
        }, t
    })), u.d("SmartSliderWidgets", (function () {
        function t(t) {
            this.slider = t, this.sliderElement = t.sliderElement, this.controls = {
                previous: o,
                next: o,
                bullet: o,
                autoplay: o,
                indicator: o,
                bar: o,
                thumbnail: o,
                shadow: o,
                fullscreen: o,
                html: o
            }, this._controlDimensionRegexp = new RegExp("^(" + Object.keys(this.controls).join("|") + ")(width|height)$", "i"), this.excludedSlides = {}, this.states = {
                hover: !1,
                nonCarouselFirst: !1,
                nonCarouselLast: !1,
                currentSlideIndex: -1,
                singleSlide: !1
            }
        }
        return t.prototype.register = function (t, i) {
            this.controls[t] = i
        }, t.prototype.has = function (t) {
            return this.controls[t] !== o
        }, t.prototype.setState = function (t, i) {
            if (this.states[t] != i) {
                this.states[t] = i;
                var s = t.split(".");
                switch (s[0]) {
                    case "hide":
                        this.onStateChangeSingle(s[1]);
                        break;
                    case "nonCarouselFirst":
                        this.onStateChangeSingle(this.slider.getDirectionPrevious());
                        break;
                    case "nonCarouselLast":
                        this.onStateChangeSingle(this.slider.getDirectionNext());
                        break;
                    default:
                        this.onStateChangeAll()
                }
            }
        }, t.prototype.onStateChangeAll = function () {
            for (var t in this.controls) this.onStateChangeSingle(t)
        }, t.prototype.onStateChangeSingle = function (t) {
            if (this.controls[t]) {
                var i = !0;
                if (this.controls[t].widget.classList.contains("n2-ss-widget-display-hover") && (i = this.states.hover), i && (t === this.slider.getDirectionPrevious() && this.states.nonCarouselFirst || t === this.slider.getDirectionNext() && this.states.nonCarouselLast) && (i = !1), i) {
                    var s = t + "-" + (this.states.currentSlideIndex + 1);
                    this.excludedSlides[s] && (i = !1)
                }
                i && this.states["hide." + t] !== o && this.states["hide." + t] && (i = !1), i && this.states.singleSlide && ("previous" !== t && "next" !== t && "bullet" !== t && "autoplay" !== t && "indicator" !== t || (i = !1)), this.controls[t].widget.classList.toggle("n2-ss-widget-hidden", !i)
            }
        }, t.prototype.getVerticalsHeight = function () {
            var t = 0;
            if (this._verticals)
                for (var i = 0; i < this._verticals.length; i++) t += this._verticals[i].offsetHeight;
            return t
        }, t.prototype.onReady = function () {
            this.advancedElement = this.slider.sliderElement.querySelector(".n2-ss-slider-controls-advanced"), this.requiredVariables = this.advancedElement ? (C(this.advancedElement, "variables") || "").split(",") : [], q(this.slider.sliderElement, "visibleSlidesChanged", function () {
                this.setState("singleSlide", this.slider.visibleSlides.length <= 1)
            }.bind(this)), this.setState("singleSlide", this.slider.visibleSlides.length <= 1), this._verticals = this.sliderElement.querySelectorAll('.n2-ss-widget[data-position="above"]:not(.nextend-shadow),.n2-ss-widget[data-position="below"]:not(.nextend-shadow)');
            var t = !1;
            for (var i in this.controls)
                if (this.controls[i] !== o) {
                    var s = C(this.controls[i].widget, "excludeSlides");
                    if (s !== o) {
                        for (var n = s.split(","), h = n.length - 1; h >= 0; h--) {
                            var r = n[h].split("-");
                            if (2 === r.length) {
                                var a = parseInt(r[0]),
                                    u = parseInt(r[1]);
                                if (a <= u)
                                    for (var c = a; c <= u; c++) n.push(c)
                            } else n[h] = parseInt(n[h])
                        }
                        if (n.length > 0) {
                            for (h = 0; h < n.length; h++) this.excludedSlides[i + "-" + n[h]] = !0;
                            t = !0
                        }
                    }
                } if (t) {
                var f = function (e) {
                    this.setState("currentSlideIndex", e.detail.targetSlide.index)
                }.bind(this);
                f({
                    detail: {
                        targetSlide: this.slider.currentRealSlide
                    }
                }), q(this.slider.sliderElement, "SlideWillChange", f)
            }
            this.requiredVariables.length && this.advancedElement && (this.flushAdvancedVariables(), q(this.slider.sliderElement, "SliderResize", this.flushAdvancedVariables.bind(this))), this.onStateChangeAll(), this.slider.stages.resolve("WidgetsReady"), this.advancedElement && this.slider.stages.done("BeforeShow", function () {
                T(this.advancedElement, "n2-ss-slider-controls-advanced--ready")
            }.bind(this))
        }, t.prototype.flushAdvancedVariables = function () {
            for (var t = {}, i = 0; i < this.requiredVariables.length; i++) t[this.requiredVariables[i]] = this.getAdvancedVariable(this.requiredVariables[i]);
            for (var s in t) P(this.advancedElement, "--" + s, parseInt(t[s]))
        }, t.prototype.getAdvancedVariable = function (t) {
            var i = this.slider.responsive.resizeContext;
            switch (t) {
                case "outerwidth":
                    return tt(this.sliderElement.parentNode);
                case "outerheight":
                    return it(this.sliderElement.parentNode);
                case "width":
                    return i.sliderWidth;
                case "height":
                    return i.sliderHeight;
                case "canvaswidth":
                    return i.slideWidth;
                case "canvasheight":
                    return i.slideHeight;
                case "panewidth":
                case "paneWidth":
                    if (i.paneWidth || i.panewidth) return i.paneWidth || i.panewidth
            }
            var s = t.match(this._controlDimensionRegexp);
            if (s) {
                var n = this.controls[s[1]];
                if (n) switch (s[2]) {
                    case "width":
                        return n.getWidth();
                    case "height":
                        return n.getHeight()
                }
            }
            return 0
        }, t.prototype.onAdvancedVariableWidgetChanged = function (t) {
            this.advancedElement && (C(this.advancedElement, "variables") || "").match(t) && this.flushAdvancedVariables()
        }, t
    })), u.d("SmartSliderMainAnimationAbstract", (function () {
        function t(t, i) {
            this.state = "ended", this.isTouch = !1, this.isReverseAllowed = !0, this.isReverseEnabled = !1, this.reverseSlideIndex = null, this.isNoAnimation = !1, this.slider = t, this.parameters = d({
                duration: 1500,
                ease: "easeInOutQuint"
            }, i), this.parameters.duration = Math.max(.01, this.parameters.duration / 1e3), this.sliderElement = t.sliderElement, this.timeline = new u.W({
                paused: !0
            }), q(this.sliderElement, "mainAnimationStart", function (e) {
                this._revertCurrentSlideIndex = e.detail.previousSlideIndex, this._revertNextSlideIndex = e.detail.currentSlideIndex
            }.bind(this)), this.slider.stages.done("ResponsiveStart", this.init.bind(this))
        }
        return t.prototype.init = function () {
            this.responsive = this.slider.responsive
        }, t.prototype.enableReverseMode = function () {
            this.isReverseEnabled = !0, this.reverseTimeline = new u.W({
                paused: !0
            }), B(this.slider.sliderElement, "reverseModeEnabled", {
                reverseSlideIndex: this.reverseSlideIndex
            })
        }, t.prototype.disableReverseMode = function () {
            this.isReverseEnabled = !1
        }, t.prototype.setTouch = function (t) {
            this.isTouch = t
        }, t.prototype.setTouchProgress = function (t) {
            this.parameters.duration < .3 && (t < 0 ? t = -1 : t > 0 && (t = 1)), "ended" !== this.state && (this.isReverseEnabled ? 0 === t ? (this.reverseTimeline.progress(0), this.timeline.progress(t, !1)) : t >= 0 && t <= 1 ? (this.reverseTimeline.progress(0), this.timeline.progress(t)) : t < 0 && t >= -1 && (this.timeline.progress(0), this.reverseTimeline.progress(Math.abs(t))) : t <= 0 ? this.timeline.progress(Math.max(t, 1e-6), !1) : t >= 0 && t <= 1 && this.timeline.progress(t))
        }, t.prototype.setTouchEnd = function (t, i, s) {
            "ended" != this.state && (this.isReverseEnabled ? this._setTouchEndWithReverse(t, i, s) : this._setTouchEnd(t, i, s))
        }, t.prototype._setTouchEnd = function (t, i, s) {
            t && i > 0 ? (this.fixTouchDuration(this.timeline, i, s), this.timeline.play()) : (this.revertCB(this.timeline), this.fixTouchDuration(this.timeline, 1 - i, s), this.timeline.reverse(), this.willRevertTo(this._revertCurrentSlideIndex, this._revertNextSlideIndex))
        }, t.prototype._setTouchEndWithReverse = function (t, i, s) {
            t ? i < 0 && this.reverseTimeline.totalDuration() > 0 ? (this.fixTouchDuration(this.reverseTimeline, i, s), this.reverseTimeline.play(), this.willRevertTo(this.reverseSlideIndex, this._revertNextSlideIndex)) : (this.willCleanSlideIndex(this.reverseSlideIndex), this.fixTouchDuration(this.timeline, i, s), this.timeline.play()) : (i < 0 ? (this.revertCB(this.reverseTimeline), this.fixTouchDuration(this.reverseTimeline, 1 - i, s), this.reverseTimeline.reverse()) : (this.revertCB(this.timeline), this.fixTouchDuration(this.timeline, 1 - i, s), this.timeline.reverse()), this.willCleanSlideIndex(this.reverseSlideIndex), this.willRevertTo(this._revertCurrentSlideIndex, this._revertNextSlideIndex))
        }, t.prototype.fixTouchDuration = function (t, i, s) {
            var n = t.totalDuration(),
                h = Math.max(n / 3, Math.min(n, s / Math.abs(i) / 1e3));
            h !== n && t.totalDuration(h)
        }, t.prototype.getState = function () {
            return this.state
        }, t.prototype.timeScale = function () {
            return arguments.length > 0 ? (this.timeline.timeScale(arguments[0]), this) : this.timeline.timeScale()
        }, t.prototype.changeTo = function (t, i, s, n) {
            this._initAnimation(t, i, s), this.state = "initAnimation", this.timeline.paused(!0), this.timeline.eventCallback("onStart", this.onChangeToStart.bind(this), [t, i, n]), this.timeline.eventCallback("onComplete", this.onChangeToComplete.bind(this), [t, i, n]), this.timeline.eventCallback("onReverseComplete", null), this.revertCB = function (s) {
                s.eventCallback("onReverseComplete", this.onReverseChangeToComplete.bind(this), [i, t, n])
            }.bind(this), this.isTouch || this.timeline.play()
        }, t.prototype.willRevertTo = function (t, i) {
            B(this.slider.sliderElement, "mainAnimationWillRevertTo", {
                slideIndex: t,
                originalNextSlideIndex: i
            }), N(this.sliderElement, "mainAnimationComplete", this.revertTo.bind(this, t, i))
        }, t.prototype.revertTo = function (t, i) {
            this.slider.revertTo(t, i), j(this.slider.slides[i].element, "mainAnimationStartInCancel")
        }, t.prototype.willCleanSlideIndex = function (t) {
            N(this.sliderElement, "mainAnimationComplete", this.cleanSlideIndex.bind(this, t))
        }, t.prototype.cleanSlideIndex = function () {}, t.prototype._initAnimation = function (t, i, s) {
            this.slider.updateInsideSlides([t, i])
        }, t.prototype.onChangeToStart = function (t, i, s) {
            this.state = "playing";
            var n = {
                mainAnimation: this,
                previousSlideIndex: t.index,
                currentSlideIndex: i.index,
                isSystem: s
            };
            this.slider.K("mainAnimationStart", n), t.K("mainAnimationStartOut", n), i.K("mainAnimationStartIn", n)
        }, t.prototype.onChangeToComplete = function (t, i, s) {
            var n = {
                mainAnimation: this,
                previousSlideIndex: t.index,
                currentSlideIndex: i.index,
                isSystem: s
            };
            this.clearTimelines(), this.disableReverseMode(), t.K("mainAnimationCompleteOut", n), i.K("mainAnimationCompleteIn", n), this.state = "ended", this.slider.updateInsideSlides([i]), s || i.focus(), this.slider.K("mainAnimationComplete", n)
        }, t.prototype.onReverseChangeToComplete = function (i, s, n) {
            t.prototype.onChangeToComplete.apply(this, arguments)
        }, t.prototype.clearTimelines = function () {
            this.revertCB = function () {}, this.timeline.clear(), this.timeline.timeScale(1)
        }, t.prototype.getEase = function () {
            return this.isTouch ? "linear" : this.parameters.ease
        }, t
    })), u.d("SmartSliderControlAlias", (function () {
        "use strict";

        function t(t, s) {
            this.J = t, this.tt = t.sliderElement, this.it = t.U, this.st = C(this.it, "alias"), this.nt = d({
                id: 0,
                smoothScroll: 0,
                slideSwitch: 0,
                scroll: 1
            }, s), this.st && (this.nt.smoothScroll && P(n, "scroll-behavior", "smooth"), this.nt.slideSwitch && (this.switchOnLoad(), q(i, "hashchange", function () {
                var t = this.getAnchor();
                t > 0 && (this.switchToSlide(t - 1), this.replaceHash())
            }.bind(this))))
        }
        return t.prototype.getAnchor = function () {
            var t = i.location.hash.substr(1);
            if (t) {
                if (t === this.st) return !0;
                if (this.nt.slideSwitch && 0 === t.indexOf(this.st)) {
                    var s = +t.substr(this.st.length + 1);
                    if (s > 0) return s
                }
            }
            return !1
        }, t.prototype.switchOnLoad = function () {
            var t = this.getAnchor();
            if (t > 0) {
                var s = t - 1,
                    n = i["n2-ss-" + this.J.id];
                n && n.stages.resolved("StarterSlide") ? n.stages.done("BeforeShow", function () {
                    this.switchToSlide(s)
                }.bind(this)) : i["ss" + this.J.id] = s, this.replaceHash()
            }
        }, t.prototype.replaceHash = function () {
            var t = "#" + this.st;
            history.replaceState ? history.replaceState(null, null, t) : location.hash = t
        }, t.prototype.switchToSlide = function (t) {
            this.J.slide(t)
        }, t
    })), u.d("SmartSliderControlAutoplay", (function () {
        "use strict";

        function t(t, i) {
            this.slider = t, this.state = {
                enabled: 1,
                paused: 1,
                pausedSecondary: 0,
                mainAnimationPlaying: 0,
                wait: 0
            }, this._listeners = [], this.wait = new u.SmartSliderControlAutoplayWait(this), this._currentCount = 1, this.autoplayToSlide = 0, this.autoplayToSlideIndex = -1, this.parameters = d({
                enabled: 0,
                start: 1,
                duration: 8e3,
                autoplayLoop: 0,
                allowReStart: 0,
                pause: {
                    mouse: "enter",
                    click: !0,
                    mediaStarted: !0
                },
                resume: {
                    click: 0,
                    mouse: 0,
                    mediaEnded: !0
                },
                interval: 1,
                intervalModifier: "loop",
                intervalSlide: "current"
            }, i), this.clickHandled = !1, t.controls.autoplay = this, this.parameters.enabled ? (this.parameters.duration /= 1e3, this.slider.visible(this.onReady.bind(this))) : this.disable()
        }
        return t.prototype.preventClickHandle = function () {
            this.clickHandled = !0, r(function () {
                this.clickHandled = !1
            }.bind(this), 300)
        }, t.prototype.onReady = function () {
            this.ht = !0;
            this.timeline = u.q.to({
                _progress: 0
            }, this.getSlideDuration(this.slider.currentSlide.index), {
                _progress: 1,
                paused: !0,
                onComplete: this.next.bind(this)
            });
            var t = this.slider.sliderElement;
            this._listeners.push(Y(t, "SlideLoading", function () {
                this.wait.add("load")
            }.bind(this))), this._listeners.push(Y(t, "SlideLoaded", function (e) {
                this.wait.resolve("load")
            }.bind(this))), this._listeners.push(Y(t, "BeforeCurrentSlideChange", function () {
                this.wait.resolveWeak(), this.setState("mainAnimationPlaying", 1)
            }.bind(this))), this._listeners.push(Y(t, "mainAnimationStart", function () {
                this._currentCount++, this.setState("mainAnimationPlaying", 1), this.wait.resolveWeak()
            }.bind(this))), this._listeners.push(Y(t, "mainAnimationComplete", function (e) {
                this.timeline.duration(this.getSlideDuration(e.detail.currentSlideIndex)), this.ht = !0, this.timeline.pause(0, !1), this.setState("mainAnimationPlaying", 0)
            }.bind(this))), this._listeners.push(Y(t, "autoplayPause", function (e) {
                this.setState("paused", 1)
            }.bind(this))), this._listeners.push(Y(t, "autoplayResume", function (e) {
                (this.state.paused || 0 === parseInt(this.parameters.start) && 0 === parseInt(this.state.paused)) && (this._currentCount = 1), this.setState("pausedSecondary", 0), this.setState("paused", 0);
                var t = e.detail.progress;
                t !== o && this.timeline.progress(t)
            }.bind(this))), this._listeners.push(Y(t, "CurrentSlideChanged", function (e) {
                this.timeline.duration(this.getSlideDuration(e.detail.currentSlide.index)), this.ht = !0, this.timeline.pause(0, !1), this.setState("mainAnimationPlaying", 0)
            }.bind(this))), this.initClick(this.parameters.pause.click, this.parameters.resume.click), this.initHover(this.parameters.pause.mouse, this.parameters.resume.mouse), this.initMedia(this.parameters.pause.mediaStarted, this.parameters.resume.mediaEnded), this.slider.stages.resolve("AutoplayReady"), this.slider.K("autoplay", {
                progress: 0
            }), this.parameters.start || this.setState("pausedSecondary", 1), this.setState("paused", 0)
        }, t.prototype.setState = function (t, i) {
            this.state[t] !== i && (this.state[t] = i, this.timeline !== o && (!this.state.enabled || this.state.paused || this.state.pausedSecondary || this.state.wait || this.state.mainAnimationPlaying ? (this.timeline.paused() || this.timeline.pause(), this.state.mainAnimationPlaying || this.isPaused !== o && this.isPaused || (this.isPaused = !0, this.slider.K("autoplayPaused"))) : (this.timeline.paused() && this.timeline.play(), (this.isPaused === o || this.isPaused) && (this.isPaused = !1, this.slider.K("autoplayStarted")))))
        }, t.prototype.initClick = function (t, i) {
            (t || i) && (this.universalClick = new u.UniversalClick(this.slider.sliderElement, function (e) {
                this.clickHandled || (this.state.pausedSecondary ? i && this.setState("pausedSecondary", 0) : t && this.setState("pausedSecondary", 1))
            }.bind(this)))
        }, t.prototype.initHover = function (t, i) {
            if (t || i) {
                var s = !1;
                this._listeners.push(Y(this.slider.sliderElement, "touchend", (function () {
                    s = !0, r((function () {
                        s = !1
                    }), 300)
                }))), this._listeners.push(Y(this.slider.sliderElement, "mouseenter", function (e) {
                    this.state.pausedSecondary ? "enter" === i && this.setState("pausedSecondary", 0) : s || "enter" !== t || this.setState("pausedSecondary", 1)
                }.bind(this))), this._listeners.push(Y(this.slider.sliderElement, "mouseleave", function (e) {
                    this.state.pausedSecondary ? "leave" === i && this.setState("pausedSecondary", 0) : "leave" === t && this.setState("pausedSecondary", 1)
                }.bind(this)))
            }
        }, t.prototype.initMedia = function (t, i) {
            var s = this.slider.sliderElement;
            t ? (this._listeners.push(Y(s, "mediaStarted", function (e) {
                this.wait.add(e.detail.id)
            }.bind(this))), this._listeners.push(Y(s, "mediaEnded", function (e) {
                this.wait.resolve(e.detail.id)
            }.bind(this)))) : i && this._listeners.push(Y(s, "mediaEnded", function () {
                this.setState("pausedSecondary", 0)
            }.bind(this)))
        }, t.prototype.enableProgress = function () {
            this.timeline && this.timeline.eventCallback("onUpdate", function () {
                this.slider.K("autoplay", {
                    progress: this.timeline.progress()
                })
            }.bind(this))
        }, t.prototype.next = function () {
            if (this.ht) {
                if (this.ht = !1, this.timeline.pause(), !this.parameters.autoplayLoop) {
                    switch (this.parameters.intervalModifier) {
                        case "slide":
                            this.slideSwitchingSlideCount();
                            break;
                        case "slideindex":
                            this.slideSwitchingIndex();
                            break;
                        default:
                            this.slideSwitchingLoop()
                    }
                    this.autoplayToSlide > 0 && this._currentCount >= this.autoplayToSlide && this.limitAutoplay(), this.autoplayToSlideIndex >= 0 && this.slider.slides.length === this.slider.visibleSlides.length && (this.autoplayToSlideIndex === this.slider.currentRealSlide.index + 2 || 1 === this.autoplayToSlideIndex && this.slider.currentRealSlide.index + this.autoplayToSlideIndex === this.slider.slides.length) && this.limitAutoplay()
                }
                this.slider.nextCarousel(!0)
            }
        }, t.prototype.slideSwitchingLoop = function () {
            this.autoplayToSlide = this.parameters.interval * this.slider.visibleSlides.length - 1, "next" === this.parameters.intervalSlide && this.autoplayToSlide++
        }, t.prototype.slideSwitchingSlideCount = function () {
            this.autoplayToSlide = this.parameters.interval
        }, t.prototype.slideSwitchingIndex = function () {
            var t = Math.max(1, this.parameters.interval);
            t > this.slider.slides.length && (t = 1), this.autoplayToSlideIndex = t
        }, t.prototype.limitAutoplay = function () {
            this.parameters.allowReStart ? (this._currentCount = 0, this.setState("paused", 1)) : this.disable()
        }, t.prototype.disable = function () {
            this.setState("enabled", 0), H(this._listeners), this.universalClick && (this.universalClick.remove(), delete this.universalClick), this.slider.stages.resolve("AutoplayDestroyed")
        }, t.prototype.getSlideDuration = function (t) {
            var i = this.slider.realSlides[this.slider.getRealIndex(t)],
                s = i.minimumSlideDuration;
            return 0 === parseFloat(i.minimumSlideDuration) && (s = this.parameters.duration), s
        }, t
    })), u.d("SmartSliderControlFullscreen", (function () {
        "use strict";

        function t(i, n, h) {
            this.slider = i, this.responsive = this.slider.responsive, this._type = this.responsive.parameters.type, this._upscale = this.responsive.parameters.upscale, this.et = !1, this.tt = this.slider.sliderElement, this.ot = this.tt.closest(".n2-section-smartslider"), q(s, t.event, this.fullScreenChange.bind(this))
        }
        return t.isSupported = !(!s.exitFullscreen && !s.webkitExitFullscreen), t.isSupported && (t.requestFullscreen = n.requestFullscreen || n.webkitRequestFullscreen, t.exitFullscreen = s.exitFullscreen || s.webkitExitFullscreen, t.event = n.requestFullscreen ? "fullscreenchange" : n.webkitRequestFullscreen ? "webkitfullscreenchange" : null), t.prototype.switchState = function () {
            this.et = !this.et, this.et ? this._fullScreen() : this._normalScreen()
        }, t.prototype.requestFullscreen = function () {
            return !this.et && (this.et = !0, this._fullScreen(), !0)
        }, t.prototype.exitFullscreen = function () {
            return !!this.et && (this.et = !1, this._normalScreen(), !0)
        }, t.prototype._fullScreen = function () {
            this.responsive.et = !0, this.responsive.parameters.type = "fullpage", this.tt.dataset.responsive = this.responsive.parameters.type, this.responsive.parameters.upscale = !0, this._marginLeft = this.responsive.containerElement.style.marginLeft, this._marginRight = this.responsive.containerElement.style.marginRight, I(this.responsive.containerElement, {
                marginLeft: 0,
                marginRight: 0
            }), I(this.ot, {
                width: "100%",
                height: "100%",
                "background-color": i.getComputedStyle(h).backgroundColor
            }), t.requestFullscreen.call(this.ot)
        }, t.prototype._normalScreen = function () {
            t.exitFullscreen.call(s)
        }, t.prototype.fullScreenChange = function () {
            this.isDocumentInFullScreenMode() ? (this.slider.K("n2FullScreen"), T(n, "n2-in-fullscreen"), T(this.slider.sliderElement, "n2-ss-slider--fullscreen"), this.et = !0, E(i, "resize")) : (this.responsive.et = !1, this.responsive.parameters.type = this._type, this.tt.dataset.responsive = this._type, this.responsive.parameters.upscale = this._upscale, I(this.responsive.containerElement, {
                marginLeft: this._marginLeft,
                marginRight: this._marginRight
            }), I(this.ot, {
                width: "",
                height: "",
                "background-color": ""
            }), _(this.slider.sliderElement, "n2-ss-slider--fullscreen"), _(n, "n2-in-fullscreen"), E(i, "resize"), this.et = !1, this.slider.K("n2ExitFullScreen"))
        }, t.prototype.isDocumentInFullScreenMode = function () {
            return s.fullscreenElement || s.webkitIsFullScreen
        }, t
    })), u.d("SmartSliderControlKeyboard", (function () {
        "use strict";
        var t;

        function n() {
            this.controls = [], s.addEventListener("keydown", this.onKeyDown.bind(this)), s.addEventListener("mousemove", this.onMouseMove.bind(this), {
                capture: !0
            })
        }

        function o(i, s, h) {
            this.slider = i, this.parameters = d({}, h), this.parseEvent = "vertical" === s ? o.prototype.parseEventVertical : o.prototype.parseEventHorizontal, t || (t = new n), t.addControl(this), q(this.slider.sliderElement, "SliderKeyDown", function (e) {
                this.onKeyDown(e.detail.e)
            }.bind(this)), i.controls.keyboard = this
        }
        return n.prototype.onMouseMove = function (e) {
            this.mouseEvent = e
        }, n.prototype.addControl = function (t) {
            this.controls.push(t)
        }, n.prototype.onKeyDown = function (e) {
            if (e.target.tagName.match(/BODY|DIV|IMG/) && !e.target.isContentEditable) {
                var t;
                if (this.mouseEvent && (t = this.findSlider(s.elementFromPoint(this.mouseEvent.clientX, this.mouseEvent.clientY)))) return void B(t, "SliderKeyDown", {
                    e: e
                });
                if (s.activeElement !== h && (t = this.findSlider(s.activeElement))) return void B(t, "SliderKeyDown", {
                    e: e
                });
                for (var i = 0; i < this.controls.length; i++) this.controls[i].onKeyDown(e)
            }
        }, n.prototype.findSlider = function (t) {
            return t ? t.classList.contains("n2-ss-slider") ? t : t.closest(".n2-ss-slider") : null
        }, o.prototype.isSliderOnScreen = function () {
            var t = this.slider.sliderElement.getBoundingClientRect(),
                s = t.height / 2;
            return t.top + s >= 0 && t.top + s <= i.innerHeight
        }, o.prototype.onKeyDown = function (e) {
            !e.defaultPrevented && this.isSliderOnScreen() && this.parseEvent.call(this, e) && e.preventDefault()
        }, o.prototype.parseEventHorizontal = function (e) {
            switch (e.keyCode) {
                case 39:
                    return n2const.activeElementBlur(), this.slider[n2const.isRTL() ? "previous" : "next"](), !0;
                case 37:
                    return n2const.activeElementBlur(), this.slider[n2const.isRTL() ? "next" : "previous"](), !0;
                default:
                    return !1
            }
        }, o.prototype.parseEventVertical = function (e) {
            switch (e.keyCode) {
                case 40:
                    return (!this.slider.isChangeCarousel("next") || !this.slider.parameters.controls.blockCarouselInteraction) && (n2const.activeElementBlur(), this.slider.next(), !0);
                case 38:
                    return (!this.slider.isChangeCarousel("previous") || !this.slider.parameters.controls.blockCarouselInteraction) && (n2const.activeElementBlur(), this.slider.previous(), !0);
                default:
                    return !1
            }
        }, o
    })), u.d("SmartSliderControlMouseWheel", (function () {
        "use strict";

        function t(t, i) {
            this.preventScroll = {
                local: !1,
                curve: !1,
                curveGlobal: !1,
                global: !1,
                localTimeout: !1,
                curveTimeout: !1,
                curveGlobalTimeout: !1,
                globalTimeout: !1
            }, this.maxDelta = 0, this.slider = t, this.rt = 2 === i ? "deltaX" : "deltaY", s.addEventListener("wheel", this.onGlobalMouseWheel.bind(this), {
                passive: !1
            }), t.controls.mouseWheel = this
        }
        return t.prototype.hasScrollableParentVertical = function (t, s) {
            for (; s && s !== this.slider.sliderElement;) {
                if (s.scrollHeight > s.clientHeight) {
                    var n = i.getComputedStyle(s).overflowY;
                    if ("scroll" === n || "auto" === n)
                        if (t) {
                            if (s.scrollTop > 0) return !0
                        } else if (s.scrollTop + s.clientHeight < s.scrollHeight) return !0
                }
                s = s.parentNode
            }
            return !1
        }, t.prototype.hasScrollableParentHorizontal = function (t) {
            for (; t && t !== this.slider.sliderElement;) {
                var s = i.getComputedStyle(t).overflowX;
                if (("scroll" === s || "auto" === s) && t.scrollWidth > t.offsetWidth) return !0;
                t = t.parentNode
            }
            return !1
        }, t.prototype.onGlobalMouseWheel = function (e) {
            e.target.closest(".n2-ss-slider") && 0 !== e[this.rt] && (this.onCurveEvent(e), this.preventScroll.local || this.preventScroll.curve || Math.abs(e[this.rt]) < this.maxDelta / 2 ? e.preventDefault() : (this.preventScroll.global && e.preventDefault(), (this.slider.sliderElement === e.target || this.slider.sliderElement.contains(e.target)) && ("deltaY" === this.rt ? e.shiftKey || this.hasScrollableParentVertical(e.deltaY < 0, e.target) || this.onMouseWheel(e) : "deltaX" === this.rt && (this.hasScrollableParentHorizontal(e.target) || this.onMouseWheel(e)))))
        }, t.prototype.onMouseWheel = function (e) {
            e[this.rt] < 0 ? this.slider.isChangeCarousel("previous") && this.slider.parameters.controls.blockCarouselInteraction || (this.slider.previous(), e.preventDefault(), this.startCurveWatcher(e), this.local(), this.global()) : e[this.rt] > 0 && (this.slider.isChangeCarousel("next") && this.slider.parameters.controls.blockCarouselInteraction || (this.slider.next(), e.preventDefault(), this.startCurveWatcher(e), this.local(), this.global()))
        }, t.prototype.startCurveWatcher = function (e) {
            !1 !== this.preventScroll.curve && a(this.preventScroll.curveTimeout), this.preventScroll.curveGlobal || (this.dynamicDelta = !1, this.lastDelta = e[this.rt], this.preventScroll.curveGlobal = !0, this.preventScroll.curveGlobalTimeout = r(function () {
                this.preventScroll.curveGlobal = !1, this.maxDelta = 0
            }.bind(this), 500)), this.preventScroll.curve = !0, this.preventScroll.curveTimeout = r(this.releaseCurveLock.bind(this), 1500)
        }, t.prototype.onCurveEvent = function (e) {
            if (this.preventScroll.curveGlobal) {
                this.dynamicDelta || this.lastDelta === e[this.rt] || (this.lastDelta = e[this.rt], this.dynamicDelta = !0);
                var t = Math.abs(e[this.rt]);
                this.preventScroll.curve && this.maxDelta / 2 > t && this.releaseCurveLock(), this.maxDelta = Math.max(this.maxDelta, t), this.preventScroll.curveGlobalTimeout && a(this.preventScroll.curveGlobalTimeout), this.preventScroll.curveGlobalTimeout = r(function () {
                    this.preventScroll.curveGlobal = !1, this.maxDelta = 0
                }.bind(this), 500)
            }
        }, t.prototype.releaseCurveLock = function () {
            this.preventScroll.curve = !1, a(this.preventScroll.curveTimeout)
        }, t.prototype.local = function () {
            !1 !== this.preventScroll.local && a(this.preventScroll.localTimeout), this.preventScroll.local = !0, this.preventScroll.localTimeout = r(function () {
                this.preventScroll.local = !1, this.dynamicDelta || this.releaseCurveLock()
            }.bind(this), 1e3)
        }, t.prototype.global = function () {
            !1 !== this.preventScroll.global && a(this.preventScroll.globalTimeout), this.preventScroll.global = !0, this.preventScroll.globalTimeout = r(function () {
                this.preventScroll.global = !1
            }.bind(this), 1e3)
        }, t
    })), u.d("SmartSliderControlTouch", (function () {
        "use strict";

        function t(t) {
            this.slider = t, this.interactiveDrag = !0, this.preventMultipleTap = !1, this._animation = t.mainAnimation, this.swipeElement = this.slider.sliderElement.querySelector(".n2_ss__touch_element"), t.controls.touch = this, t.stages.done("StarterSlide", this.onStarterSlide.bind(this)), q(t.sliderElement, "visibleSlidesChanged", this.onVisibleSlidesChanged.bind(this))
        }
        return t.prototype.onStarterSlide = function () {
            this.initTouch(), q(this.slider.sliderElement, "sliderChangeCurrentSlide", this.updatePanDirections.bind(this))
        }, t.prototype.onVisibleSlidesChanged = function () {
            this.slider.visibleSlides.length > 1 ? I(this.swipeElement, {
                cursor: "grab",
                userSelect: "none"
            }) : F(this.swipeElement, ["cursor", "userSelect"])
        }, t.prototype.initTouch = function () {
            this._animation.isNoAnimation && (this.interactiveDrag = !1), this.eventBurrito = u.EventBurrito(this.swipeElement, {
                mouse: !0,
                axis: "horizontal" === this.axis ? "x" : "y",
                start: this._start.bind(this),
                move: this._move.bind(this),
                end: this._end.bind(this)
            }), this.updatePanDirections(), this.cancelKineticScroll = function () {
                this.kineticScrollCancelled = !0
            }.bind(this)
        }, t.prototype._start = function (t) {
            this.currentInteraction = {
                type: "pointerdown" === t.type ? "pointer" : "touchstart" === t.type ? "touch" : "mouse",
                state: d({}, this.state),
                action: "unknown",
                distance: [],
                distanceY: [],
                percent: 0,
                progress: 0,
                scrollTop: Q(),
                animationStartDirection: "unknown",
                hadDirection: !1,
                startDistance: 0
            }, this.logDistance(0, 0)
        }, t.prototype._move = function (t, i, s, n) {
            if (!n || "unknown" !== this.currentInteraction.action) {
                this.currentInteraction.direction = this.measure(s);
                var h = this.get(s);
                if ((this.currentInteraction.hadDirection || Math.abs(h) > 10 || Math.abs(s.y) > 10) && (this.logDistance(h, s.y), this.currentInteraction.percent < 1 && this.setTouchProgress(h, s.y), "touch" === this.currentInteraction.type && t.cancelable && ("switch" !== this.currentInteraction.action && "hold" !== this.currentInteraction.action || (this.currentInteraction.hadDirection = !0))), "switch" === this.currentInteraction.action) return !0
            }
            return !1
        }, t.prototype._end = function (t, i, s, n) {
            if ("switch" === this.currentInteraction.action) {
                var h = n ? 0 : this.measureRealDirection();
                if (this.interactiveDrag) this._animation.timeline.progress() < 1 && this._animation.setTouchEnd(h, this.currentInteraction.progress, s.time), this._animation.setTouch(!1);
                else h && this.callAction(this.currentInteraction.animationStartDirection);
                _(this.swipeElement, "n2-grabbing")
            }
            this.onEnd(), delete this.currentInteraction, Math.abs(s.x) < 10 && Math.abs(s.y) < 10 ? this.onTap(t) : u._preventClick()
        }, t.prototype.onEnd = function () {
            if ("scroll" === this.currentInteraction.action && "pointer" === this.currentInteraction.type) {
                var t = this.currentInteraction.distanceY[0],
                    i = this.currentInteraction.distanceY[this.currentInteraction.distanceY.length - 1],
                    n = (t.d - i.d) / (i.t - t.t) * 10,
                    h = Date.now(),
                    o = function () {
                        requestAnimationFrame(function () {
                            var t, i;
                            if (!this.kineticScrollCancelled && n && (t = Date.now() - h, (i = n * Math.exp(-t / 325)) > 1 || i < -1)) return X(Q() + i), void o();
                            this.onEndKineticScroll()
                        }.bind(this))
                    }.bind(this);
                this.kineticScrollCancelled = !1, o(), s.addEventListener("pointerdown", this.cancelKineticScroll)
            }
        }, t.prototype.onEndKineticScroll = function () {
            delete this.kineticScrollCancelled, s.removeEventListener("pointerdown", this.cancelKineticScroll), P(n, "scroll-behavior", "")
        }, t.prototype.setTouchProgress = function (t, i) {
            this.recognizeSwitchInteraction(), 0 === this.currentInteraction.startDistance && (this.currentInteraction.startDistance = t < 0 ? t + 1 : t - 1);
            var s, n = this.getPercent(t - this.currentInteraction.startDistance);
            if (this.currentInteraction.percent = n, "switch" === this.currentInteraction.action) {
                if (this.interactiveDrag) {
                    switch (this.currentInteraction.animationStartDirection) {
                        case "up":
                            s = -1 * n;
                            break;
                        case "down":
                            s = n;
                            break;
                        case "left":
                            s = -1 * n;
                            break;
                        case "right":
                            s = n
                    }
                    this.currentInteraction.progress = s, this._animation.setTouchProgress(s)
                }
            } else "unknown" !== this.currentInteraction.action && "scroll" !== this.currentInteraction.action || this.startScrollInteraction(i)
        }, t.prototype.startScrollInteraction = function (t) {
            "vertical" === this.axis && (this.slider.controlFullscreen && this.slider.controlFullscreen.et || (this.currentInteraction.action = "scroll", "pointer" === this.currentInteraction.type && (P(n, "scroll-behavior", "auto"), X(Math.max(0, this.currentInteraction.scrollTop - t)))))
        }, t.prototype.recognizeSwitchInteraction = function () {
            if ("unknown" === this.currentInteraction.action && this.slider.visibleSlides.length > 1)
                if ("ended" === this._animation.state) {
                    var t = this.currentInteraction.direction;
                    if ("unknown" !== t && this.currentInteraction.state[t]) {
                        if (this.currentInteraction.animationStartDirection = t, this.interactiveDrag) {
                            this._animation.setTouch(this.axis);
                            this.callAction(t, !1)
                        }
                        this.currentInteraction.action = "switch", T(this.swipeElement, "n2-grabbing")
                    }
                } else "playing" === this._animation.state && (this.currentInteraction.action = "hold")
        }, t.prototype.logDistance = function (t, i) {
            this.currentInteraction.distance.length > 3 && (this.currentInteraction.distance.shift(), this.currentInteraction.distanceY.shift()), this.currentInteraction.distance.push({
                d: t,
                t: Date.now()
            }), this.currentInteraction.distanceY.push({
                d: i,
                t: Date.now()
            })
        }, t.prototype.measureRealDirection = function () {
            var t = this.currentInteraction.distance[0],
                i = this.currentInteraction.distance[this.currentInteraction.distance.length - 1];
            return i.d >= 0 && t.d > i.d || i.d < 0 && t.d < i.d ? 0 : 1
        }, t.prototype.onTap = function (e) {
            this.preventMultipleTap || (E(e.target, "n2click"), this.preventMultipleTap = !0, r(function () {
                this.preventMultipleTap = !1
            }.bind(this), 500))
        }, t.prototype.updatePanDirections = function () {}, t.prototype.setState = function (t, i) {
            "object" != typeof arguments[0] && ((t = {})[arguments[0]] = arguments[1], i = arguments[2]);
            var s = !1;
            for (var n in t) this.state[n] !== t[n] && (this.state[n] = t[n], s = !0);
            s && i && this.eventBurrito.supportsPointerEvents && this.syncTouchAction()
        }, t
    })), u.d("SmartSliderControlTouchHorizontal", "SmartSliderControlTouch", (function () {
        "use strict";

        function t() {
            this.state = {
                left: !1,
                right: !1
            }, this.axis = "horizontal", u.SmartSliderControlTouch.prototype.constructor.apply(this, arguments)
        }
        return t.prototype = Object.create(u.SmartSliderControlTouch.prototype), t.prototype.constructor = t, t.prototype.callAction = function (t, i) {
            switch (t) {
                case "left":
                    return this.slider[n2const.isRTL() ? "previous" : "next"].call(this.slider, i);
                case "right":
                    return this.slider[n2const.isRTL() ? "next" : "previous"].call(this.slider, i)
            }
            return !1
        }, t.prototype.measure = function (t) {
            return !this.currentInteraction.hadDirection && Math.abs(t.x) < 10 || 0 === t.x || Math.abs(t.x) < Math.abs(t.y) ? "unknown" : t.x < 0 ? "left" : "right"
        }, t.prototype.get = function (t) {
            return t.x
        }, t.prototype.getPercent = function (t) {
            return Math.max(-.99999, Math.min(.99999, t / this.slider.getHorizontalTouchDimension()))
        }, t.prototype.updatePanDirections = function () {
            var t = this.slider.currentSlide.index,
                i = t + 1 < this.slider.slides.length,
                s = t - 1 >= 0;
            this.slider.parameters.carousel && (i = !0, s = !0), n2const.isRTL() && "vertical" !== this.slider.getAnimationAxis() ? this.setState({
                right: i,
                left: s
            }, !0) : this.setState({
                right: s,
                left: i
            }, !0)
        }, t.prototype.syncTouchAction = function () {
            var t = this.state.left || this.state.right ? "pan-y" : "";
            P(this.swipeElement, "touch-action", t), i.PointerEventsPolyfill && m(this.swipeElement, "touch-action", t)
        }, t
    })), u.d("SmartSliderControlTouchVertical", "SmartSliderControlTouch", (function () {
        "use strict";

        function t() {
            this.state = {
                up: !1,
                down: !1
            }, this.action = {
                up: "next",
                down: "previous"
            }, this.axis = "vertical", u.SmartSliderControlTouch.prototype.constructor.apply(this, arguments)
        }
        return t.prototype = Object.create(u.SmartSliderControlTouch.prototype), t.prototype.constructor = t, t.prototype.callAction = function (t, i) {
            switch (t) {
                case "up":
                    return this.slider.next.call(this.slider, i);
                case "down":
                    return this.slider.previous.call(this.slider, i)
            }
            return !1
        }, t.prototype.measure = function (t) {
            return !this.currentInteraction.hadDirection && Math.abs(t.y) < 1 || 0 == t.y || Math.abs(t.y) < Math.abs(t.x) ? "unknown" : t.y < 0 ? "up" : "down"
        }, t.prototype.get = function (t) {
            return t.y
        }, t.prototype.getPercent = function (t) {
            return Math.max(-.99999, Math.min(.99999, t / this.slider.getVerticalTouchDimension()))
        }, t.prototype.updatePanDirections = function () {
            this.setState({
                down: !this.slider.isChangeCarousel("previous") || !this.slider.parameters.controls.blockCarouselInteraction,
                up: !this.slider.isChangeCarousel("next") || !this.slider.parameters.controls.blockCarouselInteraction
            }, !0)
        }, t.prototype.syncTouchAction = function () {
            var t = this.state.up || this.state.down ? "pan-x" : "";
            P(this.swipeElement, "touch-action", t), i.PointerEventsPolyfill && m(this.swipeElement, "touch-action", t)
        }, t.prototype._start = function (t) {
            this.slider.blockCarousel = !0, u.SmartSliderControlTouch.prototype._start.apply(this, arguments)
        }, t.prototype.onEnd = function (t) {
            u.SmartSliderControlTouch.prototype.onEnd.apply(this, arguments), this.slider.blockCarousel = !1
        }, t
    })), u.d("SmartSliderControlAutoplayWait", (function () {
        "use strict";

        function t(t) {
            this.autoplay = t, this.waits = {}
        }
        return t.Strong = ["lightbox", "load"], t.prototype.add = function (t) {
            this.waits[t] = 1, this._refresh()
        }, t.prototype.resolve = function (t) {
            delete this.waits[t], this._refresh()
        }, t.prototype.resolveWeak = function () {
            var i = {};
            for (var s in this.waits) 1 === this.waits[s] && -1 !== t.Strong.indexOf(s) && (i[s] = 1);
            this.waits = i, this._refresh()
        }, t.prototype.resolveAll = function () {
            this.waits = {}, this._refresh()
        }, t.prototype._refresh = function () {
            var t = !1;
            for (var i in this.waits)
                if (this.waits[i]) {
                    t = !0;
                    break
                } this.autoplay.setState("wait", t)
        }, t
    })), u.d("SmartSliderSlideBackgroundColor", (function () {
        function t(t, i) {
            this.el = i
        }
        return t.prototype.getLoadPromise = function () {
            return !0
        }, t
    })), u.d("SmartSliderSlideBackgroundImage", (function () {
        function t(t, i, s, n) {
            this.slide = t, this.manager = i, this.background = s, this._promise = new Promise(function (t) {
                this._resolve = t
            }.bind(this)), this.imageElements = Array.from(n)
        }
        return t.prototype.getLoadPromise = function () {
            return this._promise
        }, t.prototype.preLoad = function () {
            this.blur = C(this.imageElements[0], "blur"), "blurfit" === this.background.mode && (I(this.imageElements[0], {
                margin: "-14px",
                padding: "14px"
            }), P(this.imageElements[0].children[0], "filter", "blur(7px)"));
            var t = this.imageElements[this.imageElements.length - 1];
            this.blur > 0 && (I(t, {
                margin: -2 * this.blur + "px",
                padding: 2 * this.blur + "px"
            }), P(t.children[0], "filter", "blur(" + this.blur + "px)"));
            var i = this.imageElements[0].querySelector("img");
            i.loading = "eager", i.complete ? this.onImageLoaded(i) : (i.addEventListener("load", this.onImageLoaded.bind(this, i)), i.addEventListener("error", this.onImageLoaded.bind(this, i)))
        }, t.prototype.onImageLoaded = function (t) {
            "function" == typeof t.decode ? t.decode().then(this._resolve.bind(this)).catch(function (t) {
                console.error(t), this._resolve()
            }.bind(this)) : this._resolve()
        }, t.prototype.fadeOut = function () {
            u.q.to(u.MW.C(this.imageElements), .3, {
                opacity: 0
            })
        }, t.prototype.onSlideDeviceChanged = function () {}, t
    })), u.d("SmartSliderSlideBackground", (function () {
        function t(t, i, s) {
            this.types = this.types || {
                color: "SmartSliderSlideBackgroundColor",
                image: "SmartSliderSlideBackgroundImage",
                video: "SmartSliderSlideBackgroundVideo"
            }, this.width = 0, this.height = 0, this.slide = t, this.element = i, this.manager = s, this.readyPromise = new Promise(function (t) {
                this.readyPromiseResolve = t
            }.bind(this)), this.promise = new Promise(function (t) {
                this.resolve = function () {
                    t(), delete this.resolve
                }.bind(this)
            }.bind(this))
        }
        return t.prototype.preloadOnce = function () {
            if (!this.elements) {
                this.elements = {
                    color: !1,
                    image: !1,
                    video: !1
                }, this.currentSrc = "", this.mode = C(this.element, "mode"), this.opacity = C(this.element, "opacity");
                var t = this.element.querySelectorAll(".n2-ss-slide-background-image");
                t.length && (this.elements.image = new u[this.types.image](this.slide, this.manager, this, t), this.elements.image.preLoad());
                var i = this.element.querySelector(".n2-ss-slide-background-color");
                i && (this.elements.color = new u[this.types.color](this, i)), this.readyPromiseResolve(), delete this.readyPromiseResolve, delete this.readyPromise;
                var s = [];
                for (var n in this.elements) this.elements[n] && s.push(this.elements[n].getLoadPromise());
                Promise.all(s).then(this.resolve)
            }
        }, t.prototype.onReady = function (t) {
            this.readyPromise ? this.readyPromise.then(t) : t()
        }, t.prototype.preLoad = function () {
            return this.preloadOnce(), this.promise
        }, t.prototype.fadeOut = function () {
            this.hasImage() && this.elements.image.fadeOut()
        }, t.prototype.hasColor = function () {
            return this.elements && this.elements.color
        }, t.prototype.hasImage = function () {
            return this.elements && this.elements.image
        }, t.prototype.hasVideo = function () {
            return this.elements && this.elements.video
        }, t.prototype.hasBackground = function () {
            return this.elements && (this.elements.color || this.elements.image || this.elements.video)
        }, t.prototype.onSlideDeviceChanged = function (t) {
            this.hasImage() && this.elements.image.onSlideDeviceChanged(t)
        }, t
    })), u.d("FrontendComponentCommon", ["FrontendComponent"], (function () {
        function t(t, i, s, n) {
            this.wraps = {}, u.FrontendComponent.prototype.constructor.apply(this, arguments)
        }
        return t.prototype = Object.create(u.FrontendComponent.prototype), t.prototype.constructor = t, t.prototype.init = function (t) {
            this.stateCBs = [], this.state = {
                InComplete: !1
            };
            var i = this.layer.querySelector(":scope > .n2-ss-layer-mask");
            switch (i && (this.wraps.mask = i), C(this.layer, "pm")) {
                case "absolute":
                    this.placement = new u.FrontendPlacementAbsolute(this);
                    break;
                case "normal":
                    this.placement = new u.FrontendPlacementNormal(this);
                    break;
                case "content":
                    this.placement = new u.FrontendPlacementContent(this);
                    break;
                default:
                    this.placement = new u.FrontendPlacementDefault(this)
            }
            u.FrontendComponent.prototype.init.call(this, t)
        }, t.prototype.setState = function (t, i) {
            this.state[t] = i;
            for (var s = 0; s < this.stateCBs.length; s++) this.stateCBs[s].call(this, this.state)
        }, t.prototype.addStateCallback = function (t) {
            this.stateCBs.push(t), t.call(this, this.state)
        }, t.prototype.start = function () {
            this.placement.start(), u.FrontendComponent.prototype.start.call(this);
            var t = parseFloat(this.get("rotation"));
            t && (u.MW.P(this.layer).layerRotation = t)
        }, t.prototype.onDeviceChange = function (t) {
            u.FrontendComponent.prototype.onDeviceChange.call(this, t);
            for (var i = 0; i < this.children.length; i++) this.children[i].onDeviceChange(t);
            this.placement.onDeviceChange(t), this.onAfterDeviceChange(t)
        }, t.prototype.onAfterDeviceChange = function (t) {}, t.prototype.onResize = function (t, i) {
            u.FrontendComponent.prototype.onResize.apply(this, arguments), this.placement.onResize(t, i)
        }, t.prototype.hasLayerAnimation = function () {
            return this.animationManager !== o
        }, t.prototype.addWrap = function (t, i) {
            return this.wraps[t] === o && (this.wraps[t] = i), i
        }, t.prototype.getContents = function () {
            return []
        }, t
    })), u.d("FrontendComponent", (function () {
        function t(t, i, s, n) {
            this.device = "", this.children = [], this.slide = t, this.parent = i, this.layer = s, s.layer = this, this.isVisible = !0, this.init(n)
        }
        return t.prototype.init = function (t) {
            if (t)
                for (var i = 0; i < t.length; i++) {
                    var s = t[i];
                    switch (C(s, "sstype")) {
                        case "content":
                            this.children.push(new u.FrontendComponentContent(this.slide, this, s));
                            break;
                        case "row":
                            this.children.push(new u.FrontendComponentRow(this.slide, this, s));
                            break;
                        case "col":
                            this.children.push(new u.FrontendComponentCol(this.slide, this, s));
                            break;
                        default:
                            this.children.push(new u.FrontendComponentLayer(this.slide, this, s))
                    }
                }
        }, t.prototype.start = function () {
            for (var t = 0; t < this.children.length; t++) this.children[t].start()
        }, t.prototype.onDeviceChange = function (t) {
            this.device = t
        }, t.prototype.onResize = function (t, i) {
            for (var s = 0; s < this.children.length; s++) this.children[s].onResize(t, i)
        }, t.prototype.getDevice = function (t, i) {
            var s = C(this.layer, this.device + t);
            return s !== o ? s : "desktopportrait" !== this.device ? C(this.layer, "desktopportrait" + t) : i !== o ? i : 0
        }, t.prototype.get = function (t) {
            return C(this.layer, t)
        }, t
    })), u.d("FrontendSlideControls", (function () {
        function t(t, i) {
            this.slider = t, this.element = i, this.element.ssSlide = this, this.status = new u.SlideStatus
        }
        return t.prototype.isCurrentlyEdited = function () {
            return this._isCurrentlyEdited
        }, t.prototype.is = function (t) {
            return this === t
        }, t.prototype.K = function (t, i) {
            B(this.element, t, i)
        }, t.prototype.isVisibleWhen = function (t) {
            return !0
        }, t.prototype.isActiveWhen = function (t) {
            return !0
        }, t.prototype.isStatic = function () {
            return !1
        }, t
    })), u.d("FrontendPlacement", (function () {
        function t(t) {
            this.layer = t, this.linked = []
        }
        return t.prototype.start = function () {}, t.prototype.onDeviceChange = function (t) {}, t.prototype.at = function () {
            if (this.linked.length) {
                var t = this.layer.layer;
                this._sizePosition = {
                    left: t.offsetLeft,
                    top: t.offsetTop,
                    width: t.offsetWidth,
                    height: t.offsetHeight
                }
            }
        }, t.prototype.onResize = function (t, i) {
            if (this.linked.length) {
                this.at();
                for (var s = 0; s < this.linked.length; s++) this.linked[s].onResizeLinked(t, i)
            }
        }, t.prototype.addLinked = function (t) {
            this.linked.push(t)
        }, t.prototype.isVisible = function () {
            return 1 != +C(this.layer.layer, "hide" + this.layer.device)
        }, t.prototype.getPositionSize = function () {
            return d({}, this._sizePosition)
        }, t
    })), u.d("FrontendSliderSlide", ["FrontendSliderSlideAbstract"], (function () {
        function t(t, i, s) {
            this.slides = [this], this.playCount = 0, u.FrontendSliderSlideAbstract.prototype.constructor.apply(this, arguments), this.id = C(i, "id"), this._slideFocus = i.querySelector(".n2-ss-slide--focus"), this.focusableElements = Array.from(i.querySelectorAll('a[href]:not([href=""]),link,button,input:not([type="hidden"]),select,textarea,audio[controls],video[controls],[tabindex]:not([tabindex="-1"])'));
            var n = p(i, "tabindex");
            ("0" === n || +n > 0) && this.focusableElements.push(i), this.disableFocus(), this.background = !1, t.parameters.admin ? this.minimumSlideDuration = 0 : (this.minimumSlideDuration = +C(i, "slideDuration"), this.minimumSlideDuration || (this.minimumSlideDuration = 0)), this._isCurrentlyEdited = this.slider.parameters.admin && i.classList.contains("n2-ss-currently-edited-slide"), this.isCurrentlyEdited() ? (this.layer = i.querySelector('.n2-ss-layer[data-sstype="slide"]'), q(t.sliderElement, "SliderDeviceOrientation", function () {
                this.slider.visibleRealSlides.push(this), this.isVisible = !0, this.slider.responsive.visibleRealSlidesChanged = !0, this.K("Visible")
            }.bind(this))) : (this.component = new u.FrontendComponentSectionSlide(this, t, i.querySelector('.n2-ss-layer[data-sstype="slide"]')), this.layer = this.component.layer)
        }
        t.prototype = Object.create(u.FrontendSliderSlideAbstract.prototype), t.prototype.constructor = t, t.prototype._setInside = function (t) {
            this.isInside !== t && (this.isInside = t)
        };
        var i = !1;
        try {
            f("div").focus(Object.defineProperty({}, "preventScroll", {
                get: function () {
                    i = !0
                }
            }))
        } catch (t) {}
        return t.prototype.focus = function () {
            i && this._slideFocus.focus({
                preventScroll: !0
            })
        }, t.prototype.allowFocus = function () {
            for (var t = 0; t < this.focusableElements.length; t++) m(this.focusableElements[t], "tabindex", 0);
            S(this.element, "aria-hidden")
        }, t.prototype.disableFocus = function () {
            for (var t = 0; t < this.focusableElements.length; t++) m(this.focusableElements[t], "tabindex", -1);
            m(this.element, "aria-hidden", "true")
        }, t.prototype.init = function () {
            var t = this.slider.findSlideBackground(this);
            t && (this.slider.isAdmin ? this.background = new u.SmartSliderSlideBackgroundAdmin(this, t, this.slider.backgrounds) : this.background = new u.SmartSliderSlideBackground(this, t, this.slider.backgrounds)), this.element.ssSlideBackground = this.background
        }, t.prototype.onDeviceChange = function (t) {
            C(this.element, "hide" + at(t)) ? !1 !== this.isVisible && (this.isVisible = !1, this.slider.responsive.visibleRealSlidesChanged = !0, this.K("Hidden")) : (this.slider.visibleRealSlides.push(this), !0 !== this.isVisible && (this.isVisible = !0, this.slider.responsive.visibleRealSlidesChanged = !0, this.K("Visible")))
        }, t.prototype.hasLayers = function () {
            return this.component.children.length > 0
        }, t.prototype.hasBackgroundVideo = function () {
            return this.background.hasVideo()
        }, t.prototype.hasLink = function () {
            return !!C(this.element, "haslink")
        }, t
    })), u.d("FrontendSliderSlideAbstract", ["FrontendSlideControls"], (function () {
        function t(t, i, s) {
            u.FrontendSlideControls.prototype.constructor.call(this, t, i), this.slides = this.slides || [], this.group = this, this.originalIndex = s, this.index = s, this.localIndex = s, this.groupIndex = 0, this.isVisible = !0, this.isInside = -1
        }
        for (var i in u.FrontendSlideControls.prototype) t.prototype[i] = u.FrontendSlideControls.prototype[i];
        return t.prototype.setIndex = function (t) {
            for (var i = 0; i < this.slides.length; i++) this.slides[i]._setIndex(t)
        }, t.prototype._setIndex = function (t) {
            this.localIndex = this.index = t
        }, t.prototype.preLoad = function () {
            for (var t = [], i = 0; i < this.slides.length; i++) t.push(this.slides[i]._preLoad());
            return Promise.all(t)
        }, t.prototype._preLoad = function () {
            return this.element.querySelectorAll("[data-lazysrc]").forEach((function (t) {
                m(t, "src", C(t, "lazysrc"))
            })), !this.background || this.background.preLoad()
        }, t.prototype.setPrevious = function (t) {
            this.previousSlide = t
        }, t.prototype.getPrevious = function () {
            var t = this;
            do {
                t = t.previousSlide
            } while (t && t !== this && !t.isVisible);
            return t
        }, t.prototype.setNext = function (t) {
            this.nextSlide = t, t && t.setPrevious(this)
        }, t.prototype.getNext = function () {
            var t = this;
            do {
                t = t.nextSlide
            } while (t && t !== this && !t.isVisible);
            return t
        }, t.prototype.getTitle = function () {
            return C(this.slides[0].element, "title") || ""
        }, t.prototype.getDescription = function () {
            return C(this.slides[0].element, "description") || ""
        }, t.prototype.getThumbnail = function () {
            var t = this.slides[0].element.querySelector(".n2-ss-slide-thumbnail");
            return t ? p(t, "src") : ""
        }, t.prototype.hasLink = function () {
            return !1
        }, t.prototype.setActive = function () {
            this.allowFocus(), T(this.element, "n2-ss-slide-active")
        }, t.prototype.unsetActive = function () {
            this.disableFocus(), _(this.element, "n2-ss-slide-active")
        }, t.prototype.setInside = function (t) {
            for (var i = 0; i < this.slides.length; i++) this.slides[i]._setInside(t)
        }, t.prototype._setInside = function (t) {}, t.prototype.focus = function () {}, t.prototype.allowFocus = function () {}, t.prototype.disableFocus = function () {}, t.prototype.isVisibleWhen = function (t) {
            return -1 !== this.slider.getVisibleSlides(t).indexOf(this)
        }, t.prototype.isActiveWhen = function (t) {
            return -1 !== this.slider.getActiveSlides(t).indexOf(this)
        }, t
    })), u.d("SlideStatus", (function () {
        var t = {
            NOT_INITIALIZED: -1,
            INITIALIZED: 0,
            READY_TO_START: 1,
            PLAYING: 2,
            ENDED: 3,
            SUSPENDED: 4
        };

        function i() {
            this.status = t.NOT_INITIALIZED
        }
        return i.prototype.set = function (i) {
            this.status = t[i]
        }, i.prototype.is = function (i) {
            return this.status === t[i]
        }, i
    })), u.d("FrontendSliderStaticSlide", ["FrontendSlideControls"], (function () {
        function t(t, i) {
            u.FrontendSlideControls.prototype.constructor.call(this, t, i), this.slides = [this], this.isVisible = !0, this._isCurrentlyEdited = this.slider.parameters.admin && i.classList.contains("n2-ss-currently-edited-slide"), this.isCurrentlyEdited() ? this.layer = i.querySelector('.n2-ss-layer[data-sstype="slide"]') : (this.component = new u.FrontendComponentSectionSlide(this, t, i.querySelector('.n2-ss-layer[data-sstype="slide"]')), this.layer = this.component.layer)
        }
        for (var i in u.FrontendSlideControls.prototype) t.prototype[i] = u.FrontendSlideControls.prototype[i];
        return t.prototype.isStatic = function () {
            return !0
        }, t.prototype.onDeviceChange = function (t) {
            C(this.element, "hide" + at(t)) ? !1 !== this.isVisible && (this.isVisible = !1, this.K("Hidden")) : !0 !== this.isVisible && (this.isVisible = !0, this.status.is("INITIALIZED") && this.playIn(), this.K("Visible"))
        }, t
    })), u.d("FrontendPlacementAbsolute", ["FrontendPlacement"], (function () {
        var t = new class {
            constructor() {
                this.ut = new Set, this.ct = new Set, this.h = this.u.bind(this)
            }
            add(t) {
                this.ut.add(t)
            }
            invalidate(t) {
                this.ct.add(t), 1 === this.ct.size && u.t.add(this.h)
            }
            u() {
                for (let t of this.ct) t.at();
                for (let t of this.ct) t.onResizeSize();
                for (let t of this.ct) t.onResizePosition();
                this.ct.clear(), u.t.remove(this.h)
            }
        };

        function i(t) {
            this.parentLayer = !1, this.parentLayerPlacement = !1, u.FrontendPlacement.prototype.constructor.apply(this, arguments)
        }
        return i.prototype = Object.create(u.FrontendPlacement.prototype), i.prototype.constructor = i, i.prototype.start = function () {
            var i = this.layer.get("parentid");
            if (i) {
                var n = s.getElementById(i);
                n && (this.parentLayer = n.layer, this.parentLayerPlacement = this.parentLayer.placement, this.parentLayerPlacement.addLinked(this), this.onResize = function () {})
            }
            t.add(this)
        }, i.prototype.isSingleAxis = function () {
            if (this.layer.parent instanceof u.FrontendComponentSectionSlide) {
                if (!this.parentLayer) return !1;
                if (this.parentLayer.placement instanceof u.FrontendPlacementAbsolute) return !1
            }
            return !0
        }, i.prototype.at = function () {
            u.FrontendPlacement.prototype.at.apply(this, arguments);
            var t = this.layer.layer.parentNode;
            this.ft = {
                width: t.offsetWidth,
                height: t.offsetHeight
            }
        }, i.prototype.onResizeSize = function () {
            var t = u.MW.P(this.layer.layer),
                i = this.lt.slideW,
                s = this.lt.slideH;
            this.isSingleAxis() && (s = i);
            var n = i,
                h = s;
            parseInt(this.layer.get("responsivesize")) || (n = h = 1);
            var o = this.getWidth(n),
                r = "number" == typeof o,
                a = this.getHeight(h),
                c = "number" == typeof a;
            this._sizePosition && (r && (this._sizePosition.width = o, c || (P(this.layer.layer, "width", o + "px"), this._sizePosition.height = this.layer.layer.offsetHeight)), c && (this._sizePosition.height = a)), t.width = o + (r ? "px" : ""), t.height = a + (c ? "px" : "")
        }, i.prototype.onResizePosition = function () {
            var t = this.lt,
                i = this.layer.layer,
                s = u.MW.P(i),
                n = t.slideW,
                h = t.slideH;
            this.isSingleAxis() && (h = n), parseInt(this.layer.get("responsiveposition")) || (n = h = 1);
            var o = this.layer.getDevice("left") * n,
                r = this.layer.getDevice("top") * h,
                a = this.layer.getDevice("align"),
                c = this.layer.getDevice("valign");
            if (this.parentLayerPlacement && this.parentLayerPlacement.isVisible()) {
                var f = this.parentLayerPlacement.getPositionSize(),
                    l = {
                        left: 0,
                        top: 0
                    };
                if (this.parentLayerPlacement instanceof u.FrontendPlacementAbsolute) {
                    var d = u.MW.P(this.parentLayerPlacement.layer.layer);
                    f.left += d.xAbs + d.xPAbs / 100 * f.width, f.top += d.yAbs + d.yPAbs / 100 * f.height
                }
                switch (this.layer.getDevice("parentalign")) {
                    case "right":
                        l.left = f.left + f.width;
                        break;
                    case "center":
                        l.left = f.left + f.width / 2;
                        break;
                    default:
                        l.left = f.left
                }
                switch (this.layer.getDevice("parentvalign")) {
                    case "bottom":
                        l.top = f.top + f.height;
                        break;
                    case "middle":
                        l.top = f.top + f.height / 2;
                        break;
                    default:
                        l.top = f.top
                }
                switch (a) {
                    case "right":
                        s.xAbs = Math.round(l.left + o), s.xPAbs = -100;
                        break;
                    case "center":
                        s.xAbs = Math.round(l.left + o), s.xPAbs = -50;
                        break;
                    default:
                        s.xAbs = Math.round(l.left + o), s.xPAbs = 0
                }
                switch (c) {
                    case "bottom":
                        s.yAbs = Math.round(l.top + r), s.yPAbs = -100;
                        break;
                    case "middle":
                        s.yAbs = Math.round(l.top + r), s.yPAbs = -50;
                        break;
                    default:
                        s.yAbs = Math.round(l.top + r), s.yPAbs = 0
                }
            } else {
                var v, p;
                switch (a) {
                    case "right":
                        v = !this.layer.slide.isStatic && this.layer.parent instanceof u.FrontendComponentSectionSlide ? this.dt.slideWidth : this.ft.width, s.xAbs = Math.round(v + o), s.xPAbs = -100;
                        break;
                    case "center":
                        v = !this.layer.slide.isStatic && this.layer.parent instanceof u.FrontendComponentSectionSlide ? this.dt.slideWidth : this.ft.width, s.xAbs = Math.round(v / 2 + o), s.xPAbs = -50;
                        break;
                    default:
                        s.xAbs = Math.round(o), s.xPAbs = 0
                }
                switch (c) {
                    case "bottom":
                        p = !this.layer.slide.isStatic && this.layer.parent instanceof u.FrontendComponentSectionSlide ? this.dt.slideHeight : this.ft.height, s.yAbs = Math.round(p + r), s.yPAbs = -100;
                        break;
                    case "middle":
                        p = !this.layer.slide.isStatic && this.layer.parent instanceof u.FrontendComponentSectionSlide ? this.dt.slideHeight : this.ft.height, s.yAbs = Math.round(p / 2 + r), s.yPAbs = -50;
                        break;
                    default:
                        s.yAbs = Math.round(r), s.yPAbs = 0
                }
            }
        }, i.prototype.onResize = function (i, s) {
            this.isVisible() && (this.lt = i, this.dt = s, t.invalidate(this), u.FrontendPlacement.prototype.onResize.apply(this, arguments))
        }, i.prototype.onResizeLinked = function (t, s) {
            i.prototype.onResize.call(this, t, s)
        }, i.prototype.getWidth = function (t) {
            var i = this.layer.getDevice("width");
            return this.isDimensionPropertyAccepted(i) ? i : i * t
        }, i.prototype.getHeight = function (t) {
            var i = this.layer.getDevice("height");
            return this.isDimensionPropertyAccepted(i) ? i : i * t
        }, i.prototype.isDimensionPropertyAccepted = function (t) {
            return (t + "").match(/[0-9]+%/) || "auto" === t
        }, i
    })), u.d("FrontendPlacementContent", ["FrontendPlacement"], (function () {
        function t(t) {
            u.FrontendPlacement.prototype.constructor.apply(this, arguments)
        }
        return t.prototype = Object.create(u.FrontendPlacement.prototype), t.prototype.constructor = t, t
    })), u.d("FrontendPlacementDefault", ["FrontendPlacement"], (function () {
        function t(t) {
            u.FrontendPlacement.prototype.constructor.apply(this, arguments)
        }
        return t.prototype = Object.create(u.FrontendPlacement.prototype), t.prototype.constructor = t, t
    })), u.d("FrontendPlacementNormal", ["FrontendPlacement"], (function () {
        function t(t) {
            u.FrontendPlacement.prototype.constructor.apply(this, arguments)
        }
        return t.prototype = Object.create(u.FrontendPlacement.prototype), t.prototype.constructor = t, t
    })), u.d("FrontendComponentCol", ["FrontendComponentCommon"], (function () {
        function t(t, i, s) {
            this.content = s.querySelector(".n2-ss-layer-col"), u.FrontendComponentCommon.prototype.constructor.call(this, t, i, s, this.content.querySelectorAll(":scope > .n2-ss-layer"))
        }
        return t.prototype = Object.create(u.FrontendComponentCommon.prototype), t.prototype.constructor = t, t.prototype.getContents = function () {
            return [this.content]
        }, t
    })), u.d("FrontendComponentContent", ["FrontendComponentCommon"], (function () {
        function t(t, i, s) {
            this.content = s.querySelector(".n2-ss-section-main-content"), u.FrontendComponentCommon.prototype.constructor.call(this, t, i, s, this.content.querySelectorAll(":scope > .n2-ss-layer"))
        }
        return t.prototype = Object.create(u.FrontendComponentCommon.prototype), t.prototype.constructor = t, t.prototype.getContents = function () {
            return [this.content]
        }, t
    })), u.d("FrontendComponentLayer", ["FrontendComponentCommon"], (function () {
        function t(t, i, s) {
            u.FrontendComponentCommon.prototype.constructor.call(this, t, i, s);
            var n = s;
            this.wraps.mask && (n = this.wraps.mask), this.item = n.querySelectorAll(":scope > *")
        }
        return t.prototype = Object.create(u.FrontendComponentCommon.prototype), t.prototype.constructor = t, t.prototype.getContents = function () {
            return this.item
        }, t
    })), u.d("FrontendComponentRow", ["FrontendComponentCommon"], (function () {
        function t(t, i, s) {
            this.row = s.querySelector(".n2-ss-layer-row"), this.rowInner = s.querySelector(".n2-ss-layer-row-inner"), u.FrontendComponentCommon.prototype.constructor.call(this, t, i, s, this.rowInner.querySelectorAll(":scope > .n2-ss-layer"))
        }
        return t.prototype = Object.create(u.FrontendComponentCommon.prototype), t.prototype.constructor = t, t.prototype.getContents = function () {
            return [this.row]
        }, t
    })), u.d("FrontendComponentSectionSlide", ["FrontendComponent"], (function () {
        function t(t, i, s) {
            this.realSlide = t, this.slider = i, this.element = t.element, this.layer = s, this.isStatic = t.isStatic(), u.FrontendComponent.prototype.constructor.call(this, this, this, s, s.querySelectorAll(":scope > .n2-ss-layer")), q(i.sliderElement, "SliderDeviceOrientation", function (e) {
                this.onDeviceChange(e.detail.device.toLowerCase())
            }.bind(this)), q(i.sliderElement, "SliderResize", function (e) {
                this.onResize(e.detail.ratios, e.detail.responsive.resizeContext)
            }.bind(this)), this.start()
        }
        return t.prototype = Object.create(u.FrontendComponent.prototype), t.prototype.constructor = t, t.prototype.onDeviceChange = function (t) {
            u.FrontendComponent.prototype.onDeviceChange.call(this, t);
            for (var i = 0; i < this.children.length; i++) this.children[i].onDeviceChange(t);
            this.realSlide.onDeviceChange(t)
        }, t
    })), u.d("SmartSliderResponsive", (function () {
        function t(t, s) {
            for (var n in this.state = {
                    StarterSlide: !1
                }, this.isVisible = !0, this.isResetActiveSlideEarly = this.isResetActiveSlideEarly || !1, this.focusOffsetTop = 0, this.focusOffsetBottom = 0, this.minimumSlideHeight = 0, this.et = !1, this.visibleRealSlidesChanged = !0, this.filters = {
                    SliderWidth: [],
                    SliderHeight: [],
                    SlideHeight: [],
                    SliderVerticalCSS: []
                }, this.parameters = d({
                    mediaQueries: {},
                    hideOn: {
                        desktopLandscape: 0,
                        desktopPortrait: 0,
                        tabletLandscape: 0,
                        tabletPortrait: 0,
                        mobileLandscape: 0,
                        mobilePortrait: 0
                    },
                    onResizeEnabled: !0,
                    type: "auto",
                    focusUser: 1,
                    focusEdge: "auto",
                    enabledDevices: {
                        desktopLandscape: 1,
                        desktopPortrait: 0,
                        mobileLandscape: 0,
                        mobilePortrait: 0,
                        tabletLandscape: 0,
                        tabletPortrait: 0
                    },
                    breakpoints: [],
                    sizes: {
                        desktopPortrait: {
                            width: 1200,
                            height: 600,
                            max: 1e4,
                            min: 40
                        }
                    },
                    ratioToDevice: {
                        Portrait: {
                            tablet: 0,
                            mobile: 0
                        },
                        Landscape: {
                            tablet: 0,
                            mobile: 0
                        }
                    },
                    overflowHiddenPage: 0,
                    focus: {
                        offsetTop: "",
                        offsetBottom: ""
                    }
                }, s), this.mediaQueries = {}, this.parameters.mediaQueries) this.parameters.mediaQueries[n] && (this.mediaQueries[n] = i.matchMedia(this.parameters.mediaQueries[n].join(",")));
            this.parameters.hideOn = i.ssOverrideHideOn || this.parameters.hideOn, this.doThrottledResize = NextendThrottle(this.doResize.bind(this), 50), this.slider = t, this.sliderElement = t.sliderElement, this.vt = "1" === C(this.sliderElement, "ssLegacyFontScale"), this.addFilter("SliderWidth", this.filterSliderWidthHorizontalSpacing.bind(this))
        }
        return t.DeviceMode = {
            unknown: 0,
            desktoplandscape: 1,
            desktopportrait: 2,
            tabletlandscape: 3,
            tabletportrait: 4,
            mobilelandscape: 5,
            mobileportrait: 6
        }, t._DeviceMode = {
            0: "unknown",
            1: "desktopLandscape",
            2: "desktopPortrait",
            3: "tabletLandscape",
            4: "tabletPortrait",
            5: "mobileLandscape",
            6: "mobilePortrait"
        }, t._DeviceGroup = {
            desktopLandscape: "desktop",
            desktopPortrait: "desktop",
            tabletLandscape: "tablet",
            tabletPortrait: "tablet",
            mobileLandscape: "mobile",
            mobilePortrait: "mobile"
        }, t.prototype.init = function () {
            this.base = this.parameters.base
        }, t.prototype.setDeviceID = function (i) {
            this.deviceID = i, this.device = t._DeviceMode[i]
        }, t.prototype.start = function () {
            if (this.slider.stages.done("ResizeFirst", function () {
                    n2const.fonts.then(function () {
                        this.slider.stages.resolve("Fonts")
                    }.bind(this))
                }.bind(this)), this.normalizeTimeout = null, this.setDeviceID(t.DeviceMode.unknown), this.ratios = {
                    slideW: 1,
                    slideH: 1
                }, this.horizontalSpacingControls = {
                    right: [],
                    left: []
                }, this.horizontalSpacing = {
                    right: 0,
                    left: 0
                }, this.staticSizes = {
                    paddingTop: 0,
                    paddingRight: 0,
                    paddingBottom: 0,
                    paddingLeft: 0
                }, this.alignElement = this.slider.sliderElement.closest(".n2-ss-align"), this.U = this.slider.U, this.containerElementPadding = this.sliderElement.parentNode, this.containerElement = this.containerElementPadding.parentNode, !this.slider.isAdmin && this.parameters.overflowHiddenPage && R([n, h], "overflow", "hidden"), u._smallestZoom = 320, this.initFocusOffsetObserver(), this.slider.stages.resolve("ResponsiveStart"), this.init(), this.parameters.onResizeEnabled) {
                q(i, "resize", this.onResize.bind(this)), this.lastROWidth = 0;
                var s = this.containerElement.parentNode,
                    o = new ResizeObserver(function (t) {
                        this.processResizeObserverRect(t[0].contentRect)
                    }.bind(this));
                requestAnimationFrame(function () {
                    this.processResizeObserverRect(s.getBoundingClientRect()), o.observe(s)
                }.bind(this))
            } else this.onResize()
        }, t.prototype.processResizeObserverRect = function (t) {
            this.isVisible = !!t.width, this.lastROWidth !== t.width && (this.lastROWidth = t.width, this.internalResize())
        }, t.prototype.internalResize = function () {
            this.onResize()
        }, t.prototype.getDeviceMode = function () {
            return t._DeviceMode[this.deviceID]
        }, t.prototype.getDeviceGroup = function () {
            return t._DeviceGroup[this.getDeviceMode()]
        }, t.prototype.onResize = function (e) {
            this.slider.mainAnimation && "playing" === this.slider.mainAnimation.getState() ? this.bt || (this.bt = !0, N(this.sliderElement, "mainAnimationComplete", this._onResize.bind(this, e))) : this._onResize(e)
        }, t.prototype._onResize = function (e) {
            this.doResize(e), delete this.bt
        }, t.prototype.doNormalizedResize = function () {
            this.normalizeTimeout && a(this.normalizeTimeout), this.normalizeTimeout = r(this.doResize.bind(this), 10)
        }, t.prototype.identifyDeviceID = function () {
            for (var i in this.mediaQueries)
                if (this.mediaQueries[i].matches) return t.DeviceMode[i];
            return t.DeviceMode.desktopportrait
        }, t.prototype.initFocusOffsetObserver = function () {
            if ("" !== this.parameters.focus.offsetTop) {
                var t = s.querySelectorAll(this.parameters.focus.offsetTop);
                if (t.length)
                    for (var i = new ResizeObserver(function (t) {
                            this.focusOffsetTop = 0;
                            for (var i = 0; i < t.length; i++) this.focusOffsetTop += t[i].contentRect.height;
                            this.St()
                        }.bind(this)), n = 0; n < t.length; n++) i.observe(t[n])
            }
            if ("" !== this.parameters.focus.offsetBottom) {
                var h = s.querySelectorAll(this.parameters.focus.offsetBottom);
                if (h.length) {
                    var o = new ResizeObserver(function (t) {
                        this.focusOffsetBottom = 0;
                        for (var i = 0; i < t.length; i++) this.focusOffsetBottom += t[i].contentRect.height;
                        this.St()
                    }.bind(this));
                    for (n = 0; n < h.length; n++) o.observe(h[n])
                }
            }
        }, t.prototype.St = function () {
            P(this.sliderElement, "--subtract-vertical-offset", (i.n2OffsetTop || this.focusOffsetTop) + (i.n2OffsetBottom || this.focusOffsetBottom) + "px")
        }, t.prototype.doResize = function (e) {
            var i = this.identifyDeviceID();
            if (this.parameters.hideOn[t._DeviceMode[i]]) return T(this.U, "n2-section-smartslider--hidden"), !1;
            if (_(this.U, "n2-section-smartslider--hidden"), !this.isVisible) return !1;
            var s = !1,
                n = this.device;
            if (this.deviceID !== i && (this.setDeviceID(i), n && _(this.sliderElement, "n2-ss-" + n), x(this.sliderElement, "deviceMode", this.device), T(this.sliderElement, "n2-ss-" + this.device), this.slider.K("SliderDevice", {
                    lastDevice: n,
                    device: this.device,
                    group: t._DeviceGroup[this.device]
                }), s = !0, this.slider.stages.resolve("Device")), s && (this.slider.visibleRealSlides = [], this.slider.publicDispatchEvent("SliderDeviceOrientation", {
                    slider: this.slider,
                    lastDevice: n,
                    device: this.device,
                    group: t._DeviceGroup[this.device]
                }), this.slider.stages.resolve("DeviceOrientation"), this.finalizeVisibleSlidesStage1()), !this.slider.visibleRealSlides.length) return this.parameters.hideOn[t._DeviceMode[i]] = !0, T(this.U, "n2-section-smartslider--hidden"), !1;
            if (this.slider.isVisible || this.visibleRealSlidesChanged) {
                for (var h = 0; h < this.slider.realSlides.length; h++) u.MW.P(this.slider.realSlides[h].element).setValues({
                    width: "",
                    height: ""
                }), I(this.slider.realSlides[h].element, {
                    width: "",
                    height: ""
                });
                this.resizeStage1Width(), this.slider.K("SliderResizeHorizontal"), this.resizeStage2Height()
            }
        }, t.prototype.resizeStage1Width = function () {
            this.resizeContext = {}
        }, t.prototype.resizeStage2Height = function () {
            this.finalizeVisibleSlidesStage2(), this.calculateResponsiveValues(), this.slider.stages.resolve("ResizeFirst"), this.triggerResize()
        }, t.prototype.calculateResponsiveValues = function () {
            this.ratios = {
                slideW: this.resizeContext.slideWidth / this.base.slideWidth,
                slideH: this.resizeContext.slideHeight / this.base.slideHeight
            }, this.vt && R(this.sliderElement.querySelectorAll('.n2-ss-layer[data-sstype="slide"] > .n2-ss-layer[data-pm="absolute"][data-adaptivefont="0"]'), "font-size", "calc(" + 16 * this.ratios.slideW + "px * var(--ssfont-scale, 1))");
            for (var t = 0; t < this.slider.realSlides.length; t++) u.MW.P(this.slider.realSlides[t].element).setValues({
                width: this.resizeContext.slideSelfWidth,
                height: Math.floor(this.resizeContext.slideSelfHeight)
            })
        }, t.prototype.onStarterSlide = function (t) {
            this.state.StarterSlide = !0, this.calibrateActiveSlide(t), delete this.targetCurrentSlide
        }, t.prototype.finalizeVisibleSlidesStage1 = function () {
            this.visibleRealSlidesChanged && (this.slider.visibleRealSlides.sort((function (t, i) {
                return t.index - i.index
            })), this.updateVisibleSlides(), this.slider.K("visibleRealSlidesChanged"), this.slider.stages.resolve("VisibleRealSlides"), this.isResetActiveSlideEarly && this.calibrateActiveSlide())
        }, t.prototype.updateVisibleSlides = function () {
            this.slider.visibleSlides = this.slider.visibleRealSlides
        }, t.prototype.calibrateActiveSlide = function (t) {
            if (this.state.StarterSlide && this.slider.visibleSlides.length > 0) {
                var i = t || this.slider.currentRealSlide;
                i.isVisible || (i = i.getNext()) || (i = this.slider.currentSlide.getPrevious()), this.resetActiveRealSlide(i)
            }
        }, t.prototype.resetActiveRealSlide = function (t) {
            var i, s;
            t && t !== this.slider.currentRealSlide ? (this.slider.K("BeforeCurrentSlideChange", t), (i = this.slider.currentSlide) && this.slider.forceUnsetActiveSlide(i), this.slider.setCurrentRealSlide(t), s = this.slider.currentSlide, this.targetCurrentSlide = s, this.slider.forceSetActiveSlide(s), this.slider.K("SlideForceChange", {
                oldSlide: i,
                currentSlide: s
            })) : s = this.slider.currentSlide, this.slider.updateInsideSlides([s])
        }, t.prototype.finalizeVisibleSlidesStage2 = function () {
            this.visibleRealSlidesChanged && (this.visibleRealSlidesChanged = !1, this.isResetActiveSlideEarly || this.calibrateActiveSlide(), this.triggerVisibleSlidesChanged(), this.targetCurrentSlide !== o && (this.slider.K("SlideWillChange", {
                targetSlide: this.targetCurrentSlide
            }), this.slider.K("CurrentSlideChanged", {
                currentSlide: this.targetCurrentSlide
            }), this.slider.stages.resolved("Visible") && this.slider.playSlide(this.targetCurrentSlide), delete this.targetCurrentSlide))
        }, t.prototype.triggerVisibleSlidesChanged = function () {
            this.slider.K("visibleSlidesChanged"), this.slider.stages.resolve("VisibleSlides"), this.slider.visibleRealSlides.length ? this.slider.isVisible || this.slider.show() : this.slider.isVisible && this.slider.hide()
        }, t.prototype.getNormalizedModeString = function () {
            return t._DeviceMode[this.deviceID]
        }, t.prototype.triggerResize = function () {
            this.slider.publicDispatchEvent("SliderResize", {
                ratios: this.ratios,
                responsive: this
            }), this.slider.stages.resolve("Resized")
        }, t.prototype.getVerticalOffsetHeight = function () {
            return this.et ? 0 : this.slider.widgets.getVerticalsHeight()
        }, t.prototype.addHorizontalSpacingControl = function (t, i) {
            this.horizontalSpacingControls[t].push(i), this.slider.stages.resolved("ResizeFirst") && this.doNormalizedResize()
        }, t.prototype.filterSliderWidthHorizontalSpacing = function (t) {
            for (var i in this.horizontalSpacing = {
                    right: 0,
                    left: 0
                }, this.horizontalSpacingControls)
                for (var s = this.horizontalSpacingControls[i], n = s.length - 1; n >= 0; n--) {
                    var h = s[n];
                    h.isVisible() && (h.refreshSliderSize(t), this.horizontalSpacing[i] += h.getSize())
                }
            return I(this.containerElementPadding, {
                paddingLeft: this.horizontalSpacing.left + "px",
                paddingRight: this.horizontalSpacing.right + "px"
            }), t - this.horizontalSpacing.left - this.horizontalSpacing.right
        }, t.prototype.addFilter = function (t, i) {
            this.filters[t].push(i)
        }, t.prototype.removeFilter = function (t, i) {
            this.filters[t].push(i)
        }, t.prototype.applyFilter = function (t, i) {
            for (var s = 0; s < this.filters[t].length; s++) i = this.filters[t][s].call(this, i);
            return i
        }, t
    })), u.d("FrontendItemVimeo", (function () {
        function t(t, i, n, h, o, r) {
            if (this.state = {
                    slideVisible: !1,
                    visible: !1,
                    scroll: !1,
                    slide: !1,
                    InComplete: !1,
                    play: !1,
                    continuePlay: !1
                }, this.promise = new Promise(function (t) {
                    this._resolve = t
                }.bind(this)), this.slider = t, this.playerId = i, this.playerElement = s.getElementById(this.playerId), this.cover = this.playerElement.querySelector(".n2_ss_video_player__cover"), this.hasImage = o, this.start = r, this.parameters = d({
                    vimeourl: "//vimeo.com/144598279",
                    autoplay: "0",
                    ended: "",
                    reset: "0",
                    title: "1",
                    byline: "1",
                    portrait: "0",
                    loop: "0",
                    color: "00adef",
                    volume: "-1",
                    dnt: "0"
                }, h), 1 === parseInt(this.parameters.autoplay))
                if (navigator.userAgent.toLowerCase().indexOf("android") > -1) this.parameters.volume = 0;
                else if (n2const.isIOS) {
                this.parameters.autoplay = 0;
                try {
                    "playsInline" in f("video") && (this.parameters.autoplay = 1, this.parameters.volume = 0)
                } catch (t) {}
            }
            n2const.isLighthouse || u.r("windowLoad", this.whenLoaded.bind(this))
        }
        var i;
        return t.prototype.whenLoaded = function () {
            1 === parseInt(this.parameters.autoplay) || !this.hasImage || n2const.isMobile ? this.ready(this.initVimeoPlayer.bind(this)) : this.ready(function () {
                var t = function (e) {
                        H(i), e.preventDefault(), e.stopPropagation(), this.initVimeoPlayer(), this.safePlay()
                    }.bind(this),
                    i = [Y(this.playerElement, "click", t), Y(this.playerElement, "n2click", t)]
            }.bind(this))
        }, t.prototype.ready = function (t) {
            i || (i = new Promise((function (t) {
                var i = f("script");
                i.onload = t, i.src = "https://player.vimeo.com/api/player.js", s.head.appendChild(i)
            }))), i.then(t)
        }, t.prototype.initVimeoPlayer = function () {
            var t = f("iframe");
            t.className = "intrinsic-ignore", t.allow = "fullscreen; autoplay; encrypted-media", t.id = this.playerId + "-frame", t.src = "https://player.vimeo.com/video/" + this.parameters.vimeocode + "?autoplay=0&_video&title=" + this.parameters.title + "&byline=" + this.parameters.byline + "&background=" + this.parameters.background + "&portrait=" + this.parameters.portrait + "&color=" + this.parameters.color + "&loop=" + this.parameters.loop + ("-1" == this.parameters.quality ? "" : "&quality=" + this.parameters.quality) + "&dnt=" + this.parameters["privacy-enhanced"], t.webkitAllowFullScreen = !0, t.allowFullScreen = !0, I(t, {
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%"
            }), this.playerElement.prepend(t), this.player = new Vimeo.Player(t, {
                autoplay: !1
            }), this.promise = this.player.ready(), this.slider.stages.done("BeforeShow", function () {
                this.promise.then(this.onReady.bind(this))
            }.bind(this))
        }, t.prototype.onReady = function () {
            var t = parseFloat(this.parameters.volume);
            t >= 0 && this.setVolume(t), this.slide = this.slider.findSlideByElement(this.playerElement), this.isStatic = this.slide.isStatic();
            var i = this.playerElement.closest(".n2-ss-layer");
            this.layer = i.layer, new ResizeObserver(function (t) {
                var i = t[0].contentRect;
                if (i.width && i.height) this.state.visible || this.setState("visible", !0, !0);
                else if (this.state.visible) {
                    var s = this.state.play;
                    this.setState("visible", !1, !0), s && this.setState("continuePlay", !0)
                }
            }.bind(this)).observe(this.layer.layer), this.slide.isVisible && this.setState("slideVisible", !0, !0), q(this.slide.element, "Hidden", function () {
                var t = this.state.play;
                this.setState("slideVisible", !1, !0), t && this.setState("continuePlay", !0)
            }.bind(this)), q(this.slide.element, "Visible", function () {
                this.setState("slideVisible", !0, !0)
            }.bind(this)), this.cover && (n2const.isMobile && N(this.cover, "click", this.safePlay.bind(this)), N(i, "n2play", function () {
                u.q.to(u.MW.P(this.cover), .3, {
                    opacity: 0,
                    onComplete: function () {
                        O(this.cover)
                    }.bind(this)
                })
            }.bind(this))), this.player.on("play", function () {
                this.isStatic || B(this.slider.sliderElement, "mediaStarted", {
                    id: this.playerId
                }), j(i, "n2play")
            }.bind(this)), this.player.on("pause", function () {
                j(i, "n2pause"), this.state.continuePlay ? (this.setState("continuePlay", !1), this.setState("play", !0)) : this.setState("play", !1)
            }.bind(this)), this.player.on("ended", function () {
                this.isStatic || B(this.slider.sliderElement, "mediaEnded", {
                    id: this.playerId
                }), j(i, "n2stop"), this.setState("play", !1), "next" === this.parameters.ended && 0 == this.parameters.loop && ((s.fullscreenElement || s.webkitFullscreenElement) && (s.exitFullscreen || s.webkitExitFullscreen).call(s), this.slider.next())
            }.bind(this)), this.isStatic || (q(this.slider.sliderElement, "CurrentSlideChanged", function (e) {
                this.onCurrentSlideChange(e.detail.currentSlide)
            }.bind(this)), q(this.slider.sliderElement, "mainAnimationStart", function (e) {
                this.onCurrentSlideChange(this.slider.slides[e.detail.currentSlideIndex])
            }.bind(this))), "" !== this.parameters["scroll-pause"] ? u.ScrollTracker.add(this.playerElement, this.parameters["scroll-pause"], function () {
                this.setState("scroll", !0, !0)
            }.bind(this), function () {
                this.setState("continuePlay", !0), this.setState("scroll", !1, !0)
            }.bind(this)) : this.setState("scroll", !0, !0), this.slide.isActiveWhen() && this.setState("slide", !0, !0), 1 === parseInt(this.parameters.autoplay) && this.slider.visible(this.initAutoplay.bind(this)), this._resolve()
        }, t.prototype.onCurrentSlideChange = function (t) {
            this.slide.isActiveWhen(t) ? (1 == this.parameters.autoplay && this.setState("play", !0), this.setState("slide", !0, !0)) : (parseInt(this.parameters.reset) && this.reset(), this.setState("slide", !0, !0))
        }, t.prototype.initAutoplay = function () {
            this.setState("InComplete", !0, !0), this.isStatic ? (this.setState("play", !0), this.setState("slide", !0, !0)) : (q(this.slider.sliderElement, "mainAnimationComplete", function (e) {
                this.slide.isActiveWhen(this.slider.slides[e.detail.currentSlideIndex]) ? (this.setState("play", !0), this.setState("slide", !0, !0)) : this.setState("slide", !1, !0)
            }.bind(this)), this.slide.isActiveWhen() && (this.setState("play", !0), this.setState("slide", !0, !0)))
        }, t.prototype.setState = function (t, i, s) {
            s = s || !1, this.state[t] = i, s && (this.state.slideVisible && this.state.visible && this.state.play && this.state.slide && this.state.InComplete && this.state.scroll && this.layer.isVisible ? this.play() : this.pause(), this.state.slideVisible && this.state.visible && this.state.slide && this.layer.isVisible ? S(this.player.element, "tabindex") : m(this.player.element, "tabindex", "-1"))
        }, t.prototype.play = function () {
            B(this.slider.sliderElement, "mediaStarted", {
                id: this.playerId
            }), 0 != this.start && this.safeSetCurrentTime(this.start), this.safePlay(), this.player.getCurrentTime().then(function (t) {
                t < this.start && 0 != this.start && this.safeSetCurrentTime(this.start), this.safePlay()
            }.bind(this)).catch(function (t) {
                this.safePlay()
            }.bind(this))
        }, t.prototype.pause = function () {
            this.safePause()
        }, t.prototype.reset = function () {
            this.safeSetCurrentTime(this.start)
        }, t.prototype.setVolume = function (t) {
            this.safeCallback(function () {
                this.promise = this.player.setVolume(t)
            }.bind(this))
        }, t.prototype.safeSetCurrentTime = function (t) {
            this.safeCallback(function () {
                this.promise = this.player.setCurrentTime(t)
            }.bind(this))
        }, t.prototype.safePlay = function () {
            this.safeCallback(function () {
                this.promise = this.player.getPaused(), this.safeCallback(function (t) {
                    t && (this.promise = this.player.play())
                }.bind(this))
            }.bind(this))
        }, t.prototype.safePause = function () {
            this.safeCallback(function () {
                this.promise = this.player.getPaused(), this.safeCallback(function (t) {
                    t || (this.promise = this.player.pause())
                }.bind(this))
            }.bind(this))
        }, t.prototype.safeCallback = function (t) {
            this.promise && Promise !== o ? this.promise.then(t).catch(t) : t()
        }, t
    })), u.d("FrontendItemYouTube", (function () {
        function t(t, i, n, h) {
            this.state = {
                slideVisible: !1,
                visible: !1,
                scroll: !1,
                slide: !1,
                InComplete: !1,
                play: !1,
                continuePlay: !1
            }, this.promise = new Promise(function (t) {
                this._resolve = t
            }.bind(this)), this.slider = t, this.playerId = i, this.playerElement = s.getElementById(this.playerId), this.cover = this.playerElement.querySelector(".n2_ss_video_player__cover"), this.hasImage = h, this.parameters = d({
                youtubeurl: "//www.youtube.com/watch?v=3PPtkRU7D74",
                youtubecode: "3PPtkRU7D74",
                center: 0,
                autoplay: 1,
                ended: "",
                related: "1",
                volume: "-1",
                loop: 0,
                modestbranding: 1,
                reset: 0,
                query: [],
                playsinline: 0
            }, n), n2const.isLighthouse || u.r("windowLoad", this.whenLoaded.bind(this))
        }
        var n;
        return t.prototype.whenLoaded = function () {
            if (1 === parseInt(this.parameters.autoplay) || !this.hasImage || n2const.isMobile) this.ready(this.initYoutubePlayer.bind(this));
            else var t = function (e) {
                    H(i), e.preventDefault(), e.stopPropagation(), this.ready(function () {
                        this.promise.then(this.play.bind(this)), this.initYoutubePlayer()
                    }.bind(this))
                }.bind(this),
                i = [Y(this.playerElement, "click", t), Y(this.playerElement, "n2click", t)]
        }, t.prototype.ready = function (t) {
            if (!n && (n = new Promise((function (t) {
                    var s;
                    (s = i._EPYT_ !== o ? function () {
                        !0 === i._EPADashboard_.initStarted ? t() : r(s, 100)
                    } : function () {
                        i.YT !== o && i.YT.loaded ? t() : r(s, 100)
                    })()
                })), i.YT === o)) {
                var h = f("script");
                h.src = "https://www.youtube.com/iframe_api", s.head.appendChild(h)
            }
            n.then(t)
        }, t.prototype.fadeOutCover = function () {
            this.coverFadedOut === o && this.cover && (this.coverFadedOut = !0, u.q.to(u.MW.P(this.cover), .3, {
                opacity: 0,
                onComplete: function () {
                    O(this.cover)
                }.bind(this)
            }))
        }, t.prototype.initYoutubePlayer = function () {
            var t = this.playerElement.closest(".n2-ss-layer");
            this.layer = t.layer, this.cover && (n2const.isMobile && N(this.cover, "click", this.play.bind(this)), N(t, "n2play", this.fadeOutCover.bind(this))), this.slide = this.slider.findSlideByElement(this.playerElement), this.isStatic = this.slide.isStatic();
            var n = {
                enablejsapi: 1,
                origin: i.location.protocol + "//" + i.location.host,
                wmode: "opaque",
                rel: 1 - this.parameters.related,
                start: this.parameters.start,
                end: this.parameters.end,
                modestbranding: this.parameters.modestbranding,
                playsinline: this.parameters.playsinline
            };
            if (1 === parseInt(this.parameters.autoplay))
                if (navigator.userAgent.toLowerCase().indexOf("android") > -1) this.parameters.volume = 0;
                else if (n2const.isIOS) {
                this.parameters.autoplay = 0;
                try {
                    "playsInline" in f("video") && (this.parameters.autoplay = 1, this.parameters.volume = 0, n.playsinline = 1)
                } catch (t) {}
            }
            for (var h in n2const.isIOS && this.parameters.controls && (n.use_native_controls = 1), 1 == this.parameters.center && (n.controls = 0), 1 != this.parameters.controls && (n.autohide = 1, n.controls = 0), +(navigator.platform.toUpperCase().indexOf("MAC") >= 0 && navigator.userAgent.search("Firefox") > -1) && (n.html5 = 1), this.parameters.query) this.parameters.query.hasOwnProperty(h) && (n[h] = this.parameters.query[h]);
            var o = {
                videoId: this.parameters.youtubecode,
                wmode: "opaque",
                playerVars: n,
                events: {
                    onReady: this.onReady.bind(this),
                    onStateChange: function (i) {
                        switch (i.data) {
                            case YT.PlayerState.PLAYING:
                            case YT.PlayerState.BUFFERING:
                                this.isStatic || this.slide.isActiveWhen(this.slider.currentSlide) && B(this.slider.sliderElement, "mediaStarted", {
                                    id: this.playerId
                                }), j(t, "n2play");
                                break;
                            case YT.PlayerState.PAUSED:
                                j(t, "n2pause"), this.state.continuePlay ? (this.setState("continuePlay", !1), this.setState("play", !0)) : this.setState("play", !1);
                                break;
                            case YT.PlayerState.ENDED:
                                1 == this.parameters.loop ? (this.player.seekTo(this.parameters.start), this.player.playVideo()) : (this.isStatic || B(this.slider.sliderElement, "mediaEnded", {
                                    id: this.playerId
                                }), j(t, "n2stop"), this.setState("play", !1), "next" === this.parameters.ended && ((s.fullscreenElement || s.webkitFullscreenElement) && (s.exitFullscreen || s.webkitExitFullscreen).call(s), this.slider.next()))
                        }
                    }.bind(this)
                }
            };
            (this.parameters["privacy-enhanced"] || i.jQuery && i.jQuery.fn.revolution) && (o.host = "https://www.youtube-nocookie.com"), this.player = new YT.Player(this.playerId + "-frame", o), 1 == this.parameters.center && (P(this.playerElement.parentNode, "overflow", "hidden"), this.onResize(), q(this.slider.sliderElement, "SliderResize", this.onResize.bind(this)))
        }, t.prototype.onReady = function () {
            this.slider.stages.done("BeforeShow", this.onBeforeShow.bind(this))
        }, t.prototype.onBeforeShow = function () {
            var t = parseFloat(this.parameters.volume);
            t > 0 ? this.setVolume(t) : -1 !== t && this.player.mute(), new ResizeObserver(function (t) {
                var i = t[0].contentRect;
                if (i.width && i.height) this.state.visible || this.setState("visible", !0, !0);
                else if (this.state.visible) {
                    var s = this.state.play;
                    this.setState("visible", !1, !0), s && this.setState("continuePlay", !0)
                }
            }.bind(this)).observe(this.layer.layer), this.slide.isVisible && this.setState("slideVisible", !0, !0), q(this.slide.element, "Hidden", function () {
                var t = this.state.play;
                this.setState("slideVisible", !1, !0), t && this.setState("continuePlay", !0)
            }.bind(this)), q(this.slide.element, "Visible", function () {
                this.setState("slideVisible", !0, !0)
            }.bind(this)), this.slide.isActiveWhen() && this.setState("slide", !0, !0), 1 == this.parameters.autoplay && this.slider.visible(this.initAutoplay.bind(this)), this.isStatic || (q(this.slider.sliderElement, "CurrentSlideChanged", function (e) {
                this.onCurrentSlideChange(e.detail.currentSlide)
            }.bind(this)), q(this.slider.sliderElement, "mainAnimationStart", function (e) {
                this.onCurrentSlideChange(this.slider.slides[e.detail.currentSlideIndex])
            }.bind(this)), parseInt(this.parameters.reset) && q(this.slider.sliderElement, "mainAnimationComplete", function (e) {
                this.slide.isActiveWhen(this.slider.slides[e.detail.currentSlideIndex]) || 0 !== this.player.getCurrentTime() && this.player.seekTo(this.parameters.start)
            }.bind(this))), this._resolve(), "" !== this.parameters["scroll-pause"] ? u.ScrollTracker.add(this.playerElement, this.parameters["scroll-pause"], function () {
                this.setState("scroll", !0, !0)
            }.bind(this), function () {
                this.setState("continuePlay", !0), this.setState("scroll", !1, !0)
            }.bind(this)) : this.setState("scroll", !0, !0)
        }, t.prototype.onCurrentSlideChange = function (t) {
            var i = this.slide.isActiveWhen(t);
            i && 1 == this.parameters.autoplay && this.setState("play", !0), this.setState("slide", i, !0)
        }, t.prototype.onResize = function () {
            var t = this.playerElement.parentNode.getBoundingClientRect(),
                i = t.width,
                s = t.height + 100,
                n = 16 / 9,
                h = {
                    width: i + "px",
                    height: s + "px",
                    "margin-top": 0
                };
            h[n2const.rtl["margin-left"]] = 0, i / s > n ? (h.height = i * n + "px", h["margin-top"] = (s - i * n) / 2 + "px") : (h.width = s * n + "px", h[n2const.rtl["margin-left"]] = (i - s * n) / 2 + "px"), I(this.playerElement, h)
        }, t.prototype.initAutoplay = function () {
            this.setState("InComplete", !0, !0), this.isStatic ? (this.setState("play", !0), this.setState("slide", !0, !0)) : (q(this.slider.sliderElement, "mainAnimationComplete", function (e) {
                this.slide.isActiveWhen(this.slider.slides[e.detail.currentSlideIndex]) ? (this.setState("play", !0), this.setState("slide", !0, !0)) : this.setState("slide", !1, !0)
            }.bind(this)), this.slide.isActiveWhen() && (this.setState("play", !0), this.setState("slide", !0, !0)))
        }, t.prototype.setState = function (t, i, s) {
            s = s || !1, this.state[t] = i, s && (this.state.slideVisible && this.state.visible && this.state.play && this.state.slide && this.state.InComplete && this.state.scroll ? this.play() : this.pause())
        }, t.prototype.play = function () {
            this.isStopped() && (this.coverFadedOut === o && r(this.fadeOutCover.bind(this), 200), B(this.slider.sliderElement, "mediaStarted", {
                id: this.playerId
            }), this.player.playVideo())
        }, t.prototype.pause = function () {
            this.isStopped() || this.player.pauseVideo()
        }, t.prototype.stop = function () {
            this.player.stopVideo()
        }, t.prototype.isStopped = function () {
            switch (this.player.getPlayerState()) {
                case -1:
                case 2:
                case 5:
                    return !0;
                default:
                    return !1
            }
        }, t.prototype.setVolume = function (t) {
            this.player.setVolume(100 * t)
        }, t
    })), u.d("smartslider-frontend")
})(window);
