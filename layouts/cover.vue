<script setup lang="ts">
import { handleBackground } from '../helpers/layoutHelper'
import { computed } from 'vue'
const props = defineProps({
  background: {
    default: '',
  },
})
const style = computed(() => handleBackground(props.background, true))
</script>
<template>
  <div class="slidev-layout cover" :style="style">
    <div class="my-auto w-full">
      <slot />
    </div>
  </div>
</template>