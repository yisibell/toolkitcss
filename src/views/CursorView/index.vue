<template>
  <div class="">
    <DemoPanel title="cursor 指针辅助">
      <template #description>
        cursor 辅助类可以帮助你轻松使用 cursor 指针样式。
      </template>

      <template #code>
        <pre class="lang-css"><code>{{ CodeRaw }}</code></pre>
      </template>
    </DemoPanel>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import CodeRaw from '@/lib/styles/cursor.scss?raw'
import prism from 'prismjs'

defineOptions({
  name: 'CursorView',
})

onMounted(() => {
  prism.highlightAll()
})
</script>
