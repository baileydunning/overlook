/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/css/styles.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/css/styles.scss ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700;800&display=swap);", ""]);

// Module
exports.push([module.i, ".hidden {\n  display: none !important; }\n\n.flex, .flex-row, #room-information, .flex-column {\n  display: flex;\n  justify-content: space-around;\n  align-items: center; }\n\n.flex-row, #room-information {\n  flex-direction: row; }\n\n.flex-column {\n  flex-direction: column; }\n\nbutton {\n  background-color: #002c3d;\n  color: #f6f7f2;\n  font-size: 10px;\n  border-radius: 5%;\n  margin: 10px;\n  padding: 5px; }\n\nhtml {\n  margin: -9px; }\n  @media only screen and (min-width: 992px) {\n    html {\n      flex-wrap: wrap;\n      flex-direction: column !important; } }\n\nh1 {\n  font-size: 24px;\n  font-family: \"Nanum Gothic\", sans-serif; }\n\nh2 {\n  font-size: 20px;\n  font-family: \"Nanum Gothic\", sans-serif; }\n\nh3 {\n  font-size: 16px;\n  font-family: \"Nanum Gothic\", sans-serif; }\n\nh4 {\n  font-size: 14px;\n  font-family: \"Nanum Gothic\", sans-serif; }\n\np {\n  font-size: 12px;\n  font-family: \"Nanum Gothic\", sans-serif; }\n\nbody {\n  background-color: #75bbc2; }\n\nlabel {\n  font-family: \"Nanum Gothic\", sans-serif;\n  color: #f6f7f2;\n  margin: 0px 25px 0px 5px; }\n\n.header {\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: center;\n  height: 100px; }\n  .header h1 {\n    margin: 10px;\n    color: #002c3d;\n    font-size: 16px; }\n  .header input {\n    margin: 10px;\n    padding: 10px;\n    height: 20px;\n    width: 20px;\n    background-color: #f6f7f2;\n    border-radius: 50%; }\n  .header input:hover {\n    transition: all .2s ease-in-out;\n    transform: scale(1.2); }\n\n.navigation {\n  background-color: #bfa28d;\n  width: 100%;\n  height: auto;\n  justify-content: space-around;\n  align-items: center; }\n  .navigation input {\n    margin: 20px 0px 20px 0px;\n    background-color: #002c3d;\n    padding: 25px;\n    border-radius: 15%;\n    height: 30px;\n    width: 30px;\n    opacity: 0.9; }\n  .navigation input:hover {\n    cursor: pointer;\n    opacity: 1;\n    transition: all .3s ease-in-out;\n    transform: scale(1.1); }\n  .navigation input:focus {\n    outline: none;\n    opacity: 1;\n    transform: scale(1.1); }\n\n.modal {\n  display: none;\n  position: fixed;\n  z-index: 1;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 50px; }\n\n.modal-content {\n  text-align: center;\n  justify-content: center;\n  background-color: #f6f7f2;\n  margin: 15% auto;\n  padding: 20px;\n  box-shadow: 5px 5px 5px #002c3d;\n  width: 60%; }\n\n.close {\n  color: #002c3d;\n  float: right;\n  font-size: 28px;\n  font-weight: bold;\n  color: black; }\n  .close span:hover {\n    cursor: pointer !important; }\n\n.search-area {\n  height: 100px;\n  padding: 20px;\n  margin-top: 90px; }\n  .search-area .date-display {\n    color: #f6f7f2; }\n    .search-area .date-display input {\n      width: 150px;\n      height: 30px;\n      margin: 15px 15px 0px 15px; }\n\n.rooms-display {\n  background-color: #002c3d; }\n\n#roomType-filter {\n  justify-content: center;\n  flex-wrap: wrap; }\n\n.available-rooms-display {\n  background-color: #75bbc2;\n  flex-wrap: wrap !important; }\n\n#room-information {\n  justify-content: space-around; }\n\n.room-card {\n  display: flex;\n  background: #f6f7f2;\n  width: 320px;\n  height: auto;\n  margin: 15px;\n  box-shadow: 5px 5px 5px #002c3d;\n  text-align: center;\n  line-height: 0.1em; }\n  .room-card #bed-img {\n    width: 110px;\n    height: 80px; }\n  .room-card #bidet-img {\n    height: 30px;\n    width: auto; }\n  .room-card button {\n    width: 100px;\n    background: #002c3d;\n    color: #f6f7f2;\n    align-self: center;\n    margin: 15px; }\n\n#dashboard-button, #guest-directory-button, #booking-history-button, #see-rooms-button {\n  display: block;\n  height: 40px;\n  width: 50px;\n  border: 0;\n  object-fit: contain; }\n\n.user-booking-history, .guest-directory-display {\n  margin-top: 100px;\n  justify-content: space-between; }\n\n.booking-card {\n  border: 1px solid #002c3d;\n  background-color: #f6f7f2;\n  margin: 0px 30px 20px 30px;\n  flex-direction: column;\n  padding: 20px; }\n  .booking-card p {\n    font-size: 10px; }\n\n#show-all-guests button {\n  width: 100px;\n  background: #002c3d;\n  color: #f6f7f2;\n  align-self: center;\n  margin: 15px; }\n\n.previous-bookings-container, .current-bookings-container {\n  justify-content: flex-start;\n  align-self: flex-start; }\n\n#guest-booking-history {\n  line-height: 2; }\n\n.flip-box {\n  background-color: transparent;\n  width: 300px;\n  height: 200px;\n  perspective: 1000px;\n  padding: 20px; }\n\n.flip-box-inner {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  transition: transform 0.8s;\n  transform-style: preserve-3d; }\n\n.flip-box:hover .flip-box-inner {\n  transform: rotateY(180deg); }\n\n.flip-box-front, .flip-box-back {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  overflow: scroll; }\n\n.flip-box-front {\n  background-color: #f6f7f2;\n  color: #002c3d; }\n\n.flip-box-back {\n  background-color: #002c3d;\n  color: #f6f7f2;\n  transform: rotateY(180deg); }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/apiCall.js":
/*!************************!*\
  !*** ./src/apiCall.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ApiCall; });
class ApiCall {
  constructor(url, name) {
    this.url = url,
    this.name = name
  }

  getRequest() {
    return fetch(this.url)
    .then(response => response.json())
    .then(data => data = data[this.name])
    .catch(err => console.log(err))
  }

  postRequest(newPost, onSuccess) {
    return fetch(this.url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPost)
    })
    .then(response => response.json())
    .then(json => {
      console.log(json);
      onSuccess();
    })
    .catch(err => console.log(err))
  }

  deleteRequest(bookingID, onSuccess) {
    return fetch(this.url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bookingID)
    })
    .then(response => response.json())
    .then(json => {
      onSuccess(json);
      console.log(json);
    })
    .catch(err => console.log(err))
  }
}


/***/ }),

/***/ "./src/css/styles.scss":
/*!*****************************!*\
  !*** ./src/css/styles.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/lib/loader.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/css/styles.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/data-model/booking.js":
/*!***********************************!*\
  !*** ./src/data-model/booking.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Booking; });
class Booking {
  constructor(booking) {
    this.id = booking.id,
    this.userID = parseInt(booking.userID),
    this.date = new Date(booking.date).toDateString(),
    this.roomNumber = parseInt(booking.roomNumber),
    this.cost = parseInt(booking.cost) || null,
    this.roomServiceCharges = []
  }
}


/***/ }),

/***/ "./src/data-model/bookingService.js":
/*!******************************************!*\
  !*** ./src/data-model/bookingService.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BookingService; });
/* harmony import */ var _booking__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./booking */ "./src/data-model/booking.js");


class BookingService {
  constructor(bookingData) {
    this.bookingData = bookingData,
    this.bookingHistory = [],
    this.currentBookings = [],
    this.previousBookings = []
  }

  createBookingHistory() {
    this.bookingHistory = this.bookingData.reduce((allBookings, booking) => {
      allBookings.push(new _booking__WEBPACK_IMPORTED_MODULE_0__["default"](booking));
      return allBookings
    }, []);
  }

  sortBookingsByDate(today) {
    today = new Date(today);
    this.currentBookings = [];
    this.previousBookings = [];
    this.bookingHistory.forEach(booking => {
      booking.date = new Date(booking.date);
      if (booking.date >= today) {
        booking.status = 'current';
        this.currentBookings.push(booking);
      } else {
        booking.status = 'previous';
        this.previousBookings.push(booking)
      }
    })
    this.organizeBookings();
  }

  organizeBookings() {
    this.bookingHistory.sort((bookingA, bookingB) => {
      return bookingA.date > bookingB.date ? -1 : 1;
    })
    this.currentBookings.sort((bookingA, bookingB) => {
      return bookingA.date > bookingB.date ? -1 : 1;
    })
    this.previousBookings.sort((bookingA, bookingB) => {
      return bookingA.date > bookingB.date ? -1 : 1;
    })
  }

  filterBookingsByID(idInput) {
    return this.bookingHistory.filter(booking => {
      return booking.userID === idInput;
    })
  }
}


/***/ }),

/***/ "./src/data-model/hotel.js":
/*!*********************************!*\
  !*** ./src/data-model/hotel.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Hotel; });
/* harmony import */ var _room__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./room */ "./src/data-model/room.js");
/* harmony import */ var _userDirectory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userDirectory */ "./src/data-model/userDirectory.js");



class Hotel {
  constructor(userData, roomData, bookingData, date) {
    this.date = new Date(date).toDateString(),
    this.user = null,
    this.rawUserData = userData,
    this.rawRoomData = roomData,
    this.rawBookingData = bookingData,
    this.rooms = [],
    this.bookedRoomsToday = [],
    this.availableRoomsToday = []
  }

  launch() {
    this.createRoomRecord();
    this.updateBookings();
    this.returnTodayBookings();
    this.userDirectory = new _userDirectory__WEBPACK_IMPORTED_MODULE_1__["default"](this.rawUserData, this.rawBookingData)
    this.userDirectory.createGuestList();
  }

  createRoomRecord() {
    this.rooms = this.rawRoomData.reduce((allRooms, room) => {
      allRooms.push(new _room__WEBPACK_IMPORTED_MODULE_0__["default"](room));
      return allRooms
    }, []);
  }

  updateBookings() {
    this.rawBookingData = this.rawBookingData.map(booking => {
      this.rooms.forEach(room => {
        if (room.number === booking.roomNumber) {
          booking.roomNumber = room.number;
          booking.cost = room.costPerNight;
          booking.date = new Date(booking.date).toDateString();
        }
      })
      return booking;
    })
  }

  returnTodayBookings() {
    const todayBookings = this.rawBookingData.reduce((bookingsForDate, booking) => {
      booking.date = new Date(booking.date).toDateString()
      if (booking.date === this.date) {
        bookingsForDate.push(booking);
      }
      return bookingsForDate;
    }, []);
    this.returnAvailableRooms(todayBookings);
    this.bookedRoomsToday = todayBookings.map(booking => {
      const roomBooked = this.rooms.find(room => {
        return room.number === booking.roomNumber
      });
      return booking = {bookingInfo: {booking}, roomInfo: {roomBooked}}
    });
  }

  returnAvailableRooms(todayBookings) {
    const bookedRoomNumbers = todayBookings.map(bookedRoom => {
      return bookedRoom = bookedRoom.roomNumber;
    })

    this.availableRoomsToday = this.rooms.filter(room => {
      return !bookedRoomNumbers.includes(room.number)
    })

    this.percentRoomsBooked = parseInt(((this.rooms.length - this.availableRoomsToday.length) / this.rooms.length) * 100).toFixed(0);
  }

  calculateTotalRoomRevenue() {
    return this.bookedRoomsToday.reduce((totalRevenue, bookedRoom) => {
      if (bookedRoom.bookingInfo.booking.cost) {
        totalRevenue = totalRevenue += bookedRoom.bookingInfo.booking.cost;
      }
      return totalRevenue;
    }, 0)
  }

  filterByRoomType(input) {
    return this.availableRoomsToday.filter(room => {
      return room.roomType === input;
    })
  }
}


/***/ }),

/***/ "./src/data-model/manager.js":
/*!***********************************!*\
  !*** ./src/data-model/manager.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Manager; });
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user */ "./src/data-model/user.js");


class Manager extends _user__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(userData, bookingData) {
    super(userData, bookingData)
  }

  addBooking(userID, roomNumber, date, onSuccess) {
    let newBooking = {
      userID: userID,
      date: date,
      roomNumber: roomNumber
    }

    this.api.postRequest(newBooking, onSuccess);
  }
}


/***/ }),

/***/ "./src/data-model/room.js":
/*!********************************!*\
  !*** ./src/data-model/room.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Room; });
class Room {
  constructor(room) {
    this.number = parseInt(room.number),
    this.roomType = room.roomType,
    this.bidet = room.bidet,
    this.bedSize = room.bedSize,
    this.numBeds = parseInt(room.numBeds),
    this.costPerNight = parseInt(room.costPerNight)
  }
}


/***/ }),

/***/ "./src/data-model/user.js":
/*!********************************!*\
  !*** ./src/data-model/user.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return User; });
/* harmony import */ var _bookingService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bookingService */ "./src/data-model/bookingService.js");
/* harmony import */ var _apiCall_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../apiCall.js */ "./src/apiCall.js");



class User {
  constructor(userData, bookingData) {
    this.id = userData.id,
    this.name = userData.name,
    this.api = new _apiCall_js__WEBPACK_IMPORTED_MODULE_1__["default"]('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings', 'bookings'),
    this.bookingService = new _bookingService__WEBPACK_IMPORTED_MODULE_0__["default"](bookingData),
    this.bookingService.createBookingHistory()
	}

  returnTotalSpentOnRooms() {
    let totalSpentOnRooms = this.bookingService.previousBookings.reduce((totalSpent, booking) => {
      if (booking.cost) {
        totalSpent += booking.cost
      }
      return totalSpent;
    }, 0)

    return totalSpentOnRooms.toFixed(2);
  }

  returnBill() {
    let totalBill = this.bookingService.currentBookings.reduce((totalDue, booking) => {
      if (booking.cost) {
        totalDue += booking.cost
      }
      return totalDue;
    }, 0)

    return totalBill.toFixed(2);
  }

  addBooking(roomNumber, date, onSuccess) {
    let newBooking = {
      userID: this.id,
      date: date,
      roomNumber: roomNumber
    }

    this.api.postRequest(newBooking, onSuccess);
  }
}


/***/ }),

/***/ "./src/data-model/userDirectory.js":
/*!*****************************************!*\
  !*** ./src/data-model/userDirectory.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UserDirectory; });
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user */ "./src/data-model/user.js");
/* harmony import */ var _manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./manager */ "./src/data-model/manager.js");



class UserDirectory {
  constructor(userData, bookingData) {
    this.currentUser = null,
    this.rawUserData = userData,
    this.bookingData = bookingData,
    this.guestList = []
  }

  createGuestList() {
    this.guestList = this.rawUserData.reduce((allGuests, user) => {
      if (user !== undefined) {
        let userBookingData = this.bookingData.filter(booking => {
          return booking.userID === user.id
        })
        allGuests.push(new _user__WEBPACK_IMPORTED_MODULE_0__["default"](user, userBookingData));
      }
      return allGuests
    }, []);
    this.alphabetizeGuests();
  }

  alphabetizeGuests() {
    this.guestList = this.guestList.sort((guestA, guestB) => {
      return guestA.name > guestB.name ? -1 : 1;
    })
  }

  findGuest(userID) {
    return this.guestList.find(guest => {
      return guest.id === userID;
    })
  }

  searchGuests(nameInput) {
    nameInput = nameInput.toLowerCase();
    return this.guestList.filter(guest => {
      guest.name = guest.name.toLowerCase();
      return guest.name.includes(nameInput)
    })
  }

  filterBookingData(id) {
    return this.bookingData.filter(booking => {
      return booking.userID === id
    })
  }

  validateUser(id) {
    return (this.findGuest(id) !== undefined) ? true : false;
  }

  validatePassword(password) {
    return (password === 'overlook2020') ? true : false;
  }

  chooseUser(username, password) {
    username = username.toLowerCase();
    if (this.validatePassword(password) === true) {
      if (username === 'manager') {
        this.currentUser = new _manager__WEBPACK_IMPORTED_MODULE_1__["default"]({id: 0, name: 'Manager'}, this.bookingData);
        this.currentUser.type = 'manager';
        this.currentUser.bookingService.createBookingHistory();
        return 'manager';
      } else if (username.includes('customer')) {
        return this.loginGuest(username);
      }
    } else {
      return false;
    }
  }

