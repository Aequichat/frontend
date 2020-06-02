import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EndHistoryComponent } from '../../components/end-history/end-history.component';
import { Router } from '@angular/router';
import { StoryService } from 'src/app/shared/services/story.service';

@Component({
  selector: 'aequi-end-history-wrapper',
  templateUrl: './end-history-wrapper.component.html',
  styleUrls: ['./end-history-wrapper.component.scss']
})
export class EndHistoryWrapperComponent implements OnInit {
  @Input() emoji: string;
  @Input() color: string;
  @Input() message: string;

  constructor(private dialog: MatDialog, private router: Router, private storyService: StoryService) { }

  ngOnInit(): void {
    const dialog = this.dialog.open(EndHistoryComponent, {
      data: {
        emoji: this.emoji,
        color: this.color,
        message: this.message
      },
      panelClass: 'end-story'
    });
    dialog.afterClosed().subscribe(() => {
      this.router.navigateByUrl('/chats');
      this.storyService.cleanStory();
      this.storyService.openStory(null);
    })
  }

}
