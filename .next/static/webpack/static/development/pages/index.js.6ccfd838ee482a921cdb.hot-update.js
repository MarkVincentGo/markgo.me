webpackHotUpdate("static/development/pages/index.js",{

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


var aboutStyle = "\n.container {\n  margin-top: 100px;\n}\n\n.title {\n  font-size: 40px;\n  font-weight: 700;\n}\n\n.cards-container {\n  display: flex;\n  justify-content: space-evenly;\n  flex-wrap: wrap;\n}\n";
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
    className: "container",
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
  }, aboutStyle)));
};

/* harmony default export */ __webpack_exports__["default"] = (Projects);

/***/ })

})
//# sourceMappingURL=index.js.6ccfd838ee482a921cdb.hot-update.js.map