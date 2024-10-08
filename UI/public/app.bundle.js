/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./jsx/Alert.jsx":
/*!***********************!*\
  !*** ./jsx/Alert.jsx ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Alert)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }


var Alert = /*#__PURE__*/function (_React$Component) {
  function Alert() {
    _classCallCheck(this, Alert);
    return _callSuper(this, Alert);
  }
  _inherits(Alert, _React$Component);
  return _createClass(Alert, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        id: "alert",
        className: "alert ".concat(this.props.result ? 'alert-success' : 'alert-danger'),
        role: "alert"
      }, this.props.message);
    }
  }]);
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));

Alert.propTypes = {
  result: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  message: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};

/***/ }),

/***/ "./jsx/App.jsx":
/*!*********************!*\
  !*** ./jsx/App.jsx ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _EmployeeDirectory_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EmployeeDirectory.jsx */ "./jsx/EmployeeDirectory.jsx");



react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot(document.getElementById('contents')).render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_EmployeeDirectory_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], null));

/***/ }),

/***/ "./jsx/ConfirmDeleteModal.jsx":
/*!************************************!*\
  !*** ./jsx/ConfirmDeleteModal.jsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ConfirmDeleteModal)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Modal.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }



var ConfirmDeleteModal = /*#__PURE__*/function (_React$Component) {
  function ConfirmDeleteModal() {
    _classCallCheck(this, ConfirmDeleteModal);
    return _callSuper(this, ConfirmDeleteModal, arguments);
  }
  _inherits(ConfirmDeleteModal, _React$Component);
  return _createClass(ConfirmDeleteModal, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["default"], {
        show: this.props.show,
        onHide: this.props.onHide
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["default"].Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["default"].Title, null, "Confirm Deletion"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
        className: "bi bi-x",
        onClick: this.props.onHide
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["default"].Body, null, "Are you sure you want to delete this employee record?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["default"].Footer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["default"], {
        variant: "secondary",
        onClick: this.props.onHide
      }, "Cancel"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["default"], {
        variant: "danger",
        onClick: this.props.onConfirm
      }, "Delete")));
    }
  }]);
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));

ConfirmDeleteModal.propTypes = {
  show: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
  onHide: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),
  onConfirm: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func)
};

/***/ }),

/***/ "./jsx/EmployeeCreate.jsx":
/*!********************************!*\
  !*** ./jsx/EmployeeCreate.jsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EmployeeCreate)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _validator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./validator.js */ "./jsx/validator.js");
/* harmony import */ var _Alert_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Alert.jsx */ "./jsx/Alert.jsx");
/* harmony import */ var _EmployeeDelete_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EmployeeDelete.jsx */ "./jsx/EmployeeDelete.jsx");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }





var EmployeeCreate = /*#__PURE__*/function (_React$Component) {
  function EmployeeCreate() {
    var _this;
    _classCallCheck(this, EmployeeCreate);
    _this = _callSuper(this, EmployeeCreate);
    _defineProperty(_this, "setPageDefaults", function () {
      if (_this.props.pagetitle != undefined) {
        _this.setState({
          pagetitle: _this.props.pagetitle
        });
      }
      if (_this.props.employeeId != undefined) {
        _this.setState({
          employeeId: _this.props.employeeId
        });
      }
      if (_this.props.employee != undefined) {
        _this.setState({
          employee: _this.props.employee
        });
      }
    });
    _defineProperty(_this, "handleChange", function (e) {
      var name = e.target.name;
      var value = e.target.value;
      (0,_validator_js__WEBPACK_IMPORTED_MODULE_1__.handleValidation)(name, value);
      _this.setState(function (prevState) {
        return {
          employee: _objectSpread(_objectSpread({}, prevState.employee), {}, _defineProperty({}, name, value))
        };
      });
    });
    _defineProperty(_this, "handleSubmit", /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(e) {
        var employee;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              if (!_this.props.deleteEmployee) {
                _context.next = 5;
                break;
              }
              _this.props.handleDeleteClick(_this.state.employeeId);
              _context.next = 14;
              break;
            case 5:
              if (!_this.props.updateEmployee) {
                _context.next = 12;
                break;
              }
              _context.next = 8;
              return _this.props.updateEmployee(_this.state.employee);
            case 8:
              employee = _context.sent;
              _this.setState({
                employee: employee
              });
              _context.next = 14;
              break;
            case 12:
              _context.next = 14;
              return _this.createEmployee(e);
            case 14:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
    _defineProperty(_this, "createEmployee", /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(e) {
        var employee, mutation, response;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              e.preventDefault();
              _context2.prev = 1;
              employee = _this.state.employee;
              mutation = "\n                mutation {\n                    createEmployee(\n                        FirstName: \"".concat(employee.FirstName, "\",\n                        LastName: \"").concat(employee.LastName, "\",\n\t\t\t\t\t\tDateOfBirth: \"").concat(employee.DateOfBirth, "\",\n                        DateOfJoining: \"").concat(employee.DateOfJoining, "\",\n                        Title: \"").concat(employee.Title, "\",\n                        Department: \"").concat(employee.Department, "\",\n                        EmployeeType: \"").concat(employee.EmployeeType, "\"\n                    ) {\n                        FirstName\n                        LastName\n\t\t\t\t\t\tDateOfBirth\n                        DateOfJoining\n                        Title\n                        Department\n                        EmployeeType\n                    }\n                }\n            ");
              _context2.next = 6;
              return fetch("".concat(_this.API_SERVER_URL), {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  query: mutation
                })
              });
            case 6:
              response = _context2.sent;
              if (response.ok) {
                _context2.next = 9;
                break;
              }
              throw new Error('Failed to create employee');
            case 9:
              _this.setState({
                employee: {
                  FirstName: '',
                  LastName: '',
                  DateOfBirth: '',
                  DateOfJoining: '',
                  Title: '',
                  Department: '',
                  EmployeeType: ''
                },
                showAlert: true,
                alertMessage: 'Successfully added employee record!',
                result: true
              });
              _this.resetAlert();
              _context2.next = 18;
              break;
            case 13:
              _context2.prev = 13;
              _context2.t0 = _context2["catch"](1);
              console.log(_context2.t0);
              _this.setState({
                showAlert: true,
                alertMessage: _context2.t0.message,
                result: false
              });
              _this.resetAlert();
            case 18:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[1, 13]]);
      }));
      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }());
    _defineProperty(_this, "resetAlert", function () {
      clearTimeout(_this.timeout);
      _this.timeout = setTimeout(function () {
        _this.setState({
          showAlert: false
        });
        clearTimeout(_this.timeout);
      }, 4000);
    });
    _this.state = {
      employee: {
        FirstName: '',
        LastName: '',
        DateOfBirth: '',
        DateOfJoining: '',
        Title: '',
        Department: '',
        EmployeeType: '',
        CurrentStatus: ''
      },
      pagetitle: 'Create Employee',
      employeeId: ''
    };
    _this.API_SERVER_URL = "http://localhost:8000/graphql";
    return _this;
  }
  _inherits(EmployeeCreate, _React$Component);
  return _createClass(EmployeeCreate, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setPageDefaults();
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, this.state.showAlert && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Alert_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
        message: this.state.alertMessage,
        result: this.state.result
      }), this.props.deleteEmployee && this.state.employeeId === '' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_EmployeeDelete_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, " ", this.state.pagetitle, " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
        onSubmit: this.handleSubmit
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
        htmlFor: "FirstName",
        className: !(this.props.deleteEmployee || this.props.updateEmployee) ? 'required' : ''
      }, "First Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", _extends({
        type: "text",
        id: "FirstName",
        name: "FirstName",
        className: "form-control",
        value: this.state.employee.FirstName,
        onChange: this.handleChange
      }, this.props.deleteEmployee || this.props.updateEmployee ? {
        disabled: true
      } : {
        required: true
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "invalid-feedback"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
        htmlFor: "LastName",
        className: !(this.props.deleteEmployee || this.props.updateEmployee) ? 'required' : ''
      }, "Last Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", _extends({
        type: "text",
        id: "LastName",
        name: "LastName",
        className: "form-control",
        value: this.state.employee.LastName,
        onChange: this.handleChange
      }, this.props.deleteEmployee || this.props.updateEmployee ? {
        disabled: true
      } : {
        required: true
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "invalid-feedback"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
        htmlFor: "DateOfBirth",
        className: !(this.props.deleteEmployee || this.props.updateEmployee) ? 'required' : ''
      }, "Date of Birth"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", _extends({
        type: "date",
        id: "DateOfBirth",
        name: "DateOfBirth",
        className: "form-control",
        value: this.state.employee.DateOfBirth,
        onChange: this.handleChange
      }, this.props.deleteEmployee || this.props.updateEmployee ? {
        disabled: true
      } : {
        required: true
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "invalid-feedback"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
        htmlFor: "DateOfJoining",
        className: !(this.props.deleteEmployee || this.props.updateEmployee) ? 'required' : ''
      }, "Date of Joining"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", _extends({
        type: "date",
        id: "DateOfJoining",
        name: "DateOfJoining",
        className: "form-control",
        value: this.state.employee.DateOfJoining,
        onChange: this.handleChange
      }, this.props.deleteEmployee || this.props.updateEmployee ? {
        disabled: true
      } : {
        required: true
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "invalid-feedback"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
        htmlFor: "Title",
        className: !(this.props.deleteEmployee || this.props.updateEmployee) ? 'required' : ''
      }, "Title"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", _extends({
        name: "Title",
        id: "Title",
        className: "form-control",
        value: this.state.employee.Title,
        onChange: this.handleChange
      }, this.props.deleteEmployee ? {
        disabled: true
      } : {
        required: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
        value: "",
        disabled: true
      }, "Select Title"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
        value: "Employee"
      }, "Employee"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
        value: "Manager"
      }, "Manager"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
        value: "Director"
      }, "Director"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
        value: "VP"
      }, "VP")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "invalid-feedback"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
        htmlFor: "Department",
        className: !(this.props.deleteEmployee || this.props.updateEmployee) ? 'required' : ''
      }, "Department"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", _extends({
        id: "Department",
        name: "Department",
        className: "form-control",
        value: this.state.employee.Department,
        onChange: this.handleChange
      }, this.props.deleteEmployee ? {
        disabled: true
      } : {
        required: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
        value: "",
        disabled: true
      }, "Select Department"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
        value: "IT"
      }, "IT"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
        value: "Marketing"
      }, "Marketing"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
        value: "HR"
      }, "HR"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
        value: "Engineering"
      }, "Engineering")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "invalid-feedback"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
        htmlFor: "EmployeeType",
        className: !(this.props.deleteEmployee || this.props.updateEmployee) ? 'required' : ''
      }, "Employee Type"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", _extends({
        id: "EmployeeType",
        name: "EmployeeType",
        className: "form-control",
        value: this.state.employee.EmployeeType,
        onChange: this.handleChange
      }, this.props.deleteEmployee ? {
        disabled: true
      } : {
        required: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
        value: "",
        disabled: true
      }, "Select Employee Type"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
        value: "FullTime"
      }, "Full Time"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
        value: "PartTime"
      }, "Part Time"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
        value: "Contract"
      }, "Contract"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
        value: "Seasonal"
      }, "Seasonal")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "invalid-feedback"
      })), this.props.updateEmployee ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
        htmlFor: "CurrentStatus",
        className: !(this.props.deleteEmployee || this.props.updateEmployee) ? 'required' : ''
      }, "Current Status"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", _extends({
        id: "CurrentStatus",
        name: "CurrentStatus",
        className: "form-control",
        value: this.state.employee.CurrentStatus,
        onChange: this.handleChange
      }, this.props.deleteEmployee ? {
        disabled: true
      } : {
        required: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
        value: "",
        disabled: true
      }, "Select Current Status"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
        value: "true"
      }, "Active"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
        value: "false"
      }, "Inactive")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "invalid-feedback"
      })) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        type: "submit",
        className: "btn btn-primary btn-lg btn-block"
      }, this.state.pagetitle))));
    }
  }]);
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));

