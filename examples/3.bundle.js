(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{35:function(e,t,a){"use strict";a.r(t);var l=a(0),c=a.n(l),n=a(22);t.default=()=>{Object(n.o)("useLocalStorage example from @brightleaf/react-hooks");const[e,t]=Object(n.a)("count",1),[a,o]=Object(n.a)("obj",{title:"Test Title",description:"Some text"}),[s,r]=Object(n.a)("name","",{expires:7}),[m,i]=Object(l.useState)(s);return console.log(a),c.a.createElement("div",{className:"App content"},c.a.createElement("h2",null,e," - Count "),c.a.createElement("div",{className:"field is-grouped"},c.a.createElement("p",{className:"control"},c.a.createElement("button",{className:"button",onClick:a=>{t(e+1)}},"+ Add")," "),c.a.createElement("p",{className:"control"},c.a.createElement("button",{className:"button",onClick:a=>{t(e-1)}},"- Subtract"))),c.a.createElement("h2",null,s," - Name "),c.a.createElement("div",{className:"field has-addons"},c.a.createElement("p",{className:"control"},c.a.createElement("input",{className:"input",type:"text",placeholder:"Your name",onChange:e=>{i(e.target.value)}})),c.a.createElement("p",{className:"control"},c.a.createElement("a",{className:"button is-info",onClick:e=>{console.log("click"),r(m),e.preventDefault()}},"Update"))),c.a.createElement("hr",null),c.a.createElement("div",{className:"field is-grouped"},c.a.createElement("p",{className:"control"},c.a.createElement("button",{className:"button",onClick:e=>{console.log(a),o({title:"Object Title",description:"Some more text"})}},"Object"))))}}}]);