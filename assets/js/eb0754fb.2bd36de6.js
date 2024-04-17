"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[5178],{59772:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var t=a(74848),i=a(28453);const o={title:"Communication with web pages",sidebar_position:4},s=void 0,r={id:"user-manual/publishing/web/communicating-webpage",title:"Communication with web pages",description:"One the key advantages of using PlayCanvas and WebGL over other plugins or cross-compiled engines is the ability to interact directly between your application and the surrounding webpage. In this page we'll talk about some common ways of interfacing your PlayCanvas application with a web page or web application.",source:"@site/docs/user-manual/publishing/web/communicating-webpage.md",sourceDirName:"user-manual/publishing/web",slug:"/user-manual/publishing/web/communicating-webpage",permalink:"/user-manual/publishing/web/communicating-webpage",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/publishing/web/communicating-webpage.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Communication with web pages",sidebar_position:4},sidebar:"userManualSidebar",previous:{title:"Self-hosting for beginners",permalink:"/user-manual/publishing/web/self-hosting-for-beginners"},next:{title:"Hosting using a CDN",permalink:"/user-manual/publishing/web/hosting-cdn"}},c={},l=[{value:"Defining an API",id:"defining-an-api",level:2},{value:"Embedded in IFrame",id:"embedded-in-iframe",level:3},{value:"Serve your own HTML",id:"serve-your-own-html",level:3}];function p(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"One the key advantages of using PlayCanvas and WebGL over other plugins or cross-compiled engines is the ability to interact directly between your application and the surrounding webpage. In this page we'll talk about some common ways of interfacing your PlayCanvas application with a web page or web application."}),"\n",(0,t.jsx)(n.p,{children:"There are two ways you may find your PlayCanvas application communicating with the surrounding Web page. First, you may have embedded your application in a iframe in a page. Second you may be serving your own HTML page which loads an PlayCanvas page. These two methods require very different ways of communicating between web page and application."}),"\n",(0,t.jsx)(n.h2,{id:"defining-an-api",children:"Defining an API"}),"\n",(0,t.jsx)(n.p,{children:"Common to both methods of hosting you should think about what features of your PlayCanvas application you need to expose to the web page. Perhaps you need to change the color of something based on a button click or a slider; or you might need to send some text input into the application to be rendered to a texture. Decide in advance what features you need to expose and in your PlayCanvas application write an explicit API or set of functions which are the only functions that your web page will call."}),"\n",(0,t.jsx)(n.p,{children:"Here is a simple example where we show a couple of different ways of exposing an API from a PlayCanvas application to a web page."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'// method one: define a global function to set the score\nwindow.setScore = function (score) {\n    const app = pc.Application.getApplication();\n    const entity = app.root.findByName("Score Keeper");\n    entity.script.scoreKeeper.setScore(score);\n}\n\nvar ScoreKeeper = pc.createScript("scoreKeeper");\n\nScoreKeeper.prototype.initialize = function (entity) {\n    // method two: define an application event to set the score\n    this.app.on("score:set", function (score) {\n        this.setScore(score);\n    }, this);\n};\n\nScoreKeeper.prototype.setScore = function (score) {\n    // do the score setting here.\n};\n\n// how to use the API:\n\n// method one:\nwindow.setScore(10);\n\n// method two:\nconst app = pc.Application.getApplication();\napp.fire("score:set", 10);\n\n'})}),"\n",(0,t.jsx)(n.p,{children:"Method one defines a global function which can be called anywhere in your page to access your application. Method two defines an application event which you can fire from your page. The application listens for this event and performs actions in response to the event. Both are valid methods of defining an API with your application."}),"\n",(0,t.jsx)(n.h3,{id:"embedded-in-iframe",children:"Embedded in IFrame"}),"\n",(0,t.jsx)(n.p,{children:"Embedding a PlayCanvas application in an iframe is a quick and easy way to get your PlayCanvas content in a page. It also means that you can make use of our optimized hosting and don't need to worry about serving all the PlayCanvas content. However, the downside is that you can not call javascript functions in the PlayCanvas application directly from the hosting page because they are running on different pages."}),"\n",(0,t.jsxs)(n.p,{children:["To communicate between a parent page and an iframe you will need to use the ",(0,t.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage",children:"postMessage"})," javascript API to send data between your page and the PlayCanvas application."]}),"\n",(0,t.jsxs)(n.p,{children:["In your host page, use the iframeless URL for the iframe. The default publish link has the build in an iframe to include the social sharing bar at the bottom. This can cause problems with ",(0,t.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage",children:"postMessage"})," as there are now two iframes to communicate through."]}),"\n",(0,t.jsxs)(n.p,{children:["If you add ",(0,t.jsx)(n.code,{children:"/e"})," after ",(0,t.jsx)(n.code,{children:"https://playcanv.as"})," in the URL, this will give you a version of the build without the iframe and social sharing bar."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'<iframe loading="lazy" id="app-frame" src="https://playcanv.as/e/p/example/">\n<script>\nconst iframe = document.getElementById("app-frame");\niframe.contentWindow.postMessage({\n    score: 10,\n}, "https://playcanv.as");\n<\/script>\n'})}),"\n",(0,t.jsx)(n.p,{children:"In your application"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'window.addEventListener("message", function (event) {\n    if (event.origin === "http://example.com") { // always check message came from your website\n        const score = event.data.score;\n\n        // call API method one:\n        window.setScore(score);\n\n        // call API method two:\n        const app = pc.Application.getApplication();\n        app.fire("score:set", score);\n    }\n}, false);\n'})}),"\n",(0,t.jsx)(n.h3,{id:"serve-your-own-html",children:"Serve your own HTML"}),"\n",(0,t.jsx)(n.p,{children:"When you download your PlayCanvas application for self-hosting. This is the index.html page that we include to run your application."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'<!doctype html>\n<html>\n<head>\n    <meta name=\'viewport\' content=\'width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no\'>\n    <meta charset=\'utf-8\'>\n    <link rel="stylesheet" type="text/css" href="styles.css">\n    <title>Application Title</title>\n    <script src="playcanvas-stable.min.js"><\/script>\n    <script>\n        SCENE_PATH = "12346.json";\n        CONTEXT_OPTIONS = {\n            \'alpha\': false,\n            \'preserveDrawingBuffer\': false\n        };\n    <\/script>\n</head>\n<body>\n    <script src="__start__.js"><\/script>\n    <script src="__loading__.js"><\/script>\n</body>\n</html>\n'})}),"\n",(0,t.jsx)(n.p,{children:"It is absolutely possible and even recommended, that you modify start from this page as the basis of your web page and you can modify it to add any additional content that is required for you page."}),"\n",(0,t.jsxs)(n.p,{children:["When it comes to communicating with your PlayCanvas application, for example from a button push. You can call the APIs we defined above directly from your script. There is no need for the ",(0,t.jsx)(n.code,{children:"postMessage"})," calls."]}),"\n",(0,t.jsxs)(n.p,{children:["Note, it is important that you run any custom code after the ",(0,t.jsx)(n.code,{children:"__start__.js"})," scripts as this creates the PlayCanvas application. In many cases you may wish to wait until after all the asset loading has finished, but before the application starts. You can do this by responding to the ",(0,t.jsx)(n.code,{children:"start"})," event."]}),"\n",(0,t.jsx)(n.p,{children:"For example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'<!doctype html>\n<html>\n<head>\n    <meta name=\'viewport\' content=\'width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no\'>\n    <meta charset=\'utf-8\'>\n    <link rel="stylesheet" type="text/css" href="styles.css">\n    <title>Application Title</title>\n    <script src="playcanvas-stable.min.js"><\/script>\n    <script>\n        SCENE_PATH = "12346.json";\n        CONTEXT_OPTIONS = {\n            \'alpha\': false,\n            \'preserveDrawingBuffer\': false\n        };\n    <\/script>\n</head>\n<body>\n    <script src="__start__.js"><\/script>\n    <script src="__loading__.js"><\/script>\n    <script>\n    const app = pc.Application.getApplication();\n    app.on("start", function () {\n        // get the root of the scene.\n        const hierarchy = app.root.children[0];\n\n        // do other stuff here\n    });\n    <\/script>\n</body>\n</html>\n'})})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},28453:(e,n,a)=>{a.d(n,{R:()=>s,x:()=>r});var t=a(96540);const i={},o=t.createContext(i);function s(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);