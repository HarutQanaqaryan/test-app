import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { IUser } from 'app/models';
import { AuthService } from 'app/services/auth-mock.service';
import { AppState, selectCurrentUser } from 'app/states';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  errorMessage?: string;
  currentUser?: IUser;
  loading = false;
  form!: FormGroup;
  submitted = false;

  constructor(
    private store: Store<AppState>,
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.store.pipe(select(selectCurrentUser)).subscribe((value) => {
      this.currentUser = value;
    });
  }
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      login: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  get login() {
    return this.form.controls.login as FormControl;
  }

  get password() {
    return this.form.controls.password as FormControl;
  }

  signIn() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    const status = this.authService.signIn(
      this.login.value as string,
      this.password.value as string
    );
    if (status.isSignIn) {
      this.router.navigateByUrl('/claims');
    } else {
      this.errorMessage = status.detail;
    }
  }
}
