import { Routes } from '@angular/router';
import { TodoFormComponent } from './todo-form/component/todo-form.component';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('src/app/todo-list/todo-list.routes').then(
        (m) => m.todoListRoutes
      ),
  },
  {
    path: '',
    component: TodoFormComponent,
  },
];
