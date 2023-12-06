<template>
  <div class="">
    <DemoPanel title="font 字体辅助" :initialExpand="true">
      <template #description>
        font 字体辅助类可以帮助你控制字体样式。
      </template>

      <template #code>
        <pre class="lang-css"><code>{{ CodeRaw }}</code></pre>
      </template>
    </DemoPanel>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import CodeRaw from '@/lib/styles/font.scss?raw'
import prism from 'prismjs'

defineOptions({
  name: 'FontView',
})

onMounted(() => {
  prism.highlightAll()
})
</script>
