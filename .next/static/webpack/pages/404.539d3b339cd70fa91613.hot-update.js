webpackHotUpdate_N_E("pages/404",{

/***/ "./components/Layout/MegaMenuTwo.js":
/*!******************************************!*\
  !*** ./components/Layout/MegaMenuTwo.js ***!
  \******************************************/
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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Modal_Cart__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Modal/Cart */ "./components/Modal/Cart.js");







var _jsxFileName = "C:\\Users\\HP eliteworkstation\\Desktop\\lambo\\novine-react\\components\\Layout\\MegaMenuTwo.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






var MegaMenuTwo = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(MegaMenuTwo, _Component);

  var _super = _createSuper(MegaMenuTwo);

  function MegaMenuTwo() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MegaMenuTwo);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "state", {
      display: false,
      searchForm: false,
      collapsed: true
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleCart", function () {
      _this.setState(function (prevState) {
        return {
          display: !prevState.display
        };
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleSearchForm", function () {
      _this.setState(function (prevState) {
        return {
          searchForm: !prevState.searchForm
        };
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "toggleNavbar", function () {
      _this.setState({
        collapsed: !_this.state.collapsed
      });
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MegaMenuTwo, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var elementId = document.getElementById("navbar");
      document.addEventListener("scroll", function () {
        if (window.scrollY > 170) {
          elementId.classList.add("is-sticky");
        } else {
          elementId.classList.remove("is-sticky");
        }
      });
      window.scrollTo(0, 0);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var collapsed = this.state.collapsed;
      var classOne = collapsed ? "collapse navbar-collapse" : "collapse navbar-collapse show";
      var classTwo = collapsed ? "navbar-toggler navbar-toggler-right collapsed" : "navbar-toggler navbar-toggler-right";
      var products = this.props.products;
      return __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: "navbar-area bg-black",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 9
        }
      }, __jsx("div", {
        id: "navbar",
        className: "comero-nav",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "container-fluid",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 13
        }
      }, __jsx("nav", {
        className: "navbar navbar-expand-md navbar-light",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 15
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 17
        }
      }, __jsx("a", {
        className: "navbar-brand",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 19
        }
      }, __jsx("img", {
        src: __webpack_require__(/*! ../../images/white-logo.png */ "./images/white-logo.png"),
        alt: "logo",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 21
        }
      }))), __jsx("button", {
        onClick: this.toggleNavbar,
        className: classTwo,
        type: "button",
        "data-toggle": "collapse",
        "data-target": "#navbarSupportedContent",
        "aria-controls": "navbarSupportedContent",
        "aria-expanded": "false",
        "aria-label": "Toggle navigation",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 17
        }
      }, __jsx("span", {
        className: "navbar-toggler-icon",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 19
        }
      })), __jsx("div", {
        className: classOne,
        id: "navbarSupportedContent",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 17
        }
      }, __jsx("ul", {
        className: "navbar-nav",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 19
        }
      }, __jsx("li", {
        className: "nav-item p-relative",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 21
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 23
        }
      }, __jsx("a", {
        className: "nav-link active",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 25
        }
      }, "Home"))), __jsx("li", {
        className: "nav-item megamenu",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 21
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 23
        }
      }, __jsx("a", {
        className: "nav-link",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 25
        }
      }, "FIREARMS ", __jsx("i", {
        className: "fas fa-chevron-down",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 36
        }
      }))), __jsx("ul", {
        className: "dropdown-menu",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 23
        }
      }, __jsx("li", {
        className: "nav-item",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 25
        }
      }, __jsx("div", {
        className: "container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 27
        }
      }, __jsx("div", {
        className: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 29
        }
      }, __jsx("div", {
        className: "col",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 31
        }
      }, __jsx("h6", {
        className: "submenu-title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 33
        }
      }, "HANDGUNS"), __jsx("ul", {
        className: "megamenu-submenu",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 33
        }
      }, __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 35
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/semi-automatic",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 37
        }
      }, __jsx("a", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 39
        }
      }, " Semi-Automatic "))), __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 35
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/revolver",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 37
        }
      }, __jsx("a", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 39
        }
      }, " Revolver "))), __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 35
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/ar-ak-pistols",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 37
        }
      }, __jsx("a", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 39
        }
      }, "AR/AK Pistols Tactical"))), __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 35
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/lever-action-handguns",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 37
        }
      }, __jsx("a", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 39
        }
      }, "Lever Action"))), __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 35
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/derringer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 37
        }
      }, __jsx("a", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 39
        }
      }, " Derringer"))))), __jsx("div", {
        className: "col",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 31
        }
      }, __jsx("h6", {
        className: "submenu-title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 33
        }
      }, "RIFLES"), __jsx("ul", {
        className: "megamenu-submenu",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 33
        }
      }, __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 35
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/ars",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 37
        }
      }, __jsx("a", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 39
        }
      }, " ARs"))), __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 35
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/aks",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 37
        }
      }, __jsx("a", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 39
        }
      }, " AKs"))), __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 35
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/bolt-action-rifles",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 37
        }
      }, __jsx("a", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 39
        }
      }, " Bolt Action"))), __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 35
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/hunting-rifles",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161,
          columnNumber: 37
        }
      }, __jsx("a", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162,
          columnNumber: 39
        }
      }, " Hunting"))), __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 35
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/tactical-rifles",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167,
          columnNumber: 37
        }
      }, __jsx("a", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 39
        }
      }, "Tactical"))))), __jsx("div", {
        className: "col",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174,
          columnNumber: 31
        }
      }, __jsx("h6", {
        className: "submenu-title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175,
          columnNumber: 33
        }
      }, " SHOTGUNS"), __jsx("ul", {
        className: "megamenu-submenu",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177,
          columnNumber: 33
        }
      }, __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178,
          columnNumber: 35
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/self-defense-shotguns",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179,
          columnNumber: 37
        }
      }, __jsx("a", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180,
          columnNumber: 39
        }
      }, "Self Defense"))), __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185,
          columnNumber: 35
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/sporting-shotguns",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186,
          columnNumber: 37
        }
      }, __jsx("a", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187,
          columnNumber: 39
        }
      }, "Sporting")))))))))), __jsx("li", {
        className: "nav-item megamenu",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202,
          columnNumber: 21
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203,
          columnNumber: 23
        }
      }, __jsx("a", {
        className: "nav-link",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204,
          columnNumber: 25
        }
      }, "OPTICS ", __jsx("i", {
        className: "fas fa-chevron-down",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205,
          columnNumber: 34
        }
      }))), __jsx("ul", {
        className: "dropdown-menu",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208,
          columnNumber: 23
        }
      }, __jsx("li", {
        className: "nav-item",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209,
          columnNumber: 25
        }
      }, __jsx("div", {
        className: "container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210,
          columnNumber: 27
        }
      }, __jsx("div", {
        className: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211,
          columnNumber: 29
        }
      }, __jsx("div", {
        className: "col",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212,
          columnNumber: 31
        }
      }, __jsx("h6", {
        className: "submenu-title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213,
          columnNumber: 33
        }
      }, "Scopes"), __jsx("ul", {
        className: "megamenu-submenu",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215,
          columnNumber: 33
        }
      }, __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 216,
          columnNumber: 35
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/rifle-scopes",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217,
          columnNumber: 37
        }
      }, __jsx("a", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218,
          columnNumber: 39
        }
      }, "Rifle Scopes"))), __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 222,
          columnNumber: 35
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/red-dot-optics",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 223,
          columnNumber: 37
        }
      }, __jsx("a", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224,
          columnNumber: 39
        }
      }, "Red Dot Optics"))), __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228,
          columnNumber: 35
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/night-vision-thermal",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229,
          columnNumber: 37
        }
      }, __jsx("a", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230,
          columnNumber: 39
        }
      }, "Night Vision / Thermal"))), __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234,
          columnNumber: 35
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/binoculars",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235,
          columnNumber: 37
        }
      }, __jsx("a", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236,
          columnNumber: 39
        }
      }, " Binoculars"))), __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 240,
          columnNumber: 35
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/range-finders",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 241,
          columnNumber: 37
        }
      }, __jsx("a", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242,
          columnNumber: 39
        }
      }, "Range Finders"))))), __jsx("div", {
        className: "col",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 251,
          columnNumber: 31
        }
      }, __jsx("h6", {
        className: "submenu-title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 252,
          columnNumber: 33
        }
      }, " SIGHTS"), __jsx("ul", {
        className: "megamenu-submenu",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 254,
          columnNumber: 33
        }
      }, __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 255,
          columnNumber: 35
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/handgun-sights",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256,
          columnNumber: 37
        }
      }, __jsx("a", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 257,
          columnNumber: 39
        }
      }, "Handgun Sights"))))), __jsx("div", {
        className: "col",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 266,
          columnNumber: 31
        }
      }, __jsx("h6", {
        className: "submenu-title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 267,
          columnNumber: 33
        }
      }, "Accessories"), __jsx("ul", {
        className: "megamenu-submenu",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 269,
          columnNumber: 33
        }
      }, __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 270,
          columnNumber: 35
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/flash",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 271,
          columnNumber: 37
        }
      }, __jsx("a", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 272,
          columnNumber: 39
        }
      }, "  FLASH"))), __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 277,
          columnNumber: 35
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/lights-weapon",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 278,
          columnNumber: 37
        }
      }, __jsx("a", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 279,
          columnNumber: 39
        }
      }, " LIGHTS WEAPON"))), __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 284,
          columnNumber: 35
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/lights-laser",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 285,
          columnNumber: 37
        }
      }, __jsx("a", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 286,
          columnNumber: 39
        }
      }, " LIGHTS LASER"))), __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 291,
          columnNumber: 35
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/sights-batteries-bulbs",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 292,
          columnNumber: 37
        }
      }, __jsx("a", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 293,
          columnNumber: 39
        }
      }, "SIGHTS BATTERIES & BULBS"))))), __jsx("div", {
        className: "col",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 301,
          columnNumber: 31
        }
      }, __jsx("ul", {
        className: "megamenu-submenu",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 302,
          columnNumber: 33
        }
      }, __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 303,
          columnNumber: 35
        }
      }, __jsx("div", {
        className: "aside-trending-products",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 304,
          columnNumber: 37
        }
      }, __jsx("img", {
        src: __webpack_require__(/*! ../../images/category-products-img2.jpg */ "./images/category-products-img2.jpg"),
        alt: "image",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 305,
          columnNumber: 39
        }
      }), __jsx("div", {
        className: "category",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 310,
          columnNumber: 39
        }
      }, __jsx("h4", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 311,
          columnNumber: 41
        }
      }, "Top Trending")), __jsx("a", {
        href: "#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 314,
          columnNumber: 39
        }
      })), __jsx("div", {
        className: "aside-trending-products",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 317,
          columnNumber: 37
        }
      }, __jsx("img", {
        src: __webpack_require__(/*! ../../images/category-products-img3.jpg */ "./images/category-products-img3.jpg"),
        alt: "image",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 318,
          columnNumber: 39
        }
      }), __jsx("div", {
        className: "category",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 323,
          columnNumber: 39
        }
      }, __jsx("h4", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 324,
          columnNumber: 41
        }
      }, "Popular Products")), __jsx("a", {
        href: "#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 327,
          columnNumber: 39
        }
      })))))))))), __jsx("li", {
        className: "nav-item megamenu",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 338,
          columnNumber: 21
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 339,
          columnNumber: 23
        }
      }, __jsx("a", {
        className: "nav-link",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 340,
          columnNumber: 25
        }
      }, "AMMUNITION ", __jsx("i", {
        className: "fas fa-chevron-down",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 341,
          columnNumber: 38
        }
      }))), __jsx("ul", {
        className: "dropdown-menu",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 344,
          columnNumber: 23
        }
      }, __jsx("li", {
        className: "nav-item",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 345,
          columnNumber: 25
        }
      }, __jsx("div", {
        className: "container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 346,
          columnNumber: 27
        }
      }, __jsx("div", {
        className: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 347,
          columnNumber: 29
        }
      }, __jsx("div", {
        className: "col",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 348,
          columnNumber: 31
        }
      }, __jsx("ul", {
        className: "megamenu-submenu",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 352,
          columnNumber: 31
        }
      }, __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 353,
          columnNumber: 35
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/rim",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 354,
          columnNumber: 37
        }
      }, __jsx("a", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 355,
          columnNumber: 39
        }
      }, "RIM"))), __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 359,
          columnNumber: 35
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/handgun-ammunition",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 360,
          columnNumber: 37
        }
      }, __jsx("a", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 361,
          columnNumber: 39
        }
      }, "Fire Handgun"))), __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 365,
          columnNumber: 35
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/rifle-ammunition",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 366,
          columnNumber: 37
        }
      }, __jsx("a", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 367,
          columnNumber: 39
        }
      }, "Rifle"))), __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 371,
          columnNumber: 35
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/category-right-sidebar-with-block",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 372,
          columnNumber: 37
        }
      }, __jsx("a", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 373,
          columnNumber: 39
        }
      }, "shotgun"))))), __jsx("div", {
        className: "col",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 380,
          columnNumber: 31
        }
      }, __jsx("h6", {
        className: "submenu-title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 381,
          columnNumber: 33
        }
      }, " "), __jsx("ul", {
        className: "megamenu-submenu",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 383,
          columnNumber: 33
        }
      })), __jsx("div", {
        className: "col",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 390,
          columnNumber: 31
        }
      }, __jsx("h6", {
        className: "submenu-title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 391,
          columnNumber: 33
        }
      }, " "), __jsx("ul", {
        className: "megamenu-submenu",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 393,
          columnNumber: 33
        }
      })), __jsx("div", {
        className: "col",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 401,
          columnNumber: 31
        }
      }, __jsx("h6", {
        className: "submenu-title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 402,
          columnNumber: 33
        }
      }, " "), __jsx("ul", {
        className: "megamenu-submenu",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 404,
          columnNumber: 33
        }
      })), __jsx("div", {
        className: "col",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 412,
          columnNumber: 31
        }
      }, __jsx("ul", {
        className: "megamenu-submenu",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 413,
          columnNumber: 33
        }
      }, __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 414,
          columnNumber: 35
        }
      }, __jsx("div", {
        className: "aside-trending-products",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 415,
          columnNumber: 37
        }
      }, __jsx("img", {
        src: __webpack_require__(/*! ../../images/ammunition/rim/cci-74.jpg */ "./images/ammunition/rim/cci-74.jpg"),
        alt: "image",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 416,
          columnNumber: 39
        }
      }), __jsx("div", {
        className: "category",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 421,
          columnNumber: 39
        }
      }, __jsx("h4", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 422,
          columnNumber: 41
        }
      }, "Top Trending")), __jsx("a", {
        href: "/product/235",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 425,
          columnNumber: 39
        }
      })), __jsx("div", {
        className: "aside-trending-products",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 428,
          columnNumber: 37
        }
      }, __jsx("img", {
        src: __webpack_require__(/*! ../../images/ammunition/handgun/1410991550-90282-9mm-luger-147-gr-xtp.jpg */ "./images/ammunition/handgun/1410991550-90282-9mm-luger-147-gr-xtp.jpg"),
        alt: "image",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 429,
          columnNumber: 39
        }
      }), __jsx("div", {
        className: "category",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 434,
          columnNumber: 39
        }
      }, __jsx("h4", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 435,
          columnNumber: 41
        }
      }, "Popular Products")), __jsx("a", {
        href: "/product/215",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 438,
          columnNumber: 39
        }
      })))))))))), __jsx("li", {
        className: "nav-item p-relative",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 450,
          columnNumber: 21
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/blog",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 451,
          columnNumber: 23
        }
      }, __jsx("a", {
        className: "nav-link",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 452,
          columnNumber: 25
        }
      }, "Blog")))), __jsx("div", {
        className: "others-option",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 461,
          columnNumber: 19
        }
      }, __jsx("div", {
        className: "option-item",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 462,
          columnNumber: 21
        }
      }, __jsx("i", {
        onClick: this.handleSearchForm,
        className: "search-btn fas fa-search",
        style: {
          display: this.state.searchForm ? "none" : "block"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 463,
          columnNumber: 23
        }
      }), __jsx("i", {
        onClick: this.handleSearchForm,
        className: "close-btn fas fa-times ".concat(this.state.searchForm ? "active" : ""),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 471,
          columnNumber: 23
        }
      }), __jsx("div", {
        className: "search-overlay search-popup",
        style: {
          display: this.state.searchForm ? "block" : "none"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 478,
          columnNumber: 23
        }
      }, __jsx("div", {
        className: "search-box",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 484,
          columnNumber: 25
        }
      }, __jsx("form", {
        className: "search-form",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 485,
          columnNumber: 27
        }
      }, __jsx("input", {
        className: "search-input",
        name: "search",
        placeholder: "Search",
        type: "text",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 486,
          columnNumber: 29
        }
      }), __jsx("button", {
        className: "search-button",
        type: "submit",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 492,
          columnNumber: 29
        }
      }, __jsx("i", {
        className: "fas fa-search",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 493,
          columnNumber: 31
        }
      })))))), __jsx("div", {
        className: "option-item",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 500,
          columnNumber: 21
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 501,
          columnNumber: 23
        }
      }, __jsx("a", {
        onClick: function onClick(e) {
          e.preventDefault();

          _this2.handleCart();
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 502,
          columnNumber: 25
        }
      }, "Cart(", products.length, ")", " ", __jsx("i", {
        className: "fas fa-shopping-bag",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 509,
          columnNumber: 27
        }
      })))))))))), this.state.display ? __jsx(_Modal_Cart__WEBPACK_IMPORTED_MODULE_10__["default"], {
        onClick: this.handleCart,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 519,
          columnNumber: 31
        }
      }) : "");
    }
  }]);

  return MegaMenuTwo;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    products: state.addedItems
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapStateToProps)(MegaMenuTwo));

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
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
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
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

