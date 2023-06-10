"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3936],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return n?i.createElement(f,o(o({ref:t},p),{},{components:n})):i.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},93923:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var i=n(87462),r=(n(67294),n(3905));const a={},o="Wikipedia",l={unversionedId:"ecosystem/integrations/wikipedia",id:"ecosystem/integrations/wikipedia",title:"Wikipedia",description:"Wikipedia is a multilingual free online encyclopedia written and maintained by a community of volunteers, known as Wikipedians, through open collaboration and using a wiki-based editing system called MediaWiki. Wikipedia is the largest and most-read reference work in history.",source:"@site/docs/ecosystem/integrations/wikipedia.mdx",sourceDirName:"ecosystem/integrations",slug:"/ecosystem/integrations/wikipedia",permalink:"/langchain-docs-scratch/docs/ecosystem/integrations/wikipedia",draft:!1,editUrl:"https://github.com/hwchase17/langchainjs/edit/main/docs/docs/ecosystem/integrations/wikipedia.mdx",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"WhyLabs",permalink:"/langchain-docs-scratch/docs/ecosystem/integrations/whylabs_profiling"},next:{title:"Wolfram Alpha",permalink:"/langchain-docs-scratch/docs/ecosystem/integrations/wolfram_alpha"}},s={},c=[{value:"Installation and Setup",id:"installation-and-setup",level:2},{value:"Document Loader",id:"document-loader",level:2},{value:"Retriever",id:"retriever",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"wikipedia"},"Wikipedia"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://wikipedia.org/"},"Wikipedia")," is a multilingual free online encyclopedia written and maintained by a community of volunteers, known as Wikipedians, through open collaboration and using a wiki-based editing system called MediaWiki. ",(0,r.kt)("inlineCode",{parentName:"p"},"Wikipedia")," is the largest and most-read reference work in history.")),(0,r.kt)("h2",{id:"installation-and-setup"},"Installation and Setup"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pip install wikipedia\n")),(0,r.kt)("h2",{id:"document-loader"},"Document Loader"),(0,r.kt)("p",null,"See a ",(0,r.kt)("a",{parentName:"p",href:"../modules/indexes/document_loaders/examples/wikipedia.ipynb"},"usage example"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from langchain.document_loaders import WikipediaLoader\n")),(0,r.kt)("h2",{id:"retriever"},"Retriever"),(0,r.kt)("p",null,"See a ",(0,r.kt)("a",{parentName:"p",href:"../modules/indexes/retrievers/examples/wikipedia.ipynb"},"usage example"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from langchain.retrievers import WikipediaRetriever\n")))}u.isMDXComponent=!0}}]);