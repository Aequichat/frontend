import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { fadeIn, fadeInOut } from 'src/app/shared/animations';
import { Event } from 'src/app/shared/models/event.model';
import { Option } from 'src/app/shared/models/option.model';
import { Progress } from 'src/app/shared/models/progress.model';
import { Story } from 'src/app/shared/models/story.model';

import storyJson from './json';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'aequi-chat-body',
  templateUrl: './chat-body.component.html',
  animations: [fadeInOut, fadeIn],
  styleUrls: ['./chat-body.component.scss']
})
export class ChatBodyComponent implements OnInit {

  public conversation: Story = storyJson;

  @ViewChild('bottom', {static: false}) bottom: ElementRef;

  @Input() name: string;

  public messages: Event[] = [];
  public currentEventKey = '0';
  public showFadeIn: boolean;

  private progress: Progress;
  public currentEvent: Event;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.progress = {
      userId: '1',
      storyId: '1',
      currentEvent: '0',
      parameters: {},
      selectedPath: [],
      completedStories: [],
    };

    if (this.progress.selectedPath.length !== 0) {
      // if (currentMessage.type === 'text' || currentMessage.type === 'image' || currentMessage.type === 'action') {
      //   this.messages.unshift(currentMessage);
      // }
      this.messages = [...this.progress.selectedPath];
      this.currentEventKey = this.progress.currentEvent;
    }

    this.processEvent(this.currentEventKey);
  }

  public handleClickedOption(option: Option) {
    if (!option) {
      console.log('Continuar....', this.currentEvent)
      this.processEvent(this.currentEvent.child);
      return;
    }

    console.log('Opción escogida...', option);

    const timestamp = this.currentEvent.timestamp;
    const parameter = this.currentEvent.parameter;

    if (parameter) {
      this.progress.parameters[parameter] = option.value;
    }

    this.currentEvent = {
      type: 'text',
      from: 'user',
      value: option.label,
      timestamp,
    };

    this.addMessage();
    this.processEvent(option.child);
  }

  public processEvent(currentEventKey, fadeOut = false) {
    this.currentEventKey = currentEventKey;
    this.currentEvent = this.conversation.events[this.currentEventKey];

    console.log(this.currentEvent);

    if (this.currentEvent.condition) {
      const matchCondition = this.currentEvent.condition.some(condition => this.progress.parameters[condition.label] === condition.value);
      if (!matchCondition) {
        this.processEvent(this.currentEvent.child);
        return;
      }
    }

    if (this.currentEvent.type === 'fadeIn') {
      this.showFadeIn = false;
      fadeOut = false;
    }

    if (this.currentEvent.type === 'fadeOut') {
      this.showFadeIn = true;
      setTimeout(() => {
        this.processEvent(this.currentEvent.child, true);
      }, 3000);
    }

    if (this.currentEvent.type === 'action') {
      this.addMessage();
    }

    if (this.currentEvent.type === 'text' || this.currentEvent.type === 'image') {
      this.addMessage();
    }

    // Executes the next events until the a fadeIn event is found.
    if (fadeOut) {
      this.processEvent(this.currentEvent.child, true);
    }

    this.progress.currentEvent = this.currentEventKey;
  }

  private addMessage() {
    this.currentEvent.value = this.currentEvent.value?.replace('[user]', this.authService.getUser().username);
    this.messages.unshift(this.currentEvent);
    this.progress.selectedPath.push(this.currentEvent);
    setTimeout(() => {
      this.scrollToBottom();
    }, 1);
  }

  public scrollToBottom() {
    if (this.bottom !== undefined) {
      this.bottom.nativeElement.scrollIntoView();
    }
  }
}
