(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{22:function(e,t,a){"use strict";var r=a(0);const n=(e,t)=>{switch(t.type){case"get":case"loading":return{...e,loading:!0};case"success":return{...e,data:t.payload.data,error:null,loading:!1};case"error":return{...e,data:null,error:t.payload.error,loading:!1};default:return e}};var c=e=>{Object(r.useEffect)(()=>{const t=document.querySelector("link[rel*='icon']")||document.createElement("link");t.type="image/x-icon",t.rel="shortcut icon",t.href=e,document.getElementsByTagName("head")[0].appendChild(t)},[e])};var o=(e,t)=>{const[a,c]=Object(r.useReducer)(n,{data:[],error:null,loading:!0}),o=Object(r.useCallback)(async e=>{c({type:"get"});const a=await fetch(e,t),r=await a.json();c({type:"success",payload:{data:r}})},[t]);return Object(r.useEffect)(()=>{o(e)},[o,e]),a};const s={mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrer:"no-referrer"};var l=(e="",t={method:"GET"})=>{const[a,c]=Object(r.useReducer)(n,{data:[],error:null,loading:!1}),o={...s,...t};return{...a,makeRequest:async(t=o,a=e)=>{c({type:"get"});const r=await fetch(a,t),n=await r.json();c({type:"success",payload:{data:n}})}}};const d={mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrer:"no-referrer"};var i=(e="",t={method:"GET"})=>{const{data:a,error:r,loading:n,makeRequest:c}=l(e,{data:[],error:null,loading:!1}),o={...d,...t};return{data:a,error:r,loading:n,getUrl:async(t=e)=>{await c({method:"GET",...o},t)}}},u=a(21);const m=(e,t)=>{switch(t.type){case"get":case"loading":return{...e,loading:!0};case"success":return{...e,data:t.payload.data,error:null,loading:!1};case"error":return{...e,data:null,error:t.payload.error,loading:!1};default:return e}};var p=function(e,t,a={}){const[n,c]=Object(r.useReducer)(m,{data:[],error:null,loading:!0}),o=Object.keys(a).map(e=>a[e]);return Object(r.useEffect)(()=>{(async a=>{c({type:"loading"});const r=await Object(u.request)(e,t,a);c({type:"success",payload:{data:r}})})(a)},o),{...n}};var g=(e,t,a=!1)=>{const[n,c]=Object(r.useState)(()=>{try{const r=localStorage.getItem(e);return"string"!=typeof r?(localStorage.setItem(e,a?String(t):JSON.stringify(t)),t):a?r:JSON.parse(r||"null")}catch{return t}});return Object(r.useEffect)(()=>{try{const t=a?String(n):JSON.stringify(n);localStorage.setItem(e,t)}catch{}}),[n,c]};var y=a(23),f=a.n(y);const h=(e,t,...a)=>{switch(t.type){case"connecting":return{...e,connecting:!0,connected:!1};case"connected":return{...e,connecting:!1,connected:!0};case"disconnected":return{...e,connecting:!1,connected:!1};case"message":const a=[].concat(e.message);return a.push(t.payload.data),{...e,message:a,error:null,connecting:!1};case"error":return{...e,error:t.payload.error,connecting:!1};default:return e}};var b=(e="ws://localhost:4567",t=!0)=>{const[a,n]=Object(r.useReducer)(h,{message:[],error:null,connecting:!0,connected:!1});var c=new f.a.Client(e);Object(r.useEffect)(()=>{(async()=>(n({type:"connecting",payload:{}}),new Promise(async(a,r)=>{c.onConnect=e=>(n({type:"connected"}),a()),c.onDisconnect=()=>(n({type:"disconnected"}),a()),await c.connect(),c.onUpdate=e=>(n({type:"message",payload:{data:e}}),a()),t&&c.subscribe(e,e=>(n({type:"message",payload:{data:e}}),a()))})))()},[]);return{...a,client:c,dispatcher:e=>{n({type:"message",payload:{data:e}})}}};const v={mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrer:"no-referrer"};var E=(e="",t={method:"POST"})=>{const{data:a,error:r,loading:n,makeRequest:c}=l(e,{data:[],error:null,loading:!1}),o={...v,...t};return{data:a,error:r,loading:n,postData:async e=>{await c({method:"POST",...o,body:JSON.stringify(e)})}}};var w=e=>{Object(r.useEffect)(()=>{document.title=e},[e])};a.d(t,"a",function(){return c}),a.d(t,"b",function(){return o}),a.d(t,"c",function(){return i}),a.d(t,"d",function(){return p}),a.d(t,"e",function(){return g}),a.d(t,"f",function(){return b}),a.d(t,"g",function(){return E}),a.d(t,"h",function(){return w})},31:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(22);t.default=()=>{Object(c.h)("useNes example from @brightleaf/react-hooks");const{getUrl:e}=Object(c.c)(),{message:t,error:a,connecting:r,connected:o,...s}=Object(c.f)("wss://kev-pi.herokuapp.com");if(console.info("The rest",s),a)return n.a.createElement("div",{className:"App"},n.a.createElement("h2",null,"Error Getting Data"));const l=r?n.a.createElement("div",{className:"alert alert-warning"},"Connecting"):n.a.createElement("div",{className:"alert alert-info"},"Not Connecting"),d=o?n.a.createElement("div",{className:"alert alert-success"},"Connected"):n.a.createElement("div",{className:"alert alert-danger"},"Not Connected"),i=t.map((e,t)=>n.a.createElement("div",{className:`mar-0 pad-b-xs ${t%2?"text-secondary":"text-primary"}`,key:`key-${t}`},e));return n.a.createElement("div",{className:"App content"},n.a.createElement("h2",null,"Messages from Server"),n.a.createElement("div",null,i),n.a.createElement("div",{className:"pad-t-md mar-t-md"},n.a.createElement("div",{className:"button",onClick:t=>{e("https://kev-pi.herokuapp.com/send")}},"Send a message from server")),n.a.createElement("br",null),n.a.createElement("div",null,l,d))}}}]);