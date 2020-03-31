import { createAction, props } from '@ngrx/store';

import { Task } from './../../../tasks/models/task.model';

export const getTasks = createAction('[Task List Page (App)] GET_TASKS');

export const getTask = createAction(
  '[Add/Edit Task Page (App)] GET_TASK',
  props<{ taskID: number }>()
);

export const createTask = createAction(
  '[Task List Page] CREATE_TASK',
  props<{ task: Task }>()
);

export const updateTask = createAction(
  '[Task List Page] UPDATE_TASK',
  props<{ task: Task }>()
);

export const completeTask = createAction(
  '[Task List Page] COMPLETE_TASK',
  props<{ task: Task }>()
);

export const deleteTask = createAction(
  '[Task List Page] DELETE_TASK',
  props<{ task: Task }>()
);
