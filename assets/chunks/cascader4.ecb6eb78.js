import{f as c,o as v,c as _,a as n,w as l,d as f,F as w,r as o}from"../app.45207d04.js";const h={__name:"cascader4",setup(x){const t=c(!1),s=c(""),d=[{name:"浙江省",code:"330000",items:[{name:"杭州市",code:"330100",items:[{name:"上城区",code:"330001",disabled:!0},{name:"下城区",code:"330002"},{name:"西湖区",code:"330003"}]}]},{name:"江苏省",code:"320000",items:[{name:"南京市",code:"320100"}]}],m={text:"name",value:"code",children:"items"},r=()=>{t.value=!1};return(C,e)=>{const u=o("van-button"),i=o("env-step-cascader"),p=o("van-action-sheet");return v(),_(w,null,[n(u,{type:"primary",onClick:e[0]||(e[0]=a=>t.value=!0)},{default:l(()=>[f("三级-步骤式")]),_:1}),n(p,{show:t.value,"onUpdate:show":e[2]||(e[2]=a=>t.value=a)},{default:l(()=>[n(i,{value:s.value,"onUpdate:value":e[1]||(e[1]=a=>s.value=a),options:d,title:"请选择所在地区",onClose:r,"field-names":m},null,8,["value"])]),_:1},8,["show"])],64)}}};export{h as default};
