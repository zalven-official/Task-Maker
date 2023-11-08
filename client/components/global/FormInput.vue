<template>
  <div class="form-control w-full p-2">
    <label class="label">
      <div class="tooltip tooltip-right tooltip-info" :data-tip="required ? 'field is required' : 'field not required'">
        <span class="label-text text-md font-semibold opacity-70">{{ label }}
          <span class="text-error" v-if="required">*</span>
        </span>
      </div>
      <span class="label-text-alt text-xs max-w-xs">{{ labelAlt }}</span>
    </label>

    <template v-if="type === 'text' || type === 'password'">
      <input :type="type" :placeholder="placeholder" class="input input-bordered w-full shadow-sm" autocomplete="on"
        :class="{ 'input-error': errorMessage }" v-model="value" />
    </template>

    <template v-else-if="type === 'textarea'">
      <textarea :placeholder="placeholder" class="textarea textarea-bordered w-full shadow-sm"
        :class="{ 'input-error': errorMessage }" v-model="value"></textarea>
    </template>

    <template v-else-if="type === 'select'">
      <select v-model="value" class="select select-bordered w-full" :class="{ 'input-error': errorMessage }">
        <option disabled value="">Select an option</option>
        <option v-for="option in options" :key="option.value" :value="option.value">{{ option.text }}</option>
      </select>
    </template>

    <template v-else-if="type === 'date'">
      <Datepicker v-model="value" input-class-name="input input-bordered w-full shadow-sm pl-3" class="bg-none"
        :class="{ 'input-error': errorMessage }">
      </Datepicker>
    </template>

    <label class="label">
      <span v-if="errorMessage" class="text-error label-text-alt">{{ errorMessage }}</span>
    </label>
  </div>
</template>

<script setup lang="ts">

import { useField } from "vee-validate";
import Datepicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'


const props = defineProps({
  label: String,
  labelAlt: String,
  type: String,
  placeholder: String,
  required: Boolean,
  disabled: Boolean,
  name: { type: String, required: true },
  options: { type: Array<{ value: any, text: string }>, default: [], required: false }
});

const { value, errorMessage } = useField<any>(props.name);
</script>

<style lang="scss" scoped>
.dp__input {
  background-color: none !important;
}
</style>