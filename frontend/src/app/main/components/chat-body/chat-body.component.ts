import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'aequi-chat-body',
  templateUrl: './chat-body.component.html',
  styleUrls: ['./chat-body.component.scss']
})
export class ChatBodyComponent implements OnInit {

  @Input() name: string;

  constructor() {}

  ngOnInit(): void {
  }

}
