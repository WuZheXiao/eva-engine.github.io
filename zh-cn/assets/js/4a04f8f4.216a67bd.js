"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[40658],{3905:function(n,e,t){t.d(e,{kt:function(){return c}});var a=t(67294);function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function r(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function o(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){i(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,a,i=function(n,e){if(null==n)return{};var t,a,i={},r=Object.keys(n);for(a=0;a<r.length;a++)t=r[a],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(a=0;a<r.length;a++)t=r[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var m=a.createContext({}),p=function(n){var e=a.useContext(m),t=e;return n&&(t="function"==typeof n?n(e):o(o({},e),n)),t},s={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(n,e){var t=n.components,i=n.mdxType,r=n.originalType,m=n.parentName,u=l(n,["components","mdxType","originalType","parentName"]),c=p(t),d=i,g=c["".concat(m,".").concat(d)]||c[d]||s[d]||r;return t?a.createElement(g,o(o({ref:e},u),{},{components:t})):a.createElement(g,o({ref:e},u))}));function c(n,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof n||i){var r=t.length,o=new Array(r);o[0]=u;var l={};for(var m in e)hasOwnProperty.call(e,m)&&(l[m]=e[m]);l.originalType=n,l.mdxType="string"==typeof n?n:i,o[1]=l;for(var p=2;p<r;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},34122:function(n,e,t){t.r(e),t.d(e,{frontMatter:function(){return l},contentTitle:function(){return m},metadata:function(){return p},toc:function(){return s},default:function(){return c}});var a=t(87462),i=t(63366),r=(t(67294),t(3905)),o=["components"],l={},m="\u8fc7\u6e21\u52a8\u753b",p={unversionedId:"tutorials/transitionAnimation",id:"tutorials/transitionAnimation",isDocsHomePage:!1,title:"\u8fc7\u6e21\u52a8\u753b",description:"\u5bf9 Component \u4e0a\u7684\u5c5e\u6027\u505a\u7ebf\u6027\u53d8\u5316\uff0c\u5b9e\u73b0\u8fc7\u6e21\u52a8\u753b\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/tutorials/transitionAnimation.md",sourceDirName:"tutorials",slug:"/tutorials/transitionAnimation",permalink:"/zh-cn/docs/tutorials/transitionAnimation",editUrl:"https://github.com/eva-engine/eva-engine.github.io/tree/master/docs/tutorials/transitionAnimation.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u906e\u6321\u6392\u5e8f\u4e0e\u900f\u660e\u5ea6",permalink:"/zh-cn/docs/tutorials/orderAndTransparent"},next:{title:"\u5e27\u52a8\u753b",permalink:"/zh-cn/docs/tutorials/spriteAnimation"}},s=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",children:[{value:"\u4f7f\u7528 NPM",id:"\u4f7f\u7528-npm",children:[],level:3},{value:"\u5728\u6d4f\u89c8\u5668\u4e2d",id:"\u5728\u6d4f\u89c8\u5668\u4e2d",children:[],level:3}],level:2},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",children:[],level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"group: <code>Object</code>",id:"group-object",children:[{value:"component",id:"component",children:[],level:5},{value:"name: <code>String</code>",id:"name-string",children:[],level:5},{value:"values: <code>Array</code>",id:"values-array",children:[],level:5}],level:3}],level:2},{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",children:[{value:"play(name, iteration)",id:"playname-iteration",children:[],level:3},{value:"stop(name)",id:"stopname",children:[],level:3}],level:2},{value:"\u4e8b\u4ef6",id:"\u4e8b\u4ef6",children:[{value:"finish",id:"finish",children:[],level:3}],level:2}],u={toc:s};function c(n){var e=n.components,t=(0,i.Z)(n,o);return(0,r.kt)("wrapper",(0,a.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u8fc7\u6e21\u52a8\u753b"},"\u8fc7\u6e21\u52a8\u753b"),(0,r.kt)("p",null,"\u5bf9 Component \u4e0a\u7684\u5c5e\u6027\u505a\u7ebf\u6027\u53d8\u5316\uff0c\u5b9e\u73b0\u8fc7\u6e21\u52a8\u753b\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://eva.js.org/playground/#/transition"},"https://eva.js.org/playground/#/transition")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://eva.js.org/playground/#/transition2"},"https://eva.js.org/playground/#/transition2"))),(0,r.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,r.kt)("h3",{id:"\u4f7f\u7528-npm"},"\u4f7f\u7528 NPM"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @eva/plugin-transition\n")),(0,r.kt)("h3",{id:"\u5728\u6d4f\u89c8\u5668\u4e2d"},"\u5728\u6d4f\u89c8\u5668\u4e2d"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<script src="https://unpkg.com/@eva/plugin-transition@1.1.x/dist/EVA.plugin.transition.min.js"><\/script>\n')),(0,r.kt)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { Game, GameObject, resource, RESOURCE_TYPE } from '@eva/eva.js'\nimport { RendererSystem } from '@eva/plugin-renderer'\nimport { Img, ImgSystem } from '@eva/plugin-renderer-img'\nimport { Transition, TransitionSystem } from '@eva/plugin-transition'\n\nresource.addResource([\n  {\n    name: 'heart',\n    type: RESOURCE_TYPE.IMAGE,\n    src: {\n      image: {\n        type: 'png',\n        url: '//gw.alicdn.com/bao/uploaded/TB1lVHuaET1gK0jSZFhXXaAtVXa-200-200.png'\n      }\n    },\n    preload: false\n  }\n])\n\nconst game = new Game({\n  systems: [\n    new RendererSystem({\n      canvas: document.querySelector('#canvas'),\n      width: 750,\n      height: 1000\n    }),\n    new ImgSystem(),\n    new TransitionSystem()\n  ]\n})\n\nconst image = new GameObject('image', {\n  size: { width: 200, height: 200 },\n  origin: { x: 0, y: 0 },\n  position: {\n    x: 0,\n    y: 0\n  },\n  anchor: { x: 0.5, y: 0.5 }\n})\nconst img = image.addComponent(\n  new Img({\n    resource: 'heart'\n  })\n)\n\nconst animation = image.addComponent(new Transition())\nanimation.group = {\n  idle: [\n    {\n      name: 'scale.x',\n      component: image.transform,\n      values: [\n        {\n          time: 0,\n          value: 1,\n          tween: 'ease-out'\n        },\n        {\n          time: 300,\n          value: 1.2,\n          tween: 'ease-in'\n        },\n        {\n          time: 600,\n          value: 1\n        }\n      ]\n    },\n    {\n      name: 'scale.y',\n      component: image.transform,\n      values: [\n        {\n          time: 0,\n          value: 1,\n          tween: 'ease-out'\n        },\n        {\n          time: 300,\n          value: 1.2,\n          tween: 'ease-in'\n        },\n        {\n          time: 600,\n          value: 1\n        }\n      ]\n    }\n  ],\n  move: [\n    {\n      name: 'position.x',\n      component: image.transform,\n      values: [\n        {\n          time: 0,\n          value: 1,\n          tween: 'ease-out'\n        },\n        {\n          time: 300,\n          value: 300,\n          tween: 'ease-in'\n        }\n      ]\n    },\n    {\n      name: 'position.y',\n      component: image.transform,\n      values: [\n        {\n          time: 0,\n          value: 1,\n          tween: 'ease-in'\n        },\n        {\n          time: 300,\n          value: 300\n        }\n      ]\n    }\n  ]\n}\n\nanimation.play('move', 1)\nanimation.on('finish', name => {\n  name === 'move' && animation.play('idle', 5)\n})\n\ngame.scene.addChild(image)\n")),(0,r.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,r.kt)("h3",{id:"group-object"},"group: ",(0,r.kt)("inlineCode",{parentName:"h3"},"Object")),(0,r.kt)("p",null,"\u5c5e\u6027\u53d8\u5316\u7684\u65f6\u95f4\u8f74\uff0c\u662f\u4e00\u4e2a\u5bf9\u8c61\uff0c\u6bcf\u4e2a\u5c5e\u6027\u5c06\u5bf9\u5e94\u4e00\u4e2a\u52a8\u753b\uff0c\u5728\u4e00\u4e2a gameObject \u4e0a\u53ef\u4ee5\u914d\u7f6e\u591a\u4e2a\u52a8\u753b\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const gameObject = new GameObject()\nlet transition = gameObject.addComponent(new Transition())\ntransition.group = {\n  up: [\n    {\n      component: gameObject.transform,\n      name: 'position.y',\n      values: [\n        {\n          time: 0,\n          tween: 'linear',\n          value: 10\n        }\n      ]\n    },\n    {\n      component: gameObject.transform,\n      name: 'position.y',\n      values: [\n        {\n          time: 1,\n          tween: 'linear',\n          value: 20\n        }\n      ]\n    }\n  ]\n}\n")),(0,r.kt)("h5",{id:"component"},"component"),(0,r.kt)("p",null,"\u9700\u8981\u53d8\u5316\u7684 component"),(0,r.kt)("h5",{id:"name-string"},"name: ",(0,r.kt)("inlineCode",{parentName:"h5"},"String")),(0,r.kt)("p",null,"\u9700\u8981\u53d8\u5316\u7684 component \u7684\u5c5e\u6027\uff0c\u6bd4\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},"component.position.x")," \u5199\u6210 ",(0,r.kt)("inlineCode",{parentName:"p"},"'position.x'")),(0,r.kt)("h5",{id:"values-array"},"values: ",(0,r.kt)("inlineCode",{parentName:"h5"},"Array")),(0,r.kt)("p",null,"\u65f6\u95f4\u8f74\u5217\u8868\uff0c\u65f6\u95f4\u5bf9\u5e94\u7684\u4f4d\u7f6e\uff0c\u548c\u5230\u4e0b\u4e00\u4e2a\u65f6\u95f4\u70b9\u6240\u7528\u7684\u7f13\u52a8\u51fd\u6570"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"time: ",(0,r.kt)("inlineCode",{parentName:"li"},"number")," \u53d8\u5316\u6240\u5bf9\u5e94\u7684\u65f6\u95f4"),(0,r.kt)("li",{parentName:"ul"},"value: ",(0,r.kt)("inlineCode",{parentName:"li"},"number | string")," \u5f53\u524d\u65f6\u95f4\u6240\u5bf9\u5e94\u7684\u503c"),(0,r.kt)("li",{parentName:"ul"},"tween \u7f13\u52a8\u51fd\u6570\uff0c\u53ef\u9009 ",(0,r.kt)("inlineCode",{parentName:"li"},"linear"),",",(0,r.kt)("inlineCode",{parentName:"li"},"ease"),",",(0,r.kt)("inlineCode",{parentName:"li"},"ease-in"),",",(0,r.kt)("inlineCode",{parentName:"li"},"ease-out"),",",(0,r.kt)("inlineCode",{parentName:"li"},"ease-in-out"),",",(0,r.kt)("inlineCode",{parentName:"li"},"bounce-in"),",",(0,r.kt)("inlineCode",{parentName:"li"},"bounce-out"),",",(0,r.kt)("inlineCode",{parentName:"li"},"bounce-in-out"))),(0,r.kt)("h2",{id:"\u65b9\u6cd5"},"\u65b9\u6cd5"),(0,r.kt)("h3",{id:"playname-iteration"},"play(name, iteration)"),(0,r.kt)("p",null,"\u64ad\u653e\u52a8\u753b\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"name")," \u53c2\u6570\u53ef\u9009\uff0c\u4e0d\u586b\u5199\u64ad\u653e\u7b2c\u4e00\u4e2a\u52a8\u753b\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"iteration")," \u662f\u5faa\u73af\u6b21\u6570\uff0c\u9ed8\u8ba4\u4e3a 1\uff0c\u8868\u793a\u64ad\u653e\u4e00\u6b21\u3002"),(0,r.kt)("h3",{id:"stopname"},"stop(name)"),(0,r.kt)("p",null,"\u505c\u6b62\u52a8\u753b ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," \u53c2\u6570\u53ef\u9009\uff0c\u4e0d\u4f20\u5165 ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," \u5219\u505c\u6b62\u6240\u6709\u52a8\u753b\u3002"),(0,r.kt)("h2",{id:"\u4e8b\u4ef6"},"\u4e8b\u4ef6"),(0,r.kt)("h3",{id:"finish"},"finish"),(0,r.kt)("p",null,"\u52a8\u753b\u7ed3\u675f\u65f6\u89e6\u53d1"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"transition.on('finish', animationName => {})\n")))}c.isMDXComponent=!0}}]);