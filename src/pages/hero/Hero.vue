<template>
  <div :id="IdEnum.HERO" class="hero-page">
    <div class="hero-page__section">
      <div class="hero-page__text">
        <h1 class="hero-page__title">{{ FULL_NAME }}</h1>
        <p class="hero-page__subtitle" v-html="SUBTITLE"></p>
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
      <h2 class="hero-page__title--secondary" v-html="TITLE"></h2>
    </div>
    <!-- TODO: move these -->
    <div class="hero-page__outer hero-page__outer--left">
      {{ FULL_NAME }}
    </div>
    <div class="hero-page__outer hero-page__outer--right">
      {{ FULL_NAME }}
    </div>
    <ThemeSwitcher class="hero-page__outer hero-page__outer--theme" />
  </div>
  <MaskGroup />
</template>
<!-- TODO: mobile -->
<script setup lang="ts">
import { IdEnum } from '@/enums/id'
import { popupData } from '@/data/heroPopupData'
import Popup from './components/Popup.vue'
import MaskGroup from './MaskGroup.vue'
import ThemeSwitcher from './ThemeSwitcher.vue'

const FULL_NAME = 'Patrikas Dapšys'
const SUBTITLE = `
    I'm a <span class="keyword">Frontend software engineer</span> with a
  <span class="keyword"> strong passion</span> for building web applications with
  <span class="keyword"> great user experiences.</span>
`
const TITLE = `
  Frontend <br />
  software engineer
`
</script>

<style scoped lang="scss">
@use '../../styles/partials/_colors';
@use '../../styles/partials/_z-index';

$mask-width: 32px;
$outer-text-horizontal-offset: -45px;
$outer-text-vertical-offset: 88px;
$theme-switcher-vertical-offset: 4px;

.hero-page {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100vh - $mask-width * 2);
  margin: $mask-width;
  padding: $mask-width;
  border: 2px solid colors.$base-text-color-dark;

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

  &__outer {
    position: absolute;
    white-space: nowrap;
    z-index: z-index.$outer-text-z-index;
    font-weight: 800;
    color: colors.$base-text-color-darkest;
    filter: blur(0.5px);

    &--left {
      left: $outer-text-horizontal-offset;
      top: $outer-text-vertical-offset;
      transform: rotate(270deg);
    }

    &--right {
      right: $outer-text-horizontal-offset;
      bottom: $outer-text-vertical-offset;
      transform: rotate(90deg);
    }

    &--theme {
      bottom: calc($outer-text-vertical-offset + $theme-switcher-vertical-offset);
      transform: rotate(270deg);
      left: $outer-text-horizontal-offset;
    }
  }
}
</style>

<style lang="scss">
.hero-page {
  .keyword {
    font-weight: 400;
    font-style: italic;
  }
}
</style>
