(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["ReactBreakParagraph"] = factory(require("react"));
	else
		root["ReactBreakParagraph"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "lib/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _BreakParagraph = __webpack_require__(2);

	Object.defineProperty(exports, 'BreakParagraph', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_BreakParagraph).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var BreakParagraph = function (_Component) {
	  _inherits(BreakParagraph, _Component);

	  function BreakParagraph(props) {
	    _classCallCheck(this, BreakParagraph);

	    var _this = _possibleConstructorReturn(this, (BreakParagraph.__proto__ || Object.getPrototypeOf(BreakParagraph)).call(this, props));

	    _this.breakPara = function () {
	      var lines = [];
	      var tops = [];
	      _this.spans.forEach(function (span) {
	        var _offsetTop = span.offsetTop;
	        var topIndex = tops.indexOf(_offsetTop);
	        if (topIndex > -1) {
	          if (!lines[topIndex]) lines[topIndex] = [];
	          lines[topIndex].push(span.innerText.trim());
	        } else {
	          topIndex = tops.length;
	          tops[tops.length] = _offsetTop;
	          if (!lines[topIndex]) lines[topIndex] = [];
	          lines[topIndex].push(span.innerText.trim());
	        }
	      });
	      lines = lines.map(function (line) {
	        return line.join(' ');
	      });

	      _this.setState({
	        breakParagraph: true,
	        lines: lines
	      });
	    };

	    _this.spans = [];
	    _this.state = {
	      breakParagraph: false
	    };
	    return _this;
	  }

	  _createClass(BreakParagraph, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;

	      setTimeout(function () {
	        _this2.breakPara();
	      });
	      window.onresize = function () {
	        return _this2.breakPara();
	      };
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this3 = this;

	      var _state = this.state,
	          breakParagraph = _state.breakParagraph,
	          lines = _state.lines;
	      var _props = this.props,
	          paragraph = _props.paragraph,
	          renderPlaceholder = _props.renderPlaceholder,
	          renderLines = _props.renderLines;


	      var spans = paragraph.split(' ').map(function (word, i) {
	        return _react2.default.createElement(
	          'span',
	          { key: i, ref: function ref(elem) {
	              return _this3.spans[i] = elem;
	            } },
	          word,
	          ' '
	        );
	      });
	      return _react2.default.createElement(
	        'div',
	        { style: {
	            width: '100%',
	            position: 'relative',
	            padding: 0
	          } },
	        _react2.default.createElement(
	          'div',
	          { style: {
	              opacity: 0,
	              position: 'absolute',
	              width: '100%'
	            } },
	          renderPlaceholder(spans)
	        ),
	        breakParagraph && renderLines(lines)
	      );
	    }
	  }]);

	  return BreakParagraph;
	}(_react.Component);

	BreakParagraph.propTypes = {
	  paragraph: _react.PropTypes.string.isRequired,
	  renderPlaceholder: _react.PropTypes.func.isRequired,
	  renderLines: _react.PropTypes.func.isRequired
	};
		exports.default = BreakParagraph;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=react-break-paragraph.map