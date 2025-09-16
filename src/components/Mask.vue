<template>
  <div class="mask" :style="maskStyles"></div>
</template>

<script setup lang="ts">
import { MeasurementsEnum } from '@/enums/measurements'
import { computed } from 'vue'

const props = defineProps<{
  width: number
  height: number
  widthMeasurement: MeasurementsEnum
  heightMeasurement: MeasurementsEnum
}>()

const formatMeasurement = (value: number, measurement: MeasurementsEnum) => {
  return `${value}${measurement}`
}

const maskStyles = computed(() => ({
  width: formatMeasurement(props.width, props.widthMeasurement),
  height: formatMeasurement(props.height, props.heightMeasurement),
}))
</script>

<style scoped lang="scss">
@use '../styles/partials/z-index';
@use '../styles/partials/colors';

.mask {
  background-color: colors.$base-background-color;
  z-index: z-index.$mask-z-index;
  transition:
    background-color,
    100ms ease-in-out;
  position: absolute;
}

.light-theme {
  .mask {
    background-color: colors.$light-base-background-color;
  }
}
</style>
