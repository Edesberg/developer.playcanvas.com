"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[1733],{98245:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>o,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var t=s(85893),r=s(11151);const a={title:"\u30a2\u30bb\u30c3\u30c8 - Get Asset"},d=void 0,i={id:"user-manual/api/asset-get",title:"\u30a2\u30bb\u30c3\u30c8 - Get Asset",description:"\u30eb\u30fc\u30c8URL",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/user-manual/api/asset-get.md",sourceDirName:"user-manual/api",slug:"/user-manual/api/asset-get",permalink:"/ja/user-manual/api/asset-get",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/api/asset-get.md",tags:[],version:"current",frontMatter:{title:"\u30a2\u30bb\u30c3\u30c8 - Get Asset"},sidebar:"userManualSidebar",previous:{title:"\u30a2\u30bb\u30c3\u30c8 - Get Asset File",permalink:"/ja/user-manual/api/asset-file"},next:{title:"\u30a2\u30bb\u30c3\u30c8 - List assets",permalink:"/ja/user-manual/api/asset-list"}},l={},c=[{value:"\u30eb\u30fc\u30c8URL",id:"\u30eb\u30fc\u30c8url",level:2},{value:"\u8aac\u660e",id:"\u8aac\u660e",level:2},{value:"\u4f8b",id:"\u4f8b",level:2},{value:"\u30d1\u30e9\u30e1\u30fc\u30bf\u30fc",id:"\u30d1\u30e9\u30e1\u30fc\u30bf\u30fc",level:2},{value:"\u30ec\u30b9\u30dd\u30f3\u30b9\u30b9\u30ad\u30fc\u30de",id:"\u30ec\u30b9\u30dd\u30f3\u30b9\u30b9\u30ad\u30fc\u30de",level:2},{value:"\u30a8\u30e9\u30fc",id:"\u30a8\u30e9\u30fc",level:2},{value:"\u30ec\u30fc\u30c8\u5236\u9650",id:"\u30ec\u30fc\u30c8\u5236\u9650",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"\u30eb\u30fc\u30c8url",children:"\u30eb\u30fc\u30c8URL"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-none",children:"GET https://playcanvas.com/api/assets/:assetId?branchId=:branchId\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u8aac\u660e",children:"\u8aac\u660e"}),"\n",(0,t.jsx)(n.p,{children:"\u5358\u4e00\u30a2\u30bb\u30c3\u30c8\u306e\u8a73\u7d30\u3092\u53d6\u5f97\u3057\u307e\u3059\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u4f8b",children:"\u4f8b"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-none",children:'curl -H "Authorization: Bearer {accessToken}" https://playcanvas.com/api/assets/{assetId}?branchId={branchId}\n'})}),"\n",(0,t.jsx)(n.p,{children:"HTTP \u30ea\u30af\u30a8\u30b9\u30c8"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"GET https://playcanvas.com/api/assets/{assetId}?branchId={branchId}\nAuthorization: Bearer {accessToken}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u30d1\u30e9\u30e1\u30fc\u30bf\u30fc",children:"\u30d1\u30e9\u30e1\u30fc\u30bf\u30fc"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"\u540d\u524d"}),(0,t.jsx)(n.th,{children:"\u30bf\u30a4\u30d7"}),(0,t.jsx)(n.th,{style:{textAlign:"center"},children:"Required"}),(0,t.jsx)(n.th,{children:"\u8aac\u660e"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"assetId"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"number"})}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"}),(0,t.jsx)(n.td,{children:"The id of the asset."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"branchId"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string"})}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"}),(0,t.jsx)(n.td,{children:"The id of the branch."})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"\u30ec\u30b9\u30dd\u30f3\u30b9\u30b9\u30ad\u30fc\u30de",children:"\u30ec\u30b9\u30dd\u30f3\u30b9\u30b9\u30ad\u30fc\u30de"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-none",children:"\u30b9\u30c6\u30fc\u30bf\u30b9:200\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n    "id": int,\n    "modifiedAt": date,\n    "createdAt": date,\n    "state": "ready" | "processing" | "error",\n    "name": string,\n    "type": string,\n    "scope":{\n        "type": string,\n        "id": int\n    },\n    "source": bool,\n    "sourceId": bool,\n    "tags": list of strings,\n    "preload": bool,\n    "file": {\n        "hash": string,\n        "filename": string,\n        "size": int,\n        "url": string\n    },\n    "parent": int\n}\n\n'})}),"\n",(0,t.jsx)(n.h2,{id:"\u30a8\u30e9\u30fc",children:"\u30a8\u30e9\u30fc"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"\u30b3\u30fc\u30c9"}),(0,t.jsx)(n.th,{children:"\u8aac\u660e"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"401"}),(0,t.jsx)(n.td,{children:"Unauthorized"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"403"}),(0,t.jsx)(n.td,{children:"Forbidden"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"404"}),(0,t.jsx)(n.td,{children:"Project or Asset not found"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"429"}),(0,t.jsx)(n.td,{children:"Too many requests"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"\u30ec\u30fc\u30c8\u5236\u9650",children:"\u30ec\u30fc\u30c8\u5236\u9650"}),"\n",(0,t.jsxs)(n.p,{children:["\u3053\u306e\u30eb\u30fc\u30c8\u306f",(0,t.jsx)(n.a,{href:"/user-manual/api#rate-limiting",children:"\u901a\u5e38"}),"\u306e\u30ec\u30fc\u30c8\u5236\u9650\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002"]})]})}function o(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>i,a:()=>d});var t=s(67294);const r={},a=t.createContext(r);function d(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);