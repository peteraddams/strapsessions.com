webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./store/reducers/reducers.js":
/*!************************************!*\
  !*** ./store/reducers/reducers.js ***!
  \************************************/
/*! exports provided: reducers, initializeStore, useStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeStore", function() { return initializeStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStore", function() { return useStore; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-devtools-extension */ "./node_modules/redux-devtools-extension/index.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux-persist */ "./node_modules/redux-persist/es/index.js");
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! redux-persist/lib/storage */ "./node_modules/redux-persist/lib/storage/index.js");
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _json_data_products__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../json-data/products */ "./store/json-data/products.js");
/* harmony import */ var _actions_action_types_action_names__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../actions/action-types/action-names */ "./store/actions/action-types/action-names.js");



var _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






 // defaults to localStorage for web


var store;

var initialState = {
  products: _json_data_products__WEBPACK_IMPORTED_MODULE_8__["products"],
  semiAuth: _json_data_products__WEBPACK_IMPORTED_MODULE_8__["semiAuth"],
  revolver: _json_data_products__WEBPACK_IMPORTED_MODULE_8__["revolver"],
  ak: _json_data_products__WEBPACK_IMPORTED_MODULE_8__["ak"],
  tactical: _json_data_products__WEBPACK_IMPORTED_MODULE_8__["tactical"],
  leverAction: _json_data_products__WEBPACK_IMPORTED_MODULE_8__["leverAction"],
  derringer: _json_data_products__WEBPACK_IMPORTED_MODULE_8__["derringer"],
  ars: _json_data_products__WEBPACK_IMPORTED_MODULE_8__["ars"],
  aks: _json_data_products__WEBPACK_IMPORTED_MODULE_8__["aks"],
  boltAction: _json_data_products__WEBPACK_IMPORTED_MODULE_8__["boltAction"],
  hunting: _json_data_products__WEBPACK_IMPORTED_MODULE_8__["hunting"],
  rftactical: _json_data_products__WEBPACK_IMPORTED_MODULE_8__["rftactical"],
  selfdefense: _json_data_products__WEBPACK_IMPORTED_MODULE_8__["selfdefense"],
  rim: _json_data_products__WEBPACK_IMPORTED_MODULE_8__["rim"],
  handAmmuni: _json_data_products__WEBPACK_IMPORTED_MODULE_8__["handAmmuni"],
  rifleammuni: _json_data_products__WEBPACK_IMPORTED_MODULE_8__["rifleammuni"],
  addedItems: [],
  addedItemsToCompare: [],
  total: 0,
  shipping: 0
};
var reducers = function reducers() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  if (action.type === _actions_action_types_action_names__WEBPACK_IMPORTED_MODULE_9__["ADD_TO_CART"]) {
    var addedItem = state.products.find(function (item) {
      return item.id === action.id;
    }) || state.semiAuth.find(function (item) {
      return item.id === action.id;
    }) || state.revolver.find(function (item) {
      return item.id === action.id;
    }) || state.ak.find(function (item) {
      return item.id === action.id;
    }) || state.tactical.find(function (item) {
      return item.id === action.id;
    }) || state.leverAction.find(function (item) {
      return item.id === action.id;
    }) || state.derringer.find(function (item) {
      return item.id === action.id;
    }) || state.ars.find(function (item) {
      return item.id === action.id;
    }) || state.aks.find(function (item) {
      return item.id === action.id;
    }) || state.boltAction.find(function (item) {
      return item.id === action.id;
    }) || state.hunting.find(function (item) {
      return item.id === action.id;
    }); //check if the action id exists in the addedItems

    var existed_item = state.addedItems.find(function (item) {
      return action.id === item.id;
    });

    if (existed_item) {
      addedItem.quantity += 1;
      return _objectSpread(_objectSpread({}, state), {}, {
        total: state.total + addedItem.price
      });
    } else {
      addedItem.quantity = 1; //calculating the total

      var newTotal = state.total + addedItem.price;
      return _objectSpread(_objectSpread({}, state), {}, {
        addedItems: [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.addedItems), [addedItem]),
        total: newTotal
      });
    }
  }

  if (action.type === _actions_action_types_action_names__WEBPACK_IMPORTED_MODULE_9__["ADD_TO_COMPARE"]) {
    var addedItemToCompare = state.products.find(function (item) {
      return item.id === action.id;
    }) || state.semiAuth.find(function (item) {
      return item.id === action.id;
    }) || state.revolver.find(function (item) {
      return item.id === action.id;
    }) || state.ak.find(function (item) {
      return item.id === action.id;
    }) || state.tactical.find(function (item) {
      return item.id === action.id;
    }) || state.leverAction.find(function (item) {
      return item.id === action.id;
    }) || state.derringer.find(function (item) {
      return item.id === action.id;
    }) || state.ars.find(function (item) {
      return item.id === action.id;
    }) || state.aks.find(function (item) {
      return item.id === action.id;
    }) || state.boltAction.find(function (item) {
      return item.id === action.id;
    }) || state.hunting.find(function (item) {
      return item.id === action.id;
    });
    addedItemToCompare.quantity = 1;
    return _objectSpread(_objectSpread({}, state), {}, {
      addedItemsToCompare: [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.addedItemsToCompare), [addedItemToCompare])
    });
  }

  if (action.type === _actions_action_types_action_names__WEBPACK_IMPORTED_MODULE_9__["ADD_QUANTITY_WITH_NUMBER"]) {
    var _addedItem = state.products.find(function (item) {
      return item.id === action.id;
    }) || state.semiAuth.find(function (item) {
      return item.id === action.id;
    }) || state.revolver.find(function (item) {
      return item.id === action.id;
    }) || state.ak.find(function (item) {
      return item.id === action.id;
    }) || state.tactical.find(function (item) {
      return item.id === action.id;
    }) || state.leverAction.find(function (item) {
      return item.id === action.id;
    }) || state.derringer.find(function (item) {
      return item.id === action.id;
    }) || state.ars.find(function (item) {
      return item.id === action.id;
    }) || state.aks.find(function (item) {
      return item.id === action.id;
    }) || state.boltAction.find(function (item) {
      return item.id === action.id;
    }) || state.hunting.find(function (item) {
      return item.id === action.id;
    }); //check if the action id exists in the addedItems


    var _existed_item = state.addedItems.find(function (item) {
      return action.id === item.id;
    });

    if (_existed_item) {
      _addedItem.quantity += action.qty;
      return _objectSpread(_objectSpread({}, state), {}, {
        total: state.total + _addedItem.price * action.qty
      });
    } else {
      _addedItem.quantity = action.qty; //calculating the total

      var _newTotal = state.total + _addedItem.price * action.qty;

      return _objectSpread(_objectSpread({}, state), {}, {
        addedItems: [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.addedItems), [_addedItem]),
        total: _newTotal
      });
    }
  }

  if (action.type === _actions_action_types_action_names__WEBPACK_IMPORTED_MODULE_9__["REMOVE_ITEM"]) {
    var itemToRemove = state.addedItems.find(function (item) {
      return action.id === item.id;
    });
    var new_items = state.addedItems.filter(function (item) {
      return action.id !== item.id;
    }); //calculating the total

    var _newTotal2 = state.total - itemToRemove.price * itemToRemove.quantity;

    return _objectSpread(_objectSpread({}, state), {}, {
      addedItems: new_items,
      total: _newTotal2
    });
  }

  if (action.type === _actions_action_types_action_names__WEBPACK_IMPORTED_MODULE_9__["REMOVE_ITEM_FROM_COMPARE"]) {
    var _new_items = state.addedItemsToCompare.filter(function (item) {
      return action.id !== item.id;
    });

    return _objectSpread(_objectSpread({}, state), {}, {
      addedItemsToCompare: _new_items
    });
  }

  if (action.type === _actions_action_types_action_names__WEBPACK_IMPORTED_MODULE_9__["ADD_QUANTITY"]) {
    var _addedItem2 = state.products.find(function (item) {
      return item.id === action.id;
    });

    _addedItem2.quantity += 1;

    var _newTotal3 = state.total + _addedItem2.price;

    return _objectSpread(_objectSpread({}, state), {}, {
      total: _newTotal3
    });
  }

  if (action.type === _actions_action_types_action_names__WEBPACK_IMPORTED_MODULE_9__["SUB_QUANTITY"]) {
    var _addedItem3 = state.products.find(function (item) {
      return item.id === action.id;
    }) || state.semiAuth.find(function (item) {
      return item.id === action.id;
    }) || state.revolver.find(function (item) {
      return item.id === action.id;
    }) || state.ak.find(function (item) {
      return item.id === action.id;
    }) || state.tactical.find(function (item) {
      return item.id === action.id;
    }) || state.leverAction.find(function (item) {
      return item.id === action.id;
    }) || state.derringer.find(function (item) {
      return item.id === action.id;
    }) || state.ars.find(function (item) {
      return item.id === action.id;
    }) || state.aks.find(function (item) {
      return item.id === action.id;
    }) || state.boltAction.find(function (item) {
      return item.id === action.id;
    }) || state.hunting.find(function (item) {
      return item.id === action.id;
    }); //if the qt == 0 then it should be removed


    if (_addedItem3.quantity === 1) {
      var _new_items2 = state.addedItems.filter(function (item) {
        return item.id !== action.id;
      });

      var _newTotal4 = state.total - _addedItem3.price;

      return _objectSpread(_objectSpread({}, state), {}, {
        addedItems: _new_items2,
        total: _newTotal4
      });
    } else {
      _addedItem3.quantity -= 1;

      var _newTotal5 = state.total - _addedItem3.price;

      return _objectSpread(_objectSpread({}, state), {}, {
        total: _newTotal5
      });
    }
  }

  if (action.type === _actions_action_types_action_names__WEBPACK_IMPORTED_MODULE_9__["ADD_SHIPPING"]) {
    return _objectSpread(_objectSpread({}, state), {}, {
      shipping: state.shipping += 6
    });
  }

  if (action.type === 'SUB_SHIPPING') {
    return _objectSpread(_objectSpread({}, state), {}, {
      shipping: state.shipping -= 6
    });
  }

  if (action.type === _actions_action_types_action_names__WEBPACK_IMPORTED_MODULE_9__["RESET_CART"]) {
    return _objectSpread(_objectSpread({}, state), {}, {
      addedItems: [],
      total: 0,
      shipping: 0
    });
  } else {
    return state;
  }
};
var persistConfig = {
  key: 'primary',
  storage: redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_7___default.a
};
var persistedReducer = Object(redux_persist__WEBPACK_IMPORTED_MODULE_6__["persistReducer"])(persistConfig, reducers);

