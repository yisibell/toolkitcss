import{p as a}from"./prism-S7j38OGK.js";import{d as i,o as l,c as r,a as o,w as n,r as s,b as f,f as p,e,t as c,u as m}from"./index-h4JCLy5j.js";const x=`
// flex（主轴）方向
.flex-row {
  flex-direction: row !important;
}
.flex-row-reverse {
  flex-direction: row-reverse !important;
}
.flex-column {
  flex-direction: column !important;
}
.flex-column-reverse {
  flex-direction: column-reverse !important;
}

// flex（横轴）对齐
.justify-start {
  justify-content: flex-start !important;
}
.justify-end {
  justify-content: flex-end !important;
}
.justify-center {
  justify-content: center !important;
}
.justify-space-between {
  justify-content: space-between !important;
}
.justify-space-around {
  justify-content: space-around !important;
}

// flex（纵轴）对齐
.align-start {
  align-items: flex-start !important;
}
.align-end {
  align-items: flex-end !important;
}
.align-center {
  align-items: center !important;
}
.align-baseline {
  align-items: baseline !important;
}
.align-stretch {
  align-items: stretch !important;
}

// flex（自身）对齐
.align-self-start {
  align-self: flex-start !important;
}
.align-self-end {
  align-self: flex-end !important;
}
.align-self-center {
  align-self: center !important;
}
.align-self-baseline {
  align-self: baseline !important;
}
.align-self-auto {
  align-self: auto !important;
}
.align-self-stretch {
  align-self: stretch !important;
}

// flex 堆叠
.flex-nowrap {
  flex-wrap: nowrap !important;
}
.flex-wrap {
  flex-wrap: wrap !important;
}
.flex-wrap-reverse {
  flex-wrap: wrap-reverse !important;
}

// flex 占比值
@while $--flex-proportion-limit-value >= 0 {
  .flex-#{$--flex-proportion-limit-value} {
    flex: #{calc($--flex-proportion-limit-value / 10)} !important;
  }
  
  $--flex-proportion-limit-value: $--flex-proportion-limit-value - 1;
}`,u={class:""},d={class:"lang-css"},y=i({name:"FlexView",__name:"index",setup(g){return l(()=>{a.highlightAll()}),(w,_)=>{const t=s("DemoPanel");return f(),r("div",u,[o(t,{title:"flex 布局辅助",initialExpand:!0},{description:n(()=>[p(" flex辅助类可以帮助你轻松使用 flex 布局。 ")]),code:n(()=>[e("pre",d,[e("code",null,c(m(x)),1)])]),_:1})])}}});export{y as default};
