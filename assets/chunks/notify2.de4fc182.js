import{f as c,o as i,c as p,a as o,w as u,F as _,b as f,t as m,r as a}from"../app.8dc1d960.js";const v=f("span",null,m("可手动关闭"),-1),b={__name:"notify2",setup(y){const t=c(!1),n=()=>{t.value=!0,closeable&&setTimeout(()=>{t.value=!1},1e5)};return(d,e)=>{const s=a("van-button"),l=a("van-notify");return i(),p(_,null,[o(s,{type:"primary",text:"可手动关闭",onClick:n}),o(l,{show:t.value,"onUpdate:show":e[0]||(e[0]=r=>t.value=r),type:"primary",closeable:""},{default:u(()=>[v]),_:1},8,["show"])],64)}}};export{b as default};
