"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[146],{146:(e,n,t)=>{t.r(n),t.d(n,{default:()=>k});var r=t(420),s=t(52),a=t(184);const c=e=>{let{id:n,name:t,number:c}=e;const o=(0,r.I0)();return(0,a.jsxs)("li",{children:[t," : ",c.slice(0,13),(0,a.jsx)("button",{type:"button",onClick:()=>o((0,s.ku)(n)),children:"Delete"})]},n)};var o=t(553);const l=e=>e.contacts.contactItems,i=e=>e.filter.filterQuery,u=e=>e.contacts.isLoading,d=e=>e.contacts.error,m=(0,o.P1)([l,i],((e,n)=>e.filter((e=>{let{name:t,number:r}=e;return t.toLowerCase().includes(n.toLowerCase().trim())||r.includes(n.toLowerCase().trim())}))));var h=t(579);const x=()=>{const e=(0,r.v9)(m),n=(0,r.v9)(u);return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("ul",{children:[n&&(0,a.jsx)(h.Z,{}),!n&&e.map((e=>{let{id:n,name:t,number:r}=e;return(0,a.jsx)(c,{id:n,name:t,number:r},n)}))]})})},j=e=>{let{children:n}=e;return(0,a.jsx)("div",{children:n})};var b=t(808);const p=()=>{const e=(0,r.I0)(),n=(0,r.v9)(i);return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("label",{children:[(0,a.jsx)("p",{children:"Find contact"}),(0,a.jsx)("input",{type:"text",name:"filter",value:n,onChange:n=>{let{currentTarget:{value:t}}=n;const r=t.toLowerCase();e((0,b.M6)(r))},placeholder:"Enter your contact"})]})})},v=e=>{let{message:n}=e;return(0,a.jsx)("h2",{children:n})};var g=t(791);let y=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce(((e,n)=>e+=(n&=63)<36?n.toString(36):n<62?(n-26).toString(36).toUpperCase():n>62?"-":"_"),"")};var f=t(686);const C=()=>{const[e,n]=(0,g.useState)({name:"",number:""}),t=(0,r.v9)(l),c=(0,r.I0)(),o=t=>{const{name:r,value:s}=t.target;n({...e,[r]:s})};return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("form",{onSubmit:r=>{r.preventDefault();t.some((n=>n.name.toLowerCase().trim()===e.name.toLowerCase().trim()||n.number===e.number))?f.Notify.warning("".concat(e.name," already EXIST.")):(c((0,s.G3)({name:e.name,number:e.number,id:y()})),n({name:"",number:""}))},children:[(0,a.jsx)("p",{children:"Add contact"}),(0,a.jsxs)("label",{children:[(0,a.jsx)("p",{children:"Name"}),(0,a.jsx)("input",{type:"text",name:"name",value:e.name,onChange:o,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",required:!0})]}),(0,a.jsxs)("label",{children:[(0,a.jsx)("p",{children:"Number"}),(0,a.jsx)("input",{type:"tel",name:"number",value:e.number,onChange:o,pattern:"\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}",required:!0})]}),(0,a.jsx)("button",{type:"submit",children:"Add contact"})]})})};var w=t(294);const k=()=>{const e=(0,r.I0)(),n=(0,r.v9)(l),t=(0,r.v9)(u),c=(0,r.v9)(d);(0,g.useEffect)((()=>{e((0,s.m$)())}),[e]);const o=Array.isArray(n)&&n.length>0;return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(j,{children:(0,a.jsxs)(w.Z,{title:"Phonebook contacts",children:[(0,a.jsx)(C,{}),n.length>0?(0,a.jsx)(p,{}):(0,a.jsx)(v,{message:"Please add your contact!"}),null!==c&&(0,a.jsx)("p",{children:c}),o&&(0,a.jsx)(x,{}),t&&(0,a.jsx)(h.Z,{})]})})})}}}]);
//# sourceMappingURL=146.d0425b79.chunk.js.map