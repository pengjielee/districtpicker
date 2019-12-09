(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["districtpicker"] = factory();
	else
		root["districtpicker"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "0cfb":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var fails = __webpack_require__("d039");
var createElement = __webpack_require__("cc12");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "24fb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "3a8e":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("24fb")(false);
// Module
exports.push([module.i, ".district-picker{font-size:16px}.district-picker ul{list-style-type:none;margin:0;padding:0}.district-picker .district-header{font-weight:700;border-bottom:1px solid #ddd;padding:10px 15px}.district-picker .district-header .tabs-1{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;cursor:pointer}.district-picker .district-header .tabs-2,.district-picker .district-header .tabs-3{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;cursor:pointer}.district-picker .district-body{height:400px;overflow:scroll;-webkit-overflow-scrolling:touch}.district-picker .district-body .list .item{padding:10px 15px;border-bottom:1px solid #ddd;cursor:pointer}.district-picker .district-body .list .selected{color:red}", ""]);


/***/ }),

/***/ "499e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesClient.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addStylesClient; });
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "825a":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),

/***/ "83ab":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

// Thank's IE8 for his funny defineProperty
module.exports = !fails(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "861d":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "9bf2":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var IE8_DOM_DEFINE = __webpack_require__("0cfb");
var anObject = __webpack_require__("825a");
var toPrimitive = __webpack_require__("c04e");

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "a526":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("3a8e");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("33571df6", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "b0c0":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var defineProperty = __webpack_require__("9bf2").f;

var FunctionPrototype = Function.prototype;
var FunctionPrototypeToString = FunctionPrototype.toString;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// Function instances `.name` property
// https://tc39.github.io/ecma262/#sec-function-instances-name
if (DESCRIPTORS && !(NAME in FunctionPrototype)) {
  defineProperty(FunctionPrototype, NAME, {
    configurable: true,
    get: function () {
      try {
        return FunctionPrototypeToString.call(this).match(nameRE)[1];
      } catch (error) {
        return '';
      }
    }
  });
}


/***/ }),

/***/ "c04e":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");

