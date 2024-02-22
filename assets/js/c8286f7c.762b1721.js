"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[7798],{30039:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>r,toc:()=>h});var n=s(74848),o=s(28453);const i={title:"Basic Audio",tags:["audio","basics"],thumb:"https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/405821/V89N1G-image-75.jpg"},a=void 0,r={id:"tutorials/basic-audio",title:"Basic Audio",description:"The tank is moving around the robot. You can shoot by clicking anywhere on the game.",source:"@site/docs/tutorials/basic-audio.md",sourceDirName:"tutorials",slug:"/tutorials/basic-audio",permalink:"/tutorials/basic-audio",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/tutorials/basic-audio.md",tags:[{label:"audio",permalink:"/tags/audio"},{label:"basics",permalink:"/tags/basics"}],version:"current",frontMatter:{title:"Basic Audio",tags:["audio","basics"],thumb:"https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/405821/V89N1G-image-75.jpg"},sidebar:"tutorialsSidebar",previous:{title:"Audio Effects",permalink:"/tutorials/audio-effects"},next:{title:"Basic Cameras",permalink:"/tutorials/basic-cameras"}},l={},h=[{value:"Sound sources and Listeners",id:"sound-sources-and-listeners",level:2},{value:"Scene Setup",id:"scene-setup",level:2},{value:"Playbot",id:"playbot",level:3},{value:"Rotator",id:"rotator",level:3},{value:"Tank",id:"tank",level:3},{value:"Creating Sound sources",id:"creating-sound-sources",level:2},{value:"Positional",id:"positional",level:3},{value:"Asset",id:"asset",level:3},{value:"Auto Play",id:"auto-play",level:3},{value:"Overlap",id:"overlap",level:3},{value:"Loop",id:"loop",level:3},{value:"Creating Listeners",id:"creating-listeners",level:2}];function d(e){const t={a:"a",admonition:"admonition",em:"em",h2:"h2",h3:"h3",img:"img",p:"p",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"iframe-container",children:(0,n.jsx)("iframe",{loading:"lazy",src:"https://playcanv.as/p/XqMw92Zl/",title:"Basic Audio"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:"The tank is moving around the robot. You can shoot by clicking anywhere on the game."})}),"\n",(0,n.jsx)(t.h2,{id:"sound-sources-and-listeners",children:"Sound sources and Listeners"}),"\n",(0,n.jsx)(t.p,{children:"In this tutorial we have placed a robot in the middle of the scene with a tank rotating around the robot. The sound playing from the tank's engine is heard relative to the ears of the robot. As the tank moves around the robot we can hear the sound shifting position from left to back to right to front."}),"\n",(0,n.jsx)(t.p,{children:"The basic audio system in PlayCanvas centers on two Component types."}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.a,{href:"/user-manual/scenes/components/sound",children:"Sound"})," Component plays audio assets like Wave, MP3 or Ogg Vorbis files. Imagine Sound Components like loudspeakers in the scene. There can be many Sound Components in the scene each playing multiple sounds."]}),"\n",(0,n.jsx)(t.p,{children:"Each Sound component comprises of a number of slots. Each slot has a name and defines a specific sound to be played. You can have multiple slots on a Sound component each playing independently from each other."}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.a,{href:"/user-manual/scenes/components/audiolistener",children:"AudioListener"})," Component determines how a Sound is heard. Imagine AudioListener Components like a microphone in the scene. There can only be one active AudioListener at a time."]}),"\n",(0,n.jsx)(t.h2,{id:"scene-setup",children:"Scene Setup"}),"\n",(0,n.jsxs)(t.p,{children:["You should look at the ",(0,n.jsx)(t.a,{href:"https://playcanvas.com/editor/scene/440098",children:"Hierarchy"})," for this tutorial yourself in the Editor. These are the main Entities in the Scene:"]}),"\n",(0,n.jsx)(t.h3,{id:"playbot",children:"Playbot"}),"\n",(0,n.jsx)(t.p,{children:"Our robot. It has an AudioListener component so all sound is going to be heard relative to the position of the robot."}),"\n",(0,n.jsx)(t.h3,{id:"rotator",children:"Rotator"}),"\n",(0,n.jsx)(t.p,{children:"An Entity used to rotate the tank. It has a Script component with a script that rotates the entity around the Y axis at a constant speed."}),"\n",(0,n.jsx)(t.h3,{id:"tank",children:"Tank"}),"\n",(0,n.jsx)(t.p,{children:"Our tank. It is a child of the Rotator Entity, that way it rotates with it. It has a Sound component with 2 slots:"}),"\n",(0,n.jsx)(t.p,{children:'The "engine" slot is responsible for playing the looping engine sound of the tank. It\'s set to Auto Play as soon as the scene is loaded.'}),"\n",(0,n.jsx)(t.p,{children:'The other slot is the "shoot" slot. That slot is played by script every time we click on the canvas to make the tank\'s turret shoot. The Overlap checkbox is true for this slot which means that we can shoot multiple times and a new sound will be created every time instead of using just a single sound that restarts every time.'}),"\n",(0,n.jsx)(t.p,{children:"The tank also has a Script component which handles user input to make its turret shoot and also handles playing the shooting sound and other effects like a simple animation and a particle system."}),"\n",(0,n.jsx)(t.h2,{id:"creating-sound-sources",children:"Creating Sound sources"}),"\n",(0,n.jsxs)(t.p,{children:["To create a Sound source select the Entity you wish to add the Sound to and choose ",(0,n.jsx)(t.em,{children:"New Component"})," from the ",(0,n.jsx)(t.em,{children:"Entity"})," menu. Select ",(0,n.jsx)(t.em,{children:"sound"})," from the list of Components and press the ",(0,n.jsx)(t.em,{children:"Add"})," button."]}),"\n",(0,n.jsx)(t.p,{children:"Sound properties will now appear in the AttributeEditor."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Sound Component",src:s(34068).A+"",width:"320",height:"808"})}),"\n",(0,n.jsx)(t.p,{children:"Here is the Sound component of the tank Entity. Here's some information about some of the properties:"}),"\n",(0,n.jsx)(t.h3,{id:"positional",children:"Positional"}),"\n",(0,n.jsx)(t.p,{children:"If this is checked it means that the sound will be heard relative to the position of the current AudioListener (our robot) in 3D space. If this is unchecked then the sound will be heard in 2D by both speakers."}),"\n",(0,n.jsx)(t.h3,{id:"asset",children:"Asset"}),"\n",(0,n.jsxs)(t.p,{children:["Each slot has an Asset picker which allows you to play different audio assets from different slots. See ",(0,n.jsx)(t.a,{href:"/user-manual/assets/importing",children:"importing assets"})," for details on how to upload audio assets."]}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsx)(t.p,{children:"Not all audio formats are supported across all browsers. At the moment we recommend using MP3 (.mp3) which is supported by most browsers."})}),"\n",(0,n.jsx)(t.p,{children:"Once you have uploaded your assets, use the Asset Picker to select the audio asset for your slot."}),"\n",(0,n.jsx)(t.h3,{id:"auto-play",children:"Auto Play"}),"\n",(0,n.jsx)(t.p,{children:"If you want a slot to start playing as soon as the scene is loaded then set this to true. Otherwise set this to false and play the slot using a script."}),"\n",(0,n.jsx)(t.h3,{id:"overlap",children:"Overlap"}),"\n",(0,n.jsx)(t.p,{children:"If this is unchecked then the slot will play its sound from the beginning every time you play it in script. If this doesn't matter to you for example if you are playing some background music or a sound that doesn't need to be repeated leave this unchecked."}),"\n",(0,n.jsx)(t.p,{children:"If however you want to play a sound repeatedly without stopping every time the sound is replayed, set this to true. Our shooting sound is set to overlap in this tutorial."}),"\n",(0,n.jsx)(t.h3,{id:"loop",children:"Loop"}),"\n",(0,n.jsxs)(t.p,{children:["By default, the audio sample will be played once, and then stop. If you want the sound to loop continuously, e.g. for background music, then you can check the ",(0,n.jsx)(t.em,{children:"Loop"})," box. Our engine is a looping sound in the example but the shooting sound is not."]}),"\n",(0,n.jsx)(t.h2,{id:"creating-listeners",children:"Creating Listeners"}),"\n",(0,n.jsx)(t.p,{children:"To create an AudioListener, select the Entity you wish to represent the listener. Often, this will be the in-game camera as this is where the players 'head' is. In our case the AudioListener is attached to the robot."}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsx)(t.p,{children:"You can only have one AudioListener at a time. The last AudioListener Component that is created will be the active one."})})]})}function c(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},34068:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/sound-e75a284b73761e2aec33c81e677b3a8d.jpg"},28453:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>r});var n=s(96540);const o={},i=n.createContext(o);function a(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);