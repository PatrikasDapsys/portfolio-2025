<template>
  <div :id="IdEnum.EXPERIENCE" class="experience-page">
    <h2 class="experience-page__title">Experience</h2>
    <div class="experience-page__content">
      <ExperienceEntry
        title="BitDegree"
        paragraph="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla distinctio doloribus quaerat quos, totam molestiae vel iure sunt hic veritatis, nobis iusto culpa! Deserunt et dicta voluptas consectetur ad necessitatibus totam facere aliquam repudiandae ex exercitationem hic non, molestiae illo?
"
      />
      <ExperienceEntry
        title="Frontend Simplified"
        paragraph="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla distinctio doloribus quaerat quos, totam molestiae vel iure sunt hic veritatis, nobis iusto culpa! Deserunt et dicta voluptas consectetur ad necessitatibus totam facere aliquam repudiandae ex exercitationem hic non, molestiae illo?
"
      />
    </div>
    <MaskGroup />
  </div>
</template>

<script setup lang="ts">
import { IdEnum } from '@/enums/id'
import ExperienceEntry from './components/ExperienceEntry.vue'
import MaskGroup from './MaskGroup.vue'
</script>

<style scoped lang="scss">
@use '../../styles/partials/_colors';
@use '../../styles/partials/_z-index';
@use '../../styles/partials/_breakpoints';

.experience-page {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 0 32px;
  margin-top: 120px;
  margin-bottom: 120px; //TODO: remove
  position: relative;

  @media (min-width: breakpoints.$md-screen-breakpoint) {
    padding: 0 20%;
  }

  &__title {
    text-transform: uppercase;
    line-height: 1;
    font-size: 64px;
    letter-spacing: 12px;
    margin-bottom: 64px;
    z-index: z-index.$outer-text-z-index;
  }

  &__content {
    padding: 84px 16px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 42px;
    align-items: center;
    height: 60%;
    border: 2px solid colors.$base-text-color-dark;
  }
}
</style>
