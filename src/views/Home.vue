<template>
  <default-layout>
    <login-form />
  </default-layout>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import LoginForm from '@/components/forms/authentication/login.vue'

export default defineComponent({
  name: 'Home-view',
  components: {
    LoginForm
  }
})
</script>
