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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
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
  height: 60vh;
}

.about-title {
  font-size: 40px;
  font-weight: 700;
}

.content {
  display: flex;
  flex-wrap: wrap;
}

.summary-container {
  text-align: left;
  padding-left: 20px;
  width: 70%;
}

.my-summary {
  font-size: 20px;
}

#my-image {
  max-width: 300px;
  margin: 0 auto;
}
`;

const About = () => __jsx("div", {
  className: "about-container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36
  },
  __self: undefined
}, __jsx("div", {
  className: "about-title",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37
  },
  __self: undefined
}, "About Me"), __jsx("div", {
  className: "content",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38
  },
  __self: undefined
}, __jsx("div", {
  className: "summary-container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39
  },
  __self: undefined
}, __jsx("p", {
  className: "my-summary",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 40
  },
  __self: undefined
}, 'Hi Everyone! My name is Mark Go! I\'m happy you found my website and are curious about what I am up to and interested in!'), __jsx("p", {
  className: "my-summary",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 41
  },
  __self: undefined
}, `I am a Biomedical Engineer turned Software Engineer, and I am deeply interested in both fields. I graduated with honors from the University of California, Irvine
                  in 2019, and I have been sharpening my programming skills ever since. When I'm not programming, you can find me playing my favorite games, Rocket League and Call of Duty.
                  I'm also an avid guitarist, I've been playing since I was 10!`), __jsx("p", {
  className: "my-summary",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 46
  },
  __self: undefined
}, `The areas of technology that I am really interested in include machine learning, web development, and medical devices. I've had some really cool 
                  biotech projects while in college, including building a fingertip pulse oximeter and 3-lead electrocardiogram (ECG). `)), __jsx("img", {
  src: "./Me.jpg",
  alt: "it-me",
  id: "my-image",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 51
  },
  __self: undefined
})), __jsx("style", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 53
  },
  __self: undefined
}, aboutStyle));

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
  overflow: hidden;
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
  let isMobile = false;

  if (false) {}

  return __jsx("a", {
    className: "btn-portfolio",
    href: info ? info.link : '#',
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, __jsx("svg", {
    className: "svg hover",
    viewBox: "0 0 24 24",
    "aria-hidden": "true",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, __jsx("path", {
    d: info ? info.logoPath : '',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  })), isMobile ? null : __jsx("h4", {
    className: "btn-name hover",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, info ? info.name : 'null'), __jsx("style", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
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

/* eslint-disable react/prop-types */

const footerStyle = `
.footer-container {
  width: 100%;
  height: 100px;
  background:     
    linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.5)),
    linear-gradient(217deg, rgba(255,0,0,.7), rgba(255,0,0,0) 70.71%),
    linear-gradient(127deg, rgba(0,255,0,.7), rgba(0,255,0,0) 70.71%),
    linear-gradient(336deg, rgba(0,0,255,.7), rgba(0,0,255,0) 70.71%);
  background-size: cover;
  color: white;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  padding-bottom: 30px;
}

.links {
  width: 20%;
  border-top: 1px solid white;
  padding-top: 30px;
  display: flex;
  justify-content: space-evenly;
}

