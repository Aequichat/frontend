import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/models/user.model';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl: string;
  public user: User;

  constructor(private httpClient: HttpClient) {
    this.apiUrl = environment.API_URL;
  }

  login(username: string, password: string): Observable<User> {
    return this.httpClient.post<User>(`${this.apiUrl}/login`, { username, password});
  }

  register(username: string, email: string, password: string): Observable<string> {
    return this.httpClient.post<string>(`${this.apiUrl}/user`, { username, email, password});
  }
}
