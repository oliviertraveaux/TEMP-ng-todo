import { Route } from '@angular/router';
import { TodoFormComponent } from './component/todo-form.component';

export const todoFormRoutes: Route[] = [
  {
    path: '',
    component: TodoFormComponent,
  },
];
