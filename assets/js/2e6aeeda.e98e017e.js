"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[14027],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,d=p["".concat(l,".").concat(m)]||p[m]||g[m]||a;return n?o.createElement(d,s(s({ref:t},u),{},{components:n})):o.createElement(d,s({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:r,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},40575:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var o=n(87462),r=(n(67294),n(3905));const a={},s="Custom multi-action agent",i={unversionedId:"modules/agents/how_to/custom_multi_action_agent",id:"modules/agents/how_to/custom_multi_action_agent",title:"Custom multi-action agent",description:"This notebook goes through how to create your own custom agent.",source:"@site/docs/modules/agents/how_to/custom_multi_action_agent.md",sourceDirName:"modules/agents/how_to",slug:"/modules/agents/how_to/custom_multi_action_agent",permalink:"/langchain-docs-scratch/docs/modules/agents/how_to/custom_multi_action_agent",draft:!1,editUrl:"https://github.com/hwchase17/langchainjs/edit/main/docs/docs/modules/agents/how_to/custom_multi_action_agent.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Custom MRKL agent",permalink:"/langchain-docs-scratch/docs/modules/agents/how_to/custom_mrkl_agent"},next:{title:"Handle parsing errors",permalink:"/langchain-docs-scratch/docs/modules/agents/how_to/handle_parsing_errors"}},l={},c=[],u=(p="CodeOutputBlock",function(e){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var p;const g={toc:c},m="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,o.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"custom-multi-action-agent"},"Custom multi-action agent"),(0,r.kt)("p",null,"This notebook goes through how to create your own custom agent."),(0,r.kt)("p",null,"An agent consists of two parts:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"- Tools: The tools the agent has available to use.\n- The agent class itself: this decides which action to take.\n    \n    \n")),(0,r.kt)("p",null,"In this notebook we walk through how to create a custom agent that predicts/takes multiple steps at a time."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from langchain.agents import Tool, AgentExecutor, BaseMultiActionAgent\nfrom langchain import OpenAI, SerpAPIWrapper\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'def random_word(query: str) -> str:\n    print("\\nNow I\'m doing this!")\n    return "foo"\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'search = SerpAPIWrapper()\ntools = [\n    Tool(\n        name = "Search",\n        func=search.run,\n        description="useful for when you need to answer questions about current events"\n    ),\n    Tool(\n        name = "RandomWord",\n        func=random_word,\n        description="call this to get a random word."\n    \n    )\n]\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from typing import List, Tuple, Any, Union\nfrom langchain.schema import AgentAction, AgentFinish\n\nclass FakeAgent(BaseMultiActionAgent):\n    """Fake Custom Agent."""\n    \n    @property\n    def input_keys(self):\n        return ["input"]\n    \n    def plan(\n        self, intermediate_steps: List[Tuple[AgentAction, str]], **kwargs: Any\n    ) -> Union[List[AgentAction], AgentFinish]:\n        """Given input, decided what to do.\n\n        Args:\n            intermediate_steps: Steps the LLM has taken to date,\n                along with observations\n            **kwargs: User inputs.\n\n        Returns:\n            Action specifying what tool to use.\n        """\n        if len(intermediate_steps) == 0:\n            return [\n                AgentAction(tool="Search", tool_input=kwargs["input"], log=""),\n                AgentAction(tool="RandomWord", tool_input=kwargs["input"], log=""),\n            ]\n        else:\n            return AgentFinish(return_values={"output": "bar"}, log="")\n\n    async def aplan(\n        self, intermediate_steps: List[Tuple[AgentAction, str]], **kwargs: Any\n    ) -> Union[List[AgentAction], AgentFinish]:\n        """Given input, decided what to do.\n\n        Args:\n            intermediate_steps: Steps the LLM has taken to date,\n                along with observations\n            **kwargs: User inputs.\n\n        Returns:\n            Action specifying what tool to use.\n        """\n        if len(intermediate_steps) == 0:\n            return [\n                AgentAction(tool="Search", tool_input=kwargs["input"], log=""),\n                AgentAction(tool="RandomWord", tool_input=kwargs["input"], log=""),\n            ]\n        else:\n            return AgentFinish(return_values={"output": "bar"}, log="")\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"agent = FakeAgent()\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"agent_executor = AgentExecutor.from_agent_and_tools(agent=agent, tools=tools, verbose=True)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'agent_executor.run("How many people live in canada as of 2023?")\n')),(0,r.kt)(u,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    \n    \n    > Entering new AgentExecutor chain...\n    The current population of Canada is 38,669,152 as of Monday, April 24, 2023, based on Worldometer elaboration of the latest United Nations data.\n    Now I'm doing this!\n    foo\n    \n    > Finished chain.\n\n\n\n\n\n    'bar'\n"))))}d.isMDXComponent=!0}}]);