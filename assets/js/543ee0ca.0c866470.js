"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[93567],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),s=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},m=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=s(n),d=r,h=c["".concat(l,".").concat(d)]||c[d]||u[d]||a;return n?o.createElement(h,p(p({ref:t},m),{},{components:n})):o.createElement(h,p({ref:t},m))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,p=new Array(a);p[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:r,p[1]=i;for(var s=2;s<a;s++)p[s]=n[s];return o.createElement.apply(null,p)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},12211:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>g,frontMatter:()=>m,metadata:()=>u,toc:()=>h});var o=n(87462),r=(n(67294),n(3905));const a=(p="CodeOutputBlock",function(e){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var p;const i={toc:[]},l="wrapper";function s(e){let{components:t,...n}=e;return(0,r.kt)(l,(0,o.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from langchain.prompts.example_selector import SemanticSimilarityExampleSelector\nfrom langchain.vectorstores import Chroma\nfrom langchain.embeddings import OpenAIEmbeddings\nfrom langchain.prompts import FewShotPromptTemplate, PromptTemplate\n\nexample_prompt = PromptTemplate(\n    input_variables=["input", "output"],\n    template="Input: {input}\\nOutput: {output}",\n)\n\n# These are a lot of examples of a pretend task of creating antonyms.\nexamples = [\n    {"input": "happy", "output": "sad"},\n    {"input": "tall", "output": "short"},\n    {"input": "energetic", "output": "lethargic"},\n    {"input": "sunny", "output": "gloomy"},\n    {"input": "windy", "output": "calm"},\n]\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'example_selector = SemanticSimilarityExampleSelector.from_examples(\n    # This is the list of examples available to select from.\n    examples, \n    # This is the embedding class used to produce embeddings which are used to measure semantic similarity.\n    OpenAIEmbeddings(), \n    # This is the VectorStore class that is used to store the embeddings and do a similarity search over.\n    Chroma, \n    # This is the number of examples to produce.\n    k=1\n)\nsimilar_prompt = FewShotPromptTemplate(\n    # We provide an ExampleSelector instead of examples.\n    example_selector=example_selector,\n    example_prompt=example_prompt,\n    prefix="Give the antonym of every input",\n    suffix="Input: {adjective}\\nOutput:", \n    input_variables=["adjective"],\n)\n')),(0,r.kt)(a,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    Running Chroma using direct local API.\n    Using DuckDB in-memory for database. Data will be transient.\n"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# Input is a feeling, so should select the happy/sad example\nprint(similar_prompt.format(adjective="worried"))\n')),(0,r.kt)(a,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    Give the antonym of every input\n    \n    Input: happy\n    Output: sad\n    \n    Input: worried\n    Output:\n"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# Input is a measurement, so should select the tall/short example\nprint(similar_prompt.format(adjective="fat"))\n')),(0,r.kt)(a,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    Give the antonym of every input\n    \n    Input: happy\n    Output: sad\n    \n    Input: fat\n    Output:\n"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# You can add new examples to the SemanticSimilarityExampleSelector as well\nsimilar_prompt.example_selector.add_example({"input": "enthusiastic", "output": "apathetic"})\nprint(similar_prompt.format(adjective="joyful"))\n')),(0,r.kt)(a,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    Give the antonym of every input\n    \n    Input: happy\n    Output: sad\n    \n    Input: joyful\n    Output:\n"))))}s.isMDXComponent=!0;const m={},c="Select by similarity",u={unversionedId:"modules/model_io/prompts/example_selectors/how_to/similarity",id:"modules/model_io/prompts/example_selectors/how_to/similarity",title:"Select by similarity",description:"This object selects examples based on similarity to the inputs. It does this by finding the examples with the embeddings that have the greatest cosine similarity with the inputs.",source:"@site/docs/modules/model_io/prompts/example_selectors/how_to/similarity.mdx",sourceDirName:"modules/model_io/prompts/example_selectors/how_to",slug:"/modules/model_io/prompts/example_selectors/how_to/similarity",permalink:"/langchain-docs-scratch/docs/modules/model_io/prompts/example_selectors/how_to/similarity",draft:!1,editUrl:"https://github.com/hwchase17/langchainjs/edit/main/docs/docs/modules/model_io/prompts/example_selectors/how_to/similarity.mdx",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Select by n-gram overlap",permalink:"/langchain-docs-scratch/docs/modules/model_io/prompts/example_selectors/how_to/ngram_overlap"},next:{title:"Output parsers",permalink:"/langchain-docs-scratch/docs/modules/model_io/output_parsers/"}},d={},h=[],y={toc:h},f="wrapper";function g(e){let{components:t,...n}=e;return(0,r.kt)(f,(0,o.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"select-by-similarity"},"Select by similarity"),(0,r.kt)("p",null,"This object selects examples based on similarity to the inputs. It does this by finding the examples with the embeddings that have the greatest cosine similarity with the inputs."),(0,r.kt)(s,{mdxType:"Example"}))}g.isMDXComponent=!0}}]);