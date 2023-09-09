import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, of, tap } from 'rxjs';
import { todosMock } from '../data/todosMock';
import { TodoInterface } from '../types/todo.interface';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  http = inject(HttpClient);

  getTodos(): Observable<TodoInterface[]> {
    return of(todosMock);
  }
}
