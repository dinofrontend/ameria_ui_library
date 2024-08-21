import { _ as _defineProperty } from '../../defineProperty-d5787266.js';
import React from 'react';
import classNames from 'classnames';
import '../../typeof-3b51e673.js';

var IconStatus = function IconStatus(_ref) {
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
    d: "M12 2.99993C13.1135 2.99993 14.1797 3.20213 15.164 3.57182L13.9808 4.76427C13.3498 4.59193 12.6856 4.49993 12 4.49993C7.85786 4.49993 4.5 7.85779 4.5 11.9999C4.5 13.4248 4.89727 14.7892 5.63583 15.9703C5.93764 16.453 6.29368 16.9002 6.69639 17.3029C7.09848 17.7051 7.5449 18.0607 8.02668 18.3623C9.20844 19.102 10.5739 19.4999 12 19.4999C16.1421 19.4999 19.5 16.1421 19.5 11.9999C19.5 11.3433 19.4156 10.7064 19.2571 10.0994L20.4505 8.89613C20.8059 9.86364 21 10.9091 21 11.9999C21 16.9705 16.9706 20.9999 12 20.9999C10.2904 20.9999 8.64945 20.5217 7.23081 19.6337C6.65294 19.272 6.1177 18.8456 5.63566 18.3635C5.1529 17.8807 4.72601 17.3445 4.36401 16.7656C3.4774 15.3477 3 13.7081 3 11.9999C3 7.02937 7.02944 2.99993 12 2.99993ZM21.0602 2.67188L21.2062 2.80784C22.2817 3.88398 22.285 5.62708 21.2135 6.7072L14.9096 13.0616C14.7291 13.2436 14.5049 13.3763 14.2585 13.447L10.0461 14.6559C9.78064 14.7321 9.50371 14.5786 9.42754 14.3132C9.40169 14.2231 9.40168 14.1275 9.42752 14.0374L10.6378 9.81782C10.7074 9.57525 10.837 9.35415 11.0147 9.17499L17.3236 2.81508C18.3448 1.78569 19.9803 1.73639 21.0602 2.67188ZM18.3886 3.87146L12.0796 10.2314L11.3669 12.7163L13.8447 12.0052L20.1486 5.65079C20.6057 5.18993 20.6349 4.46505 20.2371 3.97046L20.1415 3.8644C19.6555 3.3823 18.8707 3.38546 18.3886 3.87146Z",
    fill: "#222222"
  })));
};

export { IconStatus, IconStatus as default };