EmployeeCreate.propTypes = {
  pagetitle: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),
  employeeId: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),
  deleteEmployee: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),
  handleDeleteClick: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),
  updateEmployee: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),
  employee: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object)
};

/***/ }),

/***/ "./jsx/EmployeeDelete.jsx":
/*!********************************!*\
  !*** ./jsx/EmployeeDelete.jsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EmployeeDelete)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _EmployeeUpdate_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EmployeeUpdate.jsx */ "./jsx/EmployeeUpdate.jsx");
/* harmony import */ var _ConfirmDeleteModal_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ConfirmDeleteModal.jsx */ "./jsx/ConfirmDeleteModal.jsx");
/* harmony import */ var _Alert_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Alert.jsx */ "./jsx/Alert.jsx");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }




var EmployeeDelete = /*#__PURE__*/function (_React$Component) {
  function EmployeeDelete() {
    var _this;
    _classCallCheck(this, EmployeeDelete);
    _this = _callSuper(this, EmployeeDelete);
    _defineProperty(_this, "handleDeleteClick", function (employeeId) {
      _this.setState({
        showConfirmDeleteModal: true,
        employeeToDelete: employeeId
      });
    });
    _defineProperty(_this, "handleConfirmDelete", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var response;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _this.deleteEmployee(_this.state.employeeToDelete);
          case 2:
            response = _context.sent;
            if (typeof response === 'boolean' && response == false) {
              _this.setState({
                showConfirmDeleteModal: false
              });
            } else {
              _this.setState({
                showEmployeeDeletePage: true,
                showConfirmDeleteModal: false,
                employeeToDelete: null
              });
            }
          case 4:
          case "end":
            return _context.stop();
        }
      }, _callee);
    })));
    _defineProperty(_this, "handleCancelDelete", function () {
      _this.setState({
        showConfirmDeleteModal: false,
        employeeToDelete: null
      });
    });
    _defineProperty(_this, "fetchEmployeeById", /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(employeeId) {
        var employee, query, variables, response;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              employee = undefined;
              _context2.prev = 1;
              query = "query($id: Int!) {\n                            getEmployeeById(empId: $id) {\n                                empId\n                                FirstName\n                                LastName\n\t\t\t\t\t\t\t\tDateOfBirth\n                                DateOfJoining\n                                Title\n                                Department\n                                EmployeeType\n                                CurrentStatus\n                            }\n                        }";
              variables = {
                id: employeeId
              };
              _context2.next = 6;
              return fetch("".concat(_this.API_SERVER_URL), {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  query: query,
                  variables: variables
                })
              });
            case 6:
              response = _context2.sent;
              if (response.ok) {
                _context2.next = 9;
                break;
              }
              throw new Error('Failed to fetch employees');
            case 9:
              _context2.next = 11;
              return response.json();
            case 11:
              employee = _context2.sent.data.getEmployeeById;
              _context2.next = 18;
              break;
            case 14:
              _context2.prev = 14;
              _context2.t0 = _context2["catch"](1);
              employee = undefined;
              console.log(_context2.t0);
            case 18:
              return _context2.abrupt("return", employee);
            case 19:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[1, 14]]);
      }));
      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
    _defineProperty(_this, "deleteEmployee", /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(empId) {
        var deleteResponse, mutation, employee, response;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              try {
                empId = parseInt(empId);
              } catch (e) {
                empId = 0;
                console.log(e);
              }
              _context3.prev = 1;
              mutation = "\n                    mutation {\n                        deleteEmployee(empId: ".concat(empId, ") {\n                            code\n                            message\n                        }\n                    }\n                "); //Fetch employee details
              _context3.next = 5;
              return _this.fetchEmployeeById(empId);
            case 5:
              employee = _context3.sent;
              if (!employee.CurrentStatus) {
                _context3.next = 10;
                break;
              }
              _this.setState({
                showAlert: true,
                alertMessage: "CAN’T DELETE EMPLOYEE – STATUS ACTIVE",
                result: false
              });
              _this.resetAlert();
              return _context3.abrupt("return", false);
            case 10:
              _context3.next = 12;
              return fetch("".concat(_this.API_SERVER_URL), {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  query: mutation
                })
              });
            case 12:
              response = _context3.sent;
              if (response.ok) {
                _context3.next = 15;
                break;
              }
              throw new Error('Failed to delete employee');
            case 15:
              _context3.next = 17;
              return response.json();
            case 17:
              deleteResponse = _context3.sent.data.deleteEmployee;
              _this.setState({
                showAlert: true,
                alertMessage: deleteResponse.message,
                result: true
              });
              _this.resetAlert();
              _context3.next = 28;
              break;
            case 22:
              _context3.prev = 22;
              _context3.t0 = _context3["catch"](1);
              console.log(_context3.t0);
              deleteResponse = undefined;
              _this.setState({
                showAlert: true,
                alertMessage: 'Failed to delete employee record!',
                result: false
              });
              _this.resetAlert();
            case 28:
              return _context3.abrupt("return", deleteResponse);
            case 29:
            case "end":
              return _context3.stop();
          }
        }, _callee3, null, [[1, 22]]);
      }));
      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }());
    _defineProperty(_this, "resetAlert", function () {
      clearTimeout(_this.timeout);
      _this.timeout = setTimeout(function () {
        _this.setState({
          showAlert: false
        });
        clearTimeout(_this.timeout);
      }, 4000);
    });
    _this.state = {
      showAlert: false,
      showConfirmDeleteModal: false,
      showEmployeeDeletePage: false
    };
    _this.API_SERVER_URL = "http://localhost:8000/graphql";
    return _this;
  }
  _inherits(EmployeeDelete, _React$Component);
  return _createClass(EmployeeDelete, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, this.state.showAlert && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Alert_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
        message: this.state.alertMessage,
        result: this.state.result
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ConfirmDeleteModal_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
        show: this.state.showConfirmDeleteModal,
        onHide: this.handleCancelDelete,
        onConfirm: this.handleConfirmDelete
      }), this.state.showEmployeeDeletePage ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(EmployeeDelete, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_EmployeeUpdate_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
        pagetitle: "Delete Employee",
        deleteEmployee: this.deleteEmployee,
        handleDeleteClick: this.handleDeleteClick
      }));
    }
  }]);
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));


