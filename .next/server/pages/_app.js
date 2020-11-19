module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("IlR1");


/***/ }),

/***/ "IlR1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "redux-persist/lib/integration/react"
var react_ = __webpack_require__("TEWk");

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__("rKB8");

// EXTERNAL MODULE: external "redux-persist"
var external_redux_persist_ = __webpack_require__("VNb8");

// EXTERNAL MODULE: external "redux-devtools-extension"
var external_redux_devtools_extension_ = __webpack_require__("ufKq");

// EXTERNAL MODULE: external "redux-persist/lib/storage"
var storage_ = __webpack_require__("T8f9");
var storage_default = /*#__PURE__*/__webpack_require__.n(storage_);

// EXTERNAL MODULE: external "redux-persist/lib/stateReconciler/autoMergeLevel2"
var autoMergeLevel2_ = __webpack_require__("O80P");
var autoMergeLevel2_default = /*#__PURE__*/__webpack_require__.n(autoMergeLevel2_);

// EXTERNAL MODULE: external "uuid"
var external_uuid_ = __webpack_require__("kNaX");

// EXTERNAL MODULE: ./src/redux/variables/index.js
var variables = __webpack_require__("g9Xf");

// CONCATENATED MODULE: ./src/redux/reducers/cartReducer.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const cartReducer_initialState = [];
function cartReducer(state = cartReducer_initialState, action) {
  const cartItem = state.find(item => item.cartId === action.cartId);
  const cartItemIndex = cartItem && state.indexOf(cartItem);

  switch (action.type) {
    case variables["a" /* CART */].ADD_TO_CART:
      if (!action.product.variation || action.product.variation.length === 0) {
        const addedCartItem = state.find(item => item.id === action.product.id);
        const addedCartItemIndex = addedCartItem && state.indexOf(addedCartItem);

        if (!addedCartItem) {
          return [...state, _objectSpread(_objectSpread({}, action.product), {}, {
            cartQuantity: action.quantity || 1,
            cartId: Object(external_uuid_["v4"])()
          })];
        } else {
          return [...state.slice(0, addedCartItemIndex), _objectSpread(_objectSpread({}, addedCartItem), {}, {
            cartQuantity: action.quantity ? addedCartItem.cartQuantity + action.quantity : addedCartItem.cartQuantity + 1
          }), ...state.slice(addedCartItemIndex + 1)];
        }
      } else {
        if (!action.color || action.color === "") {
          const addedCartItem = state.find(item => item.id === action.product.id);
          const addedCartItemIndex = addedCartItem && state.indexOf(addedCartItem);

          if (!addedCartItem) {
            return [...state, _objectSpread(_objectSpread({}, action.product), {}, {
              cartQuantity: action.quantity || 1,
              cartId: Object(external_uuid_["v4"])()
            })];
          } else {
            return [...state.slice(0, addedCartItemIndex), _objectSpread(_objectSpread({}, addedCartItem), {}, {
              cartQuantity: action.quantity ? addedCartItem.cartQuantity + action.quantity : addedCartItem.cartQuantity + 1
            }), ...state.slice(addedCartItemIndex + 1)];
          }
        } else {
          const addedCartItem = state.find(item => item.id === action.product.id && item.selectedColor && item.selectedColor === action.color);
          const addedCartItemIndex = addedCartItem && state.indexOf(addedCartItem);

          if (!addedCartItem) {
            return [...state, _objectSpread(_objectSpread({}, action.product), {}, {
              cartQuantity: action.quantity || 1,
              selectedColor: action.color,
              cartId: Object(external_uuid_["v4"])()
            })];
          } else {
            return [...state.slice(0, addedCartItemIndex), _objectSpread(_objectSpread({}, addedCartItem), {}, {
              cartQuantity: action.quantity ? addedCartItem.cartQuantity + action.quantity : addedCartItem.cartQuantity + 1
            }), ...state.slice(addedCartItemIndex + 1)];
          }
        }
      }

    case variables["a" /* CART */].REMOVE_FROM_CART:
      return [...state.slice(0, cartItemIndex), ...state.slice(cartItemIndex + 1)];

    case variables["a" /* CART */].REMOVE_ALL_FROM_CART:
      return [];

    case variables["a" /* CART */].INCREASE_QUANTITY_CART:
      return [...state.slice(0, cartItemIndex), _objectSpread(_objectSpread({}, cartItem), {}, {
        cartQuantity: cartItem.cartQuantity + 1
      }), ...state.slice(cartItemIndex + 1)];

    case variables["a" /* CART */].DECREASE_QUANTITY_CART:
      if (cartItem.cartQuantity < 2) {
        return;
      }

      return [...state.slice(0, cartItemIndex), _objectSpread(_objectSpread({}, cartItem), {}, {
        cartQuantity: cartItem.cartQuantity - 1
      }), ...state.slice(cartItemIndex + 1)];

    default:
      return state;
  }
}
// CONCATENATED MODULE: ./src/redux/reducers/wishlistReducer.js
function wishlistReducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function wishlistReducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { wishlistReducer_ownKeys(Object(source), true).forEach(function (key) { wishlistReducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { wishlistReducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function wishlistReducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const wishlistReducer_initialState = [];
function wishlistReducer(state = wishlistReducer_initialState, action) {
  const wishlistItem = state.find(item => item.id === action.productId);
  const wishlistItemIndex = wishlistItem && state.indexOf(wishlistItem);

  switch (action.type) {
    case variables["c" /* WISHLIST */].ADD_TO_WISHLIST:
      const addedWishlistItem = state.find(item => item.id === action.product.id);
      const addedWishlistItemIndex = addedWishlistItem && state.indexOf(addedWishlistItem);

      if (!addedWishlistItem) {
        return [...state, wishlistReducer_objectSpread({}, action.product)];
      } else {
        return [...state.slice(0, addedWishlistItemIndex), ...state.slice(addedWishlistItemIndex + 1)];
      }

    case variables["c" /* WISHLIST */].REMOVE_FROM_WISHLIST:
      return [...state.slice(0, wishlistItemIndex), ...state.slice(wishlistItemIndex + 1)];

    default:
      return state;
  }
}
// CONCATENATED MODULE: ./src/redux/reducers/shopReducers.js
function shopReducers_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function shopReducers_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { shopReducers_ownKeys(Object(source), true).forEach(function (key) { shopReducers_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { shopReducers_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function shopReducers_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const shopReducers_initialState = {
  filter: {
    category: "all",
    priceRange: {},
    brand: ""
  }
};
function shopReducer(state = shopReducers_initialState, action) {
  switch (action.type) {
    case variables["b" /* SHOP */].SET_FILTER_CATEGORY:
      return shopReducers_objectSpread(shopReducers_objectSpread({}, shopReducers_initialState), {}, {
        filter: shopReducers_objectSpread(shopReducers_objectSpread({}, state.filter), {}, {
          category: action.category
        })
      });

    case variables["b" /* SHOP */].SET_FILTER_BRAND:
      return shopReducers_objectSpread(shopReducers_objectSpread({}, shopReducers_initialState), {}, {
        filter: shopReducers_objectSpread(shopReducers_objectSpread({}, state.filter), {}, {
          brand: action.brand
        })
      });

    case variables["b" /* SHOP */].SET_FILTER_PRICE_RANGE:
      return shopReducers_objectSpread(shopReducers_objectSpread({}, shopReducers_initialState), {}, {
        filter: shopReducers_objectSpread(shopReducers_objectSpread({}, state.filter), {}, {
          priceRange: action.priceRange
        })
      });

    case variables["b" /* SHOP */].RESET_FILTER:
      return shopReducers_objectSpread(shopReducers_objectSpread({}, shopReducers_initialState), {}, {
        filter: {
          category: "all",
          priceRange: {},
          brand: ""
        }
      });

    default:
      return state;
  }
}
// CONCATENATED MODULE: ./src/redux/reducers/rootReducer.js




const rootReducer = Object(external_redux_["combineReducers"])({
  cartReducer: cartReducer,
  wishlistReducer: wishlistReducer,
  shopReducers: shopReducer
});
/* harmony default export */ var reducers_rootReducer = (rootReducer);
// CONCATENATED MODULE: ./src/redux/store.js






const persistConfig = {
  key: "root",
  storage: storage_default.a,
  stateReconciler: autoMergeLevel2_default.a // Xem thêm tại mục "Quá trình merge".

};
const pReducer = Object(external_redux_persist_["persistReducer"])(persistConfig, reducers_rootReducer);
const createdStore = Object(external_redux_["createStore"])(pReducer, Object(external_redux_devtools_extension_["composeWithDevTools"])(Object(external_redux_["applyMiddleware"])()));
const initializeStore = (initialState = {}) => {
  return createdStore;
};
const persistor = Object(external_redux_persist_["persistStore"])(createdStore);
// EXTERNAL MODULE: external "react-toastify"
var external_react_toastify_ = __webpack_require__("oAEb");

// EXTERNAL MODULE: external "react-scroll-to-top"
var external_react_scroll_to_top_ = __webpack_require__("JUv4");
var external_react_scroll_to_top_default = /*#__PURE__*/__webpack_require__.n(external_react_scroll_to_top_);

// EXTERNAL MODULE: ./src/styles/styles.scss
var styles = __webpack_require__("PGGC");

// CONCATENATED MODULE: ./src/components/Other/Loading.js
var __jsx = external_react_default.a.createElement;

function Loading() {
  return __jsx("div", {
    className: "loading-overlay"
  }, __jsx("img", {
    src: "" + "/assets/images/loading.gif",
    alt: "Loading image"
  }));
}
// CONCATENATED MODULE: ./src/common/with-redux-store.js

var with_redux_store_jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function with_redux_store_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function with_redux_store_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { with_redux_store_ownKeys(Object(source), true).forEach(function (key) { with_redux_store_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { with_redux_store_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function with_redux_store_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const isServer = true;
const __NEXT_REDUX_STORE__ = "__NEXT_REDUX_STORE__";

function getOrCreateStore(initialState) {
  // Always make a new store if server, otherwise state is shared between requests
  if (isServer) {
    return initializeStore(initialState);
  } // Create store if unavailable on the client and set it on the window object


  if (!window[__NEXT_REDUX_STORE__]) {
    window[__NEXT_REDUX_STORE__] = initializeStore(initialState);
  }

  return window[__NEXT_REDUX_STORE__];
}

/* harmony default export */ var with_redux_store = (App => {
  return class AppWithRedux extends external_react_default.a.Component {
    static async getInitialProps(appContext) {
      // Get or Create the store with `undefined` as initialState
      // This allows you to set a custom default initialState
      const reduxStore = getOrCreateStore(); // Provide the store to getInitialProps of pages

      appContext.ctx.reduxStore = reduxStore;
      let appProps = {};

      if (typeof App.getInitialProps === "function") {
        appProps = await App.getInitialProps(appContext);
      }

      return with_redux_store_objectSpread(with_redux_store_objectSpread({}, appProps), {}, {
        initialReduxState: reduxStore.getState()
      });
    }

    constructor(props) {
      super(props);
      this.reduxStore = getOrCreateStore(props.initialReduxState);
    }

    render() {
      return with_redux_store_jsx(App, _extends({}, this.props, {
        reduxStore: this.reduxStore
      }));
    }

  };
});
// CONCATENATED MODULE: ./src/pages/_app.js

var _app_jsx = external_react_default.a.createElement;









const _app_App = ({
  Component,
  pageProps,
  reduxStore
}) => {
  return _app_jsx(external_react_redux_["Provider"], {
    store: reduxStore
  }, _app_jsx(react_["PersistGate"], {
    loading: _app_jsx(Loading, null),
    persistor: persistor
  }, _app_jsx(Component, pageProps), _app_jsx(external_react_toastify_["ToastContainer"], {
    position: "bottom-left",
    autoClose: 3000
  }), _app_jsx(external_react_scroll_to_top_default.a, {
    smooth: true,
    component: _app_jsx("i", {
      className: "fal fa-arrow-to-top"
    }),
    style: {
      backgroundColor: "#f7f5f4",
      borderRadius: "999px",
      height: "50px",
      width: "50px"
    }
  })));
};

/* harmony default export */ var _app = __webpack_exports__["default"] = (with_redux_store(_app_App));

/***/ }),

/***/ "JUv4":
/***/ (function(module, exports) {

module.exports = require("react-scroll-to-top");

/***/ }),

/***/ "O80P":
/***/ (function(module, exports) {

module.exports = require("redux-persist/lib/stateReconciler/autoMergeLevel2");

/***/ }),

/***/ "PGGC":
/***/ (function(module, exports) {



/***/ }),

/***/ "T8f9":
/***/ (function(module, exports) {

module.exports = require("redux-persist/lib/storage");

/***/ }),

/***/ "TEWk":
/***/ (function(module, exports) {

module.exports = require("redux-persist/lib/integration/react");

/***/ }),

/***/ "VNb8":
/***/ (function(module, exports) {

module.exports = require("redux-persist");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "g9Xf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return WISHLIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SHOP; });
const CART = {
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
  REMOVE_ALL_FROM_CART: "REMOVE_ALL_FROM_CART",
  DECREASE_QUANTITY_CART: "DECREASE_QUANTITY_CART",
  INCREASE_QUANTITY_CART: "INCREASE_QUANTITY_CART"
};
const WISHLIST = {
  ADD_TO_WISHLIST: "ADD_TO_WISHLIST",
  REMOVE_FROM_WISHLIST: "REMOVE_FROM_WISHLIST"
};
const SHOP = {
  SET_FILTER_CATEGORY: "SET_FILTER_CATEGORY",
  SET_FILTER_PRICE_RANGE: "SET_FILTER_PRICE_RANGE",
  SET_FILTER_BRAND: "SET_FILTER_BRAND",
  RESET_FILTER: "RESET_FILTER"
};

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "kNaX":
/***/ (function(module, exports) {

module.exports = require("uuid");

/***/ }),

/***/ "oAEb":
/***/ (function(module, exports) {

module.exports = require("react-toastify");

/***/ }),

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "ufKq":
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ })

/******/ });