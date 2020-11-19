module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+5HK":
/***/ (function(module, exports) {

module.exports = require("react-mailchimp-subscribe");

/***/ }),

/***/ "/LDh":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "react-toastify"
var external_react_toastify_ = __webpack_require__("oAEb");

// EXTERNAL MODULE: external "react-tooltip"
var external_react_tooltip_ = __webpack_require__("E8iq");
var external_react_tooltip_default = /*#__PURE__*/__webpack_require__.n(external_react_tooltip_);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: ./src/components/Other/Rate.js
var Rate = __webpack_require__("GXNE");

// EXTERNAL MODULE: ./src/components/Control/Button.js
var Button = __webpack_require__("6EID");

// EXTERNAL MODULE: ./src/components/Control/Modal.js
var Modal = __webpack_require__("bMKh");

// EXTERNAL MODULE: ./src/components/ProductDetail/Elements/ProductDetailInfo.js + 3 modules
var ProductDetailInfo = __webpack_require__("UQuY");

// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__("O/hg");
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);

// EXTERNAL MODULE: ./src/components/Other/SliderArrow.js
var SliderArrow = __webpack_require__("JRj/");

// CONCATENATED MODULE: ./src/components/ProductDetail/Elements/ProductDetailSlideOne.js
var __jsx = external_react_default.a.createElement;



function ProductDetailSlideOne({
  data
}) {
  const settings = {
    customPaging: function (i) {
      return __jsx("div", {
        className: "slider__dot"
      });
    },
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: __jsx(SliderArrow["b" /* PrevArrow */], null),
    nextArrow: __jsx(SliderArrow["a" /* NextArrow */], null)
  };
  return __jsx("div", {
    className: "product-detail__slide-one"
  }, __jsx(external_react_slick_default.a, settings, data.images && data.images.map((img, index) => __jsx("div", {
    key: index,
    className: "slider__item"
  }, __jsx("img", {
    src: img,
    alt: "Product image"
  })))));
}
// CONCATENATED MODULE: ./src/components/ProductDetail/ProductQuickView.js
var ProductQuickView_jsx = external_react_default.a.createElement;



function ProductQuickView({
  data
}) {
  return ProductQuickView_jsx("div", {
    className: "product-quickview"
  }, ProductQuickView_jsx("div", {
    className: "row"
  }, ProductQuickView_jsx("div", {
    className: "col-12 col-md-6"
  }, ProductQuickView_jsx(ProductDetailSlideOne, {
    data: data
  })), ProductQuickView_jsx("div", {
    className: "col-12 col-md-6"
  }, ProductQuickView_jsx(ProductDetailInfo["a" /* default */], {
    data: data,
    hideTab: true
  }))));
}
// EXTERNAL MODULE: ./src/common/utils.js
var utils = __webpack_require__("kLkQ");

// EXTERNAL MODULE: ./src/common/shopUtils.js
var shopUtils = __webpack_require__("TVAx");

// EXTERNAL MODULE: ./src/redux/actions/cartActions.js
var cartActions = __webpack_require__("wQtD");

// EXTERNAL MODULE: ./src/redux/actions/wishlistActions.js
var wishlistActions = __webpack_require__("8hBj");

// EXTERNAL MODULE: ./src/components/Control/AddToCart.js
var AddToCart = __webpack_require__("Cs3t");

// CONCATENATED MODULE: ./src/components/Product/index.js
var Product_jsx = external_react_default.a.createElement;
















function Product({
  data,
  type,
  className
}) {
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const cartState = Object(external_react_redux_["useSelector"])(state => state.cartReducer);
  const wishlistData = Object(external_react_redux_["useSelector"])(state => state.wishlistReducer);
  const {
    0: showQuickView,
    1: setShowQuickView
  } = Object(external_react_["useState"])(false);
  const {
    0: otherColor,
    1: setOtherColor
  } = Object(external_react_["useState"])();
  const percentDiscount = data.discount ? Math.ceil(100 - 100 * data.discount / data.price) : null;

  function renderType() {
    if (data.new) {
      return Product_jsx("h5", {
        className: "-new"
      }, "New");
    }

    if (data.discount && typeof data.discount === "number") {
      return Product_jsx("h5", {
        className: "-sale"
      }, "-", percentDiscount, "%");
    }

    return null;
  }

  const addToCartHandle = e => {
    e.preventDefault();
    let productItem = Object(shopUtils["b" /* checkProductInCart */])(cartState, data.id);

    if (!productItem && data.quantity > 0) {
      dispatch(Object(cartActions["a" /* addToCart */])(data, 1, otherColor && otherColor.color));
      return external_react_toastify_["toast"].success("Product added to cart !");
    }
  };

  const addToWishlistHandle = e => {
    e.preventDefault();
    const wishlistItem = Object(shopUtils["c" /* checkProductInWishList */])(wishlistData, data.id);
    dispatch(Object(wishlistActions["a" /* addToWishlist */])(data));
    external_react_toastify_["toast"].dismiss();

    if (!wishlistItem) {
      return external_react_toastify_["toast"].success("Product added to wishlist !");
    } else {
      return external_react_toastify_["toast"].error("Product removed from wishlist !");
    }
  };

  return Product_jsx(external_react_default.a.Fragment, null, !type || type === "grid" ? Product_jsx("div", {
    className: `product ${external_classnames_default()(className)}`
  }, Product_jsx("div", {
    className: "product-type"
  }, renderType()), Product_jsx("div", {
    className: "product__thumb"
  }, Product_jsx(link_default.a, {
    href: "#",
    as: `${""}/shop/product/${data.slug}`
  }, Product_jsx("a", {
    className: "product__thumb__image"
  }, data.thumbImage.map((img, index) => Product_jsx("img", {
    key: index,
    src: "" + img,
    alt: "Product image"
  })), otherColor && Product_jsx("img", {
    src: otherColor.image,
    alt: "Product image"
  }))), Product_jsx("div", {
    className: "product__thumb__actions"
  }, Product_jsx("div", {
    className: "product-btn",
    "data-tip": true,
    "data-for": "cartIcon"
  }, Product_jsx(Button["a" /* default */], {
    height: "50px",
    width: "50px",
    color: "white",
    className: `product__actions__item -round ${external_classnames_default()({
      "active -disable": Object(shopUtils["b" /* checkProductInCart */])(cartState, data.id) || data.quantity < 1
    })}
                  `,
    action: "#",
    onClick: addToCartHandle,
    content: Product_jsx("i", {
      className: "fas fa-shopping-bag"
    })
  })), Product_jsx(external_react_tooltip_default.a, {
    id: "cartIcon",
    type: "dark",
    effect: "solid"
  }, Product_jsx("span", null, "Add to Cart")), Product_jsx("div", {
    className: "product-btn",
    "data-tip": true,
    "data-for": "qvIcon"
  }, Product_jsx(Button["a" /* default */], {
    height: 50 / 14 + "em",
    width: 50 / 14 + "em",
    color: "white",
    className: "product__actions__item -round",
    action: "#",
    onClick: e => {
      e.preventDefault();
      setShowQuickView(true);
    },
    content: Product_jsx("i", {
      className: "fas fa-eye"
    })
  })), Product_jsx(external_react_tooltip_default.a, {
    id: "qvIcon",
    type: "dark",
    effect: "solid"
  }, Product_jsx("span", null, "Quick view")), Product_jsx("div", {
    className: "product-btn",
    "data-tip": true,
    "data-for": "wlIcon"
  }, Product_jsx(Button["a" /* default */], {
    height: 50 / 14 + "em",
    width: 50 / 14 + "em",
    color: "white",
    className: `product__actions__item -round ${external_classnames_default()({
      active: Object(shopUtils["c" /* checkProductInWishList */])(wishlistData, data.id)
    })}`,
    action: "#",
    onClick: addToWishlistHandle,
    content: Product_jsx("i", {
      className: "fas fa-heart"
    })
  })), Product_jsx(external_react_tooltip_default.a, {
    id: "wlIcon",
    type: "dark",
    effect: "solid"
  }, Product_jsx("span", null, "Add to Wishlist")))), Product_jsx("div", {
    className: "product__content"
  }, Product_jsx("div", {
    className: "product__content__header"
  }, Product_jsx("h5", {
    className: "product-category"
  }, data.category), Product_jsx(Rate["a" /* default */], {
    currentRate: data.rate
  })), Product_jsx(link_default.a, {
    href: "#",
    as: `${""}/shop/product/${data.slug}`
  }, Product_jsx("a", {
    className: "product-name"
  }, data.name)), Product_jsx("div", {
    className: "product__content__footer"
  }, Product_jsx("h5", {
    className: "product-price--main"
  }, data.discount ? Object(utils["a" /* formatCurrency */])(data.discount) : Object(utils["a" /* formatCurrency */])(data.price)), data.discount && Product_jsx("h5", {
    className: "product-price--discount"
  }, Object(utils["a" /* formatCurrency */])(data.price)), data.variation && Product_jsx("div", {
    className: "product-colors"
  }, data.variation.map((color, index) => Product_jsx("div", {
    key: index,
    className: `product-colors__item ${external_classnames_default()({
      active: otherColor && otherColor.colorCode === color.colorCode
    })}`,
    style: {
      backgroundColor: color.colorCode
    },
    onClick: () => setOtherColor(color)
  })))))) : Product_jsx("div", {
    className: `product-list ${external_classnames_default()(className)}`
  }, Product_jsx("div", {
    className: "product-list__thumb"
  }, Product_jsx("div", {
    className: "product-type"
  }, renderType()), Product_jsx(link_default.a, {
    href: "#",
    as: `${""}/shop/product/${data.slug}`
  }, Product_jsx("a", {
    className: "product-list__thumb__image"
  }, data.thumbImage.map((img, index) => Product_jsx("img", {
    key: index,
    src: "" + img,
    alt: "Product image"
  })), otherColor && Product_jsx("img", {
    src: otherColor.image,
    alt: "Product image"
  })))), Product_jsx("div", {
    className: "product-list__content"
  }, Product_jsx("div", {
    className: "product-list__content__top"
  }, Product_jsx("div", {
    className: "product-category__wrapper"
  }, Product_jsx("h5", {
    className: "product-category"
  }, data.category), Product_jsx(Rate["a" /* default */], {
    currentRate: data.rate
  })), Product_jsx(link_default.a, {
    href: "#",
    as: `${""}/shop/product/${data.slug}`
  }, Product_jsx("a", {
    className: "product-name"
  }, data.name)), Product_jsx("div", {
    className: "product__price"
  }, Product_jsx("div", {
    className: "product__price__wrapper"
  }, Product_jsx("h5", {
    className: "product-price--main"
  }, data.discount ? Object(utils["a" /* formatCurrency */])(data.discount) : Object(utils["a" /* formatCurrency */])(data.price)), data.discount && Product_jsx("h5", {
    className: "product-price--discount"
  }, Object(utils["a" /* formatCurrency */])(data.price))), data.variation && Product_jsx("div", {
    className: "product-colors"
  }, data.variation.map((color, index) => Product_jsx("div", {
    key: index,
    className: `product-colors__item ${otherColor && otherColor.colorCode === color.colorCode ? "active" : ""}`,
    style: {
      backgroundColor: color.colorCode
    },
    onClick: () => setOtherColor(color)
  }))))), Product_jsx("div", {
    className: "product-list__content__bottom"
  }, Product_jsx("p", {
    className: "product-description"
  }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ipsa fugiat accusantium reiciendis rem doloribus iste doloremque"), Product_jsx("div", {
    className: "product__actions"
  }, Product_jsx("div", {
    className: "product-btn"
  }, Product_jsx(AddToCart["a" /* default */], {
    onClick: addToCartHandle,
    className: external_classnames_default()({
      "-disable": Object(shopUtils["b" /* checkProductInCart */])(cartState, data.id) || data.quantity < 1
    })
  })), Product_jsx("div", {
    className: "product-btn",
    "data-tip": true,
    "data-for": "l-qvIcon"
  }, Product_jsx(Button["a" /* default */], {
    height: 50 / 14 + "em",
    width: 50 / 14 + "em",
    color: "white",
    className: "product__actions__item -round",
    action: "#",
    onClick: e => {
      e.preventDefault();
      setShowQuickView(true);
    },
    content: Product_jsx("i", {
      className: "fas fa-eye"
    })
  })), Product_jsx(external_react_tooltip_default.a, {
    id: "l-qvIcon",
    type: "dark",
    effect: "solid"
  }, Product_jsx("span", null, "Quick view")), Product_jsx("div", {
    className: "product-btn",
    "data-tip": true,
    "data-for": "l-wlIcon",
    style: {
      marginRight: 0
    }
  }, Product_jsx(Button["a" /* default */], {
    height: 50 / 14 + "em",
    width: 50 / 14 + "em",
    color: "white",
    className: `product__actions__item -round ${external_classnames_default()({
      active: Object(shopUtils["c" /* checkProductInWishList */])(wishlistData, data.id)
    })}`,
    action: "#",
    onClick: addToWishlistHandle,
    content: Product_jsx("i", {
      className: "fas fa-heart"
    })
  })), Product_jsx(external_react_tooltip_default.a, {
    id: "l-wlIcon",
    type: "dark",
    effect: "solid"
  }, Product_jsx("span", null, "Add to Wishlist")))))));
}

