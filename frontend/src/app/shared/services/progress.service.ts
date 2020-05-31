import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Progress } from '../models/progress.model';

@Injectable({
  providedIn: 'root'
})
export class ProgressService {

  progress: Progress;

  constructor(private http: HttpClient) {}

  /**
   * Returns the story progress of the user with the id provided
   * @param userId user id
   */
  getProgress(username: string): Observable<Progress> {
    return this.http.get<Progress>(`${environment.API_URL}/progress/${username}`);
  }

  /**
   * Saves the story progress of the user.
   * @param progress object.
   */
  saveProgress(progress: Progress): Observable<Progress> {
    return this.http.post<Progress>(`${environment.API_URL}/progress`, progress);
  }
}
