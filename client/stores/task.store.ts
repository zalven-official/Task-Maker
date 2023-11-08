import { defineStore } from 'pinia'
import { type Task, TaskStatus, type ListOfTaskStatus } from '~/types'


export const useTaskStore = defineStore('task', () => {

  const tasks = ref<Task[]>([])

  const { errorToast, successToast } = useToastStore()
  const router = useRouter()
  const route = useRoute();

  const tasksStatus = ref<ListOfTaskStatus>([
    { value: TaskStatus.COMPLETE, text: "Complete" },
    { value: TaskStatus.INCOMPLETE, text: "Incomplete" },
  ])

  const fetchTasks = async () => {
    const { data, error } = await useApiFetch<{ data: Task[], message: String }>('/api/tasks', { method: 'GET', query: route.query })
    if (error.value) {
      errorToast(error.value.message)
      return
    }
    if (data.value?.data)
      tasks.value = data.value?.data
  }

  const getTask = async (taskId: string): Promise<Task | undefined> => {
    const { data, error } = await useApiFetch<{ data: Task }>(`/api/tasks/${taskId}`, { method: 'GET' })
    if (error.value) {
      errorToast(error.value.message)
      router.push('/task')
    }
    return data.value?.data
  }

  const createTask = async (newTask: Task) => {
    const result = await useApiFetch('/api/tasks', { body: newTask, method: 'POST' })

    await fetchTasks()
    router.push('/task')
    return result
  }

  const updateTask = async (updatedTask: Task) => {
    const result = await useApiFetch(`/api/tasks/${updatedTask.id}`, { body: updatedTask, method: 'PUT' })
    await fetchTasks()
    successToast('Successfully update task')
    return result
  }

  const deleteTask = async (taskId: string) => {
    const { error } = await useApiFetch(`/api/tasks/${taskId}`, { method: 'DELETE' })
    if (error.value) {
      errorToast(error.value.message)
      return
    }
    router.push('/task')
    await fetchTasks()
  };


  return {
    tasks,
    tasksStatus,
    fetchTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask,
  };
});
