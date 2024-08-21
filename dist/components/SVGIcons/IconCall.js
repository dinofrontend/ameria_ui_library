import { _ as _defineProperty } from '../../defineProperty-d5787266.js';
import React from 'react';
import classNames from 'classnames';
import '../../typeof-3b51e673.js';

var IconCall = function IconCall(_ref) {
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
    d: "M7.72845 2.41795L8.89545 2.06619C10.218 1.66755 11.631 2.31179 12.1973 3.57161L13.099 5.57733C13.5817 6.65117 13.3273 7.91317 12.4663 8.71612L10.972 10.1096C10.9283 10.1503 10.9006 10.2053 10.894 10.2647C10.8497 10.6618 11.1189 11.4352 11.7391 12.5095C12.1902 13.2908 12.5984 13.8387 12.9459 14.1468C13.188 14.3615 13.3213 14.4079 13.378 14.391L15.3884 13.7764C16.514 13.4323 17.7338 13.8426 18.4225 14.7971L19.7032 16.5721C20.5093 17.6893 20.3644 19.2306 19.3641 20.1779L18.4777 21.0173C17.5213 21.9231 16.1597 22.2606 14.891 21.9065C12.1369 21.1378 9.66759 18.8137 7.45572 14.9826C5.24077 11.1462 4.46358 7.84173 5.18003 5.06994C5.5079 3.80146 6.47403 2.79607 7.72845 2.41795ZM8.16135 3.85413C7.4087 4.081 6.82902 4.68423 6.6323 5.44532C6.02965 7.77684 6.71851 10.7057 8.75475 14.2326C10.7883 17.7548 12.9772 19.815 15.2943 20.4617C16.0555 20.6742 16.8724 20.4717 17.4463 19.9282L18.3326 19.0888C18.7873 18.6582 18.8532 17.9576 18.4868 17.4498L17.2061 15.6748C16.893 15.241 16.3386 15.0544 15.8269 15.2109L13.8116 15.827C12.6419 16.1757 11.5802 15.2342 10.4401 13.2595C9.6718 11.9288 9.31371 10.9001 9.40328 10.0982C9.44968 9.68273 9.64325 9.29763 9.94897 9.01254L11.4433 7.61909C11.8347 7.25411 11.9503 6.68047 11.7309 6.19237L10.8292 4.18665C10.5718 3.614 9.92949 3.32116 9.32835 3.50236L8.16135 3.85413Z",
    fill: "#222222"
  })));
};

export { IconCall, IconCall as default };