.footer-link {
  color: white;
  text-decoration: none;
}
`;

const Footer = ({
  portfolioButtons
}) => {
  if (portfolioButtons) {
    return __jsx("div", {
      className: "footer-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: undefined
    }, __jsx("div", {
      className: "links left",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: undefined
    }, portfolioButtons.map(site => __jsx("a", {
      className: "footer-link",
      href: site.link,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: undefined
    }, site.name))), __jsx("div", {
      className: "links",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: undefined
    }, __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: undefined
    }, "Site by MARK VINCENT GO")), __jsx("style", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: undefined
    }, footerStyle));
  }

  return null;
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

/* eslint-disable react/prop-types */


const style = `
.header {
  height: 95vh;
  width: 100%;
  background:  
    linear-gradient(9deg, rgb(225,225,225) 150px, rgba(0,0,0,0) 20px), 
    linear-gradient(-9deg, rgb(225,225,225) 150px, rgba(0,0,0,0) 20px), 
    linear-gradient(rgba(0,0,0,.3), rgba(0,0,0,.3)),
    linear-gradient(217deg, rgba(255,0,0,.3), rgba(255,0,0,0) 70.71%),
    linear-gradient(127deg, rgba(0,255,0,.3), rgba(0,255,0,0) 70.71%),
    linear-gradient(336deg, rgba(0,0,255,.3), rgba(0,0,255,0) 70.71%),
    url(header.gif) repeat center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.name {
  font-size: 60px;
  font-weight: 900;
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

const Header = ({
  portfolioButtons
}) => __jsx("div", {
  className: "header",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 45
  },
  __self: undefined
}, __jsx("style", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 46
  },
  __self: undefined
}, style), __jsx("div", {
  className: "name info",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 47
  },
  __self: undefined
}, "Mark Vincent Go"), __jsx("h3", {
  className: "info",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 48
  },
  __self: undefined
}, "Full-Stack Software Engineer"), __jsx("div", {
  className: "btn-container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 49
  },
  __self: undefined
}, portfolioButtons ? portfolioButtons.map(info => __jsx(_Buttons__WEBPACK_IMPORTED_MODULE_1__["default"], {
  key: JSON.stringify(info),
  info: info,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 51
  },
  __self: undefined
})) : null));

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
  padding: 30,
  border: '1px solid #DDD',
  backgroundColor: '#e1e1e1',
  fontFamily: 'Montserrat, sans-serif',
  textAlign: 'center'
};

const Layout = ({
  children,
  portfolioButtons
}) => __jsx("div", {
  style: layoutStyle,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}, __jsx(_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
  portfolioButtons: portfolioButtons,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}), children, __jsx(_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], {
  portfolioButtons: portfolioButtons,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
}));

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./pages/ProjectModal.jsx":
/*!********************************!*\
  !*** ./pages/ProjectModal.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/markvgo/Documents/postHRwork/PersonalWebsite/pages/ProjectModal.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* eslint-disable jsx-a11y/click-events-have-key-events */

/* eslint-disable jsx-a11y/no-static-element-interactions */

/* eslint-disable react/prop-types */

const modalStyle = `
.modal-container {
  display: flex;
  font-family: "Montserrat", sans-serif;
}

.modal-button {
  width: 200px;
  border: 1px solid black;
  padding: 10px;
  border-radius: 55px;
  text-decoration: none;
  margin-top: 20px;
  text-align: center;
  background: 
  linear-gradient(rgba(150,150,150,.4), rgba(150,150,150,.4)),
  linear-gradient(217deg, rgba(255,0,0,.3), rgba(255,0,0,0) 70.71%),
  linear-gradient(127deg, rgba(0,255,0,.3), rgba(0,255,0,0) 70.71%),
  linear-gradient(336deg, rgba(0,0,255,.3), rgba(0,0,255,0) 70.71%);
  color: black;
  box-shadow: 0px 0px 3px 2px rgba(20,20,20,0.4);
}

.modal-button:hover {
  background: 
    linear-gradient(rgba(0,0,0,.3), rgba(0,0,0,.3)),
    linear-gradient(127deg, rgba(255,0,0,.3), rgba(255,0,0,0) 70.71%),
    linear-gradient(217deg, rgba(0,255,0,.3), rgba(0,255,0,0) 70.71%),
    linear-gradient(336deg, rgba(0,0,255,.3), rgba(0,0,255,0) 70.71%);
  box-shadow: 0px 0px 4px 3px rgba(20,20,20,0.5);
}

.project-image {
  width: 70%;
}

.modal-right {
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
`;

const ProjectModal = ({
  selectedProject,
  closeProjectModal
}) => {
  if (selectedProject) {
    return __jsx("div", {
      className: "modal-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: undefined
    }, __jsx("img", {
      className: "modal-left project-image",
      alt: "project-demo",
      src: selectedProject.demo.length ? selectedProject.demo : 'app-under-construction.jpg',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: undefined
    }), __jsx("div", {
      className: "modal-right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: undefined
    }, __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: undefined
    }, "This is my project"), __jsx("a", {
      className: "modal-button",
      href: selectedProject.githubLink,
      target: "_blank",
      rel: "noreferrer noopener",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: undefined
    }, "Source Code"), __jsx("div", {
      className: "modal-button",
      onClick: closeProjectModal,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: undefined
    }, "Exit")), __jsx("style", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: undefined
    }, modalStyle));
  }

  return null;
};

