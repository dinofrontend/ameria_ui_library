import { _ as _defineProperty } from '../../defineProperty-d5787266.js';
import React from 'react';
import classNames from 'classnames';
import '../../typeof-3b51e673.js';

var IconHeart = function IconHeart(_ref) {
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
    d: "M12.8199 5.57961L11.9992 6.40211L11.1759 5.57886C9.07688 3.4798 5.67361 3.4798 3.57455 5.57886C1.47548 7.67793 1.47548 11.0812 3.57455 13.1803L11.4699 21.0756C11.7628 21.3685 12.2377 21.3685 12.5306 21.0756L20.432 13.1788C22.5264 11.0728 22.53 7.67906 20.4306 5.57961C18.3277 3.47672 14.9228 3.47672 12.8199 5.57961ZM19.3684 12.1211L12.0002 19.4846L4.63521 12.1196C3.12192 10.6063 3.12192 8.15281 4.63521 6.63952C6.14849 5.12624 8.602 5.12624 10.1153 6.63952L11.4727 7.99697C11.7706 8.29483 12.2553 8.28903 12.5459 7.98412L13.8806 6.64027C15.3977 5.12317 17.8528 5.12316 19.3699 6.64027C20.8836 8.15391 20.881 10.6001 19.3684 12.1211Z",
    fill: "#222222"
  })));
};

export { IconHeart, IconHeart as default };
