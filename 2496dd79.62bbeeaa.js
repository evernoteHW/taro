(window.webpackJsonp=window.webpackJsonp||[]).push([[263],{1786:function(e,t,n){"use strict";function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return a}))},1787:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}n.d(t,"a",(function(){return a}))},1788:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),s=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,d=u["".concat(o,".").concat(m)]||u[m]||b[m]||c;return n?r.a.createElement(d,l(l({ref:t},p),{},{components:n})):r.a.createElement(d,l({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<c;p++)o[p]=n[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1789:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},1790:function(e,t,n){"use strict";var a=n(0),r=n(1791);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},1791:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},1792:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(1790),o=n(1789),l=n(51),i=n.n(l),p=37,s=39;t.a=function(e){var t=e.lazy,n=e.block,l=e.children,u=e.defaultValue,b=e.values,m=e.groupId,d=e.className,v=Object(c.a)(),f=v.tabGroupChoices,h=v.setTabGroupChoices,O=Object(a.useState)(u),j=O[0],g=O[1];if(null!=m){var y=f[m];null!=y&&y!==j&&b.some((function(e){return e.value===y}))&&g(y)}var E=function(e){g(e),null!=m&&h(m,e)},N=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":n},d)},b.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":j===t,className:Object(o.a)("tabs__item",i.a.tabItem,{"tabs__item--active":j===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case s:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case p:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(N,e.target,e)},onFocus:function(){return E(t)},onClick:function(){E(t)}},n)}))),t?Object(a.cloneElement)(l.filter((function(e){return e.props.value===j}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},l.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==j})}))))}},1793:function(e,t,n){"use strict";var a=n(1786),r=n(0),c=n.n(r);t.a=function(e){var t=e.children,n=e.hidden,r=e.className;return c.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:n,className:r}),t)}},1795:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i}));var a=n(0),r=n.n(a),c=function(){return r.a.createElement("span",{className:"footer_link_connect_wrap"},r.a.createElement("span",{className:"footer_link_connect footer_link_wechat"},"\u5fae\u4fe1\u5f00\u53d1\u8005\u7fa4",r.a.createElement("span",{className:"wechat_qrcode_icon"},r.a.createElement("svg",{t:"1554966525626",className:"icon svgicon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2588","data-spm-anchor-id":"a313x.7781069.0.i0"},r.a.createElement("path",{d:"M240.071 241.095h59.278v59.278h-59.278v-59.278z",fill:"","p-id":"2589"}),r.a.createElement("path",{d:"M405.959 134.485h-272.611v272.611h106.723v47.445h59.278v-47.445h106.723v-59.278h47.445v-47.445h-47.445l-0.114-165.888zM346.795 347.819h-154.169v-154.055h154.055v154.055h0.114zM240.071 727.154h59.278v59.278h-59.278v-59.278zM726.016 241.095h59.278v59.278h-59.278v-59.278zM512.683 509.042v63.943h59.278v-59.165h47.445v-59.278h-47.445v-47.445h-59.278v101.945zM512.683 725.789v60.643h59.278v-106.723h47.445v-59.278h-106.723v105.358zM571.961 786.432h47.445v47.445h-47.445v-47.445zM453.405 833.877v59.165h118.557v-59.165h-118.557z",fill:"","p-id":"2590"}),r.a.createElement("path",{d:"M678.685 679.709h-59.278v106.723h106.61v-59.278h-47.331v-47.445zM726.016 893.042h166.002v-59.165h-106.723v-47.445h-59.278v106.61zM892.018 513.821v-59.278h-106.723v59.278h106.723zM832.739 727.154h59.278v59.278h-59.278v-59.278zM453.405 347.819h59.278v59.278h-59.278v-59.278zM726.016 454.542v-47.445h166.002v-272.611h-272.611v59.278h-106.723v47.445h106.723v59.165h-47.445v47.445h47.445v59.278h59.278v47.445h47.331zM678.685 193.763h154.055v154.055h-154.055v-154.055zM678.685 572.985h47.331v47.445h-47.331v-47.445zM785.294 679.709h-59.278v47.445h106.723v-106.723h59.278v-47.445h-106.723v106.723zM453.405 241.095h59.278v59.278h-59.278v-59.278zM299.349 513.821h47.445v59.165h-47.445v-59.165zM453.405 454.542h-106.61v59.278h59.165v59.165h47.445v-118.443z",fill:"","p-id":"2591"}),r.a.createElement("path",{d:"M405.959 786.432v-106.723h47.445v-59.278h-213.333v-106.61h-106.723v59.278h59.278v47.445h-59.278v272.611h272.611v-59.278h47.445v-47.445h-47.445zM346.795 833.877h-154.169v-154.169h154.055v154.169h0.114zM453.405 572.985h59.278v47.445h-59.278v-47.445zM619.406 513.821h59.278v59.165h-59.278v-59.165zM726.016 513.821h59.278v59.165h-59.278v-59.165z",fill:"","p-id":"2592"})))),r.a.createElement("span",{className:"footer_link_wechat_img inline"},r.a.createElement("img",{src:"https://camo.githubusercontent.com/10834a234b99a5880b5dff7c0ca7235e2a0772e7/687474703a2f2f696d6732302e333630627579696d672e636f6d2f7562612f6a66732f7432303139372f3238332f313638373136383837342f3133363034322f32623464383131662f35623330613635634e39643166303366312e706e67"})))};function o(){return r.a.createElement("span",null,r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"inline-svg-icon",viewBox:"0 0 1024 1024"},r.a.createElement("defs",null,r.a.createElement("style",null)),r.a.createElement("path",{fill:"#41B883",d:"M615.6 123.6h165.5L512 589.7 242.9 123.6H63.5L512 900.4l448.5-776.9z"}),r.a.createElement("path",{fill:"#34495E",d:"M781.1 123.6H615.6L512 303 408.4 123.6H242.9L512 589.7z"})),r.a.createElement("span",{style:{color:l}},"Vue"))}var l="#4fc08d";function i(){return r.a.createElement("span",null,r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"200",height:"200",className:"inline-svg-icon",viewBox:"0 0 1024 1024"},r.a.createElement("defs",null,r.a.createElement("style",null)),r.a.createElement("path",{fill:"#61DAFB",d:"M432 511.8a80 80 0 10160 0 80 80 0 10-160 0z"}),r.a.createElement("path",{fill:"#61DAFB",d:"M960.5 511.8c0-62.8-73.8-117.2-188.5-150.1 28.9-115.8 18.7-206.9-35.7-238.3-54.5-31.4-138.5 5.3-224.3 88.2-85.8-82.9-169.8-119.6-224.3-88.2-54.4 31.4-64.6 122.6-35.7 238.3C137.3 394.6 63.5 449 63.5 511.8S137.3 629 252 661.9c-28.9 115.7-18.7 206.9 35.7 238.3 13.4 7.8 28.6 11.6 45.2 11.6 39.7 0 87.8-21.8 140-64.2 13-10.6 26.1-22.6 39.1-35.2 13 12.6 26.1 24.6 39.1 35.2 52.2 42.4 100.2 64.2 140 64.2 16.6 0 31.8-3.8 45.2-11.6 54.4-31.4 64.6-122.5 35.7-238.3 114.7-32.9 188.5-87.3 188.5-150.1zM716.8 157.2c35.3 20.4 42.7 94.3 17.6 194.8-36.7-8.4-76.7-14.7-119.3-18.6-24.7-34.9-50.2-66.4-75.8-94 59.2-57.3 114.2-88.4 152-88.4 9.6-.1 18.2 2 25.5 6.2zM637 584c-13.8 24-28.4 47-43.3 69-26.1 2-53.3 3.1-81.7 3.1-28.3 0-55.5-1.1-81.6-3.1-15-22-29.5-45.1-43.3-69-14.1-24.5-26.7-48.6-38.1-72.2 11.4-23.6 24-47.7 38.1-72.2 14.1-24.5 28.7-47.4 43.4-69.1 26.1-2 53.3-3.1 81.6-3.1 28.3 0 55.5 1.1 81.6 3.1 14.7 21.6 29.3 44.6 43.4 69 14.1 24.5 26.7 48.6 38.1 72.2-11.5 23.7-24.1 47.8-38.2 72.3zm58.8-26.4c11.2 26.6 20.4 52.1 28 76.5-24.9 5.6-51.7 10.4-80.3 14 9.3-14.5 18.4-29.3 27.3-44.6 8.8-15.4 17.1-30.7 25-45.9zM512 756.5c-17.7-19.2-35.1-40.1-52.2-62.6 17.1.8 34.5 1.3 52.2 1.3 17.7 0 35.1-.5 52.2-1.3-17.1 22.5-34.5 43.4-52.2 62.6zM380.5 648.1c-28.6-3.6-55.3-8.4-80.3-14 7.6-24.4 16.8-49.9 28-76.5 7.9 15.2 16.1 30.5 25 45.9 8.9 15.2 18 30 27.3 44.6zM328.2 466c-11.2-26.6-20.4-52.1-28-76.5 24.9-5.6 51.6-10.4 80.2-14-9.2 14.4-18.4 29.2-27.2 44.6-8.8 15.4-17.1 30.7-25 45.9zM512 267.1c17.3 18.7 34.8 39.8 52.1 62.7-17.1-.8-34.4-1.3-52.1-1.3-17.7 0-35 .5-52.1 1.3 17.3-22.9 34.8-44 52.1-62.7zm158.7 153c-8.9-15.3-18-30.1-27.2-44.6 28.6 3.6 55.3 8.4 80.2 14-7.6 24.4-16.8 49.9-28 76.5-7.8-15.2-16.1-30.5-25-45.9zM307.2 157.2c7.2-4.2 15.8-6.2 25.6-6.2 37.8 0 92.7 31.1 151.9 88.4-25.6 27.6-51.1 59.2-75.8 94-42.5 3.9-82.6 10.2-119.3 18.6-25.1-100.6-17.6-174.5 17.6-194.8zM102.5 511.8c0-40.8 60.3-84.2 160-112.6 11.1 36 25.6 73.8 43.5 112.6-17.8 38.8-32.4 76.6-43.5 112.6-99.7-28.4-160-71.9-160-112.6zm345.8 305.5c-59.7 48.5-111.1 66.4-141.1 49.2-35.3-20.4-42.7-94.3-17.6-194.8 36.7 8.4 76.7 14.7 119.3 18.6 24.4 34.5 49.9 66.1 75.8 94.2-12.1 11.7-24.2 22.9-36.4 32.8zm268.5 49.2c-29.9 17.3-81.4-.6-141.1-49.2-12.1-9.9-24.3-21.1-36.5-32.8 26-28.1 51.4-59.7 75.8-94.2 42.5-3.9 82.6-10.2 119.3-18.7 25.2 100.6 17.7 174.5-17.5 194.9zm44.8-242.1c-11.1-36-25.6-73.8-43.5-112.6 17.8-38.8 32.4-76.6 43.5-112.6 99.7 28.5 160 71.9 160 112.6-.1 40.7-60.4 84.2-160 112.6z"})),r.a.createElement("span",{style:{color:"#61dafb"}},"React"))}},329:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return m}));var a=n(1786),r=n(1787),c=(n(0),n(1788)),o=n(1792),l=n(1793),i=n(1795),p={title:"\u4ece\u539f\u751f\u5c0f\u7a0b\u5e8f\u8fc1\u79fb\u8fc7\u6765\uff1f"},s={unversionedId:"come-from-miniapp",id:"come-from-miniapp",isDocsHomePage:!1,title:"\u4ece\u539f\u751f\u5c0f\u7a0b\u5e8f\u8fc1\u79fb\u8fc7\u6765\uff1f",description:"\u672c\u7bc7\u5c06\u8bb2\u8ff0 Taro \u5f00\u53d1\u548c\u539f\u751f\u5c0f\u7a0b\u5e8f\u5f00\u53d1\u7684\u4e3b\u8981\u5dee\u5f02\u3002\u5e0c\u671b\u80fd\u5e2e\u52a9\u638c\u63e1\u539f\u751f\u5c0f\u7a0b\u5e8f\u5f00\u53d1\uff0c\u4f46\u4e0d\u592a\u4e86\u89e3 Taro \u7684\u540c\u5b66\u5feb\u901f\u8fdb\u884c\u8fc1\u79fb\u3002",source:"@site/docs/come-from-miniapp.mdx",slug:"/come-from-miniapp",permalink:"/taro/docs/next/come-from-miniapp",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/come-from-miniapp.mdx",version:"current",sidebar:"docs",previous:{title:"\u4f7f\u7528 HTML \u6807\u7b7e",permalink:"/taro/docs/next/use-h5"},next:{title:"\u7f16\u8bd1\u914d\u7f6e\u8be6\u60c5",permalink:"/taro/docs/next/config-detail"}},u=[{value:"\u5168\u5c40\u53d8\u91cf",id:"\u5168\u5c40\u53d8\u91cf",children:[]},{value:"API \u7684 scope",id:"api-\u7684-scope",children:[{value:"1. \u5c42\u7ea7\u8fc7\u6df1",id:"1-\u5c42\u7ea7\u8fc7\u6df1",children:[]},{value:"2. \u4f7f\u7528\u4e86 <code>&lt;CustomWrapper&gt;</code>",id:"2-\u4f7f\u7528\u4e86-customwrapper",children:[]}]},{value:"dataset",id:"dataset",children:[]}],b={rightToc:u};function m(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"\u672c\u7bc7\u5c06\u8bb2\u8ff0 Taro \u5f00\u53d1\u548c\u539f\u751f\u5c0f\u7a0b\u5e8f\u5f00\u53d1\u7684\u4e3b\u8981\u5dee\u5f02\u3002\u5e0c\u671b\u80fd\u5e2e\u52a9\u638c\u63e1\u539f\u751f\u5c0f\u7a0b\u5e8f\u5f00\u53d1\uff0c\u4f46\u4e0d\u592a\u4e86\u89e3 Taro \u7684\u540c\u5b66\u5feb\u901f\u8fdb\u884c\u8fc1\u79fb\u3002"),Object(c.b)("h2",{id:"\u5168\u5c40\u53d8\u91cf"},"\u5168\u5c40\u53d8\u91cf"),Object(c.b)("p",null,"\u5728\u4f7f\u7528 React/Vue \u65f6\uff0c\u5168\u5c40\u53d8\u91cf\u63a8\u8350\u4f7f\u7528 ",Object(c.b)("strong",{parentName:"p"},"React Redux"),"\u3001",Object(c.b)("strong",{parentName:"p"},"Vuex")," \u7b49\u72b6\u6001\u7ba1\u7406\u5de5\u5177\u8fdb\u884c\u7ba1\u7406\u3002"),Object(c.b)("p",null,"\u800c\u6709\u65f6\u5019\u4e00\u4e9b\u4ece\u539f\u751f\u5c0f\u7a0b\u5e8f\u8f6c\u6362\u8fc7\u6765\u7684\u9879\u76ee\uff0c\u4f1a\u628a\u5168\u5c40\u53d8\u91cf\u6302\u8f7d\u5230 ",Object(c.b)("inlineCode",{parentName:"p"},"app")," \u4e0a\uff0c\u7136\u540e\u4f7f\u7528 ",Object(c.b)("inlineCode",{parentName:"p"},"getApp()")," \u83b7\u53d6\u5b83\u4eec\u3002\u6539\u9020\u4e3a ",Object(c.b)("strong",{parentName:"p"},"React Redux"),"\u3001",Object(c.b)("strong",{parentName:"p"},"Vuex")," \u7b49\u72b6\u6001\u7ba1\u7406\u65b9\u5f0f\u6210\u672c\u6bd4\u8f83\u5927\u3002"),Object(c.b)("p",null,"\u56e0\u6b64\u53ef\u4ee5\u4f7f\u7528\u5165\u53e3\u5bf9\u8c61\u7684 ",Object(c.b)("inlineCode",{parentName:"p"},"taroGlobalData")," \u5c5e\u6027\u5bf9\u8fd9\u79cd\u5199\u6cd5\u8fdb\u884c\u517c\u5bb9\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:'title="app.js"',title:'"app.js"'}),"class App extends Component {\n  taroGlobalData = {\n    x: 1\n  }\n  render () {\n    return this.props.children\n  }\n}\n")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:'title="index.js"',title:'"index.js"'}),"function Index () {\n  const app = Taro.getApp()\n  console.log(app.x)\n\n  return (...)\n}\n")),Object(c.b)("h2",{id:"api-\u7684-scope"},"API \u7684 scope"),Object(c.b)("p",null,"\u5728\u539f\u751f\u5c0f\u7a0b\u5e8f\u5f00\u53d1\u4e2d\uff0c\u5728\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u4e2d\u8c03\u7528\u4e00\u4e9b API\uff0c\u5982 ",Object(c.b)("inlineCode",{parentName:"p"},"createCanvasContext"),"\u3001",Object(c.b)("inlineCode",{parentName:"p"},"createSelectorQuery")," \u7b49\u65f6\uff0c\u9700\u8981\u4f20\u5165\u6307\u5411\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u81ea\u8eab\u7684 ",Object(c.b)("inlineCode",{parentName:"p"},"this"),"\uff0c\u8fd9\u91cc\u6682\u4e14\u79f0\u4e3a ",Object(c.b)("inlineCode",{parentName:"p"},"scope"),"\u3002"),Object(c.b)("p",null,"\u4f46\u662f Taro 3 \u4f7f\u7528 ",Object(c.b)("inlineCode",{parentName:"p"},"<template>")," \u6807\u7b7e\u8fdb\u884c\u6e32\u67d3\uff0c\u4e00\u822c\u4e0d\u4f1a\u4f7f\u7528\u4e0a\u81ea\u5b9a\u4e49\u7ec4\u4ef6\uff0c\u56e0\u6b64\u4e00\u822c\u4e0d\u9700\u8981\u4f20\u5165\u3002"),Object(c.b)("p",null,"\u53ea\u6709\u4e24\u79cd\u60c5\u51b5\u4f1a\u4f7f\u7528\u4e0a\u81ea\u5b9a\u4e49\u7ec4\u4ef6\uff0c\u8fd9\u65f6\u9700\u8981\u6b63\u786e\u4f20\u5165 ",Object(c.b)("inlineCode",{parentName:"p"},"scope"),"\uff0c\u5426\u5219\u6b64\u7c7b API \u7684\u8c03\u7528\u4f1a\u5931\u8d25\u3002"),Object(c.b)("h3",{id:"1-\u5c42\u7ea7\u8fc7\u6df1"},"1. \u5c42\u7ea7\u8fc7\u6df1"),Object(c.b)("p",null,"\u5bf9\u4e8e",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"platform-plugin-template#%E9%80%92%E5%BD%92%E4%B8%8E%E9%9D%9E%E9%80%92%E5%BD%92%E6%A8%A1%E6%9D%BF"}),"\u6a21\u677f\u4e0d\u652f\u6301\u9012\u5f52"),"\u7684\u5c0f\u7a0b\u5e8f\uff08\u5fae\u4fe1\u3001QQ\u3001\u4eac\u4e1c\u5c0f\u7a0b\u5e8f\u7b49\uff09\uff0c\u5f53\u9875\u9762\u5143\u7d20\u5d4c\u5957\u5c42\u7ea7\u8d85\u8fc7\u4e00\u5b9a\u5c42\u6570\uff08\u9ed8\u8ba4\u4e3a 16 \u5c42\uff0c\u53ef\u4ee5\u901a\u8fc7\u914d\u7f6e ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"config-detail#minibaselevel"}),"baseLevel")," \u4fee\u6539\uff09\uff0c\u4f1a\u521b\u5efa\u4e00\u4e2a\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u534f\u52a9\u9012\u5f52\u3002"),Object(c.b)("p",null,"\u6b64\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u7684 ",Object(c.b)("inlineCode",{parentName:"p"},"scope")," \u6ca1\u6709\u66b4\u9732\u7ed9\u5f00\u53d1\u8005\uff0c\u56e0\u6b64\u5c42\u7ea7\u8fc7\u6df1\u4e14\u9700\u8981\u8c03\u7528\u6b64\u7c7b API \u65f6\uff0c\u9700\u8981\u4f7f\u7528 ",Object(c.b)("inlineCode",{parentName:"p"},"<CustomWrapper>")," \u7ec4\u4ef6\u5305\u88f9\u3002"),Object(c.b)("p",null,"\u76f8\u5173\u8ba8\u8bba\uff1a",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/NervJS/taro/issues/9357"}),"#9357"),"\u3002"),Object(c.b)("h3",{id:"2-\u4f7f\u7528\u4e86-customwrapper"},"2. \u4f7f\u7528\u4e86 ",Object(c.b)("inlineCode",{parentName:"h3"},"<CustomWrapper>")),Object(c.b)("p",null,Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"optimized#2-customwrapper-%E7%BB%84%E4%BB%B6"}),Object(c.b)("inlineCode",{parentName:"a"},"<CustomWrapper>"))," \u7ec4\u4ef6\u5e38\u7528\u4e8e\u4f18\u5316\u66f4\u65b0\u6027\u80fd\u3002\u5b83\u672c\u8d28\u4e0a\u662f\u4e00\u4e2a\u5c0f\u7a0b\u5e8f\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u3002"),Object(c.b)(o.a,{defaultValue:"React",values:[{label:Object(c.b)(i.a,{mdxType:"ReactIcon"}),value:"React"},{label:Object(c.b)(i.b,{mdxType:"VueIcon"}),value:"Vue"}],mdxType:"Tabs"},Object(c.b)(l.a,{value:"React",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:'title="\u793a\u4f8b\u4ee3\u7801"',title:'"\u793a\u4f8b\u4ee3\u7801"'}),"<CustomWrapper id='demo' />\n\nconst page = Taro.getCurrentInstance().page\n// \u83b7\u53d6\u5230 CustomWrapper \u8fd9\u4e2a\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u5bf9\u8c61\uff0c\u4e5f\u5c31\u662f\u6240\u8bf4\u7684 scope\nconst scope = page.selectComponent('#demo')\n"))),Object(c.b)(l.a,{value:"Vue",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html",metastring:'title="\u793a\u4f8b\u4ee3\u7801"',title:'"\u793a\u4f8b\u4ee3\u7801"'}),"<template>\n  <custom-wrapper id=\"demo\" />\n</template>\n\n<script>\nimport Taro from '@tarojs/taro'\n\nexport default {\n  onReady () {\n    const page = Taro.getCurrentInstance().page\n    // \u83b7\u53d6\u5230 CustomWrapper \u8fd9\u4e2a\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u5bf9\u8c61\uff0c\u4e5f\u5c31\u662f\u6240\u8bf4\u7684 scope\n    const scope = page.selectComponent('#demo')\n  }\n}\n<\/script>\n")))),Object(c.b)("h2",{id:"dataset"},"dataset"),Object(c.b)("p",null,"\u5c0f\u7a0b\u5e8f\u7684 ",Object(c.b)("inlineCode",{parentName:"p"},"dataset")," \u6982\u5ff5\u5728 Taro \u4e2d\u5f97\u5230\u90e8\u5206\u5b9e\u73b0\uff0c\u8be6\u7ec6\u8bf7\u770b\uff1a"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"react-overall#dataset"}),"React dataset")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"vue-overall#dataset"}),"Vue dataset"))))}m.isMDXComponent=!0}}]);