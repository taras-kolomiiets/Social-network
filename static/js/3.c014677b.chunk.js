(this["webpackJsonpsocial-network-react-app"]=this["webpackJsonpsocial-network-react-app"]||[]).push([[3],{297:function(e,s,a){e.exports={dialogs:"Dialogs_dialogs__2wi78",dialogsItems:"Dialogs_dialogsItems__1Tuek",active:"Dialogs_active__POsrh",messages:"Dialogs_messages__1IqwW",message:"Dialogs_message__1lG8k"}},298:function(e,s,a){"use strict";a.r(s);var i=a(11),t=a(9),n=a(124),c=a(102),d=(a(1),a(297)),o=a.n(d),r=a(14),l=a(0),g=function(e){var s="/dialogs/"+e.id;return Object(l.jsx)("div",{className:o.a.dialog+" "+o.a.active,children:Object(l.jsx)(r.b,{to:s,children:e.name})})},j=function(e){return Object(l.jsx)("div",{children:Object(l.jsx)("div",{className:o.a.dialog,children:e.message})})},b=a(125),m=a(126),u=a(39),O=a(35),h=Object(O.a)(100),x=Object(m.a)({form:"dialogAddMessageForm"})((function(e){return Object(l.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(l.jsx)("div",{children:Object(l.jsx)(b.a,{component:u.b,validate:[O.b,h],name:"newMessageBody",placeholder:"Enter your message"})}),Object(l.jsx)("div",{children:Object(l.jsx)("button",{children:"Add message"})})]})})),v=function(e){var s=e.dialogsPage,a=s.dialogs.map((function(e){return Object(l.jsx)(g,{name:e.name,id:e.id},e.id)})),i=s.messages.map((function(e){return Object(l.jsx)(j,{message:e.message},e.id)}));return Object(l.jsxs)("div",{className:o.a.dialogs,children:[Object(l.jsx)("div",{className:o.a.dialogsItems,children:a}),Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:o.a.messages,children:i}),Object(l.jsx)(x,{onSubmit:function(s){e.sendMessage(s.newMessageBody)}})]})]})};s.default=Object(t.d)(Object(i.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{sendMessage:function(s){e(Object(c.b)(s))}}})),n.a)(v)}}]);
//# sourceMappingURL=3.c014677b.chunk.js.map