"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[8820],{43641:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(85893),t=n(11151);const r={title:"Optimizing WebXR applications",sidebar_position:5},o=void 0,s={id:"user-manual/xr/optimizing-webxr",title:"Optimizing WebXR applications",description:"Introduction",source:"@site/docs/user-manual/xr/optimizing-webxr.md",sourceDirName:"user-manual/xr",slug:"/user-manual/xr/optimizing-webxr",permalink:"/user-manual/xr/optimizing-webxr",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/xr/optimizing-webxr.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Optimizing WebXR applications",sidebar_position:5},sidebar:"userManualSidebar",previous:{title:"Input Sources",permalink:"/user-manual/xr/input-sources"},next:{title:"Publishing",permalink:"/user-manual/publishing/"}},l={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Draw Calls and Batching",id:"draw-calls-and-batching",level:3},{value:"Runtime lightmap generation",id:"runtime-lightmap-generation",level:3},{value:"Cautious use of real-time shadows",id:"cautious-use-of-real-time-shadows",level:3},{value:"Watch your fill rate and overdraw",id:"watch-your-fill-rate-and-overdraw",level:3},{value:"Garbage collection stalls",id:"garbage-collection-stalls",level:3},{value:"Profiling Tools",id:"profiling-tools",level:3},{value:"General optimization tips",id:"general-optimization-tips",level:3}];function d(e){const i={a:"a",h2:"h2",h3:"h3",p:"p",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.h2,{id:"introduction",children:"Introduction"}),"\n",(0,a.jsx)(i.p,{children:"A high and consistent framerate is critical for making an enjoyable XR experience. When creating VR/AR content, it is more important than ever to test and optimize early and maintain the target framerate throughout development."}),"\n",(0,a.jsx)(i.p,{children:"For AR experiences, framerates must be managed carefully as world tracking sometimes incurs significant performance costs. This is in addition to the typically performance-constrained mobile hardware most users have access to."}),"\n",(0,a.jsx)(i.p,{children:"For VR experiences, rendering is especially expensive due to the fact that the scene must be rendered once for each view (eye). While PlayCanvas is highly optimized to ensure VR rendering doesn't fully duplicate effort, stereo rendering remains more expensive than mono rendering."}),"\n",(0,a.jsx)(i.p,{children:"For pass-through experiences, AR and VR requirements are combined, and the underlying system has to perform a lot of computation for positioning, image processing, and overlaying rendered images, in addition to other APIs that can be used: depth sensing, color access, image tracking, and more. And duplicate rendering for each eye."}),"\n",(0,a.jsx)(i.p,{children:"In addition, modern HMD devices demand high frame rates, like 75Hz or 90Hz and higher, further increasing the need for highly efficient rendering."}),"\n",(0,a.jsx)(i.p,{children:"PlayCanvas, however, includes several features specifically designed to let your application do more in less time."}),"\n",(0,a.jsx)(i.h3,{id:"draw-calls-and-batching",children:"Draw Calls and Batching"}),"\n",(0,a.jsxs)(i.p,{children:["Draw Calls are operations when the engine provides necessary information to the GPU for rendering an object. The more objects you have in the scene, the more draw calls it will require to render each frame. To reduce the number of draw calls it is recommended to minimize the number of objects in the frame by culling, ",(0,a.jsx)(i.a,{href:"/user-manual/graphics/advanced-rendering/batching/",children:"static batching"})," and ",(0,a.jsx)(i.a,{href:"/user-manual/graphics/advanced-rendering/hardware-instancing/",children:"instancing"}),"."]}),"\n",(0,a.jsx)(i.h3,{id:"runtime-lightmap-generation",children:"Runtime lightmap generation"}),"\n",(0,a.jsx)(i.p,{children:"Each dynamic light has a per-frame runtime cost. The more lights have you the higher the costs and the slower your scene will render. By baking lights into lightmaps you can hugely reduce the cost of static lights to that of simply rendering a texture. Lightmaps can be generated offline using your favorite 3D modeling tool or you can use PlayCanvas's built-in Runtime Lightmap Generation."}),"\n",(0,a.jsxs)(i.p,{children:["Read more about using ",(0,a.jsx)(i.a,{href:"/user-manual/graphics/lighting/runtime-lightmaps/",children:"runtime lightmap generation"}),"."]}),"\n",(0,a.jsx)(i.h3,{id:"cautious-use-of-real-time-shadows",children:"Cautious use of real-time shadows"}),"\n",(0,a.jsx)(i.p,{children:"For similar reasons to dynamic lights, dynamic shadows also have a per-frame runtime cost. Omni lights, in particular, have to render the scene 6 times to generate shadow maps. You should avoid having many lights casting dynamic shadows."}),"\n",(0,a.jsx)(i.h3,{id:"watch-your-fill-rate-and-overdraw",children:"Watch your fill rate and overdraw"}),"\n",(0,a.jsx)(i.p,{children:"The fill rate refers to the number of shader operations that are applied to each pixel on the screen. If you have expensive fragment shader calculations (e.g. lots of lights and complicated materials) and a high resolution (e.g. a mobile phone with a high device pixel ratio) then your application will spend too much time rendering the scene to maintain a high frame rate."}),"\n",(0,a.jsx)(i.p,{children:"Overdraw refers to how many pixels are overwritten by drawing geometry that is obscured by other geometry closer to the camera. Too much overdraw shows that you are wasting GPU processing trying to draw pixels that are not visible. This is usually caused by transparency on materials and non-opaque blending."}),"\n",(0,a.jsxs)(i.p,{children:["Using an extension like ",(0,a.jsx)(i.a,{href:"https://github.com/3Dparallax/insight",children:"WebGL Insight"})," can help you visualize overdraw"]}),"\n",(0,a.jsx)(i.h3,{id:"garbage-collection-stalls",children:"Garbage collection stalls"}),"\n",(0,a.jsx)(i.p,{children:"Web browsers feature automatic garbage collection of unused Javascript objects. The PlayCanvas engine is designed to minimize runtime allocations and you should try to do the same in your code. Pre-allocate vectors and other objects and re-use them so that there are not lots of objects created and discarded every frame."}),"\n",(0,a.jsx)(i.h3,{id:"profiling-tools",children:"Profiling Tools"}),"\n",(0,a.jsxs)(i.p,{children:["PlayCanvas comes with a built-in profiler tool. In the Editor use the Launch Profiler button to run your application with profiling active. ",(0,a.jsx)(i.a,{href:"/user-manual/optimization/profiler/",children:"Read more about the profiler"})]}),"\n",(0,a.jsx)(i.h3,{id:"general-optimization-tips",children:"General optimization tips"}),"\n",(0,a.jsxs)(i.p,{children:[(0,a.jsx)(i.a,{href:"/user-manual/optimization/guidelines/",children:"Many more optimization guidelines"})," are available."]})]})}function h(e={}){const{wrapper:i}={...(0,t.a)(),...e.components};return i?(0,a.jsx)(i,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},11151:(e,i,n)=>{n.d(i,{Z:()=>s,a:()=>o});var a=n(67294);const t={},r=a.createContext(t);function o(e){const i=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function s(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),a.createElement(r.Provider,{value:i},e.children)}}}]);