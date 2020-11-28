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
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
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
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faBitcoin"],
    size: "1.9x"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jaGVja291dC9DaGVja291dEZvcm0uanMiXSwibmFtZXMiOlsiQ2hlY2tvdXRGb3JtIiwidG90YWwiLCJzaGlwcGluZyIsImhhbmRsZU9uU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiYXhpb3MiLCJnZXQiLCJ0b3RhbEFtb3VudCIsInN0YXRlIiwiZmlyc3ROYW1lIiwidmFsdWUiLCJ0aGVuIiwicmVzIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJyZWRpcmVjdCIsInVybCIsIndpbmRvdyIsIm9wZW4iLCJ0b0ZpeGVkIiwic3RhdGVTY2hlbWEiLCJlcnJvciIsImxhc3ROYW1lIiwiYWRkcmVzcyIsImNpdHkiLCJ6aXAiLCJlbWFpbCIsInBob25lIiwidmFsaWRhdGlvblN0YXRlU2NoZW1hIiwicmVxdWlyZWQiLCJ2YWxpZGF0b3IiLCJyZWdFeCIsInVzZUZvcm0iLCJoYW5kbGVPbkNoYW5nZSIsImRpc2FibGUiLCJlcnJvclN0eWxlIiwiY29sb3IiLCJmb250U2l6ZSIsImJvcmRlclJhZGl1cyIsImZhQml0Y29pbiIsIm1hcFN0YXRlVG9Qcm9wcyIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBRUE7O0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxZQUFULE9BQTJDO0FBQUE7O0FBQUEsTUFBbkJDLEtBQW1CLFFBQW5CQSxLQUFtQjtBQUFBLE1BQVpDLFFBQVksUUFBWkEsUUFBWTs7QUFDekMsV0FBU0MsY0FBVCxDQUF3QkMsQ0FBeEIsRUFBMkI7QUFDekJBLEtBQUMsQ0FBQ0MsY0FBRjtBQUVBLFdBQU9DLDRDQUFLLENBQ1RDLEdBREksaUVBRXNEQyxXQUZ0RCxtQkFFMEVDLEtBQUssQ0FBQ0MsU0FBTixDQUFnQkMsS0FGMUYsR0FJSkMsSUFKSSxDQUlDLFVBQUNDLEdBQUQsRUFBUztBQUNiQyxhQUFPLENBQUND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QUFDO0FBQXZDLElBTkwsU0FsQkYsQ0F6SkYsQ0FERixDQUxGLENBREYsQ0FERjtBQWlNRDs7R0F6U1F6QyxZO1VBOEZvQ2tDLGlEOzs7S0E5RnBDbEMsWTs7QUEyU1QsSUFBTTBDLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ2pDLEtBQUQsRUFBVztBQUNqQyxTQUFPO0FBQ0xSLFNBQUssRUFBRVEsS0FBSyxDQUFDUixLQURSO0FBRUxDLFlBQVEsRUFBRU8sS0FBSyxDQUFDUDtBQUZYLEdBQVA7QUFJRCxDQUxEOztBQU9leUMsMEhBQU8sQ0FBQ0QsZUFBRCxDQUFQLENBQXlCMUMsWUFBekIsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jaGVja291dC5jZWE4ZTNkM2YzMTk1NWYxM2EwMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IE9yZGVyU3VtbWFyeSBmcm9tIFwiLi9PcmRlclN1bW1hcnlcIjtcbmltcG9ydCB1c2VGb3JtIGZyb20gXCIuL3VzZXJGb3JtXCI7XG4vLyBnZXQgb3VyIGZvbnRhd2Vzb21lIGltcG9ydHNcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcbmltcG9ydCB7IGZhQml0Y29pbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1icmFuZHMtc3ZnLWljb25zXCI7XG5cbmZ1bmN0aW9uIENoZWNrb3V0Rm9ybSh7IHRvdGFsLCBzaGlwcGluZyB9KSB7XG4gIGZ1bmN0aW9uIGhhbmRsZU9uU3VibWl0KGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICByZXR1cm4gYXhpb3NcbiAgICAgIC5nZXQoXG4gICAgICAgIGBodHRwczovL2NvaW5iYXNlLWJhY2tlbmQuaGVyb2t1YXBwLmNvbS9jaGVja291dD90b3RhbD0ke3RvdGFsQW1vdW50fSZuYW1lPSR7c3RhdGUuZmlyc3ROYW1lLnZhbHVlfWBcbiAgICAgIClcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpO1xuICAgICAgICByZWRpcmVjdChyZXMuZGF0YSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlZGlyZWN0KHVybCkge1xuICAgIGlmICh1cmwpIHJldHVybiB3aW5kb3cub3Blbih1cmwsIFwiX2JsYW5rXCIpO1xuICB9XG5cbiAgbGV0IHRvdGFsQW1vdW50ID0gKHRvdGFsICsgc2hpcHBpbmcpLnRvRml4ZWQoMik7XG5cbiAgY29uc3Qgc3RhdGVTY2hlbWEgPSB7XG4gICAgZmlyc3ROYW1lOiB7IHZhbHVlOiBcIlwiLCBlcnJvcjogXCJcIiB9LFxuICAgIGxhc3ROYW1lOiB7IHZhbHVlOiBcIlwiLCBlcnJvcjogXCJcIiB9LFxuICAgIGFkZHJlc3M6IHsgdmFsdWU6IFwiXCIsIGVycm9yOiBcIlwiIH0sXG4gICAgY2l0eTogeyB2YWx1ZTogXCJcIiwgZXJyb3I6IFwiXCIgfSxcbiAgICBzdGF0ZTogeyB2YWx1ZTogXCJcIiwgZXJyb3I6IFwiXCIgfSxcbiAgICB6aXA6IHsgdmFsdWU6IFwiXCIsIGVycm9yOiBcIlwiIH0sXG4gICAgZW1haWw6IHsgdmFsdWU6IFwiXCIsIGVycm9yOiBcIlwiIH0sXG4gICAgcGhvbmU6IHsgdmFsdWU6IFwiXCIsIGVycm9yOiBcIlwiIH0sXG4gIH07XG5cbiAgY29uc3QgdmFsaWRhdGlvblN0YXRlU2NoZW1hID0ge1xuICAgIGZpcnN0TmFtZToge1xuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICB2YWxpZGF0b3I6IHtcbiAgICAgICAgcmVnRXg6IC9eW2EtekEtWl0rJC8sXG4gICAgICAgIGVycm9yOiBcIkludmFsaWQgZmlyc3QgbmFtZSBmb3JtYXQuXCIsXG4gICAgICB9LFxuICAgIH0sXG5cbiAgICBsYXN0TmFtZToge1xuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICB2YWxpZGF0b3I6IHtcbiAgICAgICAgcmVnRXg6IC9eW2EtekEtWl0rJC8sXG4gICAgICAgIGVycm9yOiBcIkludmFsaWQgbGFzdCBuYW1lIGZvcm1hdC5cIixcbiAgICAgIH0sXG4gICAgfSxcblxuICAgIGFkZHJlc3M6IHtcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgdmFsaWRhdG9yOiB7XG4gICAgICAgIGVycm9yOiBcIkludmFsaWQgYWRkcmVzcyBmb3JtYXQuXCIsXG4gICAgICB9LFxuICAgIH0sXG5cbiAgICBjaXR5OiB7XG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgIHZhbGlkYXRvcjoge1xuICAgICAgICBlcnJvcjogXCJJbnZhbGlkIGxhc3QgbmFtZSBmb3JtYXQuXCIsXG4gICAgICB9LFxuICAgIH0sXG5cbiAgICBzdGF0ZToge1xuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICB2YWxpZGF0b3I6IHtcbiAgICAgICAgZXJyb3I6IFwiSW52YWxpZCBsYXN0IG5hbWUgZm9ybWF0LlwiLFxuICAgICAgfSxcbiAgICB9LFxuXG4gICAgemlwOiB7XG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgIHZhbGlkYXRvcjoge1xuICAgICAgICByZWdFeDogL15cXGR7NX0kfF5cXGR7NX0tXFxkezR9JC8sXG4gICAgICAgIGVycm9yOiBcIkludmFsaWQgemlwIGZvcm1hdCwgdXNlIGxpa2UgMTIzNDUuXCIsXG4gICAgICB9LFxuICAgIH0sXG5cbiAgICBlbWFpbDoge1xuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICB2YWxpZGF0b3I6IHtcbiAgICAgICAgcmVnRXg6IC9eKChbXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKFxcLltePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSspKil8KFwiLitcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfV0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvLFxuICAgICAgICBlcnJvcjogXCJJbnZhbGlkIGVtYWlsIGZvcm1hdC5cIixcbiAgICAgIH0sXG4gICAgfSxcblxuICAgIHBob25lOiB7XG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgIHZhbGlkYXRvcjoge1xuICAgICAgICByZWdFeDogL15cXCtbMC05XT8oKVswLTldKFxcc3xcXFMpKFxcZFswLTldezl9KSQvLFxuICAgICAgICBlcnJvcjogXCJJbnZhbGlkIHBob25lIG51bWJlciBmb3JtYXQgdXNlIGxpa2UgKzI5MjM0MzI0MzI0MzIuXCIsXG4gICAgICB9LFxuICAgIH0sXG4gIH07XG5cbiAgY29uc3QgeyBzdGF0ZSwgaGFuZGxlT25DaGFuZ2UsIGRpc2FibGUgfSA9IHVzZUZvcm0oXG4gICAgc3RhdGVTY2hlbWEsXG4gICAgdmFsaWRhdGlvblN0YXRlU2NoZW1hXG4gICk7XG5cbiAgY29uc3QgZXJyb3JTdHlsZSA9IHtcbiAgICBjb2xvcjogXCJyZWRcIixcbiAgICBmb250U2l6ZTogXCIxM3B4XCIsXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjaGVja291dC1hcmVhIHB0Yi02MFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMiBjb2wtbWQtMTJcIj48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZU9uU3VibWl0fT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNiBjb2wtbWQtMTJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiaWxsaW5nLWRldGFpbHNcIj5cbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGl0bGVcIj5CaWxsaW5nIERldGFpbHM8L2gzPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgY29sLW1kLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgRmlyc3QgTmFtZSA8c3BhbiBjbGFzc05hbWU9XCJyZXF1aXJlZFwiPio8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJmaXJzdE5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVPbkNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzdGF0ZS5maXJzdE5hbWUudmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICB7c3RhdGUuZmlyc3ROYW1lLmVycm9yICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXtlcnJvclN0eWxlfT57c3RhdGUuZmlyc3ROYW1lLmVycm9yfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02IGNvbC1tZC02XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIExhc3QgTmFtZSA8c3BhbiBjbGFzc05hbWU9XCJyZXF1aXJlZFwiPio8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJsYXN0TmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZU9uQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N0YXRlLmxhc3ROYW1lLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAge3N0YXRlLmxhc3ROYW1lLmVycm9yICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXtlcnJvclN0eWxlfT57c3RhdGUubGFzdE5hbWUuZXJyb3J9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEyIGNvbC1tZC02XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIEFkZHJlc3MgPHNwYW4gY2xhc3NOYW1lPVwicmVxdWlyZWRcIj4qPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYWRkcmVzc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZU9uQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N0YXRlLmFkZHJlc3MudmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICB7c3RhdGUuYWRkcmVzcy5lcnJvciAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17ZXJyb3JTdHlsZX0+e3N0YXRlLmFkZHJlc3MuZXJyb3J9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEyIGNvbC1tZC02XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIFRvd24gLyBDaXR5IDxzcGFuIGNsYXNzTmFtZT1cInJlcXVpcmVkXCI+Kjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNpdHlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVPbkNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzdGF0ZS5jaXR5LnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAge3N0YXRlLmNpdHkuZXJyb3IgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e2Vycm9yU3R5bGV9PntzdGF0ZS5jaXR5LmVycm9yfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02IGNvbC1tZC02XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIFN0YXRlIC8gQ291bnR5IDxzcGFuIGNsYXNzTmFtZT1cInJlcXVpcmVkXCI+Kjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInN0YXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlT25DaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c3RhdGUuc3RhdGUudmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICB7c3RhdGUuc3RhdGUuZXJyb3IgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e2Vycm9yU3R5bGV9PntzdGF0ZS5zdGF0ZS5lcnJvcn08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNiBjb2wtbWQtNlwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICBQb3N0Y29kZSAvIFppcCA8c3BhbiBjbGFzc05hbWU9XCJyZXF1aXJlZFwiPio8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ6aXBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVPbkNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzdGF0ZS56aXAudmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICB7c3RhdGUuemlwLmVycm9yICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXtlcnJvclN0eWxlfT57c3RhdGUuemlwLmVycm9yfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02IGNvbC1tZC02XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIEVtYWlsIEFkZHJlc3MgPHNwYW4gY2xhc3NOYW1lPVwicmVxdWlyZWRcIj4qPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlT25DaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c3RhdGUuZW1haWwudmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICB7c3RhdGUuZW1haWwuZXJyb3IgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e2Vycm9yU3R5bGV9PntzdGF0ZS5lbWFpbC5lcnJvcn08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNiBjb2wtbWQtNlwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICBQaG9uZSA8c3BhbiBjbGFzc05hbWU9XCJyZXF1aXJlZFwiPio8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwaG9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZU9uQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N0YXRlLnBob25lLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAge3N0YXRlLnBob25lLmVycm9yICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXtlcnJvclN0eWxlfT57c3RhdGUucGhvbmUuZXJyb3J9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgY29sLW1kLTEyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3JkZXItZGV0YWlsc1wiPlxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0aXRsZVwiPllvdXIgT3JkZXI8L2gzPlxuXG4gICAgICAgICAgICAgICAgPE9yZGVyU3VtbWFyeSAvPlxuICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgY29sb3I6IFwicmVkXCIgfX0+XG4gICAgICAgICAgICAgICAgICBDYXJkIFNlcnZpY2VzIEFyZSBUZW1wb3JhcmlseSBEaXNhYmxlZCBJbiBZb3VyIFJlZ2lvbiwgUGxlYXNlIFVzZVxuICAgICAgICAgICAgICAgICAgdGhlIEF2YWlsYWJsZSBQYXltZW50IE1ldGhvZCBCZWxvd1xuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgY29sb3I6IFwiZ3JlZW5cIiB9fT5cbiAgICAgICAgICAgICAgICAgIFBheW1lbnQgYnV0dG9uIG9ubHkgd29ya3Mgd2hlbiBhbGwgZmllbGRzIGluIHRoZSBmb3JtIG1hcmtlZFxuICAgICAgICAgICAgICAgICAgd2l0aCA8c3BhbiBzdHlsZT17eyBjb2xvcjogXCJyZWRcIiB9fT4qPC9zcGFuPiBhcmUgZmlsbGVkIFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogXCJnb2xkXCIsIGJvcmRlclJhZGl1czogXCIxMCVcIiB9fVxuICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGJ0biBidG4tc3VjY2Vzc2B9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQml0Y29pbn0gc2l6ZT1cIjEuOXhcIi8+IFBheVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIHRvdGFsOiBzdGF0ZS50b3RhbCxcbiAgICBzaGlwcGluZzogc3RhdGUuc2hpcHBpbmcsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoQ2hlY2tvdXRGb3JtKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=