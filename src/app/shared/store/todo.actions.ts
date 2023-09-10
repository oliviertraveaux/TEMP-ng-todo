import {
  createAction,
  createActionGroup,
  emptyProps,
  props,
} from '@ngrx/store';
import {
  AddTodoFormInterface,
  AddTodoRequestInterface,
  TodoInterface,
} from '../types/todo.interface';

export const todoActions = createActionGroup({
  source: 'todo',
  events: {
    getTodos: emptyProps(),
    getTodosSuccess: props<{ todos: TodoInterface[] }>(),
    getTodosFailure: props<{ errors: Error }>(),
    addTodo: props<{ request: AddTodoFormInterface }>(),
    addTodoSuccess: props<{ request: AddTodoRequestInterface }>(),
    addTodoFailure: props<{ errors: Error }>(),
    deleteTodo: props<{ id: number }>(),
    deleteTodoSuccess: props<{ todos: TodoInterface[] }>(),
    deleteTodoFailure: props<{ errors: Error }>(),
  },
});