/* harmony default export */ var components_Product = __webpack_exports__["a"] = (Product);

/***/ }),

/***/ "/j0s":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SectionTitleOne; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function SectionTitleOne({
  subTitle,
  className,
  description,
  align,
  spaceBottom,
  showSubTitle,
  children,
  hideDecoration,
  titleSize
}) {
  return __jsx("div", {
    className: `section-title -style1 ${classnames__WEBPACK_IMPORTED_MODULE_1___default()(className)}`,
    style: {
      textAlign: align,
      marginBottom: spaceBottom || "3.125rem"
    }
  }, showSubTitle && __jsx("h5", null, subTitle), __jsx("h2", {
    style: {
      fontSize: titleSize
    }
  }, children), description && __jsx("p", null, description), !hideDecoration && __jsx("img", {
    src: "/assets/images/introduction/IntroductionOne/content-deco.png",
    alt: "decoration"
  }));
}

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


var _interopRequireDefault = __webpack_require__("TqRt");

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

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("y15V");


/***/ }),

/***/ "284h":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("cDf5");

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

/***/ "2JqZ":
/***/ (function(module, exports) {

module.exports = require("react-hooks-paginator");

/***/ }),

/***/ "3WeD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "65ip":
/***/ (function(module, exports) {

module.exports = require("react-tabs");

/***/ }),

/***/ "6D7l":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__("3WeD"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
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

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "6EID":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Button; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Button(props) {
  const {
    action,
    as,
    content,
    color,
    height,
    width,
    className,
    onClick,
    disable
  } = props;
  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: disable ? "#" : action
  }, __jsx("a", {
    className: `btn -${classnames__WEBPACK_IMPORTED_MODULE_2___default()(color)} ${classnames__WEBPACK_IMPORTED_MODULE_2___default()(className)}`,
    onClick: onClick,
    style: {
      height: height,
      width: width,
      lineHeight: height,
      paddingTop: height && 0,
      paddingBottom: height && 0,
      paddingLeft: width && 0,
      paddingRight: width && 0,
      pointerEvents: disable && none
    }
  }, content));
}

/***/ }),

/***/ "6QH/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ LayoutFour; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./src/common/withScrollFixed.js
var withScrollFixed = __webpack_require__("PmzM");

// EXTERNAL MODULE: ./src/components/Footer/FooterOne.js
var FooterOne = __webpack_require__("zlC1");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: ./src/components/Header/Elements/Navigator.js
var Navigator = __webpack_require__("VOjt");

// EXTERNAL MODULE: ./src/components/Header/Elements/MenuFunctionIcons.js + 6 modules
var MenuFunctionIcons = __webpack_require__("brf1");

// EXTERNAL MODULE: ./src/common/utils.js
var utils = __webpack_require__("kLkQ");

// CONCATENATED MODULE: ./src/components/Header/Menu/MenuThree.js
var __jsx = external_react_default.a.createElement;





function MenuThree({
  hide,
  container
}) {
  return __jsx("div", {
    className: "menu -style-3"
  }, __jsx("div", {
    className: Object(utils["c" /* renderContainer */])(container)
  }, __jsx("div", {
    className: "menu__wrapper"
  }, __jsx(link_default.a, {
    href: "/homepages/homepage1"
  }, __jsx("a", {
    className: "menu__wrapper__logo"
  }, __jsx("img", {
    src: "" + "/assets/images/logo-white.png",
    alt: "Logo"
  }))), __jsx(Navigator["a" /* default */], {
    className: "-white"
  }), __jsx(MenuFunctionIcons["a" /* default */], {
    hide: hide,
    white: true,
    className: "-white"
  }))));
}
// CONCATENATED MODULE: ./src/components/Header/HeaderFour.js

var HeaderFour_jsx = external_react_default.a.createElement;

function HeaderFour(props) {
  return HeaderFour_jsx(external_react_default.a.Fragment, null, HeaderFour_jsx(MenuThree, props));
}
// CONCATENATED MODULE: ./src/components/Layout/LayoutFour.js

var LayoutFour_jsx = external_react_default.a.createElement;




let ScrollFixedHeader = Object(withScrollFixed["a" /* default */])(HeaderFour);
function LayoutFour(props) {
  return LayoutFour_jsx(external_react_default.a.Fragment, null, LayoutFour_jsx(head_default.a, null, LayoutFour_jsx("title", null, props.title || "Eliah | React")), LayoutFour_jsx(ScrollFixedHeader, {
    container: props.container
  }), props.children, LayoutFour_jsx(FooterOne["a" /* default */], null));
}

/***/ }),

/***/ "8hBj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addToWishlist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return removeFromWishlist; });
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("g9Xf");

const addToWishlist = product => ({
  type: _variables__WEBPACK_IMPORTED_MODULE_0__[/* WISHLIST */ "c"].ADD_TO_WISHLIST,
  product
});
const removeFromWishlist = productId => ({
  type: _variables__WEBPACK_IMPORTED_MODULE_0__[/* WISHLIST */ "c"].REMOVE_FROM_WISHLIST,
  productId
});

/***/ }),

/***/ "A2gu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientOnlyPortal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("faye");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);


function ClientOnlyPortal({
  children,
  selector
}) {
  const ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  const {
    0: mounted,
    1: setMounted
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    ref.current = document.querySelector(selector);
    setMounted(true);
  }, [selector]);
  return mounted ? /*#__PURE__*/Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["createPortal"])(children, ref.current) : null;
}

/***/ }),

/***/ "BTiB":
/***/ (function(module, exports) {

module.exports = require("react-hook-form");

/***/ }),

/***/ "CSOn":
/***/ (function(module, exports) {

module.exports = require("react-transition-group");

/***/ }),

/***/ "Cs3t":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddToCart; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("6EID");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function AddToCart({
  onClick,
  className
}) {
  return __jsx("div", {
    className: `add-to-cart ${classnames__WEBPACK_IMPORTED_MODULE_2___default()(className)}`,
    onClick: onClick
  }, __jsx(_Button__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    height: "3.85em",
    width: "3.85em",
    color: "red",
    className: "-round",
    action: "#",
    content: __jsx("i", {
      className: "fas fa-shopping-bag"
    })
  }), __jsx("h5", null, "Add to cart"));
}

/***/ }),

/***/ "DS7o":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocialIcons; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function SocialIcons({
  className,
  colored
}) {
  return __jsx("ul", {
    className: `${classnames__WEBPACK_IMPORTED_MODULE_1___default()(className)} social-icons`
  }, __jsx("li", null, __jsx("a", {
    style: {
      color: colored && "#2463ac"
    },
    href: "https://www.facebook.com/"
  }, __jsx("i", {
    className: "fab fa-facebook-f"
  }))), __jsx("li", null, __jsx("a", {
    style: {
      color: colored && "#00c4fc"
    },
    href: "https://twitter.com"
  }, __jsx("i", {
    className: "fab fa-twitter"
  }))), __jsx("li", null, __jsx("a", {
    style: {
      color: colored && "#dd34c1"
    },
    href: "https://instagram.com/"
  }, __jsx("i", {
    className: "fab fa-instagram"
  }))), __jsx("li", null, __jsx("a", {
    style: {
      color: colored && "#ff081c"
    },
    href: "https://www.youtube.com/"
  }, __jsx("i", {
    className: "fab fa-youtube"
  }))));
}

/***/ }),

/***/ "E8iq":
/***/ (function(module, exports) {

module.exports = require("react-tooltip");

/***/ }),

/***/ "FfJh":
/***/ (function(module) {

module.exports = JSON.parse("{\"accountLinks\":[{\"name\":\"My account\",\"to\":\"#\"},{\"name\":\"Wishlist\",\"to\":\"#\"},{\"name\":\"Cart\",\"to\":\"#\"},{\"name\":\"Shop\",\"to\":\"#\"},{\"name\":\"Checkout\",\"to\":\"#\"}],\"informationLinks\":[{\"name\":\"About us\",\"to\":\"#\"},{\"name\":\"Careers\",\"to\":\"#\"},{\"name\":\"Delivery Information\",\"to\":\"#\"},{\"name\":\"Privacy Policy\",\"to\":\"#\"},{\"name\":\"Terms & Condition\",\"to\":\"#\"}],\"creditLinks\":[{\"name\":\"Privacy Policy\",\"to\":\"#\"},{\"name\":\"Terms & Condition\",\"to\":\"#\"},{\"name\":\"Site map\",\"to\":\"#\"}]}");

/***/ }),

/***/ "GXNE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Rate; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function Rate({
  currentRate
}) {
  let arrOfStar = [];

  for (let i = 0; i < 5; i++) {
    if (i >= currentRate) {
      arrOfStar.push(__jsx("i", {
        key: i,
        className: "far fa-star"
      }));
    } else {
      arrOfStar.push(__jsx("i", {
        key: i,
        className: "fas fa-star"
      }));
    }
  }

  return __jsx("div", {
    className: "rate"
  }, arrOfStar);
}

/***/ }),

/***/ "H3fK":
/***/ (function(module) {

module.exports = JSON.parse("[{\"title\":\"Home\",\"to\":\"#\",\"subMenu\":[{\"title\":\"Beauty Salon\",\"to\":\"#\"},{\"title\":\"Makeup Salon\",\"to\":\"#\"},{\"title\":\"Natural Shop\",\"to\":\"#\"},{\"title\":\"Spa Shop\",\"to\":\"#\"},{\"title\":\"Mask Shop\",\"to\":\"#\"},{\"title\":\"Skincare Shop\",\"to\":\"#\"}]},{\"title\":\"Offers\",\"to\":\"#\"},{\"title\":\"About\",\"to\":\"#\"},{\"title\":\"Services\",\"to\":\"#\",\"subMenu\":[{\"title\":\"Men\",\"to\":\"#\"},{\"title\":\"Women\",\"to\":\"#\"},{\"title\":\"Kids\",\"to\":\"#\"}]},{\"title\":\"Blog\",\"to\":\"#\"},{\"title\":\"Contact\",\"to\":\"#\"}]");

/***/ }),

/***/ "J+Fc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return product; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return blog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return shop; });
const product = {
  DEFAULT_QUANTITY: 1
};
const blog = {
  CATEGORIES: ["Beauty tips", "Make up", "Skin care", "Body care", "Videos"]
};
const shop = {
  CATEGORISE: ["all", "eyes", "face", "lips", "set"],
  BRANDS: ["gucci", "dolce", "h&m", "kenzo", "prada"],
  PRICE_POINTS: [0, 25, 50, 75, 100],
  SORT_TYPES: [{
    name: "Default",
    value: "default"
  }, {
    name: "A to Z Sorting",
    value: "az"
  }, {
    name: "Z to A Sorting",
    value: "za"
  }, {
    name: "Low to High Price Sorting",
    value: "lowToHigh"
  }, {
    name: "High to Low Price Sorting",
    value: "highToLow"
  }],
  DEFAULT_VIEW: "grid"
};

/***/ }),

/***/ "JPSD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ ShopSidebar; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: ./src/components/Sections/SectionTitle/SectionTitleOne.js
var SectionTitleOne = __webpack_require__("/j0s");

// EXTERNAL MODULE: ./src/common/variables.js
var variables = __webpack_require__("J+Fc");

// EXTERNAL MODULE: ./src/common/utils.js
var utils = __webpack_require__("kLkQ");

// EXTERNAL MODULE: ./src/redux/variables/index.js
var redux_variables = __webpack_require__("g9Xf");

// CONCATENATED MODULE: ./src/redux/actions/shopActions.js

const setFilterCategory = category => ({
  type: redux_variables["b" /* SHOP */].SET_FILTER_CATEGORY,
  category
});
const setFilterBrand = brand => ({
  type: redux_variables["b" /* SHOP */].SET_FILTER_BRAND,
  brand
});
const setFilterPriceRange = priceRange => ({
  type: redux_variables["b" /* SHOP */].SET_FILTER_PRICE_RANGE,
  priceRange
});
const resetFilter = () => ({
  type: redux_variables["b" /* SHOP */].RESET_FILTER
});
// CONCATENATED MODULE: ./src/components/Shop/ShopSidebar.js

