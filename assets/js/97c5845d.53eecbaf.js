"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[1268],{92001:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=r(83117),o=(r(67294),r(3905));const a={},i="Gutendex",l={unversionedId:"integrations/sources/gutendex",id:"integrations/sources/gutendex",title:"Gutendex",description:"Overview",source:"@site/../docs/integrations/sources/gutendex.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/gutendex",permalink:"/integrations/sources/gutendex",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/sources/gutendex.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Gridly",permalink:"/integrations/sources/gridly"},next:{title:"Harness",permalink:"/integrations/sources/harness"}},s={},u=[{value:"Overview",id:"overview",level:2},{value:"Requirements",id:"requirements",level:2},{value:"<code>author_year_start</code> and <code>author_year_end</code>",id:"author_year_start-and-author_year_end",level:5},{value:"<code>copyright</code>",id:"copyright",level:5},{value:"<code>languages</code>",id:"languages",level:5},{value:"<code>search</code>",id:"search",level:5},{value:"<code>sort</code>",id:"sort",level:5},{value:"<code>topic</code>",id:"topic",level:5},{value:"Output schema",id:"output-schema",level:2},{value:"Setup guide",id:"setup-guide",level:2},{value:"Step 1: Set up the Gutendex connector in Airbyte",id:"step-1-set-up-the-gutendex-connector-in-airbyte",level:2},{value:"For Airbyte Cloud:",id:"for-airbyte-cloud",level:3},{value:"For Airbyte OSS:",id:"for-airbyte-oss",level:3},{value:"Supported sync modes",id:"supported-sync-modes",level:2},{value:"Performance considerations",id:"performance-considerations",level:2},{value:"Changelog",id:"changelog",level:2}],c={toc:u};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"gutendex"},"Gutendex"),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"The Gutendex source can sync data from the ",(0,o.kt)("a",{parentName:"p",href:"https://gutendex.com/"},"Gutendex API")),(0,o.kt)("h2",{id:"requirements"},"Requirements"),(0,o.kt)("p",null,"Gutendex requires no access token/API key to make requests.\nThe following (optional) parameters can be provided to the connector :-"),(0,o.kt)("hr",null),(0,o.kt)("h5",{id:"author_year_start-and-author_year_end"},(0,o.kt)("inlineCode",{parentName:"h5"},"author_year_start")," and ",(0,o.kt)("inlineCode",{parentName:"h5"},"author_year_end")),(0,o.kt)("p",null,"Use these to find books with at least one author alive in a given range of years. They must have positive (CE) or negative (BCE) integer values. "),(0,o.kt)("p",null,"For example, ",(0,o.kt)("inlineCode",{parentName:"p"},"/books?author_year_start=1800&author_year_end=1899")," gives books with authors alive in the 19th Century."),(0,o.kt)("hr",null),(0,o.kt)("h5",{id:"copyright"},(0,o.kt)("inlineCode",{parentName:"h5"},"copyright")),(0,o.kt)("p",null,"Use this to find books with a certain copyright status: true for books with existing copyrights, false for books in the public domain in the USA, or null for books with no available copyright information."),(0,o.kt)("hr",null),(0,o.kt)("h5",{id:"languages"},(0,o.kt)("inlineCode",{parentName:"h5"},"languages")),(0,o.kt)("p",null,"Use this to find books in any of a list of languages. They must be comma-separated, two-character language codes. For example, ",(0,o.kt)("inlineCode",{parentName:"p"},"/books?languages=en")," gives books in English, and ",(0,o.kt)("inlineCode",{parentName:"p"},"/books?languages=fr,fi")," gives books in either French or Finnish or both."),(0,o.kt)("hr",null),(0,o.kt)("h5",{id:"search"},(0,o.kt)("inlineCode",{parentName:"h5"},"search")),(0,o.kt)("p",null,"Use this to search author names and book titles with given words. They must be separated by a space (i.e. %20 in URL-encoded format) and are case-insensitive. For example, ",(0,o.kt)("inlineCode",{parentName:"p"},"/books?search=dickens%20great")," includes Great Expectations by Charles Dickens."),(0,o.kt)("hr",null),(0,o.kt)("h5",{id:"sort"},(0,o.kt)("inlineCode",{parentName:"h5"},"sort")),(0,o.kt)("p",null,"Use this to sort books: ascending for Project Gutenberg ID numbers from lowest to highest, descending for IDs highest to lowest, or popular (the default) for most popular to least popular by number of downloads."),(0,o.kt)("hr",null),(0,o.kt)("h5",{id:"topic"},(0,o.kt)("inlineCode",{parentName:"h5"},"topic")),(0,o.kt)("p",null,"Use this to search for a case-insensitive key-phrase in books' bookshelves or subjects. For example, ",(0,o.kt)("inlineCode",{parentName:"p"},"/books?topic=children"),' gives books on the "Children\'s Literature" bookshelf, with the subject "Sick children -- Fiction", and so on.'),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"output-schema"},"Output schema"),(0,o.kt)("p",null,"Lists of book information in the Project Gutenberg database are queried using the API at /books (e.g. gutendex.com/books). Book data will be returned in the format:-"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n    "count": <number>,\n    "next": <string or null>,\n    "previous": <string or null>,\n    "results": <array of Books>\n}\n')),(0,o.kt)("p",null,"where ",(0,o.kt)("inlineCode",{parentName:"p"},"results")," is an array of 0-32 book objects, next and previous are URLs to the next and previous pages of results, and count in the total number of books for the query on all pages combined."),(0,o.kt)("p",null,"By default, books are ordered by popularity, determined by their numbers of downloads from Project Gutenberg."),(0,o.kt)("p",null,"The source is capable of syncing the results stream."),(0,o.kt)("h2",{id:"setup-guide"},"Setup guide"),(0,o.kt)("h2",{id:"step-1-set-up-the-gutendex-connector-in-airbyte"},"Step 1: Set up the Gutendex connector in Airbyte"),(0,o.kt)("h3",{id:"for-airbyte-cloud"},"For Airbyte Cloud:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://cloud.airbyte.io/workspaces"},"Log into your Airbyte Cloud")," account."),(0,o.kt)("li",{parentName:"ol"},"In the left navigation bar, click ",(0,o.kt)("strong",{parentName:"li"},"Sources"),". In the top-right corner, click ",(0,o.kt)("strong",{parentName:"li"},"+new source"),"."),(0,o.kt)("li",{parentName:"ol"},"On the Set up the source page, select ",(0,o.kt)("strong",{parentName:"li"},"Gutendex")," from the Source type dropdown."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Set up source"),".")),(0,o.kt)("h3",{id:"for-airbyte-oss"},"For Airbyte OSS:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Navigate to the Airbyte Open Source dashboard."),(0,o.kt)("li",{parentName:"ol"},"Set the name for your source (Gutendex)."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Set up source"),".")),(0,o.kt)("h2",{id:"supported-sync-modes"},"Supported sync modes"),(0,o.kt)("p",null,"The Gutendex source connector supports the following ",(0,o.kt)("a",{parentName:"p",href:"https://docs.airbyte.com/cloud/core-concepts#connection-sync-modes"},"sync modes"),":"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Supported?"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Full Refresh Sync"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Incremental Sync"),(0,o.kt)("td",{parentName:"tr",align:"left"},"No")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Namespaces"),(0,o.kt)("td",{parentName:"tr",align:"left"},"No")))),(0,o.kt)("h2",{id:"performance-considerations"},"Performance considerations"),(0,o.kt)("p",null,"There is no published rate limit. However, since this data updates infrequently, it is recommended to set the update cadence to 24hr or higher."),(0,o.kt)("h2",{id:"changelog"},"Changelog"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"0.1.0"),(0,o.kt)("td",{parentName:"tr",align:"left"},"2022-10-17"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/18075"},"#18075")),(0,o.kt)("td",{parentName:"tr",align:"left"},"\ud83c\udf89 New Source: Gutendex API ","[low-code CDK]")))))}d.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),h=o,m=p["".concat(s,".").concat(h)]||p[h]||d[h]||a;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"}}]);