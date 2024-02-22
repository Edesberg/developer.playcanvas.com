"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[2293],{2379:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var n=o(74848),s=o(28453);const i={title:"Debugging",sidebar_position:9},r=void 0,a={id:"user-manual/scripting/debugging",title:"Debugging",description:"In order to create scripts for PlayCanvas, it is vital that you know how to access and use your browser's development tools.",source:"@site/docs/user-manual/scripting/debugging.md",sourceDirName:"user-manual/scripting",slug:"/user-manual/scripting/debugging",permalink:"/user-manual/scripting/debugging",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/scripting/debugging.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"Debugging",sidebar_position:9},sidebar:"userManualSidebar",previous:{title:"Hot Reloading",permalink:"/user-manual/scripting/hot-reloading"},next:{title:"Migration Guide",permalink:"/user-manual/scripting/migration-guide"}},c={},l=[{value:"Debugging Scripts",id:"debugging-scripts",level:3},{value:"Debugging on Mobile Devices",id:"debugging-on-mobile-devices",level:3}];function d(e){const t={a:"a",admonition:"admonition",h3:"h3",img:"img",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"In order to create scripts for PlayCanvas, it is vital that you know how to access and use your browser's development tools."}),"\n",(0,n.jsx)(t.p,{children:"Chrome, Firefox and other browsers have Developer Tools integrated directly into the browser. You can usually access them by pressing F12 on Windows or ALT-CMD-I on Mac. Or use menu of a browser to access developer tools."}),"\n",(0,n.jsx)(t.h3,{id:"debugging-scripts",children:"Debugging Scripts"}),"\n",(0,n.jsx)(t.p,{children:"In order to debug your scripts, select the Sources tab in Developer Tools (Chrome). Open the 'navigator' by clicking the icon in the top left corner of the Sources pane. You should see something similar to what is shown below:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Debugger",src:o(35950).A+"",width:"2474",height:"1551"})}),"\n",(0,n.jsx)(t.p,{children:"In Firefox it looks like this:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Firefox",src:o(45119).A+"",width:"2474",height:"1552"})}),"\n",(0,n.jsx)(t.p,{children:"The navigator lists all of the scripts currently running in the active tab, including any PlayCanvas scripts that you have written. Find one of your scripts in the navigator and select it to open the source code. You are now able to set breakpoints and debug."}),"\n",(0,n.jsxs)(t.p,{children:["Each browser has detailed instructions on how to debug javascript. You should read through these documents: ",(0,n.jsx)(t.a,{href:"https://developer.chrome.com/docs/devtools/javascript/",children:"Chrome"}),", ",(0,n.jsx)(t.a,{href:"https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html",children:"Firefox"}),", ",(0,n.jsx)(t.a,{href:"https://developer.apple.com/safari/tools/",children:"Safari"}),", ",(0,n.jsx)(t.a,{href:"https://docs.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/javascript/reference",children:"Edge / Internet Explorer"}),"."]}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsx)(t.p,{children:"Note that when a running app is paused at a breakpoint in the debugger, other browser windows/tabs used to launch that app (containing the PlayCanvas Code Editor or Editor etc.) might also be paused."})}),"\n",(0,n.jsx)(t.h3,{id:"debugging-on-mobile-devices",children:"Debugging on Mobile Devices"}),"\n",(0,n.jsxs)(t.p,{children:["On Android, it is possible to connect to the mobile Chrome browser via the desktop Chrome browser devtools and USB cable. ",(0,n.jsx)(t.a,{href:"https://developer.chrome.com/docs/devtools/remote-debugging/",children:"Google Developer documentation"})," has the detailed steps for the setup."]}),"\n",(0,n.jsxs)(t.p,{children:["iOS debugging requires access to a Mac and ",(0,n.jsx)(t.a,{href:"https://webkit.org/web-inspector/enabling-web-inspector/",children:"Apple has outlined the steps"})," needed to enable developer options to start debugging."]}),"\n",(0,n.jsx)(t.p,{children:"In the situation where either it's not possible to connect to the web view directly from Chrome or Safari (e.g. a web view in another app) or don't have access to a Mac, the following libraries and services can help and are simple to add to projects:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://remotejs.com/",children:"RemoteJS"})," - Allows developers to view the console output remotely in a desktop browser and also execute JS in the console which makes it very powerful. The console output can be delayed or slow though."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://github.com/Tencent/vConsole",children:"vConsole"})," or ",(0,n.jsx)(t.a,{href:"https://github.com/liriliri/eruda",children:"Eruda"})," - Adds a widget DOM object to the page that can be expanded to show console output, network requests, the page elements and more."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},35950:(e,t,o)=>{o.d(t,{A:()=>n});const n=o.p+"assets/images/chrome-debugger-399a1047f5d98ed7cf2184e97143e466.png"},45119:(e,t,o)=>{o.d(t,{A:()=>n});const n=o.p+"assets/images/firefox-debugger-7c15d360ae08169f88a6bd949c5208ea.png"},28453:(e,t,o)=>{o.d(t,{R:()=>r,x:()=>a});var n=o(96540);const s={},i=n.createContext(s);function r(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);