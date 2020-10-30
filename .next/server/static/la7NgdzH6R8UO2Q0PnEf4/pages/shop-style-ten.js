module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		43: 0
/******/ 	};
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
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 41);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+yQG":
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ "/T1H":
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ "0dsk":
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ "3bJG":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/cp-img7-8bf8408a538f123cd52fc5963ab7cc8d.jpg";

/***/ }),

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("nSZH");


/***/ }),

/***/ "5F07":
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ "5xpA":
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ "7KCV":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("C+bE");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "7R5c":
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ "7smD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_actions_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("kNBj");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("oAEb");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_4__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class QuickView extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      qty: 1,
      max: 10,
      min: 1
    });

    _defineProperty(this, "handleAddToCartFromView", () => {
      this.props.addQuantityWithNumber(this.props.modalData.id, this.state.qty);
      react_toastify__WEBPACK_IMPORTED_MODULE_4__["toast"].success('Added to the cart', {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      });
      setTimeout(() => {
        this.props.closeModal();
      }, 5000);
    });

    _defineProperty(this, "IncrementItem", () => {
      this.setState(prevState => {
        if (prevState.qty < 10) {
          return {
            qty: prevState.qty + 1
          };
        } else {
          return null;
        }
      });
    });

    _defineProperty(this, "DecreaseItem", () => {
      this.setState(prevState => {
        if (prevState.qty > 1) {
          return {
            qty: prevState.qty - 1
          };
        } else {
          return null;
        }
      });
    });
  }

  render() {
    const {
      closeModal,
      modalData
    } = this.props;
    return __jsx("div", {
      className: "modal fade productQuickView show",
      style: {
        paddingRight: '16px',
        display: 'block'
      }
    }, __jsx(react_toastify__WEBPACK_IMPORTED_MODULE_4__["ToastContainer"], null), __jsx("div", {
      className: "modal-dialog modal-dialog-centered",
      role: "document"
    }, __jsx("div", {
      className: "modal-content"
    }, __jsx("button", {
      type: "button",
      onClick: closeModal,
      className: "close",
      "data-dismiss": "modal",
      "aria-label": "Close"
    }, __jsx("span", {
      "aria-hidden": "true"
    }, __jsx("i", {
      className: "fas fa-times"
    }))), __jsx("div", {
      className: "row align-items-center"
    }, __jsx("div", {
      className: "col-lg-6 col-md-6"
    }, __jsx("div", {
      className: "productQuickView-image"
    }, __jsx("img", {
      src: modalData.image,
      alt: "image"
    }))), __jsx("div", {
      className: "col-lg-6 col-md-6"
    }, __jsx("div", {
      className: "product-content"
    }, __jsx("h3", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "#"
    }, __jsx("a", null, modalData.title))), __jsx("div", {
      className: "price"
    }, __jsx("span", {
      className: "new-price"
    }, "$", modalData.price)), __jsx("div", {
      className: "product-review"
    }, __jsx("div", {
      className: "rating"
    }, __jsx("i", {
      className: "fas fa-star"
    }), __jsx("i", {
      className: "fas fa-star"
    }), __jsx("i", {
      className: "fas fa-star"
    }), __jsx("i", {
      className: "fas fa-star"
    }), __jsx("i", {
      className: "fas fa-star-half-alt"
    })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "#"
    }, __jsx("a", {
      className: "rating-count"
    }, "3 reviews"))), __jsx("ul", {
      className: "product-info"
    }, __jsx("li", null, __jsx("span", null, "Vendor:"), " ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "#"
    }, __jsx("a", null, "Lereve"))), __jsx("li", null, __jsx("span", null, "Availability:"), " ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "#"
    }, __jsx("a", null, "In stock (7 items)"))), __jsx("li", null, __jsx("span", null, "Product Type:"), " ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "#"
    }, __jsx("a", null, "T-Shirt")))), __jsx("div", {
      className: "product-color-switch"
    }, __jsx("h4", null, "Color:"), __jsx("ul", null, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "#"
    }, __jsx("a", {
      title: "Black",
      className: "color-black"
    }))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "#"
    }, __jsx("a", {
      title: "White",
      className: "color-white"
    }))), __jsx("li", {
      className: "active"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "#"
    }, __jsx("a", {
      title: "Green",
      className: "color-green"
    }))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "#"
    }, __jsx("a", {
      title: "Yellow Green",
      className: "color-yellowgreen"
    }))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "#"
    }, __jsx("a", {
      title: "Teal",
      className: "color-teal"
    }))))), __jsx("div", {
      className: "product-size-wrapper"
    }, __jsx("h4", null, "Size:"), __jsx("ul", null, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "#"
    }, __jsx("a", null, "XS"))), __jsx("li", {
      className: "active"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "#"
    }, __jsx("a", null, "S"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "#"
    }, __jsx("a", null, "M"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "#"
    }, __jsx("a", null, "XL"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "#"
    }, __jsx("a", null, "XXL"))))), __jsx("div", {
      className: "product-add-to-cart"
    }, __jsx("div", {
      className: "input-counter"
    }, __jsx("span", {
      className: "minus-btn",
      onClick: this.DecreaseItem
    }, __jsx("i", {
      className: "fas fa-minus"
    })), __jsx("input", {
      type: "text",
      value: this.state.qty,
      min: this.state.min,
      max: this.state.max,
      onChange: e => this.setState({
        qty: e.target.value
      })
    }), __jsx("span", {
      className: "plus-btn",
      onClick: this.IncrementItem
    }, __jsx("i", {
      className: "fas fa-plus"
    }))), __jsx("button", {
      type: "submit",
      className: "btn btn-primary",
      onClick: this.handleAddToCartFromView
    }, __jsx("i", {
      className: "fas fa-cart-plus"
    }), " Add to Cart")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "#"
    }, __jsx("a", {
      className: "view-full-info"
    }, "View full info"))))))));
  }

}

const mapDispatchToProps = dispatch => {
  return {
    addQuantityWithNumber: (id, qty) => {
      dispatch(Object(_store_actions_actions__WEBPACK_IMPORTED_MODULE_3__[/* addQuantityWithNumber */ "b"])(id, qty));
    }
  };
};

/* harmony default export */ __webpack_exports__["a"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(null, mapDispatchToProps)(QuickView));

/***/ }),

/***/ "9TMB":
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAAyAAD/4QMdaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkVGQjE0MzU3QzU3QzExRTlBMjJCOTg0OTdFOEEyRTQ1IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkVGQjE0MzU2QzU3QzExRTlBMjJCOTg0OTdFOEEyRTQ1IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IFdpbmRvd3MiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0iMzUxNjVENTMwMzZCQ0JCQjNFQUM5NDQ3RTBGNjc3RjMiIHN0UmVmOmRvY3VtZW50SUQ9IjM1MTY1RDUzMDM2QkNCQkIzRUFDOTQ0N0UwRjY3N0YzIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQACAYGBgYGCAYGCAwIBwgMDgoICAoOEA0NDg0NEBEMDg0NDgwRDxITFBMSDxgYGhoYGCMiIiIjJycnJycnJycnJwEJCAgJCgkLCQkLDgsNCw4RDg4ODhETDQ0ODQ0TGBEPDw8PERgWFxQUFBcWGhoYGBoaISEgISEnJycnJycnJycn/8AAEQgAQQBBAwEiAAIRAQMRAf/EAIgAAAEFAQEBAAAAAAAAAAAAAAACAwQFBgcIAQEBAQEBAQAAAAAAAAAAAAAAAAEDBAIQAAIBAwMCAwUFBgcAAAAAAAECAwARBCESBTEGQVETYXGBIgeRoTIzFLHhQlJyFZJzg7N0NVURAAICAgEEAwEAAAAAAAAAAAABEQIhA0ExURIEgbEiMv/aAAwDAQACEQMRAD8A1UUBANhpUiLFHW1TI4b6W9lSVgBIA615KQvSijjM08iwxL+KSRgij4tYVk5vqP27HJNHhwZGW8L7TsCIrAG29C7aj4VQfUHuaLPzBgxErg4bsi7xeOWYaGXbbULqq/bWMkmLY7T7pLIx9GYIqbmBBPz2+VQDVEHVuO+pPamY2zKaXjnuVvkJdLjzePdt+IrU474ufCMnBnjyYG0WWF1ddOuqk615wyn2M4LA7yHm9Pob6i5/i661f/Tbuhe3+4o8bKkYcbyB/TzqPwo7G0ctvY3X2UgHc3xx4jXwpr9MDY2/fVu8O1rHQjrTbQ6i3hUBWfpR/LRVn6XsooARB5e+n0RddLjxHn7KQgJ93hUhbCwqg5InZQ5PvfkeOzJCnHY9piQAHK5A9RIx1Hy9LjyrUy/TLtyHEEBmmljLbyr7b7vA3AvpVtzs8XCZa81+mkyGniXGljhtdjG94jr/AJjCoWX3yW4R+VxuNnbbIIDEy7ZA56XBvofOsL2sm844OvTStq1aUvMnNe4+xsPAhlyMWVvTjDFS+pt5Hzrm2EzrmwOqrI6yqVRvwsQw0a1tK6rzXcHNctPHxsnGQxNMAbI/qGxF7sQ2lh1uKw0PCNL3F/bcUXaSVI0C+Bc7bD3GrqtZSruX1Q36qt1dF4puHiD08u51SSVdsjKC6+TW1t8aCKdKhAE67QF18baXpO0k6Vqcgiw8qKXY0UA2vh91Oi3idabC9D0tTgGteoBG5STHiwmmyU3xIRuFr6H5elYzkO4+Ji7bnmNsNfUSSOFAWkVQ+jWHVvG1b2aCHJgkxsgXilUpIL20Pl5WrAnik4tpsKHGiz5V3KjNtX1onO7c3qAqWQ9aw21Up98HZ6uyE6dnKb6FJH3zjZmDJbFjjyfTd0YgI5jUGzuo6Hb1qB9JcTD5TuTkM7Nj9XIxokyMViTZHMhUta9jofGqvn4l4rGyIDFFBl5b6wxkO4XxLsv3CnvpzzeF21zZyOSb0sXMiOPJNqRGbq6O1tdt1saa1VOe+Mj2LWt+U58eVjqd3OvtoFfIJ8XKj9bEnjyIj0kidXXUX6oTS1sPjWxxCbe+inKKQCOvSpaYjAXlO2+u0daew4UjjWR9ZHFxfwHhalyHUG+mot5GqBkxJLDLAigHQBm110bWstyvFpkboMuBlN9yMCVKki11dSPuNauIEKWPV2LH49Pur67sAbGstmpXacw1ya6tzpKiU+DhPJ9vxLkzmJS8qXLbiWP2msxi8NyvLzCDBxZJNbX22Ue1mOgFehW4zDeSXIyIUZm/GxHUeR86bmgVUEUaiNPBFG0Ae4V5rqsv6tJpf2KtfmsfRle1uCk7dx44Maa2U3zZRT8tmP8ADY9QK2EeYQF/UqFuQu5OhJ9lQ4oFjbyBKgfaadeMSTKw0VYt4v0DO2jH3bL1slGEc7bblk/14P5h9tFZ7+8ds/8AsR/4qKfIybI/kj3LTc3U/wBQooqkFL+WvuH7KQ9FFAQ5/wAr/VT9tM5H4h76KKAjt1X+taicx/1Gd/wT/tzUUUYRjqKKKhT/2Q=="

/***/ }),

/***/ "Am+y":
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD//gA+Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBkZWZhdWx0IHF1YWxpdHkK/9sAQwAIBgYHBgUIBwcHCQkICgwUDQwLCwwZEhMPFB0aHx4dGhwcICQuJyAiLCMcHCg3KSwwMTQ0NB8nOT04MjwuMzQy/9sAQwEJCQkMCwwYDQ0YMiEcITIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIy/8AAEQgBrgFoAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A9MooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAoorNudRm+0m2s4RLIv3iegoA0qKzrbUZTci2u4fKkb7pHQ1YvbxbOIMVLuxwiDuaALNFZR1G8tyr3dqFhY4yvUfrWhNcRw25nY/IBnI70AS0Vkf2lfbPtH2MfZ+vXnH+fatOCZLiFZYzlWGaAJKKKKACiiigAoorOXUjJqotYwpjGQzd8gdqANGiq19eLZQhyu5mOFX1NUW1G/gAluLNRD3x1H60Aa9FMikWWJZEOVYZFZp1K6nkf7FbCSNDgs3egDVoqrY3q3kbZXZIhw6HtVqgAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKp21qtk1xNJKp8xtxYjGP85q5UG63voGUMJIycNg0AZ9xKl7qdotud/lNudh0A47/h+tFxNGNaDTHEcEeefX/JFR3lsNLlhubZmVC21lJyD/AJ5p5t1m8Qv5gyoQPg9DwBQBL/adjeg28m9VfjLDA/OmaqgWC0tVzsZwv4Dj+tWdTt45bCUlRuRSyn0xWdLIz22mTOej4JPsR/hQBu7Rt24G3GMVm6MSiXEGciOQgf5/CtOsvSfmnvXHRpf6n/GgDUrNtbqePUZLS5fdnmNsAZH4f54rSrH13YBCykifPy464oAnhuprvUnWJ9ttFw3A+Y/5/lWjVDRxENPTy+SSd/8AvVfoAp6hctBAEj5mlO1AOv1qjFbLaazaRDk+USx9T82ajOoRLqss1wrnyyUjVQDj36/5zTZNThfVYroLJsRNpGBnv7+9AGtc2f2m5glL4WI524zn/OKi1C8t0tZo/MVpGUqEBycnirEd3DJ5QDYaRdyqeuKrXelQTB5EBSY5YMGPWgBgD2ugENw4jP4ZP/16saZGI9OhAHVdx/GqCzPdeH5S53MvBPrgg1pWB3afAR/cAoApr+58QMB0ljyR7/5FalZb/N4ijx/DFz+v+NalABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAVipK2kXMyyRO1vI25WXt/n+lbVFAGMZJNXuIgsTJbRtuZm71Yv0lguYr2FC5UbZFHcVo0UAYs+oPqEX2a1hk3PwzN0Aq3dWG/TFt4+WjAK+5H+TV+igDH/tiTyvJ+zyfasYxjv6+tXdNtTaWao332O5vrVuigAJwM1lWkMlzqMl5PGyKvyxq4x/n/AOvWrRQBlW0MthqbxrG7W0vIIUkKa1aKKACs6aKQ67BIEYoIyC2OB97vWjRQBm6nDKssN5CpZoj8yjuP85/OoZNYM8ZitreQzMMcjpWxRQBTs7IQ6d9nk6sDvx71RgvX0tDa3MLsFJ2Mo4IraooAzdOilknmvZ02NJwqnsP84rSoooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKgmeXz4442RcqzEspPQj3HrTEvMxgmNnfBLCMZAAJGefXFAFqioWuolUsSdoTzN3Yj2/z3pWuEXfnJCAcgZznoB/nvQBLRUH2lRHK7I6mNdzKcZx+ftR9p+Vf3Mm5vurgZI9evH40AT0VAbldqFVdy+cKBzx16+lFo5kt953cu/3uoG48UAT0VUgucZV1kx5rrvPTO44H8hUpuECyEhso20r3J7Y+uaAJqKiuJfIi8zKgblBLdACwB/nUbXcbyRxwTRMzsQcHdj5Sc4B9QKALNFV4WuGlkDvEVjbadqEE/KD6+9RQ3rvaBmVfPOAFHQluR+H+BoAu0VXhuHk+z5C/vIS5x6/L/iamkcRRPI3RQWP4UAOoqGP7QSGk8sKeqgHI/Hv+VM8y4k3vEI9ikqFYHLY4PPbn60AWaKqLdlrmMADyXjVge4LZx/KnW9w008oIAjABQjqRkjP6UAWaKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAIZbaOaVHkVXCKRtZc9cc/p+tI8Db90MgjJXaflyMDpj8zU9FAFdrRW8gA4WLjHqOOPzA/KkFkv2Z4WbcGOckemMflgVZooAqrZgQTR/ulMilcxx7QOD789afc2y3BRiELJnG9Nw59qnooAri2KLH5bqjoCOE+XB6jH5U+CIwxbC+85YlsYzkk/1qWigCqtq4O1psx+YZNu3nOcgZz0zQI/NvjLtYKgxyCNzc/yyfzq1RQAyWPzUC5xhlb8iD/SiSPe8TZxsbd9eCP60+igBkcex5Wzne276cAf0qOK1jjEJI3PEgQN06DHT8/zqeigCsLaSNYPLlUGKPy8smc9PcelSeW7rtldWUqVYBcA5/HjjP51LRQBDHHMhAaYMg6DZyfqc/wBKa1vICwjm2I5JI25Iz1we361YooAg+yxksDyhRU29MbSSOfx/SnJCI5Sy8LsVAvpjP+NS0UAFFFFAH//Z"

/***/ }),

/***/ "AroE":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "Av0K":
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD//gA+Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBkZWZhdWx0IHF1YWxpdHkK/9sAQwAIBgYHBgUIBwcHCQkICgwUDQwLCwwZEhMPFB0aHx4dGhwcICQuJyAiLCMcHCg3KSwwMTQ0NB8nOT04MjwuMzQy/9sAQwEJCQkMCwwYDQ0YMiEcITIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIy/8AAEQgA3AFoAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A9MooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigArLmu7u4vHt7Laoj+87etalVY4YdPSeYu2123MW5x+X1oAqwXd3BeJbXoVvM+461Yv7xrZUSJd88hwi1TaddT1K3EGfLgO9mPGen+FJc3McWtGSXJEUWFA6kn0/OgB0k+p2QE1wY5Ys/Mq9V/Sr893HBZ/aeqkAqPXPSqR1VHPl3do8cb8ZbkH9KTVVXbZ26gCNpBgDpjp/WgBvnat5X2nEezG7ysc4/n+taVrcLdWyTLxnqPQ1NWXo3yG6hHRJeP5f0oA1KKKyYJpLPVHtp5GaKTmNnbOP89KANaisu1llvtRkmEji2i+VQCQGP+efyrUoAzbq8uHu/slmq+YBl3Paomur+wdWu9kkLHBZR0q7b2fkXM85fcZTnGMbar61MgszBnMkhG1R160AS396baONYVDyynCD+tVXbV4EMztG6ryUAHT8qtCwJntZmk/1KBdmOpx61YuZ47eBpJCAAOh7+1ADba6S5tVnHygjkHt61nrc6hfMz2myOFTgFhy1R24aDw9Mx435I+hwK0dOQJp0AA6oD+fNADNPvHuBJFMuyeM4YDv71drL/wBX4i4/5axc/wCfwrUoAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACq8M8F9E20bkB2sHWrFY5S6026laCAzQSndtXqDQAmp28dm8F1bqI2D4IX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"

/***/ }),

/***/ "BzbJ":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "C+bE":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "Cc5c":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "ClQ+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("/T1H");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const OwlCarousel = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(() => Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, "q4RA", 7)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("q4RA")],
    modules: ['react-owl-carousel3']
  }
});
const options = {
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

class NewsThree extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      display: false,
      panel: true
    });
  }

  componentDidMount() {
    this.setState({
      display: true
    });
  }

  render() {
    return __jsx("section", {
      className: "news-area ptb-60"
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "section-title"
    }, __jsx("h2", null, __jsx("span", {
      className: "dot"
    }), " Novine News")), this.state.display ? __jsx(OwlCarousel, _extends({
      className: "news-slides owl-carousel owl-theme"
    }, options), __jsx("div", {
      className: "single-blog-post-box"
    }, __jsx("div", {
      className: "blog-image"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/blog-details"
    }, __jsx("a", null, __jsx("img", {
      src: __webpack_require__("yfoo"),
      alt: "image"
    })))), __jsx("div", {
      className: "post-content"
    }, __jsx("ul", {
      className: "post-meta"
    }, __jsx("li", null, "By: ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "Admin"))), __jsx("li", null, "20 February, 2020")), __jsx("h3", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/blog-details"
    }, __jsx("a", null, "Evolving Ecommerce: 14 Trends Driving Online Retail In 2020"))))), __jsx("div", {
      className: "single-blog-post-box"
    }, __jsx("div", {
      className: "blog-image"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/blog-details"
    }, __jsx("a", null, __jsx("img", {
      src: __webpack_require__("epww"),
      alt: "image"
    })))), __jsx("div", {
      className: "post-content"
    }, __jsx("ul", {
      className: "post-meta"
    }, __jsx("li", null, "By: ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "Admin"))), __jsx("li", null, "21 February, 2020")), __jsx("h3", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/blog-details"
    }, __jsx("a", null, "The Best Ecommerce Platform for Growing Sales"))))), __jsx("div", {
      className: "single-blog-post-box"
    }, __jsx("div", {
      className: "blog-image"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/blog-details"
    }, __jsx("a", null, __jsx("img", {
      src: __webpack_require__("tB13"),
      alt: "image"
    })))), __jsx("div", {
      className: "post-content"
    }, __jsx("ul", {
      className: "post-meta"
    }, __jsx("li", null, "By: ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "Admin"))), __jsx("li", null, "22 February, 2020")), __jsx("h3", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/blog-details"
    }, __jsx("a", null, "A Green Brand Finding Roots in Sustainability"))))), __jsx("div", {
      className: "single-blog-post-box"
    }, __jsx("div", {
      className: "blog-image"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/blog-details"
    }, __jsx("a", null, __jsx("img", {
      src: __webpack_require__("JNWX"),
      alt: "image"
    })))), __jsx("div", {
      className: "post-content"
    }, __jsx("ul", {
      className: "post-meta"
    }, __jsx("li", null, "By: ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "Admin"))), __jsx("li", null, "23 February, 2020")), __jsx("h3", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/blog-details"
    }, __jsx("a", null, "Don\u2019t Miss These Top Ecommerce Conferences in 2020"))))), __jsx("div", {
      className: "single-blog-post-box"
    }, __jsx("div", {
      className: "blog-image"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/blog-details"
    }, __jsx("a", null, __jsx("img", {
      src: __webpack_require__("S306"),
      alt: "image"
    })))), __jsx("div", {
      className: "post-content"
    }, __jsx("ul", {
      className: "post-meta"
    }, __jsx("li", null, "By: ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "Admin"))), __jsx("li", null, "24 February, 2020")), __jsx("h3", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/blog-details"
    }, __jsx("a", null, "The Most Popular New top Business eCommerce Apps")))))) : ''));
  }

}

