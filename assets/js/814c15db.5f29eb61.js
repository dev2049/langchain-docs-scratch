"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[60233],{3905:(e,a,n)=>{n.d(a,{Zo:()=>c,kt:()=>h});var t=n(67294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function l(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=t.createContext({}),p=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},c=function(e){var a=p(e.components);return t.createElement(s.Provider,{value:a},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},m=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?t.createElement(h,i(i({ref:a},c),{},{components:n})):t.createElement(h,i({ref:a},c))}));function h(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},94654:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var t=n(87462),r=(n(67294),n(3905));const o={},i="SQL Question Answering Benchmarking: Chinook",l={unversionedId:"guides/evaluation/sql_qa_benchmarking_chinook",id:"guides/evaluation/sql_qa_benchmarking_chinook",title:"SQL Question Answering Benchmarking: Chinook",description:"Here we go over how to benchmark performance on a question answering task over a SQL database.",source:"@site/docs/guides/evaluation/sql_qa_benchmarking_chinook.md",sourceDirName:"guides/evaluation",slug:"/guides/evaluation/sql_qa_benchmarking_chinook",permalink:"/langchain-docs-scratch/docs/guides/evaluation/sql_qa_benchmarking_chinook",draft:!1,editUrl:"https://github.com/hwchase17/langchainjs/edit/main/docs/docs/guides/evaluation/sql_qa_benchmarking_chinook.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Question Answering",permalink:"/langchain-docs-scratch/docs/guides/evaluation/question_answering"},next:{title:"Guides",permalink:"/langchain-docs-scratch/docs/guides/"}},s={},p=[{value:"Loading the data",id:"loading-the-data",level:2},{value:"Setting up a chain",id:"setting-up-a-chain",level:2},{value:"Make a prediction",id:"make-a-prediction",level:2},{value:"Make many predictions",id:"make-many-predictions",level:2},{value:"Evaluate performance",id:"evaluate-performance",level:2}],c=(d="CodeOutputBlock",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var d;const u={toc:p},m="wrapper";function h(e){let{components:a,...n}=e;return(0,r.kt)(m,(0,t.Z)({},u,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"sql-question-answering-benchmarking-chinook"},"SQL Question Answering Benchmarking: Chinook"),(0,r.kt)("p",null,"Here we go over how to benchmark performance on a question answering task over a SQL database."),(0,r.kt)("p",null,"It is highly reccomended that you do any evaluation/benchmarking with tracing enabled. See ",(0,r.kt)("a",{parentName:"p",href:"https://langchain.readthedocs.io/en/latest/tracing.html"},"here")," for an explanation of what tracing is and how to set it up."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# Comment this out if you are NOT using tracing\nimport os\nos.environ["LANGCHAIN_HANDLER"] = "langchain"\n')),(0,r.kt)("h2",{id:"loading-the-data"},"Loading the data"),(0,r.kt)("p",null,"First, let's load the data."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from langchain.evaluation.loading import load_dataset\ndataset = load_dataset("sql-qa-chinook")\n')),(0,r.kt)(c,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    Downloading readme:   0%|          | 0.00/21.0 [00:00<?, ?B/s]\n\n\n    Downloading and preparing dataset json/LangChainDatasets--sql-qa-chinook to /Users/harrisonchase/.cache/huggingface/datasets/LangChainDatasets___json/LangChainDatasets--sql-qa-chinook-7528565d2d992b47/0.0.0/0f7e3662623656454fcd2b650f34e886a7db4b9104504885bd462096cc7a9f51...\n\n\n\n    Downloading data files:   0%|          | 0/1 [00:00<?, ?it/s]\n\n\n\n    Downloading data:   0%|          | 0.00/1.44k [00:00<?, ?B/s]\n\n\n\n    Extracting data files:   0%|          | 0/1 [00:00<?, ?it/s]\n\n\n\n    Generating train split: 0 examples [00:00, ? examples/s]\n\n\n    Dataset json downloaded and prepared to /Users/harrisonchase/.cache/huggingface/datasets/LangChainDatasets___json/LangChainDatasets--sql-qa-chinook-7528565d2d992b47/0.0.0/0f7e3662623656454fcd2b650f34e886a7db4b9104504885bd462096cc7a9f51. Subsequent calls will reuse this data.\n\n\n\n      0%|          | 0/1 [00:00<?, ?it/s]\n"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"dataset[0]\n")),(0,r.kt)(c,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    {'question': 'How many employees are there?', 'answer': '8'}\n"))),(0,r.kt)("h2",{id:"setting-up-a-chain"},"Setting up a chain"),(0,r.kt)("p",null,"This uses the example Chinook database.\nTo set it up follow the instructions on ",(0,r.kt)("a",{parentName:"p",href:"https://database.guide/2-sample-databases-sqlite/"},"https://database.guide/2-sample-databases-sqlite/"),", placing the ",(0,r.kt)("inlineCode",{parentName:"p"},".db")," file in a notebooks folder at the root of this repository."),(0,r.kt)("p",null,"Note that here we load a simple chain. If you want to experiment with more complex chains, or an agent, just create the ",(0,r.kt)("inlineCode",{parentName:"p"},"chain")," object in a different way."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from langchain import OpenAI, SQLDatabase, SQLDatabaseChain\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'db = SQLDatabase.from_uri("sqlite:///../../../notebooks/Chinook.db")\nllm = OpenAI(temperature=0)\n')),(0,r.kt)("p",null,"Now we can create a SQL database chain."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'chain = SQLDatabaseChain.from_llm(llm, db, input_key="question")\n')),(0,r.kt)("h2",{id:"make-a-prediction"},"Make a prediction"),(0,r.kt)("p",null,"First, we can make predictions one datapoint at a time. Doing it at this level of granularity allows use to explore the outputs in detail, and also is a lot cheaper than running over multiple datapoints"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"chain(dataset[0])\n")),(0,r.kt)(c,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    {'question': 'How many employees are there?',\n     'answer': '8',\n     'result': ' There are 8 employees.'}\n"))),(0,r.kt)("h2",{id:"make-many-predictions"},"Make many predictions"),(0,r.kt)("p",null,"Now we can make predictions. Note that we add a try-except because this chain can sometimes error (if SQL is written incorrectly, etc)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"predictions = []\npredicted_dataset = []\nerror_dataset = []\nfor data in dataset:\n    try:\n        predictions.append(chain(data))\n        predicted_dataset.append(data)\n    except:\n        error_dataset.append(data)\n")),(0,r.kt)("h2",{id:"evaluate-performance"},"Evaluate performance"),(0,r.kt)("p",null,"Now we can evaluate the predictions. We can use a language model to score them programatically"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from langchain.evaluation.qa import QAEvalChain\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'llm = OpenAI(temperature=0)\neval_chain = QAEvalChain.from_llm(llm)\ngraded_outputs = eval_chain.evaluate(predicted_dataset, predictions, question_key="question", prediction_key="result")\n')),(0,r.kt)("p",null,"We can add in the graded output to the ",(0,r.kt)("inlineCode",{parentName:"p"},"predictions")," dict and then get a count of the grades."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"for i, prediction in enumerate(predictions):\n    prediction['grade'] = graded_outputs[i]['text']\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from collections import Counter\nCounter([pred['grade'] for pred in predictions])\n")),(0,r.kt)(c,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    Counter({' CORRECT': 3, ' INCORRECT': 4})\n"))),(0,r.kt)("p",null,"We can also filter the datapoints to the incorrect examples and look at them."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"incorrect = [pred for pred in predictions if pred['grade'] == \" INCORRECT\"]\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"incorrect[0]\n")),(0,r.kt)(c,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    {'question': 'How many employees are also customers?',\n     'answer': 'None',\n     'result': ' 59 employees are also customers.',\n     'grade': ' INCORRECT'}\n"))))}h.isMDXComponent=!0}}]);