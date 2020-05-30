import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'aequi-end-history',
  templateUrl: './end-history.component.html',
  styleUrls: ['./end-history.component.scss']
})
export class EndHistoryComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EndHistoryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Data) {

  }

  ngOnInit(): void {
  }

}

class Data {
  emoji: string;
  color: string;
  message: string;
}
