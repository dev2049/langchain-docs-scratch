"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[70955],{3905:(e,a,t)=>{t.d(a,{Zo:()=>m,kt:()=>y});var n=t(67294);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,o=function(e,a){if(null==e)return{};var t,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=n.createContext({}),c=function(e){var a=n.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},m=function(e){var a=c(e.components);return n.createElement(i.Provider,{value:a},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=c(t),u=o,y=p["".concat(i,".").concat(u)]||p[u]||d[u]||r;return t?n.createElement(y,l(l({ref:a},m),{},{components:t})):n.createElement(y,l({ref:a},m))}));function y(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var r=t.length,l=new Array(r);l[0]=u;var s={};for(var i in a)hasOwnProperty.call(a,i)&&(s[i]=a[i]);s.originalType=e,s[p]="string"==typeof e?e:o,l[1]=s;for(var c=2;c<r;c++)l[c]=t[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},44852:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>i,contentTitle:()=>l,default:()=>y,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var n=t(87462),o=(t(67294),t(3905));const r={},l="PySpark DataFrame Loader",s={unversionedId:"modules/data_io/document_loaders/integrations/pyspark_dataframe",id:"modules/data_io/document_loaders/integrations/pyspark_dataframe",title:"PySpark DataFrame Loader",description:"This notebook goes over how to load data from a PySpark DataFrame.",source:"@site/docs/modules/data_io/document_loaders/integrations/pyspark_dataframe.md",sourceDirName:"modules/data_io/document_loaders/integrations",slug:"/modules/data_io/document_loaders/integrations/pyspark_dataframe",permalink:"/langchain-docs-scratch/docs/modules/data_io/document_loaders/integrations/pyspark_dataframe",draft:!1,editUrl:"https://github.com/hwchase17/langchainjs/edit/main/docs/docs/modules/data_io/document_loaders/integrations/pyspark_dataframe.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Psychic",permalink:"/langchain-docs-scratch/docs/modules/data_io/document_loaders/integrations/psychic"},next:{title:"ReadTheDocs Documentation",permalink:"/langchain-docs-scratch/docs/modules/data_io/document_loaders/integrations/readthedocs_documentation"}},i={},c=[],m=(p="CodeOutputBlock",function(e){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var p;const d={toc:c},u="wrapper";function y(e){let{components:a,...t}=e;return(0,o.kt)(u,(0,n.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"pyspark-dataframe-loader"},"PySpark DataFrame Loader"),(0,o.kt)("p",null,"This notebook goes over how to load data from a ",(0,o.kt)("a",{parentName:"p",href:"https://spark.apache.org/docs/latest/api/python/"},"PySpark")," DataFrame."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"#!pip install pyspark\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from pyspark.sql import SparkSession\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"spark = SparkSession.builder.getOrCreate()\n")),(0,o.kt)(m,{lang:"python",mdxType:"CodeOutputBlock"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'    Setting default log level to "WARN".\n    To adjust logging level use sc.setLogLevel(newLevel). For SparkR, use setLogLevel(newLevel).\n    23/05/31 14:08:33 WARN NativeCodeLoader: Unable to load native-hadoop library for your platform... using builtin-java classes where applicable\n'))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"df = spark.read.csv('example_data/mlb_teams_2012.csv', header=True)\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from langchain.document_loaders import PySparkDataFrameLoader\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'loader = PySparkDataFrameLoader(spark, df, page_content_column="Team")\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"loader.load()\n")),(0,o.kt)(m,{lang:"python",mdxType:"CodeOutputBlock"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    [Stage 8:>                                                          (0 + 1) / 1]\n\n\n\n\n    [Document(page_content='Nationals', metadata={' \"Payroll (millions)\"': '     81.34', ' \"Wins\"': ' 98'}),\n     Document(page_content='Reds', metadata={' \"Payroll (millions)\"': '          82.20', ' \"Wins\"': ' 97'}),\n     Document(page_content='Yankees', metadata={' \"Payroll (millions)\"': '      197.96', ' \"Wins\"': ' 95'}),\n     Document(page_content='Giants', metadata={' \"Payroll (millions)\"': '       117.62', ' \"Wins\"': ' 94'}),\n     Document(page_content='Braves', metadata={' \"Payroll (millions)\"': '        83.31', ' \"Wins\"': ' 94'}),\n     Document(page_content='Athletics', metadata={' \"Payroll (millions)\"': '     55.37', ' \"Wins\"': ' 94'}),\n     Document(page_content='Rangers', metadata={' \"Payroll (millions)\"': '      120.51', ' \"Wins\"': ' 93'}),\n     Document(page_content='Orioles', metadata={' \"Payroll (millions)\"': '       81.43', ' \"Wins\"': ' 93'}),\n     Document(page_content='Rays', metadata={' \"Payroll (millions)\"': '          64.17', ' \"Wins\"': ' 90'}),\n     Document(page_content='Angels', metadata={' \"Payroll (millions)\"': '       154.49', ' \"Wins\"': ' 89'}),\n     Document(page_content='Tigers', metadata={' \"Payroll (millions)\"': '       132.30', ' \"Wins\"': ' 88'}),\n     Document(page_content='Cardinals', metadata={' \"Payroll (millions)\"': '    110.30', ' \"Wins\"': ' 88'}),\n     Document(page_content='Dodgers', metadata={' \"Payroll (millions)\"': '       95.14', ' \"Wins\"': ' 86'}),\n     Document(page_content='White Sox', metadata={' \"Payroll (millions)\"': '     96.92', ' \"Wins\"': ' 85'}),\n     Document(page_content='Brewers', metadata={' \"Payroll (millions)\"': '       97.65', ' \"Wins\"': ' 83'}),\n     Document(page_content='Phillies', metadata={' \"Payroll (millions)\"': '     174.54', ' \"Wins\"': ' 81'}),\n     Document(page_content='Diamondbacks', metadata={' \"Payroll (millions)\"': '  74.28', ' \"Wins\"': ' 81'}),\n     Document(page_content='Pirates', metadata={' \"Payroll (millions)\"': '       63.43', ' \"Wins\"': ' 79'}),\n     Document(page_content='Padres', metadata={' \"Payroll (millions)\"': '        55.24', ' \"Wins\"': ' 76'}),\n     Document(page_content='Mariners', metadata={' \"Payroll (millions)\"': '      81.97', ' \"Wins\"': ' 75'}),\n     Document(page_content='Mets', metadata={' \"Payroll (millions)\"': '          93.35', ' \"Wins\"': ' 74'}),\n     Document(page_content='Blue Jays', metadata={' \"Payroll (millions)\"': '     75.48', ' \"Wins\"': ' 73'}),\n     Document(page_content='Royals', metadata={' \"Payroll (millions)\"': '        60.91', ' \"Wins\"': ' 72'}),\n     Document(page_content='Marlins', metadata={' \"Payroll (millions)\"': '      118.07', ' \"Wins\"': ' 69'}),\n     Document(page_content='Red Sox', metadata={' \"Payroll (millions)\"': '      173.18', ' \"Wins\"': ' 69'}),\n     Document(page_content='Indians', metadata={' \"Payroll (millions)\"': '       78.43', ' \"Wins\"': ' 68'}),\n     Document(page_content='Twins', metadata={' \"Payroll (millions)\"': '         94.08', ' \"Wins\"': ' 66'}),\n     Document(page_content='Rockies', metadata={' \"Payroll (millions)\"': '       78.06', ' \"Wins\"': ' 64'}),\n     Document(page_content='Cubs', metadata={' \"Payroll (millions)\"': '          88.19', ' \"Wins\"': ' 61'}),\n     Document(page_content='Astros', metadata={' \"Payroll (millions)\"': '        60.65', ' \"Wins\"': ' 55'})]\n"))))}y.isMDXComponent=!0}}]);