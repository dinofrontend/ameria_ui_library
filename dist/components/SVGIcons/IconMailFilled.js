import { _ as _defineProperty } from '../../defineProperty-d5787266.js';
import React from 'react';
import classNames from 'classnames';
import '../../typeof-3b51e673.js';

var IconMailFilled = function IconMailFilled(_ref) {
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
    d: "M22 8.608V16.75C22 18.483 20.6435 19.8992 18.9344 19.9949L18.75 20H5.25C3.51697 20 2.10075 18.6435 2.00514 16.9344L2 16.75V8.608L11.652 13.6644C11.87 13.7785 12.13 13.7785 12.348 13.6644L22 8.608ZM5.25 4H18.75C20.4347 4 21.8201 5.28191 21.9838 6.92355L12 12.1533L2.01619 6.92355C2.17386 5.34271 3.46432 4.09545 5.06409 4.00523L5.25 4H18.75H5.25Z",
    fill: "#222222"
  })));
};

export { IconMailFilled, IconMailFilled as default };
