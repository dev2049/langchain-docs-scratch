"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[95497],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,s=e.parentName,m=a(e,["components","mdxType","originalType","parentName"]),u=l(n),p=o,f=u["".concat(s,".").concat(p)]||u[p]||d[p]||c;return n?r.createElement(f,i(i({ref:t},m),{},{components:n})):r.createElement(f,i({ref:t},m))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,i=new Array(c);i[0]=p;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[u]="string"==typeof e?e:o,i[1]=a;for(var l=2;l<c;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},52991:(e,t,n)=>{n.d(t,{Z:()=>y});var r=n(67294),o=n(86010),c=n(53438),i=n(39960),a=n(13919),s=n(95999);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function m(e){let{href:t,children:n}=e;return r.createElement(i.Z,{href:t,className:(0,o.Z)("card padding--lg",l.cardContainer)},n)}function u(e){let{href:t,icon:n,title:c,description:i}=e;return r.createElement(m,{href:t},r.createElement("h2",{className:(0,o.Z)("text--truncate",l.cardTitle),title:c},n," ",c),i&&r.createElement("p",{className:(0,o.Z)("text--truncate",l.cardDescription),title:i},i))}function d(e){let{item:t}=e;const n=(0,c.Wl)(t);return n?r.createElement(u,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function p(e){let{item:t}=e;const n=(0,a.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,c.xz)(t.docId??void 0);return r.createElement(u,{href:t.href,icon:n,title:t.label,description:t.description??o?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(p,{item:t});case"category":return r.createElement(d,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function h(e){let{className:t}=e;const n=(0,c.jA)();return r.createElement(y,{items:n.items,className:t})}function y(e){const{items:t,className:n}=e;if(!t)return r.createElement(h,e);const i=(0,c.MN)(t);return r.createElement("section",{className:(0,o.Z)("row",n)},i.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(f,{item:e})))))}},35943:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>m,default:()=>y,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const c={toc:[]},i="wrapper";function a(e){let{components:t,...n}=e;return(0,o.kt)(i,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'class BaseCombineDocumentsChain(Chain, ABC):\n    """Base interface for chains combining documents."""\n\n    @abstractmethod\n    def combine_docs(self, docs: List[Document], **kwargs: Any) -> Tuple[str, dict]:\n        """Combine documents into a single string."""\n\n')))}a.isMDXComponent=!0;var s=n(52991);const l={sidebar_position:2},m="Documents",u={unversionedId:"modules/chains/document/index",id:"modules/chains/document/index",title:"Documents",description:"These are the core chains for working with Documents. They are useful for summarizing documents, answering questions over documents, extracting information from documents, and more.",source:"@site/docs/modules/chains/document/index.mdx",sourceDirName:"modules/chains/document",slug:"/modules/chains/document/",permalink:"/langchain-docs-scratch/docs/modules/chains/document/",draft:!1,editUrl:"https://github.com/hwchase17/langchainjs/edit/main/docs/docs/modules/chains/document/index.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"sidebar",previous:{title:"Transformation",permalink:"/langchain-docs-scratch/docs/modules/chains/foundational/transformation"},next:{title:"Stuff",permalink:"/langchain-docs-scratch/docs/modules/chains/document/stuff"}},d={},p=[],f={toc:p},h="wrapper";function y(e){let{components:t,...n}=e;return(0,o.kt)(h,(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"documents"},"Documents"),(0,o.kt)("p",null,"These are the core chains for working with Documents. They are useful for summarizing documents, answering questions over documents, extracting information from documents, and more."),(0,o.kt)("p",null,"These chains all implement a common interface:"),(0,o.kt)(a,{mdxType:"Interface"}),(0,o.kt)(s.Z,{mdxType:"DocCardList"}))}y.isMDXComponent=!0}}]);