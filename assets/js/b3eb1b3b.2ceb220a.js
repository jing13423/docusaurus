"use strict";(self.webpackChunkwechaty_docusaurus=self.webpackChunkwechaty_docusaurus||[]).push([[7602],{3905:function(e,t,a){a.d(t,{Zo:function(){return i},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),s=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},i=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),d=s(a),m=r,h=d["".concat(u,".").concat(m)]||d[m]||c[m]||l;return a?n.createElement(h,o(o({ref:t},i),{},{components:a})):n.createElement(h,o({ref:t},i))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=d;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var s=2;s<l;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},58215:function(e,t,a){a.d(t,{Z:function(){return r}});var n=a(67294);function r(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},9877:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(87462),r=a(67294),l=a(72389),o=a(17704),p=a(86010),u="tabItem_LplD";function s(e){var t,a,l,s=e.lazy,i=e.block,c=e.defaultValue,d=e.values,m=e.groupId,h=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=d?d:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),w=(0,o.lx)(y,(function(e,t){return e.value===t.value}));if(w.length>0)throw new Error('Docusaurus error: Duplicate values "'+w.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===c?c:null!=(t=null!=c?c:null==(a=f.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(l=f[0])?void 0:l.props.value;if(null!==g&&!y.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=(0,o.UB)(),v=b.tabGroupChoices,k=b.setTabGroupChoices,N=(0,r.useState)(g),T=N[0],E=N[1],O=[],x=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var P=v[m];null!=P&&P!==T&&y.some((function(e){return e.value===P}))&&E(P)}var j=function(e){var t=e.currentTarget,a=O.indexOf(t),n=y[a].value;n!==T&&(x(t),E(n),null!=m&&k(m,n))},W=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=O.indexOf(e.currentTarget)+1;a=O[n]||O[0];break;case"ArrowLeft":var r=O.indexOf(e.currentTarget)-1;a=O[r]||O[O.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,p.Z)("tabs",{"tabs--block":i},h)},y.map((function(e){var t=e.value,a=e.label,l=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return O.push(e)},onKeyDown:W,onFocus:j,onClick:j},l,{className:(0,p.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":T===t})}),null!=a?a:t)}))),s?(0,r.cloneElement)(f.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function i(e){var t=(0,l.Z)();return r.createElement(s,(0,n.Z)({key:String(t)},e))}},8491:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return m}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),o=a(9877),p=a(58215),u=["components"],s={title:"Deploy in Whatsapp"},i=void 0,c={unversionedId:"howto/degraded/degraded-deploy-whatsapp",id:"howto/degraded/degraded-deploy-whatsapp",title:"Deploy in Whatsapp",description:"Whatsapp  is the most popular IM platform, so this how to guide focuses on deploying the bot in Whatsapp locally. You will learn how to deploy the bot in Whatsapp locally and integrate bot from the list of examples present in the starter templete.",source:"@site/docs/howto/degraded/degraded-deploy-whatsapp.md",sourceDirName:"howto/degraded",slug:"/howto/degraded/degraded-deploy-whatsapp",permalink:"/docs/howto/degraded/degraded-deploy-whatsapp",editUrl:"https://github.com/wechaty/docusaurus/edit/main/docusaurus/docs/howto/degraded/degraded-deploy-whatsapp.md",tags:[],version:"current",lastUpdatedBy:"Abhishek Jaiswal",lastUpdatedAt:1634707553,formattedLastUpdatedAt:"10/20/2021",frontMatter:{title:"Deploy in Whatsapp"}},d={},m=[{value:"Requirements",id:"requirements",level:2},{value:"Deployment",id:"deployment",level:2},{value:"Integrating a Bot to Whatsapp",id:"integrating-a-bot-to-whatsapp",level:2},{value:"Prerequisite",id:"prerequisite",level:3},{value:"References",id:"references",level:2},{value:"Blogs",id:"blogs",level:2}],h={toc:m};function f(e){var t=e.components,a=(0,r.Z)(e,u);return(0,l.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Whatsapp  is the most popular IM platform, so this how to guide focuses on deploying the bot in Whatsapp locally. You will learn how to deploy the bot in Whatsapp locally and integrate bot from the list of examples present in the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-getting-started"},"starter templete"),"."),(0,l.kt)("h2",{id:"requirements"},"Requirements"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Your system must have ",(0,l.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/package-manager/"},"Node.js")," installed (version >= 12)."),(0,l.kt)("li",{parentName:"ol"},"Your system must have ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty"},"Wechaty")," (version >= 0.40)."),(0,l.kt)("li",{parentName:"ol"},"You must be familiar with ",(0,l.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/wechaty-plugin-contrib"},"Wechaty Plugins"),".")),(0,l.kt)("h2",{id:"deployment"},"Deployment"),(0,l.kt)("p",null,"Run ",(0,l.kt)("inlineCode",{parentName:"p"},"wechaty-puppet-whatsapp"),":"),(0,l.kt)(o.Z,{groupId:"operating-systems",defaultValue:"linux",values:[{label:"Linux",value:"linux"},{label:"macOS",value:"mac"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},(0,l.kt)(p.Z,{value:"linux",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"npm install wechaty-puppet-whatsapp\nexport WECHATY_PUPPET=wechaty-puppet-whatsapp\nnpm start\n"))),(0,l.kt)(p.Z,{value:"mac",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"npm install wechaty-puppet-whatsapp\nexport WECHATY_PUPPET=wechaty-puppet-whatsapp\nnpm start\n"))),(0,l.kt)(p.Z,{value:"windows",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"npm install wechaty-puppet-whatsapp\nset WECHATY_PUPPET=wechaty-puppet-whatsapp\nnpm start\n")))),(0,l.kt)("h2",{id:"integrating-a-bot-to-whatsapp"},"Integrating a Bot to Whatsapp"),(0,l.kt)("p",null,"Let's take up an example on how to integrate bot from ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-getting-started"},"starter templete")," to Whatsapp."),(0,l.kt)("p",null,"The steps are similar for all other bots as well."),(0,l.kt)("h3",{id:"prerequisite"},"Prerequisite"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Offical Wechaty package: ",(0,l.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/wechaty"},"package/wechaty"),"."),(0,l.kt)("li",{parentName:"ol"},"QRCode terminal edition: ",(0,l.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/qrcode-terminal"},"package/qrcode-terminal"),".")),(0,l.kt)("p",null,"You can follow up the steps mentioned below:"),(0,l.kt)("ol",null,(0,l.kt)("li",null," Initialize the project by creating a new folder `my-bot`."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir my-bot\ncd my-bot\n")),(0,l.kt)("li",null," Install the dependencies using the following commands:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm install wechaty\nnpm install qrcode-terminal\n")),(0,l.kt)("li",null," Add the dependencies for using the bot with Whatsapp."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm install wechaty-puppet-whatsapp\n")),(0,l.kt)("li",null," Create a new folder `src` and add a file `my-bot.js`. Add your custom functions to the code snippet below:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"const {\n  Contact,\n  Message,\n  ScanStatus,\n  Wechaty,\n  log,\n}= require('wechaty')\n\nimport qrTerm  from 'qrcode-terminal'\n\nconsole.log(welcome)\nconst bot = new Wechaty()\n\n/*\n *Your function goes here\n */\n")),(0,l.kt)("li",null," After you are done with the file, you can run the bot using the following commands:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"export WECHATY_LOG=verbose\nexport WECHATY_PUPPET=wechaty-puppet-whatsapp\nnode src/my-bot.js\n")),(0,l.kt)("p",null,"Scan it using your Whatsapp and you are ready to play with the bot!"),(0,l.kt)("p",null,"You can deploy the bot with popular container solutions as well such as:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#a"},"Heroku")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#b"},"Docker"))),(0,l.kt)("h2",{id:"references"},"References"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Find out some more information about puppet from ",(0,l.kt)("a",{parentName:"li",href:"https://wechaty.js.org/docs/puppet-providers/"},"docs/puppet-providers"),"."),(0,l.kt)("li",{parentName:"ul"},"Get the starter template from ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty-getting-started"},"wechaty-getting-started"),".")),(0,l.kt)("h2",{id:"blogs"},"Blogs"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://wechaty.js.org/2021/02/15/publishment-of-wechaty-whatsapp-puppet"},"wechaty-puppet-whatsapp"))))}f.isMDXComponent=!0}}]);