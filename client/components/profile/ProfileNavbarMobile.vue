<template>
  <div class="drawer-side">
    <label for="profile-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
    <ul class="menu p-4 w-80 min-h-full bg-base-100 text-base-content ">
      <div class="flex justify-end border-l-4 border-indigo-500 rounded-md bg-base-200 mb-5">
        <div class="text-right text-sm mt-2">
          <p class="font-bold">{{ `${profile.firstname} ${profile.lastname}` }}</p>
          <p class="text-primary">{{ profile.email }}</p>
        </div>
        <div class="w-14 rounded-full p-2">
          <img :src="profile.profilePicture" />
        </div>
      </div>
      <ul class="menu menu-horizontal px-1 block">
        <li><a class="opacity-70 hover:opacity-100 text-sm">Careers</a></li>
        <li><a class="opacity-70 hover:opacity-100 text-sm">Find your Role</a></li>
      </ul>
      <hr>
      <ProfileMenubarItem :menuItems="progressPages" />
      <hr>
      <ProfileMenubarItem :menuItems="profilePage" />
      <button class="btn btn-primary mt-5">Logout</button>
      <Trademark />
    </ul>
  </div>
</template>

<script setup lang="ts">
import { profilePage, progressPages } from './profile.constants'
const { profile } = useProfileStore()


</script>