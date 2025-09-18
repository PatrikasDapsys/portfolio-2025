<template>
  <Mask
    class="mask-group__mask--left"
    :width="maskHorizontal.width"
    :height="maskHeightHorizontal"
    :width-measurement="maskHorizontal.unit"
    :height-measurement="MeasurementsEnum.PERCENTAGE"
  />
  <Mask
    class="mask-group__mask--right"
    :width="maskHorizontal.width"
    :height="maskHeightHorizontal"
    :width-measurement="maskHorizontal.unit"
    :height-measurement="MeasurementsEnum.PERCENTAGE"
  />
  <Mask
    class="mask-group__mask--top"
    :width="maskWidthVertical"
    :height="topMaskHeight"
    :width-measurement="MeasurementsEnum.PERCENTAGE"
    :height-measurement="MeasurementsEnum.PX"
  />
  <Mask
    class="mask-group__mask--bottom"
    :width="maskWidthVertical"
    :height="bottomMaskHeight"
    :width-measurement="MeasurementsEnum.PERCENTAGE"
    :height-measurement="MeasurementsEnum.PX"
  />
</template>

<script setup lang="ts">
import Mask from '@/components/Mask.vue'
import { MeasurementsEnum } from '@/enums/measurements'
import { computed, onMounted, ref } from 'vue'

const CONTAINER_MARGIN = 120
const HERO_MASK_HEIGHT = 32
const TITLE_MARGIN = 64

const windowWidth = ref(window.innerWidth)

const maskHorizontal = computed(() => {
  if (windowWidth.value < 758) {
    return {
      width: 32,
      unit: MeasurementsEnum.PX,
    }
  }

  return {
    width: 20,
    unit: MeasurementsEnum.PERCENTAGE,
  }
})
const maskHeightHorizontal = ref(100)
const maskWidthVertical = ref(100)

const topMaskHeight = ref(CONTAINER_MARGIN + HERO_MASK_HEIGHT + TITLE_MARGIN)
const updateWidth = () => {
  windowWidth.value = window.innerWidth
}
const bottomMaskHeight = ref(32)

onMounted(() => {
  window.addEventListener('resize', updateWidth)
})
</script>

<style scoped lang="scss">
$container-margin: 120px;
$hero-mask-height: 32px;

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
      top: calc((-1 * $container-margin) + $hero-mask-height);
      left: 0;
    }

    &--bottom {
      bottom: calc(-1 * $hero-mask-height);
      left: 0;
    }
  }
}
</style>
