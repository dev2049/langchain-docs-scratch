"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[79945],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>h});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=o.createContext({}),l=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=l(e.components);return o.createElement(c.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(t),m=r,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return t?o.createElement(h,i(i({ref:n},p),{},{components:t})):o.createElement(h,i({ref:n},p))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},42452:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=t(87462),r=(t(67294),t(3905));const a={},i="Debugging chains",s={unversionedId:"modules/chains/how_to/debugging",id:"modules/chains/how_to/debugging",title:"Debugging chains",description:"It can be hard to debug a Chain object solely from its output as most Chain objects involve a fair amount of input prompt preprocessing and LLM output post-processing. Setting verbose to True will print out some internal states of the Chain object while it is being ran.",source:"@site/docs/modules/chains/how_to/debugging.mdx",sourceDirName:"modules/chains/how_to",slug:"/modules/chains/how_to/debugging",permalink:"/langchain-docs-scratch/docs/modules/chains/how_to/debugging",draft:!1,editUrl:"https://github.com/hwchase17/langchainjs/edit/main/docs/docs/modules/chains/how_to/debugging.mdx",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Custom chain",permalink:"/langchain-docs-scratch/docs/modules/chains/how_to/custom_chain"},next:{title:"Adding memory to chains",permalink:"/langchain-docs-scratch/docs/modules/chains/how_to/memory"}},c={},l=[],p=(u="CodeOutputBlock",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var u;const d={toc:l},m="wrapper";function h(e){let{components:n,...t}=e;return(0,r.kt)(m,(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"debugging-chains"},"Debugging chains"),(0,r.kt)("p",null,"It can be hard to debug a ",(0,r.kt)("inlineCode",{parentName:"p"},"Chain")," object solely from its output as most ",(0,r.kt)("inlineCode",{parentName:"p"},"Chain")," objects involve a fair amount of input prompt preprocessing and LLM output post-processing. Setting ",(0,r.kt)("inlineCode",{parentName:"p"},"verbose")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"True")," will print out some internal states of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Chain")," object while it is being ran."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'conversation = ConversationChain(\n    llm=chat,\n    memory=ConversationBufferMemory(),\n    verbose=True\n)\nconversation.run("What is ChatGPT?")\n')),(0,r.kt)(p,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\n\n    > Entering new ConversationChain chain...\n    Prompt after formatting:\n    The following is a friendly conversation between a human and an AI. The AI is talkative and provides lots of specific details from its context. If the AI does not know the answer to a question, it truthfully says it does not know.\n\n    Current conversation:\n\n    Human: What is ChatGPT?\n    AI:\n\n    > Finished chain.\n\n\n\n\n\n    'ChatGPT is an AI language model developed by OpenAI. It is based on the GPT-3 architecture and is capable of generating human-like responses to text prompts. ChatGPT has been trained on a massive amount of text data and can understand and respond to a wide range of topics. It is often used for chatbots, virtual assistants, and other conversational AI applications.'\n"))))}h.isMDXComponent=!0}}]);