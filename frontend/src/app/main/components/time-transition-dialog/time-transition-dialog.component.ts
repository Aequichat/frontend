import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'aequi-time-transition-dialog',
  templateUrl: './time-transition-dialog.component.html',
  styleUrls: ['./time-transition-dialog.component.scss']
})
export class TimeTransitionDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<TimeTransitionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Data) { }

  ngOnInit(): void {

  }

}

class Data {
  message: string;
}
