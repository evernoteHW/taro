(window.webpackJsonp=window.webpackJsonp||[]).push([[1370],{1436:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return b})),r.d(t,"metadata",(function(){return o})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return p}));var a=r(1786),n=r(1787),c=(r(0),r(1788)),b={title:"Taro.getStorageInfo(OBJECT)",sidebar_label:"getStorageInfo"},o={unversionedId:"apis/storage/getStorageInfo",id:"version-1.x/apis/storage/getStorageInfo",isDocsHomePage:!1,title:"Taro.getStorageInfo(OBJECT)",description:"\u5f02\u6b65\u83b7\u53d6\u5f53\u524d storage \u7684\u76f8\u5173\u4fe1\u606f\uff0c\u652f\u6301 Promise \u5316\u4f7f\u7528\u3002",source:"@site/versioned_docs/version-1.x/apis/storage/getStorageInfo.md",slug:"/apis/storage/getStorageInfo",permalink:"/taro/docs/1.x/apis/storage/getStorageInfo",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-1.x/apis/storage/getStorageInfo.md",version:"1.x",sidebar_label:"getStorageInfo",sidebar:"version-1.x/API",previous:{title:"Taro.getStorageSync(KEY)",permalink:"/taro/docs/1.x/apis/storage/getStorageSync"},next:{title:"Taro.getStorageInfoSync()",permalink:"/taro/docs/1.x/apis/storage/getStorageInfoSync"}},i=[{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API\u652f\u6301\u5ea6",id:"api\u652f\u6301\u5ea6",children:[]}],l={rightToc:i};function p(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"\u5f02\u6b65\u83b7\u53d6\u5f53\u524d storage \u7684\u76f8\u5173\u4fe1\u606f\uff0c\u652f\u6301 ",Object(c.b)("inlineCode",{parentName:"p"},"Promise")," \u5316\u4f7f\u7528\u3002"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"OBJECT \u53c2\u6570\u8bf4\u660e\uff1a")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"\u53c2\u6570"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"\u7c7b\u578b"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"\u5fc5\u586b"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"\u8bf4\u660e"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"success"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Function"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"\u5426"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570\uff0c\u8be6\u89c1\u8fd4\u56de\u53c2\u6570\u8bf4\u660e")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"fail"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Function"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"\u5426"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"complete"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Function"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"\u5426"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"success \u8fd4\u56de\u53c2\u6570\u8bf4\u660e\uff1a")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"\u53c2\u6570"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"\u7c7b\u578b"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"\u8bf4\u660e"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"keys"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"String Array"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"\u5f53\u524d storage \u4e2d\u6240\u6709\u7684 key")))),Object(c.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"import Taro from '@tarojs/taro'\n\nTaro.getStorageInfo()\n  .then(res => console.log(res.keys))\n")),Object(c.b)("h2",{id:"api\u652f\u6301\u5ea6"},"API\u652f\u6301\u5ea6"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"API"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"H5"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"Taro.getStorageInfo"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"Taro.getStorageInfoSync"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}))))))}p.isMDXComponent=!0},1786:function(e,t,r){"use strict";function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}r.d(t,"a",(function(){return a}))},1787:function(e,t,r){"use strict";function a(e,t){if(null==e)return{};var r,a,n={},c=Object.keys(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}r.d(t,"a",(function(){return a}))},1788:function(e,t,r){"use strict";r.d(t,"a",(function(){return O})),r.d(t,"b",(function(){return s}));var a=r(0),n=r.n(a);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},c=Object.keys(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=n.a.createContext({}),p=function(e){var t=n.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},O=function(e){var t=p(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},j={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},g=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,b=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),O=p(r),g=a,s=O["".concat(b,".").concat(g)]||O[g]||j[g]||c;return r?n.a.createElement(s,o(o({ref:t},l),{},{components:r})):n.a.createElement(s,o({ref:t},l))}));function s(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,b=new Array(c);b[0]=g;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,b[1]=o;for(var l=2;l<c;l++)b[l]=r[l];return n.a.createElement.apply(null,b)}return n.a.createElement.apply(null,r)}g.displayName="MDXCreateElement"}}]);