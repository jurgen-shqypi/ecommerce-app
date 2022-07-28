import { Injectable } from '@angular/core';
import { Router, CanActivate, RouterStateSnapshot } from '@angular/router';


import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardWithForcedLogin implements CanActivate {


  constructor(
    private authService: AuthService, public router: Router
  ) {
  }

  canActivate(): boolean {
    if (!this.authService.hasValidAccessToken()) {
      this.router.navigate(['login-needed']);
      return false;
    }
    return true;
  }
}