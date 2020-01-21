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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ "swr");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\taylo\\Desktop\\Code\\Homework\\GitHub_Repo\\chaallisat.github.io\\pages\\index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function fetcher(url) {
  return fetch(url).then(r => r.json());
}

function Index() {
  const {
    data,
    error
  } = swr__WEBPACK_IMPORTED_MODULE_2___default()('/api/projects', fetcher); // The following lines has optional chaining added in Next.js v9
  // is the same as 'data && data.author

  let name = data === null || data === void 0 ? void 0 : data.name;
  const description = data === null || data === void 0 ? void 0 : data.description;
  const skills = data === null || data === void 0 ? void 0 : data.skills;
  const website = data === null || data === void 0 ? void 0 : data.site;
  const code = data === null || data === void 0 ? void 0 : data.code;
  const img = data === null || data === void 0 ? void 0 : data.img; // let quote = data?.quote;

  if (!data) name = 'Loading...';
  if (error) name = 'Failed to fetch the project';
  return __jsx("main", {
    className: "jsx-2892838209" + " " + "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2892838209" + " " + "quote",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, description), name && __jsx("span", {
    className: "jsx-2892838209" + " " + "author",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "- ", name), __jsx("div", {
    className: "jsx-2892838209",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, skills), __jsx("p", {
    className: "jsx-2892838209",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx("a", {
    href: website,
    className: "jsx-2892838209",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, name, " link"), __jsx("br", {
    className: "jsx-2892838209",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), code, __jsx("img", {
    src: img,
    alt: name,
    className: "jsx-2892838209",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2892838209",
    __self: this
  }, "main.jsx-2892838209{width:90%;max-width:900px;margin:300px auto;text-aligin:center;}.quote.jsx-2892838209{font-family:cursive;color:#e243de;font-size:24px;padding-bottom:10px;}.author.jsx-2892838209{font-family:sans-serif;color:#559834;font-size:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcdGF5bG9cXERlc2t0b3BcXENvZGVcXEhvbWV3b3JrXFxHaXRIdWJfUmVwb1xcY2hhYWxsaXNhdC5naXRodWIuaW9cXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpQ3dCLEFBRzJCLEFBTVUsQUFNRyxVQVhQLFVBTUYsR0FNQSxHQVhJLFFBTUgsR0FNQSxPQVhJLEtBTUMsR0FNeEIsV0FYQSxNQU1BIiwiZmlsZSI6IkM6XFxVc2Vyc1xcdGF5bG9cXERlc2t0b3BcXENvZGVcXEhvbWV3b3JrXFxHaXRIdWJfUmVwb1xcY2hhYWxsaXNhdC5naXRodWIuaW9cXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1c2VTV1IgZnJvbSBcInN3clwiO1xyXG5cclxuZnVuY3Rpb24gZmV0Y2hlcih1cmwpIHtcclxuICAgIHJldHVybiBmZXRjaCh1cmwpLnRoZW4ociA9PiByLmpzb24oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xyXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKCcvYXBpL3Byb2plY3RzJywgZmV0Y2hlcik7XHJcbiAgICAvLyBUaGUgZm9sbG93aW5nIGxpbmVzIGhhcyBvcHRpb25hbCBjaGFpbmluZyBhZGRlZCBpbiBOZXh0LmpzIHY5XHJcbiAgICAvLyBpcyB0aGUgc2FtZSBhcyAnZGF0YSAmJiBkYXRhLmF1dGhvclxyXG4gICAgbGV0IG5hbWUgPSBkYXRhPy5uYW1lO1xyXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkYXRhPy5kZXNjcmlwdGlvbjtcclxuICAgIGNvbnN0IHNraWxscyA9IGRhdGE/LnNraWxscztcclxuICAgIGNvbnN0IHdlYnNpdGUgPSBkYXRhPy5zaXRlO1xyXG4gICAgY29uc3QgY29kZSA9IGRhdGE/LmNvZGU7XHJcbiAgICBjb25zdCBpbWcgPSBkYXRhPy5pbWdcclxuICAgIC8vIGxldCBxdW90ZSA9IGRhdGE/LnF1b3RlO1xyXG5cclxuICAgIGlmICghZGF0YSkgbmFtZSA9ICdMb2FkaW5nLi4uJztcclxuICAgIGlmIChlcnJvcikgbmFtZSA9ICdGYWlsZWQgdG8gZmV0Y2ggdGhlIHByb2plY3QnO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicXVvdGVcIj57ZGVzY3JpcHRpb259PC9kaXY+XHJcbiAgICAgICAgICAgIHtuYW1lICYmIDxzcGFuIGNsYXNzTmFtZT1cImF1dGhvclwiPi0ge25hbWV9PC9zcGFuPn1cclxuICAgICAgICAgICAgPGRpdj57c2tpbGxzfTwvZGl2PlxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9e3dlYnNpdGV9PntuYW1lfSBsaW5rPC9hPlxyXG4gICAgICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICB7Y29kZX1cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpbWd9IGFsdD17bmFtZX0+PC9pbWc+XHJcbiAgICAgICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgbWFpbiB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA5MDBweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMzAwcHggYXV0bztcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ2luOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnF1b3RlIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNlMjQzZGU7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYXV0aG9ye1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzU1OTgzNDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9tYWluPlxyXG4gICAgKTtcclxufSJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\taylo\\\\Desktop\\\\Code\\\\Homework\\\\GitHub_Repo\\\\chaallisat.github.io\\\\pages\\\\index.js */"));
}

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\taylo\Desktop\Code\Homework\GitHub_Repo\chaallisat.github.io\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("swr");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map