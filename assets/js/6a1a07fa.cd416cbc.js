(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{128:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return h}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=a.a.createContext({}),p=function(e){var t=a.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},m=function(e){var t=p(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,i=b(e,["components","mdxType","originalType","parentName"]),m=p(r),u=n,h=m["".concat(c,".").concat(u)]||m[u]||l[u]||o;return r?a.a.createElement(h,s(s({ref:t},i),{},{components:r})):a.a.createElement(h,s({ref:t},i))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=u;var s={};for(var b in t)hasOwnProperty.call(t,b)&&(s[b]=t[b]);s.originalType=e,s.mdxType="string"==typeof e?e:n,c[1]=s;for(var i=2;i<o;i++)c[i]=r[i];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},97:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return b})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),o=(r(0),r(128)),c={id:"mugshot.screenshotter",title:"Interface: Screenshotter",sidebar_label:"Screenshotter",custom_edit_url:null,hide_title:!0},s={unversionedId:"api/interfaces/mugshot.screenshotter",id:"api/interfaces/mugshot.screenshotter",isDocsHomePage:!1,title:"Interface: Screenshotter",description:"mugshot.Screenshotter",source:"@site/docs/api/interfaces/mugshot.screenshotter.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/mugshot.screenshotter",permalink:"/mugshot/api/interfaces/mugshot.screenshotter",editUrl:null,version:"current",sidebar_label:"Screenshotter",frontMatter:{id:"mugshot.screenshotter",title:"Interface: Screenshotter",sidebar_label:"Screenshotter",custom_edit_url:null,hide_title:!0},sidebar:"api",previous:{title:"Interface: ScreenshotStorage",permalink:"/mugshot/api/interfaces/mugshot.screenshotstorage"},next:{title:"Interface: Webdriver",permalink:"/mugshot/api/interfaces/mugshot.webdriver"}},b=[{value:"Implemented by",id:"implemented-by",children:[]},{value:"Methods",id:"methods",children:[{value:"takeScreenshot",id:"takescreenshot",children:[]}]}],i={toc:b};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/mugshot/api/modules/mugshot"},"mugshot"),".Screenshotter"),Object(o.b)("h2",{id:"implemented-by"},"Implemented by"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/mugshot/api/classes/mugshot.webdriverscreenshotter"},Object(o.b)("em",{parentName:"a"},"WebdriverScreenshotter")))),Object(o.b)("h2",{id:"methods"},"Methods"),Object(o.b)("h3",{id:"takescreenshot"},"takeScreenshot"),Object(o.b)("p",null,"\u25b8 ",Object(o.b)("strong",{parentName:"p"},"takeScreenshot"),"(",Object(o.b)("inlineCode",{parentName:"p"},"options?"),": ",Object(o.b)("a",{parentName:"p",href:"/mugshot/api/interfaces/mugshot.screenshotoptions"},Object(o.b)("em",{parentName:"a"},"ScreenshotOptions")),"): ",Object(o.b)("em",{parentName:"p"},"Promise"),"<Buffer",">"),Object(o.b)("p",null,"Take a viewport screenshot."),Object(o.b)("h4",{id:"parameters"},"Parameters:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:"left"},"Name"),Object(o.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("inlineCode",{parentName:"td"},"options?")),Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("a",{parentName:"td",href:"/mugshot/api/interfaces/mugshot.screenshotoptions"},Object(o.b)("em",{parentName:"a"},"ScreenshotOptions")))))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Returns:")," ",Object(o.b)("em",{parentName:"p"},"Promise"),"<Buffer",">"),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/NiGhTTraX/mugshot/blob/e30e714/packages/mugshot/src/interfaces/screenshotter.ts#L40"},"packages/mugshot/src/interfaces/screenshotter.ts:40")),Object(o.b)("p",null,"\u25b8 ",Object(o.b)("strong",{parentName:"p"},"takeScreenshot"),"(",Object(o.b)("inlineCode",{parentName:"p"},"selector"),": ",Object(o.b)("a",{parentName:"p",href:"/mugshot/api/types/mugshot.mugshotselector"},Object(o.b)("em",{parentName:"a"},"MugshotSelector")),", ",Object(o.b)("inlineCode",{parentName:"p"},"options?"),": ",Object(o.b)("a",{parentName:"p",href:"/mugshot/api/interfaces/mugshot.screenshotoptions"},Object(o.b)("em",{parentName:"a"},"ScreenshotOptions")),"): ",Object(o.b)("em",{parentName:"p"},"Promise"),"<Buffer",">"),Object(o.b)("p",null,"Take a screenshot of a single element."),Object(o.b)("p",null,"Will throw ",Object(o.b)("a",{parentName:"p",href:"/mugshot/api/classes/mugshot.toomanyelementserror"},"TooManyElementsError")," if ",Object(o.b)("inlineCode",{parentName:"p"},"selector")," matches more than one element."),Object(o.b)("h4",{id:"parameters-1"},"Parameters:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:"left"},"Name"),Object(o.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("inlineCode",{parentName:"td"},"selector")),Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("a",{parentName:"td",href:"/mugshot/api/types/mugshot.mugshotselector"},Object(o.b)("em",{parentName:"a"},"MugshotSelector")))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("inlineCode",{parentName:"td"},"options?")),Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("a",{parentName:"td",href:"/mugshot/api/interfaces/mugshot.screenshotoptions"},Object(o.b)("em",{parentName:"a"},"ScreenshotOptions")))))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Returns:")," ",Object(o.b)("em",{parentName:"p"},"Promise"),"<Buffer",">"),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/NiGhTTraX/mugshot/blob/e30e714/packages/mugshot/src/interfaces/screenshotter.ts#L47"},"packages/mugshot/src/interfaces/screenshotter.ts:47")))}p.isMDXComponent=!0}}]);