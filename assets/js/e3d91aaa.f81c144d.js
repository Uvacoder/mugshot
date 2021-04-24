(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{121:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return p})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return b}));var a=r(3),n=r(7),i=(r(0),r(128)),l={id:"mugshot.pixeldiffer",title:"Class: PixelDiffer",sidebar_label:"PixelDiffer",custom_edit_url:null,hide_title:!0},p={unversionedId:"api/classes/mugshot.pixeldiffer",id:"api/classes/mugshot.pixeldiffer",isDocsHomePage:!1,title:"Class: PixelDiffer",description:"mugshot.PixelDiffer",source:"@site/docs/api/classes/mugshot.pixeldiffer.md",sourceDirName:"api/classes",slug:"/api/classes/mugshot.pixeldiffer",permalink:"/mugshot/api/classes/mugshot.pixeldiffer",editUrl:null,version:"current",sidebar_label:"PixelDiffer",frontMatter:{id:"mugshot.pixeldiffer",title:"Class: PixelDiffer",sidebar_label:"PixelDiffer",custom_edit_url:null,hide_title:!0},sidebar:"api",previous:{title:"Class: OutOfBoundsError",permalink:"/mugshot/api/classes/mugshot.outofboundserror"},next:{title:"Class: TooManyElementsError",permalink:"/mugshot/api/classes/mugshot.toomanyelementserror"}},c=[{value:"Implements",id:"implements",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Methods",id:"methods",children:[{value:"compare",id:"compare",children:[]}]}],o={toc:c};function b(e){var t=e.components,l=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},o,l,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"/mugshot/api/modules/mugshot"},"mugshot"),".PixelDiffer"),Object(i.b)("p",null,"Compare screenshots pixel by pixel using\n",Object(i.b)("a",{parentName:"p",href:"https://github.com/mapbox/pixelmatch"},"pixelmatch"),"."),Object(i.b)("p",null,"Images with different dimensions will always fail comparison and a diff\nindicating the extra region will be returned. The images will be overlaid\nstarting from the top left corner and then compared. All of the pixels that\nare outside of the intersection will be considered different, no matter the\n",Object(i.b)("a",{parentName:"p",href:"/mugshot/api/interfaces/mugshot.pixeldifferoptions#threshold"},"threshold"),"."),Object(i.b)("p",null,Object(i.b)("img",{alt:"pixel-differ-explanation",src:r(176).default})),Object(i.b)("p",null,"See the examples below to understand how images with different sizes will be\ncompared."),Object(i.b)("p",null,Object(i.b)("img",{alt:"pixel-differ-examples",src:r(177).default})),Object(i.b)("h2",{id:"implements"},"Implements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/mugshot/api/interfaces/mugshot.pngdiffer"},Object(i.b)("em",{parentName:"a"},"PNGDiffer")))),Object(i.b)("h2",{id:"constructors"},"Constructors"),Object(i.b)("h3",{id:"constructor"},"constructor"),Object(i.b)("p",null,"+"," ",Object(i.b)("strong",{parentName:"p"},"new PixelDiffer"),"(",Object(i.b)("inlineCode",{parentName:"p"},"__namedParameters?"),": ",Object(i.b)("a",{parentName:"p",href:"/mugshot/api/interfaces/mugshot.pixeldifferoptions"},Object(i.b)("em",{parentName:"a"},"PixelDifferOptions")),"): ",Object(i.b)("a",{parentName:"p",href:"/mugshot/api/classes/mugshot.pixeldiffer"},Object(i.b)("em",{parentName:"a"},"PixelDiffer"))),Object(i.b)("h4",{id:"parameters"},"Parameters:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"left"},"Name"),Object(i.b)("th",{parentName:"tr",align:"left"},"Type"),Object(i.b)("th",{parentName:"tr",align:"left"},"Default value"),Object(i.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"__namedParameters")),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("a",{parentName:"td",href:"/mugshot/api/interfaces/mugshot.pixeldifferoptions"},Object(i.b)("em",{parentName:"a"},"PixelDifferOptions"))),Object(i.b)("td",{parentName:"tr",align:"left"},"{}"),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("a",{parentName:"td",href:"/mugshot/api/interfaces/mugshot.pixeldifferoptions"},"PixelDifferOptions"))))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," ",Object(i.b)("a",{parentName:"p",href:"/mugshot/api/classes/mugshot.pixeldiffer"},Object(i.b)("em",{parentName:"a"},"PixelDiffer"))),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/NiGhTTraX/mugshot/blob/e30e714/packages/mugshot/src/lib/pixel-differ.ts#L54"},"packages/mugshot/src/lib/pixel-differ.ts:54")),Object(i.b)("h2",{id:"methods"},"Methods"),Object(i.b)("h3",{id:"compare"},"compare"),Object(i.b)("p",null,"\u25b8 ",Object(i.b)("strong",{parentName:"p"},"compare"),"(",Object(i.b)("inlineCode",{parentName:"p"},"expected"),": ",Object(i.b)("em",{parentName:"p"},"Buffer"),", ",Object(i.b)("inlineCode",{parentName:"p"},"actual"),": ",Object(i.b)("em",{parentName:"p"},"Buffer"),"): ",Object(i.b)("em",{parentName:"p"},"Promise"),"<",Object(i.b)("a",{parentName:"p",href:"/mugshot/api/types/mugshot.diffresult"},Object(i.b)("em",{parentName:"a"},"DiffResult")),">"),Object(i.b)("h4",{id:"parameters-1"},"Parameters:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"left"},"Name"),Object(i.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"expected")),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("em",{parentName:"td"},"Buffer"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"actual")),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("em",{parentName:"td"},"Buffer"))))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," ",Object(i.b)("em",{parentName:"p"},"Promise"),"<",Object(i.b)("a",{parentName:"p",href:"/mugshot/api/types/mugshot.diffresult"},Object(i.b)("em",{parentName:"a"},"DiffResult")),">"),Object(i.b)("p",null,"Implementation of: PNGDiffer.compare"),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/NiGhTTraX/mugshot/blob/e30e714/packages/mugshot/src/lib/pixel-differ.ts#L67"},"packages/mugshot/src/lib/pixel-differ.ts:67")))}b.isMDXComponent=!0},128:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return u}));var a=r(0),n=r.n(a);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=n.a.createContext({}),b=function(e){var t=n.a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=b(e.components);return n.a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},f=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),s=b(r),f=a,u=s["".concat(l,".").concat(f)]||s[f]||m[f]||i;return r?n.a.createElement(u,p(p({ref:t},o),{},{components:r})):n.a.createElement(u,p({ref:t},o))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=f;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var o=2;o<i;o++)l[o]=r[o];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},176:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/pixel-differ-explanation-a77b074b769e88de98c41461ec2294a6.png"},177:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/pixel-differ-examples-ddef0c9b21865484b68a18fcf1b250e5.png"}}]);