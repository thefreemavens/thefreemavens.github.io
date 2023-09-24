import{C as m,R as C,S as q,T as _,J as w,E as P,k as O,U as k,V as S,i as x,W as M,X as N,M as Q,q as g,Y as R,N as j,Q as A}from"./entry.dbaa827f.js";const B=()=>null;function $(...o){const r=typeof o[o.length-1]=="string"?o.pop():void 0;typeof o[0]!="string"&&o.unshift(r);let[t,l,n={}]=o;if(typeof t!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof l!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");n.server=n.server??!0,n.default=n.default??B,n.lazy=n.lazy??!1,n.immediate=n.immediate??!0;const a=P(),d=()=>a.isHydrating?a.payload.data[t]:a.static.data[t],c=()=>d()!==void 0;(!a._asyncData[t]||!n.immediate)&&(a._asyncData[t]={data:m(d()??n.default()),pending:m(!c()),error:C(a.payload._errors,t),status:m("idle")});const i={...a._asyncData[t]};i.refresh=i.execute=(u={})=>{if(a._asyncDataPromises[t]){if(u.dedupe===!1)return a._asyncDataPromises[t];a._asyncDataPromises[t].cancelled=!0}if((u._initial||a.isHydrating&&u._initial!==!1)&&c())return d();i.pending.value=!0,i.status.value="pending";const f=new Promise((s,e)=>{try{s(l(a))}catch(v){e(v)}}).then(s=>{if(f.cancelled)return a._asyncDataPromises[t];let e=s;n.transform&&(e=n.transform(s)),n.pick&&(e=E(e,n.pick)),i.data.value=e,i.error.value=null,i.status.value="success"}).catch(s=>{if(f.cancelled)return a._asyncDataPromises[t];i.error.value=s,i.data.value=O(n.default()),i.status.value="error"}).finally(()=>{f.cancelled||(i.pending.value=!1,a.payload.data[t]=i.data.value,i.error.value&&(a.payload._errors[t]=k(i.error.value)),delete a._asyncDataPromises[t])});return a._asyncDataPromises[t]=f,a._asyncDataPromises[t]};const y=()=>i.refresh({_initial:!0}),h=n.server!==!1&&a.payload.serverRendered;{const u=S();if(u&&!u._nuxtOnBeforeMountCbs){u._nuxtOnBeforeMountCbs=[];const s=u._nuxtOnBeforeMountCbs;u&&(q(()=>{s.forEach(e=>{e()}),s.splice(0,s.length)}),_(()=>s.splice(0,s.length)))}h&&a.isHydrating&&c()?(i.pending.value=!1,i.status.value=i.error.value?"error":"success"):u&&(a.payload.serverRendered&&a.isHydrating||n.lazy)&&n.immediate?u._nuxtOnBeforeMountCbs.push(y):n.immediate&&y(),n.watch&&w(n.watch,()=>i.refresh());const f=a.hook("app:data:refresh",s=>{if(!s||s.includes(t))return i.refresh()});u&&_(f)}const p=Promise.resolve(a._asyncDataPromises[t]).then(()=>i);return Object.assign(p,i),p}function E(o,r){const t={};for(const l of r)t[l]=o[l];return t}const z=x({name:"ContentQuery",props:{path:{type:String,required:!1,default:void 0},only:{type:Array,required:!1,default:void 0},without:{type:Array,required:!1,default:void 0},where:{type:Object,required:!1,default:void 0},sort:{type:Object,required:!1,default:void 0},limit:{type:Number,required:!1,default:void 0},skip:{type:Number,required:!1,default:void 0},locale:{type:String,required:!1,default:void 0},find:{type:String,required:!1,default:void 0}},async setup(o){const{path:r,only:t,without:l,where:n,sort:a,limit:d,skip:c,locale:i,find:y}=M(o),h=N(()=>{var e;return(e=r.value)==null?void 0:e.includes("/_")}),p=!Q().public.content.experimental.advanceQuery;w(()=>o,()=>s(),{deep:!0});const u=e=>p?e!=null&&e.surround?e.surround:e!=null&&e._id||Array.isArray(e)?e:e==null?void 0:e.result:e.result,{data:f,refresh:s}=await $(`content-query-${R(o)}`,()=>{let e;return r.value?e=g(r.value):e=g(),t.value&&(e=e.only(t.value)),l.value&&(e=e.without(l.value)),n.value&&(e=e.where(n.value)),a.value&&(e=e.sort(a.value)),d.value&&(e=e.limit(d.value)),c.value&&(e=e.skip(c.value)),i.value&&(e=e.where({_locale:i.value})),y.value==="one"?e.findOne().then(u):y.value==="surround"?r.value?p?e.findSurround(r.value):e.withSurround(r.value).findOne().then(u):(console.warn("[Content] Surround queries requires `path` prop to be set."),console.warn("[Content] Query without `path` will return regular `find()` results."),e.find().then(u)):e.find().then(u)});return{isPartial:h,data:f,refresh:s}},render(o){var v;const r=j(),{data:t,refresh:l,isPartial:n,path:a,only:d,without:c,where:i,sort:y,limit:h,skip:p,locale:u,find:f}=o,s={path:a,only:d,without:c,where:i,sort:y,limit:h,skip:p,locale:u,find:f};if(s.find==="one"){if(!t&&(r!=null&&r["not-found"]))return r["not-found"]({props:s,...this.$attrs});if(r!=null&&r.empty&&(t==null?void 0:t._type)==="markdown"&&!((v=t==null?void 0:t.body)!=null&&v.children.length))return r.empty({props:s,...this.$attrs})}else if((!t||!t.length)&&r!=null&&r["not-found"])return r["not-found"]({props:s,...this.$attrs});return r!=null&&r.default?r.default({data:t,refresh:l,isPartial:n,props:s,...this.$attrs}):((D,b)=>A("pre",null,JSON.stringify({message:"You should use slots with <ContentQuery>!",slot:D,data:b},null,2)))("default",{data:t,props:s,isPartial:n})}}),H=z,J=Object.freeze(Object.defineProperty({__proto__:null,default:H},Symbol.toStringTag,{value:"Module"}));export{J as C,H as _,$ as u};