/***/ }),

/***/ "./jsx/EmployeeDirectory.jsx":
/*!***********************************!*\
  !*** ./jsx/EmployeeDirectory.jsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EmployeeDirectory)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NavPage_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavPage.jsx */ "./jsx/NavPage.jsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }



var EmployeeDirectory = /*#__PURE__*/function (_React$Component) {
  function EmployeeDirectory() {
    _classCallCheck(this, EmployeeDirectory);
    return _callSuper(this, EmployeeDirectory, arguments);
  }
  _inherits(EmployeeDirectory, _React$Component);
  return _createClass(EmployeeDirectory, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.HashRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_NavPage_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], null));
    }
  }]);
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));


/***/ }),

/***/ "./jsx/EmployeeFilter.jsx":
/*!********************************!*\
  !*** ./jsx/EmployeeFilter.jsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _EmployeeTable_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EmployeeTable.jsx */ "./jsx/EmployeeTable.jsx");
/* harmony import */ var _withRouter_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./withRouter.jsx */ "./jsx/withRouter.jsx");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }




var EmployeeFilter = /*#__PURE__*/function (_React$Component) {
  function EmployeeFilter(props) {
    var _this;
    _classCallCheck(this, EmployeeFilter);
    _this = _callSuper(this, EmployeeFilter, [props]);
    _this.state = {
      title: '',
      employeeType: '',
      department: ''
    };
    return _this;
  }
  _inherits(EmployeeFilter, _React$Component);
  return _createClass(EmployeeFilter, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var queryParams = new URLSearchParams(this.props.match.location.search);
      var title = queryParams.get('title') || '';
      var employeeType = queryParams.get('employeeType') || '';
      var department = queryParams.get('department') || '';
      if (employeeType) {
        switch (employeeType) {
          case 'PartTime':
            employeeType = 'PartTime';
            break;
          case 'Contract':
            employeeType = 'Contract';
            break;
          case 'Seasonal':
            employeeType = 'Seasonal';
            break;
          case 'FullTime':
            employeeType = 'FullTime';
            break;
        }
      }
      if (title) {
        switch (title) {
          case 'Employee':
            title = 'Employee';
            break;
          case 'Manager':
            title = 'Manager';
            break;
          case 'Director':
            title = 'Director';
            break;
          case 'VP':
            title = 'VP';
            break;
        }
      }
      if (department) {
        switch (title) {
          case 'IT':
            department = 'IT';
            break;
          case 'Marketing':
            department = 'Marketing';
            break;
          case 'HR':
            department = 'HR';
            break;
          case 'Engineering':
            department = 'Engineering';
            break;
        }
      }
      this.setState({
        title: title,
        employeeType: employeeType,
        department: department
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
        title = _this$state.title,
        employeeType = _this$state.employeeType,
        department = _this$state.department;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_EmployeeTable_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
        title: title,
        employeeType: employeeType,
        department: department,
        match: this.props.match
      });
    }
  }]);
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));
EmployeeFilter.propTypes = {
  match: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_withRouter_jsx__WEBPACK_IMPORTED_MODULE_2__["default"])(EmployeeFilter));

/***/ }),

/***/ "./jsx/EmployeeReport.jsx":
/*!********************************!*\
  !*** ./jsx/EmployeeReport.jsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EmployeeReport)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_google_charts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-google-charts */ "./node_modules/react-google-charts/dist/index.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


