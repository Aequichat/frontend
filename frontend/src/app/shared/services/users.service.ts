import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { User } from 'src/app/shared/models/user.model';

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private httpClient: HttpClient) {

  }

  // public getUser(userId: number): Promise<User> {
  //   return this.httpClient
  //     .get<User>(`${environment.backend.users}user/${userId}`)
  //     .toPromise();
  // }

  public login(username: string, password: string): Promise<User> {
    return this.httpClient
      .post<User>(`${environment.backend.users}`, user, {
        headers: this.headers
      })
      .toPromise();
  }

  // public updateUser(user: User): Promise<User> {
  //   return this.httpClient
  //     .put<User>(`${environment.backend.users}user/${user.id}`, user, {
  //       headers: this.headers
  //     })
  //     .toPromise();
  // }

  // public registerUser(user: User): Promise<User> {
  //   return this.httpClient
  //     .post<User>(`${environment.backend.users}user`, user, {
  //       headers: this.headers
  //     })
  //     .toPromise();
  // }
}
