import{_ as f,c as b,a,b as e,t as r,d,ag as g,o as V,f as c,p as x,h as k,i as y}from"./_plugin-vue_export-helper-ae94e834.js";import{C}from"./index-0b3f80b2.js";import"./index-5198b2b7.js";import{B as I}from"./index-46966e79.js";import{F as P}from"./index-f273d662.js";import{_ as A}from"./navbar-dd7c7647.js";import{_ as S}from"./safe-area-top-6391331c.js";import{A as w}from"./api-3777ac7b.js";import{a as l}from"./function-call-d8608672.js";import{C as B}from"./index-52885be2.js";import"./use-expose-833097fe.js";import"./use-route-fa444ad9.js";import"./constant-eb256a74.js";import"./use-id-b8b960f0.js";import"./index-c49f2c8f.js";import"./use-touch-b8f7fc8d.js";import"./index-6f826b23.js";import"./on-popup-reopen-34d1e964.js";import"./interceptor-c174082f.js";const F={name:"AssignmentList",data(){return{item:{},themeVars:{checkboxSize:"14px",checkboxCheckedIconColor:"#FF54A8"},account:"",name:"",checked:!1}},created(){this.getPageParams()},methods:{async getPageParams(){const{item:s}=await __jsb.getPageParams();this.item=s},async scoreExchangeMoney(){try{const{success:s,message:t}=await w.scoreExchangeMoney({configId:this.item.objectId,account:this.account,name:this.name});s?l({message:"兑换成功",onClose:()=>{__jsb.pop()}}):l(t||"兑换失败")}catch(s){l(s.message||"兑换失败")}}}},i=s=>(x("data-v-e1ea04d5"),s=s(),k(),s),N={class:"exchange-container"},j={class:"container"},E={class:"info"},U={class:"item"},M=i(()=>e("div",{class:"label"},"提现：",-1)),T={class:"value"},z={class:"item"},D=i(()=>e("div",{class:"label"},"花费积分：",-1)),L={class:"value color"},q=g('<div class="item" data-v-e1ea04d5><div class="label" data-v-e1ea04d5>手续费：</div><div class="value" data-v-e1ea04d5> 6% </div></div><div class="item" data-v-e1ea04d5><div class="label" data-v-e1ea04d5>提现方式：</div><div class="value" data-v-e1ea04d5> 支付宝 </div></div>',2),G=i(()=>e("a",null,"《政策政策政策协议》",-1)),H=i(()=>e("div",{class:"tips"},[c(" 温馨提示："),e("br"),c(" 1. 提现会在3个工作日内到账，周六日及节假日顺延，请耐心等待哦；"),e("br"),c(" 2. 请确保支付宝账号所有者真实姓名与实名认证的姓名一致，否则无法汇款；"),e("br"),c(" 3. 支付宝账号建议填写邮箱，若填写手机号，请确保该手机号只绑定了一个支付宝账号，否则无法汇款"),e("br")],-1));function J(s,t,O,Q,o,R){const _=S,p=A,m=P,v=I,u=C,h=B;return V(),b("div",N,[a(_),a(p,{title:"商品兑换"}),e("div",j,[e("div",E,[e("div",U,[M,e("div",T,r(o.item.money)+"元 ",1)]),e("div",z,[D,e("div",L,r(o.item.score)+" 积分",1)]),q]),a(h,{"theme-vars":o.themeVars},{default:d(()=>[a(m,{modelValue:o.account,"onUpdate:modelValue":t[0]||(t[0]=n=>o.account=n),placeholder:"请输入支付宝账号"},null,8,["modelValue"]),a(m,{modelValue:o.name,"onUpdate:modelValue":t[1]||(t[1]=n=>o.name=n),placeholder:"请输入支付宝账号所有者真实姓名"},null,8,["modelValue"]),a(v,{type:"primary",round:"",block:"",disabled:!o.account||!o.name||!o.checked},{default:d(()=>[c("确认兑换")]),_:1},8,["disabled"]),a(u,{modelValue:o.checked,"onUpdate:modelValue":t[2]||(t[2]=n=>o.checked=n),class:"checkbox"},{default:d(()=>[c("我自愿遵守并同意"),G]),_:1},8,["modelValue"])]),_:1},8,["theme-vars"]),H])])}const K=f(F,[["render",J],["__scopeId","data-v-e1ea04d5"]]);y(K).mount("#root");
