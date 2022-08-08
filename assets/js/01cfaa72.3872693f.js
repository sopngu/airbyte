"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[9674],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=u(n),d=o,m=h["".concat(l,".").concat(d)]||h[d]||p[d]||i;return n?a.createElement(m,r(r({ref:t},c),{},{components:n})):a.createElement(m,r({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var u=2;u<i;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},34349:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var a=n(87462),o=(n(67294),n(3905));const i={},r="UX Handbook",s={unversionedId:"connector-development/ux-handbook",id:"connector-development/ux-handbook",title:"UX Handbook",description:"Connector Development UX Handbook",source:"@site/../docs/connector-development/ux-handbook.md",sourceDirName:"connector-development",slug:"/connector-development/ux-handbook",permalink:"/connector-development/ux-handbook",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/connector-development/ux-handbook.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Best Practices",permalink:"/connector-development/best-practices"},next:{title:"Contributing to Airbyte",permalink:"/contributing-to-airbyte/"}},l={},u=[{value:"Connector Development UX Handbook",id:"connector-development-ux-handbook",level:2},{value:"Overview",id:"overview",level:3},{value:"How to use this handbook",id:"how-to-use-this-handbook",level:3},{value:"Definition of UX-impacting changes",id:"definition-of-ux-impacting-changes",level:3},{value:"Guiding Principles",id:"guiding-principles",level:3},{value:"Trust &amp; Reliability are the top concerns",id:"trust--reliability-are-the-top-concerns",level:4},{value:"Speed",id:"speed",level:4},{value:"Airbyte&#39;s Target Personas",id:"airbytes-target-personas",level:3},{value:"Specific Guidelines",id:"specific-guidelines",level:2},{value:"Input Configuration",id:"input-configuration",level:3},{value:"Output Data &amp; Schemas",id:"output-data--schemas",level:3},{value:"Strongly Favor ELT over ETL",id:"strongly-favor-elt-over-etl",level:4},{value:"Describe output schemas as completely and reliably as possible",id:"describe-output-schemas-as-completely-and-reliably-as-possible",level:4},{value:"Be very cautious about breaking changes to output schemas",id:"be-very-cautious-about-breaking-changes-to-output-schemas",level:4},{value:"Prerequisite Configurations &amp; assumptions",id:"prerequisite-configurations--assumptions",level:3},{value:"External Documentation",id:"external-documentation",level:3}],c={toc:u};function p(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ux-handbook"},"UX Handbook"),(0,o.kt)("h2",{id:"connector-development-ux-handbook"},"Connector Development UX Handbook"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Connector UX Handbook",src:n(81143).Z,width:"345",height:"351"})),(0,o.kt)("h3",{id:"overview"},"Overview"),(0,o.kt)("p",null,"The goal of this handbook is to allow scaling high quality decision making when developing connectors."),(0,o.kt)("p",null,"The Handbook is a living document, meant to be continuously updated. It is the best snapshot we can produce of the lessons learned from building and studying hundreds of connectors. While helpful, this snapshot is never perfect. Therefore, this Handbook is not a replacement for good judgment, but rather learnings that should help guide your work."),(0,o.kt)("h3",{id:"how-to-use-this-handbook"},"How to use this handbook"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"When thinking about a UX-impacting decision regarding connectors, consult this Handbook."),(0,o.kt)("li",{parentName:"ol"},"If the Handbook does not answer your question, then consider proposing an update to the Handbook if you believe your question will be applicable to more cases.")),(0,o.kt)("h3",{id:"definition-of-ux-impacting-changes"},"Definition of UX-impacting changes"),(0,o.kt)("p",null,"UX-impacting changes are ones which impact how the user directly interacts with, consumes, or perceives the product."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Examples"),":"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Public-facing documentation"),(0,o.kt)("li",{parentName:"ol"},"Input configuration"),(0,o.kt)("li",{parentName:"ol"},"Output schema"),(0,o.kt)("li",{parentName:"ol"},"Prerequisite configuration by the user (e.g: you need to link an instagram account to your Facebook page for this connector to work properly)"),(0,o.kt)("li",{parentName:"ol"},"Consolidating two connectors into one, or splitting one connector into two"),(0,o.kt)("li",{parentName:"ol"},"Wait time for human-at-keyboard"),(0,o.kt)("li",{parentName:"ol"},"Anything that negatively impacts the runtime of the connector (e.g: a change that makes the runtime go from 10 minutes to 20 minutes on the same data size)"),(0,o.kt)("li",{parentName:"ol"},"Any other change which you deem UX-impacting",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"The guide can\u2019t cover everything, so this is an escape hatch based on the developer\u2019s judgment.")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Examples of UX-impacting changes"),":"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Adding or removing an input field to/from spec.json"),(0,o.kt)("li",{parentName:"ol"},"Adding or removing fields from the output schema"),(0,o.kt)("li",{parentName:"ol"},"Adding a new stream or category of stream (e.g: supporting views in databases)"),(0,o.kt)("li",{parentName:"ol"},"Adding OAuth support")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Examples of non-UX-impacting changes"),":"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Refactoring without changing functionality"),(0,o.kt)("li",{parentName:"ol"},"Bugfix (e.g: pagination doesn\u2019t work correctly)")),(0,o.kt)("h3",{id:"guiding-principles"},"Guiding Principles"),(0,o.kt)("p",null,"Would you trust AWS or Docker if it only worked 70, 80, or 90% of the time or if it leaked your business secrets? Yeah, me neither. You would only build on a tool if it worked at least 99% of the time. Infrastructure should give you back your time, rather than become a debugging timesink."),(0,o.kt)("p",null,"The same is true with Airbyte: if it worked less than 99% of the time, many users will stop using it. Airbyte is an infrastructure component within a user\u2019s data pipeline. Our users\u2019 goal is to move data; Airbyte is an implementation detail. In that sense, it is much closer to Terraform, Docker, or AWS than an end application."),(0,o.kt)("h4",{id:"trust--reliability-are-the-top-concerns"},"Trust & Reliability are the top concerns"),(0,o.kt)("p",null,"Our users have the following hierarchy of needs:"," "),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(29251).Z,width:"1912",height:"1432"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Security")),(0,o.kt)("p",null,"Users often move very confidential data like revenue numbers, salaries, or confidential documents through Airbyte. A user therefore must trust that their data is secure. This means no leaking credentials in logs or plain text, no vulnerabilities in the product, no frivolous sharing of credentials or data over internal slack channels, video calls, or other communications etc."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Data integrity")),(0,o.kt)("p",null,"Data replicated by Airbyte must be correct and complete. If a user moves data with Airbyte, then all of the data must be present, and it must all be correct - no corruption, incorrect values, or wrongly formatted data."),(0,o.kt)("p",null,"Some tricky examples which can break data integrity if not handled correctly:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Zipcodes for the US east coast should not lose their leading zeros because of being detected as integer"),(0,o.kt)("li",{parentName:"ul"},"Database timezones could affect the value of timestamps"),(0,o.kt)("li",{parentName:"ul"},"Esoteric text values (e.g: weird UTF characters)")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Reliability")),(0,o.kt)("p",null,"A connector needs to be reliable. Otherwise, a user will need to spend a lot of time debugging, and at that point, they\u2019re better off using a competing product. The connector should be able to handle large inputs, weirdly formatted inputs, all data types, and basically anything a user should throw at it."),(0,o.kt)("p",null,"In other words, a connector should work 100% of the time, but 99.9% is occasionally acceptable."),(0,o.kt)("h4",{id:"speed"},"Speed"),(0,o.kt)("p",null,"Sync speed minimizes the time needed for deriving value from data. It also provides a better user experience as it allows quick iteration on connector configurations without suffering through long wait times."," "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Ease of use")),(0,o.kt)("p",null,"People love and trust a product that is easy to use. This means that it works as quickly as possible, introduces no friction, and uses sensible defaults that are good enough for 95% of users."),(0,o.kt)("p",null,"An important component of usability is predictability. That is, as much as possible, a user should know before running a connector what its output will be and what the different tables will mean."),(0,o.kt)("p",null,"Ideally, they would even see an ERD describing the output schema they can expect to find in the destination. (This particular feature is tracked ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/issues/3731"},"here"),")."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Feature Set")),(0,o.kt)("p",null,"Our connectors should cover as many use cases as is feasible. While it may not always work like that given our incremental delivery preference, we should always strive to provide the most featureful connectors which cover as much of the underlying API or database surface as possible."),(0,o.kt)("p",null,"There is also a tension between featureset and ease of use. The more features are available, the more thought it takes to make the product easy and intuitive to use. We\u2019ll elaborate on this later."),(0,o.kt)("h3",{id:"airbytes-target-personas"},"Airbyte's Target Personas"),(0,o.kt)("p",null,"Without repeating too many details mentioned elsewhere, the important thing to know is Airbyte serves all the following personas:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"Persona")),(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"Level of technical knowledge")))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Data Analyst"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("p",null,"Proficient with:",(0,o.kt)("br",null),(0,o.kt)("br",null),"Data manipulation tools like Excel or SQL",(0,o.kt)("br",null),"Dashboard tools like Looker",(0,o.kt)("br",null),(0,o.kt)("br",null),"Not very familiar with reading API docs and doesn't know what a curl request is. But might be able to generate an API key if you tell them exactly how."))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Analytics Engineer"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("p",null,"Proficient with:",(0,o.kt)("br",null),(0,o.kt)("br",null),"SQL ","&"," DBT",(0,o.kt)("br",null),"Git",(0,o.kt)("br",null),"A scripting language like Python",(0,o.kt)("br",null),"Shallow familiarity with infra tools like Docker",(0,o.kt)("br",null),(0,o.kt)("br",null),"Much more technical than a data analyst, but not as much as a data engineer"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Data Engineer"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("p",null,"Proficient with:",(0,o.kt)("br",null),(0,o.kt)("br",null),"SQL ","&"," DBT",(0,o.kt)("br",null),"Git",(0,o.kt)("br",null),"2 or more programming languages",(0,o.kt)("br",null),"Infra tools like Docker or Kubernetes",(0,o.kt)("br",null),"Cloud technologies like AWS or GCP",(0,o.kt)("br",null),"Building or consuming APIs",(0,o.kt)("br",null),"orhestartion tools like Airflow",(0,o.kt)("br",null),(0,o.kt)("br",null),"The most technical persona we serve. Think of them like an engineer on your team"))))),(0,o.kt)("p",null,"Keep in mind that the distribution of served personas will differ per connector. Data analysts are highly unlikely to form the majority of users for a very technical connector like say, Kafka."),(0,o.kt)("h2",{id:"specific-guidelines"},"Specific Guidelines"),(0,o.kt)("h3",{id:"input-configuration"},"Input Configuration"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"aka spec.json")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Avoid configuration completely when possible")),(0,o.kt)("p",null,"Configuration means more work for the user and more chances for confusion, friction, or misconfiguration. If I could wave a magic wand, a user wouldn\u2019t have to configure anything at all. Unfortunately, this is not reality, and some configuration is strictly required. When this is the case, follow the guidelines below."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Avoid exposing implementation details in configuration")),(0,o.kt)("p",null,"If a configuration controls an implementation detail (like how many retries a connector should make before failing), then there should be almost no reason to expose this. If you feel a need to expose it, consider it might be a smell that the connector implementation is not robust."),(0,o.kt)("p",null,"Put another way, if a configuration tells the user how to do its job of syncing data rather than what job to achieve, it\u2019s a code smell."),(0,o.kt)("p",null,"For example, the memory requirements for a database connector which syncs a table with very wide rows (50mb rows) can be very different than when syncing a table with very narrow rows (10kb per row). In this case, it may be acceptable to ask the user for some sort of \u201chint\u201d/tuning parameter in configuration (hidden behind advanced configuration) to ensure the connector performs reliably or quickly. But even then, this option would strictly be a necessary evil/escape hatch. It is much more preferable for the connector to auto-detect what this setting should be and never need to bother the user with it."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Minimize required configurations by setting defaults whenever possible")),(0,o.kt)("p",null,"In many cases, a configuration can be avoided by setting a default value for it but still making it possible to set other values. Whenever possible, follow this pattern."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Hide technical or niche parameters under an \u201cAdvanced\u201d section")),(0,o.kt)("p",null,"Sometimes, it\u2019s inevitable that we need to expose some advanced or technical configuration. For example, the option to upload a TLS certificate to connect to a database, or the option to configure the number of retries done by an API connector: while these may be useful to some small percentage of users, it\u2019s not worth making all users think or get confused about them."),(0,o.kt)("p",null,"Note: this is currently blocked by this ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/issues/3681"},"issue"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Add a \u201ctitle\u201d and \u201cdescription\u201d property for every input parameter")),(0,o.kt)("p",null,"This displays this information to the user in a polished way and gives less technical users (e.g: analysts) confidence that they can use this product. Be specific and unambiguous in the wording, explaining more than just the field name alone provides."),(0,o.kt)("p",null,"For example, the following spec:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "object",\n  "properties": {\n    "user_name": {\n      "type": "string"\n    }\n  }\n}\n')),(0,o.kt)("p",null,"produces the following input field in the UI:"," "),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(47173).Z,width:"664",height:"83"})),(0,o.kt)("p",null,"Whereas the following specification:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "object",\n  "properties": {\n    "user_name": {\n      "type": "string",\n      "description": "The username you use to login to the database",\n      "title": "Username"\n    }\n  }\n}\n')),(0,o.kt)("p",null,"produces the following UI:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(34964).Z,width:"755",height:"100"})),(0,o.kt)("p",null,"The title should use Pascal Case \u201cwith spaces\u201d e.g: \u201cAttribution Lookback Window\u201d, \u201cHost URL\u201d, etc..."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Clearly document the meaning and impact of all parameters")),(0,o.kt)("p",null,"All configurations must have an unmistakable explanation describing their purpose and impact, even the obvious ones. Remember, something that is obvious to an analyst may not be obvious to an engineer, and vice-versa."),(0,o.kt)("p",null,"For example, in some Ads APIs like Facebook, the user\u2019s data may continue to be updated up to 28 days after it is created. This happens because a user may take action because of an ad (like buying a product) many days after they see the ad. In this case, the user may want to configure a \u201clookback\u201d window for attributing."),(0,o.kt)("p",null,"Adding a parameter \u201cattribution","_","lookback","_","window\u201d with no explanation might confuse the user more than it helps them. Instead, we should add a clear title and description which describes what this parameter is and how different values will impact the data output by the connector."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Document how users can obtain configuration parameters")),(0,o.kt)("p",null,"If a user needs to obtain an API key or host name, tell them exactly where to find it. Ideally you would show them screenshots, though include a date and API version in those if possible, so it\u2019s clear when they\u2019ve aged out of date."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Links should point to page anchors where applicable"),". "),(0,o.kt)("p",null,'Often, you are trying to redirect the user to a specific part of the page. For example, if you wanted to point someone to the "Input Configuration" section of this doc, it is better to point them to ',(0,o.kt)("inlineCode",{parentName:"p"},"https://docs.airbyte.com/connector-development/ux-handbook#input-configuration")," instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"https://docs.airbyte.com/connector-development/ux-handbook"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Fail fast & actionably")),(0,o.kt)("p",null,"A user should not be able to configure something that will not work. If a user\u2019s configuration is invalid, we should inform them as precisely as possible about what they need to do to fix the issue."),(0,o.kt)("p",null,"One helpful aid is to use the json-schema \u201cpattern\u201d keyword to accept inputs which adhere to the correct input shape."),(0,o.kt)("h3",{id:"output-data--schemas"},"Output Data & Schemas"),(0,o.kt)("h4",{id:"strongly-favor-elt-over-etl"},"Strongly Favor ELT over ETL"),(0,o.kt)("p",null,"Extract-Load-Transform (ELT) means extracting and loading the data into a destination while leaving its format/schema as unchanged as possible, and making transformation the responsibility of the consumer. By contrast, ETL means transforming data before it is sent to the destination, for example changing its schema to make it easier to consume in the destination."),(0,o.kt)("p",null,"When extracting data, strongly prefer ELT to ETL for the following reasons:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Removes Airbyte as a development bottleneck")),(0,o.kt)("p",null,"If we get into the habit of structuring the output of each source according to how some users want to use it, then we will invite more feature requests from users asking us to transform data in a particular way. This introduces Airbyte\u2019s dev team as an unnecessary bottleneck for these users."),(0,o.kt)("p",null,"Instead, we should set the standard that a user should be responsible for transformations once they\u2019ve loaded data in a destination."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Will always be backwards compatible")),(0,o.kt)("p",null,"APIs already follow strong conventions to maintain backwards compatibility. By transforming data, we break this guarantee, which means we may break downstream flows for our users."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Future proof")),(0,o.kt)("p",null,"We may have a vision of what a user needs today. But if our persona evolves next year, then we\u2019ll probably also need to adapt our transformation logic, which would require significant dev and data migration efforts."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"More flexible")),(0,o.kt)("p",null,"Current users have different needs from data. By being opinionated on how they should consume data, we are effectively favoring one user persona over the other. While there might be some cases where this is warranted, it should be done with extreme intentionality."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"More efficient")),(0,o.kt)("p",null,"With ETL, if the \u201cT\u201d ever needs to change, then we need to re-extract all data for all users. This is computationally and financially expensive and will place a lot of pressure on the source systems as we re-extract all data."),(0,o.kt)("h4",{id:"describe-output-schemas-as-completely-and-reliably-as-possible"},"Describe output schemas as completely and reliably as possible"),(0,o.kt)("p",null,"Our most popular destinations are strongly typed like Postgres, BigQuery, or Parquet & Avro."),(0,o.kt)("p",null,"Being strongly typed enables optimizations and syntactic sugar to make it very easy & performant for the user to query data."),(0,o.kt)("p",null,"To provide the best UX when moving data to these destinations, Airbyte source connectors should describe their schema in as much detail as correctness allows."),(0,o.kt)("p",null,"In some cases, describing schemas is impossible to do reliably. For example, MongoDB doesn\u2019t have any schemas. To infer the schema, one needs to read all the records in a particular table. And even then, once new records are added, they also must all be read in order to update the inferred schema. At the time of writing, this is infeasible to do performantly in Airbyte since we do not have an intermediate staging area to do this. In this case, we should do the \u201cbest we can\u201d to describe the schema, keeping in mind that reliability of the described schema is more important than expressiveness."),(0,o.kt)("p",null,"That is, we would rather not describe a schema at all than describe it incorrectly, as incorrect descriptions ",(0,o.kt)("strong",{parentName:"p"},"will")," lead to failures downstream."),(0,o.kt)("p",null,"To keep schema descriptions reliable, ",(0,o.kt)("a",{parentName:"p",href:"https://docs.airbyte.io/connector-development/cdk-python/schemas#generating-schemas-from-openapi-definitions"},"automate schema generation")," whenever possible."),(0,o.kt)("h4",{id:"be-very-cautious-about-breaking-changes-to-output-schemas"},"Be very cautious about breaking changes to output schemas"),(0,o.kt)("p",null,"Assuming we follow ELT over ETL, and automate generation of output schemas, this should come up very rarely. However, it is still important enough to warrant mention."),(0,o.kt)("p",null,"If for any reason we need to change the output schema declared by a connector in a backwards breaking way, consider it a necessary evil that should be avoided if possible. Basically, the only reasons for a backwards breaking change should be:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"a connector previously had an incorrect schema, or"),(0,o.kt)("li",{parentName:"ul"},"It was not following ELT principles and is now being changed to follow them")),(0,o.kt)("p",null,"Other breaking changes should probably be escalated for approval."),(0,o.kt)("h3",{id:"prerequisite-configurations--assumptions"},"Prerequisite Configurations & assumptions"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Document all assumptions")),(0,o.kt)("p",null,"If a connector makes assumptions about the underlying data source, then these assumptions must be documented. For example: for some features of the Facebook Pages connector to work, a user must have an Instagram Business account linked to an Instagram page linked to their Facebook Page. In this case, the externally facing documentation page for the connector must be very clear about this."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Provide how-tos for prerequisite configuration")),(0,o.kt)("p",null,"If a user needs to set up their data source in a particular way to pull data, then we must provide documentation for how they should do it."),(0,o.kt)("p",null,"For example, to set up CDC for databases, a user must create logical replication slots and do a few other things. These steps should be documented with examples or screenshots wherever possible (e.g: here are the SQL statements you need to run, with the following permissions, on the following screen, etc.)"),(0,o.kt)("h3",{id:"external-documentation"},"External Documentation"),(0,o.kt)("p",null,"This section is concerned with the external-facing documentation of a connector that goes in ",(0,o.kt)("a",{parentName:"p",href:"https://docs.airbyte.io"},"https://docs.airbyte.io")," e.g: ",(0,o.kt)("a",{parentName:"p",href:"https://docs.airbyte.io/integrations/sources/amazon-seller-partner"},"this one")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Documentation should communicate persona-impacting behaviors")),(0,o.kt)("p",null,"When writing documentation ask: who is the intended target persona for a piece of documentation, and what information do they need to understand how this connector impacts their workflows?"),(0,o.kt)("p",null,"For example, data analysts & analytics engineers probably don\u2019t care if we use Debezium for database replication. To them, the important thing is that we provide Change Data Capture (CDC) -- Debezium is an implementation detail. Therefore, when communicating information about our database replication logic, we should emphasize the end behaviors, rather than implementation details."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example"),": Don\u2019t say: \u201cDebezium cannot process UTF-16 character set\u201c."),(0,o.kt)("p",null,"Instead, say: \u201cWhen using CDC, UTF-16 characters are not currently supported\u201d"),(0,o.kt)("p",null,"A user who doesn\u2019t already know what Debezium is might be left confused by the first phrasing, so we should use the second phrasing."),(0,o.kt)("p",null,"*",": ",(0,o.kt)("em",{parentName:"p"},"this is a fake example. AFAIK there is no such limitation in Debezi-- I mean, the Postgres connector.")))}p.isMDXComponent=!0},81143:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/uivsux-e9ea8aebc759d646ae4ce97922331846.png"},29251:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/ux_hierarchy_pyramid2-969ec27c9a44e3daa11fcff4e94bf2a8.png"},47173:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,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"},34964:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/ux_username_good-ee29f5600754abe6aaa6418879cca9bd.png"}}]);