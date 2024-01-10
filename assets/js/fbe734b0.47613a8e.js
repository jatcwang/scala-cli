"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4102],{6466:(i,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>d});var t=n(5893),a=n(1151),s=n(9705);const l={title:"Scripts with instant startup",sidebar_position:7},o=void 0,r={id:"cookbooks/introduction/instant-startup-scala-scripts",title:"Scripts with instant startup",description:"Scala CLI allows to easly compile and run Scala Scripts.",source:"@site/docs/cookbooks/introduction/instant-startup-scala-scripts.md",sourceDirName:"cookbooks/introduction",slug:"/cookbooks/introduction/instant-startup-scala-scripts",permalink:"/docs/cookbooks/introduction/instant-startup-scala-scripts",draft:!1,unlisted:!1,editUrl:"https://github.com/Virtuslab/scala-cli/edit/main/website/docs/cookbooks/introduction/instant-startup-scala-scripts.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Scripts with instant startup",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Running Scala Scripts",permalink:"/docs/cookbooks/introduction/scala-scripts"},next:{title:"GitHub gists",permalink:"/docs/cookbooks/introduction/gists"}},c={},d=[{value:"Using Scala Native",id:"using-scala-native",level:2},{value:"Optimization options",id:"optimization-options",level:2},{value:"Additional considerations",id:"additional-considerations",level:2}];function h(i){const e={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...i.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.p,{children:"Scala CLI allows to easly compile and run Scala Scripts.\nIt also allows for straightforward compilation with Scala Native.\nScala Native is an ahead-of-time compiler to native binary allowing\nfor instant startup times, meaning that along with scala-cli, it should\nperfectly suit the needs of a fast scripting tool."}),"\n",(0,t.jsx)(e.h2,{id:"using-scala-native",children:"Using Scala Native"}),"\n",(0,t.jsx)(e.p,{children:"As an example, let\u2019s build a script printing files from\na directory with sizes bigger than a passed value."}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-scala",metastring:"title=size-higher-than.scala",children:"//> using scala 3.1.1\n//> using dep com.lihaoyi::os-lib::0.8.1\n \n@main\ndef sizeHigherThan(dir: String, minSizeMB: Int) =\n  val wd = os.pwd / dir\n  val files = os.walk.attrs(wd).collect{\n    case (p, attrs) if attrs.size > minSizeMB * 10E6 => p\n  }\n  files.foreach(println(_))\n"})}),"\n",(0,t.jsxs)(e.p,{children:["Running this for a ",(0,t.jsx)(e.code,{children:"dir"})," directory and 20 MB as a lower limit with\n",(0,t.jsx)(e.code,{children:"scala-cli size-higher-than.scala \u2013 dir 20"})," can give us for example:"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-text",metastring:"title=dir/large-file.txt",children:"(>20MB of text)\n"})}),"\n",(0,t.jsxs)(s.v,{children:[(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"scala-cli size-higher-than.scala -- dir 20\n"})}),(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-text",children:"Compiling project (Scala 3.1.1, JVM)\nCompiled project (Scala 3.1.1, JVM)\n/Users/user/Documents/workspace/dir/large-file.txt\n"})})]}),"\n",(0,t.jsxs)(e.p,{children:["A keen eye will notice that we have not yet compiled to Scala Native. We are still running on the JVM!\nWe can fix that by either running with a ",(0,t.jsx)(e.code,{children:"\u2014-native"})," option, or,\nin this case, by including an additional using directive:"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-scala",metastring:"compile title=size-higher-than.scala",children:"//> using scala 3.1.1\n//> using dep com.lihaoyi::os-lib::0.8.1\n//> using platform scala-native\n \n@main\ndef sizeHigherThan(dir: String, minSizeMB: Int) =\n  val wd = os.pwd / dir\n  val files = os.walk.attrs(wd).collect{\n    case (p, attrs) if attrs.size > minSizeMB * 10E6 => p\n  }\n  files.foreach(println(_))\n"})}),"\n",(0,t.jsx)(e.p,{children:"After rerunning, you may notice that while the initial compilation took a little longer,\nsubsequent runs will severely cut on the startup time compared to the JVM."}),"\n",(0,t.jsx)(e.h2,{id:"optimization-options",children:"Optimization options"}),"\n",(0,t.jsx)(e.p,{children:"We can make the runtime itself even faster, using various Scala Native optimization options:"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"debug"})," - what was used by default up to this point, fast compilation with a slower runtime"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"release-fast"})," - moderate compilation time with a faster runtime"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"release-full"})," - slow compilation time with the fastest runtime"]}),"\n"]}),"\n",(0,t.jsxs)(e.p,{children:["We pass these using a ",(0,t.jsx)(e.code,{children:"-\u2013native-mode"})," scala-cli option or, like previously, by adding a using directive:"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-scala",metastring:"compile title=size-higher-than.scala",children:"//> using scala 3.1.1\n//> using dep com.lihaoyi::os-lib::0.8.1\n//> using platform scala-native\n//> using nativeMode release-full\n \n@main\ndef sizeHigherThan(dir: String, minSizeMB: Int) =\n  val wd = os.pwd / dir\n  val files = os.walk.attrs(wd).collect{\n    case (p, attrs) if attrs.size > minSizeMB * 10E6 => p\n  }\n  files.foreach(println(_))\n"})}),"\n",(0,t.jsxs)(e.p,{children:["We can also package this script into a separate binary with the ",(0,t.jsx)(e.code,{children:"package"})," command,\nuseful especially on Windows where typically shebangs won\u2019t work:"]}),"\n",(0,t.jsx)(e.h2,{id:"additional-considerations",children:"Additional considerations"}),"\n",(0,t.jsx)(e.p,{children:"Some things to look out for when working with Scala Native:"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["dependencies - libraries have to be published separately for Scala Native. Notice the ",(0,t.jsx)(e.code,{children:"org::project::version"})," double colon syntax used for os-lib - it basically hides ",(0,t.jsx)(e.code,{children:"org::project_native[Scala Native binary version]:version"})," underneath. Fortunately, many libraries are already available for Scala Native. However, Java dependencies will not work altogether."]}),"\n",(0,t.jsxs)(e.li,{children:["some ",(0,t.jsx)(e.a,{href:"https://scala-native.readthedocs.io/en/stable/user/lang.html",children:"differences"})," exist when compared to Scala on the JVM."]}),"\n"]})]})}function p(i={}){const{wrapper:e}={...(0,a.a)(),...i.components};return e?(0,t.jsx)(e,{...i,children:(0,t.jsx)(h,{...i})}):h(i)}},9705:(i,e,n)=>{n.d(e,{m:()=>l,v:()=>s});n(7294);var t=n(2004),a=n(5893);function s(i){let{children:e}=i;return(0,a.jsx)("div",{className:"runnable-command",children:e})}function l(i){let{url:e}=i;return(0,a.jsx)(t.Z,{playing:!0,loop:!0,muted:!0,controls:!0,width:"100%",height:"",url:e})}}}]);