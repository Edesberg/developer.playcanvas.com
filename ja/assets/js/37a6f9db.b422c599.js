"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[4081],{95169:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var s=r(74848),t=r(28453);const a={title:"\u30d6\u30e9\u30f3\u30c1\u3092\u5229\u7528\u3057\u305f\u30ef\u30fc\u30af\u30d5\u30ed\u30fc",sidebar_position:5},o=void 0,c={id:"user-manual/version-control/branch-workflows",title:"\u30d6\u30e9\u30f3\u30c1\u3092\u5229\u7528\u3057\u305f\u30ef\u30fc\u30af\u30d5\u30ed\u30fc",description:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u30cb\u30fc\u30ba\u306b\u5408\u308f\u305b\u3066\u30d6\u30e9\u30f3\u30c1\u3092\u4f7f\u7528\u3059\u308b\u65b9\u6cd5\u306f\u591a\u7a2e\u591a\u69d8\u3067\u3059\u3002\u4ee5\u4e0b\u306b\u3001\u3055\u307e\u3056\u307e\u306a\u30bf\u30a4\u30d7\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3067\u4e00\u822c\u7684\u306b\u4f7f\u7528\u3055\u308c\u308b\u3044\u304f\u3064\u304b\u306e\u65b9\u6cd5\u3092\u8aac\u660e\u3057\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/user-manual/version-control/branch-workflows.md",sourceDirName:"user-manual/version-control",slug:"/user-manual/version-control/branch-workflows",permalink:"/ja/user-manual/version-control/branch-workflows",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/version-control/branch-workflows.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"\u30d6\u30e9\u30f3\u30c1\u3092\u5229\u7528\u3057\u305f\u30ef\u30fc\u30af\u30d5\u30ed\u30fc",sidebar_position:5},sidebar:"userManualSidebar",previous:{title:"View Changes",permalink:"/ja/user-manual/version-control/changes"},next:{title:"Graph View",permalink:"/ja/user-manual/version-control/graph-view"}},i={},l=[{value:"\u6a5f\u80fd\u30d9\u30fc\u30b9 (Feature) \u30d6\u30e9\u30f3\u30c1",id:"\u6a5f\u80fd\u30d9\u30fc\u30b9-feature-\u30d6\u30e9\u30f3\u30c1",level:2},{value:"\u30ea\u30ea\u30fc\u30b9 (Release) \u30d6\u30e9\u30f3\u30c1",id:"\u30ea\u30ea\u30fc\u30b9-release-\u30d6\u30e9\u30f3\u30c1",level:2},{value:"\u7d99\u7d9a\u7684\u30c7\u30ea\u30d0\u30ea\u30fc (CD)",id:"\u7d99\u7d9a\u7684\u30c7\u30ea\u30d0\u30ea\u30fc-cd",level:2}];function d(e){const n={h2:"h2",img:"img",p:"p",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u30cb\u30fc\u30ba\u306b\u5408\u308f\u305b\u3066\u30d6\u30e9\u30f3\u30c1\u3092\u4f7f\u7528\u3059\u308b\u65b9\u6cd5\u306f\u591a\u7a2e\u591a\u69d8\u3067\u3059\u3002\u4ee5\u4e0b\u306b\u3001\u3055\u307e\u3056\u307e\u306a\u30bf\u30a4\u30d7\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3067\u4e00\u822c\u7684\u306b\u4f7f\u7528\u3055\u308c\u308b\u3044\u304f\u3064\u304b\u306e\u65b9\u6cd5\u3092\u8aac\u660e\u3057\u307e\u3059\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u6a5f\u80fd\u30d9\u30fc\u30b9-feature-\u30d6\u30e9\u30f3\u30c1",children:"\u6a5f\u80fd\u30d9\u30fc\u30b9 (Feature) \u30d6\u30e9\u30f3\u30c1"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Feature branches",src:r(18585).A+"",width:"1700",height:"1068"})}),"\n",(0,s.jsx)(n.p,{children:"\u6a5f\u80fd\u30d9\u30fc\u30b9\u306e\u30ef\u30fc\u30af\u30d5\u30ed\u30fc\u3067\u306f\u3001\u958b\u767a\u4e2d\u306e\u5404\u6a5f\u80fd\u306f\u30e1\u30a4\u30f3\u30d6\u30e9\u30f3\u30c1\u304b\u3089\u65b0\u3057\u3044\u30d6\u30e9\u30f3\u30c1\u3092\u4f5c\u6210\u3057\u3066\u958b\u59cb\u3057\u307e\u3059\u3002\u305d\u3057\u3066\u3001\u6a5f\u80fd\u306e\u958b\u767a\u4f5c\u696d\u306f\u3042\u306a\u305f\u306e\u6a5f\u80fd\u30d6\u30e9\u30f3\u30c1\u3067\u884c\u3044\u307e\u3059\u3002\u6a5f\u80fd\u304c\u5b8c\u6210\u3057\u305f\u3089\u3001\u30e1\u30a4\u30f3\u30d6\u30e9\u30f3\u30c1\u304b\u3089\u306e\u65b0\u3057\u3044\u5909\u66f4\u3092\u3042\u306a\u305f\u306e\u30d6\u30e9\u30f3\u30c1\u306b\u30de\u30fc\u30b8\u3057\u307e\u3059\u3002\u30de\u30b9\u30bf\u30fc\u304b\u3089\u306e\u5909\u66f4\u304c\u3042\u306a\u305f\u306e\u6a5f\u80fd\u306b\u5f71\u97ff\u3092\u53ca\u307c\u3057\u3066\u3044\u306a\u3044\u3053\u3068\u3092\u6700\u7d42\u7684\u306b\u78ba\u8a8d\u3057\u3001\u305d\u306e\u5f8c\u3042\u306a\u305f\u306e\u6a5f\u80fd\u30d6\u30e9\u30f3\u30c1\u3092\u30e1\u30a4\u30f3\u30d6\u30e9\u30f3\u30c1\u306b\u30de\u30fc\u30b8\u3057\u307e\u3059\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u30ea\u30ea\u30fc\u30b9-release-\u30d6\u30e9\u30f3\u30c1",children:"\u30ea\u30ea\u30fc\u30b9 (Release) \u30d6\u30e9\u30f3\u30c1"}),"\n",(0,s.jsx)(n.p,{children:"\u88fd\u54c1\u30b5\u30a4\u30af\u30eb\u304c\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u756a\u53f7\u4ed8\u304d\u30d0\u30fc\u30b8\u30e7\u30f3\u3092\u51fa\u8377\u3059\u308b\u6a5f\u80fd\u3092\u6301\u3064\u5834\u5408\u3001\u5404\u30d0\u30fc\u30b8\u30e7\u30f3\u306b\u5bfe\u3057\u3066\u9577\u671f\u9593\u306e\u30c6\u30b9\u30c8\u304c\u5fc5\u8981\u306a\u5834\u5408\u306a\u3069\u306f\u3001\u30ea\u30ea\u30fc\u30b9\u30d6\u30e9\u30f3\u30c1\u30ef\u30fc\u30af\u30d5\u30ed\u30fc\u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u3092\u9078\u629e\u3059\u308b\u304b\u3082\u3057\u308c\u307e\u305b\u3093\u3002"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Release branches",src:r(3926).A+"",width:"1700",height:"958"})}),"\n",(0,s.jsx)(n.p,{children:"\u3053\u306e\u30ef\u30fc\u30af\u30d5\u30ed\u30fc\u3067\u306f\u3001\u65b0\u3057\u3044\u6a5f\u80fd\u306f\u30e1\u30a4\u30f3\u30d6\u30e9\u30f3\u30c1\u306b\u30de\u30fc\u30b8\u3055\u308c\u3001\u30d0\u30fc\u30b8\u30e7\u30f3\u3092\u30ea\u30ea\u30fc\u30b9\u3059\u308b\u6e96\u5099\u304c\u3067\u304d\u308b\u305f\u3073\u306b\u3001\u30ea\u30ea\u30fc\u30b9\u3057\u3066\u3044\u308b\u30d0\u30fc\u30b8\u30e7\u30f3\u306e\u540d\u524d\u3092\u4ed8\u3051\u305f\u65b0\u3057\u3044\u30d6\u30e9\u30f3\u30c1\u3092\u53d6\u308a\u307e\u3059\u3002\u3053\u306e\u30ea\u30ea\u30fc\u30b9\u30d6\u30e9\u30f3\u30c1\u304b\u3089\u30d3\u30eb\u30c9\u304c\u516c\u958b\u3055\u308c\u3001\u30ea\u30ea\u30fc\u30b9\u306b\u5fc5\u8981\u306a\u4fee\u6b63\u306f\u30ea\u30ea\u30fc\u30b9\u30d6\u30e9\u30f3\u30c1\u306b\u8ffd\u52a0\u3055\u308c\u307e\u3059\u3002\u30ea\u30ea\u30fc\u30b9\u304c\u6e96\u5099\u3067\u304d\u305f\u3089\u3001\u4fee\u6b63\u3092\u30de\u30b9\u30bf\u30fc\u306b\u623b\u3057\u3066\u30de\u30fc\u30b8\u3057\u3001\u6b21\u306e\u30ea\u30ea\u30fc\u30b9\u306e\u958b\u767a\u3092\u7d9a\u3051\u307e\u3059\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u7d99\u7d9a\u7684\u30c7\u30ea\u30d0\u30ea\u30fc-cd",children:"\u7d99\u7d9a\u7684\u30c7\u30ea\u30d0\u30ea\u30fc (CD)"}),"\n",(0,s.jsx)(n.p,{children:"\u3042\u306a\u305f\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304c\u9577\u671f\u9593\u306b\u308f\u305f\u3063\u3066\u66f4\u65b0\u3055\u308c\u308b\u88fd\u54c1\u3067\u3001\u4f8b\u3048\u3070\u3001\u6bce\u9031\u65b0\u3057\u3044\u30ea\u30ea\u30fc\u30b9\u304c\u3042\u308b\u5834\u5408\u306a\u3069\u3001\u7d99\u7d9a\u7684\u30c7\u30ea\u30d0\u30ea\u30fc\u30ef\u30fc\u30af\u30d5\u30ed\u30fc\u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u3092\u5e0c\u671b\u3059\u308b\u304b\u3082\u3057\u308c\u307e\u305b\u3093\u3002"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Continuous Delivery",src:r(93326).A+"",width:"1700",height:"1644"})}),"\n",(0,s.jsx)(n.p,{children:'\u7d99\u7d9a\u7684\u30c7\u30ea\u30d0\u30ea\u30fc\u3067\u306f\u3001\u5404\u30ea\u30ea\u30fc\u30b9\u306b\u5bfe\u3057\u3066\u30d6\u30e9\u30f3\u30c1\u3092\u6301\u3064\u306e\u3067\u306f\u306a\u304f\u3001\u8907\u6570\u306e\u9577\u671f\u9593\u5b58\u5728\u3059\u308b\u30d6\u30e9\u30f3\u30c1\u304c\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30ea\u30ea\u30fc\u30b9\u6e96\u5099\u306b\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002\u4f8b\u3048\u3070\u3001\u65b0\u3057\u3044\u6a5f\u80fd\u306f\u30e1\u30a4\u30f3\u30d6\u30e9\u30f3\u30c1\u306b\u30de\u30fc\u30b8\u3055\u308c\u3001\u5168\u3066\u306e\u6a5f\u80fd\u304c\u30de\u30fc\u30b8\u3055\u308c\u308b\u305f\u3073\u306b\u30e1\u30a4\u30f3\u30d6\u30e9\u30f3\u30c1\u306f"staging"(\u30b9\u30c6\u30fc\u30b8\u30f3\u30b0)\u3068\u3044\u3046\u540d\u524d\u306e\u30d6\u30e9\u30f3\u30c1\u306b\u30de\u30fc\u30b8\u3055\u308c\u307e\u3059\u3002\u30b9\u30c6\u30fc\u30b8\u30f3\u30b0\u304b\u3089\u30d3\u30eb\u30c9\u304c\u751f\u6210\u3055\u308c\u3001\u305d\u308c\u304c\u30c6\u30b9\u30c8\u74b0\u5883\u306b\u516c\u958b\u3055\u308c\u3066\u30c6\u30b9\u30c8\u304c\u5b9f\u884c\u3055\u308c\u307e\u3059\u3002\u5fc5\u8981\u306a\u4fee\u6b63\u306f\u30e1\u30a4\u30f3\u30d6\u30e9\u30f3\u30c1\u306b\u65bd\u3055\u308c\u3001\u305d\u306e\u5f8c\u518d\u5ea6\u30b9\u30c6\u30fc\u30b8\u30f3\u30b0\u306b\u30de\u30fc\u30b8\u3055\u308c\u307e\u3059\u3002\u30b9\u30c6\u30fc\u30b8\u30f3\u30b0\u304c\u6e96\u5099\u5b8c\u4e86\u3068\u5224\u65ad\u3055\u308c\u305f\u3089\u3001\u305d\u308c\u306f"prod"(\u30d7\u30ed\u30c0\u30af\u30b7\u30e7\u30f3)\u3068\u547c\u3070\u308c\u308b\u5225\u306e\u30d6\u30e9\u30f3\u30c1\u306b\u30de\u30fc\u30b8\u3055\u308c\u307e\u3059\u3002\u30d7\u30ed\u30c0\u30af\u30b7\u30e7\u30f3\u304b\u3089\u30d3\u30eb\u30c9\u304c\u751f\u6210\u3055\u308c\u3001\u3053\u308c\u304c\u672c\u756a\u74b0\u5883\u306b\u516c\u958b\u3055\u308c\u307e\u3059\u3002'})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},93326:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/continuous-delivery-13259d1b102bd3f8df46b38ca9b7f903.png"},18585:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/feature-branches-c763ad68ec4d62d65c5f142ee0ccd5e9.png"},3926:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/release-branches-2d2dc1c51db146d0439c466df8c95994.png"},28453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>c});var s=r(96540);const t={},a=s.createContext(t);function o(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);