/* harmony default export */ __webpack_exports__["a"] = (NewsThree);

/***/ }),

/***/ "Ct29":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("/T1H");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const OwlCarousel = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(() => Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, "q4RA", 7)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("q4RA")],
    modules: ['react-owl-carousel3']
  }
});
const options = {
  loop: true,
  nav: false,
  dots: false,
  autoplayHoverPause: true,
  autoplay: true,
  animateOut: 'slideOutDown',
  animateIn: 'flipInX',
  items: 1,
  navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"]
};

class TopPanel extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      display: false,
      panel: true
    });
  }

  componentDidMount() {
    this.setState({
      display: true
    });
  }

  render() {
    let {
      panel
    } = this.state;
    return __jsx("div", {
      className: `top-panel ${panel ? '' : 'hide'}`
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "panel-content"
    }, this.state.display ? __jsx(OwlCarousel, _extends({
      className: "top-panel-slides owl-carousel owl-theme"
    }, options), __jsx("div", {
      className: "single-item-box"
    }, __jsx("p", null, __jsx("strong", null, "Enjoy an extra 20% off"), " select sales styles ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "Read More")))), __jsx("div", {
      className: "single-item-box"
    }, __jsx("p", null, __jsx("strong", null, "Enjoy an extra 20% off"), " select sales styles ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "Read More")))), __jsx("div", {
      className: "single-item-box"
    }, __jsx("p", null, __jsx("strong", null, "Enjoy an extra 20% off"), " select sales styles ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "Read More"))))) : '', __jsx("i", {
      onClick: () => this.setState({
        panel: false
      }),
      className: "fas fa-times panel-close-btn"
    }))));
  }

}

/* unused harmony default export */ var _unused_webpack_default_export = (TopPanel);

/***/ }),

/***/ "EsL0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("oAEb");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_3__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const AddToCart = ({
  id
}) => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();

  const handleAddToCart = id => {
    dispatch({
      type: 'ADD_TO_CART',
      id
    });
    react_toastify__WEBPACK_IMPORTED_MODULE_3__["toast"].success('Added to the cart', {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true
    });
  };

  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "#"
  }, __jsx("a", {
    className: "btn btn-light",
    onClick: e => {
      e.preventDefault();
      handleAddToCart(id);
    }
  }, "Add to Cart"));
};

/* harmony default export */ __webpack_exports__["a"] = (AddToCart);

/***/ }),

/***/ "HDRl":
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ "HLnt":
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ "J2dG":
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ "JNWX":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/news-img4-8bf8408a538f123cd52fc5963ab7cc8d.jpg";

/***/ }),

/***/ "JoBn":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "K2d6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ADD_TO_CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return REMOVE_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return SUB_QUANTITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_QUANTITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ADD_SHIPPING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ADD_QUANTITY_WITH_NUMBER; });
/* unused harmony export ORDER_FORM */
/* unused harmony export CHECKOUT_CHARGE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return RESET_CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ADD_TO_COMPARE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return REMOVE_ITEM_FROM_COMPARE; });
//Types should be in const to avoid typos and duplication since it's a string and could be easily miss spelled
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_ITEM = 'REMOVE_ITEM';
const SUB_QUANTITY = 'SUB_QUANTITY';
const ADD_QUANTITY = 'ADD_QUANTITY';
const ADD_SHIPPING = 'ADD_SHIPPING';
const ADD_QUANTITY_WITH_NUMBER = 'ADD_QUANTITY_WITH_NUMBER';
const ORDER_FORM = 'ORDER_FORM';
const CHECKOUT_CHARGE = 'CHECKOUT_CHARGE';
const RESET_CART = 'RESET_CART';
const ADD_TO_COMPARE = 'ADD_TO_COMPARE';
const REMOVE_ITEM_FROM_COMPARE = 'REMOVE_ITEM_FROM_COMPARE';

/***/ }),

/***/ "LpKD":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/cp-img6-8bf8408a538f123cd52fc5963ab7cc8d.jpg";

/***/ }),

/***/ "MZms":
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ "MbYI":
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "Qd5l":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABQCAMAAACu7ZJWAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABjFBMVEW8vLy2trZWVlYSEhIEBAQpKSmMjIxvb28YGBgjIyOFhYVmZmYWFhYfHx99fX0+Pj4FBQViYmKLi4tYWFiOjo55eXkBAQFdXV2JiYlCQkKWlpZqampfX19LS0uIiIifn58AAABOTk4bGxtDQ0O7u7slJSU9PT0iIiI8PDyCgoJ6enqxsbGlpaVgYGAJCQmBgYF4eHhGRkYvLy82NjaQkJBhYWGampqYmJipqak7OzsNDQ2tra2vr69kZGQICAi1tbW5ubkaGhqNjY1+fn4RERGSkpKhoaGEhISqqqoMDAxISEhFRUUQEBBTU1OcnJwcHBx0dHSVlZWioqI/Pz9xcXGRkZGZmZm6urqkpKSwsLAHBwcKCgqXl5d7e3sDAwO3t7eoqKhZWVmAgIBKSkoPDw9/f3+jo6OUlJRjY2MVFRUmJiY6Ojp3d3eGhoZoaGisrKxSUlILCwsxMTFbW1sCAgKTk5OysrI4ODhra2tlZWUGBgZQUFAgICBUVFSgoKBMTExVVVUUFBQZGRn+/v5RJn7eAAAAAWJLR0SD/LTP0gAAAZ1JREFUWMPt09tXElEUBvDPGMRLGCpMGYUbHQ20gEiDBCIgRcUKtVAjwe5hlEIXDe36l7enFQ1rNQ/M+/497HXmfGudM/ucGUAIIYQQQgghTPWcsSn2Xn3k6FP6BzqjwbOKc8g06c451/DIqOIGPOr5C2PKRSPxqpfcl1WfSdKdcfJy9duBiUlAm5o2oiuBv+W/pDtBGuc6o85eJb33ayFtiBxAmCJwXueJ6A38SywuPUfcMebp5gjF9D0ojlsLiaSNXzZ125eOqB4YiTV3MplsIneXFsO0xI95bmJ5ZbWwluAzCBDRPb2DdmLR/QdEmSKtB2mjvUBRpSCPN1cePkq55tGRWKSVYltB2nZT6U/by8DO43ISeEK7PDFYSXQkllRze1yflrU4PdMPXb+s5y9sBeAlveKJRXrdkVg769AbIF0bA5y8nLb/Fuil+gy9Q4nqnL9XD4zEosNG3dcs80V56EO28PET0pko0Kx9xlHj2P2l5TcSq6onC62m/nXx71w5zQNfFb6vb67vSP/4Wfk1vGUkQgghhBBCCGHqNzrMRTQMHOqLAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE5LTA3LTI2VDAyOjUyOjQ0LTA1OjAwnf2flQAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOS0wNy0yNlQwMjo1Mjo0NC0wNTowMOygJykAAAAASUVORK5CYII="

/***/ }),

/***/ "S306":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/news-img5-8bf8408a538f123cd52fc5963ab7cc8d.jpg";

/***/ }),

/***/ "SLEi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class AddsModal extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "_isMounted", false);

    _defineProperty(this, "state", {
      open: false
    });

    _defineProperty(this, "closeModal", e => {
      this._isMounted = true;
      e.preventDefault();
      this.setState({
        open: false
      });
    });
  }

  componentDidMount() {
    this.setState({
      open: true
    });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    let {
      open
    } = this.state;
    return __jsx("div", {
      className: `bts-popup ${open ? 'is-visible' : ''}`,
      role: "alert"
    }, __jsx("div", {
      className: "bts-popup-container"
    }, __jsx("h3", null, "Free Shipping"), __jsx("p", null, "Worldwide free shipping for all members. To become a member subscribe for our ", __jsx("strong", null, "free offers / discount newsletter.")), __jsx("form", null, __jsx("input", {
      type: "email",
      className: "form-control",
      placeholder: "mail@name.com",
      name: "EMAIL",
      required: true
    }), __jsx("button", {
      type: "submit"
    }, __jsx("i", {
      className: "far fa-paper-plane"
    }))), __jsx("ul", null, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      className: "facebook"
    }, __jsx("i", {
      className: "fab fa-facebook-f"
    })))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      className: "twitter"
    }, __jsx("i", {
      className: "fab fa-twitter"
    })))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      className: "linkdein"
    }, __jsx("i", {
      className: "fab fa-linkedin-in"
    })))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      className: "instagram"
    }, __jsx("i", {
      className: "fab fa-instagram"
    }))))), __jsx("div", {
      className: "img-box"
    }, __jsx("img", {
      src: __webpack_require__("JoBn"),
      alt: "image"
    }), __jsx("img", {
      src: __webpack_require__("BzbJ"),
      alt: "image"
    })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      onClick: this.closeModal,
      className: "bts-popup-close"
    }))));
  }

}

/* harmony default export */ __webpack_exports__["a"] = (AddsModal);

/***/ }),

/***/ "UvRT":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABQCAMAAACu7ZJWAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABjFBMVEW8vLy2trZWVlYSEhIEBAQpKSmMjIxvb28YGBgjIyOFhYVmZmYWFhYfHx99fX0+Pj4FBQViYmKLi4tYWFiOjo55eXkBAQFdXV2JiYlCQkKWlpZqampfX19LS0uIiIifn58AAABOTk4bGxtDQ0O7u7slJSU9PT0iIiI8PDyCgoJ6enqxsbGlpaVgYGAJCQmBgYF4eHhGRkYvLy82NjaQkJBhYWGampqYmJipqak7OzsNDQ2tra2vr69kZGQICAi1tbW5ubkaGhqNjY1+fn4RERGSkpKhoaGEhISqqqoMDAxISEhFRUUQEBBTU1OcnJwcHBx0dHSVlZWioqI/Pz9xcXGRkZGZmZm6urqkpKSwsLAHBwcKCgqXl5d7e3sDAwO3t7eoqKhZWVmAgIBKSkoPDw9/f3+jo6OUlJRjY2MVFRUmJiY6Ojp3d3eGhoZoaGisrKxSUlILCwsxMTFbW1sCAgKTk5OysrI4ODhra2tlZWUGBgZQUFAgICBUVFSgoKBMTExVVVUUFBQZGRn+/v5RJn7eAAAAAWJLR0SD/LTP0gAAAZ1JREFUWMPt09tXElEUBvDPGMRLGCpMGYUbHQ20gEiDBCIgRcUKtVAjwe5hlEIXDe36l7enFQ1rNQ/M+/497HXmfGudM/ucGUAIIYQQQgghTPWcsSn2Xn3k6FP6BzqjwbOKc8g06c451/DIqOIGPOr5C2PKRSPxqpfcl1WfSdKdcfJy9duBiUlAm5o2oiuBv+W/pDtBGuc6o85eJb33ayFtiBxAmCJwXueJ6A38SywuPUfcMebp5gjF9D0ojlsLiaSNXzZ125eOqB4YiTV3MplsIneXFsO0xI95bmJ5ZbWwluAzCBDRPb2DdmLR/QdEmSKtB2mjvUBRpSCPN1cePkq55tGRWKSVYltB2nZT6U/by8DO43ISeEK7PDFYSXQkllRze1yflrU4PdMPXb+s5y9sBeAlveKJRXrdkVg769AbIF0bA5y8nLb/Fuil+gy9Q4nqnL9XD4zEosNG3dcs80V56EO28PET0pko0Kx9xlHj2P2l5TcSq6onC62m/nXx71w5zQNfFb6vb67vSP/4Wfk1vGUkQgghhBBCCGHqNzrMRTQMHOqLAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE5LTA3LTI2VDAyOjUyOjQ0LTA1OjAwnf2flQAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOS0wNy0yNlQwMjo1Mjo0NC0wNTowMOygJykAAAAASUVORK5CYII="

/***/ }),

/***/ "VBb8":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAlCAYAAAAEGWqvAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozOTRmMGRjMy1mNjc2LTkwNDctOTIzNi1hMWI2ZWQ3NGY0ZmEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NEVBRjZDNjFBNjA3MTFFOUFEQjBCNTJEMjU3ODI4OTIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NEVBRjZDNjBBNjA3MTFFOUFEQjBCNTJEMjU3ODI4OTIiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ZWViNWRhYzgtNGM1OS1hMjQ0LTlkYTctY2Q0MDIzYTNlMjIzIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjM5NGYwZGMzLWY2NzYtOTA0Ny05MjM2LWExYjZlZDc0ZjRmYSIv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"

/***/ }),

/***/ "VUhy":
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAAyAAD/4QMvaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkU4MjlGRkUzQzU3QzExRTlBRUI3QjMwQkM2NENGRDZDIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkU4MjlGRkUyQzU3QzExRTlBRUI3QjMwQkM2NENGRDZDIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjY0RDhGRDc4M0ZENzExRTk4QjZDOUU5NDU1QUEyRENBIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjY0RDhGRDc5M0ZENzExRTk4QjZDOUU5NDU1QUEyRENBIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQACAYGBgYGCAYGCAwIBwgMDgoICAoOEA0NDg0NEBEMDg0NDgwRDxITFBMSDxgYGhoYGCMiIiIjJycnJycnJycnJwEJCAgJCgkLCQkLDgsNCw4RDg4ODhETDQ0ODQ0TGBEPDw8PERgWFxQUFBcWGhoYGBoaISEgISEnJycnJycnJycn/8AAEQgAQQBBAwEiAAIRAQMRAf/EAIUAAAEEAwEAAAAAAAAAAAAAAAADBAUHAQIGCAEBAQEBAAAAAAAAAAAAAAAAAAIDARAAAgECBAMEBwYHAQAAAAAAAQIDAAQRIRIFMUEGcYEyE1FhscEiQgeRciMzFBWh4VKyQ3MkNBEBAAICAgIDAQAAAAAAAAAAAAERAgMhMUFRYRIiQv/aAAwDAQACEQMRAD8AqxFpdUoRKXRKkIzSLbxNM4JVBiQONc/cXzM+pSUY4MrcSAeVSXUUrQ28ManDzHJYekKP513X036Y6ZuNq/fusliWGRilnHcDQrhcmc6c2GPPhXMpqLleEXatLa6aFjMLjU2ZeKTEKew551L2s/6qHzCMCDgQOHdVj9c9F9Afsw3Tapbfb2kUm0lim/DmK56QjsdXdVabLbMloZGOUhxVeOAFcxyib+DPH611yUdabSCpB0ppItUg1wNFK6aKCYRKXVKyiUsFoH3T0PT532yfqaON9v8AxISZ/wApZJl0RvJj8uOWPImrX6e6a2h+n4djucLi3tg8UU8UjBXQs2BDIcwVNU28SSxtFIoZHBVlPAg1aHS+4XW3bJYqbaW425Ygi3FuvmPGYxodJYxgSMsQVrPZ4ltqniY6ky6z2/Z7kyWt3A9vDY2TCGeJo9KBJPgjXSWIL/NiM6rCKBYYUiUYBFAwFdT1jvHTk0iw7FqDXDj9Yvk+X8KkPiQFU+Ic650sjMVB+JfEpyI7Qc6a/Lu/+a9cyZyLTSVakJFppItaMDTTRS2kUUE4i0hebhZ7eqm6fSX8KqMWOHqFOGdYYnlbwxqXbsUY1X1zdy3tw9zMcXc4+oDko9QrsQOji3i83jcbfbNtQwi5kSFW4yEuwTLkvGvRO0bQ2zQvabcTHbKxa3+fgAGx1cdXHtry3tN7Jt25Wt/D+ZbSpMnbGwfDvwr2Dtd7b7lZQX1uweC4jWaFxzVhqFZ7I5j011zUSgLnpLbrk+dPApmkOqWUqC7E8sqpj6udQ2u4b/FY7dgq7VGbZ50yZpScZPiXkmAXtxqx/qd9Q06csn2ba5R+83KESOpxNtGw8X+xh4Ry4+ivOTu0jlmOZpr11+jZnMx9Upa77cxAJcDz09OODjv599TEc0V1Es0JxRvtB5g1yNS+wzH8a3JyykX+0+6tJZJXCitqK4Ie83u/vLVreTSiN4jGCCwHynPhUUihz5YwV/lY45+o05YERF1B0H4QeXpNM5MjVBQAg55EfwNd1079Td/6b2K42ayMbK5/5ppRqe3LePygcjq4jVwOdcHq4EegY9tZBxpNT2XXRxdXM15O9xcyNJLIxd3clmZmOJZieJNN2IFYJPKtCTQGOPsFSGytpvsP6kYew+6o9eFOttJF9DhzJH2g0HTYiitMaKkQT/5vvH2GmMvGiiqGF8PfWwoooA8K1NFFBgcKc7f/AO6H73uNFFB0VFFFSP/Z"

/***/ }),

/***/ "Vc7u":
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ "WGHE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("oAEb");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_3__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const AddToCompare = ({
  id
}) => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();

  const handleAddToCompare = id => {
    dispatch({
      type: 'ADD_TO_COMPARE',
      id
    });
    react_toastify__WEBPACK_IMPORTED_MODULE_3__["toast"].success('Added to the compare list', {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true
    });
  };

  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "#"
  }, __jsx("a", {
    "data-tip": "Add to Compare",
    "data-place": "left",
    onClick: e => {
      e.preventDefault();
      handleAddToCompare(id);
    }
  }, __jsx("i", {
    className: "fas fa-sync"
  })));
};

/* harmony default export */ __webpack_exports__["a"] = (AddToCompare);

/***/ }),

/***/ "Wf2E":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


class Subscribe extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("section", {
      className: "subscribe-area ptb-60"
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "row align-items-center"
    }, __jsx("div", {
      className: "col-lg-6"
    }, __jsx("div", {
      className: "newsletter-content"
    }, __jsx("h3", null, "Subscribe to our newsletter"), __jsx("p", null, "A short sentence describing what someone will receive by subscribing"))), __jsx("div", {
      className: "col-lg-6"
    }, __jsx("form", {
      className: "newsletter-form",
      "data-toggle": "validator"
    }, __jsx("input", {
      type: "email",
      className: "form-control",
      placeholder: "Enter your email address",
      name: "EMAIL",
      required: true,
      autoComplete: "off"
    }), __jsx("button", {
      type: "submit"
    }, "Subscribe"), __jsx("div", {
      id: "validator-newsletter",
      className: "form-result"
    }))))));
  }

}

/* harmony default export */ __webpack_exports__["a"] = (Subscribe);

/***/ }),

/***/ "WqZz":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAlCAYAAAAEGWqvAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozOTRmMGRjMy1mNjc2LTkwNDctOTIzNi1hMWI2ZWQ3NGY0ZmEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzM0RTIzQTdBNjA3MTFFOThGMjlBMUEwQzU0MEU4MjMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzM0RTIzQTZBNjA3MTFFOThGMjlBMUEwQzU0MEU4MjMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ZWViNWRhYzgtNGM1OS1hMjQ0LTlkYTctY2Q0MDIzYTNlMjIzIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjM5NGYwZGMzLWY2NzYtOTA0Ny05MjM2LWExYjZlZDc0ZjRmYSIv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"

/***/ }),

/***/ "XvS8":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABQCAMAAACu7ZJWAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABjFBMVEW8vLy2trZWVlYSEhIEBAQpKSmMjIxvb28YGBgjIyOFhYVmZmYWFhYfHx99fX0+Pj4FBQViYmKLi4tYWFiOjo55eXkBAQFdXV2JiYlCQkKWlpZqampfX19LS0uIiIifn58AAABOTk4bGxtDQ0O7u7slJSU9PT0iIiI8PDyCgoJ6enqxsbGlpaVgYGAJCQmBgYF4eHhGRkYvLy82NjaQkJBhYWGampqYmJipqak7OzsNDQ2tra2vr69kZGQICAi1tbW5ubkaGhqNjY1+fn4RERGSkpKhoaGEhISqqqoMDAxISEhFRUUQEBBTU1OcnJwcHBx0dHSVlZWioqI/Pz9xcXGRkZGZmZm6urqkpKSwsLAHBwcKCgqXl5d7e3sDAwO3t7eoqKhZWVmAgIBKSkoPDw9/f3+jo6OUlJRjY2MVFRUmJiY6Ojp3d3eGhoZoaGisrKxSUlILCwsxMTFbW1sCAgKTk5OysrI4ODhra2tlZWUGBgZQUFAgICBUVFSgoKBMTExVVVUUFBQZGRn+/v5RJn7eAAAAAWJLR0SD/LTP0gAAAZ1JREFUWMPt09tXElEUBvDPGMRLGCpMGYUbHQ20gEiDBCIgRcUKtVAjwe5hlEIXDe36l7enFQ1rNQ/M+/497HXmfGudM/ucGUAIIYQQQgghTPWcsSn2Xn3k6FP6BzqjwbOKc8g06c451/DIqOIGPOr5C2PKRSPxqpfcl1WfSdKdcfJy9duBiUlAm5o2oiuBv+W/pDtBGuc6o85eJb33ayFtiBxAmCJwXueJ6A38SywuPUfcMebp5gjF9D0ojlsLiaSNXzZ125eOqB4YiTV3MplsIneXFsO0xI95bmJ5ZbWwluAzCBDRPb2DdmLR/QdEmSKtB2mjvUBRpSCPN1cePkq55tGRWKSVYltB2nZT6U/by8DO43ISeEK7PDFYSXQkllRze1yflrU4PdMPXb+s5y9sBeAlveKJRXrdkVg769AbIF0bA5y8nLb/Fuil+gy9Q4nqnL9XD4zEosNG3dcs80V56EO28PET0pko0Kx9xlHj2P2l5TcSq6onC62m/nXx71w5zQNfFb6vb67vSP/4Wfk1vGUkQgghhBBCCGHqNzrMRTQMHOqLAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE5LTA3LTI2VDAyOjUyOjQzLTA1OjAwWFqhGwAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOS0wNy0yNlQwMjo1Mjo0My0wNTowMCkHGacAAAAASUVORK5CYII="

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = escapeRegex(normalizedRoute.replace(/\/$/, '') || '/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isOptional = /^\\\[.*\\\]$/.test($1);

    if (isOptional) {
      $1 = $1.slice(2, -2);
    }

    const isCatchAll = /^(\\\.){3}/.test($1);

    if (isCatchAll) {
      $1 = $1.slice(6);
    }

    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? isOptional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
  });
  let namedParameterizedRoute; // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    namedParameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
      const isCatchAll = /^(\\\.){3}/.test($1);
      const key = $1 // Un-escape key
      .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '');
      return isCatchAll ? `/(?<${escapeRegex(key)}>.+?)` : `/(?<${escapeRegex(key)}>[^/]+?)`;
    });
  }

  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups,
    namedRegex: namedParameterizedRoute ? `^${namedParameterizedRoute}(?:/)?$` : undefined
  };
}

