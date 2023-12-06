<template>
  <DemoHeader
    logo-text="TC"
    title="Toolkit CSS"
    title-link="https://github.com/yisibell/toolkitcss"
    :right-links="[
      {
        href: 'https://github.com/yisibell/toolkitcss',
        title: 'Documentation',
      },
      {
        href: 'https://github.com/yisibell/toolkitcss/blob/main/CHANGELOG.md',
        title: 'Changelog',
      },
      { href: 'https://github.com/yisibell/toolkitcss', title: 'Github' },
    ]"
  />

  <DemoContainer>
    <DemoSidebar :items="sidebarMenus"></DemoSidebar>
    <DemoMain>
      <div class="home-main">
        <RouterView />
      </div>
    </DemoMain>
  </DemoContainer>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'

const sidebarMenus = [
  {
    groupTitle: '样式工具类',
    menus: [
      { title: 'Display', to: '/demo/display' },
      { title: 'Flex 布局', to: '/demo/flex' },
      { title: 'Flex 快捷组合', to: '/demo/flex-composition' },
      { title: 'Cursor 指针', to: '/demo/cursor' },
      { title: 'Float 浮动', to: '/demo/float' },
      { title: 'Font 字体样式', to: '/demo/font' },
      { title: 'Spacing 内外间距', to: '/demo/spacing' },
      { title: '文本和排版', to: '/demo/text-and-typesetting' },
    ],
  },
  {
    groupTitle: 'scss 变量',
    menus: [{ title: '自定义 scss 变量', to: '/demo/scss-vars' }],
  },
]
</script>

<style lang="scss" scoped>
.home-main {
  max-width: 980px;
  margin: 0 auto;
}
</style>
