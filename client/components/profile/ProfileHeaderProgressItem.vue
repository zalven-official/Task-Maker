<template>
  <div class="flex justify-center align-middle items-center w-full p-3 mx-3">
    <div class=" avatar placeholder">
      <div class="bg-base-200 text-neutral-content rounded-full w-10 mr-3">
        <icon :icon="icon" class="text-right w-4 h-4 opacity-70 mx-3" />
      </div>
    </div>
    <div class=" text-xs w-4/5">
      <p class="font-bold opacity-70">{{ text }}</p>
      <div class="flex justify-center items-center">
        <progress class="progress w-full h-1 bg-base-200 mt-1" :value="progress" :max="1" :class="{
          'progress-warning': parseFloat(progress) > 0.50 && parseFloat(progress) < .99,
          'progress-error': parseFloat(progress) <= 0.50,
          'progress-success': parseFloat(progress) >= 0.99
        }"></progress>
        <p class="font-bold text-xs w-1/4 ml-2" :class="{
          'text-warning': parseFloat(progress) > 0.50 && parseFloat(progress) < .99,
          'text-error': parseFloat(progress) <= 0.50,
          'text-success': parseFloat(progress) >= 0.99
        }">{{ progress * 100 }}%</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { icon, progress, text } = defineProps(['icon', 'progress', 'text']);
</script>