"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[97589],{3905:(e,n,r)=>{r.d(n,{Zo:()=>m,kt:()=>f});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=t.createContext({}),c=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},m=function(e){var n=c(e.components);return t.createElement(s.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=c(r),p=o,f=d["".concat(s,".").concat(p)]||d[p]||u[p]||a;return r?t.createElement(f,i(i({ref:n},m),{},{components:r})):t.createElement(f,i({ref:n},m))}));function f(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=p;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}p.displayName="MDXCreateElement"},11124:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var t=r(87462),o=(r(67294),r(3905));const a={},i="Bedrock",l={unversionedId:"modules/model_io/models/llms/integrations/bedrock",id:"modules/model_io/models/llms/integrations/bedrock",title:"Bedrock",description:"Amazon Bedrock is a fully managed service that makes FMs from leading AI startups and Amazon available via an API, so you can choose from a wide range of FMs to find the model that is best suited for your use case",source:"@site/docs/modules/model_io/models/llms/integrations/bedrock.md",sourceDirName:"modules/model_io/models/llms/integrations",slug:"/modules/model_io/models/llms/integrations/bedrock",permalink:"/langchain-docs-scratch/docs/modules/model_io/models/llms/integrations/bedrock",draft:!1,editUrl:"https://github.com/hwchase17/langchainjs/edit/main/docs/docs/modules/model_io/models/llms/integrations/bedrock.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Beam",permalink:"/langchain-docs-scratch/docs/modules/model_io/models/llms/integrations/beam"},next:{title:"CerebriumAI",permalink:"/langchain-docs-scratch/docs/modules/model_io/models/llms/integrations/cerebriumai_example"}},s={},c=[{value:"Using in a conversation chain",id:"using-in-a-conversation-chain",level:3}],m={toc:c},d="wrapper";function u(e){let{components:n,...r}=e;return(0,o.kt)(d,(0,t.Z)({},m,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"bedrock"},"Bedrock"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://aws.amazon.com/bedrock/"},"Amazon Bedrock")," is a fully managed service that makes FMs from leading AI startups and Amazon available via an API, so you can choose from a wide range of FMs to find the model that is best suited for your use case"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"%pip install boto3\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from langchain.llms.bedrock import Bedrock\n\nllm = Bedrock(credentials_profile_name="bedrock-admin", model_id="amazon.titan-tg1-large")\n')),(0,o.kt)("h3",{id:"using-in-a-conversation-chain"},"Using in a conversation chain"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from langchain.chains import ConversationChain\nfrom langchain.memory import ConversationBufferMemory\n\nconversation = ConversationChain(\n    llm=llm,\n    verbose=True,\n    memory=ConversationBufferMemory()\n)\n\nconversation.predict(input="Hi there!")\n')))}u.isMDXComponent=!0}}]);