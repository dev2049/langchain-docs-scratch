"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[83111],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(t),h=r,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||o;return t?a.createElement(m,s(s({ref:n},c),{},{components:t})):a.createElement(m,s({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=h;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[u]="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=t[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},77041:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=t(87462),r=(t(67294),t(3905));const o={},s="Pandas Dataframe Agent",i={unversionedId:"modules/agents/toolkits/pandas",id:"modules/agents/toolkits/pandas",title:"Pandas Dataframe Agent",description:"This notebook shows how to use agents to interact with a pandas dataframe. It is mostly optimized for question answering.",source:"@site/docs/modules/agents/toolkits/pandas.md",sourceDirName:"modules/agents/toolkits",slug:"/modules/agents/toolkits/pandas",permalink:"/langchain-docs-scratch/docs/modules/agents/toolkits/pandas",draft:!1,editUrl:"https://github.com/hwchase17/langchainjs/edit/main/docs/docs/modules/agents/toolkits/pandas.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Natural Language APIs",permalink:"/langchain-docs-scratch/docs/modules/agents/toolkits/openapi_nla"},next:{title:"PlayWright Browser Toolkit",permalink:"/langchain-docs-scratch/docs/modules/agents/toolkits/playwright"}},l={},p=[{value:"Multi DataFrame Example",id:"multi-dataframe-example",level:3}],c=(u="CodeOutputBlock",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var u;const d={toc:p},h="wrapper";function m(e){let{components:n,...t}=e;return(0,r.kt)(h,(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"pandas-dataframe-agent"},"Pandas Dataframe Agent"),(0,r.kt)("p",null,"This notebook shows how to use agents to interact with a pandas dataframe. It is mostly optimized for question answering."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NOTE: this agent calls the Python agent under the hood, which executes LLM generated Python code - this can be bad if the LLM generated Python code is harmful. Use cautiously.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from langchain.agents import create_pandas_dataframe_agent\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from langchain.llms import OpenAI\nimport pandas as pd\n\ndf = pd.read_csv('titanic.csv')\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"agent = create_pandas_dataframe_agent(OpenAI(temperature=0), df, verbose=True)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'agent.run("how many rows are there?")\n')),(0,r.kt)(c,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    \n    \n    > Entering new AgentExecutor chain...\n    Thought: I need to count the number of rows\n    Action: python_repl_ast\n    Action Input: df.shape[0]\n    Observation: 891\n    Thought: I now know the final answer\n    Final Answer: There are 891 rows.\n    \n    > Finished chain.\n\n\n\n\n\n    'There are 891 rows.'\n"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'agent.run("how many people have more than 3 siblings")\n')),(0,r.kt)(c,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    \n    \n    > Entering new AgentExecutor chain...\n    Thought: I need to count the number of people with more than 3 siblings\n    Action: python_repl_ast\n    Action Input: df[df['SibSp'] > 3].shape[0]\n    Observation: 30\n    Thought: I now know the final answer\n    Final Answer: 30 people have more than 3 siblings.\n    \n    > Finished chain.\n\n\n\n\n\n    '30 people have more than 3 siblings.'\n"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'agent.run("whats the square root of the average age?")\n')),(0,r.kt)(c,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    \n    \n    > Entering new AgentExecutor chain...\n    Thought: I need to calculate the average age first\n    Action: python_repl_ast\n    Action Input: df['Age'].mean()\n    Observation: 29.69911764705882\n    Thought: I now need to calculate the square root of the average age\n    Action: python_repl_ast\n    Action Input: math.sqrt(df['Age'].mean())\n    Observation: NameError(\"name 'math' is not defined\")\n    Thought: I need to import the math library\n    Action: python_repl_ast\n    Action Input: import math\n    Observation: \n    Thought: I now need to calculate the square root of the average age\n    Action: python_repl_ast\n    Action Input: math.sqrt(df['Age'].mean())\n    Observation: 5.449689683556195\n    Thought: I now know the final answer\n    Final Answer: The square root of the average age is 5.449689683556195.\n    \n    > Finished chain.\n\n\n\n\n\n    'The square root of the average age is 5.449689683556195.'\n"))),(0,r.kt)("h3",{id:"multi-dataframe-example"},"Multi DataFrame Example"),(0,r.kt)("p",null,"This next part shows how the agent can interact with multiple dataframes passed in as a list."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'df1 = df.copy()\ndf1["Age"] = df1["Age"].fillna(df1["Age"].mean())\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'agent = create_pandas_dataframe_agent(OpenAI(temperature=0), [df, df1], verbose=True)\nagent.run("how many rows in the age column are different?")\n')),(0,r.kt)(c,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    \n    \n    > Entering new AgentExecutor chain...\n    Thought: I need to compare the age columns in both dataframes\n    Action: python_repl_ast\n    Action Input: len(df1[df1['Age'] != df2['Age']])\n    Observation: 177\n    Thought: I now know the final answer\n    Final Answer: 177 rows in the age column are different.\n    \n    > Finished chain.\n\n\n\n\n\n    '177 rows in the age column are different.'\n"))))}m.isMDXComponent=!0}}]);