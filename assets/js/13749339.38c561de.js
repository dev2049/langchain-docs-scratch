"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8046],{3905:(e,o,t)=>{t.d(o,{Zo:()=>d,kt:()=>m});var r=t(67294);function n(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function a(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);o&&(r=r.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?a(Object(t),!0).forEach((function(o){n(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function c(e,o){if(null==e)return{};var t,r,n=function(e,o){if(null==e)return{};var t,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],o.indexOf(t)>=0||(n[t]=e[t]);return n}(e,o);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=r.createContext({}),s=function(e){var o=r.useContext(i),t=o;return e&&(t="function"==typeof e?e(o):l(l({},o),e)),t},d=function(e){var o=s(e.components);return r.createElement(i.Provider,{value:o},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var o=e.children;return r.createElement(r.Fragment,{},o)}},g=r.forwardRef((function(e,o){var t=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=s(t),g=n,m=u["".concat(i,".").concat(g)]||u[g]||p[g]||a;return t?r.createElement(m,l(l({ref:o},d),{},{components:t})):r.createElement(m,l({ref:o},d))}));function m(e,o){var t=arguments,n=o&&o.mdxType;if("string"==typeof e||n){var a=t.length,l=new Array(a);l[0]=g;var c={};for(var i in o)hasOwnProperty.call(o,i)&&(c[i]=o[i]);c.originalType=e,c[u]="string"==typeof e?e:n,l[1]=c;for(var s=2;s<a;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},60414:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=t(87462),n=(t(67294),t(3905));const a={},l="Google Cloud Storage File",c={unversionedId:"modules/data_io/document_loaders/integrations/google_cloud_storage_file",id:"modules/data_io/document_loaders/integrations/google_cloud_storage_file",title:"Google Cloud Storage File",description:"Google Cloud Storage is a managed service for storing unstructured data.",source:"@site/docs/modules/data_io/document_loaders/integrations/google_cloud_storage_file.md",sourceDirName:"modules/data_io/document_loaders/integrations",slug:"/modules/data_io/document_loaders/integrations/google_cloud_storage_file",permalink:"/langchain-docs-scratch/docs/modules/data_io/document_loaders/integrations/google_cloud_storage_file",draft:!1,editUrl:"https://github.com/hwchase17/langchainjs/edit/main/docs/docs/modules/data_io/document_loaders/integrations/google_cloud_storage_file.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Google Cloud Storage Directory",permalink:"/langchain-docs-scratch/docs/modules/data_io/document_loaders/integrations/google_cloud_storage_directory"},next:{title:"Google Drive",permalink:"/langchain-docs-scratch/docs/modules/data_io/document_loaders/integrations/google_drive"}},i={},s=[],d=(u="CodeOutputBlock",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",e)});var u;const p={toc:s},g="wrapper";function m(e){let{components:o,...t}=e;return(0,n.kt)(g,(0,r.Z)({},p,t,{components:o,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"google-cloud-storage-file"},"Google Cloud Storage File"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Google_Cloud_Storage"},"Google Cloud Storage")," is a managed service for storing unstructured data.")),(0,n.kt)("p",null,"This covers how to load document objects from an ",(0,n.kt)("inlineCode",{parentName:"p"},"Google Cloud Storage (GCS) file object (blob)"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"# !pip install google-cloud-storage\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"from langchain.document_loaders import GCSFileLoader\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'loader = GCSFileLoader(project_name="aist", bucket="testing-hwc", blob="fake.docx")\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"loader.load()\n")),(0,n.kt)(d,{lang:"python",mdxType:"CodeOutputBlock"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"    /Users/harrisonchase/workplace/langchain/.venv/lib/python3.10/site-packages/google/auth/_default.py:83: UserWarning: Your application has authenticated using end user credentials from Google Cloud SDK without a quota project. You might receive a \"quota exceeded\" or \"API not enabled\" error. We recommend you rerun `gcloud auth application-default login` and make sure a quota project is added. Or you can use service accounts instead. For more information about service accounts, see https://cloud.google.com/docs/authentication/\n      warnings.warn(_CLOUD_SDK_CREDENTIALS_WARNING)\n\n\n\n\n\n    [Document(page_content='Lorem ipsum dolor sit amet.', lookup_str='', metadata={'source': '/var/folders/y6/8_bzdg295ld6s1_97_12m4lr0000gn/T/tmp3srlf8n8/fake.docx'}, lookup_index=0)]\n"))))}m.isMDXComponent=!0}}]);