import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { Store } from '@ngrx/store';
import {
  selectTodos,
  selectIsLoading,
  selectValidationErrors,
} from 'src/app/shared/store/todo.reducers';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { todoActions } from 'src/app/shared/store/todo.actions';
import { Observable } from 'rxjs';
import { TodoInterface } from 'src/app/shared/types/todo.interface';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatIconModule,
  ],
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  displayedColumns: string[] = [
    'title',
    'description',
    'personInCharge',
    'state',
    'delete',
  ];
  private store = inject(Store);
  public todos$: Observable<TodoInterface[]> = this.store.select(selectTodos);
  public isLoading$: Observable<boolean | null> =
    this.store.select(selectIsLoading);
  public validationError$ = this.store.select(selectValidationErrors);
  dataSource = this.todos$;

  ngOnInit(): void {
    console.log(this.dataSource);
    this.store.dispatch(todoActions.getTodos());
  }

  deleteTodo(element: TodoInterface) {
    console.log(element);
    this.store.dispatch(todoActions.deleteTodo({ id: element.id }));
  }
}
