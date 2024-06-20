"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[5594],{24371:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>r});var n=t(74848),A=t(28453);const a={title:"Ambient Occlusion",sidebar_position:4},l=void 0,s={id:"user-manual/graphics/lighting/ambient-occlusion",title:"Ambient Occlusion",description:"Ambient Occlusion is a technique to approximate how much light gets onto the surface based on its occlusion by the environment.",source:"@site/docs/user-manual/graphics/lighting/ambient-occlusion.md",sourceDirName:"user-manual/graphics/lighting",slug:"/user-manual/graphics/lighting/ambient-occlusion",permalink:"/user-manual/graphics/lighting/ambient-occlusion",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/graphics/lighting/ambient-occlusion.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Ambient Occlusion",sidebar_position:4},sidebar:"userManualSidebar",previous:{title:"Lightmapping",permalink:"/user-manual/graphics/lighting/lightmapping"},next:{title:"Runtime Lightmaps",permalink:"/user-manual/graphics/lighting/runtime-lightmaps"}},o={},r=[{value:"Rendering Global AO",id:"rendering-global-ao",level:2},{value:"Upload to Editor",id:"upload-to-editor",level:2},{value:"Example",id:"example",level:2}];function h(e){const i={a:"a",em:"em",h2:"h2",img:"img",p:"p",strong:"strong",...(0,A.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.p,{children:"Ambient Occlusion is a technique to approximate how much light gets onto the surface based on its occlusion by the environment."}),"\n",(0,n.jsx)(i.p,{children:"In PlayCanvas, ambient lighting is multiplied by the AO map, both diffuse and specular."}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.img,{alt:"Ambient Occlusion comparison: without/with",src:t(53538).A+"",width:"800",height:"400"}),"\n",(0,n.jsx)(i.em,{children:"Left: without AO; Right: with Global AO"})]}),"\n",(0,n.jsx)(i.p,{children:"AO map can be of different scale. E.g. a texture detail AO, showing surface crevices or a world-scale AO with large shadowing effect of different parts of the model. Large-scale AO will give more effect, it usually matches lightmaps on UV1, and is more important."}),"\n",(0,n.jsx)(i.h2,{id:"rendering-global-ao",children:"Rendering Global AO"}),"\n",(0,n.jsxs)(i.p,{children:["Rendering AO can be done using popular 3D modelling and archviz tools. It is practically same as rendering Lightmap that is described in ",(0,n.jsx)(i.a,{href:"/user-manual/graphics/lighting/lightmapping/",children:"Lightmapping Section"}),"."]}),"\n",(0,n.jsx)(i.p,{children:"With few small differences where special material is applied on all geometry that will paint it so it looks like AO, and different settings during rendering into texture."}),"\n",(0,n.jsxs)(i.p,{children:["In 3D's Max with VRay it is done by creating a material of ",(0,n.jsx)(i.strong,{children:"VRayDirt"})," type and ",(0,n.jsx)(i.strong,{children:"Ambient Occlusion"})," mode, where ",(0,n.jsx)(i.strong,{children:"radius"})," can be changed to get desirable results."]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"3D&#39;s Max: Ambient Occlusion VRay Material",src:t(6731).A+"",width:"717",height:"526"})}),"\n",(0,n.jsxs)(i.p,{children:["This material should be applied on all static geometry that have to be in ambient occlusion map. In 3D's Max this can be done either by manually applying it on individual objects or by using VRay Render Settings, using ",(0,n.jsx)(i.strong,{children:"Override mtl"})," property. This way individual materials are preserved and it makes life easier."]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"3D&#39;s Max VRay Render Settings: Override mtl",src:t(28327).A+"",width:"368",height:"290"})}),"\n",(0,n.jsxs)(i.p,{children:["Then we need to get this data out into the texture. In 3D's Max this is done by using ",(0,n.jsx)(i.a,{href:"/user-manual/graphics/lighting/lightmapping#render-to-texture",children:"Render To Texture"}),", same as during Lightmapping rendering, except ",(0,n.jsx)(i.strong,{children:"output"})," option should be using ",(0,n.jsx)(i.strong,{children:"VRayCompleteMap"}),"."]}),"\n",(0,n.jsx)(i.p,{children:"AO Texture does not need to store very detailed information, and visually does not suffers from texture compression artifacts much. So JPEG is economical and is suitable format for it."}),"\n",(0,n.jsx)(i.h2,{id:"upload-to-editor",children:"Upload to Editor"}),"\n",(0,n.jsx)(i.p,{children:"Simply upload texture in Editor and apply it on Ambient Occlusion slot on materials."}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"Editor Ambient Occlusion Map",src:t(7441).A+"",width:"306",height:"269"})}),"\n",(0,n.jsx)(i.h2,{id:"example",children:"Example"}),"\n",(0,n.jsxs)(i.p,{children:["You can ",(0,n.jsx)(i.a,{href:"https://playcanv.as/p/zdkARz26/",children:"explore example"})," that uses global Ambient Occlusion described above and its ",(0,n.jsx)(i.a,{href:"https://playcanvas.com/project/446587/overview/archviz-example",children:"project"}),"."]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.a,{href:"https://playcanv.as/p/zdkARz26/",children:(0,n.jsx)(i.img,{alt:"PlayCanvas Lightmapping",src:t(82958).A+"",width:"800",height:"450"})}),"\n",(0,n.jsx)(i.em,{children:"The lighting in this scene is implemented using Lightmap and AO textures and Box Projected IBL (reflections)"})]})]})}function c(e={}){const{wrapper:i}={...(0,A.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},6731:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/3ds-max-ao-rendering-b469f259ae4d5ef798c4ccb68f577e2e.png"},28327:(e,i,t)=>{t.d(i,{A:()=>n});const n="data:image/png;base64,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"},7441:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/editor-ao-map-5427fff9b55ceb4d1531f082aeae0d89.png"},53538:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/model-ao-comparison-6561266ffde15c0750a82f607f759c03.jpg"},82958:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/playcanvas-lightmapping-scene-839426fc6835a0b39b941115c90cc21e.jpg"},28453:(e,i,t)=>{t.d(i,{R:()=>l,x:()=>s});var n=t(96540);const A={},a=n.createContext(A);function l(e){const i=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function s(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(A):e.components||A:l(e.components),n.createElement(a.Provider,{value:i},e.children)}}}]);