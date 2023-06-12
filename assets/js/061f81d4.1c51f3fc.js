"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[49688],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),h=a,m=p["".concat(l,".").concat(h)]||p[h]||u[h]||o;return n?r.createElement(m,i(i({ref:t},d),{},{components:n})):r.createElement(m,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},45496:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={sidebar_position:3},i="Retrievers",s={unversionedId:"modules/data_io/retrievers/index",id:"modules/data_io/retrievers/index",title:"Retrievers",description:"A retriever is an interface that returns documents given an unstructured query. It is more general than a vector store.",source:"@site/docs/modules/data_io/retrievers/index.mdx",sourceDirName:"modules/data_io/retrievers",slug:"/modules/data_io/retrievers/",permalink:"/langchain-docs-scratch/docs/modules/data_io/retrievers/",draft:!1,editUrl:"https://github.com/hwchase17/langchainjs/edit/main/docs/docs/modules/data_io/retrievers/index.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"sidebar",previous:{title:"Zilliz",permalink:"/langchain-docs-scratch/docs/modules/data_io/vectorstores/integrations/zilliz"},next:{title:"Contextual compression",permalink:"/langchain-docs-scratch/docs/modules/data_io/retrievers/how_to/contextual_compression/"}},l={},c=[{value:"Get started",id:"get-started",level:2},{value:"One Line Index Creation",id:"one-line-index-creation",level:2},{value:"Walkthrough",id:"walkthrough",level:2}],d=(p="CodeOutputBlock",function(e){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var p;const u={toc:c},h="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(h,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"retrievers"},"Retrievers"),(0,a.kt)("p",null,"A retriever is an interface that returns documents given an unstructured query. It is more general than a vector store.\nA retriever does not need to be able to store documents, only to return (or retrieve) it. Vector stores can be used\nas the backbone of a retriever, but there are other types of retrievers as well."),(0,a.kt)("h2",{id:"get-started"},"Get started"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"BaseRetriever")," class in LangChain is as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'from abc import ABC, abstractmethod\nfrom typing import List\nfrom langchain.schema import Document\n\nclass BaseRetriever(ABC):\n    @abstractmethod\n    def get_relevant_documents(self, query: str) -> List[Document]:\n        """Get texts relevant for a query.\n\n        Args:\n            query: string to find relevant texts for\n\n        Returns:\n            List of relevant documents\n        """\n')),(0,a.kt)("p",null,"It's that simple! The ",(0,a.kt)("inlineCode",{parentName:"p"},"get_relevant_documents")," method can be implemented however you see fit."),(0,a.kt)("p",null,"Of course, we also help construct what we think useful Retrievers are. The main type of Retriever that we focus on is a Vectorstore retriever. We will focus on that for the rest of this guide."),(0,a.kt)("p",null,"In order to understand what a vectorstore retriever is, it's important to understand what a Vectorstore is. So let's look at that."),(0,a.kt)("p",null,"By default, LangChain uses ",(0,a.kt)("a",{parentName:"p",href:"../../ecosystem/chroma.md"},"Chroma")," as the vectorstore to index and search embeddings. To walk through this tutorial, we'll first need to install ",(0,a.kt)("inlineCode",{parentName:"p"},"chromadb"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pip install chromadb\n")),(0,a.kt)("p",null,"This example showcases question answering over documents.\nWe have chosen this as the example for getting started because it nicely combines a lot of different elements (Text splitters, embeddings, vectorstores) and then also shows how to use them in a chain."),(0,a.kt)("p",null,"Question answering over documents consists of four steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create an index"),(0,a.kt)("li",{parentName:"ol"},"Create a Retriever from that index"),(0,a.kt)("li",{parentName:"ol"},"Create a question answering chain"),(0,a.kt)("li",{parentName:"ol"},"Ask questions!")),(0,a.kt)("p",null,"Each of the steps has multiple sub steps and potential configurations. In this notebook we will primarily focus on (1). We will start by showing the one-liner for doing so, but then break down what is actually going on."),(0,a.kt)("p",null,"First, let's import some common classes we'll use no matter what."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from langchain.chains import RetrievalQA\nfrom langchain.llms import OpenAI\n")),(0,a.kt)("p",null,"Next in the generic setup, let's specify the document loader we want to use. You can download the ",(0,a.kt)("inlineCode",{parentName:"p"},"state_of_the_union.txt")," file ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchain/blob/master/docs/modules/state_of_the_union.txt"},"here")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from langchain.document_loaders import TextLoader\nloader = TextLoader('../state_of_the_union.txt', encoding='utf8')\n")),(0,a.kt)("h2",{id:"one-line-index-creation"},"One Line Index Creation"),(0,a.kt)("p",null,"To get started as quickly as possible, we can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"VectorstoreIndexCreator"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from langchain.indexes import VectorstoreIndexCreator\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"index = VectorstoreIndexCreator().from_loaders([loader])\n")),(0,a.kt)(d,{lang:"python",mdxType:"CodeOutputBlock"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    Running Chroma using direct local API.\n    Using DuckDB in-memory for database. Data will be transient.\n"))),(0,a.kt)("p",null,"Now that the index is created, we can use it to ask questions of the data! Note that under the hood this is actually doing a few steps as well, which we will cover later in this guide."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'query = "What did the president say about Ketanji Brown Jackson"\nindex.query(query)\n')),(0,a.kt)(d,{lang:"python",mdxType:"CodeOutputBlock"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'    " The president said that Ketanji Brown Jackson is one of the nation\'s top legal minds, a former top litigator in private practice, a former federal public defender, and from a family of public school educators and police officers. He also said that she is a consensus builder and has received a broad range of support from the Fraternal Order of Police to former judges appointed by Democrats and Republicans."\n'))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'query = "What did the president say about Ketanji Brown Jackson"\nindex.query_with_sources(query)\n')),(0,a.kt)(d,{lang:"python",mdxType:"CodeOutputBlock"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    {'question': 'What did the president say about Ketanji Brown Jackson',\n     'answer': \" The president said that he nominated Circuit Court of Appeals Judge Ketanji Brown Jackson, one of the nation's top legal minds, to continue Justice Breyer's legacy of excellence, and that she has received a broad range of support from the Fraternal Order of Police to former judges appointed by Democrats and Republicans.\\n\",\n     'sources': '../state_of_the_union.txt'}\n"))),(0,a.kt)("p",null,"What is returned from the ",(0,a.kt)("inlineCode",{parentName:"p"},"VectorstoreIndexCreator")," is ",(0,a.kt)("inlineCode",{parentName:"p"},"VectorStoreIndexWrapper"),", which provides these nice ",(0,a.kt)("inlineCode",{parentName:"p"},"query")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"query_with_sources")," functionality. If we just wanted to access the vectorstore directly, we can also do that."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"index.vectorstore\n")),(0,a.kt)(d,{lang:"python",mdxType:"CodeOutputBlock"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    <langchain.vectorstores.chroma.Chroma at 0x119aa5940>\n"))),(0,a.kt)("p",null,"If we then want to access the VectorstoreRetriever, we can do that with:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"index.vectorstore.as_retriever()\n")),(0,a.kt)(d,{lang:"python",mdxType:"CodeOutputBlock"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    VectorStoreRetriever(vectorstore=<langchain.vectorstores.chroma.Chroma object at 0x119aa5940>, search_kwargs={})\n"))),(0,a.kt)("h2",{id:"walkthrough"},"Walkthrough"),(0,a.kt)("p",null,"Okay, so what's actually going on? How is this index getting created?"),(0,a.kt)("p",null,"A lot of the magic is being hid in this ",(0,a.kt)("inlineCode",{parentName:"p"},"VectorstoreIndexCreator"),". What is this doing?"),(0,a.kt)("p",null,"There are three main steps going on after the documents are loaded:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Splitting documents into chunks"),(0,a.kt)("li",{parentName:"ol"},"Creating embeddings for each document"),(0,a.kt)("li",{parentName:"ol"},"Storing documents and embeddings in a vectorstore")),(0,a.kt)("p",null,"Let's walk through this in code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"documents = loader.load()\n")),(0,a.kt)("p",null,"Next, we will split the documents into chunks."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from langchain.text_splitter import CharacterTextSplitter\ntext_splitter = CharacterTextSplitter(chunk_size=1000, chunk_overlap=0)\ntexts = text_splitter.split_documents(documents)\n")),(0,a.kt)("p",null,"We will then select which embeddings we want to use."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from langchain.embeddings import OpenAIEmbeddings\nembeddings = OpenAIEmbeddings()\n")),(0,a.kt)("p",null,"We now create the vectorstore to use as the index."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from langchain.vectorstores import Chroma\ndb = Chroma.from_documents(texts, embeddings)\n")),(0,a.kt)(d,{lang:"python",mdxType:"CodeOutputBlock"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    Running Chroma using direct local API.\n    Using DuckDB in-memory for database. Data will be transient.\n"))),(0,a.kt)("p",null,"So that's creating the index. Then, we expose this index in a retriever interface."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"retriever = db.as_retriever()\n")),(0,a.kt)("p",null,"Then, as before, we create a chain and use it to answer questions!"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'qa = RetrievalQA.from_chain_type(llm=OpenAI(), chain_type="stuff", retriever=retriever)\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'query = "What did the president say about Ketanji Brown Jackson"\nqa.run(query)\n')),(0,a.kt)(d,{lang:"python",mdxType:"CodeOutputBlock"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'    " The President said that Judge Ketanji Brown Jackson is one of the nation\'s top legal minds, a former top litigator in private practice, a former federal public defender, and from a family of public school educators and police officers. He said she is a consensus builder and has received a broad range of support from organizations such as the Fraternal Order of Police and former judges appointed by Democrats and Republicans."\n'))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"VectorstoreIndexCreator")," is just a wrapper around all this logic. It is configurable in the text splitter it uses, the embeddings it uses, and the vectorstore it uses. For example, you can configure it as below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"index_creator = VectorstoreIndexCreator(\n    vectorstore_cls=Chroma, \n    embedding=OpenAIEmbeddings(),\n    text_splitter=CharacterTextSplitter(chunk_size=1000, chunk_overlap=0)\n)\n")),(0,a.kt)("p",null,"Hopefully this highlights what is going on under the hood of ",(0,a.kt)("inlineCode",{parentName:"p"},"VectorstoreIndexCreator"),". While we think it's important to have a simple way to create indexes, we also think it's important to understand what's going on under the hood."))}m.isMDXComponent=!0}}]);