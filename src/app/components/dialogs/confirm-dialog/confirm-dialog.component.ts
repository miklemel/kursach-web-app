import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {

  constructor(public dialog: MatDialog, public dialogRef: MatDialogRef<ConfirmDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {}
  header: string;
  dialogText: string;

  ngOnInit(): void {
    this.header = this.data.header;
    this.dialogText = this.data.dialogText;
  }
  onNoClick(){
    this.dialogRef.close({result: 'No'});
  }
  onYesClick(){
    this.dialogRef.close({result: 'Yes' });
  }

}
