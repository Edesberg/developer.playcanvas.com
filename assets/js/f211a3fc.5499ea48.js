"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[7526],{47282:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>h,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var n=i(85893),r=i(11151);const a={title:"Hierarchy",sidebar_position:2},s=void 0,o={id:"user-manual/editor/hierarchy",title:"Hierarchy",description:"Hierarchy Panel",source:"@site/docs/user-manual/editor/hierarchy.md",sourceDirName:"user-manual/editor",slug:"/user-manual/editor/hierarchy",permalink:"/user-manual/editor/hierarchy",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/editor/hierarchy.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Hierarchy",sidebar_position:2},sidebar:"userManualSidebar",previous:{title:"Toolbar",permalink:"/user-manual/editor/toolbar"},next:{title:"Inspector",permalink:"/user-manual/editor/inspector"}},h={},c=[{value:"Creating and Destroying Entities",id:"creating-and-destroying-entities",level:2},{value:"Organizing the Hierarchy",id:"organizing-the-hierarchy",level:2},{value:"Searching the Hierarchy",id:"searching-the-hierarchy",level:2},{value:"Duplicating Entities",id:"duplicating-entities",level:2},{value:"Copying / Pasting Entities",id:"copying--pasting-entities",level:2}];function l(e){const t={code:"code",em:"em",h2:"h2",img:"img",p:"p",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Hierarchy Panel",src:i(5635).Z+"",width:"362",height:"488"})}),"\n",(0,n.jsx)(t.p,{children:"The Hierarchy panel shows you a tree view of your entire Scene which is made up from a hierarchy of Entities. A Scene will always contain the Root Entity at the top of the tree. All the other Entities you see here on the right have been added by the developer."}),"\n",(0,n.jsx)(t.p,{children:"The Hierarchy panel is great for quickly finding Entities as all the Entities in your Scene will be visible all the time. Clicking on an Entity in the Hierarchy will select it."}),"\n",(0,n.jsx)(t.h2,{id:"creating-and-destroying-entities",children:"Creating and Destroying Entities"}),"\n",(0,n.jsx)(t.p,{children:"Once an Entity is selected in the Hierarchy, you can create a new child Entity or delete the Selection. You can do this, either using the buttons in the top right of the Hierarchy panel, or by opening the context menu via a right click operation."}),"\n",(0,n.jsx)(t.h2,{id:"organizing-the-hierarchy",children:"Organizing the Hierarchy"}),"\n",(0,n.jsxs)(t.p,{children:["The order in which Entities are listed in the tree view is important. As the Scene is a hierarchy, Entities can be ",(0,n.jsx)(t.em,{children:"children"})," of another Entity -- their ",(0,n.jsx)(t.em,{children:"parent"})," -- and the transform matrix of a parent Entity is applied to all of its children. If you move or rotate a parent Entity, all children will move or rotate underneath the parent. This is very useful for simplifying the manipulation of many Entities."]}),"\n",(0,n.jsx)(t.p,{children:"The structure of the Hierarchy can be edited via drag and drop. Simply select and drag any Entity in the Hierarchy. In this way, you can quickly reorder or reparent Entities. When you reparent an Entity in the Editor its transform will be preserved so you won't see the Entity move or rotate after you change its parent. If you do not want that behavior hold Ctrl (or Cmd on Mac)."}),"\n",(0,n.jsx)(t.h2,{id:"searching-the-hierarchy",children:"Searching the Hierarchy"}),"\n",(0,n.jsx)(t.p,{children:"Near the top of the Hierarchy panel is a Search box which you can use to dynamically filter the content of the Entity tree."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Hierarchy Panel Search",src:i(72994).Z+"",width:"508",height:"171"})}),"\n",(0,n.jsx)(t.p,{children:"By default, the search will filter based on entity names with 'Smart Search' enabled. Smart Search is fuzzy, which means it matches names that are similar to the search string rather than exactly the same. This is useful if you can't quite remember the name of the Entity you are searching for."}),"\n",(0,n.jsx)(t.p,{children:"You can customize the search by clicking the magnifying glass:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Hierarchy Panel Search Options",src:i(57044).Z+"",width:"506",height:"374"})}),"\n",(0,n.jsx)(t.h2,{id:"duplicating-entities",children:"Duplicating Entities"}),"\n",(0,n.jsx)(t.p,{children:"You can duplicate Entities by selecting them and hitting Ctrl+D (or Cmd+D on Mac) or by right clicking and selecting Duplicate. A copy of each Entity will be created right next to its original."}),"\n",(0,n.jsx)(t.h2,{id:"copying--pasting-entities",children:"Copying / Pasting Entities"}),"\n",(0,n.jsx)(t.p,{children:"If you wish to paste Entities under a new parent you can select them and hit Ctrl+C (or Cmd+C on Mac) to copy them, then select the new parent and then Ctrl+V (or Cmd+V on Mac) to paste them under the selected parent. You can also use the Copy and Paste options when you right click on the selected Entities."}),"\n",(0,n.jsxs)(t.p,{children:["You can also copy and paste Entities between different Scenes or even different Projects. Just follow the same steps to copy Entities and then go to the desired Scene, select the desired parent and paste the Entities. The Editor will try to match any Asset references on the pasted Entities by path in the new Project. For example, if you are copy-pasting an Entity with a Model component that references a Model Asset called ",(0,n.jsx)(t.code,{children:"mymodel.fbx"})," then when you paste the Entity in the other Project, the Editor will try to find an Asset named ",(0,n.jsx)(t.code,{children:"mymodel.fbx"})," in the same folder. If a matching Asset is not found it will be left as missing so that you can fix it manually."]})]})}function d(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},5635:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/hierarchy-panel-59f39fa95b76ed2105e98ce8c32966ef.png"},57044:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/hierarchy-search-options-c1d92262e60884bfc5a5217b5ba92cb3.png"},72994:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/hierarchy-search-6f973d807ba51390b0eafca26c60d1f5.png"},11151:(e,t,i)=>{i.d(t,{Z:()=>o,a:()=>s});var n=i(67294);const r={},a=n.createContext(r);function s(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);