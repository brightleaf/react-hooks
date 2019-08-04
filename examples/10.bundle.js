(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{23:function(e,t,n){"use strict";var r=n(0);const a=(e,t)=>{switch(t.type){case"get":case"loading":return{...e,loading:!0,complete:!1};case"success":return{...e,data:t.payload.data,error:null,loading:!1,complete:!0};case"error":return{...e,data:null,error:t.payload.error,loading:!1,complete:!0};default:return e}};var c=(e,t,n=window)=>{const a=Object(r.useRef)();Object(r.useEffect)(()=>{a.current=t},[t]),Object(r.useEffect)(()=>{if(!n||!n.addEventListener)return;const t=e=>a.current(e);return n.addEventListener(e,t),()=>{n.removeEventListener(e,t)}},[e,n])};var o=e=>{const[t,n]=Object(r.useState)(e);return Object(r.useEffect)(()=>{const e=document.querySelector("link[rel*='icon']")||document.createElement("link");e.type="image/x-icon",e.rel="shortcut icon",e.href=t,document.getElementsByTagName("head")[0].appendChild(e)},[t]),[t,n]};var s=(e,t)=>{const[n,c]=Object(r.useReducer)(a,{data:[],error:null,loading:!0}),o=Object(r.useCallback)(async e=>{c({type:"get"});const n=await fetch(e,t),r=await n.json();c({type:"success",payload:{data:r}})},[t]);return Object(r.useEffect)(()=>{o(e)},[o,e]),n};function i(e,t){const n=e=>e&&"object"==typeof e;return n(e)&&n(t)?(Object.keys(t).forEach(r=>{const a=e[r],c=t[r];Array.isArray(a)&&Array.isArray(c)?e[r]=a.concat(c):n(a)&&n(c)?e[r]=i(Object.assign({},a),c):e[r]=c}),e):t}const d={mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrer:"no-referrer"},l=(e="",t={method:"GET"})=>{const[n,c]=Object(r.useReducer)(a,{data:[],error:null,loading:!1,complete:!1}),o=i(d,t);return{...n,makeRequest:async(t=o,n=e)=>{c({type:"get"});const r=await fetch(n,t);if("application/json"===t.headers["Content-Type"]){const e=await r.json();return e&&e.data?c({type:"success",payload:{data:e.data}}):c({type:"success",payload:{data:e}})}const a=await r.text();return c({type:"success",payload:{data:a}})}}};var u=l;const m={mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrer:"no-referrer"};var p=(e="",t={method:"GET"})=>{const{data:n,error:r,loading:a,complete:c,makeRequest:o}=u(e),s=i(m,t);return{data:n,error:r,loading:a,complete:c,getUrl:async(t=e)=>{await o({method:"GET",...s},t)}}};n(22);const f={method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrer:"no-referrer"},y=(e="/graphql",t,n={method:"POST"})=>{const{data:r,error:a,loading:c,makeRequest:o}=l(e,{data:null,error:null,loading:!1}),s=i(f,n);return{data:r,error:a,loading:c,makeQuery:async e=>{await o({...s,body:JSON.stringify({query:t,variables:e})})}}};var g=(e,t=window)=>{const[n,a]=Object(r.useState)(!1),c=t=>{t.key===e&&a(!0)},o=t=>{t.key===e&&a(!1)};return Object(r.useEffect)(()=>(t.addEventListener("keydown",c),t.addEventListener("keyup",o),()=>{t.removeEventListener("keydown",c),t.removeEventListener("keyup",o)}),[e,t]),n};var h=(e,t,n=!1)=>{const[a,c]=Object(r.useState)(()=>{try{const r=localStorage.getItem(e);return"string"!=typeof r?(localStorage.setItem(e,n?String(t):JSON.stringify(t)),t):n?r:JSON.parse(r||"null")}catch{return t}});return Object(r.useEffect)(()=>{try{const t=n?String(a):JSON.stringify(a);localStorage.setItem(e,t)}catch{}}),[a,c]};const v=(e,t)=>{switch(t.type){case"match":return{matches:!0};case"nomatch":return{matches:!1};default:return e}};var b=e=>{const[t,n]=Object(r.useReducer)(v,{matches:!1}),a=e=>{e.matches?n({type:"match"}):t.matches&&n({type:"nomatch"})},c=window.matchMedia(e);return c.addListener(a),Object(r.useEffect)(()=>{a(c)},[e]),{...t}};var w=n(24),E=n.n(w);const j=(e,t,...n)=>{switch(t.type){case"connecting":return{...e,connecting:!0,connected:!1};case"connected":return{...e,connecting:!1,connected:!0};case"disconnected":return{...e,connecting:!1,connected:!1};case"message":const n=[].concat(e.message);return n.push(t.payload.data),{...e,message:n,error:null,connecting:!1};case"error":return{...e,error:t.payload.error,connecting:!1};default:return e}};var O=(e="ws://localhost:4567",t=!0)=>{const[n,a]=Object(r.useReducer)(j,{message:[],error:null,connecting:!0,connected:!1});var c=new E.a.Client(e);Object(r.useEffect)(()=>{(async()=>(a({type:"connecting",payload:{}}),new Promise(async(n,r)=>{c.onConnect=e=>(a({type:"connected"}),n()),c.onDisconnect=()=>(a({type:"disconnected"}),n()),await c.connect(),c.onUpdate=e=>(a({type:"message",payload:{data:e}}),n()),t&&c.subscribe(e,e=>(a({type:"message",payload:{data:e}}),n()))})))()},[]);return{...n,client:c,dispatcher:e=>{a({type:"message",payload:{data:e}})}}};const k=(e,t)=>{switch(t.type){case"online":return{online:!0,offline:!1};case"offline":return{online:!1,offline:!0};default:return e}};var S=e=>{const[t,n]=Object(r.useReducer)(k,{online:!0,offline:!1});return window.addEventListener("offline",function(e){n({type:"offline"})}),window.addEventListener("online",function(e){n({type:"online"})}),{...t}};const N=(e,t)=>{switch(t.type){case"hidden":return{visible:!1,hidden:!0};case"visible":return{visible:!0,hidden:!1};default:return e}};var C=e=>{const[t,n]=Object(r.useReducer)(N,{visible:!0,hidden:!1});return document.addEventListener("visibilitychange",e=>{n({type:document.visibilityState})}),{...t}};const T={mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrer:"no-referrer"};var L=(e="",t={method:"POST"})=>{const{data:n,error:r,loading:a,complete:c,makeRequest:o}=u(e),s=i(T,t);return{data:n,error:r,loading:a,complete:c,postData:async e=>{await o({method:"POST",...s,body:"string"==typeof e||e instanceof String?e:JSON.stringify(e)})}}};var R=e=>{const[t,n]=Object(r.useState)(e);return Object(r.useEffect)(()=>{document.title=t},[t]),[t,n]};n.d(t,"a",function(){return c}),n.d(t,"b",function(){return o}),n.d(t,"c",function(){return s}),n.d(t,"d",function(){return p}),n.d(t,"e",function(){return g}),n.d(t,"f",function(){return h}),n.d(t,"g",function(){return b}),n.d(t,"h",function(){return O}),n.d(t,"i",function(){return S}),n.d(t,"j",function(){return C}),n.d(t,"k",function(){return L}),n.d(t,"l",function(){return y}),n.d(t,"m",function(){return R})},32:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(23);t.default=()=>{Object(c.m)("useNes example from @brightleaf/react-hooks");const{getUrl:e}=Object(c.d)(),{message:t,error:n,connecting:r,connected:o,...s}=Object(c.h)("wss://kev-pi.herokuapp.com");if(console.info("The rest",s),n)return a.a.createElement("div",{className:"App"},a.a.createElement("h2",null,"Error Getting Data"));const i=r?a.a.createElement("div",{className:"alert alert-warning"},"Connecting"):a.a.createElement("div",{className:"alert alert-info"},"Not Connecting"),d=o?a.a.createElement("div",{className:"alert alert-success"},"Connected"):a.a.createElement("div",{className:"alert alert-danger"},"Not Connected"),l=t.map((e,t)=>a.a.createElement("div",{className:`mar-0 pad-b-xs ${t%2?"text-secondary":"text-primary"}`,key:`key-${t}`},e));return a.a.createElement("div",{className:"App content"},a.a.createElement("h2",null,"Messages from Server"),a.a.createElement("div",null,l),a.a.createElement("div",{className:"pad-t-md mar-t-md"},a.a.createElement("div",{className:"button",onClick:t=>{e("https://kev-pi.herokuapp.com/send")}},"Send a message from server")),a.a.createElement("br",null),a.a.createElement("div",null,i,d))}}}]);