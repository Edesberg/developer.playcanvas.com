"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[3475],{61761:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var t=r(85893),n=r(11151);const s={title:"AR",sidebar_position:20},i=void 0,o={id:"user-manual/xr/ar/index",title:"AR",description:"PlayCanvas lets you create Augmented Reality (AR) applications for mobile and HMD devices through the WebXR API, as well as through integrations with popular AR frameworks.",source:"@site/docs/user-manual/xr/ar/index.md",sourceDirName:"user-manual/xr/ar",slug:"/user-manual/xr/ar/",permalink:"/user-manual/xr/ar/",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/xr/ar/index.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{title:"AR",sidebar_position:20},sidebar:"userManualSidebar",previous:{title:"Hand Tracking",permalink:"/user-manual/xr/hand-tracking"},next:{title:"Anchors",permalink:"/user-manual/xr/ar/anchors"}},l={},c=[{value:"Platforms",id:"platforms",level:2},{value:"Getting started with WebXR AR",id:"getting-started-with-webxr-ar",level:2},{value:"Starter Kits",id:"starter-kits",level:2}];function d(e){const a={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.p,{children:"PlayCanvas lets you create Augmented Reality (AR) applications for mobile and HMD devices through the WebXR API, as well as through integrations with popular AR frameworks."}),"\n",(0,t.jsx)(a.h2,{id:"platforms",children:"Platforms"}),"\n",(0,t.jsxs)(a.p,{children:["AR capabilities are available using the Android Chrome Browser, Meta Quest Browser, Magic Leap Helio, Samsung Internet, Microsoft Edge and many others. Additionally, frameworks such as ",(0,t.jsx)(a.a,{href:"/user-manual/xr/ar/8th-wall-integration/",children:"8th Wall"})," and ",(0,t.jsx)(a.a,{href:"/user-manual/xr/ar/zappar-integration/",children:"Zappar"})," allow users to experience AR content in most mobile browsers, including Safari."]}),"\n",(0,t.jsx)(a.admonition,{type:"note",children:(0,t.jsx)(a.p,{children:"The aforementioned frameworks are external and have separate licensing, available on their respective websites."})}),"\n",(0,t.jsx)(a.h2,{id:"getting-started-with-webxr-ar",children:"Getting started with WebXR AR"}),"\n",(0,t.jsx)(a.p,{children:"When using PlayCanvas\u2019 built-in AR support, the scene\u2019s primary camera\u2019s clear color must be transparent, as so:"}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{src:"/images/user-manual/xr/ar/transparent-clear-color.png",alt:"Transparent Clear Color"})}),"\n",(0,t.jsx)(a.p,{children:"To start an AR session, device support and availability should also be checked first. Then, on user interaction, such as a button click or other input, an AR session can be started:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-javascript",children:"button.element.on('click', function () {\n    // check if XR is supported and AR is available\n    if (app.xr.supported && app.xr.isAvailable(pc.XRTYPE_AR)) {\n        // start AR using a camera component\n        entity.camera.startXr(pc.XRTYPE_AR, pc.XRSPACE_LOCALFLOOR);\n    }\n});\n"})}),"\n",(0,t.jsx)(a.p,{children:"Once the user is done, the AR session can be exited by calling:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-javascript",children:"app.xr.end();\n"})}),"\n",(0,t.jsx)(a.p,{children:"Augmented Reality allows blending of the real world with virtual imagery, either by composing a rendered buffer over the camera feed or with a special projection of a rendered buffer on see-through glasses. Usually, it is provided with spatial tracking relative to the real-world environment."}),"\n",(0,t.jsxs)(a.p,{children:["Suitable reference space: ",(0,t.jsx)(a.code,{children:"pc.XRSPACE_LOCALFLOOR"}),"."]}),"\n",(0,t.jsx)(a.h2,{id:"starter-kits",children:"Starter Kits"}),"\n",(0,t.jsx)(a.p,{children:"PlayCanvas provides several \u2018Starter Kit\u2019 projects to help you and your AR experiences get up and running faster. When creating a new project, simply select from the dialog the template that suits you best."})]})}function p(e={}){const{wrapper:a}={...(0,n.a)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,a,r)=>{r.d(a,{Z:()=>o,a:()=>i});var t=r(67294);const n={},s=t.createContext(n);function i(e){const a=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),t.createElement(s.Provider,{value:a},e.children)}}}]);