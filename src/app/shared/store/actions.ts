import { createAction, createActionGroup, props } from '@ngrx/store';

// export const todoActions = createActionGroup({
//   source: 'todo',
//   events: {
//     addTodo: props<{ request: RegisterRequestInterface }>(),
//     'addTodo success': props<{ currentUser: CurrentUserInterface }>(),
//     'addTodo failure': props<{ errors: BackendErrorsInterface }>(),
//   },
// });

export const getTodo = createAction('[todo] getTodo');
export const addTodo = createAction('[todo] addTodo');
export const deleteTodo = createAction('[too] deleteTodo');
