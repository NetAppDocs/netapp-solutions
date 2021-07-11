$(document).ready(function(){
  var cookied_component_view_mode = Cookies.get('n-component-view-mode'),
      cookied_code_view_mode = Cookies.get('n-code-view-mode'),
      active_page = /[^/]*$/.exec(window.location.pathname)[0];

  if (cookied_component_view_mode !== undefined) {
    switch_component_view_mode(cookied_component_view_mode);
  }

  if (cookied_code_view_mode == undefined) {
    switch_code_view_mode('visible');
  }
  else {
    switch_code_view_mode(cookied_code_view_mode);
  }

  $("a[href='" + active_page + "']").addClass("n-active-page");

  // Set View Fullscreen Link href's
  $(".n-component-example__view-fullscreen-link").each(function(){
    var href = "component.full-page-example.html?component=" + $(this).closest(".n-component-example").next(".n-component-code").find(".n-code-snippet").attr("data-src") + "&referrer=" + window.location.pathname.replace('/', '') + "&component-name=" + $(".n-doc__component-detail-heading").text().replace(/ /g, '+');
    $(this).attr("href", href);
  });

  function switch_component_view_mode(mode) {
    Cookies.set('n-component-view-mode', mode);

    if (mode == 'grid') {
      $(".n-doc").addClass("n-doc__component-gallery");
      $(".n-doc").removeClass("n-doc__component-list");
    }

    if (mode == 'list') {
      $(".n-doc").removeClass("n-doc__component-gallery");
      $(".n-doc").addClass("n-doc__component-list");
    }
  }

  $(".n-doc-toggles__link").on("click", function(e){
    e.preventDefault();

    if ($(this).hasClass("n-doc-toggles__link--list")) {
      switch_component_view_mode('list');
    }
    else if ($(this).hasClass("n-doc-toggles__link--grid")) {
      switch_component_view_mode('grid');
    }
  });

  $(".n-doc__component-code-toggle").on("click", function(e){
    e.preventDefault();
    if (cookied_code_view_mode == 'visible') {
      switch_code_view_mode('hide');
    }
    else {
      switch_code_view_mode('visible');
    }
  });


  // Brittle timeout to get correct footer and header height
  // setTimeout(function(){
  //   set_scrolling_sidebar_dimensions();
  // }, 50)

  // $(window).on('scroll', function(){
  //   throttle(set_scrolling_sidebar_dimensions, 10);
  //   set_scrolling_sidebar_dimensions();
  // });

  // $(window).on('resize', function(){
  //   throttle(set_scrolling_sidebar_dimensions, 500);
  // });

  // function set_scrolling_sidebar_dimensions(){
  //   var $header = $(".n-off-canvas-menu__content-wrap > header"),
  //       $footer = $(".n-off-canvas-menu__content-wrap > footer"),
  //       $scrolling_sidebar = $(".n-doc__component-detail-sidebar"),
  //       scroll_top = $(window).scrollTop(),
  //       footer_top_offset = $footer.offset().top,
  //       header_height = $header.height(),
  //       window_height = $(window).height();
  //       top_position = header_height - scroll_top,
  //       top_position = top_position < 0 ? 0 : top_position;

  //   $scrolling_sidebar.css({top: top_position + 'px'});
  //   if (window_height > (footer_top_offset - scroll_top)) {
  //     $scrolling_sidebar.css({bottom: ((window_height - footer_top_offset) + scroll_top) + 'px'});
  //   }
  //   else {
  //     $scrolling_sidebar.css({bottom: 0});
  //   }
  // };

  function switch_code_view_mode(mode) {
    var $component_detail = $(".n-doc__component-detail-content");
    Cookies.set('n-code-view-mode', mode);
    cookied_code_view_mode = mode;

    if (mode == 'visible') {
      $component_detail.addClass("n-doc__component-detail-content--show-code").removeClass("n-doc__component-detail-content--hide-code")
    }
    else {
      $component_detail.addClass("n-doc__component-detail-content--hide-code").removeClass("n-doc__component-detail-content--show-code")
    }
    // set_scrolling_sidebar_dimensions();
  }

  // function throttle(fn, threshhold, scope) {
  //   threshhold || (threshhold = 250);
  //   var last,
  //       deferTimer;
  //   return function () {
  //     var context = scope || this;

  //     var now = +new Date,
  //         args = arguments;
  //     if (last && now < last + threshhold) {
  //       // hold on to it
  //       clearTimeout(deferTimer);
  //       deferTimer = setTimeout(function () {
  //         last = now;
  //         fn.apply(context, args);
  //       }, threshhold);
  //     } else {
  //       last = now;
  //       fn.apply(context, args);
  //     }
  //   };
  // }

  $('#modaal-confirm-example').modaal({
    type: 'confirm',
    confirm_button_text: 'Confirm',
    confirm_cancel_button_text: 'Cancel',
    confirm_title: 'Confirm Modaal Title',
    confirm_content: '<p>Confirm content&hellip;</p>'
  });
});

