<template>
  <div class="text-sm breadcrumbs w-full">
    <ul>
      <li v-for="(breadcrumb, index) in breadcrumbs" :key="index">
        <nuxt-link :to="{ path: breadcrumb.path.toString(), params: { ...breadcrumb.params } }">{{ breadcrumb.text
        }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import type { Breadcrumbs } from '~/types';

const props = defineProps({
  breadcrumbs: Array as PropType<Array<Breadcrumbs>>,
})

</script>