var __jsx = external_react_default.a.createElement;








function ShopSidebar() {
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const filterData = Object(external_react_redux_["useSelector"])(state => state.shopReducers.filter);
  Object(external_react_["useEffect"])(() => {
    dispatch(resetFilter());
  }, []);
  return __jsx("div", {
    className: "shop-sidebar"
  }, __jsx("div", {
    className: "shop-sidebar__content"
  }, __jsx("div", {
    className: "shop-sidebar__section -categories"
  }, __jsx(SectionTitleOne["a" /* default */], {
    className: "-medium",
    spaceBottom: 30 / 16 + "em"
  }, "Categories"), __jsx("ul", null, variables["c" /* shop */].CATEGORISE.map((item, index) => __jsx("li", {
    key: index,
    className: external_classnames_default()({
      active: item === filterData.category
    })
  }, __jsx(link_default.a, {
    href: "" + "#",
    key: index
  }, __jsx("a", {
    onClick: e => {
      e.preventDefault();
      dispatch(setFilterCategory(item));
    }
  }, item)))))), __jsx("div", {
    className: "shop-sidebar__section -refine"
  }, __jsx(SectionTitleOne["a" /* default */], {
    className: "-medium",
    spaceBottom: 30 / 16 + "em"
  }, "Refine Search"), __jsx("div", {
    className: "shop-sidebar__section__item"
  }, __jsx("h5", null, "Brand"), __jsx("ul", null, variables["c" /* shop */].BRANDS.map((item, index) => __jsx("li", {
    key: index
  }, __jsx("label", {
    htmlFor: "b-" + item
  }, __jsx("input", {
    name: "brand-filter",
    type: "checkbox",
    id: "b-" + item,
    value: item,
    checked: filterData.brand === item,
    onChange: () => {
      if (filterData.brand === item) {
        dispatch(setFilterBrand(""));
      } else {
        dispatch(setFilterBrand(item));
      }
    }
  }), item))))), __jsx("div", {
    className: "shop-sidebar__section__item"
  }, __jsx("h5", null, "Price"), __jsx("ul", null, variables["c" /* shop */].PRICE_POINTS.map((item, index) => {
    let nextVal = variables["c" /* shop */].PRICE_POINTS[index + 1];

    if (index === variables["c" /* shop */].PRICE_POINTS.length - 1) {
      return;
    }

    return __jsx("li", {
      key: index
    }, __jsx("label", {
      htmlFor: `f${item}t${nextVal}`
    }, __jsx("input", {
      type: "checkbox",
      name: "price-filter",
      id: `f${item}t${nextVal}`,
      value: `f${item}t${nextVal}`,
      checked: filterData.priceRange.to === nextVal,
      onChange: () => {
        if (filterData.priceRange.to === nextVal) {
          dispatch(setFilterPriceRange({}));
        } else {
          dispatch(setFilterPriceRange({
            from: item,
            to: nextVal
          }));
        }
      }
    }), Object(utils["a" /* formatCurrency */])(item), " - ", Object(utils["a" /* formatCurrency */])(nextVal)));
  })))), __jsx("div", {
    className: "shop-sidebar__section"
  }, __jsx(link_default.a, {
    href: "" + "/shop/fullwidth-4col"
  }, __jsx("a", {
    className: "shop-sidebar__section__banner"
  }, __jsx("img", {
    src: "" + "/assets/images/shop/advertisment.png",
    alt: "ads"
  }))))));
}

/***/ }),

/***/ "JRj/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PrevArrow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NextArrow; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

const PrevArrow = (_ref) => {
  let {
    currentSlide,
    slideCount
  } = _ref,
      arrowProps = _objectWithoutProperties(_ref, ["currentSlide", "slideCount"]);

  return __jsx("a", _extends({}, arrowProps, {
    href: "#"
  }), __jsx("i", {
    className: "far fa-angle-left"
  }));
};
const NextArrow = (_ref2) => {
  let {
    currentSlide,
    slideCount
  } = _ref2,
      arrowProps = _objectWithoutProperties(_ref2, ["currentSlide", "slideCount"]);

  return __jsx("a", _extends({}, arrowProps, {
    href: "#"
  }), __jsx("i", {
    className: "far fa-angle-right"
  }));
};

/***/ }),

/***/ "K2gz":
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "Npp4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InstagramTwo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("O/hg");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function InstagramTwo() {
  const settings = {
    dots: false,
    arrows: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [{
      breakpoint: 1400,
      settings: {
        slidesToShow: 5
      }
    }, {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4
      }
    }, {
      breakpoint: 992,
      settings: {
        slidesToShow: 3
      }
    }, {
      breakpoint: 576,
      settings: {
        slidesToShow: 2
      }
    }]
  };
  return __jsx("div", {
    className: "instagram-two"
  }, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_1___default.a, settings, Array.from(Array(6), (e, i) => {
    return __jsx("a", {
      key: i,
      href: "https://www.instagram.com/",
      className: "slider-item"
    }, __jsx("img", {
      src: "" + `/assets/images/instagram/InstagramTwo/${i + 1}.png`,
      alt: "Instagram image"
    }));
  })));
}

/***/ }),

/***/ "O/hg":
/***/ (function(module, exports) {

module.exports = require("react-slick");

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "P7bw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShopHeader; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Control_Select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("lmm/");
/* harmony import */ var _common_variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("J+Fc");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function ShopHeader({
  curentView,
  getCurrentView,
  getCurrentSort
}) {
  const {
    0: view,
    1: setView
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(curentView ? curentView : _common_variables__WEBPACK_IMPORTED_MODULE_2__[/* shop */ "c"].DEFAULT_VIEW);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    getCurrentView && getCurrentView(view);
  }, [view]);
  return __jsx("div", {
    className: "shop-header"
  }, __jsx("div", {
    className: "shop-header__view"
  }, __jsx("div", {
    className: "shop-header__view__icon"
  }, __jsx("a", {
    href: "" + "#",
    className: view === "grid" ? "active" : "",
    onClick: e => {
      e.preventDefault();
      setView("grid");
    }
  }, __jsx("i", {
    className: "fas fa-th"
  })), __jsx("a", {
    href: "" + "#",
    className: view === "list" ? "active" : "",
    onClick: e => {
      e.preventDefault();
      setView("list");
    }
  }, __jsx("i", {
    className: "fas fa-bars"
  }))), view === "grid" && __jsx("h5", {
    className: "shop-header__page"
  }, "Shop Fullwidth 4 Columns")), __jsx(_Control_Select__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    options: _common_variables__WEBPACK_IMPORTED_MODULE_2__[/* shop */ "c"].SORT_TYPES,
    getValue: getCurrentSort
  }));
}

/***/ }),

/***/ "PmzM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* harmony default export */ __webpack_exports__["a"] = (function (WrappedComponent) {
  return function (props) {
    const headerRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
    const {
      0: scroll,
      1: setScroll
    } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
    const {
      0: isHeaderFixed,
      1: setIsHeaderFixed
    } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
      if (scroll >= headerRef.current.offsetHeight) {
        setIsHeaderFixed(true);
      } else {
        setIsHeaderFixed(false);
      }
    }, [scroll]);

    function handleScroll() {
      setScroll(window.scrollY);
    }

    return __jsx("div", {
      ref: headerRef,
      className: `header ${isHeaderFixed ? "fixed" : ""}`
    }, __jsx(WrappedComponent, props));
  };
});

/***/ }),

/***/ "Pz/r":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Quantity; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("J+Fc");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Quantity({
  className,
  defaultQuantity,
  getQuantity,
  onDecrease,
  onIncrease,
  maxValue
}) {
  const {
    0: quantity,
    1: setQuantity
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(defaultQuantity || _common_variables__WEBPACK_IMPORTED_MODULE_2__[/* product */ "b"].DEFAULT_QUANTITY);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    getQuantity && getQuantity(quantity);
  }, [quantity]);
  return __jsx("div", {
    className: `quantity-controller ${classnames__WEBPACK_IMPORTED_MODULE_1___default()(className)}`
  }, __jsx("div", {
    className: "quantity-controller__btn -descrease",
    onClick: () => {
      if (quantity < 2) {
        return;
      }

      setQuantity(quantity - 1);
      onDecrease && onDecrease();
    }
  }, "-"), __jsx("h5", {
    className: "quantity-controller__number"
  }, quantity), __jsx("div", {
    className: "quantity-controller__btn -increase",
    onClick: () => {
      if (quantity >= maxValue) {
        return;
      }

      setQuantity(quantity + 1);
      onIncrease && onIncrease();
    }
  }, "+"));
}

/***/ }),

/***/ "S3md":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "TVAx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return checkProductInCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getAvaiableQuantityInCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return checkProductInWishList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return calculateTotalPrice; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("kLkQ");

const checkProductInCart = (cartArr, pid, color) => {
  if (cartArr || cartArr.length > 0) {
    if (color && color !== "") {
      return cartArr.find(item => item.id === pid && item.selectedColor && item.selectedColor === color);
    }

    return cartArr.find(item => item.id === pid);
  }
};
const getAvaiableQuantityInCart = (cartArr, pid, quantity) => {
  let arr = cartArr.filter(item => item.id === pid);

  if (cartArr || cartArr.length > 0) {
    if (arr.length > 0) {
      let result = arr.length > 0 && arr.reduce((total, num) => total + num.cartQuantity, 0);
      return result && quantity - result;
    } else {
      return quantity;
    }
  }

  return quantity;
};
const checkProductInWishList = (wishlistArr, productId) => {
  return wishlistArr.find(item => item.id === productId);
};
const calculateTotalPrice = (cartArr, isformatCurrency) => {
  let total = 0;
  cartArr.forEach(item => total += item.price * item.cartQuantity);
  return isformatCurrency ? Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* formatCurrency */ "a"])(total) : total;
};

/***/ }),

/***/ "TqRt":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "UQuY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ ProductDetailInfo; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "react-toastify"
var external_react_toastify_ = __webpack_require__("oAEb");

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: ./src/common/utils.js
var utils = __webpack_require__("kLkQ");

// EXTERNAL MODULE: ./src/redux/actions/cartActions.js
var cartActions = __webpack_require__("wQtD");

// EXTERNAL MODULE: ./src/redux/actions/wishlistActions.js
var wishlistActions = __webpack_require__("8hBj");

// EXTERNAL MODULE: external "react-tooltip"
var external_react_tooltip_ = __webpack_require__("E8iq");
var external_react_tooltip_default = /*#__PURE__*/__webpack_require__.n(external_react_tooltip_);

// EXTERNAL MODULE: ./src/components/Control/Quantity.js
var Quantity = __webpack_require__("Pz/r");

// EXTERNAL MODULE: ./src/components/Control/AddToCart.js
var AddToCart = __webpack_require__("Cs3t");

// EXTERNAL MODULE: ./src/components/Control/Button.js
var Button = __webpack_require__("6EID");

// EXTERNAL MODULE: ./src/common/shopUtils.js
var shopUtils = __webpack_require__("TVAx");

// CONCATENATED MODULE: ./src/components/ProductDetail/Elements/ProductDetailController.js

var __jsx = external_react_default.a.createElement;








function ProductDetailController({
  data,
  getQuantity,
  onAddToCart,
  onAddToWishList,
  color
}) {
  const {
    0: quantity,
    1: setQuantity
  } = Object(external_react_["useState"])();
  const cartState = Object(external_react_redux_["useSelector"])(state => state.cartReducer);
  const wishlistState = Object(external_react_redux_["useSelector"])(state => state.wishlistReducer);
  const avaiableProduct = Object(shopUtils["d" /* getAvaiableQuantityInCart */])(cartState, data.id, data.quantity);
  return __jsx("div", {
    className: "product-detail__controler"
  }, __jsx(Quantity["a" /* default */], {
    className: "-border -round",
    getQuantity: q => {
      setQuantity(q), getQuantity(q);
    },
    maxValue: avaiableProduct
  }), __jsx(AddToCart["a" /* default */], {
    className: `-dark`,
    className: `-dark ${external_classnames_default()({
      "-disable": quantity > avaiableProduct || data.quantity < 1
    })}`,
    onClick: onAddToCart
  }), __jsx("div", {
    className: "product-detail__controler__actions"
  }, __jsx("div", {
    "data-tip": true,
    "data-for": "add-wishlist"
  }, __jsx(Button["a" /* default */], {
    action: "#",
    height: "3.85em",
    width: "3.85em",
    className: `-round ${external_classnames_default()({
      active: Object(shopUtils["c" /* checkProductInWishList */])(wishlistState, data.id)
    })}`,
    onClick: onAddToWishList,
    color: "white",
    content: __jsx("i", {
      className: "fas fa-heart"
    })
  })), __jsx(external_react_tooltip_default.a, {
    id: "add-wishlist",
    type: "dark",
    effect: "solid"
  }, __jsx("span", null, "Add to wishlist"))));
}
// EXTERNAL MODULE: external "react-tabs"
var external_react_tabs_ = __webpack_require__("65ip");

