import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'aequi-chat-template',
  templateUrl: './chat-template.component.html',
  styleUrls: ['./chat-template.component.scss']
})
export class ChatTemplateComponent implements OnInit {

  public isMobile: boolean;
  public selectedChat: string;
  public showChatList: Observable<boolean>;
  public showChat: Observable<boolean>;

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.observeResponsive();
  }

  private observeResponsive(): void {
    this.showChatList = this.breakpointObserver.observe(['(max-width: 599px)'])
      .pipe(map(mobile => !mobile.matches || (mobile.matches && !this.selectedChat)));
    this.showChat = this.breakpointObserver.observe(['(max-width: 599px)'])
      .pipe(map(mobile => !mobile.matches || (mobile.matches && this.selectedChat !== undefined)));
  }

}
