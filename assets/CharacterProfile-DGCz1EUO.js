import{d as f,u as x,w as C,a as s,c as o,b as t,e as c,f as l,g as y,h as k,_ as w,o as n,t as a,i as b,F as S,r as E,j as B,C as N,k as V,S as v}from"./index-C0tiJP7Z.js";const j={key:0,clas:"main-character-profile"},D={class:"container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl my-10"},F={class:"text-3xl uppercase font-bold text-center"},I=["src"],R={class:"mt-5"},T=t("dt",{class:"font-bold"},"Status",-1),z=t("hr",{class:"my-4"},null,-1),G=t("dt",{class:"font-bold"},"Gender",-1),L=t("hr",{class:"my-4"},null,-1),M=t("dt",{class:"font-bold"},"Species",-1),P=t("hr",{class:"my-4"},null,-1),$=t("dt",{class:"font-bold"},"Dimension",-1),q={class:"flex justify-between items-center"},A=t("h2",{class:"text-2xl font-bold"},"Episodes ",-1),H={key:0,class:"mt-5"},J={class:"font-bold"},K={class:"flex items-center text-sm mt-1 text-zinc-600"},O=t("hr",{class:"my-4"},null,-1),X=f({__name:"CharacterProfile",setup(Q){const e=x(),r=k();async function d(){const i=parseInt(r.params.id);await e.getSingleCharacter(i),document.title=`${e.singleCharacter.name} | Rick and Morty Characters`,e.singleCharacter&&await u()}d();async function u(){await e.getCharacterEpisodes(e.singleCharacter.episode)}return C(()=>r.params.id,async()=>{d()}),(i,U)=>{const m=N,_=V,p=v,g=w;return s(e).singleCharacter.name?(n(),o("main",j,[t("div",D,[c(g,{gutter:[40,40]},{default:l(()=>[c(_,{xs:24,md:12,lg:8},{default:l(()=>[c(m,{class:"sticky top-20"},{default:l(()=>[t("h1",F,a(s(e).singleCharacter.name),1),t("img",{class:"max-w-full w-44 my-5 rounded-full mx-auto",src:s(e).singleCharacter.image},null,8,I),t("dd",R,[T,t("dd",null,a(s(e).singleCharacter.status),1),z,G,t("dd",null,a(s(e).singleCharacter.gender),1),L,M,t("dd",null,a(s(e).singleCharacter.species),1),P,$])]),_:1})]),_:1}),c(_,{xs:24,md:12,lg:16},{default:l(()=>[t("div",q,[A,t("p",null,[b("Total: "),t("strong",null,a(s(e).singleCharacter.episode.length),1)])]),s(e).characterEpisodes.length?(n(),o("ul",H,[(n(!0),o(S,null,E(s(e).characterEpisodes,h=>(n(),o("li",null,[t("dd",null,[t("dt",J,a(h.name),1),t("dd",K,a(h.air_date),1),O])]))),256))])):(n(),B(p,{key:1,active:"",class:"mt-4"}))]),_:1})]),_:1})])])):y("",!0)}}});export{X as default};