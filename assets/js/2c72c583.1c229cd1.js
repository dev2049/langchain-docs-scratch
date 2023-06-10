"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[87317],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>g});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=o.createContext({}),p=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return o.createElement(s.Provider,{value:n},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(t),u=r,g=m["".concat(s,".").concat(u)]||m[u]||d[u]||a;return t?o.createElement(g,i(i({ref:n},c),{},{components:t})):o.createElement(g,i({ref:n},c))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[m]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=t[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},679:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var o=t(87462),r=(t(67294),t(3905));const a={},i="OpenLM",l={unversionedId:"modules/model_io/models/llms/integrations/openlm",id:"modules/model_io/models/llms/integrations/openlm",title:"OpenLM",description:"OpenLM is a zero-dependency OpenAI-compatible LLM provider that can call different inference endpoints directly via HTTP.",source:"@site/docs/modules/model_io/models/llms/integrations/openlm.md",sourceDirName:"modules/model_io/models/llms/integrations",slug:"/modules/model_io/models/llms/integrations/openlm",permalink:"/langchain-docs-scratch/docs/modules/model_io/models/llms/integrations/openlm",draft:!1,editUrl:"https://github.com/hwchase17/langchainjs/edit/main/docs/docs/modules/model_io/models/llms/integrations/openlm.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"OpenAI",permalink:"/langchain-docs-scratch/docs/modules/model_io/models/llms/integrations/openai"},next:{title:"Petals",permalink:"/langchain-docs-scratch/docs/modules/model_io/models/llms/integrations/petals_example"}},s={},p=[{value:"Setup",id:"setup",level:3},{value:"Using LangChain with OpenLM",id:"using-langchain-with-openlm",level:3}],c=(m="CodeOutputBlock",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var m;const d={toc:p},u="wrapper";function g(e){let{components:n,...t}=e;return(0,r.kt)(u,(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"openlm"},"OpenLM"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/r2d4/openlm"},"OpenLM")," is a zero-dependency OpenAI-compatible LLM provider that can call different inference endpoints directly via HTTP. "),(0,r.kt)("p",null,"It implements the OpenAI Completion class so that it can be used as a drop-in replacement for the OpenAI API. This changeset utilizes BaseOpenAI for minimal added code."),(0,r.kt)("p",null,"This examples goes over how to use LangChain to interact with both OpenAI and HuggingFace. You'll need API keys from both."),(0,r.kt)("h3",{id:"setup"},"Setup"),(0,r.kt)("p",null,"Install dependencies and set API keys."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# Uncomment to install openlm and openai if you haven't already\n\n# !pip install openlm\n# !pip install openai\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from getpass import getpass\nimport os\nimport subprocess\n\n\n# Check if OPENAI_API_KEY environment variable is set\nif "OPENAI_API_KEY" not in os.environ:\n    print("Enter your OpenAI API key:")\n    os.environ["OPENAI_API_KEY"] = getpass()\n\n# Check if HF_API_TOKEN environment variable is set\nif "HF_API_TOKEN" not in os.environ:\n    print("Enter your HuggingFace Hub API key:")\n    os.environ["HF_API_TOKEN"] = getpass()\n')),(0,r.kt)("h3",{id:"using-langchain-with-openlm"},"Using LangChain with OpenLM"),(0,r.kt)("p",null,"Here we're going to call two models in an LLMChain, ",(0,r.kt)("inlineCode",{parentName:"p"},"text-davinci-003")," from OpenAI and ",(0,r.kt)("inlineCode",{parentName:"p"},"gpt2")," on HuggingFace."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from langchain.llms import OpenLM\nfrom langchain import PromptTemplate, LLMChain\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'question = "What is the capital of France?"\ntemplate = """Question: {question}\n\nAnswer: Let\'s think step by step."""\n\nprompt = PromptTemplate(template=template, input_variables=["question"])\n\nfor model in ["text-davinci-003", "huggingface.co/gpt2"]:\n    llm = OpenLM(model=model)\n    llm_chain = LLMChain(prompt=prompt, llm=llm)\n    result = llm_chain.run(question)\n    print("""Model: {}\nResult: {}""".format(model, result))\n')),(0,r.kt)(c,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    Model: text-davinci-003\n    Result:  France is a country in Europe. The capital of France is Paris.\n    Model: huggingface.co/gpt2\n    Result: Question: What is the capital of France?\n    \n    Answer: Let's think step by step. I am not going to lie, this is a complicated issue, and I don't see any solutions to all this, but it is still far more\n"))))}g.isMDXComponent=!0}}]);