(this.webpackJsonpuntitled=this.webpackJsonpuntitled||[]).push([[0],[,,,,,,,,function(e,n,t){e.exports={main:"test_main__3m-0O",column:"test_column__3gQop",header:"test_header__3jhfc"}},function(e,n,t){e.exports={wrapper:"Header_wrapper__3r5y5","check-menu":"Header_check-menu__12-Dq",mainMenu:"Header_mainMenu__1TIi7",mainMenuChecked:"Header_mainMenuChecked__2UWRa",item:"Header_item__3sm6n"}},,function(e,n,t){e.exports={default:"SuperButton_default__1qeTU",red:"SuperButton_red__1_UVt",disabled:"SuperButton_disabled__8ldy2"}},,,function(e,n,t){e.exports={superInput:"SuperInputText_superInput__2GI8z",errorInput:"SuperInputText_errorInput__3aGQv",error:"SuperInputText_error__16ZuZ"}},function(e,n,t){e.exports={wrapper:"SuperSelect_wrapper__MTryA",select:"SuperSelect_select__3-8_0",option:"SuperSelect_option__1ygZQ"}},function(e,n,t){e.exports={container:"Error_container__5irRK",a:"Error_a__2-S8m",b:"Error_b__2_s3u"}},,,function(e,n,t){e.exports={checkbox:"SuperCheckbox_checkbox__3uo54"}},function(e,n,t){e.exports={icon:"SuperEditableSpan_icon__11M45",className:"SuperEditableSpan_className__2bSQu"}},,function(e,n,t){},function(e,n,t){e.exports={radio:"SuperRadio_radio__1kzJP"}},,,,,,,,function(e,n,t){},function(e,n,t){},,,,,,,,function(e,n,t){"use strict";t.r(n);var c=t(1),a=t.n(c),s=t(12),r=t.n(s),o=(t(31),t(32),t(4)),i=t(10),j=t(3),l=t(6),u=t(11),b=t.n(u),d=t(0),h=function(e){var n=e.red,t=(e.className,Object(l.a)(e,["red","className"])),c=t.disabled?"".concat(b.a.default," ").concat(b.a.disabled):n?"".concat(b.a.default," ").concat(b.a.red):b.a.default;return Object(d.jsx)("button",Object(j.a)({className:c},t))},O=t(19),p=t.n(O),x=function(e){e.type;var n=e.onChange,t=e.onChangeChecked,c=(e.className,e.spanClassName,e.children),a=Object(l.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]);return Object(d.jsxs)("label",{children:[Object(d.jsx)("input",Object(j.a)({type:"checkbox",onChange:function(e){n&&n(e),t&&t(e.currentTarget.checked)},className:p.a.checkbox},a)),c&&Object(d.jsx)("span",{className:p.a.spanClassName,children:c})]})},m=t(20),_=t.n(m),g=t(14),f=t.n(g),N=function(e){e.type;var n=e.onChange,t=e.onChangeText,c=e.onKeyPress,a=e.onEnter,s=e.error,r=(e.className,e.spanClassName,Object(l.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"])),o=s?"".concat(f.a.errorInput," ").concat(f.a.superInput):"".concat(f.a.superInput);return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("input",Object(j.a)({type:"text",onChange:function(e){n&&n(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){c&&c(e),a&&"Enter"===e.key&&a()},className:o,placeholder:s},r))})},C=function(e){e.autoFocus;var n=e.onBlur,t=e.onEnter,a=e.spanProps,s=Object(l.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),r=Object(c.useState)(!1),i=Object(o.a)(r,2),u=i[0],b=i[1],h=a||{},O=h.children,p=h.onDoubleClick,x=(h.className,Object(l.a)(h,["children","onDoubleClick","className"])),m=function(e){b(!0),p&&p(e)},g=_.a.className;return Object(d.jsx)(d.Fragment,{children:u?Object(d.jsx)(N,Object(j.a)({autoFocus:!0,onBlur:function(e){b(!1),n&&n(e)},onEnter:function(){b(!1),t&&t()}},s)):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("img",{onDoubleClick:m,src:"https://i.pinimg.com/originals/7c/ef/ec/7cefec18b132e4f74b4b41e172698230.png",className:_.a.icon,alt:"icon"}),Object(d.jsx)("span",Object(j.a)(Object(j.a)({onDoubleClick:m,className:g},x),{},{children:O||s.value}))]})})},v=t(15),S=t.n(v),k=function(e){var n=e.options,t=e.onChange,c=e.onChangeOption,a=Object(l.a)(e,["options","onChange","onChangeOption"]),s=n?n.map((function(e,n){return Object(d.jsx)("option",{value:e,className:S.a.option,children:e},n)})):[];return Object(d.jsx)("div",{className:S.a.wrapper,children:Object(d.jsx)("select",Object(j.a)(Object(j.a)({onChange:function(e){t&&t(e),c&&c(e.currentTarget.value)}},a),{},{className:S.a.select,children:s}))})},y=t(22),T=t.n(y),E=function(e){e.type;var n=e.onChange,t=e.onChangeRange,c=e.className,a=Object(l.a)(e,["type","onChange","onChangeRange","className"]),s="".concat(T.a.range," ").concat(c||"");return Object(d.jsx)("div",{children:Object(d.jsx)("input",Object(j.a)({type:"range",onChange:function(e){n&&n(e),t&&t(+e.currentTarget.value)},className:s},a))})},I=t(8),F=t.n(I),P=t(23),w=t.n(P),M=function(e){e.type;var n=e.name,t=e.options,c=e.value,a=e.onChange,s=e.onChangeOption,r=Object(l.a)(e,["type","name","options","value","onChange","onChangeOption"]),o=function(e){a&&a(e),s&&s(e.currentTarget.value)},i=t?t.map((function(e,t){return Object(d.jsxs)("label",{children:[Object(d.jsx)("input",Object(j.a)(Object(j.a)({type:"radio",name:n,value:e,onChange:o,checked:e===c},r),{},{className:w.a.radio})),e]},n+"-"+t)})):[];return Object(d.jsx)(d.Fragment,{children:i})},B=["x","y","z"],R=function(){var e=Object(c.useState)(""),n=Object(o.a)(e,2),t=n[0],a=n[1],s=t?"":"error",r=Object(c.useState)(!1),i=Object(o.a)(r,2),j=i[0],l=i[1],u=Object(c.useState)(0),b=Object(o.a)(u,2),O=b[0],p=b[1],m=Object(c.useState)(""),_=Object(o.a)(m,2),g=_[0],f=_[1],v=Object(c.useState)(B[1]),S=Object(o.a)(v,2),y=S[0],T=S[1];return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h2",{style:{textAlign:"center"},children:" TEST "}),Object(d.jsxs)("div",{className:F.a.main,children:[Object(d.jsxs)("div",{className:F.a.column,children:[Object(d.jsx)("h3",{className:F.a.header,children:"\u0418\u043d\u043f\u0443\u0442"}),Object(d.jsx)(N,{value:t,onChangeText:a,onEnter:function(){s?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(t)},error:s}),Object(d.jsx)(N,{})]}),Object(d.jsxs)("div",{className:F.a.column,children:[Object(d.jsx)("h3",{className:F.a.header,children:"\u041a\u043d\u043e\u043f\u043a\u0438 "}),Object(d.jsx)(h,{onClick:function(){return alert("click <default>")},children:" default "}),Object(d.jsx)(h,{red:!0,onClick:function(){return alert("click <delete>")},children:" delete "}),Object(d.jsx)(h,{disabled:!0,children:" disabled "})]}),Object(d.jsxs)("div",{className:F.a.column,children:[Object(d.jsx)("h3",{className:F.a.header,children:"\u0427\u0435\u043a-\u0411\u043e\u043a\u0441 "}),Object(d.jsx)(x,{checked:j,onChangeChecked:l,children:"some text"})]}),Object(d.jsxs)("div",{className:F.a.column,children:[Object(d.jsx)("h3",{className:F.a.header,children:" \u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u0443\u0435\u043c\u043e\u0435 \u043f\u043e\u043b\u0435 "}),Object(d.jsx)("div",{children:Object(d.jsx)(C,{value:g,onChangeText:f,spanProps:{children:g?void 0:"enter text..."}})})]}),Object(d.jsxs)("div",{className:F.a.column,children:[Object(d.jsx)("h3",{className:F.a.header,children:" \u0421\u0435\u043b\u0435\u043a\u0442\u043e\u0440 \u0438 \u0440\u0430\u0434\u0438\u043e-\u043a\u043d\u043e\u043f\u043a\u0430 "}),Object(d.jsx)("div",{children:Object(d.jsx)(M,{name:"radio",options:B,value:g,onChangeOption:T})}),Object(d.jsx)("br",{}),Object(d.jsx)(k,{options:B,value:y,onChangeOption:T})]}),Object(d.jsxs)("div",{className:F.a.column,children:[Object(d.jsx)("h3",{className:F.a.header,children:" \u0414\u0438\u0430\u043f\u0430\u0437\u043e\u043d "}),Object(d.jsxs)("div",{children:[Object(d.jsx)("span",{children:O}),Object(d.jsx)(E,{onChangeRange:function(e){p(e)}})]})]})]})]})},A=function(){return Object(d.jsx)("div",{children:"LOGIN PAGE"})},G=t.p+"static/media/SmoothJauntyBighornedsheep-max-1mb.61c33806.gif",D=t(16),H=t.n(D);var J=function(){return Object(d.jsxs)("div",{className:H.a.container,children:[Object(d.jsxs)("div",{className:H.a.a,children:[Object(d.jsx)("h1",{children:"404"}),Object(d.jsx)("h2",{children:"Ooh shit!"}),Object(d.jsxs)("div",{children:[Object(d.jsx)("span",{children:"You're lost... "}),Object(d.jsx)("br",{}),Object(d.jsx)("span",{children:"back to homepage"})]})]}),Object(d.jsx)("div",{className:H.a.b,children:Object(d.jsx)("img",{src:G,alt:"travolta"})})]})},K=t(2),L=function(){return Object(d.jsx)("div",{children:"PROFILE PAGE"})},Q=function(){return Object(d.jsx)("div",{children:"REGISTRATION PAGE"})},z="/*",U="/test",Z="/login",q="/error404",V="/profile",W="/registration";var Y=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)(K.c,{children:[Object(d.jsx)(K.a,{path:z,element:Object(d.jsx)(R,{})}),Object(d.jsx)(K.a,{path:U,element:Object(d.jsx)(R,{})}),Object(d.jsx)(K.a,{path:Z,element:Object(d.jsx)(A,{})}),Object(d.jsx)(K.a,{path:W,element:Object(d.jsx)(Q,{})}),Object(d.jsx)(K.a,{path:V,element:Object(d.jsx)(L,{})}),Object(d.jsx)(K.a,{path:q,element:Object(d.jsx)(J,{})})]})})},X=t(9),$=t.n(X),ee=function(){var e=Object(c.useState)(!1),n=Object(o.a)(e,2),t=n[0],a=n[1];return Object(d.jsxs)("div",{className:$.a.wrapper,children:[Object(d.jsx)(x,{id:"check-menu",onChangeChecked:function(e){return a(e)}}),Object(d.jsxs)("nav",{className:t?"".concat($.a.mainMenu," ").concat($.a.mainMenuChecked):$.a.mainMenu,children:[Object(d.jsx)(i.b,{to:U,className:$.a.item,children:" test |"}),Object(d.jsx)(i.b,{to:Z,className:$.a.item,children:" login | "}),Object(d.jsx)(i.b,{to:W,className:$.a.item,children:" registration | "}),Object(d.jsx)(i.b,{to:V,className:$.a.item,children:" profile | "}),Object(d.jsx)(i.b,{to:q,className:$.a.item,children:"  error404 "})]})]})};var ne=function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(ee,{}),Object(d.jsx)(Y,{})]})},te=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,41)).then((function(n){var t=n.getCLS,c=n.getFID,a=n.getFCP,s=n.getLCP,r=n.getTTFB;t(e),c(e),a(e),s(e),r(e)}))},ce=t(26),ae=t(17),se=t(25),re=Object(ae.b)({}),oe=Object(ae.c)(re,Object(ae.a)(se.a));window.store=oe,r.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(i.a,{children:Object(d.jsx)(ce.a,{store:oe,children:Object(d.jsx)(ne,{})})})}),document.getElementById("root")),te()}],[[40,1,2]]]);
//# sourceMappingURL=main.f0cdcf9f.chunk.js.map