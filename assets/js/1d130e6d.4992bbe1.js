"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[40927],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,m=u["".concat(l,".").concat(d)]||u[d]||h[d]||o;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},64526:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>f,frontMatter:()=>p,metadata:()=>h,toc:()=>m});var a=n(87462),r=(n(67294),n(3905));const o=(i="CodeOutputBlock",function(e){return console.warn("Component "+i+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var i;const s={toc:[{value:"Pass in chat history",id:"pass-in-chat-history",level:2},{value:"Using a different model for condensing the question",id:"using-a-different-model-for-condensing-the-question",level:2},{value:"Return Source Documents",id:"return-source-documents",level:2},{value:"ConversationalRetrievalChain with <code>search_distance</code>",id:"conversationalretrievalchain-with-search_distance",level:2},{value:"ConversationalRetrievalChain with <code>map_reduce</code>",id:"conversationalretrievalchain-with-map_reduce",level:2},{value:"ConversationalRetrievalChain with Question Answering with sources",id:"conversationalretrievalchain-with-question-answering-with-sources",level:2},{value:"ConversationalRetrievalChain with streaming to <code>stdout</code>",id:"conversationalretrievalchain-with-streaming-to-stdout",level:2},{value:"get_chat_history Function",id:"get_chat_history-function",level:2}]},l="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(l,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from langchain.embeddings.openai import OpenAIEmbeddings\nfrom langchain.vectorstores import Chroma\nfrom langchain.text_splitter import CharacterTextSplitter\nfrom langchain.llms import OpenAI\nfrom langchain.chains import ConversationalRetrievalChain\n")),(0,r.kt)("p",null,"Load in documents. You can replace this with a loader for whatever type of data you want"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from langchain.document_loaders import TextLoader\nloader = TextLoader("../../state_of_the_union.txt")\ndocuments = loader.load()\n')),(0,r.kt)("p",null,"If you had multiple loaders that you wanted to combine, you do something like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# loaders = [....]\n# docs = []\n# for loader in loaders:\n#     docs.extend(loader.load())\n")),(0,r.kt)("p",null,"We now split the documents, create embeddings for them, and put them in a vectorstore. This allows us to do semantic search over them."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"text_splitter = CharacterTextSplitter(chunk_size=1000, chunk_overlap=0)\ndocuments = text_splitter.split_documents(documents)\n\nembeddings = OpenAIEmbeddings()\nvectorstore = Chroma.from_documents(documents, embeddings)\n")),(0,r.kt)(o,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    Using embedded DuckDB without persistence: data will be transient\n"))),(0,r.kt)("p",null,"We can now create a memory object, which is neccessary to track the inputs/outputs and hold a conversation."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from langchain.memory import ConversationBufferMemory\nmemory = ConversationBufferMemory(memory_key="chat_history", return_messages=True)\n')),(0,r.kt)("p",null,"We now initialize the ",(0,r.kt)("inlineCode",{parentName:"p"},"ConversationalRetrievalChain")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"qa = ConversationalRetrievalChain.from_llm(OpenAI(temperature=0), vectorstore.as_retriever(), memory=memory)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'query = "What did the president say about Ketanji Brown Jackson"\nresult = qa({"question": query})\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'result["answer"]\n')),(0,r.kt)(o,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'    " The president said that Ketanji Brown Jackson is one of the nation\'s top legal minds, a former top litigator in private practice, a former federal public defender, and from a family of public school educators and police officers. He also said that she is a consensus builder and has received a broad range of support from the Fraternal Order of Police to former judges appointed by Democrats and Republicans."\n'))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'query = "Did he mention who she suceeded"\nresult = qa({"question": query})\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"result['answer']\n")),(0,r.kt)(o,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    ' Ketanji Brown Jackson succeeded Justice Stephen Breyer on the United States Supreme Court.'\n"))),(0,r.kt)("h2",{id:"pass-in-chat-history"},"Pass in chat history"),(0,r.kt)("p",null,"In the above example, we used a Memory object to track chat history. We can also just pass it in explicitly. In order to do this, we need to initialize a chain without any memory object."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"qa = ConversationalRetrievalChain.from_llm(OpenAI(temperature=0), vectorstore.as_retriever())\n")),(0,r.kt)("p",null,"Here's an example of asking a question with no chat history"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'chat_history = []\nquery = "What did the president say about Ketanji Brown Jackson"\nresult = qa({"question": query, "chat_history": chat_history})\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'result["answer"]\n')),(0,r.kt)(o,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'    " The president said that Ketanji Brown Jackson is one of the nation\'s top legal minds, a former top litigator in private practice, a former federal public defender, and from a family of public school educators and police officers. He also said that she is a consensus builder and has received a broad range of support from the Fraternal Order of Police to former judges appointed by Democrats and Republicans."\n'))),(0,r.kt)("p",null,"Here's an example of asking a question with some chat history"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'chat_history = [(query, result["answer"])]\nquery = "Did he mention who she suceeded"\nresult = qa({"question": query, "chat_history": chat_history})\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"result['answer']\n")),(0,r.kt)(o,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    ' Ketanji Brown Jackson succeeded Justice Stephen Breyer on the United States Supreme Court.'\n"))),(0,r.kt)("h2",{id:"using-a-different-model-for-condensing-the-question"},"Using a different model for condensing the question"),(0,r.kt)("p",null,"This chain has two steps. First, it condenses the current question and the chat history into a standalone question. This is neccessary to create a standanlone vector to use for retrieval. After that, it does retrieval and then answers the question using retrieval augmented generation with a separate model. Part of the power of the declarative nature of LangChain is that you can easily use a separate language model for each call. This can be useful to use a cheaper and faster model for the simpler task of condensing the question, and then a more expensive model for answering the question. Here is an example of doing so."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from langchain.chat_models import ChatOpenAI\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"qa = ConversationalRetrievalChain.from_llm(\n    ChatOpenAI(temperature=0, model=\"gpt-4\"),\n    vectorstore.as_retriever(),\n    condense_question_llm = ChatOpenAI(temperature=0, model='gpt-3.5-turbo'),\n)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'chat_history = []\nquery = "What did the president say about Ketanji Brown Jackson"\nresult = qa({"question": query, "chat_history": chat_history})\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'chat_history = [(query, result["answer"])]\nquery = "Did he mention who she suceeded"\nresult = qa({"question": query, "chat_history": chat_history})\n')),(0,r.kt)("h2",{id:"return-source-documents"},"Return Source Documents"),(0,r.kt)("p",null,"You can also easily return source documents from the ConversationalRetrievalChain. This is useful for when you want to inspect what documents were returned."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"qa = ConversationalRetrievalChain.from_llm(OpenAI(temperature=0), vectorstore.as_retriever(), return_source_documents=True)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'chat_history = []\nquery = "What did the president say about Ketanji Brown Jackson"\nresult = qa({"question": query, "chat_history": chat_history})\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"result['source_documents'][0]\n")),(0,r.kt)(o,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    Document(page_content='Tonight. I call on the Senate to: Pass the Freedom to Vote Act. Pass the John Lewis Voting Rights Act. And while you\u2019re at it, pass the Disclose Act so Americans can know who is funding our elections. \\n\\nTonight, I\u2019d like to honor someone who has dedicated his life to serve this country: Justice Stephen Breyer\u2014an Army veteran, Constitutional scholar, and retiring Justice of the United States Supreme Court. Justice Breyer, thank you for your service. \\n\\nOne of the most serious constitutional responsibilities a President has is nominating someone to serve on the United States Supreme Court. \\n\\nAnd I did that 4 days ago, when I nominated Circuit Court of Appeals Judge Ketanji Brown Jackson. One of our nation\u2019s top legal minds, who will continue Justice Breyer\u2019s legacy of excellence.', metadata={'source': '../../state_of_the_union.txt'})\n"))),(0,r.kt)("h2",{id:"conversationalretrievalchain-with-search_distance"},"ConversationalRetrievalChain with ",(0,r.kt)("inlineCode",{parentName:"h2"},"search_distance")),(0,r.kt)("p",null,"If you are using a vector store that supports filtering by search distance, you can add a threshold value parameter."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'vectordbkwargs = {"search_distance": 0.9}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'qa = ConversationalRetrievalChain.from_llm(OpenAI(temperature=0), vectorstore.as_retriever(), return_source_documents=True)\nchat_history = []\nquery = "What did the president say about Ketanji Brown Jackson"\nresult = qa({"question": query, "chat_history": chat_history, "vectordbkwargs": vectordbkwargs})\n')),(0,r.kt)("h2",{id:"conversationalretrievalchain-with-map_reduce"},"ConversationalRetrievalChain with ",(0,r.kt)("inlineCode",{parentName:"h2"},"map_reduce")),(0,r.kt)("p",null,"We can also use different types of combine document chains with the ConversationalRetrievalChain chain."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from langchain.chains import LLMChain\nfrom langchain.chains.question_answering import load_qa_chain\nfrom langchain.chains.conversational_retrieval.prompts import CONDENSE_QUESTION_PROMPT\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'llm = OpenAI(temperature=0)\nquestion_generator = LLMChain(llm=llm, prompt=CONDENSE_QUESTION_PROMPT)\ndoc_chain = load_qa_chain(llm, chain_type="map_reduce")\n\nchain = ConversationalRetrievalChain(\n    retriever=vectorstore.as_retriever(),\n    question_generator=question_generator,\n    combine_docs_chain=doc_chain,\n)\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'chat_history = []\nquery = "What did the president say about Ketanji Brown Jackson"\nresult = chain({"question": query, "chat_history": chat_history})\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"result['answer']\n")),(0,r.kt)(o,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'    " The president said that Ketanji Brown Jackson is one of the nation\'s top legal minds, a former top litigator in private practice, a former federal public defender, from a family of public school educators and police officers, a consensus builder, and has received a broad range of support from the Fraternal Order of Police to former judges appointed by Democrats and Republicans."\n'))),(0,r.kt)("h2",{id:"conversationalretrievalchain-with-question-answering-with-sources"},"ConversationalRetrievalChain with Question Answering with sources"),(0,r.kt)("p",null,"You can also use this chain with the question answering with sources chain."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from langchain.chains.qa_with_sources import load_qa_with_sources_chain\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'llm = OpenAI(temperature=0)\nquestion_generator = LLMChain(llm=llm, prompt=CONDENSE_QUESTION_PROMPT)\ndoc_chain = load_qa_with_sources_chain(llm, chain_type="map_reduce")\n\nchain = ConversationalRetrievalChain(\n    retriever=vectorstore.as_retriever(),\n    question_generator=question_generator,\n    combine_docs_chain=doc_chain,\n)\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'chat_history = []\nquery = "What did the president say about Ketanji Brown Jackson"\nresult = chain({"question": query, "chat_history": chat_history})\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"result['answer']\n")),(0,r.kt)(o,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'    " The president said that Ketanji Brown Jackson is one of the nation\'s top legal minds, a former top litigator in private practice, a former federal public defender, from a family of public school educators and police officers, a consensus builder, and has received a broad range of support from the Fraternal Order of Police to former judges appointed by Democrats and Republicans. \\nSOURCES: ../../state_of_the_union.txt"\n'))),(0,r.kt)("h2",{id:"conversationalretrievalchain-with-streaming-to-stdout"},"ConversationalRetrievalChain with streaming to ",(0,r.kt)("inlineCode",{parentName:"h2"},"stdout")),(0,r.kt)("p",null,"Output from the chain will be streamed to ",(0,r.kt)("inlineCode",{parentName:"p"},"stdout")," token by token in this example."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from langchain.chains.llm import LLMChain\nfrom langchain.callbacks.streaming_stdout import StreamingStdOutCallbackHandler\nfrom langchain.chains.conversational_retrieval.prompts import CONDENSE_QUESTION_PROMPT, QA_PROMPT\nfrom langchain.chains.question_answering import load_qa_chain\n\n# Construct a ConversationalRetrievalChain with a streaming llm for combine docs\n# and a separate, non-streaming llm for question generation\nllm = OpenAI(temperature=0)\nstreaming_llm = OpenAI(streaming=True, callbacks=[StreamingStdOutCallbackHandler()], temperature=0)\n\nquestion_generator = LLMChain(llm=llm, prompt=CONDENSE_QUESTION_PROMPT)\ndoc_chain = load_qa_chain(streaming_llm, chain_type="stuff", prompt=QA_PROMPT)\n\nqa = ConversationalRetrievalChain(\n    retriever=vectorstore.as_retriever(), combine_docs_chain=doc_chain, question_generator=question_generator)\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'chat_history = []\nquery = "What did the president say about Ketanji Brown Jackson"\nresult = qa({"question": query, "chat_history": chat_history})\n')),(0,r.kt)(o,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"     The president said that Ketanji Brown Jackson is one of the nation's top legal minds, a former top litigator in private practice, a former federal public defender, and from a family of public school educators and police officers. He also said that she is a consensus builder and has received a broad range of support from the Fraternal Order of Police to former judges appointed by Democrats and Republicans.\n"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'chat_history = [(query, result["answer"])]\nquery = "Did he mention who she suceeded"\nresult = qa({"question": query, "chat_history": chat_history})\n')),(0,r.kt)(o,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"     Ketanji Brown Jackson succeeded Justice Stephen Breyer on the United States Supreme Court.\n"))),(0,r.kt)("h2",{id:"get_chat_history-function"},"get_chat_history Function"),(0,r.kt)("p",null,"You can also specify a ",(0,r.kt)("inlineCode",{parentName:"p"},"get_chat_history")," function, which can be used to format the chat_history string."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'def get_chat_history(inputs) -> str:\n    res = []\n    for human, ai in inputs:\n        res.append(f"Human:{human}\\nAI:{ai}")\n    return "\\n".join(res)\nqa = ConversationalRetrievalChain.from_llm(OpenAI(temperature=0), vectorstore.as_retriever(), get_chat_history=get_chat_history)\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'chat_history = []\nquery = "What did the president say about Ketanji Brown Jackson"\nresult = qa({"question": query, "chat_history": chat_history})\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"result['answer']\n")),(0,r.kt)(o,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'    " The president said that Ketanji Brown Jackson is one of the nation\'s top legal minds, a former top litigator in private practice, a former federal public defender, and from a family of public school educators and police officers. He also said that she is a consensus builder and has received a broad range of support from the Fraternal Order of Police to former judges appointed by Democrats and Republicans."\n'))))}c.isMDXComponent=!0;const p={},u="Conversational Retrieval QA",h={unversionedId:"modules/chains/popular/chat_vector_db",id:"modules/chains/popular/chat_vector_db",title:"Conversational Retrieval QA",description:"The ConversationalRetrievalQA chain builds on RetrievalQAChain to provide a chat history component.",source:"@site/docs/modules/chains/popular/chat_vector_db.mdx",sourceDirName:"modules/chains/popular",slug:"/modules/chains/popular/chat_vector_db",permalink:"/langchain-docs-scratch/docs/modules/chains/popular/chat_vector_db",draft:!1,editUrl:"https://github.com/hwchase17/langchainjs/edit/main/docs/docs/modules/chains/popular/chat_vector_db.mdx",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Analyze Document",permalink:"/langchain-docs-scratch/docs/modules/chains/popular/analyze_document"},next:{title:"Graph QA",permalink:"/langchain-docs-scratch/docs/modules/chains/popular/graph_qa"}},d={},m=[],y={toc:m},g="wrapper";function f(e){let{components:t,...n}=e;return(0,r.kt)(g,(0,a.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"conversational-retrieval-qa"},"Conversational Retrieval QA"),(0,r.kt)("p",null,"The ConversationalRetrievalQA chain builds on RetrievalQAChain to provide a chat history component."),(0,r.kt)("p",null,"It first combines the chat history (either explicitly passed in or retrieved from the provided memory) and the question into a standalone question, then looks up relevant documents from the retriever, and finally passes those documents and the question to a question answering chain to return a response."),(0,r.kt)("p",null,"To create one, you will need a retriever. In the below example, we will create one from a vector store, which can be created from embeddings."),(0,r.kt)(c,{mdxType:"Example"}))}f.isMDXComponent=!0}}]);