(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{109:function(e,t,n){var c={"./campfire.mp3":[112,4],"./jazz.mp3":[113,5],"./ocean.mp3":[114,6],"./piano.mp3":[115,7],"./rain.mp3":[116,8]};function a(e){if(!n.o(c,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=c[e],a=t[0];return n.e(t[1]).then((function(){return n(a)}))}a.keys=function(){return Object.keys(c)},a.id=109,e.exports=a},110:function(e,t,n){var c={"./campfire.jpg":42,"./jazz.jpg":46,"./ocean.jpg":43,"./piano.jpg":45,"./rain.jpg":44};function a(e){return Promise.resolve().then((function(){if(!n.o(c,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n(c[e])}))}a.keys=function(){return Object.keys(c)},a.id=110,e.exports=a},111:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(18),i=n.n(a),r=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,121)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),i(e),r(e)}))},s=(n.p,n.p,n.p,n(76),n(77),n(29)),o=n(8),l=n(120),u=n(119),j=n(38),d=n(2),b=function(){return Object(d.jsxs)(l.a,{expand:"lg",children:[Object(d.jsx)(l.a.Brand,{children:"\u74b0\u5883\u97f3"}),Object(d.jsx)(l.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(d.jsx)(l.a.Collapse,{id:"basic-navbar-nav",children:Object(d.jsxs)(u.a,{className:"ms-auto",children:[Object(d.jsx)(j.LinkContainer,{to:"/",className:"navbar-item",children:Object(d.jsx)(u.a.Link,{children:"\u9996\u9801"})}),Object(d.jsx)(j.LinkContainer,{to:"/play",className:"navbar-item",children:Object(d.jsx)(u.a.Link,{children:"\u64ad\u653e"})}),Object(d.jsx)(j.LinkContainer,{to:"/record",className:"navbar-item",children:Object(d.jsx)(u.a.Link,{children:"\u7d00\u9304"})})]})})]})},f=n(7),p=n(27),O=n(71),m=n(23),x=n(68),h=n(67),v=(n(89),function(e){var t=Object(c.useState)(30),n=Object(f.a)(t,2),a=n[0],i=n[1],r=Object(c.useState)(!1),o=Object(f.a)(r,2),l=o[0],u=o[1];return Object(d.jsxs)("div",{className:"play-button",children:[Object(d.jsx)(m.a,{variant:"outline-secondary",className:"style",onClick:function(){return u((function(e){return!e}))},children:Object(d.jsx)(x.a,{})}),Object(d.jsx)(h.a,{open:l,closeOnDocumentClick:!0,onClose:function(){return u(!1)},children:Object(d.jsxs)("div",{className:"popup-info",children:[Object(d.jsx)("h3",{children:"\u8acb\u9078\u64c7\u6642\u9593"}),Object(d.jsx)("hr",{className:"hr-line"}),Object(d.jsxs)(O.a.Select,{className:"time-select","aria-label":"Default select example",value:a,onChange:function(e){return i(e.target.value)},children:[Object(d.jsx)("option",{value:"5",children:"5\u5206\u9418"}),Object(d.jsx)("option",{value:"10",children:"10\u5206\u9418"}),Object(d.jsx)("option",{value:"20",children:"20\u5206\u9418"}),Object(d.jsx)("option",{value:"30",children:"30\u5206\u9418"}),Object(d.jsx)("option",{value:"40",children:"40\u5206\u9418"}),Object(d.jsx)("option",{value:"50",children:"50\u5206\u9418"}),Object(d.jsx)("option",{value:"60",children:"60\u5206\u9418"})]}),Object(d.jsx)(s.Link,{to:{pathname:"/play",state:{title:e.title,enTag:e.enTag,time:a}},children:Object(d.jsx)(m.a,{variant:"outline-primary",className:"absolute-position start-button",size:"sm",children:"\u64ad\u653e"})})]})})]})}),g=function(e){return Object(d.jsxs)("div",{className:"d-block w-100 h-100 container",children:[Object(d.jsx)("img",{src:e.image,alt:"First slide",className:"w-100 h-100 round-corner"}),Object(d.jsx)("div",{className:"info-background info-color round-corner absolute-position"}),Object(d.jsxs)("div",{className:"info-content absolute-position",children:[Object(d.jsx)("h2",{children:e.title}),Object(d.jsx)(v,{title:e.title,enTag:e.enTag}),Object(d.jsx)("div",{className:"play-text",children:"press the button"})]})]})},N=n(42),y=n(43),k=n(44),w=n(45),L=n(46),S=function(){var e=Object(c.useState)(0),t=Object(f.a)(e,2),n=t[0],a=t[1];return Object(d.jsxs)(p.a,{activeIndex:n,onSelect:function(e,t){a(e)},interval:null,children:[Object(d.jsx)(p.a.Item,{className:"h-100",children:Object(d.jsx)(g,{image:N.default,title:"\u71df\u706b",enTag:"campfire"})}),Object(d.jsx)(p.a.Item,{className:"h-100",children:Object(d.jsx)(g,{image:k.default,title:"\u96e8\u6ef4",enTag:"rain"})}),Object(d.jsx)(p.a.Item,{className:"h-100",children:Object(d.jsx)(g,{image:y.default,title:"\u6d77\u6d6a",enTag:"ocean"})}),Object(d.jsx)(p.a.Item,{className:"h-100",children:Object(d.jsx)(g,{image:w.default,title:"\u92fc\u7434",enTag:"piano"})}),Object(d.jsx)(p.a.Item,{className:"h-100",children:Object(d.jsx)(g,{image:L.default,title:"Jazz",enTag:"jazz"})})]})},T=function(e){var t={position:e.positionFixed?"absolute":"relative"};return Object(d.jsx)("footer",{style:t,children:"Copyright \xa9 2021 Allen Lin. All rights reserved."})},C=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(b,{}),Object(d.jsx)(S,{}),Object(d.jsx)(T,{positionFixed:!0})]})},E=n(15),z=n.n(E),D=n(25),F=n(69),I=n.n(F).a.create({baseURL:"http://localhost:5000",headers:{"Content-type":"application/json"}}),P=function(e,t){var a=document.getElementById("audio"),i=Object(c.useState)(!1),r=Object(f.a)(i,2),s=r[0],o=r[1],l=Object(c.useState)(null),u=Object(f.a)(l,2),j=u[0],d=u[1];function b(){return(b=Object(D.a)(z.a.mark((function e(){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.play();case 3:a.classList.add("playing"),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),a.classList.remove("playing");case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}return Object(c.useEffect)((function(){function c(){return(c=Object(D.a)(z.a.mark((function t(){var c;return z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n(109)("./".concat(e,".mp3"));case 2:c=t.sent,d(new Audio(c.default));case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}if(null!==j)return j.addEventListener("ended",(function(){return o(!1)})),t<=0&&o(!1),function(){return j.removeEventListener("ended",(function(){return o(!1)}))};!function(){c.apply(this,arguments)}()}),[j,s,e,t]),[s,function(){s?(j.pause(),a.classList.remove("playing")):function(){b.apply(this,arguments)}(),o((function(e){return!e}))}]},U=function(e){var t=60*Number(e.time),n=Object(c.useState)(t),a=Object(f.a)(n,2),i=a[0],r=a[1],s=P(e.enTag,i),o=Object(f.a)(s,2),l=o[0],u=o[1],j=function(e,t){var n=Object(c.useState)("paused"),a=Object(f.a)(n,2),i=a[0],r=a[1],s=Object(c.useState)("paused"),o=Object(f.a)(s,2),l=o[0],u=o[1],j={animation:String(t/2)+"s left linear both",animationPlayState:i},d={animation:String(t/2)+"s right linear both",animationPlayState:l};return Object(c.useEffect)((function(){e===t/2&&u("running")}),[e,t]),[j,d,function(){e>=t/2?r((function(e){return"paused"===e?"running":"paused"})):u((function(e){return"paused"===e?"running":"paused"}))}]}(i,t),b=Object(f.a)(j,3),p=b[0],O=b[1],x=b[2],h=function(){var t=Object(D.a)(z.a.mark((function t(){return z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,I.post("/create",{title:e.enTag,time:e.time});case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),console.log(t.t0);case 8:case"end":return t.stop()}}),t,null,[[0,5]])})));return function(){return t.apply(this,arguments)}}(),v=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;console.log("in"),x(),u(),e.enableExitPrompt(t)};return Object(c.useEffect)((function(){if(l){if(i<=0)return v(),void h();var e=setInterval((function(){r((function(e){return e-1}))}),1e3);return function(){return clearInterval(e)}}}),[l,i]),Object(d.jsxs)("div",{className:"circular",children:[Object(d.jsx)("div",{className:"inner"}),Object(d.jsx)("div",{className:"remaining-time",children:"".concat(("0"+Math.floor(i/60)).slice(-2),":").concat(("0"+i%60).slice(-2))}),Object(d.jsxs)("div",{className:"progress-bar-info-button",children:[Object(d.jsx)("div",{className:"selected-title",children:e.title}),Object(d.jsx)(m.a,{onClick:v,variant:"outline-light",size:"sm",id:"audio",children:l?"\u66ab\u505c":"\u64ad\u653e"})]}),Object(d.jsxs)("div",{className:"circle",children:[Object(d.jsx)("div",{className:"bar left",children:Object(d.jsx)("div",{style:p,className:"progress-bar"})}),Object(d.jsx)("div",{className:"bar right",children:Object(d.jsx)("div",{style:O,className:"progress-bar"})})]})]})},B=function(e){window.onbeforeunload=function(t){if(e){var n=t||window.event;return n.preventDefault(),n&&(n.returnValue=""),""}}},_=function(e){var t=Object(c.useState)(e),n=Object(f.a)(t,2),a=n[0],i=n[1];return window.onload=function(){B(a)},Object(c.useEffect)((function(){B(a)}),[a]),[a,i]},A=function(e){var t=e.location.state||{},n=t.title,a=void 0===n?"\u71df\u706b":n,i=t.enTag,r=void 0===i?"campfire":i,s=t.time,o=void 0===s?1:s,l=_(!1),u=Object(f.a)(l,2),j=u[0],p=u[1];return Object(c.useEffect)((function(){return function(){return p(!1)}}),[]),Object(d.jsxs)("div",{children:[Object(d.jsx)(b,{}),Object(d.jsx)(U,{title:a,enTag:r,time:o,enableExitPrompt:function(e){j||(e.preventDefault(),p(!j))}}),Object(d.jsx)(T,{positionFixed:!0})]})},J=n(70),M=function(e){return Object(d.jsxs)("div",{className:"record-container",children:[Object(d.jsx)("img",{src:e.image,alt:"Record"}),Object(d.jsx)("div",{className:"time-text",children:String(e.time)+"\u5206\u9418"}),Object(d.jsx)(m.a,{onClick:function(){var t=e.id;e.onDelete(t)},className:"delete-btn",variant:"outline-light",children:Object(d.jsx)(J.a,{})})]})},R=function(){var e=function(){var e=Object(c.useState)([]),t=Object(f.a)(e,2),a=t[0],i=t[1],r=function(){var e=Object(D.a)(z.a.mark((function e(){var t,c,a,r,s;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.get("/record");case 3:t=e.sent,c=t.data,a=0;case 6:if(!(a<c.length)){e.next=15;break}return r=c[a].title,e.next=10,n(110)("./".concat(r,".jpg"));case 10:s=e.sent,c[a].image=s.default;case 12:a++,e.next=6;break;case 15:i(c),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(0),alert("Get records with error: "+e.t0);case 21:case"end":return e.stop()}}),e,null,[[0,18]])})));return function(){return e.apply(this,arguments)}}();return[a,i,r]}(),t=Object(f.a)(e,3),a=t[0],i=t[1],r=t[2],s=!(a.length>6),o=function(){var e=Object(D.a)(z.a.mark((function e(t){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(a.filter((function(e){return e.id!==t}))),e.prev=1,e.next=4,I.delete("/record/".concat(t));case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){r()}),[]),Object(d.jsxs)("div",{children:[Object(d.jsx)(b,{}),Object(d.jsx)("div",{className:"wrapper",children:a.reverse().map((function(e){return Object(d.jsx)(M,{id:e.id,image:e.image,time:e.time,onDelete:o},e.id)}))}),Object(d.jsx)(T,{positionFixed:s})]})},G=function(){return Object(d.jsx)(s.HashRouter,{children:Object(d.jsxs)(o.g,{children:[Object(d.jsx)(o.d,{exact:!0,path:["/","/home"],component:C}),Object(d.jsx)(o.d,{exact:!0,path:"/play",component:A}),Object(d.jsx)(o.d,{exact:!0,path:"/record",component:R})]})})};i.a.render(Object(d.jsx)(G,{}),document.getElementById("root")),r()},42:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/campfire.d742e1d8.jpg"},43:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/ocean.a7be33c9.jpg"},44:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/rain.18db4772.jpg"},45:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/piano.281296a4.jpg"},46:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/jazz.753d1216.jpg"},77:function(e,t,n){}},[[111,1,2]]]);
//# sourceMappingURL=main.88085033.chunk.js.map