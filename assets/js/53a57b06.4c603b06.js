"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[40026],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>h});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),d=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=d(r),m=o,h=u["".concat(c,".").concat(m)]||u[m]||p[m]||a;return r?n.createElement(h,i(i({ref:t},l),{},{components:r})):n.createElement(h,i({ref:t},l))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var d=2;d<a;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},25809:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var n=r(87462),o=(r(67294),r(3905));const a={},i="PubMed Retriever",s={unversionedId:"modules/data_io/retrievers/integrations/pubmed",id:"modules/data_io/retrievers/integrations/pubmed",title:"PubMed Retriever",description:"This notebook goes over how to use PubMed as a retriever",source:"@site/docs/modules/data_io/retrievers/integrations/pubmed.md",sourceDirName:"modules/data_io/retrievers/integrations",slug:"/modules/data_io/retrievers/integrations/pubmed",permalink:"/langchain-docs-scratch/docs/modules/data_io/retrievers/integrations/pubmed",draft:!1,editUrl:"https://github.com/hwchase17/langchainjs/edit/main/docs/docs/modules/data_io/retrievers/integrations/pubmed.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Pinecone Hybrid Search",permalink:"/langchain-docs-scratch/docs/modules/data_io/retrievers/integrations/pinecone_hybrid_search"},next:{title:"SVM",permalink:"/langchain-docs-scratch/docs/modules/data_io/retrievers/integrations/svm"}},c={},d=[],l=(u="CodeOutputBlock",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var u;const p={toc:d},m="wrapper";function h(e){let{components:t,...r}=e;return(0,o.kt)(m,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"pubmed-retriever"},"PubMed Retriever"),(0,o.kt)("p",null,"This notebook goes over how to use PubMed as a retriever"),(0,o.kt)("p",null,"PubMed\xae comprises more than 35 million citations for biomedical literature from MEDLINE, life science journals, and online books. Citations may include links to full text content from PubMed Central and publisher web sites."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from langchain.retrievers import PubMedRetriever\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"retriever = PubMedRetriever()\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'retriever.get_relevant_documents("chatgpt")\n')),(0,o.kt)(l,{lang:"python",mdxType:"CodeOutputBlock"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    [Document(page_content='', metadata={'uid': '37268021', 'title': 'Dermatology in the wake of an AI revolution: who gets a say?', 'pub_date': '<Year>2023</Year><Month>May</Month><Day>31</Day>'}),\n     Document(page_content='', metadata={'uid': '37267643', 'title': 'What is ChatGPT and what do we do with it? Implications of the age of AI for nursing and midwifery practice and education: An editorial.', 'pub_date': '<Year>2023</Year><Month>May</Month><Day>30</Day>'}),\n     Document(page_content='The nursing field has undergone notable changes over time and is projected to undergo further modifications in the future, owing to the advent of sophisticated technologies and growing healthcare needs. The advent of ChatGPT, an AI-powered language model, is expected to exert a significant influence on the nursing profession, specifically in the domains of patient care and instruction. The present article delves into the ramifications of ChatGPT within the nursing domain and accentuates its capacity and constraints to transform the discipline.', metadata={'uid': '37266721', 'title': 'The Impact of ChatGPT on the Nursing Profession: Revolutionizing Patient Care and Education.', 'pub_date': '<Year>2023</Year><Month>Jun</Month><Day>02</Day>'})]\n"))))}h.isMDXComponent=!0}}]);