"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[16632],{3905:(e,n,a)=>{a.d(n,{Zo:()=>c,kt:()=>h});var t=a(67294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function p(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=t.createContext({}),s=function(e){var n=t.useContext(i),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},c=function(e){var n=s(e.components);return t.createElement(i.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(a),d=r,h=m["".concat(i,".").concat(d)]||m[d]||u[d]||o;return a?t.createElement(h,l(l({ref:n},c),{},{components:a})):t.createElement(h,l({ref:n},c))}));function h(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var p={};for(var i in n)hasOwnProperty.call(n,i)&&(p[i]=n[i]);p.originalType=e,p[m]="string"==typeof e?e:r,l[1]=p;for(var s=2;s<o;s++)l[s]=a[s];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},10577:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var t=a(87462),r=(a(67294),a(3905));const o={},l="Model Comparison",p={unversionedId:"guides/model_laboratory",id:"guides/model_laboratory",title:"Model Comparison",description:"Constructing your language model application will likely involved choosing between many different options of prompts, models, and even chains to use. When doing so, you will want to compare these different options on different inputs in an easy, flexible, and intuitive way.",source:"@site/docs/guides/model_laboratory.md",sourceDirName:"guides",slug:"/guides/model_laboratory",permalink:"/langchain-docs-scratch/docs/guides/model_laboratory",draft:!1,editUrl:"https://github.com/hwchase17/langchainjs/edit/main/docs/docs/guides/model_laboratory.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"SQL Question Answering Benchmarking: Chinook",permalink:"/langchain-docs-scratch/docs/guides/evaluation/sql_qa_benchmarking_chinook"},next:{title:"Tracing",permalink:"/langchain-docs-scratch/docs/guides/tracing/"}},i={},s=[],c=(m="CodeOutputBlock",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var m;const u={toc:s},d="wrapper";function h(e){let{components:n,...a}=e;return(0,r.kt)(d,(0,t.Z)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"model-comparison"},"Model Comparison"),(0,r.kt)("p",null,"Constructing your language model application will likely involved choosing between many different options of prompts, models, and even chains to use. When doing so, you will want to compare these different options on different inputs in an easy, flexible, and intuitive way. "),(0,r.kt)("p",null,"LangChain provides the concept of a ModelLaboratory to test out and try different models."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from langchain import LLMChain, OpenAI, Cohere, HuggingFaceHub, PromptTemplate\nfrom langchain.model_laboratory import ModelLaboratory\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'llms = [\n    OpenAI(temperature=0), \n    Cohere(model="command-xlarge-20221108", max_tokens=20, temperature=0), \n    HuggingFaceHub(repo_id="google/flan-t5-xl", model_kwargs={"temperature":1})\n]\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"model_lab = ModelLaboratory.from_llms(llms)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'model_lab.compare("What color is a flamingo?")\n')),(0,r.kt)(c,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    Input:\n    What color is a flamingo?\n    \n    OpenAI\n    Params: {'model': 'text-davinci-002', 'temperature': 0.0, 'max_tokens': 256, 'top_p': 1, 'frequency_penalty': 0, 'presence_penalty': 0, 'n': 1, 'best_of': 1}\n    \n    \n    Flamingos are pink.\n    \n    Cohere\n    Params: {'model': 'command-xlarge-20221108', 'max_tokens': 20, 'temperature': 0.0, 'k': 0, 'p': 1, 'frequency_penalty': 0, 'presence_penalty': 0}\n    \n    \n    Pink\n    \n    HuggingFaceHub\n    Params: {'repo_id': 'google/flan-t5-xl', 'temperature': 1}\n    pink\n    \n"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'prompt = PromptTemplate(template="What is the capital of {state}?", input_variables=["state"])\nmodel_lab_with_prompt = ModelLaboratory.from_llms(llms, prompt=prompt)\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'model_lab_with_prompt.compare("New York")\n')),(0,r.kt)(c,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    Input:\n    New York\n    \n    OpenAI\n    Params: {'model': 'text-davinci-002', 'temperature': 0.0, 'max_tokens': 256, 'top_p': 1, 'frequency_penalty': 0, 'presence_penalty': 0, 'n': 1, 'best_of': 1}\n    \n    \n    The capital of New York is Albany.\n    \n    Cohere\n    Params: {'model': 'command-xlarge-20221108', 'max_tokens': 20, 'temperature': 0.0, 'k': 0, 'p': 1, 'frequency_penalty': 0, 'presence_penalty': 0}\n    \n    \n    The capital of New York is Albany.\n    \n    HuggingFaceHub\n    Params: {'repo_id': 'google/flan-t5-xl', 'temperature': 1}\n    st john s\n    \n"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from langchain import SelfAskWithSearchChain, SerpAPIWrapper\n\nopen_ai_llm = OpenAI(temperature=0)\nsearch = SerpAPIWrapper()\nself_ask_with_search_openai = SelfAskWithSearchChain(llm=open_ai_llm, search_chain=search, verbose=True)\n\ncohere_llm = Cohere(temperature=0, model="command-xlarge-20221108")\nsearch = SerpAPIWrapper()\nself_ask_with_search_cohere = SelfAskWithSearchChain(llm=cohere_llm, search_chain=search, verbose=True)\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"chains = [self_ask_with_search_openai, self_ask_with_search_cohere]\nnames = [str(open_ai_llm), str(cohere_llm)]\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"model_lab = ModelLaboratory(chains, names=names)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'model_lab.compare("What is the hometown of the reigning men\'s U.S. Open champion?")\n')),(0,r.kt)(c,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    Input:\n    What is the hometown of the reigning men's U.S. Open champion?\n    \n    OpenAI\n    Params: {'model': 'text-davinci-002', 'temperature': 0.0, 'max_tokens': 256, 'top_p': 1, 'frequency_penalty': 0, 'presence_penalty': 0, 'n': 1, 'best_of': 1}\n    \n    \n    > Entering new chain...\n    What is the hometown of the reigning men's U.S. Open champion?\n    Are follow up questions needed here: Yes.\n    Follow up: Who is the reigning men's U.S. Open champion?\n    Intermediate answer: Carlos Alcaraz.\n    Follow up: Where is Carlos Alcaraz from?\n    Intermediate answer: El Palmar, Spain.\n    So the final answer is: El Palmar, Spain\n    > Finished chain.\n    \n    So the final answer is: El Palmar, Spain\n    \n    Cohere\n    Params: {'model': 'command-xlarge-20221108', 'max_tokens': 256, 'temperature': 0.0, 'k': 0, 'p': 1, 'frequency_penalty': 0, 'presence_penalty': 0}\n    \n    \n    > Entering new chain...\n    What is the hometown of the reigning men's U.S. Open champion?\n    Are follow up questions needed here: Yes.\n    Follow up: Who is the reigning men's U.S. Open champion?\n    Intermediate answer: Carlos Alcaraz.\n    So the final answer is:\n    \n    Carlos Alcaraz\n    > Finished chain.\n    \n    So the final answer is:\n    \n    Carlos Alcaraz\n    \n"))))}h.isMDXComponent=!0}}]);