function makeStore(initialState) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_3__["createStore"])(persistedReducer, initialState, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_4__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_3__["applyMiddleware"])()));
}

var initializeStore = function initializeStore(preloadedState) {
  var _store2;

  var _store = (_store2 = store) !== null && _store2 !== void 0 ? _store2 : makeStore(preloadedState); // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store


  if (preloadedState && store) {
    _store = makeStore(_objectSpread(_objectSpread({}, store.getState()), preloadedState)); // Reset the current store

    store = undefined;
  } // For SSG and SSR always create a new store


  if (false) {} // Create the store once in the client

  if (!store) store = _store;
  return _store;
};
function useStore(initialState) {
  _s();

  var store = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    return initializeStore(initialState);
  }, [initialState]);
  return store;
}

_s(useStore, "K8ucUnUnAgJZGJWAL9Ze8IHCmoQ=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdG9yZS9yZWR1Y2Vycy9yZWR1Y2Vycy5qcyJdLCJuYW1lcyI6WyJzdG9yZSIsImluaXRpYWxTdGF0ZSIsInByb2R1Y3RzIiwic2VtaUF1dGgiLCJyZXZvbHZlciIsImFrIiwidGFjdGljYWwiLCJsZXZlckFjdGlvbiIsImRlcnJpbmdlciIsImFycyIsImFrcyIsImJvbHRBY3Rpb24iLCJodW50aW5nIiwicmZ0YWN0aWNhbCIsInNlbGZkZWZlbnNlIiwicmltIiwiaGFuZEFtbXVuaSIsInJpZmxlYW1tdW5pIiwiYWRkZWRJdGVtcyIsImFkZGVkSXRlbXNUb0NvbXBhcmUiLCJ0b3RhbCIsInNoaXBwaW5nIiwicmVkdWNlcnMiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJBRERfVE9fQ0FSVCIsImFkZGVkSXRlbSIsImZpbmQiLCJpdGVtIiwiaWQiLCJleGlzdGVkX2l0ZW0iLCJxdWFudGl0eSIsInByaWNlIiwibmV3VG90YWwiLCJBRERfVE9fQ09NUEFSRSIsImFkZGVkSXRlbVRvQ29tcGFyZSIsIkFERF9RVUFOVElUWV9XSVRIX05VTUJFUiIsInF0eSIsIlJFTU9WRV9JVEVNIiwiaXRlbVRvUmVtb3ZlIiwibmV3X2l0ZW1zIiwiZmlsdGVyIiwiUkVNT1ZFX0lURU1fRlJPTV9DT01QQVJFIiwiQUREX1FVQU5USVRZIiwiU1VCX1FVQU5USVRZIiwiQUREX1NISVBQSU5HIiwiUkVTRVRfQ0FSVCIsInBlcnNpc3RDb25maWciLCJrZXkiLCJzdG9yYWdlIiwicGVyc2lzdGVkUmVkdWNlciIsInBlcnNpc3RSZWR1Y2VyIiwibWFrZVN0b3JlIiwiY3JlYXRlU3RvcmUiLCJjb21wb3NlV2l0aERldlRvb2xzIiwiYXBwbHlNaWRkbGV3YXJlIiwiaW5pdGlhbGl6ZVN0b3JlIiwicHJlbG9hZGVkU3RhdGUiLCJfc3RvcmUiLCJnZXRTdGF0ZSIsInVuZGVmaW5lZCIsInVzZVN0b3JlIiwidXNlTWVtbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7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LEVBQVlBLEtBQUssR0FBRzJELE1BQVI7QUFFWixTQUFPQSxNQUFQO0FBQ0QsQ0FwQk07QUFzQkEsU0FBU0csUUFBVCxDQUFrQjdELFlBQWxCLEVBQWdDO0FBQUE7O0FBQ3JDLE1BQU1ELEtBQUssR0FBRytELHFEQUFPLENBQUM7QUFBQSxXQUFNTixlQUFlLENBQUN4RCxZQUFELENBQXJCO0FBQUEsR0FBRCxFQUFzQyxDQUFDQSxZQUFELENBQXRDLENBQXJCO0FBQ0EsU0FBT0QsS0FBUDtBQUNEOztHQUhlOEQsUSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcX2FwcC5qcy45MTc2OTdkZjA1Mzc2ODBiZThlNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSAncmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uJztcbmltcG9ydCB0aHVua01pZGRsZXdhcmUgZnJvbSAncmVkdXgtdGh1bmsnO1xuaW1wb3J0IHsgcGVyc2lzdFN0b3JlLCBwZXJzaXN0UmVkdWNlciB9IGZyb20gJ3JlZHV4LXBlcnNpc3QnXG5pbXBvcnQgc3RvcmFnZSBmcm9tICdyZWR1eC1wZXJzaXN0L2xpYi9zdG9yYWdlJyAvLyBkZWZhdWx0cyB0byBsb2NhbFN0b3JhZ2UgZm9yIHdlYlxuIFxuXG5pbXBvcnQge1xuICAgIHByb2R1Y3RzLCBcbiAgICBzZW1pQXV0aCwgXG4gICAgcmV2b2x2ZXIsIFxuICAgIGFrLCBcbiAgICB0YWN0aWNhbCwgXG4gICAgbGV2ZXJBY3Rpb24sIFxuICAgIGRlcnJpbmdlcixcbiAgICBhcnMsXG4gICAgYWtzLFxuICAgIGJvbHRBY3Rpb24sXG4gICAgaHVudGluZyxcbiAgICByZnRhY3RpY2FsLFxuICAgIHNlbGZkZWZlbnNlLFxuICAgIHJpbSxcbiAgICBoYW5kQW1tdW5pLFxuICAgIHJpZmxlYW1tdW5pLFxufSBmcm9tICcuLi9qc29uLWRhdGEvcHJvZHVjdHMnO1xuXG5sZXQgc3RvcmVcblxuaW1wb3J0IHsgXG4gICAgQUREX1RPX0NBUlQsXG4gICAgUkVNT1ZFX0lURU0sXG4gICAgU1VCX1FVQU5USVRZLFxuICAgIEFERF9RVUFOVElUWSwgXG4gICAgQUREX1NISVBQSU5HLFxuICAgIEFERF9RVUFOVElUWV9XSVRIX05VTUJFUixcbiAgICBSRVNFVF9DQVJULFxuICAgIEFERF9UT19DT01QQVJFLFxuICAgIFJFTU9WRV9JVEVNX0ZST01fQ09NUEFSRVxufSBmcm9tICcuLi9hY3Rpb25zL2FjdGlvbi10eXBlcy9hY3Rpb24tbmFtZXMnXG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgICBwcm9kdWN0czogcHJvZHVjdHMsXG4gICAgc2VtaUF1dGg6IHNlbWlBdXRoLFxuICAgIHJldm9sdmVyOiByZXZvbHZlcixcbiAgICBhazogYWssXG4gICAgdGFjdGljYWw6IHRhY3RpY2FsLFxuICAgIGxldmVyQWN0aW9uOiBsZXZlckFjdGlvbixcbiAgICBkZXJyaW5nZXI6IGRlcnJpbmdlcixcbiAgICBhcnM6IGFycyxcbiAgICBha3M6IGFrcyxcbiAgICBib2x0QWN0aW9uOiBib2x0QWN0aW9uLFxuICAgIGh1bnRpbmc6IGh1bnRpbmcsXG4gICAgcmZ0YWN0aWNhbDogcmZ0YWN0aWNhbCxcbiAgICBzZWxmZGVmZW5zZTpzZWxmZGVmZW5zZSxcbiAgICByaW06cmltLFxuICAgIGhhbmRBbW11bmk6aGFuZEFtbXVuaSxcbiAgICByaWZsZWFtbXVuaTogcmlmbGVhbW11bmksXG4gICAgYWRkZWRJdGVtczpbXSxcbiAgICBhZGRlZEl0ZW1zVG9Db21wYXJlOltdLFxuICAgIHRvdGFsOiAwLFxuICAgIHNoaXBwaW5nOiAwXG59XG5cbmV4cG9ydCBjb25zdCByZWR1Y2VycyA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICBcbiAgICBpZihhY3Rpb24udHlwZSA9PT0gQUREX1RPX0NBUlQpe1xuICAgICAgICBsZXQgYWRkZWRJdGVtID0gc3RhdGUucHJvZHVjdHMuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IGFjdGlvbi5pZCkgXG4gICAgICAgIHx8IHN0YXRlLnNlbWlBdXRoLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBhY3Rpb24uaWQpXG4gICAgICAgIHx8IHN0YXRlLnJldm9sdmVyLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBhY3Rpb24uaWQpXG4gICAgICAgIHx8IHN0YXRlLmFrLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBhY3Rpb24uaWQpXG4gICAgICAgIHx8IHN0YXRlLnRhY3RpY2FsLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBhY3Rpb24uaWQpXG4gICAgICAgIHx8IHN0YXRlLmxldmVyQWN0aW9uLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBhY3Rpb24uaWQpXG4gICAgICAgIHx8IHN0YXRlLmRlcnJpbmdlci5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gYWN0aW9uLmlkKVxuICAgICAgICB8fCBzdGF0ZS5hcnMuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IGFjdGlvbi5pZClcbiAgICAgICAgfHwgc3RhdGUuYWtzLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBhY3Rpb24uaWQpXG4gICAgICAgIHx8IHN0YXRlLmJvbHRBY3Rpb24uZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IGFjdGlvbi5pZClcbiAgICAgICAgfHwgc3RhdGUuaHVudGluZy5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gYWN0aW9uLmlkKVxuICAgICAgICAvL2NoZWNrIGlmIHRoZSBhY3Rpb24gaWQgZXhpc3RzIGluIHRoZSBhZGRlZEl0ZW1zXG4gICAgICAgIGxldCBleGlzdGVkX2l0ZW0gPSBzdGF0ZS5hZGRlZEl0ZW1zLmZpbmQoaXRlbSA9PiBhY3Rpb24uaWQgPT09IGl0ZW0uaWQpXG4gICAgICAgIGlmKGV4aXN0ZWRfaXRlbSl7XG4gICAgICAgICAgICBhZGRlZEl0ZW0ucXVhbnRpdHkgKz0gMSBcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgdG90YWw6IHN0YXRlLnRvdGFsICsgYWRkZWRJdGVtLnByaWNlIFxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWRkZWRJdGVtLnF1YW50aXR5ID0gMTtcbiAgICAgICAgICAgIC8vY2FsY3VsYXRpbmcgdGhlIHRvdGFsXG4gICAgICAgICAgICBsZXQgbmV3VG90YWwgPSBzdGF0ZS50b3RhbCArIGFkZGVkSXRlbS5wcmljZSBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBhZGRlZEl0ZW1zOiBbLi4uc3RhdGUuYWRkZWRJdGVtcywgYWRkZWRJdGVtXSxcbiAgICAgICAgICAgICAgICB0b3RhbCA6IG5ld1RvdGFsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmKGFjdGlvbi50eXBlID09PSBBRERfVE9fQ09NUEFSRSl7XG4gICAgICAgIGxldCBhZGRlZEl0ZW1Ub0NvbXBhcmUgPSBzdGF0ZS5wcm9kdWN0cy5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gYWN0aW9uLmlkKVxuICAgICAgICB8fCBzdGF0ZS5zZW1pQXV0aC5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gYWN0aW9uLmlkKVxuICAgICAgICB8fCBzdGF0ZS5yZXZvbHZlci5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gYWN0aW9uLmlkKVxuICAgICAgICB8fCBzdGF0ZS5hay5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gYWN0aW9uLmlkKVxuICAgICAgICB8fCBzdGF0ZS50YWN0aWNhbC5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gYWN0aW9uLmlkKVxuICAgICAgICB8fCBzdGF0ZS5sZXZlckFjdGlvbi5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gYWN0aW9uLmlkKVxuICAgICAgICB8fCBzdGF0ZS5kZXJyaW5nZXIuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IGFjdGlvbi5pZClcbiAgICAgICAgfHwgc3RhdGUuYXJzLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBhY3Rpb24uaWQpXG4gICAgICAgIHx8IHN0YXRlLmFrcy5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gYWN0aW9uLmlkKVxuICAgICAgICB8fCBzdGF0ZS5ib2x0QWN0aW9uLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBhY3Rpb24uaWQpXG4gICAgICAgIHx8IHN0YXRlLmh1bnRpbmcuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IGFjdGlvbi5pZClcbiAgICAgICAgXG4gICAgICAgIGFkZGVkSXRlbVRvQ29tcGFyZS5xdWFudGl0eSA9IDE7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICBhZGRlZEl0ZW1zVG9Db21wYXJlOiBbLi4uc3RhdGUuYWRkZWRJdGVtc1RvQ29tcGFyZSwgYWRkZWRJdGVtVG9Db21wYXJlXVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYoYWN0aW9uLnR5cGUgPT09IEFERF9RVUFOVElUWV9XSVRIX05VTUJFUil7XG4gICAgICAgIGxldCBhZGRlZEl0ZW0gPSBzdGF0ZS5wcm9kdWN0cy5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gYWN0aW9uLmlkKVxuICAgICAgICB8fCBzdGF0ZS5zZW1pQXV0aC5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gYWN0aW9uLmlkKVxuICAgICAgICB8fCBzdGF0ZS5yZXZvbHZlci5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gYWN0aW9uLmlkKVxuICAgICAgICB8fCBzdGF0ZS5hay5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gYWN0aW9uLmlkKVxuICAgICAgICB8fCBzdGF0ZS50YWN0aWNhbC5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gYWN0aW9uLmlkKVxuICAgICAgICB8fCBzdGF0ZS5sZXZlckFjdGlvbi5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gYWN0aW9uLmlkKVxuICAgICAgICB8fCBzdGF0ZS5kZXJyaW5nZXIuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IGFjdGlvbi5pZClcbiAgICAgICAgfHwgc3RhdGUuYXJzLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBhY3Rpb24uaWQpXG4gICAgICAgIHx8IHN0YXRlLmFrcy5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gYWN0aW9uLmlkKVxuICAgICAgICB8fCBzdGF0ZS5ib2x0QWN0aW9uLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBhY3Rpb24uaWQpXG4gICAgICAgIHx8IHN0YXRlLmh1bnRpbmcuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IGFjdGlvbi5pZClcbiAgICAgICAgLy9jaGVjayBpZiB0aGUgYWN0aW9uIGlkIGV4aXN0cyBpbiB0aGUgYWRkZWRJdGVtc1xuICAgICAgICBsZXQgZXhpc3RlZF9pdGVtID0gc3RhdGUuYWRkZWRJdGVtcy5maW5kKGl0ZW09PiBhY3Rpb24uaWQgPT09IGl0ZW0uaWQpXG4gICAgICAgIGlmKGV4aXN0ZWRfaXRlbSlcbiAgICAgICAge1xuICAgICAgICAgICAgYWRkZWRJdGVtLnF1YW50aXR5ICs9IGFjdGlvbi5xdHlcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgdG90YWw6IHN0YXRlLnRvdGFsICsgYWRkZWRJdGVtLnByaWNlICogYWN0aW9uLnF0eVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWRkZWRJdGVtLnF1YW50aXR5ID0gYWN0aW9uLnF0eTtcbiAgICAgICAgICAgIC8vY2FsY3VsYXRpbmcgdGhlIHRvdGFsXG4gICAgICAgICAgICBsZXQgbmV3VG90YWwgPSBzdGF0ZS50b3RhbCArIGFkZGVkSXRlbS5wcmljZSAqIGFjdGlvbi5xdHlcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBhZGRlZEl0ZW1zOiBbLi4uc3RhdGUuYWRkZWRJdGVtcywgYWRkZWRJdGVtXSxcbiAgICAgICAgICAgICAgICB0b3RhbCA6IG5ld1RvdGFsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmKGFjdGlvbi50eXBlID09PSBSRU1PVkVfSVRFTSl7XG4gICAgICAgIGxldCBpdGVtVG9SZW1vdmUgPSBzdGF0ZS5hZGRlZEl0ZW1zLmZpbmQoaXRlbT0+IGFjdGlvbi5pZCA9PT0gaXRlbS5pZClcbiAgICAgICAgbGV0IG5ld19pdGVtcyA9IHN0YXRlLmFkZGVkSXRlbXMuZmlsdGVyKGl0ZW09PiBhY3Rpb24uaWQgIT09IGl0ZW0uaWQpXG4gICAgICAgIFxuICAgICAgICAvL2NhbGN1bGF0aW5nIHRoZSB0b3RhbFxuICAgICAgICBsZXQgbmV3VG90YWwgPSBzdGF0ZS50b3RhbCAtIChpdGVtVG9SZW1vdmUucHJpY2UgKiBpdGVtVG9SZW1vdmUucXVhbnRpdHkgKTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICBhZGRlZEl0ZW1zOiBuZXdfaXRlbXMsXG4gICAgICAgICAgICB0b3RhbDogbmV3VG90YWxcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmKGFjdGlvbi50eXBlID09PSBSRU1PVkVfSVRFTV9GUk9NX0NPTVBBUkUpe1xuICAgICAgICBsZXQgbmV3X2l0ZW1zID0gc3RhdGUuYWRkZWRJdGVtc1RvQ29tcGFyZS5maWx0ZXIoaXRlbT0+IGFjdGlvbi5pZCAhPT0gaXRlbS5pZClcbiAgICAgICAgXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgIGFkZGVkSXRlbXNUb0NvbXBhcmU6IG5ld19pdGVtc1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYoYWN0aW9uLnR5cGUgPT09IEFERF9RVUFOVElUWSl7XG4gICAgICAgIGxldCBhZGRlZEl0ZW0gPSBzdGF0ZS5wcm9kdWN0cy5maW5kKGl0ZW09PiBpdGVtLmlkID09PSBhY3Rpb24uaWQpXG4gICAgICAgIGFkZGVkSXRlbS5xdWFudGl0eSArPSAxIFxuICAgICAgICBsZXQgbmV3VG90YWwgPSBzdGF0ZS50b3RhbCArIGFkZGVkSXRlbS5wcmljZVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICB0b3RhbDogbmV3VG90YWxcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmKGFjdGlvbi50eXBlID09PSBTVUJfUVVBTlRJVFkpeyAgXG4gICAgICAgIGxldCBhZGRlZEl0ZW0gPSBzdGF0ZS5wcm9kdWN0cy5maW5kKGl0ZW09PiBpdGVtLmlkID09PSBhY3Rpb24uaWQpIFxuICAgICAgICB8fCBzdGF0ZS5zZW1pQXV0aC5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gYWN0aW9uLmlkKVxuICAgICAgICB8fCBzdGF0ZS5yZXZvbHZlci5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gYWN0aW9uLmlkKVxuICAgICAgICB8fCBzdGF0ZS5hay5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gYWN0aW9uLmlkKVxuICAgICAgICB8fCBzdGF0ZS50YWN0aWNhbC5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gYWN0aW9uLmlkKVxuICAgICAgICB8fCBzdGF0ZS5sZXZlckFjdGlvbi5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gYWN0aW9uLmlkKVxuICAgICAgICB8fCBzdGF0ZS5kZXJyaW5nZXIuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IGFjdGlvbi5pZClcbiAgICAgICAgfHwgc3RhdGUuYXJzLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBhY3Rpb24uaWQpXG4gICAgICAgIHx8IHN0YXRlLmFrcy5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gYWN0aW9uLmlkKVxuICAgICAgICB8fCBzdGF0ZS5ib2x0QWN0aW9uLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBhY3Rpb24uaWQpXG4gICAgICAgIHx8IHN0YXRlLmh1bnRpbmcuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IGFjdGlvbi5pZClcbiAgICAgICAgLy9pZiB0aGUgcXQgPT0gMCB0aGVuIGl0IHNob3VsZCBiZSByZW1vdmVkXG4gICAgICAgIGlmKGFkZGVkSXRlbS5xdWFudGl0eSA9PT0gMSl7XG4gICAgICAgICAgICBsZXQgbmV3X2l0ZW1zID0gc3RhdGUuYWRkZWRJdGVtcy5maWx0ZXIoaXRlbT0+aXRlbS5pZCAhPT0gYWN0aW9uLmlkKVxuICAgICAgICAgICAgbGV0IG5ld1RvdGFsID0gc3RhdGUudG90YWwgLSBhZGRlZEl0ZW0ucHJpY2VcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgYWRkZWRJdGVtczogbmV3X2l0ZW1zLFxuICAgICAgICAgICAgICAgIHRvdGFsOiBuZXdUb3RhbFxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWRkZWRJdGVtLnF1YW50aXR5IC09IDFcbiAgICAgICAgICAgIGxldCBuZXdUb3RhbCA9IHN0YXRlLnRvdGFsIC0gYWRkZWRJdGVtLnByaWNlXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIHRvdGFsOiBuZXdUb3RhbFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cblxuICAgIGlmKGFjdGlvbi50eXBlID09PSBBRERfU0hJUFBJTkcpe1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICBzaGlwcGluZzogc3RhdGUuc2hpcHBpbmcgKz0gNlxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYoYWN0aW9uLnR5cGUgPT09ICdTVUJfU0hJUFBJTkcnKXtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgc2hpcHBpbmc6IHN0YXRlLnNoaXBwaW5nIC09IDZcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmKGFjdGlvbi50eXBlID09PSBSRVNFVF9DQVJUKXtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgYWRkZWRJdGVtczogW10sXG4gICAgICAgICAgICB0b3RhbDogMCxcbiAgICAgICAgICAgIHNoaXBwaW5nOiAwXG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBzdGF0ZVxuICAgIH1cbn1cblxuXG5cbmNvbnN0IHBlcnNpc3RDb25maWcgPSB7XG4gICAga2V5OiAncHJpbWFyeScsXG4gICAgc3RvcmFnZSxcbn1cbiAgXG4gIGNvbnN0IHBlcnNpc3RlZFJlZHVjZXIgPSBwZXJzaXN0UmVkdWNlcihwZXJzaXN0Q29uZmlnLCByZWR1Y2VycylcbiAgXG4gIGZ1bmN0aW9uIG1ha2VTdG9yZShpbml0aWFsU3RhdGUpIHtcbiAgICByZXR1cm4gY3JlYXRlU3RvcmUoXG4gICAgICBwZXJzaXN0ZWRSZWR1Y2VyLFxuICAgICAgaW5pdGlhbFN0YXRlLFxuICAgICAgY29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUoKSlcbiAgICApXG4gIH1cbiAgXG4gIGV4cG9ydCBjb25zdCBpbml0aWFsaXplU3RvcmUgPSAocHJlbG9hZGVkU3RhdGUpID0+IHtcbiAgICBsZXQgX3N0b3JlID0gc3RvcmUgPz8gbWFrZVN0b3JlKHByZWxvYWRlZFN0YXRlKVxuICBcbiAgICAvLyBBZnRlciBuYXZpZ2F0aW5nIHRvIGEgcGFnZSB3aXRoIGFuIGluaXRpYWwgUmVkdXggc3RhdGUsIG1lcmdlIHRoYXQgc3RhdGVcbiAgICAvLyB3aXRoIHRoZSBjdXJyZW50IHN0YXRlIGluIHRoZSBzdG9yZSwgYW5kIGNyZWF0ZSBhIG5ldyBzdG9yZVxuICAgIGlmIChwcmVsb2FkZWRTdGF0ZSAmJiBzdG9yZSkge1xuICAgICAgX3N0b3JlID0gbWFrZVN0b3JlKHtcbiAgICAgICAgLi4uc3RvcmUuZ2V0U3RhdGUoKSxcbiAgICAgICAgLi4ucHJlbG9hZGVkU3RhdGUsXG4gICAgICB9KVxuICAgICAgLy8gUmVzZXQgdGhlIGN1cnJlbnQgc3RvcmVcbiAgICAgIHN0b3JlID0gdW5kZWZpbmVkXG4gICAgfVxuICBcbiAgICAvLyBGb3IgU1NHIGFuZCBTU1IgYWx3YXlzIGNyZWF0ZSBhIG5ldyBzdG9yZVxuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgcmV0dXJuIF9zdG9yZVxuICAgIC8vIENyZWF0ZSB0aGUgc3RvcmUgb25jZSBpbiB0aGUgY2xpZW50XG4gICAgaWYgKCFzdG9yZSkgc3RvcmUgPSBfc3RvcmVcbiAgXG4gICAgcmV0dXJuIF9zdG9yZVxuICB9XG4gIFxuICBleHBvcnQgZnVuY3Rpb24gdXNlU3RvcmUoaW5pdGlhbFN0YXRlKSB7XG4gICAgY29uc3Qgc3RvcmUgPSB1c2VNZW1vKCgpID0+IGluaXRpYWxpemVTdG9yZShpbml0aWFsU3RhdGUpLCBbaW5pdGlhbFN0YXRlXSlcbiAgICByZXR1cm4gc3RvcmVcbiAgfSJdLCJzb3VyY2VSb290IjoiIn0=