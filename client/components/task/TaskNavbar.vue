<template>
  <Navbar>
    <template #start>
      <a class="btn btn-ghost normal-case text-xl bg-white">
        <img src="/images/goteam-logo-dark.png" width="100" alt="goteam-logo" />
      </a>
    </template>
    <template #center>
      <Searchbar v-model="searchModel" @search="handleSearch" placeholder="Search for task" />
    </template>
  </Navbar>
</template>
<script setup lang="ts">
const { user } = useUserStore()
const searchModel = ref<string>('');
const handleSearch = (value: string) => { };
</script>