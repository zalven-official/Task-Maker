<template>
  <div class="w-1/5 bg-base-100 lg:block hidden mx-10">
    <ProfileMenubarItem :menuItems="progressPages" />
    <hr>
    <ProfileMenubarItem :menuItems="profilePage" />
    <Trademark />
  </div>
</template>
<script setup lang="ts">
import { profilePage, progressPages } from './profile.constants'
</script>