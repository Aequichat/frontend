import { Component, OnInit } from '@angular/core';
import { StoryService } from 'src/app/shared/services/story.service';

@Component({
  selector: 'aequi-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent implements OnInit {

  constructor(public storyService: StoryService) { }

  ngOnInit(): void {
    this.getServices();
  }

  getServices(): void {
    this.storyService.stories = [
      {
        _id: '1',
        name: 'Jesse',
        icon: 'https://ak.picdn.net/shutterstock/videos/5118950/thumb/1.jpg',
        characters: {
          pedro: {
            name: 'Pedro',
            color: 'blue'
          }
        },
        events: {}
      }
    ]
  }

}
