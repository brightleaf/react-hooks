(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{22:function(e,t,n){"use strict";var r=n(0);const a=(e,t)=>{switch(t.type){case"get":case"loading":return{...e,loading:!0};case"success":return{...e,data:t.payload.data,error:null,loading:!1};case"error":return{...e,data:null,error:t.payload.error,loading:!1};default:return e}};var c=e=>{Object(r.useEffect)(()=>{const t=document.querySelector("link[rel*='icon']")||document.createElement("link");t.type="image/x-icon",t.rel="shortcut icon",t.href=e,document.getElementsByTagName("head")[0].appendChild(t)},[e])};var o=(e,t)=>{const[n,c]=Object(r.useReducer)(a,{data:[],error:null,loading:!0}),o=Object(r.useCallback)(async e=>{c({type:"get"});const n=await fetch(e,t),r=await n.json();c({type:"success",payload:{data:r}})},[t]);return Object(r.useEffect)(()=>{o(e)},[o,e]),n};const s={mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrer:"no-referrer"};var d=(e="",t={method:"GET"})=>{const[n,c]=Object(r.useReducer)(a,{data:[],error:null,loading:!1}),o={...s,...t};return{...n,makeRequest:async(t=o,n=e)=>{c({type:"get"});const r=await fetch(n,t),a=await r.json();c({type:"success",payload:{data:a}})}}};const l={mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrer:"no-referrer"};var u=(e="",t={method:"GET"})=>{const{data:n,error:r,loading:a,makeRequest:c}=d(e,{data:[],error:null,loading:!1}),o={...l,...t};return{data:n,error:r,loading:a,getUrl:async(t=e)=>{await c({method:"GET",...o},t)}}},i=n(21);const p=(e,t)=>{switch(t.type){case"get":case"loading":return{...e,loading:!0};case"success":return{...e,data:t.payload.data,error:null,loading:!1};case"error":return{...e,data:null,error:t.payload.error,loading:!1};default:return e}};var g=function(e,t,n={}){const[a,c]=Object(r.useReducer)(p,{data:[],error:null,loading:!0}),o=Object.keys(n).map(e=>n[e]);return Object(r.useEffect)(()=>{(async n=>{c({type:"loading"});const r=await Object(i.request)(e,t,n);c({type:"success",payload:{data:r}})})(n)},o),{...a}};var y=(e,t=window)=>{const[n,a]=Object(r.useState)(!1),c=t=>{t.key===e&&a(!0)},o=t=>{t.key===e&&a(!1)};return Object(r.useEffect)(()=>(t.addEventListener("keydown",c),t.addEventListener("keyup",o),()=>{t.removeEventListener("keydown",c),t.removeEventListener("keyup",o)}),[e,t]),n};var f=(e,t,n=!1)=>{const[a,c]=Object(r.useState)(()=>{try{const r=localStorage.getItem(e);return"string"!=typeof r?(localStorage.setItem(e,n?String(t):JSON.stringify(t)),t):n?r:JSON.parse(r||"null")}catch{return t}});return Object(r.useEffect)(()=>{try{const t=n?String(a):JSON.stringify(a);localStorage.setItem(e,t)}catch{}}),[a,c]};var m=n(23),h=n.n(m);const b=(e,t,...n)=>{switch(t.type){case"connecting":return{...e,connecting:!0,connected:!1};case"connected":return{...e,connecting:!1,connected:!0};case"disconnected":return{...e,connecting:!1,connected:!1};case"message":const n=[].concat(e.message);return n.push(t.payload.data),{...e,message:n,error:null,connecting:!1};case"error":return{...e,error:t.payload.error,connecting:!1};default:return e}};var w=(e="ws://localhost:4567",t=!0)=>{const[n,a]=Object(r.useReducer)(b,{message:[],error:null,connecting:!0,connected:!1});var c=new h.a.Client(e);Object(r.useEffect)(()=>{(async()=>(a({type:"connecting",payload:{}}),new Promise(async(n,r)=>{c.onConnect=e=>(a({type:"connected"}),n()),c.onDisconnect=()=>(a({type:"disconnected"}),n()),await c.connect(),c.onUpdate=e=>(a({type:"message",payload:{data:e}}),n()),t&&c.subscribe(e,e=>(a({type:"message",payload:{data:e}}),n()))})))()},[]);return{...n,client:c,dispatcher:e=>{a({type:"message",payload:{data:e}})}}};const O={mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrer:"no-referrer"};var j=(e="",t={method:"POST"})=>{const{data:n,error:r,loading:a,makeRequest:c}=d(e,{data:[],error:null,loading:!1}),o={...O,...t};return{data:n,error:r,loading:a,postData:async e=>{await c({method:"POST",...o,body:JSON.stringify(e)})}}};var E=e=>{Object(r.useEffect)(()=>{document.title=e},[e])};n.d(t,"a",function(){return c}),n.d(t,"b",function(){return o}),n.d(t,"c",function(){return u}),n.d(t,"d",function(){return g}),n.d(t,"e",function(){return y}),n.d(t,"f",function(){return f}),n.d(t,"g",function(){return w}),n.d(t,"h",function(){return j}),n.d(t,"i",function(){return E})},32:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(22);t.default=()=>{Object(c.i)("useLocalStorage example from @brightleaf/react-hooks");const[e,t]=Object(c.f)("count",1);return a.a.createElement("div",{className:"App content"},a.a.createElement("h2",null,e," - Count "),a.a.createElement("div",{className:"field is-grouped"},a.a.createElement("p",{className:"control"},a.a.createElement("button",{className:"button",onClick:n=>{t(e+1)}},"+ Add")," "),a.a.createElement("p",{className:"control"},a.a.createElement("button",{className:"button",onClick:n=>{t(e-1)}},"- Subtract"))))}}}]);