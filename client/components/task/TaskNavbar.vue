<template>
  <Navbar>
    <template #start>
      <a class="btn btn-ghost normal-case text-xl bg-white">
        <img src="/images/goteam-logo-dark.png" width="100" alt="goteam-logo" />
      </a>

      <client-only>
        <ul class="menu menu-horizontal px-1 hidden md:flex">
          <li v-for="(value, key) in getTasksPages" :key="key">
            <nuxt-link :to="value.link">
              <span class="opacity-70 hover:opacity-100 text-sm">{{ value.label }}</span>
            </nuxt-link>
          </li>
        </ul>
      </client-only>

    </template>

    <template #center>
      <Searchbar v-model="searchModel" @search="handleSearch" placeholder="Search for task" />
    </template>

    <template #end>
      <input id="task-drawer" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content">
        <label for="task-drawer" class="btn bg-neutral border-none lg:hidden  flex">
          <icon icon=" fa-solid fa-bars" class="text-right w-4 h-4" />
        </label>
      </div>
      <TaskNavbarMobile />
      <client-only v-if="isLoggedIn && user">
        <div class="dropdown dropdown-end">
          <label tabindex="0" class="flex justify-center items-center" role="button">
            <div class="text-right text-sm lg:block hidden">
              <p class="font-bold">{{ user?.name }}</p>
              <p class="text-primary">{{ user?.email }}</p>
            </div>
            <div class="w-14 rounded-full p-2 lg:block hidden">
              <div class="avatar placeholder">
                <div class="bg-primary text-base-100 rounded-full w-10">
                  <span class="text-xs">{{ user?.name.charAt(0) }}</span>
                </div>
              </div>
            </div>
          </label>
          <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
            <li @click="logout"><a>Logout</a></li>
          </ul>
        </div>
      </client-only>
    </template>
  </Navbar>
</template>
<script setup lang="ts">
import { getTasksPages } from './task.constants'

const router = useRouter()
const route = useRoute()


const userStore = useUserStore()
const { logout } = userStore
const { user, isLoggedIn } = storeToRefs(userStore)
const { fetchTasks } = useTaskStore()

const searchModel = ref<string>(route.query.search as string);

const handleSearch = async (value: string) => {
  await router.push({ path: '/task', query: { search: value } })
  fetchTasks({ search: value })
}


</script>
