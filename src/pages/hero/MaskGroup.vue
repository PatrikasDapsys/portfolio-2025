<template>
  <Mask
    class="mask-group__mask--left"
    :width="maskWidthVertical"
    :height="maskHeightVertical"
    :width-measurement="MeasurementsEnum.PX"
    :height-measurement="MeasurementsEnum.PERCENTAGE"
  />
  <Mask
    class="mask-group__mask--right"
    :width="maskWidthVertical"
    :height="maskHeightVertical"
    :width-measurement="MeasurementsEnum.PX"
    :height-measurement="MeasurementsEnum.PERCENTAGE"
  />
  <Mask
    class="mask-group__mask--top"
    :width="maskWidthHorizontal"
    :height="maskHeightHorizontal"
    :width-measurement="MeasurementsEnum.PERCENTAGE"
    :height-measurement="MeasurementsEnum.PX"
  />
  <Mask
    class="mask-group__mask--bottom"
    :width="maskWidthHorizontal"
    :height="maskHeightHorizontal"
    :width-measurement="MeasurementsEnum.PERCENTAGE"
    :height-measurement="MeasurementsEnum.PX"
  />
</template>

<script setup lang="ts">
import Mask from '@/components/Mask.vue'
import { MeasurementsEnum } from '@/enums/measurements'
import { ref } from 'vue'

const maskWidthVertical = ref(32)
const maskHeightVertical = ref(100)
const maskWidthHorizontal = ref(100)
const maskHeightHorizontal = ref(32)
</script>

<style scoped lang="scss">
.mask-group {
  &__mask {
    &--left {
      left: 0;
      top: 0;
    }

    &--right {
      right: 0;
      top: 0;
    }

    &--top {
      top: 0;
      left: 0;
    }

    &--bottom {
      bottom: 0;
      left: 0;
    }
  }
}
</style>
