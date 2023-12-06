<template>
  <div class="">
    <DemoPanel title="float 浮动辅助" :initialExpand="true">
      <template #description>
        float 浮动辅助类可以帮助你控制浮动样式。
      </template>

      <template #code>
        <pre class="lang-css"><code>{{ CodeRaw }}</code></pre>
      </template>
    </DemoPanel>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import CodeRaw from '@/lib/styles/float.scss?raw'
import prism from 'prismjs'

defineOptions({
  name: 'FloatView',
})

onMounted(() => {
  prism.highlightAll()
})
</script>
