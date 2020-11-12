webpackHotUpdate("static\\development\\pages\\blog\\[slug].js",{

/***/ "./pages/blog/[slug].js":
/*!******************************!*\
  !*** ./pages/blog/[slug].js ***!
  \******************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/error */ "./node_modules/next/error.js");
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_BlogHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/BlogHeader */ "./components/BlogHeader.js");
/* harmony import */ var _components_BlogBody__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/BlogBody */ "./components/BlogBody.js");
/* harmony import */ var _components_MorePost__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/MorePost */ "./components/MorePost.js");
/* harmony import */ var _components_ShareButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/ShareButton */ "./components/ShareButton.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _components_Layout_Navbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/Layout/Navbar */ "./components/Layout/Navbar.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\HP eliteworkstation\\Desktop\\lambo\\novine-react\\pages\\blog\\[slug].js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









var Blog = function Blog(_ref) {
  _s();

  var post = _ref.post,
      morePosts = _ref.morePosts;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();

  if (!router.isFallback && !post) {
    return __jsx(next_error__WEBPACK_IMPORTED_MODULE_2___default.a, {
      statusCode: 404,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 12
      }
    });
  }

  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 1
    }
  }, __jsx(_components_Layout_Navbar__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 3
    }
  }), __jsx(_components_BlogHeader__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: post === null || post === void 0 ? void 0 : post.fields.title,
    subtitle: post === null || post === void 0 ? void 0 : post.fields.subTitle,
    authorName: post === null || post === void 0 ? void 0 : post.fields.author.fields.name,
    authorImage: post === null || post === void 0 ? void 0 : post.fields.author.fields.image.fields.file.url,
    slug: post === null || post === void 0 ? void 0 : post.fields.slug,
    date: post === null || post === void 0 ? void 0 : post.fields.date,
    coverImage: post === null || post === void 0 ? void 0 : post.fields.coverImage.fields.file.url,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }), __jsx(_components_BlogBody__WEBPACK_IMPORTED_MODULE_4__["default"], {
    content: post === null || post === void 0 ? void 0 : post.fields.content,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Container"], {
    maxWidth: "lg",
    style: {
      marginTop: "8em"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
    container: true,
    direction: "column",
    alignItems: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Typography"], {
    align: "center",
    gutterBottom: true,
    style: {
      fontSize: "1.5rem",
      fontWeight: "bold"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  }, "- Share -"), __jsx(_components_ShareButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
    url: "https://strapsessions/blog/".concat(post === null || post === void 0 ? void 0 : post.fields.slug),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Typography"], {
    align: "center",
    gutterBottom: true,
    style: {
      fontSize: "1.5rem",
      fontWeight: "bold",
      margin: "3em 0 1.5em",
      borderBottom: "2px solid rgb(208 208 208)"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 9
    }
  }, "- Recent Entries -"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
    container: true,
    spacing: 4,
    justify: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 9
    }
  }, morePosts === null || morePosts === void 0 ? void 0 : morePosts.map(function (_ref2) {
    var fields = _ref2.fields;
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
      item: true,
      key: fields.slug,
      xs: 12,
      md: 4,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 13
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
      container: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 15
      }
    }, __jsx(_components_MorePost__WEBPACK_IMPORTED_MODULE_5__["default"], {
      title: fields.title,
      subtitle: fields.subTitle,
      authorName: fields.author.fields.name,
      authorImage: fields.author.fields.image.fields.file.url,
      slug: fields.slug,
      date: fields.date,
      coverImage: fields.coverImage.fields.file.url,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 17
      }
    })));
  }))));
};

_s(Blog, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"]];
});

_c = Blog;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Blog);

var _c;

