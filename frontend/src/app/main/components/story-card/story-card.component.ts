import { Component, Input, OnInit } from '@angular/core';
import { Story } from 'src/app/shared/models/story.model';

@Component({
  selector: 'aequi-story-card',
  templateUrl: './story-card.component.html',
  styleUrls: ['./story-card.component.scss']
})
export class StoryCardComponent implements OnInit {

  @Input() story: Story;
  @Input() locked: boolean;
  @Input() currentStory: string;

  constructor() { }

  ngOnInit(): void {
    // this.locked = true;
  }
}
