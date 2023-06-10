"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1758],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=d(n),u=o,k=p["".concat(s,".").concat(u)]||p[u]||m[u]||r;return n?a.createElement(k,l(l({ref:t},c),{},{components:n})):a.createElement(k,l({ref:t},c))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:o,l[1]=i;for(var d=2;d<r;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},70369:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>k,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var a=n(87462),o=(n(67294),n(3905));const r={},l="Trello",i={unversionedId:"modules/data_io/document_loaders/integrations/trello",id:"modules/data_io/document_loaders/integrations/trello",title:"Trello",description:'Trello is a web-based project management and collaboration tool that allows individuals and teams to organize and track their tasks and projects. It provides a visual interface known as a "board" where users can create lists and cards to represent their tasks and activities.',source:"@site/docs/modules/data_io/document_loaders/integrations/trello.md",sourceDirName:"modules/data_io/document_loaders/integrations",slug:"/modules/data_io/document_loaders/integrations/trello",permalink:"/langchain-docs-scratch/docs/modules/data_io/document_loaders/integrations/trello",draft:!1,editUrl:"https://github.com/hwchase17/langchainjs/edit/main/docs/docs/modules/data_io/document_loaders/integrations/trello.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"TOML",permalink:"/langchain-docs-scratch/docs/modules/data_io/document_loaders/integrations/toml"},next:{title:"Twitter",permalink:"/langchain-docs-scratch/docs/modules/data_io/document_loaders/integrations/twitter"}},s={},d=[{value:"Features",id:"features",level:2}],c=(p="CodeOutputBlock",function(e){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var p;const m={toc:d},u="wrapper";function k(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"trello"},"Trello"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://www.atlassian.com/software/trello"},"Trello"),' is a web-based project management and collaboration tool that allows individuals and teams to organize and track their tasks and projects. It provides a visual interface known as a "board" where users can create lists and cards to represent their tasks and activities.')),(0,o.kt)("p",null,"The TrelloLoader allows you to load cards from a Trello board and is implemented on top of ",(0,o.kt)("a",{parentName:"p",href:"https://pypi.org/project/py-trello/"},"py-trello")),(0,o.kt)("p",null,"This currently supports ",(0,o.kt)("inlineCode",{parentName:"p"},"api_key/token")," only."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Credentials generation: ",(0,o.kt)("a",{parentName:"p",href:"https://trello.com/power-ups/admin/"},"https://trello.com/power-ups/admin/"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click in the manual token generation link to get the token."))),(0,o.kt)("p",null,"To specify the API key and token you can either set the environment variables ",(0,o.kt)("inlineCode",{parentName:"p"},"TRELLO_API_KEY")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"TRELLO_TOKEN")," or you can pass ",(0,o.kt)("inlineCode",{parentName:"p"},"api_key")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"token")," directly into the ",(0,o.kt)("inlineCode",{parentName:"p"},"from_credentials")," convenience constructor method."),(0,o.kt)("p",null,"This loader allows you to provide the board name to pull in the corresponding cards into Document objects."),(0,o.kt)("p",null,'Notice that the board "name" is also called "title" in oficial documentation:'),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://support.atlassian.com/trello/docs/changing-a-boards-title-and-description/"},"https://support.atlassian.com/trello/docs/changing-a-boards-title-and-description/")),(0,o.kt)("p",null,"You can also specify several load parameters to include / remove different fields both from the document page_content properties and metadata."),(0,o.kt)("h2",{id:"features"},"Features"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Load cards from a Trello board."),(0,o.kt)("li",{parentName:"ul"},"Filter cards based on their status (open or closed)."),(0,o.kt)("li",{parentName:"ul"},"Include card names, comments, and checklists in the loaded documents."),(0,o.kt)("li",{parentName:"ul"},"Customize the additional metadata fields to include in the document.")),(0,o.kt)("p",null,"By default all card fields are included for the full text page_content and metadata accordinly."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"#!pip install py-trello beautifulsoup4\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"# If you have already set the API key and token using environment variables,\n# you can skip this cell and comment out the `api_key` and `token` named arguments\n# in the initialization steps below.\nfrom getpass import getpass\n\nAPI_KEY = getpass()\nTOKEN = getpass()\n")),(0,o.kt)(c,{lang:"python",mdxType:"CodeOutputBlock"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    \xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\n    \xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\n"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from langchain.document_loaders import TrelloLoader\n\n# Get the open cards from "Awesome Board"\nloader = TrelloLoader.from_credentials(\n    "Awesome Board",\n    api_key=API_KEY,\n    token=TOKEN,\n    card_filter="open",\n    )\ndocuments = loader.load()\n\nprint(documents[0].page_content)\nprint(documents[0].metadata)\n')),(0,o.kt)(c,{lang:"python",mdxType:"CodeOutputBlock"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    Review Tech partner pages\n    Comments:\n    {'title': 'Review Tech partner pages', 'id': '6475357890dc8d17f73f2dcc', 'url': 'https://trello.com/c/b0OTZwkZ/1-review-tech-partner-pages', 'labels': ['Demand Marketing'], 'list': 'Done', 'closed': False, 'due_date': ''}\n"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'# Get all the cards from "Awesome Board" but only include the\n# card list(column) as extra metadata.\nloader = TrelloLoader.from_credentials(\n    "Awesome Board",\n    api_key=API_KEY,\n    token=TOKEN,\n    extra_metadata=("list"),\n)\ndocuments = loader.load()\n\nprint(documents[0].page_content)\nprint(documents[0].metadata)\n')),(0,o.kt)(c,{lang:"python",mdxType:"CodeOutputBlock"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    Review Tech partner pages\n    Comments:\n    {'title': 'Review Tech partner pages', 'id': '6475357890dc8d17f73f2dcc', 'url': 'https://trello.com/c/b0OTZwkZ/1-review-tech-partner-pages', 'list': 'Done'}\n"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'# Get the cards from "Another Board" and exclude the card name,\n# checklist and comments from the Document page_content text.\nloader = TrelloLoader.from_credentials(\n    "test",\n    api_key=API_KEY,\n    token=TOKEN,\n    include_card_name= False,\n    include_checklist= False,\n    include_comments= False,\n)\ndocuments = loader.load()\n\nprint("Document: " + documents[0].page_content)\nprint(documents[0].metadata)\n')))}k.isMDXComponent=!0}}]);