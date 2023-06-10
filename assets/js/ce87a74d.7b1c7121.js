"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[79334],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>h});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),m=c(n),u=r,h=m["".concat(s,".").concat(u)]||m[u]||p[u]||a;return n?o.createElement(h,i(i({ref:t},l),{},{components:n})):o.createElement(h,i({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d[m]="string"==typeof e?e:r,i[1]=d;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},14099:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>d,toc:()=>c});var o=n(87462),r=(n(67294),n(3905));const a={},i="EverNote",d={unversionedId:"modules/data_io/document_loaders/integrations/evernote",id:"modules/data_io/document_loaders/integrations/evernote",title:"EverNote",description:'EverNote is intended for archiving and creating notes in which photos, audio and saved web content can be embedded. Notes are stored in virtual "notebooks" and can be tagged, annotated, edited, searched, and exported.',source:"@site/docs/modules/data_io/document_loaders/integrations/evernote.md",sourceDirName:"modules/data_io/document_loaders/integrations",slug:"/modules/data_io/document_loaders/integrations/evernote",permalink:"/langchain-docs-scratch/docs/modules/data_io/document_loaders/integrations/evernote",draft:!1,editUrl:"https://github.com/hwchase17/langchainjs/edit/main/docs/docs/modules/data_io/document_loaders/integrations/evernote.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"EPub",permalink:"/langchain-docs-scratch/docs/modules/data_io/document_loaders/integrations/epub"},next:{title:"Notebook",permalink:"/langchain-docs-scratch/docs/modules/data_io/document_loaders/integrations/example_data/notebook"}},s={},c=[],l=(m="CodeOutputBlock",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var m;const p={toc:c},u="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"evernote"},"EverNote"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://evernote.com/"},"EverNote"),' is intended for archiving and creating notes in which photos, audio and saved web content can be embedded. Notes are stored in virtual "notebooks" and can be tagged, annotated, edited, searched, and exported.')),(0,r.kt)("p",null,"This notebook shows how to load an ",(0,r.kt)("inlineCode",{parentName:"p"},"Evernote")," ",(0,r.kt)("a",{parentName:"p",href:"https://help.evernote.com/hc/en-us/articles/209005557-Export-notes-and-notebooks-as-ENEX-or-HTML"},"export")," file (.enex) from disk."),(0,r.kt)("p",null,"A document will be created for each note in the export."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# lxml and html2text are required to parse EverNote notes\n# !pip install lxml\n# !pip install html2text\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from langchain.document_loaders import EverNoteLoader\n\n# By default all notes are combined into a single Document\nloader = EverNoteLoader("example_data/testing.enex")\nloader.load()\n')),(0,r.kt)(l,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    [Document(page_content='testing this\\n\\nwhat happens?\\n\\nto the world?**Jan - March 2022**', metadata={'source': 'example_data/testing.enex'})]\n"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# It\'s likely more useful to return a Document for each note\nloader = EverNoteLoader("example_data/testing.enex", load_single_document=False)\nloader.load()\n')),(0,r.kt)(l,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    [Document(page_content='testing this\\n\\nwhat happens?\\n\\nto the world?', metadata={'title': 'testing', 'created': time.struct_time(tm_year=2023, tm_mon=2, tm_mday=9, tm_hour=3, tm_min=47, tm_sec=46, tm_wday=3, tm_yday=40, tm_isdst=-1), 'updated': time.struct_time(tm_year=2023, tm_mon=2, tm_mday=9, tm_hour=3, tm_min=53, tm_sec=28, tm_wday=3, tm_yday=40, tm_isdst=-1), 'note-attributes.author': 'Harrison Chase', 'source': 'example_data/testing.enex'}),\n     Document(page_content='**Jan - March 2022**', metadata={'title': 'Summer Training Program', 'created': time.struct_time(tm_year=2022, tm_mon=12, tm_mday=27, tm_hour=1, tm_min=59, tm_sec=48, tm_wday=1, tm_yday=361, tm_isdst=-1), 'note-attributes.author': 'Mike McGarry', 'note-attributes.source': 'mobile.iphone', 'source': 'example_data/testing.enex'})]\n"))))}h.isMDXComponent=!0}}]);