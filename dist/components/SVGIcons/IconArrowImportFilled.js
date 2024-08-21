import { _ as _defineProperty } from '../../defineProperty-d5787266.js';
import React from 'react';
import classNames from 'classnames';
import '../../typeof-3b51e673.js';

var IconArrowImportFilled = function IconArrowImportFilled(_ref) {
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
    d: "M21.25 4.5C21.6297 4.5 21.9435 4.78215 21.9932 5.14823L22 5.25V18.75C22 19.1642 21.6642 19.5 21.25 19.5C20.8703 19.5 20.5565 19.2178 20.5069 18.8518L20.5 18.75V5.25C20.5 4.83579 20.8358 4.5 21.25 4.5ZM12.2098 6.38702L12.293 6.29282C12.6535 5.93237 13.2207 5.9047 13.613 6.20977L13.7072 6.29297L18.7038 11.2906C19.064 11.6509 19.0919 12.2178 18.7873 12.6101L18.7042 12.7043L13.7076 17.7077C13.3173 18.0985 12.6842 18.0989 12.2934 17.7087C11.9327 17.3484 11.9045 16.7812 12.2093 16.3887L12.2924 16.2945L15.581 13H3C2.48716 13 2.06449 12.614 2.00673 12.1166L2 12C2 11.4872 2.38604 11.0645 2.88338 11.0067L3 11H15.584L12.2928 7.70703C11.9324 7.34651 11.9047 6.77928 12.2098 6.38702L12.293 6.29282L12.2098 6.38702Z",
    fill: "#222222"
  })));
};

export { IconArrowImportFilled, IconArrowImportFilled as default };
