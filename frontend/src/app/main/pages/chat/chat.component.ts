import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoryService } from 'src/app/shared/services/story.service';

@Component({
  selector: 'aequi-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  constructor(private route: ActivatedRoute, public storyService: StoryService) { }

  ngOnInit(): void {
    this.storyService.openedStory = this.route.snapshot.params.id;
  }

}
