"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[22379],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>u});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},h=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,h=r(e,["components","mdxType","originalType","parentName"]),c=p(a),m=o,u=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return a?n.createElement(u,l(l({ref:t},h),{},{components:a})):n.createElement(u,l({ref:t},h))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,l=new Array(i);l[0]=m;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[c]="string"==typeof e?e:o,l[1]=r;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},92484:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>p});var n=a(87462),o=(a(67294),a(3905));const i={},l="Deployments",r={unversionedId:"guides/deployments",id:"guides/deployments",title:"Deployments",description:"So, you've created a really cool chain - now what? How do you deploy it and make it easily shareable with the world?",source:"@site/docs/guides/deployments.mdx",sourceDirName:"guides",slug:"/guides/deployments",permalink:"/langchain-docs-scratch/docs/guides/deployments",draft:!1,editUrl:"https://github.com/hwchase17/langchainjs/edit/main/docs/docs/guides/deployments.mdx",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Guides",permalink:"/langchain-docs-scratch/docs/guides"},next:{title:"Evaluation",permalink:"/langchain-docs-scratch/docs/guides/evaluation/"}},s={},p=[{value:"Streamlit",id:"streamlit",level:2},{value:"Gradio (on Hugging Face)",id:"gradio-on-hugging-face",level:2},{value:"Chainlit",id:"chainlit",level:2},{value:"Beam",id:"beam",level:2},{value:"Vercel",id:"vercel",level:2},{value:"FastAPI + Vercel",id:"fastapi--vercel",level:2},{value:"Kinsta",id:"kinsta",level:2},{value:"Fly.io",id:"flyio",level:2},{value:"Digitalocean App Platform",id:"digitalocean-app-platform",level:2},{value:"Google Cloud Run",id:"google-cloud-run",level:2},{value:"SteamShip",id:"steamship",level:2},{value:"Langchain-serve",id:"langchain-serve",level:2},{value:"BentoML",id:"bentoml",level:2},{value:"Databutton",id:"databutton",level:2}],h={toc:p},c="wrapper";function d(e){let{components:t,...a}=e;return(0,o.kt)(c,(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"deployments"},"Deployments"),(0,o.kt)("p",null,"So, you've created a really cool chain - now what? How do you deploy it and make it easily shareable with the world?"),(0,o.kt)("p",null,"This section covers several options for that. Note that these options are meant for quick deployment of prototypes and demos, not for production systems. If you need help with the deployment of a production system, please contact us directly."),(0,o.kt)("p",null,"What follows is a list of template GitHub repositories designed to be easily forked and modified to use your chain. This list is far from exhaustive, and we are EXTREMELY open to contributions here."),(0,o.kt)("h2",{id:"streamlit"},(0,o.kt)("a",{parentName:"h2",href:"https://github.com/hwchase17/langchain-streamlit-template"},"Streamlit")),(0,o.kt)("p",null,"This repo serves as a template for how to deploy a LangChain with Streamlit.\nIt implements a chatbot interface.\nIt also contains instructions for how to deploy this app on the Streamlit platform."),(0,o.kt)("h2",{id:"gradio-on-hugging-face"},(0,o.kt)("a",{parentName:"h2",href:"https://github.com/hwchase17/langchain-gradio-template"},"Gradio (on Hugging Face)")),(0,o.kt)("p",null,'This repo serves as a template for how deploy a LangChain with Gradio.\nIt implements a chatbot interface, with a "Bring-Your-Own-Token" approach (nice for not wracking up big bills).\nIt also contains instructions for how to deploy this app on the Hugging Face platform.\nThis is heavily influenced by James Weaver\'s ',(0,o.kt)("a",{parentName:"p",href:"https://huggingface.co/JavaFXpert"},"excellent examples"),"."),(0,o.kt)("h2",{id:"chainlit"},(0,o.kt)("a",{parentName:"h2",href:"https://github.com/Chainlit/cookbook"},"Chainlit")),(0,o.kt)("p",null,"This repo is a cookbook explaining how to visualize and deploy LangChain agents with Chainlit.\nYou create ChatGPT-like UIs with Chainlit. Some of the key features include intermediary steps visualisation, element management & display (images, text, carousel, etc.) as well as cloud deployment.\nChainlit ",(0,o.kt)("a",{parentName:"p",href:"https://docs.chainlit.io/langchain"},"doc")," on the integration with LangChain"),(0,o.kt)("h2",{id:"beam"},(0,o.kt)("a",{parentName:"h2",href:"https://github.com/slai-labs/get-beam/tree/main/examples/langchain-question-answering"},"Beam")),(0,o.kt)("p",null,"This repo serves as a template for how deploy a LangChain with ",(0,o.kt)("a",{parentName:"p",href:"https://beam.cloud"},"Beam"),"."),(0,o.kt)("p",null,"It implements a Question Answering app and contains instructions for deploying the app as a serverless REST API."),(0,o.kt)("h2",{id:"vercel"},(0,o.kt)("a",{parentName:"h2",href:"https://github.com/homanp/vercel-langchain"},"Vercel")),(0,o.kt)("p",null,"A minimal example on how to run LangChain on Vercel using Flask."),(0,o.kt)("h2",{id:"fastapi--vercel"},(0,o.kt)("a",{parentName:"h2",href:"https://github.com/msoedov/langcorn"},"FastAPI + Vercel")),(0,o.kt)("p",null,"A minimal example on how to run LangChain on Vercel using FastAPI and LangCorn/Uvicorn."),(0,o.kt)("h2",{id:"kinsta"},(0,o.kt)("a",{parentName:"h2",href:"https://github.com/kinsta/hello-world-langchain"},"Kinsta")),(0,o.kt)("p",null,"A minimal example on how to deploy LangChain to ",(0,o.kt)("a",{parentName:"p",href:"https://kinsta.com"},"Kinsta")," using Flask."),(0,o.kt)("h2",{id:"flyio"},(0,o.kt)("a",{parentName:"h2",href:"https://github.com/fly-apps/hello-fly-langchain"},"Fly.io")),(0,o.kt)("p",null,"A minimal example of how to deploy LangChain to ",(0,o.kt)("a",{parentName:"p",href:"https://fly.io/"},"Fly.io")," using Flask."),(0,o.kt)("h2",{id:"digitalocean-app-platform"},(0,o.kt)("a",{parentName:"h2",href:"https://github.com/homanp/digitalocean-langchain"},"Digitalocean App Platform")),(0,o.kt)("p",null,"A minimal example on how to deploy LangChain to DigitalOcean App Platform."),(0,o.kt)("h2",{id:"google-cloud-run"},(0,o.kt)("a",{parentName:"h2",href:"https://github.com/homanp/gcp-langchain"},"Google Cloud Run")),(0,o.kt)("p",null,"A minimal example on how to deploy LangChain to Google Cloud Run."),(0,o.kt)("h2",{id:"steamship"},(0,o.kt)("a",{parentName:"h2",href:"https://github.com/steamship-core/steamship-langchain/"},"SteamShip")),(0,o.kt)("p",null,"This repository contains LangChain adapters for Steamship, enabling LangChain developers to rapidly deploy their apps on Steamship. This includes: production-ready endpoints, horizontal scaling across dependencies, persistent storage of app state, multi-tenancy support, etc."),(0,o.kt)("h2",{id:"langchain-serve"},(0,o.kt)("a",{parentName:"h2",href:"https://github.com/jina-ai/langchain-serve"},"Langchain-serve")),(0,o.kt)("p",null,"This repository allows users to serve local chains and agents as RESTful, gRPC, or WebSocket APIs, thanks to ",(0,o.kt)("a",{parentName:"p",href:"https://docs.jina.ai/"},"Jina"),". Deploy your chains & agents with ease and enjoy independent scaling, serverless and autoscaling APIs, as well as a Streamlit playground on Jina AI Cloud."),(0,o.kt)("h2",{id:"bentoml"},(0,o.kt)("a",{parentName:"h2",href:"https://github.com/ssheng/BentoChain"},"BentoML")),(0,o.kt)("p",null,"This repository provides an example of how to deploy a LangChain application with ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/bentoml/BentoML"},"BentoML"),". BentoML is a framework that enables the containerization of machine learning applications as standard OCI images. BentoML also allows for the automatic generation of OpenAPI and gRPC endpoints. With BentoML, you can integrate models from all popular ML frameworks and deploy them as microservices running on the most optimal hardware and scaling independently."),(0,o.kt)("h2",{id:"databutton"},(0,o.kt)("a",{parentName:"h2",href:"https://databutton.com/home?new-data-app=true"},"Databutton")),(0,o.kt)("p",null,"These templates serve as examples of how to build, deploy, and share LangChain applications using Databutton. You can create user interfaces with Streamlit, automate tasks by scheduling Python code, and store files and data in the built-in store. Examples include a Chatbot interface with conversational memory, a Personal search engine, and a starter template for LangChain apps. Deploying and sharing is just one click away."))}d.isMDXComponent=!0}}]);