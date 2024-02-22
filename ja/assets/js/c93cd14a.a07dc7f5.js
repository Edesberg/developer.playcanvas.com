"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[1861],{26508:(n,i,e)=>{e.r(i),e.d(i,{assets:()=>h,contentTitle:()=>r,default:()=>c,frontMatter:()=>t,metadata:()=>a,toc:()=>g});var s=e(74848),l=e(28453);const t={title:"\u30e9\u30f3\u30bf\u30a4\u30e0\u30e9\u30a4\u30c8\u30de\u30c3\u30d7",sidebar_position:5},r=void 0,a={id:"user-manual/graphics/lighting/runtime-lightmaps",title:"\u30e9\u30f3\u30bf\u30a4\u30e0\u30e9\u30a4\u30c8\u30de\u30c3\u30d7",description:"Sponza",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/user-manual/graphics/lighting/runtime-lightmaps.md",sourceDirName:"user-manual/graphics/lighting",slug:"/user-manual/graphics/lighting/runtime-lightmaps",permalink:"/ja/user-manual/graphics/lighting/runtime-lightmaps",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/graphics/lighting/runtime-lightmaps.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"\u30e9\u30f3\u30bf\u30a4\u30e0\u30e9\u30a4\u30c8\u30de\u30c3\u30d7",sidebar_position:5},sidebar:"userManualSidebar",previous:{title:"\u30a2\u30f3\u30d3\u30a8\u30f3\u30c8\u30aa\u30af\u30eb\u30fc\u30b8\u30e7\u30f3(AO)",permalink:"/ja/user-manual/graphics/lighting/ambient-occlusion"},next:{title:"\u30af\u30e9\u30b9\u30bf\u30fc\u30c9\u30e9\u30a4\u30c6\u30a3\u30f3\u30b0",permalink:"/ja/user-manual/graphics/lighting/clustered-lighting"}},h={},g=[{value:"\u30e9\u30f3\u30bf\u30a4\u30e0\u30e9\u30a4\u30c8\u30de\u30c3\u30d7\u751f\u6210",id:"runtime-lightmap-generation",level:2},{value:"\u30d9\u30a4\u30af\u3055\u308c\u308b\u30e9\u30a4\u30c8\u306e\u8a2d\u5b9a",id:"setting-up-lights-for-baking",level:2},{value:"\u30bd\u30d5\u30c8\u30c7\u30a3\u30ec\u30af\u30b7\u30e7\u30ca\u30eb\u30e9\u30a4\u30c8",id:"soft-directional-light",level:3},{value:"\u74b0\u5883\u30e9\u30a4\u30c8\u306e\u30d9\u30a4\u30af",id:"baking-an-environment-light",level:2},{value:"\u30e9\u30a4\u30c8\u30de\u30c3\u30d7\u306e\u30d5\u30a3\u30eb\u30bf\u30ea\u30f3\u30b0",id:"lightmap-filtering",level:2},{value:"\u30d9\u30fc\u30ad\u30f3\u30b0\u306e\u30e2\u30c7\u30eb\u306e\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7",id:"setting-up-models-for-baking",level:2},{value:"\u4e00\u822c\u7684\u306a\u5149\u8a2d\u5b9a",id:"common-light-settings",level:2},{value:"\u30e9\u30a4\u30c8\u30de\u30c3\u30d4\u30f3\u30b0\u8a2d\u5b9a",id:"lightmapping-settings",level:2},{value:"\u81ea\u52d5\u30a2\u30f3\u30e9\u30c3\u30d7 (Auto-Unwrapping) \u3068UV1\u306e\u751f\u6210",id:"auto-unwrapping-and-uv1-generation",level:2}];function d(n){const i={a:"a",admonition:"admonition",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.img,{src:"/images/user-manual/graphics/lighting/lightmapping/sponza.jpg",alt:"Sponza"}),"\n",(0,s.jsx)(i.em,{children:"\u3053\u306e\u30b7\u30fc\u30f3\u5185\u306e\u7167\u660e\u306f\u5168\u3066\u30e9\u30a4\u30c8\u30de\u30c3\u30d7\u30c6\u30af\u30b9\u30c1\u30e3\u306b\u3088\u3063\u3066\u63d0\u4f9b\u3055\u308c\u3066\u3044\u307e\u3059"})]}),"\n",(0,s.jsx)(i.p,{children:"\u30e9\u30a4\u30c8\u30de\u30c3\u30d7\u751f\u6210\u306f\u3001\u9759\u7684\u30b7\u30fc\u30f3\u306e\u30e9\u30a4\u30c6\u30a3\u30f3\u30b0\u60c5\u5831\u3092\u4e8b\u524d\u306b\u8a08\u7b97\u3057\u3001\u30c6\u30af\u30b9\u30c1\u30e3\u306b\u4fdd\u5b58\u3059\u308b\u30d7\u30ed\u30bb\u30b9\u3067\u3042\u308a\u3001\u6750\u6599\u306b\u9069\u7528\u3055\u308c\u307e\u3059\u3002\u3053\u308c\u306f\u3001\u591a\u304f\u306e\u5149\u6e90\u3068\u30b8\u30aa\u30e1\u30c8\u30ea\u304c\u9759\u7684\u307e\u305f\u306f\u74b0\u5883\u7684\u3067\u3042\u308b\u5834\u5408\u3001\u30b7\u30fc\u30f3\u3092\u7167\u3089\u3059\u52b9\u7387\u7684\u3067\u73fe\u5b9f\u7684\u306a\u65b9\u6cd5\u3067\u3059\u3002"}),"\n",(0,s.jsx)(i.h2,{id:"runtime-lightmap-generation",children:"\u30e9\u30f3\u30bf\u30a4\u30e0\u30e9\u30a4\u30c8\u30de\u30c3\u30d7\u751f\u6210"}),"\n",(0,s.jsx)(i.p,{children:"PlayCanvas\u306f\u3001\u30e9\u30a4\u30c8\u30de\u30c3\u30d7\u306e\u751f\u6210\u306b\u4fbf\u5229\u306a\u30bd\u30ea\u30e5\u30fc\u30b7\u30e7\u30f3\u3092\u63d0\u4f9b\u3057\u3066\u3044\u307e\u3059\u3002\u30a8\u30c7\u30a3\u30bf\u5185\u306e\u6a19\u6e96Light\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u3067\u3001\u3069\u306e\u30e9\u30a4\u30c8\u3092\u30e9\u30a4\u30c8\u30de\u30c3\u30d7\u306e\u751f\u6210\u306b\u4f7f\u7528\u3059\u308b\u304b\u3001\u3069\u306e\u30e9\u30a4\u30c8\u3092\u30e9\u30f3\u30bf\u30a4\u30e0\u3067\u30b7\u30fc\u30f3\u3092\u52d5\u7684\u306b\u7167\u3089\u3059\u305f\u3081\u306b\u4f7f\u7528\u3059\u308b\u304b\u3092\u9078\u629e\u3067\u304d\u307e\u3059\u3002\u30d9\u30a4\u30af\u306b\u8a2d\u5b9a\u3057\u305f\u30e9\u30a4\u30c8\u304c\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304c\u30e9\u30a4\u30c8\u30de\u30c3\u30d7\u3092\u751f\u6210\u3057\u3066\u30b7\u30fc\u30f3\u3092\u7167\u3089\u3059\u969b\u306b\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,s.jsx)(i.p,{children:"\u30e9\u30f3\u30bf\u30a4\u30e0\u30e9\u30a4\u30c8\u30de\u30c3\u30d7\u306e\u591a\u304f\u306e\u5229\u70b9\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["\u30e9\u30a4\u30c6\u30a3\u30f3\u30b0\u306f",(0,s.jsx)(i.strong,{children:"\u30e9\u30f3\u30bf\u30a4\u30e0\u3067\u884c\u308f\u308c\u306a\u3044"}),"\u3002"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"\u9759\u7684\u30e9\u30a4\u30c8"}),"\u3092\u4f55\u767e\u500b\u3082\u4f7f\u7528\u3057\u3066\u30b7\u30fc\u30f3\u306e\u7167\u660e\u3092\u884c\u3046\u3053\u3068\u304c\u3067\u304d\u308b\u3002"]}),"\n",(0,s.jsxs)(i.li,{children:["\u307b\u3068\u3093\u3069\u306e\u5834\u5408\u3001\u30e9\u30f3\u30bf\u30a4\u30e0\u3067\u30e9\u30a4\u30c8\u30de\u30c3\u30d7\u3092\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3059\u308b\u65b9\u304c\u3001\u591a\u304f\u306e\u30e9\u30a4\u30c8\u30de\u30c3\u30d7\u30c6\u30af\u30b9\u30c1\u30e3\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3059\u308b\u3088\u308a\u3082",(0,s.jsx)(i.strong,{children:"\u9ad8\u901f"}),"\u3067\u3059\u3002"]}),"\n",(0,s.jsxs)(i.li,{children:["\u30a8\u30c7\u30a3\u30bf\u3067 ",(0,s.jsx)(i.strong,{children:"\u9759\u7684\u30e9\u30a4\u30c8\u3068\u52d5\u7684\u30e9\u30a4\u30c8"})," \u3092\u6df7\u5408\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,s.jsxs)(i.li,{children:["\u30e9\u30f3\u30bf\u30a4\u30e0\u3067",(0,s.jsx)(i.strong,{children:"\u518d\u30d9\u30a4\u30af"}),"\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,s.jsxs)(i.li,{children:["\u30e9\u30a4\u30c8\u30de\u30c3\u30d7\u306f",(0,s.jsx)(i.strong,{children:"HDR"}),"\u3067\u3059\u3002"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"\u8272"}),"\u3068",(0,s.jsx)(i.strong,{children:"\u65b9\u5411"}),"\u306e\u4e21\u65b9\u306e\u30c7\u30fc\u30bf\u3092\u30d9\u30a4\u30af\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u3001\u30d9\u30a4\u30af\u3055\u308c\u305f\u8868\u9762\u306b\u30b9\u30da\u30ad\u30e5\u30e9\u30ea\u30c6\u30a3\u3092\u8a2d\u5b9a\u3067\u304d\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"\u305f\u3060\u3057\u3001\u30e9\u30f3\u30bf\u30a4\u30e0\u30e9\u30a4\u30c8\u30de\u30c3\u30d7\u306e\u6b20\u70b9\u306f\u3001\u73fe\u6642\u70b9\u3067\u306f\u30b0\u30ed\u30fc\u30d0\u30eb\u30fb\u30a4\u30eb\u30df\u30cd\u30fc\u30b7\u30e7\u30f3\u3084\u4e00\u90e8\u306e\u7279\u6b8a\u306a\u30d9\u30a4\u30ad\u30f3\u30b0\u30c4\u30fc\u30eb\u306e\u9ad8\u5ea6\u306a\u6a5f\u80fd\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u306a\u3044\u3053\u3068\u3067\u3059\u3002"}),"\n",(0,s.jsx)(i.admonition,{type:"note",children:(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.a,{href:"/user-manual/graphics/advanced-rendering/batching",children:"\u30d0\u30c3\u30c1\u51e6\u7406"}),"\u3092\u4f7f\u7528\u3057\u3066\u3044\u308b\u5834\u5408\u3001\u30e9\u30f3\u30bf\u30a4\u30e0\u30e9\u30a4\u30c8\u30de\u30c3\u30d7\u304c\u9069\u7528\u3055\u308c\u307e\u305b\u3093\u3002\u306a\u305c\u306a\u3089\u3001\u5404\u30e9\u30a4\u30c8\u30de\u30c3\u30d7\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u304c\u72ec\u81ea\u306e\u30e9\u30a4\u30c8\u30de\u30c3\u30d7\u30c6\u30af\u30b9\u30c1\u30e3\u3092\u5fc5\u8981\u3068\u3059\u308b\u305f\u3081\u3067\u3059\u3002"]})}),"\n",(0,s.jsx)(i.h2,{id:"setting-up-lights-for-baking",children:"\u30d9\u30a4\u30af\u3055\u308c\u308b\u30e9\u30a4\u30c8\u306e\u8a2d\u5b9a"}),"\n",(0,s.jsx)(i.p,{children:"\u5404Light\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306b\u306f\u3001\u30e9\u30a4\u30c8\u30de\u30c3\u30d7\u3092\u30d9\u30a4\u30af\u3059\u308b\u305f\u3081\u306e\u6b21\u306e\u8a2d\u5b9a\u304c\u542b\u307e\u308c\u3066\u3044\u307e\u3059\u3002\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u306f\u3001\u65b0\u3057\u3044\u30e9\u30a4\u30c8\u306f\u30c0\u30a4\u30ca\u30df\u30c3\u30af\u306b\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u307e\u3059\u3002"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Bake Lightmap"})," \u2013 \u6709\u52b9\u306b\u3059\u308b\u3068\u3001\u30e9\u30a4\u30c8\u306f\u7bc4\u56f2\u5185\u306b\u3042\u308b\u4efb\u610f\u306e\u30e9\u30a4\u30c8\u30de\u30c3\u30d7\u4ed8\u304d\u30e2\u30c7\u30eb\u306e\u30e9\u30a4\u30c8\u30de\u30c3\u30d7\u3092\u30d9\u30a4\u30af\u3057\u307e\u3059\u3002"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Bake Direction"})," \u2013 \u30e9\u30a4\u30c8\u304c\u30e9\u30a4\u30c8\u65b9\u5411\u60c5\u5831\u30d9\u30a4\u30af\u306b\u5bc4\u4e0e\u3059\u308b\u304b\u3069\u3046\u304b\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002\u3053\u308c\u306f\u3001Scene Setting\u3067",(0,s.jsx)(i.strong,{children:"Color and Direction"})," Lightmapping Mode\u3092\u9078\u629e\u3057\u305f\u5834\u5408\u3001\u30b9\u30da\u30ad\u30e5\u30e9\u30ea\u30c6\u30a3\u306e\u7d50\u679c\u306b\u5f71\u97ff\u3057\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:"/images/user-manual/graphics/lighting/lightmapping/editor-lightmap-bake.png",alt:"Light Component Settings"})}),"\n",(0,s.jsx)(i.p,{children:"\u30e9\u30a4\u30c8\u306e\u632f\u308b\u821e\u3044\u3092\u5909\u66f4\u3059\u308b2\u3064\u306e\u8ffd\u52a0\u30aa\u30d7\u30b7\u30e7\u30f3\u304c\u3042\u308a\u307e\u3059: Affect Dynamic \u3068 Affect Lightmapped \u3067\u3059\u3002\u3053\u308c\u3089\u306f\u3001\u30e9\u30f3\u30bf\u30a4\u30e0\u3067\u30e9\u30a4\u30c8\u304c\u3069\u306e\u30e2\u30c7\u30eb\u306b\u4f5c\u7528\u3059\u308b\u304b\u3092\u6c7a\u5b9a\u3057\u307e\u3059\u3002\u3053\u308c\u3089\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u306e\u3069\u3061\u3089\u304b\u304c\u6709\u52b9\u306b\u306a\u3063\u3066\u3044\u308b\u5834\u5408\u3001\u30e9\u30a4\u30c8\u306f\u30e9\u30f3\u30bf\u30a4\u30e0\u3067\u52d5\u4f5c\u3057\u3001\u30e9\u30f3\u30bf\u30a4\u30e0\u30b3\u30b9\u30c8\u304c\u767a\u751f\u3057\u307e\u3059\u3002"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Affect Dynamic"})," \u2013 \u6709\u52b9\u306b\u3059\u308b\u3068\u3001\u30e9\u30a4\u30c8\u306f",(0,s.jsx)(i.strong,{children:"\u30e9\u30a4\u30c8\u30de\u30c3\u30d7\u4ed8\u304d\u3067\u306a\u3044"}),"\u3059\u3079\u3066\u306e\u30e2\u30c7\u30eb\u306b\u4f5c\u7528\u3057\u307e\u3059\u3002"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Affect Lightmapped"})," \u2013 \u6709\u52b9\u306b\u3059\u308b\u3068\u3001\u30e9\u30a4\u30c8\u306f",(0,s.jsx)(i.strong,{children:"\u30e9\u30a4\u30c8\u30de\u30c3\u30d7\u4ed8\u304d\u306e"}),"\u3059\u3079\u3066\u306e\u30e2\u30c7\u30eb\u306b\u4f5c\u7528\u3057\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:["\u30e9\u30a4\u30c8\u306f\u3001",(0,s.jsx)(i.strong,{children:"Bake Lightmap"}),"\u3068",(0,s.jsx)(i.strong,{children:"Affect Lightmapped"}),"\u306e\u4e21\u65b9\u3092\u6709\u52b9\u306b\u3059\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u305b\u3093\u3002\u30e2\u30c7\u30eb\u306e\u30e9\u30a4\u30c8\u30de\u30c3\u30d7\u3092\u4f5c\u6210\u3059\u308b\u305f\u3081\u306b\u30e9\u30a4\u30c8\u304c\u540c\u3058\u30e9\u30f3\u30bf\u30a4\u30e0\u30e9\u30a4\u30c8\u3092\u8ffd\u52a0\u3057\u305f\u5834\u5408\u3001\u30e9\u30a4\u30c8\u306f\u30e9\u30f3\u30bf\u30a4\u30e0\u3067\u540c\u3058\u3088\u3046\u306b\u7167\u660e\u3092\u8ffd\u52a0\u3057\u3001\u540c\u3058\u4f5c\u696d\u304c\u4e8c\u5ea6\u884c\u308f\u308c\u308b\u3053\u3068\u306b\u306a\u308a\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:"/images/user-manual/graphics/lighting/lightmapping/editor-light-shadows.png",alt:"Light Component Shadow Settings"})}),"\n",(0,s.jsxs)(i.p,{children:["\u30e9\u30a4\u30c8\u30de\u30c3\u30d7\u30e9\u30a4\u30c8\u306f\u3001\u30c0\u30a4\u30ca\u30df\u30c3\u30af\u30e9\u30a4\u30c8\u3068\u540c\u3058 ",(0,s.jsx)(i.strong,{children:"Shadows"})," \u8a2d\u5b9a\u3092\u4f7f\u7528\u3057\u307e\u3059\u304c\u3001\u5f71\u306e\u8a08\u7b97\u306f\u30e9\u30a4\u30c8\u30de\u30c3\u30d7\u306e\u751f\u6210\u6642\u306b\u4e00\u5ea6\u3060\u3051\u884c\u308f\u308c\u307e\u3059\u3002\u3053\u306e\u305f\u3081\u3001\u30e9\u30a4\u30c8\u30de\u30c3\u30d7\u30e9\u30a4\u30c8\u3067\u5f71\u304c\u6709\u52b9\u306b\u306a\u3063\u3066\u3044\u308b\u5834\u5408\u3001\u30b3\u30b9\u30c8\u306f\u305a\u3063\u3068\u5c11\u306a\u304f\u306a\u308a\u307e\u3059\u3002\u8a73\u7d30\u306f",(0,s.jsx)(i.a,{href:"/user-manual/graphics/lighting/shadows",children:"Shadows"}),"\u30da\u30fc\u30b8\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u306a\u304a\u3001\u30d9\u30a4\u30af\u306b\u3064\u3044\u3066\u306fShadow Cascade\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u306f\u7121\u8996\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(i.h3,{id:"soft-directional-light",children:"\u30bd\u30d5\u30c8\u30c7\u30a3\u30ec\u30af\u30b7\u30e7\u30ca\u30eb\u30e9\u30a4\u30c8"}),"\n",(0,s.jsxs)(i.p,{children:["\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u306f\u3001\u30d9\u30a4\u30af\u3055\u308c\u305f\u30e9\u30a4\u30c8\u306f\u30cf\u30fc\u30c9\u30b7\u30e3\u30c9\u30a6\u3092\u6295\u5f71\u3057\u307e\u3059\u3002\u8996\u899a\u7684\u306a\u54c1\u8cea\u3092\u5411\u4e0a\u3055\u305b\u308b\u305f\u3081\u306b\u3001",(0,s.jsx)(i.strong,{children:"\u65b9\u5411\u5149"}),"\u306e\u5834\u5408\u3001",(0,s.jsx)(i.strong,{children:"\u30d9\u30a4\u30af\u65b9\u5411"}),"\u30aa\u30d7\u30b7\u30e7\u30f3\u304c\u7121\u52b9\u5316\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u306b\u306f\u3001\u30bd\u30d5\u30c8\u30d9\u30a4\u30af\u3055\u308c\u305f\u30b7\u30e3\u30c9\u30a6\u304c\u5229\u7528\u53ef\u80fd\u3067\u3059\u3002\u3053\u306e\u5834\u5408\u3001\u3055\u3089\u306b2\u3064\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Bake Samples"})," \u2013 \u30e9\u30a4\u30c8\u3092\u30e9\u30a4\u30c8\u30de\u30c3\u30d7\u306b\u30d1\u30c3\u30ad\u30f3\u30b0\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3059\u308b\u30b5\u30f3\u30d7\u30eb\u306e\u6570\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002\u30c7\u30d5\u30a9\u30eb\u30c8\u306f1\u3067\u3001\u6700\u5927\u5024\u306f255\u3067\u3059\u3002\u3053\u306e\u5024\u306f\u30d9\u30a4\u30af\u306e\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u306b\u5f71\u97ff\u3092\u4e0e\u3048\u307e\u3059\u3002\u5024\u3092\u3067\u304d\u308b\u3060\u3051\u4f4e\u304f\u8a2d\u5b9a\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059(5\u301c20)\u3002"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Bake Area"})," \u2013\u534a\u5f71\u306e\u89d2\u5ea6\u3092\u5ea6\u6570\u3067\u6307\u5b9a\u3057\u307e\u3059\u3002Soft Shadow Boundary\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:"/images/user-manual/graphics/lighting/lightmapping/editor-directional-light.png",alt:"Soft Directional Light Settings"})}),"\n",(0,s.jsx)(i.p,{children:"\u6b21\u306e\u753b\u50cf\u306f\u3001\u30b5\u30f3\u30d7\u30eb\u304c15\u3067Area\u304c10\u306e\u5834\u5408\u306e\u30cf\u30fc\u30c9\u30b7\u30e3\u30c9\u30a6\u3068\u30bd\u30d5\u30c8\u30b7\u30e3\u30c9\u30a6\u306e\u9055\u3044\u3092\u793a\u3057\u3066\u3044\u307e\u3059\u3002"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:"/images/user-manual/graphics/lighting/lightmapping/shadows-hard-soft.png",alt:"Hard and Soft Shadow Examples"})}),"\n",(0,s.jsx)(i.h2,{id:"baking-an-environment-light",children:"\u74b0\u5883\u30e9\u30a4\u30c8\u306e\u30d9\u30a4\u30af"}),"\n",(0,s.jsxs)(i.p,{children:["PlayCanvas\u306f2\u7a2e\u985e\u306e\u74b0\u5883\u30e9\u30a4\u30c6\u30a3\u30f3\u30b0\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u3059: ",(0,s.jsx)(i.a,{href:"/user-manual/scenes/settings#ambient-color",children:"Ambient Color"}),"\u3068",(0,s.jsx)(i.a,{href:"/user-manual/scenes/settings#skybox",children:"Skybox"}),"\u3067\u3059\u3002\u3053\u308c\u3089\u306f\u3001\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u306f\u30e9\u30f3\u30bf\u30a4\u30e0\u3067\u4e21\u65b9\u3068\u3082\u9069\u7528\u3055\u308c\u3066\u3044\u307e\u3059\u3002"]}),"\n",(0,s.jsxs)(i.p,{children:["\u30e9\u30f3\u30bf\u30a4\u30e0\u74b0\u5883\u30e9\u30a4\u30c8\u306e\u9069\u7528\u306e\u5236\u9650\u4e8b\u9805\u306f\u3001",(0,s.jsx)(i.strong,{children:"Ambient Occlusion"}),"\u306e\u6b20\u5982\u3067\u3059\u3002\u4ee3\u66ff\u6848\u3068\u3057\u3066\u3001\u74b0\u5883\u30e9\u30a4\u30c8\u3092\u30e9\u30a4\u30c8\u30de\u30c3\u30d7\u306b\u30d9\u30a4\u30af\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u3001\u305d\u306e\u969b\u306bAmbient Occlusion\u3082\u542b\u307e\u308c\u307e\u3059\u3002\u3053\u308c\u306f\u3001\u30b0\u30ed\u30fc\u30d0\u30eb\u8a2d\u5b9a\u306e",(0,s.jsx)(i.a,{href:"/user-manual/scenes/settings#lightmapping",children:"Lightmapping"}),"\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u69cb\u6210\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"Ambient Bake"}),"\u304c\u6709\u52b9\u306b\u306a\u3063\u3066\u3044\u308b\u5834\u5408\u3001\u74b0\u5883\u30e9\u30a4\u30c8\u306e\u8ca2\u732e\u306fAmbient Occlusion\u3092\u542b\u3080\u30e9\u30a4\u30c8\u30de\u30c3\u30d7\u306b\u30d9\u30a4\u30af\u3055\u308c\u307e\u3059\u3002",(0,s.jsx)(i.strong,{children:"Samples"}),"\u8a2d\u5b9a\u306f\u3001\u30d9\u30a4\u30af\u306e\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u306b\u5f71\u97ff\u3092\u4e0e\u3048\u3001\u3067\u304d\u308b\u3060\u3051\u4f4e\u304f\u8a2d\u5b9a\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059 (5-20)\u3002"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:"/images/user-manual/graphics/lighting/lightmapping/lightmapping-settings-ambient-bake.png",alt:"Lightmapping Settings"})}),"\n",(0,s.jsx)(i.p,{children:"\u6b21\u306e\u753b\u50cf\u306f\u3001Ambient Occlusion\u3092\u542b\u3080Ambient Color\u306e\u52b9\u679c\u3092\u793a\u3057\u3066\u3044\u307e\u3059\u3002"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:"/images/user-manual/graphics/lighting/lightmapping/ambient-color.png",alt:"Ambient Color Examples"})}),"\n",(0,s.jsx)(i.h2,{id:"lightmap-filtering",children:"\u30e9\u30a4\u30c8\u30de\u30c3\u30d7\u306e\u30d5\u30a3\u30eb\u30bf\u30ea\u30f3\u30b0"}),"\n",(0,s.jsx)(i.p,{children:"Soft Directional Light\u3084\u74b0\u5883\u30e9\u30a4\u30c8\u306e\u30d9\u30a4\u30ad\u30f3\u30b0\u306e\u5834\u5408\u3001\u30d9\u30a4\u30af\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u3092\u5411\u4e0a\u3055\u305b\u308b\u305f\u3081\u306b\u4f4e\u3044\u30b5\u30f3\u30d7\u30eb\u6570\u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u304c\u3042\u308a\u307e\u3059\u3002\u3053\u308c\u306b\u3088\u308a\u3001\u4ee5\u4e0b\u306e\u753b\u50cf\u306e\u3088\u3046\u306a\u30d0\u30f3\u30c7\u30a3\u30f3\u30b0\u30a2\u30fc\u30c6\u30a3\u30d5\u30a1\u30af\u30c8\u304c\u4f5c\u6210\u3055\u308c\u307e\u3059(15\u30b5\u30f3\u30d7\u30eb\u4f7f\u7528)\u3002"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:"/images/user-manual/graphics/lighting/lightmapping/lightmap-15-samples.png",alt:"Lightmap with 15 samples"})}),"\n",(0,s.jsx)(i.p,{children:"\u30e9\u30a4\u30c8\u30de\u30c3\u30d7\u306e\u54c1\u8cea\u3092\u5411\u4e0a\u3055\u305b\u308b\u306b\u306f\u3001\u3088\u308a\u591a\u304f\u306e\u30b5\u30f3\u30d7\u30eb\u3092\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002\u3053\u308c\u306f\u3001100\u500b\u306e\u30b5\u30f3\u30d7\u30eb\u3092\u4f7f\u7528\u3059\u308b\u6b21\u306e\u753b\u50cf\u3067\u308f\u304b\u308b\u3088\u3046\u306b\u3001\u53ef\u80fd\u306a\u9650\u308a\u6700\u9ad8\u306e\u54c1\u8cea\u306b\u306a\u308a\u307e\u3059\u3002"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:"/images/user-manual/graphics/lighting/lightmapping/lightmap-100-samples.png",alt:"Lightmap with 100 samples"})}),"\n",(0,s.jsx)(i.p,{children:"\u3088\u308a\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u306e\u3042\u308b\u4ee3\u66ff\u54c1\u3068\u3057\u3066\u3001\u30e9\u30a4\u30c8\u30de\u30c3\u30d7\u306f\u3001\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u3092\u5411\u4e0a\u3055\u305b\u308b\u305f\u3081\u306b\u3001\u8a31\u5bb9\u3067\u304d\u308b\u54c1\u8cea\u306e\u305f\u3081\u306b\u30b9\u30de\u30fc\u30c8\u306e\u4e21\u5074\u307c\u3051\u3092\u4f7f\u7528\u3057\u3066\u30d5\u30a3\u30eb\u30bf\u30ea\u30f3\u30b0\u3067\u304d\u307e\u3059\u3002\u3053\u308c\u306f\u300115\u306e\u30b5\u30f3\u30d7\u30eb\u3092\u4f7f\u7528\u3057\u3001\u30d5\u30a3\u30eb\u30bf\u30ea\u30f3\u30b0\u3092\u6709\u52b9\u306b\u3059\u308b\u6b21\u306e\u753b\u50cf\u3067\u898b\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:"/images/user-manual/graphics/lighting/lightmapping/lightmap-filtering.png",alt:"Lightmap with 15 samples and filtering"})}),"\n",(0,s.jsx)(i.p,{children:"\u30d5\u30a3\u30eb\u30bf\u30ea\u30f3\u30b0\u306f\u6700\u7d42\u7684\u306a\u713c\u304d\u30e9\u30a4\u30c8\u30de\u30c3\u30d7\u3067\u884c\u308f\u308c\u3001\u30e9\u30a4\u30c8\u30de\u30c3\u30d7\u304c\u7e2b\u3044\u76ee\u5168\u4f53\u306b\u30d5\u30a3\u30eb\u30bf\u30ea\u30f3\u30b0\u3055\u308c\u3066\u3044\u306a\u3044\u305f\u3081\u3001\u5305\u88c5\u3055\u308c\u3066\u3044\u306a\u3044UV\u306e\u7e2b\u3044\u76ee\u306b\u76ee\u306b\u898b\u3048\u308b\u30a8\u30c3\u30b8\u3092\u4f5c\u6210\u3067\u304d\u308b\u3053\u3068\u306b\u6ce8\u610f\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u3057\u305f\u304c\u3063\u3066\u3001\u30d5\u30a3\u30eb\u30bf\u30ea\u30f3\u30b0\u306f\u3059\u3079\u3066\u306e\u30b7\u30fc\u30f3\u306b\u9069\u3057\u3066\u3044\u306a\u3044\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u3002\u30a2\u30fc\u30c6\u30a3\u30d5\u30a1\u30af\u30c8\u3092\u6700\u5c0f\u9650\u306b\u6291\u3048\u308b\u306b\u306f\u3001\u5f37\u529b\u306a\u30d5\u30a3\u30eb\u30bf\u30fc\u3068\u591a\u6570\u306e\u30b5\u30f3\u30d7\u30eb\u306e\u30d0\u30e9\u30f3\u30b9\u3092\u3068\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,s.jsx)(i.h2,{id:"setting-up-models-for-baking",children:"\u30d9\u30fc\u30ad\u30f3\u30b0\u306e\u30e2\u30c7\u30eb\u306e\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7"}),"\n",(0,s.jsxs)(i.p,{children:["\u5404 ",(0,s.jsx)(i.strong,{children:"Model"})," \u307e\u305f\u306f ",(0,s.jsx)(i.strong,{children:"Render"})," \u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306f\u3001\u30e9\u30a4\u30c8\u30de\u30c3\u30d7\u3092\u53d7\u4fe1\u3059\u308b\u305f\u3081\u306b\u3001\u30e9\u30a4\u30c8\u30de\u30c3\u30d4\u30f3\u30b0\u3092\u6709\u52b9\u306b\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002",(0,s.jsx)(i.strong,{children:"LightMapped"}),"\u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u30c1\u30a7\u30c3\u30af\u3059\u308b\u3053\u3068\u306b\u3088\u308a\u3001\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u3067\u30e9\u30a4\u30c8\u30de\u30c3\u30d4\u30f3\u30b0\u3092\u6709\u52b9\u306b\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:"/images/user-manual/graphics/lighting/lightmapping/model-settings.png",alt:"Model Component Settings"})}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:"/images/user-manual/graphics/lighting/lightmapping/render-settings.png",alt:"Render Component Settings"})}),"\n",(0,s.jsx)(i.p,{children:"**\u30ad\u30e3\u30b9\u30c8\u30e9\u30a4\u30c8\u30de\u30c3\u30d7\u30b7\u30e3\u30c9\u30a6 (Cast Lightmap Shadows) **\u30aa\u30d7\u30b7\u30e7\u30f3\u306f\u3001\u30e2\u30c7\u30eb\u304c\u30e9\u30a4\u30c8\u30de\u30c3\u30d7\u306b\u30b7\u30e3\u30c9\u30a6\u3092\u30ad\u30e3\u30b9\u30c8\u3059\u308b\u304b\u3069\u3046\u304b\u3092\u5224\u65ad\u3057\u307e\u3059\u3002\u751f\u6210\u3055\u308c\u305f\u30e9\u30a4\u30c8\u30de\u30c3\u30d7\u30c6\u30af\u30b9\u30c1\u30e3\u306e\u89e3\u50cf\u5ea6\u3092\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002\u307e\u305f\u3001UV1\u306e\u9818\u57df\u306b\u4e57\u6570\u3092\u9069\u7528\u3057\u3066\u305d\u306e\u30b5\u30a4\u30ba\u306b\u5f71\u97ff\u3092\u4e0e\u3048\u308b\u30aa\u30d7\u30b7\u30e7\u30f3\u3082\u3042\u308a\u307e\u3059\u3002\u30e9\u30a4\u30c8\u30de\u30c3\u30d7\u30b5\u30a4\u30ba\u306e\u4e57\u6570\u306b\u3064\u3044\u3066\u306f\u3001\u4ee5\u4e0b\u3067\u8aac\u660e\u3057\u307e\u3059\u3002"}),"\n",(0,s.jsx)(i.h2,{id:"common-light-settings",children:"\u4e00\u822c\u7684\u306a\u5149\u8a2d\u5b9a"}),"\n",(0,s.jsx)(i.p,{children:"\u4f7f\u7528\u3067\u304d\u308b\u5149\u8a2d\u5b9a\u306e\u3044\u304f\u3064\u304b\u306e\u7d44\u307f\u5408\u308f\u305b\u304c\u3042\u308a\u307e\u3059\u3002\u305d\u308c\u305e\u308c\u306b\u30e6\u30fc\u30b9\u30b1\u30fc\u30b9\u304c\u3042\u308a\u3001\u7570\u306a\u308b\u7d44\u307f\u5408\u308f\u305b\u306e\u3042\u308b\u30e9\u30a4\u30c8\u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u306b\u3088\u308a\u3001\u9ad8\u54c1\u8cea\u306e\u30d3\u30b8\u30e5\u30a2\u30eb\u3068\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u306e\u30d0\u30e9\u30f3\u30b9\u3092\u3068\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"\u30d9\u30a4\u30af"}),(0,s.jsx)(i.th,{children:"\u975e\u30d9\u30a4\u30af\u306b\u5f71\u97ff"}),(0,s.jsx)(i.th,{children:"\u30d9\u30a4\u30af\u306b\u5f71\u97ff\u3092\u4e0e\u3048\u307e\u3059"}),(0,s.jsx)(i.th,{children:"\u8aac\u660e"})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"false"}),(0,s.jsx)(i.td,{children:"true"}),(0,s.jsx)(i.td,{children:"false"}),(0,s.jsx)(i.td,{children:"\u3053\u308c\u306f\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u52d5\u7684\u30e9\u30a4\u30c8\u3067\u3059\u3002\u3059\u3079\u3066\u306e\u975e\u30e9\u30a4\u30c8\u30de\u30c3\u30d7\u30e2\u30c7\u30eb\u306b\u5f71\u97ff\u3057\u307e\u3059\u3002"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"true"}),(0,s.jsx)(i.td,{children:"false"}),(0,s.jsx)(i.td,{children:"false"}),(0,s.jsx)(i.td,{children:"\u3053\u306e\u30e9\u30a4\u30c8\u306f\u3001\u30e9\u30a4\u30c8\u30de\u30c3\u30d7\u30e2\u30c7\u30eb\u306e\u30e9\u30a4\u30c8\u30de\u30c3\u30d7\u3092\u751f\u6210\u3057\u3001\u5b9f\u884c\u6642\u306b\u306f\u8cbb\u7528\u304c\u304b\u304b\u308a\u307e\u305b\u3093\u3002\u307b\u3068\u3093\u3069\u306e\u9759\u7684\u74b0\u5883\u30e9\u30a4\u30c8\u306f\u3001\u3053\u306e\u8a2d\u5b9a\u3092\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"true"}),(0,s.jsx)(i.td,{children:"true"}),(0,s.jsx)(i.td,{children:"false"}),(0,s.jsx)(i.td,{children:"\u3053\u306e\u30e9\u30a4\u30c8\u306f\u30e9\u30a4\u30c8\u30de\u30c3\u30d7\u3092\u751f\u6210\u3057\u307e\u3059\u304c\u3001\u975e\u5149\u30de\u30c3\u30d7\u30e2\u30c7\u30eb\u306b\u3082\u5f71\u97ff\u3057\u307e\u3059\u3002\u3053\u306e\u5149\u3067\u7167\u3089\u3055\u308c\u308b\u5fc5\u8981\u304c\u3042\u308b\u52d5\u7684/\u79fb\u52d5\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u304c\u3042\u308b\u5834\u5408\u306b\u5f79\u7acb\u3061\u307e\u3059\u3002\u305f\u3068\u3048\u3070\u3001\u30d7\u30ec\u30fc\u30e4\u30fc\u306e\u30ad\u30e3\u30e9\u30af\u30bf\u30fc\u306b\u3082\u5f71\u97ff\u3092\u4e0e\u3048\u308b\u9855\u8457\u306a\u74b0\u5883\u5149\u3002"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"false"}),(0,s.jsx)(i.td,{children:"true"}),(0,s.jsx)(i.td,{children:"true"}),(0,s.jsx)(i.td,{children:"\u3053\u306e\u30e9\u30a4\u30c8\u306f\u3001\u30e9\u30a4\u30c8\u30de\u30c3\u30d7\u30e2\u30c7\u30eb\u3068\u975e\u30e9\u30a4\u30c8\u30de\u30c3\u30d7\u30e2\u30c7\u30eb\u306e\u4e21\u65b9\u306b\u5f71\u97ff\u3059\u308b\u52d5\u7684\u306a\u30e9\u30a4\u30c8\u3067\u3059\u3002"})]})]})]}),"\n",(0,s.jsx)(i.h2,{id:"lightmapping-settings",children:"\u30e9\u30a4\u30c8\u30de\u30c3\u30d4\u30f3\u30b0\u8a2d\u5b9a"}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsxs)(i.strong,{children:["\u30b5\u30a4\u30ba\u306e\u4e57\u6570 (Size Multiplier) ",(0,s.jsx)(i.strong,{children:"\u8a2d\u5b9a\u306f\u3001\u3059\u3079\u3066\u306e\u30e2\u30c7\u30eb\u3068\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306b\u5f71\u97ff\u3057\u307e\u3059\u3002PlayCanvas\u306f\u3001\u30e2\u30c7\u30eb\u306b\u5fc5\u8981\u306a\u89e3\u50cf\u5ea6\u306e\u30e9\u30a4\u30c8\u30de\u30c3\u30d7\u3092\u81ea\u52d5\u7684\u306b\u6c7a\u5b9a\u3057\u307e\u3059\u3002\u30e2\u30c7\u30eb\u306e\u30b9\u30b1\u30fc\u30eb\u3068\u30b8\u30aa\u30e1\u30c8\u30ea\u306e\u9818\u57df\u30b5\u30a4\u30ba\u306b\u57fa\u3065\u3044\u3066\u3001\u3053\u306e\u5024\u3092\u8a08\u7b97\u3057\u307e\u3059\u3002\u30e2\u30c7\u30eb\u306e"}),"Size Multiplier"]}),"\u30d5\u30a3\u30fc\u30eb\u30c9\u3092\u5909\u66f4\u3059\u308b\u304b\u3001\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u30b0\u30ed\u30fc\u30d0\u30eb\u8a2d\u5b9a\u3092\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3059\u308b\u3053\u3068\u306b\u3088\u308a\u3001\u3053\u306e\u8a08\u7b97\u306b\u5f71\u97ff\u3092\u4e0e\u3048\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(i.p,{children:"\u305f\u3068\u3048\u3070\u3001\u30b5\u30a4\u30ba\u304c1x1\u30e6\u30cb\u30c3\u30c8(\u30e1\u30fc\u30bf\u30fc)\u306e\u5e73\u9762\u3092\u691c\u8a0e\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u30b0\u30ed\u30fc\u30d0\u30eb\u30b5\u30a4\u30ba\u306e\u4e57\u6570\u304c16\u3067\u3001\u30e2\u30c7\u30eb\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u4e57\u6570\u304c2\u306e\u5834\u5408\u300132x32(1 sq/m * 16 * 2)\u306e\u30e9\u30a4\u30c8\u30de\u30c3\u30d7\u30c6\u30af\u30b9\u30c1\u30e3\u30b5\u30a4\u30ba\u304c\u751f\u6210\u3055\u308c\u307e\u3059\u30021\u5e73\u65b9\u30e1\u30fc\u30c8\u30eb\u306b32x32\u30d4\u30af\u30bb\u30eb\u304c\u3042\u308a\u3001\u3053\u308c\u306f\u30d4\u30af\u30bb\u30eb\u30b5\u30a4\u30ba\u306e\u7d043cm\u3067\u3059\u3002"}),"\n",(0,s.jsx)(i.p,{children:"**\u6700\u5927\u89e3\u50cf\u5ea6 (Max Resolution) ** \u306f\u3001\u30e1\u30e2\u30ea\u3092\u7bc0\u7d04\u3059\u308b\u305f\u3081\u306b\u751f\u6210\u3055\u308c\u305f\u30e9\u30a4\u30c8\u30de\u30c3\u30d7\u306e\u6700\u5927\u89e3\u50cf\u5ea6\u5236\u9650\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002"}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"\u30e2\u30fc\u30c9"}),"\u306f\u3001\u713c\u304d\u4ed8\u3051\u308b\u30c7\u30fc\u30bf\u3092\u6307\u5b9a\u3067\u304d\u307e\u3059(\u4f8b:\u62e1\u6563\u8272\u307e\u305f\u306f\u30e9\u30a4\u30c8\u304b\u3089\u30d4\u30af\u30bb\u30eb\u3078\u306e\u65b9\u5411)\u3002\u65b9\u5411\u30c7\u30fc\u30bf\u306f\u3001\u5358\u7d14\u306a\u30b9\u30da\u30ad\u30e5\u30e9\u30ea\u30c6\u30a3\u3092\u30b7\u30df\u30e5\u30ec\u30fc\u30c8\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3055\u308c\u307e\u3059\u30021\u3064\u306e\u65b9\u5411\u306e\u307f\u304c\u713c\u304d\u4ed8\u3051\u3089\u308c\u308b\u305f\u3081\u3001\u8907\u6570\u306e\u30e9\u30a4\u30c8\u304c\u91cd\u306a\u308b\u3068\u8907\u96d1\u306b\u306a\u308a\u307e\u3059\u3002\u65b9\u5411\u306e\u713c\u304d\u4ed8\u3051\u306f\u3001\u500b\u3005\u306e\u30e9\u30a4\u30c8\u306b\u3082\u8a2d\u5b9a\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:"/images/user-manual/graphics/lighting/lightmapping/lightmapping-settings.png",alt:"Global Lightmapping Settings"})}),"\n",(0,s.jsx)(i.h2,{id:"auto-unwrapping-and-uv1-generation",children:"\u81ea\u52d5\u30a2\u30f3\u30e9\u30c3\u30d7 (Auto-Unwrapping) \u3068UV1\u306e\u751f\u6210"}),"\n",(0,s.jsxs)(i.p,{children:["\u30e9\u30a4\u30c8\u30de\u30c3\u30d7\u306f\u3001Model\u30a2\u30bb\u30c3\u30c8\u306e2\u756a\u76ee\u306e ",(0,s.jsx)(i.strong,{children:"UV\u5ea7\u6a19(UV1)"})," \u3092\u4f7f\u7528\u3057\u3066\u5e38\u306b\u9069\u7528\u3055\u308c\u307e\u3059\u3002\u6700\u826f\u306e\u7d50\u679c\u3092\u5f97\u308b\u306b\u306f\u3001PlayCanvas\u306b\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3059\u308b\u524d\u306b3D\u30b3\u30f3\u30c6\u30f3\u30c4\u30c4\u30fc\u30eb\u304b\u3089\u30e2\u30c7\u30eb\u306b2\u756a\u76ee\u306eUV\u30bb\u30c3\u30c8\u3092\u8ffd\u52a0\u3059\u308b\u3053\u3068\u3092\u304a\u52e7\u3081\u3057\u307e\u3059\u3002\u30e9\u30a4\u30c8\u30de\u30c3\u30d7\u306b\u9069\u3057\u305fUV\u306b\u3064\u3044\u3066\u306f\u3001",(0,s.jsx)(i.a,{href:"/user-manual/graphics/lighting/lightmapping/#uv-mapping",children:"UV\u30de\u30c3\u30d4\u30f3\u30b0"}),"\u30bb\u30af\u30b7\u30e7\u30f3\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,s.jsx)(i.p,{children:"\u30e2\u30c7\u30eb\u306bUV1\u30bb\u30c3\u30c8\u304c\u306a\u3044\u5834\u5408\u3001PlayCanvas\u30a8\u30c7\u30a3\u30bf\u30fc\u306f\u81ea\u52d5\u7684\u306b\u30a2\u30f3\u30e9\u30c3\u30d7\u3057\u3066UV1\u5ea7\u6a19\u3092\u751f\u6210\u3057\u307e\u3059\u3002"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:"/images/user-manual/graphics/lighting/lightmapping/model-uv1-missing.png",alt:"Model\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u304c\u306a\u3044"})}),"\n",(0,s.jsx)(i.p,{children:"\u30e2\u30c7\u30eb\u306bUV1\u30de\u30c3\u30d7\u304c\u306a\u3044\u5834\u5408\u3001\u30e9\u30a4\u30c8\u30de\u30c3\u30d4\u30f3\u30b0\u3092\u6709\u52b9\u306b\u3059\u308b\u3068\u3001Model\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3067\u8b66\u544a\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:"/images/user-manual/graphics/lighting/lightmapping/auto-unwrap.jpg",alt:"Model Asset: Auto Unwrap Pipeline"})}),"\n",(0,s.jsxs)(i.p,{children:["\u8b66\u544a\u3092\u4fee\u6b63\u3059\u308b\u306b\u306f\u3001Model\u30a2\u30bb\u30c3\u30c8\u3092\u9078\u629e\u3057\u3066",(0,s.jsx)(i.strong,{children:"\u30d1\u30a4\u30d7\u30e9\u30a4\u30f3"}),"\u30bb\u30af\u30b7\u30e7\u30f3\u3092\u958b\u304d\u307e\u3059\u3002 ",(0,s.jsx)(i.strong,{children:"Auto-Unwrapping"})," \u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u3001\u9032\u884c\u72b6\u6cc1\u30d0\u30fc\u304c\u5b8c\u4e86\u3059\u308b\u307e\u3067\u5f85\u3061\u307e\u3059\u3002\u81ea\u52d5\u30a2\u30f3\u30e9\u30c3\u30d7\u306f\u3001Model\u30a2\u30bb\u30c3\u30c8\u3092\u7de8\u96c6\u3057\u307e\u3059\u3002\u305d\u306e\u305f\u3081\u3001\u30bd\u30fc\u30b9\u304b\u3089\u30e2\u30c7\u30eb\u3092\u518d\u30a4\u30f3\u30dd\u30fc\u30c8\u3059\u308b\u5834\u5408(\u305f\u3068\u3048\u3070\u3001\u65b0\u3057\u3044FBX\u3092\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3059\u308b\u5834\u5408)\u306f\u3001\u4e8b\u524d\u306b\u8a08\u7b97\u3055\u308c\u305fUV1\u304c\u5931\u308f\u308c\u307e\u3059\u3002\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3055\u308c\u305f\u30e2\u30c7\u30eb\u306bUV1\u304c\u306a\u3044\u5834\u5408\u306f\u3001\u30e2\u30c7\u30eb\u3092\u518d\u5ea6\u81ea\u52d5\u30a2\u30f3\u30e9\u30c3\u30d7\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(i.p,{children:"**\u30d1\u30c7\u30a3\u30f3\u30b0 (padding) ** \u30aa\u30d7\u30b7\u30e7\u30f3\u306f\u3001\u30a2\u30f3\u30e9\u30c3\u30d7\u304c\u767a\u751f\u3059\u308b\u3068\u304d\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u9593\u306e\u30b9\u30da\u30fc\u30b9\u3092\u6c7a\u5b9a\u3057\u307e\u3059\u3002\u30e9\u30a4\u30c8\u304c\u5b58\u5728\u3057\u3066\u306f\u3044\u3051\u306a\u3044\u5834\u6240\u306b\u5149\u304c\u898b\u3048\u308b\u5834\u5408\u306f\u3001\u30d1\u30c7\u30a3\u30f3\u30b0\u3092\u5897\u3084\u3057\u3066\u30e9\u30a4\u30c8\u30d6\u30ea\u30fc\u30c7\u30a3\u30f3\u30b0\u3092\u6e1b\u3089\u3059\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"})]})}function c(n={}){const{wrapper:i}={...(0,l.R)(),...n.components};return i?(0,s.jsx)(i,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}},28453:(n,i,e)=>{e.d(i,{R:()=>r,x:()=>a});var s=e(96540);const l={},t=s.createContext(l);function r(n){const i=s.useContext(t);return s.useMemo((function(){return"function"==typeof n?n(i):{...i,...n}}),[i,n])}function a(n){let i;return i=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:r(n.components),s.createElement(t.Provider,{value:i},n.children)}}}]);