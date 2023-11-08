<template>
  <Navbar>
    <template #start>
      <a class="btn btn-ghost normal-case text-xl">
        <img src="/images/goteam-logo-dark.png" width="100" alt="goteam-logo" />
      </a>
      <ul class="menu menu-horizontal px-1 hidden md:flex">
        <li><a class="opacity-70 hover:opacity-100 text-sm">Careers</a></li>
        <li><a class="opacity-70 hover:opacity-100 text-sm">Find your Role</a></li>
      </ul>
    </template>


    <template #center>
      <Searchbar v-model="searchModel" @search="handleSearch" placeholder="Type for job title or role" />
    </template>

    <template #end>

      <input id="profile-drawer" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content">
        <label for="profile-drawer" class="btn bg-neutral border-none lg:hidden  flex">
          <icon icon=" fa-solid fa-bars" class="text-right w-4 h-4" />
        </label>
      </div>
      <ProfileNavbarMobile />

      <div class="text-right text-sm lg:block hidden">
        <p class="font-bold">{{ `${profile.firstname} ${profile.lastname}` }}</p>
        <p class="text-primary">{{ profile.email }}</p>
      </div>
      <div class="w-14 rounded-full p-2 lg:block hidden">
        <img :src="profile.profilePicture" alt="profile-picture" />
      </div>


    </template>
  </Navbar>
</template>

<script setup lang="ts">
const { profile } = useProfileStore()
const searchModel = ref<string>('');

const handleSearch = (value: string) => { };

</script>