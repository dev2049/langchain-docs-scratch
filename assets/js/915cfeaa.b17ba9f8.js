"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[46783],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),p=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(a),g=r,m=d["".concat(c,".").concat(g)]||d[g]||u[g]||o;return a?n.createElement(m,i(i({ref:t},s),{},{components:a})):n.createElement(m,i({ref:t},s))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=g;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},76437:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const o={},i="Agent Benchmarking: Search + Calculator",l={unversionedId:"guides/evaluation/agent_benchmarking",id:"guides/evaluation/agent_benchmarking",title:"Agent Benchmarking: Search + Calculator",description:"Here we go over how to benchmark performance of an agent on tasks where it has access to a calculator and a search tool.",source:"@site/docs/guides/evaluation/agent_benchmarking.md",sourceDirName:"guides/evaluation",slug:"/guides/evaluation/agent_benchmarking",permalink:"/langchain-docs-scratch/docs/guides/evaluation/agent_benchmarking",draft:!1,editUrl:"https://github.com/hwchase17/langchainjs/edit/main/docs/docs/guides/evaluation/agent_benchmarking.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Evaluation",permalink:"/langchain-docs-scratch/docs/guides/evaluation/"},next:{title:"Agent VectorDB Question Answering Benchmarking",permalink:"/langchain-docs-scratch/docs/guides/evaluation/agent_vectordb_sota_pg"}},c={},p=[{value:"Loading the data",id:"loading-the-data",level:2},{value:"Setting up a chain",id:"setting-up-a-chain",level:2},{value:"Make a prediction",id:"make-a-prediction",level:2},{value:"Make many predictions",id:"make-many-predictions",level:2},{value:"Evaluate performance",id:"evaluate-performance",level:2}],s={toc:p},d="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"agent-benchmarking-search--calculator"},"Agent Benchmarking: Search + Calculator"),(0,r.kt)("p",null,"Here we go over how to benchmark performance of an agent on tasks where it has access to a calculator and a search tool."),(0,r.kt)("p",null,"It is highly reccomended that you do any evaluation/benchmarking with tracing enabled. See ",(0,r.kt)("a",{parentName:"p",href:"https://langchain.readthedocs.io/en/latest/tracing.html"},"here")," for an explanation of what tracing is and how to set it up."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# Comment this out if you are NOT using tracing\nimport os\nos.environ["LANGCHAIN_HANDLER"] = "langchain"\n')),(0,r.kt)("h2",{id:"loading-the-data"},"Loading the data"),(0,r.kt)("p",null,"First, let's load the data."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from langchain.evaluation.loading import load_dataset\ndataset = load_dataset("agent-search-calculator")\n')),(0,r.kt)("h2",{id:"setting-up-a-chain"},"Setting up a chain"),(0,r.kt)("p",null,"Now we need to load an agent capable of answering these questions."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from langchain.llms import OpenAI\nfrom langchain.chains import LLMMathChain\nfrom langchain.agents import initialize_agent, Tool, load_tools\nfrom langchain.agents import AgentType\n\ntools = load_tools(['serpapi', 'llm-math'], llm=OpenAI(temperature=0))\nagent = initialize_agent(tools, OpenAI(temperature=0), agent=AgentType.ZERO_SHOT_REACT_DESCRIPTION, verbose=True)\n")),(0,r.kt)("h2",{id:"make-a-prediction"},"Make a prediction"),(0,r.kt)("p",null,"First, we can make predictions one datapoint at a time. Doing it at this level of granularity allows use to explore the outputs in detail, and also is a lot cheaper than running over multiple datapoints"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"print(dataset[0]['question'])\nagent.run(dataset[0]['question'])\n")),(0,r.kt)("h2",{id:"make-many-predictions"},"Make many predictions"),(0,r.kt)("p",null,"Now we can make predictions"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"agent.run(dataset[4]['question'])\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'predictions = []\npredicted_dataset = []\nerror_dataset = []\nfor data in dataset:\n    new_data = {"input": data["question"], "answer": data["answer"]}\n    try:\n        predictions.append(agent(new_data))\n        predicted_dataset.append(new_data)\n    except Exception as e:\n        predictions.append({"output": str(e), **new_data})\n        error_dataset.append(new_data)\n')),(0,r.kt)("h2",{id:"evaluate-performance"},"Evaluate performance"),(0,r.kt)("p",null,"Now we can evaluate the predictions. The first thing we can do is look at them by eye."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"predictions[0]\n")),(0,r.kt)("p",null,"Next, we can use a language model to score them programatically"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from langchain.evaluation.qa import QAEvalChain\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'llm = OpenAI(temperature=0)\neval_chain = QAEvalChain.from_llm(llm)\ngraded_outputs = eval_chain.evaluate(dataset, predictions, question_key="question", prediction_key="output")\n')),(0,r.kt)("p",null,"We can add in the graded output to the ",(0,r.kt)("inlineCode",{parentName:"p"},"predictions")," dict and then get a count of the grades."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"for i, prediction in enumerate(predictions):\n    prediction['grade'] = graded_outputs[i]['text']\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from collections import Counter\nCounter([pred['grade'] for pred in predictions])\n")),(0,r.kt)("p",null,"We can also filter the datapoints to the incorrect examples and look at them."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"incorrect = [pred for pred in predictions if pred['grade'] == \" INCORRECT\"]\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"incorrect\n")))}u.isMDXComponent=!0}}]);