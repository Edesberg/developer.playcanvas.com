"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[4427],{73377:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>h,contentTitle:()=>i,default:()=>c,frontMatter:()=>n,metadata:()=>o,toc:()=>p});var s=a(85893),t=a(11151);const n={title:"Sub Graphs",sidebar_position:2},i=void 0,o={id:"shader-editor/overview/graphs/sub-graphs",title:"Sub Graphs",description:"The second type of graph in Shader Editor are Sub Graphs.",source:"@site/docs/shader-editor/overview/graphs/sub-graphs.md",sourceDirName:"shader-editor/overview/graphs",slug:"/shader-editor/overview/graphs/sub-graphs",permalink:"/shader-editor/overview/graphs/sub-graphs",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/shader-editor/overview/graphs/sub-graphs.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Sub Graphs",sidebar_position:2},sidebar:"shaderEditorSidebar",previous:{title:"Material Graphs",permalink:"/shader-editor/overview/graphs/material-graphs"},next:{title:"Nodes",permalink:"/shader-editor/overview/nodes/"}},h={},p=[{value:"Example",id:"example",level:4}];function d(e){const r={a:"a",h4:"h4",img:"img",p:"p",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.p,{children:"The second type of graph in Shader Editor are Sub Graphs."}),"\n",(0,s.jsx)(r.p,{children:"Sub Graphs don't directly define a material, but instead encapsulate some useful functionality which can then be used elsewhere."}),"\n",(0,s.jsx)(r.p,{children:"Sub Graphs don't contain Material Nodes, but instead pass data in and out using Input and Output Nodes. Sub Graphs can be used either in other Sub Graphs or directly in Material Graphs."}),"\n",(0,s.jsx)(r.p,{children:"Note that it is not valid (or possible) to connect Sub Graphs together in way that would introduce cyclic references. For example if graph A references graph B which in turn references graph C, then graph C can not reference back to A or B."}),"\n",(0,s.jsx)(r.h4,{id:"example",children:"Example"}),"\n",(0,s.jsx)(r.p,{children:"For example, this is a simple Sub Graph which adds two floats together:"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.img,{src:"/images/shader-editor/overview-graph-sub-graph.png",alt:"Sub Graph Example"})}),"\n",(0,s.jsx)(r.p,{children:'If this Sub Graph were named "adder" it would appear in the Assets Pane as follows:'}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.img,{src:"/images/shader-editor/overview-graph-sub-graph-icon.png",alt:"Sub Graph Icon"})}),"\n",(0,s.jsx)(r.p,{children:"The adder Sub Graph can then be placed as a node itself in another graph:"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.img,{src:"/images/shader-editor/overview-graph-place-sub-graph.gif",alt:"Place Sub Graph"})}),"\n",(0,s.jsxs)(r.p,{children:["For more information on how to edit graphs see the ",(0,s.jsx)(r.a,{href:"/images/shader-editor/overview-graph-sub-graph.png",children:"Graph Editor"})," documentation."]})]})}function c(e={}){const{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11151:(e,r,a)=>{a.d(r,{Z:()=>o,a:()=>i});var s=a(67294);const t={},n=s.createContext(t);function i(e){const r=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(n.Provider,{value:r},e.children)}}}]);