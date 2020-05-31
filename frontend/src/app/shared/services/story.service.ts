import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Story } from '../models/story.model';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StoryService {

  private stories: Story[] = [];
  public openedStory: string;

  constructor(private http: HttpClient) { }

  getStories(): Observable<Story[]> {
    if (this.stories.length) {
      return of(this.stories);
    }
    return this.http.get<Story[]>(environment.API_URL + '/story').pipe(
      tap(stories => {
        this.stories = stories;
        console.log(JSON.stringify(this.stories));
      })
    );
  }

  getStory(id: string): Observable<Story> {
    let storyFoundIndex = this.stories.findIndex(story => story.id === id);
    const storyFound = this.stories[storyFoundIndex];
    if (storyFound && storyFound.characters && storyFound.events) {
      return of(storyFound);
    }
    return this.http.get<Story>(`${environment.API_URL}/story/${id}`).pipe(
      tap(story => {
        this.stories[storyFoundIndex] = story;
      })
    )
  }
}
