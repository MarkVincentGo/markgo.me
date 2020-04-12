(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/index.js"],{

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inherits.js":
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inherits.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Fmarkvgo%2FDocuments%2FpostHRwork%2FPersonalWebsite%2Fpages%2Findex.jsx!./":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Fmarkvgo%2FDocuments%2FpostHRwork%2FPersonalWebsite%2Fpages%2Findex.jsx ***!
  \**********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/", function() {
      var mod = __webpack_require__(/*! ./pages/index.jsx */ "./pages/index.jsx")
      if(true) {
        module.hot.accept(/*! ./pages/index.jsx */ "./pages/index.jsx", function() {
          if(!next.router.components["/"]) return
          var updatedPage = __webpack_require__(/*! ./pages/index.jsx */ "./pages/index.jsx")
          next.router.update("/", updatedPage)
        })
      }
      return mod
    }]);
  

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_82519ec661270f7f484f ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_82519ec661270f7f484f */ "dll-reference dll_82519ec661270f7f484f"))("./node_modules/react/index.js");

/***/ }),

/***/ "./pages/About.jsx":
/*!*************************!*\
  !*** ./pages/About.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/markvgo/Documents/postHRwork/PersonalWebsite/pages/About.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var aboutStyle = "\n.about-container {\n  margin-top: 100px;\n}\n\n.title {\n  font-size: 40px;\n  font-weight: 700;\n}\n";

var About = function About() {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("div", {
    className: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "About Me"), __jsx("style", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, aboutStyle));
};

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ "./pages/Buttons.jsx":
/*!***************************!*\
  !*** ./pages/Buttons.jsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/markvgo/Documents/postHRwork/PersonalWebsite/pages/Buttons.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* eslint-disable react/jsx-no-target-blank */

/* eslint-disable react/prop-types */

var style = "\n.btn-portfolio {\n  height: 50px;\n  min-width: 50px;\n  width: 150px;\n  border: 1px solid white;\n  border-radius: 30px;\n  color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: white;\n  fill: white;\n  background-color: rgba(0,0,0,0.6);\n  text-decoration: none;\n}\n.btn-portfolio:hover {\n  background-color: rgba(225,225,225,0.8);\n  color: black;\n  fill: black;\n}\n\n.svg {\n  height: 35px;\n}\n\n.btn-name {\n  margin-left: 10px;\n}\n";

var Buttons = function Buttons(_ref) {
  var info = _ref.info;
  return __jsx("a", {
    className: "btn-portfolio",
    href: info.link,
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx("svg", {
    className: "svg hover",
    viewBox: "0 0 24 24",
    "aria-hidden": "true",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx("path", {
    d: info.logoPath,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  })), __jsx("h4", {
    className: "btn-name hover",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, info.name), __jsx("style", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, style));
};

/* harmony default export */ __webpack_exports__["default"] = (Buttons);

/***/ }),

/***/ "./pages/Footer.jsx":
/*!**************************!*\
  !*** ./pages/Footer.jsx ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/markvgo/Documents/postHRwork/PersonalWebsite/pages/Footer.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var footerStyle = "\n.container {\n  width: 100%;\n  height: 250px;\n  background: rgba(0,0,255, 1);\n}\n";

var Footer = function Footer() {
  return __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Footer", __jsx("style", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, footerStyle));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./pages/Header.jsx":
/*!**************************!*\
  !*** ./pages/Header.jsx ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Buttons */ "./pages/Buttons.jsx");
