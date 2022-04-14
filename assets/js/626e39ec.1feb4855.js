(self.webpackChunkwechaty_docusaurus=self.webpackChunkwechaty_docusaurus||[]).push([[9385],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=l(r),d=o,y=f["".concat(u,".").concat(d)]||f[d]||s[d]||a;return r?n.createElement(y,i(i({ref:t},p),{},{components:r})):n.createElement(y,i({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},12945:function(e,t,r){"use strict";r.r(t),r.d(t,{UUIDv4:function(){return O},assets:function(){return k},contentTitle:function(){return h},default:function(){return P},frontMatter:function(){return b},metadata:function(){return g},toc:function(){return w}});var n,o=r(87462),a=r(63366),i=(r(67294),r(3905)),c=r(74855),u=new Uint8Array(16);function l(){if(!n&&!(n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return n(u)}var p=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var s=function(e){return"string"==typeof e&&p.test(e)},f=[],d=0;d<256;++d)f.push((d+256).toString(16).substr(1));var y=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=(f[e[t+0]]+f[e[t+1]]+f[e[t+2]]+f[e[t+3]]+"-"+f[e[t+4]]+f[e[t+5]]+"-"+f[e[t+6]]+f[e[t+7]]+"-"+f[e[t+8]]+f[e[t+9]]+"-"+f[e[t+10]]+f[e[t+11]]+f[e[t+12]]+f[e[t+13]]+f[e[t+14]]+f[e[t+15]]).toLowerCase();if(!s(r))throw TypeError("Stringified UUID is invalid");return r};var v=function(e,t,r){var n=(e=e||{}).random||(e.rng||l)();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,t){r=r||0;for(var o=0;o<16;++o)t[r+o]=n[o];return t}return y(n)},m=["components"],b={title:"Wechaty Puppet Service Token",sidebar_label:"Token"},h=void 0,g={unversionedId:"specs/token",id:"specs/token",title:"Wechaty Puppet Service Token",description:"Wechaty Puppet Service Token (TOKEN), is ... (tbw)",source:"@site/docs/specs/token.md",sourceDirName:"specs",slug:"/specs/token",permalink:"/docs/specs/token",editUrl:"https://github.com/wechaty/docusaurus/edit/main/docusaurus/docs/specs/token.md",tags:[],version:"current",lastUpdatedBy:"Huan LI (\u674e\u5353\u6853)",lastUpdatedAt:1631075311,formattedLastUpdatedAt:"9/8/2021",frontMatter:{title:"Wechaty Puppet Service Token",sidebar_label:"Token"},sidebar:"docs",previous:{title:"Service",permalink:"/docs/specs/service"},next:{title:"Gateway",permalink:"/docs/specs/"}},k={},w=[{value:"Format / Convensions",id:"format--convensions",level:2},{value:"Service Discovery",id:"service-discovery",level:2},{value:"Tools",id:"tools",level:2},{value:"Online UUID Generator",id:"online-uuid-generator",level:3},{value:"Wechaty Puppet Service Token Validator",id:"wechaty-puppet-service-token-validator",level:3},{value:"How to get a token",id:"how-to-get-a-token",level:2},{value:"Blogs",id:"blogs",level:2}],O=function(){var e={token:v()};return(0,i.kt)("div",null,(0,i.kt)(c.CopyToClipboard,{text:e.token,onCopy:function(){alert("Has copied "+e.token+" to your clipboard."),e.token=v()},mdxType:"CopyToClipboard"},(0,i.kt)("button",null,"Copy ",e.token," to clipboard")))},C={toc:w,UUIDv4:O};function P(e){var t=e.components,r=(0,a.Z)(e,m);return(0,i.kt)("wrapper",(0,o.Z)({},C,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Wechaty Puppet Service Token (TOKEN), is ... (tbw)"),(0,i.kt)("h2",{id:"format--convensions"},"Format / Convensions"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"puppet_wxwork_id")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"UUIDv4"))),(0,i.kt)("h2",{id:"service-discovery"},"Service Discovery"),(0,i.kt)("p",null,"In-service / Out-service check:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"curl https://api.chatie.io/v0/hosties/${TOKEN}\n")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"HTTP/200"),": In-service"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"HTTP/404"),": Out-service")),(0,i.kt)("h2",{id:"tools"},"Tools"),(0,i.kt)("p",null,"Here's some useful tools to deal with your token."),(0,i.kt)("h3",{id:"online-uuid-generator"},"Online UUID Generator"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Copy from below:",(0,i.kt)(O,{mdxType:"UUIDv4"})),(0,i.kt)("li",{parentName:"ol"},"Visit UUID Generator:\n",(0,i.kt)("a",{parentName:"li",href:"https://www.uuidgenerator.net/version4"},"https://www.uuidgenerator.net/version4"))),(0,i.kt)("h3",{id:"wechaty-puppet-service-token-validator"},"Wechaty Puppet Service Token Validator"),(0,i.kt)("h2",{id:"how-to-get-a-token"},"How to get a token"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"TOKEN")," is the authorization string for the ",(0,i.kt)("a",{parentName:"p",href:"/docs/puppet-services/"},"Wechaty Puppet Service"),"."),(0,i.kt)("p",null,"You can find how to get a ",(0,i.kt)("inlineCode",{parentName:"p"},"TOKEN")," for using the Wechaty Puppet Servcie from the ",(0,i.kt)("a",{parentName:"p",href:"/docs/puppet-services/"},"docs link"),"."),(0,i.kt)("h2",{id:"blogs"},"Blogs"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://wechaty.js.org/2021/01/14/wechaty-puppet-service/"},"Introducing Wechaty Puppet Service (Providers), @huan, Jan 14, 2021"))))}P.isMDXComponent=!0},20640:function(e,t,r){"use strict";var n=r(25108),o=r(11742),a={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var r,i,c,u,l,p,s=!1;t||(t={}),r=t.debug||!1;try{if(c=o(),u=document.createRange(),l=document.getSelection(),(p=document.createElement("span")).textContent=e,p.style.all="unset",p.style.position="fixed",p.style.top=0,p.style.clip="rect(0, 0, 0, 0)",p.style.whiteSpace="pre",p.style.webkitUserSelect="text",p.style.MozUserSelect="text",p.style.msUserSelect="text",p.style.userSelect="text",p.addEventListener("copy",(function(o){if(o.stopPropagation(),t.format)if(o.preventDefault(),void 0===o.clipboardData){r&&n.warn("unable to use e.clipboardData"),r&&n.warn("trying IE specific stuff"),window.clipboardData.clearData();var i=a[t.format]||a.default;window.clipboardData.setData(i,e)}else o.clipboardData.clearData(),o.clipboardData.setData(t.format,e);t.onCopy&&(o.preventDefault(),t.onCopy(o.clipboardData))})),document.body.appendChild(p),u.selectNodeContents(p),l.addRange(u),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");s=!0}catch(f){r&&n.error("unable to copy using execCommand: ",f),r&&n.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),s=!0}catch(f){r&&n.error("unable to copy using clipboardData: ",f),r&&n.error("falling back to prompt"),i=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(i,e)}}finally{l&&("function"==typeof l.removeRange?l.removeRange(u):l.removeAllRanges()),p&&document.body.removeChild(p),c()}return s}},74300:function(e,t,r){"use strict";function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.CopyToClipboard=void 0;var o=c(r(67294)),a=c(r(20640)),i=["text","onCopy","options","children"];function c(e){return e&&e.__esModule?e:{default:e}}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){h(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function d(e,t){return d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},d(e,t)}function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=b(e);if(t){var o=b(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return v(this,r)}}function v(e,t){if(t&&("object"===n(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return m(e)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e){return b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},b(e)}function h(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&d(e,t)}(u,e);var t,r,n,c=y(u);function u(){var e;s(this,u);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return h(m(e=c.call.apply(c,[this].concat(r))),"onClick",(function(t){var r=e.props,n=r.text,i=r.onCopy,c=r.children,u=r.options,l=o.default.Children.only(c),p=(0,a.default)(n,u);i&&i(n,p),l&&l.props&&"function"==typeof l.props.onClick&&l.props.onClick(t)})),e}return t=u,(r=[{key:"render",value:function(){var e=this.props,t=(e.text,e.onCopy,e.options,e.children),r=p(e,i),n=o.default.Children.only(t);return o.default.cloneElement(n,l(l({},r),{},{onClick:this.onClick}))}}])&&f(t.prototype,r),n&&f(t,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(o.default.PureComponent);t.CopyToClipboard=g,h(g,"defaultProps",{onCopy:void 0,options:void 0})},74855:function(e,t,r){"use strict";var n=r(74300).CopyToClipboard;n.CopyToClipboard=n,e.exports=n},11742:function(e){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,r=[],n=0;n<e.rangeCount;n++)r.push(e.getRangeAt(n));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||r.forEach((function(t){e.addRange(t)})),t&&t.focus()}}}}]);