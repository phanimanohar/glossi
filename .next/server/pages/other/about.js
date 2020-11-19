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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+5HK":
/***/ (function(module, exports) {

module.exports = require("react-mailchimp-subscribe");

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

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("YRhN");


/***/ }),

/***/ "9S/V":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ TestimonialOne; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./src/components/Sections/SectionTitle/SectionTitleOne.js
var SectionTitleOne = __webpack_require__("/j0s");

// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__("O/hg");
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: ./src/components/Other/Rate.js
var Rate = __webpack_require__("GXNE");

// CONCATENATED MODULE: ./src/components/Sections/Testimonial/Elements/TestimonialSlider.js

var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




 // import data from "../../../../data/Testimonial/data.json";

function TestimonialSlider({
  showDots,
  showArrows,
  reverseLayout,
  children,
  data
}) {
  const slider1 = Object(external_react_["useRef"])(null);
  const slider2 = Object(external_react_["useRef"])(null);
  const {
    0: currentIndex,
    1: setCurrentIndex
  } = Object(external_react_["useState"])(0);
  const slider1Settings = {
    slideToShow: 1,
    rows: 2,
    slidesPerRow: 4,
    arrow: false
  };
  const slider2Settings = {
    slideToShow: 1,
    arrows: false,
    swipeToSlide: true,
    arrows: false,
    dots: showDots,
    dotsClass: showDots && "slider-dots",
    customPaging: showDots && function (i) {
      return __jsx("div", {
        className: "slider-dot"
      });
    },
    afterChange: index => {
      setCurrentIndex(index);
    }
  };
  return __jsx("div", null, __jsx("div", {
    className: "testimonial-slider"
  }, __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: `col-12 col-md-6 ${external_classnames_default()({
      "order-2": reverseLayout
    })}`
  }, __jsx("div", {
    className: "slide-nav"
  }, __jsx(external_react_slick_default.a, _extends({
    ref: slider1
  }, slider1Settings), data.map((item, index) => __jsx("div", {
    key: index,
    className: `${external_classnames_default()({
      active: currentIndex === index
    })} slide-nav__item`,
    onClick: () => {
      setCurrentIndex(index);
      slider2.current.slickGoTo(index);
    }
  }, __jsx("img", {
    src: item.image,
    alt: "Customer avatar"
  })))))), __jsx("div", {
    className: `col-12 col-md-6 ${external_classnames_default()({
      "order-1": reverseLayout
    })}`
  }, __jsx("div", {
    className: "slide-for"
  }, __jsx(external_react_slick_default.a, _extends({
    ref: slider2
  }, slider2Settings), data.map((item, index) => __jsx("div", {
    key: index,
    className: "slide-for__item"
  }, children, __jsx("div", {
    className: "slide-for__item__header"
  }, __jsx("div", {
    className: "quote-icon"
  }, __jsx("i", {
    className: "fas fa-quote-right"
  })), __jsx("div", {
    className: "customer__info"
  }, __jsx("h3", null, item.name), __jsx("h5", null, item.city)), __jsx(Rate["a" /* default */], {
    currentRate: item.rate
  })), __jsx("p", {
    className: "slide-for__item__content"
  }, item.review)))), showArrows && __jsx("div", {
    className: "testimonial-one__slider-control"
  }, __jsx("a", {
    href: "" + "#",
    onClick: e => {
      e.preventDefault();
      slider2.current.slickPrev();
    }
  }, __jsx("i", {
    className: "far fa-angle-left"
  }), "Prev"), __jsx("a", {
    href: "" + "#",
    onClick: e => {
      e.preventDefault();
      slider2.current.slickNext();
    }
  }, "Next", __jsx("i", {
    className: "far fa-angle-right"
  }))))))));
}
// CONCATENATED MODULE: ./src/components/Sections/Testimonial/TestimonialOne.js

var TestimonialOne_jsx = external_react_default.a.createElement;


function TestimonialOne({
  data,
  style
}) {
  return TestimonialOne_jsx("div", {
    className: "testimonial",
    style: style
  }, TestimonialOne_jsx("div", {
    className: "container"
  }, TestimonialOne_jsx(SectionTitleOne["a" /* default */], {
    showSubTitle: true,
    align: "center",
    subTitle: "Testimonial"
  }, "What people say?"), TestimonialOne_jsx(TestimonialSlider, {
    data: data,
    showArrows: true
  })));
}

/***/ }),

