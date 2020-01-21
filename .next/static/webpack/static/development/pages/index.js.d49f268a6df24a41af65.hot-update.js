webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/readOnlyError.js":
false,

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
var _jsxFileName = "C:\\Users\\taylo\\Desktop\\Code\\Homework\\GitHub_Repo\\chaallisat.github.io\\pages\\index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function fetcher(url) {
  return fetch(url).then(function (r) {
    return r.json();
  });
}

function Index() {
  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_2__["default"])('/api/projects', fetcher),
      data = _useSWR.data,
      error = _useSWR.error; // The following lines has optional chaining added in Next.js v9
  // is the same as 'data && data.author


  var name = data === null || data === void 0 ? void 0 : data.name;
  var description = data === null || data === void 0 ? void 0 : data.description;
  var skills = data === null || data === void 0 ? void 0 : data.skills;
  var website = data === null || data === void 0 ? void 0 : data.site;
  var code = data === null || data === void 0 ? void 0 : data.code;
  var img = data === null || data === void 0 ? void 0 : data.img; // let quote = data?.quote;

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
    className: "jsx-2892838209" + " " + "autthor",
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
  }), __jsx("br", {
    className: "jsx-2892838209",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), code), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2892838209",
    __self: this
  }, "main.jsx-2892838209{width:90%;max-width:900px;margin:300px auto;text-aligin:center;}.quote.jsx-2892838209{font-family:cursive;color:#e243de;font-size:24px;padding-bottom:10px;}.author.jsx-2892838209{font-family:sans-serif;color:#559834;font-size:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcdGF5bG9cXERlc2t0b3BcXENvZGVcXEhvbWV3b3JrXFxHaXRIdWJfUmVwb1xcY2hhYWxsaXNhdC5naXRodWIuaW9cXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQ3dCLEFBRzJCLEFBTVUsQUFNRyxVQVhQLFVBTUYsR0FNQSxHQVhJLFFBTUgsR0FNQSxPQVhJLEtBTUMsR0FNeEIsV0FYQSxNQU1BIiwiZmlsZSI6IkM6XFxVc2Vyc1xcdGF5bG9cXERlc2t0b3BcXENvZGVcXEhvbWV3b3JrXFxHaXRIdWJfUmVwb1xcY2hhYWxsaXNhdC5naXRodWIuaW9cXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1c2VTV1IgZnJvbSBcInN3clwiO1xyXG5cclxuZnVuY3Rpb24gZmV0Y2hlcih1cmwpIHtcclxuICAgIHJldHVybiBmZXRjaCh1cmwpLnRoZW4ociA9PiByLmpzb24oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xyXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKCcvYXBpL3Byb2plY3RzJywgZmV0Y2hlcik7XHJcbiAgICAvLyBUaGUgZm9sbG93aW5nIGxpbmVzIGhhcyBvcHRpb25hbCBjaGFpbmluZyBhZGRlZCBpbiBOZXh0LmpzIHY5XHJcbiAgICAvLyBpcyB0aGUgc2FtZSBhcyAnZGF0YSAmJiBkYXRhLmF1dGhvclxyXG4gICAgbGV0IG5hbWUgPSBkYXRhPy5uYW1lO1xyXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkYXRhPy5kZXNjcmlwdGlvbjtcclxuICAgIGNvbnN0IHNraWxscyA9IGRhdGE/LnNraWxscztcclxuICAgIGNvbnN0IHdlYnNpdGUgPSBkYXRhPy5zaXRlO1xyXG4gICAgY29uc3QgY29kZSA9IGRhdGE/LmNvZGU7XHJcbiAgICBjb25zdCBpbWcgPSBkYXRhPy5pbWdcclxuICAgIC8vIGxldCBxdW90ZSA9IGRhdGE/LnF1b3RlO1xyXG5cclxuICAgIGlmICghZGF0YSkgbmFtZSA9ICdMb2FkaW5nLi4uJztcclxuICAgIGlmIChlcnJvcikgbmFtZSA9ICdGYWlsZWQgdG8gZmV0Y2ggdGhlIHByb2plY3QnO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicXVvdGVcIj57ZGVzY3JpcHRpb259PC9kaXY+XHJcbiAgICAgICAgICAgIHtuYW1lICYmIDxzcGFuIGNsYXNzTmFtZT1cImF1dHRob3JcIj4tIHtuYW1lfTwvc3Bhbj59XHJcbiAgICAgICAgICAgIDxkaXY+e3NraWxsc308L2Rpdj5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPXt3ZWJzaXRlfT48L2E+XHJcbiAgICAgICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgIHtjb2RlfVxyXG4gICAgICAgICAgICA8L3A+XHJcblxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgIG1haW4ge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogOTAwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDMwMHB4IGF1dG87XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWdpbjogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5xdW90ZSB7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZTI0M2RlO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmF1dGhvcntcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICM1NTk4MzQ7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvbWFpbj5cclxuICAgICk7XHJcbn0iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\taylo\\\\Desktop\\\\Code\\\\Homework\\\\GitHub_Repo\\\\chaallisat.github.io\\\\pages\\\\index.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.d49f268a6df24a41af65.hot-update.js.map