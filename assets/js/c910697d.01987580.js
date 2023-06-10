"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[99025],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=o,h=p["".concat(c,".").concat(m)]||p[m]||u[m]||r;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},24166:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=n(87462),o=(n(67294),n(3905));const r={},i="MyScale",s={unversionedId:"modules/data_io/vectorstores/integrations/myscale",id:"modules/data_io/vectorstores/integrations/myscale",title:"MyScale",description:"MyScale is a cloud-based database optimized for AI applications and solutions, built on the open-source ClickHouse.",source:"@site/docs/modules/data_io/vectorstores/integrations/myscale.md",sourceDirName:"modules/data_io/vectorstores/integrations",slug:"/modules/data_io/vectorstores/integrations/myscale",permalink:"/langchain-docs-scratch/docs/modules/data_io/vectorstores/integrations/myscale",draft:!1,editUrl:"https://github.com/hwchase17/langchainjs/edit/main/docs/docs/modules/data_io/vectorstores/integrations/myscale.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"MongoDB Atlas Vector Search",permalink:"/langchain-docs-scratch/docs/modules/data_io/vectorstores/integrations/mongodb_atlas_vector_search"},next:{title:"OpenSearch",permalink:"/langchain-docs-scratch/docs/modules/data_io/vectorstores/integrations/opensearch"}},c={},l=[{value:"Setting up envrionments",id:"setting-up-envrionments",level:2},{value:"Get connection info and data schema",id:"get-connection-info-and-data-schema",level:2},{value:"Filtering",id:"filtering",level:2},{value:"Deleting your data",id:"deleting-your-data",level:2}],d=(p="CodeOutputBlock",function(e){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var p;const u={toc:l},m="wrapper";function h(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"myscale"},"MyScale"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://docs.myscale.com/en/overview/"},"MyScale")," is a cloud-based database optimized for AI applications and solutions, built on the open-source ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ClickHouse/ClickHouse"},"ClickHouse"),". ")),(0,o.kt)("p",null,"This notebook shows how to use functionality related to the ",(0,o.kt)("inlineCode",{parentName:"p"},"MyScale")," vector database."),(0,o.kt)("h2",{id:"setting-up-envrionments"},"Setting up envrionments"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pip install clickhouse-connect\n")),(0,o.kt)("p",null,"We want to use OpenAIEmbeddings so we have to get the OpenAI API Key."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"import os\nimport getpass\n\nos.environ['OPENAI_API_KEY'] = getpass.getpass('OpenAI API Key:')\n")),(0,o.kt)("p",null,"There are two ways to set up parameters for myscale index."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Environment Variables"),(0,o.kt)("p",{parentName:"li"},"Before you run the app, please set the environment variable with ",(0,o.kt)("inlineCode",{parentName:"p"},"export"),":\n",(0,o.kt)("inlineCode",{parentName:"p"},"export MYSCALE_URL='<your-endpoints-url>' MYSCALE_PORT=<your-endpoints-port> MYSCALE_USERNAME=<your-username> MYSCALE_PASSWORD=<your-password> ...")),(0,o.kt)("p",{parentName:"li"},"You can easily find your account, password and other info on our SaaS. For details please refer to ",(0,o.kt)("a",{parentName:"p",href:"https://docs.myscale.com/en/cluster-management/"},"this document")),(0,o.kt)("p",{parentName:"li"},"Every attributes under ",(0,o.kt)("inlineCode",{parentName:"p"},"MyScaleSettings")," can be set with prefix ",(0,o.kt)("inlineCode",{parentName:"p"},"MYSCALE_")," and is case insensitive.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create ",(0,o.kt)("inlineCode",{parentName:"p"},"MyScaleSettings")," object with parameters"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'```python\nfrom langchain.vectorstores import MyScale, MyScaleSettings\nconfig = MyScaleSetting(host="<your-backend-url>", port=8443, ...)\nindex = MyScale(embedding_function, config)\nindex.add_documents(...)\n```\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from langchain.embeddings.openai import OpenAIEmbeddings\nfrom langchain.text_splitter import CharacterTextSplitter\nfrom langchain.vectorstores import MyScale\nfrom langchain.document_loaders import TextLoader\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from langchain.document_loaders import TextLoader\nloader = TextLoader('../../../state_of_the_union.txt')\ndocuments = loader.load()\ntext_splitter = CharacterTextSplitter(chunk_size=1000, chunk_overlap=0)\ndocs = text_splitter.split_documents(documents)\n\nembeddings = OpenAIEmbeddings()\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"for d in docs:\n    d.metadata = {'some': 'metadata'}\ndocsearch = MyScale.from_documents(docs, embeddings)\n\nquery = \"What did the president say about Ketanji Brown Jackson\"\ndocs = docsearch.similarity_search(query)\n")),(0,o.kt)(d,{lang:"python",mdxType:"CodeOutputBlock"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    Inserting data...: 100%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588| 42/42 [00:18<00:00,  2.21it/s]\n"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"print(docs[0].page_content)\n")),(0,o.kt)(d,{lang:"python",mdxType:"CodeOutputBlock"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    As Frances Haugen, who is here with us tonight, has shown, we must hold social media platforms accountable for the national experiment they\u2019re conducting on our children for profit. \n    \n    It\u2019s time to strengthen privacy protections, ban targeted advertising to children, demand tech companies stop collecting personal data on our children. \n    \n    And let\u2019s get all Americans the mental health services they need. More people they can turn to for help, and full parity between physical and mental health care. \n    \n    Third, support our veterans. \n    \n    Veterans are the best of us. \n    \n    I\u2019ve always believed that we have a sacred obligation to equip all those we send to war and care for them and their families when they come home. \n    \n    My administration is providing assistance with job training and housing, and now helping lower-income veterans get VA care debt-free.  \n    \n    Our troops in Iraq and Afghanistan faced many dangers.\n"))),(0,o.kt)("h2",{id:"get-connection-info-and-data-schema"},"Get connection info and data schema"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"print(str(docsearch))\n")),(0,o.kt)("h2",{id:"filtering"},"Filtering"),(0,o.kt)("p",null,"You can have direct access to myscale SQL where statement. You can write ",(0,o.kt)("inlineCode",{parentName:"p"},"WHERE")," clause following standard SQL."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"NOTE"),": Please be aware of SQL injection, this interface must not be directly called by end-user."),(0,o.kt)("p",null,"If you custimized your ",(0,o.kt)("inlineCode",{parentName:"p"},"column_map")," under your setting, you search with filter like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from langchain.vectorstores import MyScale, MyScaleSettings\nfrom langchain.document_loaders import TextLoader\n\nloader = TextLoader('../../../state_of_the_union.txt')\ndocuments = loader.load()\ntext_splitter = CharacterTextSplitter(chunk_size=1000, chunk_overlap=0)\ndocs = text_splitter.split_documents(documents)\n\nembeddings = OpenAIEmbeddings()\n\nfor i, d in enumerate(docs):\n    d.metadata = {'doc_id': i}\n\ndocsearch = MyScale.from_documents(docs, embeddings)\n")),(0,o.kt)(d,{lang:"python",mdxType:"CodeOutputBlock"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    Inserting data...: 100%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588| 42/42 [00:15<00:00,  2.69it/s]\n"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"meta = docsearch.metadata_column\noutput = docsearch.similarity_search_with_relevance_scores('What did the president say about Ketanji Brown Jackson?', \n                                                           k=4, where_str=f\"{meta}.doc_id<10\")\nfor d, dist in output:\n    print(dist, d.metadata, d.page_content[:20] + '...')\n")),(0,o.kt)(d,{lang:"python",mdxType:"CodeOutputBlock"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    0.252379834651947 {'doc_id': 6, 'some': ''} And I\u2019m taking robus...\n    0.25022566318511963 {'doc_id': 1, 'some': ''} Groups of citizens b...\n    0.2469480037689209 {'doc_id': 8, 'some': ''} And so many families...\n    0.2428302764892578 {'doc_id': 0, 'some': 'metadata'} As Frances Haugen, w...\n"))),(0,o.kt)("h2",{id:"deleting-your-data"},"Deleting your data"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"docsearch.drop()\n")))}h.isMDXComponent=!0}}]);