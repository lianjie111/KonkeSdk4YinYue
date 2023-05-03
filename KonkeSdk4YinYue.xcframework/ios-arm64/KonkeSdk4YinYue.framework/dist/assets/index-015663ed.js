import{m as K,z as E,s as U,y as _,q as j,u as V,aa as F,M as re,A as d,B as $,aB as ve,N as G,aw as fe,av as de,P as he,a0 as ge,a as A,aC as q,U as J,ae as me,af as we,aD as M,v as ye,Y as B,w as Q,$ as xe}from"./_plugin-vue_export-helper-ae94e834.js";import{u as be}from"./use-touch-b8f7fc8d.js";import{u as Z}from"./use-expose-833097fe.js";import{o as pe}from"./on-popup-reopen-34d1e964.js";const[ee,I]=K("swipe"),Se={loop:E,width:U,height:U,vertical:Boolean,autoplay:_(0),duration:_(500),touchable:E,lazyRender:Boolean,initialSwipe:_(0),indicatorColor:String,showIndicators:E,stopPropagation:E},te=Symbol(ee);var Te=j({name:ee,props:Se,emits:["change","dragStart","dragEnd"],setup(a,{emit:x,slots:g}){const u=V(),h=V(),t=F({rect:null,width:0,height:0,offset:0,active:0,swiping:!1});let b=!1;const r=be(),{children:m,linkChildren:s}=re(te),i=d(()=>m.length),l=d(()=>t[a.vertical?"height":"width"]),v=d(()=>a.vertical?r.deltaY.value:r.deltaX.value),y=d(()=>t.rect?(a.vertical?t.rect.height:t.rect.width)-l.value*i.value:0),k=d(()=>l.value?Math.ceil(Math.abs(y.value)/l.value):i.value),D=d(()=>i.value*l.value),p=d(()=>(t.active+i.value)%i.value),R=d(()=>{const e=a.vertical?"vertical":"horizontal";return r.direction.value===e}),ae=d(()=>{const e={transitionDuration:`${t.swiping?0:a.duration}ms`,transform:`translate${a.vertical?"Y":"X"}(${t.offset}px)`};if(l.value){const o=a.vertical?"height":"width",n=a.vertical?"width":"height";e[o]=`${D.value}px`,e[n]=a[n]?`${a[n]}px`:""}return e}),ie=e=>{const{active:o}=t;return e?a.loop?B(o+e,-1,i.value):B(o+e,0,k.value):o},Y=(e,o=0)=>{let n=e*l.value;a.loop||(n=Math.min(n,-y.value));let f=o-n;return a.loop||(f=B(f,y.value,0)),f},w=({pace:e=0,offset:o=0,emitChange:n})=>{if(i.value<=1)return;const{active:f}=t,c=ie(e),C=Y(c,o);if(a.loop){if(m[0]&&C!==y.value){const O=C<y.value;m[0].setOffset(O?D.value:0)}if(m[i.value-1]&&C!==0){const O=C>0;m[i.value-1].setOffset(O?-D.value:0)}}t.active=c,t.offset=C,n&&c!==f&&x("change",p.value)},z=()=>{t.swiping=!0,t.active<=-1?w({pace:i.value}):t.active>=i.value&&w({pace:-i.value})},ne=()=>{z(),r.reset(),M(()=>{t.swiping=!1,w({pace:-1,emitChange:!0})})},N=()=>{z(),r.reset(),M(()=>{t.swiping=!1,w({pace:1,emitChange:!0})})};let X;const T=()=>clearTimeout(X),P=()=>{T(),+a.autoplay>0&&i.value>1&&(X=setTimeout(()=>{N(),P()},+a.autoplay))},S=(e=+a.initialSwipe)=>{if(!u.value)return;const o=()=>{var n,f;if(!q(u)){const c={width:u.value.offsetWidth,height:u.value.offsetHeight};t.rect=c,t.width=+((n=a.width)!=null?n:c.width),t.height=+((f=a.height)!=null?f:c.height)}i.value&&(e=Math.min(i.value-1,e),e===-1&&(e=i.value-1)),t.active=e,t.swiping=!0,t.offset=Y(e),m.forEach(c=>{c.setOffset(0)}),P()};q(u)?J().then(o):o()},H=()=>S(t.active);let W;const oe=e=>{!a.touchable||e.touches.length>1||(r.start(e),b=!1,W=Date.now(),T(),z())},le=e=>{a.touchable&&t.swiping&&(r.move(e),R.value&&(!a.loop&&(t.active===0&&v.value>0||t.active===i.value-1&&v.value<0)||(ye(e,a.stopPropagation),w({offset:v.value}),b||(x("dragStart",{index:p.value}),b=!0))))},L=()=>{if(!a.touchable||!t.swiping)return;const e=Date.now()-W,o=v.value/e;if((Math.abs(o)>.25||Math.abs(v.value)>l.value/2)&&R.value){const f=a.vertical?r.offsetY.value:r.offsetX.value;let c=0;a.loop?c=f>0?v.value>0?-1:1:0:c=-Math[v.value>0?"ceil":"floor"](v.value/l.value),w({pace:c,emitChange:!0})}else v.value&&w({pace:0});b=!1,t.swiping=!1,x("dragEnd",{index:p.value}),P()},se=(e,o={})=>{z(),r.reset(),M(()=>{let n;a.loop&&e===i.value?n=t.active===0?0:e:n=e%i.value,o.immediate?M(()=>{t.swiping=!1}):t.swiping=!1,w({pace:n-t.active,emitChange:!0})})},ce=(e,o)=>{const n=o===p.value,f=n?{backgroundColor:a.indicatorColor}:void 0;return A("i",{style:f,class:I("indicator",{active:n})},null)},ue=()=>{if(g.indicator)return g.indicator({active:p.value,total:i.value});if(a.showIndicators&&i.value>1)return A("div",{class:I("indicators",{vertical:a.vertical})},[Array(i.value).fill("").map(ce)])};return Z({prev:ne,next:N,state:t,resize:H,swipeTo:se}),s({size:l,props:a,count:i,activeIndicator:p}),$(()=>a.initialSwipe,e=>S(+e)),$(i,()=>S(t.active)),$(()=>a.autoplay,P),$([me,we,()=>a.width,()=>a.height],H),$(ve(),e=>{e==="visible"?P():T()}),G(S),fe(()=>S(t.active)),pe(()=>S(t.active)),de(T),he(T),ge("touchmove",le,{target:h}),()=>{var e;return A("div",{ref:u,class:I()},[A("div",{ref:h,style:ae.value,class:I("track",{vertical:a.vertical}),onTouchstartPassive:oe,onTouchend:L,onTouchcancel:L},[(e=g.default)==null?void 0:e.call(g)]),ue()])}}});const Ie=Q(Te),[Pe,Ce]=K("swipe-item");var $e=j({name:Pe,setup(a,{slots:x}){let g;const u=F({offset:0,inited:!1,mounted:!1}),{parent:h,index:t}=xe(te);if(!h)return;const b=d(()=>{const s={},{vertical:i}=h.props;return h.size.value&&(s[i?"height":"width"]=`${h.size.value}px`),u.offset&&(s.transform=`translate${i?"Y":"X"}(${u.offset}px)`),s}),r=d(()=>{const{loop:s,lazyRender:i}=h.props;if(!i||g)return!0;if(!u.mounted)return!1;const l=h.activeIndicator.value,v=h.count.value-1,y=l===0&&s?v:l-1,k=l===v&&s?0:l+1;return g=t.value===l||t.value===y||t.value===k,g}),m=s=>{u.offset=s};return G(()=>{J(()=>{u.mounted=!0})}),Z({setOffset:m}),()=>{var s;return A("div",{class:Ce(),style:b.value},[r.value?(s=x.default)==null?void 0:s.call(x):null])}}});const ke=Q($e);export{Ie as S,ke as a};
