import { _ as _defineProperty } from '../../defineProperty-d5787266.js';
import React from 'react';
import classNames from 'classnames';
import '../../typeof-3b51e673.js';

var IconAlertBadge = function IconAlertBadge(_ref) {
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
    d: "M11.9876 1.99609C13.4351 1.99609 14.7878 2.40297 15.9353 3.11058C15.5934 3.47585 15.329 3.91431 15.1682 4.39985C14.2457 3.82617 13.1554 3.49569 11.9876 3.49569C8.66297 3.49569 5.97997 6.16922 5.97949 9.49407V13.9025L4.63369 16.9958H19.3502L17.9958 13.9035L17.9959 9.50692L17.9921 9.28178C17.9884 9.17344 17.9818 9.06586 17.9725 8.95912C18.1435 8.98472 18.3185 8.99798 18.4966 8.99798C18.8347 8.99798 19.1616 8.95018 19.4709 8.86099C19.4816 8.98748 19.4892 9.1149 19.4936 9.24319L19.4978 9.49407V13.5899L20.8797 16.7451C20.9489 16.903 20.9846 17.0734 20.9846 17.2457C20.9846 17.9359 20.4241 18.4954 19.7329 18.4954L14.9917 18.4969C14.9917 20.1533 13.6467 21.4961 11.9876 21.4961C10.3878 21.4961 9.08004 20.2475 8.98867 18.6731L8.98312 18.4946L4.25202 18.4954C4.08044 18.4954 3.9107 18.4602 3.75334 18.392C3.11928 18.117 2.82853 17.3809 3.10394 16.7479L4.47746 13.5909V9.49396C4.47805 5.34029 7.8341 1.99609 11.9876 1.99609ZM13.4892 18.4946L10.4856 18.4969C10.4856 19.3251 11.1581 19.9965 11.9876 19.9965C12.7684 19.9965 13.41 19.4018 13.4828 18.6413L13.4892 18.4946ZM16.033 5.05266C16.1282 4.52552 16.3889 4.05584 16.7595 3.6992C17.2097 3.26601 17.822 2.99961 18.4966 2.99961C19.8792 2.99961 21 4.11859 21 5.49893C21 6.59182 20.2974 7.52087 19.3185 7.86042C19.0611 7.94973 18.7845 7.99826 18.4966 7.99826C18.2482 7.99826 18.0083 7.96214 17.7818 7.89488C16.7475 7.58775 15.9932 6.63128 15.9932 5.49893C15.9932 5.34661 16.0069 5.19746 16.033 5.05266Z",
    fill: "#222222"
  })));
};

export { IconAlertBadge, IconAlertBadge as default };
