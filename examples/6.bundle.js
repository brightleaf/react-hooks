(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{23:function(e,t,n){"use strict";var r=n(0);const a=(e,t)=>{switch(t.type){case"get":case"loading":return{...e,loading:!0};case"success":return{...e,data:t.payload.data,error:null,loading:!1};case"error":return{...e,data:null,error:t.payload.error,loading:!1};default:return e}};var c=(e,t,n=window)=>{const a=Object(r.useRef)();Object(r.useEffect)(()=>{a.current=t},[t]),Object(r.useEffect)(()=>{if(!n||!n.addEventListener)return;const t=e=>a.current(e);return n.addEventListener(e,t),()=>{n.removeEventListener(e,t)}},[e,n])};var o=e=>{const[t,n]=Object(r.useState)(e);return Object(r.useEffect)(()=>{const e=document.querySelector("link[rel*='icon']")||document.createElement("link");e.type="image/x-icon",e.rel="shortcut icon",e.href=t,document.getElementsByTagName("head")[0].appendChild(e)},[t]),[t,n]};var s=(e,t)=>{const[n,c]=Object(r.useReducer)(a,{data:[],error:null,loading:!0}),o=Object(r.useCallback)(async e=>{c({type:"get"});const n=await fetch(e,t),r=await n.json();c({type:"success",payload:{data:r}})},[t]);return Object(r.useEffect)(()=>{o(e)},[o,e]),n};const l={mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrer:"no-referrer"};var i=(e="",t={method:"GET"})=>{const[n,c]=Object(r.useReducer)(a,{data:[],error:null,loading:!1}),o={...l,...t};return{...n,makeRequest:async(t=o,n=e)=>{c({type:"get"});const r=await fetch(n,t),a=await r.json();c({type:"success",payload:{data:a}})}}};const u={mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrer:"no-referrer"};var d=(e="",t={method:"GET"})=>{const{data:n,error:r,loading:a,makeRequest:c}=i(e,{data:[],error:null,loading:!1}),o={...u,...t};return{data:n,error:r,loading:a,getUrl:async(t=e)=>{await c({method:"GET",...o},t)}}},m=n(22);const p=(e,t)=>{switch(t.type){case"get":case"loading":return{...e,loading:!0};case"success":return{...e,data:t.payload.data,error:null,loading:!1};case"error":return{...e,data:null,error:t.payload.error,loading:!1};default:return e}};var f=function(e,t,n={}){const[a,c]=Object(r.useReducer)(p,{data:[],error:null,loading:!0}),o=Object.keys(n).map(e=>n[e]);return Object(r.useEffect)(()=>{(async n=>{c({type:"loading"});const r=await Object(m.request)(e,t,n);c({type:"success",payload:{data:r}})})(n)},o),{...a}};var y=(e,t=window)=>{const[n,a]=Object(r.useState)(!1),c=t=>{t.key===e&&a(!0)},o=t=>{t.key===e&&a(!1)};return Object(r.useEffect)(()=>(t.addEventListener("keydown",c),t.addEventListener("keyup",o),()=>{t.removeEventListener("keydown",c),t.removeEventListener("keyup",o)}),[e,t]),n};var g=(e,t,n=!1)=>{const[a,c]=Object(r.useState)(()=>{try{const r=localStorage.getItem(e);return"string"!=typeof r?(localStorage.setItem(e,n?String(t):JSON.stringify(t)),t):n?r:JSON.parse(r||"null")}catch{return t}});return Object(r.useEffect)(()=>{try{const t=n?String(a):JSON.stringify(a);localStorage.setItem(e,t)}catch{}}),[a,c]};const h=(e,t)=>{switch(t.type){case"match":return{matches:!0};case"nomatch":return{matches:!1};default:return e}};var b=e=>{const[t,n]=Object(r.useReducer)(h,{matches:!1}),a=e=>{e.matches?n({type:"match"}):t.matches&&n({type:"nomatch"})},c=window.matchMedia(e);return c.addListener(a),Object(r.useEffect)(()=>{a(c)},[e]),{...t}};var E=n(24),v=n.n(E);const w=(e,t,...n)=>{switch(t.type){case"connecting":return{...e,connecting:!0,connected:!1};case"connected":return{...e,connecting:!1,connected:!0};case"disconnected":return{...e,connecting:!1,connected:!1};case"message":const n=[].concat(e.message);return n.push(t.payload.data),{...e,message:n,error:null,connecting:!1};case"error":return{...e,error:t.payload.error,connecting:!1};default:return e}};var j=(e="ws://localhost:4567",t=!0)=>{const[n,a]=Object(r.useReducer)(w,{message:[],error:null,connecting:!0,connected:!1});var c=new v.a.Client(e);Object(r.useEffect)(()=>{(async()=>(a({type:"connecting",payload:{}}),new Promise(async(n,r)=>{c.onConnect=e=>(a({type:"connected"}),n()),c.onDisconnect=()=>(a({type:"disconnected"}),n()),await c.connect(),c.onUpdate=e=>(a({type:"message",payload:{data:e}}),n()),t&&c.subscribe(e,e=>(a({type:"message",payload:{data:e}}),n()))})))()},[]);return{...n,client:c,dispatcher:e=>{a({type:"message",payload:{data:e}})}}};const O=(e,t)=>{switch(t.type){case"online":return{online:!0,offline:!1};case"offline":return{online:!1,offline:!0};default:return e}};var k=e=>{const[t,n]=Object(r.useReducer)(O,{online:!0,offline:!1});return window.addEventListener("offline",function(e){n({type:"offline"})}),window.addEventListener("online",function(e){n({type:"online"})}),{...t}};const N=(e,t)=>{switch(t.type){case"hidden":return{visible:!1,hidden:!0};case"visible":return{visible:!0,hidden:!1};default:return e}};var S=e=>{const[t,n]=Object(r.useReducer)(N,{visible:!0,hidden:!1});return document.addEventListener("visibilitychange",e=>{n({type:document.visibilityState})}),{...t}};const C={mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrer:"no-referrer"};var L=(e="",t={method:"POST"})=>{const{data:n,error:r,loading:a,makeRequest:c}=i(e,{data:[],error:null,loading:!1}),o={...C,...t};return{data:n,error:r,loading:a,postData:async e=>{await c({method:"POST",...o,body:JSON.stringify(e)})}}};var R=e=>{const[t,n]=Object(r.useState)(e);return Object(r.useEffect)(()=>{document.title=t},[t]),[t,n]};n.d(t,"a",function(){return c}),n.d(t,"b",function(){return o}),n.d(t,"c",function(){return s}),n.d(t,"d",function(){return d}),n.d(t,"e",function(){return f}),n.d(t,"f",function(){return y}),n.d(t,"g",function(){return g}),n.d(t,"h",function(){return b}),n.d(t,"i",function(){return j}),n.d(t,"j",function(){return k}),n.d(t,"k",function(){return S}),n.d(t,"l",function(){return L}),n.d(t,"m",function(){return R})},29:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(23);t.default=()=>{Object(c.m)("useGraphQL example from @brightleaf/react-hooks");const[e,t]=Object(r.useState)(1),{data:n,loading:o,error:s}=Object(c.e)("https://swapiql.herokuapp.com/graphql","query Person($id: ID) {\n      person(id: $id) {\n        id,\n        name,\n        height,\n        hairColor,\n        mass,\n        eyeColor,\n        skinColor,\n        birthYear,\n        gender,\n        homeworld {\n          name\n        }\n      }\n    }",{id:e});return o?a.a.createElement("div",{className:"App"},a.a.createElement("h2",null,"Loading"),a.a.createElement("span",{className:"loader loader-xl"})):s?a.a.createElement("div",null,"Error getting graphql data"):a.a.createElement("div",{className:"App content"},a.a.createElement("h2",null,n.person[0].name),a.a.createElement("h3",null,"Pick a number"),a.a.createElement("div",{className:"field is-grouped"},a.a.createElement("p",{className:"control"},a.a.createElement("button",{className:"button mar-r-sm",onClick:e=>{t(1)}},"1")),a.a.createElement("p",{className:"control"},a.a.createElement("button",{type:"button",className:"button mar-r-sm",onClick:e=>{t(2)}},"2")," "),a.a.createElement("p",{className:"control"},a.a.createElement("button",{type:"button",className:"button mar-r-sm",onClick:e=>{t(3)}},"3")," "),a.a.createElement("p",{className:"control"},a.a.createElement("button",{type:"button",className:"button mar-r-sm",onClick:e=>{console.log("click"),t(4)}},"4")," "),a.a.createElement("p",{className:"control"},a.a.createElement("button",{type:"button",className:"button mar-r-sm",onClick:e=>{t(5)}},"5")," "),a.a.createElement("p",{className:"control"},a.a.createElement("button",{type:"button",className:"button mar-r-sm",onClick:e=>{t(6)}},"6"))))}}}]);