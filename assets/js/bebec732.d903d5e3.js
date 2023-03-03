"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[75391],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>c});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),u=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=u(t.components);return a.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},p=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),p=u(n),c=r,g=p["".concat(s,".").concat(c)]||p[c]||d[c]||l;return n?a.createElement(g,i(i({ref:e},m),{},{components:n})):a.createElement(g,i({ref:e},m))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=p;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},16722:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const l={},i="End-to-End Testing Source for Cloud",o={unversionedId:"integrations/sources/e2e-test-cloud",id:"integrations/sources/e2e-test-cloud",title:"End-to-End Testing Source for Cloud",description:"Overview",source:"@site/../docs/integrations/sources/e2e-test-cloud.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/e2e-test-cloud",permalink:"/integrations/sources/e2e-test-cloud",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/sources/e2e-test-cloud.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Dynamodb",permalink:"/integrations/sources/dynamodb"},next:{title:"End-to-End Testing Source",permalink:"/integrations/sources/e2e-test"}},s={},u=[{value:"Overview",id:"overview",level:2},{value:"Mode",id:"mode",level:2},{value:"Continuous Feed",id:"continuous-feed",level:3},{value:"Changelog",id:"changelog",level:2}],m={toc:u};function d(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"end-to-end-testing-source-for-cloud"},"End-to-End Testing Source for Cloud"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"This is a mock source for testing the Airbyte pipeline. It can generate arbitrary data streams. It is a subset of what is in ",(0,r.kt)("a",{parentName:"p",href:"/integrations/sources/e2e-test"},"End-to-End Testing Source")," in Open-Source to avoid Airbyte Cloud users accidentally in curring a huge bill."),(0,r.kt)("h2",{id:"mode"},"Mode"),(0,r.kt)("h3",{id:"continuous-feed"},"Continuous Feed"),(0,r.kt)("p",null,"This mode allows users to specify a single-stream or multi-stream catalog with arbitrary schema. The schema should be compliant with Json schema ",(0,r.kt)("a",{parentName:"p",href:"https://json-schema.org/draft-07/json-schema-release-notes.html"},"draft-07"),"."),(0,r.kt)("p",null,"The single-stream catalog config exists just for convenient, since in many testing cases, one stream is enough. If only one stream is specified in the multi-stream catalog config, it is equivalent to a single-stream catalog config."),(0,r.kt)("p",null,"Here is its configuration:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Mock Catalog Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Parameters"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Single-stream"),(0,r.kt)("td",{parentName:"tr",align:null},"stream name"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the stream in the catalog.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"stream schema"),(0,r.kt)("td",{parentName:"tr",align:null},"json"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Json schema of the stream in the catalog. It must be a valid Json schema.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"stream duplication"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"Duplicate the stream N times to quickly create a multi-stream catalog.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Multi-stream"),(0,r.kt)("td",{parentName:"tr",align:null},"streams and schemas"),(0,r.kt)("td",{parentName:"tr",align:null},"json"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"A Json object specifying multiple data streams and their schemas. Each key in this object is one stream name. Each value is the schema for that stream.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Both"),(0,r.kt)("td",{parentName:"tr",align:null},"max records"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"100"),(0,r.kt)("td",{parentName:"tr",align:null},"The number of record messages to emit from this connector. Min 1. Max 100 billion.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"random seed"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"current time millis"),(0,r.kt)("td",{parentName:"tr",align:null},"The seed is used in random Json object generation. Min 0. Max 1 million.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"message interval"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"The time interval between messages in millisecond. Min 0 ms. Max 60000 ms (1 minute).")))),(0,r.kt)("h2",{id:"changelog"},"Changelog"),(0,r.kt)("p",null,"The OSS and Cloud variants have the same version number. The Cloud variant was initially released at version ",(0,r.kt)("inlineCode",{parentName:"p"},"1.0.0"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Version"),(0,r.kt)("th",{parentName:"tr",align:null},"Date"),(0,r.kt)("th",{parentName:"tr",align:null},"Pull request"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2.1.4"),(0,r.kt)("td",{parentName:"tr",align:null},"2023-03-01"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/23656"},"23656")),(0,r.kt)("td",{parentName:"tr",align:null},"Fix inheritance between e2e-test and e2e-test-cloud")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0.1.0"),(0,r.kt)("td",{parentName:"tr",align:null},"2021-07-23"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/9720"},"9720")),(0,r.kt)("td",{parentName:"tr",align:null},"Initial release.")))))}d.isMDXComponent=!0}}]);