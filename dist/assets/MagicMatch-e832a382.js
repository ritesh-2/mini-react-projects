import{r as a,j as e}from"./index-41711e2b.js";const g=[{src:"imgs/helmet-1.png",matched:!1},{src:"imgs/potion-1.png",matched:!1},{src:"imgs/ring-1.png",matched:!1},{src:"imgs/scroll-1.png",matched:!1},{src:"imgs/shield-1.png",matched:!1},{src:"imgs/sword-1.png",matched:!1}],j=({card:t,handleChoice:l,flipped:d,disabled:r})=>{const c=()=>{r||l(t)};return e.jsx("div",{className:"magic-card",children:e.jsxs("div",{className:d?"flipped":"",children:[e.jsx("img",{className:"front",src:t.src,alt:"card front"}),e.jsx("img",{className:"back",src:"imgs/cover.png",onClick:c})]})})},M=()=>{const[t,l]=a.useState([]),[d,r]=a.useState(0),[c,m]=a.useState(null),[i,o]=a.useState(null),[p,h]=a.useState(!1),u=()=>{const s=[...g,...g].sort(()=>Math.random()-.5).map(n=>({...n,id:Math.random()}));l(s),r(0),m(null),o(null)},x=s=>{c?o(s):m(s)};a.useEffect(()=>{i&&c&&(h(!0),i.src===c.src?(l(s=>s.map(n=>n.src===c.src?{...n,matched:!0}:n)),f()):setTimeout(()=>f(),1e3))},[i,c]),a.useEffect(()=>{u()},[]);const f=()=>{m(null),o(null),r(s=>s+1),h(!1)};return e.jsx("div",{className:"MagicMatch",children:e.jsxs("div",{className:"magic-wrapper",children:[e.jsx("h2",{children:"Magic Match"}),e.jsxs("div",{className:"flex",children:[e.jsx("button",{onClick:u,children:"New Game"}),e.jsxs("span",{className:"flex",children:["Turns :",e.jsx("div",{className:"turns-box",children:d})," "]})]}),e.jsx("div",{className:"card-grid",children:t&&t.map(s=>e.jsx(j,{card:s,handleChoice:x,flipped:s===c||s===i||s.matched,disabled:p},s.id))})]})})};export{M as default};
