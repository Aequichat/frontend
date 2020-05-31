import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoryService } from 'src/app/shared/services/story.service';

import { Option } from 'src/app/shared/models/option.model';

@Component({
  selector: 'aequi-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  tempOptions: Option[];

  constructor(private route: ActivatedRoute, public storyService: StoryService) { }

  ngOnInit(): void {
    this.tempOptions = [
      {
        label: 'option 1',
        child: 'child',
        value: null
      },
      {
        label: 'option 2',
        child: 'child',
        value: null
      },
      {
        label: 'option 3',
        child: 'child',
        value: null
      },
      {
        label: 'option 4',
        child: 'child',
        value: null
      },
    ];
  }

}
