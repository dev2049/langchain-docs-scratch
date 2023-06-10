"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[56277],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(g,i(i({ref:t},p),{},{components:r})):n.createElement(g,i({ref:t},p))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},44002:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={},i="Metal",l={unversionedId:"modules/data_io/retrievers/integrations/metal",id:"modules/data_io/retrievers/integrations/metal",title:"Metal",description:"Metal is a managed service for ML Embeddings.",source:"@site/docs/modules/data_io/retrievers/integrations/metal.md",sourceDirName:"modules/data_io/retrievers/integrations",slug:"/modules/data_io/retrievers/integrations/metal",permalink:"/langchain-docs-scratch/docs/modules/data_io/retrievers/integrations/metal",draft:!1,editUrl:"https://github.com/hwchase17/langchainjs/edit/main/docs/docs/modules/data_io/retrievers/integrations/metal.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"kNN",permalink:"/langchain-docs-scratch/docs/modules/data_io/retrievers/integrations/knn"},next:{title:"Pinecone Hybrid Search",permalink:"/langchain-docs-scratch/docs/modules/data_io/retrievers/integrations/pinecone_hybrid_search"}},s={},c=[{value:"Ingest Documents",id:"ingest-documents",level:2},{value:"Query",id:"query",level:2}],p=(d="CodeOutputBlock",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var d;const u={toc:c},m="wrapper";function g(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"metal"},"Metal"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/getmetal/metal-python"},"Metal")," is a managed service for ML Embeddings.")),(0,a.kt)("p",null,"This notebook shows how to use ",(0,a.kt)("a",{parentName:"p",href:"https://docs.getmetal.io/introduction"},"Metal's")," retriever."),(0,a.kt)("p",null,"First, you will need to sign up for Metal and get an API key. You can do so ",(0,a.kt)("a",{parentName:"p",href:"https://docs.getmetal.io/misc-create-app"},"here")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"# !pip install metal_sdk\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'from metal_sdk.metal import Metal\nAPI_KEY = ""\nCLIENT_ID = ""\nINDEX_ID = ""\n\nmetal = Metal(API_KEY, CLIENT_ID, INDEX_ID);\n')),(0,a.kt)("h2",{id:"ingest-documents"},"Ingest Documents"),(0,a.kt)("p",null,"You only need to do this if you haven't already set up an index"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'metal.index( {"text": "foo1"})\nmetal.index( {"text": "foo"})\n')),(0,a.kt)(p,{lang:"python",mdxType:"CodeOutputBlock"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    {'data': {'id': '642739aa7559b026b4430e42',\n      'text': 'foo',\n      'createdAt': '2023-03-31T19:51:06.748Z'}}\n"))),(0,a.kt)("h2",{id:"query"},"Query"),(0,a.kt)("p",null,"Now that our index is set up, we can set up a retriever and start querying it."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from langchain.retrievers import MetalRetriever\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'retriever = MetalRetriever(metal, params={"limit": 2})\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'retriever.get_relevant_documents("foo1")\n')),(0,a.kt)(p,{lang:"python",mdxType:"CodeOutputBlock"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    [Document(page_content='foo1', metadata={'dist': '1.19209289551e-07', 'id': '642739a17559b026b4430e40', 'createdAt': '2023-03-31T19:50:57.853Z'}),\n     Document(page_content='foo1', metadata={'dist': '4.05311584473e-06', 'id': '642738f67559b026b4430e3c', 'createdAt': '2023-03-31T19:48:06.769Z'})]\n"))))}g.isMDXComponent=!0}}]);