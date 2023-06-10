"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[13209],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),m=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=m(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=m(n),u=a,g=p["".concat(s,".").concat(u)]||p[u]||d[u]||l;return n?o.createElement(g,r(r({ref:t},c),{},{components:n})):o.createElement(g,r({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,r=new Array(l);r[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:a,r[1]=i;for(var m=2;m<l;m++)r[m]=n[m];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},90109:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>g,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var o=n(87462),a=(n(67294),n(3905));const l={},r="Serialization",i={unversionedId:"modules/model_io/models/llms/how_to/llm_serialization",id:"modules/model_io/models/llms/how_to/llm_serialization",title:"Serialization",description:"This notebook walks through how to write and read an LLM Configuration to and from disk. This is useful if you want to save the configuration for a given LLM (e.g., the provider, the temperature, etc).",source:"@site/docs/modules/model_io/models/llms/how_to/llm_serialization.md",sourceDirName:"modules/model_io/models/llms/how_to",slug:"/modules/model_io/models/llms/how_to/llm_serialization",permalink:"/langchain-docs-scratch/docs/modules/model_io/models/llms/how_to/llm_serialization",draft:!1,editUrl:"https://github.com/hwchase17/langchainjs/edit/main/docs/docs/modules/model_io/models/llms/how_to/llm_serialization.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Caching",permalink:"/langchain-docs-scratch/docs/modules/model_io/models/llms/how_to/llm_caching"},next:{title:"Streaming",permalink:"/langchain-docs-scratch/docs/modules/model_io/models/llms/how_to/streaming_llm"}},s={},m=[{value:"Loading",id:"loading",level:2},{value:"Saving",id:"saving",level:2}],c=(p="CodeOutputBlock",function(e){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var p;const d={toc:m},u="wrapper";function g(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"serialization"},"Serialization"),(0,a.kt)("p",null,"This notebook walks through how to write and read an LLM Configuration to and from disk. This is useful if you want to save the configuration for a given LLM (e.g., the provider, the temperature, etc)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from langchain.llms import OpenAI\nfrom langchain.llms.loading import load_llm\n")),(0,a.kt)("h2",{id:"loading"},"Loading"),(0,a.kt)("p",null,"First, lets go over loading an LLM from disk. LLMs can be saved on disk in two formats: json or yaml. No matter the extension, they are loaded in the same way."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cat llm.json\n")),(0,a.kt)(c,{lang:"bash",mdxType:"CodeOutputBlock"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'    {\n        "model_name": "text-davinci-003",\n        "temperature": 0.7,\n        "max_tokens": 256,\n        "top_p": 1.0,\n        "frequency_penalty": 0.0,\n        "presence_penalty": 0.0,\n        "n": 1,\n        "best_of": 1,\n        "request_timeout": null,\n        "_type": "openai"\n    }\n'))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'llm = load_llm("llm.json")\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cat llm.yaml\n")),(0,a.kt)(c,{lang:"bash",mdxType:"CodeOutputBlock"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    _type: openai\n    best_of: 1\n    frequency_penalty: 0.0\n    max_tokens: 256\n    model_name: text-davinci-003\n    n: 1\n    presence_penalty: 0.0\n    request_timeout: null\n    temperature: 0.7\n    top_p: 1.0\n"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'llm = load_llm("llm.yaml")\n')),(0,a.kt)("h2",{id:"saving"},"Saving"),(0,a.kt)("p",null,"If you want to go from an LLM in memory to a serialized version of it, you can do so easily by calling the ",(0,a.kt)("inlineCode",{parentName:"p"},".save")," method. Again, this supports both json and yaml."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'llm.save("llm.json")\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'llm.save("llm.yaml")\n')))}g.isMDXComponent=!0}}]);