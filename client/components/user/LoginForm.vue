
<template>
  <div class="w-full flex items-center justify-center bg-neutral p-5 shadow-sm rounded-md py-10">
    <form @submit.prevent="submitForm" class="w-full max-w-md">
      <FormInput label="Email" placeholder="your.email@example.com" type="text" name="email" :required="true" />
      <FormInput label="Password" placeholder="Password" type="password" name="password" :required="true" />
      <button type="submit" class="btn btn-primary w-full mt-5">
        Login
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { useForm } from 'vee-validate';
import * as Yup from 'yup';
import { type UserLogin } from '~/types';

const { handleSubmit } = useForm<UserLogin>({
  initialValues: {
    email: '',
    password: '',
  },
  validationSchema: Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
  }),
});

const { login } = useUserStore()
const submitForm = handleSubmit(async (values: UserLogin) => {
  const { error } = await login(values)
  console.log(error)
});
</script>
