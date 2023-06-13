"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[25967],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>b});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=c(n),u=r,b=p["".concat(i,".").concat(u)]||p[u]||d[u]||l;return n?a.createElement(b,o(o({ref:t},m),{},{components:n})):a.createElement(b,o({ref:t},m))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<l;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},37964:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const l={},o="Beam",s={unversionedId:"modules/model_io/models/llms/integrations/beam",id:"modules/model_io/models/llms/integrations/beam",title:"Beam",description:"Calls the Beam API wrapper to deploy and make subsequent calls to an instance of the gpt2 LLM in a cloud deployment. Requires installation of the Beam library and registration of Beam Client ID and Client Secret. By calling the wrapper an instance of the model is created and run, with returned text relating to the prompt. Additional calls can then be made by directly calling the Beam API.",source:"@site/docs/modules/model_io/models/llms/integrations/beam.md",sourceDirName:"modules/model_io/models/llms/integrations",slug:"/modules/model_io/models/llms/integrations/beam",permalink:"/langchain-docs-scratch/docs/modules/model_io/models/llms/integrations/beam",draft:!1,editUrl:"https://github.com/hwchase17/langchainjs/edit/main/docs/docs/modules/model_io/models/llms/integrations/beam.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Banana",permalink:"/langchain-docs-scratch/docs/modules/model_io/models/llms/integrations/banana"},next:{title:"Bedrock",permalink:"/langchain-docs-scratch/docs/modules/model_io/models/llms/integrations/bedrock"}},i={},c=[],m={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"beam"},"Beam"),(0,r.kt)("p",null,"Calls the Beam API wrapper to deploy and make subsequent calls to an instance of the gpt2 LLM in a cloud deployment. Requires installation of the Beam library and registration of Beam Client ID and Client Secret. By calling the wrapper an instance of the model is created and run, with returned text relating to the prompt. Additional calls can then be made by directly calling the Beam API."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.beam.cloud/"},"Create an account"),", if you don't have one already. Grab your API keys from the ",(0,r.kt)("a",{parentName:"p",href:"https://www.beam.cloud/dashboard/settings/api-keys"},"dashboard"),"."),(0,r.kt)("p",null,"Install the Beam CLI"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl https://raw.githubusercontent.com/slai-labs/get-beam/main/get-beam.sh -sSfL | sh\n")),(0,r.kt)("p",null,"Register API Keys and set your beam client id and secret environment variables:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"import os\nimport subprocess\n\nbeam_client_id = \"<Your beam client id>\"\nbeam_client_secret = \"<Your beam client secret>\"\n\n# Set the environment variables\nos.environ['BEAM_CLIENT_ID'] = beam_client_id\nos.environ['BEAM_CLIENT_SECRET'] = beam_client_secret\n\n# Run the beam configure command\nbeam configure --clientId={beam_client_id} --clientSecret={beam_client_secret}\n")),(0,r.kt)("p",null,"Install the Beam SDK:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pip install beam-sdk\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Deploy and call Beam directly from langchain!")),(0,r.kt)("p",null,"Note that a cold start might take a couple of minutes to return the response, but subsequent calls will be faster!"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from langchain.llms.beam import Beam\n\nllm = Beam(model_name="gpt2",\n           name="langchain-gpt2-test",\n           cpu=8,\n           memory="32Gi",\n           gpu="A10G",\n           python_version="python3.8",\n           python_packages=[\n               "diffusers[torch]>=0.10",\n               "transformers",\n               "torch",\n               "pillow",\n               "accelerate",\n               "safetensors",\n               "xformers",],\n           max_length="50",\n           verbose=False)\n\nllm._deploy()\n\nresponse = llm._call("Running machine learning on a remote GPU")\n\nprint(response)\n')))}d.isMDXComponent=!0}}]);