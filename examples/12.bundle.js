(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{32:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(22);a.default=()=>{Object(c.n)("useNes example from @brightleaf/react-hooks");const{message:e,error:a,connecting:t,connected:n,client:s}=Object(c.i)("wss://kev-pi.herokuapp.com");if(a)return r.a.createElement("div",{className:"App"},r.a.createElement("h2",null,"Error Getting Data"));const l=t?r.a.createElement("div",{className:"alert alert-warning"},"Connecting"):r.a.createElement("div",{className:"alert alert-info"},"Not Connecting"),m=n?r.a.createElement("div",{className:"alert alert-success"},"Connected"):r.a.createElement("div",{className:"alert alert-danger"},"Not Connected"),i=e.map((e,a)=>r.a.createElement("div",{className:`mar-0 pad-b-xs ${a%2?"text-secondary":"text-primary"}`,key:`key-${a}`},e));return r.a.createElement("div",{className:"App content"},r.a.createElement("h2",null,"Messages from Server"),r.a.createElement("div",null,i),r.a.createElement("div",{className:"pad-t-md mar-t-md"},r.a.createElement("div",{className:"button",onClick:async e=>{await s.connect(),await s.message("The message from the client")}},"Send a message from server")),r.a.createElement("br",null),r.a.createElement("div",null,l,m))}}}]);