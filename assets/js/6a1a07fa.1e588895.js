(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{128:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return h}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=a.a.createContext({}),p=function(e){var t=a.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=p(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,i=b(e,["components","mdxType","originalType","parentName"]),l=p(r),u=n,h=l["".concat(o,".").concat(u)]||l[u]||m[u]||c;return r?a.a.createElement(h,s(s({ref:t},i),{},{components:r})):a.a.createElement(h,s({ref:t},i))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,o=new Array(c);o[0]=u;var s={};for(var b in t)hasOwnProperty.call(t,b)&&(s[b]=t[b]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var i=2;i<c;i++)o[i]=r[i];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},97:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return b})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),c=(r(0),r(128)),o={id:"mugshot.screenshotter",title:"Interface: Screenshotter",sidebar_label:"Screenshotter",custom_edit_url:null,hide_title:!0},s={unversionedId:"api/interfaces/mugshot.screenshotter",id:"api/interfaces/mugshot.screenshotter",isDocsHomePage:!1,title:"Interface: Screenshotter",description:"mugshot.Screenshotter",source:"@site/docs/api/interfaces/mugshot.screenshotter.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/mugshot.screenshotter",permalink:"/api/interfaces/mugshot.screenshotter",editUrl:null,version:"current",sidebar_label:"Screenshotter",frontMatter:{id:"mugshot.screenshotter",title:"Interface: Screenshotter",sidebar_label:"Screenshotter",custom_edit_url:null,hide_title:!0},sidebar:"api",previous:{title:"Interface: ScreenshotStorage",permalink:"/api/interfaces/mugshot.screenshotstorage"},next:{title:"Interface: Webdriver",permalink:"/api/interfaces/mugshot.webdriver"}},b=[{value:"Implemented by",id:"implemented-by",children:[]},{value:"Methods",id:"methods",children:[{value:"takeScreenshot",id:"takescreenshot",children:[]}]}],i={toc:b};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"/api/modules/mugshot"},"mugshot"),".Screenshotter"),Object(c.b)("h2",{id:"implemented-by"},"Implemented by"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/api/classes/mugshot.webdriverscreenshotter"},Object(c.b)("em",{parentName:"a"},"WebdriverScreenshotter")))),Object(c.b)("h2",{id:"methods"},"Methods"),Object(c.b)("h3",{id:"takescreenshot"},"takeScreenshot"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"takeScreenshot"),"(",Object(c.b)("inlineCode",{parentName:"p"},"options?"),": ",Object(c.b)("a",{parentName:"p",href:"/api/interfaces/mugshot.screenshotoptions"},Object(c.b)("em",{parentName:"a"},"ScreenshotOptions")),"): ",Object(c.b)("em",{parentName:"p"},"Promise"),"<Buffer",">"),Object(c.b)("p",null,"Take a viewport screenshot."),Object(c.b)("h4",{id:"parameters"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"left"},"Name"),Object(c.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("inlineCode",{parentName:"td"},"options?")),Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("a",{parentName:"td",href:"/api/interfaces/mugshot.screenshotoptions"},Object(c.b)("em",{parentName:"a"},"ScreenshotOptions")))))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"Promise"),"<Buffer",">"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/NiGhTTraX/mugshot/blob/c148a51/packages/mugshot/src/interfaces/screenshotter.ts#L40"},"packages/mugshot/src/interfaces/screenshotter.ts:40")),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"takeScreenshot"),"(",Object(c.b)("inlineCode",{parentName:"p"},"selector"),": ",Object(c.b)("a",{parentName:"p",href:"/api/types/mugshot.mugshotselector"},Object(c.b)("em",{parentName:"a"},"MugshotSelector")),", ",Object(c.b)("inlineCode",{parentName:"p"},"options?"),": ",Object(c.b)("a",{parentName:"p",href:"/api/interfaces/mugshot.screenshotoptions"},Object(c.b)("em",{parentName:"a"},"ScreenshotOptions")),"): ",Object(c.b)("em",{parentName:"p"},"Promise"),"<Buffer",">"),Object(c.b)("p",null,"Take a screenshot of a single element."),Object(c.b)("p",null,"Will throw ",Object(c.b)("a",{parentName:"p",href:"/api/classes/mugshot.toomanyelementserror"},"TooManyElementsError")," if ",Object(c.b)("inlineCode",{parentName:"p"},"selector")," matches more than one element."),Object(c.b)("h4",{id:"parameters-1"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"left"},"Name"),Object(c.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("inlineCode",{parentName:"td"},"selector")),Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("a",{parentName:"td",href:"/api/types/mugshot.mugshotselector"},Object(c.b)("em",{parentName:"a"},"MugshotSelector")))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("inlineCode",{parentName:"td"},"options?")),Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("a",{parentName:"td",href:"/api/interfaces/mugshot.screenshotoptions"},Object(c.b)("em",{parentName:"a"},"ScreenshotOptions")))))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"Promise"),"<Buffer",">"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/NiGhTTraX/mugshot/blob/c148a51/packages/mugshot/src/interfaces/screenshotter.ts#L47"},"packages/mugshot/src/interfaces/screenshotter.ts:47")))}p.isMDXComponent=!0}}]);