var _jsxFileName = "/Users/markvgo/Documents/postHRwork/PersonalWebsite/pages/Header.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var style = "\n.header {\n  height: 95vh;\n  width: 100%;\n  background:  \n    linear-gradient(9deg, rgb(225,225,225) 150px, rgba(0,0,0,0) 20px), \n    linear-gradient(-9deg, rgb(225,225,225) 150px, rgba(0,0,0,0) 20px), \n    linear-gradient(217deg, rgba(255,0,0,.3), rgba(255,0,0,0) 70.71%),\n    linear-gradient(127deg, rgba(0,255,0,.3), rgba(0,255,0,0) 70.71%),\n    linear-gradient(336deg, rgba(0,0,255,.3), rgba(0,0,255,0) 70.71%),\n    url(https://media.giphy.com/media/ZcdJJvDqTgdGZK8Xd3/giphy.gif) repeat center;\n  background-size: cover;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.name {\n  font-size: 60px;\n  font-weight: 700;\n}\n\n.info {\n  color: white;\n  margin: 0px;\n}\n\n.btn-container {\n  display: flex;\n  width: 60%;\n  max-width: 600px;\n  flex-direction: row;\n  justify-content: space-between;\n  margin-top: 20px;\n}\n";
var portfolioButtons = [{
  name: 'LinkedIn',
  logoPath: 'M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z',
  link: 'https://www.linkedin.com/in/mark-vincent-go/'
}, {
  name: 'GitHub',
  logoPath: 'M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3',
  link: 'https://github.com/MarkVincentGo'
}, {
  name: 'Resume',
  logoPath: 'M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z',
  link: '/MG_SE_Resume.pdf'
}];

var Header = function Header() {
  return __jsx("div", {
    className: "header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, __jsx("style", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, style), __jsx("div", {
    className: "name info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "Mark Vincent Go"), __jsx("h3", {
    className: "info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, "Full-Stack Software Engineer"), __jsx("div", {
    className: "btn-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, portfolioButtons.map(function (info) {
    return __jsx(_Buttons__WEBPACK_IMPORTED_MODULE_1__["default"], {
      info: info,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    });
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./pages/Layout.jsx":
/*!**************************!*\
  !*** ./pages/Layout.jsx ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ "./pages/Header.jsx");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Footer */ "./pages/Footer.jsx");
var _jsxFileName = "/Users/markvgo/Documents/postHRwork/PersonalWebsite/pages/Layout.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* eslint-disable react/prop-types */



var layoutStyle = {
  border: '1px solid #DDD',
  backgroundColor: '#e1e1e1',
  fontFamily: 'Montserrat, sans-serif',
  textAlign: 'center'
};

var Layout = function Layout(_ref) {
  var children = _ref.children;
  return __jsx("div", {
    style: layoutStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx(_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), children, __jsx(_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./pages/ProjectCard.jsx":
/*!*******************************!*\
  !*** ./pages/ProjectCard.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/markvgo/Documents/postHRwork/PersonalWebsite/pages/ProjectCard.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* eslint-disable react/prop-types */

var cardStyle = "\n*,\n*:before,\n*:after{\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: rgba(255,255,255,0);\n  outline: 1px solid transparent;\n}\n\n.card{\n  width: 320px;\n  height: 450px;\n  position: relative;\n  transform-style: preserve-3d;\n  transform: translateZ(-140px);\n  transition: transform 350ms cubic-bezier(0.390, 0.575, 0.565, 1.000);\n  cursor: pointer;\n}\n\n.card > div{\n  position: absolute;\n  width: 320px;\n  height: 450px;\n  padding: 34px 21px;\n  transition: all 350ms cubic-bezier(0.390, 0.575, 0.565, 1.000);\n}\n\n.front{\n  transform: rotateY(0deg) translateZ(160px); \n  border-radius: 34px 3px 0 0;\n  box-shadow: 0px 0px 8px 2px rgba(0,0,0,0.66);\n}\n\n.right{ \n  background-image: linear-gradient(0deg, rgba(145,141,144,1) 0%, rgba(92,91,94,0) 100%);\n  opacity: 0.08;\n  transform: rotateY(90deg) translateZ(160px);\n  border-radius: 0 0 3px 34px;\n  box-shadow: 0px 0px 8px 2px rgba(0,0,0,0.66);\n}\n\n.card:hover{\n  transform: translateZ(-160px) rotateY( -90deg);\n}\n\n.card:hover .front{\n  opacity: 0; \n}\n\n.card:hover .right{\n  opacity: 1; \n}\n\nh1,h2{\n  margin: 0;\n  font-size: 32px;\n  letter-spacing: -.25px;\n  transform: translateX(-44px);\n  font-weight: 700;\n}\n\nh2{\n  font-size: 21px;\n  transform: translateX(-34px);\n}\n\np{\n  margin: 0;\n  font-weight: 300;\n  font-size: 16px;\n}\n\nspan{\n  margin-left: 13px;\n  opacity: .55;\n}\n\nimg{\n  transform-origin: top right;\n  transition: transform 300ms cubic-bezier(0.390, 0.575, 0.565, 1.000);\n  transition-delay: 100ms;\n  transform: translateX(21%) rotateZ(13deg) skewX(3deg);\n  pointer-events: none;\n}\n\n.img-wrapper{\n  animation: float 4s cubic-bezier(0.390, 0.575, 0.565, 1.000) infinite alternate;\n  position: relative;\n  top: -420px; right: -120px;\n  pointer-events: none;\n  backface-visibility: hidden;\n}\n\n@keyframes float{\n  0%{\n    transform: translateZ(20px);\n  }\n  100%{\n    transform: translateY(-21px) translateX(-13px) translateZ(30px);\n  }\n}\n\n.card:hover ~ .img-wrapper img{\n  transform: scale(0.9) translateX(-40%) translateY(170%) rotateZ(80deg);\n}\n\nul{\n  margin-left: 21px;\n  padding: 0;\n  font-size: 16px;\n  font-weight: 300;\n  list-style: none;\n}\n\nli{\n  padding-bottom: 8px;\n  position: relative;\n}\n\nli:before{\n  content: 'x';\n  position: absolute;\n  left: -21px;\n  opacity: .55;\n}\n\nbutton{\n  position: absolute;\n  right: 21px; \n  bottom: 34px;\n  border: none;\n  box-shadow: none;\n  background: none;\n  color: inherit;\n  font-weight: 300;\n  font-size: 15px;  \n  letter-spacing: -.25px;\n  font-weight: 700;\n  padding: 13px 34px;\n  border-radius: 55px;\n  background-image: linear-gradient(130deg, rgba(117,51,165,1)  50%, rgba(51,46,57,.89) 100%);\n  background-size: 125% 100%;\n  background-position: right;\n  cursor: pointer;\n  box-shadow: 8px 5px 13px rgba(34,34,34,.08);\n  transform: scale(0) skewY(13deg);\n  transition: all 150ms cubic-bezier(0.390, 0.575, 0.565, 1.000);\n  transform-origin: right bottom;\n}\n\n.card:hover button{\n  transform: scale(1) skewY(0);\n}\n\n.card:not(:hover) button{\n  opacity: 0;\n}\n\nbutton:hover{\n  background-position: left;\n}\n\n.price{\n  position: absolute;\n  bottom: 34px;\n  left: 21px;\n  font-size: 34px;\n  opacity: .34;\n}\n\n@keyframes fadeIn{\n  0%{\n    opacity: 0.33;\n    transform: scale(.89);\n  }\n}\n\n@media only screen and (max-width: 600px){\n  body{\n    transform: scale(.67);\n  }\n}\n\n.flip-image {\n  height: 200px;\n";

var ProjectCard = function ProjectCard(_ref) {
  var projectInfo = _ref.projectInfo;
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193
    },
    __self: this
  }, __jsx("div", {
    className: "card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    },
    __self: this
  }, __jsx("div", {
    className: "front",
    style: {
      backgroundImage: "linear-gradient(180deg, ".concat(projectInfo.color, " 0%, rgba(92,91,94,0) 100%)")
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196
    },
    __self: this
  }, projectInfo.name), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197
    },
    __self: this
  }, "7.7 deck", __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197
    },
    __self: this
  }, "2018")), __jsx("p", {
    className: "price",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: this
  }, "$ 89.00")), __jsx("div", {
    className: "right",
    style: {
      backgroundImage: "linear-gradient(180deg, rgba(225,225,225,1) 0%, ".concat(projectInfo.color, " 100%)")
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201
    },
    __self: this
  }, projectInfo.name), __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202
    },
    __self: this
  }, projectInfo.technologies.map(function (technology) {
    return __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 204
      },
      __self: this
    }, technology);
  })), __jsx("button", {
    type: "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207
    },
    __self: this
  }, "Source Code"))), __jsx("div", {
    className: "img-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210
    },
    __self: this
  }, __jsx("img", {
    src: projectInfo.longThing,
    alt: projectInfo.name,
    className: "flip-image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211
    },
    __self: this
  })), __jsx("style", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213
    },
    __self: this
  }, cardStyle));
};

