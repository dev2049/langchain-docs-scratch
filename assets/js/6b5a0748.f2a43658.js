"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[48760],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=o,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},76424:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const a={},i="Prediction Guard",l={unversionedId:"ecosystem/integrations/predictionguard",id:"ecosystem/integrations/predictionguard",title:"Prediction Guard",description:"This page covers how to use the Prediction Guard ecosystem within LangChain.",source:"@site/docs/ecosystem/integrations/predictionguard.mdx",sourceDirName:"ecosystem/integrations",slug:"/ecosystem/integrations/predictionguard",permalink:"/langchain-docs-scratch/docs/ecosystem/integrations/predictionguard",draft:!1,editUrl:"https://github.com/hwchase17/langchainjs/edit/main/docs/docs/ecosystem/integrations/predictionguard.mdx",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"PipelineAI",permalink:"/langchain-docs-scratch/docs/ecosystem/integrations/pipelineai"},next:{title:"PromptLayer",permalink:"/langchain-docs-scratch/docs/ecosystem/integrations/promptlayer"}},c={},s=[{value:"Installation and Setup",id:"installation-and-setup",level:2},{value:"LLM Wrapper",id:"llm-wrapper",level:2},{value:"Example usage",id:"example-usage",level:2}],p={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"prediction-guard"},"Prediction Guard"),(0,o.kt)("p",null,"This page covers how to use the Prediction Guard ecosystem within LangChain.\nIt is broken into two parts: installation and setup, and then references to specific Prediction Guard wrappers."),(0,o.kt)("h2",{id:"installation-and-setup"},"Installation and Setup"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Install the Python SDK with ",(0,o.kt)("inlineCode",{parentName:"li"},"pip install predictionguard")),(0,o.kt)("li",{parentName:"ul"},"Get an Prediction Guard access token (as described ",(0,o.kt)("a",{parentName:"li",href:"https://docs.predictionguard.com/"},"here"),") and set it as an environment variable (",(0,o.kt)("inlineCode",{parentName:"li"},"PREDICTIONGUARD_TOKEN"),")")),(0,o.kt)("h2",{id:"llm-wrapper"},"LLM Wrapper"),(0,o.kt)("p",null,"There exists a Prediction Guard LLM wrapper, which you can access with "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from langchain.llms import PredictionGuard\n")),(0,o.kt)("p",null,"You can provide the name of the Prediction Guard model as an argument when initializing the LLM:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'pgllm = PredictionGuard(model="MPT-7B-Instruct")\n')),(0,o.kt)("p",null,"You can also provide your access token directly as an argument:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'pgllm = PredictionGuard(model="MPT-7B-Instruct", token="<your access token>")\n')),(0,o.kt)("p",null,'Finally, you can provide an "output" argument that is used to structure/ control the output of the LLM:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'pgllm = PredictionGuard(model="MPT-7B-Instruct", output={"type": "boolean"})\n')),(0,o.kt)("h2",{id:"example-usage"},"Example usage"),(0,o.kt)("p",null,"Basic usage of the controlled or guarded LLM wrapper:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import os\n\nimport predictionguard as pg\nfrom langchain.llms import PredictionGuard\nfrom langchain import PromptTemplate, LLMChain\n\n# Your Prediction Guard API key. Get one at predictionguard.com\nos.environ["PREDICTIONGUARD_TOKEN"] = "<your Prediction Guard access token>"\n\n# Define a prompt template\ntemplate = """Respond to the following query based on the context.\n\nContext: EVERY comment, DM + email suggestion has led us to this EXCITING announcement! \ud83c\udf89 We have officially added TWO new candle subscription box options! \ud83d\udce6\nExclusive Candle Box - $80 \nMonthly Candle Box - $45 (NEW!)\nScent of The Month Box - $28 (NEW!)\nHead to stories to get ALLL the deets on each box! \ud83d\udc46 BONUS: Save 50% on your first box with code 50OFF! \ud83c\udf89\n\nQuery: {query}\n\nResult: """\nprompt = PromptTemplate(template=template, input_variables=["query"])\n\n# With "guarding" or controlling the output of the LLM. See the \n# Prediction Guard docs (https://docs.predictionguard.com) to learn how to \n# control the output with integer, float, boolean, JSON, and other types and\n# structures.\npgllm = PredictionGuard(model="MPT-7B-Instruct", \n                        output={\n                                "type": "categorical",\n                                "categories": [\n                                    "product announcement", \n                                    "apology", \n                                    "relational"\n                                    ]\n                                })\npgllm(prompt.format(query="What kind of post is this?"))\n')),(0,o.kt)("p",null,"Basic LLM Chaining with the Prediction Guard wrapper:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import os\n\nfrom langchain import PromptTemplate, LLMChain\nfrom langchain.llms import PredictionGuard\n\n# Optional, add your OpenAI API Key. This is optional, as Prediction Guard allows\n# you to access all the latest open access models (see https://docs.predictionguard.com)\nos.environ["OPENAI_API_KEY"] = "<your OpenAI api key>"\n\n# Your Prediction Guard API key. Get one at predictionguard.com\nos.environ["PREDICTIONGUARD_TOKEN"] = "<your Prediction Guard access token>"\n\npgllm = PredictionGuard(model="OpenAI-text-davinci-003")\n\ntemplate = """Question: {question}\n\nAnswer: Let\'s think step by step."""\nprompt = PromptTemplate(template=template, input_variables=["question"])\nllm_chain = LLMChain(prompt=prompt, llm=pgllm, verbose=True)\n\nquestion = "What NFL team won the Super Bowl in the year Justin Beiber was born?"\n\nllm_chain.predict(question=question)\n')))}d.isMDXComponent=!0}}]);