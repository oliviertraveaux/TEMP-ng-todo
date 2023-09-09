import { ErrorsInterface } from './error.interface';
export interface TodoInterface {
  id: number;
  title: string;
  description: string;
  inCharge: string;
  state: 'done' | 'ongoing' | 'done' | null;
}

export interface TodoListStateInterface {
  todos: TodoInterface[];
  isLoading: boolean | null;
  validationErrors: ErrorsInterface | null;
}
