"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[2234],{35231:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var t=r(74848),a=r(28453);const s={title:"\u30e6\u30fc\u30b6\u30fc\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9\u306e\u57fa\u790e",sidebar_position:1},i=void 0,c={id:"user-manual/user-interface/user-interface-basics",title:"\u30e6\u30fc\u30b6\u30fc\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9\u306e\u57fa\u790e",description:"PlayCanvas\u3067\u306f\u30e6\u30fc\u30b6\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u306f2\u3064\u306e\u30a8\u30ec\u30e1\u30f3\u30c8\u304b\u3089\u69cb\u7bc9\u3055\u308c\u3066\u3044\u307e\u3059\u3002Screen\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306f\u3059\u3079\u3066\u306e\u30e6\u30fc\u30b6\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9\u30a8\u30ec\u30e1\u30f3\u30c8\u3092\u542b\u3080\u9818\u57df\u3092\u8a18\u8ff0\u3057\u3001Element\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u6301\u3064\u8907\u6570\u306e\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306f\u30d2\u30a8\u30e9\u30eb\u30ad\u30fc\u306eScreen Entity\u306e\u4e0b\u306b\u6dfb\u4ed8\u3055\u308c\u307e\u3059\u3002Screen\u306f\u3001\u30e6\u30fc\u30b6\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u306e\u9818\u57df\u3068\u305d\u308c\u304c\u3069\u306e\u3088\u3046\u306b\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3055\u308c\u308b\u304b\u3092(2D\u307e\u305f\u306f3D\u4e16\u754c\u3067)\u5b9a\u7fa9\u3057\u307e\u3059\u3002Elements\u306f\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u306e\u30a4\u30e1\u30fc\u30b8 (Image) \u3068\u30c6\u30ad\u30b9\u30c8 (Text)\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u69cb\u6210\u3057\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/user-manual/user-interface/user-interface-basics.md",sourceDirName:"user-manual/user-interface",slug:"/user-manual/user-interface/user-interface-basics",permalink:"/ja/user-manual/user-interface/user-interface-basics",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/user-interface/user-interface-basics.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"\u30e6\u30fc\u30b6\u30fc\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9\u306e\u57fa\u790e",sidebar_position:1},sidebar:"userManualSidebar",previous:{title:"\u30e6\u30fc\u30b6\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9",permalink:"/ja/user-manual/user-interface/"},next:{title:"Screens",permalink:"/ja/user-manual/user-interface/screens"}},l={},u=[{value:"\u30ec\u30a4\u30a2\u30a6\u30c8\u3068\u30dd\u30b8\u30b7\u30e7\u30cb\u30f3\u30b0",id:"\u30ec\u30a4\u30a2\u30a6\u30c8\u3068\u30dd\u30b8\u30b7\u30e7\u30cb\u30f3\u30b0",level:2},{value:"Draw Order",id:"draw-order",level:2},{value:"\u30a8\u30ec\u30e1\u30f3\u30c8\u306e9\u30b9\u30e9\u30a4\u30b9\u5316",id:"\u30a8\u30ec\u30e1\u30f3\u30c8\u306e9\u30b9\u30e9\u30a4\u30b9\u5316",level:2},{value:"Input",id:"input",level:2},{value:"\u30ed\u30fc\u30ab\u30e9\u30a4\u30bc\u30fc\u30b7\u30e7\u30f3 (Localization)",id:"\u30ed\u30fc\u30ab\u30e9\u30a4\u30bc\u30fc\u30b7\u30e7\u30f3-localization",level:2}];function o(e){const n={a:"a",code:"code",h2:"h2",p:"p",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["PlayCanvas\u3067\u306f\u30e6\u30fc\u30b6\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u306f2\u3064\u306e\u30a8\u30ec\u30e1\u30f3\u30c8\u304b\u3089\u69cb\u7bc9\u3055\u308c\u3066\u3044\u307e\u3059\u3002",(0,t.jsx)(n.a,{href:"/user-manual/user-interface/screens",children:"Screen\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"}),"\u306f\u3059\u3079\u3066\u306e\u30e6\u30fc\u30b6\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9\u30a8\u30ec\u30e1\u30f3\u30c8\u3092\u542b\u3080\u9818\u57df\u3092\u8a18\u8ff0\u3057\u3001",(0,t.jsx)(n.a,{href:"/user-manual/user-interface/elements",children:"Element\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"}),"\u3092\u6301\u3064\u8907\u6570\u306e\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306f\u30d2\u30a8\u30e9\u30eb\u30ad\u30fc\u306eScreen Entity\u306e\u4e0b\u306b\u6dfb\u4ed8\u3055\u308c\u307e\u3059\u3002Screen\u306f\u3001\u30e6\u30fc\u30b6\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u306e\u9818\u57df\u3068\u305d\u308c\u304c\u3069\u306e\u3088\u3046\u306b\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3055\u308c\u308b\u304b\u3092(2D\u307e\u305f\u306f3D\u4e16\u754c\u3067)\u5b9a\u7fa9\u3057\u307e\u3059\u3002Elements\u306f\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u306e\u30a4\u30e1\u30fc\u30b8 (Image) \u3068\u30c6\u30ad\u30b9\u30c8 (Text)\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u69cb\u6210\u3057\u307e\u3059\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u30ec\u30a4\u30a2\u30a6\u30c8\u3068\u30dd\u30b8\u30b7\u30e7\u30cb\u30f3\u30b0",children:"\u30ec\u30a4\u30a2\u30a6\u30c8\u3068\u30dd\u30b8\u30b7\u30e7\u30cb\u30f3\u30b0"}),"\n",(0,t.jsxs)(n.p,{children:["Element\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u30b9\u30af\u30ea\u30fc\u30f3\u306e\u4e00\u90e8\u3068\u3057\u3066\u4f7f\u7528\u3059\u308b\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u3068\u901a\u5e38\u306e\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306e\u5927\u304d\u306a\u9055\u3044\u306e1\u3064\u306f\u3001\u305d\u308c\u3089\u304c\u89aa\u306b\u5bfe\u3057\u3066\u914d\u7f6e\u3055\u308c\u308b\u65b9\u6cd5\u3067\u3059\u3002Element\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306b\u306f\u3001\u6700\u7d42\u7684\u306a\u4f4d\u7f6e\u304c\u8a08\u7b97\u3055\u308c\u308b\u65b9\u6cd5\u3092\u5909\u66f4\u3059\u308b\uff12\u3064\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u304c\u3042\u308a\u307e\u3059\u3002",(0,t.jsx)(n.code,{children:"anchor"}),"\u30d7\u30ed\u30d1\u30c6\u30a3\u306f\u5b50\u304c\u89aa\u306b\u5bfe\u3057\u3066\u3069\u306e\u3088\u3046\u306b\u914d\u7f6e\u3055\u308c\u308b\u304b\u3092\u6c7a\u5b9a\u3057\u3001",(0,t.jsx)(n.code,{children:" pivot"}),"\u30d7\u30ed\u30d1\u30c6\u30a3\u306felement\u306e\u4e2d\u5fc3\u70b9\u304c\u3069\u3053\u306b\u3042\u308b\u304b\u3092\u6c7a\u5b9a\u3057\u307e\u3059\u3002\u8a73\u7d30\u306f",(0,t.jsx)(n.a,{href:"/user-manual/user-interface/elements",children:"Element"}),"\u30da\u30fc\u30b8\u3067\u3054\u78ba\u8a8d\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"draw-order",children:"Draw Order"}),"\n",(0,t.jsx)(n.p,{children:"\u30e6\u30fc\u30b6\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9\u306e\u753b\u50cf\u90e8\u5206\u3067\u3042\u308b\u30a4\u30e1\u30fc\u30b8\u30a8\u30ec\u30e1\u30f3\u30c8\u304a\u3088\u3073\u30c6\u30ad\u30b9\u30c8\u30a8\u30ec\u30e1\u30f3\u30c8\u306f\u3001\u968e\u5c64\u5185\u306b\u73fe\u308c\u308b\u9806\u5e8f\u3067\u63cf\u753b\u3055\u308c\u307e\u3059\u3002\u4f8b\u3048\u3070\u3001\u6700\u521d\u306e\u5b50\u304c\u6700\u521d\u306b\u63cf\u753b\u3055\u308c\u3001\u305d\u306e\u5b50\u304c\u6b21\u306b\u63cf\u753b\u3055\u308c\u307e\u3059\u3002\u5f8c\u3067\u63cf\u304b\u308c\u305f\u5b50\u306f\u3001\u5148\u306b\u63cf\u304b\u308c\u305f\u5b50\u306e\u4e0a\u306b\u8868\u793a\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,t.jsxs)(n.p,{children:["\u63cf\u753b\u9806\u5e8f\u3092\u5909\u66f4\u3059\u308b\u306b\u306f\u3001Editor\u968e\u5c64\u3067\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u3092\u4e26\u3079\u66ff\u3048\u308b\u3060\u3051\u3067\u3059\u3002",(0,t.jsx)(n.code,{children:"entity.reparent(...)"}),"\u3092\u547c\u3073\u51fa\u3059\u3053\u3068\u3067\u3001\u30a8\u30ec\u30e1\u30f3\u30c8\u3092\u30d7\u30ed\u30b0\u30e9\u30e0\u3067\u4e26\u3079\u66ff\u3048\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 \u3053\u308c\u306f\u3001Screen\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u5168\u4f53\u3067\u63cf\u753b\u9806\u5e8f\u3092\u5f37\u5236\u7684\u306b\u518d\u8a08\u7b97\u3059\u308b\u3053\u3068\u3092\u610f\u5473\u3057\u307e\u3059\u306e\u3067\u3054\u6ce8\u610f\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u30a8\u30ec\u30e1\u30f3\u30c8\u306e9\u30b9\u30e9\u30a4\u30b9\u5316",children:"\u30a8\u30ec\u30e1\u30f3\u30c8\u306e9\u30b9\u30e9\u30a4\u30b9\u5316"}),"\n",(0,t.jsxs)(n.p,{children:["9\u30b9\u30e9\u30a4\u30b9\uff08\u307e\u305f\u306f9\u30d1\u30c3\u30c1\uff09\u306f\u3001\u30d3\u30c3\u30c8\u30de\u30c3\u30d7\u30b0\u30e9\u30d5\u30a3\u30c3\u30af\u30b9\u304b\u3089\u62e1\u5f35\u53ef\u80fd\u306a\u30e6\u30fc\u30b6\u30fc\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9\u30a8\u30ec\u30e1\u30f3\u30c8\u3092\u4f5c\u6210\u3059\u308b\u305f\u3081\u306e\u30b0\u30e9\u30d5\u30a3\u30ab\u30eb\u306a\u30c6\u30af\u30cb\u30c3\u30af\u3067\u3059\u3002\u30c6\u30af\u30b9\u30c1\u30e3\u30a2\u30c8\u30e9\u30b9\u3068\u30b9\u30d7\u30e9\u30a4\u30c8\u30a2\u30bb\u30c3\u30c8\u3092\u4f7f\u7528\u3057\u30669\u30b9\u30e9\u30a4\u30b9\u3092\u8a2d\u5b9a\u3067\u304d\u307e\u3059\u3002",(0,t.jsx)(n.a,{href:"/user-manual/2D/slicing",children:"\u3053\u3061\u3089"}),"\u3092\u8aad\u3093\u3067\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"input",children:"Input"}),"\n",(0,t.jsxs)(n.p,{children:["UI\u30a8\u30ec\u30e1\u30f3\u30c8\u306e\u5165\u529b\u3092\u51e6\u7406\u3059\u308b\u5225\u306e\u65b9\u6cd5\u304c\u3042\u308a\u307e\u3059\u3002",(0,t.jsx)(n.code,{children:"pc.ElementInput"}),"\u306e\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306f\u3001\u901a\u5e38\u306f",(0,t.jsx)(n.code,{children:" this.app.elementInput"}),"\u3068\u3057\u3066\u30a2\u30af\u30bb\u30b9\u53ef\u80fd\u306aApplication\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3067\u63d0\u4f9b\u3055\u308c\u307e\u3059\u3002\u3053\u308c\u306b\u3088\u308a\u3001element\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u4e0a\u3067\u76f4\u63a5\u5165\u529b\u3092\u30ea\u30c3\u30b9\u30f3\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u4f8b\uff1a",(0,t.jsx)(n.code,{children:"this.entity.element.on('click', ...)"}),"\u3002\u8a73\u7d30\u306f",(0,t.jsx)(n.a,{href:"/user-manual/user-interface/input",children:"Input"}),"\u30da\u30fc\u30b8\u3067\u3054\u78ba\u8a8d\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u30ed\u30fc\u30ab\u30e9\u30a4\u30bc\u30fc\u30b7\u30e7\u30f3-localization",children:"\u30ed\u30fc\u30ab\u30e9\u30a4\u30bc\u30fc\u30b7\u30e7\u30f3 (Localization)"}),"\n",(0,t.jsxs)(n.p,{children:["PlayCanvas\u306b\u306f\u3001\u30ed\u30fc\u30ab\u30e9\u30a4\u30ba\u3055\u308c\u305fText Elements\u3092\u30b5\u30dd\u30fc\u30c8\u3059\u308b\u7d44\u307f\u8fbc\u307f\u306e\u30ed\u30fc\u30ab\u30e9\u30a4\u30ba\u30b7\u30b9\u30c6\u30e0\u304c\u3042\u308a\u307e\u3059\u3002",(0,t.jsx)(n.a,{href:"/user-manual/user-interface/localization",children:"\u3053\u3061\u3089"}),"\u3092\u3054\u89a7\u304f\u3060\u3055\u3044\u3002"]})]})}function d(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>c});var t=r(96540);const a={},s=t.createContext(a);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);