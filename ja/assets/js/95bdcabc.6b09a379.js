"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[3730],{77127:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>O,contentTitle:()=>N,default:()=>V,frontMatter:()=>I,metadata:()=>S,toc:()=>A});var t=a(74848),s=a(28453),i=a(96540),l=a(34164),r=a(23104),o=a(56347),c=a(205),d=a(57485),p=a(31682),h=a(70679);function u(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:n,children:a}=e;return(0,i.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:a,attributes:t,default:s}}=e;return{value:n,label:a,attributes:t,default:s}}))}(a);return function(e){const n=(0,p.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function x(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function j(e){let{queryString:n=!1,groupId:a}=e;const t=(0,o.W6)(),s=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,d.aZ)(s),(0,i.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(t.location.search);n.set(s,e),t.replace({...t.location,search:n.toString()})}),[s,t])]}function g(e){const{defaultValue:n,queryString:a=!1,groupId:t}=e,s=m(e),[l,r]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!x({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=a.find((e=>e.default))??a[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:s}))),[o,d]=j({queryString:a,groupId:t}),[p,u]=function(e){let{groupId:n}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,s]=(0,h.Dv)(a);return[t,(0,i.useCallback)((e=>{a&&s.set(e)}),[a,s])]}({groupId:t}),g=(()=>{const e=o??p;return x({value:e,tabValues:s})?e:null})();(0,c.A)((()=>{g&&r(g)}),[g]);return{selectedValue:l,selectValue:(0,i.useCallback)((e=>{if(!x({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);r(e),d(e),u(e)}),[d,u,s]),tabValues:s}}var v=a(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:n,block:a,selectedValue:s,selectValue:i,tabValues:o}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,r.a_)(),p=e=>{const n=e.currentTarget,a=c.indexOf(n),t=o[a].value;t!==s&&(d(n),i(t))},h=e=>{let n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;n=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;n=c[a]??c[c.length-1];break}}n?.focus()};return(0,t.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":a},n),children:o.map((e=>{let{value:n,label:a,attributes:i}=e;return(0,t.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>c.push(e),onKeyDown:h,onClick:p,...i,className:(0,l.A)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":s===n}),children:a??n},n)}))})}function f(e){let{lazy:n,children:a,selectedValue:s}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===s));return e?(0,i.cloneElement)(e,{className:(0,l.A)("margin-top--md",e.props.className)}):null}return(0,t.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function w(e){const n=g(e);return(0,t.jsxs)("div",{className:(0,l.A)("tabs-container",b.tabList),children:[(0,t.jsx)(y,{...n,...e}),(0,t.jsx)(f,{...n,...e})]})}function C(e){const n=(0,v.A)();return(0,t.jsx)(w,{...e,children:u(e.children)},String(n))}const E={tabItem:"tabItem_Ymn6"};function T(e){let{children:n,hidden:a,className:s}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,l.A)(E.tabItem,s),hidden:a,children:n})}const I={title:"Using the Engine Standalone",sidebar_position:1},N=void 0,S={id:"user-manual/engine/standalone",title:"Using the Engine Standalone",description:"It is possible to build applications on the PlayCanvas Engine without using the Editor. Some examples of applications built directly against the Engine are:",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/user-manual/engine/standalone.md",sourceDirName:"user-manual/engine",slug:"/user-manual/engine/standalone",permalink:"/ja/user-manual/engine/standalone",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/engine/standalone.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Using the Engine Standalone",sidebar_position:1},sidebar:"userManualSidebar",previous:{title:"\u30a8\u30f3\u30b8\u30f3",permalink:"/ja/user-manual/engine/"},next:{title:"\u30b9\u30af\u30ea\u30d7\u30c6\u30a3\u30f3\u30b0",permalink:"/ja/user-manual/scripting/"}},O={},A=[{value:"Option 1: Build Tool and NPM",id:"option-1-build-tool-and-npm",level:2},{value:"Option 2: Import Map and CDN",id:"option-2-import-map-and-cdn",level:2}];function L(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"It is possible to build applications on the PlayCanvas Engine without using the Editor. Some examples of applications built directly against the Engine are:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://playcanvas.com/viewer",children:"glTF Viewer"})," [",(0,t.jsx)(n.a,{href:"https://github.com/playcanvas/model-viewer",children:"GitHub"}),"]"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://playcanvas.com/supersplat/editor",children:"SuperSplat"})," [",(0,t.jsx)(n.a,{href:"https://github.com/playcanvas/supersplat",children:"GitHub"}),"]"]}),"\n",(0,t.jsxs)(n.li,{children:["...and, of course, the ",(0,t.jsx)(n.a,{href:"../../editor",children:"PlayCanvas Editor"})," itself!"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"This page guides you in how to get started."}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["Before you begin, ensure you have ",(0,t.jsx)(n.a,{href:"https://nodejs.org/",children:"Node.js"})," installed."]})}),"\n",(0,t.jsx)(n.p,{children:"When setting up your project, there are two main options to consider."}),"\n",(0,t.jsx)(n.h2,{id:"option-1-build-tool-and-npm",children:"Option 1: Build Tool and NPM"}),"\n",(0,t.jsx)(n.p,{children:"This is the recommended set up that should suit most developers."}),"\n",(0,t.jsxs)(n.p,{children:["A build tool can bundle your application into an optimized package that can run on a wide range of browsers. There are many build tools such as ",(0,t.jsx)(n.a,{href:"https://webpack.js.org/",children:"webpack"}),", ",(0,t.jsx)(n.a,{href:"https://rollupjs.org/",children:"Rollup"})," and ",(0,t.jsx)(n.a,{href:"https://esbuild.github.io/",children:"esbuild"}),", and PlayCanvas will work with all of them. Here, we will use ",(0,t.jsx)(n.a,{href:"https://vitejs.dev/",children:"Vite"}),", a popular build tool that aims to provide a faster and leaner development experience for modern web projects."]}),"\n",(0,t.jsx)(n.p,{children:"First, select whether you prefer to develop in JavaScript or TypeScript:"}),"\n",(0,t.jsxs)(C,{children:[(0,t.jsx)(T,{value:"javascript",label:"JavaScript",default:!0,children:(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Open a Terminal/Command Prompt, create a folder for your app and ",(0,t.jsx)(n.code,{children:"cd"})," inside it."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Install ",(0,t.jsx)(n.code,{children:"playcanvas"})," and ",(0,t.jsx)(n.code,{children:"vite"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"npm install playcanvas vite --save-dev\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Create an ",(0,t.jsx)(n.code,{children:"index.html"})," and paste this:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",metastring:'title="index.html"',children:'<!DOCTYPE html>\n<html lang="en">\n    <head>\n        <meta charset="utf-8">\n        <style>\n            body { margin: 0; overflow: hidden; }\n        </style>\n    </head>\n    <body>\n        <script type="module" src="main.js"><\/script>\n        <canvas id=\'application\'></canvas>\n    </body>\n</html>\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Create a ",(0,t.jsx)(n.code,{children:"main.js"})," and paste this:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",metastring:'title="main.js"',children:"import * as pc from 'playcanvas';\n\n// create an application\nconst canvas = document.getElementById('application');\nconst app = new pc.Application(canvas);\napp.setCanvasResolution(pc.RESOLUTION_AUTO);\napp.setCanvasFillMode(pc.FILLMODE_FILL_WINDOW);\napp.start();\n\n// create a camera\nconst camera = new pc.Entity();\ncamera.addComponent('camera', {\n    clearColor: new pc.Color(0.3, 0.3, 0.7)\n});\ncamera.setPosition(0, 0, 3);\napp.root.addChild(camera);\n\n// create a light\nconst light = new pc.Entity();\nlight.addComponent('light');\nlight.setEulerAngles(45, 45, 0);\napp.root.addChild(light);\n\n// create a box\nconst box = new pc.Entity();\nbox.addComponent('model', {\n    type: 'box'\n});\napp.root.addChild(box);\n\n// rotate the box\napp.on('update', (dt) => box.rotate(10 * dt, 20 * dt, 30 * dt));\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Run the Vite development server:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"npx vite\n"})}),"\n",(0,t.jsxs)(n.p,{children:["This starts a server at ",(0,t.jsx)(n.code,{children:"http://localhost:5173"}),". Visit this URL in your browser and you will see the following:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Spinning Cube",src:a(19238).A+"",width:"1280",height:"720"})}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"Every time you save your source files, the tab will reload automatically."})}),"\n"]}),"\n"]})}),(0,t.jsx)(T,{value:"typescript",label:"TypeScript",children:(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Open a Terminal/Command Prompt, create a folder for your app and ",(0,t.jsx)(n.code,{children:"cd"})," inside it."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Install ",(0,t.jsx)(n.code,{children:"playcanvas"})," and ",(0,t.jsx)(n.code,{children:"vite"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"npm install playcanvas vite --save-dev\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Create an ",(0,t.jsx)(n.code,{children:"index.html"})," and paste this:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",metastring:'title="index.html"',children:'<!DOCTYPE html>\n<html lang="en">\n    <head>\n        <meta charset="utf-8">\n        <style>\n            body { margin: 0; overflow: hidden; }\n        </style>\n    </head>\n    <body>\n        <script type="module" src="main.ts"><\/script>\n        <canvas id=\'application\'></canvas>\n    </body>\n</html>\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Create a ",(0,t.jsx)(n.code,{children:"main.ts"})," and paste this:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",metastring:'title="main.ts"',children:"import * as pc from 'playcanvas';\n\n// create an application\nconst canvas = document.getElementById('application') as HTMLCanvasElement;\nconst app = new pc.Application(canvas);\napp.setCanvasResolution(pc.RESOLUTION_AUTO);\napp.setCanvasFillMode(pc.FILLMODE_FILL_WINDOW);\napp.start();\n\n// create a camera\nconst camera = new pc.Entity();\ncamera.addComponent('camera', {\n    clearColor: new pc.Color(0.3, 0.3, 0.7)\n});\ncamera.setPosition(0, 0, 3);\napp.root.addChild(camera);\n\n// create a light\nconst light = new pc.Entity();\nlight.addComponent('light');\nlight.setEulerAngles(45, 45, 0);\napp.root.addChild(light);\n\n// create a box\nconst box = new pc.Entity();\nbox.addComponent('model', {\n    type: 'box'\n});\napp.root.addChild(box);\n\n// rotate the box\napp.on('update', (dt: number) => box.rotate(10 * dt, 20 * dt, 30 * dt));\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Run the Vite development server:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"npx vite\n"})}),"\n",(0,t.jsxs)(n.p,{children:["This starts a server at ",(0,t.jsx)(n.code,{children:"http://localhost:5173"}),". Visit this URL in your browser and you will see the following:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Spinning Cube",src:a(19238).A+"",width:"1280",height:"720"})}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"Every time you save your source files, the tab will reload automatically."})}),"\n"]}),"\n"]})})]}),"\n",(0,t.jsx)(n.h2,{id:"option-2-import-map-and-cdn",children:"Option 2: Import Map and CDN"}),"\n",(0,t.jsxs)(n.p,{children:["An ",(0,t.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script/type/importmap",children:"import map"})," can resolve module specifiers in JavaScript modules. Consider this import statement:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"import * as pc from 'playcanvas';\n"})}),"\n",(0,t.jsxs)(n.p,{children:["An import map can resolve ",(0,t.jsx)(n.code,{children:"playcanvas"})," to a CDN-hosted build of the engine that can be dynamically loaded by the browser. This means that we can skip the build step described in Option 1."]}),"\n",(0,t.jsx)(n.p,{children:"First, select whether you prefer to develop in JavaScript or TypeScript:"}),"\n",(0,t.jsxs)(C,{children:[(0,t.jsx)(T,{value:"javascript",label:"JavaScript",default:!0,children:(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Open a Terminal/Command Prompt, create a folder for your app and ",(0,t.jsx)(n.code,{children:"cd"})," inside it."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Create an ",(0,t.jsx)(n.code,{children:"index.html"})," and paste this:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",metastring:'title="index.html"',children:'<!DOCTYPE html>\n<html lang="en">\n    <head>\n        <meta charset="utf-8">\n        <style>\n            body { margin: 0; overflow: hidden; }\n        </style>\n        <script type="importmap">\n        {\n            "imports": {\n                "playcanvas": "https://cdn.jsdelivr.net/npm/playcanvas"\n            }\n        }\n        <\/script>\n    </head>\n    <body>\n        <script type="module" src="main.js"><\/script>\n        <canvas id=\'application\'></canvas>\n    </body>\n</html>\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Create a ",(0,t.jsx)(n.code,{children:"main.js"})," and paste this:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",metastring:'title="main.js"',children:"import * as pc from 'playcanvas';\n\n// create an application\nconst canvas = document.getElementById('application');\nconst app = new pc.Application(canvas);\napp.setCanvasResolution(pc.RESOLUTION_AUTO);\napp.setCanvasFillMode(pc.FILLMODE_FILL_WINDOW);\napp.start();\n\n// create a camera\nconst camera = new pc.Entity();\ncamera.addComponent('camera', {\n    clearColor: new pc.Color(0.3, 0.3, 0.7)\n});\ncamera.setPosition(0, 0, 3);\napp.root.addChild(camera);\n\n// create a light\nconst light = new pc.Entity();\nlight.addComponent('light');\nlight.setEulerAngles(45, 45, 0);\napp.root.addChild(light);\n\n// create a box\nconst box = new pc.Entity();\nbox.addComponent('model', {\n    type: 'box'\n});\napp.root.addChild(box);\n\n// rotate the box\napp.on('update', (dt) => box.rotate(10 * dt, 20 * dt, 30 * dt));\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Run ",(0,t.jsx)(n.code,{children:"serve"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"npx serve\n"})}),"\n",(0,t.jsxs)(n.p,{children:["This starts a server at ",(0,t.jsx)(n.code,{children:"http://localhost:3000"}),". Visit this URL in your browser and you will see the following:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Spinning Cube",src:a(19238).A+"",width:"1280",height:"720"})}),"\n"]}),"\n"]})}),(0,t.jsx)(T,{value:"typescript",label:"TypeScript",children:(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Open a Terminal/Command Prompt, create a folder for your app and ",(0,t.jsx)(n.code,{children:"cd"})," inside it."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Create an ",(0,t.jsx)(n.code,{children:"index.html"})," and paste this:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",metastring:'title="index.html"',children:'<!DOCTYPE html>\n<html lang="en">\n    <head>\n        <meta charset="utf-8">\n        <style>\n            body { margin: 0; overflow: hidden; }\n        </style>\n        <script type="importmap">\n        {\n            "imports": {\n                "playcanvas": "https://cdn.jsdelivr.net/npm/playcanvas"\n            }\n        }\n        <\/script>\n    </head>\n    <body>\n        <script type="module" src="main.js"><\/script>\n        <canvas id=\'application\'></canvas>\n    </body>\n</html>\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Create a ",(0,t.jsx)(n.code,{children:"main.ts"})," and paste this:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",metastring:'title="main.ts"',children:"import * as pc from 'playcanvas';\n\n// create an application\nconst canvas = document.getElementById('application') as HTMLCanvasElement;\nconst app = new pc.Application(canvas);\napp.setCanvasResolution(pc.RESOLUTION_AUTO);\napp.setCanvasFillMode(pc.FILLMODE_FILL_WINDOW);\napp.start();\n\n// create a camera\nconst camera = new pc.Entity();\ncamera.addComponent('camera', {\n    clearColor: new pc.Color(0.3, 0.3, 0.7)\n});\ncamera.setPosition(0, 0, 3);\napp.root.addChild(camera);\n\n// create a light\nconst light = new pc.Entity();\nlight.addComponent('light');\nlight.setEulerAngles(45, 45, 0);\napp.root.addChild(light);\n\n// create a box\nconst box = new pc.Entity();\nbox.addComponent('model', {\n    type: 'box'\n});\napp.root.addChild(box);\n\n// rotate the box\napp.on('update', (dt: number) => box.rotate(10 * dt, 20 * dt, 30 * dt));\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Install ",(0,t.jsx)(n.code,{children:"playcanvas"})," and ",(0,t.jsx)(n.code,{children:"typescript"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"npm install playcanvas typescript --save-dev\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Compile ",(0,t.jsx)(n.code,{children:"main.ts"})," to ",(0,t.jsx)(n.code,{children:"main.js"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"npx tsc main.ts --lib esnext,dom --module esnext --moduleResolution node\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Run ",(0,t.jsx)(n.code,{children:"serve"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"npx serve\n"})}),"\n",(0,t.jsxs)(n.p,{children:["This starts a server at ",(0,t.jsx)(n.code,{children:"http://localhost:3000"}),". Visit this URL in your browser and you will see the following:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Spinning Cube",src:a(19238).A+"",width:"1280",height:"720"})}),"\n"]}),"\n"]})})]})]})}function V(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(L,{...e})}):L(e)}},19238:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/spinning-cube-47409c46991587a63fed6d544853a77b.webp"},28453:(e,n,a)=>{a.d(n,{R:()=>l,x:()=>r});var t=a(96540);const s={},i=t.createContext(s);function l(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);