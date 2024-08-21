import { _ as _defineProperty } from '../../defineProperty-d5787266.js';
import React from 'react';
import classNames from 'classnames';
import '../../typeof-3b51e673.js';

var IconCalendarDayFilled = function IconCalendarDayFilled(_ref) {
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
    d: "M18 3C19.7949 3 21.25 4.45507 21.25 6.25V17.75C21.25 19.5449 19.7949 21 18 21H6.5C4.70507 21 3.25 19.5449 3.25 17.75V6.25C3.25 4.45507 4.70507 3 6.5 3H18ZM16.5 11H8C7.6203 11 7.30651 11.2822 7.25685 11.6482L7.25 11.75V16.25C7.25 16.6297 7.53215 16.9435 7.89823 16.9932L8 17H16.5C16.8797 17 17.1935 16.7178 17.2432 16.3518L17.25 16.25V11.75C17.25 11.3703 16.9678 11.0565 16.6018 11.0068L16.5 11ZM15.75 12.5V15.5H8.75V12.5H15.75ZM16.5 7.25H8C7.58579 7.25 7.25 7.58579 7.25 8C7.25 8.41421 7.58579 8.75 8 8.75H16.5C16.9142 8.75 17.25 8.41421 17.25 8C17.25 7.58579 16.9142 7.25 16.5 7.25Z",
    fill: "#222222"
  })));
};

export { IconCalendarDayFilled, IconCalendarDayFilled as default };
