"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9038],{6547:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var n=o(5893),s=o(1151);const i={title:"SBT and Mill \u26a1\ufe0f",sidebar_position:50},r=void 0,a={id:"guides/power/sbt-mill",title:"SBT and Mill \u26a1\ufe0f",description:"The export sub-command is an experimental feature.",source:"@site/docs/guides/power/sbt-mill.md",sourceDirName:"guides/power",slug:"/guides/power/sbt-mill",permalink:"/docs/guides/power/sbt-mill",draft:!1,unlisted:!1,editUrl:"https://github.com/Virtuslab/scala-cli/edit/main/website/docs/guides/power/sbt-mill.md",tags:[],version:"current",sidebarPosition:50,frontMatter:{title:"SBT and Mill \u26a1\ufe0f",sidebar_position:50},sidebar:"tutorialSidebar",previous:{title:"custom-toolkit",permalink:"/docs/guides/advanced/custom-toolkit"},next:{title:"Offline mode \u26a1\ufe0f",permalink:"/docs/guides/power/offline"}},c={},d=[];function l(e){const t={a:"a",admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.admonition,{type:"caution",children:[(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"export"})," sub-command is an experimental feature."]}),(0,n.jsxs)(t.p,{children:["Please bear in mind that non-ideal user experience should be expected.\nIf you encounter any bugs or have feedback to share, make sure to reach out to the maintenance team\non ",(0,n.jsx)(t.a,{href:"https://github.com/VirtusLab/scala-cli",children:"GitHub"}),"."]})]}),"\n",(0,n.jsx)(t.p,{children:"Scala CLI lets you export your current build into sbt or Mill.\nThis means that if your project needs something that Scala CLI doesn\u2019t provide \u2014 such as a second module \u2014 you can export your project to your build tool of choice."}),"\n",(0,n.jsx)(t.p,{children:"Why do we need this?\nBasically we don\u2019t want to block the development of your project.\nBut at the same time, we don\u2019t want to introduce the complexity that multi-module builds and tasks and plugin systems introduce \u2014 at least not until that complexity is needed."}),"\n",(0,n.jsx)(t.p,{children:"To export a project, run this command to export to sbt:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sh",children:"scala-cli export --sbt <standard-options>\n"})}),"\n",(0,n.jsx)(t.p,{children:"Or use this command to export to Mill:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sh",children:"scala-cli export --mill <standard-options>\n"})}),"\n",(0,n.jsxs)(t.p,{children:["These commands create a copy of your sources, resources, and local JARs.\nThey also download gists and other non-local inputs.\nBy default the project is exported to a ",(0,n.jsx)(t.code,{children:"dest"})," directory, but you can control that with the ",(0,n.jsx)(t.code,{children:"-o"})," option."]})]})}function u(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},1151:(e,t,o)=>{o.d(t,{Z:()=>a,a:()=>r});var n=o(7294);const s={},i=n.createContext(s);function r(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);