"use strict";(self.webpackChunkpentafox_web=self.webpackChunkpentafox_web||[]).push([[512],{2363:function(n,e,t){t.d(e,{Z:function(){return b}});var r=t(7294),i=t(8248);var o=t(6870),a={left:"flex-start",center:"center",right:"flex-end",apart:"space-between"},l=(0,o.k)((function(n,e){var t=e.spacing,r=e.position,i=e.noWrap,o=e.grow,l=e.align,f=e.count;return{root:{boxSizing:"border-box",display:"flex",flexDirection:"row",alignItems:l||"center",flexWrap:i?"nowrap":"wrap",justifyContent:a[r],gap:n.fn.size({size:t,sizes:n.spacing}),"& > *":{boxSizing:"border-box",maxWidth:o?"calc(".concat(100/f,"% - ").concat(n.fn.size({size:t,sizes:n.spacing})-n.fn.size({size:t,sizes:n.spacing})/f,"px)"):void 0,flexGrow:o?1:0}}}})),f=t(8958);function c(n,e){var t="undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(!t){if(Array.isArray(n)||(t=function(n,e){if(!n)return;if("string"==typeof n)return s(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(n);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return s(n,e)}(n))||e&&n&&"number"==typeof n.length){t&&(n=t);var r=0,i=function(){};return{s:i,n:function(){return r>=n.length?{done:!0}:{done:!1,value:n[r++]}},e:function(n){throw n},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,l=!1;return{s:function(){t=t.call(n)},n:function(){var n=t.next();return a=n.done,n},e:function(n){l=!0,o=n},f:function(){try{a||null==t.return||t.return()}finally{if(l)throw o}}}}function s(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}var p=Object.defineProperty,d=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,m=function(n,e,t){return e in n?p(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t},h={position:"left",spacing:"md"},b=(0,r.forwardRef)((function(n,e){var t=(0,i.N4)("Group",h,n),o=t.className,a=t.position,s=t.align,p=t.children,b=t.noWrap,x=t.grow,y=t.spacing,v=t.unstyled,w=function(n,e){var t={};for(var r in n)u.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(null!=n&&d){var i,o=c(d(n));try{for(o.s();!(i=o.n()).done;)r=i.value,e.indexOf(r)<0&&g.call(n,r)&&(t[r]=n[r])}catch(a){o.e(a)}finally{o.f()}}return t}(t,["className","position","align","children","noWrap","grow","spacing","unstyled"]),z=function(n){return r.Children.toArray(n).filter(Boolean)}(p),j=l({align:s,grow:x,noWrap:b,spacing:y,position:a,count:z.length},{unstyled:v,name:"Group"}),O=j.classes,S=j.cx;return r.createElement(f.x,function(n,e){for(var t in e||(e={}))u.call(e,t)&&m(n,t,e[t]);if(d){var r,i=c(d(e));try{for(i.s();!(r=i.n()).done;)t=r.value,g.call(e,t)&&m(n,t,e[t])}catch(o){i.e(o)}finally{i.f()}}return n}({className:S(O.root,o),ref:e},w),z)}));b.displayName="@mantine/core/Group"},4567:function(n,e,t){t.d(e,{D:function(){return k}});var r=t(7294),i=t(8248),o=t(6870);function a(n,e){var t="undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(!t){if(Array.isArray(n)||(t=function(n,e){if(!n)return;if("string"==typeof n)return l(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(n);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return l(n,e)}(n))||e&&n&&"number"==typeof n.length){t&&(n=t);var r=0,i=function(){};return{s:i,n:function(){return r>=n.length?{done:!0}:{done:!1,value:n[r++]}},e:function(n){throw n},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,f=!1;return{s:function(){t=t.call(n)},n:function(){var n=t.next();return a=n.done,n},e:function(n){f=!0,o=n},f:function(){try{a||null==t.return||t.return()}finally{if(f)throw o}}}}function l(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}var f=Object.defineProperty,c=Object.defineProperties,s=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,g=function(n,e,t){return e in n?f(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t},m=function(n,e){for(var t in e||(e={}))d.call(e,t)&&g(n,t,e[t]);if(p){var r,i=a(p(e));try{for(i.s();!(r=i.n()).done;){t=r.value;u.call(e,t)&&g(n,t,e[t])}}catch(o){i.e(o)}finally{i.f()}}return n};function h(n,e,t){return void 0!==n?n in t.headings.sizes?t.headings.sizes[n].fontSize:n:t.headings.sizes[e].fontSize}function b(n,e,t){return void 0!==n&&n in t.headings.sizes?t.headings.sizes[n].lineHeight:t.headings.sizes[e].lineHeight}var x=(0,o.k)((function(n,e){var t,r,i=e.element,o=e.weight,a=e.size,l=e.inline;return{root:(t=m({},n.fn.fontStyles()),r={fontFamily:n.headings.fontFamily,fontWeight:o||n.headings.sizes[i].fontWeight||n.headings.fontWeight,fontSize:h(a,i,n),lineHeight:l?1:b(a,i,n),margin:0},c(t,s(r)))}})),y=t(4723);function v(n,e){var t="undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(!t){if(Array.isArray(n)||(t=function(n,e){if(!n)return;if("string"==typeof n)return w(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(n);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return w(n,e)}(n))||e&&n&&"number"==typeof n.length){t&&(n=t);var r=0,i=function(){};return{s:i,n:function(){return r>=n.length?{done:!0}:{done:!1,value:n[r++]}},e:function(n){throw n},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,l=!1;return{s:function(){t=t.call(n)},n:function(){var n=t.next();return a=n.done,n},e:function(n){l=!0,o=n},f:function(){try{a||null==t.return||t.return()}finally{if(l)throw o}}}}function w(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}var z=Object.defineProperty,j=Object.getOwnPropertySymbols,O=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable,A=function(n,e,t){return e in n?z(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t},P={order:1},k=(0,r.forwardRef)((function(n,e){var t=(0,i.N4)("Title",P,n),o=t.className,a=t.order,l=t.children,f=t.unstyled,c=t.size,s=t.weight,p=t.inline,d=function(n,e){var t={};for(var r in n)O.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(null!=n&&j){var i,o=v(j(n));try{for(o.s();!(i=o.n()).done;)r=i.value,e.indexOf(r)<0&&S.call(n,r)&&(t[r]=n[r])}catch(a){o.e(a)}finally{o.f()}}return t}(t,["className","order","children","unstyled","size","weight","inline"]),u=x({element:"h".concat(a),weight:s,size:c,inline:p},{name:"Title",unstyled:f}),g=u.classes,m=u.cx;return[1,2,3,4,5,6].includes(a)?r.createElement(y.x,function(n,e){for(var t in e||(e={}))O.call(e,t)&&A(n,t,e[t]);if(j){var r,i=v(j(e));try{for(i.s();!(r=i.n()).done;)t=r.value,S.call(e,t)&&A(n,t,e[t])}catch(o){i.e(o)}finally{i.f()}}return n}({component:"h".concat(a),ref:e,className:m(g.root,o)},d),l):null}));k.displayName="@mantine/core/Title"},1623:function(n,e,t){t(1082);var r=t(7294),i=t(542),o=(t(1353),t(9392)),a=t(8248),l={fontFamily:"'Varela Round', sans-serif !important",fontSizes:{xs:12,sm:13,md:14,lg:18,xl:20},headings:{fontFamily:"'Outfit', sans-serif !important"}};e.Z=function(n){var e=n.children,t=(n.headProps,n.hideLink,n.showCareers),f=void 0===t||t;return r.createElement(a.Me,{withGlobalStyles:!0,withNormalizeCSS:!0,theme:l},r.createElement(o.Z,{showCareers:f,showDarkLogo:!1}),r.createElement("div",{className:"content-wrap"},r.createElement("main",null,e)),r.createElement(i.Z,null))}},4698:function(n,e,t){t.d(e,{NZ:function(){return s},jP:function(){return p}});var r,i,o,a=t(1880),l=t(1958),f=t(5142),c=l.ZP.div(r||(r=(0,a.Z)([""]))),s=l.ZP.section(i||(i=(0,a.Z)(["\n  text-align: center;\n  padding-top: 80px;\n  padding-bottom: 20px;\n  background: linear-gradient(180deg, #e64545 0%, #c23232 39.46%, #a22121 100%);\n  /* box-shadow: 0px 80px 20px 0px rgba(0,0,0,0.25) inset; */\n\n  min-height: 340px;\n  height: 60vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  h1 {\n    color: #fdfdfd;\n    font-weight: 700;\n    font-size: 2.75rem;\n  }\n\n  p {\n    font-size: 1.2rem;\n    color: #fdfdfd;\n  }\n\n  "," {\n    padding-top: 120px;\n    padding-bottom: 60px;\n    min-height: 50vh;\n    height: 340px;\n\n    h1 {\n      font-size: 2rem;\n    }\n\n    p {\n      font-size: 1rem;\n    }\n  }\n"])),f.xs),p=l.ZP.section(o||(o=(0,a.Z)(["\n  text-align: left;\n  padding-top: 80px;\n  padding-bottom: 20px;\n  background: linear-gradient(180deg, #e64545 0%, #c23232 39.46%, #a22121 100%);\n  /* box-shadow: 0px 80px 20px 0px rgba(0,0,0,0.25) inset; */\n\n  min-height: 340px;\n  height: 90vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  h1 {\n    color: #fdfdfd;\n    font-weight: 700;\n    font-size: 4rem;\n  }\n\n  p {\n    font-size: 1.3rem;\n    color: #fdfdfd;\n    margin-top: 2rem;\n  }\n\n  "," {\n    padding-top: 120px;\n    padding-bottom: 60px;\n    min-height: 50vh;\n    height: 340px;\n\n    h1 {\n      font-size: 2rem;\n    }\n\n    p {\n      font-size: 1rem;\n    }\n  }\n"])),f.xs);e.ZP=c},976:function(n,e,t){t.d(e,{V:function(){return f},j:function(){return c}});var r,i,o=t(1880),a=t(1958),l=t(5142),f=a.ZP.section(r||(r=(0,o.Z)(["\n  padding: 40px 0;\n  background-color: #f5f5f5;\n  min-height: 400px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n\n  .heading {\n    font-weight: 600;\n    color: #3e3e3e;\n    margin-bottom: 10px;\n  }\n\n  p {\n    width: 65vw;\n    margin: 0 auto;\n    margin-bottom: 40px;\n    color: #3e3e3e;\n    text-align: center;\n  }\n\n  .benefits {\n    display: grid;\n    margin: 40px auto;\n    grid-gap: 40px;\n    grid-template-columns: 1fr 1fr;\n    max-width: 95%;\n\n    .benefit-card {\n      text-align: left;\n      padding-left: 55px;\n      position: relative;\n      display: flex;\n      align-items: center;\n      height: 40px;\n\n      figure {\n        width: 40px;\n        height: 37px;\n        padding: 10px;\n        left: 0;\n        margin: 0;\n\n        &::before,\n        &::after {\n          background-size: contain;\n        }\n      }\n      span {\n        color: #444;\n        font-size: 16px;\n        text-align: left;\n      }\n    }\n  }\n\n  .benefits-section {\n    padding: 30px 0;\n  }\n\n  "," {\n    p {\n      width: 80vw;\n    }\n\n    .benefits {\n      max-width: 76%;\n    }\n  }\n\n  "," {\n    p {\n      width: 70%;\n      margin-bottom: 50px;\n    }\n\n    .benefits {\n      max-width: 50%;\n    }\n  }\n\n  "," {\n    min-height: 40vh;\n\n    .benefits-section {\n      .heading {\n        font-size: 1.8rem;\n        margin-bottom: 20px;\n      }\n    }\n\n    p {\n      width: 95%;\n    }\n\n    .benefits {\n      text-align: center;\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n\n      .benefit-card {\n        padding-left: 0;\n        text-align: center;\n        padding-top: 50px;\n        height: auto;\n\n        figure {\n          left: 0;\n          top: 0;\n          width: 100%;\n\n          &::before,\n          &::after {\n            background-position: center;\n          }\n        }\n      }\n    }\n  }\n"])),l.sm,l.md,l.xs),c=a.ZP.div(i||(i=(0,o.Z)(["\n  padding-top: 40px;\n\n  .heading {\n    font-size: 1.8rem;\n    color: #3e3e3e;\n    font-weight: 600;\n    /* font-size: 1.4rem; */\n    margin-bottom: 20px;\n    position: relative;\n    /* text-align: center; */\n\n    & + p {\n      color: #3e3e3e;\n      margin-bottom: 40px;\n    }\n\n    &::after {\n      /* content: ''; */\n      position: absolute;\n      left: 40%;\n      left: 0;\n      bottom: -10px;\n      border-bottom: 2px solid #ddd;\n      width: 20%;\n      margin: 0 auto;\n    }\n  }\n\n  .job-listing {\n    display: grid;\n    grid-gap: 16px;\n    grid-template-columns: 1fr;\n\n    .job-card {\n      cursor: pointer;\n      padding: 16px;\n      border: 1px solid rgba(50, 50, 50, 0.1);\n      border-radius: 3px;\n      background-color: #fff;\n      transition: all 0.35s ease-in-out;\n\n      &:hover {\n        box-shadow: 0 8px 20px -10px #ccc;\n      }\n\n      .job-title {\n        font-size: 1.35rem;\n        color: #444;\n        letter-spacing: 0.5px;\n      }\n\n      .job-desc-short {\n        color: #888;\n        margin: 0;\n        margin-top: 12px;\n      }\n\n      .job-tags {\n        margin-top: 12px;\n\n        .job-tag-item {\n          display: inline-block;\n          padding: 2px 8px;\n          margin-right: 8px;\n          margin-bottom: 4px;\n          border-radius: 2px;\n          color: #fff;\n          font-size: 0.8rem;\n          line-height: 1rem;\n          background-color: rgba(41, 31, 51, 0.7);\n        }\n      }\n    }\n  }\n\n  .job-email {\n    padding-top: 40px;\n    /* text-align: center; */\n\n    color: #bbb;\n    p {\n      font-size: 14px;\n      color: #888;\n    }\n    a {\n      color: #444;\n      transition: all 0.3s ease-in-out;\n\n      &:hover {\n        color: #333;\n      }\n    }\n  }\n\n  "," {\n    padding-top: 60px;\n\n    .heading {\n      color: #3e3e3e;\n      font-size: 2rem;\n      margin-bottom: 10px;\n      position: relative;\n      text-align: center;\n\n      &::after {\n        /* content: ''; */\n        position: absolute;\n        left: 45%;\n        left: 0%;\n        bottom: -16px;\n        border-bottom: 2px solid #ddd;\n        width: 10%;\n        margin: 0 auto;\n      }\n    }\n\n    .job-listing {\n      max-width: 75%;\n      margin: 0 auto;\n      grid-gap: 20px;\n      grid-template-columns: 1fr;\n    }\n\n    .job-email {\n      font-size: 16px;\n    }\n  }\n"])),l.sm)}}]);
//# sourceMappingURL=a47ef2d6bc37cd8d7765b3ab73101b430c575a16-ec388a519627daba8a79.js.map