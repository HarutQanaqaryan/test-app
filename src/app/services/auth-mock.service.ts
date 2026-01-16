import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import {
  AppState,
  isUserSignIn,
  logout,
  selectUserError,
  signIn,
} from 'app/states';
import { Router } from '@angular/router';
import { allUsers } from 'app/shared';
import { RollesEnum } from 'app/models';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isSignIn?: boolean = false;
  userError?: string;
  constructor(private router: Router, private store: Store<AppState>) {
    this.store
      .pipe(select(isUserSignIn))
      .subscribe((value) => (this.isSignIn = value));
    this.store
      .pipe(select(selectUserError))
      .subscribe((value) => (this.userError = value));
  }

  signIn(login: string, password: string) {
    this.store.dispatch(
      signIn({
        login,
        password,
      })
    );
    if (!this.userError) {
      return { isSignIn: this.isSignIn, status: 'OK' };
    } else {
      return {
        detail: this.userError,
      };
    }
  }

  signUp(firstName: string, lastName: string, login: string, password: string) {
    return allUsers.some((el) => el.login === login)
      ? false
      : allUsers.push({
          firstName: firstName,
          lastName: lastName,
          login: login,
          password: password,
          role: [RollesEnum.ADMIN, RollesEnum.VIEWER],
        }) && true;
  }

  logout() {
    this.store.dispatch(logout());
    this.router.navigateByUrl('/login');
    localStorage.removeItem('USER');
    this.isSignIn = false;
  }
}
