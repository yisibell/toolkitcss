import{p as t}from"./prism-S7j38OGK.js";import{d as e,o as l,c as s,a as m,w as p,r,b as c,e as n,t as g,u as o,f as a}from"./index-h4JCLy5j.js";const u=`// margin-* padding-* 快捷类
@while $--spacing-upper-limit-value >= $--spacing-lower-limit-value {

  $--spacing-value: $--spacing-upper-limit-value * $--spacing-times-value;

  .mt-#{$--spacing-upper-limit-value} {
    margin-top: #{$--spacing-value}px !important;
  }

  .mr-#{$--spacing-upper-limit-value} {
    margin-right: #{$--spacing-value}px !important;
  }

  .mb-#{$--spacing-upper-limit-value} {
    margin-bottom: #{$--spacing-value}px !important;
  }

  .ml-#{$--spacing-upper-limit-value} {
    margin-left: #{$--spacing-value}px !important;
  }

  .mx-#{$--spacing-upper-limit-value} {
    margin-left: #{$--spacing-value}px !important;
    margin-right: #{$--spacing-value}px !important;
  }

  .my-#{$--spacing-upper-limit-value} {
    margin-top: #{$--spacing-value}px !important;
    margin-bottom: #{$--spacing-value}px !important;
  }

  .ma-#{$--spacing-upper-limit-value} {
    margin: #{$--spacing-value}px !important;
  }

  .pt-#{$--spacing-upper-limit-value} {
    padding-top: #{$--spacing-value}px !important;
  }

  .pr-#{$--spacing-upper-limit-value} {
    padding-right: #{$--spacing-value}px !important;
  }

  .pb-#{$--spacing-upper-limit-value} {
    padding-bottom: #{$--spacing-value}px !important;
  }

  .pl-#{$--spacing-upper-limit-value} {
    padding-left: #{$--spacing-value}px !important;
  }

  .px-#{$--spacing-upper-limit-value} {
    padding-left: #{$--spacing-value}px !important;
    padding-right: #{$--spacing-value}px !important;
  }

  .py-#{$--spacing-upper-limit-value} {
    padding-top: #{$--spacing-value}px !important;
    padding-bottom: #{$--spacing-value}px !important;
  }

  .pa-#{$--spacing-upper-limit-value} {
    padding: #{$--spacing-value}px !important;
  }

  $--spacing-upper-limit-value: $--spacing-upper-limit-value - $--spacing-interval-value;
}`,v={class:""},d=n("div",null,"spacing 辅助类可以帮助你控制元素的内外间距。",-1),$=n("div",null,[a(" 你可以使用诸如： "),n("code",{class:"lang-css"}," mt-*, mb-*, mr-*, ml-*, my-*, mx-* "),a(" 这些辅助类控制外间距。 使用 "),n("code",{class:"lang-css"}," pt-*, pb-*, pr-*, pl-*, py-*, px-* "),a(" 控制内间距。 ")],-1),x={class:"lang-css"},y=e({name:"SpacingView",__name:"index",setup(_){return l(()=>{t.highlightAll()}),(h,f)=>{const i=r("DemoPanel");return c(),s("div",v,[m(i,{title:"spacing 内外间距辅助",initialExpand:!0},{description:p(()=>[d,$]),code:p(()=>[n("pre",x,[n("code",null,g(o(u)),1)])]),_:1})])}}});export{y as default};
