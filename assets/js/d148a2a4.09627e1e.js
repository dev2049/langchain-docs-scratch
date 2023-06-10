"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8008],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(t),p=o,m=u["".concat(l,".").concat(p)]||u[p]||h[p]||r;return t?a.createElement(m,i(i({ref:n},d),{},{components:t})):a.createElement(m,i({ref:n},d))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=p;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},49462:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=t(87462),o=(t(67294),t(3905));const r={},i="ReAct",s={unversionedId:"modules/agents/agent_types/react",id:"modules/agents/agent_types/react",title:"ReAct",description:"This notebook showcases using an agent to implement the ReAct logic.",source:"@site/docs/modules/agents/agent_types/react.md",sourceDirName:"modules/agents/agent_types",slug:"/modules/agents/agent_types/react",permalink:"/langchain-docs-scratch/docs/modules/agents/agent_types/react",draft:!1,editUrl:"https://github.com/hwchase17/langchainjs/edit/main/docs/docs/modules/agents/agent_types/react.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Plan and execute",permalink:"/langchain-docs-scratch/docs/modules/agents/agent_types/plan_and_execute"},next:{title:"Self Ask With Search",permalink:"/langchain-docs-scratch/docs/modules/agents/agent_types/self_ask_with_search"}},l={},c=[],d=(u="CodeOutputBlock",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var u;const h={toc:c},p="wrapper";function m(e){let{components:n,...t}=e;return(0,o.kt)(p,(0,a.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"react"},"ReAct"),(0,o.kt)("p",null,"This notebook showcases using an agent to implement the ReAct logic."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from langchain import OpenAI, Wikipedia\nfrom langchain.agents import initialize_agent, Tool\nfrom langchain.agents import AgentType\nfrom langchain.agents.react.base import DocstoreExplorer\ndocstore=DocstoreExplorer(Wikipedia())\ntools = [\n    Tool(\n        name="Search",\n        func=docstore.search,\n        description="useful for when you need to ask with search"\n    ),\n    Tool(\n        name="Lookup",\n        func=docstore.lookup,\n        description="useful for when you need to ask with lookup"\n    )\n]\n\nllm = OpenAI(temperature=0, model_name="text-davinci-002")\nreact = initialize_agent(tools, llm, agent=AgentType.REACT_DOCSTORE, verbose=True)\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'question = "Author David Chanoff has collaborated with a U.S. Navy admiral who served as the ambassador to the United Kingdom under which President?"\nreact.run(question)\n')),(0,o.kt)(d,{lang:"python",mdxType:"CodeOutputBlock"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    \n    \n    > Entering new AgentExecutor chain...\n    \n    Thought: I need to search David Chanoff and find the U.S. Navy admiral he collaborated with. Then I need to find which President the admiral served under.\n    \n    Action: Search[David Chanoff]\n    \n    Observation: David Chanoff is a noted author of non-fiction work. His work has typically involved collaborations with the principal protagonist of the work concerned. His collaborators have included; Augustus A. White, Joycelyn Elders, \u0110o\xe0n V\u0103n To\u1ea1i, William J. Crowe, Ariel Sharon, Kenneth Good and Felix Zandman. He has also written about a wide range of subjects including literary history, education and foreign for The Washington Post, The New Republic and The New York Times Magazine. He has published more than twelve books.\n    Thought: The U.S. Navy admiral David Chanoff collaborated with is William J. Crowe. I need to find which President he served under.\n    \n    Action: Search[William J. Crowe]\n    \n    Observation: William James Crowe Jr. (January 2, 1925 \u2013 October 18, 2007) was a United States Navy admiral and diplomat who served as the 11th chairman of the Joint Chiefs of Staff under Presidents Ronald Reagan and George H. W. Bush, and as the ambassador to the United Kingdom and Chair of the Intelligence Oversight Board under President Bill Clinton.\n    Thought: William J. Crowe served as the ambassador to the United Kingdom under President Bill Clinton, so the answer is Bill Clinton.\n    \n    Action: Finish[Bill Clinton]\n    \n    > Finished chain.\n\n\n\n\n\n    'Bill Clinton'\n"))))}m.isMDXComponent=!0}}]);