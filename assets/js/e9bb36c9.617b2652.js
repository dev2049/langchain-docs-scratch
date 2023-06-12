"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[52327],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=o,g=p["".concat(l,".").concat(m)]||p[m]||d[m]||r;return n?a.createElement(g,i(i({ref:t},c),{},{components:n})):a.createElement(g,i({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},41667:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var a=n(87462),o=(n(67294),n(3905));const r={},i="Agents",s={unversionedId:"use_cases/personal_assistants",id:"use_cases/personal_assistants",title:"Agents",description:"Agents can be used for a variety of tasks.",source:"@site/docs/use_cases/personal_assistants.mdx",sourceDirName:"use_cases",slug:"/use_cases/personal_assistants",permalink:"/langchain-docs-scratch/docs/use_cases/personal_assistants",draft:!1,editUrl:"https://github.com/hwchase17/langchainjs/edit/main/docs/docs/use_cases/personal_assistants.mdx",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"image_agent",permalink:"/langchain-docs-scratch/docs/use_cases/multi_modal/image_agent"},next:{title:"Question Answering over Docs",permalink:"/langchain-docs-scratch/docs/use_cases/question_answering/"}},l={},u=[{value:"Create Your Own Agent",id:"create-your-own-agent",level:2},{value:"Step 1: Create Tools",id:"step-1-create-tools",level:3},{value:"(Optional) Step 2: Modify Agent",id:"optional-step-2-modify-agent",level:3},{value:"(Optional) Step 3: Modify Agent Executor",id:"optional-step-3-modify-agent-executor",level:3},{value:"Examples",id:"examples",level:2}],c={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"agents"},"Agents"),(0,o.kt)("p",null,"Agents can be used for a variety of tasks.\nAgents combine the decision making ability of a language model with tools in order to create a system\nthat can execute and implement solutions on your behalf. Before reading any more, it is highly\nrecommended that you read the documentation in the ",(0,o.kt)("inlineCode",{parentName:"p"},"agent")," module to understand the concepts associated with agents more.\nSpecifically, you should be familiar with what the ",(0,o.kt)("inlineCode",{parentName:"p"},"agent"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"tool"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"agent executor")," abstractions are before reading more."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../modules/agents.html"},"Agent Documentation")," (for interacting with the outside world)")),(0,o.kt)("h2",{id:"create-your-own-agent"},"Create Your Own Agent"),(0,o.kt)("p",null,"Once you have read that documentation, you should be prepared to create your own agent.\nWhat exactly does that involve?\nHere's how we recommend getting started with creating your own agent:"),(0,o.kt)("h3",{id:"step-1-create-tools"},"Step 1: Create Tools"),(0,o.kt)("p",null,"Agents are largely defined by the tools they can use.\nIf you have a specific task you want the agent to accomplish, you have to give it access to the right tools.\nWe have many tools natively in LangChain, so you should first look to see if any of them meet your needs.\nBut we also make it easy to define a custom tool, so if you need custom tools you should absolutely do that."),(0,o.kt)("h3",{id:"optional-step-2-modify-agent"},"(Optional) Step 2: Modify Agent"),(0,o.kt)("p",null,"The built-in LangChain agent types are designed to work well in generic situations,\nbut you may be able to improve performance by modifying the agent implementation.\nThere are several ways you could do this:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Modify the base prompt. This can be used to give the agent more context on how it should behave, etc."),(0,o.kt)("li",{parentName:"ol"},"Modify the output parser. This is necessary if the agent is having trouble parsing the language model output.")),(0,o.kt)("h3",{id:"optional-step-3-modify-agent-executor"},"(Optional) Step 3: Modify Agent Executor"),(0,o.kt)("p",null,"This step is usually not necessary, as this is pretty general logic.\nPossible reasons you would want to modify this include adding different stopping conditions, or handling errors"),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Specific examples of agents include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"agents/custom_agent_with_plugin_retrieval.html"},"AI Plugins"),": an implementation of an agent that is designed to be able to use all AI Plugins."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"agents/custom_agent_with_plugin_retrieval_using_plugnplai.html"},"Plug-and-PlAI (Plugins Database)"),": an implementation of an agent that is designed to be able to use all AI Plugins retrieved from PlugNPlAI."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"agents/wikibase_agent.html"},"Wikibase Agent"),": an implementation of an agent that is designed to interact with Wikibase."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"agents/sales_agent_with_context.html"},"Sales GPT"),": This notebook demonstrates an implementation of a Context-Aware AI Sales agent."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"agents/multi_modal_output_agent.html"},"Multi-Modal Output Agent"),": an implementation of a multi-modal output agent that can generate text and images.")))}d.isMDXComponent=!0}}]);