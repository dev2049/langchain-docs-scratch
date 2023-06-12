"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[71747],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,h=p["".concat(l,".").concat(m)]||p[m]||u[m]||o;return n?r.createElement(h,s(s({ref:t},d),{},{components:n})):r.createElement(h,s({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},61122:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>g,frontMatter:()=>d,metadata:()=>u,toc:()=>h});var r=n(87462),a=(n(67294),n(3905));const o=(s="CodeOutputBlock",function(e){return console.warn("Component "+s+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var s;const i={toc:[]},l="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(l,(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"# This is a long document we can split up.\nwith open('../../../state_of_the_union.txt') as f:\n    state_of_the_union = f.read()\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'from langchain.text_splitter import CharacterTextSplitter\ntext_splitter = CharacterTextSplitter(        \n    separator = "\\n\\n",\n    chunk_size = 1000,\n    chunk_overlap  = 200,\n    length_function = len,\n)\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"texts = text_splitter.create_documents([state_of_the_union])\nprint(texts[0])\n")),(0,a.kt)(o,{lang:"python",mdxType:"CodeOutputBlock"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    page_content='Madam Speaker, Madam Vice President, our First Lady and Second Gentleman. Members of Congress and the Cabinet. Justices of the Supreme Court. My fellow Americans.  \\n\\nLast year COVID-19 kept us apart. This year we are finally together again. \\n\\nTonight, we meet as Democrats Republicans and Independents. But most importantly as Americans. \\n\\nWith a duty to one another to the American people to the Constitution. \\n\\nAnd with an unwavering resolve that freedom will always triumph over tyranny. \\n\\nSix days ago, Russia\u2019s Vladimir Putin sought to shake the foundations of the free world thinking he could make it bend to his menacing ways. But he badly miscalculated. \\n\\nHe thought he could roll into Ukraine and the world would roll over. Instead he met a wall of strength he never imagined. \\n\\nHe met the Ukrainian people. \\n\\nFrom President Zelenskyy to every Ukrainian, their fearlessness, their courage, their determination, inspires the world.' lookup_str='' metadata={} lookup_index=0\n"))),(0,a.kt)("p",null,"Here's an example of passing metadata along with the documents, notice that it is split along with the documents."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'metadatas = [{"document": 1}, {"document": 2}]\ndocuments = text_splitter.create_documents([state_of_the_union, state_of_the_union], metadatas=metadatas)\nprint(documents[0])\n')),(0,a.kt)(o,{lang:"python",mdxType:"CodeOutputBlock"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    page_content='Madam Speaker, Madam Vice President, our First Lady and Second Gentleman. Members of Congress and the Cabinet. Justices of the Supreme Court. My fellow Americans.  \\n\\nLast year COVID-19 kept us apart. This year we are finally together again. \\n\\nTonight, we meet as Democrats Republicans and Independents. But most importantly as Americans. \\n\\nWith a duty to one another to the American people to the Constitution. \\n\\nAnd with an unwavering resolve that freedom will always triumph over tyranny. \\n\\nSix days ago, Russia\u2019s Vladimir Putin sought to shake the foundations of the free world thinking he could make it bend to his menacing ways. But he badly miscalculated. \\n\\nHe thought he could roll into Ukraine and the world would roll over. Instead he met a wall of strength he never imagined. \\n\\nHe met the Ukrainian people. \\n\\nFrom President Zelenskyy to every Ukrainian, their fearlessness, their courage, their determination, inspires the world.' lookup_str='' metadata={'document': 1} lookup_index=0\n"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"text_splitter.split_text(state_of_the_union)[0]\n")),(0,a.kt)(o,{lang:"python",mdxType:"CodeOutputBlock"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    'Madam Speaker, Madam Vice President, our First Lady and Second Gentleman. Members of Congress and the Cabinet. Justices of the Supreme Court. My fellow Americans.  \\n\\nLast year COVID-19 kept us apart. This year we are finally together again. \\n\\nTonight, we meet as Democrats Republicans and Independents. But most importantly as Americans. \\n\\nWith a duty to one another to the American people to the Constitution. \\n\\nAnd with an unwavering resolve that freedom will always triumph over tyranny. \\n\\nSix days ago, Russia\u2019s Vladimir Putin sought to shake the foundations of the free world thinking he could make it bend to his menacing ways. But he badly miscalculated. \\n\\nHe thought he could roll into Ukraine and the world would roll over. Instead he met a wall of strength he never imagined. \\n\\nHe met the Ukrainian people. \\n\\nFrom President Zelenskyy to every Ukrainian, their fearlessness, their courage, their determination, inspires the world.'\n"))))}c.isMDXComponent=!0;const d={},p="Split by character",u={unversionedId:"modules/data_io/document_transformers/text_splitters/character_text_splitter",id:"modules/data_io/document_transformers/text_splitters/character_text_splitter",title:"Split by character",description:'This is the simplest method. This splits based on characters (by default "\\n\\n") and measure chunk length by number of characters.',source:"@site/docs/modules/data_io/document_transformers/text_splitters/character_text_splitter.mdx",sourceDirName:"modules/data_io/document_transformers/text_splitters",slug:"/modules/data_io/document_transformers/text_splitters/character_text_splitter",permalink:"/langchain-docs-scratch/docs/modules/data_io/document_transformers/text_splitters/character_text_splitter",draft:!1,editUrl:"https://github.com/hwchase17/langchainjs/edit/main/docs/docs/modules/data_io/document_transformers/text_splitters/character_text_splitter.mdx",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Document transformers",permalink:"/langchain-docs-scratch/docs/modules/data_io/document_transformers/"},next:{title:"Split code",permalink:"/langchain-docs-scratch/docs/modules/data_io/document_transformers/text_splitters/code_splitter"}},m={},h=[],y={toc:h},f="wrapper";function g(e){let{components:t,...n}=e;return(0,a.kt)(f,(0,r.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"split-by-character"},"Split by character"),(0,a.kt)("p",null,'This is the simplest method. This splits based on characters (by default "\\n\\n") and measure chunk length by number of characters.'),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"How the text is split: by single character"),(0,a.kt)("li",{parentName:"ol"},"How the chunk size is measured: by number of characters")),(0,a.kt)(c,{mdxType:"Example"}))}g.isMDXComponent=!0}}]);