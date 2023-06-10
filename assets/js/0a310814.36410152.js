"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[98976],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(n),h=r,m=d["".concat(c,".").concat(h)]||d[h]||u[h]||a;return n?o.createElement(m,s(s({ref:t},p),{},{components:n})):o.createElement(m,s({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=h;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:r,s[1]=i;for(var l=2;l<a;l++)s[l]=n[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},32112:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var o=n(87462),r=(n(67294),n(3905));const a={sidebar_position:0},s="Types",i={unversionedId:"modules/agents/agent_types/index",id:"modules/agents/agent_types/index",title:"Types",description:"Agents use an LLM to determine which actions to take and in what order.",source:"@site/docs/modules/agents/agent_types/index.mdx",sourceDirName:"modules/agents/agent_types",slug:"/modules/agents/agent_types/",permalink:"/langchain-docs-scratch/docs/modules/agents/agent_types/",draft:!1,editUrl:"https://github.com/hwchase17/langchainjs/edit/main/docs/docs/modules/agents/agent_types/index.mdx",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"sidebar",previous:{title:"Agents",permalink:"/langchain-docs-scratch/docs/modules/agents/"},next:{title:"Conversation Agent (for Chat Models)",permalink:"/langchain-docs-scratch/docs/modules/agents/agent_types/chat_conversation_agent"}},c={},l=[{value:"<code>zero-shot-react-description</code>",id:"zero-shot-react-description",level:2},{value:"<code>react-docstore</code>",id:"react-docstore",level:2},{value:"<code>self-ask-with-search</code>",id:"self-ask-with-search",level:2},{value:"<code>conversational-react-description</code>",id:"conversational-react-description",level:3}],p={toc:l},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"types"},"Types"),(0,r.kt)("p",null,"Agents use an LLM to determine which actions to take and in what order.\nAn action can either be using a tool and observing its output, or returning a response to the user.\nHere are the agents available in LangChain."),(0,r.kt)("h2",{id:"zero-shot-react-description"},(0,r.kt)("inlineCode",{parentName:"h2"},"zero-shot-react-description")),(0,r.kt)("p",null,"This agent uses the ",(0,r.kt)("a",{parentName:"p",href:"https://arxiv.org/pdf/2205.00445.pdf"},"ReAct")," framework to determine which tool to use\nbased solely on the tool's description. Any number of tools can be provided.\nThis agent requires that a description is provided for each tool."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Note"),": This is the most general purpose example, so if you are looking to use an agent with arbitrary tools, please start here.")),(0,r.kt)("h2",{id:"react-docstore"},(0,r.kt)("inlineCode",{parentName:"h2"},"react-docstore")),(0,r.kt)("p",null,"This agent uses the ReAct framework to interact with a docstore. Two tools must\nbe provided: a ",(0,r.kt)("inlineCode",{parentName:"p"},"Search")," tool and a ",(0,r.kt)("inlineCode",{parentName:"p"},"Lookup")," tool (they must be named exactly as so).\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"Search")," tool should search for a document, while the ",(0,r.kt)("inlineCode",{parentName:"p"},"Lookup")," tool should lookup\na term in the most recently found document.\nThis agent is equivalent to the\noriginal ",(0,r.kt)("a",{parentName:"p",href:"https://arxiv.org/pdf/2210.03629.pdf"},"ReAct paper"),", specifically the Wikipedia example."),(0,r.kt)("h2",{id:"self-ask-with-search"},(0,r.kt)("inlineCode",{parentName:"h2"},"self-ask-with-search")),(0,r.kt)("p",null,"This agent utilizes a single tool that should be named ",(0,r.kt)("inlineCode",{parentName:"p"},"Intermediate Answer"),".\nThis tool should be able to lookup factual answers to questions. This agent\nis equivalent to the original ",(0,r.kt)("a",{parentName:"p",href:"https://ofir.io/self-ask.pdf"},"self ask with search paper"),",\nwhere a Google search API was provided as the tool."),(0,r.kt)("h3",{id:"conversational-react-description"},(0,r.kt)("inlineCode",{parentName:"h3"},"conversational-react-description")),(0,r.kt)("p",null,"This agent is designed to be used in conversational settings.\nThe prompt is designed to make the agent helpful and conversational.\nIt uses the ReAct framework to decide which tool to use, and uses memory to remember the previous conversation interactions."))}u.isMDXComponent=!0}}]);