  loginGuest(username) {
    let userID = parseInt(username.replace('customer', '').replace(/ /g, ""));
    if (this.validateUser(userID) === true) {
      let foundUser = this.findGuest(userID);
      let userBookingData = this.filterBookingData(userID);
      this.currentUser = new _user__WEBPACK_IMPORTED_MODULE_0__["default"](foundUser, userBookingData);
      this.currentUser.type = 'guest';
      this.currentUser.bookingService.createBookingHistory();
      return 'guest';
    } else {
      return false;
    }
  }
}


/***/ }),

/***/ "./src/elements.js":
/*!*************************!*\
  !*** ./src/elements.js ***!
  \*************************/
/*! exports provided: availableRoomsDisplay, calendar, guestDirectoryButton, guestsContainer, guestDirectoryDisplay, logoutButton, modal, passwordField, searchBarGuestDirectory, roomsDisplay, searchArea, userBookingHistory, userCurrentBookings, usernameField, userPreviousBookings, closeModal, roomFilter, searchBarBookingHistory, showAllGuestsButton, seeAllBookingsButton, userFilteredBookings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "availableRoomsDisplay", function() { return availableRoomsDisplay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calendar", function() { return calendar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guestDirectoryButton", function() { return guestDirectoryButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guestsContainer", function() { return guestsContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guestDirectoryDisplay", function() { return guestDirectoryDisplay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutButton", function() { return logoutButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modal", function() { return modal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "passwordField", function() { return passwordField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchBarGuestDirectory", function() { return searchBarGuestDirectory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "roomsDisplay", function() { return roomsDisplay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchArea", function() { return searchArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userBookingHistory", function() { return userBookingHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userCurrentBookings", function() { return userCurrentBookings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usernameField", function() { return usernameField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userPreviousBookings", function() { return userPreviousBookings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeModal", function() { return closeModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "roomFilter", function() { return roomFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchBarBookingHistory", function() { return searchBarBookingHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showAllGuestsButton", function() { return showAllGuestsButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "seeAllBookingsButton", function() { return seeAllBookingsButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userFilteredBookings", function() { return userFilteredBookings; });
const availableRoomsDisplay = document.querySelector('.available-rooms-display');
const calendar = document.querySelector('#calendar');
const guestDirectoryButton = document.querySelector('#guest-directory-button');
const guestsContainer = document.querySelector('.guests-container');
const guestDirectoryDisplay = document.querySelector('.guest-directory-display');
const logoutButton = document.querySelector('.logout-button');
const modal = document.querySelector('#modal');
const passwordField = document.querySelector('#password-field');
const searchBarGuestDirectory = document.querySelector('#search-guests-by-name');
const roomsDisplay = document.querySelector('.rooms-display');
const searchArea = document.querySelector('.search-area');
const userBookingHistory = document.querySelector('.user-booking-history');
const userCurrentBookings = document.querySelector('.current-bookings-container');
const usernameField = document.querySelector('#username-field');
const userPreviousBookings = document.querySelector('.previous-bookings-container');
const closeModal = document.querySelector('.close');
const roomFilter = document.querySelector('#roomType-filter');
const searchBarBookingHistory = document.querySelector('#booking-search');
const showAllGuestsButton = document.querySelector('#show-all-guests-button');
const seeAllBookingsButton = document.querySelector('#see-all-bookings-button');
const userFilteredBookings = document.querySelector('.filtered-bookings');


/***/ }),

/***/ "./src/images/bed.png":
/*!****************************!*\
  !*** ./src/images/bed.png ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "images/bed.png";

/***/ }),

/***/ "./src/images/bidet.png":
/*!******************************!*\
  !*** ./src/images/bidet.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "images/bidet.png";

/***/ }),

/***/ "./src/images/bookings-white.png":
/*!***************************************!*\
  !*** ./src/images/bookings-white.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "images/bookings-white.png";

/***/ }),

/***/ "./src/images/dashboard-white.png":
/*!****************************************!*\
  !*** ./src/images/dashboard-white.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "images/dashboard-white.png";

/***/ }),

/***/ "./src/images/logout.png":
/*!*******************************!*\
  !*** ./src/images/logout.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "images/logout.png";

/***/ }),

/***/ "./src/images/room-white.png":
/*!***********************************!*\
  !*** ./src/images/room-white.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "images/room-white.png";

/***/ }),

/***/ "./src/images/users-white.png":
/*!************************************!*\
  !*** ./src/images/users-white.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "images/users-white.png";

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _apiCall__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiCall */ "./src/apiCall.js");
/* harmony import */ var _data_model_hotel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data-model/hotel */ "./src/data-model/hotel.js");
/* harmony import */ var _data_model_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data-model/manager */ "./src/data-model/manager.js");
/* harmony import */ var _data_model_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data-model/user */ "./src/data-model/user.js");
/* harmony import */ var _css_styles_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./css/styles.scss */ "./src/css/styles.scss");
/* harmony import */ var _css_styles_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_css_styles_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _images_bed_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/bed.png */ "./src/images/bed.png");
/* harmony import */ var _images_bed_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_images_bed_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _images_bidet_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/bidet.png */ "./src/images/bidet.png");
/* harmony import */ var _images_bidet_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_images_bidet_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _images_logout_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/logout.png */ "./src/images/logout.png");
/* harmony import */ var _images_logout_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_images_logout_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _images_dashboard_white_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/dashboard-white.png */ "./src/images/dashboard-white.png");
/* harmony import */ var _images_dashboard_white_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_images_dashboard_white_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _images_users_white_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./images/users-white.png */ "./src/images/users-white.png");
/* harmony import */ var _images_users_white_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_images_users_white_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _images_bookings_white_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./images/bookings-white.png */ "./src/images/bookings-white.png");
/* harmony import */ var _images_bookings_white_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_images_bookings_white_png__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _images_room_white_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./images/room-white.png */ "./src/images/room-white.png");
/* harmony import */ var _images_room_white_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_images_room_white_png__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _elements_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./elements.js */ "./src/elements.js");














let today = new Date().toDateString();
let hotel;
let userApi;
let roomApi;
let bookingApi;

// EVENT LISTENERS

window.onload = instantiateApis();
window.onclick = () => {
  if (event.target === _elements_js__WEBPACK_IMPORTED_MODULE_12__["modal"]) {
    _elements_js__WEBPACK_IMPORTED_MODULE_12__["modal"].style.display = 'none';
  }
}

document.querySelector('#login-button').addEventListener('click', () => {
  loginUser(_elements_js__WEBPACK_IMPORTED_MODULE_12__["usernameField"].value, _elements_js__WEBPACK_IMPORTED_MODULE_12__["passwordField"].value)
});

_elements_js__WEBPACK_IMPORTED_MODULE_12__["calendar"].addEventListener('change', (event) => {
  updateDate(event);
});

document.querySelector('#dashboard-button').addEventListener('click', () => {
  _elements_js__WEBPACK_IMPORTED_MODULE_12__["modal"].style.display = 'block';
})

_elements_js__WEBPACK_IMPORTED_MODULE_12__["closeModal"].addEventListener('click', () => {
  _elements_js__WEBPACK_IMPORTED_MODULE_12__["modal"].style.display = 'none';
})

_elements_js__WEBPACK_IMPORTED_MODULE_12__["searchBarGuestDirectory"].addEventListener('keyup', searchGuests);
_elements_js__WEBPACK_IMPORTED_MODULE_12__["searchBarBookingHistory"].addEventListener('search', searchBookings);
document.querySelector('#booking-history-button').addEventListener('click', showBookingHistory);
document.querySelector('#see-rooms-button').addEventListener('click', displayAvailableRooms);
_elements_js__WEBPACK_IMPORTED_MODULE_12__["guestDirectoryButton"].addEventListener('click', displayGuestDirectory);
_elements_js__WEBPACK_IMPORTED_MODULE_12__["roomFilter"].addEventListener('change', filterByRoomType);
_elements_js__WEBPACK_IMPORTED_MODULE_12__["showAllGuestsButton"].addEventListener('click', displayGuestDirectory);
_elements_js__WEBPACK_IMPORTED_MODULE_12__["seeAllBookingsButton"].addEventListener('click', showBookingHistory);
// API INSTANTIATION

function instantiateApis() {
  userApi = new _apiCall__WEBPACK_IMPORTED_MODULE_0__["default"]('https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users', 'users');
  roomApi = new _apiCall__WEBPACK_IMPORTED_MODULE_0__["default"]('https://fe-apps.herokuapp.com/api/v1/overlook/1904/rooms/rooms', 'rooms');
  bookingApi = new _apiCall__WEBPACK_IMPORTED_MODULE_0__["default"]('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings', 'bookings');
  fetchAllData();
}

function fetchAllData() {
  let userPromise = userApi.getRequest();
  let roomPromise = roomApi.getRequest();
  let bookingPromise = bookingApi.getRequest();

  Promise.all([userPromise, roomPromise, bookingPromise])
  .then(data => {
    hotel = new _data_model_hotel__WEBPACK_IMPORTED_MODULE_1__["default"](data[0], data[1], data[2], today);
  })
  .then(() => openHotel())
  .catch(error => {
    console.log(error);
    // alert('Sorry, we are unable to retrieve data at this time, please try again later.')
  })
}

// DATE HANDLING

function formatDate(today, joinBy) {
    today = new Date(today);
    let month = '' + (today.getMonth() + 1);
    let day = '' + today.getDate();
    let year = today.getFullYear();

    if (month.length < 2) {
      month = '0' + month
    }

    if (day.length < 2) {
      day = '0' + day
    }

    return [year, month, day].join(joinBy);
}

function updateDate(event) {
  today = new Date(event.target.value).toDateString();
  hotel.date = today;
  hotel.userDirectory.currentUser.bookingService.sortBookingsByDate(today);
  displayAvailableRooms();
}

// LAUNCH APP

function openHotel() {
  hotel.launch();
  let dashedDate = formatDate(today, '-');
  _elements_js__WEBPACK_IMPORTED_MODULE_12__["calendar"].setAttribute('value', `${dashedDate}`);
  _elements_js__WEBPACK_IMPORTED_MODULE_12__["calendar"].setAttribute('min', `${dashedDate}`);
}

function loginUser(username, password) {
  let userType = hotel.userDirectory.chooseUser(username, password);
  if (username && password && userType !== false) {
    hotel.userDirectory.currentUser.bookingService.sortBookingsByDate(today);
    updateDashboard();
    displayAvailableRooms();
  } else {
    alert('Invalid username and/or password')
  }
}

function updateDashboard() {
  let firstName = hotel.userDirectory.currentUser.name.split(' ');
  document.querySelector('#user-first-name').innerText = firstName[0];
  document.querySelector('.login-screen').classList.add('hidden');
  document.querySelector('.header').classList.remove('hidden');
  if (hotel.userDirectory.currentUser instanceof _data_model_manager__WEBPACK_IMPORTED_MODULE_2__["default"]) {
    document.querySelector('#daily-revenue').innerText = `${hotel.calculateTotalRoomRevenue()}`;
    document.querySelector('#percent-rooms-booked').innerText = `${hotel.percentRoomsBooked}%`;
    _elements_js__WEBPACK_IMPORTED_MODULE_12__["guestDirectoryButton"].classList.remove('hidden');
    _elements_js__WEBPACK_IMPORTED_MODULE_12__["searchBarBookingHistory"].classList.remove('hidden');
    document.querySelector('.manager-stats').classList.remove('hidden');
  } else if (hotel.userDirectory.currentUser instanceof _data_model_user__WEBPACK_IMPORTED_MODULE_3__["default"]) {
    document.querySelector('#total-user-bill').innerText = hotel.userDirectory.currentUser.returnBill();
    document.querySelector('#total-user-spent').innerText = hotel.userDirectory.currentUser.returnTotalSpentOnRooms();
    document.querySelector('.guest-stats').classList.remove('hidden');
  }
}

// AVAILABLE ROOMS

function displayAvailableRooms() {
  hotel.returnTodayBookings();
  createRoomCards(hotel.availableRoomsToday);
  document.querySelector('#date-string').innerText = `Available Rooms: ${hotel.availableRoomsToday.length}`;
  _elements_js__WEBPACK_IMPORTED_MODULE_12__["userBookingHistory"].classList.add('hidden');
  _elements_js__WEBPACK_IMPORTED_MODULE_12__["guestDirectoryDisplay"].classList.add('hidden');
  _elements_js__WEBPACK_IMPORTED_MODULE_12__["roomsDisplay"].classList.remove('hidden');
}

function createRoomCards(rooms) {
  _elements_js__WEBPACK_IMPORTED_MODULE_12__["availableRoomsDisplay"].innerHTML = '';
  rooms.forEach(room => {
    let roomCard = `<div class="room-card flex-column" id="room-${room.number}">
    <h3>${room.roomType.toUpperCase()}</h3>
    <div id="room-information">
      <img src="./images/bed.png" alt="bed-img" id="bed-img">
      <div class="flex-row">
        <div class="flex-column">
          <p>Room Number: ${room.number}</p>
          <p>${room.numBeds} ${room.bedSize.toUpperCase()}</p>
          <p>$${room.costPerNight} per night</p>
        </div>
        ${checkRoomForBidet(room)}
      </div>
    </div>
    <div><button id="book-room-button-${room.number}" value="${room.number}" type="button" aria-label="book-room">Book Room</button>${checkManagerStatus(room)}</div>
    </div>`
    _elements_js__WEBPACK_IMPORTED_MODULE_12__["availableRoomsDisplay"].insertAdjacentHTML('afterbegin', roomCard);
  })
  if (rooms.length >= 1) {
    addEventListenersToRoomCards(rooms);
  }
}

function checkManagerStatus(room) {
  return hotel.userDirectory.currentUser instanceof _data_model_manager__WEBPACK_IMPORTED_MODULE_2__["default"] ? `<input type="text" placeholder="Enter Guest's ID" id="id-input-for-room-${room.number}"></input>` : ''
}

function checkRoomForBidet(room) {
  return (room.bidet === true) ? `<img src="./images/bidet.png" alt="bidet-img" id="bidet-img">` : ''
}

function addEventListenersToRoomCards(rooms) {
  rooms.forEach(room => {
    let bookRoomButton = document.querySelector(`#book-room-button-${room.number}`);
    bookRoomButton.addEventListener('click', bookRoom)
  })
}

function filterByRoomType() {
  let selection = document.getElementById('roomType-filter').elements['roomType-filter'].value;
  if (selection === 'all') {
    createRoomCards(hotel.availableRoomsToday)
  } else {
    let filteredRooms = hotel.filterByRoomType(selection);
    createRoomCards(filteredRooms);
  }
}

function bookRoom() {
  let onSuccess = () => {
    let updatedBookingData = bookingApi.getRequest()
    updatedBookingData.then(value => {
      hotel.rawBookingData = value;
    }).then(() => {
      updateBookingData();
      updateDashboard();
      displayAvailableRooms();
    })
  }
  let roomNumber = Number(event.target.getAttribute('value'));
  if (hotel.userDirectory.currentUser instanceof _data_model_manager__WEBPACK_IMPORTED_MODULE_2__["default"]) {
    let userIdField = document.querySelector(`#id-input-for-room-${roomNumber}`)
    if (userIdField.value !== '') {
      let userID = parseInt(userIdField.value);
      hotel.userDirectory.currentUser.addBooking(userID, roomNumber, formatDate(today, '/'), onSuccess);
    } else {
      alert('Please enter a User ID number to complete this booking.')
    }
  } else {
    hotel.userDirectory.currentUser.addBooking(roomNumber, formatDate(today, '/'), onSuccess);
  }
}

// BOOKING HISTORY

function showBookingHistory() {
  _elements_js__WEBPACK_IMPORTED_MODULE_12__["roomsDisplay"].classList.add('hidden');
  _elements_js__WEBPACK_IMPORTED_MODULE_12__["guestDirectoryDisplay"].classList.add('hidden');
  _elements_js__WEBPACK_IMPORTED_MODULE_12__["userBookingHistory"].classList.remove('hidden');
  _elements_js__WEBPACK_IMPORTED_MODULE_12__["seeAllBookingsButton"].classList.add('hidden');
  _elements_js__WEBPACK_IMPORTED_MODULE_12__["userFilteredBookings"].innerHTML = '';
  displayBookings(hotel.userDirectory.currentUser.bookingService.currentBookings, _elements_js__WEBPACK_IMPORTED_MODULE_12__["userCurrentBookings"], 'Current Bookings:');
  displayBookings(hotel.userDirectory.currentUser.bookingService.previousBookings, _elements_js__WEBPACK_IMPORTED_MODULE_12__["userPreviousBookings"], 'Previous Bookings:');
  addEventListenersToCurrentBookings(hotel.userDirectory.currentUser.bookingService.currentBookings)
}