/*!
 * JavaScript Cookie v2.1.0
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
(function (factory) {
  if (typeof define === 'function' && define.amd) {
    define(factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    var _OldCookies = window.Cookies;
    var api = window.Cookies = factory();
    api.noConflict = function () {
      window.Cookies = _OldCookies;
      return api;
    };
  }
}(function () {
  function extend () {
    var i = 0;
    var result = {};
    for (; i < arguments.length; i++) {
      var attributes = arguments[ i ];
      for (var key in attributes) {
        result[key] = attributes[key];
      }
    }
    return result;
  }

  function init (converter) {
    function api (key, value, attributes) {
      var result;

      // Write

      if (arguments.length > 1) {
        attributes = extend({
          path: '/'
        }, api.defaults, attributes);

        if (typeof attributes.expires === 'number') {
          var expires = new Date();
          expires.setMilliseconds(expires.getMilliseconds() + attributes.expires * 864e+5);
          attributes.expires = expires;
        }

        try {
          result = JSON.stringify(value);
          if (/^[\{\[]/.test(result)) {
            value = result;
          }
        } catch (e) {}

        if (!converter.write) {
          value = encodeURIComponent(String(value))
            .replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
        } else {
          value = converter.write(value, key);
        }

        key = encodeURIComponent(String(key));
        key = key.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);
        key = key.replace(/[\(\)]/g, escape);

        return (document.cookie = [
          key, '=', value,
          attributes.expires && '; expires=' + attributes.expires.toUTCString(), // use expires attribute, max-age is not supported by IE
          attributes.path    && '; path=' + attributes.path,
          attributes.domain  && '; domain=' + attributes.domain,
          attributes.secure ? '; secure' : ''
        ].join(''));
      }

      // Read

      if (!key) {
        result = {};
      }

      // To prevent the for loop in the first place assign an empty array
      // in case there are no cookies at all. Also prevents odd result when
      // calling "get()"
      var cookies = document.cookie ? document.cookie.split('; ') : [];
      var rdecode = /(%[0-9A-Z]{2})+/g;
      var i = 0;

      for (; i < cookies.length; i++) {
        var parts = cookies[i].split('=');
        var name = parts[0].replace(rdecode, decodeURIComponent);
        var cookie = parts.slice(1).join('=');

        if (cookie.charAt(0) === '"') {
          cookie = cookie.slice(1, -1);
        }

        try {
          cookie = converter.read ?
            converter.read(cookie, name) : converter(cookie, name) ||
            cookie.replace(rdecode, decodeURIComponent);

          if (this.json) {
            try {
              cookie = JSON.parse(cookie);
            } catch (e) {}
          }

          if (key === name) {
            result = cookie;
            break;
          }

          if (!key) {
            result[name] = cookie;
          }
        } catch (e) {}
      }

      return result;
    }

    api.get = api.set = api;
    api.getJSON = function () {
      return api.apply({
        json: true
      }, [].slice.call(arguments));
    };
    api.defaults = {};

    api.remove = function (key, attributes) {
      api(key, '', extend(attributes, {
        expires: -1
      }));
    };

    api.withConverter = init;

    return api;
  }

  return init(function () {});
}));
