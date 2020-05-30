import { Injectable } from '@angular/core';
import { Story } from '../models/story.model';

@Injectable({
  providedIn: 'root'
})
export class StoryService {

  public stories: Story[] = [];

  constructor() { }
}
