import { createReducer, createFeature, on } from '@ngrx/store';
import { TodoInterface, TodoListStateInterface } from '../types/todo.interface';
import { todosMock } from '../data/todosMock';
import { todoActions } from './todo.actions';

const initialState: TodoListStateInterface = {
  todos: [],
  isLoading: null,
  validationErrors: null,
};

const todoFeature = createFeature({
  name: 'todo',
  reducer: createReducer(
    initialState,
    on(todoActions.getTodos, (state) => ({
      ...state,
      isLoading: true,
    })),
    on(todoActions.getTodosSuccess, (state, action) => ({
      ...state,
      todos: action.todos,
      isLoading: false,
    })),
    on(todoActions.getTodosFailure, (state, action) => ({
      ...state,
      error: action.errors,
      isLoading: false,
    })),
    on(todoActions.addTodo, (state) => ({
      ...state,
    })),
    on(todoActions.addTodoSuccess, (state, action) => ({
      ...state,
      todos: [action.request.todo, ...state.todos],
    })),
    on(todoActions.deleteTodo, (state) => ({
      ...state,
    })),
    on(todoActions.deleteTodoSuccess, (state, action) => ({
      ...state,
      todos: action.todos,
    }))
  ),
});

export const {
  name: todoFeatureKey,
  reducer: todoReducer,
  selectTodos,
  selectIsLoading,
  selectValidationErrors,
} = todoFeature;
