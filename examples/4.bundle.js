(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{20:function(e,t,r){"use strict";var n=r(0),a=r(22);const c={mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrer:"no-referrer"};t.a=(e="",t={method:"GET"})=>{const[r,o]=Object(n.useReducer)(a.a,{data:[],error:null,loading:!1}),s={...c,...t};return{...r,makeRequest:async(t=s,r=e)=>{o({type:"get"});const n=await fetch(r,t),a=await n.json();o({type:"success",payload:{data:a}})}}}},21:function(e,t,r){"use strict";var n=r(24),a=r(0);const c=(e,t)=>{switch(t.type){case"get":return{...e,loading:!0};case"success":return{...e,data:t.payload.data,error:null,loading:!1};case"error":return{...e,data:null,error:t.payload.error,loading:!1};default:return e}};t.a=function(e,t,r){const[o,s]=Object(a.useReducer)(c,{data:[],error:null,loading:!0}),d=Object.keys(r).map(e=>r[e]);return Object(a.useEffect)(()=>{(async r=>{s({type:"get"});const a=await Object(n.request)(e,t,r);s({type:"success",payload:{data:a}})})(r)},d),{...o}}},22:function(e,t,r){"use strict";r.d(t,"a",function(){return n});const n=(e,t)=>{switch(t.type){case"get":return{...e,loading:!0};case"success":return{...e,data:t.payload.data,error:null,loading:!1};case"error":return{...e,data:null,error:t.payload.error,loading:!1};default:return e}}},23:function(e,t,r){"use strict";var n=r(20);const a={mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrer:"no-referrer"};t.a=(e="",t={method:"POST"})=>{const{data:r,error:c,loading:o,makeRequest:s}=Object(n.a)(e,{data:[],error:null,loading:!1}),d={...a,...t};return{data:r,error:c,loading:o,postData:async e=>{await s({method:"POST",...d,body:JSON.stringify(e)})}}}},26:function(e,t,r){"use strict";var n=r(0);var a=r(22);var c=(e,t)=>{const[r,c]=Object(n.useReducer)(a.a,{data:[],error:null,loading:!0}),o=Object(n.useCallback)(async e=>{c({type:"get"});const r=await fetch(e,t),n=await r.json();c({type:"success",payload:{data:n}})},[t]);return Object(n.useEffect)(()=>{o(e)},[o,e]),r},o=r(20);const s={mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrer:"no-referrer"};var d=(e="",t={method:"GET"})=>{const{data:r,error:n,loading:a,makeRequest:c}=Object(o.a)(e,{data:[],error:null,loading:!1}),d={...s,...t};return{data:r,error:n,loading:a,getUrl:async(t=e)=>{await c({method:"GET",...d},t)}}};r(21);var u=(e,t,r=!1)=>{const[a,c]=Object(n.useState)(()=>{try{const n=localStorage.getItem(e);return"string"!=typeof n?(localStorage.setItem(e,r?String(t):JSON.stringify(t)),t):r?n:JSON.parse(n||"null")}catch{return t}});return Object(n.useEffect)(()=>{try{const t=r?String(a):JSON.stringify(a);localStorage.setItem(e,t)}catch{}}),[a,c]};r(24);var i=r(28),l=r.n(i);const p=(e,t,...r)=>{switch(t.type){case"connecting":return{...e,connecting:!0,connected:!1};case"connected":return{...e,connecting:!1,connected:!0};case"disconnected":return{...e,connecting:!1,connected:!1};case"message":const r=[].concat(e.message);return r.push(t.payload.data),{...e,message:r,error:null,connecting:!1};case"error":return{...e,error:t.payload.error,connecting:!1};default:return e}};var g=(e="ws://localhost:4567",t=!0)=>{const[r,a]=Object(n.useReducer)(p,{message:[],error:null,connecting:!0,connected:!1});var c=new l.a.Client(e);Object(n.useEffect)(()=>{(async()=>(a({type:"connecting",payload:{}}),new Promise(async(r,n)=>{c.onConnect=e=>(a({type:"connected"}),r()),c.onDisconnect=()=>(a({type:"disconnected"}),r()),await c.connect(),c.onUpdate=e=>(a({type:"message",payload:{data:e}}),r()),t&&c.subscribe(e,e=>(a({type:"message",payload:{data:e}}),r()))})))()},[]);return{...r,client:c,dispatcher:e=>{a({type:"message",payload:{data:e}})}}};r(23);r.d(t,"a",function(){return c}),r.d(t,"b",function(){return d}),r.d(t,"c",function(){return u}),r.d(t,"d",function(){return g})},35:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),c=r(26);t.default=()=>{const[e,t]=Object(c.c)("count",1);return a.a.createElement("div",{className:"App"},a.a.createElement("h1",null,e," - Count "),a.a.createElement("button",{onClick:r=>{t(e+1)}},"+ Add")," ",a.a.createElement("button",{onClick:r=>{t(e-1)}},"- Subtract"))}}}]);