import{p as i}from"./prism-S7j38OGK.js";import{d as o,o as a,c as l,a as s,w as e,r,b as p,f,e as t,t as m,u}from"./index-h4JCLy5j.js";const c=`// 字体大小
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

// 字体加粗
.fw-bold, .fw-b {
  font-weight: bold !important;
}

// 字体常规
.fw-normal {
  font-weight: normal !important;
}

// 斜体
.font-italic {
  font-style: italic !important;
}`,w={class:""},h={class:"lang-css"},z=o({name:"FontView",__name:"index",setup(d){return a(()=>{i.highlightAll()}),(v,_)=>{const n=r("DemoPanel");return p(),l("div",w,[s(n,{title:"font 字体辅助",initialExpand:!0},{description:e(()=>[f(" font 字体辅助类可以帮助你控制字体样式。 ")]),code:e(()=>[t("pre",h,[t("code",null,m(u(c)),1)])]),_:1})])}}});export{z as default};
