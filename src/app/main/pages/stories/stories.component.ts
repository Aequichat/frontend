import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { takeUntil } from 'rxjs/operators';
import { Story } from 'src/app/shared/models/story.model';
import { ProgressService } from 'src/app/shared/services/progress.service';
import { StoryService } from 'src/app/shared/services/story.service';
import { Subscribable } from 'src/app/shared/utils/subscribable';

@Component({
  selector: 'aequi-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent extends Subscribable implements OnInit {
  public stories: Story[] = [];
  constructor(
    public storyService: StoryService,
    public progressService: ProgressService,
    private toastr: ToastrService) {
    super();
  }

  ngOnInit(): void {
    this.getStories();
  }

  getStories(): void {
    this.storyService.getStories()
      .pipe(takeUntil(this.destroyed))
      .subscribe(stories => this.stories = stories);
  }

  openStory(story?: Story): void {
    const progress = this.progressService.progress;
    if (progress?.storyId &&  progress?.storyId !== story.id) {
        this.toastr.info('No puedes abrir otra historia sin terminar la anterior.');
        return;
    }
    this.storyService.openStory(story.id);
  }

}
