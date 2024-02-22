"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[5427],{16282:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>l,contentTitle:()=>c,default:()=>o,frontMatter:()=>a,metadata:()=>t,toc:()=>h});var s=i(74848),r=i(28453);const a={title:"\u30d6\u30e9\u30f3\u30c1",sidebar_position:2},c=void 0,t={id:"user-manual/version-control/branches",title:"\u30d6\u30e9\u30f3\u30c1",description:"\u30d6\u30e9\u30f3\u30c1\u306f\u72ec\u7acb\u3057\u305f\u958b\u767a\u30e9\u30a4\u30f3\u3067\u3059\u3002\u4f5c\u6210\u3055\u308c\u305f\u3059\u3079\u3066\u306e\u30c1\u30a7\u30c3\u30af\u30dd\u30a4\u30f3\u30c8\u306f\u30d6\u30e9\u30f3\u30c1\u306b\u6240\u5c5e\u3057\u3001\u30d6\u30e9\u30f3\u30c1\u5185\u306e\u4e00\u9023\u306e\u30c1\u30a7\u30c3\u30af\u30dd\u30a4\u30f3\u30c8\u306f\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u958b\u767a\u307e\u305f\u306f\u7279\u5b9a\u306e\u6a5f\u80fd\u306e\u958b\u767a\u3092\u8ffd\u8de1\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002PlayCanvas\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u306f\u3001\u5e38\u306b\u6700\u4f4e1\u3064\u306e\u30d6\u30e9\u30f3\u30c1\u3001\u3064\u307e\u308a\u30e1\u30a4\u30f3\u30d6\u30e9\u30f3\u30c1\u304c\u5b58\u5728\u3057\u3001\u3057\u3070\u3057\u3070\u8907\u6570\u306e\u30d6\u30e9\u30f3\u30c1\u304c\u5b58\u5728\u3057\u307e\u3059\u3002\u30a8\u30c7\u30a3\u30bf\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u30d1\u30cd\u30eb\u3092\u4f7f\u7528\u3057\u3066\u3001\u4e00\u3064\u306e\u30d6\u30e9\u30f3\u30c1\u304b\u3089\u306e\u5909\u66f4\u3092\u4efb\u610f\u306e\u4ed6\u306e\u30d6\u30e9\u30f3\u30c1\u306b\u30de\u30fc\u30b8\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/user-manual/version-control/branches.md",sourceDirName:"user-manual/version-control",slug:"/user-manual/version-control/branches",permalink:"/ja/user-manual/version-control/branches",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/version-control/branches.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"\u30d6\u30e9\u30f3\u30c1",sidebar_position:2},sidebar:"userManualSidebar",previous:{title:"\u30c1\u30a7\u30c3\u30af\u30dd\u30a4\u30f3\u30c8",permalink:"/ja/user-manual/version-control/checkpoints"},next:{title:"\u30de\u30fc\u30b8\u3068\u30b3\u30f3\u30d5\u30ea\u30af\u30c8\u306e\u89e3\u6c7a",permalink:"/ja/user-manual/version-control/merging"}},l={},h=[{value:"\u30e1\u30a4\u30f3\u30d6\u30e9\u30f3\u30c1",id:"main-branch",level:2},{value:"\u73fe\u5728\u306e\u30d6\u30e9\u30f3\u30c1",id:"current-branch",level:2},{value:"\u65b0\u3057\u3044\u30d6\u30e9\u30f3\u30c1\u306e\u4f5c\u6210",id:"creating-a-new-branch",level:2},{value:"\u30d6\u30e9\u30f3\u30c1\u30ea\u30b9\u30c8\u306e\u30d5\u30a3\u30eb\u30bf\u30ea\u30f3\u30b0",id:"filtering-branch-list",level:2},{value:"\u30c9\u30ed\u30c3\u30d7\u30c0\u30a6\u30f3\u30e1\u30cb\u30e5\u30fc",id:"drop-down-menu",level:3},{value:"\u9078\u629e\u3055\u308c\u305f\u30d6\u30e9\u30f3\u30c1\u30dc\u30bf\u30f3",id:"selected-branch-button",level:3},{value:"\u30d6\u30e9\u30f3\u30c1\u306e\u691c\u7d22",id:"searching-for-a-branch",level:2},{value:"\u30d6\u30e9\u30f3\u30c1\u306e\u5207\u308a\u66ff\u3048 (Switch)",id:"switching-to-a-branch",level:2},{value:"\u30d6\u30e9\u30f3\u30c1\u306e\u30af\u30ed\u30fc\u30ba (Close)",id:"closing-a-branch",level:2},{value:"\u30d6\u30e9\u30f3\u30c1\u306e\u524a\u9664 (Delete)",id:"deleting-a-branch",level:2}];function d(n){const e={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.p,{children:"\u30d6\u30e9\u30f3\u30c1\u306f\u72ec\u7acb\u3057\u305f\u958b\u767a\u30e9\u30a4\u30f3\u3067\u3059\u3002\u4f5c\u6210\u3055\u308c\u305f\u3059\u3079\u3066\u306e\u30c1\u30a7\u30c3\u30af\u30dd\u30a4\u30f3\u30c8\u306f\u30d6\u30e9\u30f3\u30c1\u306b\u6240\u5c5e\u3057\u3001\u30d6\u30e9\u30f3\u30c1\u5185\u306e\u4e00\u9023\u306e\u30c1\u30a7\u30c3\u30af\u30dd\u30a4\u30f3\u30c8\u306f\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u958b\u767a\u307e\u305f\u306f\u7279\u5b9a\u306e\u6a5f\u80fd\u306e\u958b\u767a\u3092\u8ffd\u8de1\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002PlayCanvas\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u306f\u3001\u5e38\u306b\u6700\u4f4e1\u3064\u306e\u30d6\u30e9\u30f3\u30c1\u3001\u3064\u307e\u308a\u30e1\u30a4\u30f3\u30d6\u30e9\u30f3\u30c1\u304c\u5b58\u5728\u3057\u3001\u3057\u3070\u3057\u3070\u8907\u6570\u306e\u30d6\u30e9\u30f3\u30c1\u304c\u5b58\u5728\u3057\u307e\u3059\u3002\u30a8\u30c7\u30a3\u30bf\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u30d1\u30cd\u30eb\u3092\u4f7f\u7528\u3057\u3066\u3001\u4e00\u3064\u306e\u30d6\u30e9\u30f3\u30c1\u304b\u3089\u306e\u5909\u66f4\u3092\u4efb\u610f\u306e\u4ed6\u306e\u30d6\u30e9\u30f3\u30c1\u306b\u30de\u30fc\u30b8\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"main-branch",children:"\u30e1\u30a4\u30f3\u30d6\u30e9\u30f3\u30c1"}),"\n",(0,s.jsx)(e.p,{children:"\u3059\u3079\u3066\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u306f\u3001\u300cmain\u300d\u3068\u3044\u3046\u540d\u524d\u306e\u30d6\u30e9\u30f3\u30c1\u304c\u3042\u308a\u3001\u3053\u308c\u306f\u5e38\u306b\u5b58\u5728\u3057\u3001\u524a\u9664\u3059\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u305b\u3093\u3002\u307b\u3068\u3093\u3069\u306e\u70b9\u3067\u3001\u3053\u306e\u30d6\u30e9\u30f3\u30c1\u306f\u4ed6\u306e\u30d6\u30e9\u30f3\u30c1\u3068\u4f55\u3089\u5909\u308f\u308a\u3042\u308a\u307e\u305b\u3093\u3002\u305f\u3060\u3057\u3001\u5834\u5408\u306b\u3088\u3063\u3066\u306f\uff08\u4f8b\u3048\u3070\u3001REST API\u306e\u5834\u5408\uff09\u3001\u4ed6\u306e\u30d6\u30e9\u30f3\u30c1\u304c\u6307\u5b9a\u3055\u308c\u3066\u3044\u306a\u3044\u5834\u5408\u306b\u306f\u300cmain\u300d\u30d6\u30e9\u30f3\u30c1\u304c\u30c7\u30d5\u30a9\u30eb\u30c8\u3068\u3057\u3066\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002\u4e00\u822c\u7684\u306a\u30b7\u30ca\u30ea\u30aa\u3068\u3057\u3066\u306f\u3001main\u30d6\u30e9\u30f3\u30c1\u3092\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u73fe\u5728\u306e\u958b\u767a\u72b6\u614b\u3068\u3057\u3066\u6271\u3044\u3001\u5225\u306e\u30d6\u30e9\u30f3\u30c1\u3092\u5b89\u5b9a\u3057\u305f\u30ea\u30ea\u30fc\u30b9\u7528\u306b\u3001\u3055\u3089\u306b\u4ed6\u306e\u30d6\u30e9\u30f3\u30c1\u3092\u6a5f\u80fd\u958b\u767a\u7528\u306b\u4f7f\u7528\u3059\u308b\u3068\u3044\u3046\u3082\u306e\u3067\u3059\u3002\u3057\u304b\u3057\u3001main\u30d6\u30e9\u30f3\u30c1\u306e\u4f7f\u7528\u307e\u305f\u306f\u4e0d\u4f7f\u7528\u306f\u3001\u3042\u306a\u305f\u306e\u30cb\u30fc\u30ba\u306b\u6700\u9069\u306b\u5408\u308f\u305b\u3066\u81ea\u7531\u306b\u6c7a\u3081\u308b\u3079\u304d\u3067\u3059\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"current-branch",children:"\u73fe\u5728\u306e\u30d6\u30e9\u30f3\u30c1"}),"\n",(0,s.jsxs)(e.p,{children:["\u4f5c\u696d\u3059\u308b\u5404\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u306f\u3001\u5e38\u306b\u4e00\u3064\u306e\u30d6\u30e9\u30f3\u30c1\u304c ",(0,s.jsx)(e.strong,{children:"current branch"})," \u3068\u3057\u3066\u8a2d\u5b9a\u3055\u308c\u307e\u3059\u3002\u3053\u308c\u306f\u3042\u306a\u305f\u304c\u7a4d\u6975\u7684\u306b\u4f5c\u696d\u3057\u3066\u3044\u308b\u30d6\u30e9\u30f3\u30c1\u3067\u3001\u30a8\u30c7\u30a3\u30bf\u3092\u958b\u3044\u305f\u308a\u30b3\u30fc\u30c9\u30d5\u30a1\u30a4\u30eb\u3092\u7de8\u96c6\u3057\u305f\u308a\u3059\u308b\u3068\u3001\u3042\u306a\u305f\u306e\u5909\u66f4\u306f\u73fe\u5728\u306e\u30d6\u30e9\u30f3\u30c1\u306b\u9069\u7528\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(e.h2,{id:"creating-a-new-branch",children:"\u65b0\u3057\u3044\u30d6\u30e9\u30f3\u30c1\u306e\u4f5c\u6210"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"Create branch",src:i(13814).A+"",width:"2124",height:"1200"})}),"\n",(0,s.jsx)(e.p,{children:'\u30d6\u30e9\u30f3\u30c1\u3092\u4f5c\u6210\u3059\u308b\u306b\u306f\u3001\u30d0\u30fc\u30b8\u30e7\u30f3\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u30d1\u30cd\u30eb\u3092\u958b\u304d\u3001\u30d6\u30e9\u30f3\u30c1\u306e\u8d77\u70b9\u3068\u306a\u308b\u30c1\u30a7\u30c3\u30af\u30dd\u30a4\u30f3\u30c8\u3092\u9078\u629e\u3057\u3001\u30c1\u30a7\u30c3\u30af\u30dd\u30a4\u30f3\u30c8\u306e\u30c9\u30ed\u30c3\u30d7\u30c0\u30a6\u30f3\u30e1\u30cb\u30e5\u30fc\u304b\u3089 "New Branch" \u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u9078\u629e\u3057\u307e\u3059\u3002'}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"New branch dialog",src:i(85105).A+"",width:"2118",height:"1196"})}),"\n",(0,s.jsxs)(e.p,{children:["\u30d6\u30e9\u30f3\u30c1\u306e\u540d\u524d\u3092\u3064\u3051\u308b\u3088\u3046\u306b\u6c42\u3081\u3089\u308c\u307e\u3059\u3002",(0,s.jsx)(e.code,{children:"fix-player-bug"}),"\u3084",(0,s.jsx)(e.code,{children:"refactor-sound-effects"}),"\u306e\u3088\u3046\u306b\u3001\u30d6\u30e9\u30f3\u30c1\u306e\u5185\u5bb9\u3092\u8868\u3059\u540d\u524d\u3092\u3064\u3051\u3066\u307f\u3066\u304f\u3060\u3055\u3044\u3002\u30d6\u30e9\u30f3\u30c1\u3092\u4f5c\u6210\u3057\u305f\u5f8c\u3001\u81ea\u52d5\u7684\u306b\u65b0\u3057\u304f\u4f5c\u6210\u3057\u305f\u30d6\u30e9\u30f3\u30c1\u306b\u5207\u308a\u66ff\u3048\u3089\u308c\u307e\u3059\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:["\u81ea\u5206\u3067\u4f5c\u6210\u3057\u305f\u30d6\u30e9\u30f3\u30c1\u306f\u3001\u304a\u6c17\u306b\u5165\u308a\u3068\u3057\u3066\u81ea\u52d5\u7684\u306b\u8a2d\u5b9a\u3055\u308c\u308b\u305f\u3081\u3001",(0,s.jsx)(e.a,{href:"#filtering-branch-list",children:"\u30d6\u30e9\u30f3\u30c1\u30ea\u30b9\u30c8\u306e\u30d5\u30a3\u30eb\u30bf\u30ea\u30f3\u30b0"}),"\u3067\u8fc5\u901f\u306b\u898b\u3064\u3051\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(e.h2,{id:"filtering-branch-list",children:"\u30d6\u30e9\u30f3\u30c1\u30ea\u30b9\u30c8\u306e\u30d5\u30a3\u30eb\u30bf\u30ea\u30f3\u30b0"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"Branch filter",src:i(71349).A+"",width:"1265",height:"720"})}),"\n",(0,s.jsx)(e.p,{children:"\u6b21\u306e\u65b9\u6cd5\u3067\u5206\u5c90\u3092\u30d5\u30a3\u30eb\u30bf\u30ea\u30f3\u30b0\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u304a\u6c17\u306b\u5165\u308a - \u81ea\u5206\u3067\u304a\u6c17\u306b\u5165\u308a\u306b\u3057\u305f\u30d6\u30e9\u30f3\u30c1"}),"\n",(0,s.jsx)(e.li,{children:"\u30aa\u30fc\u30d7\u30f3 - \u958b\u3044\u3066\u3044\u308b\u3059\u3079\u3066\u306e\u30d6\u30e9\u30f3\u30c1"}),"\n",(0,s.jsx)(e.li,{children:"\u30af\u30ed\u30fc\u30ba - \u9589\u3058\u3066\u3044\u308b\u3059\u3079\u3066\u306e\u30d6\u30e9\u30f3\u30c1"}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u30d6\u30e9\u30f3\u30c1\u306b\u6c17\u306b\u5165\u3063\u305f\u3082\u306e\u304c\u3042\u308c\u3070\u3001\u4ee5\u4e0b\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u3067\u304a\u6c17\u306b\u5165\u308a\u306b\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,s.jsx)(e.h3,{id:"drop-down-menu",children:"\u30c9\u30ed\u30c3\u30d7\u30c0\u30a6\u30f3\u30e1\u30cb\u30e5\u30fc"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"Favorite a branch via menu",src:i(54774).A+"",width:"1265",height:"720"})}),"\n",(0,s.jsx)(e.h3,{id:"selected-branch-button",children:"\u9078\u629e\u3055\u308c\u305f\u30d6\u30e9\u30f3\u30c1\u30dc\u30bf\u30f3"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"Favorite a branch via button",src:i(15581).A+"",width:"1265",height:"720"})}),"\n",(0,s.jsx)(e.h2,{id:"searching-for-a-branch",children:"\u30d6\u30e9\u30f3\u30c1\u306e\u691c\u7d22"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"Searching for a branch",src:i(23295).A+"",width:"1275",height:"720"})}),"\n",(0,s.jsx)(e.p,{children:"\u73fe\u5728\u306e\u30d6\u30e9\u30f3\u30c1\u30ea\u30b9\u30c8\u3067\u7279\u5b9a\u306e\u30d6\u30e9\u30f3\u30c1\u3092\u63a2\u3059\u305f\u3081\u306b\u306f\u3001\u4e0a\u90e8\u306e\u691c\u7d22\u30d0\u30fc\u3092\u4f7f\u7528\u3059\u308b\u3068\u4fbf\u5229\u3067\u3059\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"switching-to-a-branch",children:"\u30d6\u30e9\u30f3\u30c1\u306e\u5207\u308a\u66ff\u3048 (Switch)"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"Switch branch",src:i(61848).A+"",width:"2120",height:"1196"})}),"\n",(0,s.jsx)(e.p,{children:'\u30d6\u30e9\u30f3\u30c1\u3092\u5207\u308a\u66ff\u3048\u308b\u306b\u306f\u3001\u30d0\u30fc\u30b8\u30e7\u30f3\u7ba1\u7406\u30d1\u30cd\u30eb\u3092\u958b\u304d\u3001\u5207\u308a\u66ff\u3048\u305f\u3044\u30d6\u30e9\u30f3\u30c1\u3092\u9078\u629e\u3057\u3001\u30d6\u30e9\u30f3\u30c1\u306e\u30c9\u30ed\u30c3\u30d7\u30c0\u30a6\u30f3\u30e1\u30cb\u30e5\u30fc\u304b\u3089 "Switch to this branch" \u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u9078\u629e\u3057\u307e\u3059\u3002'}),"\n",(0,s.jsx)(e.p,{children:"\u30a8\u30c7\u30a3\u30bf\u30fc\u306f\u9078\u629e\u3057\u305f\u30d6\u30e9\u30f3\u30c1\u306b\u73fe\u5728\u306e\u30d6\u30e9\u30f3\u30c1\u3092\u5207\u308a\u66ff\u3048\u3066\u518d\u8aad\u307f\u8fbc\u307f\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"closing-a-branch",children:"\u30d6\u30e9\u30f3\u30c1\u306e\u30af\u30ed\u30fc\u30ba (Close)"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"Close branch",src:i(4980).A+"",width:"2114",height:"1198"})}),"\n",(0,s.jsx)(e.p,{children:"\u30d6\u30e9\u30f3\u30c1\u3067\u306e\u4f5c\u696d\u304c\u5b8c\u4e86\u3057\u305f\u5834\u5408\u3001\u30ea\u30b9\u30c8\u304b\u3089\u524a\u9664\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,s.jsx)(e.p,{children:'\u30d6\u30e9\u30f3\u30c1\u3092\u30af\u30ed\u30fc\u30ba\u3059\u308b\u3059\u308b\u306b\u306f\u3001\u30d0\u30fc\u30b8\u30e7\u30f3\u7ba1\u7406\u30d1\u30cd\u30eb\u3092\u958b\u304d\u3001\u9589\u3058\u305f\u3044\u30d6\u30e9\u30f3\u30c1\u3092\u9078\u629e\u3057\u3001\u30d6\u30e9\u30f3\u30c1\u306e\u30c9\u30ed\u30c3\u30d7\u30c0\u30a6\u30f3\u30e1\u30cb\u30e5\u30fc\u304b\u3089 "Close this branch" \u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u9078\u629e\u3057\u307e\u3059\u3002\u73fe\u5728\u306e\u30d6\u30e9\u30f3\u30c1\u3084\u30e1\u30a4\u30f3\u30d6\u30e9\u30f3\u30c1\u306f\u9589\u3058\u308b\u3053\u3068\u304c\u3067\u304d\u306a\u3044\u306e\u3067\u6ce8\u610f\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u73fe\u5728\u306e\u30d6\u30e9\u30f3\u30c1\u3092\u9589\u3058\u308b\u5834\u5408\u306f\u3001\u307e\u305a\u5225\u306e\u30d6\u30e9\u30f3\u30c1\u306b\u5207\u308a\u66ff\u3048\u3066\u304f\u3060\u3055\u3044\u3002'}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"Close branch dialog",src:i(63515).A+"",width:"2114",height:"1198"})}),"\n",(0,s.jsx)(e.p,{children:"\u30d6\u30e9\u30f3\u30c1\u306e\u30af\u30ed\u30fc\u30ba\u3092\u78ba\u8a8d\u3059\u308b\u3088\u3046\u6c42\u3081\u3089\u308c\u3001\u30af\u30ed\u30fc\u30ba\u524d\u306b\u30c1\u30a7\u30c3\u30af\u30dd\u30a4\u30f3\u30c8\u3092\u4f5c\u6210\u3059\u308b\u30aa\u30d7\u30b7\u30e7\u30f3\u304c\u3042\u308a\u307e\u3059\u3002\u3053\u308c\u306f\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u6709\u52b9\u5316\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u3053\u308c\u3089\u306e\u5909\u66f4\u3092\u7834\u68c4\u3057\u305f\u3044\u5834\u5408\u306f\u3001\u3053\u3053\u3067\u305d\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u306e\u30c1\u30a7\u30c3\u30af\u3092\u5916\u3059\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,s.jsx)(e.admonition,{type:"warning",children:(0,s.jsx)(e.p,{children:"\u3053\u306e\u30c1\u30a7\u30c3\u30af\u30dc\u30c3\u30af\u30b9\u3092\u5916\u3059\u3068\u3001\u6700\u5f8c\u306b\u30c1\u30a7\u30c3\u30af\u30dd\u30a4\u30f3\u30c8\u3092\u4f5c\u6210\u3057\u3066\u304b\u3089\u884c\u3063\u305f\u30d6\u30e9\u30f3\u30c1\u306e\u5909\u66f4\u304c\u3059\u3079\u3066\u5931\u308f\u308c\u307e\u3059\u3002"})}),"\n",(0,s.jsx)(e.p,{children:"\u9589\u3058\u305f\u30d6\u30e9\u30f3\u30c1\u306f\u5f8c\u3067\u518d\u958b\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"deleting-a-branch",children:"\u30d6\u30e9\u30f3\u30c1\u306e\u524a\u9664 (Delete)"}),"\n",(0,s.jsx)(e.p,{children:"\u4ee5\u4e0b\u306e\u6761\u4ef6\u304c\u6e80\u305f\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u3001\u30d6\u30e9\u30f3\u30c1\u3092\u524a\u9664\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u305d\u306e\u30d6\u30e9\u30f3\u30c1\u304c\u5225\u306e\u30d6\u30e9\u30f3\u30c1\u306b\u30de\u30fc\u30b8\u3055\u308c\u3066\u3044\u306a\u3044"}),"\n",(0,s.jsx)(e.li,{children:"\u3053\u306e\u30d6\u30e9\u30f3\u30c1\u304b\u3089\u30d6\u30e9\u30f3\u30c1\u304c\u4f5c\u6210\u3055\u308c\u3066\u3044\u306a\u3044"}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:'\u30d6\u30e9\u30f3\u30c1\u3092\u524a\u9664\u3059\u308b\u306b\u306f\u3001\u30d0\u30fc\u30b8\u30e7\u30f3\u7ba1\u7406\u30d1\u30cd\u30eb\u3092\u958b\u304d\u3001\u524a\u9664\u3059\u308b\u30d6\u30e9\u30f3\u30c1\u3092\u9078\u629e\u3057\u3001\u30d6\u30e9\u30f3\u30c1\u306e\u30c9\u30ed\u30c3\u30d7\u30c0\u30a6\u30f3\u30e1\u30cb\u30e5\u30fc\u3067 "Delete this branch" \u3092\u9078\u629e\u3057\u307e\u3059\u3002'}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"Delete a branch",src:i(40135).A+"",width:"2124",height:"1204"})}),"\n",(0,s.jsx)(e.p,{children:"\u30c0\u30a4\u30a2\u30ed\u30b0\u30dc\u30c3\u30af\u30b9\u306b\u30d6\u30e9\u30f3\u30c1\u540d\u3092\u5165\u529b\u3057\u3066\u3001\u30d6\u30e9\u30f3\u30c1\u306e\u524a\u9664\u3092\u78ba\u8a8d\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u6ce8:\u524a\u9664\u3057\u305f\u30d6\u30e9\u30f3\u30c1\u306f\u5fa9\u5143\u3067\u304d\u307e\u305b\u3093!\u4e0d\u5b89\u306a\u5834\u5408\u306f\u3001\u30d6\u30e9\u30f3\u30c1\u3092\u30af\u30ed\u30fc\u30ba\u3057\u3066\u304f\u3060\u3055\u3044\u3002"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"Delete a branch warning",src:i(67310).A+"",width:"2122",height:"1196"})})]})}function o(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}},63515:(n,e,i)=>{i.d(e,{A:()=>s});const s=i.p+"assets/images/close-branch-dialog-1678eceb6d520e213bfbac18085d08de.png"},4980:(n,e,i)=>{i.d(e,{A:()=>s});const s=i.p+"assets/images/close-branch-bc616e387ad1ff1842c534328da6b361.png"},67310:(n,e,i)=>{i.d(e,{A:()=>s});const s=i.p+"assets/images/delete-branch-dialog-2674e70ffef952bb1d0df9c0c94fe013.png"},40135:(n,e,i)=>{i.d(e,{A:()=>s});const s=i.p+"assets/images/delete-branch-82be05fdfd0456f05d988681b31f4d59.png"},15581:(n,e,i)=>{i.d(e,{A:()=>s});const s=i.p+"assets/images/favorite-branch-via-button-8683dabaec6896ffe860955c0f8c9966.gif"},54774:(n,e,i)=>{i.d(e,{A:()=>s});const s=i.p+"assets/images/favorite-branch-via-dropdown-da46379b20ec44080522eac4b20019c6.gif"},71349:(n,e,i)=>{i.d(e,{A:()=>s});const s=i.p+"assets/images/filter-branches-028194229115c641dcdf01555e6aa517.gif"},85105:(n,e,i)=>{i.d(e,{A:()=>s});const s=i.p+"assets/images/new-branch-dialog-825ccd6d322c3ba8243ad892854a6595.png"},13814:(n,e,i)=>{i.d(e,{A:()=>s});const s=i.p+"assets/images/new-branch-9ba8f4538c5ab8c13345c5e1eb35ac50.png"},23295:(n,e,i)=>{i.d(e,{A:()=>s});const s=i.p+"assets/images/search-for-a-branch-3f0e4550b3d46c0fa64e70313172ff36.gif"},61848:(n,e,i)=>{i.d(e,{A:()=>s});const s=i.p+"assets/images/switch-branch-0a0461dd663bf19f898abd2b301eb1b9.png"},28453:(n,e,i)=>{i.d(e,{R:()=>c,x:()=>t});var s=i(96540);const r={},a=s.createContext(r);function c(n){const e=s.useContext(a);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function t(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:c(n.components),s.createElement(a.Provider,{value:e},n.children)}}}]);