var EmployeeReport = /*#__PURE__*/function (_React$Component) {
  function EmployeeReport() {
    var _this;
    _classCallCheck(this, EmployeeReport);
    _this = _callSuper(this, EmployeeReport);
    _defineProperty(_this, "componentDidMount", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var employees, dataReaching65, maxEmployees, stepSize, ticks, reaching65BarOptions;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _this.fetchEmployees();
          case 2:
            employees = _context.sent;
            dataReaching65 = _this.getEmployeesReaching65Report(employees);
            maxEmployees = Math.max.apply(Math, _toConsumableArray(dataReaching65.slice(1).map(function (row) {
              return row[1];
            })));
            stepSize = Math.ceil(maxEmployees / 10);
            ticks = Array.from({
              length: Math.ceil(maxEmployees / stepSize) + 1
            }, function (_, i) {
              return i * stepSize;
            });
            reaching65BarOptions = _this.state.reaching65BarOptions;
            reaching65BarOptions.hAxis.ticks = ticks;
            reaching65BarOptions.hAxis.viewWindow.max = maxEmployees;
            _this.setState({
              type: _this.getEmployeeTypeReport(employees),
              department: _this.getEmployeeDepartmentReport(employees),
              title: _this.getEmployeeTitleReport(employees),
              reaching65BarOptions: reaching65BarOptions,
              dataReaching65: _this.getEmployeesReaching65Report(employees),
              dataJoinedCurrentYear: _this.getEmployeesJoinedCurrentYearReport(employees),
              dataJoinedLast3MonthsByDepartment: _this.getEmployeesJoinedLast3MonthsByDepartmentReport(employees)
            });
          case 11:
          case "end":
            return _context.stop();
        }
      }, _callee);
    })));
    _defineProperty(_this, "getEmployeeDepartmentReport", function (employees) {
      var response = {
        it: 0,
        marketing: 0,
        hr: 0,
        engineering: 0
      };
      employees.forEach(function (employee) {
        switch (employee.Department) {
          case "IT":
            response.it++;
            break;
          case "Marketing":
            response.marketing++;
            break;
          case "HR":
            response.hr++;
            break;
          case "Engineering":
            response.engineering++;
            break;
          default:
            break;
        }
      });
      return [["Employee Department", "Number of Employees"], ["IT", response.it], ["Marketing", response.marketing], ["HR", response.hr], ["Engineering", response.engineering]];
    });
    _defineProperty(_this, "getEmployeesJoinedCurrentYearReport", function (employees) {
      var response = {};
      var now = new Date();
      var currentYear = now.getFullYear();
      employees.forEach(function (employee) {
        var doj = new Date(employee.DateOfJoining);
        if (doj.getFullYear() === currentYear) {
          var month = doj.toLocaleString("default", {
            month: "long"
          });
          response[month] = (response[month] || 0) + 1;
        }
      });
      var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      var data = [["Month", "Number of Employees"]];
      months.forEach(function (month) {
        data.push([month, response[month] || 0]);
      });
      return data;
    });
    _defineProperty(_this, "getEmployeesJoinedLast3MonthsByDepartmentReport", function (employees) {
      var response = {};
      var now = new Date();
      var threeMonthsAgo = new Date();
      threeMonthsAgo.setMonth(now.getMonth() - 3);
      employees.forEach(function (employee) {
        var joinDate = new Date(employee.DateOfJoining);
        if (joinDate >= threeMonthsAgo && joinDate <= now) {
          var month = joinDate.toLocaleString("default", {
            month: "short"
          });
          var department = employee.Department || "Unknown";
          if (!response[month]) {
            response[month] = {
              IT: 0,
              Marketing: 0,
              HR: 0,
              Engineering: 0
            };
          }
          if (response[month][department] !== undefined) {
            response[month][department]++;
          }
        }
      });

      // Predefined order of months in English
      var monthOrder = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

      // Sort the response object based on the month order
      var sortedMonths = Object.keys(response).sort(function (a, b) {
        return monthOrder.indexOf(a) - monthOrder.indexOf(b);
      });

      // Prepare the data array with the sorted months
      var data = [["Month", "IT", "Marketing", "HR", "Engineering"]];
      sortedMonths.forEach(function (month) {
        data.push([month, response[month].IT, response[month].Marketing, response[month].HR, response[month].Engineering]);
      });
      return data;
    });
    _defineProperty(_this, "getEmployeeTitleReport", function (employees) {
      var response = {
        employee: 0,
        manager: 0,
        director: 0,
        vp: 0
      };
      employees.forEach(function (employee) {
        switch (employee.Title) {
          case "Employee":
            response.employee++;
            break;
          case "Manager":
            response.manager++;
            break;
          case "Director":
            response.director++;
            break;
          case "VP":
            response.vp++;
            break;
          default:
            break;
        }
      });
      return [["Employee Title", "Number of Employees"], ["Employee: ".concat(response.employee), response.employee], ["Manager: ".concat(response.manager), response.manager], ["Director: ".concat(response.director), response.director], ["VP: ".concat(response.vp), response.vp]];
    });
    _defineProperty(_this, "getEmployeeTypeReport", function (employees) {
      var response = {
        full_time: 0,
        part_time: 0,
        contract: 0,
        seasonal: 0
      };
      employees.forEach(function (employee) {
        switch (employee.EmployeeType) {
          case "FullTime":
            response.full_time++;
            break;
          case "PartTime":
            response.part_time++;
            break;
          case "Contract":
            response.contract++;
            break;
          case "Seasonal":
            response.seasonal++;
            break;
          default:
            break;
        }
      });
      return [["Employee Type", "Number of Employees"], ["Full Time: ".concat(response.full_time, " "), response.full_time], ["Part Time: ".concat(response.part_time, " "), response.part_time], ["Contract: ".concat(response.contract, " "), response.contract], ["Seasonal: ".concat(response.seasonal, " "), response.seasonal]];
    });
    _defineProperty(_this, "getEmployeesReaching65Report", function (employees) {
      var response = {};
      var now = new Date();
      var sixMonthsFromNow = new Date();
      sixMonthsFromNow.setMonth(now.getMonth() + 6);
      employees.forEach(function (employee) {
        var dob = new Date(employee.DateOfBirth);
        var retirementDate = new Date(dob.setFullYear(dob.getFullYear() + 65));
        if (retirementDate >= now && retirementDate <= sixMonthsFromNow) {
          var month = retirementDate.toLocaleString('default', {
            month: 'long'
          });
          response[month] = (response[month] || 0) + 1;
        }
      });
      var months = [];
      for (var i = 0; i < 6; i++) {
        var month = new Date();
        month.setMonth(now.getMonth() + i);
        months.push(month.toLocaleString('default', {
          month: 'long'
        }));
      }
      var data = [["Month", "Number of Employees"]];
      months.forEach(function (month) {
        data.push([month, response[month] || 0]);
      });
      return data;
    });
    _defineProperty(_this, "fetchEmployees", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var query, response, result;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            query = "query {\n        getAllEmployees {\n          empId\n          FirstName\n          LastName\n          DateOfBirth\n          DateOfJoining\n          Title\n          Department\n          EmployeeType\n          CurrentStatus\n        }\n      }";
            _context2.next = 4;
            return fetch("".concat(_this.API_SERVER_URL), {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                query: query
              })
            });
          case 4:
            response = _context2.sent;
            if (response.ok) {
              _context2.next = 7;
              break;
            }
            throw new Error("Failed to fetch employees");
          case 7:
            _context2.next = 9;
            return response.json();
          case 9:
            result = _context2.sent;
            return _context2.abrupt("return", result.data.getAllEmployees);
          case 13:
            _context2.prev = 13;
            _context2.t0 = _context2["catch"](0);
            _this.setState({
              error: _context2.t0.message
            });
            return _context2.abrupt("return", []);
          case 17:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 13]]);
    })));
    _this.state = {
      data: [],
      department: [],
      title: [],
      dataReaching65: [],
      dataJoinedCurrentYear: [],
      dataJoinedLast3MonthsByDepartment: [],
      pieOptions: {
        legend: "none",
        chartArea: {
          left: 15,
          top: 15,
          right: 0,
          bottom: 0
        },
        pieSliceText: "label"
      },
      columnOptions: {
        legend: "none",
        chartArea: {
          width: "70%"
        },
        hAxis: {
          title: "Category"
        },
        vAxis: {
          title: "Number of Employees"
        },
        bar: {
          groupWidth: "30%"
        },
        series: {
          0: {
            color: "#4caf50"
          }
        }
      },
      reaching65BarOptions: {
        chartArea: {
          width: "70%",
          height: "70%"
        },
        hAxis: {
          title: "Number of Employees",
          textStyle: {
            color: "#333",
            fontSize: 12
          },
          format: 'decimal',
          titleTextStyle: {
            color: "#333",
            fontSize: 14,
            bold: true
          },
          viewWindow: {
            min: 0,
            max: 0
          },
          gridlines: {
            count: -1 // Draw gridlines for each tick
          },
          ticks: []
        },
        vAxis: {
          title: "Month",
          minValue: 0,
          textStyle: {
            color: "#333",
            fontSize: 12
          },
          titleTextStyle: {
            color: "#333",
            fontSize: 14,
            bold: true
          }
        },
        bars: "vertical",
        colors: ["#ff5722"],
        // Different color for bars
        bar: {
          groupWidth: "20%"
        },
        // Adjust width of bars
        legend: {
          position: "none"
        }
      },
      barOptions: {
        chartArea: {
          width: "30%",
          height: "30%"
        },
        hAxis: {
          title: "Number of Employees",
          minValue: 0,
          textStyle: {
            color: "#333",
            fontSize: 12
          },
          titleTextStyle: {
            color: "#333",
            fontSize: 14,
            bold: true
          }
        },
        vAxis: {
          title: "Title",
          textStyle: {
            color: "#333",
            fontSize: 12
          },
          titleTextStyle: {
            color: "#333",
            fontSize: 14,
            bold: true
          }
        },
        bars: "vertical",
        // Can be "horizontal" or "vertical"
        colors: ["#C5CAE9"],
        // Different colors for bars
        bar: {
          groupWidth: "30%"
        },
        // Adjust width of bars
        annotations: {
          always: true,
          textStyle: {
            fontSize: 12,
            color: '#000',
            // Black text color
            auraColor: 'none'
          }
        },
        legend: {
          position: "none"
        }
      },
      joinedLast3MonthsBarOptions: {
        title: "Employees Joined Last 3 Months by Department",
        chartArea: {
          width: "70%",
          height: "70%"
        },
        hAxis: {
          title: "Month",
          textStyle: {
            color: "#333",
            fontSize: 12
          },
          titleTextStyle: {
            color: "#333",
            fontSize: 14,
            bold: true
          }
        },
        vAxis: {
          title: "Number of Employees",
          minValue: 0,
          textStyle: {
            color: "#333",
            fontSize: 12
          },
          titleTextStyle: {
            color: "#333",
            fontSize: 14,
            bold: true
          }
        },
        bars: "vertical",
        colors: ["#ff5722", "#4caf50", "#2196f3", "#ff9800"],
        // Different colors for each department
        bar: {
          groupWidth: "30%"
        },
        legend: {
          position: "top"
        },
        annotations: {
          alwaysOutside: true,
          textStyle: {
            fontSize: 12,
            color: '#000',
            auraColor: 'none'
          }
        }
      },
      joinedCurrentYearBarOptions: {
        chartArea: {
          width: "70%",
          height: "70%"
        },
        hAxis: {
          title: "Month",
          textStyle: {
            color: "#333",
            fontSize: 12
          },
          titleTextStyle: {
            color: "#333",
            fontSize: 14,
            bold: true
          }
        },
        vAxis: {
          title: "Number of Employees",
          minValue: 0,
          textStyle: {
            color: "#333",
            fontSize: 12
          },
          titleTextStyle: {
            color: "#333",
            fontSize: 14,
            bold: true
          }
        },
        bars: "vertical",
        colors: ["#3f51b5"],
        // Different color for bars
        bar: {
          groupWidth: "20%"
        },
        // Adjust width of bars
        legend: 'none',
        annotations: {
          alwaysOutside: true,
          textStyle: {
            fontSize: 12,
            color: '#000',
            // Black text color
            auraColor: 'none'
          }
        }
      }
    };
    _this.API_SERVER_URL = "http://localhost:8000/graphql";
    return _this;
  }
  _inherits(EmployeeReport, _React$Component);
  return _createClass(EmployeeReport, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Employee Report"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "report"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        style: {
          width: "50%"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Employee by Type"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_google_charts__WEBPACK_IMPORTED_MODULE_1__.Chart, {
        chartType: "PieChart",
        data: this.state.type,
        options: _objectSpread(_objectSpread({}, this.state.pieOptions), {}, {
          title: "Employee Types",
          is3D: true,
          pieSliceText: "label",
          tooltip: {
            trigger: "both"
          },
          slices: {
            0: {
              offset: 0.1,
              color: "#9c27b0"
            },
            // Purple
            1: {
              offset: 0,
              color: "#009688"
            },
            // Teal
            2: {
              offset: 0,
              color: "#ff9800"
            },
            // Orange
            3: {
              offset: 0,
              color: "#9e9e9e"
            } // Grey
          }
        }),
        width: "100%",
        height: "300px"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        style: {
          width: "50%"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Employee by Titles"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_google_charts__WEBPACK_IMPORTED_MODULE_1__.Chart, {
        chartType: "ColumnChart",
        data: this.state.title,
        options: _objectSpread({}, this.state.columnOptions),
        width: "100%",
        height: "300px"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        style: {
          width: "95%",
          marginTop: "4em"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Employees Reaching Age 65 by Month"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_google_charts__WEBPACK_IMPORTED_MODULE_1__.Chart, {
        chartType: "BarChart",
        data: this.state.dataReaching65,
        options: this.state.reaching65BarOptions,
        width: "100%",
        height: "300px"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        style: {
          width: "50%"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Employee by Departments"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_google_charts__WEBPACK_IMPORTED_MODULE_1__.Chart, {
        chartType: "PieChart",
        data: this.state.department,
        options: _objectSpread(_objectSpread({}, this.state.pieOptions), {}, {
          title: "Employees by Departments",
          pieHole: 0.4,
          pieSliceText: "label",
          slices: [{
            color: "#a1887f"
          }, {
            color: "#004d40"
          }, {
            color: "#cddc39"
          }, {
            color: "#e91e63"
          }]
        }),
        width: "100%",
        height: "300px"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        style: {
          width: "50%"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Employees Joined This Year"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_google_charts__WEBPACK_IMPORTED_MODULE_1__.Chart, {
        chartType: "ColumnChart",
        data: this.state.dataJoinedCurrentYear,
        options: this.state.joinedCurrentYearBarOptions,
        width: "100%",
        height: "400px"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Employees Joined Last 3 Months by Department"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_google_charts__WEBPACK_IMPORTED_MODULE_1__.Chart, {
        width: "100%",
        height: "400px",
        chartType: "Bar",
        data: this.state.dataJoinedLast3MonthsByDepartment,
        options: this.state.joinedLast3MonthsBarOptions
      })))));
    }
  }]);
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));


