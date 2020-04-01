import { Task } from './../../../tasks/models/task.model';

export interface TasksState {
  data: ReadonlyArray<Task>;
  selectedTask: Readonly<Task>;
  readonly loading: boolean;
  readonly loaded: boolean;
  readonly error: Error | string;
}

export const initialTasksState: TasksState = {
    data: [
    ],
    selectedTask: null,
    loading: false,
    loaded: false,
    error: null
};
