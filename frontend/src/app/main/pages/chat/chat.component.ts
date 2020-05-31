import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoryService } from 'src/app/shared/services/story.service';
import { Story } from 'src/app/shared/models/story.model';

@Component({
  selector: 'aequi-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  story: Story;

  constructor(private route: ActivatedRoute, public storyService: StoryService) { }


  ngOnInit(): void {
    const storyId = this.route.snapshot.params.id;
    this.storyService.getStory(storyId).subscribe(story => {
      this.story = story;
    });
  }

  @HostListener('window:popstate', ['$event'])
  onPopState(_event) {
    // TODO: Save progress.
    this.storyService.openStory(null);
  }

}
