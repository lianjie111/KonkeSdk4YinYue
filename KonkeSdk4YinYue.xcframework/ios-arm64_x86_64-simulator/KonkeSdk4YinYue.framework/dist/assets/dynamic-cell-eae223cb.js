import{_ as S}from"./accost-button-621bb3da.js";import{_ as C,o as c,c as n,b as s,a as O,g as u,t as l,e as r,j as L,F as j,r as A,l as P,f as B,p as R,h as N}from"./_plugin-vue_export-helper-ae94e834.js";import{I as V}from"./index-9cad779b.js";import{D as F}from"./default_female_avatar-3bbfb1af.js";import{D as M}from"./default_male_avatar-835185e5.js";import{A as b}from"./api-3777ac7b.js";import{R as T}from"./real_person-47fbf4f0.js";const U=""+new URL("like_h_icon-d7549c12.svg",import.meta.url).href,z=""+new URL("like_icon-b8915b96.svg",import.meta.url).href,E=""+new URL("comment_icon-bcc980dd.svg",import.meta.url).href;const q={name:"VenusDynamicCell",props:{item:{type:Object,default:()=>({})},canShowDetail:{type:Boolean,default:!1},canShowAccost:{type:Boolean,default:!0},onToggleLike:{type:Function,default:()=>{}},canShowReal:{type:Boolean,default:!0}},data(){return{DefaultFemaleAvatar:F,DefaultMaleAvatar:M}},mounted(){},methods:{toDetail(t){__jsb.push({route:"user-info",userInfo:t})},async toggleLike(){const{accountDynamicBO:t}=this.item,{id:e,myLike:i}=t,_=i??!1?b.unlikeDynamic(e):b.likeDynamic(e);try{const{data:m}=await _;if(m!==!0)throw"点赞失败";t.myLike=!i,t.likeCount+=i?-1:1,this.onToggleLike()}catch(m){console.log(m)}},showImagePreviewAt(t){var e;__jsb.invoke({scope:"window",method:"push",params:{route:"image-viewer",images:(e=this.item.accountDynamicBO)==null?void 0:e.picList,startPosition:t}})},showDynamicDetail(){this.canShowDetail&&__jsb.push({route:"dynamic-detail",item:this.item})}},computed:{myLike(){const{accountDynamicBO:t}=this.item;return(t==null?void 0:t.myLike)??!1},userInfo(){const t=[],{accountBO:e}=this.item;return e?(e.age&&t.push(`${e==null?void 0:e.age}岁`),e.height&&t.push(`${e.height}cm`),e.job&&t.push(e.job),t.join(" · ")):""},picStyle(){const{accountDynamicBO:t}=this.item;if(!t)return"";const e=Math.min(3,t.picList.length);let i="70%";return e===2?i="calc((100% - 5px) / 2 - 1px)":e>=3&&(i="calc((100% - 10px) / 3 - 1px)"),`width: ${i}; aspect-ratio: 1;`},hasPics(){var t,e;return((e=(t=this.item.accountDynamicBO)==null?void 0:t.picList)==null?void 0:e.length)>0}}},d=t=>(R("data-v-8f2f0fe2"),t=t(),N(),t),G={class:"head-row"},H={class:"name-column"},J={class:"nickname"},K={key:0,src:T,alt:"",style:{"margin-left":"4px"}},Q=d(()=>s("div",{style:{height:"8px"}},null,-1)),W={class:"user-info"},X={class:"dynamic-text"},Y={key:0,class:"pic-grid"},Z={class:"bottom-row"},$={class:"time-label"},ee={key:0,src:U,alt:"",style:{color:"red"}},te={key:1,src:z,alt:"",style:{color:"red"}},ie={class:"button"},se=d(()=>s("img",{src:E,alt:""},null,-1)),oe=d(()=>s("div",{class:"bottom-line"},null,-1));function ce(t,e,i,_,m,o){var f,y,g,p,k,v,w,D;const h=V,I=S;return c(),n("div",{class:"venus-dynamic-cell",onClick:e[2]||(e[2]=u((...a)=>o.showDynamicDetail&&o.showDynamicDetail(...a),["stop"]))},[s("div",G,[O(h,{width:"48",height:"48",src:(f=i.item.accountBO)==null?void 0:f.headPic,fit:"cover",radius:"20",style:{"margin-right":"12px"},onClick:e[0]||(e[0]=u(a=>o.toDetail(i.item.accountBO),["stop","prevent"]))},null,8,["src"]),s("div",H,[s("div",J,[s("div",null,l((y=i.item.accountBO)==null?void 0:y.nickName),1),((g=i.item.accountBO)==null?void 0:g.isReal)!==null&&i.canShowReal?(c(),n("img",K)):r("",!0)]),Q,s("div",W,l(o.userInfo),1)]),i.canShowAccost?(c(),L(I,{key:0,userInfo:o.userInfo},null,8,["userInfo"])):r("",!0)]),s("div",X,l((p=i.item.accountDynamicBO)==null?void 0:p.text),1),o.hasPics?(c(),n("div",Y,[(c(!0),n(j,null,A((k=i.item.accountDynamicBO)==null?void 0:k.picList,(a,x)=>(c(),L(h,{key:a,src:a,fit:"cover",style:P(o.picStyle),onClick:u(()=>o.showImagePreviewAt(x),["stop"])},null,8,["src","style","onClick"]))),128))])):r("",!0),s("div",Z,[s("div",$,l((v=i.item.accountDynamicBO)==null?void 0:v.gmtCreated),1),s("div",{class:"button",onClick:e[1]||(e[1]=u((...a)=>o.toggleLike&&o.toggleLike(...a),["stop"]))},[o.myLike?(c(),n("img",ee)):r("",!0),o.myLike?r("",!0):(c(),n("img",te)),B(" "+l(((w=i.item.accountDynamicBO)==null?void 0:w.likeCount)??0),1)]),s("div",ie,[se,B(" "+l(((D=i.item.accountDynamicBO)==null?void 0:D.commentCount)??0),1)])]),oe])}const _e=C(q,[["render",ce],["__scopeId","data-v-8f2f0fe2"]]);export{_e as _};
