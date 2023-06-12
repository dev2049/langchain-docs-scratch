"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1785],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>h});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=o.createContext({}),l=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=l(e.components);return o.createElement(c.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=l(t),u=r,h=p["".concat(c,".").concat(u)]||p[u]||d[u]||a;return t?o.createElement(h,i(i({ref:n},m),{},{components:t})):o.createElement(h,i({ref:n},m))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=u;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},93717:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=t(87462),r=(t(67294),t(3905));const a={},i="Adding memory to chains",s={unversionedId:"modules/chains/how_to/memory",id:"modules/chains/how_to/memory",title:"Adding memory to chains",description:"Chain supports taking a BaseMemory object as its memory argument, allowing Chain object to persist data across multiple calls. In other words, it makes Chain a stateful object.",source:"@site/docs/modules/chains/how_to/memory.mdx",sourceDirName:"modules/chains/how_to",slug:"/modules/chains/how_to/memory",permalink:"/langchain-docs-scratch/docs/modules/chains/how_to/memory",draft:!1,editUrl:"https://github.com/hwchase17/langchainjs/edit/main/docs/docs/modules/chains/how_to/memory.mdx",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Debugging chains",permalink:"/langchain-docs-scratch/docs/modules/chains/how_to/debugging"},next:{title:"Serialization",permalink:"/langchain-docs-scratch/docs/modules/chains/how_to/serialization"}},c={},l=[],m=(p="CodeOutputBlock",function(e){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var p;const d={toc:l},u="wrapper";function h(e){let{components:n,...t}=e;return(0,r.kt)(u,(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"adding-memory-to-chains"},"Adding memory to chains"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Chain")," supports taking a ",(0,r.kt)("inlineCode",{parentName:"p"},"BaseMemory")," object as its ",(0,r.kt)("inlineCode",{parentName:"p"},"memory")," argument, allowing ",(0,r.kt)("inlineCode",{parentName:"p"},"Chain")," object to persist data across multiple calls. In other words, it makes ",(0,r.kt)("inlineCode",{parentName:"p"},"Chain")," a stateful object."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from langchain.chains import ConversationChain\nfrom langchain.memory import ConversationBufferMemory\n\nconversation = ConversationChain(\n    llm=chat,\n    memory=ConversationBufferMemory()\n)\n\nconversation.run("Answer briefly. What are the first 3 colors of a rainbow?")\n# -> The first three colors of a rainbow are red, orange, and yellow.\nconversation.run("And the next 4?")\n# -> The next four colors of a rainbow are green, blue, indigo, and violet.\n')),(0,r.kt)(m,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    'The next four colors of a rainbow are green, blue, indigo, and violet.'\n"))),(0,r.kt)("p",null,"Essentially, ",(0,r.kt)("inlineCode",{parentName:"p"},"BaseMemory")," defines an interface of how ",(0,r.kt)("inlineCode",{parentName:"p"},"langchain")," stores memory. It allows reading of stored data through ",(0,r.kt)("inlineCode",{parentName:"p"},"load_memory_variables")," method and storing new data through ",(0,r.kt)("inlineCode",{parentName:"p"},"save_context")," method. You can learn more about it in ",(0,r.kt)("a",{parentName:"p",href:"../memory.html"},"Memory")," section."))}h.isMDXComponent=!0}}]);