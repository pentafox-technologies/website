"use strict";(self.webpackChunkpentafox_web=self.webpackChunkpentafox_web||[]).push([[539],{9055:function(e,t,r){r.d(t,{W:function(){return f}});var n=r(7294),o=r(3016),i=(0,r(6870).k)(((e,t)=>{let{fluid:r,size:n,sizes:o}=t;return{root:{paddingLeft:e.spacing.md,paddingRight:e.spacing.md,maxWidth:r?"100%":e.fn.size({size:n,sizes:o}),marginLeft:"auto",marginRight:"auto"}}})),l=r(5479),a=Object.defineProperty,s=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;const m={sizes:{xs:540,sm:720,md:960,lg:1140,xl:1320}},f=(0,n.forwardRef)(((e,t)=>{const r=(0,o.N4)("Container",m,e),{className:a,fluid:f,size:g,unstyled:p,sizes:x}=r,h=((e,t)=>{var r={};for(var n in e)d.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&s)for(var n of s(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r})(r,["className","fluid","size","unstyled","sizes"]),{classes:y,cx:v}=i({fluid:f,size:g,sizes:x},{unstyled:p,name:"Container"});return n.createElement(l.x,((e,t)=>{for(var r in t||(t={}))d.call(t,r)&&u(e,r,t[r]);if(s)for(var r of s(t))c.call(t,r)&&u(e,r,t[r]);return e})({className:v(y.root,a),ref:t},h))}));f.displayName="@mantine/core/Container"},1458:function(e,t,r){var n=r(3016),o=r(4723),i=r(7294);t.Z=e=>{let{children:t,style:r}=e;return i.createElement(n.Me,{theme:{fontFamily:"Varela Round !important"}},i.createElement(o.x,{style:r},t))}},2958:function(e,t,r){r.d(t,{Z:function(){return s}});var n=r(5479),o=r(9990),i=r(7294);const l=(0,r(6870).k)((e=>({subText:{color:"rgba(220, 41, 8, 0.1)",fontSize:"4rem",fontWeight:900,"@media (max-width: 768px)":{fontSize:"3rem"},"@media (max-width: 550px)":{fontSize:"2rem"}},titleText:{fontWeight:400,fontSize:"3rem","@media (max-width: 768px)":{fontSize:"2.5rem"},"@media (max-width: 550px)":{fontSize:"1.8rem"}},indexText:{color:"rgba(220, 41, 8, 0.1)",fontSize:"6rem",fontWeight:900,"@media (max-width: 768px)":{fontSize:"5rem"},"@media (max-width: 550px)":{fontSize:"4rem"},"@media (max-width: 390px)":{fontSize:"3rem"}}})));var a=r(1458);var s=e=>{let{title:t,index:r,reverse:s,subText:d,sectionDescription:c,showDescription:u=!1}=e;const{classes:m}=l(),f=t.split(" ");return i.createElement(n.x,{p:15},i.createElement("div",{style:{textAlign:s?"right":"left"}},i.createElement("h1",{className:m.subText},d)),i.createElement("div",{style:{display:"flex",alignItems:"center",flexDirection:s?"row-reverse":"row"}},i.createElement("div",{style:{display:"flex",alignItems:"center",flex:1,gap:40,flexDirection:s?"row-reverse":"row"}},i.createElement("h1",{className:m.titleText},null==f?void 0:f[0]," ",i.createElement("span",{style:{color:"rgba(220, 41, 8, 1)"}},null==f?void 0:f[1])),i.createElement("div",{style:{width:"35%",border:"1px solid rgba(220, 41, 8, 0.1)"}})),i.createElement("div",null,i.createElement("h1",{className:m.indexText},r))),u&&i.createElement(i.Fragment,null,i.createElement("div",{style:{marginTop:25,display:"flex",alignItems:"center",justifyContent:s?"flex-end":"flex-start"}},i.createElement(a.Z,{style:{fontSize:18,textAlign:s?"right":"left",width:"60%",lineHeight:1.6}},c)),i.createElement("div",{style:{display:"flex",justifyContent:s?"flex-end":"flex-start",marginTop:25}},i.createElement(o.z,{size:"lg",color:"red",style:{backgroundColor:"#CD0E11"}},"Explore"))))}},4698:function(e,t,r){r.d(t,{NZ:function(){return c},jP:function(){return u}});var n,o,i,l=r(1880),a=r(1958),s=r(5142);const d=a.ZP.div(n||(n=(0,l.Z)([""]))),c=a.ZP.section(o||(o=(0,l.Z)(["\n  text-align: center;\n  padding-top: 80px;\n  padding-bottom: 20px;\n  background: linear-gradient(180deg, #e64545 0%, #c23232 39.46%, #a22121 100%);\n  /* box-shadow: 0px 80px 20px 0px rgba(0,0,0,0.25) inset; */\n\n  min-height: 340px;\n  height: 60vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  h1 {\n    color: #fdfdfd;\n    font-weight: 700;\n    font-size: 2.75rem;\n  }\n\n  p {\n    font-size: 1.2rem;\n    color: #fdfdfd;\n  }\n\n  "," {\n    padding-top: 120px;\n    padding-bottom: 60px;\n    min-height: 50vh;\n    height: 340px;\n\n    h1 {\n      font-size: 2rem;\n    }\n\n    p {\n      font-size: 1rem;\n    }\n  }\n"])),s.xs),u=a.ZP.section(i||(i=(0,l.Z)(["\n  text-align: left;\n  padding-top: 80px;\n  padding-bottom: 20px;\n  background: linear-gradient(180deg, #e64545 0%, #c23232 39.46%, #a22121 100%);\n  /* box-shadow: 0px 80px 20px 0px rgba(0,0,0,0.25) inset; */\n\n  min-height: 340px;\n  height: 90vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  h1 {\n    color: #fdfdfd;\n    font-weight: 700;\n    font-size: 4rem;\n  }\n\n  p {\n    font-size: 1.3rem;\n    color: #fdfdfd;\n    margin-top: 2rem;\n  }\n\n  "," {\n    padding-top: 120px;\n    padding-bottom: 60px;\n    min-height: 50vh;\n    height: 340px;\n\n    h1 {\n      font-size: 2rem;\n    }\n\n    p {\n      font-size: 1rem;\n    }\n  }\n"])),s.xs);t.ZP=d},4852:function(e,t,r){r.r(t),r.d(t,{default:function(){return ne}});var n=r(7294),o=r(3016),i=r(7676);const[l,a]=(0,i.R)("Grid component was not found in tree");var s=r(728),d=r(6870),c=Object.defineProperty,u=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,g=(e,t,r)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))m.call(t,r)&&g(e,r,t[r]);if(u)for(var r of u(t))f.call(t,r)&&g(e,r,t[r]);return e};const x=(e,t)=>"content"===e?"auto":"auto"===e?"0px":e?"".concat(100/(t/e),"%"):void 0,h=(e,t,r)=>r||"auto"===e||"content"===e?"unset":x(e,t),y=(e,t)=>{if(e)return"auto"===e||t?1:0},v=(e,t)=>0===e?0:e?"".concat(100/(t/e),"%"):void 0,b=(e,t)=>void 0!==e?t.fn.size({size:e,sizes:t.spacing})/2:void 0;function w(e){let{sizes:t,offsets:r,orders:n,theme:o,columns:i,gutters:l,grow:a}=e;return s.j1.reduce(((e,s)=>(e["@media (min-width: ".concat(o.breakpoints[s],"px)")]={order:n[s],flexBasis:x(t[s],i),padding:b(l[s],o),flexShrink:0,width:"content"===t[s]?"auto":void 0,maxWidth:h(t[s],i,a),marginLeft:v(r[s],i),flexGrow:y(t[s],a)},e)),{})}var E=(0,d.k)(((e,t)=>{let{gutter:r,gutterXs:n,gutterSm:o,gutterMd:i,gutterLg:l,gutterXl:a,grow:s,offset:d,offsetXs:c,offsetSm:u,offsetMd:m,offsetLg:f,offsetXl:g,columns:E,span:z,xs:O,sm:S,md:j,lg:C,xl:X,order:k,orderXs:P,orderSm:L,orderMd:W,orderLg:M,orderXl:N}=t;return{col:p({boxSizing:"border-box",flexGrow:y(z,s),order:k,padding:b(r,e),marginLeft:v(d,E),flexBasis:x(z,E),flexShrink:0,width:"content"===z?"auto":void 0,maxWidth:h(z,E,s)},w({sizes:{xs:O,sm:S,md:j,lg:C,xl:X},offsets:{xs:c,sm:u,md:m,lg:f,xl:g},orders:{xs:P,sm:L,md:W,lg:M,xl:N},gutters:{xs:n,sm:o,md:i,lg:l,xl:a},theme:e,columns:E,grow:s}))}})),z=r(5479),O=Object.defineProperty,S=Object.getOwnPropertySymbols,j=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable,X=(e,t,r)=>t in e?O(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;const k={};const P=(0,n.forwardRef)(((e,t)=>{const r=(0,o.N4)("GridCol",k,e),{children:i,span:l,offset:s,offsetXs:d,offsetSm:c,offsetMd:u,offsetLg:m,offsetXl:f,xs:g,sm:p,md:x,lg:h,xl:y,order:v,orderXs:b,orderSm:w,orderMd:O,orderLg:P,orderXl:L,className:W,id:M,unstyled:N}=r,Z=((e,t)=>{var r={};for(var n in e)j.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&S)for(var n of S(e))t.indexOf(n)<0&&C.call(e,n)&&(r[n]=e[n]);return r})(r,["children","span","offset","offsetXs","offsetSm","offsetMd","offsetLg","offsetXl","xs","sm","md","lg","xl","order","orderXs","orderSm","orderMd","orderLg","orderXl","className","id","unstyled"]),I=a(),T=l||I.columns,{classes:G,cx:R}=E({gutter:I.gutter,gutterXs:I.gutterXs,gutterSm:I.gutterSm,gutterMd:I.gutterMd,gutterLg:I.gutterLg,gutterXl:I.gutterXl,offset:s,offsetXs:d,offsetSm:c,offsetMd:u,offsetLg:m,offsetXl:f,xs:g,sm:p,md:x,lg:h,xl:y,order:v,orderXs:b,orderSm:w,orderMd:O,orderLg:P,orderXl:L,grow:I.grow,columns:I.columns,span:T},{unstyled:N,name:"Grid"});return!function(e){return"auto"===e||"content"===e||"number"==typeof e&&e>0&&e%1==0}(T)||T>I.columns?null:n.createElement(z.x,((e,t)=>{for(var r in t||(t={}))j.call(t,r)&&X(e,r,t[r]);if(S)for(var r of S(t))C.call(t,r)&&X(e,r,t[r]);return e})({className:R(G.col,W),ref:t},Z),i)}));P.displayName="@mantine/core/Col";var L=Object.defineProperty,W=Object.getOwnPropertySymbols,M=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable,Z=(e,t,r)=>t in e?L(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,I=(e,t)=>{for(var r in t||(t={}))M.call(t,r)&&Z(e,r,t[r]);if(W)for(var r of W(t))N.call(t,r)&&Z(e,r,t[r]);return e};function T(e,t){return s.j1.reduce(((r,n)=>(void 0!==e[n]&&(r["@media (min-width: ".concat(t.breakpoints[n],"px)")]={margin:-t.fn.size({size:e[n],sizes:t.spacing})/2}),r)),{})}var G=(0,d.k)(((e,t)=>{let{justify:r,align:n,gutter:o,gutterXs:i,gutterSm:l,gutterMd:a,gutterLg:s,gutterXl:d}=t;return{root:I({margin:-e.fn.size({size:o,sizes:e.spacing})/2,display:"flex",flexWrap:"wrap",justifyContent:r,alignItems:n},T({xs:i,sm:l,md:a,lg:s,xl:d},e))}})),R=Object.defineProperty,A=Object.getOwnPropertySymbols,D=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable,F=(e,t,r)=>t in e?R(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;const V={gutter:"md",justify:"flex-start",align:"stretch",columns:12},q=(0,n.forwardRef)(((e,t)=>{const r=(0,o.N4)("Grid",V,e),{gutter:i,gutterXs:a,gutterSm:s,gutterMd:d,gutterLg:c,gutterXl:u,children:m,grow:f,justify:g,align:p,columns:x,className:h,id:y,unstyled:v}=r,b=((e,t)=>{var r={};for(var n in e)D.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&A)for(var n of A(e))t.indexOf(n)<0&&B.call(e,n)&&(r[n]=e[n]);return r})(r,["gutter","gutterXs","gutterSm","gutterMd","gutterLg","gutterXl","children","grow","justify","align","columns","className","id","unstyled"]),{classes:w,cx:E}=G({gutter:i,justify:g,align:p,gutterXs:a,gutterSm:s,gutterMd:d,gutterLg:c,gutterXl:u},{unstyled:v,name:"Grid"});return n.createElement(l,{value:{gutter:i,gutterXs:a,gutterSm:s,gutterMd:d,gutterLg:c,gutterXl:u,grow:f,columns:x}},n.createElement(z.x,((e,t)=>{for(var r in t||(t={}))D.call(t,r)&&F(e,r,t[r]);if(A)for(var r of A(t))B.call(t,r)&&F(e,r,t[r]);return e})({className:E(w.root,h),ref:t},b),m))}));q.Col=P,q.displayName="@mantine/core/Grid";var U=r(1083),_=r(9055),H=r(1082),Q=r(4723);var J=e=>{let{children:t,style:r,...i}=e;return n.createElement(o.Me,Object.assign({theme:{fontFamily:"Outfit !important"}},i),n.createElement(Q.x,{style:r},t))},K=r(1458),Y=r(4438),$=r(1623),ee=r(4698),te=r(2958);r(1424);const re=e=>{let{title:t,value:r,image:o}=e;return n.createElement(q.Col,{md:3.5,sx:{border:"1.5px solid rgba(0,0,0,0.1)",borderRadius:12,":hover":{boxShadow:"rgba(0, 0, 0, 0.1) 0px 4px 12px",transition:"all 0.3s ease-in-out"}},my:15},n.createElement(z.x,{p:"md"},n.createElement(z.x,null,n.createElement(U.E,{src:o,placeholder:"tracedSVG",width:100,height:100,layout:"constrained",objectFit:"cover"})),n.createElement(z.x,null,n.createElement(J,{style:{fontWeight:600,fontSize:"1.4rem"}},t),n.createElement(K.Z,{style:{fontSize:"1.1rem",marginTop:8}},r))))};var ne=()=>{var e,t;(0,n.useRef)(null);const r=(0,H.useStaticQuery)("3337068092");return n.createElement($.Z,{hideLink:!0,showCareers:!1,showDarkLogo:!0,headProps:{pageTitle:"About Us"}},n.createElement(Y.p,null,n.createElement(ee.ZP,null,n.createElement(_.W,{size:1200,py:40,px:0,style:{height:"100vh",display:"flex",alignItems:"center"}},n.createElement("div",null,n.createElement(te.Z,{title:"About Us"}),n.createElement("div",{style:{height:"100%",display:"flex",padding:15,flexWrap:"wrap",gap:60}},n.createElement("div",{style:{position:"relative"}},n.createElement("h1",{style:{fontSize:"3rem",color:"rgba(0,0,0,0.3)",fontWeight:700}},"Why us?"),n.createElement("svg",{viewBox:"0 0 162 119",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:70,style:{position:"absolute",right:"40%",top:"6%"}},n.createElement("path",{d:"M0.913757 114.53C13.9807 116.216 32.3056 122.378 43.7012 113.083C51.0025 107.128 57.0714 99.6064 62.6869 92.0921C73.647 77.4257 81.4769 57.0014 83.9262 38.9656C86.7749 17.9886 65.2558 22.4197 58.3958 36.6239C48.6178 56.8698 53.4826 94.2165 79.0133 100.444C108.309 107.591 123.562 71.7844 130.096 49.9154C134.773 34.2631 153.849 -9.9389 143.644 2.81731C137.309 10.736 128.12 15.6577 122.008 23.6058C118.81 27.7641 121.911 27.9558 125.382 25.0963C131.067 20.4118 136.477 14.6482 140.667 8.60318C141.379 7.57589 145.275 0.763508 146.837 3.12604C151.902 10.7886 153.525 20.5514 158.568 28.4832",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round"}),n.createElement("path",{d:"M132.848 24.4348C141.945 26.8851 150.961 28.4036 160.05 30.4235C162.841 31.0437 159.046 30.7305 158.171 30.7851",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round"}))),n.createElement("div",{style:{flex:1,fontSize:"1.2rem",color:"rgba(0,0,0,0.6)",minWidth:250}},n.createElement("p",null,"Welcome to Pentafox Technologies, the world's favorite digital transformation partner. We're a team of seasoned experts with a passion for modernizing businesses of all kinds. Our mission is to leverage the power of the cloud and incorporate embedded intelligence from a diverse set of AI/ML capabilities to deliver effective product solutions that meet our clients' unique needs."),n.createElement("p",null,"At Pentafox, we believe that digital transformation is more than just a buzzword - it's a strategic imperative. Our team has years of experience helping companies across a wide range of industries navigate the complex process of digital transformation. We work closely with our clients to understand their unique challenges and develop tailored solutions that drive measurable results."),n.createElement("p",null,"Our approach to digital transformation is rooted in a deep understanding of the latest technologies and industry trends. We combine cutting-edge tools and techniques with a focus on user experience to deliver solutions that are both innovative and practical."),n.createElement("p",null,"But our success is not just about technology - it's about people. We're a team of passionate professionals who are dedicated to delivering exceptional service and building long-term relationships with our clients. We're proud to have a diverse team of experts from a range of backgrounds and experiences, united by a shared commitment to excellence."),n.createElement("p",null,"Whether you're looking to streamline your operations, modernize your customer experience, or launch a new product, we're here to help. Contact us today to learn more about how we can help your business thrive in the digital age."))))),n.createElement(z.x,{py:90},n.createElement(_.W,{size:1300},n.createElement(q,{justify:"space-evenly",align:"space-evenly"},n.createElement(q.Col,{md:3.5,my:15},n.createElement(z.x,null,n.createElement(J,{style:{fontSize:40,fontWeight:800}},"Our Values"),n.createElement(K.Z,{style:{fontSize:"1.3rem"}},"Our core guiding principles drive our daily decisions."))),null==r||null===(e=r.allContentfulOurValues)||void 0===e||null===(t=e.nodes)||void 0===t?void 0:t.map(((e,t)=>n.createElement(re,{title:null==e?void 0:e.title,value:null==e?void 0:e.description.description,image:null==e?void 0:e.iconImage})))))))))}}}]);
//# sourceMappingURL=component---src-pages-about-us-js-ab434b98816b17655bb4.js.map