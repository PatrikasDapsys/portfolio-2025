<template>
  <div :id="IdEnum.HERO" class="hero-page">
    <h1 class="hero-page__title">Patrikas Dapšys</h1>
    <p class="hero-page__subtitle">
      I'm a <span class="keyword">Frontend software engineer</span> with a
      <span class="keyword"> strong passion</span> for building web applications with
      <span class="keyword"> great user experiences.</span>
    </p>
    <h2 class="hero-page__title--secondary">Frontend software engineer</h2>
    <!-- <Mask
      :width="maskWidth"
      :height="maskHeight"
      :width-measurement="MeasurementsEnum.PX"
      :height-measurement="MeasurementsEnum.PERCENTAGE"
    /> -->
  </div>
</template>

<script setup lang="ts">
import Mask from '@/components/Mask.vue'
import { IdEnum } from '@/enums/id'
import { MeasurementsEnum } from '@/enums/measurements'
import { ref } from 'vue'

const maskWidth = ref(40)
const maskHeight = ref(100)
</script>

<style scoped lang="scss">
.keyword {
  font-weight: 400;
  font-style: italic;
}

.hero-page {
  &__title {
    font-size: 72px;

    &--secondary {
      font-size: 96px;
      text-transform: uppercase;
    }
  }

  &__subtitle {
    font-size: 18px;
  }
}
</style>
