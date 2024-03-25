"use strict";(self.webpackChunkdino_ui_tools=self.webpackChunkdino_ui_tools||[]).push([[4161],{"./src/stories/CardSelect.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CardSelect:()=>CardSelect,CardSelectGroup:()=>CardSelectGroup,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_components_CardSelect__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/CardSelect/index.ts"),_components_Popover__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Popover/index.ts"),_components_Icon__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/Icon/index.ts"),_consts__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/consts/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/react/jsx-runtime.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const __WEBPACK_DEFAULT_EXPORT__={title:"CardSelect",component:_components_CardSelect__WEBPACK_IMPORTED_MODULE_2__.E,argTypes:{cardsGroupType:{options:[_consts__WEBPACK_IMPORTED_MODULE_5__.cc.cardRadio,_consts__WEBPACK_IMPORTED_MODULE_5__.cc.card],control:{type:"radio"}},cardsGroupDisable:{options:[!0,!1],control:{type:"radio"}}}};var CARDS=[{title:"Card Select",chips:[{text:"Chip 1",color:"success",type:"filled"},{text:"Chip 2",color:"warning",type:"filled"}],description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",badgeText:"Badge",disabled:!1,withAction:!0,additionalInfo:[{key:"Key 1",value:"Value 1"},{key:"Key 2",value:"Value 2"}],inputProps:{name:"input 1",label:"Label",handleChange:function handleChange(e){console.log(e)},labelAddons:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_Popover__WEBPACK_IMPORTED_MODULE_3__.A,{linkAddons:{url:"link",beforeLink:"text before link"},id:"beneficiary-tooltip",text:"data",position:"top-center",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div",{id:"beneficiary-tooltip",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_Icon__WEBPACK_IMPORTED_MODULE_4__.I,{name:"info",type:"information",size:"xsmall",className:"ml-4 pointer"})})})},onClick:function onClick(e){console.log(e)},value:1},{value:2,title:"Card Select 2",chips:[{text:"Chip 1",color:"success",type:"filled"},{text:"Chip 2",color:"warning",type:"filled"}],description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",badgeText:"Badge",disabled:!1,withAction:!0,additionalInfo:[{key:"Key 1",value:"Value 1"},{key:"Key 2",value:"Value 2"}],inputProps:{label:"Label",name:"input 2",labelAddons:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_Popover__WEBPACK_IMPORTED_MODULE_3__.A,{linkAddons:{url:"link",beforeLink:"text before link"},id:"beneficiary-tooltip",text:"data",position:"top-center",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div",{id:"beneficiary-tooltip",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_Icon__WEBPACK_IMPORTED_MODULE_4__.I,{name:"info",type:"information",size:"xsmall",className:"ml-4 pointer"})})})},onClick:function onClick(e){console.log(e)}}],Template=function Template(args){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div",{style:{width:"50%"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_CardSelect__WEBPACK_IMPORTED_MODULE_2__.N,_objectSpread({},args))})};Template.displayName="Template";var CardSelect=Template.bind({});CardSelect.args={type:_consts__WEBPACK_IMPORTED_MODULE_5__.cc.card,title:"Card Select",chips:[{text:"Chip 1",color:"success",type:"filled"},{text:"Chip 2",color:"warning",type:"filled"}],description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",badgeText:"Badge",disabled:!1,withAction:!0,additionalInfo:[{key:"Key 1",value:"Value 1"},{key:"Key 2",value:"Value 2"}],onClick:function onClick(e){console.log(e)}};var CardSelectGroupTemplate=function CardSelectGroupTemplate(args){var _useState=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),_useState2=(0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_7__.A)(_useState,2),selected=_useState2[0],setSelected=_useState2[1];return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div",{style:{width:"50%"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_CardSelect__WEBPACK_IMPORTED_MODULE_2__.E,_objectSpread(_objectSpread({},args),{},{cards:CARDS,value:selected,handleChange:setSelected}))})};CardSelectGroupTemplate.displayName="CardSelectGroupTemplate";var CardSelectGroup=CardSelectGroupTemplate.bind({});const __namedExportsOrder=["CardSelect","CardSelectGroup"]}}]);