import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-create-job-dialog',
  templateUrl: './create-job-dialog.component.html',
  styleUrls: ['./create-job-dialog.component.css']
})
export class CreateJobDialogComponent implements OnInit {

  constructor(public dialog: MatDialog, public dialogRef: MatDialogRef<CreateJobDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {}
  name: string;
  min_salary: number;
  max_salary: number;
  header: string;

  ngOnInit(): void {
    this.name = this.data.name;
    this.min_salary = this.data.min_salary;
    this.max_salary = this.data.max_salary;
    this.header = this.data.header;
  }
  onNoClick(){
    this.dialogRef.close({result: 'No'});
  }
  onYesClick(){
    this.dialogRef.close({result: 'Yes'});
  }

}
