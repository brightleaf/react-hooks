(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{22:function(e,t,a){"use strict";var n=a(0);const r=(e,t)=>{switch(t.type){case"get":case"loading":return{...e,loading:!0};case"success":return{...e,data:t.payload.data,error:null,loading:!1};case"error":return{...e,data:null,error:t.payload.error,loading:!1};default:return e}};var c=e=>{Object(n.useEffect)(()=>{const t=document.querySelector("link[rel*='icon']")||document.createElement("link");t.type="image/x-icon",t.rel="shortcut icon",t.href=e,document.getElementsByTagName("head")[0].appendChild(t)},[e])};var o=(e,t)=>{const[a,c]=Object(n.useReducer)(r,{data:[],error:null,loading:!0}),o=Object(n.useCallback)(async e=>{c({type:"get"});const a=await fetch(e,t),n=await a.json();c({type:"success",payload:{data:n}})},[t]);return Object(n.useEffect)(()=>{o(e)},[o,e]),a};const s={mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrer:"no-referrer"};var l=(e="",t={method:"GET"})=>{const[a,c]=Object(n.useReducer)(r,{data:[],error:null,loading:!1}),o={...s,...t};return{...a,makeRequest:async(t=o,a=e)=>{c({type:"get"});const n=await fetch(a,t),r=await n.json();c({type:"success",payload:{data:r}})}}};const u={mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrer:"no-referrer"};var d=(e="",t={method:"GET"})=>{const{data:a,error:n,loading:r,makeRequest:c}=l(e,{data:[],error:null,loading:!1}),o={...u,...t};return{data:a,error:n,loading:r,getUrl:async(t=e)=>{await c({method:"GET",...o},t)}}},i=a(21);const p=(e,t)=>{switch(t.type){case"get":case"loading":return{...e,loading:!0};case"success":return{...e,data:t.payload.data,error:null,loading:!1};case"error":return{...e,data:null,error:t.payload.error,loading:!1};default:return e}};var m=function(e,t,a={}){const[r,c]=Object(n.useReducer)(p,{data:[],error:null,loading:!0}),o=Object.keys(a).map(e=>a[e]);return Object(n.useEffect)(()=>{(async a=>{c({type:"loading"});const n=await Object(i.request)(e,t,a);c({type:"success",payload:{data:n}})})(a)},o),{...r}};var g=(e,t=window)=>{const[a,r]=Object(n.useState)(!1),c=t=>{t.key===e&&r(!0)},o=t=>{t.key===e&&r(!1)};return Object(n.useEffect)(()=>(t.addEventListener("keydown",c),t.addEventListener("keyup",o),()=>{t.removeEventListener("keydown",c),t.removeEventListener("keyup",o)}),[e,t]),a};var y=(e,t,a=!1)=>{const[r,c]=Object(n.useState)(()=>{try{const n=localStorage.getItem(e);return"string"!=typeof n?(localStorage.setItem(e,a?String(t):JSON.stringify(t)),t):a?n:JSON.parse(n||"null")}catch{return t}});return Object(n.useEffect)(()=>{try{const t=a?String(r):JSON.stringify(r);localStorage.setItem(e,t)}catch{}}),[r,c]};var f=a(23),b=a.n(f);const h=(e,t,...a)=>{switch(t.type){case"connecting":return{...e,connecting:!0,connected:!1};case"connected":return{...e,connecting:!1,connected:!0};case"disconnected":return{...e,connecting:!1,connected:!1};case"message":const a=[].concat(e.message);return a.push(t.payload.data),{...e,message:a,error:null,connecting:!1};case"error":return{...e,error:t.payload.error,connecting:!1};default:return e}};var E=(e="ws://localhost:4567",t=!0)=>{const[a,r]=Object(n.useReducer)(h,{message:[],error:null,connecting:!0,connected:!1});var c=new b.a.Client(e);Object(n.useEffect)(()=>{(async()=>(r({type:"connecting",payload:{}}),new Promise(async(a,n)=>{c.onConnect=e=>(r({type:"connected"}),a()),c.onDisconnect=()=>(r({type:"disconnected"}),a()),await c.connect(),c.onUpdate=e=>(r({type:"message",payload:{data:e}}),a()),t&&c.subscribe(e,e=>(r({type:"message",payload:{data:e}}),a()))})))()},[]);return{...a,client:c,dispatcher:e=>{r({type:"message",payload:{data:e}})}}};const w={mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrer:"no-referrer"};var k=(e="",t={method:"POST"})=>{const{data:a,error:n,loading:r,makeRequest:c}=l(e,{data:[],error:null,loading:!1}),o={...w,...t};return{data:a,error:n,loading:r,postData:async e=>{await c({method:"POST",...o,body:JSON.stringify(e)})}}};var O=e=>{Object(n.useEffect)(()=>{document.title=e},[e])};a.d(t,"a",function(){return c}),a.d(t,"b",function(){return o}),a.d(t,"c",function(){return d}),a.d(t,"d",function(){return m}),a.d(t,"e",function(){return g}),a.d(t,"f",function(){return y}),a.d(t,"g",function(){return E}),a.d(t,"h",function(){return k}),a.d(t,"i",function(){return O})},26:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(22);t.default=()=>{Object(c.i)("useFetch example from @brightleaf/react-hooks");const[e,t]=Object(n.useState)(1),{data:a,error:o,loading:s}=Object(c.b)(`https://swapiql.herokuapp.com/api/characters/${e}`);return o?r.a.createElement("div",{className:"App"},r.a.createElement("h2",null,"Error Fetching Data")):s?r.a.createElement("div",{className:"App"},r.a.createElement("h2",null,"Loading Data")):r.a.createElement("div",{className:"App content"},r.a.createElement("h2",null,a[0].name),r.a.createElement("h3",null,"Pick a number"),r.a.createElement("div",{className:"field is-grouped"},r.a.createElement("p",{className:"control"},r.a.createElement("button",{className:"button",onClick:e=>{t(1)}},"1")),r.a.createElement("p",{className:"control"},r.a.createElement("button",{type:"button",className:"button",onClick:e=>{t(2)}},"2")),r.a.createElement("p",{className:"control"},r.a.createElement("button",{type:"button",className:"button",onClick:e=>{t(3)}},"3")),r.a.createElement("p",{className:"control"},r.a.createElement("button",{type:"button",className:"button",onClick:e=>{console.log("click"),t(4)}},"4")),r.a.createElement("p",{className:"control"},r.a.createElement("button",{type:"button",className:"button",onClick:e=>{t(5)}},"5")),r.a.createElement("p",{className:"control"},r.a.createElement("button",{type:"button",className:"button",onClick:e=>{t(6)}},"6"))))}}}]);