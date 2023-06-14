"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[53356],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,m=u["".concat(s,".").concat(d)]||u[d]||g[d]||o;return n?r.createElement(m,l(l({ref:t},p),{},{components:n})):r.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},54716:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>y,frontMatter:()=>p,metadata:()=>g,toc:()=>m});var r=n(87462),a=(n(67294),n(3905));const o=(l="CodeOutputBlock",function(e){return console.warn("Component "+l+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var l;const i={toc:[]},s="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from langchain.agents import load_tools\nfrom langchain.agents import initialize_agent\nfrom langchain.agents import AgentType\nfrom langchain.llms import OpenAI\n")),(0,a.kt)("p",null,"First, let's load the language model we're going to use to control the agent."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"llm = OpenAI(temperature=0)\n")),(0,a.kt)("p",null,"Next, let's load some tools to use. Note that the ",(0,a.kt)("inlineCode",{parentName:"p"},"llm-math")," tool uses an LLM, so we need to pass that in."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'tools = load_tools(["serpapi", "llm-math"], llm=llm)\n')),(0,a.kt)("p",null,"Finally, let's initialize an agent with the tools, the language model, and the type of agent we want to use."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"agent = initialize_agent(tools, llm, agent=AgentType.ZERO_SHOT_REACT_DESCRIPTION, verbose=True)\n")),(0,a.kt)("p",null,"Now let's test it out!"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'agent.run("Who is Leo DiCaprio\'s girlfriend? What is her current age raised to the 0.43 power?")\n')),(0,a.kt)(o,{lang:"python",mdxType:"CodeOutputBlock"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'    \n    \n    > Entering new AgentExecutor chain...\n     I need to find out who Leo DiCaprio\'s girlfriend is and then calculate her age raised to the 0.43 power.\n    Action: Search\n    Action Input: "Leo DiCaprio girlfriend"\n    Observation: Camila Morrone\n    Thought: I need to find out Camila Morrone\'s age\n    Action: Search\n    Action Input: "Camila Morrone age"\n    Observation: 25 years\n    Thought: I need to calculate 25 raised to the 0.43 power\n    Action: Calculator\n    Action Input: 25^0.43\n    Observation: Answer: 3.991298452658078\n    \n    Thought: I now know the final answer\n    Final Answer: Camila Morrone is Leo DiCaprio\'s girlfriend and her current age raised to the 0.43 power is 3.991298452658078.\n    \n    > Finished chain.\n\n\n\n\n\n    "Camila Morrone is Leo DiCaprio\'s girlfriend and her current age raised to the 0.43 power is 3.991298452658078."\n'))))}c.isMDXComponent=!0;const p={},u="ReAct",g={unversionedId:"modules/agents/agent_types/react",id:"modules/agents/agent_types/react",title:"ReAct",description:"This walkthrough showcases using an agent to implement the ReAct logic.",source:"@site/docs/modules/agents/agent_types/react.mdx",sourceDirName:"modules/agents/agent_types",slug:"/modules/agents/agent_types/react",permalink:"/langchain-docs-scratch/docs/modules/agents/agent_types/react",draft:!1,editUrl:"https://github.com/hwchase17/langchainjs/edit/main/docs/docs/modules/agents/agent_types/react.mdx",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Plan and execute",permalink:"/langchain-docs-scratch/docs/modules/agents/agent_types/plan_and_execute"},next:{title:"ReAct document store",permalink:"/langchain-docs-scratch/docs/modules/agents/agent_types/react_docstore"}},d={},m=[],h={toc:m},f="wrapper";function y(e){let{components:t,...n}=e;return(0,a.kt)(f,(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"react"},"ReAct"),(0,a.kt)("p",null,"This walkthrough showcases using an agent to implement the ",(0,a.kt)("a",{parentName:"p",href:"https://react-lm.github.io/"},"ReAct")," logic."),(0,a.kt)(c,{mdxType:"Example"}))}y.isMDXComponent=!0}}]);