/* harmony default export */ __webpack_exports__["default"] = (ProjectModal);

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
/* harmony import */ var _ProjectsCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProjectsCard */ "./pages/ProjectsCard.jsx");
var _jsxFileName = "/Users/markvgo/Documents/postHRwork/PersonalWebsite/pages/Projects.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* eslint-disable react/prop-types */


const projectStyle = `
.projects-container {
  margin-top: 100px;
}

.projects-title {
  font-size: 40px;
  font-weight: 700;
}

.cards-container {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 65%;
  margin: 30px auto;
}
`;

const Projects = ({
  openProjectModal,
  projects
}) => __jsx("div", {
  className: "projects-container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25
  },
  __self: undefined
}, __jsx("div", {
  className: "projects-title",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26
  },
  __self: undefined
}, "Projects"), __jsx("div", {
  className: "cards-container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27
  },
  __self: undefined
}, projects ? projects.map(card => __jsx(_ProjectsCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
  key: JSON.stringify(card),
  projectInfo: card,
  openProjectModal: openProjectModal,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29
  },
  __self: undefined
})) : null, __jsx("style", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35
  },
  __self: undefined
}, projectStyle)));

/* harmony default export */ __webpack_exports__["default"] = (Projects);

/***/ }),

/***/ "./pages/ProjectsCard.jsx":
/*!********************************!*\
  !*** ./pages/ProjectsCard.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/markvgo/Documents/postHRwork/PersonalWebsite/pages/ProjectsCard.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* eslint-disable jsx-a11y/click-events-have-key-events */

/* eslint-disable jsx-a11y/no-static-element-interactions */

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
  height: 350px;
  position: relative;
  transform-style: preserve-3d;
  transform: translateZ(-140px);
  transition: transform 350ms cubic-bezier(0.390, 0.575, 0.565, 1.000);
  cursor: pointer;
  margin: 0 auto;
  flex: 0 0 34%;
}

.card > div{
  position: absolute;
  width: 320px;
  height: 350px;
  padding: 34px 21px;
  transition: all 350ms cubic-bezier(0.390, 0.575, 0.565, 1.000);
}

.front{
  transform: rotateY(0deg) translateZ(160px); 
  border-radius: 3px;
  box-shadow: 0px 0px 4px 2px rgba(0,0,0,0.4);
  text-align: center;
}

