"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[29853],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=o.createContext({}),p=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return o.createElement(i.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=p(n),d=r,h=c["".concat(i,".").concat(d)]||c[d]||u[d]||a;return n?o.createElement(h,l(l({ref:t},m),{},{components:n})):o.createElement(h,l({ref:t},m))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[c]="string"==typeof e?e:r,l[1]=s;for(var p=2;p<a;p++)l[p]=n[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},21455:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var o=n(87462),r=(n(67294),n(3905));const a={},l="Custom LLM",s={unversionedId:"modules/model_io/models/llms/how_to/custom_llm",id:"modules/model_io/models/llms/how_to/custom_llm",title:"Custom LLM",description:"This notebook goes over how to create a custom LLM wrapper, in case you want to use your own LLM or a different wrapper than one that is supported in LangChain.",source:"@site/docs/modules/model_io/models/llms/how_to/custom_llm.md",sourceDirName:"modules/model_io/models/llms/how_to",slug:"/modules/model_io/models/llms/how_to/custom_llm",permalink:"/langchain-docs-scratch/docs/modules/model_io/models/llms/how_to/custom_llm",draft:!1,editUrl:"https://github.com/hwchase17/langchainjs/edit/main/docs/docs/modules/model_io/models/llms/how_to/custom_llm.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Async API",permalink:"/langchain-docs-scratch/docs/modules/model_io/models/llms/how_to/async_llm"},next:{title:"Fake LLM",permalink:"/langchain-docs-scratch/docs/modules/model_io/models/llms/how_to/fake_llm"}},i={},p=[],m=(c="CodeOutputBlock",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var c;const u={toc:p},d="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"custom-llm"},"Custom LLM"),(0,r.kt)("p",null,"This notebook goes over how to create a custom LLM wrapper, in case you want to use your own LLM or a different wrapper than one that is supported in LangChain."),(0,r.kt)("p",null,"There is only one required thing that a custom LLM needs to implement:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"A ",(0,r.kt)("inlineCode",{parentName:"li"},"_call")," method that takes in a string, some optional stop words, and returns a string")),(0,r.kt)("p",null,"There is a second optional thing it can implement:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"An ",(0,r.kt)("inlineCode",{parentName:"li"},"_identifying_params")," property that is used to help with printing of this class. Should return a dictionary.")),(0,r.kt)("p",null,"Let's implement a very simple custom LLM that just returns the first N characters of the input."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from typing import Any, List, Mapping, Optional\n\nfrom langchain.callbacks.manager import CallbackManagerForLLMRun\nfrom langchain.llms.base import LLM\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'class CustomLLM(LLM):\n    \n    n: int\n        \n    @property\n    def _llm_type(self) -> str:\n        return "custom"\n    \n    def _call(\n        self,\n        prompt: str,\n        stop: Optional[List[str]] = None,\n        run_manager: Optional[CallbackManagerForLLMRun] = None,\n    ) -> str:\n        if stop is not None:\n            raise ValueError("stop kwargs are not permitted.")\n        return prompt[:self.n]\n    \n    @property\n    def _identifying_params(self) -> Mapping[str, Any]:\n        """Get the identifying parameters."""\n        return {"n": self.n}\n')),(0,r.kt)("p",null,"We can now use this as an any other LLM."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"llm = CustomLLM(n=10)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'llm("This is a foobar thing")\n')),(0,r.kt)(m,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    'This is a '\n"))),(0,r.kt)("p",null,"We can also print the LLM and see its custom print."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"print(llm)\n")),(0,r.kt)(m,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    CustomLLM\n    Params: {'n': 10}\n"))))}h.isMDXComponent=!0}}]);