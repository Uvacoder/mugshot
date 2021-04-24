(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{119:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(3),o=n(7),i=(n(0),n(128)),a={id:"mugshot.screenshotoptions",title:"Interface: ScreenshotOptions",sidebar_label:"ScreenshotOptions",custom_edit_url:null,hide_title:!0},s={unversionedId:"api/interfaces/mugshot.screenshotoptions",id:"api/interfaces/mugshot.screenshotoptions",isDocsHomePage:!1,title:"Interface: ScreenshotOptions",description:"mugshot.ScreenshotOptions",source:"@site/docs/api/interfaces/mugshot.screenshotoptions.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/mugshot.screenshotoptions",permalink:"/mugshot/api/interfaces/mugshot.screenshotoptions",editUrl:null,version:"current",sidebar_label:"ScreenshotOptions",frontMatter:{id:"mugshot.screenshotoptions",title:"Interface: ScreenshotOptions",sidebar_label:"ScreenshotOptions",custom_edit_url:null,hide_title:!0},sidebar:"api",previous:{title:"Interface: PixelDifferOptions",permalink:"/mugshot/api/interfaces/mugshot.pixeldifferoptions"},next:{title:"Interface: ScreenshotStorage",permalink:"/mugshot/api/interfaces/mugshot.screenshotstorage"}},c=[{value:"Properties",id:"properties",children:[{value:"ignore",id:"ignore",children:[]},{value:"ignoreColor",id:"ignorecolor",children:[]}]}],p={toc:c};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"/mugshot/api/modules/mugshot"},"mugshot"),".ScreenshotOptions"),Object(i.b)("h2",{id:"properties"},"Properties"),Object(i.b)("h3",{id:"ignore"},"ignore"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"ignore"),": ",Object(i.b)("a",{parentName:"p",href:"/mugshot/api/types/mugshot.mugshotselector"},Object(i.b)("em",{parentName:"a"},"MugshotSelector"))),Object(i.b)("p",null,"All elements identified by this selector will be covered with ",Object(i.b)("a",{parentName:"p",href:"/mugshot/api/interfaces/mugshot.screenshotoptions#ignorecolor"},"ignoreColor"),"\nbefore taking the screenshot."),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/NiGhTTraX/mugshot/blob/e30e714/packages/mugshot/src/interfaces/screenshotter.ts#L8"},"packages/mugshot/src/interfaces/screenshotter.ts:8")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"ignorecolor"},"ignoreColor"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"ignoreColor"),": ",Object(i.b)("em",{parentName:"p"},"string")),Object(i.b)("p",null,"The color used to covered elements matched by the ",Object(i.b)("a",{parentName:"p",href:"/mugshot/api/interfaces/mugshot.screenshotoptions#ignore"},"ignore")," selector."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"example")),"\n#ff0000 // 6 hex char notation"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"example")),"\n#ccc // 3 hex char notation"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"default"))," #000"),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/NiGhTTraX/mugshot/blob/e30e714/packages/mugshot/src/interfaces/screenshotter.ts#L21"},"packages/mugshot/src/interfaces/screenshotter.ts:21")))}l.isMDXComponent=!0},128:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,h=u["".concat(a,".").concat(m)]||u[m]||b[m]||i;return n?o.a.createElement(h,s(s({ref:t},p),{},{components:n})):o.a.createElement(h,s({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);