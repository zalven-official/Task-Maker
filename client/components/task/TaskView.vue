<template>
  <div class="bg-neutral shadow-md p-3">
    <div class="w-full flex justify-end gap-4 my-5">
      <nuxt-link :to="{ path: '/task/create' }" class="btn btn-primary text-base-100">
        <icon icon="fa-solid fa-plus" class="text-right h-3" /> Add Task
      </nuxt-link>
    </div>
    <div class="shadow-sm">
      <Table :items="tasks" :columns="tableColumns" :actions="tableActions" />
    </div>
  </div>
</template>
<script setup lang="ts">
import type { TableAction, TableColumn, Task } from '~/types';
import { formatDateToCustomString } from '@/utils/functions'

const router = useRouter()
const taskStore = useTaskStore()
const { fetchTasks, createTask, updateTask, deleteTask, getTask } = taskStore;
const { tasks } = storeToRefs(taskStore)

onMounted(() => {
  fetchTasks()
})


const tableColumns: TableColumn[] = [
  { name: 'Title', value: 'title' },
  { name: 'Description', value: 'description' },
  { name: 'Due Date', value: 'dueDate', formatCell: formatDateToCustomString },
  { name: 'Completion Status', value: 'completionStatus' },
]

const tableActions: TableAction[] = [
  { name: 'View', value: 'view', icon: 'fa-solid fa-eye', color: 'info', action: (item: Task) => router.push({ path: `/task/${item.id}`, query: { readonly: 'true' } }) },
  { name: 'Edit', value: 'edit', icon: 'fa-solid fa-pencil', color: 'accent', action: (item: Task) => router.push({ path: `/task/${item.id}` }) },
  { name: 'Delete', value: 'delete', icon: 'fa-solid fa-trash', color: 'error', action: (item: Task) => deleteTask(item.id) },
]

</script>