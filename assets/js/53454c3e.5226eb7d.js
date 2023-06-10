"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[62717],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=o.createContext({}),c=function(e){var t=o.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},l=function(e){var t=c(e.components);return o.createElement(u.Provider,{value:t},e.children)},i="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),i=c(r),d=n,f=i["".concat(u,".").concat(d)]||i[d]||m[d]||a;return r?o.createElement(f,p(p({ref:t},l),{},{components:r})):o.createElement(f,p({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,p=new Array(a);p[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[i]="string"==typeof e?e:n,p[1]=s;for(var c=2;c<a;c++)p[c]=r[c];return o.createElement.apply(null,p)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},89972:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>_,frontMatter:()=>l,metadata:()=>m,toc:()=>f});var o=r(87462),n=(r(67294),r(3905));const a=(p="CodeOutputBlock",function(e){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",e)});var p;const s={toc:[]},u="wrapper";function c(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,o.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"from langchain.output_parsers import CommaSeparatedListOutputParser\nfrom langchain.prompts import PromptTemplate, ChatPromptTemplate, HumanMessagePromptTemplate\nfrom langchain.llms import OpenAI\nfrom langchain.chat_models import ChatOpenAI\n\noutput_parser = CommaSeparatedListOutputParser()\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'format_instructions = output_parser.get_format_instructions()\nprompt = PromptTemplate(\n    template="List five {subject}.\\n{format_instructions}",\n    input_variables=["subject"],\n    partial_variables={"format_instructions": format_instructions}\n)\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"model = OpenAI(temperature=0)\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'_input = prompt.format(subject="ice cream flavors")\noutput = model(_input)\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"output_parser.parse(output)\n")),(0,n.kt)(a,{lang:"python",mdxType:"CodeOutputBlock"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"    ['Vanilla',\n     'Chocolate',\n     'Strawberry',\n     'Mint Chocolate Chip',\n     'Cookies and Cream']\n"))))}c.isMDXComponent=!0;const l={},i="List parser",m={unversionedId:"modules/model_io/output_parsers/how_to/comma_separated",id:"modules/model_io/output_parsers/how_to/comma_separated",title:"List parser",description:"This output parser can be used when you want to return a list of comma-separated items.",source:"@site/docs/modules/model_io/output_parsers/how_to/comma_separated.mdx",sourceDirName:"modules/model_io/output_parsers/how_to",slug:"/modules/model_io/output_parsers/how_to/comma_separated",permalink:"/langchain-docs-scratch/docs/modules/model_io/output_parsers/how_to/comma_separated",draft:!1,editUrl:"https://github.com/hwchase17/langchainjs/edit/main/docs/docs/modules/model_io/output_parsers/how_to/comma_separated.mdx",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Output parsers",permalink:"/langchain-docs-scratch/docs/modules/model_io/output_parsers/"},next:{title:"Datetime parser",permalink:"/langchain-docs-scratch/docs/modules/model_io/output_parsers/how_to/datetime"}},d={},f=[],h={toc:f},y="wrapper";function _(e){let{components:t,...r}=e;return(0,n.kt)(y,(0,o.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"list-parser"},"List parser"),(0,n.kt)("p",null,"This output parser can be used when you want to return a list of comma-separated items."),(0,n.kt)(c,{mdxType:"Example"}))}_.isMDXComponent=!0}}]);