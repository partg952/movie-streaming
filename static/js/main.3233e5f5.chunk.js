(this["webpackJsonpmovie-streaming"]=this["webpackJsonpmovie-streaming"]||[]).push([[0],{36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},73:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),a=n(15),s=n.n(a),o=(n(36),n(13)),r=(n.p,n(37),n(19)),j=n(3),l=(n(38),n(12)),h=n.n(l),u=n(2);function d(e){var t=e.data,n=(e.setData,Object(j.e)()),c=function(e,t){if(e.length>t){var n=e.substr(t,e.length);return e.replace(n,"...")}return e};return Object(u.jsx)("div",{children:Object(u.jsx)("main",{children:0!=t.length?t.map((function(e){return Object(u.jsxs)("div",{id:"movies",onClick:function(){localStorage.setItem("url",e.url),n.push("/info")},children:[Object(u.jsx)("img",{src:e.img,alt:""}),Object(u.jsx)("span",{children:Object(u.jsx)("h4",{children:c(e.title,15)})})]})})):Object(u.jsx)("h1",{children:"Loading..."})})})}n(66);function b(){var e=i.a.useState([]),t=Object(o.a)(e,2),n=t[0],c=t[1],a=i.a.useState(""),s=Object(o.a)(a,2),r=s[0],j=s[1],l=i.a.useState(),d=Object(o.a)(l,2),b=d[0],p=d[1];return console.log(b),i.a.useEffect((function(){h.a.post("https://single-api23.herokuapp.com/movie/info",{url:"https://moviestars.to"+localStorage.getItem("url")}).then((function(e){console.log(e.data),c(e.data),p(e.data[0].id)}))}),[]),void 0!=b&&h()("https://single-api23.herokuapp.com/movie/watch?id="+b+"&server=2").then((function(e){j(e.data)})),Object(u.jsx)(u.Fragment,{children:0!=n.length?Object(u.jsxs)("div",{children:[Object(u.jsx)("iframe",{src:r,frameborder:"0",style:{overflow:"auto"},allowFullScreen:!0,height:"500px",width:"100%"}),Object(u.jsxs)("div",{id:"info",children:[Object(u.jsx)("img",{src:n[0].poster,alt:""}),Object(u.jsx)("h1",{children:n[0].title}),Object(u.jsx)("h3",{children:n[0].summary}),Object(u.jsx)("div",{children:null!=n[0].desc&&n[0].desc.map((function(e){return Object(u.jsx)("p",{children:e})}))})]})]}):Object(u.jsx)("h1",{children:"Loading..."})})}n(67);var p=n(30),O=n.n(p);function f(e){e.data;var t=e.setData,n=Object(j.e)();return Object(u.jsxs)("nav",{children:[Object(u.jsx)("p",{id:"title",onClick:function(){t([]),h()("https://single-api23.herokuapp.com/movie/home").then((function(e){console.log(e.data),t(e.data)})),n.push("/")},children:"Beamflix"}),Object(u.jsxs)("div",{id:"search",children:[Object(u.jsx)("input",{onKeyPress:function(e){var c;"Enter"===e.key&&(c=e.target.value,t([]),h()("https://single-api23.herokuapp.com/movie/search?q="+c).then((function(e){t(e.data),n.push("/")})))},type:"text"}),Object(u.jsx)("button",{children:Object(u.jsx)(O.a,{})})]})]})}var x=function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),n=t[0],i=t[1];return console.log(n),Object(c.useEffect)((function(){i([]),h()("https://single-api23.herokuapp.com/movie/home").then((function(e){console.log(e.data),i(e.data)}))}),[]),Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)(r.a,{children:[Object(u.jsx)(f,{data:n,setData:i}),Object(u.jsx)(j.a,{exact:!0,path:"/",children:Object(u.jsx)(d,{data:n,setData:i})}),Object(u.jsx)(j.a,{path:"/info",children:Object(u.jsx)(b,{})})]})})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,85)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),i(e),a(e),s(e)}))};s.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(x,{})}),document.getElementById("root")),m()}},[[73,1,2]]]);
//# sourceMappingURL=main.3233e5f5.chunk.js.map