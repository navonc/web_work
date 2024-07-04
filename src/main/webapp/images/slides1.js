(function () { !function ($, t, i) { var e, s, n; return n = "slidesjs", s = { width: 940, height: 528, start: 1, navigation: { active: !0, effect: "slide" }, pagination: { active: !0, effect: "slide" }, play: { active: !1, effect: "slide", interval: 5e3, auto: !1, swap: !0, pauseOnHover: !1, restartDelay: 2500 }, effect: { slide: { speed: 500 }, fade: { speed: 300, crossfade: !0 } }, callback: { loaded: function () { }, start: function () { }, complete: function () { } } }, e = function () { function t(t, i) { this.element = t, this.options = $.extend(!0, {}, s, i), this._defaults = s, this._name = n, this.init() } return t }(), e.prototype.init = function () { var i, e, s, n, a, o, d = this; return i = $(this.element), this.data = $.data(this), $.data(this, "animating", !1), $.data(this, "total", i.children().not(".slidesjs-navigation", i).length), $.data(this, "current", this.options.start - 1), $.data(this, "vendorPrefix", this._getVendorPrefix()), "undefined" != typeof TouchEvent && ($.data(this, "touch", !0), this.options.effect.slide.speed = this.options.effect.slide.speed / 2), i.css({ overflow: "hidden" }), i.slidesContainer = i.children().not(".slidesjs-navigation", i).wrapAll("<div class='slidesjs-container'>", i).parent().css({ overflow: "hidden", position: "relative" }), $(".slidesjs-container", i).wrapInner("<div class='slidesjs-control'>", i).children(), $(".slidesjs-control", i).css({ position: "relative", left: 0 }), $(".slidesjs-control", i).children().addClass("slidesjs-slide").css({ position: "absolute", top: 0, left: 0, width: "100%", zIndex: 0, display: "none" }), $.each($(".slidesjs-control", i).children(), function (t) { var i; return i = $(this), i.attr("slidesjs-index", t) }), this.data.touch && ($(".slidesjs-control", i).on("touchstart", function (t) { return d._touchstart(t) }), $(".slidesjs-control", i).on("touchmove", function (t) { return d._touchmove(t) }), $(".slidesjs-control", i).on("touchend", function (t) { return d._touchend(t) })), i.fadeIn(0), this.update(), this.data.touch && this._setuptouch(), $(".slidesjs-control", i).children(":eq(" + this.data.current + ")").eq(0).fadeIn(0, function () { return $(this).css({ zIndex: 10 }) }), this.options.navigation.active && (a = $("<a>", { "class": "slidesjs-previous slidesjs-navigation", href: "#", title: "", text: "" }).appendTo(i), e = $("<a>", { "class": "slidesjs-next slidesjs-navigation", href: "#", title: "", text: "" }).appendTo(i)), $(".slidesjs-next", i).click(function (t) { return t.preventDefault(), d.stop(!0), d.next(d.options.navigation.effect) }), $(".slidesjs-previous", i).click(function (t) { return t.preventDefault(), d.stop(!0), d.previous(d.options.navigation.effect) }), this.options.play.active && (n = $("<a>", { "class": "slidesjs-play slidesjs-navigation", href: "#", title: "鎾斁", text: "鎾斁" }).appendTo(i), o = $("<a>", { "class": "slidesjs-stop slidesjs-navigation", href: "#", title: "鏆傚仠", text: "鏆傚仠" }).appendTo(i), n.click(function (t) { return t.preventDefault(), d.play(!0) }), o.click(function (t) { return t.preventDefault(), d.stop(!0) }), this.options.play.swap && o.css({ display: "none" })), this.options.pagination.active && (s = $("<ul>", { "class": "slidesjs-pagination" }).appendTo(i), $.each(new Array(this.data.total), function (t) { var i, e; return i = $("<li>", { "class": "slidesjs-pagination-item" }).appendTo(s), e = $("<a>", { href: "#", "data-slidesjs-item": t, html: t + 1 }).appendTo(i), e.click(function (t) { return t.preventDefault(), d.stop(!0), d.goto(1 * $(t.currentTarget).attr("data-slidesjs-item") + 1) }) })), $(t).bind("resize", function () { return d.update() }), this._setActive(), this.options.play.auto && this.play(), this.options.callback.loaded(this.options.start) }, e.prototype._setActive = function (t) { var i, e; return i = $(this.element), this.data = $.data(this), e = t > -1 ? t : this.data.current, $(".active", i).removeClass("active"), $(".slidesjs-pagination li:eq(" + e + ") a", i).addClass("active") }, e.prototype.update = function () { var t, i, e; return t = $(this.element), this.data = $.data(this), $(".slidesjs-control", t).children(":not(:eq(" + this.data.current + "))").css({ display: "none", left: 0, zIndex: 0 }), e = t.width(), i = this.options.height / this.options.width * e, this.options.width = e, this.options.height = i, $(".slidesjs-control, .slidesjs-container", t).css({ width: e, height: i }) }, e.prototype.next = function (t) { var i; return i = $(this.element), this.data = $.data(this), $.data(this, "direction", "next"), void 0 === t && (t = this.options.navigation.effect), "fade" === t ? this._fade() : this._slide() }, e.prototype.previous = function (t) { var i; return i = $(this.element), this.data = $.data(this), $.data(this, "direction", "previous"), void 0 === t && (t = this.options.navigation.effect), "fade" === t ? this._fade() : this._slide() }, e.prototype.goto = function (t) { var i, e; if (i = $(this.element), this.data = $.data(this), void 0 === e && (e = this.options.pagination.effect), t > this.data.total ? t = this.data.total : 1 > t && (t = 1), "number" == typeof t) return "fade" === e ? this._fade(t) : this._slide(t); if ("string" == typeof t) { if ("first" === t) return "fade" === e ? this._fade(0) : this._slide(0); if ("last" === t) return "fade" === e ? this._fade(this.data.total) : this._slide(this.data.total) } }, e.prototype._setuptouch = function () { var t, i, e, s; return t = $(this.element), this.data = $.data(this), s = $(".slidesjs-control", t), i = this.data.current + 1, e = this.data.current - 1, 0 > e && (e = this.data.total - 1), i > this.data.total - 1 && (i = 0), s.children(":eq(" + i + ")").css({ display: "block", left: this.options.width }), s.children(":eq(" + e + ")").css({ display: "block", left: -this.options.width }) }, e.prototype._touchstart = function (t) { var i, e; return i = $(this.element), this.data = $.data(this), e = t.originalEvent.touches[0], this._setuptouch(), $.data(this, "touchtimer", Number(new Date)), $.data(this, "touchstartx", e.pageX), $.data(this, "touchstarty", e.pageY), t.stopPropagation() }, e.prototype._touchend = function (t) { var i, e, s, n, a, o, d, r = this; return i = $(this.element), this.data = $.data(this), o = t.originalEvent.touches[0], n = $(".slidesjs-control", i), n.position().left > .5 * this.options.width || n.position().left > .1 * this.options.width && Number(new Date) - this.data.touchtimer < 250 ? ($.data(this, "direction", "previous"), this._slide()) : n.position().left < -(.5 * this.options.width) || n.position().left < -(.1 * this.options.width) && Number(new Date) - this.data.touchtimer < 250 ? ($.data(this, "direction", "next"), this._slide()) : (s = this.data.vendorPrefix, d = s + "Transform", e = s + "TransitionDuration", a = s + "TransitionTimingFunction", n[0].style[d] = "translateX(0px)", n[0].style[e] = .85 * this.options.effect.slide.speed + "ms"), n.on("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd", function () { return s = r.data.vendorPrefix, d = s + "Transform", e = s + "TransitionDuration", a = s + "TransitionTimingFunction", n[0].style[d] = "", n[0].style[e] = "", n[0].style[a] = "" }), t.stopPropagation() }, e.prototype._touchmove = function (t) { var i, e, s, n, a; return i = $(this.element), this.data = $.data(this), n = t.originalEvent.touches[0], e = this.data.vendorPrefix, s = $(".slidesjs-control", i), a = e + "Transform", $.data(this, "scrolling", Math.abs(n.pageX - this.data.touchstartx) < Math.abs(n.pageY - this.data.touchstarty)), this.data.animating || this.data.scrolling || (t.preventDefault(), this._setuptouch(), s[0].style[a] = "translateX(" + (n.pageX - this.data.touchstartx) + "px)"), t.stopPropagation() }, e.prototype.play = function (t) { var i, e, s, n = this; return i = $(this.element), this.data = $.data(this), !this.data.playInterval && (t && (e = this.data.current, this.data.direction = "next", "fade" === this.options.play.effect ? this._fade() : this._slide()), $.data(this, "playInterval", setInterval(function () { return e = n.data.current, n.data.direction = "next", "fade" === n.options.play.effect ? n._fade() : n._slide() }, this.options.play.interval)), s = $(".slidesjs-container", i), this.options.play.pauseOnHover && (s.unbind(), s.bind("mouseenter", function () { return n.stop() }), s.bind("mouseleave", function () { return n.options.play.restartDelay ? $.data(n, "restartDelay", setTimeout(function () { return n.play(!0) }, n.options.play.restartDelay)) : n.play() })), $.data(this, "playing", !0), $(".slidesjs-play", i).addClass("slidesjs-playing"), this.options.play.swap) ? ($(".slidesjs-play", i).hide(), $(".slidesjs-stop", i).show()) : void 0 }, e.prototype.stop = function (t) { var i; return i = $(this.element), this.data = $.data(this), clearInterval(this.data.playInterval), this.options.play.pauseOnHover && t && $(".slidesjs-container", i).unbind(), $.data(this, "playInterval", null), $.data(this, "playing", !1), $(".slidesjs-play", i).removeClass("slidesjs-playing"), this.options.play.swap ? ($(".slidesjs-stop", i).hide(), $(".slidesjs-play", i).show()) : void 0 }, e.prototype._slide = function (t) { var i, e, s, n, a, o, d, r, l, h, c = this; return i = $(this.element), this.data = $.data(this), this.data.animating || t === this.data.current + 1 ? void 0 : ($.data(this, "animating", !0), e = this.data.current, t > -1 ? (t -= 1, h = t > e ? 1 : -1, s = t > e ? -this.options.width : this.options.width, a = t) : (h = "next" === this.data.direction ? 1 : -1, s = "next" === this.data.direction ? -this.options.width : this.options.width, a = e + h), -1 === a && (a = this.data.total - 1), a === this.data.total && (a = 0), this._setActive(a), d = $(".slidesjs-control", i), t > -1 && d.children(":not(:eq(" + e + "))").css({ display: "none", left: 0, zIndex: 0 }), d.children(":eq(" + a + ")").css({ display: "block", left: h * this.options.width, zIndex: 10 }), this.options.callback.start(e + 1), this.data.vendorPrefix ? (o = this.data.vendorPrefix, l = o + "Transform", n = o + "TransitionDuration", r = o + "TransitionTimingFunction", d[0].style[l] = "translateX(" + s + "px)", d[0].style[n] = this.options.effect.slide.speed + "ms", d.on("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd", function () { return d[0].style[l] = "", d[0].style[n] = "", d.children(":eq(" + a + ")").css({ left: 0 }), d.children(":eq(" + e + ")").css({ display: "none", left: 0, zIndex: 0 }), $.data(c, "current", a), $.data(c, "animating", !1), d.unbind("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd"), d.children(":not(:eq(" + a + "))").css({ display: "none", left: 0, zIndex: 0 }), c.data.touch && c._setuptouch(), c.options.callback.complete(a + 1) })) : d.stop().animate({ left: s }, this.options.effect.slide.speed, function () { return d.css({ left: 0 }), d.children(":eq(" + a + ")").css({ left: 0 }), d.children(":eq(" + e + ")").css({ display: "none", left: 0, zIndex: 0 }, $.data(c, "current", a), $.data(c, "animating", !1), c.options.callback.complete(a + 1)) })) }, e.prototype._fade = function (t) { var i, e, s, n, a, o = this; return i = $(this.element), this.data = $.data(this), this.data.animating || t === this.data.current + 1 ? void 0 : ($.data(this, "animating", !0), e = this.data.current, t ? (t -= 1, a = t > e ? 1 : -1, s = t) : (a = "next" === this.data.direction ? 1 : -1, s = e + a), -1 === s && (s = this.data.total - 1), s === this.data.total && (s = 0), this._setActive(s), n = $(".slidesjs-control", i), n.children(":eq(" + s + ")").css({ display: "none", left: 0, zIndex: 10 }), this.options.callback.start(e + 1), this.options.effect.fade.crossfade ? (n.children(":eq(" + this.data.current + ")").stop().fadeOut(this.options.effect.fade.speed), n.children(":eq(" + s + ")").stop().fadeIn(this.options.effect.fade.speed, function () { return n.children(":eq(" + s + ")").css({ zIndex: 0 }), $.data(o, "animating", !1), $.data(o, "current", s), o.options.callback.complete(s + 1) })) : n.children(":eq(" + e + ")").stop().fadeOut(this.options.effect.fade.speed, function () { return n.children(":eq(" + s + ")").stop().fadeIn(o.options.effect.fade.speed, function () { return n.children(":eq(" + s + ")").css({ zIndex: 10 }) }), $.data(o, "animating", !1), $.data(o, "current", s), o.options.callback.complete(s + 1) })) }, e.prototype._getVendorPrefix = function () { var t, e, s, n, a; for (t = i.body || i.documentElement, s = t.style, n = "transition", a = ["Moz", "Webkit", "Khtml", "O", "ms"], n = n.charAt(0).toUpperCase() + n.substr(1), e = 0; e < a.length;) { if ("string" == typeof s[a[e] + n]) return a[e]; e++ } return !1 }, $.fn[n] = function (t) { return this.each(function () { return $.data(this, "plugin_" + n) ? void 0 : $.data(this, "plugin_" + n, new e(this, t)) }) } }(jQuery, window, document) }).call(this);