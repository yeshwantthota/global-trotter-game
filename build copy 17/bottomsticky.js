(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["BottomSticky"] = factory();
	else
		root["BottomSticky"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded CSS chunks
/******/ 	var installedCssChunks = {
/******/ 		"main": 0
/******/ 	}
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({"AppDownloadBannerBottomSticky":"AppDownloadBannerBottomSticky","GetCareAiPill":"GetCareAiPill","GetFreePCSConsultationBottomSticky":"GetFreePCSConsultationBottomSticky","PCSConsultationBottomSticky":"PCSConsultationBottomSticky","vendors~GetCareAiBottomSticky":"vendors~GetCareAiBottomSticky","GetCareAiBottomSticky":"GetCareAiBottomSticky"}[chunkId]||chunkId) + ".chunk.js"
/******/ 	}
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// mini-css-extract-plugin CSS loading
/******/ 		var cssChunks = {"AppDownloadBannerBottomSticky":1,"GetCareAiPill":1,"GetFreePCSConsultationBottomSticky":1,"PCSConsultationBottomSticky":1,"GetCareAiBottomSticky":1};
/******/ 		if(installedCssChunks[chunkId]) promises.push(installedCssChunks[chunkId]);
/******/ 		else if(installedCssChunks[chunkId] !== 0 && cssChunks[chunkId]) {
/******/ 			promises.push(installedCssChunks[chunkId] = new Promise(function(resolve, reject) {
/******/ 				var href = "" + ({"AppDownloadBannerBottomSticky":"AppDownloadBannerBottomSticky","GetCareAiPill":"GetCareAiPill","GetFreePCSConsultationBottomSticky":"GetFreePCSConsultationBottomSticky","PCSConsultationBottomSticky":"PCSConsultationBottomSticky","vendors~GetCareAiBottomSticky":"vendors~GetCareAiBottomSticky","GetCareAiBottomSticky":"GetCareAiBottomSticky"}[chunkId]||chunkId) + ".css";
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				var existingLinkTags = document.getElementsByTagName("link");
/******/ 				for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 					var tag = existingLinkTags[i];
/******/ 					var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 					if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return resolve();
/******/ 				}
/******/ 				var existingStyleTags = document.getElementsByTagName("style");
/******/ 				for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 					var tag = existingStyleTags[i];
/******/ 					var dataHref = tag.getAttribute("data-href");
/******/ 					if(dataHref === href || dataHref === fullhref) return resolve();
/******/ 				}
/******/ 				var linkTag = document.createElement("link");
/******/ 				linkTag.rel = "stylesheet";
/******/ 				linkTag.type = "text/css";
/******/ 				linkTag.onload = resolve;
/******/ 				linkTag.onerror = function(event) {
/******/ 					var request = event && event.target && event.target.src || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + request + ")");
/******/ 					err.request = request;
/******/ 					delete installedCssChunks[chunkId]
/******/ 					linkTag.parentNode.removeChild(linkTag)
/******/ 					reject(err);
/******/ 				};
/******/ 				linkTag.href = fullhref;
/******/
/******/ 				var head = document.getElementsByTagName("head")[0];
/******/ 				head.appendChild(linkTag);
/******/ 			}).then(function() {
/******/ 				installedCssChunks[chunkId] = 0;
/******/ 			}));
/******/ 		}
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	__webpack_require__.p = "https://cdn.jsdelivr.net/gh/yeshwantthota/global-trotter-game/build%20copy%2016/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonpBottomSticky"] = window["webpackJsonpBottomSticky"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/common/constants/bottom_sticky_specific_query_selectors.js":
/*!************************************************************************!*\
  !*** ./src/common/constants/bottom_sticky_specific_query_selectors.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _bottom_sticky_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bottom_sticky_types */ \"./src/common/constants/bottom_sticky_types.js\");\n\nconst bottom_sticky_specific_query_selectors = {\n  [_bottom_sticky_types__WEBPACK_IMPORTED_MODULE_0__[\"default\"].pcs_consultation]: {\n    query_selectors: {\n      mweb: {\n        close_cta: '',\n        root_ele: 'bottom-sticky--free-pcs-mweb-root'\n      },\n      dweb: {\n        close_cta: 'bottom-sticky--free-pcs-dweb-close',\n        root_ele: 'bottom-sticky--free-pcs-dweb-root'\n      }\n    }\n  },\n  [_bottom_sticky_types__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get_free_pcs_consultation]: {\n    query_selectors: {\n      mweb: {\n        close_cta: '',\n        root_ele: 'get-free-pcs-mweb-root'\n      },\n      dweb: {\n        close_cta: 'get-free-pcs-dweb-close',\n        root_ele: 'get-free-pcs-dweb-root'\n      }\n    }\n  },\n  [_bottom_sticky_types__WEBPACK_IMPORTED_MODULE_0__[\"default\"].app_download_banner]: {\n    query_selectors: {\n      dweb: {\n        close_cta: 'app-download-banner-dweb-close',\n        root_ele: 'app-download-banner-dweb-root'\n      }\n    }\n  },\n  [_bottom_sticky_types__WEBPACK_IMPORTED_MODULE_0__[\"default\"].care_ai_v1]: {\n    query_selectors: {\n      mweb: {\n        close_cta: '',\n        root_ele: 'care-ai-bottom-sticky-mweb-root'\n      },\n      dweb: {\n        close_cta: 'care-ai-bottom-sticky-dweb-close',\n        root_ele: 'care-ai-bottom-sticky-dweb-root'\n      }\n    }\n  },\n  [_bottom_sticky_types__WEBPACK_IMPORTED_MODULE_0__[\"default\"].care_ai_v2]: {\n    query_selectors: {\n      mweb: {\n        close_cta: '',\n        root_ele: 'care-ai-bottom-sticky-mweb-root'\n      },\n      dweb: {\n        close_cta: 'care-ai-bottom-sticky-dweb-close',\n        root_ele: 'care-ai-bottom-sticky-dweb-root'\n      }\n    }\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (bottom_sticky_specific_query_selectors);\n\n//# sourceURL=webpack://BottomSticky/./src/common/constants/bottom_sticky_specific_query_selectors.js?");

