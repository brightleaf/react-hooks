(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{20:function(t,e,r){"use strict";var n=r(23),o=r(0);const i=(t,e)=>{switch(e.type){case"get":return{...t,loading:!0};case"success":return{...t,data:e.payload.data,error:null,loading:!1};case"error":return{...t,data:null,error:e.payload.error,loading:!1};default:return t}};e.a=function(t,e,r){const[s,a]=Object(o.useReducer)(i,{data:[],error:null,loading:!0}),u=Object.keys(r).map(t=>r[t]);return Object(o.useEffect)(()=>{(async r=>{a({type:"get"});const o=await Object(n.request)(t,e,r);a({type:"success",payload:{data:o}})})(r)},u),{...s}}},22:function(t,e,r){"use strict";var n,o=this&&this.__extends||(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])},function(t,e){function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)});Object.defineProperty(e,"__esModule",{value:!0});var i=function(t){function e(r,n){var o=this,i=e.extractMessage(r)+": "+JSON.stringify({response:r,request:n});return(o=t.call(this,i)||this).response=r,o.request=n,"function"==typeof Error.captureStackTrace&&Error.captureStackTrace(o,e),o}return o(e,t),e.extractMessage=function(t){try{return t.errors[0].message}catch(e){return"GraphQL Error (Code: "+t.status+")"}},e}(Error);e.ClientError=i},23:function(t,e,r){"use strict";var n=this&&this.__assign||Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},o=this&&this.__awaiter||function(t,e,r,n){return new(r||(r=Promise))(function(o,i){function s(t){try{u(n.next(t))}catch(t){i(t)}}function a(t){try{u(n.throw(t))}catch(t){i(t)}}function u(t){t.done?o(t.value):new r(function(e){e(t.value)}).then(s,a)}u((n=n.apply(t,e||[])).next())})},i=this&&this.__generator||function(t,e){var r,n,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;s;)try{if(r=1,n&&(o=n[2&i[0]?"return":i[0]?"throw":"next"])&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[0,o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,n=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(o=(o=s.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=e.call(t,s)}catch(t){i=[6,t],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}},s=this&&this.__rest||function(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(t);o<n.length;o++)e.indexOf(n[o])<0&&(r[n[o]]=t[n[o]])}return r};Object.defineProperty(e,"__esModule",{value:!0});var a=r(22),u=r(22);e.ClientError=u.ClientError,r(24);var h=function(){function t(t,e){this.url=t,this.options=e||{}}return t.prototype.rawRequest=function(t,e){return o(this,void 0,void 0,function(){var r,o,u,h,c,l,d,p,y;return i(this,function(i){switch(i.label){case 0:return r=this.options,o=r.headers,u=s(r,["headers"]),h=JSON.stringify({query:t,variables:e||void 0}),[4,fetch(this.url,n({method:"POST",headers:Object.assign({"Content-Type":"application/json"},o),body:h},u))];case 1:return[4,f(c=i.sent())];case 2:if(l=i.sent(),c.ok&&!l.errors&&l.data)return d=c.headers,p=c.status,[2,n({},l,{headers:d,status:p})];throw y="string"==typeof l?{error:l}:l,new a.ClientError(n({},y,{status:c.status,headers:c.headers}),{query:t,variables:e})}})})},t.prototype.request=function(t,e){return o(this,void 0,void 0,function(){var r,o,u,h,c,l,d;return i(this,function(i){switch(i.label){case 0:return r=this.options,o=r.headers,u=s(r,["headers"]),h=JSON.stringify({query:t,variables:e||void 0}),[4,fetch(this.url,n({method:"POST",headers:Object.assign({"Content-Type":"application/json"},o),body:h},u))];case 1:return[4,f(c=i.sent())];case 2:if(l=i.sent(),c.ok&&!l.errors&&l.data)return[2,l.data];throw d="string"==typeof l?{error:l}:l,new a.ClientError(n({},d,{status:c.status}),{query:t,variables:e})}})})},t.prototype.setHeaders=function(t){return this.options.headers=t,this},t.prototype.setHeader=function(t,e){var r,n=this.options.headers;return n?n[t]=e:this.options.headers=((r={})[t]=e,r),this},t}();function c(t,e,r){return o(this,void 0,void 0,function(){return i(this,function(n){return[2,new h(t).request(e,r)]})})}function f(t){return o(this,void 0,void 0,function(){var e;return i(this,function(r){return(e=t.headers.get("Content-Type"))&&e.startsWith("application/json")?[2,t.json()]:[2,t.text()]})})}e.GraphQLClient=h,e.rawRequest=function(t,e,r){return o(this,void 0,void 0,function(){return i(this,function(n){return[2,new h(t).rawRequest(e,r)]})})},e.request=c,e.default=c},24:function(t,e){!function(t){if(!t.fetch){var e={searchParams:"URLSearchParams"in t,iterable:"Symbol"in t&&"iterator"in Symbol,blob:"FileReader"in t&&"Blob"in t&&function(){try{return new Blob,!0}catch(t){return!1}}(),formData:"FormData"in t,arrayBuffer:"ArrayBuffer"in t};if(e.arrayBuffer)var r=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],n=function(t){return t&&DataView.prototype.isPrototypeOf(t)},o=ArrayBuffer.isView||function(t){return t&&r.indexOf(Object.prototype.toString.call(t))>-1};c.prototype.append=function(t,e){t=a(t),e=u(e);var r=this.map[t];this.map[t]=r?r+","+e:e},c.prototype.delete=function(t){delete this.map[a(t)]},c.prototype.get=function(t){return t=a(t),this.has(t)?this.map[t]:null},c.prototype.has=function(t){return this.map.hasOwnProperty(a(t))},c.prototype.set=function(t,e){this.map[a(t)]=u(e)},c.prototype.forEach=function(t,e){for(var r in this.map)this.map.hasOwnProperty(r)&&t.call(e,this.map[r],r,this)},c.prototype.keys=function(){var t=[];return this.forEach(function(e,r){t.push(r)}),h(t)},c.prototype.values=function(){var t=[];return this.forEach(function(e){t.push(e)}),h(t)},c.prototype.entries=function(){var t=[];return this.forEach(function(e,r){t.push([r,e])}),h(t)},e.iterable&&(c.prototype[Symbol.iterator]=c.prototype.entries);var i=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];b.prototype.clone=function(){return new b(this,{body:this._bodyInit})},y.call(b.prototype),y.call(m.prototype),m.prototype.clone=function(){return new m(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new c(this.headers),url:this.url})},m.error=function(){var t=new m(null,{status:0,statusText:""});return t.type="error",t};var s=[301,302,303,307,308];m.redirect=function(t,e){if(-1===s.indexOf(e))throw new RangeError("Invalid status code");return new m(null,{status:e,headers:{location:t}})},t.Headers=c,t.Request=b,t.Response=m,t.fetch=function(t,r){return new Promise(function(n,o){var i=new b(t,r),s=new XMLHttpRequest;s.onload=function(){var t,e,r={status:s.status,statusText:s.statusText,headers:(t=s.getAllResponseHeaders()||"",e=new c,t.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach(function(t){var r=t.split(":"),n=r.shift().trim();if(n){var o=r.join(":").trim();e.append(n,o)}}),e)};r.url="responseURL"in s?s.responseURL:r.headers.get("X-Request-URL");var o="response"in s?s.response:s.responseText;n(new m(o,r))},s.onerror=function(){o(new TypeError("Network request failed"))},s.ontimeout=function(){o(new TypeError("Network request failed"))},s.open(i.method,i.url,!0),"include"===i.credentials?s.withCredentials=!0:"omit"===i.credentials&&(s.withCredentials=!1),"responseType"in s&&e.blob&&(s.responseType="blob"),i.headers.forEach(function(t,e){s.setRequestHeader(e,t)}),s.send(void 0===i._bodyInit?null:i._bodyInit)})},t.fetch.polyfill=!0}function a(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function u(t){return"string"!=typeof t&&(t=String(t)),t}function h(t){var r={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return e.iterable&&(r[Symbol.iterator]=function(){return r}),r}function c(t){this.map={},t instanceof c?t.forEach(function(t,e){this.append(e,t)},this):Array.isArray(t)?t.forEach(function(t){this.append(t[0],t[1])},this):t&&Object.getOwnPropertyNames(t).forEach(function(e){this.append(e,t[e])},this)}function f(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function l(t){return new Promise(function(e,r){t.onload=function(){e(t.result)},t.onerror=function(){r(t.error)}})}function d(t){var e=new FileReader,r=l(e);return e.readAsArrayBuffer(t),r}function p(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function y(){return this.bodyUsed=!1,this._initBody=function(t){if(this._bodyInit=t,t)if("string"==typeof t)this._bodyText=t;else if(e.blob&&Blob.prototype.isPrototypeOf(t))this._bodyBlob=t;else if(e.formData&&FormData.prototype.isPrototypeOf(t))this._bodyFormData=t;else if(e.searchParams&&URLSearchParams.prototype.isPrototypeOf(t))this._bodyText=t.toString();else if(e.arrayBuffer&&e.blob&&n(t))this._bodyArrayBuffer=p(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer]);else{if(!e.arrayBuffer||!ArrayBuffer.prototype.isPrototypeOf(t)&&!o(t))throw new Error("unsupported BodyInit type");this._bodyArrayBuffer=p(t)}else this._bodyText="";this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):e.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},e.blob&&(this.blob=function(){var t=f(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?f(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(d)}),this.text=function(){var t,e,r,n=f(this);if(n)return n;if(this._bodyBlob)return t=this._bodyBlob,e=new FileReader,r=l(e),e.readAsText(t),r;if(this._bodyArrayBuffer)return Promise.resolve(function(t){for(var e=new Uint8Array(t),r=new Array(e.length),n=0;n<e.length;n++)r[n]=String.fromCharCode(e[n]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},e.formData&&(this.formData=function(){return this.text().then(w)}),this.json=function(){return this.text().then(JSON.parse)},this}function b(t,e){var r,n,o=(e=e||{}).body;if(t instanceof b){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new c(t.headers)),this.method=t.method,this.mode=t.mode,o||null==t._bodyInit||(o=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"omit",!e.headers&&this.headers||(this.headers=new c(e.headers)),this.method=(r=e.method||this.method||"GET",n=r.toUpperCase(),i.indexOf(n)>-1?n:r),this.mode=e.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&o)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(o)}function w(t){var e=new FormData;return t.trim().split("&").forEach(function(t){if(t){var r=t.split("="),n=r.shift().replace(/\+/g," "),o=r.join("=").replace(/\+/g," ");e.append(decodeURIComponent(n),decodeURIComponent(o))}}),e}function m(t,e){e||(e={}),this.type="default",this.status=void 0===e.status?200:e.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new c(e.headers),this.url=e.url||"",this._initBody(t)}}("undefined"!=typeof self?self:this)},28:function(t,e,r){"use strict";r.r(e);var n=r(0),o=r.n(n),i=r(20);e.default=(()=>{console.info("fetch",i.a);const{data:t,loading:e,error:r}=Object(i.a)("https://swapiql.herokuapp.com/graphql","{\n      person(id: 1) {\n        id,\n        name,\n        height,\n        hairColor,\n        mass,\n        eyeColor,\n        skinColor,\n        birthYear,\n        gender,\n        homeworld {\n          name\n        }\n      }\n    }",{});return e?o.a.createElement("div",null,"Loading"):r?o.a.createElement("div",null,"error"):o.a.createElement("main",null,o.a.createElement("h1",null,"SWAPI GraphQL"),o.a.createElement("div",null,t.person[0].name))})}}]);