function displayBookings(bookings, container, header) {
  header = `<h3>${header}</h3>`
  container.innerHTML = '';
  bookings.forEach(booking => {
    booking.date = new Date(booking.date).toDateString();
    let bookingCard = `<div class="booking-card flex-row">
    <p>${booking.date}</p>
    <p><b>Room: </b> ${booking.roomNumber}</p>
    <p><b>Guest ID: </b> ${booking.userID}</p>
    <p><b>Cost: </b>$${booking.cost}</p>
    <div>${checkBookingStatus(booking)}</div>
    </div>`
    container.insertAdjacentHTML('afterbegin', bookingCard);
  })
  container.insertAdjacentHTML('afterbegin', header);
}

function checkBookingStatus(booking) {
  return booking.status === 'current' ? `<button id="delete-booking-${booking.id}" value="${booking.id}" aria-label="delete-booking">Cancel Reservation</button>` : '';
}

function addEventListenersToCurrentBookings(bookings) {
  bookings.forEach(booking => {
    let currentBooking = document.querySelector(`#delete-booking-${booking.id}`);
    currentBooking.addEventListener('click', deleteBooking);
  })
}

function deleteBooking() {
  let onSuccess = () => {
    let updatedBookingData = bookingApi.getRequest()
    updatedBookingData.then(value => {
      hotel.rawBookingData = value;
    }).then(() => {
      updateBookingData();
      updateDashboard();
      showBookingHistory();
    })
  }
  let bookingID = event.target.getAttribute('value');
  let bookingMessage = document.querySelector('#booking-message-area');
  bookingMessage.innerText = `Booking ${bookingID} has been removed.`
  bookingApi.deleteRequest({id: parseInt(bookingID)}, onSuccess);
  setTimeout(() => {
    bookingMessage.innerText = '';
  }, 5000)
}

function updateBookingData() {
  hotel.updateBookings();
  hotel.returnTodayBookings();
  hotel.userDirectory.bookingData = hotel.rawBookingData;
  if (hotel.userDirectory.currentUser instanceof _data_model_user__WEBPACK_IMPORTED_MODULE_3__["default"]) {
    let updatedUserBookingData = hotel.userDirectory.filterBookingData(hotel.userDirectory.currentUser.id);
    hotel.userDirectory.currentUser.bookingService.bookingData = updatedUserBookingData;
  } else if (hotel.userDirectory.currentUser instanceof _data_model_manager__WEBPACK_IMPORTED_MODULE_2__["default"]) {
    hotel.userDirectory.currentUser.bookingService.bookingData = hotel.userDirectory.bookingData;
  }
  hotel.userDirectory.currentUser.bookingService.bookingData = hotel.rawBookingData;
  hotel.userDirectory.currentUser.bookingService.createBookingHistory();
  hotel.userDirectory.currentUser.bookingService.sortBookingsByDate(today);
}

function searchBookings() {
  _elements_js__WEBPACK_IMPORTED_MODULE_12__["seeAllBookingsButton"].classList.remove('hidden');
  let userID = parseInt(_elements_js__WEBPACK_IMPORTED_MODULE_12__["searchBarBookingHistory"].value);
  _elements_js__WEBPACK_IMPORTED_MODULE_12__["searchBarBookingHistory"].value = '';
  let foundGuest = hotel.userDirectory.findGuest(userID);
  let filteredBookings = hotel.userDirectory.currentUser.bookingService.filterBookingsByID(userID);
  if (!foundGuest) {
    showBookingHistory()
  } else if (filteredBookings.length >= 1) {
    let header = `Booking History for ${foundGuest.name}`
    _elements_js__WEBPACK_IMPORTED_MODULE_12__["userCurrentBookings"].innerHTML = '';
    _elements_js__WEBPACK_IMPORTED_MODULE_12__["userPreviousBookings"].innerHTML = '';
    displayBookings(filteredBookings.reverse(), _elements_js__WEBPACK_IMPORTED_MODULE_12__["userFilteredBookings"], header);
  }
}

// GUEST DIRECTORY

function displayGuestDirectory() {
  _elements_js__WEBPACK_IMPORTED_MODULE_12__["roomsDisplay"].classList.add('hidden');
  _elements_js__WEBPACK_IMPORTED_MODULE_12__["userBookingHistory"].classList.add('hidden');
  _elements_js__WEBPACK_IMPORTED_MODULE_12__["guestDirectoryDisplay"].classList.remove('hidden');
  _elements_js__WEBPACK_IMPORTED_MODULE_12__["showAllGuestsButton"].classList.add('hidden');
  createGuestCards(hotel.userDirectory.guestList);
}

function createGuestCards(guests) {
  _elements_js__WEBPACK_IMPORTED_MODULE_12__["guestsContainer"].innerHTML = '';
  guests.forEach(guest => {
    guest.bookingService.sortBookingsByDate(today);
    let guestCard = `<div class="flip-box">
    <div class="flip-box-inner">
      <div class="flip-box-front flex-column">
        <h3 padding-right="25px">${guest.id}</h3>
        <h4>${guest.name.toUpperCase()}</h4>
        <p>Total Spent: $${guest.returnTotalSpentOnRooms()}</p>
      </div>
      <div class="flip-box-back" id="guest-booking-history">
        <h3>${guest.name.toUpperCase()}'S BOOKING HISTORY</h3>
        <p>${displayGuestBookingHistory(guest)}</p>
      </div>
    </div>
    </div>`
    _elements_js__WEBPACK_IMPORTED_MODULE_12__["guestsContainer"].insertAdjacentHTML('afterbegin', guestCard);
  })
}

function displayGuestBookingHistory(guest) {
  let guestBookingHistory = guest.bookingService.bookingHistory.map(booking => {
    return booking = `<b>${new Date(booking.date).toDateString()}:</b> Room ${booking.roomNumber}, $${booking.cost}<br>`
  })
  guestBookingHistory = guestBookingHistory.join(' ');
  return guestBookingHistory;
}

