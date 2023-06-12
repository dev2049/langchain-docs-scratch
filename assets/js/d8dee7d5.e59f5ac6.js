"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[85736],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),d=a,h=p["".concat(l,".").concat(d)]||p[d]||m[d]||o;return n?r.createElement(h,s(s({ref:t},u),{},{components:n})):r.createElement(h,s({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},95984:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={},s="HTTP request chain",i={unversionedId:"modules/chains/additional/llm_requests",id:"modules/chains/additional/llm_requests",title:"HTTP request chain",description:"Using the request library to get HTML results from a URL and then an LLM to parse results",source:"@site/docs/modules/chains/additional/llm_requests.md",sourceDirName:"modules/chains/additional",slug:"/modules/chains/additional/llm_requests",permalink:"/langchain-docs-scratch/docs/modules/chains/additional/llm_requests",draft:!1,editUrl:"https://github.com/hwchase17/langchainjs/edit/main/docs/docs/modules/chains/additional/llm_requests.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Math chain",permalink:"/langchain-docs-scratch/docs/modules/chains/additional/llm_math"},next:{title:"Summarization checker chain",permalink:"/langchain-docs-scratch/docs/modules/chains/additional/llm_summarization_checker"}},l={},c=[],u=(p="CodeOutputBlock",function(e){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var p;const m={toc:c},d="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"http-request-chain"},"HTTP request chain"),(0,a.kt)("p",null,"Using the request library to get HTML results from a URL and then an LLM to parse results"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from langchain.llms import OpenAI\nfrom langchain.chains import LLMRequestsChain, LLMChain\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'from langchain.prompts import PromptTemplate\n\ntemplate = """Between >>> and <<< are the raw search result text from google.\nExtract the answer to the question \'{query}\' or say "not found" if the information is not contained.\nUse the format\nExtracted:<answer or "not found">\n>>> {requests_result} <<<\nExtracted:"""\n\nPROMPT = PromptTemplate(\n    input_variables=["query", "requests_result"],\n    template=template,\n)\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"chain = LLMRequestsChain(llm_chain = LLMChain(llm=OpenAI(temperature=0), prompt=PROMPT))\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'question = "What are the Three (3) biggest countries, and their respective sizes?"\ninputs = {\n    "query": question,\n    "url": "https://www.google.com/search?q=" + question.replace(" ", "+")\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"chain(inputs)\n")),(0,a.kt)(u,{lang:"python",mdxType:"CodeOutputBlock"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    {'query': 'What are the Three (3) biggest countries, and their respective sizes?',\n     'url': 'https://www.google.com/search?q=What+are+the+Three+(3)+biggest+countries,+and+their+respective+sizes?',\n     'output': ' Russia (17,098,242 km\xb2), Canada (9,984,670 km\xb2), United States (9,826,675 km\xb2)'}\n"))))}h.isMDXComponent=!0}}]);