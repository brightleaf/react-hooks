(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{31:function(e,a,l){"use strict";l.r(a);var t=l(0),s=l.n(t),c=l(22);a.default=()=>{Object(c.n)("usePost example from @brightleaf/react-hooks");const{data:e,error:a,loading:l,postData:t}=Object(c.l)("https://kev-pi.herokuapp.com/api/echo");return l?s.a.createElement("div",{className:"App content"},s.a.createElement("h2",null,"Loading"),s.a.createElement("span",{className:"loader loader-xl"})):a?s.a.createElement("div",{className:"App content"},s.a.createElement("h2",null,"Error Posting Data")):s.a.createElement("div",{className:"App content"},s.a.createElement("h3",null,"Result"),s.a.createElement("pre",null,JSON.stringify(e,null,2)),s.a.createElement("div",{className:"container"},s.a.createElement("h2",null,"Post"),s.a.createElement("div",{className:"wrap"},s.a.createElement("div",{className:"button",onClick:e=>{console.log("click"),t({id:1,message:"The message from 1"})}},"1")),s.a.createElement("div",{className:"wrap"},s.a.createElement("div",{className:"button",onClick:e=>{console.log("click"),t({id:2,message:"The message from 2"})}},"2")),s.a.createElement("div",{className:"wrap"},s.a.createElement("div",{className:"button",onClick:e=>{console.log("click"),t({id:3,message:"The message from 3"})}},"3")),s.a.createElement("div",{className:"wrap"},s.a.createElement("div",{className:"button",onClick:e=>{console.log("click"),t({id:4,message:"The message from 4"})}},"4")),s.a.createElement("div",{className:"wrap"},s.a.createElement("div",{className:"button",onClick:e=>{console.log("click"),t({id:5,message:"The message from 5"})}},"5")),s.a.createElement("div",{className:"wrap"},s.a.createElement("div",{className:"button",onClick:e=>{console.log("click"),t({id:6,message:"The message from 6"})}},"6"))))}}}]);