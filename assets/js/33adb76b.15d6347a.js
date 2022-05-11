"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[921],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,g=d["".concat(s,".").concat(m)]||d[m]||p[m]||r;return n?a.createElement(g,i(i({ref:t},u),{},{components:n})):a.createElement(g,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},40213:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),i=["components"],l={},s="On GCP (Compute Engine)",c={unversionedId:"deploying-airbyte/on-gcp-compute-engine",id:"deploying-airbyte/on-gcp-compute-engine",title:"On GCP (Compute Engine)",description:"The instructions have been tested on Debian GNU/Linux 10 (buster)",source:"@site/../docs/deploying-airbyte/on-gcp-compute-engine.md",sourceDirName:"deploying-airbyte",slug:"/deploying-airbyte/on-gcp-compute-engine",permalink:"/deploying-airbyte/on-gcp-compute-engine",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/deploying-airbyte/on-gcp-compute-engine.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"On Azure (VM)",permalink:"/deploying-airbyte/on-azure-vm-cloud-shell"},next:{title:"On Kubernetes (Beta)",permalink:"/deploying-airbyte/on-kubernetes"}},u={},p=[{value:"Create a new instance",id:"create-a-new-instance",level:2},{value:"Install environment",id:"install-environment",level:2},{value:"Install &amp; start Airbyte",id:"install--start-airbyte",level:2},{value:"Connect to Airbyte",id:"connect-to-airbyte",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}],d={toc:p};function m(e){var t=e.components,l=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"on-gcp-compute-engine"},"On GCP (Compute Engine)"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The instructions have been tested on ",(0,r.kt)("inlineCode",{parentName:"p"},"Debian GNU/Linux 10 (buster)")))),(0,r.kt)("h2",{id:"create-a-new-instance"},"Create a new instance"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Launch a new instance")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(22658).Z,width:"975",height:"72"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Configure new instance",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"For testing out Airbyte, an ",(0,r.kt)("inlineCode",{parentName:"li"},"e2.medium")," instance is likely sufficient. Airbyte uses a lot of disk space with images and logs, so make sure to provision at least 30GBs of disk per node. "),(0,r.kt)("li",{parentName:"ul"},"For long-running Airbyte installations, we recommend a ",(0,r.kt)("inlineCode",{parentName:"li"},"n1-standard-2")," instance.")))),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(27953).Z,width:"506",height:"1179"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Create"))),(0,r.kt)("h2",{id:"install-environment"},"Install environment"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Note: The following commands will be entered either on your local terminal or in your ssh session on the instance terminal. The comments above each command block will indicate where to enter the commands."))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Set variables in your terminal")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# In your workstation terminal\nPROJECT_ID=PROJECT_ID_WHERE_YOU_CREATED_YOUR_INSTANCE\nINSTANCE_NAME=airbyte # or anyother name that you've used\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Install ",(0,r.kt)("inlineCode",{parentName:"li"},"gcloud"))),(0,r.kt)("p",null,'{% tabs %}\n{% tab title="MacOS" %}'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# In your workstation terminal\nbrew install --cask google-cloud-sdk\ngcloud init # Follow instructions\n")),(0,r.kt)("p",null,"{% endtab %}"),(0,r.kt)("p",null,'{% tab title="Ubuntu" %}'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'echo "deb [signed-by=/usr/share/keyrings/cloud.google.gpg] https://packages.cloud.google.com/apt cloud-sdk main" | sudo tee -a /etc/apt/sources.list.d/google-cloud-sdk.list\nsudo apt-get install apt-transport-https ca-certificates gnupg\ncurl https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo apt-key --keyring /usr/share/keyrings/cloud.google.gpg add -\nsudo apt-get update && sudo apt-get install google-cloud-sdk\n')),(0,r.kt)("p",null,"{% endtab %}\n{% endtabs %}"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Verify you can see your instance\ngcloud --project $PROJECT_ID compute instances list\n[...] # You should see the airbyte instance you just created\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Connect to your instance")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# In your workstation terminal\ngcloud --project=$PROJECT_ID beta compute ssh $INSTANCE_NAME\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Install ",(0,r.kt)("inlineCode",{parentName:"li"},"docker"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# In your ssh session on the instance terminal\nsudo apt-get update\nsudo apt-get install -y apt-transport-https ca-certificates curl gnupg2 software-properties-common\ncurl -fsSL https://download.docker.com/linux/debian/gpg | sudo apt-key add --\nsudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/debian buster stable"\nsudo apt-get update\nsudo apt-get install -y docker-ce docker-ce-cli containerd.io\nsudo usermod -a -G docker $USER\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Install ",(0,r.kt)("inlineCode",{parentName:"li"},"docker-compose"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# In your ssh session on the instance terminal\nsudo apt-get -y install wget\nsudo wget https://github.com/docker/compose/releases/download/1.26.2/docker-compose-$(uname -s)-$(uname -m) -O /usr/local/bin/docker-compose\nsudo chmod +x /usr/local/bin/docker-compose\ndocker-compose --version\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Close the ssh connection to ensure the group modification is taken into account")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# In your ssh session on the instance terminal\nlogout\n")),(0,r.kt)("h2",{id:"install--start-airbyte"},"Install & start Airbyte"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Connect to your instance")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# In your workstation terminal\ngcloud --project=$PROJECT_ID beta compute ssh $INSTANCE_NAME\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Install Airbyte")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# In your ssh session on the instance terminal\nmkdir airbyte && cd airbyte\nwget https://raw.githubusercontent.com/airbytehq/airbyte/master/{.env,docker-compose.yaml}\ndocker-compose up -d\n")),(0,r.kt)("h2",{id:"connect-to-airbyte"},"Connect to Airbyte"),(0,r.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"For security reasons, we strongly recommend to not expose Airbyte publicly. Future versions will add support for SSL & Authentication."))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create ssh tunnel.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# In your workstation terminal\ngcloud --project=$PROJECT_ID beta compute ssh $INSTANCE_NAME -- -L 8000:localhost:8000 -N -f\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Just visit ",(0,r.kt)("a",{parentName:"li",href:"http://localhost:8000"},"http://localhost:8000")," in your browser and start moving some data!")),(0,r.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,r.kt)("p",null,"If you encounter any issues, just connect to our ",(0,r.kt)("a",{parentName:"p",href:"https://slack.airbyte.io"},"Slack"),". Our community will help! We also have a ",(0,r.kt)("a",{parentName:"p",href:"/troubleshooting/on-deploying"},"FAQ")," section in our docs for common problems."))}m.isMDXComponent=!0},27953:function(e,t,n){t.Z=n.p+"assets/images/gcp_ce_configure-3c9c1f57bb13522e2d94a529712a50d3.png"},22658:function(e,t,n){t.Z=n.p+"assets/images/gcp_ce_launch-ff06cccba883fbac858db3677a86cd9c.png"}}]);