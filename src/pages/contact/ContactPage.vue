<template>
  <div class="contact-page">
    <PageTitle :title="PAGE_TITLE" />
    <ContactLinks class="contact-page__links" />
    <ContactSection />
  </div>
</template>

<script setup lang="ts">
import PageTitle from '@/components/PageTitle.vue'
import ContactLinks from './ContactLinks.vue'
import ContactSection from './ContactSection.vue'

const PAGE_TITLE = 'Contact'
</script>

<style scoped lang="scss">
@use '../../styles/partials/_colors';
@use '../../styles/partials/_z-index';
@use '../../styles/partials/_breakpoints';

$links-gap: 24px;

.contact-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh; // TODO: remove
  padding: 0 32px;

  @media (min-width: breakpoints.$md-screen-breakpoint) {
    padding: 0 10%;
  }

  @media (min-width: breakpoints.$lg-screen-breakpoint) {
    padding: 0 20%;
  }

  &__links {
    margin-bottom: 16px;
  }
}
</style>
