! function(e) {
  function t(o) {
    if (n[o]) return n[o].exports;
    var i = n[o] = {
      i: o,
      l: !1,
      exports: {}
    };
    return e[o].call(i.exports, i, i.exports, t), i.l = !0, i.exports
  }
  var n = {};
  t.m = e, t.c = n, t.i = function(e) {
    return e
  }, t.d = function(e, n, o) {
    t.o(e, n) || Object.defineProperty(e, n, {
      configurable: !1,
      enumerable: !0,
      get: o
    })
  }, t.n = function(e) {
    var n = e && e.__esModule ? function() {
      return e.default
    } : function() {
      return e
    };
    return t.d(n, "a", n), n
  }, t.o = function(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
  }, t.p = "", t(t.s = 222)
}({
  10: function(e, t, n) {
    "use strict";
    e.exports = {
      aimAwarenessContainer: $(".aim-awareness-container"),
      content: $(".n-menu--mega__content"),
      column1: $(".n-menu--mega__content--col-1"),
      column2: $(".n-menu--mega__content--col-2"),
      column3: $(".n-menu--mega__content--col-3"),
      correctivePadding: $(".n-menu--mega__footer-nav__corrective-padding"),
      defaultContentContainer: $(".n-menu--mega__default-content-container"),
      subnavListItems: $(".n-menu--mega__sub-navigation > li"),
      subnavListAnchors: $(".n-menu--mega__sub-navigation > li > a"),
      subnav: $(".n-menu--mega__sub-navigation"),
      aimColor_0: "rgba(255, 0, 0, 0)",
      aimColor_1: "rgba(255, 0, 0, 0)",
      navDisabled: !1,
      lastMouseXPosition: 0,
      initializeMenu: function() {
        var e = this;
        e.subnavListAnchors.on("mouseenter", $.proxy(e.onSubNavListAnchorMouseInteraction, e)), e.subnavListAnchors.on("mouseleave", $.proxy(e.onSubNavListAnchorMouseInteraction, e)), e.subnavListAnchors.on("mousemove", $.proxy(e.onSubNavListAnchorMouseInteraction, e)), e.subnavListAnchors.on("click", $.proxy(e.onSubNavListAnchorClick, e)), e.subnav.on("mouseleave", $.proxy(e.enableNav, e)), e.subnav.on("mousemove", $.proxy(e.onSubNavMouseMove, e)), $(window).resize($.proxy(e.onWindowResize, e)), $(".n-menu--mega a").on("click", $.proxy(e.onMegaMenuAnchorClick, e)), $(".n-menu--mega").on("click", $.proxy(e.onMegaMenuClick, e))
      },
      updateColumnDividers: function() {
        var e = this;
        e.content.css("height", "auto"), e.column1.css("height", "auto"), e.column2.css("height", "auto"), e.column3.css("height", "auto"), e.correctivePadding.css("height", "0px");
        var t, n = $(".n-property-navigation-bar__menus--desktop-experience .n-menu--mega__sub-navigation").innerHeight() + $(".n-property-navigation-bar__menus--desktop-experience .n-menu--mega__footer-nav").outerHeight();
        t = n;
        var o = $(".n-property-navigation-bar__menus--desktop-experience .n-menu--mega__sub-navigation li.active"),
          i = $(o).find(".n-menu--mega__content--col-1").innerHeight(),
          a = $(o).find(".n-menu--mega__content--col-2").innerHeight(),
          s = $(o).find(".n-menu--mega__content--col-3").innerHeight();
        t < i && (t = i), t < a && (t = a), t < s && (t = s), e.content.css("height", t), e.correctivePadding.css("height", t - n + "px");
        var r = 0;
        e.subnavListItems.each(function(e) {
          r += $(this).height();
          var t = "-" + r + "px";
          $(this).find(".n-menu--mega__content-container").css("top", t)
        }), e.aimAwarenessContainer.attr("width", e.subnav.width()), e.aimAwarenessContainer.attr("height", e.subnav.height())
      },
      hideDefaultContent: function() {
        this.defaultContentContainer.hide()
      },
      showDefaultContent: function() {
        this.defaultContentContainer.show()
      },
      resetMenu: function() {
        var e = this;
        e.subnavListItems.removeClass("active"), e.defaultContentContainer.show(), e.aimAwarenessContainer.attr("width", e.subnav.width()), e.aimAwarenessContainer.attr("height", $(".n-menu--mega > .n-container:first-child").height())
      },
      isMobileView: function() {
        return !$(".n-top-hat").is(":visible")
      },
      resetColumnDividers: function() {
        var e = this;
        e.content.css("height", "auto"), $(".n-menu--mega__content-container").css("top", "0px"), e.column1.css("height", "auto"), e.column2.css("height", "auto"), e.column3.css("height", "auto")
      },
      isTouchEnabledDevice: function() {
        return "ontouchstart" in window
      },
      onSubNavListAnchorMouseInteraction: function(e) {
        var t = this;
        if (t.aimAwarenessBounds = $(".aim-awareness-container")[0].getBoundingClientRect(), !t.isMobileView())
          if ("mouseleave" === e.type) {
            if (!t.navDisabled) {
              var n = Math.floor((e.clientX - t.aimAwarenessBounds.left) / (t.aimAwarenessBounds.right - t.aimAwarenessBounds.left) * t.aimAwarenessContainer.width()),
                o = Math.floor((e.clientY - t.aimAwarenessBounds.top) / (t.aimAwarenessBounds.bottom - t.aimAwarenessBounds.top) * t.aimAwarenessContainer.height());
              t.aimAwarenessContainer[0].getContext("2d").isPointInPath(n, o) && t.disableNav()
            }
          } else if ("mouseenter" !== e.type || t.navDisabled) {
          if ("mousemove" === e.type) {
            t.aimAwarenessBounds = t.aimAwarenessContainer[0].getBoundingClientRect();
            var n = Math.floor((e.clientX - t.aimAwarenessBounds.left) / (t.aimAwarenessBounds.right - t.aimAwarenessBounds.left) * t.aimAwarenessContainer.width()),
              o = Math.floor((e.clientY - t.aimAwarenessBounds.top) / (t.aimAwarenessBounds.bottom - t.aimAwarenessBounds.top) * t.aimAwarenessContainer.height());
            t.updateAimAwarenessContainer(n, o)
          }
        } else t.navigate($(e.target))
      },
      onSubNavMouseMove: function(e) {
        var t = this;
        if (t.aimAwarenessBounds = $(".aim-awareness-container")[0].getBoundingClientRect(), !t.isMobileView()) {
          var n = Math.floor((e.clientX - t.aimAwarenessBounds.left) / (t.aimAwarenessBounds.right - t.aimAwarenessBounds.left) * t.aimAwarenessContainer.width());
          if (t.isMouseOverSubnav(n)) {
            var o = Math.floor((e.clientY - t.aimAwarenessBounds.top) / (t.aimAwarenessBounds.bottom - t.aimAwarenessBounds.top) * t.aimAwarenessContainer.height());
            !t.aimAwarenessContainer[0].getContext("2d").isPointInPath(n, o) && t.navDisabled ? t.enableNav() : $("html").hasClass("ltr") ? n <= t.lastMouseXPosition && t.enableNav() : n >= t.lastMouseXPosition && t.enableNav(), t.lastMouseXPosition = n
          }
        }
      },
      updateAimAwarenessContainer: function(e, t, n) {
        var o = this;
        o.aimAwarenessContainer[0].getContext("2d").clearRect(0, 0, o.aimAwarenessContainer.width(), o.aimAwarenessContainer.height()), o.aimAwarenessContainer[0].getContext("2d").fillStyle = o.aimColor_0, o.aimAwarenessContainer[0].getContext("2d").beginPath(), o.aimAwarenessContainer[0].getContext("2d").moveTo(e, t), o.navDisabled && (o.aimAwarenessContainer[0].getContext("2d").fillStyle = o.aimColor_1), $("html").hasClass("ltr") ? (o.aimAwarenessContainer[0].getContext("2d").lineTo(o.aimAwarenessContainer.width(), 0), o.aimAwarenessContainer[0].getContext("2d").lineTo(o.aimAwarenessContainer.width(), o.subnav.height())) : (o.aimAwarenessContainer[0].getContext("2d").lineTo(0, 0), o.aimAwarenessContainer[0].getContext("2d").lineTo(0, o.subnav.height())), o.aimAwarenessContainer[0].getContext("2d").fill()
      },
      onWindowResize: function() {
        var e = this;
        e.isMobileView() ? e.resetColumnDividers() : e.updateColumnDividers()
      },
      isMouseOverSubnav: function(e) {
        var t = this;
        return $("html").hasClass("ltr") ? e <= t.aimAwarenessContainer.width() : e >= 0
      },
      onSubNavListAnchorClick: function(e) {
        return this.navigate($(e.target)), !1
      },
      navigate: function(e) {
        var t = this;
        e.parent().hasClass("active") ? t.isMobileView() && e.parent().removeClass("active") : (t.isMobileView() || t.subnavListItems.removeClass("active"), e.parent().addClass("active"), t.isMobileView() ? t.resetColumnDividers() : t.updateColumnDividers(), t.hideDefaultContent())
      },
      disableNav: function() {
        var e = this;
        this.isMobileView() || this.isTouchEnabledDevice() || (e.navDisabled = !0, $(".n-menu--mega__sub-navigation > li").css("pointer-events", "none"))
      },
      enableNav: function() {
        this.navDisabled = !1, $(".n-menu--mega__sub-navigation > li").css("pointer-events", "auto")
      },
      onMegaMenuAnchorClick: function(e) {
        e.stopPropagation()
      },
      onMegaMenuClick: function(e) {
        var t = this;
        e.stopPropagation(), t.isMobileView() || t.resetMenu()
      }
    }
  },
  115: function(e, t, n) {
    "use strict";
    t.smoothScroll = function() {
      function e(e) {
        var t;
        t = $(window).innerWidth() < 1100 ? 0 : $(".n-property-bar").innerHeight(), $("html,body").animate({
          scrollTop: e.offset().top - t
        }, 1e3)
      }
      $(window).on("load", function() {
        if (window.location.hash && !/:/.test(window.location.hash) && !/#\//.test(window.location.hash)) {
          var t = $(window.location.hash);
          t.length ? e(t) : console.log("WARNING: " + window.location.hash + " does not exist on this page.")
        }
      }), $('[href^="#"]').not('[href="#"], .tabsBar .tab a').click(function(t) {
        t.preventDefault(), history.pushState ? history.pushState(null, null, $(this).attr("href")) : location.hash = $(this).attr("href"), e($(this.hash))
      })
    }
  },
  116: function(e, t, n) {
    "use strict";

    function o() {
      var e = $(".n-anchor-nav__list-more-button"),
        t = $("li.n-anchor-nav__list-item:nth-last-child(2)");
      t.is(":visible") ? (e.css("display", "none"), t.css("border-right", "none")) : (e.css("display", "block"), t.css("border-right", "1px solid #d8d8d8;"))
    }
    $("document").ready(function() {
      $("a.n-anchor-nav__list-more-button").click(function() {
        $(this).next(".dropdown").slideToggle("fast")
      }), $(document).on("click", function(e) {
        $(".dropdown-toggle").is(e.target) || $(".dropdown-toggle").has(e.target).length || $(".dropdown").slideUp("fast")
      }), o(), $(window).resize(o)
    })
  },
  117: function(e, t, n) {
    "use strict";
    var o = n(220),
      i = n(221),
      a = (n(41), n(28)),
      s = n(133),
      r = window.location.protocol + "//" + window.location.host,
      c = (window.location.host, o()),
      l = e.exports = {
        init: function() {}
      }
  },
  118: function(e, t, n) {
    "use strict";

    function o() {
      var e, t = document.getElementsByClassName("n-card_expcoll n-card"),
        n = document.getElementById("expandall");
      if (n.classList.contains("unclicked"))
        for (n.classList.remove("unclicked"), n.classList.add("clicked"), e = 0; e < t.length; e++) 1 != t[e].classList.contains("active") && (t[e].classList.add("active"), t[e].nextElementSibling.style.display = "block");
      else
        for (n.classList.remove("clicked"), n.classList.add("unclicked"), e = 0; e < t.length; e++) 1 == t[e].classList.contains("active") && (t[e].classList.remove("active"), t[e].nextElementSibling.style.display = "none")
    }
    var i, a = document.getElementsByClassName("n-card_expcoll n-card");
    for (i = 0; i < a.length; i++) a[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var e = this.nextElementSibling;
      "block" === e.style.display ? e.style.display = "none" : e.style.display = "block"
    });
    var s = document.getElementById("expandall");
    $(document).ready(function() {
      if(s != null) {
        s.addEventListener("click", o, !1);
      }
    })
  },
  123: function(e, t, n) {
    "use strict";
    e.exports = {
      init: function() {
        $(".n-image-band").length && $(window).on("load scroll resize", function() {
          $(".n-image-band").not(".n-image-band-animated").each(function() {
            $(window).scrollTop() + $(window).height() >= $(this).position().top + window.innerHeight / 2 && $(window).scrollTop() < $(this).position().top + window.innerHeight / 2 + $(this).height() && $(this).addClass("n-image-band-animated")
          })
        })
      }
    }
  },
  124: function(e, t, n) {
    "use strict";

    function o() {
      function e(e) {
        e.classList.contains(o) ? e.classList.remove(o) : e.classList.add(o)
      }

      function t() {
        e(this)
      }
      var n = document.querySelectorAll(".luci-tooltip"),
        o = "luci-tooltip--visible";
      n.forEach(function(e) {
        e.addEventListener("click", t)
      })
    }
    e.exports.luciTooltip = o
  },
  125: function(e, t, n) {
    "use strict";
    e.exports = {
      init: function() {
        function e(e, t) {
          s = $("#" + e), r = String("techValidateBandIndex-" + e), "undefined" != typeof Storage && n() ? (null === localStorage.getItem(r) ? localStorage.setItem(r, 0) : localStorage.setItem(r, Number(localStorage.getItem(r)) + s.find(".techvalidate-quote-tile").length), o(t, Number(localStorage.getItem(r)))) : (localStorage.clear(), o(a(t), 0))
        }

        function t(e) {
          for (var t = e + "=", n = document.cookie.split(";"), o = 0; o < n.length; o++) {
            var i = $.trim(n[o]);
            if (0 == i.indexOf(t)) return i.substring(t.length, i.length)
          }
          return ""
        }

        function n() {
          return !t("gdpr-cookie") || !t("gdpr-cookie").startsWith("false")
        }

        function o(e, t) {
          s.find(".techvalidate-quote-tile").each(function(n) {
            var o = $(this),
              a = t + n;
            a >= e.length && (a %= e.length), o.find(".techvalidate-quote-tile__rating").attr("title", e[a].rating + " stars").html(i(e[a].rating)), o.find(".techvalidate-quote-tile__quote").attr("cite", e[a].tvidURL).find("span").html(e[a].quote), o.find(".techvalidate-quote-tile__source").append(e[a].source), o.find(".techvalidate-quote-tile__citation a").attr("href", e[a].tvidURL).html(e[a].tvidURL.split("/").pop())
          })
        }

        function i(e) {
          for (var t = Number(e.split("/")[0]), n = Number(e.split("/").pop()), o = "", i = 1; i <= n; i++) o += i <= t ? '<svg class="techvalidate-quote-tile__star"><use xlink:href="/us/static/svg/luci/sprite.svg#star-full"></use></svg>' : i - .5 === t ? '<svg class="techvalidate-quote-tile__star"><use xlink:href="/us/static/svg/luci/sprite.svg#star-half"></use></svg>' : '<svg class="techvalidate-quote-tile__star"><use xlink:href="/us/static/svg/luci/sprite.svg#star-empty"></use></svg>';
          return o
        }

        function a(e) {
          for (var t, n, o = e.length; 0 !== o;) n = Math.floor(Math.random() * o), o -= 1, t = e[o], e[o] = e[n], e[n] = t;
          return e
        }
        var s, r;
        $(document).ready(function() {
          $(".techvalidate-quote-band").each(function() {
            var t = $(this).attr("id");
            e(t, window[t + "_data"])
          })
        })
      }
    }
  },
  126: function(e, t, n) {
    "use strict";

    function o() {
      console.log("in inline video partial"), $('video[id^="vjs_video"]').each(function(e, t) {
        var n = videojs(t.id);
        i(n, $(t.parentElement))
      })
    }
    var i = n(90).displayVideoOverlays;
    e.exports.initializeInlineVideoPlayer = o
  },
  127: function(e, t, n) {
    "use strict";

    function o() {
      var e = {
          videoId: "5394090523001",
          accountId: "260701648001",
          playerId: "H1aPowife",
          videoNumber: "video-1",
          muted: !1,
          autoplay: !1
        },
        t = $(this).data("ntapUi").options;
      e = $.extend(e, t);
      var n = '<video id="' + e.videoNumber + '" data-video-id="' + e.videoId + '"  data-account="' + e.accountId + '" data-player="' + e.playerId + '" data-embed="default" class="video-js n-video-controller" controls></video>';
      $("#n-video-placeholder").html(n);
      var o = "//players.brightcove.net/" + e.accountId + "/" + e.playerId + "_default/index.min.js";
      "#n-video-placeholder script".length <= 0 && $("#n-video-placeholder").after("<script>" + o + "<\/script>"), $.getScript(o).done(function(t, n) {
        i(e, JSON.parse(e.muted))
      }).fail(function(e, t, n) {
        console.log("loading script failed.")
      })
    }

    function i(e, t) {
      var n = videojs(e.videoNumber);
      !0 === t && !1 === l && (n.muted(!0), l = !0);
      var o = $("div#" + e.videoNumber);
      r(n, o), n.play()
    }

    function a() {
      if (void 0 !== c.data("ntapUi").options.autoplay) {
        if (!0 === JSON.parse(c.data("ntapUi").options.autoplay)) return !0
      }
    }

    function s() {
      if (console.log("in modal video partial"), c.length > 0) {
        c.on("click", o), c.modaal({
          fullscreen: !0
        });
        !0 === a() && c.click()
      }
    }
    var r = n(90).displayVideoOverlays,
      c = $('[data-ntap-toggle="video"]'),
      l = !1;
    e.exports.initializeModalVideoPlayer = s
  },
  128: function(e, t, n) {
    "use strict";
    var o, i, a = n(43),
      s = n(28),
      r = {},
      c = ["C_Company", "C_State_Prov", "C_Zip_Postal", "C_Country", "C_BusPhone", "C_Firstname", "C_Lastname", "C_EmailAddress"],
      l = "COMPLETE";
    r.init = function() {
      var e, t, n;
      $(".n-webinar__card a[data-ntap-form]").click(function(o) {
        e = $(this), t = e.data("ntapForm"), n = t.assetURL, r.handleWebinarClick(o, e, t, n)
      }), $("#ntap-webinar__form .modal-form-close").click(r.hideWebinarForm), $("#ntap-webinar__form button[name='featuredAction']").click(function() {
        r.handleWebinarFormSubmit(e, n)
      })
    }, r.handleWebinarClick = function(e, t, n, o) {
      e.preventDefault();
      var a = n.formName;
      return r.checkUserStatus(), "" === a ? r.showAsset(t, o) : "KNOWN" === i && "COMPLETE" === l || s.getCookie("webinaruser") ? r.blindFormSubmit(t, n, o) : "UNKNOWN" !== i && "INCOMPLETE" !== l || r.showWebinarForm(t, n), !1
    }, r.handleWebinarFormSubmit = function(e, t) {
      r.useremail = $("#ntap-webinar__form input[name='C_EmailAddress']").val();
      var n = setInterval(function() {
        $("#ntap-webinar__form #embeddedThanks").is(":visible") && (clearInterval(n), r.hideWebinarForm(), s.createCookie("webinaruser", r.useremail), r.showAsset(e, t))
      }, 500)
    }, r.checkUserStatus = function() {
      var e = c.length;
      if (!0 === window.FirstLookup && (i = "UNKNOWN", l = "INCOMPLETE"), !1 === window.FirstLookup && (i = "KNOWN", GetElqContentPersonalizationValue && GetElqContentPersonalizationValue("C_EmailAddress")))
        for (var t = 0; t < e; t++) "" !== (o = GetElqContentPersonalizationValue(c[t])) && void 0 != o || (l = "INCOMPLETE")
    }, r.showAsset = function(e, t) {
      r.hideWebinarForm(), t && "modaal-video" !== t ? window.open(t) : t && "modaal-video" === t && e.next(".n-video-link").click()
    }, r.updateFormParams = function(e, t, n) {
      var o, i = t.campaignID;
      e.find(".n-card__title").length > 0 && (o = e.find(".n-card__title").text());
      var s = a("cid");
      s && void 0 !== s && (i = s), $("#" + n + " input[name='asset']").attr("value", o), $("#" + n + " input[name='elqFormName']").attr("value", t.formName), $("#" + n + " input[id='C_SiebelOnDemandLastCampaignID']").attr("value", i)
    }, r.showWebinarForm = function(e, t) {
      var n = t.formName;
      r.updateFormParams(e, t, n), $("#ntap-webinar__form").addClass("load"), $("body").addClass("modal-no-scroll")
    }, r.blindFormSubmit = function(e, t, n) {
      var o, i = "ntap-webinar__form-blind",
        a = $("#" + i + " input[id='C_EmailAddress']"),
        c = $("#" + i + " input[id='Tops']"),
        l = Math.floor(1e3 + 9e3 * Math.random()) + "";
      !1 === window.FirstLookup && GetElqContentPersonalizationValue && (o = GetElqContentPersonalizationValue("C_EmailAddress")), r.updateFormParams(e, t, i), s.getCookie("webinaruser") ? a.attr("value", s.getCookie("webinaruser")) : o && a.attr("value", o), c.attr("value", l), $("#" + i).submit(), r.showAsset(e, n)
    }, r.hideWebinarForm = function() {
      $("#ntap-webinar__form").removeClass("load"), $("body").removeClass("modal-no-scroll")
    }, $(document).ready(function() {
      r.init()
    })
  },
  131: function(e, t, n) {
    "use strict";
    Array.from || (Array.from = function() {
      var e = Object.prototype.toString,
        t = function(t) {
          return "function" == typeof t || "[object Function]" === e.call(t)
        },
        n = function(e) {
          var t = Number(e);
          return isNaN(t) ? 0 : 0 !== t && isFinite(t) ? (t > 0 ? 1 : -1) * Math.floor(Math.abs(t)) : t
        },
        o = Math.pow(2, 53) - 1,
        i = function(e) {
          var t = n(e);
          return Math.min(Math.max(t, 0), o)
        };
      return function(e) {
        var n = this,
          o = Object(e);
        if (null == e) throw new TypeError("Array.from requires an array-like object - not null or undefined");
        var a, s = arguments.length > 1 ? arguments[1] : void 0;
        if (void 0 !== s) {
          if (!t(s)) throw new TypeError("Array.from: when provided, the second argument must be a function");
          arguments.length > 2 && (a = arguments[2])
        }
        for (var r, c = i(o.length), l = t(n) ? Object(new n(c)) : new Array(c), u = 0; u < c;) r = o[u], l[u] = s ? void 0 === a ? s(r, u) : s.call(a, r, u) : r, u += 1;
        return l.length = c, l
      }
    }())
  },
  132: function(e, t, n) {
    "use strict";
    var o = function() {
      document.addEventListener("DOMContentLoaded", function() {
        var e = void 0,
          t = {
            root: null,
            rootMargin: "500px"
          };
        if ("IntersectionObserver" in window) {
          e = document.querySelectorAll(".lazy");
          var n = new IntersectionObserver(function(e, t) {
            e.forEach(function(e) {
              if (e.isIntersecting) {
                var t = e.target;
                t.src = t.dataset.src, setTimeout(function() {
                  t.classList.remove("lazy")
                }, 200), n.unobserve(t)
              }
            })
          }, t);
          e.forEach(function(e) {
            n.observe(e)
          })
        } else {
          var o, i = function t() {
            o && clearTimeout(o), o = setTimeout(function() {
              var n = window.pageYOffset;
              e.forEach(function(e) {
                e.offsetTop < window.innerHeight + n && (e.src = e.dataset.src, e.classList.remove("lazy"))
              }), 0 == e.length && (document.removeEventListener("scroll", t), window.removeEventListener("resize", t), window.removeEventListener("orientationChange", t))
            }, 20)
          };
          e = document.querySelectorAll(".lazy"), document.addEventListener("scroll", i), window.addEventListener("resize", i), window.addEventListener("orientationChange", i)
        }
      })
    };
    e.exports.lazyLoad = o
  },
  133: function(e, t, n) {
    "use strict";

    function o() {
      function e() {
        a.addClass(s), r.addClass(c)
      }

      function t() {
        l.toggleClass(d)
      }

      function n() {
        a.hasClass(s) && (r.removeClass(c), l.removeClass(d), a.removeClass(s))
      }

      function o() {
        r.removeClass(c), a.removeClass(s)
      }

      function i() {
        r.removeClass(c), a.removeClass(s)
      }
      var a = $(".n-contact-module"),
        s = "n-contact-module--active",
        r = $(".n-contact-module__chat-bubble"),
        c = "n-contact-module__chat-bubble--hidden",
        l = ($(".n-contact-module__minimize"), $(".n-contact-module__menu")),
        u = $(".n-contact-module__menu-toggle"),
        d = "n-contact-module__menu--active",
        m = ($(".n-contact-module__menu-link--minimize"), $(".n-contact-module__menu-link--close, .n-contact-module__menu-link--minimize, .n-contact-module__minimize")),
        f = $("#chatOnlineLink"),
        p = $("#cloud_intercom_sticky"),
        v = $("#dynamicLiveChatLink");
      r.on("click", function(t) {
        t.preventDefault(), e()
      }), u.on("click", function(e) {
        e.preventDefault(), t()
      }), m.on("click", function(e) {
        e.preventDefault(), n()
      }), f.on("click", function(e) {
        e.preventDefault(), o()
      }), v.on("click", function(e) {
        e.preventDefault(), o()
      }), p.on("click", function(e) {
        e.preventDefault(), i()
      })
    }
    e.exports.initializeContact = o
  },
  220: function(e, t, n) {
    "use strict";
    e.exports = function() {
      var e = "us",
        t = document.location.hostname + "/";
      if (t = t.substr(t.indexOf("netapp")), -1 != t.indexOf("netapp.com/")) {
        var n = document.location.pathname,
          o = n.split("/");
        o.length;
        e = o[1]
      } else switch (t) {
        case "netapp.ca/":
          e = "ca";
          break;
        case "netapp.ch/":
          e = "ch";
          break;
        case "netapp.co.il/":
          e = "il";
          break;
        case "netapp.co.kr/":
          e = "kr";
          break;
        case "netapp.co.uk/":
          e = "uk";
          break;
        case "netapp.com.au/":
          e = "au";
          break;
        case "netapp.com.br/":
          e = "br";
          break;
        case "netapp.com.sg/":
          e = "as";
          break;
        case "netapp.com.tw/":
          e = "tw";
          break;
        case "netapp.in/":
          e = "in";
          break;
        case "netapp.it/":
          e = "it";
          break;
        case "netapp.mx/":
          e = "mx";
          break;
        case "netapp.nl/":
          e = "nl";
          break;
        case "netapp.ru/":
          e = "ru";
          break;
        case "netapp.se/":
          e = "se";
          break;
        case "startup.netapp.in/":
          e = "in";
          break;
        default:
          e = "us"
      }
      return e
    }
  },
  221: function(e, t, n) {
    "use strict";
    e.exports = function() {
      var e = "undefined" != typeof __ntap_dmdbase,
        t = void 0 !== window.cookieLaw;
      return console.log("demandBaseExists:" + e), console.log("cookieLawExists:", t), e && void 0 !== __ntap_dmdbase.registry_country_code ? (console.log("option 1:" + __ntap_dmdbase.registry_country_code), __ntap_dmdbase.registry_country_code.toLowerCase()) : e && void 0 !== __ntap_dmdbase.country ? (console.log("option 2:" + __ntap_dmdbase.country), __ntap_dmdbase.country.toLowerCase()) : t && void 0 !== cookieLaw.euCountry ? (console.log("option 3:" + cookieLaw.euCountry), cookieLaw.euCountry.toLowerCase()) : (console.log("option 4"), "us")
    }
  },
  222: function(e, t, n) {
    "use strict";
    n(42);
    var o = n(131);
    ! function(e) {
      e && e.__esModule
    }(o);
    (0, n(115).smoothScroll)();
    n(29).initializeAccordion(), n(31).initializePropertyNavBar(), n(30).initializeOffCanvasMenu(), n(10).initializeMenu(), n(32).initializePropertyBarSearch(), n(34).init(), n(116), n(128), n(118);
    if (-1 === window.location.href.indexOf("/data-visionary/index-exp-c")) {
      n(127).initializeModalVideoPlayer()
    }
    if ($('video[id*="vjs_video"]').length > 0) {
      n(126).initializeInlineVideoPlayer()
    }
    n(123).init(), n(125).init();
    if (-1 == window.location.host.indexOf("stage.netapp") && !$(".n-contact-sales.n-pull-right").length) {
      n(117).init()
    }
    if ($("#luci-tooltip").length) {
      n(124).luciTooltip()
    }
    if ($(".lazy").length) {
      n(132).lazyLoad()
    }
  },
  28: function(e, t, n) {
    "use strict";

    function o(e, t, n) {
      var o;
      if (n) {
        var i = new Date;
        i.setTime(i.getTime() + 24 * n * 60 * 60 * 1e3), o = "; expires=" + i.toUTCString()
      } else o = "";
      document.cookie = e + "=" + t + o + "; path=/"
    }

    function i(e) {
      var t = "; " + document.cookie,
        n = t.split("; " + e + "=");
      return 2 == n.length ? n.pop().split(";").shift() : ""
    }

    function a(e) {
      o(e, "", -1)
    }
    e.exports = {
      createCookie: o,
      getCookie: i,
      deleteCookie: a
    }
  },
  29: function(e, t, n) {
    "use strict";

    function o() {
      var e = $(".n-accordion__checkbox").map(function() {
        return this.id
      }).get();
      $.each(e, function(e, t) {
        t === r && $('[id="' + t + '"]').prop("checked", !0).attr("checked")
      })
    }

    function i(e) {
      var t = e.closest(".n-accordion").prev(".n-band");
      $("html, body").animate({
        scrollTop: t.offset().top
      }, 1e3), console.log(t)
    }

    function a() {
      void 0 !== r && o()
    }
    var s = n(41),
      r = s.getQueryStrings().product;
    $(".n-accordion__checkbox").on("click", function() {
      console.log("clicked");
      var e = $(this).is(":checked");
      !1 === e && i($(this)), console.log(e)
    }), e.exports.initializeAccordion = a
  },
  30: function(e, t, n) {
    "use strict";

    function o(e, t) {
      0 === $(t).children().length && $(e).clone(!0).appendTo(t)
    }

    function i() {
      $(".n-off-canvas-menu__menu").find(".n-property-navigation-bar__nav-link").on("click", function() {
        var e = $(this),
          t = e.data("ntapTarget"),
          n = $(".n-menu[data-ntap-target='" + t + "']");
        0 === e.siblings().length && n.clone(!0).insertAfter(e)
      })
    }

    function a() {
      o(m, p)
    }

    function s() {
      o(f, v)
    }

    function r(e) {
      e.preventDefault(), u.toggleClass(d), a(), s(), i()
    }

    function c() {
      l.on("click", r), $(window).on("resize", function() {
        u.hasClass(d) && $(window).width() >= 768 && u.removeClass(d)
      })
    }
    var l = $(".n-property-bar__menu-toggle-link"),
      u = $(".n-off-canvas-menu"),
      d = ($(".n-property-bar"), $(".n-site-header"), "n-off-canvas-menu--open"),
      m = $(".n-top-hat__cross-property-nav").children(),
      f = $(".n-property-navigation-bar__nav-list"),
      p = ".n-off-canvas__cross-property-nav",
      v = ".n-off-canvas__property-nav";
    e.exports.initializeOffCanvasMenu = c
  },
  31: function(e, t, n) {
    "use strict";

    function o(e, t) {
      i(), e.addClass(u), t.addClass(m)
    }

    function i() {
      d.removeClass(m), $(".n-property-navigation-bar__nav-link").removeClass(u), $(".n-menu").removeClass("n-menu--is-active")
    }

    function a() {
      return !$(".n-top-hat").is(":visible")
    }

    function s() {
      l.on("mouseenter click", function(e) {
        if ("click" === e.type) {
          e.preventDefault();
          var t = $(this),
            n = t.data("ntapTarget"),
            s = $(".n-menu[data-ntap-target='" + n + "']");
          p || a() ? t.hasClass(u) ? i() : o(t, s) : $(f).length > 0 && i()
        } else if ("mouseenter" === e.type && !a() && !p) {
          e.preventDefault();
          var t = $(this),
            n = t.data("ntapTarget"),
            s = $(".n-menu[data-ntap-target='" + n + "']");
          o(t, s)
        }
      }), $(".n-property-bar").on("mouseleave", function(e) {
        a() || p || (e.preventDefault(), i())
      })
    }
    var r = document.body,
      c = document.documentElement,
      l = (Math.max(r.offsetWidth, r.scrollWidth, c.clientWidth, c.offsetWidth), $(".n-property-navigation-bar"), $('[data-ntap-toggle="menu"]')),
      u = "n-property-navigation-bar__nav-link--is-active",
      d = $(".n-menu"),
      m = (d.find(".n-menu__link"), "n-menu--is-active"),
      f = ".n-menu--mega." + m,
      p = ($(".n-property-navigation-bar__utils"), $(".n-property-bar__toolbar"), n(10), "ontouchstart" in document.documentElement);
    e.exports.initializePropertyNavBar = s
  },
  32: function(e, t, n) {
    "use strict";

    function o() {
      s.on({
        click: function(e) {
          i(), e.stopPropagation()
        },
        focus: function(e) {
          i(), e.stopPropagation()
        }
      }), r.on({
        focus: function(e) {
          i(), e.stopPropagation()
        }
      }), l.on({
        keypress: function(e) {
          13 == (e.keyCode ? e.keyCode : e.which) && (e.preventDefault(), e.stopPropagation(), $(this).closest("form").submit())
        },
        blur: function(e) {
          setTimeout(function() {
            l.is(":focus") || u.is(":focus") || d.is(":focus") || a()
          }, 250)
        }
      }), u.on({
        click: function(e) {
          e.preventDefault(), a(), e.stopPropagation()
        },
        blur: function(e) {
          setTimeout(function() {
            l.is(":focus") || d.is(":focus") || a()
          }, 250)
        }
      }), d.on({
        blur: function(e) {
          setTimeout(function() {
            l.is(":focus") || u.is(":focus") || a()
          }, 250)
        }
      })
    }

    function i() {
      c.hasClass(m) || (s.addClass(f), r.addClass(f), c.addClass(m), setTimeout(function() {
        l.focus()
      }, 0))
    }

    function a() {
      c.removeClass(m), s.removeClass(f), r.removeClass(f), l.val("")
    }
    var s = $(".n-property-bar__search-toggle-button"),
      r = $(".n-property-bar__search-toggle-input"),
      c = $(".n-property-bar__search--exp"),
      l = c.find('input[type="search"]'),
      u = c.find(".n-property-bar__search-form-button-close"),
      d = c.find('button[type="submit"]'),
      m = "n-property-bar__search--is-active",
      f = "visually-hidden-btn";
    e.exports.initializePropertyBarSearch = o
  },
  34: function(e, t, n) {
    "use strict";
    e.exports = {
      init: function() {
        var e = $(window),
          t = $('[data-ntap-ui="sticky-nav"]');
        e.scroll(function() {
          e.scrollTop() > $(".n-top-hat").innerHeight() ? t.hasClass("n-sticky-nav") || (t.addClass("n-sticky-nav"), $(window).innerWidth() > 1921 && $(".n-main-content").css("padding-top", $(".n-property-bar").innerHeight() + "px")) : t.hasClass("n-sticky-nav") && (t.removeClass("n-sticky-nav"), $(".n-main-content").css("padding-top", "0"))
        }), e.resize(function() {
          $(window).innerWidth() < 1921 && $(".n-main-content").css("padding-top", "0")
        }), $(".button--sticky-bar").clone(!0).removeClass("button--inverse").addClass("button--regal").appendTo(".n-property-bar__cta")
      }
    }
  },
  41: function(e, t, n) {
    "use strict";

    function o() {
      for (var e, t = [], n = window.location.href.slice(window.location.href.indexOf("?") + 1).split("&"), o = 0; o < n.length; o++) e = n[o].split("="), t.push(e[0]), t[e[0]] = e[1];
      return t
    }
    e.exports.getQueryStrings = o
  },
  42: function(e, t, n) {
    "use strict";
    String.prototype.startsWith || (String.prototype.startsWith = function(e, t) {
      return t = t || 0, this.substr(t, e.length) === e
    })
  },
  43: function(e, t, n) {
    "use strict";
    e.exports = function(e) {
      for (var t, n = [], o = window.location.href.slice(window.location.href.indexOf("?") + 1).split("&"), i = 0; i < o.length; i++) t = o[i].split("="), n.push(t[0]), n[t[0]] = t[1];
      return n[e]
    }
  },
  90: function(e, t, n) {
    "use strict";

    function o(e, t) {
      e.one("loadedmetadata", function() {
        $(t).prepend('<a class="n-video__cta n-video__cta--hidden">');
        var n = e.textTracks()[0];
        void 0 !== n && (console.log(n), i(n, t))
      })
    }

    function i(e, t) {
      var n = !1;
      "www.netapp.com" == document.domain && (n = !0), e.oncuechange = function() {
        if (void 0 !== e.activeCues[0].originalCuePoint.metadata) {
          console.log(e.activeCues[0].originalCuePoint.metadata);
          var o = jQuery.parseJSON(e.activeCues[0].originalCuePoint.metadata);
          "clear" === o ? $(t).find(".n-video__cta").addClass("n-video__cta--hidden") : void 0 === o.env || "prod" !== o.env.toLowerCase() && ("prod" === o.env.toLowerCase() || n) || a(e, o, t)
        }
      }
    }

    function a(e, t, n) {
      $(n).find(".n-video__cta").removeClass(function(e, t) {
        return (t.match(/n-video__cta--(.*)$/g) || []).join(" ")
      }), $(n).find(".n-video__cta").attr("href", t.href).attr("target", t.target).attr("data-ntap-analytics-action", t.analyticsId).html(t.copy), $(n).find(".n-video__cta").removeClass("n-video__cta--hidden")
    }
    e.exports.displayVideoOverlays = o
  }
});
