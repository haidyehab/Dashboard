
import { createReducer, on } from '@ngrx/store';
import { loadUsers, loadUsersSuccess, loadUsersFailure } from './app.actions';
import { User } from '../Interfaces/user';
export interface AppState {
  users: User[];
  loading: boolean;
  error: any;
}

export const initialState: AppState = {
  users: [],
  loading: false,
  error: null
};

export const appReducer = createReducer(
  initialState,
  on(loadUsers, state => ({ ...state, loading: true })),
  on(loadUsersSuccess, (state, { users }) => ({ ...state, users, loading: false })),
  on(loadUsersFailure, (state, { error }) => ({ ...state, error, loading: false }))
);
