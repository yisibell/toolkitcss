<template>
  <div class="">
    <DemoPanel title="scss 变量">
      <template #description> 你可以覆盖这些变量以修改样式类的定义。 </template>

      <template #code>
        <pre class="lang-css"><code>{{ CodeRaw }}</code></pre>
      </template>
    </DemoPanel>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import CodeRaw from '@/lib/styles/variables/index.scss?raw'
import prism from 'prismjs'

defineOptions({
  name: 'ScssVarsView',
})

onMounted(() => {
  prism.highlightAll()
})
</script>
