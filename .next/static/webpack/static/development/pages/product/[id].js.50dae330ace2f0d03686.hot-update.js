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
      }, __jsx("div", {
        key: id,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 24
        }
      }, __jsx("div", {
        className: "item",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 21
        }
      }, __jsx("img", {
        src: image,
        alt: "image",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 25
        }
      })))))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Byb2R1Y3QtZGV0YWlscy9Qcm9kdWN0SW1hZ2UuanMiXSwibmFtZXMiOlsiUHJvZHVjdEltYWdlIiwiREVGQVVMVF9QUk9QUyIsIm1hcCIsImlkIiwiaW1hZ2UiLCJDb21wb25lbnQiLCJyZXF1aXJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztJQUVNQSxZOzs7Ozs7Ozs7Ozs7Ozs7O2lPQUl1QixZQUFNO0FBQzNCLGFBQU9DLGFBQWEsQ0FBQ0MsR0FBZCxDQUFrQixnQkFBaUI7QUFBQSxZQUFmQyxFQUFlLFFBQWZBLEVBQWU7QUFBQSxZQUFYQyxLQUFXLFFBQVhBLEtBQVc7QUFDdEMsZUFDSTtBQUFLLGFBQUcsRUFBRUQsRUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQ0k7QUFBSyxtQkFBUyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUNJO0FBQUssYUFBRyxFQUFFQyxLQUFWO0FBQWlCLGFBQUcsRUFBQyxPQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREosQ0FESixDQURKO0FBT0gsT0FSTSxDQUFQO0FBU0gsSzs7Ozs7Ozs2QkFJUTtBQUNMLGFBQ0k7QUFBSyxpQkFBUyxFQUFDLG1CQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFLLGlCQUFTLEVBQUMsdUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQUssaUJBQVMsRUFBQywyQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0c7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNBO0FBQUssV0FBRyxFQUFFRCxFQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSDtBQUFLLGlCQUFTLEVBQUMsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBSyxXQUFHLEVBQUVDLEtBQVY7QUFBaUIsV0FBRyxFQUFDLE9BQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFESixDQURHLENBREEsQ0FESCxDQURKLENBREosQ0FESjtBQWdCSDs7OztFQW5Dc0JDLCtDOztBQXNDM0IsSUFBTUosYUFBYSxHQUFHLENBQ2xCO0FBQ0lFLElBQUUsRUFBRSxDQURSO0FBRUlDLE9BQUssRUFBRUUsbUJBQU8sQ0FBQywwRUFBRDtBQUZsQixDQURrQixFQUtsQjtBQUNJSCxJQUFFLEVBQUUsQ0FEUjtBQUVJQyxPQUFLLEVBQUVFLG1CQUFPLENBQUMsMEVBQUQ7QUFGbEIsQ0FMa0IsRUFTbEI7QUFDSUgsSUFBRSxFQUFFLENBRFI7QUFFSUMsT0FBSyxFQUFFRSxtQkFBTyxDQUFDLDBFQUFEO0FBRmxCLENBVGtCLEVBYWxCO0FBQ0lILElBQUUsRUFBRSxDQURSO0FBRUlDLE9BQUssRUFBRUUsbUJBQU8sQ0FBQywwRUFBRDtBQUZsQixDQWJrQixFQWlCbEI7QUFDSUgsSUFBRSxFQUFFLENBRFI7QUFFSUMsT0FBSyxFQUFFRSxtQkFBTyxDQUFDLDBFQUFEO0FBRmxCLENBakJrQixFQXFCbEI7QUFDSUgsSUFBRSxFQUFFLENBRFI7QUFFSUMsT0FBSyxFQUFFRSxtQkFBTyxDQUFDLDBFQUFEO0FBRmxCLENBckJrQixFQXlCbEI7QUFDSUgsSUFBRSxFQUFFLENBRFI7QUFFSUMsT0FBSyxFQUFFRSxtQkFBTyxDQUFDLDBFQUFEO0FBRmxCLENBekJrQixDQUF0QjtBQStCZU4sMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHByb2R1Y3RcXFtpZF0uanMuNTBkYWUzMzBhY2UyZjBkMDM2ODYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU2xpZGVyIGZyb20gXCJyZWFjdC1zbGlja1wiO1xuXG5jbGFzcyBQcm9kdWN0SW1hZ2UgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICBcblxuICAgIHJlbmRlclNsaWRlck1haW5JbWFnZXMgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBERUZBVUxUX1BST1BTLm1hcCgoe2lkLCBpbWFnZX0pID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2lkfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aW1hZ2V9IGFsdD1cImltYWdlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApXG4gICAgICAgIH0pXG4gICAgfVxuXG4gIFxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNiBjb2wtbWQtNlwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdHMtcGFnZS1nYWxsZXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1wYWdlLWdhbGxlcnktbWFpblwiPlxuICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aWR9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpbWFnZX0gYWx0PVwiaW1hZ2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmNvbnN0IERFRkFVTFRfUFJPUFMgPSBbXG4gICAge1xuICAgICAgICBpZDogMSxcbiAgICAgICAgaW1hZ2U6IHJlcXVpcmUoJy4uLy4uL2ltYWdlcy9wcm9kdWN0LWRldGFpbHMvMS5qcGcnKVxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogMixcbiAgICAgICAgaW1hZ2U6IHJlcXVpcmUoJy4uLy4uL2ltYWdlcy9wcm9kdWN0LWRldGFpbHMvMi5qcGcnKVxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogMyxcbiAgICAgICAgaW1hZ2U6IHJlcXVpcmUoJy4uLy4uL2ltYWdlcy9wcm9kdWN0LWRldGFpbHMvMy5qcGcnKVxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogNCxcbiAgICAgICAgaW1hZ2U6IHJlcXVpcmUoJy4uLy4uL2ltYWdlcy9wcm9kdWN0LWRldGFpbHMvNC5qcGcnKVxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogNSxcbiAgICAgICAgaW1hZ2U6IHJlcXVpcmUoJy4uLy4uL2ltYWdlcy9wcm9kdWN0LWRldGFpbHMvNS5qcGcnKVxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogNixcbiAgICAgICAgaW1hZ2U6IHJlcXVpcmUoJy4uLy4uL2ltYWdlcy9wcm9kdWN0LWRldGFpbHMvNi5qcGcnKVxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogNyxcbiAgICAgICAgaW1hZ2U6IHJlcXVpcmUoJy4uLy4uL2ltYWdlcy9wcm9kdWN0LWRldGFpbHMvNy5qcGcnKVxuICAgIH1cbl07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RJbWFnZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=