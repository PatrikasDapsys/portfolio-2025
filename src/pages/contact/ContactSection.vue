<template>
  <div class="contact-section">
    <p class="contact-section__introduction">{{ INTRODUCTION_TEXT }}</p>
    <ContactForm />
  </div>
</template>

<script setup lang="ts">
import ContactForm from './ContactForm.vue'

const INTRODUCTION_TEXT = `
I am actively seeking job opportunities and welcome any inquiries related to potential employment, reviews, invitations to collaborate on projects, or if you have any questions.
 Your feedback and testimonials are valuable to me, and I am open to exploring new projects and partnerships.
  Please feel free to reach out using the provided contact form.
   I look forward to connecting with you.
`
</script>

<style scoped lang="scss">
@use '../../styles/partials/_variables';
@use '../../styles/partials/_colors';

$contact-border: 1px solid colors.$base-text-color-darkest;

.contact-section {
  border: variables.$base-border;
  padding: 16px;

  &__introduction {
    font-size: 18px;
    text-align: center;
    padding: 16px 16px 32px;
    border-bottom: $contact-border;
  }
}
</style>
