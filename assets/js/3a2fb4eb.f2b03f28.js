"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[11019],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>u});var a=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var r=a.createContext({}),c=function(e){var n=a.useContext(r),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=c(e.components);return a.createElement(r.Provider,{value:n},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,s=e.originalType,r=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),h=c(t),d=l,u=h["".concat(r,".").concat(d)]||h[d]||p[d]||s;return t?a.createElement(u,o(o({ref:n},m),{},{components:t})):a.createElement(u,o({ref:n},m))}));function u(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var s=t.length,o=new Array(s);o[0]=d;var i={};for(var r in n)hasOwnProperty.call(n,r)&&(i[r]=n[r]);i.originalType=e,i[h]="string"==typeof e?e:l,o[1]=i;for(var c=2;c<s;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},63919:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var a=t(87462),l=(t(67294),t(3905));const s={},o="Caching integrations",i={unversionedId:"modules/model_io/models/llms/integrations/llm_caching",id:"modules/model_io/models/llms/integrations/llm_caching",title:"Caching integrations",description:"This notebook covers how to cache results of individual LLM calls.",source:"@site/docs/modules/model_io/models/llms/integrations/llm_caching.md",sourceDirName:"modules/model_io/models/llms/integrations",slug:"/modules/model_io/models/llms/integrations/llm_caching",permalink:"/langchain-docs-scratch/docs/modules/model_io/models/llms/integrations/llm_caching",draft:!1,editUrl:"https://github.com/hwchase17/langchainjs/edit/main/docs/docs/modules/model_io/models/llms/integrations/llm_caching.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Llama-cpp",permalink:"/langchain-docs-scratch/docs/modules/model_io/models/llms/integrations/llamacpp"},next:{title:"Manifest",permalink:"/langchain-docs-scratch/docs/modules/model_io/models/llms/integrations/manifest"}},r={},c=[{value:"In Memory Cache",id:"in-memory-cache",level:2},{value:"SQLite Cache",id:"sqlite-cache",level:2},{value:"Redis Cache",id:"redis-cache",level:2},{value:"Standard Cache",id:"standard-cache",level:3},{value:"Semantic Cache",id:"semantic-cache",level:3},{value:"GPTCache",id:"gptcache",level:2},{value:"Momento Cache",id:"momento-cache",level:2},{value:"SQLAlchemy Cache",id:"sqlalchemy-cache",level:2},{value:"Custom SQLAlchemy Schemas",id:"custom-sqlalchemy-schemas",level:3},{value:"Optional Caching",id:"optional-caching",level:2},{value:"Optional Caching in Chains",id:"optional-caching-in-chains",level:2}],m=(h="CodeOutputBlock",function(e){return console.warn("Component "+h+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",e)});var h;const p={toc:c},d="wrapper";function u(e){let{components:n,...t}=e;return(0,l.kt)(d,(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"caching-integrations"},"Caching integrations"),(0,l.kt)("p",null,"This notebook covers how to cache results of individual LLM calls."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'import langchain\nfrom langchain.llms import OpenAI\n\n# To make the caching really obvious, lets use a slower model.\nllm = OpenAI(model_name="text-davinci-002", n=2, best_of=2)\n')),(0,l.kt)("h2",{id:"in-memory-cache"},"In Memory Cache"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"from langchain.cache import InMemoryCache\nlangchain.llm_cache = InMemoryCache()\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'# The first time, it is not yet in cache, so it should take longer\nllm("Tell me a joke")\n')),(0,l.kt)(m,{lang:"python",mdxType:"CodeOutputBlock"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'    CPU times: user 35.9 ms, sys: 28.6 ms, total: 64.6 ms\n    Wall time: 4.83 s\n\n\n\n\n\n    "\\n\\nWhy couldn\'t the bicycle stand up by itself? It was...two tired!"\n'))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'# The second time it is, so it goes faster\nllm("Tell me a joke")\n')),(0,l.kt)(m,{lang:"python",mdxType:"CodeOutputBlock"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"    CPU times: user 238 \xb5s, sys: 143 \xb5s, total: 381 \xb5s\n    Wall time: 1.76 ms\n\n\n\n\n\n    '\\n\\nWhy did the chicken cross the road?\\n\\nTo get to the other side.'\n"))),(0,l.kt)("h2",{id:"sqlite-cache"},"SQLite Cache"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"rm .langchain.db\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'# We can do the same thing with a SQLite cache\nfrom langchain.cache import SQLiteCache\nlangchain.llm_cache = SQLiteCache(database_path=".langchain.db")\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'# The first time, it is not yet in cache, so it should take longer\nllm("Tell me a joke")\n')),(0,l.kt)(m,{lang:"python",mdxType:"CodeOutputBlock"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"    CPU times: user 17 ms, sys: 9.76 ms, total: 26.7 ms\n    Wall time: 825 ms\n\n\n\n\n\n    '\\n\\nWhy did the chicken cross the road?\\n\\nTo get to the other side.'\n"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'# The second time it is, so it goes faster\nllm("Tell me a joke")\n')),(0,l.kt)(m,{lang:"python",mdxType:"CodeOutputBlock"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"    CPU times: user 2.46 ms, sys: 1.23 ms, total: 3.7 ms\n    Wall time: 2.67 ms\n\n\n\n\n\n    '\\n\\nWhy did the chicken cross the road?\\n\\nTo get to the other side.'\n"))),(0,l.kt)("h2",{id:"redis-cache"},"Redis Cache"),(0,l.kt)("h3",{id:"standard-cache"},"Standard Cache"),(0,l.kt)("p",null,"Use ",(0,l.kt)("a",{parentName:"p",href:"../../../../ecosystem/redis.md"},"Redis")," to cache prompts and responses."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"# We can do the same thing with a Redis cache\n# (make sure your local Redis instance is running first before running this example)\nfrom redis import Redis\nfrom langchain.cache import RedisCache\n\nlangchain.llm_cache = RedisCache(redis_=Redis())\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'# The first time, it is not yet in cache, so it should take longer\nllm("Tell me a joke")\n')),(0,l.kt)(m,{lang:"python",mdxType:"CodeOutputBlock"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"    CPU times: user 6.88 ms, sys: 8.75 ms, total: 15.6 ms\n    Wall time: 1.04 s\n\n\n\n\n\n    '\\n\\nWhy did the chicken cross the road?\\n\\nTo get to the other side!'\n"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'# The second time it is, so it goes faster\nllm("Tell me a joke")\n')),(0,l.kt)(m,{lang:"python",mdxType:"CodeOutputBlock"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"    CPU times: user 1.59 ms, sys: 610 \xb5s, total: 2.2 ms\n    Wall time: 5.58 ms\n\n\n\n\n\n    '\\n\\nWhy did the chicken cross the road?\\n\\nTo get to the other side!'\n"))),(0,l.kt)("h3",{id:"semantic-cache"},"Semantic Cache"),(0,l.kt)("p",null,"Use ",(0,l.kt)("a",{parentName:"p",href:"../../../../ecosystem/redis.md"},"Redis")," to cache prompts and responses and evaluate hits based on semantic similarity."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'from langchain.embeddings import OpenAIEmbeddings\nfrom langchain.cache import RedisSemanticCache\n\n\nlangchain.llm_cache = RedisSemanticCache(\n    redis_url="redis://localhost:6379",\n    embedding=OpenAIEmbeddings()\n)\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'# The first time, it is not yet in cache, so it should take longer\nllm("Tell me a joke")\n')),(0,l.kt)(m,{lang:"python",mdxType:"CodeOutputBlock"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'    CPU times: user 351 ms, sys: 156 ms, total: 507 ms\n    Wall time: 3.37 s\n\n\n\n\n\n    "\\n\\nWhy don\'t scientists trust atoms?\\nBecause they make up everything."\n'))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'# The second time, while not a direct hit, the question is semantically similar to the original question,\n# so it uses the cached result!\nllm("Tell me one joke")\n')),(0,l.kt)(m,{lang:"python",mdxType:"CodeOutputBlock"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'    CPU times: user 6.25 ms, sys: 2.72 ms, total: 8.97 ms\n    Wall time: 262 ms\n\n\n\n\n\n    "\\n\\nWhy don\'t scientists trust atoms?\\nBecause they make up everything."\n'))),(0,l.kt)("h2",{id:"gptcache"},"GPTCache"),(0,l.kt)("p",null,"We can use ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/zilliztech/GPTCache"},"GPTCache")," for exact match caching OR to cache results based on semantic similarity"),(0,l.kt)("p",null,"Let's first start with an example of exact match"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'from gptcache import Cache\nfrom gptcache.manager.factory import manager_factory\nfrom gptcache.processor.pre import get_prompt\nfrom langchain.cache import GPTCache\nimport hashlib\n\ndef get_hashed_name(name):\n    return hashlib.sha256(name.encode()).hexdigest()\n\ndef init_gptcache(cache_obj: Cache, llm: str):\n    hashed_llm = get_hashed_name(llm)\n    cache_obj.init(\n        pre_embedding_func=get_prompt,\n        data_manager=manager_factory(manager="map", data_dir=f"map_cache_{hashed_llm}"),\n    )\n\nlangchain.llm_cache = GPTCache(init_gptcache)\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'# The first time, it is not yet in cache, so it should take longer\nllm("Tell me a joke")\n')),(0,l.kt)(m,{lang:"python",mdxType:"CodeOutputBlock"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"    CPU times: user 21.5 ms, sys: 21.3 ms, total: 42.8 ms\n    Wall time: 6.2 s\n\n\n\n\n\n    '\\n\\nWhy did the chicken cross the road?\\n\\nTo get to the other side!'\n"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'# The second time it is, so it goes faster\nllm("Tell me a joke")\n')),(0,l.kt)(m,{lang:"python",mdxType:"CodeOutputBlock"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"    CPU times: user 571 \xb5s, sys: 43 \xb5s, total: 614 \xb5s\n    Wall time: 635 \xb5s\n\n\n\n\n\n    '\\n\\nWhy did the chicken cross the road?\\n\\nTo get to the other side!'\n"))),(0,l.kt)("p",null,"Let's now show an example of similarity caching"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'from gptcache import Cache\nfrom gptcache.adapter.api import init_similar_cache\nfrom langchain.cache import GPTCache\nimport hashlib\n\ndef get_hashed_name(name):\n    return hashlib.sha256(name.encode()).hexdigest()\n\ndef init_gptcache(cache_obj: Cache, llm: str):\n    hashed_llm = get_hashed_name(llm)\n    init_similar_cache(cache_obj=cache_obj, data_dir=f"similar_cache_{hashed_llm}")\n\nlangchain.llm_cache = GPTCache(init_gptcache)\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'# The first time, it is not yet in cache, so it should take longer\nllm("Tell me a joke")\n')),(0,l.kt)(m,{lang:"python",mdxType:"CodeOutputBlock"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"    CPU times: user 1.42 s, sys: 279 ms, total: 1.7 s\n    Wall time: 8.44 s\n\n\n\n\n\n    '\\n\\nWhy did the chicken cross the road?\\n\\nTo get to the other side.'\n"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'# This is an exact match, so it finds it in the cache\nllm("Tell me a joke")\n')),(0,l.kt)(m,{lang:"python",mdxType:"CodeOutputBlock"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"    CPU times: user 866 ms, sys: 20 ms, total: 886 ms\n    Wall time: 226 ms\n\n\n\n\n\n    '\\n\\nWhy did the chicken cross the road?\\n\\nTo get to the other side.'\n"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'# This is not an exact match, but semantically within distance so it hits!\nllm("Tell me joke")\n')),(0,l.kt)(m,{lang:"python",mdxType:"CodeOutputBlock"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"    CPU times: user 853 ms, sys: 14.8 ms, total: 868 ms\n    Wall time: 224 ms\n\n\n\n\n\n    '\\n\\nWhy did the chicken cross the road?\\n\\nTo get to the other side.'\n"))),(0,l.kt)("h2",{id:"momento-cache"},"Momento Cache"),(0,l.kt)("p",null,"Use ",(0,l.kt)("a",{parentName:"p",href:"../../../../integrations/momento.md"},"Momento")," to cache prompts and responses."),(0,l.kt)("p",null,"Requires momento to use, uncomment below to install:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"# !pip install momento\n")),(0,l.kt)("p",null,"You'll need to get a Momemto auth token to use this class. This can either be passed in to a momento.CacheClient if you'd like to instantiate that directly, as a named parameter ",(0,l.kt)("inlineCode",{parentName:"p"},"auth_token")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"MomentoChatMessageHistory.from_client_params"),", or can just be set as an environment variable ",(0,l.kt)("inlineCode",{parentName:"p"},"MOMENTO_AUTH_TOKEN"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'from datetime import timedelta\n\nfrom langchain.cache import MomentoCache\n\n\ncache_name = "langchain"\nttl = timedelta(days=1)\nlangchain.llm_cache = MomentoCache.from_client_params(cache_name, ttl)\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'# The first time, it is not yet in cache, so it should take longer\nllm("Tell me a joke")\n')),(0,l.kt)(m,{lang:"python",mdxType:"CodeOutputBlock"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"    CPU times: user 40.7 ms, sys: 16.5 ms, total: 57.2 ms\n    Wall time: 1.73 s\n\n\n\n\n\n    '\\n\\nWhy did the chicken cross the road?\\n\\nTo get to the other side!'\n"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'# The second time it is, so it goes faster\n# When run in the same region as the cache, latencies are single digit ms\nllm("Tell me a joke")\n')),(0,l.kt)(m,{lang:"python",mdxType:"CodeOutputBlock"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"    CPU times: user 3.16 ms, sys: 2.98 ms, total: 6.14 ms\n    Wall time: 57.9 ms\n\n\n\n\n\n    '\\n\\nWhy did the chicken cross the road?\\n\\nTo get to the other side!'\n"))),(0,l.kt)("h2",{id:"sqlalchemy-cache"},"SQLAlchemy Cache"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'# You can use SQLAlchemyCache to cache with any SQL database supported by SQLAlchemy.\n\n# from langchain.cache import SQLAlchemyCache\n# from sqlalchemy import create_engine\n\n# engine = create_engine("postgresql://postgres:postgres@localhost:5432/postgres")\n# langchain.llm_cache = SQLAlchemyCache(engine)\n')),(0,l.kt)("h3",{id:"custom-sqlalchemy-schemas"},"Custom SQLAlchemy Schemas"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'# You can define your own declarative SQLAlchemyCache child class to customize the schema used for caching. For example, to support high-speed fulltext prompt indexing with Postgres, use:\n\nfrom sqlalchemy import Column, Integer, String, Computed, Index, Sequence\nfrom sqlalchemy import create_engine\nfrom sqlalchemy.ext.declarative import declarative_base\nfrom sqlalchemy_utils import TSVectorType\nfrom langchain.cache import SQLAlchemyCache\n\nBase = declarative_base()\n\n\nclass FulltextLLMCache(Base):  # type: ignore\n    """Postgres table for fulltext-indexed LLM Cache"""\n\n    __tablename__ = "llm_cache_fulltext"\n    id = Column(Integer, Sequence(\'cache_id\'), primary_key=True)\n    prompt = Column(String, nullable=False)\n    llm = Column(String, nullable=False)\n    idx = Column(Integer)\n    response = Column(String)\n    prompt_tsv = Column(TSVectorType(), Computed("to_tsvector(\'english\', llm || \' \' || prompt)", persisted=True))\n    __table_args__ = (\n        Index("idx_fulltext_prompt_tsv", prompt_tsv, postgresql_using="gin"),\n    )\n\nengine = create_engine("postgresql://postgres:postgres@localhost:5432/postgres")\nlangchain.llm_cache = SQLAlchemyCache(engine, FulltextLLMCache)\n')),(0,l.kt)("h2",{id:"optional-caching"},"Optional Caching"),(0,l.kt)("p",null,"You can also turn off caching for specific LLMs should you choose. In the example below, even though global caching is enabled, we turn it off for a specific LLM"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'llm = OpenAI(model_name="text-davinci-002", n=2, best_of=2, cache=False)\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'llm("Tell me a joke")\n')),(0,l.kt)(m,{lang:"python",mdxType:"CodeOutputBlock"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"    CPU times: user 5.8 ms, sys: 2.71 ms, total: 8.51 ms\n    Wall time: 745 ms\n\n\n\n\n\n    '\\n\\nWhy did the chicken cross the road?\\n\\nTo get to the other side!'\n"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'llm("Tell me a joke")\n')),(0,l.kt)(m,{lang:"python",mdxType:"CodeOutputBlock"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"    CPU times: user 4.91 ms, sys: 2.64 ms, total: 7.55 ms\n    Wall time: 623 ms\n\n\n\n\n\n    '\\n\\nTwo guys stole a calendar. They got six months each.'\n"))),(0,l.kt)("h2",{id:"optional-caching-in-chains"},"Optional Caching in Chains"),(0,l.kt)("p",null,"You can also turn off caching for particular nodes in chains. Note that because of certain interfaces, its often easier to construct the chain first, and then edit the LLM afterwards."),(0,l.kt)("p",null,"As an example, we will load a summarizer map-reduce chain. We will cache results for the map-step, but then not freeze it for the combine step."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'llm = OpenAI(model_name="text-davinci-002")\nno_cache_llm = OpenAI(model_name="text-davinci-002", cache=False)\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"from langchain.text_splitter import CharacterTextSplitter\nfrom langchain.chains.mapreduce import MapReduceChain\n\ntext_splitter = CharacterTextSplitter()\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"with open('../../../state_of_the_union.txt') as f:\n    state_of_the_union = f.read()\ntexts = text_splitter.split_text(state_of_the_union)\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"from langchain.docstore.document import Document\ndocs = [Document(page_content=t) for t in texts[:3]]\nfrom langchain.chains.summarize import load_summarize_chain\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'chain = load_summarize_chain(llm, chain_type="map_reduce", reduce_llm=no_cache_llm)\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"chain.run(docs)\n")),(0,l.kt)(m,{lang:"python",mdxType:"CodeOutputBlock"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"    CPU times: user 452 ms, sys: 60.3 ms, total: 512 ms\n    Wall time: 5.09 s\n\n\n\n\n\n    '\\n\\nPresident Biden is discussing the American Rescue Plan and the Bipartisan Infrastructure Law, which will create jobs and help Americans. He also talks about his vision for America, which includes investing in education and infrastructure. In response to Russian aggression in Ukraine, the United States is joining with European allies to impose sanctions and isolate Russia. American forces are being mobilized to protect NATO countries in the event that Putin decides to keep moving west. The Ukrainians are bravely fighting back, but the next few weeks will be hard for them. Putin will pay a high price for his actions in the long run. Americans should not be alarmed, as the United States is taking action to protect its interests and allies.'\n"))),(0,l.kt)("p",null,"When we run it again, we see that it runs substantially faster but the final answer is different. This is due to caching at the map steps, but not at the reduce step."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"chain.run(docs)\n")),(0,l.kt)(m,{lang:"python",mdxType:"CodeOutputBlock"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"    CPU times: user 11.5 ms, sys: 4.33 ms, total: 15.8 ms\n    Wall time: 1.04 s\n\n\n\n\n\n    '\\n\\nPresident Biden is discussing the American Rescue Plan and the Bipartisan Infrastructure Law, which will create jobs and help Americans. He also talks about his vision for America, which includes investing in education and infrastructure.'\n"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"rm .langchain.db sqlite.db\n")))}u.isMDXComponent=!0}}]);