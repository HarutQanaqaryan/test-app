import { createAction, props } from '@ngrx/store';

export const signIn = createAction(
  '[Login Component] Login User',
  props<{ login: string; password: string }>()
);

export const logout = createAction(
    '[Login Component] Logout User',
  );