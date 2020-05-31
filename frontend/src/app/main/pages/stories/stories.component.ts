import { Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { StoryService } from 'src/app/shared/services/story.service';
import { Subscribable } from 'src/app/shared/utils/subscribable';

@Component({
  selector: 'aequi-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent extends Subscribable implements OnInit {

  constructor(public storyService: StoryService) {
    super();
  }

  ngOnInit(): void {
    this.getStories();
  }

  getStories(): void {
    this.storyService.getStories()
      .pipe(takeUntil(this.destroyed))
      .subscribe(stories => this.storyService.stories = stories);
  }

}
