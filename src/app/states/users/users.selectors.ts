import { createSelector } from '@ngrx/store';
import { UserState } from 'app/models';
import { AppState } from '../app-state';

const selectUser = (state: AppState) => state.user;

export const selectCurrentUser = createSelector(
  selectUser,
  (state: UserState) => state.user
);

export const selectUserError = createSelector(
  selectUser,
  (state: UserState) => state.error
);

export const isUserSignIn = createSelector(
    selectUser,
    (state: UserState) => state.isSignIn
  );