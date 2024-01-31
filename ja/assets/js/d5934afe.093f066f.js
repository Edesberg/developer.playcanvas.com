"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[2938],{36492:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var t=n(85893),a=n(11151);const i={title:"\u30a2\u30bb\u30c3\u30c8\u30ec\u30b8\u30b9\u30c8\u30ea\u306e\u4f7f\u7528\u65b9\u6cd5",tags:["loading","assets","basics"],thumb:"https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/406036/U2FYM6-image-75.jpg"},r=void 0,d={id:"tutorials/using-assets",title:"\u30a2\u30bb\u30c3\u30c8\u30ec\u30b8\u30b9\u30c8\u30ea\u306e\u4f7f\u7528\u65b9\u6cd5",description:'\u30af\u30ea\u30c3\u30af\u3057\u3066\u30d5\u30a9\u30fc\u30ab\u30b9\u3057\u3066SPACEBAR\u3092\u62bc\u3057\u3066A\u3068B\u306e\u30e2\u30c7\u30eb\u3092\u5207\u308a\u66ff\u3048\u307e\u3059\u3002"L"\u3092\u62bc\u3059\u3068C\u30e2\u30c7\u30eb\u3092\u8aad\u307f\u8fbc\u307f\u3001"C"\u3092\u62bc\u3059\u3068C\u30e2\u30c7\u30eb\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002',source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/tutorials/using-assets.md",sourceDirName:"tutorials",slug:"/tutorials/using-assets",permalink:"/ja/tutorials/using-assets",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/tutorials/using-assets.md",tags:[{label:"loading",permalink:"/ja/tags/loading"},{label:"assets",permalink:"/ja/tags/assets"},{label:"basics",permalink:"/ja/tags/basics"}],version:"current",frontMatter:{title:"\u30a2\u30bb\u30c3\u30c8\u30ec\u30b8\u30b9\u30c8\u30ea\u306e\u4f7f\u7528\u65b9\u6cd5",tags:["loading","assets","basics"],thumb:"https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/406036/U2FYM6-image-75.jpg"},sidebar:"tutorialsSidebar",previous:{title:"UI - \u30c6\u30ad\u30b9\u30c8\u30a4\u30f3\u30d7\u30c3\u30c8",permalink:"/ja/tutorials/ui-text-input"},next:{title:"Using events with scripts",permalink:"/ja/tutorials/using-events-with-scripts"}},c={},l=[{value:"\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7",id:"\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7",level:2},{value:"\u30a2\u30bb\u30c3\u30c8\u30ec\u30b8\u30b9\u30c8\u30ea",id:"\u30a2\u30bb\u30c3\u30c8\u30ec\u30b8\u30b9\u30c8\u30ea",level:2},{value:"\u30d7\u30ea\u30ed\u30fc\u30c9\u3055\u308c\u305f\u30a2\u30bb\u30c3\u30c8\u306e\u4f7f\u7528",id:"\u30d7\u30ea\u30ed\u30fc\u30c9\u3055\u308c\u305f\u30a2\u30bb\u30c3\u30c8\u306e\u4f7f\u7528",level:2},{value:"\u30e9\u30f3\u30bf\u30a4\u30e0\u3067\u30a2\u30bb\u30c3\u30c8\u3092\u30ed\u30fc\u30c9\u3059\u308b",id:"\u30e9\u30f3\u30bf\u30a4\u30e0\u3067\u30a2\u30bb\u30c3\u30c8\u3092\u30ed\u30fc\u30c9\u3059\u308b",level:2},{value:"\u5b8c\u6210\u3057\u305f\u30b9\u30af\u30ea\u30d7\u30c8",id:"\u5b8c\u6210\u3057\u305f\u30b9\u30af\u30ea\u30d7\u30c8",level:2},{value:"AssetRegistry\u30a4\u30d9\u30f3\u30c8",id:"assetregistry\u30a4\u30d9\u30f3\u30c8",level:2}];function o(e){const s={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:"iframe-container",children:(0,t.jsx)("iframe",{loading:"lazy",src:"https://playcanv.as/p/QwDM4qaF/",title:"Using the Asset Registry"})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.em,{children:'\u30af\u30ea\u30c3\u30af\u3057\u3066\u30d5\u30a9\u30fc\u30ab\u30b9\u3057\u3066SPACEBAR\u3092\u62bc\u3057\u3066A\u3068B\u306e\u30e2\u30c7\u30eb\u3092\u5207\u308a\u66ff\u3048\u307e\u3059\u3002"L"\u3092\u62bc\u3059\u3068C\u30e2\u30c7\u30eb\u3092\u8aad\u307f\u8fbc\u307f\u3001"C"\u3092\u62bc\u3059\u3068C\u30e2\u30c7\u30eb\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002'})}),"\n",(0,t.jsx)(s.p,{children:"\u7c21\u5358\u306a\u30b2\u30fc\u30e0\u3084\u88fd\u54c1\u306e\u5834\u5408\u306f\u3001\u3059\u3079\u3066\u306e\u30a2\u30bb\u30c3\u30c8\u3092\u30a8\u30c7\u30a3\u30bf\u30fc\u3067\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u3057\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304c\u958b\u59cb\u3059\u308b\u524d\u306b\u305d\u308c\u3089\u304c\u30d7\u30ea\u30ed\u30fc\u30c9\u3055\u308c\u3001\u3042\u306a\u305f\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306f\u3046\u307e\u304f\u52d5\u4f5c\u3057\u307e\u3059\u3002"}),"\n",(0,t.jsxs)(s.p,{children:["\u3088\u308a\u9ad8\u5ea6\u306a\u88fd\u54c1\u306e\u5834\u5408\u3001\u30a2\u30bb\u30c3\u30c8\u306b\u30a2\u30af\u30bb\u30b9\u3057\u3001\u53c2\u7167\u3092\u5909\u66f4\u3057\u3001\u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u5909\u66f4\u3057\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304c\u3088\u308a\u901f\u304f\u30ed\u30fc\u30c9\u3067\u304d\u308b\u3088\u3046\u306b\u30b9\u30c8\u30ea\u30fc\u30e0\u30c7\u30fc\u30bf\u3092\u52d5\u7684\u306b\u8aad\u307f\u8fbc\u3080\u3053\u3068\u304c\u3067\u304d\u308b\u3088\u3046\u306b\u3057\u305f\u3044\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u3002\u5fc5\u8981\u306a\u3068\u304d\u306b\u30a2\u30bb\u30c3\u30c8\u3092\u30ed\u30fc\u30c9\u3059\u308b\u3060\u3051\u3067\u3059\u3002\u305d\u306e\u305f\u3081\u306b\u3001",(0,t.jsx)(s.a,{href:"https://api.playcanvas.com/classes/Engine.AssetRegistry.html",children:(0,t.jsx)(s.code,{children:"AssetRegistry"})}),"\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002"]}),"\n",(0,t.jsxs)(s.p,{children:["\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f\u3001\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u4e0a\u306e\u30e2\u30c7\u30eb\u3092\u30ad\u30fc\u3092\u62bc\u3057\u3066\u5207\u308a\u66ff\u3048\u308b\u5c0f\u3055\u306a\u30b7\u30fc\u30f3\u3092\u69cb\u7bc9\u3057\u3066\u3001\u30ed\u30fc\u30c9\u3055\u308c\u3066\u3044\u306a\u30443\u756a\u76ee\u306e\u30e2\u30c7\u30eb\u3092\u52d5\u7684\u306b\u30ed\u30fc\u30c9\u3057\u307e\u3059\u3002\u5b8c\u6210\u3057\u305f",(0,t.jsx)(s.a,{href:"https://playcanvas.com/project/406036",children:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306f\u3053\u3053\u306b\u3042\u308a\u307e\u3059"}),"\u3002"]}),"\n",(0,t.jsx)(s.h2,{id:"\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7",children:"\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.em,{children:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["3\u3064\u306e\u30e2\u30c7\u30eb\u30a2\u30bb\u30c3\u30c8 ",(0,t.jsx)(s.strong,{children:"A"})," (\u6587\u5b57A\u306e\u30e2\u30c7\u30eb)\u3001 ",(0,t.jsx)(s.strong,{children:"B"})," (\u6587\u5b57B\u306e\u30e2\u30c7\u30eb)\u3001 ",(0,t.jsx)(s.strong,{children:"C"})," (\u6587\u5b57C\u306e\u30e2\u30c7\u30eb)\u304c\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3055\u308c\u3066\u3044\u307e\u3059\u3002"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"C"}),"\u30ec\u30f3\u30c0\u30fc\u30a2\u30bb\u30c3\u30c8\u306f ",(0,t.jsx)(s.em,{children:"\u30d7\u30ea\u30ed\u30fc\u30c9\u3055\u308c\u306a\u3044\u3088\u3046"})," \u306b\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u307e\u3059\u3002"]}),"\n",(0,t.jsxs)(s.li,{children:["\u30b7\u30fc\u30f3\u306b\u30ec\u30f3\u30c0\u30fc\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u304c\u8ffd\u52a0\u3055\u308c\u3001\u30e2\u30c7\u30eb",(0,t.jsx)(s.strong,{children:"A"}),"\u304cRender\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306b\u5272\u308a\u5f53\u3066\u3089\u308c\u3066\u3044\u307e\u3059\u3002"]}),"\n",(0,t.jsxs)(s.li,{children:["\u30ec\u30f3\u30c0\u30fc\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306bScript\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u304c\u8ffd\u52a0\u3055\u308c\u3001 ",(0,t.jsx)(s.code,{children:"update_asset.js"})," \u3068\u3044\u3046\u65b0\u3057\u3044\u30b9\u30af\u30ea\u30d7\u30c8\u304c\u4f5c\u6210\u3055\u308c\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/downloads/tutorials/A.dae",children:"A\u30e2\u30c7\u30eb"}),"\u3001",(0,t.jsx)(s.a,{href:"/downloads/tutorials/B.dae",children:"B\u30e2\u30c7\u30eb"}),"\u3001",(0,t.jsx)(s.a,{href:"/downloads/tutorials/C.dae",children:"C\u30e2\u30c7\u30eb"}),"\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3057\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u30d5\u30a1\u30a4\u30eb\u540d\u304cA.dae\u3001B.dae\u3001C.dae\u306b\u306a\u3063\u3066\u3044\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u30a2\u30bb\u30c3\u30c8\u540d\u306b\u5f71\u97ff\u3092\u4e0e\u3048\u308b\u305f\u3081\u3067\u3059\u3002"]}),"\n",(0,t.jsx)(s.h2,{id:"\u30a2\u30bb\u30c3\u30c8\u30ec\u30b8\u30b9\u30c8\u30ea",children:"\u30a2\u30bb\u30c3\u30c8\u30ec\u30b8\u30b9\u30c8\u30ea"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"https://api.playcanvas.com/classes/Engine.AssetRegistry.html",children:(0,t.jsx)(s.code,{children:"pc.AssetRegistry"})}),"\u306f\u3059\u3079\u3066\u306e\u30b9\u30af\u30ea\u30d7\u30c8\u3067",(0,t.jsx)(s.code,{children:"this.app.assets"}),"\u3068\u3057\u3066\u5229\u7528\u3067\u304d\u307e\u3059\u3002\u30ec\u30b8\u30b9\u30c8\u30ea\u306b\u306f\u3001\u30ed\u30fc\u30c9\u3055\u308c\u305f\u304b\u3069\u3046\u304b\u306b\u95a2\u4fc2\u306a\u304f\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u8ffd\u52a0\u3055\u308c\u305f\u3059\u3079\u3066\u306e\u5b9f\u884c\u6642\u30a2\u30bb\u30c3\u30c8\u306e\u8a73\u7d30\u304c\u683c\u7d0d\u3055\u308c\u307e\u3059\u3002\u30a2\u30bb\u30c3\u30c8\u30ec\u30b8\u30b9\u30c8\u30ea\u3092\u4f7f\u7528\u3057\u3066\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u5fc5\u8981\u306a\u30a2\u30bb\u30c3\u30c8\u3092\u691c\u7d22\u3057\u307e\u3059\u3002"]}),"\n",(0,t.jsxs)(s.p,{children:["\u3053\u306e\u5834\u5408\u3001\u30b9\u30af\u30ea\u30d7\u30c8\u5c5e\u6027",(0,t.jsx)(s.code,{children:"a"}),"\u3001",(0,t.jsx)(s.code,{children:"b"}),"\u3001",(0,t.jsx)(s.code,{children:"c"}),"\u3092\u5ba3\u8a00\u3057\u3066\u3001\u30a8\u30c7\u30a3\u30bf\u30fc\u3067\u30a2\u30bb\u30c3\u30c8\u306b\u5272\u308a\u5f53\u3066\u307e\u3059\u3002\u305d\u308c\u3089\u306f\u81ea\u52d5\u7684\u306b\u30b9\u30af\u30ea\u30d7\u30c8\u3067\u5229\u7528\u53ef\u80fd\u306b\u306a\u308a\u307e\u3059\u3002"]}),"\n",(0,t.jsx)(s.h2,{id:"\u30d7\u30ea\u30ed\u30fc\u30c9\u3055\u308c\u305f\u30a2\u30bb\u30c3\u30c8\u306e\u4f7f\u7528",children:"\u30d7\u30ea\u30ed\u30fc\u30c9\u3055\u308c\u305f\u30a2\u30bb\u30c3\u30c8\u306e\u4f7f\u7528"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-javascript",children:"    if (app.keyboard.isPressed(pc.KEY_SPACE)) {\n        if (this.entity.render.asset !== this.b.id) {\n            // \u65b0\u3057\u3044Render\u30a2\u30bb\u30c3\u30c8\u306bRender\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u66f4\u65b0\u3059\u308b\n            console.log('Changed to B Render Asset');\n            this.entity.render.asset = this.b;\n        }\n    } else {\n        // ...\n            if (this.entity.render.asset !== this.a.id) {\n                // \u30aa\u30ea\u30b8\u30ca\u30eb\u306eRender\u30a2\u30bb\u30c3\u30c8\u306b\u623b\u3059\n                console.log('Changed to A Render Asset');\n                this.entity.render.asset = this.a;\n            }\n        // ...\n    }\n"})}),"\n",(0,t.jsxs)(s.p,{children:["\u3053\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3067\u306f",(0,t.jsx)(s.strong,{children:"A"}),"\u3068",(0,t.jsx)(s.strong,{children:"B"}),"\u306e\u30a2\u30bb\u30c3\u30c8\u304c",(0,t.jsx)(s.strong,{children:"\u30d7\u30ea\u30ed\u30fc\u30c9"}),"\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u3064\u307e\u308a\u3001\u30ed\u30fc\u30c9\u753b\u9762\u4e2d\u306b\u3053\u308c\u3089\u306e\u30a2\u30bb\u30c3\u30c8\u304c\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3055\u308c\u307e\u3059\u3002\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u958b\u59cb\u3057\u3066\u3059\u3050\u306b\u4f7f\u7528\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002\u30a2\u30bb\u30c3\u30c8\u304c\u30ed\u30fc\u30c9\u3055\u308c\u308b\u3068\u3001\u30ed\u30fc\u30c9\u3055\u308c\u305f\u30ea\u30bd\u30fc\u30b9\u306b\u306f",(0,t.jsx)(s.code,{children:"asset.resource"}),"\u3068\u3044\u3046\u540d\u524d\u304c\u4ed8\u3051\u3089\u308c\u3001",(0,t.jsx)(s.a,{href:"https://api.playcanvas.com/classes/Engine.RenderComponent.html#asset",children:"Render\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u30a2\u30bb\u30c3\u30c8\u30d7\u30ed\u30d1\u30c6\u30a3"}),"\u306b\u30a2\u30bb\u30c3\u30c8\u3092\u5272\u308a\u5f53\u3066\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002",(0,t.jsx)(s.code,{children:"asset.loaded"}),"\u304c",(0,t.jsx)(s.code,{children:"false"}),"\u3067\u3042\u308c\u3070\u3001\u30a2\u30bb\u30c3\u30c8\u306f\u30ed\u30fc\u30c9\u3055\u308c\u3066\u3044\u307e\u305b\u3093\u3002"]}),"\n",(0,t.jsx)("img",{loading:"lazy",src:"/images/tutorials/using_assets/using-assets-a-preload.png",width:"360"}),"\n",(0,t.jsxs)(s.p,{children:["\u3067\u3059\u304b\u3089\u3001",(0,t.jsx)(s.code,{children:"A"}),"\u3068",(0,t.jsx)(s.code,{children:"B"}),"\u306e\u30e2\u30c7\u30eb\u306f\u30d7\u30ea\u30ed\u30fc\u30c9\u3055\u308c\u3001\u5b9f\u884c\u3055\u308c\u308b\u3068\u3059\u3050\u306b\u4f7f\u7528\u3067\u304d\u308b\u3053\u3068\u304c\u308f\u304b\u3063\u3066\u3044\u307e\u3059\u3002\u3053\u306e\u30b3\u30fc\u30c9\u306f\u3001\u30b9\u30da\u30fc\u30b9\u30d0\u30fc\u304c\u62bc\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u306f\u3001Render\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u30ec\u30f3\u30c0\u30fc\u30a2\u30bb\u30c3\u30c8\u3092\u30ea\u30bd\u30fc\u30b9\u30d7\u30ed\u30d1\u30c6\u30a3\u306b\u5909\u66f4\u3057\u307e\u3059\u3002\u3053\u306e\u5834\u5408\u3001",(0,t.jsx)(s.code,{children:"asset.resource"}),"\u306f",(0,t.jsx)(s.code,{children:"pc.Render"}),"\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306b\u306a\u308a\u307e\u3059\u3002\u5404\u7570\u306a\u3063\u305f\u30a2\u30bb\u30c3\u30c8\u30bf\u30a4\u30d7(\u30aa\u30fc\u30c7\u30a3\u30aa\u3001\u30c6\u30af\u30b9\u30c1\u30e3\u306a\u3069)\u306b\u3064\u3044\u3066\u3001",(0,t.jsx)(s.code,{children:"asset.resource"}),"\u30d7\u30ed\u30d1\u30c6\u30a3\u306f\u95a2\u9023\u3059\u308b\u30bf\u30a4\u30d7\u306b\u306a\u308a\u307e\u3059\u3002"]}),"\n",(0,t.jsx)(s.h2,{id:"\u30e9\u30f3\u30bf\u30a4\u30e0\u3067\u30a2\u30bb\u30c3\u30c8\u3092\u30ed\u30fc\u30c9\u3059\u308b",children:"\u30e9\u30f3\u30bf\u30a4\u30e0\u3067\u30a2\u30bb\u30c3\u30c8\u3092\u30ed\u30fc\u30c9\u3059\u308b"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-javascript",children:"if (app.keyboard.isPressed(pc.KEY_C)) {\n    if (this.c.loaded) {\n        if (this.entity.render.asset !== this.c.id) {\n            console.log('Changed to C Render Asset');\n            this.entity.render.asset = this.c;\n        }\n    }\n} else {\n    if (this.entity.render.asset !== this.a.id) {\n        // \u30aa\u30ea\u30b8\u30ca\u30eb\u306eRender\u30a2\u30bb\u30c3\u30c8\u306b\u623b\u3059\n        console.log('Changed to A Render Asset');\n        this.entity.render.asset = this.a;\n    }\n}\n"})}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"C"})," \u306e\u30ec\u30f3\u30c0\u30fc\u30a2\u30bb\u30c3\u30c8\u306f ",(0,t.jsx)(s.em,{children:"\u30d7\u30ea\u30ed\u30fc\u30c9"})," \u3055\u308c\u3066\u3044\u306a\u3044\u305f\u3081\u3001\u4e0a\u8a18\u306e\u30b3\u30fc\u30c9\u3067\u30ea\u30bd\u30fc\u30b9\u304c\u30ed\u30fc\u30c9\u3055\u308c\u3066\u304b\u3089\u4f7f\u7528\u3059\u308b\u304b\u3069\u3046\u304b\u3092\u78ba\u8a8d\u3057\u3066\u3044\u307e\u3059\u3002 ",(0,t.jsx)(s.code,{children:"asset.loaded"})," \u304cfalse\u3067\u3042\u308c\u3070\u3001\u30ea\u30bd\u30fc\u30b9\u306f\u30ed\u30fc\u30c9\u3055\u308c\u3066\u3044\u307e\u305b\u3093\u3002 ",(0,t.jsx)(s.strong,{children:"C"})," \u306e\u30ec\u30f3\u30c0\u30fc\u30a2\u30bb\u30c3\u30c8\u304c\u30ed\u30fc\u30c9\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u3001 ",(0,t.jsx)(s.code,{children:"this.c.resource"})," \u306f ",(0,t.jsx)(s.code,{children:"pc.Render"})," \u30d7\u30ed\u30d1\u30c6\u30a3\u306b\u306a\u308a\u3001 ",(0,t.jsx)(s.code,{children:"asset.loaded"})," \u304ctrue\u306b\u306a\u308a\u307e\u3059\u3002\u305d\u3057\u3066\u79c1\u305f\u3061\u306f\u305d\u308c\u3092\u5272\u308a\u5f53\u3066\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,t.jsx)("img",{loading:"lazy",src:"/images/tutorials/using_assets/using-assets-c-preload.png",width:"360"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-javascript",children:"if (this.app.keyboard.isPressed(pc.KEY_L)) {\n    this.app.assets.load(this.c);\n}\n"})}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"L"}),"\u3092\u62bc\u3059\u3068\u3001",(0,t.jsx)(s.strong,{children:"C"}),"\u30e2\u30c7\u30eb\u3092\u30ed\u30fc\u30c9\u3057\u307e\u3059\u3002\u3053\u308c\u3092\u884c\u3046\u306b\u306f\u3001\u30ed\u30fc\u30c9\u3055\u308c\u3066\u3044\u306a\u3044\u30a2\u30bb\u30c3\u30c8\u3092",(0,t.jsx)(s.code,{children:"this.app.assets.load()"}),"\u306b\u6e21\u3057\u307e\u3059\u3002\u30a2\u30bb\u30c3\u30c8\u304c\u3059\u3067\u306b\u30ed\u30fc\u30c9\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u3001\u3053\u306e\u30e1\u30bd\u30c3\u30c9\u306f\u4f55\u3082\u3057\u307e\u305b\u3093\u3002"]}),"\n",(0,t.jsxs)(s.p,{children:["\u30a2\u30bb\u30c3\u30c8\u304c\u30ed\u30fc\u30c9\u3055\u308c\u305f\u3089\u3001",(0,t.jsx)(s.code,{children:"asset.resource"}),"\u306f",(0,t.jsx)(s.code,{children:"pc.Render"}),"\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306b\u306a\u308a\u3001",(0,t.jsx)(s.code,{children:"C"}),"\u30ad\u30fc\u3092\u62bc\u3057\u3066Render\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306b\u30a2\u30bb\u30c3\u30c8\u3092\u5272\u308a\u5f53\u3066\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,t.jsx)(s.h2,{id:"\u5b8c\u6210\u3057\u305f\u30b9\u30af\u30ea\u30d7\u30c8",children:"\u5b8c\u6210\u3057\u305f\u30b9\u30af\u30ea\u30d7\u30c8"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-javascript",children:"var UpdateAsset = pc.createScript('updateAsset');\n\nUpdateAsset.attributes.add('a', {\n    type: 'asset',\n    assetType: 'render'\n});\n\nUpdateAsset.attributes.add('b', {\n    type: 'asset',\n    assetType: 'render'\n});\n\nUpdateAsset.attributes.add('c', {\n    type: 'asset',\n    assetType: 'render'\n});\n\n// initialize code called once per entity\nUpdateAsset.prototype.initialize = function() {\n    this.app.keyboard.preventDefault = true;\n};\n\n// update code called every frame\nUpdateAsset.prototype.update = function(dt) {\n    var app = this.app;\n\n    if (app.keyboard.isPressed(pc.KEY_SPACE)) {\n        if (this.entity.render.asset !== this.b.id) {\n            // Render\u30a2\u30bb\u30c3\u30c8\u3092\u65b0\u3057\u3044Render\u30a2\u30bb\u30c3\u30c8\u306b\u66f4\u65b0\u3059\u308b\n            console.log('Changed to B Render Asset');\n            this.entity.render.asset = this.b;\n        }\n    } else {\n        if (app.keyboard.isPressed(pc.KEY_C)) {\n            if (this.c.loaded) {\n                if (this.entity.render.asset !== this.c.id) {\n                    console.log('Changed to C Render Asset');\n                    this.entity.render.asset = this.c;\n                }\n            }\n        } else {\n            if (this.entity.render.asset !== this.a.id) {\n                // \u30aa\u30ea\u30b8\u30ca\u30eb\u306eRender\u30a2\u30bb\u30c3\u30c8\u306b\u623b\u3059\n                console.log('Changed to A Render Asset');\n                this.entity.render.asset = this.a;\n            }\n        }\n    }\n\n    if (app.keyboard.isPressed(pc.KEY_L)) {\n        app.assets.load(this.c);\n    }\n};\n"})}),"\n",(0,t.jsx)(s.h2,{id:"assetregistry\u30a4\u30d9\u30f3\u30c8",children:"AssetRegistry\u30a4\u30d9\u30f3\u30c8"}),"\n",(0,t.jsxs)(s.p,{children:["\u3053\u306e\u4f8b\u3067\u306f\u3001\u30a2\u30bb\u30c3\u30c8\u304c\u30ed\u30fc\u30c9\u3055\u308c\u305f\u3068\u304d\u306b\u3069\u306e\u3088\u3046\u306b\u77e5\u308b\u304b\u3092\u793a\u3057\u3066\u3044\u307e\u305b\u3093\u3002\u3053\u308c\u3092\u884c\u3046\u306b\u306f\u3001 ",(0,t.jsx)(s.code,{children:"pc.AssetRegistry"})," \u30a4\u30d9\u30f3\u30c8\u3001 ",(0,t.jsx)(s.code,{children:'"load"'})," \u30a4\u30d9\u30f3\u30c8\u306a\u3069\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002\u4ee5\u4e0b\u306f\u30b5\u30f3\u30d7\u30eb\u30b3\u30fc\u30c9\u3067\u3059\u3002"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-javascript",children:'// \u30ec\u30b8\u30b9\u30c8\u30ea\u5185\u306e\u540d\u524d\u3067\u30a2\u30bb\u30c3\u30c8\u3092\u691c\u7d22\nvar asset = this.app.assets.find("A");\n// load\u30a4\u30d9\u30f3\u30c8\u306b\u4e00\u56de\u3060\u3051\u306e\u30a4\u30d9\u30f3\u30c8\u30ea\u30b9\u30ca\u30fc\u3092\u8a2d\u5b9a\nthis.app.assets.once("load", function (asset) {\n    // asset.resource\u304c\u30ed\u30fc\u30c9\u3055\u308c\u305f\u3068\u304d\u306e\u51e6\u7406\n}, this);\n'})}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:'"load"'}),"\u30a4\u30d9\u30f3\u30c8\u306f\u975e\u5e38\u306b\u5e83\u7bc4\u3067\u3059\u3002\u3053\u306e\u30a4\u30d9\u30f3\u30c8\u306f\u30ed\u30fc\u30c9\u3055\u308c\u305f\u3059\u3079\u3066\u306e\u30a2\u30bb\u30c3\u30c8\u306b\u5bfe\u3057\u3066\u767a\u706b\u3055\u308c\u308b\u305f\u3081\u3001\u4ed6\u306e\u5834\u6240\u3067\u30a2\u30bb\u30c3\u30c8\u304c\u30ed\u30fc\u30c9\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u3001\u305d\u308c\u304c\u81ea\u5206\u306e\u30a2\u30bb\u30c3\u30c8\u3067\u3042\u308b\u3053\u3068\u3092\u7279\u5b9a\u3059\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u305b\u3093\u3002\u4ee3\u308f\u308a\u306b\u3001",(0,t.jsx)(s.code,{children:'"load:id"'}),"\u30a4\u30d9\u30f3\u30c8\u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u3067\u30a4\u30d9\u30f3\u30c8\u3092\u3088\u308a\u7d5e\u308a\u8fbc\u3080\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-javascript",children:'// \u30ec\u30b8\u30b9\u30c8\u30ea\u5185\u3067\u30a2\u30bb\u30c3\u30c8\u3092\u691c\u7d22\nvar asset = this.app.assets.find("A");\n// load\u30a4\u30d9\u30f3\u30c8\u306b\u4e00\u56de\u3060\u3051\u306e\u30a4\u30d9\u30f3\u30c8\u30ea\u30b9\u30ca\u30fc\u3092\u8a2d\u5b9a\nthis.app.assets.once("load:" + asset.id, function (asset) {\n    // asset.resource\u304c\u30ed\u30fc\u30c9\u3055\u308c\u305f\u3068\u304d\u306e\u51e6\u7406\n}, this);\n'})}),"\n",(0,t.jsx)(s.p,{children:"\u4e0a\u8a18\u306e\u30a4\u30d9\u30f3\u30c8\u306f\u3001\u7279\u5b9a\u306e\u30a2\u30bb\u30c3\u30c8\u306b\u5bfe\u3057\u3066\u306e\u307f\u767a\u751f\u3057\u307e\u3059\u3002\u306f\u308b\u304b\u306b\u4fbf\u5229\u3067\u3059\u3002"}),"\n",(0,t.jsx)(s.p,{children:"\u6700\u5f8c\u306b\u3001\u3057\u3070\u3057\u3070\u767a\u751f\u3059\u308b1\u3064\u306e\u7279\u5b9a\u306e\u30b3\u30fc\u30c7\u30a3\u30f3\u30b0\u30d1\u30bf\u30fc\u30f3\u304c\u3042\u308a\u307e\u3059\u3002\u5b9f\u969b\u306b\u306f\u3001\u975e\u5e38\u306b\u983b\u7e41\u306b\u767a\u751f\u3059\u308b\u305f\u3081\u3001\u3042\u306a\u305f\u304c\u305f\u3081\u3089\u308f\u305a\u306b\u305d\u308c\u3092\u884c\u3046\u4fbf\u5229\u306a\u65b9\u6cd5\u3092\u63d0\u4f9b\u3057\u3066\u3044\u307e\u3059\u3002"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-javascript",children:'var asset = this.app.assets.find("A");\nif (!asset.loaded) {\n    this.app.assets.once("load:" + asset.id, function (asset) {\n        // asset.resource\u3092\u4f7f\u7528\u3059\u308b\u51e6\u7406\n    });\n    this.app.assets.load(asset);\n} else {\n    // asset.resource\u3092\u4f7f\u7528\u3059\u308b\u51e6\u7406\n}\n'})}),"\n",(0,t.jsxs)(s.p,{children:["\u3053\u306e\u30b3\u30fc\u30c9\u306f\u5fc5\u8981\u3068\u3055\u308c\u308b\u30a2\u30bb\u30c3\u30c8\u3092\u8aad\u307f\u8fbc\u307f\u307e\u3059\u304c\u3001\u5c11\u3057\u9577\u3044\u306e\u3067\u4ee3\u308f\u308a\u306b",(0,t.jsx)(s.code,{children:"asset.ready()"}),"\u30e1\u30bd\u30c3\u30c9\u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u3053\u306e\u30b3\u30fc\u30c9\u306f\u3001\u4e0a\u8a18\u3068\u540c\u3058\u6a5f\u80fd\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-javascript",children:'var asset = this.app.assets.find("A");\nasset.ready(function (asset) {\n    // asset.resource\u3092\u4f7f\u7528\u3059\u308b\u51e6\u7406\n});\nthis.app.assets.load(asset);\n'})}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"asset.ready()"}),"\u30e1\u30bd\u30c3\u30c9\u306f\u30a2\u30bb\u30c3\u30c8\u304c\u8aad\u307f\u8fbc\u307e\u308c\u308b\u3068\u3059\u3050\u306b\u305d\u306e\u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u3092\u547c\u3073\u307e\u3059\u3002\u307e\u305f\u3001\u30a2\u30bb\u30c3\u30c8\u304c\u3059\u3067\u306b\u8aad\u307f\u8fbc\u307e\u308c\u3066\u3044\u308b\u5834\u5408\u3001\u3059\u3050\u306b\u305d\u308c\u3092\u547c\u3073\u51fa\u3057\u307e\u3059\u3002\u30a2\u30bb\u30c3\u30c8\u304c\u3059\u3067\u306b\u8aad\u307f\u8fbc\u307e\u308c\u3066\u3044\u308b\u5834\u5408\u3001 ",(0,t.jsx)(s.code,{children:"app.assets.load()"}),"\u306f\u4f55\u3082\u3057\u307e\u305b\u3093\u3002"]})]})}function h(e={}){const{wrapper:s}={...(0,a.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},11151:(e,s,n)=>{n.d(s,{Z:()=>d,a:()=>r});var t=n(67294);const a={},i=t.createContext(a);function r(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);