/***/ }),

/***/ "./jsx/EmployeeSearch.jsx":
/*!********************************!*\
  !*** ./jsx/EmployeeSearch.jsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _withRouter_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./withRouter.jsx */ "./jsx/withRouter.jsx");
/* harmony import */ var _EmployeeUpdate_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EmployeeUpdate.jsx */ "./jsx/EmployeeUpdate.jsx");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }




var EmployeeSearch = /*#__PURE__*/function (_React$Component) {
  function EmployeeSearch() {
    _classCallCheck(this, EmployeeSearch);
    return _callSuper(this, EmployeeSearch);
  }
  _inherits(EmployeeSearch, _React$Component);
  return _createClass(EmployeeSearch, [{
    key: "render",
    value: function render() {
      var match = this.props.match;
      var id = match.params.id;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_EmployeeUpdate_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
        pagetitle: "Search Employee",
        isEmployeeDetailFetch: true,
        employeeId: id
      });
    }
  }]);
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));
EmployeeSearch.propTypes = {
  match: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_withRouter_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])(EmployeeSearch));

/***/ }),

/***/ "./jsx/EmployeeTable.jsx":
/*!*******************************!*\
  !*** ./jsx/EmployeeTable.jsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Filter_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Filter.jsx */ "./jsx/Filter.jsx");
/* harmony import */ var _withRouter_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./withRouter.jsx */ "./jsx/withRouter.jsx");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/parse.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/differenceInYears.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/differenceInMonths.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/differenceInDays.mjs");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }





