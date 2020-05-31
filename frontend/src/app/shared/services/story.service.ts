import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Story } from '../models/story.model';

@Injectable({
  providedIn: 'root'
})
export class StoryService {

  public stories: Story[] = [];
  public openedStory: Subject<string> = new Subject();

  constructor(private http: HttpClient) { }

  getStories(): Observable<Story[]> {
    return this.http.get<Story[]>(environment.API_URL + '/story');
  }

  openStory(storyId: string) {
    this.openedStory.next(storyId);
  }
}
