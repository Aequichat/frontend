import { Component, OnInit, Input, OnChanges, SimpleChanges, Output } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { TimeTransitionDialogComponent } from '../time-transition-dialog/time-transition-dialog.component';
@Component({
  selector: 'aequi-time-transition',
  templateUrl: './time-transition.component.html',
  styleUrls: ['./time-transition.component.scss']
})
export class TimeTransitionComponent implements OnInit, OnChanges {

  @Input() message: string;
  @Input() fadeIn: boolean;
  private dialogInstance: MatDialogRef<TimeTransitionDialogComponent>;

  constructor(private dialog: MatDialog) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.updateDialogState();
  }

  ngOnInit(): void {

  }

  updateDialogState() {
    if (this.fadeIn && !this.dialogInstance) {
      this.dialogInstance = this.dialog.open(TimeTransitionDialogComponent, {
        data: {
          message: this.message,
        },
        panelClass: 'remove-panel',
        width: '100vw',
        height: '100vh'
      });
      return;
    }
    if (!this.fadeIn && this.dialogInstance) {
      this.dialogInstance.close();
    }
  }
}
