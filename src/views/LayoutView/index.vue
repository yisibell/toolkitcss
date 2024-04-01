<template>
  <div class="">
    <DemoPanel title="通用块布局" :initialExpand="true">
      <template #description>
        <div>
          <code class="lang-js">layout</code> 辅助类可以帮助你控制元素的布局。
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
import CodeRaw from '@/lib/styles/layout.scss?raw'
import prism from 'prismjs'

defineOptions({
  name: 'BorderView',
})

onMounted(() => {
  prism.highlightAll()
})
</script>