// EXTERNAL MODULE: external "react-hook-form"
var external_react_hook_form_ = __webpack_require__("BTiB");

// EXTERNAL MODULE: ./src/components/Other/Rate.js
var Rate = __webpack_require__("GXNE");

// CONCATENATED MODULE: ./src/components/Control/Review.js
var Review_jsx = external_react_default.a.createElement;



function Review(props) {
  const {
    avatar,
    name,
    publicDate,
    rate,
    children
  } = props;
  return Review_jsx("div", {
    className: "review"
  }, Review_jsx("div", {
    className: "review__header"
  }, Review_jsx("div", {
    className: "review__header__avatar"
  }, Review_jsx("img", {
    src: "https://i1.wp.com/metro.co.uk/wp-content/uploads/2020/03/GettyImages-1211127989.jpg?quality=90&strip=all&zoom=1&resize=644%2C416&ssl=1",
    alt: "Reviewer avatar"
  })), Review_jsx("div", {
    className: "review__header__info"
  }, Review_jsx("h5", null, name), Review_jsx("p", null, publicDate)), Review_jsx("div", {
    className: "review__header__rate"
  }, Review_jsx(Rate["a" /* default */], {
    currentRate: rate
  }))), Review_jsx("p", {
    className: "review__content"
  }, children), Review_jsx(link_default.a, {
    href: "#"
  }, Review_jsx("a", {
    className: "review__report"
  }, "Report as Inappropriate")));
}
// CONCATENATED MODULE: ./src/components/ProductDetail/Elements/ProductDetailInfoTab.js

var ProductDetailInfoTab_jsx = external_react_default.a.createElement;



function ProductDetailInfoTab({
  onReviewSubmit
}) {
  const {
    register,
    handleSubmit,
    errors
  } = Object(external_react_hook_form_["useForm"])();
  return ProductDetailInfoTab_jsx("div", {
    className: "product-detail__tab"
  }, ProductDetailInfoTab_jsx(external_react_tabs_["Tabs"], {
    className: "product-detail__tab__content"
  }, ProductDetailInfoTab_jsx(external_react_tabs_["TabList"], {
    className: "tab__content__header"
  }, ProductDetailInfoTab_jsx(external_react_tabs_["Tab"], null, "Description"), ProductDetailInfoTab_jsx(external_react_tabs_["Tab"], null, "Shipping & Returns"), ProductDetailInfoTab_jsx(external_react_tabs_["Tab"], null, "Reviews ( 03 )")), ProductDetailInfoTab_jsx(external_react_tabs_["TabPanel"], {
    className: "tab__content__item -description"
  }, ProductDetailInfoTab_jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.")), ProductDetailInfoTab_jsx(external_react_tabs_["TabPanel"], {
    className: "tab__content__item -ship"
  }, ProductDetailInfoTab_jsx("h5", null, ProductDetailInfoTab_jsx("span", null, "Ship to "), "New York"), ProductDetailInfoTab_jsx("ul", null, ProductDetailInfoTab_jsx("li", null, "Standard Shipping on order over 0kg - 5kg. ", ProductDetailInfoTab_jsx("span", null, "+10.00")), ProductDetailInfoTab_jsx("li", null, "Heavy Goods Shipping on oder over 5kg-10kg . ", ProductDetailInfoTab_jsx("span", null, "+20.00"))), ProductDetailInfoTab_jsx("h5", null, "Delivery & returns"), ProductDetailInfoTab_jsx("p", null, "We diliver to over 100 countries around the word. For full details of the delivery options we offer, please view our Delivery information.")), ProductDetailInfoTab_jsx(external_react_tabs_["TabPanel"], {
    className: "tab__content__item -review"
  }, ProductDetailInfoTab_jsx(Review, {
    avatar: "https://i1.wp.com/metro.co.uk/wp-content/uploads/2020/03/GettyImages-1211127989.jpg?quality=90&strip=all&zoom=1&resize=644%2C416&ssl=1",
    name: "Zachary Wade",
    publicDate: "Mar 17, 2020",
    rate: 4
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."), ProductDetailInfoTab_jsx("form", {
    onSubmit: handleSubmit(onReviewSubmit)
  }, ProductDetailInfoTab_jsx("h5", null, "Write a review"), ProductDetailInfoTab_jsx("div", {
    className: "row"
  }, ProductDetailInfoTab_jsx("div", {
    className: "col-12 col-md-6"
  }, ProductDetailInfoTab_jsx("div", {
    className: "input-validator"
  }, ProductDetailInfoTab_jsx("input", {
    type: "text",
    name: "name",
    placeholder: "Name",
    ref: register({
      required: true
    })
  }), errors.name && ProductDetailInfoTab_jsx("span", {
    className: "input-error"
  }, "Please provide a name"))), ProductDetailInfoTab_jsx("div", {
    className: "col-12 col-md-6"
  }, ProductDetailInfoTab_jsx("div", {
    className: "input-validator"
  }, ProductDetailInfoTab_jsx("input", {
    type: "text",
    name: "email",
    placeholder: "Email",
    ref: register({
      required: true
    })
  }), errors.email && ProductDetailInfoTab_jsx("span", {
    className: "input-error"
  }, "Please provide an email"))), ProductDetailInfoTab_jsx("div", {
    className: "col-12"
  }, ProductDetailInfoTab_jsx("div", {
    className: "input-validator"
  }, ProductDetailInfoTab_jsx("textarea", {
    name: "message",
    placeholder: "Message",
    rows: "5",
    ref: register
  })), errors.message && ProductDetailInfoTab_jsx("span", {
    className: "input-error"
  })), ProductDetailInfoTab_jsx("div", {
    className: "col-12"
  }, ProductDetailInfoTab_jsx("button", {
    className: "btn -dark"
  }, "Write a review")))))));
}
// CONCATENATED MODULE: ./src/components/ProductDetail/Elements/ProductDetailInfo.js

var ProductDetailInfo_jsx = external_react_default.a.createElement;












function ProductDetailInfo({
  data,
  onReviewSubmit,
  hideTab
}) {
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const wishlistState = Object(external_react_redux_["useSelector"])(state => state.wishlistReducer);
  const {
    0: quantity,
    1: setQuantity
  } = Object(external_react_["useState"])();
  const {
    0: otherColor,
    1: setOtherColor
  } = Object(external_react_["useState"])();

  const getQuantity = q => {
    setQuantity(q);
  };

  const onAddToCart = e => {
    e.preventDefault();
    dispatch(Object(cartActions["a" /* addToCart */])(data, quantity, otherColor));
    external_react_toastify_["toast"].success("Product added to cart");
  };

  const onAddToWishList = e => {
    e.preventDefault();
    let product = Object(shopUtils["c" /* checkProductInWishList */])(wishlistState, data.id);
    dispatch(Object(wishlistActions["a" /* addToWishlist */])(data));
    external_react_toastify_["toast"].dismiss();

    if (!product) {
      return external_react_toastify_["toast"].success("Product added to wishlist !");
    } else {
      return external_react_toastify_["toast"].error("Product removed from wishlist !");
    }
  };

  return ProductDetailInfo_jsx("div", {
    className: "product-detail__content"
  }, ProductDetailInfo_jsx("div", {
    className: "product-detail__content__header"
  }, ProductDetailInfo_jsx("h5", null, data.category), ProductDetailInfo_jsx("h2", null, data.name), ProductDetailInfo_jsx("div", {
    className: "product-detail__content__header__comment-block"
  }, ProductDetailInfo_jsx(Rate["a" /* default */], {
    currentRate: data.rate
  }), ProductDetailInfo_jsx("p", null, "03 Reviews"), ProductDetailInfo_jsx(link_default.a, {
    href: process.env.PUBLUC_URL + "#"
  }, ProductDetailInfo_jsx("a", null, "Write a reviews"))), ProductDetailInfo_jsx("h3", null, data.discount ? Object(utils["a" /* formatCurrency */])(data.discount) : Object(utils["a" /* formatCurrency */])(data.price), data.discount && ProductDetailInfo_jsx("span", null, Object(utils["a" /* formatCurrency */])(data.price)))), ProductDetailInfo_jsx("div", {
    className: "divider"
  }), ProductDetailInfo_jsx("div", {
    className: "product-detail__content__footer"
  }, ProductDetailInfo_jsx("ul", null, ProductDetailInfo_jsx("li", null, "Brand: ", ProductDetailInfo_jsx("span", null, data.brand)), ProductDetailInfo_jsx("li", null, "Product code: ", ProductDetailInfo_jsx("span", null, data.code)), ProductDetailInfo_jsx("li", null, "Reward point: ", ProductDetailInfo_jsx("span", null, data.point)), ProductDetailInfo_jsx("li", null, "Availability:", data.quantity > 0 ? ProductDetailInfo_jsx("span", {
    className: "in-stock"
  }, " In Stock") : ProductDetailInfo_jsx("span", {
    className: "out-stock"
  }, " Out Stock"))), data.variation && ProductDetailInfo_jsx("div", {
    className: "product-detail__colors"
  }, ProductDetailInfo_jsx("span", null, "Color:"), data.variation.map((color, index) => ProductDetailInfo_jsx("div", {
    key: index,
    className: `product-detail__colors__item ${external_classnames_default()({
      active: otherColor === color.color
    })}`,
    style: {
      backgroundColor: color.colorCode
    },
    onClick: () => setOtherColor(color.color)
  }))), ProductDetailInfo_jsx(ProductDetailController, {
    data: data,
    getQuantity: getQuantity,
    onAddToCart: onAddToCart,
    onAddToWishList: onAddToWishList,
    color: otherColor
  })), !hideTab && ProductDetailInfo_jsx(external_react_default.a.Fragment, null, ProductDetailInfo_jsx("div", {
    className: "divider"
  }), ProductDetailInfo_jsx("div", {
    className: "product-detail__content__tab"
  }, ProductDetailInfo_jsx(ProductDetailInfoTab, {
    onReviewSubmit: onReviewSubmit
  }))));
}

/***/ }),

/***/ "VOjt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Navigator; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_header_navigation_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("H3fK");
var _data_header_navigation_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t("H3fK", 1);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Navigator({
  disableSubmenu,
  className
}) {
  function renderMenu() {
    return _data_header_navigation_json__WEBPACK_IMPORTED_MODULE_3__.map((item, index) => {
      if (item.title === "Homes") {
        return __jsx("li", {
          className: "relative",
          key: index
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
          href: "" + item.to
        }, __jsx("a", null, item.title, __jsx("span", {
          className: "dropable-icon"
        }, __jsx("i", {
          className: "fas fa-angle-down"
        })))), __jsx("ul", {
          className: "dropdown-menu"
        }, item.subMenu.map((i, index) => __jsx("li", {
          key: index
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
          href: "#"
        }, __jsx("a", null, i.title))))));
      }

      if (item.title === "Services") {
        return __jsx("li", {
          className: "relative",
          key: index
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
          href: "#"
        }, __jsx("a", null, item.title, __jsx("span", {
          className: "dropable-icon"
        }, __jsx("i", {
          className: "fas fa-angle-down"
        })))), __jsx("ul", {
          className: "dropdown-menu"
        }, item.subMenu.map((i, index) => __jsx("li", {
          key: index
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
          href: "#"
        }, __jsx("a", null, i.title))))));
      }

      return __jsx("li", {
        key: index
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "#"
      }, __jsx("a", null, item.title)));
    });
  }

  if (disableSubmenu) {
    return __jsx("div", {
      className: `navigator -off-submenu ${classnames__WEBPACK_IMPORTED_MODULE_2___default()(className)}`
    }, __jsx("ul", null, _data_header_navigation_json__WEBPACK_IMPORTED_MODULE_3__.map((item, index) => __jsx("li", {
      key: index
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, item.title))))));
  }

  return __jsx("div", {
    className: `navigator ${classnames__WEBPACK_IMPORTED_MODULE_2___default()(className)}`
  }, __jsx("ul", null, renderMenu()));
}

/***/ }),