var EmployeeTable = /*#__PURE__*/function (_React$Component) {
  function EmployeeTable() {
    var _this;
    _classCallCheck(this, EmployeeTable);
    _this = _callSuper(this, EmployeeTable);
    _defineProperty(_this, "fetchEmployees", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var query, response, result, employees;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            if (_this.props.employees) {
              _context.next = 16;
              break;
            }
            query = "query {\n\t\t\t\t\tgetAllEmployees {\n\t\t\t\t\t\tempId\n\t\t\t\t\t\tFirstName\n\t\t\t\t\t\tLastName\n\t\t\t\t\t\tDateOfBirth\n\t\t\t\t\t\tDateOfJoining\n\t\t\t\t\t\tTitle\n\t\t\t\t\t\tDepartment\n\t\t\t\t\t\tEmployeeType\n\t\t\t\t\t\tCurrentStatus\n\t\t\t\t\t}\n\t\t\t\t}";
            _context.next = 5;
            return fetch("".concat(_this.API_SERVER_URL), {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                query: query
              })
            });
          case 5:
            response = _context.sent;
            if (response.ok) {
              _context.next = 8;
              break;
            }
            throw new Error('Failed to fetch employees');
          case 8:
            _context.next = 10;
            return response.json();
          case 10:
            result = _context.sent;
            employees = result.data.getAllEmployees;
            _this.setState({
              employees: employees,
              filteredEmployees: employees,
              employeeCount: employees.length
            });
            if (!_this.props.isEmployeeDetailFetch) {
              _this.updateUpcomingRetirement(employees);
            }
            _context.next = 18;
            break;
          case 16:
            _this.setState({
              employees: _this.props.employees,
              filteredEmployees: _this.props.employees,
              employeeCount: _this.props.employees.length
            });
            if (!_this.props.isEmployeeDetailFetch) {
              _this.updateUpcomingRetirement(_this.props.employees);
            }
          case 18:
            _context.next = 23;
            break;
          case 20:
            _context.prev = 20;
            _context.t0 = _context["catch"](0);
            _this.setState({
              error: _context.t0.message
            });
          case 23:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 20]]);
    })));
    _defineProperty(_this, "updateUpcomingRetirement", function (employees) {
      var now = new Date();
      var sixMonthsFromNow = new Date();
      sixMonthsFromNow.setMonth(now.getMonth() + 6);
      var upcomingRetirement = employees.filter(function (employee) {
        var dob = new Date(employee.DateOfBirth);
        var retirementDate = new Date(dob.setFullYear(dob.getFullYear() + 65));
        return retirementDate >= now && retirementDate <= sixMonthsFromNow;
      });
      _this.setState({
        upcomingRetirementEmployees: upcomingRetirement
      });
    });
    _defineProperty(_this, "handleFilterChange", function (name, value) {
      _this.setState(function (prevState) {
        return {
          filters: _objectSpread(_objectSpread({}, prevState.filters), {}, _defineProperty({}, prevState.activeTab, _objectSpread(_objectSpread({}, prevState.filters[prevState.activeTab]), {}, _defineProperty({}, name, value))))
        };
      }, _this.applyFilters);
    });
    _defineProperty(_this, "applyFilters", function () {
      var _this$state = _this.state,
        employees = _this$state.employees,
        filters = _this$state.filters,
        activeTab = _this$state.activeTab,
        upcomingRetirementEmployees = _this$state.upcomingRetirementEmployees;
      if (activeTab === 'upcomingRetirement') {
        var filteredUpcomingRetirement = upcomingRetirementEmployees.filter(function (employee) {
          return (filters.upcomingRetirement.title === '' || employee.Title === filters.upcomingRetirement.title) && (filters.upcomingRetirement.department === '' || employee.Department === filters.upcomingRetirement.department) && (filters.upcomingRetirement.employeeType === '' || employee.EmployeeType === filters.upcomingRetirement.employeeType);
        });
        _this.setState({
          filteredEmployees: filteredUpcomingRetirement,
          employeeCount: filteredUpcomingRetirement.length
        });
      } else {
        var filteredEmployees = employees.filter(function (employee) {
          var dob = new Date(employee.DateOfBirth);
          var age = new Date().getFullYear() - dob.getFullYear();
          var ageRange = filters.all.ageRange;
          var _ref2 = ageRange ? ageRange.split('-').map(Number) : [0, Infinity],
            _ref3 = _slicedToArray(_ref2, 2),
            minAge = _ref3[0],
            maxAge = _ref3[1];
          return (filters.all.title === '' || employee.Title === filters.all.title) && (filters.all.department === '' || employee.Department === filters.all.department) && (filters.all.employeeType === '' || employee.EmployeeType === filters.all.employeeType) && age >= minAge && age <= maxAge;
        });
        _this.setState({
          filteredEmployees: filteredEmployees,
          employeeCount: filteredEmployees.length
        });
      }
      _this.applyQueryParams();
    });
    _defineProperty(_this, "applyQueryParams", function () {
      var _this$state2 = _this.state,
        filters = _this$state2.filters,
        activeTab = _this$state2.activeTab;
      var queryParams = new URLSearchParams();
      if (activeTab === 'all') {
        if (filters.all.title) queryParams.set('title', filters.all.title);
        if (filters.all.employeeType) queryParams.set('employeeType', filters.all.employeeType);
        if (filters.all.department) queryParams.set('department', filters.all.department);
        if (filters.all.ageRange) queryParams.set('ageRange', filters.all.ageRange);
      } else {
        if (filters.upcomingRetirement.title) queryParams.set('title', filters.upcomingRetirement.title);
        if (filters.upcomingRetirement.department) queryParams.set('department', filters.upcomingRetirement.department);
        if (filters.upcomingRetirement.employeeType) queryParams.set('employeeType', filters.upcomingRetirement.employeeType);
      }
      _this.props.match.navigate("/employee/filter?".concat(queryParams.toString()));
    });
    _defineProperty(_this, "toggleTab", function (tab) {
      _this.setState(function () {
        return {
          activeTab: tab,
          showUpcomingRetirement: tab === 'upcomingRetirement'
        };
      }, _this.applyFilters);
    });
    _defineProperty(_this, "calculateRetirement", function (dateOfBirth) {
      var dob = (0,date_fns__WEBPACK_IMPORTED_MODULE_3__.parse)(dateOfBirth, 'yyyy-MM-dd', new Date());

      // Assume retirement age is 65 years
      var retirementAge = 65;
      var retirementDate = new Date(dob);
      retirementDate.setFullYear(dob.getFullYear() + retirementAge);

      // Calculate time left for retirement
      var currentDate = new Date();
      var yearsLeft = (0,date_fns__WEBPACK_IMPORTED_MODULE_4__.differenceInYears)(retirementDate, currentDate);
      var monthsLeft = (0,date_fns__WEBPACK_IMPORTED_MODULE_5__.differenceInMonths)(retirementDate, currentDate) % 12;
      var daysLeft = (0,date_fns__WEBPACK_IMPORTED_MODULE_6__.differenceInDays)(retirementDate, new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 1)) % 30;
      return daysLeft + (daysLeft > 1 ? " days, " : " day, ") + monthsLeft + (monthsLeft > 1 ? " months, " : " month, ") + yearsLeft + (yearsLeft > 1 ? " years" : " year");
    });
    _this.state = {
      employees: [],
      filteredEmployees: [],
      upcomingRetirementEmployees: [],
      activeTab: 'all',
      // 'all' or 'upcomingRetirement'
      filters: {
        all: {
          title: '',
          department: '',
          employeeType: '',
          ageRange: ''
        },
        upcomingRetirement: {
          title: '',
          department: '',
          employeeType: ''
        }
      },
      showUpcomingRetirement: false
    };
    _this.API_SERVER_URL = "http://localhost:8000/graphql";
    return _this;
  }
  _inherits(EmployeeTable, _React$Component);
  return _createClass(EmployeeTable, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var employees;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (!(!this.props.isEmployeeDetailFetch && this.props.employees)) {
                _context2.next = 6;
                break;
              }
              employees = this.props.employees; // Assume props directly passed
              this.setState({
                employees: employees,
                filteredEmployees: employees,
                employeeCount: employees.length
              });
              this.updateUpcomingRetirement(employees);
              _context2.next = 8;
              break;
            case 6:
              _context2.next = 8;
              return this.fetchEmployees();
            case 8:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }
      return componentDidMount;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var rows = this.state.filteredEmployees.map(function (employee) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(EmployeeRow, {
          key: employee.empId,
          employee: employee,
          isEmployeeDetailFetch: _this2.props.isEmployeeDetailFetch,
          calculateRetirement: _this2.calculateRetirement
        });
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, this.props.isEmployeeDetailFetch ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, 'Employee Detail') : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, this.state.pagetitle), !this.props.isEmployeeDetailFetch && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "tabs"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        className: "tab-button ".concat(this.state.activeTab === 'all' ? 'active' : ''),
        onClick: function onClick() {
          return _this2.toggleTab('all');
        }
      }, "All Employees"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        className: "tab-button ".concat(this.state.activeTab === 'upcomingRetirement' ? 'active' : ''),
        onClick: function onClick() {
          return _this2.toggleTab('upcomingRetirement');
        }
      }, "Upcoming Retirements")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Filter_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
        onFilterChange: this.handleFilterChange,
        filters: this.state.filters[this.state.activeTab],
        activeTab: this.state.activeTab
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "table-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
        className: "table table-hover"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", {
        className: "thead-dark"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
        scope: "col"
      }, "EmpId"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
        scope: "col"
      }, "FirstName"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
        scope: "col"
      }, "LastName"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
        scope: "col"
      }, "DOB"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
        scope: "col"
      }, "DOJ"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
        scope: "col"
      }, "Title"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
        scope: "col"
      }, "Department"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
        scope: "col"
      }, "EmployeeType"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
        scope: "col"
      }, "CurrentStatus"), this.props.isEmployeeDetailFetch && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
        scope: "col"
      }, "Days until retirement"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, rows))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
        className: "rowCount"
      }, "Total Rows: ", this.state.employeeCount));
    }
  }]);
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));
var EmployeeRow = function EmployeeRow(_ref4) {
  var employee = _ref4.employee,
    isEmployeeDetailFetch = _ref4.isEmployeeDetailFetch,
    calculateRetirement = _ref4.calculateRetirement;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, isEmployeeDetailFetch ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, employee.empId) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    target: "_blank",
    rel: "noreferrer",
    href: "#/employee/detail/".concat(employee.empId)
  }, employee.empId)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, employee.FirstName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, employee.LastName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, employee.DateOfBirth), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, employee.DateOfJoining), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, employee.Title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, employee.Department), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, employee.EmployeeType), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, employee.CurrentStatus ? 'Active' : 'Inactive'), isEmployeeDetailFetch && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, calculateRetirement(employee.DateOfBirth)));
};
EmployeeRow.propTypes = {
  employee: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().object).isRequired,
  isEmployeeDetailFetch: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool)
};
EmployeeTable.propTypes = {
  title: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().string),
  employeeType: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().string),
  department: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().string),
  pagetitle: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().string),
  employees: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().array),
  match: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().object).isRequired,
  isEmployeeDetailFetch: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_withRouter_jsx__WEBPACK_IMPORTED_MODULE_2__["default"])(EmployeeTable));

/***/ }),

/***/ "./jsx/EmployeeUpdate.jsx":
/*!********************************!*\
  !*** ./jsx/EmployeeUpdate.jsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EmployeeUpdate)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _EmployeeCreate_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EmployeeCreate.jsx */ "./jsx/EmployeeCreate.jsx");
/* harmony import */ var _Alert_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Alert.jsx */ "./jsx/Alert.jsx");
/* harmony import */ var _EmployeeTable_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EmployeeTable.jsx */ "./jsx/EmployeeTable.jsx");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }





