import { Component, Input } from '@angular/core';

@Component({
  selector: 'aequi-chat-options',
  templateUrl: './chat-options.component.html',
  styleUrls: ['./chat-options.component.scss']
})
export class ChatOptionsComponent {
  @Input() options: string[];

  selectOption(child: string, value: any) {
  }
}
