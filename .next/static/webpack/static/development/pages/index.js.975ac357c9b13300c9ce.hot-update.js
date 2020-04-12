webpackHotUpdate("static/development/pages/index.js",{

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

var cardStyle = "\n*,\n*:before,\n*:after{\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: rgba(255,255,255,0);\n  outline: 1px solid transparent;\n}\n\n.card{\n  width: 320px;\n  height: 450px;\n  position: relative;\n  transform-style: preserve-3d;\n  transform: translateZ(-140px);\n  transition: transform 350ms cubic-bezier(0.390, 0.575, 0.565, 1.000);\n  cursor: pointer;\n}\n\n.card > div{\n  position: absolute;\n  width: 320px;\n  height: 450px;\n  padding: 34px 21px;\n  transition: all 350ms cubic-bezier(0.390, 0.575, 0.565, 1.000);\n}\n\n.front{\n  background-image: linear-gradient(180deg, rgba(145,141,144,1) 0%, rgba(92,91,94,0) 100%);\n  transform: rotateY(0deg) translateZ(160px); \n  border-radius: 34px 3px 0 0;\n}\n\n.right{ \n  background-image: linear-gradient(0deg, rgba(145,141,144,1) 0%, rgba(92,91,94,0) 100%);\n  opacity: 0.08;\n  transform: rotateY(90deg) translateZ(160px);\n  border-radius: 0 0 3px 34px;\n}\n\n.card:hover{\n  transform: translateZ(-160px) rotateY( -90deg);\n}\n\n.card:hover .front{\n  opacity: 0; \n}\n\n.card:hover .right{\n  opacity: 1; \n}\n\nh1,h2{\n  margin: 0;\n  font-size: 38px;\n  letter-spacing: -.25px;\n  transform: translateX(-44px);\n  font-family: 'Sarala'; \n  font-weight: 700;\n}\n\nh2{\n  font-size: 21px;\n  transform: translateX(-34px);\n}\n\np{\n  margin: 0;\n  font-weight: 300;\n  font-size: 16px;\n}\n\nspan{\n  margin-left: 13px;\n  opacity: .55;\n}\n\nimg{\n  transform-origin: top right;\n  transition: transform 300ms cubic-bezier(0.390, 0.575, 0.565, 1.000);\n  transition-delay: 100ms;\n  transform: translateX(21%) rotateZ(13deg) skewX(3deg);\n  pointer-events: none;\n}\n\n.img-wrapper{\n  animation: float 4s cubic-bezier(0.390, 0.575, 0.565, 1.000) infinite alternate;\n  position: relative;\n  top: -420px; right: 650px;\n  pointer-events: none;\n  backface-visibility: hidden;\n}\n\n@keyframes float{\n  0%{\n    transform: translateZ(20px);\n  }\n  100%{\n    transform: translateY(-21px) translateX(-13px) translateZ(30px);\n  }\n}\n\n.card:hover ~ .img-wrapper img{\n  transform: scale(0.9) translateX(47%) translateY(90%) rotateZ(80deg);\n}\n\nul{\n  margin-left: 21px;\n  padding: 0;\n  font-size: 16px;\n  font-weight: 300;\n  list-style: none;\n}\n\nli{\n  padding-bottom: 8px;\n  position: relative;\n}\n\nli:before{\n  content: 'x';\n  position: absolute;\n  left: -21px;\n  opacity: .55;\n}\n\nbutton{\n  position: absolute;\n  right: 21px; \n  bottom: 34px;\n  border: none;\n  box-shadow: none;\n  background: none;\n  color: inherit;\n  font-family: 'Exo 2';\n  font-weight: 300;\n  font-size: 15px;  \n  letter-spacing: -.25px;\n  font-weight: 700;\n  padding: 13px 34px;\n  border-radius: 55px 55px 21px 55px;\n  background-image: linear-gradient(130deg, rgba(117,51,165,1)  50%, rgba(51,46,57,.89) 100%);\n  background-size: 125% 100%;\n  background-position: right;\n  cursor: pointer;\n  box-shadow: 8px 5px 13px rgba(34,34,34,.08);\n  transform: scale(0) skewY(13deg);\n  transition: all 150ms cubic-bezier(0.390, 0.575, 0.565, 1.000);\n  transform-origin: right bottom;\n}\n\n.card:hover button{\n  transform: scale(1) skewY(0);\n}\n\n.card:not(:hover) button{\n  opacity: 0;\n}\n\nbutton:hover{\n  background-position: left;\n}\n\n.price{\n  position: absolute;\n  bottom: 34px;\n  left: 21px;\n  font-size: 34px;\n  opacity: .34;\n}\n\n@keyframes fadeIn{\n  0%{\n    opacity: 0.33;\n    transform: scale(.89);\n  }\n}\n\n@media only screen and (max-width: 600px){\n  body{\n    transform: scale(.67);\n  }\n}\n";

var ProjectCard = function ProjectCard() {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: this
  }, __jsx("div", {
    className: "card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: this
  }, __jsx("div", {
    className: "front",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193
    },
    __self: this
  }, "Signature"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    },
    __self: this
  }, "7.7 deck", __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    },
    __self: this
  }, "2018")), __jsx("p", {
    className: "price",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    },
    __self: this
  }, "$ 89.00")), __jsx("div", {
    className: "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197
    },
    __self: this
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: this
  }, "Signature"), __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    },
    __self: this
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    },
    __self: this
  }, "Width 7.7\""), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201
    },
    __self: this
  }, "Length31.75\""), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202
    },
    __self: this
  }, "Wheelbase 14\""), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203
    },
    __self: this
  }, "Nose 6.875\""), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204
    },
    __self: this
  }, "Tail 6.25\"")), __jsx("button", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206
    },
    __self: this
  }, "Source Code"))), __jsx("div", {
    className: "img-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209
    },
    __self: this
  }, __jsx("img", {
    src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/577128/deck.png",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210
    },
    __self: this
  })), __jsx("style", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212
    },
    __self: this
  }, cardStyle));
};

/* harmony default export */ __webpack_exports__["default"] = (ProjectCard);

/***/ })

})
//# sourceMappingURL=index.js.975ac357c9b13300c9ce.hot-update.js.map