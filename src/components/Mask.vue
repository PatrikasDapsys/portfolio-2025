<template>
  <div class="mask">s</div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  width: string
  height: string
}>()

const width = computed(() => props.width)
</script>

<style scoped lang="scss">
.mask {
  width: v-bind(width);
  height: v-bind(height);
  background: red;
  position: absolute;
  top: 0;
  left: 0;
}
</style>
