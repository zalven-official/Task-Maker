<template>
  <div class="w-full flex items-center justify-center bg-neutral p-5 shadow-sm rounded-md py-10">
    <form @submit="submitForm" class="w-full max-w-md">
      <FormInput label="Title" label-alt="What is your task title?" placeholder="Sample Title" type="text" name="title"
        :required="true" :disabled="readonly" />
      <FormInput label="Description" label-alt="Task Description" placeholder="Creating something..." type="textarea"
        name="description" :required="true" :disabled="readonly" />
      <FormInput label="Due Date" label-alt="Task Due Date?" type="date" name="dueDate" :required="true"
        :disabled="readonly" />
      <FormInput label="Completion Status" label-alt="Is Task Complete?" type="select" name="completionStatus"
        :required="true" :disabled="readonly" :options="tasksStatus" />
      <button type="submit" class="btn btn-primary w-full mt-5" v-if="!readonly">
        <span v-if="!id">
          <icon icon="fa-solid fa-plus" class="text-right h-3 mr-2" />
          Submit
        </span>
        <span v-else>
          <icon icon="fa-solid fa-pencil" class="text-right h-3 mr-2" />
          Update
        </span>
      </button>
      <div class="flex justify-between">

        <button type="button" class="btn btn-error mt-5 text-base-100" v-if="!readonly && id" @click="deleteTask(id)">
          <icon icon="fa-solid fa-trash" class="text-right h-3 mr-2 text-base-100" />
          Delete
        </button>

        <button type="button" class="btn btn-info mt-5 text-base-100" v-if="!readonly && id"
          @click="router.replace({ path: `/task/${id}`, query: { readonly: 'true' } })">
          <icon icon="fa-solid fa-eye" class="text-right h-3 text-base-100" />
          View
        </button>

        <button type="button" class="btn btn-info mt-5 text-base-100" v-if="readonly && id"
          @click="router.replace({ path: `/task/${id}` })">
          <icon icon="fa-solid fa-pencil" class="text-right h-3 text-base-100" />
          Edit
        </button>

      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { useForm } from 'vee-validate';
import * as Yup from 'yup';
import { TaskStatus, type Task } from '~/types';

const router = useRouter()
const props = defineProps({
  readonly: { type: Boolean, default: false },
  id: { type: String, default: '', required: false },
});

const { handleSubmit, setValues } = useForm<Task>({
  initialValues: {
    id: '',
    title: '',
    description: '',
    dueDate: new Date(),
    completionStatus: TaskStatus.INCOMPLETE,
  },
  validationSchema: Yup.object<Task>().shape({
    title: Yup.string().required('Title is required'),
    description: Yup.string().required('Description is required'),
    dueDate: Yup.date().required('Due Date is required'),
    completionStatus: Yup.string().required('Completion Status is required'),
  }),
});

const { tasksStatus, createTask, updateTask, deleteTask, getTask } = useTaskStore()

onMounted(() => {
  initTask()
})
onBeforeRouteUpdate((newRoute) => {
  initTask()
})

const initTask = async () => {
  if (props.id) {
    setValues(await getTask(props.id))
  }
}

const submitForm = handleSubmit(async (value: Task) => {
  if (props.readonly) return
  props.id ? await createTask(value) : await updateTask(value)
});

</script>
