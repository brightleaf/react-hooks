(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{19:function(e,t,a){"use strict";a.d(t,"a",function(){return n});const n=(e,t)=>{switch(t.type){case"get":return{...e,loading:!0};case"success":return{...e,data:t.payload.data,error:null,loading:!1};case"error":return{...e,data:null,error:t.payload.error,loading:!1};default:return e}}},20:function(e,t,a){"use strict";var n=a(23),r=a(0);const c=(e,t)=>{switch(t.type){case"get":return{...e,loading:!0};case"success":return{...e,data:t.payload.data,error:null,loading:!1};case"error":return{...e,data:null,error:t.payload.error,loading:!1};default:return e}};t.a=function(e,t,a){const[s,o]=Object(r.useReducer)(c,{data:[],error:null,loading:!0}),l=Object.keys(a).map(e=>a[e]);return Object(r.useEffect)(()=>{(async a=>{o({type:"get"});const r=await Object(n.request)(e,t,a);o({type:"success",payload:{data:r}})})(a)},l),{...s}}},21:function(e,t,a){"use strict";var n=a(0),r=a(19);t.a=((e="")=>{const[t,a]=Object(n.useReducer)(r.a,{data:[],error:null,loading:!1});return{...t,postData:async t=>{console.info("post data"),a({type:"get"});const n=await fetch(e,{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrer:"no-referrer",body:JSON.stringify(t)}),r=await n.json();a({type:"success",payload:{data:r}})}}})},25:function(e,t,a){"use strict";var n=a(0);var r=a(19);var c=(e,t)=>{const[a,c]=Object(n.useReducer)(r.a,{data:[],error:null,loading:!0});return Object(n.useEffect)(()=>{(async e=>{c({type:"get"});const a=await fetch(e,t),n=await a.json();c({type:"success",payload:{data:n}})})(e)},[e]),a};var s=e=>{const[t,a]=Object(n.useReducer)(r.a,{data:[],error:null,loading:!0}),c=async e=>{a({type:"get"});const t=await fetch(e),n=await t.json();a({type:"success",payload:{data:n}})};return Object(n.useEffect)(()=>{e&&c(e)},[e]),{...t,getUrl:c}},o=(a(20),a(26)),l=a.n(o);const d=(e,t,...a)=>{switch(t.type){case"connecting":return{...e,connecting:!0,connected:!1};case"connected":return{...e,connecting:!1,connected:!0};case"disconnected":return{...e,connecting:!1,connected:!1};case"message":const a=[].concat(e.message);return a.push(t.payload.data),{...e,message:a,error:null,connecting:!1};case"error":return{...e,error:t.payload.error,connecting:!1};default:return e}};var u=(e="ws://localhost:4567")=>{const[t,a]=Object(n.useReducer)(d,{message:[],error:null,connecting:!0,connected:!1});var r=new l.a.Client(e);return Object(n.useEffect)(()=>{(async()=>(a({type:"connecting",payload:{}}),new Promise(async(e,t)=>{r.onConnect=(t=>(a({type:"connected"}),e())),r.onDisconnect=(()=>(a({type:"disconnected"}),e())),await r.connect(),r.onUpdate=(t=>(a({type:"message",payload:{data:t}}),e()))})))()},[]),{...t}};a(21);a.d(t,"a",function(){return c}),a.d(t,"b",function(){return s}),a.d(t,"c",function(){return u})},32:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(25);t.default=(()=>{const{getUrl:e}=Object(c.b)(),{message:t,error:a,connecting:n,connected:s}=Object(c.c)("ws://kev-pi.herokuapp.com");if(a)return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Error Getting Data"));const o=n?r.a.createElement("div",{className:"alert alert-warning"},"Connecting"):r.a.createElement("div",{className:"alert alert-info"},"Not Connecting"),l=s?r.a.createElement("div",{className:"alert alert-success"},"Connected"):r.a.createElement("div",{className:"alert alert-danger"},"Not Connected"),d=t.map((e,t)=>r.a.createElement("div",{className:`mar-0 pad-b-xs ${t%2?"text-secondary":"text-primary"}`,key:`key-${t}`},e));return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Messages from Server"),r.a.createElement("div",null,d),r.a.createElement("div",{className:"pad-t-md mar-t-md"},r.a.createElement("div",{className:"button",onClick:t=>{e("https://kev-pi.herokuapp.com/send")}},"Send a message from server")),r.a.createElement("br",null),r.a.createElement("div",null,o,l))})}}]);