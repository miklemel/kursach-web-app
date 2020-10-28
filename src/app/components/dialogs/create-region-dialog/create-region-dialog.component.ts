import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-create-region-dialog',
  templateUrl: './create-region-dialog.component.html',
  styleUrls: ['./create-region-dialog.component.css']
})
export class CreateRegionDialogComponent implements OnInit {

  constructor(public dialog: MatDialog, public dialogRef: MatDialogRef<CreateRegionDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {}
  name: string;
  header: string;

  ngOnInit(): void {
    this.name = this.data.name;
    this.header = this.data.header;
  }
  onNoClick(){
    this.dialogRef.close({result: 'No'});
  }
  onYesClick(){
    this.dialogRef.close({result: 'Yes', name: this.name});
  }

}
