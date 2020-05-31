import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from 'src/app/shared/models/character.model';
import { Story } from 'src/app/shared/models/story.model';
import { StoryService } from 'src/app/shared/services/story.service';

@Component({
  selector: 'aequi-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  members: Character[] = [];
  story: Story;

  constructor(private route: ActivatedRoute, public storyService: StoryService) { }


  ngOnInit(): void {
    const storyId = this.route.snapshot.params.id;
    this.storyService.getStory(storyId).subscribe(story => {
      this.story = story;
    });
    if (storyId) {
      this.storyService.openStory(storyId);
    }
  }

  @HostListener('window:popstate', ['$event'])
  onPopState(_event) {
    // TODO: Save progress.
    this.storyService.openStory(null);
  }

}
