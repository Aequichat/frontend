import { Component, HostListener, OnInit } from '@angular/core';
import { StoryService } from 'src/app/shared/services/story.service';

@Component({
  selector: 'aequi-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  constructor(public storyService: StoryService) { }

  ngOnInit(): void {
  }

  @HostListener('window:popstate', ['$event'])
  onPopState(_event) {
    // TODO: Save progress.
    this.storyService.openStory(null);
  }

}