/***/ }),

/***/ "./src/common/constants/bottom_sticky_types.js":
/*!*****************************************************!*\
  !*** ./src/common/constants/bottom_sticky_types.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst bottom_sticky_type_map = {\n  pcs_consultation: 'pcs_consultation',\n  get_free_pcs_consultation: 'get_free_pcs_consultation',\n  app_download_banner: 'app_download_banner',\n  care_ai_v1: 'care_ai_v1',\n  // this is for pill design\n  care_ai_v2: 'care_ai_v2' // this is for bottom sticky design\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (bottom_sticky_type_map);\n\n//# sourceURL=webpack://BottomSticky/./src/common/constants/bottom_sticky_types.js?");

/***/ }),

/***/ "./src/common/constants/common_selector_map.js":
/*!*****************************************************!*\
  !*** ./src/common/constants/common_selector_map.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst common_query_selectors = {\n  bottom_sticky_root_ele: 'bottom-sticky-root-aze12fk'\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (common_query_selectors);\n\n//# sourceURL=webpack://BottomSticky/./src/common/constants/common_selector_map.js?");

/***/ }),

/***/ "./src/common/constants/default_config.js":
/*!************************************************!*\
  !*** ./src/common/constants/default_config.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _bottom_sticky_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bottom_sticky_types */ \"./src/common/constants/bottom_sticky_types.js\");\n/* harmony import */ var _product_name_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product_name_map */ \"./src/common/constants/product_name_map.js\");\n/* harmony import */ var _bottom_sticky_specific_query_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bottom_sticky_specific_query_selectors */ \"./src/common/constants/bottom_sticky_specific_query_selectors.js\");\n\n\n\nconst default_config = {\n  product_name: _product_name_map__WEBPACK_IMPORTED_MODULE_1__[\"default\"].topaz,\n  bottom_sticky_type: _bottom_sticky_types__WEBPACK_IMPORTED_MODULE_0__[\"default\"].pcs_consultation,\n  query_selectors: _bottom_sticky_specific_query_selectors__WEBPACK_IMPORTED_MODULE_2__[\"default\"][_bottom_sticky_types__WEBPACK_IMPORTED_MODULE_0__[\"default\"].pcs_consultation].query_selectors,\n  hide_mweb: false,\n  hide_dweb: false,\n  meta_data: {\n    mweb_banner_url: `/care`,\n    dweb_banner_url: `/care`\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (default_config);\n\n//# sourceURL=webpack://BottomSticky/./src/common/constants/default_config.js?");

/***/ }),

/***/ "./src/common/constants/index.js":
/*!***************************************!*\
  !*** ./src/common/constants/index.js ***!
  \***************************************/
