import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, of, tap, concatMap } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { TodoService } from '../services/todo.services';
import { todoActions } from './todo.actions';
import { TodoState } from '../types/todo.interface';

export const getTodoEffect = createEffect(
  (actions$ = inject(Actions), todoService = inject(TodoService)) => {
    return actions$.pipe(
      ofType(todoActions.getTodos),
      switchMap(() => {
        return todoService.getTodos().pipe(
          map((todos) =>
            todos.map((todo) => ({ ...todo, state: TodoState.toDo }))
          ),
          tap((todos) => console.log(todos)),
          map((todos) => todoActions.getTodosSuccess({ todos }))
        );
      }),
      catchError((errorResponse: HttpErrorResponse) => {
        return of(
          todoActions.getTodosFailure({
            errors: errorResponse.error.errors,
          })
        );
      })
    );
  },
  { functional: true }
);

export const addTodoEffect = createEffect(
  (actions$ = inject(Actions), todoService = inject(TodoService)) => {
    return actions$.pipe(
      ofType(todoActions.addTodo),
      concatMap((action) => {
        return todoService.addTodo(action.request).pipe(
          tap((newTodo) => console.log('newTodo from effects', newTodo)),
          map((newTodo) => todoActions.addTodoSuccess({ request: newTodo }))
        );
      }),
      catchError((errorResponse: HttpErrorResponse) => {
        return of(
          todoActions.addTodoFailure({
            errors: errorResponse.error.errors,
          })
        );
      })
    );
  },
  { functional: true }
);

export const deleteTodoEffect = createEffect(
  (actions$ = inject(Actions), todoService = inject(TodoService)) => {
    return actions$.pipe(
      ofType(todoActions.deleteTodo),
      concatMap((todo) => {
        return todoService.deleteTodo(todo.id).pipe(
          tap((todos) => console.log('filteredTodos from effect', todos)),
          map((todos) => todoActions.deleteTodoSuccess({ todos: todos }))
        );
      }),
      catchError((errorResponse: HttpErrorResponse) => {
        return of(
          todoActions.addTodoFailure({
            errors: errorResponse.error.errors,
          })
        );
      })
    );
  },
  { functional: true }
);
