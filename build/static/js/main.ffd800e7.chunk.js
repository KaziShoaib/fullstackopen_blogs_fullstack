(this["webpackJsonpbloglist-frontend"]=this["webpackJsonpbloglist-frontend"]||[]).push([[0],{59:function(e,t,n){e.exports=n(90)},88:function(e,t,n){},90:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(18),u=n.n(c),l=n(7),s=n(14),o=n(8),i=n(96),m=n(95),p=n(93),f=n(92),d=n(4),E=n.n(d),b=n(6),v=n(23),h=n(30),g=n(16),O=n.n(g),y=null,w={getAll:function(){var e=Object(b.a)(E.a.mark((function e(){var t;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("/api/blogs");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),setToken:function(e){y="bearer ".concat(e)},create:function(){var e=Object(b.a)(E.a.mark((function e(t){var n,a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:y}},e.next=3,O.a.post("/api/blogs",t,n);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),update:function(){var e=Object(b.a)(E.a.mark((function e(t,n){var a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.put("".concat("/api/blogs","/").concat(t),n);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),deleteBlog:function(){var e=Object(b.a)(E.a.mark((function e(t){var n,a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:y}},e.next=3,O.a.delete("".concat("/api/blogs","/").concat(t),n);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},j={successMessage:null,errorMessage:null},k=null,x=function(e,t,n){return function(){var a=Object(b.a)(E.a.mark((function a(r){return E.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:null!==k&&clearTimeout(k),r({type:"success"===e?"SET_SUCCESS_MESSAGE":"SET_ERROR_MESSAGE",message:t}),k=setTimeout((function(){r({type:"CLEAR_ALL"})}),n);case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_SUCCESS_MESSAGE":return Object(v.a)({},e,{successMessage:t.message});case"SET_ERROR_MESSAGE":return Object(v.a)({},e,{errorMessage:t.message});case"CLEAR_ALL":return j;default:return e}},L=function(e,t){return function(){var n=Object(b.a)(E.a.mark((function n(a){var r,c;return E.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,w.create(e);case 3:r=n.sent,c=Object(v.a)({},r,{user:{username:t.username,name:t.name,id:r.user.toString()}}),a({type:"ADD_NEW_BLOG",data:c}),a(x("success","a new blog ".concat(r.title," by ").concat(r.author," added"),5e3)),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),a(x("error",n.t0.response.data.error,5e3));case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}()},N=function(e){return function(){var t=Object(b.a)(E.a.mark((function t(n){return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,w.deleteBlog(e);case 3:n({type:"DELETE_BLOG",data:{id:e}}),n(x("success","the blog has been successfully deleted",5e3)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),n(x("error",t.t0.data.error.message,5e3));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INIT_BLOGS":case"SORT_BLOGS":return t.data;case"ADD_NEW_BLOG":return[].concat(Object(h.a)(e),[t.data]);case"DELETE_BLOG":var n=t.data.id;return e.filter((function(e){return e.id!==n}));case"INCREMENT_LIKES":var a=t.data.id;return e.map((function(e){return e.id===a?Object(v.a)({},e,{likes:e.likes+1}):e}));case"ADD_COMMENT":var r=t.data.id,c=t.data.newComment;return e.map((function(e){return e.id===r?Object(v.a)({},e,{comments:[].concat(Object(h.a)(e.comments),[c])}):e}));default:return e}},_=function(){var e=Object(l.c)((function(e){return e.blogs})),t=Object(l.b)(),n=function(e){t(function(e){return function(){var t=Object(b.a)(E.a.mark((function t(n){var a;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=Object(h.a)(e).sort((function(e,t){return t.likes-e.likes})),n({type:"SORT_BLOGS",data:a});case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(e))};return r.a.createElement("div",null,r.a.createElement("button",{className:"btn btn-primary my-3",id:"sort-button",onClick:function(){return n(e)}},"Sort by Likes"),r.a.createElement("h2",{className:"text-primary"},"BLOGS"),r.a.createElement(f.a,{bordered:!0,className:"my-5"},r.a.createElement("thead",null,r.a.createElement("th",null,"Title"),r.a.createElement("th",null,"Author"),r.a.createElement("th",null,"Likes")),r.a.createElement("tbody",null,e.map((function(e){return r.a.createElement("tr",{key:e.id},r.a.createElement("td",null,r.a.createElement(s.b,{to:"/blogs/".concat(e.id),className:"blog-title"},e.title)),r.a.createElement("td",null,e.author),r.a.createElement("td",null,e.likes))})))))},A=(n(88),function(){var e=Object(l.b)(),t=Object(o.g)(),n=Object(o.h)().id,a=Object(l.c)((function(e){return e.blogs})).find((function(e){return e.id===n})),c=Object(l.c)((function(e){return e.userData}));if(!c||!a)return null;var u={display:"none"};c&&(a.user.username===c.username&&(u={display:""}));var s=function(){var n=Object(b.a)(E.a.mark((function n(r){return E.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!window.confirm("Do you want to delete ".concat(a.title,"?"))){n.next=4;break}return n.next=3,e(N(r));case 3:t.push("/");case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),i=function(t,n){e(function(e,t){return function(){var n=Object(b.a)(E.a.mark((function n(a){var r;return E.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r={likes:t.likes+1},n.next=4,w.update(e,r);case 4:a({type:"INCREMENT_LIKES",data:{id:e}}),n.next=11;break;case 7:n.prev=7,n.t0=n.catch(0),a(x("error","Blog ".concat(t.title," has been deleted"),5e3)),a({type:"DELETE_BLOG",data:{id:e}});case 11:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}()}(t,n))},m=function(t){t.preventDefault();var n=t.target.comment.value;t.target.comment.value="",e(function(e,t,n){return function(){var a=Object(b.a)(E.a.mark((function a(r){var c;return E.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,c={comments:[].concat(Object(h.a)(t.comments),[n])},a.next=4,w.update(e,c);case 4:r({type:"ADD_COMMENT",data:{id:e,newComment:n}}),a.next=11;break;case 7:a.prev=7,a.t0=a.catch(0),r(x("error","Blog ".concat(t.title," has been deleted"),5e3)),r({type:"DELETE_BLOG",data:{id:e}});case 11:case"end":return a.stop()}}),a,null,[[0,7]])})));return function(e){return a.apply(this,arguments)}}()}(a.id,a,n))};return r.a.createElement("div",null,r.a.createElement("h4",{className:"mt-3"},a.title," ",r.a.createElement("em",null,a.author)),r.a.createElement("p",null,r.a.createElement("a",{href:a.url},a.url)),r.a.createElement("p",null,"Likes ",r.a.createElement("span",{className:"like-count"},a.likes)," ",r.a.createElement("button",{onClick:function(){return i(a.id,a)},className:"like-button"},"Like")),r.a.createElement("p",null,"Added by ",a.user.name),r.a.createElement("button",{style:u,className:"delete-button",onClick:function(){return s(a.id)}},"Delete"),r.a.createElement("div",null,r.a.createElement("form",{onSubmit:function(e){return m(e)}},r.a.createElement("input",{type:"text",name:"comment"}),r.a.createElement("button",{type:"submit"},"Add a comment"))),r.a.createElement("div",null,r.a.createElement("h4",null,"comments"),r.a.createElement("ul",null,a.comments.map((function(e){return r.a.createElement("li",{key:e},e)})))))}),C=n(97),R=function(){var e=Object(l.c)((function(e){return e.notifications})),t=e.successMessage,n=e.errorMessage;return t?r.a.createElement(C.a,{variant:"success"},t):n?r.a.createElement(C.a,{variant:"danger"},n):null},B={login:function(){var e=Object(b.a)(E.a.mark((function e(t){var n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.post("/api/login",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},D=null,I=window.localStorage.getItem("loggedBlogappUser");I&&(D=JSON.parse(I),w.setToken(D.token));var U=function(e){return function(){var t=Object(b.a)(E.a.mark((function t(n){var a;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,B.login(e);case 3:a=t.sent,window.localStorage.setItem("loggedBlogappUser",JSON.stringify(a)),n({type:"SET_USER",data:a}),w.setToken(a.token),n(x("success","Login Successful",5e3)),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),n(x("error","Invalid username or password",5e3));case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INIT_USER":case"SET_USER":return t.data;case"CLEAR_USER":return null;default:return e}},G=n(33),J=function(e){var t=Object(a.useState)(""),n=Object(G.a)(t,2),r=n[0],c=n[1];return{field:{value:r,type:e,onChange:function(e){c(e.target.value)}},reset:function(){c("")}}},W=n(94),z=function(){var e=J("text"),t=e.field,n=e.reset,a=J("password"),c=a.field,u=a.reset,s=Object(l.b)(),i=Object(o.g)(),m=function(){var e=Object(b.a)(E.a.mark((function e(a){var r;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),r={username:t.value,password:c.value},e.next=4,s(U(r));case 4:i.push("/"),n(),u();case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("h2",{className:"text-primary"},"Log in to application"),r.a.createElement(W.a,{onSubmit:m},r.a.createElement(W.a.Group,null,r.a.createElement(W.a.Label,null,"Username"),r.a.createElement(W.a.Control,Object.assign({name:"Username",id:"username"},t)),r.a.createElement(W.a.Label,null,"Password"),r.a.createElement(W.a.Control,Object.assign({name:"Password",id:"password"},c)),r.a.createElement(p.a,{variant:"primary",type:"submit"},"login"))))},K=function(){var e=J("text"),t=e.field,n=e.reset,c=J("text"),u=c.field,s=c.reset,o=J("text"),i=o.field,m=o.reset,p=Object(a.useState)(!1),f=Object(G.a)(p,2),d=f[0],v=f[1],h=Object(l.b)(),g=Object(l.c)((function(e){return e.userData})),O={display:d?"none":""},y={display:d?"":"none"},w=function(){return v(!d)},j=function(){var e=Object(b.a)(E.a.mark((function e(a){var r;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),r={title:t.value,author:u.value,url:i.value},e.next=4,h(L(r,g));case 4:n(),s(),m(),w();case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("div",{style:O},r.a.createElement("button",{className:"btn btn-primary mt-3",onClick:w},"Add a Blog")),r.a.createElement("div",{style:y},r.a.createElement("h2",{className:"text-primary"},"Add a new blog"),r.a.createElement(W.a,{onSubmit:j},r.a.createElement(W.a.Label,null,"Title"),r.a.createElement(W.a.Control,Object.assign({name:"Title",id:"title"},t)),r.a.createElement(W.a.Label,null,"Author"),r.a.createElement(W.a.Control,Object.assign({name:"Author",id:"author"},u)),r.a.createElement(W.a.Label,null,"URL"),r.a.createElement(W.a.Control,Object.assign({name:"URL",id:"url"},i)),r.a.createElement("button",{className:"btn btn-warning mr-2 my-2",onClick:w,type:"button"},"cancel"),r.a.createElement("button",{className:"btn btn-primary my-2",id:"submit-blog-button",type:"submit"},"create"))))},P={getAll:function(){var e=Object(b.a)(E.a.mark((function e(){var t;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("/api/users");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},q=function(){return function(){var e=Object(b.a)(E.a.mark((function e(t){var n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.getAll();case 2:n=e.sent,t({type:"INIT_USERS",data:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INIT_USERS":return t.data;default:return e}},H=function(){var e=Object(l.b)();Object(a.useEffect)((function(){e(q())}),[e]);var t=Object(l.c)((function(e){return e.userList}));return r.a.createElement("div",null,r.a.createElement("h2",{className:"text-primary mt-3"},"Users"),r.a.createElement(f.a,{bordered:!0,className:"mt-3"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Blogs Added"))),r.a.createElement("tbody",null,t.map((function(e){return r.a.createElement("tr",{key:e.id},r.a.createElement("td",null,r.a.createElement(s.b,{to:"/users/".concat(e.id)},e.name)),r.a.createElement("td",null,e.blogs.length))})))))},Q=function(){var e=Object(l.b)();Object(a.useEffect)((function(){e(q())}),[e]);var t=Object(l.c)((function(e){return e.userList})),n=Object(o.h)().id,c=t.find((function(e){return e.id===n}));return c?r.a.createElement("div",null,r.a.createElement("h2",{className:"text-info mt-3"},c.name),r.a.createElement("h4",{className:"text-info mt-3"},"Added Blogs"),r.a.createElement("ul",{className:"list-group mt-3"},c.blogs.map((function(e){return r.a.createElement("li",{key:e.id,className:"list-group-item"},e.title)})))):null},V=function(){var e=Object(l.b)();Object(a.useEffect)((function(){e(function(){var e=Object(b.a)(E.a.mark((function e(t){var n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.getAll();case 2:n=e.sent,t({type:"INIT_BLOGS",data:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),Object(a.useEffect)((function(){var t=window.localStorage.getItem("loggedBlogappUser");if(t){var n=JSON.parse(t);e(function(e){return function(){var t=Object(b.a)(E.a.mark((function t(n){return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:"INIT_USER",data:e}),w.setToken(e.token);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(n))}}),[e]);var t=Object(l.c)((function(e){return e.userData}));console.log("userData from app component",t);return r.a.createElement("div",{className:"container"},r.a.createElement(R,null),r.a.createElement(s.a,null,t?r.a.createElement(i.a,{collapseOnSelect:!0,expand:"lg",variant:"dark",bg:"primary"},r.a.createElement(i.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(i.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(m.a,{className:"mr-auto"},r.a.createElement(m.a.Link,{href:"#",as:"span"},r.a.createElement(p.a,null,r.a.createElement(s.b,{to:"/",className:"text-white"},"All Blogs"))),r.a.createElement(m.a.Link,{href:"#",as:"span"},r.a.createElement(p.a,null,r.a.createElement(s.b,{to:"/users",className:"text-white"},"All Users"))),r.a.createElement(m.a.Link,{href:"#",as:"span"},r.a.createElement(p.a,null,r.a.createElement("em",null,t.name," logged in"))),r.a.createElement(m.a.Link,{href:"#",as:"span"},r.a.createElement(p.a,{onClick:function(){e(function(){var e=Object(b.a)(E.a.mark((function e(t){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:window.localStorage.removeItem("loggedBlogappUser"),t({type:"CLEAR_USER"}),w.setToken(null),t(x("success","Logout Successful",500));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}},"Log Out"))))):r.a.createElement("div",null),r.a.createElement(o.d,null,r.a.createElement(o.b,{exact:!0,path:"/blogs/:id"},t?r.a.createElement(A,null):r.a.createElement(o.a,{to:"/login"})),r.a.createElement(o.b,{exact:!0,path:"/users/:id"},t?r.a.createElement(Q,null):r.a.createElement(o.a,{to:"/login"})),r.a.createElement(o.b,{exact:!0,path:"/users"},t?r.a.createElement(H,null):r.a.createElement(o.a,{to:"/login"})),r.a.createElement(o.b,{exact:!0,path:"/login"},t?r.a.createElement(o.a,{to:"/"}):r.a.createElement(z,null)),r.a.createElement(o.b,{exact:!0,path:"/"},t?r.a.createElement("div",null,r.a.createElement(K,null),r.a.createElement(_,null)):r.a.createElement(o.a,{to:"/login"})))))},X=n(21),Y=n(57),Z=n(58),$=Object(X.combineReducers)({notifications:S,blogs:T,userData:M,userList:F}),ee=Object(X.createStore)($,Object(Y.composeWithDevTools)(Object(X.applyMiddleware)(Z.a)));u.a.render(r.a.createElement(l.a,{store:ee},r.a.createElement(V,null)),document.getElementById("root"))}},[[59,1,2]]]);
//# sourceMappingURL=main.ffd800e7.chunk.js.map