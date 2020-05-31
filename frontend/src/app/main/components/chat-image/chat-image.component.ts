import { Component, OnInit, ElementRef, ViewChild, Input } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'aequi-chat-image',
  templateUrl: './chat-image.component.html',
  styleUrls: ['./chat-image.component.scss']
})
export class ChatImageComponent implements OnInit {

  @Input() imageUrl: string;

  @Input() left: boolean;

  @Input() name: string;

  @Input() date: string;

  @Input() color: string;

  @ViewChild('fullImage', {static: false}) fullImageRef: ElementRef;

  public dialogRef: MatDialogRef<any>;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  public openImage(): void {
    this.openDialog(this.fullImageRef);
  }

  public openDialog(ref): void {
    this.dialogRef = this.dialog.open(ref, {
      width: '100%',
      height: '100%'
    });
    this.dialogRef.afterOpened().toPromise().then(() => {
    });
    this.dialogRef.afterClosed().subscribe(result => {
    });
  }

  public closeDialog(): void {
    this.dialogRef.close();
  }
}
