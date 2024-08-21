import { _ as _defineProperty } from '../../defineProperty-d5787266.js';
import React from 'react';
import classNames from 'classnames';
import '../../typeof-3b51e673.js';

var IconCalculator = function IconCalculator(_ref) {
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
    d: "M7 7C7 5.89543 7.89543 5 9 5H15C16.1046 5 17 5.89543 17 7V8C17 9.10457 16.1046 10 15 10H9C7.89543 10 7 9.10457 7 8V7ZM9 6.5C8.72386 6.5 8.5 6.72386 8.5 7V8C8.5 8.27614 8.72386 8.5 9 8.5H15C15.2761 8.5 15.5 8.27614 15.5 8V7C15.5 6.72386 15.2761 6.5 15 6.5H9ZM8.25 14.5C8.94036 14.5 9.5 13.9404 9.5 13.25C9.5 12.5596 8.94036 12 8.25 12C7.55964 12 7 12.5596 7 13.25C7 13.9404 7.55964 14.5 8.25 14.5ZM9.5 17.25C9.5 17.9404 8.94036 18.5 8.25 18.5C7.55964 18.5 7 17.9404 7 17.25C7 16.5596 7.55964 16 8.25 16C8.94036 16 9.5 16.5596 9.5 17.25ZM15.75 14.5C16.4404 14.5 17 13.9404 17 13.25C17 12.5596 16.4404 12 15.75 12C15.0596 12 14.5 12.5596 14.5 13.25C14.5 13.9404 15.0596 14.5 15.75 14.5ZM17 17.25C17 17.9404 16.4404 18.5 15.75 18.5C15.0596 18.5 14.5 17.9404 14.5 17.25C14.5 16.5596 15.0596 16 15.75 16C16.4404 16 17 16.5596 17 17.25ZM12 14.5C12.6904 14.5 13.25 13.9404 13.25 13.25C13.25 12.5596 12.6904 12 12 12C11.3096 12 10.75 12.5596 10.75 13.25C10.75 13.9404 11.3096 14.5 12 14.5ZM13.25 17.25C13.25 17.9404 12.6904 18.5 12 18.5C11.3096 18.5 10.75 17.9404 10.75 17.25C10.75 16.5596 11.3096 16 12 16C12.6904 16 13.25 16.5596 13.25 17.25ZM7.25 2C5.45507 2 4 3.45507 4 5.25V18.75C4 20.5449 5.45507 22 7.25 22H16.75C18.5449 22 20 20.5449 20 18.75V5.25C20 3.45507 18.5449 2 16.75 2H7.25ZM5.5 5.25C5.5 4.2835 6.2835 3.5 7.25 3.5H16.75C17.7165 3.5 18.5 4.2835 18.5 5.25V18.75C18.5 19.7165 17.7165 20.5 16.75 20.5H7.25C6.2835 20.5 5.5 19.7165 5.5 18.75V5.25Z",
    fill: "#222222"
  })));
};

export { IconCalculator, IconCalculator as default };
