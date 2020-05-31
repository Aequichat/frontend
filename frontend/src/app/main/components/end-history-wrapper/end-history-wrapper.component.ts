import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EndHistoryComponent } from '../../components/end-history/end-history.component';

@Component({
  selector: 'aequi-end-history-wrapper',
  templateUrl: './end-history-wrapper.component.html',
  styleUrls: ['./end-history-wrapper.component.scss']
})
export class EndHistoryWrapperComponent implements OnInit {
  @Input() emoji: string;
  @Input() color: string;
  @Input() message: string;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    this.dialog.open(EndHistoryComponent, {
      data: {
        emoji: this.emoji,
        color: this.color,
        message: this.message
      },
      panelClass: 'end-story'
    });
  }

}
