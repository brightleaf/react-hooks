(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{19:function(e,t,a){"use strict";a.d(t,"a",function(){return n});const n=(e,t)=>{switch(t.type){case"get":return{...e,loading:!0};case"success":return{...e,data:t.payload.data,error:null,loading:!1};case"error":return{...e,data:null,error:t.payload.error,loading:!1};default:return e}}},20:function(e,t,a){"use strict";var n=a(23),r=a(0);const c=(e,t)=>{switch(t.type){case"get":return{...e,loading:!0};case"success":return{...e,data:t.payload.data,error:null,loading:!1};case"error":return{...e,data:null,error:t.payload.error,loading:!1};default:return e}};t.a=function(e,t,a){const[o,s]=Object(r.useReducer)(c,{data:[],error:null,loading:!0}),u=Object.keys(a).map(e=>a[e]);return Object(r.useEffect)(()=>{(async a=>{s({type:"get"});const r=await Object(n.request)(e,t,a);s({type:"success",payload:{data:r}})})(a)},u),{...o}}},21:function(e,t,a){"use strict";var n=a(0),r=a(19);t.a=((e="")=>{const[t,a]=Object(n.useReducer)(r.a,{data:[],error:null,loading:!1});return{...t,postData:async t=>{console.info("post data"),a({type:"get"});const n=await fetch(e,{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrer:"no-referrer",body:JSON.stringify(t)}),r=await n.json();a({type:"success",payload:{data:r}})}}})},25:function(e,t,a){"use strict";var n=a(0);var r=a(19);var c=(e,t)=>{const[a,c]=Object(n.useReducer)(r.a,{data:[],error:null,loading:!0});return Object(n.useEffect)(()=>{(async e=>{c({type:"get"});const a=await fetch(e,t),n=await a.json();c({type:"success",payload:{data:n}})})(e)},[e]),a};var o=e=>{const[t,a]=Object(n.useReducer)(r.a,{data:[],error:null,loading:!0}),c=async e=>{a({type:"get"});const t=await fetch(e),n=await t.json();a({type:"success",payload:{data:n}})};return Object(n.useEffect)(()=>{e&&c(e)},[e]),{...t,getUrl:c}},s=(a(20),a(26)),u=a.n(s);const l=(e,t,...a)=>{switch(t.type){case"connecting":return{...e,connecting:!0,connected:!1};case"connected":return{...e,connecting:!1,connected:!0};case"disconnected":return{...e,connecting:!1,connected:!1};case"message":const a=[].concat(e.message);return a.push(t.payload.data),{...e,message:a,error:null,connecting:!1};case"error":return{...e,error:t.payload.error,connecting:!1};default:return e}};var i=(e="ws://localhost:4567")=>{const[t,a]=Object(n.useReducer)(l,{message:[],error:null,connecting:!0,connected:!1});var r=new u.a.Client(e);return Object(n.useEffect)(()=>{(async()=>(a({type:"connecting",payload:{}}),new Promise(async(e,t)=>{r.onConnect=(t=>(a({type:"connected"}),e())),r.onDisconnect=(()=>(a({type:"disconnected"}),e())),await r.connect(),r.onUpdate=(t=>(a({type:"message",payload:{data:t}}),e()))})))()},[]),{...t}};a(21);a.d(t,"a",function(){return c}),a.d(t,"b",function(){return o}),a.d(t,"c",function(){return i})},30:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(25);t.default=(()=>{const[e,t]=Object(n.useState)(1),{data:a,error:o,loading:s,getUrl:u}=Object(c.b)(`https://swapiql.herokuapp.com/api/characters/${e}`);return o?r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Error Getting Data")):s?r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Loading Data")):r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,a[0].name),r.a.createElement("h2",null,"Pick a number"),r.a.createElement("div",{className:"select"},r.a.createElement("button",{type:"button",className:"button mar-r-sm",onClick:e=>{u("https://swapiql.herokuapp.com/api/characters/1")}},"1"),r.a.createElement("button",{type:"button",className:"button mar-r-sm",onClick:e=>{u("https://swapiql.herokuapp.com/api/characters/2")}},"2"),r.a.createElement("button",{type:"button",className:"button mar-r-sm",onClick:e=>{u("https://swapiql.herokuapp.com/api/characters/3")}},"3"),r.a.createElement("button",{type:"button",className:"button mar-r-sm",onClick:e=>{t(4)}},"4"),r.a.createElement("button",{type:"button",className:"button mar-r-sm",onClick:e=>{t(5)}},"5"),r.a.createElement("button",{type:"button",className:"button mar-r-sm",onClick:e=>{t(6)}},"6")))})}}]);