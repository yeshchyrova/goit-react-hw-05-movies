"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[33],{77:function(n,e,t){t.d(e,{Dx:function(){return h},aV:function(){return l},ck:function(){return p},up:function(){return d}});var r,i,o,a,c=t(168),s=t(87),u=t(444),h=u.ZP.h1(r||(r=(0,c.Z)(["\n  font-size: 20px;\n  color: #b20000;\n  margin-left: 30px;\n  margin-bottom: 15px;\n"]))),l=u.ZP.ul(i||(i=(0,c.Z)(["\n  margin-left: 30px;\n"]))),p=u.ZP.li(o||(o=(0,c.Z)(["\n  &:not(:last-of-type) {\n    margin-bottom: 7px;\n  }\n"]))),d=(0,u.ZP)(s.rU)(a||(a=(0,c.Z)(["\n  color: #2a2a2a;\n  font-weight: 500;\n\n  &:hover {\n    color: #ff553d;\n  }\n"])))},33:function(n,e,t){t.r(e),t.d(e,{default:function(){return Z}});var r,i,o,a,c,s=t(439),u=t(791),h=t(689),l=t(273),p=t(168),d=t(444),I=d.ZP.button(r||(r=(0,p.Z)(["\n  height: 28px;\n  margin-left: 2px;\n  border-radius: 5px;\n  padding: 0 12px;\n  border: none;\n  background-color: #ff553d;\n  color: white;\n  transition: all 150ms ease-in;\n\n  &:hover {\n    cursor: pointer;\n    background-color: #b20000;\n  }\n"]))),M=d.ZP.h2(i||(i=(0,p.Z)(["\n  color: #b20000;\n  margin-bottom: 10px;\n  max-width: 650px;\n"]))),f=d.ZP.section(o||(o=(0,p.Z)(["\n  display: flex;\n  gap: 20px;\n  padding: 10px 0;\n  border-bottom: 1px solid #bdbdbd;\n"]))),x=d.ZP.p(a||(a=(0,p.Z)(["\n  max-width: 650px;\n  &:nth-of-type(even) {\n    font-weight: 500;\n  }\n  margin-bottom: 10px;\n"]))),g=d.ZP.section(c||(c=(0,p.Z)(["\n  padding: 8px 0 8px 3px;\n  border-bottom: 1px solid #bdbdbd;\n"]))),m=t(77),v=t(184),Z=function(){var n,e,t=(0,h.UO)().movieId,r=(0,h.TH)(),i=(0,u.useRef)(null!==(n=null===(e=r.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/"),o=(0,h.s0)(),a=(0,u.useState)({}),c=(0,s.Z)(a,2),p=c[0],d=c[1];(0,u.useEffect)((function(){(0,l.TP)(t).then(d).catch(console.log)}),[t]);var Z=p.title,b=p.poster_path,y=p.release_date,J=p.vote_average,j=p.overview,z=p.genres;return(0,v.jsxs)("main",{children:[(0,v.jsx)(I,{type:"button",onClick:function(){o(i.current)},children:"Go back"}),Z&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(f,{children:[(0,v.jsx)("img",{src:"https://image.tmdb.org/t/p/w200".concat(b),alt:Z}),(0,v.jsxs)("div",{children:[(0,v.jsxs)(M,{children:[Z," (",y.slice(0,4),")"]}),(0,v.jsxs)(x,{children:["User Score: ",(100*J/10).toFixed(2),"%"]}),(0,v.jsx)(x,{children:"Overview"}),(0,v.jsx)(x,{children:j}),(0,v.jsx)(x,{children:"Genres"}),(0,v.jsx)(x,{children:z.map((function(n){return n.name})).join(", ")})]})]}),(0,v.jsxs)(g,{children:[(0,v.jsx)(x,{children:"Additional information"}),(0,v.jsxs)("ul",{children:[(0,v.jsx)(m.ck,{children:(0,v.jsx)(m.up,{to:"cast",children:"Cast"})}),(0,v.jsx)(m.ck,{children:(0,v.jsx)(m.up,{to:"reviews",children:"Reviews"})})]})]}),(0,v.jsx)("section",{children:(0,v.jsx)(u.Suspense,{fallback:(0,v.jsx)("div",{children:"Loading subpage..."}),children:(0,v.jsx)(h.j3,{})})})]})]})}},273:function(n,e,t){t.d(e,{Df:function(){return c},Jh:function(){return l},M1:function(){return h},TP:function(){return s},on:function(){return u}});var r=t(861),i=t(757),o=t.n(i),a=t(243),c=function(){var n=(0,r.Z)(o().mark((function n(){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,a.Z.get("https://api.themoviedb.org/3/trending/movie/day",{headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMDlhZWMzZTAxMTQzYTcwM2I0ODM4MjVhODMzMzY2ZiIsInN1YiI6IjY0N2YxMTg3MGUyOWEyMmJlMDhlOTk4YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FrnBh2tYMap5WoIYIMa-C8qNNuc5WsMKgDAIEwEVz6g"}});case 3:return e=n.sent,n.abrupt("return",e.data.results);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,a.Z.get("https://api.themoviedb.org/3/movie/".concat(e),{headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMDlhZWMzZTAxMTQzYTcwM2I0ODM4MjVhODMzMzY2ZiIsInN1YiI6IjY0N2YxMTg3MGUyOWEyMmJlMDhlOTk4YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FrnBh2tYMap5WoIYIMa-C8qNNuc5WsMKgDAIEwEVz6g"}});case 3:return t=n.sent,n.abrupt("return",t.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("https://api.themoviedb.org/3/search/movie?query=".concat(e),{headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMDlhZWMzZTAxMTQzYTcwM2I0ODM4MjVhODMzMzY2ZiIsInN1YiI6IjY0N2YxMTg3MGUyOWEyMmJlMDhlOTk4YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FrnBh2tYMap5WoIYIMa-C8qNNuc5WsMKgDAIEwEVz6g"}});case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,a.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/credits"),{headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMDlhZWMzZTAxMTQzYTcwM2I0ODM4MjVhODMzMzY2ZiIsInN1YiI6IjY0N2YxMTg3MGUyOWEyMmJlMDhlOTk4YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FrnBh2tYMap5WoIYIMa-C8qNNuc5WsMKgDAIEwEVz6g"}});case 3:return t=n.sent,n.abrupt("return",t.data.cast);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,a.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/reviews"),{headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMDlhZWMzZTAxMTQzYTcwM2I0ODM4MjVhODMzMzY2ZiIsInN1YiI6IjY0N2YxMTg3MGUyOWEyMmJlMDhlOTk4YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FrnBh2tYMap5WoIYIMa-C8qNNuc5WsMKgDAIEwEVz6g"}});case 3:return t=n.sent,n.abrupt("return",t.data.results);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=33.df770c94.chunk.js.map