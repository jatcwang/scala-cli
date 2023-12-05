"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7915],{1176:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>r,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>t,toc:()=>l});var a=n(5893),i=n(1151);const o={title:"Picking the Scala version",sidebar_position:2},c=void 0,t={id:"cookbooks/scala-versions",title:"Picking the Scala version",description:"By default, Scala CLI runs the latest supported scala version. See our list of Supported Scala Versions in Scala CLI.",source:"@site/docs/cookbooks/scala-versions.md",sourceDirName:"cookbooks",slug:"/cookbooks/scala-versions",permalink:"/docs/cookbooks/scala-versions",draft:!1,unlisted:!1,editUrl:"https://github.com/Virtuslab/scala-cli/edit/main/website/docs/cookbooks/scala-versions.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Picking the Scala version",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/cookbooks/intro"},next:{title:"Changing Java versions",permalink:"/docs/cookbooks/scala-jvm"}},r={},l=[{value:"When should I provide a full version of Scala?",id:"when-should-i-provide-a-full-version-of-scala",level:2}];function d(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(s.p,{children:["By default, Scala CLI runs the latest supported scala version. See our list of ",(0,a.jsx)(s.a,{href:"/docs/reference/scala-versions",children:"Supported Scala Versions"})," in Scala CLI."]}),"\n",(0,a.jsx)(s.p,{children:"To demonstrate how this works, here\u2019s a universal piece of code that detects the Scala version at runtime.\nThe code is a bit complicated, so we suggest that you skip reading the whole file, and just focus on what it prints:"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-scala",metastring:"title=ScalaVersion.scala",children:'object ScalaVersion extends App {\n  def props(url: java.net.URL): java.util.Properties = {\n    val properties = new java.util.Properties()\n    val is = url.openStream()\n    try {\n      properties.load(is)\n      properties\n    } finally is.close()\n  }\n\n  def scala2Version: String =\n    props(getClass.getResource("/library.properties")).getProperty("version.number")\n\n  def checkScala3(res: java.util.Enumeration[java.net.URL]): String =\n    if (!res.hasMoreElements) scala2Version else {\n      val manifest = props(res.nextElement)\n      manifest.getProperty("Specification-Title") match {\n        case "scala3-library-bootstrapped" =>\n          manifest.getProperty("Implementation-Version")\n        case _ => checkScala3(res)\n      }\n    }\n  val manifests = getClass.getClassLoader.getResources("META-INF/MANIFEST.MF")\n\n  val scalaVersion = checkScala3(manifests)\n  val javaVersion = System.getProperty("java.version")\n\n  println(s"Scala: $scalaVersion")\n}\n'})}),"\n",(0,a.jsx)(s.p,{children:"When this application is run without specifying a Scala version, it uses the latest stable release of Scala \u2014 3.1.0 at the time of writing this doc:"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"scala-cli ScalaVersion.scala\n"})}),"\n",(0,a.jsxs)(s.p,{children:["When you want to control the Scala version, you can control it from the command line using the ",(0,a.jsx)(s.code,{children:"--scala"})," option (with ",(0,a.jsx)(s.code,{children:"-S"})," and ",(0,a.jsx)(s.code,{children:"--scala-version"})," aliases):"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"scala-cli -S 2.13.5 ScalaVersion.scala\n"})}),"\n",(0,a.jsx)(s.p,{children:'In many cases you won\'t care for a precise Scala version and will want "any Scala 2" or "any 2.13 release."\nFor this situation, Scala CLI accepts version prefixes like this:'}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"scala-cli -S 2 ScalaVersion.scala\n"})}),"\n",(0,a.jsx)(s.p,{children:"and this:"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"scala-cli -S 2.12 ScalaVersion.scala\n"})}),"\n",(0,a.jsxs)(s.p,{children:["In the first example (",(0,a.jsx)(s.code,{children:"-S 2"}),"), the application picks up the latest Scala 2 stable release (",(0,a.jsx)(s.code,{children:"2.13.9"})," at the time of this writing).\nIn the second example, the application picks up the latest stable release of ",(0,a.jsx)(s.code,{children:"2.12"})," (which is ",(0,a.jsx)(s.code,{children:"2.12.18"})," at the time of this writing)."]}),"\n",(0,a.jsxs)(s.p,{children:["You can also pin the version of the language within a ",(0,a.jsx)(s.code,{children:".scala"})," file with ",(0,a.jsx)(s.code,{children:"using"})," directives."]}),"\n",(0,a.jsx)(s.admonition,{type:"info",children:(0,a.jsxs)(s.p,{children:["The ",(0,a.jsx)(s.code,{children:"using"})," directives syntax is still experimental, and may change in future versions of Scala CLI."]})}),"\n",(0,a.jsxs)(s.p,{children:["Here\u2019s an example of a source code file named ",(0,a.jsx)(s.code,{children:"version.scala"})," that contains a ",(0,a.jsx)(s.code,{children:"using"})," directive:"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-scala",metastring:"title=version.scala",children:"//> using scala 2.12\n\nobject OldCode\n//rest of the config\n"})}),"\n",(0,a.jsxs)(s.p,{children:["Now when you compile that code along with the previous ",(0,a.jsx)(s.code,{children:"ScalaVersion.scala"})," file:"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"scala-cli ScalaVersion.scala version.scala\n"})}),"\n",(0,a.jsxs)(s.p,{children:['The output at the time of this writing is "',(0,a.jsx)(s.code,{children:"2.12.18"}),'".']}),"\n",(0,a.jsxs)(s.p,{children:["The Scala CLI philosophy is \u201ccommand line first,\u201d so any configuration information that\u2019s passed to the command line will override ",(0,a.jsx)(s.code,{children:"using"})," directives. So when you run this command with the ",(0,a.jsx)(s.code,{children:"-S"})," option:"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"scala-cli -S 2.13.10 ScalaVersion.scala version.scala\n"})}),"\n",(0,a.jsxs)(s.p,{children:['the result is "',(0,a.jsx)(s.code,{children:"2.13.10"}),'" (as opposed to "',(0,a.jsx)(s.code,{children:"2.12.18"}),'" in the previous example).']}),"\n",(0,a.jsx)(s.admonition,{type:"note",children:(0,a.jsxs)(s.p,{children:["See our ",(0,a.jsx)(s.a,{href:"/docs/guides/using-directives",children:"Using Directives Guide"})," for more details on ",(0,a.jsx)(s.code,{children:"using"})," directives."]})}),"\n",(0,a.jsx)(s.h2,{id:"when-should-i-provide-a-full-version-of-scala",children:"When should I provide a full version of Scala?"}),"\n",(0,a.jsx)(s.p,{children:"For prototyping, scripting, and other use cases that won\u2019t need to be run multiple times in the future, providing a Scala version generally isn\u2019t necessary."}),"\n",(0,a.jsxs)(s.p,{children:["Scala is source and binary compatible within each major version (e.g., ",(0,a.jsx)(s.code,{children:"2.12.x"})," or ",(0,a.jsx)(s.code,{children:"3.1.x"}),") so specifying the version in ",(0,a.jsx)(s.code,{children:"epoch.major"})," form (e.g., ",(0,a.jsx)(s.code,{children:"2.12"}),", ",(0,a.jsx)(s.code,{children:"2.13"}),", or ",(0,a.jsx)(s.code,{children:"3.1"}),") should be perfectly fine for most use cases. When your Scala code contains more advanced features that may be more sensitive for changes in minor version (e.g., from ",(0,a.jsx)(s.code,{children:"2.13.4"})," to ",(0,a.jsx)(s.code,{children:"2.13.5"}),") we recommend specifying the complete Scala version."]})]})}function h(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},1151:(e,s,n)=>{n.d(s,{Z:()=>t,a:()=>c});var a=n(7294);const i={},o=a.createContext(i);function c(e){const s=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function t(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),a.createElement(o.Provider,{value:s},e.children)}}}]);