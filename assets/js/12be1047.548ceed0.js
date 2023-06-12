"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[77907],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,g=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return n?o.createElement(g,i(i({ref:t},p),{},{components:n})):o.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},16172:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>g,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=n(87462),r=(n(67294),n(3905));const a={},i="ChatGPT Plugin",s={unversionedId:"modules/data_io/retrievers/integrations/chatgpt-plugin",id:"modules/data_io/retrievers/integrations/chatgpt-plugin",title:"ChatGPT Plugin",description:"OpenAI plugins connect ChatGPT to third-party applications. These plugins enable ChatGPT to interact with APIs defined by developers, enhancing ChatGPT's capabilities and allowing it to perform a wide range of actions.",source:"@site/docs/modules/data_io/retrievers/integrations/chatgpt-plugin.md",sourceDirName:"modules/data_io/retrievers/integrations",slug:"/modules/data_io/retrievers/integrations/chatgpt-plugin",permalink:"/langchain-docs-scratch/docs/modules/data_io/retrievers/integrations/chatgpt-plugin",draft:!1,editUrl:"https://github.com/hwchase17/langchainjs/edit/main/docs/docs/modules/data_io/retrievers/integrations/chatgpt-plugin.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Azure Cognitive Search",permalink:"/langchain-docs-scratch/docs/modules/data_io/retrievers/integrations/azure_cognitive_search"},next:{title:"Cohere Reranker",permalink:"/langchain-docs-scratch/docs/modules/data_io/retrievers/integrations/cohere-reranker"}},l={},c=[{value:"Using the ChatGPT Retriever Plugin",id:"using-the-chatgpt-retriever-plugin",level:2}],p=(u="CodeOutputBlock",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var u;const d={toc:c},m="wrapper";function g(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"chatgpt-plugin"},"ChatGPT Plugin"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://platform.openai.com/docs/plugins/introduction"},"OpenAI plugins")," connect ChatGPT to third-party applications. These plugins enable ChatGPT to interact with APIs defined by developers, enhancing ChatGPT's capabilities and allowing it to perform a wide range of actions.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Plugins can allow ChatGPT to do things like:"),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"Retrieve real-time information; e.g., sports scores, stock prices, the latest news, etc."),(0,r.kt)("li",{parentName:"ul"},"Retrieve knowledge-base information; e.g., company docs, personal notes, etc."),(0,r.kt)("li",{parentName:"ul"},"Perform actions on behalf of the user; e.g., booking a flight, ordering food, etc."))),(0,r.kt)("p",null,"This notebook shows how to use the ChatGPT Retriever Plugin within LangChain."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# STEP 1: Load\n\n# Load documents using LangChain\'s DocumentLoaders\n# This is from https://langchain.readthedocs.io/en/latest/modules/document_loaders/examples/csv.html\n\nfrom langchain.document_loaders.csv_loader import CSVLoader\nloader = CSVLoader(file_path=\'../../document_loaders/examples/example_data/mlb_teams_2012.csv\')\ndata = loader.load()\n\n\n# STEP 2: Convert\n\n# Convert Document to format expected by https://github.com/openai/chatgpt-retrieval-plugin\nfrom typing import List\nfrom langchain.docstore.document import Document\nimport json\n\ndef write_json(path: str, documents: List[Document])-> None:\n    results = [{"text": doc.page_content} for doc in documents]\n    with open(path, "w") as f:\n        json.dump(results, f, indent=2)\n\nwrite_json("foo.json", data)\n\n# STEP 3: Use\n\n# Ingest this as you would any other json file in https://github.com/openai/chatgpt-retrieval-plugin/tree/main/scripts/process_json\n')),(0,r.kt)("h2",{id:"using-the-chatgpt-retriever-plugin"},"Using the ChatGPT Retriever Plugin"),(0,r.kt)("p",null,"Okay, so we've created the ChatGPT Retriever Plugin, but how do we actually use it?"),(0,r.kt)("p",null,"The below code walks through how to do that."),(0,r.kt)("p",null,"We want to use ",(0,r.kt)("inlineCode",{parentName:"p"},"ChatGPTPluginRetriever")," so we have to get the OpenAI API Key."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import os\nimport getpass\n\nos.environ['OPENAI_API_KEY'] = getpass.getpass('OpenAI API Key:')\n")),(0,r.kt)(p,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    OpenAI API Key: \xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\n"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from langchain.retrievers import ChatGPTPluginRetriever\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'retriever = ChatGPTPluginRetriever(url="http://0.0.0.0:8000", bearer_token="foo")\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'retriever.get_relevant_documents("alice\'s phone number")\n')),(0,r.kt)(p,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    [Document(page_content=\"This is Alice's phone number: 123-456-7890\", lookup_str='', metadata={'id': '456_0', 'metadata': {'source': 'email', 'source_id': '567', 'url': None, 'created_at': '1609592400.0', 'author': 'Alice', 'document_id': '456'}, 'embedding': None, 'score': 0.925571561}, lookup_index=0),\n     Document(page_content='This is a document about something', lookup_str='', metadata={'id': '123_0', 'metadata': {'source': 'file', 'source_id': 'https://example.com/doc1', 'url': 'https://example.com/doc1', 'created_at': '1609502400.0', 'author': 'Alice', 'document_id': '123'}, 'embedding': None, 'score': 0.6987589}, lookup_index=0),\n     Document(page_content='Team: Angels \"Payroll (millions)\": 154.49 \"Wins\": 89', lookup_str='', metadata={'id': '59c2c0c1-ae3f-4272-a1da-f44a723ea631_0', 'metadata': {'source': None, 'source_id': None, 'url': None, 'created_at': None, 'author': None, 'document_id': '59c2c0c1-ae3f-4272-a1da-f44a723ea631'}, 'embedding': None, 'score': 0.697888613}, lookup_index=0)]\n"))))}g.isMDXComponent=!0}}]);