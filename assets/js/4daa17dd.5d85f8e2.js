"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[36198],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(a),m=r,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return a?n.createElement(h,i(i({ref:t},p),{},{components:a})):n.createElement(h,i({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},25153:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const o={},i="Benchmarking Template",l={unversionedId:"guides/evaluation/benchmarking_template",id:"guides/evaluation/benchmarking_template",title:"Benchmarking Template",description:"This is an example notebook that can be used to create a benchmarking notebook for a task of your choice. Evaluation is really hard, and so we greatly welcome any contributions that can make it easier for people to experiment",source:"@site/docs/guides/evaluation/benchmarking_template.md",sourceDirName:"guides/evaluation",slug:"/guides/evaluation/benchmarking_template",permalink:"/langchain-docs-scratch/docs/guides/evaluation/benchmarking_template",draft:!1,editUrl:"https://github.com/hwchase17/langchainjs/edit/main/docs/docs/guides/evaluation/benchmarking_template.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Agent VectorDB Question Answering Benchmarking",permalink:"/langchain-docs-scratch/docs/guides/evaluation/agent_vectordb_sota_pg"},next:{title:"Data Augmented Question Answering",permalink:"/langchain-docs-scratch/docs/guides/evaluation/data_augmented_question_answering"}},c={},s=[{value:"Loading the data",id:"loading-the-data",level:2},{value:"Setting up a chain",id:"setting-up-a-chain",level:2},{value:"Make a prediction",id:"make-a-prediction",level:2},{value:"Make many predictions",id:"make-many-predictions",level:2},{value:"Evaluate performance",id:"evaluate-performance",level:2}],p={toc:s},u="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"benchmarking-template"},"Benchmarking Template"),(0,r.kt)("p",null,"This is an example notebook that can be used to create a benchmarking notebook for a task of your choice. Evaluation is really hard, and so we greatly welcome any contributions that can make it easier for people to experiment"),(0,r.kt)("p",null,"It is highly reccomended that you do any evaluation/benchmarking with tracing enabled. See ",(0,r.kt)("a",{parentName:"p",href:"https://langchain.readthedocs.io/en/latest/tracing.html"},"here")," for an explanation of what tracing is and how to set it up."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# Comment this out if you are NOT using tracing\nimport os\nos.environ["LANGCHAIN_HANDLER"] = "langchain"\n')),(0,r.kt)("h2",{id:"loading-the-data"},"Loading the data"),(0,r.kt)("p",null,"First, let's load the data."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# This notebook should so how to load the dataset from LangChainDatasets on Hugging Face\n\n# Please upload your dataset to https://huggingface.co/LangChainDatasets\n\n# The value passed into `load_dataset` should NOT have the `LangChainDatasets/` prefix\nfrom langchain.evaluation.loading import load_dataset\ndataset = load_dataset("TODO")\n')),(0,r.kt)("h2",{id:"setting-up-a-chain"},"Setting up a chain"),(0,r.kt)("p",null,"This next section should have an example of setting up a chain that can be run on this dataset."),(0,r.kt)("h2",{id:"make-a-prediction"},"Make a prediction"),(0,r.kt)("p",null,"First, we can make predictions one datapoint at a time. Doing it at this level of granularity allows use to explore the outputs in detail, and also is a lot cheaper than running over multiple datapoints"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# Example of running the chain on a single datapoint (`dataset[0]`) goes here\n")),(0,r.kt)("h2",{id:"make-many-predictions"},"Make many predictions"),(0,r.kt)("p",null,"Now we can make predictions."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# Example of running the chain on many predictions goes here\n\n# Sometimes its as simple as `chain.apply(dataset)`\n\n# Othertimes you may want to write a for loop to catch errors\n")),(0,r.kt)("h2",{id:"evaluate-performance"},"Evaluate performance"),(0,r.kt)("p",null,"Any guide to evaluating performance in a more systematic manner goes here."))}d.isMDXComponent=!0}}]);