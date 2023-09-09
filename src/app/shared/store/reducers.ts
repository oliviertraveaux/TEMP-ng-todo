import { createReducer, createFeature, on } from '@ngrx/store';
import * as todoActions from './actions';
import { Todo, TodoListState } from '../types/todo.interface';
import { todosMock } from '../data/todosMock';

const initialState: TodoListState = {
  items: todosMock,
  isLoading: false,
};

const todoFeature = createFeature({
  name: 'todo',
  reducer: createReducer(
    initialState,
    on(todoActions.getTodo, (state) => ({
      ...state,
    }))
  ),
});

export const {
  name: todoFeatureKey,
  reducer: todoReducer,
  selectItems,
  selectIsLoading,
} = todoFeature;
