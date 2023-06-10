"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[68179],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),h=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=h(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=h(n),d=a,m=p["".concat(s,".").concat(d)]||p[d]||u[d]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var h=2;h<o;h++)i[h]=n[h];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},87804:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>h});var r=n(87462),a=(n(67294),n(3905));const o={},i="Search Tools",l={unversionedId:"modules/agents/tools/integrations/search_tools",id:"modules/agents/tools/integrations/search_tools",title:"Search Tools",description:"This notebook shows off usage of various search tools.",source:"@site/docs/modules/agents/tools/integrations/search_tools.md",sourceDirName:"modules/agents/tools/integrations",slug:"/modules/agents/tools/integrations/search_tools",permalink:"/langchain-docs-scratch/docs/modules/agents/tools/integrations/search_tools",draft:!1,editUrl:"https://github.com/hwchase17/langchainjs/edit/main/docs/docs/modules/agents/tools/integrations/search_tools.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"SceneXplain",permalink:"/langchain-docs-scratch/docs/modules/agents/tools/integrations/sceneXplain"},next:{title:"SearxNG Search API",permalink:"/langchain-docs-scratch/docs/modules/agents/tools/integrations/searx_search"}},s={},h=[{value:"Google Serper API Wrapper",id:"google-serper-api-wrapper",level:2},{value:"SerpAPI",id:"serpapi",level:2},{value:"GoogleSearchAPIWrapper",id:"googlesearchapiwrapper",level:2},{value:"SearxNG Meta Search Engine",id:"searxng-meta-search-engine",level:2}],c=(p="CodeOutputBlock",function(e){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var p;const u={toc:h},d="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"search-tools"},"Search Tools"),(0,a.kt)("p",null,"This notebook shows off usage of various search tools."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from langchain.agents import load_tools\nfrom langchain.agents import initialize_agent\nfrom langchain.agents import AgentType\nfrom langchain.llms import OpenAI\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"llm = OpenAI(temperature=0)\n")),(0,a.kt)("h2",{id:"google-serper-api-wrapper"},"Google Serper API Wrapper"),(0,a.kt)("p",null,"First, let's try to use the Google Serper API tool."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'tools = load_tools(["google-serper"], llm=llm)\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"agent = initialize_agent(tools, llm, agent=AgentType.ZERO_SHOT_REACT_DESCRIPTION, verbose=True)\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'agent.run("What is the weather in Pomfret?")\n')),(0,a.kt)(c,{lang:"python",mdxType:"CodeOutputBlock"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    \n    \n    > Entering new AgentExecutor chain...\n     I should look up the current weather conditions.\n    Action: Search\n    Action Input: \"weather in Pomfret\"\n    Observation: 37\xb0F\n    Thought: I now know the current temperature in Pomfret.\n    Final Answer: The current temperature in Pomfret is 37\xb0F.\n    \n    > Finished chain.\n\n\n\n\n\n    'The current temperature in Pomfret is 37\xb0F.'\n"))),(0,a.kt)("h2",{id:"serpapi"},"SerpAPI"),(0,a.kt)("p",null,"Now, let's use the SerpAPI tool."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'tools = load_tools(["serpapi"], llm=llm)\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"agent = initialize_agent(tools, llm, agent=AgentType.ZERO_SHOT_REACT_DESCRIPTION, verbose=True)\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'agent.run("What is the weather in Pomfret?")\n')),(0,a.kt)(c,{lang:"python",mdxType:"CodeOutputBlock"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    \n    \n    > Entering new AgentExecutor chain...\n     I need to find out what the current weather is in Pomfret.\n    Action: Search\n    Action Input: \"weather in Pomfret\"\n    Observation: Partly cloudy skies during the morning hours will give way to cloudy skies with light rain and snow developing in the afternoon. High 42F. Winds WNW at 10 to 15 ...\n    Thought: I now know the current weather in Pomfret.\n    Final Answer: Partly cloudy skies during the morning hours will give way to cloudy skies with light rain and snow developing in the afternoon. High 42F. Winds WNW at 10 to 15 mph.\n    \n    > Finished chain.\n\n\n\n\n\n    'Partly cloudy skies during the morning hours will give way to cloudy skies with light rain and snow developing in the afternoon. High 42F. Winds WNW at 10 to 15 mph.'\n"))),(0,a.kt)("h2",{id:"googlesearchapiwrapper"},"GoogleSearchAPIWrapper"),(0,a.kt)("p",null,"Now, let's use the official Google Search API Wrapper."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'tools = load_tools(["google-search"], llm=llm)\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"agent = initialize_agent(tools, llm, agent=AgentType.ZERO_SHOT_REACT_DESCRIPTION, verbose=True)\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'agent.run("What is the weather in Pomfret?")\n')),(0,a.kt)(c,{lang:"python",mdxType:"CodeOutputBlock"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    \n    \n    > Entering new AgentExecutor chain...\n     I should look up the current weather conditions.\n    Action: Google Search\n    Action Input: \"weather in Pomfret\"\n    Observation: Showers early becoming a steady light rain later in the day. Near record high temperatures. High around 60F. Winds SW at 10 to 15 mph. Chance of rain 60%. Pomfret, CT Weather Forecast, with current conditions, wind, air quality, and what to expect for the next 3 days. Hourly Weather-Pomfret, CT. As of 12:52 am EST. Special Weather Statement +2\xa0... Hazardous Weather Conditions. Special Weather Statement ... Pomfret CT. Tonight ... National Digital Forecast Database Maximum Temperature Forecast. Pomfret Center Weather Forecasts. Weather Underground provides local & long-range weather forecasts, weatherreports, maps & tropical weather conditions for\xa0... Pomfret, CT 12 hour by hour weather forecast includes precipitation, temperatures, sky conditions, rain chance, dew-point, relative humidity, wind direction\xa0... North Pomfret Weather Forecasts. Weather Underground provides local & long-range weather forecasts, weatherreports, maps & tropical weather conditions for\xa0... Today's Weather - Pomfret, CT. Dec 31, 2022 4:00 PM. Putnam MS. --. Weather forecast icon. Feels like --. Hi --. Lo --. Pomfret, CT temperature trend for the next 14 Days. Find daytime highs and nighttime lows from TheWeatherNetwork.com. Pomfret, MD Weather Forecast Date: 332 PM EST Wed Dec 28 2022. The area/counties/county of: Charles, including the cites of: St. Charles and Waldorf.\n    Thought: I now know the current weather conditions in Pomfret.\n    Final Answer: Showers early becoming a steady light rain later in the day. Near record high temperatures. High around 60F. Winds SW at 10 to 15 mph. Chance of rain 60%.\n    > Finished AgentExecutor chain.\n\n\n\n\n\n    'Showers early becoming a steady light rain later in the day. Near record high temperatures. High around 60F. Winds SW at 10 to 15 mph. Chance of rain 60%.'\n"))),(0,a.kt)("h2",{id:"searxng-meta-search-engine"},"SearxNG Meta Search Engine"),(0,a.kt)("p",null,"Here we will be using a self hosted SearxNG meta search engine."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'tools = load_tools(["searx-search"], searx_host="http://localhost:8888", llm=llm)\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"agent = initialize_agent(tools, llm, agent=AgentType.ZERO_SHOT_REACT_DESCRIPTION, verbose=True)\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'agent.run("What is the weather in Pomfret")\n')),(0,a.kt)(c,{lang:"python",mdxType:"CodeOutputBlock"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    \n    \n    > Entering new AgentExecutor chain...\n     I should look up the current weather\n    Action: SearX Search\n    Action Input: \"weather in Pomfret\"\n    Observation: Mainly cloudy with snow showers around in the morning. High around 40F. Winds NNW at 5 to 10 mph. Chance of snow 40%. Snow accumulations less than one inch.\n    \n    10 Day Weather - Pomfret, MD As of 1:37 pm EST Today 49\xb0/ 41\xb0 52% Mon 27 | Day 49\xb0 52% SE 14 mph Cloudy with occasional rain showers. High 49F. Winds SE at 10 to 20 mph. Chance of rain 50%....\n    \n    10 Day Weather - Pomfret, VT As of 3:51 am EST Special Weather Statement Today 39\xb0/ 32\xb0 37% Wed 01 | Day 39\xb0 37% NE 4 mph Cloudy with snow showers developing for the afternoon. High 39F....\n    \n    Pomfret, CT ; Current Weather. 1:06 AM. 35\xb0F \xb7 RealFeel\xae 32\xb0 ; TODAY'S WEATHER FORECAST. 3/3. 44\xb0Hi. RealFeel\xae 50\xb0 ; TONIGHT'S WEATHER FORECAST. 3/3. 32\xb0Lo.\n    \n    Pomfret, MD Forecast Today Hourly Daily Morning 41\xb0 1% Afternoon 43\xb0 0% Evening 35\xb0 3% Overnight 34\xb0 2% Don't Miss Finally, Here\u2019s Why We Get More Colds and Flu When It\u2019s Cold Coast-To-Coast...\n    \n    Pomfret, MD Weather Forecast | AccuWeather Current Weather 5:35 PM 35\xb0 F RealFeel\xae 36\xb0 RealFeel Shade\u2122 36\xb0 Air Quality Excellent Wind E 3 mph Wind Gusts 5 mph Cloudy More Details WinterCast...\n    \n    Pomfret, VT Weather Forecast | AccuWeather Current Weather 11:21 AM 23\xb0 F RealFeel\xae 27\xb0 RealFeel Shade\u2122 25\xb0 Air Quality Fair Wind ESE 3 mph Wind Gusts 7 mph Cloudy More Details WinterCast...\n    \n    Pomfret Center, CT Weather Forecast | AccuWeather Daily Current Weather 6:50 PM 39\xb0 F RealFeel\xae 36\xb0 Air Quality Fair Wind NW 6 mph Wind Gusts 16 mph Mostly clear More Details WinterCast...\n    \n    12:00 pm \xb7 Feels Like36\xb0 \xb7 WindN 5 mph \xb7 Humidity43% \xb7 UV Index3 of 10 \xb7 Cloud Cover65% \xb7 Rain Amount0 in ...\n    \n    Pomfret Center, CT Weather Conditions | Weather Underground star Popular Cities San Francisco, CA 49 \xb0F Clear Manhattan, NY 37 \xb0F Fair Schiller Park, IL (60176) warning39 \xb0F Mostly Cloudy...\n    Thought: I now know the final answer\n    Final Answer: The current weather in Pomfret is mainly cloudy with snow showers around in the morning. The temperature is around 40F with winds NNW at 5 to 10 mph. Chance of snow is 40%.\n    \n    > Finished chain.\n\n\n\n\n\n    'The current weather in Pomfret is mainly cloudy with snow showers around in the morning. The temperature is around 40F with winds NNW at 5 to 10 mph. Chance of snow is 40%.'\n"))))}m.isMDXComponent=!0}}]);