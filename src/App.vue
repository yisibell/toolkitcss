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
  <RouterView />
</template>

<script setup lang="ts">
import { DemoHeader } from 'demoify'
import { RouterView } from 'vue-router'
</script>

