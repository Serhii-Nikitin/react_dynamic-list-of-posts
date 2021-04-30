(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],[,,,,function(e,t,a){e.exports=a(14)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),c=a(3),o=a.n(c),l=a(1),r=(a(9),a(10),function(e,t){return fetch("".concat("https://mate-api.herokuapp.com").concat(e),t).then((function(e){return e.json()})).then((function(e){return e.data}))}),u=(a(11),function(e){var t=e.userPosts,a=e.setSelectedPostId,n=e.selectedPostId,c=e.setIsPostSelected,o=e.isPostSelected,l=e.setSelectedPost,u=function(e){console.log(e,n),e!==n?(c(!0),a(e),function(e){return r("/posts/".concat(e))}(e).then((function(e){return l(e)}))):(c(!1),a(0),l(null))};return s.a.createElement("div",{className:"PostsList"},s.a.createElement("h2",null,"Posts:"),s.a.createElement("ul",{className:"PostsList__list"},t.map((function(e){return s.a.createElement("li",{className:"PostsList__item",key:e.id},s.a.createElement("div",null,s.a.createElement("b",null,"[User ".concat(e.userId||"not defined","]: ")),e.title),s.a.createElement("button",{type:"button",className:"PostsList__button button",onClick:function(){return u(e.id)}},n===e.id&&o?"Close":"Open"))}))))}),m=(a(12),function(e){var t=e.selectedPostId,a=Object(n.useState)(""),c=Object(l.a)(a,2),o=c[0],u=c[1],m=Object(n.useState)(""),i=Object(l.a)(m,2),d=i[0],p=i[1],E=Object(n.useState)(""),f=Object(l.a)(E,2),b=f[0],v=f[1];return s.a.createElement("form",{className:"NewCommentForm",onSubmit:function(e){var a,n;e.preventDefault(),a="/comments",n={method:"POST",body:JSON.stringify({postId:t,name:o,email:d,body:b}),headers:{"Content-type":"application/json; charset=UTF-8"}},r(a,n),u(""),p(""),v("")}},s.a.createElement("div",{className:"form-field"},s.a.createElement("input",{type:"text",name:"name",placeholder:"Your name",className:"NewCommentForm__input",value:o,onChange:function(e){return u(e.target.value)}})),s.a.createElement("div",{className:"form-field"},s.a.createElement("input",{type:"text",name:"email",placeholder:"Your email",className:"NewCommentForm__input",value:d,onChange:function(e){return p(e.target.value)}})),s.a.createElement("div",{className:"form-field"},s.a.createElement("textarea",{name:"body",placeholder:"Type comment here",className:"NewCommentForm__input",value:b,onChange:function(e){return v(e.target.value)}})),s.a.createElement("button",{type:"submit",className:"NewCommentForm__submit-button button"},"Add a comment"))}),i=(a(13),function(e){var t=e.selectedPostId,a=e.selectedPost,c=Object(n.useState)([]),o=Object(l.a)(c,2),u=o[0],i=o[1],d=Object(n.useState)(!0),p=Object(l.a)(d,2),E=p[0],f=p[1];return Object(n.useEffect)((function(){var e;(e=t,r("/comments?postId=".concat(e))).then((function(e){return i(e)})),console.log("hi")}),[t]),s.a.createElement("div",{className:"PostDetails"},s.a.createElement("h2",null,"Post details:"),s.a.createElement("section",{className:"PostDetails__post"},s.a.createElement("p",null,"Title: ".concat(a.title||"This post hasn't title"))),s.a.createElement("section",{className:"PostDetails__comments"},s.a.createElement("button",{type:"button",className:"button",onClick:function(){return f((function(e){return!e}))}},"".concat(E?"Hide ":"Show ").concat(u.length," comments")),E&&s.a.createElement("ul",{className:"PostDetails__list"},u.map((function(e){return s.a.createElement("li",{className:"PostDetails__list-item",key:e.id},s.a.createElement("button",{type:"button",className:"PostDetails__remove-button button",onClick:function(){var t,a;(t=e.id,a={method:"DELETE"},r("/comments/".concat(t),a)).then((function(e){return console.log(e)}))}},"X"),s.a.createElement("p",null,e.body))})))),s.a.createElement("section",null,s.a.createElement("div",{className:"PostDetails__form-wrapper"},s.a.createElement(m,{selectedPostId:t}))))}),d=function(e){var t=e.posts,a=e.userId,n=e.setUserId,c=e.setUserPosts,o=e.setIsPostSelected;return s.a.createElement("header",{className:"App__header"},s.a.createElement("label",null,"Select a user: \xa0",s.a.createElement("select",{className:"App__user-selector",value:a,onChange:function(e){"0"===e.target.value?(n(0),c(t),o(!1)):(n(+e.target.value),o(!1),function(e){return r("/posts?userId=".concat(e))}(e.target.value).then((function(e){return c(e)})))}},s.a.createElement("option",{value:"0"},"All users"),s.a.createElement("option",{value:"1"},"Leanne Graham"),s.a.createElement("option",{value:"2"},"Ervin Howell"),s.a.createElement("option",{value:"3"},"Clementine Bauch"),s.a.createElement("option",{value:"4"},"Patricia Lebsack"),s.a.createElement("option",{value:"5"},"Chelsey Dietrich"),s.a.createElement("option",{value:"6"},"Mrs. Dennis Schulist"),s.a.createElement("option",{value:"7"},"Kurtis Weissnat"),s.a.createElement("option",{value:"8"},"Nicholas Runolfsdottir V"),s.a.createElement("option",{value:"9"},"Glenna Reichert"),s.a.createElement("option",{value:"10"},"Leanne Graham"))))},p=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)([]),m=Object(l.a)(o,2),p=m[0],E=m[1],f=Object(n.useState)(0),b=Object(l.a)(f,2),v=b[0],h=b[1],P=Object(n.useState)(0),_=Object(l.a)(P,2),N=_[0],O=_[1],S=Object(n.useState)(!1),j=Object(l.a)(S,2),I=j[0],y=j[1],g=Object(n.useState)(null),C=Object(l.a)(g,2),D=C[0],w=C[1];return Object(n.useEffect)((function(){r("/posts").then((function(e){console.log(e),c(e),E(e)}))}),[]),s.a.createElement("div",{className:"App"},s.a.createElement(d,{posts:a,userId:v,setUserId:h,setUserPosts:E,setIsPostSelected:y}),s.a.createElement("main",{className:"App__main"},s.a.createElement("div",{className:"App__sidebar"},s.a.createElement(u,{selectedPostId:N,setSelectedPostId:O,userPosts:p,isPostSelected:I,setIsPostSelected:y,setSelectedPost:w,selectedPost:D})),D&&I&&s.a.createElement("div",{className:"App__content"},s.a.createElement(i,{selectedPostId:N,selectedPost:D}))))};o.a.render(s.a.createElement(p,null),document.getElementById("root"))}],[[4,1,2]]]);
//# sourceMappingURL=main.e891761c.chunk.js.map