/***/ "9cws":
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":1,\"image\":\"/assets/images/testimonial/TestimonialOne/1.png\",\"name\":\"Manohar 1\",\"city\":\"Rajahmundry\",\"review\":\"This is amazing!\",\"rate\":4},{\"id\":2,\"image\":\"/assets/images/testimonial/TestimonialOne/2.png\",\"name\":\"Manohar 2\",\"city\":\"Rajahmundry\",\"review\":\"This is amazing!\",\"rate\":4},{\"id\":3,\"image\":\"/assets/images/testimonial/TestimonialOne/3.png\",\"name\":\"Manohar 3\",\"city\":\"Rajahmundry\",\"review\":\"This is amazing!\",\"rate\":4},{\"id\":4,\"image\":\"/assets/images/testimonial/TestimonialOne/4.png\",\"name\":\"Manohar 4 \",\"city\":\"Rajahmundry\",\"review\":\"This is amazing!\",\"rate\":4},{\"id\":5,\"image\":\"/assets/images/testimonial/TestimonialOne/5.png\",\"name\":\"Manohar 5\",\"city\":\"Rajahmundry\",\"review\":\"This is amazing!\",\"rate\":4},{\"id\":6,\"image\":\"/assets/images/testimonial/TestimonialOne/6.png\",\"name\":\"Manohar 6\",\"city\":\"Rajahmundry\",\"review\":\"This is amazing!\",\"rate\":4},{\"id\":7,\"image\":\"/assets/images/testimonial/TestimonialOne/7.png\",\"name\":\"Manohar 7\",\"city\":\"Rajahmundry\",\"review\":\"This is amazing!\",\"rate\":4},{\"id\":8,\"image\":\"/assets/images/testimonial/TestimonialOne/8.png\",\"name\":\"Manohar 8\",\"city\":\"Rajahmundry\",\"review\":\"This is amazing!\",\"rate\":4}]");

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

/***/ "At+n":
/***/ (function(module) {

module.exports = JSON.parse("{\"subTitle\":{\"main\":\"About\",\"span\":\"Glossie\"},\"title\":{\"main\":\"When You Look Good\",\"span\":\"You Feel Good\"},\"description\":\"We provide the best beauty care for you\",\"btn\":{\"content\":\"Book now\",\"color\":\"white\"}}");

/***/ }),

/***/ "BTiB":
/***/ (function(module, exports) {

module.exports = require("react-hook-form");

/***/ }),

