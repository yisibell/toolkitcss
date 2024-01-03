import{p as i}from"./prism-S7j38OGK.js";import{d as o,o as a,c as l,a as s,w as e,r as p,b as r,e as u,f as t,t as f,u as m}from"./index-z_BIZJA6.js";const c=`// 字体大小
@while $--font-size-upper-limit-value >= $--font-size-lower-limit-value {
  .fs-#{$--font-size-upper-limit-value} {
    font-size: #{$--font-size-upper-limit-value}px !important;
  }

  $--font-size-upper-limit-value: $--font-size-upper-limit-value - $--font-size-interval-value;
}

// 字体粗细
@while $--font-weight-upper-limit-value >= $--font-weight-lower-limit-value {
  .fw-#{$--font-weight-upper-limit-value} {
    font-weight: #{$--font-weight-upper-limit-value} !important;
  }

  $--font-weight-upper-limit-value: $--font-weight-upper-limit-value - $--font-weight-interval-value;
}

// 字体粗细别名
.fw-bold {
  font-weight: bold !important;
}`,w={class:""},d={class:"lang-css"},z=o({name:"FontView",__name:"index",setup(h){return a(()=>{i.highlightAll()}),(v,_)=>{const n=p("DemoPanel");return r(),l("div",w,[s(n,{title:"font 字体辅助",initialExpand:!0},{description:e(()=>[u(" font 字体辅助类可以帮助你控制字体样式。 ")]),code:e(()=>[t("pre",d,[t("code",null,f(m(c)),1)])]),_:1})])}}});export{z as default};
