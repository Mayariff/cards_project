(this.webpackJsonpuntitled=this.webpackJsonpuntitled||[]).push([[0],{11:function(e,t,n){e.exports={main:"test_main__3m-0O",column:"test_column__3gQop",header:"test_header__3jhfc"}},13:function(e,t,n){e.exports={column:"Container_column__19h14",header:"Container_header__t9700",content:"Container_content__1VjH-",message:"Container_message__tDNrU"}},14:function(e,t,n){e.exports={wrapper:"Header_wrapper__3r5y5","check-menu":"Header_check-menu__12-Dq",mainMenu:"Header_mainMenu__1TIi7",mainMenuChecked:"Header_mainMenuChecked__2UWRa",item:"Header_item__3sm6n"}},17:function(e,t,n){e.exports={default:"SuperButton_default__1qeTU",red:"SuperButton_red__1_UVt",disabled:"SuperButton_disabled__8ldy2"}},18:function(e,t,n){e.exports={margin:"SuperCheckbox_margin__1tqCv",checkbox:"SuperCheckbox_checkbox__3uo54",checkboxLabel:"SuperCheckbox_checkboxLabel__QUVAE"}},23:function(e,t,n){e.exports={superInput:"SuperInputText_superInput__2GI8z",errorInput:"SuperInputText_errorInput__3aGQv",error:"SuperInputText_error__16ZuZ"}},24:function(e,t,n){e.exports={wrapper:"SuperSelect_wrapper__MTryA",select:"SuperSelect_select__3-8_0",option:"SuperSelect_option__1ygZQ"}},25:function(e,t,n){e.exports={container:"Error_container__5irRK",a:"Error_a__2-S8m",b:"Error_b__2_s3u"}},27:function(e,t,n){e.exports={App:"App_App__160Eu",main:"App_main__1oA9_"}},28:function(e,t,n){e.exports={icon:"SuperEditableSpan_icon__11M45",className:"SuperEditableSpan_className__2bSQu"}},29:function(e,t,n){e.exports={radio:"SuperRadio_radio__1kzJP",radioLabel:"SuperRadio_radioLabel__FW0wq"}},31:function(e,t,n){e.exports={field:"FormField_field__34EFi"}},40:function(e,t,n){},43:function(e,t,n){e.exports={img:"Spinner_img__3YZuC"}},44:function(e,t,n){e.exports={error:"Error_error__25Wcc"}},45:function(e,t,n){e.exports={img:"CheckEmail_img__2R6cL"}},51:function(e,t,n){},78:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(21),s=n.n(r),i=(n(51),n(27)),o=n.n(i),u=n(5),l=n(6),j=n(3),d=n(8),b=n(17),p=n.n(b),O=n(0),h=function(e){var t=e.red,n=(e.className,e.nameButton),a=Object(d.a)(e,["red","className","nameButton"]),c=a.disabled?"".concat(p.a.default," ").concat(p.a.disabled):t?"".concat(p.a.default," ").concat(p.a.red):p.a.default;return Object(O.jsx)("button",Object(j.a)(Object(j.a)({className:c},a),{},{children:n}))},m=n(18),f=n.n(m),x=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,a=(e.className,e.spanClassName,e.children),c=Object(d.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]);return Object(O.jsx)("div",{className:f.a.margin,children:Object(O.jsxs)("label",{className:f.a.checkboxLabel,children:[Object(O.jsx)("input",Object(j.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:f.a.checkbox},c)),a&&Object(O.jsx)("span",{className:f.a.spanClassName,children:a})]})})},g=n(28),_=n.n(g),v=n(23),E=n.n(v),N=function(e){var t=e.type,n=e.onChange,a=e.onChangeText,c=e.onKeyPress,r=e.onEnter,s=e.error,i=(e.className,e.spanClassName,Object(d.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"])),o=s?"".concat(E.a.errorInput," ").concat(E.a.superInput):"".concat(E.a.superInput);return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("input",Object(j.a)({onChange:function(e){n&&n(e),a&&a(e.currentTarget.value)},onKeyPress:function(e){c&&c(e),r&&"Enter"===e.key&&r()},className:o,placeholder:s,type:t},i))})},C=function(e){e.autoFocus;var t=e.onBlur,n=e.onEnter,c=e.spanProps,r=Object(d.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),s=Object(a.useState)(!1),i=Object(u.a)(s,2),o=i[0],l=i[1],b=c||{},p=b.children,h=b.onDoubleClick,m=(b.className,Object(d.a)(b,["children","onDoubleClick","className"])),f=function(e){l(!0),h&&h(e)},x=_.a.className;return Object(O.jsx)(O.Fragment,{children:o?Object(O.jsx)(N,Object(j.a)({autoFocus:!0,onBlur:function(e){l(!1),t&&t(e)},onEnter:function(){l(!1),n&&n()}},r)):Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("img",{onDoubleClick:f,src:"https://i.pinimg.com/originals/7c/ef/ec/7cefec18b132e4f74b4b41e172698230.png",className:_.a.icon,alt:"icon"}),Object(O.jsx)("span",Object(j.a)(Object(j.a)({onDoubleClick:f,className:x},m),{},{children:p||r.value}))]})})},S=n(24),y=n.n(S),k=function(e){var t=e.options,n=e.onChange,a=e.onChangeOption,c=Object(d.a)(e,["options","onChange","onChangeOption"]),r=t?t.map((function(e,t){return Object(O.jsx)("option",{value:e,className:y.a.option,children:e},t)})):[];return Object(O.jsx)("div",{className:y.a.wrapper,children:Object(O.jsx)("select",Object(j.a)(Object(j.a)({onChange:function(e){n&&n(e),a&&a(e.currentTarget.value)}},c),{},{className:y.a.select,children:r}))})},R=n(40),T=n.n(R),A=function(e){e.type;var t=e.onChange,n=e.onChangeRange,a=e.className,c=Object(d.a)(e,["type","onChange","onChangeRange","className"]),r="".concat(T.a.range," ").concat(a||"");return Object(O.jsx)("div",{children:Object(O.jsx)("input",Object(j.a)({type:"range",onChange:function(e){t&&t(e),n&&n(+e.currentTarget.value)},className:r},c))})},I=n(11),P=n.n(I),w=n(29),G=n.n(w),L=function(e){e.type;var t=e.name,n=e.options,a=e.value,c=e.onChange,r=e.onChangeOption,s=Object(d.a)(e,["type","name","options","value","onChange","onChangeOption"]),i=function(e){c&&c(e),r&&r(e.currentTarget.value)},o=n?n.map((function(e,n){return Object(O.jsxs)("label",{className:G.a.radioLabel,children:[Object(O.jsx)("input",Object(j.a)(Object(j.a)({type:"radio",name:t,value:e,onChange:i,checked:e===a},s),{},{className:G.a.radio})),e]},t+"-"+n)})):[];return Object(O.jsx)(O.Fragment,{children:o})},F=["x","y","z"],B=function(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),n=t[0],c=t[1],r=n?"":"error",s=Object(a.useState)(!1),i=Object(u.a)(s,2),o=i[0],l=i[1],j=Object(a.useState)(0),d=Object(u.a)(j,2),b=d[0],p=d[1],m=Object(a.useState)(""),f=Object(u.a)(m,2),g=f[0],_=f[1],v=Object(a.useState)(F[1]),E=Object(u.a)(v,2),S=E[0],y=E[1];return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("h2",{style:{textAlign:"center"},children:" TEST "}),Object(O.jsxs)("div",{className:P.a.main,children:[Object(O.jsxs)("div",{className:P.a.column,children:[Object(O.jsx)("h3",{className:P.a.header,children:"\u0418\u043d\u043f\u0443\u0442"}),Object(O.jsx)(N,{value:n,onChangeText:c,onEnter:function(){r?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},error:r}),Object(O.jsx)(N,{})]}),Object(O.jsxs)("div",{className:P.a.column,children:[Object(O.jsx)("h3",{className:P.a.header,children:"\u041a\u043d\u043e\u043f\u043a\u0438 "}),Object(O.jsx)(h,{onClick:function(){return alert("click <default>")},nameButton:"default"}),Object(O.jsx)(h,{red:!0,onClick:function(){return alert("click <delete>")},nameButton:"delete"}),Object(O.jsx)(h,{disabled:!0,nameButton:"disabled"})]}),Object(O.jsxs)("div",{className:P.a.column,children:[Object(O.jsx)("h3",{className:P.a.header,children:"\u0427\u0435\u043a-\u0411\u043e\u043a\u0441 "}),Object(O.jsx)(x,{checked:o,onChangeChecked:l,children:"some text"})]}),Object(O.jsxs)("div",{className:P.a.column,children:[Object(O.jsx)("h3",{className:P.a.header,children:" \u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u0443\u0435\u043c\u043e\u0435 \u043f\u043e\u043b\u0435 "}),Object(O.jsx)("div",{children:Object(O.jsx)(C,{value:g,onChangeText:_,spanProps:{children:g?void 0:"enter text..."}})})]}),Object(O.jsxs)("div",{className:P.a.column,children:[Object(O.jsx)("h3",{className:P.a.header,children:" \u0421\u0435\u043b\u0435\u043a\u0442\u043e\u0440 \u0438 \u0440\u0430\u0434\u0438\u043e-\u043a\u043d\u043e\u043f\u043a\u0430 "}),Object(O.jsx)("div",{children:Object(O.jsx)(L,{name:"radio",options:F,value:g,onChangeOption:y})}),Object(O.jsx)("br",{}),Object(O.jsx)(k,{options:F,value:S,onChangeOption:y})]}),Object(O.jsxs)("div",{className:P.a.column,children:[Object(O.jsx)("h3",{className:P.a.header,children:" \u0414\u0438\u0430\u043f\u0430\u0437\u043e\u043d "}),Object(O.jsxs)("div",{children:[Object(O.jsx)("span",{children:b}),Object(O.jsx)(A,{onChangeRange:function(e){p(e)}})]})]})]})]})},D=n(4),H=n(9),M=n.n(H),W=n(15),z=n(42),U=n.n(z).a.create({baseURL:"https://neko-back.herokuapp.com/",withCredentials:!0}),K=function(e,t,n){return U.post("2.0/auth/login",{email:e,password:t,rememberMe:n})},q=function(e,t){return U.post("2.0/auth/register",{email:e,password:t})},Q=function(){return U.post("2.0/auth/me")},Z=function(){return U.delete("2.0/auth/me")},J=function(e,t){return U.post("2.0/auth/forgot",{email:e,message:"<div style=\"background-color: lime; padding: 15px\"> password recovery link: <a href='http://mayariff.github.io/cards_project/set-new-password/$token$' /> link</a></div>",from:t})},V=function(e,t){return U.post("2.0/auth/set-new-password",{password:e,resetPasswordToken:t})},Y={error:"",isInitialized:!1,status:"idle"},$="appReducer/SET_IS_ERROR",X="appReducer/SET_IS_INITIALIZED",ee="appReducer/SET_STATUS",te=function(e){return{type:$,payload:{error:e}}},ne=function(e){return{type:ee,payload:{status:e}}},ae={isRegistrated:!1,isLoggedIn:!1,emailIsBeSend:!1,email:"","password\u0421hanged":!1,isAuth:!1,user:{}},ce="authReducer/SET_IS_REGISTRATED",re="authReducer/SET-IS-LOGGED-IN",se="authReducer/SENT-EMAIL-FOR-PASSWORD-RECOVERY",ie="authReducer/SET-NEW-PASSWORD",oe="authReducer/SET-USER-DATA",ue=function(e){return{type:re,payload:{isLoggedIn:e}}},le=function(e,t){return{type:se,payload:{emailIsBeSend:e,email:t}}},je=n(2),de=n(31),be=n.n(de),pe=function(e){var t=e.fieldName,n=e.value,a=e.onChangeHandler,c=e.type,r=e.required;return Object(O.jsxs)("label",{className:be.a.field,children:[Object(O.jsx)("span",{className:be.a.FormLabel,children:t}),Object(O.jsx)("br",{}),Object(O.jsx)(N,{name:t,value:n,onChange:a,type:c,required:r})]})},Oe=n(13),he=n.n(Oe),me=n.p+"static/media/58e4a4e4fa041a11f796a2014b1bcfa4.c532e884.gif",fe=n(43),xe=n.n(fe),ge=function(){return Object(O.jsx)("img",{src:me,alt:" Please wait. Loading...",className:xe.a.img})},_e=function(e){var t=e.children,n=e.title,a=Object(D.c)((function(e){return e.app.status}));return Object(O.jsxs)("div",{className:he.a.column,children:["loading"===a&&Object(O.jsx)(ge,{}),Object(O.jsxs)("h2",{className:he.a.header,children:[" ",n," "]}),Object(O.jsx)("div",{className:he.a.content,children:t})]})},ve=n(44),Ee=n.n(ve),Ne=function(e){var t=e.error;return Object(O.jsxs)("div",{className:Ee.a.error,children:[" ",t," "]})},Ce=function(){var e,t,n=Object(D.b)(),c=Object(D.c)((function(e){return e.login.isLoggedIn})),r=Object(D.c)((function(e){return e.app.error})),s=Object(D.c)((function(e){return e.app.status})),i=Object(je.g)(),o=null===(e=Object(je.f)().state)||void 0===e||null===(t=e.from)||void 0===t?void 0:t.pathname,j=Object(a.useState)(""),d=Object(u.a)(j,2),b=d[0],p=d[1],m=Object(a.useState)(""),f=Object(u.a)(m,2),g=f[0],_=f[1],v=Object(a.useState)(!1),E=Object(u.a)(v,2),N=E[0],C=E[1],S=function(e){e.preventDefault(),n(c?function(){var e=Object(W.a)(M.a.mark((function e(t){var n;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(ne("loading")),t(te("")),e.next=5,Z();case 5:t(ue(!1)),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),n=e.t0.response?e.t0.response.data.error:e.t0.message,t(te(n));case 12:return e.prev=12,t(ne("idle")),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,8,12,15]])})));return function(t){return e.apply(this,arguments)}}():function(e,t,n){return function(){var a=Object(W.a)(M.a.mark((function a(c){var r;return M.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,c(ne("loading")),c(te("")),a.next=5,K(e,t,n);case 5:c(ue(!0)),a.next=12;break;case 8:a.prev=8,a.t0=a.catch(0),r=a.t0.response?a.t0.response.data.error:a.t0.message,c(te(r));case 12:return a.prev=12,c(ne("idle")),a.finish(12);case 15:case"end":return a.stop()}}),a,null,[[0,8,12,15]])})));return function(e){return a.apply(this,arguments)}}()}(b,g,N))};return Object(a.useEffect)((function(){n(te(""))}),[n,c]),c&&o&&i(o,{replace:!0}),Object(O.jsxs)(_e,{title:"LOGIN PAGE",children:[Object(O.jsxs)("form",{children:[Object(O.jsx)(pe,{fieldName:"Email",value:b,onChangeHandler:function(e){p(e.currentTarget.value),n(te(""))},type:"email"}),Object(O.jsx)(pe,{fieldName:"Password",value:g,onChangeHandler:function(e){_(e.currentTarget.value),n(te(""))},type:"password"}),Object(O.jsx)(x,{checked:N,onChange:function(e){C(e.target.checked)},children:" Remember me "}),Object(O.jsx)(l.b,{to:De.FORGOT_PAGE,children:"Forgot Password"}),c?Object(O.jsx)(h,{nameButton:"Logout",type:"submit",onClick:S,disabled:"loading"===s||""!==r}):Object(O.jsx)(h,{nameButton:"Login",type:"submit",onClick:S,disabled:"loading"===s||""!==r}),Object(O.jsx)("div",{className:he.a.message,children:"Don't have an account?"}),Object(O.jsx)(l.b,{to:De.REGISTRATION_PAGE,children:"Sign up"})]}),""!==r&&Object(O.jsx)(Ne,{error:r})]})},Se=n.p+"static/media/SmoothJauntyBighornedsheep-max-1mb.61c33806.gif",ye=n(25),ke=n.n(ye);var Re=function(){return Object(O.jsxs)("div",{className:ke.a.container,children:[Object(O.jsxs)("div",{className:ke.a.a,children:[Object(O.jsx)("h1",{children:"404"}),Object(O.jsx)("h2",{children:"Ooh shit!"}),Object(O.jsxs)("div",{children:[Object(O.jsx)("span",{children:"You're lost... "}),Object(O.jsx)("br",{}),Object(O.jsx)("span",{children:"back to homepage"})]})]}),Object(O.jsx)("div",{className:ke.a.b,children:Object(O.jsx)("img",{src:Se,alt:"travolta"})})]})};var Te=n(16),Ae=Object(Te.c)((function(e){return function(t){var n=Object.assign({},t),a=Object(je.f)();return Object(D.c)((function(e){return e.login.isLoggedIn}))?Object(O.jsx)(e,Object(j.a)({},n)):Object(O.jsx)(je.a,{to:De.LOGIN_PAGE,state:{from:a}})}}))((function(){return Object(O.jsx)("div",{children:Object(O.jsx)("h2",{children:"PROFILE PAGE"})})})),Ie=function(){var e=Object(D.b)(),t=Object(D.c)((function(e){return e.login.emailIsBeSend})),n=Object(D.c)((function(e){return e.app.error})),c=Object(D.c)((function(e){return e.app.status})),r=Object(a.useState)(""),s=Object(u.a)(r,2),i=s[0],o=s[1];return t?Object(O.jsx)(je.a,{to:De.CHECK_EMAIL_PAGE}):Object(O.jsxs)(_e,{title:"Forgot your Password?",children:[Object(O.jsxs)("form",{children:[Object(O.jsx)(pe,{fieldName:"Email",value:i,onChangeHandler:function(t){o(t.currentTarget.value),e(te(""))},type:"email"}),Object(O.jsx)("span",{className:he.a.message,children:"Enter your email address and we will send you future instructions"}),Object(O.jsx)(h,{nameButton:"Send instructions",onClick:function(){e(function(e,t){return function(){var n=Object(W.a)(M.a.mark((function n(a){var c;return M.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,a(ne("loading")),n.next=4,J(e,t);case 4:a(le(!0,e)),n.next=11;break;case 7:n.prev=7,n.t0=n.catch(0),c=n.t0.response?n.t0.response.data.error:n.t0.message,a(te(c));case 11:return n.prev=11,a(ne("idle")),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[0,7,11,14]])})));return function(e){return n.apply(this,arguments)}}()}(i,"maya-mno@yandex.ru"))},disabled:"loading"===c}),Object(O.jsx)("span",{className:he.a.message,children:"Did your remember your password?"}),Object(O.jsx)(l.b,{to:De.LOGIN_PAGE,children:"Try to logging in"})]}),""!==n&&Object(O.jsx)(Ne,{error:n})]})},Pe=function(){var e=Object(je.h)().token,t=Object(D.b)(),n=Object(D.c)((function(e){return e.login.password\u0421hanged})),c=Object(D.c)((function(e){return e.app.error})),r=Object(D.c)((function(e){return e.app.status})),s=Object(a.useState)(""),i=Object(u.a)(s,2),o=i[0],l=i[1],j=Object(a.useState)(""),d=Object(u.a)(j,2),b=d[0],p=d[1];return n?Object(O.jsx)(je.a,{to:De.LOGIN_PAGE}):Object(O.jsxs)(_e,{title:"CREATE NEW PASSWORD",children:[Object(O.jsxs)("form",{children:[Object(O.jsx)(pe,{fieldName:"Password",value:o,onChangeHandler:function(e){l(e.currentTarget.value),t(te(""))},type:"password"}),Object(O.jsx)(pe,{fieldName:"Confirm Password",value:b,onChangeHandler:function(e){p(e.currentTarget.value),t(te(""))},type:"password"}),Object(O.jsx)(h,{nameButton:"Register",onClick:function(n){n.preventDefault(),t(o===b?e?function(e,t){return function(){var n=Object(W.a)(M.a.mark((function n(a){var c;return M.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,a(ne("loading")),n.next=4,V(e,t);case 4:a({type:ie,payload:{"password\u0421hanged":!0}}),n.next=11;break;case 7:n.prev=7,n.t0=n.catch(0),c=n.t0.response?n.t0.response.data.error:n.t0.message,a(te(c));case 11:return n.prev=11,a(ne("idle")),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[0,7,11,14]])})));return function(e){return n.apply(this,arguments)}}()}(o,e):te("missing token"):te("Passwords is different"))},disabled:"loading"===r||""!==c})]}),""!==c&&Object(O.jsx)(Ne,{error:c})]})},we=n.p+"static/media/email.14a26c2f.png",Ge=n(45),Le=n.n(Ge),Fe=function(){var e=Object(D.c)((function(e){return e.login.email}));return Object(O.jsxs)(_e,{title:"Check Email",children:[Object(O.jsx)("img",{src:we,alt:"Success",className:Le.a.img}),Object(O.jsxs)("span",{className:he.a.message,children:["We've sent an Email with instructions to ",e]})]})},Be=function(){var e=Object(D.b)(),t=Object(D.c)((function(e){return e.login.isRegistrated})),n=Object(D.c)((function(e){return e.app.error})),c=Object(D.c)((function(e){return e.app.status})),r=Object(a.useState)(""),s=Object(u.a)(r,2),i=s[0],o=s[1],l=Object(a.useState)(""),j=Object(u.a)(l,2),d=j[0],b=j[1],p=Object(a.useState)(""),m=Object(u.a)(p,2),f=m[0],x=m[1];return Object(a.useEffect)((function(){e(te(""))}),[e,t]),t?Object(O.jsx)(je.a,{to:De.LOGIN_PAGE}):Object(O.jsxs)(_e,{title:"REGISTRATION PAGE",children:[Object(O.jsxs)("form",{children:[Object(O.jsx)(pe,{fieldName:"Email",value:i,onChangeHandler:function(t){o(t.currentTarget.value),e(te(""))},type:"email"}),Object(O.jsx)(pe,{fieldName:"Password",value:d,onChangeHandler:function(t){b(t.currentTarget.value),e(te(""))},type:"password"}),Object(O.jsx)(pe,{fieldName:"Confirm Password",value:f,onChangeHandler:function(t){x(t.currentTarget.value),e(te(""))},type:"password"}),Object(O.jsx)(h,{type:"submit",onClick:function(t){t.preventDefault(),d===f?(e(function(e,t){return function(){var n=Object(W.a)(M.a.mark((function n(a){var c;return M.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,a(ne("loading")),a(te("")),n.next=5,q(e,t);case 5:a({type:ce,payload:{isRegistrated:!0}}),n.next=12;break;case 8:n.prev=8,n.t0=n.catch(0),c=n.t0.response?n.t0.response.data.error:n.t0.message,a(te(c));case 12:return n.prev=12,a(ne("idle")),n.finish(12);case 15:case"end":return n.stop()}}),n,null,[[0,8,12,15]])})));return function(e){return n.apply(this,arguments)}}()}(i,d)),e(te(""))):e(te("Passwords is different"))},nameButton:"Register",disabled:"loading"===c||""!==n})]}),""!==n&&Object(O.jsx)(Ne,{error:n})]})},De={START_PAGE:"/*",TEST_PAGE:"/test",LOGIN_PAGE:"/login",ERROR404_PAGE:"/error404",PROFILE_PAGE:"/profile",REGISTRATION_PAGE:"/registration",FORGOT_PAGE:"/forgot_password",CREATE_NEW_PASSWORD_PAGE:"/set-new-password/:token",CHECK_EMAIL_PAGE:"/check_email"};var He=function(){return Object(O.jsx)("div",{children:Object(O.jsxs)(je.d,{children:[Object(O.jsx)(je.b,{path:De.START_PAGE,element:Object(O.jsx)(B,{})}),Object(O.jsx)(je.b,{path:De.TEST_PAGE,element:Object(O.jsx)(B,{})}),Object(O.jsx)(je.b,{path:De.LOGIN_PAGE,element:Object(O.jsx)(Ce,{})}),Object(O.jsx)(je.b,{path:De.REGISTRATION_PAGE,element:Object(O.jsx)(Be,{})}),Object(O.jsx)(je.b,{path:De.PROFILE_PAGE,element:Object(O.jsx)(Ae,{})}),Object(O.jsx)(je.b,{path:De.ERROR404_PAGE,element:Object(O.jsx)(Re,{})}),Object(O.jsx)(je.b,{path:De.FORGOT_PAGE,element:Object(O.jsx)(Ie,{})}),Object(O.jsx)(je.b,{path:De.CREATE_NEW_PASSWORD_PAGE,element:Object(O.jsx)(Pe,{})}),Object(O.jsx)(je.b,{path:De.CHECK_EMAIL_PAGE,element:Object(O.jsx)(Fe,{})})]})})},Me=n(14),We=n.n(Me),ze=function(){var e=Object(a.useState)(!1),t=Object(u.a)(e,2),n=t[0],c=t[1],r=Object(D.c)((function(e){return e.app.status})),s=function(e){"loading"===r&&e.preventDefault()};return Object(O.jsxs)("div",{className:We.a.wrapper,children:[Object(O.jsx)(x,{id:"check-menu",onChangeChecked:function(e){return c(e)}}),Object(O.jsxs)("nav",{className:n?"".concat(We.a.mainMenu," ").concat(We.a.mainMenuChecked):We.a.mainMenu,children:[Object(O.jsx)(l.c,{to:De.TEST_PAGE,className:We.a.item,onClick:s,children:" test |"}),Object(O.jsx)(l.c,{to:De.LOGIN_PAGE,className:We.a.item,onClick:s,children:" login | "}),Object(O.jsx)(l.c,{to:De.REGISTRATION_PAGE,className:We.a.item,onClick:s,children:" registration | "}),Object(O.jsx)(l.c,{to:De.PROFILE_PAGE,className:We.a.item,onClick:s,children:" profile | "}),Object(O.jsx)(l.c,{to:De.ERROR404_PAGE,className:We.a.item,onClick:s,children:"  error404 "})]})]})};var Ue=function(){var e=Object(D.b)(),t=Object(D.c)((function(e){return e.app.isInitialized}));return Object(a.useEffect)((function(){e(function(){var e=Object(W.a)(M.a.mark((function e(t){var n;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(ne("loading")),t(te("")),e.next=5,Q();case 5:t(ue(!0)),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),n=e.t0.response?e.t0.response.data.error:e.t0.message+", more details in the console",t(te(n));case 12:return e.prev=12,t(ne("idle")),t({type:X,payload:{isInitialized:!0}}),e.finish(12);case 16:case"end":return e.stop()}}),e,null,[[0,8,12,16]])})));return function(t){return e.apply(this,arguments)}}())}),[e]),t?Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)(ze,{}),Object(O.jsx)("div",{className:o.a.main,children:Object(O.jsx)(He,{})})]}):Object(O.jsx)(l.b,{to:De.LOGIN_PAGE})},Ke=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,79)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))},qe=n(46),Qe=Object(Te.b)({login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ce:return Object(j.a)(Object(j.a)({},e),{},{isRegistrated:t.payload.isRegistrated});case re:return Object(j.a)(Object(j.a)({},e),{},{isLoggedIn:t.payload.isLoggedIn});case se:return Object(j.a)(Object(j.a)({},e),{},{emailIsBeSend:t.payload.emailIsBeSend,email:t.payload.email});case ie:return Object(j.a)(Object(j.a)({},e),{},{"password\u0421hanged":t.payload.password\u0421hanged});case oe:return Object(j.a)(Object(j.a)({},e),{},{user:t.payload.user});default:return e}},app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case $:return Object(j.a)(Object(j.a)({},e),{},{error:t.payload.error});case X:return Object(j.a)(Object(j.a)({},e),{},{isInitialized:t.payload.isInitialized});case ee:return Object(j.a)(Object(j.a)({},e),{},{status:t.payload.status});default:return e}}}),Ze=Object(Te.d)(Qe,Object(Te.a)(qe.a));window.store=Ze,s.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(l.a,{children:Object(O.jsx)(D.a,{store:Ze,children:Object(O.jsx)(Ue,{})})})}),document.getElementById("root")),Ke()}},[[78,1,2]]]);
//# sourceMappingURL=main.65f5cfb8.chunk.js.map