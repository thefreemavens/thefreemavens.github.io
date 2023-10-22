import{_ as q,o as a,c,F as M,r as A,d as k,t as p,a as n,g as f,w as b,h as D,e as C,i as U,b as i,n as K,j as e,k as Y,l as J,m as X,q as g,s as Z,u as tt,P as et}from"./entry.a45b924a.js";import ot from"./ContentRenderer.3b87d8a0.js";import nt from"./ContentDoc.2a3c273c.js";import{q as u,w as S,h as j,e as st,s as at,j as rt,u as _}from"./ContentQuery.12b56466.js";import{u as it}from"./preview.a7fc778c.js";import"./ContentRendererMarkdown.vue.71b93b6c.js";import"./index.288f722b.js";const lt={class:"nav lg:pe-3"},ct={class:"flex absolute right-0 top-2 justify-center items-center w-5 h-5 text-xl font-thin rounded-sm lg:right-3 group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black"},ht={class:"flex -mt-0.5"},pt={__name:"ContentNavigation",props:{navigationTree:{type:Array,default:()=>[]},showChildren:{type:Boolean,default:!1}},setup(r){return(t,o)=>{const m=C,s=O;return a(),c("ul",lt,[(a(!0),c(M,null,A(r.navigationTree,(l,w)=>(a(),c("li",{key:w,class:"py-0.5"},[l.children?(a(),c("div",{key:0,class:"block relative p-1 font-bold cursor-pointer group z-10",onClick:o[0]||(o[0]=$=>r.showChildren=!r.showChildren)},[k(p(l.title)+" ",1),n("span",ct,[n("span",ht,p(r.showChildren?"-":"+"),1)])])):(a(),f(m,{key:1,to:l._path,class:"block px-2 py-1 text-xs rounded-sm transition-colors duration-200 --relative bg-black/0 hover:text-white hover:bg-black dark:hover:text-black dark:hover:bg-white hover:duration-100"},{default:b(()=>[k(p(l.title),1)]),_:2},1032,["to"])),l.children&&r.showChildren?(a(),f(s,{key:2,"navigation-tree":l.children,class:"sub-nav"},null,8,["navigation-tree"])):D("",!0)]))),128))])}}},O=q(pt,[["__scopeId","data-v-3360a9cd"]]),dt={class:"sticky top-16 pt-2 --border-t-4"},ut={class:"flex flex-col gap-2"},gt="./../img/market/",_t=U({__name:"ContentAside",setup(r){const t=[{puid:"TRNL-P01B",title:"The Black Notebbok",slug:"notebook",url:"tfm-notebook-angle-left-black.webp"},{puid:"TRNL-P01W",title:"The White Notebook",slug:"",url:"tfm-notebook-angle-left-white.webp"},{puid:"TRNL-P02B",title:"The Black Mousepad",slug:"",url:"tfm-mousepad-angle-black.webp"},{puid:"TRNL-P02W",title:"The White Mousepad",slug:"",url:"tfm-mousepad-top-white.webp"},{puid:"TRNL-P00B",title:"The Black Wristband",slug:"",url:"tfm-wristband-double-black-white.webp"},{puid:"TRNL-P00W",title:"The Black Wristband",slug:"",url:"tfm-wristband-trio-black-white-gray-float.webp"},{puid:"TRNL-P04B",title:"The Black Hoodie",slug:"hoodie",url:"tfm-hoodie-black-nl-new-black.webp"},{puid:"TRNL-P04W",title:"The White Hoodie",slug:"",url:"tfm-hoodie-white-nl-new-black.webp"},{puid:"TRNL-P03B",title:"The Black TShirt",slug:"",url:"tfm-tshirt-black-new-black.webp"},{puid:"TRNL-P03W",title:"The White TShirt",slug:"",url:"tfm-tshirt-white-new-black.webp"}],o=t[Math.floor(Math.random()*t.length)];return(m,s)=>{const l=C;return a(),c("aside",dt,[n("div",ut,[i(l,{to:"/marketspace",class:"flex justify-center items-center w-full text-xs bg-center bg-cover aspect-square bg-black/10 dark:bg-white/10",style:K({backgroundImage:`url(${gt+e(o).url})`})},null,8,["style"])])])}}}),v=async r=>{const{content:t}=Y().public;typeof(r==null?void 0:r.params)!="function"&&(r=u(r));const o=r.params(),m=t.experimental.stripQueryParameters?S(`/navigation/${`${j(o)}.${t.integrity}`}/${st(o)}.json`):S(`/navigation/${j(o)}.${t.integrity}.json`);if(at())return(await J(()=>import("./client-db.87ebd6b8.js"),["./client-db.87ebd6b8.js","./entry.a45b924a.js","./entry.5626fec3.css","./ContentQuery.12b56466.js","./preview.a7fc778c.js","./index.288f722b.js"],import.meta.url).then(w=>w.generateNavigation))(o);const s=await $fetch(m,{method:"GET",responseType:"json",params:t.experimental.stripQueryParameters?void 0:{_params:rt(o),previewToken:it().getPreviewToken()}});if(typeof s=="string"&&s.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return s},mt={class:"container mx-auto"},wt={class:"mx-4"},vt={class:"grid grid-cols-12 lg:pt-8 --border-t"},ft={class:"hidden col-span-12 lg:block lg:col-span-2 overflow-y-scroll max-h-[calc(100dvh-96px)] sticky top-20"},bt={class:"top-0 mt-6 col-span-12 py-2 mb-4 border-b-4 lg:hidden"},kt={class:"col-span-12 lg:px-12 xl:px-24 lg:col-span-8 lg:col-start-3"},yt={class:"flex pt-2 w-full text-sm"},xt={class:"flex-1 font-mono"},Tt={class:"grid grid-cols-2 mt-16 mb-4 text-xs font-bold border-t"},Nt={key:1},Ct={key:3},$t={class:"col-span-12 lg:col-span-2 lg:col-start-11"},Pt={class:"sticky top-20 pt-2 border-t-4"},Rt={key:0,class:"pb-4 text-sm font-bold"},Lt={class:"pb-6 text-xs"},Wt=["href"],Bt="<--",Et="-->",zt={__name:"[...slug]",async setup(r){let t,o;const s=X().currentRoute.value.params.slug[0],l=u({where:{_path:{$contains:"knowledge"}}}),w=u({where:{_path:{$contains:"lessons"}}}),$=u({where:{_path:{$contains:"challenges"}}}),F=u({where:{_path:{$contains:"resources"}}}),z=u({where:{_path:{$contains:"tools"}}}),{data:P}=([t,o]=g(()=>_("knowledge",()=>v(l))),t=await t,o(),t),{data:R}=([t,o]=g(()=>_("lessons",()=>v(w))),t=await t,o(),t),{data:L}=([t,o]=g(()=>_("challenges",()=>v($))),t=await t,o(),t),{data:W}=([t,o]=g(()=>_("resources",()=>v(F))),t=await t,o(),t),{data:B}=([t,o]=g(()=>_("tools",()=>v(z))),t=await t,o(),t),{path:E}=Z(),{data:G}=([t,o]=g(async()=>_(`content-${E}`,async()=>({surround:await u().only(["_path","title"]).sort({_id:1}).findSurround(E)}))),t=await t,o(),t),[y,x]=G.value.surround;return tt({title:"The Free Mavens",meta:[{name:"title",content:"The Free Mavens"},{name:"description",content:"DESCRIPTION"},{name:"msapplication-TileColor",content:"#000000"},{name:"theme-color",content:"#ffffff"},{property:"og:type",content:"website"},{property:"og:url",content:"https://tfm.github.io/togw/"},{property:"og:title",content:"The Free Mavens"},{property:"og:description",content:"DESCRIPTION"},{property:"og:image",content:"OG_IMAGE"},{property:"twitter:card",content:"summary_large_image"},{property:"twitter:url",content:"https://tfm.github.io/togw/"},{property:"twitter:title",content:"The Free Mavens"},{property:"twitter:description",content:"DESCRIPTION"},{property:"twitter:image",content:"OG_IMAGE"}],link:[{rel:"apple-touch-icon",sizes:"180x180",href:"./apple-touch-icon.png"},{rel:"icon",type:"image/png",sizes:"32x32",href:"./favicon-32x32.png"},{rel:"icon",type:"image/png",sizes:"16x16x",href:"./favicon-16x16.png"},{rel:"icon",href:"./favicon.ico"},{rel:"manifest",href:"/site.webmanifest"},{rel:"mask-icon",href:"/safari-pinned-tab.svg",color:"#000000"}],bodyAttrs:{class:"content"}}),(T,It)=>{const h=O,V=ot,I=C,H=_t,Q=nt;return a(),c("div",mt,[n("div",wt,[i(Q,null,{default:b(({doc:d})=>[n("div",vt,[n("nav",ft,[i(h,{"navigation-tree":e(P),"show-children":e(s)==="knowledge"},null,8,["navigation-tree","show-children"]),i(h,{"navigation-tree":e(R),"show-children":e(s)==="lessons"},null,8,["navigation-tree","show-children"]),i(h,{"navigation-tree":e(L),"show-children":e(s)==="challenges"},null,8,["navigation-tree","show-children"]),i(h,{"navigation-tree":e(W),"show-children":e(s)==="resources"},null,8,["navigation-tree","show-children"]),i(h,{"navigation-tree":e(B),"show-children":e(s)==="tools"},null,8,["navigation-tree","show-children"])]),n("nav",bt,[i(h,{"navigation-tree":e(P),"show-children":e(s)==="knowledge"},null,8,["navigation-tree","show-children"]),i(h,{"navigation-tree":e(R),"show-children":e(s)==="lessons"},null,8,["navigation-tree","show-children"]),i(h,{"navigation-tree":e(L),"show-children":e(s)==="challenges"},null,8,["navigation-tree","show-children"]),i(h,{"navigation-tree":e(W),"show-children":e(s)==="resources"},null,8,["navigation-tree","show-children"]),i(h,{"navigation-tree":e(B),"show-children":e(s)==="tools"},null,8,["navigation-tree","show-children"])]),n("main",kt,[n("article",null,[n("div",yt,[n("span",xt,p(d.id?d.cat+" / "+d.id:"--"),1)]),n("h1",null,p(d.title),1),(a(),f(V,{value:d,key:(T._.provides[et]||T.$route).path},null,8,["value"]))]),n("nav",null,[n("div",Tt,[e(y)?(a(),f(I,{key:0,to:e(y)._path,class:"justify-self-start pt-4 w-auto border-t-1"},{default:b(()=>[k(p(e(y).title),1),n("span",{class:"block pt-2"},p(Bt))]),_:1},8,["to"])):(a(),c("div",Nt)),e(x)?(a(),f(I,{key:2,to:e(x)._path,class:"justify-self-end pt-4 w-auto text-right border-t-1"},{default:b(()=>[k(p(e(x).title),1),n("span",{class:"block pt-2"},p(Et))]),_:1},8,["to"])):(a(),c("div",Ct))])])]),n("div",$t,[n("aside",Pt,[d.body.toc.links?(a(),c("h3",Rt,"Table of contents")):D("",!0),n("ul",Lt,[(a(!0),c(M,null,A(d.body.toc.links,N=>(a(),c("li",{key:N.id,class:"py-0.5"},[n("a",{href:`#${N.id}`,class:"block px-2 py-0.5 rounded-sm transition-colors duration-200 --relative bg-black/0 hover:text-white hover:bg-black dark:hover:text-black dark:hover:bg-white hover:duration-100"},p(N.text),9,Wt)]))),128))]),i(H)])])])]),_:1})])])}}};export{zt as default};
