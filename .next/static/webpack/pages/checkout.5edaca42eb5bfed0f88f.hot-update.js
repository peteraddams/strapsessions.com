webpackHotUpdate_N_E("pages/checkout",{

/***/ "./components/checkout/CheckoutForm.js":
/*!*********************************************!*\
  !*** ./components/checkout/CheckoutForm.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _OrderSummary__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./OrderSummary */ "./components/checkout/OrderSummary.js");
/* harmony import */ var _userForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./userForm */ "./components/checkout/userForm.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
var _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





 // get our fontawesome imports




function CheckoutForm(_ref) {
  _s();

  var total = _ref.total,
      shipping = _ref.shipping;

  function handleOnSubmit(e) {
    e.preventDefault();
    return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("https://coinbase-backend.herokuapp.com/checkout?total=".concat(totalAmount, "&name=").concat(state.firstName.value)).then(function (res) {
      console.log(res.data);
      redirect(res.data);
    });
  }

  function redirect(url) {
    if (url) return window.open(url, "_blank");
  }

  var totalAmount = (total + shipping).toFixed(2);
  var stateSchema = {
    firstName: {
      value: "",
      error: ""
    },
    lastName: {
      value: "",
      error: ""
    },
    address: {
      value: "",
      error: ""
    },
    city: {
      value: "",
      error: ""
    },
    state: {
      value: "",
      error: ""
    },
    zip: {
      value: "",
      error: ""
    },
    email: {
      value: "",
      error: ""
    },
    phone: {
      value: "",
      error: ""
    }
  };
  var validationStateSchema = {
    firstName: {
      required: true,
      validator: {
        regEx: /^[a-zA-Z]+$/,
        error: "Invalid first name format."
      }
    },
    lastName: {
      required: true,
      validator: {
        regEx: /^[a-zA-Z]+$/,
        error: "Invalid last name format."
      }
    },
    address: {
      required: true,
      validator: {
        error: "Invalid address format."
      }
    },
    city: {
      required: true,
      validator: {
        error: "Invalid last name format."
      }
    },
    state: {
      required: true,
      validator: {
        error: "Invalid last name format."
      }
    },
    zip: {
      required: true,
      validator: {
        regEx: /^\d{5}$|^\d{5}-\d{4}$/,
        error: "Invalid zip format, use like 12345."
      }
    },
    email: {
      required: true,
      validator: {
        regEx: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        error: "Invalid email format."
      }
    },
    phone: {
      required: true,
      validator: {
        regEx: /^\+[0-9]?()[0-9](\s|\S)(\d[0-9]{9})$/,
        error: "Invalid phone number format use like +2923432432432."
      }
    }
  };

  var _useForm = Object(_userForm__WEBPACK_IMPORTED_MODULE_5__["default"])(stateSchema, validationStateSchema),
      state = _useForm.state,
      handleOnChange = _useForm.handleOnChange,
      disable = _useForm.disable;

  var errorStyle = {
    color: "red",
    fontSize: "13px"
  };
  return __jsx("section", {
    className: "checkout-area ptb-60"
  }, __jsx("div", {
    className: "container"
  }, __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-lg-12 col-md-12"
  })), __jsx("form", {
    onSubmit: handleOnSubmit
  }, __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-lg-6 col-md-12"
  }, __jsx("div", {
    className: "billing-details"
  }, __jsx("h3", {
    className: "title"
  }, "Billing Details"), __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-lg-6 col-md-6"
  }, __jsx("div", {
    className: "form-group"
  }, __jsx("label", null, "First Name ", __jsx("span", {
    className: "required"
  }, "*")), __jsx("input", {
    type: "text",
    name: "firstName",
    className: "form-control",
    onChange: handleOnChange,
    value: state.firstName.value
  }), state.firstName.error && __jsx("p", {
    style: errorStyle
  }, state.firstName.error))), __jsx("div", {
    className: "col-lg-6 col-md-6"
  }, __jsx("div", {
    className: "form-group"
  }, __jsx("label", null, "Last Name ", __jsx("span", {
    className: "required"
  }, "*")), __jsx("input", {
    type: "text",
    name: "lastName",
    className: "form-control",
    onChange: handleOnChange,
    value: state.lastName.value
  }), state.lastName.error && __jsx("p", {
    style: errorStyle
  }, state.lastName.error))), __jsx("div", {
    className: "col-lg-12 col-md-6"
  }, __jsx("div", {
    className: "form-group"
  }, __jsx("label", null, "Address ", __jsx("span", {
    className: "required"
  }, "*")), __jsx("input", {
    type: "text",
    name: "address",
    className: "form-control",
    onChange: handleOnChange,
    value: state.address.value
  }), state.address.error && __jsx("p", {
    style: errorStyle
  }, state.address.error))), __jsx("div", {
    className: "col-lg-12 col-md-6"
  }, __jsx("div", {
    className: "form-group"
  }, __jsx("label", null, "Town / City ", __jsx("span", {
    className: "required"
  }, "*")), __jsx("input", {
    type: "text",
    name: "city",
    className: "form-control",
    onChange: handleOnChange,
    value: state.city.value
  }), state.city.error && __jsx("p", {
    style: errorStyle
  }, state.city.error))), __jsx("div", {
    className: "col-lg-6 col-md-6"
  }, __jsx("div", {
    className: "form-group"
  }, __jsx("label", null, "State / County ", __jsx("span", {
    className: "required"
  }, "*")), __jsx("input", {
    type: "text",
    name: "state",
    className: "form-control",
    onChange: handleOnChange,
    value: state.state.value
  }), state.state.error && __jsx("p", {
    style: errorStyle
  }, state.state.error))), __jsx("div", {
    className: "col-lg-6 col-md-6"
  }, __jsx("div", {
    className: "form-group"
  }, __jsx("label", null, "Postcode / Zip ", __jsx("span", {
    className: "required"
  }, "*")), __jsx("input", {
    type: "text",
    name: "zip",
    className: "form-control",
    onChange: handleOnChange,
    value: state.zip.value
  }), state.zip.error && __jsx("p", {
    style: errorStyle
  }, state.zip.error))), __jsx("div", {
    className: "col-lg-6 col-md-6"
  }, __jsx("div", {
    className: "form-group"
  }, __jsx("label", null, "Email Address ", __jsx("span", {
    className: "required"
  }, "*")), __jsx("input", {
    type: "email",
    name: "email",
    className: "form-control",
    onChange: handleOnChange,
    value: state.email.value
  }), state.email.error && __jsx("p", {
    style: errorStyle
  }, state.email.error))), __jsx("div", {
    className: "col-lg-6 col-md-6"
  }, __jsx("div", {
    className: "form-group"
  }, __jsx("label", null, "Phone ", __jsx("span", {
    className: "required"
  }, "*")), __jsx("input", {
    type: "text",
    name: "phone",
    className: "form-control",
    onChange: handleOnChange,
    value: state.phone.value
  }), state.phone.error && __jsx("p", {
    style: errorStyle
  }, state.phone.error)))))), __jsx("div", {
    className: "col-lg-6 col-md-12"
  }, __jsx("div", {
    className: "order-details"
  }, __jsx("h3", {
    className: "title"
  }, "Your Order"), __jsx(_OrderSummary__WEBPACK_IMPORTED_MODULE_4__["default"], null), __jsx("br", null), __jsx("div", {
    style: {
      color: "red"
    }
  }, "Card Services Are Temporarily Disabled In Your Region, Please Use the Available Payment Method Below"), __jsx("div", {
    style: {
      color: "green"
    }
  }, "Payment button only works when all fields in the form marked with ", __jsx("span", {
    style: {
      color: "red"
    }
  }, "*"), " are filled")), __jsx("br", null), __jsx("button", {
    style: {
      color: "gold",
      borderRadius: "10%"
    },
    type: "submit",
    disabled: disable,
    className: "btn btn-success"
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faHome"]
  }), " Pay"))))));
}

