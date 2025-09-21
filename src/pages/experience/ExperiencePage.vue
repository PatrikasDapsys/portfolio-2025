<template>
  <div :id="IdEnum.EXPERIENCE" class="experience-page">
    <PageTitle :title="PAGE_TITLE" />
    <div class="experience-page__content">
      <ExperienceEntry
        v-for="entry in experienceData"
        :title="entry.title"
        :date="entry.date"
        :paragraph="entry.paragraph"
      />
    </div>
    <MaskGroup />
  </div>
</template>

<script setup lang="ts">
import { IdEnum } from '@/enums/id'
import ExperienceEntry from './components/ExperienceEntry.vue'
import MaskGroup from './MaskGroup.vue'
import experienceData from '@/data/experienceData'
import PageTitle from '@/components/PageTitle.vue'

const PAGE_TITLE = 'Experience'
</script>

<style scoped lang="scss">
@use '../../styles/partials/_colors';
@use '../../styles/partials/_z-index';
@use '../../styles/partials/_breakpoints';
@use '../../styles/partials/_variables';

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
    padding: 0 10%;
  }

  @media (min-width: breakpoints.$lg-screen-breakpoint) {
    padding: 0 20%;
  }

  &__title {
    text-transform: uppercase;
    line-height: 1;
    font-size: 32px;
    letter-spacing: 6px;
    margin-bottom: 64px;
    z-index: z-index.$outer-text-z-index;

    @media (min-width: breakpoints.$sm-screen-breakpoint) {
      font-size: 48px;
      letter-spacing: 12px;
    }

    @media (min-width: breakpoints.$md-screen-breakpoint) {
      font-size: 64px;
    }
  }

  &__content {
    padding: 84px 16px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 42px;
    align-items: center;
    height: 60%;
    border: variables.$base-border;
  }
}
</style>
