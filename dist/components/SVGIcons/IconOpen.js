import { _ as _defineProperty } from '../../defineProperty-d5787266.js';
import React from 'react';
import classNames from 'classnames';
import '../../typeof-3b51e673.js';

var IconOpen = function IconOpen(_ref) {
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
  }, /*#__PURE__*/React.createElement("g", {
    id: "Size=24, Theme=Regular"
  }, /*#__PURE__*/React.createElement("path", {
    id: "Shape",
    d: "M6.24992 4.5C5.28344 4.5 4.49996 5.2835 4.49996 6.25V17.75C4.49996 18.7165 5.28344 19.5 6.24992 19.5H17.7496C18.7161 19.5 19.4996 18.7165 19.4996 17.75V13.75C19.4996 13.3358 19.8354 13 20.2496 13C20.6638 13 20.9995 13.3358 20.9995 13.75V17.75C20.9995 19.5449 19.5445 21 17.7496 21H6.24992C4.45504 21 3 19.5449 3 17.75V6.25C3 4.45507 4.45504 3 6.24992 3H10.2498C10.664 3 10.9998 3.33579 10.9998 3.75C10.9998 4.16421 10.664 4.5 10.2498 4.5H6.24992ZM12.9998 3.75C12.9998 3.33579 13.3355 3 13.7497 3H20.25C20.6642 3 21 3.33579 21 3.75V10.25C21 10.6642 20.6642 11 20.25 11C19.8358 11 19.5 10.6642 19.5 10.25V5.56074L14.28 10.7804C13.9871 11.0732 13.5123 11.0732 13.2194 10.7803C12.9265 10.4874 12.9265 10.0125 13.2194 9.71964L18.4395 4.5H13.7497C13.3355 4.5 12.9998 4.16421 12.9998 3.75Z",
    fill: "#222222"
  })));
};

export { IconOpen, IconOpen as default };
