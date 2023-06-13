"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[24746],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>p});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),s=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=s(e.components);return a.createElement(i.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},y=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),m=s(t),y=r,p=m["".concat(i,".").concat(y)]||m[y]||u[y]||o;return t?a.createElement(p,l(l({ref:n},d),{},{components:t})):a.createElement(p,l({ref:n},d))}));function p(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=y;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c[m]="string"==typeof e?e:r,l[1]=c;for(var s=2;s<o;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}y.displayName="MDXCreateElement"},59641:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var a=t(87462),r=(t(67294),t(3905));const o={},l="AZLyrics",c={unversionedId:"modules/data_io/document_loaders/integrations/azlyrics",id:"modules/data_io/document_loaders/integrations/azlyrics",title:"AZLyrics",description:"AZLyrics is a large, legal, every day growing collection of lyrics.",source:"@site/docs/modules/data_io/document_loaders/integrations/azlyrics.md",sourceDirName:"modules/data_io/document_loaders/integrations",slug:"/modules/data_io/document_loaders/integrations/azlyrics",permalink:"/langchain-docs-scratch/docs/modules/data_io/document_loaders/integrations/azlyrics",draft:!1,editUrl:"https://github.com/hwchase17/langchainjs/edit/main/docs/docs/modules/data_io/document_loaders/integrations/azlyrics.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"AWS S3 File",permalink:"/langchain-docs-scratch/docs/modules/data_io/document_loaders/integrations/aws_s3_file"},next:{title:"Azure Blob Storage Container",permalink:"/langchain-docs-scratch/docs/modules/data_io/document_loaders/integrations/azure_blob_storage_container"}},i={},s=[],d=(m="CodeOutputBlock",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var m;const u={toc:s},y="wrapper";function p(e){let{components:n,...t}=e;return(0,r.kt)(y,(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"azlyrics"},"AZLyrics"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://www.azlyrics.com/"},"AZLyrics")," is a large, legal, every day growing collection of lyrics.")),(0,r.kt)("p",null,"This covers how to load AZLyrics webpages into a document format that we can use downstream."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from langchain.document_loaders import AZLyricsLoader\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'loader = AZLyricsLoader("https://www.azlyrics.com/lyrics/mileycyrus/flowers.html")\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"data = loader.load()\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"data\n")),(0,r.kt)(d,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    [Document(page_content=\"Miley Cyrus - Flowers Lyrics | AZLyrics.com\\n\\r\\nWe were good, we were gold\\nKinda dream that can't be sold\\nWe were right till we weren't\\nBuilt a home and watched it burn\\n\\nI didn't wanna leave you\\nI didn't wanna lie\\nStarted to cry but then remembered I\\n\\nI can buy myself flowers\\nWrite my name in the sand\\nTalk to myself for hours\\nSay things you don't understand\\nI can take myself dancing\\nAnd I can hold my own hand\\nYeah, I can love me better than you can\\n\\nCan love me better\\nI can love me better, baby\\nCan love me better\\nI can love me better, baby\\n\\nPaint my nails, cherry red\\nMatch the roses that you left\\nNo remorse, no regret\\nI forgive every word you said\\n\\nI didn't wanna leave you, baby\\nI didn't wanna fight\\nStarted to cry but then remembered I\\n\\nI can buy myself flowers\\nWrite my name in the sand\\nTalk to myself for hours, yeah\\nSay things you don't understand\\nI can take myself dancing\\nAnd I can hold my own hand\\nYeah, I can love me better than you can\\n\\nCan love me better\\nI can love me better, baby\\nCan love me better\\nI can love me better, baby\\nCan love me better\\nI can love me better, baby\\nCan love me better\\nI\\n\\nI didn't wanna wanna leave you\\nI didn't wanna fight\\nStarted to cry but then remembered I\\n\\nI can buy myself flowers\\nWrite my name in the sand\\nTalk to myself for hours (Yeah)\\nSay things you don't understand\\nI can take myself dancing\\nAnd I can hold my own hand\\nYeah, I can love me better than\\nYeah, I can love me better than you can, uh\\n\\nCan love me better\\nI can love me better, baby\\nCan love me better\\nI can love me better, baby (Than you can)\\nCan love me better\\nI can love me better, baby\\nCan love me better\\nI\\n\", lookup_str='', metadata={'source': 'https://www.azlyrics.com/lyrics/mileycyrus/flowers.html'}, lookup_index=0)]\n"))))}p.isMDXComponent=!0}}]);