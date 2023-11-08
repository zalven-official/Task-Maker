<template>
  <div class="relative w-full flex items-center justify-end">
    <input class="input border-base-300 input-sm p-5 input-bordered w-full bg-neutral rounded-full pl-7 z-0"
      :placeholder="placeholder" v-model="searchValue" @keyup.enter="handleSearchClick" />
    <button
      class="absolute h-5/6 bg-primary w-28 rounded-full mr-1 flex justify-center items-center text-base-100 text-sm hover:bg-primary-focus"
      @click="handleSearchClick">
      <icon icon="fa-solid fa-magnifying-glass" class="text-right h-4  mr-2" />
      Search
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits } from 'vue';

const { modelValue, placeholder } = defineProps(['modelValue', 'placeholder']);
const searchValue = ref(modelValue);

const emits = defineEmits();

const handleSearchClick = () => {
  emits('search', searchValue.value)
};
</script>