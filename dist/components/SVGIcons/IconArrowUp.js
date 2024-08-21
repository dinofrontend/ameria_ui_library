import { _ as _defineProperty } from '../../defineProperty-d5787266.js';
import React from 'react';
import classNames from 'classnames';
import '../../typeof-3b51e673.js';

var IconArrowUp = function IconArrowUp(_ref) {
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
    id: "Direction=Up, Size=24, Theme=Regular"
  }, /*#__PURE__*/React.createElement("path", {
    id: "Shape",
    d: "M4.20938 10.7327C3.92369 11.0326 3.93523 11.5074 4.23516 11.7931C4.53509 12.0787 5.00982 12.0672 5.29551 11.7673L11.25 5.516V20.25C11.25 20.6642 11.5858 21 12 21C12.4142 21 12.75 20.6642 12.75 20.25V5.51565L18.7048 11.7673C18.9905 12.0672 19.4652 12.0787 19.7652 11.7931C20.0651 11.5074 20.0766 11.0326 19.791 10.7327L12.7243 3.31379C12.5632 3.14474 12.3578 3.04477 12.1443 3.01386C12.0976 3.00477 12.0494 3 12 3C11.9503 3 11.9017 3.00483 11.8547 3.01406C11.6417 3.04518 11.4368 3.14509 11.2761 3.31379L4.20938 10.7327Z",
    fill: "#222222"
  })));
};

export { IconArrowUp, IconArrowUp as default };
