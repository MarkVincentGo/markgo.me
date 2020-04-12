module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/About.jsx":
/*!*************************!*\
  !*** ./pages/About.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/markvgo/Documents/postHRwork/PersonalWebsite/pages/About.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const aboutStyle = `
.about-container {
  margin-top: 100px;
}

.title {
  font-size: 40px;
  font-weight: 700;
}
`;

const About = () => {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, __jsx("div", {
    className: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, "About Me"), __jsx("style", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/markvgo/Documents/postHRwork/PersonalWebsite/pages/Buttons.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* eslint-disable react/jsx-no-target-blank */

/* eslint-disable react/prop-types */

const style = `
.btn-portfolio {
  height: 50px;
  min-width: 50px;
  width: 150px;
  border: 1px solid white;
  border-radius: 30px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  fill: white;
  background-color: rgba(0,0,0,0.6);
  text-decoration: none;
}
.btn-portfolio:hover {
  background-color: rgba(225,225,225,0.8);
  color: black;
  fill: black;
}

.svg {
  height: 35px;
}

.btn-name {
  margin-left: 10px;
}
`;

const Buttons = ({
  info
}) => {
  return __jsx("a", {
    className: "btn-portfolio",
    href: info.link,
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, __jsx("svg", {
    className: "svg hover",
    viewBox: "0 0 24 24",
    "aria-hidden": "true",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, __jsx("path", {
    d: info.logoPath,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  })), __jsx("h4", {
    className: "btn-name hover",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, info.name), __jsx("style", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/markvgo/Documents/postHRwork/PersonalWebsite/pages/Footer.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const footerStyle = `
.container {
  width: 100%;
  height: 250px;
  background: rgba(0,0,255, 1);
}
`;

const Footer = () => {
  return __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, "Footer", __jsx("style", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Buttons */ "./pages/Buttons.jsx");
var _jsxFileName = "/Users/markvgo/Documents/postHRwork/PersonalWebsite/pages/Header.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const style = `
.header {
  height: 95vh;
  width: 100%;
  background:  
    linear-gradient(9deg, rgb(225,225,225) 150px, rgba(0,0,0,0) 20px), 
    linear-gradient(-9deg, rgb(225,225,225) 150px, rgba(0,0,0,0) 20px), 
    linear-gradient(217deg, rgba(255,0,0,.3), rgba(255,0,0,0) 70.71%),
    linear-gradient(127deg, rgba(0,255,0,.3), rgba(0,255,0,0) 70.71%),
    linear-gradient(336deg, rgba(0,0,255,.3), rgba(0,0,255,0) 70.71%),
    url(https://media.giphy.com/media/ZcdJJvDqTgdGZK8Xd3/giphy.gif) repeat center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.name {
  font-size: 60px;
  font-weight: 700;
}

.info {
  color: white;
  margin: 0px;
}

.btn-container {
  display: flex;
  width: 60%;
  max-width: 600px;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
}
`;
const portfolioButtons = [{
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

const Header = () => {
  return __jsx("div", {
    className: "header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }, __jsx("style", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }, style), __jsx("div", {
    className: "name info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }, "Mark Vincent Go"), __jsx("h3", {
    className: "info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }, "Full-Stack Software Engineer"), __jsx("div", {
    className: "btn-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  }, portfolioButtons.map(info => __jsx(_Buttons__WEBPACK_IMPORTED_MODULE_1__["default"], {
    info: info,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  }))));
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ "./pages/Header.jsx");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Footer */ "./pages/Footer.jsx");
var _jsxFileName = "/Users/markvgo/Documents/postHRwork/PersonalWebsite/pages/Layout.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* eslint-disable react/prop-types */



const layoutStyle = {
  border: '1px solid #DDD',
  backgroundColor: '#e1e1e1',
  fontFamily: 'Montserrat, sans-serif',
  textAlign: 'center'
};

const Layout = ({
  children
}) => __jsx("div", {
  style: layoutStyle,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}, __jsx(_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}), children, __jsx(_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}));

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/markvgo/Documents/postHRwork/PersonalWebsite/pages/ProjectCard.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* eslint-disable react/prop-types */

const cardStyle = `
*,
*:before,
*:after{
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(255,255,255,0);
  outline: 1px solid transparent;
}

.card{
  width: 320px;
  height: 450px;
  position: relative;
  transform-style: preserve-3d;
  transform: translateZ(-140px);
  transition: transform 350ms cubic-bezier(0.390, 0.575, 0.565, 1.000);
  cursor: pointer;
}

.card > div{
  position: absolute;
  width: 320px;
  height: 450px;
  padding: 34px 21px;
  transition: all 350ms cubic-bezier(0.390, 0.575, 0.565, 1.000);
}

.front{
  transform: rotateY(0deg) translateZ(160px); 
  border-radius: 34px 3px 0 0;
  box-shadow: 0px 0px 8px 2px rgba(0,0,0,0.66);
}

.right{ 
  background-image: linear-gradient(0deg, rgba(145,141,144,1) 0%, rgba(92,91,94,0) 100%);
  opacity: 0.08;
  transform: rotateY(90deg) translateZ(160px);
  border-radius: 0 0 3px 34px;
  box-shadow: 0px 0px 8px 2px rgba(0,0,0,0.66);
}

.card:hover{
  transform: translateZ(-160px) rotateY( -90deg);
}

.card:hover .front{
  opacity: 0; 
}

.card:hover .right{
  opacity: 1; 
}

h1,h2{
  margin: 0;
  font-size: 32px;
  letter-spacing: -.25px;
  transform: translateX(-44px);
  font-weight: 700;
}

h2{
  font-size: 21px;
  transform: translateX(-34px);
}

p{
  margin: 0;
  font-weight: 300;
  font-size: 16px;
}

span{
  margin-left: 13px;
  opacity: .55;
}

img{
  transform-origin: top right;
  transition: transform 300ms cubic-bezier(0.390, 0.575, 0.565, 1.000);
  transition-delay: 100ms;
  transform: translateX(21%) rotateZ(13deg) skewX(3deg);
  pointer-events: none;
}

.img-wrapper{
  animation: float 4s cubic-bezier(0.390, 0.575, 0.565, 1.000) infinite alternate;
  position: relative;
  top: -420px; right: -120px;
  pointer-events: none;
  backface-visibility: hidden;
}

@keyframes float{
  0%{
    transform: translateZ(20px);
  }
  100%{
    transform: translateY(-21px) translateX(-13px) translateZ(30px);
  }
}

.card:hover ~ .img-wrapper img{
  transform: scale(0.9) translateX(-40%) translateY(170%) rotateZ(80deg);
}

ul{
  margin-left: 21px;
  padding: 0;
  font-size: 16px;
  font-weight: 300;
  list-style: none;
}

li{
  padding-bottom: 8px;
  position: relative;
}

li:before{
  content: 'x';
  position: absolute;
  left: -21px;
  opacity: .55;
}

button{
  position: absolute;
  right: 21px; 
  bottom: 34px;
  border: none;
  box-shadow: none;
  background: none;
  color: inherit;
  font-weight: 300;
  font-size: 15px;  
  letter-spacing: -.25px;
  font-weight: 700;
  padding: 13px 34px;
  border-radius: 55px;
  background-image: linear-gradient(130deg, rgba(117,51,165,1)  50%, rgba(51,46,57,.89) 100%);
  background-size: 125% 100%;
  background-position: right;
  cursor: pointer;
  box-shadow: 8px 5px 13px rgba(34,34,34,.08);
  transform: scale(0) skewY(13deg);
  transition: all 150ms cubic-bezier(0.390, 0.575, 0.565, 1.000);
  transform-origin: right bottom;
}

.card:hover button{
  transform: scale(1) skewY(0);
}

.card:not(:hover) button{
  opacity: 0;
}

button:hover{
  background-position: left;
}

.price{
  position: absolute;
  bottom: 34px;
  left: 21px;
  font-size: 34px;
  opacity: .34;
}

@keyframes fadeIn{
  0%{
    opacity: 0.33;
    transform: scale(.89);
  }
}

@media only screen and (max-width: 600px){
  body{
    transform: scale(.67);
  }
}

.flip-image {
  height: 200px;
`;

const ProjectCard = ({
  projectInfo
}) => {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193
    },
    __self: undefined
  }, __jsx("div", {
    className: "card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    },
    __self: undefined
  }, __jsx("div", {
    className: "front",
    style: {
      backgroundImage: `linear-gradient(180deg, ${projectInfo.color} 0%, rgba(92,91,94,0) 100%)`
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    },
    __self: undefined
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196
    },
    __self: undefined
  }, projectInfo.name), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197
    },
    __self: undefined
  }, "7.7 deck", __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197
    },
    __self: undefined
  }, "2018")), __jsx("p", {
    className: "price",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: undefined
  }, "$ 89.00")), __jsx("div", {
    className: "right",
    style: {
      backgroundImage: `linear-gradient(180deg, rgba(225,225,225,1) 0%, ${projectInfo.color} 100%)`
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    },
    __self: undefined
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201
    },
    __self: undefined
  }, projectInfo.name), __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202
    },
    __self: undefined
  }, projectInfo.technologies.map(technology => __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204
    },
    __self: undefined
  }, technology))), __jsx("button", {
    type: "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207
    },
    __self: undefined
  }, "Source Code"))), __jsx("div", {
    className: "img-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210
    },
    __self: undefined
  }, __jsx("img", {
    src: projectInfo.longThing,
    alt: projectInfo.name,
    className: "flip-image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211
    },
    __self: undefined
  })), __jsx("style", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213
    },
    __self: undefined
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ProjectCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProjectCard */ "./pages/ProjectCard.jsx");
var _jsxFileName = "/Users/markvgo/Documents/postHRwork/PersonalWebsite/pages/Projects.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const projectStyle = `
.projects-container {
  margin-top: 100px;
}

.title {
  font-size: 40px;
  font-weight: 700;
}

.cards-container {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
`;
const projects = [{
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

const Projects = () => {
  return __jsx("div", {
    className: "projects-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, __jsx("div", {
    className: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, "Projects"), __jsx("div", {
    className: "cards-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, projects.map(card => __jsx(_ProjectCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    projectInfo: card,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  })), __jsx("style", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Layout */ "./pages/Layout.jsx");
/* harmony import */ var _About__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./About */ "./pages/About.jsx");
/* harmony import */ var _Projects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Projects */ "./pages/Projects.jsx");
var _jsxFileName = "/Users/markvgo/Documents/postHRwork/PersonalWebsite/pages/index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




class index extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return __jsx(_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, __jsx(_About__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }), __jsx(_Projects__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }));
  }

}

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./pages/index.jsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/markvgo/Documents/postHRwork/PersonalWebsite/pages/index.jsx */"./pages/index.jsx");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map