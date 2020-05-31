import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Story } from '../models/story.model';

@Injectable({
  providedIn: 'root'
})
export class StoryService {

  public stories: Story[] = [];
  public openedStory: BehaviorSubject<string> = new BehaviorSubject(undefined);

  constructor(private http: HttpClient) { }

  /**
   * Returns all stories
   * @return Observable of stories
   */
  getStories(): Observable<Story[]> {
    if (this.stories.length) {
      return of(this.stories);
    }
    return this.http.get<Story[]>(environment.API_URL + '/story').pipe(
      tap(stories => {
        this.stories = stories;
      })
    );
  }

  /**
   * Returns the story with the id provided
   * @param id story id
   * @returns Observable of the story
   */
  getStory(id: string): Observable<Story> {
    const storyFoundIndex = this.stories.findIndex(story => story.id === id);
    const storyFound = this.stories[storyFoundIndex];
    if (storyFound && storyFound.characters && storyFound.events) {
      return of(storyFound);
    }
    return this.http.get<Story>(`${environment.API_URL}/story/${id}`).pipe(
      tap(story => {
        this.stories[storyFoundIndex] = story;
      })
    );
  }

  /**
   * Emits the next value for the openStory observable
   * @param storyId story id
   */
  openStory(storyId?: string) {
    this.openedStory.next(storyId);
  }
}
