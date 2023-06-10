"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[83950],{3905:(n,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>d});var t=a(67294);function r(n,e,a){return e in n?Object.defineProperty(n,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[e]=a,n}function o(n,e){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.push.apply(a,t)}return a}function l(n){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){r(n,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(a,e))}))}return n}function s(n,e){if(null==n)return{};var a,t,r=function(n,e){if(null==n)return{};var a,t,r={},o=Object.keys(n);for(t=0;t<o.length;t++)a=o[t],e.indexOf(a)>=0||(r[a]=n[a]);return r}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(t=0;t<o.length;t++)a=o[t],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(n,a)&&(r[a]=n[a])}return r}var i=t.createContext({}),p=function(n){var e=t.useContext(i),a=e;return n&&(a="function"==typeof n?n(e):l(l({},e),n)),a},c=function(n){var e=p(n.components);return t.createElement(i.Provider,{value:e},n.children)},u="mdxType",_={inlineCode:"code",wrapper:function(n){var e=n.children;return t.createElement(t.Fragment,{},e)}},g=t.forwardRef((function(n,e){var a=n.components,r=n.mdxType,o=n.originalType,i=n.parentName,c=s(n,["components","mdxType","originalType","parentName"]),u=p(a),g=r,d=u["".concat(i,".").concat(g)]||u[g]||_[g]||o;return a?t.createElement(d,l(l({ref:e},c),{},{components:a})):t.createElement(d,l({ref:e},c))}));function d(n,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var o=a.length,l=new Array(o);l[0]=g;var s={};for(var i in e)hasOwnProperty.call(e,i)&&(s[i]=e[i]);s.originalType=n,s[u]="string"==typeof n?n:r,l[1]=s;for(var p=2;p<o;p++)l[p]=a[p];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}g.displayName="MDXCreateElement"},45303:(n,e,a)=>{a.r(e),a.d(e,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var t=a(87462),r=(a(67294),a(3905));const o={},l="Human-in-the-loop Tool Validation",s={unversionedId:"modules/agents/tools/how_to/human_approval",id:"modules/agents/tools/how_to/human_approval",title:"Human-in-the-loop Tool Validation",description:"This walkthrough demonstrates how to add Human validation to any Tool. We'll do this using the HumanApprovalCallbackhandler.",source:"@site/docs/modules/agents/tools/how_to/human_approval.md",sourceDirName:"modules/agents/tools/how_to",slug:"/modules/agents/tools/how_to/human_approval",permalink:"/langchain-docs-scratch/docs/modules/agents/tools/how_to/human_approval",draft:!1,editUrl:"https://github.com/hwchase17/langchainjs/edit/main/docs/docs/modules/agents/tools/how_to/human_approval.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Defining Custom Tools",permalink:"/langchain-docs-scratch/docs/modules/agents/tools/how_to/custom_tools"},next:{title:"Multi-Input Tools",permalink:"/langchain-docs-scratch/docs/modules/agents/tools/how_to/multi_input_tool"}},i={},p=[{value:"Adding Human Approval",id:"adding-human-approval",level:2},{value:"Configuring Human Approval",id:"configuring-human-approval",level:2}],c=(u="CodeOutputBlock",function(n){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",n)});var u;const _={toc:p},g="wrapper";function d(n){let{components:e,...a}=n;return(0,r.kt)(g,(0,t.Z)({},_,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"human-in-the-loop-tool-validation"},"Human-in-the-loop Tool Validation"),(0,r.kt)("p",null,"This walkthrough demonstrates how to add Human validation to any Tool. We'll do this using the ",(0,r.kt)("inlineCode",{parentName:"p"},"HumanApprovalCallbackhandler"),"."),(0,r.kt)("p",null,"Let's suppose we need to make use of the ShellTool. Adding this tool to an automated flow poses obvious risks. Let's see how we could enforce manual human approval of inputs going into this tool."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note"),": We generally recommend against using the ShellTool. There's a lot of ways to misuse it, and it's not required for most use cases. We employ it here only for demonstration purposes."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from langchain.callbacks import HumanApprovalCallbackHandler\nfrom langchain.tools import ShellTool\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"tool = ShellTool()\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"print(tool.run('echo Hello World!'))\n")),(0,r.kt)(c,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    Hello World!\n    \n"))),(0,r.kt)("h2",{id:"adding-human-approval"},"Adding Human Approval"),(0,r.kt)("p",null,"Adding the default HumanApprovalCallbackHandler to the tool will make it so that a user has to manually approve every input to the tool before the command is actually executed."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"tool = ShellTool(callbacks=[HumanApprovalCallbackHandler()])\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'print(tool.run("ls /usr"))\n')),(0,r.kt)(c,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    Do you approve of the following input? Anything except 'Y'/'Yes' (case-insensitive) will be treated as a no.\n    \n    ls /usr\n    yes\n    X11\n    X11R6\n    bin\n    lib\n    libexec\n    local\n    sbin\n    share\n    standalone\n    \n"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'print(tool.run("ls /private"))\n')),(0,r.kt)(c,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'    Do you approve of the following input? Anything except \'Y\'/\'Yes\' (case-insensitive) will be treated as a no.\n    \n    ls /private\n    no\n\n\n\n    ---------------------------------------------------------------------------\n\n    HumanRejectedException                    Traceback (most recent call last)\n\n    Cell In[17], line 1\n    ----\x3e 1 print(tool.run("ls /private"))\n\n\n    File ~/langchain/langchain/tools/base.py:257, in BaseTool.run(self, tool_input, verbose, start_color, color, callbacks, **kwargs)\n        255 # TODO: maybe also pass through run_manager is _run supports kwargs\n        256 new_arg_supported = signature(self._run).parameters.get("run_manager")\n    --\x3e 257 run_manager = callback_manager.on_tool_start(\n        258     {"name": self.name, "description": self.description},\n        259     tool_input if isinstance(tool_input, str) else str(tool_input),\n        260     color=start_color,\n        261     **kwargs,\n        262 )\n        263 try:\n        264     tool_args, tool_kwargs = self._to_args_and_kwargs(parsed_input)\n\n\n    File ~/langchain/langchain/callbacks/manager.py:672, in CallbackManager.on_tool_start(self, serialized, input_str, run_id, parent_run_id, **kwargs)\n        669 if run_id is None:\n        670     run_id = uuid4()\n    --\x3e 672 _handle_event(\n        673     self.handlers,\n        674     "on_tool_start",\n        675     "ignore_agent",\n        676     serialized,\n        677     input_str,\n        678     run_id=run_id,\n        679     parent_run_id=self.parent_run_id,\n        680     **kwargs,\n        681 )\n        683 return CallbackManagerForToolRun(\n        684     run_id, self.handlers, self.inheritable_handlers, self.parent_run_id\n        685 )\n\n\n    File ~/langchain/langchain/callbacks/manager.py:157, in _handle_event(handlers, event_name, ignore_condition_name, *args, **kwargs)\n        155 except Exception as e:\n        156     if handler.raise_error:\n    --\x3e 157         raise e\n        158     logging.warning(f"Error in {event_name} callback: {e}")\n\n\n    File ~/langchain/langchain/callbacks/manager.py:139, in _handle_event(handlers, event_name, ignore_condition_name, *args, **kwargs)\n        135 try:\n        136     if ignore_condition_name is None or not getattr(\n        137         handler, ignore_condition_name\n        138     ):\n    --\x3e 139         getattr(handler, event_name)(*args, **kwargs)\n        140 except NotImplementedError as e:\n        141     if event_name == "on_chat_model_start":\n\n\n    File ~/langchain/langchain/callbacks/human.py:48, in HumanApprovalCallbackHandler.on_tool_start(self, serialized, input_str, run_id, parent_run_id, **kwargs)\n         38 def on_tool_start(\n         39     self,\n         40     serialized: Dict[str, Any],\n       (...)\n         45     **kwargs: Any,\n         46 ) -> Any:\n         47     if self._should_check(serialized) and not self._approve(input_str):\n    ---\x3e 48         raise HumanRejectedException(\n         49             f"Inputs {input_str} to tool {serialized} were rejected."\n         50         )\n\n\n    HumanRejectedException: Inputs ls /private to tool {\'name\': \'terminal\', \'description\': \'Run shell commands on this MacOS machine.\'} were rejected.\n'))),(0,r.kt)("h2",{id:"configuring-human-approval"},"Configuring Human Approval"),(0,r.kt)("p",null,"Let's suppose we have an agent that takes in multiple tools, and we want it to only trigger human approval requests on certain tools and certain inputs. We can configure out callback handler to do just this."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from langchain.agents import load_tools\nfrom langchain.agents import initialize_agent\nfrom langchain.agents import AgentType\nfrom langchain.llms import OpenAI\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'def _should_check(serialized_obj: dict) -> bool:\n    # Only require approval on ShellTool.\n    return serialized_obj.get("name") == "terminal"\n\ndef _approve(_input: str) -> bool:\n    if _input == "echo \'Hello World\'":\n        return True\n    msg = (\n        "Do you approve of the following input? "\n        "Anything except \'Y\'/\'Yes\' (case-insensitive) will be treated as a no."\n    )\n    msg += "\\n\\n" + _input + "\\n"\n    resp = input(msg)\n    return resp.lower() in ("yes", "y")\n\ncallbacks = [HumanApprovalCallbackHandler(should_check=_should_check, approve=_approve)]\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'llm = OpenAI(temperature=0)\ntools = load_tools(["wikipedia", "llm-math", "terminal"], llm=llm)\nagent = initialize_agent(\n    tools, \n    llm, \n    agent=AgentType.ZERO_SHOT_REACT_DESCRIPTION, \n)\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'agent.run("It\'s 2023 now. How many years ago did Konrad Adenauer become Chancellor of Germany.", callbacks=callbacks)\n')),(0,r.kt)(c,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    'Konrad Adenauer became Chancellor of Germany in 1949, 74 years ago.'\n"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"agent.run(\"print 'Hello World' in the terminal\", callbacks=callbacks)\n")),(0,r.kt)(c,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    'Hello World'\n"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'agent.run("list all directories in /private", callbacks=callbacks)\n')),(0,r.kt)(c,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'    Do you approve of the following input? Anything except \'Y\'/\'Yes\' (case-insensitive) will be treated as a no.\n    \n    ls /private\n    no\n\n\n\n    ---------------------------------------------------------------------------\n\n    HumanRejectedException                    Traceback (most recent call last)\n\n    Cell In[39], line 1\n    ----\x3e 1 agent.run("list all directories in /private", callbacks=callbacks)\n\n\n    File ~/langchain/langchain/chains/base.py:236, in Chain.run(self, callbacks, *args, **kwargs)\n        234     if len(args) != 1:\n        235         raise ValueError("`run` supports only one positional argument.")\n    --\x3e 236     return self(args[0], callbacks=callbacks)[self.output_keys[0]]\n        238 if kwargs and not args:\n        239     return self(kwargs, callbacks=callbacks)[self.output_keys[0]]\n\n\n    File ~/langchain/langchain/chains/base.py:140, in Chain.__call__(self, inputs, return_only_outputs, callbacks)\n        138 except (KeyboardInterrupt, Exception) as e:\n        139     run_manager.on_chain_error(e)\n    --\x3e 140     raise e\n        141 run_manager.on_chain_end(outputs)\n        142 return self.prep_outputs(inputs, outputs, return_only_outputs)\n\n\n    File ~/langchain/langchain/chains/base.py:134, in Chain.__call__(self, inputs, return_only_outputs, callbacks)\n        128 run_manager = callback_manager.on_chain_start(\n        129     {"name": self.__class__.__name__},\n        130     inputs,\n        131 )\n        132 try:\n        133     outputs = (\n    --\x3e 134         self._call(inputs, run_manager=run_manager)\n        135         if new_arg_supported\n        136         else self._call(inputs)\n        137     )\n        138 except (KeyboardInterrupt, Exception) as e:\n        139     run_manager.on_chain_error(e)\n\n\n    File ~/langchain/langchain/agents/agent.py:953, in AgentExecutor._call(self, inputs, run_manager)\n        951 # We now enter the agent loop (until it returns something).\n        952 while self._should_continue(iterations, time_elapsed):\n    --\x3e 953     next_step_output = self._take_next_step(\n        954         name_to_tool_map,\n        955         color_mapping,\n        956         inputs,\n        957         intermediate_steps,\n        958         run_manager=run_manager,\n        959     )\n        960     if isinstance(next_step_output, AgentFinish):\n        961         return self._return(\n        962             next_step_output, intermediate_steps, run_manager=run_manager\n        963         )\n\n\n    File ~/langchain/langchain/agents/agent.py:820, in AgentExecutor._take_next_step(self, name_to_tool_map, color_mapping, inputs, intermediate_steps, run_manager)\n        818         tool_run_kwargs["llm_prefix"] = ""\n        819     # We then call the tool on the tool input to get an observation\n    --\x3e 820     observation = tool.run(\n        821         agent_action.tool_input,\n        822         verbose=self.verbose,\n        823         color=color,\n        824         callbacks=run_manager.get_child() if run_manager else None,\n        825         **tool_run_kwargs,\n        826     )\n        827 else:\n        828     tool_run_kwargs = self.agent.tool_run_logging_kwargs()\n\n\n    File ~/langchain/langchain/tools/base.py:257, in BaseTool.run(self, tool_input, verbose, start_color, color, callbacks, **kwargs)\n        255 # TODO: maybe also pass through run_manager is _run supports kwargs\n        256 new_arg_supported = signature(self._run).parameters.get("run_manager")\n    --\x3e 257 run_manager = callback_manager.on_tool_start(\n        258     {"name": self.name, "description": self.description},\n        259     tool_input if isinstance(tool_input, str) else str(tool_input),\n        260     color=start_color,\n        261     **kwargs,\n        262 )\n        263 try:\n        264     tool_args, tool_kwargs = self._to_args_and_kwargs(parsed_input)\n\n\n    File ~/langchain/langchain/callbacks/manager.py:672, in CallbackManager.on_tool_start(self, serialized, input_str, run_id, parent_run_id, **kwargs)\n        669 if run_id is None:\n        670     run_id = uuid4()\n    --\x3e 672 _handle_event(\n        673     self.handlers,\n        674     "on_tool_start",\n        675     "ignore_agent",\n        676     serialized,\n        677     input_str,\n        678     run_id=run_id,\n        679     parent_run_id=self.parent_run_id,\n        680     **kwargs,\n        681 )\n        683 return CallbackManagerForToolRun(\n        684     run_id, self.handlers, self.inheritable_handlers, self.parent_run_id\n        685 )\n\n\n    File ~/langchain/langchain/callbacks/manager.py:157, in _handle_event(handlers, event_name, ignore_condition_name, *args, **kwargs)\n        155 except Exception as e:\n        156     if handler.raise_error:\n    --\x3e 157         raise e\n        158     logging.warning(f"Error in {event_name} callback: {e}")\n\n\n    File ~/langchain/langchain/callbacks/manager.py:139, in _handle_event(handlers, event_name, ignore_condition_name, *args, **kwargs)\n        135 try:\n        136     if ignore_condition_name is None or not getattr(\n        137         handler, ignore_condition_name\n        138     ):\n    --\x3e 139         getattr(handler, event_name)(*args, **kwargs)\n        140 except NotImplementedError as e:\n        141     if event_name == "on_chat_model_start":\n\n\n    File ~/langchain/langchain/callbacks/human.py:48, in HumanApprovalCallbackHandler.on_tool_start(self, serialized, input_str, run_id, parent_run_id, **kwargs)\n         38 def on_tool_start(\n         39     self,\n         40     serialized: Dict[str, Any],\n       (...)\n         45     **kwargs: Any,\n         46 ) -> Any:\n         47     if self._should_check(serialized) and not self._approve(input_str):\n    ---\x3e 48         raise HumanRejectedException(\n         49             f"Inputs {input_str} to tool {serialized} were rejected."\n         50         )\n\n\n    HumanRejectedException: Inputs ls /private to tool {\'name\': \'terminal\', \'description\': \'Run shell commands on this MacOS machine.\'} were rejected.\n'))))}d.isMDXComponent=!0}}]);