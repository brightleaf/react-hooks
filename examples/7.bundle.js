(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{25:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(20);a.default=()=>{Object(r.q)("useGraphQL example from @brightleaf/react-hooks");const{data:e,loading:a,error:t,makeQuery:n}=Object(r.p)("https://swapiql.herokuapp.com/graphql","query Person($id: ID) {\n      person(id: $id) {\n        id,\n        name,\n        height,\n        hairColor,\n        mass,\n        eyeColor,\n        skinColor,\n        birthYear,\n        gender,\n        homeworld {\n          name\n        }\n      }\n    }",{id:1});return 0!==e.length||a||n({id:1}),a?l.a.createElement("div",{className:"App"},l.a.createElement("h2",null,"Loading"),l.a.createElement("span",{className:"loader loader-xl"})):t?l.a.createElement("div",null,"Error getting graphql data"):e.person?l.a.createElement("div",{className:"App content"},l.a.createElement("h2",null,e.person[0].name),l.a.createElement("h3",null,"Pick a number"),l.a.createElement("div",{className:"field is-grouped"},l.a.createElement("p",{className:"control"},l.a.createElement("button",{className:"button mar-r-sm",onClick:e=>{n({id:1})}},"1")),l.a.createElement("p",{className:"control"},l.a.createElement("button",{type:"button",className:"button mar-r-sm",onClick:e=>{n({id:2})}},"2")," "),l.a.createElement("p",{className:"control"},l.a.createElement("button",{type:"button",className:"button mar-r-sm",onClick:e=>{n({id:3})}},"3")," "),l.a.createElement("p",{className:"control"},l.a.createElement("button",{type:"button",className:"button mar-r-sm",onClick:e=>{console.log("click"),n({id:4})}},"4")," "),l.a.createElement("p",{className:"control"},l.a.createElement("button",{type:"button",className:"button mar-r-sm",onClick:e=>{n({id:5})}},"5")," "),l.a.createElement("p",{className:"control"},l.a.createElement("button",{type:"button",className:"button mar-r-sm",onClick:e=>{n({id:6})}},"6")))):l.a.createElement("div",{className:"App"},l.a.createElement("h2",null,"Loading It"),l.a.createElement("span",{className:"loader loader-xl"}))}}}]);