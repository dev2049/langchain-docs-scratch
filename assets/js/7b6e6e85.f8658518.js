"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[34692],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>d});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=s(t),h=a,d=m["".concat(p,".").concat(h)]||m[h]||u[h]||o;return t?r.createElement(d,i(i({ref:n},l),{},{components:t})):r.createElement(d,i({ref:n},l))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=h;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c[m]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},46430:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var r=t(87462),a=(t(67294),t(3905));const o={},i="Async API",c={unversionedId:"modules/chains/how_to/async_chain",id:"modules/chains/how_to/async_chain",title:"Async API",description:"LangChain provides async support for Chains by leveraging the asyncio library.",source:"@site/docs/modules/chains/how_to/async_chain.md",sourceDirName:"modules/chains/how_to",slug:"/modules/chains/how_to/async_chain",permalink:"/langchain-docs-scratch/docs/modules/chains/how_to/async_chain",draft:!1,editUrl:"https://github.com/hwchase17/langchainjs/edit/main/docs/docs/modules/chains/how_to/async_chain.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"How to",permalink:"/langchain-docs-scratch/docs/modules/chains/how_to/"},next:{title:"Different call methods",permalink:"/langchain-docs-scratch/docs/modules/chains/how_to/call_methods"}},p={},s=[],l=(m="CodeOutputBlock",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var m;const u={toc:s},h="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(h,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"async-api"},"Async API"),(0,a.kt)("p",null,"LangChain provides async support for Chains by leveraging the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.python.org/3/library/asyncio.html"},"asyncio")," library."),(0,a.kt)("p",null,"Async methods are currently supported in ",(0,a.kt)("inlineCode",{parentName:"p"},"LLMChain")," (through ",(0,a.kt)("inlineCode",{parentName:"p"},"arun"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"apredict"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"acall"),") and ",(0,a.kt)("inlineCode",{parentName:"p"},"LLMMathChain")," (through ",(0,a.kt)("inlineCode",{parentName:"p"},"arun")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"acall"),"), ",(0,a.kt)("inlineCode",{parentName:"p"},"ChatVectorDBChain"),", and ",(0,a.kt)("a",{parentName:"p",href:"../index_examples/question_answering.ipynb"},"QA chains"),". Async support for other chains is on the roadmap."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import asyncio\nimport time\n\nfrom langchain.llms import OpenAI\nfrom langchain.prompts import PromptTemplate\nfrom langchain.chains import LLMChain\n\n\ndef generate_serially():\n    llm = OpenAI(temperature=0.9)\n    prompt = PromptTemplate(\n        input_variables=["product"],\n        template="What is a good name for a company that makes {product}?",\n    )\n    chain = LLMChain(llm=llm, prompt=prompt)\n    for _ in range(5):\n        resp = chain.run(product="toothpaste")\n        print(resp)\n\n\nasync def async_generate(chain):\n    resp = await chain.arun(product="toothpaste")\n    print(resp)\n\n\nasync def generate_concurrently():\n    llm = OpenAI(temperature=0.9)\n    prompt = PromptTemplate(\n        input_variables=["product"],\n        template="What is a good name for a company that makes {product}?",\n    )\n    chain = LLMChain(llm=llm, prompt=prompt)\n    tasks = [async_generate(chain) for _ in range(5)]\n    await asyncio.gather(*tasks)\n\ns = time.perf_counter()\n# If running this outside of Jupyter, use asyncio.run(generate_concurrently())\nawait generate_concurrently()\nelapsed = time.perf_counter() - s\nprint(\'\\033[1m\' + f"Concurrent executed in {elapsed:0.2f} seconds." + \'\\033[0m\')\n\ns = time.perf_counter()\ngenerate_serially()\nelapsed = time.perf_counter() - s\nprint(\'\\033[1m\' + f"Serial executed in {elapsed:0.2f} seconds." + \'\\033[0m\')\n')),(0,a.kt)(l,{lang:"python",mdxType:"CodeOutputBlock"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    \n    \n    BrightSmile Toothpaste Company\n    \n    \n    BrightSmile Toothpaste Co.\n    \n    \n    BrightSmile Toothpaste\n    \n    \n    Gleaming Smile Inc.\n    \n    \n    SparkleSmile Toothpaste\n    Concurrent executed in 1.54 seconds.\n    \n    \n    BrightSmile Toothpaste Co.\n    \n    \n    MintyFresh Toothpaste Co.\n    \n    \n    SparkleSmile Toothpaste.\n    \n    \n    Pearly Whites Toothpaste Co.\n    \n    \n    BrightSmile Toothpaste.\n    Serial executed in 6.38 seconds.\n"))))}d.isMDXComponent=!0}}]);