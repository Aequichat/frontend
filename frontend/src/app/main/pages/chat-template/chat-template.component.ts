import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { ProgressService } from 'src/app/shared/services/progress.service';
import { Subscribable } from 'src/app/shared/utils/subscribable';

@Component({
  selector: 'aequi-chat-template',
  templateUrl: './chat-template.component.html',
  styleUrls: ['./chat-template.component.scss']
})
export class ChatTemplateComponent extends Subscribable implements OnInit {

  public isMobile: boolean;
  public selectedChat: string;
  public showChatList: Observable<boolean>;
  public showChat: Observable<boolean>;

  constructor(private breakpointObserver: BreakpointObserver, private progressService: ProgressService) {
    super();
  }

  ngOnInit(): void {
    this.observeResponsive();
    this.getProgress();
  }

  private getProgress(): void {
    this.progressService.getProgress('1')
      .pipe(takeUntil(this.destroyed))
      .subscribe(progress => this.progressService.progress = progress);
  }

  private observeResponsive(): void {
    this.showChatList = this.breakpointObserver.observe(['(max-width: 599px)'])
      .pipe(map(mobile => !mobile.matches || (mobile.matches && !this.selectedChat)));
    this.showChat = this.breakpointObserver.observe(['(max-width: 599px)'])
      .pipe(map(mobile => !mobile.matches || (mobile.matches && this.selectedChat !== undefined)));
  }

}
