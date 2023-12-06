<template>
  <div class="">
    <DemoPanel title="flex 快捷组合辅助" :initialExpand="true">
      <template #description>
        flex 快捷组合辅助类可以帮助你使用常用的 flex 布局组合。
      </template>

      <template #code>
        <pre class="lang-css"><code>{{ CodeRaw }}</code></pre>
      </template>
    </DemoPanel>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import CodeRaw from '@/lib/styles/flex-composition.scss?raw'
import prism from 'prismjs'

defineOptions({
  name: 'FlexCompositionView',
})

onMounted(() => {
  prism.highlightAll()
})
</script>
