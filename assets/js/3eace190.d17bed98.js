"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[25967],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>g});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=c(t),u=r,g=p["".concat(s,".").concat(u)]||p[u]||d[u]||o;return t?a.createElement(g,l(l({ref:n},m),{},{components:t})):a.createElement(g,l({ref:n},m))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=u;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},37964:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=t(87462),r=(t(67294),t(3905));const o={},l="Beam integration for langchain",i={unversionedId:"modules/model_io/models/llms/integrations/beam",id:"modules/model_io/models/llms/integrations/beam",title:"Beam integration for langchain",description:"Calls the Beam API wrapper to deploy and make subsequent calls to an instance of the gpt2 LLM in a cloud deployment. Requires installation of the Beam library and registration of Beam Client ID and Client Secret. By calling the wrapper an instance of the model is created and run, with returned text relating to the prompt. Additional calls can then be made by directly calling the Beam API.",source:"@site/docs/modules/model_io/models/llms/integrations/beam.md",sourceDirName:"modules/model_io/models/llms/integrations",slug:"/modules/model_io/models/llms/integrations/beam",permalink:"/langchain-docs-scratch/docs/modules/model_io/models/llms/integrations/beam",draft:!1,editUrl:"https://github.com/hwchase17/langchainjs/edit/main/docs/docs/modules/model_io/models/llms/integrations/beam.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Banana",permalink:"/langchain-docs-scratch/docs/modules/model_io/models/llms/integrations/banana"},next:{title:"Bedrock",permalink:"/langchain-docs-scratch/docs/modules/model_io/models/llms/integrations/bedrock"}},s={},c=[],m={toc:c},p="wrapper";function d(e){let{components:n,...t}=e;return(0,r.kt)(p,(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"beam-integration-for-langchain"},"Beam integration for langchain"),(0,r.kt)("p",null,"Calls the Beam API wrapper to deploy and make subsequent calls to an instance of the gpt2 LLM in a cloud deployment. Requires installation of the Beam library and registration of Beam Client ID and Client Secret. By calling the wrapper an instance of the model is created and run, with returned text relating to the prompt. Additional calls can then be made by directly calling the Beam API."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.beam.cloud/"},"Create an account"),", if you don't have one already. Grab your API keys from the ",(0,r.kt)("a",{parentName:"p",href:"https://www.beam.cloud/dashboard/settings/api-keys"},"dashboard"),"."),(0,r.kt)("p",null,"Install the Beam CLI"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl https://raw.githubusercontent.com/slai-labs/get-beam/main/get-beam.sh -sSfL | sh\n")),(0,r.kt)("p",null,"Register API Keys and set your beam client id and secret environment variables:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"import os\nimport subprocess\n\nbeam_client_id = \"<Your beam client id>\"\nbeam_client_secret = \"<Your beam client secret>\"\n\n# Set the environment variables\nos.environ['BEAM_CLIENT_ID'] = beam_client_id\nos.environ['BEAM_CLIENT_SECRET'] = beam_client_secret\n\n# Run the beam configure command\nbeam configure --clientId={beam_client_id} --clientSecret={beam_client_secret}\n")),(0,r.kt)("p",null,"Install the Beam SDK:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pip install beam-sdk\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Deploy and call Beam directly from langchain!")),(0,r.kt)("p",null,"Note that a cold start might take a couple of minutes to return the response, but subsequent calls will be faster!"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from langchain.llms.beam import Beam\n\nllm = Beam(model_name="gpt2",\n           name="langchain-gpt2-test",\n           cpu=8,\n           memory="32Gi",\n           gpu="A10G",\n           python_version="python3.8",\n           python_packages=[\n               "diffusers[torch]>=0.10",\n               "transformers",\n               "torch",\n               "pillow",\n               "accelerate",\n               "safetensors",\n               "xformers",],\n           max_length="50",\n           verbose=False)\n\nllm._deploy()\n\nresponse = llm._call("Running machine learning on a remote GPU")\n\nprint(response)\n')))}d.isMDXComponent=!0}}]);