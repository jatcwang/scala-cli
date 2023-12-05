"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3244],{5429:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var s=t(5893),i=t(1151);const r={title:"Java properties",sidebar_position:8},a=void 0,o={id:"guides/java-properties",title:"Java properties",description:"Although the Scala CLI runner can be used as a native image and thus will not always be run on the JVM it still supports Java properties.",source:"@site/docs/guides/java-properties.md",sourceDirName:"guides",slug:"/guides/java-properties",permalink:"/docs/guides/java-properties",draft:!1,unlisted:!1,editUrl:"https://github.com/Virtuslab/scala-cli/edit/main/website/docs/guides/java-properties.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"Java properties",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Scala Toolkit",permalink:"/docs/guides/toolkit"},next:{title:"Migrating from the old Scala runner",permalink:"/docs/guides/old-runner-migration"}},l={},c=[];function d(e){const n={admonition:"admonition",code:"code",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Although the Scala CLI runner can be used as a native image and thus will not always be run on the JVM it still supports Java properties.\nThere are a couple ways to specify them:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["as command line arguments, before the sub-command name and sources, when invoking ",(0,s.jsx)(n.code,{children:"scala-cli"}),", e.g."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",metastring:"ignore",children:"    scala-cli '-Dcoursier.credentials=maven.pkg.github.com Private_Token:gh_token1234' run .\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"scala-cli run . -Dfoo=bar"})," would pass the java property into your Scala app"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"scala-cli -Dfoo=bar run ."})," would pass the java property into ",(0,s.jsx)(n.code,{children:"scala-cli"}),"."]}),"\n"]})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["save them in ",(0,s.jsx)(n.code,{children:".scala-jvmopts"})," file in the project's root, e.g."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"-Dcoursier.credentials=maven.pkg.github.com Private_Token:gh_token1234\n-Dhttp.proxy=4.4.4.4\n-Dhttp.user=User2\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["set them globally using ",(0,s.jsx)(n.code,{children:"scala-cli config"}),", e.g."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",metastring:"ignore",children:'    scala-cli --power config -i java.properties "http.proxy=4.4.4.4" "http.user=User2" "coursier.credentials=..."\n'})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["Please note that if you need to modify the Java properties, you have to redefine all of them. It's not possible\nto update just a single value via the ",(0,s.jsx)(n.code,{children:"config"})," command. Each update effectively replaces the entire Java properties\nlist."]})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["set them globally in ",(0,s.jsx)(n.code,{children:"JAVA_OPTS"})," or ",(0,s.jsx)(n.code,{children:"JDK_JAVA_OPTIONS"})," environment variable, e.g."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",metastring:"ignore",children:'    export JAVA_OPTS="-Dhttp.proxy=4.4.4.4 -Dhttp.user=User2"\n'})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"-D"})," prefix can only be dropped when writing the values to config."]})})]})}function p(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>a});var s=t(7294);const i={},r=s.createContext(i);function a(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);