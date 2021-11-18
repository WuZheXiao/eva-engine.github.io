"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[35778],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(g,i(i({ref:t},p),{},{components:n})):a.createElement(g,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},47220:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),i=["components"],l={},s="Data Management",c={unversionedId:"tutorials/evaxPlugin",id:"tutorials/evaxPlugin",isDocsHomePage:!1,title:"Data Management",description:"Introduce",source:"@site/docs/tutorials/evaxPlugin.md",sourceDirName:"tutorials",slug:"/tutorials/evaxPlugin",permalink:"/docs/tutorials/evaxPlugin",editUrl:"https://github.com/eva-engine/eva-engine.github.io/tree/master/docs/tutorials/evaxPlugin.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"A11y \u65e0\u969c\u788d\u63d2\u4ef6",permalink:"/docs/tutorials/a11yPlugin"},next:{title:"Performance monitoring",permalink:"/docs/tutorials/performancePlugin"}},p=[{value:"Introduce",id:"introduce",children:[],level:2},{value:"Install",id:"install",children:[{value:"With NPM",id:"with-npm",children:[],level:3},{value:"In Browser",id:"in-browser",children:[],level:3}],level:2},{value:"Create store",id:"create-store",children:[],level:2},{value:"Initialize EVAX",id:"initialize-evax",children:[],level:2},{value:"Monitor data changes",id:"monitor-data-changes",children:[],level:2},{value:"update data",id:"update-data",children:[{value:"Update a single value",id:"update-a-single-value",children:[],level:3},{value:"evax.updateStore Update all values",id:"evaxupdatestore-update-all-values",children:[],level:3},{value:"evax.forceUpdateStore forces all values \u200b\u200bto be updated",id:"evaxforceupdatestore-forces-all-values-to-be-updated",children:[],level:3},{value:"Events trigger",id:"events-trigger",children:[],level:3}],level:2},{value:"Usage",id:"usage",children:[{value:"Create a text",id:"create-a-text",children:[],level:3}],level:2}],d={toc:p};function u(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"data-management"},"Data Management"),(0,r.kt)("h2",{id:"introduce"},"Introduce"),(0,r.kt)("p",null,"In react/vue, we often use redux/vuex for data management and maintain a unified set of data. Under the Eva.js system, we have designed a set of data management system called EVAX, ",(0,r.kt)("strong",{parentName:"p"},"through EVAX we can maintain For a common data, components on multiple different objects may use the same data for logical operation. ")),(0,r.kt)("p",null,"For example, the life value in the game will not only be displayed on the top of the person\u2019s head, but the characters in the game will also display different forms according to the number of life values. We bind the EVAX component to the game object to perform a certain data Monitor, if the data changes, you can manipulate the data or events on other components of the current game object."),(0,r.kt)("p",null,"Eva.js does not rely heavily on EVAX to develop games, and can be used as needed."),(0,r.kt)("h2",{id:"install"},"Install"),(0,r.kt)("h3",{id:"with-npm"},"With NPM"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @eva/plugin-evax\n")),(0,r.kt)("h3",{id:"in-browser"},"In Browser"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<script src="https://unpkg.com/@eva/plugin-evax@1.1.x/dist/EVA.plugin.EVAX.min.js"><\/script>\n')),(0,r.kt)("h2",{id:"create-store"},"Create store"),(0,r.kt)("p",null,"All data needs to be defined in advance, if it is not defined, it will not be monitored"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// Create Store\nconst store = {\n  user: {\n    name:'Mingfei',\n    age: 18\n  },\n  items: [\n    {\n      id: 1,\n      name: '20191111'\n    }\n  ]\n}\n")),(0,r.kt)("h2",{id:"initialize-evax"},"Initialize EVAX"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// Introduce the evax plugin\nimport {EvaXSystem, EvaX} from '@eva/plugin-evax'\n\n// Create a game and pass it to the store\nconst game = new Game({\n  autoStart: true, // optional\n  frameRate: 60\n})\nconst store = {a: 1}\nconst evaxSystem = new EvaXSystem({\n  store // Here pass the defined store\n})\ngame.addSystem(evaxSystem)\n\nconst evaxManager = new GameObject('evaxManager')\nevaxManager.addComponent(\n  new EvaX({\n    events: {\n      'store.a': () => {}\n    }\n  })\n)\n\ngame.scene.addChild(evaxMangager)\n")),(0,r.kt)("h2",{id:"monitor-data-changes"},"Monitor data changes"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// Add evax component\ngo.addComponent(\n  new EvaX({\n    events: {\n      'store.user': {\n        deep: true, // property changes under store.user will also trigger\n        handler(store, oldStore) {\n          console.log(this) // current component\n        }\n      },\n      'store.user.age'(store, oldStore) {},\n      'store.items.0'(store, oldStore) {\n        // The attribute change under 0 will not be triggered, if you need to monitor, you need to set deep\n      },\n      'store.items.0.name'(store, oldStore) {\n        // name change will trigger\n      },\n      popUp(arg1, arg2) {\n        // This is an event, refer to the following event trigger\n      }\n    }\n  })\n)\n")),(0,r.kt)("h3",{id:""}),(0,r.kt)("h2",{id:"update-data"},"update data"),(0,r.kt)("h3",{id:"update-a-single-value"},"Update a single value"),(0,r.kt)("p",null,"Directly modify the value on the object, if the value is the same as before, it will also trigger an event that listens for this value change"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"store.user.name ='Cailun'\n// or\nevaxSystem.store.user.name ='Cailun'\n")),(0,r.kt)("h3",{id:"evaxupdatestore-update-all-values"},"evax.updateStore Update all values"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Tip"),": updateStore and forceUpdateStore will only trigger the change of the last layer of attributes."),(0,r.kt)("p",null,"Full coverage mode updates, compare content changes, the changed content will trigger the update,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const newStore = {\n  user: {\n    name:'Cailun',\n    age: 18\n  }\n}\n\nevaxSystem.emit('evax.updateStore', newStore)\n")),(0,r.kt)("p",null,"The above operation will trigger the update of ",(0,r.kt)("inlineCode",{parentName:"p"},"store.user.name")," because the age has not changed"),(0,r.kt)("h3",{id:"evaxforceupdatestore-forces-all-values-to-be-updated"},"evax.forceUpdateStore forces all values \u200b\u200bto be updated"),(0,r.kt)("p",null,"Full coverage mode update, all values \u200b\u200bwill be updated once, triggering the listening events of all properties"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const newStore = {\n  user: {\n    name:'Cailun',\n    age: 18\n  }\n}\nevaxSystem.emit('evax.forceUpdateStore', newStore)\n")),(0,r.kt)("p",null,"The above operation will trigger the ",(0,r.kt)("inlineCode",{parentName:"p"},"store.user.name")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"store.user.age")," data change events, even if there is no change"),(0,r.kt)("h3",{id:"events-trigger"},"Events trigger"),(0,r.kt)("p",null,"Use the emit method to trigger an agreed event, the event ",(0,r.kt)("strong",{parentName:"p"},"don't")," use evax. at the beginning"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"evaxSystem.emit('popUp', arg1, arg2, //...) // Event convention, event **do not** use evax. at the beginning\n")),(0,r.kt)("p",null,"Monitoring method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// Add evax component\ngo.addComponent(\n  new EvaX({\n    events: {\n      popUp(arg1, arg2) {}\n    }\n  })\n)\n")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("h3",{id:"create-a-text"},"Create a text"),(0,r.kt)("p",null,"In this case, if the text on the Store changes, we modify the content of the text on the corresponding component"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// Create an object, the text component uses the name in the store\nconst go = new GameObject('go')\nconst txt = go.addComponent(new Text({ text:'' }))\n")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Generally speaking, our business logic is written in the script component. When the EVAX component receives the time or data change, the method on the script component is called."),(0,r.kt)("li",{parentName:"ol"},"Hang some components that need to be modified, such as Text, on the properties of the script component for subsequent operations.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// Create a custom component and put the method in the custom component\nclass AScriptComponent extends Component{\n  static componentName:'AScriptComponent',\n  start() {\n    this.txt = this.gameObject.getComponent('Text')\n    // Use evax in the component to bind the evax component first, get the evax object on the evax component, and perform event triggering and modification\n    const evax = this.gameObject.getComponent('EvaX')\n    this.evax = evax.evax\n  },\n  setName(store, oldStore) {\n    txt.text = store.user.name // Set new text content\n    setTimeout(()=>{\n      this.evax.emit('animationDown') // Notify that the modification is complete, and other components will take over the changes, not in this case\n      this.evax.store.age += 1 // other components will take over the changes, not in this case\n    }, 1000)\n  },\n  popUp(store) {\n    // Do event corresponding operations\n  }\n})\n\n// Add custom components\nconst aScript = go.addComponent(new AScriptComponent)\n")),(0,r.kt)("p",null,"Create an evax component, write the event that needs to be bound, and call the event on the custom component"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// Add evax component\ngo.addComponent(\n  new EvaX({\n    events: {\n      'store.user.name'(store, oldStore) {\n        // It is recommended to place the trigger method inside other custom components for use with subsequent scene editors\n        go.getComponent(AScriptComponent).setName(store, oldStore)\n      },\n      'store.user.age'(store, oldStore) {\n        // ...\n      },\n      popUp(...args) {\n        go.getComponent(AScriptComponent).popUp(...args)\n      }\n    }\n  })\n)\n")))}u.isMDXComponent=!0}}]);