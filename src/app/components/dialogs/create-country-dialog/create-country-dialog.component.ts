import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-create-country-dialog',
  templateUrl: './create-country-dialog.component.html',
  styleUrls: ['./create-country-dialog.component.css']
})
export class CreateCountryDialogComponent implements OnInit {

  constructor(public dialog: MatDialog, public dialogRef: MatDialogRef<CreateCountryDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {}
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
    this.dialogRef.close({result: 'Yes', name: this.name });
  }


}