/*! exports provided: bottom_stick_types, bottom_sticky_specific_query_selectors, common_query_selectors, default_config, product_config, product_name_map, product_version_map, versions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _bottom_sticky_specific_query_selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bottom_sticky_specific_query_selectors */ \"./src/common/constants/bottom_sticky_specific_query_selectors.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"bottom_sticky_specific_query_selectors\", function() { return _bottom_sticky_specific_query_selectors__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _bottom_sticky_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bottom_sticky_types */ \"./src/common/constants/bottom_sticky_types.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"bottom_stick_types\", function() { return _bottom_sticky_types__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _common_selector_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common_selector_map */ \"./src/common/constants/common_selector_map.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"common_query_selectors\", function() { return _common_selector_map__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n/* harmony import */ var _default_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./default_config */ \"./src/common/constants/default_config.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default_config\", function() { return _default_config__WEBPACK_IMPORTED_MODULE_3__[\"default\"]; });\n\n/* harmony import */ var _product_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product_config */ \"./src/common/constants/product_config.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"product_config\", function() { return _product_config__WEBPACK_IMPORTED_MODULE_4__[\"default\"]; });\n\n/* harmony import */ var _product_name_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product_name_map */ \"./src/common/constants/product_name_map.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"product_name_map\", function() { return _product_name_map__WEBPACK_IMPORTED_MODULE_5__[\"default\"]; });\n\n/* harmony import */ var _product_version_map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product_version_map */ \"./src/common/constants/product_version_map.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"product_version_map\", function() { return _product_version_map__WEBPACK_IMPORTED_MODULE_6__[\"default\"]; });\n\n/* harmony import */ var _version_map__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./version_map */ \"./src/common/constants/version_map.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"versions\", function() { return _version_map__WEBPACK_IMPORTED_MODULE_7__[\"default\"]; });\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://BottomSticky/./src/common/constants/index.js?");

/***/ }),

