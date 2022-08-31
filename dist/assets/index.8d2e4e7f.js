import{r as g,j as a,a as u,T as _,b as x,c as m,d as h,R as P,e as N,f as R}from"./vendor.00a9718d.js";const O=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function i(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerpolicy&&(s.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?s.credentials="include":t.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(t){if(t.ep)return;t.ep=!0;const s=i(t);fetch(t.href,s)}};O();const T=e=>e.length<=80?e:e.substring(0,76)+"...",w=e=>e.length>=10?e.slice(0,9).concat("..."):e,l=(e,n,i)=>Object.keys(e).sort((r,t)=>r.localeCompare(t)).reduce((r,t)=>{const s=e[t];return i?r[t]=typeof s=="string"||Array.isArray(s)?"":s:n?r[t]=typeof s=="string"?T(s):Array.isArray(s)?w(s):s:r[t]=s,r},{}),b=(e,n)=>{const i=e.substring(e.indexOf("?")+1);return(n?i:decodeURIComponent(i)).split("&").map(decodeURIComponent)},p=e=>decodeURIComponent(e).split("&").reduce((r,t)=>{const[s,c]=t.split("=");return c.includes(",")?r[s]=c.split(","):r[s]=c,r},{}),v=(e,n,i)=>{e&&e[n]&&(e[n]=i(e[n]))};function C(e){return e.trim().replace("Request URL: ","")}function S(e){if(e.startsWith("https://www.youtube.com/embed/"))return!0}function I(e){if(e.startsWith("https://securepubads.g.doubleclick.net/gampad/ads"))return!0}const A=(e,n,i)=>{let r={};const t=!!e.includes("origin=https://");return b(e,t).forEach(s=>{var d;const c=s.indexOf("=");if(s.startsWith("embed_config")){const o=JSON.parse(s.substring(c+1));v((d=o==null?void 0:o.adsConfig)==null?void 0:d.adTagParameters,"cust_params",f=>l(p(f),n,i)),v(o==null?void 0:o.adsConfig,"adTagParameters",f=>l(f,n,i)),r.embed_config=l(o,n,i)}else r[s.substring(0,c)]=s.substring(c+1)}),r=l(r,n,i),JSON.stringify(r,null,2)},D=(e,n,i)=>{let r={};return b(e,!0).forEach(t=>{const s=t.indexOf("=");if(t.startsWith("cust_params")){const c=t.indexOf("="),d=t.substring(c+1);r.cust_params=l(p(d),n,i)}else if(t.startsWith("prev_scp")){const c=t.indexOf("="),d=t.substring(c+1);r.prev_scp=l(p(d),n,i)}else r[t.substring(0,s)]=t.substring(s+1)}),r=l(r,n,i),JSON.stringify(r,null,2)};function q(e,n,i){const r=C(e);return r&&r.length>0?S(r)?A(r,n,i):I(r)?D(r,n,i):"":""}function k(e){e.preventDefault();const n=[...e.target.elements].filter(c=>c.id==="request-1")[0].value,i=[...e.target.elements].filter(c=>c.id==="request-2")[0].value,r=[...e.target.elements].filter(c=>c.id==="radio_truncate_values")[0].checked,s=![...e.target.elements].filter(c=>c.id==="radio_include_values")[0].checked;return[q(n,r,s),q(i,r,s)]}function y(){return a("span",{className:"light",children:"can be a GAM ('https://securepubads.g.doubleclick.net/gampad/ads?...') or YouTube ('https://www.youtube.com/embed/...') request"})}function E({setParsed:e}){const[n,i]=g.exports.useState("");return a("div",{id:"controls-container",children:u("form",{id:"form",onSubmit:t=>{t==null||t.preventDefault(),e(k(t))},children:[u("div",{className:"request-container",children:[u("div",{children:["Request 1: ",a(y,{})]}),a("textarea",{className:"request",id:"request-1",rows:"5",wrap:"hard"})]}),u("div",{className:"request-container",children:[u("div",{children:["Request 2: ",a(y,{})]}),a("textarea",{className:"request",id:"request-2",rows:"5",wrap:"hard"})]}),u("div",{id:"controls",children:[a("input",{type:"checkbox",id:"radio_truncate_values",name:"radio_truncate_values",value:"radio_truncate_values",defaultChecked:!0}),a("label",{htmlFor:"radio_truncate_values",children:"Truncate long values"}),a("br",{}),a("input",{type:"checkbox",id:"radio_include_values",name:"radio_include_values",value:"radio_include_values",defaultChecked:!0}),a("label",{htmlFor:"radio_include_values",children:"Include values"}),a("br",{}),u("div",{id:"parse-button-container",children:[a("button",{type:"submit",children:"Parse"}),n&&a("span",{id:"error",children:n})]})]})]})})}function L({parsed:[e,n]}){return a("div",{className:"output-container",children:u(_,{children:[u(x,{children:[a(m,{children:"Parsed 1"}),a(m,{children:"Parsed 2"}),a(m,{children:"Diff"})]}),a(h,{children:u("div",{className:"output-request-container",children:[a("textarea",{className:"output-request",readOnly:!0,rows:"10",cols:"50",value:e,children:e}),a("div",{className:"copy",title:"Copy",onClick:()=>{navigator.clipboard.writeText(e)},children:"\u{1F4CB}"})]})}),a(h,{children:u("div",{className:"output-request-container",children:[a("textarea",{className:"output-request",readOnly:!0,rows:"10",cols:"50",value:n}),a("div",{class:"copy",title:"Copy",onClick:()=>{navigator.clipboard.writeText(n)},children:"\u{1F4CB}"})]})}),a(h,{children:a("div",{className:"diff-container",children:a(P,{oldValue:e,newValue:n,splitView:!0,showDiffOnly:!0,leftTitle:"Unmatched lines in 2",rightTitle:"Unmatched lines in 1",codeFoldMessageRenderer:i=>u("div",{className:"no-diff-msg",children:["Expand ",i," lines (no diff) ..."]})})})})]})})}function M(){const[e,n]=g.exports.useState([]);return u("div",{className:"app",children:[a("header",{children:"Commercial Request Parser"}),a(E,{setParsed:n}),a(L,{parsed:e})]})}N.render(a(R.StrictMode,{children:a(M,{})}),document.getElementById("root"));