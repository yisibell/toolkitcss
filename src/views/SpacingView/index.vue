<template>
  <div class="">
    <DemoPanel title="spacing 内外间距辅助" :initialExpand="true">
      <template #description>
        spacing 辅助类可以帮助你控制元素的内外间距。
      </template>

      <template #code>
        <pre class="lang-css"><code>{{ CodeRaw }}</code></pre>
      </template>
    </DemoPanel>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import CodeRaw from '@/lib/styles/spacing.scss?raw'
import prism from 'prismjs'

defineOptions({
  name: 'SpacingView',
})

onMounted(() => {
  prism.highlightAll()
})
</script>
