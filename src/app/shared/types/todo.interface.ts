export interface Todo {
  id: number;
  title: string;
  description: string;
  inCharge: string;
  state: 'done' | 'ongoing' | 'done' | null;
}

export interface TodoListState {
  items: Todo[];
  isLoading: boolean;
}
