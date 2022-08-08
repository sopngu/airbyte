"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[7163],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>d});var r=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},h=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),u=c(a),d=i,m=u["".concat(l,".").concat(d)]||u[d]||p[d]||o;return a?r.createElement(m,n(n({ref:t},h),{},{components:a})):r.createElement(m,n({ref:t},h))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,n=new Array(o);n[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,n[1]=s;for(var c=2;c<o;c++)n[c]=a[c];return r.createElement.apply(null,n)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},70953:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=a(87462),i=(a(67294),a(3905));const o={description:"Using Airbyte and MeiliSearch"},n="Save and Search Through Your Slack History on a Free Slack Plan",s={unversionedId:"archive/examples/slack-history",id:"archive/examples/slack-history",title:"Save and Search Through Your Slack History on a Free Slack Plan",description:"Using Airbyte and MeiliSearch",source:"@site/../docs/archive/examples/slack-history.md",sourceDirName:"archive/examples",slug:"/archive/examples/slack-history",permalink:"/archive/examples/slack-history",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/archive/examples/slack-history.md",tags:[],version:"current",frontMatter:{description:"Using Airbyte and MeiliSearch"}},l={},c=[{value:"1. Set Up MeiliSearch",id:"1-set-up-meilisearch",level:2},{value:"2. Replicate Your Slack Messages to MeiliSearch",id:"2-replicate-your-slack-messages-to-meilisearch",level:2},{value:"a. Set Up Airbyte",id:"a-set-up-airbyte",level:3},{value:"b. Set Up Airbyte\u2019s Slack Source Connector",id:"b-set-up-airbytes-slack-source-connector",level:3},{value:"c. Set Up Airbyte\u2019s MeiliSearch Destination Connector",id:"c-set-up-airbytes-meilisearch-destination-connector",level:3},{value:"d. Set Up the Replication",id:"d-set-up-the-replication",level:3},{value:"3. Search MeiliSearch",id:"3-search-meilisearch",level:2},{value:"4. Search via a UI",id:"4-search-via-a-ui",level:2},{value:"5. &quot;Productionizing&quot; Saving Slack History",id:"5-productionizing-saving-slack-history",level:2}],h={toc:c};function p(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,r.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"save-and-search-through-your-slack-history-on-a-free-slack-plan"},"Save and Search Through Your Slack History on a Free Slack Plan"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(8619).Z,width:"960",height:"321"})),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://slack.com/pricing/paid-vs-free"},"Slack free tier")," saves only the last 10K messages. For social Slack instances, it may be impractical to upgrade to a paid plan to retain these messages. Similarly, for an open-source project like ",(0,i.kt)("a",{parentName:"p",href:"/understanding-airbyte/airbyte-protocol#catalog"},"Airbyte")," where we interact with our community through a public Slack instance, the cost of paying for a seat for every Slack member is prohibitive."),(0,i.kt)("p",null,"However, searching through old messages can be really helpful. Losing that history feels like some advanced form of memory loss. What was that joke about Java 8 Streams? This contributor question sounds familiar\u2014haven't we seen it before? But you just can't remember!"),(0,i.kt)("p",null,"This tutorial will show you how you can, for free, use Airbyte to save these messages ","(","even after Slack removes access to them",")",". It will also provide you a convenient way to search through them."),(0,i.kt)("p",null,"Specifically, we will export messages from your Slack instance into an open-source search engine called ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/meilisearch/meilisearch"},"MeiliSearch"),". We will be focusing on getting this setup running from your local workstation. We will mention at the end how you can set up a more productionized version of this pipeline."),(0,i.kt)("p",null,"We want to make this process easy, so while we will link to some external documentation for further exploration, we will provide all the instructions you need here to get this up and running."),(0,i.kt)("h2",{id:"1-set-up-meilisearch"},"1. Set Up MeiliSearch"),(0,i.kt)("p",null,"First, let's get MeiliSearch running on our workstation. MeiliSearch has extensive docs for ",(0,i.kt)("a",{parentName:"p",href:"https://docs.meilisearch.com/reference/features/installation.html#download-and-launch"},"getting started"),". For this tutorial, however, we will give you all the instructions you need to set up MeiliSearch using Docker."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"docker run -it --rm \\\n  -p 7700:7700 \\\n  -v $(pwd)/data.ms:/data.ms \\\n  getmeili/meilisearch\n")),(0,i.kt)("p",null,"That's it!"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"MeiliSearch stores data in $","(","pwd",")","/data.ms, so if you prefer to store it somewhere else, just adjust this path."))),(0,i.kt)("h2",{id:"2-replicate-your-slack-messages-to-meilisearch"},"2. Replicate Your Slack Messages to MeiliSearch"),(0,i.kt)("h3",{id:"a-set-up-airbyte"},"a. Set Up Airbyte"),(0,i.kt)("p",null,"Make sure you have Docker and Docker Compose installed. If you haven\u2019t set Docker up, follow the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.docker.com/desktop/"},"instructions here")," to set it up on your machine. Then, run the following commands:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/airbytehq/airbyte.git\ncd airbyte\ndocker-compose up\n")),(0,i.kt)("p",null,"If you run into any problems, feel free to check out our more extensive ",(0,i.kt)("a",{parentName:"p",href:"https://discuss.airbyte.io/c/faq/15"},"Getting Started FAQ")," for help."),(0,i.kt)("p",null,"Once you see an Airbyte banner, the UI is ready to go at ",(0,i.kt)("a",{parentName:"p",href:"http://localhost:8000/"},"http://localhost:8000/"),". Once you have set your user preferences, you will be brought to a page that asks you to set up a source. In the next step, we'll go over how to do that."),(0,i.kt)("h3",{id:"b-set-up-airbytes-slack-source-connector"},"b. Set Up Airbyte\u2019s Slack Source Connector"),(0,i.kt)("p",null,"In the Airbyte UI, select Slack from the dropdown. We provide step-by-step instructions for setting up the Slack source in Airbyte ",(0,i.kt)("a",{parentName:"p",href:"https://docs.airbyte.io/integrations/sources/slack#setup-guide"},"here"),". These will walk you through how to complete the form on this page."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(50638).Z,width:"1266",height:"730"})),(0,i.kt)("p",null,"By the end of these instructions, you should have created a Slack source in the Airbyte UI. For now, just add your Slack app to a single public channel ","(","you can add it to more channels later",")",". Only messages from that channel will be replicated."),(0,i.kt)("p",null,"The Airbyte app will now prompt you to set up a destination. Next, we will walk through how to set up MeiliSearch."),(0,i.kt)("h3",{id:"c-set-up-airbytes-meilisearch-destination-connector"},"c. Set Up Airbyte\u2019s MeiliSearch Destination Connector"),(0,i.kt)("p",null,'Head back to the Airbyte UI. It should still be prompting you to set up a destination. Select "MeiliSearch" from the dropdown. For the ',(0,i.kt)("inlineCode",{parentName:"p"},"host")," field, set: ",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:7700"),". The ",(0,i.kt)("inlineCode",{parentName:"p"},"api_key")," can be left blank."),(0,i.kt)("h3",{id:"d-set-up-the-replication"},"d. Set Up the Replication"),(0,i.kt)("p",null,'On the next page, you will be asked to select which streams of data you\'d like to replicate. We recommend unchecking "files" and "remote files" since you won\'t really be able to search them easily in this search engine.'),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(95622).Z,width:"2244",height:"1282"})),(0,i.kt)("p",null,"For frequency, we recommend every 24 hours."),(0,i.kt)("h2",{id:"3-search-meilisearch"},"3. Search MeiliSearch"),(0,i.kt)("p",null,"After the connection has been saved, Airbyte should start replicating the data immediately. When it completes you should see the following:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(91526).Z,width:"1265",height:"396"})),(0,i.kt)("p",null,"When the sync is done, you can sanity check that this is all working by making a search request to MeiliSearch. Replication can take several minutes depending on the size of your Slack instance."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl 'http://localhost:7700/indexes/messages/search' --data '{ \"q\": \"<search-term>\" }'\n")),(0,i.kt)("p",null,'For example, I have the following message in one of the messages that I replicated: "welcome to airbyte".'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl \'http://localhost:7700/indexes/messages/search\' --data \'{ "q": "welcome to" }\'\n# => {"hits":[{"_ab_pk":"7ff9a858_6959_45e7_ad6b_16f9e0e91098","channel_id":"C01M2UUP87P","client_msg_id":"77022f01-3846-4b9d-a6d3-120a26b2c2ac","type":"message","text":"welcome to airbyte.","user":"U01AS8LGX41","ts":"2021-02-05T17:26:01.000000Z","team":"T01AB4DDR2N","blocks":[{"type":"rich_text"}],"file_ids":[],"thread_ts":"1612545961.000800"}],"offset":0,"limit":20,"nbHits":2,"exhaustiveNbHits":false,"processingTimeMs":21,"query":"test-72"}\n')),(0,i.kt)("h2",{id:"4-search-via-a-ui"},"4. Search via a UI"),(0,i.kt)("p",null,"Making curl requests to search your Slack History is a little clunky, so we have modified the example UI that MeiliSearch provides in ",(0,i.kt)("a",{parentName:"p",href:"https://docs.meilisearch.com/learn/tutorials/getting_started.html#integrate-with-your-project"},"their docs")," to search through the Slack results."),(0,i.kt)("p",null,"Download ","(","or copy and paste",")"," this ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/blob/master/docs/examples/slack-history/index.html"},"html file")," to your workstation. Then, open it using a browser. You should now be able to write search terms in the search bar and get results instantly!"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(58522).Z,width:"1007",height:"291"})),(0,i.kt)("h2",{id:"5-productionizing-saving-slack-history"},'5. "Productionizing" Saving Slack History'),(0,i.kt)("p",null,"You can find instructions for how to host Airbyte on various cloud platforms ",(0,i.kt)("a",{parentName:"p",href:"/deploying-airbyte/"},"here"),"."),(0,i.kt)("p",null,"Documentation on how to host MeiliSearch on cloud platforms can be found ",(0,i.kt)("a",{parentName:"p",href:"https://docs.meilisearch.com/running-production/#a-quick-introduction"},"here"),"."),(0,i.kt)("p",null,"If you want to use the UI mentioned in the section above, we recommend statically hosting it on S3, GCS, or equivalent."))}p.isMDXComponent=!0},95622:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/airbyte_connection-settings-d44d2bc6b945d9ad761ba195b8492f9c.png"},50638:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/slack-history-setup-wizard-137ce4f2901128ff00d7afc31e47a769.png"},91526:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/slack-history-sync-add061635fa8471f7837c606fe623e2b.png"},8619:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/slack-history-ui-title-14b97795611891d8ed038593d0818f7e.png"},58522:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/slack-history-ui-5981b0ac7dc32b396d05bce9ba47dc97.png"}}]);