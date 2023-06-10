"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[30727],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>g});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),p=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(i.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(t),d=r,g=m["".concat(i,".").concat(d)]||m[d]||u[d]||o;return t?a.createElement(g,l(l({ref:n},c),{},{components:t})):a.createElement(g,l({ref:n},c))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=d;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[m]="string"==typeof e?e:r,l[1]=s;for(var p=2;p<o;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},90597:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=t(87462),r=(t(67294),t(3905));const o={},l="Banana",s={unversionedId:"modules/model_io/models/llms/integrations/banana",id:"modules/model_io/models/llms/integrations/banana",title:"Banana",description:"Banana is focused on building the machine learning infrastructure.",source:"@site/docs/modules/model_io/models/llms/integrations/banana.md",sourceDirName:"modules/model_io/models/llms/integrations",slug:"/modules/model_io/models/llms/integrations/banana",permalink:"/langchain-docs-scratch/docs/modules/model_io/models/llms/integrations/banana",draft:!1,editUrl:"https://github.com/hwchase17/langchainjs/edit/main/docs/docs/modules/model_io/models/llms/integrations/banana.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Azure OpenAI",permalink:"/langchain-docs-scratch/docs/modules/model_io/models/llms/integrations/azure_openai_example"},next:{title:"Beam integration for langchain",permalink:"/langchain-docs-scratch/docs/modules/model_io/models/llms/integrations/beam"}},i={},p=[],c={toc:p},m="wrapper";function u(e){let{components:n,...t}=e;return(0,r.kt)(m,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"banana"},"Banana"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.banana.dev/about-us"},"Banana")," is focused on building the machine learning infrastructure."),(0,r.kt)("p",null,"This example goes over how to use LangChain to interact with Banana models"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Install the package  https://docs.banana.dev/banana-docs/core-concepts/sdks/python\npip install banana-dev\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# get new tokens: https://app.banana.dev/\n# We need two tokens, not just an `api_key`: `BANANA_API_KEY` and `YOUR_MODEL_KEY`\n\nimport os\nfrom getpass import getpass\n\nos.environ["BANANA_API_KEY"] = "YOUR_API_KEY"\n# OR\n# BANANA_API_KEY = getpass()\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from langchain.llms import Banana\nfrom langchain import PromptTemplate, LLMChain\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'template = """Question: {question}\n\nAnswer: Let\'s think step by step."""\n\nprompt = PromptTemplate(template=template, input_variables=["question"])\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'llm = Banana(model_key="YOUR_MODEL_KEY")\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"llm_chain = LLMChain(prompt=prompt, llm=llm)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'question = "What NFL team won the Super Bowl in the year Justin Beiber was born?"\n\nllm_chain.run(question)\n')))}u.isMDXComponent=!0}}]);