/***/ }),

/***/ "./components/Layout/NavbarTwo.js":
/*!****************************************!*\
  !*** ./components/Layout/NavbarTwo.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _TopPanel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TopPanel */ "./components/Layout/TopPanel.js");
/* harmony import */ var _TopHeaderTwo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TopHeaderTwo */ "./components/Layout/TopHeaderTwo.js");
/* harmony import */ var _MegaMenuTwo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./MegaMenuTwo */ "./components/Layout/MegaMenuTwo.js");





var _jsxFileName = "C:\\Users\\HP eliteworkstation\\Desktop\\lambo\\novine-react\\components\\Layout\\NavbarTwo.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






var NavbarTwo = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(NavbarTwo, _Component);

  var _super = _createSuper(NavbarTwo);

  function NavbarTwo() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, NavbarTwo);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(NavbarTwo, [{
    key: "render",
    value: function render() {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "header-area",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 17
        }
      }, __jsx(_MegaMenuTwo__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 21
        }
      })));
    }
  }]);

  return NavbarTwo;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (NavbarTwo);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
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
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
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

/***/ }),

/***/ "./components/Layout/TopHeaderTwo.js":
/*!*******************************************!*\
  !*** ./components/Layout/TopHeaderTwo.js ***!
  \*******************************************/
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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Modal_Wishlist__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Modal/Wishlist */ "./components/Modal/Wishlist.js");







var _jsxFileName = "C:\\Users\\HP eliteworkstation\\Desktop\\lambo\\novine-react\\components\\Layout\\TopHeaderTwo.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var TopHeaderTwo = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(TopHeaderTwo, _Component);

  var _super = _createSuper(TopHeaderTwo);

  function TopHeaderTwo() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TopHeaderTwo);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "state", {
      display: false
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleWishlist", function () {
      _this.setState(function (prevState) {
        return {
          display: !prevState.display
        };
      });
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(TopHeaderTwo, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "top-header",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "container-fluid",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 21
        }
      }, __jsx("div", {
        className: "row align-items-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 25
        }
      }, __jsx("div", {
        className: "col-lg-7 col-md-6",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 29
        }
      }, __jsx("ul", {
        className: "top-header-nav",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 33
        }
      }, __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 37
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/about",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 41
        }
      }, __jsx("a", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 61
        }
      }, "About"))), __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 37
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 41
        }
      }, __jsx("a", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 56
        }
      }, "Our Stores"))), __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 37
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/faq",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 41
        }
      }, __jsx("a", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 59
        }
      }, "FAQ's"))), __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 37
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/contact-us",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 41
        }
      }, __jsx("a", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 66
        }
      }, "Contact"))))), __jsx("div", {
        className: "col-lg-5 col-md-6",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 29
        }
      }, __jsx("ul", {
        className: "top-header-right-nav",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 33
        }
      }, __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 37
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 41
        }
      }, __jsx("a", {
        "data-toggle": "modal",
        "data-target": "#shoppingWishlistModal",
        onClick: function onClick(e) {
          e.preventDefault();

          _this2.handleWishlist();
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 45
        }
      }, "Wishlist ", __jsx("i", {
        className: "far fa-heart",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 58
        }
      })))), __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 37
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/compare",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 41
        }
      }, __jsx("a", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 45
        }
      }, "Compare ", __jsx("i", {
        className: "fas fa-balance-scale",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 56
        }
      })))), __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 37
        }
      }, __jsx("div", {
        className: "languages-list",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 41
        }
      }, __jsx("select", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 45
        }
      }, __jsx("option", {
        value: "1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 49
        }
      }, "Eng"), __jsx("option", {
        value: "2",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 49
        }
      }, "Ger"), __jsx("option", {
        value: "3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 49
        }
      }, "Span"))))))))), this.state.display ? __jsx(_Modal_Wishlist__WEBPACK_IMPORTED_MODULE_9__["default"], {
        onClick: this.handleWishlist,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 39
        }
      }) : '');
    }
  }]);

  return TopHeaderTwo;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (TopHeaderTwo);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
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
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
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

/***/ }),

/***/ "./images/category-products-img2.jpg":
/*!*******************************************!*\
  !*** ./images/category-products-img2.jpg ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ "./images/category-products-img3.jpg":
/*!*******************************************!*\
  !*** ./images/category-products-img3.jpg ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ "./pages/404.js":
/*!**********************!*\
  !*** ./pages/404.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout_NavbarTwo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout/NavbarTwo */ "./components/Layout/NavbarTwo.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Custom404 = function Custom404() {
  return __jsx("div", null, __jsx(_components_Layout_NavbarTwo__WEBPACK_IMPORTED_MODULE_1__["default"], null), __jsx("div", {
    className: "error-area"
  }, __jsx("div", {
    "class": "mainbox"
  }, __jsx("div", {
    "class": "err"
  }, "4"), __jsx("i", {
    style: {
      position: "absolute",
      fontSize: "8.5rem",
      left: "42%",
      top: "15%",
      color: "#ffffff"
    },
    "class": "far fa-question-circle fa-spin"
  }), __jsx("div", {
    "class": "err2"
  }, "4"), __jsx("div", {
    "class": "msg"
  }, "Maybe this page moved? Got deleted? Is hiding out in quarantine? Never existed in the first place?", __jsx("br", null), __jsx("span", null, "Let's go ", __jsx("a", {
    href: "/"
  }, "home"), " and try from there.")))));
};

_c = Custom404;
/* harmony default export */ __webpack_exports__["default"] = (Custom404);

var _c;