/***/ "./src/common/constants/product_config.js":
/*!************************************************!*\
  !*** ./src/common/constants/product_config.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _bottom_sticky_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bottom_sticky_types */ \"./src/common/constants/bottom_sticky_types.js\");\n/* harmony import */ var _bottom_sticky_specific_query_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bottom_sticky_specific_query_selectors */ \"./src/common/constants/bottom_sticky_specific_query_selectors.js\");\n/* harmony import */ var _product_name_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product_name_map */ \"./src/common/constants/product_name_map.js\");\n/* harmony import */ var _version_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./version_map */ \"./src/common/constants/version_map.js\");\n\n\n\n\nconst product_config = {\n  [_product_name_map__WEBPACK_IMPORTED_MODULE_2__[\"default\"].consult_ui]: {\n    [_version_map__WEBPACK_IMPORTED_MODULE_3__[\"default\"].v1]: {\n      bottom_sticky_type: _bottom_sticky_types__WEBPACK_IMPORTED_MODULE_0__[\"default\"].pcs_consultation,\n      query_selectors: _bottom_sticky_specific_query_selectors__WEBPACK_IMPORTED_MODULE_1__[\"default\"][_bottom_sticky_types__WEBPACK_IMPORTED_MODULE_0__[\"default\"].pcs_consultation].query_selectors,\n      hide_mweb: false,\n      hide_dweb: false,\n      meta_data: {\n        mweb_banner_url: `/care?utm_source=consult_homepage&utm_medium=bottomstrip&utm_campaign=PCSConsult`,\n        dweb_banner_url: `/care?utm_source=consult_homepage&utm_medium=bottomstrip&utm_campaign=PCSConsult`\n      }\n    }\n  },\n  [_product_name_map__WEBPACK_IMPORTED_MODULE_2__[\"default\"].consult_web]: {\n    [_version_map__WEBPACK_IMPORTED_MODULE_3__[\"default\"].v1]: {\n      bottom_sticky_type: _bottom_sticky_types__WEBPACK_IMPORTED_MODULE_0__[\"default\"].pcs_consultation,\n      query_selectors: _bottom_sticky_specific_query_selectors__WEBPACK_IMPORTED_MODULE_1__[\"default\"][_bottom_sticky_types__WEBPACK_IMPORTED_MODULE_0__[\"default\"].pcs_consultation].query_selectors,\n      hide_mweb: false,\n      hide_dweb: false,\n      meta_data: {\n        mweb_banner_url: `/care?utm_source=banner&utm_medium=mweb&utm_campaign=PCSQnA`,\n        dweb_banner_url: `/care?utm_source=banner&utm_medium=dweb&utm_campaign=PCSQnA`\n      }\n    }\n  },\n  [_product_name_map__WEBPACK_IMPORTED_MODULE_2__[\"default\"].consult_web_q]: {\n    [_version_map__WEBPACK_IMPORTED_MODULE_3__[\"default\"].v1]: {\n      bottom_sticky_type: _bottom_sticky_types__WEBPACK_IMPORTED_MODULE_0__[\"default\"].care_ai_v1,\n      query_selectors: _bottom_sticky_specific_query_selectors__WEBPACK_IMPORTED_MODULE_1__[\"default\"][_bottom_sticky_types__WEBPACK_IMPORTED_MODULE_0__[\"default\"].care_ai_v1].query_selectors,\n      hide_mweb: false,\n      hide_dweb: true,\n      meta_data: {\n        mweb_banner_url: `/careai?utm_source=consult_web_q&utm_medium=mweb&utm_campaign=CareAI`,\n        dweb_banner_url: ``,\n        left_section_text: 'Try our AI-powered health assistant',\n        is_doctor_available_icon_enabled: false,\n        doctor_image: 'https://www.practostatic.com/scripts/images/bot_image.jpg',\n        send_button_icon: 'https://www.practostatic.com/scripts/images/ic_send_filled.png'\n      }\n    },\n    [_version_map__WEBPACK_IMPORTED_MODULE_3__[\"default\"].v2]: {\n      bottom_sticky_type: _bottom_sticky_types__WEBPACK_IMPORTED_MODULE_0__[\"default\"].care_ai_v2,\n      query_selectors: _bottom_sticky_specific_query_selectors__WEBPACK_IMPORTED_MODULE_1__[\"default\"][_bottom_sticky_types__WEBPACK_IMPORTED_MODULE_0__[\"default\"].care_ai_v2].query_selectors,\n      hide_mweb: false,\n      hide_dweb: true,\n      meta_data: {\n        doctor_image: 'https://www.practostatic.com/scripts/images/bot_image.jpg',\n        send_button_icon: 'https://www.practostatic.com/scripts/images/ic_send_filled.png'\n      }\n    }\n  },\n  [_product_name_map__WEBPACK_IMPORTED_MODULE_2__[\"default\"].healthfeed]: {\n    [_version_map__WEBPACK_IMPORTED_MODULE_3__[\"default\"].v1]: {\n      bottom_sticky_type: _bottom_sticky_types__WEBPACK_IMPORTED_MODULE_0__[\"default\"].pcs_consultation,\n      query_selectors: _bottom_sticky_specific_query_selectors__WEBPACK_IMPORTED_MODULE_1__[\"default\"][_bottom_sticky_types__WEBPACK_IMPORTED_MODULE_0__[\"default\"].pcs_consultation].query_selectors,\n      hide_mweb: true,\n      hide_dweb: false,\n      meta_data: {\n        mweb_banner_url: `/care?utm_source=banner&utm_medium=mweb&utm_campaign=PCSHealthfeed`,\n        dweb_banner_url: `/care?utm_source=banner&utm_medium=dweb&utm_campaign=PCSHealthfeed`\n      }\n    }\n  },\n  [_product_name_map__WEBPACK_IMPORTED_MODULE_2__[\"default\"].healthwiki]: {\n    [_version_map__WEBPACK_IMPORTED_MODULE_3__[\"default\"].v1]: {\n      bottom_sticky_type: _bottom_sticky_types__WEBPACK_IMPORTED_MODULE_0__[\"default\"].pcs_consultation,\n      query_selectors: _bottom_sticky_specific_query_selectors__WEBPACK_IMPORTED_MODULE_1__[\"default\"][_bottom_sticky_types__WEBPACK_IMPORTED_MODULE_0__[\"default\"].pcs_consultation].query_selectors,\n      hide_mweb: false,\n      hide_dweb: false,\n      meta_data: {\n        mweb_banner_url: `/care?utm_source=banner&utm_medium=mweb&utm_campaign=PCSHealthwiki`,\n        dweb_banner_url: `/care?utm_source=banner&utm_medium=dweb&utm_campaign=PCSHealthwiki`\n      }\n    }\n  },\n  [_product_name_map__WEBPACK_IMPORTED_MODULE_2__[\"default\"].practopedia]: {\n    [_version_map__WEBPACK_IMPORTED_MODULE_3__[\"default\"].v1]: {\n      bottom_sticky_type: _bottom_sticky_types__WEBPACK_IMPORTED_MODULE_0__[\"default\"].pcs_consultation,\n      query_selectors: _bottom_sticky_specific_query_selectors__WEBPACK_IMPORTED_MODULE_1__[\"default\"][_bottom_sticky_types__WEBPACK_IMPORTED_MODULE_0__[\"default\"].pcs_consultation].query_selectors,\n      hide_mweb: false,\n      hide_dweb: false,\n      meta_data: {\n        mweb_banner_url: `/care?utm_source=banner&utm_medium=mweb&utm_campaign=PCSPractopedia`,\n        dweb_banner_url: `/care?utm_source=banner&utm_medium=dweb&utm_campaign=PCSPractopedia`\n      }\n    }\n  },\n  [_product_name_map__WEBPACK_IMPORTED_MODULE_2__[\"default\"].marketplace_home]: {\n    [_version_map__WEBPACK_IMPORTED_MODULE_3__[\"default\"].v1]: {\n      bottom_sticky_type: _bottom_sticky_types__WEBPACK_IMPORTED_MODULE_0__[\"default\"].pcs_consultation,\n      query_selectors: _bottom_sticky_specific_query_selectors__WEBPACK_IMPORTED_MODULE_1__[\"default\"][_bottom_sticky_types__WEBPACK_IMPORTED_MODULE_0__[\"default\"].pcs_consultation].query_selectors,\n      hide_mweb: false,\n      hide_dweb: false,\n      meta_data: {\n        mweb_banner_url: `/care?utm_source=banner&utm_medium=mweb&utm_campaign=PCSMarketplace_home`,\n        dweb_banner_url: `/care?utm_source=banner&utm_medium=dweb&utm_campaign=PCSMarketplace_home`\n      }\n    }\n  },\n  [_product_name_map__WEBPACK_IMPORTED_MODULE_2__[\"default\"].consumer_home]: {\n    [_version_map__WEBPACK_IMPORTED_MODULE_3__[\"default\"].v1]: {\n      bottom_sticky_type: _bottom_sticky_types__WEBPACK_IMPORTED_MODULE_0__[\"default\"].app_download_banner,\n      query_selectors: _bottom_sticky_specific_query_selectors__WEBPACK_IMPORTED_MODULE_1__[\"default\"][_bottom_sticky_types__WEBPACK_IMPORTED_MODULE_0__[\"default\"].app_download_banner].query_selectors,\n      hide_mweb: true,\n      hide_dweb: false,\n      meta_data: {\n        dweb_banner_url: `https://practo.onelink.me/1025359428?utm_source=Dweb_homepage&utm_medium=Web2App`,\n        is_doctor_available_icon_enabled: false\n      }\n    }\n  },\n  [_product_name_map__WEBPACK_IMPORTED_MODULE_2__[\"default\"].sapphire]: {\n    [_version_map__WEBPACK_IMPORTED_MODULE_3__[\"default\"].v1]: {\n      bottom_sticky_type: _bottom_sticky_types__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get_free_pcs_consultation,\n      query_selectors: _bottom_sticky_specific_query_selectors__WEBPACK_IMPORTED_MODULE_1__[\"default\"][_bottom_sticky_types__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get_free_pcs_consultation].query_selectors,\n      hide_mweb: false,\n      hide_dweb: true,\n      meta_data: {\n        left_section_image: 'https://www.practostatic.com/practo-care/brand_page/images/dr_saurabh_kumar.png',\n        left_section_text: 'Doctors are available now',\n        is_doctor_available_icon_enabled: true\n      }\n    }\n  },\n  [_product_name_map__WEBPACK_IMPORTED_MODULE_2__[\"default\"].static_page_creator]: {\n    [_version_map__WEBPACK_IMPORTED_MODULE_3__[\"default\"].v1]: {\n      bottom_sticky_type: _bottom_sticky_types__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get_free_pcs_consultation,\n      query_selectors: _bottom_sticky_specific_query_selectors__WEBPACK_IMPORTED_MODULE_1__[\"default\"][_bottom_sticky_types__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get_free_pcs_consultation].query_selectors,\n      hide_mweb: false,\n      hide_dweb: true,\n      meta_data: {\n        left_section_image: 'https://www.practostatic.com/practo-care/brand_page/images/dr_saurabh_kumar.png',\n        left_section_text: 'Doctors are available now',\n        is_doctor_available_icon_enabled: true\n      }\n    }\n  },\n  [_product_name_map__WEBPACK_IMPORTED_MODULE_2__[\"default\"].sapphire_doctor_listing]: {\n    [_version_map__WEBPACK_IMPORTED_MODULE_3__[\"default\"].v1]: {\n      bottom_sticky_type: _bottom_sticky_types__WEBPACK_IMPORTED_MODULE_0__[\"default\"].care_ai_v2,\n      query_selectors: _bottom_sticky_specific_query_selectors__WEBPACK_IMPORTED_MODULE_1__[\"default\"][_bottom_sticky_types__WEBPACK_IMPORTED_MODULE_0__[\"default\"].care_ai_v2].query_selectors,\n      hide_mweb: false,\n      hide_dweb: true,\n      meta_data: {\n        doctor_image: 'https://www.practostatic.com/scripts/images/bot_image.jpg',\n        send_button_icon: 'https://www.practostatic.com/scripts/images/ic_send_filled.png'\n      }\n    }\n  },\n  [_product_name_map__WEBPACK_IMPORTED_MODULE_2__[\"default\"].sapphire_doctor_profile]: {\n    [_version_map__WEBPACK_IMPORTED_MODULE_3__[\"default\"].v1]: {\n      bottom_sticky_type: _bottom_sticky_types__WEBPACK_IMPORTED_MODULE_0__[\"default\"].care_ai_v2,\n      query_selectors: _bottom_sticky_specific_query_selectors__WEBPACK_IMPORTED_MODULE_1__[\"default\"][_bottom_sticky_types__WEBPACK_IMPORTED_MODULE_0__[\"default\"].care_ai_v2].query_selectors,\n      hide_mweb: false,\n      hide_dweb: true,\n      meta_data: {\n        doctor_image: 'https://www.practostatic.com/scripts/images/bot_image.jpg',\n        send_button_icon: 'https://www.practostatic.com/scripts/images/ic_send_filled.png'\n      }\n    }\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (product_config);\n\n//# sourceURL=webpack://BottomSticky/./src/common/constants/product_config.js?");

