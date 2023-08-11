/*! For license information please see component---src-pages-products-js-f96a1453a152879cb94c.js.LICENSE.txt */
(self.webpackChunkpentafox_web=self.webpackChunkpentafox_web||[]).push([[737],{9931:function(e,n){var t;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],n=0;n<arguments.length;n++){var t=arguments[n];if(t){var i=typeof t;if("string"===i||"number"===i)e.push(t);else if(Array.isArray(t)){if(t.length){var o=a.apply(null,t);o&&e.push(o)}}else if("object"===i){if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]")){e.push(t.toString());continue}for(var l in t)r.call(t,l)&&t[l]&&e.push(l)}}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(t=function(){return a}.apply(n,[]))||(e.exports=t)}()},1623:function(e,n,t){"use strict";t(1082);var r=t(7294),a=t(542),i=(t(1353),t(9392)),o=t(5123),l={fontFamily:"'Varela Round', sans-serif !important",fontSizes:{xs:12,sm:13,md:14,lg:18,xl:20},headings:{fontFamily:"'Outfit', sans-serif !important"}};n.Z=function(e){var n=e.children,t=(e.headProps,e.hideLink,e.showCareers),s=void 0===t||t;return r.createElement(o.Me,{withGlobalStyles:!0,withNormalizeCSS:!0,theme:l},r.createElement(i.Z,{showCareers:s,showDarkLogo:!1}),r.createElement("div",{className:"content-wrap"},r.createElement("main",null,n)),r.createElement(a.Z,null))}},4698:function(e,n,t){"use strict";t.d(n,{NZ:function(){return d},jP:function(){return p}});var r,a,i,o=t(1880),l=t(1958),s=t(5142),c=l.ZP.div(r||(r=(0,o.Z)([""]))),d=l.ZP.section(a||(a=(0,o.Z)(["\n  text-align: center;\n  padding-top: 80px;\n  padding-bottom: 20px;\n  background: linear-gradient(180deg, #e64545 0%, #c23232 39.46%, #a22121 100%);\n  /* box-shadow: 0px 80px 20px 0px rgba(0,0,0,0.25) inset; */\n\n  min-height: 340px;\n  height: 60vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  h1 {\n    color: #fdfdfd;\n    font-weight: 700;\n    font-size: 2.75rem;\n  }\n\n  p {\n    font-size: 1.2rem;\n    color: #fdfdfd;\n  }\n\n  "," {\n    padding-top: 120px;\n    padding-bottom: 60px;\n    min-height: 50vh;\n    height: 340px;\n\n    h1 {\n      font-size: 2rem;\n    }\n\n    p {\n      font-size: 1rem;\n    }\n  }\n"])),s.xs),p=l.ZP.section(i||(i=(0,o.Z)(["\n  text-align: left;\n  padding-top: 80px;\n  padding-bottom: 20px;\n  background: linear-gradient(180deg, #e64545 0%, #c23232 39.46%, #a22121 100%);\n  /* box-shadow: 0px 80px 20px 0px rgba(0,0,0,0.25) inset; */\n\n  min-height: 340px;\n  height: 90vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  h1 {\n    color: #fdfdfd;\n    font-weight: 700;\n    font-size: 4rem;\n  }\n\n  p {\n    font-size: 1.3rem;\n    color: #fdfdfd;\n    margin-top: 2rem;\n  }\n\n  "," {\n    padding-top: 120px;\n    padding-bottom: 60px;\n    min-height: 50vh;\n    height: 340px;\n\n    h1 {\n      font-size: 2rem;\n    }\n\n    p {\n      font-size: 1rem;\n    }\n  }\n"])),s.xs);n.ZP=c},9433:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return j}});var r=t(7294),a=t(4572),i=t(885),o=t(3366);var l=t(9931),s=t.n(l),c=t(5893),d=["as","disabled"];function p(e){var n=e.tagName,t=e.disabled,r=e.href,a=e.target,i=e.rel,o=e.role,l=e.onClick,s=e.tabIndex,c=void 0===s?0:s,d=e.type;n||(n=null!=r||null!=a||null!=i?"a":"button");var p={tagName:n};if("button"===n)return[{type:d||"button",disabled:t},p];var u=function(e){(t||"a"===n&&function(e){return!e||"#"===e.trim()}(r))&&e.preventDefault(),t?e.stopPropagation():null==l||l(e)};return"a"===n&&(r||(r="#"),t&&(r=void 0)),[{role:null!=o?o:"button",disabled:void 0,tabIndex:t?void 0:c,href:r,target:"a"===n?a:void 0,"aria-disabled":t||void 0,rel:"a"===n?i:void 0,onClick:u,onKeyDown:function(e){" "===e.key&&(e.preventDefault(),u(e))}},p]}var u=r.forwardRef((function(e,n){var t=e.as,r=e.disabled,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,d),o=p(Object.assign({tagName:t,disabled:r},a)),l=(0,i.Z)(o,2),s=l[0],u=l[1].tagName;return(0,c.jsx)(u,Object.assign({},a,s,{ref:n}))}));u.displayName="Button";var f=["xxl","xl","lg","md","sm","xs"],m=r.createContext({prefixes:{},breakpoints:f,minBreakpoint:"xs"});m.Consumer,m.Provider;function g(e,n){var t=(0,r.useContext)(m).prefixes;return e||t[n]||n}var h=["as","bsPrefix","variant","size","active","disabled","className"];function b(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function y(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?b(Object(t),!0).forEach((function(n){(0,a.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var v=r.forwardRef((function(e,n){var t=e.as,r=e.bsPrefix,a=e.variant,l=void 0===a?"primary":a,d=e.size,u=e.active,f=void 0!==u&&u,m=e.disabled,b=void 0!==m&&m,v=e.className,x=function(e,n){if(null==e)return{};var t,r,a=(0,o.Z)(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}(e,h),E=g(r,"btn"),w=p(y({tagName:t,disabled:b},x)),O=(0,i.Z)(w,2),P=O[0],j=O[1].tagName;return(0,c.jsx)(j,y(y(y({},P),x),{},{ref:n,disabled:b,className:s()(v,E,f&&"active",l&&"".concat(E,"-").concat(l),d&&"".concat(E,"-").concat(d),x.href&&b&&"disabled")}))}));v.displayName="Button";var x=v,E=t(4438),w=t(1623),O=t(4698),P=function(e){var n=e.contentRight;return r.createElement("div",{style:{padding:"20px 70px"}},r.createElement("div",{style:{display:"flex",paddingTop:50,textAlign:"left",flexDirection:n?"row-reverse":"row"}},r.createElement("div",{className:"container"}),r.createElement("div",{className:"container",style:{padding:"0px 30px"}},r.createElement("h3",{style:{fontSize:"1.6rem"}},"Design customized lending products your customers will love."),r.createElement("p",{style:{paddingTop:12,fontSize:"1.1rem"}},"Craft customized lending products for every customer, by leveraging our BYOS architecture and stand apart from your competitors by seamlessly integrating dynamic pricing and flexible repayment options in every loan product."),r.createElement("ul",{className:"list-unstyled",style:{display:"flex",flexWrap:"wrap"}},r.createElement("li",{style:{minWidth:"50%",paddingTop:12}},"Buy Now Pay later | Line of Credit"),r.createElement("li",{style:{minWidth:"50%",paddingTop:12}},"Co-Lending"),r.createElement("li",{style:{minWidth:"50%",paddingTop:12}},"Reporting Dashboard"),r.createElement("li",{style:{minWidth:"50%",paddingTop:12}},"Flexible Loan Product Constructs"),r.createElement("li",{style:{minWidth:"50%",paddingTop:12}},"Co-Lending"),r.createElement("li",{style:{minWidth:"50%",paddingTop:12}},"Reporting Dashboard")))))},j=function(){return r.createElement(w.Z,{hideLink:!0,showCareers:!1,showDarkLogo:!1,headProps:{pageTitle:"Products"}},r.createElement(E.p,null,r.createElement(O.ZP,null,r.createElement(O.jP,null,r.createElement("div",{className:"container lg-container"},r.createElement("h1",null,"Loan",r.createElement("br",null),"Management",r.createElement("br",null),"System.",r.createElement("br",null),"Streamlined."),r.createElement("p",null,"Meet the lending challenges of today and tomorrow",r.createElement("br",null),"with custom designed solutions, trusted by industry experts."))),r.createElement("div",{style:{paddingTop:70,width:"80%",margin:"auto"}},r.createElement("h1",{style:{textAlign:"center"}},"Loan Management System Which Answers These Challenges"),r.createElement(P,{contentRight:!1}),r.createElement(P,{contentRight:!0}),r.createElement(P,{contentRight:!1}),r.createElement(P,{contentRight:!0})),r.createElement("div",{style:{backgroundColor:"#F4F4F4",textAlign:"center",padding:50}},r.createElement("h2",null,"Pentafox Lending Cloud"),r.createElement("p",null,"Did you know that Pentafox offers a free proof of concept (POC)? Contact us to get started."),r.createElement(x,null,"Schedule a Demo")))))}},3366:function(e,n,t){"use strict";function r(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}t.d(n,{Z:function(){return r}})}}]);
//# sourceMappingURL=component---src-pages-products-js-f96a1453a152879cb94c.js.map