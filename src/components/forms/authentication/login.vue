<template>
  <div>
    <input v-model="username" type="text" name="username" />
    <span>{{ errors.username }}</span>
    <br />
    <input v-model="password" type="text" name="password" />
    <span>{{ errors.password }}</span>
    <button>Accedi</button>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useForm, useField } from 'vee-validate'
import * as yup from 'yup'

const schema = yup.object({
  username: yup.string().required().email(),
  password: yup.string().required().min(8).matches(
    // At least 8 characters, one uppercase word, one lowercase, one special character and one number
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
  )
})

export default defineComponent({
  name: 'login-form',
  setup () {
    const { errors } = useForm({ validationSchema: schema })
    const { value: username } = useField('username')
    const { value: password } = useField('password')
    return {
      errors,
      username,
      password
    }
  }
})

</script>
