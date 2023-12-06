<template>
  <div class="">
    <DemoPanel title="文本和排版辅助" :initialExpand="true">
      <template #description>
        文本和排版辅助类可以帮助你控制文本样式及排版。
      </template>

      <template #code>
        <pre class="lang-css"><code>{{ CodeRaw }}</code></pre>
      </template>
    </DemoPanel>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import CodeRaw from '@/lib/styles/text-and-typesetting.scss?raw'
import prism from 'prismjs'

defineOptions({
  name: 'TextAndTypesettingView',
})

onMounted(() => {
  prism.highlightAll()
})
</script>