// `ToPrimitive` abstract operation
// https://tc39.github.io/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "c8ba":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "cc12":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var isObject = __webpack_require__("861d");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "d039":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "da84":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line no-undef
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func
  Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "e587":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DistrictPicker_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a526");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DistrictPicker_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DistrictPicker_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DistrictPicker_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "f6fd":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("f6fd")
  }

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7c15d1fa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/DistrictPicker.vue?vue&type=template&id=24091110&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"district-picker"},[_c('div',{staticClass:"district-header"},[_c('div',{class:['tabs-' + _vm.tab]},[_c('span',{on:{"click":_vm.handleTabProvince}},[_vm._v(_vm._s(_vm.currentProvinceName))]),(_vm.showCityTab && !_vm.onlyProvince)?_c('span',{on:{"click":_vm.handleTabCity}},[_vm._v(_vm._s(_vm.currentCityName))]):_vm._e(),(_vm.showAreaTab && !_vm.onlyProvince && !_vm.hideArea)?_c('span',[_vm._v(_vm._s(_vm.currentAreaName))]):_vm._e()])]),_c('div',{staticClass:"district-body"},[(_vm.onlyProvince)?[(_vm.tab === 1)?_c('ul',{staticClass:"list"},_vm._l((_vm.provinces),function(province){return _c('li',{key:province.id,class:[
            'item',
            {
              'selected': province.name === _vm.currentProvinceName ? true : false
            }
          ],on:{"click":function($event){return _vm.handleChooseProvince(province)}}},[_vm._v(" "+_vm._s(province.name)+" ")])}),0):_vm._e()]:[(_vm.tab === 1)?_c('ul',{staticClass:"list"},_vm._l((_vm.provinces),function(province){return _c('li',{key:province.id,class:[
            'item',
            {
              'selected': province.name === _vm.currentProvinceName ? true : false
            }
          ],on:{"click":function($event){return _vm.handleChooseProvince(province)}}},[_vm._v(" "+_vm._s(province.name)+" ")])}),0):_vm._e(),(_vm.tab === 2)?_c('ul',{staticClass:"list"},_vm._l((_vm.cities),function(city){return _c('li',{key:city.id,class:[
            'item',
            {
              'selected': city.name === _vm.currentCityName ? true : false
            }
          ],on:{"click":function($event){return _vm.handleChooseCity(city)}}},[_vm._v(" "+_vm._s(city.name)+" ")])}),0):_vm._e(),(_vm.tab === 3 && !_vm.hideArea)?_c('ul',{staticClass:"list"},_vm._l((_vm.areas),function(area){return _c('li',{key:area.id,class:[
            'item',
            {
              'selected': area.name === _vm.currentAreaName ? true : false
            }
          ],on:{"click":function($event){return _vm.handleChooseArea(area)}}},[_vm._v(" "+_vm._s(area.name)+" ")])}),0):_vm._e()]],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/DistrictPicker.vue?vue&type=template&id=24091110&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__("b0c0");

// CONCATENATED MODULE: ./src/districts.js
/* harmony default export */ var districts = ({
  "0": {
    "1": "北京",
    "2": "天津",
    "3": "河北",
    "4": "山西",
    "5": "内蒙古",
    "6": "辽宁",
    "7": "吉林",
    "8": "黑龙江",
    "9": "上海",
    "10": "江苏",
    "11": "浙江",
    "12": "安徽",
    "13": "福建",
    "14": "江西",
    "15": "山东",
    "16": "河南",
    "17": "湖北",
    "18": "湖南",
    "19": "广东",
    "20": "广西",
    "21": "海南",
    "22": "重庆",
    "23": "四川",
    "24": "贵州",
    "25": "云南",
    "26": "西藏",
    "27": "陕西",
    "28": "甘肃",
    "29": "青海",
    "30": "宁夏",
    "31": "新疆"
  },
  "1": {
    "32": "市辖区"
  },
  "2": {
    "49": "市辖区"
  },
  "3": {
    "66": "石家庄市",
    "92": "唐山市",
    "112": "秦皇岛市",
    "123": "邯郸市",
    "145": "邢台市",
    "167": "保定市",
    "195": "张家口市",
    "216": "承德市",
    "230": "沧州市",
    "251": "廊坊市",
    "264": "衡水市"
  },
  "4": {
    "279": "太原市",
    "292": "大同市",
    "305": "阳泉市",
    "312": "长治市",
    "327": "晋城市",
    "335": "朔州市",
    "344": "晋中市",
    "357": "运城市",
    "372": "忻州市",
    "389": "临汾市",
    "408": "吕梁市"
  },
  "5": {
    "423": "呼和浩特市",
    "436": "包头市",
    "448": "乌海市",
    "453": "赤峰市",
    "467": "通辽市",
    "478": "鄂尔多斯市",
    "489": "呼伦贝尔市",
    "505": "巴彦淖尔市",
    "514": "乌兰察布市",
    "527": "兴安盟",
    "534": "锡林郭勒盟",
    "548": "阿拉善盟"
  },
  "6": {
    "553": "沈阳市",
    "568": "大连市",
    "580": "鞍山市",
    "589": "抚顺市",
    "598": "本溪市",
    "606": "丹东市",
    "614": "锦州市",
    "623": "营口市",
    "631": "阜新市",
    "640": "辽阳市",
    "649": "盘锦市",
    "655": "铁岭市",
    "664": "朝阳市",
    "673": "葫芦岛市"
  },
  "7": {
    "681": "长春市",
    "697": "吉林市",
    "711": "四平市",
    "719": "辽源市",
    "725": "通化市",
    "734": "白山市",
    "742": "松原市",
    "750": "白城市",
    "758": "延边朝鲜族自治州"
  },
  "8": {
    "767": "哈尔滨市",
    "787": "齐齐哈尔市",
    "805": "鸡西市",
    "816": "鹤岗市",
    "826": "双鸭山市",
    "836": "大庆市",
    "848": "伊春市",
    "867": "佳木斯市",
    "879": "七台河市",
    "885": "牡丹江市",
    "898": "黑河市",
    "906": "绥化市",
    "918": "大兴安岭地区"
  },
  "9": {
    "926": "市辖区"
  },
  "10": {
    "943": "南京市",
    "956": "无锡市",
    "965": "徐州市",
    "978": "常州市",
    "986": "苏州市",
    "998": "南通市",
    "1009": "连云港市",
    "1019": "淮安市",
    "1029": "盐城市",
    "1041": "扬州市",
    "1050": "镇江市",
    "1059": "泰州市",
    "1068": "宿迁市"
  },
  "11": {
    "1076": "杭州市",
    "1091": "宁波市",
    "1103": "温州市",
    "1117": "嘉兴市",
    "1126": "湖州市",
    "1133": "绍兴市",
    "1141": "金华市",
    "1152": "衢州市",
    "1160": "舟山市",
    "1166": "台州市",
    "1177": "丽水市"
  },
  "12": {
    "1188": "合肥市",
    "1202": "芜湖市",
    "1214": "蚌埠市",
    "1225": "淮南市",
    "1234": "马鞍山市",
    "1242": "淮北市",
    "1248": "铜陵市",
    "1254": "安庆市",
    "1267": "黄山市",
    "1276": "滁州市",
    "1288": "阜阳市",
    "1300": "宿州市",
    "1309": "六安市",
    "1318": "亳州市",
    "1324": "池州市",
    "1330": "宣城市"
  },
  "13": {
    "1340": "福州市",
    "1355": "厦门市",
    "1363": "莆田市",
    "1370": "三明市",
    "1384": "泉州市",
    "1398": "漳州市",
    "1411": "南平市",
    "1423": "龙岩市",
    "1432": "宁德市"
  },
  "14": {
    "1443": "南昌市",
    "1454": "景德镇市",
    "1460": "萍乡市",
    "1467": "九江市",
    "1482": "新余市",
    "1486": "鹰潭市",
    "1491": "赣州市",
    "1511": "吉安市",
    "1526": "宜春市",
    "1538": "抚州市",
    "1551": "上饶市"
  },
  "15": {
    "1565": "济南市",
    "1578": "青岛市",
    "1591": "淄博市",
    "1601": "枣庄市",
    "1609": "东营市",
    "1618": "烟台市",
    "1634": "潍坊市",
    "1649": "济宁市",
    "1663": "泰安市",
    "1671": "威海市",
    "1680": "日照市",
    "1687": "莱芜市",
    "1691": "临沂市",
    "1708": "德州市",
    "1723": "聊城市",
    "1733": "滨州市",
    "1742": "菏泽市"
  },
  "16": {
    "1755": "郑州市",
    "1772": "开封市",
    "1783": "洛阳市",
    "1801": "平顶山市",
    "1815": "安阳市",
    "1827": "鹤壁市",
    "1835": "新乡市",
    "1852": "焦作市",
    "1865": "濮阳市",
    "1875": "许昌市",
    "1884": "漯河市",
    "1892": "三门峡市",
    "1901": "南阳市",
    "1918": "商丘市",
    "1931": "信阳市",
    "1944": "周口市",
    "1957": "驻马店市",
    "1970": "省直辖县级行政区划"
  },
  "17": {
    "1972": "武汉市",
    "1987": "黄石市",
    "1995": "十堰市",
    "2005": "宜昌市",
    "2020": "襄阳市",
    "2031": "鄂州市",
    "2036": "荆门市",
    "2043": "孝感市",
    "2052": "荆州市",
    "2063": "黄冈市",
    "2076": "咸宁市",
    "2084": "随州市",
    "2089": "恩施土家族苗族自治州",
    "2098": "省直辖县级行政区划"
  },
  "18": {
    "2103": "长沙市",
    "2114": "株洲市",
    "2126": "湘潭市",
    "2136": "衡阳市",
    "2153": "邵阳市",
    "2167": "岳阳市",
    "2179": "常德市",
    "2191": "张家界市",
    "2197": "益阳市",
    "2207": "郴州市",
    "2220": "永州市",
    "2236": "怀化市",
    "2251": "娄底市",
    "2258": "湘西土家族苗族自治州"
  },
  "19": {
    "2269": "广州市",
    "2282": "韶关市",
    "2294": "深圳市",
    "2305": "珠海市",
    "2310": "汕头市",
    "2319": "佛山市",
    "2326": "江门市",
    "2335": "湛江市",
    "2346": "茂名市",
    "2353": "肇庆市",
    "2363": "惠州市",
    "2370": "梅州市",
    "2380": "汕尾市",
    "2386": "河源市",
    "2394": "阳江市",
    "2400": "清远市",
    "2410": "东莞市",
    "2446": "中山市",
    "2471": "潮州市",
    "2476": "揭阳市",
    "2483": "云浮市"
  },
  "20": {
    "2490": "南宁市",
    "2504": "柳州市",
    "2516": "桂林市",
    "2535": "梧州市",
    "2544": "北海市",
    "2550": "防城港市",
    "2556": "钦州市",
    "2562": "贵港市",
    "2569": "玉林市",
    "2578": "百色市",
    "2592": "贺州市",
    "2599": "河池市",
    "2612": "来宾市",
    "2620": "崇左市"
  },
  "21": {
    "2629": "海口市",
    "2635": "三亚市",
    "2641": "三沙市",
    "2645": "儋州市",
    "2664": "省直辖县级行政区划"
  },
  "22": {
    "2680": "市辖区",
    "2707": "县"
  },
  "23": {
    "2720": "成都市",
    "2742": "自贡市",
    "2750": "攀枝花市",
    "2757": "泸州市",
    "2766": "德阳市",
    "2774": "绵阳市",
    "2785": "广元市",
    "2794": "遂宁市",
    "2801": "内江市",
    "2809": "乐山市",
    "2822": "南充市",
    "2833": "眉山市",
    "2841": "宜宾市",
    "2853": "广安市",
    "2861": "达州市",
    "2871": "雅安市",
    "2881": "巴中市",
    "2889": "资阳市",
    "2894": "阿坝藏族羌族自治州",
    "2908": "甘孜藏族自治州",
    "2927": "凉山彝族自治州"
  },
  "24": {
    "2945": "贵阳市",
    "2957": "六盘水市",
    "2962": "遵义市",
    "2978": "安顺市",
    "2986": "毕节市",
    "2996": "铜仁市",
    "3008": "黔西南布依族苗族自治州",
    "3017": "黔东南苗族侗族自治州",
    "3034": "黔南布依族苗族自治州"
  },
  "25": {
    "3047": "昆明市",
    "3063": "曲靖市",
    "3074": "玉溪市",
    "3085": "保山市",
    "3092": "昭通市",
    "3105": "丽江市",
    "3112": "普洱市",
    "3124": "临沧市",
    "3134": "楚雄彝族自治州",
    "3145": "红河哈尼族彝族自治州",
    "3159": "文山壮族苗族自治州",
    "3168": "西双版纳傣族自治州",
    "3172": "大理白族自治州",
    "3185": "德宏傣族景颇族自治州",
    "3191": "怒江傈僳族自治州",
    "3196": "迪庆藏族自治州"
  },
  "26": {
    "3200": "拉萨市",
    "3214": "日喀则市",
    "3233": "昌都市",
    "3245": "林芝市",
    "3253": "山南市",
    "3267": "那曲市",
    "3279": "阿里地区"
  },
  "27": {
    "3287": "西安市",
    "3302": "铜川市",
    "3308": "宝鸡市",
    "3322": "咸阳市",
    "3338": "渭南市",
    "3351": "延安市",
    "3366": "汉中市",
    "3379": "榆林市",
    "3393": "安康市",
    "3405": "商洛市"
  },
  "28": {
    "3414": "兰州市",
    "3425": "嘉峪关市",
    "3427": "金昌市",
    "3431": "白银市",
    "3438": "天水市",
    "3447": "武威市",
    "3453": "张掖市",
    "3461": "平凉市",
    "3470": "酒泉市",
    "3479": "庆阳市",
    "3489": "定西市",
    "3498": "陇南市",
    "3509": "临夏回族自治州",
    "3518": "甘南藏族自治州"
  },
  "29": {
    "3527": "西宁市",
    "3536": "海东市",
    "3543": "海北藏族自治州",
    "3548": "黄南藏族自治州",
    "3553": "海南藏族自治州",
    "3559": "果洛藏族自治州",
    "3566": "玉树藏族自治州",
    "3573": "海西蒙古族藏族自治州"
  },
  "30": {
    "3581": "银川市",
    "3589": "石嘴山市",
    "3594": "吴忠市",
    "3601": "固原市",
    "3608": "中卫市"
  },
  "31": {
    "3613": "乌鲁木齐市",
    "3625": "克拉玛依市",
    "3631": "吐鲁番市",
    "3635": "哈密市",
    "3639": "昌吉回族自治州",
    "3647": "博尔塔拉蒙古自治州",
    "3652": "巴音郭楞蒙古自治州",
    "3663": "阿克苏地区",
    "3673": "克孜勒苏柯尔克孜自治州",
    "3678": "喀什地区",
    "3691": "和田地区",
    "3700": "伊犁哈萨克自治州",
    "3712": "塔城地区",
    "3720": "阿勒泰地区",
    "3728": "自治区直辖县级行政区划"
  },
  "32": {
    "33": "东城区",
    "34": "西城区",
    "35": "朝阳区",
    "36": "丰台区",
    "37": "石景山区",
    "38": "海淀区",
    "39": "门头沟区",
    "40": "房山区",
    "41": "通州区",
    "42": "顺义区",
    "43": "昌平区",
    "44": "大兴区",
    "45": "怀柔区",
    "46": "平谷区",
    "47": "密云区",
    "48": "延庆区"
  },
  "49": {
    "50": "和平区",
    "51": "河东区",
    "52": "河西区",
    "53": "南开区",
    "54": "河北区",
    "55": "红桥区",
    "56": "东丽区",
    "57": "西青区",
    "58": "津南区",
    "59": "北辰区",
    "60": "武清区",
    "61": "宝坻区",
    "62": "滨海新区",
    "63": "宁河区",
    "64": "静海区",
    "65": "蓟州区"
  },
  "66": {
    "67": "市辖区",
    "68": "长安区",
    "69": "桥西区",
    "70": "新华区",
    "71": "井陉矿区",
    "72": "裕华区",
    "73": "藁城区",
    "74": "鹿泉区",
    "75": "栾城区",
    "76": "井陉县",
    "77": "正定县",
    "78": "行唐县",
    "79": "灵寿县",
    "80": "高邑县",
    "81": "深泽县",
    "82": "赞皇县",
    "83": "无极县",
    "84": "平山县",
    "85": "元氏县",
    "86": "赵县",
    "87": "石家庄高新技术产业开发区",
    "88": "石家庄循环化工园区",
    "89": "辛集市",
    "90": "晋州市",
    "91": "新乐市"
  },
  "92": {
    "93": "市辖区",
    "94": "路南区",
    "95": "路北区",
    "96": "古冶区",
    "97": "开平区",
    "98": "丰南区",
    "99": "丰润区",
    "100": "曹妃甸区",
    "101": "滦南县",
    "102": "乐亭县",
    "103": "迁西县",
    "104": "玉田县",
    "105": "唐山市芦台经济技术开发区",
    "106": "唐山市汉沽管理区",
    "107": "唐山高新技术产业开发区",
    "108": "河北唐山海港经济开发区",
    "109": "遵化市",
    "110": "迁安市",
    "111": "滦州市"
  },
  "112": {
    "113": "市辖区",
    "114": "海港区",
    "115": "山海关区",
    "116": "北戴河区",
    "117": "抚宁区",
    "118": "青龙满族自治县",
    "119": "昌黎县",
    "120": "卢龙县",
    "121": "秦皇岛市经济技术开发区",
    "122": "北戴河新区"
  },
  "123": {
    "124": "市辖区",
    "125": "邯山区",
    "126": "丛台区",
    "127": "复兴区",
    "128": "峰峰矿区",
    "129": "肥乡区",
    "130": "永年区",
    "131": "临漳县",
    "132": "成安县",
    "133": "大名县",
    "134": "涉县",
    "135": "磁县",
    "136": "邱县",
    "137": "鸡泽县",
    "138": "广平县",
    "139": "馆陶县",
    "140": "魏县",
    "141": "曲周县",
    "142": "邯郸经济技术开发区",
    "143": "邯郸冀南新区",
    "144": "武安市"
  },
  "145": {
    "146": "市辖区",
    "147": "桥东区",
    "148": "桥西区",
    "149": "邢台县",
    "150": "临城县",
    "151": "内丘县",
    "152": "柏乡县",
    "153": "隆尧县",
    "154": "任县",
    "155": "南和县",
    "156": "宁晋县",
    "157": "巨鹿县",
    "158": "新河县",
    "159": "广宗县",
    "160": "平乡县",
    "161": "威县",
    "162": "清河县",
    "163": "临西县",
    "164": "河北邢台经济开发区",
    "165": "南宫市",
    "166": "沙河市"
  },
  "167": {
    "168": "市辖区",
    "169": "竞秀区",
    "170": "莲池区",
    "171": "满城区",
    "172": "清苑区",
    "173": "徐水区",
    "174": "涞水县",
    "175": "阜平县",
    "176": "定兴县",
    "177": "唐县",
    "178": "高阳县",
    "179": "容城县",
    "180": "涞源县",
    "181": "望都县",
    "182": "安新县",
    "183": "易县",
    "184": "曲阳县",
    "185": "蠡县",
    "186": "顺平县",
    "187": "博野县",
    "188": "雄县",
    "189": "保定高新技术产业开发区",
    "190": "保定白沟新城",
    "191": "涿州市",
    "192": "定州市",
    "193": "安国市",
    "194": "高碑店市"
  },
  "195": {
    "196": "市辖区",
    "197": "桥东区",
    "198": "桥西区",
    "199": "宣化区",
    "200": "下花园区",
    "201": "万全区",
    "202": "崇礼区",
    "203": "张北县",
    "204": "康保县",
    "205": "沽源县",
    "206": "尚义县",
    "207": "蔚县",
    "208": "阳原县",
    "209": "怀安县",
    "210": "怀来县",
    "211": "涿鹿县",
    "212": "赤城县",
    "213": "张家口市高新技术产业开发区",
    "214": "张家口市察北管理区",
    "215": "张家口市塞北管理区"
  },
  "216": {
    "217": "市辖区",
    "218": "双桥区",
    "219": "双滦区",
    "220": "鹰手营子矿区",
    "221": "承德县",
    "222": "兴隆县",
    "223": "滦平县",
    "224": "隆化县",
    "225": "丰宁满族自治县",
    "226": "宽城满族自治县",
    "227": "围场满族蒙古族自治县",
    "228": "承德高新技术产业开发区",
    "229": "平泉市"
  },
  "230": {
    "231": "市辖区",
    "232": "新华区",
    "233": "运河区",
    "234": "沧县",
    "235": "青县",
    "236": "东光县",
    "237": "海兴县",
    "238": "盐山县",
    "239": "肃宁县",
    "240": "南皮县",
    "241": "吴桥县",
    "242": "献县",
    "243": "孟村回族自治县",
    "244": "河北沧州经济开发区",
    "245": "沧州高新技术产业开发区",
    "246": "沧州渤海新区",
    "247": "泊头市",
    "248": "任丘市",
    "249": "黄骅市",
    "250": "河间市"
  },
  "251": {
    "252": "市辖区",
    "253": "安次区",
    "254": "广阳区",
    "255": "固安县",
    "256": "永清县",
    "257": "香河县",
    "258": "大城县",
    "259": "文安县",
    "260": "大厂回族自治县",
    "261": "廊坊经济技术开发区",
    "262": "霸州市",
    "263": "三河市"
  },
  "264": {
    "265": "市辖区",
    "266": "桃城区",
    "267": "冀州区",
    "268": "枣强县",
    "269": "武邑县",
    "270": "武强县",
    "271": "饶阳县",
    "272": "安平县",
    "273": "故城县",
    "274": "景县",
    "275": "阜城县",
    "276": "河北衡水高新技术产业开发区",
    "277": "衡水滨湖新区",
    "278": "深州市"
  },
  "279": {
    "280": "市辖区",
    "281": "小店区",
    "282": "迎泽区",
    "283": "杏花岭区",
    "284": "尖草坪区",
    "285": "万柏林区",
    "286": "晋源区",
    "287": "清徐县",
    "288": "阳曲县",
    "289": "娄烦县",
    "290": "山西转型综合改革示范区",
    "291": "古交市"
  },
  "292": {
    "293": "市辖区",
    "294": "新荣区",
    "295": "平城区",
    "296": "云冈区",
    "297": "云州区",
    "298": "阳高县",
    "299": "天镇县",
    "300": "广灵县",
    "301": "灵丘县",
    "302": "浑源县",
    "303": "左云县",
    "304": "山西大同经济开发区"
  },
  "305": {
    "306": "市辖区",
    "307": "城区",
    "308": "矿区",
    "309": "郊区",
    "310": "平定县",
    "311": "盂县"
  },
  "312": {
    "313": "市辖区",
    "314": "潞州区",
    "315": "上党区",
    "316": "屯留区",
    "317": "潞城区",
    "318": "襄垣县",
    "319": "平顺县",
    "320": "黎城县",
    "321": "壶关县",
    "322": "长子县",
    "323": "武乡县",
    "324": "沁县",
    "325": "沁源县",
    "326": "山西长治高新技术产业园区"
  },
  "327": {
    "328": "市辖区",
    "329": "城区",
    "330": "沁水县",
    "331": "阳城县",
    "332": "陵川县",
    "333": "泽州县",
    "334": "高平市"
  },
  "335": {
    "336": "市辖区",
    "337": "朔城区",
    "338": "平鲁区",
    "339": "山阴县",
    "340": "应县",
    "341": "右玉县",
    "342": "山西朔州经济开发区",
    "343": "怀仁市"
  },
  "344": {
    "345": "市辖区",
    "346": "榆次区",
    "347": "榆社县",
    "348": "左权县",
    "349": "和顺县",
    "350": "昔阳县",
    "351": "寿阳县",
    "352": "太谷县",
    "353": "祁县",
    "354": "平遥县",
    "355": "灵石县",
    "356": "介休市"
  },
  "357": {
    "358": "市辖区",
    "359": "盐湖区",
    "360": "临猗县",
    "361": "万荣县",
    "362": "闻喜县",
    "363": "稷山县",
    "364": "新绛县",
    "365": "绛县",
    "366": "垣曲县",
    "367": "夏县",
    "368": "平陆县",
    "369": "芮城县",
    "370": "永济市",
    "371": "河津市"
  },
  "372": {
    "373": "市辖区",
    "374": "忻府区",
    "375": "定襄县",
    "376": "五台县",
    "377": "代县",
    "378": "繁峙县",
    "379": "宁武县",
    "380": "静乐县",
    "381": "神池县",
    "382": "五寨县",
    "383": "岢岚县",
    "384": "河曲县",
    "385": "保德县",
    "386": "偏关县",
    "387": "五台山风景名胜区",
    "388": "原平市"
  },
  "389": {
    "390": "市辖区",
    "391": "尧都区",
    "392": "曲沃县",
    "393": "翼城县",
    "394": "襄汾县",
    "395": "洪洞县",
    "396": "古县",
    "397": "安泽县",
    "398": "浮山县",
    "399": "吉县",
    "400": "乡宁县",
    "401": "大宁县",
    "402": "隰县",
    "403": "永和县",
    "404": "蒲县",
    "405": "汾西县",
    "406": "侯马市",
    "407": "霍州市"
  },
  "408": {
    "409": "市辖区",
    "410": "离石区",
    "411": "文水县",
    "412": "交城县",
    "413": "兴县",
    "414": "临县",
    "415": "柳林县",
    "416": "石楼县",
    "417": "岚县",
    "418": "方山县",
    "419": "中阳县",
    "420": "交口县",
    "421": "孝义市",
    "422": "汾阳市"
  },
  "423": {
    "424": "市辖区",
    "425": "新城区",
    "426": "回民区",
    "427": "玉泉区",
    "428": "赛罕区",
    "429": "土默特左旗",
    "430": "托克托县",
    "431": "和林格尔县",
    "432": "清水河县",
    "433": "武川县",
    "434": "呼和浩特金海工业园区",
    "435": "呼和浩特经济技术开发区"
  },
  "436": {
    "437": "市辖区",
    "438": "东河区",
    "439": "昆都仑区",
    "440": "青山区",
    "441": "石拐区",
    "442": "白云鄂博矿区",
    "443": "九原区",
    "444": "土默特右旗",
    "445": "固阳县",
    "446": "达尔罕茂明安联合旗",
    "447": "包头稀土高新技术产业开发区"
  },
  "448": {
    "449": "市辖区",
    "450": "海勃湾区",
    "451": "海南区",
    "452": "乌达区"
  },
  "453": {
    "454": "市辖区",
    "455": "红山区",
    "456": "元宝山区",
    "457": "松山区",
    "458": "阿鲁科尔沁旗",
    "459": "巴林左旗",
    "460": "巴林右旗",
    "461": "林西县",
    "462": "克什克腾旗",
    "463": "翁牛特旗",
    "464": "喀喇沁旗",
    "465": "宁城县",
    "466": "敖汉旗"
  },
  "467": {
    "468": "市辖区",
    "469": "科尔沁区",
    "470": "科尔沁左翼中旗",
    "471": "科尔沁左翼后旗",
    "472": "开鲁县",
    "473": "库伦旗",
    "474": "奈曼旗",
    "475": "扎鲁特旗",
    "476": "通辽经济技术开发区",
    "477": "霍林郭勒市"
  },
  "478": {
    "479": "市辖区",
    "480": "东胜区",
    "481": "康巴什区",
    "482": "达拉特旗",
    "483": "准格尔旗",
    "484": "鄂托克前旗",
    "485": "鄂托克旗",
    "486": "杭锦旗",
    "487": "乌审旗",
    "488": "伊金霍洛旗"
  },
  "489": {
    "490": "市辖区",
    "491": "海拉尔区",
    "492": "扎赉诺尔区",
    "493": "阿荣旗",
    "494": "莫力达瓦达斡尔族自治旗",
    "495": "鄂伦春自治旗",
    "496": "鄂温克族自治旗",
    "497": "陈巴尔虎旗",
    "498": "新巴尔虎左旗",
    "499": "新巴尔虎右旗",
    "500": "满洲里市",
    "501": "牙克石市",
    "502": "扎兰屯市",
    "503": "额尔古纳市",
    "504": "根河市"
  },
  "505": {
    "506": "市辖区",
    "507": "临河区",
    "508": "五原县",
    "509": "磴口县",
    "510": "乌拉特前旗",
    "511": "乌拉特中旗",
    "512": "乌拉特后旗",
    "513": "杭锦后旗"
  },
  "514": {
    "515": "市辖区",
    "516": "集宁区",
    "517": "卓资县",
    "518": "化德县",
    "519": "商都县",
    "520": "兴和县",
    "521": "凉城县",
    "522": "察哈尔右翼前旗",
    "523": "察哈尔右翼中旗",
    "524": "察哈尔右翼后旗",
    "525": "四子王旗",
    "526": "丰镇市"
  },
  "527": {
    "528": "乌兰浩特市",
    "529": "阿尔山市",
    "530": "科尔沁右翼前旗",
    "531": "科尔沁右翼中旗",
    "532": "扎赉特旗",
    "533": "突泉县"
  },
  "534": {
    "535": "二连浩特市",
    "536": "锡林浩特市",
    "537": "阿巴嘎旗",
    "538": "苏尼特左旗",
    "539": "苏尼特右旗",
    "540": "东乌珠穆沁旗",
    "541": "西乌珠穆沁旗",
    "542": "太仆寺旗",
    "543": "镶黄旗",
    "544": "正镶白旗",
    "545": "正蓝旗",
    "546": "多伦县",
    "547": "乌拉盖管委会"
  },
  "548": {
    "549": "阿拉善左旗",
    "550": "阿拉善右旗",
    "551": "额济纳旗",
    "552": "内蒙古阿拉善经济开发区"
  },
  "553": {
    "554": "市辖区",
    "555": "和平区",
    "556": "沈河区",
    "557": "大东区",
    "558": "皇姑区",
    "559": "铁西区",
    "560": "苏家屯区",
    "561": "浑南区",
    "562": "沈北新区",
    "563": "于洪区",
    "564": "辽中区",
    "565": "康平县",
    "566": "法库县",
    "567": "新民市"
  },
  "568": {
    "569": "市辖区",
    "570": "中山区",
    "571": "西岗区",
    "572": "沙河口区",
    "573": "甘井子区",
    "574": "旅顺口区",
    "575": "金州区",
    "576": "普兰店区",
    "577": "长海县",
    "578": "瓦房店市",
    "579": "庄河市"
  },
  "580": {
    "581": "市辖区",
    "582": "铁东区",
    "583": "铁西区",
    "584": "立山区",
    "585": "千山区",
    "586": "台安县",
    "587": "岫岩满族自治县",
    "588": "海城市"
  },
  "589": {
    "590": "市辖区",
    "591": "新抚区",
    "592": "东洲区",
    "593": "望花区",
    "594": "顺城区",
    "595": "抚顺县",
    "596": "新宾满族自治县",
    "597": "清原满族自治县"
  },
  "598": {
    "599": "市辖区",
    "600": "平山区",
    "601": "溪湖区",
    "602": "明山区",
    "603": "南芬区",
    "604": "本溪满族自治县",
    "605": "桓仁满族自治县"
  },
  "606": {
    "607": "市辖区",
    "608": "元宝区",
    "609": "振兴区",
    "610": "振安区",
    "611": "宽甸满族自治县",
    "612": "东港市",
    "613": "凤城市"
  },
  "614": {
    "615": "市辖区",
    "616": "古塔区",
    "617": "凌河区",
    "618": "太和区",
    "619": "黑山县",
    "620": "义县",
    "621": "凌海市",
    "622": "北镇市"
  },
  "623": {
    "624": "市辖区",
    "625": "站前区",
    "626": "西市区",
    "627": "鲅鱼圈区",
    "628": "老边区",
    "629": "盖州市",
    "630": "大石桥市"
  },
  "631": {
    "632": "市辖区",
    "633": "海州区",
    "634": "新邱区",
    "635": "太平区",
    "636": "清河门区",
    "637": "细河区",
    "638": "阜新蒙古族自治县",
    "639": "彰武县"
  },
  "640": {
    "641": "市辖区",
    "642": "白塔区",
    "643": "文圣区",
    "644": "宏伟区",
    "645": "弓长岭区",
    "646": "太子河区",
    "647": "辽阳县",
    "648": "灯塔市"
  },
  "649": {
    "650": "市辖区",
    "651": "双台子区",
    "652": "兴隆台区",
    "653": "大洼区",
    "654": "盘山县"
  },
  "655": {
    "656": "市辖区",
    "657": "银州区",
    "658": "清河区",
    "659": "铁岭县",
    "660": "西丰县",
    "661": "昌图县",
    "662": "调兵山市",
    "663": "开原市"
  },
  "664": {
    "665": "市辖区",
    "666": "双塔区",
    "667": "龙城区",
    "668": "朝阳县",
    "669": "建平县",
    "670": "喀喇沁左翼蒙古族自治县",
    "671": "北票市",
    "672": "凌源市"
  },
  "673": {
    "674": "市辖区",
    "675": "连山区",
    "676": "龙港区",
    "677": "南票区",
    "678": "绥中县",
    "679": "建昌县",
    "680": "兴城市"
  },
  "681": {
    "682": "市辖区",
    "683": "南关区",
    "684": "宽城区",
    "685": "朝阳区",
    "686": "二道区",
    "687": "绿园区",
    "688": "双阳区",
    "689": "九台区",
    "690": "农安县",
    "691": "长春经济技术开发区",
    "692": "长春净月高新技术产业开发区",
    "693": "长春高新技术产业开发区",
    "694": "长春汽车经济技术开发区",
    "695": "榆树市",
    "696": "德惠市"
  },
  "697": {
    "698": "市辖区",
    "699": "昌邑区",
    "700": "龙潭区",
    "701": "船营区",
    "702": "丰满区",
    "703": "永吉县",
    "704": "吉林经济开发区",
    "705": "吉林高新技术产业开发区",
    "706": "吉林中国新加坡食品区",
    "707": "蛟河市",
    "708": "桦甸市",
    "709": "舒兰市",
    "710": "磐石市"
  },
  "711": {
    "712": "市辖区",
    "713": "铁西区",
    "714": "铁东区",
    "715": "梨树县",
    "716": "伊通满族自治县",
    "717": "公主岭市",
    "718": "双辽市"
  },
  "719": {
    "720": "市辖区",
    "721": "龙山区",
    "722": "西安区",
    "723": "东丰县",
    "724": "东辽县"
  },
  "725": {
    "726": "市辖区",
    "727": "东昌区",
    "728": "二道江区",
    "729": "通化县",
    "730": "辉南县",
    "731": "柳河县",
    "732": "梅河口市",
    "733": "集安市"
  },
  "734": {
    "735": "市辖区",
    "736": "浑江区",
    "737": "江源区",
    "738": "抚松县",
    "739": "靖宇县",
    "740": "长白朝鲜族自治县",
    "741": "临江市"
  },
  "742": {
    "743": "市辖区",
    "744": "宁江区",
    "745": "前郭尔罗斯蒙古族自治县",
    "746": "长岭县",
    "747": "乾安县",
    "748": "吉林松原经济开发区",
    "749": "扶余市"
  },
  "750": {
    "751": "市辖区",
    "752": "洮北区",
    "753": "镇赉县",
    "754": "通榆县",
    "755": "吉林白城经济开发区",
    "756": "洮南市",
    "757": "大安市"
  },
  "758": {
    "759": "延吉市",
    "760": "图们市",
    "761": "敦化市",
    "762": "珲春市",
    "763": "龙井市",
    "764": "和龙市",
    "765": "汪清县",
    "766": "安图县"
  },
  "767": {
    "768": "市辖区",
    "769": "道里区",
    "770": "南岗区",
    "771": "道外区",
    "772": "平房区",
    "773": "松北区",
    "774": "香坊区",
    "775": "呼兰区",
    "776": "阿城区",
    "777": "双城区",
    "778": "依兰县",
    "779": "方正县",
    "780": "宾县",
    "781": "巴彦县",
    "782": "木兰县",
    "783": "通河县",
    "784": "延寿县",
    "785": "尚志市",
    "786": "五常市"
  },
  "787": {
    "788": "市辖区",
    "789": "龙沙区",
    "790": "建华区",
    "791": "铁锋区",
    "792": "昂昂溪区",
    "793": "富拉尔基区",
    "794": "碾子山区",
    "795": "梅里斯达斡尔族区",
    "796": "龙江县",
    "797": "依安县",
    "798": "泰来县",
    "799": "甘南县",
    "800": "富裕县",
    "801": "克山县",
    "802": "克东县",
    "803": "拜泉县",
    "804": "讷河市"
  },
  "805": {
    "806": "市辖区",
    "807": "鸡冠区",
    "808": "恒山区",
    "809": "滴道区",
    "810": "梨树区",
    "811": "城子河区",
    "812": "麻山区",
    "813": "鸡东县",
    "814": "虎林市",
    "815": "密山市"
  },
  "816": {
    "817": "市辖区",
    "818": "向阳区",
    "819": "工农区",
    "820": "南山区",
    "821": "兴安区",
    "822": "东山区",
    "823": "兴山区",
    "824": "萝北县",
    "825": "绥滨县"
  },
  "826": {
    "827": "市辖区",
    "828": "尖山区",
    "829": "岭东区",
    "830": "四方台区",
    "831": "宝山区",
    "832": "集贤县",
    "833": "友谊县",
    "834": "宝清县",
    "835": "饶河县"
  },
  "836": {
    "837": "市辖区",
    "838": "萨尔图区",
    "839": "龙凤区",
    "840": "让胡路区",
    "841": "红岗区",
    "842": "大同区",
    "843": "肇州县",
    "844": "肇源县",
    "845": "林甸县",
    "846": "杜尔伯特蒙古族自治县",
    "847": "大庆高新技术产业开发区"
  },
  "848": {
    "849": "市辖区",
    "850": "伊春区",
    "851": "南岔区",
    "852": "友好区",
    "853": "西林区",
    "854": "翠峦区",
    "855": "新青区",
    "856": "美溪区",
    "857": "金山屯区",
    "858": "五营区",
    "859": "乌马河区",
    "860": "汤旺河区",
    "861": "带岭区",
    "862": "乌伊岭区",
    "863": "红星区",
    "864": "上甘岭区",
    "865": "嘉荫县",
    "866": "铁力市"
  },
  "867": {
    "868": "市辖区",
    "869": "向阳区",
    "870": "前进区",
    "871": "东风区",
    "872": "郊区",
    "873": "桦南县",
    "874": "桦川县",
    "875": "汤原县",
    "876": "同江市",
    "877": "富锦市",
    "878": "抚远市"
  },
  "879": {
    "880": "市辖区",
    "881": "新兴区",
    "882": "桃山区",
    "883": "茄子河区",
    "884": "勃利县"
  },
  "885": {
    "886": "市辖区",
    "887": "东安区",
    "888": "阳明区",
    "889": "爱民区",
    "890": "西安区",
    "891": "林口县",
    "892": "牡丹江经济技术开发区",
    "893": "绥芬河市",
    "894": "海林市",
    "895": "宁安市",
    "896": "穆棱市",
    "897": "东宁市"
  },
  "898": {
    "899": "市辖区",
    "900": "爱辉区",
    "901": "嫩江县",
    "902": "逊克县",
    "903": "孙吴县",
    "904": "北安市",
    "905": "五大连池市"
  },
  "906": {
    "907": "市辖区",
    "908": "北林区",
    "909": "望奎县",
    "910": "兰西县",
    "911": "青冈县",
    "912": "庆安县",
    "913": "明水县",
    "914": "绥棱县",
    "915": "安达市",
    "916": "肇东市",
    "917": "海伦市"
  },
  "918": {
    "919": "漠河市",
    "920": "呼玛县",
    "921": "塔河县",
    "922": "加格达奇区",
    "923": "松岭区",
    "924": "新林区",
    "925": "呼中区"
  },
  "926": {
    "927": "黄浦区",
    "928": "徐汇区",
    "929": "长宁区",
    "930": "静安区",
    "931": "普陀区",
    "932": "虹口区",
    "933": "杨浦区",
    "934": "闵行区",
    "935": "宝山区",
    "936": "嘉定区",
    "937": "浦东新区",
    "938": "金山区",
    "939": "松江区",
    "940": "青浦区",
    "941": "奉贤区",
    "942": "崇明区"
  },
  "943": {
    "944": "市辖区",
    "945": "玄武区",
    "946": "秦淮区",
    "947": "建邺区",
    "948": "鼓楼区",
    "949": "浦口区",
    "950": "栖霞区",
    "951": "雨花台区",
    "952": "江宁区",
    "953": "六合区",
    "954": "溧水区",
    "955": "高淳区"
  },
  "956": {
    "957": "市辖区",
    "958": "锡山区",
    "959": "惠山区",
    "960": "滨湖区",
    "961": "梁溪区",
    "962": "新吴区",
    "963": "江阴市",
    "964": "宜兴市"
  },
  "965": {
    "966": "市辖区",
    "967": "鼓楼区",
    "968": "云龙区",
    "969": "贾汪区",
    "970": "泉山区",
    "971": "铜山区",
    "972": "丰县",
    "973": "沛县",
    "974": "睢宁县",
    "975": "徐州经济技术开发区",
    "976": "新沂市",
    "977": "邳州市"
  },
  "978": {
    "979": "市辖区",
    "980": "天宁区",
    "981": "钟楼区",
    "982": "新北区",
    "983": "武进区",
    "984": "金坛区",
    "985": "溧阳市"
  },
  "986": {
    "987": "市辖区",
    "988": "虎丘区",
    "989": "吴中区",
    "990": "相城区",
    "991": "姑苏区",
    "992": "吴江区",
    "993": "苏州工业园区",
    "994": "常熟市",
    "995": "张家港市",
    "996": "昆山市",
    "997": "太仓市"
  },
  "998": {
    "999": "市辖区",
    "1000": "崇川区",
    "1001": "港闸区",
    "1002": "通州区",
    "1003": "如东县",
    "1004": "南通经济技术开发区",
    "1005": "启东市",
    "1006": "如皋市",
    "1007": "海门市",
    "1008": "海安市"
  },
  "1009": {
    "1010": "市辖区",
    "1011": "连云区",
    "1012": "海州区",
    "1013": "赣榆区",
    "1014": "东海县",
    "1015": "灌云县",
    "1016": "灌南县",
    "1017": "连云港经济技术开发区",
    "1018": "连云港高新技术产业开发区"
  },
  "1019": {
    "1020": "市辖区",
    "1021": "淮安区",
    "1022": "淮阴区",
    "1023": "清江浦区",
    "1024": "洪泽区",
    "1025": "涟水县",
    "1026": "盱眙县",
    "1027": "金湖县",
    "1028": "淮安经济技术开发区"
  },
  "1029": {
    "1030": "市辖区",
    "1031": "亭湖区",
    "1032": "盐都区",
    "1033": "大丰区",
    "1034": "响水县",
    "1035": "滨海县",
    "1036": "阜宁县",
    "1037": "射阳县",
    "1038": "建湖县",
    "1039": "盐城经济技术开发区",
    "1040": "东台市"
  },
  "1041": {
    "1042": "市辖区",
    "1043": "广陵区",
    "1044": "邗江区",
    "1045": "江都区",
    "1046": "宝应县",
    "1047": "扬州经济技术开发区",
    "1048": "仪征市",
    "1049": "高邮市"
  },
  "1050": {
    "1051": "市辖区",
    "1052": "京口区",
    "1053": "润州区",
    "1054": "丹徒区",
    "1055": "镇江新区",
    "1056": "丹阳市",
    "1057": "扬中市",
    "1058": "句容市"
  },
  "1059": {
    "1060": "市辖区",
    "1061": "海陵区",
    "1062": "高港区",
    "1063": "姜堰区",
    "1064": "泰州医药高新技术产业开发区",
    "1065": "兴化市",
    "1066": "靖江市",
    "1067": "泰兴市"
  },
  "1068": {
    "1069": "市辖区",
    "1070": "宿城区",
    "1071": "宿豫区",
    "1072": "沭阳县",
    "1073": "泗阳县",
    "1074": "泗洪县",
    "1075": "宿迁经济技术开发区"
  },
  "1076": {
    "1077": "市辖区",
    "1078": "上城区",
    "1079": "下城区",
    "1080": "江干区",
    "1081": "拱墅区",
    "1082": "西湖区",
    "1083": "滨江区",
    "1084": "萧山区",
    "1085": "余杭区",
    "1086": "富阳区",
    "1087": "临安区",
    "1088": "桐庐县",
    "1089": "淳安县",
    "1090": "建德市"
  },
  "1091": {
    "1092": "市辖区",
    "1093": "海曙区",
    "1094": "江北区",
    "1095": "北仑区",
    "1096": "镇海区",
    "1097": "鄞州区",
    "1098": "奉化区",
    "1099": "象山县",
    "1100": "宁海县",
    "1101": "余姚市",
    "1102": "慈溪市"
  },
  "1103": {
    "1104": "市辖区",
    "1105": "鹿城区",
    "1106": "龙湾区",
    "1107": "瓯海区",
    "1108": "洞头区",
    "1109": "永嘉县",
    "1110": "平阳县",
    "1111": "苍南县",
    "1112": "文成县",
    "1113": "泰顺县",
    "1114": "温州经济技术开发区",
    "1115": "瑞安市",
    "1116": "乐清市"
  },
  "1117": {
    "1118": "市辖区",
    "1119": "南湖区",
    "1120": "秀洲区",
    "1121": "嘉善县",
    "1122": "海盐县",
    "1123": "海宁市",
    "1124": "平湖市",
    "1125": "桐乡市"
  },
  "1126": {
    "1127": "市辖区",
    "1128": "吴兴区",
    "1129": "南浔区",
    "1130": "德清县",
    "1131": "长兴县",
    "1132": "安吉县"
  },
  "1133": {
    "1134": "市辖区",
    "1135": "越城区",
    "1136": "柯桥区",
    "1137": "上虞区",
    "1138": "新昌县",
    "1139": "诸暨市",
    "1140": "嵊州市"
  },
  "1141": {
    "1142": "市辖区",
    "1143": "婺城区",
    "1144": "金东区",
    "1145": "武义县",
    "1146": "浦江县",
    "1147": "磐安县",
    "1148": "兰溪市",
    "1149": "义乌市",
    "1150": "东阳市",
    "1151": "永康市"
  },
  "1152": {
    "1153": "市辖区",
    "1154": "柯城区",
    "1155": "衢江区",
    "1156": "常山县",
    "1157": "开化县",
    "1158": "龙游县",
    "1159": "江山市"
  },
  "1160": {
    "1161": "市辖区",
    "1162": "定海区",
    "1163": "普陀区",
    "1164": "岱山县",
    "1165": "嵊泗县"
  },
  "1166": {
    "1167": "市辖区",
    "1168": "椒江区",
    "1169": "黄岩区",
    "1170": "路桥区",
    "1171": "三门县",
    "1172": "天台县",
    "1173": "仙居县",
    "1174": "温岭市",
    "1175": "临海市",
    "1176": "玉环市"
  },
  "1177": {
    "1178": "市辖区",
    "1179": "莲都区",
    "1180": "青田县",
    "1181": "缙云县",
    "1182": "遂昌县",
    "1183": "松阳县",
    "1184": "云和县",
    "1185": "庆元县",
    "1186": "景宁畲族自治县",
    "1187": "龙泉市"
  },
  "1188": {
    "1189": "市辖区",
    "1190": "瑶海区",
    "1191": "庐阳区",
    "1192": "蜀山区",
    "1193": "包河区",
    "1194": "长丰县",
    "1195": "肥东县",
    "1196": "肥西县",
    "1197": "庐江县",
    "1198": "合肥高新技术产业开发区",
    "1199": "合肥经济技术开发区",
    "1200": "合肥新站高新技术产业开发区",
    "1201": "巢湖市"
  },
  "1202": {
    "1203": "市辖区",
    "1204": "镜湖区",
    "1205": "弋江区",
    "1206": "鸠江区",
    "1207": "三山区",
    "1208": "芜湖县",
    "1209": "繁昌县",
    "1210": "南陵县",
    "1211": "无为县",
    "1212": "芜湖经济技术开发区",
    "1213": "安徽芜湖长江大桥经济开发区"
  },
  "1214": {
    "1215": "市辖区",
    "1216": "龙子湖区",
    "1217": "蚌山区",
    "1218": "禹会区",
    "1219": "淮上区",
    "1220": "怀远县",
    "1221": "五河县",
    "1222": "固镇县",
    "1223": "蚌埠市高新技术开发区",
    "1224": "蚌埠市经济开发区"
  },
  "1225": {
    "1226": "市辖区",
    "1227": "大通区",
    "1228": "田家庵区",
    "1229": "谢家集区",
    "1230": "八公山区",
    "1231": "潘集区",
    "1232": "凤台县",
    "1233": "寿县"
  },
  "1234": {
    "1235": "市辖区",
    "1236": "花山区",
    "1237": "雨山区",
    "1238": "博望区",
    "1239": "当涂县",
    "1240": "含山县",
    "1241": "和县"
  },
  "1242": {
    "1243": "市辖区",
    "1244": "杜集区",
    "1245": "相山区",
    "1246": "烈山区",
    "1247": "濉溪县"
  },
  "1248": {
    "1249": "市辖区",
    "1250": "铜官区",
    "1251": "义安区",
    "1252": "郊区",
    "1253": "枞阳县"
  },
  "1254": {
    "1255": "市辖区",
    "1256": "迎江区",
    "1257": "大观区",
    "1258": "宜秀区",
    "1259": "怀宁县",
    "1260": "太湖县",
    "1261": "宿松县",
    "1262": "望江县",
    "1263": "岳西县",
    "1264": "安徽安庆经济开发区",
    "1265": "桐城市",
    "1266": "潜山市"
  },
  "1267": {
    "1268": "市辖区",
    "1269": "屯溪区",
    "1270": "黄山区",
    "1271": "徽州区",
    "1272": "歙县",
    "1273": "休宁县",
    "1274": "黟县",
    "1275": "祁门县"
  },
  "1276": {
    "1277": "市辖区",
    "1278": "琅琊区",
    "1279": "南谯区",
    "1280": "来安县",
    "1281": "全椒县",
    "1282": "定远县",
    "1283": "凤阳县",
    "1284": "苏滁现代产业园",
    "1285": "滁州经济技术开发区",
    "1286": "天长市",
    "1287": "明光市"
  },
  "1288": {
    "1289": "市辖区",
    "1290": "颍州区",
    "1291": "颍东区",
    "1292": "颍泉区",
    "1293": "临泉县",
    "1294": "太和县",
    "1295": "阜南县",
    "1296": "颍上县",
    "1297": "阜阳合肥现代产业园区",
    "1298": "阜阳经济技术开发区",
    "1299": "界首市"
  },
  "1300": {
    "1301": "市辖区",
    "1302": "埇桥区",
    "1303": "砀山县",
    "1304": "萧县",
    "1305": "灵璧县",
    "1306": "泗县",
    "1307": "宿州马鞍山现代产业园区",
    "1308": "宿州经济技术开发区"
  },
  "1309": {
    "1310": "市辖区",
    "1311": "金安区",
    "1312": "裕安区",
    "1313": "叶集区",
    "1314": "霍邱县",
    "1315": "舒城县",
    "1316": "金寨县",
    "1317": "霍山县"
  },
  "1318": {
    "1319": "市辖区",
    "1320": "谯城区",
    "1321": "涡阳县",
    "1322": "蒙城县",
    "1323": "利辛县"
  },
  "1324": {
    "1325": "市辖区",
    "1326": "贵池区",
    "1327": "东至县",
    "1328": "石台县",
    "1329": "青阳县"
  },
  "1330": {
    "1331": "市辖区",
    "1332": "宣州区",
    "1333": "郎溪县",
    "1334": "广德县",
    "1335": "泾县",
    "1336": "绩溪县",
    "1337": "旌德县",
    "1338": "宣城市经济开发区",
    "1339": "宁国市"
  },
  "1340": {
    "1341": "市辖区",
    "1342": "鼓楼区",
    "1343": "台江区",
    "1344": "仓山区",
    "1345": "马尾区",
    "1346": "晋安区",
    "1347": "长乐区",
    "1348": "闽侯县",
    "1349": "连江县",
    "1350": "罗源县",
    "1351": "闽清县",
    "1352": "永泰县",
    "1353": "平潭县",
    "1354": "福清市"
  },
  "1355": {
    "1356": "市辖区",
    "1357": "思明区",
    "1358": "海沧区",
    "1359": "湖里区",
    "1360": "集美区",
    "1361": "同安区",
    "1362": "翔安区"
  },
  "1363": {
    "1364": "市辖区",
    "1365": "城厢区",
    "1366": "涵江区",
    "1367": "荔城区",
    "1368": "秀屿区",
    "1369": "仙游县"
  },
  "1370": {
    "1371": "市辖区",
    "1372": "梅列区",
    "1373": "三元区",
    "1374": "明溪县",
    "1375": "清流县",
    "1376": "宁化县",
    "1377": "大田县",
    "1378": "尤溪县",
    "1379": "沙县",
    "1380": "将乐县",
    "1381": "泰宁县",
    "1382": "建宁县",
    "1383": "永安市"
  },
  "1384": {
    "1385": "市辖区",
    "1386": "鲤城区",
    "1387": "丰泽区",
    "1388": "洛江区",
    "1389": "泉港区",
    "1390": "惠安县",
    "1391": "安溪县",
    "1392": "永春县",
    "1393": "德化县",
    "1394": "金门县",
    "1395": "石狮市",
    "1396": "晋江市",
    "1397": "南安市"
  },
  "1398": {
    "1399": "市辖区",
    "1400": "芗城区",
    "1401": "龙文区",
    "1402": "云霄县",
    "1403": "漳浦县",
    "1404": "诏安县",
    "1405": "长泰县",
    "1406": "东山县",
    "1407": "南靖县",
    "1408": "平和县",
    "1409": "华安县",
    "1410": "龙海市"
  },
  "1411": {
    "1412": "市辖区",
    "1413": "延平区",
    "1414": "建阳区",
    "1415": "顺昌县",
    "1416": "浦城县",
    "1417": "光泽县",
    "1418": "松溪县",
    "1419": "政和县",
    "1420": "邵武市",
    "1421": "武夷山市",
    "1422": "建瓯市"
  },
  "1423": {
    "1424": "市辖区",
    "1425": "新罗区",
    "1426": "永定区",
    "1427": "长汀县",
    "1428": "上杭县",
    "1429": "武平县",
    "1430": "连城县",
    "1431": "漳平市"
  },
  "1432": {
    "1433": "市辖区",
    "1434": "蕉城区",
    "1435": "霞浦县",
    "1436": "古田县",
    "1437": "屏南县",
    "1438": "寿宁县",
    "1439": "周宁县",
    "1440": "柘荣县",
    "1441": "福安市",
    "1442": "福鼎市"
  },
  "1443": {
    "1444": "市辖区",
    "1445": "东湖区",
    "1446": "西湖区",
    "1447": "青云谱区",
    "1448": "湾里区",
    "1449": "青山湖区",
    "1450": "新建区",
    "1451": "南昌县",
    "1452": "安义县",
    "1453": "进贤县"
  },
  "1454": {
    "1455": "市辖区",
    "1456": "昌江区",
    "1457": "珠山区",
    "1458": "浮梁县",
    "1459": "乐平市"
  },
  "1460": {
    "1461": "市辖区",
    "1462": "安源区",
    "1463": "湘东区",
    "1464": "莲花县",
    "1465": "上栗县",
    "1466": "芦溪县"
  },
  "1467": {
    "1468": "市辖区",
    "1469": "濂溪区",
    "1470": "浔阳区",
    "1471": "柴桑区",
    "1472": "武宁县",
    "1473": "修水县",
    "1474": "永修县",
    "1475": "德安县",
    "1476": "都昌县",
    "1477": "湖口县",
    "1478": "彭泽县",
    "1479": "瑞昌市",
    "1480": "共青城市",
    "1481": "庐山市"
  },
  "1482": {
    "1483": "市辖区",
    "1484": "渝水区",
    "1485": "分宜县"
  },
  "1486": {
    "1487": "市辖区",
    "1488": "月湖区",
    "1489": "余江区",
    "1490": "贵溪市"
  },
  "1491": {
    "1492": "市辖区",
    "1493": "章贡区",
    "1494": "南康区",
    "1495": "赣县区",
    "1496": "信丰县",
    "1497": "大余县",
    "1498": "上犹县",
    "1499": "崇义县",
    "1500": "安远县",
    "1501": "龙南县",
    "1502": "定南县",
    "1503": "全南县",
    "1504": "宁都县",
    "1505": "于都县",
    "1506": "兴国县",
    "1507": "会昌县",
    "1508": "寻乌县",
    "1509": "石城县",
    "1510": "瑞金市"
  },
  "1511": {
    "1512": "市辖区",
    "1513": "吉州区",
    "1514": "青原区",
    "1515": "吉安县",
    "1516": "吉水县",
    "1517": "峡江县",
    "1518": "新干县",
    "1519": "永丰县",
    "1520": "泰和县",
    "1521": "遂川县",
    "1522": "万安县",
    "1523": "安福县",
    "1524": "永新县",
    "1525": "井冈山市"
  },
  "1526": {
    "1527": "市辖区",
    "1528": "袁州区",
    "1529": "奉新县",
    "1530": "万载县",
    "1531": "上高县",
    "1532": "宜丰县",
    "1533": "靖安县",
    "1534": "铜鼓县",
    "1535": "丰城市",
    "1536": "樟树市",
    "1537": "高安市"
  },
  "1538": {
    "1539": "市辖区",
    "1540": "临川区",
    "1541": "东乡区",
    "1542": "南城县",
    "1543": "黎川县",
    "1544": "南丰县",
    "1545": "崇仁县",
    "1546": "乐安县",
    "1547": "宜黄县",
    "1548": "金溪县",
    "1549": "资溪县",
    "1550": "广昌县"
  },
  "1551": {
    "1552": "市辖区",
    "1553": "信州区",
    "1554": "广丰区",
    "1555": "上饶县",
    "1556": "玉山县",
    "1557": "铅山县",
    "1558": "横峰县",
    "1559": "弋阳县",
    "1560": "余干县",
    "1561": "鄱阳县",
    "1562": "万年县",
    "1563": "婺源县",
    "1564": "德兴市"
  },
  "1565": {
    "1566": "市辖区",
    "1567": "历下区",
    "1568": "市中区",
    "1569": "槐荫区",
    "1570": "天桥区",
    "1571": "历城区",
    "1572": "长清区",
    "1573": "章丘区",
    "1574": "济阳区",
    "1575": "平阴县",
    "1576": "商河县",
    "1577": "济南高新技术产业开发区"
  },
  "1578": {
    "1579": "市辖区",
    "1580": "市南区",
    "1581": "市北区",
    "1582": "黄岛区",
    "1583": "崂山区",
    "1584": "李沧区",
    "1585": "城阳区",
    "1586": "即墨区",
    "1587": "青岛高新技术产业开发区",
    "1588": "胶州市",
    "1589": "平度市",
    "1590": "莱西市"
  },
  "1591": {
    "1592": "市辖区",
    "1593": "淄川区",
    "1594": "张店区",
    "1595": "博山区",
    "1596": "临淄区",
    "1597": "周村区",
    "1598": "桓台县",
    "1599": "高青县",
    "1600": "沂源县"
  },
  "1601": {
    "1602": "市辖区",
    "1603": "市中区",
    "1604": "薛城区",
    "1605": "峄城区",
    "1606": "台儿庄区",
    "1607": "山亭区",
    "1608": "滕州市"
  },
  "1609": {
    "1610": "市辖区",
    "1611": "东营区",
    "1612": "河口区",
    "1613": "垦利区",
    "1614": "利津县",
    "1615": "广饶县",
    "1616": "东营经济技术开发区",
    "1617": "东营港经济开发区"
  },
  "1618": {
    "1619": "市辖区",
    "1620": "芝罘区",
    "1621": "福山区",
    "1622": "牟平区",
    "1623": "莱山区",
    "1624": "长岛县",
    "1625": "烟台高新技术产业开发区",
    "1626": "烟台经济技术开发区",
    "1627": "龙口市",
    "1628": "莱阳市",
    "1629": "莱州市",
    "1630": "蓬莱市",
    "1631": "招远市",
    "1632": "栖霞市",
    "1633": "海阳市"
  },
  "1634": {
    "1635": "市辖区",
    "1636": "潍城区",
    "1637": "寒亭区",
    "1638": "坊子区",
    "1639": "奎文区",
    "1640": "临朐县",
    "1641": "昌乐县",
    "1642": "潍坊滨海经济技术开发区",
    "1643": "青州市",
    "1644": "诸城市",
    "1645": "寿光市",
    "1646": "安丘市",
    "1647": "高密市",
    "1648": "昌邑市"
  },
  "1649": {
    "1650": "市辖区",
    "1651": "任城区",
    "1652": "兖州区",
    "1653": "微山县",
    "1654": "鱼台县",
    "1655": "金乡县",
    "1656": "嘉祥县",
    "1657": "汶上县",
    "1658": "泗水县",
    "1659": "梁山县",
    "1660": "济宁高新技术产业开发区",
    "1661": "曲阜市",
    "1662": "邹城市"
  },
  "1663": {
    "1664": "市辖区",
    "1665": "泰山区",
    "1666": "岱岳区",
    "1667": "宁阳县",
    "1668": "东平县",
    "1669": "新泰市",
    "1670": "肥城市"
  },
  "1671": {
    "1672": "市辖区",
    "1673": "环翠区",
    "1674": "文登区",
    "1675": "威海火炬高技术产业开发区",
    "1676": "威海经济技术开发区",
    "1677": "威海临港经济技术开发区",
    "1678": "荣成市",
    "1679": "乳山市"
  },
  "1680": {
    "1681": "市辖区",
    "1682": "东港区",
    "1683": "岚山区",
    "1684": "五莲县",
    "1685": "莒县",
    "1686": "日照经济技术开发区"
  },
  "1687": {
    "1688": "市辖区",
    "1689": "莱城区",
    "1690": "钢城区"
  },
  "1691": {
    "1692": "市辖区",
    "1693": "兰山区",
    "1694": "罗庄区",
    "1695": "河东区",
    "1696": "沂南县",
    "1697": "郯城县",
    "1698": "沂水县",
    "1699": "兰陵县",
    "1700": "费县",
    "1701": "平邑县",
    "1702": "莒南县",
    "1703": "蒙阴县",
    "1704": "临沭县",
    "1705": "临沂高新技术产业开发区",
    "1706": "临沂经济技术开发区",
    "1707": "临沂临港经济开发区"
  },
  "1708": {
    "1709": "市辖区",
    "1710": "德城区",
    "1711": "陵城区",
    "1712": "宁津县",
    "1713": "庆云县",
    "1714": "临邑县",
    "1715": "齐河县",
    "1716": "平原县",
    "1717": "夏津县",
    "1718": "武城县",
    "1719": "德州经济技术开发区",
    "1720": "德州运河经济开发区",
    "1721": "乐陵市",
    "1722": "禹城市"
  },
  "1723": {
    "1724": "市辖区",
    "1725": "东昌府区",
    "1726": "阳谷县",
    "1727": "莘县",
    "1728": "茌平县",
    "1729": "东阿县",
    "1730": "冠县",
    "1731": "高唐县",
    "1732": "临清市"
  },
  "1733": {
    "1734": "市辖区",
    "1735": "滨城区",
    "1736": "沾化区",
    "1737": "惠民县",
    "1738": "阳信县",
    "1739": "无棣县",
    "1740": "博兴县",
    "1741": "邹平市"
  },
  "1742": {
    "1743": "市辖区",
    "1744": "牡丹区",
    "1745": "定陶区",
    "1746": "曹县",
    "1747": "单县",
    "1748": "成武县",
    "1749": "巨野县",
    "1750": "郓城县",
    "1751": "鄄城县",
    "1752": "东明县",
    "1753": "菏泽经济技术开发区",
    "1754": "菏泽高新技术开发区"
  },
  "1755": {
    "1756": "市辖区",
    "1757": "中原区",
    "1758": "二七区",
    "1759": "管城回族区",
    "1760": "金水区",
    "1761": "上街区",
    "1762": "惠济区",
    "1763": "中牟县",
    "1764": "郑州经济技术开发区",
    "1765": "郑州高新技术产业开发区",
    "1766": "郑州航空港经济综合实验区",
    "1767": "巩义市",
    "1768": "荥阳市",
    "1769": "新密市",
    "1770": "新郑市",
    "1771": "登封市"
  },
  "1772": {
    "1773": "市辖区",
    "1774": "龙亭区",
    "1775": "顺河回族区",
    "1776": "鼓楼区",
    "1777": "禹王台区",
    "1778": "祥符区",
    "1779": "杞县",
    "1780": "通许县",
    "1781": "尉氏县",
    "1782": "兰考县"
  },
  "1783": {
    "1784": "市辖区",
    "1785": "老城区",
    "1786": "西工区",
    "1787": "瀍河回族区",
    "1788": "涧西区",
    "1789": "吉利区",
    "1790": "洛龙区",
    "1791": "孟津县",
    "1792": "新安县",
    "1793": "栾川县",
    "1794": "嵩县",
    "1795": "汝阳县",
    "1796": "宜阳县",
    "1797": "洛宁县",
    "1798": "伊川县",
    "1799": "洛阳高新技术产业开发区",
    "1800": "偃师市"
  },
  "1801": {
    "1802": "市辖区",
    "1803": "新华区",
    "1804": "卫东区",
    "1805": "石龙区",
    "1806": "湛河区",
    "1807": "宝丰县",
    "1808": "叶县",
    "1809": "鲁山县",
    "1810": "郏县",
    "1811": "平顶山高新技术产业开发区",
    "1812": "平顶山市新城区",
    "1813": "舞钢市",
    "1814": "汝州市"
  },
  "1815": {
    "1816": "市辖区",
    "1817": "文峰区",
    "1818": "北关区",
    "1819": "殷都区",
    "1820": "龙安区",
    "1821": "安阳县",
    "1822": "汤阴县",
    "1823": "滑县",
    "1824": "内黄县",
    "1825": "安阳高新技术产业开发区",
    "1826": "林州市"
  },
  "1827": {
    "1828": "市辖区",
    "1829": "鹤山区",
    "1830": "山城区",
    "1831": "淇滨区",
    "1832": "浚县",
    "1833": "淇县",
    "1834": "鹤壁经济技术开发区"
  },
  "1835": {
    "1836": "市辖区",
    "1837": "红旗区",
    "1838": "卫滨区",
    "1839": "凤泉区",
    "1840": "牧野区",
    "1841": "新乡县",
    "1842": "获嘉县",
    "1843": "原阳县",
    "1844": "延津县",
    "1845": "封丘县",
    "1846": "长垣县",
    "1847": "新乡高新技术产业开发区",
    "1848": "新乡经济技术开发区",
    "1849": "新乡市平原城乡一体化示范区",
    "1850": "卫辉市",
    "1851": "辉县市"
  },
  "1852": {
    "1853": "市辖区",
    "1854": "解放区",
    "1855": "中站区",
    "1856": "马村区",
    "1857": "山阳区",
    "1858": "修武县",
    "1859": "博爱县",
    "1860": "武陟县",
    "1861": "温县",
    "1862": "焦作城乡一体化示范区",
    "1863": "沁阳市",
    "1864": "孟州市"
  },
  "1865": {
    "1866": "市辖区",
    "1867": "华龙区",
    "1868": "清丰县",
    "1869": "南乐县",
    "1870": "范县",
    "1871": "台前县",
    "1872": "濮阳县",
    "1873": "河南濮阳工业园区",
    "1874": "濮阳经济技术开发区"
  },
  "1875": {
    "1876": "市辖区",
    "1877": "魏都区",
    "1878": "建安区",
    "1879": "鄢陵县",
    "1880": "襄城县",
    "1881": "许昌经济技术开发区",
    "1882": "禹州市",
    "1883": "长葛市"
  },
  "1884": {
    "1885": "市辖区",
    "1886": "源汇区",
    "1887": "郾城区",
    "1888": "召陵区",
    "1889": "舞阳县",
    "1890": "临颍县",
    "1891": "漯河经济技术开发区"
  },
  "1892": {
    "1893": "市辖区",
    "1894": "湖滨区",
    "1895": "陕州区",
    "1896": "渑池县",
    "1897": "卢氏县",
    "1898": "河南三门峡经济开发区",
    "1899": "义马市",
    "1900": "灵宝市"
  },
  "1901": {
    "1902": "市辖区",
    "1903": "宛城区",
    "1904": "卧龙区",
    "1905": "南召县",
    "1906": "方城县",
    "1907": "西峡县",
    "1908": "镇平县",
    "1909": "内乡县",
    "1910": "淅川县",
    "1911": "社旗县",
    "1912": "唐河县",
    "1913": "新野县",
    "1914": "桐柏县",
    "1915": "南阳高新技术产业开发区",
    "1916": "南阳市城乡一体化示范区",
    "1917": "邓州市"
  },
  "1918": {
    "1919": "市辖区",
    "1920": "梁园区",
    "1921": "睢阳区",
    "1922": "民权县",
    "1923": "睢县",
    "1924": "宁陵县",
    "1925": "柘城县",
    "1926": "虞城县",
    "1927": "夏邑县",
    "1928": "豫东综合物流产业聚集区",
    "1929": "河南商丘经济开发区",
    "1930": "永城市"
  },
  "1931": {
    "1932": "市辖区",
    "1933": "浉河区",
    "1934": "平桥区",
    "1935": "罗山县",
    "1936": "光山县",
    "1937": "新县",
    "1938": "商城县",
    "1939": "固始县",
    "1940": "潢川县",
    "1941": "淮滨县",
    "1942": "息县",
    "1943": "信阳高新技术产业开发区"
  },
  "1944": {
    "1945": "市辖区",
    "1946": "川汇区",
    "1947": "扶沟县",
    "1948": "西华县",
    "1949": "商水县",
    "1950": "沈丘县",
    "1951": "郸城县",
    "1952": "淮阳县",
    "1953": "太康县",
    "1954": "鹿邑县",
    "1955": "河南周口经济开发区",
    "1956": "项城市"
  },
  "1957": {
    "1958": "市辖区",
    "1959": "驿城区",
    "1960": "西平县",
    "1961": "上蔡县",
    "1962": "平舆县",
    "1963": "正阳县",
    "1964": "确山县",
    "1965": "泌阳县",
    "1966": "汝南县",
    "1967": "遂平县",
    "1968": "新蔡县",
    "1969": "河南驻马店经济开发区"
  },
  "1970": {
    "1971": "济源市"
  },
  "1972": {
    "1973": "市辖区",
    "1974": "江岸区",
    "1975": "江汉区",
    "1976": "硚口区",
    "1977": "汉阳区",
    "1978": "武昌区",
    "1979": "青山区",
    "1980": "洪山区",
    "1981": "东西湖区",
    "1982": "汉南区",
    "1983": "蔡甸区",
    "1984": "江夏区",
    "1985": "黄陂区",
    "1986": "新洲区"
  },
  "1987": {
    "1988": "市辖区",
    "1989": "黄石港区",
    "1990": "西塞山区",
    "1991": "下陆区",
    "1992": "铁山区",
    "1993": "阳新县",
    "1994": "大冶市"
  },
  "1995": {
    "1996": "市辖区",
    "1997": "茅箭区",
    "1998": "张湾区",
    "1999": "郧阳区",
    "2000": "郧西县",
    "2001": "竹山县",
    "2002": "竹溪县",
    "2003": "房县",
    "2004": "丹江口市"
  },
  "2005": {
    "2006": "市辖区",
    "2007": "西陵区",
    "2008": "伍家岗区",
    "2009": "点军区",
    "2010": "猇亭区",
    "2011": "夷陵区",
    "2012": "远安县",
    "2013": "兴山县",
    "2014": "秭归县",
    "2015": "长阳土家族自治县",
    "2016": "五峰土家族自治县",
    "2017": "宜都市",
    "2018": "当阳市",
    "2019": "枝江市"
  },
  "2020": {
    "2021": "市辖区",
    "2022": "襄城区",
    "2023": "樊城区",
    "2024": "襄州区",
    "2025": "南漳县",
    "2026": "谷城县",
    "2027": "保康县",
    "2028": "老河口市",
    "2029": "枣阳市",
    "2030": "宜城市"
  },
  "2031": {
    "2032": "市辖区",
    "2033": "梁子湖区",
    "2034": "华容区",
    "2035": "鄂城区"
  },
  "2036": {
    "2037": "市辖区",
    "2038": "东宝区",
    "2039": "掇刀区",
    "2040": "沙洋县",
    "2041": "钟祥市",
    "2042": "京山市"
  },
  "2043": {
    "2044": "市辖区",
    "2045": "孝南区",
    "2046": "孝昌县",
    "2047": "大悟县",
    "2048": "云梦县",
    "2049": "应城市",
    "2050": "安陆市",
    "2051": "汉川市"
  },
  "2052": {
    "2053": "市辖区",
    "2054": "沙市区",
    "2055": "荆州区",
    "2056": "公安县",
    "2057": "监利县",
    "2058": "江陵县",
    "2059": "荆州经济技术开发区",
    "2060": "石首市",
    "2061": "洪湖市",
    "2062": "松滋市"
  },
  "2063": {
    "2064": "市辖区",
    "2065": "黄州区",
    "2066": "团风县",
    "2067": "红安县",
    "2068": "罗田县",
    "2069": "英山县",
    "2070": "浠水县",
    "2071": "蕲春县",
    "2072": "黄梅县",
    "2073": "龙感湖管理区",
    "2074": "麻城市",
    "2075": "武穴市"
  },
  "2076": {
    "2077": "市辖区",
    "2078": "咸安区",
    "2079": "嘉鱼县",
    "2080": "通城县",
    "2081": "崇阳县",
    "2082": "通山县",
    "2083": "赤壁市"
  },
  "2084": {
    "2085": "市辖区",
    "2086": "曾都区",
    "2087": "随县",
    "2088": "广水市"
  },
  "2089": {
    "2090": "恩施市",
    "2091": "利川市",
    "2092": "建始县",
    "2093": "巴东县",
    "2094": "宣恩县",
    "2095": "咸丰县",
    "2096": "来凤县",
    "2097": "鹤峰县"
  },
  "2098": {
    "2099": "仙桃市",
    "2100": "潜江市",
    "2101": "天门市",
    "2102": "神农架林区"
  },
  "2103": {
    "2104": "市辖区",
    "2105": "芙蓉区",
    "2106": "天心区",
    "2107": "岳麓区",
    "2108": "开福区",
    "2109": "雨花区",
    "2110": "望城区",
    "2111": "长沙县",
    "2112": "浏阳市",
    "2113": "宁乡市"
  },
  "2114": {
    "2115": "市辖区",
    "2116": "荷塘区",
    "2117": "芦淞区",
    "2118": "石峰区",
    "2119": "天元区",
    "2120": "渌口区",
    "2121": "攸县",
    "2122": "茶陵县",
    "2123": "炎陵县",
    "2124": "云龙示范区",
    "2125": "醴陵市"
  },
  "2126": {
    "2127": "市辖区",
    "2128": "雨湖区",
    "2129": "岳塘区",
    "2130": "湘潭县",
    "2131": "湖南湘潭高新技术产业园区",
    "2132": "湘潭昭山示范区",
    "2133": "湘潭九华示范区",
    "2134": "湘乡市",
    "2135": "韶山市"
  },
  "2136": {
    "2137": "市辖区",
    "2138": "珠晖区",
    "2139": "雁峰区",
    "2140": "石鼓区",
    "2141": "蒸湘区",
    "2142": "南岳区",
    "2143": "衡阳县",
    "2144": "衡南县",
    "2145": "衡山县",
    "2146": "衡东县",
    "2147": "祁东县",
    "2148": "衡阳综合保税区",
    "2149": "湖南衡阳高新技术产业园区",
    "2150": "湖南衡阳松木经济开发区",
    "2151": "耒阳市",
    "2152": "常宁市"
  },
  "2153": {
    "2154": "市辖区",
    "2155": "双清区",
    "2156": "大祥区",
    "2157": "北塔区",
    "2158": "邵东县",
    "2159": "新邵县",
    "2160": "邵阳县",
    "2161": "隆回县",
    "2162": "洞口县",
    "2163": "绥宁县",
    "2164": "新宁县",
    "2165": "城步苗族自治县",
    "2166": "武冈市"
  },
  "2167": {
    "2168": "市辖区",
    "2169": "岳阳楼区",
    "2170": "云溪区",
    "2171": "君山区",
    "2172": "岳阳县",
    "2173": "华容县",
    "2174": "湘阴县",
    "2175": "平江县",
    "2176": "岳阳市屈原管理区",
    "2177": "汨罗市",
    "2178": "临湘市"
  },
  "2179": {
    "2180": "市辖区",
    "2181": "武陵区",
    "2182": "鼎城区",
    "2183": "安乡县",
    "2184": "汉寿县",
    "2185": "澧县",
    "2186": "临澧县",
    "2187": "桃源县",
    "2188": "石门县",
    "2189": "常德市西洞庭管理区",
    "2190": "津市市"
  },
  "2191": {
    "2192": "市辖区",
    "2193": "永定区",
    "2194": "武陵源区",
    "2195": "慈利县",
    "2196": "桑植县"
  },
  "2197": {
    "2198": "市辖区",
    "2199": "资阳区",
    "2200": "赫山区",
    "2201": "南县",
    "2202": "桃江县",
    "2203": "安化县",
    "2204": "益阳市大通湖管理区",
    "2205": "湖南益阳高新技术产业园区",
    "2206": "沅江市"
  },
  "2207": {
    "2208": "市辖区",
    "2209": "北湖区",
    "2210": "苏仙区",
    "2211": "桂阳县",
    "2212": "宜章县",
    "2213": "永兴县",
    "2214": "嘉禾县",
    "2215": "临武县",
    "2216": "汝城县",
    "2217": "桂东县",
    "2218": "安仁县",
    "2219": "资兴市"
  },
  "2220": {
    "2221": "市辖区",
    "2222": "零陵区",
    "2223": "冷水滩区",
    "2224": "祁阳县",
    "2225": "东安县",
    "2226": "双牌县",
    "2227": "道县",
    "2228": "江永县",
    "2229": "宁远县",
    "2230": "蓝山县",
    "2231": "新田县",
    "2232": "江华瑶族自治县",
    "2233": "永州经济技术开发区",
    "2234": "永州市金洞管理区",
    "2235": "永州市回龙圩管理区"
  },
  "2236": {
    "2237": "市辖区",
    "2238": "鹤城区",
    "2239": "中方县",
    "2240": "沅陵县",
    "2241": "辰溪县",
    "2242": "溆浦县",
    "2243": "会同县",
    "2244": "麻阳苗族自治县",
    "2245": "新晃侗族自治县",
    "2246": "芷江侗族自治县",
    "2247": "靖州苗族侗族自治县",
    "2248": "通道侗族自治县",
    "2249": "怀化市洪江管理区",
    "2250": "洪江市"
  },
  "2251": {
    "2252": "市辖区",
    "2253": "娄星区",
    "2254": "双峰县",
    "2255": "新化县",
    "2256": "冷水江市",
    "2257": "涟源市"
  },
  "2258": {
    "2259": "吉首市",
    "2260": "泸溪县",
    "2261": "凤凰县",
    "2262": "花垣县",
    "2263": "保靖县",
    "2264": "古丈县",
    "2265": "永顺县",
    "2266": "龙山县",
    "2267": "湖南吉首经济开发区",
    "2268": "湖南永顺经济开发区"
  },
  "2269": {
    "2270": "市辖区",
    "2271": "荔湾区",
    "2272": "越秀区",
    "2273": "海珠区",
    "2274": "天河区",
    "2275": "白云区",
    "2276": "黄埔区",
    "2277": "番禺区",
    "2278": "花都区",
    "2279": "南沙区",
    "2280": "从化区",
    "2281": "增城区"
  },
  "2282": {
    "2283": "市辖区",
    "2284": "武江区",
    "2285": "浈江区",
    "2286": "曲江区",
    "2287": "始兴县",
    "2288": "仁化县",
    "2289": "翁源县",
    "2290": "乳源瑶族自治县",
    "2291": "新丰县",
    "2292": "乐昌市",
    "2293": "南雄市"
  },
  "2294": {
    "2295": "市辖区",
    "2296": "罗湖区",
    "2297": "福田区",
    "2298": "南山区",
    "2299": "宝安区",
    "2300": "龙岗区",
    "2301": "盐田区",
    "2302": "龙华区",
    "2303": "坪山区",
    "2304": "光明区"
  },
  "2305": {
    "2306": "市辖区",
    "2307": "香洲区",
    "2308": "斗门区",
    "2309": "金湾区"
  },
  "2310": {
    "2311": "市辖区",
    "2312": "龙湖区",
    "2313": "金平区",
    "2314": "濠江区",
    "2315": "潮阳区",
    "2316": "潮南区",
    "2317": "澄海区",
    "2318": "南澳县"
  },
  "2319": {
    "2320": "市辖区",
    "2321": "禅城区",
    "2322": "南海区",
    "2323": "顺德区",
    "2324": "三水区",
    "2325": "高明区"
  },
  "2326": {
    "2327": "市辖区",
    "2328": "蓬江区",
    "2329": "江海区",
    "2330": "新会区",
    "2331": "台山市",
    "2332": "开平市",
    "2333": "鹤山市",
    "2334": "恩平市"
  },
  "2335": {
    "2336": "市辖区",
    "2337": "赤坎区",
    "2338": "霞山区",
    "2339": "坡头区",
    "2340": "麻章区",
    "2341": "遂溪县",
    "2342": "徐闻县",
    "2343": "廉江市",
    "2344": "雷州市",
    "2345": "吴川市"
  },
  "2346": {
    "2347": "市辖区",
    "2348": "茂南区",
    "2349": "电白区",
    "2350": "高州市",
    "2351": "化州市",
    "2352": "信宜市"
  },
  "2353": {
    "2354": "市辖区",
    "2355": "端州区",
    "2356": "鼎湖区",
    "2357": "高要区",
    "2358": "广宁县",
    "2359": "怀集县",
    "2360": "封开县",
    "2361": "德庆县",
    "2362": "四会市"
  },
  "2363": {
    "2364": "市辖区",
    "2365": "惠城区",
    "2366": "惠阳区",
    "2367": "博罗县",
    "2368": "惠东县",
    "2369": "龙门县"
  },
  "2370": {
    "2371": "市辖区",
    "2372": "梅江区",
    "2373": "梅县区",
    "2374": "大埔县",
    "2375": "丰顺县",
    "2376": "五华县",
    "2377": "平远县",
    "2378": "蕉岭县",
    "2379": "兴宁市"
  },
  "2380": {
    "2381": "市辖区",
    "2382": "城区",
    "2383": "海丰县",
    "2384": "陆河县",
    "2385": "陆丰市"
  },
  "2386": {
    "2387": "市辖区",
    "2388": "源城区",
    "2389": "紫金县",
    "2390": "龙川县",
    "2391": "连平县",
    "2392": "和平县",
    "2393": "东源县"
  },
  "2394": {
    "2395": "市辖区",
    "2396": "江城区",
    "2397": "阳东区",
    "2398": "阳西县",
    "2399": "阳春市"
  },
  "2400": {
    "2401": "市辖区",
    "2402": "清城区",
    "2403": "清新区",
    "2404": "佛冈县",
    "2405": "阳山县",
    "2406": "连山壮族瑶族自治县",
    "2407": "连南瑶族自治县",
    "2408": "英德市",
    "2409": "连州市"
  },
  "2410": {
    "2411": "东城街道办事处",
    "2412": "南城街道办事处",
    "2413": "万江街道办事处",
    "2414": "莞城街道办事处",
    "2415": "石碣镇",
    "2416": "石龙镇",
    "2417": "茶山镇",
    "2418": "石排镇",
    "2419": "企石镇",
    "2420": "横沥镇",
    "2421": "桥头镇",
    "2422": "谢岗镇",
    "2423": "东坑镇",
    "2424": "常平镇",
    "2425": "寮步镇",
    "2426": "樟木头镇",
    "2427": "大朗镇",
    "2428": "黄江镇",
    "2429": "清溪镇",
    "2430": "塘厦镇",
    "2431": "凤岗镇",
    "2432": "大岭山镇",
    "2433": "长安镇",
    "2434": "虎门镇",
    "2435": "厚街镇",
    "2436": "沙田镇",
    "2437": "道滘镇",
    "2438": "洪梅镇",
    "2439": "麻涌镇",
    "2440": "望牛墩镇",
    "2441": "中堂镇",
    "2442": "高埗镇",
    "2443": "松山湖管委会",
    "2444": "东莞港",
    "2445": "东莞生态园"
  },
  "2446": {
    "2447": "石岐区街道办事处",
    "2448": "东区街道办事处",
    "2449": "火炬开发区街道办事处",
    "2450": "西区街道办事处",
    "2451": "南区街道办事处",
    "2452": "五桂山街道办事处",
    "2453": "小榄镇",
    "2454": "黄圃镇",
    "2455": "民众镇",
    "2456": "东凤镇",
    "2457": "东升镇",
    "2458": "古镇镇",
    "2459": "沙溪镇",
    "2460": "坦洲镇",
    "2461": "港口镇",
    "2462": "三角镇",
    "2463": "横栏镇",
    "2464": "南头镇",
    "2465": "阜沙镇",
    "2466": "南朗镇",
    "2467": "三乡镇",
    "2468": "板芙镇",
    "2469": "大涌镇",
    "2470": "神湾镇"
  },
  "2471": {
    "2472": "市辖区",
    "2473": "湘桥区",
    "2474": "潮安区",
    "2475": "饶平县"
  },
  "2476": {
    "2477": "市辖区",
    "2478": "榕城区",
    "2479": "揭东区",
    "2480": "揭西县",
    "2481": "惠来县",
    "2482": "普宁市"
  },
  "2483": {
    "2484": "市辖区",
    "2485": "云城区",
    "2486": "云安区",
    "2487": "新兴县",
    "2488": "郁南县",
    "2489": "罗定市"
  },
  "2490": {
    "2491": "市辖区",
    "2492": "兴宁区",
    "2493": "青秀区",
    "2494": "江南区",
    "2495": "西乡塘区",
    "2496": "良庆区",
    "2497": "邕宁区",
    "2498": "武鸣区",
    "2499": "隆安县",
    "2500": "马山县",
    "2501": "上林县",
    "2502": "宾阳县",
    "2503": "横县"
  },
  "2504": {
    "2505": "市辖区",
    "2506": "城中区",
    "2507": "鱼峰区",
    "2508": "柳南区",
    "2509": "柳北区",
    "2510": "柳江区",
    "2511": "柳城县",
    "2512": "鹿寨县",
    "2513": "融安县",
    "2514": "融水苗族自治县",
    "2515": "三江侗族自治县"
  },
  "2516": {
    "2517": "市辖区",
    "2518": "秀峰区",
    "2519": "叠彩区",
    "2520": "象山区",
    "2521": "七星区",
    "2522": "雁山区",
    "2523": "临桂区",
    "2524": "阳朔县",
    "2525": "灵川县",
    "2526": "全州县",
    "2527": "兴安县",
    "2528": "永福县",
    "2529": "灌阳县",
    "2530": "龙胜各族自治县",
    "2531": "资源县",
    "2532": "平乐县",
    "2533": "恭城瑶族自治县",
    "2534": "荔浦市"
  },
  "2535": {
    "2536": "市辖区",
    "2537": "万秀区",
    "2538": "长洲区",
    "2539": "龙圩区",
    "2540": "苍梧县",
    "2541": "藤县",
    "2542": "蒙山县",
    "2543": "岑溪市"
  },
  "2544": {
    "2545": "市辖区",
    "2546": "海城区",
    "2547": "银海区",
    "2548": "铁山港区",
    "2549": "合浦县"
  },
  "2550": {
    "2551": "市辖区",
    "2552": "港口区",
    "2553": "防城区",
    "2554": "上思县",
    "2555": "东兴市"
  },
  "2556": {
    "2557": "市辖区",
    "2558": "钦南区",
    "2559": "钦北区",
    "2560": "灵山县",
    "2561": "浦北县"
  },
  "2562": {
    "2563": "市辖区",
    "2564": "港北区",
    "2565": "港南区",
    "2566": "覃塘区",
    "2567": "平南县",
    "2568": "桂平市"
  },
  "2569": {
    "2570": "市辖区",
    "2571": "玉州区",
    "2572": "福绵区",
    "2573": "容县",
    "2574": "陆川县",
    "2575": "博白县",
    "2576": "兴业县",
    "2577": "北流市"
  },
  "2578": {
    "2579": "市辖区",
    "2580": "右江区",
    "2581": "田阳县",
    "2582": "田东县",
    "2583": "平果县",
    "2584": "德保县",
    "2585": "那坡县",
    "2586": "凌云县",
    "2587": "乐业县",
    "2588": "田林县",
    "2589": "西林县",
    "2590": "隆林各族自治县",
    "2591": "靖西市"
  },
  "2592": {
    "2593": "市辖区",
    "2594": "八步区",
    "2595": "平桂区",
    "2596": "昭平县",
    "2597": "钟山县",
    "2598": "富川瑶族自治县"
  },
  "2599": {
    "2600": "市辖区",
    "2601": "金城江区",
    "2602": "宜州区",
    "2603": "南丹县",
    "2604": "天峨县",
    "2605": "凤山县",
    "2606": "东兰县",
    "2607": "罗城仫佬族自治县",
    "2608": "环江毛南族自治县",
    "2609": "巴马瑶族自治县",
    "2610": "都安瑶族自治县",
    "2611": "大化瑶族自治县"
  },
  "2612": {
    "2613": "市辖区",
    "2614": "兴宾区",
    "2615": "忻城县",
    "2616": "象州县",
    "2617": "武宣县",
    "2618": "金秀瑶族自治县",
    "2619": "合山市"
  },
  "2620": {
    "2621": "市辖区",
    "2622": "江州区",
    "2623": "扶绥县",
    "2624": "宁明县",
    "2625": "龙州县",
    "2626": "大新县",
    "2627": "天等县",
    "2628": "凭祥市"
  },
  "2629": {
    "2630": "市辖区",
    "2631": "秀英区",
    "2632": "龙华区",
    "2633": "琼山区",
    "2634": "美兰区"
  },
  "2635": {
    "2636": "市辖区",
    "2637": "海棠区",
    "2638": "吉阳区",
    "2639": "天涯区",
    "2640": "崖州区"
  },
  "2641": {
    "2642": "西沙群岛",
    "2643": "南沙群岛",
    "2644": "中沙群岛的岛礁及其海域"
  },
  "2645": {
    "2646": "那大镇",
    "2647": "和庆镇",
    "2648": "南丰镇",
    "2649": "大成镇",
    "2650": "雅星镇",
    "2651": "兰洋镇",
    "2652": "光村镇",
    "2653": "木棠镇",
    "2654": "海头镇",
    "2655": "峨蔓镇",
    "2656": "王五镇",
    "2657": "白马井镇",
    "2658": "中和镇",
    "2659": "排浦镇",
    "2660": "东成镇",
    "2661": "新州镇",
    "2662": "洋浦经济开发区",
    "2663": "华南热作学院"
  },
  "2664": {
    "2665": "五指山市",
    "2666": "琼海市",
    "2667": "文昌市",
    "2668": "万宁市",
    "2669": "东方市",
    "2670": "定安县",
    "2671": "屯昌县",
    "2672": "澄迈县",
    "2673": "临高县",
    "2674": "白沙黎族自治县",
    "2675": "昌江黎族自治县",
    "2676": "乐东黎族自治县",
    "2677": "陵水黎族自治县",
    "2678": "保亭黎族苗族自治县",
    "2679": "琼中黎族苗族自治县"
  },
  "2680": {
    "2681": "万州区",
    "2682": "涪陵区",
    "2683": "渝中区",
    "2684": "大渡口区",
    "2685": "江北区",
    "2686": "沙坪坝区",
    "2687": "九龙坡区",
    "2688": "南岸区",
    "2689": "北碚区",
    "2690": "綦江区",
    "2691": "大足区",
    "2692": "渝北区",
    "2693": "巴南区",
    "2694": "黔江区",
    "2695": "长寿区",
    "2696": "江津区",
    "2697": "合川区",
    "2698": "永川区",
    "2699": "南川区",
    "2700": "璧山区",
    "2701": "铜梁区",
    "2702": "潼南区",
    "2703": "荣昌区",
    "2704": "开州区",
    "2705": "梁平区",
    "2706": "武隆区"
  },
  "2707": {
    "2708": "城口县",
    "2709": "丰都县",
    "2710": "垫江县",
    "2711": "忠县",
    "2712": "云阳县",
    "2713": "奉节县",
    "2714": "巫山县",
    "2715": "巫溪县",
    "2716": "石柱土家族自治县",
    "2717": "秀山土家族苗族自治县",
    "2718": "酉阳土家族苗族自治县",
    "2719": "彭水苗族土家族自治县"
  },
  "2720": {
    "2721": "市辖区",
    "2722": "锦江区",
    "2723": "青羊区",
    "2724": "金牛区",
    "2725": "武侯区",
    "2726": "成华区",
    "2727": "龙泉驿区",
    "2728": "青白江区",
    "2729": "新都区",
    "2730": "温江区",
    "2731": "双流区",
    "2732": "郫都区",
    "2733": "金堂县",
    "2734": "大邑县",
    "2735": "蒲江县",
    "2736": "新津县",
    "2737": "都江堰市",
    "2738": "彭州市",
    "2739": "邛崃市",
    "2740": "崇州市",
    "2741": "简阳市"
  },
  "2742": {
    "2743": "市辖区",
    "2744": "自流井区",
    "2745": "贡井区",
    "2746": "大安区",
    "2747": "沿滩区",
    "2748": "荣县",
    "2749": "富顺县"
  },
  "2750": {
    "2751": "市辖区",
    "2752": "东区",
    "2753": "西区",
    "2754": "仁和区",
    "2755": "米易县",
    "2756": "盐边县"
  },
  "2757": {
    "2758": "市辖区",
    "2759": "江阳区",
    "2760": "纳溪区",
    "2761": "龙马潭区",
    "2762": "泸县",
    "2763": "合江县",
    "2764": "叙永县",
    "2765": "古蔺县"
  },
  "2766": {
    "2767": "市辖区",
    "2768": "旌阳区",
    "2769": "罗江区",
    "2770": "中江县",
    "2771": "广汉市",
    "2772": "什邡市",
    "2773": "绵竹市"
  },
  "2774": {
    "2775": "市辖区",
    "2776": "涪城区",
    "2777": "游仙区",
    "2778": "安州区",
    "2779": "三台县",
    "2780": "盐亭县",
    "2781": "梓潼县",
    "2782": "北川羌族自治县",
    "2783": "平武县",
    "2784": "江油市"
  },
  "2785": {
    "2786": "市辖区",
    "2787": "利州区",
    "2788": "昭化区",
    "2789": "朝天区",
    "2790": "旺苍县",
    "2791": "青川县",
    "2792": "剑阁县",
    "2793": "苍溪县"
  },
  "2794": {
    "2795": "市辖区",
    "2796": "船山区",
    "2797": "安居区",
    "2798": "蓬溪县",
    "2799": "射洪县",
    "2800": "大英县"
  },
  "2801": {
    "2802": "市辖区",
    "2803": "市中区",
    "2804": "东兴区",
    "2805": "威远县",
    "2806": "资中县",
    "2807": "内江经济开发区",
    "2808": "隆昌市"
  },
  "2809": {
    "2810": "市辖区",
    "2811": "市中区",
    "2812": "沙湾区",
    "2813": "五通桥区",
    "2814": "金口河区",
    "2815": "犍为县",
    "2816": "井研县",
    "2817": "夹江县",
    "2818": "沐川县",
    "2819": "峨边彝族自治县",
    "2820": "马边彝族自治县",
    "2821": "峨眉山市"
  },
  "2822": {
    "2823": "市辖区",
    "2824": "顺庆区",
    "2825": "高坪区",
    "2826": "嘉陵区",
    "2827": "南部县",
    "2828": "营山县",
    "2829": "蓬安县",
    "2830": "仪陇县",
    "2831": "西充县",
    "2832": "阆中市"
  },
  "2833": {
    "2834": "市辖区",
    "2835": "东坡区",
    "2836": "彭山区",
    "2837": "仁寿县",
    "2838": "洪雅县",
    "2839": "丹棱县",
    "2840": "青神县"
  },
  "2841": {
    "2842": "市辖区",
    "2843": "翠屏区",
    "2844": "南溪区",
    "2845": "叙州区",
    "2846": "江安县",
    "2847": "长宁县",
    "2848": "高县",
    "2849": "珙县",
    "2850": "筠连县",
    "2851": "兴文县",
    "2852": "屏山县"
  },
  "2853": {
    "2854": "市辖区",
    "2855": "广安区",
    "2856": "前锋区",
    "2857": "岳池县",
    "2858": "武胜县",
    "2859": "邻水县",
    "2860": "华蓥市"
  },
  "2861": {
    "2862": "市辖区",
    "2863": "通川区",
    "2864": "达川区",
    "2865": "宣汉县",
    "2866": "开江县",
    "2867": "大竹县",
    "2868": "渠县",
    "2869": "达州经济开发区",
    "2870": "万源市"
  },
  "2871": {
    "2872": "市辖区",
    "2873": "雨城区",
    "2874": "名山区",
    "2875": "荥经县",
    "2876": "汉源县",
    "2877": "石棉县",
    "2878": "天全县",
    "2879": "芦山县",
    "2880": "宝兴县"
  },
  "2881": {
    "2882": "市辖区",
    "2883": "巴州区",
    "2884": "恩阳区",
    "2885": "通江县",
    "2886": "南江县",
    "2887": "平昌县",
    "2888": "巴中经济开发区"
  },
  "2889": {
    "2890": "市辖区",
    "2891": "雁江区",
    "2892": "安岳县",
    "2893": "乐至县"
  },
  "2894": {
    "2895": "马尔康市",
    "2896": "汶川县",
    "2897": "理县",
    "2898": "茂县",
    "2899": "松潘县",
    "2900": "九寨沟县",
    "2901": "金川县",
    "2902": "小金县",
    "2903": "黑水县",
    "2904": "壤塘县",
    "2905": "阿坝县",
    "2906": "若尔盖县",
    "2907": "红原县"
  },
  "2908": {
    "2909": "康定市",
    "2910": "泸定县",
    "2911": "丹巴县",
    "2912": "九龙县",
    "2913": "雅江县",
    "2914": "道孚县",
    "2915": "炉霍县",
    "2916": "甘孜县",
    "2917": "新龙县",
    "2918": "德格县",
    "2919": "白玉县",
    "2920": "石渠县",
    "2921": "色达县",
    "2922": "理塘县",
    "2923": "巴塘县",
    "2924": "乡城县",
    "2925": "稻城县",
    "2926": "得荣县"
  },
  "2927": {
    "2928": "西昌市",
    "2929": "木里藏族自治县",
    "2930": "盐源县",
    "2931": "德昌县",
    "2932": "会理县",
    "2933": "会东县",
    "2934": "宁南县",
    "2935": "普格县",
    "2936": "布拖县",
    "2937": "金阳县",
    "2938": "昭觉县",
    "2939": "喜德县",
    "2940": "冕宁县",
    "2941": "越西县",
    "2942": "甘洛县",
    "2943": "美姑县",
    "2944": "雷波县"
  },
  "2945": {
    "2946": "市辖区",
    "2947": "南明区",
    "2948": "云岩区",
    "2949": "花溪区",
    "2950": "乌当区",
    "2951": "白云区",
    "2952": "观山湖区",
    "2953": "开阳县",
    "2954": "息烽县",
    "2955": "修文县",
    "2956": "清镇市"
  },
  "2957": {
    "2958": "钟山区",
    "2959": "六枝特区",
    "2960": "水城县",
    "2961": "盘州市"
  },
  "2962": {
    "2963": "市辖区",
    "2964": "红花岗区",
    "2965": "汇川区",
    "2966": "播州区",
    "2967": "桐梓县",
    "2968": "绥阳县",
    "2969": "正安县",
    "2970": "道真仡佬族苗族自治县",
    "2971": "务川仡佬族苗族自治县",
    "2972": "凤冈县",
    "2973": "湄潭县",
    "2974": "余庆县",
    "2975": "习水县",
    "2976": "赤水市",
    "2977": "仁怀市"
  },
  "2978": {
    "2979": "市辖区",
    "2980": "西秀区",
    "2981": "平坝区",
    "2982": "普定县",
    "2983": "镇宁布依族苗族自治县",
    "2984": "关岭布依族苗族自治县",
    "2985": "紫云苗族布依族自治县"
  },
  "2986": {
    "2987": "市辖区",
    "2988": "七星关区",
    "2989": "大方县",
    "2990": "黔西县",
    "2991": "金沙县",
    "2992": "织金县",
    "2993": "纳雍县",
    "2994": "威宁彝族回族苗族自治县",
    "2995": "赫章县"
  },
  "2996": {
    "2997": "市辖区",
    "2998": "碧江区",
    "2999": "万山区",
    "3000": "江口县",
    "3001": "玉屏侗族自治县",
    "3002": "石阡县",
    "3003": "思南县",
    "3004": "印江土家族苗族自治县",
    "3005": "德江县",
    "3006": "沿河土家族自治县",
    "3007": "松桃苗族自治县"
  },
  "3008": {
    "3009": "兴义市",
    "3010": "兴仁市",
    "3011": "普安县",
    "3012": "晴隆县",
    "3013": "贞丰县",
    "3014": "望谟县",
    "3015": "册亨县",
    "3016": "安龙县"
  },
  "3017": {
    "3018": "凯里市",
    "3019": "黄平县",
    "3020": "施秉县",
    "3021": "三穗县",
    "3022": "镇远县",
    "3023": "岑巩县",
    "3024": "天柱县",
    "3025": "锦屏县",
    "3026": "剑河县",
    "3027": "台江县",
    "3028": "黎平县",
    "3029": "榕江县",
    "3030": "从江县",
    "3031": "雷山县",
    "3032": "麻江县",
    "3033": "丹寨县"
  },
  "3034": {
    "3035": "都匀市",
    "3036": "福泉市",
    "3037": "荔波县",
    "3038": "贵定县",
    "3039": "瓮安县",
    "3040": "独山县",
    "3041": "平塘县",
    "3042": "罗甸县",
    "3043": "长顺县",
    "3044": "龙里县",
    "3045": "惠水县",
    "3046": "三都水族自治县"
  },
  "3047": {
    "3048": "市辖区",
    "3049": "五华区",
    "3050": "盘龙区",
    "3051": "官渡区",
    "3052": "西山区",
    "3053": "东川区",
    "3054": "呈贡区",
    "3055": "晋宁区",
    "3056": "富民县",
    "3057": "宜良县",
    "3058": "石林彝族自治县",
    "3059": "嵩明县",
    "3060": "禄劝彝族苗族自治县",
    "3061": "寻甸回族彝族自治县",
    "3062": "安宁市"
  },
  "3063": {
    "3064": "市辖区",
    "3065": "麒麟区",
    "3066": "沾益区",
    "3067": "马龙区",
    "3068": "陆良县",
    "3069": "师宗县",
    "3070": "罗平县",
    "3071": "富源县",
    "3072": "会泽县",
    "3073": "宣威市"
  },
  "3074": {
    "3075": "市辖区",
    "3076": "红塔区",
    "3077": "江川区",
    "3078": "澄江县",
    "3079": "通海县",
    "3080": "华宁县",
    "3081": "易门县",
    "3082": "峨山彝族自治县",
    "3083": "新平彝族傣族自治县",
    "3084": "元江哈尼族彝族傣族自治县"
  },
  "3085": {
    "3086": "市辖区",
    "3087": "隆阳区",
    "3088": "施甸县",
    "3089": "龙陵县",
    "3090": "昌宁县",
    "3091": "腾冲市"
  },
  "3092": {
    "3093": "市辖区",
    "3094": "昭阳区",
    "3095": "鲁甸县",
    "3096": "巧家县",
    "3097": "盐津县",
    "3098": "大关县",
    "3099": "永善县",
    "3100": "绥江县",
    "3101": "镇雄县",
    "3102": "彝良县",
    "3103": "威信县",
    "3104": "水富市"
  },
  "3105": {
    "3106": "市辖区",
    "3107": "古城区",
    "3108": "玉龙纳西族自治县",
    "3109": "永胜县",
    "3110": "华坪县",
    "3111": "宁蒗彝族自治县"
  },
  "3112": {
    "3113": "市辖区",
    "3114": "思茅区",
    "3115": "宁洱哈尼族彝族自治县",
    "3116": "墨江哈尼族自治县",
    "3117": "景东彝族自治县",
    "3118": "景谷傣族彝族自治县",
    "3119": "镇沅彝族哈尼族拉祜族自治县",
    "3120": "江城哈尼族彝族自治县",
    "3121": "孟连傣族拉祜族佤族自治县",
    "3122": "澜沧拉祜族自治县",
    "3123": "西盟佤族自治县"
  },
  "3124": {
    "3125": "市辖区",
    "3126": "临翔区",
    "3127": "凤庆县",
    "3128": "云县",
    "3129": "永德县",
    "3130": "镇康县",
    "3131": "双江拉祜族佤族布朗族傣族自治县",
    "3132": "耿马傣族佤族自治县",
    "3133": "沧源佤族自治县"
  },
  "3134": {
    "3135": "楚雄市",
    "3136": "双柏县",
    "3137": "牟定县",
    "3138": "南华县",
    "3139": "姚安县",
    "3140": "大姚县",
    "3141": "永仁县",
    "3142": "元谋县",
    "3143": "武定县",
    "3144": "禄丰县"
  },
  "3145": {
    "3146": "个旧市",
    "3147": "开远市",
    "3148": "蒙自市",
    "3149": "弥勒市",
    "3150": "屏边苗族自治县",
    "3151": "建水县",
    "3152": "石屏县",
    "3153": "泸西县",
    "3154": "元阳县",
    "3155": "红河县",
    "3156": "金平苗族瑶族傣族自治县",
    "3157": "绿春县",
    "3158": "河口瑶族自治县"
  },
  "3159": {
    "3160": "文山市",
    "3161": "砚山县",
    "3162": "西畴县",
    "3163": "麻栗坡县",
    "3164": "马关县",
    "3165": "丘北县",
    "3166": "广南县",
    "3167": "富宁县"
  },
  "3168": {
    "3169": "景洪市",
    "3170": "勐海县",
    "3171": "勐腊县"
  },
  "3172": {
    "3173": "大理市",
    "3174": "漾濞彝族自治县",
    "3175": "祥云县",
    "3176": "宾川县",
    "3177": "弥渡县",
    "3178": "南涧彝族自治县",
    "3179": "巍山彝族回族自治县",
    "3180": "永平县",
    "3181": "云龙县",
    "3182": "洱源县",
    "3183": "剑川县",
    "3184": "鹤庆县"
  },
  "3185": {
    "3186": "瑞丽市",
    "3187": "芒市",
    "3188": "梁河县",
    "3189": "盈江县",
    "3190": "陇川县"
  },
  "3191": {
    "3192": "泸水市",
    "3193": "福贡县",
    "3194": "贡山独龙族怒族自治县",
    "3195": "兰坪白族普米族自治县"
  },
  "3196": {
    "3197": "香格里拉市",
    "3198": "德钦县",
    "3199": "维西傈僳族自治县"
  },
  "3200": {
    "3201": "市辖区",
    "3202": "城关区",
    "3203": "堆龙德庆区",
    "3204": "达孜区",
    "3205": "林周县",
    "3206": "当雄县",
    "3207": "尼木县",
    "3208": "曲水县",
    "3209": "墨竹工卡县",
    "3210": "格尔木藏青工业园区",
    "3211": "拉萨经济技术开发区",
    "3212": "西藏文化旅游创意园区",
    "3213": "达孜工业园区"
  },
  "3214": {
    "3215": "桑珠孜区",
    "3216": "南木林县",
    "3217": "江孜县",
    "3218": "定日县",
    "3219": "萨迦县",
    "3220": "拉孜县",
    "3221": "昂仁县",
    "3222": "谢通门县",
    "3223": "白朗县",
    "3224": "仁布县",
    "3225": "康马县",
    "3226": "定结县",
    "3227": "仲巴县",
    "3228": "亚东县",
    "3229": "吉隆县",
    "3230": "聂拉木县",
    "3231": "萨嘎县",
    "3232": "岗巴县"
  },
  "3233": {
    "3234": "卡若区",
    "3235": "江达县",
    "3236": "贡觉县",
    "3237": "类乌齐县",
    "3238": "丁青县",
    "3239": "察雅县",
    "3240": "八宿县",
    "3241": "左贡县",
    "3242": "芒康县",
    "3243": "洛隆县",
    "3244": "边坝县"
  },
  "3245": {
    "3246": "巴宜区",
    "3247": "工布江达县",
    "3248": "米林县",
    "3249": "墨脱县",
    "3250": "波密县",
    "3251": "察隅县",
    "3252": "朗县"
  },
  "3253": {
    "3254": "市辖区",
    "3255": "乃东区",
    "3256": "扎囊县",
    "3257": "贡嘎县",
    "3258": "桑日县",
    "3259": "琼结县",
    "3260": "曲松县",
    "3261": "措美县",
    "3262": "洛扎县",
    "3263": "加查县",
    "3264": "隆子县",
    "3265": "错那县",
    "3266": "浪卡子县"
  },
  "3267": {
    "3268": "色尼区",
    "3269": "嘉黎县",
    "3270": "比如县",
    "3271": "聂荣县",
    "3272": "安多县",
    "3273": "申扎县",
    "3274": "索县",
    "3275": "班戈县",
    "3276": "巴青县",
    "3277": "尼玛县",
    "3278": "双湖县"
  },
  "3279": {
    "3280": "普兰县",
    "3281": "札达县",
    "3282": "噶尔县",
    "3283": "日土县",
    "3284": "革吉县",
    "3285": "改则县",
    "3286": "措勤县"
  },
  "3287": {
    "3288": "市辖区",
    "3289": "新城区",
    "3290": "碑林区",
    "3291": "莲湖区",
    "3292": "灞桥区",
    "3293": "未央区",
    "3294": "雁塔区",
    "3295": "阎良区",
    "3296": "临潼区",
    "3297": "长安区",
    "3298": "高陵区",
    "3299": "鄠邑区",
    "3300": "蓝田县",
    "3301": "周至县"
  },
  "3302": {
    "3303": "市辖区",
    "3304": "王益区",
    "3305": "印台区",
    "3306": "耀州区",
    "3307": "宜君县"
  },
  "3308": {
    "3309": "市辖区",
    "3310": "渭滨区",
    "3311": "金台区",
    "3312": "陈仓区",
    "3313": "凤翔县",
    "3314": "岐山县",
    "3315": "扶风县",
    "3316": "眉县",
    "3317": "陇县",
    "3318": "千阳县",
    "3319": "麟游县",
    "3320": "凤县",
    "3321": "太白县"
  },
  "3322": {
    "3323": "市辖区",
    "3324": "秦都区",
    "3325": "杨陵区",
    "3326": "渭城区",
    "3327": "三原县",
    "3328": "泾阳县",
    "3329": "乾县",
    "3330": "礼泉县",
    "3331": "永寿县",
    "3332": "长武县",
    "3333": "旬邑县",
    "3334": "淳化县",
    "3335": "武功县",
    "3336": "兴平市",
    "3337": "彬州市"
  },
  "3338": {
    "3339": "市辖区",
    "3340": "临渭区",
    "3341": "华州区",
    "3342": "潼关县",
    "3343": "大荔县",
    "3344": "合阳县",
    "3345": "澄城县",
    "3346": "蒲城县",
    "3347": "白水县",
    "3348": "富平县",
    "3349": "韩城市",
    "3350": "华阴市"
  },
  "3351": {
    "3352": "市辖区",
    "3353": "宝塔区",
    "3354": "安塞区",
    "3355": "延长县",
    "3356": "延川县",
    "3357": "子长县",
    "3358": "志丹县",
    "3359": "吴起县",
    "3360": "甘泉县",
    "3361": "富县",
    "3362": "洛川县",
    "3363": "宜川县",
    "3364": "黄龙县",
    "3365": "黄陵县"
  },
  "3366": {
    "3367": "市辖区",
    "3368": "汉台区",
    "3369": "南郑区",
    "3370": "城固县",
    "3371": "洋县",
    "3372": "西乡县",
    "3373": "勉县",
    "3374": "宁强县",
    "3375": "略阳县",
    "3376": "镇巴县",
    "3377": "留坝县",
    "3378": "佛坪县"
  },
  "3379": {
    "3380": "市辖区",
    "3381": "榆阳区",
    "3382": "横山区",
    "3383": "府谷县",
    "3384": "靖边县",
    "3385": "定边县",
    "3386": "绥德县",
    "3387": "米脂县",
    "3388": "佳县",
    "3389": "吴堡县",
    "3390": "清涧县",
    "3391": "子洲县",
    "3392": "神木市"
  },
  "3393": {
    "3394": "市辖区",
    "3395": "汉滨区",
    "3396": "汉阴县",
    "3397": "石泉县",
    "3398": "宁陕县",
    "3399": "紫阳县",
    "3400": "岚皋县",
    "3401": "平利县",
    "3402": "镇坪县",
    "3403": "旬阳县",
    "3404": "白河县"
  },
  "3405": {
    "3406": "市辖区",
    "3407": "商州区",
    "3408": "洛南县",
    "3409": "丹凤县",
    "3410": "商南县",
    "3411": "山阳县",
    "3412": "镇安县",
    "3413": "柞水县"
  },
  "3414": {
    "3415": "市辖区",
    "3416": "城关区",
    "3417": "七里河区",
    "3418": "西固区",
    "3419": "安宁区",
    "3420": "红古区",
    "3421": "永登县",
    "3422": "皋兰县",
    "3423": "榆中县",
    "3424": "兰州新区"
  },
  "3425": {
    "3426": "市辖区"
  },
  "3427": {
    "3428": "市辖区",
    "3429": "金川区",
    "3430": "永昌县"
  },
  "3431": {
    "3432": "市辖区",
    "3433": "白银区",
    "3434": "平川区",
    "3435": "靖远县",
    "3436": "会宁县",
    "3437": "景泰县"
  },
  "3438": {
    "3439": "市辖区",
    "3440": "秦州区",
    "3441": "麦积区",
    "3442": "清水县",
    "3443": "秦安县",
    "3444": "甘谷县",
    "3445": "武山县",
    "3446": "张家川回族自治县"
  },
  "3447": {
    "3448": "市辖区",
    "3449": "凉州区",
    "3450": "民勤县",
    "3451": "古浪县",
    "3452": "天祝藏族自治县"
  },
  "3453": {
    "3454": "市辖区",
    "3455": "甘州区",
    "3456": "肃南裕固族自治县",
    "3457": "民乐县",
    "3458": "临泽县",
    "3459": "高台县",
    "3460": "山丹县"
  },
  "3461": {
    "3462": "市辖区",
    "3463": "崆峒区",
    "3464": "泾川县",
    "3465": "灵台县",
    "3466": "崇信县",
    "3467": "庄浪县",
    "3468": "静宁县",
    "3469": "华亭市"
  },
  "3470": {
    "3471": "市辖区",
    "3472": "肃州区",
    "3473": "金塔县",
    "3474": "瓜州县",
    "3475": "肃北蒙古族自治县",
    "3476": "阿克塞哈萨克族自治县",
    "3477": "玉门市",
    "3478": "敦煌市"
  },
  "3479": {
    "3480": "市辖区",
    "3481": "西峰区",
    "3482": "庆城县",
    "3483": "环县",
    "3484": "华池县",
    "3485": "合水县",
    "3486": "正宁县",
    "3487": "宁县",
    "3488": "镇原县"
  },
  "3489": {
    "3490": "市辖区",
    "3491": "安定区",
    "3492": "通渭县",
    "3493": "陇西县",
    "3494": "渭源县",
    "3495": "临洮县",
    "3496": "漳县",
    "3497": "岷县"
  },
  "3498": {
    "3499": "市辖区",
    "3500": "武都区",
    "3501": "成县",
    "3502": "文县",
    "3503": "宕昌县",
    "3504": "康县",
    "3505": "西和县",
    "3506": "礼县",
    "3507": "徽县",
    "3508": "两当县"
  },
  "3509": {
    "3510": "临夏市",
    "3511": "临夏县",
    "3512": "康乐县",
    "3513": "永靖县",
    "3514": "广河县",
    "3515": "和政县",
    "3516": "东乡族自治县",
    "3517": "积石山保安族东乡族撒拉族自治县"
  },
  "3518": {
    "3519": "合作市",
    "3520": "临潭县",
    "3521": "卓尼县",
    "3522": "舟曲县",
    "3523": "迭部县",
    "3524": "玛曲县",
    "3525": "碌曲县",
    "3526": "夏河县"
  },
  "3527": {
    "3528": "市辖区",
    "3529": "城东区",
    "3530": "城中区",
    "3531": "城西区",
    "3532": "城北区",
    "3533": "大通回族土族自治县",
    "3534": "湟中县",
    "3535": "湟源县"
  },
  "3536": {
    "3537": "乐都区",
    "3538": "平安区",
    "3539": "民和回族土族自治县",
    "3540": "互助土族自治县",
    "3541": "化隆回族自治县",
    "3542": "循化撒拉族自治县"
  },
  "3543": {
    "3544": "门源回族自治县",
    "3545": "祁连县",
    "3546": "海晏县",
    "3547": "刚察县"
  },
  "3548": {
    "3549": "同仁县",
    "3550": "尖扎县",
    "3551": "泽库县",
    "3552": "河南蒙古族自治县"
  },
  "3553": {
    "3554": "共和县",
    "3555": "同德县",
    "3556": "贵德县",
    "3557": "兴海县",
    "3558": "贵南县"
  },
  "3559": {
    "3560": "玛沁县",
    "3561": "班玛县",
    "3562": "甘德县",
    "3563": "达日县",
    "3564": "久治县",
    "3565": "玛多县"
  },
  "3566": {
    "3567": "玉树市",
    "3568": "杂多县",
    "3569": "称多县",
    "3570": "治多县",
    "3571": "囊谦县",
    "3572": "曲麻莱县"
  },
  "3573": {
    "3574": "格尔木市",
    "3575": "德令哈市",
    "3576": "茫崖市",
    "3577": "乌兰县",
    "3578": "都兰县",
    "3579": "天峻县",
    "3580": "大柴旦行政委员会"
  },
  "3581": {
    "3582": "市辖区",
    "3583": "兴庆区",
    "3584": "西夏区",
    "3585": "金凤区",
    "3586": "永宁县",
    "3587": "贺兰县",
    "3588": "灵武市"
  },
  "3589": {
    "3590": "市辖区",
    "3591": "大武口区",
    "3592": "惠农区",
    "3593": "平罗县"
  },
  "3594": {
    "3595": "市辖区",
    "3596": "利通区",
    "3597": "红寺堡区",
    "3598": "盐池县",
    "3599": "同心县",
    "3600": "青铜峡市"
  },
  "3601": {
    "3602": "市辖区",
    "3603": "原州区",
    "3604": "西吉县",
    "3605": "隆德县",
    "3606": "泾源县",
    "3607": "彭阳县"
  },
  "3608": {
    "3609": "市辖区",
    "3610": "沙坡头区",
    "3611": "中宁县",
    "3612": "海原县"
  },
  "3613": {
    "3614": "市辖区",
    "3615": "天山区",
    "3616": "沙依巴克区",
    "3617": "新市区",
    "3618": "水磨沟区",
    "3619": "头屯河区",
    "3620": "达坂城区",
    "3621": "米东区",
    "3622": "乌鲁木齐县",
    "3623": "乌鲁木齐经济技术开发区",
    "3624": "乌鲁木齐高新技术产业开发区"
  },
  "3625": {
    "3626": "市辖区",
    "3627": "独山子区",
    "3628": "克拉玛依区",
    "3629": "白碱滩区",
    "3630": "乌尔禾区"
  },
  "3631": {
    "3632": "高昌区",
    "3633": "鄯善县",
    "3634": "托克逊县"
  },
  "3635": {
    "3636": "伊州区",
    "3637": "巴里坤哈萨克自治县",
    "3638": "伊吾县"
  },
  "3639": {
    "3640": "昌吉市",
    "3641": "阜康市",
    "3642": "呼图壁县",
    "3643": "玛纳斯县",
    "3644": "奇台县",
    "3645": "吉木萨尔县",
    "3646": "木垒哈萨克自治县"
  },
  "3647": {
    "3648": "博乐市",
    "3649": "阿拉山口市",
    "3650": "精河县",
    "3651": "温泉县"
  },
  "3652": {
    "3653": "库尔勒市",
    "3654": "轮台县",
    "3655": "尉犁县",
    "3656": "若羌县",
    "3657": "且末县",
    "3658": "焉耆回族自治县",
    "3659": "和静县",
    "3660": "和硕县",
    "3661": "博湖县",
    "3662": "库尔勒经济技术开发区"
  },
  "3663": {
    "3664": "阿克苏市",
    "3665": "温宿县",
    "3666": "库车县",
    "3667": "沙雅县",
    "3668": "新和县",
    "3669": "拜城县",
    "3670": "乌什县",
    "3671": "阿瓦提县",
    "3672": "柯坪县"
  },
  "3673": {
    "3674": "阿图什市",
    "3675": "阿克陶县",
    "3676": "阿合奇县",
    "3677": "乌恰县"
  },
  "3678": {
    "3679": "喀什市",
    "3680": "疏附县",
    "3681": "疏勒县",
    "3682": "英吉沙县",
    "3683": "泽普县",
    "3684": "莎车县",
    "3685": "叶城县",
    "3686": "麦盖提县",
    "3687": "岳普湖县",
    "3688": "伽师县",
    "3689": "巴楚县",
    "3690": "塔什库尔干塔吉克自治县"
  },
  "3691": {
    "3692": "和田市",
    "3693": "和田县",
    "3694": "墨玉县",
    "3695": "皮山县",
    "3696": "洛浦县",
    "3697": "策勒县",
    "3698": "于田县",
    "3699": "民丰县"
  },
  "3700": {
    "3701": "伊宁市",
    "3702": "奎屯市",
    "3703": "霍尔果斯市",
    "3704": "伊宁县",
    "3705": "察布查尔锡伯自治县",
    "3706": "霍城县",
    "3707": "巩留县",
    "3708": "新源县",
    "3709": "昭苏县",
    "3710": "特克斯县",
    "3711": "尼勒克县"
  },
  "3712": {
    "3713": "塔城市",
    "3714": "乌苏市",
    "3715": "额敏县",
    "3716": "沙湾县",
    "3717": "托里县",
    "3718": "裕民县",
    "3719": "和布克赛尔蒙古自治县"
  },
  "3720": {
    "3721": "阿勒泰市",
    "3722": "布尔津县",
    "3723": "富蕴县",
    "3724": "福海县",
    "3725": "哈巴河县",
    "3726": "青河县",
    "3727": "吉木乃县"
  },
  "3728": {
    "3729": "石河子市",
    "3730": "阿拉尔市",
    "3731": "图木舒克市",
    "3732": "五家渠市",
    "3733": "铁门关市"
  }
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/DistrictPicker.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var DEFAULT_CODE = "0";
/* harmony default export */ var DistrictPickervue_type_script_lang_js_ = ({
  name: "DistrictPicker",
  props: {
    province: {
      type: String,
      default: ""
    },
    city: {
      type: String,
      default: ""
    },
    area: {
      type: String,
      default: ""
    },
    onlyProvince: {
      type: Boolean,
      default: false
    },
    hideArea: {
      type: Boolean,
      default: false
    }
  },
  created: function created() {
    this.DISTRICTS = districts;
    this.init();
  },
  methods: {
    init: function init() {
      this.getProvinces();
      this.currentProvinceName = this.province || this.default.provinceName;
      this.currentCityName = this.city || this.default.cityName;
      this.currentAreaName = this.area || this.default.areaName;
      var provinceObj = this.DISTRICTS[DEFAULT_CODE];

      for (var key in provinceObj) {
        if (provinceObj[key] === this.currentProvinceName) {
          var province = {
            id: key,
            name: provinceObj[key]
          };
          this.handleChooseProvince(province);
          var cityObj = this.DISTRICTS[province.id];

          for (var _key in cityObj) {
            if (cityObj[_key] === this.currentCityName) {
              var city = {
                id: _key,
                name: cityObj[_key]
              };
              this.handleChooseCity(city);
              break;
            }
          }

          break;
        }
      }
    },
    handleTabProvince: function handleTabProvince() {
      this.tab = 1;
      this.showCityTab = false;
      this.showAreaTab = false;
      this.resetCity();
      this.resetArea();
    },
    handleTabCity: function handleTabCity() {
      this.tab = 2;
      this.showCityTab = true;
      this.showAreaTab = true;
      this.resetArea();
    },
    handleChooseProvince: function handleChooseProvince(province) {
      this.currentProvinceName = province.name;
      this.currentProvinceId = province.id;
      this.selectedProvince = province;

      if (this.onlyProvince) {
        this.$emit("selected", province);
      } else {
        this.tab = 2;
        this.showCityTab = true;
        this.getCities(province.id);
      }
    },
    handleChooseCity: function handleChooseCity(city) {
      this.currentCityName = city.name;
      this.currentCityId = city.id;
      this.selectedCity = city;

      if (this.hideArea) {
        var selectedProvince = this.selectedProvince,
            selectedCity = this.selectedCity;
        var result = {
          "province": selectedProvince,
          "city": selectedCity
        };
        this.$emit("selected", result);
      } else {
        this.tab = 3;
        this.showAreaTab = true;
        this.getAreas(city.id);
      }
    },
    handleChooseArea: function handleChooseArea(area) {
      this.currentAreaName = area.name;
      this.currentAreaId = area.id;
      this.selectedArea = area;
      var selectedProvince = this.selectedProvince,
          selectedCity = this.selectedCity,
          selectedArea = this.selectedArea;
      var result = {
        "province": selectedProvince,
        "city": selectedCity,
        "area": selectedArea
      };
      this.$emit("selected", result);
    },
    getProvinces: function getProvinces() {
      var provinces = [];
      var provinceObj = this.DISTRICTS[DEFAULT_CODE];

      for (var key in provinceObj) {
        provinces.push({
          id: key,
          name: provinceObj[key]
        });
      }

      this.provinces = provinces;
    },
    getCities: function getCities(provinceId) {
      var cities = [];
      var cityObj = this.DISTRICTS[provinceId];

      for (var key in cityObj) {
        cities.push({
          id: key,
          name: cityObj[key]
        });
      }

      this.cities = cities;
    },
    getAreas: function getAreas(cityId) {
      var areas = [];
      var areaObj = this.DISTRICTS[cityId];

      for (var key in areaObj) {
        areas.push({
          id: key,
          name: areaObj[key]
        });
      }

      this.areas = areas;
    },
    resetCity: function resetCity() {
      this.currentCityName = this.default.cityName;
    },
    resetArea: function resetArea() {
      this.currentAreaName = this.default.areaName;
    }
  },
  data: function data() {
    return {
      default: {
        provinceName: "省",
        cityName: "市",
        areaName: "区"
      },
      provinces: [],
      cities: [],
      areas: [],
      currentProvinceName: "",
      currentCityName: "",
      currentAreaName: "",
      tab: 1,
      showCityTab: false,
      showAreaTab: false,
      DISTRICTS: null
    };
  }
});
// CONCATENATED MODULE: ./src/DistrictPicker.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_DistrictPickervue_type_script_lang_js_ = (DistrictPickervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/DistrictPicker.vue?vue&type=style&index=0&lang=css&
var DistrictPickervue_type_style_index_0_lang_css_ = __webpack_require__("e587");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/DistrictPicker.vue






/* normalize component */

var component = normalizeComponent(
  src_DistrictPickervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var DistrictPicker = (component.exports);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (DistrictPicker);



/***/ })

/******/ })["default"];
});
//# sourceMappingURL=districtpicker.umd.js.map