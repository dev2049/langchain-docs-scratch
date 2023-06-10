"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[51987],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,g=p["".concat(l,".").concat(d)]||p[d]||h[d]||r;return n?o.createElement(g,i(i({ref:t},c),{},{components:n})):o.createElement(g,i({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var u=2;u<r;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},47415:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>g,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var o=n(87462),a=(n(67294),n(3905));const r={},i="Generic Agent Evaluation",s={unversionedId:"guides/evaluation/generic_agent_evaluation",id:"guides/evaluation/generic_agent_evaluation",title:"Generic Agent Evaluation",description:"Good evaluation is key for quickly iterating on your agent's prompts and tools. Here we provide an example of how to use the TrajectoryEvalChain to evaluate your agent.",source:"@site/docs/guides/evaluation/generic_agent_evaluation.md",sourceDirName:"guides/evaluation",slug:"/guides/evaluation/generic_agent_evaluation",permalink:"/langchain-docs-scratch/docs/guides/evaluation/generic_agent_evaluation",draft:!1,editUrl:"https://github.com/hwchase17/langchainjs/edit/main/docs/docs/guides/evaluation/generic_agent_evaluation.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Data Augmented Question Answering",permalink:"/langchain-docs-scratch/docs/guides/evaluation/data_augmented_question_answering"},next:{title:"Using Hugging Face Datasets",permalink:"/langchain-docs-scratch/docs/guides/evaluation/huggingface_datasets"}},l={},u=[{value:"Setup",id:"setup",level:2},{value:"Testing the Agent",id:"testing-the-agent",level:2},{value:"Evaluating the Agent",id:"evaluating-the-agent",level:2}],c=(p="CodeOutputBlock",function(e){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var p;const h={toc:u},d="wrapper";function g(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"generic-agent-evaluation"},"Generic Agent Evaluation"),(0,a.kt)("p",null,"Good evaluation is key for quickly iterating on your agent's prompts and tools. Here we provide an example of how to use the TrajectoryEvalChain to evaluate your agent."),(0,a.kt)("h2",{id:"setup"},"Setup"),(0,a.kt)("p",null,"Let's start by defining our agent."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'from langchain import Wikipedia\nfrom langchain.chat_models import ChatOpenAI\nfrom langchain.agents import initialize_agent, Tool\nfrom langchain.agents import AgentType\nfrom langchain.agents.react.base import DocstoreExplorer\nfrom langchain.memory import ConversationBufferMemory\nfrom langchain import LLMMathChain\nfrom langchain.llms import OpenAI\n\nfrom langchain import SerpAPIWrapper\n\ndocstore = DocstoreExplorer(Wikipedia())\n\nmath_llm = OpenAI(temperature=0)\n\nllm_math_chain = LLMMathChain(llm=math_llm, verbose=True)\n\nsearch = SerpAPIWrapper()\n\ntools = [\n    Tool(\n        name="Search",\n        func=docstore.search,\n        description="useful for when you need to ask with search",\n    ),\n    Tool(\n        name="Lookup",\n        func=docstore.lookup,\n        description="useful for when you need to ask with lookup",\n    ),\n    Tool(\n        name="Calculator",\n        func=llm_math_chain.run,\n        description="useful for doing calculations",\n    ),\n    Tool(\n        name="Search the Web (SerpAPI)",\n        func=search.run,\n        description="useful for when you need to answer questions about current events",\n    ),\n]\n\nmemory = ConversationBufferMemory(\n    memory_key="chat_history", return_messages=True, output_key="output"\n)\n\nllm = ChatOpenAI(temperature=0, model_name="gpt-3.5-turbo")\n\nagent = initialize_agent(\n    tools,\n    llm,\n    agent=AgentType.CHAT_CONVERSATIONAL_REACT_DESCRIPTION,\n    verbose=True,\n    memory=memory,\n    return_intermediate_steps=True, # This is needed for the evaluation later\n)\n')),(0,a.kt)("h2",{id:"testing-the-agent"},"Testing the Agent"),(0,a.kt)("p",null,"Now let's try our agent out on some example queries."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'query_one = "How many ping pong balls would it take to fill the entire Empire State Building?"\n\ntest_outputs_one = agent({"input": query_one}, return_only_outputs=False)\n')),(0,a.kt)(c,{lang:"python",mdxType:"CodeOutputBlock"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'    \n    \n    > Entering new AgentExecutor chain...\n    {\n        "action": "Search the Web (SerpAPI)",\n        "action_input": "How many ping pong balls would it take to fill the entire Empire State Building?"\n    }\n    Observation: 12.8 billion. The volume of the Empire State Building Googles in at around 37 million ft\xb3. A golf ball comes in at about 2.5 in\xb3.\n    Thought:{\n        "action": "Final Answer",\n        "action_input": "It would take approximately 12.8 billion ping pong balls to fill the entire Empire State Building."\n    }\n    \n    > Finished chain.\n'))),(0,a.kt)("p",null,"This looks good! Let's try it out on another query."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'query_two = "If you laid the Eiffel Tower end to end, how many would you need cover the US from coast to coast?"\n\ntest_outputs_two = agent({"input": query_two}, return_only_outputs=False)\n')),(0,a.kt)(c,{lang:"python",mdxType:"CodeOutputBlock"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'    \n    \n    > Entering new AgentExecutor chain...\n    {\n        "action": "Calculator",\n        "action_input": "The length of the Eiffel Tower is 324 meters. The distance from coast to coast in the US is approximately 4,828 kilometers. First, we need to convert 4,828 kilometers to meters, which gives us 4,828,000 meters. To find out how many Eiffel Towers we need, we can divide 4,828,000 by 324. This gives us approximately 14,876 Eiffel Towers."\n    }\n    \n    > Entering new LLMMathChain chain...\n    The length of the Eiffel Tower is 324 meters. The distance from coast to coast in the US is approximately 4,828 kilometers. First, we need to convert 4,828 kilometers to meters, which gives us 4,828,000 meters. To find out how many Eiffel Towers we need, we can divide 4,828,000 by 324. This gives us approximately 14,876 Eiffel Towers.\n    ```text\n    4828000 / 324\n    ```\n    ...numexpr.evaluate("4828000 / 324")...\n    \n    Answer: 14901.234567901234\n    > Finished chain.\n    \n    Observation: Answer: 14901.234567901234\n    Thought:{\n        "action": "Calculator",\n        "action_input": "The length of the Eiffel Tower is 324 meters. The distance from coast to coast in the US is approximately 4,828 kilometers. First, we need to convert 4,828 kilometers to meters, which gives us 4,828,000 meters. To find out how many Eiffel Towers we need, we can divide 4,828,000 by 324. This gives us approximately 14,901 Eiffel Towers."\n    }\n    \n    > Entering new LLMMathChain chain...\n    The length of the Eiffel Tower is 324 meters. The distance from coast to coast in the US is approximately 4,828 kilometers. First, we need to convert 4,828 kilometers to meters, which gives us 4,828,000 meters. To find out how many Eiffel Towers we need, we can divide 4,828,000 by 324. This gives us approximately 14,901 Eiffel Towers.\n    ```text\n    4828000 / 324\n    ```\n    ...numexpr.evaluate("4828000 / 324")...\n    \n    Answer: 14901.234567901234\n    > Finished chain.\n    \n    Observation: Answer: 14901.234567901234\n    Thought:{\n        "action": "Final Answer",\n        "action_input": "If you laid the Eiffel Tower end to end, you would need approximately 14,901 Eiffel Towers to cover the US from coast to coast."\n    }\n    \n    > Finished chain.\n'))),(0,a.kt)("p",null,"This doesn't look so good. Let's try running some evaluation."),(0,a.kt)("h2",{id:"evaluating-the-agent"},"Evaluating the Agent"),(0,a.kt)("p",null,"Let's start by defining the TrajectoryEvalChain."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'from langchain.evaluation.agents import TrajectoryEvalChain\n\n# Define chain\neval_chain = TrajectoryEvalChain.from_llm(\n    llm=ChatOpenAI(temperature=0, model_name="gpt-4"), # Note: This must be a ChatOpenAI model\n    agent_tools=agent.tools,\n    return_reasoning=True,\n)\n')),(0,a.kt)("p",null,"Let's try evaluating the first query."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'question, steps, answer = test_outputs_one["input"], test_outputs_one["intermediate_steps"], test_outputs_one["output"]\n\nevaluation = eval_chain(\n    inputs={"question": question, "answer": answer, "agent_trajectory": eval_chain.get_agent_trajectory(steps)},\n)\n\nprint("Score from 1 to 5: ", evaluation["score"])\nprint("Reasoning: ", evaluation["reasoning"])\n')),(0,a.kt)(c,{lang:"python",mdxType:"CodeOutputBlock"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    Score from 1 to 5:  1\n    Reasoning:  First, let's evaluate the final answer. The final answer is incorrect because it uses the volume of golf balls instead of ping pong balls. The answer is not helpful.\n    \n    Second, does the model use a logical sequence of tools to answer the question? The model only used one tool, which was the Search the Web (SerpAPI). It did not use the Calculator tool to calculate the correct volume of ping pong balls.\n    \n    Third, does the AI language model use the tools in a helpful way? The model used the Search the Web (SerpAPI) tool, but the output was not helpful because it provided information about golf balls instead of ping pong balls.\n    \n    Fourth, does the AI language model use too many steps to answer the question? The model used only one step, which is not too many. However, it should have used more steps to provide a correct answer.\n    \n    Fifth, are the appropriate tools used to answer the question? The model should have used the Search tool to find the volume of the Empire State Building and the volume of a ping pong ball. Then, it should have used the Calculator tool to calculate the number of ping pong balls needed to fill the building.\n    \n    Judgment: Given the incorrect final answer and the inappropriate use of tools, we give the model a score of 1.\n"))),(0,a.kt)("p",null,"That seems about right. Let's try the second query."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'question, steps, answer = test_outputs_two["input"], test_outputs_two["intermediate_steps"], test_outputs_two["output"]\n\nevaluation = eval_chain(\n    inputs={"question": question, "answer": answer, "agent_trajectory": eval_chain.get_agent_trajectory(steps)},\n)\n\nprint("Score from 1 to 5: ", evaluation["score"])\nprint("Reasoning: ", evaluation["reasoning"])\n')),(0,a.kt)(c,{lang:"python",mdxType:"CodeOutputBlock"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    Score from 1 to 5:  3\n    Reasoning:  i. Is the final answer helpful?\n    Yes, the final answer is helpful as it provides an approximate number of Eiffel Towers needed to cover the US from coast to coast.\n    \n    ii. Does the AI language use a logical sequence of tools to answer the question?\n    No, the AI language model does not use a logical sequence of tools. It directly uses the Calculator tool without first using the Search or Lookup tools to find the necessary information (length of the Eiffel Tower and distance from coast to coast in the US).\n    \n    iii. Does the AI language model use the tools in a helpful way?\n    The AI language model uses the Calculator tool in a helpful way to perform the calculation, but it should have used the Search or Lookup tools first to find the required information.\n    \n    iv. Does the AI language model use too many steps to answer the question?\n    No, the AI language model does not use too many steps. However, it repeats the same step twice, which is unnecessary.\n    \n    v. Are the appropriate tools used to answer the question?\n    Not entirely. The AI language model should have used the Search or Lookup tools to find the required information before using the Calculator tool.\n    \n    Given the above evaluation, the AI language model's performance can be scored as follows:\n"))),(0,a.kt)("p",null,"That also sounds about right. In conclusion, the TrajectoryEvalChain allows us to use GPT-4 to score both our agent's outputs and tool use in addition to giving us the reasoning behind the evaluation."))}g.isMDXComponent=!0}}]);