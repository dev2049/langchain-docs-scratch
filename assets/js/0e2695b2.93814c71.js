"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[68746],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>h});var o=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=o.createContext({}),m=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=m(e.components);return o.createElement(l.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=m(t),d=a,h=c["".concat(l,".").concat(d)]||c[d]||u[d]||r;return t?o.createElement(h,i(i({ref:n},p),{},{components:t})):o.createElement(h,i({ref:n},p))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var m=2;m<r;m++)i[m]=t[m];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},58715:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>m});var o=t(87462),a=(t(67294),t(3905));const r={},i="Conversation Knowledge Graph Memory",s={unversionedId:"modules/memory/how_to/kg",id:"modules/memory/how_to/kg",title:"Conversation Knowledge Graph Memory",description:"This type of memory uses a knowledge graph to recreate memory.",source:"@site/docs/modules/memory/how_to/kg.md",sourceDirName:"modules/memory/how_to",slug:"/modules/memory/how_to/kg",permalink:"/langchain-docs-scratch/docs/modules/memory/how_to/kg",draft:!1,editUrl:"https://github.com/hwchase17/langchainjs/edit/main/docs/docs/modules/memory/how_to/kg.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Entity memory",permalink:"/langchain-docs-scratch/docs/modules/memory/how_to/entity_summary_memory"},next:{title:"How to use multiple memory classes in the same chain",permalink:"/langchain-docs-scratch/docs/modules/memory/how_to/multiple_memory"}},l={},m=[{value:"Using in a chain",id:"using-in-a-chain",level:2}],p=(c="CodeOutputBlock",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var c;const u={toc:m},d="wrapper";function h(e){let{components:n,...t}=e;return(0,a.kt)(d,(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"conversation-knowledge-graph-memory"},"Conversation Knowledge Graph Memory"),(0,a.kt)("p",null,"This type of memory uses a knowledge graph to recreate memory."),(0,a.kt)("p",null,"Let's first walk through how to use the utilities"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from langchain.memory import ConversationKGMemory\nfrom langchain.llms import OpenAI\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'llm = OpenAI(temperature=0)\nmemory = ConversationKGMemory(llm=llm)\nmemory.save_context({"input": "say hi to sam"}, {"output": "who is sam"})\nmemory.save_context({"input": "sam is a friend"}, {"output": "okay"})\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"memory.load_memory_variables({\"input\": 'who is sam'})\n")),(0,a.kt)(p,{lang:"python",mdxType:"CodeOutputBlock"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    {'history': 'On Sam: Sam is friend.'}\n"))),(0,a.kt)("p",null,"We can also get the history as a list of messages (this is useful if you are using this with a chat model)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'memory = ConversationKGMemory(llm=llm, return_messages=True)\nmemory.save_context({"input": "say hi to sam"}, {"output": "who is sam"})\nmemory.save_context({"input": "sam is a friend"}, {"output": "okay"})\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"memory.load_memory_variables({\"input\": 'who is sam'})\n")),(0,a.kt)(p,{lang:"python",mdxType:"CodeOutputBlock"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    {'history': [SystemMessage(content='On Sam: Sam is friend.', additional_kwargs={})]}\n"))),(0,a.kt)("p",null,"We can also more modularly get current entities from a new message (will use previous messages as context.)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'memory.get_current_entities("what\'s Sams favorite color?")\n')),(0,a.kt)(p,{lang:"python",mdxType:"CodeOutputBlock"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    ['Sam']\n"))),(0,a.kt)("p",null,"We can also more modularly get knowledge triplets from a new message (will use previous messages as context.)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'memory.get_knowledge_triplets("her favorite color is red")\n')),(0,a.kt)(p,{lang:"python",mdxType:"CodeOutputBlock"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    [KnowledgeTriple(subject='Sam', predicate='favorite color', object_='red')]\n"))),(0,a.kt)("h2",{id:"using-in-a-chain"},"Using in a chain"),(0,a.kt)("p",null,"Let's now use this in a chain!"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'llm = OpenAI(temperature=0)\nfrom langchain.prompts.prompt import PromptTemplate\nfrom langchain.chains import ConversationChain\n\ntemplate = """The following is a friendly conversation between a human and an AI. The AI is talkative and provides lots of specific details from its context. \nIf the AI does not know the answer to a question, it truthfully says it does not know. The AI ONLY uses information contained in the "Relevant Information" section and does not hallucinate.\n\nRelevant Information:\n\n{history}\n\nConversation:\nHuman: {input}\nAI:"""\nprompt = PromptTemplate(\n    input_variables=["history", "input"], template=template\n)\nconversation_with_kg = ConversationChain(\n    llm=llm, \n    verbose=True, \n    prompt=prompt,\n    memory=ConversationKGMemory(llm=llm)\n)\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'conversation_with_kg.predict(input="Hi, what\'s up?")\n')),(0,a.kt)(p,{lang:"python",mdxType:"CodeOutputBlock"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    \n    \n    > Entering new ConversationChain chain...\n    Prompt after formatting:\n    The following is a friendly conversation between a human and an AI. The AI is talkative and provides lots of specific details from its context. \n    If the AI does not know the answer to a question, it truthfully says it does not know. The AI ONLY uses information contained in the \"Relevant Information\" section and does not hallucinate.\n    \n    Relevant Information:\n    \n    \n    \n    Conversation:\n    Human: Hi, what's up?\n    AI:\n    \n    > Finished chain.\n\n\n\n\n\n    \" Hi there! I'm doing great. I'm currently in the process of learning about the world around me. I'm learning about different cultures, languages, and customs. It's really fascinating! How about you?\"\n"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"conversation_with_kg.predict(input=\"My name is James and I'm helping Will. He's an engineer.\")\n")),(0,a.kt)(p,{lang:"python",mdxType:"CodeOutputBlock"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    \n    \n    > Entering new ConversationChain chain...\n    Prompt after formatting:\n    The following is a friendly conversation between a human and an AI. The AI is talkative and provides lots of specific details from its context. \n    If the AI does not know the answer to a question, it truthfully says it does not know. The AI ONLY uses information contained in the \"Relevant Information\" section and does not hallucinate.\n    \n    Relevant Information:\n    \n    \n    \n    Conversation:\n    Human: My name is James and I'm helping Will. He's an engineer.\n    AI:\n    \n    > Finished chain.\n\n\n\n\n\n    \" Hi James, it's nice to meet you. I'm an AI and I understand you're helping Will, the engineer. What kind of engineering does he do?\"\n"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'conversation_with_kg.predict(input="What do you know about Will?")\n')),(0,a.kt)(p,{lang:"python",mdxType:"CodeOutputBlock"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    \n    \n    > Entering new ConversationChain chain...\n    Prompt after formatting:\n    The following is a friendly conversation between a human and an AI. The AI is talkative and provides lots of specific details from its context. \n    If the AI does not know the answer to a question, it truthfully says it does not know. The AI ONLY uses information contained in the \"Relevant Information\" section and does not hallucinate.\n    \n    Relevant Information:\n    \n    On Will: Will is an engineer.\n    \n    Conversation:\n    Human: What do you know about Will?\n    AI:\n    \n    > Finished chain.\n\n\n\n\n\n    ' Will is an engineer.'\n"))))}h.isMDXComponent=!0}}]);