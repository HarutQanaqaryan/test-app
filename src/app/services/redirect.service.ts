import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth-mock.service';

@Injectable({
  providedIn: 'root',
})
export class RedirectService {
  constructor(private router: Router, private authService: AuthService) {}

  canActivate(): boolean {
    if (this.authService.isSignIn) {
      this.router.navigateByUrl('claims');
      return false;
    }
    return true;
  }
}
