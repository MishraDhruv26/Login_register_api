(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{67:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(20),s=a.n(r),i=a(10),o=a(3),l=a(1),u=function(){return Object(l.jsx)("div",{className:"container my-5 align-items-center",children:Object(l.jsx)("h1",{children:"You Are Logged in!!!"})})},d=a(14),b=a(4),j=a(17),p=a(11),m=a(12),h=a.n(m),O=a(18),x=a(19),f=a.n(x),v="LOGIN_SUCCESS",g="LOGIN_FAIL",N="SIGNUP_SUCCESS",y="SIGNUP_FAIL",S="USER_LOADED_SUCCESS",w="USER_LOADED_FAIL",A="AUTHENTICATED_SUCCESS",I="AUTHENTICATED_FAIL",C="LOGOUT",k=function(){return function(){var e=Object(O.a)(h.a.mark((function e(t){var a,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!localStorage.getItem("access")){e.next=14;break}return a={headers:{"Content-Type":"application/json",Authorization:"JWT ".concat(localStorage.getItem("access")),Accept:"application/json"}},e.prev=2,e.next=5,f.a.get("".concat("http://127.0.0.1:8000","/auth/users/me/"),a);case 5:n=e.sent,t({type:S,payload:n.data}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),t({type:w});case 12:e.next=15;break;case 14:t({type:w});case 15:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}()},E=Object(p.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{login:function(e,t){return function(){var a=Object(O.a)(h.a.mark((function a(n){var c,r,s;return h.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return c={headers:{"Content-Type":"application/json"}},r=JSON.stringify({email:e,password:t}),a.prev=2,a.next=5,f.a.post("".concat("http://127.0.0.1:8000","/auth/jwt/create/"),r,c);case 5:s=a.sent,n({type:v,payload:s.data}),n(k()),a.next=13;break;case 10:a.prev=10,a.t0=a.catch(2),n({type:g});case 13:case"end":return a.stop()}}),a,null,[[2,10]])})));return function(e){return a.apply(this,arguments)}}()}})((function(e){var t=e.login,a=e.isAuthenticated,c=Object(n.useState)({email:"",password:""}),r=Object(j.a)(c,2),s=r[0],u=r[1],p=s.email,m=s.password,h=function(e){return u(Object(b.a)(Object(b.a)({},s),{},Object(d.a)({},e.target.name,e.target.value)))};return a?Object(l.jsx)(o.a,{to:"/home"}):Object(l.jsxs)("div",{className:"container mt-5",children:[Object(l.jsx)("h1",{children:"Log-In"}),Object(l.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault(),t(p,m)}(e)},children:[Object(l.jsxs)("div",{className:"mb-3",children:[Object(l.jsx)("label",{htmlFor:"exampleInputEmail1",className:"form-label",children:"Email address"}),Object(l.jsx)("input",{type:"email",className:"form-control",name:"email",onChange:function(e){return h(e)},id:"exampleInputEmail1",required:!0})]}),Object(l.jsxs)("div",{className:"mb-3",children:[Object(l.jsx)("label",{htmlFor:"exampleInputPassword1",className:"form-label",children:"Password"}),Object(l.jsx)("input",{type:"password",className:"form-control",name:"password",onChange:function(e){return h(e)},id:"exampleInputPassword1",required:!0})]}),Object(l.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"})]}),Object(l.jsxs)("p",{className:"my-3",children:["Don't Have an account? ",Object(l.jsx)(i.b,{to:"/signup",children:"Register Now"})]})]})})),_=Object(p.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{signup:function(e,t,a,n,c){return function(){var r=Object(O.a)(h.a.mark((function r(s){var i,o,l;return h.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return i={headers:{"Content-Type":"application/json"}},o=JSON.stringify({name:e,email:t,password:a,re_password:n,address:c}),r.prev=2,r.next=5,f.a.post("".concat("http://127.0.0.1:8000","/auth/users/"),o,i);case 5:l=r.sent,s({type:N,payload:l.data}),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(2),s({type:y});case 12:case"end":return r.stop()}}),r,null,[[2,9]])})));return function(e){return r.apply(this,arguments)}}()}})((function(e){var t=e.signup,a=e.isAuthenticated,c=Object(n.useState)(!1),r=Object(j.a)(c,2),s=r[0],u=r[1],p=Object(n.useState)({name:"",email:"",password:"",re_password:"",address:""}),m=Object(j.a)(p,2),h=m[0],O=m[1],x=h.name,f=h.email,v=h.password,g=h.re_password,N=h.address,y=function(e){return O(Object(b.a)(Object(b.a)({},h),{},Object(d.a)({},e.target.name,e.target.value)))};return a?Object(l.jsx)(o.a,{to:"/home"}):s?Object(l.jsx)(o.a,{to:"/login"}):Object(l.jsxs)("div",{className:"container mt-5",children:[Object(l.jsx)("h1",{children:"Register"}),Object(l.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault(),v===g&&(t(x,f,v,g,N),u(!0))}(e)},children:[Object(l.jsxs)("div",{className:"mb-3",children:[Object(l.jsx)("label",{htmlFor:"exampleInputName",className:"form-label",children:"Name"}),Object(l.jsx)("input",{type:"text",className:"form-control",name:"name",onChange:function(e){return y(e)},id:"exampleInputName",required:!0})]}),Object(l.jsxs)("div",{className:"mb-3",children:[Object(l.jsx)("label",{htmlFor:"exampleInputEmail1",className:"form-label",children:"Email address"}),Object(l.jsx)("input",{type:"email",className:"form-control",name:"email",onChange:function(e){return y(e)},id:"exampleInputEmail1",required:!0})]}),Object(l.jsxs)("div",{className:"mb-3",children:[Object(l.jsx)("label",{htmlFor:"exampleInputPassword1",className:"form-label",children:"Password"}),Object(l.jsx)("input",{type:"password",className:"form-control",name:"password",onChange:function(e){return y(e)},id:"exampleInputPassword1",required:!0})]}),Object(l.jsxs)("div",{className:"mb-3",children:[Object(l.jsx)("label",{htmlFor:"exampleInputrePassword1",className:"form-label",children:"Confirm Password"}),Object(l.jsx)("input",{type:"password",className:"form-control",name:"re_password",onChange:function(e){return y(e)},id:"exampleInputrePassword1",required:!0})]}),Object(l.jsxs)("div",{className:"mb-3",children:[Object(l.jsx)("label",{htmlFor:"exampleInputAddress",className:"form-label",children:"Address"}),Object(l.jsx)("input",{type:"text",className:"form-control",name:"address",onChange:function(e){return y(e)},id:"exampleInputAddress",required:!0})]}),Object(l.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"})]}),Object(l.jsxs)("p",{className:"my-3",children:["Already have an account! ",Object(l.jsx)(i.b,{to:"/",children:"Login"})]})]})})),L=Object(p.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{logout:function(){return function(e){e({type:C})}}})((function(e){var t=e.logout,a=e.isAuthenticated;return Object(l.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:Object(l.jsxs)("div",{className:"container-fluid",children:[Object(l.jsx)(i.b,{className:"navbar-brand",to:"/",children:"LOG_REG"}),Object(l.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(l.jsx)("span",{className:"navbar-toggler-icon"})}),Object(l.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(l.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:a?Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(i.b,{className:"nav-link active",to:"/",onClick:t,children:"Logout"})}):Object(l.jsxs)(n.Fragment,{children:[Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(i.b,{className:"nav-link active","aria-current":"page",to:"/signup",children:"Signup"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(i.b,{className:"nav-link",to:"/",children:"Login"})})]})})})]})})})),T=Object(p.b)(null,{checkAuthenticated:function(){return function(){var e=Object(O.a)(h.a.mark((function e(t){var a,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!localStorage.getItem("access")){e.next=15;break}return a={headers:{"Content-Type":"application/json",Accept:"application/json"}},n=JSON.stringify({token:localStorage.getItem("access")}),e.prev=3,e.next=6,f.a.post("".concat("http://127.0.0.1:8000","/auth/jwt/verify/"),n,a);case 6:"token_not_valid"!==e.sent.data.code?t({type:A}):t({type:I}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),t({type:I});case 13:e.next=16;break;case 15:t({type:I});case 16:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(t){return e.apply(this,arguments)}}()},load_user:k})((function(e){return Object(n.useEffect)((function(){e.checkAuthenticated(),e.load_user()}),[]),Object(l.jsxs)("div",{children:[Object(l.jsx)(L,{}),e.children]})})),F=a(15),P=a(35),U=a(36),D={access:localStorage.getItem("access"),refresh:localStorage.getItem("refresh"),isAuthenticated:null,user:null},q=Object(F.combineReducers)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case A:return Object(b.a)(Object(b.a)({},e),{},{isAuthenticated:!0});case v:return localStorage.setItem("access",n.access),Object(b.a)(Object(b.a)({},e),{},{isAuthenticated:!0,access:n.access,refresh:n.refresh});case N:return Object(b.a)(Object(b.a)({},e),{},{isAuthenticated:!1});case S:return Object(b.a)(Object(b.a)({},e),{},{user:n});case I:return Object(b.a)(Object(b.a)({},e),{},{isAuthenticated:!1});case w:return Object(b.a)(Object(b.a)({},e),{},{user:null});case g:case y:case C:return localStorage.removeItem("access"),localStorage.removeItem("refresh"),Object(b.a)(Object(b.a)({},e),{},{access:null,refersh:null,isAuthenticated:!1,user:null});default:return e}}}),G=[U.a],J=Object(F.createStore)(q,{},Object(P.composeWithDevTools)(F.applyMiddleware.apply(void 0,G))),R=function(){return Object(l.jsx)(p.a,{store:J,children:Object(l.jsx)(i.a,{children:Object(l.jsx)(T,{children:Object(l.jsxs)(o.d,{children:[Object(l.jsx)(o.b,{exact:!0,path:"/",component:E}),Object(l.jsx)(o.b,{exact:!0,path:"/home",component:u}),Object(l.jsx)(o.b,{exact:!0,path:"/signup",component:_})]})})})})};s.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(R,{})}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.608ed43e.chunk.js.map