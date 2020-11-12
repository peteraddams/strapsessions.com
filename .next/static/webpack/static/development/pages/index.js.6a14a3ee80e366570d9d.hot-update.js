webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_Layout_NavbarTwo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout/NavbarTwo */ "./components/Layout/NavbarTwo.js");
/* harmony import */ var _components_shop_style_five_BannerSlider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/shop-style-five/BannerSlider */ "./components/shop-style-five/BannerSlider.js");
/* harmony import */ var _components_shop_style_five_Facility__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/shop-style-five/Facility */ "./components/shop-style-five/Facility.js");
/* harmony import */ var _components_shop_style_five_CategoryTypes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/shop-style-five/CategoryTypes */ "./components/shop-style-five/CategoryTypes.js");
/* harmony import */ var _components_shop_style_five_ProductsOffer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/shop-style-five/ProductsOffer */ "./components/shop-style-five/ProductsOffer.js");
/* harmony import */ var _components_Common_Partner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Common/Partner */ "./components/Common/Partner.js");
/* harmony import */ var _components_Common_Subscribe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Common/Subscribe */ "./components/Common/Subscribe.js");
/* harmony import */ var _components_Layout_Footer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Layout/Footer */ "./components/Layout/Footer.js");
/* harmony import */ var _components_Modal_AddsModal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Modal/AddsModal */ "./components/Modal/AddsModal.js");
/* harmony import */ var _components_shop_style_five_Products__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/shop-style-five/Products */ "./components/shop-style-five/Products.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dist/next-server/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _components_Common_News__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/Common/News */ "./components/Common/News.js");
/* harmony import */ var _components_Common_TestimonialsTwo__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/Common/TestimonialsTwo */ "./components/Common/TestimonialsTwo.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\HP eliteworkstation\\Desktop\\lambo\\novine-react\\pages\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
















var OwlCarousel = next_dynamic__WEBPACK_IMPORTED_MODULE_12___default()(_c = function _c() {
  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.t.bind(null, /*! react-owl-carousel3 */ "./node_modules/react-owl-carousel3/lib/OwlCarousel.js", 7));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! react-owl-carousel3 */ "./node_modules/react-owl-carousel3/lib/OwlCarousel.js")];
    },
    modules: ["react-owl-carousel3"]
  }
});
_c2 = OwlCarousel;
var options = {
  loop: true,
  nav: false,
  dots: true,
  margin: 30,
  autoplayHoverPause: true,
  autoplay: true,
  navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
  responsive: {
    0: {
      items: 1
    },
    768: {
      items: 2
    },
    1024: {
      items: 3
    }
  }
};

var Index = function Index(_ref) {
  _s();

  var posts = _ref.posts;
  var products = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.products;
  });
  var addedItemsToCompare = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.addedItemsToCompare;
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 5
    }
  }, __jsx(_components_Layout_NavbarTwo__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }
  }), __jsx(_components_shop_style_five_BannerSlider__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }
  }), __jsx(_components_shop_style_five_Facility__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }
  }), __jsx(_components_shop_style_five_CategoryTypes__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }
  }), __jsx(_components_shop_style_five_Products__WEBPACK_IMPORTED_MODULE_11__["default"], {
    products: products,
    CompareProducts: addedItemsToCompare,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }
  }), __jsx(_components_shop_style_five_ProductsOffer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }
  }), __jsx(_components_Common_News__WEBPACK_IMPORTED_MODULE_14__["default"], {
    posts: posts,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }
  }), __jsx(_components_Common_TestimonialsTwo__WEBPACK_IMPORTED_MODULE_15__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }
  }), __jsx(_components_Common_Partner__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }
  }), __jsx(_components_Common_Subscribe__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }
  }), __jsx(_components_Layout_Footer__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }
  }));
};

_s(Index, "8/8o373Qi6tbS7cQQBWuB4otwCc=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"]];
});

_c3 = Index;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Index);

var _c, _c2, _c3;

