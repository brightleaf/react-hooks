(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{23:function(e,t,n){"use strict";var r=n(0);const a=(e,t)=>{switch(t.type){case"get":case"loading":return{...e,loading:!0};case"success":return{...e,data:t.payload.data,error:null,loading:!1};case"error":return{...e,data:null,error:t.payload.error,loading:!1};default:return e}};var c=(e,t,n=window)=>{const a=Object(r.useRef)();Object(r.useEffect)(()=>{a.current=t},[t]),Object(r.useEffect)(()=>{if(!n||!n.addEventListener)return;const t=e=>a.current(e);return n.addEventListener(e,t),()=>{n.removeEventListener(e,t)}},[e,n])};var o=e=>{const[t,n]=Object(r.useState)(e);return Object(r.useEffect)(()=>{const e=document.querySelector("link[rel*='icon']")||document.createElement("link");e.type="image/x-icon",e.rel="shortcut icon",e.href=t,document.getElementsByTagName("head")[0].appendChild(e)},[t]),[t,n]};var s=(e,t)=>{const[n,c]=Object(r.useReducer)(a,{data:[],error:null,loading:!0}),o=Object(r.useCallback)(async e=>{c({type:"get"});const n=await fetch(e,t),r=await n.json();c({type:"success",payload:{data:r}})},[t]);return Object(r.useEffect)(()=>{o(e)},[o,e]),n};function i(e,t){const n=e=>e&&"object"==typeof e;return n(e)&&n(t)?(Object.keys(t).forEach(r=>{const a=e[r],c=t[r];Array.isArray(a)&&Array.isArray(c)?e[r]=a.concat(c):n(a)&&n(c)?e[r]=i(Object.assign({},a),c):e[r]=c}),e):t}const d={mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrer:"no-referrer"},u=(e="",t={method:"GET"})=>{const[n,c]=Object(r.useReducer)(a,{data:[],error:null,loading:!1}),o=i(d,t);return{...n,makeRequest:async(t=o,n=e)=>{c({type:"get"});const r=await fetch(n,t),a=await r.json();return a&&a.data?c({type:"success",payload:{data:a.data}}):c({type:"success",payload:{data:a}})}}};var l=u;const f={mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrer:"no-referrer"};var y=(e="",t={method:"GET"})=>{const{data:n,error:r,loading:a,makeRequest:c}=l(e,{data:[],error:null,loading:!1}),o=i(f,t);return{data:n,error:r,loading:a,getUrl:async(t=e)=>{await c({method:"GET",...o},t)}}};n(22);const p={method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrer:"no-referrer"},g=(e="/graphql",t,n={method:"POST"})=>{const{data:r,error:a,loading:c,makeRequest:o}=u(e,{data:null,error:null,loading:!1}),s=i(p,n);return{data:r,error:a,loading:c,makeQuery:async e=>{await o({...s,body:JSON.stringify({query:t,variables:e})})}}};var m=(e,t=window)=>{const[n,a]=Object(r.useState)(!1),c=t=>{t.key===e&&a(!0)},o=t=>{t.key===e&&a(!1)};return Object(r.useEffect)(()=>(t.addEventListener("keydown",c),t.addEventListener("keyup",o),()=>{t.removeEventListener("keydown",c),t.removeEventListener("keyup",o)}),[e,t]),n};var h=(e,t,n=!1)=>{const[a,c]=Object(r.useState)(()=>{try{const r=localStorage.getItem(e);return"string"!=typeof r?(localStorage.setItem(e,n?String(t):JSON.stringify(t)),t):n?r:JSON.parse(r||"null")}catch{return t}});return Object(r.useEffect)(()=>{try{const t=n?String(a):JSON.stringify(a);localStorage.setItem(e,t)}catch{}}),[a,c]};const b=(e,t)=>{switch(t.type){case"match":return{matches:!0};case"nomatch":return{matches:!1};default:return e}};var w=e=>{const[t,n]=Object(r.useReducer)(b,{matches:!1}),a=e=>{e.matches?n({type:"match"}):t.matches&&n({type:"nomatch"})},c=window.matchMedia(e);return c.addListener(a),Object(r.useEffect)(()=>{a(c)},[e]),{...t}};var v=n(24),O=n.n(v);const j=(e,t,...n)=>{switch(t.type){case"connecting":return{...e,connecting:!0,connected:!1};case"connected":return{...e,connecting:!1,connected:!0};case"disconnected":return{...e,connecting:!1,connected:!1};case"message":const n=[].concat(e.message);return n.push(t.payload.data),{...e,message:n,error:null,connecting:!1};case"error":return{...e,error:t.payload.error,connecting:!1};default:return e}};var E=(e="ws://localhost:4567",t=!0)=>{const[n,a]=Object(r.useReducer)(j,{message:[],error:null,connecting:!0,connected:!1});var c=new O.a.Client(e);Object(r.useEffect)(()=>{(async()=>(a({type:"connecting",payload:{}}),new Promise(async(n,r)=>{c.onConnect=e=>(a({type:"connected"}),n()),c.onDisconnect=()=>(a({type:"disconnected"}),n()),await c.connect(),c.onUpdate=e=>(a({type:"message",payload:{data:e}}),n()),t&&c.subscribe(e,e=>(a({type:"message",payload:{data:e}}),n()))})))()},[]);return{...n,client:c,dispatcher:e=>{a({type:"message",payload:{data:e}})}}};const S=(e,t)=>{switch(t.type){case"online":return{online:!0,offline:!1};case"offline":return{online:!1,offline:!0};default:return e}};var k=e=>{const[t,n]=Object(r.useReducer)(S,{online:!0,offline:!1});return window.addEventListener("offline",function(e){n({type:"offline"})}),window.addEventListener("online",function(e){n({type:"online"})}),{...t}};const C=(e,t)=>{switch(t.type){case"hidden":return{visible:!1,hidden:!0};case"visible":return{visible:!0,hidden:!1};default:return e}};var L=e=>{const[t,n]=Object(r.useReducer)(C,{visible:!0,hidden:!1});return document.addEventListener("visibilitychange",e=>{n({type:document.visibilityState})}),{...t}};const T={mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrer:"no-referrer"};var R=(e="",t={method:"POST"})=>{const{data:n,error:r,loading:a,makeRequest:c}=l(e,{data:[],error:null,loading:!1}),o=i(T,t);return{data:n,error:r,loading:a,postData:async e=>{await c({method:"POST",...o,body:"string"==typeof e||e instanceof String?e:JSON.stringify(e)})}}};var q=e=>{const[t,n]=Object(r.useState)(e);return Object(r.useEffect)(()=>{document.title=t},[t]),[t,n]};n.d(t,"a",function(){return c}),n.d(t,"b",function(){return o}),n.d(t,"c",function(){return s}),n.d(t,"d",function(){return y}),n.d(t,"e",function(){return m}),n.d(t,"f",function(){return h}),n.d(t,"g",function(){return w}),n.d(t,"h",function(){return E}),n.d(t,"i",function(){return k}),n.d(t,"j",function(){return L}),n.d(t,"k",function(){return R}),n.d(t,"l",function(){return g}),n.d(t,"m",function(){return q})},37:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(23),o=n(2);t.default=()=>{Object(c.m)("useEventListener example from @brightleaf/react-hooks"),Object(c.b)("https://brightleaf.github.io/react-hooks/favicon.ico");const[e,t]=Object(r.useState)(window.scrollY);return Object(c.a)("scroll",e=>{t(window.scrollY)}),a.a.createElement("div",{className:"App content"},a.a.createElement("h2",null,"Scroll the page"),a.a.createElement("span",{style:{position:"fixed",top:10,left:10,background:"#CCCCCC"}},e," scroll position"),a.a.createElement(o.a,null))}}}]);