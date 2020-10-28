import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-create-location-dialog',
  templateUrl: './create-location-dialog.component.html',
  styleUrls: ['./create-location-dialog.component.css']
})
export class CreateLocationDialogComponent implements OnInit {

  constructor(public dialog: MatDialog, public dialogRef: MatDialogRef<CreateLocationDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {}
  street_address: string;
  postal_code: string;
  city: string;
  state_province: string;
  header: string;
  ngOnInit(): void {
    this.street_address = this.data.street_address;
    this.postal_code = this.data.postal_code;
    this.city = this.data.city;
    this.state_province = this.data.state_province;
    this.header = this.data.header;
  }
  onNoClick(){
    this.dialogRef.close({result: 'No'});
  }
  onYesClick(){
    this.dialogRef.close({result: 'Yes' });
  }

}
