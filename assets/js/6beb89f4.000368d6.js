"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[64233],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),s=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=s(r),m=n,f=p["".concat(l,".").concat(m)]||p[m]||u[m]||a;return r?o.createElement(f,i(i({ref:t},d),{},{components:r})):o.createElement(f,i({ref:t},d))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:n,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},77791:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var o=r(87462),n=(r(67294),r(3905));const a={},i="AWS S3 Directory",c={unversionedId:"modules/data_io/document_loaders/integrations/aws_s3_directory",id:"modules/data_io/document_loaders/integrations/aws_s3_directory",title:"AWS S3 Directory",description:"Amazon Simple Storage Service (Amazon S3) is an object storage service",source:"@site/docs/modules/data_io/document_loaders/integrations/aws_s3_directory.md",sourceDirName:"modules/data_io/document_loaders/integrations",slug:"/modules/data_io/document_loaders/integrations/aws_s3_directory",permalink:"/langchain-docs-scratch/docs/modules/data_io/document_loaders/integrations/aws_s3_directory",draft:!1,editUrl:"https://github.com/hwchase17/langchainjs/edit/main/docs/docs/modules/data_io/document_loaders/integrations/aws_s3_directory.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Arxiv",permalink:"/langchain-docs-scratch/docs/modules/data_io/document_loaders/integrations/arxiv"},next:{title:"AWS S3 File",permalink:"/langchain-docs-scratch/docs/modules/data_io/document_loaders/integrations/aws_s3_file"}},l={},s=[{value:"Specifying a prefix",id:"specifying-a-prefix",level:2}],d=(p="CodeOutputBlock",function(e){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",e)});var p;const u={toc:s},m="wrapper";function f(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"aws-s3-directory"},"AWS S3 Directory"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-folders.html"},"Amazon Simple Storage Service (Amazon S3)")," is an object storage service")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-folders.html"},"AWS S3 Directory"))),(0,n.kt)("p",null,"This covers how to load document objects from an ",(0,n.kt)("inlineCode",{parentName:"p"},"AWS S3 Directory")," object."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"#!pip install boto3\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"from langchain.document_loaders import S3DirectoryLoader\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'loader = S3DirectoryLoader("testing-hwc")\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"loader.load()\n")),(0,n.kt)("h2",{id:"specifying-a-prefix"},"Specifying a prefix"),(0,n.kt)("p",null,"You can also specify a prefix for more finegrained control over what files to load."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'loader = S3DirectoryLoader("testing-hwc", prefix="fake")\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"loader.load()\n")),(0,n.kt)(d,{lang:"python",mdxType:"CodeOutputBlock"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"    [Document(page_content='Lorem ipsum dolor sit amet.', lookup_str='', metadata={'source': '/var/folders/y6/8_bzdg295ld6s1_97_12m4lr0000gn/T/tmpujbkzf_l/fake.docx'}, lookup_index=0)]\n"))))}f.isMDXComponent=!0}}]);