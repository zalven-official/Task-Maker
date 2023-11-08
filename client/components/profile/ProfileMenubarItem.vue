<template>
  <nav>
    <ul class="menu w-full rounded-box">
      <li v-for="(item, index) in menuItems" :key="index">
        <a class="hover:text-primary text-base-content group p-3  hover:font-bold font-normal">
          <icon :icon="item.icon" class="text-right w-5 h-5 mr-3 group-hover:opacity-100 opacity-60" />
          <div class="flex">
            <p class="group-hover:opacity-100 opacity-60">{{ item.label }}</p>
            <div class="w-4 h-4 bg-red-400 text-center text-white text-xs rounded-sm ml-2" v-if="item.tip">{{ item.tip }}
            </div>
          </div>
          <icon icon="fa-solid fa-chevron-right" class="text-right w-3 h-3 group-hover:block hidden" />
        </a>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
import { type MenuItem } from '@/types'
const props = defineProps({
  menuItems: { type: Array<MenuItem>, default: [] },
});
</script>