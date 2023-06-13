"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4507],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(t),h=o,d=m["".concat(s,".").concat(h)]||m[h]||u[h]||r;return t?a.createElement(d,l(l({ref:n},c),{},{components:t})):a.createElement(d,l({ref:n},c))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,l=new Array(r);l[0]=h;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[m]="string"==typeof e?e:o,l[1]=i;for(var p=2;p<r;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},28939:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var a=t(87462),o=(t(67294),t(3905));const r={},l="Serialization",i={unversionedId:"modules/chains/how_to/serialization",id:"modules/chains/how_to/serialization",title:"Serialization",description:"This notebook covers how to serialize chains to and from disk. The serialization format we use is json or yaml. Currently, only some chains support this type of serialization. We will grow the number of supported chains over time.",source:"@site/docs/modules/chains/how_to/serialization.md",sourceDirName:"modules/chains/how_to",slug:"/modules/chains/how_to/serialization",permalink:"/langchain-docs-scratch/docs/modules/chains/how_to/serialization",draft:!1,editUrl:"https://github.com/hwchase17/langchainjs/edit/main/docs/docs/modules/chains/how_to/serialization.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Adding memory (state)",permalink:"/langchain-docs-scratch/docs/modules/chains/how_to/memory"},next:{title:"Foundational",permalink:"/langchain-docs-scratch/docs/modules/chains/foundational/"}},s={},p=[{value:"Saving a chain to disk",id:"saving-a-chain-to-disk",level:2},{value:"Loading a chain from disk",id:"loading-a-chain-from-disk",level:2},{value:"Saving components separately",id:"saving-components-separately",level:2}],c=(m="CodeOutputBlock",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var m;const u={toc:p},h="wrapper";function d(e){let{components:n,...t}=e;return(0,o.kt)(h,(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"serialization"},"Serialization"),(0,o.kt)("p",null,"This notebook covers how to serialize chains to and from disk. The serialization format we use is json or yaml. Currently, only some chains support this type of serialization. We will grow the number of supported chains over time."),(0,o.kt)("h2",{id:"saving-a-chain-to-disk"},"Saving a chain to disk"),(0,o.kt)("p",null,"First, let's go over how to save a chain to disk. This can be done with the ",(0,o.kt)("inlineCode",{parentName:"p"},".save")," method, and specifying a file path with a json or yaml extension."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from langchain import PromptTemplate, OpenAI, LLMChain\ntemplate = """Question: {question}\n\nAnswer: Let\'s think step by step."""\nprompt = PromptTemplate(template=template, input_variables=["question"])\nllm_chain = LLMChain(prompt=prompt, llm=OpenAI(temperature=0), verbose=True)\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'llm_chain.save("llm_chain.json")\n')),(0,o.kt)("p",null,"Let's now take a look at what's inside this saved file"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cat llm_chain.json\n")),(0,o.kt)(c,{lang:"bash",mdxType:"CodeOutputBlock"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'    {\n        "memory": null,\n        "verbose": true,\n        "prompt": {\n            "input_variables": [\n                "question"\n            ],\n            "output_parser": null,\n            "template": "Question: {question}\\n\\nAnswer: Let\'s think step by step.",\n            "template_format": "f-string"\n        },\n        "llm": {\n            "model_name": "text-davinci-003",\n            "temperature": 0.0,\n            "max_tokens": 256,\n            "top_p": 1,\n            "frequency_penalty": 0,\n            "presence_penalty": 0,\n            "n": 1,\n            "best_of": 1,\n            "request_timeout": null,\n            "logit_bias": {},\n            "_type": "openai"\n        },\n        "output_key": "text",\n        "_type": "llm_chain"\n    }\n'))),(0,o.kt)("h2",{id:"loading-a-chain-from-disk"},"Loading a chain from disk"),(0,o.kt)("p",null,"We can load a chain from disk by using the ",(0,o.kt)("inlineCode",{parentName:"p"},"load_chain")," method."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from langchain.chains import load_chain\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'chain = load_chain("llm_chain.json")\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'chain.run("whats 2 + 2")\n')),(0,o.kt)(c,{lang:"python",mdxType:"CodeOutputBlock"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    \n    \n    > Entering new LLMChain chain...\n    Prompt after formatting:\n    Question: whats 2 + 2\n    \n    Answer: Let's think step by step.\n    \n    > Finished chain.\n\n\n\n\n\n    ' 2 + 2 = 4'\n"))),(0,o.kt)("h2",{id:"saving-components-separately"},"Saving components separately"),(0,o.kt)("p",null,"In the above example, we can see that the prompt and llm configuration information is saved in the same json as the overall chain. Alternatively, we can split them up and save them separately. This is often useful to make the saved components more modular. In order to do this, we just need to specify ",(0,o.kt)("inlineCode",{parentName:"p"},"llm_path")," instead of the ",(0,o.kt)("inlineCode",{parentName:"p"},"llm")," component, and ",(0,o.kt)("inlineCode",{parentName:"p"},"prompt_path")," instead of the ",(0,o.kt)("inlineCode",{parentName:"p"},"prompt")," component."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'llm_chain.prompt.save("prompt.json")\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cat prompt.json\n")),(0,o.kt)(c,{lang:"bash",mdxType:"CodeOutputBlock"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'    {\n        "input_variables": [\n            "question"\n        ],\n        "output_parser": null,\n        "template": "Question: {question}\\n\\nAnswer: Let\'s think step by step.",\n        "template_format": "f-string"\n    }\n'))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'llm_chain.llm.save("llm.json")\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cat llm.json\n")),(0,o.kt)(c,{lang:"bash",mdxType:"CodeOutputBlock"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'    {\n        "model_name": "text-davinci-003",\n        "temperature": 0.0,\n        "max_tokens": 256,\n        "top_p": 1,\n        "frequency_penalty": 0,\n        "presence_penalty": 0,\n        "n": 1,\n        "best_of": 1,\n        "request_timeout": null,\n        "logit_bias": {},\n        "_type": "openai"\n    }\n'))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'config = {\n    "memory": None,\n    "verbose": True,\n    "prompt_path": "prompt.json",\n    "llm_path": "llm.json",\n    "output_key": "text",\n    "_type": "llm_chain"\n}\nimport json\nwith open("llm_chain_separate.json", "w") as f:\n    json.dump(config, f, indent=2)\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cat llm_chain_separate.json\n")),(0,o.kt)(c,{lang:"bash",mdxType:"CodeOutputBlock"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'    {\n      "memory": null,\n      "verbose": true,\n      "prompt_path": "prompt.json",\n      "llm_path": "llm.json",\n      "output_key": "text",\n      "_type": "llm_chain"\n    }\n'))),(0,o.kt)("p",null,"We can then load it in the same way"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'chain = load_chain("llm_chain_separate.json")\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'chain.run("whats 2 + 2")\n')),(0,o.kt)(c,{lang:"python",mdxType:"CodeOutputBlock"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    \n    \n    > Entering new LLMChain chain...\n    Prompt after formatting:\n    Question: whats 2 + 2\n    \n    Answer: Let's think step by step.\n    \n    > Finished chain.\n\n\n\n\n\n    ' 2 + 2 = 4'\n"))))}d.isMDXComponent=!0}}]);