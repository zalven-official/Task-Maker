<template>
  <client-only>
    <font-awesome-icon v-bind="$props" />
  </client-only>
</template>

<script lang="ts" setup>
const props = defineProps({
  class: String,
  icon: String,
  size: [String, Number],
  rotation: Number,
  flip: String,
  spin: Boolean,
  pulse: Boolean,
  fixedWidth: Boolean,
  border: Boolean,
  pull: String,
  mask: Object,
  symbol: String,
  title: String,
});
</script>