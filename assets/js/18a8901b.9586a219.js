"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[50253],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>h});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),d=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=d(n),m=r,h=p["".concat(s,".").concat(m)]||p[m]||u[m]||a;return n?o.createElement(h,i(i({ref:t},l),{},{components:n})):o.createElement(h,i({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:r,i[1]=c;for(var d=2;d<a;d++)i[d]=n[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},21963:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var o=n(87462),r=(n(67294),n(3905));const a={},i="Psychic",c={unversionedId:"modules/data_io/document_loaders/integrations/psychic",id:"modules/data_io/document_loaders/integrations/psychic",title:"Psychic",description:"This notebook covers how to load documents from Psychic. See here for more details.",source:"@site/docs/modules/data_io/document_loaders/integrations/psychic.md",sourceDirName:"modules/data_io/document_loaders/integrations",slug:"/modules/data_io/document_loaders/integrations/psychic",permalink:"/langchain-docs-scratch/docs/modules/data_io/document_loaders/integrations/psychic",draft:!1,editUrl:"https://github.com/hwchase17/langchainjs/edit/main/docs/docs/modules/data_io/document_loaders/integrations/psychic.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Pandas DataFrame",permalink:"/langchain-docs-scratch/docs/modules/data_io/document_loaders/integrations/pandas_dataframe"},next:{title:"PySpark DataFrame Loader",permalink:"/langchain-docs-scratch/docs/modules/data_io/document_loaders/integrations/pyspark_dataframe"}},s={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Loading documents",id:"loading-documents",level:2},{value:"Converting the docs to embeddings",id:"converting-the-docs-to-embeddings",level:2}],l=(p="CodeOutputBlock",function(e){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var p;const u={toc:d},m="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"psychic"},"Psychic"),(0,r.kt)("p",null,"This notebook covers how to load documents from ",(0,r.kt)("inlineCode",{parentName:"p"},"Psychic"),". See ",(0,r.kt)("a",{parentName:"p",href:"../../../../ecosystem/psychic.md"},"here")," for more details."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Follow the Quick Start section in ",(0,r.kt)("a",{parentName:"li",href:"../../../../ecosystem/psychic.md"},"this document")),(0,r.kt)("li",{parentName:"ol"},"Log into the ",(0,r.kt)("a",{parentName:"li",href:"https://dashboard.psychic.dev/"},"Psychic dashboard")," and get your secret key"),(0,r.kt)("li",{parentName:"ol"},"Install the frontend react library into your web app and have a user authenticate a connection. The connection will be created using the connection id that you specify.")),(0,r.kt)("h2",{id:"loading-documents"},"Loading documents"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"PsychicLoader")," class to load in documents from a connection. Each connection has a connector id (corresponding to the SaaS app that was connected) and a connection id (which you passed in to the frontend library)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Uncomment this to install psychicapi if you don't already have it installed\npoetry run pip -q install psychicapi\n")),(0,r.kt)(l,{lang:"bash",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    \n    [notice] A new release of pip is available: 23.0.1 -> 23.1.2\n    [notice] To update, run: pip install --upgrade pip\n"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from langchain.document_loaders import PsychicLoader\nfrom psychicapi import ConnectorId\n\n# Create a document loader for google drive. We can also load from other connectors by setting the connector_id to the appropriate value e.g. ConnectorId.notion.value\n# This loader uses our test credentials\ngoogle_drive_loader = PsychicLoader(\n    api_key="7ddb61c1-8b6a-4d31-a58e-30d1c9ea480e",\n    connector_id=ConnectorId.gdrive.value,\n    connection_id="google-test"\n)\n\ndocuments = google_drive_loader.load()\n')),(0,r.kt)("h2",{id:"converting-the-docs-to-embeddings"},"Converting the docs to embeddings"),(0,r.kt)("p",null,"We can now convert these documents into embeddings and store them in a vector database like Chroma"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from langchain.embeddings.openai import OpenAIEmbeddings\nfrom langchain.vectorstores import Chroma\nfrom langchain.text_splitter import CharacterTextSplitter\nfrom langchain.llms import OpenAI\nfrom langchain.chains import RetrievalQAWithSourcesChain\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'text_splitter = CharacterTextSplitter(chunk_size=1000, chunk_overlap=0)\ntexts = text_splitter.split_documents(documents)\n\nembeddings = OpenAIEmbeddings()\ndocsearch = Chroma.from_documents(texts, embeddings)\nchain = RetrievalQAWithSourcesChain.from_chain_type(OpenAI(temperature=0), chain_type="stuff", retriever=docsearch.as_retriever())\nchain({"question": "what is psychic?"}, return_only_outputs=True)\n')))}h.isMDXComponent=!0}}]);