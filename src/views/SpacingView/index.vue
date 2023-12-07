<template>
  <div class="">
    <DemoPanel title="spacing 内外间距辅助" :initialExpand="true">
      <template #description>
        <div>spacing 辅助类可以帮助你控制元素的内外间距。</div>
        <div>
          你可以使用诸如：
          <code class="lang-css"> mt-*, mb-*, mr-*, ml-*, my-*, mx-* </code>
          这些辅助类控制外间距。 使用
          <code class="lang-css"> pt-*, pb-*, pr-*, pl-*, py-*, px-* </code>
          控制内间距。
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
import CodeRaw from '@/lib/styles/spacing.scss?raw'
import prism from 'prismjs'

defineOptions({
  name: 'SpacingView',
})

onMounted(() => {
  prism.highlightAll()
})
</script>
