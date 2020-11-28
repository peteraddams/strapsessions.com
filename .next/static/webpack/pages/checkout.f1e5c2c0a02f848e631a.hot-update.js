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
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
var _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








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
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
    icon: ['fab', 'google']
  }), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
    icon: ["fab", "faTableTennis"]
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

/***/ }),

/***/ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jaGVja291dC9DaGVja291dEZvcm0uanMiXSwibmFtZXMiOlsiQ2hlY2tvdXRGb3JtIiwidG90YWwiLCJzaGlwcGluZyIsImhhbmRsZU9uU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiYXhpb3MiLCJnZXQiLCJ0b3RhbEFtb3VudCIsInN0YXRlIiwiZmlyc3ROYW1lIiwidmFsdWUiLCJ0aGVuIiwicmVzIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJyZWRpcmVjdCIsInVybCIsIndpbmRvdyIsIm9wZW4iLCJ0b0ZpeGVkIiwic3RhdGVTY2hlbWEiLCJlcnJvciIsImxhc3ROYW1lIiwiYWRkcmVzcyIsImNpdHkiLCJ6aXAiLCJlbWFpbCIsInBob25lIiwidmFsaWRhdGlvblN0YXRlU2NoZW1hIiwicmVxdWlyZWQiLCJ2YWxpZGF0b3IiLCJyZWdFeCIsInVzZUZvcm0iLCJoYW5kbGVPbkNoYW5nZSIsImRpc2FibGUiLCJlcnJvclN0eWxlIiwiY29sb3IiLCJmb250U2l6ZSIsImJvcmRlclJhZGl1cyIsIm1hcFN0YXRlVG9Qcm9wcyIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFlBQVQsT0FBMkM7QUFBQTs7QUFBQSxNQUFuQkMsS0FBbUIsUUFBbkJBLEtBQW1CO0FBQUEsTUFBWkMsUUFBWSxRQUFaQSxRQUFZOztBQUN6QyxXQUFTQyxjQUFULENBQXdCQyxDQUF4QixFQUEyQjtBQUN6QkEsS0FBQyxDQUFDQyxjQUFGO0FBRUEsV0FBT0MsNENBQUssQ0FDVEMsR0FESSxpRUFFc0RDLFdBRnRELG1CQUUwRUMsS0FBSyxDQUFDQyxTQUFOLENBQWdCQyxLQUYxRixHQUlKQyxJQUpJLENBSUMsVUFBQ0MsR0FBRCxFQUFTO0FBQ2JDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFHLENB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Qyw4RUFBRDtBQUFpQixRQUFJLEVBQUUsQ0FBQyxLQUFELEVBQVEsZUFBUjtBQUF2QixJQVBGLFNBakJGLENBekpGLENBREYsQ0FMRixDQURGLENBREY7QUFpTUQ7O0dBelNRcEMsWTtVQThGb0NrQyxpRDs7O0tBOUZwQ2xDLFk7O0FBMlNULElBQU15QyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNoQyxLQUFELEVBQVc7QUFDakMsU0FBTztBQUNMUixTQUFLLEVBQUVRLEtBQUssQ0FBQ1IsS0FEUjtBQUVMQyxZQUFRLEVBQUVPLEtBQUssQ0FBQ1A7QUFGWCxHQUFQO0FBSUQsQ0FMRDs7QUFPZXdDLDBIQUFPLENBQUNELGVBQUQsQ0FBUCxDQUF5QnpDLFlBQXpCLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2hlY2tvdXQuZjFlNWMyYzBhMDJmODQ4ZTYzMWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCBPcmRlclN1bW1hcnkgZnJvbSBcIi4vT3JkZXJTdW1tYXJ5XCI7XG5pbXBvcnQgdXNlRm9ybSBmcm9tIFwiLi91c2VyRm9ybVwiO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJ1xuXG5mdW5jdGlvbiBDaGVja291dEZvcm0oeyB0b3RhbCwgc2hpcHBpbmcgfSkge1xuICBmdW5jdGlvbiBoYW5kbGVPblN1Ym1pdChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgcmV0dXJuIGF4aW9zXG4gICAgICAuZ2V0KFxuICAgICAgICBgaHR0cHM6Ly9jb2luYmFzZS1iYWNrZW5kLmhlcm9rdWFwcC5jb20vY2hlY2tvdXQ/dG90YWw9JHt0b3RhbEFtb3VudH0mbmFtZT0ke3N0YXRlLmZpcnN0TmFtZS52YWx1ZX1gXG4gICAgICApXG4gICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcbiAgICAgICAgcmVkaXJlY3QocmVzLmRhdGEpO1xuICAgICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiByZWRpcmVjdCh1cmwpIHtcbiAgICBpZiAodXJsKSByZXR1cm4gd2luZG93Lm9wZW4odXJsLCBcIl9ibGFua1wiKTtcbiAgfVxuXG4gIGxldCB0b3RhbEFtb3VudCA9ICh0b3RhbCArIHNoaXBwaW5nKS50b0ZpeGVkKDIpO1xuXG4gIGNvbnN0IHN0YXRlU2NoZW1hID0ge1xuICAgIGZpcnN0TmFtZTogeyB2YWx1ZTogXCJcIiwgZXJyb3I6IFwiXCIgfSxcbiAgICBsYXN0TmFtZTogeyB2YWx1ZTogXCJcIiwgZXJyb3I6IFwiXCIgfSxcbiAgICBhZGRyZXNzOiB7IHZhbHVlOiBcIlwiLCBlcnJvcjogXCJcIiB9LFxuICAgIGNpdHk6IHsgdmFsdWU6IFwiXCIsIGVycm9yOiBcIlwiIH0sXG4gICAgc3RhdGU6IHsgdmFsdWU6IFwiXCIsIGVycm9yOiBcIlwiIH0sXG4gICAgemlwOiB7IHZhbHVlOiBcIlwiLCBlcnJvcjogXCJcIiB9LFxuICAgIGVtYWlsOiB7IHZhbHVlOiBcIlwiLCBlcnJvcjogXCJcIiB9LFxuICAgIHBob25lOiB7IHZhbHVlOiBcIlwiLCBlcnJvcjogXCJcIiB9LFxuICB9O1xuXG4gIGNvbnN0IHZhbGlkYXRpb25TdGF0ZVNjaGVtYSA9IHtcbiAgICBmaXJzdE5hbWU6IHtcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgdmFsaWRhdG9yOiB7XG4gICAgICAgIHJlZ0V4OiAvXlthLXpBLVpdKyQvLFxuICAgICAgICBlcnJvcjogXCJJbnZhbGlkIGZpcnN0IG5hbWUgZm9ybWF0LlwiLFxuICAgICAgfSxcbiAgICB9LFxuXG4gICAgbGFzdE5hbWU6IHtcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgdmFsaWRhdG9yOiB7XG4gICAgICAgIHJlZ0V4OiAvXlthLXpBLVpdKyQvLFxuICAgICAgICBlcnJvcjogXCJJbnZhbGlkIGxhc3QgbmFtZSBmb3JtYXQuXCIsXG4gICAgICB9LFxuICAgIH0sXG5cbiAgICBhZGRyZXNzOiB7XG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgIHZhbGlkYXRvcjoge1xuICAgICAgICBlcnJvcjogXCJJbnZhbGlkIGFkZHJlc3MgZm9ybWF0LlwiLFxuICAgICAgfSxcbiAgICB9LFxuXG4gICAgY2l0eToge1xuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICB2YWxpZGF0b3I6IHtcbiAgICAgICAgZXJyb3I6IFwiSW52YWxpZCBsYXN0IG5hbWUgZm9ybWF0LlwiLFxuICAgICAgfSxcbiAgICB9LFxuXG4gICAgc3RhdGU6IHtcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgdmFsaWRhdG9yOiB7XG4gICAgICAgIGVycm9yOiBcIkludmFsaWQgbGFzdCBuYW1lIGZvcm1hdC5cIixcbiAgICAgIH0sXG4gICAgfSxcblxuICAgIHppcDoge1xuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICB2YWxpZGF0b3I6IHtcbiAgICAgICAgcmVnRXg6IC9eXFxkezV9JHxeXFxkezV9LVxcZHs0fSQvLFxuICAgICAgICBlcnJvcjogXCJJbnZhbGlkIHppcCBmb3JtYXQsIHVzZSBsaWtlIDEyMzQ1LlwiLFxuICAgICAgfSxcbiAgICB9LFxuXG4gICAgZW1haWw6IHtcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgdmFsaWRhdG9yOiB7XG4gICAgICAgIHJlZ0V4OiAvXigoW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKyhcXC5bXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31dKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkLyxcbiAgICAgICAgZXJyb3I6IFwiSW52YWxpZCBlbWFpbCBmb3JtYXQuXCIsXG4gICAgICB9LFxuICAgIH0sXG5cbiAgICBwaG9uZToge1xuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICB2YWxpZGF0b3I6IHtcbiAgICAgICAgcmVnRXg6IC9eXFwrWzAtOV0/KClbMC05XShcXHN8XFxTKShcXGRbMC05XXs5fSkkLyxcbiAgICAgICAgZXJyb3I6IFwiSW52YWxpZCBwaG9uZSBudW1iZXIgZm9ybWF0IHVzZSBsaWtlICsyOTIzNDMyNDMyNDMyLlwiLFxuICAgICAgfSxcbiAgICB9LFxuICB9O1xuXG4gIGNvbnN0IHsgc3RhdGUsIGhhbmRsZU9uQ2hhbmdlLCBkaXNhYmxlIH0gPSB1c2VGb3JtKFxuICAgIHN0YXRlU2NoZW1hLFxuICAgIHZhbGlkYXRpb25TdGF0ZVNjaGVtYVxuICApO1xuXG4gIGNvbnN0IGVycm9yU3R5bGUgPSB7XG4gICAgY29sb3I6IFwicmVkXCIsXG4gICAgZm9udFNpemU6IFwiMTNweFwiLFxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY2hlY2tvdXQtYXJlYSBwdGItNjBcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTIgY29sLW1kLTEyXCI+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVPblN1Ym1pdH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgY29sLW1kLTEyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmlsbGluZy1kZXRhaWxzXCI+XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRpdGxlXCI+QmlsbGluZyBEZXRhaWxzPC9oMz5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02IGNvbC1tZC02XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIEZpcnN0IE5hbWUgPHNwYW4gY2xhc3NOYW1lPVwicmVxdWlyZWRcIj4qPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZmlyc3ROYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlT25DaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c3RhdGUuZmlyc3ROYW1lLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAge3N0YXRlLmZpcnN0TmFtZS5lcnJvciAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17ZXJyb3JTdHlsZX0+e3N0YXRlLmZpcnN0TmFtZS5lcnJvcn08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNiBjb2wtbWQtNlwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICBMYXN0IE5hbWUgPHNwYW4gY2xhc3NOYW1lPVwicmVxdWlyZWRcIj4qPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibGFzdE5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVPbkNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzdGF0ZS5sYXN0TmFtZS52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIHtzdGF0ZS5sYXN0TmFtZS5lcnJvciAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17ZXJyb3JTdHlsZX0+e3N0YXRlLmxhc3ROYW1lLmVycm9yfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMiBjb2wtbWQtNlwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICBBZGRyZXNzIDxzcGFuIGNsYXNzTmFtZT1cInJlcXVpcmVkXCI+Kjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImFkZHJlc3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVPbkNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzdGF0ZS5hZGRyZXNzLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAge3N0YXRlLmFkZHJlc3MuZXJyb3IgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e2Vycm9yU3R5bGV9PntzdGF0ZS5hZGRyZXNzLmVycm9yfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMiBjb2wtbWQtNlwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICBUb3duIC8gQ2l0eSA8c3BhbiBjbGFzc05hbWU9XCJyZXF1aXJlZFwiPio8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjaXR5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlT25DaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c3RhdGUuY2l0eS52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIHtzdGF0ZS5jaXR5LmVycm9yICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXtlcnJvclN0eWxlfT57c3RhdGUuY2l0eS5lcnJvcn08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNiBjb2wtbWQtNlwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICBTdGF0ZSAvIENvdW50eSA8c3BhbiBjbGFzc05hbWU9XCJyZXF1aXJlZFwiPio8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzdGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZU9uQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N0YXRlLnN0YXRlLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAge3N0YXRlLnN0YXRlLmVycm9yICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXtlcnJvclN0eWxlfT57c3RhdGUuc3RhdGUuZXJyb3J9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgY29sLW1kLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgUG9zdGNvZGUgLyBaaXAgPHNwYW4gY2xhc3NOYW1lPVwicmVxdWlyZWRcIj4qPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiemlwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlT25DaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c3RhdGUuemlwLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAge3N0YXRlLnppcC5lcnJvciAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17ZXJyb3JTdHlsZX0+e3N0YXRlLnppcC5lcnJvcn08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNiBjb2wtbWQtNlwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICBFbWFpbCBBZGRyZXNzIDxzcGFuIGNsYXNzTmFtZT1cInJlcXVpcmVkXCI+Kjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZU9uQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N0YXRlLmVtYWlsLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAge3N0YXRlLmVtYWlsLmVycm9yICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXtlcnJvclN0eWxlfT57c3RhdGUuZW1haWwuZXJyb3J9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgY29sLW1kLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgUGhvbmUgPHNwYW4gY2xhc3NOYW1lPVwicmVxdWlyZWRcIj4qPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGhvbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVPbkNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzdGF0ZS5waG9uZS52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIHtzdGF0ZS5waG9uZS5lcnJvciAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17ZXJyb3JTdHlsZX0+e3N0YXRlLnBob25lLmVycm9yfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02IGNvbC1tZC0xMlwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9yZGVyLWRldGFpbHNcIj5cbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGl0bGVcIj5Zb3VyIE9yZGVyPC9oMz5cblxuICAgICAgICAgICAgICAgIDxPcmRlclN1bW1hcnkgLz5cbiAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGNvbG9yOiBcInJlZFwiIH19PlxuICAgICAgICAgICAgICAgICAgQ2FyZCBTZXJ2aWNlcyBBcmUgVGVtcG9yYXJpbHkgRGlzYWJsZWQgSW4gWW91ciBSZWdpb24sIFBsZWFzZSBVc2VcbiAgICAgICAgICAgICAgICAgIHRoZSBBdmFpbGFibGUgUGF5bWVudCBNZXRob2QgQmVsb3dcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGNvbG9yOiBcImdyZWVuXCIgfX0+XG4gICAgICAgICAgICAgICAgICBQYXltZW50IGJ1dHRvbiBvbmx5IHdvcmtzIHdoZW4gYWxsIGZpZWxkcyBpbiB0aGUgZm9ybSBtYXJrZWRcbiAgICAgICAgICAgICAgICAgIHdpdGggPHNwYW4gc3R5bGU9e3sgY29sb3I6IFwicmVkXCIgfX0+Kjwvc3Bhbj4gYXJlIGZpbGxlZCBcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxiciAvPlxuXG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogXCJnb2xkXCIsIGJvcmRlclJhZGl1czogXCIxMCVcIiB9fVxuICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGJ0biBidG4tc3VjY2Vzc2B9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17WydmYWInLCAnZ29vZ2xlJ119IC8+XG4gICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtbXCJmYWJcIiwgXCJmYVRhYmxlVGVubmlzXCJdfSAvPiBQYXlcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0b3RhbDogc3RhdGUudG90YWwsXG4gICAgc2hpcHBpbmc6IHN0YXRlLnNoaXBwaW5nLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKENoZWNrb3V0Rm9ybSk7XG4iXSwic291cmNlUm9vdCI6IiJ9