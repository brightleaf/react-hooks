(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{30:function(e,t,a){"use strict";a.r(t);var c=a(0),l=a.n(c),n=a(22);t.default=()=>{Object(n.o)("useGet example from @brightleaf/react-hooks");const[e,t]=Object(n.c)("brightleaf.ico"),[a,r]=Object(c.useState)(1),{data:o,error:s,loading:p,getUrl:m}=Object(n.e)(`https://swapiql.herokuapp.com/api/characters/${a}`);return console.info({data:o,error:s,loading:p,getUrl:m}),s?l.a.createElement("div",{className:"App"},l.a.createElement("h2",null,"Error Getting Data")):p?l.a.createElement("div",{className:"App"},l.a.createElement("h2",null,"Loading"),l.a.createElement("span",{className:"loader loader-xl"})):(0===o.length&&o.push({name:"Select Character"}),l.a.createElement("div",{className:"App content"},l.a.createElement("h2",null,o[0].name),l.a.createElement("h3",null,"Pick a number"),l.a.createElement("div",{className:"field is-grouped"},l.a.createElement("p",{className:"control"},l.a.createElement("button",{type:"button",className:"button",onClick:e=>{t("brightleaf-1.png"),m("https://swapiql.herokuapp.com/api/characters/1")}},"1")),l.a.createElement("p",{className:"control"},l.a.createElement("button",{type:"button",className:"button",onClick:e=>{m("https://swapiql.herokuapp.com/api/characters/2")}},"2")),l.a.createElement("p",{className:"control"},l.a.createElement("button",{type:"button",className:"button",onClick:e=>{m("https://swapiql.herokuapp.com/api/characters/3")}},"3")),l.a.createElement("p",{className:"control"},l.a.createElement("button",{type:"button",className:"button",onClick:e=>{m("https://swapiql.herokuapp.com/api/characters/4")}},"4")),l.a.createElement("p",{className:"control"},l.a.createElement("button",{type:"button",className:"button",onClick:e=>{m("https://swapiql.herokuapp.com/api/characters/5")}},"5")),l.a.createElement("p",{className:"control"},l.a.createElement("button",{type:"button",className:"button",onClick:e=>{m("https://swapiql.herokuapp.com/api/characters/6")}},"6")))))}}}]);