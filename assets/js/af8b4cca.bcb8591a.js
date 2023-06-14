"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[69486],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=l(n),p=r,m=h["".concat(c,".").concat(p)]||h[p]||u[p]||a;return n?o.createElement(m,i(i({ref:t},d),{},{components:n})):o.createElement(m,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[h]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},18539:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=n(87462),r=(n(67294),n(3905));const a={},i="ReAct document store",s={unversionedId:"modules/agents/agent_types/react_docstore",id:"modules/agents/agent_types/react_docstore",title:"ReAct document store",description:"This walkthrough showcases using an agent to implement the ReAct logic for working with document store specifically.",source:"@site/docs/modules/agents/agent_types/react_docstore.md",sourceDirName:"modules/agents/agent_types",slug:"/modules/agents/agent_types/react_docstore",permalink:"/langchain-docs-scratch/docs/modules/agents/agent_types/react_docstore",draft:!1,editUrl:"https://github.com/hwchase17/langchainjs/edit/main/docs/docs/modules/agents/agent_types/react_docstore.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"ReAct",permalink:"/langchain-docs-scratch/docs/modules/agents/agent_types/react"},next:{title:"Self ask with search",permalink:"/langchain-docs-scratch/docs/modules/agents/agent_types/self_ask_with_search"}},c={},l=[],d=(h="CodeOutputBlock",function(e){return console.warn("Component "+h+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var h;const u={toc:l},p="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"react-document-store"},"ReAct document store"),(0,r.kt)("p",null,"This walkthrough showcases using an agent to implement the ",(0,r.kt)("a",{parentName:"p",href:"https://react-lm.github.io/"},"ReAct")," logic for working with document store specifically."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from langchain import OpenAI, Wikipedia\nfrom langchain.agents import initialize_agent, Tool\nfrom langchain.agents import AgentType\nfrom langchain.agents.react.base import DocstoreExplorer\ndocstore=DocstoreExplorer(Wikipedia())\ntools = [\n    Tool(\n        name="Search",\n        func=docstore.search,\n        description="useful for when you need to ask with search"\n    ),\n    Tool(\n        name="Lookup",\n        func=docstore.lookup,\n        description="useful for when you need to ask with lookup"\n    )\n]\n\nllm = OpenAI(temperature=0, model_name="text-davinci-002")\nreact = initialize_agent(tools, llm, agent=AgentType.REACT_DOCSTORE, verbose=True)\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'question = "Author David Chanoff has collaborated with a U.S. Navy admiral who served as the ambassador to the United Kingdom under which President?"\nreact.run(question)\n')),(0,r.kt)(d,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    \n    \n    > Entering new AgentExecutor chain...\n    \n    Thought: I need to search David Chanoff and find the U.S. Navy admiral he collaborated with. Then I need to find which President the admiral served under.\n    \n    Action: Search[David Chanoff]\n    \n    Observation: David Chanoff is a noted author of non-fiction work. His work has typically involved collaborations with the principal protagonist of the work concerned. His collaborators have included; Augustus A. White, Joycelyn Elders, \u0110o\xe0n V\u0103n To\u1ea1i, William J. Crowe, Ariel Sharon, Kenneth Good and Felix Zandman. He has also written about a wide range of subjects including literary history, education and foreign for The Washington Post, The New Republic and The New York Times Magazine. He has published more than twelve books.\n    Thought: The U.S. Navy admiral David Chanoff collaborated with is William J. Crowe. I need to find which President he served under.\n    \n    Action: Search[William J. Crowe]\n    \n    Observation: William James Crowe Jr. (January 2, 1925 \u2013 October 18, 2007) was a United States Navy admiral and diplomat who served as the 11th chairman of the Joint Chiefs of Staff under Presidents Ronald Reagan and George H. W. Bush, and as the ambassador to the United Kingdom and Chair of the Intelligence Oversight Board under President Bill Clinton.\n    Thought: William J. Crowe served as the ambassador to the United Kingdom under President Bill Clinton, so the answer is Bill Clinton.\n    \n    Action: Finish[Bill Clinton]\n    \n    > Finished chain.\n\n\n\n\n\n    'Bill Clinton'\n"))))}m.isMDXComponent=!0}}]);