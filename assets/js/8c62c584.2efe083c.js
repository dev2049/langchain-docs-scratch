"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[51120],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),p=a,m=d["".concat(l,".").concat(p)]||d[p]||h[p]||r;return n?o.createElement(m,s(s({ref:t},c),{},{components:n})):o.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:a,s[1]=i;for(var u=2;u<r;u++)s[u]=n[u];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},73140:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var o=n(87462),a=(n(67294),n(3905));const r={},s="Question Answering over Docs",i={unversionedId:"use_cases/question_answering/index",id:"use_cases/question_answering/index",title:"Question Answering over Docs",description:"Conceptual Guide",source:"@site/docs/use_cases/question_answering/index.mdx",sourceDirName:"use_cases/question_answering",slug:"/use_cases/question_answering/",permalink:"/langchain-docs-scratch/docs/use_cases/question_answering/",draft:!1,editUrl:"https://github.com/hwchase17/langchainjs/edit/main/docs/docs/use_cases/question_answering/index.mdx",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Agents",permalink:"/langchain-docs-scratch/docs/use_cases/personal_assistants"},next:{title:"Question answering over a group chat messages",permalink:"/langchain-docs-scratch/docs/use_cases/question_answering/semantic-search-over-chat"}},l={},u=[{value:"Document Question Answering",id:"document-question-answering",level:2},{value:"Adding in sources",id:"adding-in-sources",level:2},{value:"Additional Related Resources",id:"additional-related-resources",level:2},{value:"End-to-end examples",id:"end-to-end-examples",level:2}],c={toc:u},d="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"question-answering-over-docs"},"Question Answering over Docs"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://docs.langchain.com/docs/use-cases/qa-docs"},"Conceptual Guide"))),(0,a.kt)("p",null,"Question answering in this context refers to question answering over your document data.\nFor question answering over other types of data, please see other sources documentation like ",(0,a.kt)("a",{parentName:"p",href:"../tabular.md"},"SQL database Question Answering")," or ",(0,a.kt)("a",{parentName:"p",href:"../apis.md"},"Interacting with APIs"),"."),(0,a.kt)("p",null,"For question answering over many documents, you almost always want to create an index over the data.\nThis can be used to smartly access the most relevant documents for a given question, allowing you to avoid having to pass all the documents to the LLM (saving you time and money)."),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"../modules/indexes/getting_started.html"},"this notebook")," for a more detailed introduction to this, but for a super quick start the steps involved are:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Load Your Documents")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from langchain.document_loaders import TextLoader\nloader = TextLoader('../state_of_the_union.txt')\n")),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"../modules/indexes/document_loaders.rst"},"here")," for more information on how to get started with document loading."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Create Your Index")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from langchain.indexes import VectorstoreIndexCreator\nindex = VectorstoreIndexCreator().from_loaders([loader])\n")),(0,a.kt)("p",null,"The best and most popular index by far at the moment is the VectorStore index."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Query Your Index")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'query = "What did the president say about Ketanji Brown Jackson"\nindex.query(query)\n')),(0,a.kt)("p",null,"Alternatively, use ",(0,a.kt)("inlineCode",{parentName:"p"},"query_with_sources")," to also get back the sources involved"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'query = "What did the president say about Ketanji Brown Jackson"\nindex.query_with_sources(query)\n')),(0,a.kt)("p",null,"Again, these high level interfaces obfuscate a lot of what is going on under the hood, so please see ",(0,a.kt)("a",{parentName:"p",href:"../modules/indexes/getting_started.html"},"this notebook")," for a lower level walkthrough."),(0,a.kt)("h2",{id:"document-question-answering"},"Document Question Answering"),(0,a.kt)("p",null,"Question answering involves fetching multiple documents, and then asking a question of them.\nThe LLM response will contain the answer to your question, based on the content of the documents."),(0,a.kt)("p",null,"The recommended way to get started using a question answering chain is:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'from langchain.chains.question_answering import load_qa_chain\nchain = load_qa_chain(llm, chain_type="stuff")\nchain.run(input_documents=docs, question=query)\n')),(0,a.kt)("p",null,"The following resources exist:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../modules/chains/index_examples/question_answering.html"},"Question Answering Notebook"),": A notebook walking through how to accomplish this task."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../modules/chains/index_examples/vector_db_qa.html"},"VectorDB Question Answering Notebook"),": A notebook walking through how to do question answering over a vector database. This can often be useful for when you have a LOT of documents, and you don't want to pass them all to the LLM, but rather first want to do some semantic search over embeddings.")),(0,a.kt)("h2",{id:"adding-in-sources"},"Adding in sources"),(0,a.kt)("p",null,"There is also a variant of this, where in addition to responding with the answer the language model will also cite its sources (eg which of the documents passed in it used)."),(0,a.kt)("p",null,"The recommended way to get started using a question answering with sources chain is:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'from langchain.chains.qa_with_sources import load_qa_with_sources_chain\nchain = load_qa_with_sources_chain(llm, chain_type="stuff")\nchain({"input_documents": docs, "question": query}, return_only_outputs=True)\n')),(0,a.kt)("p",null,"The following resources exist:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../modules/chains/index_examples/qa_with_sources.html"},"QA With Sources Notebook"),": A notebook walking through how to accomplish this task."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../modules/chains/index_examples/vector_db_qa_with_sources.html"},"VectorDB QA With Sources Notebook"),": A notebook walking through how to do question answering with sources over a vector database. This can often be useful for when you have a LOT of documents, and you don't want to pass them all to the LLM, but rather first want to do some semantic search over embeddings.")),(0,a.kt)("h2",{id:"additional-related-resources"},"Additional Related Resources"),(0,a.kt)("p",null,"Additional related resources include:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/modules/utils/how_to_guides.rst"},"Utilities for working with Documents"),": Guides on how to use several of the utilities which will prove helpful for this task, including Text Splitters (for splitting up long documents) and Embeddings & Vectorstores (useful for the above Vector DB example)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/modules/indexes/combine_docs.md"},"CombineDocuments Chains"),": A conceptual overview of specific types of chains by which you can accomplish this task.")),(0,a.kt)("h2",{id:"end-to-end-examples"},"End-to-end examples"),(0,a.kt)("p",null,"For examples to this done in an end-to-end manner, please see the following resources:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"question_answering/semantic-search-over-chat.html"},"Semantic search over a group chat with Sources Notebook"),": A notebook that semantically searches over a group chat conversation.")))}h.isMDXComponent=!0}}]);