function searchGuests() {
  _elements_js__WEBPACK_IMPORTED_MODULE_12__["guestsContainer"].innerHTML = '';
  let matchedGuests = hotel.userDirectory.searchGuests(_elements_js__WEBPACK_IMPORTED_MODULE_12__["searchBarGuestDirectory"].value);
  createGuestCards(matchedGuests);
  _elements_js__WEBPACK_IMPORTED_MODULE_12__["showAllGuestsButton"].classList.remove('hidden');
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIiwid2VicGFjazovLy8uL3NyYy9hcGlDYWxsLmpzIiwid2VicGFjazovLy8uL3NyYy9jc3Mvc3R5bGVzLnNjc3M/MTNiMSIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS1tb2RlbC9ib29raW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9kYXRhLW1vZGVsL2Jvb2tpbmdTZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9kYXRhLW1vZGVsL2hvdGVsLmpzIiwid2VicGFjazovLy8uL3NyYy9kYXRhLW1vZGVsL21hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEtbW9kZWwvcm9vbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS1tb2RlbC91c2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9kYXRhLW1vZGVsL3VzZXJEaXJlY3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvYmVkLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2JpZGV0LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2Jvb2tpbmdzLXdoaXRlLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2Rhc2hib2FyZC13aGl0ZS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9sb2dvdXQucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvcm9vbS13aGl0ZS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy91c2Vycy13aGl0ZS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQSwyQkFBMkIsbUJBQU8sQ0FBQyx3R0FBbUQ7QUFDdEY7QUFDQSxjQUFjLFFBQVMsOEVBQThFLElBQUksa0JBQWtCOztBQUUzSDtBQUNBLGNBQWMsUUFBUyxZQUFZLDZCQUE2QixFQUFFLHVEQUF1RCxrQkFBa0Isa0NBQWtDLHdCQUF3QixFQUFFLGtDQUFrQyx3QkFBd0IsRUFBRSxrQkFBa0IsMkJBQTJCLEVBQUUsWUFBWSw4QkFBOEIsbUJBQW1CLG9CQUFvQixzQkFBc0IsaUJBQWlCLGlCQUFpQixFQUFFLFVBQVUsaUJBQWlCLEVBQUUsK0NBQStDLFlBQVksd0JBQXdCLDBDQUEwQyxFQUFFLEVBQUUsUUFBUSxvQkFBb0IsOENBQThDLEVBQUUsUUFBUSxvQkFBb0IsOENB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QWMseUJBQXlCO0FBQ3ZDLGFBQWEsa0NBQWtDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBLElBQUksNkRBQWU7QUFDbkIsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQSwyQkFBMkIsc0NBQXNDLGFBQWEsbUJBQW1CLEtBQUssYUFBYTtBQUNuSCxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRSw2REFBZTtBQUNqQix1REFBdUQscUVBQXVCO0FBQzlFO0FBQ0EsRUFBRSxpRUFBbUI7QUFDckIiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIEltcG9ydHNcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TmFudW0rR290aGljOndnaHRANDAwOzcwMDs4MDAmZGlzcGxheT1zd2FwKTtcIiwgXCJcIl0pO1xuXG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50OyB9XFxuXFxuLmZsZXgsIC5mbGV4LXJvdywgI3Jvb20taW5mb3JtYXRpb24sIC5mbGV4LWNvbHVtbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyOyB9XFxuXFxuLmZsZXgtcm93LCAjcm9vbS1pbmZvcm1hdGlvbiB7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93OyB9XFxuXFxuLmZsZXgtY29sdW1uIHtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cXG5cXG5idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMmMzZDtcXG4gIGNvbG9yOiAjZjZmN2YyO1xcbiAgZm9udC1zaXplOiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNSU7XFxuICBtYXJnaW46IDEwcHg7XFxuICBwYWRkaW5nOiA1cHg7IH1cXG5cXG5odG1sIHtcXG4gIG1hcmdpbjogLTlweDsgfVxcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkge1xcbiAgICBodG1sIHtcXG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbiAhaW1wb3J0YW50OyB9IH1cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBmb250LWZhbWlseTogXFxcIk5hbnVtIEdvdGhpY1xcXCIsIHNhbnMtc2VyaWY7IH1cXG5cXG5oMiB7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBmb250LWZhbWlseTogXFxcIk5hbnVtIEdvdGhpY1xcXCIsIHNhbnMtc2VyaWY7IH1cXG5cXG5oMyB7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LWZhbWlseTogXFxcIk5hbnVtIEdvdGhpY1xcXCIsIHNhbnMtc2VyaWY7IH1cXG5cXG5oNCB7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBmb250LWZhbWlseTogXFxcIk5hbnVtIEdvdGhpY1xcXCIsIHNhbnMtc2VyaWY7IH1cXG5cXG5wIHtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTmFudW0gR290aGljXFxcIiwgc2Fucy1zZXJpZjsgfVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc1YmJjMjsgfVxcblxcbmxhYmVsIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTmFudW0gR290aGljXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiAjZjZmN2YyO1xcbiAgbWFyZ2luOiAwcHggMjVweCAwcHggNXB4OyB9XFxuXFxuLmhlYWRlciB7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMDBweDsgfVxcbiAgLmhlYWRlciBoMSB7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgY29sb3I6ICMwMDJjM2Q7XFxuICAgIGZvbnQtc2l6ZTogMTZweDsgfVxcbiAgLmhlYWRlciBpbnB1dCB7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjdmMjtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlOyB9XFxuICAuaGVhZGVyIGlucHV0OmhvdmVyIHtcXG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLWluLW91dDtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpOyB9XFxuXFxuLm5hdmlnYXRpb24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JmYTI4ZDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyOyB9XFxuICAubmF2aWdhdGlvbiBpbnB1dCB7XFxuICAgIG1hcmdpbjogMjBweCAwcHggMjBweCAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDJjM2Q7XFxuICAgIHBhZGRpbmc6IDI1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1JTtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgb3BhY2l0eTogMC45OyB9XFxuICAubmF2aWdhdGlvbiBpbnB1dDpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlLWluLW91dDtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpOyB9XFxuICAubmF2aWdhdGlvbiBpbnB1dDpmb2N1cyB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTsgfVxcblxcbi5tb2RhbCB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgei1pbmRleDogMTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNTBweDsgfVxcblxcbi5tb2RhbC1jb250ZW50IHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjdmMjtcXG4gIG1hcmdpbjogMTUlIGF1dG87XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYm94LXNoYWRvdzogNXB4IDVweCA1cHggIzAwMmMzZDtcXG4gIHdpZHRoOiA2MCU7IH1cXG5cXG4uY2xvc2Uge1xcbiAgY29sb3I6ICMwMDJjM2Q7XFxuICBmbG9hdDogcmlnaHQ7XFxuICBmb250LXNpemU6IDI4cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiBibGFjazsgfVxcbiAgLmNsb3NlIHNwYW46aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDsgfVxcblxcbi5zZWFyY2gtYXJlYSB7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgcGFkZGluZzogMjBweDtcXG4gIG1hcmdpbi10b3A6IDkwcHg7IH1cXG4gIC5zZWFyY2gtYXJlYSAuZGF0ZS1kaXNwbGF5IHtcXG4gICAgY29sb3I6ICNmNmY3ZjI7IH1cXG4gICAgLnNlYXJjaC1hcmVhIC5kYXRlLWRpc3BsYXkgaW5wdXQge1xcbiAgICAgIHdpZHRoOiAxNTBweDtcXG4gICAgICBoZWlnaHQ6IDMwcHg7XFxuICAgICAgbWFyZ2luOiAxNXB4IDE1cHggMHB4IDE1cHg7IH1cXG5cXG4ucm9vbXMtZGlzcGxheSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAyYzNkOyB9XFxuXFxuI3Jvb21UeXBlLWZpbHRlciB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZsZXgtd3JhcDogd3JhcDsgfVxcblxcbi5hdmFpbGFibGUtcm9vbXMtZGlzcGxheSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzViYmMyO1xcbiAgZmxleC13cmFwOiB3cmFwICFpbXBvcnRhbnQ7IH1cXG5cXG4jcm9vbS1pbmZvcm1hdGlvbiB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDsgfVxcblxcbi5yb29tLWNhcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJhY2tncm91bmQ6ICNmNmY3ZjI7XFxuICB3aWR0aDogMzIwcHg7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBtYXJnaW46IDE1cHg7XFxuICBib3gtc2hhZG93OiA1cHggNXB4IDVweCAjMDAyYzNkO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbGluZS1oZWlnaHQ6IDAuMWVtOyB9XFxuICAucm9vbS1jYXJkICNiZWQtaW1nIHtcXG4gICAgd2lkdGg6IDExMHB4O1xcbiAgICBoZWlnaHQ6IDgwcHg7IH1cXG4gIC5yb29tLWNhcmQgI2JpZGV0LWltZyB7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgd2lkdGg6IGF1dG87IH1cXG4gIC5yb29tLWNhcmQgYnV0dG9uIHtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiAjMDAyYzNkO1xcbiAgICBjb2xvcjogI2Y2ZjdmMjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBtYXJnaW46IDE1cHg7IH1cXG5cXG4jZGFzaGJvYXJkLWJ1dHRvbiwgI2d1ZXN0LWRpcmVjdG9yeS1idXR0b24sICNib29raW5nLWhpc3RvcnktYnV0dG9uLCAjc2VlLXJvb21zLWJ1dHRvbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGhlaWdodDogNDBweDtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgYm9yZGVyOiAwO1xcbiAgb2JqZWN0LWZpdDogY29udGFpbjsgfVxcblxcbi51c2VyLWJvb2tpbmctaGlzdG9yeSwgLmd1ZXN0LWRpcmVjdG9yeS1kaXNwbGF5IHtcXG4gIG1hcmdpbi10b3A6IDEwMHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyB9XFxuXFxuLmJvb2tpbmctY2FyZCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAyYzNkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjdmMjtcXG4gIG1hcmdpbjogMHB4IDMwcHggMjBweCAzMHB4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDIwcHg7IH1cXG4gIC5ib29raW5nLWNhcmQgcCB7XFxuICAgIGZvbnQtc2l6ZTogMTBweDsgfVxcblxcbiNzaG93LWFsbC1ndWVzdHMgYnV0dG9uIHtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIGJhY2tncm91bmQ6ICMwMDJjM2Q7XFxuICBjb2xvcjogI2Y2ZjdmMjtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIG1hcmdpbjogMTVweDsgfVxcblxcbi5wcmV2aW91cy1ib29raW5ncy1jb250YWluZXIsIC5jdXJyZW50LWJvb2tpbmdzLWNvbnRhaW5lciB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0OyB9XFxuXFxuI2d1ZXN0LWJvb2tpbmctaGlzdG9yeSB7XFxuICBsaW5lLWhlaWdodDogMjsgfVxcblxcbi5mbGlwLWJveCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIGhlaWdodDogMjAwcHg7XFxuICBwZXJzcGVjdGl2ZTogMTAwMHB4O1xcbiAgcGFkZGluZzogMjBweDsgfVxcblxcbi5mbGlwLWJveC1pbm5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjhzO1xcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDsgfVxcblxcbi5mbGlwLWJveDpob3ZlciAuZmxpcC1ib3gtaW5uZXIge1xcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7IH1cXG5cXG4uZmxpcC1ib3gtZnJvbnQsIC5mbGlwLWJveC1iYWNrIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxuICBvdmVyZmxvdzogc2Nyb2xsOyB9XFxuXFxuLmZsaXAtYm94LWZyb250IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmY3ZjI7XFxuICBjb2xvcjogIzAwMmMzZDsgfVxcblxcbi5mbGlwLWJveC1iYWNrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDJjM2Q7XFxuICBjb2xvcjogI2Y2ZjdmMjtcXG4gIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpOyB9XFxuXCIsIFwiXCJdKTtcblxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuICdAbWVkaWEgJyArIGl0ZW1bMl0gKyAneycgKyBjb250ZW50ICsgJ30nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgICB9XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IG1vZHVsZXNbaV07IC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcbiAgICAgIC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG4gICAgICAvLyB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG4gICAgICAvLyBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cbiAgICAgIGlmIChpdGVtWzBdID09IG51bGwgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgaWYgKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgICAgaXRlbVsyXSA9ICcoJyArIGl0ZW1bMl0gKyAnKSBhbmQgKCcgKyBtZWRpYVF1ZXJ5ICsgJyknO1xuICAgICAgICB9XG5cbiAgICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJztcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gJy8qIyBzb3VyY2VVUkw9JyArIGNzc01hcHBpbmcuc291cmNlUm9vdCArIHNvdXJjZSArICcgKi8nO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9ICdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwnICsgYmFzZTY0O1xuICByZXR1cm4gJy8qIyAnICsgZGF0YSArICcgKi8nO1xufSIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXJcdG1lbW9pemUgPSBmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW87XG5cblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdHJldHVybiBtZW1vO1xuXHR9O1xufTtcblxudmFyIGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcblx0Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncblx0Ly8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuXHQvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG5cdC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuXHQvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcblx0cmV0dXJuIHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iO1xufSk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiAodGFyZ2V0LCBwYXJlbnQpIHtcbiAgaWYgKHBhcmVudCl7XG4gICAgcmV0dXJuIHBhcmVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG4gIH1cbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbn07XG5cbnZhciBnZXRFbGVtZW50ID0gKGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbyA9IHt9O1xuXG5cdHJldHVybiBmdW5jdGlvbih0YXJnZXQsIHBhcmVudCkge1xuICAgICAgICAgICAgICAgIC8vIElmIHBhc3NpbmcgZnVuY3Rpb24gaW4gb3B0aW9ucywgdGhlbiB1c2UgaXQgZm9yIHJlc29sdmUgXCJoZWFkXCIgZWxlbWVudC5cbiAgICAgICAgICAgICAgICAvLyBVc2VmdWwgZm9yIFNoYWRvdyBSb290IHN0eWxlIGkuZVxuICAgICAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgICAgICAvLyAgIGluc2VydEludG86IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9vXCIpLnNoYWRvd1Jvb3QgfVxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0dmFyIHN0eWxlVGFyZ2V0ID0gZ2V0VGFyZ2V0LmNhbGwodGhpcywgdGFyZ2V0LCBwYXJlbnQpO1xuXHRcdFx0Ly8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblx0XHRcdGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHQvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuXHRcdFx0XHRcdC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcblx0XHRcdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcblx0XHR9XG5cdFx0cmV0dXJuIG1lbW9bdGFyZ2V0XVxuXHR9O1xufSkoKTtcblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXJcdHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xudmFyXHRzdHlsZXNJbnNlcnRlZEF0VG9wID0gW107XG5cbnZhclx0Zml4VXJscyA9IHJlcXVpcmUoXCIuL3VybHNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuXHRpZiAodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0b3B0aW9ucy5hdHRycyA9IHR5cGVvZiBvcHRpb25zLmF0dHJzID09PSBcIm9iamVjdFwiID8gb3B0aW9ucy5hdHRycyA6IHt9O1xuXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSBcImJvb2xlYW5cIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgPGhlYWQ+IGVsZW1lbnRcbiAgICAgICAgaWYgKCFvcHRpb25zLmluc2VydEludG8pIG9wdGlvbnMuaW5zZXJ0SW50byA9IFwiaGVhZFwiO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiB0aGUgdGFyZ2V0XG5cdGlmICghb3B0aW9ucy5pbnNlcnRBdCkgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcblxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblxuXHRcdGlmKG5ld0xpc3QpIHtcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XG5cblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykgZG9tU3R5bGUucGFydHNbal0oKTtcblxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn07XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAobGlzdCwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XG5cblx0XHRpZighbmV3U3R5bGVzW2lkXSkgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcblx0fVxuXG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudCAob3B0aW9ucywgc3R5bGUpIHtcblx0dmFyIHRhcmdldCA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvKVxuXG5cdGlmICghdGFyZ2V0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnRJbnRvJyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG5cdH1cblxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZXNJbnNlcnRlZEF0VG9wW3N0eWxlc0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XG5cblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZiAoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCB0YXJnZXQuZmlyc3RDaGlsZCk7XG5cdFx0fSBlbHNlIGlmIChsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHRcdH1cblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGUpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcIm9iamVjdFwiICYmIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKSB7XG5cdFx0dmFyIG5leHRTaWJsaW5nID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEF0LmJlZm9yZSwgdGFyZ2V0KTtcblx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBuZXh0U2libGluZyk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiW1N0eWxlIExvYWRlcl1cXG5cXG4gSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcgKCdvcHRpb25zLmluc2VydEF0JykgZm91bmQuXFxuIE11c3QgYmUgJ3RvcCcsICdib3R0b20nLCBvciBPYmplY3QuXFxuIChodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlciNpbnNlcnRhdClcXG5cIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50IChzdHlsZSkge1xuXHRpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXHRzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcblxuXHR2YXIgaWR4ID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlKTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblxuXHRpZihvcHRpb25zLmF0dHJzLm5vbmNlID09PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgbm9uY2UgPSBnZXROb25jZSgpO1xuXHRcdGlmIChub25jZSkge1xuXHRcdFx0b3B0aW9ucy5hdHRycy5ub25jZSA9IG5vbmNlO1xuXHRcdH1cblx0fVxuXG5cdGFkZEF0dHJzKHN0eWxlLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlKTtcblxuXHRyZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhZGRBdHRycyhsaW5rLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmspO1xuXG5cdHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRycyAoZWwsIGF0dHJzKSB7XG5cdE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGdldE5vbmNlKCkge1xuXHRpZiAodHlwZW9mIF9fd2VicGFja19ub25jZV9fID09PSAndW5kZWZpbmVkJykge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0cmV0dXJuIF9fd2VicGFja19ub25jZV9fO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZSwgdXBkYXRlLCByZW1vdmUsIHJlc3VsdDtcblxuXHQvLyBJZiBhIHRyYW5zZm9ybSBmdW5jdGlvbiB3YXMgZGVmaW5lZCwgcnVuIGl0IG9uIHRoZSBjc3Ncblx0aWYgKG9wdGlvbnMudHJhbnNmb3JtICYmIG9iai5jc3MpIHtcblx0ICAgIHJlc3VsdCA9IHR5cGVvZiBvcHRpb25zLnRyYW5zZm9ybSA9PT0gJ2Z1bmN0aW9uJ1xuXHRcdCA/IG9wdGlvbnMudHJhbnNmb3JtKG9iai5jc3MpIFxuXHRcdCA6IG9wdGlvbnMudHJhbnNmb3JtLmRlZmF1bHQob2JqLmNzcyk7XG5cblx0ICAgIGlmIChyZXN1bHQpIHtcblx0ICAgIFx0Ly8gSWYgdHJhbnNmb3JtIHJldHVybnMgYSB2YWx1ZSwgdXNlIHRoYXQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBydW5uaW5nIHJ1bnRpbWUgdHJhbnNmb3JtYXRpb25zIG9uIHRoZSBjc3MuXG5cdCAgICBcdG9iai5jc3MgPSByZXN1bHQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgXHQvLyBJZiB0aGUgdHJhbnNmb3JtIGZ1bmN0aW9uIHJldHVybnMgYSBmYWxzeSB2YWx1ZSwgZG9uJ3QgYWRkIHRoaXMgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBjb25kaXRpb25hbCBsb2FkaW5nIG9mIGNzc1xuXHQgICAgXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdCAgICBcdFx0Ly8gbm9vcFxuXHQgICAgXHR9O1xuXHQgICAgfVxuXHR9XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cblx0XHRzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cblx0fSBlbHNlIGlmIChcblx0XHRvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIlxuXHQpIHtcblx0XHRzdHlsZSA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblxuXHRcdFx0aWYoc3R5bGUuaHJlZikgVVJMLnJldm9rZU9iamVjdFVSTChzdHlsZS5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmopIHtcblx0XHRpZiAobmV3T2JqKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcblx0XHRcdFx0bmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcblx0XHRcdFx0bmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcFxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZS5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcblx0XHR9XG5cblx0XHRzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rIChsaW5rLCBvcHRpb25zLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdC8qXG5cdFx0SWYgY29udmVydFRvQWJzb2x1dGVVcmxzIGlzbid0IGRlZmluZWQsIGJ1dCBzb3VyY2VtYXBzIGFyZSBlbmFibGVkXG5cdFx0YW5kIHRoZXJlIGlzIG5vIHB1YmxpY1BhdGggZGVmaW5lZCB0aGVuIGxldHMgdHVybiBjb252ZXJ0VG9BYnNvbHV0ZVVybHNcblx0XHRvbiBieSBkZWZhdWx0LiAgT3RoZXJ3aXNlIGRlZmF1bHQgdG8gdGhlIGNvbnZlcnRUb0Fic29sdXRlVXJscyBvcHRpb25cblx0XHRkaXJlY3RseVxuXHQqL1xuXHR2YXIgYXV0b0ZpeFVybHMgPSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyA9PT0gdW5kZWZpbmVkICYmIHNvdXJjZU1hcDtcblxuXHRpZiAob3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgfHwgYXV0b0ZpeFVybHMpIHtcblx0XHRjc3MgPSBmaXhVcmxzKGNzcyk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGluay5ocmVmO1xuXG5cdGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKSBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG4iLCJcbi8qKlxuICogV2hlbiBzb3VyY2UgbWFwcyBhcmUgZW5hYmxlZCwgYHN0eWxlLWxvYWRlcmAgdXNlcyBhIGxpbmsgZWxlbWVudCB3aXRoIGEgZGF0YS11cmkgdG9cbiAqIGVtYmVkIHRoZSBjc3Mgb24gdGhlIHBhZ2UuIFRoaXMgYnJlYWtzIGFsbCByZWxhdGl2ZSB1cmxzIGJlY2F1c2Ugbm93IHRoZXkgYXJlIHJlbGF0aXZlIHRvIGFcbiAqIGJ1bmRsZSBpbnN0ZWFkIG9mIHRoZSBjdXJyZW50IHBhZ2UuXG4gKlxuICogT25lIHNvbHV0aW9uIGlzIHRvIG9ubHkgdXNlIGZ1bGwgdXJscywgYnV0IHRoYXQgbWF5IGJlIGltcG9zc2libGUuXG4gKlxuICogSW5zdGVhZCwgdGhpcyBmdW5jdGlvbiBcImZpeGVzXCIgdGhlIHJlbGF0aXZlIHVybHMgdG8gYmUgYWJzb2x1dGUgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHBhZ2UgbG9jYXRpb24uXG4gKlxuICogQSBydWRpbWVudGFyeSB0ZXN0IHN1aXRlIGlzIGxvY2F0ZWQgYXQgYHRlc3QvZml4VXJscy5qc2AgYW5kIGNhbiBiZSBydW4gdmlhIHRoZSBgbnBtIHRlc3RgIGNvbW1hbmQuXG4gKlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzcykge1xuICAvLyBnZXQgY3VycmVudCBsb2NhdGlvblxuICB2YXIgbG9jYXRpb24gPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5sb2NhdGlvbjtcblxuICBpZiAoIWxvY2F0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZml4VXJscyByZXF1aXJlcyB3aW5kb3cubG9jYXRpb25cIik7XG4gIH1cblxuXHQvLyBibGFuayBvciBudWxsP1xuXHRpZiAoIWNzcyB8fCB0eXBlb2YgY3NzICE9PSBcInN0cmluZ1wiKSB7XG5cdCAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHZhciBiYXNlVXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0O1xuICB2YXIgY3VycmVudERpciA9IGJhc2VVcmwgKyBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC9bXlxcL10qJC8sIFwiL1wiKTtcblxuXHQvLyBjb252ZXJ0IGVhY2ggdXJsKC4uLilcblx0Lypcblx0VGhpcyByZWd1bGFyIGV4cHJlc3Npb24gaXMganVzdCBhIHdheSB0byByZWN1cnNpdmVseSBtYXRjaCBicmFja2V0cyB3aXRoaW5cblx0YSBzdHJpbmcuXG5cblx0IC91cmxcXHMqXFwoICA9IE1hdGNoIG9uIHRoZSB3b3JkIFwidXJsXCIgd2l0aCBhbnkgd2hpdGVzcGFjZSBhZnRlciBpdCBhbmQgdGhlbiBhIHBhcmVuc1xuXHQgICAoICA9IFN0YXJ0IGEgY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgKD86ICA9IFN0YXJ0IGEgbm9uLWNhcHR1cmluZyBncm91cFxuXHQgICAgICAgICBbXikoXSAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKD86ICA9IFN0YXJ0IGFub3RoZXIgbm9uLWNhcHR1cmluZyBncm91cHNcblx0ICAgICAgICAgICAgICAgICBbXikoXSsgID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgICAgIFteKShdKiAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICBcXCkgID0gTWF0Y2ggYSBlbmQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICkgID0gRW5kIEdyb3VwXG4gICAgICAgICAgICAgICpcXCkgPSBNYXRjaCBhbnl0aGluZyBhbmQgdGhlbiBhIGNsb3NlIHBhcmVuc1xuICAgICAgICAgICkgID0gQ2xvc2Ugbm9uLWNhcHR1cmluZyBncm91cFxuICAgICAgICAgICogID0gTWF0Y2ggYW55dGhpbmdcbiAgICAgICApICA9IENsb3NlIGNhcHR1cmluZyBncm91cFxuXHQgXFwpICA9IE1hdGNoIGEgY2xvc2UgcGFyZW5zXG5cblx0IC9naSAgPSBHZXQgYWxsIG1hdGNoZXMsIG5vdCB0aGUgZmlyc3QuICBCZSBjYXNlIGluc2Vuc2l0aXZlLlxuXHQgKi9cblx0dmFyIGZpeGVkQ3NzID0gY3NzLnJlcGxhY2UoL3VybFxccypcXCgoKD86W14pKF18XFwoKD86W14pKF0rfFxcKFteKShdKlxcKSkqXFwpKSopXFwpL2dpLCBmdW5jdGlvbihmdWxsTWF0Y2gsIG9yaWdVcmwpIHtcblx0XHQvLyBzdHJpcCBxdW90ZXMgKGlmIHRoZXkgZXhpc3QpXG5cdFx0dmFyIHVucXVvdGVkT3JpZ1VybCA9IG9yaWdVcmxcblx0XHRcdC50cmltKClcblx0XHRcdC5yZXBsYWNlKC9eXCIoLiopXCIkLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pXG5cdFx0XHQucmVwbGFjZSgvXicoLiopJyQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSk7XG5cblx0XHQvLyBhbHJlYWR5IGEgZnVsbCB1cmw/IG5vIGNoYW5nZVxuXHRcdGlmICgvXigjfGRhdGE6fGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcL3xmaWxlOlxcL1xcL1xcL3xcXHMqJCkvaS50ZXN0KHVucXVvdGVkT3JpZ1VybCkpIHtcblx0XHQgIHJldHVybiBmdWxsTWF0Y2g7XG5cdFx0fVxuXG5cdFx0Ly8gY29udmVydCB0aGUgdXJsIHRvIGEgZnVsbCB1cmxcblx0XHR2YXIgbmV3VXJsO1xuXG5cdFx0aWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiLy9cIikgPT09IDApIHtcblx0XHQgIFx0Ly9UT0RPOiBzaG91bGQgd2UgYWRkIHByb3RvY29sP1xuXHRcdFx0bmV3VXJsID0gdW5xdW90ZWRPcmlnVXJsO1xuXHRcdH0gZWxzZSBpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvXCIpID09PSAwKSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgYmFzZSB1cmxcblx0XHRcdG5ld1VybCA9IGJhc2VVcmwgKyB1bnF1b3RlZE9yaWdVcmw7IC8vIGFscmVhZHkgc3RhcnRzIHdpdGggJy8nXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIGN1cnJlbnQgZGlyZWN0b3J5XG5cdFx0XHRuZXdVcmwgPSBjdXJyZW50RGlyICsgdW5xdW90ZWRPcmlnVXJsLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKTsgLy8gU3RyaXAgbGVhZGluZyAnLi8nXG5cdFx0fVxuXG5cdFx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCB1cmwoLi4uKVxuXHRcdHJldHVybiBcInVybChcIiArIEpTT04uc3RyaW5naWZ5KG5ld1VybCkgKyBcIilcIjtcblx0fSk7XG5cblx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCBjc3Ncblx0cmV0dXJuIGZpeGVkQ3NzO1xufTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwaUNhbGwge1xuICBjb25zdHJ1Y3Rvcih1cmwsIG5hbWUpIHtcbiAgICB0aGlzLnVybCA9IHVybCxcbiAgICB0aGlzLm5hbWUgPSBuYW1lXG4gIH1cblxuICBnZXRSZXF1ZXN0KCkge1xuICAgIHJldHVybiBmZXRjaCh0aGlzLnVybClcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oZGF0YSA9PiBkYXRhID0gZGF0YVt0aGlzLm5hbWVdKVxuICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSlcbiAgfVxuXG4gIHBvc3RSZXF1ZXN0KG5ld1Bvc3QsIG9uU3VjY2Vzcykge1xuICAgIHJldHVybiBmZXRjaCh0aGlzLnVybCwge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShuZXdQb3N0KVxuICAgIH0pXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgY29uc29sZS5sb2coanNvbik7XG4gICAgICBvblN1Y2Nlc3MoKTtcbiAgICB9KVxuICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSlcbiAgfVxuXG4gIGRlbGV0ZVJlcXVlc3QoYm9va2luZ0lELCBvblN1Y2Nlc3MpIHtcbiAgICByZXR1cm4gZmV0Y2godGhpcy51cmwsIHtcbiAgICAgIG1ldGhvZDogJ0RFTEVURScsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib29raW5nSUQpXG4gICAgfSlcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICBvblN1Y2Nlc3MoanNvbik7XG4gICAgICBjb25zb2xlLmxvZyhqc29uKTtcbiAgICB9KVxuICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSlcbiAgfVxufVxuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3R5bGVzLnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3R5bGVzLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3N0eWxlcy5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm9va2luZyB7XG4gIGNvbnN0cnVjdG9yKGJvb2tpbmcpIHtcbiAgICB0aGlzLmlkID0gYm9va2luZy5pZCxcbiAgICB0aGlzLnVzZXJJRCA9IHBhcnNlSW50KGJvb2tpbmcudXNlcklEKSxcbiAgICB0aGlzLmRhdGUgPSBuZXcgRGF0ZShib29raW5nLmRhdGUpLnRvRGF0ZVN0cmluZygpLFxuICAgIHRoaXMucm9vbU51bWJlciA9IHBhcnNlSW50KGJvb2tpbmcucm9vbU51bWJlciksXG4gICAgdGhpcy5jb3N0ID0gcGFyc2VJbnQoYm9va2luZy5jb3N0KSB8fCBudWxsLFxuICAgIHRoaXMucm9vbVNlcnZpY2VDaGFyZ2VzID0gW11cbiAgfVxufVxuIiwiaW1wb3J0IEJvb2tpbmcgZnJvbSAnLi9ib29raW5nJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm9va2luZ1NlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihib29raW5nRGF0YSkge1xuICAgIHRoaXMuYm9va2luZ0RhdGEgPSBib29raW5nRGF0YSxcbiAgICB0aGlzLmJvb2tpbmdIaXN0b3J5ID0gW10sXG4gICAgdGhpcy5jdXJyZW50Qm9va2luZ3MgPSBbXSxcbiAgICB0aGlzLnByZXZpb3VzQm9va2luZ3MgPSBbXVxuICB9XG5cbiAgY3JlYXRlQm9va2luZ0hpc3RvcnkoKSB7XG4gICAgdGhpcy5ib29raW5nSGlzdG9yeSA9IHRoaXMuYm9va2luZ0RhdGEucmVkdWNlKChhbGxCb29raW5ncywgYm9va2luZykgPT4ge1xuICAgICAgYWxsQm9va2luZ3MucHVzaChuZXcgQm9va2luZyhib29raW5nKSk7XG4gICAgICByZXR1cm4gYWxsQm9va2luZ3NcbiAgICB9LCBbXSk7XG4gIH1cblxuICBzb3J0Qm9va2luZ3NCeURhdGUodG9kYXkpIHtcbiAgICB0b2RheSA9IG5ldyBEYXRlKHRvZGF5KTtcbiAgICB0aGlzLmN1cnJlbnRCb29raW5ncyA9IFtdO1xuICAgIHRoaXMucHJldmlvdXNCb29raW5ncyA9IFtdO1xuICAgIHRoaXMuYm9va2luZ0hpc3RvcnkuZm9yRWFjaChib29raW5nID0+IHtcbiAgICAgIGJvb2tpbmcuZGF0ZSA9IG5ldyBEYXRlKGJvb2tpbmcuZGF0ZSk7XG4gICAgICBpZiAoYm9va2luZy5kYXRlID49IHRvZGF5KSB7XG4gICAgICAgIGJvb2tpbmcuc3RhdHVzID0gJ2N1cnJlbnQnO1xuICAgICAgICB0aGlzLmN1cnJlbnRCb29raW5ncy5wdXNoKGJvb2tpbmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYm9va2luZy5zdGF0dXMgPSAncHJldmlvdXMnO1xuICAgICAgICB0aGlzLnByZXZpb3VzQm9va2luZ3MucHVzaChib29raW5nKVxuICAgICAgfVxuICAgIH0pXG4gICAgdGhpcy5vcmdhbml6ZUJvb2tpbmdzKCk7XG4gIH1cblxuICBvcmdhbml6ZUJvb2tpbmdzKCkge1xuICAgIHRoaXMuYm9va2luZ0hpc3Rvcnkuc29ydCgoYm9va2luZ0EsIGJvb2tpbmdCKSA9PiB7XG4gICAgICByZXR1cm4gYm9va2luZ0EuZGF0ZSA+IGJvb2tpbmdCLmRhdGUgPyAtMSA6IDE7XG4gICAgfSlcbiAgICB0aGlzLmN1cnJlbnRCb29raW5ncy5zb3J0KChib29raW5nQSwgYm9va2luZ0IpID0+IHtcbiAgICAgIHJldHVybiBib29raW5nQS5kYXRlID4gYm9va2luZ0IuZGF0ZSA/IC0xIDogMTtcbiAgICB9KVxuICAgIHRoaXMucHJldmlvdXNCb29raW5ncy5zb3J0KChib29raW5nQSwgYm9va2luZ0IpID0+IHtcbiAgICAgIHJldHVybiBib29raW5nQS5kYXRlID4gYm9va2luZ0IuZGF0ZSA/IC0xIDogMTtcbiAgICB9KVxuICB9XG5cbiAgZmlsdGVyQm9va2luZ3NCeUlEKGlkSW5wdXQpIHtcbiAgICByZXR1cm4gdGhpcy5ib29raW5nSGlzdG9yeS5maWx0ZXIoYm9va2luZyA9PiB7XG4gICAgICByZXR1cm4gYm9va2luZy51c2VySUQgPT09IGlkSW5wdXQ7XG4gICAgfSlcbiAgfVxufVxuIiwiaW1wb3J0IFJvb20gZnJvbSAnLi9yb29tJztcbmltcG9ydCBVc2VyRGlyZWN0b3J5IGZyb20gJy4vdXNlckRpcmVjdG9yeSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvdGVsIHtcbiAgY29uc3RydWN0b3IodXNlckRhdGEsIHJvb21EYXRhLCBib29raW5nRGF0YSwgZGF0ZSkge1xuICAgIHRoaXMuZGF0ZSA9IG5ldyBEYXRlKGRhdGUpLnRvRGF0ZVN0cmluZygpLFxuICAgIHRoaXMudXNlciA9IG51bGwsXG4gICAgdGhpcy5yYXdVc2VyRGF0YSA9IHVzZXJEYXRhLFxuICAgIHRoaXMucmF3Um9vbURhdGEgPSByb29tRGF0YSxcbiAgICB0aGlzLnJhd0Jvb2tpbmdEYXRhID0gYm9va2luZ0RhdGEsXG4gICAgdGhpcy5yb29tcyA9IFtdLFxuICAgIHRoaXMuYm9va2VkUm9vbXNUb2RheSA9IFtdLFxuICAgIHRoaXMuYXZhaWxhYmxlUm9vbXNUb2RheSA9IFtdXG4gIH1cblxuICBsYXVuY2goKSB7XG4gICAgdGhpcy5jcmVhdGVSb29tUmVjb3JkKCk7XG4gICAgdGhpcy51cGRhdGVCb29raW5ncygpO1xuICAgIHRoaXMucmV0dXJuVG9kYXlCb29raW5ncygpO1xuICAgIHRoaXMudXNlckRpcmVjdG9yeSA9IG5ldyBVc2VyRGlyZWN0b3J5KHRoaXMucmF3VXNlckRhdGEsIHRoaXMucmF3Qm9va2luZ0RhdGEpXG4gICAgdGhpcy51c2VyRGlyZWN0b3J5LmNyZWF0ZUd1ZXN0TGlzdCgpO1xuICB9XG5cbiAgY3JlYXRlUm9vbVJlY29yZCgpIHtcbiAgICB0aGlzLnJvb21zID0gdGhpcy5yYXdSb29tRGF0YS5yZWR1Y2UoKGFsbFJvb21zLCByb29tKSA9PiB7XG4gICAgICBhbGxSb29tcy5wdXNoKG5ldyBSb29tKHJvb20pKTtcbiAgICAgIHJldHVybiBhbGxSb29tc1xuICAgIH0sIFtdKTtcbiAgfVxuXG4gIHVwZGF0ZUJvb2tpbmdzKCkge1xuICAgIHRoaXMucmF3Qm9va2luZ0RhdGEgPSB0aGlzLnJhd0Jvb2tpbmdEYXRhLm1hcChib29raW5nID0+IHtcbiAgICAgIHRoaXMucm9vbXMuZm9yRWFjaChyb29tID0+IHtcbiAgICAgICAgaWYgKHJvb20ubnVtYmVyID09PSBib29raW5nLnJvb21OdW1iZXIpIHtcbiAgICAgICAgICBib29raW5nLnJvb21OdW1iZXIgPSByb29tLm51bWJlcjtcbiAgICAgICAgICBib29raW5nLmNvc3QgPSByb29tLmNvc3RQZXJOaWdodDtcbiAgICAgICAgICBib29raW5nLmRhdGUgPSBuZXcgRGF0ZShib29raW5nLmRhdGUpLnRvRGF0ZVN0cmluZygpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgcmV0dXJuIGJvb2tpbmc7XG4gICAgfSlcbiAgfVxuXG4gIHJldHVyblRvZGF5Qm9va2luZ3MoKSB7XG4gICAgY29uc3QgdG9kYXlCb29raW5ncyA9IHRoaXMucmF3Qm9va2luZ0RhdGEucmVkdWNlKChib29raW5nc0ZvckRhdGUsIGJvb2tpbmcpID0+IHtcbiAgICAgIGJvb2tpbmcuZGF0ZSA9IG5ldyBEYXRlKGJvb2tpbmcuZGF0ZSkudG9EYXRlU3RyaW5nKClcbiAgICAgIGlmIChib29raW5nLmRhdGUgPT09IHRoaXMuZGF0ZSkge1xuICAgICAgICBib29raW5nc0ZvckRhdGUucHVzaChib29raW5nKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBib29raW5nc0ZvckRhdGU7XG4gICAgfSwgW10pO1xuICAgIHRoaXMucmV0dXJuQXZhaWxhYmxlUm9vbXModG9kYXlCb29raW5ncyk7XG4gICAgdGhpcy5ib29rZWRSb29tc1RvZGF5ID0gdG9kYXlCb29raW5ncy5tYXAoYm9va2luZyA9PiB7XG4gICAgICBjb25zdCByb29tQm9va2VkID0gdGhpcy5yb29tcy5maW5kKHJvb20gPT4ge1xuICAgICAgICByZXR1cm4gcm9vbS5udW1iZXIgPT09IGJvb2tpbmcucm9vbU51bWJlclxuICAgICAgfSk7XG4gICAgICByZXR1cm4gYm9va2luZyA9IHtib29raW5nSW5mbzoge2Jvb2tpbmd9LCByb29tSW5mbzoge3Jvb21Cb29rZWR9fVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuQXZhaWxhYmxlUm9vbXModG9kYXlCb29raW5ncykge1xuICAgIGNvbnN0IGJvb2tlZFJvb21OdW1iZXJzID0gdG9kYXlCb29raW5ncy5tYXAoYm9va2VkUm9vbSA9PiB7XG4gICAgICByZXR1cm4gYm9va2VkUm9vbSA9IGJvb2tlZFJvb20ucm9vbU51bWJlcjtcbiAgICB9KVxuXG4gICAgdGhpcy5hdmFpbGFibGVSb29tc1RvZGF5ID0gdGhpcy5yb29tcy5maWx0ZXIocm9vbSA9PiB7XG4gICAgICByZXR1cm4gIWJvb2tlZFJvb21OdW1iZXJzLmluY2x1ZGVzKHJvb20ubnVtYmVyKVxuICAgIH0pXG5cbiAgICB0aGlzLnBlcmNlbnRSb29tc0Jvb2tlZCA9IHBhcnNlSW50KCgodGhpcy5yb29tcy5sZW5ndGggLSB0aGlzLmF2YWlsYWJsZVJvb21zVG9kYXkubGVuZ3RoKSAvIHRoaXMucm9vbXMubGVuZ3RoKSAqIDEwMCkudG9GaXhlZCgwKTtcbiAgfVxuXG4gIGNhbGN1bGF0ZVRvdGFsUm9vbVJldmVudWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuYm9va2VkUm9vbXNUb2RheS5yZWR1Y2UoKHRvdGFsUmV2ZW51ZSwgYm9va2VkUm9vbSkgPT4ge1xuICAgICAgaWYgKGJvb2tlZFJvb20uYm9va2luZ0luZm8uYm9va2luZy5jb3N0KSB7XG4gICAgICAgIHRvdGFsUmV2ZW51ZSA9IHRvdGFsUmV2ZW51ZSArPSBib29rZWRSb29tLmJvb2tpbmdJbmZvLmJvb2tpbmcuY29zdDtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0b3RhbFJldmVudWU7XG4gICAgfSwgMClcbiAgfVxuXG4gIGZpbHRlckJ5Um9vbVR5cGUoaW5wdXQpIHtcbiAgICByZXR1cm4gdGhpcy5hdmFpbGFibGVSb29tc1RvZGF5LmZpbHRlcihyb29tID0+IHtcbiAgICAgIHJldHVybiByb29tLnJvb21UeXBlID09PSBpbnB1dDtcbiAgICB9KVxuICB9XG59XG4iLCJpbXBvcnQgVXNlciBmcm9tICcuL3VzZXInXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hbmFnZXIgZXh0ZW5kcyBVc2VyIHtcbiAgY29uc3RydWN0b3IodXNlckRhdGEsIGJvb2tpbmdEYXRhKSB7XG4gICAgc3VwZXIodXNlckRhdGEsIGJvb2tpbmdEYXRhKVxuICB9XG5cbiAgYWRkQm9va2luZyh1c2VySUQsIHJvb21OdW1iZXIsIGRhdGUsIG9uU3VjY2Vzcykge1xuICAgIGxldCBuZXdCb29raW5nID0ge1xuICAgICAgdXNlcklEOiB1c2VySUQsXG4gICAgICBkYXRlOiBkYXRlLFxuICAgICAgcm9vbU51bWJlcjogcm9vbU51bWJlclxuICAgIH1cblxuICAgIHRoaXMuYXBpLnBvc3RSZXF1ZXN0KG5ld0Jvb2tpbmcsIG9uU3VjY2Vzcyk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvb20ge1xuICBjb25zdHJ1Y3Rvcihyb29tKSB7XG4gICAgdGhpcy5udW1iZXIgPSBwYXJzZUludChyb29tLm51bWJlciksXG4gICAgdGhpcy5yb29tVHlwZSA9IHJvb20ucm9vbVR5cGUsXG4gICAgdGhpcy5iaWRldCA9IHJvb20uYmlkZXQsXG4gICAgdGhpcy5iZWRTaXplID0gcm9vbS5iZWRTaXplLFxuICAgIHRoaXMubnVtQmVkcyA9IHBhcnNlSW50KHJvb20ubnVtQmVkcyksXG4gICAgdGhpcy5jb3N0UGVyTmlnaHQgPSBwYXJzZUludChyb29tLmNvc3RQZXJOaWdodClcbiAgfVxufVxuIiwiaW1wb3J0IEJvb2tpbmdTZXJ2aWNlIGZyb20gJy4vYm9va2luZ1NlcnZpY2UnO1xuaW1wb3J0IEFwaUNhbGwgZnJvbSAnLi4vYXBpQ2FsbC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXIge1xuICBjb25zdHJ1Y3Rvcih1c2VyRGF0YSwgYm9va2luZ0RhdGEpIHtcbiAgICB0aGlzLmlkID0gdXNlckRhdGEuaWQsXG4gICAgdGhpcy5uYW1lID0gdXNlckRhdGEubmFtZSxcbiAgICB0aGlzLmFwaSA9IG5ldyBBcGlDYWxsKCdodHRwczovL2ZlLWFwcHMuaGVyb2t1YXBwLmNvbS9hcGkvdjEvb3Zlcmxvb2svMTkwNC9ib29raW5ncy9ib29raW5ncycsICdib29raW5ncycpLFxuICAgIHRoaXMuYm9va2luZ1NlcnZpY2UgPSBuZXcgQm9va2luZ1NlcnZpY2UoYm9va2luZ0RhdGEpLFxuICAgIHRoaXMuYm9va2luZ1NlcnZpY2UuY3JlYXRlQm9va2luZ0hpc3RvcnkoKVxuXHR9XG5cbiAgcmV0dXJuVG90YWxTcGVudE9uUm9vbXMoKSB7XG4gICAgbGV0IHRvdGFsU3BlbnRPblJvb21zID0gdGhpcy5ib29raW5nU2VydmljZS5wcmV2aW91c0Jvb2tpbmdzLnJlZHVjZSgodG90YWxTcGVudCwgYm9va2luZykgPT4ge1xuICAgICAgaWYgKGJvb2tpbmcuY29zdCkge1xuICAgICAgICB0b3RhbFNwZW50ICs9IGJvb2tpbmcuY29zdFxuICAgICAgfVxuICAgICAgcmV0dXJuIHRvdGFsU3BlbnQ7XG4gICAgfSwgMClcblxuICAgIHJldHVybiB0b3RhbFNwZW50T25Sb29tcy50b0ZpeGVkKDIpO1xuICB9XG5cbiAgcmV0dXJuQmlsbCgpIHtcbiAgICBsZXQgdG90YWxCaWxsID0gdGhpcy5ib29raW5nU2VydmljZS5jdXJyZW50Qm9va2luZ3MucmVkdWNlKCh0b3RhbER1ZSwgYm9va2luZykgPT4ge1xuICAgICAgaWYgKGJvb2tpbmcuY29zdCkge1xuICAgICAgICB0b3RhbER1ZSArPSBib29raW5nLmNvc3RcbiAgICAgIH1cbiAgICAgIHJldHVybiB0b3RhbER1ZTtcbiAgICB9LCAwKVxuXG4gICAgcmV0dXJuIHRvdGFsQmlsbC50b0ZpeGVkKDIpO1xuICB9XG5cbiAgYWRkQm9va2luZyhyb29tTnVtYmVyLCBkYXRlLCBvblN1Y2Nlc3MpIHtcbiAgICBsZXQgbmV3Qm9va2luZyA9IHtcbiAgICAgIHVzZXJJRDogdGhpcy5pZCxcbiAgICAgIGRhdGU6IGRhdGUsXG4gICAgICByb29tTnVtYmVyOiByb29tTnVtYmVyXG4gICAgfVxuXG4gICAgdGhpcy5hcGkucG9zdFJlcXVlc3QobmV3Qm9va2luZywgb25TdWNjZXNzKTtcbiAgfVxufVxuIiwiaW1wb3J0IFVzZXIgZnJvbSAnLi91c2VyJztcbmltcG9ydCBNYW5hZ2VyIGZyb20gJy4vbWFuYWdlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXJEaXJlY3Rvcnkge1xuICBjb25zdHJ1Y3Rvcih1c2VyRGF0YSwgYm9va2luZ0RhdGEpIHtcbiAgICB0aGlzLmN1cnJlbnRVc2VyID0gbnVsbCxcbiAgICB0aGlzLnJhd1VzZXJEYXRhID0gdXNlckRhdGEsXG4gICAgdGhpcy5ib29raW5nRGF0YSA9IGJvb2tpbmdEYXRhLFxuICAgIHRoaXMuZ3Vlc3RMaXN0ID0gW11cbiAgfVxuXG4gIGNyZWF0ZUd1ZXN0TGlzdCgpIHtcbiAgICB0aGlzLmd1ZXN0TGlzdCA9IHRoaXMucmF3VXNlckRhdGEucmVkdWNlKChhbGxHdWVzdHMsIHVzZXIpID0+IHtcbiAgICAgIGlmICh1c2VyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgbGV0IHVzZXJCb29raW5nRGF0YSA9IHRoaXMuYm9va2luZ0RhdGEuZmlsdGVyKGJvb2tpbmcgPT4ge1xuICAgICAgICAgIHJldHVybiBib29raW5nLnVzZXJJRCA9PT0gdXNlci5pZFxuICAgICAgICB9KVxuICAgICAgICBhbGxHdWVzdHMucHVzaChuZXcgVXNlcih1c2VyLCB1c2VyQm9va2luZ0RhdGEpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBhbGxHdWVzdHNcbiAgICB9LCBbXSk7XG4gICAgdGhpcy5hbHBoYWJldGl6ZUd1ZXN0cygpO1xuICB9XG5cbiAgYWxwaGFiZXRpemVHdWVzdHMoKSB7XG4gICAgdGhpcy5ndWVzdExpc3QgPSB0aGlzLmd1ZXN0TGlzdC5zb3J0KChndWVzdEEsIGd1ZXN0QikgPT4ge1xuICAgICAgcmV0dXJuIGd1ZXN0QS5uYW1lID4gZ3Vlc3RCLm5hbWUgPyAtMSA6IDE7XG4gICAgfSlcbiAgfVxuXG4gIGZpbmRHdWVzdCh1c2VySUQpIHtcbiAgICByZXR1cm4gdGhpcy5ndWVzdExpc3QuZmluZChndWVzdCA9PiB7XG4gICAgICByZXR1cm4gZ3Vlc3QuaWQgPT09IHVzZXJJRDtcbiAgICB9KVxuICB9XG5cbiAgc2VhcmNoR3Vlc3RzKG5hbWVJbnB1dCkge1xuICAgIG5hbWVJbnB1dCA9IG5hbWVJbnB1dC50b0xvd2VyQ2FzZSgpO1xuICAgIHJldHVybiB0aGlzLmd1ZXN0TGlzdC5maWx0ZXIoZ3Vlc3QgPT4ge1xuICAgICAgZ3Vlc3QubmFtZSA9IGd1ZXN0Lm5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgIHJldHVybiBndWVzdC5uYW1lLmluY2x1ZGVzKG5hbWVJbnB1dClcbiAgICB9KVxuICB9XG5cbiAgZmlsdGVyQm9va2luZ0RhdGEoaWQpIHtcbiAgICByZXR1cm4gdGhpcy5ib29raW5nRGF0YS5maWx0ZXIoYm9va2luZyA9PiB7XG4gICAgICByZXR1cm4gYm9va2luZy51c2VySUQgPT09IGlkXG4gICAgfSlcbiAgfVxuXG4gIHZhbGlkYXRlVXNlcihpZCkge1xuICAgIHJldHVybiAodGhpcy5maW5kR3Vlc3QoaWQpICE9PSB1bmRlZmluZWQpID8gdHJ1ZSA6IGZhbHNlO1xuICB9XG5cbiAgdmFsaWRhdGVQYXNzd29yZChwYXNzd29yZCkge1xuICAgIHJldHVybiAocGFzc3dvcmQgPT09ICdvdmVybG9vazIwMjAnKSA/IHRydWUgOiBmYWxzZTtcbiAgfVxuXG4gIGNob29zZVVzZXIodXNlcm5hbWUsIHBhc3N3b3JkKSB7XG4gICAgdXNlcm5hbWUgPSB1c2VybmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgIGlmICh0aGlzLnZhbGlkYXRlUGFzc3dvcmQocGFzc3dvcmQpID09PSB0cnVlKSB7XG4gICAgICBpZiAodXNlcm5hbWUgPT09ICdtYW5hZ2VyJykge1xuICAgICAgICB0aGlzLmN1cnJlbnRVc2VyID0gbmV3IE1hbmFnZXIoe2lkOiAwLCBuYW1lOiAnTWFuYWdlcid9LCB0aGlzLmJvb2tpbmdEYXRhKTtcbiAgICAgICAgdGhpcy5jdXJyZW50VXNlci50eXBlID0gJ21hbmFnZXInO1xuICAgICAgICB0aGlzLmN1cnJlbnRVc2VyLmJvb2tpbmdTZXJ2aWNlLmNyZWF0ZUJvb2tpbmdIaXN0b3J5KCk7XG4gICAgICAgIHJldHVybiAnbWFuYWdlcic7XG4gICAgICB9IGVsc2UgaWYgKHVzZXJuYW1lLmluY2x1ZGVzKCdjdXN0b21lcicpKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxvZ2luR3Vlc3QodXNlcm5hbWUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgbG9naW5HdWVzdCh1c2VybmFtZSkge1xuICAgIGxldCB1c2VySUQgPSBwYXJzZUludCh1c2VybmFtZS5yZXBsYWNlKCdjdXN0b21lcicsICcnKS5yZXBsYWNlKC8gL2csIFwiXCIpKTtcbiAgICBpZiAodGhpcy52YWxpZGF0ZVVzZXIodXNlcklEKSA9PT0gdHJ1ZSkge1xuICAgICAgbGV0IGZvdW5kVXNlciA9IHRoaXMuZmluZEd1ZXN0KHVzZXJJRCk7XG4gICAgICBsZXQgdXNlckJvb2tpbmdEYXRhID0gdGhpcy5maWx0ZXJCb29raW5nRGF0YSh1c2VySUQpO1xuICAgICAgdGhpcy5jdXJyZW50VXNlciA9IG5ldyBVc2VyKGZvdW5kVXNlciwgdXNlckJvb2tpbmdEYXRhKTtcbiAgICAgIHRoaXMuY3VycmVudFVzZXIudHlwZSA9ICdndWVzdCc7XG4gICAgICB0aGlzLmN1cnJlbnRVc2VyLmJvb2tpbmdTZXJ2aWNlLmNyZWF0ZUJvb2tpbmdIaXN0b3J5KCk7XG4gICAgICByZXR1cm4gJ2d1ZXN0JztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxufVxuIiwiZXhwb3J0IGNvbnN0IGF2YWlsYWJsZVJvb21zRGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hdmFpbGFibGUtcm9vbXMtZGlzcGxheScpO1xuZXhwb3J0IGNvbnN0IGNhbGVuZGFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhbGVuZGFyJyk7XG5leHBvcnQgY29uc3QgZ3Vlc3REaXJlY3RvcnlCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ3Vlc3QtZGlyZWN0b3J5LWJ1dHRvbicpO1xuZXhwb3J0IGNvbnN0IGd1ZXN0c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ndWVzdHMtY29udGFpbmVyJyk7XG5leHBvcnQgY29uc3QgZ3Vlc3REaXJlY3RvcnlEaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmd1ZXN0LWRpcmVjdG9yeS1kaXNwbGF5Jyk7XG5leHBvcnQgY29uc3QgbG9nb3V0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvZ291dC1idXR0b24nKTtcbmV4cG9ydCBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbCcpO1xuZXhwb3J0IGNvbnN0IHBhc3N3b3JkRmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGFzc3dvcmQtZmllbGQnKTtcbmV4cG9ydCBjb25zdCBzZWFyY2hCYXJHdWVzdERpcmVjdG9yeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWFyY2gtZ3Vlc3RzLWJ5LW5hbWUnKTtcbmV4cG9ydCBjb25zdCByb29tc0Rpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucm9vbXMtZGlzcGxheScpO1xuZXhwb3J0IGNvbnN0IHNlYXJjaEFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWFyZWEnKTtcbmV4cG9ydCBjb25zdCB1c2VyQm9va2luZ0hpc3RvcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXNlci1ib29raW5nLWhpc3RvcnknKTtcbmV4cG9ydCBjb25zdCB1c2VyQ3VycmVudEJvb2tpbmdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnQtYm9va2luZ3MtY29udGFpbmVyJyk7XG5leHBvcnQgY29uc3QgdXNlcm5hbWVGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1c2VybmFtZS1maWVsZCcpO1xuZXhwb3J0IGNvbnN0IHVzZXJQcmV2aW91c0Jvb2tpbmdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByZXZpb3VzLWJvb2tpbmdzLWNvbnRhaW5lcicpO1xuZXhwb3J0IGNvbnN0IGNsb3NlTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UnKTtcbmV4cG9ydCBjb25zdCByb29tRmlsdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jvb21UeXBlLWZpbHRlcicpO1xuZXhwb3J0IGNvbnN0IHNlYXJjaEJhckJvb2tpbmdIaXN0b3J5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Jvb2tpbmctc2VhcmNoJyk7XG5leHBvcnQgY29uc3Qgc2hvd0FsbEd1ZXN0c0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaG93LWFsbC1ndWVzdHMtYnV0dG9uJyk7XG5leHBvcnQgY29uc3Qgc2VlQWxsQm9va2luZ3NCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VlLWFsbC1ib29raW5ncy1idXR0b24nKTtcbmV4cG9ydCBjb25zdCB1c2VyRmlsdGVyZWRCb29raW5ncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5maWx0ZXJlZC1ib29raW5ncycpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBcImltYWdlcy9iZWQucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcImltYWdlcy9iaWRldC5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiaW1hZ2VzL2Jvb2tpbmdzLXdoaXRlLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCJpbWFnZXMvZGFzaGJvYXJkLXdoaXRlLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCJpbWFnZXMvbG9nb3V0LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCJpbWFnZXMvcm9vbS13aGl0ZS5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiaW1hZ2VzL3VzZXJzLXdoaXRlLnBuZ1wiOyIsImltcG9ydCBBcGlDYWxsIGZyb20gJy4vYXBpQ2FsbCc7XG5pbXBvcnQgSG90ZWwgZnJvbSAnLi9kYXRhLW1vZGVsL2hvdGVsJztcbmltcG9ydCBNYW5hZ2VyIGZyb20gJy4vZGF0YS1tb2RlbC9tYW5hZ2VyJztcbmltcG9ydCBVc2VyIGZyb20gJy4vZGF0YS1tb2RlbC91c2VyJztcbmltcG9ydCAnLi9jc3Mvc3R5bGVzLnNjc3MnO1xuaW1wb3J0ICcuL2ltYWdlcy9iZWQucG5nJztcbmltcG9ydCAnLi9pbWFnZXMvYmlkZXQucG5nJztcbmltcG9ydCAnLi9pbWFnZXMvbG9nb3V0LnBuZyc7XG5pbXBvcnQgJy4vaW1hZ2VzL2Rhc2hib2FyZC13aGl0ZS5wbmcnO1xuaW1wb3J0ICcuL2ltYWdlcy91c2Vycy13aGl0ZS5wbmcnO1xuaW1wb3J0ICcuL2ltYWdlcy9ib29raW5ncy13aGl0ZS5wbmcnO1xuaW1wb3J0ICcuL2ltYWdlcy9yb29tLXdoaXRlLnBuZyc7XG5pbXBvcnQge1xuICBhdmFpbGFibGVSb29tc0Rpc3BsYXksXG4gIGNhbGVuZGFyLFxuICB1c2VyRmlsdGVyZWRCb29raW5ncyxcbiAgZ3Vlc3REaXJlY3RvcnlCdXR0b24sXG4gIGd1ZXN0c0NvbnRhaW5lcixcbiAgcm9vbUZpbHRlcixcbiAgc2VhcmNoQmFyR3Vlc3REaXJlY3RvcnksXG4gIG1vZGFsLFxuICBzZWFyY2hCYXJCb29raW5nSGlzdG9yeSxcbiAgY2xvc2VNb2RhbCxcbiAgc2hvd0FsbEd1ZXN0c0J1dHRvbixcbiAgcGFzc3dvcmRGaWVsZCxcbiAgcm9vbXNEaXNwbGF5LFxuICBndWVzdERpcmVjdG9yeURpc3BsYXksXG4gIHVzZXJCb29raW5nSGlzdG9yeSxcbiAgdXNlckN1cnJlbnRCb29raW5ncyxcbiAgdXNlcm5hbWVGaWVsZCxcbiAgc2VlQWxsQm9va2luZ3NCdXR0b24sXG4gIHVzZXJQcmV2aW91c0Jvb2tpbmdzXG59IGZyb20gJy4vZWxlbWVudHMuanMnO1xuXG5sZXQgdG9kYXkgPSBuZXcgRGF0ZSgpLnRvRGF0ZVN0cmluZygpO1xubGV0IGhvdGVsO1xubGV0IHVzZXJBcGk7XG5sZXQgcm9vbUFwaTtcbmxldCBib29raW5nQXBpO1xuXG4vLyBFVkVOVCBMSVNURU5FUlNcblxud2luZG93Lm9ubG9hZCA9IGluc3RhbnRpYXRlQXBpcygpO1xud2luZG93Lm9uY2xpY2sgPSAoKSA9PiB7XG4gIGlmIChldmVudC50YXJnZXQgPT09IG1vZGFsKSB7XG4gICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfVxufVxuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbG9naW4tYnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGxvZ2luVXNlcih1c2VybmFtZUZpZWxkLnZhbHVlLCBwYXNzd29yZEZpZWxkLnZhbHVlKVxufSk7XG5cbmNhbGVuZGFyLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChldmVudCkgPT4ge1xuICB1cGRhdGVEYXRlKGV2ZW50KTtcbn0pO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGFzaGJvYXJkLWJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbn0pXG5cbmNsb3NlTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59KVxuXG5zZWFyY2hCYXJHdWVzdERpcmVjdG9yeS5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHNlYXJjaEd1ZXN0cyk7XG5zZWFyY2hCYXJCb29raW5nSGlzdG9yeS5hZGRFdmVudExpc3RlbmVyKCdzZWFyY2gnLCBzZWFyY2hCb29raW5ncyk7XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYm9va2luZy1oaXN0b3J5LWJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd0Jvb2tpbmdIaXN0b3J5KTtcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWUtcm9vbXMtYnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNwbGF5QXZhaWxhYmxlUm9vbXMpO1xuZ3Vlc3REaXJlY3RvcnlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNwbGF5R3Vlc3REaXJlY3RvcnkpO1xucm9vbUZpbHRlci5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmaWx0ZXJCeVJvb21UeXBlKTtcbnNob3dBbGxHdWVzdHNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNwbGF5R3Vlc3REaXJlY3RvcnkpO1xuc2VlQWxsQm9va2luZ3NCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93Qm9va2luZ0hpc3RvcnkpO1xuLy8gQVBJIElOU1RBTlRJQVRJT05cblxuZnVuY3Rpb24gaW5zdGFudGlhdGVBcGlzKCkge1xuICB1c2VyQXBpID0gbmV3IEFwaUNhbGwoJ2h0dHBzOi8vZmUtYXBwcy5oZXJva3VhcHAuY29tL2FwaS92MS9vdmVybG9vay8xOTA0L3VzZXJzL3VzZXJzJywgJ3VzZXJzJyk7XG4gIHJvb21BcGkgPSBuZXcgQXBpQ2FsbCgnaHR0cHM6Ly9mZS1hcHBzLmhlcm9rdWFwcC5jb20vYXBpL3YxL292ZXJsb29rLzE5MDQvcm9vbXMvcm9vbXMnLCAncm9vbXMnKTtcbiAgYm9va2luZ0FwaSA9IG5ldyBBcGlDYWxsKCdodHRwczovL2ZlLWFwcHMuaGVyb2t1YXBwLmNvbS9hcGkvdjEvb3Zlcmxvb2svMTkwNC9ib29raW5ncy9ib29raW5ncycsICdib29raW5ncycpO1xuICBmZXRjaEFsbERhdGEoKTtcbn1cblxuZnVuY3Rpb24gZmV0Y2hBbGxEYXRhKCkge1xuICBsZXQgdXNlclByb21pc2UgPSB1c2VyQXBpLmdldFJlcXVlc3QoKTtcbiAgbGV0IHJvb21Qcm9taXNlID0gcm9vbUFwaS5nZXRSZXF1ZXN0KCk7XG4gIGxldCBib29raW5nUHJvbWlzZSA9IGJvb2tpbmdBcGkuZ2V0UmVxdWVzdCgpO1xuXG4gIFByb21pc2UuYWxsKFt1c2VyUHJvbWlzZSwgcm9vbVByb21pc2UsIGJvb2tpbmdQcm9taXNlXSlcbiAgLnRoZW4oZGF0YSA9PiB7XG4gICAgaG90ZWwgPSBuZXcgSG90ZWwoZGF0YVswXSwgZGF0YVsxXSwgZGF0YVsyXSwgdG9kYXkpO1xuICB9KVxuICAudGhlbigoKSA9PiBvcGVuSG90ZWwoKSlcbiAgLmNhdGNoKGVycm9yID0+IHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgLy8gYWxlcnQoJ1NvcnJ5LCB3ZSBhcmUgdW5hYmxlIHRvIHJldHJpZXZlIGRhdGEgYXQgdGhpcyB0aW1lLCBwbGVhc2UgdHJ5IGFnYWluIGxhdGVyLicpXG4gIH0pXG59XG5cbi8vIERBVEUgSEFORExJTkdcblxuZnVuY3Rpb24gZm9ybWF0RGF0ZSh0b2RheSwgam9pbkJ5KSB7XG4gICAgdG9kYXkgPSBuZXcgRGF0ZSh0b2RheSk7XG4gICAgbGV0IG1vbnRoID0gJycgKyAodG9kYXkuZ2V0TW9udGgoKSArIDEpO1xuICAgIGxldCBkYXkgPSAnJyArIHRvZGF5LmdldERhdGUoKTtcbiAgICBsZXQgeWVhciA9IHRvZGF5LmdldEZ1bGxZZWFyKCk7XG5cbiAgICBpZiAobW9udGgubGVuZ3RoIDwgMikge1xuICAgICAgbW9udGggPSAnMCcgKyBtb250aFxuICAgIH1cblxuICAgIGlmIChkYXkubGVuZ3RoIDwgMikge1xuICAgICAgZGF5ID0gJzAnICsgZGF5XG4gICAgfVxuXG4gICAgcmV0dXJuIFt5ZWFyLCBtb250aCwgZGF5XS5qb2luKGpvaW5CeSk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZURhdGUoZXZlbnQpIHtcbiAgdG9kYXkgPSBuZXcgRGF0ZShldmVudC50YXJnZXQudmFsdWUpLnRvRGF0ZVN0cmluZygpO1xuICBob3RlbC5kYXRlID0gdG9kYXk7XG4gIGhvdGVsLnVzZXJEaXJlY3RvcnkuY3VycmVudFVzZXIuYm9va2luZ1NlcnZpY2Uuc29ydEJvb2tpbmdzQnlEYXRlKHRvZGF5KTtcbiAgZGlzcGxheUF2YWlsYWJsZVJvb21zKCk7XG59XG5cbi8vIExBVU5DSCBBUFBcblxuZnVuY3Rpb24gb3BlbkhvdGVsKCkge1xuICBob3RlbC5sYXVuY2goKTtcbiAgbGV0IGRhc2hlZERhdGUgPSBmb3JtYXREYXRlKHRvZGF5LCAnLScpO1xuICBjYWxlbmRhci5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgYCR7ZGFzaGVkRGF0ZX1gKTtcbiAgY2FsZW5kYXIuc2V0QXR0cmlidXRlKCdtaW4nLCBgJHtkYXNoZWREYXRlfWApO1xufVxuXG5mdW5jdGlvbiBsb2dpblVzZXIodXNlcm5hbWUsIHBhc3N3b3JkKSB7XG4gIGxldCB1c2VyVHlwZSA9IGhvdGVsLnVzZXJEaXJlY3RvcnkuY2hvb3NlVXNlcih1c2VybmFtZSwgcGFzc3dvcmQpO1xuICBpZiAodXNlcm5hbWUgJiYgcGFzc3dvcmQgJiYgdXNlclR5cGUgIT09IGZhbHNlKSB7XG4gICAgaG90ZWwudXNlckRpcmVjdG9yeS5jdXJyZW50VXNlci5ib29raW5nU2VydmljZS5zb3J0Qm9va2luZ3NCeURhdGUodG9kYXkpO1xuICAgIHVwZGF0ZURhc2hib2FyZCgpO1xuICAgIGRpc3BsYXlBdmFpbGFibGVSb29tcygpO1xuICB9IGVsc2Uge1xuICAgIGFsZXJ0KCdJbnZhbGlkIHVzZXJuYW1lIGFuZC9vciBwYXNzd29yZCcpXG4gIH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlRGFzaGJvYXJkKCkge1xuICBsZXQgZmlyc3ROYW1lID0gaG90ZWwudXNlckRpcmVjdG9yeS5jdXJyZW50VXNlci5uYW1lLnNwbGl0KCcgJyk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1c2VyLWZpcnN0LW5hbWUnKS5pbm5lclRleHQgPSBmaXJzdE5hbWVbMF07XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2dpbi1zY3JlZW4nKS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcicpLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICBpZiAoaG90ZWwudXNlckRpcmVjdG9yeS5jdXJyZW50VXNlciBpbnN0YW5jZW9mIE1hbmFnZXIpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGFpbHktcmV2ZW51ZScpLmlubmVyVGV4dCA9IGAke2hvdGVsLmNhbGN1bGF0ZVRvdGFsUm9vbVJldmVudWUoKX1gO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwZXJjZW50LXJvb21zLWJvb2tlZCcpLmlubmVyVGV4dCA9IGAke2hvdGVsLnBlcmNlbnRSb29tc0Jvb2tlZH0lYDtcbiAgICBndWVzdERpcmVjdG9yeUJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICBzZWFyY2hCYXJCb29raW5nSGlzdG9yeS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFuYWdlci1zdGF0cycpLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICB9IGVsc2UgaWYgKGhvdGVsLnVzZXJEaXJlY3RvcnkuY3VycmVudFVzZXIgaW5zdGFuY2VvZiBVc2VyKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvdGFsLXVzZXItYmlsbCcpLmlubmVyVGV4dCA9IGhvdGVsLnVzZXJEaXJlY3RvcnkuY3VycmVudFVzZXIucmV0dXJuQmlsbCgpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b3RhbC11c2VyLXNwZW50JykuaW5uZXJUZXh0ID0gaG90ZWwudXNlckRpcmVjdG9yeS5jdXJyZW50VXNlci5yZXR1cm5Ub3RhbFNwZW50T25Sb29tcygpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ndWVzdC1zdGF0cycpLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICB9XG59XG5cbi8vIEFWQUlMQUJMRSBST09NU1xuXG5mdW5jdGlvbiBkaXNwbGF5QXZhaWxhYmxlUm9vbXMoKSB7XG4gIGhvdGVsLnJldHVyblRvZGF5Qm9va2luZ3MoKTtcbiAgY3JlYXRlUm9vbUNhcmRzKGhvdGVsLmF2YWlsYWJsZVJvb21zVG9kYXkpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGF0ZS1zdHJpbmcnKS5pbm5lclRleHQgPSBgQXZhaWxhYmxlIFJvb21zOiAke2hvdGVsLmF2YWlsYWJsZVJvb21zVG9kYXkubGVuZ3RofWA7XG4gIHVzZXJCb29raW5nSGlzdG9yeS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgZ3Vlc3REaXJlY3RvcnlEaXNwbGF5LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICByb29tc0Rpc3BsYXkuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVJvb21DYXJkcyhyb29tcykge1xuICBhdmFpbGFibGVSb29tc0Rpc3BsYXkuaW5uZXJIVE1MID0gJyc7XG4gIHJvb21zLmZvckVhY2gocm9vbSA9PiB7XG4gICAgbGV0IHJvb21DYXJkID0gYDxkaXYgY2xhc3M9XCJyb29tLWNhcmQgZmxleC1jb2x1bW5cIiBpZD1cInJvb20tJHtyb29tLm51bWJlcn1cIj5cbiAgICA8aDM+JHtyb29tLnJvb21UeXBlLnRvVXBwZXJDYXNlKCl9PC9oMz5cbiAgICA8ZGl2IGlkPVwicm9vbS1pbmZvcm1hdGlvblwiPlxuICAgICAgPGltZyBzcmM9XCIuL2ltYWdlcy9iZWQucG5nXCIgYWx0PVwiYmVkLWltZ1wiIGlkPVwiYmVkLWltZ1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImZsZXgtcm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4LWNvbHVtblwiPlxuICAgICAgICAgIDxwPlJvb20gTnVtYmVyOiAke3Jvb20ubnVtYmVyfTwvcD5cbiAgICAgICAgICA8cD4ke3Jvb20ubnVtQmVkc30gJHtyb29tLmJlZFNpemUudG9VcHBlckNhc2UoKX08L3A+XG4gICAgICAgICAgPHA+JCR7cm9vbS5jb3N0UGVyTmlnaHR9IHBlciBuaWdodDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgICR7Y2hlY2tSb29tRm9yQmlkZXQocm9vbSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2PjxidXR0b24gaWQ9XCJib29rLXJvb20tYnV0dG9uLSR7cm9vbS5udW1iZXJ9XCIgdmFsdWU9XCIke3Jvb20ubnVtYmVyfVwiIHR5cGU9XCJidXR0b25cIiBhcmlhLWxhYmVsPVwiYm9vay1yb29tXCI+Qm9vayBSb29tPC9idXR0b24+JHtjaGVja01hbmFnZXJTdGF0dXMocm9vbSl9PC9kaXY+XG4gICAgPC9kaXY+YFxuICAgIGF2YWlsYWJsZVJvb21zRGlzcGxheS5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCByb29tQ2FyZCk7XG4gIH0pXG4gIGlmIChyb29tcy5sZW5ndGggPj0gMSkge1xuICAgIGFkZEV2ZW50TGlzdGVuZXJzVG9Sb29tQ2FyZHMocm9vbXMpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNoZWNrTWFuYWdlclN0YXR1cyhyb29tKSB7XG4gIHJldHVybiBob3RlbC51c2VyRGlyZWN0b3J5LmN1cnJlbnRVc2VyIGluc3RhbmNlb2YgTWFuYWdlciA/IGA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkVudGVyIEd1ZXN0J3MgSURcIiBpZD1cImlkLWlucHV0LWZvci1yb29tLSR7cm9vbS5udW1iZXJ9XCI+PC9pbnB1dD5gIDogJydcbn1cblxuZnVuY3Rpb24gY2hlY2tSb29tRm9yQmlkZXQocm9vbSkge1xuICByZXR1cm4gKHJvb20uYmlkZXQgPT09IHRydWUpID8gYDxpbWcgc3JjPVwiLi9pbWFnZXMvYmlkZXQucG5nXCIgYWx0PVwiYmlkZXQtaW1nXCIgaWQ9XCJiaWRldC1pbWdcIj5gIDogJydcbn1cblxuZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcnNUb1Jvb21DYXJkcyhyb29tcykge1xuICByb29tcy5mb3JFYWNoKHJvb20gPT4ge1xuICAgIGxldCBib29rUm9vbUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNib29rLXJvb20tYnV0dG9uLSR7cm9vbS5udW1iZXJ9YCk7XG4gICAgYm9va1Jvb21CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBib29rUm9vbSlcbiAgfSlcbn1cblxuZnVuY3Rpb24gZmlsdGVyQnlSb29tVHlwZSgpIHtcbiAgbGV0IHNlbGVjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb29tVHlwZS1maWx0ZXInKS5lbGVtZW50c1sncm9vbVR5cGUtZmlsdGVyJ10udmFsdWU7XG4gIGlmIChzZWxlY3Rpb24gPT09ICdhbGwnKSB7XG4gICAgY3JlYXRlUm9vbUNhcmRzKGhvdGVsLmF2YWlsYWJsZVJvb21zVG9kYXkpXG4gIH0gZWxzZSB7XG4gICAgbGV0IGZpbHRlcmVkUm9vbXMgPSBob3RlbC5maWx0ZXJCeVJvb21UeXBlKHNlbGVjdGlvbik7XG4gICAgY3JlYXRlUm9vbUNhcmRzKGZpbHRlcmVkUm9vbXMpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGJvb2tSb29tKCkge1xuICBsZXQgb25TdWNjZXNzID0gKCkgPT4ge1xuICAgIGxldCB1cGRhdGVkQm9va2luZ0RhdGEgPSBib29raW5nQXBpLmdldFJlcXVlc3QoKVxuICAgIHVwZGF0ZWRCb29raW5nRGF0YS50aGVuKHZhbHVlID0+IHtcbiAgICAgIGhvdGVsLnJhd0Jvb2tpbmdEYXRhID0gdmFsdWU7XG4gICAgfSkudGhlbigoKSA9PiB7XG4gICAgICB1cGRhdGVCb29raW5nRGF0YSgpO1xuICAgICAgdXBkYXRlRGFzaGJvYXJkKCk7XG4gICAgICBkaXNwbGF5QXZhaWxhYmxlUm9vbXMoKTtcbiAgICB9KVxuICB9XG4gIGxldCByb29tTnVtYmVyID0gTnVtYmVyKGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJykpO1xuICBpZiAoaG90ZWwudXNlckRpcmVjdG9yeS5jdXJyZW50VXNlciBpbnN0YW5jZW9mIE1hbmFnZXIpIHtcbiAgICBsZXQgdXNlcklkRmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjaWQtaW5wdXQtZm9yLXJvb20tJHtyb29tTnVtYmVyfWApXG4gICAgaWYgKHVzZXJJZEZpZWxkLnZhbHVlICE9PSAnJykge1xuICAgICAgbGV0IHVzZXJJRCA9IHBhcnNlSW50KHVzZXJJZEZpZWxkLnZhbHVlKTtcbiAgICAgIGhvdGVsLnVzZXJEaXJlY3RvcnkuY3VycmVudFVzZXIuYWRkQm9va2luZyh1c2VySUQsIHJvb21OdW1iZXIsIGZvcm1hdERhdGUodG9kYXksICcvJyksIG9uU3VjY2Vzcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFsZXJ0KCdQbGVhc2UgZW50ZXIgYSBVc2VyIElEIG51bWJlciB0byBjb21wbGV0ZSB0aGlzIGJvb2tpbmcuJylcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaG90ZWwudXNlckRpcmVjdG9yeS5jdXJyZW50VXNlci5hZGRCb29raW5nKHJvb21OdW1iZXIsIGZvcm1hdERhdGUodG9kYXksICcvJyksIG9uU3VjY2Vzcyk7XG4gIH1cbn1cblxuLy8gQk9PS0lORyBISVNUT1JZXG5cbmZ1bmN0aW9uIHNob3dCb29raW5nSGlzdG9yeSgpIHtcbiAgcm9vbXNEaXNwbGF5LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICBndWVzdERpcmVjdG9yeURpc3BsYXkuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gIHVzZXJCb29raW5nSGlzdG9yeS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgc2VlQWxsQm9va2luZ3NCdXR0b24uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gIHVzZXJGaWx0ZXJlZEJvb2tpbmdzLmlubmVySFRNTCA9ICcnO1xuICBkaXNwbGF5Qm9va2luZ3MoaG90ZWwudXNlckRpcmVjdG9yeS5jdXJyZW50VXNlci5ib29raW5nU2VydmljZS5jdXJyZW50Qm9va2luZ3MsIHVzZXJDdXJyZW50Qm9va2luZ3MsICdDdXJyZW50IEJvb2tpbmdzOicpO1xuICBkaXNwbGF5Qm9va2luZ3MoaG90ZWwudXNlckRpcmVjdG9yeS5jdXJyZW50VXNlci5ib29raW5nU2VydmljZS5wcmV2aW91c0Jvb2tpbmdzLCB1c2VyUHJldmlvdXNCb29raW5ncywgJ1ByZXZpb3VzIEJvb2tpbmdzOicpO1xuICBhZGRFdmVudExpc3RlbmVyc1RvQ3VycmVudEJvb2tpbmdzKGhvdGVsLnVzZXJEaXJlY3RvcnkuY3VycmVudFVzZXIuYm9va2luZ1NlcnZpY2UuY3VycmVudEJvb2tpbmdzKVxufVxuXG5mdW5jdGlvbiBkaXNwbGF5Qm9va2luZ3MoYm9va2luZ3MsIGNvbnRhaW5lciwgaGVhZGVyKSB7XG4gIGhlYWRlciA9IGA8aDM+JHtoZWFkZXJ9PC9oMz5gXG4gIGNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgYm9va2luZ3MuZm9yRWFjaChib29raW5nID0+IHtcbiAgICBib29raW5nLmRhdGUgPSBuZXcgRGF0ZShib29raW5nLmRhdGUpLnRvRGF0ZVN0cmluZygpO1xuICAgIGxldCBib29raW5nQ2FyZCA9IGA8ZGl2IGNsYXNzPVwiYm9va2luZy1jYXJkIGZsZXgtcm93XCI+XG4gICAgPHA+JHtib29raW5nLmRhdGV9PC9wPlxuICAgIDxwPjxiPlJvb206IDwvYj4gJHtib29raW5nLnJvb21OdW1iZXJ9PC9wPlxuICAgIDxwPjxiPkd1ZXN0IElEOiA8L2I+ICR7Ym9va2luZy51c2VySUR9PC9wPlxuICAgIDxwPjxiPkNvc3Q6IDwvYj4kJHtib29raW5nLmNvc3R9PC9wPlxuICAgIDxkaXY+JHtjaGVja0Jvb2tpbmdTdGF0dXMoYm9va2luZyl9PC9kaXY+XG4gICAgPC9kaXY+YFxuICAgIGNvbnRhaW5lci5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCBib29raW5nQ2FyZCk7XG4gIH0pXG4gIGNvbnRhaW5lci5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCBoZWFkZXIpO1xufVxuXG5mdW5jdGlvbiBjaGVja0Jvb2tpbmdTdGF0dXMoYm9va2luZykge1xuICByZXR1cm4gYm9va2luZy5zdGF0dXMgPT09ICdjdXJyZW50JyA/IGA8YnV0dG9uIGlkPVwiZGVsZXRlLWJvb2tpbmctJHtib29raW5nLmlkfVwiIHZhbHVlPVwiJHtib29raW5nLmlkfVwiIGFyaWEtbGFiZWw9XCJkZWxldGUtYm9va2luZ1wiPkNhbmNlbCBSZXNlcnZhdGlvbjwvYnV0dG9uPmAgOiAnJztcbn1cblxuZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcnNUb0N1cnJlbnRCb29raW5ncyhib29raW5ncykge1xuICBib29raW5ncy5mb3JFYWNoKGJvb2tpbmcgPT4ge1xuICAgIGxldCBjdXJyZW50Qm9va2luZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNkZWxldGUtYm9va2luZy0ke2Jvb2tpbmcuaWR9YCk7XG4gICAgY3VycmVudEJvb2tpbmcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkZWxldGVCb29raW5nKTtcbiAgfSlcbn1cblxuZnVuY3Rpb24gZGVsZXRlQm9va2luZygpIHtcbiAgbGV0IG9uU3VjY2VzcyA9ICgpID0+IHtcbiAgICBsZXQgdXBkYXRlZEJvb2tpbmdEYXRhID0gYm9va2luZ0FwaS5nZXRSZXF1ZXN0KClcbiAgICB1cGRhdGVkQm9va2luZ0RhdGEudGhlbih2YWx1ZSA9PiB7XG4gICAgICBob3RlbC5yYXdCb29raW5nRGF0YSA9IHZhbHVlO1xuICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgdXBkYXRlQm9va2luZ0RhdGEoKTtcbiAgICAgIHVwZGF0ZURhc2hib2FyZCgpO1xuICAgICAgc2hvd0Jvb2tpbmdIaXN0b3J5KCk7XG4gICAgfSlcbiAgfVxuICBsZXQgYm9va2luZ0lEID0gZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgndmFsdWUnKTtcbiAgbGV0IGJvb2tpbmdNZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Jvb2tpbmctbWVzc2FnZS1hcmVhJyk7XG4gIGJvb2tpbmdNZXNzYWdlLmlubmVyVGV4dCA9IGBCb29raW5nICR7Ym9va2luZ0lEfSBoYXMgYmVlbiByZW1vdmVkLmBcbiAgYm9va2luZ0FwaS5kZWxldGVSZXF1ZXN0KHtpZDogcGFyc2VJbnQoYm9va2luZ0lEKX0sIG9uU3VjY2Vzcyk7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGJvb2tpbmdNZXNzYWdlLmlubmVyVGV4dCA9ICcnO1xuICB9LCA1MDAwKVxufVxuXG5mdW5jdGlvbiB1cGRhdGVCb29raW5nRGF0YSgpIHtcbiAgaG90ZWwudXBkYXRlQm9va2luZ3MoKTtcbiAgaG90ZWwucmV0dXJuVG9kYXlCb29raW5ncygpO1xuICBob3RlbC51c2VyRGlyZWN0b3J5LmJvb2tpbmdEYXRhID0gaG90ZWwucmF3Qm9va2luZ0RhdGE7XG4gIGlmIChob3RlbC51c2VyRGlyZWN0b3J5LmN1cnJlbnRVc2VyIGluc3RhbmNlb2YgVXNlcikge1xuICAgIGxldCB1cGRhdGVkVXNlckJvb2tpbmdEYXRhID0gaG90ZWwudXNlckRpcmVjdG9yeS5maWx0ZXJCb29raW5nRGF0YShob3RlbC51c2VyRGlyZWN0b3J5LmN1cnJlbnRVc2VyLmlkKTtcbiAgICBob3RlbC51c2VyRGlyZWN0b3J5LmN1cnJlbnRVc2VyLmJvb2tpbmdTZXJ2aWNlLmJvb2tpbmdEYXRhID0gdXBkYXRlZFVzZXJCb29raW5nRGF0YTtcbiAgfSBlbHNlIGlmIChob3RlbC51c2VyRGlyZWN0b3J5LmN1cnJlbnRVc2VyIGluc3RhbmNlb2YgTWFuYWdlcikge1xuICAgIGhvdGVsLnVzZXJEaXJlY3RvcnkuY3VycmVudFVzZXIuYm9va2luZ1NlcnZpY2UuYm9va2luZ0RhdGEgPSBob3RlbC51c2VyRGlyZWN0b3J5LmJvb2tpbmdEYXRhO1xuICB9XG4gIGhvdGVsLnVzZXJEaXJlY3RvcnkuY3VycmVudFVzZXIuYm9va2luZ1NlcnZpY2UuYm9va2luZ0RhdGEgPSBob3RlbC5yYXdCb29raW5nRGF0YTtcbiAgaG90ZWwudXNlckRpcmVjdG9yeS5jdXJyZW50VXNlci5ib29raW5nU2VydmljZS5jcmVhdGVCb29raW5nSGlzdG9yeSgpO1xuICBob3RlbC51c2VyRGlyZWN0b3J5LmN1cnJlbnRVc2VyLmJvb2tpbmdTZXJ2aWNlLnNvcnRCb29raW5nc0J5RGF0ZSh0b2RheSk7XG59XG5cbmZ1bmN0aW9uIHNlYXJjaEJvb2tpbmdzKCkge1xuICBzZWVBbGxCb29raW5nc0J1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgbGV0IHVzZXJJRCA9IHBhcnNlSW50KHNlYXJjaEJhckJvb2tpbmdIaXN0b3J5LnZhbHVlKTtcbiAgc2VhcmNoQmFyQm9va2luZ0hpc3RvcnkudmFsdWUgPSAnJztcbiAgbGV0IGZvdW5kR3Vlc3QgPSBob3RlbC51c2VyRGlyZWN0b3J5LmZpbmRHdWVzdCh1c2VySUQpO1xuICBsZXQgZmlsdGVyZWRCb29raW5ncyA9IGhvdGVsLnVzZXJEaXJlY3RvcnkuY3VycmVudFVzZXIuYm9va2luZ1NlcnZpY2UuZmlsdGVyQm9va2luZ3NCeUlEKHVzZXJJRCk7XG4gIGlmICghZm91bmRHdWVzdCkge1xuICAgIHNob3dCb29raW5nSGlzdG9yeSgpXG4gIH0gZWxzZSBpZiAoZmlsdGVyZWRCb29raW5ncy5sZW5ndGggPj0gMSkge1xuICAgIGxldCBoZWFkZXIgPSBgQm9va2luZyBIaXN0b3J5IGZvciAke2ZvdW5kR3Vlc3QubmFtZX1gXG4gICAgdXNlckN1cnJlbnRCb29raW5ncy5pbm5lckhUTUwgPSAnJztcbiAgICB1c2VyUHJldmlvdXNCb29raW5ncy5pbm5lckhUTUwgPSAnJztcbiAgICBkaXNwbGF5Qm9va2luZ3MoZmlsdGVyZWRCb29raW5ncy5yZXZlcnNlKCksIHVzZXJGaWx0ZXJlZEJvb2tpbmdzLCBoZWFkZXIpO1xuICB9XG59XG5cbi8vIEdVRVNUIERJUkVDVE9SWVxuXG5mdW5jdGlvbiBkaXNwbGF5R3Vlc3REaXJlY3RvcnkoKSB7XG4gIHJvb21zRGlzcGxheS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgdXNlckJvb2tpbmdIaXN0b3J5LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICBndWVzdERpcmVjdG9yeURpc3BsYXkuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gIHNob3dBbGxHdWVzdHNCdXR0b24uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gIGNyZWF0ZUd1ZXN0Q2FyZHMoaG90ZWwudXNlckRpcmVjdG9yeS5ndWVzdExpc3QpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVHdWVzdENhcmRzKGd1ZXN0cykge1xuICBndWVzdHNDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gIGd1ZXN0cy5mb3JFYWNoKGd1ZXN0ID0+IHtcbiAgICBndWVzdC5ib29raW5nU2VydmljZS5zb3J0Qm9va2luZ3NCeURhdGUodG9kYXkpO1xuICAgIGxldCBndWVzdENhcmQgPSBgPGRpdiBjbGFzcz1cImZsaXAtYm94XCI+XG4gICAgPGRpdiBjbGFzcz1cImZsaXAtYm94LWlubmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiZmxpcC1ib3gtZnJvbnQgZmxleC1jb2x1bW5cIj5cbiAgICAgICAgPGgzIHBhZGRpbmctcmlnaHQ9XCIyNXB4XCI+JHtndWVzdC5pZH08L2gzPlxuICAgICAgICA8aDQ+JHtndWVzdC5uYW1lLnRvVXBwZXJDYXNlKCl9PC9oND5cbiAgICAgICAgPHA+VG90YWwgU3BlbnQ6ICQke2d1ZXN0LnJldHVyblRvdGFsU3BlbnRPblJvb21zKCl9PC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiZmxpcC1ib3gtYmFja1wiIGlkPVwiZ3Vlc3QtYm9va2luZy1oaXN0b3J5XCI+XG4gICAgICAgIDxoMz4ke2d1ZXN0Lm5hbWUudG9VcHBlckNhc2UoKX0nUyBCT09LSU5HIEhJU1RPUlk8L2gzPlxuICAgICAgICA8cD4ke2Rpc3BsYXlHdWVzdEJvb2tpbmdIaXN0b3J5KGd1ZXN0KX08L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8L2Rpdj5gXG4gICAgZ3Vlc3RzQ29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIGd1ZXN0Q2FyZCk7XG4gIH0pXG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlHdWVzdEJvb2tpbmdIaXN0b3J5KGd1ZXN0KSB7XG4gIGxldCBndWVzdEJvb2tpbmdIaXN0b3J5ID0gZ3Vlc3QuYm9va2luZ1NlcnZpY2UuYm9va2luZ0hpc3RvcnkubWFwKGJvb2tpbmcgPT4ge1xuICAgIHJldHVybiBib29raW5nID0gYDxiPiR7bmV3IERhdGUoYm9va2luZy5kYXRlKS50b0RhdGVTdHJpbmcoKX06PC9iPiBSb29tICR7Ym9va2luZy5yb29tTnVtYmVyfSwgJCR7Ym9va2luZy5jb3N0fTxicj5gXG4gIH0pXG4gIGd1ZXN0Qm9va2luZ0hpc3RvcnkgPSBndWVzdEJvb2tpbmdIaXN0b3J5LmpvaW4oJyAnKTtcbiAgcmV0dXJuIGd1ZXN0Qm9va2luZ0hpc3Rvcnk7XG59XG5cbmZ1bmN0aW9uIHNlYXJjaEd1ZXN0cygpIHtcbiAgZ3Vlc3RzQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICBsZXQgbWF0Y2hlZEd1ZXN0cyA9IGhvdGVsLnVzZXJEaXJlY3Rvcnkuc2VhcmNoR3Vlc3RzKHNlYXJjaEJhckd1ZXN0RGlyZWN0b3J5LnZhbHVlKTtcbiAgY3JlYXRlR3Vlc3RDYXJkcyhtYXRjaGVkR3Vlc3RzKTtcbiAgc2hvd0FsbEd1ZXN0c0J1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=