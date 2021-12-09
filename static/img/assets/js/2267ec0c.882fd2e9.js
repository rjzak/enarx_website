"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2878],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4462:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={},c="Intel SGX",s={unversionedId:"Technical/Intel-SGX",id:"Technical/Intel-SGX",isDocsHomePage:!1,title:"Intel SGX",description:"Hardware requirements",source:"@site/docs/Technical/Intel-SGX.md",sourceDirName:"Technical",slug:"/Technical/Intel-SGX",permalink:"/docs/Technical/Intel-SGX",editUrl:"https://github.com/enarx/docs/docs/Technical/Intel-SGX.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"AMD-SNP",permalink:"/docs/Technical/AMD-SNP"},next:{title:"Intel-SGX-Measurement",permalink:"/docs/Technical/Intel-SGX-Measurement"}},u=[{value:"Hardware requirements",id:"hardware-requirements",children:[],level:3},{value:"Attestation overview",id:"attestation-overview",children:[],level:2}],p={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"intel-sgx"},"Intel SGX"),(0,i.kt)("h3",{id:"hardware-requirements"},"Hardware requirements"),(0,i.kt)("p",null,"A system with SGX 2 and EDMM support."),(0,i.kt)("h2",{id:"attestation-overview"},"Attestation overview"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"SGX assumes that clients want proof that the application should be allowed to run within the enclave, and therefore applications need to be signed by Intel (or chain does\u2026). ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Note that (as of 2017-07-04), as currently implemented in upstream Linux code, this requirement is loosened, and anybody can run anything in the enclave.  "))),(0,i.kt)("li",{parentName:"ul"},"While it is still common practice to involve Intel's or other 3rd party hosts in attestation, Enarx makes use of Intel's ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/intel/SGXDataCenterAttestationPrimitives/blob/master/README.md"},"Data Center Attestation Primitives"),", which allows the attestation process to involve the attesting and attested parties only.")))}d.isMDXComponent=!0}}]);