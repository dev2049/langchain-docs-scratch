"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[37944],{3905:(e,a,t)=>{t.d(a,{Zo:()=>d,kt:()=>_});var n=t(67294);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,n,o=function(e,a){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),l=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},d=function(e){var a=l(e.components);return n.createElement(s.Provider,{value:a},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},c=n.forwardRef((function(e,a){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),m=l(t),c=o,_=m["".concat(s,".").concat(c)]||m[c]||u[c]||i;return t?n.createElement(_,r(r({ref:a},d),{},{components:t})):n.createElement(_,r({ref:a},d))}));function _(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var i=t.length,r=new Array(i);r[0]=c;var p={};for(var s in a)hasOwnProperty.call(a,s)&&(p[s]=a[s]);p.originalType=e,p[m]="string"==typeof e?e:o,r[1]=p;for(var l=2;l<i;l++)r[l]=t[l];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},40050:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>r,default:()=>_,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var n=t(87462),o=(t(67294),t(3905));const i={},r="Image captions",p={unversionedId:"modules/data_io/document_loaders/integrations/image_captions",id:"modules/data_io/document_loaders/integrations/image_captions",title:"Image captions",description:"By default, the loader utilizes the pre-trained Salesforce BLIP image captioning model.",source:"@site/docs/modules/data_io/document_loaders/integrations/image_captions.md",sourceDirName:"modules/data_io/document_loaders/integrations",slug:"/modules/data_io/document_loaders/integrations/image_captions",permalink:"/langchain-docs-scratch/docs/modules/data_io/document_loaders/integrations/image_captions",draft:!1,editUrl:"https://github.com/hwchase17/langchainjs/edit/main/docs/docs/modules/data_io/document_loaders/integrations/image_captions.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Images",permalink:"/langchain-docs-scratch/docs/modules/data_io/document_loaders/integrations/image"},next:{title:"IMSDb",permalink:"/langchain-docs-scratch/docs/modules/data_io/document_loaders/integrations/imsdb"}},s={},l=[{value:"Prepare a list of image urls from Wikimedia",id:"prepare-a-list-of-image-urls-from-wikimedia",level:3},{value:"Create the loader",id:"create-the-loader",level:3},{value:"Create the index",id:"create-the-index",level:3},{value:"Query",id:"query",level:3}],d=(m="CodeOutputBlock",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var m;const u={toc:l},c="wrapper";function _(e){let{components:a,...t}=e;return(0,o.kt)(c,(0,n.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"image-captions"},"Image captions"),(0,o.kt)("p",null,"By default, the loader utilizes the pre-trained ",(0,o.kt)("a",{parentName:"p",href:"https://huggingface.co/Salesforce/blip-image-captioning-base"},"Salesforce BLIP image captioning model"),"."),(0,o.kt)("p",null,"This notebook shows how to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"ImageCaptionLoader")," to generate a query-able index of image captions"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"#!pip install transformers\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from langchain.document_loaders import ImageCaptionLoader\n")),(0,o.kt)("h3",{id:"prepare-a-list-of-image-urls-from-wikimedia"},"Prepare a list of image urls from Wikimedia"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"list_image_urls = [\n    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Hyla_japonica_sep01.jpg/260px-Hyla_japonica_sep01.jpg',\n    'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Tibur%C3%B3n_azul_%28Prionace_glauca%29%2C_canal_Fayal-Pico%2C_islas_Azores%2C_Portugal%2C_2020-07-27%2C_DD_14.jpg/270px-Tibur%C3%B3n_azul_%28Prionace_glauca%29%2C_canal_Fayal-Pico%2C_islas_Azores%2C_Portugal%2C_2020-07-27%2C_DD_14.jpg',\n    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Thure_de_Thulstrup_-_Battle_of_Shiloh.jpg/251px-Thure_de_Thulstrup_-_Battle_of_Shiloh.jpg',\n    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Passion_fruits_-_whole_and_halved.jpg/270px-Passion_fruits_-_whole_and_halved.jpg',\n    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Messier83_-_Heic1403a.jpg/277px-Messier83_-_Heic1403a.jpg',\n    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/2022-01-22_Men%27s_World_Cup_at_2021-22_St._Moritz%E2%80%93Celerina_Luge_World_Cup_and_European_Championships_by_Sandro_Halank%E2%80%93257.jpg/288px-2022-01-22_Men%27s_World_Cup_at_2021-22_St._Moritz%E2%80%93Celerina_Luge_World_Cup_and_European_Championships_by_Sandro_Halank%E2%80%93257.jpg',\n    'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Wiesen_Pippau_%28Crepis_biennis%29-20220624-RM-123950.jpg/224px-Wiesen_Pippau_%28Crepis_biennis%29-20220624-RM-123950.jpg',\n]\n")),(0,o.kt)("h3",{id:"create-the-loader"},"Create the loader"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"loader = ImageCaptionLoader(path_images=list_image_urls)\nlist_docs = loader.load()\nlist_docs\n")),(0,o.kt)(d,{lang:"python",mdxType:"CodeOutputBlock"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    /Users/saitosean/dev/langchain/.venv/lib/python3.10/site-packages/transformers/generation/utils.py:1313: UserWarning: Using `max_length`'s default (20) to control the generation length. This behaviour is deprecated and will be removed from the config in v5 of Transformers -- we recommend using `max_new_tokens` to control the maximum length of the generation.\n      warnings.warn(\n\n\n\n\n\n    [Document(page_content='an image of a frog on a flower [SEP]', metadata={'image_path': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Hyla_japonica_sep01.jpg/260px-Hyla_japonica_sep01.jpg'}),\n     Document(page_content='an image of a shark swimming in the ocean [SEP]', metadata={'image_path': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Tibur%C3%B3n_azul_%28Prionace_glauca%29%2C_canal_Fayal-Pico%2C_islas_Azores%2C_Portugal%2C_2020-07-27%2C_DD_14.jpg/270px-Tibur%C3%B3n_azul_%28Prionace_glauca%29%2C_canal_Fayal-Pico%2C_islas_Azores%2C_Portugal%2C_2020-07-27%2C_DD_14.jpg'}),\n     Document(page_content='an image of a painting of a battle scene [SEP]', metadata={'image_path': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Thure_de_Thulstrup_-_Battle_of_Shiloh.jpg/251px-Thure_de_Thulstrup_-_Battle_of_Shiloh.jpg'}),\n     Document(page_content='an image of a passion fruit and a half cut passion [SEP]', metadata={'image_path': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Passion_fruits_-_whole_and_halved.jpg/270px-Passion_fruits_-_whole_and_halved.jpg'}),\n     Document(page_content='an image of the spiral galaxy [SEP]', metadata={'image_path': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Messier83_-_Heic1403a.jpg/277px-Messier83_-_Heic1403a.jpg'}),\n     Document(page_content='an image of a man on skis in the snow [SEP]', metadata={'image_path': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/2022-01-22_Men%27s_World_Cup_at_2021-22_St._Moritz%E2%80%93Celerina_Luge_World_Cup_and_European_Championships_by_Sandro_Halank%E2%80%93257.jpg/288px-2022-01-22_Men%27s_World_Cup_at_2021-22_St._Moritz%E2%80%93Celerina_Luge_World_Cup_and_European_Championships_by_Sandro_Halank%E2%80%93257.jpg'}),\n     Document(page_content='an image of a flower in the dark [SEP]', metadata={'image_path': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Wiesen_Pippau_%28Crepis_biennis%29-20220624-RM-123950.jpg/224px-Wiesen_Pippau_%28Crepis_biennis%29-20220624-RM-123950.jpg'})]\n"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from PIL import Image\nimport requests\n\nImage.open(requests.get(list_image_urls[0], stream=True).raw).convert('RGB')\n")),(0,o.kt)(d,{lang:"python",mdxType:"CodeOutputBlock"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    \n![png](_image_captions_files/output_7_0.png)\n    \n"))),(0,o.kt)("h3",{id:"create-the-index"},"Create the index"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from langchain.indexes import VectorstoreIndexCreator\nindex = VectorstoreIndexCreator().from_loaders([loader])\n")),(0,o.kt)(d,{lang:"python",mdxType:"CodeOutputBlock"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    /Users/saitosean/dev/langchain/.venv/lib/python3.10/site-packages/tqdm/auto.py:21: TqdmWarning: IProgress not found. Please update jupyter and ipywidgets. See https://ipywidgets.readthedocs.io/en/stable/user_install.html\n      from .autonotebook import tqdm as notebook_tqdm\n    /Users/saitosean/dev/langchain/.venv/lib/python3.10/site-packages/transformers/generation/utils.py:1313: UserWarning: Using `max_length`'s default (20) to control the generation length. This behaviour is deprecated and will be removed from the config in v5 of Transformers -- we recommend using `max_new_tokens` to control the maximum length of the generation.\n      warnings.warn(\n    Using embedded DuckDB without persistence: data will be transient\n"))),(0,o.kt)("h3",{id:"query"},"Query"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'query = "What\'s the painting about?"\nindex.query(query)\n')),(0,o.kt)(d,{lang:"python",mdxType:"CodeOutputBlock"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    ' The painting is about a battle scene.'\n"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'query = "What kind of images are there?"\nindex.query(query)\n')),(0,o.kt)(d,{lang:"python",mdxType:"CodeOutputBlock"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    ' There are images of a spiral galaxy, a painting of a battle scene, a flower in the dark, and a frog on a flower.'\n"))))}_.isMDXComponent=!0}}]);