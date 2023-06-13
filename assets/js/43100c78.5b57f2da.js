"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[28549],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),d=o,g=c["".concat(s,".").concat(d)]||c[d]||m[d]||r;return n?a.createElement(g,l(l({ref:t},u),{},{components:n})):a.createElement(g,l({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:o,l[1]=i;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},89643:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>g,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var a=n(87462),o=(n(67294),n(3905));const r={},l=void 0,i={unversionedId:"use_cases/multi_modal/image_agent",id:"use_cases/multi_modal/image_agent",title:"image_agent",description:"Multi-modal outputs: Image & Text",source:"@site/docs/use_cases/multi_modal/image_agent.md",sourceDirName:"use_cases/multi_modal",slug:"/use_cases/multi_modal/image_agent",permalink:"/langchain-docs-scratch/docs/use_cases/multi_modal/image_agent",draft:!1,editUrl:"https://github.com/hwchase17/langchainjs/edit/main/docs/docs/use_cases/multi_modal/image_agent.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Extraction",permalink:"/langchain-docs-scratch/docs/use_cases/extraction"},next:{title:"Question answering over documents",permalink:"/langchain-docs-scratch/docs/use_cases/question_answering/"}},s={},p=[{value:"Multi-modal outputs: Image &amp; Text",id:"multi-modal-outputs-image--text",level:2},{value:"Dall-E",id:"dall-e",level:2},{value:"StableDiffusion",id:"stablediffusion",level:2}],u=(c="CodeOutputBlock",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var c;const m={toc:p},d="wrapper";function g(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"multi-modal-outputs-image--text"},"Multi-modal outputs: Image & Text"),(0,o.kt)("p",null,"This notebook shows how non-text producing tools can be used to create multi-modal agents."),(0,o.kt)("p",null,"This example is limited to text and image outputs and uses UUIDs to transfer content across tools and agents. "),(0,o.kt)("p",null,"This example uses Steamship to generate and store generated images. Generated are auth protected by default. "),(0,o.kt)("p",null,"You can get your Steamship api key here: ",(0,o.kt)("a",{parentName:"p",href:"https://steamship.com/account/api"},"https://steamship.com/account/api")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from steamship import Block, Steamship\nimport re\nfrom IPython.display import Image\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from langchain import OpenAI\nfrom langchain.agents import initialize_agent\nfrom langchain.agents import AgentType\nfrom langchain.tools import SteamshipImageGenerationTool\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"llm = OpenAI(temperature=0)\n")),(0,o.kt)("h2",{id:"dall-e"},"Dall-E"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'tools = [\n    SteamshipImageGenerationTool(model_name= "dall-e")\n]\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"mrkl = initialize_agent(tools, \n                        llm, \n                        agent=AgentType.ZERO_SHOT_REACT_DESCRIPTION, \n                        verbose=True)\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'output = mrkl.run("How would you visualize a parot playing soccer?")\n')),(0,o.kt)(u,{lang:"python",mdxType:"CodeOutputBlock"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    \n    \n    > Entering new AgentExecutor chain...\n     I need to generate an image of a parrot playing soccer.\n    Action: GenerateImage\n    Action Input: A parrot wearing a soccer uniform, kicking a soccer ball.\n    Observation: E28BE7C7-D105-41E0-8A5B-2CE21424DFEC\n    Thought: I now have the UUID of the generated image.\n    Final Answer: The UUID of the generated image is E28BE7C7-D105-41E0-8A5B-2CE21424DFEC.\n    \n    > Finished chain.\n"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'def show_output(output):\n    """Display the multi-modal output from the agent."""\n    UUID_PATTERN = re.compile(\n        r"([0-9A-Za-z]{8}-[0-9A-Za-z]{4}-[0-9A-Za-z]{4}-[0-9A-Za-z]{4}-[0-9A-Za-z]{12})"\n    )\n\n    outputs = UUID_PATTERN.split(output)\n    outputs = [re.sub(r"^\\W+", "", el) for el in outputs] # Clean trailing and leading non-word characters\n\n    for output in outputs: \n        maybe_block_id = UUID_PATTERN.search(output)\n        if maybe_block_id:\n            display(Image(Block.get(Steamship(), _id=maybe_block_id.group()).raw()))\n        else:\n            print(output, end="\\n\\n")\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"show_output(output)\n")),(0,o.kt)(u,{lang:"python",mdxType:"CodeOutputBlock"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    The UUID of the generated image is \n    \n\n\n\n    \n![png](_image_agent_files/output_10_1.png)\n    \n"))),(0,o.kt)("h2",{id:"stablediffusion"},"StableDiffusion"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'tools = [\n    SteamshipImageGenerationTool(model_name= "stable-diffusion")\n]\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"mrkl = initialize_agent(tools, \n                        llm, \n                        agent=AgentType.ZERO_SHOT_REACT_DESCRIPTION, \n                        verbose=True)\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'output = mrkl.run("How would you visualize a parot playing soccer?")\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"show_output(output)\n")))}g.isMDXComponent=!0}}]);