var EmployeeUpdate = /*#__PURE__*/function (_React$Component) {
  function EmployeeUpdate() {
    var _this;
    _classCallCheck(this, EmployeeUpdate);
    _this = _callSuper(this, EmployeeUpdate);
    _defineProperty(_this, "fetchEmployeeById", /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(employeeId) {
        var employee, query, variables, response;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              employee = undefined;
              try {
                employeeId = parseInt(employeeId);
              } catch (e) {
                employeeId = 0;
                console.log(e);
              }
              _context.prev = 2;
              query = "query($id: Int!) {\n                            getEmployeeById(empId: $id) {\n                                empId\n                                FirstName\n                                LastName\n\t\t\t\t\t\t\t\tDateOfBirth\n                                DateOfJoining\n                                Title\n                                Department\n                                EmployeeType\n                                CurrentStatus\n                            }\n                        }";
              variables = {
                id: employeeId
              };
              _context.next = 7;
              return fetch("".concat(_this.API_SERVER_URL), {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  query: query,
                  variables: variables
                })
              });
            case 7:
              response = _context.sent;
              if (response.ok) {
                _context.next = 10;
                break;
              }
              throw new Error('Failed to fetch employees');
            case 10:
              _context.next = 12;
              return response.json();
            case 12:
              employee = _context.sent.data.getEmployeeById;
              _this.setState({
                showAlert: true,
                alertMessage: employee == undefined ? 'Employee details not found!' : 'Employee details fetched successfully!',
                result: employee == undefined ? false : true
              });
              _this.resetAlert();
              _context.next = 23;
              break;
            case 17:
              _context.prev = 17;
              _context.t0 = _context["catch"](2);
              employee = undefined;
              console.log(_context.t0);
              _this.setState({
                showAlert: true,
                alertMessage: 'Employee details not found!',
                result: false
              });
              _this.resetAlert();
            case 23:
              return _context.abrupt("return", employee);
            case 24:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[2, 17]]);
      }));
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
    _defineProperty(_this, "handleChange", function (e) {
      var value = e.target.value;
      _this.setState({
        employeeId: value
      });
    });
    _defineProperty(_this, "handleSubmit", /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(e) {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              e.preventDefault();
              _context2.t0 = _this;
              _context2.next = 4;
              return _this.fetchEmployeeById(_this.state.employeeId);
            case 4:
              _context2.t1 = _context2.sent;
              _context2.next = 7;
              return _this.fetchEmployeeById(_this.state.employeeId);
            case 7:
              _context2.t2 = _context2.sent;
              _context2.t3 = [_context2.t2];
              _context2.t4 = {
                employee: _context2.t1,
                employees: _context2.t3
              };
              _context2.t0.setState.call(_context2.t0, _context2.t4);
            case 11:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }());
    _defineProperty(_this, "updateEmployee", /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(employee) {
        var updateResponse, fieldsToUpdate, fieldsString, mutation, response;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              updateResponse = undefined;
              _context3.prev = 1;
              fieldsToUpdate = [];
              if (employee.FirstName) fieldsToUpdate.push("FirstName: \"".concat(employee.FirstName, "\""));
              if (employee.LastName) fieldsToUpdate.push("LastName: \"".concat(employee.LastName, "\""));
              if (employee.DateOfBirth) fieldsToUpdate.push("DateOfBirth: \"".concat(employee.DateOfBirth, "\""));
              if (employee.DateOfJoining) fieldsToUpdate.push("DateOfJoining: \"".concat(employee.DateOfJoining, "\""));
              if (employee.Title) fieldsToUpdate.push("Title: \"".concat(employee.Title, "\""));
              if (employee.Department) fieldsToUpdate.push("Department: \"".concat(employee.Department, "\""));
              if (employee.EmployeeType) fieldsToUpdate.push("EmployeeType: \"".concat(employee.EmployeeType, "\""));
              if (employee.CurrentStatus !== undefined) fieldsToUpdate.push("CurrentStatus: ".concat(employee.CurrentStatus));
              fieldsString = fieldsToUpdate.join(', ');
              mutation = "\n                mutation {\n                    updateEmployee(\n                        empId: ".concat(parseInt(_this.state.employeeId), ",\n                        ").concat(fieldsString, "\n                    ) {\n                        FirstName\n                        LastName\n\t\t\t\t\t\tDateOfBirth\n                        DateOfJoining\n                        Title\n                        Department\n                        EmployeeType\n                        CurrentStatus\n                    }\n                }\n            ");
              _context3.next = 15;
              return fetch("".concat(_this.API_SERVER_URL), {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  query: mutation
                })
              });
            case 15:
              response = _context3.sent;
              if (response.ok) {
                _context3.next = 18;
                break;
              }
              throw new Error('Failed to update employee');
            case 18:
              _context3.next = 20;
              return response.json();
            case 20:
              updateResponse = _context3.sent.data.updateEmployee;
              _this.setState({
                showAlert: true,
                alertMessage: 'Employee Record updated successfully!',
                result: true
              });
              _this.resetAlert();
              _context3.next = 31;
              break;
            case 25:
              _context3.prev = 25;
              _context3.t0 = _context3["catch"](1);
              console.log(_context3.t0);
              updateResponse = undefined;
              _this.setState({
                showAlert: true,
                alertMessage: 'Error updating employee record!',
                result: false
              });
              _this.resetAlert();
            case 31:
              return _context3.abrupt("return", updateResponse);
            case 32:
            case "end":
              return _context3.stop();
          }
        }, _callee3, null, [[1, 25]]);
      }));
      return function (_x3) {
        return _ref3.apply(this, arguments);
      };
    }());
    _defineProperty(_this, "resetAlert", function () {
      clearTimeout(_this.timeout);
      _this.timeout = setTimeout(function () {
        _this.setState({
          showAlert: false
        });
        clearTimeout(_this.timeout);
      }, 4000);
    });
    _this.state = {
      employeeId: '',
      pagetitle: 'Update Employee',
      employee: undefined,
      btnValue: 'Fetch Employee',
      employees: []
    };
    _this.API_SERVER_URL = "http://localhost:8000/graphql";
    return _this;
  }
  _inherits(EmployeeUpdate, _React$Component);
  return _createClass(EmployeeUpdate, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              if (this.props.pagetitle) {
                this.setState({
                  pagetitle: this.props.pagetitle
                });
              }
              if (!this.props.isEmployeeDetailFetch) {
                _context4.next = 15;
                break;
              }
              this.setState({
                isEmployeeDetailFetch: this.props.isEmployeeDetailFetch
              });
              if (!this.props.employeeId) {
                _context4.next = 15;
                break;
              }
              this.setState({
                employeeId: this.props.employeeId
              });
              _context4.t0 = this;
              _context4.next = 8;
              return this.fetchEmployeeById(this.props.employeeId);
            case 8:
              _context4.t1 = _context4.sent;
              _context4.next = 11;
              return this.fetchEmployeeById(this.props.employeeId);
            case 11:
              _context4.t2 = _context4.sent;
              _context4.t3 = [_context4.t2];
              _context4.t4 = {
                employee: _context4.t1,
                employees: _context4.t3
              };
              _context4.t0.setState.call(_context4.t0, _context4.t4);
            case 15:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }
      return componentDidMount;
    }()
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, this.state.showAlert && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Alert_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
        message: this.state.alertMessage,
        result: this.state.result
      }), this.state.employee != undefined ? this.state.isEmployeeDetailFetch ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_EmployeeTable_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
        employees: this.state.employees,
        pagetitle: "Search Results",
        isEmployeeDetailFetch: this.state.isEmployeeDetailFetch
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_EmployeeCreate_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
        employee: this.state.employee,
        pagetitle: this.state.pagetitle,
        updateEmployee: this.updateEmployee,
        deleteEmployee: this.props.deleteEmployee,
        employeeId: this.state.employeeId,
        handleDeleteClick: this.props.handleDeleteClick
      }) : !(this.state.employeeId && this.state.employee) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, this.state.pagetitle), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
        onSubmit: this.handleSubmit
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
        htmlFor: "id",
        className: "required"
      }, "Employee Id:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
        type: "string",
        id: "id",
        name: "id",
        className: "form-control",
        onBlur: this.handleChange,
        required: true
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
        type: "submit",
        className: "btn btn-primary btn-lg btn-block",
        value: this.state.btnValue
      }))));
    }
  }]);
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));

EmployeeUpdate.propTypes = {
  pagetitle: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),
  isEmployeeDetailFetch: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),
  employeeId: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),
  deleteEmployee: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),
  handleDeleteClick: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func)
};

/***/ }),

/***/ "./jsx/ErrorPage.jsx":
/*!***************************!*\
  !*** ./jsx/ErrorPage.jsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ErrorPage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }

var ErrorPage = /*#__PURE__*/function (_React$Component) {
  function ErrorPage() {
    _classCallCheck(this, ErrorPage);
    return _callSuper(this, ErrorPage);
  }
  _inherits(ErrorPage, _React$Component);
  return _createClass(ErrorPage, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, " Sorry! Page not found ");
    }
  }]);
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));


/***/ }),

/***/ "./jsx/Filter.jsx":
/*!************************!*\
  !*** ./jsx/Filter.jsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Filter)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


var Filter = /*#__PURE__*/function (_React$Component) {
  function Filter() {
    var _this;
    _classCallCheck(this, Filter);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, Filter, [].concat(args));
    _defineProperty(_this, "handleFilterChange", function (e) {
      var _e$target = e.target,
        name = _e$target.name,
        value = _e$target.value;
      _this.props.onFilterChange(name, value);
    });
    return _this;
  }
  _inherits(Filter, _React$Component);
  return _createClass(Filter, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        filters = _this$props.filters,
        activeTab = _this$props.activeTab;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "filters"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", {
        name: "title",
        value: filters.title,
        onChange: this.handleFilterChange
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
        value: ""
      }, "All Titles"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
        value: "Employee"
      }, "Employee"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
        value: "Manager"
      }, "Manager"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
        value: "Director"
      }, "Director"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
        value: "VP"
      }, "VP")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", {
        name: "department",
        value: filters.department,
        onChange: this.handleFilterChange
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
        value: ""
      }, "All Departments"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
        value: "IT"
      }, "IT"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
        value: "Marketing"
      }, "Marketing"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
        value: "HR"
      }, "HR"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
        value: "Engineering"
      }, "Engineering")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", {
        name: "employeeType",
        value: filters.employeeType,
        onChange: this.handleFilterChange
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
        value: ""
      }, "All Employee Types"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
        value: "FullTime"
      }, "Full Time"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
        value: "PartTime"
      }, "Part Time"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
        value: "Contract"
      }, "Contract"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
        value: "Seasonal"
      }, "Seasonal")), activeTab === 'all' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", {
        name: "ageRange",
        value: filters.ageRange,
        onChange: this.handleFilterChange
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
        value: ""
      }, "All Ages"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
        value: "20-25"
      }, "20-25"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
        value: "25-30"
      }, "25-30"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
        value: "30-35"
      }, "30-35"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
        value: "35-40"
      }, "35-40"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
        value: "40-45"
      }, "40-45"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
        value: "45-50"
      }, "45-50"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
        value: "50-55"
      }, "50-55"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
        value: "55-60"
      }, "55-60"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
        value: "60-65"
      }, "60-65")));
    }
  }]);
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));

