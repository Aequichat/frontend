import { Component, HostListener, OnInit } from '@angular/core';
import { Character } from 'src/app/shared/models/character.model';
import { StoryService } from 'src/app/shared/services/story.service';

@Component({
  selector: 'aequi-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  members: Character[] = [];

  constructor(public storyService: StoryService) { }

  ngOnInit(): void {
  }

  @HostListener('window:popstate', ['$event'])
  onPopState(_event) {
    // TODO: Save progress.
    this.storyService.openStory(null);
  }

}
