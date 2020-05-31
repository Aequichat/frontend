import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Story } from 'src/app/shared/models/story.model';

@Component({
  selector: 'aequi-story-card',
  templateUrl: './story-card.component.html',
  styleUrls: ['./story-card.component.scss']
})
export class StoryCardComponent implements OnInit {

  @Input() story: Story;
  @Input() locked: boolean;

  constructor(private router: Router) { }

  ngOnInit(): void {
    // this.locked = true;
  }

  openStory(): void {

  }

}
