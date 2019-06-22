(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{22:function(e,t,a){"use strict";var n=a(0);const r=(e,t)=>{switch(t.type){case"get":case"loading":return{...e,loading:!0};case"success":return{...e,data:t.payload.data,error:null,loading:!1};case"error":return{...e,data:null,error:t.payload.error,loading:!1};default:return e}};var c=e=>{Object(n.useEffect)(()=>{const t=document.querySelector("link[rel*='icon']")||document.createElement("link");t.type="image/x-icon",t.rel="shortcut icon",t.href=e,document.getElementsByTagName("head")[0].appendChild(t)},[e])};var o=(e,t)=>{const[a,c]=Object(n.useReducer)(r,{data:[],error:null,loading:!0}),o=Object(n.useCallback)(async e=>{c({type:"get"});const a=await fetch(e,t),n=await a.json();c({type:"success",payload:{data:n}})},[t]);return Object(n.useEffect)(()=>{o(e)},[o,e]),a};const s={mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrer:"no-referrer"};var l=(e="",t={method:"GET"})=>{const[a,c]=Object(n.useReducer)(r,{data:[],error:null,loading:!1}),o={...s,...t};return{...a,makeRequest:async(t=o,a=e)=>{c({type:"get"});const n=await fetch(a,t),r=await n.json();c({type:"success",payload:{data:r}})}}};const i={mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrer:"no-referrer"};var d=(e="",t={method:"GET"})=>{const{data:a,error:n,loading:r,makeRequest:c}=l(e,{data:[],error:null,loading:!1}),o={...i,...t};return{data:a,error:n,loading:r,getUrl:async(t=e)=>{await c({method:"GET",...o},t)}}},u=a(21);const m=(e,t)=>{switch(t.type){case"get":case"loading":return{...e,loading:!0};case"success":return{...e,data:t.payload.data,error:null,loading:!1};case"error":return{...e,data:null,error:t.payload.error,loading:!1};default:return e}};var g=function(e,t,a={}){const[r,c]=Object(n.useReducer)(m,{data:[],error:null,loading:!0}),o=Object.keys(a).map(e=>a[e]);return Object(n.useEffect)(()=>{(async a=>{c({type:"loading"});const n=await Object(u.request)(e,t,a);c({type:"success",payload:{data:n}})})(a)},o),{...r}};var p=(e,t=window)=>{const[a,r]=Object(n.useState)(!1),c=t=>{t.key===e&&r(!0)},o=t=>{t.key===e&&r(!1)};return Object(n.useEffect)(()=>(t.addEventListener("keydown",c),t.addEventListener("keyup",o),()=>{t.removeEventListener("keydown",c),t.removeEventListener("keyup",o)}),[e,t]),a};var f=(e,t,a=!1)=>{const[r,c]=Object(n.useState)(()=>{try{const n=localStorage.getItem(e);return"string"!=typeof n?(localStorage.setItem(e,a?String(t):JSON.stringify(t)),t):a?n:JSON.parse(n||"null")}catch{return t}});return Object(n.useEffect)(()=>{try{const t=a?String(r):JSON.stringify(r);localStorage.setItem(e,t)}catch{}}),[r,c]};var y=a(23),h=a.n(y);const E=(e,t,...a)=>{switch(t.type){case"connecting":return{...e,connecting:!0,connected:!1};case"connected":return{...e,connecting:!1,connected:!0};case"disconnected":return{...e,connecting:!1,connected:!1};case"message":const a=[].concat(e.message);return a.push(t.payload.data),{...e,message:a,error:null,connecting:!1};case"error":return{...e,error:t.payload.error,connecting:!1};default:return e}};var v=(e="ws://localhost:4567",t=!0)=>{const[a,r]=Object(n.useReducer)(E,{message:[],error:null,connecting:!0,connected:!1});var c=new h.a.Client(e);Object(n.useEffect)(()=>{(async()=>(r({type:"connecting",payload:{}}),new Promise(async(a,n)=>{c.onConnect=e=>(r({type:"connected"}),a()),c.onDisconnect=()=>(r({type:"disconnected"}),a()),await c.connect(),c.onUpdate=e=>(r({type:"message",payload:{data:e}}),a()),t&&c.subscribe(e,e=>(r({type:"message",payload:{data:e}}),a()))})))()},[]);return{...a,client:c,dispatcher:e=>{r({type:"message",payload:{data:e}})}}};const w={mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrer:"no-referrer"};var b=(e="",t={method:"POST"})=>{const{data:a,error:n,loading:r,makeRequest:c}=l(e,{data:[],error:null,loading:!1}),o={...w,...t};return{data:a,error:n,loading:r,postData:async e=>{await c({method:"POST",...o,body:JSON.stringify(e)})}}};var k=e=>{Object(n.useEffect)(()=>{document.title=e},[e])};a.d(t,"a",function(){return c}),a.d(t,"b",function(){return o}),a.d(t,"c",function(){return d}),a.d(t,"d",function(){return g}),a.d(t,"e",function(){return p}),a.d(t,"f",function(){return f}),a.d(t,"g",function(){return v}),a.d(t,"h",function(){return b}),a.d(t,"i",function(){return k})},30:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(22);t.default=()=>{Object(c.i)("usePost example from @brightleaf/react-hooks");const{data:e,error:t,loading:a,postData:n}=Object(c.h)("https://kev-pi.herokuapp.com/api/echo");return a?r.a.createElement("div",{className:"App content"},r.a.createElement("h2",null,"Loading"),r.a.createElement("span",{className:"loader loader-xl"})):t?r.a.createElement("div",{className:"App content"},r.a.createElement("h2",null,"Error Posting Data")):r.a.createElement("div",{className:"App content"},r.a.createElement("h3",null,"Result"),r.a.createElement("pre",null,JSON.stringify(e,null,2)),r.a.createElement("div",{className:"container"},r.a.createElement("h2",null,"Post"),r.a.createElement("div",{className:"wrap"},r.a.createElement("div",{className:"button",onClick:e=>{console.log("click"),n({id:1,message:"The message from 1"})}},"1")),r.a.createElement("div",{className:"wrap"},r.a.createElement("div",{className:"button",onClick:e=>{console.log("click"),n({id:2,message:"The message from 2"})}},"2")),r.a.createElement("div",{className:"wrap"},r.a.createElement("div",{className:"button",onClick:e=>{console.log("click"),n({id:3,message:"The message from 3"})}},"3")),r.a.createElement("div",{className:"wrap"},r.a.createElement("div",{className:"button",onClick:e=>{console.log("click"),n({id:4,message:"The message from 4"})}},"4")),r.a.createElement("div",{className:"wrap"},r.a.createElement("div",{className:"button",onClick:e=>{console.log("click"),n({id:5,message:"The message from 5"})}},"5")),r.a.createElement("div",{className:"wrap"},r.a.createElement("div",{className:"button",onClick:e=>{console.log("click"),n({id:6,message:"The message from 6"})}},"6"))))}}}]);