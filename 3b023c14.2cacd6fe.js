(window.webpackJsonp=window.webpackJsonp||[]).push([[402],{1786:function(e,t,n){"use strict";function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return a}))},1787:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}n.d(t,"a",(function(){return a}))},1788:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,O=p["".concat(o,".").concat(m)]||p[m]||d[m]||i;return n?r.a.createElement(O,c(c({ref:t},b),{},{components:n})):r.a.createElement(O,c({ref:t},b))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var b=2;b<i;b++)o[b]=n[b];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},468:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n(1786),r=n(1787),i=(n(0),n(1788)),o={title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u8f6c Taro"},c={unversionedId:"taroize",id:"version-2.x/taroize",isDocsHomePage:!1,title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u8f6c Taro",description:"\u81ea v1.2.0 \u5f00\u59cb\u652f\u6301\u6b64\u529f\u80fd",source:"@site/versioned_docs/version-2.x/taroize.md",slug:"/taroize",permalink:"/taro/docs/2.x/taroize",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-2.x/taroize.md",version:"2.x",sidebar:"version-2.x/docs",previous:{title:"Taro \u4ecb\u7ecd",permalink:"/taro/docs/2.x/README"},next:{title:"Taro \u56e2\u961f",permalink:"/taro/docs/2.x/team"}},l=[{value:"\u4e8c\u6b21\u5f00\u53d1",id:"\u4e8c\u6b21\u5f00\u53d1",children:[{value:"<code>this.setData</code>",id:"thissetdata",children:[]},{value:"<code>this.data</code> \u548c <code>this.properties</code>",id:"thisdata-\u548c-thisproperties",children:[]},{value:"\u751f\u547d\u5468\u671f",id:"\u751f\u547d\u5468\u671f",children:[]}]},{value:"\u5e38\u89c1\u95ee\u9898",id:"\u5e38\u89c1\u95ee\u9898",children:[{value:"\u5728\u5c0f\u7a0b\u5e8f IDE \u663e\u793a <code>_createData</code> \u9519\u8bef",id:"\u5728\u5c0f\u7a0b\u5e8f-ide-\u663e\u793a-_createdata-\u9519\u8bef",children:[]},{value:"\u8f6c\u6362 <code>wxParse</code> \u62a5\u9519\u4e0d\u5b58\u5728\u6587\u4ef6",id:"\u8f6c\u6362-wxparse-\u62a5\u9519\u4e0d\u5b58\u5728\u6587\u4ef6",children:[]},{value:"\u4e0d\u652f\u6301 <code>relations</code> \u548c <code>Behavior</code>",id:"\u4e0d\u652f\u6301-relations-\u548c-behavior",children:[]},{value:"\u8f6c\u6362 wepy \u6587\u4ef6\u4e0d\u6210\u529f",id:"\u8f6c\u6362-wepy-\u6587\u4ef6\u4e0d\u6210\u529f",children:[]}]}],b={rightToc:l};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"\u81ea ",Object(i.b)("inlineCode",{parentName:"p"},"v1.2.0")," \u5f00\u59cb\u652f\u6301\u6b64\u529f\u80fd")),Object(i.b)("p",null,"Taro \u53ef\u4ee5\u5c06\u4f60\u7684\u539f\u751f\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u5e94\u7528\u8f6c\u6362\u4e3a Taro \u4ee3\u7801\uff0c\u8fdb\u800c\u4f60\u53ef\u4ee5\u901a\u8fc7 ",Object(i.b)("inlineCode",{parentName:"p"},"taro build")," \u7684\u547d\u4ee4\u5c06 Taro \u4ee3\u7801\u8f6c\u6362\u4e3a\u5bf9\u5e94\u5e73\u53f0\u7684\u4ee3\u7801\uff0c\u6216\u8005\u5bf9\u8f6c\u6362\u540e\u7684 Taro \u4ee3\u7801\u7528 React \u7684\u65b9\u5f0f\u8fdb\u884c\u4e8c\u6b21\u5f00\u53d1\u3002"),Object(i.b)("p",null,"\u5fae\u4fe1\u539f\u751f\u5c0f\u7a0b\u5e8f\u8f6c Taro \u7684\u64cd\u4f5c\u975e\u5e38\u7b80\u5355\uff0c\u9996\u5148\u5fc5\u987b\u5b89\u88c5\u4f7f\u7528 ",Object(i.b)("inlineCode",{parentName:"p"},"npm i -g @tarojs/cli")," \u5b89\u88c5 Taro \u547d\u4ee4\u884c\u5de5\u5177\uff0c\u5176\u6b21\u5728\u547d\u4ee4\u884c\u4e2d\u5b9a\u4f4d\u5230\u5c0f\u7a0b\u5e8f\u9879\u76ee\u7684\u6839\u76ee\u5f55\uff0c\u6839\u76ee\u5f55\u4e2d\u8fd0\u884c\uff1a"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ taro convert\n")),Object(i.b)("p",null,"\u5373\u53ef\u5b8c\u6210\u8f6c\u6362\u3002\u8f6c\u6362\u540e\u7684\u4ee3\u7801\u4fdd\u5b58\u5728\u6839\u76ee\u5f55\u4e0b\u7684 ",Object(i.b)("inlineCode",{parentName:"p"},"taroConvert")," \u6587\u4ef6\u5939\u4e0b\u3002\u4f60\u9700\u8981\u5b9a\u4f4d\u5230 ",Object(i.b)("inlineCode",{parentName:"p"},"taroConvert")," \u76ee\u5f55\u6267\u884c ",Object(i.b)("inlineCode",{parentName:"p"},"npm install")," \u547d\u4ee4\u4e4b\u540e\u5c31\u53ef\u4ee5\u4f7f\u7528 ",Object(i.b)("inlineCode",{parentName:"p"},"taro build")," \u547d\u4ee4\u7f16\u8bd1\u5230\u5bf9\u5e94\u5e73\u53f0\u7684\u4ee3\u7801\u3002"),Object(i.b)("h2",{id:"\u4e8c\u6b21\u5f00\u53d1"},"\u4e8c\u6b21\u5f00\u53d1"),Object(i.b)("p",null,"\u5047\u8bbe\u5df2\u6709\u4e00\u4e2a\u8f6c\u6362\u540e\u6587\u4ef6\u5982\u4e0b\uff1a"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'import { View } from \'@tarojs/components\'\nimport Taro from \'@tarojs/taro\'\nimport withWeapp from \'@tarojs/with-weapp\'\nimport \'./index.scss\'\n\nvar app = Taro.getApp()\n\n@withWeapp(\'Page\')\nclass _C extends Taro.Component {\n  state = {}\n\n  componentWillMount(e) {\n    var orderId = e.id\n    this.data.orderId = orderId\n  }\n\n  componentDidShow() {\n    var that = this\n    Taro.request({\n      url: \'https://api.it120.cc/\' + app.globalData.subDomain + \'/order/detail\',\n      data: {\n        token: Taro.getStorageSync(\'token\'),\n        id: that.data.orderId\n      },\n      success: res => {\n        Taro.hideLoading()\n        if (res.data.code != 0) {\n          Taro.showModal({\n            title: \'\u9519\u8bef\',\n            content: res.data.msg,\n            showCancel: false\n          })\n          return\n        }\n        that.setData({\n          orderDetail: res.data.data,\n          logisticsTraces: res.data.data.logisticsTraces.reverse()\n        })\n      }\n    })\n  }\n\n  config = {\n    navigationBarTitleText: \'\u7269\u6d41\u8be6\u60c5\'\n  }\n\n  render() {\n    const {\n      orderDetail: orderDetail,\n      logisticsTraces: logisticsTraces\n    } = this.state\n    return (\n      <View className="container">\n        <View className="top-sec">\n          <View className="a-row">\n            <View className="label">\u7269\u6d41\u5355\u53f7</View>\n            <View className="text">{orderDetail.logistics.trackingNumber}</View>\n          </View>\n          <View className="a-row">\n            <View className="label">\u7269\u6d41\u516c\u53f8</View>\n            <View className="text">{orderDetail.logistics.shipperName}</View>\n          </View>\n        </View>\n        <View className="sec-wrap">\n          <View className="details-info">\n            <View className="line-box" />\n            {logisticsTraces.map((item, index) => {\n              return (\n                <View className="a-row" key={index}>\n                  <View className="dot">\n                    <View\n                      className="active-dot"\n                      hidden={index == 0 ? false : true}\n                    >\n                      <View className="yuan-red" />\n                    </View>\n                    <View\n                      className="default-dot"\n                      hidden={index == 0 ? true : false}\n                    />\n                  </View>\n                  <View className="info">\n                    <View className="date-box">{item.AcceptTime}</View>\n                    <View className="text">{item.AcceptStation}</View>\n                  </View>\n                </View>\n              )\n            })}\n          </View>\n        </View>\n      </View>\n    )\n  }\n}\n\nexport default _C\n')),Object(i.b)("p",null,"\u5b83\u770b\u8d77\u6765\u5c31\u50cf\u666e\u901a\u7684 Taro \u7ec4\u4ef6\uff0c\u6700\u91cd\u8981\u7684\u533a\u522b\u5c31\u5728\u4e8e ",Object(i.b)("inlineCode",{parentName:"p"},"@withWeapp()")," \u8fd9\u4e2a\u88c5\u9970\u5668\uff0c\u4f60\u53ef\u4ee5\u5c06\u5b83\u7406\u89e3\u4e3a\u8f6c\u6362\u4ee3\u7801\u7684\u8fd0\u884c\u65f6\uff0c",Object(i.b)("inlineCode",{parentName:"p"},"@withWeapp()")," \u4f1a\u589e\u52a0\u4e00\u4e9b\u539f\u6765 Taro \u6ca1\u6709\u65b9\u6cd5\u548c\u5c5e\u6027\uff0c\u4f8b\u5982\uff1a"),Object(i.b)("h3",{id:"thissetdata"},Object(i.b)("inlineCode",{parentName:"h3"},"this.setData")),Object(i.b)("p",null,"\u8f6c\u6362\u540e\u7684 ",Object(i.b)("inlineCode",{parentName:"p"},"this.setData")," \u7684 API \u76f8\u5f53\u4e8e\u5c0f\u7a0b\u5e8f\u7684 ",Object(i.b)("inlineCode",{parentName:"p"},"this.setData")," \u7684 polyfill\uff0c\u4ed6\u548c ",Object(i.b)("inlineCode",{parentName:"p"},"this.setState")," \u6700\u5927\u7684\u533a\u522b\u5c31\u5728\u4e8e\uff0c",Object(i.b)("inlineCode",{parentName:"p"},"this.setData")," \u4e4b\u540e ",Object(i.b)("inlineCode",{parentName:"p"},"data")," \u7684\u6570\u636e\u662f\u540c\u6b65\u66f4\u65b0\uff0c\u800c\u6e32\u67d3\u662f\u5f02\u6b65\u66f4\u65b0\uff0c\u800c ",Object(i.b)("inlineCode",{parentName:"p"},"setState")," \u4e24\u8005\u90fd\u662f\u5f02\u6b65\u7684\u3002"),Object(i.b)("h3",{id:"thisdata-\u548c-thisproperties"},Object(i.b)("inlineCode",{parentName:"h3"},"this.data")," \u548c ",Object(i.b)("inlineCode",{parentName:"h3"},"this.properties")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"this.data")," \u548c ",Object(i.b)("inlineCode",{parentName:"p"},"this.properties")," \u76f8\u5f53\u4e8e Taro \u7684 ",Object(i.b)("inlineCode",{parentName:"p"},"this.state")," \u548c ",Object(i.b)("inlineCode",{parentName:"p"},"this.props")," \u7684 alias\uff0c\u5f53\u5b83\u4eec\u7684\u6570\u636e\u66f4\u65b0\u65f6\uff0c\u5bf9\u5e94\u7684 ",Object(i.b)("inlineCode",{parentName:"p"},"state")," \u548c ",Object(i.b)("inlineCode",{parentName:"p"},"props")," \u4e5f\u4f1a\u540c\u6b65\u66f4\u65b0\u3002"),Object(i.b)("h3",{id:"\u751f\u547d\u5468\u671f"},"\u751f\u547d\u5468\u671f"),Object(i.b)("p",null,"Taro \u4f1a\u5c06\u539f\u59cb\u6587\u4ef6\u7684\u751f\u547d\u5468\u671f\u94a9\u5b50\u51fd\u6570\u8f6c\u6362\u4e3a Taro \u7684\u751f\u547d\u5468\u671f\uff0c\u5b8c\u6574\u5bf9\u5e94\u5173\u7cfb\u5982\u4e0b\uff1a"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"right"}),"Page.onLoad"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"right"}),"componentWillMount"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"right"}),"onShow"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"right"}),"componentDidShow")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"right"}),"onHide"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"right"}),"componentDidHide")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"right"}),"onReady"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"right"}),"componentDidMount")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"right"}),"onUnload"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"right"}),"componentWillUnmount")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"right"}),"onError"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"right"}),"componentDidCatchError")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"right"}),"App.onLaunch"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"right"}),"componentWillMount")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"right"}),"Component.created"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"right"}),"componentWillMount")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"right"}),"attached"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"right"}),"componentDidMount")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"right"}),"ready"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"right"}),"componentDidMount")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"right"}),"detached"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"right"}),"componentWillUnmount")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"right"}),"moved"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"right"}),"\u4fdd\u7559")))),Object(i.b)("h2",{id:"\u5e38\u89c1\u95ee\u9898"},"\u5e38\u89c1\u95ee\u9898"),Object(i.b)("h3",{id:"\u5728\u5c0f\u7a0b\u5e8f-ide-\u663e\u793a-_createdata-\u9519\u8bef"},"\u5728\u5c0f\u7a0b\u5e8f IDE \u663e\u793a ",Object(i.b)("inlineCode",{parentName:"h3"},"_createData")," \u9519\u8bef"),Object(i.b)("p",null,"\u8fd9\u4e2a\u9519\u8bef\u901a\u5e38\u662f\u7531\u4e8e\u539f\u59cb\u4ee3\u7801\u7684\u521d\u59cb ",Object(i.b)("inlineCode",{parentName:"p"},"data")," \u4e2d\u6ca1\u6709\u5bf9\u5e94\u7684\u6570\u636e\uff0c\u540e\u6765\u901a\u8fc7 ",Object(i.b)("inlineCode",{parentName:"p"},"this.setData")," \u8865\u5145\u6570\u636e\u9020\u6210\u7684\u3002\u5728 Taro \u4e2d\u63a8\u8350\u4e0d\u7ba1\u662f ",Object(i.b)("inlineCode",{parentName:"p"},"state(data)")," \u8fd8\u662f ",Object(i.b)("inlineCode",{parentName:"p"},"properties(props)")," \u90fd\u8981\u8bbe\u7f6e\u4e00\u4e2a\u9ed8\u8ba4\u503c\u3002\u4f60\u53ef\u4ee5\u5728\u7c7b\u6784\u9020\u5668\u6216\u4fee\u6539\u539f\u59cb\u4ee3\u7801\u63d0\u4f9b\u4e00\u4e2a\u9ed8\u8ba4\u503c\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0c\u8fd9\u4e5f\u5e94\u8be5\u662f\u7f16\u5199\u4ee3\u7801\u7684\u6700\u4f73\u5b9e\u8df5\u3002"),Object(i.b)("h3",{id:"\u8f6c\u6362-wxparse-\u62a5\u9519\u4e0d\u5b58\u5728\u6587\u4ef6"},"\u8f6c\u6362 ",Object(i.b)("inlineCode",{parentName:"h3"},"wxParse")," \u62a5\u9519\u4e0d\u5b58\u5728\u6587\u4ef6"),Object(i.b)("p",null,"\u8fd9\u662f\u7531\u4e8e ",Object(i.b)("inlineCode",{parentName:"p"},"wxParse")," \u7684\u6e90\u7801\u4f7f\u7528\u4e86\u4e00\u4e2a",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/icindy/wxParse/issues/255"}),"\u4e0d\u5b58\u5728\u7684 ",Object(i.b)("inlineCode",{parentName:"a"},"template"))," \u58f0\u660e\u9020\u6210\u7684\u3002\u4f60\u53ef\u4ee5\u4fee\u6539 ",Object(i.b)("inlineCode",{parentName:"p"},"wxParse")," \u7684\u6e90\u7801\u6587\u4ef6 ",Object(i.b)("inlineCode",{parentName:"p"},"wxParse.wxml")," 134 \u884c\u5230 207 \u884c\uff1a"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'\x3c!--\u5faa\u73af\u6a21\u7248--\x3e\n<template name="wxParse1">\n  \x3c!--<template is="wxParse1" data="{{item}}" />--\x3e\n  \x3c!--\u5224\u65ad\u662f\u5426\u662f\u6807\u7b7e\u8282\u70b9--\x3e\n  <block wx:if="{{item.node == \'element\'}}">\n    <block wx:if="{{item.tag == \'button\'}}">\n      <button type="default" size="mini">\n        <block wx:for="{{item.nodes}}" wx:for-item="item" wx:key="">\n          <template is="wxParse0" data="{{item}}" />\n        </block>\n      </button>\n    </block>\n    \x3c!--li\u7c7b\u578b--\x3e\n    <block wx:elif="{{item.tag == \'li\'}}">\n      <view class="{{item.classStr}} wxParse-li" style="{{item.styleStr}}">\n        <view class="{{item.classStr}} wxParse-li-inner">\n          <view class="{{item.classStr}} wxParse-li-text">\n            <view class="{{item.classStr}} wxParse-li-circle"></view>\n          </view>\n          <view class="{{item.classStr}} wxParse-li-text">\n            <block wx:for="{{item.nodes}}" wx:for-item="item" wx:key="">\n              <template is="wxParse0" data="{{item}}" />\n            </block>\n          </view>\n        </view>\n      </view>\n    </block>\n\n    \x3c!--video\u7c7b\u578b--\x3e\n    <block wx:elif="{{item.tag == \'video\'}}">\n      <template is="wxParseVideo" data="{{item}}" />\n    </block>\n\n    \x3c!--img\u7c7b\u578b--\x3e\n    <block wx:elif="{{item.tag == \'img\'}}">\n      <template is="wxParseImg" data="{{item}}" />\n    </block>\n\n    \x3c!--a\u7c7b\u578b--\x3e\n    <block wx:elif="{{item.tag == \'a\'}}">\n      <view bindtap="wxParseTagATap" class="wxParse-inline {{item.classStr}} wxParse-{{item.tag}}" data-src="{{item.attr.href}}" style="{{item.styleStr}}">\n        <block wx:for="{{item.nodes}}" wx:for-item="item" wx:key="">\n          <template is="wxParse0" data="{{item}}" />\n        </block>\n      </view>\n    </block>\n    <block wx:elif="{{item.tag == \'table\'}}">\n      <view class="{{item.classStr}} wxParse-{{item.tag}}" style="{{item.styleStr}}">\n        <block wx:for="{{item.nodes}}" wx:for-item="item" wx:key="">\n          <template is="wxParse0" data="{{item}}" />\n        </block>\n      </view>\n    </block>\n\n    <block wx:elif="{{item.tag == \'br\'}}">\n      <template is="WxParseBr"></template>\n    </block>\n    \x3c!--\u5176\u4ed6\u5757\u7ea7\u6807\u7b7e--\x3e\n    <block wx:elif="{{item.tagType == \'block\'}}">\n      <view class="{{item.classStr}} wxParse-{{item.tag}}" style="{{item.styleStr}}">\n        <block wx:for="{{item.nodes}}" wx:for-item="item" wx:key="">\n          <template is="wxParse0" data="{{item}}" />\n        </block>\n      </view>\n    </block>\n\n    \x3c!--\u5185\u8054\u6807\u7b7e--\x3e\n    <view wx:else class="{{item.classStr}} wxParse-{{item.tag}} wxParse-{{item.tagType}}" style="{{item.styleStr}}">\n      <block wx:for="{{item.nodes}}" wx:for-item="item" wx:key="">\n        <template is="wxParse0" data="{{item}}" />\n      </block>\n    </view>\n\n  </block>\n\n  \x3c!--\u5224\u65ad\u662f\u5426\u662f\u6587\u672c\u8282\u70b9--\x3e\n  <block wx:elif="{{item.node == \'text\'}}">\n    \x3c!--\u5982\u679c\u662f\uff0c\u76f4\u63a5\u8fdb\u884c--\x3e\n    <template is="WxEmojiView" data="{{item}}" />\n  </block>\n\n</template>\n')),Object(i.b)("p",null,"\u628a ",Object(i.b)("inlineCode",{parentName:"p"},'<template name="wxParse1">')," \u7684\u6a21\u677f\u5185\u6240\u6709 ",Object(i.b)("inlineCode",{parentName:"p"},'<template is="wxParse2" data="{{item}}" />')," \u4fee\u6539\u4e3a ",Object(i.b)("inlineCode",{parentName:"p"},'<template is="wxParse0" data="{{item}}" />')," \u518d\u8fd0\u884c ",Object(i.b)("inlineCode",{parentName:"p"},"taro convert")," \u5373\u53ef\u3002\u8fd9\u6837\u4fee\u6539\u4e4b\u540e\u8fd8\u4f1a\u53d6\u6d88\u539f\u6765 ",Object(i.b)("inlineCode",{parentName:"p"},"wxParse")," \u53ea\u80fd\u5904\u7406 11 \u7ea7 HTML \u5d4c\u5957\u7684\u95ee\u9898\uff0c\u7406\u8bba\u4e0a\u5185\u5b58\u4e0d\u7206\u6808\u53ef\u4ee5\u5904\u7406\u65e0\u9650\u7ea7 HTML \u5d4c\u5957\u3002"),Object(i.b)("h3",{id:"\u4e0d\u652f\u6301-relations-\u548c-behavior"},"\u4e0d\u652f\u6301 ",Object(i.b)("inlineCode",{parentName:"h3"},"relations")," \u548c ",Object(i.b)("inlineCode",{parentName:"h3"},"Behavior")),Object(i.b)("p",null,"\u76ee\u524d\u8f6c\u6362\u6682\u53ea\u652f\u6301\u8f6c\u6362 ",Object(i.b)("inlineCode",{parentName:"p"},"Page"),"\u3001",Object(i.b)("inlineCode",{parentName:"p"},"Component")," \u3001",Object(i.b)("inlineCode",{parentName:"p"},"App")," \u4e09\u79cd\u6784\u9020\u5668\u521b\u9020\u7684\u5c0f\u7a0b\u5e8f\u7ec4\u4ef6\u5b9e\u4f8b\u3002 ",Object(i.b)("inlineCode",{parentName:"p"},"relations")," \u548c ",Object(i.b)("inlineCode",{parentName:"p"},"Behavior")," \u5728\u5176\u4ed6\u8bb8\u591a\u5c0f\u7a0b\u5e8f\u7aef\u4e2d\u8fd8\u6ca1\u6709\u5bf9\u5e94\u7684\u5b9e\u73b0\uff0c\u6211\u4eec\u8ba4\u4e3a\u5b9e\u73b0\u8fd9\u4e24\u4e2a\u529f\u80fd\u610f\u4e49\u4e0d\u5927\u3002"),Object(i.b)("h3",{id:"\u8f6c\u6362-wepy-\u6587\u4ef6\u4e0d\u6210\u529f"},"\u8f6c\u6362 wepy \u6587\u4ef6\u4e0d\u6210\u529f"),Object(i.b)("p",null,"\u76ee\u524d\u53ea\u80fd\u652f\u6301\u8f6c\u6362\u4f7f\u7528\u539f\u751f\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u5f00\u53d1\u7684\u5e94\u7528\u3002"))}s.isMDXComponent=!0}}]);