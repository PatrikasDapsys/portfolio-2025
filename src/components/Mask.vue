<template>
  <div class="mask">s</div>
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

const unitMap: Record<MeasurementsEnum, MeasurementsEnum> = {
  [MeasurementsEnum.PERCENTAGE]: MeasurementsEnum.PERCENTAGE,
  [MeasurementsEnum.PX]: MeasurementsEnum.PX,
}

const formatMeasurement = (value: number, measurement: MeasurementsEnum) => {
  const unit = unitMap[measurement]

  return unit ? `${value}${unit}` : null
}

const formattedWidth = computed(() => formatMeasurement(props.width, props.widthMeasurement))
const formattedHeight = computed(() => formatMeasurement(props.height, props.heightMeasurement))
</script>

<style scoped lang="scss">
@use '../styles/partials/z-index';

.mask {
  z-index: z-index.$mask-z-index;
  width: v-bind(formattedWidth);
  height: v-bind(formattedHeight);
  background: red;
  position: absolute;
  top: 0;
  left: 0;
}
</style>
