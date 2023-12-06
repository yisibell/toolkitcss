<template>
  <div class="">
    <DemoPanel title="flex 布局辅助">
      <template #description>
        flex辅助类可以帮助你轻松使用 flex 布局。
      </template>

      <template #code>
        <pre class="lang-css"><code>{{ CodeRaw }}</code></pre>
      </template>
    </DemoPanel>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import CodeRaw from '@/lib/styles/flex.scss?raw'
import prism from 'prismjs'

defineOptions({
  name: 'FlexView',
})

onMounted(() => {
  prism.highlightAll()
})
</script>
