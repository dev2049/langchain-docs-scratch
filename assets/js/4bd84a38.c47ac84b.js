"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[72971],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>h});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=s(t),u=a,h=p["".concat(l,".").concat(u)]||p[u]||m[u]||o;return t?r.createElement(h,i(i({ref:n},d),{},{components:t})):r.createElement(h,i({ref:n},d))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[p]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},24998:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var r=t(87462),a=(t(67294),t(3905));const o={},i="Math chain",c={unversionedId:"modules/chains/additional/llm_math",id:"modules/chains/additional/llm_math",title:"Math chain",description:"This notebook showcases using LLMs and Python REPLs to do complex word math problems.",source:"@site/docs/modules/chains/additional/llm_math.md",sourceDirName:"modules/chains/additional",slug:"/modules/chains/additional/llm_math",permalink:"/langchain-docs-scratch/docs/modules/chains/additional/llm_math",draft:!1,editUrl:"https://github.com/hwchase17/langchainjs/edit/main/docs/docs/modules/chains/additional/llm_math.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Self-checking chain",permalink:"/langchain-docs-scratch/docs/modules/chains/additional/llm_checker"},next:{title:"HTTP request chain",permalink:"/langchain-docs-scratch/docs/modules/chains/additional/llm_requests"}},l={},s=[],d=(p="CodeOutputBlock",function(e){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var p;const m={toc:s},u="wrapper";function h(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"math-chain"},"Math chain"),(0,a.kt)("p",null,"This notebook showcases using LLMs and Python REPLs to do complex word math problems."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'from langchain import OpenAI, LLMMathChain\n\nllm = OpenAI(temperature=0)\nllm_math = LLMMathChain.from_llm(llm, verbose=True)\n\nllm_math.run("What is 13 raised to the .3432 power?")\n')),(0,a.kt)(d,{lang:"python",mdxType:"CodeOutputBlock"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    \n    \n    > Entering new LLMMathChain chain...\n    What is 13 raised to the .3432 power?\n    ```text\n    13 ** .3432\n    ```\n    ...numexpr.evaluate(\"13 ** .3432\")...\n    \n    Answer: 2.4116004626599237\n    > Finished chain.\n\n\n\n\n\n    'Answer: 2.4116004626599237'\n"))))}h.isMDXComponent=!0}}]);