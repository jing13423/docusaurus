"use strict";(self.webpackChunkwechaty_docusaurus=self.webpackChunkwechaty_docusaurus||[]).push([[8248,5863,2775,2076,9725,4562,9842,7574,313,196,9685,2826],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return h}});var o=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,o,a=function(t,e){if(null==t)return{};var n,o,a={},r=Object.keys(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var i=o.createContext({}),u=function(t){var e=o.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},c=function(t){var e=u(t.components);return o.createElement(i.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},d=o.forwardRef((function(t,e){var n=t.components,a=t.mdxType,r=t.originalType,i=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),d=u(n),h=a,g=d["".concat(i,".").concat(h)]||d[h]||p[h]||r;return n?o.createElement(g,s(s({ref:e},c),{},{components:n})):o.createElement(g,s({ref:e},c))}));function h(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=n.length,s=new Array(r);s[0]=d;var l={};for(var i in e)hasOwnProperty.call(e,i)&&(l[i]=e[i]);l.originalType=t,l.mdxType="string"==typeof t?t:a,s[1]=l;for(var u=2;u<r;u++)s[u]=n[u];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58215:function(t,e,n){n.d(e,{Z:function(){return a}});var o=n(67294);function a(t){var e=t.children,n=t.hidden,a=t.className;return o.createElement("div",{role:"tabpanel",hidden:n,className:a},e)}},9877:function(t,e,n){n.d(e,{Z:function(){return c}});var o=n(87462),a=n(67294),r=n(72389),s=n(17704),l=n(86010),i="tabItem_LplD";function u(t){var e,n,r,u=t.lazy,c=t.block,p=t.defaultValue,d=t.values,h=t.groupId,g=t.className,m=a.Children.map(t.children,(function(t){if((0,a.isValidElement)(t)&&void 0!==t.props.value)return t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof t.type?t.type:t.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=d?d:m.map((function(t){var e=t.props;return{value:e.value,label:e.label,attributes:e.attributes}})),f=(0,s.lx)(y,(function(t,e){return t.value===e.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(t){return t.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===p?p:null!=(e=null!=p?p:null==(n=m.find((function(t){return t.props.default})))?void 0:n.props.value)?e:null==(r=m[0])?void 0:r.props.value;if(null!==b&&!y.some((function(t){return t.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+y.map((function(t){return t.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var v=(0,s.UB)(),k=v.tabGroupChoices,w=v.setTabGroupChoices,N=(0,a.useState)(b),T=N[0],x=N[1],C=[],U=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var M=k[h];null!=M&&M!==T&&y.some((function(t){return t.value===M}))&&x(M)}var j=function(t){var e=t.currentTarget,n=C.indexOf(e),o=y[n].value;o!==T&&(U(e),x(o),null!=h&&w(h,o))},L=function(t){var e,n=null;switch(t.key){case"ArrowRight":var o=C.indexOf(t.currentTarget)+1;n=C[o]||C[0];break;case"ArrowLeft":var a=C.indexOf(t.currentTarget)-1;n=C[a]||C[C.length-1]}null==(e=n)||e.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},g)},y.map((function(t){var e=t.value,n=t.label,r=t.attributes;return a.createElement("li",(0,o.Z)({role:"tab",tabIndex:T===e?0:-1,"aria-selected":T===e,key:e,ref:function(t){return C.push(t)},onKeyDown:L,onFocus:j,onClick:j},r,{className:(0,l.Z)("tabs__item",i,null==r?void 0:r.className,{"tabs__item--active":T===e})}),null!=n?n:e)}))),u?(0,a.cloneElement)(m.filter((function(t){return t.props.value===T}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},m.map((function(t,e){return(0,a.cloneElement)(t,{key:e,hidden:t.props.value!==T})}))))}function c(t){var e=(0,r.Z)();return a.createElement(u,(0,o.Z)({key:String(e)},t))}},88332:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return i},default:function(){return h},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var o=n(87462),a=n(63366),r=(n(67294),n(3905)),s=["components"],l={},i=void 0,u={unversionedId:"polyglot/dotnet/transclusions/shortest-chatbot",id:"polyglot/dotnet/transclusions/shortest-chatbot",title:"shortest-chatbot",description:"",source:"@site/docs/polyglot/dotnet/transclusions/shortest-chatbot.mdx",sourceDirName:"polyglot/dotnet/transclusions",slug:"/polyglot/dotnet/transclusions/shortest-chatbot",permalink:"/docs/polyglot/dotnet/transclusions/shortest-chatbot",editUrl:"https://github.com/wechaty/docusaurus/edit/main/docusaurus/docs/polyglot/dotnet/transclusions/shortest-chatbot.mdx",tags:[],version:"current",lastUpdatedBy:"Huan LI (\u674e\u5353\u6853)",lastUpdatedAt:1616051830,formattedLastUpdatedAt:"3/18/2021",frontMatter:{}},c={},p=[],d={toc:p};function h(t){var e=t.components,n=(0,a.Z)(t,s);return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'var wechaty = new Wechaty(options, logger).onScan((qrcode, status) => {\n  Console.WriteLine($"Scan QR Code to login: {status} https://wechaty.js.org/qrcode/{(qrcode)}`");\n}).OnLogin( user => {\n  Console.WriteLine("User {user} logined");\n}).OnMessage( message => {\n  Console.WriteLine($"Message: {message}");\n}).Start();\n')))}h.isMDXComponent=!0},7230:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return i},default:function(){return h},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var o=n(87462),a=n(63366),r=(n(67294),n(3905)),s=["components"],l={},i=void 0,u={unversionedId:"polyglot/go/transclusions/shortest-chatbot",id:"polyglot/go/transclusions/shortest-chatbot",title:"shortest-chatbot",description:"",source:"@site/docs/polyglot/go/transclusions/shortest-chatbot.mdx",sourceDirName:"polyglot/go/transclusions",slug:"/polyglot/go/transclusions/shortest-chatbot",permalink:"/docs/polyglot/go/transclusions/shortest-chatbot",editUrl:"https://github.com/wechaty/docusaurus/edit/main/docusaurus/docs/polyglot/go/transclusions/shortest-chatbot.mdx",tags:[],version:"current",lastUpdatedBy:"Huan LI (\u674e\u5353\u6853)",lastUpdatedAt:1616051830,formattedLastUpdatedAt:"3/18/2021",frontMatter:{}},c={},p=[],d={toc:p};function h(t){var e=t.components,n=(0,a.Z)(t,s);return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n "fmt"\n\n  "github.com/wechaty/go-wechaty/wechaty"\n)\n\nfunc main() {\n  _ = wechaty.NewWechaty().\n    OnScan(func(qrCode, status string) {\n      fmt.Printf("Scan QR Code to login: %s\\nhttps://wechaty.js.org/qrcode/%s\\n", status, qrCode)\n    }).\n    OnLogin(func(user string) { fmt.Printf("User %s logged in\\n", user) }).\n    OnMessage(func(message string) { fmt.Printf("Message: %s\\n", message) }).\n    Start()\n}\n')))}h.isMDXComponent=!0},91791:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return i},default:function(){return h},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var o=n(87462),a=n(63366),r=(n(67294),n(3905)),s=["components"],l={},i=void 0,u={unversionedId:"polyglot/java/transclusions/shortest-chatbot",id:"polyglot/java/transclusions/shortest-chatbot",title:"shortest-chatbot",description:"",source:"@site/docs/polyglot/java/transclusions/shortest-chatbot.mdx",sourceDirName:"polyglot/java/transclusions",slug:"/polyglot/java/transclusions/shortest-chatbot",permalink:"/docs/polyglot/java/transclusions/shortest-chatbot",editUrl:"https://github.com/wechaty/docusaurus/edit/main/docusaurus/docs/polyglot/java/transclusions/shortest-chatbot.mdx",tags:[],version:"current",lastUpdatedBy:"Huan LI (\u674e\u5353\u6853)",lastUpdatedAt:1616051830,formattedLastUpdatedAt:"3/18/2021",frontMatter:{}},c={},p=[],d={toc:p};function h(t){var e=t.components,n=(0,a.Z)(t,s);return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'package io.github.wechaty;\n\nclass Bot{\n  public static void main(String args[]){\n    Wechaty bot = Wechaty.instance()\n      .onScan((qrcode, statusScanStatus, data) -> System.out.println(QrcodeUtils.getQr(qrcode)))\n      .onLogin(user -> System.out.println("User logged in :" + user))\n      .onMessage(message -> System.out.println("Message:" + message))\n      .start(true);\n  }\n}\n')))}h.isMDXComponent=!0},55318:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return i},default:function(){return h},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var o=n(87462),a=n(63366),r=(n(67294),n(3905)),s=["components"],l={},i=void 0,u={unversionedId:"polyglot/openapi/transclusions/shortest-chatbot",id:"polyglot/openapi/transclusions/shortest-chatbot",title:"shortest-chatbot",description:"",source:"@site/docs/polyglot/openapi/transclusions/shortest-chatbot.mdx",sourceDirName:"polyglot/openapi/transclusions",slug:"/polyglot/openapi/transclusions/shortest-chatbot",permalink:"/docs/polyglot/openapi/transclusions/shortest-chatbot",editUrl:"https://github.com/wechaty/docusaurus/edit/main/docusaurus/docs/polyglot/openapi/transclusions/shortest-chatbot.mdx",tags:[],version:"current",lastUpdatedBy:"Huan LI (\u674e\u5353\u6853)",lastUpdatedAt:1616054254,formattedLastUpdatedAt:"3/18/2021",frontMatter:{}},c={},p=[],d={toc:p};function h(t){var e=t.components,n=(0,a.Z)(t,s);return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"# To be add: curl ...\n")))}h.isMDXComponent=!0},29577:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return i},default:function(){return h},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var o=n(87462),a=n(63366),r=(n(67294),n(3905)),s=["components"],l={},i=void 0,u={unversionedId:"polyglot/php/transclusions/shortest-chatbot",id:"polyglot/php/transclusions/shortest-chatbot",title:"shortest-chatbot",description:"",source:"@site/docs/polyglot/php/transclusions/shortest-chatbot.mdx",sourceDirName:"polyglot/php/transclusions",slug:"/polyglot/php/transclusions/shortest-chatbot",permalink:"/docs/polyglot/php/transclusions/shortest-chatbot",editUrl:"https://github.com/wechaty/docusaurus/edit/main/docusaurus/docs/polyglot/php/transclusions/shortest-chatbot.mdx",tags:[],version:"current",lastUpdatedBy:"Huan LI (\u674e\u5353\u6853)",lastUpdatedAt:1616051830,formattedLastUpdatedAt:"3/18/2021",frontMatter:{}},c={},p=[],d={toc:p};function h(t){var e=t.components,n=(0,a.Z)(t,s);return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},'$wechaty = \\IO\\Github\\Wechaty\\Wechaty::getInstance($token, $endPoint);\n$wechaty->onScan(function($qrcode, $status, $data) {\n    $qr = \\IO\\Github\\Wechaty\\Util\\QrcodeUtils::getQr($qrcode);\n    echo "$qr\\n\\nOnline Image: https://wechaty.js.org/qrcode/$qrcode\\n";\n})->onLogin(function(\\IO\\Github\\Wechaty\\User\\ContactSelf $user) {\n})->onMessage(function(\\IO\\Github\\Wechaty\\User\\Message $message) {\n    $message->say("hello from PHP7.4");\n})->start();\n')))}h.isMDXComponent=!0},34608:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return i},default:function(){return h},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var o=n(87462),a=n(63366),r=(n(67294),n(3905)),s=["components"],l={},i=void 0,u={unversionedId:"polyglot/python/transclusions/shortest-chatbot",id:"polyglot/python/transclusions/shortest-chatbot",title:"shortest-chatbot",description:"",source:"@site/docs/polyglot/python/transclusions/shortest-chatbot.mdx",sourceDirName:"polyglot/python/transclusions",slug:"/polyglot/python/transclusions/shortest-chatbot",permalink:"/docs/polyglot/python/transclusions/shortest-chatbot",editUrl:"https://github.com/wechaty/docusaurus/edit/main/docusaurus/docs/polyglot/python/transclusions/shortest-chatbot.mdx",tags:[],version:"current",lastUpdatedBy:"Huan LI (\u674e\u5353\u6853)",lastUpdatedAt:1616051830,formattedLastUpdatedAt:"3/18/2021",frontMatter:{}},c={},p=[],d={toc:p};function h(t){var e=t.components,n=(0,a.Z)(t,s);return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"from wechaty import Wechaty\nimport asyncio\n\nasync def main():\n    bot = Wechaty()\n    bot.on('scan', lambda status, qrcode, data: print('Scan QR Code to login: {}\\nhttps://wechaty.js.org/qrcode/{}'.format(status, qrcode)))\n    bot.on('login', lambda user: print('User {} logged in'.format(user)))\n    bot.on('message', lambda message: print('Message: {}'.format(message)))\n    await bot.start()\n\nasyncio.run(main())\n")))}h.isMDXComponent=!0},19001:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return i},default:function(){return h},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var o=n(87462),a=n(63366),r=(n(67294),n(3905)),s=["components"],l={},i=void 0,u={unversionedId:"polyglot/rust/transclusions/shortest-chatbot",id:"polyglot/rust/transclusions/shortest-chatbot",title:"shortest-chatbot",description:"",source:"@site/docs/polyglot/rust/transclusions/shortest-chatbot.mdx",sourceDirName:"polyglot/rust/transclusions",slug:"/polyglot/rust/transclusions/shortest-chatbot",permalink:"/docs/polyglot/rust/transclusions/shortest-chatbot",editUrl:"https://github.com/wechaty/docusaurus/edit/main/docusaurus/docs/polyglot/rust/transclusions/shortest-chatbot.mdx",tags:[],version:"current",lastUpdatedBy:"Huan LI (\u674e\u5353\u6853)",lastUpdatedAt:1616051830,formattedLastUpdatedAt:"3/18/2021",frontMatter:{}},c={},p=[],d={toc:p};function h(t){var e=t.components,n=(0,a.Z)(t,s);return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"let bot = Wechaty::new(PuppetService::new(options).await.unwrap());\n\nbot.on_scan(handle_scan)\n    .on_login(handle_login)\n    .on_logout(handle_logout)\n    .on_message(handle_message)\n    .start()\n    .await;\n")))}h.isMDXComponent=!0},23705:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return i},default:function(){return h},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var o=n(87462),a=n(63366),r=(n(67294),n(3905)),s=["components"],l={},i=void 0,u={unversionedId:"polyglot/scala/transclusions/shortest-chatbot",id:"polyglot/scala/transclusions/shortest-chatbot",title:"shortest-chatbot",description:"",source:"@site/docs/polyglot/scala/transclusions/shortest-chatbot.mdx",sourceDirName:"polyglot/scala/transclusions",slug:"/polyglot/scala/transclusions/shortest-chatbot",permalink:"/docs/polyglot/scala/transclusions/shortest-chatbot",editUrl:"https://github.com/wechaty/docusaurus/edit/main/docusaurus/docs/polyglot/scala/transclusions/shortest-chatbot.mdx",tags:[],version:"current",lastUpdatedBy:"Huan LI (\u674e\u5353\u6853)",lastUpdatedAt:1616051830,formattedLastUpdatedAt:"3/18/2021",frontMatter:{}},c={},p=[],d={toc:p};function h(t){var e=t.components,n=(0,a.Z)(t,s);return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'package wechaty\n\nobject DingDongBot {\n  def main(args: Array[String]): Unit = {\n    Wechaty.instance()\n      .onScan(payload     => { println("Scan QR Code to login: %s\\nhttps://wechaty.js.org/qrcode/%s\\n".format(payload.status, payload.qrcode)) })\n      .onLogin(payload    => { println("User %s logged in\\n".format(payload.id)) })\n      .onMessage(message  => { println(message) })\n      .start()\n    Thread.currentThread().join()\n  }\n}\n')))}h.isMDXComponent=!0},3569:function(t,e,n){n.r(e),n.d(e,{assets:function(){return N},contentTitle:function(){return k},default:function(){return C},frontMatter:function(){return v},metadata:function(){return w},toc:function(){return T}});var o=n(87462),a=n(63366),r=(n(67294),n(3905)),s=n(9877),l=n(58215),i=n(47650),u=n(55318),c=n(62570),p=n(34608),d=n(7230),h=n(91791),g=n(29577),m=n(23705),y=n(88332),f=n(19001),b=["components"],v={},k=void 0,w={unversionedId:"polyglot/transclusions/shortest-chatbots",id:"polyglot/transclusions/shortest-chatbots",title:"shortest-chatbots",description:"<Tabs",source:"@site/docs/polyglot/transclusions/shortest-chatbots.mdx",sourceDirName:"polyglot/transclusions",slug:"/polyglot/transclusions/shortest-chatbots",permalink:"/docs/polyglot/transclusions/shortest-chatbots",editUrl:"https://github.com/wechaty/docusaurus/edit/main/docusaurus/docs/polyglot/transclusions/shortest-chatbots.mdx",tags:[],version:"current",lastUpdatedBy:"shwetal",lastUpdatedAt:1630752945,formattedLastUpdatedAt:"9/4/2021",frontMatter:{}},N={},T=[],x={toc:T};function C(t){var e=t.components,n=(0,a.Z)(t,b);return(0,r.kt)("wrapper",(0,o.Z)({},x,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)(s.Z,{groupId:"programming-languages",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"},{label:"Python",value:"py"},{label:"Go",value:"go"},{label:"Java",value:"java"},{label:"PHP",value:"php"},{label:"Scala",value:"scala"},{label:"C#",value:"csharp"},{label:"Rust",value:"rust"},{label:"OpenAPI",value:"openapi"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)(i.default,{mdxType:"ShortestChatbotTypeScript"})),(0,r.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)(c.default,{mdxType:"ShortestChatbotJavaScript"})),(0,r.kt)(l.Z,{value:"py",mdxType:"TabItem"},(0,r.kt)(p.default,{mdxType:"ShortestChatbotPython"})),(0,r.kt)(l.Z,{value:"go",mdxType:"TabItem"},(0,r.kt)(d.default,{mdxType:"ShortestChatbotGo"})),(0,r.kt)(l.Z,{value:"java",mdxType:"TabItem"},(0,r.kt)(h.default,{mdxType:"ShortestChatbotJava"})),(0,r.kt)(l.Z,{value:"php",mdxType:"TabItem"},(0,r.kt)(g.default,{mdxType:"ShortestChatbotPhp"})),(0,r.kt)(l.Z,{value:"scala",mdxType:"TabItem"},(0,r.kt)(m.default,{mdxType:"ShortestChatbotScala"})),(0,r.kt)(l.Z,{value:"csharp",mdxType:"TabItem"},(0,r.kt)(y.default,{mdxType:"ShortestChatbotDotnet"})),(0,r.kt)(l.Z,{value:"rust",mdxType:"TabItem"},(0,r.kt)(f.default,{mdxType:"ShortestChatbotRust"})),(0,r.kt)(l.Z,{value:"openapi",mdxType:"TabItem"},(0,r.kt)(u.default,{mdxType:"ShortestChatbotOpenApi"}))))}C.isMDXComponent=!0},62570:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return i},default:function(){return h},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var o=n(87462),a=n(63366),r=(n(67294),n(3905)),s=["components"],l={},i=void 0,u={unversionedId:"polyglot/typescript/transclusions/shortest-chatbot-js",id:"polyglot/typescript/transclusions/shortest-chatbot-js",title:"shortest-chatbot-js",description:"",source:"@site/docs/polyglot/typescript/transclusions/shortest-chatbot-js.mdx",sourceDirName:"polyglot/typescript/transclusions",slug:"/polyglot/typescript/transclusions/shortest-chatbot-js",permalink:"/docs/polyglot/typescript/transclusions/shortest-chatbot-js",editUrl:"https://github.com/wechaty/docusaurus/edit/main/docusaurus/docs/polyglot/typescript/transclusions/shortest-chatbot-js.mdx",tags:[],version:"current",lastUpdatedBy:"Huan (\u674e\u5353\u6853)",lastUpdatedAt:1631790719,formattedLastUpdatedAt:"9/16/2021",frontMatter:{}},c={},p=[],d={toc:p};function h(t){var e=t.components,n=(0,a.Z)(t,s);return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { Wechaty }  from 'wechaty'\n\nasync function main () {\n  const bot = new Wechaty()\n  bot\n    .on('scan', (qrcode, status) => console.log(`Scan QR Code to login: ${status}\\nhttps://wechaty.js.org/qrcode/${encodeURIComponent(qrcode)}`))\n    .on('login',            user => console.log(`User ${user} logged in`))\n    .on('message',       message => console.log(`Message: ${message}`))\n  await bot.start()\n}\n\nmain()\n  .catch(console.error)\n")))}h.isMDXComponent=!0},47650:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return i},default:function(){return h},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var o=n(87462),a=n(63366),r=(n(67294),n(3905)),s=["components"],l={},i=void 0,u={unversionedId:"polyglot/typescript/transclusions/shortest-chatbot",id:"polyglot/typescript/transclusions/shortest-chatbot",title:"shortest-chatbot",description:"",source:"@site/docs/polyglot/typescript/transclusions/shortest-chatbot.mdx",sourceDirName:"polyglot/typescript/transclusions",slug:"/polyglot/typescript/transclusions/shortest-chatbot",permalink:"/docs/polyglot/typescript/transclusions/shortest-chatbot",editUrl:"https://github.com/wechaty/docusaurus/edit/main/docusaurus/docs/polyglot/typescript/transclusions/shortest-chatbot.mdx",tags:[],version:"current",lastUpdatedBy:"Xiaohan Li",lastUpdatedAt:1619007923,formattedLastUpdatedAt:"4/21/2021",frontMatter:{}},c={},p=[],d={toc:p};function h(t){var e=t.components,n=(0,a.Z)(t,s);return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { Wechaty } from 'wechaty'\n\nasync function main () {\n  const bot = new Wechaty()\n  bot\n    .on('scan', (qrcode, status) => console.log(`Scan QR Code to login: ${status}\\nhttps://wechaty.js.org/qrcode/${encodeURIComponent(qrcode)}`))\n    .on('login',            user => console.log(`User ${user} logged in`))\n    .on('message',       message => console.log(`Message: ${message}`))\n  await bot.start()\n}\n\nmain()\n  .catch(console.error)\n")))}h.isMDXComponent=!0},68405:function(t,e,n){n.r(e),n.d(e,{assets:function(){return d},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return h}});var o=n(87462),a=n(63366),r=(n(67294),n(3905)),s=n(9877),l=n(58215),i=(n(3569),["components"]),u={title:"Event Logger plugin"},c=void 0,p={unversionedId:"using-plugin-with-wechaty/event-logger",id:"using-plugin-with-wechaty/event-logger",title:"Event Logger plugin",description:"Powered by Wechaty",source:"@site/docs/using-plugin-with-wechaty/event-logger.mdx",sourceDirName:"using-plugin-with-wechaty",slug:"/using-plugin-with-wechaty/event-logger",permalink:"/docs/using-plugin-with-wechaty/event-logger",editUrl:"https://github.com/wechaty/docusaurus/edit/main/docusaurus/docs/using-plugin-with-wechaty/event-logger.mdx",tags:[],version:"current",lastUpdatedBy:"Huan",lastUpdatedAt:1631608278,formattedLastUpdatedAt:"9/14/2021",frontMatter:{title:"Event Logger plugin"},sidebar:"docs",previous:{title:"Overview",permalink:"/docs/using-plugin-with-wechaty/overview"},next:{title:"QR Code Terminal plugin",permalink:"/docs/using-plugin-with-wechaty/qr-code-terminal"}},d={},h=[{value:"Requirements",id:"requirements",level:2},{value:"Getting started",id:"getting-started",level:2},{value:"Adding Event Logger plugin",id:"adding-event-logger-plugin",level:2},{value:"1. Create a starter bot",id:"1-create-a-starter-bot",level:3},{value:"2. Install dependency",id:"2-install-dependency",level:3},{value:"3. Integrate the plugin",id:"3-integrate-the-plugin",level:3},{value:"4. Run the bot",id:"4-run-the-bot",level:3},{value:"Conclusion",id:"conclusion",level:2},{value:"References",id:"references",level:2}],g={toc:h};function m(t){var e=t.components,u=(0,a.Z)(t,i);return(0,r.kt)("wrapper",(0,o.Z)({},g,u,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Wechaty/wechaty"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Powered%20By-Wechaty-brightgreen.svg",alt:"Powered by Wechaty"})),"\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-plugin-contrib"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Wechaty%20Plugin-Contrib-brightgreen.svg",alt:"Wechaty Plugin Contrib"})),"\n",(0,r.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/%3C%2F%3E-TypeScript-blue.svg",alt:"TypeScript"}))),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"EventLogger")," plugin helps in logging Wechaty events with just one line of code. In this tutorial, you will learn how to add the ",(0,r.kt)("inlineCode",{parentName:"p"},"EventLogger")," plugin to a Wechaty bot."),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download"},"Node.js")," v16+"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/wechaty"},"Wechaty")," v0.40+"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/wechaty-plugin-contrib"},"Wechaty Plugin Contrib"))),(0,r.kt)("h2",{id:"getting-started"},"Getting started"),(0,r.kt)("p",null,"You will require ",(0,r.kt)("inlineCode",{parentName:"p"},"Node.js")," version ",(0,r.kt)("strong",{parentName:"p"},"16.0")," or greater in order to follow this tutorial. You can verify whether ",(0,r.kt)("inlineCode",{parentName:"p"},"Node.js")," is installed on your system or whether you have the correct version using the command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"node -v\n")),(0,r.kt)("p",null,"If you do not have ",(0,r.kt)("inlineCode",{parentName:"p"},"Node.js")," installed or your version is below requirement, get the latest version of ",(0,r.kt)("inlineCode",{parentName:"p"},"Node.js")," by following the links below:"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Node.js installation docs")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/package-manager/#windows"},"Windows")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions"},"Linux","(","Debian/Ubuntu",")")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/package-manager/#macos"},"macOS"))),(0,r.kt)("blockquote",{parentName:"div"},(0,r.kt)("p",{parentName:"blockquote"},"Installation guide for ",(0,r.kt)("inlineCode",{parentName:"p"},"Node.js")," on other platforms can be found ",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org/en/download/package-manager/"},"here"),".")))),(0,r.kt)("h2",{id:"adding-event-logger-plugin"},"Adding Event Logger plugin"),(0,r.kt)("p",null,"For the demonstration of adding this plugin, we will use the ",(0,r.kt)("strong",{parentName:"p"},"Starter Bot")," and show you how to add the ",(0,r.kt)("inlineCode",{parentName:"p"},"EventLogger")," plugin to it. Follow the steps below:"),(0,r.kt)("h3",{id:"1-create-a-starter-bot"},"1. Create a starter bot"),(0,r.kt)("p",null,"Follow the instructions on the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"../examples/basic/starter-bot"},"Starter Bot"))," page to create the foundation of a Wechaty bot."),(0,r.kt)("h3",{id:"2-install-dependency"},"2. Install dependency"),(0,r.kt)("p",null,"As the ",(0,r.kt)("inlineCode",{parentName:"p"},"EventLogger")," plugin is present in the ",(0,r.kt)("inlineCode",{parentName:"p"},"wechaty-plugin-contrib")," NPM package, you have to first add it to the dependencies. It can be installed using the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm i wechaty-plugin-contrib\n")),(0,r.kt)("h3",{id:"3-integrate-the-plugin"},"3. Integrate the plugin"),(0,r.kt)("p",null,"Inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"event-logger-bot.ts")," file, import the plugin:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { EventLogger } from 'wechaty-plugin-contrib'\n")),(0,r.kt)("p",null,"Now, just before starting the bot, you can use this plugin:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// Add the following line to use the plugin\nbot.use(EventLogger())\nbot.start()\n")),(0,r.kt)("h3",{id:"4-run-the-bot"},"4. Run the bot"),(0,r.kt)("p",null,"In order to run the bot, first you have to ",(0,r.kt)("strong",{parentName:"p"},"export/set")," an environment variable with the type of puppet to use, and then start the bot:"),(0,r.kt)(s.Z,{groupId:"operating-systems",defaultValue:"linux",values:[{label:"Linux",value:"linux"},{label:"macOS",value:"mac"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"linux",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"export WECHATY_LOG=verbose\nexport WECHATY_PUPPET=wechaty-puppet-wechat\nmake bot\n# the above is equals to the below command:\n# npm start\n#   or, npx ts-node examples/ding-dong-bot.ts\n"))),(0,r.kt)(l.Z,{value:"mac",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"export WECHATY_LOG=verbose\nexport WECHATY_PUPPET=wechaty-puppet-wechat\nmake bot\n# the above is equals to the below command:\n# npm start\n#   or, npx ts-node examples/ding-dong-bot.ts\n"))),(0,r.kt)(l.Z,{value:"windows",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"set WECHATY_LOG=verbose\nset WECHATY_PUPPET=wechaty-puppet-wechat\nmake bot\n# the above is equals to the below command:\n# npm start\n#   or, npx ts-node examples/ding-dong-bot.ts\n")))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"EventLogger plugin output",src:n(82944).Z,width:"1404",height:"926"})),(0,r.kt)("p",null,"Congratulations! You have successfully integrated the ",(0,r.kt)("inlineCode",{parentName:"p"},"EventLogger")," plugin to your Wechaty bot. You will see after running the bot, it starts logging the Wechaty events."),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"You can apply a similar concept to add the ",(0,r.kt)("inlineCode",{parentName:"p"},"EventLogger")," plugin to any of your Wechaty bots. You can learn more about this plugin ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-plugin-contrib#2-eventlogger"},"here"),"."),(0,r.kt)("p",null,"Learn how to integrate ",(0,r.kt)("a",{parentName:"p",href:"./qr-code-terminal"},"QR Code Terminal Plugin")," to your Wechaty bot in the next tutorial."),(0,r.kt)("h2",{id:"references"},"References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty-plugin-contrib"},"GitHub repository of Wechaty Plugin Contrib")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/wechaty-plugin-contrib"},"NPM package of Wechaty Plugin Contrib")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=tfGZXoe_aA4"},"Wechaty plugin launch video"))))}m.isMDXComponent=!0},82944:function(t,e,n){e.Z=n.p+"assets/images/event-logger-output-d9796e0eeb68e68d45cd98b4675b9b01.webp"}}]);