/***/ "X24+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

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

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "bMKh":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Modal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("CSOn");
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_transition_group__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_ClientOnlyPortal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("A2gu");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Modal(props) {
  const {
    showModal,
    setShowModal,
    height,
    width
  } = props;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_common_ClientOnlyPortal__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    selector: "#modal"
  }, __jsx(react_transition_group__WEBPACK_IMPORTED_MODULE_1__["CSSTransition"], {
    in: showModal,
    unmountOnExit: true,
    timeout: 200,
    classNames: "cart-sidebar"
  }, __jsx("div", {
    className: "modal",
    style: {
      height: height,
      width: width
    }
  }, __jsx("div", {
    className: "modal__wrapper"
  }, props.children)))), showModal && __jsx(_common_ClientOnlyPortal__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    selector: "#overlay"
  }, __jsx("div", {
    className: "overlay",
    onClick: e => {
      setShowModal(false);
    }
  })));
}

/***/ }),

/***/ "brf1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ MenuFunctionIcons; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: external "react-transition-group"
var external_react_transition_group_ = __webpack_require__("CSOn");

// EXTERNAL MODULE: external "react-hook-form"
var external_react_hook_form_ = __webpack_require__("BTiB");

// CONCATENATED MODULE: ./src/common/ElementOutsideClick.js

