import{_ as g,c,a,b as i,j as r,d as p,o,F as y,r as v,n as f,t as m,i as E}from"./_plugin-vue_export-helper-ae94e834.js";import{E as k}from"./index-44c3c42c.js";import"./index-5198b2b7.js";import{L as x}from"./index-3d928aae.js";import{I as A}from"./index-9cad779b.js";import{_ as N}from"./navbar-dd7c7647.js";import{_ as P}from"./safe-area-top-6391331c.js";import{D as b}from"./default_female_avatar-3bbfb1af.js";import{E as z}from"./notice_empty_icon-496ab72d.js";import{A as w}from"./api-3777ac7b.js";import{a as F}from"./function-call-d8608672.js";import"./use-id-b8b960f0.js";import"./use-expose-833097fe.js";import"./use-tab-status-ea9b54fd.js";import"./index-c49f2c8f.js";import"./use-touch-b8f7fc8d.js";import"./index-6f826b23.js";import"./on-popup-reopen-34d1e964.js";import"./interceptor-c174082f.js";import"./constant-eb256a74.js";const I={name:"VenusApp",data(){return{NoticeEmpty:z,FemaleAvatar:b,loading:!1,list:[{nickName:"张三",dynamicPic:"https://img.yzcdn.cn/vant/cat.jpeg",description:"赞了你的动态"},{nickName:"张三",dynamicPic:"https://img.yzcdn.cn/vant/cat.jpeg",description:"评论 了我的动态:互动聊..."},{nickName:"张三",isread:!0,dynamicPic:"https://img.yzcdn.cn/vant/cat.jpeg",description:"评论 了我的动态:互动聊..."}],themeVars:{UploaderSize:"calc((100vw - 56px) / 3)",UploaderUploadBackground:"#EEEEEE",UploaderDeleteIconSize:"20px"}}},async mounted(){},methods:{async afterRead(e){e.status="uploading",e.message="上传中...",e.status="success",e.message="上传成功",console.log(this.fileList),this.fileList=[],this.text=""},async submitPublish(){this.isPublishing=!0,await w.publishDynamic({text:this.text}),this.isPublishing=!1,F("发布成功")}}},B={class:"dynamic-notice"},D={class:"notice-content"},L={class:"text"},j={class:"name"},U={class:"desc"};function V(e,C,R,T,s,q){const _=P,l=N,n=A,d=x,u=k;return o(),c("div",B,[a(_),a(l,{title:"动态通知"}),i("div",D,[s.list&&s.list.length?(o(),r(d,{key:0},{default:p(()=>[(o(!0),c(y,null,v(s.list,(t,h)=>(o(),c("div",{class:f(["notice-item",{"is-read":t.isread}]),key:h},[a(n,{src:(t==null?void 0:t.avatar)||s.FemaleAvatar,width:"48",height:"48",radius:"30"},null,8,["src"]),i("div",L,[i("div",j,m(t.nickName),1),i("div",U,m(t.description),1)]),a(n,{src:(t==null?void 0:t.dynamicPic)||s.FemaleAvatar,width:"72",height:"72",radius:"2"},null,8,["src"])],2))),128))]),_:1})):(o(),r(u,{key:1,"image-size":"92",description:"暂无通知",class:"notice-empty"},{image:p(()=>[a(n,{src:s.NoticeEmpty,alt:""},null,8,["src"])]),_:1}))])])}const S=g(I,[["render",V],["__scopeId","data-v-d7551527"]]);E(S).mount("#root");
