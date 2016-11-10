'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _reactRedux = require('react-redux');

var _recompose = require('recompose');

var _reactCssModulesClassnames = require('react-css-modules-classnames');

var _reactCssModulesClassnames2 = _interopRequireDefault(_reactCssModulesClassnames);

var _reactTapProps = require('react-tap-props');

var _reactTapProps2 = _interopRequireDefault(_reactTapProps);

var _ramda = require('ramda');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var component = function component(_ref) {
	var tap = _ref.tap,
	    state = _ref.state,
	    actions = _ref.actions,
	    styles = _ref.styles,
	    update = _ref.update;

	var F = [_ramda.identity];

	if (state || actions) F.push((0, _reactRedux.connect)(state, actions));
	if (update) F.push((0, _recompose.onlyUpdateForKeys)(update));
	if (tap) F.push((0, _reactTapProps2.default)(tap));
	if (styles) F.push((0, _reactCssModulesClassnames2.default)(styles));

	return _ramda.compose.apply(undefined, F);
};

exports.default = component;