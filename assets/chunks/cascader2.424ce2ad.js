import{f as c,o as _,c as d,a,w as s,d as p,F as x,r as n}from"../app.45207d04.js";const f={__name:"cascader2",setup(i){const t=c(!1),l=[[{text:"电机",value:"电机"},{text:"齿轮箱",value:"Tuesday"},{text:"叶片",value:"Wednesday"},{text:"周四",value:"Thursday"},{text:"周五",value:"Friday"}],[{text:"张三",value:"张三",disabled:!0},{text:"李四",value:"李四"},{text:"张远景",value:"张远景"},{text:"王五",value:"王五"},{text:"赵志欣",value:"赵志欣"},{text:"李琪",value:"李琪"}]];return(m,e)=>{const u=n("van-button"),r=n("van-picker"),v=n("van-action-sheet");return _(),d(x,null,[a(u,{type:"primary",onClick:e[0]||(e[0]=o=>t.value=!0)},{default:s(()=>[p("二级-滑动选择式")]),_:1}),a(v,{show:t.value,"onUpdate:show":e[1]||(e[1]=o=>t.value=o)},{default:s(()=>[a(r,{columns:l,title:"采购员"})]),_:1},8,["show"])],64)}}};export{f as default};
