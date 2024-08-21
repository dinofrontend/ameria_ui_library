import { _ as _defineProperty } from '../../defineProperty-d5787266.js';
import React from 'react';
import classNames from 'classnames';
import '../../typeof-3b51e673.js';

var IconBriefcase = function IconBriefcase(_ref) {
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
    d: "M8.75 3H15.25C15.6297 3 15.9435 3.28215 15.9932 3.64823L16 3.75V7H17.75C19.5449 7 21 8.45507 21 10.25V16.75C21 18.5449 19.5449 20 17.75 20H6.25C4.45507 20 3 18.5449 3 16.75V10.25C3 8.45507 4.45507 7 6.25 7H8V3.75C8 3.3703 8.28215 3.05651 8.64823 3.00685L8.75 3H15.25H8.75ZM17.75 8.5H6.25C5.2835 8.5 4.5 9.2835 4.5 10.25V16.75C4.5 17.7165 5.2835 18.5 6.25 18.5H17.75C18.7165 18.5 19.5 17.7165 19.5 16.75V10.25C19.5 9.2835 18.7165 8.5 17.75 8.5ZM14.5 4.5H9.5V7H14.5V4.5Z",
    fill: "#222222"
  })));
};

export { IconBriefcase, IconBriefcase as default };
