import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { Store } from '@ngrx/store';
import {
  selectTodos,
  selectIsLoading,
  selectValidationErrors,
} from 'src/app/shared/store/todo.reducers';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { todoActions } from 'src/app/shared/store/todo.actions';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatProgressSpinnerModule],
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'title', 'description', 'inCharge'];
  private store = inject(Store);
  public todos$ = this.store.select(selectTodos);
  public isLoading$ = this.store.select(selectIsLoading);
  public validationError$ = this.store.select(selectValidationErrors);
  dataSource = this.todos$;

  ngOnInit(): void {
    this.store.dispatch(todoActions.getTodos());
  }
}
