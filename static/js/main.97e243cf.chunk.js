(this["webpackJsonpmovie-streaming"]=this["webpackJsonpmovie-streaming"]||[]).push([[0],{36:function(t,e,n){},37:function(t,e,n){},38:function(t,e,n){},66:function(t,e,n){},67:function(t,e,n){},73:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),i=n(15),o=n.n(i),s=(n(36),n(13)),r=(n.p,n(37),n(19)),j=n(3),l=(n(38),n(12)),d=n.n(l),h=n(2);function u(t){var e=t.data,n=(t.setData,Object(j.e)()),c=function(t,e){if(t.length>e){var n=t.substr(e,t.length);return t.replace(n,"...")}return t};return Object(h.jsx)("div",{children:Object(h.jsx)("main",{children:0!=e.length?e.map((function(t){return Object(h.jsxs)("div",{id:"movies",onClick:function(){localStorage.setItem("url",t.url),n.push("/info")},children:[Object(h.jsx)("img",{src:t.img,alt:""}),Object(h.jsx)("span",{children:Object(h.jsx)("h4",{children:c(t.title,15)})})]})})):Object(h.jsx)("h1",{children:"Loading..."})})})}n(66);function b(){var t=a.a.useState([]),e=Object(s.a)(t,2),n=e[0],c=e[1],i=a.a.useState(""),o=Object(s.a)(i,2),r=o[0],j=o[1],l=a.a.useState(),u=Object(s.a)(l,2),b=u[0],p=u[1];return console.log(b),a.a.useEffect((function(){d.a.post("https://movie-code.herokuapp.com/info",{url:"https://moviestars.to"+localStorage.getItem("url")}).then((function(t){console.log(t.data),c(t.data),p(t.data[0].id)}))}),[]),void 0!=b&&d()("https://movie-code.herokuapp.com/watch?id="+b).then((function(t){j(t.data)})),Object(h.jsx)(h.Fragment,{children:0!=n.length?Object(h.jsxs)("div",{children:[Object(h.jsx)("iframe",{src:r,frameborder:"0",style:{overflow:"auto"},allowFullScreen:!0,height:"500px",width:"100%"}),Object(h.jsxs)("div",{id:"info",children:[Object(h.jsx)("img",{src:n[0].poster,alt:""}),Object(h.jsx)("h1",{children:n[0].title}),Object(h.jsx)("h3",{children:n[0].summary}),Object(h.jsx)("div",{children:null!=n[0].desc&&n[0].desc.map((function(t){return Object(h.jsx)("p",{children:t})}))})]})]}):Object(h.jsx)("h1",{children:"Loading..."})})}n(67);var p=n(30),O=n.n(p);function f(t){t.data;var e=t.setData,n=Object(j.e)();return Object(h.jsxs)("nav",{children:[Object(h.jsx)("p",{id:"title",onClick:function(){e([]),d()("https://movie-code.herokuapp.com/").then((function(t){console.log(t.data),e(t.data)})),n.push("/")},children:"Beamflix"}),Object(h.jsxs)("div",{id:"search",children:[Object(h.jsx)("input",{onKeyPress:function(t){var c;"Enter"===t.key&&(c=t.target.value,e([]),d()("https://movie-code.herokuapp.com/search?q="+c).then((function(t){e(t.data),n.push("/")})))},type:"text"}),Object(h.jsx)("button",{children:Object(h.jsx)(O.a,{})})]})]})}var x=function(){var t=Object(c.useState)([]),e=Object(s.a)(t,2),n=e[0],a=e[1];return console.log(n),Object(c.useEffect)((function(){a([]),d()("https://movie-code.herokuapp.com/").then((function(t){console.log(t.data),a(t.data)}))}),[]),Object(h.jsx)("div",{className:"App",children:Object(h.jsxs)(r.a,{children:[Object(h.jsx)(f,{data:n,setData:a}),Object(h.jsx)(j.a,{exact:!0,path:"/",children:Object(h.jsx)(u,{data:n,setData:a})}),Object(h.jsx)(j.a,{path:"/info",children:Object(h.jsx)(b,{})})]})})},m=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,85)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,i=e.getLCP,o=e.getTTFB;n(t),c(t),a(t),i(t),o(t)}))};o.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(x,{})}),document.getElementById("root")),m()}},[[73,1,2]]]);
//# sourceMappingURL=main.97e243cf.chunk.js.map