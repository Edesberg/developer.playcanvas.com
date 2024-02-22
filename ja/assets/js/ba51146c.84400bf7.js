"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[2068],{81347:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>m,frontMatter:()=>l,metadata:()=>r,toc:()=>p});var i=t(74848),s=t(28453);const l={title:"\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8",sidebar_position:12},a=void 0,r={id:"user-manual/templates/index",title:"\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8",description:"\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8(\u307e\u305f\u306f\u30d7\u30ec\u30cf\u30d6)\u306f\u518d\u5229\u7528\u53ef\u80fd\u306a\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u3092\u4f5c\u6210\u3059\u308b\u3053\u3068\u306b\u3088\u308a\u3001\u958b\u767a\u3092\u8fc5\u901f\u5316\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u30b7\u30fc\u30f3\u5185\u306b\u8907\u6570\u306e\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306e\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u914d\u7f6e\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u3001Template\u30a2\u30bb\u30c3\u30c8\u306b\u5909\u66f4\u3092\u52a0\u3048\u3066\u305d\u308c\u3092\u9069\u7528\u3059\u308b\u3068\u3001\u305d\u306e\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306e\u3059\u3079\u3066\u306e\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u304c\u66f4\u65b0\u3055\u308c\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/user-manual/templates/index.md",sourceDirName:"user-manual/templates",slug:"/user-manual/templates/",permalink:"/ja/user-manual/templates/",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/templates/index.md",tags:[],version:"current",sidebarPosition:12,frontMatter:{title:"\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8",sidebar_position:12},sidebar:"userManualSidebar",previous:{title:"\u79fb\u884c\u30ac\u30a4\u30c9",permalink:"/ja/user-manual/scripting/migration-guide"},next:{title:"Override Diff View",permalink:"/ja/user-manual/templates/diff"}},d={},p=[{value:"\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306e\u4f5c\u6210",id:"creating-templates",level:2},{value:"\u30b7\u30fc\u30f3\u306b\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306e\u8ffd\u52a0",id:"adding-templates-in-your-scene",level:2},{value:"\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306e\u66f4\u65b0",id:"updating-templates",level:2},{value:"\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306e\u30aa\u30fc\u30d0\u30fc\u30e9\u30a4\u30c9",id:"template-overrides",level:3},{value:"\u30aa\u30fc\u30d0\u30fc\u30e9\u30a4\u30c9\u306e\u9069\u7528",id:"applying-overrides",level:3},{value:"\u30aa\u30fc\u30d0\u30fc\u30e9\u30a4\u30c9\u306e\u5143\u306b\u623b\u3059",id:"reverting-overrides",level:3},{value:"\u30aa\u30fc\u30d0\u30fc\u30e9\u30a4\u30c9\u306e\u8a73\u7d30",id:"more-details-on-overrides",level:3},{value:"\u5b9f\u884c\u6642\u306b\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u5316",id:"instantiating-at-runtime",level:2},{value:"Template\u30a2\u30bb\u30c3\u30c8\u3092\u3044\u3064\u30ed\u30fc\u30c9\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u304b?",id:"when-do-i-need-to-load-template-assets",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8(\u307e\u305f\u306f\u30d7\u30ec\u30cf\u30d6)\u306f\u518d\u5229\u7528\u53ef\u80fd\u306a\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u3092\u4f5c\u6210\u3059\u308b\u3053\u3068\u306b\u3088\u308a\u3001\u958b\u767a\u3092\u8fc5\u901f\u5316\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u30b7\u30fc\u30f3\u5185\u306b\u8907\u6570\u306e\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306e\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u914d\u7f6e\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u3001Template\u30a2\u30bb\u30c3\u30c8\u306b\u5909\u66f4\u3092\u52a0\u3048\u3066\u305d\u308c\u3092\u9069\u7528\u3059\u308b\u3068\u3001\u305d\u306e\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306e\u3059\u3079\u3066\u306e\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u304c\u66f4\u65b0\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,i.jsx)("div",{className:"iframe-container",children:(0,i.jsx)("iframe",{loading:"lazy",width:"560",height:"315",src:"https://www.youtube.com/embed/2HV8Ib6wYRc",title:"Templates Overview",allowfullscreen:!0})}),"\n",(0,i.jsx)(n.h2,{id:"creating-templates",children:"\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306e\u4f5c\u6210"}),"\n",(0,i.jsx)(n.p,{children:"Template\u30a2\u30bb\u30c3\u30c8\u3092\u4f5c\u6210\u3059\u308b\u306b\u306f\u3001\u30b7\u30fc\u30f3\u5185\u306e\u4efb\u610f\u306e\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u3092\u53f3\u30af\u30ea\u30c3\u30af\u3057\u3066\u300cTemplate \u2192 New Template\u300d\u3092\u9078\u629e\u3057\u307e\u3059\u3002\u3053\u308c\u306b\u3088\u308a\u3001\u65b0\u3057\u3044Template\u30a2\u30bb\u30c3\u30c8\u304c\u4f5c\u6210\u3055\u308c\u3001\u30a2\u30bb\u30c3\u30c8\u30fb\u30d1\u30cd\u30eb\u3067\u73fe\u5728\u9078\u629e\u3055\u308c\u305f\u30d5\u30a9\u30eb\u30c0\u306b\u8ffd\u52a0\u3055\u308c\u307e\u3059\u3002\u305d\u3057\u3066\u3001\u53f3\u30af\u30ea\u30c3\u30af\u3057\u305f\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306f\u305d\u306e\u65b0\u3057\u3044Template\u30a2\u30bb\u30c3\u30c8\u306e\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306b\u306a\u308a\u307e\u3059\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"adding-templates-in-your-scene",children:"\u30b7\u30fc\u30f3\u306b\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306e\u8ffd\u52a0"}),"\n",(0,i.jsx)(n.p,{children:"Template\u30a2\u30bb\u30c3\u30c8\u3092\u30b7\u30fc\u30f3\u306b\u30c9\u30e9\u30c3\u30b0&\u30c9\u30ed\u30c3\u30d7\u3059\u308b\u304b\u3001\u30d2\u30a8\u30e9\u30eb\u30ad\u30fc\u5185\u306e\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306e\u4e0b\u306b\u53f3\u30af\u30ea\u30c3\u30af\u3057\u3066\u3001\u300cTemplate \u2192 Add Instance\u300d\u3092\u9078\u629e\u3057\u307e\u3059\u3002\u305d\u308c\u304b\u3089\u3001Template\u30a2\u30bb\u30c3\u30c8\u3092\u9078\u629e\u3059\u308b\u3053\u3068\u306b\u3088\u3063\u3066\u3001\u30af\u30ea\u30c3\u30af\u3055\u308c\u305f\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306e\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u304c\u4f5c\u6210\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u304c\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306e\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3067\u3042\u308b\u3068\u304d\u3001\u30d2\u30a8\u30e9\u30eb\u30ad\u30fc\u306b\u306f\u5c11\u3057\u7570\u306a\u308b\u5916\u89b3\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Template Instance",src:t(13470).A+"",width:"261",height:"317"})}),"\n",(0,i.jsx)(n.p,{children:"\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306e\u30eb\u30fc\u30c8\u30fb\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u3068\u305d\u306e\u5b50\u4f9b\u305f\u3061\u306f\u3001\u540c\u3058\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306e\u4e00\u90e8\u3067\u3042\u308b\u3053\u3068\u3092\u793a\u3059\u7570\u306a\u308b\u30a2\u30a4\u30b3\u30f3\u3092\u6301\u3063\u3066\u3044\u307e\u3059\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306e\u30eb\u30fc\u30c8\u3092\u9078\u629e\u3059\u308b\u3068\u3001\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u30a4\u30f3\u30b9\u30da\u30af\u30bf\u30fc\u306b\u6b21\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u304c\u8868\u793a\u3055\u308c\u308b\u3053\u3068\u306b\u6ce8\u610f\u3057\u3066\u304f\u3060\u3055\u3044\u3002"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Template Inspector",src:t(36572).A+"",width:"327",height:"376"})}),"\n",(0,i.jsx)(n.h2,{id:"updating-templates",children:"\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306e\u66f4\u65b0"}),"\n",(0,i.jsx)(n.p,{children:"Template\u30a2\u30bb\u30c3\u30c8\u306b\u5909\u66f4\u3092\u52a0\u3048\u308b\u306b\u306f\u3001\u307e\u305a\u30a8\u30c7\u30a3\u30bf\u306b\u305d\u306e\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u8ffd\u52a0\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u6b21\u306b\u3001\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u81ea\u7531\u306b\u5909\u66f4\u3057\u3001\u6700\u5f8c\u306b\u5909\u66f4\u5185\u5bb9\u3092Template\u30a2\u30bb\u30c3\u30c8\u306b\u9069\u7528\u3057\u307e\u3059\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"template-overrides",children:"\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306e\u30aa\u30fc\u30d0\u30fc\u30e9\u30a4\u30c9"}),"\n",(0,i.jsx)(n.p,{children:"\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306e\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u307e\u305f\u306f\u305d\u306e\u5b50\u4f9b\u306b\u5909\u66f4\u3092\u52a0\u3048\u308b\u3068\u3001\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u30fb\u30aa\u30fc\u30d0\u30fc\u30e9\u30a4\u30c9\u304c\u751f\u6210\u3055\u308c\u307e\u3059\u3002\u3044\u304f\u3064\u304b\u306e\u7a2e\u985e\u306e\u30aa\u30fc\u30d0\u30fc\u30e9\u30a4\u30c9\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"field override"}),": \u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u307e\u305f\u306f\u305d\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u30d5\u30a3\u30fc\u30eb\u30c9\u306e\u5024\u304c\u3001Template\u30a2\u30bb\u30c3\u30c8\u5185\u306e\u305d\u308c\u3068\u7570\u306a\u308b\u30aa\u30fc\u30d0\u30fc\u30e9\u30a4\u30c9\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"New Entity override"}),": \u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306e\u5b50\u3068\u3057\u3066\u8ffd\u52a0\u3055\u308c\u305fEntity\u3067\u3001Template\u30a2\u30bb\u30c3\u30c8\u306b\u5b58\u5728\u3057\u306a\u3044\u3082\u306e\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"Deleted Entity override"}),": \u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u304b\u3089\u524a\u9664\u3055\u308c\u305f\u5b50Entity\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u30aa\u30fc\u30d0\u30fc\u30e9\u30a4\u30c9\u3092Template\u30a2\u30bb\u30c3\u30c8\u306b\u9069\u7528\u3059\u308b\u3068\u3001\u305d\u308c\u3089\u306f\u30aa\u30fc\u30d0\u30fc\u30e9\u30a4\u30c9\u3067\u306f\u306a\u304f\u3001Template\u30a2\u30bb\u30c3\u30c8\u306e\u4e00\u90e8\u306b\u306a\u308a\u307e\u3059\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306e\u30eb\u30fc\u30c8\u3092\u9078\u629e\u3057\u3001\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u30a4\u30f3\u30b9\u30da\u30af\u30bf\u30fc\u3092\u78ba\u8a8d\u3059\u308b\u3053\u3068\u306b\u3088\u3063\u3066\u3001\u30aa\u30fc\u30d0\u30fc\u30e9\u30a4\u30c9\u306e\u6982\u8981\u3092\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Overrides",src:t(53719).A+"",width:"312",height:"417"})}),"\n",(0,i.jsxs)(n.p,{children:["\u307e\u305f\u3001\u30aa\u30fc\u30d0\u30fc\u30e9\u30a4\u30c9\u3055\u308c\u305f\u30d5\u30a3\u30fc\u30eb\u30c9\u306e\u30e9\u30d9\u30eb\u306e\u8272\u304c\u7570\u306a\u308b\u3053\u3068\u306b\u3082\u6ce8\u76ee\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u30aa\u30fc\u30d0\u30fc\u30e9\u30a4\u30c9\u306e\u8a73\u7d30\u306a\u30ea\u30b9\u30c8\u3092\u8868\u793a\u3059\u308b\u306b\u306f\u3001",(0,i.jsx)(n.a,{href:"/user-manual/templates/diff",children:"Overrides Diff View"}),"\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u30aa\u30fc\u30d0\u30fc\u30e9\u30a4\u30c9\u3055\u308c\u305f\u30d5\u30a3\u30fc\u30eb\u30c9\u306e\u30ab\u30e9\u30fc\u30fb\u30e9\u30d9\u30eb\u306b\u30de\u30a6\u30b9\u3092\u91cd\u306d\u308b\u3068\u3001\u305d\u306e\u30aa\u30fc\u30d0\u30fc\u30e9\u30a4\u30c9\u306b\u95a2\u3059\u308b\u8a73\u7d30\u3092\u8868\u793a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Override Hover",src:t(87090).A+"",width:"746",height:"170"})}),"\n",(0,i.jsx)(n.h3,{id:"applying-overrides",children:"\u30aa\u30fc\u30d0\u30fc\u30e9\u30a4\u30c9\u306e\u9069\u7528"}),"\n",(0,i.jsx)(n.p,{children:"\u30aa\u30fc\u30d0\u30fc\u30e9\u30a4\u30c9\u3092\u9069\u7528\u3059\u308b\u306b\u306f\u3001\u30aa\u30fc\u30d0\u30fc\u30e9\u30a4\u30c9\u3055\u308c\u305f\u30d5\u30a3\u30fc\u30eb\u30c9\u306e\u30c4\u30fc\u30eb\u30c1\u30c3\u30d7\u306b\u8868\u793a\u3055\u308c\u308bAPPLY\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u8907\u6570\u306e\u30aa\u30fc\u30d0\u30fc\u30e9\u30a4\u30c9\u3092\u9069\u7528\u3059\u308b\u306b\u306f\u3001\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306e\u30eb\u30fc\u30c8\u3092\u9078\u629e\u3057\u3001\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u30a4\u30f3\u30b9\u30da\u30af\u30bf\u30fc\u3067Apply All\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002\u307e\u305f\u3001\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306e\u30eb\u30fc\u30c8\u3092\u53f3\u30af\u30ea\u30c3\u30af\u3057\u3001Template \u2192 Apply To Template\u3092\u9078\u629e\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["\u307e\u305f\u3001",(0,i.jsx)(n.a,{href:"/user-manual/templates/diff",children:"Overrides Diff View"}),"\u3092\u958b\u3044\u3066\u305d\u3053\u3067\u30aa\u30fc\u30d0\u30fc\u30e9\u30a4\u30c9\u3092\u9069\u7528\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"Template\u30a2\u30bb\u30c3\u30c8\u306b\u9069\u7528\u3059\u308b\u30aa\u30fc\u30d0\u30fc\u30e9\u30a4\u30c9\u306f\u3001\u305d\u306eTemplate\u30a2\u30bb\u30c3\u30c8\u306e\u4ed6\u306e\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306b\u3082\u53cd\u6620\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"\u73fe\u6642\u70b9\u3067\u306f\u3001Template\u30a2\u30bb\u30c3\u30c8\u306b\u30aa\u30fc\u30d0\u30fc\u30e9\u30a4\u30c9\u3092\u9069\u7528\u3059\u308b\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u53d6\u308a\u6d88\u3059\u3053\u3068\u306f\u3067\u304d\u307e\u305b\u3093\u3002"})}),"\n",(0,i.jsx)(n.h3,{id:"reverting-overrides",children:"\u30aa\u30fc\u30d0\u30fc\u30e9\u30a4\u30c9\u306e\u5143\u306b\u623b\u3059"}),"\n",(0,i.jsx)(n.p,{children:"\u7279\u5b9a\u306e\u30aa\u30fc\u30d0\u30fc\u30e9\u30a4\u30c9\u3092\u5143\u306b\u623b\u3059\u306b\u306f\u3001\u30aa\u30fc\u30d0\u30fc\u30e9\u30a4\u30c9\u3055\u308c\u305f\u30d5\u30a3\u30fc\u30eb\u30c9\u306e\u30c4\u30fc\u30eb\u30c1\u30c3\u30d7\u306b\u8868\u793a\u3055\u308c\u308bREVERT\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u3059\u3079\u3066\u306e\u30aa\u30fc\u30d0\u30fc\u30e9\u30a4\u30c9\u3092\u5143\u306b\u623b\u3059\u306b\u306f\u3001\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306e\u30eb\u30fc\u30c8\u3092\u9078\u629e\u3057\u3001\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u30a4\u30f3\u30b9\u30da\u30af\u30bf\u30fc\u3067Revert All\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["\u307e\u305f\u3001",(0,i.jsx)(n.a,{href:"/user-manual/templates/diff",children:"Overrides Diff View"}),"\u3092\u958b\u3044\u3066\u3001\u305d\u3053\u304b\u3089\u30aa\u30fc\u30d0\u30fc\u30e9\u30a4\u30c9\u3092\u5143\u306b\u623b\u3059\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"more-details-on-overrides",children:"\u30aa\u30fc\u30d0\u30fc\u30e9\u30a4\u30c9\u306e\u8a73\u7d30"}),"\n",(0,i.jsx)(n.p,{children:"\u30aa\u30fc\u30d0\u30fc\u30e9\u30a4\u30c9\u3092\u4f5c\u6210\u3059\u308b\u3068\u3001\u305d\u308c\u3092\u30aa\u30fc\u30d0\u30fc\u30e9\u30a4\u30c9\u3059\u308b\u30d7\u30ed\u30d1\u30c6\u30a3\u304cTemplate\u30a2\u30bb\u30c3\u30c8\u304b\u3089\u66f4\u65b0\u3055\u308c\u306a\u3044\u3088\u3046\u306b\u4fdd\u8b77\u3055\u308c\u307e\u3059\u3002\u305f\u3068\u3048\u3070\u3001\u6b21\u306e\u3088\u3046\u306a\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u304c\u3042\u308b\u3068\u3057\u307e\u3059\u3002"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Template Instance",src:t(13470).A+"",width:"261",height:"317"})}),"\n",(0,i.jsx)(n.p,{children:"Tree1/Sphere\u306e\u4f4d\u7f6e\u3092\u5909\u66f4\u3057\u307e\u3059\u3002\u3053\u308c\u306b\u3088\u308a\u3001Sphere\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306e\u4f4d\u7f6e\u306b\u30aa\u30fc\u30d0\u30fc\u30e9\u30a4\u30c9\u304c\u4f5c\u6210\u3055\u308c\u307e\u3059\u3002\u6b21\u306b\u3001\u5225\u306eTemplate\u30a2\u30bb\u30c3\u30c8\u306e\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u4f5c\u6210\u3057\u3001Sphere\u306e\u4f4d\u7f6e\u3092\u5225\u306e\u3082\u306e\u306b\u5909\u66f4\u3057\u307e\u3059\u3002\u7b2c2\u306e\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u304b\u3089\u30aa\u30fc\u30d0\u30fc\u30e9\u30a4\u30c9\u3092\u9069\u7528\u3059\u308b\u3068\u3001\u7b2c1\u306e\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306e\u4f4d\u7f6e\u304c\u66f4\u65b0\u3055\u308c\u306a\u3044\u305f\u3081\u3001\u30aa\u30fc\u30d0\u30fc\u30e9\u30a4\u30c9\u3055\u308c\u3066\u4fdd\u8b77\u3055\u308c\u307e\u3059\u3002Sphere\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306e\u4f4d\u7f6e\u306e\u5909\u66f4\u3092\u7b2c1\u306e\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306b\u53cd\u6620\u3055\u305b\u308b\u306b\u306f\u3001\u307e\u305a\u30aa\u30fc\u30d0\u30fc\u30e9\u30a4\u30c9\u3092\u5143\u306b\u623b\u3059\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"instantiating-at-runtime",children:"\u5b9f\u884c\u6642\u306b\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u5316"}),"\n",(0,i.jsx)(n.p,{children:"\u6b21\u306e\u3088\u3046\u306b\u3001\u5b9f\u884c\u6642\u306bTemplate\u30a2\u30bb\u30c3\u30c8\u3092\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u5316\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"var templateAsset = this.app.assets.get(templateAssetId);\nvar instance = templateAsset.resource.instantiate();\nthis.app.root.addChild(instance);\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u30b9\u30af\u30ea\u30d7\u30c8\u5c5e\u6027\u3092\u4f7f\u7528\u3057\u3066\u3001ID\u3067\u691c\u7d22\u3059\u308b\u306e\u3067\u306f\u306a\u304f\u3001\u30b9\u30af\u30ea\u30d7\u30c8\u306bTemplate Assets\u3092\u6e21\u3059\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"when-do-i-need-to-load-template-assets",children:"Template\u30a2\u30bb\u30c3\u30c8\u3092\u3044\u3064\u30ed\u30fc\u30c9\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u304b?"}),"\n",(0,i.jsx)(n.p,{children:"\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306f\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306e\u968e\u5c64\u3068\u30c7\u30fc\u30bf\u3092\u4fdd\u5b58\u3057\u307e\u3059\u3002\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u304c\u30a8\u30c7\u30a3\u30bf\u306e\u30b7\u30fc\u30f3\u306b\u8ffd\u52a0\u3055\u308c\u308b\u3068\u3001\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306e\u968e\u5c64\u3068\u30c7\u30fc\u30bf\u304c\u30b7\u30fc\u30f3\u30fb\u30c7\u30fc\u30bf\u306b\u542b\u307e\u308c\u307e\u3059\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u5b9f\u884c\u6642\u306b\u3001\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306f\u30a2\u30bb\u30c3\u30c8\u306b\u30ea\u30f3\u30af\u3055\u308c\u3066\u3044\u306a\u3044\u305f\u3081\u3001\u30a2\u30bb\u30c3\u30c8\u306e\u30d7\u30ea\u30ed\u30fc\u30c9/\u30ed\u30fc\u30c9\u3092\u884c\u308f\u306a\u3044\u3053\u3068\u306b\u3088\u308a\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u30b5\u30a4\u30ba\u3092\u6e1b\u3089\u3059\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306e\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u5b9f\u884c\u6642\u306b\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u5316\u3059\u308b\u5834\u5408\u306b\u306e\u307f\u3001Template\u30a2\u30bb\u30c3\u30c8\u3092\u30ed\u30fc\u30c9\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},13470:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/hierarchy-18bcedca1a6688550e4b639ba965aeb1.png"},36572:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/inspector-ac9c202292ef10064323d0c646106ba3.png"},87090:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/override-hover-a472eda47b593cf9d523111159275833.png"},53719:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/override-7b5e2f4d08f441bb59477fd2a37d4277.png"},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>r});var i=t(96540);const s={},l=i.createContext(s);function a(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);