"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[99307],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},h=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=o,m=u["".concat(l,".").concat(d)]||u[d]||p[d]||r;return n?a.createElement(m,i(i({ref:t},h),{},{components:n})):a.createElement(m,i({ref:t},h))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},59196:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>b,frontMatter:()=>h,metadata:()=>p,toc:()=>m});var a=n(87462),o=(n(67294),n(3905));const r=(i="CodeOutputBlock",function(e){return console.warn("Component "+i+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var i;const s={toc:[]},l="wrapper";function c(e){let{components:t,...n}=e;return(0,o.kt)(l,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from langchain import OpenAI, LLMMathChain, SerpAPIWrapper, SQLDatabase, SQLDatabaseChain\nfrom langchain.agents import initialize_agent, Tool\nfrom langchain.agents import AgentType\nfrom langchain.chat_models import ChatOpenAI\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'llm = ChatOpenAI(temperature=0)\nllm1 = OpenAI(temperature=0)\nsearch = SerpAPIWrapper()\nllm_math_chain = LLMMathChain(llm=llm1, verbose=True)\ndb = SQLDatabase.from_uri("sqlite:///../../../../../notebooks/Chinook.db")\ndb_chain = SQLDatabaseChain.from_llm(llm1, db, verbose=True)\ntools = [\n    Tool(\n        name = "Search",\n        func=search.run,\n        description="useful for when you need to answer questions about current events. You should ask targeted questions"\n    ),\n    Tool(\n        name="Calculator",\n        func=llm_math_chain.run,\n        description="useful for when you need to answer questions about math"\n    ),\n    Tool(\n        name="FooBar DB",\n        func=db_chain.run,\n        description="useful for when you need to answer questions about FooBar. Input should be in the form of a question containing full context"\n    )\n]\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"mrkl = initialize_agent(tools, llm, agent=AgentType.CHAT_ZERO_SHOT_REACT_DESCRIPTION, verbose=True)\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'mrkl.run("Who is Leo DiCaprio\'s girlfriend? What is her current age raised to the 0.43 power?")\n')),(0,o.kt)(r,{lang:"python",mdxType:"CodeOutputBlock"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'    \n    \n    > Entering new AgentExecutor chain...\n    Thought: The first question requires a search, while the second question requires a calculator.\n    Action:\n    ```\n    {\n      "action": "Search",\n      "action_input": "Leo DiCaprio girlfriend"\n    }\n    ```\n    \n    Observation: Gigi Hadid: 2022 Leo and Gigi were first linked back in September 2022, when a source told Us Weekly that Leo had his \u201csights set" on her (alarming way to put it, but okay).\n    Thought:For the second question, I need to calculate the age raised to the 0.43 power. I will use the calculator tool.\n    Action:\n    ```\n    {\n      "action": "Calculator",\n      "action_input": "((2022-1995)^0.43)"\n    }\n    ```\n    \n    \n    > Entering new LLMMathChain chain...\n    ((2022-1995)^0.43)\n    ```text\n    (2022-1995)**0.43\n    ```\n    ...numexpr.evaluate("(2022-1995)**0.43")...\n    \n    Answer: 4.125593352125936\n    > Finished chain.\n    \n    Observation: Answer: 4.125593352125936\n    Thought:I now know the final answer.\n    Final Answer: Gigi Hadid is Leo DiCaprio\'s girlfriend and her current age raised to the 0.43 power is approximately 4.13.\n    \n    > Finished chain.\n\n\n\n\n\n    "Gigi Hadid is Leo DiCaprio\'s girlfriend and her current age raised to the 0.43 power is approximately 4.13."\n'))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"mrkl.run(\"What is the full name of the artist who recently released an album called 'The Storm Before the Calm' and are they in the FooBar database? If so, what albums of theirs are in the FooBar database?\")\n")),(0,o.kt)(r,{lang:"python",mdxType:"CodeOutputBlock"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'    \n    \n    > Entering new AgentExecutor chain...\n    Question: What is the full name of the artist who recently released an album called \'The Storm Before the Calm\' and are they in the FooBar database? If so, what albums of theirs are in the FooBar database?\n    Thought: I should use the Search tool to find the answer to the first part of the question and then use the FooBar DB tool to find the answer to the second part.\n    Action:\n    ```\n    {\n      "action": "Search",\n      "action_input": "Who recently released an album called \'The Storm Before the Calm\'"\n    }\n    ```\n    \n    Observation: Alanis Morissette\n    Thought:Now that I know the artist\'s name, I can use the FooBar DB tool to find out if they are in the database and what albums of theirs are in it.\n    Action:\n    ```\n    {\n      "action": "FooBar DB",\n      "action_input": "What albums does Alanis Morissette have in the database?"\n    }\n    ```\n    \n    \n    \n    > Entering new SQLDatabaseChain chain...\n    What albums does Alanis Morissette have in the database?\n    SQLQuery:\n\n    /Users/harrisonchase/workplace/langchain/langchain/sql_database.py:191: SAWarning: Dialect sqlite+pysqlite does *not* support Decimal objects natively, and SQLAlchemy must convert from floating point - rounding errors and other issues may occur. Please consider storing Decimal numbers as strings or integers on this platform for lossless storage.\n      sample_rows = connection.execute(command)\n\n\n     SELECT "Title" FROM "Album" WHERE "ArtistId" IN (SELECT "ArtistId" FROM "Artist" WHERE "Name" = \'Alanis Morissette\') LIMIT 5;\n    SQLResult: [(\'Jagged Little Pill\',)]\n    Answer: Alanis Morissette has the album Jagged Little Pill in the database.\n    > Finished chain.\n    \n    Observation:  Alanis Morissette has the album Jagged Little Pill in the database.\n    Thought:The artist Alanis Morissette is in the FooBar database and has the album Jagged Little Pill in it.\n    Final Answer: Alanis Morissette is in the FooBar database and has the album Jagged Little Pill in it.\n    \n    > Finished chain.\n\n\n\n\n\n    \'Alanis Morissette is in the FooBar database and has the album Jagged Little Pill in it.\'\n'))))}c.isMDXComponent=!0;const h={},u="MRKL Chat",p={unversionedId:"modules/agents/agent_types/mrkl_chat",id:"modules/agents/agent_types/mrkl_chat",title:"MRKL Chat",description:"This notebook showcases using an agent to replicate the MRKL chain using an agent optimized for chat models.",source:"@site/docs/modules/agents/agent_types/mrkl_chat.mdx",sourceDirName:"modules/agents/agent_types",slug:"/modules/agents/agent_types/mrkl_chat",permalink:"/langchain-docs-scratch/docs/modules/agents/agent_types/mrkl_chat",draft:!1,editUrl:"https://github.com/hwchase17/langchainjs/edit/main/docs/docs/modules/agents/agent_types/mrkl_chat.mdx",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"MRKL",permalink:"/langchain-docs-scratch/docs/modules/agents/agent_types/mrkl"},next:{title:"Plan and execute",permalink:"/langchain-docs-scratch/docs/modules/agents/agent_types/plan_and_execute"}},d={},m=[],g={toc:m},f="wrapper";function b(e){let{components:t,...n}=e;return(0,o.kt)(f,(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"mrkl-chat"},"MRKL Chat"),(0,o.kt)("p",null,"This notebook showcases using an agent to replicate the MRKL chain using an agent optimized for chat models."),(0,o.kt)("p",null,"This uses the example Chinook database.\nTo set it up follow the instructions on ",(0,o.kt)("a",{parentName:"p",href:"https://database.guide/2-sample-databases-sqlite/"},"https://database.guide/2-sample-databases-sqlite/"),", placing the ",(0,o.kt)("inlineCode",{parentName:"p"},".db")," file in a notebooks folder at the root of this repository."),(0,o.kt)(c,{mdxType:"Example"}))}b.isMDXComponent=!0}}]);