export type ListOfTaskStatus = Array<{ value: any, text: string }>;

export enum TaskStatus {
  COMPLETE = "Complete",
  INCOMPLETE = "Incomplete",
}

export interface Task {
  id: string;
  title: string;
  description: string;
  dueDate?: Date;
  completionStatus: TaskStatus;
  createdAt: Date;
  updatedAt?: Date;
}