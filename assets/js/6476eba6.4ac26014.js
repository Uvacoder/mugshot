(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{128:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return m}));var r=n(0),s=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=s.a.createContext({}),p=function(e){var t=s.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},h=function(e){var t=p(e.components);return s.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return s.a.createElement(s.a.Fragment,{},t)}},u=s.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),h=p(n),u=r,m=h["".concat(o,".").concat(u)]||h[u]||b[u]||a;return n?s.a.createElement(m,i(i({ref:t},l),{},{components:n})):s.a.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var l=2;l<a;l++)o[l]=n[l];return s.a.createElement.apply(null,o)}return s.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},96:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),s=n(7),a=(n(0),n(128)),o={id:"usage",title:"Usage",description:"TODO",slug:"/usage",sidebar_position:3},i={unversionedId:"usage",id:"usage",isDocsHomePage:!1,title:"Usage",description:"TODO",source:"@site/docs/usage.md",sourceDirName:".",slug:"/usage",permalink:"/usage",editUrl:"https://github.com/nighttrax/mugshot/edit/master/website/docs/usage.md",version:"current",sidebarPosition:3,frontMatter:{id:"usage",title:"Usage",description:"TODO",slug:"/usage",sidebar_position:3},sidebar:"docs",previous:{title:"Installation",permalink:"/installation"}},c=[{value:"Setup",id:"setup",children:[{value:"Basic mode",id:"basic-mode",children:[]},{value:"Advanced mode",id:"advanced-mode",children:[]}]},{value:"Taking screenshots",id:"taking-screenshots",children:[{value:"Taking a screenshot of a single element",id:"taking-a-screenshot-of-a-single-element",children:[]},{value:"Ignoring elements",id:"ignoring-elements",children:[]},{value:"Storing screenshots",id:"storing-screenshots",children:[]}]},{value:"Diffing screenshots",id:"diffing-screenshots",children:[{value:"Reducing flakiness",id:"reducing-flakiness",children:[]}]}],l={toc:c};function p(e){var t=e.components,n=Object(s.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"If you have an existing testing suite then it will be straightforward to add Mugshot to it. If you're starting from scratch then you can choose your favorite tools, Mugshot doesn't impose anything on you like a test runner or a particular way to write the tests."),Object(a.b)("p",null,"Mugshot expects you to setup the testing environment. For instance, if you're planning to take screenshots of a website then you need to"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Open the browser."),Object(a.b)("li",{parentName:"ol"},"Navigate to the website you want to test."),Object(a.b)("li",{parentName:"ol"},"Interact with the UI (scroll, click a button, input some text in a form etc.).")),Object(a.b)("p",null,"Once everything is set you just call ",Object(a.b)("a",{parentName:"p",href:"/api/classes/mugshot.mugshot-1#check"},Object(a.b)("inlineCode",{parentName:"a"},"Mugshot.check"))," and Mugshot will take care of taking a new screenshot, comparing it to the baseline, producing diffs and returning a passing or a failing result."),Object(a.b)("p",null,"The following example illustrates the basics. It uses ",Object(a.b)("a",{parentName:"p",href:"https://webdriver.io/"},"WebdriverIO")," to control a browser and ",Object(a.b)("a",{parentName:"p",href:"https://jestjs.io/"},"Jest")," to run the test:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"import { Mugshot } from 'mugshot';\nimport { WebdriverIOAdapter } from '@mugshot/webdriverio';\nimport { remote } from 'webdriverio';\n\ntest('GitHub project page should look the same', async () => {\n  // 1. Open the browser.\n  const browser = await remote({\n    hostname: 'localhost',\n    capabilities: { browserName: 'chrome' }\n  });\n  \n  // 2. Navigate to the page you want to test.\n  await browser.url('https://github.com/NiGhTTraX/mugshot');\n  \n  // 3. Set up mugshot.\n  const mugshot = new Mugshot(\n    new WebdriverIOAdapter(browser),\n    'screenshots'\n  );\n\n  // 4. Take the screenshot.\n  const result = await mugshot.check('project page');\n  \n  // 5. Check the result.\n  expect(result.matches).toBeTruthy();\n});\n")),Object(a.b)("h2",{id:"setup"},"Setup"),Object(a.b)("p",null,'Mugshot can be setup in a "basic" mode, or an "advanced" mode.'),Object(a.b)("h3",{id:"basic-mode"},"Basic mode"),Object(a.b)("p",null,"In this mode Mugshot automatically chooses sane implementations of its various pluggable subsystems and has a simpler constructor signature:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"taking screenshots: ",Object(a.b)("a",{parentName:"li",href:"/api/classes/mugshot.webdriverscreenshotter"},"WebdriverScreenshotter")," with ",Object(a.b)("a",{parentName:"li",href:"/api/interfaces/mugshot.webdriverscreenshotteroptions#disableanimations"},Object(a.b)("inlineCode",{parentName:"a"},"{ disableAnimations: true }")),"; you need to choose one of the bundled ",Object(a.b)("a",{parentName:"li",href:"/installation#adapters"},"adapters")," or pass in your own,"),Object(a.b)("li",{parentName:"ul"},"storing screenshots: ",Object(a.b)("a",{parentName:"li",href:"/api/classes/mugshot.fsstorage"},"FsStorage"),","),Object(a.b)("li",{parentName:"ul"},"diffing screenshots: ",Object(a.b)("a",{parentName:"li",href:"/api/classes/mugshot.pixeldiffer"},"PixelDiffer"),","),Object(a.b)("li",{parentName:"ul"},"processing screenshots: ",Object(a.b)("a",{parentName:"li",href:"/api/classes/mugshot.jimpprocessor"},"JimpProcessor"),".")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"import { Mugshot } from 'mugshot';\nimport { WebdriverIOAdapter } from '@mugshot/webdriverio';\nimport { remote } from 'webdriverio';\n\nconst browser = await remote({\n  hostname: 'localhost',\n  capabilities: { browserName: 'chrome' }\n});\n\nconst mugshot = new Mugshot(\n  new WebdriverIOAdapter(browser),\n  './screenshots'\n);\n")),Object(a.b)("p",null,"If you need to pass in any options to the default implementations, or you want to plug in your own, use the advanced constructor."),Object(a.b)("h3",{id:"advanced-mode"},"Advanced mode"),Object(a.b)("p",null,"In this mode you can choose any of the bundled subsystem implementations and customize them as you see fit, or even provide your own implementations."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"import { \n  Mugshot,\n  WebdriverScreenshotter,\n  FsStorage,\n  JimpProcessor,\n  PixelDiffer\n} from 'mugshot';\nimport { WebdriverIOAdapter } from '@mugshot/webdriverio';\nimport { remote } from 'webdriverio';\n\nconst browser = await remote({\n  hostname: 'localhost',\n  capabilities: { browserName: 'chrome' }\n});\n\nconst mugshot = new Mugshot(\n  new WebdriverScreenshotter(\n     new WebdriverIOAdapter(browser),\n     { \n       pngProcessor: new JimpProcessor()\n     }\n  ),\n  new FsStorage('screenshots'),\n  {\n    pngDiffer: new PixelDiffer({ threshhold: 0.1 }),\n    createMissingBaselines: false\n  }\n);\n")),Object(a.b)("h2",{id:"taking-screenshots"},"Taking screenshots"),Object(a.b)("p",null,"Mugshot doesn't care where the screenshots are coming from, as long as they're in ",Object(a.b)("strong",{parentName:"p"},"PNG")," format. By default it ships with a ",Object(a.b)("a",{parentName:"p",href:"/api/classes/mugshot.webdriverscreenshotter"},"webdriver screenshotter"),", but you can pass in your own implementation. See the ",Object(a.b)("a",{parentName:"p",href:"/api/interfaces/mugshot.screenshotter"},"Screenshotter")," interface for more details."),Object(a.b)("h3",{id:"taking-a-screenshot-of-a-single-element"},"Taking a screenshot of a single element"),Object(a.b)("p",null,"A ",Object(a.b)("a",{parentName:"p",href:"/api/types/mugshot.mugshotselector"},"selector")," can be passed as the second argument to ",Object(a.b)("a",{parentName:"p",href:"/api/classes/mugshot.mugshot-1#check"},Object(a.b)("inlineCode",{parentName:"a"},"Mugshot.check"))," and will tell Mugshot to only screenshot the corresponding element. How the element is selected depends on the ",Object(a.b)("a",{parentName:"p",href:"/api/interfaces/mugshot.screenshotter"},"Screenshotter")," implementation. For example, using the ",Object(a.b)("a",{parentName:"p",href:"/api/classes/mugshot.webdriverscreenshotter"},"WebdriverScreenshotter"),", the element will be cropped out of the viewport according to its bounding rectangle."),Object(a.b)("h3",{id:"ignoring-elements"},"Ignoring elements"),Object(a.b)("p",null,"You can ignore elements on the page by passing a ",Object(a.b)("a",{parentName:"p",href:"/api/types/mugshot.mugshotselector"},"selector")," through the ",Object(a.b)("a",{parentName:"p",href:"/api/interfaces/mugshot.screenshotoptions#ignore"},Object(a.b)("inlineCode",{parentName:"a"},"ignore"))," option. The elements identified by that selector will be painted with the ",Object(a.b)("a",{parentName:"p",href:"/api/interfaces/mugshot.screenshotoptions#ignorecolor"},Object(a.b)("inlineCode",{parentName:"a"},"ignoreColor"))," (defaults to ",Object(a.b)("inlineCode",{parentName:"p"},"#000"),") before taking any screenshots."),Object(a.b)("h3",{id:"storing-screenshots"},"Storing screenshots"),Object(a.b)("p",null,"Screenshots are taken in ",Object(a.b)("strong",{parentName:"p"},"PNG")," format and how they're stored is controlled by the ",Object(a.b)("a",{parentName:"p",href:"/api/interfaces/mugshot.screenshotstorage"},Object(a.b)("inlineCode",{parentName:"a"},"ScreenshotStorage"))," interface. Mugshot ships with a ",Object(a.b)("a",{parentName:"p",href:"/api/classes/mugshot.fsstorage"},"local file system implementation"),", but you could easily plug in e.g. a cloud storage implementation."),Object(a.b)("p",null,"Regardless of how they're stored, Mugshot will produce up to 3 screenshots:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"A baseline screenshot. Think of it as a snapshot - how you expect your page/element to look."),Object(a.b)("li",{parentName:"ol"},"The current screenshot. Mugshot will always take a new screenshot each time it's called and compare it to the baseline. If they match, the new screenshot is discarded, otherwise it's saved to the storage."),Object(a.b)("li",{parentName:"ol"},"A diff. If the baseline and current screenshot are different then a diff highlighting the differences will be created and saved to the storage.")),Object(a.b)("h2",{id:"diffing-screenshots"},"Diffing screenshots"),Object(a.b)("p",null,"You can customize how diffs are produced by passing in a ",Object(a.b)("a",{parentName:"p",href:"/api/interfaces/mugshot.pngdiffer"},Object(a.b)("inlineCode",{parentName:"a"},"PNGDiffer"))," instance when instantiating ",Object(a.b)("a",{parentName:"p",href:"/api/classes/mugshot.mugshot-1"},Object(a.b)("inlineCode",{parentName:"a"},"Mugshot")),". Mugshot ships with ",Object(a.b)("a",{parentName:"p",href:"/api/classes/mugshot.pixeldiffer"},Object(a.b)("inlineCode",{parentName:"a"},"PixelDiffer"))," that compares screenshots pixels by pixels and marks the differing ones with a color."),Object(a.b)("h3",{id:"reducing-flakiness"},"Reducing flakiness"),Object(a.b)("p",null,"A frequent source of flakiness in visual tests is dynamic data e.g. the current time and date or live API data. You can ignore elements that contain such data by painting over them with a solid color square. See the ",Object(a.b)("a",{parentName:"p",href:"#ignoring-elements"},"ignore option")," for more details."),Object(a.b)("p",null,"Other common sources are animations and the blinking cursor in input fields. If you're using the ",Object(a.b)("a",{parentName:"p",href:"/api/classes/mugshot.webdriverscreenshotter"},Object(a.b)("inlineCode",{parentName:"a"},"WebdriverScreenshotter"))," you can turn them off by passing the ",Object(a.b)("a",{parentName:"p",href:"/api/interfaces/mugshot.webdriverscreenshotteroptions#disableanimations"},Object(a.b)("inlineCode",{parentName:"a"},"disableAnimations")," flag"),"."))}p.isMDXComponent=!0}}]);