/***/ }),

/***/ "./src/common/constants/product_name_map.js":
/*!**************************************************!*\
  !*** ./src/common/constants/product_name_map.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst product_name_map = {\n  topaz: 'topaz',\n  consult_web: 'consult_web',\n  consult_web_q: 'consult_web_q',\n  consult_ui: 'consult_ui',\n  healthfeed: 'healthfeed',\n  healthwiki: 'healthwiki',\n  practopedia: 'practopedia',\n  marketplace_home: 'marketplace_home',\n  consumer_home: 'consumer_home',\n  sapphire: 'sapphire',\n  static_page_creator: 'static_page_creator',\n  sapphire_doctor_listing: 'sapphire_doctor_listing',\n  sapphire_doctor_profile: 'sapphire_doctor_profile'\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (product_name_map);\n\n//# sourceURL=webpack://BottomSticky/./src/common/constants/product_name_map.js?");

/***/ }),

/***/ "./src/common/constants/product_version_map.js":
/*!*****************************************************!*\
  !*** ./src/common/constants/product_version_map.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _product_name_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product_name_map */ \"./src/common/constants/product_name_map.js\");\n/* harmony import */ var _version_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./version_map */ \"./src/common/constants/version_map.js\");\n\n\nconst product_version_map = {\n  [_product_name_map__WEBPACK_IMPORTED_MODULE_0__[\"default\"].consult_ui]: _version_map__WEBPACK_IMPORTED_MODULE_1__[\"default\"].v1,\n  [_product_name_map__WEBPACK_IMPORTED_MODULE_0__[\"default\"].consult_web]: _version_map__WEBPACK_IMPORTED_MODULE_1__[\"default\"].v1,\n  [_product_name_map__WEBPACK_IMPORTED_MODULE_0__[\"default\"].healthfeed]: _version_map__WEBPACK_IMPORTED_MODULE_1__[\"default\"].v1,\n  [_product_name_map__WEBPACK_IMPORTED_MODULE_0__[\"default\"].healthwiki]: _version_map__WEBPACK_IMPORTED_MODULE_1__[\"default\"].v1,\n  [_product_name_map__WEBPACK_IMPORTED_MODULE_0__[\"default\"].practopedia]: _version_map__WEBPACK_IMPORTED_MODULE_1__[\"default\"].v1,\n  [_product_name_map__WEBPACK_IMPORTED_MODULE_0__[\"default\"].marketplace_home]: _version_map__WEBPACK_IMPORTED_MODULE_1__[\"default\"].v1,\n  [_product_name_map__WEBPACK_IMPORTED_MODULE_0__[\"default\"].consumer_home]: _version_map__WEBPACK_IMPORTED_MODULE_1__[\"default\"].v1,\n  [_product_name_map__WEBPACK_IMPORTED_MODULE_0__[\"default\"].sapphire]: _version_map__WEBPACK_IMPORTED_MODULE_1__[\"default\"].v1,\n  [_product_name_map__WEBPACK_IMPORTED_MODULE_0__[\"default\"].static_page_creator]: _version_map__WEBPACK_IMPORTED_MODULE_1__[\"default\"].v1,\n  [_product_name_map__WEBPACK_IMPORTED_MODULE_0__[\"default\"].consult_web_q]: _version_map__WEBPACK_IMPORTED_MODULE_1__[\"default\"].v1,\n  [_product_name_map__WEBPACK_IMPORTED_MODULE_0__[\"default\"].sapphire_doctor_listing]: _version_map__WEBPACK_IMPORTED_MODULE_1__[\"default\"].v1,\n  [_product_name_map__WEBPACK_IMPORTED_MODULE_0__[\"default\"].sapphire_doctor_profile]: _version_map__WEBPACK_IMPORTED_MODULE_1__[\"default\"].v1\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (product_version_map);\n\n//# sourceURL=webpack://BottomSticky/./src/common/constants/product_version_map.js?");

