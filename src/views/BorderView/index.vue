<template>
  <div class="">
    <DemoPanel title="border 控制" :initialExpand="true">
      <template #description>
        <div>
          <code class="lang-js">border</code> 辅助类可以帮助你控制元素的
          <code class="lang-js">border</code> 。
        </div>
      </template>

      <template #code>
        <pre class="lang-css"><code>{{ CodeRaw }}</code></pre>
      </template>
    </DemoPanel>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import CodeRaw from '@/lib/styles/border.scss?raw'
import prism from 'prismjs'

defineOptions({
  name: 'BorderView',
})

onMounted(() => {
  prism.highlightAll()
})
</script>
