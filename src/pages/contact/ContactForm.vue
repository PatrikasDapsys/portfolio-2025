<template>
  <form @submit.prevent="submitForm" class="contact-form">
    <input
      v-for="entry in FORM_DATA"
      :key="entry.id"
      :id="entry.id"
      :name="entry.name"
      :type="entry.type"
      v-model="formData[entry.key]"
      :autocomplete="entry.autocomplete ? 'on' : 'off'"
      required
    />
    <button type="submit">Submit</button>
  </form>
</template>

<script setup lang="ts">
import { formIdEnum } from '@/enums/id'
import { reactive } from 'vue'

interface FormSubmitData {
  email: string
  title: string
  message: string
}

interface FormData {
  id: string
  name: string
  type: string
  key: keyof FormSubmitData
  autocomplete?: boolean
}

const formData = reactive<FormSubmitData>({
  email: '',
  title: '',
  message: '',
})

const FORM_EMAIL_NAME = 'Email'
const FORM_TITLE_NAME = 'Title'
const FORM_MESSAGE_NAME = 'Message'

const FORM_DATA: FormData[] = [
  {
    id: formIdEnum.EMAIL,
    name: FORM_EMAIL_NAME,
    type: 'email',
    key: 'email',
    autocomplete: true,
  },
  {
    id: formIdEnum.TITLE,
    name: FORM_TITLE_NAME,
    type: 'text',
    key: 'title',
  },
  {
    id: formIdEnum.MESSAGE,
    name: FORM_MESSAGE_NAME,
    type: 'text',
    key: 'message',
  },
]

const resetForm = () => {
  formData.title = ''
  formData.email = ''
  formData.message = ''
}

const validateForm = () => {
  return true
}

const submitForm = () => {
  if (!validateForm()) return
  console.log('form submitted', formData)

  resetForm()
}
</script>

<style scoped lang="scss">
@use '../../styles/partials/_variables';
@use '../../styles/partials/_colors';

$contact-border: 1px solid colors.$base-text-color-darkest;

.contact-form {
  display: flex;
  flex-direction: column;
}
</style>
