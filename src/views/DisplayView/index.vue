<template>
  <div class="">
    <DemoPanel title="display 显示辅助" :initialExpand="true">
      <template #description> 显示辅助类可以帮助你控制内容的显示。 </template>

      <template #code>
        <pre class="lang-css"><code>{{ CodeRaw }}</code></pre>
      </template>
    </DemoPanel>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import CodeRaw from '@/lib/styles/display.scss?raw'
import prism from 'prismjs'

defineOptions({
  name: 'DisplayView',
})

onMounted(() => {
  prism.highlightAll()
})
</script>
