import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import {
  AddTodoRequestInterface,
  TodoState,
} from 'src/app/shared/types/todo.interface';
import { Store } from '@ngrx/store';
import { selectTodos } from 'src/app/shared/store/todo.reducers';
import { map, take } from 'rxjs';
import { todoActions } from 'src/app/shared/store/todo.actions';

@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
  ],
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
})
export class TodoFormComponent {
  private fb = inject(FormBuilder);
  private store = inject(Store);
  private todos$ = this.store.select(selectTodos);

  form = this.fb.nonNullable.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    personInCharge: ['', Validators.required],
  });

  onSubmit() {
    const request = this.form.getRawValue();
    console.log(request);
    this.store.dispatch(todoActions.addTodo({ request }));
  }
}