/***/ }),

/***/ "ZSjW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class Wishlist extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      display: false
    });

    _defineProperty(this, "closeWishlist", () => {
      this.props.onClick(this.state.display);
    });
  }

  render() {
    return __jsx("div", {
      className: "modal right fade show shoppingWishlistModal",
      style: {
        display: "block",
        paddingRight: "16px"
      }
    }, __jsx("div", {
      className: "modal-dialog",
      role: "document"
    }, __jsx("div", {
      className: "modal-content"
    }, __jsx("button", {
      type: "button",
      className: "close",
      "data-dismiss": "modal",
      "aria-label": "Close",
      onClick: this.closeWishlist
    }, __jsx("span", {
      "aria-hidden": "true"
    }, "\xD7")), __jsx("div", {
      className: "modal-body"
    }, __jsx("h3", null, "My Wish List (3)"), __jsx("div", {
      className: "product-cart-content"
    }, __jsx("div", {
      className: "product-cart"
    }, __jsx("div", {
      className: "product-image"
    }, __jsx("img", {
      src: __webpack_require__("HDRl"),
      alt: "image"
    })), __jsx("div", {
      className: "product-content"
    }, __jsx("h3", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "Belted chino trousers polo"))), __jsx("span", null, "Blue / XS"), __jsx("div", {
      className: "product-price"
    }, __jsx("span", null, "1"), __jsx("span", null, "x"), __jsx("span", {
      className: "price"
    }, "$191.00")))), __jsx("div", {
      className: "product-cart"
    }, __jsx("div", {
      className: "product-image"
    }, __jsx("img", {
      src: __webpack_require__("5xpA"),
      alt: "image"
    })), __jsx("div", {
      className: "product-content"
    }, __jsx("h3", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "Belted chino trousers polo"))), __jsx("span", null, "Blue / XS"), __jsx("div", {
      className: "product-price"
    }, __jsx("span", null, "1"), __jsx("span", null, "x"), __jsx("span", {
      className: "price"
    }, "$191.00")))), __jsx("div", {
      className: "product-cart"
    }, __jsx("div", {
      className: "product-image"
    }, __jsx("img", {
      src: __webpack_require__("rGc4"),
      alt: "image"
    })), __jsx("div", {
      className: "product-content"
    }, __jsx("h3", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "Belted chino trousers polo"))), __jsx("span", null, "Blue / XS"), __jsx("div", {
      className: "product-price"
    }, __jsx("span", null, "1"), __jsx("span", null, "x"), __jsx("span", {
      className: "price"
    }, "$191.00"))))), __jsx("div", {
      className: "product-cart-btn"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      className: "btn btn-light"
    }, "View Shopping Cart")))))));
  }

}

/* harmony default export */ __webpack_exports__["a"] = (Wishlist);

/***/ }),

/***/ "aoZB":
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD//gA+Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBkZWZhdWx0IHF1YWxpdHkK/9sAQwAIBgYHBgUIBwcHCQkICgwUDQwLCwwZEhMPFB0aHx4dGhwcICQuJyAiLCMcHCg3KSwwMTQ0NB8nOT04MjwuMzQy/9sAQwEJCQkMCwwYDQ0YMiEcITIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIy/8AAEQgAtALuAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A9MooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAoqjqlnLeQIkW3IbJ3HHasr+w7v1j/76/8ArUAdHRXMTaRcQRNLI0YVRk/N/wDWq9oETqkspGFbAHvigDZorn9Uje71dYI8btgAz+Jpn9h3frH/AN9f/WoA6OiszStPms5JGlK4YADac1bvbj7LaSS9wPlHvQAs95b2xxNKqn06n8hToLqC5BMMivjrjr+VYdjpjX4NxcSMFY8Y6t70l1aSaTPHcQuWTOMn+RoA6KimRSLNCki9GAIp9ABRRRQAUUUUAFFFNd0jQu7BVHUk4FACswVSzEBRyST0pEdJEDIysp6FTkVkapqcLWzQQPvZ+CR0Aq5pH/ILh/4F/wChGgC7Ucs0UCb5XVF9SakrnfLk1jUZMvtiTofQe31oA2I9Ss5X2pOufcEf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KACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiikZgqlmIAAySe1AC0UjMFUsxAAGST2paACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACs+RiZrgIZzKHAj27to+VevbrWhTVRVLEDBY5PucAf0FAFf7RLnzMJ5XmeXjB3dduc/Wg3ZSURsozvIYjsvGD+q/rUv2eLzfM2/NnPU4z646Zoe3icyFkyZF2tz1FAEDXcgjhwAGlBYEIzYHbgc9xTjPM0UBVAryOVO9SMYB5x17VM8McihWHC9MEgj6EUohQBAB9w5Xk9cEf1NAFWS7lSR1C7jHgMFiY7jjPBHA696S8kleC7VNgREKtuByflzx+Bqy9vHI+5gc9DhiM/XHWkltYZiTImdwwcMRn64oAS9/wCPG4/65N/KkSSYSeW/l7mQspUHAxjg+vUVM6LJGyMMqwII9qYkCQhjEnzYwNzH8u+BQAyG5MzIqgAgEyj+6emPzz+VE0jpdxBUdwUfKqR6rzyR/k063hMSsWx5jsWYjpmpCimQOR8wBAPscZ/kKAKy5uLmVZFljARCF347tz8p/wA4qIIf7MiYSyh5RFubzCTyRnGTx1q8EUSFwPmIAJ9hnH8zSeTGIli2/ImNoz0x0/lQBReeSXywGKGJ0Eu04yxYDH06n8qtwsTLcAkkCQAe3yrUjorjDDIyD+IORUbWsbOz/vAWOTtkZc8Y6A+1ABcM2I0DFd77Sw6gYJ/pj8aRl+zQSuhdiFJAZi3IHvTzDGwcFQQ5y2e5wB/QURwpFnbu56lmLH9aAIChhEcqzSOzMoO5shsnHTt68VCk8kXmAsWMruIsnOGDEY+nQ/nVtLWGNwypyOmWJA+g6CpERUGFGBkn8ScmgCGz3C2wzs5V3XcxyThiKsU1EVBhRgZJ/EnJp1ABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAf/2Q=="

/***/ }),

/***/ "bDUz":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAAkCAYAAAAZ4GNvAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozOTRmMGRjMy1mNjc2LTkwNDctOTIzNi1hMWI2ZWQ3NGY0ZmEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6N0Q0RjFBNUNBNjA3MTFFOUFEQjI4NzlGOUJBRTE0MjciIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6N0Q0RjFBNUJBNjA3MTFFOUFEQjI4NzlGOUJBRTE0MjciIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ZWViNWRhYzgtNGM1OS1hMjQ0LTlkYTctY2Q0MDIzYTNlMjIzIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjM5NGYwZGMzLWY2NzYtOTA0Ny05MjM2LWExYjZlZDc0ZjRmYSIv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"

/***/ }),

/***/ "bJnk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class Cart extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      display: false
    });

    _defineProperty(this, "closeCart", () => {
      this.props.onClick(this.state.display);
    });
  }

  render() {
    let {
      products,
      total
    } = this.props;
    return __jsx("div", {
      className: "modal right fade show shoppingCartModal",
      style: {
        display: "block",
        paddingRight: "16px"
      }
    }, __jsx("div", {
      className: "modal-dialog",
      role: "document"
    }, __jsx("div", {
      className: "modal-content"
    }, __jsx("button", {
      type: "button",
      className: "close",
      "data-dismiss": "modal",
      "aria-label": "Close",
      onClick: this.closeCart
    }, __jsx("span", {
      "aria-hidden": "true"
    }, "\xD7")), __jsx("div", {
      className: "modal-body"
    }, __jsx("h3", null, "My Cart (", products.length, ")"), __jsx("div", {
      className: "product-cart-content"
    }, products.length > 0 ? products.map((product, idx) => __jsx("div", {
      className: "product-cart",
      key: idx
    }, __jsx("div", {
      className: "product-image"
    }, __jsx("img", {
      src: product.image,
      alt: "image"
    })), __jsx("div", {
      className: "product-content"
    }, __jsx("h3", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "#"
    }, __jsx("a", null, product.title))), __jsx("span", null, "Blue / XS"), __jsx("div", {
      className: "product-price"
    }, __jsx("span", null, product.quantity), __jsx("span", null, "x"), __jsx("span", {
      className: "price"
    }, "$", product.price))))) : 'Empty'), __jsx("div", {
      className: "product-cart-subtotal"
    }, __jsx("span", null, "Subtotal"), __jsx("span", {
      className: "subtotal"
    }, "$", total)), __jsx("div", {
      className: "product-cart-btn"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/checkout"
    }, __jsx("a", {
      className: "btn btn-primary"
    }, "Proceed to Checkout")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/cart"
    }, __jsx("a", {
      className: "btn btn-light"
    }, "View Shopping Cart")))))));
  }

}

const mapStateToProps = state => {
  return {
    products: state.addedItems,
    total: state.total //addedItems: state.addedItems

  };
};

/* harmony default export */ __webpack_exports__["a"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(Cart));

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "c/yp":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABQCAMAAACu7ZJWAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABjFBMVEW8vLy2trZWVlYSEhIEBAQpKSmMjIxvb28YGBgjIyOFhYVmZmYWFhYfHx99fX0+Pj4FBQViYmKLi4tYWFiOjo55eXkBAQFdXV2JiYlCQkKWlpZqampfX19LS0uIiIifn58AAABOTk4bGxtDQ0O7u7slJSU9PT0iIiI8PDyCgoJ6enqxsbGlpaVgYGAJCQmBgYF4eHhGRkYvLy82NjaQkJBhYWGampqYmJipqak7OzsNDQ2tra2vr69kZGQICAi1tbW5ubkaGhqNjY1+fn4RERGSkpKhoaGEhISqqqoMDAxISEhFRUUQEBBTU1OcnJwcHBx0dHSVlZWioqI/Pz9xcXGRkZGZmZm6urqkpKSwsLAHBwcKCgqXl5d7e3sDAwO3t7eoqKhZWVmAgIBKSkoPDw9/f3+jo6OUlJRjY2MVFRUmJiY6Ojp3d3eGhoZoaGisrKxSUlILCwsxMTFbW1sCAgKTk5OysrI4ODhra2tlZWUGBgZQUFAgICBUVFSgoKBMTExVVVUUFBQZGRn+/v5RJn7eAAAAAWJLR0SD/LTP0gAAAZ1JREFUWMPt09tXElEUBvDPGMRLGCpMGYUbHQ20gEiDBCIgRcUKtVAjwe5hlEIXDe36l7enFQ1rNQ/M+/497HXmfGudM/ucGUAIIYQQQgghTPWcsSn2Xn3k6FP6BzqjwbOKc8g06c451/DIqOIGPOr5C2PKRSPxqpfcl1WfSdKdcfJy9duBiUlAm5o2oiuBv+W/pDtBGuc6o85eJb33ayFtiBxAmCJwXueJ6A38SywuPUfcMebp5gjF9D0ojlsLiaSNXzZ125eOqB4YiTV3MplsIneXFsO0xI95bmJ5ZbWwluAzCBDRPb2DdmLR/QdEmSKtB2mjvUBRpSCPN1cePkq55tGRWKSVYltB2nZT6U/by8DO43ISeEK7PDFYSXQkllRze1yflrU4PdMPXb+s5y9sBeAlveKJRXrdkVg769AbIF0bA5y8nLb/Fuil+gy9Q4nqnL9XD4zEosNG3dcs80V56EO28PET0pko0Kx9xlHj2P2l5TcSq6onC62m/nXx71w5zQNfFb6vb67vSP/4Wfk1vGUkQgghhBBCCGHqNzrMRTQMHOqLAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE5LTA3LTI2VDAyOjUyOjQzLTA1OjAwWFqhGwAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOS0wNy0yNlQwMjo1Mjo0My0wNTowMCkHGacAAAAASUVORK5CYII="

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

var _interopRequireWildcard = __webpack_require__("7KCV");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _url = __webpack_require__("bzos");

var _utils = __webpack_require__("kYf9");

var _router = _interopRequireDefault(__webpack_require__("nOHt"));

var _router2 = __webpack_require__("elyg");

