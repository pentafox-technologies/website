/*! For license information please see component---src-pages-products-js-539a814fc6b35e06f395.js.LICENSE.txt */
(self.webpackChunkpentafox_web=self.webpackChunkpentafox_web||[]).push([[737],{9931:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)){if(n.length){var l=o.apply(null,n);l&&e.push(l)}}else if("object"===a)if(n.toString===Object.prototype.toString)for(var i in n)r.call(n,i)&&n[i]&&e.push(i);else e.push(n.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},6204:function(e,t,n){"use strict";var r=n(6136),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},l={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},i={};function c(e){return r.isMemo(e)?l:i[e.$$typeof]||o}i[r.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},i[r.Memo]=l;var s=Object.defineProperty,u=Object.getOwnPropertyNames,d=Object.getOwnPropertySymbols,f=Object.getOwnPropertyDescriptor,m=Object.getPrototypeOf,p=Object.prototype;e.exports=function e(t,n,r){if("string"!=typeof n){if(p){var o=m(n);o&&o!==p&&e(t,o,r)}var l=u(n);d&&(l=l.concat(d(n)));for(var i=c(t),y=c(n),g=0;g<l.length;++g){var b=l[g];if(!(a[b]||r&&r[b]||y&&y[b]||i&&i[b])){var v=f(n,b);try{s(t,b,v)}catch(h){}}}}return t}},631:function(e,t){"use strict";var n="function"==typeof Symbol&&Symbol.for,r=n?Symbol.for("react.element"):60103,o=n?Symbol.for("react.portal"):60106,a=n?Symbol.for("react.fragment"):60107,l=n?Symbol.for("react.strict_mode"):60108,i=n?Symbol.for("react.profiler"):60114,c=n?Symbol.for("react.provider"):60109,s=n?Symbol.for("react.context"):60110,u=n?Symbol.for("react.async_mode"):60111,d=n?Symbol.for("react.concurrent_mode"):60111,f=n?Symbol.for("react.forward_ref"):60112,m=n?Symbol.for("react.suspense"):60113,p=n?Symbol.for("react.suspense_list"):60120,y=n?Symbol.for("react.memo"):60115,g=n?Symbol.for("react.lazy"):60116,b=n?Symbol.for("react.block"):60121,v=n?Symbol.for("react.fundamental"):60117,h=n?Symbol.for("react.responder"):60118,x=n?Symbol.for("react.scope"):60119;function E(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case u:case d:case a:case i:case l:case m:return e;default:switch(e=e&&e.$$typeof){case s:case f:case g:case y:case c:return e;default:return t}}case o:return t}}}function w(e){return E(e)===d}t.AsyncMode=u,t.ConcurrentMode=d,t.ContextConsumer=s,t.ContextProvider=c,t.Element=r,t.ForwardRef=f,t.Fragment=a,t.Lazy=g,t.Memo=y,t.Portal=o,t.Profiler=i,t.StrictMode=l,t.Suspense=m,t.isAsyncMode=function(e){return w(e)||E(e)===u},t.isConcurrentMode=w,t.isContextConsumer=function(e){return E(e)===s},t.isContextProvider=function(e){return E(e)===c},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return E(e)===f},t.isFragment=function(e){return E(e)===a},t.isLazy=function(e){return E(e)===g},t.isMemo=function(e){return E(e)===y},t.isPortal=function(e){return E(e)===o},t.isProfiler=function(e){return E(e)===i},t.isStrictMode=function(e){return E(e)===l},t.isSuspense=function(e){return E(e)===m},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===a||e===d||e===i||e===l||e===m||e===p||"object"==typeof e&&null!==e&&(e.$$typeof===g||e.$$typeof===y||e.$$typeof===c||e.$$typeof===s||e.$$typeof===f||e.$$typeof===v||e.$$typeof===h||e.$$typeof===x||e.$$typeof===b)},t.typeOf=E},6136:function(e,t,n){"use strict";e.exports=n(631)},6876:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(7294),o=n(1597),a=n(4665),l=n(1227),i=function(){var e,t,n,i,c=(0,a.Z)(),s=(0,o.K2)("3171475331");return r.createElement(l.V,null,r.createElement("div",{className:"container lg-container"},r.createElement("div",{className:"row "+(c?"":"vertical-bottom")},r.createElement("div",{className:"col-12 col-sm-6 col-md-6"},r.createElement("p",{className:"heading-txt mb-24"},r.createElement("span",{className:"bold"},"Don’t be a stranger"),"just say hello"),r.createElement("p",{className:"mb-3"},"Feel free to get in touch with us.",r.createElement("br",null),"We are always open to discussing new projects, creative",r.createElement("br",null),"ideas or opportunity to be part of your visions."),r.createElement("div",{className:"row"},r.createElement("div",{className:"col-6"},r.createElement("p",{className:"mb-2"},r.createElement("span",null,"Feel like talking"),r.createElement("a",{href:"tel:"+(null===(e=s.allContentfulContact.nodes[0])||void 0===e?void 0:e.mobile)},null===(t=s.allContentfulContact.nodes[0])||void 0===t?void 0:t.mobile))),r.createElement("div",{className:"col-6"},r.createElement("p",{className:"mb-2"},r.createElement("span",null,"Need help?"),r.createElement("a",{href:"mailto:"+(null===(n=s.allContentfulContact.nodes[0])||void 0===n?void 0:n.mail)},null===(i=s.allContentfulContact.nodes[0])||void 0===i?void 0:i.mail))))),r.createElement("div",{className:"col-12 col-sm-6 col-md-6"},r.createElement("p",{className:"mb-40"},r.createElement("span",{className:"section-title"},"Our Locations"),r.createElement("div",{className:"location-grid"},s.allContentfulLocations.nodes.map((function(e,t){return r.createElement("div",{key:t},r.createElement("p",{className:"location-title"},e.name),r.createElement("p",{className:"location-address"},e.address))})))))),r.createElement("div",{className:"btm-link"},r.createElement("div",{className:"left-col"},r.createElement(o.rU,{to:"/",className:"pr-3 text-white"},"Home"),"   ","|","   ",r.createElement(o.rU,{to:"/careers",className:"pl-3 text-white"},"Careers"),"   ","|","   "))))},c=n(9392),s=function(e){var t=e.children,n=(e.headProps,e.hideLink,e.showCareers),o=void 0===n||n,a=e.showDarkLogo,l=void 0!==a&&a;return r.createElement(r.Fragment,null,r.createElement(c.Z,{showCareers:o,showDarkLogo:l}),r.createElement("div",{className:"content-wrap"},r.createElement("main",null,t)),r.createElement(i,null))}},4698:function(e,t,n){"use strict";n.d(t,{NZ:function(){return u},jP:function(){return d}});var r,o,a,l=n(1880),i=n(6726),c=n(5142),s=i.ZP.div(r||(r=(0,l.Z)([""]))),u=i.ZP.section(o||(o=(0,l.Z)(["\n  text-align: center;\n  padding-top: 80px;\n  padding-bottom: 20px;\n  background: linear-gradient(180deg, #e64545 0%, #c23232 39.46%, #a22121 100%);\n  /* box-shadow: 0px 80px 20px 0px rgba(0,0,0,0.25) inset; */\n\n  min-height: 340px;\n  height: 60vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  h1 {\n    color: #fdfdfd;\n    font-weight: 700;\n    font-size: 2.75rem;\n  }\n\n  p {\n    font-size: 1.2rem;\n    color: #fdfdfd;\n  }\n\n  "," {\n    padding-top: 120px;\n    padding-bottom: 60px;\n    min-height: 50vh;\n    height: 340px;\n\n    h1 {\n      font-size: 2rem;\n    }\n\n    p {\n      font-size: 1rem;\n    }\n  }\n"])),c.xs),d=i.ZP.section(a||(a=(0,l.Z)(["\n  text-align: left;\n  padding-top: 80px;\n  padding-bottom: 20px;\n  background: linear-gradient(180deg, #e64545 0%, #c23232 39.46%, #a22121 100%);\n  /* box-shadow: 0px 80px 20px 0px rgba(0,0,0,0.25) inset; */\n\n  min-height: 340px;\n  height: 90vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  h1 {\n    color: #fdfdfd;\n    font-weight: 700;\n    font-size: 4rem;\n  }\n\n  p {\n    font-size: 1.3rem;\n    color: #fdfdfd;\n    margin-top: 2rem;\n  }\n\n  "," {\n    padding-top: 120px;\n    padding-bottom: 60px;\n    min-height: 50vh;\n    height: 340px;\n\n    h1 {\n      font-size: 2rem;\n    }\n\n    p {\n      font-size: 1rem;\n    }\n  }\n"])),c.xs);t.ZP=s},9433:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return N}});var r=n(7294),o=n(4942),a=n(885),l=n(3366);var i=n(9931),c=n.n(i),s=n(5893),u=["as","disabled"];function d(e){var t=e.tagName,n=e.disabled,r=e.href,o=e.target,a=e.rel,l=e.onClick,i=e.tabIndex,c=void 0===i?0:i,s=e.type;t||(t=null!=r||null!=o||null!=a?"a":"button");var u={tagName:t};if("button"===t)return[{type:s||"button",disabled:n},u];var d=function(e){(n||"a"===t&&function(e){return!e||"#"===e.trim()}(r))&&e.preventDefault(),n?e.stopPropagation():null==l||l(e)};return"a"===t&&(r||(r="#"),n&&(r=void 0)),[{role:"button",disabled:void 0,tabIndex:n?void 0:c,href:r,target:"a"===t?o:void 0,"aria-disabled":n||void 0,rel:"a"===t?a:void 0,onClick:d,onKeyDown:function(e){" "===e.key&&(e.preventDefault(),d(e))}},u]}var f=r.forwardRef((function(e,t){var n=e.as,r=e.disabled,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,u),l=d(Object.assign({tagName:n,disabled:r},o)),i=(0,a.Z)(l,2),c=i[0],f=i[1].tagName;return(0,s.jsx)(f,Object.assign({},o,c,{ref:t}))}));f.displayName="Button";var m=["xxl","xl","lg","md","sm","xs"],p=r.createContext({prefixes:{},breakpoints:m});p.Consumer,p.Provider;function y(e,t){var n=(0,r.useContext)(p).prefixes;return e||n[t]||t}var g=["as","bsPrefix","variant","size","active","className"];function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var h=r.forwardRef((function(e,t){var n=e.as,r=e.bsPrefix,o=e.variant,i=e.size,u=e.active,f=e.className,m=function(e,t){if(null==e)return{};var n,r,o=(0,l.Z)(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,g),p=y(r,"btn"),b=d(v({tagName:n},m)),h=(0,a.Z)(b,2),x=h[0],E=h[1].tagName;return(0,s.jsx)(E,v(v(v({},x),m),{},{ref:t,className:c()(f,p,u&&"active",o&&"".concat(p,"-").concat(o),i&&"".concat(p,"-").concat(i),m.href&&m.disabled&&"disabled")}))}));h.displayName="Button",h.defaultProps={variant:"primary",active:!1,disabled:!1};var x=h,E=n(4438),w=n(6876),P=n(4698),O=function(e){var t=e.contentRight;return console.log(t),r.createElement("div",{style:{padding:"20px 70px"}},r.createElement("div",{style:{display:"flex",paddingTop:50,textAlign:"left",flexDirection:t?"row-reverse":"row"}},r.createElement("div",{className:"container"}),r.createElement("div",{className:"container",style:{padding:"0px 30px"}},r.createElement("h3",{style:{fontSize:"1.6rem"}},"Design customized lending products your customers will love."),r.createElement("p",{style:{paddingTop:12,fontSize:"1.1rem"}},"Craft customized lending products for every customer, by leveraging our BYOS architecture and stand apart from your competitors by seamlessly integrating dynamic pricing and flexible repayment options in every loan product."),r.createElement("ul",{className:"list-unstyled",style:{display:"flex",flexWrap:"wrap"}},r.createElement("li",{style:{minWidth:"50%",paddingTop:12}},"Buy Now Pay later | Line of Credit"),r.createElement("li",{style:{minWidth:"50%",paddingTop:12}},"Co-Lending"),r.createElement("li",{style:{minWidth:"50%",paddingTop:12}},"Reporting Dashboard"),r.createElement("li",{style:{minWidth:"50%",paddingTop:12}},"Flexible Loan Product Constructs"),r.createElement("li",{style:{minWidth:"50%",paddingTop:12}},"Co-Lending"),r.createElement("li",{style:{minWidth:"50%",paddingTop:12}},"Reporting Dashboard")))))},N=function(){return r.createElement(w.Z,{hideLink:!0,showCareers:!1,showDarkLogo:!1,headProps:{pageTitle:"Products"}},r.createElement(E.p,null,r.createElement(P.ZP,null,r.createElement(P.jP,null,r.createElement("div",{className:"container lg-container"},r.createElement("h1",null,"Loan",r.createElement("br",null),"Management",r.createElement("br",null),"System.",r.createElement("br",null),"Streamlined."),r.createElement("p",null,"Meet the lending challenges of today and tomorrow",r.createElement("br",null),"with custom designed solutions, trusted by industry experts."))),r.createElement("div",{style:{paddingTop:70,width:"80%",margin:"auto"}},r.createElement("h1",{style:{textAlign:"center"}},"Loan Management System Which Answers These Challenges"),r.createElement(O,{contentRight:!1}),r.createElement(O,{contentRight:!0}),r.createElement(O,{contentRight:!1}),r.createElement(O,{contentRight:!0})),r.createElement("div",{style:{backgroundColor:"#F4F4F4",textAlign:"center",padding:50}},r.createElement("h2",null,"Pentafox Lending Cloud"),r.createElement("p",null,"Did you know that Pentafox offers a free proof of concept (POC)? Contact us to get started."),r.createElement(x,null,"Schedule a Demo")))))}},4942:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Z:function(){return r}})},3366:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}n.d(t,{Z:function(){return r}})},885:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(181);function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],l=!0,i=!1;try{for(n=n.call(e);!(l=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);l=!0);}catch(c){i=!0,o=c}finally{try{l||null==n.return||n.return()}finally{if(i)throw o}}return a}}(e,t)||(0,r.Z)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=component---src-pages-products-js-539a814fc6b35e06f395.js.map