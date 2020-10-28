import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-create-employee-dialog',
  templateUrl: './create-employee-dialog.component.html',
  styleUrls: ['./create-employee-dialog.component.scss']
})
export class CreateEmployeeDialogComponent implements OnInit {

  constructor(public dialog: MatDialog, public dialogRef: MatDialogRef<CreateEmployeeDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {}
  name: string;
  second_name: string;
  email: string;
  phone: string;
  hire_date: string;
  work: string;
  salary: number;
  header: string;

  ngOnInit(): void {
    this.name = this.data.name;
    this.second_name = this.data.second_name;
    this.email = this.data.email;
    this.phone = this.data.phone;
    this.hire_date = this.data.hire_date;
    this.work = this.data.work;
    this.salary = this.data.salary;
    this.header = this.data.header;
  }
  onNoClick(){
    this.dialogRef.close({result: 'No'});
  }
  onYesClick(){
    this.dialogRef.close({result: 'Yes', name: this.name });
  }


}
