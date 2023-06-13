"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[53569],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(n),h=r,u=d["".concat(l,".").concat(h)]||d[h]||m[h]||s;return n?a.createElement(u,i(i({ref:t},p),{},{components:n})):a.createElement(u,i({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var c=2;c<s;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},21202:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const s={},i="BabyAGI User Guide",o={unversionedId:"use_cases/agents/baby_agi",id:"use_cases/agents/baby_agi",title:"BabyAGI User Guide",description:"This notebook demonstrates how to implement BabyAGI by Yohei Nakajima. BabyAGI is an AI agent that can generate and pretend to execute tasks based on a given objective.",source:"@site/docs/use_cases/agents/baby_agi.md",sourceDirName:"use_cases/agents",slug:"/use_cases/agents/baby_agi",permalink:"/langchain-docs-scratch/docs/use_cases/agents/baby_agi",draft:!1,editUrl:"https://github.com/hwchase17/langchainjs/edit/main/docs/docs/use_cases/agents/baby_agi.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Agents",permalink:"/langchain-docs-scratch/docs/use_cases/agents/"},next:{title:"BabyAGI with Tools",permalink:"/langchain-docs-scratch/docs/use_cases/agents/baby_agi_with_agent"}},l={},c=[{value:"Install and Import Required Modules",id:"install-and-import-required-modules",level:2},{value:"Connect to the Vector Store",id:"connect-to-the-vector-store",level:2},{value:"Define the Chains",id:"define-the-chains",level:2},{value:"Define the BabyAGI Controller",id:"define-the-babyagi-controller",level:3},{value:"Run the BabyAGI",id:"run-the-babyagi",level:3}],p=(d="CodeOutputBlock",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var d;const m={toc:c},h="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(h,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"babyagi-user-guide"},"BabyAGI User Guide"),(0,r.kt)("p",null,"This notebook demonstrates how to implement ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/yoheinakajima/babyagi/tree/main"},"BabyAGI")," by ",(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/yoheinakajima"},"Yohei Nakajima"),". BabyAGI is an AI agent that can generate and pretend to execute tasks based on a given objective."),(0,r.kt)("p",null,"This guide will help you understand the components to create your own recursive agents."),(0,r.kt)("p",null,"Although BabyAGI uses specific vectorstores/model providers (Pinecone, OpenAI), one of the benefits of implementing it with LangChain is that you can easily swap those out for different options. In this implementation we use a FAISS vectorstore (because it runs locally and is free)."),(0,r.kt)("h2",{id:"install-and-import-required-modules"},"Install and Import Required Modules"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import os\nfrom collections import deque\nfrom typing import Dict, List, Optional, Any\n\nfrom langchain import LLMChain, OpenAI, PromptTemplate\nfrom langchain.embeddings import OpenAIEmbeddings\nfrom langchain.llms import BaseLLM\nfrom langchain.vectorstores.base import VectorStore\nfrom pydantic import BaseModel, Field\nfrom langchain.chains.base import Chain\n")),(0,r.kt)("h2",{id:"connect-to-the-vector-store"},"Connect to the Vector Store"),(0,r.kt)("p",null,"Depending on what vectorstore you use, this step may look different."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from langchain.vectorstores import FAISS\nfrom langchain.docstore import InMemoryDocstore\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# Define your embedding model\nembeddings_model = OpenAIEmbeddings()\n# Initialize the vectorstore as empty\nimport faiss\n\nembedding_size = 1536\nindex = faiss.IndexFlatL2(embedding_size)\nvectorstore = FAISS(embeddings_model.embed_query, index, InMemoryDocstore({}), {})\n")),(0,r.kt)("h2",{id:"define-the-chains"},"Define the Chains"),(0,r.kt)("p",null,"BabyAGI relies on three LLM chains:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Task creation chain to select new tasks to add to the list"),(0,r.kt)("li",{parentName:"ul"},"Task prioritization chain to re-prioritize tasks"),(0,r.kt)("li",{parentName:"ul"},"Execution Chain to execute the tasks")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'class TaskCreationChain(LLMChain):\n    """Chain to generates tasks."""\n\n    @classmethod\n    def from_llm(cls, llm: BaseLLM, verbose: bool = True) -> LLMChain:\n        """Get the response parser."""\n        task_creation_template = (\n            "You are a task creation AI that uses the result of an execution agent"\n            " to create new tasks with the following objective: {objective},"\n            " The last completed task has the result: {result}."\n            " This result was based on this task description: {task_description}."\n            " These are incomplete tasks: {incomplete_tasks}."\n            " Based on the result, create new tasks to be completed"\n            " by the AI system that do not overlap with incomplete tasks."\n            " Return the tasks as an array."\n        )\n        prompt = PromptTemplate(\n            template=task_creation_template,\n            input_variables=[\n                "result",\n                "task_description",\n                "incomplete_tasks",\n                "objective",\n            ],\n        )\n        return cls(prompt=prompt, llm=llm, verbose=verbose)\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'class TaskPrioritizationChain(LLMChain):\n    """Chain to prioritize tasks."""\n\n    @classmethod\n    def from_llm(cls, llm: BaseLLM, verbose: bool = True) -> LLMChain:\n        """Get the response parser."""\n        task_prioritization_template = (\n            "You are a task prioritization AI tasked with cleaning the formatting of and reprioritizing"\n            " the following tasks: {task_names}."\n            " Consider the ultimate objective of your team: {objective}."\n            " Do not remove any tasks. Return the result as a numbered list, like:"\n            " #. First task"\n            " #. Second task"\n            " Start the task list with number {next_task_id}."\n        )\n        prompt = PromptTemplate(\n            template=task_prioritization_template,\n            input_variables=["task_names", "next_task_id", "objective"],\n        )\n        return cls(prompt=prompt, llm=llm, verbose=verbose)\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'class ExecutionChain(LLMChain):\n    """Chain to execute tasks."""\n\n    @classmethod\n    def from_llm(cls, llm: BaseLLM, verbose: bool = True) -> LLMChain:\n        """Get the response parser."""\n        execution_template = (\n            "You are an AI who performs one task based on the following objective: {objective}."\n            " Take into account these previously completed tasks: {context}."\n            " Your task: {task}."\n            " Response:"\n        )\n        prompt = PromptTemplate(\n            template=execution_template,\n            input_variables=["objective", "context", "task"],\n        )\n        return cls(prompt=prompt, llm=llm, verbose=verbose)\n')),(0,r.kt)("h3",{id:"define-the-babyagi-controller"},"Define the BabyAGI Controller"),(0,r.kt)("p",null,"BabyAGI composes the chains defined above in a (potentially-)infinite loop."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'def get_next_task(\n    task_creation_chain: LLMChain,\n    result: Dict,\n    task_description: str,\n    task_list: List[str],\n    objective: str,\n) -> List[Dict]:\n    """Get the next task."""\n    incomplete_tasks = ", ".join(task_list)\n    response = task_creation_chain.run(\n        result=result,\n        task_description=task_description,\n        incomplete_tasks=incomplete_tasks,\n        objective=objective,\n    )\n    new_tasks = response.split("\\n")\n    return [{"task_name": task_name} for task_name in new_tasks if task_name.strip()]\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'def prioritize_tasks(\n    task_prioritization_chain: LLMChain,\n    this_task_id: int,\n    task_list: List[Dict],\n    objective: str,\n) -> List[Dict]:\n    """Prioritize tasks."""\n    task_names = [t["task_name"] for t in task_list]\n    next_task_id = int(this_task_id) + 1\n    response = task_prioritization_chain.run(\n        task_names=task_names, next_task_id=next_task_id, objective=objective\n    )\n    new_tasks = response.split("\\n")\n    prioritized_task_list = []\n    for task_string in new_tasks:\n        if not task_string.strip():\n            continue\n        task_parts = task_string.strip().split(".", 1)\n        if len(task_parts) == 2:\n            task_id = task_parts[0].strip()\n            task_name = task_parts[1].strip()\n            prioritized_task_list.append({"task_id": task_id, "task_name": task_name})\n    return prioritized_task_list\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'def _get_top_tasks(vectorstore, query: str, k: int) -> List[str]:\n    """Get the top k tasks based on the query."""\n    results = vectorstore.similarity_search_with_score(query, k=k)\n    if not results:\n        return []\n    sorted_results, _ = zip(*sorted(results, key=lambda x: x[1], reverse=True))\n    return [str(item.metadata["task"]) for item in sorted_results]\n\n\ndef execute_task(\n    vectorstore, execution_chain: LLMChain, objective: str, task: str, k: int = 5\n) -> str:\n    """Execute a task."""\n    context = _get_top_tasks(vectorstore, query=objective, k=k)\n    return execution_chain.run(objective=objective, context=context, task=task)\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'class BabyAGI(Chain, BaseModel):\n    """Controller model for the BabyAGI agent."""\n\n    task_list: deque = Field(default_factory=deque)\n    task_creation_chain: TaskCreationChain = Field(...)\n    task_prioritization_chain: TaskPrioritizationChain = Field(...)\n    execution_chain: ExecutionChain = Field(...)\n    task_id_counter: int = Field(1)\n    vectorstore: VectorStore = Field(init=False)\n    max_iterations: Optional[int] = None\n\n    class Config:\n        """Configuration for this pydantic object."""\n\n        arbitrary_types_allowed = True\n\n    def add_task(self, task: Dict):\n        self.task_list.append(task)\n\n    def print_task_list(self):\n        print("\\033[95m\\033[1m" + "\\n*****TASK LIST*****\\n" + "\\033[0m\\033[0m")\n        for t in self.task_list:\n            print(str(t["task_id"]) + ": " + t["task_name"])\n\n    def print_next_task(self, task: Dict):\n        print("\\033[92m\\033[1m" + "\\n*****NEXT TASK*****\\n" + "\\033[0m\\033[0m")\n        print(str(task["task_id"]) + ": " + task["task_name"])\n\n    def print_task_result(self, result: str):\n        print("\\033[93m\\033[1m" + "\\n*****TASK RESULT*****\\n" + "\\033[0m\\033[0m")\n        print(result)\n\n    @property\n    def input_keys(self) -> List[str]:\n        return ["objective"]\n\n    @property\n    def output_keys(self) -> List[str]:\n        return []\n\n    def _call(self, inputs: Dict[str, Any]) -> Dict[str, Any]:\n        """Run the agent."""\n        objective = inputs["objective"]\n        first_task = inputs.get("first_task", "Make a todo list")\n        self.add_task({"task_id": 1, "task_name": first_task})\n        num_iters = 0\n        while True:\n            if self.task_list:\n                self.print_task_list()\n\n                # Step 1: Pull the first task\n                task = self.task_list.popleft()\n                self.print_next_task(task)\n\n                # Step 2: Execute the task\n                result = execute_task(\n                    self.vectorstore, self.execution_chain, objective, task["task_name"]\n                )\n                this_task_id = int(task["task_id"])\n                self.print_task_result(result)\n\n                # Step 3: Store the result in Pinecone\n                result_id = f"result_{task[\'task_id\']}"\n                self.vectorstore.add_texts(\n                    texts=[result],\n                    metadatas=[{"task": task["task_name"]}],\n                    ids=[result_id],\n                )\n\n                # Step 4: Create new tasks and reprioritize task list\n                new_tasks = get_next_task(\n                    self.task_creation_chain,\n                    result,\n                    task["task_name"],\n                    [t["task_name"] for t in self.task_list],\n                    objective,\n                )\n                for new_task in new_tasks:\n                    self.task_id_counter += 1\n                    new_task.update({"task_id": self.task_id_counter})\n                    self.add_task(new_task)\n                self.task_list = deque(\n                    prioritize_tasks(\n                        self.task_prioritization_chain,\n                        this_task_id,\n                        list(self.task_list),\n                        objective,\n                    )\n                )\n            num_iters += 1\n            if self.max_iterations is not None and num_iters == self.max_iterations:\n                print(\n                    "\\033[91m\\033[1m" + "\\n*****TASK ENDING*****\\n" + "\\033[0m\\033[0m"\n                )\n                break\n        return {}\n\n    @classmethod\n    def from_llm(\n        cls, llm: BaseLLM, vectorstore: VectorStore, verbose: bool = False, **kwargs\n    ) -> "BabyAGI":\n        """Initialize the BabyAGI Controller."""\n        task_creation_chain = TaskCreationChain.from_llm(llm, verbose=verbose)\n        task_prioritization_chain = TaskPrioritizationChain.from_llm(\n            llm, verbose=verbose\n        )\n        execution_chain = ExecutionChain.from_llm(llm, verbose=verbose)\n        return cls(\n            task_creation_chain=task_creation_chain,\n            task_prioritization_chain=task_prioritization_chain,\n            execution_chain=execution_chain,\n            vectorstore=vectorstore,\n            **kwargs,\n        )\n')),(0,r.kt)("h3",{id:"run-the-babyagi"},"Run the BabyAGI"),(0,r.kt)("p",null,"Now it's time to create the BabyAGI controller and watch it try to accomplish your objective."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'OBJECTIVE = "Write a weather report for SF today"\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"llm = OpenAI(temperature=0)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# Logging of LLMChains\nverbose = False\n# If None, will keep on going forever\nmax_iterations: Optional[int] = 3\nbaby_agi = BabyAGI.from_llm(\n    llm=llm, vectorstore=vectorstore, verbose=verbose, max_iterations=max_iterations\n)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'baby_agi({"objective": OBJECTIVE})\n')),(0,r.kt)(p,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    \n    *****TASK LIST*****\n    \n    1: Make a todo list\n    \n    *****NEXT TASK*****\n    \n    1: Make a todo list\n    \n    *****TASK RESULT*****\n    \n    \n    \n    1. Check the temperature range for the day.\n    2. Gather temperature data for SF today.\n    3. Analyze the temperature data and create a weather report.\n    4. Publish the weather report.\n    \n    *****TASK LIST*****\n    \n    2: Gather data on the expected temperature range for the day.\n    3: Collect data on the expected precipitation for the day.\n    4: Analyze the data and create a weather report.\n    5: Check the current weather conditions in SF.\n    6: Publish the weather report.\n    \n    *****NEXT TASK*****\n    \n    2: Gather data on the expected temperature range for the day.\n    \n    *****TASK RESULT*****\n    \n    \n    \n    I have gathered data on the expected temperature range for the day in San Francisco. The forecast is for temperatures to range from a low of 55 degrees Fahrenheit to a high of 68 degrees Fahrenheit.\n    \n    *****TASK LIST*****\n    \n    3: Check the current weather conditions in SF.\n    4: Calculate the average temperature for the day in San Francisco.\n    5: Determine the probability of precipitation for the day in San Francisco.\n    6: Identify any potential weather warnings or advisories for the day in San Francisco.\n    7: Research any historical weather patterns for the day in San Francisco.\n    8: Compare the expected temperature range to the historical average for the day in San Francisco.\n    9: Collect data on the expected precipitation for the day.\n    10: Analyze the data and create a weather report.\n    11: Publish the weather report.\n    \n    *****NEXT TASK*****\n    \n    3: Check the current weather conditions in SF.\n    \n    *****TASK RESULT*****\n    \n    \n    \n    I am checking the current weather conditions in SF. According to the data I have gathered, the temperature in SF today is currently around 65 degrees Fahrenheit with clear skies. The temperature range for the day is expected to be between 60 and 70 degrees Fahrenheit.\n    \n    *****TASK ENDING*****\n    \n\n\n\n\n\n    {'objective': 'Write a weather report for SF today'}\n"))))}u.isMDXComponent=!0}}]);