import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/shared/models/character.model';

@Component({
  selector: 'aequi-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  members: Character[];
  constructor() {
    this.members = [
      {
        name: 'Prueba',
        color: '#ff00ff'
      },
      {
        name: 'Camo',
        color: "#00FFFF"
      },
      {
        name: 'Prueba',
        color: '#ff00ff'
      },
      {
        name: 'Camo',
        color: "#00FFFF"
      },
      {
        name: 'Prueba',
        color: '#ff00ff'
      },
      {
        name: 'Camo',
        color: "#00FFFF"
      },
      {
        name: 'Prueba',
        color: '#ff00ff'
      },
      {
        name: 'Camo',
        color: "#00FFFF"
      }
    ]
  }

  ngOnInit(): void {
  }

}
