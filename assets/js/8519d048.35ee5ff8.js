"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[52927],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return n?o.createElement(h,s(s({ref:t},p),{},{components:n})):o.createElement(h,s({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:r,s[1]=i;for(var l=2;l<a;l++)s[l]=n[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},25116:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var o=n(87462),r=(n(67294),n(3905));const a={},s="SKLearnVectorStore",i={unversionedId:"modules/data_io/vectorstores/integrations/sklearn",id:"modules/data_io/vectorstores/integrations/sklearn",title:"SKLearnVectorStore",description:"scikit-learn is an open source collection of machine learning algorithms, including some implementations of the k nearest neighbors. SKLearnVectorStore wraps this implementation and adds the possibility to persist the vector store in json, bson (binary json) or Apache Parquet format.",source:"@site/docs/modules/data_io/vectorstores/integrations/sklearn.md",sourceDirName:"modules/data_io/vectorstores/integrations",slug:"/modules/data_io/vectorstores/integrations/sklearn",permalink:"/langchain-docs-scratch/docs/modules/data_io/vectorstores/integrations/sklearn",draft:!1,editUrl:"https://github.com/hwchase17/langchainjs/edit/main/docs/docs/modules/data_io/vectorstores/integrations/sklearn.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Redis",permalink:"/langchain-docs-scratch/docs/modules/data_io/vectorstores/integrations/redis"},next:{title:"Supabase (Postgres)",permalink:"/langchain-docs-scratch/docs/modules/data_io/vectorstores/integrations/supabase"}},c={},l=[{value:"Basic usage",id:"basic-usage",level:2},{value:"Load a sample document corpus",id:"load-a-sample-document-corpus",level:3},{value:"Create the SKLearnVectorStore, index the document corpus and run a sample query",id:"create-the-sklearnvectorstore-index-the-document-corpus-and-run-a-sample-query",level:3},{value:"Saving and loading a vector store",id:"saving-and-loading-a-vector-store",level:2},{value:"Clean-up",id:"clean-up",level:2}],p=(d="CodeOutputBlock",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var d;const u={toc:l},m="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"sklearnvectorstore"},"SKLearnVectorStore"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://scikit-learn.org/stable/"},"scikit-learn")," is an open source collection of machine learning algorithms, including some implementations of the ",(0,r.kt)("a",{parentName:"p",href:"https://scikit-learn.org/stable/modules/generated/sklearn.neighbors.NearestNeighbors.html"},"k nearest neighbors"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"SKLearnVectorStore")," wraps this implementation and adds the possibility to persist the vector store in json, bson (binary json) or Apache Parquet format."),(0,r.kt)("p",null,"This notebook shows how to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"SKLearnVectorStore")," vector database."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# # if you plan to use bson serialization, install also:\n# %pip install bson\n\n# # if you plan to use parquet serialization, install also:\n%pip install pandas pyarrow\n")),(0,r.kt)("p",null,"To use OpenAI embeddings, you will need an OpenAI key. You can get one at ",(0,r.kt)("a",{parentName:"p",href:"https://platform.openai.com/account/api-keys"},"https://platform.openai.com/account/api-keys")," or feel free to use any other embeddings."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import os\nfrom getpass import getpass\n\nos.environ['OPENAI_API_KEY'] = getpass('Enter your OpenAI key:')\n")),(0,r.kt)("h2",{id:"basic-usage"},"Basic usage"),(0,r.kt)("h3",{id:"load-a-sample-document-corpus"},"Load a sample document corpus"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from langchain.embeddings.openai import OpenAIEmbeddings\nfrom langchain.text_splitter import CharacterTextSplitter\nfrom langchain.vectorstores import SKLearnVectorStore\nfrom langchain.document_loaders import TextLoader\n\nloader = TextLoader('../../../state_of_the_union.txt')\ndocuments = loader.load()\ntext_splitter = CharacterTextSplitter(chunk_size=1000, chunk_overlap=0)\ndocs = text_splitter.split_documents(documents)\nembeddings = OpenAIEmbeddings()\n")),(0,r.kt)("h3",{id:"create-the-sklearnvectorstore-index-the-document-corpus-and-run-a-sample-query"},"Create the SKLearnVectorStore, index the document corpus and run a sample query"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import tempfile\npersist_path = os.path.join(tempfile.gettempdir(), 'union.parquet')\n\nvector_store = SKLearnVectorStore.from_documents(\n    documents=docs, \n    embedding=embeddings,\n    persist_path=persist_path, # persist_path and serializer are optional\n    serializer='parquet'\n)\n\nquery = \"What did the president say about Ketanji Brown Jackson\"\ndocs = vector_store.similarity_search(query)\nprint(docs[0].page_content)\n")),(0,r.kt)(p,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    Tonight. I call on the Senate to: Pass the Freedom to Vote Act. Pass the John Lewis Voting Rights Act. And while you\u2019re at it, pass the Disclose Act so Americans can know who is funding our elections. \n    \n    Tonight, I\u2019d like to honor someone who has dedicated his life to serve this country: Justice Stephen Breyer\u2014an Army veteran, Constitutional scholar, and retiring Justice of the United States Supreme Court. Justice Breyer, thank you for your service. \n    \n    One of the most serious constitutional responsibilities a President has is nominating someone to serve on the United States Supreme Court. \n    \n    And I did that 4 days ago, when I nominated Circuit Court of Appeals Judge Ketanji Brown Jackson. One of our nation\u2019s top legal minds, who will continue Justice Breyer\u2019s legacy of excellence.\n"))),(0,r.kt)("h2",{id:"saving-and-loading-a-vector-store"},"Saving and loading a vector store"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"vector_store.persist()\nprint('Vector store was persisted to', persist_path)\n")),(0,r.kt)(p,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    Vector store was persisted to /var/folders/6r/wc15p6m13nl_nl_n_xfqpc5c0000gp/T/union.parquet\n"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"vector_store2 = SKLearnVectorStore(\n    embedding=embeddings,\n    persist_path=persist_path,\n    serializer='parquet'\n)\nprint('A new instance of vector store was loaded from', persist_path)\n")),(0,r.kt)(p,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    A new instance of vector store was loaded from /var/folders/6r/wc15p6m13nl_nl_n_xfqpc5c0000gp/T/union.parquet\n"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"docs = vector_store2.similarity_search(query)\nprint(docs[0].page_content)\n")),(0,r.kt)(p,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    Tonight. I call on the Senate to: Pass the Freedom to Vote Act. Pass the John Lewis Voting Rights Act. And while you\u2019re at it, pass the Disclose Act so Americans can know who is funding our elections. \n    \n    Tonight, I\u2019d like to honor someone who has dedicated his life to serve this country: Justice Stephen Breyer\u2014an Army veteran, Constitutional scholar, and retiring Justice of the United States Supreme Court. Justice Breyer, thank you for your service. \n    \n    One of the most serious constitutional responsibilities a President has is nominating someone to serve on the United States Supreme Court. \n    \n    And I did that 4 days ago, when I nominated Circuit Court of Appeals Judge Ketanji Brown Jackson. One of our nation\u2019s top legal minds, who will continue Justice Breyer\u2019s legacy of excellence.\n"))),(0,r.kt)("h2",{id:"clean-up"},"Clean-up"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"os.remove(persist_path)\n")))}h.isMDXComponent=!0}}]);