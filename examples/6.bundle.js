(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{28:function(e,a,n){"use strict";n.r(a);var r=n(0),l=n.n(r),t=n(22);a.default=()=>{Object(t.n)("useGraphQL example from @brightleaf/react-hooks");const{data:e,loading:a,error:n,makeQuery:o}=Object(t.m)("https://swapiql.herokuapp.com/graphql","{\n      person(id: 1) {\n        id,\n        name,\n        height,\n        hairColor,\n        mass,\n        eyeColor,\n        skinColor,\n        birthYear,\n        gender,\n        homeworld {\n          name\n        }\n      }\n    }");return Object(r.useEffect)(()=>{o()},[]),a?l.a.createElement("div",{className:"App"},l.a.createElement("h2",null,"Loading"),l.a.createElement("span",{className:"loader loader-xl"})):n?l.a.createElement("div",null,"error"):e&&0===e.length?l.a.createElement("div",{className:"App"},l.a.createElement("h2",null,"Loading"),l.a.createElement("span",{className:"loader loader-xl"})):l.a.createElement("div",{className:"content"},l.a.createElement("h2",null,"SWAPI GraphQL"),l.a.createElement("div",null,e.person[0].name))}}}]);