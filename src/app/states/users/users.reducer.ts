import { UserState } from 'app/models';
import { allUsers } from 'app/shared';
import { logout, signIn } from './users.actions';
import { createReducer, on } from '@ngrx/store';

const usersInitialState: UserState = {
  isSignIn: !!localStorage.getItem('USER') || false,
  user: JSON.parse(localStorage.getItem('USER') as string) || void 0,
  error: void 0,
};

export const usersReducer = createReducer(
  usersInitialState,
  on(signIn, (state, { login, password }) => {
    const currUser = allUsers.find(
      (el) => el.login === login && el.password === password
    );
    if (currUser) {
      localStorage.setItem(
        'USER',
        JSON.stringify({
          ...currUser,
          password: btoa(password),
        })
      );
      return { ...state, user: currUser, error: void 0, isSignIn: true };
    } else {
      return {
        ...state,
        error: 'Неверный логин или пароль',
        user: void 0,
        isSignIn: false,
      };
    }
  }),
  on(logout, (state) => ({
    ...state,
    user: void 0,
    isSignIn: false,
  }))
);
