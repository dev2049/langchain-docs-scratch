"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[97223],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>h});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),m=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=m(e.components);return a.createElement(s.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=m(t),u=o,h=c["".concat(s,".").concat(u)]||c[u]||d[u]||r;return t?a.createElement(h,i(i({ref:n},p),{},{components:t})):a.createElement(h,i({ref:n},p))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var m=2;m<r;m++)i[m]=t[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5930:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>m});var a=t(87462),o=(t(67294),t(3905));const r={},i="Manifest",l={unversionedId:"modules/model_io/models/llms/integrations/manifest",id:"modules/model_io/models/llms/integrations/manifest",title:"Manifest",description:"This notebook goes over how to use Manifest and LangChain.",source:"@site/docs/modules/model_io/models/llms/integrations/manifest.md",sourceDirName:"modules/model_io/models/llms/integrations",slug:"/modules/model_io/models/llms/integrations/manifest",permalink:"/langchain-docs-scratch/docs/modules/model_io/models/llms/integrations/manifest",draft:!1,editUrl:"https://github.com/hwchase17/langchainjs/edit/main/docs/docs/modules/model_io/models/llms/integrations/manifest.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Caching integrations",permalink:"/langchain-docs-scratch/docs/modules/model_io/models/llms/integrations/llm_caching"},next:{title:"Modal",permalink:"/langchain-docs-scratch/docs/modules/model_io/models/llms/integrations/modal"}},s={},m=[{value:"Compare HF Models",id:"compare-hf-models",level:2}],p=(c="CodeOutputBlock",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var c;const d={toc:m},u="wrapper";function h(e){let{components:n,...t}=e;return(0,o.kt)(u,(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"manifest"},"Manifest"),(0,o.kt)("p",null,"This notebook goes over how to use Manifest and LangChain."),(0,o.kt)("p",null,"For more detailed information on ",(0,o.kt)("inlineCode",{parentName:"p"},"manifest"),", and how to use it with local hugginface models like in this example, see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/HazyResearch/manifest"},"https://github.com/HazyResearch/manifest")),(0,o.kt)("p",null,"Another example of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/HazyResearch/manifest/blob/main/examples/langchain_chatgpt.ipynb"},"using Manifest with Langchain"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pip install manifest-ml\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from manifest import Manifest\nfrom langchain.llms.manifest import ManifestWrapper\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'manifest = Manifest(\n    client_name = "huggingface",\n    client_connection = "http://127.0.0.1:5000"\n)\nprint(manifest.client.get_model_params())\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'llm = ManifestWrapper(client=manifest, llm_kwargs={"temperature": 0.001, "max_tokens": 256})\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'# Map reduce example\nfrom langchain import PromptTemplate\nfrom langchain.text_splitter import CharacterTextSplitter\nfrom langchain.chains.mapreduce import MapReduceChain\n\n\n_prompt = """Write a concise summary of the following:\n\n\n{text}\n\n\nCONCISE SUMMARY:"""\nprompt = PromptTemplate(template=_prompt, input_variables=["text"])\n\ntext_splitter = CharacterTextSplitter()\n\nmp_chain = MapReduceChain.from_params(llm, prompt, text_splitter)\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"with open('../../../state_of_the_union.txt') as f:\n    state_of_the_union = f.read()\nmp_chain.run(state_of_the_union)\n")),(0,o.kt)(p,{lang:"python",mdxType:"CodeOutputBlock"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'    \'President Obama delivered his annual State of the Union address on Tuesday night, laying out his priorities for the coming year. Obama said the government will provide free flu vaccines to all Americans, ending the government shutdown and allowing businesses to reopen. The president also said that the government will continue to send vaccines to 112 countries, more than any other nation. "We have lost so much to COVID-19," Trump said. "Time with one another. And worst of all, so much loss of life." He said the CDC is working on a vaccine for kids under 5, and that the government will be ready with plenty of vaccines when they are available. Obama says the new guidelines are a "great step forward" and that the virus is no longer a threat. He says the government is launching a "Test to Treat" initiative that will allow people to get tested at a pharmacy and get antiviral pills on the spot at no cost. Obama says the new guidelines are a "great step forward" and that the virus is no longer a threat. He says the government will continue to send vaccines to 112 countries, more than any other nation. "We are coming for your\'\n'))),(0,o.kt)("h2",{id:"compare-hf-models"},"Compare HF Models"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from langchain.model_laboratory import ModelLaboratory\n\nmanifest1 = ManifestWrapper(\n    client=Manifest(\n        client_name="huggingface",\n        client_connection="http://127.0.0.1:5000"\n    ),\n    llm_kwargs={"temperature": 0.01}\n)\nmanifest2 = ManifestWrapper(\n    client=Manifest(\n        client_name="huggingface",\n        client_connection="http://127.0.0.1:5001"\n    ),\n    llm_kwargs={"temperature": 0.01}\n)\nmanifest3 = ManifestWrapper(\n    client=Manifest(\n        client_name="huggingface",\n        client_connection="http://127.0.0.1:5002"\n    ),\n    llm_kwargs={"temperature": 0.01}\n)\nllms = [manifest1, manifest2, manifest3]\nmodel_lab = ModelLaboratory(llms)\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'model_lab.compare("What color is a flamingo?")\n')),(0,o.kt)(p,{lang:"python",mdxType:"CodeOutputBlock"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    Input:\n    What color is a flamingo?\n    \n    ManifestWrapper\n    Params: {'model_name': 'bigscience/T0_3B', 'model_path': 'bigscience/T0_3B', 'temperature': 0.01}\n    pink\n    \n    ManifestWrapper\n    Params: {'model_name': 'EleutherAI/gpt-neo-125M', 'model_path': 'EleutherAI/gpt-neo-125M', 'temperature': 0.01}\n    A flamingo is a small, round\n    \n    ManifestWrapper\n    Params: {'model_name': 'google/flan-t5-xl', 'model_path': 'google/flan-t5-xl', 'temperature': 0.01}\n    pink\n    \n"))))}h.isMDXComponent=!0}}]);