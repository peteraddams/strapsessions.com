webpackHotUpdate("static\\development\\pages\\checkout.js",{

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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _OrderSummary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./OrderSummary */ "./components/checkout/OrderSummary.js");
/* harmony import */ var _payments_Payment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../payments/Payment */ "./components/payments/Payment.js");
/* harmony import */ var _userForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./userForm */ "./components/checkout/userForm.js");
var _jsxFileName = "C:\\Users\\HP eliteworkstation\\Desktop\\lambo\\novine-react\\components\\checkout\\CheckoutForm.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







function CheckoutForm(_ref) {
  _s();

  var total = _ref.total,
      shipping = _ref.shipping;

  function handleSubmit() {
    console.log("Form submitted.");
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

  var _useForm = Object(_userForm__WEBPACK_IMPORTED_MODULE_5__["default"])(stateSchema, validationStateSchema, handleSubmit),
      state = _useForm.state,
      handleOnChange = _useForm.handleOnChange,
      handleOnSubmit = _useForm.handleOnSubmit,
      disable = _useForm.disable;

  var errorStyle = {
    color: "red",
    fontSize: "13px"
  };
  return __jsx("section", {
    className: "checkout-area ptb-60",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "col-lg-12 col-md-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 21
    }
  })), __jsx("form", {
    onSubmit: handleOnSubmit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "col-lg-6 col-md-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "billing-details",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 29
    }
  }, __jsx("h3", {
    className: "title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 33
    }
  }, "Billing Details"), __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "col-lg-12 col-md-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 41
    }
  }, __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 45
    }
  }, "Country ", __jsx("span", {
    className: "required",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 60
    }
  }, "*")), __jsx("div", {
    className: "select-box",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 45
    }
  }, __jsx("select", {
    className: "form-control",
    name: "country",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 49
    }
  }, __jsx("option", {
    value: "5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 53
    }
  }, "United Arab Emirates"), __jsx("option", {
    value: "1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 53
    }
  }, "China"), __jsx("option", {
    value: "2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 53
    }
  }, "United Kingdom"), __jsx("option", {
    value: "0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 53
    }
  }, "Germany"), __jsx("option", {
    value: "3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 53
    }
  }, "France"), __jsx("option", {
    value: "4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 53
    }
  }, "Japan"))))), __jsx("div", {
    className: "col-lg-6 col-md-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 41
    }
  }, __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 45
    }
  }, "First Name ", __jsx("span", {
    className: "required",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 63
    }
  }, "*")), __jsx("input", {
    type: "text",
    name: "firstName",
    className: "form-control",
    onChange: handleOnChange,
    value: state.firstName.value,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 45
    }
  }), state.firstName.error && __jsx("p", {
    style: errorStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 71
    }
  }, state.firstName.error))), __jsx("div", {
    className: "col-lg-6 col-md-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 41
    }
  }, __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 45
    }
  }, "Last Name ", __jsx("span", {
    className: "required",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 62
    }
  }, "*")), __jsx("input", {
    type: "text",
    name: "lastName",
    className: "form-control",
    onChange: handleOnChange,
    value: state.lastName.value,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 45
    }
  }), state.lastName.error && __jsx("p", {
    style: errorStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 70
    }
  }, state.lastName.error))), __jsx("div", {
    className: "col-lg-12 col-md-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 41
    }
  }, __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 45
    }
  }, "Company Name"), __jsx("input", {
    type: "text",
    className: "form-control",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 45
    }
  }))), __jsx("div", {
    className: "col-lg-12 col-md-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 41
    }
  }, __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 45
    }
  }, "Address ", __jsx("span", {
    className: "required",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 60
    }
  }, "*")), __jsx("input", {
    type: "text",
    name: "address",
    className: "form-control",
    onChange: handleOnChange,
    value: state.address.value,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 45
    }
  }), state.address.error && __jsx("p", {
    style: errorStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 69
    }
  }, state.address.error))), __jsx("div", {
    className: "col-lg-12 col-md-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 41
    }
  }, __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 45
    }
  }, "Town / City ", __jsx("span", {
    className: "required",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 64
    }
  }, "*")), __jsx("input", {
    type: "text",
    name: "city",
    className: "form-control",
    onChange: handleOnChange,
    value: state.city.value,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 45
    }
  }), state.city.error && __jsx("p", {
    style: errorStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 66
    }
  }, state.city.error))), __jsx("div", {
    className: "col-lg-6 col-md-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 41
    }
  }, __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 45
    }
  }, "State / County ", __jsx("span", {
    className: "required",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 67
    }
  }, "*")), __jsx("input", {
    type: "text",
    name: "state",
    className: "form-control",
    onChange: handleOnChange,
    value: state.state.value,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 45
    }
  }), state.state.error && __jsx("p", {
    style: errorStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 67
    }
  }, state.state.error))), __jsx("div", {
    className: "col-lg-6 col-md-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 41
    }
  }, __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 45
    }
  }, "Postcode / Zip ", __jsx("span", {
    className: "required",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 67
    }
  }, "*")), __jsx("input", {
    type: "text",
    name: "zip",
    className: "form-control",
    onChange: handleOnChange,
    value: state.zip.value,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 45
    }
  }), state.zip.error && __jsx("p", {
    style: errorStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 65
    }
  }, state.zip.error))), __jsx("div", {
    className: "col-lg-6 col-md-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 41
    }
  }, __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 45
    }
  }, "Email Address ", __jsx("span", {
    className: "required",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 66
    }
  }, "*")), __jsx("input", {
    type: "email",
    name: "email",
    className: "form-control",
    onChange: handleOnChange,
    value: state.email.value,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 45
    }
  }), state.email.error && __jsx("p", {
    style: errorStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 67
    }
  }, state.email.error))), __jsx("div", {
    className: "col-lg-6 col-md-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 41
    }
  }, __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 45
    }
  }, "Phone ", __jsx("span", {
    className: "required",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 58
    }
  }, "*")), __jsx("input", {
    type: "text",
    name: "phone",
    className: "form-control",
    onChange: handleOnChange,
    value: state.phone.value,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 45
    }
  }), state.phone.error && __jsx("p", {
    style: errorStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 67
    }
  }, state.phone.error))), __jsx("div", {
    className: "col-lg-12 col-md-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "form-check",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 41
    }
  }, __jsx("input", {
    type: "checkbox",
    className: "form-check-input",
    id: "create-an-account",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 45
    }
  }), __jsx("label", {
    className: "form-check-label",
    htmlFor: "create-an-account",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 45
    }
  }, "Create an account?"))), __jsx("div", {
    className: "col-lg-12 col-md-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "form-check",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263,
      columnNumber: 41
    }
  }, __jsx("input", {
    type: "checkbox",
    className: "form-check-input",
    id: "ship-different-address",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264,
      columnNumber: 45
    }
  }), __jsx("label", {
    className: "form-check-label",
    htmlFor: "ship-different-address",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 45
    }
  }, "Ship to a different address?"))), __jsx("div", {
    className: "col-lg-12 col-md-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270,
      columnNumber: 41
    }
  }, __jsx("textarea", {
    name: "notes",
    id: "notes",
    cols: "30",
    rows: "6",
    placeholder: "Order Notes",
    className: "form-control",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271,
      columnNumber: 45
    }
  })))))), __jsx("div", {
    className: "col-lg-6 col-md-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "order-details",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279,
      columnNumber: 29
    }
  }, __jsx("h3", {
    className: "title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280,
      columnNumber: 33
    }
  }, "Your Order"), __jsx(_OrderSummary__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282,
      columnNumber: 33
    }
  }), __jsx("div", {
    className: "payment-method",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284,
      columnNumber: 33
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285,
      columnNumber: 37
    }
  }, __jsx("input", {
    type: "radio",
    id: "direct-bank-transfer",
    name: "radio-group",
    defaultChecked: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286,
      columnNumber: 41
    }
  }), __jsx("label", {
    htmlFor: "direct-bank-transfer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287,
      columnNumber: 41
    }
  }, "Direct Bank Transfer"), "Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account."), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291,
      columnNumber: 37
    }
  }, __jsx("input", {
    type: "radio",
    id: "paypal",
    name: "radio-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292,
      columnNumber: 41
    }
  }), __jsx("label", {
    htmlFor: "paypal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293,
      columnNumber: 41
    }
  }, "PayPal")), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295,
      columnNumber: 37
    }
  }, __jsx("input", {
    type: "radio",
    id: "cash-on-delivery",
    name: "radio-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296,
      columnNumber: 41
    }
  }), __jsx("label", {
    htmlFor: "cash-on-delivery",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 41
    }
  }, "Cash on Delivery"))), __jsx(_payments_Payment__WEBPACK_IMPORTED_MODULE_4__["default"], {
    amount: totalAmount * 100,
    disabled: disable,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301,
      columnNumber: 33
    }
  })))))));
}

