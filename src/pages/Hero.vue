<template>
  <div class="test">hero</div>
  <Mask :width="maskWidth" :height="maskHeight" />
</template>

<script setup lang="ts">
import Mask from '@/components/Mask.vue'
import { ref } from 'vue'

const maskWidth = ref('40px')
const maskHeight = ref('100%')
</script>

<style scoped lang="scss">
.test {
  width: v-bind(maskWidth);
}
</style>
