import {
  createAction,
  createActionGroup,
  emptyProps,
  props,
} from '@ngrx/store';
import { TodoInterface } from '../types/todo.interface';

export const todoActions = createActionGroup({
  source: 'todo',
  events: {
    getTodos: emptyProps(),
    getTodosSuccess: props<{ todos: TodoInterface[] }>(),
    getTodosFailure: props<{ errors: Error }>(),
  },
});
