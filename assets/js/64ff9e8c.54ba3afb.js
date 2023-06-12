"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[22742],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||r;return n?o.createElement(h,i(i({ref:t},p),{},{components:n})):o.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},25523:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var o=n(87462),a=(n(67294),n(3905));const r={},i="Vector store-augmented text generation",s={unversionedId:"modules/chains/popular/vector_db_text_generation",id:"modules/chains/popular/vector_db_text_generation",title:"Vector store-augmented text generation",description:"This notebook walks through how to use LangChain for text generation over a vector index. This is useful if we want to generate text that is able to draw from a large body of custom text, for example, generating blog posts that have an understanding of previous blog posts written, or product tutorials that can refer to product documentation.",source:"@site/docs/modules/chains/popular/vector_db_text_generation.md",sourceDirName:"modules/chains/popular",slug:"/modules/chains/popular/vector_db_text_generation",permalink:"/langchain-docs-scratch/docs/modules/chains/popular/vector_db_text_generation",draft:!1,editUrl:"https://github.com/hwchase17/langchainjs/edit/main/docs/docs/modules/chains/popular/vector_db_text_generation.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Retrieval QA with sources",permalink:"/langchain-docs-scratch/docs/modules/chains/popular/vector_db_qa_with_sources"},next:{title:"Additional",permalink:"/langchain-docs-scratch/docs/modules/chains/additional/"}},l={},c=[{value:"Prepare Data",id:"prepare-data",level:2},{value:"Set Up Vector DB",id:"set-up-vector-db",level:2},{value:"Set Up LLM Chain with Custom Prompt",id:"set-up-llm-chain-with-custom-prompt",level:2},{value:"Generate Text",id:"generate-text",level:2}],p=(u="CodeOutputBlock",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var u;const m={toc:c},d="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"vector-store-augmented-text-generation"},"Vector store-augmented text generation"),(0,a.kt)("p",null,"This notebook walks through how to use LangChain for text generation over a vector index. This is useful if we want to generate text that is able to draw from a large body of custom text, for example, generating blog posts that have an understanding of previous blog posts written, or product tutorials that can refer to product documentation."),(0,a.kt)("h2",{id:"prepare-data"},"Prepare Data"),(0,a.kt)("p",null,"First, we prepare the data. For this example, we fetch a documentation site that consists of markdown files hosted on Github and split them into small enough Documents."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from langchain.llms import OpenAI\nfrom langchain.docstore.document import Document\nimport requests\nfrom langchain.embeddings.openai import OpenAIEmbeddings\nfrom langchain.vectorstores import Chroma\nfrom langchain.text_splitter import CharacterTextSplitter\nfrom langchain.prompts import PromptTemplate\nimport pathlib\nimport subprocess\nimport tempfile\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'def get_github_docs(repo_owner, repo_name):\n    with tempfile.TemporaryDirectory() as d:\n        subprocess.check_call(\n            f"git clone --depth 1 https://github.com/{repo_owner}/{repo_name}.git .",\n            cwd=d,\n            shell=True,\n        )\n        git_sha = (\n            subprocess.check_output("git rev-parse HEAD", shell=True, cwd=d)\n            .decode("utf-8")\n            .strip()\n        )\n        repo_path = pathlib.Path(d)\n        markdown_files = list(repo_path.glob("*/*.md")) + list(\n            repo_path.glob("*/*.mdx")\n        )\n        for markdown_file in markdown_files:\n            with open(markdown_file, "r") as f:\n                relative_path = markdown_file.relative_to(repo_path)\n                github_url = f"https://github.com/{repo_owner}/{repo_name}/blob/{git_sha}/{relative_path}"\n                yield Document(page_content=f.read(), metadata={"source": github_url})\n\nsources = get_github_docs("yirenlu92", "deno-manual-forked")\n\nsource_chunks = []\nsplitter = CharacterTextSplitter(separator=" ", chunk_size=1024, chunk_overlap=0)\nfor source in sources:\n    for chunk in splitter.split_text(source.page_content):\n        source_chunks.append(Document(page_content=chunk, metadata=source.metadata))\n')),(0,a.kt)(p,{lang:"python",mdxType:"CodeOutputBlock"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    Cloning into '.'...\n"))),(0,a.kt)("h2",{id:"set-up-vector-db"},"Set Up Vector DB"),(0,a.kt)("p",null,"Now that we have the documentation content in chunks, let's put all this information in a vector index for easy retrieval."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"search_index = Chroma.from_documents(source_chunks, OpenAIEmbeddings())\n")),(0,a.kt)("h2",{id:"set-up-llm-chain-with-custom-prompt"},"Set Up LLM Chain with Custom Prompt"),(0,a.kt)("p",null,"Next, let's set up a simple LLM chain but give it a custom prompt for blog post generation. Note that the custom prompt is parameterized and takes two inputs: ",(0,a.kt)("inlineCode",{parentName:"p"},"context"),", which will be the documents fetched from the vector search, and ",(0,a.kt)("inlineCode",{parentName:"p"},"topic"),", which is given by the user."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'from langchain.chains import LLMChain\nprompt_template = """Use the context below to write a 400 word blog post about the topic below:\n    Context: {context}\n    Topic: {topic}\n    Blog post:"""\n\nPROMPT = PromptTemplate(\n    template=prompt_template, input_variables=["context", "topic"]\n)\n\nllm = OpenAI(temperature=0)\n\nchain = LLMChain(llm=llm, prompt=PROMPT)\n')),(0,a.kt)("h2",{id:"generate-text"},"Generate Text"),(0,a.kt)("p",null,"Finally, we write a function to apply our inputs to the chain. The function takes an input parameter ",(0,a.kt)("inlineCode",{parentName:"p"},"topic"),". We find the documents in the vector index that correspond to that ",(0,a.kt)("inlineCode",{parentName:"p"},"topic"),", and use them as additional context in our simple LLM chain."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'def generate_blog_post(topic):\n    docs = search_index.similarity_search(topic, k=4)\n    inputs = [{"context": doc.page_content, "topic": topic} for doc in docs]\n    print(chain.apply(inputs))\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'generate_blog_post("environment variables")\n')),(0,a.kt)(p,{lang:"python",mdxType:"CodeOutputBlock"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    [{'text': '\\n\\nEnvironment variables are a great way to store and access sensitive information in your Deno applications. Deno offers built-in support for environment variables with `Deno.env`, and you can also use a `.env` file to store and access environment variables.\\n\\nUsing `Deno.env` is simple. It has getter and setter methods, so you can easily set and retrieve environment variables. For example, you can set the `FIREBASE_API_KEY` and `FIREBASE_AUTH_DOMAIN` environment variables like this:\\n\\n```ts\\nDeno.env.set(\"FIREBASE_API_KEY\", \"examplekey123\");\\nDeno.env.set(\"FIREBASE_AUTH_DOMAIN\", \"firebasedomain.com\");\\n\\nconsole.log(Deno.env.get(\"FIREBASE_API_KEY\")); // examplekey123\\nconsole.log(Deno.env.get(\"FIREBASE_AUTH_DOMAIN\")); // firebasedomain.com\\n```\\n\\nYou can also store environment variables in a `.env` file. This is a great'}, {'text': '\\n\\nEnvironment variables are a powerful tool for managing configuration settings in a program. They allow us to set values that can be used by the program, without having to hard-code them into the code. This makes it easier to change settings without having to modify the code.\\n\\nIn Deno, environment variables can be set in a few different ways. The most common way is to use the `VAR=value` syntax. This will set the environment variable `VAR` to the value `value`. This can be used to set any number of environment variables before running a command. For example, if we wanted to set the environment variable `VAR` to `hello` before running a Deno command, we could do so like this:\\n\\n```\\nVAR=hello deno run main.ts\\n```\\n\\nThis will set the environment variable `VAR` to `hello` before running the command. We can then access this variable in our code using the `Deno.env.get()` function. For example, if we ran the following command:\\n\\n```\\nVAR=hello && deno eval \"console.log(\\'Deno: \\' + Deno.env.get(\\'VAR'}, {'text': '\\n\\nEnvironment variables are a powerful tool for developers, allowing them to store and access data without having to hard-code it into their applications. In Deno, you can access environment variables using the `Deno.env.get()` function.\\n\\nFor example, if you wanted to access the `HOME` environment variable, you could do so like this:\\n\\n```js\\n// env.js\\nDeno.env.get(\"HOME\");\\n```\\n\\nWhen running this code, you\\'ll need to grant the Deno process access to environment variables. This can be done by passing the `--allow-env` flag to the `deno run` command. You can also specify which environment variables you want to grant access to, like this:\\n\\n```shell\\n# Allow access to only the HOME env var\\ndeno run --allow-env=HOME env.js\\n```\\n\\nIt\\'s important to note that environment variables are case insensitive on Windows, so Deno also matches them case insensitively (on Windows only).\\n\\nAnother thing to be aware of when using environment variables is subprocess permissions. Subprocesses are powerful and can access system resources regardless of the permissions you granted to the Den'}, {'text': '\\n\\nEnvironment variables are an important part of any programming language, and Deno is no exception. Deno is a secure JavaScript and TypeScript runtime built on the V8 JavaScript engine, and it recently added support for environment variables. This feature was added in Deno version 1.6.0, and it is now available for use in Deno applications.\\n\\nEnvironment variables are used to store information that can be used by programs. They are typically used to store configuration information, such as the location of a database or the name of a user. In Deno, environment variables are stored in the `Deno.env` object. This object is similar to the `process.env` object in Node.js, and it allows you to access and set environment variables.\\n\\nThe `Deno.env` object is a read-only object, meaning that you cannot directly modify the environment variables. Instead, you must use the `Deno.env.set()` function to set environment variables. This function takes two arguments: the name of the environment variable and the value to set it to. For example, if you wanted to set the `FOO` environment variable to `bar`, you would use the following code:\\n\\n```'}]\n"))))}h.isMDXComponent=!0}}]);