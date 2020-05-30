import { Component, OnInit, Input, OnChanges, SimpleChanges, Output } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'aequi-time-transition',
  templateUrl: './time-transition.component.html',
  styleUrls: ['./time-transition.component.scss']
})
export class TimeTransitionComponent implements OnChanges {

  @Input() message: string;
  @Input() fadeIn: boolean;
  @Input() hour: number;

  ngOnInit(): void {

  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if (changes && changes.hour && changes.hour.currentValue) {
      this.hour = Math.trunc(Number(changes.hour.currentValue))
      if (this.hour > 12) {
        this.hour = this.hour - 12;
      }
    }
  }
}
