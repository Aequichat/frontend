import { BreakpointObserver } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { filter, takeUntil } from 'rxjs/operators';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ProgressService } from 'src/app/shared/services/progress.service';
import { StoryService } from 'src/app/shared/services/story.service';
import { Subscribable } from 'src/app/shared/utils/subscribable';

@Component({
  selector: 'aequi-chat-template',
  templateUrl: './chat-template.component.html',
  styleUrls: ['./chat-template.component.scss']
})
export class ChatTemplateComponent extends Subscribable implements OnInit {

  public showChatList: boolean;
  public showChat: boolean;
  private isMobile: boolean;
  private currentStory: string;

  constructor(
    private authService: AuthService,
    private breakpointObserver: BreakpointObserver,
    private progressService: ProgressService,
    private storyService: StoryService,
    private router: Router,
    private cdr: ChangeDetectorRef) {
    super();
  }

  ngOnInit(): void {
    this.observeResponsive();
    this.observeChats();
    this.getProgress();
  }

  private getProgress(): void {
    console.log(this.authService.user);
    this.progressService.getProgress(this.authService.user._id)
      .pipe(takeUntil(this.destroyed))
      .subscribe(progress => this.progressService.progress = progress);
  }

  private observeResponsive(): void {
    this.breakpointObserver.observe(['(max-width: 599px)'])
      .pipe(takeUntil(this.destroyed))
      .subscribe(mobile => {
        this.isMobile = mobile.matches;
        this.updateVisibility();
      });
  }

  private updateVisibility(): void {
    this.showChatList = !this.isMobile || (this.isMobile && !this.currentStory);
    this.showChat = !this.isMobile || (this.isMobile && this.currentStory !== undefined);
    this.cdr.detectChanges();
  }

  private observeChats(): void {
    this.storyService.openedStory.pipe(
      filter(story => story !== undefined),
      takeUntil(this.destroyed)
    ).subscribe(story => {
      if (story) {
        this.router.navigateByUrl('/chats/' + story);
      }
      else {
        this.router.navigateByUrl('/chats');
      }
      this.currentStory = story;
      this.updateVisibility();
    });
  }
}
