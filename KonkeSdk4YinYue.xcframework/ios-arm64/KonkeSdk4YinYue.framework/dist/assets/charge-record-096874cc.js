import{_ as M,c as d,a as _,b as o,d as u,o as c,F as L,r as v,j as T,t as a,i as k}from"./_plugin-vue_export-helper-ae94e834.js";import{T as C,a as S}from"./index-229bfbdd.js";import"./index-015663ed.js";import"./index-5198b2b7.js";import{P as Y}from"./index-ca2a2be7.js";import{_ as w}from"./navbar-dd7c7647.js";import{_ as j}from"./safe-area-top-6391331c.js";import{C as G}from"./charge_coin_icon-3dd00476.js";import{A as x}from"./api-3777ac7b.js";import{d as R}from"./dayjs.min-40a0aa38.js";import"./use-id-b8b960f0.js";import"./use-expose-833097fe.js";import"./use-route-fa444ad9.js";import"./use-tab-status-ea9b54fd.js";import"./on-popup-reopen-34d1e964.js";import"./constant-eb256a74.js";import"./interceptor-c174082f.js";import"./use-touch-b8f7fc8d.js";const V={name:"AssignmentList",data(){return{ChargeCoin:G,gold:0,score:0,loading:!1,finished:!1,active:"income",refreshing:!1,minId:void 0,exListMinId:void 0,gender:0,tabs:[{title:"收入记录",name:"income"},{title:"消费记录",name:"expenditure"}],inList:[],exList:[]}},created(){this.getMyInfo()},methods:{dayjs:R,onRefresh(){this.refreshing=!0,this.minId=void 0;const e=this.active===0?-1:1;this.gender!==2?this.getGoldList(e):this.getScoreList(e)},handleChangeTab(e){console.log(e),this.minId=void 0,this.exListMinId=void 0;const s=this.tabs[e].name==="income"?-1:1;this.gender!==2?this.getGoldList(s):this.getScoreList(s)},async getMyInfo(){const{data:e}=await x.getMyInfo();this.gender=e.gender,this.gender!==2?this.getGoldList(-1):this.getScoreList(-1)},async getGoldList(e){var r;const n={type:e};this.minId&&(n.minId=this.minId);const{data:s}=await x.getGoldList(n);e===-1?this.inList&&this.inList.length>0&&!this.refreshing?this.inList=this.inList.concat(s):this.inList=s:this.exList&&this.exList.length>0&&!this.refreshing?this.exList=this.exList.concat(s):this.exList=s,this.refreshing=!1,this.minId=(r=s[s.length-1])==null?void 0:r.id},async getScoreList(e){var i;const n={type:e};this.exListMinId&&(n.minId=this.exListMinId);const{data:s}=await x.getScoreList(n),r=Array.isArray(s)?s==null?void 0:s.map(h=>{const{scoreAccountTransactionDesc:g,score:f}=h;return{...h,gold:f,goldAccountTransactionDesc:g}}):[];e===-1?this.inList&&this.inList.length>0&&!this.refreshing?this.inList=this.inList.concat(r):this.inList=r:this.exList&&this.exList.length>0?this.exList=this.exList.concat(r):this.exList=r,this.refreshing=!1,this.exListMinId=(i=r[r.length-1])==null?void 0:i.id},pop(){__jsb.pop()}}},B={class:"charge-container"},H={class:"charge-record-container"},F={key:0,class:"record-content"},N={class:"left"},P={class:"desc"},q={class:"time"},U={class:"right"},E={key:1,class:"record-content"},z={class:"left"},J={class:"desc"},K={class:"time"},O={class:"right ex"},Q={class:"way"};function W(e,n,s,r,i,h){const g=j,f=w,b=Y,A=S,D=C;return c(),d("div",B,[_(g),_(f,{title:"收支记录"}),o("div",H,[_(D,{active:i.active,"onUpdate:active":n[1]||(n[1]=m=>i.active=m),animated:"","line-height":"4px","line-width":"20px","title-active-color":"#1F263D",onChange:h.handleChangeTab},{default:u(()=>[(c(!0),d(L,null,v(i.tabs,(m,y)=>(c(),T(A,{key:y,title:m.title},{default:u(()=>[_(b,{modelValue:i.refreshing,"onUpdate:modelValue":n[0]||(n[0]=t=>i.refreshing=t),onRefresh:h.onRefresh},{default:u(()=>[y===0?(c(),d("div",F,[(c(!0),d(L,null,v(i.inList,(t,p)=>{var l;return c(),d("div",{class:"record-item",key:p},[o("div",N,[o("div",P,a((l=t==null?void 0:t.goldAccountTransactionDesc)==null?void 0:l.actionDesc),1),o("div",q,a(h.dayjs(t.timeStamp).format("YYYY-MM-DD HH:mm:ss")),1)]),o("div",U,"+"+a(t.gold)+a(i.gender===2?"积分":"金币"),1)])}),128))])):(c(),d("div",E,[(c(!0),d(L,null,v(i.exList,(t,p)=>{var l,I;return c(),d("div",{class:"record-item",key:p},[o("div",z,[o("div",J,a((l=t==null?void 0:t.goldAccountTransactionDesc)==null?void 0:l.userName),1),o("div",K,a(h.dayjs(t.timeStamp).format("YYYY-MM-DD HH:mm:ss")),1)]),o("div",O,[o("span",null,"-"+a(t.gold)+a(i.gender===2?"积分":"金币"),1),o("span",Q,a((I=t==null?void 0:t.goldAccountTransactionDesc)==null?void 0:I.actionDesc),1)])])}),128))]))]),_:2},1032,["modelValue","onRefresh"])]),_:2},1032,["title"]))),128))]),_:1},8,["active","onChange"])])])}const X=M(V,[["render",W],["__scopeId","data-v-b739c137"]]);k(X).mount("#root");
