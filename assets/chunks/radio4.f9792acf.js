import{f as r,o as _,c as v,a as e,w as a,d,F as f,r as l}from"../app.45207d04.js";const g={__name:"radio4",setup(V){const n=r("1"),s=r(!1);r(!0);const i=()=>{s.value=!0};return(b,t)=>{const u=l("van-icon"),c=l("van-radio"),m=l("van-radio-group"),p=l("van-button");return _(),v(f,null,[e(m,{modelValue:n.value,"onUpdate:modelValue":t[1]||(t[1]=o=>n.value=o),disabled:s.value,direction:"horizontal"},{default:a(()=>[e(c,{name:"1"},{icon:a(o=>[e(u,{name:"circle"})]),default:a(()=>[d(" 单选框 1 ")]),_:1}),e(c,{name:"2",modelValue:n.value,"onUpdate:modelValue":t[0]||(t[0]=o=>n.value=o)},{icon:a(o=>[e(u,{name:"circle"})]),default:a(()=>[d(" 单选框 2 ")]),_:1},8,["modelValue"])]),_:1},8,["modelValue","disabled"]),e(p,{type:"primary",onClick:i,style:{margin:"20px 0 0 0"}},{default:a(()=>[d("点击禁用")]),_:1})],64)}}};export{g as default};
