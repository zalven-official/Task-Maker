<template>
  <div class="w-full flex items-center justify-center bg-neutral p-5 shadow-sm rounded-md py-10">
    <form @submit.prevent="submitForm" class="w-full max-w-md">
      <FormInput label="name" placeholder="name" type="text" name="name" :required="true" />
      <FormInput label="Email" placeholder="your.email@example.com" type="text" name="email" :required="true" />
      <FormInput label="Password" placeholder="Password" type="password" name="password" :required="true" />
      <FormInput label="Confirm Password" placeholder="Confirm Password" type="password" name="password_confirmation"
        :required="true" />
      <button type="submit" class="btn btn-primary w-full mt-5">
        Register
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { useForm } from 'vee-validate';
import * as Yup from 'yup';
import { type UserRegister } from '~/types';

const { handleSubmit } = useForm<UserRegister>({
  initialValues: {
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  },
  validationSchema: Yup.object<UserRegister>().shape({
    name: Yup.string().required('name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
    password_confirmation: Yup.string()
      .oneOf([Yup.ref('password')], 'Passwords must match')
      .required('Confirm Password is required'),
  }),
});

const { register } = useUserStore()
const submitForm = handleSubmit(async (values: UserRegister) => {
  const { error } = await register(values)
  console.log(error)
});

</script>
