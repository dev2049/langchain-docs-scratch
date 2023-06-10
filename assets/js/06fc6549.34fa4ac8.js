"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[40938],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(n),u=o,h=m["".concat(l,".").concat(u)]||m[u]||d[u]||a;return n?r.createElement(h,s(s({ref:t},p),{},{components:n})):r.createElement(h,s({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[m]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},14892:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>m,default:()=>f,frontMatter:()=>p,metadata:()=>d,toc:()=>h});var r=n(87462),o=(n(67294),n(3905));const a=(s="CodeOutputBlock",function(e){return console.warn("Component "+s+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var s;const i={toc:[]},l="wrapper";function c(e){let{components:t,...n}=e;return(0,o.kt)(l,(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from langchain.chat_models import ChatOpenAI\nfrom langchain.schema import (\n    HumanMessage,\n)\n\n\nfrom langchain.callbacks.streaming_stdout import StreamingStdOutCallbackHandler\nchat = ChatOpenAI(streaming=True, callbacks=[StreamingStdOutCallbackHandler()], temperature=0)\nresp = chat([HumanMessage(content="Write me a song about sparkling water.")])\n')),(0,o.kt)(a,{lang:"python",mdxType:"CodeOutputBlock"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    Verse 1:\n    Bubbles rising to the top\n    A refreshing drink that never stops\n    Clear and crisp, it's pure delight\n    A taste that's sure to excite\n    \n    Chorus:\n    Sparkling water, oh so fine\n    A drink that's always on my mind\n    With every sip, I feel alive\n    Sparkling water, you're my vibe\n    \n    Verse 2:\n    No sugar, no calories, just pure bliss\n    A drink that's hard to resist\n    It's the perfect way to quench my thirst\n    A drink that always comes first\n    \n    Chorus:\n    Sparkling water, oh so fine\n    A drink that's always on my mind\n    With every sip, I feel alive\n    Sparkling water, you're my vibe\n    \n    Bridge:\n    From the mountains to the sea\n    Sparkling water, you're the key\n    To a healthy life, a happy soul\n    A drink that makes me feel whole\n    \n    Chorus:\n    Sparkling water, oh so fine\n    A drink that's always on my mind\n    With every sip, I feel alive\n    Sparkling water, you're my vibe\n    \n    Outro:\n    Sparkling water, you're the one\n    A drink that's always so much fun\n    I'll never let you go, my friend\n    Sparkling\n"))))}c.isMDXComponent=!0;const p={},m="Streaming",d={unversionedId:"modules/model_io/models/chat/how_to/streaming",id:"modules/model_io/models/chat/how_to/streaming",title:"Streaming",description:"Some Chat models provide a streaming response. This means that instead of waiting for the entire response to be returned, you can start processing it as soon as it's available. This is useful if you want to display the response to the user as it's being generated, or if you want to process the response as it's being generated.",source:"@site/docs/modules/model_io/models/chat/how_to/streaming.mdx",sourceDirName:"modules/model_io/models/chat/how_to",slug:"/modules/model_io/models/chat/how_to/streaming",permalink:"/langchain-docs-scratch/docs/modules/model_io/models/chat/how_to/streaming",draft:!1,editUrl:"https://github.com/hwchase17/langchainjs/edit/main/docs/docs/modules/model_io/models/chat/how_to/streaming.mdx",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Prompts",permalink:"/langchain-docs-scratch/docs/modules/model_io/models/chat/how_to/prompts"},next:{title:"Anthropic",permalink:"/langchain-docs-scratch/docs/modules/model_io/models/chat/integrations/anthropic"}},u={},h=[],g={toc:h},y="wrapper";function f(e){let{components:t,...n}=e;return(0,o.kt)(y,(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"streaming"},"Streaming"),(0,o.kt)("p",null,"Some Chat models provide a streaming response. This means that instead of waiting for the entire response to be returned, you can start processing it as soon as it's available. This is useful if you want to display the response to the user as it's being generated, or if you want to process the response as it's being generated."),(0,o.kt)(c,{mdxType:"StreamingChatModel"}))}f.isMDXComponent=!0}}]);