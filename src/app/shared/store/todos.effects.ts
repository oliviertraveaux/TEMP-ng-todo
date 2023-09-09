import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, of, tap } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { TodoService } from '../services/todo.services';
import { todoActions } from './todo.actions';

export const todoEffect = createEffect(
  (actions$ = inject(Actions), todoService = inject(TodoService)) => {
    return actions$.pipe(
      ofType(todoActions.getTodos),
      switchMap(() => {
        return todoService.getTodos().pipe(
          tap((todos) => console.log('todos:', todos)),
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