_s(CheckoutForm, "trinq64LqzZ820N+TM+ZXQneoqU=", false, function () {
  return [_userForm__WEBPACK_IMPORTED_MODULE_5__["default"]];
});

_c = CheckoutForm;

var mapStateToProps = function mapStateToProps(state) {
  return {
    total: state.total,
    shipping: state.shipping
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps)(CheckoutForm));

var _c;

$RefreshReg$(_c, "CheckoutForm");

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jaGVja291dC9DaGVja291dEZvcm0uanMiXSwibmFtZXMiOlsiQ2hlY2tvdXRGb3JtIiwidG90YWwiLCJzaGlwcGluZyIsImhhbmRsZU9uU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiYXhpb3MiLCJnZXQiLCJ0b3RhbEFtb3VudCIsInN0YXRlIiwiZmlyc3ROYW1lIiwidmFsdWUiLCJ0aGVuIiwicmVzIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJyZWRpcmVjdCIsInVybCIsIndpbmRvdyIsIm9wZW4iLCJ0b0ZpeGVkIiwic3RhdGVTY2hlbWEiLCJlcnJvciIsImxhc3ROYW1lIiwiYWRkcmVzcyIsImNpdHkiLCJ6aXAiLCJlbWFpbCIsInBob25lIiwidmFsaWRhdGlvblN0YXRlU2NoZW1hIiwicmVxdWlyZWQiLCJ2YWxpZGF0b3IiLCJyZWdFeCIsInVzZUZvcm0iLCJoYW5kbGVPbkNoYW5nZSIsImRpc2FibGUiLCJlcnJvclN0eWxlIiwiY29sb3IiLCJmb250U2l6ZSIsImJvcmRlclJhZGl1cyIsImZhSG9tZSIsIm1hcFN0YXRlVG9Qcm9wcyIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBRUE7O0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxZQUFULE9BQTJDO0FBQUE7O0FBQUEsTUFBbkJDLEtBQW1CLFFBQW5CQSxLQUFtQjtBQUFBLE1BQVpDLFFBQVksUUFBWkEsUUFBWTs7QUFDekMsV0FBU0MsY0FBVCxDQUF3QkMsQ0FBeEIsRUFBMkI7QUFDekJBLEtBQUMsQ0FBQ0MsY0FBRjtBQUVBLFdBQU9DLDRDQUFLLENBQ1RDLEdBREksaUVBRXNEQyxXQUZ0RCxtQkFFMEVDLEtBQUssQ0FBQ0MsU0FBTixDQUFnQkMsS0FGMUYsR0FJSkMsSUFKSSxDQUlDLFVBQUNDLEdBQUQsRUFBUztBQUNiQyxhQUFPLENBQUNDLEdB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RixDQXpKRixDQURGLENBTEYsQ0FERixDQURGO0FBaU1EOztHQXpTUXpDLFk7VUE4Rm9Da0MsaUQ7OztLQTlGcENsQyxZOztBQTJTVCxJQUFNMEMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDakMsS0FBRCxFQUFXO0FBQ2pDLFNBQU87QUFDTFIsU0FBSyxFQUFFUSxLQUFLLENBQUNSLEtBRFI7QUFFTEMsWUFBUSxFQUFFTyxLQUFLLENBQUNQO0FBRlgsR0FBUDtBQUlELENBTEQ7O0FBT2V5QywwSEFBTyxDQUFDRCxlQUFELENBQVAsQ0FBeUIxQyxZQUF6QixDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NoZWNrb3V0LjVlZGFjYTQyZWI1YmZlZDBmODhmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgT3JkZXJTdW1tYXJ5IGZyb20gXCIuL09yZGVyU3VtbWFyeVwiO1xuaW1wb3J0IHVzZUZvcm0gZnJvbSBcIi4vdXNlckZvcm1cIjtcbi8vIGdldCBvdXIgZm9udGF3ZXNvbWUgaW1wb3J0c1xuaW1wb3J0IHsgZmFIb21lIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xuXG5mdW5jdGlvbiBDaGVja291dEZvcm0oeyB0b3RhbCwgc2hpcHBpbmcgfSkge1xuICBmdW5jdGlvbiBoYW5kbGVPblN1Ym1pdChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgcmV0dXJuIGF4aW9zXG4gICAgICAuZ2V0KFxuICAgICAgICBgaHR0cHM6Ly9jb2luYmFzZS1iYWNrZW5kLmhlcm9rdWFwcC5jb20vY2hlY2tvdXQ/dG90YWw9JHt0b3RhbEFtb3VudH0mbmFtZT0ke3N0YXRlLmZpcnN0TmFtZS52YWx1ZX1gXG4gICAgICApXG4gICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcbiAgICAgICAgcmVkaXJlY3QocmVzLmRhdGEpO1xuICAgICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiByZWRpcmVjdCh1cmwpIHtcbiAgICBpZiAodXJsKSByZXR1cm4gd2luZG93Lm9wZW4odXJsLCBcIl9ibGFua1wiKTtcbiAgfVxuXG4gIGxldCB0b3RhbEFtb3VudCA9ICh0b3RhbCArIHNoaXBwaW5nKS50b0ZpeGVkKDIpO1xuXG4gIGNvbnN0IHN0YXRlU2NoZW1hID0ge1xuICAgIGZpcnN0TmFtZTogeyB2YWx1ZTogXCJcIiwgZXJyb3I6IFwiXCIgfSxcbiAgICBsYXN0TmFtZTogeyB2YWx1ZTogXCJcIiwgZXJyb3I6IFwiXCIgfSxcbiAgICBhZGRyZXNzOiB7IHZhbHVlOiBcIlwiLCBlcnJvcjogXCJcIiB9LFxuICAgIGNpdHk6IHsgdmFsdWU6IFwiXCIsIGVycm9yOiBcIlwiIH0sXG4gICAgc3RhdGU6IHsgdmFsdWU6IFwiXCIsIGVycm9yOiBcIlwiIH0sXG4gICAgemlwOiB7IHZhbHVlOiBcIlwiLCBlcnJvcjogXCJcIiB9LFxuICAgIGVtYWlsOiB7IHZhbHVlOiBcIlwiLCBlcnJvcjogXCJcIiB9LFxuICAgIHBob25lOiB7IHZhbHVlOiBcIlwiLCBlcnJvcjogXCJcIiB9LFxuICB9O1xuXG4gIGNvbnN0IHZhbGlkYXRpb25TdGF0ZVNjaGVtYSA9IHtcbiAgICBmaXJzdE5hbWU6IHtcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgdmFsaWRhdG9yOiB7XG4gICAgICAgIHJlZ0V4OiAvXlthLXpBLVpdKyQvLFxuICAgICAgICBlcnJvcjogXCJJbnZhbGlkIGZpcnN0IG5hbWUgZm9ybWF0LlwiLFxuICAgICAgfSxcbiAgICB9LFxuXG4gICAgbGFzdE5hbWU6IHtcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgdmFsaWRhdG9yOiB7XG4gICAgICAgIHJlZ0V4OiAvXlthLXpBLVpdKyQvLFxuICAgICAgICBlcnJvcjogXCJJbnZhbGlkIGxhc3QgbmFtZSBmb3JtYXQuXCIsXG4gICAgICB9LFxuICAgIH0sXG5cbiAgICBhZGRyZXNzOiB7XG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgIHZhbGlkYXRvcjoge1xuICAgICAgICBlcnJvcjogXCJJbnZhbGlkIGFkZHJlc3MgZm9ybWF0LlwiLFxuICAgICAgfSxcbiAgICB9LFxuXG4gICAgY2l0eToge1xuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICB2YWxpZGF0b3I6IHtcbiAgICAgICAgZXJyb3I6IFwiSW52YWxpZCBsYXN0IG5hbWUgZm9ybWF0LlwiLFxuICAgICAgfSxcbiAgICB9LFxuXG4gICAgc3RhdGU6IHtcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgdmFsaWRhdG9yOiB7XG4gICAgICAgIGVycm9yOiBcIkludmFsaWQgbGFzdCBuYW1lIGZvcm1hdC5cIixcbiAgICAgIH0sXG4gICAgfSxcblxuICAgIHppcDoge1xuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICB2YWxpZGF0b3I6IHtcbiAgICAgICAgcmVnRXg6IC9eXFxkezV9JHxeXFxkezV9LVxcZHs0fSQvLFxuICAgICAgICBlcnJvcjogXCJJbnZhbGlkIHppcCBmb3JtYXQsIHVzZSBsaWtlIDEyMzQ1LlwiLFxuICAgICAgfSxcbiAgICB9LFxuXG4gICAgZW1haWw6IHtcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgdmFsaWRhdG9yOiB7XG4gICAgICAgIHJlZ0V4OiAvXigoW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKyhcXC5bXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31dKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkLyxcbiAgICAgICAgZXJyb3I6IFwiSW52YWxpZCBlbWFpbCBmb3JtYXQuXCIsXG4gICAgICB9LFxuICAgIH0sXG5cbiAgICBwaG9uZToge1xuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICB2YWxpZGF0b3I6IHtcbiAgICAgICAgcmVnRXg6IC9eXFwrWzAtOV0/KClbMC05XShcXHN8XFxTKShcXGRbMC05XXs5fSkkLyxcbiAgICAgICAgZXJyb3I6IFwiSW52YWxpZCBwaG9uZSBudW1iZXIgZm9ybWF0IHVzZSBsaWtlICsyOTIzNDMyNDMyNDMyLlwiLFxuICAgICAgfSxcbiAgICB9LFxuICB9O1xuXG4gIGNvbnN0IHsgc3RhdGUsIGhhbmRsZU9uQ2hhbmdlLCBkaXNhYmxlIH0gPSB1c2VGb3JtKFxuICAgIHN0YXRlU2NoZW1hLFxuICAgIHZhbGlkYXRpb25TdGF0ZVNjaGVtYVxuICApO1xuXG4gIGNvbnN0IGVycm9yU3R5bGUgPSB7XG4gICAgY29sb3I6IFwicmVkXCIsXG4gICAgZm9udFNpemU6IFwiMTNweFwiLFxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY2hlY2tvdXQtYXJlYSBwdGItNjBcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTIgY29sLW1kLTEyXCI+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVPblN1Ym1pdH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgY29sLW1kLTEyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmlsbGluZy1kZXRhaWxzXCI+XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRpdGxlXCI+QmlsbGluZyBEZXRhaWxzPC9oMz5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02IGNvbC1tZC02XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIEZpcnN0IE5hbWUgPHNwYW4gY2xhc3NOYW1lPVwicmVxdWlyZWRcIj4qPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZmlyc3ROYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlT25DaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c3RhdGUuZmlyc3ROYW1lLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAge3N0YXRlLmZpcnN0TmFtZS5lcnJvciAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17ZXJyb3JTdHlsZX0+e3N0YXRlLmZpcnN0TmFtZS5lcnJvcn08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNiBjb2wtbWQtNlwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICBMYXN0IE5hbWUgPHNwYW4gY2xhc3NOYW1lPVwicmVxdWlyZWRcIj4qPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibGFzdE5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVPbkNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzdGF0ZS5sYXN0TmFtZS52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIHtzdGF0ZS5sYXN0TmFtZS5lcnJvciAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17ZXJyb3JTdHlsZX0+e3N0YXRlLmxhc3ROYW1lLmVycm9yfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMiBjb2wtbWQtNlwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICBBZGRyZXNzIDxzcGFuIGNsYXNzTmFtZT1cInJlcXVpcmVkXCI+Kjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImFkZHJlc3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVPbkNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzdGF0ZS5hZGRyZXNzLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAge3N0YXRlLmFkZHJlc3MuZXJyb3IgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e2Vycm9yU3R5bGV9PntzdGF0ZS5hZGRyZXNzLmVycm9yfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMiBjb2wtbWQtNlwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICBUb3duIC8gQ2l0eSA8c3BhbiBjbGFzc05hbWU9XCJyZXF1aXJlZFwiPio8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjaXR5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlT25DaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c3RhdGUuY2l0eS52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIHtzdGF0ZS5jaXR5LmVycm9yICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXtlcnJvclN0eWxlfT57c3RhdGUuY2l0eS5lcnJvcn08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNiBjb2wtbWQtNlwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICBTdGF0ZSAvIENvdW50eSA8c3BhbiBjbGFzc05hbWU9XCJyZXF1aXJlZFwiPio8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzdGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZU9uQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N0YXRlLnN0YXRlLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAge3N0YXRlLnN0YXRlLmVycm9yICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXtlcnJvclN0eWxlfT57c3RhdGUuc3RhdGUuZXJyb3J9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgY29sLW1kLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgUG9zdGNvZGUgLyBaaXAgPHNwYW4gY2xhc3NOYW1lPVwicmVxdWlyZWRcIj4qPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiemlwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlT25DaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c3RhdGUuemlwLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAge3N0YXRlLnppcC5lcnJvciAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17ZXJyb3JTdHlsZX0+e3N0YXRlLnppcC5lcnJvcn08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNiBjb2wtbWQtNlwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICBFbWFpbCBBZGRyZXNzIDxzcGFuIGNsYXNzTmFtZT1cInJlcXVpcmVkXCI+Kjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZU9uQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N0YXRlLmVtYWlsLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAge3N0YXRlLmVtYWlsLmVycm9yICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXtlcnJvclN0eWxlfT57c3RhdGUuZW1haWwuZXJyb3J9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgY29sLW1kLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgUGhvbmUgPHNwYW4gY2xhc3NOYW1lPVwicmVxdWlyZWRcIj4qPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGhvbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVPbkNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzdGF0ZS5waG9uZS52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIHtzdGF0ZS5waG9uZS5lcnJvciAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17ZXJyb3JTdHlsZX0+e3N0YXRlLnBob25lLmVycm9yfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02IGNvbC1tZC0xMlwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9yZGVyLWRldGFpbHNcIj5cbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGl0bGVcIj5Zb3VyIE9yZGVyPC9oMz5cblxuICAgICAgICAgICAgICAgIDxPcmRlclN1bW1hcnkgLz5cbiAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGNvbG9yOiBcInJlZFwiIH19PlxuICAgICAgICAgICAgICAgICAgQ2FyZCBTZXJ2aWNlcyBBcmUgVGVtcG9yYXJpbHkgRGlzYWJsZWQgSW4gWW91ciBSZWdpb24sIFBsZWFzZSBVc2VcbiAgICAgICAgICAgICAgICAgIHRoZSBBdmFpbGFibGUgUGF5bWVudCBNZXRob2QgQmVsb3dcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGNvbG9yOiBcImdyZWVuXCIgfX0+XG4gICAgICAgICAgICAgICAgICBQYXltZW50IGJ1dHRvbiBvbmx5IHdvcmtzIHdoZW4gYWxsIGZpZWxkcyBpbiB0aGUgZm9ybSBtYXJrZWRcbiAgICAgICAgICAgICAgICAgIHdpdGggPHNwYW4gc3R5bGU9e3sgY29sb3I6IFwicmVkXCIgfX0+Kjwvc3Bhbj4gYXJlIGZpbGxlZCBcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6IFwiZ29sZFwiLCBib3JkZXJSYWRpdXM6IFwiMTAlXCIgfX1cbiAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BidG4gYnRuLXN1Y2Nlc3NgfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUhvbWV9IC8+IFBheVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIHRvdGFsOiBzdGF0ZS50b3RhbCxcbiAgICBzaGlwcGluZzogc3RhdGUuc2hpcHBpbmcsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoQ2hlY2tvdXRGb3JtKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=