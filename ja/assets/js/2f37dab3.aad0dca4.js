"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[761],{90322:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>t,metadata:()=>o,toc:()=>c});var s=a(74848),i=a(28453);const t={title:"PlayCanvas\u3067\u306eWebXR\u306e\u4f7f\u7528\u65b9\u6cd5",sidebar_position:1},r=void 0,o={id:"user-manual/xr/using-webxr",title:"PlayCanvas\u3067\u306eWebXR\u306e\u4f7f\u7528\u65b9\u6cd5",description:"Support",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/user-manual/xr/using-webxr.md",sourceDirName:"user-manual/xr",slug:"/user-manual/xr/using-webxr",permalink:"/ja/user-manual/xr/using-webxr",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/xr/using-webxr.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"PlayCanvas\u3067\u306eWebXR\u306e\u4f7f\u7528\u65b9\u6cd5",sidebar_position:1},sidebar:"userManualSidebar",previous:{title:"XR",permalink:"/ja/user-manual/xr/"},next:{title:"Capabilities",permalink:"/ja/user-manual/xr/capabilities"}},l={},c=[{value:"Support",id:"support",level:2},{value:"Starting",id:"starting",level:2},{value:"Ending an XR Session",id:"ending-an-xr-session",level:2},{value:"Session Types",id:"session-types",level:2},{value:"Camera Position and Orientation",id:"camera-position-and-orientation",level:2},{value:"\u306a\u305c\u81ea\u52d5\u7684\u306bXR\u30e2\u30fc\u30c9\u3092\u6709\u52b9\u306b\u3067\u304d\u306a\u3044\u306e\u3067\u3059\u304b?",id:"\u306a\u305c\u81ea\u52d5\u7684\u306bxr\u30e2\u30fc\u30c9\u3092\u6709\u52b9\u306b\u3067\u304d\u306a\u3044\u306e\u3067\u3059\u304b",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"support",children:"Support"}),"\n",(0,s.jsx)(n.p,{children:"WebXR\u306e\u30d6\u30e9\u30a6\u30b6\u30b5\u30dd\u30fc\u30c8\u306f\u307e\u3060\u5168\u9762\u7684\u306b\u306f\u5b9f\u73fe\u3055\u308c\u3066\u3044\u307e\u305b\u3093\u3002\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u3057\u3066\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"if (app.xr.supported) {\n    //WebXR\u306f\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u307e\u3059\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"starting",children:"Starting"}),"\n",(0,s.jsxs)(n.p,{children:["To start XR session, you can use method on the Camera Component or ",(0,s.jsx)(n.a,{href:"https://api.playcanvas.com/classes/Engine.XrManager.html",children:"XrManager"})," on the Application. To start an XR session you need to provide CameraComponent and provide the type of XR session, reference space, and optional object with additional arguments:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"app.xr.start(entity.camera, pc.XRTYPE_VR, pc.XRSPACE_LOCALFLOOR);\n"})}),"\n",(0,s.jsx)(n.p,{children:"It is an asynchronous operation and is only possible to start on a user interaction, such as a button click, mouse click, or touch:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"button.on('click', () => {\n    // start XR session\n});\n"})}),"\n",(0,s.jsxs)(n.p,{children:["To know when a session is started, you can subscribe to the ",(0,s.jsx)(n.code,{children:"start"})," event:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"app.xr.on('start', function () {\n    // XR\u30bb\u30c3\u30b7\u30e7\u30f3\u304c\u958b\u59cb\u3055\u308c\u307e\u3057\u305f\n});\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u30bb\u30c3\u30b7\u30e7\u30f3\u30bf\u30a4\u30d7\u3084\u53c2\u7167\u30b9\u30da\u30fc\u30b9\u304c\u7279\u5b9a\u306e\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u3067\u5229\u7528\u3067\u304d\u306a\u3044\u5834\u5408\u3001\u30bb\u30c3\u30b7\u30e7\u30f3\u3092\u958b\u59cb\u3067\u304d\u305a\u3001\u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u3067\u30a8\u30e9\u30fc\u304c\u63d0\u4f9b\u3055\u308c\u3001XrManager\u3067",(0,s.jsx)(n.code,{children:"error"})," \u30a4\u30d9\u30f3\u30c8\u304c\u767a\u751f\u3057\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"entity.camera.startXr(pc.XRTYPE_VR, pc.XRSPACE_UNBOUNDED, {\n    callback: function(err) {\n        if (err) {\n            //\u30bb\u30c3\u30b7\u30e7\u30f3\u958b\u59cb\u306b\u5931\u6557\u3057\u307e\u3057\u305f\u3002\n        }\n    }\n});\n"})}),"\n",(0,s.jsx)(n.h2,{id:"ending-an-xr-session",children:"Ending an XR Session"}),"\n",(0,s.jsx)(n.p,{children:"XR\u306e\u7d42\u4e86\u306f\u3055\u307e\u3056\u307e\u306a\u65b9\u6cd5\u3067\u30c8\u30ea\u30ac\u30fc\u3067\u304d\u307e\u3059\u3002\u30b3\u30fc\u30c9\u304b\u3089XR\u3092\u7d42\u4e86\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"app.xr.end();\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Also, the user might exit XR via some external process like the back button in the browser. ",(0,s.jsx)(n.a,{href:"https://api.playcanvas.com/classes/Engine.XrManager.html",children:"XrManager"})," will fire events associated with the session ",(0,s.jsx)(n.code,{children:"end"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"app.xr.on('end', function () {\n    // XR\u30bb\u30c3\u30b7\u30e7\u30f3\u304c\u7d42\u4e86\u3057\u307e\u3057\u305f\u3002\n});\n"})}),"\n",(0,s.jsx)(n.h2,{id:"session-types",children:"Session Types"}),"\n",(0,s.jsx)(n.p,{children:"\u305d\u308c\u305e\u308c\u306e\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u3067\u3001\u7570\u306a\u308b\u7a2e\u985e\u306e\u30bb\u30c3\u30b7\u30e7\u30f3\u304c\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u3053\u308c\u3089\u306f\u4ee5\u4e0b\u306e\u901a\u308a\u3067\u3059\u3002"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"VR"}),"(\u4eee\u60f3\u73fe\u5b9f)-\u4e00\u5b9a\u30ec\u30d9\u30eb\u306e\u30d3\u30e5\u30fc\u30a2\u30fc\u30c8\u30e9\u30c3\u30ad\u30f3\u30b0\u3092\u63d0\u4f9b\u3057\u3001XR\u30c7\u30d0\u30a4\u30b9\u306b\u72ec\u5360\u30a2\u30af\u30bb\u30b9\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002\u3053\u308c\u306f\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304c\u30c7\u30d0\u30a4\u30b9\u306e\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306b\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3055\u308c\u3001HTML\u30ad\u30e3\u30f3\u30d0\u30b9\u8981\u7d20\u306b\u306f\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3055\u308c\u306a\u3044\u3053\u3068\u3092\u610f\u5473\u3057\u307e\u3059\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"AR"})," (Augmented Reality) - This type of session provides exclusive access to the XR Device and content is meant to be blended with the real-world environment. In this mode, the camera's clear color should be transparent."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The availability of a session type can change during an application's lifetime, based on devices being plugged in or features on devices being enabled. To check if a session type is available do:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"if (app.xr.isAvailable(pc.XRTYPE_VR)) {\n    // VR\u306f\u5229\u7528\u53ef\u80fd\u3067\u3059\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"You can subscribe to availability change events too:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"app.xr.on('available', function (type, available) {\n    console.log('XR session', type, 'type is now', available ? 'available' : 'unavailable');\n});\n\n//\u307e\u305f\u306f\u7279\u5b9a\u306e\u30bb\u30c3\u30b7\u30e7\u30f3\u30bf\u30a4\u30d7\napp.xr.on('available:' + pc.XRTYPE_VR, function (available) {\n    console.log('XR session VR type is now', available ? 'available' : 'unavailable');\n});\n"})}),"\n",(0,s.jsx)(n.h2,{id:"camera-position-and-orientation",children:"Camera Position and Orientation"}),"\n",(0,s.jsx)(n.p,{children:"When you are presenting in XR, the position and orientation of the camera are overwritten by data from the XR session. If you want to implement additional movement and rotation of the camera, you should add a parent entity to your camera and apply your manipulations to that entity."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Camera Offset",src:a(56756).A+"",width:"254",height:"227"})}),"\n",(0,s.jsx)(n.p,{children:"Position, orientation and rays of different XR objects: input sources, tracked meshes, tracked planes, tracked images, and others, are provided in world space."}),"\n",(0,s.jsx)(n.h2,{id:"\u306a\u305c\u81ea\u52d5\u7684\u306bxr\u30e2\u30fc\u30c9\u3092\u6709\u52b9\u306b\u3067\u304d\u306a\u3044\u306e\u3067\u3059\u304b",children:"\u306a\u305c\u81ea\u52d5\u7684\u306bXR\u30e2\u30fc\u30c9\u3092\u6709\u52b9\u306b\u3067\u304d\u306a\u3044\u306e\u3067\u3059\u304b?"}),"\n",(0,s.jsxs)(n.p,{children:["Entering WebXR is required by browsers to be triggered by a ",(0,s.jsx)(n.em,{children:"user action"}),". That means that it must be in response to a key press, a mouse click or a touch event. For that reason, there is no way to enter XR immediately on loading a page."]})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},56756:(e,n,a)=>{a.d(n,{A:()=>s});const s=a.p+"assets/images/camera-offset-d112be433765c9320d5273087a111151.jpg"},28453:(e,n,a)=>{a.d(n,{R:()=>r,x:()=>o});var s=a(96540);const i={},t=s.createContext(i);function r(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);