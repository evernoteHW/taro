(window.webpackJsonp=window.webpackJsonp||[]).push([[1565],{1630:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return a})),r.d(t,"rightToc",(function(){return b})),r.d(t,"default",(function(){return u}));var n=r(1786),c=r(1787),o=(r(0),r(1788)),l={title:"Taro.startGyroscope(option)",sidebar_label:"startGyroscope"},a={unversionedId:"apis/device/gyroscope/startGyroscope",id:"version-3.x/apis/device/gyroscope/startGyroscope",isDocsHomePage:!1,title:"Taro.startGyroscope(option)",description:"\u5f00\u59cb\u76d1\u542c\u9640\u87ba\u4eea\u6570\u636e\u3002",source:"@site/versioned_docs/version-3.x/apis/device/gyroscope/startGyroscope.md",slug:"/apis/device/gyroscope/startGyroscope",permalink:"/taro/docs/apis/device/gyroscope/startGyroscope",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/apis/device/gyroscope/startGyroscope.md",version:"3.x",sidebar_label:"startGyroscope",sidebar:"version-3.x/API",previous:{title:"Taro.stopGyroscope(option)",permalink:"/taro/docs/apis/device/gyroscope/stopGyroscope"},next:{title:"Taro.onGyroscopeChange(callback)",permalink:"/taro/docs/apis/device/gyroscope/onGyroscopeChange"}},b=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[]},{value:"interval",id:"interval",children:[]}]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],i={rightToc:b};function u(e){var t=e.components,r=Object(c.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"\u5f00\u59cb\u76d1\u542c\u9640\u87ba\u4eea\u6570\u636e\u3002"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/device/gyroscope/wx.startGyroscope.html"}),"\u53c2\u8003\u6587\u6863"))),Object(o.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"(option: Option) => Promise<CallbackResult>\n")),Object(o.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(o.b)("h3",{id:"option"},"Option"),Object(o.b)("table",null,Object(o.b)("thead",null,Object(o.b)("tr",null,Object(o.b)("th",null,"\u53c2\u6570"),Object(o.b)("th",null,"\u7c7b\u578b"),Object(o.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(o.b)("th",null,"\u8bf4\u660e"))),Object(o.b)("tbody",null,Object(o.b)("tr",null,Object(o.b)("td",null,"complete"),Object(o.b)("td",null,Object(o.b)("code",null,"(res: CallbackResult) => void")),Object(o.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(o.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),Object(o.b)("tr",null,Object(o.b)("td",null,"fail"),Object(o.b)("td",null,Object(o.b)("code",null,"(res: CallbackResult) => void")),Object(o.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(o.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),Object(o.b)("tr",null,Object(o.b)("td",null,"interval"),Object(o.b)("td",null,Object(o.b)("code",null,'"game" | "ui" | "normal"')),Object(o.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(o.b)("td",null,"\u76d1\u542c\u9640\u87ba\u4eea\u6570\u636e\u56de\u8c03\u51fd\u6570\u7684\u6267\u884c\u9891\u7387")),Object(o.b)("tr",null,Object(o.b)("td",null,"success"),Object(o.b)("td",null,Object(o.b)("code",null,"(res: CallbackResult) => void")),Object(o.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(o.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),Object(o.b)("h3",{id:"interval"},"interval"),Object(o.b)("p",null,"\u76d1\u542c\u9640\u87ba\u4eea\u6570\u636e\u56de\u8c03\u51fd\u6570\u7684\u6267\u884c\u9891\u7387"),Object(o.b)("table",null,Object(o.b)("thead",null,Object(o.b)("tr",null,Object(o.b)("th",null,"\u53c2\u6570"),Object(o.b)("th",null,"\u8bf4\u660e"))),Object(o.b)("tbody",null,Object(o.b)("tr",null,Object(o.b)("td",null,"game"),Object(o.b)("td",null,"\u9002\u7528\u4e8e\u66f4\u65b0\u6e38\u620f\u7684\u56de\u8c03\u9891\u7387\uff0c\u5728 20ms/\u6b21 \u5de6\u53f3")),Object(o.b)("tr",null,Object(o.b)("td",null,"ui"),Object(o.b)("td",null,"\u9002\u7528\u4e8e\u66f4\u65b0 UI \u7684\u56de\u8c03\u9891\u7387\uff0c\u5728 60ms/\u6b21 \u5de6\u53f3")),Object(o.b)("tr",null,Object(o.b)("td",null,"normal"),Object(o.b)("td",null,"\u666e\u901a\u7684\u56de\u8c03\u9891\u7387\uff0c\u5728 200ms/\u6b21 \u5de6\u53f3")))),Object(o.b)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"API"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"H5"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Taro.startGyroscope"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))))}u.isMDXComponent=!0},1786:function(e,t,r){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}r.d(t,"a",(function(){return n}))},1787:function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,c={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}r.d(t,"a",(function(){return n}))},1788:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return d}));var n=r(0),c=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var i=c.a.createContext({}),u=function(e){var t=c.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=u(e.components);return c.a.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},O=c.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,i=b(e,["components","mdxType","originalType","parentName"]),p=u(r),O=n,d=p["".concat(l,".").concat(O)]||p[O]||s[O]||o;return r?c.a.createElement(d,a(a({ref:t},i),{},{components:r})):c.a.createElement(d,a({ref:t},i))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=O;var a={};for(var b in t)hasOwnProperty.call(t,b)&&(a[b]=t[b]);a.originalType=e,a.mdxType="string"==typeof e?e:n,l[1]=a;for(var i=2;i<o;i++)l[i]=r[i];return c.a.createElement.apply(null,l)}return c.a.createElement.apply(null,r)}O.displayName="MDXCreateElement"}}]);