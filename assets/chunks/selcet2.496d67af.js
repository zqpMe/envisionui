import{f as s,o as i,c as _,a as n,w as l,d as m,r as a}from"../app.45207d04.js";const d={class:"env-select-com"},w={__name:"selcet2",setup(f){const t=s(!1),u=s([{text:"杭州",value:"Hangzhou"},{text:"宁波",value:"Ningbo"},{text:"温州",value:"Wenzhou"},{text:"绍兴",value:"Shaoxing"},{text:"湖州",value:"Huzhou"}]),p=()=>{t.value=!1};return(x,e)=>{const r=a("van-button"),c=a("van-picker"),v=a("van-popup");return i(),_("div",d,[n(r,{onClick:e[0]||(e[0]=o=>t.value=!0),type:"primary",style:{margin:"0 auto",display:"block"}},{default:l(()=>[m("点击出现动作面板")]),_:1}),n(v,{show:t.value,"onUpdate:show":e[2]||(e[2]=o=>t.value=o),round:"",position:"bottom"},{default:l(()=>[n(c,{columns:u.value,title:"层级类别","swipe-duration":0,onCancel:e[1]||(e[1]=o=>t.value=!1),onConfirm:p},null,8,["columns"])]),_:1},8,["show"])])}}};export{w as default};
