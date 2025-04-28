(window["webpackJsonpBottomSticky"] = window["webpackJsonpBottomSticky"] || []).push([["GetFreePCSConsultationBottomSticky"],{

/***/ "./src/GetFreePCSConsultation/constants/default_data.js":
/*!**************************************************************!*\
  !*** ./src/GetFreePCSConsultation/constants/default_data.js ***!
  \**************************************************************/
/*! exports provided: DEFAULT_CALL_NO, GET_FREE_CONSULTATION_TEXT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DEFAULT_CALL_NO\", function() { return DEFAULT_CALL_NO; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GET_FREE_CONSULTATION_TEXT\", function() { return GET_FREE_CONSULTATION_TEXT; });\nconst DEFAULT_CALL_NO = '08045685554';\nconst GET_FREE_CONSULTATION_TEXT = 'Book Appointment';\n\n//# sourceURL=webpack://BottomSticky/./src/GetFreePCSConsultation/constants/default_data.js?");

/***/ }),

/***/ "./src/GetFreePCSConsultation/constants/index.js":
/*!*******************************************************!*\
  !*** ./src/GetFreePCSConsultation/constants/index.js ***!
  \*******************************************************/
/*! exports provided: DEFAULT_CALL_NO, GET_FREE_CONSULTATION_TEXT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants_default_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/default_data */ \"./src/GetFreePCSConsultation/constants/default_data.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"DEFAULT_CALL_NO\", function() { return _constants_default_data__WEBPACK_IMPORTED_MODULE_0__[\"DEFAULT_CALL_NO\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"GET_FREE_CONSULTATION_TEXT\", function() { return _constants_default_data__WEBPACK_IMPORTED_MODULE_0__[\"GET_FREE_CONSULTATION_TEXT\"]; });\n\n\n\n\n//# sourceURL=webpack://BottomSticky/./src/GetFreePCSConsultation/constants/index.js?");

/***/ }),

