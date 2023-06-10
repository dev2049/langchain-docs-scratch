"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[29419],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>h});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(t),g=a,h=c["".concat(l,".").concat(g)]||c[g]||d[g]||o;return t?r.createElement(h,i(i({ref:n},u),{},{components:t})):r.createElement(h,i({ref:n},u))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=g;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},75614:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=t(87462),a=(t(67294),t(3905));const o={},i="Handle parsing errors",s={unversionedId:"modules/agents/how_to/handle_parsing_errors",id:"modules/agents/how_to/handle_parsing_errors",title:"Handle parsing errors",description:"Occasionally the LLM cannot determine what step to take because it outputs format in incorrect form to be handled by the output parser. In this case, by default the agent errors. But you can easily control this functionality with handleparsingerrors! Let's explore how.",source:"@site/docs/modules/agents/how_to/handle_parsing_errors.md",sourceDirName:"modules/agents/how_to",slug:"/modules/agents/how_to/handle_parsing_errors",permalink:"/langchain-docs-scratch/docs/modules/agents/how_to/handle_parsing_errors",draft:!1,editUrl:"https://github.com/hwchase17/langchainjs/edit/main/docs/docs/modules/agents/how_to/handle_parsing_errors.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Custom multi-action agent",permalink:"/langchain-docs-scratch/docs/modules/agents/how_to/custom_multi_action_agent"},next:{title:"Access intermediate steps",permalink:"/langchain-docs-scratch/docs/modules/agents/how_to/intermediate_steps"}},l={},p=[{value:"Setup",id:"setup",level:2},{value:"Error",id:"error",level:2},{value:"Default error handling",id:"default-error-handling",level:2},{value:"Custom Error Message",id:"custom-error-message",level:2},{value:"Custom Error Function",id:"custom-error-function",level:2}],u=(c="CodeOutputBlock",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var c;const d={toc:p},g="wrapper";function h(e){let{components:n,...t}=e;return(0,a.kt)(g,(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"handle-parsing-errors"},"Handle parsing errors"),(0,a.kt)("p",null,"Occasionally the LLM cannot determine what step to take because it outputs format in incorrect form to be handled by the output parser. In this case, by default the agent errors. But you can easily control this functionality with ",(0,a.kt)("inlineCode",{parentName:"p"},"handle_parsing_errors"),"! Let's explore how."),(0,a.kt)("h2",{id:"setup"},"Setup"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from langchain import OpenAI, LLMMathChain, SerpAPIWrapper, SQLDatabase, SQLDatabaseChain\nfrom langchain.agents import initialize_agent, Tool\nfrom langchain.agents import AgentType\nfrom langchain.chat_models import ChatOpenAI\nfrom langchain.agents.types import AGENT_TO_CLASS\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'search = SerpAPIWrapper()\ntools = [\n    Tool(\n        name = "Search",\n        func=search.run,\n        description="useful for when you need to answer questions about current events. You should ask targeted questions"\n    ),\n]\n')),(0,a.kt)("h2",{id:"error"},"Error"),(0,a.kt)("p",null,"In this scenario, the agent will error (because it fails to output an Action string)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"mrkl = initialize_agent(\n    tools, \n    ChatOpenAI(temperature=0), \n    agent=AgentType.CHAT_ZERO_SHOT_REACT_DESCRIPTION, \n    verbose=True,\n)\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'mrkl.run("Who is Leo DiCaprio\'s girlfriend? No need to add Action")\n')),(0,a.kt)(u,{lang:"python",mdxType:"CodeOutputBlock"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'    \n    \n    > Entering new AgentExecutor chain...\n\n\n\n    ---------------------------------------------------------------------------\n\n    IndexError                                Traceback (most recent call last)\n\n    File ~/workplace/langchain/langchain/agents/chat/output_parser.py:21, in ChatOutputParser.parse(self, text)\n         20 try:\n    ---\x3e 21     action = text.split("```")[1]\n         22     response = json.loads(action.strip())\n\n\n    IndexError: list index out of range\n\n    \n    During handling of the above exception, another exception occurred:\n\n\n    OutputParserException                     Traceback (most recent call last)\n\n    Cell In[4], line 1\n    ----\x3e 1 mrkl.run("Who is Leo DiCaprio\'s girlfriend? No need to add Action")\n\n\n    File ~/workplace/langchain/langchain/chains/base.py:236, in Chain.run(self, callbacks, *args, **kwargs)\n        234     if len(args) != 1:\n        235         raise ValueError("`run` supports only one positional argument.")\n    --\x3e 236     return self(args[0], callbacks=callbacks)[self.output_keys[0]]\n        238 if kwargs and not args:\n        239     return self(kwargs, callbacks=callbacks)[self.output_keys[0]]\n\n\n    File ~/workplace/langchain/langchain/chains/base.py:140, in Chain.__call__(self, inputs, return_only_outputs, callbacks)\n        138 except (KeyboardInterrupt, Exception) as e:\n        139     run_manager.on_chain_error(e)\n    --\x3e 140     raise e\n        141 run_manager.on_chain_end(outputs)\n        142 return self.prep_outputs(inputs, outputs, return_only_outputs)\n\n\n    File ~/workplace/langchain/langchain/chains/base.py:134, in Chain.__call__(self, inputs, return_only_outputs, callbacks)\n        128 run_manager = callback_manager.on_chain_start(\n        129     {"name": self.__class__.__name__},\n        130     inputs,\n        131 )\n        132 try:\n        133     outputs = (\n    --\x3e 134         self._call(inputs, run_manager=run_manager)\n        135         if new_arg_supported\n        136         else self._call(inputs)\n        137     )\n        138 except (KeyboardInterrupt, Exception) as e:\n        139     run_manager.on_chain_error(e)\n\n\n    File ~/workplace/langchain/langchain/agents/agent.py:947, in AgentExecutor._call(self, inputs, run_manager)\n        945 # We now enter the agent loop (until it returns something).\n        946 while self._should_continue(iterations, time_elapsed):\n    --\x3e 947     next_step_output = self._take_next_step(\n        948         name_to_tool_map,\n        949         color_mapping,\n        950         inputs,\n        951         intermediate_steps,\n        952         run_manager=run_manager,\n        953     )\n        954     if isinstance(next_step_output, AgentFinish):\n        955         return self._return(\n        956             next_step_output, intermediate_steps, run_manager=run_manager\n        957         )\n\n\n    File ~/workplace/langchain/langchain/agents/agent.py:773, in AgentExecutor._take_next_step(self, name_to_tool_map, color_mapping, inputs, intermediate_steps, run_manager)\n        771     raise_error = False\n        772 if raise_error:\n    --\x3e 773     raise e\n        774 text = str(e)\n        775 if isinstance(self.handle_parsing_errors, bool):\n\n\n    File ~/workplace/langchain/langchain/agents/agent.py:762, in AgentExecutor._take_next_step(self, name_to_tool_map, color_mapping, inputs, intermediate_steps, run_manager)\n        756 """Take a single step in the thought-action-observation loop.\n        757 \n        758 Override this to take control of how the agent makes and acts on choices.\n        759 """\n        760 try:\n        761     # Call the LLM to see what to do.\n    --\x3e 762     output = self.agent.plan(\n        763         intermediate_steps,\n        764         callbacks=run_manager.get_child() if run_manager else None,\n        765         **inputs,\n        766     )\n        767 except OutputParserException as e:\n        768     if isinstance(self.handle_parsing_errors, bool):\n\n\n    File ~/workplace/langchain/langchain/agents/agent.py:444, in Agent.plan(self, intermediate_steps, callbacks, **kwargs)\n        442 full_inputs = self.get_full_inputs(intermediate_steps, **kwargs)\n        443 full_output = self.llm_chain.predict(callbacks=callbacks, **full_inputs)\n    --\x3e 444 return self.output_parser.parse(full_output)\n\n\n    File ~/workplace/langchain/langchain/agents/chat/output_parser.py:26, in ChatOutputParser.parse(self, text)\n         23     return AgentAction(response["action"], response["action_input"], text)\n         25 except Exception:\n    ---\x3e 26     raise OutputParserException(f"Could not parse LLM output: {text}")\n\n\n    OutputParserException: Could not parse LLM output: I\'m sorry, but I cannot provide an answer without an Action. Please provide a valid Action in the format specified above.\n'))),(0,a.kt)("h2",{id:"default-error-handling"},"Default error handling"),(0,a.kt)("p",null,"Handle errors with ",(0,a.kt)("inlineCode",{parentName:"p"},"Invalid or incomplete response")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"mrkl = initialize_agent(\n    tools, \n    ChatOpenAI(temperature=0), \n    agent=AgentType.CHAT_ZERO_SHOT_REACT_DESCRIPTION, \n    verbose=True,\n    handle_parsing_errors=True\n)\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'mrkl.run("Who is Leo DiCaprio\'s girlfriend? No need to add Action")\n')),(0,a.kt)(u,{lang:"python",mdxType:"CodeOutputBlock"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'    \n    \n    > Entering new AgentExecutor chain...\n    \n    Observation: Invalid or incomplete response\n    Thought:\n    Observation: Invalid or incomplete response\n    Thought:Search for Leo DiCaprio\'s current girlfriend\n    Action:\n    ```\n    {\n      "action": "Search",\n      "action_input": "Leo DiCaprio current girlfriend"\n    }\n    ```\n    \n    Observation: Just Jared on Instagram: \u201cLeonardo DiCaprio & girlfriend Camila Morrone couple up for a lunch date!\n    Thought:Camila Morrone is currently Leo DiCaprio\'s girlfriend\n    Final Answer: Camila Morrone\n    \n    > Finished chain.\n\n\n\n\n\n    \'Camila Morrone\'\n'))),(0,a.kt)("h2",{id:"custom-error-message"},"Custom Error Message"),(0,a.kt)("p",null,"You can easily customize the message to use when there are parsing errors"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'mrkl = initialize_agent(\n    tools, \n    ChatOpenAI(temperature=0), \n    agent=AgentType.CHAT_ZERO_SHOT_REACT_DESCRIPTION, \n    verbose=True,\n    handle_parsing_errors="Check your output and make sure it conforms!"\n)\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'mrkl.run("Who is Leo DiCaprio\'s girlfriend? No need to add Action")\n')),(0,a.kt)(u,{lang:"python",mdxType:"CodeOutputBlock"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'    \n    \n    > Entering new AgentExecutor chain...\n    \n    Observation: Could not parse LLM output: I\'m sorry, but I canno\n    Thought:I need to use the Search tool to find the answer to the question.\n    Action:\n    ```\n    {\n      "action": "Search",\n      "action_input": "Who is Leo DiCaprio\'s girlfriend?"\n    }\n    ```\n    \n    Observation: DiCaprio broke up with girlfriend Camila Morrone, 25, in the summer of 2022, after dating for four years. He\'s since been linked to another famous supermodel \u2013 Gigi Hadid. The power couple were first supposedly an item in September after being spotted getting cozy during a party at New York Fashion Week.\n    Thought:The answer to the question is that Leo DiCaprio\'s current girlfriend is Gigi Hadid. \n    Final Answer: Gigi Hadid.\n    \n    > Finished chain.\n\n\n\n\n\n    \'Gigi Hadid.\'\n'))),(0,a.kt)("h2",{id:"custom-error-function"},"Custom Error Function"),(0,a.kt)("p",null,"You can also customize the error to be a function that takes the error in and outputs a string."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def _handle_error(error) -> str:\n    return str(error)[:50]\n\nmrkl = initialize_agent(\n    tools, \n    ChatOpenAI(temperature=0), \n    agent=AgentType.CHAT_ZERO_SHOT_REACT_DESCRIPTION, \n    verbose=True,\n    handle_parsing_errors=_handle_error\n)\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'mrkl.run("Who is Leo DiCaprio\'s girlfriend? No need to add Action")\n')),(0,a.kt)(u,{lang:"python",mdxType:"CodeOutputBlock"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'    \n    \n    > Entering new AgentExecutor chain...\n    \n    Observation: Could not parse LLM output: I\'m sorry, but I canno\n    Thought:I need to use the Search tool to find the answer to the question.\n    Action:\n    ```\n    {\n      "action": "Search",\n      "action_input": "Who is Leo DiCaprio\'s girlfriend?"\n    }\n    ```\n    \n    Observation: DiCaprio broke up with girlfriend Camila Morrone, 25, in the summer of 2022, after dating for four years. He\'s since been linked to another famous supermodel \u2013 Gigi Hadid. The power couple were first supposedly an item in September after being spotted getting cozy during a party at New York Fashion Week.\n    Thought:The current girlfriend of Leonardo DiCaprio is Gigi Hadid. \n    Final Answer: Gigi Hadid.\n    \n    > Finished chain.\n\n\n\n\n\n    \'Gigi Hadid.\'\n'))))}h.isMDXComponent=!0}}]);