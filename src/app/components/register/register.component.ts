import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'app/services/auth-mock.service';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  isPasswordsNotEqual: boolean;
  isRegistered: boolean;
  isUserAlreadyExist: boolean;
  loading = false;
  form = new FormGroup({
    login: new FormControl('', [Validators.required, Validators.min(4)]),
    password: new FormControl('', [Validators.required]),
    passwordAgain: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[А-Яа-я0-9_-]{2,30}$/),
    ]),
    firstname: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[А-Яа-я0-9_-]{2,30}$/),
    ]),
  });

  constructor(private authService: AuthService, private router: Router) {}

  get registerForm() {
    return this.form.controls;
  }

  register() {
    if (
      this.registerForm.password.value !== this.registerForm.passwordAgain.value
    ) {
      this.isPasswordsNotEqual = true;
      return;
    }
    const result = this.authService.signUp(
      this.registerForm.firstname.value as string,
      this.registerForm.lastname.value as string,
      this.registerForm.login.value as string,
      this.registerForm.password.value as string
    );
    if (result) {
      this.isRegistered = result;
      setTimeout(() => {
        this.router.navigateByUrl('/login');
      }, 2000);
    } else {
      this.isUserAlreadyExist = true;
    }
  }
}
