import { defineStore } from 'pinia'
import { type Task, TaskStatus, type ListOfTaskStatus } from '~/types'


export const useTaskStore = defineStore('task', () => {

  const tasks = ref<Task[]>([])

  const tasksStatus = ref<ListOfTaskStatus>([
    { value: TaskStatus.COMPLETE, text: "Complete" },
    { value: TaskStatus.INCOMPLETE, text: "Incomplete" },
  ])

  const fetchTasks = async () => {
    tasks.value = [
      {
        id: '1',
        title: 'Task 1',
        description: 'Description for Task 1',
        dueDate: new Date(),
        completionStatus: TaskStatus.COMPLETE,
        createdAt: new Date(),
      },
      {
        id: '2',
        title: 'Task 2',
        description: 'Description for Task 2',
        dueDate: new Date(),
        completionStatus: TaskStatus.INCOMPLETE,
        createdAt: new Date(),
      },
    ]
  }

  const getTask = async (taskId: string): Promise<Task> => {
    return {
      id: '2',
      title: 'Task 2',
      description: 'Description for Task 2',
      dueDate: new Date(),
      completionStatus: TaskStatus.INCOMPLETE,
      createdAt: new Date(),
    }
  }

  const createTask = async (newTask: Task) => {
    console.log("createTask")
    await fetchTasks()
  }

  const updateTask = async (updatedTask: Task) => {
    console.log("updateTask")
    await fetchTasks()
  }

  const deleteTask = async (taskId: string) => {
    console.log("deleteTask")
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
