import { ActionReducerMap } from '@ngrx/store';
import { claimsReducer } from './claims';
import { ClaimsState, UserState } from 'app/models';
import { usersReducer } from './users';

export interface AppState {
  claims: ClaimsState;
  user: UserState;
}

export const reducers: ActionReducerMap<AppState> = {
  claims: claimsReducer,
  user: usersReducer,
};
