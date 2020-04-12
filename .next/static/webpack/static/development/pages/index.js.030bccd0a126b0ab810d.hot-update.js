webpackHotUpdate("static/development/pages/index.js",{

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


var style = "\n.header {\n  height: 95vh;\n  width: 100%;\n  background:  \n    linear-gradient(9deg, rgb(225,225,225) 140px, rgba(0,0,0,0) 20px), \n    linear-gradient(-9deg, rgb(225,225,225) 140px, rgba(0,0,0,0) 20px), \n    linear-gradient(217deg, rgba(255,0,0,.3), rgba(255,0,0,0) 70.71%),\n    linear-gradient(127deg, rgba(0,255,0,.3), rgba(0,255,0,0) 70.71%),\n    linear-gradient(336deg, rgba(0,0,255,.3), rgba(0,0,255,0) 70.71%),\n    url(https://media.giphy.com/media/ZcdJJvDqTgdGZK8Xd3/giphy.gif) repeat center;\n  background-size: cover;\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  justify-content: center;\n  align-items: center;\n}\n\n.name {\n  margin-left: 30px;\n  font-size: 60px;\n}\n\n.info {\n  color: white;\n  margin: 0px;\n}\n\n.btn-container {\n  display: flex;\n  width: 60%;\n  max-width: 600px;\n  flex-direction: row;\n  justify-content: space-between;\n  margin-top: 20px;\n}\n";
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
      lineNumber: 63
    },
    __self: this
  }, __jsx("style", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, style), __jsx("h1", {
    className: "name info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, "Mark Vincent Go"), __jsx("h3", {
    className: "info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "Full-Stack Software Engineer"), __jsx("div", {
    className: "btn-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, portfolioButtons.map(function (info) {
    return __jsx(_Buttons__WEBPACK_IMPORTED_MODULE_1__["default"], {
      info: info,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    });
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=index.js.030bccd0a126b0ab810d.hot-update.js.map