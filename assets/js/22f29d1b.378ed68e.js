"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[21444],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(a),u=r,h=d["".concat(l,".").concat(u)]||d[u]||m[u]||i;return a?n.createElement(h,o(o({ref:t},c),{},{components:a})):n.createElement(h,o({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},73494:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const i={},o="Databricks",s={unversionedId:"ecosystem/integrations/databricks",id:"ecosystem/integrations/databricks",title:"Databricks",description:"This notebook covers how to connect to the Databricks runtimes and Databricks SQL using the SQLDatabase wrapper of LangChain.",source:"@site/docs/ecosystem/integrations/databricks.md",sourceDirName:"ecosystem/integrations",slug:"/ecosystem/integrations/databricks",permalink:"/langchain-docs-scratch/docs/ecosystem/integrations/databricks",draft:!1,editUrl:"https://github.com/hwchase17/langchainjs/edit/main/docs/docs/ecosystem/integrations/databricks.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Databerry",permalink:"/langchain-docs-scratch/docs/ecosystem/integrations/databerry"},next:{title:"DeepInfra",permalink:"/langchain-docs-scratch/docs/ecosystem/integrations/deepinfra"}},l={},p=[{value:"Installation and Setup",id:"installation-and-setup",level:2},{value:"Connecting to Databricks",id:"connecting-to-databricks",level:2},{value:"Syntax",id:"syntax",level:3},{value:"Required Parameters",id:"required-parameters",level:3},{value:"Optional Parameters",id:"optional-parameters",level:3},{value:"Examples",id:"examples",level:2},{value:"SQL Chain example",id:"sql-chain-example",level:3},{value:"SQL Database Agent example",id:"sql-database-agent-example",level:3}],c=(d="CodeOutputBlock",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var d;const m={toc:p},u="wrapper";function h(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"databricks"},"Databricks"),(0,r.kt)("p",null,"This notebook covers how to connect to the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.databricks.com/runtime/index.html"},"Databricks runtimes")," and ",(0,r.kt)("a",{parentName:"p",href:"https://www.databricks.com/product/databricks-sql"},"Databricks SQL")," using the SQLDatabase wrapper of LangChain.\nIt is broken into 3 parts: installation and setup, connecting to Databricks, and examples."),(0,r.kt)("h2",{id:"installation-and-setup"},"Installation and Setup"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pip install databricks-sql-connector\n")),(0,r.kt)("h2",{id:"connecting-to-databricks"},"Connecting to Databricks"),(0,r.kt)("p",null,"You can connect to ",(0,r.kt)("a",{parentName:"p",href:"https://docs.databricks.com/runtime/index.html"},"Databricks runtimes")," and ",(0,r.kt)("a",{parentName:"p",href:"https://www.databricks.com/product/databricks-sql"},"Databricks SQL")," using the ",(0,r.kt)("inlineCode",{parentName:"p"},"SQLDatabase.from_databricks()")," method."),(0,r.kt)("h3",{id:"syntax"},"Syntax"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"SQLDatabase.from_databricks(\n    catalog: str,\n    schema: str,\n    host: Optional[str] = None,\n    api_token: Optional[str] = None,\n    warehouse_id: Optional[str] = None,\n    cluster_id: Optional[str] = None,\n    engine_args: Optional[dict] = None,\n    **kwargs: Any)\n")),(0,r.kt)("h3",{id:"required-parameters"},"Required Parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"catalog"),": The catalog name in the Databricks database."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"schema"),": The schema name in the catalog.")),(0,r.kt)("h3",{id:"optional-parameters"},"Optional Parameters"),(0,r.kt)("p",null,"There following parameters are optional. When executing the method in a Databricks notebook, you don't need to provide them in most of the cases."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"host"),": The Databricks workspace hostname, excluding 'https://' part. Defaults to 'DATABRICKS_HOST' environment variable or current workspace if in a Databricks notebook."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"api_token"),": The Databricks personal access token for accessing the Databricks SQL warehouse or the cluster. Defaults to 'DATABRICKS_API_TOKEN' environment variable or a temporary one is generated if in a Databricks notebook."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"warehouse_id"),": The warehouse ID in the Databricks SQL."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"cluster_id"),": The cluster ID in the Databricks Runtime. If running in a Databricks notebook and both 'warehouse_id' and 'cluster_id' are None, it uses the ID of the cluster the notebook is attached to."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"engine_args"),": The arguments to be used when connecting Databricks."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"**kwargs"),": Additional keyword arguments for the ",(0,r.kt)("inlineCode",{parentName:"li"},"SQLDatabase.from_uri")," method.")),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# Connecting to Databricks with SQLDatabase wrapper\nfrom langchain import SQLDatabase\n\ndb = SQLDatabase.from_databricks(catalog='samples', schema='nyctaxi')\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# Creating a OpenAI Chat LLM wrapper\nfrom langchain.chat_models import ChatOpenAI\n\nllm = ChatOpenAI(temperature=0, model_name="gpt-4")\n')),(0,r.kt)("h3",{id:"sql-chain-example"},"SQL Chain example"),(0,r.kt)("p",null,"This example demonstrates the use of the ",(0,r.kt)("a",{parentName:"p",href:"https://python.langchain.com/en/latest/modules/chains/examples/sqlite.html"},"SQL Chain")," for answering a question over a Databricks database."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from langchain import SQLDatabaseChain\n\ndb_chain = SQLDatabaseChain.from_llm(llm, db, verbose=True)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'db_chain.run("What is the average duration of taxi rides that start between midnight and 6am?")\n')),(0,r.kt)(c,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    \n    \n    > Entering new SQLDatabaseChain chain...\n    What is the average duration of taxi rides that start between midnight and 6am?\n    SQLQuery:SELECT AVG(UNIX_TIMESTAMP(tpep_dropoff_datetime) - UNIX_TIMESTAMP(tpep_pickup_datetime)) as avg_duration\n    FROM trips\n    WHERE HOUR(tpep_pickup_datetime) >= 0 AND HOUR(tpep_pickup_datetime) < 6\n    SQLResult: [(987.8122786304605,)]\n    Answer:The average duration of taxi rides that start between midnight and 6am is 987.81 seconds.\n    > Finished chain.\n\n\n\n\n\n    'The average duration of taxi rides that start between midnight and 6am is 987.81 seconds.'\n"))),(0,r.kt)("h3",{id:"sql-database-agent-example"},"SQL Database Agent example"),(0,r.kt)("p",null,"This example demonstrates the use of the ",(0,r.kt)("a",{parentName:"p",href:"https://python.langchain.com/en/latest/modules/agents/toolkits/examples/sql_database.html"},"SQL Database Agent")," for answering questions over a Databricks database."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from langchain.agents import create_sql_agent\nfrom langchain.agents.agent_toolkits import SQLDatabaseToolkit\n\ntoolkit = SQLDatabaseToolkit(db=db, llm=llm)\nagent = create_sql_agent(\n    llm=llm,\n    toolkit=toolkit,\n    verbose=True\n)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'agent.run("What is the longest trip distance and how long did it take?")\n')),(0,r.kt)(c,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    \n    \n    > Entering new AgentExecutor chain...\n    Action: list_tables_sql_db\n    Action Input: \n    Observation: trips\n    Thought:I should check the schema of the trips table to see if it has the necessary columns for trip distance and duration.\n    Action: schema_sql_db\n    Action Input: trips\n    Observation: \n    CREATE TABLE trips (\n        tpep_pickup_datetime TIMESTAMP, \n        tpep_dropoff_datetime TIMESTAMP, \n        trip_distance FLOAT, \n        fare_amount FLOAT, \n        pickup_zip INT, \n        dropoff_zip INT\n    ) USING DELTA\n    \n    /*\n    3 rows from trips table:\n    tpep_pickup_datetime    tpep_dropoff_datetime   trip_distance   fare_amount pickup_zip  dropoff_zip\n    2016-02-14 16:52:13+00:00   2016-02-14 17:16:04+00:00   4.94    19.0    10282   10171\n    2016-02-04 18:44:19+00:00   2016-02-04 18:46:00+00:00   0.28    3.5 10110   10110\n    2016-02-17 17:13:57+00:00   2016-02-17 17:17:55+00:00   0.7 5.0 10103   10023\n    */\n    Thought:The trips table has the necessary columns for trip distance and duration. I will write a query to find the longest trip distance and its duration.\n    Action: query_checker_sql_db\n    Action Input: SELECT trip_distance, tpep_dropoff_datetime - tpep_pickup_datetime as duration FROM trips ORDER BY trip_distance DESC LIMIT 1\n    Observation: SELECT trip_distance, tpep_dropoff_datetime - tpep_pickup_datetime as duration FROM trips ORDER BY trip_distance DESC LIMIT 1\n    Thought:The query is correct. I will now execute it to find the longest trip distance and its duration.\n    Action: query_sql_db\n    Action Input: SELECT trip_distance, tpep_dropoff_datetime - tpep_pickup_datetime as duration FROM trips ORDER BY trip_distance DESC LIMIT 1\n    Observation: [(30.6, '0 00:43:31.000000000')]\n    Thought:I now know the final answer.\n    Final Answer: The longest trip distance is 30.6 miles and it took 43 minutes and 31 seconds.\n    \n    > Finished chain.\n\n\n\n\n\n    'The longest trip distance is 30.6 miles and it took 43 minutes and 31 seconds.'\n"))))}h.isMDXComponent=!0}}]);