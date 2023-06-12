"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[20597],{3905:(n,e,t)=>{t.d(e,{Zo:()=>p,kt:()=>m});var o=t(67294);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function s(n,e){if(null==n)return{};var t,o,r=function(n,e){if(null==n)return{};var t,o,r={},a=Object.keys(n);for(o=0;o<a.length;o++)t=a[o],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(o=0;o<a.length;o++)t=a[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var c=o.createContext({}),l=function(n){var e=o.useContext(c),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},p=function(n){var e=l(n.components);return o.createElement(c.Provider,{value:e},n.children)},h="mdxType",u={inlineCode:"code",wrapper:function(n){var e=n.children;return o.createElement(o.Fragment,{},e)}},d=o.forwardRef((function(n,e){var t=n.components,r=n.mdxType,a=n.originalType,c=n.parentName,p=s(n,["components","mdxType","originalType","parentName"]),h=l(t),d=r,m=h["".concat(c,".").concat(d)]||h[d]||u[d]||a;return t?o.createElement(m,i(i({ref:e},p),{},{components:t})):o.createElement(m,i({ref:e},p))}));function m(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var a=t.length,i=new Array(a);i[0]=d;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=n,s[h]="string"==typeof n?n:r,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},89727:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=t(87462),r=(t(67294),t(3905));const a={},i="Python Agent",s={unversionedId:"modules/agents/tools/toolkits/python",id:"modules/agents/tools/toolkits/python",title:"Python Agent",description:"This notebook showcases an agent designed to write and execute python code to answer a question.",source:"@site/docs/modules/agents/tools/toolkits/python.md",sourceDirName:"modules/agents/tools/toolkits",slug:"/modules/agents/tools/toolkits/python",permalink:"/langchain-docs-scratch/docs/modules/agents/tools/toolkits/python",draft:!1,editUrl:"https://github.com/hwchase17/langchainjs/edit/main/docs/docs/modules/agents/tools/toolkits/python.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"PowerBI Dataset Agent",permalink:"/langchain-docs-scratch/docs/modules/agents/tools/toolkits/powerbi"},next:{title:"Spark Dataframe Agent",permalink:"/langchain-docs-scratch/docs/modules/agents/tools/toolkits/spark"}},c={},l=[{value:"Fibonacci Example",id:"fibonacci-example",level:2},{value:"Training neural net",id:"training-neural-net",level:2}],p=(h="CodeOutputBlock",function(n){return console.warn("Component "+h+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",n)});var h;const u={toc:l},d="wrapper";function m(n){let{components:e,...t}=n;return(0,r.kt)(d,(0,o.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"python-agent"},"Python Agent"),(0,r.kt)("p",null,"This notebook showcases an agent designed to write and execute python code to answer a question."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from langchain.agents.agent_toolkits import create_python_agent\nfrom langchain.tools.python.tool import PythonREPLTool\nfrom langchain.python import PythonREPL\nfrom langchain.llms.openai import OpenAI\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"agent_executor = create_python_agent(\n    llm=OpenAI(temperature=0, max_tokens=1000),\n    tool=PythonREPLTool(),\n    verbose=True\n)\n")),(0,r.kt)("h2",{id:"fibonacci-example"},"Fibonacci Example"),(0,r.kt)("p",null,"This example was created by ",(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/lemonodor/status/1628270074074398720?s=20"},"John Wiseman"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'agent_executor.run("What is the 10th fibonacci number?")\n')),(0,r.kt)(p,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    \n    \n    > Entering new AgentExecutor chain...\n     I need to calculate the 10th fibonacci number\n    Action: Python REPL\n    Action Input: def fibonacci(n):\n        if n == 0:\n            return 0\n        elif n == 1:\n            return 1\n        else:\n            return fibonacci(n-1) + fibonacci(n-2)\n    Observation: \n    Thought: I need to call the function with 10 as the argument\n    Action: Python REPL\n    Action Input: fibonacci(10)\n    Observation: \n    Thought: I now know the final answer\n    Final Answer: 55\n    \n    > Finished chain.\n\n\n\n\n\n    '55'\n"))),(0,r.kt)("h2",{id:"training-neural-net"},"Training neural net"),(0,r.kt)("p",null,"This example was created by ",(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/sameeurehman/status/1630130518133207046?s=20"},"Samee Ur Rehman"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'agent_executor.run("""Understand, write a single neuron neural network in PyTorch.\nTake synthetic data for y=2x. Train for 1000 epochs and print every 100 epochs.\nReturn prediction for x = 5""")\n')),(0,r.kt)(p,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    \n    \n    > Entering new AgentExecutor chain...\n     I need to write a neural network in PyTorch and train it on the given data.\n    Action: Python REPL\n    Action Input: \n    import torch\n    \n    # Define the model\n    model = torch.nn.Sequential(\n        torch.nn.Linear(1, 1)\n    )\n    \n    # Define the loss\n    loss_fn = torch.nn.MSELoss()\n    \n    # Define the optimizer\n    optimizer = torch.optim.SGD(model.parameters(), lr=0.01)\n    \n    # Define the data\n    x_data = torch.tensor([[1.0], [2.0], [3.0], [4.0]])\n    y_data = torch.tensor([[2.0], [4.0], [6.0], [8.0]])\n    \n    # Train the model\n    for epoch in range(1000):\n        # Forward pass\n        y_pred = model(x_data)\n    \n        # Compute and print loss\n        loss = loss_fn(y_pred, y_data)\n        if (epoch+1) % 100 == 0:\n            print(f'Epoch {epoch+1}: loss = {loss.item():.4f}')\n    \n        # Zero the gradients\n        optimizer.zero_grad()\n    \n        # Backward pass\n        loss.backward()\n    \n        # Update the weights\n        optimizer.step()\n    \n    Observation: Epoch 100: loss = 0.0013\n    Epoch 200: loss = 0.0007\n    Epoch 300: loss = 0.0004\n    Epoch 400: loss = 0.0002\n    Epoch 500: loss = 0.0001\n    Epoch 600: loss = 0.0001\n    Epoch 700: loss = 0.0000\n    Epoch 800: loss = 0.0000\n    Epoch 900: loss = 0.0000\n    Epoch 1000: loss = 0.0000\n    \n    Thought: I now know the final answer\n    Final Answer: The prediction for x = 5 is 10.0.\n    \n    > Finished chain.\n\n\n\n\n\n    'The prediction for x = 5 is 10.0.'\n"))))}m.isMDXComponent=!0}}]);