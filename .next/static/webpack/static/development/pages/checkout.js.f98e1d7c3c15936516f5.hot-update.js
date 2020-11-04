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
/* harmony import */ var react_coinbase_commerce__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-coinbase-commerce */ "./node_modules/react-coinbase-commerce/dist/index.js");
/* harmony import */ var react_coinbase_commerce__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_coinbase_commerce__WEBPACK_IMPORTED_MODULE_6__);
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
      lineNumber: 104,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "col-lg-12 col-md-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 21
    }
  })), __jsx("form", {
    onSubmit: handleOnSubmit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "col-lg-6 col-md-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "billing-details",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 29
    }
  }, __jsx("h3", {
    className: "title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 33
    }
  }, "Billing Details"), __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "col-lg-12 col-md-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 41
    }
  }, __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 45
    }
  }, "Country ", __jsx("span", {
    className: "required",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 60
    }
  }, "*")), __jsx("div", {
    className: "select-box",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 45
    }
  }, __jsx("select", {
    className: "form-control",
    name: "country",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 49
    }
  }, __jsx("option", {
    value: "5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 53
    }
  }, "United Arab Emirates"), __jsx("option", {
    value: "1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 53
    }
  }, "China"), __jsx("option", {
    value: "2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 53
    }
  }, "United Kingdom"), __jsx("option", {
    value: "0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 53
    }
  }, "Germany"), __jsx("option", {
    value: "3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 53
    }
  }, "France"), __jsx("option", {
    value: "4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 53
    }
  }, "Japan"))))), __jsx("div", {
    className: "col-lg-6 col-md-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 41
    }
  }, __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 45
    }
  }, "First Name ", __jsx("span", {
    className: "required",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
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
      lineNumber: 141,
      columnNumber: 45
    }
  }), state.firstName.error && __jsx("p", {
    style: errorStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 71
    }
  }, state.firstName.error))), __jsx("div", {
    className: "col-lg-6 col-md-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 41
    }
  }, __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 45
    }
  }, "Last Name ", __jsx("span", {
    className: "required",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
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
      lineNumber: 155,
      columnNumber: 45
    }
  }), state.lastName.error && __jsx("p", {
    style: errorStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 70
    }
  }, state.lastName.error))), __jsx("div", {
    className: "col-lg-12 col-md-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 41
    }
  }, __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 45
    }
  }, "Company Name"), __jsx("input", {
    type: "text",
    className: "form-control",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 45
    }
  }))), __jsx("div", {
    className: "col-lg-12 col-md-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 41
    }
  }, __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 45
    }
  }, "Address ", __jsx("span", {
    className: "required",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
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
      lineNumber: 176,
      columnNumber: 45
    }
  }), state.address.error && __jsx("p", {
    style: errorStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 69
    }
  }, state.address.error))), __jsx("div", {
    className: "col-lg-12 col-md-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 41
    }
  }, __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 45
    }
  }, "Town / City ", __jsx("span", {
    className: "required",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
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
      lineNumber: 190,
      columnNumber: 45
    }
  }), state.city.error && __jsx("p", {
    style: errorStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 66
    }
  }, state.city.error))), __jsx("div", {
    className: "col-lg-6 col-md-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 41
    }
  }, __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 45
    }
  }, "State / County ", __jsx("span", {
    className: "required",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
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
      lineNumber: 204,
      columnNumber: 45
    }
  }), state.state.error && __jsx("p", {
    style: errorStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 67
    }
  }, state.state.error))), __jsx("div", {
    className: "col-lg-6 col-md-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 41
    }
  }, __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 45
    }
  }, "Postcode / Zip ", __jsx("span", {
    className: "required",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
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
      lineNumber: 218,
      columnNumber: 45
    }
  }), state.zip.error && __jsx("p", {
    style: errorStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 65
    }
  }, state.zip.error))), __jsx("div", {
    className: "col-lg-6 col-md-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 41
    }
  }, __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 45
    }
  }, "Email Address ", __jsx("span", {
    className: "required",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
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
      lineNumber: 232,
      columnNumber: 45
    }
  }), state.email.error && __jsx("p", {
    style: errorStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 67
    }
  }, state.email.error))), __jsx("div", {
    className: "col-lg-6 col-md-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 41
    }
  }, __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 45
    }
  }, "Phone ", __jsx("span", {
    className: "required",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
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
      lineNumber: 246,
      columnNumber: 45
    }
  }), state.phone.error && __jsx("p", {
    style: errorStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 67
    }
  }, state.phone.error))), __jsx("div", {
    className: "col-lg-12 col-md-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "form-check",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 41
    }
  }, __jsx("input", {
    type: "checkbox",
    className: "form-check-input",
    id: "create-an-account",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259,
      columnNumber: 45
    }
  }), __jsx("label", {
    className: "form-check-label",
    htmlFor: "create-an-account",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260,
      columnNumber: 45
    }
  }, "Create an account?"))), __jsx("div", {
    className: "col-lg-12 col-md-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "form-check",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 41
    }
  }, __jsx("input", {
    type: "checkbox",
    className: "form-check-input",
    id: "ship-different-address",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 45
    }
  }), __jsx("label", {
    className: "form-check-label",
    htmlFor: "ship-different-address",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267,
      columnNumber: 45
    }
  }, "Ship to a different address?"))), __jsx("div", {
    className: "col-lg-12 col-md-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272,
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
      lineNumber: 273,
      columnNumber: 45
    }
  })))))), __jsx("div", {
    className: "col-lg-6 col-md-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "order-details",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281,
      columnNumber: 29
    }
  }, __jsx("h3", {
    className: "title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282,
      columnNumber: 33
    }
  }, "Your Order"), __jsx(_OrderSummary__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284,
      columnNumber: 33
    }
  }), __jsx("div", {
    className: "payment-method",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286,
      columnNumber: 33
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287,
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
      lineNumber: 288,
      columnNumber: 41
    }
  }), __jsx("label", {
    htmlFor: "direct-bank-transfer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289,
      columnNumber: 41
    }
  }, "Direct Bank Transfer"), "Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account."), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293,
      columnNumber: 37
    }
  }, __jsx("input", {
    type: "radio",
    id: "paypal",
    name: "radio-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294,
      columnNumber: 41
    }
  }), __jsx("label", {
    htmlFor: "paypal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295,
      columnNumber: 41
    }
  }, "PayPal")), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 37
    }
  }, __jsx("input", {
    type: "radio",
    id: "cash-on-delivery",
    name: "radio-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298,
      columnNumber: 41
    }
  }), __jsx("label", {
    htmlFor: "cash-on-delivery",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299,
      columnNumber: 41
    }
  }, "Cash on Delivery"))), __jsx(react_coinbase_commerce__WEBPACK_IMPORTED_MODULE_6___default.a, {
    checkoutId: '30934862-d980-46cb-9402-43c81b0cabd5',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302,
      columnNumber: 33
    }
  }), __jsx(_payments_Payment__WEBPACK_IMPORTED_MODULE_4__["default"], {
    amount: totalAmount * 100,
    disabled: disable,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303,
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

/***/ }),

