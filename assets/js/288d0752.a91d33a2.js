"use strict";(self.webpackChunkwechaty_docusaurus=self.webpackChunkwechaty_docusaurus||[]).push([[258],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return h}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),u=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=u(a),h=r,d=m["".concat(p,".").concat(h)]||m[h]||c[h]||l;return a?n.createElement(d,o(o({ref:t},s),{},{components:a})):n.createElement(d,o({ref:t},s))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},58215:function(e,t,a){a.d(t,{Z:function(){return r}});var n=a(67294);function r(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},9877:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(87462),r=a(67294),l=a(72389),o=a(17704),i=a(86010),p="tabItem_LplD";function u(e){var t,a,l,u=e.lazy,s=e.block,c=e.defaultValue,m=e.values,h=e.groupId,d=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=m?m:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,o.lx)(k,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===c?c:null!=(t=null!=c?c:null==(a=f.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(l=f[0])?void 0:l.props.value;if(null!==b&&!k.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,o.UB)(),g=w.tabGroupChoices,v=w.setTabGroupChoices,N=(0,r.useState)(b),T=N[0],P=N[1],E=[],O=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var x=g[h];null!=x&&x!==T&&k.some((function(e){return e.value===x}))&&P(x)}var j=function(e){var t=e.currentTarget,a=E.indexOf(t),n=k[a].value;n!==T&&(O(t),P(n),null!=h&&v(h,n))},C=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=E.indexOf(e.currentTarget)+1;a=E[n]||E[0];break;case"ArrowLeft":var r=E.indexOf(e.currentTarget)-1;a=E[r]||E[E.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":s},d)},k.map((function(e){var t=e.value,a=e.label,l=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return E.push(e)},onKeyDown:C,onFocus:j,onClick:j},l,{className:(0,i.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":T===t})}),null!=a?a:t)}))),u?(0,r.cloneElement)(f.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function s(e){var t=(0,l.Z)();return r.createElement(u,(0,n.Z)({key:String(t)},e))}},11041:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return h}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),o=a(9877),i=a(58215),p=["components"],u={title:"Deploy in Lark"},s=void 0,c={unversionedId:"howto/deploy-lark",id:"howto/deploy-lark",title:"Deploy in Lark",description:"Lark provides highly-productive collaboration experience for optimal team efficiency and features like messenger, calendar, docs, mail, workplace, and more. In this how to guide, you will learn how to deploy the bot in Lark locally and integrate bot from the list of examples present in starter templete.",source:"@site/docs/howto/deploy-lark.mdx",sourceDirName:"howto",slug:"/howto/deploy-lark",permalink:"/docs/howto/deploy-lark",editUrl:"https://github.com/wechaty/docusaurus/edit/main/docusaurus/docs/howto/deploy-lark.mdx",tags:[],version:"current",lastUpdatedBy:"Abhishek Jaiswal",lastUpdatedAt:1632254808,formattedLastUpdatedAt:"9/21/2021",frontMatter:{title:"Deploy in Lark"},sidebar:"docs",previous:{title:"Deploy in WhatsApp",permalink:"/docs/howto/deploy-whatsapp"},next:{title:"Deploy in Gitter",permalink:"/docs/howto/deploy-gitter"}},m={},h=[{value:"Requirements",id:"requirements",level:2},{value:"Deployment",id:"deployment",level:2},{value:"Integration",id:"integration",level:2},{value:"Prerequisite",id:"prerequisite",level:3},{value:"References",id:"references",level:2},{value:"Blogs",id:"blogs",level:2}],d={toc:h};function f(e){var t=e.components,u=(0,r.Z)(e,p);return(0,l.kt)("wrapper",(0,n.Z)({},d,u,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Lark provides highly-productive collaboration experience for optimal team efficiency and features like messenger, calendar, docs, mail, workplace, and more. In this how to guide, you will learn how to deploy the bot in Lark locally and integrate bot from the list of examples present in ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-getting-started"},"starter templete"),"."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Deploy in Lark",src:a(49840).Z,width:"1406",height:"384"})),(0,l.kt)("h2",{id:"requirements"},"Requirements"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Your system must have ",(0,l.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/package-manager/"},"Node.js")," installed (version >= 16)."),(0,l.kt)("li",{parentName:"ol"},"Your system must have ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty"},"Wechaty")," (version >= 0.40)."),(0,l.kt)("li",{parentName:"ol"},"You must be familiar with ",(0,l.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/wechaty-puppet-lark"},"wechaty-puppet-lark"),".")),(0,l.kt)("h2",{id:"deployment"},"Deployment"),(0,l.kt)("p",null,"Run ",(0,l.kt)("inlineCode",{parentName:"p"},"wechaty-puppet-lark"),":"),(0,l.kt)(o.Z,{groupId:"operating-systems",defaultValue:"linux",values:[{label:"Linux",value:"linux"},{label:"macOS",value:"mac"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"linux",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"npm install wechaty-puppet-lark\nexport WECHATY_PUPPET=wechaty-puppet-lark\nnpm start\n"))),(0,l.kt)(i.Z,{value:"mac",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"npm install wechaty-puppet-lark\nexport WECHATY_PUPPET=wechaty-puppet-lark\nnpm start\n"))),(0,l.kt)(i.Z,{value:"windows",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"npm install wechaty-puppet-lark\nset WECHATY_PUPPET=wechaty-puppet-lark\nnpm start\n")))),(0,l.kt)("h2",{id:"integration"},"Integration"),(0,l.kt)("p",null,"Let's take up an example on how to integrate bot from ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-getting-started"},"starter templete")," to Lark. The step is similar for all other bots as well."),(0,l.kt)("h3",{id:"prerequisite"},"Prerequisite"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Offical Wechaty package: ",(0,l.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/wechaty"},"package/wechaty"),"."),(0,l.kt)("li",{parentName:"ol"},"Configure your system environment variables as below:")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"WECHATY_PUPPET_LARK_APPID"),": for the app ID of Feishu application."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"WECHATY_PUPPET_LARK_APPSECRET"),": for the app secret of Feishu App."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"WECHATY_PUPPET_LARK_TOKEN"),": for the verification token provided by Feishu Event Subscription Platform.")),(0,l.kt)("p",null,"You can follow up the steps mentioned below:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Initialize the project by creating a new folder ",(0,l.kt)("inlineCode",{parentName:"li"},"my-bot"),":")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"mkdir my-bot\ncd my-bot\n")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"Install the dependencies using the following commands:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"npm install wechaty\n")),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"Add the dependencies for using the bot with Lark:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"npm install wechaty-puppet-lark\n")),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},"Create a new folder ",(0,l.kt)("inlineCode",{parentName:"li"},"src")," and add a file ",(0,l.kt)("inlineCode",{parentName:"li"},"my-bot.js"),". Add any of the functions from ",(0,l.kt)("a",{href:"#"}," add functionality to the bot")," section to the snippet below:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import {\n  Contact,\n  Message,\n  ScanStatus,\n  Wechaty,\n  log,\n} from 'wechaty'\n\nconsole.log(welcome)\nconst bot = new Wechaty()\n\n/*\n *Your function goes here\n */\n")),(0,l.kt)("ol",{start:5},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Obtain your functional permissions on Feishu platform from ",(0,l.kt)("a",{parentName:"p",href:"https://open.feishu.cn/document/ukTMukTMukTM/uQjN3QjL0YzN04CN2cDN"},"Feishu Open Platform-Application Permission"),".")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"After you are done with the file, you can run the bot using the following commands:"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"export WECHATY_LOG=verbose\nexport WECHATY_PUPPET=wechaty-puppet-lark\nnode src/my-bot.js\n")),(0,l.kt)("p",null,"Copy the generated code to Lark and you are ready to play with the bot!"),(0,l.kt)("p",null,"You can deploy the bot with popular container solutions as well such as:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#a"},"Deploy with Heroku")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#b"},"Deploy with Docker"))),(0,l.kt)("h2",{id:"references"},"References"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Find out some more information about puppet from ",(0,l.kt)("a",{parentName:"li",href:"https://wechaty.js.org/docs/puppet-providers/"},"docs/puppet-providers"),"."),(0,l.kt)("li",{parentName:"ul"},"Find out more bot repository from ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty-getting-started"},"wechaty-getting-started"),"."),(0,l.kt)("li",{parentName:"ul"},"Find out the Lark repository at ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty-puppet-lark"},"wechaty-puppet-lark"),"."),(0,l.kt)("li",{parentName:"ul"},"Find out more about ",(0,l.kt)("a",{parentName:"li",href:"https://open.feishu.cn/document/ukTMukTMukTM/uUTNz4SN1MjL1UzM"},"Feishu Open Platfrom"),".")),(0,l.kt)("h2",{id:"blogs"},"Blogs"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://wechaty.js.org/2020/07/29/wechaty-puppet-lark-plan-blog/"},"Encapsulate the Feishu chat robot under the Wechaty interface based on the open API: the beginning of the period"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://wechaty.js.org/2020/09/30/wechaty-puppet-lark-final-blog/"},"Encapsulation of Feishu chat robot under Wechaty interface based on open API: end of term"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://wechaty.js.org/2020/08/19/wechaty-puppet-lark-mid-term-blog/"},"Wechaty puppet lark mid term blog"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://wechaty.js.org/2021/07/14/ospp-plan-wechaty-puppet-lark/"},"Ospp plan wechaty puppet lark"),".")))}f.isMDXComponent=!0},49840:function(e,t,a){t.Z=a.p+"assets/images/deploy-lark-f4f57e831b5f53bd176143337974286f.webp"}}]);