import{_ as E,c as i,a as f,d as k,b as o,f as y,t as h,F as _,r as m,e as w,o as d,n as p,i as L}from"./_plugin-vue_export-helper-ae94e834.js";/* empty css              */import{L as x}from"./index-5198b2b7.js";import{_ as V}from"./navbar-dd7c7647.js";import{B as z}from"./index-46966e79.js";import{_ as O}from"./safe-area-top-6391331c.js";import{A as T}from"./api-3777ac7b.js";import{a as P}from"./function-call-d8608672.js";import{O as D}from"./index-6f826b23.js";import"./use-route-fa444ad9.js";import"./constant-eb256a74.js";import"./use-expose-833097fe.js";import"./index-c49f2c8f.js";import"./use-touch-b8f7fc8d.js";import"./on-popup-reopen-34d1e964.js";import"./interceptor-c174082f.js";const q={name:"PersonalAlbum",components:{},data(){return{nickname:"",loading:!1,tags:[],selectedTags:[],myTags:[],myTagsSelected:[],myBooks:[],myBooksSelected:[],mySports:[],mySportsSelected:[],myMovies:[],myMoviesSelected:[],myMusics:[],myMusicsSelected:[],myFoods:[],myFoodsSelected:[],myFootprint:[],myFootprintSelected:[]}},computed:{},created(){this.getAllTags()},methods:{handleSelect(a){const{tagType:l,objectId:e,selected:c}=a;if(console.log(l,"tagType"),l==="my-tag"){if(c)this.myTagsSelected=this.myTagsSelected.filter(s=>s!==e);else if(this.myTagsSelected.length<5)this.myTagsSelected.push(e);else return;this.myTags.forEach(s=>{s.objectId===e&&(s.selected=!c)})}if(l==="my-books-comic"){if(c)this.myBooksSelected=this.myBooksSelected.filter(s=>s!==e);else if(this.myBooksSelected.length<5)this.myBooksSelected.push(e);else return;this.myBooks.forEach(s=>{s.objectId===e&&(s.selected=!c)})}if(l==="my-sports"){if(c)console.log("selected",c),this.mySportsSelected=this.mySportsSelected.filter(s=>s!==e);else if(this.mySportsSelected.length<5)this.mySportsSelected.push(e);else return;this.mySports.forEach(s=>{s.objectId===e&&(s.selected=!c)})}if(l==="my-movies"){if(c)this.myMoviesSelected=this.myMoviesSelected.filter(s=>s!==e);else if(this.myMoviesSelected.length<5)this.myMoviesSelected.push(e);else return;this.myMovies.forEach(s=>{s.objectId===e&&(s.selected=!c)})}if(l==="my-music"){if(c)this.myMusicsSelected=this.myMusicsSelected.filter(s=>s!==e);else if(this.myMusicsSelected.length<5)this.myMusicsSelected.push(e);else return;this.myMusics.forEach(s=>{s.objectId===e&&(s.selected=!c)})}if(l==="my-foods"){if(c)this.myFoodsSelected=this.myFoodsSelected.filter(s=>s!==e);else if(this.myFoodsSelected.length<5)this.myFoodsSelected.push(e);else return;this.myFoods.forEach(s=>{s.objectId===e&&(s.selected=!c)})}if(l==="my-footprint"){if(c)this.myFootprintSelected=this.myFootprintSelected.filter(s=>s!==e);else if(this.myFootprintSelected.length<5)this.myFootprintSelected.push(e);else return;this.myFootprint.forEach(s=>{s.objectId===e&&(s.selected=!c)})}},handleSelectType(a){this.typeList=this.typeList.map(l=>(l.active=!1,l)),this.typeList[a].active=!0,this.jobs=this.jobList[a].jobs},async getAllTags(){try{const{data:{tags:a=[]}={}}=await T.getMyTags(),{data:l}=await T.getAllTags();this.selectedTags=a,this.tags=l,l==null||l.forEach(e=>{var c,s,r,g,S,v,b;e.tagType==="my-tag"&&((c=this.selectedTags)!=null&&c.find(n=>n.id===e.objectId)&&(e.selected=!0,this.myTagsSelected.push(e.objectId)),this.myTags.push(e)),e.tagType==="my-books-comic"&&((s=this.selectedTags)!=null&&s.find(n=>n.id===e.objectId)&&(e.selected=!0,this.myBooksSelected.push(e.objectId)),this.myBooks.push(e)),e.tagType==="my-sports"&&((r=this.selectedTags)!=null&&r.find(n=>n.id===e.objectId)&&(e.selected=!0,this.mySportsSelected.push(e.objectId)),this.mySports.push(e)),e.tagType==="my-music"&&((g=this.selectedTags)!=null&&g.find(n=>n.id===e.objectId)&&(e.selected=!0,this.myMusicsSelected.push(e.objectId)),this.myMusics.push(e)),e.tagType==="my-movies"&&((S=this.selectedTags)!=null&&S.find(n=>n.id===e.objectId)&&(e.selected=!0,this.myMoviesSelected.push(e.objectId)),this.myMovies.push(e)),e.tagType==="my-foods"&&((v=this.selectedTags)!=null&&v.find(n=>n.id===e.objectId)&&(e.selected=!0,this.myFoodsSelected.push(e.objectId)),this.myFoods.push(e)),e.tagType==="my-footprint"&&((b=this.selectedTags)!=null&&b.find(n=>n.id===e.objectId)&&(e.selected=!0,this.myFootprintSelected.push(e.objectId)),this.myFootprint.push(e))})}catch(a){console.log(a)}},async handleSubmit(){this.loading=!0;try{const a=[...this.myTagsSelected,...this.myBooksSelected,...this.mySportsSelected,...this.myMusicsSelected,...this.myMoviesSelected,...this.myFoodsSelected,...this.myFootprintSelected];await T.updateTags({tagIds:a}),__jsb.pop()}catch(a){P(a.errMsg||"修改失败")}finally{this.loading=!1}}}},G={class:"job-select"},H={key:0,class:"container"},J={class:"type-item"},K={class:"title"},Q={class:"length"},R={class:"list"},U=["onClick"],W={class:"type-item"},X={class:"title"},Y={class:"length"},Z={class:"list"},$=["onClick"],ee={class:"type-item"},se={class:"title"},te={class:"length"},oe={class:"list"},ce=["onClick"],le={class:"type-item"},ie={class:"title"},de={class:"length"},ne={class:"list"},he=["onClick"],ae={class:"type-item"},re={class:"title"},ye={class:"length"},_e={class:"list"},me=["onClick"],pe={class:"type-item"},ue={class:"title"},fe={class:"length"},ge={class:"list"},Se=["onClick"],ve={class:"type-item"},be={class:"title"},ke={class:"length"},Te={class:"list"},je=["onClick"],Ie={class:"loading-container"};function Fe(a,l,e,c,s,r){var j,I,F,M,C,B,N,A;const g=O,S=z,v=V,b=x,n=D;return d(),i("div",G,[f(g),f(v,{title:"兴趣&标签"},{default:k(()=>[f(S,{type:"primary",size:"small",round:"",class:"submit",onClick:r.handleSubmit},{default:k(()=>[y(" 完成 ")]),_:1},8,["onClick"])]),_:1}),s.tags&&((j=s.tags)!=null&&j.length)?(d(),i("div",H,[o("div",J,[o("div",K,[y(" 我的个性"),o("span",Q,"（"+h((I=s.myTagsSelected)==null?void 0:I.length)+"/5）",1)]),o("div",R,[(d(!0),i(_,null,m(s.myTags,t=>(d(),i("div",{class:p(["item",{selected:t.selected}]),key:t.objectId,onClick:u=>r.handleSelect(t)},h(t.tagName),11,U))),128))])]),o("div",W,[o("div",X,[y(" 我喜欢的运动"),o("span",Y,"（"+h((F=s.mySportsSelected)==null?void 0:F.length)+"/5）",1)]),o("div",Z,[(d(!0),i(_,null,m(s.mySports,t=>(d(),i("div",{class:p(["item",{selected:t.selected}]),key:t.objectId,onClick:u=>r.handleSelect(t)},h(t.tagName),11,$))),128))])]),o("div",ee,[o("div",se,[y(" 我喜欢的音乐"),o("span",te,"（"+h((M=s.myMusicsSelected)==null?void 0:M.length)+"/5）",1)]),o("div",oe,[(d(!0),i(_,null,m(s.myMusics,t=>(d(),i("div",{class:p(["item",{selected:t.selected}]),key:t.objectId,onClick:u=>r.handleSelect(t)},h(t.tagName),11,ce))),128))])]),o("div",le,[o("div",ie,[y(" 我喜欢的美食"),o("span",de,"（"+h((C=s.myFoodsSelected)==null?void 0:C.length)+"/5）",1)]),o("div",ne,[(d(!0),i(_,null,m(s.myFoods,t=>(d(),i("div",{class:p(["item",{selected:t.selected}]),key:t.objectId,onClick:u=>r.handleSelect(t)},h(t.tagName),11,he))),128))])]),o("div",ae,[o("div",re,[y(" 我喜欢的电影"),o("span",ye,"（"+h((B=s.myMoviesSelected)==null?void 0:B.length)+"/5）",1)]),o("div",_e,[(d(!0),i(_,null,m(s.myMovies,t=>(d(),i("div",{class:p(["item",{selected:t.selected}]),key:t.objectId,onClick:u=>r.handleSelect(t)},h(t.tagName),11,me))),128))])]),o("div",pe,[o("div",ue,[y(" 我喜欢的书籍和动漫"),o("span",fe,"（"+h((N=s.myBooksSelected)==null?void 0:N.length)+"/5）",1)]),o("div",ge,[(d(!0),i(_,null,m(s.myBooks,t=>(d(),i("div",{class:p(["item",{selected:t.selected}]),key:t.objectId,onClick:u=>r.handleSelect(t)},h(t.tagName),11,Se))),128))])]),o("div",ve,[o("div",be,[y(" 我的旅行足迹"),o("span",ke,"（"+h((A=s.myFootprintSelected)==null?void 0:A.length)+"/5）",1)]),o("div",Te,[(d(!0),i(_,null,m(s.myFootprint,t=>(d(),i("div",{class:p(["item",{selected:t.selected}]),key:t.objectId,onClick:u=>r.handleSelect(t)},h(t.tagName),11,je))),128))])])])):w("",!0),f(n,{show:s.loading},{default:k(()=>[o("div",Ie,[f(b)])]),_:1},8,["show"])])}const Me=E(q,[["render",Fe],["__scopeId","data-v-4b4362f5"]]);L(Me).mount("#root");