Filter.propTypes = {
  filters: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  onFilterChange: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  activeTab: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};

/***/ }),

/***/ "./jsx/NavPage.jsx":
/*!*************************!*\
  !*** ./jsx/NavPage.jsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NavPage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _EmployeeTable_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EmployeeTable.jsx */ "./jsx/EmployeeTable.jsx");
/* harmony import */ var _EmployeeCreate_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EmployeeCreate.jsx */ "./jsx/EmployeeCreate.jsx");
/* harmony import */ var _ErrorPage_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ErrorPage.jsx */ "./jsx/ErrorPage.jsx");
/* harmony import */ var _EmployeeSearch_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./EmployeeSearch.jsx */ "./jsx/EmployeeSearch.jsx");
/* harmony import */ var _EmployeeUpdate_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./EmployeeUpdate.jsx */ "./jsx/EmployeeUpdate.jsx");
/* harmony import */ var _EmployeeDelete_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./EmployeeDelete.jsx */ "./jsx/EmployeeDelete.jsx");
/* harmony import */ var _EmployeeFilter_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./EmployeeFilter.jsx */ "./jsx/EmployeeFilter.jsx");
/* harmony import */ var _ReloadingNavLink_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ReloadingNavLink.jsx */ "./jsx/ReloadingNavLink.jsx");
/* harmony import */ var _EmployeeReport_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./EmployeeReport.jsx */ "./jsx/EmployeeReport.jsx");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }











var NavPage = /*#__PURE__*/function (_React$Component) {
  function NavPage() {
    _classCallCheck(this, NavPage);
    return _callSuper(this, NavPage, arguments);
  }
  _inherits(NavPage, _React$Component);
  return _createClass(NavPage, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Employee Management"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("nav", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ReloadingNavLink_jsx__WEBPACK_IMPORTED_MODULE_8__["default"], {
        to: "/"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
        className: "bi bi-people"
      }), " All Employees"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ReloadingNavLink_jsx__WEBPACK_IMPORTED_MODULE_8__["default"], {
        to: "/employee/create"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
        className: "bi bi-person-plus"
      }), " Create Employee"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ReloadingNavLink_jsx__WEBPACK_IMPORTED_MODULE_8__["default"], {
        to: "/employee/update"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
        className: "bi bi-pencil-square"
      }), " Update Employee"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ReloadingNavLink_jsx__WEBPACK_IMPORTED_MODULE_8__["default"], {
        to: "/employee/delete"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
        className: "bi bi-trash"
      }), " Delete Employee"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ReloadingNavLink_jsx__WEBPACK_IMPORTED_MODULE_8__["default"], {
        to: "/employee/search"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
        className: "bi bi-search"
      }), " Search Employee"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ReloadingNavLink_jsx__WEBPACK_IMPORTED_MODULE_8__["default"], {
        to: "/employee/report"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
        className: "bi bi-bar-chart"
      }), " Employee Report"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("main", {
        id: "main"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
        path: "/",
        element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_EmployeeTable_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], null)
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
        path: "/employee/create",
        element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_EmployeeCreate_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], null)
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
        path: "/employee/update",
        element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_EmployeeUpdate_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], null)
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
        path: "/employee/search",
        element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_EmployeeSearch_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], null)
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
        path: "/employee/search/:id",
        element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_EmployeeSearch_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], null)
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
        path: "/employee/delete",
        element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_EmployeeDelete_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], null)
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
        path: "/employee/filter",
        element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_EmployeeFilter_jsx__WEBPACK_IMPORTED_MODULE_7__["default"], null)
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
        path: "/employee/detail/:id",
        element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_EmployeeSearch_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], null)
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
        path: "/employee/report",
        element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_EmployeeReport_jsx__WEBPACK_IMPORTED_MODULE_9__["default"], null)
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
        path: "*",
        element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ErrorPage_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], null)
      }))));
    }
  }]);
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));


/***/ }),

/***/ "./jsx/ReloadingNavLink.jsx":
/*!**********************************!*\
  !*** ./jsx/ReloadingNavLink.jsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
var _excluded = ["to", "children"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }



var ReloadingNavLink = function ReloadingNavLink(_ref) {
  var to = _ref.to,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, _excluded);
  var handleClick = function handleClick(event) {
    event.preventDefault();
    window.location.href = '/#' + to;
    window.location.reload(true);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.NavLink, _extends({
    to: to,
    onClick: handleClick
  }, props), children);
};
ReloadingNavLink.propTypes = {
  to: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  children: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().array)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReloadingNavLink);

/***/ }),

/***/ "./jsx/validator.js":
/*!**************************!*\
  !*** ./jsx/validator.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   handleValidation: () => (/* binding */ handleValidation)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);


//Validate Name
var validateName = function validateName(name) {
  var response = {
    isValid: true
  };
  if (typeof name !== 'string') {
    response.isValid = false;
    response.message = 'Name must be a string.';
  }
  if (name.trim().length === 0) {
    response.isValid = false;
    response.message = 'Name cannot be empty.';
  }
  var regex = /^[a-zA-Z ]+$/;
  if (!regex.test(name)) {
    response.isValid = false;
    response.message = 'Name can only contain letters.';
  }
  return response;
};

//Validate Age
var validateAge = function validateAge(age) {
  var response = {
    isValid: true
  };
  age = parseInt(age);
  if (age < 20 || age > 70) {
    response.isValid = false;
    response.message = 'Age must be between 20 and 70.';
    return response;
  }
  return response;
};

//Validate Date
var validateDate = function validateDate(date) {
  var response = {
    isValid: true
  };
  if (typeof date !== 'string') {
    response.isValid = false;
    response.message = 'Date must be a string.';
    return response;
  }
  var parsedDate = new Date(date);
  if (isNaN(parsedDate.getDate())) {
    response.isValid = false;
    response.message = 'Invalid date format.';
    return response;
  }
  return response;
};

//Validate Title
var validateTitle = function validateTitle(title) {
  var response = {
    isValid: true
  };
  var validTitles = ['Employee', 'Manager', 'Director', 'VP'];
  if (!validTitles.includes(title)) {
    response.isValid = false;
    response.message = 'Invalid Title.';
    return response;
  }
  return response;
};

//Validate Department
var validateDepartment = function validateDepartment(department) {
  var response = {
    isValid: true
  };
  var validDepartments = ['IT', 'Marketing', 'HR', 'Engineering'];
  if (!validDepartments.includes(department)) {
    response.isValid = false;
    response.message = 'Invalid Department.';
    return response;
  }
  return response;
};

//Validate EmployeeType
var validateEmployeeType = function validateEmployeeType(employeeType) {
  var response = {
    isValid: true
  };
  var validEmployeeTypes = ['FullTime', 'PartTime', 'Contract', 'Seasonal'];
  if (!validEmployeeTypes.includes(employeeType)) {
    response.isValid = false;
    response.message = 'Invalid Department.';
    return response;
  }
  return response;
};
var handleValidation = function handleValidation(name, value) {
  var response = {};
  switch (name) {
    case 'FirstName':
      response = validateName(value);
      break;
    case 'LastName':
      response = validateName(value);
      break;
    case 'DateOfBirth':
      response = validateDate(value);
      break;
    case 'DateOfJoining':
      response = validateDate(value);
      break;
    case 'Title':
      response = validateTitle(value);
      break;
    case 'Department':
      response = validateDepartment(value);
      break;
    case 'EmployeeType':
      response = validateEmployeeType(value);
      break;
    default:
      return {
        isValid: false,
        message: 'Invalid field name'
      };
  }
  var element = jquery__WEBPACK_IMPORTED_MODULE_0___default()("#".concat(name));
  if (!response.isValid) {
    element.removeClass('is-invalid');
    element.addClass('is-invalid');
    element.siblings('div').text(response.message);
  } else {
    element.removeClass('is-invalid');
    element.siblings('div').text('');
  }
  return response;
};

/***/ }),

/***/ "./jsx/withRouter.jsx":
/*!****************************!*\
  !*** ./jsx/withRouter.jsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }


var withRouter = function withRouter(WrappedComponent) {
  var WithRouterComponent = function WithRouterComponent(props) {
    var params = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useParams)();
    var location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useLocation)();
    var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useNavigate)();
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(WrappedComponent, _extends({}, props, {
      match: {
        params: params,
        location: location,
        navigate: navigate
      }
    }));
  };
  WithRouterComponent.displayName = "WithRouter(".concat(WrappedComponent.displayName || WrappedComponent.name || 'Component', ")");
  return WithRouterComponent;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (withRouter);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunksuryaprakashnagarajan_assignment1"] = self["webpackChunksuryaprakashnagarajan_assignment1"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], () => (__webpack_require__("./jsx/App.jsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=app.bundle.js.map