/***/ }),

/***/ "./src/common/constants/version_map.js":
/*!*********************************************!*\
  !*** ./src/common/constants/version_map.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst version_map = {\n  v1: 'v1',\n  v2: 'v2'\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (version_map);\n\n//# sourceURL=webpack://BottomSticky/./src/common/constants/version_map.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common/constants */ \"./src/common/constants/index.js\");\n\nclass BottomSticky {\n  constructor(props) {\n    const {\n      product,\n      is_placement_controlled,\n      payload,\n      version\n    } = props || {};\n    this.product = product;\n    this.payload = payload;\n    this.is_placement_controlled = is_placement_controlled;\n    this.version = version;\n    this.bottom_sticky_type = this.getBottomStickyType();\n  }\n  getBottomStickyType() {\n    const {\n      bottom_sticky_type: default_bottom_sticky_type\n    } = _common_constants__WEBPACK_IMPORTED_MODULE_0__[\"default_config\"];\n    let bottom_sticky_type = default_bottom_sticky_type;\n    if (this.product && _common_constants__WEBPACK_IMPORTED_MODULE_0__[\"product_config\"][this.product]) {\n      const active_version = this.version || this.getActiveVersionForProduct();\n      bottom_sticky_type = _common_constants__WEBPACK_IMPORTED_MODULE_0__[\"product_config\"][this.product][active_version].bottom_sticky_type;\n    }\n    return bottom_sticky_type;\n  }\n  getActiveVersionForProduct() {\n    return _common_constants__WEBPACK_IMPORTED_MODULE_0__[\"product_version_map\"][this.product];\n  }\n  add() {\n    let banner = null;\n    switch (this.bottom_sticky_type) {\n      case _common_constants__WEBPACK_IMPORTED_MODULE_0__[\"bottom_stick_types\"].pcs_consultation:\n        {\n          __webpack_require__.e(/*! import() | PCSConsultationBottomSticky */ \"PCSConsultationBottomSticky\").then(__webpack_require__.bind(null, /*! ./FreePcs/PCSConsultationTemplate.js */ \"./src/FreePcs/PCSConsultationTemplate.js\")).then(data => {\n            banner = new data.default({\n              product: this.product,\n              is_placement_controlled: this.is_placement_controlled\n            });\n            const template = banner.getTemplate();\n            this.appendTemplateToBody({\n              template\n            });\n            banner.registerHandlers();\n          }).catch(err => {\n            console.warn(err);\n          });\n          break;\n        }\n      case _common_constants__WEBPACK_IMPORTED_MODULE_0__[\"bottom_stick_types\"].get_free_pcs_consultation:\n        {\n          __webpack_require__.e(/*! import() | GetFreePCSConsultationBottomSticky */ \"GetFreePCSConsultationBottomSticky\").then(__webpack_require__.bind(null, /*! ./GetFreePCSConsultation */ \"./src/GetFreePCSConsultation/index.js\")).then(data => {\n            const TRANSITION_TIME = 50;\n            banner = new data.default({\n              product: this.product,\n              is_placement_controlled: this.is_placement_controlled,\n              payload: this.payload\n            });\n            const template = banner.getTemplate();\n            this.appendTemplateToBody({\n              template\n            });\n            banner.registerHandlers();\n\n            // using set timeout to show transition of bottom sticky when it is added to DOM\n            setTimeout(() => {\n              banner.addTransitionEffects();\n            }, TRANSITION_TIME);\n          }).catch(err => {\n            console.warn(err);\n          });\n          break;\n        }\n      case _common_constants__WEBPACK_IMPORTED_MODULE_0__[\"bottom_stick_types\"].app_download_banner:\n        {\n          __webpack_require__.e(/*! import() | AppDownloadBannerBottomSticky */ \"AppDownloadBannerBottomSticky\").then(__webpack_require__.bind(null, /*! ./AppDownloadBanner */ \"./src/AppDownloadBanner/index.js\")).then(data => {\n            const TRANSITION_TIME = 50;\n            banner = new data.default({\n              product: this.product,\n              is_placement_controlled: this.is_placement_controlled,\n              payload: this.payload\n            });\n            const template = banner.getTemplate();\n            this.appendTemplateToBody({\n              template\n            });\n            banner.registerHandlers();\n\n            // using set timeout to show transition of bottom sticky when it is added to DOM\n            setTimeout(() => {\n              banner.addTransitionEffects();\n            }, TRANSITION_TIME);\n          }).catch(err => {\n            console.warn(err);\n          });\n          break;\n        }\n      case _common_constants__WEBPACK_IMPORTED_MODULE_0__[\"bottom_stick_types\"].care_ai_v1:\n        {\n          __webpack_require__.e(/*! import() | GetCareAiPill */ \"GetCareAiPill\").then(__webpack_require__.bind(null, /*! ./CareAI_V1 */ \"./src/CareAI_V1/index.js\")).then(data => {\n            banner = new data.default({\n              product: this.product,\n              is_placement_controlled: this.is_placement_controlled,\n              payload: this.payload\n            });\n            const template = banner.getTemplate();\n            this.appendTemplateToBody({\n              template\n            });\n            banner.registerHandlers();\n          }).catch(err => {\n            console.warn(err);\n          });\n          break;\n        }\n      case _common_constants__WEBPACK_IMPORTED_MODULE_0__[\"bottom_stick_types\"].care_ai_v2:\n        {\n          Promise.all(/*! import() | GetCareAiBottomSticky */[__webpack_require__.e(\"vendors~GetCareAiBottomSticky\"), __webpack_require__.e(\"GetCareAiBottomSticky\")]).then(__webpack_require__.bind(null, /*! ./CareAI_V2 */ \"./src/CareAI_V2/index.js\")).then(data => {\n            banner = new data.default({\n              product: this.product,\n              is_placement_controlled: this.is_placement_controlled,\n              payload: this.payload\n            });\n            const template = banner.getTemplate();\n            this.appendTemplateToBody({\n              template\n            });\n            banner.registerHandlers();\n          }).catch(err => {\n            console.warn(err);\n          });\n          break;\n        }\n    }\n  }\n  appendTemplateToBody(_ref) {\n    let {\n      template\n    } = _ref;\n    const bottom_sticky_div = document.createElement(\"div\");\n    bottom_sticky_div.id = _common_constants__WEBPACK_IMPORTED_MODULE_0__[\"common_query_selectors\"].bottom_sticky_root_ele;\n    bottom_sticky_div.innerHTML = template;\n    document.body.append(bottom_sticky_div);\n  }\n  remove() {\n    const banner_root_ele = document.getElementById(_common_constants__WEBPACK_IMPORTED_MODULE_0__[\"common_query_selectors\"].bottom_sticky_root_ele);\n    switch (this.bottom_sticky_type) {\n      case _common_constants__WEBPACK_IMPORTED_MODULE_0__[\"bottom_stick_types\"].get_free_pcs_consultation:\n        {\n          /* \n            Before removing the 'banner_root_ele' from DOM, show a smooth transition \n            by removing a css class and then finally remove the node from DOM\n          */\n          const {\n            query_selectors: {\n              mweb: {\n                root_ele = ''\n              } = {}\n            }\n          } = _common_constants__WEBPACK_IMPORTED_MODULE_0__[\"bottom_sticky_specific_query_selectors\"][this.bottom_sticky_type] || {};\n          const TRANSITION_TIME = 500;\n          const node = document.getElementById(root_ele);\n          node && node.classList.remove('get-free-pcs-show-banner');\n\n          // using set timeout to show transition of bottom sticky before it is removed from DOM\n          setTimeout(() => {\n            banner_root_ele && banner_root_ele.remove();\n          }, TRANSITION_TIME);\n          break;\n        }\n      case _common_constants__WEBPACK_IMPORTED_MODULE_0__[\"bottom_stick_types\"].app_download_banner:\n        {\n          /* \n            Before removing the 'banner_root_ele' from DOM, show a smooth transition \n            by removing a css class and then finally remove the node from DOM\n          */\n          const {\n            query_selectors: {\n              mweb: {\n                root_ele = ''\n              } = {}\n            }\n          } = _common_constants__WEBPACK_IMPORTED_MODULE_0__[\"bottom_sticky_specific_query_selectors\"][this.bottom_sticky_type] || {};\n          const TRANSITION_TIME = 500;\n          const node = document.getElementById(root_ele);\n          node && node.classList.remove('app-download-banner__inner--show');\n\n          // using set timeout to show transition of bottom sticky before it is removed from DOM\n          setTimeout(() => {\n            banner_root_ele && banner_root_ele.remove();\n          }, TRANSITION_TIME);\n          break;\n        }\n      default:\n        {\n          banner_root_ele && banner_root_ele.remove();\n        }\n    }\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (BottomSticky);\n\n//# sourceURL=webpack://BottomSticky/./src/index.js?");

/***/ })

/******/ });
});