/* harmony default export */ __webpack_exports__["default"] = (ProjectCard);

/***/ }),

/***/ "./pages/Projects.jsx":
/*!****************************!*\
  !*** ./pages/Projects.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ProjectCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProjectCard */ "./pages/ProjectCard.jsx");
var _jsxFileName = "/Users/markvgo/Documents/postHRwork/PersonalWebsite/pages/Projects.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var projectStyle = "\n.projects-container {\n  margin-top: 100px;\n}\n\n.title {\n  font-size: 40px;\n  font-weight: 700;\n}\n\n.cards-container {\n  display: flex;\n  justify-content: space-evenly;\n  flex-wrap: wrap;\n}\n";
var projects = [{
  name: 'Big Tuna',
  description: 'House Tour Scheduling Application',
  color: '#42f5ef',
  githubLink: '',
  longThing: '/house-key.png',
  technologies: ['React', 'Styled-Components', 'Docker', 'Express | NodeJS, MySQL']
}, {
  name: 'Bon-App-Etit',
  description: 'Restaurant Reservation Service',
  color: '#915ce6',
  githubLink: '',
  longThing: '/utensil.png',
  technologies: ['AWS EC2', 'NGINX', 'Express | NodeJS', 'Docker', 'PostgreSQL']
}, {
  name: 'What2Cook',
  description: 'Recipe Generator Application',
  color: '#3bd950',
  githubLink: '',
  longThing: '/spatula.png',
  technologies: ['Vue', 'CSS', 'Express | NodeJS', 'MongoDB']
}];

