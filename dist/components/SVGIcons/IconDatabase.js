import { _ as _defineProperty } from '../../defineProperty-d5787266.js';
import React from 'react';
import classNames from 'classnames';
import '../../typeof-3b51e673.js';

var IconDatabase = function IconDatabase(_ref) {
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
    d: "M4 6C4 5.30945 4.3153 4.70664 4.77423 4.22025C5.2294 3.73784 5.85301 3.33745 6.56668 3.01752C7.99575 2.3769 9.91738 2 12 2C14.0826 2 16.0042 2.3769 17.4333 3.01752C18.147 3.33745 18.7706 3.73784 19.2258 4.22025C19.6847 4.70664 20 5.30945 20 6V18C20 18.6906 19.6847 19.2934 19.2258 19.7798C18.7706 20.2622 18.147 20.6626 17.4333 20.9825C16.0042 21.6231 14.0826 22 12 22C9.91738 22 7.99575 21.6231 6.56668 20.9825C5.85301 20.6626 5.2294 20.2622 4.77423 19.7798C4.3153 19.2934 4 18.6906 4 18V6ZM5.5 6C5.5 6.20691 5.59044 6.45909 5.86525 6.75034C6.14382 7.04559 6.58195 7.3455 7.18027 7.61372C8.37519 8.14937 10.0786 8.5 12 8.5C13.9214 8.5 15.6248 8.14937 16.8197 7.61372C17.418 7.3455 17.8562 7.04559 18.1348 6.75034C18.4096 6.45909 18.5 6.20691 18.5 6C18.5 5.79309 18.4096 5.54091 18.1348 5.24966C17.8562 4.95441 17.418 4.65449 16.8197 4.38628C15.6248 3.85063 13.9214 3.5 12 3.5C10.0786 3.5 8.37519 3.85063 7.18027 4.38628C6.58195 4.65449 6.14382 4.95441 5.86525 5.24966C5.59044 5.54091 5.5 5.79309 5.5 6ZM18.5 8.39242C18.1791 8.61282 17.8194 8.80942 17.4333 8.98248C16.0042 9.6231 14.0826 10 12 10C9.91738 10 7.99575 9.6231 6.56668 8.98248C6.18063 8.80942 5.82094 8.61282 5.5 8.39242V18C5.5 18.2069 5.59044 18.4591 5.86525 18.7503C6.14382 19.0456 6.58195 19.3455 7.18027 19.6137C8.37519 20.1494 10.0786 20.5 12 20.5C13.9214 20.5 15.6248 20.1494 16.8197 19.6137C17.418 19.3455 17.8562 19.0456 18.1348 18.7503C18.4096 18.4591 18.5 18.2069 18.5 18V8.39242Z",
    fill: "#222222"
  })));
};

export { IconDatabase, IconDatabase as default };
