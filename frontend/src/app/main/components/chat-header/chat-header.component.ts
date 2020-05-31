import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Character } from 'src/app/shared/models/character.model';
import { StoryService } from 'src/app/shared/services/story.service';

@Component({
  selector: 'aequi-chat-header',
  templateUrl: './chat-header.component.html',
  styleUrls: ['./chat-header.component.scss']
})
export class ChatHeaderComponent implements OnInit, OnChanges {

  @Input() name: string;
  @Input() members: Character[];
  @Input() imageUrl: string;

  public memberList: string;

  constructor(private storyService: StoryService) {
  }


  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes.members && changes.members.currentValue) {
      const members = changes.members.currentValue;
      const membersKeys = Object.keys(changes.members.currentValue);

      this.memberList = membersKeys.filter(key => members[key].active).map(key => members[key].name).join(', ')
    }
  }

  public goBack(): void {
    this.storyService.openStory(null);
  }
}
