"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _constants = require("../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = _propTypes["default"].oneOfType([_propTypes["default"].bool, _propTypes["default"].oneOf([_constants.START_DATE, _constants.END_DATE])]);

exports["default"] = _default;