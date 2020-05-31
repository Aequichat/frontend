import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Character } from 'src/app/shared/models/character.model';

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

  constructor() {
  }


  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes.members && changes.members.currentValue) {
      const members = changes.members.currentValue;
      const membersKeys = Object.keys(changes.members.currentValue);

      this.memberList = membersKeys.map(key => members[key].name).join(', ')
    }
    console.log(changes);
  }
}