/***/ "CSOn":
/***/ (function(module, exports) {

module.exports = require("react-transition-group");

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

/***/ "W0Av":
/***/ (function(module, exports) {

module.exports = require("parallax-js");

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

/***/ "YFk/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntroductionOne; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var parallax_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("W0Av");
/* harmony import */ var parallax_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(parallax_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Control_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("6EID");
/* harmony import */ var _SectionTitle_SectionTitleOne__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("/j0s");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function IntroductionOne({
  data
}) {
  const bg1 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const bg2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    let parallax1 = new parallax_js__WEBPACK_IMPORTED_MODULE_1___default.a(bg1.current);
    let parallax2 = new parallax_js__WEBPACK_IMPORTED_MODULE_1___default.a(bg2.current);
    return () => {
      parallax1.disable();
      parallax2.disable();
    };
  }, []);
  return __jsx("div", {
    className: "introduction-one"
  }, __jsx("div", {
    className: "container"
  }, __jsx("div", {
    className: "row align-items-center"
  }, __jsx("div", {
    className: "col-12 col-md-6"
  }, __jsx("div", {
    className: "introduction-one__image"
  }, __jsx("div", {
    className: "introduction-one__image__detail"
  }, __jsx("img", {
    src: "/assets/images/introduction/IntroductionOne/img1.png",
    alt: "background"
  }), __jsx("img", {
    src: "/assets/images/introduction/IntroductionOne/img2.png",
    alt: "background"
  })), __jsx("div", {
    className: "wrapper"
  }, __jsx("div", {
    className: "introduction-one__image__background"
  }, __jsx("div", {
    className: "background__item"
  }, __jsx("div", {
    ref: bg1,
    className: "wrapper"
  }, __jsx("img", {
    "data-depth": "0.5",
    src: "/assets/images/introduction/IntroductionOne/bg1.png",
    alt: "background"
  }))), __jsx("div", {
    className: "background__item"
  }, __jsx("div", {
    ref: bg2,
    className: "wrapper"
  }, __jsx("img", {
    "data-depth": "0.3",
    "data-invert-x": true,
    "data-invert-y": true,
    src: "/assets/images/introduction/IntroductionOne/bg2.png",
    alt: "background"
  }))))))), __jsx("div", {
    className: "col-12 col-md-6"
  }, __jsx("div", {
    className: "introduction-one__content"
  }, __jsx("h5", null, data.subTitle.main, " ", __jsx("span", null, data.subTitle.span)), __jsx(_SectionTitle_SectionTitleOne__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    spaceBottom: "1.875em"
  }, data.title.main, __jsx("br", null), data.title.span), __jsx("p", null, data.description), __jsx(_Control_Button__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    color: data.btn.color,
    content: data.btn.content,
    action: "#"
  }))))));
}

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YRhN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./src/components/Layout/LayoutFour.js + 2 modules
var LayoutFour = __webpack_require__("6QH/");

// EXTERNAL MODULE: ./src/components/Other/Breadcrumb.js
var Breadcrumb = __webpack_require__("m9Y6");

// EXTERNAL MODULE: ./src/components/Sections/Introduction/IntroductionOne.js
var IntroductionOne = __webpack_require__("YFk/");

// EXTERNAL MODULE: ./src/data/introduction/introductionOne.json
var introductionOne = __webpack_require__("At+n");

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: ./src/components/Control/Button.js
var Button = __webpack_require__("6EID");

// EXTERNAL MODULE: ./src/components/Control/Modal.js
var Modal = __webpack_require__("bMKh");

// CONCATENATED MODULE: ./src/components/Other/VideoFrame.js

var __jsx = external_react_default.a.createElement;




function VideoFrame(props) {
  const {
    0: showModal,
    1: setShowModal
  } = Object(external_react_["useState"])(false);
  let {
    poster,
    height,
    width,
    src,
    className
  } = props;
  height = height || 1080;
  return __jsx(external_react_default.a.Fragment, null, __jsx("div", {
    className: `video-frame ${external_classnames_default()(className)}`,
    style: {
      height: height,
      width: width ? width : height * 16 / 9
    }
  }, __jsx("div", {
    className: "video-frame__poster"
  }, __jsx("img", {
    src: poster,
    alt: "Video poster"
  })), __jsx(Button["a" /* default */], {
    action: "#",
    color: "white",
    height: "50px",
    width: "50px",
    className: "-round",
    onClick: e => {
      e.preventDefault();
      setShowModal(true);
    },
    content: __jsx("i", {
      className: "fas fa-play"
    })
  }), __jsx("a", null)), __jsx(Modal["a" /* default */], {
    showModal: showModal,
    setShowModal: setShowModal,
    height: 400,
    width: 700
  }, __jsx("iframe", {
    src: src,
    frameBorder: "0",
    allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
    allowFullScreen: true
  })));
}
// CONCATENATED MODULE: ./src/components/Sections/Introduction/IntroductionTwo.js

var IntroductionTwo_jsx = external_react_default.a.createElement;


function IntroductionTwo({
  data,
  style
}) {
  const {
    0: currentChoose,
    1: setCurrentChoose
  } = Object(external_react_["useState"])(data[0].name);
  const {
    0: currentVideoImg,
    1: setCurrentVideoImg
  } = Object(external_react_["useState"])(data[0].videoPoster);
  const {
    0: currentVideoSrc,
    1: setCurrentVideoSrc
  } = Object(external_react_["useState"])(data[0].videoSrc);
  return IntroductionTwo_jsx("div", {
    className: "introduction-two",
    style: style
  }, IntroductionTwo_jsx(VideoFrame, {
    poster: currentVideoImg,
    height: 500,
    src: currentVideoSrc
  }), IntroductionTwo_jsx("div", {
    className: "introduction-two__content"
  }, IntroductionTwo_jsx("div", {
    className: "container"
  }, data.map((item, index) => IntroductionTwo_jsx("div", {
    onMouseOver: () => {
      setCurrentChoose(item.name);
      setCurrentVideoImg(item.videoPoster);
      setCurrentVideoSrc(item.videoSrc);
    },
    key: index,
    className: `introduction-two__content__item ${currentChoose === item.name ? "active" : ""}`
  }, !item.description && IntroductionTwo_jsx("span", null, "0", index + 1, "."), IntroductionTwo_jsx("a", {
    href: "" + "#",
    onClick: e => e.preventDefault()
  }, item.name), IntroductionTwo_jsx("p", null, item.description && item.description))))));
}
// EXTERNAL MODULE: ./src/data/pages/about.json
var about = __webpack_require__("tXed");

// EXTERNAL MODULE: ./src/components/Sections/Testimonial/TestimonialOne.js + 1 modules
var TestimonialOne = __webpack_require__("9S/V");

// EXTERNAL MODULE: ./src/data/testimonial/data.json
var testimonial_data = __webpack_require__("9cws");

// EXTERNAL MODULE: ./src/data/benefits/data.json
var benefits_data = __webpack_require__("vwd4");

// CONCATENATED MODULE: ./src/components/Other/Benefits.js
var Benefits_jsx = external_react_default.a.createElement;


function Benefits({
  spaceBottom
}) {
  return Benefits_jsx("div", {
    className: "benefits",
    style: {
      marginBottom: spaceBottom || 100 / 16 + "rem"
    }
  }, Benefits_jsx("div", {
    className: "container"
  }, Benefits_jsx("div", {
    className: "row"
  }, benefits_data.map((b, index) => Benefits_jsx("div", {
    key: index,
    className: "col-12 col-sm-6 col-lg-3"
  }, Benefits_jsx("div", {
    className: "benefits__item"
  }, Benefits_jsx("div", {
    className: "benefits__item__icon"
  }, Benefits_jsx("img", {
    src: b.image,
    alt: b.name
  })), Benefits_jsx("div", {
    className: "benefits__item__content"
  }, Benefits_jsx("h5", null, b.name), Benefits_jsx("p", null, b.content))))))));
}
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__("O/hg");
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);

