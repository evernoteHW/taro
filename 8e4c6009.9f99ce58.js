(window.webpackJsonp=window.webpackJsonp||[]).push([[964],{1030:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return o})),t.d(r,"rightToc",(function(){return l})),t.d(r,"default",(function(){return s}));var n=t(1786),a=t(1787),i=(t(0),t(1788)),c={title:"Taro.readBLECharacteristicValue(OBJECT)",sidebar_label:"readBLECharacteristicValue"},o={unversionedId:"apis/device/ble/readBLECharacteristicValue",id:"version-1.x/apis/device/ble/readBLECharacteristicValue",isDocsHomePage:!1,title:"Taro.readBLECharacteristicValue(OBJECT)",description:"\u4f7f\u7528\u65b9\u5f0f\u540c wx.readBLECharacteristicValue\uff0c\u652f\u6301 Promise \u5316\u4f7f\u7528\u3002",source:"@site/versioned_docs/version-1.x/apis/device/ble/readBLECharacteristicValue.md",slug:"/apis/device/ble/readBLECharacteristicValue",permalink:"/taro/docs/1.x/apis/device/ble/readBLECharacteristicValue",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-1.x/apis/device/ble/readBLECharacteristicValue.md",version:"1.x",sidebar_label:"readBLECharacteristicValue",sidebar:"version-1.x/API",previous:{title:"Taro.onBLEConnectionStateChange(CALLBACK)",permalink:"/taro/docs/1.x/apis/device/ble/onBLEConnectionStateChange"},next:{title:"Taro.writeBLECharacteristicValue(OBJECT)",permalink:"/taro/docs/1.x/apis/device/ble/writeBLECharacteristicValue"}},l=[{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]}],u={rightToc:l};function s(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},u,t,{components:r,mdxType:"MDXLayout"}),Object(i.b)("p",null,"\u4f7f\u7528\u65b9\u5f0f\u540c ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.readBLECharacteristicValue.html"}),Object(i.b)("inlineCode",{parentName:"a"},"wx.readBLECharacteristicValue")),"\uff0c\u652f\u6301 ",Object(i.b)("inlineCode",{parentName:"p"},"Promise")," \u5316\u4f7f\u7528\u3002"),Object(i.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"import Taro from '@tarojs/taro'\n\nTaro.readBLECharacteristicValue(params).then(...)\n")))}s.isMDXComponent=!0},1786:function(e,r,t){"use strict";function n(){return(n=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}t.d(r,"a",(function(){return n}))},1787:function(e,r,t){"use strict";function n(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}t.d(r,"a",(function(){return n}))},1788:function(e,r,t){"use strict";t.d(r,"a",(function(){return p})),t.d(r,"b",(function(){return f}));var n=t(0),a=t.n(n);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a.a.createContext({}),s=function(e){var r=a.a.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},p=function(e){var r=s(e.components);return a.a.createElement(u.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},b=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(t),b=n,f=p["".concat(c,".").concat(b)]||p[b]||d[b]||i;return t?a.a.createElement(f,o(o({ref:r},u),{},{components:t})):a.a.createElement(f,o({ref:r},u))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,c=new Array(i);c[0]=b;var o={};for(var l in r)hasOwnProperty.call(r,l)&&(o[l]=r[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var u=2;u<i;u++)c[u]=t[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);