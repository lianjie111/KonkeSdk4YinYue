import{_ as u,c as f,a,b as t,d as p,o as y,g,I as w,p as L,h as j,f as e,i as k}from"./_plugin-vue_export-helper-ae94e834.js";/* empty css              */import{L as C}from"./index-5198b2b7.js";import{_ as I}from"./navbar-dd7c7647.js";import{_ as A}from"./safe-area-top-6391331c.js";import{A as l}from"./api-3777ac7b.js";import{a as x}from"./function-call-d8608672.js";import{O as J}from"./index-6f826b23.js";import"./use-expose-833097fe.js";import"./index-c49f2c8f.js";import"./use-touch-b8f7fc8d.js";import"./on-popup-reopen-34d1e964.js";import"./interceptor-c174082f.js";import"./constant-eb256a74.js";const S={name:"PersonalAlbum",components:{},data(){return{nickname:"",loading:!1,jobList:[],show:!1,typeList:[],jobs:[]}},computed:{},created(){this.getJobList()},methods:{handleSelectType(s){this.typeList=this.typeList.map(o=>(o.active=!1,o)),this.typeList[s].active=!0,this.jobs=this.jobList[s].jobs},async getJobList(){var s;try{const{data:o}=await l.getJobList();this.jobList=o,this.typeList=this.jobList.map((n,r)=>({type:n.type,active:r===0})),this.jobs=(s=this.jobList[0])==null?void 0:s.jobs}catch(o){console.log(o)}},async handleSubmitJob(s){this.loading=!0;try{await l.updateJob({job:s}),__jsb.pop()}catch(o){x(o.errMsg||"修改失败")}finally{this.loading=!1}}}},_=s=>(L("data-v-2e640ba7"),s=s(),j(),s),B={class:"job-select"},N={class:"container"},T={class:"loading-container"},V=_(()=>t("div",{class:"title"},"活动规则",-1)),M=_(()=>t("div",{class:"content"},[t("div",{style:{"text-align":"center"}},"活动规则:"),e(" 1、邀请来的新用户，对方充值你可以获得10%的现金奖励;"),t("br"),e(" 2、邀请来的新用户，对方获得积分你可以获得20%的现金奖励。"),t("br"),e(" 上述奖励，自邀请的用户注册当日起永久有效。邀请的用户必须在桃遇app内充值或者收益积分，你才可以获得奖励。"),t("br"),e(" 备注:好友跟桃遇用户文字聊天/语音视频通话/送礼获得的积分,才会产生邀请有礼奖励"),t("br"),e(" 例如:邀请的用户充值10元，你可以获得10积分（1元)现金奖励;邀请的用户获得100积分，你可以获得20积分〔2元)奖励。"),t("br"),t("div",{style:{"text-align":"center"}},"用户须知:"),e(" 1、经发现用户在邀请好友过程中，存在违反法律法规、平台规范的行为《包括但不限于:同一自然人使用非法工具分享、下载、安装、注册、登录多个桃遇账号及其他弄虚作假、损害桃遇合法权益的行为)，一经发现，桃遇有权立即取消发放或收回全部奖励、取消活动资格、暂停活动等处理措施，并保留追究其相关法律责任义务的权利。"),t("br"),e(" 2、非因桃遇原因〔包括但不限于重大自然灾害、政府主管部门指令停止举办或调整、活动遭受严重网络攻击或系统故障等）导致本活动无法继续举办的，则桃遇有权决定暂停或终止本活动。"),t("br"),e(" 3、为了保护您的合法权益与资产，确保活 动规则符合相关法律法规的规定和要求，经由您邀请的新用户参加本活动从 其邀请来的新用户处所获得的收益部分不计入您的提现范围。"),t("br"),e(' 4、若对活动有任何疑问，可以通过app底部"我的"-我的客服"联系平台。'),t("br")],-1));function O(s,o,n,r,i,$){const d=A,m=I,b=C,c=J,h=w;return y(),f("div",B,[a(d),a(m,{title:"邀请好友"}),t("div",N,[t("div",{class:"ruler",onClick:o[0]||(o[0]=v=>i.show=!0)},"活动规则")]),a(c,{show:i.loading},{default:p(()=>[t("div",T,[a(b)])]),_:1},8,["show"]),a(c,{show:i.show,"lock-scroll":!1,onClick:s.handleClose},{default:p(()=>[t("div",{class:"wrapper",onClick:o[2]||(o[2]=g(()=>{},["stop"]))},[V,M,t("div",{class:"close",onClick:o[1]||(o[1]=v=>i.show=!1)},[a(h,{name:"cross"})])])]),_:1},8,["show","onClick"])])}const P=u(S,[["render",O],["__scopeId","data-v-2e640ba7"]]);k(P).mount("#root");
