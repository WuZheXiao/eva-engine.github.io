"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[80262],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return g}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),g=a,f=m["".concat(s,".").concat(g)]||m[g]||u[g]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},76907:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],l={},s="Performance monitoring",c={unversionedId:"tutorials/performancePlugin",id:"tutorials/performancePlugin",isDocsHomePage:!1,title:"Performance monitoring",description:"This plug-in is implemented using stat.js and will display performance information at the specified location",source:"@site/docs/tutorials/performancePlugin.md",sourceDirName:"tutorials",slug:"/tutorials/performancePlugin",permalink:"/docs/tutorials/performancePlugin",editUrl:"https://github.com/eva-engine/eva-engine.github.io/tree/master/docs/tutorials/performancePlugin.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Data Management",permalink:"/docs/tutorials/evaxPlugin"},next:{title:"Plug-in development",permalink:"/docs/tutorials/pluginDevelop"}},p=[{value:"Install",id:"install",children:[{value:"With NPM",id:"with-npm",children:[],level:3},{value:"In Browser",id:"in-browser",children:[],level:3}],level:2},{value:"Usage",id:"usage",children:[],level:2}],u={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"performance-monitoring"},"Performance monitoring"),(0,i.kt)("p",null,"This plug-in is implemented using ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mrdoob/stats.js/"},"stat.js")," and will display performance information at the specified location\n",(0,i.kt)("img",{parentName:"p",src:"https://gw.alicdn.com/imgextra/i4/O1CN01soAQoz1Q9MG2HLeZL_!!6000000001933-2-tps-424-524.png",alt:"image.png"}),"\n",(0,i.kt)("img",{parentName:"p",src:"https://gw.alicdn.com/imgextra/i4/O1CN01AHtNyp1Zi0lkTonZg_!!6000000003227-2-tps-476-422.png",alt:"image.png"}),"\n",(0,i.kt)("img",{parentName:"p",src:"https://gw.alicdn.com/imgextra/i3/O1CN01bgazxT1FteWFFpp72_!!6000000000545-2-tps-470-402.png",alt:"image.png"})),(0,i.kt)("h2",{id:"install"},"Install"),(0,i.kt)("h3",{id:"with-npm"},"With NPM"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @eva/plugin-stats\n")),(0,i.kt)("h3",{id:"in-browser"},"In Browser"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<script src="https://unpkg.com/@eva/plugin-stats@1.1.x/dist/EVA.plugin.stats.min.js"><\/script>\n')),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import {StatsSystem} from '@eva/plugin-stats'\n\nconst game = new Game({\n   autoStart: true, // optional\n   frameRate: 60,\n})\n\ngame.addSystem(new StatsSystem({\n   show: true // Whether to display or not is set here, it will not run if set to false.\n   style: {// The values here are all width to percentage vw units\n     x: 0,\n     y: 50,\n     width: 20,\n     height: 12\n   }\n}))\n")))}m.isMDXComponent=!0}}]);