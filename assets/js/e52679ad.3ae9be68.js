"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[42199],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),i=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=i(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=i(n),p=o,d=m["".concat(l,".").concat(p)]||m[p]||h[p]||c;return n?a.createElement(d,r(r({ref:t},u),{},{components:n})):a.createElement(d,r({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,r=new Array(c);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:o,r[1]=s;for(var i=2;i<c;i++)r[i]=n[i];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},38229:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>c,metadata:()=>s,toc:()=>i});var a=n(87462),o=(n(67294),n(3905));const c={},r="Callbacks for custom chains",s={unversionedId:"modules/callbacks/how_to/custom_chain",id:"modules/callbacks/how_to/custom_chain",title:"Callbacks for custom chains",description:"When you create a custom chain you can easily set it up to use the same callback system as all the built-in chains.",source:"@site/docs/modules/callbacks/how_to/custom_chain.mdx",sourceDirName:"modules/callbacks/how_to",slug:"/modules/callbacks/how_to/custom_chain",permalink:"/langchain-docs-scratch/docs/modules/callbacks/how_to/custom_chain",draft:!1,editUrl:"https://github.com/hwchase17/langchainjs/edit/main/docs/docs/modules/callbacks/how_to/custom_chain.mdx",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Custom callback handlers",permalink:"/langchain-docs-scratch/docs/modules/callbacks/how_to/custom_callbacks"},next:{title:"Logging to file",permalink:"/langchain-docs-scratch/docs/modules/callbacks/how_to/filecallbackhandler"}},l={},i=[],u={toc:i},m="wrapper";function h(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"callbacks-for-custom-chains"},"Callbacks for custom chains"),(0,o.kt)("p",null," When you create a custom chain you can easily set it up to use the same callback system as all the built-in chains.\n",(0,o.kt)("inlineCode",{parentName:"p"},"_call"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"_generate"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"_run"),", and equivalent async methods on Chains / LLMs / Chat Models / Agents / Tools now receive a 2nd argument called ",(0,o.kt)("inlineCode",{parentName:"p"},"run_manager")," which is bound to that run, and contains the logging methods that can be used by that object (i.e. ",(0,o.kt)("inlineCode",{parentName:"p"},"on_llm_new_token"),"). This is useful when constructing a custom chain. See this guide for more information on how to ",(0,o.kt)("a",{parentName:"p",href:"/docs/modules/chains/how_to/custom_chain.html"},"create custom chains and use callbacks inside them"),"."))}h.isMDXComponent=!0}}]);