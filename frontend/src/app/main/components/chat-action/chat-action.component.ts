import { TitleCasePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Event } from '../../../shared/models/event.model';

@Component({
  selector: 'aequi-chat-action',
  templateUrl: './chat-action.component.html',
  styleUrls: ['./chat-action.component.scss']
})
export class ChatActionComponent implements OnInit {

  @Input() action: Event;
  @Input() chatName: string;
  text: string;

  constructor(private titlecasePipe: TitleCasePipe) { }

  ngOnInit(): void {
    this.text = this.getMessage();
  }

  public getMessage(): string {
    switch (this.action.subtype) {
      case 'create':
        return this.getCreateMessage();
      case 'add':
        return this.getAddMessage();
      case 'newDate':
        return this.action.value;
      default:
        return '';
    }
  }

  private getAddMessage(): string {
    let message = this.titlecasePipe.transform(this.action.from);
    if (this.action.to === 'user') {
      message += ' te ';
    }
    message += 'ha añadido';
    if (this.action.to !== 'user') {
      message += ` a ${this.titlecasePipe.transform(this.action.to)}.`;
    } else {
      message += '.';
    }
    return message;
  }

  private getCreateMessage(): string {
    return `${this.titlecasePipe.transform(this.action.from)} ha creado el grupo ${this.titlecasePipe.transform(this.chatName)}.`;
  }

}
