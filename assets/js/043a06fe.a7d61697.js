"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4631],{7317:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var t=s(5893),a=s(1151);const o={title:"Shebang",sidebar_position:26},i=void 0,r={id:"commands/shebang",title:"Shebang",description:"This command is equivalent to run, but it changes the way Scala CLI parses options (used to configure the tool) and",source:"@site/docs/commands/shebang.md",sourceDirName:"commands",slug:"/commands/shebang",permalink:"/docs/commands/shebang",draft:!1,unlisted:!1,editUrl:"https://github.com/Virtuslab/scala-cli/edit/main/website/docs/commands/shebang.md",tags:[],version:"current",sidebarPosition:26,frontMatter:{title:"Shebang",sidebar_position:26},sidebar:"tutorialSidebar",previous:{title:"Version",permalink:"/docs/commands/version"},next:{title:"Export \u26a1\ufe0f",permalink:"/docs/commands/export"}},c={},d=[];function l(e){const n={a:"a",code:"code",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["This command is equivalent to ",(0,t.jsx)(n.code,{children:"run"}),", but it changes the way Scala CLI parses options (used to configure the tool) and\ninputs (the sources of your project) in order to be compatible with ",(0,t.jsx)(n.code,{children:"shebang"})," scripts."]}),"\n",(0,t.jsxs)(n.p,{children:["The command ",(0,t.jsx)(n.code,{children:"shebang"})," also allows script files to be executed even if they have no file extension,\nprovided they start with the ",(0,t.jsxs)(n.a,{href:"/docs/guides/scripting/shebang#shebang-script-headers",children:[(0,t.jsx)(n.code,{children:"shebang"})," header"]}),".\nNote that those files are always run as scripts even though they may contain e.g. valid ",(0,t.jsx)(n.code,{children:".scala"})," program."]}),"\n",(0,t.jsxs)(n.p,{children:["Normally, inputs and Scala CLI options can be mixed. Program arguments (to be passed to your app) have to be specified\nafter ",(0,t.jsx)(n.code,{children:"--"})," (double dash) separator."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",metastring:"ignore",children:"scala-cli [command] [scala_cli_options | input]... -- [program_arguments]...\n"})}),"\n",(0,t.jsxs)(n.p,{children:["For the ",(0,t.jsx)(n.code,{children:"shebang"})," command, only a single input can be set. All Scala CLI options must be set before\nthe input, while everything after the input is considered a program argument."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",metastring:"ignore",children:"scala-cli shebang [scala_cli_options]... input [program_arguments]...\n"})}),"\n",(0,t.jsxs)(n.p,{children:["More details can be found in ",(0,t.jsx)(n.a,{href:"../guides/scripting/shebang",children:"Shebang guide"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>r,a:()=>i});var t=s(7294);const a={},o=t.createContext(a);function i(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);