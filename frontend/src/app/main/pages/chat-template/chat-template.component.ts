import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'aequi-chat-template',
  templateUrl: './chat-template.component.html',
  styleUrls: ['./chat-template.component.scss']
})
export class ChatTemplateComponent implements OnInit {
  fadeIn = true;
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.fadeIn = false;
    }, 1000 * 5);
  }

}
