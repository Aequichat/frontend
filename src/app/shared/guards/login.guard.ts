import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(): boolean | UrlTree {
    if (this.authService.getUser()) {
      return this.goToChats();
    }

    const userString = localStorage.getItem('user');

    try {
      const user = JSON.parse(userString);

      if (user) {
        this.authService.setUser(user);
        return this.goToChats();
      }

      return true;
    }
    catch (error) {
      localStorage.removeItem('user');
      return true;
    }
  }

  private goToChats(): UrlTree {
    return this.router.parseUrl('/chats');
  }

}