$RefreshReg$(_c, "OwlCarousel$dynamic");
$RefreshReg$(_c2, "OwlCarousel");
$RefreshReg$(_c3, "Index");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJPd2xDYXJvdXNlbCIsImR5bmFtaWMiLCJvcHRpb25zIiwibG9vcCIsIm5hdiIsImRvdHMiLCJtYXJnaW4iLCJhdXRvcGxheUhvdmVyUGF1c2UiLCJhdXRvcGxheSIsIm5hdlRleHQiLCJyZXNwb25zaXZlIiwiaXRlbXMiLCJJbmRleCIsInBvc3RzIiwicHJvZHVjdHMiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwiYWRkZWRJdGVtc1RvQ29tcGFyZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFLQSxJQUFNQSxXQUFXLEdBQUdDLG9EQUFPO0FBQUEsU0FBQyxzS0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtDQUFRLGtGQUFSO0FBQUE7QUFBQSxjQUFRLHFCQUFSO0FBQUE7QUFBQSxFQUEzQjtNQUFNRCxXO0FBRU4sSUFBTUUsT0FBTyxHQUFHO0FBQ2RDLE1BQUksRUFBRSxJQURRO0FBRWRDLEtBQUcsRUFBRSxLQUZTO0FBR2RDLE1BQUksRUFBRSxJQUhRO0FBSWRDLFFBQU0sRUFBRSxFQUpNO0FBS2RDLG9CQUFrQixFQUFFLElBTE47QUFNZEMsVUFBUSxFQUFFLElBTkk7QUFPZEMsU0FBTyxFQUFFLENBQ1AscUNBRE8sRUFFUCxzQ0FGTyxDQVBLO0FBV2RDLFlBQVUsRUFBRTtBQUNWLE9BQUc7QUFDREMsV0FBSyxFQUFFO0FBRE4sS0FETztBQUlWLFNBQUs7QUFDSEEsV0FBSyxFQUFFO0FBREosS0FKSztBQU9WLFVBQU07QUFDSkEsV0FBSyxFQUFFO0FBREg7QUFQSTtBQVhFLENBQWhCOztBQXdCQSxJQUFNQyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxPQUFlO0FBQUE7O0FBQUEsTUFBWkMsS0FBWSxRQUFaQSxLQUFZO0FBQzNCLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDRixRQUFqQjtBQUFBLEdBQUQsQ0FBNUI7QUFDQSxNQUFNRyxtQkFBbUIsR0FBR0YsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxtQkFBakI7QUFBQSxHQUFELENBQXZDO0FBQ0EsU0FDRSxNQUFDLDRDQUFELENBQU8sUUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxvRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRSxNQUFDLGdGQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQUdFLE1BQUMsNEVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhGLEVBSUUsTUFBQyxpRkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkYsRUFLRSxNQUFDLDZFQUFEO0FBQVUsWUFBUSxFQUFFSCxRQUFwQjtBQUE4QixtQkFBZSxFQUFFRyxtQkFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxGLEVBTUUsTUFBQyxpRkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTkYsRUFPRSxNQUFDLGdFQUFEO0FBQU0sU0FBSyxFQUFFSixLQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFQRixFQVFFLE1BQUMsMkVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVJGLEVBU0UsTUFBQyxrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVEYsRUFVRSxNQUFDLG9FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFWRixFQVlFLE1BQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVpGLENBREY7QUFpQkQsQ0FwQkQ7O0dBQU1ELEs7VUFDYUcsdUQsRUFDV0EsdUQ7OztNQUZ4QkgsSzs7QUFzQlNBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy42YTE0YTNlZTgwZTM2NjU3MGQ5ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCBOYXZiYXJUd28gZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0L05hdmJhclR3b1wiO1xuaW1wb3J0IEJhbm5lclNsaWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9zaG9wLXN0eWxlLWZpdmUvQmFubmVyU2xpZGVyXCI7XG5pbXBvcnQgRmFjaWxpdHkgZnJvbSBcIi4uL2NvbXBvbmVudHMvc2hvcC1zdHlsZS1maXZlL0ZhY2lsaXR5XCI7XG5pbXBvcnQgQ2F0ZWdvcnlUeXBlcyBmcm9tIFwiLi4vY29tcG9uZW50cy9zaG9wLXN0eWxlLWZpdmUvQ2F0ZWdvcnlUeXBlc1wiO1xuaW1wb3J0IFByb2R1Y3RzT2ZmZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvc2hvcC1zdHlsZS1maXZlL1Byb2R1Y3RzT2ZmZXJcIjtcbmltcG9ydCBQYXJ0bmVyIGZyb20gXCIuLi9jb21wb25lbnRzL0NvbW1vbi9QYXJ0bmVyXCI7XG5pbXBvcnQgU3Vic2NyaWJlIGZyb20gXCIuLi9jb21wb25lbnRzL0NvbW1vbi9TdWJzY3JpYmVcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0L0Zvb3RlclwiO1xuaW1wb3J0IEFkZHNNb2RhbCBmcm9tIFwiLi4vY29tcG9uZW50cy9Nb2RhbC9BZGRzTW9kYWxcIjtcbmltcG9ydCBQcm9kdWN0cyBmcm9tIFwiLi4vY29tcG9uZW50cy9zaG9wLXN0eWxlLWZpdmUvUHJvZHVjdHNcIjtcbmltcG9ydCB7IGdldEFsbFBvc3RzIH0gZnJvbSBcIi4uL2xpYi9pbmRleFwiO1xuaW1wb3J0IGR5bmFtaWMgZnJvbSBcIm5leHQvZHluYW1pY1wiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IE5ld3MgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ29tbW9uL05ld3NcIjtcbmltcG9ydCBUZXN0aW1vbmlhbHNUd28gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ29tbW9uL1Rlc3RpbW9uaWFsc1R3b1wiO1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICBjb25zdCBwb3N0cyA9IGF3YWl0IGdldEFsbFBvc3RzKCk7XG4gIHJldHVybiB7IHVuc3RhYmxlX3JldmFsaWRhdGU6IDEsIHByb3BzOiB7IHBvc3RzIH0gfTtcbn1cbmNvbnN0IE93bENhcm91c2VsID0gZHluYW1pYyhpbXBvcnQoXCJyZWFjdC1vd2wtY2Fyb3VzZWwzXCIpKTtcblxuY29uc3Qgb3B0aW9ucyA9IHtcbiAgbG9vcDogdHJ1ZSxcbiAgbmF2OiBmYWxzZSxcbiAgZG90czogdHJ1ZSxcbiAgbWFyZ2luOiAzMCxcbiAgYXV0b3BsYXlIb3ZlclBhdXNlOiB0cnVlLFxuICBhdXRvcGxheTogdHJ1ZSxcbiAgbmF2VGV4dDogW1xuICAgIFwiPGkgY2xhc3M9J2ZhcyBmYS1jaGV2cm9uLWxlZnQnPjwvaT5cIixcbiAgICBcIjxpIGNsYXNzPSdmYXMgZmEtY2hldnJvbi1yaWdodCc+PC9pPlwiLFxuICBdLFxuICByZXNwb25zaXZlOiB7XG4gICAgMDoge1xuICAgICAgaXRlbXM6IDEsXG4gICAgfSxcbiAgICA3Njg6IHtcbiAgICAgIGl0ZW1zOiAyLFxuICAgIH0sXG4gICAgMTAyNDoge1xuICAgICAgaXRlbXM6IDMsXG4gICAgfSxcbiAgfSxcbn07XG5cbmNvbnN0IEluZGV4ID0gKHsgcG9zdHMgfSkgPT4ge1xuICBjb25zdCBwcm9kdWN0cyA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucHJvZHVjdHMpO1xuICBjb25zdCBhZGRlZEl0ZW1zVG9Db21wYXJlID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hZGRlZEl0ZW1zVG9Db21wYXJlKTtcbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8TmF2YmFyVHdvIC8+XG4gICAgICA8QmFubmVyU2xpZGVyIC8+XG4gICAgICA8RmFjaWxpdHkgLz5cbiAgICAgIDxDYXRlZ29yeVR5cGVzIC8+XG4gICAgICA8UHJvZHVjdHMgcHJvZHVjdHM9e3Byb2R1Y3RzfSBDb21wYXJlUHJvZHVjdHM9e2FkZGVkSXRlbXNUb0NvbXBhcmV9IC8+XG4gICAgICA8UHJvZHVjdHNPZmZlciAvPlxuICAgICAgPE5ld3MgcG9zdHM9e3Bvc3RzfS8+XG4gICAgICA8VGVzdGltb25pYWxzVHdvLz5cbiAgICAgIDxQYXJ0bmVyLz5cbiAgICAgIDxTdWJzY3JpYmUgLz5cblxuICAgICAgPEZvb3RlciAvPlxuICAgICBcbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iXSwic291cmNlUm9vdCI6IiJ9