var Projects = function Projects() {
  return __jsx("div", {
    className: "projects-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx("div", {
    className: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "Projects"), __jsx("div", {
    className: "cards-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, projects.map(function (card) {
    return __jsx(_ProjectCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
      projectInfo: card,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    });
  }), __jsx("style", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, projectStyle)));
};

/* harmony default export */ __webpack_exports__["default"] = (Projects);

/***/ }),

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return index; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Layout */ "./pages/Layout.jsx");
/* harmony import */ var _About__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./About */ "./pages/About.jsx");
/* harmony import */ var _Projects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Projects */ "./pages/Projects.jsx");





var _jsxFileName = "/Users/markvgo/Documents/postHRwork/PersonalWebsite/pages/index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;





var index = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(index, _Component);

  function index() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, index);

    _this = Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(index).call(this));
    _this.state = {};
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(index, [{
    key: "render",
    value: function render() {
      return __jsx(_Layout__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, __jsx(_About__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }), __jsx(_Projects__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }));
    }
  }]);

  return index;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);



/***/ }),

/***/ 1:
/*!**************************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F&absolutePagePath=%2FUsers%2Fmarkvgo%2FDocuments%2FpostHRwork%2FPersonalWebsite%2Fpages%2Findex.jsx ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2F&absolutePagePath=%2FUsers%2Fmarkvgo%2FDocuments%2FpostHRwork%2FPersonalWebsite%2Fpages%2Findex.jsx! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Fmarkvgo%2FDocuments%2FpostHRwork%2FPersonalWebsite%2Fpages%2Findex.jsx!./");


/***/ }),

/***/ "dll-reference dll_82519ec661270f7f484f":
/*!*******************************************!*\
  !*** external "dll_82519ec661270f7f484f" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_82519ec661270f7f484f;

/***/ })

},[[1,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=index.js.map