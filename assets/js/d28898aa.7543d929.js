"use strict";(self.webpackChunkwechaty_docusaurus=self.webpackChunkwechaty_docusaurus||[]).push([[4676],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return d}});var o=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},a=Object.keys(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=o.createContext({}),l=function(t){var e=o.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=l(t.components);return o.createElement(s.Provider,{value:e},t.children)},h={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},u=o.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,s=t.parentName,p=c(t,["components","mdxType","originalType","parentName"]),u=l(n),d=r,g=u["".concat(s,".").concat(d)]||u[d]||h[d]||a;return n?o.createElement(g,i(i({ref:e},p),{},{components:n})):o.createElement(g,i({ref:e},p))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,i=new Array(a);i[0]=u;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=t,c.mdxType="string"==typeof t?t:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},449:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return h}});var o=n(87462),r=n(63366),a=(n(67294),n(3905)),i=["components"],c={title:"Getting started"},s=void 0,l={unversionedId:"getting-started-with-wechaty",id:"getting-started-with-wechaty",title:"Getting started",description:"We have made it very easy to start writing Wechaty code in any of the supported programming languages. You need a few lines of code to turn your IM (such as WeChat, Whatsapp, Wecom, Lark, etc) account into a chatbot. Your chatbot will have conversations on behalf of you with Wechaty Conversational RPA technology.",source:"@site/docs/getting-started-with-wechaty.mdx",sourceDirName:".",slug:"/getting-started-with-wechaty",permalink:"/docs/getting-started-with-wechaty",editUrl:"https://github.com/wechaty/docusaurus/edit/main/docusaurus/docs/getting-started-with-wechaty.mdx",tags:[],version:"current",lastUpdatedBy:"nibble0101",lastUpdatedAt:1627665592,formattedLastUpdatedAt:"7/30/2021",frontMatter:{title:"Getting started"},sidebar:"docs",previous:{title:"Who is using Wechaty",permalink:"/docs/who-is-using-wechaty"},next:{title:"Main concepts in Wechaty",permalink:"/docs/main-concepts-in-wechaty"}},p={},h=[{value:"Gitpod",id:"gitpod",level:2},{value:"Google cloud shell",id:"google-cloud-shell",level:2},{value:"Local development environment",id:"local-development-environment",level:2}],u={toc:h};function d(t){var e=t.components,n=(0,r.Z)(t,i);return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"We have made it very easy to start writing Wechaty code in any of the supported programming languages. You need a few lines of code to turn your IM (such as ",(0,a.kt)("a",{parentName:"p",href:"https://www.wechat.com/"},"WeChat"),", ",(0,a.kt)("a",{parentName:"p",href:"https://www.whatsapp.com/"},"Whatsapp"),", ",(0,a.kt)("a",{parentName:"p",href:"https://work.weixin.qq.com/"},"Wecom"),", ",(0,a.kt)("a",{parentName:"p",href:"https://www.larksuite.com/zh_cn/"},"Lark"),", etc) account into a chatbot. Your chatbot will have conversations on behalf of you with Wechaty Conversational RPA technology."),(0,a.kt)("p",null,"We have set up a Wechaty ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-getting-started"},"getting-started repository")," to help you start writing code in a couple of minutes. The Wechaty ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-getting-started"},"getting-started repository")," contains code for a bot which we refer to as the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-getting-started/blob/master/examples/ding-dong-bot.js"},"DING DONG")," bot. The DING DOT bot is meant to help absolute beginners start writing Wechaty code without setting up their own development environment. You can run it on ",(0,a.kt)("a",{parentName:"p",href:"https://www.gitpod.io/"},"Gitpod"),", ",(0,a.kt)("a",{parentName:"p",href:"https://cloud.google.com/shell"},"Google cloud shell")," or on your local machine. ",(0,a.kt)("a",{parentName:"p",href:"https://www.gitpod.io/"},"Gitpod")," and ",(0,a.kt)("a",{parentName:"p",href:"https://cloud.google.com/shell"},"Google cloud shell")," are both online ",(0,a.kt)("a",{parentName:"p",href:"https://www.redhat.com/en/topics/middleware/what-is-ide"},"IDEs")," that will get you running the DING DONG bot instantly."),(0,a.kt)("h2",{id:"gitpod"},"Gitpod"),(0,a.kt)("p",null,"Gitpod is an online IDE which provides you with a complete development environment accompanied by a Visual-Studio-Code powered IDE and a cloud-based Linux container. You can navigate to the ",(0,a.kt)("a",{parentName:"p",href:"/docs/quick-start/running-on-gitpod"},"Tutorials section")," to run the Wechaty ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-getting-started"},"getting-started repository")," on gitpod."),(0,a.kt)("h2",{id:"google-cloud-shell"},"Google cloud shell"),(0,a.kt)("p",null,"Google cloud shell is also an online development and operations environment which is accessible anywhere with your browser. You can navigate to the ",(0,a.kt)("a",{parentName:"p",href:"/docs/quick-start/running-on-google-cloud-shell"},"Tutorials section")," to run the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-getting-started"},"getting-started repository")," on Google cloud shell instantly."),(0,a.kt)("h2",{id:"local-development-environment"},"Local development environment"),(0,a.kt)("p",null,"You can also set up your own server for running the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-getting-started"},"getting-started repository")," on your machine instead of using the cloud-based IDE. There is a ",(0,a.kt)("a",{parentName:"p",href:"/docs/getting-started/running-locally"},"beginner-friendly tutorial")," in the ",(0,a.kt)("a",{parentName:"p",href:"/docs/getting-started/"},"tutorials section")," which will take you by the hand to help you run the getting-started repository on your local machine."))}d.isMDXComponent=!0}}]);