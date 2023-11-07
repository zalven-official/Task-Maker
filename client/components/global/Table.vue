<template>
  <div class="bg-neutral shadow-md">
    <div class="overflow-x-auto w-full min-w-md">
      <table class="table table-zebra">
        <thead class="bg-primary text-base-100">
          <tr>
            <th v-for="column in columns" :key="column.value">{{ column.name }}</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in items" :key="item.id">
            <td v-for="column in columns" :key="column.value">
              {{ formatCell(item[column.value], column.formatCell) }}
            </td>
            <td>
              <div v-for="action in actions" :key="action.value" :class="`tooltip tooltip-${action.color}`"
                :data-tip="action.name">
                <button @click="performAction(action.action, item)">
                  <icon :icon="action.icon" class="text-right h-3  mr-3 opacity-60 hover:text-primary hover:opacity-100"
                    :class="'hover:text-' + action.color" />
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { TableColumn, TableAction } from '@/types'

const props = defineProps({
  items: { type: Array as () => any[], default: [], required: true },
  columns: { type: Array as () => TableColumn[], default: [], required: true },
  actions: { type: Array as () => TableAction[], default: [], required: true },
});

const formatCell = (value: any, formatFunction?: Function) => {
  return formatFunction ? formatFunction(value) : value;
}

const performAction = (action: Function, item: any) => {
  if (action) {
    action(item);
  }
}
</script>
