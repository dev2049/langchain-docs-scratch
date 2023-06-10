"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8120],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>h});var o=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=o.createContext({}),c=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=c(e.components);return o.createElement(l.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(t),m=a,h=p["".concat(l,".").concat(m)]||p[m]||u[m]||r;return t?o.createElement(h,i(i({ref:n},d),{},{components:t})):o.createElement(h,i({ref:n},d))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<r;c++)i[c]=t[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},43538:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>p,default:()=>w,frontMatter:()=>d,metadata:()=>u,toc:()=>h});var o=t(87462),a=(t(67294),t(3905));const r=(i="CodeOutputBlock",function(e){return console.warn("Component "+i+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var i;const s={toc:[{value:"Retain Elements",id:"retain-elements",level:2}]},l="wrapper";function c(e){let{components:n,...t}=e;return(0,a.kt)(l,(0,o.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"# !pip install unstructured > /dev/null\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from langchain.document_loaders import UnstructuredMarkdownLoader\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'markdown_path = "../../../../../README.md"\nloader = UnstructuredMarkdownLoader(markdown_path)\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"data = loader.load()\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"data\n")),(0,a.kt)(r,{lang:"python",mdxType:"CodeOutputBlock"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    [Document(page_content=\"\xf0\\x9f\xa6\\x9c\xef\xb8\\x8f\xf0\\x9f\u201d\\x97 LangChain\\n\\n\xe2\\x9a\xa1 Building applications with LLMs through composability \xe2\\x9a\xa1\\n\\nLooking for the JS/TS version? Check out LangChain.js.\\n\\nProduction Support: As you move your LangChains into production, we'd love to offer more comprehensive support.\\nPlease fill out this form and we'll set up a dedicated support Slack channel.\\n\\nQuick Install\\n\\npip install langchain\\nor\\nconda install langchain -c conda-forge\\n\\n\xf0\\x9f\xa4\u201d What is this?\\n\\nLarge language models (LLMs) are emerging as a transformative technology, enabling developers to build applications that they previously could not. However, using these LLMs in isolation is often insufficient for creating a truly powerful app - the real power comes when you can combine them with other sources of computation or knowledge.\\n\\nThis library aims to assist in the development of those types of applications. Common examples of these applications include:\\n\\n\xe2\\x9d\u201c Question Answering over specific documents\\n\\nDocumentation\\n\\nEnd-to-end Example: Question Answering over Notion Database\\n\\n\xf0\\x9f\u2019\xac Chatbots\\n\\nDocumentation\\n\\nEnd-to-end Example: Chat-LangChain\\n\\n\xf0\\x9f\xa4\\x96 Agents\\n\\nDocumentation\\n\\nEnd-to-end Example: GPT+WolframAlpha\\n\\n\xf0\\x9f\u201c\\x96 Documentation\\n\\nPlease see here for full documentation on:\\n\\nGetting started (installation, setting up the environment, simple examples)\\n\\nHow-To examples (demos, integrations, helper functions)\\n\\nReference (full API docs)\\n\\nResources (high-level explanation of core concepts)\\n\\n\xf0\\x9f\\x9a\\x80 What can this help with?\\n\\nThere are six main areas that LangChain is designed to help with.\\nThese are, in increasing order of complexity:\\n\\n\xf0\\x9f\u201c\\x83 LLMs and Prompts:\\n\\nThis includes prompt management, prompt optimization, a generic interface for all LLMs, and common utilities for working with LLMs.\\n\\n\xf0\\x9f\u201d\\x97 Chains:\\n\\nChains go beyond a single LLM call and involve sequences of calls (whether to an LLM or a different utility). LangChain provides a standard interface for chains, lots of integrations with other tools, and end-to-end chains for common applications.\\n\\n\xf0\\x9f\u201c\\x9a Data Augmented Generation:\\n\\nData Augmented Generation involves specific types of chains that first interact with an external data source to fetch data for use in the generation step. Examples include summarization of long pieces of text and question/answering over specific data sources.\\n\\n\xf0\\x9f\xa4\\x96 Agents:\\n\\nAgents involve an LLM making decisions about which Actions to take, taking that Action, seeing an Observation, and repeating that until done. LangChain provides a standard interface for agents, a selection of agents to choose from, and examples of end-to-end agents.\\n\\n\xf0\\x9f\xa7\\xa0 Memory:\\n\\nMemory refers to persisting state between calls of a chain/agent. LangChain provides a standard interface for memory, a collection of memory implementations, and examples of chains/agents that use memory.\\n\\n\xf0\\x9f\xa7\\x90 Evaluation:\\n\\n[BETA] Generative models are notoriously hard to evaluate with traditional metrics. One new way of evaluating them is using language models themselves to do the evaluation. LangChain provides some prompts/chains for assisting in this.\\n\\nFor more information on these concepts, please see our full documentation.\\n\\n\xf0\\x9f\u2019\\x81 Contributing\\n\\nAs an open-source project in a rapidly developing field, we are extremely open to contributions, whether it be in the form of a new feature, improved infrastructure, or better documentation.\\n\\nFor detailed information on how to contribute, see here.\", metadata={'source': '../../../../../README.md'})]\n"))),(0,a.kt)("h2",{id:"retain-elements"},"Retain Elements"),(0,a.kt)("p",null,'Under the hood, Unstructured creates different "elements" for different chunks of text. By default we combine those together, but you can easily keep that separation by specifying ',(0,a.kt)("inlineCode",{parentName:"p"},'mode="elements"'),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'loader = UnstructuredMarkdownLoader(markdown_path, mode="elements")\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"data = loader.load()\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"data[0]\n")),(0,a.kt)(r,{lang:"python",mdxType:"CodeOutputBlock"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    Document(page_content='\xf0\\x9f\xa6\\x9c\xef\xb8\\x8f\xf0\\x9f\u201d\\x97 LangChain', metadata={'source': '../../../../../README.md', 'page_number': 1, 'category': 'Title'})\n"))))}c.isMDXComponent=!0;const d={},p="Markdown",u={unversionedId:"modules/data_io/document_loaders/how_to/markdown",id:"modules/data_io/document_loaders/how_to/markdown",title:"Markdown",description:"Markdown is a lightweight markup language for creating formatted text using a plain-text editor.",source:"@site/docs/modules/data_io/document_loaders/how_to/markdown.mdx",sourceDirName:"modules/data_io/document_loaders/how_to",slug:"/modules/data_io/document_loaders/how_to/markdown",permalink:"/langchain-docs-scratch/docs/modules/data_io/document_loaders/how_to/markdown",draft:!1,editUrl:"https://github.com/hwchase17/langchainjs/edit/main/docs/docs/modules/data_io/document_loaders/how_to/markdown.mdx",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"JSON",permalink:"/langchain-docs-scratch/docs/modules/data_io/document_loaders/how_to/json"},next:{title:"PDF",permalink:"/langchain-docs-scratch/docs/modules/data_io/document_loaders/how_to/pdf"}},m={},h=[],f={toc:h},g="wrapper";function w(e){let{components:n,...t}=e;return(0,a.kt)(g,(0,o.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"markdown"},"Markdown"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Markdown"},"Markdown")," is a lightweight markup language for creating formatted text using a plain-text editor.")),(0,a.kt)("p",null,"This covers how to load ",(0,a.kt)("inlineCode",{parentName:"p"},"Markdown")," documents into a document format that we can use downstream."),(0,a.kt)(c,{mdxType:"Example"}))}w.isMDXComponent=!0}}]);