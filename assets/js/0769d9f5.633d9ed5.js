"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[31474],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,g=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},96943:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>g,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={},i="Jira",s={unversionedId:"modules/agents/toolkits/jira",id:"modules/agents/toolkits/jira",title:"Jira",description:"This notebook goes over how to use the Jira tool.",source:"@site/docs/modules/agents/toolkits/jira.md",sourceDirName:"modules/agents/toolkits",slug:"/modules/agents/toolkits/jira",permalink:"/langchain-docs-scratch/docs/modules/agents/toolkits/jira",draft:!1,editUrl:"https://github.com/hwchase17/langchainjs/edit/main/docs/docs/modules/agents/toolkits/jira.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Gmail Toolkit",permalink:"/langchain-docs-scratch/docs/modules/agents/toolkits/gmail"},next:{title:"JSON Agent",permalink:"/langchain-docs-scratch/docs/modules/agents/toolkits/json"}},l={},c=[],p=(m="CodeOutputBlock",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var m;const u={toc:c},d="wrapper";function g(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"jira"},"Jira"),(0,o.kt)("p",null,"This notebook goes over how to use the Jira tool.\nThe Jira tool allows agents to interact with a given Jira instance, performing actions such as searching for issues and creating issues, the tool wraps the atlassian-python-api library, for more see: ",(0,o.kt)("a",{parentName:"p",href:"https://atlassian-python-api.readthedocs.io/jira.html"},"https://atlassian-python-api.readthedocs.io/jira.html")),(0,o.kt)("p",null,"To use this tool, you must first set as environment variables:\nJIRA_API_TOKEN\nJIRA_USERNAME\nJIRA_INSTANCE_URL"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"%pip install atlassian-python-api\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"import os\nfrom langchain.agents import AgentType\nfrom langchain.agents import initialize_agent\nfrom langchain.agents.agent_toolkits.jira.toolkit import JiraToolkit\nfrom langchain.llms import OpenAI\nfrom langchain.utilities.jira import JiraAPIWrapper\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'os.environ["JIRA_API_TOKEN"] = "abc"\nos.environ["JIRA_USERNAME"] = "123"\nos.environ["JIRA_INSTANCE_URL"] = "https://jira.atlassian.com"\nos.environ["OPENAI_API_KEY"] = "xyz"\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"llm = OpenAI(temperature=0)\njira = JiraAPIWrapper()\ntoolkit = JiraToolkit.from_jira_api_wrapper(jira)\nagent = initialize_agent(\n    toolkit.get_tools(),\n    llm,\n    agent=AgentType.ZERO_SHOT_REACT_DESCRIPTION,\n    verbose=True\n)\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'agent.run("make a new issue in project PW to remind me to make more fried rice")\n')),(0,o.kt)(p,{lang:"python",mdxType:"CodeOutputBlock"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'    \n    \n    > Entering new AgentExecutor chain...\n     I need to create an issue in project PW\n    Action: Create Issue\n    Action Input: {"summary": "Make more fried rice", "description": "Reminder to make more fried rice", "issuetype": {"name": "Task"}, "priority": {"name": "Low"}, "project": {"key": "PW"}}\n    Observation: None\n    Thought: I now know the final answer\n    Final Answer: A new issue has been created in project PW with the summary "Make more fried rice" and description "Reminder to make more fried rice".\n    \n    > Finished chain.\n\n\n\n\n\n    \'A new issue has been created in project PW with the summary "Make more fried rice" and description "Reminder to make more fried rice".\'\n'))))}g.isMDXComponent=!0}}]);