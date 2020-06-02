import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Option} from 'src/app/shared/models/option.model';

@Component({
  selector: 'aequi-chat-options',
  templateUrl: './chat-options.component.html',
  styleUrls: ['./chat-options.component.scss']
})
export class ChatOptionsComponent {

  @Input() options: Option[];

  @Output() selectedOption = new EventEmitter<Option>();

  public selectOption(option?: Option) {
    this.selectedOption.emit(option);
  }
}
