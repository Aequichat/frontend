import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router, UrlTree } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivateChild, CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  public canActivateChild(): boolean | UrlTree  {
    return this.validateUser();
  }

  public canActivate(): boolean | UrlTree  {
    return this.validateUser();
  }

  private validateUser(): boolean | UrlTree {
    if (this.authService.user) {
      return true;
    }

    const userString = localStorage.getItem('user');
    try {
      const user = JSON.parse(userString);
      if (user) {
        this.authService.user = user;
        return true;
      }

      return this.goToLogin();
    }
    catch (error) {
      return this.goToLogin();
    }
  }

  private goToLogin(): UrlTree {
    return this.router.parseUrl('/');
  }
}