.right{ 
  opacity: 0.08;
  transform: rotateY(90deg) translateZ(160px);
  border-radius: 3px;
  box-shadow: 0px 0px 4px 2px rgba(0,0,0,0.4);
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

.right > .project-card-title{
  margin: 0;
  font-size: 25px;
  letter-spacing: -.25px;
  font-weight: 700;
}

.front > .project-card-title {
  margin-top: 110px;
  font-size: 40px;
  letter-spacing: -.25px;
  font-weight: 700;
}

span{
  margin-left: 13px;
  opacity: .55;
}

.img-wrapper{
  animation: float 4s cubic-bezier(0.390, 0.575, 0.565, 1.000) infinite alternate;
  position: relative;
  top: -340px; right: -120px;
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
  transform: scale(0.9) translateX(-170px) translateY(320px) rotateZ(80deg);
}

ul{
  margin-left: 21px;
  padding: 0;
  font-size: 16px;
  font-weight: 300;
  list-style: none;
}

li{
  font-size: 20px;
  padding-bottom: 8px;
  position: relative;
}

li:before{
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
  padding: 13px 34px;
  border-radius: 55px;
  background-size: 125% 100%;
  background-position: right;
  cursor: pointer;
  box-shadow: 8px 5px 13px rgba(34,34,34,.08);
  transform: scale(0) skewY(13deg);
  transition: all 150ms cubic-bezier(0.390, 0.575, 0.565, 1.000);
  transform-origin: right bottom;
  box-shadow: 0px 0px 2px 1px rgba(20,20,20,0.4);
}

.card:hover button{
  transform: scale(1) skewY(0);
}

.card:not(:hover) button{
  opacity: 0;
}

button:hover{
  background-position: left;
  box-shadow: 0px 0px 3px 2px rgba(20,20,20,0.4);
}

.description{
  width: 250px;
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  bottom: 10px;
  font-size: 18px;
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
  height: 150px;
  transform-origin: top right;
  transition: transform 300ms cubic-bezier(0.390, 0.575, 0.565, 1.000);
  transition-delay: 100ms;
  transform: translateX(21%) rotateZ(13deg) skewX(3deg);
  pointer-events: none;
}

.card-outer-div {
  margin: 30px auto;
  height: 370px;
}
`;

const ProjectsCard = ({
  projectInfo,
  openProjectModal
}) => {
  if (projectInfo) {
    return __jsx("div", {
      className: "card-outer-div",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199
      },
      __self: undefined
    }, __jsx("div", {
      className: "card",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 200
      },
      __self: undefined
    }, __jsx("div", {
      className: "front",
      style: {
        backgroundImage: `linear-gradient(180deg, rgba(92,91,94,0) 0%, ${projectInfo.color} 100%)`
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 201
      },
      __self: undefined
    }, __jsx("h1", {
      className: "project-card-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 202
      },
      __self: undefined
    }, projectInfo.name), __jsx("div", {
      className: "description",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 203
      },
      __self: undefined
    }, projectInfo.description)), __jsx("div", {
      className: "right",
      onClick: () => openProjectModal(projectInfo),
      style: {
        backgroundImage: `linear-gradient(180deg, ${projectInfo.color} 0%, rgba(225,225,225,1) 100%)`
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 205
      },
      __self: undefined
    }, __jsx("h1", {
      className: "project-card-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 210
      },
      __self: undefined
    }, projectInfo.name), __jsx("ul", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 211
      },
      __self: undefined
    }, projectInfo.technologies.map(technology => __jsx("li", {
      key: technology,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 213
      },
      __self: undefined
    }, technology))), __jsx("a", {
      href: projectInfo.githubLink,
      target: "_blank",
      rel: "noreferrer noopener",
      onClick: e => e.stopPropagation(),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 216
      },
      __self: undefined
    }, __jsx("button", {
      type: "button",
      style: {
        backgroundColor: `${projectInfo.color}`,
        color: 'black'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 217
      },
      __self: undefined
    }, "Source Code")))), __jsx("div", {
      className: "img-wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 221
      },
      __self: undefined
    }, __jsx("img", {
      src: projectInfo.longThing,
      alt: projectInfo.name,
      className: "flip-image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 222
      },
      __self: undefined
    })), __jsx("style", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 224
      },
      __self: undefined
    }, cardStyle));
  }

  return null;
};

/* harmony default export */ __webpack_exports__["default"] = (ProjectsCard);

/***/ }),

/***/ "./pages/Technologies.jsx":
/*!********************************!*\
  !*** ./pages/Technologies.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TechnologiesCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TechnologiesCard */ "./pages/TechnologiesCard.jsx");
var _jsxFileName = "/Users/markvgo/Documents/postHRwork/PersonalWebsite/pages/Technologies.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* eslint-disable react/prop-types */


const technologiesStyle = `
.technologies-container {
  height: 120vh;
  width: 100%;
  background:  
  url(triangle.svg) center,
  linear-gradient(9deg, rgb(225,225,225) 150px, rgba(0,0,0,0) 20px), 
  linear-gradient(-9deg, rgb(225,225,225) 150px, rgba(0,0,0,0) 20px),
  linear-gradient(rgba(0,0,0,.3), rgba(0,0,0,.3)),
  linear-gradient(217deg, rgba(255,0,0,.3), rgba(255,0,0,0) 70.71%),
  linear-gradient(127deg, rgba(0,255,0,.3), rgba(0,255,0,0) 70.71%),
  linear-gradient(336deg, rgba(0,0,255,.3), rgba(0,0,255,0) 70.71%),
  url(squares.jpg) center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.title {
  font-size: 40px;
  color: white;
  font-weight: bold;
}

.tech-cards-container {
  margin-top: 40px;
  width: 80%;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
`;

const Technologies = ({
  stacks
}) => __jsx("div", {
  className: "technologies-container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 41
  },
  __self: undefined
}, __jsx("div", {
  className: "title",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 42
  },
  __self: undefined
}, "Technologies"), __jsx("div", {
  className: "tech-cards-container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 43
  },
  __self: undefined
}, stacks ? stacks.map(card => __jsx(_TechnologiesCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
  key: JSON.stringify(card),
  cardInfo: card,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 45
  },
  __self: undefined
})) : null), __jsx("style", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 48
  },
  __self: undefined
}, technologiesStyle));

/* harmony default export */ __webpack_exports__["default"] = (Technologies);

/***/ }),

/***/ "./pages/TechnologiesCard.jsx":
/*!************************************!*\
  !*** ./pages/TechnologiesCard.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/markvgo/Documents/postHRwork/PersonalWebsite/pages/TechnologiesCard.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* eslint-disable react/prop-types */

const techCardStyle = `
.tech-card {
  height: 300px;
  width: 250px;
  border: 1px solid black;
  border-radius: 15px;
  background-color: rgba(225,225,225, 0.85);
  box-shadow: 0px 0px 8px 2px rgba(0,0,0,0.66);
  padding: 30px;
  flex: 0 0 21%;
}

.grow { 
  transition: all .2s ease-in-out; 
}

.grow:hover { 
  transform: scale(1.1); 
}

.tech-card-title {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 15px;
}

.tech-list-container {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  font-size: 18px;
}
`;

const TechnologiesCard = ({
  cardInfo
}) => {
  if (cardInfo) {
    return __jsx("div", {
      className: "tech-card grow",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: undefined
    }, __jsx("div", {
      className: "tech-card-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: undefined
    }, cardInfo.stack), __jsx("div", {
      className: "tech-list-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: undefined
    }, cardInfo.technologies.map(technology => __jsx("div", {
      key: technology,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: undefined
    }, technology))), __jsx("style", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: undefined
    }, techCardStyle));
  }

  return null;
};

/* harmony default export */ __webpack_exports__["default"] = (TechnologiesCard);

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
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-modal */ "react-modal");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ProjectModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProjectModal */ "./pages/ProjectModal.jsx");
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Layout */ "./pages/Layout.jsx");
/* harmony import */ var _About__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./About */ "./pages/About.jsx");
/* harmony import */ var _Technologies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Technologies */ "./pages/Technologies.jsx");
/* harmony import */ var _Projects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Projects */ "./pages/Projects.jsx");
var _jsxFileName = "/Users/markvgo/Documents/postHRwork/PersonalWebsite/pages/index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const fontImport = `
@font-face {
  font-family: 'Montserrat';
  src: url('/fonts/Montserrat-Bold.ttf');
  src: url('/fonts/Montserrat-Regular.ttf');
  src: url('/fonts/Montserrat-Black.ttf');
  src: url('/fonts/Montserrat-ExtraLight.ttf');
}

.ReactModal__Overlay {
  width: 0;
  height: 0;
  margin: auto;
  transition: width 250ms, height 250ms;
}

.ReactModal__Overlay--after-open{
  width: 70vw;
  height: 70vh;
}

.ReactModal__Overlay--before-close{
  width: 0;
  height: 0;
}
`;
class index extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super();
    this.state = {
      isModalOpen: false,
      selectedProject: null,
      socialMediaInfo: [{
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
      }],
      technologiesInfo: [{
        stack: 'Front-End',
        technologies: ['HTML5', 'CSS', 'JavaScript', 'React | Redux', 'Vue']
      }, {
        stack: 'Back-End',
        technologies: ['NodeJS', 'Express']
      }, {
        stack: 'Database',
        technologies: ['MySql', 'MongoDB', 'PostgreSQL', 'Cassandra', 'Redis']
      }, {
        stack: 'Deployment',
        technologies: ['AWS EC2 | S3', 'NGINX', 'Docker', 'Git | GitHub']
      }],
      projectsInfo: [{
        name: 'Big Tuna',
        description: 'House Tour Scheduling Application',
        color: '#bd3754',
        githubLink: 'https://github.com/Big-Tunas/Bluefin-Service-ScheduleTour',
        longThing: '/house-key.png',
        technologies: ['React', 'Styled-Components', 'Docker', 'Express | NodeJS, MySQL'],
        demo: '/FECDemo.gif'
      }, {
        name: 'Bon-App-Etit',
        description: 'Back-End of Restaurant Reservation Service handling 10,000 Requests per second',
        color: '#8431b5',
        githubLink: 'https://github.com/MarkVincentGo/reservation-service',
        longThing: '/utensil.png',
        technologies: ['AWS EC2', 'NGINX', 'Express | NodeJS', 'Docker', 'PostgreSQL'],
        demo: ''
      }, {
        name: 'What2Cook',
        description: 'Recipe Generator Application',
        color: '#3fbf50',
        githubLink: 'https://github.com/MarkVincentGo/What2Cook',
        longThing: '/spatula.png',
        technologies: ['Vue', 'CSS', 'Express | NodeJS', 'MongoDB'],
        demo: '/MVPDemo.gif'
      }, {
        name: 'DomOnion',
        description: 'Deck Building Game',
        color: '#bfb63f',
        githubLink: 'https://github.com/MarkVincentGo/Virtual-Dominion',
        longThing: 'sword.png',
        technologies: ['React', 'Redux', 'Socket.io', 'Express | NodeJS'],
        demo: ''
      }, {
        name: 'Motion Booth',
        description: 'Live-Photo Strip iOS Application',
        color: '#3fbf8a',
        githubLink: '',
        longThing: 'camera-tripod.png',
        technologies: ['React Native', 'XCode', 'Express | NodeJS'],
        demo: ''
      }, {
        name: 'Resume Roasters',
        description: 'Resume Review Service',
        color: '#d19234',
        githubLink: '',
        longThing: 'pencil.png',
        technologies: ['React', 'Express | NodeJS', 'MaterialUI'],
        demo: ''
      }]
    };
    this.openProjectModal = this.openProjectModal.bind(this);
    this.closeProjectModal = this.closeProjectModal.bind(this);
  }

  openProjectModal(projectInfo) {
    this.setState({
      isModalOpen: true,
      selectedProject: projectInfo
    });
  }

  closeProjectModal() {
    this.setState({
      isModalOpen: false,
      selectedProject: null
    });
  }

  render() {
    const {
      isModalOpen,
      selectedProject,
      socialMediaInfo,
      technologiesInfo,
      projectsInfo
    } = this.state;
    return __jsx(_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
      portfolioButtons: socialMediaInfo,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152
      },
      __self: this
    }, __jsx(react_modal__WEBPACK_IMPORTED_MODULE_1___default.a, {
      isOpen: isModalOpen,
      shouldCloseOnEsc: true,
      onRequestClose: this.closeProjectModal,
      style: {
        overlay: {
          margin: 'auto'
        }
      },
      closeTimeoutMS: 200,
      onClick: this.closeProjectModal,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153
      },
      __self: this
    }, __jsx(_ProjectModal__WEBPACK_IMPORTED_MODULE_2__["default"], {
      closeProjectModal: this.closeProjectModal,
      selectedProject: selectedProject,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161
      },
      __self: this
    })), __jsx(_About__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166
      },
      __self: this
    }), __jsx(_Technologies__WEBPACK_IMPORTED_MODULE_5__["default"], {
      stacks: technologiesInfo,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167
      },
      __self: this
    }), __jsx(_Projects__WEBPACK_IMPORTED_MODULE_6__["default"], {
      openProjectModal: this.openProjectModal,
      projects: projectsInfo,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168
      },
      __self: this
    }), __jsx("style", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169
      },
      __self: this
    }, fontImport));
  }

}

/***/ }),

/***/ 4:
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

/***/ }),

/***/ "react-modal":
/*!******************************!*\
  !*** external "react-modal" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-modal");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map