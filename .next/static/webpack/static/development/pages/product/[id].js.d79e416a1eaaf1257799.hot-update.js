webpackHotUpdate("static\\development\\pages\\product\\[id].js",{

/***/ "./components/product-details/ProductImage.js":
/*!****************************************************!*\
  !*** ./components/product-details/ProductImage.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_8__);







var _jsxFileName = "C:\\Users\\HP eliteworkstation\\Desktop\\lambo\\novine-react\\components\\product-details\\ProductImage.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var ProductImage = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(ProductImage, _Component);

  var _super = _createSuper(ProductImage);

  function ProductImage() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ProductImage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "renderSliderMainImages", function () {
      return DEFAULT_PROPS.map(function (_ref) {
        var id = _ref.id,
            image = _ref.image;
        return __jsx("div", {
          key: id,
          __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 11,
            columnNumber: 17
          }
        }, __jsx("div", {
          className: "item",
          __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 12,
            columnNumber: 21
          }
        }, __jsx("img", {
          src: image,
          alt: "image",
          __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 13,
            columnNumber: 25
          }
        })));
      });
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ProductImage, [{
    key: "render",
    value: function render() {
      return __jsx("div", {
        className: "col-lg-6 col-md-6",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "products-page-gallery",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "product-page-gallery-main",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 21
        }
      }, __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 24
        }
      }, this.renderSliderMainImages())), __jsx("div", {
        className: "product-page-gallery-preview",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 21
        }
      }, __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 25
        }
      }, this.renderSliderSubImages()))));
    }
  }]);

  return ProductImage;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

var DEFAULT_PROPS = [{
  id: 1,
  image: __webpack_require__(/*! ../../images/product-details/1.jpg */ "./images/product-details/1.jpg")
}, {
  id: 2,
  image: __webpack_require__(/*! ../../images/product-details/2.jpg */ "./images/product-details/2.jpg")
}, {
  id: 3,
  image: __webpack_require__(/*! ../../images/product-details/3.jpg */ "./images/product-details/3.jpg")
}, {
  id: 4,
  image: __webpack_require__(/*! ../../images/product-details/4.jpg */ "./images/product-details/4.jpg")
}, {
  id: 5,
  image: __webpack_require__(/*! ../../images/product-details/5.jpg */ "./images/product-details/5.jpg")
}, {
  id: 6,
  image: __webpack_require__(/*! ../../images/product-details/6.jpg */ "./images/product-details/6.jpg")
}, {
  id: 7,
  image: __webpack_require__(/*! ../../images/product-details/7.jpg */ "./images/product-details/7.jpg")
}];
/* harmony default export */ __webpack_exports__["default"] = (ProductImage);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Byb2R1Y3QtZGV0YWlscy9Qcm9kdWN0SW1hZ2UuanMiXSwibmFtZXMiOlsiUHJvZHVjdEltYWdlIiwiREVGQVVMVF9QUk9QUyIsIm1hcCIsImlkIiwiaW1hZ2UiLCJyZW5kZXJTbGlkZXJNYWluSW1hZ2VzIiwicmVuZGVyU2xpZGVyU3ViSW1hZ2VzIiwiQ29tcG9uZW50IiwicmVxdWlyZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7SUFFTUEsWTs7Ozs7Ozs7Ozs7Ozs7OztpT0FJdUIsWUFBTTtBQUMzQixhQUFPQyxhQUFhLENBQUNDLEdBQWQsQ0FBa0IsZ0JBQWlCO0FBQUEsWUFBZkMsRUFBZSxRQUFmQSxFQUFlO0FBQUEsWUFBWEMsS0FBVyxRQUFYQSxLQUFXO0FBQ3RDLGVBQ0k7QUFBSyxhQUFHLEVBQUVELEVBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUNJO0FBQUssbUJBQVMsRUFBQyxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FDSTtBQUFLLGFBQUcsRUFBRUMsS0FBVjtBQUFpQixhQUFHLEVBQUMsT0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKLENBREosQ0FESjtBQU9ILE9BUk0sQ0FBUDtBQVNILEs7Ozs7Ozs7NkJBSVE7QUFDTCxhQUNJO0FBQUssaUJBQVMsRUFBQyxtQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBSyxpQkFBUyxFQUFDLHVCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFLLGlCQUFTLEVBQUMsMkJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FHYSxLQUFLQyxzQkFBTCxFQUhiLENBREgsQ0FESixFQVdJO0FBQUssaUJBQVMsRUFBQyw4QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUdZLEtBQUtDLHFCQUFMLEVBSFosQ0FESixDQVhKLENBREosQ0FESjtBQXlCSDs7OztFQTVDc0JDLCtDOztBQStDM0IsSUFBTU4sYUFBYSxHQUFHLENBQ2xCO0FBQ0lFLElBQUUsRUFBRSxDQURSO0FBRUlDLE9BQUssRUFBRUksbUJBQU8sQ0FBQywwRUFBRDtBQUZsQixDQURrQixFQUtsQjtBQUNJTCxJQUFFLEVBQUUsQ0FEUjtBQUVJQyxPQUFLLEVBQUVJLG1CQUFPLENBQUMsMEVBQUQ7QUFGbEIsQ0FMa0IsRUFTbEI7QUFDSUwsSUFBRSxFQUFFLENBRFI7QUFFSUMsT0FBSyxFQUFFSSxtQkFBTyxDQUFDLDBFQUFEO0FBRmxCLENBVGtCLEVBYWxCO0FBQ0lMLElBQUUsRUFBRSxDQURSO0FBRUlDLE9BQUssRUFBRUksbUJBQU8sQ0FBQywwRUFBRDtBQUZsQixDQWJrQixFQWlCbEI7QUFDSUwsSUFBRSxFQUFFLENBRFI7QUFFSUMsT0FBSyxFQUFFSSxtQkFBTyxDQUFDLDBFQUFEO0FBRmxCLENBakJrQixFQXFCbEI7QUFDSUwsSUFBRSxFQUFFLENBRFI7QUFFSUMsT0FBSyxFQUFFSSxtQkFBTyxDQUFDLDBFQUFEO0FBRmxCLENBckJrQixFQXlCbEI7QUFDSUwsSUFBRSxFQUFFLENBRFI7QUFFSUMsT0FBSyxFQUFFSSxtQkFBTyxDQUFDLDBFQUFEO0FBRmxCLENBekJrQixDQUF0QjtBQStCZVIsMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHByb2R1Y3RcXFtpZF0uanMuZDc5ZTQxNmExZWFhZjEyNTc3OTkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU2xpZGVyIGZyb20gXCJyZWFjdC1zbGlja1wiO1xuXG5jbGFzcyBQcm9kdWN0SW1hZ2UgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICBcblxuICAgIHJlbmRlclNsaWRlck1haW5JbWFnZXMgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBERUZBVUxUX1BST1BTLm1hcCgoe2lkLCBpbWFnZX0pID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2lkfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aW1hZ2V9IGFsdD1cImltYWdlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApXG4gICAgICAgIH0pXG4gICAgfVxuXG4gIFxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNiBjb2wtbWQtNlwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdHMtcGFnZS1nYWxsZXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1wYWdlLWdhbGxlcnktbWFpblwiPlxuICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlclNsaWRlck1haW5JbWFnZXMoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1wYWdlLWdhbGxlcnktcHJldmlld1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJTbGlkZXJTdWJJbWFnZXMoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5jb25zdCBERUZBVUxUX1BST1BTID0gW1xuICAgIHtcbiAgICAgICAgaWQ6IDEsXG4gICAgICAgIGltYWdlOiByZXF1aXJlKCcuLi8uLi9pbWFnZXMvcHJvZHVjdC1kZXRhaWxzLzEuanBnJylcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDIsXG4gICAgICAgIGltYWdlOiByZXF1aXJlKCcuLi8uLi9pbWFnZXMvcHJvZHVjdC1kZXRhaWxzLzIuanBnJylcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDMsXG4gICAgICAgIGltYWdlOiByZXF1aXJlKCcuLi8uLi9pbWFnZXMvcHJvZHVjdC1kZXRhaWxzLzMuanBnJylcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDQsXG4gICAgICAgIGltYWdlOiByZXF1aXJlKCcuLi8uLi9pbWFnZXMvcHJvZHVjdC1kZXRhaWxzLzQuanBnJylcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDUsXG4gICAgICAgIGltYWdlOiByZXF1aXJlKCcuLi8uLi9pbWFnZXMvcHJvZHVjdC1kZXRhaWxzLzUuanBnJylcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDYsXG4gICAgICAgIGltYWdlOiByZXF1aXJlKCcuLi8uLi9pbWFnZXMvcHJvZHVjdC1kZXRhaWxzLzYuanBnJylcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDcsXG4gICAgICAgIGltYWdlOiByZXF1aXJlKCcuLi8uLi9pbWFnZXMvcHJvZHVjdC1kZXRhaWxzLzcuanBnJylcbiAgICB9XG5dO1xuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0SW1hZ2U7XG4iXSwic291cmNlUm9vdCI6IiJ9