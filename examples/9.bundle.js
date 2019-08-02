(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{23:function(e,t,n){"use strict";var r=n(0);const a=(e,t)=>{switch(t.type){case"get":case"loading":return{...e,loading:!0};case"success":return{...e,data:t.payload.data,error:null,loading:!1};case"error":return{...e,data:null,error:t.payload.error,loading:!1};default:return e}};var c=(e,t,n=window)=>{const a=Object(r.useRef)();Object(r.useEffect)(()=>{a.current=t},[t]),Object(r.useEffect)(()=>{if(!n||!n.addEventListener)return;const t=e=>a.current(e);return n.addEventListener(e,t),()=>{n.removeEventListener(e,t)}},[e,n])};var o=e=>{const[t,n]=Object(r.useState)(e);return Object(r.useEffect)(()=>{const e=document.querySelector("link[rel*='icon']")||document.createElement("link");e.type="image/x-icon",e.rel="shortcut icon",e.href=t,document.getElementsByTagName("head")[0].appendChild(e)},[t]),[t,n]};var s=(e,t)=>{const[n,c]=Object(r.useReducer)(a,{data:[],error:null,loading:!0}),o=Object(r.useCallback)(async e=>{c({type:"get"});const n=await fetch(e,t),r=await n.json();c({type:"success",payload:{data:r}})},[t]);return Object(r.useEffect)(()=>{o(e)},[o,e]),n};function i(e,t){const n=e=>e&&"object"==typeof e;return n(e)&&n(t)?(Object.keys(t).forEach(r=>{const a=e[r],c=t[r];Array.isArray(a)&&Array.isArray(c)?e[r]=a.concat(c):n(a)&&n(c)?e[r]=i(Object.assign({},a),c):e[r]=c}),e):t}const d={mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrer:"no-referrer"},u=(e="",t={method:"GET"})=>{const[n,c]=Object(r.useReducer)(a,{data:[],error:null,loading:!1}),o=i(d,t);return{...n,makeRequest:async(t=o,n=e)=>{c({type:"get"});const r=await fetch(n,t);if("application/json"===t.headers["Content-Type"]){const e=await r.json();return e&&e.data?c({type:"success",payload:{data:e.data}}):c({type:"success",payload:{data:e}})}const a=await r.text();return c({type:"success",payload:{data:a}})}}};var l=u;const f={mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrer:"no-referrer"};var m=(e="",t={method:"GET"})=>{const{data:n,error:r,loading:a,makeRequest:c}=l(e,{data:[],error:null,loading:!1}),o=i(f,t);return{data:n,error:r,loading:a,getUrl:async(t=e)=>{await c({method:"GET",...o},t)}}};n(22);const y={method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrer:"no-referrer"},p=(e="/graphql",t,n={method:"POST"})=>{const{data:r,error:a,loading:c,makeRequest:o}=u(e,{data:null,error:null,loading:!1}),s=i(y,n);return{data:r,error:a,loading:c,makeQuery:async e=>{await o({...s,body:JSON.stringify({query:t,variables:e})})}}};var g=(e,t=window)=>{const[n,a]=Object(r.useState)(!1),c=t=>{t.key===e&&a(!0)},o=t=>{t.key===e&&a(!1)};return Object(r.useEffect)(()=>(t.addEventListener("keydown",c),t.addEventListener("keyup",o),()=>{t.removeEventListener("keydown",c),t.removeEventListener("keyup",o)}),[e,t]),n};var h=(e,t,n=!1)=>{const[a,c]=Object(r.useState)(()=>{try{const r=localStorage.getItem(e);return"string"!=typeof r?(localStorage.setItem(e,n?String(t):JSON.stringify(t)),t):n?r:JSON.parse(r||"null")}catch{return t}});return Object(r.useEffect)(()=>{try{const t=n?String(a):JSON.stringify(a);localStorage.setItem(e,t)}catch{}}),[a,c]};const b=(e,t)=>{switch(t.type){case"match":return{matches:!0};case"nomatch":return{matches:!1};default:return e}};var w=e=>{const[t,n]=Object(r.useReducer)(b,{matches:!1}),a=e=>{e.matches?n({type:"match"}):t.matches&&n({type:"nomatch"})},c=window.matchMedia(e);return c.addListener(a),Object(r.useEffect)(()=>{a(c)},[e]),{...t}};var v=n(24),j=n.n(v);const E=(e,t,...n)=>{switch(t.type){case"connecting":return{...e,connecting:!0,connected:!1};case"connected":return{...e,connecting:!1,connected:!0};case"disconnected":return{...e,connecting:!1,connected:!1};case"message":const n=[].concat(e.message);return n.push(t.payload.data),{...e,message:n,error:null,connecting:!1};case"error":return{...e,error:t.payload.error,connecting:!1};default:return e}};var O=(e="ws://localhost:4567",t=!0)=>{const[n,a]=Object(r.useReducer)(E,{message:[],error:null,connecting:!0,connected:!1});var c=new j.a.Client(e);Object(r.useEffect)(()=>{(async()=>(a({type:"connecting",payload:{}}),new Promise(async(n,r)=>{c.onConnect=e=>(a({type:"connected"}),n()),c.onDisconnect=()=>(a({type:"disconnected"}),n()),await c.connect(),c.onUpdate=e=>(a({type:"message",payload:{data:e}}),n()),t&&c.subscribe(e,e=>(a({type:"message",payload:{data:e}}),n()))})))()},[]);return{...n,client:c,dispatcher:e=>{a({type:"message",payload:{data:e}})}}};const S=(e,t)=>{switch(t.type){case"online":return{online:!0,offline:!1};case"offline":return{online:!1,offline:!0};default:return e}};var k=e=>{const[t,n]=Object(r.useReducer)(S,{online:!0,offline:!1});return window.addEventListener("offline",function(e){n({type:"offline"})}),window.addEventListener("online",function(e){n({type:"online"})}),{...t}};const T=(e,t)=>{switch(t.type){case"hidden":return{visible:!1,hidden:!0};case"visible":return{visible:!0,hidden:!1};default:return e}};var x=e=>{const[t,n]=Object(r.useReducer)(T,{visible:!0,hidden:!1});return document.addEventListener("visibilitychange",e=>{n({type:document.visibilityState})}),{...t}};const L={mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrer:"no-referrer"};var N=(e="",t={method:"POST"})=>{const{data:n,error:r,loading:a,makeRequest:c}=l(e,{data:[],error:null,loading:!1}),o=i(L,t);return{data:n,error:r,loading:a,postData:async e=>{await c({method:"POST",...o,body:"string"==typeof e||e instanceof String?e:JSON.stringify(e)})}}};var R=e=>{const[t,n]=Object(r.useState)(e);return Object(r.useEffect)(()=>{document.title=t},[t]),[t,n]};n.d(t,"a",function(){return c}),n.d(t,"b",function(){return o}),n.d(t,"c",function(){return s}),n.d(t,"d",function(){return m}),n.d(t,"e",function(){return g}),n.d(t,"f",function(){return h}),n.d(t,"g",function(){return w}),n.d(t,"h",function(){return O}),n.d(t,"i",function(){return k}),n.d(t,"j",function(){return x}),n.d(t,"k",function(){return N}),n.d(t,"l",function(){return p}),n.d(t,"m",function(){return R})},38:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(23);t.default=()=>{Object(c.m)("useMediaQuery example from @brightleaf/react-hooks");const{matches:e}=Object(c.g)("(min-width: 500px)"),{matches:t}=Object(c.g)("(max-width: 900px)");return a.a.createElement("div",{className:"App content"},a.a.createElement("h3",null,"useMediaQuery Hook"),e&&a.a.createElement("article",{className:"message is-warning"},a.a.createElement("div",{className:"message-body"},"The page is at least 500px",a.a.createElement("br",null),"query:",a.a.createElement("code",null,"(min-width: 500px)"))),t&&a.a.createElement("article",{className:"message is-warning"},a.a.createElement("div",{className:"message-body"},"The page no more than 900px",a.a.createElement("br",null),"query:",a.a.createElement("code",null,"(max-width: 900px)"))))}}}]);