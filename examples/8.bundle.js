(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{22:function(e,a,t){"use strict";var n=t(0);const r=(e,a)=>{switch(a.type){case"get":case"loading":return{...e,loading:!0};case"success":return{...e,data:a.payload.data,error:null,loading:!1};case"error":return{...e,data:null,error:a.payload.error,loading:!1};default:return e}};var c=e=>{Object(n.useEffect)(()=>{const a=document.querySelector("link[rel*='icon']")||document.createElement("link");a.type="image/x-icon",a.rel="shortcut icon",a.href=e,document.getElementsByTagName("head")[0].appendChild(a)},[e])};var o=(e,a)=>{const[t,c]=Object(n.useReducer)(r,{data:[],error:null,loading:!0}),o=Object(n.useCallback)(async e=>{c({type:"get"});const t=await fetch(e,a),n=await t.json();c({type:"success",payload:{data:n}})},[a]);return Object(n.useEffect)(()=>{o(e)},[o,e]),t};const s={mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrer:"no-referrer"};var l=(e="",a={method:"GET"})=>{const[t,c]=Object(n.useReducer)(r,{data:[],error:null,loading:!1}),o={...s,...a};return{...t,makeRequest:async(a=o,t=e)=>{c({type:"get"});const n=await fetch(t,a),r=await n.json();c({type:"success",payload:{data:r}})}}};const i={mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrer:"no-referrer"};var d=(e="",a={method:"GET"})=>{const{data:t,error:n,loading:r,makeRequest:c}=l(e,{data:[],error:null,loading:!1}),o={...i,...a};return{data:t,error:n,loading:r,getUrl:async(a=e)=>{await c({method:"GET",...o},a)}}},u=t(21);const m=(e,a)=>{switch(a.type){case"get":case"loading":return{...e,loading:!0};case"success":return{...e,data:a.payload.data,error:null,loading:!1};case"error":return{...e,data:null,error:a.payload.error,loading:!1};default:return e}};var g=function(e,a,t={}){const[r,c]=Object(n.useReducer)(m,{data:[],error:null,loading:!0}),o=Object.keys(t).map(e=>t[e]);return Object(n.useEffect)(()=>{(async t=>{c({type:"loading"});const n=await Object(u.request)(e,a,t);c({type:"success",payload:{data:n}})})(t)},o),{...r}};var p=(e,a,t=!1)=>{const[r,c]=Object(n.useState)(()=>{try{const n=localStorage.getItem(e);return"string"!=typeof n?(localStorage.setItem(e,t?String(a):JSON.stringify(a)),a):t?n:JSON.parse(n||"null")}catch{return a}});return Object(n.useEffect)(()=>{try{const a=t?String(r):JSON.stringify(r);localStorage.setItem(e,a)}catch{}}),[r,c]};var f=t(23),y=t.n(f);const h=(e,a,...t)=>{switch(a.type){case"connecting":return{...e,connecting:!0,connected:!1};case"connected":return{...e,connecting:!1,connected:!0};case"disconnected":return{...e,connecting:!1,connected:!1};case"message":const t=[].concat(e.message);return t.push(a.payload.data),{...e,message:t,error:null,connecting:!1};case"error":return{...e,error:a.payload.error,connecting:!1};default:return e}};var E=(e="ws://localhost:4567",a=!0)=>{const[t,r]=Object(n.useReducer)(h,{message:[],error:null,connecting:!0,connected:!1});var c=new y.a.Client(e);Object(n.useEffect)(()=>{(async()=>(r({type:"connecting",payload:{}}),new Promise(async(t,n)=>{c.onConnect=e=>(r({type:"connected"}),t()),c.onDisconnect=()=>(r({type:"disconnected"}),t()),await c.connect(),c.onUpdate=e=>(r({type:"message",payload:{data:e}}),t()),a&&c.subscribe(e,e=>(r({type:"message",payload:{data:e}}),t()))})))()},[]);return{...t,client:c,dispatcher:e=>{r({type:"message",payload:{data:e}})}}};const b={mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrer:"no-referrer"};var v=(e="",a={method:"POST"})=>{const{data:t,error:n,loading:r,makeRequest:c}=l(e,{data:[],error:null,loading:!1}),o={...b,...a};return{data:t,error:n,loading:r,postData:async e=>{await c({method:"POST",...o,body:JSON.stringify(e)})}}};var w=e=>{Object(n.useEffect)(()=>{document.title=e},[e])};t.d(a,"a",function(){return c}),t.d(a,"b",function(){return o}),t.d(a,"c",function(){return d}),t.d(a,"d",function(){return g}),t.d(a,"e",function(){return p}),t.d(a,"f",function(){return E}),t.d(a,"g",function(){return v}),t.d(a,"h",function(){return w})},30:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(22);a.default=()=>{Object(c.h)("usePost example from @brightleaf/react-hooks");const{data:e,error:a,loading:t,postData:n}=Object(c.g)("https://kev-pi.herokuapp.com/api/echo");return t?r.a.createElement("div",{className:"App content"},r.a.createElement("h2",null,"Loading"),r.a.createElement("span",{className:"loader loader-xl"})):a?r.a.createElement("div",{className:"App content"},r.a.createElement("h2",null,"Error Posting Data")):r.a.createElement("div",{className:"App content"},r.a.createElement("h3",null,"Result"),r.a.createElement("pre",null,JSON.stringify(e,null,2)),r.a.createElement("div",{className:"container"},r.a.createElement("h2",null,"Post"),r.a.createElement("div",{className:"wrap"},r.a.createElement("div",{className:"button",onClick:e=>{console.log("click"),n({id:1,message:"The message from 1"})}},"1")),r.a.createElement("div",{className:"wrap"},r.a.createElement("div",{className:"button",onClick:e=>{console.log("click"),n({id:2,message:"The message from 2"})}},"2")),r.a.createElement("div",{className:"wrap"},r.a.createElement("div",{className:"button",onClick:e=>{console.log("click"),n({id:3,message:"The message from 3"})}},"3")),r.a.createElement("div",{className:"wrap"},r.a.createElement("div",{className:"button",onClick:e=>{console.log("click"),n({id:4,message:"The message from 4"})}},"4")),r.a.createElement("div",{className:"wrap"},r.a.createElement("div",{className:"button",onClick:e=>{console.log("click"),n({id:5,message:"The message from 5"})}},"5")),r.a.createElement("div",{className:"wrap"},r.a.createElement("div",{className:"button",onClick:e=>{console.log("click"),n({id:6,message:"The message from 6"})}},"6"))))}}}]);