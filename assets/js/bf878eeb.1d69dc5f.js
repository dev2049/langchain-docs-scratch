"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[89401],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),d=a,h=u["".concat(c,".").concat(d)]||u[d]||m[d]||o;return r?n.createElement(h,i(i({ref:t},p),{},{components:r})):n.createElement(h,i({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},71705:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const o={},i="Tair",s={unversionedId:"ecosystem/integrations/tair",id:"ecosystem/integrations/tair",title:"Tair",description:"This page covers how to use the Tair ecosystem within LangChain.",source:"@site/docs/ecosystem/integrations/tair.mdx",sourceDirName:"ecosystem/integrations",slug:"/ecosystem/integrations/tair",permalink:"/langchain-docs-scratch/docs/ecosystem/integrations/tair",draft:!1,editUrl:"https://github.com/hwchase17/langchainjs/edit/main/docs/docs/ecosystem/integrations/tair.mdx",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Stripe",permalink:"/langchain-docs-scratch/docs/ecosystem/integrations/stripe"},next:{title:"Telegram",permalink:"/langchain-docs-scratch/docs/ecosystem/integrations/telegram"}},c={},l=[{value:"Installation and Setup",id:"installation-and-setup",level:2},{value:"Wrappers",id:"wrappers",level:2},{value:"VectorStore",id:"vectorstore",level:3}],p={toc:l},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"tair"},"Tair"),(0,a.kt)("p",null,"This page covers how to use the Tair ecosystem within LangChain."),(0,a.kt)("h2",{id:"installation-and-setup"},"Installation and Setup"),(0,a.kt)("p",null,"Install Tair Python SDK with ",(0,a.kt)("inlineCode",{parentName:"p"},"pip install tair"),"."),(0,a.kt)("h2",{id:"wrappers"},"Wrappers"),(0,a.kt)("h3",{id:"vectorstore"},"VectorStore"),(0,a.kt)("p",null,"There exists a wrapper around TairVector, allowing you to use it as a vectorstore,\nwhether for semantic search or example selection."),(0,a.kt)("p",null,"To import this vectorstore:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from langchain.vectorstores import Tair\n")),(0,a.kt)("p",null,"For a more detailed walkthrough of the Tair wrapper, see ",(0,a.kt)("a",{parentName:"p",href:"/docs/modules/data_io/vectorstores/integrations/tair.ipynb"},"this notebook")))}m.isMDXComponent=!0}}]);