$RefreshReg$(_c, "Custom404");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
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
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXQvTWVnYU1lbnVUd28uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTGF5b3V0L05hdmJhclR3by5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXQvVG9wSGVhZGVyVHdvLmpzIiwid2VicGFjazovL19OX0UvLi9pbWFnZXMvY2F0ZWdvcnktcHJvZHVjdHMtaW1nMi5qcGciLCJ3ZWJwYWNrOi8vX05fRS8uL2ltYWdlcy9jYXRlZ29yeS1wcm9kdWN0cy1pbWczLmpwZyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvNDA0LmpzIl0sIm5hbWVzIjpbIk1lZ2FNZW51VHdvIiwiZGlzcGxheSIsInNlYXJjaEZvcm0iLCJjb2xsYXBzZWQiLCJzZXRTdGF0ZSIsInByZXZTdGF0ZSIsInN0YXRlIiwiZWxlbWVudElkIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ3aW5kb3ciLCJzY3JvbGxZIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwic2Nyb2xsVG8iLCJjbGFzc09uZSIsImNsYXNzVHdvIiwicHJvZHVjdHMiLCJwcm9wcyIsInJlcXVpcmUiLCJ0b2dnbGVOYXZiYXIiLCJoYW5kbGVTZWFyY2hGb3JtIiwiZSIsInByZXZlbnREZWZhdWx0IiwiaGFuZGxlQ2FydCIsImxlbmd0aCIsIkNvbXBvbmVudCIsIm1hcFN0YXRlVG9Qcm9wcyIsImFkZGVkSXRlbXMiLCJjb25uZWN0IiwiTmF2YmFyVHdvIiwiVG9wSGVhZGVyVHdvIiwiaGFuZGxlV2lzaGxpc3QiLCJDdXN0b200MDQiLCJwb3NpdGlvbiIsImZvbnRTaXplIiwibGVmdCIsInRvcCIsImNvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztJQUVNQSxXOzs7Ozs7Ozs7Ozs7Ozs7O2dO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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFJLGlCQUFTLEVBQUMsZUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLEVBR0U7QUFBSSxpQkFBUyxFQUFDLGtCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQyxnREFBRDtBQUFNLFlBQUksRUFBQyxpQkFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFERixDQURGLENBREYsRUFNRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQyxnREFBRDtBQUFNLFlBQUksRUFBQyxXQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURGLENBREYsQ0FORixFQVlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRSxNQUFDLGdEQUFEO0FBQU0sWUFBSSxFQUFDLGdCQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtDQURGLENBREYsQ0FaRixFQWtCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQyxnREFBRDtBQUFNLFlBQUksRUFBQyx3QkFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFERixDQURGLENBbEJGLEVBd0JFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRSxNQUFDLGdEQUFEO0FBQU0sWUFBSSxFQUFDLFlBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREYsQ0FERixDQXhCRixDQUhGLENBREYsRUFvQ0U7QUFBSyxpQkFBUyxFQUFDLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUksaUJBQVMsRUFBQyxlQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsRUFHRTtBQUFJLGlCQUFTLEVBQUMsa0JBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRSxNQUFDLGdEQUFEO0FBQU0sWUFBSSxFQUFDLE1BQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsQ0FERixDQURGLEVBT0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFLE1BQUMsZ0RBQUQ7QUFBTSxZQUFJLEVBQUMsTUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixDQURGLENBUEYsRUFhRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQyxnREFBRDtBQUFNLFlBQUksRUFBQyxxQkFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFERixDQURGLENBYkYsRUFtQkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFLE1BQUMsZ0RBQUQ7QUFBTSxZQUFJLEVBQUMsaUJBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsQ0FERixDQW5CRixFQXlCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQyxnREFBRDtBQUFNLFlBQUksRUFBQyxrQkFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixDQURGLENBekJGLENBSEYsQ0FwQ0YsRUF3RUU7QUFBSyxpQkFBUyxFQUFDLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUksaUJBQVMsRUFBQyxlQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsRUFHRTtBQUFJLGlCQUFTLEVBQUMsa0JBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRSxNQUFDLGdEQUFEO0FBQU0sWUFBSSxFQUFDLHdCQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQURGLENBREYsQ0FERixFQVFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRSxNQUFDLGdEQUFEO0FBQU0sWUFBSSxFQUFDLG9CQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLENBREYsQ0FSRixDQUhGLENBeEVGLENBREYsQ0FERixDQURGLENBTkYsQ0FQRixFQW9IRTtBQUFJLGlCQUFTLEVBQUMsbUJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFLE1BQUMsZ0RBQUQ7QUFBTSxZQUFJLEVBQUMsR0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBRyxpQkFBUyxFQUFDLFVBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFDUztBQUFHLGlCQUFTLEVBQUMscUJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURULENBREYsQ0FERixFQU1FO0FBQUksaUJBQVMsRUFBQyxlQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFJLGlCQUFTLEVBQUMsVUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBSyxpQkFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUssaUJBQVMsRUFBQyxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFLLGlCQUFTLEVBQUMsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBSSxpQkFBUyxFQUFDLGVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixFQUdFO0FBQUksaUJBQVMsRUFBQyxrQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFLE1BQUMsZ0RBQUQ7QUFBTSxZQUFJLEVBQUMsZUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFERixDQURGLENBREYsRUFPRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQyxnREFBRDtBQUFNLFlBQUksRUFBQyxpQkFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFERixDQURGLENBUEYsRUFhRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQyxnREFBRDtBQUFNLFlBQUksRUFBQyx1QkFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQ0FERixDQURGLENBYkYsRUFtQkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFLE1BQUMsZ0RBQUQ7QUFBTSxZQUFJLEVBQUMsYUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixDQURGLENBbkJGLEVBeUJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRSxNQUFDLGdEQUFEO0FBQU0sWUFBSSxFQUFDLGdCQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURGLENBREYsQ0F6QkYsQ0FIRixDQURGLEVBd0NFO0FBQUssaUJBQVMsRUFBQyxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFJLGlCQUFTLEVBQUMsZUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLEVBR0U7QUFBSSxpQkFBUyxFQUFDLGtCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQyxnREFBRDtBQUFNLFlBQUksRUFBQyxpQkFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFERixDQURGLENBREYsQ0FIRixDQXhDRixFQXVERTtBQUFLLGlCQUFTLEVBQUMsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBSSxpQkFBUyxFQUFDLGVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixFQUdFO0FBQUksaUJBQVMsRUFBQyxrQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFLE1BQUMsZ0RBQUQ7QUFBTSxZQUFJLEVBQUMsUUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixDQURGLENBREYsRUFRRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQyxnREFBRDtBQUFNLFlBQUksRUFBQyxnQkFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFERixDQURGLENBUkYsRUFlRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQyxnREFBRDtBQUFNLFlBQUksRUFBQyxlQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURGLENBREYsQ0FmRixFQXNCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQyxnREFBRDtBQUFNLFlBQUksRUFBQyx5QkFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQ0FERixDQURGLENBdEJGLENBSEYsQ0F2REYsRUEwRkU7QUFBSyxpQkFBUyxFQUFDLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUksaUJBQVMsRUFBQyxrQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUssaUJBQVMsRUFBQyx5QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFDRSxXQUFHLEVBQUVJLG1CQUFPLENBQUMsb0ZBQUQsQ0FEZDtBQUVFLFdBQUcsRUFBQyxPQUZOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFERixFQU1FO0FBQUssaUJBQVMsRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQURGLENBTkYsRUFVRTtBQUFHLFlBQUksRUFBQyxHQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFWRixDQURGLEVBY0U7QUFBSyxpQkFBUyxFQUFDLHlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUNFLFdBQUcsRUFBRUEsbUJBQU8sQ0FBQyxvRkFBRCxDQURkO0FBRUUsV0FBRyxFQUFDLE9BRk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURGLEVBTUU7QUFBSyxpQkFBUyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBREYsQ0FORixFQVVFO0FBQUcsWUFBSSxFQUFDLEdBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQVZGLENBZEYsQ0FERixDQURGLENBMUZGLENBREYsQ0FERixDQURGLENBTkYsQ0FwSEYsRUE0UEU7QUFBSSxpQkFBUyxFQUFDLG1CQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRSxNQUFDLGdEQUFEO0FBQU0sWUFBSSxFQUFDLEdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUcsaUJBQVMsRUFBQyxVQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBQ2E7QUFBRyxpQkFBUyxFQUFDLHFCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFEYixDQURGLENBREYsRUFNRTtBQUFJLGlCQUFTLEVBQUMsZUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBSSxpQkFBUyxFQUFDLFVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUssaUJBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFLLGlCQUFTLEVBQUMsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBSyxpQkFBUyxFQUFDLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUlBO0FBQUksaUJBQVMsRUFBQyxrQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFLE1BQUMsZ0RBQUQ7QUFBTSxZQUFJLEVBQUMsTUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLENBREYsQ0FESixFQU9JO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRSxNQUFDLGdEQUFEO0FBQU0sWUFBSSxFQUFDLHFCQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQURGLENBREYsQ0FQSixFQWFJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRSxNQUFDLGdEQUFEO0FBQU0sWUFBSSxFQUFDLG1CQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLENBREYsQ0FiSixFQW1CSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQyxnREFBRDtBQUFNLFlBQUksRUFBQyxvQ0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixDQURGLENBbkJKLENBSkEsQ0FERixFQWlDRTtBQUFLLGlCQUFTLEVBQUMsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBSSxpQkFBUyxFQUFDLGVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLEVBR0U7QUFBSSxpQkFBUyxFQUFDLGtCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFIRixDQWpDRixFQTJDRTtBQUFLLGlCQUFTLEVBQUMsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBSSxpQkFBUyxFQUFDLGVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLEVBR0U7QUFBSSxpQkFBUyxFQUFDLGtCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFIRixDQTNDRixFQXNERTtBQUFLLGlCQUFTLEVBQUMsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBSSxpQkFBUyxFQUFDLGVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLEVBR0U7QUFBSSxpQkFBUyxFQUFDLGtCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFIRixDQXRERixFQWlFRTtBQUFLLGlCQUFTLEVBQUMsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBSSxpQkFBUyxFQUFDLGtCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBSyxpQkFBUyxFQUFDLHlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUNFLFdBQUcsRUFBRUEsbUJBQU8sQ0FBQyxrRkFBRCxDQURkO0FBRUUsV0FBRyxFQUFDLE9BRk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURGLEVBTUU7QUFBSyxpQkFBUyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREYsQ0FORixFQVVFO0FBQUcsWUFBSSxFQUFDLGNBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQVZGLENBREYsRUFjRTtBQUFLLGlCQUFTLEVBQUMseUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQ0UsV0FBRyxFQUFFQSxtQkFBTyxDQUFDLHdKQUFELENBRGQ7QUFFRSxXQUFHLEVBQUMsT0FGTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREYsRUFNRTtBQUFLLGlCQUFTLEVBQUMsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFERixDQU5GLEVBVUU7QUFBRyxZQUFJLEVBQUMsY0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBVkYsQ0FkRixDQURGLENBREYsQ0FqRUYsQ0FERixDQURGLENBREYsQ0FORixDQTVQRixFQTRXRTtBQUFJLGlCQUFTLEVBQUMscUJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFLE1BQUMsZ0RBQUQ7QUFBTSxZQUFJLEVBQUMsT0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBRyxpQkFBUyxFQUFDLFVBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixDQURGLENBNVdGLENBREYsRUF3WEU7QUFBSyxpQkFBUyxFQUFDLGVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUssaUJBQVMsRUFBQyxhQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUNFLGVBQU8sRUFBRSxLQUFLRSxnQkFEaEI7QUFFRSxpQkFBUyxFQUFDLDBCQUZaO0FBR0UsYUFBSyxFQUFFO0FBQ0x0QixpQkFBTyxFQUFFLEtBQUtLLEtBQUwsQ0FBV0osVUFBWCxHQUF3QixNQUF4QixHQUFpQztBQURyQyxTQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFERixFQVNFO0FBQ0UsZUFBTyxFQUFFLEtBQUtxQixnQkFEaEI7QUFFRSxpQkFBUyxtQ0FDUCxLQUFLakIsS0FBTCxDQUFXSixVQUFYLEdBQXdCLFFBQXhCLEdBQW1DLEVBRDVCLENBRlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQVRGLEVBZ0JFO0FBQ0UsaUJBQVMsRUFBQyw2QkFEWjtBQUVFLGFBQUssRUFBRTtBQUNMRCxpQkFBTyxFQUFFLEtBQUtLLEtBQUwsQ0FBV0osVUFBWCxHQUF3QixPQUF4QixHQUFrQztBQUR0QyxTQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FNRTtBQUFLLGlCQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBTSxpQkFBUyxFQUFDLGFBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUNFLGlCQUFTLEVBQUMsY0FEWjtBQUVFLFlBQUksRUFBQyxRQUZQO0FBR0UsbUJBQVcsRUFBQyxRQUhkO0FBSUUsWUFBSSxFQUFDLE1BSlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURGLEVBT0U7QUFBUSxpQkFBUyxFQUFDLGVBQWxCO0FBQWtDLFlBQUksRUFBQyxRQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBRyxpQkFBUyxFQUFDLGVBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURGLENBUEYsQ0FERixDQU5GLENBaEJGLENBREYsRUF1Q0U7QUFBSyxpQkFBUyxFQUFDLGFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFLE1BQUMsZ0RBQUQ7QUFBTSxZQUFJLEVBQUMsR0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFDRSxlQUFPLEVBQUUsaUJBQUNzQixDQUFELEVBQU87QUFDZEEsV0FBQyxDQUFDQyxjQUFGOztBQUNBLGdCQUFJLENBQUNDLFVBQUw7QUFDRCxTQUpIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTVFQLFFBQVEsQ0FBQ1EsTUFOakIsT0FNMEIsR0FOMUIsRUFPRTtBQUFHLGlCQUFTLEVBQUMscUJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQVBGLENBREYsQ0FERixDQXZDRixDQXhYRixDQXZCRixDQURGLENBREYsQ0FERixDQURGLEVBNmNHLEtBQUtyQixLQUFMLENBQVdMLE9BQVgsR0FBcUIsTUFBQyxvREFBRDtBQUFNLGVBQU8sRUFBRSxLQUFLeUIsVUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUFyQixHQUEwRCxFQTdjN0QsQ0FERjtBQWlkRDs7OztFQXBnQnVCRSwrQzs7QUF1Z0IxQixJQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUN2QixLQUFELEVBQVc7QUFDakMsU0FBTztBQUNMYSxZQUFRLEVBQUViLEtBQUssQ0FBQ3dCO0FBRFgsR0FBUDtBQUdELENBSkQ7O0FBTWVDLDBIQUFPLENBQUNGLGVBQUQsQ0FBUCxDQUF5QjdCLFdBQXpCLENBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbGhCQTtBQUNBO0FBQ0E7QUFDQTs7SUFFTWdDLFM7Ozs7Ozs7Ozs7Ozs7NkJBQ087QUFDTCxhQUNJLE1BQUMsNENBQUQsQ0FBTyxRQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FHSTtBQUFLLGlCQUFTLEVBQUMsYUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBRUksTUFBQyxvREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBRkosQ0FISixDQURKO0FBVUg7Ozs7RUFabUJKLCtDOztBQWVUSSx3RUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBO0FBQ0E7QUFDQTs7SUFFTUMsWTs7Ozs7Ozs7Ozs7Ozs7OztnTkFFTTtBQUNKaEMsYUFBTyxFQUFFO0FBREwsSzs7eU5BSVMsWUFBTTtBQUNuQixZQUFLRyxRQUFMLENBQWUsVUFBQUMsU0FBUyxFQUFJO0FBQ3hCLGVBQU87QUFDSEosaUJBQU8sRUFBRSxDQUFDSSxTQUFTLENBQUNKO0FBRGpCLFNBQVA7QUFHSCxPQUpEO0FBS0gsSzs7Ozs7Ozs2QkFFUTtBQUFBOztBQUNMLGFBQ0ksTUFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQUssaUJBQVMsRUFBQyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFLLGlCQUFTLEVBQUMsaUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQUssaUJBQVMsRUFBQyx3QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBSyxpQkFBUyxFQUFDLG1CQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFJLGlCQUFTLEVBQUMsZ0JBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBSSxNQUFDLGdEQUFEO0FBQU0sWUFBSSxFQUFDLFFBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFwQixDQUFKLENBREosRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQUksTUFBQyxnREFBRDtBQUFNLFlBQUksRUFBQyxHQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBZTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUFmLENBQUosQ0FGSixFQUdJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBSSxNQUFDLGdEQUFEO0FBQU0sWUFBSSxFQUFDLE1BQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFrQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFsQixDQUFKLENBSEosRUFJSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQUksTUFBQyxnREFBRDtBQUFNLFlBQUksRUFBQyxhQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBeUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBekIsQ0FBSixDQUpKLENBREosQ0FESixFQVVJO0FBQUssaUJBQVMsRUFBQyxtQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBSSxpQkFBUyxFQUFDLHNCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0ksTUFBQyxnREFBRDtBQUFNLFlBQUksRUFBQyxHQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUNJLHVCQUFZLE9BRGhCO0FBRUksdUJBQVksd0JBRmhCO0FBR0ksZUFBTyxFQUFFLGlCQUFBdUIsQ0FBQyxFQUFJO0FBQ1ZBLFdBQUMsQ0FBQ0MsY0FBRjs7QUFDQSxnQkFBSSxDQUFDUyxjQUFMO0FBQ0gsU0FOTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQVFhO0FBQUcsaUJBQVMsRUFBQyxjQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFSYixDQURKLENBREosQ0FESixFQWVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSSxNQUFDLGdEQUFEO0FBQU0sWUFBSSxFQUFDLFVBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQVc7QUFBRyxpQkFBUyxFQUFDLHNCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFBWCxDQURKLENBREosQ0FmSixFQW9CSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBSyxpQkFBUyxFQUFDLGdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBUSxhQUFLLEVBQUMsR0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosRUFFSTtBQUFRLGFBQUssRUFBQyxHQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGSixFQUdJO0FBQVEsYUFBSyxFQUFDLEdBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFISixDQURKLENBREosQ0FwQkosQ0FESixDQVZKLENBREosQ0FESixDQURKLEVBaURLLEtBQUs1QixLQUFMLENBQVdMLE9BQVgsR0FBcUIsTUFBQyx1REFBRDtBQUFVLGVBQU8sRUFBRSxLQUFLaUMsY0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUFyQixHQUFrRSxFQWpEdkUsQ0FESjtBQXFESDs7OztFQXBFc0JOLCtDOztBQXVFWkssMkVBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0VBLGtDQUFrQyxncU07Ozs7Ozs7Ozs7O0FDQWxDLGtDQUFrQyxncU07Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FsQzs7QUFFQSxJQUFNRSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQ3BCLFNBQ0UsbUJBQ04sTUFBQyxvRUFBRCxPQURNLEVBRUU7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNQO0FBQUssYUFBTTtBQUFYLEtBQ0c7QUFBSyxhQUFNO0FBQVgsU0FESCxFQUVHO0FBQUcsU0FBSyxFQUFFO0FBQUNDLGNBQVEsRUFBRSxVQUFYO0FBQ1ZDLGNBQVEsRUFBRSxRQURBO0FBRVZDLFVBQUksRUFBRSxLQUZJO0FBR1ZDLFNBQUcsRUFBRSxLQUhLO0FBSVZDLFdBQUssRUFBRTtBQUpHLEtBQVY7QUFJb0IsYUFBTTtBQUoxQixJQUZILEVBT0c7QUFBSyxhQUFNO0FBQVgsU0FQSCxFQVFHO0FBQUssYUFBTTtBQUFYLDJHQUFtSCxpQkFBbkgsRUFBd0gsaUNBQWU7QUFBRyxRQUFJLEVBQUM7QUFBUixZQUFmLHlCQUF4SCxDQVJILENBRE8sQ0FGRixDQURGO0FBa0JILENBbkJEOztLQUFNTCxTO0FBcUJTQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy80MDQuNTM5ZDNiMzM5Y2Q3MGZhOTE2MTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBDYXJ0IGZyb20gXCIuLi9Nb2RhbC9DYXJ0XCI7XG5cbmNsYXNzIE1lZ2FNZW51VHdvIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgZGlzcGxheTogZmFsc2UsXG4gICAgc2VhcmNoRm9ybTogZmFsc2UsXG4gICAgY29sbGFwc2VkOiB0cnVlLFxuICB9O1xuXG4gIGhhbmRsZUNhcnQgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSgocHJldlN0YXRlKSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBkaXNwbGF5OiAhcHJldlN0YXRlLmRpc3BsYXksXG4gICAgICB9O1xuICAgIH0pO1xuICB9O1xuXG4gIGhhbmRsZVNlYXJjaEZvcm0gPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSgocHJldlN0YXRlKSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzZWFyY2hGb3JtOiAhcHJldlN0YXRlLnNlYXJjaEZvcm0sXG4gICAgICB9O1xuICAgIH0pO1xuICB9O1xuXG4gIHRvZ2dsZU5hdmJhciA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGNvbGxhcHNlZDogIXRoaXMuc3RhdGUuY29sbGFwc2VkLFxuICAgIH0pO1xuICB9O1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGxldCBlbGVtZW50SWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdmJhclwiKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsICgpID0+IHtcbiAgICAgIGlmICh3aW5kb3cuc2Nyb2xsWSA+IDE3MCkge1xuICAgICAgICBlbGVtZW50SWQuY2xhc3NMaXN0LmFkZChcImlzLXN0aWNreVwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZW1lbnRJZC5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtc3RpY2t5XCIpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNvbGxhcHNlZCB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBjbGFzc09uZSA9IGNvbGxhcHNlZFxuICAgICAgPyBcImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZVwiXG4gICAgICA6IFwiY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlIHNob3dcIjtcbiAgICBjb25zdCBjbGFzc1R3byA9IGNvbGxhcHNlZFxuICAgICAgPyBcIm5hdmJhci10b2dnbGVyIG5hdmJhci10b2dnbGVyLXJpZ2h0IGNvbGxhcHNlZFwiXG4gICAgICA6IFwibmF2YmFyLXRvZ2dsZXIgbmF2YmFyLXRvZ2dsZXItcmlnaHRcIjtcblxuICAgIGxldCB7IHByb2R1Y3RzIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWFyZWEgYmctYmxhY2tcIj5cbiAgICAgICAgICA8ZGl2IGlkPVwibmF2YmFyXCIgY2xhc3NOYW1lPVwiY29tZXJvLW5hdlwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cbiAgICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXIgbmF2YmFyLWV4cGFuZC1tZCBuYXZiYXItbGlnaHRcIj5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9e3JlcXVpcmUoXCIuLi8uLi9pbWFnZXMvd2hpdGUtbG9nby5wbmdcIil9XG4gICAgICAgICAgICAgICAgICAgICAgYWx0PVwibG9nb1wiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy50b2dnbGVOYXZiYXJ9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzVHdvfVxuICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCJcbiAgICAgICAgICAgICAgICAgIGRhdGEtdGFyZ2V0PVwiI25hdmJhclN1cHBvcnRlZENvbnRlbnRcIlxuICAgICAgICAgICAgICAgICAgYXJpYS1jb250cm9scz1cIm5hdmJhclN1cHBvcnRlZENvbnRlbnRcIlxuICAgICAgICAgICAgICAgICAgYXJpYS1leHBhbmRlZD1cImZhbHNlXCJcbiAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJUb2dnbGUgbmF2aWdhdGlvblwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZXItaWNvblwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc09uZX0gaWQ9XCJuYXZiYXJTdXBwb3J0ZWRDb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2YmFyLW5hdlwiPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW0gcC1yZWxhdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGluayBhY3RpdmVcIj5Ib21lPC9hPlxuICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW0gbWVnYW1lbnVcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgRklSRUFSTVMgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWNoZXZyb24tZG93blwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwic3VibWVudS10aXRsZVwiPkhBTkRHVU5TPC9oNj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibWVnYW1lbnUtc3VibWVudVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2VtaS1hdXRvbWF0aWNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+IFNlbWktQXV0b21hdGljIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcmV2b2x2ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+IFJldm9sdmVyIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hci1hay1waXN0b2xzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPkFSL0FLIFBpc3RvbHMgVGFjdGljYWw8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbGV2ZXItYWN0aW9uLWhhbmRndW5zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPkxldmVyIEFjdGlvbjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9kZXJyaW5nZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+IERlcnJpbmdlcjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJzdWJtZW51LXRpdGxlXCI+UklGTEVTPC9oNj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibWVnYW1lbnUtc3VibWVudVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYXJzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPiBBUnM8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWtzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPiBBS3M8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYm9sdC1hY3Rpb24tcmlmbGVzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPiBCb2x0IEFjdGlvbjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9odW50aW5nLXJpZmxlc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT4gSHVudGluZzwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi90YWN0aWNhbC1yaWZsZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+VGFjdGljYWw8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwic3VibWVudS10aXRsZVwiPiBTSE9UR1VOUzwvaDY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1lZ2FtZW51LXN1Ym1lbnVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3NlbGYtZGVmZW5zZS1zaG90Z3Vuc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5TZWxmIERlZmVuc2VcbiAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Nwb3J0aW5nLXNob3RndW5zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlNwb3J0aW5nXG4gICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtIG1lZ2FtZW51XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIE9QVElDUyA8aSBjbGFzc05hbWU9XCJmYXMgZmEtY2hldnJvbi1kb3duXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJzdWJtZW51LXRpdGxlXCI+U2NvcGVzPC9oNj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibWVnYW1lbnUtc3VibWVudVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcmlmbGUtc2NvcGVzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlJpZmxlIFNjb3BlczwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9yZWQtZG90LW9wdGljc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5SZWQgRG90IE9wdGljczwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9uaWdodC12aXNpb24tdGhlcm1hbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5OaWdodCBWaXNpb24gLyBUaGVybWFsPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2Jpbm9jdWxhcnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+IEJpbm9jdWxhcnM8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcmFuZ2UtZmluZGVyc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5SYW5nZSBGaW5kZXJzPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJzdWJtZW51LXRpdGxlXCI+IFNJR0hUUzwvaDY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1lZ2FtZW51LXN1Ym1lbnVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2hhbmRndW4tc2lnaHRzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPkhhbmRndW4gU2lnaHRzPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cInN1Ym1lbnUtdGl0bGVcIj5BY2Nlc3NvcmllczwvaDY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1lZ2FtZW51LXN1Ym1lbnVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2ZsYXNoXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPiAgRkxBU0ggXG4gICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbGlnaHRzLXdlYXBvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT4gTElHSFRTIFdFQVBPTiBcbiAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9saWdodHMtbGFzZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+IExJR0hUUyBMQVNFUiBcbiAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2lnaHRzLWJhdHRlcmllcy1idWxic1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5TSUdIVFMgQkFUVEVSSUVTICYgQlVMQlM8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJtZWdhbWVudS1zdWJtZW51XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhc2lkZS10cmVuZGluZy1wcm9kdWN0c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtyZXF1aXJlKFwiLi4vLi4vaW1hZ2VzL2NhdGVnb3J5LXByb2R1Y3RzLWltZzIuanBnXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImltYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhdGVnb3J5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PlRvcCBUcmVuZGluZzwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXNpZGUtdHJlbmRpbmctcHJvZHVjdHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17cmVxdWlyZShcIi4uLy4uL2ltYWdlcy9jYXRlZ29yeS1wcm9kdWN0cy1pbWczLmpwZ1wiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJpbWFnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXRlZ29yeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND5Qb3B1bGFyIFByb2R1Y3RzPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj48L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbSBtZWdhbWVudVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBBTU1VTklUSU9OIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1jaGV2cm9uLWRvd25cIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibWVnYW1lbnUtc3VibWVudVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcmltXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlJJTTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9oYW5kZ3VuLWFtbXVuaXRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+RmlyZSBIYW5kZ3VuPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3JpZmxlLWFtbXVuaXRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+UmlmbGU8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY2F0ZWdvcnktcmlnaHQtc2lkZWJhci13aXRoLWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPnNob3RndW48L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cInN1Ym1lbnUtdGl0bGVcIj4gPC9oNj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibWVnYW1lbnUtc3VibWVudVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJzdWJtZW51LXRpdGxlXCI+IDwvaDY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1lZ2FtZW51LXN1Ym1lbnVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJzdWJtZW51LXRpdGxlXCI+IDwvaDY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1lZ2FtZW51LXN1Ym1lbnVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1lZ2FtZW51LXN1Ym1lbnVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFzaWRlLXRyZW5kaW5nLXByb2R1Y3RzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3JlcXVpcmUoXCIuLi8uLi9pbWFnZXMvYW1tdW5pdGlvbi9yaW0vY2NpLTc0LmpwZ1wiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJpbWFnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXRlZ29yeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND5Ub3AgVHJlbmRpbmc8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL3Byb2R1Y3QvMjM1XCI+PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXNpZGUtdHJlbmRpbmctcHJvZHVjdHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17cmVxdWlyZShcIi4uLy4uL2ltYWdlcy9hbW11bml0aW9uL2hhbmRndW4vMTQxMDk5MTU1MC05MDI4Mi05bW0tbHVnZXItMTQ3LWdyLXh0cC5qcGdcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiaW1hZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2F0ZWdvcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+UG9wdWxhciBQcm9kdWN0czwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvcHJvZHVjdC8yMTVcIj48L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW0gcC1yZWxhdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYmxvZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgQmxvZ1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cblxuICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgPC91bD5cblxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdGhlcnMtb3B0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9uLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVTZWFyY2hGb3JtfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2VhcmNoLWJ0biBmYXMgZmEtc2VhcmNoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRoaXMuc3RhdGUuc2VhcmNoRm9ybSA/IFwibm9uZVwiIDogXCJibG9ja1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICA+PC9pPlxuXG4gICAgICAgICAgICAgICAgICAgICAgPGlcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU2VhcmNoRm9ybX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGNsb3NlLWJ0biBmYXMgZmEtdGltZXMgJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZWFyY2hGb3JtID8gXCJhY3RpdmVcIiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICAgICAgICAgID48L2k+XG5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzZWFyY2gtb3ZlcmxheSBzZWFyY2gtcG9wdXBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogdGhpcy5zdGF0ZS5zZWFyY2hGb3JtID8gXCJibG9ja1wiIDogXCJub25lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLWJveFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJzZWFyY2gtZm9ybVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2VhcmNoLWlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzZWFyY2hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJzZWFyY2gtYnV0dG9uXCIgdHlwZT1cInN1Ym1pdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXNlYXJjaFwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9uLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVDYXJ0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIENhcnQoe3Byb2R1Y3RzLmxlbmd0aH0pe1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtc2hvcHBpbmctYmFnXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHt0aGlzLnN0YXRlLmRpc3BsYXkgPyA8Q2FydCBvbkNsaWNrPXt0aGlzLmhhbmRsZUNhcnR9IC8+IDogXCJcIn1cbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBwcm9kdWN0czogc3RhdGUuYWRkZWRJdGVtcyxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShNZWdhTWVudVR3byk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFRvcFBhbmVsIGZyb20gJy4vVG9wUGFuZWwnO1xuaW1wb3J0IFRvcEhlYWRlclR3byBmcm9tICcuL1RvcEhlYWRlclR3byc7XG5pbXBvcnQgTWVnYU1lbnVUd28gZnJvbSAnLi9NZWdhTWVudVR3byc7XG5cbmNsYXNzIE5hdmJhclR3byBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItYXJlYVwiPlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPE1lZ2FNZW51VHdvIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyVHdvO1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgV2lzaGxpc3QgZnJvbSAnLi4vTW9kYWwvV2lzaGxpc3QnO1xuXG5jbGFzcyBUb3BIZWFkZXJUd28gZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgc3RhdGUgPSB7XG4gICAgICAgIGRpc3BsYXk6IGZhbHNlXG4gICAgfTtcblxuICAgIGhhbmRsZVdpc2hsaXN0ID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKCBwcmV2U3RhdGUgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAhcHJldlN0YXRlLmRpc3BsYXlcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTcgY29sLW1kLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInRvcC1oZWFkZXItbmF2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PExpbmsgaHJlZj1cIi9hYm91dFwiPjxhPkFib3V0PC9hPjwvTGluaz48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9XCIvXCI+PGE+T3VyIFN0b3JlczwvYT48L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48TGluayBocmVmPVwiL2ZhcVwiPjxhPkZBUSdzPC9hPjwvTGluaz48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9XCIvY29udGFjdC11c1wiPjxhPkNvbnRhY3Q8L2E+PC9MaW5rPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy01IGNvbC1tZC02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJ0b3AtaGVhZGVyLXJpZ2h0LW5hdlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJtb2RhbFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10YXJnZXQ9XCIjc2hvcHBpbmdXaXNobGlzdE1vZGFsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZVdpc2hsaXN0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdpc2hsaXN0IDxpIGNsYXNzTmFtZT1cImZhciBmYS1oZWFydFwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jb21wYXJlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPkNvbXBhcmUgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWJhbGFuY2Utc2NhbGVcIj48L2k+PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYW5ndWFnZXMtbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjFcIj5Fbmc8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyXCI+R2VyPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiM1wiPlNwYW48L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZGlzcGxheSA/IDxXaXNobGlzdCBvbkNsaWNrPXt0aGlzLmhhbmRsZVdpc2hsaXN0fSAvPiA6ICcnfVxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvcEhlYWRlclR3bztcbiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL2pwZWc7YmFzZTY0LC85ai80QUFRU2taSlJnQUJBUUVBQVFBQkFBRC8yd0JEQUFNQ0FnSUNBZ01DQWdJREF3TURCQVlFQkFRRUJBZ0dCZ1VHQ1FnS0Nna0lDUWtLREE4TUNnc09Dd2tKRFJFTkRnOFFFQkVRQ2d3U0V4SVFFdzhRRUJEL3dBQUxDQURjQVdjQkFSRUEvOFFBSEFBQkFRRUFBZ01CQUFBQUFBQUFBQUFBQUFnSEJBWURCUWtDLzhRQVFoQUFBUU1EQXdJRUJBRUlCUTBBQUFBQUFBRUNBd1FGQmdjUkVnZ2hDUk1pTVJReVFWRmhGUllqTTBKU2NZRVhZcEdocGhra05EVlRWMk55a3BheHd1VC8yZ0FJQVFFQUFEOEFxQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUhvYzV6ckZOTnNYcmN5elc4dzJ5MDI5bkthZVRkZTZyczFyV3B1cm5LdXlJMUVWVlgySkpyUEVvcGJoWFZQNWdhRFpKa05zcFhmcEt0OVg1TDJ0L2VjeU9HVkcvZnU4MkRRRHJBMHYxL3FuV0MwL0YyVEpJNDFsVzAzRGp5bGEzdTUwTWpWNHlJaWQxVHM1RVJWNDdKdWJvUXpsSGllVTloeWU3MkdnMFhXNDA5dHI2aWtpcTB5UHkvaUdSeU9hMlRoOEs3anlSRVhiZGR0OXQxOXoxbitWUmYvQUxoSGY5ei9BUHlGZmFHYW9MclBwWFl0VEZzWDVHVzlObmQ4RDhUOFI1UGwxRWtYNnpnemx2NWZMNVUyMzI3N2JtYjYvZGF1bDJoTjBkaTBrRlZrbVN4dFIwdHVvSHRhMm0zVGRxVHl1N01jcWJMeFJITzJWRlZFUlUzemV4ZUpKWW9ibFN3YW1hTlpIaWR2ckYyaHJtekxWSngvZlZqb29sVnFlNjhPUy9aRks0eHJKYkJtTmlvc254ZTdVOXp0VnhpU2FscXFkL0prakYrMzJWRjNSVVh1aW9xS2lLaDdNQXpMWEhxSTAyNmY3TERjODV1RXo2dXQ1ZkEyeWpZa2xWVmNmZFd0VlVSclUzVGR6bFJQcDNYWkNjRjhTdXBkQ3QzaDZkNzgreEl2ZTRyY2xScU4zOSsxT3JQNWMvNWxDNkQ5UzJtblVKYlo1OE5yS2ltdWRDMUgxdHBybW95cGdhdmJtaUlxdGV6ZnR5YXEvVGRHcXFJZDR6ck84VDAxeGV0ekxOcnpEYTdUUU5SMDA4dTY3cXE3TmExcWJxOXlyMlJxSXFxcEpsZDRsRkRjYStvaTA2MEt5VEpLS25YMVZENnJ5SG8zOTVXUnhUY1UvaTcrdzBQUXZybTB1MWx2OE9HVjl2cnNVeU9wZDVkUFIzQjdYdzFNbit6am1UYjErL3BjMXFyN0p1dllvOGxYVlh4Qk5QOEFDc3Jtd25BTVN1V2UzYWxsZEJNdERNa05ONWpmbVpISWpYdWtWTmwzVnJPUDJjdjAvR2xmaUQ0Qm1lVnc0VnFGaUZ5d0s2Vk1yWUlYMXM2VFV5U3UyUnJKSHF5TjBTcXFwc3JtY2Z1NUNyUUFBQUFBQUFBQUFDYXVzM3A0MVQ2aHFMRzdOaFdSMldndEZwbWxxYTJscnBwV09ubWR4YXg3ZURISXFzWjVteUtxZk83dWJ0Z21EWTFwdmlkdXd6RWJaRlEyeTJRdGhpalkxRVY2b25kNzFUNW51WHU1eTkxVlZWU0ErckNndGVIOWJXQzNIVEdHS215R3RsdGRYWHdVYUluT3RmVnVZbk5yZlowa1hEa243U0x1dnpLcTM1cURrak1Od1BJOHVlNUVTeVdtcnVHNi93RENoYy8vQU5TT1BES3ROSFpjRHp2VWU5VmtOTkRYM1NudDYxVlRLakd0U0NKWkhLcm5Mc202MUtiL0FNUHdMVnMyU1k3a1ViNWNmdjF1dWJJMTJlNmpxbzVrYi9GV0t1eHdOUThtZGhlQVpObUxJMnlPc1ZucmJtMWp2Wnl3d1BrUkYvNlNGdkRxMHd0ZW9lUzVYcm5uY1RiMWRxR3ZiRFJQcTBTVGpXU0lzczFTcUwyV1QxTTRyOU9UbDk5bFM1dFFkUDhBRmRVTVN1R0ZabGE0cTYyM0dKMGJtdmFpdWlkdDZaSTFYNVh0WHUxeWQwVWpQdzQ4eHU5Z3kvUHRBN3JYT3FZTFJKTGNLTkZWZG9ud3pwVDFIRkY5a2Nyb1YyK2lvcS9WU25zYTZuTkQ4dXp4Mm1Ga3pibGxEWnBxZGJiVTJ5c3BKUE5pMzh5UGVhSmplU2NYZW5mZGRsMjNOT2xsaXA0bnp6eXNqamphcjN2ZTVFYTFxSnVxcXEreUlobStuUFVob3hxM2tOVmkybldZUHZWeG9vblR6dGh0bFl5S09OcmthcmxtZkUyUFpWVkVUMWVyNmJrNjVKMDFhbTZzZFp5NTdxcmgvd0FScDFSU2JVVHBLMm5saGxncDRWOGlKMFNTSzlHdm05Ym11YnN2SnlMN2xvTnBhWmxNbEV5bmliVHRaNVNSSXhFWWpOdHVQSDIyMjdiSHptdkZudG1qUGlMMlcxYWF4TW9hSzZYQ2laVlVGTjZZb1dWa1NKUEZ4VHNqTm5lYWpmWnU3ZGtSRVEyWHJzMGUxdjFzcnNQeHpUN0gzMXVNMEQ1S201U01yYWVMalVQY2pHdmRISkkxei9MalI2cHhSZjFqa0thd1hCc1gwM3hXMzRiaDlxaHQ5cnQwVFlvbzQyb2l1VkU3dmVxZk05eTkzT1h1cXFxcVE5NG1lRjR6anR4d3pVdXd4UjJ6SmErcG5ncUpxYjlISlVwQ2tiNDVsMjkzeHFxSno5OW5OUlY5TGR0MDZoOVhyN2lYUjR1Y3RuZFM1QmtWa3QxS3g3ZlM2S29ySTJlYTV1M3l1YXgwcW9xZXlvaDZIdzh0SnJKaU9pbEpxSEpib2x2MlhTVFRTVlQySXNzZEl5VjBjVUxWK2pWOHRaRjI5MWVtKy9GTnZONGdta05nelRSUzRhZ010c0xjaHhIeXFtQ3JZeEVra3BWa2F5V0Y3dnF4RWVzaUl2c3JPMjNKMi9jK2kvVW10MU82ZThjdXQycUhWRnl0U1NXYXNsY3U3bnVnWFpqbFg2dVdKWWxWVjdxcXFiaUFBQUFBQUFBQUFBWUoxSVl0MVY1VmRiZlI2QTVwYThkdERhRi81UmZVdmpaTE5VSzllS01jc01qMjdOUk83VmFucS9BanZTTzZROUxuVUl0WDFUWU5jNnZJYmpKNXRMazFSWHJWc3BrazNZdFUxdXlwUHZ1cU9rNXE5aWJvamVXNkYxZFRPUDVqbldnbVU0MXBwYm0zYTgzeWtpcDZXSmxURkUyV0o4c2ZtcWtram1zMjhybnQzNzlpUzlGUER6ekRLc1doWnJ0bDE2eCszMDlSSytqeHkzMUVjajRuS3V6cG5QWG5FeHp1S2ZLMXlxMUc3dVQyUFY2N2RHMlQ5TTFyVFd2UXJVQzl2aXNUMlByR1N1YXl0cG8xY2llYWo0MGEyV1BkVVI3RllucDdyeVRmYXBkQjlUWXVxM3B6cjF2U1IwMXp1RkhXWTNlMGliNkd6dWg0dWtZbjBSMGNySDdmUlhLM3Z0dVNqMGZhMFVuU3puK1dhTGExeHlXU25xNjF1OVcrTnpvNlNzalJXN3YyVGRZcFdLeFVrUkZSTm1yOHJsY2xaNm45Wk9oT24rSjFWN3RlZldUSnJtc0x2Z0xaYUsxbFZMVVRLbm9hOVkxVkltNys3bmJiSnZzaXJzaXg3MEFmbkRIMVdYMU1qcHBxYTZ5V2k1T3VVTXJGWTlreTFFTG50YzFlNktqL0FIUmZaVFhPdkxwOHVjTThIVXZwY3lXa3Y5Z2ZGVVhsS1JOcEhNaVZGanJXN2Z0eDdOUi85UkVkMjRMdm51cnZXaGttdStsbUxhUTZiV3FxYm1HWU1iUlpISFRNVnZyNWNQaDRWL2RtVk9ibDMyYkd2RlZYZDIxZTlNZlQ5WmVudlRxREhZUEpxYjdjT05WZTY5aWZyNmpic3hxcjM4dU5GVnJVL3dDWjJ5SzVUWGpJZW83cVJ3M3A1eE4xeXUwc2RkZjYyTnlXbXpzZnRKVXY5dWIvQUtzaWF2elBYK0NicjJKdzZLTkZNMnovQUZFck9ySFZ4c254TmZKTlVXYU9abkYxVExLMVdPcVVhdnl3dFlxc2pUNjlsVFpHdFYxMm5YYysxQXhIVERGYTNNODN2TU50dFZDM2Q4c2k3dWU3OW1OalU3dmU3MlJxZDFQbjFaN1htM2lENitNeW02MjJwdGVtK05TTmhWSExza2RNanVYa05jbloxUk4yVjZwOGpWVHVxTllqdHI4VExhajZmYkZTMHJFamhYS3FPTGd4Tm1veEtPclZHN2ZiMHAvWWJUMHNSUnc5T2VuYklrUkVXd1VyMTIrN21ici9BSHFwNXVwdUtPYnA1MUdaSWlLaVkxWHVUZjdwQzVVL3ZSRERQRERsa2RvYmtNVGxWV015dW9Wdjg2U2wzLzhBQ0ZnQUFBQUFBQUFBQUF3alg3cTF4ZnA5eSt3NG5rZUszU3NiZkltVkNWOFVqR1U4RWF5ckcvZFYzY3JtSWlPVkVUMmMzdjNOMWprWkt4c3NUMnZZOUVjMXpWM1JVWDJWRklpOFVoOWkvTWpDSTV2Sy9MUzNXb2RUZTNOS1h5VTg3YjY3Yy9JL25zYS9TNnkwZlQzMHJhZTVwbjFsdlZ5UnRtdEZCUEZRUnh1bWlrZlNvclhTZVk5cUlpY0VhcTdxdkp5ZHU2cW1vNlM2bTJMV0hUNjBhaTQ1SE5GUTNaajNOaG1Wdm13dVpJNWptUDRxcWNrYzFmcWRlNm9MMWFyRDA4YWgxdDVralpCTmoxYlJSODE3T25uaVdHRnFmaXNrak5qQmZES3RkWmF0R3NveUd1YkpIUlZ0OGVzRzdWWGsyR0NQbTlxSW02cHU3ajIrckZUNkdoMVZvNlRPdGo0K1NrYlQ1SlhZODJLR2E0VTBOVFExZE8yVG1zYmVibXNXUm5vZnNpbzVxTHY3S3B6TUY2UHVuSFJhcmt6cW54MVo2aTB4dnJFcjd6Vk9xRzBiV0lyblNOYXUwYUsxRTM1SzFYSnR1aW9UL3dDSDlUVmVmNjk2cWEzUHAzc3BheGFoakZlbXllWlhWbnhIRlB4YTJGTjl2YmtuM0tTNnJ0ZmJOb0xwalZYR1ZsTldYNjhza29iTmI1bW85czBxdDJmSkkxZmVKaUtpdStpcXJXOXVXNTg5TlByVHFqMHAzalQzcU92bUxSVFdUSVZsNHd1alRtbFBJaW81aTdwdERKSkNxeVJLaTkwL0RrMCtydUk1WllNNnhtMjVoaTl3anJiVmRxZHRUU3pzL2FZNzZLbjBjaTdvclY3b3FLaTkwTVc2c09xeXlkUEZnanR0cmlodWVaM2FKWFcrZ2V1OGRQSHVxZkVUN2QrQ0tpbzFxYks5VVZFVkVSeXBpZlQxMGg1WnFya2JkZStxYWVxdVZYY0h0cTZPeVZ2enpKN3NkVXM3SkhFaWJjWUVSRTIyUnlJbm9XNm9vbzRZMlF3eHRqamphaldNYW15TlJQWkVUNklkTDFoMWR4RFJMQnF6T3N5cWxaVFUrMFZQVHg3TE5XVkNvdkNHTkY5M0xzdjRJaUtxN0lpa000aGdlc3ZpQVp1M1B0UjYyb3g3VGkyMURtVWxQQXFvemlpK3FHbFJ5YlBrWGJaODdrMlJleUl1eU1UNkE0WGhXTGFlWTFSWWhobG1wN1hhYmZINWNGUENuWlB1NXlyM2M1VjdxNVZWVlZWVlZVd1h4QzhXcWNqNmJMbFcwc1N5T3NGeW83bzVyVTNYZ2psaGN2OEFKSjFWZndSVHNIUkhsTkpsUFRQaHo2ZVpyNXJYQkxhNmxpTHVzY2tNcm10YXY0ckg1YnY0T1E4M1dubE5KaW5UVG1rOVRNMWtseXBHV3FuWXE5NUpKNUdzVnFmZFVZcjNmd2FwMUx3N01XcWNkNmI2UzRWVVRvMXlHNzFsMFlqazJWV2VpQnEveitIM1Q4RlJmcVU0QUFBQUFBQUFBQURHZXFIcHZzdlViaE1WbmtyV1cyL1dsNzZpMFhCek9UWTN1UkVmRklpZDFqZnhidnQzUld0Y20rM0ZaMHhPOCtJbm9sWm9kUGFYVGkxWmRiN2V4S2EzMTFSeHEvTGhiMmExc2tjOGJ1S0o3Sksza2liSjJSRVE1V0RkSSt0ZXQycGRQcXgxYTNLRmxOU0t4WWJESExHOTByR3J5WkFyWWxXT0dEZGQxUkhLOTNxMzJWVmNXQnFScDNqZXFXQzNiVDNLS1pYMnU3VS9rUDhBTDJSOFRrVkhSeU03Ykk1am10Y25iYmRxYm9xZGlKY1UwcTYydWtxNVhDMGFVVzIyNXppZFhPczdJWGNYeEsvMlNSWUZsam1pa1ZxSWp1RGxZdXlicTdaRHk1RHBIMXBkV3QxdDl1MWpwcURCY1BwSjBuZlRSY1dNNUoyVjdZRWtmTEpKc3Fvbm11UnFicnNxYnJ2Ym1BWUpqbW1lRzJyQmNUby9oclhaNmRJSUdxdTduZDFWejNyOVh1Y3JuT1g2cTVWSTB5M3BvNmd1bm5WaTVhcDlMTWRMZHJQZDNQZFVXU1Y4YUxFeDd1Ym9IeHZjMUpJMGQ4am1PU1JxZHZ1NTNIeXkxOWZ2VXZRL21KbEdKMmpBc2Fxbk5iY1pZLzhBTm1UTVJkOW5vNldXZDZmMVdJalY3STRyRFJIUnJHOUE5T2FYQnNYWkpXTER5cWF5cVZyV3kxOVU1RTV5S2lyczNmaTFyVVZka2ExcUtxN0txeTZ6cHUxdzZnK3BKdW92VU5pS1dMQzdZdk9odGI3bFMxU1BwNDNidzBtMEVyOXVTcnpsY3FJanZXaWJidDJyYlZQVERHZFc5UDdwcDNrdE0zNEM0d2VYSEl4cWM2V1Z2ZU9XUDdPWTVFVlBvdXlvdlpWUW5IbzAwNTZsTkNiL0FIWFRiUE1QK0t3U3BubWxvYnJEZEtTUmxMTzFWL1NNaTgzelVpbVJFOVBEazEzRlZSTjNxWVhxVjA0ZFoyVzY0M2ZWNmkwNmprclZ1N3F1MXlUM1MxVHNoaGpmdFRJa1UweXRWR01helpITjkwM1ZOenUrL2l0L1pQOEFEWjJMVGxmRXMvcEF4djhBcEJSUHpZL0t0TCtXZjlRZjZGNXJmTy9WZnBQazVmSjZ2dDNPSjF6NkhkU0d1R29kcml3VEMzWFBGTEpiMnRwbkpkYU9CcjZxUnlyTTlXU3pOZHZza2JlNmJlanQ3cWRac0ZpOFVMRnJKUTQ1ajF0Z29MWmJZR1UxTFRRcGphTWlpWW16V3AvSlBkZTYvVTUrL2l0L1pQOEFEWlo5anNWeXlmU3kyNDVxcFJNcTdqZExCQlI1RkEveStNbFJKVHRiVXRYeXZSM2VyL2s5UDd2YllqQzNhRzlXM1NUbGwwcWRBSWFYTk1RdWt2bS9CVkxtUDl2azg2Rlh4dlNWcWR1Y0x0bklpYjdkbXArYnBvbjFkZFcrVldxVFhxbHBjS3crMlMrYXRIVHF4bjRQV0tCSHlQZEtxZWxIeXUyYWlydHYzYXQyWTlZTFJpdGh0K00yR2laU1cyMVUwZEhTUU05bzRvMm8xcmZ4N0luZjZuc0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBRC8yUT09XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9qcGVnO2Jhc2U2NCwvOWovNEFBUVNrWkpSZ0FCQVFFQUFRQUJBQUQvMndCREFBTUNBZ0lDQWdNQ0FnSURBd01EQkFZRUJBUUVCQWdHQmdVR0NRZ0tDZ2tJQ1FrS0RBOE1DZ3NPQ3drSkRSRU5EZzhRRUJFUUNnd1NFeElRRXc4UUVCRC93QUFMQ0FEY0FXY0JBUkVBLzhRQUhBQUJBUUVBQWdNQkFBQUFBQUFBQUFBQUFBZ0hCQVlEQlFrQy84UUFRaEFBQVFNREF3SUVCQUVJQlEwQUFBQUFBQUVDQXdRRkJnY1JFZ2doQ1JNaU1SUXlRVkZoRlJZak0wSlNjWUVYWXBHaHBoa2tORFZUVjJOeWtwYXh3dVQvMmdBSUFRRUFBRDhBcUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFIb2M1enJGTk5zWHJjeXpXOHcyeTAyOW5LYWVUZGU2cnMxcldwdXJuS3V5STFFVlZYMkpKclBFb3BiaFhWUDVnYURaSmtOc3BYZnBLdDlYNUwydC9lY3lPR1ZHL2Z1ODJEUURyQTB2MS9xbldDMC9GMlRKSTQxbFcwM0RqeWxhM3U1ME1qVjR5SWlkMVRzNUVSVjQ3SnVib1F6bEhpZVU5aHllNzJHZzBYVzQwOXRyNmlraXEweVB5L2lHUnlPYTJUaDhLN2p5UkVYYmRkdDl0MTl6MW4rVlJmL0FMaEhmOXovQVB5RmZhR2FvTHJQcFhZdFRGc1g1R1c5Tm5kOEQ4VDhSNVBsMUVrWDZ6Z3psdjVmTDVVMjMyNzdibWI2L2RhdWwyaE4wZGkwa0ZWa21TeHRSMHR1b0h0YTJtM1RkcVR5dTdNY3FiTHhSSE8yVkZWRVJVM3pleGVKSllvYmxTd2FtYU5aSGlkdnJGMmhybXpMVkp4L2ZWam9vbFZxZTY4T1MvWkZLNHhySmJCbU5pb3NueGU3VTl6dFZ4aVNhbHFxZC9Ka2pGKzMyVkYzUlVYdWlvcUtpS2g3TUF6TFhIcUkwMjZmN0xEYzg1dUV6NnV0NWZBMnlqWWtsVlZjZmRXdFZVUnJVM1RkemxSUHAzWFpDY0Y4U3VwZEN0M2g2ZDc4K3hJdmU0cmNsUnFOMzkrMU9yUDVjLzVsQzZEOVMybW5VSmJaNThOcktpbXVkQzFIMXRwcm1veXBnYXZibWlJcXRlemZ0eWFxL1RkR3FxSWQ0enJPOFQwMXhldHpMTnJ6RGE3VFFOUjAwOHU2N3FxN05hMXFicTl5cjJScUlxcXBKbGQ0bEZEY2Erb2kwNjBLeVRKS0tuWDFWRDZyeUhvMzk1V1J4VGNVL2k3K3cwUFF2cm0wdTFsdjhPR1Y5dnJzVXlPcGQ1ZFBSM0I3WHcxTW4remptVGIxKy9wYzFxcjdKdXZZbzhsWFZYeEJOUDhBQ3NybXduQU1TdVdlM2FsbGRCTXRETWtOTjVqZm1aSElqWHVrVk5sM1ZyT1AyY3YwL0dsZmlENEJtZVZ3NFZxRmlGeXdLNlZNcllJWDFzNlRVeVN1MlJySkhxeU4wU3FxcHNybWNmdTVDclFBQUFBQUFBQUFBQ2F1czNwNDFUNmhxTEc3TmhXUjJXZ3RGcG1scWEybHJwcFdPbm1keGF4N2VESElxc1o1bXlLcWZPN3VidGdtRFkxcHZpZHV3ekViWkZRMnkyUXRoaWpZMUVWNm9uZDcxVDVudVh1NXk5MVZWVlNBK3JDZ3RlSDliV0MzSFRHR0tteUd0bHRkWFh3VWFJbk90ZlZ1WW5OcmZaMGtYRGtuN1NMdXZ6S3EzNXFEa2pNTndQSTh1ZTVFU3lXbXJ1RzYvd0RDaGMvL0FOU09QREt0TkhaY0R6dlVlOVZrTk5EWDNTbnQ2MVZUS2pHdFNDSlpIS3JuTHNtNjFLYi9BTVB3TFZzMlNZN2tVYjVjZnYxdXViSTEyZTZqcW81a2IvRldLdXh3TlE4bWRoZUFaTm1MSTJ5T3NWbnJibTFqdlp5d3dQa1JGLzZTRnZEcTB3dGVvZVM1WHJubmNUYjFkcUd2YkRSUHEwU1RqV1NJc3MxU3FMMldUMU00cjlPVGw5OWxTNXRRZFA4QUZkVU1TdUdGWmxhNHE2MjNHSjBibXZhaXVpZHQ2WkkxWDVYdFh1MXlkMFVqUHc0OHh1OWd5L1B0QTdyWE9xWUxSSkxjS05GVmRvbnd6cFQxSEZGOWtjcm9WMitpb3EvVlNuc2E2bk5EOHV6eDJtRmt6YmxsRFpwcWRiYlUyeXNwSlBOaTM4eVBlYUpqZVNjWGVuZmRkbDIzTk9sbGlwNG56enlzampqYXIzdmU1RWExcUp1cXFxK3lJaG0rblBVaG94cTNrTlZpMm5XWVB2Vnhvb25UenRodGxZeUtPTnJrYXJsbWZFMlBaVlZFVDFlcjZiazY1SjAxYW02c2RaeTU3cXJoL3dBUnAxUlNiVVRwSzJubGhsZ3A0VjhpSjBTU0s5R3ZtOWJtdWJzdkp5TDdsb05wYVpsTWxFeW5pYlR0WjVTUkl4RVlqTnR1UEgyMjI3Ykh6bXZGbnRtalBpTDJXMWFheE1vYUs2WENpWlZVRk42WW9XVmtTSlBGeFRzak5uZWFqZlp1N2RrUkVRMlhyczBlMXYxc3JzUHh6VDdIMzF1TTBENUttNVNNcmFlTGpVUGNqR3ZkSEpJMXovTGpSNnB4UmYxamtLYXdYQnNYMDN4VzM0Ymg5cWh0OXJ0MFRZb280Mm9pdVZFN3ZlcWZNOXk5M09YdXFxcXFROTRtZUY0emp0eHd6VXV3eFIyekphK3BuZ3FKcWI5SEpVcENrYjQ1bDI5M3hxcUp6OTluTlJWOUxkdDA2aDlYcjdpWFI0dWN0bmRTNUJrVmt0MUt4N2ZTNktvckkyZWE1dTN5dWF4MHFvcWV5b2g2SHc4dEpySmlPaWxKcUhKYm9sdjJYU1RUU1ZUMklzc2RJeVYwY1VMVitqVjh0WkYyOTFlbSsvRk52TjRnbWtOZ3pUUlM0YWdNdHNMY2h4SHlxbUNyWXhFa2twVmtheVdGN3ZxeEVlc2lJdnNyTzIzSjIvYytpL1VtdDFPNmU4Y3V0MnFIVkZ5dFNTV2FzbGN1N251Z1haamxYNnVXSllsVlY3cXFxYmlBQUFBQUFBQUFBQVlKMUlZdDFWNVZkYmZSNkE1cGE4ZHREYUYvNVJmVXZqWkxOVUs5ZUtNY3NNajI3TlJPN1ZhbnEvQWp2U082UTlMblVJdFgxVFlOYzZ2SWJqSjV0TGsxUlhyVnNwa2szWXRVMXV5cFB2dXFPazVxOWlib2plVzZGMWRUT1A1am5XZ21VNDFwcGJtM2E4M3lraXA2V0psVEZFMldKOHNmbXFra2ptczI4cm50Mzc5aVM5RlBEenpES3NXaFpydGwxNngrMzA5Uksranh5MzFFY2o0bkt1enBuUFhuRXh6dUtmSzF5cTFHN3VUMlBWNjdkRzJUOU0xclRXdlFyVUM5dmlzVDJQckdTdWF5dHBvMWNpZWFqNDBhMldQZFVSN0ZZbnA3cnlUZmFwZEI5VFl1cTNwenIxdlNSMDF6dUZIV1kzZTBpYjZHenVoNHVrWW4wUjBjckg3ZlJYSzN2dHVTajBmYTBVblN6bitXYUxhMXh5V1NucTYxdTlXK056bzZTc2pSVzd2MlRkWXBXS3hVa1JGUk5tcjhybGNsWjZuOVpPaE9uK0oxVjd0ZWZXVEpybXNMdmdMWmFLMWxWTFVUS25vYTlZMVZJbTcrN25iYkp2c2lyc2l4NzBBZm5ESDFXWDFNanBwcWE2eVdpNU91VU1yRlk5a3kxRUxudGMxZTZLai9BSFJmWlRYT3ZMcDh1Y004SFV2cGN5V2t2OWdmRlVYbEtSTnBITWlWRmpyVzdmdHg3TlIvOVJFZDI0THZudXJ2V2hrbXUrbG1MYVE2YldxcWJtR1lNYlJaSEhUTVZ2cjVjUGg0Vi9kbVZPYmwzMmJHdkZWWGQyMWU5TWZUOVplbnZUcURIWVBKcWI3Y09OVmU2OWlmcjZqYnN4cXIzOHVORlZyVS93Q1oyeUs1VFhqSWVvN3FSdzNwNXhOMXl1MHNkZGY2Mk55V216c2Z0SlV2OXViL0FLc2lhdnpQWCtDYnIySnc2S05GTTJ6L0FGRXJPckhWeHNueE5mSk5VV2FPWm5GMVRMSzFXT3FVYXZ5d3RZcXNqVDY5bFRaR3RWMTJuWGMrMUF4SFRERmEzTTgzdk1OdHRWQzNkOHNpN3VlNzltTmpVN3ZlNzJScWQxUG4xWjdYbTNpRDYrTXltNjIycHRlbStOU05oVkhMc2tkTWp1WGtOY25aMVJOMlY2cDhqVlR1cU5ZanRyOFRMYWo2ZmJGUzByRWpoWEtxT0xneE5tb3hLT3JWRzdmYjBwL1liVDBzUlJ3OU9lbmJJa1JFV3dVcjEyKzdtYnIvQUhxcDV1cHVLT2JwNTFHWklpS2lZMVh1VGY3cEM1VS92UkREUEREbGtkb2JrTVRsVldNeXVvVnY4NlNsMy84QUNGZ0FBQUFBQUFBQUFBd2pYN3ExeGZwOXkrdzRua2VLM1NzYmZJbVZDVjhVakdVOEVheXJHL2RWM2NybUlpT1ZFVDJjM3YzTjFqa1pLeHNzVDJ2WTlFYzF6VjNSVVgyVkZJaThVaDlpL01qQ0k1dksvTFMzV29kVGUzTktYeVU4N2I2N2MvSS9uc2EvUzZ5MGZUMzByYWU1cG4xbHZWeVJ0bXRGQlBGUVJ4dW1pa2ZTb3JYU2VZOXFJaWNFYXE3cXZKeWR1NnFtbzZTNm0yTFdIVDYwYWk0NUhORlEzWmozTmhtVnZtd3VaSTVqbVA0cXFja2MxZnFkZTZvTDFhckQwOGFoMXQ1a2paQk5qMWJSUjgxN09ubmlXR0ZxZmlza2pOakJmREt0ZFphdEdzb3lHdWJKSFJWdDhlc0c3VlhrMkdDUG05cUltNnB1N2oyK3JGVDZHaDFWbzZUT3RqNCtTa2JUNUpYWTgyS0dhNFUwTlRRMWRPMlRtc2JlYm1zV1Jub2ZzaW81cUx2N0twek1GNlB1bkhSYXJrenFueDFaNmkweHZyRXI3elZPcUcwYldJcm5TTmF1MGFLMUUzNUsxWEp0dWlvVC93Q0g5VFZlZjY5NnFhM1BwM3NwYXhhaGpGZW15ZVpYVm54SEZQeGEyRk45dmJrbjNLUzZydGZiTm9McGpWWEdWbE5XWDY4c2tvYk5iNW1vOXMwcXQyZkpJMWZlSmlLaXUraXFyVzl1VzU4OU5QclRxajBwM2pUM3FPdm1MUlRXVElWbDR3dWpUbWxQSWlvNWk3cHRESkpDcXlSS2k5MC9EazArcnVJNVpZTTZ4bTI1aGk5d2pyYlZkcWR0VFN6cy9hWTc2S24wY2k3b3JWN29xS2k5ME1XNnNPcXl5ZFBGZ2p0dHJpaHVlWjNhSlhXK2dldThkUEh1cWZFVDdkK0NLaW8xcWJLOVVWRVZFUnlwaWZUMTBoNVpxcmtiZGUrcWFlcXVWWGNIdHE2T3lWdnp6SjdzZFVzN0pIRWliY1lFUkUyMlJ5SW5vVzZvb280WTJRd3h0ampqYWpXTWFteU5SUFpFVDZJZEwxaDFkeERSTEJxek9zeXFsWlRVKzBWUFR4N0xOV1ZDb3ZDR05GOTNMc3Y0SWlLcTdJaWtNNGhnZXN2aUFadTNQdFI2Mm94N1RpMjFEbVVsUEFxb3ppaStxR2xSeWJQa1hiWjg3azJSZXlJdXlNVDZBNFhoV0xhZVkxUlloaGxtcDdYYWJmSDVjRlBDblpQdTV5cjNjNVY3cTVWVlZWVlZWVXdYeEM4V3FjajZiTGxXMHNTeU9zRnlvN281clUzWGdqbGhjdjhBSkoxVmZ3UlRzSFJIbE5KbFBUUGh6NmVacjVyWEJMYTZsaUx1c2NrTXJtdGF2NHJINWJ2NE9RODNXbmxOSmluVFRtazlUTTFrbHlwR1dxbllxOTVKSjVHc1ZxZmRVWXIzZndhcDFMdzdNV3FjZDZiNlM0VlVUbzF5RzcxbDBZamsyVldlaUJxL3orSDNUOEZSZnFVNEFBQUFBQUFBQUFER2VxSHB2c3ZVYmhNVm5rcldXMi9XbDc2aTBYQnpPVFkzdVJFZkZJaWQxamZ4YnZ0M1JXdGNtKzNGWjB4TzgrSW5vbFpvZFBhWFRpMVpkYjdleEthMzExUnhxL0xoYjJhMXNrYzhidUtKN0pLM2tpYkoyUkVRNVdEZEkrdGV0MnBkUHF4MWEzS0ZsTlNLeFliREhMRzkwckdyeVpBcllsV09HRGRkMVJISzkzcTMyVlZjV0JxUnAzamVxV0MzYlQzS0taWDJ1N1Uva1A4QUwyUjhUa1ZIUnlNN2JJNWptdGNuYmJkcWJvcWRpSmNVMHE2MnVrcTVYQzBhVVcyMjV6aWRYT3M3SVhjWHhLLzJTUllGbGptaWtWcUlqdURsWXV5YnE3WkR5NURwSDFwZFd0MXQ5dTFqcHFEQmNQcEowbmZUUmNXTTVKMlY3WUVrZkxKSnNxb25tdVJxYnJzcWJydmJtQVlKam1tZUcyckJjVG8vaHJYWjZkSUlHcXU3bmQxVnozcjlYdWNybk9YNnE1VkkweTNwbzZndW5uVmk1YXA5TE1kTGRyUGQzUGRVV1NWOGFMRXg3dWJvSHh2YzFKSTBkOGptT1NScWR2dTUzSHl5MTlmdlV2US9tSmxHSjJqQXNhcW5OYmNaWS84QU5tVE1SZDlubzZXV2Q2ZjFXSWpWN0k0ckRSSFJyRzlBOU9hWEJzWFpKV0xEeXFheXFWcld5MTlVNUU1eUtpcnMzZmkxclVWZGthMXFLcTdLcXk2enB1MXc2ZytwSnVvdlVOaUtXTEM3WXZPaHRiN2xTMVNQcDQzYncwbTBFcjl1U3J6bGNxSWp2V2liYnQycmJWUFRER2RXOVA3cHAza3RNMzRDNHdlWEhJeHFjNldWdmVPV1A3T1k1RVZQb3V5b3ZaVlFuSG8wMDU2bE5DYi9BSFhUYlBNUCtLd1Nwbm1sb2JyRGRLU1JsTE8xVi9TTWk4M3pVaW1SRTlQRGsxM0ZWUk4zcVlYcVYwNGRaMlc2NDNmVjZpMDZqa3JWdTdxdTF5VDNTMVRzaGhqZnRUSWtVMHl0VkdNYXpaSE45MDNWTnp1Ky9pdC9aUDhBRFoyTFRsZkVzL3BBeHY4QXBCUlB6WS9LdEwrV2Y5UWY2RjVyZk8vVmZwUGs1Zko2dnQzT0oxejZIZFNHdUdvZHJpd1RDM1hQRkxKYjJ0cG5KZGFPQnI2cVJ5ck05V1N6TmR2c2tiZTZiZWp0N3FkWnNGaThVTEZySlE0NWoxdGdvTFpiWUdVMUxUUXBqYU1paVlteldwL0pQZGU2L1U1Ky9pdC9aUDhBRFpaOWpzVnl5ZlN5MjQ1cXBSTXE3amRMQkJSNUZBL3krTWxSSlR0YlV0WHl2UjNlci9rOVA3dmJZakMzYUc5VzNTVGxsMHFkQUlhWE5NUXVrdm0vQlZMbVA5dms4NkZYeHZTVnFkdWNMdG5JaWI3ZG1wK2Jwb24xZGRXK1ZXcVRYcWxwY0t3KzJTK2F0SFRxeG40UFdLQkh5UGRLcWVsSHl1MmFpcnR2M2F0Mlk5WUxSaXRodCtNMkdpWlNXMjFVMGRIU1FNOW80bzJvMXJmeDdJbmY2bnNBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUQvMlE9PVwiIiwiaW1wb3J0IE5hdmJhclR3byBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXQvTmF2YmFyVHdvXCJcblxuY29uc3QgQ3VzdG9tNDA0ID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuPE5hdmJhclR3by8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXJyb3ItYXJlYVwiPlxuIDxkaXYgY2xhc3M9XCJtYWluYm94XCI+XG4gICAgPGRpdiBjbGFzcz1cImVyclwiPjQ8L2Rpdj5cbiAgICA8aSBzdHlsZT17e3Bvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgZm9udFNpemU6IFwiOC41cmVtXCIsXG4gICAgbGVmdDogXCI0MiVcIixcbiAgICB0b3A6IFwiMTUlXCIsXG4gICAgY29sb3I6IFwiI2ZmZmZmZlwiLH19IGNsYXNzPVwiZmFyIGZhLXF1ZXN0aW9uLWNpcmNsZSBmYS1zcGluXCI+PC9pPlxuICAgIDxkaXYgY2xhc3M9XCJlcnIyXCI+NDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJtc2dcIj5NYXliZSB0aGlzIHBhZ2UgbW92ZWQ/IEdvdCBkZWxldGVkPyBJcyBoaWRpbmcgb3V0IGluIHF1YXJhbnRpbmU/IE5ldmVyIGV4aXN0ZWQgaW4gdGhlIGZpcnN0IHBsYWNlPzxici8+PHNwYW4+TGV0J3MgZ28gPGEgaHJlZj1cIi9cIj5ob21lPC9hPiBhbmQgdHJ5IGZyb20gdGhlcmUuPC9zcGFuPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICBcbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEN1c3RvbTQwNCJdLCJzb3VyY2VSb290IjoiIn0=