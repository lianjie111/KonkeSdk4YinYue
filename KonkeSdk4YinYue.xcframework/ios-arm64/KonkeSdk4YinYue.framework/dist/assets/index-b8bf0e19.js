import{m as B,q as P,M as O,a as c,s as C,z as f,v as M,w as F,F as G,G as $}from"./_plugin-vue_export-helper-ae94e834.js";import{u as x}from"./use-expose-833097fe.js";import{F as N,b as R}from"./constant-eb256a74.js";const[q,D]=B("form"),I={colon:Boolean,disabled:Boolean,readonly:Boolean,showError:Boolean,labelWidth:C,labelAlign:String,inputAlign:String,scrollToError:Boolean,validateFirst:Boolean,submitOnEnter:f,showErrorMessage:f,errorMessageAlign:String,validateTrigger:{type:[String,Array],default:"onBlur"}};var j=P({name:q,props:I,emits:["submit","failed"],setup(r,{emit:a,slots:u}){const{children:l,linkChildren:d}=O(N),o=e=>e?l.filter(t=>e.includes(t.name)):l,S=e=>new Promise((t,n)=>{const s=[];o(e).reduce((y,A)=>y.then(()=>{if(!s.length)return A.validate().then(p=>{p&&s.push(p)})}),Promise.resolve()).then(()=>{s.length?n(s):t()})}),E=e=>new Promise((t,n)=>{const s=o(e);Promise.all(s.map(i=>i.validate())).then(i=>{i=i.filter(Boolean),i.length?n(i):t()})}),w=e=>{const t=l.find(n=>n.name===e);return t?new Promise((n,s)=>{t.validate().then(i=>{i?s(i):n()})}):Promise.reject()},m=e=>typeof e=="string"?w(e):r.validateFirst?S(e):E(e),T=e=>{typeof e=="string"&&(e=[e]),o(e).forEach(n=>{n.resetValidation()})},V=()=>l.reduce((e,t)=>(e[t.name]=t.getValidationStatus(),e),{}),g=(e,t)=>{l.some(n=>n.name===e?(n.$el.scrollIntoView(t),!0):!1)},v=()=>l.reduce((e,t)=>(t.name!==void 0&&(e[t.name]=t.formValue.value),e),{}),h=()=>{const e=v();m().then(()=>a("submit",e)).catch(t=>{a("failed",{values:e,errors:t}),r.scrollToError&&t[0].name&&g(t[0].name)})},_=e=>{M(e),h()};return d({props:r}),x({submit:h,validate:m,getValues:v,scrollToField:g,resetValidation:T,getValidationStatus:V}),()=>{var e;return c("form",{class:D(),onSubmit:_},[(e=u.default)==null?void 0:e.call(u)])}}});const J=F(j),[k,b]=B("cell-group"),z={title:String,inset:Boolean,border:f};var K=P({name:k,inheritAttrs:!1,props:z,setup(r,{slots:a,attrs:u}){const l=()=>{var o;return c("div",$({class:[b({inset:r.inset}),{[R]:r.border&&!r.inset}]},u),[(o=a.default)==null?void 0:o.call(a)])},d=()=>c("div",{class:b("title",{inset:r.inset})},[a.title?a.title():r.title]);return()=>r.title||a.title?c(G,null,[d(),l()]):l()}});const L=F(K);export{L as C,J as F};