function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: (0, _router2.addBasePath)(formatUrl(href)),
        as: asHref ? (0, _router2.addBasePath)(formatUrl(asHref)) : asHref
      };
    });

    this.linkClicked = e => {
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (false) {}

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    const {
      pathname
    } = window.location;
    const {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    const resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      const isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    const paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (false) {}
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = /*#__PURE__*/_react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

if (false) {}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.default = void 0;

var _url2 = __webpack_require__("bzos");

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _isDynamic = __webpack_require__("/jkW");

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function addBasePath(path) {
  return path.indexOf(basePath) !== 0 ? basePath + path : path;
}

function delBasePath(path) {
  return path.indexOf(basePath) === 0 ? path.substr(basePath.length) || '/' : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch((0, _utils.formatWithValidation)({
      pathname: addBasePath( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${delBasePath(pathname)}.json`),
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as2, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname,
          query
        }), (0, _utils.getURL)());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && (0, _url2.parse)(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (false) {}

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute((0, _url2.parse)(asPath).pathname);
      return  true && this.sdc[pathname] ? Promise.resolve(this.sdc[pathname]) : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = (0, _url2.parse)(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as2;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign({}, data, {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (_utils.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      let url = typeof _url === 'object' ? (0, _utils.formatWithValidation)(_url) : _url;
      let as = typeof _as === 'object' ? (0, _utils.formatWithValidation)(_as) : _as;
      url = addBasePath(url);
      as = addBasePath(as); // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as, options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = (0, _url2.parse)(url, true);

      if (!pathname || protocol) {
        if (false) {}

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if ((0, _isDynamic.isDynamicRoute)(route)) {
        const {
          pathname: asPathname
        } = (0, _url2.parse)(as);
        const routeRegex = (0, _routeRegex.getRouteRegex)(route);
        const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (false) {}

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/vercel/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);

        if (false) {}

        this.set(route, pathname, query, as, routeInfo).then(() => {
          if (error) {
            Router.events.emit('routeChangeError', error, as);
            throw error;
          }

          Router.events.emit('routeChangeComplete', as);
          return resolve(true);
        });
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = (0, _url2.parse)(url);

      if (!pathname || protocol) {
        if (false) {}

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (false) {}

      const route = delBasePath(toRoute(pathname));
      Promise.all([this.pageLoader.prefetchData(url, delBasePath(asPath)), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    route = delBasePath(route);
    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "epww":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/news-img2-8bf8408a538f123cd52fc5963ab7cc8d.jpg";

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _url = __webpack_require__("bzos");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url, options) {
  if (false) {}

  return (0, _url.format)(url, options);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "i0wS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("/T1H");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const OwlCarousel = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, "q4RA", 7)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("q4RA")],
    modules: ['react-owl-carousel3']
  }
});
const options = {
  loop: true,
  nav: false,
  dots: true,
  autoplayHoverPause: true,
  items: 1,
  autoplay: true,
  navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"]
};

class TestimonialsTwo extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      display: false,
      panel: true
    });
  }

  componentDidMount() {
    this.setState({
      display: true
    });
  }

  render() {
    return __jsx("div", {
      className: "testimonials-area ptb-60 bg2"
    }, __jsx("div", {
      className: "container"
    }, this.state.display ? __jsx(OwlCarousel, _extends({
      className: "testimonials-slides owl-carousel owl-theme"
    }, options), __jsx("div", {
      className: "single-testimonials"
    }, __jsx("div", {
      className: "client-image"
    }, __jsx("img", {
      src: __webpack_require__("vxDo"),
      alt: "image"
    })), __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."), __jsx("div", {
      className: "client-info"
    }, __jsx("h4", null, "Jason Statham"), __jsx("span", null, "Founder at Brand"))), __jsx("div", {
      className: "single-testimonials"
    }, __jsx("div", {
      className: "client-image"
    }, __jsx("img", {
      src: __webpack_require__("VUhy"),
      alt: "image"
    })), __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."), __jsx("div", {
      className: "client-info"
    }, __jsx("h4", null, "Jason Jisan"), __jsx("span", null, "Founder at Brand"))), __jsx("div", {
      className: "single-testimonials"
    }, __jsx("div", {
      className: "client-image"
    }, __jsx("img", {
      src: __webpack_require__("9TMB"),
      alt: "image"
    })), __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."), __jsx("div", {
      className: "client-info"
    }, __jsx("h4", null, "Jason Shabbir"), __jsx("span", null, "Founder at Brand")))) : ''));
  }

}

/* harmony default export */ __webpack_exports__["a"] = (TestimonialsTwo);

/***/ }),

/***/ "iwtP":
/***/ (function(module, exports) {

module.exports = require("react-visibility-sensor");

/***/ }),

/***/ "j6G5":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABQCAMAAACu7ZJWAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABjFBMVEW8vLy2trZWVlYSEhIEBAQpKSmMjIxvb28YGBgjIyOFhYVmZmYWFhYfHx99fX0+Pj4FBQViYmKLi4tYWFiOjo55eXkBAQFdXV2JiYlCQkKWlpZqampfX19LS0uIiIifn58AAABOTk4bGxtDQ0O7u7slJSU9PT0iIiI8PDyCgoJ6enqxsbGlpaVgYGAJCQmBgYF4eHhGRkYvLy82NjaQkJBhYWGampqYmJipqak7OzsNDQ2tra2vr69kZGQICAi1tbW5ubkaGhqNjY1+fn4RERGSkpKhoaGEhISqqqoMDAxISEhFRUUQEBBTU1OcnJwcHBx0dHSVlZWioqI/Pz9xcXGRkZGZmZm6urqkpKSwsLAHBwcKCgqXl5d7e3sDAwO3t7eoqKhZWVmAgIBKSkoPDw9/f3+jo6OUlJRjY2MVFRUmJiY6Ojp3d3eGhoZoaGisrKxSUlILCwsxMTFbW1sCAgKTk5OysrI4ODhra2tlZWUGBgZQUFAgICBUVFSgoKBMTExVVVUUFBQZGRn+/v5RJn7eAAAAAWJLR0SD/LTP0gAAAZ1JREFUWMPt09tXElEUBvDPGMRLGCpMGYUbHQ20gEiDBCIgRcUKtVAjwe5hlEIXDe36l7enFQ1rNQ/M+/497HXmfGudM/ucGUAIIYQQQgghTPWcsSn2Xn3k6FP6BzqjwbOKc8g06c451/DIqOIGPOr5C2PKRSPxqpfcl1WfSdKdcfJy9duBiUlAm5o2oiuBv+W/pDtBGuc6o85eJb33ayFtiBxAmCJwXueJ6A38SywuPUfcMebp5gjF9D0ojlsLiaSNXzZ125eOqB4YiTV3MplsIneXFsO0xI95bmJ5ZbWwluAzCBDRPb2DdmLR/QdEmSKtB2mjvUBRpSCPN1cePkq55tGRWKSVYltB2nZT6U/by8DO43ISeEK7PDFYSXQkllRze1yflrU4PdMPXb+s5y9sBeAlveKJRXrdkVg769AbIF0bA5y8nLb/Fuil+gy9Q4nqnL9XD4zEosNG3dcs80V56EO28PET0pko0Kx9xlHj2P2l5TcSq6onC62m/nXx71w5zQNfFb6vb67vSP/4Wfk1vGUkQgghhBBCCGHqNzrMRTQMHOqLAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE5LTA3LTI2VDAyOjUyOjQ0LTA1OjAwnf2flQAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOS0wNy0yNlQwMjo1Mjo0NC0wNTowMOygJykAAAAASUVORK5CYII="

/***/ }),

/***/ "kNBj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export addToCart */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return removeItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return subtractQuantity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addQuantity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return addQuantityWithNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return resetCart; });
/* unused harmony export addToCompare */
/* unused harmony export removeItemFromCompare */
/* harmony import */ var _action_types_action_names__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("K2d6");
 //add cart action

const addToCart = id => {
  return {
    type: _action_types_action_names__WEBPACK_IMPORTED_MODULE_0__[/* ADD_TO_CART */ "d"],
    id
  };
}; //remove item action

const removeItem = id => {
  return {
    type: _action_types_action_names__WEBPACK_IMPORTED_MODULE_0__[/* REMOVE_ITEM */ "f"],
    id
  };
}; //subtract qt action

const subtractQuantity = id => {
  return {
    type: _action_types_action_names__WEBPACK_IMPORTED_MODULE_0__[/* SUB_QUANTITY */ "i"],
    id
  };
}; //add qt action

const addQuantity = id => {
  return {
    type: _action_types_action_names__WEBPACK_IMPORTED_MODULE_0__[/* ADD_QUANTITY */ "a"],
    id
  };
}; //add qt action with quantity number

const addQuantityWithNumber = (id, qty) => {
  return {
    type: _action_types_action_names__WEBPACK_IMPORTED_MODULE_0__[/* ADD_QUANTITY_WITH_NUMBER */ "b"],
    id,
    qty
  };
}; // Reset cart after form submit

const resetCart = () => {
  return {
    type: _action_types_action_names__WEBPACK_IMPORTED_MODULE_0__[/* RESET_CART */ "h"]
  };
}; //add compare action

const addToCompare = id => {
  return {
    type: _action_types_action_names__WEBPACK_IMPORTED_MODULE_0__[/* ADD_TO_COMPARE */ "e"],
    id
  };
}; //remove item from compare action

const removeItemFromCompare = id => {
  return {
    type: _action_types_action_names__WEBPACK_IMPORTED_MODULE_0__[/* REMOVE_ITEM_FROM_COMPARE */ "g"],
    id
  };
};

/***/ }),

/***/ "kYf9":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "kcT6":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABQCAMAAACu7ZJWAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABjFBMVEW8vLy2trZWVlYSEhIEBAQpKSmMjIxvb28YGBgjIyOFhYVmZmYWFhYfHx99fX0+Pj4FBQViYmKLi4tYWFiOjo55eXkBAQFdXV2JiYlCQkKWlpZqampfX19LS0uIiIifn58AAABOTk4bGxtDQ0O7u7slJSU9PT0iIiI8PDyCgoJ6enqxsbGlpaVgYGAJCQmBgYF4eHhGRkYvLy82NjaQkJBhYWGampqYmJipqak7OzsNDQ2tra2vr69kZGQICAi1tbW5ubkaGhqNjY1+fn4RERGSkpKhoaGEhISqqqoMDAxISEhFRUUQEBBTU1OcnJwcHBx0dHSVlZWioqI/Pz9xcXGRkZGZmZm6urqkpKSwsLAHBwcKCgqXl5d7e3sDAwO3t7eoqKhZWVmAgIBKSkoPDw9/f3+jo6OUlJRjY2MVFRUmJiY6Ojp3d3eGhoZoaGisrKxSUlILCwsxMTFbW1sCAgKTk5OysrI4ODhra2tlZWUGBgZQUFAgICBUVFSgoKBMTExVVVUUFBQZGRn+/v5RJn7eAAAAAWJLR0SD/LTP0gAAAZ1JREFUWMPt09tXElEUBvDPGMRLGCpMGYUbHQ20gEiDBCIgRcUKtVAjwe5hlEIXDe36l7enFQ1rNQ/M+/497HXmfGudM/ucGUAIIYQQQgghTPWcsSn2Xn3k6FP6BzqjwbOKc8g06c451/DIqOIGPOr5C2PKRSPxqpfcl1WfSdKdcfJy9duBiUlAm5o2oiuBv+W/pDtBGuc6o85eJb33ayFtiBxAmCJwXueJ6A38SywuPUfcMebp5gjF9D0ojlsLiaSNXzZ125eOqB4YiTV3MplsIneXFsO0xI95bmJ5ZbWwluAzCBDRPb2DdmLR/QdEmSKtB2mjvUBRpSCPN1cePkq55tGRWKSVYltB2nZT6U/by8DO43ISeEK7PDFYSXQkllRze1yflrU4PdMPXb+s5y9sBeAlveKJRXrdkVg769AbIF0bA5y8nLb/Fuil+gy9Q4nqnL9XD4zEosNG3dcs80V56EO28PET0pko0Kx9xlHj2P2l5TcSq6onC62m/nXx71w5zQNfFb6vb67vSP/4Wfk1vGUkQgghhBBCCGHqNzrMRTQMHOqLAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE5LTA3LTI2VDAyOjUyOjQ0LTA1OjAwnf2flQAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOS0wNy0yNlQwMjo1Mjo0NC0wNTowMOygJykAAAAASUVORK5CYII="

/***/ }),

/***/ "lOc8":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAkCAYAAADPRbkKAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozOTRmMGRjMy1mNjc2LTkwNDctOTIzNi1hMWI2ZWQ3NGY0ZmEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OEVEQ0JEOTRBNjA3MTFFOUJEMjJGMjRCRkRBQTU4NTgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OEVEQ0JEOTNBNjA3MTFFOUJEMjJGMjRCRkRBQTU4NTgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ZWViNWRhYzgtNGM1OS1hMjQ0LTlkYTctY2Q0MDIzYTNlMjIzIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjM5NGYwZGMzLWY2NzYtOTA0Ny05MjM2LWExYjZlZDc0ZjRmYSIv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"

/***/ }),

/***/ "m9Oj":
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD//gA+Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBkZWZhdWx0IHF1YWxpdHkK/9sAQwAIBgYHBgUIBwcHCQkICgwUDQwLCwwZEhMPFB0aHx4dGhwcICQuJyAiLCMcHCg3KSwwMTQ0NB8nOT04MjwuMzQy/9sAQwEJCQkMCwwYDQ0YMiEcITIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIy/8AAEQgA3AFoAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A9MooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigArLmu7u4vHt7Laoj+87etalVY4YdPSeYu2123MW5x+X1oAqwXd3BeJbXoVvM+461Yv7xrZUSJd88hwi1TaddT1K3EGfLgO9mPGen+FJc3McWtGSXJEUWFA6kn0/OgB0k+p2QE1wY5Ys/Mq9V/Sr893HBZ/aeqkAqPXPSqR1VHPl3do8cb8ZbkH9KTVVXbZ26gCNpBgDpjp/WgBvnat5X2nEezG7ysc4/n+taVrcLdWyTLxnqPQ1NWXo3yG6hHRJeP5f0oA1KKKyYJpLPVHtp5GaKTmNnbOP89KANaisu1llvtRkmEji2i+VQCQGP+efyrUoAzbq8uHu/slmq+YBl3Paomur+wdWu9kkLHBZR0q7b2fkXM85fcZTnGMbar61MgszBnMkhG1R160AS396baONYVDyynCD+tVXbV4EMztG6ryUAHT8qtCwJntZmk/1KBdmOpx61YuZ47eBpJCAAOh7+1ADba6S5tVnHygjkHt61nrc6hfMz2myOFTgFhy1R24aDw9Mx435I+hwK0dOQJp0AA6oD+fNADNPvHuBJFMuyeM4YDv71drL/wBX4i4/5axc/wCfwrUoAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACq8M8F9E20bkB2sHWrFY5S6026laCAzQSndtXqDQAmp28dm8F1bqI2D4IX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"

/***/ }),

/***/ "meiv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


class Facility extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("section", {
      className: "facility-area"
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "row"
    }, __jsx("div", {
      className: "col-lg-3 col-sm-6"
    }, __jsx("div", {
      className: "facility-box"
    }, __jsx("div", {
      className: "icon"
    }, __jsx("i", {
      className: "fas fa-plane"
    })), __jsx("h3", null, "Free Shipping World Wide"))), __jsx("div", {
      className: "col-lg-3 col-sm-6"
    }, __jsx("div", {
      className: "facility-box"
    }, __jsx("div", {
      className: "icon"
    }, __jsx("i", {
      className: "fas fa-money-check-alt"
    })), __jsx("h3", null, "100% money back guarantee"))), __jsx("div", {
      className: "col-lg-3 col-sm-6"
    }, __jsx("div", {
      className: "facility-box"
    }, __jsx("div", {
      className: "icon"
    }, __jsx("i", {
      className: "far fa-credit-card"
    })), __jsx("h3", null, "Many payment gatways"))), __jsx("div", {
      className: "col-lg-3 col-sm-6"
    }, __jsx("div", {
      className: "facility-box"
    }, __jsx("div", {
      className: "icon"
    }, __jsx("i", {
      className: "fas fa-headset"
    })), __jsx("h3", null, "24/7 online support"))))));
  }

}

/* harmony default export */ __webpack_exports__["a"] = (Facility);

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error(`Error when running the Router event: ${eventField}`); // tslint:disable-next-line:no-console

          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "nSZH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./components/Layout/Navbar.js + 2 modules
var Navbar = __webpack_require__("zCU4");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "react-visibility-sensor"
var external_react_visibility_sensor_ = __webpack_require__("iwtP");
var external_react_visibility_sensor_default = /*#__PURE__*/__webpack_require__.n(external_react_visibility_sensor_);

// EXTERNAL MODULE: external "next/dynamic"
var dynamic_ = __webpack_require__("/T1H");
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic_);

// CONCATENATED MODULE: ./components/shop-style-ten/BannerSlider.js
var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const OwlCarousel = dynamic_default()(() => Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, "q4RA", 7)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("q4RA")],
    modules: ['react-owl-carousel3']
  }
});
const options = {
  items: 1,
  loop: true,
  nav: false,
  dots: true,
  animateOut: "slideOutDown",
  animateIn: "slideInDown",
  smartSpeed: 750,
  autoplay: true,
  autoplayHoverPause: true,
  navText: ["<i class='fas fa-arrow-left'></i>", "<i class='fas fa-arrow-right'></i>"]
};

class BannerSlider_BannerSlider extends external_react_["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      display: false,
      panel: true
    });
  }

  componentDidMount() {
    this.setState({
      display: true
    });
  }

  render() {
    return __jsx(external_react_default.a.Fragment, null, __jsx("div", {
      className: "container"
    }, this.state.display ? __jsx(OwlCarousel, _extends({
      className: "home-slides-three bottom-carousel-dots owl-carousel owl-theme"
    }, options), __jsx("div", {
      className: "main-banner item-bg16"
    }, __jsx("div", {
      className: "d-table"
    }, __jsx("div", {
      className: "d-table-cell"
    }, __jsx(external_react_visibility_sensor_default.a, null, ({
      isVisible
    }) => __jsx("div", {
      className: "main-banner-content text-center white-color"
    }, __jsx("span", {
      className: isVisible ? "animated fadeInUp opacityOne" : 'opacityZero'
    }, "Limited Time Offer!"), __jsx("h1", {
      className: isVisible ? "animated fadeInUp opacityOne" : 'opacityZero'
    }, "Winter-spring 2020!"), __jsx("p", {
      className: isVisible ? "animated fadeInUp opacityOne" : 'opacityZero'
    }, "Take 20% Off \u2018Sale Must-Haves'"), __jsx(link_default.a, {
      href: "#"
    }, __jsx("a", {
      className: `btn btn-primary ${isVisible ? "animated fadeInUp opacityOne" : 'opacityZero'}`
    }, "Shop Women's")), __jsx(link_default.a, {
      href: "#"
    }, __jsx("a", {
      className: `btn btn-light ${isVisible ? "animated fadeInUp opacityOne" : 'opacityZero'}`
    }, "Shop Men's"))))))), __jsx("div", {
      className: "main-banner item-bg17"
    }, __jsx("div", {
      className: "d-table"
    }, __jsx("div", {
      className: "d-table-cell"
    }, __jsx(external_react_visibility_sensor_default.a, null, ({
      isVisible
    }) => __jsx("div", {
      className: "main-banner-content text-center white-color"
    }, __jsx("span", {
      className: isVisible ? "animated fadeInUp slow opacityOne" : 'opacityZero'
    }, "New Inspiration 2020!"), __jsx("h1", {
      className: isVisible ? "animated fadeInUp slow opacityOne" : 'opacityZero'
    }, "Summer-spring 2020!"), __jsx("p", {
      className: isVisible ? "animated fadeInUp slow opacityOne" : 'opacityZero'
    }, "Trending from men and women style collection"), __jsx(link_default.a, {
      href: "#"
    }, __jsx("a", {
      className: `btn btn-primary ${isVisible ? "animated fadeInUp slow opacityOne" : 'opacityZero'}`
    }, "Shop Women's")), __jsx(link_default.a, {
      href: "#"
    }, __jsx("a", {
      className: `btn btn-light ${isVisible ? "animated fadeInUp slow opacityOne" : 'opacityZero'}`
    }, "Shop Men's"))))))), __jsx("div", {
      className: "main-banner item-bg18"
    }, __jsx("div", {
      className: "d-table"
    }, __jsx("div", {
      className: "d-table-cell"
    }, __jsx(external_react_visibility_sensor_default.a, null, ({
      isVisible
    }) => __jsx("div", {
      className: "main-banner-content text-center white-color"
    }, __jsx("span", {
      className: isVisible ? "animated fadeInUp opacityOne" : 'opacityZero'
    }, "New Inspiration 2020"), __jsx("h1", {
      className: isVisible ? "animated fadeInUp opacityOne" : 'opacityZero'
    }, "Travel-spring 2020!"), __jsx("p", {
      className: isVisible ? "animated fadeInUp opacityOne" : 'opacityZero'
    }, "Up To 30% OFF Select Styles"), __jsx(link_default.a, {
      href: "#"
    }, __jsx("a", {
      className: `btn btn-primary ${isVisible ? "animated fadeInUp opacityOne" : 'opacityZero'}`
    }, "Shop Women's")), __jsx(link_default.a, {
      href: "#"
    }, __jsx("a", {
      className: `btn btn-light ${isVisible ? "animated fadeInUp opacityOne" : 'opacityZero'}`
    }, "Shop Men's")))))))) : ''));
  }

}

/* harmony default export */ var shop_style_ten_BannerSlider = (BannerSlider_BannerSlider);
// CONCATENATED MODULE: ./components/shop-style-ten/ProductCategories.js
var ProductCategories_jsx = external_react_default.a.createElement;



class ProductCategories_ProductCategories extends external_react_["Component"] {
  render() {
    return ProductCategories_jsx("section", {
      className: "category-boxes-area pt-60"
    }, ProductCategories_jsx("div", {
      className: "container"
    }, ProductCategories_jsx("div", {
      className: "row"
    }, ProductCategories_jsx("div", {
      className: "col-lg-6 col-sm-6"
    }, ProductCategories_jsx("div", {
      className: "category-boxes"
    }, ProductCategories_jsx("img", {
      src: __webpack_require__("3bJG"),
      alt: "image"
    }), ProductCategories_jsx("div", {
      className: "content black-text"
    }, ProductCategories_jsx("p", null, "New Personalizable Collection"), ProductCategories_jsx("h3", null, "Need It Now"), ProductCategories_jsx(link_default.a, {
      href: "#"
    }, ProductCategories_jsx("a", {
      className: "shop-now-btn"
    }, "Discover Now"))))), ProductCategories_jsx("div", {
      className: "col-lg-6 col-sm-6"
    }, ProductCategories_jsx("div", {
      className: "category-boxes"
    }, ProductCategories_jsx("img", {
      src: __webpack_require__("LpKD"),
      alt: "image"
    }), ProductCategories_jsx("div", {
      className: "content black-text"
    }, ProductCategories_jsx("p", null, "Complete Your Looks"), ProductCategories_jsx("h3", null, "Must Haves"), ProductCategories_jsx(link_default.a, {
      href: "#"
    }, ProductCategories_jsx("a", {
      className: "shop-now-btn"
    }, "Discover Now"))))))));
  }

}

/* harmony default export */ var shop_style_ten_ProductCategories = (ProductCategories_ProductCategories);
// EXTERNAL MODULE: ./components/Modal/QuickView.js
var QuickView = __webpack_require__("7smD");

// EXTERNAL MODULE: ./components/Shared/AddToCompare.js
var AddToCompare = __webpack_require__("WGHE");

// EXTERNAL MODULE: ./components/Shared/AddToCart.js
var AddToCart = __webpack_require__("EsL0");

// CONCATENATED MODULE: ./components/shop-style-ten/SpecialOffer.js
var SpecialOffer_jsx = external_react_default.a.createElement;

function SpecialOffer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class SpecialOffer_SpecialOffer extends external_react_["Component"] {
  constructor(...args) {
    super(...args);

    SpecialOffer_defineProperty(this, "state", {
      modalOpen: false,
      modalData: null
    });

    SpecialOffer_defineProperty(this, "openTabSection", (evt, tabNmae) => {
      let i, tabcontent, tablinks;
      tabcontent = document.getElementsByClassName("tabs_item_special");

      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove("fadeInUp");
        tabcontent[i].style.display = "none";
      }

      tablinks = document.getElementsByTagName("li");

      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace("current", "");
      }

      document.getElementById(tabNmae).style.display = "block";
      document.getElementById(tabNmae).className += " fadeInUp animated";
      evt.currentTarget.className += "current";
    });

    SpecialOffer_defineProperty(this, "compareButton", id => {
      let compare_exist = this.props.CompareProducts.filter(item => item.id === id);

      if (compare_exist.length > 0) {
        return SpecialOffer_jsx(link_default.a, {
          href: "#"
        }, SpecialOffer_jsx("a", {
          "data-tip": "Already Added",
          "data-place": "left",
          onClick: e => {
            e.preventDefault();
          },
          disabled: true,
          className: "disabled"
        }, SpecialOffer_jsx("i", {
          className: "fas fa-sync"
        })));
      } else {
        return SpecialOffer_jsx(AddToCompare["a" /* default */], {
          id: id
        });
      }
    });

    SpecialOffer_defineProperty(this, "openModal", () => {
      this.setState({
        modalOpen: true
      });
    });

    SpecialOffer_defineProperty(this, "closeModal", () => {
      this.setState({
        modalOpen: false
      });
    });

    SpecialOffer_defineProperty(this, "handleModalData", data => {
      this.setState({
        modalData: data
      });
    });
  }

  render() {
    let {
      products
    } = this.props;
    const {
      modalOpen
    } = this.state;
    return SpecialOffer_jsx("section", {
      className: "all-products-area pb-60"
    }, SpecialOffer_jsx("div", {
      className: "container"
    }, SpecialOffer_jsx("div", {
      className: "tab products-category-tab-style-2"
    }, SpecialOffer_jsx("div", {
      className: "row"
    }, SpecialOffer_jsx("div", {
      className: "col-lg-12 col-md-12"
    }, SpecialOffer_jsx("div", {
      className: "title"
    }, SpecialOffer_jsx("h2", null, SpecialOffer_jsx("span", {
      className: "dot"
    }), " Special Offer")), SpecialOffer_jsx("ul", {
      className: "tabs"
    }, SpecialOffer_jsx("li", {
      onClick: e => {
        e.preventDefault();
        this.openTabSection(e, 'tab1');
      },
      className: "current"
    }, SpecialOffer_jsx("span", null, "All")), SpecialOffer_jsx("li", {
      onClick: e => {
        e.preventDefault();
        this.openTabSection(e, 'tab2');
      }
    }, SpecialOffer_jsx("span", null, "Men")), SpecialOffer_jsx("li", {
      onClick: e => {
        e.preventDefault();
        this.openTabSection(e, 'tab3');
      }
    }, SpecialOffer_jsx("span", null, "Women")))), SpecialOffer_jsx("div", {
      className: "col-lg-12 col-md-12"
    }, SpecialOffer_jsx("div", {
      className: "tab_content"
    }, SpecialOffer_jsx("div", {
      id: "tab1",
      className: "tabs_item_special"
    }, SpecialOffer_jsx("div", {
      className: "row"
    }, products.slice(0, 6).map((data, idx) => SpecialOffer_jsx("div", {
      className: "col-lg-4 col-sm-6 col-6",
      key: idx
    }, SpecialOffer_jsx("div", {
      className: "single-product-box"
    }, SpecialOffer_jsx("div", {
      className: "product-image"
    }, SpecialOffer_jsx(link_default.a, {
      href: "/product/[id]",
      as: `/product/${data.id}`
    }, SpecialOffer_jsx("a", null, SpecialOffer_jsx("img", {
      src: data.image,
      alt: "image"
    }))), SpecialOffer_jsx("ul", null, SpecialOffer_jsx("li", null, SpecialOffer_jsx(link_default.a, {
      href: "#"
    }, SpecialOffer_jsx("a", {
      "data-tip": "Quick View",
      "data-place": "left",
      onClick: e => {
        e.preventDefault();
        this.openModal();
        this.handleModalData(data);
      }
    }, SpecialOffer_jsx("i", {
      className: "far fa-eye"
    })))), SpecialOffer_jsx("li", null, SpecialOffer_jsx(link_default.a, {
      href: "#"
    }, SpecialOffer_jsx("a", {
      "data-tip": "Add to Wishlist",
      "data-place": "left"
    }, SpecialOffer_jsx("i", {
      className: "far fa-heart"
    })))), SpecialOffer_jsx("li", null, this.compareButton(data.id)))), SpecialOffer_jsx("div", {
      className: "product-content"
    }, SpecialOffer_jsx("h3", null, SpecialOffer_jsx(link_default.a, {
      href: "/product/[id]",
      as: `/product/${data.id}`
    }, SpecialOffer_jsx("a", null, data.title))), SpecialOffer_jsx("div", {
      className: "product-price"
    }, SpecialOffer_jsx("span", {
      className: "new-price"
    }, "$", data.price)), SpecialOffer_jsx("div", {
      className: "rating"
    }, SpecialOffer_jsx("i", {
      className: "fas fa-star"
    }), SpecialOffer_jsx("i", {
      className: "fas fa-star"
    }), SpecialOffer_jsx("i", {
      className: "fas fa-star"
    }), SpecialOffer_jsx("i", {
      className: "fas fa-star"
    }), SpecialOffer_jsx("i", {
      className: "far fa-star"
    })), SpecialOffer_jsx(AddToCart["a" /* default */], data))))))), SpecialOffer_jsx("div", {
      id: "tab2",
      className: "tabs_item_special"
    }, SpecialOffer_jsx("div", {
      className: "row"
    }, products.slice(0, 6).map((data, idx) => SpecialOffer_jsx("div", {
      className: "col-lg-4 col-sm-6 col-6",
      key: idx
    }, SpecialOffer_jsx("div", {
      className: "single-product-box"
    }, SpecialOffer_jsx("div", {
      className: "product-image"
    }, SpecialOffer_jsx(link_default.a, {
      href: "/product/[id]",
      as: `/product/${data.id}`
    }, SpecialOffer_jsx("a", null, SpecialOffer_jsx("img", {
      src: data.image,
      alt: "image"
    }))), SpecialOffer_jsx("ul", null, SpecialOffer_jsx("li", null, SpecialOffer_jsx(link_default.a, {
      href: "#"
    }, SpecialOffer_jsx("a", {
      "data-tip": "Quick View",
      "data-place": "left",
      onClick: e => {
        e.preventDefault();
        this.openModal();
        this.handleModalData(data);
      }
    }, SpecialOffer_jsx("i", {
      className: "far fa-eye"
    })))), SpecialOffer_jsx("li", null, SpecialOffer_jsx(link_default.a, {
      href: "#"
    }, SpecialOffer_jsx("a", {
      "data-tip": "Add to Wishlist",
      "data-place": "left"
    }, SpecialOffer_jsx("i", {
      className: "far fa-heart"
    })))), SpecialOffer_jsx("li", null, this.compareButton(data.id)))), SpecialOffer_jsx("div", {
      className: "product-content"
    }, SpecialOffer_jsx("h3", null, SpecialOffer_jsx(link_default.a, {
      href: "/product/[id]",
      as: `/product/${data.id}`
    }, SpecialOffer_jsx("a", null, data.title))), SpecialOffer_jsx("div", {
      className: "product-price"
    }, SpecialOffer_jsx("span", {
      className: "new-price"
    }, "$", data.price)), SpecialOffer_jsx("div", {
      className: "rating"
    }, SpecialOffer_jsx("i", {
      className: "fas fa-star"
    }), SpecialOffer_jsx("i", {
      className: "fas fa-star"
    }), SpecialOffer_jsx("i", {
      className: "fas fa-star"
    }), SpecialOffer_jsx("i", {
      className: "fas fa-star"
    }), SpecialOffer_jsx("i", {
      className: "far fa-star"
    })), SpecialOffer_jsx(AddToCart["a" /* default */], data))))))), SpecialOffer_jsx("div", {
      id: "tab3",
      className: "tabs_item_special"
    }, SpecialOffer_jsx("div", {
      className: "row"
    }, products.slice(0, 6).map((data, idx) => SpecialOffer_jsx("div", {
      className: "col-lg-4 col-sm-6 col-6",
      key: idx
    }, SpecialOffer_jsx("div", {
      className: "single-product-box"
    }, SpecialOffer_jsx("div", {
      className: "product-image"
    }, SpecialOffer_jsx(link_default.a, {
      href: "/product/[id]",
      as: `/product/${data.id}`
    }, SpecialOffer_jsx("a", null, SpecialOffer_jsx("img", {
      src: data.image,
      alt: "image"
    }))), SpecialOffer_jsx("ul", null, SpecialOffer_jsx("li", null, SpecialOffer_jsx(link_default.a, {
      href: "#"
    }, SpecialOffer_jsx("a", {
      "data-tip": "Quick View",
      "data-place": "left",
      onClick: e => {
        e.preventDefault();
        this.openModal();
        this.handleModalData(data);
      }
    }, SpecialOffer_jsx("i", {
      className: "far fa-eye"
    })))), SpecialOffer_jsx("li", null, SpecialOffer_jsx(link_default.a, {
      href: "#"
    }, SpecialOffer_jsx("a", {
      "data-tip": "Add to Wishlist",
      "data-place": "left"
    }, SpecialOffer_jsx("i", {
      className: "far fa-heart"
    })))), SpecialOffer_jsx("li", null, this.compareButton(data.id)))), SpecialOffer_jsx("div", {
      className: "product-content"
    }, SpecialOffer_jsx("h3", null, SpecialOffer_jsx(link_default.a, {
      href: "/product/[id]",
      as: `/product/${data.id}`
    }, SpecialOffer_jsx("a", null, data.title))), SpecialOffer_jsx("div", {
      className: "product-price"
    }, SpecialOffer_jsx("span", {
      className: "new-price"
    }, "$", data.price)), SpecialOffer_jsx("div", {
      className: "rating"
    }, SpecialOffer_jsx("i", {
      className: "fas fa-star"
    }), SpecialOffer_jsx("i", {
      className: "fas fa-star"
    }), SpecialOffer_jsx("i", {
      className: "fas fa-star"
    }), SpecialOffer_jsx("i", {
      className: "fas fa-star"
    }), SpecialOffer_jsx("i", {
      className: "far fa-star"
    })), SpecialOffer_jsx(AddToCart["a" /* default */], data)))))))))))), modalOpen ? SpecialOffer_jsx(QuickView["a" /* default */], {
      closeModal: this.closeModal,
      modalData: this.state.modalData
    }) : '');
  }

}

/* harmony default export */ var shop_style_ten_SpecialOffer = (SpecialOffer_SpecialOffer);
// CONCATENATED MODULE: ./components/shop-style-ten/ProductsCategoryStyleTwo.js
var ProductsCategoryStyleTwo_jsx = external_react_default.a.createElement;



class ProductsCategoryStyleTwo_ProductsCategoryStyleTwo extends external_react_["Component"] {
  render() {
    return ProductsCategoryStyleTwo_jsx("section", {
      className: "category-products-area pb-60"
    }, ProductsCategoryStyleTwo_jsx("div", {
      className: "container"
    }, ProductsCategoryStyleTwo_jsx("div", {
      className: "row"
    }, ProductsCategoryStyleTwo_jsx("div", {
      className: "col-lg-4 col-md-12"
    }, ProductsCategoryStyleTwo_jsx("div", {
      className: "single-category-box"
    }, ProductsCategoryStyleTwo_jsx("img", {
      src: __webpack_require__("Am+y"),
      alt: "image"
    }), ProductsCategoryStyleTwo_jsx("div", {
      className: "category-content"
    }, ProductsCategoryStyleTwo_jsx("h3", null, "New Collections!"), ProductsCategoryStyleTwo_jsx(link_default.a, {
      href: "#"
    }, ProductsCategoryStyleTwo_jsx("a", {
      className: "btn btn-light"
    }, "View More"))), ProductsCategoryStyleTwo_jsx(link_default.a, {
      href: "#"
    }, ProductsCategoryStyleTwo_jsx("a", {
      className: "link-btn"
    })))), ProductsCategoryStyleTwo_jsx("div", {
      className: "col-lg-8 col-md-12"
    }, ProductsCategoryStyleTwo_jsx("div", {
      className: "row"
    }, ProductsCategoryStyleTwo_jsx("div", {
      className: "col-lg-6 col-sm-6"
    }, ProductsCategoryStyleTwo_jsx("div", {
      className: "single-category-box"
    }, ProductsCategoryStyleTwo_jsx("img", {
      src: __webpack_require__("Av0K"),
      alt: "image"
    }), ProductsCategoryStyleTwo_jsx("div", {
      className: "category-content"
    }, ProductsCategoryStyleTwo_jsx("h3", null, "Our Popular Products"), ProductsCategoryStyleTwo_jsx(link_default.a, {
      href: "#"
    }, ProductsCategoryStyleTwo_jsx("a", {
      className: "btn btn-light"
    }, "View More"))), ProductsCategoryStyleTwo_jsx(link_default.a, {
      href: "#"
    }, ProductsCategoryStyleTwo_jsx("a", {
      className: "link-btn"
    })))), ProductsCategoryStyleTwo_jsx("div", {
      className: "col-lg-6 col-sm-6"
    }, ProductsCategoryStyleTwo_jsx("div", {
      className: "single-category-box"
    }, ProductsCategoryStyleTwo_jsx("img", {
      src: __webpack_require__("m9Oj"),
      alt: "image"
    }), ProductsCategoryStyleTwo_jsx("div", {
      className: "category-content"
    }, ProductsCategoryStyleTwo_jsx("h3", null, "Hot Trending Products"), ProductsCategoryStyleTwo_jsx(link_default.a, {
      href: "#"
    }, ProductsCategoryStyleTwo_jsx("a", {
      className: "btn btn-light"
    }, "View More"))), ProductsCategoryStyleTwo_jsx(link_default.a, {
      href: "#"
    }, ProductsCategoryStyleTwo_jsx("a", {
      className: "link-btn"
    })))), ProductsCategoryStyleTwo_jsx("div", {
      className: "col-lg-12 col-md-12"
    }, ProductsCategoryStyleTwo_jsx("div", {
      className: "single-category-box"
    }, ProductsCategoryStyleTwo_jsx("img", {
      src: __webpack_require__("aoZB"),
      alt: "image"
    }), ProductsCategoryStyleTwo_jsx("div", {
      className: "category-content"
    }, ProductsCategoryStyleTwo_jsx("h3", null, "Winter Collections!"), ProductsCategoryStyleTwo_jsx(link_default.a, {
      href: "#"
    }, ProductsCategoryStyleTwo_jsx("a", {
      className: "btn btn-light"
    }, "View More"))), ProductsCategoryStyleTwo_jsx(link_default.a, {
      href: "#"
    }, ProductsCategoryStyleTwo_jsx("a", {
      className: "link-btn"
    })))))))));
  }

}

/* harmony default export */ var shop_style_ten_ProductsCategoryStyleTwo = (ProductsCategoryStyleTwo_ProductsCategoryStyleTwo);
// CONCATENATED MODULE: ./components/shop-style-ten/TrendingProducts.js
var TrendingProducts_jsx = external_react_default.a.createElement;

function TrendingProducts_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class TrendingProducts_TrendingProducts extends external_react_["Component"] {
  constructor(...args) {
    super(...args);

    TrendingProducts_defineProperty(this, "state", {
      modalOpen: false,
      modalData: null
    });

    TrendingProducts_defineProperty(this, "openTabSection", (evt, tabNmae) => {
      let i, tabcontent, tablinks;
      tabcontent = document.getElementsByClassName("tabs_item_trending");

      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove("fadeInUp");
        tabcontent[i].style.display = "none";
      }

      tablinks = document.getElementsByTagName("li");

      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace("current", "");
      }

      document.getElementById(tabNmae).style.display = "block";
      document.getElementById(tabNmae).className += " fadeInUp animated";
      evt.currentTarget.className += "current";
    });

    TrendingProducts_defineProperty(this, "compareButton", id => {
      let compare_exist = this.props.CompareProducts.filter(item => item.id === id);

      if (compare_exist.length > 0) {
        return TrendingProducts_jsx(link_default.a, {
          href: "#"
        }, TrendingProducts_jsx("a", {
          "data-tip": "Already Added",
          "data-place": "left",
          onClick: e => {
            e.preventDefault();
          },
          disabled: true,
          className: "disabled"
        }, TrendingProducts_jsx("i", {
          className: "fas fa-sync"
        })));
      } else {
        return TrendingProducts_jsx(AddToCompare["a" /* default */], {
          id: id
        });
      }
    });

    TrendingProducts_defineProperty(this, "openModal", () => {
      this.setState({
        modalOpen: true
      });
    });

    TrendingProducts_defineProperty(this, "closeModal", () => {
      this.setState({
        modalOpen: false
      });
    });

    TrendingProducts_defineProperty(this, "handleModalData", data => {
      this.setState({
        modalData: data
      });
    });
  }

  render() {
    let {
      products
    } = this.props;
    const {
      modalOpen
    } = this.state;
    return TrendingProducts_jsx("section", {
      className: "all-products-area pb-60"
    }, TrendingProducts_jsx("div", {
      className: "container"
    }, TrendingProducts_jsx("div", {
      className: "tab products-category-tab-style-2"
    }, TrendingProducts_jsx("div", {
      className: "row"
    }, TrendingProducts_jsx("div", {
      className: "col-lg-12 col-md-12"
    }, TrendingProducts_jsx("div", {
      className: "title"
    }, TrendingProducts_jsx("h2", null, TrendingProducts_jsx("span", {
      className: "dot"
    }), " Trending Products")), TrendingProducts_jsx("ul", {
      className: "tabs"
    }, TrendingProducts_jsx("li", {
      onClick: e => {
        e.preventDefault();
        this.openTabSection(e, 'tab4');
      },
      className: "current"
    }, TrendingProducts_jsx("span", null, "All")), TrendingProducts_jsx("li", {
      onClick: e => {
        e.preventDefault();
        this.openTabSection(e, 'tab5');
      }
    }, TrendingProducts_jsx("span", null, "Men")), TrendingProducts_jsx("li", {
      onClick: e => {
        e.preventDefault();
        this.openTabSection(e, 'tab6');
      }
    }, TrendingProducts_jsx("span", null, "Women")))), TrendingProducts_jsx("div", {
      className: "col-lg-12 col-md-12"
    }, TrendingProducts_jsx("div", {
      className: "tab_content"
    }, TrendingProducts_jsx("div", {
      id: "tab4",
      className: "tabs_item_trending"
    }, TrendingProducts_jsx("div", {
      className: "row"
    }, products.slice(0, 6).map((data, idx) => TrendingProducts_jsx("div", {
      className: "col-lg-4 col-sm-6 col-6",
      key: idx
    }, TrendingProducts_jsx("div", {
      className: "single-product-box"
    }, TrendingProducts_jsx("div", {
      className: "product-image"
    }, TrendingProducts_jsx(link_default.a, {
      href: "/product/[id]",
      as: `/product/${data.id}`
    }, TrendingProducts_jsx("a", null, TrendingProducts_jsx("img", {
      src: data.image,
      alt: "image"
    }))), TrendingProducts_jsx("ul", null, TrendingProducts_jsx("li", null, TrendingProducts_jsx(link_default.a, {
      href: "#"
    }, TrendingProducts_jsx("a", {
      "data-tip": "Quick View",
      "data-place": "left",
      onClick: e => {
        e.preventDefault();
        this.openModal();
        this.handleModalData(data);
      }
    }, TrendingProducts_jsx("i", {
      className: "far fa-eye"
    })))), TrendingProducts_jsx("li", null, TrendingProducts_jsx(link_default.a, {
      href: "#"
    }, TrendingProducts_jsx("a", {
      "data-tip": "Add to Wishlist",
      "data-place": "left"
    }, TrendingProducts_jsx("i", {
      className: "far fa-heart"
    })))), TrendingProducts_jsx("li", null, this.compareButton(data.id)))), TrendingProducts_jsx("div", {
      className: "product-content"
    }, TrendingProducts_jsx("h3", null, TrendingProducts_jsx(link_default.a, {
      href: "/product/[id]",
      as: `/product/${data.id}`
    }, TrendingProducts_jsx("a", null, data.title))), TrendingProducts_jsx("div", {
      className: "product-price"
    }, TrendingProducts_jsx("span", {
      className: "new-price"
    }, "$", data.price)), TrendingProducts_jsx("div", {
      className: "rating"
    }, TrendingProducts_jsx("i", {
      className: "fas fa-star"
    }), TrendingProducts_jsx("i", {
      className: "fas fa-star"
    }), TrendingProducts_jsx("i", {
      className: "fas fa-star"
    }), TrendingProducts_jsx("i", {
      className: "fas fa-star"
    }), TrendingProducts_jsx("i", {
      className: "far fa-star"
    })), TrendingProducts_jsx(AddToCart["a" /* default */], data))))))), TrendingProducts_jsx("div", {
      id: "tab5",
      className: "tabs_item_trending"
    }, TrendingProducts_jsx("div", {
      className: "row"
    }, products.slice(0, 6).map((data, idx) => TrendingProducts_jsx("div", {
      className: "col-lg-4 col-sm-6 col-6",
      key: idx
    }, TrendingProducts_jsx("div", {
      className: "single-product-box"
    }, TrendingProducts_jsx("div", {
      className: "product-image"
    }, TrendingProducts_jsx(link_default.a, {
      href: "/product/[id]",
      as: `/product/${data.id}`
    }, TrendingProducts_jsx("a", null, TrendingProducts_jsx("img", {
      src: data.image,
      alt: "image"
    }))), TrendingProducts_jsx("ul", null, TrendingProducts_jsx("li", null, TrendingProducts_jsx(link_default.a, {
      href: "#"
    }, TrendingProducts_jsx("a", {
      "data-tip": "Quick View",
      "data-place": "left",
      onClick: e => {
        e.preventDefault();
        this.openModal();
        this.handleModalData(data);
      }
    }, TrendingProducts_jsx("i", {
      className: "far fa-eye"
    })))), TrendingProducts_jsx("li", null, TrendingProducts_jsx(link_default.a, {
      href: "#"
    }, TrendingProducts_jsx("a", {
      "data-tip": "Add to Wishlist",
      "data-place": "left"
    }, TrendingProducts_jsx("i", {
      className: "far fa-heart"
    })))), TrendingProducts_jsx("li", null, this.compareButton(data.id)))), TrendingProducts_jsx("div", {
      className: "product-content"
    }, TrendingProducts_jsx("h3", null, TrendingProducts_jsx(link_default.a, {
      href: "/product/[id]",
      as: `/product/${data.id}`
    }, TrendingProducts_jsx("a", null, data.title))), TrendingProducts_jsx("div", {
      className: "product-price"
    }, TrendingProducts_jsx("span", {
      className: "new-price"
    }, "$", data.price)), TrendingProducts_jsx("div", {
      className: "rating"
    }, TrendingProducts_jsx("i", {
      className: "fas fa-star"
    }), TrendingProducts_jsx("i", {
      className: "fas fa-star"
    }), TrendingProducts_jsx("i", {
      className: "fas fa-star"
    }), TrendingProducts_jsx("i", {
      className: "fas fa-star"
    }), TrendingProducts_jsx("i", {
      className: "far fa-star"
    })), TrendingProducts_jsx(AddToCart["a" /* default */], data))))))), TrendingProducts_jsx("div", {
      id: "tab6",
      className: "tabs_item_trending"
    }, TrendingProducts_jsx("div", {
      className: "row"
    }, products.slice(0, 6).map((data, idx) => TrendingProducts_jsx("div", {
      className: "col-lg-4 col-sm-6 col-6",
      key: idx
    }, TrendingProducts_jsx("div", {
      className: "single-product-box"
    }, TrendingProducts_jsx("div", {
      className: "product-image"
    }, TrendingProducts_jsx(link_default.a, {
      href: "/product/[id]",
      as: `/product/${data.id}`
    }, TrendingProducts_jsx("a", null, TrendingProducts_jsx("img", {
      src: data.image,
      alt: "image"
    }))), TrendingProducts_jsx("ul", null, TrendingProducts_jsx("li", null, TrendingProducts_jsx(link_default.a, {
      href: "#"
    }, TrendingProducts_jsx("a", {
      "data-tip": "Quick View",
      "data-place": "left",
      onClick: e => {
        e.preventDefault();
        this.openModal();
        this.handleModalData(data);
      }
    }, TrendingProducts_jsx("i", {
      className: "far fa-eye"
    })))), TrendingProducts_jsx("li", null, TrendingProducts_jsx(link_default.a, {
      href: "#"
    }, TrendingProducts_jsx("a", {
      "data-tip": "Add to Wishlist",
      "data-place": "left"
    }, TrendingProducts_jsx("i", {
      className: "far fa-heart"
    })))), TrendingProducts_jsx("li", null, this.compareButton(data.id)))), TrendingProducts_jsx("div", {
      className: "product-content"
    }, TrendingProducts_jsx("h3", null, TrendingProducts_jsx(link_default.a, {
      href: "/product/[id]",
      as: `/product/${data.id}`
    }, TrendingProducts_jsx("a", null, data.title))), TrendingProducts_jsx("div", {
      className: "product-price"
    }, TrendingProducts_jsx("span", {
      className: "new-price"
    }, "$", data.price)), TrendingProducts_jsx("div", {
      className: "rating"
    }, TrendingProducts_jsx("i", {
      className: "fas fa-star"
    }), TrendingProducts_jsx("i", {
      className: "fas fa-star"
    }), TrendingProducts_jsx("i", {
      className: "fas fa-star"
    }), TrendingProducts_jsx("i", {
      className: "fas fa-star"
    }), TrendingProducts_jsx("i", {
      className: "far fa-star"
    })), TrendingProducts_jsx(AddToCart["a" /* default */], data)))))))))))), modalOpen ? TrendingProducts_jsx(QuickView["a" /* default */], {
      closeModal: this.closeModal,
      modalData: this.state.modalData
    }) : '');
  }

}

/* harmony default export */ var shop_style_ten_TrendingProducts = (TrendingProducts_TrendingProducts);
// EXTERNAL MODULE: ./components/Common/Facility.js
var Facility = __webpack_require__("meiv");

// CONCATENATED MODULE: ./components/shop-style-ten/BestSellersProducts.js
var BestSellersProducts_jsx = external_react_default.a.createElement;

function BestSellersProducts_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class BestSellersProducts_BestSellersProducts extends external_react_["Component"] {
  constructor(...args) {
    super(...args);

    BestSellersProducts_defineProperty(this, "state", {
      modalOpen: false,
      modalData: null
    });

    BestSellersProducts_defineProperty(this, "openTabSection", (evt, tabNmae) => {
      let i, tabcontent, tablinks;
      tabcontent = document.getElementsByClassName("tabs_item_best");

      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove("fadeInUp");
        tabcontent[i].style.display = "none";
      }

      tablinks = document.getElementsByTagName("li");

      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace("current", "");
      }

      document.getElementById(tabNmae).style.display = "block";
      document.getElementById(tabNmae).className += " fadeInUp animated";
      evt.currentTarget.className += "current";
    });

    BestSellersProducts_defineProperty(this, "compareButton", id => {
      let compare_exist = this.props.CompareProducts.filter(item => item.id === id);

      if (compare_exist.length > 0) {
        return BestSellersProducts_jsx(link_default.a, {
          href: "#"
        }, BestSellersProducts_jsx("a", {
          "data-tip": "Already Added",
          "data-place": "left",
          onClick: e => {
            e.preventDefault();
          },
          disabled: true,
          className: "disabled"
        }, BestSellersProducts_jsx("i", {
          className: "fas fa-sync"
        })));
      } else {
        return BestSellersProducts_jsx(AddToCompare["a" /* default */], {
          id: id
        });
      }
    });

    BestSellersProducts_defineProperty(this, "openModal", () => {
      this.setState({
        modalOpen: true
      });
    });

    BestSellersProducts_defineProperty(this, "closeModal", () => {
      this.setState({
        modalOpen: false
      });
    });

    BestSellersProducts_defineProperty(this, "handleModalData", data => {
      this.setState({
        modalData: data
      });
    });
  }

  render() {
    let {
      products
    } = this.props;
    const {
      modalOpen
    } = this.state;
    return BestSellersProducts_jsx("section", {
      className: "all-products-area ptb-60"
    }, BestSellersProducts_jsx("div", {
      className: "container"
    }, BestSellersProducts_jsx("div", {
      className: "tab products-category-tab-style-2"
    }, BestSellersProducts_jsx("div", {
      className: "row"
    }, BestSellersProducts_jsx("div", {
      className: "col-lg-12 col-md-12"
    }, BestSellersProducts_jsx("div", {
      className: "title"
    }, BestSellersProducts_jsx("h2", null, BestSellersProducts_jsx("span", {
      className: "dot"
    }), " Best Sellers Products")), BestSellersProducts_jsx("ul", {
      className: "tabs"
    }, BestSellersProducts_jsx("li", {
      onClick: e => {
        e.preventDefault();
        this.openTabSection(e, 'tab7');
      },
      className: "current"
    }, BestSellersProducts_jsx("span", null, "All")), BestSellersProducts_jsx("li", {
      onClick: e => {
        e.preventDefault();
        this.openTabSection(e, 'tab8');
      }
    }, BestSellersProducts_jsx("span", null, "Men")), BestSellersProducts_jsx("li", {
      onClick: e => {
        e.preventDefault();
        this.openTabSection(e, 'tab9');
      }
    }, BestSellersProducts_jsx("span", null, "Women")))), BestSellersProducts_jsx("div", {
      className: "col-lg-12 col-md-12"
    }, BestSellersProducts_jsx("div", {
      className: "tab_content"
    }, BestSellersProducts_jsx("div", {
      id: "tab7",
      className: "tabs_item_trending"
    }, BestSellersProducts_jsx("div", {
      className: "row"
    }, products.slice(0, 6).map((data, idx) => BestSellersProducts_jsx("div", {
      className: "col-lg-4 col-sm-6 col-6",
      key: idx
    }, BestSellersProducts_jsx("div", {
      className: "single-product-box"
    }, BestSellersProducts_jsx("div", {
      className: "product-image"
    }, BestSellersProducts_jsx(link_default.a, {
      href: "/product/[id]",
      as: `/product/${data.id}`
    }, BestSellersProducts_jsx("a", null, BestSellersProducts_jsx("img", {
      src: data.image,
      alt: "image"
    }))), BestSellersProducts_jsx("ul", null, BestSellersProducts_jsx("li", null, BestSellersProducts_jsx(link_default.a, {
      href: "#"
    }, BestSellersProducts_jsx("a", {
      "data-tip": "Quick View",
      "data-place": "left",
      onClick: e => {
        e.preventDefault();
        this.openModal();
        this.handleModalData(data);
      }
    }, BestSellersProducts_jsx("i", {
      className: "far fa-eye"
    })))), BestSellersProducts_jsx("li", null, BestSellersProducts_jsx(link_default.a, {
      href: "#"
    }, BestSellersProducts_jsx("a", {
      "data-tip": "Add to Wishlist",
      "data-place": "left"
    }, BestSellersProducts_jsx("i", {
      className: "far fa-heart"
    })))), BestSellersProducts_jsx("li", null, this.compareButton(data.id)))), BestSellersProducts_jsx("div", {
      className: "product-content"
    }, BestSellersProducts_jsx("h3", null, BestSellersProducts_jsx(link_default.a, {
      href: "/product/[id]",
      as: `/product/${data.id}`
    }, BestSellersProducts_jsx("a", null, data.title))), BestSellersProducts_jsx("div", {
      className: "product-price"
    }, BestSellersProducts_jsx("span", {
      className: "new-price"
    }, "$", data.price)), BestSellersProducts_jsx("div", {
      className: "rating"
    }, BestSellersProducts_jsx("i", {
      className: "fas fa-star"
    }), BestSellersProducts_jsx("i", {
      className: "fas fa-star"
    }), BestSellersProducts_jsx("i", {
      className: "fas fa-star"
    }), BestSellersProducts_jsx("i", {
      className: "fas fa-star"
    }), BestSellersProducts_jsx("i", {
      className: "far fa-star"
    })), BestSellersProducts_jsx(AddToCart["a" /* default */], data))))))), BestSellersProducts_jsx("div", {
      id: "tab8",
      className: "tabs_item_trending"
    }, BestSellersProducts_jsx("div", {
      className: "row"
    }, products.slice(0, 6).map((data, idx) => BestSellersProducts_jsx("div", {
      className: "col-lg-4 col-sm-6 col-6",
      key: idx
    }, BestSellersProducts_jsx("div", {
      className: "single-product-box"
    }, BestSellersProducts_jsx("div", {
      className: "product-image"
    }, BestSellersProducts_jsx(link_default.a, {
      href: "/product/[id]",
      as: `/product/${data.id}`
    }, BestSellersProducts_jsx("a", null, BestSellersProducts_jsx("img", {
      src: data.image,
      alt: "image"
    }))), BestSellersProducts_jsx("ul", null, BestSellersProducts_jsx("li", null, BestSellersProducts_jsx(link_default.a, {
      href: "#"
    }, BestSellersProducts_jsx("a", {
      "data-tip": "Quick View",
      "data-place": "left",
      onClick: e => {
        e.preventDefault();
        this.openModal();
        this.handleModalData(data);
      }
    }, BestSellersProducts_jsx("i", {
      className: "far fa-eye"
    })))), BestSellersProducts_jsx("li", null, BestSellersProducts_jsx(link_default.a, {
      href: "#"
    }, BestSellersProducts_jsx("a", {
      "data-tip": "Add to Wishlist",
      "data-place": "left"
    }, BestSellersProducts_jsx("i", {
      className: "far fa-heart"
    })))), BestSellersProducts_jsx("li", null, this.compareButton(data.id)))), BestSellersProducts_jsx("div", {
      className: "product-content"
    }, BestSellersProducts_jsx("h3", null, BestSellersProducts_jsx(link_default.a, {
      href: "/product/[id]",
      as: `/product/${data.id}`
    }, BestSellersProducts_jsx("a", null, data.title))), BestSellersProducts_jsx("div", {
      className: "product-price"
    }, BestSellersProducts_jsx("span", {
      className: "new-price"
    }, "$", data.price)), BestSellersProducts_jsx("div", {
      className: "rating"
    }, BestSellersProducts_jsx("i", {
      className: "fas fa-star"
    }), BestSellersProducts_jsx("i", {
      className: "fas fa-star"
    }), BestSellersProducts_jsx("i", {
      className: "fas fa-star"
    }), BestSellersProducts_jsx("i", {
      className: "fas fa-star"
    }), BestSellersProducts_jsx("i", {
      className: "far fa-star"
    })), BestSellersProducts_jsx(AddToCart["a" /* default */], data))))))), BestSellersProducts_jsx("div", {
      id: "tab9",
      className: "tabs_item_trending"
    }, BestSellersProducts_jsx("div", {
      className: "row"
    }, products.slice(0, 6).map((data, idx) => BestSellersProducts_jsx("div", {
      className: "col-lg-4 col-sm-6 col-6",
      key: idx
    }, BestSellersProducts_jsx("div", {
      className: "single-product-box"
    }, BestSellersProducts_jsx("div", {
      className: "product-image"
    }, BestSellersProducts_jsx(link_default.a, {
      href: "/product/[id]",
      as: `/product/${data.id}`
    }, BestSellersProducts_jsx("a", null, BestSellersProducts_jsx("img", {
      src: data.image,
      alt: "image"
    }))), BestSellersProducts_jsx("ul", null, BestSellersProducts_jsx("li", null, BestSellersProducts_jsx(link_default.a, {
      href: "#"
    }, BestSellersProducts_jsx("a", {
      "data-tip": "Quick View",
      "data-place": "left",
      onClick: e => {
        e.preventDefault();
        this.openModal();
        this.handleModalData(data);
      }
    }, BestSellersProducts_jsx("i", {
      className: "far fa-eye"
    })))), BestSellersProducts_jsx("li", null, BestSellersProducts_jsx(link_default.a, {
      href: "#"
    }, BestSellersProducts_jsx("a", {
      "data-tip": "Add to Wishlist",
      "data-place": "left"
    }, BestSellersProducts_jsx("i", {
      className: "far fa-heart"
    })))), BestSellersProducts_jsx("li", null, this.compareButton(data.id)))), BestSellersProducts_jsx("div", {
      className: "product-content"
    }, BestSellersProducts_jsx("h3", null, BestSellersProducts_jsx(link_default.a, {
      href: "/product/[id]",
      as: `/product/${data.id}`
    }, BestSellersProducts_jsx("a", null, data.title))), BestSellersProducts_jsx("div", {
      className: "product-price"
    }, BestSellersProducts_jsx("span", {
      className: "new-price"
    }, "$", data.price)), BestSellersProducts_jsx("div", {
      className: "rating"
    }, BestSellersProducts_jsx("i", {
      className: "fas fa-star"
    }), BestSellersProducts_jsx("i", {
      className: "fas fa-star"
    }), BestSellersProducts_jsx("i", {
      className: "fas fa-star"
    }), BestSellersProducts_jsx("i", {
      className: "fas fa-star"
    }), BestSellersProducts_jsx("i", {
      className: "far fa-star"
    })), BestSellersProducts_jsx(AddToCart["a" /* default */], data)))))))))))), modalOpen ? BestSellersProducts_jsx(QuickView["a" /* default */], {
      closeModal: this.closeModal,
      modalData: this.state.modalData
    }) : '');
  }

}

/* harmony default export */ var shop_style_ten_BestSellersProducts = (BestSellersProducts_BestSellersProducts);
// EXTERNAL MODULE: ./components/Common/TestimonialsTwo.js
var TestimonialsTwo = __webpack_require__("i0wS");

// EXTERNAL MODULE: ./components/Common/NewsThree.js
var NewsThree = __webpack_require__("ClQ+");

// EXTERNAL MODULE: ./components/Common/Subscribe.js
var Subscribe = __webpack_require__("Wf2E");

// EXTERNAL MODULE: ./components/Common/Partner.js
var Partner = __webpack_require__("sex0");

// EXTERNAL MODULE: ./components/Common/InstagramPhoto.js
var InstagramPhoto = __webpack_require__("xKQ/");

// EXTERNAL MODULE: ./components/Layout/Footer.js
var Footer = __webpack_require__("v6Hh");

// EXTERNAL MODULE: ./components/Modal/AddsModal.js
var AddsModal = __webpack_require__("SLEi");

// CONCATENATED MODULE: ./pages/shop-style-ten.js
var shop_style_ten_jsx = external_react_default.a.createElement;


















const ShopStyleTen = () => {
  const products = Object(external_react_redux_["useSelector"])(state => state.products);
  const addedItemsToCompare = Object(external_react_redux_["useSelector"])(state => state.addedItemsToCompare);
  return shop_style_ten_jsx(external_react_default.a.Fragment, null, shop_style_ten_jsx(Navbar["a" /* default */], null), shop_style_ten_jsx(shop_style_ten_BannerSlider, null), shop_style_ten_jsx(shop_style_ten_ProductCategories, null), shop_style_ten_jsx(shop_style_ten_SpecialOffer, {
    products: products,
    CompareProducts: addedItemsToCompare
  }), shop_style_ten_jsx(shop_style_ten_ProductsCategoryStyleTwo, null), shop_style_ten_jsx(shop_style_ten_TrendingProducts, {
    products: products,
    CompareProducts: addedItemsToCompare
  }), shop_style_ten_jsx(Facility["a" /* default */], null), shop_style_ten_jsx(shop_style_ten_BestSellersProducts, {
    products: products,
    CompareProducts: addedItemsToCompare
  }), shop_style_ten_jsx(TestimonialsTwo["a" /* default */], null), shop_style_ten_jsx(NewsThree["a" /* default */], null), shop_style_ten_jsx(Subscribe["a" /* default */], null), shop_style_ten_jsx(Partner["a" /* default */], null), shop_style_ten_jsx(InstagramPhoto["a" /* default */], null), shop_style_ten_jsx(Footer["a" /* default */], null), shop_style_ten_jsx(AddsModal["a" /* default */], null));
};

/* harmony default export */ var shop_style_ten = __webpack_exports__["default"] = (ShopStyleTen);

/***/ }),

/***/ "oAEb":
/***/ (function(module, exports) {

module.exports = require("react-toastify");

/***/ }),

/***/ "q4RA":
/***/ (function(module, exports) {

module.exports = require("react-owl-carousel3");

/***/ }),

/***/ "rGc4":
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ "rfic":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAAlCAYAAADSvLDKAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozOTRmMGRjMy1mNjc2LTkwNDctOTIzNi1hMWI2ZWQ3NGY0ZmEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDQ3MkI5QzFBNjA3MTFFOTkzOUREMEE1NDc3MDUyRDgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDQ3MkI5QzBBNjA3MTFFOTkzOUREMEE1NDc3MDUyRDgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ZWViNWRhYzgtNGM1OS1hMjQ0LTlkYTctY2Q0MDIzYTNlMjIzIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjM5NGYwZGMzLWY2NzYtOTA0Ny05MjM2LWExYjZlZDc0ZjRmYSIv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"

/***/ }),

/***/ "sex0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("/T1H");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const OwlCarousel = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(() => Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, "q4RA", 7)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("q4RA")],
    modules: ['react-owl-carousel3']
  }
});
const options = {
  loop: true,
  nav: false,
  dots: false,
  autoplayHoverPause: true,
  autoplay: true,
  navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
  responsive: {
    0: {
      items: 3,
      margin: 30
    },
    576: {
      items: 4
    },
    768: {
      items: 5
    },
    1200: {
      items: 6
    }
  }
};

class Partner extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      display: false,
      panel: true
    });
  }

  componentDidMount() {
    this.setState({
      display: true
    });
  }

  render() {
    return __jsx("div", {
      className: "partner-area"
    }, __jsx("div", {
      className: "container"
    }, this.state.display ? __jsx(OwlCarousel, _extends({
      className: "partner-slides owl-carousel owl-theme"
    }, options), __jsx("div", {
      className: "partner-item"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      target: "_blank"
    }, __jsx("img", {
      src: __webpack_require__("c/yp"),
      alt: "image"
    })))), __jsx("div", {
      className: "partner-item"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      target: "_blank"
    }, __jsx("img", {
      src: __webpack_require__("XvS8"),
      alt: "image"
    })))), __jsx("div", {
      className: "partner-item"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      target: "_blank"
    }, __jsx("img", {
      src: __webpack_require__("kcT6"),
      alt: "image"
    })))), __jsx("div", {
      className: "partner-item"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      target: "_blank"
    }, __jsx("img", {
      src: __webpack_require__("j6G5"),
      alt: "image"
    })))), __jsx("div", {
      className: "partner-item"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      target: "_blank"
    }, __jsx("img", {
      src: __webpack_require__("UvRT"),
      alt: "image"
    })))), __jsx("div", {
      className: "partner-item"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      target: "_blank"
    }, __jsx("img", {
      src: __webpack_require__("Qd5l"),
      alt: "image"
    }))))) : ''));
  }

}

/* harmony default export */ __webpack_exports__["a"] = (Partner);

/***/ }),

/***/ "soiT":
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ "t+4a":
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ "tB13":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/news-img3-8bf8408a538f123cd52fc5963ab7cc8d.jpg";

/***/ }),

/***/ "v6Hh":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class Footer extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("footer", {
      className: "footer-area"
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "row"
    }, __jsx("div", {
      className: "col-lg-3 col-md-6"
    }, __jsx("div", {
      className: "single-footer-widget"
    }, __jsx("div", {
      className: "logo"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/"
    }, __jsx("a", null, __jsx("img", {
      src: __webpack_require__("Cc5c"),
      alt: "logo"
    })))), __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida."))), __jsx("div", {
      className: "col-lg-3 col-md-6"
    }, __jsx("div", {
      className: "single-footer-widget"
    }, __jsx("h3", null, "Quick Links"), __jsx("ul", {
      className: "quick-links"
    }, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/about"
    }, __jsx("a", null, "About Us"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/faq"
    }, __jsx("a", null, "Faq's"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/customer-service"
    }, __jsx("a", null, "Customer Services"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/contact-us"
    }, __jsx("a", null, "Contact Us")))))), __jsx("div", {
      className: "col-lg-3 col-md-6"
    }, __jsx("div", {
      className: "single-footer-widget"
    }, __jsx("h3", null, "Information"), __jsx("ul", {
      className: "information-links"
    }, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/about"
    }, __jsx("a", null, "About Us"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/contact-us"
    }, __jsx("a", null, "Contact Us"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/sizing-guide"
    }, __jsx("a", null, "Sizing Guide"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/customer-service"
    }, __jsx("a", null, "Customer Services")))))), __jsx("div", {
      className: "col-lg-3 col-md-6"
    }, __jsx("div", {
      className: "single-footer-widget"
    }, __jsx("h3", null, "Contact Us"), __jsx("ul", {
      className: "footer-contact-info"
    }, __jsx("li", null, __jsx("i", {
      className: "fas fa-map-marker-alt"
    }), "Location: 2750 Quadra Street ", __jsx("br", null), " Victoria, Canada"), __jsx("li", null, __jsx("i", {
      className: "fas fa-phone"
    }), "Call Us: ", __jsx("a", {
      href: "tel:(+123) 456-7898"
    }, "(+123) 456-7898")), __jsx("li", null, __jsx("i", {
      className: "far fa-envelope"
    }), "Email Us: ", __jsx("a", {
      href: "mailto:support@novine.com"
    }, "support@novine.com")), __jsx("li", null, __jsx("i", {
      className: "fas fa-fax"
    }), "Fax: ", __jsx("a", {
      href: "tel:+123456"
    }, "+123456"))))))), __jsx("div", {
      className: "copyright-area"
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "row align-items-center"
    }, __jsx("div", {
      className: "col-lg-6 col-md-6"
    }, __jsx("p", null, "Copyright @ 2020 Novine. All Rights Reserved By ", __jsx("a", {
      href: "https://envytheme.com/",
      target: "_blank"
    }, "EnvyTheme.com"))), __jsx("div", {
      className: "col-lg-6 col-md-6"
    }, __jsx("ul", {
      className: "payment-card"
    }, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      target: "_blank"
    }, __jsx("img", {
      src: __webpack_require__("rfic"),
      alt: "image"
    })))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      target: "_blank"
    }, __jsx("img", {
      src: __webpack_require__("VBb8"),
      alt: "image"
    })))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      target: "_blank"
    }, __jsx("img", {
      src: __webpack_require__("WqZz"),
      alt: "image"
    })))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      target: "_blank"
    }, __jsx("img", {
      src: __webpack_require__("bDUz"),
      alt: "image"
    })))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      target: "_blank"
    }, __jsx("img", {
      src: __webpack_require__("lOc8"),
      alt: "image"
    }))))))))));
  }

}

/* harmony default export */ __webpack_exports__["a"] = (Footer);

/***/ }),

/***/ "vxDo":
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAAQABAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/wAALCAA/AD8BAREA/8QAGgABAAIDAQAAAAAAAAAAAAAAAAMHBAUGCP/EACEQAAEFAAMBAQEBAQAAAAAAAAIAAQMEBQYREgcTFCMi/9oACAEBAAA/APUCIiIiIiIiIiIiIiIiKkOIfaeWc31ZIcCfjTjpBqBkULtO/Vf3WMgiJ7rsUFp38+pYohY4mLrsvLusrK+9jgQ7xfSQf+TD1gzZdanjz0QjY6zSxnNTnkOxGByeoY5G9jKbj56Z2dY3Ifu+xByg8qhDRwYc6pl2b9bdzbUsrHbJ3eKaxVIoaDCDCzSy/oJSE4t0wO79Jnc65pU+rVeC8mjyHrala9artWo2of5xhMPxFrcxflckOMnI44gF4vL99szE9lIiKt5PhPGJjKGXe5A+dCV6XNz47ccMWXNb9/tLXOOMZmL/AFl8+5DEGN2FmbpmjufA+K7pzycy3Nzkv98kZ6I6MkAhfGKIwrxyhBFGPiJ5ZJAYWH/QvZeiEXaa/wDEMXThetd5ZySWK5Qq5u0JT13fbgruX5taJ4fXp2MhIonjIhfonfputjlfLMzM5FU35+R72lHlz27OXQvWI5K+fLY9NKUbtG0p/wDJyCLSyGwCbsLM3XXaoiIiIiIiIiIiIiIiIv/Z"

/***/ }),

/***/ "xKQ/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("/T1H");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const OwlCarousel = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, "q4RA", 7)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("q4RA")],
    modules: ['react-owl-carousel3']
  }
});
const options = {
  loop: true,
  nav: false,
  dots: false,
  autoplayHoverPause: true,
  autoplay: true,
  navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
  responsive: {
    0: {
      items: 3
    },
    576: {
      items: 4
    },
    768: {
      items: 6
    },
    1200: {
      items: 9
    }
  }
};

class InstagramPhoto extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      display: false,
      panel: true
    });
  }

  componentDidMount() {
    this.setState({
      display: true
    });
  }

  render() {
    return __jsx("div", {
      className: "instagram-area"
    }, this.state.display ? __jsx(OwlCarousel, _extends({
      className: "instagram-slides owl-carousel owl-theme"
    }, options), __jsx("div", {
      className: "instagram-box"
    }, __jsx("img", {
      src: __webpack_require__("soiT"),
      alt: "image"
    }), __jsx("div", {
      className: "icon"
    }, __jsx("i", {
      className: "fab fa-instagram"
    })), __jsx("a", {
      target: "_blank",
      href: "https://www.instagram.com/"
    })), __jsx("div", {
      className: "instagram-box"
    }, __jsx("img", {
      src: __webpack_require__("0dsk"),
      alt: "image"
    }), __jsx("div", {
      className: "icon"
    }, __jsx("i", {
      className: "fab fa-instagram"
    })), __jsx("a", {
      target: "_blank",
      href: "https://www.instagram.com/"
    })), __jsx("div", {
      className: "instagram-box"
    }, __jsx("img", {
      src: __webpack_require__("5F07"),
      alt: "image"
    }), __jsx("div", {
      className: "icon"
    }, __jsx("i", {
      className: "fab fa-instagram"
    })), __jsx("a", {
      target: "_blank",
      href: "https://www.instagram.com/"
    })), __jsx("div", {
      className: "instagram-box"
    }, __jsx("img", {
      src: __webpack_require__("+yQG"),
      alt: "image"
    }), __jsx("div", {
      className: "icon"
    }, __jsx("i", {
      className: "fab fa-instagram"
    })), __jsx("a", {
      target: "_blank",
      href: "https://www.instagram.com/"
    })), __jsx("div", {
      className: "instagram-box"
    }, __jsx("img", {
      src: __webpack_require__("7R5c"),
      alt: "image"
    }), __jsx("div", {
      className: "icon"
    }, __jsx("i", {
      className: "fab fa-instagram"
    })), __jsx("a", {
      target: "_blank",
      href: "https://www.instagram.com/"
    })), __jsx("div", {
      className: "instagram-box"
    }, __jsx("img", {
      src: __webpack_require__("J2dG"),
      alt: "image"
    }), __jsx("div", {
      className: "icon"
    }, __jsx("i", {
      className: "fab fa-instagram"
    })), __jsx("a", {
      target: "_blank",
      href: "https://www.instagram.com/"
    })), __jsx("div", {
      className: "instagram-box"
    }, __jsx("img", {
      src: __webpack_require__("MZms"),
      alt: "image"
    }), __jsx("div", {
      className: "icon"
    }, __jsx("i", {
      className: "fab fa-instagram"
    })), __jsx("a", {
      target: "_blank",
      href: "https://www.instagram.com/"
    })), __jsx("div", {
      className: "instagram-box"
    }, __jsx("img", {
      src: __webpack_require__("t+4a"),
      alt: "image"
    }), __jsx("div", {
      className: "icon"
    }, __jsx("i", {
      className: "fab fa-instagram"
    })), __jsx("a", {
      target: "_blank",
      href: "https://www.instagram.com/"
    })), __jsx("div", {
      className: "instagram-box"
    }, __jsx("img", {
      src: __webpack_require__("MbYI"),
      alt: "image"
    }), __jsx("div", {
      className: "icon"
    }, __jsx("i", {
      className: "fab fa-instagram"
    })), __jsx("a", {
      target: "_blank",
      href: "https://www.instagram.com/"
    }))) : '');
  }

}

/* harmony default export */ __webpack_exports__["a"] = (InstagramPhoto);

/***/ }),

/***/ "yfoo":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/news-img1-8bf8408a538f123cd52fc5963ab7cc8d.jpg";

/***/ }),

/***/ "zCU4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./components/Layout/TopPanel.js
var TopPanel = __webpack_require__("Ct29");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: ./components/Modal/Wishlist.js
var Wishlist = __webpack_require__("ZSjW");

// CONCATENATED MODULE: ./components/Layout/TopHeader.js
var __jsx = external_react_default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class TopHeader_TopHeader extends external_react_["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      display: false
    });

    _defineProperty(this, "handleWishlist", () => {
      this.setState(prevState => {
        return {
          display: !prevState.display
        };
      });
    });
  }

  render() {
    return __jsx(external_react_default.a.Fragment, null, __jsx("div", {
      className: "top-header"
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "row align-items-center"
    }, __jsx("div", {
      className: "col-lg-7 col-md-6"
    }, __jsx("ul", {
      className: "top-header-nav"
    }, __jsx("li", null, __jsx(link_default.a, {
      href: "/about"
    }, __jsx("a", null, "About"))), __jsx("li", null, __jsx(link_default.a, {
      href: "/"
    }, __jsx("a", null, "Our Stores"))), __jsx("li", null, __jsx(link_default.a, {
      href: "/faq"
    }, __jsx("a", null, "FAQ's"))), __jsx("li", null, __jsx(link_default.a, {
      href: "/contact-us"
    }, __jsx("a", null, "Contact"))))), __jsx("div", {
      className: "col-lg-5 col-md-6"
    }, __jsx("ul", {
      className: "top-header-right-nav"
    }, __jsx("li", null, __jsx(link_default.a, {
      href: "#"
    }, __jsx("a", {
      "data-toggle": "modal",
      "data-target": "#shoppingWishlistModal",
      onClick: e => {
        e.preventDefault();
        this.handleWishlist();
      }
    }, "Wishlist ", __jsx("i", {
      className: "far fa-heart"
    })))), __jsx("li", null, __jsx(link_default.a, {
      href: "/compare"
    }, __jsx("a", null, "Compare ", __jsx("i", {
      className: "fas fa-balance-scale"
    })))), __jsx("li", null, __jsx("div", {
      className: "languages-list"
    }, __jsx("select", null, __jsx("option", {
      value: "1"
    }, "Eng"), __jsx("option", {
      value: "2"
    }, "Ger"), __jsx("option", {
      value: "3"
    }, "Span"))))))))), this.state.display ? __jsx(Wishlist["a" /* default */], {
      onClick: this.handleWishlist
    }) : '');
  }

}

/* harmony default export */ var Layout_TopHeader = (TopHeader_TopHeader);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./components/Modal/Cart.js
var Cart = __webpack_require__("bJnk");

// CONCATENATED MODULE: ./components/Layout/MegaMenu.js
var MegaMenu_jsx = external_react_default.a.createElement;

function MegaMenu_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class MegaMenu_MegaMenu extends external_react_["Component"] {
  constructor(...args) {
    super(...args);

    MegaMenu_defineProperty(this, "state", {
      display: false,
      searchForm: false,
      collapsed: true
    });

    MegaMenu_defineProperty(this, "handleCart", () => {
      this.setState(prevState => {
        return {
          display: !prevState.display
        };
      });
    });

    MegaMenu_defineProperty(this, "handleSearchForm", () => {
      this.setState(prevState => {
        return {
          searchForm: !prevState.searchForm
        };
      });
    });

    MegaMenu_defineProperty(this, "toggleNavbar", () => {
      this.setState({
        collapsed: !this.state.collapsed
      });
    });
  }

  componentDidMount() {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
    window.scrollTo(0, 0);
  }

  render() {
    const {
      collapsed
    } = this.state;
    const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
    let {
      products
    } = this.props;
    return MegaMenu_jsx(external_react_default.a.Fragment, null, MegaMenu_jsx("div", {
      className: "navbar-area"
    }, MegaMenu_jsx("div", {
      id: "navbar",
      className: "comero-nav"
    }, MegaMenu_jsx("div", {
      className: "container"
    }, MegaMenu_jsx("nav", {
      className: "navbar navbar-expand-md navbar-light"
    }, MegaMenu_jsx(link_default.a, {
      href: "/"
    }, MegaMenu_jsx("a", {
      className: "navbar-brand"
    }, MegaMenu_jsx("img", {
      src: __webpack_require__("Cc5c"),
      alt: "logo"
    }))), MegaMenu_jsx("button", {
      onClick: this.toggleNavbar,
      className: classTwo,
      type: "button",
      "data-toggle": "collapse",
      "data-target": "#navbarSupportedContent",
      "aria-controls": "navbarSupportedContent",
      "aria-expanded": "false",
      "aria-label": "Toggle navigation"
    }, MegaMenu_jsx("span", {
      className: "navbar-toggler-icon"
    })), MegaMenu_jsx("div", {
      className: classOne,
      id: "navbarSupportedContent"
    }, MegaMenu_jsx("ul", {
      className: "navbar-nav"
    }, MegaMenu_jsx("li", {
      className: "nav-item p-relative"
    }, MegaMenu_jsx(link_default.a, {
      href: "#"
    }, MegaMenu_jsx("a", {
      className: "nav-link active"
    }, "Home ", MegaMenu_jsx("i", {
      className: "fas fa-chevron-down"
    }))), MegaMenu_jsx("ul", {
      className: "dropdown-menu"
    }, MegaMenu_jsx("li", {
      className: "nav-item"
    }, MegaMenu_jsx(link_default.a, {
      href: "/"
    }, MegaMenu_jsx("a", {
      className: "nav-link active"
    }, "Home One"))), MegaMenu_jsx("li", {
      className: "nav-item"
    }, MegaMenu_jsx(link_default.a, {
      href: "/shop-style-two"
    }, MegaMenu_jsx("a", {
      className: "nav-link"
    }, "Home Two"))), MegaMenu_jsx("li", {
      className: "nav-item"
    }, MegaMenu_jsx(link_default.a, {
      href: "/shop-style-three"
    }, MegaMenu_jsx("a", {
      className: "nav-link"
    }, "Home Three"))), MegaMenu_jsx("li", {
      className: "nav-item"
    }, MegaMenu_jsx(link_default.a, {
      href: "/shop-style-four"
    }, MegaMenu_jsx("a", {
      className: "nav-link"
    }, "Home Four"))), MegaMenu_jsx("li", {
      className: "nav-item"
    }, MegaMenu_jsx(link_default.a, {
      href: "/shop-style-five"
    }, MegaMenu_jsx("a", {
      className: "nav-link"
    }, "Home Five"))), MegaMenu_jsx("li", {
      className: "nav-item"
    }, MegaMenu_jsx(link_default.a, {
      href: "/shop-style-six"
    }, MegaMenu_jsx("a", {
      className: "nav-link"
    }, "Home Six"))), MegaMenu_jsx("li", {
      className: "nav-item"
    }, MegaMenu_jsx(link_default.a, {
      href: "/shop-style-seven"
    }, MegaMenu_jsx("a", {
      className: "nav-link"
    }, "Home Seven"))), MegaMenu_jsx("li", {
      className: "nav-item"
    }, MegaMenu_jsx(link_default.a, {
      href: "/shop-style-eight"
    }, MegaMenu_jsx("a", {
      className: "nav-link"
    }, "Home Eight"))), MegaMenu_jsx("li", {
      className: "nav-item"
    }, MegaMenu_jsx(link_default.a, {
      href: "/shop-style-nine"
    }, MegaMenu_jsx("a", {
      className: "nav-link"
    }, "Home Nine"))), MegaMenu_jsx("li", {
      className: "nav-item"
    }, MegaMenu_jsx(link_default.a, {
      href: "/shop-style-ten"
    }, MegaMenu_jsx("a", {
      className: "nav-link"
    }, "Home Ten"))), MegaMenu_jsx("li", {
      className: "nav-item"
    }, MegaMenu_jsx(link_default.a, {
      href: "/shop-style-eleven"
    }, MegaMenu_jsx("a", {
      className: "nav-link"
    }, "Home Eleven"))), MegaMenu_jsx("li", {
      className: "nav-item"
    }, MegaMenu_jsx(link_default.a, {
      href: "/covid-19"
    }, MegaMenu_jsx("a", {
      className: "nav-link"
    }, "Covid-19", MegaMenu_jsx("span", {
      className: "new"
    }, "New")))), MegaMenu_jsx("li", {
      className: "nav-item"
    }, MegaMenu_jsx(link_default.a, {
      href: "/grocery"
    }, MegaMenu_jsx("a", {
      className: "nav-link"
    }, "Grocery", MegaMenu_jsx("span", {
      className: "new"
    }, "New")))), MegaMenu_jsx("li", {
      className: "nav-item"
    }, MegaMenu_jsx(link_default.a, {
      href: "/electronics"
    }, MegaMenu_jsx("a", {
      className: "nav-link"
    }, "Electronics", MegaMenu_jsx("span", {
      className: "new"
    }, "New")))), MegaMenu_jsx("li", {
      className: "nav-item"
    }, MegaMenu_jsx(link_default.a, {
      href: "/furniture"
    }, MegaMenu_jsx("a", {
      className: "nav-link"
    }, "Furniture", MegaMenu_jsx("span", {
      className: "new"
    }, "New")))))), MegaMenu_jsx("li", {
      className: "nav-item megamenu"
    }, MegaMenu_jsx(link_default.a, {
      href: "#"
    }, MegaMenu_jsx("a", {
      className: "nav-link"
    }, "Shop ", MegaMenu_jsx("i", {
      className: "fas fa-chevron-down"
    }))), MegaMenu_jsx("ul", {
      className: "dropdown-menu"
    }, MegaMenu_jsx("li", {
      className: "nav-item"
    }, MegaMenu_jsx("div", {
      className: "container"
    }, MegaMenu_jsx("div", {
      className: "row"
    }, MegaMenu_jsx("div", {
      className: "col"
    }, MegaMenu_jsx("h6", {
      className: "submenu-title"
    }, "Collection Layouts"), MegaMenu_jsx("ul", {
      className: "megamenu-submenu"
    }, MegaMenu_jsx("li", null, MegaMenu_jsx(link_default.a, {
      href: "/collections-style-one"
    }, MegaMenu_jsx("a", null, "Collections Type 1"))), MegaMenu_jsx("li", null, MegaMenu_jsx(link_default.a, {
      href: "/collections-style-two"
    }, MegaMenu_jsx("a", null, "Collections Type 2"))), MegaMenu_jsx("li", null, MegaMenu_jsx(link_default.a, {
      href: "/category-left-sidebar"
    }, MegaMenu_jsx("a", null, "Left Sidebar"))), MegaMenu_jsx("li", null, MegaMenu_jsx(link_default.a, {
      href: "/category-left-sidebar-with-block"
    }, MegaMenu_jsx("a", null, "Left Sidebar With HTML Block"))), MegaMenu_jsx("li", null, MegaMenu_jsx(link_default.a, {
      href: "/category-right-sidebar"
    }, MegaMenu_jsx("a", null, "Right Sidebar"))), MegaMenu_jsx("li", null, MegaMenu_jsx(link_default.a, {
      href: "/category-right-sidebar-with-block"
    }, MegaMenu_jsx("a", null, "Right Sidebar With HTML Block"))), MegaMenu_jsx("li", null, MegaMenu_jsx(link_default.a, {
      href: "/category-without-sidebar"
    }, MegaMenu_jsx("a", null, "Without Sidebar"))), MegaMenu_jsx("li", null, MegaMenu_jsx(link_default.a, {
      href: "/category-sidebar-fullwidth"
    }, MegaMenu_jsx("a", null, "With Sidebar Full Width"))), MegaMenu_jsx("li", null, MegaMenu_jsx(link_default.a, {
      href: "/category-without-sidebar-fullwidth"
    }, MegaMenu_jsx("a", null, "Without Sidebar Full Width"))))), MegaMenu_jsx("div", {
      className: "col"
    }, MegaMenu_jsx("h6", {
      className: "submenu-title"
    }, "Other Pages"), MegaMenu_jsx("ul", {
      className: "megamenu-submenu"
    }, MegaMenu_jsx("li", null, MegaMenu_jsx(link_default.a, {
      href: "/cart"
    }, MegaMenu_jsx("a", null, "Cart"))), MegaMenu_jsx("li", null, MegaMenu_jsx(link_default.a, {
      href: "/checkout"
    }, MegaMenu_jsx("a", null, "Checkout"))), MegaMenu_jsx("li", null, MegaMenu_jsx(link_default.a, {
      href: "/compare"
    }, MegaMenu_jsx("a", null, "Compare"))), MegaMenu_jsx("li", null, MegaMenu_jsx(link_default.a, {
      href: "/login"
    }, MegaMenu_jsx("a", null, "Login"))), MegaMenu_jsx("li", null, MegaMenu_jsx(link_default.a, {
      href: "/signup"
    }, MegaMenu_jsx("a", null, "Signup"))), MegaMenu_jsx("li", null, MegaMenu_jsx(link_default.a, {
      href: "/customer-service"
    }, MegaMenu_jsx("a", null, "Customer Service"))))), MegaMenu_jsx("div", {
      className: "col"
    }, MegaMenu_jsx("h6", {
      className: "submenu-title"
    }, "Top Brands"), MegaMenu_jsx("ul", {
      className: "megamenu-submenu top-brands"
    }, MegaMenu_jsx("li", null, MegaMenu_jsx(link_default.a, {
      href: "#"
    }, MegaMenu_jsx("a", null, MegaMenu_jsx("img", {
      src: __webpack_require__("c/yp"),
      alt: "image"
    })))), MegaMenu_jsx("li", null, MegaMenu_jsx(link_default.a, {
      href: "#"
    }, MegaMenu_jsx("a", null, MegaMenu_jsx("img", {
      src: __webpack_require__("XvS8"),
      alt: "image"
    })))), MegaMenu_jsx("li", null, MegaMenu_jsx(link_default.a, {
      href: "#"
    }, MegaMenu_jsx("a", null, MegaMenu_jsx("img", {
      src: __webpack_require__("kcT6"),
      alt: "image"
    })))), MegaMenu_jsx("li", null, MegaMenu_jsx(link_default.a, {
      href: "#"
    }, MegaMenu_jsx("a", null, MegaMenu_jsx("img", {
      src: __webpack_require__("j6G5"),
      alt: "image"
    })))), MegaMenu_jsx("li", null, MegaMenu_jsx(link_default.a, {
      href: "#"
    }, MegaMenu_jsx("a", null, MegaMenu_jsx("img", {
      src: __webpack_require__("UvRT"),
      alt: "image"
    })))), MegaMenu_jsx("li", null, MegaMenu_jsx(link_default.a, {
      href: "#"
    }, MegaMenu_jsx("a", null, MegaMenu_jsx("img", {
      src: __webpack_require__("Qd5l"),
      alt: "image"
    }))))))))))), MegaMenu_jsx("li", {
      className: "nav-item megamenu"
    }, MegaMenu_jsx(link_default.a, {
      href: "#"
    }, MegaMenu_jsx("a", {
      className: "nav-link"
    }, "Women's ", MegaMenu_jsx("i", {
      className: "fas fa-chevron-down"
    }))), MegaMenu_jsx("ul", {
      className: "dropdown-menu"
    }, MegaMenu_jsx("li", {
      className: "nav-item"
    }, MegaMenu_jsx("div", {
      className: "container"
    }, MegaMenu_jsx("div", {
      className: "row"
    }, MegaMenu_jsx("div", {
      className: "col"
    }, MegaMenu_jsx("h6", {
      className: "submenu-title"
    }, "Clothing"), MegaMenu_jsx("ul", {
      className: "megamenu-submenu"
    }, MegaMenu_jsx("li", null, MegaMenu_jsx(link_default.a, {
      href: "/category-without-sidebar-fullwidth"
    }, MegaMenu_jsx("a", null, "Coats"))), MegaMenu_jsx("li", null, MegaMenu_jsx(link_default.a, {
      href: "/category-sidebar-fullwidth"
    }, MegaMenu_jsx("a", null, "Jackets"))), MegaMenu_jsx("li", null, MegaMenu_jsx(link_default.a, {
      href: "/category-left-sidebar"
    }, MegaMenu_jsx("a", null, "Blazers"))), MegaMenu_jsx("li", null, MegaMenu_jsx(link_default.a, {
      href: "/category-left-sidebar-with-block"
    }, MegaMenu_jsx("a", null, "Dresses"))), MegaMenu_jsx("li", null, MegaMenu_jsx(link_default.a, {
      href: "/category-right-sidebar"
    }, MegaMenu_jsx("a", null, "Trousers"))), MegaMenu_jsx("li", null, MegaMenu_jsx(link_default.a, {
      href: "/category-right-sidebar-with-block"
    }, MegaMenu_jsx("a", null, "Jeans"))), MegaMenu_jsx("li", null, MegaMenu_jsx(link_default.a, {
      href: "/category-without-sidebar"
    }, MegaMenu_jsx("a", null, "Sweatshirts"))), MegaMenu_jsx("li", null, MegaMenu_jsx(link_default.a, {
      href: "/category-sidebar-fullwidth"
    }, MegaMenu_jsx("a", null, "T-Shirts"))))), MegaMenu_jsx("div", {
      className: "col"
    }, MegaMenu_jsx("h6", {
      className: "submenu-title"
    }, "Shoes"), MegaMenu_jsx("ul", {
      className: "megamenu-submenu"
    }, MegaMenu_jsx("li", null, MegaMenu_jsx(link_default.a, {
      href: "/category-without-sidebar-fullwidth"
    }, MegaMenu_jsx("a", null, "Trainers"))), MegaMenu_jsx("li", null, MegaMenu_jsx(link_default.a, {
      href: "/category-left-sidebar"
    }, MegaMenu_jsx("a", null, "Boots"))), MegaMenu_jsx("li", null, MegaMenu_jsx(link_default.a, {
      href: "/category-left-sidebar-with-block"
    }, MegaMenu_jsx("a", null, "Heels"))), MegaMenu_jsx("li", null, MegaMenu_jsx(link_default.a, {
      href: "/category-right-sidebar"
    }, MegaMenu_jsx("a", null, "Flats"))), MegaMenu_jsx("li", null, MegaMenu_jsx(link_default.a, {
      href: "/category-right-sidebar-with-block"
    }, MegaMenu_jsx("a", null, "Heeled Sandals"))), MegaMenu_jsx("li", null, MegaMenu_jsx(link_default.a, {
      href: "/category-without-sidebar"
    }, MegaMenu_jsx("a", null, "Platforms"))))), MegaMenu_jsx("div", {
      className: "col"
    }, MegaMenu_jsx("h6", {
      className: "submenu-title"
    }, "Accessories"), MegaMenu_jsx("ul", {
      className: "megamenu-submenu"
    }, MegaMenu_jsx("li", null, MegaMenu_jsx(link_default.a, {
      href: "/category-left-sidebar"
    }, MegaMenu_jsx("a", null, "Bags"))), MegaMenu_jsx("li", null, MegaMenu_jsx(link_default.a, {
      href: "/category-right-sidebar"
    }, MegaMenu_jsx("a", null, "Glasses"))), MegaMenu_jsx("li", null, MegaMenu_jsx(link_default.a, {
      href: "/category-right-sidebar-with-block"
    }, MegaMenu_jsx("a", null, "Jewellery"))), MegaMenu_jsx("li", null, MegaMenu_jsx(link_default.a, {
      href: "/category-without-sidebar"
    }, MegaMenu_jsx("a", null, "iPhone Cases"))), MegaMenu_jsx("li", null, MegaMenu_jsx(link_default.a, {
      href: "/category-sidebar-fullwidth"
    }, MegaMenu_jsx("a", null, "Gadgets"))), MegaMenu_jsx("li", null, MegaMenu_jsx(link_default.a, {
      href: "/category-sidebar-fullwidth"
    }, MegaMenu_jsx("a", null, "Hats & Beanie"))), MegaMenu_jsx("li", null, MegaMenu_jsx(link_default.a, {
      href: "/category-without-sidebar-fullwidth"
    }, MegaMenu_jsx("a", null, "Purses"))))), MegaMenu_jsx("div", {
      className: "col"
    }, MegaMenu_jsx("ul", {
      className: "megamenu-submenu"
    }, MegaMenu_jsx("li", null, MegaMenu_jsx("div", {
      className: "aside-trending-products"
    }, MegaMenu_jsx("img", {
      src: __webpack_require__("HLnt"),
      alt: "image"
    }), MegaMenu_jsx("div", {
      className: "category"
    }, MegaMenu_jsx("h4", null, "Top Trending")), MegaMenu_jsx("a", {
      href: "#"
    })), MegaMenu_jsx("div", {
      className: "aside-trending-products"
    }, MegaMenu_jsx("img", {
      src: __webpack_require__("Vc7u"),
      alt: "image"
    }), MegaMenu_jsx("div", {
      className: "category"
    }, MegaMenu_jsx("h4", null, "Popular Products")), MegaMenu_jsx("a", {
      href: "#"
    })))))))))), MegaMenu_jsx("li", {
      className: "nav-item megamenu"
    }, MegaMenu_jsx(link_default.a, {
      href: "#"
    }, MegaMenu_jsx("a", {
      className: "nav-link"
    }, "Men's ", MegaMenu_jsx("i", {
      className: "fas fa-chevron-down"
    }))), MegaMenu_jsx("ul", {
      className: "dropdown-menu"
    }, MegaMenu_jsx("li", {
      className: "nav-item"
    }, MegaMenu_jsx("div", {
      className: "container"
    }, MegaMenu_jsx("div", {
      className: "row"
    }, MegaMenu_jsx("div", {
      className: "col"
    }, MegaMenu_jsx("h6", {
      className: "submenu-title"
    }, "Clothing"), MegaMenu_jsx("ul", {
      className: "megamenu-submenu"
    }, MegaMenu_jsx("li", null, MegaMenu_jsx(link_default.a, {
      href: "/category-left-sidebar"
    }, MegaMenu_jsx("a", null, "Coats"))), MegaMenu_jsx("li", null, MegaMenu_jsx(link_default.a, {
      href: "/category-left-sidebar-with-block"
    }, MegaMenu_jsx("a", null, "Jackets"))), MegaMenu_jsx("li", null, MegaMenu_jsx(link_default.a, {
      href: "/category-right-sidebar"
    }, MegaMenu_jsx("a", null, "Jeans"))), MegaMenu_jsx("li", null, MegaMenu_jsx(link_default.a, {
      href: "/category-right-sidebar-with-block"
    }, MegaMenu_jsx("a", null, "T-Shirts"))), MegaMenu_jsx("li", null, MegaMenu_jsx(link_default.a, {
      href: "/category-sidebar-fullwidth"
    }, MegaMenu_jsx("a", null, "Sweatshirts"))), MegaMenu_jsx("li", null, MegaMenu_jsx(link_default.a, {
      href: "/category-without-sidebar"
    }, MegaMenu_jsx("a", null, "Knitwear"))), MegaMenu_jsx("li", null, MegaMenu_jsx(link_default.a, {
      href: "/category-sidebar-fullwidth"
    }, MegaMenu_jsx("a", null, "Shirts"))))), MegaMenu_jsx("div", {
      className: "col"
    }, MegaMenu_jsx("h6", {
      className: "submenu-title"
    }, "Shoes"), MegaMenu_jsx("ul", {
      className: "megamenu-submenu"
    }, MegaMenu_jsx("li", null, MegaMenu_jsx(link_default.a, {
      href: "/category-without-sidebar-fullwidth"
    }, MegaMenu_jsx("a", null, "Trainers"))), MegaMenu_jsx("li", null, MegaMenu_jsx(link_default.a, {
      href: "/category-sidebar-fullwidth"
    }, MegaMenu_jsx("a", null, "Boots"))), MegaMenu_jsx("li", null, MegaMenu_jsx(link_default.a, {
      href: "/category-left-sidebar"
    }, MegaMenu_jsx("a", null, "Heels"))), MegaMenu_jsx("li", null, MegaMenu_jsx(link_default.a, {
      href: "/category-left-sidebar-with-block"
    }, MegaMenu_jsx("a", null, "Flats"))), MegaMenu_jsx("li", null, MegaMenu_jsx(link_default.a, {
      href: "/category-right-sidebar"
    }, MegaMenu_jsx("a", null, "Heeled Sandals"))), MegaMenu_jsx("li", null, MegaMenu_jsx(link_default.a, {
      href: "/category-right-sidebar-with-block"
    }, MegaMenu_jsx("a", null, "Sandals"))), MegaMenu_jsx("li", null, MegaMenu_jsx(link_default.a, {
      href: "/category-left-sidebar-with-block"
    }, MegaMenu_jsx("a", null, "Platforms"))), MegaMenu_jsx("li", null, MegaMenu_jsx(link_default.a, {
      href: "/category-without-sidebar"
    }, MegaMenu_jsx("a", null, "Heeled Sandals"))))), MegaMenu_jsx("div", {
      className: "col"
    }, MegaMenu_jsx("h6", {
      className: "submenu-title"
    }, "Accessories"), MegaMenu_jsx("ul", {
      className: "megamenu-submenu"
    }, MegaMenu_jsx("li", null, MegaMenu_jsx(link_default.a, {
      href: "/category-without-sidebar"
    }, MegaMenu_jsx("a", null, "Bags"))), MegaMenu_jsx("li", null, MegaMenu_jsx(link_default.a, {
      href: "/category-left-sidebar"
    }, MegaMenu_jsx("a", null, "Backpacks"))), MegaMenu_jsx("li", null, MegaMenu_jsx(link_default.a, {
      href: "/category-right-sidebar"
    }, MegaMenu_jsx("a", null, "Glasses"))), MegaMenu_jsx("li", null, MegaMenu_jsx(link_default.a, {
      href: "/category-left-sidebar"
    }, MegaMenu_jsx("a", null, "Earrings"))), MegaMenu_jsx("li", null, MegaMenu_jsx(link_default.a, {
      href: "/category-sidebar-fullwidth"
    }, MegaMenu_jsx("a", null, "iPhone Cases"))), MegaMenu_jsx("li", null, MegaMenu_jsx(link_default.a, {
      href: "/category-right-sidebar"
    }, MegaMenu_jsx("a", null, "Mobile Accessories"))), MegaMenu_jsx("li", null, MegaMenu_jsx(link_default.a, {
      href: "/category-without-sidebar-fullwidth"
    }, MegaMenu_jsx("a", null, "Socks"))))), MegaMenu_jsx("div", {
      className: "col"
    }, MegaMenu_jsx("ul", {
      className: "megamenu-submenu"
    }, MegaMenu_jsx("li", null, MegaMenu_jsx("div", {
      className: "aside-trending-products"
    }, MegaMenu_jsx("img", {
      src: __webpack_require__("HLnt"),
      alt: "image"
    }), MegaMenu_jsx("div", {
      className: "category"
    }, MegaMenu_jsx("h4", null, "Top Trending")), MegaMenu_jsx(link_default.a, {
      href: "#"
    }, MegaMenu_jsx("a", null))), MegaMenu_jsx("div", {
      className: "aside-trending-products"
    }, MegaMenu_jsx("img", {
      src: __webpack_require__("Vc7u"),
      alt: "image"
    }), MegaMenu_jsx("div", {
      className: "category"
    }, MegaMenu_jsx("h4", null, "Popular Products")), MegaMenu_jsx(link_default.a, {
      href: "#"
    }, MegaMenu_jsx("a", null))))))))))), MegaMenu_jsx("li", {
      className: "nav-item megamenu"
    }, MegaMenu_jsx(link_default.a, {
      href: "#"
    }, MegaMenu_jsx("a", {
      className: "nav-link"
    }, "Today's Deals ", MegaMenu_jsx("i", {
      className: "fas fa-chevron-down"
    }))), MegaMenu_jsx("ul", {
      className: "dropdown-menu"
    }, MegaMenu_jsx("li", {
      className: "nav-item"
    }, MegaMenu_jsx("div", {
      className: "container"
    }, MegaMenu_jsx("div", {
      className: "row"
    }, MegaMenu_jsx("div", {
      className: "col"
    }, MegaMenu_jsx("h6", {
      className: "submenu-title"
    }, "Clothing"), MegaMenu_jsx("ul", {
      className: "megamenu-submenu"
    }, MegaMenu_jsx("li", null, MegaMenu_jsx(link_default.a, {
      href: "/category-left-sidebar"
    }, MegaMenu_jsx("a", null, "Coats"))), MegaMenu_jsx("li", null, MegaMenu_jsx(link_default.a, {
      href: "/category-left-sidebar-with-block"
    }, MegaMenu_jsx("a", null, "Jackets"))), MegaMenu_jsx("li", null, MegaMenu_jsx(link_default.a, {
      href: "/category-right-sidebar"
    }, MegaMenu_jsx("a", null, "Jeans"))), MegaMenu_jsx("li", null, MegaMenu_jsx(link_default.a, {
      href: "/category-right-sidebar-with-block"
    }, MegaMenu_jsx("a", null, "T-Shirts"))), MegaMenu_jsx("li", null, MegaMenu_jsx(link_default.a, {
      href: "/category-sidebar-fullwidth"
    }, MegaMenu_jsx("a", null, "Sweatshirts"))), MegaMenu_jsx("li", null, MegaMenu_jsx(link_default.a, {
      href: "/category-without-sidebar"
    }, MegaMenu_jsx("a", null, "Knitwear"))), MegaMenu_jsx("li", null, MegaMenu_jsx(link_default.a, {
      href: "/category-sidebar-fullwidth"
    }, MegaMenu_jsx("a", null, "Shirts"))))), MegaMenu_jsx("div", {
      className: "col"
    }, MegaMenu_jsx("h6", {
      className: "submenu-title"
    }, "Shoes"), MegaMenu_jsx("ul", {
      className: "megamenu-submenu"
    }, MegaMenu_jsx("li", null, MegaMenu_jsx(link_default.a, {
      href: "/category-without-sidebar-fullwidth"
    }, MegaMenu_jsx("a", null, "Trainers"))), MegaMenu_jsx("li", null, MegaMenu_jsx(link_default.a, {
      href: "/category-sidebar-fullwidth"
    }, MegaMenu_jsx("a", null, "Boots"))), MegaMenu_jsx("li", null, MegaMenu_jsx(link_default.a, {
      href: "/category-left-sidebar"
    }, MegaMenu_jsx("a", null, "Heels"))), MegaMenu_jsx("li", null, MegaMenu_jsx(link_default.a, {
      href: "/category-left-sidebar-with-block"
    }, MegaMenu_jsx("a", null, "Flats"))), MegaMenu_jsx("li", null, MegaMenu_jsx(link_default.a, {
      href: "/category-right-sidebar"
    }, MegaMenu_jsx("a", null, "Heeled Sandals"))), MegaMenu_jsx("li", null, MegaMenu_jsx(link_default.a, {
      href: "/category-right-sidebar-with-block"
    }, MegaMenu_jsx("a", null, "Sandals"))), MegaMenu_jsx("li", null, MegaMenu_jsx(link_default.a, {
      href: "/category-left-sidebar-with-block"
    }, MegaMenu_jsx("a", null, "Platforms"))), MegaMenu_jsx("li", null, MegaMenu_jsx(link_default.a, {
      href: "/category-without-sidebar"
    }, MegaMenu_jsx("a", null, "Heeled Sandals"))))), MegaMenu_jsx("div", {
      className: "col"
    }, MegaMenu_jsx("h6", {
      className: "submenu-title"
    }, "Accessories"), MegaMenu_jsx("ul", {
      className: "megamenu-submenu"
    }, MegaMenu_jsx("li", null, MegaMenu_jsx(link_default.a, {
      href: "/category-without-sidebar"
    }, MegaMenu_jsx("a", null, "Bags"))), MegaMenu_jsx("li", null, MegaMenu_jsx(link_default.a, {
      href: "/category-left-sidebar"
    }, MegaMenu_jsx("a", null, "Backpacks"))), MegaMenu_jsx("li", null, MegaMenu_jsx(link_default.a, {
      href: "/category-right-sidebar"
    }, MegaMenu_jsx("a", null, "Glasses"))), MegaMenu_jsx("li", null, MegaMenu_jsx(link_default.a, {
      href: "/category-left-sidebar"
    }, MegaMenu_jsx("a", null, "Earrings"))), MegaMenu_jsx("li", null, MegaMenu_jsx(link_default.a, {
      href: "/category-sidebar-fullwidth"
    }, MegaMenu_jsx("a", null, "iPhone Cases"))), MegaMenu_jsx("li", null, MegaMenu_jsx(link_default.a, {
      href: "/category-right-sidebar"
    }, MegaMenu_jsx("a", null, "Mobile Accessories"))), MegaMenu_jsx("li", null, MegaMenu_jsx(link_default.a, {
      href: "/category-without-sidebar-fullwidth"
    }, MegaMenu_jsx("a", null, "Socks"))))), MegaMenu_jsx("div", {
      className: "col"
    }, MegaMenu_jsx("ul", {
      className: "megamenu-submenu"
    }, MegaMenu_jsx("li", null, MegaMenu_jsx("div", {
      className: "aside-trending-products"
    }, MegaMenu_jsx("img", {
      src: __webpack_require__("HLnt"),
      alt: "image"
    }), MegaMenu_jsx("div", {
      className: "category"
    }, MegaMenu_jsx("h4", null, "Top Trending")), MegaMenu_jsx(link_default.a, {
      href: "#"
    }, MegaMenu_jsx("a", null))), MegaMenu_jsx("div", {
      className: "aside-trending-products"
    }, MegaMenu_jsx("img", {
      src: __webpack_require__("Vc7u"),
      alt: "image"
    }), MegaMenu_jsx("div", {
      className: "category"
    }, MegaMenu_jsx("h4", null, "Popular Products")), MegaMenu_jsx(link_default.a, {
      href: "#"
    }, MegaMenu_jsx("a", null))))))))))), MegaMenu_jsx("li", {
      className: "nav-item p-relative"
    }, MegaMenu_jsx(link_default.a, {
      href: "#"
    }, MegaMenu_jsx("a", {
      className: "nav-link"
    }, "Pages ", MegaMenu_jsx("i", {
      className: "fas fa-chevron-down"
    }))), MegaMenu_jsx("ul", {
      className: "dropdown-menu"
    }, MegaMenu_jsx("li", {
      className: "nav-item"
    }, MegaMenu_jsx(link_default.a, {
      href: "/about"
    }, MegaMenu_jsx("a", {
      className: "nav-link"
    }, "About Us"))), MegaMenu_jsx("li", {
      className: "nav-item"
    }, MegaMenu_jsx(link_default.a, {
      href: "/sizing-guide"
    }, MegaMenu_jsx("a", {
      className: "nav-link"
    }, "Sizing Guide"))), MegaMenu_jsx("li", {
      className: "nav-item"
    }, MegaMenu_jsx(link_default.a, {
      href: "/gallery"
    }, MegaMenu_jsx("a", {
      className: "nav-link"
    }, "Gallery"))), MegaMenu_jsx("li", {
      className: "nav-item"
    }, MegaMenu_jsx("a", {
      href: "#",
      className: "nav-link"
    }, "Account"), MegaMenu_jsx("ul", {
      className: "dropdown-menu"
    }, MegaMenu_jsx("li", {
      className: "nav-item"
    }, MegaMenu_jsx(link_default.a, {
      href: "/login"
    }, MegaMenu_jsx("a", {
      className: "nav-link"
    }, "Login"))), MegaMenu_jsx("li", {
      className: "nav-item"
    }, MegaMenu_jsx(link_default.a, {
      href: "/signup"
    }, MegaMenu_jsx("a", {
      className: "nav-link"
    }, "Signup"))), MegaMenu_jsx("li", {
      className: "nav-item"
    }, MegaMenu_jsx(link_default.a, {
      href: "/cart"
    }, MegaMenu_jsx("a", {
      className: "nav-link"
    }, "Cart"))))), MegaMenu_jsx("li", {
      className: "nav-item"
    }, MegaMenu_jsx(link_default.a, {
      href: "/cart"
    }, MegaMenu_jsx("a", {
      className: "nav-link"
    }, "Cart"))), MegaMenu_jsx("li", {
      className: "nav-item"
    }, MegaMenu_jsx(link_default.a, {
      href: "/checkout"
    }, MegaMenu_jsx("a", {
      className: "nav-link"
    }, "Checkout"))), MegaMenu_jsx("li", {
      className: "nav-item"
    }, MegaMenu_jsx(link_default.a, {
      href: "/compare"
    }, MegaMenu_jsx("a", {
      className: "nav-link"
    }, "Compare"))), MegaMenu_jsx("li", {
      className: "nav-item"
    }, MegaMenu_jsx(link_default.a, {
      href: "/customer-service"
    }, MegaMenu_jsx("a", {
      className: "nav-link"
    }, "Customer Service"))), MegaMenu_jsx("li", {
      className: "nav-item"
    }, MegaMenu_jsx(link_default.a, {
      href: "/login"
    }, MegaMenu_jsx("a", {
      className: "nav-link"
    }, "Login"))), MegaMenu_jsx("li", {
      className: "nav-item"
    }, MegaMenu_jsx(link_default.a, {
      href: "/signup"
    }, MegaMenu_jsx("a", {
      className: "nav-link"
    }, "Signup"))), MegaMenu_jsx("li", {
      className: "nav-item"
    }, MegaMenu_jsx(link_default.a, {
      href: "/faq"
    }, MegaMenu_jsx("a", {
      className: "nav-link"
    }, "FAQs"))), MegaMenu_jsx("li", {
      className: "nav-item"
    }, MegaMenu_jsx(link_default.a, {
      href: "/error"
    }, MegaMenu_jsx("a", {
      className: "nav-link"
    }, "Error 404"))), MegaMenu_jsx("li", {
      className: "nav-item"
    }, MegaMenu_jsx(link_default.a, {
      href: "/contact-us"
    }, MegaMenu_jsx("a", {
      className: "nav-link"
    }, "Contact Us"))))), MegaMenu_jsx("li", {
      className: "nav-item p-relative"
    }, MegaMenu_jsx(link_default.a, {
      href: "#"
    }, MegaMenu_jsx("a", {
      className: "nav-link"
    }, "Blog ", MegaMenu_jsx("i", {
      className: "fas fa-chevron-down"
    }))), MegaMenu_jsx("ul", {
      className: "dropdown-menu"
    }, MegaMenu_jsx("li", {
      className: "nav-item"
    }, MegaMenu_jsx(link_default.a, {
      href: "/blog"
    }, MegaMenu_jsx("a", {
      className: "nav-link"
    }, "Blog Grid (3 in Row)"))), MegaMenu_jsx("li", {
      className: "nav-item"
    }, MegaMenu_jsx(link_default.a, {
      href: "/blog2"
    }, MegaMenu_jsx("a", {
      className: "nav-link"
    }, "Blog Grid (2 in Row)"))), MegaMenu_jsx("li", {
      className: "nav-item"
    }, MegaMenu_jsx(link_default.a, {
      href: "/blog3"
    }, MegaMenu_jsx("a", {
      className: "nav-link"
    }, "Blog Grid (1 in Row)"))), MegaMenu_jsx("li", {
      className: "nav-item"
    }, MegaMenu_jsx(link_default.a, {
      href: "/blog-details"
    }, MegaMenu_jsx("a", {
      className: "nav-link"
    }, "Blog Details")), MegaMenu_jsx(link_default.a, {
      href: "/blog-details-two"
    }, MegaMenu_jsx("a", {
      className: "nav-link"
    }, "Blog Details Two")), MegaMenu_jsx(link_default.a, {
      href: "/blog-details-three"
    }, MegaMenu_jsx("a", {
      className: "nav-link"
    }, "Blog Details Three")))))), MegaMenu_jsx("div", {
      className: "others-option"
    }, MegaMenu_jsx("div", {
      className: "option-item"
    }, MegaMenu_jsx("i", {
      onClick: this.handleSearchForm,
      className: "search-btn fas fa-search",
      style: {
        display: this.state.searchForm ? 'none' : 'block'
      }
    }), MegaMenu_jsx("i", {
      onClick: this.handleSearchForm,
      className: `close-btn fas fa-times ${this.state.searchForm ? 'active' : ''}`
    }), MegaMenu_jsx("div", {
      className: "search-overlay search-popup",
      style: {
        display: this.state.searchForm ? 'block' : 'none'
      }
    }, MegaMenu_jsx("div", {
      className: "search-box"
    }, MegaMenu_jsx("form", {
      className: "search-form"
    }, MegaMenu_jsx("input", {
      className: "search-input",
      name: "search",
      placeholder: "Search",
      type: "text"
    }), MegaMenu_jsx("button", {
      className: "search-button",
      type: "submit"
    }, MegaMenu_jsx("i", {
      className: "fas fa-search"
    })))))), MegaMenu_jsx("div", {
      className: "option-item"
    }, MegaMenu_jsx(link_default.a, {
      href: "#"
    }, MegaMenu_jsx("a", {
      onClick: e => {
        e.preventDefault();
        this.handleCart();
      }
    }, "Cart(", products.length, ") ", MegaMenu_jsx("i", {
      className: "fas fa-shopping-bag"
    })))))))))), this.state.display ? MegaMenu_jsx(Cart["a" /* default */], {
      onClick: this.handleCart
    }) : '');
  }

}

const mapStateToProps = state => {
  return {
    products: state.addedItems
  };
};

/* harmony default export */ var Layout_MegaMenu = (Object(external_react_redux_["connect"])(mapStateToProps)(MegaMenu_MegaMenu));
// CONCATENATED MODULE: ./components/Layout/Navbar.js
var Navbar_jsx = external_react_default.a.createElement;





class Navbar_Navbar extends external_react_["Component"] {
  render() {
    return Navbar_jsx(external_react_default.a.Fragment, null, Navbar_jsx(Layout_MegaMenu, null));
  }

}

/* harmony default export */ var Layout_Navbar = __webpack_exports__["a"] = (Navbar_Navbar);

/***/ })

/******/ });