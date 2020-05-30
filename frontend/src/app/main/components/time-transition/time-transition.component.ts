import { Component, OnInit, Input, OnChanges, SimpleChanges, Output } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'aequi-time-transition',
  templateUrl: './time-transition.component.html',
  styleUrls: ['./time-transition.component.scss']
})
export class TimeTransitionComponent {

  @Input() message: string;
  @Input() fadeIn: boolean;

  ngOnInit(): void {

  }

}
