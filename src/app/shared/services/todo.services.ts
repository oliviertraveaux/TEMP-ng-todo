import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, filter, map, of, take, tap } from 'rxjs';
import { todosMock } from '../data/todosMock';
import {
  AddTodoFormInterface,
  AddTodoRequestInterface,
  TodoInterface,
  TodoState,
} from '../types/todo.interface';
import { Store } from '@ngrx/store';
import { selectTodos } from '../store/todo.reducers';
import { todoActions } from '../store/todo.actions';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  http = inject(HttpClient);
  private store = inject(Store);
  private todos$ = this.store.select(selectTodos);

  getTodos(): Observable<TodoInterface[]> {
    return of(todosMock);
  }

  addTodo(newTodo: AddTodoFormInterface): Observable<AddTodoRequestInterface> {
    const todo = {
      id: Math.random(),
      ...newTodo,
      state: TodoState.toDo,
    };
    const request: AddTodoRequestInterface = {
      todo: todo,
    };
    console.log('request from service', request);
    return of(request);
  }

  deleteTodo(id: number): Observable<TodoInterface[]> {
    const filteredTodos = this.todos$.pipe(
      take(1),
      map((todos) => todos.filter((todo) => todo.id !== id))
    );
    return filteredTodos;
  }
}
