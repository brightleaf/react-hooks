(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{23:function(e,t,n){"use strict";var a=n(0);const r=(e,t)=>{switch(t.type){case"get":case"loading":return{...e,loading:!0};case"success":return{...e,data:t.payload.data,error:null,loading:!1};case"error":return{...e,data:null,error:t.payload.error,loading:!1};default:return e}};var c=(e,t,n=window)=>{const r=Object(a.useRef)();Object(a.useEffect)(()=>{r.current=t},[t]),Object(a.useEffect)(()=>{if(!n||!n.addEventListener)return;const t=e=>r.current(e);return n.addEventListener(e,t),()=>{n.removeEventListener(e,t)}},[e,n])};var o=e=>{const[t,n]=Object(a.useState)(e);return Object(a.useEffect)(()=>{const e=document.querySelector("link[rel*='icon']")||document.createElement("link");e.type="image/x-icon",e.rel="shortcut icon",e.href=t,document.getElementsByTagName("head")[0].appendChild(e)},[t]),[t,n]};var s=(e,t)=>{const[n,c]=Object(a.useReducer)(r,{data:[],error:null,loading:!0}),o=Object(a.useCallback)(async e=>{c({type:"get"});const n=await fetch(e,t),a=await n.json();c({type:"success",payload:{data:a}})},[t]);return Object(a.useEffect)(()=>{o(e)},[o,e]),n};function i(e,t){const n=e=>e&&"object"==typeof e;return n(e)&&n(t)?(Object.keys(t).forEach(a=>{const r=e[a],c=t[a];Array.isArray(r)&&Array.isArray(c)?e[a]=r.concat(c):n(r)&&n(c)?e[a]=i(Object.assign({},r),c):e[a]=c}),e):t}const l={mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrer:"no-referrer"},u=(e="",t={method:"GET"})=>{const[n,c]=Object(a.useReducer)(r,{data:[],error:null,loading:!1}),o=i(l,t);return{...n,makeRequest:async(t=o,n=e)=>{c({type:"get"});const a=await fetch(n,t);if("application/json"===t.headers["Content-Type"]){const e=await a.json();return e&&e.data?c({type:"success",payload:{data:e.data}}):c({type:"success",payload:{data:e}})}const r=await a.text();return c({type:"success",payload:{data:r}})}}};var d=u;const p={mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrer:"no-referrer"};var m=(e="",t={method:"GET"})=>{const{data:n,error:a,loading:r,makeRequest:c}=d(e,{data:[],error:null,loading:!1}),o=i(p,t);return{data:n,error:a,loading:r,getUrl:async(t=e)=>{await c({method:"GET",...o},t)}}};n(22);const f={method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrer:"no-referrer"},h=(e="/graphql",t,n={method:"POST"})=>{const{data:a,error:r,loading:c,makeRequest:o}=u(e,{data:null,error:null,loading:!1}),s=i(f,n);return{data:a,error:r,loading:c,makeQuery:async e=>{await o({...s,body:JSON.stringify({query:t,variables:e})})}}};var y=(e,t=window)=>{const[n,r]=Object(a.useState)(!1),c=t=>{t.key===e&&r(!0)},o=t=>{t.key===e&&r(!1)};return Object(a.useEffect)(()=>(t.addEventListener("keydown",c),t.addEventListener("keyup",o),()=>{t.removeEventListener("keydown",c),t.removeEventListener("keyup",o)}),[e,t]),n};var g=(e,t,n=!1)=>{const[r,c]=Object(a.useState)(()=>{try{const a=localStorage.getItem(e);return"string"!=typeof a?(localStorage.setItem(e,n?String(t):JSON.stringify(t)),t):n?a:JSON.parse(a||"null")}catch{return t}});return Object(a.useEffect)(()=>{try{const t=n?String(r):JSON.stringify(r);localStorage.setItem(e,t)}catch{}}),[r,c]};const b=(e,t)=>{switch(t.type){case"match":return{matches:!0};case"nomatch":return{matches:!1};default:return e}};var E=e=>{const[t,n]=Object(a.useReducer)(b,{matches:!1}),r=e=>{e.matches?n({type:"match"}):t.matches&&n({type:"nomatch"})},c=window.matchMedia(e);return c.addListener(r),Object(a.useEffect)(()=>{r(c)},[e]),{...t}};var w=n(24),v=n.n(w);const j=(e,t,...n)=>{switch(t.type){case"connecting":return{...e,connecting:!0,connected:!1};case"connected":return{...e,connecting:!1,connected:!0};case"disconnected":return{...e,connecting:!1,connected:!1};case"message":const n=[].concat(e.message);return n.push(t.payload.data),{...e,message:n,error:null,connecting:!1};case"error":return{...e,error:t.payload.error,connecting:!1};default:return e}};var O=(e="ws://localhost:4567",t=!0)=>{const[n,r]=Object(a.useReducer)(j,{message:[],error:null,connecting:!0,connected:!1});var c=new v.a.Client(e);Object(a.useEffect)(()=>{(async()=>(r({type:"connecting",payload:{}}),new Promise(async(n,a)=>{c.onConnect=e=>(r({type:"connected"}),n()),c.onDisconnect=()=>(r({type:"disconnected"}),n()),await c.connect(),c.onUpdate=e=>(r({type:"message",payload:{data:e}}),n()),t&&c.subscribe(e,e=>(r({type:"message",payload:{data:e}}),n()))})))()},[]);return{...n,client:c,dispatcher:e=>{r({type:"message",payload:{data:e}})}}};const k=(e,t)=>{switch(t.type){case"online":return{online:!0,offline:!1};case"offline":return{online:!1,offline:!0};default:return e}};var N=e=>{const[t,n]=Object(a.useReducer)(k,{online:!0,offline:!1});return window.addEventListener("offline",function(e){n({type:"offline"})}),window.addEventListener("online",function(e){n({type:"online"})}),{...t}};const S=(e,t)=>{switch(t.type){case"hidden":return{visible:!1,hidden:!0};case"visible":return{visible:!0,hidden:!1};default:return e}};var C=e=>{const[t,n]=Object(a.useReducer)(S,{visible:!0,hidden:!1});return document.addEventListener("visibilitychange",e=>{n({type:document.visibilityState})}),{...t}};const q={mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrer:"no-referrer"};var T=(e="",t={method:"POST"})=>{const{data:n,error:a,loading:r,makeRequest:c}=d(e,{data:[],error:null,loading:!1}),o=i(q,t);return{data:n,error:a,loading:r,postData:async e=>{await c({method:"POST",...o,body:"string"==typeof e||e instanceof String?e:JSON.stringify(e)})}}};var L=e=>{const[t,n]=Object(a.useState)(e);return Object(a.useEffect)(()=>{document.title=t},[t]),[t,n]};n.d(t,"a",function(){return c}),n.d(t,"b",function(){return o}),n.d(t,"c",function(){return s}),n.d(t,"d",function(){return m}),n.d(t,"e",function(){return y}),n.d(t,"f",function(){return g}),n.d(t,"g",function(){return E}),n.d(t,"h",function(){return O}),n.d(t,"i",function(){return N}),n.d(t,"j",function(){return C}),n.d(t,"k",function(){return T}),n.d(t,"l",function(){return h}),n.d(t,"m",function(){return L})},30:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(23);t.default=()=>{Object(c.m)("useGet example from @brightleaf/react-hooks");const[e,t]=Object(c.b)("brightleaf.ico"),[n,o]=Object(a.useState)(1),{data:s,error:i,loading:l,getUrl:u}=Object(c.d)(`https://swapiql.herokuapp.com/api/characters/${n}`);return console.info({data:s,error:i,loading:l,getUrl:u}),i?r.a.createElement("div",{className:"App"},r.a.createElement("h2",null,"Error Getting Data")):l?r.a.createElement("div",{className:"App"},r.a.createElement("h2",null,"Loading"),r.a.createElement("span",{className:"loader loader-xl"})):(0===s.length&&s.push({name:"Select Character"}),r.a.createElement("div",{className:"App content"},r.a.createElement("h2",null,s[0].name),r.a.createElement("h3",null,"Pick a number"),r.a.createElement("div",{className:"field is-grouped"},r.a.createElement("p",{className:"control"},r.a.createElement("button",{type:"button",className:"button",onClick:e=>{t("brightleaf-1.png"),u("https://swapiql.herokuapp.com/api/characters/1")}},"1")),r.a.createElement("p",{className:"control"},r.a.createElement("button",{type:"button",className:"button",onClick:e=>{u("https://swapiql.herokuapp.com/api/characters/2")}},"2")),r.a.createElement("p",{className:"control"},r.a.createElement("button",{type:"button",className:"button",onClick:e=>{u("https://swapiql.herokuapp.com/api/characters/3")}},"3")),r.a.createElement("p",{className:"control"},r.a.createElement("button",{type:"button",className:"button",onClick:e=>{u("https://swapiql.herokuapp.com/api/characters/4")}},"4")),r.a.createElement("p",{className:"control"},r.a.createElement("button",{type:"button",className:"button",onClick:e=>{u("https://swapiql.herokuapp.com/api/characters/5")}},"5")),r.a.createElement("p",{className:"control"},r.a.createElement("button",{type:"button",className:"button",onClick:e=>{u("https://swapiql.herokuapp.com/api/characters/6")}},"6")))))}}}]);