$RefreshReg$(_c, "Blog");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9ibG9nL1tzbHVnXS5qcyJdLCJuYW1lcyI6WyJCbG9nIiwicG9zdCIsIm1vcmVQb3N0cyIsInJvdXRlciIsInVzZVJvdXRlciIsImlzRmFsbGJhY2siLCJmaWVsZHMiLCJ0aXRsZSIsInN1YlRpdGxlIiwiYXV0aG9yIiwibmFtZSIsImltYWdlIiwiZmlsZSIsInVybCIsInNsdWciLCJkYXRlIiwiY292ZXJJbWFnZSIsImNvbnRlbnQiLCJtYXJnaW5Ub3AiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJtYXJnaW4iLCJib3JkZXJCb3R0b20iLCJtYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7O0FBc0JBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQXlCO0FBQUE7O0FBQUEsTUFBdEJDLElBQXNCLFFBQXRCQSxJQUFzQjtBQUFBLE1BQWhCQyxTQUFnQixRQUFoQkEsU0FBZ0I7QUFDcEMsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFFQSxNQUFJLENBQUNELE1BQU0sQ0FBQ0UsVUFBUixJQUFzQixDQUFDSixJQUEzQixFQUFpQztBQUMvQixXQUFPLE1BQUMsaURBQUQ7QUFBVyxnQkFBVSxFQUFFLEdBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBUDtBQUNEOztBQUVELFNBQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRU0sTUFBQyw4REFBRDtBQUNFLFNBQUssRUFBRUEsSUFBRixhQUFFQSxJQUFGLHVCQUFFQSxJQUFJLENBQUVLLE1BQU4sQ0FBYUMsS0FEdEI7QUFFRSxZQUFRLEVBQUVOLElBQUYsYUFBRUEsSUFBRix1QkFBRUEsSUFBSSxD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ZUFBUyxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLDREQUFEO0FBQ0UsV0FBSyxFQUFFUixNQUFNLENBQUNDLEtBRGhCO0FBRUUsY0FBUSxFQUFFRCxNQUFNLENBQUNFLFFBRm5CO0FBR0UsZ0JBQVUsRUFBRUYsTUFBTSxDQUFDRyxNQUFQLENBQWNILE1BQWQsQ0FBcUJJLElBSG5DO0FBSUUsaUJBQVcsRUFBRUosTUFBTSxDQUFDRyxNQUFQLENBQWNILE1BQWQsQ0FBcUJLLEtBQXJCLENBQTJCTCxNQUEzQixDQUFrQ00sSUFBbEMsQ0FBdUNDLEdBSnREO0FBS0UsVUFBSSxFQUFFUCxNQUFNLENBQUNRLElBTGY7QUFNRSxVQUFJLEVBQUVSLE1BQU0sQ0FBQ1MsSUFOZjtBQU9FLGdCQUFVLEVBQUVULE1BQU0sQ0FBQ1UsVUFBUCxDQUFrQlYsTUFBbEIsQ0FBeUJNLElBQXpCLENBQThCQyxHQVA1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsQ0FERixDQURjO0FBQUEsR0FBZixDQURILENBOUJGLENBWk4sQ0FERTtBQStERCxDQXRFRDs7R0FBTWIsSTtVQUNXSSxxRDs7O0tBRFhKLEk7O0FBd0VTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcYmxvZ1xcW3NsdWddLmpzLmYzOTg2YTUyZGE0MmE4ODY4MmRiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IEVycm9yUGFnZSBmcm9tIFwibmV4dC9lcnJvclwiO1xyXG5cclxuXHJcbmltcG9ydCBCbG9nSGVhZGVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0Jsb2dIZWFkZXJcIjtcclxuaW1wb3J0IEJsb2dCb2R5IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0Jsb2dCb2R5XCI7XHJcbmltcG9ydCBNb3JlUG9zdCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Nb3JlUG9zdFwiO1xyXG5pbXBvcnQgU2hhcmVCdXR0b24gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvU2hhcmVCdXR0b25cIjtcclxuXHJcbmltcG9ydCB7IGdldFBvc3RCeVNsdWcsIGdldE1vcmVQb3N0cywgZ2V0QWxsUG9zdHNXaXRoU2x1ZyB9IGZyb20gXCIuLi8uLi9saWIvaW5kZXhcIjtcclxuXHJcbmltcG9ydCB7IENvbnRhaW5lciwgR3JpZCwgVHlwb2dyYXBoeSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0xheW91dC9OYXZiYXJcIjtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcclxuICBjb25zdCBhbGxQb3N0cyA9IGF3YWl0IGdldEFsbFBvc3RzV2l0aFNsdWcoKTtcclxuICByZXR1cm4ge1xyXG4gICAgcGF0aHM6IGFsbFBvc3RzPy5tYXAoKHsgc2x1ZyB9KSA9PiBgL2Jsb2cvJHtzbHVnfWApID8/IFtdLFxyXG4gICAgZmFsbGJhY2s6IHRydWUsXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zIH0pIHtcclxuICBjb25zdCBwb3N0ID0gYXdhaXQgZ2V0UG9zdEJ5U2x1ZyhwYXJhbXMuc2x1Zyk7XHJcbiAgY29uc3QgbW9yZVBvc3RzID0gYXdhaXQgZ2V0TW9yZVBvc3RzKHBhcmFtcy5zbHVnKTtcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgcG9zdDogcG9zdCA/IHBvc3QgOiBudWxsLFxyXG4gICAgICBtb3JlUG9zdHM6IG1vcmVQb3N0cyA/IG1vcmVQb3N0cyA6IG51bGwsXHJcbiAgICB9LFxyXG4gICAgdW5zdGFibGVfcmV2YWxpZGF0ZTogMSxcclxuICB9O1xyXG59XHJcblxyXG5jb25zdCBCbG9nID0gKHsgcG9zdCwgbW9yZVBvc3RzIH0pID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgaWYgKCFyb3V0ZXIuaXNGYWxsYmFjayAmJiAhcG9zdCkge1xyXG4gICAgcmV0dXJuIDxFcnJvclBhZ2Ugc3RhdHVzQ29kZT17NDA0fSAvPjtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbjxkaXY+XHJcbiAgPE5hdmJhci8+XHJcbiAgICAgIDxCbG9nSGVhZGVyXHJcbiAgICAgICAgdGl0bGU9e3Bvc3Q/LmZpZWxkcy50aXRsZX1cclxuICAgICAgICBzdWJ0aXRsZT17cG9zdD8uZmllbGRzLnN1YlRpdGxlfVxyXG4gICAgICAgIGF1dGhvck5hbWU9e3Bvc3Q/LmZpZWxkcy5hdXRob3IuZmllbGRzLm5hbWV9XHJcbiAgICAgICAgYXV0aG9ySW1hZ2U9e3Bvc3Q/LmZpZWxkcy5hdXRob3IuZmllbGRzLmltYWdlLmZpZWxkcy5maWxlLnVybH1cclxuICAgICAgICBzbHVnPXtwb3N0Py5maWVsZHMuc2x1Z31cclxuICAgICAgICBkYXRlPXtwb3N0Py5maWVsZHMuZGF0ZX1cclxuICAgICAgICBjb3ZlckltYWdlPXtwb3N0Py5maWVsZHMuY292ZXJJbWFnZS5maWVsZHMuZmlsZS51cmx9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxCbG9nQm9keSBjb250ZW50PXtwb3N0Py5maWVsZHMuY29udGVudH0gLz5cclxuICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cImxnXCIgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjhlbVwiIH19PlxyXG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBkaXJlY3Rpb249XCJjb2x1bW5cIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtPlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgIGFsaWduPVwiY2VudGVyXCJcclxuICAgICAgICAgICAgICBndXR0ZXJCb3R0b21cclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMS41cmVtXCIsXHJcbiAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgLSBTaGFyZSAtXHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPFNoYXJlQnV0dG9uXHJcbiAgICAgICAgICAgICAgdXJsPXtgaHR0cHM6Ly9zdHJhcHNlc3Npb25zL2Jsb2cvJHtwb3N0Py5maWVsZHMuc2x1Z31gfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxyXG4gICAgICAgICAgZ3V0dGVyQm90dG9tXHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBmb250U2l6ZTogXCIxLjVyZW1cIixcclxuICAgICAgICAgICAgZm9udFdlaWdodDogXCJib2xkXCIsXHJcbiAgICAgICAgICAgIG1hcmdpbjogXCIzZW0gMCAxLjVlbVwiLFxyXG4gICAgICAgICAgICBib3JkZXJCb3R0b206IFwiMnB4IHNvbGlkIHJnYigyMDggMjA4IDIwOClcIixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgLSBSZWNlbnQgRW50cmllcyAtXHJcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXs0fSBqdXN0aWZ5PVwiY2VudGVyXCI+XHJcbiAgICAgICAgICB7bW9yZVBvc3RzPy5tYXAoKHsgZmllbGRzIH0pID0+IChcclxuICAgICAgICAgICAgPEdyaWQgaXRlbSBrZXk9e2ZpZWxkcy5zbHVnfSB4cz17MTJ9IG1kPXs0fT5cclxuICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8TW9yZVBvc3RcclxuICAgICAgICAgICAgICAgICAgdGl0bGU9e2ZpZWxkcy50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgc3VidGl0bGU9e2ZpZWxkcy5zdWJUaXRsZX1cclxuICAgICAgICAgICAgICAgICAgYXV0aG9yTmFtZT17ZmllbGRzLmF1dGhvci5maWVsZHMubmFtZX1cclxuICAgICAgICAgICAgICAgICAgYXV0aG9ySW1hZ2U9e2ZpZWxkcy5hdXRob3IuZmllbGRzLmltYWdlLmZpZWxkcy5maWxlLnVybH1cclxuICAgICAgICAgICAgICAgICAgc2x1Zz17ZmllbGRzLnNsdWd9XHJcbiAgICAgICAgICAgICAgICAgIGRhdGU9e2ZpZWxkcy5kYXRlfVxyXG4gICAgICAgICAgICAgICAgICBjb3ZlckltYWdlPXtmaWVsZHMuY292ZXJJbWFnZS5maWVsZHMuZmlsZS51cmx9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCbG9nOyJdLCJzb3VyY2VSb290IjoiIn0=