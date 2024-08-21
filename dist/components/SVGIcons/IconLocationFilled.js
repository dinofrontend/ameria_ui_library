import { _ as _defineProperty } from '../../defineProperty-d5787266.js';
import React from 'react';
import classNames from 'classnames';
import '../../typeof-3b51e673.js';

var IconLocationFilled = function IconLocationFilled(_ref) {
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
    id: "Size=24, Theme=Filled"
  }, /*#__PURE__*/React.createElement("path", {
    id: "Shape",
    d: "M18.157 16.8823L16.97 18.0562C16.0952 18.9149 14.96 20.0188 13.5642 21.3684C12.6919 22.2117 11.3081 22.2116 10.436 21.3681L6.9449 17.9723C6.50614 17.5414 6.13887 17.1781 5.84303 16.8823C2.44262 13.4819 2.44262 7.96872 5.84303 4.56831C9.24344 1.1679 14.7566 1.1679 18.157 4.56831C21.5574 7.96872 21.5574 13.4819 18.157 16.8823ZM14.5002 11C14.5002 9.61918 13.3808 8.4998 12 8.4998C10.6192 8.4998 9.49982 9.61918 9.49982 11C9.49982 12.3808 10.6192 13.5002 12 13.5002C13.3808 13.5002 14.5002 12.3808 14.5002 11Z",
    fill: "#222222"
  })));
};

export { IconLocationFilled, IconLocationFilled as default };