/***/ "./src/GetFreePCSConsultation/index.js":
/*!*********************************************!*\
  !*** ./src/GetFreePCSConsultation/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ \"./src/GetFreePCSConsultation/index.scss\");\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/constants */ \"./src/common/constants/index.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ \"./src/GetFreePCSConsultation/constants/index.js\");\n\n\n\nclass GetFreePCSConsultation {\n  constructor(props) {\n    const {\n      product,\n      payload = {},\n      is_placement_controlled\n    } = props;\n    const {\n      contact_no\n    } = payload;\n    this.product = product;\n    this.use_default_placement = !is_placement_controlled;\n    this.phone_no = contact_no || _constants__WEBPACK_IMPORTED_MODULE_2__[\"DEFAULT_CALL_NO\"];\n    const product_data = this.getProductData();\n    const {\n      meta_data,\n      query_selectors,\n      hide_mweb,\n      hide_dweb\n    } = product_data;\n    this.meta_data = meta_data || {};\n    this.query_selectors = query_selectors;\n    this.hide_dweb = hide_dweb;\n    this.hide_mweb = hide_mweb;\n  }\n  getActiveVersion() {\n    return _common_constants__WEBPACK_IMPORTED_MODULE_1__[\"product_version_map\"][this.product];\n  }\n  getProductData() {\n    const {\n      product_name: default_product_name,\n      meta_data: default_meta_data,\n      query_selectors: default_query_selectors,\n      hide_dweb: default_hide_dweb,\n      hide_mweb: default_hide_mweb\n    } = _common_constants__WEBPACK_IMPORTED_MODULE_1__[\"default_config\"];\n    let product_name = default_product_name;\n    let meta_data = default_meta_data || {};\n    let active_version = null;\n    let query_selectors = default_query_selectors;\n    let hide_mweb = default_hide_mweb;\n    let hide_dweb = default_hide_dweb;\n    if (this.product && _common_constants__WEBPACK_IMPORTED_MODULE_1__[\"product_config\"][this.product]) {\n      product_name = _common_constants__WEBPACK_IMPORTED_MODULE_1__[\"product_name_map\"][this.product];\n      active_version = this.getActiveVersion();\n      meta_data = _common_constants__WEBPACK_IMPORTED_MODULE_1__[\"product_config\"][product_name][active_version].meta_data;\n      query_selectors = _common_constants__WEBPACK_IMPORTED_MODULE_1__[\"product_config\"][product_name][active_version].query_selectors;\n      hide_mweb = _common_constants__WEBPACK_IMPORTED_MODULE_1__[\"product_config\"][product_name][active_version].hide_mweb;\n      hide_dweb = _common_constants__WEBPACK_IMPORTED_MODULE_1__[\"product_config\"][product_name][active_version].hide_dweb;\n    }\n    return {\n      meta_data,\n      query_selectors,\n      hide_dweb,\n      hide_mweb\n    };\n  }\n  addTransitionEffects() {\n    const query_selector_id = this.query_selectors.mweb.root_ele;\n    const node = document.getElementById(query_selector_id);\n    node && node.classList.add('get-free-pcs-show-banner');\n  }\n  attachEvent(_ref) {\n    let {\n      element,\n      type,\n      cb\n    } = _ref;\n    if (!element || !cb) {\n      return;\n    }\n    element.addEventListener(type, cb);\n  }\n  handleDwebRedirection() {\n    const root_ele_id = this.query_selectors.dweb.root_ele;\n    const dweb_redirection_cta = document.querySelector(`#${root_ele_id}`);\n    const dwebRedirectionHandler = ev => {\n      ev.preventDefault();\n      ev.stopPropagation();\n      window.open(this.meta_data.dweb_banner_url);\n    };\n    dweb_redirection_cta && this.attachEvent({\n      element: dweb_redirection_cta,\n      cb: dwebRedirectionHandler,\n      type: 'click'\n    });\n  }\n  registerHandlers() {\n    !this.hide_dweb && this.handleDwebRedirection();\n  }\n  getTemplate() {\n    const template = `\n      ${!this.hide_dweb ? this.getDwebTemplate() : ''}\n      ${!this.hide_mweb ? this.getMwebTemplate() : ''}\n    `;\n    return template;\n  }\n  getDwebTemplate() {\n    const root_ele_id = this.query_selectors.dweb.root_ele;\n    return `\n      <div class=\"${this.use_default_placement ? 'get-free-pcs-dweb-wrapper' : ''}\">\n        <div id='${root_ele_id}' class=\"get-free-pcs-dweb\">\n          <div class=\"left-wrapper\">\n            <div class=\"pcs-wrapper\">\n              <img width=\"80px\" src='https://www.practostatic.com/scripts/images/pcs_logo_sm_white_250122.png' />\n            </div>\n            <div class=\"header-wrapper\">\n              <span class=\"header-1\">Book appointment with an expert surgeon </span>\n            </div>\n\n            <div class=\"sub-header\">\n              Piles, Hernia & 50+ surgeries\n            </div>\n\n            <div class=\"cta\">\n              KNOW MORE\n            </div>\n          </div>\n          <div class=\"right-wrapper\">\n            <img src=\"https://www.practostatic.com/practo-care/doctor_home.png\"/>\n          </div>\n        </div>\n      </div>\n    `;\n  }\n  getMwebTemplate() {\n    const root_ele_id = this.query_selectors.mweb.root_ele;\n    return `\n      <div id='${root_ele_id}' class=\"${this.use_default_placement ? 'get-free-pcs-mweb' : ''}\">\n        <div class=\"left-wrapper\">\n          <div class='image-wrapper'>\n            <img \n              width=\"36px\" \n              height=\"36px\"\n              class='doctor-image'\n              src=\"${this.meta_data.left_section_image}\" \n            />\n            ${this.meta_data.is_doctor_available_icon_enabled ? `<span class=\"green-dot\">●</span>` : ''}\n          </div>\n          <span>${this.meta_data.left_section_text}<span>\n        </div>\n        <a href='tel:${this.phone_no}' class='call-cta'>\n          <img \n            src=\"https://www.practostatic.com/practo-care/brand_page/images/ic_phone_white_filled.png\" \n            height=\"16px\" \n            width=\"16px\"\n            class='call-icon'\n          />\n          <span>${_constants__WEBPACK_IMPORTED_MODULE_2__[\"GET_FREE_CONSULTATION_TEXT\"]}</span>\n        </a>\n      </div>\n    `;\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (GetFreePCSConsultation);\n\n//# sourceURL=webpack://BottomSticky/./src/GetFreePCSConsultation/index.js?");

/***/ }),

/***/ "./src/GetFreePCSConsultation/index.scss":
/*!***********************************************!*\
  !*** ./src/GetFreePCSConsultation/index.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack://BottomSticky/./src/GetFreePCSConsultation/index.scss?");

/***/ })

}]);