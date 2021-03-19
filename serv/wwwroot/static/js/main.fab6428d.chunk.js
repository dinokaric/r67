(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{57:function(t,e,n){"use strict";n.r(e);var c=n(1),o=n.n(c),a=n(26),r=n.n(a),s=n(28),i=n(2),l=n(10),j=n(11),b=n.n(j),d="http://3.65.206.32:7314/api";var u=new function(){this.getAllNotes=function(){return b.a.get("".concat(d,"/note"))},this.deleteNoteById=function(t){return b.a.delete("".concat(d,"/note/").concat(t))},this.getNoteById=function(t){return b.a.get("".concat(d,"/note/").concat(t))},this.updateNoteById=function(t,e){return b.a.put("".concat(d,"/note/").concat(t),e)},this.createNote=function(t){return b.a.post("".concat(d,"/note/"),t)}},h=n(0),O=function(t){return Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{scope:"row",children:t.note._id}),Object(h.jsx)("td",{children:t.note.title}),Object(h.jsx)("td",{children:t.note.body}),Object(h.jsx)("td",{children:Object(h.jsx)("button",{type:"button",className:"btn btn-primary",onClick:function(){return t.onEditClick(t.note._id)},children:"Edit"})}),Object(h.jsx)("td",{children:Object(h.jsx)("button",{type:"button",className:"btn btn-danger",onClick:function(){return t.onDeleteClick(t.note._id)},children:"Delete"})})]})};var f=function(){var t=Object(c.useState)([]),e=Object(l.a)(t,2),n=e[0],o=e[1],a=Object(i.f)();Object(c.useEffect)((function(){u.getAllNotes().then((function(t){o(t.data)}))}),[]);var r=function(t){console.log("delete item "+t),u.deleteNoteById(t).then((function(e){o(n.filter((function(e){return e._id!==t}))),alert("deleted")}))},s=function(t){a.push("/edit/".concat(t))};return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"All notes..."}),Object(h.jsx)("button",{type:"button",className:"btn btn-primary",onClick:function(){return a.push("/new")},children:"Create new note"}),Object(h.jsxs)("table",{className:"table",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{scope:"col",children:"#"}),Object(h.jsx)("th",{scope:"col",children:"Title"}),Object(h.jsx)("th",{scope:"col",children:"Body"}),Object(h.jsx)("th",{scope:"col"}),Object(h.jsx)("th",{scope:"col"})]})}),Object(h.jsx)("tbody",{children:n.map((function(t){return Object(h.jsx)(O,{note:t,onDeleteClick:r,onEditClick:s},t._id)}))})]})]})},p=n(8);var x=function(){var t=Object(i.g)().id,e=Object(c.useState)({}),n=Object(l.a)(e,2),o=n[0],a=n[1],r=Object(i.f)();return Object(c.useEffect)((function(){u.getNoteById(t).then((function(t){a(t.data)}))}),[]),Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("form",{children:[Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{children:"Title"}),Object(h.jsx)("input",{type:"text",className:"form-control",value:o.title||"",onChange:function(t){a(Object(p.a)(Object(p.a)({},o),{},{title:t.target.value}))}})]}),Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{children:"Body"}),Object(h.jsx)("textarea",{className:"form-control",rows:"3",value:o.body||"",onChange:function(t){a(Object(p.a)(Object(p.a)({},o),{},{body:t.target.value}))}})]}),Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("button",{type:"button",className:"btn btn-primary",onClick:function(){u.updateNoteById(o._id,o).then((function(t){alert("Saved"),r.push("/")}))},children:"Save changes"}),Object(h.jsx)("button",{type:"button",className:"btn btn-secondary",onClick:function(){r.push("/")},children:"Discard"})]})]})})};var m=function(){var t=Object(c.useState)({}),e=Object(l.a)(t,2),n=e[0],o=e[1],a=Object(i.f)();return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("form",{children:[Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{children:"Title"}),Object(h.jsx)("input",{type:"text",className:"form-control",value:n.title||"",onChange:function(t){o(Object(p.a)(Object(p.a)({},n),{},{title:t.target.value}))}})]}),Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{children:"Body"}),Object(h.jsx)("textarea",{className:"form-control",rows:"3",value:n.body||"",onChange:function(t){o(Object(p.a)(Object(p.a)({},n),{},{body:t.target.value}))}})]}),Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("button",{type:"button",className:"btn btn-primary",onClick:function(){u.createNote(n).then((function(t){alert("Saved"),a.push("/")}))},children:"Save"}),Object(h.jsx)("button",{type:"button",className:"btn btn-secondary",onClick:function(){a.push("/")},children:"Discard"})]})]})})};var y=function(){return Object(h.jsx)(s.a,{children:Object(h.jsxs)(i.c,{children:[Object(h.jsx)(i.a,{path:"/edit/:id",component:x}),Object(h.jsx)(i.a,{path:"/new",component:m}),Object(h.jsx)(i.a,{component:f})]})})};r.a.render(Object(h.jsx)(o.a.StrictMode,{children:Object(h.jsx)(y,{})}),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.fab6428d.chunk.js.map