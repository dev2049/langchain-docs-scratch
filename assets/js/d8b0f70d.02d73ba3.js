"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[25642],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),h=a,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||s;return n?o.createElement(m,r(r({ref:t},c),{},{components:n})):o.createElement(m,r({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,r=new Array(s);r[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:a,r[1]=i;for(var p=2;p<s;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},42543:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var o=n(87462),a=(n(67294),n(3905));const s={},r="JSON Agent",i={unversionedId:"modules/agents/tools/toolkits/json",id:"modules/agents/tools/toolkits/json",title:"JSON Agent",description:"This notebook showcases an agent designed to interact with large JSON/dict objects. This is useful when you want to answer questions about a JSON blob that's too large to fit in the context window of an LLM. The agent is able to iteratively explore the blob to find what it needs to answer the user's question.",source:"@site/docs/modules/agents/tools/toolkits/json.md",sourceDirName:"modules/agents/tools/toolkits",slug:"/modules/agents/tools/toolkits/json",permalink:"/langchain-docs-scratch/docs/modules/agents/tools/toolkits/json",draft:!1,editUrl:"https://github.com/hwchase17/langchainjs/edit/main/docs/docs/modules/agents/tools/toolkits/json.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Jira",permalink:"/langchain-docs-scratch/docs/modules/agents/tools/toolkits/jira"},next:{title:"OpenAPI agents",permalink:"/langchain-docs-scratch/docs/modules/agents/tools/toolkits/openapi"}},l={},p=[{value:"Initialization",id:"initialization",level:2},{value:"Example: getting the required POST parameters for a request",id:"example-getting-the-required-post-parameters-for-a-request",level:2}],c=(u="CodeOutputBlock",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var u;const d={toc:p},h="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(h,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"json-agent"},"JSON Agent"),(0,a.kt)("p",null,"This notebook showcases an agent designed to interact with large JSON/dict objects. This is useful when you want to answer questions about a JSON blob that's too large to fit in the context window of an LLM. The agent is able to iteratively explore the blob to find what it needs to answer the user's question."),(0,a.kt)("p",null,"In the below example, we are using the OpenAPI spec for the OpenAI API, which you can find ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/openai/openai-openapi/blob/master/openapi.yaml"},"here"),"."),(0,a.kt)("p",null,"We will use the JSON agent to answer some questions about the API spec."),(0,a.kt)("h2",{id:"initialization"},"Initialization"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import os\nimport yaml\n\nfrom langchain.agents import (\n    create_json_agent,\n    AgentExecutor\n)\nfrom langchain.agents.agent_toolkits import JsonToolkit\nfrom langchain.chains import LLMChain\nfrom langchain.llms.openai import OpenAI\nfrom langchain.requests import TextRequestsWrapper\nfrom langchain.tools.json.tool import JsonSpec\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'with open("openai_openapi.yml") as f:\n    data = yaml.load(f, Loader=yaml.FullLoader)\njson_spec = JsonSpec(dict_=data, max_value_length=4000)\njson_toolkit = JsonToolkit(spec=json_spec)\n\njson_agent_executor = create_json_agent(\n    llm=OpenAI(temperature=0),\n    toolkit=json_toolkit,\n    verbose=True\n)\n')),(0,a.kt)("h2",{id:"example-getting-the-required-post-parameters-for-a-request"},"Example: getting the required POST parameters for a request"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'json_agent_executor.run("What are the required parameters in the request body to the /completions endpoint?")\n')),(0,a.kt)(c,{lang:"python",mdxType:"CodeOutputBlock"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'    \n    \n    > Entering new AgentExecutor chain...\n    Action: json_spec_list_keys\n    Action Input: data\n    Observation: [\'openapi\', \'info\', \'servers\', \'tags\', \'paths\', \'components\', \'x-oaiMeta\']\n    Thought: I should look at the paths key to see what endpoints exist\n    Action: json_spec_list_keys\n    Action Input: data["paths"]\n    Observation: [\'/engines\', \'/engines/{engine_id}\', \'/completions\', \'/edits\', \'/images/generations\', \'/images/edits\', \'/images/variations\', \'/embeddings\', \'/engines/{engine_id}/search\', \'/files\', \'/files/{file_id}\', \'/files/{file_id}/content\', \'/answers\', \'/classifications\', \'/fine-tunes\', \'/fine-tunes/{fine_tune_id}\', \'/fine-tunes/{fine_tune_id}/cancel\', \'/fine-tunes/{fine_tune_id}/events\', \'/models\', \'/models/{model}\', \'/moderations\']\n    Thought: I should look at the /completions endpoint to see what parameters are required\n    Action: json_spec_list_keys\n    Action Input: data["paths"]["/completions"]\n    Observation: [\'post\']\n    Thought: I should look at the post key to see what parameters are required\n    Action: json_spec_list_keys\n    Action Input: data["paths"]["/completions"]["post"]\n    Observation: [\'operationId\', \'tags\', \'summary\', \'requestBody\', \'responses\', \'x-oaiMeta\']\n    Thought: I should look at the requestBody key to see what parameters are required\n    Action: json_spec_list_keys\n    Action Input: data["paths"]["/completions"]["post"]["requestBody"]\n    Observation: [\'required\', \'content\']\n    Thought: I should look at the required key to see what parameters are required\n    Action: json_spec_get_value\n    Action Input: data["paths"]["/completions"]["post"]["requestBody"]["required"]\n    Observation: True\n    Thought: I should look at the content key to see what parameters are required\n    Action: json_spec_list_keys\n    Action Input: data["paths"]["/completions"]["post"]["requestBody"]["content"]\n    Observation: [\'application/json\']\n    Thought: I should look at the application/json key to see what parameters are required\n    Action: json_spec_list_keys\n    Action Input: data["paths"]["/completions"]["post"]["requestBody"]["content"]["application/json"]\n    Observation: [\'schema\']\n    Thought: I should look at the schema key to see what parameters are required\n    Action: json_spec_list_keys\n    Action Input: data["paths"]["/completions"]["post"]["requestBody"]["content"]["application/json"]["schema"]\n    Observation: [\'$ref\']\n    Thought: I should look at the $ref key to see what parameters are required\n    Action: json_spec_get_value\n    Action Input: data["paths"]["/completions"]["post"]["requestBody"]["content"]["application/json"]["schema"]["$ref"]\n    Observation: #/components/schemas/CreateCompletionRequest\n    Thought: I should look at the CreateCompletionRequest schema to see what parameters are required\n    Action: json_spec_list_keys\n    Action Input: data["components"]["schemas"]["CreateCompletionRequest"]\n    Observation: [\'type\', \'properties\', \'required\']\n    Thought: I should look at the required key to see what parameters are required\n    Action: json_spec_get_value\n    Action Input: data["components"]["schemas"]["CreateCompletionRequest"]["required"]\n    Observation: [\'model\']\n    Thought: I now know the final answer\n    Final Answer: The required parameters in the request body to the /completions endpoint are \'model\'.\n    \n    > Finished chain.\n\n\n\n\n\n    "The required parameters in the request body to the /completions endpoint are \'model\'."\n'))))}m.isMDXComponent=!0}}]);