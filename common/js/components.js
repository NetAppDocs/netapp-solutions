$('a[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000);
      return false;
    }
  }
});

/*!
 * clipboard.js v1.5.8
 * https://zenorocha.github.io/clipboard.js
 *
 * Licensed MIT Â© Zeno Rocha
 */
!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var e;e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,e.Clipboard=t()}}(function(){var t,e,n;return function t(e,n,r){function o(a,s){if(!n[a]){if(!e[a]){var c="function"==typeof require&&require;if(!s&&c)return c(a,!0);if(i)return i(a,!0);var u=new Error("Cannot find module '"+a+"'");throw u.code="MODULE_NOT_FOUND",u}var l=n[a]={exports:{}};e[a][0].call(l.exports,function(t){var n=e[a][1][t];return o(n?n:t)},l,l.exports,t,e,n,r)}return n[a].exports}for(var i="function"==typeof require&&require,a=0;a<r.length;a++)o(r[a]);return o}({1:[function(t,e,n){var r=t("matches-selector");e.exports=function(t,e,n){for(var o=n?t:t.parentNode;o&&o!==document;){if(r(o,e))return o;o=o.parentNode}}},{"matches-selector":5}],2:[function(t,e,n){function r(t,e,n,r,i){var a=o.apply(this,arguments);return t.addEventListener(n,a,i),{destroy:function(){t.removeEventListener(n,a,i)}}}function o(t,e,n,r){return function(n){n.delegateTarget=i(n.target,e,!0),n.delegateTarget&&r.call(t,n)}}var i=t("closest");e.exports=r},{closest:1}],3:[function(t,e,n){n.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},n.nodeList=function(t){var e=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===e||"[object HTMLCollection]"===e)&&"length"in t&&(0===t.length||n.node(t[0]))},n.string=function(t){return"string"==typeof t||t instanceof String},n.fn=function(t){var e=Object.prototype.toString.call(t);return"[object Function]"===e}},{}],4:[function(t,e,n){function r(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!s.string(e))throw new TypeError("Second argument must be a String");if(!s.fn(n))throw new TypeError("Third argument must be a Function");if(s.node(t))return o(t,e,n);if(s.nodeList(t))return i(t,e,n);if(s.string(t))return a(t,e,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function o(t,e,n){return t.addEventListener(e,n),{destroy:function(){t.removeEventListener(e,n)}}}function i(t,e,n){return Array.prototype.forEach.call(t,function(t){t.addEventListener(e,n)}),{destroy:function(){Array.prototype.forEach.call(t,function(t){t.removeEventListener(e,n)})}}}function a(t,e,n){return c(document.body,t,e,n)}var s=t("./is"),c=t("delegate");e.exports=r},{"./is":3,delegate:2}],5:[function(t,e,n){function r(t,e){if(i)return i.call(t,e);for(var n=t.parentNode.querySelectorAll(e),r=0;r<n.length;++r)if(n[r]==t)return!0;return!1}var o=Element.prototype,i=o.matchesSelector||o.webkitMatchesSelector||o.mozMatchesSelector||o.msMatchesSelector||o.oMatchesSelector;e.exports=r},{}],6:[function(t,e,n){function r(t){var e;if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName)t.focus(),t.setSelectionRange(0,t.value.length),e=t.value;else{t.hasAttribute("contenteditable")&&t.focus();var n=window.getSelection(),r=document.createRange();r.selectNodeContents(t),n.removeAllRanges(),n.addRange(r),e=n.toString()}return e}e.exports=r},{}],7:[function(t,e,n){function r(){}r.prototype={on:function(t,e,n){var r=this.e||(this.e={});return(r[t]||(r[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){function r(){o.off(t,r),e.apply(n,arguments)}var o=this;return r._=e,this.on(t,r,n)},emit:function(t){var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),r=0,o=n.length;for(r;o>r;r++)n[r].fn.apply(n[r].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),r=n[t],o=[];if(r&&e)for(var i=0,a=r.length;a>i;i++)r[i].fn!==e&&r[i].fn._!==e&&o.push(r[i]);return o.length?n[t]=o:delete n[t],this}},e.exports=r},{}],8:[function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.__esModule=!0;var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),a=t("select"),s=r(a),c=function(){function t(e){o(this,t),this.resolveOptions(e),this.initSelection()}return t.prototype.resolveOptions=function t(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];this.action=e.action,this.emitter=e.emitter,this.target=e.target,this.text=e.text,this.trigger=e.trigger,this.selectedText=""},t.prototype.initSelection=function t(){if(this.text&&this.target)throw new Error('Multiple attributes declared, use either "target" or "text"');if(this.text)this.selectFake();else{if(!this.target)throw new Error('Missing required attributes, use either "target" or "text"');this.selectTarget()}},t.prototype.selectFake=function t(){var e=this,n="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandler=document.body.addEventListener("click",function(){return e.removeFake()}),this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[n?"right":"left"]="-9999px",this.fakeElem.style.top=(window.pageYOffset||document.documentElement.scrollTop)+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,document.body.appendChild(this.fakeElem),this.selectedText=s.default(this.fakeElem),this.copyText()},t.prototype.removeFake=function t(){this.fakeHandler&&(document.body.removeEventListener("click"),this.fakeHandler=null),this.fakeElem&&(document.body.removeChild(this.fakeElem),this.fakeElem=null)},t.prototype.selectTarget=function t(){this.selectedText=s.default(this.target),this.copyText()},t.prototype.copyText=function t(){var e=void 0;try{e=document.execCommand(this.action)}catch(n){e=!1}this.handleResult(e)},t.prototype.handleResult=function t(e){e?this.emitter.emit("success",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)}):this.emitter.emit("error",{action:this.action,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})},t.prototype.clearSelection=function t(){this.target&&this.target.blur(),window.getSelection().removeAllRanges()},t.prototype.destroy=function t(){this.removeFake()},i(t,[{key:"action",set:function t(){var e=arguments.length<=0||void 0===arguments[0]?"copy":arguments[0];if(this._action=e,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function t(){return this._action}},{key:"target",set:function t(e){if(void 0!==e){if(!e||"object"!=typeof e||1!==e.nodeType)throw new Error('Invalid "target" value, use a valid Element');this._target=e}},get:function t(){return this._target}}]),t}();n.default=c,e.exports=n.default},{select:6}],9:[function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function a(t,e){var n="data-clipboard-"+t;if(e.hasAttribute(n))return e.getAttribute(n)}n.__esModule=!0;var s=t("./clipboard-action"),c=r(s),u=t("tiny-emitter"),l=r(u),f=t("good-listener"),d=r(f),h=function(t){function e(n,r){o(this,e),t.call(this),this.resolveOptions(r),this.listenClick(n)}return i(e,t),e.prototype.resolveOptions=function t(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];this.action="function"==typeof e.action?e.action:this.defaultAction,this.target="function"==typeof e.target?e.target:this.defaultTarget,this.text="function"==typeof e.text?e.text:this.defaultText},e.prototype.listenClick=function t(e){var n=this;this.listener=d.default(e,"click",function(t){return n.onClick(t)})},e.prototype.onClick=function t(e){var n=e.delegateTarget||e.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new c.default({action:this.action(n),target:this.target(n),text:this.text(n),trigger:n,emitter:this})},e.prototype.defaultAction=function t(e){return a("action",e)},e.prototype.defaultTarget=function t(e){var n=a("target",e);return n?document.querySelector(n):void 0},e.prototype.defaultText=function t(e){return a("text",e)},e.prototype.destroy=function t(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)},e}(l.default);n.default=h,e.exports=n.default},{"./clipboard-action":8,"good-listener":4,"tiny-emitter":7}]},{},[9])(9)});
/* http://prismjs.com/download.html?themes=prism&languages=markup+css+clike+javascript&plugins=line-highlight+line-numbers+file-highlight */
var _self = (typeof window !== 'undefined') ? window // if in browser
    : (
        (typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope) ? self // if in worker
        : {} // if in node js
    );

/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 * MIT license http://www.opensource.org/licenses/mit-license.php/
 * @author Lea Verou http://lea.verou.me
 */

var Prism = (function() {

    // Private helper vars
    var lang = /\blang(?:uage)?-(?!\*)(\w+)\b/i;

    var _ = _self.Prism = {
        util: {
            encode: function(tokens) {
                if (tokens instanceof Token) {
                    return new Token(tokens.type, _.util.encode(tokens.content), tokens.alias);
                } else if (_.util.type(tokens) === 'Array') {
                    return tokens.map(_.util.encode);
                } else {
                    return tokens.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\u00a0/g, ' ');
                }
            },

            type: function(o) {
                return Object.prototype.toString.call(o).match(/\[object (\w+)\]/)[1];
            },

            // Deep clone a language definition (e.g. to extend it)
            clone: function(o) {
                var type = _.util.type(o);

                switch (type) {
                    case 'Object':
                        var clone = {};

                        for (var key in o) {
                            if (o.hasOwnProperty(key)) {
                                clone[key] = _.util.clone(o[key]);
                            }
                        }

                        return clone;

                    case 'Array':
                        // Check for existence for IE8
                        return o.map && o.map(function(v) {
                            return _.util.clone(v);
                        });
                }

                return o;
            }
        },

        languages: {
            extend: function(id, redef) {
                var lang = _.util.clone(_.languages[id]);

                for (var key in redef) {
                    lang[key] = redef[key];
                }

                return lang;
            },

            /**
             * Insert a token before another token in a language literal
             * As this needs to recreate the object (we cannot actually insert before keys in object literals),
             * we cannot just provide an object, we need anobject and a key.
             * @param inside The key (or language id) of the parent
             * @param before The key to insert before. If not provided, the function appends instead.
             * @param insert Object with the key/value pairs to insert
             * @param root The object that contains `inside`. If equal to Prism.languages, it can be omitted.
             */
            insertBefore: function(inside, before, insert, root) {
                root = root || _.languages;
                var grammar = root[inside];

                if (arguments.length == 2) {
                    insert = arguments[1];

                    for (var newToken in insert) {
                        if (insert.hasOwnProperty(newToken)) {
                            grammar[newToken] = insert[newToken];
                        }
                    }

                    return grammar;
                }

                var ret = {};

                for (var token in grammar) {

                    if (grammar.hasOwnProperty(token)) {

                        if (token == before) {

                            for (var newToken in insert) {

                                if (insert.hasOwnProperty(newToken)) {
                                    ret[newToken] = insert[newToken];
                                }
                            }
                        }

                        ret[token] = grammar[token];
                    }
                }

                // Update references in other language definitions
                _.languages.DFS(_.languages, function(key, value) {
                    if (value === root[inside] && key != inside) {
                        this[key] = ret;
                    }
                });

                return root[inside] = ret;
            },

            // Traverse a language definition with Depth First Search
            DFS: function(o, callback, type) {
                for (var i in o) {
                    if (o.hasOwnProperty(i)) {
                        callback.call(o, i, o[i], type || i);

                        if (_.util.type(o[i]) === 'Object') {
                            _.languages.DFS(o[i], callback);
                        } else if (_.util.type(o[i]) === 'Array') {
                            _.languages.DFS(o[i], callback, i);
                        }
                    }
                }
            }
        },

        highlightAll: function(async, callback) {
            var elements = document.querySelectorAll('code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code');

            for (var i = 0, element; element = elements[i++];) {
                _.highlightElement(element, async === true, callback);
            }
        },

        highlightElement: function(element, async, callback) {
            // Find language
            var language, grammar, parent = element;

            while (parent && !lang.test(parent.className)) {
                parent = parent.parentNode;
            }

            if (parent) {
                language = (parent.className.match(lang) || [, ''])[1];
                grammar = _.languages[language];
            }

            // Set language on the element, if not present
            element.className = element.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;

            // Set language on the parent, for styling
            parent = element.parentNode;

            if (/pre/i.test(parent.nodeName)) {
                parent.className = parent.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;
            }

            if (!grammar) {
                return;
            }

            var code = element.textContent;

            if (!code) {
                return;
            }

            code = code.replace(/^(?:\r?\n|\r)/, '');

            var env = {
                element: element,
                language: language,
                grammar: grammar,
                code: code
            };

            _.hooks.run('before-highlight', env);

            if (async && _self.Worker) {
                var worker = new Worker(_.filename);

                worker.onmessage = function(evt) {
                    env.highlightedCode = Token.stringify(JSON.parse(evt.data), language);

                    _.hooks.run('before-insert', env);

                    env.element.innerHTML = env.highlightedCode;

                    callback && callback.call(env.element);
                    _.hooks.run('after-highlight', env);
                };

                worker.postMessage(JSON.stringify({
                    language: env.language,
                    code: env.code
                }));
            } else {
                env.highlightedCode = _.highlight(env.code, env.grammar, env.language);

                _.hooks.run('before-insert', env);

                env.element.innerHTML = env.highlightedCode;

                callback && callback.call(element);

                _.hooks.run('after-highlight', env);
            }
        },

        highlight: function(text, grammar, language) {
            var tokens = _.tokenize(text, grammar);
            return Token.stringify(_.util.encode(tokens), language);
        },

        tokenize: function(text, grammar, language) {
            var Token = _.Token;

            var strarr = [text];

            var rest = grammar.rest;

            if (rest) {
                for (var token in rest) {
                    grammar[token] = rest[token];
                }

                delete grammar.rest;
            }

            tokenloop: for (var token in grammar) {
                if (!grammar.hasOwnProperty(token) || !grammar[token]) {
                    continue;
                }

                var patterns = grammar[token];
                patterns = (_.util.type(patterns) === "Array") ? patterns : [patterns];

                for (var j = 0; j < patterns.length; ++j) {
                    var pattern = patterns[j],
                        inside = pattern.inside,
                        lookbehind = !!pattern.lookbehind,
                        lookbehindLength = 0,
                        alias = pattern.alias;

                    pattern = pattern.pattern || pattern;

                    for (var i = 0; i < strarr.length; i++) { // Donâ€™t cache length as it changes during the loop

                        var str = strarr[i];

                        if (strarr.length > text.length) {
                            // Something went terribly wrong, ABORT, ABORT!
                            break tokenloop;
                        }

                        if (str instanceof Token) {
                            continue;
                        }

                        pattern.lastIndex = 0;

                        var match = pattern.exec(str);

                        if (match) {
                            if (lookbehind) {
                                lookbehindLength = match[1].length;
                            }

                            var from = match.index - 1 + lookbehindLength,
                                match = match[0].slice(lookbehindLength),
                                len = match.length,
                                to = from + len,
                                before = str.slice(0, from + 1),
                                after = str.slice(to + 1);

                            var args = [i, 1];

                            if (before) {
                                args.push(before);
                            }

                            var wrapped = new Token(token, inside ? _.tokenize(match, inside) : match, alias);

                            args.push(wrapped);

                            if (after) {
                                args.push(after);
                            }

                            Array.prototype.splice.apply(strarr, args);
                        }
                    }
                }
            }

            return strarr;
        },

        hooks: {
            all: {},

            add: function(name, callback) {
                var hooks = _.hooks.all;

                hooks[name] = hooks[name] || [];

                hooks[name].push(callback);
            },

            run: function(name, env) {
                var callbacks = _.hooks.all[name];

                if (!callbacks || !callbacks.length) {
                    return;
                }

                for (var i = 0, callback; callback = callbacks[i++];) {
                    callback(env);
                }
            }
        }
    };

    var Token = _.Token = function(type, content, alias) {
        this.type = type;
        this.content = content;
        this.alias = alias;
    };

    Token.stringify = function(o, language, parent) {
        if (typeof o == 'string') {
            return o;
        }

        if (_.util.type(o) === 'Array') {
            return o.map(function(element) {
                return Token.stringify(element, language, o);
            }).join('');
        }

        var env = {
            type: o.type,
            content: Token.stringify(o.content, language, parent),
            tag: 'span',
            classes: ['token', o.type],
            attributes: {},
            language: language,
            parent: parent
        };

        if (env.type == 'comment') {
            env.attributes['spellcheck'] = 'true';
        }

        if (o.alias) {
            var aliases = _.util.type(o.alias) === 'Array' ? o.alias : [o.alias];
            Array.prototype.push.apply(env.classes, aliases);
        }

        _.hooks.run('wrap', env);

        var attributes = '';

        for (var name in env.attributes) {
            attributes += name + '="' + (env.attributes[name] || '') + '"';
        }

        return '<' + env.tag + ' class="' + env.classes.join(' ') + '" ' + attributes + '>' + env.content + '</' + env.tag + '>';

    };

    if (!_self.document) {
        if (!_self.addEventListener) {
            // in Node.js
            return _self.Prism;
        }
        // In worker
        _self.addEventListener('message', function(evt) {
            var message = JSON.parse(evt.data),
                lang = message.language,
                code = message.code;

            _self.postMessage(JSON.stringify(_.util.encode(_.tokenize(code, _.languages[lang]))));
            _self.close();
        }, false);

        return _self.Prism;
    }

    // Get current script and highlight
    var script = document.getElementsByTagName('script');

    script = script[script.length - 1];

    if (script) {
        _.filename = script.src;

        if (document.addEventListener && !script.hasAttribute('data-manual')) {
            document.addEventListener('DOMContentLoaded', _.highlightAll);
        }
    }

    return _self.Prism;

})();

if (typeof module !== 'undefined' && module.exports) {
    module.exports = Prism;
};
Prism.languages.markup = {
    'comment': /<!--[\w\W]*?-->/,
    'prolog': /<\?[\w\W]+?\?>/,
    'doctype': /<!DOCTYPE[\w\W]+?>/,
    'cdata': /<!\[CDATA\[[\w\W]*?]]>/i,
    'tag': {
        pattern: /<\/?[^\s>\/]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\w\W])*\1|[^\s'">=]+))?)*\s*\/?>/i,
        inside: {
            'tag': {
                pattern: /^<\/?[^\s>\/]+/i,
                inside: {
                    'punctuation': /^<\/?/,
                    'namespace': /^[^\s>\/:]+:/
                }
            },
            'attr-value': {
                pattern: /=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i,
                inside: {
                    'punctuation': /[=>"']/
                }
            },
            'punctuation': /\/?>/,
            'attr-name': {
                pattern: /[^\s>\/]+/,
                inside: {
                    'namespace': /^[^\s>\/:]+:/
                }
            }

        }
    },
    'entity': /&#?[\da-z]{1,8};/i
};

// Plugin to make entity title show the real entity, idea by Roman Komarov
Prism.hooks.add('wrap', function(env) {

    if (env.type === 'entity') {
        env.attributes['title'] = env.content.replace(/&amp;/, '&');
    }
});;
Prism.languages.css = {
    'comment': /\/\*[\w\W]*?\*\//,
    'atrule': {
        pattern: /@[\w-]+?.*?(;|(?=\s*\{))/i,
        inside: {
            'rule': /@[\w-]+/
                // See rest below
        }
    },
    'url': /url\((?:(["'])(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,
    'selector': /[^\{\}\s][^\{\};]*?(?=\s*\{)/,
    'string': /("|')(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1/,
    'property': /(\b|\B)[\w-]+(?=\s*:)/i,
    'important': /\B!important\b/i,
    'function': /[-a-z0-9]+(?=\()/i,
    'punctuation': /[(){};:]/
};

Prism.languages.css['atrule'].inside.rest = Prism.util.clone(Prism.languages.css);

if (Prism.languages.markup) {
    Prism.languages.insertBefore('markup', 'tag', {
        'style': {
            pattern: /<style[\w\W]*?>[\w\W]*?<\/style>/i,
            inside: {
                'tag': {
                    pattern: /<style[\w\W]*?>|<\/style>/i,
                    inside: Prism.languages.markup.tag.inside
                },
                rest: Prism.languages.css
            },
            alias: 'language-css'
        }
    });

    Prism.languages.insertBefore('inside', 'attr-value', {
        'style-attr': {
            pattern: /\s*style=("|').*?\1/i,
            inside: {
                'attr-name': {
                    pattern: /^\s*style/i,
                    inside: Prism.languages.markup.tag.inside
                },
                'punctuation': /^\s*=\s*['"]|['"]\s*$/,
                'attr-value': {
                    pattern: /.+/i,
                    inside: Prism.languages.css
                }
            },
            alias: 'language-css'
        }
    }, Prism.languages.markup.tag);
};
Prism.languages.clike = {
    'comment': [{
        pattern: /(^|[^\\])\/\*[\w\W]*?\*\//,
        lookbehind: true
    }, {
        pattern: /(^|[^\\:])\/\/.*/,
        lookbehind: true
    }],
    'string': /("|')(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
    'class-name': {
        pattern: /((?:(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,
        lookbehind: true,
        inside: {
            punctuation: /(\.|\\)/
        }
    },
    'keyword': /\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
    'boolean': /\b(true|false)\b/,
    'function': /[a-z0-9_]+(?=\()/i,
    'number': /\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?)\b/,
    'operator': /[-+]{1,2}|!|<=?|>=?|={1,3}|&{1,2}|\|?\||\?|\*|\/|~|\^|%/,
    'punctuation': /[{}[\];(),.:]/
};;
Prism.languages.javascript = Prism.languages.extend('clike', {
    'keyword': /\b(as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|false|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|true|try|typeof|var|void|while|with|yield)\b/,
    'number': /\b-?(0x[\dA-Fa-f]+|0b[01]+|0o[0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/,
    'function': /(?!\d)[a-z0-9_$]+(?=\()/i
});

Prism.languages.insertBefore('javascript', 'keyword', {
    'regex': {
        pattern: /(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\\\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,
        lookbehind: true
    }
});

Prism.languages.insertBefore('javascript', 'class-name', {
    'template-string': {
        pattern: /`(?:\\`|\\?[^`])*`/,
        inside: {
            'interpolation': {
                pattern: /\$\{[^}]+\}/,
                inside: {
                    'interpolation-punctuation': {
                        pattern: /^\$\{|\}$/,
                        alias: 'punctuation'
                    },
                    rest: Prism.languages.javascript
                }
            },
            'string': /[\s\S]+/
        }
    }
});

if (Prism.languages.markup) {
    Prism.languages.insertBefore('markup', 'tag', {
        'script': {
            pattern: /<script[\w\W]*?>[\w\W]*?<\/script>/i,
            inside: {
                'tag': {
                    pattern: /<script[\w\W]*?>|<\/script>/i,
                    inside: Prism.languages.markup.tag.inside
                },
                rest: Prism.languages.javascript
            },
            alias: 'language-javascript'
        }
    });
};
(function() {

    if (!window.Prism) {
        return;
    }

    function $$(expr, con) {
        return Array.prototype.slice.call((con || document).querySelectorAll(expr));
    }

    function hasClass(element, className) {
        className = " " + className + " ";
        return (" " + element.className + " ").replace(/[\n\t]/g, " ").indexOf(className) > -1
    }

    var CRLF = crlf = /\r?\n|\r/g;

    function highlightLines(pre, lines, classes) {
        var ranges = lines.replace(/\s+/g, '').split(','),
            offset = +pre.getAttribute('data-line-offset') || 0;

        var lineHeight = parseFloat(getComputedStyle(pre).lineHeight);

        for (var i = 0, range; range = ranges[i++];) {
            range = range.split('-');

            var start = +range[0],
                end = +range[1] || start;

            var line = document.createElement('div');

            line.textContent = Array(end - start + 2).join(' \n');
            line.className = (classes || '') + ' line-highlight';

            //if the line-numbers plugin is enabled, then there is no reason for this plugin to display the line numbers
            if (!hasClass(pre, 'line-numbers')) {
                line.setAttribute('data-start', start);

                if (end > start) {
                    line.setAttribute('data-end', end);
                }
            }

            line.style.top = (start - offset - 1) * lineHeight + 'px';

            //allow this to play nicely with the line-numbers plugin
            if (hasClass(pre, 'line-numbers')) {
                //need to attack to pre as when line-numbers is enabled, the code tag is relatively which screws up the positioning
                pre.appendChild(line);
            } else {
                (pre.querySelector('code') || pre).appendChild(line);
            }
        }
    }

    function applyHash() {
        var hash = location.hash.slice(1);

        // Remove pre-existing temporary lines
        $$('.temporary.line-highlight').forEach(function(line) {
            line.parentNode.removeChild(line);
        });

        var range = (hash.match(/\.([\d,-]+)$/) || [, ''])[1];

        if (!range || document.getElementById(hash)) {
            return;
        }

        var id = hash.slice(0, hash.lastIndexOf('.')),
            pre = document.getElementById(id);

        if (!pre) {
            return;
        }

        if (!pre.hasAttribute('data-line')) {
            pre.setAttribute('data-line', '');
        }

        highlightLines(pre, range, 'temporary ');

        document.querySelector('.temporary.line-highlight').scrollIntoView();
    }

    var fakeTimer = 0; // Hack to limit the number of times applyHash() runs

    Prism.hooks.add('after-highlight', function(env) {
        var pre = env.element.parentNode;
        var lines = pre && pre.getAttribute('data-line');

        if (!pre || !lines || !/pre/i.test(pre.nodeName)) {
            return;
        }

        clearTimeout(fakeTimer);

        $$('.line-highlight', pre).forEach(function(line) {
            line.parentNode.removeChild(line);
        });

        highlightLines(pre, lines);

        fakeTimer = setTimeout(applyHash, 1);
    });

    addEventListener('hashchange', applyHash);

})();;
Prism.hooks.add('after-highlight', function(env) {
    // works only for <code> wrapped inside <pre> (not inline)
    var pre = env.element.parentNode;
    var clsReg = /\s*\bline-numbers\b\s*/;
    if (!pre || !/pre/i.test(pre.nodeName) ||
        // Abort only if nor the <pre> nor the <code> have the class
        (!clsReg.test(pre.className) && !clsReg.test(env.element.className))
    ) {
        return;
    }

    if (clsReg.test(env.element.className)) {
        // Remove the class "line-numbers" from the <code>
        env.element.className = env.element.className.replace(clsReg, '');
    }
    if (!clsReg.test(pre.className)) {
        // Add the class "line-numbers" to the <pre>
        pre.className += ' line-numbers';
    }

    var linesNum = (1 + env.code.split('\n').length);
    var lineNumbersWrapper;

    var lines = new Array(linesNum);
    lines = lines.join('<span></span>');

    lineNumbersWrapper = document.createElement('span');
    lineNumbersWrapper.className = 'line-numbers-rows';
    lineNumbersWrapper.innerHTML = lines;

    if (pre.hasAttribute('data-start')) {
        pre.style.counterReset = 'linenumber ' + (parseInt(pre.getAttribute('data-start'), 10) - 1);
    }

    env.element.appendChild(lineNumbersWrapper);

});;
(function() {
    if (!self.Prism || !self.document || !document.querySelector) {
        return;
    }

    self.Prism.fileHighlight = function() {

        var Extensions = {
            'js': 'javascript',
            'html': 'markup',
            'svg': 'markup',
            'xml': 'markup',
            'py': 'python',
            'rb': 'ruby',
            'ps1': 'powershell',
            'psm1': 'powershell'
        };

        if (Array.prototype.forEach) { // Check to prevent error in IE8
            Array.prototype.slice.call(document.querySelectorAll('pre[data-src]')).forEach(function(pre) {
                var src = pre.getAttribute('data-src');
                var element = pre.getAttribute('data-element');

                var language, parent = pre;
                var lang = /\blang(?:uage)?-(?!\*)(\w+)\b/i;
                while (parent && !lang.test(parent.className)) {
                    parent = parent.parentNode;
                }

                if (parent) {
                    language = (pre.className.match(lang) || [, ''])[1];
                }

                if (!language) {
                    var extension = (src.match(/\.(\w+)$/) || [, ''])[1];
                    language = Extensions[extension] || extension;
                }

                var code = document.createElement('code');
                code.className = 'language-' + language;

                pre.textContent = '';

                code.textContent = 'Loadingâ€¦';

                pre.appendChild(code);

                var xhr = new XMLHttpRequest();

                xhr.open('GET', src, true);

                xhr.onreadystatechange = function() {
                    if (xhr.readyState == 4) {

                        if (xhr.status < 400 && xhr.responseText) {
                            if (element !== null) {
                            	var doc = document.implementation.createHTMLDocument("example");
                            	doc.documentElement.innerHTML = xhr.responseText;
                            	var filtered_response = doc.querySelector(element).outerHTML;
                            	code.textContent = filtered_response;
                            } else {
                                code.textContent = xhr.responseText;
                            }


                            Prism.highlightElement(code);
                        } else if (xhr.status >= 400) {
                            code.textContent = 'âœ– Error ' + xhr.status + ' while fetching file: ' + xhr.statusText;
                        } else {
                            code.textContent = 'âœ– Error: File does not exist or is empty';
                        }
                    }
                };

                xhr.send(null);
            });
        }

    };

    self.Prism.fileHighlight();

})();;

$(document).ready(function(){
    var clipboard = new Clipboard('.n-code-snippet__copy-button');
    clipboard.on('success', function(e) {
        $(e.trigger).removeClass("n-code-snippet__copy-button--clicked");
        $(e.trigger)[0].offsetHeight;
        $(e.trigger).addClass("n-code-snippet__copy-button--clicked").find(".n-code-snippet__copy-response").text('Copied!');
        e.clearSelection();
    });

    clipboard.on('error', function(e) {
        $(e.trigger).removeClass("n-code-snippet__copy-button--clicked");
        $(e.trigger)[0].offsetHeight;
        $(e.trigger).addClass("n-code-snippet__copy-button--clicked").find(".n-code-snippet__copy-response").text('Press Ctrl + C to copy');
    });

    $("body").on("click", ".n-code-snippet__copy-button", function(e){
        e.preventDefault();
        // $(".n-code-snippet__copy-button--clicked").removeClass("n-code-snippet__copy-button--clicked");
    });
});

$(document).ready(function(){
  $(".n-content-actions__list-item--has-menu .n-content-actions__link").on("click", function(e){
    e.preventDefault();
    $(this).closest(".n-content-actions__list-item--has-menu").toggleClass("n-content-actions__list-item--menu-visible");
  });
});

$(document).ready(function(){
  // Find and mark all tables using a rowspan
  $(".n-data-table td[rowspan]").each(function(){
    var $table = $(this).closest(".n-data-table");
    if (!$table.hasClass('n-data-table--has-rowspan')) {
      $(this).closest(".n-data-table").addClass('n-data-table--has-rowspan');
    }
  });

  // Find all marked rowspan tables
  var $rowspan_tables = $(".n-data-table--has-rowspan");
  $rowspan_tables.each(function(){
    var $rows = $(this).find("tbody tr");

    var alt_row = false;
    console.log($rows);
    for (var i=0; i < $rows.length; i++) {
      var $row = $($rows[i]);

      if ($row.find("td[rowspan]").length == 0) {
        // no rowspan, class it and go
        if (alt_row) {
          $row.addClass("n-data-table__row--alt");
          alt_row = false;
        }
        else {
          alt_row = true;
        }
      }
      else {
        // How many rows affected by the rowspan?
        var rows_affected = $row.find("td[rowspan]").first().attr("rowspan") * 1;
        var index_jump = rows_affected;
        if (alt_row) {
          while(rows_affected > 0) {
            $($rows[i+(rows_affected-1)]).addClass("n-data-table__row--alt");
            rows_affected -=1;
          }
          alt_row = false;
        }
        else {
          alt_row = true;
        }

        i = i + (index_jump - 1);
      }
    }
  });

  $(".n-data-table__select-all-checkboxes").on("click", function(e){
    e.preventDefault();
    $(this).closest(".n-data-table").find(".n-form__checkbox-input").prop("checked", true);
  });

  $(".n-data-table__deselect-all-checkboxes").on("click", function(e){
    e.preventDefault();
    $(this).closest(".n-data-table").find(".n-form__checkbox-input").prop("checked", false);
  });
});

$(document).ready(function(){
  var menu_active_class = "n-dropdown-menu--active";
  $(document).on('click', function(e){
    if ($(e.target).closest(".n-dropdown-menu").length == 0) {
      $("." + menu_active_class).removeClass(menu_active_class);
    }
  });

  $(".n-dropdown-menu__trigger").on("click", function(e){
    e.preventDefault();

    $(this).closest(".n-dropdown-menu").toggleClass(menu_active_class);
    adjust_menu_position($(this));
  });

  $(".n-dropdown-menu__link").on("click", function(e){
    e.preventDefault();
    var $trigger_link = $(this);
    var $dd_menu = $trigger_link.closest(".n-dropdown-menu");

    $dd_menu.removeClass(menu_active_class);

    if ($dd_menu.hasClass('n-dropdown-menu--is-filter')) {
      $dd_menu.find(".n-dropdown-menu__trigger-text").html($trigger_link.html());
    }
  });

  function adjust_menu_position($trigger) {
    var $menu = $trigger.closest(".n-dropdown-menu").find(".n-dropdown-menu__menu"),
        trigger_width = $trigger.outerWidth(),
        trigger_left_edge = $trigger.offset().left,
        trigger_right_edge = trigger_left_edge + trigger_width,
        menu_width = $menu.outerWidth(),
        menu_left_edge = $menu.offset().left,
        menu_right_edge = menu_left_edge + menu_width,
        viewport_width = $(window).width(),
        edge_buffer = 10;

    $menu.attr("style", "");
    console.log(menu_width);

    if (menu_left_edge < 0) {
      var left_position = -(trigger_left_edge) + edge_buffer + 'px';

      $menu.css({left: left_position, right: 'auto'});
    }

    if (menu_right_edge > viewport_width) {
      var right_position = -(viewport_width - trigger_right_edge) + edge_buffer + 'px';
      $menu.css({left: 'auto', right: right_position});
    }
  }
});

// $(document).ready(function(){
//   var feedback_answer_selected_class = "n-feedback__solve-answer--selected";
//   var feedback_dialog_visible_class = "n-feedback__improve-dialog--visible";

//   $(".n-feedback__solve-answer").on("click", function(e){
//     e.preventDefault();
//     if ($(this).text() == "Yes") {
//       hide_dialog($(this));
//     }
//     else {
//       if ($(this).hasClass(feedback_answer_selected_class)) {
//         hide_dialog($(this));
//       }
//       else {
//         show_dialog($(this));
//       }
//     }

//   });

//   function hide_dialog($trigger) {
//     $trigger.removeClass(feedback_answer_selected_class);
//     $trigger.siblings(".n-feedback__solve-answer").removeClass(feedback_answer_selected_class);
//     $trigger.siblings(".n-feedback__improve-dialog").removeClass(feedback_dialog_visible_class)
//   }

//   function show_dialog($trigger) {
//     $trigger.siblings(".n-feedback__solve-answer").removeClass(feedback_answer_selected_class);
//     $trigger.addClass(feedback_answer_selected_class);
//     $trigger.siblings(".n-feedback__improve-dialog").addClass(feedback_dialog_visible_class)
//   }
// });


// Collision-Proof Panel
// Dependencies: jQuery, jQuery UI "position" module

/*! jQuery UI - v1.11.4 - 2016-01-25
* http://jqueryui.com
* Includes: position.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */

(function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)})(function(e){(function(){function t(e,t,i){return[parseFloat(e[0])*(p.test(e[0])?t/100:1),parseFloat(e[1])*(p.test(e[1])?i/100:1)]}function i(t,i){return parseInt(e.css(t,i),10)||0}function s(t){var i=t[0];return 9===i.nodeType?{width:t.width(),height:t.height(),offset:{top:0,left:0}}:e.isWindow(i)?{width:t.width(),height:t.height(),offset:{top:t.scrollTop(),left:t.scrollLeft()}}:i.preventDefault?{width:0,height:0,offset:{top:i.pageY,left:i.pageX}}:{width:t.outerWidth(),height:t.outerHeight(),offset:t.offset()}}e.ui=e.ui||{};var n,a,o=Math.max,r=Math.abs,h=Math.round,l=/left|center|right/,u=/top|center|bottom/,c=/[\+\-]\d+(\.[\d]+)?%?/,d=/^\w+/,p=/%$/,f=e.fn.position;e.position={scrollbarWidth:function(){if(void 0!==n)return n;var t,i,s=e("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),a=s.children()[0];return e("body").append(s),t=a.offsetWidth,s.css("overflow","scroll"),i=a.offsetWidth,t===i&&(i=s[0].clientWidth),s.remove(),n=t-i},getScrollInfo:function(t){var i=t.isWindow||t.isDocument?"":t.element.css("overflow-x"),s=t.isWindow||t.isDocument?"":t.element.css("overflow-y"),n="scroll"===i||"auto"===i&&t.width<t.element[0].scrollWidth,a="scroll"===s||"auto"===s&&t.height<t.element[0].scrollHeight;return{width:a?e.position.scrollbarWidth():0,height:n?e.position.scrollbarWidth():0}},getWithinInfo:function(t){var i=e(t||window),s=e.isWindow(i[0]),n=!!i[0]&&9===i[0].nodeType;return{element:i,isWindow:s,isDocument:n,offset:i.offset()||{left:0,top:0},scrollLeft:i.scrollLeft(),scrollTop:i.scrollTop(),width:s||n?i.width():i.outerWidth(),height:s||n?i.height():i.outerHeight()}}},e.fn.position=function(n){if(!n||!n.of)return f.apply(this,arguments);n=e.extend({},n);var p,m,g,v,_,b,y=e(n.of),x=e.position.getWithinInfo(n.within),w=e.position.getScrollInfo(x),k=(n.collision||"flip").split(" "),D={};return b=s(y),y[0].preventDefault&&(n.at="left top"),m=b.width,g=b.height,v=b.offset,_=e.extend({},v),e.each(["my","at"],function(){var e,t,i=(n[this]||"").split(" ");1===i.length&&(i=l.test(i[0])?i.concat(["center"]):u.test(i[0])?["center"].concat(i):["center","center"]),i[0]=l.test(i[0])?i[0]:"center",i[1]=u.test(i[1])?i[1]:"center",e=c.exec(i[0]),t=c.exec(i[1]),D[this]=[e?e[0]:0,t?t[0]:0],n[this]=[d.exec(i[0])[0],d.exec(i[1])[0]]}),1===k.length&&(k[1]=k[0]),"right"===n.at[0]?_.left+=m:"center"===n.at[0]&&(_.left+=m/2),"bottom"===n.at[1]?_.top+=g:"center"===n.at[1]&&(_.top+=g/2),p=t(D.at,m,g),_.left+=p[0],_.top+=p[1],this.each(function(){var s,l,u=e(this),c=u.outerWidth(),d=u.outerHeight(),f=i(this,"marginLeft"),b=i(this,"marginTop"),T=c+f+i(this,"marginRight")+w.width,S=d+b+i(this,"marginBottom")+w.height,M=e.extend({},_),N=t(D.my,u.outerWidth(),u.outerHeight());"right"===n.my[0]?M.left-=c:"center"===n.my[0]&&(M.left-=c/2),"bottom"===n.my[1]?M.top-=d:"center"===n.my[1]&&(M.top-=d/2),M.left+=N[0],M.top+=N[1],a||(M.left=h(M.left),M.top=h(M.top)),s={marginLeft:f,marginTop:b},e.each(["left","top"],function(t,i){e.ui.position[k[t]]&&e.ui.position[k[t]][i](M,{targetWidth:m,targetHeight:g,elemWidth:c,elemHeight:d,collisionPosition:s,collisionWidth:T,collisionHeight:S,offset:[p[0]+N[0],p[1]+N[1]],my:n.my,at:n.at,within:x,elem:u})}),n.using&&(l=function(e){var t=v.left-M.left,i=t+m-c,s=v.top-M.top,a=s+g-d,h={target:{element:y,left:v.left,top:v.top,width:m,height:g},element:{element:u,left:M.left,top:M.top,width:c,height:d},horizontal:0>i?"left":t>0?"right":"center",vertical:0>a?"top":s>0?"bottom":"middle"};c>m&&m>r(t+i)&&(h.horizontal="center"),d>g&&g>r(s+a)&&(h.vertical="middle"),h.important=o(r(t),r(i))>o(r(s),r(a))?"horizontal":"vertical",n.using.call(this,e,h)}),u.offset(e.extend(M,{using:l}))})},e.ui.position={fit:{left:function(e,t){var i,s=t.within,n=s.isWindow?s.scrollLeft:s.offset.left,a=s.width,r=e.left-t.collisionPosition.marginLeft,h=n-r,l=r+t.collisionWidth-a-n;t.collisionWidth>a?h>0&&0>=l?(i=e.left+h+t.collisionWidth-a-n,e.left+=h-i):e.left=l>0&&0>=h?n:h>l?n+a-t.collisionWidth:n:h>0?e.left+=h:l>0?e.left-=l:e.left=o(e.left-r,e.left)},top:function(e,t){var i,s=t.within,n=s.isWindow?s.scrollTop:s.offset.top,a=t.within.height,r=e.top-t.collisionPosition.marginTop,h=n-r,l=r+t.collisionHeight-a-n;t.collisionHeight>a?h>0&&0>=l?(i=e.top+h+t.collisionHeight-a-n,e.top+=h-i):e.top=l>0&&0>=h?n:h>l?n+a-t.collisionHeight:n:h>0?e.top+=h:l>0?e.top-=l:e.top=o(e.top-r,e.top)}},flip:{left:function(e,t){var i,s,n=t.within,a=n.offset.left+n.scrollLeft,o=n.width,h=n.isWindow?n.scrollLeft:n.offset.left,l=e.left-t.collisionPosition.marginLeft,u=l-h,c=l+t.collisionWidth-o-h,d="left"===t.my[0]?-t.elemWidth:"right"===t.my[0]?t.elemWidth:0,p="left"===t.at[0]?t.targetWidth:"right"===t.at[0]?-t.targetWidth:0,f=-2*t.offset[0];0>u?(i=e.left+d+p+f+t.collisionWidth-o-a,(0>i||r(u)>i)&&(e.left+=d+p+f)):c>0&&(s=e.left-t.collisionPosition.marginLeft+d+p+f-h,(s>0||c>r(s))&&(e.left+=d+p+f))},top:function(e,t){var i,s,n=t.within,a=n.offset.top+n.scrollTop,o=n.height,h=n.isWindow?n.scrollTop:n.offset.top,l=e.top-t.collisionPosition.marginTop,u=l-h,c=l+t.collisionHeight-o-h,d="top"===t.my[1],p=d?-t.elemHeight:"bottom"===t.my[1]?t.elemHeight:0,f="top"===t.at[1]?t.targetHeight:"bottom"===t.at[1]?-t.targetHeight:0,m=-2*t.offset[1];0>u?(s=e.top+p+f+m+t.collisionHeight-o-a,(0>s||r(u)>s)&&(e.top+=p+f+m)):c>0&&(i=e.top-t.collisionPosition.marginTop+p+f+m-h,(i>0||c>r(i))&&(e.top+=p+f+m))}},flipfit:{left:function(){e.ui.position.flip.left.apply(this,arguments),e.ui.position.fit.left.apply(this,arguments)},top:function(){e.ui.position.flip.top.apply(this,arguments),e.ui.position.fit.top.apply(this,arguments)}}},function(){var t,i,s,n,o,r=document.getElementsByTagName("body")[0],h=document.createElement("div");t=document.createElement(r?"div":"body"),s={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},r&&e.extend(s,{position:"absolute",left:"-1000px",top:"-1000px"});for(o in s)t.style[o]=s[o];t.appendChild(h),i=r||document.documentElement,i.insertBefore(t,i.firstChild),h.style.cssText="position: absolute; left: 10.7432222px;",n=e(h).offset().left,a=n>10&&11>n,t.innerHTML="",i.removeChild(t)}()})(),e.ui.position});

var namespace = "n-",
    panel_class = namespace + "collision-proof-panel",
    wrap_class = namespace + "collision-proof-panel__wrap",
    target_class = namespace + "collision-proof-panel__target",
    panel_visible_class = panel_class + "--visible";

function position_cpps($target) {
  var $targets = $target == undefined ? $("." + target_class) : $target;

  $targets.each(function(){
    var $panel = $("#" + $(this).attr("data-panel-id")),
        panel_position = $(this).attr("data-panel-position") == undefined ? 'top' : $(this).attr("data-panel-position"),
        panel_position_coordinates = "center bottom",
        target_position_coordinates = "center top-10",
        _$target = $(this);

    switch(panel_position) {
      case 'bottom':
        panel_position_coordinates = "center top";
        target_position_coordinates = "center bottom+10";
        break;
      case 'left':
        panel_position_coordinates = "right center";
        target_position_coordinates = "left-10 center";
        break;
      case 'right':
        panel_position_coordinates = "left center";
        target_position_coordinates = "right+10 center";
        break;
    }

    $panel.position({
      my: panel_position_coordinates,
      at: target_position_coordinates,
      of: $(this),
      collision: "flipfit flip",
      using: function(position, dimensions) {
        $panel.css({left: position.left, top: position.top});
          switch(panel_position) {
            case 'bottom':
              if (dimensions.element.top < dimensions.target.top) {
                _$target.addClass(namespace + "collision-proof-panel--position-flipped");
              }
              else {
                _$target.removeClass(namespace + "collision-proof-panel--position-flipped");
              }
              break;
            case 'left':
              if (dimensions.element.left > dimensions.target.left) {
                _$target.addClass(namespace + "collision-proof-panel--position-flipped");
              }
              else {
                _$target.removeClass(namespace + "collision-proof-panel--position-flipped");
              }
              break;
            case 'right':
              if (dimensions.element.left < dimensions.target.left) {
                _$target.addClass(namespace + "collision-proof-panel--position-flipped");
              }
              else {
                _$target.removeClass(namespace + "collision-proof-panel--position-flipped");
              }
              break;
            case 'top':
              if (dimensions.element.top > dimensions.target.top) {
                _$target.addClass(namespace + "collision-proof-panel--position-flipped");
              }
              else {
                _$target.removeClass(namespace + "collision-proof-panel--position-flipped");
              }
              break;
          }
      }
    });
  });
}

$(document).ready(function(){
  position_cpps();

  $(window).on('resize', function(){
    position_cpps();
  });

  $(".n-feedback__solve-answer").on("click", function(e){
    e.preventDefault();
  });

  $('[data-show-thank-you-message-on-click="true"]').on("click", function(e){
    e.preventDefault();
    var $feedback_component = $(this).closest(".n-feedback");
    $feedback_component.addClass("n-feedback--thank-you-message-visible");
  });

  $("body").on("click", function(e){
    if ($(e.target).closest("." + panel_visible_class).length == 0) {
      $("." + panel_visible_class).removeClass(panel_visible_class);
    }
  });

  $("." + target_class +"[data-reveal-panel-on='hover']").on("mouseover", function(){
    $("#" + $(this).attr("data-panel-id")).addClass(panel_visible_class);
    $(this).addClass(panel_visible_class);
    position_cpps($(this));
  });

  $("." + target_class +"[data-reveal-panel-on='hover']").on("mouseout", function(){
    $("#" + $(this).attr("data-panel-id")).removeClass(panel_visible_class);
    $(this).removeClass(panel_visible_class);
  });

  $("." + target_class +"[data-reveal-panel-on='click']").on("click", function(){
    if ($("#" + $(this).attr("data-panel-id")).hasClass(panel_visible_class)) {
      $("#" + $(this).attr("data-panel-id")).removeClass(panel_visible_class);
      $(this).removeClass(panel_visible_class);
    }
    else {
      $("#" + $(this).attr("data-panel-id")).addClass(panel_visible_class);
      $(this).addClass(panel_visible_class);
      position_cpps($(this));
    }
  });
});

function set_filter_responsive_mode() {
  var $filters = $(".n-filter");

  $filters.each(function(){
    var $filter = $(this),
        available_width = $filter.css({"max-width": "none"}).outerWidth(),
        single_row_filter_width = 0,
        filter_narrow_class = "n-filter--is-narrow",
        buffer = 20;

    $filter.attr("style", "");

    $filter.find(".n-filter__column").each(function(){
      single_row_filter_width += $(this).css({width: 'auto'}).outerWidth();
      $(this).attr("style", "");
    });

    if (single_row_filter_width + buffer > available_width) {
      $filter.addClass(filter_narrow_class);
    }
    else {
      $filter.removeClass(filter_narrow_class);
    }
  });
}

$(document).ready(function(){
  $(document).on('click', '.n-filter--is-narrow .n-filter__section-header', function(e){
    e.preventDefault();
    $(this).closest('.n-filter__section').toggleClass('n-filter__section--open');
  });

  set_filter_responsive_mode();

  $(window).on('resize', set_filter_responsive_mode);
});

/*
 *  Sugar Library v1.4.1
 *
 *  Freely distributable and licensed under the MIT-style license.
 *  Copyright (c) 2014 Andrew Plummer
 *  http://sugarjs.com/
 *
 * ---------------------------- */
(function(){
  /***
   * @package Core
   * @description Internal utility and common methods.
   ***/


  // A few optimizations for Google Closure Compiler will save us a couple kb in the release script.
  var object = Object, array = Array, regexp = RegExp, date = Date, string = String, number = Number, math = Math, Undefined;

  // The global context
  var globalContext = typeof global !== 'undefined' ? global : this;

  // Internal toString
  var internalToString = object.prototype.toString;

  // Internal hasOwnProperty
  var internalHasOwnProperty = object.prototype.hasOwnProperty;

  // defineProperty exists in IE8 but will error when trying to define a property on
  // native objects. IE8 does not have defineProperies, however, so this check saves a try/catch block.
  var definePropertySupport = object.defineProperty && object.defineProperties;

  // Are regexes type function?
  var regexIsFunction = typeof regexp() === 'function';

  // Do strings have no keys?
  var noKeysInStringObjects = !('0' in new string('a'));

  // Type check methods need a way to be accessed dynamically.
  var typeChecks = {};

  // Classes that can be matched by value
  var matchedByValueReg = /^\[object Date|Array|String|Number|RegExp|Boolean|Arguments\]$/;

  // Class initializers and class helpers
  var ClassNames = 'Boolean,Number,String,Array,Date,RegExp,Function'.split(',');

  var isBoolean  = buildPrimitiveClassCheck('boolean', ClassNames[0]);
  var isNumber   = buildPrimitiveClassCheck('number',  ClassNames[1]);
  var isString   = buildPrimitiveClassCheck('string',  ClassNames[2]);

  var isArray    = buildClassCheck(ClassNames[3]);
  var isDate     = buildClassCheck(ClassNames[4]);
  var isRegExp   = buildClassCheck(ClassNames[5]);


  // Wanted to enhance performance here by using simply "typeof"
  // but Firefox has two major issues that make this impossible,
  // one fixed, the other not. Despite being typeof "function"
  // the objects below still report in as [object Function], so
  // we need to perform a full class check here.
  //
  // 1. Regexes can be typeof "function" in FF < 3
  //    https://bugzilla.mozilla.org/show_bug.cgi?id=61911 (fixed)
  //
  // 2. HTMLEmbedElement and HTMLObjectElement are be typeof "function"
  //    https://bugzilla.mozilla.org/show_bug.cgi?id=268945 (won't fix)
  //
  var isFunction = buildClassCheck(ClassNames[6]);

  function isClass(obj, klass, cached) {
    var k = cached || className(obj);
    return k === '[object '+klass+']';
  }

  function buildClassCheck(klass) {
    var fn = (klass === 'Array' && array.isArray) || function(obj, cached) {
      return isClass(obj, klass, cached);
    };
    typeChecks[klass] = fn;
    return fn;
  }

  function buildPrimitiveClassCheck(type, klass) {
    var fn = function(obj) {
      if(isObjectType(obj)) {
        return isClass(obj, klass);
      }
      return typeof obj === type;
    }
    typeChecks[klass] = fn;
    return fn;
  }

  function className(obj) {
    return internalToString.call(obj);
  }

  function initializeClasses() {
    initializeClass(object);
    iterateOverObject(ClassNames, function(i,name) {
      initializeClass(globalContext[name]);
    });
  }

  function initializeClass(klass) {
    if(klass['SugarMethods']) return;
    defineProperty(klass, 'SugarMethods', {});
    extend(klass, false, true, {
      'extend': function(methods, override, instance) {
        extend(klass, instance !== false, override, methods);
      },
      'sugarRestore': function() {
        return batchMethodExecute(this, klass, arguments, function(target, name, m) {
          defineProperty(target, name, m.method);
        });
      },
      'sugarRevert': function() {
        return batchMethodExecute(this, klass, arguments, function(target, name, m) {
          if(m['existed']) {
            defineProperty(target, name, m['original']);
          } else {
            delete target[name];
          }
        });
      }
    });
  }

  // Class extending methods

  function extend(klass, instance, override, methods) {
    var extendee = instance ? klass.prototype : klass;
    initializeClass(klass);
    iterateOverObject(methods, function(name, extendedFn) {
      var nativeFn = extendee[name],
          existed  = hasOwnProperty(extendee, name);
      if(isFunction(override) && nativeFn) {
        extendedFn = wrapNative(nativeFn, extendedFn, override);
      }
      if(override !== false || !nativeFn) {
        defineProperty(extendee, name, extendedFn);
      }
      // If the method is internal to Sugar, then
      // store a reference so it can be restored later.
      klass['SugarMethods'][name] = {
        'method':   extendedFn,
        'existed':  existed,
        'original': nativeFn,
        'instance': instance
      };
    });
  }

  function extendSimilar(klass, instance, override, set, fn) {
    var methods = {};
    set = isString(set) ? set.split(',') : set;
    set.forEach(function(name, i) {
      fn(methods, name, i);
    });
    extend(klass, instance, override, methods);
  }

  function batchMethodExecute(target, klass, args, fn) {
    var all = args.length === 0, methods = multiArgs(args), changed = false;
    iterateOverObject(klass['SugarMethods'], function(name, m) {
      if(all || methods.indexOf(name) !== -1) {
        changed = true;
        fn(m['instance'] ? target.prototype : target, name, m);
      }
    });
    return changed;
  }

  function wrapNative(nativeFn, extendedFn, condition) {
    return function(a) {
      return condition.apply(this, arguments) ?
             extendedFn.apply(this, arguments) :
             nativeFn.apply(this, arguments);
    }
  }

  function defineProperty(target, name, method) {
    if(definePropertySupport) {
      object.defineProperty(target, name, {
        'value': method,
        'configurable': true,
        'enumerable': false,
        'writable': true
      });
    } else {
      target[name] = method;
    }
  }


  // Argument helpers

  function multiArgs(args, fn, from) {
    var result = [], i = from || 0, len;
    for(len = args.length; i < len; i++) {
      result.push(args[i]);
      if(fn) fn.call(args, args[i], i);
    }
    return result;
  }

  function flattenedArgs(args, fn, from) {
    var arg = args[from || 0];
    if(isArray(arg)) {
      args = arg;
      from = 0;
    }
    return multiArgs(args, fn, from);
  }

  function checkCallback(fn) {
    if(!fn || !fn.call) {
      throw new TypeError('Callback is not callable');
    }
  }


  // General helpers

  function isDefined(o) {
    return o !== Undefined;
  }

  function isUndefined(o) {
    return o === Undefined;
  }


  // Object helpers

  function hasProperty(obj, prop) {
    return !isPrimitiveType(obj) && prop in obj;
  }

  function hasOwnProperty(obj, prop) {
    return !!obj && internalHasOwnProperty.call(obj, prop);
  }

  function isObjectType(obj) {
    // 1. Check for null
    // 2. Check for regexes in environments where they are "functions".
    return !!obj && (typeof obj === 'object' || (regexIsFunction && isRegExp(obj)));
  }

  function isPrimitiveType(obj) {
    var type = typeof obj;
    return obj == null || type === 'string' || type === 'number' || type === 'boolean';
  }

  function isPlainObject(obj, klass) {
    klass = klass || className(obj);
    try {
      // Not own constructor property must be Object
      // This code was borrowed from jQuery.isPlainObject
      if (obj && obj.constructor &&
            !hasOwnProperty(obj, 'constructor') &&
            !hasOwnProperty(obj.constructor.prototype, 'isPrototypeOf')) {
        return false;
      }
    } catch (e) {
      // IE8,9 Will throw exceptions on certain host objects.
      return false;
    }
    // === on the constructor is not safe across iframes
    // 'hasOwnProperty' ensures that the object also inherits
    // from Object, which is false for DOMElements in IE.
    return !!obj && klass === '[object Object]' && 'hasOwnProperty' in obj;
  }

  function iterateOverObject(obj, fn) {
    var key;
    for(key in obj) {
      if(!hasOwnProperty(obj, key)) continue;
      if(fn.call(obj, key, obj[key], obj) === false) break;
    }
  }

  function simpleRepeat(n, fn) {
    for(var i = 0; i < n; i++) {
      fn(i);
    }
  }

  function simpleMerge(target, source) {
    iterateOverObject(source, function(key) {
      target[key] = source[key];
    });
    return target;
  }

   // Make primtives types like strings into objects.
   function coercePrimitiveToObject(obj) {
     if(isPrimitiveType(obj)) {
       obj = object(obj);
     }
     if(noKeysInStringObjects && isString(obj)) {
       forceStringCoercion(obj);
     }
     return obj;
   }

   // Force strings to have their indexes set in
   // environments that don't do this automatically.
   function forceStringCoercion(obj) {
     var i = 0, chr;
     while(chr = obj.charAt(i)) {
       obj[i++] = chr;
     }
   }

  // Hash definition

  function Hash(obj) {
    simpleMerge(this, coercePrimitiveToObject(obj));
  };

  Hash.prototype.constructor = object;

  // Math helpers

  var abs   = math.abs;
  var pow   = math.pow;
  var ceil  = math.ceil;
  var floor = math.floor;
  var round = math.round;
  var min   = math.min;
  var max   = math.max;

  function withPrecision(val, precision, fn) {
    var multiplier = pow(10, abs(precision || 0));
    fn = fn || round;
    if(precision < 0) multiplier = 1 / multiplier;
    return fn(val * multiplier) / multiplier;
  }

  // Full width number helpers

  var HalfWidthZeroCode = 0x30;
  var HalfWidthNineCode = 0x39;
  var FullWidthZeroCode = 0xff10;
  var FullWidthNineCode = 0xff19;

  var HalfWidthPeriod = '.';
  var FullWidthPeriod = 'ï¼Ž';
  var HalfWidthComma  = ',';

  // Used here and later in the Date package.
  var FullWidthDigits   = '';

  var NumberNormalizeMap = {};
  var NumberNormalizeReg;

  function codeIsNumeral(code) {
    return (code >= HalfWidthZeroCode && code <= HalfWidthNineCode) ||
           (code >= FullWidthZeroCode && code <= FullWidthNineCode);
  }

  function buildNumberHelpers() {
    var digit, i;
    for(i = 0; i <= 9; i++) {
      digit = chr(i + FullWidthZeroCode);
      FullWidthDigits += digit;
      NumberNormalizeMap[digit] = chr(i + HalfWidthZeroCode);
    }
    NumberNormalizeMap[HalfWidthComma] = '';
    NumberNormalizeMap[FullWidthPeriod] = HalfWidthPeriod;
    // Mapping this to itself to easily be able to easily
    // capture it in stringToNumber to detect decimals later.
    NumberNormalizeMap[HalfWidthPeriod] = HalfWidthPeriod;
    NumberNormalizeReg = regexp('[' + FullWidthDigits + FullWidthPeriod + HalfWidthComma + HalfWidthPeriod + ']', 'g');
  }

  // String helpers

  function chr(num) {
    return string.fromCharCode(num);
  }

  // WhiteSpace/LineTerminator as defined in ES5.1 plus Unicode characters in the Space, Separator category.
  function getTrimmableCharacters() {
    return '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u2028\u2029\u3000\uFEFF';
  }

  function repeatString(str, num) {
    var result = '', str = str.toString();
    while (num > 0) {
      if (num & 1) {
        result += str;
      }
      if (num >>= 1) {
        str += str;
      }
    }
    return result;
  }

  // Returns taking into account full-width characters, commas, and decimals.
  function stringToNumber(str, base) {
    var sanitized, isDecimal;
    sanitized = str.replace(NumberNormalizeReg, function(chr) {
      var replacement = NumberNormalizeMap[chr];
      if(replacement === HalfWidthPeriod) {
        isDecimal = true;
      }
      return replacement;
    });
    return isDecimal ? parseFloat(sanitized) : parseInt(sanitized, base || 10);
  }


  // Used by Number and Date

  function padNumber(num, place, sign, base) {
    var str = abs(num).toString(base || 10);
    str = repeatString('0', place - str.replace(/\.\d+/, '').length) + str;
    if(sign || num < 0) {
      str = (num < 0 ? '-' : '+') + str;
    }
    return str;
  }

  function getOrdinalizedSuffix(num) {
    if(num >= 11 && num <= 13) {
      return 'th';
    } else {
      switch(num % 10) {
        case 1:  return 'st';
        case 2:  return 'nd';
        case 3:  return 'rd';
        default: return 'th';
      }
    }
  }


  // RegExp helpers

  function getRegExpFlags(reg, add) {
    var flags = '';
    add = add || '';
    function checkFlag(prop, flag) {
      if(prop || add.indexOf(flag) > -1) {
        flags += flag;
      }
    }
    checkFlag(reg.multiline, 'm');
    checkFlag(reg.ignoreCase, 'i');
    checkFlag(reg.global, 'g');
    checkFlag(reg.sticky, 'y');
    return flags;
  }

  function escapeRegExp(str) {
    if(!isString(str)) str = string(str);
    return str.replace(/([\\/\'*+?|()\[\]{}.^$])/g,'\\$1');
  }


  // Date helpers

  function callDateGet(d, method) {
    return d['get' + (d._utc ? 'UTC' : '') + method]();
  }

  function callDateSet(d, method, value) {
    return d['set' + (d._utc && method != 'ISOWeek' ? 'UTC' : '') + method](value);
  }

  // Used by Array#unique and Object.equal

  function stringify(thing, stack) {
    var type = typeof thing,
        thingIsObject,
        thingIsArray,
        klass, value,
        arr, key, i, len;

    // Return quickly if string to save cycles
    if(type === 'string') return thing;

    klass         = internalToString.call(thing)
    thingIsObject = isPlainObject(thing, klass);
    thingIsArray  = isArray(thing, klass);

    if(thing != null && thingIsObject || thingIsArray) {
      // This method for checking for cyclic structures was egregiously stolen from
      // the ingenious method by @kitcambridge from the Underscore script:
      // https://github.com/documentcloud/underscore/issues/240
      if(!stack) stack = [];
      // Allowing a step into the structure before triggering this
      // script to save cycles on standard JSON structures and also to
      // try as hard as possible to catch basic properties that may have
      // been modified.
      if(stack.length > 1) {
        i = stack.length;
        while (i--) {
          if (stack[i] === thing) {
            return 'CYC';
          }
        }
      }
      stack.push(thing);
      value = thing.valueOf() + string(thing.constructor);
      arr = thingIsArray ? thing : object.keys(thing).sort();
      for(i = 0, len = arr.length; i < len; i++) {
        key = thingIsArray ? i : arr[i];
        value += key + stringify(thing[key], stack);
      }
      stack.pop();
    } else if(1 / thing === -Infinity) {
      value = '-0';
    } else {
      value = string(thing && thing.valueOf ? thing.valueOf() : thing);
    }
    return type + klass + value;
  }

  function isEqual(a, b) {
    if(a === b) {
      // Return quickly up front when matching by reference,
      // but be careful about 0 !== -0.
      return a !== 0 || 1 / a === 1 / b;
    } else if(objectIsMatchedByValue(a) && objectIsMatchedByValue(b)) {
      return stringify(a) === stringify(b);
    }
    return false;
  }

  function objectIsMatchedByValue(obj) {
    // Only known objects are matched by value. This is notably excluding functions, DOM Elements, and instances of
    // user-created classes. The latter can arguably be matched by value, but distinguishing between these and
    // host objects -- which should never be compared by value -- is very tricky so not dealing with it here.
    var klass = className(obj);
    return matchedByValueReg.test(klass) || isPlainObject(obj, klass);
  }


  // Used by Array#at and String#at

  function getEntriesForIndexes(obj, args, isString) {
    var result,
        length    = obj.length,
        argsLen   = args.length,
        overshoot = args[argsLen - 1] !== false,
        multiple  = argsLen > (overshoot ? 1 : 2);
    if(!multiple) {
      return entryAtIndex(obj, length, args[0], overshoot, isString);
    }
    result = [];
    multiArgs(args, function(index) {
      if(isBoolean(index)) return false;
      result.push(entryAtIndex(obj, length, index, overshoot, isString));
    });
    return result;
  }

  function entryAtIndex(obj, length, index, overshoot, isString) {
    if(overshoot) {
      index = index % length;
      if(index < 0) index = length + index;
    }
    return isString ? obj.charAt(index) : obj[index];
  }


  // Object class methods implemented as instance methods

  function buildObjectInstanceMethods(set, target) {
    extendSimilar(target, true, false, set, function(methods, name) {
      methods[name + (name === 'equal' ? 's' : '')] = function() {
        return object[name].apply(null, [this].concat(multiArgs(arguments)));
      }
    });
  }

  initializeClasses();
  buildNumberHelpers();


  /***
   * @package Date
   * @dependency core
   * @description Date parsing and formatting, relative formats like "1 minute ago", Number methods like "daysAgo", localization support with default English locale definition.
   *
   ***/

  var English;
  var CurrentLocalization;

  var TimeFormat = ['ampm','hour','minute','second','ampm','utc','offset_sign','offset_hours','offset_minutes','ampm']
  var DecimalReg = '(?:[,.]\\d+)?';
  var HoursReg   = '\\d{1,2}' + DecimalReg;
  var SixtyReg   = '[0-5]\\d' + DecimalReg;
  var RequiredTime = '({t})?\\s*('+HoursReg+')(?:{h}('+SixtyReg+')?{m}(?::?('+SixtyReg+'){s})?\\s*(?:({t})|(Z)|(?:([+-])(\\d{2,2})(?::?(\\d{2,2}))?)?)?|\\s*({t}))';

  var KanjiDigits = 'ã€‡ä¸€äºŒä¸‰å››äº”å…­ä¸ƒå…«ä¹åç™¾åƒä¸‡';
  var AsianDigitMap = {};
  var AsianDigitReg;

  var DateArgumentUnits;
  var DateUnitsReversed;
  var CoreDateFormats = [];
  var CompiledOutputFormats = {};

  var DateFormatTokens = {

    'yyyy': function(d) {
      return callDateGet(d, 'FullYear');
    },

    'yy': function(d) {
      return callDateGet(d, 'FullYear') % 100;
    },

    'ord': function(d) {
      var date = callDateGet(d, 'Date');
      return date + getOrdinalizedSuffix(date);
    },

    'tz': function(d) {
      return d.getUTCOffset();
    },

    'isotz': function(d) {
      return d.getUTCOffset(true);
    },

    'Z': function(d) {
      return d.getUTCOffset();
    },

    'ZZ': function(d) {
      return d.getUTCOffset().replace(/(\d{2})$/, ':$1');
    }

  };

  var DateUnits = [
    {
      name: 'year',
      method: 'FullYear',
      ambiguous: true,
      multiplier: function(d) {
        var adjust = d ? (d.isLeapYear() ? 1 : 0) : 0.25;
        return (365 + adjust) * 24 * 60 * 60 * 1000;
      }
    },
    {
      name: 'month',
      error: 0.919, // Feb 1-28 over 1 month
      method: 'Month',
      ambiguous: true,
      multiplier: function(d, ms) {
        var days = 30.4375, inMonth;
        if(d) {
          inMonth = d.daysInMonth();
          if(ms <= inMonth.days()) {
            days = inMonth;
          }
        }
        return days * 24 * 60 * 60 * 1000;
      }
    },
    {
      name: 'week',
      method: 'ISOWeek',
      multiplier: function() {
        return 7 * 24 * 60 * 60 * 1000;
      }
    },
    {
      name: 'day',
      error: 0.958, // DST traversal over 1 day
      method: 'Date',
      ambiguous: true,
      multiplier: function() {
        return 24 * 60 * 60 * 1000;
      }
    },
    {
      name: 'hour',
      method: 'Hours',
      multiplier: function() {
        return 60 * 60 * 1000;
      }
    },
    {
      name: 'minute',
      method: 'Minutes',
      multiplier: function() {
        return 60 * 1000;
      }
    },
    {
      name: 'second',
      method: 'Seconds',
      multiplier: function() {
        return 1000;
      }
    },
    {
      name: 'millisecond',
      method: 'Milliseconds',
      multiplier: function() {
        return 1;
      }
    }
  ];




  // Date Localization

  var Localizations = {};

  // Localization object

  function Localization(l) {
    simpleMerge(this, l);
    this.compiledFormats = CoreDateFormats.concat();
  }

  Localization.prototype = {

    getMonth: function(n) {
      if(isNumber(n)) {
        return n - 1;
      } else {
        return this['months'].indexOf(n) % 12;
      }
    },

    getWeekday: function(n) {
      return this['weekdays'].indexOf(n) % 7;
    },

    getNumber: function(n) {
      var i;
      if(isNumber(n)) {
        return n;
      } else if(n && (i = this['numbers'].indexOf(n)) !== -1) {
        return (i + 1) % 10;
      } else {
        return 1;
      }
    },

    getNumericDate: function(n) {
      var self = this;
      return n.replace(regexp(this['num'], 'g'), function(d) {
        var num = self.getNumber(d);
        return num || '';
      });
    },

    getUnitIndex: function(n) {
      return this['units'].indexOf(n) % 8;
    },

    getRelativeFormat: function(adu) {
      return this.convertAdjustedToFormat(adu, adu[2] > 0 ? 'future' : 'past');
    },

    getDuration: function(ms) {
      return this.convertAdjustedToFormat(getAdjustedUnit(ms), 'duration');
    },

    hasVariant: function(code) {
      code = code || this.code;
      return code === 'en' || code === 'en-US' ? true : this['variant'];
    },

    matchAM: function(str) {
      return str === this['ampm'][0];
    },

    matchPM: function(str) {
      return str && str === this['ampm'][1];
    },

    convertAdjustedToFormat: function(adu, mode) {
      var sign, unit, mult,
          num    = adu[0],
          u      = adu[1],
          ms     = adu[2],
          format = this[mode] || this['relative'];
      if(isFunction(format)) {
        return format.call(this, num, u, ms, mode);
      }
      mult = this['plural'] && num > 1 ? 1 : 0;
      unit = this['units'][mult * 8 + u] || this['units'][u];
      if(this['capitalizeUnit']) unit = simpleCapitalize(unit);
      sign = this['modifiers'].filter(function(m) { return m.name == 'sign' && m.value == (ms > 0 ? 1 : -1); })[0];
      return format.replace(/\{(.*?)\}/g, function(full, match) {
        switch(match) {
          case 'num': return num;
          case 'unit': return unit;
          case 'sign': return sign.src;
        }
      });
    },

    getFormats: function() {
      return this.cachedFormat ? [this.cachedFormat].concat(this.compiledFormats) : this.compiledFormats;
    },

    addFormat: function(src, allowsTime, match, variant, iso) {
      var to = match || [], loc = this, time, timeMarkers, lastIsNumeral;

      src = src.replace(/\s+/g, '[,. ]*');
      src = src.replace(/\{([^,]+?)\}/g, function(all, k) {
        var value, arr, result,
            opt   = k.match(/\?$/),
            nc    = k.match(/^(\d+)\??$/),
            slice = k.match(/(\d)(?:-(\d))?/),
            key   = k.replace(/[^a-z]+$/, '');
        if(nc) {
          value = loc['tokens'][nc[1]];
        } else if(loc[key]) {
          value = loc[key];
        } else if(loc[key + 's']) {
          value = loc[key + 's'];
          if(slice) {
            // Can't use filter here as Prototype hijacks the method and doesn't
            // pass an index, so use a simple loop instead!
            arr = [];
            value.forEach(function(m, i) {
              var mod = i % (loc['units'] ? 8 : value.length);
              if(mod >= slice[1] && mod <= (slice[2] || slice[1])) {
                arr.push(m);
              }
            });
            value = arr;
          }
          value = arrayToAlternates(value);
        }
        if(nc) {
          result = '(?:' + value + ')';
        } else {
          if(!match) {
            to.push(key);
          }
          result = '(' + value + ')';
        }
        if(opt) {
          result += '?';
        }
        return result;
      });
      if(allowsTime) {
        time = prepareTime(RequiredTime, loc, iso);
        timeMarkers = ['t','[\\s\\u3000]'].concat(loc['timeMarker']);
        lastIsNumeral = src.match(/\\d\{\d,\d\}\)+\??$/);
        addDateInputFormat(loc, '(?:' + time + ')[,\\s\\u3000]+?' + src, TimeFormat.concat(to), variant);
        addDateInputFormat(loc, src + '(?:[,\\s]*(?:' + timeMarkers.join('|') + (lastIsNumeral ? '+' : '*') +')' + time + ')?', to.concat(TimeFormat), variant);
      } else {
        addDateInputFormat(loc, src, to, variant);
      }
    }

  };


  // Localization helpers

  function getLocalization(localeCode, fallback) {
    var loc;
    if(!isString(localeCode)) localeCode = '';
    loc = Localizations[localeCode] || Localizations[localeCode.slice(0,2)];
    if(fallback === false && !loc) {
      throw new TypeError('Invalid locale.');
    }
    return loc || CurrentLocalization;
  }

  function setLocalization(localeCode, set) {
    var loc, canAbbreviate;

    function initializeField(name) {
      var val = loc[name];
      if(isString(val)) {
        loc[name] = val.split(',');
      } else if(!val) {
        loc[name] = [];
      }
    }

    function eachAlternate(str, fn) {
      str = str.split('+').map(function(split) {
        return split.replace(/(.+):(.+)$/, function(full, base, suffixes) {
          return suffixes.split('|').map(function(suffix) {
            return base + suffix;
          }).join('|');
        });
      }).join('|');
      return str.split('|').forEach(fn);
    }

    function setArray(name, abbreviate, multiple) {
      var arr = [];
      loc[name].forEach(function(full, i) {
        if(abbreviate) {
          full += '+' + full.slice(0,3);
        }
        eachAlternate(full, function(day, j) {
          arr[j * multiple + i] = day.toLowerCase();
        });
      });
      loc[name] = arr;
    }

    function getDigit(start, stop, allowNumbers) {
      var str = '\\d{' + start + ',' + stop + '}';
      if(allowNumbers) str += '|(?:' + arrayToAlternates(loc['numbers']) + ')+';
      return str;
    }

    function getNum() {
      var arr = ['-?\\d+'].concat(loc['articles']);
      if(loc['numbers']) arr = arr.concat(loc['numbers']);
      return arrayToAlternates(arr);
    }

    function setDefault(name, value) {
      loc[name] = loc[name] || value;
    }

    function setModifiers() {
      var arr = [];
      loc.modifiersByName = {};
      loc['modifiers'].push({ 'name': 'day', 'src': 'yesterday', 'value': -1 });
      loc['modifiers'].push({ 'name': 'day', 'src': 'today', 'value': 0 });
      loc['modifiers'].push({ 'name': 'day', 'src': 'tomorrow', 'value': 1 });
      loc['modifiers'].forEach(function(modifier) {
        var name = modifier.name;
        eachAlternate(modifier.src, function(t) {
          var locEntry = loc[name];
          loc.modifiersByName[t] = modifier;
          arr.push({ name: name, src: t, value: modifier.value });
          loc[name] = locEntry ? locEntry + '|' + t : t;
        });
      });
      loc['day'] += '|' + arrayToAlternates(loc['weekdays']);
      loc['modifiers'] = arr;
    }

    // Initialize the locale
    loc = new Localization(set);
    initializeField('modifiers');
    'months,weekdays,units,numbers,articles,tokens,timeMarker,ampm,timeSuffixes,dateParse,timeParse'.split(',').forEach(initializeField);

    canAbbreviate = !loc['monthSuffix'];

    setArray('months',   canAbbreviate, 12);
    setArray('weekdays', canAbbreviate, 7);
    setArray('units', false, 8);
    setArray('numbers', false, 10);

    setDefault('code', localeCode);
    setDefault('date', getDigit(1,2, loc['digitDate']));
    setDefault('year', "'\\d{2}|" + getDigit(4,4));
    setDefault('num', getNum());

    setModifiers();

    if(loc['monthSuffix']) {
      loc['month'] = getDigit(1,2);
      loc['months'] = '1,2,3,4,5,6,7,8,9,10,11,12'.split(',').map(function(n) { return n + loc['monthSuffix']; });
    }
    loc['full_month'] = getDigit(1,2) + '|' + arrayToAlternates(loc['months']);

    // The order of these formats is very important. Order is reversed so formats that come
    // later will take precedence over formats that come before. This generally means that
    // more specific formats should come later, however, the {year} format should come before
    // {day}, as 2011 needs to be parsed as a year (2011) and not date (20) + hours (11)

    // If the locale has time suffixes then add a time only format for that locale
    // that is separate from the core English-based one.
    if(loc['timeSuffixes'].length > 0) {
      loc.addFormat(prepareTime(RequiredTime, loc), false, TimeFormat)
    }

    loc.addFormat('{day}', true);
    loc.addFormat('{month}' + (loc['monthSuffix'] || ''));
    loc.addFormat('{year}' + (loc['yearSuffix'] || ''));

    loc['timeParse'].forEach(function(src) {
      loc.addFormat(src, true);
    });

    loc['dateParse'].forEach(function(src) {
      loc.addFormat(src);
    });

    return Localizations[localeCode] = loc;
  }


  // General helpers

  function addDateInputFormat(locale, format, match, variant) {
    locale.compiledFormats.unshift({
      variant: variant,
      locale: locale,
      reg: regexp('^' + format + '$', 'i'),
      to: match
    });
  }

  function simpleCapitalize(str) {
    return str.slice(0,1).toUpperCase() + str.slice(1);
  }

  function arrayToAlternates(arr) {
    return arr.filter(function(el) {
      return !!el;
    }).join('|');
  }

  function getNewDate() {
    var fn = date.SugarNewDate;
    return fn ? fn() : new date;
  }

  // Date argument helpers

  function collectDateArguments(args, allowDuration) {
    var obj;
    if(isObjectType(args[0])) {
      return args;
    } else if (isNumber(args[0]) && !isNumber(args[1])) {
      return [args[0]];
    } else if (isString(args[0]) && allowDuration) {
      return [getDateParamsFromString(args[0]), args[1]];
    }
    obj = {};
    DateArgumentUnits.forEach(function(u,i) {
      obj[u.name] = args[i];
    });
    return [obj];
  }

  function getDateParamsFromString(str, num) {
    var match, params = {};
    match = str.match(/^(\d+)?\s?(\w+?)s?$/i);
    if(match) {
      if(isUndefined(num)) {
        num = parseInt(match[1]) || 1;
      }
      params[match[2].toLowerCase()] = num;
    }
    return params;
  }

  // Date iteration helpers

  function iterateOverDateUnits(fn, from, to) {
    var i, unit;
    if(isUndefined(to)) to = DateUnitsReversed.length;
    for(i = from || 0; i < to; i++) {
      unit = DateUnitsReversed[i];
      if(fn(unit.name, unit, i) === false) {
        break;
      }
    }
  }

  // Date parsing helpers

  function getFormatMatch(match, arr) {
    var obj = {}, value, num;
    arr.forEach(function(key, i) {
      value = match[i + 1];
      if(isUndefined(value) || value === '') return;
      if(key === 'year') {
        obj.yearAsString = value.replace(/'/, '');
      }
      num = parseFloat(value.replace(/'/, '').replace(/,/, '.'));
      obj[key] = !isNaN(num) ? num : value.toLowerCase();
    });
    return obj;
  }

  function cleanDateInput(str) {
    str = str.trim().replace(/^just (?=now)|\.+$/i, '');
    return convertAsianDigits(str);
  }

  function convertAsianDigits(str) {
    return str.replace(AsianDigitReg, function(full, disallowed, match) {
      var sum = 0, place = 1, lastWasHolder, lastHolder;
      if(disallowed) return full;
      match.split('').reverse().forEach(function(letter) {
        var value = AsianDigitMap[letter], holder = value > 9;
        if(holder) {
          if(lastWasHolder) sum += place;
          place *= value / (lastHolder || 1);
          lastHolder = value;
        } else {
          if(lastWasHolder === false) {
            place *= 10;
          }
          sum += place * value;
        }
        lastWasHolder = holder;
      });
      if(lastWasHolder) sum += place;
      return sum;
    });
  }

  function getExtendedDate(f, localeCode, prefer, forceUTC) {
    var d, relative, baseLocalization, afterCallbacks, loc, set, unit, unitIndex, weekday, num, tmp;

    d = getNewDate();
    afterCallbacks = [];

    function afterDateSet(fn) {
      afterCallbacks.push(fn);
    }

    function fireCallbacks() {
      afterCallbacks.forEach(function(fn) {
        fn.call();
      });
    }

    function setWeekdayOfMonth() {
      var w = d.getWeekday();
      d.setWeekday((7 * (set['num'] - 1)) + (w > weekday ? weekday + 7 : weekday));
    }

    function setUnitEdge() {
      var modifier = loc.modifiersByName[set['edge']];
      iterateOverDateUnits(function(name) {
        if(isDefined(set[name])) {
          unit = name;
          return false;
        }
      }, 4);
      if(unit === 'year') set.specificity = 'month';
      else if(unit === 'month' || unit === 'week') set.specificity = 'day';
      d[(modifier.value < 0 ? 'endOf' : 'beginningOf') + simpleCapitalize(unit)]();
      // This value of -2 is arbitrary but it's a nice clean way to hook into this system.
      if(modifier.value === -2) d.reset();
    }

    function separateAbsoluteUnits() {
      var params;
      iterateOverDateUnits(function(name, u, i) {
        if(name === 'day') name = 'date';
        if(isDefined(set[name])) {
          // If there is a time unit set that is more specific than
          // the matched unit we have a string like "5:30am in 2 minutes",
          // which is meaningless, so invalidate the date...
          if(i >= unitIndex) {
            invalidateDate(d);
            return false;
          }
          // ...otherwise set the params to set the absolute date
          // as a callback after the relative date has been set.
          params = params || {};
          params[name] = set[name];
          delete set[name];
        }
      });
      if(params) {
        afterDateSet(function() {
          d.set(params, true);
        });
      }
    }

    d.utc(forceUTC);

    if(isDate(f)) {
      // If the source here is already a date object, then the operation
      // is the same as cloning the date, which preserves the UTC flag.
      d.utc(f.isUTC()).setTime(f.getTime());
    } else if(isNumber(f)) {
      d.setTime(f);
    } else if(isObjectType(f)) {
      d.set(f, true);
      set = f;
    } else if(isString(f)) {

      // The act of getting the localization will pre-initialize
      // if it is missing and add the required formats.
      baseLocalization = getLocalization(localeCode);

      // Clean the input and convert Kanji based numerals if they exist.
      f = cleanDateInput(f);

      if(baseLocalization) {
        iterateOverObject(baseLocalization.getFormats(), function(i, dif) {
          var match = f.match(dif.reg);
          if(match) {

            loc = dif.locale;
            set = getFormatMatch(match, dif.to, loc);
            loc.cachedFormat = dif;


            if(set['utc']) {
              d.utc();
            }

            if(set.timestamp) {
              set = set.timestamp;
              return false;
            }

            // If there's a variant (crazy Endian American format), swap the month and day.
            if(dif.variant && !isString(set['month']) && (isString(set['date']) || baseLocalization.hasVariant(localeCode))) {
              tmp = set['month'];
              set['month'] = set['date'];
              set['date']  = tmp;
            }

            // If the year is 2 digits then get the implied century.
            if(set['year'] && set.yearAsString.length === 2) {
              set['year'] = getYearFromAbbreviation(set['year']);
            }

            // Set the month which may be localized.
            if(set['month']) {
              set['month'] = loc.getMonth(set['month']);
              if(set['shift'] && !set['unit']) set['unit'] = loc['units'][7];
            }

            // If there is both a weekday and a date, the date takes precedence.
            if(set['weekday'] && set['date']) {
              delete set['weekday'];
            // Otherwise set a localized weekday.
            } else if(set['weekday']) {
              set['weekday'] = loc.getWeekday(set['weekday']);
              if(set['shift'] && !set['unit']) set['unit'] = loc['units'][5];
            }

            // Relative day localizations such as "today" and "tomorrow".
            if(set['day'] && (tmp = loc.modifiersByName[set['day']])) {
              set['day'] = tmp.value;
              d.reset();
              relative = true;
            // If the day is a weekday, then set that instead.
            } else if(set['day'] && (weekday = loc.getWeekday(set['day'])) > -1) {
              delete set['day'];
              if(set['num'] && set['month']) {
                // If we have "the 2nd tuesday of June", set the day to the beginning of the month, then
                // set the weekday after all other properties have been set. The weekday needs to be set
                // after the actual set because it requires overriding the "prefer" argument which
                // could unintentionally send the year into the future, past, etc.
                afterDateSet(setWeekdayOfMonth);
                set['day'] = 1;
              } else {
                set['weekday'] = weekday;
              }
            }

            if(set['date'] && !isNumber(set['date'])) {
              set['date'] = loc.getNumericDate(set['date']);
            }

            // If the time is 1pm-11pm advance the time by 12 hours.
            if(loc.matchPM(set['ampm']) && set['hour'] < 12) {
              set['hour'] += 12;
            } else if(loc.matchAM(set['ampm']) && set['hour'] === 12) {
              set['hour'] = 0;
            }

            // Adjust for timezone offset
            if('offset_hours' in set || 'offset_minutes' in set) {
              d.utc();
              set['offset_minutes'] = set['offset_minutes'] || 0;
              set['offset_minutes'] += set['offset_hours'] * 60;
              if(set['offset_sign'] === '-') {
                set['offset_minutes'] *= -1;
              }
              set['minute'] -= set['offset_minutes'];
            }

            // Date has a unit like "days", "months", etc. are all relative to the current date.
            if(set['unit']) {
              relative  = true;
              num       = loc.getNumber(set['num']);
              unitIndex = loc.getUnitIndex(set['unit']);
              unit      = English['units'][unitIndex];

              // Formats like "the 15th of last month" or "6:30pm of next week"
              // contain absolute units in addition to relative ones, so separate
              // them here, remove them from the params, and set up a callback to
              // set them after the relative ones have been set.
              separateAbsoluteUnits();

              // Shift and unit, ie "next month", "last week", etc.
              if(set['shift']) {
                num *= (tmp = loc.modifiersByName[set['shift']]) ? tmp.value : 0;
              }

              // Unit and sign, ie "months ago", "weeks from now", etc.
              if(set['sign'] && (tmp = loc.modifiersByName[set['sign']])) {
                num *= tmp.value;
              }

              // Units can be with non-relative dates, set here. ie "the day after monday"
              if(isDefined(set['weekday'])) {
                d.set({'weekday': set['weekday'] }, true);
                delete set['weekday'];
              }

              // Finally shift the unit.
              set[unit] = (set[unit] || 0) + num;
            }

            // If there is an "edge" it needs to be set after the
            // other fields are set. ie "the end of February"
            if(set['edge']) {
              afterDateSet(setUnitEdge);
            }

            if(set['year_sign'] === '-') {
              set['year'] *= -1;
            }

            iterateOverDateUnits(function(name, unit, i) {
              var value = set[name], fraction = value % 1;
              if(fraction) {
                set[DateUnitsReversed[i - 1].name] = round(fraction * (name === 'second' ? 1000 : 60));
                set[name] = floor(value);
              }
            }, 1, 4);
            return false;
          }
        });
      }
      if(!set) {
        // The Date constructor does something tricky like checking the number
        // of arguments so simply passing in undefined won't work.
        if(f !== 'now') {
          d = new date(f);
        }
        if(forceUTC) {
          // Falling back to system date here which cannot be parsed as UTC,
          // so if we're forcing UTC then simply add the offset.
          d.addMinutes(-d.getTimezoneOffset());
        }
      } else if(relative) {
        d.advance(set);
      } else {
        if(d._utc) {
          // UTC times can traverse into other days or even months,
          // so preemtively reset the time here to prevent this.
          d.reset();
        }
        updateDate(d, set, true, false, prefer);
      }
      fireCallbacks();
      // A date created by parsing a string presumes that the format *itself* is UTC, but
      // not that the date, once created, should be manipulated as such. In other words,
      // if you are creating a date object from a server time "2012-11-15T12:00:00Z",
      // in the majority of cases you are using it to create a date that will, after creation,
      // be manipulated as local, so reset the utc flag here.
      d.utc(false);
    }
    return {
      date: d,
      set: set
    }
  }

  // If the year is two digits, add the most appropriate century prefix.
  function getYearFromAbbreviation(year) {
    return round(callDateGet(getNewDate(), 'FullYear') / 100) * 100 - round(year / 100) * 100 + year;
  }

  function getShortHour(d) {
    var hours = callDateGet(d, 'Hours');
    return hours === 0 ? 12 : hours - (floor(hours / 13) * 12);
  }

  // weeksSince won't work here as the result needs to be floored, not rounded.
  function getWeekNumber(date) {
    date = date.clone();
    var dow = callDateGet(date, 'Day') || 7;
    date.addDays(4 - dow).reset();
    return 1 + floor(date.daysSince(date.clone().beginningOfYear()) / 7);
  }

  function getAdjustedUnit(ms) {
    var next, ams = abs(ms), value = ams, unitIndex = 0;
    iterateOverDateUnits(function(name, unit, i) {
      next = floor(withPrecision(ams / unit.multiplier(), 1));
      if(next >= 1) {
        value = next;
        unitIndex = i;
      }
    }, 1);
    return [value, unitIndex, ms];
  }

  function getRelativeWithMonthFallback(date) {
    var adu = getAdjustedUnit(date.millisecondsFromNow());
    if(allowMonthFallback(date, adu)) {
      // If the adjusted unit is in months, then better to use
      // the "monthsfromNow" which applies a special error margin
      // for edge cases such as Jan-09 - Mar-09 being less than
      // 2 months apart (when using a strict numeric definition).
      // The third "ms" element in the array will handle the sign
      // (past or future), so simply take the absolute value here.
      adu[0] = abs(date.monthsFromNow());
      adu[1] = 6;
    }
    return adu;
  }

  function allowMonthFallback(date, adu) {
    // Allow falling back to monthsFromNow if the unit is in months...
    return adu[1] === 6 ||
    // ...or if it's === 4 weeks and there are more days than in the given month
    (adu[1] === 5 && adu[0] === 4 && date.daysFromNow() >= getNewDate().daysInMonth());
  }


  // Date format token helpers

  function createMeridianTokens(slice, caps) {
    var fn = function(d, localeCode) {
      var hours = callDateGet(d, 'Hours');
      return getLocalization(localeCode)['ampm'][floor(hours / 12)] || '';
    }
    createFormatToken('t', fn, 1);
    createFormatToken('tt', fn);
    createFormatToken('T', fn, 1, 1);
    createFormatToken('TT', fn, null, 2);
  }

  function createWeekdayTokens(slice, caps) {
    var fn = function(d, localeCode) {
      var dow = callDateGet(d, 'Day');
      return getLocalization(localeCode)['weekdays'][dow];
    }
    createFormatToken('dow', fn, 3);
    createFormatToken('Dow', fn, 3, 1);
    createFormatToken('weekday', fn);
    createFormatToken('Weekday', fn, null, 1);
  }

  function createMonthTokens(slice, caps) {
    createMonthToken('mon', 0, 3);
    createMonthToken('month', 0);

    // For inflected month forms, namely Russian.
    createMonthToken('month2', 1);
    createMonthToken('month3', 2);
  }

  function createMonthToken(token, multiplier, slice) {
    var fn = function(d, localeCode) {
      var month = callDateGet(d, 'Month');
      return getLocalization(localeCode)['months'][month + (multiplier * 12)];
    };
    createFormatToken(token, fn, slice);
    createFormatToken(simpleCapitalize(token), fn, slice, 1);
  }

  function createFormatToken(t, fn, slice, caps) {
    DateFormatTokens[t] = function(d, localeCode) {
      var str = fn(d, localeCode);
      if(slice) str = str.slice(0, slice);
      if(caps)  str = str.slice(0, caps).toUpperCase() + str.slice(caps);
      return str;
    }
  }

  function createPaddedToken(t, fn, ms) {
    DateFormatTokens[t] = fn;
    DateFormatTokens[t + t] = function (d, localeCode) {
      return padNumber(fn(d, localeCode), 2);
    };
    if(ms) {
      DateFormatTokens[t + t + t] = function (d, localeCode) {
        return padNumber(fn(d, localeCode), 3);
      };
      DateFormatTokens[t + t + t + t] = function (d, localeCode) {
        return padNumber(fn(d, localeCode), 4);
      };
    }
  }


  // Date formatting helpers

  function buildCompiledOutputFormat(format) {
    var match = format.match(/(\{\w+\})|[^{}]+/g);
    CompiledOutputFormats[format] = match.map(function(p) {
      p.replace(/\{(\w+)\}/, function(full, token) {
        p = DateFormatTokens[token] || token;
        return token;
      });
      return p;
    });
  }

  function executeCompiledOutputFormat(date, format, localeCode) {
    var compiledFormat, length, i, t, result = '';
    compiledFormat = CompiledOutputFormats[format];
    for(i = 0, length = compiledFormat.length; i < length; i++) {
      t = compiledFormat[i];
      result += isFunction(t) ? t(date, localeCode) : t;
    }
    return result;
  }

  function formatDate(date, format, relative, localeCode) {
    var adu;
    if(!date.isValid()) {
      return 'Invalid Date';
    } else if(Date[format]) {
      format = Date[format];
    } else if(isFunction(format)) {
      adu = getRelativeWithMonthFallback(date);
      format = format.apply(date, adu.concat(getLocalization(localeCode)));
    }
    if(!format && relative) {
      adu = adu || getRelativeWithMonthFallback(date);
      // Adjust up if time is in ms, as this doesn't
      // look very good for a standard relative date.
      if(adu[1] === 0) {
        adu[1] = 1;
        adu[0] = 1;
      }
      return getLocalization(localeCode).getRelativeFormat(adu);
    }
    format = format || 'long';
    if(format === 'short' || format === 'long' || format === 'full') {
      format = getLocalization(localeCode)[format];
    }

    if(!CompiledOutputFormats[format]) {
      buildCompiledOutputFormat(format);
    }

    return executeCompiledOutputFormat(date, format, localeCode);
  }

  // Date comparison helpers

  function compareDate(d, find, localeCode, buffer, forceUTC) {
    var p, t, min, max, override, capitalized, accuracy = 0, loBuffer = 0, hiBuffer = 0;
    p = getExtendedDate(find, localeCode, null, forceUTC);
    if(buffer > 0) {
      loBuffer = hiBuffer = buffer;
      override = true;
    }
    if(!p.date.isValid()) return false;
    if(p.set && p.set.specificity) {
      DateUnits.forEach(function(u, i) {
        if(u.name === p.set.specificity) {
          accuracy = u.multiplier(p.date, d - p.date) - 1;
        }
      });
      capitalized = simpleCapitalize(p.set.specificity);
      if(p.set['edge'] || p.set['shift']) {
        p.date['beginningOf' + capitalized]();
      }
      if(p.set.specificity === 'month') {
        max = p.date.clone()['endOf' + capitalized]().getTime();
      }
      if(!override && p.set['sign'] && p.set.specificity != 'millisecond') {
        // If the time is relative, there can occasionally be an disparity between the relative date
        // and "now", which it is being compared to, so set an extra buffer to account for this.
        loBuffer = 50;
        hiBuffer = -50;
      }
    }
    t   = d.getTime();
    min = p.date.getTime();
    max = max || (min + accuracy);
    max = compensateForTimezoneTraversal(d, min, max);
    return t >= (min - loBuffer) && t <= (max + hiBuffer);
  }

  function compensateForTimezoneTraversal(d, min, max) {
    var dMin, dMax, minOffset, maxOffset;
    dMin = new date(min);
    dMax = new date(max).utc(d.isUTC());
    if(callDateGet(dMax, 'Hours') !== 23) {
      minOffset = dMin.getTimezoneOffset();
      maxOffset = dMax.getTimezoneOffset();
      if(minOffset !== maxOffset) {
        max += (maxOffset - minOffset).minutes();
      }
    }
    return max;
  }

  function updateDate(d, params, reset, advance, prefer) {
    var weekday, specificityIndex;

    function getParam(key) {
      return isDefined(params[key]) ? params[key] : params[key + 's'];
    }

    function paramExists(key) {
      return isDefined(getParam(key));
    }

    function uniqueParamExists(key, isDay) {
      return paramExists(key) || (isDay && paramExists('weekday'));
    }

    function canDisambiguate() {
      switch(prefer) {
        case -1: return d > getNewDate();
        case  1: return d < getNewDate();
      }
    }

    if(isNumber(params) && advance) {
      // If param is a number and we're advancing, the number is presumed to be milliseconds.
      params = { 'milliseconds': params };
    } else if(isNumber(params)) {
      // Otherwise just set the timestamp and return.
      d.setTime(params);
      return d;
    }

    // "date" can also be passed for the day
    if(isDefined(params['date'])) {
      params['day'] = params['date'];
    }

    // Reset any unit lower than the least specific unit set. Do not do this for weeks
    // or for years. This needs to be performed before the acutal setting of the date
    // because the order needs to be reversed in order to get the lowest specificity,
    // also because higher order units can be overwritten by lower order units, such
    // as setting hour: 3, minute: 345, etc.
    iterateOverDateUnits(function(name, unit, i) {
      var isDay = name === 'day';
      if(uniqueParamExists(name, isDay)) {
        params.specificity = name;
        specificityIndex = +i;
        return false;
      } else if(reset && name !== 'week' && (!isDay || !paramExists('week'))) {
        // Days are relative to months, not weeks, so don't reset if a week exists.
        callDateSet(d, unit.method, (isDay ? 1 : 0));
      }
    });

    // Now actually set or advance the date in order, higher units first.
    DateUnits.forEach(function(u, i) {
      var name = u.name, method = u.method, higherUnit = DateUnits[i - 1], value;
      value = getParam(name)
      if(isUndefined(value)) return;
      if(advance) {
        if(name === 'week') {
          value  = (params['day'] || 0) + (value * 7);
          method = 'Date';
        }
        value = (value * advance) + callDateGet(d, method);
      } else if(name === 'month' && paramExists('day')) {
        // When setting the month, there is a chance that we will traverse into a new month.
        // This happens in DST shifts, for example June 1st DST jumping to January 1st
        // (non-DST) will have a shift of -1:00 which will traverse into the previous year.
        // Prevent this by proactively setting the day when we know it will be set again anyway.
        // It can also happen when there are not enough days in the target month. This second
        // situation is identical to checkMonthTraversal below, however when we are advancing
        // we want to reset the date to "the last date in the target month". In the case of
        // DST shifts, however, we want to avoid the "edges" of months as that is where this
        // unintended traversal can happen. This is the reason for the different handling of
        // two similar but slightly different situations.
        //
        // TL;DR This method avoids the edges of a month IF not advancing and the date is going
        // to be set anyway, while checkMonthTraversal resets the date to the last day if advancing.
        //
        callDateSet(d, 'Date', 15);
      }
      callDateSet(d, method, value);
      if(advance && name === 'month') {
        checkMonthTraversal(d, value);
      }
    });


    // If a weekday is included in the params, set it ahead of time and set the params
    // to reflect the updated date so that resetting works properly.
    if(!advance && !paramExists('day') && paramExists('weekday')) {
      var weekday = getParam('weekday'), isAhead, futurePreferred;
      d.setWeekday(weekday);
    }

    // If past or future is preferred, then the process of "disambiguation" will ensure that an
    // ambiguous time/date ("4pm", "thursday", "June", etc.) will be in the past or future.
    if(canDisambiguate()) {
      iterateOverDateUnits(function(name, unit) {
        var ambiguous = unit.ambiguous || (name === 'week' && paramExists('weekday'));
        if(ambiguous && !uniqueParamExists(name, name === 'day')) {
          d[unit.addMethod](prefer);
          return false;
        }
      }, specificityIndex + 1);
    }
    return d;
  }

  // The ISO format allows times strung together without a demarcating ":", so make sure
  // that these markers are now optional.
  function prepareTime(format, loc, iso) {
    var timeSuffixMapping = {'h':0,'m':1,'s':2}, add;
    loc = loc || English;
    return format.replace(/{([a-z])}/g, function(full, token) {
      var separators = [],
          isHours = token === 'h',
          tokenIsRequired = isHours && !iso;
      if(token === 't') {
        return loc['ampm'].join('|');
      } else {
        if(isHours) {
          separators.push(':');
        }
        if(add = loc['timeSuffixes'][timeSuffixMapping[token]]) {
          separators.push(add + '\\s*');
        }
        return separators.length === 0 ? '' : '(?:' + separators.join('|') + ')' + (tokenIsRequired ? '' : '?');
      }
    });
  }


  // If the month is being set, then we don't want to accidentally
  // traverse into a new month just because the target month doesn't have enough
  // days. In other words, "5 months ago" from July 30th is still February, even
  // though there is no February 30th, so it will of necessity be February 28th
  // (or 29th in the case of a leap year).

  function checkMonthTraversal(date, targetMonth) {
    if(targetMonth < 0) {
      targetMonth = targetMonth % 12 + 12;
    }
    if(targetMonth % 12 != callDateGet(date, 'Month')) {
      callDateSet(date, 'Date', 0);
    }
  }

  function createDate(args, prefer, forceUTC) {
    var f, localeCode;
    if(isNumber(args[1])) {
      // If the second argument is a number, then we have an enumerated constructor type as in "new Date(2003, 2, 12);"
      f = collectDateArguments(args)[0];
    } else {
      f          = args[0];
      localeCode = args[1];
    }
    return getExtendedDate(f, localeCode, prefer, forceUTC).date;
  }

  function invalidateDate(d) {
    d.setTime(NaN);
  }

  function buildDateUnits() {
    DateUnitsReversed = DateUnits.concat().reverse();
    DateArgumentUnits = DateUnits.concat();
    DateArgumentUnits.splice(2,1);
  }


  /***
   * @method [units]Since([d], [locale] = currentLocale)
   * @returns Number
   * @short Returns the time since [d] in the appropriate unit.
   * @extra [d] will accept a date object, timestamp, or text format. If not specified, [d] is assumed to be now. [locale] can be passed to specify the locale that the date is in. %[unit]Ago% is provided as an alias to make this more readable when [d] is assumed to be the current date. For more see @date_format.
   *
   * @set
   *   millisecondsSince
   *   secondsSince
   *   minutesSince
   *   hoursSince
   *   daysSince
   *   weeksSince
   *   monthsSince
   *   yearsSince
   *
   * @example
   *
   *   Date.create().millisecondsSince('1 hour ago') -> 3,600,000
   *   Date.create().daysSince('1 week ago')         -> 7
   *   Date.create().yearsSince('15 years ago')      -> 15
   *   Date.create('15 years ago').yearsAgo()        -> 15
   *
   ***
   * @method [units]Ago()
   * @returns Number
   * @short Returns the time ago in the appropriate unit.
   *
   * @set
   *   millisecondsAgo
   *   secondsAgo
   *   minutesAgo
   *   hoursAgo
   *   daysAgo
   *   weeksAgo
   *   monthsAgo
   *   yearsAgo
   *
   * @example
   *
   *   Date.create('last year').millisecondsAgo() -> 3,600,000
   *   Date.create('last year').daysAgo()         -> 7
   *   Date.create('last year').yearsAgo()        -> 15
   *
   ***
   * @method [units]Until([d], [locale] = currentLocale)
   * @returns Number
   * @short Returns the time until [d] in the appropriate unit.
   * @extra [d] will accept a date object, timestamp, or text format. If not specified, [d] is assumed to be now. [locale] can be passed to specify the locale that the date is in. %[unit]FromNow% is provided as an alias to make this more readable when [d] is assumed to be the current date. For more see @date_format.
   *
   * @set
   *   millisecondsUntil
   *   secondsUntil
   *   minutesUntil
   *   hoursUntil
   *   daysUntil
   *   weeksUntil
   *   monthsUntil
   *   yearsUntil
   *
   * @example
   *
   *   Date.create().millisecondsUntil('1 hour from now') -> 3,600,000
   *   Date.create().daysUntil('1 week from now')         -> 7
   *   Date.create().yearsUntil('15 years from now')      -> 15
   *   Date.create('15 years from now').yearsFromNow()    -> 15
   *
   ***
   * @method [units]FromNow()
   * @returns Number
   * @short Returns the time from now in the appropriate unit.
   *
   * @set
   *   millisecondsFromNow
   *   secondsFromNow
   *   minutesFromNow
   *   hoursFromNow
   *   daysFromNow
   *   weeksFromNow
   *   monthsFromNow
   *   yearsFromNow
   *
   * @example
   *
   *   Date.create('next year').millisecondsFromNow() -> 3,600,000
   *   Date.create('next year').daysFromNow()         -> 7
   *   Date.create('next year').yearsFromNow()        -> 15
   *
   ***
   * @method add[Units](<num>, [reset] = false)
   * @returns Date
   * @short Adds <num> of the unit to the date. If [reset] is true, all lower units will be reset.
   * @extra Note that "months" is ambiguous as a unit of time. If the target date falls on a day that does not exist (ie. August 31 -> February 31), the date will be shifted to the last day of the month. Don't use %addMonths% if you need precision.
   *
   * @set
   *   addMilliseconds
   *   addSeconds
   *   addMinutes
   *   addHours
   *   addDays
   *   addWeeks
   *   addMonths
   *   addYears
   *
   * @example
   *
   *   Date.create().addMilliseconds(5) -> current time + 5 milliseconds
   *   Date.create().addDays(5)         -> current time + 5 days
   *   Date.create().addYears(5)        -> current time + 5 years
   *
   ***
   * @method isLast[Unit]()
   * @returns Boolean
   * @short Returns true if the date is last week/month/year.
   *
   * @set
   *   isLastWeek
   *   isLastMonth
   *   isLastYear
   *
   * @example
   *
   *   Date.create('yesterday').isLastWeek()  -> true or false?
   *   Date.create('yesterday').isLastMonth() -> probably not...
   *   Date.create('yesterday').isLastYear()  -> even less likely...
   *
   ***
   * @method isThis[Unit]()
   * @returns Boolean
   * @short Returns true if the date is this week/month/year.
   *
   * @set
   *   isThisWeek
   *   isThisMonth
   *   isThisYear
   *
   * @example
   *
   *   Date.create('tomorrow').isThisWeek()  -> true or false?
   *   Date.create('tomorrow').isThisMonth() -> probably...
   *   Date.create('tomorrow').isThisYear()  -> signs point to yes...
   *
   ***
   * @method isNext[Unit]()
   * @returns Boolean
   * @short Returns true if the date is next week/month/year.
   *
   * @set
   *   isNextWeek
   *   isNextMonth
   *   isNextYear
   *
   * @example
   *
   *   Date.create('tomorrow').isNextWeek()  -> true or false?
   *   Date.create('tomorrow').isNextMonth() -> probably not...
   *   Date.create('tomorrow').isNextYear()  -> even less likely...
   *
   ***
   * @method beginningOf[Unit]()
   * @returns Date
   * @short Sets the date to the beginning of the appropriate unit.
   *
   * @set
   *   beginningOfDay
   *   beginningOfWeek
   *   beginningOfMonth
   *   beginningOfYear
   *
   * @example
   *
   *   Date.create().beginningOfDay()   -> the beginning of today (resets the time)
   *   Date.create().beginningOfWeek()  -> the beginning of the week
   *   Date.create().beginningOfMonth() -> the beginning of the month
   *   Date.create().beginningOfYear()  -> the beginning of the year
   *
   ***
   * @method endOf[Unit]()
   * @returns Date
   * @short Sets the date to the end of the appropriate unit.
   *
   * @set
   *   endOfDay
   *   endOfWeek
   *   endOfMonth
   *   endOfYear
   *
   * @example
   *
   *   Date.create().endOfDay()   -> the end of today (sets the time to 23:59:59.999)
   *   Date.create().endOfWeek()  -> the end of the week
   *   Date.create().endOfMonth() -> the end of the month
   *   Date.create().endOfYear()  -> the end of the year
   *
   ***/

  function buildDateMethods() {
    extendSimilar(date, true, true, DateUnits, function(methods, u, i) {
      var name = u.name, caps = simpleCapitalize(name), multiplier = u.multiplier(), since, until;
      u.addMethod = 'add' + caps + 's';
      // "since/until now" only count "past" an integer, i.e. "2 days ago" is
      // anything between 2 - 2.999 days. The default margin of error is 0.999,
      // but "months" have an inherently larger margin, as the number of days
      // in a given month may be significantly less than the number of days in
      // the average month, so for example "30 days" before March 15 may in fact
      // be 1 month ago. Years also have a margin of error due to leap years,
      // but this is roughly 0.999 anyway (365 / 365.25). Other units do not
      // technically need the error margin applied to them but this accounts
      // for discrepancies like (15).hoursAgo() which technically creates the
      // current date first, then creates a date 15 hours before and compares
      // them, the discrepancy between the creation of the 2 dates means that
      // they may actually be 15.0001 hours apart. Milliseconds don't have
      // fractions, so they won't be subject to this error margin.
      function applyErrorMargin(ms) {
        var num      = ms / multiplier,
            fraction = num % 1,
            error    = u.error || 0.999;
        if(fraction && abs(fraction % 1) > error) {
          num = round(num);
        }
        return num < 0 ? ceil(num) : floor(num);
      }
      since = function(f, localeCode) {
        return applyErrorMargin(this.getTime() - date.create(f, localeCode).getTime());
      };
      until = function(f, localeCode) {
        return applyErrorMargin(date.create(f, localeCode).getTime() - this.getTime());
      };
      methods[name+'sAgo']     = until;
      methods[name+'sUntil']   = until;
      methods[name+'sSince']   = since;
      methods[name+'sFromNow'] = since;
      methods[u.addMethod] = function(num, reset) {
        var set = {};
        set[name] = num;
        return this.advance(set, reset);
      };
      buildNumberToDateAlias(u, multiplier);
      if(i < 3) {
        ['Last','This','Next'].forEach(function(shift) {
          methods['is' + shift + caps] = function() {
            return compareDate(this, shift + ' ' + name, 'en');
          };
        });
      }
      if(i < 4) {
        methods['beginningOf' + caps] = function() {
          var set = {};
          switch(name) {
            case 'year':  set['year']    = callDateGet(this, 'FullYear'); break;
            case 'month': set['month']   = callDateGet(this, 'Month');    break;
            case 'day':   set['day']     = callDateGet(this, 'Date');     break;
            case 'week':  set['weekday'] = 0; break;
          }
          return this.set(set, true);
        };
        methods['endOf' + caps] = function() {
          var set = { 'hours': 23, 'minutes': 59, 'seconds': 59, 'milliseconds': 999 };
          switch(name) {
            case 'year':  set['month']   = 11; set['day'] = 31; break;
            case 'month': set['day']     = this.daysInMonth();  break;
            case 'week':  set['weekday'] = 6;                   break;
          }
          return this.set(set, true);
        };
      }
    });
  }

  function buildCoreInputFormats() {
    English.addFormat('([+-])?(\\d{4,4})[-.]?{full_month}[-.]?(\\d{1,2})?', true, ['year_sign','year','month','date'], false, true);
    English.addFormat('(\\d{1,2})[-.\\/]{full_month}(?:[-.\\/](\\d{2,4}))?', true, ['date','month','year'], true);
    English.addFormat('{full_month}[-.](\\d{4,4})', false, ['month','year']);
    English.addFormat('\\/Date\\((\\d+(?:[+-]\\d{4,4})?)\\)\\/', false, ['timestamp'])
    English.addFormat(prepareTime(RequiredTime, English), false, TimeFormat)

    // When a new locale is initialized it will have the CoreDateFormats initialized by default.
    // From there, adding new formats will push them in front of the previous ones, so the core
    // formats will be the last to be reached. However, the core formats themselves have English
    // months in them, which means that English needs to first be initialized and creates a race
    // condition. I'm getting around this here by adding these generalized formats in the order
    // specific -> general, which will mean they will be added to the English localization in
    // general -> specific order, then chopping them off the front and reversing to get the correct
    // order. Note that there are 7 formats as 2 have times which adds a front and a back format.
    CoreDateFormats = English.compiledFormats.slice(0,7).reverse();
    English.compiledFormats = English.compiledFormats.slice(7).concat(CoreDateFormats);
  }

  function buildFormatTokens() {

    createPaddedToken('f', function(d) {
      return callDateGet(d, 'Milliseconds');
    }, true);

    createPaddedToken('s', function(d) {
      return callDateGet(d, 'Seconds');
    });

    createPaddedToken('m', function(d) {
      return callDateGet(d, 'Minutes');
    });

    createPaddedToken('h', function(d) {
      return callDateGet(d, 'Hours') % 12 || 12;
    });

    createPaddedToken('H', function(d) {
      return callDateGet(d, 'Hours');
    });

    createPaddedToken('d', function(d) {
      return callDateGet(d, 'Date');
    });

    createPaddedToken('M', function(d) {
      return callDateGet(d, 'Month') + 1;
    });

    createMeridianTokens();
    createWeekdayTokens();
    createMonthTokens();

    // Aliases
    DateFormatTokens['ms']           = DateFormatTokens['f'];
    DateFormatTokens['milliseconds'] = DateFormatTokens['f'];
    DateFormatTokens['seconds']      = DateFormatTokens['s'];
    DateFormatTokens['minutes']      = DateFormatTokens['m'];
    DateFormatTokens['hours']        = DateFormatTokens['h'];
    DateFormatTokens['24hr']         = DateFormatTokens['H'];
    DateFormatTokens['12hr']         = DateFormatTokens['h'];
    DateFormatTokens['date']         = DateFormatTokens['d'];
    DateFormatTokens['day']          = DateFormatTokens['d'];
    DateFormatTokens['year']         = DateFormatTokens['yyyy'];

  }

  function buildFormatShortcuts() {
    extendSimilar(date, true, true, 'short,long,full', function(methods, name) {
      methods[name] = function(localeCode) {
        return formatDate(this, name, false, localeCode);
      }
    });
  }

  function buildAsianDigits() {
    KanjiDigits.split('').forEach(function(digit, value) {
      var holder;
      if(value > 9) {
        value = pow(10, value - 9);
      }
      AsianDigitMap[digit] = value;
    });
    simpleMerge(AsianDigitMap, NumberNormalizeMap);
    // Kanji numerals may also be included in phrases which are text-based rather
    // than actual numbers such as Chinese weekdays (ä¸Šå‘¨ä¸‰), and "the day before
    // yesterday" (ä¸€æ˜¨æ—¥) in Japanese, so don't match these.
    AsianDigitReg = regexp('([æœŸé€±å‘¨])?([' + KanjiDigits + FullWidthDigits + ']+)(?!æ˜¨)', 'g');
  }

   /***
   * @method is[Day]()
   * @returns Boolean
   * @short Returns true if the date falls on that day.
   * @extra Also available: %isYesterday%, %isToday%, %isTomorrow%, %isWeekday%, and %isWeekend%.
   *
   * @set
   *   isToday
   *   isYesterday
   *   isTomorrow
   *   isWeekday
   *   isWeekend
   *   isSunday
   *   isMonday
   *   isTuesday
   *   isWednesday
   *   isThursday
   *   isFriday
   *   isSaturday
   *
   * @example
   *
   *   Date.create('tomorrow').isToday() -> false
   *   Date.create('thursday').isTomorrow() -> ?
   *   Date.create('yesterday').isWednesday() -> ?
   *   Date.create('today').isWeekend() -> ?
   *
   ***
   * @method isFuture()
   * @returns Boolean
   * @short Returns true if the date is in the future.
   * @example
   *
   *   Date.create('next week').isFuture() -> true
   *   Date.create('last week').isFuture() -> false
   *
   ***
   * @method isPast()
   * @returns Boolean
   * @short Returns true if the date is in the past.
   * @example
   *
   *   Date.create('last week').isPast() -> true
   *   Date.create('next week').isPast() -> false
   *
   ***/
  function buildRelativeAliases() {
    var special  = 'today,yesterday,tomorrow,weekday,weekend,future,past'.split(',');
    var weekdays = English['weekdays'].slice(0,7);
    var months   = English['months'].slice(0,12);
    extendSimilar(date, true, true, special.concat(weekdays).concat(months), function(methods, name) {
      methods['is'+ simpleCapitalize(name)] = function(utc) {
       return this.is(name, 0, utc);
      };
    });
  }

  function buildUTCAliases() {
    // Don't want to use extend here as it will override
    // the actual "utc" method on the prototype.
    if(date['utc']) return;
    date['utc'] = {

        'create': function() {
          return createDate(arguments, 0, true);
        },

        'past': function() {
          return createDate(arguments, -1, true);
        },

        'future': function() {
          return createDate(arguments, 1, true);
        }
    };
  }

  function setDateProperties() {
    extend(date, false , true, {
      'RFC1123': '{Dow}, {dd} {Mon} {yyyy} {HH}:{mm}:{ss} {tz}',
      'RFC1036': '{Weekday}, {dd}-{Mon}-{yy} {HH}:{mm}:{ss} {tz}',
      'ISO8601_DATE': '{yyyy}-{MM}-{dd}',
      'ISO8601_DATETIME': '{yyyy}-{MM}-{dd}T{HH}:{mm}:{ss}.{fff}{isotz}'
    });
  }


  extend(date, false, true, {

     /***
     * @method Date.create(<d>, [locale] = currentLocale)
     * @returns Date
     * @short Alternate Date constructor which understands many different text formats, a timestamp, or another date.
     * @extra If no argument is given, date is assumed to be now. %Date.create% additionally can accept enumerated parameters as with the standard date constructor. [locale] can be passed to specify the locale that the date is in. When unspecified, the current locale (default is English) is assumed. UTC-based dates can be created through the %utc% object. For more see @date_format.
     * @set
     *   Date.utc.create
     *
     * @example
     *
     *   Date.create('July')          -> July of this year
     *   Date.create('1776')          -> 1776
     *   Date.create('today')         -> today
     *   Date.create('wednesday')     -> This wednesday
     *   Date.create('next friday')   -> Next friday
     *   Date.create('July 4, 1776')  -> July 4, 1776
     *   Date.create(-446806800000)   -> November 5, 1955
     *   Date.create(1776, 6, 4)      -> July 4, 1776
     *   Date.create('1776å¹´07æœˆ04æ—¥', 'ja') -> July 4, 1776
     *   Date.utc.create('July 4, 1776', 'en')  -> July 4, 1776
     *
     ***/
    'create': function() {
      return createDate(arguments);
    },

     /***
     * @method Date.past(<d>, [locale] = currentLocale)
     * @returns Date
     * @short Alternate form of %Date.create% with any ambiguity assumed to be the past.
     * @extra For example %"Sunday"% can be either "the Sunday coming up" or "the Sunday last" depending on context. Note that dates explicitly in the future ("next Sunday") will remain in the future. This method simply provides a hint when ambiguity exists. UTC-based dates can be created through the %utc% object. For more, see @date_format.
     * @set
     *   Date.utc.past
     *
     * @example
     *
     *   Date.past('July')          -> July of this year or last depending on the current month
     *   Date.past('Wednesday')     -> This wednesday or last depending on the current weekday
     *
     ***/
    'past': function() {
      return createDate(arguments, -1);
    },

     /***
     * @method Date.future(<d>, [locale] = currentLocale)
     * @returns Date
     * @short Alternate form of %Date.create% with any ambiguity assumed to be the future.
     * @extra For example %"Sunday"% can be either "the Sunday coming up" or "the Sunday last" depending on context. Note that dates explicitly in the past ("last Sunday") will remain in the past. This method simply provides a hint when ambiguity exists. UTC-based dates can be created through the %utc% object. For more, see @date_format.
     * @set
     *   Date.utc.future
     *
     * @example
     *
     *   Date.future('July')          -> July of this year or next depending on the current month
     *   Date.future('Wednesday')     -> This wednesday or next depending on the current weekday
     *
     ***/
    'future': function() {
      return createDate(arguments, 1);
    },

     /***
     * @method Date.addLocale(<code>, <set>)
     * @returns Locale
     * @short Adds a locale <set> to the locales understood by Sugar.
     * @extra For more see @date_format.
     *
     ***/
    'addLocale': function(localeCode, set) {
      return setLocalization(localeCode, set);
    },

     /***
     * @method Date.setLocale(<code>)
     * @returns Locale
     * @short Sets the current locale to be used with dates.
     * @extra Sugar has support for 13 locales that are available through the "Date Locales" package. In addition you can define a new locale with %Date.addLocale%. For more see @date_format.
     *
     ***/
    'setLocale': function(localeCode, set) {
      var loc = getLocalization(localeCode, false);
      CurrentLocalization = loc;
      // The code is allowed to be more specific than the codes which are required:
      // i.e. zh-CN or en-US. Currently this only affects US date variants such as 8/10/2000.
      if(localeCode && localeCode != loc['code']) {
        loc['code'] = localeCode;
      }
      return loc;
    },

     /***
     * @method Date.getLocale([code] = current)
     * @returns Locale
     * @short Gets the locale for the given code, or the current locale.
     * @extra The resulting locale object can be manipulated to provide more control over date localizations. For more about locales, see @date_format.
     *
     ***/
    'getLocale': function(localeCode) {
      return !localeCode ? CurrentLocalization : getLocalization(localeCode, false);
    },

     /**
     * @method Date.addFormat(<format>, <match>, [code] = null)
     * @returns Nothing
     * @short Manually adds a new date input format.
     * @extra This method allows fine grained control for alternate formats. <format> is a string that can have regex tokens inside. <match> is an array of the tokens that each regex capturing group will map to, for example %year%, %date%, etc. For more, see @date_format.
     *
     **/
    'addFormat': function(format, match, localeCode) {
      addDateInputFormat(getLocalization(localeCode), format, match);
    }

  });

  extend(date, true, true, {

     /***
     * @method set(<set>, [reset] = false)
     * @returns Date
     * @short Sets the date object.
     * @extra This method can accept multiple formats including a single number as a timestamp, an object, or enumerated parameters (as with the Date constructor). If [reset] is %true%, any units more specific than those passed will be reset.
     *
     * @example
     *
     *   new Date().set({ year: 2011, month: 11, day: 31 }) -> December 31, 2011
     *   new Date().set(2011, 11, 31)                       -> December 31, 2011
     *   new Date().set(86400000)                           -> 1 day after Jan 1, 1970
     *   new Date().set({ year: 2004, month: 6 }, true)     -> June 1, 2004, 00:00:00.000
     *
     ***/
    'set': function() {
      var args = collectDateArguments(arguments);
      return updateDate(this, args[0], args[1])
    },

     /***
     * @method setWeekday()
     * @returns Nothing
     * @short Sets the weekday of the date.
     * @extra In order to maintain a parallel with %getWeekday% (which itself is an alias for Javascript native %getDay%), Sunday is considered day %0%. This contrasts with ISO-8601 standard (used in %getISOWeek% and %setISOWeek%) which places Sunday at the end of the week (day 7). This effectively means that passing %0% to this method while in the middle of a week will rewind the date, where passing %7% will advance it.
     *
     * @example
     *
     *   d = new Date(); d.setWeekday(1); d; -> Monday of this week
     *   d = new Date(); d.setWeekday(6); d; -> Saturday of this week
     *
     ***/
    'setWeekday': function(dow) {
      if(isUndefined(dow)) return;
      return callDateSet(this, 'Date', callDateGet(this, 'Date') + dow - callDateGet(this, 'Day'));
    },

     /***
     * @method setISOWeek()
     * @returns Nothing
     * @short Sets the week (of the year) as defined by the ISO-8601 standard.
     * @extra Note that this standard places Sunday at the end of the week (day 7).
     *
     * @example
     *
     *   d = new Date(); d.setISOWeek(15); d; -> 15th week of the year
     *
     ***/
    'setISOWeek': function(week) {
      var weekday = callDateGet(this, 'Day') || 7;
      if(isUndefined(week)) return;
      this.set({ 'month': 0, 'date': 4 });
      this.set({ 'weekday': 1 });
      if(week > 1) {
        this.addWeeks(week - 1);
      }
      if(weekday !== 1) {
        this.advance({ 'days': weekday - 1 });
      }
      return this.getTime();
    },

     /***
     * @method getISOWeek()
     * @returns Number
     * @short Gets the date's week (of the year) as defined by the ISO-8601 standard.
     * @extra Note that this standard places Sunday at the end of the week (day 7). If %utc% is set on the date, the week will be according to UTC time.
     *
     * @example
     *
     *   new Date().getISOWeek()    -> today's week of the year
     *
     ***/
    'getISOWeek': function() {
      return getWeekNumber(this);
    },

     /***
     * @method beginningOfISOWeek()
     * @returns Date
     * @short Set the date to the beginning of week as defined by this ISO-8601 standard.
     * @extra Note that this standard places Monday at the start of the week.
     * @example
     *
     *   Date.create().beginningOfISOWeek() -> Monday
     *
     ***/
    'beginningOfISOWeek': function() {
      var day = this.getDay();
      if(day === 0) {
        day = -6;
      } else if(day !== 1) {
        day = 1;
      }
      this.setWeekday(day);
      return this.reset();
    },

     /***
     * @method endOfISOWeek()
     * @returns Date
     * @short Set the date to the end of week as defined by this ISO-8601 standard.
     * @extra Note that this standard places Sunday at the end of the week.
     * @example
     *
     *   Date.create().endOfISOWeek() -> Sunday
     *
     ***/
    'endOfISOWeek': function() {
      if(this.getDay() !== 0) {
        this.setWeekday(7);
      }
      return this.endOfDay()
    },

     /***
     * @method getUTCOffset([iso])
     * @returns String
     * @short Returns a string representation of the offset from UTC time. If [iso] is true the offset will be in ISO8601 format.
     * @example
     *
     *   new Date().getUTCOffset()     -> "+0900"
     *   new Date().getUTCOffset(true) -> "+09:00"
     *
     ***/
    'getUTCOffset': function(iso) {
      var offset = this._utc ? 0 : this.getTimezoneOffset();
      var colon  = iso === true ? ':' : '';
      if(!offset && iso) return 'Z';
      return padNumber(floor(-offset / 60), 2, true) + colon + padNumber(abs(offset % 60), 2);
    },

     /***
     * @method utc([on] = true)
     * @returns Date
     * @short Sets the internal utc flag for the date. When on, UTC-based methods will be called internally.
     * @extra For more see @date_format.
     * @example
     *
     *   new Date().utc(true)
     *   new Date().utc(false)
     *
     ***/
    'utc': function(set) {
      defineProperty(this, '_utc', set === true || arguments.length === 0);
      return this;
    },

     /***
     * @method isUTC()
     * @returns Boolean
     * @short Returns true if the date has no timezone offset.
     * @extra This will also return true for utc-based dates (dates that have the %utc% method set true). Note that even if the utc flag is set, %getTimezoneOffset% will always report the same thing as Javascript always reports that based on the environment's locale.
     * @example
     *
     *   new Date().isUTC()           -> true or false?
     *   new Date().utc(true).isUTC() -> true
     *
     ***/
    'isUTC': function() {
      return !!this._utc || this.getTimezoneOffset() === 0;
    },

     /***
     * @method advance(<set>, [reset] = false)
     * @returns Date
     * @short Sets the date forward.
     * @extra This method can accept multiple formats including an object, a string in the format %3 days%, a single number as milliseconds, or enumerated parameters (as with the Date constructor). If [reset] is %true%, any units more specific than those passed will be reset. For more see @date_format.
     * @example
     *
     *   new Date().advance({ year: 2 }) -> 2 years in the future
     *   new Date().advance('2 days')    -> 2 days in the future
     *   new Date().advance(0, 2, 3)     -> 2 months 3 days in the future
     *   new Date().advance(86400000)    -> 1 day in the future
     *
     ***/
    'advance': function() {
      var args = collectDateArguments(arguments, true);
      return updateDate(this, args[0], args[1], 1);
    },

     /***
     * @method rewind(<set>, [reset] = false)
     * @returns Date
     * @short Sets the date back.
     * @extra This method can accept multiple formats including a single number as a timestamp, an object, or enumerated parameters (as with the Date constructor). If [reset] is %true%, any units more specific than those passed will be reset. For more see @date_format.
     * @example
     *
     *   new Date().rewind({ year: 2 }) -> 2 years in the past
     *   new Date().rewind(0, 2, 3)     -> 2 months 3 days in the past
     *   new Date().rewind(86400000)    -> 1 day in the past
     *
     ***/
    'rewind': function() {
      var args = collectDateArguments(arguments, true);
      return updateDate(this, args[0], args[1], -1);
    },

     /***
     * @method isValid()
     * @returns Boolean
     * @short Returns true if the date is valid.
     * @example
     *
     *   new Date().isValid()         -> true
     *   new Date('flexor').isValid() -> false
     *
     ***/
    'isValid': function() {
      return !isNaN(this.getTime());
    },

     /***
     * @method isAfter(<d>, [margin] = 0)
     * @returns Boolean
     * @short Returns true if the date is after the <d>.
     * @extra [margin] is to allow extra margin of error (in ms). <d> will accept a date object, timestamp, or text format. If not specified, <d> is assumed to be now. See @date_format for more.
     * @example
     *
     *   new Date().isAfter('tomorrow')  -> false
     *   new Date().isAfter('yesterday') -> true
     *
     ***/
    'isAfter': function(d, margin, utc) {
      return this.getTime() > date.create(d).getTime() - (margin || 0);
    },

     /***
     * @method isBefore(<d>, [margin] = 0)
     * @returns Boolean
     * @short Returns true if the date is before <d>.
     * @extra [margin] is to allow extra margin of error (in ms). <d> will accept a date object, timestamp, or text format. If not specified, <d> is assumed to be now. See @date_format for more.
     * @example
     *
     *   new Date().isBefore('tomorrow')  -> true
     *   new Date().isBefore('yesterday') -> false
     *
     ***/
    'isBefore': function(d, margin) {
      return this.getTime() < date.create(d).getTime() + (margin || 0);
    },

     /***
     * @method isBetween(<d1>, <d2>, [margin] = 0)
     * @returns Boolean
     * @short Returns true if the date falls between <d1> and <d2>.
     * @extra [margin] is to allow extra margin of error (in ms). <d1> and <d2> will accept a date object, timestamp, or text format. If not specified, they are assumed to be now. See @date_format for more.
     * @example
     *
     *   new Date().isBetween('yesterday', 'tomorrow')    -> true
     *   new Date().isBetween('last year', '2 years ago') -> false
     *
     ***/
    'isBetween': function(d1, d2, margin) {
      var t  = this.getTime();
      var t1 = date.create(d1).getTime();
      var t2 = date.create(d2).getTime();
      var lo = min(t1, t2);
      var hi = max(t1, t2);
      margin = margin || 0;
      return (lo - margin < t) && (hi + margin > t);
    },

     /***
     * @method isLeapYear()
     * @returns Boolean
     * @short Returns true if the date is a leap year.
     * @example
     *
     *   Date.create('2000').isLeapYear() -> true
     *
     ***/
    'isLeapYear': function() {
      var year = callDateGet(this, 'FullYear');
      return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    },

     /***
     * @method daysInMonth()
     * @returns Number
     * @short Returns the number of days in the date's month.
     * @example
     *
     *   Date.create('May').daysInMonth()            -> 31
     *   Date.create('February, 2000').daysInMonth() -> 29
     *
     ***/
    'daysInMonth': function() {
      return 32 - callDateGet(new date(callDateGet(this, 'FullYear'), callDateGet(this, 'Month'), 32), 'Date');
    },

     /***
     * @method format(<format>, [locale] = currentLocale)
     * @returns String
     * @short Formats and outputs the date.
     * @extra <format> can be a number of pre-determined formats or a string of tokens. Locale-specific formats are %short%, %long%, and %full% which have their own aliases and can be called with %date.short()%, etc. If <format> is not specified the %long% format is assumed. [locale] specifies a locale code to use (if not specified the current locale is used). See @date_format for more details.
     *
     * @set
     *   short
     *   long
     *   full
     *
     * @example
     *
     *   Date.create().format()                                   -> ex. July 4, 2003
     *   Date.create().format('{Weekday} {d} {Month}, {yyyy}')    -> ex. Monday July 4, 2003
     *   Date.create().format('{hh}:{mm}')                        -> ex. 15:57
     *   Date.create().format('{12hr}:{mm}{tt}')                  -> ex. 3:57pm
     *   Date.create().format(Date.ISO8601_DATETIME)              -> ex. 2011-07-05 12:24:55.528Z
     *   Date.create('last week').format('short', 'ja')                -> ex. å…ˆé€±
     *   Date.create('yesterday').format(function(value,unit,ms,loc) {
     *     // value = 1, unit = 3, ms = -86400000, loc = [current locale object]
     *   });                                                      -> ex. 1 day ago
     *
     ***/
    'format': function(f, localeCode) {
      return formatDate(this, f, false, localeCode);
    },

     /***
     * @method relative([fn], [locale] = currentLocale)
     * @returns String
     * @short Returns a relative date string offset to the current time.
     * @extra [fn] can be passed to provide for more granular control over the resulting string. [fn] is passed 4 arguments: the adjusted value, unit, offset in milliseconds, and a localization object. As an alternate syntax, [locale] can also be passed as the first (and only) parameter. For more, see @date_format.
     * @example
     *
     *   Date.create('90 seconds ago').relative() -> 1 minute ago
     *   Date.create('January').relative()        -> ex. 5 months ago
     *   Date.create('January').relative('ja')    -> 3ãƒ¶æœˆå‰
     *   Date.create('120 minutes ago').relative(function(val,unit,ms,loc) {
     *     // value = 2, unit = 3, ms = -7200, loc = [current locale object]
     *   });                                      -> ex. 5 months ago
     *
     ***/
    'relative': function(fn, localeCode) {
      if(isString(fn)) {
        localeCode = fn;
        fn = null;
      }
      return formatDate(this, fn, true, localeCode);
    },

     /***
     * @method is(<d>, [margin] = 0)
     * @returns Boolean
     * @short Returns true if the date is <d>.
     * @extra <d> will accept a date object, timestamp, or text format. %is% additionally understands more generalized expressions like month/weekday names, 'today', etc, and compares to the precision implied in <d>. [margin] allows an extra margin of error in milliseconds.  For more, see @date_format.
     * @example
     *
     *   Date.create().is('July')               -> true or false?
     *   Date.create().is('1776')               -> false
     *   Date.create().is('today')              -> true
     *   Date.create().is('weekday')            -> true or false?
     *   Date.create().is('July 4, 1776')       -> false
     *   Date.create().is(-6106093200000)       -> false
     *   Date.create().is(new Date(1776, 6, 4)) -> false
     *
     ***/
    'is': function(d, margin, utc) {
      var tmp, comp;
      if(!this.isValid()) return;
      if(isString(d)) {
        d = d.trim().toLowerCase();
        comp = this.clone().utc(utc);
        switch(true) {
          case d === 'future':  return this.getTime() > getNewDate().getTime();
          case d === 'past':    return this.getTime() < getNewDate().getTime();
          case d === 'weekday': return callDateGet(comp, 'Day') > 0 && callDateGet(comp, 'Day') < 6;
          case d === 'weekend': return callDateGet(comp, 'Day') === 0 || callDateGet(comp, 'Day') === 6;
          case (tmp = English['weekdays'].indexOf(d) % 7) > -1: return callDateGet(comp, 'Day') === tmp;
          case (tmp = English['months'].indexOf(d) % 12) > -1:  return callDateGet(comp, 'Month') === tmp;
        }
      }
      return compareDate(this, d, null, margin, utc);
    },

     /***
     * @method reset([unit] = 'hours')
     * @returns Date
     * @short Resets the unit passed and all smaller units. Default is "hours", effectively resetting the time.
     * @example
     *
     *   Date.create().reset('day')   -> Beginning of today
     *   Date.create().reset('month') -> 1st of the month
     *
     ***/
    'reset': function(unit) {
      var params = {}, recognized;
      unit = unit || 'hours';
      if(unit === 'date') unit = 'days';
      recognized = DateUnits.some(function(u) {
        return unit === u.name || unit === u.name + 's';
      });
      params[unit] = unit.match(/^days?/) ? 1 : 0;
      return recognized ? this.set(params, true) : this;
    },

     /***
     * @method clone()
     * @returns Date
     * @short Clones the date.
     * @example
     *
     *   Date.create().clone() -> Copy of now
     *
     ***/
    'clone': function() {
      var d = new date(this.getTime());
      d.utc(!!this._utc);
      return d;
    }

  });


  // Instance aliases
  extend(date, true, true, {

     /***
     * @method iso()
     * @alias toISOString
     *
     ***/
    'iso': function() {
      return this.toISOString();
    },

     /***
     * @method getWeekday()
     * @returns Number
     * @short Alias for %getDay%.
     * @set
     *   getUTCWeekday
     *
     * @example
     *
     +   Date.create().getWeekday();    -> (ex.) 3
     +   Date.create().getUTCWeekday();    -> (ex.) 3
     *
     ***/
    'getWeekday':    date.prototype.getDay,
    'getUTCWeekday':    date.prototype.getUTCDay

  });



  /***
   * Number module
   *
   ***/

  /***
   * @method [unit]()
   * @returns Number
   * @short Takes the number as a corresponding unit of time and converts to milliseconds.
   * @extra Method names can be singular or plural.  Note that as "a month" is ambiguous as a unit of time, %months% will be equivalent to 30.4375 days, the average number in a month. Be careful using %months% if you need exact precision.
   *
   * @set
   *   millisecond
   *   milliseconds
   *   second
   *   seconds
   *   minute
   *   minutes
   *   hour
   *   hours
   *   day
   *   days
   *   week
   *   weeks
   *   month
   *   months
   *   year
   *   years
   *
   * @example
   *
   *   (5).milliseconds() -> 5
   *   (10).hours()       -> 36000000
   *   (1).day()          -> 86400000
   *
   ***
   * @method [unit]Before([d], [locale] = currentLocale)
   * @returns Date
   * @short Returns a date that is <n> units before [d], where <n> is the number.
   * @extra [d] will accept a date object, timestamp, or text format. Note that "months" is ambiguous as a unit of time. If the target date falls on a day that does not exist (ie. August 31 -> February 31), the date will be shifted to the last day of the month. Be careful using %monthsBefore% if you need exact precision. See @date_format for more.
   *
   * @set
   *   millisecondBefore
   *   millisecondsBefore
   *   secondBefore
   *   secondsBefore
   *   minuteBefore
   *   minutesBefore
   *   hourBefore
   *   hoursBefore
   *   dayBefore
   *   daysBefore
   *   weekBefore
   *   weeksBefore
   *   monthBefore
   *   monthsBefore
   *   yearBefore
   *   yearsBefore
   *
   * @example
   *
   *   (5).daysBefore('tuesday')          -> 5 days before tuesday of this week
   *   (1).yearBefore('January 23, 1997') -> January 23, 1996
   *
   ***
   * @method [unit]Ago()
   * @returns Date
   * @short Returns a date that is <n> units ago.
   * @extra Note that "months" is ambiguous as a unit of time. If the target date falls on a day that does not exist (ie. August 31 -> February 31), the date will be shifted to the last day of the month. Be careful using %monthsAgo% if you need exact precision.
   *
   * @set
   *   millisecondAgo
   *   millisecondsAgo
   *   secondAgo
   *   secondsAgo
   *   minuteAgo
   *   minutesAgo
   *   hourAgo
   *   hoursAgo
   *   dayAgo
   *   daysAgo
   *   weekAgo
   *   weeksAgo
   *   monthAgo
   *   monthsAgo
   *   yearAgo
   *   yearsAgo
   *
   * @example
   *
   *   (5).weeksAgo() -> 5 weeks ago
   *   (1).yearAgo()  -> January 23, 1996
   *
   ***
   * @method [unit]After([d], [locale] = currentLocale)
   * @returns Date
   * @short Returns a date <n> units after [d], where <n> is the number.
   * @extra [d] will accept a date object, timestamp, or text format. Note that "months" is ambiguous as a unit of time. If the target date falls on a day that does not exist (ie. August 31 -> February 31), the date will be shifted to the last day of the month. Be careful using %monthsAfter% if you need exact precision. See @date_format for more.
   *
   * @set
   *   millisecondAfter
   *   millisecondsAfter
   *   secondAfter
   *   secondsAfter
   *   minuteAfter
   *   minutesAfter
   *   hourAfter
   *   hoursAfter
   *   dayAfter
   *   daysAfter
   *   weekAfter
   *   weeksAfter
   *   monthAfter
   *   monthsAfter
   *   yearAfter
   *   yearsAfter
   *
   * @example
   *
   *   (5).daysAfter('tuesday')          -> 5 days after tuesday of this week
   *   (1).yearAfter('January 23, 1997') -> January 23, 1998
   *
   ***
   * @method [unit]FromNow()
   * @returns Date
   * @short Returns a date <n> units from now.
   * @extra Note that "months" is ambiguous as a unit of time. If the target date falls on a day that does not exist (ie. August 31 -> February 31), the date will be shifted to the last day of the month. Be careful using %monthsFromNow% if you need exact precision.
   *
   * @set
   *   millisecondFromNow
   *   millisecondsFromNow
   *   secondFromNow
   *   secondsFromNow
   *   minuteFromNow
   *   minutesFromNow
   *   hourFromNow
   *   hoursFromNow
   *   dayFromNow
   *   daysFromNow
   *   weekFromNow
   *   weeksFromNow
   *   monthFromNow
   *   monthsFromNow
   *   yearFromNow
   *   yearsFromNow
   *
   * @example
   *
   *   (5).weeksFromNow() -> 5 weeks ago
   *   (1).yearFromNow()  -> January 23, 1998
   *
   ***/
  function buildNumberToDateAlias(u, multiplier) {
    var name = u.name, methods = {};
    function base() { return round(this * multiplier); }
    function after() { return createDate(arguments)[u.addMethod](this);  }
    function before() { return createDate(arguments)[u.addMethod](-this); }
    methods[name] = base;
    methods[name + 's'] = base;
    methods[name + 'Before'] = before;
    methods[name + 'sBefore'] = before;
    methods[name + 'Ago'] = before;
    methods[name + 'sAgo'] = before;
    methods[name + 'After'] = after;
    methods[name + 'sAfter'] = after;
    methods[name + 'FromNow'] = after;
    methods[name + 'sFromNow'] = after;
    number.extend(methods);
  }

  extend(number, true, true, {

     /***
     * @method duration([locale] = currentLocale)
     * @returns String
     * @short Takes the number as milliseconds and returns a unit-adjusted localized string.
     * @extra This method is the same as %Date#relative% without the localized equivalent of "from now" or "ago". [locale] can be passed as the first (and only) parameter. Note that this method is only available when the dates package is included.
     * @example
     *
     *   (500).duration() -> '500 milliseconds'
     *   (1200).duration() -> '1 second'
     *   (75).minutes().duration() -> '1 hour'
     *   (75).minutes().duration('es') -> '1 hora'
     *
     ***/
    'duration': function(localeCode) {
      return getLocalization(localeCode).getDuration(this);
    }

  });


  English = CurrentLocalization = date.addLocale('en', {
    'plural':     true,
    'timeMarker': 'at',
    'ampm':       'am,pm',
    'months':     'January,February,March,April,May,June,July,August,September,October,November,December',
    'weekdays':   'Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday',
    'units':      'millisecond:|s,second:|s,minute:|s,hour:|s,day:|s,week:|s,month:|s,year:|s',
    'numbers':    'one,two,three,four,five,six,seven,eight,nine,ten',
    'articles':   'a,an,the',
    'tokens':     'the,st|nd|rd|th,of',
    'short':      '{Month} {d}, {yyyy}',
    'long':       '{Month} {d}, {yyyy} {h}:{mm}{tt}',
    'full':       '{Weekday} {Month} {d}, {yyyy} {h}:{mm}:{ss}{tt}',
    'past':       '{num} {unit} {sign}',
    'future':     '{num} {unit} {sign}',
    'duration':   '{num} {unit}',
    'modifiers': [
      { 'name': 'sign',  'src': 'ago|before', 'value': -1 },
      { 'name': 'sign',  'src': 'from now|after|from|in|later', 'value': 1 },
      { 'name': 'edge',  'src': 'last day', 'value': -2 },
      { 'name': 'edge',  'src': 'end', 'value': -1 },
      { 'name': 'edge',  'src': 'first day|beginning', 'value': 1 },
      { 'name': 'shift', 'src': 'last', 'value': -1 },
      { 'name': 'shift', 'src': 'the|this', 'value': 0 },
      { 'name': 'shift', 'src': 'next', 'value': 1 }
    ],
    'dateParse': [
      '{month} {year}',
      '{shift} {unit=5-7}',
      '{0?} {date}{1}',
      '{0?} {edge} of {shift?} {unit=4-7?}{month?}{year?}'
    ],
    'timeParse': [
      '{num} {unit} {sign}',
      '{sign} {num} {unit}',
      '{0} {num}{1} {day} of {month} {year?}',
      '{weekday?} {month} {date}{1?} {year?}',
      '{date} {month} {year}',
      '{date} {month}',
      '{shift} {weekday}',
      '{shift} week {weekday}',
      '{weekday} {2?} {shift} week',
      '{num} {unit=4-5} {sign} {day}',
      '{0?} {date}{1} of {month}',
      '{0?}{month?} {date?}{1?} of {shift} {unit=6-7}'
    ]
  });

  buildDateUnits();
  buildDateMethods();
  buildCoreInputFormats();
  buildFormatTokens();
  buildFormatShortcuts();
  buildAsianDigits();
  buildRelativeAliases();
  buildUTCAliases();
  setDateProperties();

/*
 *
 * Date.addLocale(<code>) adds this locale to Sugar.
 * To set the locale globally, simply call:
 *
 * Date.setLocale('da');
 *
 * var locale = Date.getLocale(<code>) will return this object, which
 * can be tweaked to change the behavior of parsing/formatting in the locales.
 *
 * locale.addFormat adds a date format (see this file for examples).
 * Special tokens in the date format will be parsed out into regex tokens:
 *
 * {0} is a reference to an entry in locale.tokens. Output: (?:the)?
 * {unit} is a reference to all units. Output: (day|week|month|...)
 * {unit3} is a reference to a specific unit. Output: (hour)
 * {unit3-5} is a reference to a subset of the units array. Output: (hour|day|week)
 * {unit?} "?" makes that token optional. Output: (day|week|month)?
 *
 * {day} Any reference to tokens in the modifiers array will include all with the same name. Output: (yesterday|today|tomorrow)
 *
 * All spaces are optional and will be converted to "\s*"
 *
 * Locale arrays months, weekdays, units, numbers, as well as the "src" field for
 * all entries in the modifiers array follow a special format indicated by a colon:
 *
 * minute:|s  = minute|minutes
 * thicke:n|r = thicken|thicker
 *
 * Additionally in the months, weekdays, units, and numbers array these will be added at indexes that are multiples
 * of the relevant number for retrieval. For example having "sunday:|s" in the units array will result in:
 *
 * units: ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sundays']
 *
 * When matched, the index will be found using:
 *
 * units.indexOf(match) % 7;
 *
 * Resulting in the correct index with any number of alternates for that entry.
 *
 */

Date.addLocale('da', {
  'plural': true,
  'months': 'januar,februar,marts,april,maj,juni,juli,august,september,oktober,november,december',
  'weekdays': 'sÃ¸ndag|sondag,mandag,tirsdag,onsdag,torsdag,fredag,lÃ¸rdag|lordag',
  'units': 'millisekund:|er,sekund:|er,minut:|ter,tim:e|er,dag:|e,ug:e|er|en,mÃ¥ned:|er|en+maaned:|er|en,Ã¥r:||et+aar:||et',
  'numbers': 'en|et,to,tre,fire,fem,seks,syv,otte,ni,ti',
  'tokens': 'den,for',
  'articles': 'den',
  'short':'d. {d}. {month} {yyyy}',
  'long': 'den {d}. {month} {yyyy} {H}:{mm}',
  'full': '{Weekday} den {d}. {month} {yyyy} {H}:{mm}:{ss}',
  'past': '{num} {unit} {sign}',
  'future': '{sign} {num} {unit}',
  'duration': '{num} {unit}',
  'ampm': 'am,pm',
  'modifiers': [
    { 'name': 'day', 'src': 'forgÃ¥rs|i forgÃ¥rs|forgaars|i forgaars', 'value': -2 },
    { 'name': 'day', 'src': 'i gÃ¥r|igÃ¥r|i gaar|igaar', 'value': -1 },
    { 'name': 'day', 'src': 'i dag|idag', 'value': 0 },
    { 'name': 'day', 'src': 'i morgen|imorgen', 'value': 1 },
    { 'name': 'day', 'src': 'over morgon|overmorgen|i over morgen|i overmorgen|iovermorgen', 'value': 2 },
    { 'name': 'sign', 'src': 'siden', 'value': -1 },
    { 'name': 'sign', 'src': 'om', 'value':  1 },
    { 'name': 'shift', 'src': 'i sidste|sidste', 'value': -1 },
    { 'name': 'shift', 'src': 'denne', 'value': 0 },
    { 'name': 'shift', 'src': 'nÃ¦ste|naeste', 'value': 1 }
  ],
  'dateParse': [
    '{num} {unit} {sign}',
    '{sign} {num} {unit}',
    '{1?} {num} {unit} {sign}',
    '{shift} {unit=5-7}'
  ],
  'timeParse': [
    '{0?} {weekday?} {date?} {month} {year}',
    '{date} {month}',
    '{shift} {weekday}'
  ]
});

/*
 *
 * Date.addLocale(<code>) adds this locale to Sugar.
 * To set the locale globally, simply call:
 *
 * Date.setLocale('de');
 *
 * var locale = Date.getLocale(<code>) will return this object, which
 * can be tweaked to change the behavior of parsing/formatting in the locales.
 *
 * locale.addFormat adds a date format (see this file for examples).
 * Special tokens in the date format will be parsed out into regex tokens:
 *
 * {0} is a reference to an entry in locale.tokens. Output: (?:the)?
 * {unit} is a reference to all units. Output: (day|week|month|...)
 * {unit3} is a reference to a specific unit. Output: (hour)
 * {unit3-5} is a reference to a subset of the units array. Output: (hour|day|week)
 * {unit?} "?" makes that token optional. Output: (day|week|month)?
 *
 * {day} Any reference to tokens in the modifiers array will include all with the same name. Output: (yesterday|today|tomorrow)
 *
 * All spaces are optional and will be converted to "\s*"
 *
 * Locale arrays months, weekdays, units, numbers, as well as the "src" field for
 * all entries in the modifiers array follow a special format indicated by a colon:
 *
 * minute:|s  = minute|minutes
 * thicke:n|r = thicken|thicker
 *
 * Additionally in the months, weekdays, units, and numbers array these will be added at indexes that are multiples
 * of the relevant number for retrieval. For example having "sunday:|s" in the units array will result in:
 *
 * units: ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sundays']
 *
 * When matched, the index will be found using:
 *
 * units.indexOf(match) % 7;
 *
 * Resulting in the correct index with any number of alternates for that entry.
 *
 */

Date.addLocale('de', {
  'plural': true,
   'capitalizeUnit': true,
  'months': 'Januar,Februar,MÃ¤rz|Marz,April,Mai,Juni,Juli,August,September,Oktober,November,Dezember',
  'weekdays': 'Sonntag,Montag,Dienstag,Mittwoch,Donnerstag,Freitag,Samstag',
  'units': 'Millisekunde:|n,Sekunde:|n,Minute:|n,Stunde:|n,Tag:|en,Woche:|n,Monat:|en,Jahr:|en',
  'numbers': 'ein:|e|er|en|em,zwei,drei,vier,fuenf,sechs,sieben,acht,neun,zehn',
  'tokens': 'der',
  'short':'{d}. {Month} {yyyy}',
  'long': '{d}. {Month} {yyyy} {H}:{mm}',
  'full': '{Weekday} {d}. {Month} {yyyy} {H}:{mm}:{ss}',
  'past': '{sign} {num} {unit}',
  'future': '{sign} {num} {unit}',
  'duration': '{num} {unit}',
  'timeMarker': 'um',
  'ampm': 'am,pm',
  'modifiers': [
    { 'name': 'day', 'src': 'vorgestern', 'value': -2 },
    { 'name': 'day', 'src': 'gestern', 'value': -1 },
    { 'name': 'day', 'src': 'heute', 'value': 0 },
    { 'name': 'day', 'src': 'morgen', 'value': 1 },
    { 'name': 'day', 'src': 'Ã¼bermorgen|ubermorgen|uebermorgen', 'value': 2 },
    { 'name': 'sign', 'src': 'vor:|her', 'value': -1 },
    { 'name': 'sign', 'src': 'in', 'value': 1 },
    { 'name': 'shift', 'src': 'letzte:|r|n|s', 'value': -1 },
    { 'name': 'shift', 'src': 'nÃ¤chste:|r|n|s+nachste:|r|n|s+naechste:|r|n|s+kommende:n|r', 'value': 1 }
  ],
  'dateParse': [
    '{sign} {num} {unit}',
    '{num} {unit} {sign}',
    '{shift} {unit=5-7}'
  ],
  'timeParse': [
    '{weekday?} {date?} {month} {year?}',
    '{shift} {weekday}'
  ]
});

/*
 *
 * Date.addLocale(<code>) adds this locale to Sugar.
 * To set the locale globally, simply call:
 *
 * Date.setLocale('es');
 *
 * var locale = Date.getLocale(<code>) will return this object, which
 * can be tweaked to change the behavior of parsing/formatting in the locales.
 *
 * locale.addFormat adds a date format (see this file for examples).
 * Special tokens in the date format will be parsed out into regex tokens:
 *
 * {0} is a reference to an entry in locale.tokens. Output: (?:the)?
 * {unit} is a reference to all units. Output: (day|week|month|...)
 * {unit3} is a reference to a specific unit. Output: (hour)
 * {unit3-5} is a reference to a subset of the units array. Output: (hour|day|week)
 * {unit?} "?" makes that token optional. Output: (day|week|month)?
 *
 * {day} Any reference to tokens in the modifiers array will include all with the same name. Output: (yesterday|today|tomorrow)
 *
 * All spaces are optional and will be converted to "\s*"
 *
 * Locale arrays months, weekdays, units, numbers, as well as the "src" field for
 * all entries in the modifiers array follow a special format indicated by a colon:
 *
 * minute:|s  = minute|minutes
 * thicke:n|r = thicken|thicker
 *
 * Additionally in the months, weekdays, units, and numbers array these will be added at indexes that are multiples
 * of the relevant number for retrieval. For example having "sunday:|s" in the units array will result in:
 *
 * units: ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sundays']
 *
 * When matched, the index will be found using:
 *
 * units.indexOf(match) % 7;
 *
 * Resulting in the correct index with any number of alternates for that entry.
 *
 */

Date.addLocale('es', {
  'plural': true,
  'months': 'enero,febrero,marzo,abril,mayo,junio,julio,agosto,septiembre,octubre,noviembre,diciembre',
  'weekdays': 'domingo,lunes,martes,miÃ©rcoles|miercoles,jueves,viernes,sÃ¡bado|sabado',
  'units': 'milisegundo:|s,segundo:|s,minuto:|s,hora:|s,dÃ­a|dÃ­as|dia|dias,semana:|s,mes:|es,aÃ±o|aÃ±os|ano|anos',
  'numbers': 'uno,dos,tres,cuatro,cinco,seis,siete,ocho,nueve,diez',
  'tokens': 'el,la,de',
  'short':'{d} {month} {yyyy}',
  'long': '{d} {month} {yyyy} {H}:{mm}',
  'full': '{Weekday} {d} {month} {yyyy} {H}:{mm}:{ss}',
  'past': '{sign} {num} {unit}',
  'future': '{sign} {num} {unit}',
  'duration': '{num} {unit}',
  'timeMarker': 'a las',
  'ampm': 'am,pm',
  'modifiers': [
    { 'name': 'day', 'src': 'anteayer', 'value': -2 },
    { 'name': 'day', 'src': 'ayer', 'value': -1 },
    { 'name': 'day', 'src': 'hoy', 'value': 0 },
    { 'name': 'day', 'src': 'maÃ±ana|manana', 'value': 1 },
    { 'name': 'sign', 'src': 'hace', 'value': -1 },
    { 'name': 'sign', 'src': 'dentro de', 'value': 1 },
    { 'name': 'shift', 'src': 'pasad:o|a', 'value': -1 },
    { 'name': 'shift', 'src': 'prÃ³ximo|prÃ³xima|proximo|proxima', 'value': 1 }
  ],
  'dateParse': [
    '{sign} {num} {unit}',
    '{num} {unit} {sign}',
    '{0?}{1?} {unit=5-7} {shift}',
    '{0?}{1?} {shift} {unit=5-7}'
  ],
  'timeParse': [
    '{shift} {weekday}',
    '{weekday} {shift}',
    '{date?} {2?} {month} {2?} {year?}'
  ]
});
Date.addLocale('fi', {
    'plural':     true,
    'timeMarker': 'kello',
    'ampm':       ',',
    'months':     'tammikuu,helmikuu,maaliskuu,huhtikuu,toukokuu,kesÃ¤kuu,heinÃ¤kuu,elokuu,syyskuu,lokakuu,marraskuu,joulukuu',
    'weekdays':   'sunnuntai,maanantai,tiistai,keskiviikko,torstai,perjantai,lauantai',
    'units':      'millisekun:ti|tia|teja|tina|nin,sekun:ti|tia|teja|tina|nin,minuut:ti|tia|teja|tina|in,tun:ti|tia|teja|tina|nin,pÃ¤iv:Ã¤|Ã¤Ã¤|iÃ¤|Ã¤nÃ¤|Ã¤n,viik:ko|koa|koja|on|kona,kuukau:si|sia|tta|den|tena,vuo:si|sia|tta|den|tena',
    'numbers':    'yksi|ensimmÃ¤inen,kaksi|toinen,kolm:e|as,neljÃ¤:s,vii:si|des,kuu:si|des,seitsemÃ¤:n|s,kahdeksa:n|s,yhdeksÃ¤:n|s,kymmene:n|s',
    'articles':   '',
    'optionals':  '',
    'short':      '{d}. {month}ta {yyyy}',
    'long':       '{d}. {month}ta {yyyy} kello {H}.{mm}',
    'full':       '{Weekday}na {d}. {month}ta {yyyy} kello {H}.{mm}',
    'relative':       function(num, unit, ms, format) {
      var units = this['units'];
      function numberWithUnit(mult) {
        return (num === 1 ? '' : num + ' ') + units[(8 * mult) + unit];
      }
      switch(format) {
        case 'duration':  return numberWithUnit(0);
        case 'past':      return numberWithUnit(num > 1 ? 1 : 0) + ' sitten';
        case 'future':    return numberWithUnit(4) + ' pÃ¤Ã¤stÃ¤';
      }
    },
    'modifiers': [
        { 'name': 'day',   'src': 'toissa pÃ¤ivÃ¤nÃ¤|toissa pÃ¤ivÃ¤istÃ¤', 'value': -2 },
        { 'name': 'day',   'src': 'eilen|eilistÃ¤', 'value': -1 },
        { 'name': 'day',   'src': 'tÃ¤nÃ¤Ã¤n', 'value': 0 },
        { 'name': 'day',   'src': 'huomenna|huomista', 'value': 1 },
        { 'name': 'day',   'src': 'ylihuomenna|ylihuomista', 'value': 2 },
        { 'name': 'sign',  'src': 'sitten|aiemmin', 'value': -1 },
        { 'name': 'sign',  'src': 'pÃ¤Ã¤stÃ¤|kuluttua|myÃ¶hemmin', 'value': 1 },
        { 'name': 'edge',  'src': 'viimeinen|viimeisenÃ¤', 'value': -2 },
        { 'name': 'edge',  'src': 'lopussa', 'value': -1 },
        { 'name': 'edge',  'src': 'ensimmÃ¤inen|ensimmÃ¤isenÃ¤', 'value': 1 },
        { 'name': 'shift', 'src': 'edellinen|edellisenÃ¤|edeltÃ¤vÃ¤|edeltÃ¤vÃ¤nÃ¤|viime|toissa', 'value': -1 },
        { 'name': 'shift', 'src': 'tÃ¤nÃ¤|tÃ¤mÃ¤n', 'value': 0 },
        { 'name': 'shift', 'src': 'seuraava|seuraavana|tuleva|tulevana|ensi', 'value': 1 }
    ],
    'dateParse': [
        '{num} {unit} {sign}',
        '{sign} {num} {unit}',
        '{num} {unit=4-5} {sign} {day}',
        '{month} {year}',
        '{shift} {unit=5-7}'
    ],
    'timeParse': [
        '{0} {num}{1} {day} of {month} {year?}',
        '{weekday?} {month} {date}{1} {year?}',
        '{date} {month} {year}',
        '{shift} {weekday}',
        '{shift} week {weekday}',
        '{weekday} {2} {shift} week',
        '{0} {date}{1} of {month}',
        '{0}{month?} {date?}{1} of {shift} {unit=6-7}'
    ]
});
/*
 *
 * Date.addLocale(<code>) adds this locale to Sugar.
 * To set the locale globally, simply call:
 *
 * Date.setLocale('fr');
 *
 * var locale = Date.getLocale(<code>) will return this object, which
 * can be tweaked to change the behavior of parsing/formatting in the locales.
 *
 * locale.addFormat adds a date format (see this file for examples).
 * Special tokens in the date format will be parsed out into regex tokens:
 *
 * {0} is a reference to an entry in locale.tokens. Output: (?:the)?
 * {unit} is a reference to all units. Output: (day|week|month|...)
 * {unit3} is a reference to a specific unit. Output: (hour)
 * {unit3-5} is a reference to a subset of the units array. Output: (hour|day|week)
 * {unit?} "?" makes that token optional. Output: (day|week|month)?
 *
 * {day} Any reference to tokens in the modifiers array will include all with the same name. Output: (yesterday|today|tomorrow)
 *
 * All spaces are optional and will be converted to "\s*"
 *
 * Locale arrays months, weekdays, units, numbers, as well as the "src" field for
 * all entries in the modifiers array follow a special format indicated by a colon:
 *
 * minute:|s  = minute|minutes
 * thicke:n|r = thicken|thicker
 *
 * Additionally in the months, weekdays, units, and numbers array these will be added at indexes that are multiples
 * of the relevant number for retrieval. For example having "sunday:|s" in the units array will result in:
 *
 * units: ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sundays']
 *
 * When matched, the index will be found using:
 *
 * units.indexOf(match) % 7;
 *
 * Resulting in the correct index with any number of alternates for that entry.
 *
 */

Date.addLocale('fr', {
  'plural': true,
  'months': 'janvier,fÃ©vrier|fevrier,mars,avril,mai,juin,juillet,aoÃ»t,septembre,octobre,novembre,dÃ©cembre|decembre',
  'weekdays': 'dimanche,lundi,mardi,mercredi,jeudi,vendredi,samedi',
  'units': 'milliseconde:|s,seconde:|s,minute:|s,heure:|s,jour:|s,semaine:|s,mois,an:|s|nÃ©e|nee',
  'numbers': 'un:|e,deux,trois,quatre,cinq,six,sept,huit,neuf,dix',
  'tokens': "l'|la|le",
  'short':'{d} {month} {yyyy}',
  'long': '{d} {month} {yyyy} {H}:{mm}',
  'full': '{Weekday} {d} {month} {yyyy} {H}:{mm}:{ss}',
  'past': '{sign} {num} {unit}',
  'future': '{sign} {num} {unit}',
  'duration': '{num} {unit}',
  'timeMarker': 'Ã ',
  'ampm': 'am,pm',
  'modifiers': [
    { 'name': 'day', 'src': 'hier', 'value': -1 },
    { 'name': 'day', 'src': "aujourd'hui", 'value': 0 },
    { 'name': 'day', 'src': 'demain', 'value': 1 },
    { 'name': 'sign', 'src': 'il y a', 'value': -1 },
    { 'name': 'sign', 'src': "dans|d'ici", 'value': 1 },
    { 'name': 'shift', 'src': 'derni:Ã¨r|er|Ã¨re|ere', 'value': -1 },
    { 'name': 'shift', 'src': 'prochain:|e', 'value': 1 }
  ],
  'dateParse': [
    '{sign} {num} {unit}',
    '{sign} {num} {unit}',
    '{0?} {unit=5-7} {shift}'
  ],
  'timeParse': [
    '{weekday?} {0?} {date?} {month} {year?}',
    '{0?} {weekday} {shift}'
  ]
});

/*
 *
 * Date.addLocale(<code>) adds this locale to Sugar.
 * To set the locale globally, simply call:
 *
 * Date.setLocale('it');
 *
 * var locale = Date.getLocale(<code>) will return this object, which
 * can be tweaked to change the behavior of parsing/formatting in the locales.
 *
 * locale.addFormat adds a date format (see this file for examples).
 * Special tokens in the date format will be parsed out into regex tokens:
 *
 * {0} is a reference to an entry in locale.tokens. Output: (?:the)?
 * {unit} is a reference to all units. Output: (day|week|month|...)
 * {unit3} is a reference to a specific unit. Output: (hour)
 * {unit3-5} is a reference to a subset of the units array. Output: (hour|day|week)
 * {unit?} "?" makes that token optional. Output: (day|week|month)?
 *
 * {day} Any reference to tokens in the modifiers array will include all with the same name. Output: (yesterday|today|tomorrow)
 *
 * All spaces are optional and will be converted to "\s*"
 *
 * Locale arrays months, weekdays, units, numbers, as well as the "src" field for
 * all entries in the modifiers array follow a special format indicated by a colon:
 *
 * minute:|s  = minute|minutes
 * thicke:n|r = thicken|thicker
 *
 * Additionally in the months, weekdays, units, and numbers array these will be added at indexes that are multiples
 * of the relevant number for retrieval. For example having "sunday:|s" in the units array will result in:
 *
 * units: ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sundays']
 *
 * When matched, the index will be found using:
 *
 * units.indexOf(match) % 7;
 *
 * Resulting in the correct index with any number of alternates for that entry.
 *
 */

Date.addLocale('it', {
  'plural': true,
  'months': 'Gennaio,Febbraio,Marzo,Aprile,Maggio,Giugno,Luglio,Agosto,Settembre,Ottobre,Novembre,Dicembre',
  'weekdays': 'Domenica,Luned:Ã¬|i,Marted:Ã¬|i,Mercoled:Ã¬|i,Gioved:Ã¬|i,Venerd:Ã¬|i,Sabato',
  'units': 'millisecond:o|i,second:o|i,minut:o|i,or:a|e,giorn:o|i,settiman:a|e,mes:e|i,ann:o|i',
  'numbers': "un:|a|o|',due,tre,quattro,cinque,sei,sette,otto,nove,dieci",
  'tokens': "l'|la|il",
  'short':'{d} {Month} {yyyy}',
  'long': '{d} {Month} {yyyy} {H}:{mm}',
  'full': '{Weekday} {d} {Month} {yyyy} {H}:{mm}:{ss}',
  'past': '{num} {unit} {sign}',
  'future': '{num} {unit} {sign}',
  'duration': '{num} {unit}',
  'timeMarker': 'alle',
  'ampm': 'am,pm',
  'modifiers': [
    { 'name': 'day', 'src': 'ieri', 'value': -1 },
    { 'name': 'day', 'src': 'oggi', 'value': 0 },
    { 'name': 'day', 'src': 'domani', 'value': 1 },
    { 'name': 'day', 'src': 'dopodomani', 'value': 2 },
    { 'name': 'sign', 'src': 'fa', 'value': -1 },
    { 'name': 'sign', 'src': 'da adesso', 'value': 1 },
    { 'name': 'shift', 'src': 'scors:o|a', 'value': -1 },
    { 'name': 'shift', 'src': 'prossim:o|a', 'value': 1 }
  ],
  'dateParse': [
    '{num} {unit} {sign}',
    '{0?} {unit=5-7} {shift}',
    '{0?} {shift} {unit=5-7}'
  ],
  'timeParse': [
    '{weekday?} {date?} {month} {year?}',
    '{shift} {weekday}'
  ]
});

/*
 *
 * Date.addLocale(<code>) adds this locale to Sugar.
 * To set the locale globally, simply call:
 *
 * Date.setLocale('ja');
 *
 * var locale = Date.getLocale(<code>) will return this object, which
 * can be tweaked to change the behavior of parsing/formatting in the locales.
 *
 * locale.addFormat adds a date format (see this file for examples).
 * Special tokens in the date format will be parsed out into regex tokens:
 *
 * {0} is a reference to an entry in locale.tokens. Output: (?:the)?
 * {unit} is a reference to all units. Output: (day|week|month|...)
 * {unit3} is a reference to a specific unit. Output: (hour)
 * {unit3-5} is a reference to a subset of the units array. Output: (hour|day|week)
 * {unit?} "?" makes that token optional. Output: (day|week|month)?
 *
 * {day} Any reference to tokens in the modifiers array will include all with the same name. Output: (yesterday|today|tomorrow)
 *
 * All spaces are optional and will be converted to "\s*"
 *
 * Locale arrays months, weekdays, units, numbers, as well as the "src" field for
 * all entries in the modifiers array follow a special format indicated by a colon:
 *
 * minute:|s  = minute|minutes
 * thicke:n|r = thicken|thicker
 *
 * Additionally in the months, weekdays, units, and numbers array these will be added at indexes that are multiples
 * of the relevant number for retrieval. For example having "sunday:|s" in the units array will result in:
 *
 * units: ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sundays']
 *
 * When matched, the index will be found using:
 *
 * units.indexOf(match) % 7;
 *
 * Resulting in the correct index with any number of alternates for that entry.
 *
 */

Date.addLocale('ja', {
  'monthSuffix': 'æœˆ',
  'weekdays': 'æ—¥æ›œæ—¥,æœˆæ›œæ—¥,ç«æ›œæ—¥,æ°´æ›œæ—¥,æœ¨æ›œæ—¥,é‡‘æ›œæ—¥,åœŸæ›œæ—¥',
  'units': 'ãƒŸãƒªç§’,ç§’,åˆ†,æ™‚é–“,æ—¥,é€±é–“|é€±,ãƒ¶æœˆ|ãƒµæœˆ|æœˆ,å¹´',
  'short': '{yyyy}å¹´{M}æœˆ{d}æ—¥',
  'long': '{yyyy}å¹´{M}æœˆ{d}æ—¥ {H}æ™‚{mm}åˆ†',
  'full': '{yyyy}å¹´{M}æœˆ{d}æ—¥ {Weekday} {H}æ™‚{mm}åˆ†{ss}ç§’',
  'past': '{num}{unit}{sign}',
  'future': '{num}{unit}{sign}',
  'duration': '{num}{unit}',
  'timeSuffixes': 'æ™‚,åˆ†,ç§’',
  'ampm': 'åˆå‰,åˆå¾Œ',
  'modifiers': [
    { 'name': 'day', 'src': 'ä¸€æ˜¨æ—¥', 'value': -2 },
    { 'name': 'day', 'src': 'æ˜¨æ—¥', 'value': -1 },
    { 'name': 'day', 'src': 'ä»Šæ—¥', 'value': 0 },
    { 'name': 'day', 'src': 'æ˜Žæ—¥', 'value': 1 },
    { 'name': 'day', 'src': 'æ˜Žå¾Œæ—¥', 'value': 2 },
    { 'name': 'sign', 'src': 'å‰', 'value': -1 },
    { 'name': 'sign', 'src': 'å¾Œ', 'value':  1 },
    { 'name': 'shift', 'src': 'åŽ»|å…ˆ', 'value': -1 },
    { 'name': 'shift', 'src': 'æ¥', 'value':  1 }
  ],
  'dateParse': [
    '{num}{unit}{sign}'
  ],
  'timeParse': [
    '{shift}{unit=5-7}{weekday?}',
    '{year}å¹´{month?}æœˆ?{date?}æ—¥?',
    '{month}æœˆ{date?}æ—¥?',
    '{date}æ—¥'
  ]
});

/*
 *
 * Date.addLocale(<code>) adds this locale to Sugar.
 * To set the locale globally, simply call:
 *
 * Date.setLocale('ko');
 *
 * var locale = Date.getLocale(<code>) will return this object, which
 * can be tweaked to change the behavior of parsing/formatting in the locales.
 *
 * locale.addFormat adds a date format (see this file for examples).
 * Special tokens in the date format will be parsed out into regex tokens:
 *
 * {0} is a reference to an entry in locale.tokens. Output: (?:the)?
 * {unit} is a reference to all units. Output: (day|week|month|...)
 * {unit3} is a reference to a specific unit. Output: (hour)
 * {unit3-5} is a reference to a subset of the units array. Output: (hour|day|week)
 * {unit?} "?" makes that token optional. Output: (day|week|month)?
 *
 * {day} Any reference to tokens in the modifiers array will include all with the same name. Output: (yesterday|today|tomorrow)
 *
 * All spaces are optional and will be converted to "\s*"
 *
 * Locale arrays months, weekdays, units, numbers, as well as the "src" field for
 * all entries in the modifiers array follow a special format indicated by a colon:
 *
 * minute:|s  = minute|minutes
 * thicke:n|r = thicken|thicker
 *
 * Additionally in the months, weekdays, units, and numbers array these will be added at indexes that are multiples
 * of the relevant number for retrieval. For example having "sunday:|s" in the units array will result in:
 *
 * units: ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sundays']
 *
 * When matched, the index will be found using:
 *
 * units.indexOf(match) % 7;
 *
 * Resulting in the correct index with any number of alternates for that entry.
 *
 */

Date.addLocale('ko', {
  'digitDate': true,
  'monthSuffix': 'ì›”',
  'weekdays': 'ì¼ìš”ì¼,ì›”ìš”ì¼,í™”ìš”ì¼,ìˆ˜ìš”ì¼,ëª©ìš”ì¼,ê¸ˆìš”ì¼,í† ìš”ì¼',
  'units': 'ë°€ë¦¬ì´ˆ,ì´ˆ,ë¶„,ì‹œê°„,ì¼,ì£¼,ê°œì›”|ë‹¬,ë…„',
  'numbers': 'ì¼|í•œ,ì´,ì‚¼,ì‚¬,ì˜¤,ìœ¡,ì¹ ,íŒ”,êµ¬,ì‹­',
  'short': '{yyyy}ë…„{M}ì›”{d}ì¼',
  'long': '{yyyy}ë…„{M}ì›”{d}ì¼ {H}ì‹œ{mm}ë¶„',
  'full': '{yyyy}ë…„{M}ì›”{d}ì¼ {Weekday} {H}ì‹œ{mm}ë¶„{ss}ì´ˆ',
  'past': '{num}{unit} {sign}',
  'future': '{num}{unit} {sign}',
  'duration': '{num}{unit}',
  'timeSuffixes': 'ì‹œ,ë¶„,ì´ˆ',
  'ampm': 'ì˜¤ì „,ì˜¤í›„',
  'modifiers': [
    { 'name': 'day', 'src': 'ê·¸ì €ê»˜', 'value': -2 },
    { 'name': 'day', 'src': 'ì–´ì œ', 'value': -1 },
    { 'name': 'day', 'src': 'ì˜¤ëŠ˜', 'value': 0 },
    { 'name': 'day', 'src': 'ë‚´ì¼', 'value': 1 },
    { 'name': 'day', 'src': 'ëª¨ë ˆ', 'value': 2 },
    { 'name': 'sign', 'src': 'ì „', 'value': -1 },
    { 'name': 'sign', 'src': 'í›„', 'value':  1 },
    { 'name': 'shift', 'src': 'ì§€ë‚œ|ìž‘', 'value': -1 },
    { 'name': 'shift', 'src': 'ì´ë²ˆ', 'value': 0 },
    { 'name': 'shift', 'src': 'ë‹¤ìŒ|ë‚´', 'value': 1 }
  ],
  'dateParse': [
    '{num}{unit} {sign}',
    '{shift?} {unit=5-7}'
  ],
  'timeParse': [
    '{shift} {unit=5?} {weekday}',
    '{year}ë…„{month?}ì›”?{date?}ì¼?',
    '{month}ì›”{date?}ì¼?',
    '{date}ì¼'
  ]
});

/*
 *
 * Date.addLocale(<code>) adds this locale to Sugar.
 * To set the locale globally, simply call:
 *
 * Date.setLocale('nl');
 *
 * var locale = Date.getLocale(<code>) will return this object, which
 * can be tweaked to change the behavior of parsing/formatting in the locales.
 *
 * locale.addFormat adds a date format (see this file for examples).
 * Special tokens in the date format will be parsed out into regex tokens:
 *
 * {0} is a reference to an entry in locale.tokens. Output: (?:the)?
 * {unit} is a reference to all units. Output: (day|week|month|...)
 * {unit3} is a reference to a specific unit. Output: (hour)
 * {unit3-5} is a reference to a subset of the units array. Output: (hour|day|week)
 * {unit?} "?" makes that token optional. Output: (day|week|month)?
 *
 * {day} Any reference to tokens in the modifiers array will include all with the same name. Output: (yesterday|today|tomorrow)
 *
 * All spaces are optional and will be converted to "\s*"
 *
 * Locale arrays months, weekdays, units, numbers, as well as the "src" field for
 * all entries in the modifiers array follow a special format indicated by a colon:
 *
 * minute:|s  = minute|minutes
 * thicke:n|r = thicken|thicker
 *
 * Additionally in the months, weekdays, units, and numbers array these will be added at indexes that are multiples
 * of the relevant number for retrieval. For example having "sunday:|s" in the units array will result in:
 *
 * units: ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sundays']
 *
 * When matched, the index will be found using:
 *
 * units.indexOf(match) % 7;
 *
 * Resulting in the correct index with any number of alternates for that entry.
 *
 */

Date.addLocale('nl', {
  'plural': true,
  'months': 'januari,februari,maart,april,mei,juni,juli,augustus,september,oktober,november,december',
  'weekdays': 'zondag|zo,maandag|ma,dinsdag|di,woensdag|woe|wo,donderdag|do,vrijdag|vrij|vr,zaterdag|za',
  'units': 'milliseconde:|n,seconde:|n,minu:ut|ten,uur,dag:|en,we:ek|ken,maand:|en,jaar',
  'numbers': 'een,twee,drie,vier,vijf,zes,zeven,acht,negen',
  'tokens': '',
  'short':'{d} {Month} {yyyy}',
  'long': '{d} {Month} {yyyy} {H}:{mm}',
  'full': '{Weekday} {d} {Month} {yyyy} {H}:{mm}:{ss}',
  'past': '{num} {unit} {sign}',
  'future': '{num} {unit} {sign}',
  'duration': '{num} {unit}',
  'timeMarker': "'s|om",
  'modifiers': [
    { 'name': 'day', 'src': 'gisteren', 'value': -1 },
    { 'name': 'day', 'src': 'vandaag', 'value': 0 },
    { 'name': 'day', 'src': 'morgen', 'value': 1 },
    { 'name': 'day', 'src': 'overmorgen', 'value': 2 },
    { 'name': 'sign', 'src': 'geleden', 'value': -1 },
    { 'name': 'sign', 'src': 'vanaf nu', 'value': 1 },
    { 'name': 'shift', 'src': 'laatste|vorige|afgelopen', 'value': -1 },
    { 'name': 'shift', 'src': 'volgend:|e', 'value': 1 }
  ],
  'dateParse': [
    '{num} {unit} {sign}',
    '{0?} {unit=5-7} {shift}',
    '{0?} {shift} {unit=5-7}'
  ],
  'timeParse': [
    '{weekday?} {date?} {month} {year?}',
    '{shift} {weekday}'
  ]
});
/*
 *
 * Date.addLocale(<code>) adds this locale to Sugar.
 * To set the locale globally, simply call:
 *
 * Date.setLocale('pl');
 *
 * var locale = Date.getLocale(<code>) will return this object, which
 * can be tweaked to change the behavior of parsing/formatting in the locales.
 *
 * locale.addFormat adds a date format (see this file for examples).
 * Special tokens in the date format will be parsed out into regex tokens:
 *
 * {0} is a reference to an entry in locale.optionals. Output: (?:the)?
 * {unit} is a reference to all units. Output: (day|week|month|...)
 * {unit3} is a reference to a specific unit. Output: (hour)
 * {unit3-5} is a reference to a subset of the units array. Output: (hour|day|week)
 * {unit?} "?" makes that token optional. Output: (day|week|month)?
 *
 * {day} Any reference to tokens in the modifiers array will include all with the same name. Output: (yesterday|today|tomorrow)
 *
 * All spaces are optional and will be converted to "\s*"
 *
 * Locale arrays months, weekdays, units, numbers, as well as the "src" field for
 * all entries in the modifiers array follow a special format indicated by a colon:
 *
 * minute:|s  = minute|minutes
 * thicke:n|r = thicken|thicker
 *
 * Additionally in the months, weekdays, units, and numbers array these will be added at indexes that are multiples
 * of the relevant number for retrieval. For example having "sunday:|s" in the units array will result in:
 *
 * units: ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sundays']
 *
 * When matched, the index will be found using:
 *
 * units.indexOf(match) % 7;
 *
 * Resulting in the correct index with any number of alternates for that entry.
 *
 */

Date.addLocale('pl', {
  'plural':    true,
  'months':    'StyczeÅ„|Stycznia,Luty|Lutego,Marzec|Marca,KwiecieÅ„|Kwietnia,Maj|Maja,Czerwiec|Czerwca,Lipiec|Lipca,SierpieÅ„|Sierpnia,WrzesieÅ„|WrzeÅ›nia,PaÅºdziernik|PaÅºdziernika,Listopad|Listopada,GrudzieÅ„|Grudnia',
  'weekdays':  'Niedziela|NiedzielÄ™,PoniedziaÅ‚ek,Wtorek,Åšrod:a|Ä™,Czwartek,PiÄ…tek,Sobota|SobotÄ™',
  'units':     'milisekund:a|y|,sekund:a|y|,minut:a|y|,godzin:a|y|,dzieÅ„|dni,tydzieÅ„|tygodnie|tygodni,miesiÄ…ce|miesiÄ…ce|miesiÄ™cy,rok|lata|lat',
  'numbers':   'jeden|jednÄ…,dwa|dwie,trzy,cztery,piÄ™Ä‡,szeÅ›Ä‡,siedem,osiem,dziewiÄ™Ä‡,dziesiÄ™Ä‡',
  'optionals': 'w|we,roku',
  'short':     '{d} {Month} {yyyy}',
  'long':      '{d} {Month} {yyyy} {H}:{mm}',
  'full' :     '{Weekday}, {d} {Month} {yyyy} {H}:{mm}:{ss}',
  'past':      '{num} {unit} {sign}',
  'future':    '{sign} {num} {unit}',
  'duration':  '{num} {unit}',
  'timeMarker':'o',
  'ampm':      'am,pm',
  'modifiers': [
    { 'name': 'day', 'src': 'przedwczoraj', 'value': -2 },
    { 'name': 'day', 'src': 'wczoraj', 'value': -1 },
    { 'name': 'day', 'src': 'dzisiaj|dziÅ›', 'value': 0 },
    { 'name': 'day', 'src': 'jutro', 'value': 1 },
    { 'name': 'day', 'src': 'pojutrze', 'value': 2 },
    { 'name': 'sign', 'src': 'temu|przed', 'value': -1 },
    { 'name': 'sign', 'src': 'za', 'value': 1 },
    { 'name': 'shift', 'src': 'zeszÅ‚y|zeszÅ‚a|ostatni|ostatnia', 'value': -1 },
    { 'name': 'shift', 'src': 'nastÄ™pny|nastÄ™pna|nastÄ™pnego|przyszÅ‚y|przyszÅ‚a|przyszÅ‚ego', 'value': 1 }
  ],
  'dateParse': [
    '{num} {unit} {sign}',
    '{sign} {num} {unit}',
    '{month} {year}',
    '{shift} {unit=5-7}',
    '{0} {shift?} {weekday}'
  ],
  'timeParse': [
    '{date} {month} {year?} {1}',
    '{0} {shift?} {weekday}'
  ]
});

/*
 *
 * Date.addLocale(<code>) adds this locale to Sugar.
 * To set the locale globally, simply call:
 *
 * Date.setLocale('pt');
 *
 * var locale = Date.getLocale(<code>) will return this object, which
 * can be tweaked to change the behavior of parsing/formatting in the locales.
 *
 * locale.addFormat adds a date format (see this file for examples).
 * Special tokens in the date format will be parsed out into regex tokens:
 *
 * {0} is a reference to an entry in locale.tokens. Output: (?:the)?
 * {unit} is a reference to all units. Output: (day|week|month|...)
 * {unit3} is a reference to a specific unit. Output: (hour)
 * {unit3-5} is a reference to a subset of the units array. Output: (hour|day|week)
 * {unit?} "?" makes that token optional. Output: (day|week|month)?
 *
 * {day} Any reference to tokens in the modifiers array will include all with the same name. Output: (yesterday|today|tomorrow)
 *
 * All spaces are optional and will be converted to "\s*"
 *
 * Locale arrays months, weekdays, units, numbers, as well as the "src" field for
 * all entries in the modifiers array follow a special format indicated by a colon:
 *
 * minute:|s  = minute|minutes
 * thicke:n|r = thicken|thicker
 *
 * Additionally in the months, weekdays, units, and numbers array these will be added at indexes that are multiples
 * of the relevant number for retrieval. For example having "sunday:|s" in the units array will result in:
 *
 * units: ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sundays']
 *
 * When matched, the index will be found using:
 *
 * units.indexOf(match) % 7;
 *
 * Resulting in the correct index with any number of alternates for that entry.
 *
 */

Date.addLocale('pt', {
  'plural': true,
  'months': 'janeiro,fevereiro,marÃ§o,abril,maio,junho,julho,agosto,setembro,outubro,novembro,dezembro',
  'weekdays': 'domingo,segunda-feira,terÃ§a-feira,quarta-feira,quinta-feira,sexta-feira,sÃ¡bado|sabado',
  'units': 'milisegundo:|s,segundo:|s,minuto:|s,hora:|s,dia:|s,semana:|s,mÃªs|mÃªses|mes|meses,ano:|s',
  'numbers': 'um,dois,trÃªs|tres,quatro,cinco,seis,sete,oito,nove,dez,uma,duas',
  'tokens': 'a,de',
  'short':'{d} de {month} de {yyyy}',
  'long': '{d} de {month} de {yyyy} {H}:{mm}',
  'full': '{Weekday}, {d} de {month} de {yyyy} {H}:{mm}:{ss}',
  'past': '{num} {unit} {sign}',
  'future': '{sign} {num} {unit}',
  'duration': '{num} {unit}',
  'timeMarker': 'Ã s',
  'ampm': 'am,pm',
  'modifiers': [
    { 'name': 'day', 'src': 'anteontem', 'value': -2 },
    { 'name': 'day', 'src': 'ontem', 'value': -1 },
    { 'name': 'day', 'src': 'hoje', 'value': 0 },
    { 'name': 'day', 'src': 'amanh:Ã£|a', 'value': 1 },
    { 'name': 'sign', 'src': 'atrÃ¡s|atras|hÃ¡|ha', 'value': -1 },
    { 'name': 'sign', 'src': 'daqui a', 'value': 1 },
    { 'name': 'shift', 'src': 'passad:o|a', 'value': -1 },
    { 'name': 'shift', 'src': 'prÃ³ximo|prÃ³xima|proximo|proxima', 'value': 1 }
  ],
  'dateParse': [
    '{num} {unit} {sign}',
    '{sign} {num} {unit}',
    '{0?} {unit=5-7} {shift}',
    '{0?} {shift} {unit=5-7}'
  ],
  'timeParse': [
    '{date?} {1?} {month} {1?} {year?}',
    '{0?} {shift} {weekday}'
  ]
});

/*
 *
 * Date.addLocale(<code>) adds this locale to Sugar.
 * To set the locale globally, simply call:
 *
 * Date.setLocale('ru');
 *
 * var locale = Date.getLocale(<code>) will return this object, which
 * can be tweaked to change the behavior of parsing/formatting in the locales.
 *
 * locale.addFormat adds a date format (see this file for examples).
 * Special tokens in the date format will be parsed out into regex tokens:
 *
 * {0} is a reference to an entry in locale.tokens. Output: (?:the)?
 * {unit} is a reference to all units. Output: (day|week|month|...)
 * {unit3} is a reference to a specific unit. Output: (hour)
 * {unit3-5} is a reference to a subset of the units array. Output: (hour|day|week)
 * {unit?} "?" makes that token optional. Output: (day|week|month)?
 *
 * {day} Any reference to tokens in the modifiers array will include all with the same name. Output: (yesterday|today|tomorrow)
 *
 * All spaces are optional and will be converted to "\s*"
 *
 * Locale arrays months, weekdays, units, numbers, as well as the "src" field for
 * all entries in the modifiers array follow a special format indicated by a colon:
 *
 * minute:|s  = minute|minutes
 * thicke:n|r = thicken|thicker
 *
 * Additionally in the months, weekdays, units, and numbers array these will be added at indexes that are multiples
 * of the relevant number for retrieval. For example having "sunday:|s" in the units array will result in:
 *
 * units: ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sundays']
 *
 * When matched, the index will be found using:
 *
 * units.indexOf(match) % 7;
 *
 * Resulting in the correct index with any number of alternates for that entry.
 *
 */

Date.addLocale('ru', {
  'months': 'Ð¯Ð½Ð²Ð°Ñ€:Ñ|ÑŒ,Ð¤ÐµÐ²Ñ€Ð°Ð»:Ñ|ÑŒ,ÐœÐ°Ñ€Ñ‚:Ð°|,ÐÐ¿Ñ€ÐµÐ»:Ñ|ÑŒ,ÐœÐ°:Ñ|Ð¹,Ð˜ÑŽÐ½:Ñ|ÑŒ,Ð˜ÑŽÐ»:Ñ|ÑŒ,ÐÐ²Ð³ÑƒÑÑ‚:Ð°|,Ð¡ÐµÐ½Ñ‚ÑÐ±Ñ€:Ñ|ÑŒ,ÐžÐºÑ‚ÑÐ±Ñ€:Ñ|ÑŒ,ÐÐ¾ÑÐ±Ñ€:Ñ|ÑŒ,Ð”ÐµÐºÐ°Ð±Ñ€:Ñ|ÑŒ',
  'weekdays': 'Ð’Ð¾ÑÐºÑ€ÐµÑÐµÐ½ÑŒÐµ,ÐŸÐ¾Ð½ÐµÐ´ÐµÐ»ÑŒÐ½Ð¸Ðº,Ð’Ñ‚Ð¾Ñ€Ð½Ð¸Ðº,Ð¡Ñ€ÐµÐ´Ð°,Ð§ÐµÑ‚Ð²ÐµÑ€Ð³,ÐŸÑÑ‚Ð½Ð¸Ñ†Ð°,Ð¡ÑƒÐ±Ð±Ð¾Ñ‚Ð°',
  'units': 'Ð¼Ð¸Ð»Ð»Ð¸ÑÐµÐºÑƒÐ½Ð´:Ð°|Ñƒ|Ñ‹|,ÑÐµÐºÑƒÐ½Ð´:Ð°|Ñƒ|Ñ‹|,Ð¼Ð¸Ð½ÑƒÑ‚:Ð°|Ñƒ|Ñ‹|,Ñ‡Ð°Ñ:||Ð°|Ð¾Ð²,Ð´ÐµÐ½ÑŒ|Ð´ÐµÐ½ÑŒ|Ð´Ð½Ñ|Ð´Ð½ÐµÐ¹,Ð½ÐµÐ´ÐµÐ»:Ñ|ÑŽ|Ð¸|ÑŒ|Ðµ,Ð¼ÐµÑÑÑ†:||Ð°|ÐµÐ²|Ðµ,Ð³Ð¾Ð´|Ð³Ð¾Ð´|Ð³Ð¾Ð´Ð°|Ð»ÐµÑ‚|Ð³Ð¾Ð´Ñƒ',
  'numbers': 'Ð¾Ð´:Ð¸Ð½|Ð½Ñƒ,Ð´Ð²:Ð°|Ðµ,Ñ‚Ñ€Ð¸,Ñ‡ÐµÑ‚Ñ‹Ñ€Ðµ,Ð¿ÑÑ‚ÑŒ,ÑˆÐµÑÑ‚ÑŒ,ÑÐµÐ¼ÑŒ,Ð²Ð¾ÑÐµÐ¼ÑŒ,Ð´ÐµÐ²ÑÑ‚ÑŒ,Ð´ÐµÑÑÑ‚ÑŒ',
  'tokens': 'Ð²|Ð½Ð°,Ð³Ð¾Ð´Ð°',
  'short':'{d} {month} {yyyy} Ð³Ð¾Ð´Ð°',
  'long': '{d} {month} {yyyy} Ð³Ð¾Ð´Ð° {H}:{mm}',
  'full': '{Weekday} {d} {month} {yyyy} Ð³Ð¾Ð´Ð° {H}:{mm}:{ss}',
  'relative': function(num, unit, ms, format) {
    var numberWithUnit, last = num.toString().slice(-1), mult;
    switch(true) {
      case num >= 11 && num <= 15: mult = 3; break;
      case last == 1: mult = 1; break;
      case last >= 2 && last <= 4: mult = 2; break;
      default: mult = 3;
    }
    numberWithUnit = num + ' ' + this['units'][(mult * 8) + unit];
    switch(format) {
      case 'duration':  return numberWithUnit;
      case 'past':      return numberWithUnit + ' Ð½Ð°Ð·Ð°Ð´';
      case 'future':    return 'Ñ‡ÐµÑ€ÐµÐ· ' + numberWithUnit;
    }
  },
  'timeMarker': 'Ð²',
  'ampm': ' ÑƒÑ‚Ñ€Ð°, Ð²ÐµÑ‡ÐµÑ€Ð°',
  'modifiers': [
    { 'name': 'day', 'src': 'Ð¿Ð¾Ð·Ð°Ð²Ñ‡ÐµÑ€Ð°', 'value': -2 },
    { 'name': 'day', 'src': 'Ð²Ñ‡ÐµÑ€Ð°', 'value': -1 },
    { 'name': 'day', 'src': 'ÑÐµÐ³Ð¾Ð´Ð½Ñ', 'value': 0 },
    { 'name': 'day', 'src': 'Ð·Ð°Ð²Ñ‚Ñ€Ð°', 'value': 1 },
    { 'name': 'day', 'src': 'Ð¿Ð¾ÑÐ»ÐµÐ·Ð°Ð²Ñ‚Ñ€Ð°', 'value': 2 },
    { 'name': 'sign', 'src': 'Ð½Ð°Ð·Ð°Ð´', 'value': -1 },
    { 'name': 'sign', 'src': 'Ñ‡ÐµÑ€ÐµÐ·', 'value': 1 },
    { 'name': 'shift', 'src': 'Ð¿Ñ€Ð¾ÑˆÐ»:Ñ‹Ð¹|Ð¾Ð¹|Ð¾Ð¼', 'value': -1 },
    { 'name': 'shift', 'src': 'ÑÐ»ÐµÐ´ÑƒÑŽÑ‰:Ð¸Ð¹|ÐµÐ¹|ÐµÐ¼', 'value': 1 }
  ],
  'dateParse': [
    '{num} {unit} {sign}',
    '{sign} {num} {unit}',
    '{month} {year}',
    '{0?} {shift} {unit=5-7}'
  ],
  'timeParse': [
    '{date} {month} {year?} {1?}',
    '{0?} {shift} {weekday}'
  ]
});

/*
 *
 * Date.addLocale(<code>) adds this locale to Sugar.
 * To set the locale globally, simply call:
 *
 * Date.setLocale('sv');
 *
 * var locale = Date.getLocale(<code>) will return this object, which
 * can be tweaked to change the behavior of parsing/formatting in the locales.
 *
 * locale.addFormat adds a date format (see this file for examples).
 * Special tokens in the date format will be parsed out into regex tokens:
 *
 * {0} is a reference to an entry in locale.tokens. Output: (?:the)?
 * {unit} is a reference to all units. Output: (day|week|month|...)
 * {unit3} is a reference to a specific unit. Output: (hour)
 * {unit3-5} is a reference to a subset of the units array. Output: (hour|day|week)
 * {unit?} "?" makes that token optional. Output: (day|week|month)?
 *
 * {day} Any reference to tokens in the modifiers array will include all with the same name. Output: (yesterday|today|tomorrow)
 *
 * All spaces are optional and will be converted to "\s*"
 *
 * Locale arrays months, weekdays, units, numbers, as well as the "src" field for
 * all entries in the modifiers array follow a special format indicated by a colon:
 *
 * minute:|s  = minute|minutes
 * thicke:n|r = thicken|thicker
 *
 * Additionally in the months, weekdays, units, and numbers array these will be added at indexes that are multiples
 * of the relevant number for retrieval. For example having "sunday:|s" in the units array will result in:
 *
 * units: ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sundays']
 *
 * When matched, the index will be found using:
 *
 * units.indexOf(match) % 7;
 *
 * Resulting in the correct index with any number of alternates for that entry.
 *
 */

Date.addLocale('sv', {
  'plural': true,
  'months': 'januari,februari,mars,april,maj,juni,juli,augusti,september,oktober,november,december',
  'weekdays': 'sÃ¶ndag|sondag,mÃ¥ndag:|en+mandag:|en,tisdag,onsdag,torsdag,fredag,lÃ¶rdag|lordag',
  'units': 'millisekund:|er,sekund:|er,minut:|er,timm:e|ar,dag:|ar,veck:a|or|an,mÃ¥nad:|er|en+manad:|er|en,Ã¥r:||et+ar:||et',
  'numbers': 'en|ett,tvÃ¥|tva,tre,fyra,fem,sex,sju,Ã¥tta|atta,nio,tio',
  'tokens': 'den,fÃ¶r|for',
  'articles': 'den',
  'short':'den {d} {month} {yyyy}',
  'long': 'den {d} {month} {yyyy} {H}:{mm}',
  'full': '{Weekday} den {d} {month} {yyyy} {H}:{mm}:{ss}',
  'past': '{num} {unit} {sign}',
  'future': '{sign} {num} {unit}',
  'duration': '{num} {unit}',
  'ampm': 'am,pm',
  'modifiers': [
    { 'name': 'day', 'src': 'fÃ¶rrgÃ¥r|i fÃ¶rrgÃ¥r|ifÃ¶rrgÃ¥r|forrgar|i forrgar|iforrgar', 'value': -2 },
    { 'name': 'day', 'src': 'gÃ¥r|i gÃ¥r|igÃ¥r|gar|i gar|igar', 'value': -1 },
    { 'name': 'day', 'src': 'dag|i dag|idag', 'value': 0 },
    { 'name': 'day', 'src': 'morgon|i morgon|imorgon', 'value': 1 },
    { 'name': 'day', 'src': 'Ã¶ver morgon|Ã¶vermorgon|i Ã¶ver morgon|i Ã¶vermorgon|iÃ¶vermorgon|over morgon|overmorgon|i over morgon|i overmorgon|iovermorgon', 'value': 2 },
    { 'name': 'sign', 'src': 'sedan|sen', 'value': -1 },
    { 'name': 'sign', 'src': 'om', 'value':  1 },
    { 'name': 'shift', 'src': 'i fÃ¶rra|fÃ¶rra|i forra|forra', 'value': -1 },
    { 'name': 'shift', 'src': 'denna', 'value': 0 },
    { 'name': 'shift', 'src': 'nÃ¤sta|nasta', 'value': 1 }
  ],
  'dateParse': [
    '{num} {unit} {sign}',
    '{sign} {num} {unit}',
    '{1?} {num} {unit} {sign}',
    '{shift} {unit=5-7}'
  ],
  'timeParse': [
    '{0?} {weekday?} {date?} {month} {year}',
    '{date} {month}',
    '{shift} {weekday}'
  ]
});

/*
 *
 * Date.addLocale(<code>) adds this locale to Sugar.
 * To set the locale globally, simply call:
 *
 * Date.setLocale('zh-CN');
 *
 * var locale = Date.getLocale(<code>) will return this object, which
 * can be tweaked to change the behavior of parsing/formatting in the locales.
 *
 * locale.addFormat adds a date format (see this file for examples).
 * Special tokens in the date format will be parsed out into regex tokens:
 *
 * {0} is a reference to an entry in locale.tokens. Output: (?:the)?
 * {unit} is a reference to all units. Output: (day|week|month|...)
 * {unit3} is a reference to a specific unit. Output: (hour)
 * {unit3-5} is a reference to a subset of the units array. Output: (hour|day|week)
 * {unit?} "?" makes that token optional. Output: (day|week|month)?
 *
 * {day} Any reference to tokens in the modifiers array will include all with the same name. Output: (yesterday|today|tomorrow)
 *
 * All spaces are optional and will be converted to "\s*"
 *
 * Locale arrays months, weekdays, units, numbers, as well as the "src" field for
 * all entries in the modifiers array follow a special format indicated by a colon:
 *
 * minute:|s  = minute|minutes
 * thicke:n|r = thicken|thicker
 *
 * Additionally in the months, weekdays, units, and numbers array these will be added at indexes that are multiples
 * of the relevant number for retrieval. For example having "sunday:|s" in the units array will result in:
 *
 * units: ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sundays']
 *
 * When matched, the index will be found using:
 *
 * units.indexOf(match) % 7;
 *
 * Resulting in the correct index with any number of alternates for that entry.
 *
 */

Date.addLocale('zh-CN', {
  'variant': true,
  'monthSuffix': 'æœˆ',
  'weekdays': 'æ˜ŸæœŸæ—¥|å‘¨æ—¥,æ˜ŸæœŸä¸€|å‘¨ä¸€,æ˜ŸæœŸäºŒ|å‘¨äºŒ,æ˜ŸæœŸä¸‰|å‘¨ä¸‰,æ˜ŸæœŸå››|å‘¨å››,æ˜ŸæœŸäº”|å‘¨äº”,æ˜ŸæœŸå…­|å‘¨å…­',
  'units': 'æ¯«ç§’,ç§’é’Ÿ,åˆ†é’Ÿ,å°æ—¶,å¤©,ä¸ªæ˜ŸæœŸ|å‘¨,ä¸ªæœˆ,å¹´',
  'tokens': 'æ—¥|å·',
  'short':'{yyyy}å¹´{M}æœˆ{d}æ—¥',
  'long': '{yyyy}å¹´{M}æœˆ{d}æ—¥ {tt}{h}:{mm}',
  'full': '{yyyy}å¹´{M}æœˆ{d}æ—¥ {weekday} {tt}{h}:{mm}:{ss}',
  'past': '{num}{unit}{sign}',
  'future': '{num}{unit}{sign}',
  'duration': '{num}{unit}',
  'timeSuffixes': 'ç‚¹|æ—¶,åˆ†é’Ÿ?,ç§’',
  'ampm': 'ä¸Šåˆ,ä¸‹åˆ',
  'modifiers': [
    { 'name': 'day', 'src': 'å‰å¤©', 'value': -2 },
    { 'name': 'day', 'src': 'æ˜¨å¤©', 'value': -1 },
    { 'name': 'day', 'src': 'ä»Šå¤©', 'value': 0 },
    { 'name': 'day', 'src': 'æ˜Žå¤©', 'value': 1 },
    { 'name': 'day', 'src': 'åŽå¤©', 'value': 2 },
    { 'name': 'sign', 'src': 'å‰', 'value': -1 },
    { 'name': 'sign', 'src': 'åŽ', 'value':  1 },
    { 'name': 'shift', 'src': 'ä¸Š|åŽ»', 'value': -1 },
    { 'name': 'shift', 'src': 'è¿™', 'value':  0 },
    { 'name': 'shift', 'src': 'ä¸‹|æ˜Ž', 'value':  1 }
  ],
  'dateParse': [
    '{num}{unit}{sign}',
    '{shift}{unit=5-7}'
  ],
  'timeParse': [
    '{shift}{weekday}',
    '{year}å¹´{month?}æœˆ?{date?}{0?}',
    '{month}æœˆ{date?}{0?}',
    '{date}[æ—¥å·]'
  ]
});

/*
 *
 * Date.addLocale(<code>) adds this locale to Sugar.
 * To set the locale globally, simply call:
 *
 * Date.setLocale('zh-TW');
 *
 * var locale = Date.getLocale(<code>) will return this object, which
 * can be tweaked to change the behavior of parsing/formatting in the locales.
 *
 * locale.addFormat adds a date format (see this file for examples).
 * Special tokens in the date format will be parsed out into regex tokens:
 *
 * {0} is a reference to an entry in locale.tokens. Output: (?:the)?
 * {unit} is a reference to all units. Output: (day|week|month|...)
 * {unit3} is a reference to a specific unit. Output: (hour)
 * {unit3-5} is a reference to a subset of the units array. Output: (hour|day|week)
 * {unit?} "?" makes that token optional. Output: (day|week|month)?
 *
 * {day} Any reference to tokens in the modifiers array will include all with the same name. Output: (yesterday|today|tomorrow)
 *
 * All spaces are optional and will be converted to "\s*"
 *
 * Locale arrays months, weekdays, units, numbers, as well as the "src" field for
 * all entries in the modifiers array follow a special format indicated by a colon:
 *
 * minute:|s  = minute|minutes
 * thicke:n|r = thicken|thicker
 *
 * Additionally in the months, weekdays, units, and numbers array these will be added at indexes that are multiples
 * of the relevant number for retrieval. For example having "sunday:|s" in the units array will result in:
 *
 * units: ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sundays']
 *
 * When matched, the index will be found using:
 *
 * units.indexOf(match) % 7;
 *
 * Resulting in the correct index with any number of alternates for that entry.
 *
 */

  //'zh-TW': '1;æœˆ;å¹´;;æ˜ŸæœŸæ—¥|é€±æ—¥,æ˜ŸæœŸä¸€|é€±ä¸€,æ˜ŸæœŸäºŒ|é€±äºŒ,æ˜ŸæœŸä¸‰|é€±ä¸‰,æ˜ŸæœŸå››|é€±å››,æ˜ŸæœŸäº”|é€±äº”,æ˜ŸæœŸå…­|é€±å…­;æ¯«ç§’,ç§’é˜,åˆ†é˜,å°æ™‚,å¤©,å€‹æ˜ŸæœŸ|é€±,å€‹æœˆ,å¹´;;;æ—¥|è™Ÿ;;ä¸Šåˆ,ä¸‹åˆ;é»ž|æ™‚,åˆ†é˜?,ç§’;{num}{unit}{sign},{shift}{unit=5-7};{shift}{weekday},{year}å¹´{month?}æœˆ?{date?}{0},{month}æœˆ{date?}{0},{date}{0};{yyyy}å¹´{M}æœˆ{d}æ—¥ {Weekday};{tt}{h}:{mm}:{ss};å‰å¤©,æ˜¨å¤©,ä»Šå¤©,æ˜Žå¤©,å¾Œå¤©;,å‰,,å¾Œ;,ä¸Š|åŽ»,é€™,ä¸‹|æ˜Ž',

Date.addLocale('zh-TW', {
  'monthSuffix': 'æœˆ',
  'weekdays': 'æ˜ŸæœŸæ—¥|é€±æ—¥,æ˜ŸæœŸä¸€|é€±ä¸€,æ˜ŸæœŸäºŒ|é€±äºŒ,æ˜ŸæœŸä¸‰|é€±ä¸‰,æ˜ŸæœŸå››|é€±å››,æ˜ŸæœŸäº”|é€±äº”,æ˜ŸæœŸå…­|é€±å…­',
  'units': 'æ¯«ç§’,ç§’é˜,åˆ†é˜,å°æ™‚,å¤©,å€‹æ˜ŸæœŸ|é€±,å€‹æœˆ,å¹´',
  'tokens': 'æ—¥|è™Ÿ',
  'short':'{yyyy}å¹´{M}æœˆ{d}æ—¥',
  'long': '{yyyy}å¹´{M}æœˆ{d}æ—¥ {tt}{h}:{mm}',
  'full': '{yyyy}å¹´{M}æœˆ{d}æ—¥ {Weekday} {tt}{h}:{mm}:{ss}',
  'past': '{num}{unit}{sign}',
  'future': '{num}{unit}{sign}',
  'duration': '{num}{unit}',
  'timeSuffixes': 'é»ž|æ™‚,åˆ†é˜?,ç§’',
  'ampm': 'ä¸Šåˆ,ä¸‹åˆ',
  'modifiers': [
    { 'name': 'day', 'src': 'å‰å¤©', 'value': -2 },
    { 'name': 'day', 'src': 'æ˜¨å¤©', 'value': -1 },
    { 'name': 'day', 'src': 'ä»Šå¤©', 'value': 0 },
    { 'name': 'day', 'src': 'æ˜Žå¤©', 'value': 1 },
    { 'name': 'day', 'src': 'å¾Œå¤©', 'value': 2 },
    { 'name': 'sign', 'src': 'å‰', 'value': -1 },
    { 'name': 'sign', 'src': 'å¾Œ', 'value': 1 },
    { 'name': 'shift', 'src': 'ä¸Š|åŽ»', 'value': -1 },
    { 'name': 'shift', 'src': 'é€™', 'value':  0 },
    { 'name': 'shift', 'src': 'ä¸‹|æ˜Ž', 'value':  1 }
  ],
  'dateParse': [
    '{num}{unit}{sign}',
    '{shift}{unit=5-7}'
  ],
  'timeParse': [
    '{shift}{weekday}',
    '{year}å¹´{month?}æœˆ?{date?}{0?}',
    '{month}æœˆ{date?}{0?}',
    '{date}[æ—¥è™Ÿ]'
  ]
});

})();

function process_date_input_value(e) {
  var $input = $(e.target),
      value = $input.val(),
      $microcopy = $input.siblings(".n-form__microcopy"),
      $parsed_date = $microcopy.find(".n-form__microcopy--date-input-parsed-value"),
      error_state_class = "n-form__microcopy--date-input-error",
      valid_state_class = "n-form__microcopy--date-input-valid",
      locale = $parsed_date.attr("data-locale") == undefined ? 'en' : $parsed_date.attr("data-locale");

  if ($parsed_date.attr("data-placeholder-text") == undefined) {
    $parsed_date.attr("data-placeholder-text", $parsed_date.text());
  }
  if ($parsed_date.attr("data-error-text") == undefined) {
    $parsed_date.attr("data-error-text", 'Date is invalid. Please enter a valid date.');
  }

  $microcopy.removeClass(error_state_class + " " + valid_state_class);
  if (value.trim().length > 0) {
    var parsed_date = Date.create(value, locale);
    if(parsed_date.isValid()) {
      $parsed_date.text(parsed_date.format('{Month} {dd}, {yyyy}', locale));
      $microcopy.addClass(valid_state_class);
    }
    else {
      $parsed_date.text($parsed_date.attr("data-error-text"));
      $microcopy.addClass(error_state_class);
    }
  }
  else {
    $parsed_date.text($parsed_date.attr("data-placeholder-text"));
  }
}

// Wire up any smart date fields:
$(document).ready(function(){
  $("body").on("keyup", ".n-form__input--date", process_date_input_value);

  $(".n-form__input--date").trigger("keyup");
});

/*
 * jQuery FlexSlider v2.6.0
 * Copyright 2012 WooThemes
 * Contributing Author: Tyler Smith
 */
 !function($){var e=!0;$.flexslider=function(t,a){var n=$(t);n.vars=$.extend({},$.flexslider.defaults,a);var i=n.vars.namespace,s=window.navigator&&window.navigator.msPointerEnabled&&window.MSGesture,r=("ontouchstart"in window||s||window.DocumentTouch&&document instanceof DocumentTouch)&&n.vars.touch,o="click touchend MSPointerUp keyup",l="",c,d="vertical"===n.vars.direction,u=n.vars.reverse,v=n.vars.itemWidth>0,p="fade"===n.vars.animation,m=""!==n.vars.asNavFor,f={};$.data(t,"flexslider",n),f={init:function(){n.animating=!1,n.currentSlide=parseInt(n.vars.startAt?n.vars.startAt:0,10),isNaN(n.currentSlide)&&(n.currentSlide=0),n.animatingTo=n.currentSlide,n.atEnd=0===n.currentSlide||n.currentSlide===n.last,n.containerSelector=n.vars.selector.substr(0,n.vars.selector.search(" ")),n.slides=$(n.vars.selector,n),n.container=$(n.containerSelector,n),n.count=n.slides.length,n.syncExists=$(n.vars.sync).length>0,"slide"===n.vars.animation&&(n.vars.animation="swing"),n.prop=d?"top":"marginLeft",n.args={},n.manualPause=!1,n.stopped=!1,n.started=!1,n.startTimeout=null,n.transitions=!n.vars.video&&!p&&n.vars.useCSS&&function(){var e=document.createElement("div"),t=["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var a in t)if(void 0!==e.style[t[a]])return n.pfx=t[a].replace("Perspective","").toLowerCase(),n.prop="-"+n.pfx+"-transform",!0;return!1}(),n.ensureAnimationEnd="",""!==n.vars.controlsContainer&&(n.controlsContainer=$(n.vars.controlsContainer).length>0&&$(n.vars.controlsContainer)),""!==n.vars.manualControls&&(n.manualControls=$(n.vars.manualControls).length>0&&$(n.vars.manualControls)),""!==n.vars.customDirectionNav&&(n.customDirectionNav=2===$(n.vars.customDirectionNav).length&&$(n.vars.customDirectionNav)),n.vars.randomize&&(n.slides.sort(function(){return Math.round(Math.random())-.5}),n.container.empty().append(n.slides)),n.doMath(),n.setup("init"),n.vars.controlNav&&f.controlNav.setup(),n.vars.directionNav&&f.directionNav.setup(),n.vars.keyboard&&(1===$(n.containerSelector).length||n.vars.multipleKeyboard)&&$(document).bind("keyup",function(e){var t=e.keyCode;if(!n.animating&&(39===t||37===t)){var a=39===t?n.getTarget("next"):37===t?n.getTarget("prev"):!1;n.flexAnimate(a,n.vars.pauseOnAction)}}),n.vars.mousewheel&&n.bind("mousewheel",function(e,t,a,i){e.preventDefault();var s=0>t?n.getTarget("next"):n.getTarget("prev");n.flexAnimate(s,n.vars.pauseOnAction)}),n.vars.pausePlay&&f.pausePlay.setup(),n.vars.slideshow&&n.vars.pauseInvisible&&f.pauseInvisible.init(),n.vars.slideshow&&(n.vars.pauseOnHover&&n.hover(function(){n.manualPlay||n.manualPause||n.pause()},function(){n.manualPause||n.manualPlay||n.stopped||n.play()}),n.vars.pauseInvisible&&f.pauseInvisible.isHidden()||(n.vars.initDelay>0?n.startTimeout=setTimeout(n.play,n.vars.initDelay):n.play())),m&&f.asNav.setup(),r&&n.vars.touch&&f.touch(),(!p||p&&n.vars.smoothHeight)&&$(window).bind("resize orientationchange focus",f.resize),n.find("img").attr("draggable","false"),setTimeout(function(){n.vars.start(n)},200)},asNav:{setup:function(){n.asNav=!0,n.animatingTo=Math.floor(n.currentSlide/n.move),n.currentItem=n.currentSlide,n.slides.removeClass(i+"active-slide").eq(n.currentItem).addClass(i+"active-slide"),s?(t._slider=n,n.slides.each(function(){var e=this;e._gesture=new MSGesture,e._gesture.target=e,e.addEventListener("MSPointerDown",function(e){e.preventDefault(),e.currentTarget._gesture&&e.currentTarget._gesture.addPointer(e.pointerId)},!1),e.addEventListener("MSGestureTap",function(e){e.preventDefault();var t=$(this),a=t.index();$(n.vars.asNavFor).data("flexslider").animating||t.hasClass("active")||(n.direction=n.currentItem<a?"next":"prev",n.flexAnimate(a,n.vars.pauseOnAction,!1,!0,!0))})})):n.slides.on(o,function(e){e.preventDefault();var t=$(this),a=t.index(),s=t.offset().left-$(n).scrollLeft();0>=s&&t.hasClass(i+"active-slide")?n.flexAnimate(n.getTarget("prev"),!0):$(n.vars.asNavFor).data("flexslider").animating||t.hasClass(i+"active-slide")||(n.direction=n.currentItem<a?"next":"prev",n.flexAnimate(a,n.vars.pauseOnAction,!1,!0,!0))})}},controlNav:{setup:function(){n.manualControls?f.controlNav.setupManual():f.controlNav.setupPaging()},setupPaging:function(){var e="thumbnails"===n.vars.controlNav?"control-thumbs":"control-paging",t=1,a,s;if(n.controlNavScaffold=$('<ol class="'+i+"control-nav "+i+e+'"></ol>'),n.pagingCount>1)for(var r=0;r<n.pagingCount;r++){if(s=n.slides.eq(r),void 0===s.attr("data-thumb-alt")&&s.attr("data-thumb-alt",""),altText=""!==s.attr("data-thumb-alt")?altText=' alt="'+s.attr("data-thumb-alt")+'"':"",a="thumbnails"===n.vars.controlNav?'<img src="'+s.attr("data-thumb")+'"'+altText+"/>":'<a href="#">'+t+"</a>","thumbnails"===n.vars.controlNav&&!0===n.vars.thumbCaptions){var c=s.attr("data-thumbcaption");""!==c&&void 0!==c&&(a+='<span class="'+i+'caption">'+c+"</span>")}n.controlNavScaffold.append("<li>"+a+"</li>"),t++}n.controlsContainer?$(n.controlsContainer).append(n.controlNavScaffold):n.append(n.controlNavScaffold),f.controlNav.set(),f.controlNav.active(),n.controlNavScaffold.delegate("a, img",o,function(e){if(e.preventDefault(),""===l||l===e.type){var t=$(this),a=n.controlNav.index(t);t.hasClass(i+"active")||(n.direction=a>n.currentSlide?"next":"prev",n.flexAnimate(a,n.vars.pauseOnAction))}""===l&&(l=e.type),f.setToClearWatchedEvent()})},setupManual:function(){n.controlNav=n.manualControls,f.controlNav.active(),n.controlNav.bind(o,function(e){if(e.preventDefault(),""===l||l===e.type){var t=$(this),a=n.controlNav.index(t);t.hasClass(i+"active")||(a>n.currentSlide?n.direction="next":n.direction="prev",n.flexAnimate(a,n.vars.pauseOnAction))}""===l&&(l=e.type),f.setToClearWatchedEvent()})},set:function(){var e="thumbnails"===n.vars.controlNav?"img":"a";n.controlNav=$("."+i+"control-nav li "+e,n.controlsContainer?n.controlsContainer:n)},active:function(){n.controlNav.removeClass(i+"active").eq(n.animatingTo).addClass(i+"active")},update:function(e,t){n.pagingCount>1&&"add"===e?n.controlNavScaffold.append($('<li><a href="#">'+n.count+"</a></li>")):1===n.pagingCount?n.controlNavScaffold.find("li").remove():n.controlNav.eq(t).closest("li").remove(),f.controlNav.set(),n.pagingCount>1&&n.pagingCount!==n.controlNav.length?n.update(t,e):f.controlNav.active()}},directionNav:{setup:function(){var e=$('<ul class="'+i+'direction-nav"><li class="'+i+'nav-prev"><a class="'+i+'prev" href="#">'+n.vars.prevText+'</a></li><li class="'+i+'nav-next"><a class="'+i+'next" href="#">'+n.vars.nextText+"</a></li></ul>");n.customDirectionNav?n.directionNav=n.customDirectionNav:n.controlsContainer?($(n.controlsContainer).append(e),n.directionNav=$("."+i+"direction-nav li a",n.controlsContainer)):(n.append(e),n.directionNav=$("."+i+"direction-nav li a",n)),f.directionNav.update(),n.directionNav.bind(o,function(e){e.preventDefault();var t;(""===l||l===e.type)&&(t=$(this).hasClass(i+"next")?n.getTarget("next"):n.getTarget("prev"),n.flexAnimate(t,n.vars.pauseOnAction)),""===l&&(l=e.type),f.setToClearWatchedEvent()})},update:function(){var e=i+"disabled";1===n.pagingCount?n.directionNav.addClass(e).attr("tabindex","-1"):n.vars.animationLoop?n.directionNav.removeClass(e).removeAttr("tabindex"):0===n.animatingTo?n.directionNav.removeClass(e).filter("."+i+"prev").addClass(e).attr("tabindex","-1"):n.animatingTo===n.last?n.directionNav.removeClass(e).filter("."+i+"next").addClass(e).attr("tabindex","-1"):n.directionNav.removeClass(e).removeAttr("tabindex")}},pausePlay:{setup:function(){var e=$('<div class="'+i+'pauseplay"><a href="#"></a></div>');n.controlsContainer?(n.controlsContainer.append(e),n.pausePlay=$("."+i+"pauseplay a",n.controlsContainer)):(n.append(e),n.pausePlay=$("."+i+"pauseplay a",n)),f.pausePlay.update(n.vars.slideshow?i+"pause":i+"play"),n.pausePlay.bind(o,function(e){e.preventDefault(),(""===l||l===e.type)&&($(this).hasClass(i+"pause")?(n.manualPause=!0,n.manualPlay=!1,n.pause()):(n.manualPause=!1,n.manualPlay=!0,n.play())),""===l&&(l=e.type),f.setToClearWatchedEvent()})},update:function(e){"play"===e?n.pausePlay.removeClass(i+"pause").addClass(i+"play").html(n.vars.playText):n.pausePlay.removeClass(i+"play").addClass(i+"pause").html(n.vars.pauseText)}},touch:function(){function e(e){e.stopPropagation(),n.animating?e.preventDefault():(n.pause(),t._gesture.addPointer(e.pointerId),T=0,c=d?n.h:n.w,f=Number(new Date),l=v&&u&&n.animatingTo===n.last?0:v&&u?n.limit-(n.itemW+n.vars.itemMargin)*n.move*n.animatingTo:v&&n.currentSlide===n.last?n.limit:v?(n.itemW+n.vars.itemMargin)*n.move*n.currentSlide:u?(n.last-n.currentSlide+n.cloneOffset)*c:(n.currentSlide+n.cloneOffset)*c)}function a(e){e.stopPropagation();var a=e.target._slider;if(a){var n=-e.translationX,i=-e.translationY;return T+=d?i:n,m=T,x=d?Math.abs(T)<Math.abs(-n):Math.abs(T)<Math.abs(-i),e.detail===e.MSGESTURE_FLAG_INERTIA?void setImmediate(function(){t._gesture.stop()}):void((!x||Number(new Date)-f>500)&&(e.preventDefault(),!p&&a.transitions&&(a.vars.animationLoop||(m=T/(0===a.currentSlide&&0>T||a.currentSlide===a.last&&T>0?Math.abs(T)/c+2:1)),a.setProps(l+m,"setTouch"))))}}function i(e){e.stopPropagation();var t=e.target._slider;if(t){if(t.animatingTo===t.currentSlide&&!x&&null!==m){var a=u?-m:m,n=a>0?t.getTarget("next"):t.getTarget("prev");t.canAdvance(n)&&(Number(new Date)-f<550&&Math.abs(a)>50||Math.abs(a)>c/2)?t.flexAnimate(n,t.vars.pauseOnAction):p||t.flexAnimate(t.currentSlide,t.vars.pauseOnAction,!0)}r=null,o=null,m=null,l=null,T=0}}var r,o,l,c,m,f,g,h,S,x=!1,y=0,b=0,T=0;s?(t.style.msTouchAction="none",t._gesture=new MSGesture,t._gesture.target=t,t.addEventListener("MSPointerDown",e,!1),t._slider=n,t.addEventListener("MSGestureChange",a,!1),t.addEventListener("MSGestureEnd",i,!1)):(g=function(e){n.animating?e.preventDefault():(window.navigator.msPointerEnabled||1===e.touches.length)&&(n.pause(),c=d?n.h:n.w,f=Number(new Date),y=e.touches[0].pageX,b=e.touches[0].pageY,l=v&&u&&n.animatingTo===n.last?0:v&&u?n.limit-(n.itemW+n.vars.itemMargin)*n.move*n.animatingTo:v&&n.currentSlide===n.last?n.limit:v?(n.itemW+n.vars.itemMargin)*n.move*n.currentSlide:u?(n.last-n.currentSlide+n.cloneOffset)*c:(n.currentSlide+n.cloneOffset)*c,r=d?b:y,o=d?y:b,t.addEventListener("touchmove",h,!1),t.addEventListener("touchend",S,!1))},h=function(e){y=e.touches[0].pageX,b=e.touches[0].pageY,m=d?r-b:r-y,x=d?Math.abs(m)<Math.abs(y-o):Math.abs(m)<Math.abs(b-o);var t=500;(!x||Number(new Date)-f>t)&&(e.preventDefault(),!p&&n.transitions&&(n.vars.animationLoop||(m/=0===n.currentSlide&&0>m||n.currentSlide===n.last&&m>0?Math.abs(m)/c+2:1),n.setProps(l+m,"setTouch")))},S=function(e){if(t.removeEventListener("touchmove",h,!1),n.animatingTo===n.currentSlide&&!x&&null!==m){var a=u?-m:m,i=a>0?n.getTarget("next"):n.getTarget("prev");n.canAdvance(i)&&(Number(new Date)-f<550&&Math.abs(a)>50||Math.abs(a)>c/2)?n.flexAnimate(i,n.vars.pauseOnAction):p||n.flexAnimate(n.currentSlide,n.vars.pauseOnAction,!0)}t.removeEventListener("touchend",S,!1),r=null,o=null,m=null,l=null},t.addEventListener("touchstart",g,!1))},resize:function(){!n.animating&&n.is(":visible")&&(v||n.doMath(),p?f.smoothHeight():v?(n.slides.width(n.computedW),n.update(n.pagingCount),n.setProps()):d?(n.viewport.height(n.h),n.setProps(n.h,"setTotal")):(n.vars.smoothHeight&&f.smoothHeight(),n.newSlides.width(n.computedW),n.setProps(n.computedW,"setTotal")))},smoothHeight:function(e){if(!d||p){var t=p?n:n.viewport;e?t.animate({height:n.slides.eq(n.animatingTo).height()},e):t.height(n.slides.eq(n.animatingTo).height())}},sync:function(e){var t=$(n.vars.sync).data("flexslider"),a=n.animatingTo;switch(e){case"animate":t.flexAnimate(a,n.vars.pauseOnAction,!1,!0);break;case"play":t.playing||t.asNav||t.play();break;case"pause":t.pause()}},uniqueID:function(e){return e.filter("[id]").add(e.find("[id]")).each(function(){var e=$(this);e.attr("id",e.attr("id")+"_clone")}),e},pauseInvisible:{visProp:null,init:function(){var e=f.pauseInvisible.getHiddenProp();if(e){var t=e.replace(/[H|h]idden/,"")+"visibilitychange";document.addEventListener(t,function(){f.pauseInvisible.isHidden()?n.startTimeout?clearTimeout(n.startTimeout):n.pause():n.started?n.play():n.vars.initDelay>0?setTimeout(n.play,n.vars.initDelay):n.play()})}},isHidden:function(){var e=f.pauseInvisible.getHiddenProp();return e?document[e]:!1},getHiddenProp:function(){var e=["webkit","moz","ms","o"];if("hidden"in document)return"hidden";for(var t=0;t<e.length;t++)if(e[t]+"Hidden"in document)return e[t]+"Hidden";return null}},setToClearWatchedEvent:function(){clearTimeout(c),c=setTimeout(function(){l=""},3e3)}},n.flexAnimate=function(e,t,a,s,o){if(n.vars.animationLoop||e===n.currentSlide||(n.direction=e>n.currentSlide?"next":"prev"),m&&1===n.pagingCount&&(n.direction=n.currentItem<e?"next":"prev"),!n.animating&&(n.canAdvance(e,o)||a)&&n.is(":visible")){if(m&&s){var l=$(n.vars.asNavFor).data("flexslider");if(n.atEnd=0===e||e===n.count-1,l.flexAnimate(e,!0,!1,!0,o),n.direction=n.currentItem<e?"next":"prev",l.direction=n.direction,Math.ceil((e+1)/n.visible)-1===n.currentSlide||0===e)return n.currentItem=e,n.slides.removeClass(i+"active-slide").eq(e).addClass(i+"active-slide"),!1;n.currentItem=e,n.slides.removeClass(i+"active-slide").eq(e).addClass(i+"active-slide"),e=Math.floor(e/n.visible)}if(n.animating=!0,n.animatingTo=e,t&&n.pause(),n.vars.before(n),n.syncExists&&!o&&f.sync("animate"),n.vars.controlNav&&f.controlNav.active(),v||n.slides.removeClass(i+"active-slide").eq(e).addClass(i+"active-slide"),n.atEnd=0===e||e===n.last,n.vars.directionNav&&f.directionNav.update(),e===n.last&&(n.vars.end(n),n.vars.animationLoop||n.pause()),p)r?(n.slides.eq(n.currentSlide).css({opacity:0,zIndex:1}),n.slides.eq(e).css({opacity:1,zIndex:2}),n.wrapup(c)):(n.slides.eq(n.currentSlide).css({zIndex:1}).animate({opacity:0},n.vars.animationSpeed,n.vars.easing),n.slides.eq(e).css({zIndex:2}).animate({opacity:1},n.vars.animationSpeed,n.vars.easing,n.wrapup));else{var c=d?n.slides.filter(":first").height():n.computedW,g,h,S;v?(g=n.vars.itemMargin,S=(n.itemW+g)*n.move*n.animatingTo,h=S>n.limit&&1!==n.visible?n.limit:S):h=0===n.currentSlide&&e===n.count-1&&n.vars.animationLoop&&"next"!==n.direction?u?(n.count+n.cloneOffset)*c:0:n.currentSlide===n.last&&0===e&&n.vars.animationLoop&&"prev"!==n.direction?u?0:(n.count+1)*c:u?(n.count-1-e+n.cloneOffset)*c:(e+n.cloneOffset)*c,n.setProps(h,"",n.vars.animationSpeed),n.transitions?(n.vars.animationLoop&&n.atEnd||(n.animating=!1,n.currentSlide=n.animatingTo),n.container.unbind("webkitTransitionEnd transitionend"),n.container.bind("webkitTransitionEnd transitionend",function(){clearTimeout(n.ensureAnimationEnd),n.wrapup(c)}),clearTimeout(n.ensureAnimationEnd),n.ensureAnimationEnd=setTimeout(function(){n.wrapup(c)},n.vars.animationSpeed+100)):n.container.animate(n.args,n.vars.animationSpeed,n.vars.easing,function(){n.wrapup(c)})}n.vars.smoothHeight&&f.smoothHeight(n.vars.animationSpeed)}},n.wrapup=function(e){p||v||(0===n.currentSlide&&n.animatingTo===n.last&&n.vars.animationLoop?n.setProps(e,"jumpEnd"):n.currentSlide===n.last&&0===n.animatingTo&&n.vars.animationLoop&&n.setProps(e,"jumpStart")),n.animating=!1,n.currentSlide=n.animatingTo,n.vars.after(n)},n.animateSlides=function(){!n.animating&&e&&n.flexAnimate(n.getTarget("next"))},n.pause=function(){clearInterval(n.animatedSlides),n.animatedSlides=null,n.playing=!1,n.vars.pausePlay&&f.pausePlay.update("play"),n.syncExists&&f.sync("pause")},n.play=function(){n.playing&&clearInterval(n.animatedSlides),n.animatedSlides=n.animatedSlides||setInterval(n.animateSlides,n.vars.slideshowSpeed),n.started=n.playing=!0,n.vars.pausePlay&&f.pausePlay.update("pause"),n.syncExists&&f.sync("play")},n.stop=function(){n.pause(),n.stopped=!0},n.canAdvance=function(e,t){var a=m?n.pagingCount-1:n.last;return t?!0:m&&n.currentItem===n.count-1&&0===e&&"prev"===n.direction?!0:m&&0===n.currentItem&&e===n.pagingCount-1&&"next"!==n.direction?!1:e!==n.currentSlide||m?n.vars.animationLoop?!0:n.atEnd&&0===n.currentSlide&&e===a&&"next"!==n.direction?!1:n.atEnd&&n.currentSlide===a&&0===e&&"next"===n.direction?!1:!0:!1},n.getTarget=function(e){return n.direction=e,"next"===e?n.currentSlide===n.last?0:n.currentSlide+1:0===n.currentSlide?n.last:n.currentSlide-1},n.setProps=function(e,t,a){var i=function(){var a=e?e:(n.itemW+n.vars.itemMargin)*n.move*n.animatingTo,i=function(){if(v)return"setTouch"===t?e:u&&n.animatingTo===n.last?0:u?n.limit-(n.itemW+n.vars.itemMargin)*n.move*n.animatingTo:n.animatingTo===n.last?n.limit:a;switch(t){case"setTotal":return u?(n.count-1-n.currentSlide+n.cloneOffset)*e:(n.currentSlide+n.cloneOffset)*e;case"setTouch":return u?e:e;case"jumpEnd":return u?e:n.count*e;case"jumpStart":return u?n.count*e:e;default:return e}}();return-1*i+"px"}();n.transitions&&(i=d?"translate3d(0,"+i+",0)":"translate3d("+i+",0,0)",a=void 0!==a?a/1e3+"s":"0s",n.container.css("-"+n.pfx+"-transition-duration",a),n.container.css("transition-duration",a)),n.args[n.prop]=i,(n.transitions||void 0===a)&&n.container.css(n.args),n.container.css("transform",i)},n.setup=function(e){if(p)n.slides.css({width:"100%","float":"left",marginRight:"-100%",position:"relative"}),"init"===e&&(r?n.slides.css({opacity:0,display:"block",webkitTransition:"opacity "+n.vars.animationSpeed/1e3+"s ease",zIndex:1}).eq(n.currentSlide).css({opacity:1,zIndex:2}):0==n.vars.fadeFirstSlide?n.slides.css({opacity:0,display:"block",zIndex:1}).eq(n.currentSlide).css({zIndex:2}).css({opacity:1}):n.slides.css({opacity:0,display:"block",zIndex:1}).eq(n.currentSlide).css({zIndex:2}).animate({opacity:1},n.vars.animationSpeed,n.vars.easing)),n.vars.smoothHeight&&f.smoothHeight();else{var t,a;"init"===e&&(n.viewport=$('<div class="'+i+'viewport"></div>').css({overflow:"hidden",position:"relative"}).appendTo(n).append(n.container),n.cloneCount=0,n.cloneOffset=0,u&&(a=$.makeArray(n.slides).reverse(),n.slides=$(a),n.container.empty().append(n.slides))),n.vars.animationLoop&&!v&&(n.cloneCount=2,n.cloneOffset=1,"init"!==e&&n.container.find(".clone").remove(),n.container.append(f.uniqueID(n.slides.first().clone().addClass("clone")).attr("aria-hidden","true")).prepend(f.uniqueID(n.slides.last().clone().addClass("clone")).attr("aria-hidden","true"))),n.newSlides=$(n.vars.selector,n),t=u?n.count-1-n.currentSlide+n.cloneOffset:n.currentSlide+n.cloneOffset,d&&!v?(n.container.height(200*(n.count+n.cloneCount)+"%").css("position","absolute").width("100%"),setTimeout(function(){n.newSlides.css({display:"block"}),n.doMath(),n.viewport.height(n.h),n.setProps(t*n.h,"init")},"init"===e?100:0)):(n.container.width(200*(n.count+n.cloneCount)+"%"),n.setProps(t*n.computedW,"init"),setTimeout(function(){n.doMath(),n.newSlides.css({width:n.computedW,marginRight:n.computedM,"float":"left",display:"block"}),n.vars.smoothHeight&&f.smoothHeight()},"init"===e?100:0))}v||n.slides.removeClass(i+"active-slide").eq(n.currentSlide).addClass(i+"active-slide"),n.vars.init(n)},n.doMath=function(){var e=n.slides.first(),t=n.vars.itemMargin,a=n.vars.minItems,i=n.vars.maxItems;n.w=void 0===n.viewport?n.width():n.viewport.width(),n.h=e.height(),n.boxPadding=e.outerWidth()-e.width(),v?(n.itemT=n.vars.itemWidth+t,n.itemM=t,n.minW=a?a*n.itemT:n.w,n.maxW=i?i*n.itemT-t:n.w,n.itemW=n.minW>n.w?(n.w-t*(a-1))/a:n.maxW<n.w?(n.w-t*(i-1))/i:n.vars.itemWidth>n.w?n.w:n.vars.itemWidth,n.visible=Math.floor(n.w/n.itemW),n.move=n.vars.move>0&&n.vars.move<n.visible?n.vars.move:n.visible,n.pagingCount=Math.ceil((n.count-n.visible)/n.move+1),n.last=n.pagingCount-1,n.limit=1===n.pagingCount?0:n.vars.itemWidth>n.w?n.itemW*(n.count-1)+t*(n.count-1):(n.itemW+t)*n.count-n.w-t):(n.itemW=n.w,n.itemM=t,n.pagingCount=n.count,n.last=n.count-1),n.computedW=n.itemW-n.boxPadding,n.computedM=n.itemM},n.update=function(e,t){n.doMath(),v||(e<n.currentSlide?n.currentSlide+=1:e<=n.currentSlide&&0!==e&&(n.currentSlide-=1),n.animatingTo=n.currentSlide),n.vars.controlNav&&!n.manualControls&&("add"===t&&!v||n.pagingCount>n.controlNav.length?f.controlNav.update("add"):("remove"===t&&!v||n.pagingCount<n.controlNav.length)&&(v&&n.currentSlide>n.last&&(n.currentSlide-=1,n.animatingTo-=1),f.controlNav.update("remove",n.last))),n.vars.directionNav&&f.directionNav.update()},n.addSlide=function(e,t){var a=$(e);n.count+=1,n.last=n.count-1,d&&u?void 0!==t?n.slides.eq(n.count-t).after(a):n.container.prepend(a):void 0!==t?n.slides.eq(t).before(a):n.container.append(a),n.update(t,"add"),n.slides=$(n.vars.selector+":not(.clone)",n),n.setup(),n.vars.added(n)},n.removeSlide=function(e){var t=isNaN(e)?n.slides.index($(e)):e;n.count-=1,n.last=n.count-1,isNaN(e)?$(e,n.slides).remove():d&&u?n.slides.eq(n.last).remove():n.slides.eq(e).remove(),n.doMath(),n.update(t,"remove"),n.slides=$(n.vars.selector+":not(.clone)",n),n.setup(),n.vars.removed(n)},f.init()},$(window).blur(function(t){e=!1}).focus(function(t){e=!0}),$.flexslider.defaults={namespace:"flex-",selector:".slides > li",animation:"fade",easing:"swing",direction:"horizontal",reverse:!1,animationLoop:!0,smoothHeight:!1,startAt:0,slideshow:!0,slideshowSpeed:7e3,animationSpeed:600,initDelay:0,randomize:!1,fadeFirstSlide:!0,thumbCaptions:!1,pauseOnAction:!0,pauseOnHover:!1,pauseInvisible:!0,useCSS:!0,touch:!0,video:!1,controlNav:!0,directionNav:!0,prevText:"Previous",nextText:"Next",keyboard:!0,multipleKeyboard:!1,mousewheel:!1,pausePlay:!1,pauseText:"Pause",playText:"Play",controlsContainer:"",manualControls:"",customDirectionNav:"",sync:"",asNavFor:"",itemWidth:0,itemMargin:0,minItems:1,maxItems:0,move:0,allowOneSlide:!0,start:function(){},before:function(){},after:function(){},end:function(){},added:function(){},removed:function(){},init:function(){}},$.fn.flexslider=function(e){if(void 0===e&&(e={}),"object"==typeof e)return this.each(function(){var t=$(this),a=e.selector?e.selector:".slides > li",n=t.find(a);1===n.length&&e.allowOneSlide===!0||0===n.length?(n.fadeIn(400),e.start&&e.start(t)):void 0===t.data("flexslider")&&new $.flexslider(this,e)});var t=$(this).data("flexslider");switch(e){case"play":t.play();break;case"pause":t.pause();break;case"stop":t.stop();break;case"next":t.flexAnimate(t.getTarget("next"),!0);break;case"prev":case"previous":t.flexAnimate(t.getTarget("prev"),!0);break;default:"number"==typeof e&&t.flexAnimate(e,!0)}}}(jQuery);

 //loads flexslider carousel if on page
   $(window).load(function() {
     if ( $('.flexslider').length ) {
       $('.flexslider').flexslider();
   }
   });


!function(a,b){"function"==typeof define&&define.amd?define([],function(){return a.svg4everybody=b()}):"object"==typeof exports?module.exports=b():a.svg4everybody=b()}(this,function(){/*! svg4everybody v2.0.0 | github.com/jonathantneal/svg4everybody */
function a(a,b){if(b){var c=!a.getAttribute("viewBox")&&b.getAttribute("viewBox"),d=document.createDocumentFragment(),e=b.cloneNode(!0);for(c&&a.setAttribute("viewBox",c);e.childNodes.length;)d.appendChild(e.firstChild);a.appendChild(d)}}function b(b){b.onreadystatechange=function(){if(4===b.readyState){var c=document.createElement("x");c.innerHTML=b.responseText,b.s.splice(0).map(function(b){a(b[0],c.querySelector("#"+b[1].replace(/(\W)/g,"\\$1")))})}},b.onreadystatechange()}function c(c){function d(){for(var c;c=e[0];){var j=c.parentNode;if(j&&/svg/i.test(j.nodeName)){var k=c.getAttribute("xlink:href");if(f&&(!g||g(k,j,c))){var l=k.split("#"),m=l[0],n=l[1];if(j.removeChild(c),m.length){var o=i[m]=i[m]||new XMLHttpRequest;o.s||(o.s=[],o.open("GET",m),o.send()),o.s.push([j,n]),b(o)}else a(j,document.getElementById(n))}}}h(d,17)}c=c||{};var e=document.getElementsByTagName("use"),f="shim"in c?c.shim:/\bEdge\/12\b|\bTrident\/[567]\b|\bVersion\/7.0 Safari\b/.test(navigator.userAgent)||(navigator.userAgent.match(/AppleWebKit\/(\d+)/)||[])[1]<537,g=c.validate,h=window.requestAnimationFrame||setTimeout,i={};f&&d()}return c});

svg4everybody();

jQuery.extend({
  getQueryParameters : function(str) {
    return (str || document.location.search).replace(/(^\?)/,'').split("&").map(function(n){return n = n.split("="),this[n[0]] = n[1],this}.bind({}))[0];
  }
});

function set_menu_widths() {
  var $visible_menus = $(".n-menu--is-active");

  $visible_menus.each(function(){
    var $menu = $(this),
        available_width = $(window).width(),
        single_row_menu_width = 0,
        menu_narrow_class = "n-menu--is-narrow";

    $menu.find(".n-menu__list-section").each(function(){
      single_row_menu_width += $(this).css({width: 'auto'}).outerWidth();
      $(this).attr("style", "");
    });

    if (single_row_menu_width > available_width) {
      $menu.addClass(menu_narrow_class);
    }
    else {
      $menu.removeClass(menu_narrow_class);
    }
  });
}

$(document).ready(function(){
  var show_menus_on_load = $.getQueryParameters()['show-menu'];

  if (show_menus_on_load !== undefined) {
    var menus_to_show = show_menus_on_load.split(',');
    for (var i=0; i < menus_to_show.length; i++) {
      var menu = menus_to_show[i];
      var menu_id = menu;
      $("#" + menu_id).css({position: 'static', display: 'inline-block'});
    }

    set_menu_widths();
  }

  $(window).on('resize', set_menu_widths);
});

/*!
	Modaal - accessible modals - v0.3.1
	by Humaan, for all humans.
	http://humaan.com
 */
!function(a){var t='<div class="modaal-loading-spinner"><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div></div>',o={init:function(t,o){var e=this;e.dom=a("body"),e.$elem=a(o),e.options=a.extend({},a.fn.modaal.options,e.$elem.data(),t),e.xhr=null,e.scope={is_open:!1,id:"modaal_"+(new Date).getTime()+Math.random().toString(16).substring(2)},e.$elem.attr("data-modaal-scope",e.scope.id),e.private_options={active_class:"is_active"},e.lastFocus=null,e.options.is_locked||"confirm"==e.options.type||e.options.hide_close?e.scope.close_btn="":e.scope.close_btn='<button type="button" class="modaal-close" id="modaal-close" aria-label="'+e.options.close_aria_label+'"><span>'+e.options.close_text+"</span></button>","none"===e.options.animation&&(e.options.animation_speed=0,e.options.after_callback_delay=0),a(o).on("click.Modaal",function(a){a.preventDefault();var t;if(e.lastFocus=document.activeElement,e.options.should_open!==!1&&("function"!=typeof e.options.should_open||e.options.should_open()!==!1)){switch(e.options.before_open.call(e,a),e.options.type){case"inline":e.create_basic();break;case"ajax":t=e.options.source(e.$elem,e.$elem.attr("href")),e.fetch_ajax(t);break;case"confirm":e.options.is_locked=!0,e.create_confirm();break;case"image":e.create_image();break;case"iframe":t=e.options.source(e.$elem,e.$elem.attr("href")),e.create_iframe(t);break;case"video":e.create_video(e.$elem.attr("href"));break;case"instagram":e.create_instagram()}e.watch_events()}}),e.options.start_open===!0&&a(o).click()},watch_events:function(){var t=this;t.dom.off("click.Modaal keyup.Modaal keydown.Modaal"),t.dom.on("keydown.Modaal",function(o){var e=o.keyCode,i=o.target;9==e&&t.scope.is_open&&(a.contains(document.getElementById(t.scope.id),i)||a("#"+t.scope.id).find('*[tabindex="0"]').focus())}),t.dom.on("keyup.Modaal",function(o){var e=o.keyCode,i=o.target;return o.shiftKey&&9==o.keyCode&&t.scope.is_open&&(a.contains(document.getElementById(t.scope.id),i)||a("#"+t.scope.id).find(".modaal-close").focus()),!t.options.is_locked&&27==e&&t.scope.is_open?a(document.activeElement).is("input:not(:checkbox):not(:radio)")?!1:void t.modaal_close():"image"==t.options.type?(37==e&&t.scope.is_open&&!a("#"+t.scope.id+" .modaal-gallery-prev").hasClass("is_hidden")&&t.gallery_update("prev"),void(39==e&&t.scope.is_open&&!a("#"+t.scope.id+" .modaal-gallery-next").hasClass("is_hidden")&&t.gallery_update("next"))):void 0}),t.dom.on("click.Modaal",function(o){var e=a(o.target);if(!t.options.is_locked&&(t.options.overlay_close&&e.is(".modaal-inner-wrapper")||e.is(".modaal-close")||e.closest(".modaal-close").length))return void t.modaal_close();if(e.is(".modaal-confirm-btn"))return e.is(".modaal-ok")&&t.options.confirm_callback.call(t,t.lastFocus),e.is(".modaal-cancel")&&t.options.confirm_cancel_callback.call(t,t.lastFocus),void t.modaal_close();if(e.is(".modaal-gallery-control")){if(e.hasClass("is_hidden"))return;return e.is(".modaal-gallery-prev")&&t.gallery_update("prev"),void(e.is(".modaal-gallery-next")&&t.gallery_update("next"))}})},build_modal:function(a){var t=this,o="";"instagram"==t.options.type&&(o=" modaal-instagram");var e,i="video"==t.options.type?"modaal-video-wrap":"modaal-content";switch(t.options.animation){case"fade":e=" modaal-start_fade";break;case"slide-down":e=" modaal-start_slidedown";break;default:e=" modaal-start_none"}var l="";t.options.fullscreen&&(l=" modaal-fullscreen"),""===t.options.custom_class&&"undefined"==typeof t.options.custom_class||(t.options.custom_class=" "+t.options.custom_class);var s="";t.options.width&&t.options.height&&"number"==typeof t.options.width&&"number"==typeof t.options.height?s=' style="max-width:'+t.options.width+"px;height:"+t.options.height+'px;overflow:auto;"':t.options.width&&"number"==typeof t.options.width?s=' style="max-width:'+t.options.width+'px;"':t.options.height&&"number"==typeof t.options.height&&(s=' style="height:'+t.options.height+'px;overflow:auto;"'),("image"==t.options.type||"video"==t.options.type||"instagram"==t.options.type||t.options.fullscreen)&&(s="");var n='<div class="modaal-wrapper modaal-'+t.options.type+e+o+l+t.options.custom_class+'" id="'+t.scope.id+'"><div class="modaal-outer-wrapper"><div class="modaal-inner-wrapper">';"video"!=t.options.type&&(n+='<div class="modaal-container"'+s+">"),n+='<div class="'+i+' modaal-focus" aria-hidden="false" aria-label="'+t.options.accessible_title+' (Press escape to close)" role="dialog">',n+="inline"==t.options.type?'<div class="modaal-content-container"></div>':a,n+="</div>"+t.scope.close_btn,"video"!=t.options.type&&(n+="</div>"),n+="</div></div></div>",t.dom.append(n),"inline"==t.options.type&&a.appendTo("#"+t.scope.id+" .modaal-content-container"),t.modaal_overlay("show")},create_basic:function(){var t=this,o=t.$elem.is("[href]")?a(t.$elem.attr("href")):t.$elem,e="";o.length?(e=o.contents().clone(!0,!0),o.empty()):e="Content could not be loaded. Please check the source and try again.",t.build_modal(e)},create_instagram:function(){var t=this,o=t.options.instagram_id,e="",i="Instagram photo couldn't be loaded, please check the embed code and try again.";if(t.build_modal('<div class="modaal-content-container'+(""!=t.options.loading_class?" "+t.options.loading_class:"")+'">'+t.options.loading_content+"</div>"),""!=o&&null!==o&&void 0!==o){var l="https://api.instagram.com/oembed?url=http://instagr.am/p/"+o+"/";a.ajax({url:l,dataType:"jsonp",cache:!1,success:function(o){e=o.html;var i=a("#"+t.scope.id+" .modaal-content-container");i.length>0&&(i.removeClass(t.options.loading_class),i.html(e),window.instgrm.Embeds.process())},error:function(){e=i;var o=a("#"+t.scope.id+" .modaal-content-container");o.length>0&&(o.removeClass(t.options.loading_class).addClass(t.options.ajax_error_class),o.html(e))}})}else e=i;return!1},fetch_ajax:function(t){var o=this;null==o.options.accessible_title&&(o.options.accessible_title="Dialog Window"),null!==o.xhr&&(o.xhr.abort(),o.xhr=null),o.build_modal('<div class="modaal-content-container'+(""!=o.options.loading_class?" "+o.options.loading_class:"")+'">'+o.options.loading_content+"</div>"),o.xhr=a.ajax(t,{success:function(t){var e=a("#"+o.scope.id).find(".modaal-content-container");e.length>0&&(e.removeClass(o.options.loading_class),e.html(t),o.options.ajax_success.call(o,e))},error:function(t){if("abort"!=t.statusText){var e=a("#"+o.scope.id+" .modaal-content-container");e.length>0&&(e.removeClass(o.options.loading_class).addClass(o.options.ajax_error_class),e.html("Content could not be loaded. Please check the source and try again."))}}})},create_confirm:function(){var a,t=this;a='<div class="modaal-content-container"><h1 id="modaal-title">'+t.options.confirm_title+'</h1><div class="modaal-confirm-content">'+t.options.confirm_content+'</div><div class="modaal-confirm-wrap"><button type="button" class="modaal-confirm-btn modaal-ok" aria-label="Confirm">'+t.options.confirm_button_text+'</button><button type="button" class="modaal-confirm-btn modaal-cancel" aria-label="Cancel">'+t.options.confirm_cancel_button_text+"</button></div></div></div>",t.build_modal(a)},create_image:function(){var t,o,e=this,i="",l='<button type="button" class="modaal-gallery-control modaal-gallery-prev" id="modaal-gallery-prev" aria-label="Previous image (use left arrow to change)"><span>Previous Image</span></button>',s='<button type="button" class="modaal-gallery-control modaal-gallery-next" id="modaal-gallery-next" aria-label="Next image (use right arrow to change)"><span>Next Image</span></button>';if(e.$elem.is("[rel]")){var n=e.$elem.attr("rel"),d=a('[rel="'+n+'"]');d.removeAttr("data-gallery-active","is_active"),e.$elem.attr("data-gallery-active","is_active"),o=d.length-1;var r=[];i='<div class="modaal-gallery-item-wrap">',d.each(function(a,t){var o="",e="",i="",l=!1,s=t.getAttribute("data-modaal-desc"),n=t.getAttribute("data-gallery-active");""!==t.href||void 0!==t.href?o=t.href:""===t.src&&void 0===t.src||(o=t.src),""!=s&&null!==s&&void 0!==s?(e=s,i='<div class="modaal-gallery-label"><span class="modaal-accessible-hide">Image '+(a+1)+" - </span>"+s+"</div>"):i='<div class="modaal-gallery-label"><span class="modaal-accessible-hide">Image '+(a+1)+"</span></div>",n&&(l=!0);var d={url:o,alt:e,rawdesc:s,desc:i,active:l};r.push(d)});for(var c=0;c<r.length;c++){var m="",p=r[c].rawdesc?"Image: "+r[c].rawdesc:"Image "+c+" no description";r[c].active&&(m=" "+e.private_options.active_class),i+='<div class="modaal-gallery-item gallery-item-'+c+m+'" aria-label="'+p+'"><img src="'+r[c].url+'" alt=" " style="width:100%">'+r[c].desc+"</div>"}i+="</div>"+l+s}else{var _=e.$elem.attr("href"),v="",f="",p="";e.$elem.attr("data-modaal-desc")?(p=e.$elem.attr("data-modaal-desc"),v=e.$elem.attr("data-modaal-desc"),f='<div class="modaal-gallery-label"><span class="modaal-accessible-hide">Image - </span>'+v+"</div>"):p="Image with no description",i='<div class="modaal-gallery-item is_active" aria-label="'+p+'"><img src="'+_+'" alt=" " style="width:100%">'+f+"</div>"}t=i,e.build_modal(t),a(".modaal-gallery-item.is_active").is(".gallery-item-0")&&a(".modaal-gallery-prev").hide(),a(".modaal-gallery-item.is_active").is(".gallery-item-"+o)&&a(".modaal-gallery-next").hide()},gallery_update:function(t){var o=this,e=a("#"+o.scope.id),i=e.find(".modaal-gallery-item"),l=i.length-1;if(0==l)return!1;var s=e.find(".modaal-gallery-prev"),n=e.find(".modaal-gallery-next"),d=250,r=0,c=0,m=e.find(".modaal-gallery-item."+o.private_options.active_class),p="next"==t?m.next(".modaal-gallery-item"):m.prev(".modaal-gallery-item");return o.options.before_image_change.call(o,m,p),"prev"==t&&e.find(".gallery-item-0").hasClass("is_active")?!1:"next"==t&&e.find(".gallery-item-"+l).hasClass("is_active")?!1:void m.stop().animate({opacity:0},d,function(){p.addClass("is_next").css({position:"absolute",display:"block",opacity:0});var t=a(document).width(),i=t>1140?280:50;r=e.find(".modaal-gallery-item.is_next").width(),c=e.find(".modaal-gallery-item.is_next").height();var _=e.find(".modaal-gallery-item.is_next img").prop("naturalWidth"),v=e.find(".modaal-gallery-item.is_next img").prop("naturalHeight");_>t-i?(r=t-i,e.find(".modaal-gallery-item.is_next").css({width:r}),e.find(".modaal-gallery-item.is_next img").css({width:r}),c=e.find(".modaal-gallery-item.is_next").find("img").height()):(r=_,c=v),e.find(".modaal-gallery-item-wrap").stop().animate({width:r,height:c},d,function(){m.removeClass(o.private_options.active_class+" "+o.options.gallery_active_class).removeAttr("style"),m.find("img").removeAttr("style"),p.addClass(o.private_options.active_class+" "+o.options.gallery_active_class).removeClass("is_next").css("position",""),p.stop().animate({opacity:1},d,function(){a(this).removeAttr("style").css({width:"100%"}),a(this).find("img").css("width","100%"),e.find(".modaal-gallery-item-wrap").removeAttr("style"),o.options.after_image_change.call(o,p)}),e.find(".modaal-gallery-item").removeAttr("tabindex"),e.find(".modaal-gallery-item."+o.private_options.active_class).attr("tabindex","0").focus(),e.find(".modaal-gallery-item."+o.private_options.active_class).is(".gallery-item-0")?s.stop().animate({opacity:0},150,function(){a(this).hide()}):s.stop().css({display:"block",opacity:s.css("opacity")}).animate({opacity:1},150),e.find(".modaal-gallery-item."+o.private_options.active_class).is(".gallery-item-"+l)?n.stop().animate({opacity:0},150,function(){a(this).hide()}):n.stop().css({display:"block",opacity:s.css("opacity")}).animate({opacity:1},150)})})},create_video:function(a){var t,o=this;t='<iframe src="'+a+'" class="modaal-video-frame" frameborder="0" allowfullscreen></iframe>',o.build_modal('<div class="modaal-video-container">'+t+"</div>")},create_iframe:function(a){var t,o=this;t=null!==o.options.width||void 0!==o.options.width||null!==o.options.height||void 0!==o.options.height?'<iframe src="'+a+'" class="modaal-iframe-elem" frameborder="0" allowfullscreen></iframe>':'<div class="modaal-content-container">Please specify a width and height for your iframe</div>',o.build_modal(t)},modaal_open:function(){var t=this,o=a("#"+t.scope.id),e=t.options.animation;"none"===e&&(o.removeClass("modaal-start_none"),t.options.after_open.call(t,o)),"fade"===e&&o.removeClass("modaal-start_fade"),"slide-down"===e&&o.removeClass("modaal-start_slide_down");var i=o;a(".modaal-wrapper *[tabindex=0]").removeAttr("tabindex"),i="image"==t.options.type?a("#"+t.scope.id).find(".modaal-gallery-item."+t.private_options.active_class):o.find(".modaal-iframe-elem").length?o.find(".modaal-iframe-elem"):o.find(".modaal-video-wrap").length?o.find(".modaal-video-wrap"):o.find(".modaal-focus"),i.attr("tabindex","0").focus(),"none"!==e&&setTimeout(function(){t.options.after_open.call(t,o)},t.options.after_callback_delay)},modaal_close:function(){var t=this,o=a("#"+t.scope.id);t.options.before_close.call(t,o),null!==t.xhr&&(t.xhr.abort(),t.xhr=null),"none"===t.options.animation&&o.addClass("modaal-start_none"),"fade"===t.options.animation&&o.addClass("modaal-start_fade"),"slide-down"===t.options.animation&&o.addClass("modaal-start_slide_down"),setTimeout(function(){"inline"==t.options.type&&a("#"+t.scope.id+" .modaal-content-container").contents().clone(!0,!0).appendTo(t.$elem.attr("href")),o.remove(),t.options.after_close.call(t),t.scope.is_open=!1},t.options.after_callback_delay),t.modaal_overlay("hide"),null!=t.lastFocus&&t.lastFocus.focus()},modaal_overlay:function(t){var o=this;"show"==t?(o.scope.is_open=!0,o.options.background_scroll||o.dom.addClass("modaal-noscroll"),o.dom.append('<div class="modaal-overlay" id="'+o.scope.id+'_overlay"></div>'),a("#"+o.scope.id+"_overlay").css("background",o.options.background).stop().animate({opacity:o.options.overlay_opacity},o.options.animation_speed,function(){o.modaal_open()})):"hide"==t&&(o.dom.removeClass("modaal-noscroll"),a("#"+o.scope.id+"_overlay").stop().animate({opacity:0},o.options.animation_speed,function(){a(this).remove()}))}};a.fn.modaal=function(t){return this.each(function(){var e=a(this).data("modaal");if(e){if("string"==typeof t)switch(t){case"close":e.modaal_close()}}else{var i=Object.create(o);i.init(t,this),a.data(this,"modaal",i)}})},a.fn.modaal.options={type:"inline",animation:"fade",animation_speed:300,after_callback_delay:350,is_locked:!1,hide_close:!1,background:"#000",overlay_opacity:"0.8",overlay_close:!0,accessible_title:"Dialog Window",start_open:!1,fullscreen:!1,custom_class:"",background_scroll:!1,should_open:!0,close_text:"Close",close_aria_label:"Close (Press escape to close)",width:null,height:null,before_open:function(){},after_open:function(){},before_close:function(){},after_close:function(){},source:function(a,t){return t},confirm_button_text:"Confirm",confirm_cancel_button_text:"Cancel",confirm_title:"Confirm Title",confirm_content:"<p>This is the default confirm dialog content. Replace me through the options</p>",confirm_callback:function(){},confirm_cancel_callback:function(){},gallery_active_class:"gallery_active_item",before_image_change:function(a,t){},after_image_change:function(a){},loading_content:t,loading_class:"is_loading",ajax_error_class:"modaal-error",ajax_success:function(){},instagram_id:null},a(function(){var t=a(".modaal");t.length&&t.each(function(){var t=a(this),o={},e=!1;t.attr("data-modaal-type")&&(e=!0,o.type=t.attr("data-modaal-type")),t.attr("data-modaal-animation")&&(e=!0,o.animation=t.attr("data-modaal-animation")),t.attr("data-modaal-animation-speed")&&(e=!0,o.animation_speed=t.attr("data-modaal-animation-speed")),t.attr("data-modaal-after-callback-delay")&&(e=!0,o.after_callback_delay=t.attr("data-modaal-after-callback-delay")),t.attr("data-modaal-is-locked")&&(e=!0,o.is_locked="true"===t.attr("data-modaal-is-locked")),t.attr("data-modaal-hide-close")&&(e=!0,o.hide_close="true"===t.attr("data-modaal-hide-close")),t.attr("data-modaal-background")&&(e=!0,o.background=t.attr("data-modaal-background")),t.attr("data-modaal-overlay-opacity")&&(e=!0,o.overlay_opacity=t.attr("data-modaal-overlay-opacity")),t.attr("data-modaal-overlay-close")&&(e=!0,o.overlay_close="false"!==t.attr("data-modaal-overlay-close")),t.attr("data-modaal-accessible-title")&&(e=!0,o.accessible_title=t.attr("data-modaal-accessible-title")),t.attr("data-modaal-start-open")&&(e=!0,o.start_open="true"===t.attr("data-modaal-start-open")),t.attr("data-modaal-fullscreen")&&(e=!0,o.fullscreen="true"===t.attr("data-modaal-fullscreen")),t.attr("data-modaal-custom-class")&&(e=!0,o.custom_class=t.attr("data-modaal-custom-class")),t.attr("data-modaal-close-text")&&(e=!0,o.close_text=t.attr("data-modaal-close-text")),t.attr("data-modaal-close-aria-label")&&(e=!0,o.close_aria_label=t.attr("data-modaal-close-aria-label")),t.attr("data-modaal-background-scroll")&&(e=!0,o.background_scroll="true"===t.attr("data-modaal-background-scroll")),t.attr("data-modaal-width")&&(e=!0,o.width=parseInt(t.attr("data-modaal-width"))),t.attr("data-modaal-height")&&(e=!0,o.height=parseInt(t.attr("data-modaal-height"))),t.attr("data-modaal-confirm-button-text")&&(e=!0,o.confirm_button_text=t.attr("data-modaal-confirm-button-text")),t.attr("data-modaal-confirm-cancel-button-text")&&(e=!0,o.confirm_cancel_button_text=t.attr("data-modaal-confirm-cancel-button-text")),t.attr("data-modaal-confirm-title")&&(e=!0,o.confirm_title=t.attr("data-modaal-confirm-title")),t.attr("data-modaal-confirm-content")&&(e=!0,o.confirm_content=t.attr("data-modaal-confirm-content")),t.attr("data-modaal-gallery-active-class")&&(e=!0,o.gallery_active_class=t.attr("data-modaal-gallery-active-class")),t.attr("data-modaal-loading-content")&&(e=!0,o.loading_content=t.attr("data-modaal-loading-content")),t.attr("data-modaal-loading-class")&&(e=!0,o.loading_class=t.attr("data-modaal-loading-class")),t.attr("data-modaal-ajax-error-class")&&(e=!0,o.ajax_error_class=t.attr("data-modaal-ajax-error-class")),t.attr("data-modaal-instagram-id")&&(e=!0,o.instagram_id=t.attr("data-modaal-instagram-id")),e&&t.modaal(o)})})}(jQuery,window,document);

(function($, window, objects){
	$('.modaal').not('.modaal-inline').modaal({
		height: 798
	});

	$('.modaal.modaal-inline').modaal({
		type: 'inline'
	});

	$('.modaal-fullscreen').modaal({
		fullscreen: true
	});

	$('.modaal-demo, .modaal-iframe').modaal({
		height: 798,
		type: 'iframe',
	});

	$('.modaal-ajax').modaal({
		height: 798,
		type: 'ajax'
	});

	$('.modaal-image-gallery, .modaal-image').modaal({
    type: 'image'
	});

}(window.jQuery, window, document));

jQuery.extend({
  getQueryParameters : function(str) {
    return (str || document.location.search).replace(/(^\?)/,'').split("&").map(function(n){return n = n.split("="),this[n[0]] = n[1],this}.bind({}))[0];
  }
});

$(document).ready(function(){
  var off_canvas_menu_open_class = "n-off-canvas-menu--open";
  $(".n-property-bar__menu-toggle-link").on("click", function(e){
    e.preventDefault();
    $(".n-off-canvas-menu__menu").toggleClass(off_canvas_menu_open_class);
    $('.n-off-canvas-menu__content-wrap').toggleClass(off_canvas_menu_open_class);
  });

  $(".n-off-canvas-menu__property-navigation-list-item--has-menu .n-off-canvas-menu__property-navigation-link").on("click", function(e){
    e.preventDefault();
    $(this).closest(".n-off-canvas-menu__property-navigation-list-item").toggleClass("n-off-canvas-menu__property-navigation-list-item--menu-open");
  });

  var show_menu_on_load = $.getQueryParameters()['show-off-canvas-menu-on-load'];
  if (show_menu_on_load !== undefined) {
    $(".n-off-canvas-menu").addClass(off_canvas_menu_open_class);
  }
});

$(document).ready(function(){
	$(".n-property-bar__narrow-search-toggle").on("click", function(e){
		e.preventDefault();
		var $property_bar = $(this).closest(".n-property-bar");
		var search_form_visible_class = "n-property-bar--narrow-search-form-visible";

		if ($property_bar.hasClass(search_form_visible_class)) {
			$property_bar.removeClass(search_form_visible_class);
		}
		else {
			$property_bar.addClass(search_form_visible_class);
		}
	});
});

jQuery.extend({
  getQueryParameters : function(str) {
	  return (str || document.location.search).replace(/(^\?)/,'').split("&").map(function(n){return n = n.split("="),this[n[0]] = n[1],this}.bind({}))[0];
  }
});

$(document).ready(function(){
	var show_more_menu_on_load = $.getQueryParameters()['show-more-menu'];
	var show_menus_on_load = $.getQueryParameters()['show-menu'];
	var menu_link_active_class = "n-property-navigation-bar__nav-link--is-active";
	var menu_active_class = "n-menu--is-active";
	detect_more_display();

	$(window).resize(function(){
		detect_more_display();
		$(".n-property-navigation-bar__nav-link--is-active").each(function(){
			set_menu_position($(this));
		});
	});

	// If anything on the screen is clicked that isn't a menu trigger, hide all the menus
	$(document).on('click', function(e) {
		if ($(window).width() > 768) {
			    if (!$(e.target).closest('.n-property-navigation-bar__nav-link, .n-property-navigation-bar__utils-link').length) {
					$('.n-property-navigation-bar__nav-link, .n-property-navigation-bar__utils-link').removeClass('n-property-navigation-bar__nav-link--is-active');
					$('.menu, .n-menu').removeClass('n-menu--is-active');
			    }
		}

	});

	$("*[data-menu-id]").on("click", function(e){
		e.preventDefault();
		if ($(this).hasClass(menu_link_active_class)) {
			hide_menu($(this));
		}
		else {
			show_menu($(this));
		}
	});

	function show_menu($trigger) {
		var $menu = $("#" + $trigger.attr("data-menu-id"));

		hide_all_menus();
		$trigger.addClass(menu_link_active_class);
		$menu.addClass(menu_active_class);
		set_menu_position($trigger);
	}

	function set_menu_position($trigger) {
		var $menu = $("#" + $trigger.attr("data-menu-id")),
				menu_left_position = $trigger.offset().left,
				available_width = $(window).width(),
				menu_right_position = available_width - ($trigger.offset().left + $trigger.outerWidth()),
				menu_width = $menu.width(),
				menu_right_edge = menu_left_position + menu_width,
				menu_narrow_class = "n-menu--is-narrow";

		if (menu_right_edge > available_width) {
			// If the right edge of the menu is gonna get cut off, position it right instead
			$menu.css({right: menu_right_position, left: 'auto'});
			// If that makes the left edge cut off, then position it left: 0
			if ($menu.offset().left < 0) {
				$menu.css({right: 'auto', left: 0});
			}
		}
		else {
			$menu.css({left: menu_left_position, right: 'auto'});
		}

		set_menu_widths();
	}

	function hide_menu($trigger) {
		$trigger.removeClass(menu_link_active_class);
		$("#" + $trigger.attr("data-menu-id")).removeClass(menu_active_class);
	}

	function hide_all_menus() {
		$("*[data-menu-id]").each(function(){
			hide_menu($(this));
		});
	}

	if (show_more_menu_on_load === 'true') {
		var $trigger = $(".n-property-navigation-bar__more-link");
		show_menu($trigger);
	}

	if (show_menus_on_load !== undefined) {
		var menus_to_show = show_menus_on_load.split(',');
		for (var i=0; i < menus_to_show.length; i++) {
			var menu = menus_to_show[i];
			var menu_id = 'n-property-navigation-bar__menu--' + menu;
			var $trigger = $("[data-menu-id='" + menu_id + "']");
			if ($trigger.length > 0) {
				show_menu($trigger);
			}
		}
	}
});

function detect_more_display() {
	var width_buffer = 10;
	var available_width = $(window).width() - width_buffer;
	var more_list_item_visible_class = "n-property-navigation-bar--more-item-visible";
	var list_item_truncated_class = "n-property-navigation-bar__nav-list-item--truncated";
	var menu_truncated_class = "n-menu--is-truncated";
	var visible_more_menu_list_item_class = "n-menu__list-item--is-visible"
	var $property_navigation_bar = $('.n-property-navigation-bar');
	var $util_nav = $('.n-property-navigation-bar__utils');
	if ($util_nav.length > 0) {
		available_width -= $util_nav.outerWidth();
	}

	var $more_button = $property_navigation_bar.find('.n-property-navigation-bar__more-item');
	var $first_level_menus = $property_navigation_bar.find(".n-property-navigation-bar__nav-list-item:not(.n-property-navigation-bar__more-item)");
	var more_link_width = $more_button.css("display", "inline-block").outerWidth();
	$more_button.attr("style", "");

	available_width -= more_link_width;
	var menu_width = 0;

	$first_level_menus.each(function(){
		var $link = $(this).find(".n-property-navigation-bar__nav-link");
		menu_width += $(this).outerWidth();
		if (menu_width > available_width) {
			// Display "More" List item
			$property_navigation_bar.addClass(more_list_item_visible_class);

			// Hide truncated List Items
			$(this).addClass(list_item_truncated_class);

			// Hide truncated List Item Menus
			if ($link[0].hasAttribute('data-menu-id')) {
				$("#" + $link.attr("data-menu-id")).addClass(menu_truncated_class);
			}

			// Make truncated list item visible in "More" menu
			$("#" + $link.attr("data-more-menu-id")).addClass(visible_more_menu_list_item_class);
		}
		else {
			$property_navigation_bar.removeClass(more_list_item_visible_class);
			$(this).removeClass(list_item_truncated_class);
			if ($link[0].hasAttribute('data-menu-id')) {
				$("#" + $link.attr("data-menu-id")).removeClass(menu_truncated_class);
			}
			$("#" + $link.attr("data-more-menu-id")).removeClass(visible_more_menu_list_item_class);
		}
	});
}

$(document).ready(function(){
  var item_active_class = "n-search-filter__list-item--active",
      panel_active_class = "n-search-filter__panel--active";

 $(".n-search-filter__link").on("click", function(e){
  e.preventDefault();
  var $list_item = $(this).closest(".n-search-filter__list-item"),
      $search_filter = $(this).closest(".n-search-filter");

  clear_all_selected_filters($(this));
  $search_filter.removeClass("n-search-filter--show-refine-panel");
  $search_filter.find("." + item_active_class).removeClass(item_active_class);
  $search_filter.find("." + panel_active_class).removeClass(panel_active_class);

  $list_item.addClass(item_active_class);

  if ($(this).attr("data-panel-id") !== undefined) {
    var $panel = $("#" + $(this).attr("data-panel-id"));
    $panel.addClass(panel_active_class);
    $search_filter.addClass("n-search-filter--has-subfilters")
  }
  else {
    $search_filter.removeClass("n-search-filter--has-subfilters")
  }

  var search_filter_text = $(this).clone().find("svg").remove().end().text().trim().substr(0, 5);
  if ($(".n-search-filter__dropdown-menu-dropdown .n-dropdown-menu__trigger:contains('" + search_filter_text + "')").length == 0) {
    $(".n-search-filter__dropdown-menu-dropdown .n-dropdown-menu__link:contains('" + search_filter_text + "')").trigger("click");
  }
 });

 $(".n-search-filter__dropdown-menu-dropdown .n-dropdown-menu__link").on("click", function(){
  var search_filter_text = $(this).clone().find("svg").remove().end().text().trim().substr(0, 5);
  $(".n-search-filter__link:contains('" + search_filter_text + "')").trigger("click");
  clear_all_selected_filters($(this));
 });

 $(".n-search-filter__panel-close-link").on("click", function(e){
  e.preventDefault();
  var $filter_wrap = $(this).closest(".n-search-filter");
  if ($filter_wrap.hasClass("n-search-filter--show-refine-panel")) {
    $filter_wrap.removeClass("n-search-filter--show-refine-panel");
  }
  else {
    $(this).closest("." + panel_active_class).removeClass(panel_active_class);
  }
 });

 $(".n-search-filter__refine-checkbox input").on("change", function(){
  add_to_selected_filters($(this));
 });

 $(".n-search-filter__refine-selected-filters").on("click", ".n-tag__delete-icon", function(){
  remove_filter_tag($(this).closest(".n-search-filter__refine-tag"));
 });

 $(".n-search-filter__refine-link").on("click", function(e){
  e.preventDefault();
  $(this).closest(".n-search-filter").addClass("n-search-filter--show-refine-panel");
 });

  set_filters_responsive_mode();

  $(window).on('resize', set_filters_responsive_mode);

  $(".n-search-filter").each(function(){
    if ($(this).find(".n-search-filter__panel--active").length > 0) {
      $(this).addClass("n-search-filter--has-subfilters");
    }
  });
});


function set_filters_responsive_mode() {
  var $filters = $(".n-search-filter");

  $filters.each(function(){
    var $filter = $(this),
        available_width = $filter.outerWidth(),
        single_row_filter_width = 0,
        filter_narrow_class = "n-search-filter--is-narrow",
        buffer = 40;

    $filter.find(".n-search-filter__link").each(function(){
      var link_width = $(this).css({width: 'auto'}).outerWidth() +  parseInt($(this).css('margin-right'));
      $(this).attr("style", "");
      single_row_filter_width += link_width;
    });

    if (single_row_filter_width + buffer > available_width) {
      $filter.addClass(filter_narrow_class);
    }
    else {
      $filter.removeClass(filter_narrow_class);
    }
  });
}

function clear_all_selected_filters($filter_link) {
  var $filter_wrap = $filter_link.closest(".n-search-filter"),
      $selected_filters = $filter_wrap.find(".n-search-filter__refine-tag").not(".n-search-filter__refine-tag-template");
      $filter_checkboxes = $filter_wrap.find(".n-form__checkbox-input");

  $selected_filters.remove();
  $filter_checkboxes.prop("checked", false);
}

function remove_filter_tag($filter_tag) {
  var $filter_wrap = $filter_tag.closest(".n-search-filter"),
      $filter_checkbox = $filter_wrap.find("#" + $filter_tag.attr("id").replace("n-search-filter__refine-tag-", ""));

  if (!$filter_tag.hasClass("n-search-filter__refine-tag-template")) {
    $filter_tag.remove();
    $filter_checkbox.prop("checked", false);
  }
}

function add_to_selected_filters($filter) {
  var $filter_wrap = $filter.closest(".n-search-filter"),
      $selected_filter_wrap = $filter_wrap.find(".n-search-filter__refine-selected-filters"),
      $tag_template = $filter_wrap.find(".n-search-filter__refine-tag-template"),
      $tag = $tag_template.clone().removeClass("n-search-filter__refine-tag-template"),
      checkbox_text = $filter.siblings(".n-form__checkbox-text").text(),
      tag_id = "n-search-filter__refine-tag-" + $filter.attr("id");

  if ($filter.is(":checked")) {
    $tag.find(".n-tag__text").text(checkbox_text);
    $tag.attr("id", tag_id);
    $selected_filter_wrap.append($tag);
  }
  else {
    $filter_wrap.find("#" + tag_id).remove();
  }
}

// More Menu Tabs ////////////////////////////////////////////////////////////////////////////////////////////////////
var namespace = "n-",
    more_menu_label_class = namespace + "tabs__label--more",
    more_menu_tabs_class = namespace + "tabs--more-menu",
    more_menu_visible_class = namespace + "tabs--more-menu-visible",
    hidden_tab_label_class = namespace + "tabs__label--hidden",
    visible_more_menu_item_class = namespace + "tabs__more-menu-list-item--visible",
    visible_more_menu_label_class = namespace + "tabs__more-menu-label--visible",
    selected_more_menu_label_class = namespace + "tabs__more-menu-label--selected",
    selected_more_menu_item_class = namespace + "tabs__more-menu-list-item--selected",
    all_tabs_hidden_class = namespace + "tabs--all-tabs-hidden";

function set_more_menu_selected_state($tabs) {
  var selected_id = $tabs.find("." + namespace + "tabs__radio-input:checked").attr("id"),
      $more_menu_label = $tabs.find("." + namespace + "tabs__label--more"),
      $more_menu = $tabs.find("." + namespace + "tabs__more-menu");

  $more_menu.find("." + selected_more_menu_item_class).removeClass(selected_more_menu_item_class);

  if ($more_menu.find("[for='" + selected_id + "']." + visible_more_menu_item_class).length > 0) {
    $more_menu_label.addClass(selected_more_menu_label_class);
    $more_menu.find("[for='" + selected_id + "']").addClass(selected_more_menu_item_class);
  }
  else {
    $more_menu_label.removeClass(selected_more_menu_label_class);
  }
}

function set_more_menu_tab_state($tabs) {
  var $more_menu_label = $tabs.find("." + namespace + "tabs__label--more"),
      more_menu_label_width = $more_menu_label.outerWidth() + parseInt($more_menu_label.css("margin-left")) + parseInt($more_menu_label.css("margin-right")),
      more_menu_label_height = $more_menu_label.outerHeight() + parseInt($more_menu_label.css("margin-top")) + parseInt($more_menu_label.css("margin-bottom")),
      $content_tab_labels = $tabs.find("." + namespace + "tabs__label:not(." + namespace + "tabs__label--more)"),
      tabs_width = $tabs.outerWidth(),
      margin_of_error = 16,
      available_width = tabs_width - more_menu_label_width - margin_of_error,
      width_count = 0,
      $more_menu = $tabs.find("." + namespace + "tabs__more-menu"),
      more_menu_label_visible = false,
      content_tabs_count = $content_tab_labels.length,
      content_tabs_hidden = 0,
      $more_menu_label_text_wrap = $more_menu_label.find("." + namespace + "tabs__label-text--more"),
      more_menu_label_default_text = $more_menu_label_text_wrap.text();

  if ($tabs.attr("data-more-menu-label-width") == undefined) {
    $tabs.attr("data-more-menu-label-width", more_menu_label_width);
  }
  else {
    more_menu_label_width = $tabs.attr("data-more-menu-label-width");
    available_width = tabs_width - more_menu_label_width - margin_of_error;
  }

  if ($tabs.attr("data-more-menu-default-label") == undefined) {
    $tabs.attr("data-more-menu-default-label", more_menu_label_default_text);
  }
  else {
    more_menu_label_default_text = $tabs.attr("data-more-menu-default-label");
  }

  $content_tab_labels.each(function(){
    var tab_id = $(this).attr("for");
    width_count += $(this).outerWidth() + parseInt($(this).css("margin-left")) + parseInt($(this).css("margin-right"));
    if (width_count > available_width) {
      $(this).addClass(hidden_tab_label_class);
      $more_menu.find("[for='" + tab_id + "']").addClass(visible_more_menu_item_class);
      more_menu_label_visible = true;
      content_tabs_hidden++;
    }
    else {
      $(this).removeClass(hidden_tab_label_class);
      $more_menu.find("[for='" + tab_id + "']").removeClass(visible_more_menu_item_class);
    }
  });

  if (more_menu_label_visible) {
    $tabs.addClass(visible_more_menu_label_class);
  }
  else {
    $tabs.removeClass(visible_more_menu_label_class);
  }

  if (content_tabs_hidden == content_tabs_count) {
    if (!$tabs.hasClass(all_tabs_hidden_class)) {
      var existing_top_padding = parseInt($tabs.css("padding-top"));
          new_top_padding = existing_top_padding + more_menu_label_height,
          active_tab_id = $tabs.find("." + namespace + "tabs__radio-input:checked").attr("id"),
          active_tab_text = $more_menu.find("[for='" + active_tab_id + "']").text();
      $tabs.addClass(all_tabs_hidden_class);
      // $tabs.css("padding-top", new_top_padding + "px");
      $more_menu_label_text_wrap.text(active_tab_text);
    }
  }
  else {
    // $tabs.css("padding-top", "");
    $tabs.removeClass(all_tabs_hidden_class);
    $more_menu_label_text_wrap.text(more_menu_label_default_text);
  }

  set_more_menu_selected_state($tabs);
}

function set_more_menu_state_for_all_more_menu_tabs() {
  $("." + more_menu_tabs_class).each(function(){
    set_more_menu_tab_state($(this));
  });
}

$(document).ready(function(){
  // Toggle more menu display
  $("." + more_menu_label_class).on("click", function(e){
    var $tabs = $(this).closest("." + namespace + "tabs");
    $tabs.toggleClass(more_menu_visible_class);
  });

  $("." + namespace + "tabs__more-menu-list-item").on("click", function(e){
    if ($(this).closest("." + all_tabs_hidden_class ).length > 0) {
      var text = $(this).text(),
          $more_label_text_wrap = $(this).closest("." + all_tabs_hidden_class).find("." + namespace + "tabs__label-text--more");

      $more_label_text_wrap.text(text);
    }
  });

  $("body").on("click", function(e){
    var $target = $(e.target);
    if (!$target.hasClass(more_menu_label_class) && $target.closest("." + more_menu_label_class).length == 0) {
      $("." + more_menu_visible_class).removeClass(more_menu_visible_class);
    }
  });

  $("." + namespace + "tabs__radio-input").on("change", function(){
    var $tabs = $(this).closest("." + namespace + "tabs");
    set_more_menu_selected_state($tabs);
  });

  // Update more menu tabs on load
  set_more_menu_state_for_all_more_menu_tabs();

  setTimeout(function(){
    // Run this again after the page loads. Kind of hacky, but ensures more menu state is correct
    set_more_menu_state_for_all_more_menu_tabs();
  }, 5);

  // Update more menu tabs on window resize
  $(window).on('resize', function(){
    set_more_menu_state_for_all_more_menu_tabs();
  });
});

jQuery.extend({
  getQueryParameters : function(str) {
	  return (str || document.location.search).replace(/(^\?)/,'').split("&").map(function(n){return n = n.split("="),this[n[0]] = n[1],this}.bind({}))[0];
  }
});

$(document).ready(function(){
	var show_profile_menu_on_load = $.getQueryParameters()['show-profile-menu'];
	var $profile_menu_link = $(".n-top-hat__profile-link");
	var menu_link_active_class = "n-top-hat__profile-link--is-active";

	function show_profile_menu() {
		$profile_menu_link.addClass(menu_link_active_class);
	}

	function hide_profile_menu() {
		$profile_menu_link.removeClass(menu_link_active_class);
	}

	$profile_menu_link.on("click", function(e){
		e.preventDefault();

		if ($(this).hasClass(menu_link_active_class)) {
			hide_profile_menu();
		}
		else {
			show_profile_menu();
		}
	});

	if (show_profile_menu_on_load === 'true') {
		show_profile_menu();
	}
});
