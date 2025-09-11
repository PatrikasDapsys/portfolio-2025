<template>
  <div class="test">hero</div>
  <Mask
    :width="maskWidth"
    :height="maskHeight"
    :width-measurement="MeasurementsEnum.PX"
    :height-measurement="MeasurementsEnum.PERCENTAGE"
  />
</template>

<script setup lang="ts">
import Mask from '@/components/Mask.vue'
import { MeasurementsEnum } from '@/enums/measurements'
import { ref } from 'vue'

const maskWidth = ref(40)
const maskHeight = ref(100)
</script>

<style scoped lang="scss">
.test {
  width: v-bind(maskWidth);
}
</style>
