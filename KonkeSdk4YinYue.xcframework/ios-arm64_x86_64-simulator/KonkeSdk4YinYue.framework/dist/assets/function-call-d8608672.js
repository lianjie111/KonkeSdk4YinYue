import{m as B,q as I,B as v,N as T,ar as N,a as l,G as O,Q as M,x as g,s as h,as as z,S as w,I as L,X as j,i as U,aa as V,W as k,V as q,aj as A,u as E,at as D}from"./_plugin-vue_export-helper-ae94e834.js";import{u as G}from"./use-expose-833097fe.js";import{P as H}from"./index-c49f2c8f.js";import{L as Q}from"./index-5198b2b7.js";let d=0;function W(e){e?(d||document.body.classList.add("van-toast--unclickable"),d++):d&&(d--,d||document.body.classList.remove("van-toast--unclickable"))}const[X,c]=B("toast"),_=["show","overlay","teleport","transition","overlayClass","overlayStyle","closeOnClickOverlay"],F={icon:String,show:Boolean,type:g("text"),overlay:Boolean,message:h,iconSize:h,duration:z(2e3),position:g("middle"),teleport:[String,Object],wordBreak:String,className:w,iconPrefix:String,transition:g("van-fade"),loadingType:String,forbidClick:Boolean,overlayClass:w,overlayStyle:Object,closeOnClick:Boolean,closeOnClickOverlay:Boolean};var J=I({name:X,props:F,emits:["update:show"],setup(e,{emit:n,slots:t}){let i,o=!1;const r=()=>{const a=e.show&&e.forbidClick;o!==a&&(o=a,W(o))},u=a=>n("update:show",a),y=()=>{e.closeOnClick&&u(!1)},f=()=>clearTimeout(i),m=()=>{const{icon:a,type:s,iconSize:C,iconPrefix:P,loadingType:x}=e;if(a||s==="success"||s==="fail")return l(L,{name:a||s,size:C,class:c("icon"),classPrefix:P},null);if(s==="loading")return l(Q,{class:c("loading"),size:C,type:x},null)},S=()=>{const{type:a,message:s}=e;if(t.message)return l("div",{class:c("text")},[t.message()]);if(j(s)&&s!=="")return a==="html"?l("div",{key:0,class:c("text"),innerHTML:String(s)},null):l("div",{class:c("text")},[s])};return v(()=>[e.show,e.forbidClick],r),v(()=>[e.show,e.type,e.message,e.duration],()=>{f(),e.show&&e.duration>0&&(i=setTimeout(()=>{u(!1)},e.duration))}),T(r),N(r),()=>l(H,O({class:[c([e.position,e.wordBreak==="normal"?"break-normal":e.wordBreak,{[e.type]:!e.icon}]),e.className],lockScroll:!1,onClick:y,onClosed:f,"onUpdate:show":u},M(e,_)),{default:()=>[m(),S()]})}});function K(){const e=V({show:!1}),n=o=>{e.show=o},t=o=>{k(e,o,{transitionAppear:!0}),n(!0)},i=()=>n(!1);return G({open:t,close:i,toggle:n}),{open:t,close:i,state:e,toggle:n}}function R(e){const n=U(e),t=document.createElement("div");return document.body.appendChild(t),{instance:n.mount(t),unmount(){n.unmount(),document.body.removeChild(t)}}}const Y={icon:"",type:"text",message:"",className:"",overlay:!1,onClose:void 0,onOpened:void 0,duration:2e3,teleport:"body",iconSize:void 0,iconPrefix:void 0,position:"middle",transition:"van-fade",forbidClick:!1,loadingType:void 0,overlayClass:"",overlayStyle:void 0,closeOnClick:!1,closeOnClickOverlay:!1};let p=[],Z=!1,b=k({},Y);const $=new Map;function ee(e){return A(e)?e:{message:e}}function te(){const{instance:e,unmount:n}=R({setup(){const t=E(""),{open:i,state:o,close:r,toggle:u}=K(),y=()=>{},f=()=>l(J,O(o,{onClosed:y,"onUpdate:show":u}),null);return v(t,m=>{o.message=m}),D().render=f,{open:i,close:r,message:t}}});return e}function ne(){if(!p.length||Z){const e=te();p.push(e)}return p[p.length-1]}function ce(e={}){if(!q)return{};const n=ne(),t=ee(e);return n.open(k({},b,$.get(t.type||b.type),t)),n}export{ce as a,R as m,J as s,K as u};
