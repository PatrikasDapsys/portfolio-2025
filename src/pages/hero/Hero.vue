<template>
  <div :id="IdEnum.HERO" class="hero-page">
    <div class="hero-page__section">
      <div class="hero-page__text">
        <h1 class="hero-page__title">Patrikas Dapšys</h1>
        <p class="hero-page__subtitle">
          I'm a <span class="keyword">Frontend software engineer</span> with a
          <span class="keyword"> strong passion</span> for building web applications with
          <span class="keyword"> great user experiences.</span>
        </p>
      </div>
      <ul class="hero-page__popups">
        <li v-for="entry in popupData">
          <Popup :iconClass="entry.iconClass" :link="entry.link" :hoverText="entry.hoverText" />
        </li>
      </ul>
    </div>
    <div class="hero-page__section">
      <ul class="hero-page__links">
        <!-- TODO -->
        <li>Tab 1</li>
        <li>Tab 2</li>
        <li>Tab 3</li>
      </ul>
      <h2 class="hero-page__title--secondary">
        Frontend <br />
        software engineer
      </h2>
    </div>
    <Mask
      class="hero-page__mask--left"
      :width="maskWidthVertical"
      :height="maskHeightVertical"
      :width-measurement="MeasurementsEnum.PX"
      :height-measurement="MeasurementsEnum.PERCENTAGE"
    />
    <Mask
      class="hero-page__mask--right"
      :width="maskWidthVertical"
      :height="maskHeightVertical"
      :width-measurement="MeasurementsEnum.PX"
      :height-measurement="MeasurementsEnum.PERCENTAGE"
    />
    <Mask
      class="hero-page__mask--top"
      :width="maskWidthHorizontal"
      :height="maskHeightHorizontal"
      :width-measurement="MeasurementsEnum.PERCENTAGE"
      :height-measurement="MeasurementsEnum.PX"
    />
    <Mask
      class="hero-page__mask--bottom"
      :width="maskWidthHorizontal"
      :height="maskHeightHorizontal"
      :width-measurement="MeasurementsEnum.PERCENTAGE"
      :height-measurement="MeasurementsEnum.PX"
    />
  </div>
</template>

<script setup lang="ts">
import Mask from '@/components/Mask.vue'
import { IdEnum } from '@/enums/id'
import { MeasurementsEnum } from '@/enums/measurements'
import { popupData } from '@/data/heroPopupData'
import { ref } from 'vue'
import Popup from './components/Popup.vue'

const maskWidthVertical = ref(32)
const maskHeightVertical = ref(100)
const maskWidthHorizontal = ref(100)
const maskHeightHorizontal = ref(32)
</script>

<style scoped lang="scss">
@use '../../styles/partials/colors';

$mask-width: 32px;

.keyword {
  font-weight: 400;
  font-style: italic;
}

.hero-page {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100vh - $mask-width * 2);
  margin: $mask-width;
  padding: $mask-width;
  border: 1px solid blue;

  &__section {
    display: flex;
    justify-content: space-between;
  }

  &__text {
    display: flex;
    flex-direction: column;
  }

  &__title {
    font-size: 72px;
    line-height: 1;
    padding-bottom: 8px;

    &--secondary {
      font-size: 96px;
      text-transform: uppercase;
      line-height: 86px;
      text-align: end;
      color: colors.$base-text-color-dark;
    }
  }

  &__subtitle {
    font-size: 18px;
    max-width: 60%;
  }

  &__popups {
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &__popup {
    font-size: 24px;
  }

  &__links {
    display: flex;
    flex-direction: column;
    justify-content: end;
  }

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
