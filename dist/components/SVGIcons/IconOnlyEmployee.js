import { _ as _defineProperty } from '../../defineProperty-d5787266.js';
import React from 'react';
import classNames from 'classnames';
import '../../typeof-3b51e673.js';

var IconOnlyEmployee = function IconOnlyEmployee(_ref) {
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
    d: "M11.3357 2.08407C10.5682 2.28746 9.90539 2.84014 9.55654 3.57409C8.90244 4.94473 9.4606 6.5895 10.8081 7.28367C10.9694 7.36325 11.1918 7.45168 11.3008 7.48263L11.5014 7.53127V9.49438V11.4575H9.42136C7.1102 11.4575 6.95321 11.4752 6.44737 11.7316C6.08108 11.9217 5.6799 12.3285 5.49239 12.6999C5.25255 13.1818 5.22202 13.4339 5.22202 15.0212V16.4404L4.91678 16.5421C4.09697 16.8074 3.45159 17.4485 3.13762 18.3019C2.99372 18.6998 2.95447 19.4382 3.05913 19.8582C3.29897 20.8309 4.11441 21.6754 5.02579 21.9053C5.83688 22.1087 6.58692 21.9849 7.24974 21.5295C7.66836 21.2509 7.97361 20.8972 8.19165 20.4551C8.72801 19.3586 8.52306 18.1117 7.66836 17.2451C7.30207 16.8737 7.00554 16.688 6.56511 16.5377L6.26859 16.4404V14.9946C6.26859 13.3675 6.28167 13.288 6.57819 12.9475C6.66977 12.837 6.83984 12.7043 6.95321 12.6469L7.16253 12.5407L9.33414 12.5275L11.5014 12.5142V14.4817V16.4493L11.2528 16.52C10.4156 16.7676 9.70916 17.4397 9.417 18.2797C9.26873 18.7042 9.23385 19.4382 9.3385 19.8582C9.57834 20.8309 10.3938 21.6754 11.3052 21.9053C12.1163 22.1087 12.8663 21.9849 13.5291 21.5295C13.9477 21.2509 14.253 20.8972 14.471 20.4551C15.0074 19.3586 14.8024 18.1117 13.9477 17.2451C13.5814 16.8737 13.2849 16.688 12.8445 16.5377L12.548 16.4404V14.4773V12.5142L14.6978 12.5275C16.8127 12.5407 16.8476 12.5407 17.022 12.638C17.3011 12.7883 17.4712 12.9519 17.5976 13.1995L17.7154 13.425L17.7284 14.9371L17.7415 16.4449L17.4886 16.52C16.5729 16.7897 15.8403 17.5591 15.6004 18.5141C15.2298 19.9776 16.0496 21.4322 17.4973 21.892C17.9508 22.038 18.6006 22.0291 19.0672 21.8744C19.5032 21.7329 19.791 21.5649 20.1094 21.2686C20.5367 20.8707 20.8594 20.2959 20.9684 19.7344C21.0295 19.4028 20.999 18.6909 20.903 18.3947C20.637 17.5369 19.9524 16.8295 19.1413 16.5687L18.8055 16.4625L18.7837 14.831C18.7619 13.2968 18.7576 13.1907 18.666 12.9696C18.3651 12.2224 17.7459 11.683 17.0002 11.5194C16.7778 11.4708 16.2502 11.4575 14.6324 11.4575H12.548V9.49438V7.53127L12.7137 7.50032C12.8009 7.48705 13.0407 7.38978 13.2457 7.29251C13.5466 7.1466 13.6817 7.04491 13.9652 6.7531C14.3576 6.35075 14.5452 6.02798 14.6803 5.53278C14.7937 5.12601 14.8024 4.49375 14.7021 4.10466C14.3838 2.86225 13.2762 1.99122 12.0247 2.00007C11.8066 2.00007 11.5232 2.03544 11.3357 2.08407ZM12.7355 3.22038C13.0974 3.39724 13.3896 3.69347 13.5684 4.07372C13.6905 4.33016 13.7035 4.40532 13.7035 4.78114C13.7035 5.15696 13.6905 5.23213 13.5684 5.48857C13.3896 5.86881 13.0974 6.16505 12.7311 6.3419C12.4651 6.47013 12.4041 6.48339 12.0029 6.48339C11.6191 6.48339 11.5363 6.47013 11.3183 6.36401C10.9694 6.20042 10.6554 5.89092 10.4854 5.5372C10.3545 5.2675 10.3458 5.21886 10.3458 4.78114C10.3458 4.34342 10.3545 4.29479 10.4897 4.02066C10.7034 3.58294 11.1438 3.21596 11.6061 3.09658C11.6802 3.0789 11.8982 3.06563 12.0901 3.07447C12.3779 3.08332 12.4956 3.10984 12.7355 3.22038ZM6.34708 17.5944C6.83111 17.7801 7.22794 18.2046 7.38056 18.6954C7.49394 19.0447 7.45469 19.5841 7.29771 19.9289C7.07095 20.4374 6.56511 20.8265 6.01567 20.9149C4.72055 21.1271 3.70015 19.8272 4.17546 18.5627C4.35425 18.0764 4.88625 17.6254 5.40953 17.5148C5.66681 17.4574 6.08544 17.4972 6.34708 17.5944ZM12.6265 17.5944C13.1105 17.7801 13.5073 18.2046 13.6599 18.6954C13.7733 19.0447 13.7341 19.5841 13.5771 19.9289C13.3503 20.4374 12.8445 20.8265 12.295 20.9149C10.9999 21.1271 9.97952 19.8272 10.4548 18.5627C10.6336 18.0764 11.1656 17.6254 11.6889 17.5148C11.9462 17.4574 12.3648 17.4972 12.6265 17.5944ZM18.9843 17.6607C19.1457 17.7359 19.3419 17.8774 19.4727 18.0145C20.31 18.8811 20.0832 20.2384 19.0105 20.7734C18.7009 20.9326 18.6529 20.9414 18.2866 20.9414C17.7415 20.937 17.4581 20.8221 17.1049 20.4595C16.8127 20.1633 16.6644 19.8891 16.599 19.5133C16.4508 18.7219 16.9348 17.8862 17.7023 17.5988C18.0511 17.4706 18.6311 17.4972 18.9843 17.6607Z",
    fill: "#555555"
  }));
};

export { IconOnlyEmployee, IconOnlyEmployee as default };
