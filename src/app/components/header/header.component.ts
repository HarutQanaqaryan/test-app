import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { IUser } from 'app/models';
import { AuthService } from 'app/services/auth-mock.service';
import { AppState, selectCurrentUser } from 'app/states';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  currentUser?: IUser = void 0;

  constructor(
    private store: Store<AppState>,
    private authService: AuthService
  ) {
    this.store
      .pipe(select(selectCurrentUser))
      .subscribe((value) => (this.currentUser = value));
  }

  logout() {
    this.authService.logout();
  }
}
