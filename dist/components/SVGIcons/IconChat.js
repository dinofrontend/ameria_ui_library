import { _ as _defineProperty } from '../../defineProperty-d5787266.js';
import React from 'react';
import classNames from 'classnames';
import '../../typeof-3b51e673.js';

var IconChat = function IconChat(_ref) {
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
    d: "M12.4219 2C17.9447 2 22.4219 6.47715 22.4219 12C22.4219 17.5228 17.9447 22 12.4219 22C10.8036 22 9.2397 21.6146 7.83473 20.888L4.00892 21.9553C3.344 22.141 2.65446 21.7525 2.46878 21.0876C2.40734 20.8676 2.40737 20.6349 2.46882 20.4151L3.53649 16.5922C2.80824 15.186 2.42188 13.6203 2.42188 12C2.42188 6.47715 6.89903 2 12.4219 2ZM12.4219 3.5C7.72745 3.5 3.92188 7.30558 3.92188 12C3.92188 13.4696 4.29465 14.8834 4.99491 16.1375L5.14555 16.4072L4.03283 20.3914L8.01943 19.2792L8.28896 19.4295C9.54193 20.1281 10.9541 20.5 12.4219 20.5C17.1163 20.5 20.9219 16.6944 20.9219 12C20.9219 7.30558 17.1163 3.5 12.4219 3.5ZM9.17188 13H13.6701C14.0844 13 14.4201 13.3358 14.4201 13.75C14.4201 14.1297 14.138 14.4435 13.7719 14.4932L13.6701 14.5H9.17188C8.75766 14.5 8.42188 14.1642 8.42188 13.75C8.42188 13.3703 8.70403 13.0565 9.0701 13.0068L9.17188 13H13.6701H9.17188ZM9.17188 9.5H15.6764C16.0906 9.5 16.4264 9.83579 16.4264 10.25C16.4264 10.6297 16.1442 10.9435 15.7781 10.9932L15.6764 11H9.17188C8.75766 11 8.42188 10.6642 8.42188 10.25C8.42188 9.8703 8.70403 9.55651 9.0701 9.50685L9.17188 9.5H15.6764H9.17188Z",
    fill: "#222222"
  }));
};

export { IconChat, IconChat as default };
