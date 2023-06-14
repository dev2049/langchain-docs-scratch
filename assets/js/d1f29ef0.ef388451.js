"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[32267],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,g=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(g,i(i({ref:t},l),{},{components:r})):n.createElement(g,i({ref:t},l))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},84210:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const o={},i="Iugu",s={unversionedId:"modules/data_io/document_loaders/integrations/iugu",id:"modules/data_io/document_loaders/integrations/iugu",title:"Iugu",description:"Iugu is a Brazilian services and software as a service (SaaS) company. It offers payment-processing software and application programming interfaces for e-commerce websites and mobile applications.",source:"@site/docs/modules/data_io/document_loaders/integrations/iugu.md",sourceDirName:"modules/data_io/document_loaders/integrations",slug:"/modules/data_io/document_loaders/integrations/iugu",permalink:"/langchain-docs-scratch/docs/modules/data_io/document_loaders/integrations/iugu",draft:!1,editUrl:"https://github.com/hwchase17/langchainjs/edit/main/docs/docs/modules/data_io/document_loaders/integrations/iugu.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"IMSDb",permalink:"/langchain-docs-scratch/docs/modules/data_io/document_loaders/integrations/imsdb"},next:{title:"Joplin",permalink:"/langchain-docs-scratch/docs/modules/data_io/document_loaders/integrations/joplin"}},c={},u=[],l={toc:u},d="wrapper";function p(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"iugu"},"Iugu"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://www.iugu.com/"},"Iugu")," is a Brazilian services and software as a service (SaaS) company. It offers payment-processing software and application programming interfaces for e-commerce websites and mobile applications.")),(0,a.kt)("p",null,"This notebook covers how to load data from the ",(0,a.kt)("inlineCode",{parentName:"p"},"Iugu REST API")," into a format that can be ingested into LangChain, along with example usage for vectorization."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import os\n\n\nfrom langchain.document_loaders import IuguLoader\nfrom langchain.indexes import VectorstoreIndexCreator\n")),(0,a.kt)("p",null,"The Iugu API requires an access token, which can be found inside of the Iugu dashboard."),(0,a.kt)("p",null,"This document loader also requires a ",(0,a.kt)("inlineCode",{parentName:"p"},"resource")," option which defines what data you want to load."),(0,a.kt)("p",null,"Following resources are available:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Documentation")," ",(0,a.kt)("a",{parentName:"p",href:"https://dev.iugu.com/reference/metadados"},"Documentation")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'iugu_loader = IuguLoader("charges")\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"# Create a vectorstore retriver from the loader\n# see https://python.langchain.com/en/latest/modules/data_io/getting_started.html for more details\n\nindex = VectorstoreIndexCreator().from_loaders([iugu_loader])\niugu_doc_retriever = index.vectorstore.as_retriever()\n")))}p.isMDXComponent=!0}}]);