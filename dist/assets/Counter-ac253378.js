import{r as a,j as s}from"./index-41711e2b.js";const o="/assets/reset-3a6c6c3e.svg";const l=({count:e})=>s.jsx(s.Fragment,{children:s.jsx("div",{className:"circle-box",children:s.jsx("span",{children:e})})}),d=()=>{const[e,t]=a.useState(0),c=()=>{t(n=>n+=1)},r=()=>{e>0&&t(n=>n-=1)};return s.jsx("div",{className:"container",children:s.jsxs("div",{className:"wrapper",children:[s.jsx("button",{onClick:()=>t(0),className:"resetButton",children:s.jsx("img",{src:o,alt:"Reset"})}),s.jsx(l,{count:e}),s.jsxs("div",{className:"counter-btns",children:[s.jsx("button",{onClick:c,className:"add-btn",children:"+"}),s.jsx("button",{onClick:r,className:"subtract-btn",children:"-"})]})]})})};export{d as default};