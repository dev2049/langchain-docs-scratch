"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[47251],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},l="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=d(n),p=a,g=l["".concat(c,".").concat(p)]||l[p]||m[p]||o;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[l]="string"==typeof e?e:a,i[1]=s;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},25540:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var r=n(87462),a=(n(67294),n(3905));const o={},i="InstructEmbeddings",s={unversionedId:"modules/data_io/text_embedding/integrations/instruct_embeddings",id:"modules/data_io/text_embedding/integrations/instruct_embeddings",title:"InstructEmbeddings",description:"Let's load the HuggingFace instruct Embeddings class.",source:"@site/docs/modules/data_io/text_embedding/integrations/instruct_embeddings.md",sourceDirName:"modules/data_io/text_embedding/integrations",slug:"/modules/data_io/text_embedding/integrations/instruct_embeddings",permalink:"/langchain-docs-scratch/docs/modules/data_io/text_embedding/integrations/instruct_embeddings",draft:!1,editUrl:"https://github.com/hwchase17/langchainjs/edit/main/docs/docs/modules/data_io/text_embedding/integrations/instruct_embeddings.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Hugging Face Hub",permalink:"/langchain-docs-scratch/docs/modules/data_io/text_embedding/integrations/huggingfacehub"},next:{title:"Jina",permalink:"/langchain-docs-scratch/docs/modules/data_io/text_embedding/integrations/jina"}},c={},d=[],u=(l="CodeOutputBlock",function(e){return console.warn("Component "+l+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var l;const m={toc:d},p="wrapper";function g(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"instructembeddings"},"InstructEmbeddings"),(0,a.kt)("p",null,"Let's load the HuggingFace instruct Embeddings class."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from langchain.embeddings import HuggingFaceInstructEmbeddings\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'embeddings = HuggingFaceInstructEmbeddings(\n    query_instruction="Represent the query for retrieval: "\n)\n')),(0,a.kt)(u,{lang:"python",mdxType:"CodeOutputBlock"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    load INSTRUCTOR_Transformer\n    max_seq_length  512\n"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'text = "This is a test document."\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"query_result = embeddings.embed_query(text)\n")))}g.isMDXComponent=!0}}]);