/***/ "./node_modules/react-coinbase-commerce/dist/index.js":
/*!************************************************************!*\
  !*** ./node_modules/react-coinbase-commerce/dist/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist/",n(n.s=1)}([function(e,t){e.exports=__webpack_require__(/*! react */ "./node_modules/react/index.js")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(0)),i=u(n(2)),c=u(n(5));function u(e){return e&&e.__esModule?e:{default:e}}var l=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleButtonClick=function(){n.setState({showModal:!0})},n.handleModalClose=function(){n.setState({showModal:!1}),n.props.onModalClosed&&n.props.onModalClosed()},n.handleError=function(e){console.error(e),n.setState({showModal:!1})},n.state={showModal:!1},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"render",value:function(){var e=this.state.showModal,t=this.props,n=t.onLoad,r=t.onChargeSuccess,u=t.onChargeFailure,l=t.checkoutId,s=t.chargeId,f=t.customMetadata,d=t.onPaymentDetected,p=t.disableCaching,h=t.wrapperStyle,y={onLoad:n,onChargeSuccess:r,onChargeFailure:u,checkoutId:l,chargeId:s,onPaymentDetected:d,disableCaching:p},b=function(e){var t=o({},e);return["onLoad","onChargeSuccess","onChargeFailure","customMetadata","onPaymentDetected","checkoutId","chargeId","disableCaching","wrapperStyle"].forEach((function(e){return delete t[e]})),t}(this.props);return a.createElement("div",{style:h},a.createElement("a",{href:"https://commerce.coinbase.com",rel:"external",title:"Pay with Bitcoin, Bitcoin Cash, DAI, Litecoin, Ethereum, or USD Coin",onClick:function(e){return e.preventDefault()}},a.createElement(i.default,o({},b,{onClick:this.handleButtonClick}))),e&&a.createElement(c.default,o({},y,{onModalClose:this.handleModalClose,onError:this.handleError,customMetadata:f})))}}]),t}(a.Component);t.default=l},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(0));function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}n(3);var u=function(e){function t(){return i(this,t),c(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"render",value:function(){var e=this.props,t=e.styled,n=e.children,o=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["styled","children"]);return a.createElement("button",r({},o,{className:t?"coinbase-commerce-button":o.className}),n||"Buy With Crypto")}}]),t}(a.PureComponent);t.default=u},function(e,t,n){},,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(0)),a=n(6);n(7),n(9);var i=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.buildSrc=function(e){var t=n.props,r=t.checkoutId,o=t.chargeId,a=t.customMetadata,i=t.disableCaching;var c=void 0,u=void 0;if(r)u=r,c="checkout";else{if(!o)throw new Error("must supply either checkoutId or chargeId prop");u=o,c="charges"}var l={origin:e,version:"1.4.4",buttonId:n.uuid,cacheDisabled:i},s="";return a&&"string"!=typeof a?console.error('Received customMetadata not of "string" type. Ignoring.'):a&&(s=a),s&&(l.custom=s),n.origin+"/embed/"+c+"/"+encodeURI(u)+"?"+function(e){var t=[],n=window.encodeURIComponent;for(var r in e)e.hasOwnProperty(r)&&t.push(n(r)+"="+n(e[r]));return t.join("&")}(l)},n.isValidMessage=function(e){return e.origin===n.origin&&e.data.buttonId===n.uuid},n.handleMessage=function(e){if(n.isValidMessage(e)){var t=n.props,r=t.onChargeSuccess,o=t.onChargeFailure,a=t.onModalClose,i=t.onError,c=t.onPaymentDetected;switch(e.data.event){case"charge_confirmed":r&&r(e.data);break;case"charge_failed":o&&o(e.data);break;case"payment_detected":c&&c(e.data);break;case"error_not_found":i(e.data);break;case"checkout_modal_closed":a()}}},n.handleIFrameLoaded=function(){n.setState({loading:!1}),n.props.onLoad&&n.props.onLoad()},n.origin="https://commerce.coinbase.com",n.uuid=(0,a.generateUUID)(),n.state={loading:!0,src:null},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidMount",value:function(){window.addEventListener("message",this.handleMessage);var e=window.location.protocol+"//"+window.location.hostname+(window.location.port?":"+window.location.port:"");this.setState({src:this.buildSrc(e)})}},{key:"componentWillUnmount",value:function(){window.removeEventListener("message",this.handleMessage)}},{key:"render",value:function(){var e=this.state,t=e.loading,n=e.src;return o.createElement("div",{className:"coinbase-commerce-iframe-container"},t||null===n&&o.createElement("div",{className:"commerce-loading-spinner"}),null!==n&&o.createElement("iframe",{onLoad:this.handleIFrameLoaded,className:"coinbase-commerce-iframe",src:n,scrolling:"no",frameBorder:"no"}))}}]),t}(o.Component);t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.generateUUID=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)}))}},function(e,t,n){},,function(e,t,n){}]);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NoZWNrb3V0L0NoZWNrb3V0Rm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtY29pbmJhc2UtY29tbWVyY2UvZGlzdC9pbmRleC5qcyJdLCJuYW1lcyI6WyJDaGVja291dEZvcm0iLCJ0b3RhbCIsInNoaXBwaW5nIiwiaGFuZGxlU3VibWl0IiwiY29uc29sZSIsImxvZyIsInRvdGFsQW1vdW50IiwidG9GaXhlZCIsInN0YXRlU2NoZW1hIiwiZmlyc3ROYW1lIiwidmFsdWUiLCJlcnJvciIsImxhc3ROYW1lIiwiYWRkcmVzcyIsImNpdHkiLCJzdGF0ZSIsInppcCIsImVtYWlsIiwicGhvbmUiLCJ2YWxpZGF0aW9uU3RhdGVTY2hlbWEiLCJyZXF1aXJlZCIsInZhbGlkYXRvciIsInJlZ0V4IiwidXNlRm9ybSIsImhhbmRsZU9uQ2hhbmdlIiwiaGFuZGxlT25TdWJtaXQiLCJkaXNhYmxlIiwiZXJyb3JTdHlsZSIsImNvbG9yIiwiZm9udFNpemUiLCJtYXBTdGF0ZVRvUHJvcHMiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsU0FBU0EsWUFBVCxPQUF5QztBQUFBOztBQUFBLE1BQWxCQyxLQUFrQixRQUFsQkEsS0FBa0I7QUFBQSxNQUFYQyxRQUFXLFFBQVhBLFFBQVc7O0FBRXJDLFdBQVNDLFlBQVQsR0FBd0I7QUFDcEJDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLGlCQUFaO0FBQ0g7O0FBRUQsTUFBSUMsV0FBVyxHQUFHLENBQUNMLEtBQUssR0FBR0MsUUFBVCxFQUFtQkssT0FBbkIsQ0FBMkIsQ0FBM0IsQ0FBbEI7QUFFQSxNQUFNQyxXQUFXLEdBQUc7QUFDaEJDLGFBQVMsRUFBRTtBQUFDQyxXQUFLLEVBQUUsRUFBUjtBQUFZQyxXQUFLLEVBQUU7QUFBbkIsS0FESztBQUVoQkMsWUFBUSxFQUFFO0FBQUNGLFdBQUssRUFBRSxFQUFSO0FBQVlDLFdBQUssRUFBRTtBQUFuQixLQUZNO0FBR2hCRSxXQUFPLEVBQUU7QUFBQ0gsV0FBSyxFQUFFLEVBQVI7QUFBWUMsV0FBSyxFQUFFO0FBQW5CLEtBSE87QUFJaEJHLFFBQUksRUFBRTtBQUFDSixXQUFLLEVBQUUsRUFBUjtBQUFZQyxXQUFLLEVBQUU7QUFBbkIsS0FKVTtBQUtoQkksU0FBSyxFQUFFO0FBQUNMLFdBQUssRUFBRSxFQUFSO0FBQVlDLFdBQUssRUFBRTtBQUFuQixLQUxTO0FBTWhCSyxPQUFHLEVBQUU7QUFBQ04sV0FBSyxFQUFFLEVBQVI7QUFBWUMsV0FBSyxFQUFFO0FBQW5CLEtBTlc7QUFPaEJNLFNBQUssRUFBRTtBQUFDUCxXQUFLLEVBQUUsRUFBUjtBQUFZQyxXQUFLLEVBQUU7QUFBbkIsS0FQUztBQVFoQk8sU0FBSyxFQUFFO0FBQUNSLFdBQUssRUFBRSxFQUFSO0FBQVlDLFdBQUssRUFBRTtBQUFuQjtBQVJTLEdBQXBCO0FBV0EsTUFBTVEscUJBQXFCLEdBQUc7QUFDMUJWLGFBQVMsRUFBRTtBQUNQVyxjQUFRLEVBQUUsSUFESDtBQUVQQyxlQUFTLEVBQUU7QUFDWEMsYUFBSyxFQUFFLGFBREk7QUFFWFgsYUFBSyxFQUFFO0FBRkk7QUFGSixLQURlO0FBUzFCQyxZQUFRLEVBQUU7QUFDTlEsY0FBUSxFQUFFLElBREo7QUFFTkMsZUFBUyxFQUFFO0FBQ1hDLGFBQUssRUFBRSxhQURJO0FBRVhYLGFBQUssRUFBRTtBQUZJO0FBRkwsS0FUZ0I7QUFpQjFCRSxXQUFPLEVBQUU7QUFDTE8sY0FBUSxFQUFFLElBREw7QUFFTEMsZUFBUyxFQUFFO0FBQ1BWLGFBQUssRUFBRTtBQURBO0FBRk4sS0FqQmlCO0FBd0IxQkcsUUFBSSxFQUFFO0FBQ0ZNLGNBQVEsRUFBRSxJQURSO0FBRUZDLGVBQVMsRUFBRTtBQUNQVixhQUFLLEVBQUU7QUFEQTtBQUZULEtBeEJvQjtBQStCMUJJLFNBQUssRUFBRTtBQUNISyxjQUFRLEVBQUUsSUFEUDtBQUVIQyxlQUFTLEVBQUU7QUFDUFYsYUFBSyxFQUFFO0FBREE7QUFGUixLQS9CbUI7QUFzQzFCSyxPQUFHLEVBQUU7QUFDREksY0FBUSxFQUFFLElBRFQ7QUFFREMsZUFBUyxFQUFFO0FBQ1BDLGFBQUssRUFBRSx1QkFEQTtBQUVQWCxhQUFLLEVBQUU7QUFGQTtBQUZWLEtBdENxQjtBQThDMUJNLFNBQUssRUFBRTtBQUNIRyxjQUFRLEVBQUUsSUFEUDtBQUVIQyxlQUFTLEVBQUU7QUFDUEMsYUFBSyxFQUFFLHdKQURBO0FBRVBYLGFBQUssRUFBRTtBQUZBO0FBRlIsS0E5Q21CO0FBc0QxQk8sU0FBSyxFQUFFO0FBQ0hFLGNBQVEsRUFBRSxJQURQO0FBRUhDLGVBQVMsRUFBRTtBQUNQQyxhQUFLLEVBQUUsc0NBREE7QUFFUFgsYUFBSyxFQUFFO0FBRkE7QUFGUjtBQXREbUIsR0FBOUI7O0FBbkJxQyxpQkFrRnNCWSx5REFBTyxDQUM5RGYsV0FEOEQsRUFFOURXLHFCQUY4RCxFQUc5RGhCLFlBSDhELENBbEY3QjtBQUFBLE1Ba0Y3QlksS0FsRjZCLFlBa0Y3QkEsS0FsRjZCO0FBQUEsTUFrRnRCUyxjQWxGc0IsWUFrRnRCQSxjQWxGc0I7QUFBQSxNQWtGTkMsY0FsRk0sWUFrRk5BLGNBbEZNO0FBQUEsTUFrRlVDLE9BbEZWLFlBa0ZVQSxPQWxGVjs7QUF3RnJDLE1BQU1DLFVBQVUsR0FBRztBQUNmQyxTQUFLLEVBQUUsS0FEUTtBQUVmQyxZQUFRLEVBQUU7QUFGSyxHQUFuQjtBQUtBLFNBQ0k7QUFBUyxhQUFTLEVBQUMsc0JBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBQyxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBQyxxQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FESixFQU9JO0FBQU0sWUFBUSxFQUFFSixjQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsb0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLGlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFJLGFBQVMsRUFBQyxPQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREosRUFHSTtBQUFLLGFBQVMsRUFBQyxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBQyxxQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBZTtBQUFNLGFBQVMsRUFBQyxVQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQWYsQ0FESixFQUVJO0FBQUssYUFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQ0ksYUFBUyxFQUFDLGNBRGQ7QUFFSSxRQUFJLEVBQUMsU0FGVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSUk7QUFBUSxTQUFLLEVBQUMsR0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQUpKLEVBS0k7QUFBUSxTQUFLLEVBQUMsR0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTEosRUFNSTtBQUFRLFNBQUssRUFBQyxHQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBTkosRUFPSTtBQUFRLFNBQUssRUFBQyxHQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFQSixFQVFJO0FBQVEsU0FBSyxFQUFDLEdBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVJKLEVBU0k7QUFBUSxTQUFLLEVBQUMsR0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBVEosQ0FESixDQUZKLENBREosQ0FESixFQW9CSTtBQUFLLGFBQVMsRUFBQyxtQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBa0I7QUFBTSxhQUFTLEVBQUMsVUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFsQixDQURKLEVBRUk7QUFDSSxRQUFJLEVBQUMsTUFEVDtBQUVJLFFBQUksRUFBQyxXQUZUO0FBR0ksYUFBUyxFQUFDLGNBSGQ7QUFJSSxZQUFRLEVBQUVELGNBSmQ7QUFLSSxTQUFLLEVBQUVULEtBQUssQ0FBQ04sU0FBTixDQUFnQkMsS0FMM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLEVBU0tLLEtBQUssQ0FBQ04sU0FBTixDQUFnQkUsS0FBaEIsSUFBeUI7QUFBRyxTQUFLLEVBQUVnQixVQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBdUJaLEtBQUssQ0FBQ04sU0FBTixDQUFnQkUsS0FBdkMsQ0FUOUIsQ0FESixDQXBCSixFQWtDSTtBQUFLLGFBQVMsRUFBQyxtQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBaUI7QUFBTSxhQUFTLEVBQUMsVUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFqQixDQURKLEVBRUk7QUFDSSxRQUFJLEVBQUMsTUFEVDtBQUVJLFFBQUksRUFBQyxVQUZUO0FBR0ksYUFBUyxFQUFDLGNBSGQ7QUFJSSxZQUFRLEVBQUVhLGNBSmQ7QUFLSSxTQUFLLEVBQUVULEtBQUssQ0FBQ0gsUUFBTixDQUFlRixLQUwxQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosRUFTS0ssS0FBSyxDQUFDSCxRQUFOLENBQWVELEtBQWYsSUFBd0I7QUFBRyxTQUFLLEVBQUVnQixVQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBdUJaLEtBQUssQ0FBQ0gsUUFBTixDQUFlRCxLQUF0QyxDQVQ3QixDQURKLENBbENKLEVBZ0RJO0FBQUssYUFBUyxFQUFDLHFCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBQyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURKLEVBRUk7QUFBTyxRQUFJLEVBQUMsTUFBWjtBQUFtQixhQUFTLEVBQUMsY0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLENBREosQ0FoREosRUF1REk7QUFBSyxhQUFTLEVBQUMsb0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQWU7QUFBTSxhQUFTLEVBQUMsVUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFmLENBREosRUFFSTtBQUNJLFFBQUksRUFBQyxNQURUO0FBRUksUUFBSSxFQUFDLFNBRlQ7QUFHSSxhQUFTLEVBQUMsY0FIZDtBQUlJLFlBQVEsRUFBRWEsY0FKZDtBQUtJLFNBQUssRUFBRVQsS0FBSyxDQUFDRixPQUFOLENBQWNILEtBTHpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixFQVNLSyxLQUFLLENBQUNGLE9BQU4sQ0FBY0YsS0FBZCxJQUF1QjtBQUFHLFNBQUssRUFBRWdCLFVBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF1QlosS0FBSyxDQUFDRixPQUFOLENBQWNGLEtBQXJDLENBVDVCLENBREosQ0F2REosRUFxRUk7QUFBSyxhQUFTLEVBQUMsb0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQW1CO0FBQU0sYUFBUyxFQUFDLFVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBbkIsQ0FESixFQUVJO0FBQ0ksUUFBSSxFQUFDLE1BRFQ7QUFFSSxRQUFJLEVBQUMsTUFGVDtBQUdJLGFBQVMsRUFBQyxjQUhkO0FBSUksWUFBUSxFQUFFYSxjQUpkO0FBS0ksU0FBSyxFQUFFVCxLQUFLLENBQUNELElBQU4sQ0FBV0osS0FMdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLEVBU0tLLEtBQUssQ0FBQ0QsSUFBTixDQUFXSCxLQUFYLElBQW9CO0FBQUcsU0FBSyxFQUFFZ0IsVUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXVCWixLQUFLLENBQUNELElBQU4sQ0FBV0gsS0FBbEMsQ0FUekIsQ0FESixDQXJFSixFQW1GSTtBQUFLLGFBQVMsRUFBQyxtQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFBc0I7QUFBTSxhQUFTLEVBQUMsVUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUF0QixDQURKLEVBRUk7QUFDSSxRQUFJLEVBQUMsTUFEVDtBQUVJLFFBQUksRUFBQyxPQUZUO0FBR0ksYUFBUyxFQUFDLGNBSGQ7QUFJSSxZQUFRLEVBQUVhLGNBSmQ7QUFLSSxTQUFLLEVBQUVULEtBQUssQ0FBQ0EsS0FBTixDQUFZTCxLQUx2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosRUFTS0ssS0FBSyxDQUFDQSxLQUFOLENBQVlKLEtBQVosSUFBcUI7QUFBRyxTQUFLLEVBQUVnQixVQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBdUJaLEtBQUssQ0FBQ0EsS0FBTixDQUFZSixLQUFuQyxDQVQxQixDQURKLENBbkZKLEVBaUdJO0FBQUssYUFBUyxFQUFDLG1CQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBQyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUFzQjtBQUFNLGFBQVMsRUFBQyxVQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQXRCLENBREosRUFFSTtBQUNJLFFBQUksRUFBQyxNQURUO0FBRUksUUFBSSxFQUFDLEtBRlQ7QUFHSSxhQUFTLEVBQUMsY0FIZDtBQUlJLFlBQVEsRUFBRWEsY0FKZDtBQUtJLFNBQUssRUFBRVQsS0FBSyxDQUFDQyxHQUFOLENBQVVOLEtBTHJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixFQVNLSyxLQUFLLENBQUNDLEdBQU4sQ0FBVUwsS0FBVixJQUFtQjtBQUFHLFNBQUssRUFBRWdCLFVBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF1QlosS0FBSyxDQUFDQyxHQUFOLENBQVVMLEtBQWpDLENBVHhCLENBREosQ0FqR0osRUErR0k7QUFBSyxhQUFTLEVBQUMsbUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQXFCO0FBQU0sYUFBUyxFQUFDLFVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBckIsQ0FESixFQUVJO0FBQ0ksUUFBSSxFQUFDLE9BRFQ7QUFFSSxRQUFJLEVBQUMsT0FGVDtBQUdJLGFBQVMsRUFBQyxjQUhkO0FBSUksWUFBUSxFQUFFYSxjQUpkO0FBS0ksU0FBSyxFQUFFVCxLQUFLLENBQUNFLEtBQU4sQ0FBWVAsS0FMdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLEVBU0tLLEtBQUssQ0FBQ0UsS0FBTixDQUFZTixLQUFaLElBQXFCO0FBQUcsU0FBSyxFQUFFZ0IsVUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXVCWixLQUFLLENBQUNFLEtBQU4sQ0FBWU4sS0FBbkMsQ0FUMUIsQ0FESixDQS9HSixFQTZISTtBQUFLLGFBQVMsRUFBQyxtQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFhO0FBQU0sYUFBUyxFQUFDLFVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBYixDQURKLEVBRUk7QUFDSSxRQUFJLEVBQUMsTUFEVDtBQUVJLFFBQUksRUFBQyxPQUZUO0FBR0ksYUFBUyxFQUFDLGNBSGQ7QUFJSSxZQUFRLEVBQUVhLGNBSmQ7QUFLSSxTQUFLLEVBQUVULEtBQUssQ0FBQ0csS0FBTixDQUFZUixLQUx2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosRUFTS0ssS0FBSyxDQUFDRyxLQUFOLENBQVlQLEtBQVosSUFBcUI7QUFBRyxTQUFLLEVBQUVnQixVQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBdUJaLEtBQUssQ0FBQ0csS0FBTixDQUFZUCxLQUFuQyxDQVQxQixDQURKLENBN0hKLEVBMklJO0FBQUssYUFBUyxFQUFDLHFCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBQyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFPLFFBQUksRUFBQyxVQUFaO0FBQXVCLGFBQVMsRUFBQyxrQkFBakM7QUFBb0QsTUFBRSxFQUFDLG1CQUF2RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFFSTtBQUFPLGFBQVMsRUFBQyxrQkFBakI7QUFBb0MsV0FBTyxFQUFDLG1CQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUZKLENBREosQ0EzSUosRUFrSkk7QUFBSyxhQUFTLEVBQUMscUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQU8sUUFBSSxFQUFDLFVBQVo7QUFBdUIsYUFBUyxFQUFDLGtCQUFqQztBQUFvRCxNQUFFLEVBQUMsd0JBQXZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJO0FBQU8sYUFBUyxFQUFDLGtCQUFqQjtBQUFvQyxXQUFPLEVBQUMsd0JBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0NBRkosQ0FESixDQWxKSixFQXlKSTtBQUFLLGFBQVMsRUFBQyxxQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBVSxRQUFJLEVBQUMsT0FBZjtBQUF1QixNQUFFLEVBQUMsT0FBMUI7QUFBa0MsUUFBSSxFQUFDLElBQXZDO0FBQTRDLFFBQUksRUFBQyxHQUFqRDtBQUFxRCxlQUFXLEVBQUMsYUFBakU7QUFBK0UsYUFBUyxFQUFDLGNBQXpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQURKLENBekpKLENBSEosQ0FESixDQURKLEVBdUtJO0FBQUssYUFBUyxFQUFDLG9CQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBQyxlQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFJLGFBQVMsRUFBQyxPQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosRUFHSSxNQUFDLHFEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFISixFQUtJO0FBQUssYUFBUyxFQUFDLGdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBTyxRQUFJLEVBQUMsT0FBWjtBQUFvQixNQUFFLEVBQUMsc0JBQXZCO0FBQThDLFFBQUksRUFBQyxhQUFuRDtBQUFpRSxrQkFBYyxFQUFFLElBQWpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJO0FBQU8sV0FBTyxFQUFDLHNCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBRkoscUxBREosRUFPSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBTyxRQUFJLEVBQUMsT0FBWjtBQUFvQixNQUFFLEVBQUMsUUFBdkI7QUFBZ0MsUUFBSSxFQUFDLGFBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJO0FBQU8sV0FBTyxFQUFDLFFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKLENBUEosRUFXSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBTyxRQUFJLEVBQUMsT0FBWjtBQUFvQixNQUFFLEVBQUMsa0JBQXZCO0FBQTBDLFFBQUksRUFBQyxhQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFFSTtBQUFPLFdBQU8sRUFBQyxrQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUZKLENBWEosQ0FMSixFQXFCSSxNQUFDLDhEQUFEO0FBQXdCLGNBQVUsRUFBRSxzQ0FBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXJCSixFQXNCSSxNQUFDLHlEQUFEO0FBQ0ksVUFBTSxFQUFFTCxXQUFXLEdBQUcsR0FEMUI7QUFFSSxZQUFRLEVBQUVvQixPQUZkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF0QkosQ0FESixDQXZLSixDQURKLENBUEosQ0FESixDQURKO0FBbU5IOztHQWhUUTFCLFk7VUFrRnNEdUIsaUQ7OztLQWxGdER2QixZOztBQWtUVCxJQUFNOEIsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDZixLQUFELEVBQVc7QUFDL0IsU0FBTztBQUNIZCxTQUFLLEVBQUVjLEtBQUssQ0FBQ2QsS0FEVjtBQUVIQyxZQUFRLEVBQUVhLEtBQUssQ0FBQ2I7QUFGYixHQUFQO0FBSUgsQ0FMRDs7QUFPZTZCLDBIQUFPLENBQ2xCRCxlQURrQixDQUFQLENBRWI5QixZQUZhLENBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xVQSwyQkFBMkIsU0FBUyxjQUFjLDRCQUE0QixZQUFZLHFCQUFxQiwyREFBMkQsdUNBQXVDLHFDQUFxQyxvQkFBb0IsRUFBRSxpQkFBaUIsNEZBQTRGLGVBQWUsd0NBQXdDLFNBQVMsRUFBRSxtQkFBbUIsOEJBQThCLHFEQUFxRCwwQkFBMEIsNkNBQTZDLHNCQUFzQiw2REFBNkQsWUFBWSxlQUFlLFNBQVMsaUJBQWlCLGlDQUFpQyxpQkFBaUIsWUFBWSxVQUFVLHNCQUFzQixtQkFBbUIsaURBQWlELHVCQUF1QixnQkFBZ0IsVUFBVSxtQkFBTyxDQUFDLDRDQUFPLEVBQUUsaUJBQWlCLGFBQWEsc0NBQXNDLFNBQVMsRUFBRSxpQkFBaUIsZ0JBQWdCLFlBQVksV0FBVyxLQUFLLFdBQVcsK0dBQStHLHVCQUF1Qix3Q0FBd0MsZ0NBQWdDLFlBQVksbUJBQW1CLEtBQUssbUJBQW1CLHNFQUFzRSxTQUFTLGVBQWUsNEJBQTRCLFNBQVMsaUZBQWlGLHFCQUFxQiwyQkFBMkIsY0FBYywwQkFBMEIsV0FBVyxrQkFBa0IsY0FBYyxlQUFlLDhFQUE4RSxTQUFTLG9CQUFvQiw0RkFBNEYsdURBQXVELDREQUE0RCxzQ0FBc0MsWUFBWSxhQUFhLEVBQUUsK0JBQStCLFlBQVksYUFBYSxpREFBaUQsMkJBQTJCLDZCQUE2QixhQUFhLEVBQUUsVUFBVSxhQUFhLEdBQUcscUJBQXFCLDJIQUEySCwwQ0FBMEMsYUFBYSxtREFBbUQsc0VBQXNFLFlBQVksOEJBQThCLHVNQUF1TSwwR0FBMEcsZUFBZSxVQUFVLElBQUksdUtBQXVLLG1CQUFtQixLQUFLLGFBQWEsOEJBQThCLFFBQVEsc0JBQXNCLHFKQUFxSiwyQkFBMkIsK0JBQStCLElBQUksK0JBQStCLHFDQUFxQyxJQUFJLDZFQUE2RSxLQUFLLEtBQUssY0FBYyxZQUFZLGlCQUFpQixhQUFhLHNDQUFzQyxTQUFTLEVBQUUsaUNBQWlDLFlBQVksbUJBQW1CLEtBQUssbUJBQW1CLHNFQUFzRSxTQUFTLGNBQWMsZ0JBQWdCLFlBQVksV0FBVyxLQUFLLFdBQVcsK0dBQStHLHVCQUF1Qix3Q0FBd0MsaUJBQWlCLDRCQUE0QixTQUFTLGlGQUFpRixxQkFBcUIsT0FBTyxnQkFBZ0IsOEVBQThFLGdCQUFnQiw0RkFBNEYsdURBQXVELEtBQUssa0JBQWtCLGFBQWEsdUZBQXVGLHFCQUFxQiwySEFBMkgsMENBQTBDLGFBQWEsbURBQW1ELHNFQUFzRSxZQUFZLDhCQUE4Qix5REFBeUQsU0FBUyx1RkFBdUYsU0FBUywwQkFBMEIsb0NBQW9DLElBQUksbURBQW1ELHlCQUF5QixLQUFLLGtCQUFrQixZQUFZLGtCQUFrQixrQkFBa0IsYUFBYSxzQ0FBc0MsU0FBUyxFQUFFLGlCQUFpQixnQkFBZ0IsWUFBWSxXQUFXLEtBQUssV0FBVywrR0FBK0csdUJBQXVCLHdDQUF3QyxpQkFBaUIsNEJBQTRCLFNBQVMsaUZBQWlGLHFCQUFxQixjQUFjLFVBQVUsa0JBQWtCLGNBQWMsZUFBZSw4RUFBOEUsU0FBUyxvQkFBb0IsNEZBQTRGLHVEQUF1RCw0REFBNEQsOEJBQThCLGdGQUFnRixzQkFBc0Isc0JBQXNCLEtBQUssd0VBQXdFLGdCQUFnQixPQUFPLHlEQUF5RCxNQUFNLHFMQUFxTCxxQ0FBcUMsNkRBQTZELG1CQUFtQixJQUFJLDhCQUE4QixxREFBcUQsNkJBQTZCLHdCQUF3Qix5R0FBeUcscUJBQXFCLG9DQUFvQyxNQUFNLGlDQUFpQyxNQUFNLG9DQUFvQyxNQUFNLGdDQUFnQyxNQUFNLGtDQUFrQyxpQ0FBaUMsWUFBWSxXQUFXLG1DQUFtQywrRUFBK0Usb0JBQW9CLEdBQUcscUJBQXFCLDJIQUEySCwwQ0FBMEMsYUFBYSxtREFBbUQsc0VBQXNFLFlBQVkseUNBQXlDLHNEQUFzRCxnSEFBZ0gsZUFBZSxxQkFBcUIsR0FBRyxFQUFFLDRDQUE0QywwREFBMEQsRUFBRSw4QkFBOEIscUNBQXFDLDhCQUE4QiwrQ0FBK0MscUNBQXFDLHFDQUFxQyxzQ0FBc0MsMEdBQTBHLElBQUksS0FBSyxjQUFjLFlBQVksaUJBQWlCLGFBQWEsc0NBQXNDLFNBQVMsRUFBRSwwQkFBMEIsMEVBQTBFLHlCQUF5QixxQ0FBcUMsSUFBSSxrQkFBa0IsbUJBQW1CLEciLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGNoZWNrb3V0LmpzLmY5OGUxZDdjM2MxNTkzNjUxNmY1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgT3JkZXJTdW1tYXJ5IGZyb20gJy4vT3JkZXJTdW1tYXJ5JztcbmltcG9ydCBQYXltZW50IGZyb20gJy4uL3BheW1lbnRzL1BheW1lbnQnO1xuaW1wb3J0IHVzZUZvcm0gZnJvbSAnLi91c2VyRm9ybSc7XG5pbXBvcnQgQ29pbmJhc2VDb21tZXJjZUJ1dHRvbiBmcm9tICdyZWFjdC1jb2luYmFzZS1jb21tZXJjZSc7XG5cblxuZnVuY3Rpb24gQ2hlY2tvdXRGb3JtKHt0b3RhbCwgc2hpcHBpbmd9KSB7XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRm9ybSBzdWJtaXR0ZWQuXCIpO1xuICAgIH1cblxuICAgIGxldCB0b3RhbEFtb3VudCA9ICh0b3RhbCArIHNoaXBwaW5nKS50b0ZpeGVkKDIpXG4gICAgXG4gICAgY29uc3Qgc3RhdGVTY2hlbWEgPSB7XG4gICAgICAgIGZpcnN0TmFtZToge3ZhbHVlOiBcIlwiLCBlcnJvcjogXCJcIn0sXG4gICAgICAgIGxhc3ROYW1lOiB7dmFsdWU6IFwiXCIsIGVycm9yOiBcIlwifSxcbiAgICAgICAgYWRkcmVzczoge3ZhbHVlOiBcIlwiLCBlcnJvcjogXCJcIn0sXG4gICAgICAgIGNpdHk6IHt2YWx1ZTogXCJcIiwgZXJyb3I6IFwiXCJ9LFxuICAgICAgICBzdGF0ZToge3ZhbHVlOiBcIlwiLCBlcnJvcjogXCJcIn0sXG4gICAgICAgIHppcDoge3ZhbHVlOiBcIlwiLCBlcnJvcjogXCJcIn0sXG4gICAgICAgIGVtYWlsOiB7dmFsdWU6IFwiXCIsIGVycm9yOiBcIlwifSxcbiAgICAgICAgcGhvbmU6IHt2YWx1ZTogXCJcIiwgZXJyb3I6IFwiXCJ9XG4gICAgfTtcblxuICAgIGNvbnN0IHZhbGlkYXRpb25TdGF0ZVNjaGVtYSA9IHtcbiAgICAgICAgZmlyc3ROYW1lOiB7XG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgIHZhbGlkYXRvcjoge1xuICAgICAgICAgICAgcmVnRXg6IC9eW2EtekEtWl0rJC8sXG4gICAgICAgICAgICBlcnJvcjogXCJJbnZhbGlkIGZpcnN0IG5hbWUgZm9ybWF0LlwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgbGFzdE5hbWU6IHtcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgdmFsaWRhdG9yOiB7XG4gICAgICAgICAgICByZWdFeDogL15bYS16QS1aXSskLyxcbiAgICAgICAgICAgIGVycm9yOiBcIkludmFsaWQgbGFzdCBuYW1lIGZvcm1hdC5cIlxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGFkZHJlc3M6IHtcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgdmFsaWRhdG9yOiB7XG4gICAgICAgICAgICAgICAgZXJyb3I6IFwiSW52YWxpZCBhZGRyZXNzIGZvcm1hdC5cIlxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGNpdHk6IHtcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgdmFsaWRhdG9yOiB7XG4gICAgICAgICAgICAgICAgZXJyb3I6IFwiSW52YWxpZCBsYXN0IG5hbWUgZm9ybWF0LlwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgc3RhdGU6IHtcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgdmFsaWRhdG9yOiB7XG4gICAgICAgICAgICAgICAgZXJyb3I6IFwiSW52YWxpZCBsYXN0IG5hbWUgZm9ybWF0LlwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgemlwOiB7XG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgIHZhbGlkYXRvcjoge1xuICAgICAgICAgICAgICAgIHJlZ0V4OiAvXlxcZHs1fSR8XlxcZHs1fS1cXGR7NH0kLyxcbiAgICAgICAgICAgICAgICBlcnJvcjogXCJJbnZhbGlkIHppcCBmb3JtYXQsIHVzZSBsaWtlIDEyMzQ1LlwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgZW1haWw6IHtcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgdmFsaWRhdG9yOiB7XG4gICAgICAgICAgICAgICAgcmVnRXg6IC9eKChbXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKFxcLltePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSspKil8KFwiLitcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfV0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvLFxuICAgICAgICAgICAgICAgIGVycm9yOiBcIkludmFsaWQgZW1haWwgZm9ybWF0LlwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgcGhvbmU6IHtcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgdmFsaWRhdG9yOiB7XG4gICAgICAgICAgICAgICAgcmVnRXg6IC9eXFwrWzAtOV0/KClbMC05XShcXHN8XFxTKShcXGRbMC05XXs5fSkkLyxcbiAgICAgICAgICAgICAgICBlcnJvcjogXCJJbnZhbGlkIHBob25lIG51bWJlciBmb3JtYXQgdXNlIGxpa2UgKzI5MjM0MzI0MzI0MzIuXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCB7IHN0YXRlLCBoYW5kbGVPbkNoYW5nZSwgaGFuZGxlT25TdWJtaXQsIGRpc2FibGUgfSA9IHVzZUZvcm0gKFxuICAgICAgICBzdGF0ZVNjaGVtYSxcbiAgICAgICAgdmFsaWRhdGlvblN0YXRlU2NoZW1hLFxuICAgICAgICBoYW5kbGVTdWJtaXRcbiAgICApO1xuICAgIFxuICAgIGNvbnN0IGVycm9yU3R5bGUgPSB7XG4gICAgICAgIGNvbG9yOiBcInJlZFwiLFxuICAgICAgICBmb250U2l6ZTogXCIxM3B4XCJcbiAgICB9O1xuICAgIFxuICAgIHJldHVybiAoXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNoZWNrb3V0LWFyZWEgcHRiLTYwXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEyIGNvbC1tZC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZU9uU3VibWl0fT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgY29sLW1kLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiaWxsaW5nLWRldGFpbHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRpdGxlXCI+QmlsbGluZyBEZXRhaWxzPC9oMz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTIgY29sLW1kLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5Db3VudHJ5IDxzcGFuIGNsYXNzTmFtZT1cInJlcXVpcmVkXCI+Kjwvc3Bhbj48L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlbGVjdC1ib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY291bnRyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjVcIj5Vbml0ZWQgQXJhYiBFbWlyYXRlczwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxXCI+Q2hpbmE8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMlwiPlVuaXRlZCBLaW5nZG9tPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjBcIj5HZXJtYW55PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjNcIj5GcmFuY2U8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNFwiPkphcGFuPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNiBjb2wtbWQtNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+Rmlyc3QgTmFtZSA8c3BhbiBjbGFzc05hbWU9XCJyZXF1aXJlZFwiPio8L3NwYW4+PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJmaXJzdE5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlT25DaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c3RhdGUuZmlyc3ROYW1lLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3RhdGUuZmlyc3ROYW1lLmVycm9yICYmIDxwIHN0eWxlPXtlcnJvclN0eWxlfT57c3RhdGUuZmlyc3ROYW1lLmVycm9yfTwvcD59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNiBjb2wtbWQtNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+TGFzdCBOYW1lIDxzcGFuIGNsYXNzTmFtZT1cInJlcXVpcmVkXCI+Kjwvc3Bhbj48L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImxhc3ROYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZU9uQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N0YXRlLmxhc3ROYW1lLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3RhdGUubGFzdE5hbWUuZXJyb3IgJiYgPHAgc3R5bGU9e2Vycm9yU3R5bGV9PntzdGF0ZS5sYXN0TmFtZS5lcnJvcn08L3A+fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEyIGNvbC1tZC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+Q29tcGFueSBOYW1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMiBjb2wtbWQtNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+QWRkcmVzcyA8c3BhbiBjbGFzc05hbWU9XCJyZXF1aXJlZFwiPio8L3NwYW4+PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJhZGRyZXNzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZU9uQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N0YXRlLmFkZHJlc3MudmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdGF0ZS5hZGRyZXNzLmVycm9yICYmIDxwIHN0eWxlPXtlcnJvclN0eWxlfT57c3RhdGUuYWRkcmVzcy5lcnJvcn08L3A+fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEyIGNvbC1tZC02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5Ub3duIC8gQ2l0eSA8c3BhbiBjbGFzc05hbWU9XCJyZXF1aXJlZFwiPio8L3NwYW4+PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjaXR5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZU9uQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N0YXRlLmNpdHkudmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdGF0ZS5jaXR5LmVycm9yICYmIDxwIHN0eWxlPXtlcnJvclN0eWxlfT57c3RhdGUuY2l0eS5lcnJvcn08L3A+fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgY29sLW1kLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlN0YXRlIC8gQ291bnR5IDxzcGFuIGNsYXNzTmFtZT1cInJlcXVpcmVkXCI+Kjwvc3Bhbj48L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInN0YXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZU9uQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N0YXRlLnN0YXRlLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3RhdGUuc3RhdGUuZXJyb3IgJiYgPHAgc3R5bGU9e2Vycm9yU3R5bGV9PntzdGF0ZS5zdGF0ZS5lcnJvcn08L3A+fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgY29sLW1kLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlBvc3Rjb2RlIC8gWmlwIDxzcGFuIGNsYXNzTmFtZT1cInJlcXVpcmVkXCI+Kjwvc3Bhbj48L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInppcFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZU9uQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N0YXRlLnppcC52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N0YXRlLnppcC5lcnJvciAmJiA8cCBzdHlsZT17ZXJyb3JTdHlsZX0+e3N0YXRlLnppcC5lcnJvcn08L3A+fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgY29sLW1kLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkVtYWlsIEFkZHJlc3MgPHNwYW4gY2xhc3NOYW1lPVwicmVxdWlyZWRcIj4qPC9zcGFuPjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZU9uQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N0YXRlLmVtYWlsLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3RhdGUuZW1haWwuZXJyb3IgJiYgPHAgc3R5bGU9e2Vycm9yU3R5bGV9PntzdGF0ZS5lbWFpbC5lcnJvcn08L3A+fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgY29sLW1kLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlBob25lIDxzcGFuIGNsYXNzTmFtZT1cInJlcXVpcmVkXCI+Kjwvc3Bhbj48L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBob25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZU9uQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N0YXRlLnBob25lLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3RhdGUucGhvbmUuZXJyb3IgJiYgPHAgc3R5bGU9e2Vycm9yU3R5bGV9PntzdGF0ZS5waG9uZS5lcnJvcn08L3A+fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEyIGNvbC1tZC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jaGVja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbnB1dFwiIGlkPVwiY3JlYXRlLWFuLWFjY291bnRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1sYWJlbFwiIGh0bWxGb3I9XCJjcmVhdGUtYW4tYWNjb3VudFwiPkNyZWF0ZSBhbiBhY2NvdW50PzwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTIgY29sLW1kLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlucHV0XCIgaWQ9XCJzaGlwLWRpZmZlcmVudC1hZGRyZXNzXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY2hlY2stbGFiZWxcIiBodG1sRm9yPVwic2hpcC1kaWZmZXJlbnQtYWRkcmVzc1wiPlNoaXAgdG8gYSBkaWZmZXJlbnQgYWRkcmVzcz88L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEyIGNvbC1tZC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgbmFtZT1cIm5vdGVzXCIgaWQ9XCJub3Rlc1wiIGNvbHM9XCIzMFwiIHJvd3M9XCI2XCIgcGxhY2Vob2xkZXI9XCJPcmRlciBOb3Rlc1wiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNiBjb2wtbWQtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9yZGVyLWRldGFpbHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRpdGxlXCI+WW91ciBPcmRlcjwvaDM+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9yZGVyU3VtbWFyeSAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGF5bWVudC1tZXRob2RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBpZD1cImRpcmVjdC1iYW5rLXRyYW5zZmVyXCIgbmFtZT1cInJhZGlvLWdyb3VwXCIgZGVmYXVsdENoZWNrZWQ9e3RydWV9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJkaXJlY3QtYmFuay10cmFuc2ZlclwiPkRpcmVjdCBCYW5rIFRyYW5zZmVyPC9sYWJlbD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1ha2UgeW91ciBwYXltZW50IGRpcmVjdGx5IGludG8gb3VyIGJhbmsgYWNjb3VudC4gUGxlYXNlIHVzZSB5b3VyIE9yZGVyIElEIGFzIHRoZSBwYXltZW50IHJlZmVyZW5jZS4gWW91ciBvcmRlciB3aWxsIG5vdCBiZSBzaGlwcGVkIHVudGlsIHRoZSBmdW5kcyBoYXZlIGNsZWFyZWQgaW4gb3VyIGFjY291bnQuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgaWQ9XCJwYXlwYWxcIiBuYW1lPVwicmFkaW8tZ3JvdXBcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGF5cGFsXCI+UGF5UGFsPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBpZD1cImNhc2gtb24tZGVsaXZlcnlcIiBuYW1lPVwicmFkaW8tZ3JvdXBcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY2FzaC1vbi1kZWxpdmVyeVwiPkNhc2ggb24gRGVsaXZlcnk8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvaW5iYXNlQ29tbWVyY2VCdXR0b24gY2hlY2tvdXRJZD17JzMwOTM0ODYyLWQ5ODAtNDZjYi05NDAyLTQzYzgxYjBjYWJkNSd9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBheW1lbnQgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ9e3RvdGFsQW1vdW50ICogMTAwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICApO1xufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0b3RhbDogc3RhdGUudG90YWwsXG4gICAgICAgIHNoaXBwaW5nOiBzdGF0ZS5zaGlwcGluZ1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgICBtYXBTdGF0ZVRvUHJvcHNcbikoQ2hlY2tvdXRGb3JtKVxuXG4iLCJtb2R1bGUuZXhwb3J0cz1mdW5jdGlvbihlKXt2YXIgdD17fTtmdW5jdGlvbiBuKHIpe2lmKHRbcl0pcmV0dXJuIHRbcl0uZXhwb3J0czt2YXIgbz10W3JdPXtpOnIsbDohMSxleHBvcnRzOnt9fTtyZXR1cm4gZVtyXS5jYWxsKG8uZXhwb3J0cyxvLG8uZXhwb3J0cyxuKSxvLmw9ITAsby5leHBvcnRzfXJldHVybiBuLm09ZSxuLmM9dCxuLmQ9ZnVuY3Rpb24oZSx0LHIpe24ubyhlLHQpfHxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSx0LHtlbnVtZXJhYmxlOiEwLGdldDpyfSl9LG4ucj1mdW5jdGlvbihlKXtcInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wudG9TdHJpbmdUYWcmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFN5bWJvbC50b1N0cmluZ1RhZyx7dmFsdWU6XCJNb2R1bGVcIn0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pfSxuLnQ9ZnVuY3Rpb24oZSx0KXtpZigxJnQmJihlPW4oZSkpLDgmdClyZXR1cm4gZTtpZig0JnQmJlwib2JqZWN0XCI9PXR5cGVvZiBlJiZlJiZlLl9fZXNNb2R1bGUpcmV0dXJuIGU7dmFyIHI9T2JqZWN0LmNyZWF0ZShudWxsKTtpZihuLnIociksT2JqZWN0LmRlZmluZVByb3BlcnR5KHIsXCJkZWZhdWx0XCIse2VudW1lcmFibGU6ITAsdmFsdWU6ZX0pLDImdCYmXCJzdHJpbmdcIiE9dHlwZW9mIGUpZm9yKHZhciBvIGluIGUpbi5kKHIsbyxmdW5jdGlvbih0KXtyZXR1cm4gZVt0XX0uYmluZChudWxsLG8pKTtyZXR1cm4gcn0sbi5uPWZ1bmN0aW9uKGUpe3ZhciB0PWUmJmUuX19lc01vZHVsZT9mdW5jdGlvbigpe3JldHVybiBlLmRlZmF1bHR9OmZ1bmN0aW9uKCl7cmV0dXJuIGV9O3JldHVybiBuLmQodCxcImFcIix0KSx0fSxuLm89ZnVuY3Rpb24oZSx0KXtyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsdCl9LG4ucD1cIi9kaXN0L1wiLG4obi5zPTEpfShbZnVuY3Rpb24oZSx0KXtlLmV4cG9ydHM9cmVxdWlyZShcInJlYWN0XCIpfSxmdW5jdGlvbihlLHQsbil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIHI9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGUsdCl7Zm9yKHZhciBuPTA7bjx0Lmxlbmd0aDtuKyspe3ZhciByPXRbbl07ci5lbnVtZXJhYmxlPXIuZW51bWVyYWJsZXx8ITEsci5jb25maWd1cmFibGU9ITAsXCJ2YWx1ZVwiaW4gciYmKHIud3JpdGFibGU9ITApLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHIua2V5LHIpfX1yZXR1cm4gZnVuY3Rpb24odCxuLHIpe3JldHVybiBuJiZlKHQucHJvdG90eXBlLG4pLHImJmUodCxyKSx0fX0oKSxvPU9iamVjdC5hc3NpZ258fGZ1bmN0aW9uKGUpe2Zvcih2YXIgdD0xO3Q8YXJndW1lbnRzLmxlbmd0aDt0Kyspe3ZhciBuPWFyZ3VtZW50c1t0XTtmb3IodmFyIHIgaW4gbilPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobixyKSYmKGVbcl09bltyXSl9cmV0dXJuIGV9LGE9ZnVuY3Rpb24oZSl7aWYoZSYmZS5fX2VzTW9kdWxlKXJldHVybiBlO3ZhciB0PXt9O2lmKG51bGwhPWUpZm9yKHZhciBuIGluIGUpT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsbikmJih0W25dPWVbbl0pO3JldHVybiB0LmRlZmF1bHQ9ZSx0fShuKDApKSxpPXUobigyKSksYz11KG4oNSkpO2Z1bmN0aW9uIHUoZSl7cmV0dXJuIGUmJmUuX19lc01vZHVsZT9lOntkZWZhdWx0OmV9fXZhciBsPWZ1bmN0aW9uKGUpe2Z1bmN0aW9uIHQoZSl7IWZ1bmN0aW9uKGUsdCl7aWYoIShlIGluc3RhbmNlb2YgdCkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKX0odGhpcyx0KTt2YXIgbj1mdW5jdGlvbihlLHQpe2lmKCFlKXRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtyZXR1cm4hdHx8XCJvYmplY3RcIiE9dHlwZW9mIHQmJlwiZnVuY3Rpb25cIiE9dHlwZW9mIHQ/ZTp0fSh0aGlzLCh0Ll9fcHJvdG9fX3x8T2JqZWN0LmdldFByb3RvdHlwZU9mKHQpKS5jYWxsKHRoaXMsZSkpO3JldHVybiBuLmhhbmRsZUJ1dHRvbkNsaWNrPWZ1bmN0aW9uKCl7bi5zZXRTdGF0ZSh7c2hvd01vZGFsOiEwfSl9LG4uaGFuZGxlTW9kYWxDbG9zZT1mdW5jdGlvbigpe24uc2V0U3RhdGUoe3Nob3dNb2RhbDohMX0pLG4ucHJvcHMub25Nb2RhbENsb3NlZCYmbi5wcm9wcy5vbk1vZGFsQ2xvc2VkKCl9LG4uaGFuZGxlRXJyb3I9ZnVuY3Rpb24oZSl7Y29uc29sZS5lcnJvcihlKSxuLnNldFN0YXRlKHtzaG93TW9kYWw6ITF9KX0sbi5zdGF0ZT17c2hvd01vZGFsOiExfSxufXJldHVybiBmdW5jdGlvbihlLHQpe2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIHQmJm51bGwhPT10KXRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiK3R5cGVvZiB0KTtlLnByb3RvdHlwZT1PYmplY3QuY3JlYXRlKHQmJnQucHJvdG90eXBlLHtjb25zdHJ1Y3Rvcjp7dmFsdWU6ZSxlbnVtZXJhYmxlOiExLHdyaXRhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMH19KSx0JiYoT2JqZWN0LnNldFByb3RvdHlwZU9mP09iamVjdC5zZXRQcm90b3R5cGVPZihlLHQpOmUuX19wcm90b19fPXQpfSh0LGUpLHIodCxbe2tleTpcInJlbmRlclwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5zdGF0ZS5zaG93TW9kYWwsdD10aGlzLnByb3BzLG49dC5vbkxvYWQscj10Lm9uQ2hhcmdlU3VjY2Vzcyx1PXQub25DaGFyZ2VGYWlsdXJlLGw9dC5jaGVja291dElkLHM9dC5jaGFyZ2VJZCxmPXQuY3VzdG9tTWV0YWRhdGEsZD10Lm9uUGF5bWVudERldGVjdGVkLHA9dC5kaXNhYmxlQ2FjaGluZyxoPXQud3JhcHBlclN0eWxlLHk9e29uTG9hZDpuLG9uQ2hhcmdlU3VjY2VzczpyLG9uQ2hhcmdlRmFpbHVyZTp1LGNoZWNrb3V0SWQ6bCxjaGFyZ2VJZDpzLG9uUGF5bWVudERldGVjdGVkOmQsZGlzYWJsZUNhY2hpbmc6cH0sYj1mdW5jdGlvbihlKXt2YXIgdD1vKHt9LGUpO3JldHVybltcIm9uTG9hZFwiLFwib25DaGFyZ2VTdWNjZXNzXCIsXCJvbkNoYXJnZUZhaWx1cmVcIixcImN1c3RvbU1ldGFkYXRhXCIsXCJvblBheW1lbnREZXRlY3RlZFwiLFwiY2hlY2tvdXRJZFwiLFwiY2hhcmdlSWRcIixcImRpc2FibGVDYWNoaW5nXCIsXCJ3cmFwcGVyU3R5bGVcIl0uZm9yRWFjaCgoZnVuY3Rpb24oZSl7cmV0dXJuIGRlbGV0ZSB0W2VdfSkpLHR9KHRoaXMucHJvcHMpO3JldHVybiBhLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7c3R5bGU6aH0sYS5jcmVhdGVFbGVtZW50KFwiYVwiLHtocmVmOlwiaHR0cHM6Ly9jb21tZXJjZS5jb2luYmFzZS5jb21cIixyZWw6XCJleHRlcm5hbFwiLHRpdGxlOlwiUGF5IHdpdGggQml0Y29pbiwgQml0Y29pbiBDYXNoLCBEQUksIExpdGVjb2luLCBFdGhlcmV1bSwgb3IgVVNEIENvaW5cIixvbkNsaWNrOmZ1bmN0aW9uKGUpe3JldHVybiBlLnByZXZlbnREZWZhdWx0KCl9fSxhLmNyZWF0ZUVsZW1lbnQoaS5kZWZhdWx0LG8oe30sYix7b25DbGljazp0aGlzLmhhbmRsZUJ1dHRvbkNsaWNrfSkpKSxlJiZhLmNyZWF0ZUVsZW1lbnQoYy5kZWZhdWx0LG8oe30seSx7b25Nb2RhbENsb3NlOnRoaXMuaGFuZGxlTW9kYWxDbG9zZSxvbkVycm9yOnRoaXMuaGFuZGxlRXJyb3IsY3VzdG9tTWV0YWRhdGE6Zn0pKSl9fV0pLHR9KGEuQ29tcG9uZW50KTt0LmRlZmF1bHQ9bH0sZnVuY3Rpb24oZSx0LG4pe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciByPU9iamVjdC5hc3NpZ258fGZ1bmN0aW9uKGUpe2Zvcih2YXIgdD0xO3Q8YXJndW1lbnRzLmxlbmd0aDt0Kyspe3ZhciBuPWFyZ3VtZW50c1t0XTtmb3IodmFyIHIgaW4gbilPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobixyKSYmKGVbcl09bltyXSl9cmV0dXJuIGV9LG89ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGUsdCl7Zm9yKHZhciBuPTA7bjx0Lmxlbmd0aDtuKyspe3ZhciByPXRbbl07ci5lbnVtZXJhYmxlPXIuZW51bWVyYWJsZXx8ITEsci5jb25maWd1cmFibGU9ITAsXCJ2YWx1ZVwiaW4gciYmKHIud3JpdGFibGU9ITApLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHIua2V5LHIpfX1yZXR1cm4gZnVuY3Rpb24odCxuLHIpe3JldHVybiBuJiZlKHQucHJvdG90eXBlLG4pLHImJmUodCxyKSx0fX0oKSxhPWZ1bmN0aW9uKGUpe2lmKGUmJmUuX19lc01vZHVsZSlyZXR1cm4gZTt2YXIgdD17fTtpZihudWxsIT1lKWZvcih2YXIgbiBpbiBlKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLG4pJiYodFtuXT1lW25dKTtyZXR1cm4gdC5kZWZhdWx0PWUsdH0obigwKSk7ZnVuY3Rpb24gaShlLHQpe2lmKCEoZSBpbnN0YW5jZW9mIHQpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIil9ZnVuY3Rpb24gYyhlLHQpe2lmKCFlKXRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtyZXR1cm4hdHx8XCJvYmplY3RcIiE9dHlwZW9mIHQmJlwiZnVuY3Rpb25cIiE9dHlwZW9mIHQ/ZTp0fW4oMyk7dmFyIHU9ZnVuY3Rpb24oZSl7ZnVuY3Rpb24gdCgpe3JldHVybiBpKHRoaXMsdCksYyh0aGlzLCh0Ll9fcHJvdG9fX3x8T2JqZWN0LmdldFByb3RvdHlwZU9mKHQpKS5hcHBseSh0aGlzLGFyZ3VtZW50cykpfXJldHVybiBmdW5jdGlvbihlLHQpe2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIHQmJm51bGwhPT10KXRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiK3R5cGVvZiB0KTtlLnByb3RvdHlwZT1PYmplY3QuY3JlYXRlKHQmJnQucHJvdG90eXBlLHtjb25zdHJ1Y3Rvcjp7dmFsdWU6ZSxlbnVtZXJhYmxlOiExLHdyaXRhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMH19KSx0JiYoT2JqZWN0LnNldFByb3RvdHlwZU9mP09iamVjdC5zZXRQcm90b3R5cGVPZihlLHQpOmUuX19wcm90b19fPXQpfSh0LGUpLG8odCxbe2tleTpcInJlbmRlclwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5wcm9wcyx0PWUuc3R5bGVkLG49ZS5jaGlsZHJlbixvPWZ1bmN0aW9uKGUsdCl7dmFyIG49e307Zm9yKHZhciByIGluIGUpdC5pbmRleE9mKHIpPj0wfHxPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSxyKSYmKG5bcl09ZVtyXSk7cmV0dXJuIG59KGUsW1wic3R5bGVkXCIsXCJjaGlsZHJlblwiXSk7cmV0dXJuIGEuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLHIoe30sbyx7Y2xhc3NOYW1lOnQ/XCJjb2luYmFzZS1jb21tZXJjZS1idXR0b25cIjpvLmNsYXNzTmFtZX0pLG58fFwiQnV5IFdpdGggQ3J5cHRvXCIpfX1dKSx0fShhLlB1cmVDb21wb25lbnQpO3QuZGVmYXVsdD11fSxmdW5jdGlvbihlLHQsbil7fSwsZnVuY3Rpb24oZSx0LG4pe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciByPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShlLHQpe2Zvcih2YXIgbj0wO248dC5sZW5ndGg7bisrKXt2YXIgcj10W25dO3IuZW51bWVyYWJsZT1yLmVudW1lcmFibGV8fCExLHIuY29uZmlndXJhYmxlPSEwLFwidmFsdWVcImluIHImJihyLndyaXRhYmxlPSEwKSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxyLmtleSxyKX19cmV0dXJuIGZ1bmN0aW9uKHQsbixyKXtyZXR1cm4gbiYmZSh0LnByb3RvdHlwZSxuKSxyJiZlKHQsciksdH19KCksbz1mdW5jdGlvbihlKXtpZihlJiZlLl9fZXNNb2R1bGUpcmV0dXJuIGU7dmFyIHQ9e307aWYobnVsbCE9ZSlmb3IodmFyIG4gaW4gZSlPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSxuKSYmKHRbbl09ZVtuXSk7cmV0dXJuIHQuZGVmYXVsdD1lLHR9KG4oMCkpLGE9big2KTtuKDcpLG4oOSk7dmFyIGk9ZnVuY3Rpb24oZSl7ZnVuY3Rpb24gdChlKXshZnVuY3Rpb24oZSx0KXtpZighKGUgaW5zdGFuY2VvZiB0KSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpfSh0aGlzLHQpO3ZhciBuPWZ1bmN0aW9uKGUsdCl7aWYoIWUpdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO3JldHVybiF0fHxcIm9iamVjdFwiIT10eXBlb2YgdCYmXCJmdW5jdGlvblwiIT10eXBlb2YgdD9lOnR9KHRoaXMsKHQuX19wcm90b19ffHxPYmplY3QuZ2V0UHJvdG90eXBlT2YodCkpLmNhbGwodGhpcyxlKSk7cmV0dXJuIG4uYnVpbGRTcmM9ZnVuY3Rpb24oZSl7dmFyIHQ9bi5wcm9wcyxyPXQuY2hlY2tvdXRJZCxvPXQuY2hhcmdlSWQsYT10LmN1c3RvbU1ldGFkYXRhLGk9dC5kaXNhYmxlQ2FjaGluZzt2YXIgYz12b2lkIDAsdT12b2lkIDA7aWYocil1PXIsYz1cImNoZWNrb3V0XCI7ZWxzZXtpZighbyl0aHJvdyBuZXcgRXJyb3IoXCJtdXN0IHN1cHBseSBlaXRoZXIgY2hlY2tvdXRJZCBvciBjaGFyZ2VJZCBwcm9wXCIpO3U9byxjPVwiY2hhcmdlc1wifXZhciBsPXtvcmlnaW46ZSx2ZXJzaW9uOlwiMS40LjRcIixidXR0b25JZDpuLnV1aWQsY2FjaGVEaXNhYmxlZDppfSxzPVwiXCI7cmV0dXJuIGEmJlwic3RyaW5nXCIhPXR5cGVvZiBhP2NvbnNvbGUuZXJyb3IoJ1JlY2VpdmVkIGN1c3RvbU1ldGFkYXRhIG5vdCBvZiBcInN0cmluZ1wiIHR5cGUuIElnbm9yaW5nLicpOmEmJihzPWEpLHMmJihsLmN1c3RvbT1zKSxuLm9yaWdpbitcIi9lbWJlZC9cIitjK1wiL1wiK2VuY29kZVVSSSh1KStcIj9cIitmdW5jdGlvbihlKXt2YXIgdD1bXSxuPXdpbmRvdy5lbmNvZGVVUklDb21wb25lbnQ7Zm9yKHZhciByIGluIGUpZS5oYXNPd25Qcm9wZXJ0eShyKSYmdC5wdXNoKG4ocikrXCI9XCIrbihlW3JdKSk7cmV0dXJuIHQuam9pbihcIiZcIil9KGwpfSxuLmlzVmFsaWRNZXNzYWdlPWZ1bmN0aW9uKGUpe3JldHVybiBlLm9yaWdpbj09PW4ub3JpZ2luJiZlLmRhdGEuYnV0dG9uSWQ9PT1uLnV1aWR9LG4uaGFuZGxlTWVzc2FnZT1mdW5jdGlvbihlKXtpZihuLmlzVmFsaWRNZXNzYWdlKGUpKXt2YXIgdD1uLnByb3BzLHI9dC5vbkNoYXJnZVN1Y2Nlc3Msbz10Lm9uQ2hhcmdlRmFpbHVyZSxhPXQub25Nb2RhbENsb3NlLGk9dC5vbkVycm9yLGM9dC5vblBheW1lbnREZXRlY3RlZDtzd2l0Y2goZS5kYXRhLmV2ZW50KXtjYXNlXCJjaGFyZ2VfY29uZmlybWVkXCI6ciYmcihlLmRhdGEpO2JyZWFrO2Nhc2VcImNoYXJnZV9mYWlsZWRcIjpvJiZvKGUuZGF0YSk7YnJlYWs7Y2FzZVwicGF5bWVudF9kZXRlY3RlZFwiOmMmJmMoZS5kYXRhKTticmVhaztjYXNlXCJlcnJvcl9ub3RfZm91bmRcIjppKGUuZGF0YSk7YnJlYWs7Y2FzZVwiY2hlY2tvdXRfbW9kYWxfY2xvc2VkXCI6YSgpfX19LG4uaGFuZGxlSUZyYW1lTG9hZGVkPWZ1bmN0aW9uKCl7bi5zZXRTdGF0ZSh7bG9hZGluZzohMX0pLG4ucHJvcHMub25Mb2FkJiZuLnByb3BzLm9uTG9hZCgpfSxuLm9yaWdpbj1cImh0dHBzOi8vY29tbWVyY2UuY29pbmJhc2UuY29tXCIsbi51dWlkPSgwLGEuZ2VuZXJhdGVVVUlEKSgpLG4uc3RhdGU9e2xvYWRpbmc6ITAsc3JjOm51bGx9LG59cmV0dXJuIGZ1bmN0aW9uKGUsdCl7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgdCYmbnVsbCE9PXQpdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIrdHlwZW9mIHQpO2UucHJvdG90eXBlPU9iamVjdC5jcmVhdGUodCYmdC5wcm90b3R5cGUse2NvbnN0cnVjdG9yOnt2YWx1ZTplLGVudW1lcmFibGU6ITEsd3JpdGFibGU6ITAsY29uZmlndXJhYmxlOiEwfX0pLHQmJihPYmplY3Quc2V0UHJvdG90eXBlT2Y/T2JqZWN0LnNldFByb3RvdHlwZU9mKGUsdCk6ZS5fX3Byb3RvX189dCl9KHQsZSkscih0LFt7a2V5OlwiY29tcG9uZW50RGlkTW91bnRcIix2YWx1ZTpmdW5jdGlvbigpe3dpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLHRoaXMuaGFuZGxlTWVzc2FnZSk7dmFyIGU9d2luZG93LmxvY2F0aW9uLnByb3RvY29sK1wiLy9cIit3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUrKHdpbmRvdy5sb2NhdGlvbi5wb3J0P1wiOlwiK3dpbmRvdy5sb2NhdGlvbi5wb3J0OlwiXCIpO3RoaXMuc2V0U3RhdGUoe3NyYzp0aGlzLmJ1aWxkU3JjKGUpfSl9fSx7a2V5OlwiY29tcG9uZW50V2lsbFVubW91bnRcIix2YWx1ZTpmdW5jdGlvbigpe3dpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLHRoaXMuaGFuZGxlTWVzc2FnZSl9fSx7a2V5OlwicmVuZGVyXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLnN0YXRlLHQ9ZS5sb2FkaW5nLG49ZS5zcmM7cmV0dXJuIG8uY3JlYXRlRWxlbWVudChcImRpdlwiLHtjbGFzc05hbWU6XCJjb2luYmFzZS1jb21tZXJjZS1pZnJhbWUtY29udGFpbmVyXCJ9LHR8fG51bGw9PT1uJiZvLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7Y2xhc3NOYW1lOlwiY29tbWVyY2UtbG9hZGluZy1zcGlubmVyXCJ9KSxudWxsIT09biYmby5jcmVhdGVFbGVtZW50KFwiaWZyYW1lXCIse29uTG9hZDp0aGlzLmhhbmRsZUlGcmFtZUxvYWRlZCxjbGFzc05hbWU6XCJjb2luYmFzZS1jb21tZXJjZS1pZnJhbWVcIixzcmM6bixzY3JvbGxpbmc6XCJub1wiLGZyYW1lQm9yZGVyOlwibm9cIn0pKX19XSksdH0oby5Db21wb25lbnQpO3QuZGVmYXVsdD1pfSxmdW5jdGlvbihlLHQsbil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dC5nZW5lcmF0ZVVVSUQ9ZnVuY3Rpb24oKXtyZXR1cm5cInh4eHh4eHh4LXh4eHgtNHh4eC15eHh4LXh4eHh4eHh4eHh4eFwiLnJlcGxhY2UoL1t4eV0vZywoZnVuY3Rpb24oZSl7dmFyIHQ9MTYqTWF0aC5yYW5kb20oKXwwO3JldHVybihcInhcIj09PWU/dDozJnR8OCkudG9TdHJpbmcoMTYpfSkpfX0sZnVuY3Rpb24oZSx0LG4pe30sLGZ1bmN0aW9uKGUsdCxuKXt9XSk7Il0sInNvdXJjZVJvb3QiOiIifQ==