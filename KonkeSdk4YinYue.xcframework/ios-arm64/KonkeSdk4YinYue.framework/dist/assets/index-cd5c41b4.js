import{m as S,a as n,q as V,s as K,u as I,v as O,x as C,y as D,z as v,A as k,B as M,C as E,D as N,E as _,G as $,H as R,J as U,T as j,K as F,w as H,L as q}from"./_plugin-vue_export-helper-ae94e834.js";import{u as G}from"./use-touch-b8f7fc8d.js";import{L as J}from"./index-5198b2b7.js";import{H as Z,B as Q,a as W}from"./constant-eb256a74.js";const[X,w]=S("key"),Y=n("svg",{class:w("collapse-icon"),viewBox:"0 0 30 24"},[n("path",{d:"M26 13h-2v2h2v-2zm-8-3h2V8h-2v2zm2-4h2V4h-2v2zm2 4h4V4h-2v4h-2v2zm-7 14 3-3h-6l3 3zM6 13H4v2h2v-2zm16 0H8v2h14v-2zm-12-3h2V8h-2v2zM28 0l1 1 1 1v15l-1 2H1l-1-2V2l1-1 1-1zm0 2H2v15h26V2zM6 4v2H4V4zm10 2h2V4h-2v2zM8 9v1H4V8zm8 0v1h-2V8zm-6-5v2H8V4zm4 0v2h-2V4z",fill:"currentColor"},null)]),p=n("svg",{class:w("delete-icon"),viewBox:"0 0 32 22"},[n("path",{d:"M28 0a4 4 0 0 1 4 4v14a4 4 0 0 1-4 4H10.4a2 2 0 0 1-1.4-.6L1 13.1c-.6-.5-.9-1.3-.9-2 0-1 .3-1.7.9-2.2L9 .6a2 2 0 0 1 1.4-.6zm0 2H10.4l-8.2 8.3a1 1 0 0 0-.3.7c0 .3.1.5.3.7l8.2 8.4H28a2 2 0 0 0 2-2V4c0-1.1-.9-2-2-2zm-5 4a1 1 0 0 1 .7.3 1 1 0 0 1 0 1.4L20.4 11l3.3 3.3c.2.2.3.5.3.7 0 .3-.1.5-.3.7a1 1 0 0 1-.7.3 1 1 0 0 1-.7-.3L19 12.4l-3.4 3.3a1 1 0 0 1-.6.3 1 1 0 0 1-.7-.3 1 1 0 0 1-.3-.7c0-.2.1-.5.3-.7l3.3-3.3-3.3-3.3A1 1 0 0 1 14 7c0-.3.1-.5.3-.7A1 1 0 0 1 15 6a1 1 0 0 1 .6.3L19 9.6l3.3-3.3A1 1 0 0 1 23 6z",fill:"currentColor"},null)]);var P=V({name:X,props:{type:String,text:K,color:String,wider:Boolean,large:Boolean,loading:Boolean},emits:["press"],setup(e,{emit:o,slots:i}){const c=I(!1),l=G(),f=a=>{l.start(a),c.value=!0},m=a=>{l.move(a),l.direction.value&&(c.value=!1)},d=a=>{c.value&&(i.default||O(a),c.value=!1,o("press",e.text,e.type))},g=()=>{if(e.loading)return n(J,{class:w("loading-icon")},null);const a=i.default?i.default():e.text;switch(e.type){case"delete":return a||p;case"extra":return a||Y;default:return a}};return()=>n("div",{class:w("wrapper",{wider:e.wider}),onTouchstartPassive:f,onTouchmovePassive:m,onTouchend:d,onTouchcancel:d},[n("div",{role:"button",tabindex:0,class:w([e.color,{large:e.large,active:c.value,delete:e.type==="delete"}])},[g()])])}});const[ee,h]=S("number-keyboard"),te={show:Boolean,title:String,theme:C("default"),zIndex:K,teleport:[String,Object],maxlength:D(1/0),modelValue:C(""),transition:v,blurOnClose:v,showDeleteKey:v,randomKeyOrder:Boolean,closeButtonText:String,deleteButtonText:String,closeButtonLoading:Boolean,hideOnClickOutside:v,safeAreaInsetBottom:v,extraKey:{type:[String,Array],default:""}};function ne(e){for(let o=e.length-1;o>0;o--){const i=Math.floor(Math.random()*(o+1)),c=e[o];e[o]=e[i],e[i]=c}return e}var oe=V({name:ee,inheritAttrs:!1,props:te,emits:["show","hide","blur","input","close","delete","update:modelValue"],setup(e,{emit:o,slots:i,attrs:c}){const l=I(),f=()=>{const t=Array(9).fill("").map((s,r)=>({text:r+1}));return e.randomKeyOrder&&ne(t),t},m=()=>[...f(),{text:e.extraKey,type:"extra"},{text:0},{text:e.showDeleteKey?e.deleteButtonText:"",type:e.showDeleteKey?"delete":""}],d=()=>{const t=f(),{extraKey:s}=e,r=Array.isArray(s)?s:[s];return r.length===1?t.push({text:0,wider:!0},{text:r[0],type:"extra"}):r.length===2&&t.push({text:r[0],type:"extra"},{text:0},{text:r[1],type:"extra"}),t},g=k(()=>e.theme==="custom"?d():m()),a=()=>{e.show&&o("blur")},u=()=>{o("close"),e.blurOnClose&&a()},B=()=>o(e.show?"show":"hide"),x=(t,s)=>{if(t===""){s==="extra"&&a();return}const r=e.modelValue;s==="delete"?(o("delete"),o("update:modelValue",r.slice(0,r.length-1))):s==="close"?u():r.length<+e.maxlength&&(o("input",t),o("update:modelValue",r+t))},T=()=>{const{title:t,theme:s,closeButtonText:r}=e,z=i["title-left"],A=r&&s==="default";if(t||A||z)return n("div",{class:h("header")},[z&&n("span",{class:h("title-left")},[z()]),t&&n("h2",{class:h("title")},[t]),A&&n("button",{type:"button",class:[h("close"),Z],onClick:u},[r])])},b=()=>g.value.map(t=>{const s={};return t.type==="delete"&&(s.default=i.delete),t.type==="extra"&&(s.default=i["extra-key"]),n(P,{key:t.text,text:t.text,type:t.type,wider:t.wider,color:t.color,onPress:x},s)}),L=()=>{if(e.theme==="custom")return n("div",{class:h("sidebar")},[e.showDeleteKey&&n(P,{large:!0,text:e.deleteButtonText,type:"delete",onPress:x},{delete:i.delete}),n(P,{large:!0,text:e.closeButtonText,type:"close",color:"blue",loading:e.closeButtonLoading,onPress:x},null)])};return M(()=>e.show,t=>{e.transition||o(t?"show":"hide")}),e.hideOnClickOutside&&E(l,a,{eventName:"touchstart"}),()=>{const t=T(),s=n(j,{name:e.transition?"van-slide-up":""},{default:()=>[N(n("div",$({ref:l,style:R(e.zIndex),class:h({unfit:!e.safeAreaInsetBottom,"with-title":!!t}),onAnimationend:B,onTouchstartPassive:U},c),[t,n("div",{class:h("body")},[n("div",{class:h("keys")},[b()]),L()])]),[[_,e.show]])]});return e.teleport?n(F,{to:e.teleport},{default:()=>[s]}):s}}});const he=H(oe),[se,y]=S("password-input"),le={info:String,mask:v,value:C(""),gutter:K,length:D(6),focused:Boolean,errorInfo:String};var ae=V({name:se,props:le,emits:["focus"],setup(e,{emit:o}){const i=l=>{l.stopPropagation(),o("focus",l)},c=()=>{const l=[],{mask:f,value:m,gutter:d,focused:g}=e,a=+e.length;for(let u=0;u<a;u++){const B=m[u],x=u!==0&&!d,T=g&&u===m.length;let b;u!==0&&d&&(b={marginLeft:q(d)}),l.push(n("li",{class:[{[W]:x},y("item",{focus:T})],style:b},[f?n("i",{style:{visibility:B?"visible":"hidden"}},null):B,T&&n("div",{class:y("cursor")},null)]))}return l};return()=>{const l=e.errorInfo||e.info;return n("div",{class:y()},[n("ul",{class:[y("security"),{[Q]:!e.gutter}],onTouchstartPassive:i},[c()]),l&&n("div",{class:y(e.errorInfo?"error-info":"info")},[l])])}}});const fe=H(ae);export{he as N,fe as P};