function outsideClickHandle(ref, cb) {
  Object(external_react_["useEffect"])(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        cb();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}
// CONCATENATED MODULE: ./src/components/Header/Elements/SearchBox.js
var __jsx = external_react_default.a.createElement;




function SearchBox({
  showSearch,
  setShowSearch
}) {
  const {
    register,
    handleSubmit
  } = Object(external_react_hook_form_["useForm"])();
  const wrapperRef = Object(external_react_["useRef"])(null);
  outsideClickHandle(wrapperRef, () => {
    setShowSearch(false);
  });

  function onSubmit(data) {
    console.log(data);
  }

  return __jsx(external_react_transition_group_["CSSTransition"], {
    in: showSearch,
    unmountOnExit: true,
    timeout: 200,
    classNames: "search-box"
  }, __jsx("div", {
    ref: wrapperRef,
    className: "search-box"
  }, __jsx("form", {
    onSubmit: handleSubmit(onSubmit)
  }, __jsx("input", {
    type: "text",
    placeholder: "What are you looking for?",
    name: "search",
    ref: register
  }), __jsx("button", null, __jsx("img", {
    src: "/assets/images/header/search-icon.png",
    alt: "Search icon"
  })))));
}
// EXTERNAL MODULE: ./src/common/utils.js
var utils = __webpack_require__("kLkQ");

// EXTERNAL MODULE: ./src/redux/actions/cartActions.js
var cartActions = __webpack_require__("wQtD");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "react-toastify"
var external_react_toastify_ = __webpack_require__("oAEb");

// CONCATENATED MODULE: ./src/components/Header/Elements/CartItem.js

var CartItem_jsx = external_react_default.a.createElement;






function CartItem(props) {
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const {
    image,
    name,
    price,
    quantity,
    cartId,
    slug
  } = props;

  const removeProductHandle = e => {
    e.preventDefault();
    dispatch(Object(cartActions["e" /* removeFromCart */])(cartId));
    external_react_toastify_["toast"].error("Product removed from card");
  };

  return CartItem_jsx("div", {
    className: "cart-item"
  }, CartItem_jsx("div", {
    className: "cart-item__image"
  }, CartItem_jsx("img", {
    src: "" + image,
    alt: "Product image"
  })), CartItem_jsx("div", {
    className: "cart-item__info"
  }, CartItem_jsx(link_default.a, {
    href: "#",
    as: "" + "/shop/product/" + slug
  }, CartItem_jsx("a", null, name)), CartItem_jsx("h5", null, Object(utils["a" /* formatCurrency */])(price)), CartItem_jsx("p", null, "Quantity: ", CartItem_jsx("span", null, quantity))), CartItem_jsx("a", {
    className: "cart-item__remove",
    href: "#",
    onClick: removeProductHandle
  }, CartItem_jsx("i", {
    className: "fal fa-times"
  })));
}

/* harmony default export */ var Elements_CartItem = (CartItem);
// EXTERNAL MODULE: ./src/common/ClientOnlyPortal.js
var ClientOnlyPortal = __webpack_require__("A2gu");

// EXTERNAL MODULE: ./src/components/Control/Button.js
var Button = __webpack_require__("6EID");

// EXTERNAL MODULE: ./src/common/shopUtils.js
var shopUtils = __webpack_require__("TVAx");

// CONCATENATED MODULE: ./src/components/Header/Elements/CartItemsSidebar.js
var CartItemsSidebar_jsx = external_react_default.a.createElement;








function CartItemsSidebar({
  showCart,
  setShowCart
}) {
  const cartState = Object(external_react_redux_["useSelector"])(state => state.cartReducer);
  return CartItemsSidebar_jsx(external_react_default.a.Fragment, null, CartItemsSidebar_jsx(ClientOnlyPortal["a" /* default */], {
    selector: "#cart-sidebar"
  }, CartItemsSidebar_jsx(external_react_transition_group_["CSSTransition"], {
    in: showCart,
    unmountOnExit: true,
    timeout: 200,
    classNames: "cart-sidebar"
  }, CartItemsSidebar_jsx("div", {
    className: "cart-items__wrapper"
  }, CartItemsSidebar_jsx("h2", null, "Shopping cart"), cartState.length === 0 ? CartItemsSidebar_jsx("h3", {
    className: "empty-noti"
  }, "No product in cart") : CartItemsSidebar_jsx(external_react_default.a.Fragment, null, cartState.length !== 0 && cartState.map(item => CartItemsSidebar_jsx(Elements_CartItem, {
    key: item.cartId,
    image: item.thumbImage[0],
    name: item.name,
    price: item.price,
    quantity: item.cartQuantity,
    cartId: item.cartId,
    slug: item.slug
  })), CartItemsSidebar_jsx("div", {
    className: "cart-items__total"
  }, CartItemsSidebar_jsx("div", {
    className: "cart-items__total__price"
  }, CartItemsSidebar_jsx("h5", null, "Total"), CartItemsSidebar_jsx("span", null, Object(shopUtils["a" /* calculateTotalPrice */])(cartState, true))), CartItemsSidebar_jsx("div", {
    className: "cart-items__total__buttons"
  }, CartItemsSidebar_jsx(Button["a" /* default */], {
    width: "100%",
    action: "" + "/shop/cart",
    color: "dark",
    content: "View cart"
  }), CartItemsSidebar_jsx(Button["a" /* default */], {
    width: "100%",
    action: "" + "/shop/checkout",
    color: "red",
    content: "Checkout"
  }))))))), showCart && CartItemsSidebar_jsx(ClientOnlyPortal["a" /* default */], {
    selector: "#overlay"
  }, CartItemsSidebar_jsx("div", {
    className: "overlay",
    onClick: () => setShowCart(false)
  })));
}

/* harmony default export */ var Elements_CartItemsSidebar = (CartItemsSidebar);
// EXTERNAL MODULE: ./src/data/header/navigation.json
var navigation = __webpack_require__("H3fK");

// CONCATENATED MODULE: ./src/components/Header/Elements/NavigatorMobile.js

var NavigatorMobile_jsx = external_react_default.a.createElement;




function Navigator() {
  const {
    0: dropdownItem,
    1: setDropdownItem
  } = Object(external_react_["useState"])();

  function renderMenu() {
    return navigation.map((item, index) => {
      if (item.title === "Home") {
        return NavigatorMobile_jsx("li", {
          className: "relative",
          key: index
        }, NavigatorMobile_jsx(link_default.a, {
          href: "#"
        }, NavigatorMobile_jsx("a", null, item.title, NavigatorMobile_jsx("span", {
          className: "dropable-icon"
        }, NavigatorMobile_jsx("i", {
          className: `fas ${dropdownItem === "home" ? "fa-angle-up" : "fa-angle-down"}`
        })))), NavigatorMobile_jsx(external_react_transition_group_["CSSTransition"], {
          in: dropdownItem === "home",
          unmountOnExit: true,
          timeout: 200,
          classNames: "dropdown-menu-mobile"
        }, NavigatorMobile_jsx("ul", {
          className: "dropdown-menu"
        }, item.subMenu.map((i, index) => NavigatorMobile_jsx("li", {
          key: index
        }, NavigatorMobile_jsx(link_default.a, {
          href: "#"
        }, NavigatorMobile_jsx("a", null, i.title)))))));
      }

      if (item.title === "Shop") {
        return NavigatorMobile_jsx("li", {
          key: index
        }, NavigatorMobile_jsx(link_default.a, {
          href: "#"
        }, NavigatorMobile_jsx("a", null, item.title, NavigatorMobile_jsx("span", {
          className: "dropable-icon"
        }, NavigatorMobile_jsx("i", {
          className: `fas ${dropdownItem === "shop" ? "fa-angle-up" : "fa-angle-down"}`
        })))), NavigatorMobile_jsx(external_react_transition_group_["CSSTransition"], {
          in: dropdownItem === "shop",
          unmountOnExit: true,
          timeout: 200,
          classNames: "dropdown-menu-mobile"
        }, NavigatorMobile_jsx("ul", {
          className: "dropdown-menu"
        }, NavigatorMobile_jsx("ul", {
          className: "dropdown-menu__col"
        }, item.subMenu.slice(0, 4).map((i, index) => NavigatorMobile_jsx("li", {
          key: index
        }, NavigatorMobile_jsx(link_default.a, {
          href: "#"
        }, NavigatorMobile_jsx("a", null, i.title))))), NavigatorMobile_jsx("ul", {
          className: "dropdown-menu__col"
        }, item.subMenu.slice(4, 8).map((i, index) => NavigatorMobile_jsx("li", {
          key: index
        }, NavigatorMobile_jsx(link_default.a, {
          href: "#"
        }, NavigatorMobile_jsx("a", null, i.title))))), NavigatorMobile_jsx("ul", {
          className: "dropdown-menu__col"
        }, item.subMenu.slice(8).map((i, index) => NavigatorMobile_jsx("li", {
          key: index
        }, NavigatorMobile_jsx(link_default.a, {
          href: "#"
        }, NavigatorMobile_jsx("a", null, i.title))))), NavigatorMobile_jsx("ul", {
          className: "dropdown-menu__col -banner"
        }, NavigatorMobile_jsx(link_default.a, {
          href: "#"
        }, NavigatorMobile_jsx("a", null, NavigatorMobile_jsx("img", {
          src: "/assets/images/header/dropdown-menu-banner.png",
          alt: "New product banner"
        })))))));
      }

      return NavigatorMobile_jsx("li", {
        key: index
      }, NavigatorMobile_jsx(link_default.a, {
        href: "#"
      }, NavigatorMobile_jsx("a", null, item.title)));
    });
  }

  return NavigatorMobile_jsx("div", {
    className: "navigator-mobile"
  }, NavigatorMobile_jsx("ul", null, renderMenu()));
}
// EXTERNAL MODULE: ./src/components/Other/SocialIcons.js
var SocialIcons = __webpack_require__("DS7o");

// EXTERNAL MODULE: ./src/components/Control/Select.js
var Select = __webpack_require__("lmm/");

// CONCATENATED MODULE: ./src/components/Header/Elements/MobileNavSidebar.js
var MobileNavSidebar_jsx = external_react_default.a.createElement;






function MobileNavSidebar({
  showMobileNav,
  setShowMobileNav
}) {
  const {
    0: searchInput,
    1: setSearchInput
  } = Object(external_react_["useState"])("");
  const {
    0: currency,
    1: setCurrency
  } = Object(external_react_["useState"])("USD");
  const {
    0: language,
    1: setLanguage
  } = Object(external_react_["useState"])("ENG");
  return MobileNavSidebar_jsx(external_react_default.a.Fragment, null, MobileNavSidebar_jsx(ClientOnlyPortal["a" /* default */], {
    selector: "#nav-sidebar"
  }, MobileNavSidebar_jsx(external_react_transition_group_["CSSTransition"], {
    in: showMobileNav,
    unmountOnExit: true,
    timeout: 200,
    classNames: "cart-sidebar"
  }, MobileNavSidebar_jsx("div", {
    className: "navigation-sidebar"
  }, MobileNavSidebar_jsx("div", {
    className: "search-box"
  }, MobileNavSidebar_jsx("form", null, MobileNavSidebar_jsx("input", {
    type: "text",
    placeholder: "What are you looking for?",
    value: searchInput,
    onChange: e => setSearchInput(e.target.value)
  }), MobileNavSidebar_jsx("button", null, MobileNavSidebar_jsx("img", {
    src: "/assets/images/header/search-icon.png",
    alt: "Search icon"
  })))), MobileNavSidebar_jsx(Navigator, null), MobileNavSidebar_jsx("div", {
    className: "navigation-sidebar__footer"
  }, MobileNavSidebar_jsx(Select["a" /* default */], {
    options: ["INR", "VND", "YEN"],
    getValue: val => setCurrency(val),
    className: "-borderless"
  }), MobileNavSidebar_jsx(Select["a" /* default */], {
    options: ["ENG", "VI", "JP"],
    getValue: val => setLanguage(val),
    className: "-borderless"
  }), MobileNavSidebar_jsx("a", {
    className: "navigation-sidebar__footer__auth"
  }, "Login/Register"), MobileNavSidebar_jsx(SocialIcons["a" /* default */], null))))), showMobileNav && MobileNavSidebar_jsx(ClientOnlyPortal["a" /* default */], {
    selector: "#overlay"
  }, MobileNavSidebar_jsx("div", {
    className: "overlay",
    onClick: () => setShowMobileNav(false)
  })));
}
// CONCATENATED MODULE: ./src/components/Header/Elements/MenuFunctionIcons.js
var MenuFunctionIcons_jsx = external_react_default.a.createElement;








function MenuFunctionIcons(props) {
  const cartState = Object(external_react_redux_["useSelector"])(state => state.cartReducer);
  const hide = props.hide || "";
  const {
    0: showSearch,
    1: setShowSearch
  } = Object(external_react_["useState"])(false);
  const {
    0: showCart,
    1: setShowCart
  } = Object(external_react_["useState"])(false);
  const {
    0: showMobileNav,
    1: setShowMobileNav
  } = Object(external_react_["useState"])(false);

  function calcalateTotal(arr) {
    let total = 0;
    arr.forEach(item => total += item.price * item.cartQuantity);
    return total;
  }

  return MenuFunctionIcons_jsx(external_react_default.a.Fragment, null, MenuFunctionIcons_jsx("div", {
    className: `menu__wrapper__functions ${external_classnames_default()(props.className)}`
  }, !hide.includes("search") && MenuFunctionIcons_jsx("a", {
    href: "#",
    className: "menu-icon -search",
    onClick: e => {
      e.preventDefault();
      setShowSearch(true);
    },
    style: {
      marginRight: hide.includes("cart") && 0
    }
  }, MenuFunctionIcons_jsx("img", {
    src: props.white ? "" + "/assets/images/header/search-icon-white.png" : "" + "/assets/images/header/search-icon.png",
    alt: "Search icon"
  })), !hide.includes("cart") && MenuFunctionIcons_jsx(external_react_default.a.Fragment, null, MenuFunctionIcons_jsx(link_default.a, {
    href: "#"
  }, MenuFunctionIcons_jsx("a", {
    className: "menu-icon -wishlist"
  }, MenuFunctionIcons_jsx("img", {
    src: props.white ? "" + "/assets/images/header/wishlist-icon-white.png" : "" + "/assets/images/header/wishlist-icon.png",
    alt: "Wishlist icon"
  }))), MenuFunctionIcons_jsx("div", {
    className: "menu__cart"
  }, MenuFunctionIcons_jsx("a", {
    href: "#",
    className: "menu-icon -cart"
  }, MenuFunctionIcons_jsx("img", {
    src: props.white ? "" + "/assets/images/header/cart-icon-white.png" : "" + "/assets/images/header/cart-icon.png",
    alt: "Cart icon"
  }), MenuFunctionIcons_jsx("span", {
    className: "cart__quantity"
  }, cartState.length)), MenuFunctionIcons_jsx("h5", null, "Cart: ", MenuFunctionIcons_jsx("span", null, Object(utils["a" /* formatCurrency */])(calcalateTotal(cartState))))), MenuFunctionIcons_jsx("a", {
    href: "#",
    className: "menu-icon -navbar",
    onClick: e => {
      e.preventDefault();
      setShowMobileNav(!showMobileNav);
    }
  }, MenuFunctionIcons_jsx("div", {
    className: "bar"
  }), MenuFunctionIcons_jsx("div", {
    className: "bar"
  }), MenuFunctionIcons_jsx("div", {
    className: "bar"
  })))), MenuFunctionIcons_jsx(SearchBox, {
    showSearch: showSearch,
    setShowSearch: setShowSearch
  }), MenuFunctionIcons_jsx(Elements_CartItemsSidebar, {
    showCart: showCart,
    setShowCart: setShowCart
  }), MenuFunctionIcons_jsx(MobileNavSidebar, {
    showMobileNav: showMobileNav,
    setShowMobileNav: setShowMobileNav
  }));
}

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cDf5":
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

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _router = __webpack_require__("elyg");

var _router2 = __webpack_require__("nOHt");

let cachedObserver;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (cachedObserver) {
    return cachedObserver;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return cachedObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        cachedObserver.unobserve(entry.target);
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

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (false) {}
  }); // Join on an invalid URI character

  prefetched[href + '%' + as] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (false) {}

  const p = props.prefetch !== false;

  const [childElm, setChildElm] = _react.default.useState();

  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  _react.default.useEffect(() => {
    if (p && IntersectionObserver && childElm && childElm.tagName && (0, _router.isLocalURL)(href)) {
      // Join on an invalid URI character
      const isPrefetched = prefetched[href + '%' + as];

      if (!isPrefetched) {
        return listenToIntersections(childElm, () => {
          prefetch(router, href, as);
        });
      }
    }
  }, [p, childElm, href, as, router]);

  let {
    children,
    replace,
    shallow,
    scroll
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childProps = {
    ref: el => {
      if (el) setChildElm(el);

      if (child && typeof child === 'object' && child.ref) {
        if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
          child.ref.current = el;
        }
      }
    },
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll);
      }
    }
  };

  if (p) {
    childProps.onMouseEnter = e => {
      if (!(0, _router.isLocalURL)(href)) return;

      if (child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      }

      prefetch(router, href, as, {
        priority: true
      });
    };
  } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)((0, _router.addLocale)(as, router && router.locale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

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
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.markLoadingError = markLoadingError;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__("X24+");

var _denormalizePagePath = __webpack_require__("wkBG");

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _isDynamic = __webpack_require__("/jkW");

var _parseRelativeUrl = __webpack_require__("hS4m");

var _querystring = __webpack_require__("3WeD");

var _resolveRewrites = _interopRequireDefault(__webpack_require__("S3md"));

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

var _escapePathDelimiters = _interopRequireDefault(__webpack_require__("fcRV"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${path}` : path;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map(_escapePathDelimiters.default).join('/') : (0, _escapePathDelimiters.default)(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

const PAGE_LOAD_ERROR = Symbol('PAGE_LOAD_ERROR');

function markLoadingError(err) {
  return Object.defineProperty(err, PAGE_LOAD_ERROR, {});
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

const manualScrollRestoration =  false && false;

function fetchRetry(url, attempts) {
  return fetch(url, {
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
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      markLoadingError(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    initialStyleSheets,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale
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
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
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
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow
      }));
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        styleSheets: initialStyleSheets,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}

    if (false) {}
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
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }

    as = addLocale(as, this.locale, this.defaultLocale);
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as);
      return true;
    } // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to


    const pages = await this.pageLoader.getPageList();
    const {
      __rewrites: rewrites
    } = await this.pageLoader.promisedBuildManifest;
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed;
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs)) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options; // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (false) {}

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (false) {}

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props && props.pageProps && props.pageProps.__N_REDIRECT) {
        const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
        // client-navigation if it is falling back to hard navigation if
        // it's not

        if (destination.startsWith('/')) {
          const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);

          this._resolveHref(parsedHref, pages);

          if (pages.includes(parsedHref.pathname)) {
            return this.change('replaceState', destination, destination, options);
          }
        }

        window.location.href = destination;
        return new Promise(() => {});
      }

      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, addLocale(as, this.locale, this.defaultLocale), options);

      if (false) {}

      await this.set(route, pathname, query, cleanedAs, routeInfo).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if (PAGE_LOAD_ERROR in err || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      const {
        page: Component,
        styleSheets
      } = await this.fetchComponent('/_error');
      const routeInfo = {
        Component,
        styleSheets,
        err,
        error: err
      };

      try {
        routeInfo.props = await this.getInitialProps(Component, {
          err,
          pathname,
          query
        });
      } catch (gipErr) {
        console.error('Error in error page `getInitialProps`: ', gipErr);
        routeInfo.props = {};
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const cachedRouteInfo = this.components[route];

      if (shallow && cachedRouteInfo && this.route === route) {
        return cachedRouteInfo;
      }

      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG, this.locale, this.defaultLocale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
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

  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }

    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;
    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (false) {}

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader.prefetchData(url, asPath, this.locale, this.defaultLocale), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

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

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if ( true && this.sdc[cacheKey]) {
      return Promise.resolve(this.sdc[cacheKey]);
    }

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
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
      Router.events.emit('routeChangeError', buildCancellationError(), as);
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

/***/ "faye":
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "fcRV":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = escapePathDelimiters; // escape delimiters used by path-to-regexp

function escapePathDelimiters(segment) {
  return segment.replace(/[/#?]/g, char => encodeURIComponent(char));
}

/***/ }),

/***/ "fg+H":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShopProducts; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("/LDh");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function ShopProducts(props) {
  const {
    gridColClass,
    listColClass,
    fiveCol,
    view,
    data
  } = props;
  let arr = [5];

  for (var i = 0; i < Math.round(data.length / 5); i++) {
    arr.push(arr[i] + 6);
  }

  return __jsx("div", {
    className: "shop-products"
  }, view === "grid" ? __jsx("div", {
    className: "shop-products__grid"
  }, data && __jsx("div", {
    className: "row"
  }, data.map((item, index) => {
    if (fiveCol) {
      if (arr.includes(index)) {
        return __jsx("div", {
          key: index,
          className: "w-100"
        });
      }
    }

    return __jsx("div", {
      key: index,
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(gridColClass, {
        "five-col": fiveCol
      })
    }, __jsx(_Product__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
      data: item
    }));
  }))) : __jsx("div", {
    className: "shop-products__list"
  }, data && __jsx("div", {
    className: "row"
  }, data.map((item, index) => __jsx("div", {
    key: index,
    className: listColClass
  }, __jsx(_Product__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    type: view,
    data: item,
    type: "list"
  }))))));
}

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

var _formatUrl = __webpack_require__("6D7l");
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

function formatWithValidation(url) {
  if (false) {}

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

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

/***/ "hS4m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__("g/15");

var _querystring = __webpack_require__("3WeD");

const DUMMY_BASE = new URL(true ? 'http://n' : undefined);
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/

function parseRelativeUrl(url, base) {
  const resolvedBase = base ? new URL(base, DUMMY_BASE) : DUMMY_BASE;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin,
    protocol
  } = new URL(url, resolvedBase);

  if (origin !== DUMMY_BASE.origin || protocol !== 'http:' && protocol !== 'https:') {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(DUMMY_BASE.origin.length)
  };
}

/***/ }),

/***/ "iagI":
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":\"1\",\"category\":\"Featured\",\"name\":\"Shop 1\",\"rate\":4,\"price\":35,\"new\":true,\"brand\":\"Brand 1\",\"code\":\"PM 01\",\"point\":30,\"quantity\":0,\"variation\":[{\"color\":\"red\",\"colorCode\":\"#8B0000\",\"image\":\"/assets/images/product/3.png\"},{\"color\":\"blue\",\"colorCode\":\"#4169E1\",\"image\":\"/assets/images/product/4.png\"}],\"thumbImage\":[\"/assets/images/product/1.png\",\"/assets/images/product/2.png\"],\"images\":[\"/assets/images/product/1.png\",\"/assets/images/product/2.png\",\"/assets/images/product/3.png\",\"/assets/images/product/4.png\"],\"description\":\"\",\"slug\":\"brand-1\"},{\"id\":\"2\",\"category\":\"Featured\",\"name\":\"Shop 2\",\"rate\":5,\"price\":38,\"brand\":\"Brand -2\",\"code\":\"PM 02\",\"point\":28,\"quantity\":12,\"thumbImage\":[\"/assets/images/product/2.png\",\"/assets/images/product/3.png\"],\"images\":[\"/assets/images/product/2.png\",\"/assets/images/product/3.png\",\"/assets/images/product/4.png\",\"/assets/images/product/5.png\"],\"description\":\"\",\"slug\":\"brand-2\"},{\"id\":\"3\",\"category\":\"Featured\",\"name\":\"Shop 3\",\"rate\":4,\"price\":35,\"discount\":30,\"brand\":\"brand-1\",\"code\":\"PM 01\",\"point\":30,\"quantity\":3,\"variation\":[{\"color\":\"red\",\"colorCode\":\"#8B0000\",\"image\":\"/assets/images/product/5.png\"},{\"color\":\"blue\",\"colorCode\":\"#4169E1\",\"image\":\"/assets/images/product/6.png\"}],\"thumbImage\":[\"/assets/images/product/3.png\",\"/assets/images/product/4.png\"],\"images\":[\"/assets/images/product/3.png\",\"/assets/images/product/4.png\",\"/assets/images/product/5.png\",\"/assets/images/product/6.png\"],\"description\":\"\",\"slug\":\"leather-shopper-bag-3\"},{\"id\":\"4\",\"category\":\"Featured\",\"name\":\"Shop 4\",\"rate\":5,\"price\":38,\"brand\":\"brand-4\",\"code\":\"PM 02\",\"point\":28,\"quantity\":12,\"thumbImage\":[\"/assets/images/product/4.png\",\"/assets/images/product/5.png\"],\"images\":[\"/assets/images/product/4.png\",\"/assets/images/product/5.png\",\"/assets/images/product/6.png\",\"/assets/images/product/7.png\"],\"description\":\"\",\"slug\":\"brand-4\"},{\"id\":\"5\",\"category\":\"Featured\",\"name\":\"Shop 5\",\"rate\":5,\"price\":40,\"discount\":20,\"brand\":\"dolce\",\"code\":\"PM 02\",\"point\":28,\"quantity\":12,\"thumbImage\":[\"/assets/images/product/5.png\",\"/assets/images/product/6.png\"],\"images\":[\"/assets/images/product/5.png\",\"/assets/images/product/6.png\",\"/assets/images/product/7.png\",\"/assets/images/product/8.png\"],\"description\":\"\",\"slug\":\"penpoint-seamless-beauty-5\"},{\"id\":\"6\",\"category\":\"face\",\"name\":\"The Sneaky lips\",\"rate\":5,\"price\":38,\"brand\":\"kenzo\",\"code\":\"PM 02\",\"point\":28,\"quantity\":12,\"thumbImage\":[\"/assets/images/product/7.png\",\"/assets/images/product/8.png\"],\"images\":[\"/assets/images/product/6.png\",\"/assets/images/product/7.png\",\"/assets/images/product/8.png\",\"/assets/images/product/9.png\"],\"description\":\"\",\"slug\":\"the-sneaky-lips-6\"},{\"id\":\"7\",\"category\":\"face\",\"name\":\"White Facial Cream\",\"rate\":4,\"price\":38,\"brand\":\"dolce\",\"code\":\"PM 02\",\"point\":28,\"quantity\":12,\"thumbImage\":[\"/assets/images/product/8.png\",\"/assets/images/product/9.png\"],\"images\":[\"/assets/images/product/8.png\",\"/assets/images/product/9.png\",\"/assets/images/product/10.png\",\"/assets/images/product/11.png\"],\"description\":\"\",\"slug\":\"white-facial-cream-7\"},{\"id\":\"8\",\"category\":\"face\",\"name\":\"Orange Massage Cream\",\"rate\":4,\"price\":55,\"brand\":\"prada\",\"code\":\"PM 03\",\"point\":16,\"quantity\":6,\"thumbImage\":[\"/assets/images/product/9.png\",\"/assets/images/product/10.png\"],\"images\":[\"/assets/images/product/9.png\",\"/assets/images/product/10.png\",\"/assets/images/product/11.png\",\"/assets/images/product/12.png\"],\"description\":\"\",\"slug\":\"orange-massage-cream-8\"},{\"id\":\"9\",\"category\":\"lips\",\"name\":\"Valinta Fairness Massage Cream\",\"rate\":4,\"price\":27,\"brand\":\"h&m\",\"code\":\"PM 03\",\"point\":16,\"quantity\":6,\"thumbImage\":[\"/assets/images/product/10.png\",\"/assets/images/product/11.png\"],\"images\":[\"/assets/images/product/10.png\",\"/assets/images/product/11.png\",\"/assets/images/product/12.png\",\"/assets/images/product/13.png\"],\"description\":\"\",\"slug\":\"valinta-fairness-massage-cream-9\"},{\"id\":\"10\",\"category\":\"lips\",\"name\":\"Massage Cream Cucumber\",\"rate\":4,\"price\":16,\"brand\":\"dolce\",\"code\":\"PM 03\",\"point\":16,\"quantity\":6,\"thumbImage\":[\"/assets/images/product/11.png\",\"/assets/images/product/12.png\"],\"images\":[\"/assets/images/product/10.png\",\"/assets/images/product/11.png\",\"/assets/images/product/12.png\",\"/assets/images/product/13.png\"],\"description\":\"\",\"slug\":\"massage-cream-cucumber-10\"},{\"id\":\"11\",\"category\":\"lips\",\"name\":\"Matte Walnut & Bamboo Scrub\",\"rate\":4,\"price\":32,\"brand\":\"gucci\",\"code\":\"PM 03\",\"point\":16,\"quantity\":6,\"thumbImage\":[\"/assets/images/product/12.png\",\"/assets/images/product/13.png\"],\"images\":[\"/assets/images/product/12.png\",\"/assets/images/product/13.png\",\"/assets/images/product/14.png\",\"/assets/images/product/15.png\"],\"description\":\"\",\"slug\":\"matte-walnut-&-bamboo-scrub\"},{\"id\":\"12\",\"category\":\"lips\",\"name\":\"Castor Oil BP\",\"rate\":4,\"price\":24,\"brand\":\"h&m\",\"code\":\"PM 03\",\"point\":16,\"quantity\":6,\"thumbImage\":[\"/assets/images/product/13.png\",\"/assets/images/product/14.png\"],\"images\":[\"/assets/images/product/13.png\",\"/assets/images/product/14.png\",\"/assets/images/product/1.png\",\"/assets/images/product/2.png\"],\"description\":\"\",\"slug\":\"castor-oil-bp-12\"},{\"id\":\"13\",\"category\":\"set\",\"name\":\"Metallic Cap Cosmetic\",\"rate\":5,\"price\":44,\"brand\":\"kenzo\",\"code\":\"PM 03\",\"point\":17,\"quantity\":1,\"thumbImage\":[\"/assets/images/product/14.png\",\"/assets/images/product/15.png\"],\"images\":[\"/assets/images/product/14.png\",\"/assets/images/product/15.png\",\"/assets/images/product/16.png\",\"/assets/images/product/17.png\"],\"description\":\"\",\"slug\":\"metallic-cap-cosmetic-13\"},{\"id\":\"14\",\"category\":\"set\",\"name\":\"Photo Match Concealer\",\"rate\":5,\"price\":39,\"brand\":\"gucci\",\"code\":\"PM 03\",\"point\":17,\"quantity\":1,\"thumbImage\":[\"/assets/images/product/15.png\",\"/assets/images/product/16.png\"],\"images\":[\"/assets/images/product/15.png\",\"/assets/images/product/16.png\",\"/assets/images/product/17.png\",\"/assets/images/product/18.png\"],\"description\":\"\",\"slug\":\"photo-match-concealer-14\"},{\"id\":\"15\",\"category\":\"set\",\"name\":\"Matte Mousse Foundation\",\"rate\":5,\"price\":46,\"brand\":\"kenzo\",\"code\":\"PM 03\",\"point\":17,\"quantity\":1,\"thumbImage\":[\"/assets/images/product/16.png\",\"/assets/images/product/17.png\"],\"images\":[\"/assets/images/product/16.png\",\"/assets/images/product/17.png\",\"/assets/images/product/18.png\",\"/assets/images/product/19.png\"],\"description\":\"\",\"slug\":\"matte-mousse-foundation-15\"},{\"id\":\"16\",\"category\":\"set\",\"name\":\"White Sandal Beauty\",\"rate\":5,\"price\":67,\"brand\":\"h&m\",\"code\":\"PM 03\",\"point\":17,\"quantity\":1,\"thumbImage\":[\"/assets/images/product/17.png\",\"/assets/images/product/18.png\"],\"images\":[\"/assets/images/product/17.png\",\"/assets/images/product/18.png\",\"/assets/images/product/19.png\",\"/assets/images/product/20.png\"],\"description\":\"\",\"slug\":\"white-sandal-beauty-16\"}]");

/***/ }),

/***/ "kLkQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return formatCurrency; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return formatSingleNumber; });
/* unused harmony export convertToSlug */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return renderContainer; });
function formatCurrency(num, to = 2, currency = "USD") {
  let newNum = Number.parseFloat(num).toFixed(to);

  switch (currency) {
    case "USD":
      return `₹${newNum}`;

    default:
      return `${newNum}VND`;
  }
}
function formatSingleNumber(n) {
  return n > 9 ? "" + n : "0" + n;
}
function convertToSlug(title, id) {
  const renderId = id ? "-" + id : "";
  return title ? title.replace(/ /g, "-").toLowerCase() + renderId : "";
}
function renderContainer(type) {
  switch (type) {
    case "wide":
      return "container-full-half";

    case "full":
      return "container-full";

    default:
      return "container";
  }
}

/***/ }),

/***/ "lmm/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Select; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function Select(props) {
  const {
    options,
    className,
    getValue,
    id,
    placeholder
  } = props;
  return __jsx("select", {
    id: id,
    onChange: e => getValue(e.target.value),
    className: `customed-select ${classnames__WEBPACK_IMPORTED_MODULE_1___default()(className)}`
  }, placeholder && __jsx("option", {
    value: "",
    disabled: true,
    selected: true
  }, placeholder), options.map((opt, index) => {
    if (typeof opt === "string") {
      return __jsx("option", {
        value: opt,
        key: index
      }, opt);
    } else {
      return __jsx("option", {
        value: opt.value,
        key: index
      }, opt.name);
    }
  }));
}

/***/ }),

/***/ "m9Y6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return BreadcrumbItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Breadcrumb; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const BreadcrumbItem = ({
  name,
  current
}) => {
  return __jsx("li", {
    className: current && "active"
  }, name);
};
const Breadcrumb = ({
  title,
  children
}) => {
  return __jsx("div", {
    className: "breadcrumb"
  }, __jsx("div", {
    className: "container"
  }, __jsx("h2", null, title), __jsx("ul", null, children)));
};

/***/ }),

/***/ "mK+b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getProducts */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getProductBySlug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getProductBySort; });
/* unused harmony export getProductByPrice */
/* unused harmony export getProductByBrand */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getProductbyFilter; });
//get product
const getProducts = (products, category, type, limit) => {
  category = category && category.toLowerCase() === "all" ? "" : category;
  const finalProducts = category ? products.filter(product => product.category.toLowerCase() === category.toLowerCase()) : products;

  if (type && type === "new") {
    const newProducts = finalProducts.filter(product => product.new);
    return newProducts.slice(0, limit ? limit : newProducts.length);
  } else {
    return finalProducts && finalProducts.slice(0, limit ? limit : finalProducts.length);
  }
}; //get product by slug

const getProductBySlug = (products, slug) => {
  return slug ? products.find(product => product.slug.toLowerCase() === slug.toLowerCase()) : null;
}; //sort product

const getProductBySort = (products, type, limit) => {
  function sortWithCondition(arr, value, reverse = false) {
    let num = reverse ? -1 : 1;
    return products.slice(0, limit ? limit : products.length).sort((a, b) => {
      if (a[value] < b[value]) {
        return -1 * num;
      }

      if (a[value] > b[value]) {
        return 1 * num;
      }

      return 0;
    });
  }

  if (!type || type === "default") {
    return products;
  } else if (type === "az") {
    return sortWithCondition(products, "name");
  } else if (type === "za") {
    return sortWithCondition(products, "name", true);
  } else if (type === "lowToHigh") {
    return sortWithCondition(products, "price");
  } else if (type === "highToLow") {
    return sortWithCondition(products, "price", true);
  } else {
    return products.slice(0, limit ? limit : products.length);
  }
}; //get product by price

const getProductByPrice = (products, from, to, limit) => {
  if (from && !to) {
    return products.filter(p => p.price > from);
  } else if (!from && to) {
    return products.filter(p => p.price < to);
  } else if (!from && !to) {
    return products;
  } else {
    return products.filter(p => p.price > from && p.price < to);
  }
}; //get product by brand

const getProductByBrand = (products, brand) => {
  return brand ? products.filter(p => p.brand.toLowerCase() === brand.toLowerCase()) : products;
}; //get product by filter

const getProductbyFilter = (products, sortType, category, from, to, brand, limit) => {
  let sortedProduct;

  if (category) {
    let productCategory = getProducts(products, category);

    if (to && !brand) {
      let productPrice = getProductByPrice(productCategory, from, to);
      sortedProduct = getProductBySort(productPrice, sortType);
    } else if (!to && brand) {
      let productBrand = getProductByBrand(productCategory, brand);
      sortedProduct = getProductBySort(productBrand, sortType);
    } else if (to && brand) {
      let productBrand = getProductByBrand(productCategory, brand);
      let productPrice = getProductByPrice(productCategory, from, to);
      let commonProducts = productBrand.filter(o1 => productPrice.some(o2 => o1.id === o2.id));
      sortedProduct = getProductBySort(commonProducts, sortType);
    } else {
      sortedProduct = getProductBySort(productCategory, sortType);
    }
  } else {
    sortedProduct = getProductBySort(products, sortType);
  }

  return sortedProduct.slice(0, limit || products.length);
};

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

var _interopRequireDefault = __webpack_require__("TqRt");

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

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale'];
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
          console.error(`Error when running the Router event: ${eventField}`);
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
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

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

/***/ "oAEb":
/***/ (function(module, exports) {

module.exports = require("react-toastify");

/***/ }),

/***/ "pWn4":
/***/ (function(module) {

module.exports = JSON.parse("{\"address\":\"Address,Andhra Pradesh\",\"phone\":\"+91 9999999999\",\"email\":\"hi@glossie.com\",\"open\":\"8.00am - 12.00.pm\"}");

/***/ }),

/***/ "rV+b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_mailchimp_subscribe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("+5HK");
/* harmony import */ var react_mailchimp_subscribe__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_mailchimp_subscribe__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const CustomForm = ({
  status,
  message,
  onValidated,
  alertColor,
  className,
  placeholder,
  btnContent,
  children
}) => {
  let email;

  const submit = () => {
    email && email.value.indexOf("@") > -1 && onValidated({
      EMAIL: email.value
    });
  };

  function renderStatus(stt) {
    switch (stt) {
      case "sending":
        return __jsx("div", {
          style: {
            color: alertColor,
            fontSize: "14px",
            marginTop: "15px",
            lineHeight: "1.3"
          }
        }, "sending...");

      case "error":
        return __jsx("div", {
          style: {
            color: alertColor,
            fontSize: "14px",
            marginTop: "15px",
            lineHeight: "1.3"
          },
          dangerouslySetInnerHTML: {
            __html: message
          }
        });

      case "success":
        return __jsx("div", {
          style: {
            color: alertColor,
            fontSize: "14px",
            marginTop: "15px",
            lineHeight: "1.3"
          },
          dangerouslySetInnerHTML: {
            __html: message
          }
        });

      default:
        return null;
    }
  }

  return __jsx("div", {
    className: `subscribe-form ${classnames__WEBPACK_IMPORTED_MODULE_2___default()(className)}`
  }, __jsx("div", {
    className: "mc-form"
  }, __jsx("input", {
    id: "mc-form-email",
    className: "email",
    ref: node => email = node,
    type: "email",
    placeholder: placeholder
  }), children, __jsx("button", {
    className: "button",
    onClick: submit
  }, btnContent || "Subribe")), renderStatus(status));
};

const SubscribeEmail = ({
  mailchimpUrl,
  alertColor,
  className,
  placeholder,
  btnContent,
  children
}) => {
  return __jsx("div", null, __jsx(react_mailchimp_subscribe__WEBPACK_IMPORTED_MODULE_1___default.a, {
    url: mailchimpUrl,
    render: ({
      subscribe,
      status,
      message
    }) => __jsx(CustomForm, {
      className: className,
      status: status,
      message: message,
      onValidated: formData => subscribe(formData),
      alertColor: alertColor,
      placeholder: placeholder,
      btnContent: btnContent,
      children: children
    })
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (SubscribeEmail);

/***/ }),

/***/ "wQtD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addToCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return removeFromCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return removeAllFromCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return decreaseQuantityCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return increaseQuantityCart; });
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("g9Xf");

const addToCart = (product, quantity, color) => ({
  type: _variables__WEBPACK_IMPORTED_MODULE_0__[/* CART */ "a"].ADD_TO_CART,
  product,
  quantity,
  color
});
const removeFromCart = cartId => ({
  type: _variables__WEBPACK_IMPORTED_MODULE_0__[/* CART */ "a"].REMOVE_FROM_CART,
  cartId
});
const removeAllFromCart = () => ({
  type: _variables__WEBPACK_IMPORTED_MODULE_0__[/* CART */ "a"].REMOVE_ALL_FROM_CART
});
const decreaseQuantityCart = cartId => ({
  type: _variables__WEBPACK_IMPORTED_MODULE_0__[/* CART */ "a"].DECREASE_QUANTITY_CART,
  cartId
});
const increaseQuantityCart = cartId => ({
  type: _variables__WEBPACK_IMPORTED_MODULE_0__[/* CART */ "a"].INCREASE_QUANTITY_CART,
  cartId
});

/***/ }),

/***/ "wkBG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "y15V":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hooks_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("2JqZ");
/* harmony import */ var react_hooks_paginator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hooks_paginator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Other_Breadcrumb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("m9Y6");
/* harmony import */ var _common_productSelect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("mK+b");
/* harmony import */ var _components_Layout_LayoutFour__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("6QH/");
/* harmony import */ var _data_products_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("iagI");
var _data_products_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t("iagI", 1);
/* harmony import */ var _components_Shop_ShopProducts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("fg+H");
/* harmony import */ var _components_Shop_ShopHeader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("P7bw");
/* harmony import */ var _components_Sections_Instagram_InstagramTwo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("Npp4");
/* harmony import */ var _components_Shop_ShopSidebar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("JPSD");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











/* harmony default export */ __webpack_exports__["default"] = (function () {
  const filterData = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.shopReducers.filter);
  const pageLimit = 12;
  const {
    0: offset,
    1: setOffset
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: currentView,
    1: setCurrentView
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const {
    0: currentSort,
    1: setCurrentSort
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const {
    0: currentPage,
    1: setCurrentPage
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1);
  const {
    0: currentData,
    1: setCurrentData
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    let sortedProduct = Object(_common_productSelect__WEBPACK_IMPORTED_MODULE_4__[/* getProductbyFilter */ "c"])(_data_products_json__WEBPACK_IMPORTED_MODULE_6__, currentSort, filterData.category, filterData.priceRange.from, filterData.priceRange.to, filterData.brand);
    setCurrentData(sortedProduct);
  }, [offset, currentSort, filterData]);
  return __jsx(_components_Layout_LayoutFour__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    title: "Shop List Sidebar"
  }, __jsx(_components_Other_Breadcrumb__WEBPACK_IMPORTED_MODULE_3__[/* Breadcrumb */ "a"], {
    title: "Shop"
  }, __jsx(_components_Other_Breadcrumb__WEBPACK_IMPORTED_MODULE_3__[/* BreadcrumbItem */ "b"], {
    name: "Home"
  }), __jsx(_components_Other_Breadcrumb__WEBPACK_IMPORTED_MODULE_3__[/* BreadcrumbItem */ "b"], {
    name: "Shop",
    current: true
  })), __jsx("div", {
    className: "shop -five-col"
  }, __jsx("div", {
    className: "container"
  }, __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-12 col-md-4 col-lg-3"
  }, __jsx(_components_Shop_ShopSidebar__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], null)), __jsx("div", {
    className: "col-12 col-md-8 col-lg-9"
  }, __jsx(_components_Shop_ShopHeader__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
    view: currentView,
    getCurrentSort: setCurrentSort,
    getCurrentView: view => setCurrentView(view)
  }), !currentData || currentData.length === 0 ? __jsx("h1", null, "No product found") : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_Shop_ShopProducts__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
    gridColClass: "col-12 col-sm-6 col-lg-4",
    listColClass: "col-12",
    view: currentView,
    data: currentData.slice(offset, offset + pageLimit)
  }), __jsx(react_hooks_paginator__WEBPACK_IMPORTED_MODULE_2___default.a, {
    pageContainerClass: "paginator",
    totalRecords: currentData.length,
    pageLimit: pageLimit,
    pageNeighbours: 2,
    setOffset: setOffset,
    currentPage: currentPage,
    setCurrentPage: setCurrentPage
  })))))), __jsx(_components_Sections_Instagram_InstagramTwo__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], null));
});

/***/ }),

/***/ "zlC1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterOne; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Other_SubcribeEmail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("rV+b");
/* harmony import */ var _Other_SocialIcons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("DS7o");
/* harmony import */ var _data_footer_links_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("FfJh");
var _data_footer_links_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t("FfJh", 1);
/* harmony import */ var _data_footer_info_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("pWn4");
var _data_footer_info_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t("pWn4", 1);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function FooterOne() {
  return __jsx("div", {
    className: "footer-one"
  }, __jsx("div", {
    className: "container"
  }, __jsx("div", {
    className: "footer-one__header"
  }, __jsx("div", {
    className: "footer-one__header__logo"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "" + "/homepages/homepage1"
  }, __jsx("a", null, __jsx("img", {
    src: "" + "/assets/images/logo.png",
    alt: "Logo"
  })))), __jsx("div", {
    className: "footer-one__header__newsletter"
  }, __jsx("span", null, "Subscribe Newletter:"), __jsx(_Other_SubcribeEmail__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    mailchimpUrl: "https://jster.us7.list-manage.com/subscribe/post?u=ed40c0084a0c5ba31b3365d65&id=ec6f32bf5e",
    placeholder: "Enter your email",
    btnContent: __jsx("i", {
      className: "fas fa-paper-plane"
    }),
    className: "footer-one-newsletter"
  })), __jsx("div", {
    className: "footer-one__header__social"
  }, __jsx(_Other_SocialIcons__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    className: "-border"
  }))), __jsx("div", {
    className: "footer-one__body"
  }, __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-12 col-md-6 col-lg-4"
  }, __jsx("div", {
    className: "footer__section -info"
  }, __jsx("h5", {
    className: "footer-title"
  }, "Contact info"), __jsx("p", null, "Address: ", __jsx("span", null, _data_footer_info_json__WEBPACK_IMPORTED_MODULE_5__.address)), __jsx("p", null, "Phone: ", __jsx("span", null, _data_footer_info_json__WEBPACK_IMPORTED_MODULE_5__.phone)), __jsx("p", null, "Email: ", __jsx("span", null, _data_footer_info_json__WEBPACK_IMPORTED_MODULE_5__.email)), __jsx("p", null, "Opentime: ", __jsx("span", null, _data_footer_info_json__WEBPACK_IMPORTED_MODULE_5__.open)))), __jsx("div", {
    className: "col-12 col-md-6 col-lg-4"
  }, __jsx("div", {
    className: "footer__section -links"
  }, __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-12 col-sm-6"
  }, __jsx("h5", {
    className: "footer-title"
  }, "Account"), __jsx("ul", null, _data_footer_links_json__WEBPACK_IMPORTED_MODULE_4__.accountLinks.map((link, index) => __jsx("li", {
    key: index
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: link.to
  }, __jsx("a", null, link.name)))))), __jsx("div", {
    className: "col-12 col-sm-6"
  }, __jsx("h5", {
    className: "footer-title"
  }, "Infomation"), __jsx("ul", null, _data_footer_links_json__WEBPACK_IMPORTED_MODULE_4__.informationLinks.map((link, index) => __jsx("li", {
    key: index
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: link.to
  }, __jsx("a", null, link.name))))))))), __jsx("div", {
    className: "col-12 col-lg-4"
  }, __jsx("div", {
    className: "footer__section -payment"
  }, __jsx("h5", {
    className: "footer-title"
  }, "Payment methods"), __jsx("p", null, "About methods etc.", " "), __jsx("div", {
    className: "payment-methods"
  }, __jsx("img", {
    src: "" + "/assets/images/footer/payment.png",
    alt: "Payment methods"
  }))))))), __jsx("div", {
    className: "footer-one__footer"
  }, __jsx("div", {
    className: "container"
  }, __jsx("div", {
    className: "footer-one__footer__wrapper"
  }, __jsx("p", null, "\xA9 Copyright 2020 Glossie"), __jsx("ul", null, _data_footer_links_json__WEBPACK_IMPORTED_MODULE_4__.creditLinks.map((link, index) => __jsx("li", {
    key: index
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: link.to
  }, __jsx("a", null, link.name)))))))));
}

/***/ })

/******/ });