import { Route } from '@angular/router';
import { TodoListComponent } from './component/todo-list.component';

export const todoListRoutes: Route[] = [
  {
    path: '',
    component: TodoListComponent,
  },
];
