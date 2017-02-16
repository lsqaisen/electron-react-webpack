webpackJsonp([0,3],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },

/***/ 1:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(29);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	__webpack_require__(167);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by lai on 2016/7/15.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	var App = function (_React$Component) {
	    _inherits(App, _React$Component);

	    function App(props) {
	        _classCallCheck(this, App);

	        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

	        _this.state = {};
	        return _this;
	    }

	    _createClass(App, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: 'login-box' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'logo' },
	                    'logo'
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'login-item' },
	                    _react2.default.createElement(
	                        'label',
	                        null,
	                        '\u7528\u6237\u540D'
	                    ),
	                    _react2.default.createElement('input', { type: 'text', placeholder: '\u8F93\u5165\u7528\u6237\u540D' })
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'login-item' },
	                    _react2.default.createElement(
	                        'label',
	                        null,
	                        '\u5BC6\u7801'
	                    ),
	                    _react2.default.createElement('input', { type: 'text', placeholder: '\u8F93\u5165\u7528\u6237\u5BC6\u7801' })
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'login-btn' },
	                    _react2.default.createElement(
	                        'button',
	                        null,
	                        '\u767B\u5F55'
	                    )
	                )
	            );
	        }
	    }]);

	    return App;
	}(_react2.default.Component);

	_reactDom2.default.render(_react2.default.createElement(App, null), document.getElementById('root'));

/***/ },

/***/ 167:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

});