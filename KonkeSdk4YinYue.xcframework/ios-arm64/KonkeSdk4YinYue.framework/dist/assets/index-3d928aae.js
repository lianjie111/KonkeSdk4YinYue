import{m as C,y as E,x as L,z as w,q as B,u as h,aE as N,B as v,aF as R,N as y,a0 as F,a as r,U,ad as b,aC as _,w as q}from"./_plugin-vue_export-helper-ae94e834.js";import{u as z}from"./use-expose-833097fe.js";import{u as H}from"./use-tab-status-ea9b54fd.js";import{L as I}from"./index-5198b2b7.js";const[M,o,V]=C("list"),j={error:Boolean,offset:E(300),loading:Boolean,disabled:Boolean,finished:Boolean,errorText:String,direction:L("down"),loadingText:String,finishedText:String,immediateCheck:w};var A=B({name:M,props:j,emits:["load","update:error","update:loading"],setup(e,{emit:c,slots:a}){const d=h(e.loading),u=h(),g=h(),l=H(),m=N(u),i=()=>{U(()=>{if(d.value||e.finished||e.disabled||e.error||(l==null?void 0:l.value)===!1)return;const{direction:t}=e,s=+e.offset,n=b(m);if(!n.height||_(u))return;let f=!1;const x=b(g);t==="up"?f=n.top-x.top<=s:f=x.bottom-n.bottom<=s,f&&(d.value=!0,c("update:loading",!0),c("load"))})},T=()=>{if(e.finished){const t=a.finished?a.finished():e.finishedText;if(t)return r("div",{class:o("finished-text")},[t])}},k=()=>{c("update:error",!1),i()},P=()=>{if(e.error){const t=a.error?a.error():e.errorText;if(t)return r("div",{role:"button",class:o("error-text"),tabindex:0,onClick:k},[t])}},S=()=>{if(d.value&&!e.finished&&!e.disabled)return r("div",{class:o("loading")},[a.loading?a.loading():r(I,{class:o("loading-icon")},{default:()=>[e.loadingText||V("loading")]})])};return v(()=>[e.loading,e.finished,e.error],i),l&&v(l,t=>{t&&i()}),R(()=>{d.value=e.loading}),y(()=>{e.immediateCheck&&i()}),z({check:i}),F("scroll",i,{target:m,passive:!0}),()=>{var t;const s=(t=a.default)==null?void 0:t.call(a),n=r("div",{ref:g,class:o("placeholder")},null);return r("div",{ref:u,role:"feed",class:o(),"aria-busy":d.value},[e.direction==="down"?s:n,S(),T(),P(),e.direction==="up"?s:n])}}});const O=q(A);export{O as L};
