import { _ as _defineProperty } from '../../defineProperty-d5787266.js';
import React from 'react';
import classNames from 'classnames';
import '../../typeof-3b51e673.js';

var IconAdd = function IconAdd(_ref) {
  var size = _ref.size,
    type = _ref.type,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className,
    onClick = _ref.onClick,
    refHandler = _ref.refHandler,
    id = _ref.id,
    dataId = _ref.dataId;
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: classNames('svg-icon', _defineProperty(_defineProperty(_defineProperty({}, "svg-icon__size-".concat(size), size), "svg-icon__type-".concat(type), type), className, className)),
    viewBox: "0 0 24 24",
    fill: "none",
    onClick: onClick,
    ref: refHandler,
    id: id,
    "data-id": dataId ? "".concat(dataId, "-svg-icon") : ''
  }, /*#__PURE__*/React.createElement("path", {
    d: "M11.7501 3C12.1298 3 12.4436 3.28201 12.4934 3.64808L12.5002 3.74985L12.5014 11H19.7545C20.1687 11 20.5045 11.3358 20.5045 11.75C20.5045 12.1297 20.2224 12.4435 19.8563 12.4932L19.7545 12.5H12.5014L12.5035 19.7491C12.5036 20.1633 12.1679 20.4993 11.7536 20.4993C11.3739 20.4993 11.0601 20.2173 11.0104 19.8512L11.0035 19.7494L11.0014 12.5H3.75244C3.33823 12.5 3.00244 12.1642 3.00244 11.75C3.00244 11.3703 3.2846 11.0565 3.65067 11.0068L3.75244 11H11.0014L11.0002 3.75015C11.0002 3.33594 11.3359 3 11.7501 3Z",
    fill: "#222222"
  }));
};

export { IconAdd, IconAdd as default };
