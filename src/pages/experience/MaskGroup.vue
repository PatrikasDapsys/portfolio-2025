<template>
  <Mask
    class="mask-group__mask--left"
    :width="maskHorizontal.width"
    :height="MASK_HORIZONTAL_HEIGHT"
    :widthMeasurement="maskHorizontal.widthUnit"
    :heightMeasurement="MeasurementsEnum.PERCENTAGE"
  />
  <Mask
    class="mask-group__mask--right"
    :width="maskHorizontal.width"
    :height="MASK_HORIZONTAL_HEIGHT"
    :widthMeasurement="maskHorizontal.widthUnit"
    :heightMeasurement="MeasurementsEnum.PERCENTAGE"
  />
  <Mask
    class="mask-group__mask--top"
    :width="MASK_VERTICAL_WIDTH"
    :height="topMaskHeight"
    :widthMeasurement="MeasurementsEnum.PERCENTAGE"
    :heightMeasurement="MeasurementsEnum.PX"
  />
  <Mask
    class="mask-group__mask--bottom"
    :width="MASK_VERTICAL_WIDTH"
    :height="bottomMaskHeight"
    :widthMeasurement="MeasurementsEnum.PERCENTAGE"
    :heightMeasurement="MeasurementsEnum.PX"
  />
</template>

<script setup lang="ts">
import Mask from '@/components/Mask.vue'
import { breakpointsEnum } from '@/enums/breakpoints'
import { MeasurementsEnum } from '@/enums/measurements'
import { computed, onMounted, onUnmounted, ref } from 'vue'

enum titleMarginEnum {
  XS = 32,
  SM = 48,
  MD = 64,
}

const CONTAINER_MARGIN = 120
const HERO_MASK_HEIGHT = 32
const MASK_VERTICAL_WIDTH = 100
const MASK_HORIZONTAL_HEIGHT = 100

const windowWidth = ref(window.innerWidth)

const bottomMaskHeight = ref(32) // TODO

const maskHorizontal = computed(() => {
  const isMd = windowWidth.value < breakpointsEnum.MD_SCREEN_BREAKPOINT
  const isLg = windowWidth.value < breakpointsEnum.LG_SCREEN_BREAKPOINT

  return {
    width: isMd ? 32 : isLg ? 10 : 20,
    widthUnit: isMd ? MeasurementsEnum.PX : MeasurementsEnum.PERCENTAGE,
  }
})

const topMaskHeight = computed(
  () => getTitleMargin(windowWidth.value) + CONTAINER_MARGIN + HERO_MASK_HEIGHT,
)

const updateWidth = () => {
  windowWidth.value = window.innerWidth
}

const getTitleMargin = (width: number) => {
  if (width < breakpointsEnum.SM_SCREEN_BREAKPOINT) return titleMarginEnum.XS
  if (width < breakpointsEnum.MD_SCREEN_BREAKPOINT) return titleMarginEnum.SM
  return titleMarginEnum.MD
}

onMounted(() => {
  window.addEventListener('resize', updateWidth)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateWidth)
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