_s(CheckoutForm, "TJwydCSN0z/x09ht3aUZVL9ZvgI=", false, function () {
  return [_userForm__WEBPACK_IMPORTED_MODULE_5__["default"]];
});

_c = CheckoutForm;

var mapStateToProps = function mapStateToProps(state) {
  return {
    total: state.total,
    shipping: state.shipping
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(CheckoutForm));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NoZWNrb3V0L0NoZWNrb3V0Rm9ybS5qcyJdLCJuYW1lcyI6WyJDaGVja291dEZvcm0iLCJ0b3RhbCIsInNoaXBwaW5nIiwiaGFuZGxlU3VibWl0IiwiY29uc29sZSIsImxvZyIsInRvdGFsQW1vdW50IiwidG9GaXhlZCIsInN0YXRlU2NoZW1hIiwiZmlyc3ROYW1lIiwidmFsdWUiLCJlcnJvciIsImxhc3ROYW1lIiwiYWRkcmVzcyIsImNpdHkiLCJzdGF0ZSIsInppcCIsImVtYWlsIiwicGhvbmUiLCJ2YWxpZGF0aW9uU3RhdGVTY2hlbWEiLCJyZXF1aXJlZCIsInZhbGlkYXRvciIsInJlZ0V4IiwidXNlRm9ybSIsImhhbmRsZU9uQ2hhbmdlIiwiaGFuZGxlT25TdWJtaXQiLCJkaXNhYmxlIiwiZXJyb3JTdHlsZSIsImNvbG9yIiwiZm9udFNpemUiLCJtYXBTdGF0ZVRvUHJvcHMiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxZQUFULE9BQXlDO0FBQUE7O0FBQUEsTUFBbEJDLEtBQWtCLFFBQWxCQSxLQUFrQjtBQUFBLE1BQVhDLFFBQVcsUUFBWEEsUUFBVzs7QUFFckMsV0FBU0MsWUFBVCxHQUF3QjtBQUNwQkMsV0FBTyxDQUFDQyxHQUFSLENBQVksaUJBQVo7QUFDSDs7QUFFRCxNQUFJQyxXQUFXLEdBQUcsQ0FBQ0wsS0FBSyxHQUFHQyxRQUFULEVBQW1CSyxPQUFuQixDQUEyQixDQUEzQixDQUFsQjtBQUVBLE1BQU1DLFdBQVcsR0FBRztBQUNoQkMsYUFBUyxFQUFFO0FBQUNDLFdBQUssRUFBRSxFQUFSO0FBQVlDLFdBQUssRUFBRTtBQUFuQixLQURLO0FBRWhCQyxZQUFRLEVBQUU7QUFBQ0YsV0FBSyxFQUFFLEVBQVI7QUFBWUMsV0FBSyxFQUFFO0FBQW5CLEtBRk07QUFHaEJFLFdBQU8sRUFB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YjtBQUZiLEdBQVA7QUFJSCxDQUxEOztBQU9lNkIsMEhBQU8sQ0FDbEJELGVBRGtCLENBQVAsQ0FFYjlCLFlBRmEsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcY2hlY2tvdXQuanMuY2RiYWQyYjlkODE1MWE5OGE0ZWYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBPcmRlclN1bW1hcnkgZnJvbSAnLi9PcmRlclN1bW1hcnknO1xuaW1wb3J0IFBheW1lbnQgZnJvbSAnLi4vcGF5bWVudHMvUGF5bWVudCc7XG5pbXBvcnQgdXNlRm9ybSBmcm9tICcuL3VzZXJGb3JtJztcblxuZnVuY3Rpb24gQ2hlY2tvdXRGb3JtKHt0b3RhbCwgc2hpcHBpbmd9KSB7XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRm9ybSBzdWJtaXR0ZWQuXCIpO1xuICAgIH1cblxuICAgIGxldCB0b3RhbEFtb3VudCA9ICh0b3RhbCArIHNoaXBwaW5nKS50b0ZpeGVkKDIpXG4gICAgXG4gICAgY29uc3Qgc3RhdGVTY2hlbWEgPSB7XG4gICAgICAgIGZpcnN0TmFtZToge3ZhbHVlOiBcIlwiLCBlcnJvcjogXCJcIn0sXG4gICAgICAgIGxhc3ROYW1lOiB7dmFsdWU6IFwiXCIsIGVycm9yOiBcIlwifSxcbiAgICAgICAgYWRkcmVzczoge3ZhbHVlOiBcIlwiLCBlcnJvcjogXCJcIn0sXG4gICAgICAgIGNpdHk6IHt2YWx1ZTogXCJcIiwgZXJyb3I6IFwiXCJ9LFxuICAgICAgICBzdGF0ZToge3ZhbHVlOiBcIlwiLCBlcnJvcjogXCJcIn0sXG4gICAgICAgIHppcDoge3ZhbHVlOiBcIlwiLCBlcnJvcjogXCJcIn0sXG4gICAgICAgIGVtYWlsOiB7dmFsdWU6IFwiXCIsIGVycm9yOiBcIlwifSxcbiAgICAgICAgcGhvbmU6IHt2YWx1ZTogXCJcIiwgZXJyb3I6IFwiXCJ9XG4gICAgfTtcblxuICAgIGNvbnN0IHZhbGlkYXRpb25TdGF0ZVNjaGVtYSA9IHtcbiAgICAgICAgZmlyc3ROYW1lOiB7XG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgIHZhbGlkYXRvcjoge1xuICAgICAgICAgICAgcmVnRXg6IC9eW2EtekEtWl0rJC8sXG4gICAgICAgICAgICBlcnJvcjogXCJJbnZhbGlkIGZpcnN0IG5hbWUgZm9ybWF0LlwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgbGFzdE5hbWU6IHtcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgdmFsaWRhdG9yOiB7XG4gICAgICAgICAgICByZWdFeDogL15bYS16QS1aXSskLyxcbiAgICAgICAgICAgIGVycm9yOiBcIkludmFsaWQgbGFzdCBuYW1lIGZvcm1hdC5cIlxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGFkZHJlc3M6IHtcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgdmFsaWRhdG9yOiB7XG4gICAgICAgICAgICAgICAgZXJyb3I6IFwiSW52YWxpZCBhZGRyZXNzIGZvcm1hdC5cIlxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGNpdHk6IHtcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgdmFsaWRhdG9yOiB7XG4gICAgICAgICAgICAgICAgZXJyb3I6IFwiSW52YWxpZCBsYXN0IG5hbWUgZm9ybWF0LlwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgc3RhdGU6IHtcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgdmFsaWRhdG9yOiB7XG4gICAgICAgICAgICAgICAgZXJyb3I6IFwiSW52YWxpZCBsYXN0IG5hbWUgZm9ybWF0LlwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgemlwOiB7XG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgIHZhbGlkYXRvcjoge1xuICAgICAgICAgICAgICAgIHJlZ0V4OiAvXlxcZHs1fSR8XlxcZHs1fS1cXGR7NH0kLyxcbiAgICAgICAgICAgICAgICBlcnJvcjogXCJJbnZhbGlkIHppcCBmb3JtYXQsIHVzZSBsaWtlIDEyMzQ1LlwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgZW1haWw6IHtcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgdmFsaWRhdG9yOiB7XG4gICAgICAgICAgICAgICAgcmVnRXg6IC9eKChbXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKFxcLltePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSspKil8KFwiLitcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfV0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvLFxuICAgICAgICAgICAgICAgIGVycm9yOiBcIkludmFsaWQgZW1haWwgZm9ybWF0LlwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgcGhvbmU6IHtcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgdmFsaWRhdG9yOiB7XG4gICAgICAgICAgICAgICAgcmVnRXg6IC9eXFwrWzAtOV0/KClbMC05XShcXHN8XFxTKShcXGRbMC05XXs5fSkkLyxcbiAgICAgICAgICAgICAgICBlcnJvcjogXCJJbnZhbGlkIHBob25lIG51bWJlciBmb3JtYXQgdXNlIGxpa2UgKzI5MjM0MzI0MzI0MzIuXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCB7IHN0YXRlLCBoYW5kbGVPbkNoYW5nZSwgaGFuZGxlT25TdWJtaXQsIGRpc2FibGUgfSA9IHVzZUZvcm0gKFxuICAgICAgICBzdGF0ZVNjaGVtYSxcbiAgICAgICAgdmFsaWRhdGlvblN0YXRlU2NoZW1hLFxuICAgICAgICBoYW5kbGVTdWJtaXRcbiAgICApO1xuICAgIFxuICAgIGNvbnN0IGVycm9yU3R5bGUgPSB7XG4gICAgICAgIGNvbG9yOiBcInJlZFwiLFxuICAgICAgICBmb250U2l6ZTogXCIxM3B4XCJcbiAgICB9O1xuICAgIFxuICAgIHJldHVybiAoXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNoZWNrb3V0LWFyZWEgcHRiLTYwXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEyIGNvbC1tZC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZU9uU3VibWl0fT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgY29sLW1kLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiaWxsaW5nLWRldGFpbHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRpdGxlXCI+QmlsbGluZyBEZXRhaWxzPC9oMz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTIgY29sLW1kLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5Db3VudHJ5IDxzcGFuIGNsYXNzTmFtZT1cInJlcXVpcmVkXCI+Kjwvc3Bhbj48L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlbGVjdC1ib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY291bnRyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjVcIj5Vbml0ZWQgQXJhYiBFbWlyYXRlczwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxXCI+Q2hpbmE8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMlwiPlVuaXRlZCBLaW5nZG9tPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjBcIj5HZXJtYW55PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjNcIj5GcmFuY2U8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNFwiPkphcGFuPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNiBjb2wtbWQtNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+Rmlyc3QgTmFtZSA8c3BhbiBjbGFzc05hbWU9XCJyZXF1aXJlZFwiPio8L3NwYW4+PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJmaXJzdE5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlT25DaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c3RhdGUuZmlyc3ROYW1lLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3RhdGUuZmlyc3ROYW1lLmVycm9yICYmIDxwIHN0eWxlPXtlcnJvclN0eWxlfT57c3RhdGUuZmlyc3ROYW1lLmVycm9yfTwvcD59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNiBjb2wtbWQtNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+TGFzdCBOYW1lIDxzcGFuIGNsYXNzTmFtZT1cInJlcXVpcmVkXCI+Kjwvc3Bhbj48L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImxhc3ROYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZU9uQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N0YXRlLmxhc3ROYW1lLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3RhdGUubGFzdE5hbWUuZXJyb3IgJiYgPHAgc3R5bGU9e2Vycm9yU3R5bGV9PntzdGF0ZS5sYXN0TmFtZS5lcnJvcn08L3A+fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEyIGNvbC1tZC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+Q29tcGFueSBOYW1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMiBjb2wtbWQtNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+QWRkcmVzcyA8c3BhbiBjbGFzc05hbWU9XCJyZXF1aXJlZFwiPio8L3NwYW4+PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJhZGRyZXNzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZU9uQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N0YXRlLmFkZHJlc3MudmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdGF0ZS5hZGRyZXNzLmVycm9yICYmIDxwIHN0eWxlPXtlcnJvclN0eWxlfT57c3RhdGUuYWRkcmVzcy5lcnJvcn08L3A+fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEyIGNvbC1tZC02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5Ub3duIC8gQ2l0eSA8c3BhbiBjbGFzc05hbWU9XCJyZXF1aXJlZFwiPio8L3NwYW4+PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjaXR5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZU9uQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N0YXRlLmNpdHkudmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdGF0ZS5jaXR5LmVycm9yICYmIDxwIHN0eWxlPXtlcnJvclN0eWxlfT57c3RhdGUuY2l0eS5lcnJvcn08L3A+fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgY29sLW1kLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlN0YXRlIC8gQ291bnR5IDxzcGFuIGNsYXNzTmFtZT1cInJlcXVpcmVkXCI+Kjwvc3Bhbj48L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInN0YXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZU9uQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N0YXRlLnN0YXRlLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3RhdGUuc3RhdGUuZXJyb3IgJiYgPHAgc3R5bGU9e2Vycm9yU3R5bGV9PntzdGF0ZS5zdGF0ZS5lcnJvcn08L3A+fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgY29sLW1kLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlBvc3Rjb2RlIC8gWmlwIDxzcGFuIGNsYXNzTmFtZT1cInJlcXVpcmVkXCI+Kjwvc3Bhbj48L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInppcFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZU9uQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N0YXRlLnppcC52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N0YXRlLnppcC5lcnJvciAmJiA8cCBzdHlsZT17ZXJyb3JTdHlsZX0+e3N0YXRlLnppcC5lcnJvcn08L3A+fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgY29sLW1kLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkVtYWlsIEFkZHJlc3MgPHNwYW4gY2xhc3NOYW1lPVwicmVxdWlyZWRcIj4qPC9zcGFuPjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZU9uQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N0YXRlLmVtYWlsLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3RhdGUuZW1haWwuZXJyb3IgJiYgPHAgc3R5bGU9e2Vycm9yU3R5bGV9PntzdGF0ZS5lbWFpbC5lcnJvcn08L3A+fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgY29sLW1kLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlBob25lIDxzcGFuIGNsYXNzTmFtZT1cInJlcXVpcmVkXCI+Kjwvc3Bhbj48L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBob25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZU9uQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N0YXRlLnBob25lLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3RhdGUucGhvbmUuZXJyb3IgJiYgPHAgc3R5bGU9e2Vycm9yU3R5bGV9PntzdGF0ZS5waG9uZS5lcnJvcn08L3A+fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEyIGNvbC1tZC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jaGVja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbnB1dFwiIGlkPVwiY3JlYXRlLWFuLWFjY291bnRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1sYWJlbFwiIGh0bWxGb3I9XCJjcmVhdGUtYW4tYWNjb3VudFwiPkNyZWF0ZSBhbiBhY2NvdW50PzwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTIgY29sLW1kLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlucHV0XCIgaWQ9XCJzaGlwLWRpZmZlcmVudC1hZGRyZXNzXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY2hlY2stbGFiZWxcIiBodG1sRm9yPVwic2hpcC1kaWZmZXJlbnQtYWRkcmVzc1wiPlNoaXAgdG8gYSBkaWZmZXJlbnQgYWRkcmVzcz88L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEyIGNvbC1tZC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgbmFtZT1cIm5vdGVzXCIgaWQ9XCJub3Rlc1wiIGNvbHM9XCIzMFwiIHJvd3M9XCI2XCIgcGxhY2Vob2xkZXI9XCJPcmRlciBOb3Rlc1wiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNiBjb2wtbWQtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9yZGVyLWRldGFpbHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRpdGxlXCI+WW91ciBPcmRlcjwvaDM+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9yZGVyU3VtbWFyeSAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGF5bWVudC1tZXRob2RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBpZD1cImRpcmVjdC1iYW5rLXRyYW5zZmVyXCIgbmFtZT1cInJhZGlvLWdyb3VwXCIgZGVmYXVsdENoZWNrZWQ9e3RydWV9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJkaXJlY3QtYmFuay10cmFuc2ZlclwiPkRpcmVjdCBCYW5rIFRyYW5zZmVyPC9sYWJlbD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1ha2UgeW91ciBwYXltZW50IGRpcmVjdGx5IGludG8gb3VyIGJhbmsgYWNjb3VudC4gUGxlYXNlIHVzZSB5b3VyIE9yZGVyIElEIGFzIHRoZSBwYXltZW50IHJlZmVyZW5jZS4gWW91ciBvcmRlciB3aWxsIG5vdCBiZSBzaGlwcGVkIHVudGlsIHRoZSBmdW5kcyBoYXZlIGNsZWFyZWQgaW4gb3VyIGFjY291bnQuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgaWQ9XCJwYXlwYWxcIiBuYW1lPVwicmFkaW8tZ3JvdXBcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGF5cGFsXCI+UGF5UGFsPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBpZD1cImNhc2gtb24tZGVsaXZlcnlcIiBuYW1lPVwicmFkaW8tZ3JvdXBcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY2FzaC1vbi1kZWxpdmVyeVwiPkNhc2ggb24gRGVsaXZlcnk8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGF5bWVudCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudD17dG90YWxBbW91bnQgKiAxMDB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICk7XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHRvdGFsOiBzdGF0ZS50b3RhbCxcbiAgICAgICAgc2hpcHBpbmc6IHN0YXRlLnNoaXBwaW5nXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICAgIG1hcFN0YXRlVG9Qcm9wc1xuKShDaGVja291dEZvcm0pXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=