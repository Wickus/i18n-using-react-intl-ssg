(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{7444:function(e,t,r){"use strict";r.d(t,{b:function(){return f},x:function(){return d}});var n,a=r(5893),o=r(7294),c=r(9558),s=r(6265),i=JSON.parse('{"index":{"welcome":"Welcome to {framework}","getting-started":"Get started by editing {path}","documentation-title":"Documentation {arrow}","documentation-text":"Find in-depth information about {framework} features and API.","learn-title":"Learn  {arrow}","learn-text":"Learn about {framework} in an interactive course with quizzes!","examples-title":"Examples {arrow}","examples-text":"Discover and deploy boilerplate example {framework} projects.","deploy-title":"Deploy {arrow}","deploy-text":"Instantly deploy your {framework} site to a public URL with {vercel}.","powered-by":"Powered by {vercel}"},"contact":{"welcome":"Welcome to Contact"}}'),l=JSON.parse('{"index":{"welcome":"Bienvenue \xe0 {framework}","getting-started":"Commencez par \xe9diter {path}","documentation-title":"Documentation {arrow}","documentation-text":"Trouvez des informations d\xe9taill\xe9es sur les fonctionnalit\xe9s et l\'API de {framework}.","learn-title":"Apprendre {arrow}","learn-text":"D\xe9couvrez {framework} dans un cours interactif avec des quiz !","examples-title":"Exemples {arrow}","examples-text":"D\xe9couvrez et d\xe9ployez des exemples de projets {framework} standard.","deploy-title":"Deploy {arrow}","deploy-text":"D\xe9ployez instantan\xe9ment votre site {framework} sur une URL publique avec {vercel}.","powered-by":"Aliment\xe9 par {vercel}"},"contact":{"welcome":"Bienvenue sur Contact"}}'),p=JSON.parse('{"index":{"welcome":"Bienvenida a {framework}","getting-started":"Empiece por editar {path}","documentation-title":"Documentaci\xf3n {arrow}","documentation-text":"Encuentre informaci\xf3n detallada sobre las caracter\xedsticas y la API de {framework}.","learn-title":"Aprende {arrow}","learn-text":"\xa1Aprenda sobre {framework} en un curso interactivo con cuestionarios!","examples-title":"Ejemplos {arrow}","examples-text":"Descubra e implemente proyectos est\xe1ndar de {framework} de ejemplo.","deploy-title":"Implementar {arrow}","deploy-text":"Implemente instant\xe1neamente su sitio {framework} en una URL p\xfablica con {vercel}.","powered-by":"impulsado por {vercel}"},"contact":{"welcome":"Bienvenida a contactar "}}'),d=JSON.parse('{"ENGLISH":"en","FRENCH":"fr","SPANISH":"es"}');function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var x=(n={},(0,s.Z)(n,d.ENGLISH,m({},i)),(0,s.Z)(n,d.FRENCH,m({},l)),(0,s.Z)(n,d.SPANISH,m({},p)),n),f=function(e){var t=e.children,r=e.locale,n=void 0===r?"en":r,s=e.page,i=void 0===s?"landing-page":s,l=x;return(0,a.jsx)(c.Z,{locale:n,defaultLocale:"en",textComponent:o.Fragment,messages:l[n][i],children:t})}},8395:function(e,t,r){"use strict";r.d(t,{Z:function(){return m}});var n=r(5893),a=r(9008),o=r(4079),c=r.n(o),s=r(2106),i=r(809),l=r.n(i),p=r(2447),d=r(1163),u=function(){var e=(0,d.useRouter)(),t=e.query,r=t.locale,a=t.page,o=function(){var t=(0,p.Z)(l().mark((function t(r){return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.push("/".concat(r.target.value,"/").concat(a||"index"));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return(0,n.jsxs)("select",{onChange:o,children:[(0,n.jsx)("option",{value:"en",selected:"en"===r,children:"English"}),(0,n.jsx)("option",{value:"fr",selected:"fr"===r,children:"French"}),(0,n.jsx)("option",{value:"es",selected:"es"===r,children:"Spanish"})]})};function m(){return(0,n.jsxs)("div",{className:c().container,children:[(0,n.jsxs)(a.default,{children:[(0,n.jsx)("title",{children:"Create Next App"}),(0,n.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,n.jsx)("link",{rel:"icon",href:"/src/public/favicon.ico"})]}),(0,n.jsxs)("main",{className:c().main,children:[(0,n.jsx)("form",{className:c().description,children:(0,n.jsx)(u,{})}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)("h1",{className:c().title,children:(0,n.jsx)(s.Z,{id:"welcome",values:{framework:(0,n.jsx)("a",{href:"https://nextjs.org",children:"Next.js!"})}})}),(0,n.jsx)("p",{className:c().description,children:(0,n.jsx)(s.Z,{id:"getting-started",values:{path:(0,n.jsx)("code",{className:c().code,children:"pages/index.js"})}})}),(0,n.jsxs)("div",{className:c().grid,children:[(0,n.jsxs)("a",{href:"https://nextjs.org/docs",className:c().card,children:[(0,n.jsx)("h2",{children:(0,n.jsx)(s.Z,{id:"documentation-title",values:{arrow:(0,n.jsx)("span",{children:"\u2192"})}})}),(0,n.jsx)("p",{children:(0,n.jsx)(s.Z,{id:"documentation-text",values:{framework:"Next.js"}})})]}),(0,n.jsxs)("a",{href:"https://nextjs.org/learn",className:c().card,children:[(0,n.jsx)("h2",{children:(0,n.jsx)(s.Z,{id:"learn-title",values:{arrow:(0,n.jsx)("span",{children:"\u2192"})}})}),(0,n.jsx)("p",{children:(0,n.jsx)(s.Z,{id:"learn-text",values:{framework:"Next.js"}})})]}),(0,n.jsxs)("a",{href:"https://github.com/vercel/next.js/tree/master/examples",className:c().card,children:[(0,n.jsx)("h2",{children:(0,n.jsx)(s.Z,{id:"examples-title",values:{arrow:(0,n.jsx)("span",{children:"\u2192"})}})}),(0,n.jsx)("p",{children:(0,n.jsx)(s.Z,{id:"examples-text",values:{framework:"Next.js"}})})]}),(0,n.jsxs)("a",{href:"https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",className:c().card,children:[(0,n.jsx)("h2",{children:(0,n.jsx)(s.Z,{id:"deploy-title",values:{arrow:(0,n.jsx)("span",{children:"\u2192"})}})}),(0,n.jsx)("p",{children:(0,n.jsx)(s.Z,{id:"deploy-text",values:{framework:"Next.js",vercel:"Vercel"}})})]})]})]}),(0,n.jsx)("footer",{className:c().footer,children:(0,n.jsx)("a",{href:"https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)(s.Z,{id:"powered-by",values:{vercel:"Vercel"}})})})]})}},6839:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return x}});var n=r(6265),a=r(5893),o=r(809),c=r.n(o),s=r(2447),i=r(8395),l=r(7444),p=r(7294),d=r(1163);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function x(){var e=(0,d.useRouter)(),t={locale:l.x.ENGLISH,page:"index"};return(0,p.useEffect)((function(){if(navigator){var t=navigator.language.replace(/-.*/g,"");"en"!=t&&(0,s.Z)(c().mark((function r(){return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.push("/".concat(t,"/index"));case 2:case"end":return r.stop()}}),r)})))()}})),(0,a.jsx)(l.b,m(m({},t),{},{children:(0,a.jsx)(i.Z,{})}))}},5301:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(6839)}])},4079:function(e){e.exports={container:"Home_container__sDexO",main:"Home_main__1gTMt",footer:"Home_footer__34ULc",title:"Home_title__38XO6",description:"Home_description__p2VX9",code:"Home_code__7lt7E",grid:"Home_grid__2Clz5",card:"Home_card__2kgLM",logo:"Home_logo__qxZJS"}}},function(e){e.O(0,[287,774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);