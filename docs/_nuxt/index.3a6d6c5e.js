import{_ as i}from"./AppSection.c9cbc5f1.js";import{x as d,A as m,c,j as o,h as r,g,w as a,B as _,C as x,o as s,d as n,t as b,a as l}from"./entry.71e2bd02.js";const h={class:"container relative mx-auto"},k=l("br",null,null,-1),f=l("div",{class:"grid grid-cols-1 gap-4 lg:grid-cols-2 md:gap-6 lg:gap:8 xl:gap-9"},[l("p",{class:"px-4 py-2 font-mono text-xs border lg:col-start-2"}," Your profile page is in development, please come back soon. ")],-1),w={__name:"index",setup(v){const{$pb:t}=_(),e=d("maven",()=>""),p=()=>{t.authStore.clear(),e.value=null,x("/maven/login")};return m(()=>{t.authStore.onChange(()=>{e.value=t.authStore.model},!0)}),(y,S)=>{const u=i;return s(),c("main",h,[o(e)?(s(),c("button",{key:0,class:"absolute top-8 right-4 px-2 py-1 text-xs font-bold text-white uppercase bg-black rounded dark:text-black dark:bg-white",type:"button",onClick:p}," Logout ")):r("",!0),o(e)?(s(),g(u,{key:1,class:"md:pb-0 lg:pb-0"},{title:a(()=>[n(" Hello,"),k,n(" "+b(o(e).name.split(" ")[0]),1)]),desc:a(()=>[n(" Welcome back ")]),default:a(()=>[f]),_:1})):r("",!0)])}}};export{w as default};