// EXTERNAL MODULE: ./src/components/Other/SliderArrow.js
var SliderArrow = __webpack_require__("JRj/");

// CONCATENATED MODULE: ./src/components/Sections/Introduction/IntroductionNine.js

var IntroductionNine_jsx = external_react_default.a.createElement;



function IntroductionNine() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    prevArrow: IntroductionNine_jsx(SliderArrow["b" /* PrevArrow */], null),
    nextArrow: IntroductionNine_jsx(SliderArrow["a" /* NextArrow */], null),
    responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 5
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
  return IntroductionNine_jsx("div", {
    className: "introduction-nine"
  }, IntroductionNine_jsx("div", {
    className: "introduction-nine__logos"
  }, IntroductionNine_jsx("div", {
    className: "container"
  }, IntroductionNine_jsx(external_react_slick_default.a, settings, Array.from(Array(7), (e, i) => {
    return IntroductionNine_jsx("div", {
      key: i,
      className: "slide__item"
    }, IntroductionNine_jsx("img", {
      src: "" + `/assets/images/introduction/IntroductionNine/${i + 1}.png`,
      alt: "Brand item"
    }));
  })))), IntroductionNine_jsx("div", {
    className: "container"
  }, IntroductionNine_jsx("div", {
    className: "introduction-nine__content"
  }, IntroductionNine_jsx("h3", null, "New items are ", IntroductionNine_jsx("br", null), "released weekly."), IntroductionNine_jsx(Button["a" /* default */], {
    action: "#",
    color: "white",
    content: "ALL NEW ITEMS"
  }))));
}
// EXTERNAL MODULE: ./src/components/Sections/Instagram/InstagramTwo.js
var InstagramTwo = __webpack_require__("Npp4");

// CONCATENATED MODULE: ./src/pages/other/about.js

var about_jsx = external_react_default.a.createElement;











/* harmony default export */ var other_about = __webpack_exports__["default"] = (function () {
  return about_jsx(LayoutFour["a" /* default */], {
    title: "About us"
  }, about_jsx(Breadcrumb["a" /* Breadcrumb */], {
    title: "About us"
  }, about_jsx(Breadcrumb["b" /* BreadcrumbItem */], {
    name: "Home"
  }), about_jsx(Breadcrumb["b" /* BreadcrumbItem */], {
    name: "About us",
    current: true
  })), about_jsx(IntroductionOne["a" /* default */], {
    data: introductionOne
  }), about_jsx(IntroductionTwo, {
    data: about,
    style: {
      marginBottom: 0
    }
  }), about_jsx(TestimonialOne["a" /* default */], {
    data: testimonial_data,
    style: {
      backgroundColor: "#fff",
      marginBottom: 0
    }
  }), about_jsx(IntroductionNine, null), about_jsx(Benefits, null), about_jsx(InstagramTwo["a" /* default */], null));
});

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

/***/ "tXed":
/***/ (function(module) {

module.exports = JSON.parse("[{}]");

/***/ }),

/***/ "vwd4":
/***/ (function(module) {

module.exports = JSON.parse("[{\"image\":\"/assets/images/benefits/1.png\",\"name\":\"Free Shipping\",\"content\":\"Free shipping on all order\"},{\"image\":\"/assets/images/benefits/2.png\",\"name\":\"Valuable Gifts\",\"content\":\"Free gift after every 10 order\"},{\"image\":\"/assets/images/benefits/3.png\",\"name\":\"All Day Support\",\"content\":\"Call us: +01 234 567 89\"},{\"image\":\"/assets/images/benefits/4.png\",\"name\":\"Seasonal Sale\",\"content\":\"Discounts up to 50% on all\"}]");

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