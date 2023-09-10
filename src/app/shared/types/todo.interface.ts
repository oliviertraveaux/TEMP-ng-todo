import { ErrorsInterface } from './error.interface';
export interface TodoInterface {
  id: number;
  title: string;
  description: string;
  personInCharge: string;
  state: TodoState | null;
}

export interface TodoListStateInterface {
  todos: TodoInterface[];
  isLoading: boolean | null;
  validationErrors: ErrorsInterface | null;
}

export enum TodoState {
  done = 'Done',
  ongoing = 'Ongoing',
  toDo = 'To do',
}

export interface AddTodoFormInterface {
  title: string;
  description: string;
  personInCharge: string;
}

export interface AddTodoRequestInterface {
  todo: TodoInterface;
}
