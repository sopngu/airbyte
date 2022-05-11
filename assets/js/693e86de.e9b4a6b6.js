"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[9477],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var o=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=o.createContext({}),l=function(e){var n=o.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=l(e.components);return o.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(t),d=a,h=m["".concat(p,".").concat(d)]||m[d]||u[d]||r;return t?o.createElement(h,i(i({ref:n},c),{},{components:t})):o.createElement(h,i({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=m;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<r;l++)i[l]=t[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},59396:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var o=t(87462),a=t(63366),r=(t(67294),t(3905)),i=["components"],s={},p="Python CDK Speedrun: Creating a Source",l={unversionedId:"connector-development/tutorials/cdk-speedrun",id:"connector-development/tutorials/cdk-speedrun",title:"Python CDK Speedrun: Creating a Source",description:"CDK Speedrun \\(HTTP API Source Creation Any% Route\\)",source:"@site/../docs/connector-development/tutorials/cdk-speedrun.md",sourceDirName:"connector-development/tutorials",slug:"/connector-development/tutorials/cdk-speedrun",permalink:"/connector-development/tutorials/cdk-speedrun",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/connector-development/tutorials/cdk-speedrun.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Connector Development",permalink:"/connector-development/"},next:{title:"Getting Started",permalink:"/connector-development/tutorials/cdk-tutorial-python-http/getting-started"}},c={},u=[{value:"CDK Speedrun (HTTP API Source Creation Any% Route)",id:"cdk-speedrun-http-api-source-creation-any-route",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Generate the Template",id:"generate-the-template",level:4},{value:"Create Dev Environment",id:"create-dev-environment",level:4},{value:"Define Connector Inputs",id:"define-connector-inputs",level:3},{value:"Define your Stream",id:"define-your-stream",level:3},{value:"Reading Data from the Source",id:"reading-data-from-the-source",level:3}],m={toc:u};function d(e){var n=e.components,t=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"python-cdk-speedrun-creating-a-source"},"Python CDK Speedrun: Creating a Source"),(0,r.kt)("h2",{id:"cdk-speedrun-http-api-source-creation-any-route"},"CDK Speedrun ","(","HTTP API Source Creation ",(0,r.kt)("a",{parentName:"h2",href:"https://en.wikipedia.org/wiki/Speedrun#:~:text=Any%25%2C%20or%20fastest%20completion%2C,the%20game%20to%20its%20fullest.&text=Specific%20requirements%20for%20a%20100,different%20depending%20on%20the%20game."},"Any%")," Route",")"),(0,r.kt)("p",null,"This is a blazing fast guide to building an HTTP source connector. Think of it as the TL;DR version of ",(0,r.kt)("a",{parentName:"p",href:"/connector-development/tutorials/cdk-tutorial-python-http/getting-started"},"this tutorial.")),(0,r.kt)("p",null,"If you are a visual learner and want to see a video version of this guide going over each part in detail, check it out below."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=kJ3hLoNfz_E"},"A speedy CDK overview.")),(0,r.kt)("h2",{id:"dependencies"},"Dependencies"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Python ",">","= 3.9"),(0,r.kt)("li",{parentName:"ol"},"Docker"),(0,r.kt)("li",{parentName:"ol"},"NodeJS")),(0,r.kt)("h4",{id:"generate-the-template"},"Generate the Template"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# # clone the repo if you havent already\n# git clone -\u2013depth 1 https://github.com/airbytehq/airbyte/ \n# cd airbyte # start from repo root\ncd airbyte-integrations/connector-templates/generator \n./generate.sh\n")),(0,r.kt)("p",null,"Select the ",(0,r.kt)("inlineCode",{parentName:"p"},"Python HTTP API Source")," and name it ",(0,r.kt)("inlineCode",{parentName:"p"},"python-http-example"),"."),(0,r.kt)("h4",{id:"create-dev-environment"},"Create Dev Environment"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd ../../connectors/source-python-http-example\npython -m venv .venv # Create a virtual environment in the .venv directory\nsource .venv/bin/activate\npip install -r requirements.txt\n")),(0,r.kt)("h3",{id:"define-connector-inputs"},"Define Connector Inputs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd source_python_http_example\n")),(0,r.kt)("p",null,"We're working with the PokeAPI, so we need to define our input schema to reflect that. Open the ",(0,r.kt)("inlineCode",{parentName:"p"},"spec.yaml")," file here and replace it with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"documentationUrl: https://docs.airbyte.io/integrations/sources/pokeapi\nconnectionSpecification:\n  $schema: http://json-schema.org/draft-07/schema#\n  title: Pokeapi Spec\n  type: object\n  required:\n    - pokemon_name\n  additionalProperties: false\n  properties:\n    pokemon_name:\n      type: string\n      description: Pokemon requested from the API.\n      pattern: ^[a-z0-9_\\-]+$\n      examples:\n        - ditto\n        - luxray\n        - snorlax\n")),(0,r.kt)("p",null,"As you can see, we have one input to our input schema, which is ",(0,r.kt)("inlineCode",{parentName:"p"},"pokemon_name"),", which is required. Normally, input schemas will contain information such as API keys and client secrets that need to get passed down to all endpoints or streams."),(0,r.kt)("p",null,"Ok, let's write a function that checks the inputs we just defined. Nuke the ",(0,r.kt)("inlineCode",{parentName:"p"},"source.py")," file. Now add this code to it. For a crucial time skip, we're going to define all the imports we need in the future here. Also note that your ",(0,r.kt)("inlineCode",{parentName:"p"},"AbstractSource")," class name must be a camel-cased version of the name you gave in the generation phase. In our case, this is ",(0,r.kt)("inlineCode",{parentName:"p"},"SourcePythonHttpExample"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from typing import Any, Iterable, List, Mapping, MutableMapping, Optional, Tuple\n\nimport requests\nfrom airbyte_cdk.sources import AbstractSource\nfrom airbyte_cdk.sources.streams import Stream\nfrom airbyte_cdk.sources.streams.http import HttpStream\n\nfrom . import pokemon_list\n\nclass SourcePythonHttpExample(AbstractSource):\n    def check_connection(self, logger, config) -> Tuple[bool, any]:\n        input_pokemon = config["pokemon_name"]\n        if input_pokemon not in pokemon_list.POKEMON_LIST:\n            return False, f"Input Pokemon {input_pokemon} is invalid. Please check your spelling and input a valid Pokemon."\n        else:\n            return True, None\n\n    def streams(self, config: Mapping[str, Any]) -> List[Stream]:\n        return [Pokemon(pokemon_name=config["pokemon_name"])]\n')),(0,r.kt)("p",null,"Create a new file called ",(0,r.kt)("inlineCode",{parentName:"p"},"pokemon_list.py")," at the same level. This will handle input validation for us so that we don't input invalid Pokemon. Let's start with a very limited list - any Pokemon not included in this list will get rejected."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'"""\npokemon_list.py includes a list of all known pokemon for config validation in source.py.\n"""\n\nPOKEMON_LIST = [\n    "bulbasaur",\n    "charizard",\n    "wartortle",\n    "pikachu",\n    "crobat",\n]\n')),(0,r.kt)("p",null,"Test it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'cd ..\nmkdir sample_files\necho \'{"pokemon_name": "pikachu"}\'  > sample_files/config.json\necho \'{"pokemon_name": "chikapu"}\'  > sample_files/invalid_config.json\npython main.py check --config sample_files/config.json\npython main.py check --config sample_files/invalid_config.json\n')),(0,r.kt)("p",null,"Expected output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'> python main.py check --config sample_files/config.json\n{"type": "CONNECTION_STATUS", "connectionStatus": {"status": "SUCCEEDED"}}\n\n> python main.py check --config sample_files/invalid_config.json\n{"type": "CONNECTION_STATUS", "connectionStatus": {"status": "FAILED", "message": "\'Input Pokemon chikapu is invalid. Please check your spelling our input a valid Pokemon.\'"}}\n')),(0,r.kt)("h3",{id:"define-your-stream"},"Define your Stream"),(0,r.kt)("p",null,"In your ",(0,r.kt)("inlineCode",{parentName:"p"},"source.py")," file, add this ",(0,r.kt)("inlineCode",{parentName:"p"},"Pokemon")," class. This stream represents an endpoint you want to hit, which in our case, is the single ",(0,r.kt)("a",{parentName:"p",href:"https://pokeapi.co/docs/v2#pokemon"},"Pokemon endpoint"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'class Pokemon(HttpStream):\n    url_base = "https://pokeapi.co/api/v2/"\n\n    # Set this as a noop.\n    primary_key = None\n\n    def __init__(self, pokemon_name: str, **kwargs):\n        super().__init__(**kwargs)\n        self.pokemon_name = pokemon_name\n\n    def next_page_token(self, response: requests.Response) -> Optional[Mapping[str, Any]]:\n        # The API does not offer pagination, so we return None to indicate there are no more pages in the response\n        return None\n\n    def path(\n        self, \n    ) -> str:\n        return ""  # TODO\n\n    def parse_response(\n        self,\n    ) -> Iterable[Mapping]:\n        return None  # TODO\n')),(0,r.kt)("p",null,"Now download ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/blob/master/airbyte-cdk/python/docs/tutorials/http_api_source_assets/pokemon.json"},"this file"),". Name it ",(0,r.kt)("inlineCode",{parentName:"p"},"pokemon.json")," and place it in ",(0,r.kt)("inlineCode",{parentName:"p"},"/source_python_http_example/schemas"),"."),(0,r.kt)("p",null,"This file defines your output schema for every endpoint that you want to implement. Normally, this will likely be the most time-consuming section of the connector development process, as it requires defining the output of the endpoint exactly. This is really important, as Airbyte needs to have clear expectations for what the stream will output. Note that the name of this stream will be consistent in the naming of the JSON schema and the ",(0,r.kt)("inlineCode",{parentName:"p"},"HttpStream")," class, as ",(0,r.kt)("inlineCode",{parentName:"p"},"pokemon.json")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Pokemon")," respectively in this case. Learn more about schema creation ",(0,r.kt)("a",{parentName:"p",href:"https://docs.airbyte.io/connector-development/cdk-python/full-refresh-stream#defining-the-streams-schema"},"here"),"."),(0,r.kt)("p",null,"Test your discover function. You should receive a fairly large JSON object in return."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"python main.py discover --config sample_files/config.json\n")),(0,r.kt)("p",null,"Note that our discover function is using the ",(0,r.kt)("inlineCode",{parentName:"p"},"pokemon_name")," config variable passed in from the ",(0,r.kt)("inlineCode",{parentName:"p"},"Pokemon")," stream when we set it in the ",(0,r.kt)("inlineCode",{parentName:"p"},"__init__")," function."),(0,r.kt)("h3",{id:"reading-data-from-the-source"},"Reading Data from the Source"),(0,r.kt)("p",null,"Update your ",(0,r.kt)("inlineCode",{parentName:"p"},"Pokemon")," class to implement the required functions as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'class Pokemon(HttpStream):\n    url_base = "https://pokeapi.co/api/v2/"\n\n    # Set this as a noop.\n    primary_key = None\n\n    def __init__(self, pokemon_name: str, **kwargs):\n        super().__init__(**kwargs)\n        # Here\'s where we set the variable from our input to pass it down to the source.\n        self.pokemon_name = pokemon_name\n\n    def path(self, **kwargs) -> str:\n        pokemon_name = self.pokemon_name\n        # This defines the path to the endpoint that we want to hit.\n        return f"pokemon/{pokemon_name}"\n\n    def request_params(\n            self,\n            stream_state: Mapping[str, Any],\n            stream_slice: Mapping[str, Any] = None,\n            next_page_token: Mapping[str, Any] = None,\n    ) -> MutableMapping[str, Any]:\n        # The api requires that we include the Pokemon name as a query param so we do that in this method.\n        return {"pokemon_name": self.pokemon_name}\n\n    def parse_response(\n            self,\n            response: requests.Response,\n            stream_state: Mapping[str, Any],\n            stream_slice: Mapping[str, Any] = None,\n            next_page_token: Mapping[str, Any] = None,\n    ) -> Iterable[Mapping]:\n        # The response is a simple JSON whose schema matches our stream\'s schema exactly,\n        # so we just return a list containing the response.\n        return [response.json()]\n\n    def next_page_token(self, response: requests.Response) -> Optional[Mapping[str, Any]]:\n        # While the PokeAPI does offer pagination, we will only ever retrieve one Pokemon with this implementation,\n        # so we just return None to indicate that there will never be any more pages in the response.\n        return None\n')),(0,r.kt)("p",null,"We now need a catalog that defines all of our streams. We only have one stream: ",(0,r.kt)("inlineCode",{parentName:"p"},"Pokemon"),". Download that file ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/blob/master/airbyte-cdk/python/docs/tutorials/http_api_source_assets/configured_catalog_pokeapi.json"},"here"),". Place it in ",(0,r.kt)("inlineCode",{parentName:"p"},"/sample_files")," named as ",(0,r.kt)("inlineCode",{parentName:"p"},"configured_catalog.json"),". More clearly, this is where we tell Airbyte all the streams/endpoints we support for the connector and in which sync modes Airbyte can run the connector on. Learn more about the AirbyteCatalog ",(0,r.kt)("a",{parentName:"p",href:"https://docs.airbyte.io/understanding-airbyte/beginners-guide-to-catalog"},"here")," and learn more about sync modes ",(0,r.kt)("a",{parentName:"p",href:"https://docs.airbyte.io/understanding-airbyte/connections#sync-modes"},"here"),"."),(0,r.kt)("p",null,"Let's read some data."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"python main.py read --config sample_files/config.json --catalog sample_files/configured_catalog.json\n")),(0,r.kt)("p",null,"If all goes well, containerize it so you can use it in the UI:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker build . -t airbyte/source-python-http-example:dev\n")),(0,r.kt)("p",null,"You're done. Stop the clock :",")"))}d.isMDXComponent=!0}}]);