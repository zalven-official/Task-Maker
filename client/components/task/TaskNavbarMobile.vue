<template>
  <div class="drawer-side">
    <label for="task-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
    <ul class="menu p-4 w-80 min-h-full bg-base-100 text-base-content ">
      <client-only v-if="isLoggedIn && user">
        <div class="flex justify-end border-l-4 border-indigo-500 rounded-md bg-base-200 mb-5">
          <div class="text-right text-sm mt-2">
            <p class="font-bold">{{ user?.name }}</p>
            <p class="text-primary">{{ user?.email }}</p>
          </div>
          <div class="w-14 rounded-full p-2">
            <div class="avatar placeholder">
              <div class="bg-primary text-base-100 rounded-full w-10">
                <span class="text-xs">{{ user?.name.charAt(0) }}</span>
              </div>
            </div>
          </div>
        </div>


      </client-only>
      <client-only>
        <ul class="menu menu-horizontal px-1 block">
          <li v-for="(value, key) in getTasksPages" :key="key">
            <nuxt-link :to="value.link">
              <icon :icon="value.icon" class="h-4 w-4 opacity-70 mr-3" v-if="value.icon" />
              <span class="opacity-70 hover:opacity-100 text-sm">{{ value.label }}</span>
            </nuxt-link>
          </li>
        </ul>
      </client-only>

      <hr>
      <button class="btn btn-primary mt-5" @click="logout" v-if="isLoggedIn">Logout</button>
      <Trademark />

    </ul>
  </div>
</template>


<script setup lang="ts">
import { getTasksPages } from './task.constants'

const userStore = useUserStore()
const { logout } = userStore
const { user, isLoggedIn } = storeToRefs(userStore)
</script>