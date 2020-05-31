import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { User } from 'src/app/shared/models/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl: string;
  private user: User;

  constructor(
    private httpClient: HttpClient,
    private router: Router
    ) {
    this.apiUrl = environment.API_URL;
  }

  getUser(): User {
    return this.user;
  }

  setUser(user: User): void {
    this.user = user;
    localStorage.setItem('user', JSON.stringify(user));
  }

  login(username: string, password: string): Observable<User> {
    return this.httpClient.post<User>(`${this.apiUrl}/login`, { username, password});
  }

  logout(): void {
    delete this.user;
    localStorage.removeItem('user');
    this.router.navigate(['/']);
  }

  register(username: string, email: string, password: string): Observable<string> {
    return this.httpClient.post<string>(`${this.apiUrl}/user`, { username, email, password});
  }
}
