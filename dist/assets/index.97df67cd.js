import{r as h,j as n,a as u,T as _,b as x,c as f,d as m,R as N,e as R,f as O}from"./vendor.19756f50.js";const P=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function i(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerpolicy&&(s.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?s.credentials="include":t.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(t){if(t.ep)return;t.ep=!0;const s=i(t);fetch(t.href,s)}};P();const T=e=>e.length<=80?e:e.substring(0,76)+"...",w=e=>e.length>=10?e.slice(0,9).concat("..."):e,o=(e,r,i)=>Object.keys(e).sort((a,t)=>a.localeCompare(t)).reduce((a,t)=>{const s=e[t];return i?a[t]=typeof s=="string"||Array.isArray(s)?"":s:r?a[t]=typeof s=="string"?T(s):Array.isArray(s)?w(s):s:a[t]=s,a},{}),p=e=>{const r=e.substring(e.indexOf("?")+1);return decodeURIComponent(r).split("&").map(decodeURIComponent)},g=e=>decodeURIComponent(e).split("&").reduce((a,t)=>{const[s,c]=t.split("=");return c.includes(",")?a[s]=c.split(","):a[s]=c,a},{}),b=(e,r,i)=>{e&&e[r]&&(e[r]=i(e[r]))},C=(e,r,i)=>{let a={};return p(e).forEach(t=>{var c;const s=t.indexOf("=");if(t.startsWith("embed_config")){const l=JSON.parse(t.substring(s+1));b((c=l==null?void 0:l.adsConfig)==null?void 0:c.adTagParameters,"cust_params",d=>o(g(d),r,i)),b(l==null?void 0:l.adsConfig,"adTagParameters",d=>o(d,r,i)),a.embed_config=o(l,r,i)}else a[t.substring(0,s)]=t.substring(s+1)}),a=o(a,r,i),JSON.stringify(a,null,2)},S=(e,r,i)=>{let a={};return p(e).forEach(t=>{const s=t.indexOf("=");if(t.startsWith("cust_params")){const c=t.indexOf("="),l=t.substring(c+1);a.cust_params=o(g(l),r,i)}else a[t.substring(0,s)]=t.substring(s+1)}),a=o(a,r,i),JSON.stringify(a,null,2)};function v(e){return e.trim().replace("Request URL: ","")}function A(e){if(e.startsWith("https://www.youtube.com/embed/"))return!0}function I(e){if(e.startsWith("https://securepubads.g.doubleclick.net/gampad/ads"))return!0}function y(e,r,i){return e&&e.length>0?A(e)?C(e,r,i):I(e)?S(e,r,i):"":""}function D(e){e.preventDefault();const r=[...e.target.elements].filter(c=>c.id==="request-1")[0].value,i=[...e.target.elements].filter(c=>c.id==="request-2")[0].value,a=[...e.target.elements].filter(c=>c.id==="radio_truncate_values")[0].checked,s=![...e.target.elements].filter(c=>c.id==="radio_include_values")[0].checked;return[y(v(r),a,s),y(v(i),a,s)]}function q(){return n("span",{className:"light",children:"can be a GAM ('https://securepubads.g.doubleclick.net/gampad/ads?...') or YouTube ('https://www.youtube.com/embed/...') request"})}function E({setParsed:e}){const[r,i]=h.exports.useState("");return n("div",{id:"controls-container",children:u("form",{id:"form",onSubmit:t=>{t==null||t.preventDefault(),e(D(t))},children:[u("div",{className:"request-container",children:[u("div",{children:["Request 1: ",n(q,{})]}),n("textarea",{className:"request",id:"request-1",rows:"5",wrap:"hard"})]}),u("div",{className:"request-container",children:[u("div",{children:["Request 2: ",n(q,{})]}),n("textarea",{className:"request",id:"request-2",rows:"5",wrap:"hard"})]}),u("div",{id:"controls",children:[n("input",{type:"checkbox",id:"radio_truncate_values",name:"radio_truncate_values",value:"radio_truncate_values",defaultChecked:!0}),n("label",{htmlFor:"radio_truncate_values",children:"Truncate long values"}),n("br",{}),n("input",{type:"checkbox",id:"radio_include_values",name:"radio_include_values",value:"radio_include_values",defaultChecked:!0}),n("label",{htmlFor:"radio_include_values",children:"Include values"}),n("br",{}),u("div",{id:"parse-button-container",children:[n("button",{type:"submit",children:"Parse"}),r&&n("span",{id:"error",children:r})]})]})]})})}function k({parsed:[e,r]}){return n("div",{className:"output-container",children:u(_,{children:[u(x,{children:[n(f,{children:"Parsed 1"}),n(f,{children:"Parsed 2"}),n(f,{children:"Diff"})]}),n(m,{children:u("div",{className:"output-request-container",children:[n("textarea",{className:"output-request",readOnly:!0,rows:"10",cols:"50",value:e,children:e}),n("div",{className:"copy",title:"Copy",onClick:()=>{navigator.clipboard.writeText(e)},children:"\u{1F4CB}"})]})}),n(m,{children:u("div",{className:"output-request-container",children:[n("textarea",{className:"output-request",readOnly:!0,rows:"10",cols:"50",value:r}),n("div",{class:"copy",title:"Copy",onClick:()=>{navigator.clipboard.writeText(r)},children:"\u{1F4CB}"})]})}),n(m,{children:n("div",{className:"diff-container",children:n(N,{oldValue:e,newValue:r,splitView:!0,showDiffOnly:!0,leftTitle:"Unmatched lines in 2",rightTitle:"Unmatched lines in 1",codeFoldMessageRenderer:i=>u("div",{className:"no-diff-msg",children:["Expand ",i," lines (no diff) ..."]})})})})]})})}function L(){const[e,r]=h.exports.useState([]);return u("div",{className:"app",children:[n("header",{children:"Commercial Request Parser"}),n(E,{setParsed:r}),n(k,{parsed:e})]})}R.render(n(O.StrictMode,{children:n(L,{})}),document.getElementById("root"));