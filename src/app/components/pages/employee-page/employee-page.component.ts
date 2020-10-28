import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {EmployeeService} from "../../../services/employee.service";
import {CreateEmployeeDialogComponent} from "../../dialogs/create-employee-dialog/create-employee-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {ConfirmDialogComponent} from "../../dialogs/confirm-dialog/confirm-dialog.component";


export interface Employee {
  id: number;
  name: string;
  second_name: string;
  email: string;
  phone: string;
  hire_date: string;
  work: string;
  salary: number;
}

@Component({
  selector: 'app-employee-page',
  templateUrl: './employee-page.component.html',
  styleUrls: ['./employee-page.component.css']
})
export class EmployeePageComponent implements OnInit {

  pukeData: Employee[] = [
    {id: 1, name: '1', second_name: '1', email: '123213123', phone: '12323323', hire_date: '203,/223', work: '123', salary: 111},
    {id: 8, name: '2', second_name: '1', email: '123213123', phone: '12323323', hire_date: '203,/223', work: '223', salary: 111},
    {id: 7,name: '3', second_name: '1', email: '123213123', phone: '12323323', hire_date: '203,/223', work: '', salary: 111},
    {id: 6,name: '4', second_name: '1', email: '123213123', phone: '12323323', hire_date: '203,/223', work: '', salary: 111},
    {id: 5,name: '5', second_name: '1', email: '123212313123', phone: '12323323', hire_date: '203,/223', work: '', salary: 111},
    {id: 4,name: '6', second_name: '1', email: '113123', phone: 'sd212', hire_date: '203,/223', work: '', salary: 2223},
    {id: 3,name: '7', second_name: '1', email: '123213123', phone: '12323323', hire_date: '203,/223', work: '23', salary: 33},
    {id: 2,name: '81', second_name: '1', email: '123213123', phone: '12323323', hire_date: '203,/223', work: '', salary: 111},
    {id: 10,name: '88881', second_name: '1', email: '123213123', phone: '12323323', hire_date: '203,/223', work: '', salary: 111},
  ]
  constructor(public employeeService: EmployeeService,    private dialog: MatDialog) { }
  displayedColumns: string[] = [ 'name', 'second_name', 'email', 'phone', 'hire_date', 'work', 'salary', 'actions'];
  listData: MatTableDataSource<Employee> = new MatTableDataSource<Employee>();

  ngOnInit(): void {
    this.employeeService.getEmployeeList().subscribe( (data: Employee[]) => {
      console.log(data)
      this.listData.data = data;
    })
    this.listData.data = this.pukeData;

  }

  openCreateDialog() {
    console.log('open CreateDialog')
    this.dialog.open(CreateEmployeeDialogComponent, {data: { header: 'Создание' }})
      .afterClosed()
      .subscribe(result => {
        if (result.result === 'Yes'){

        }});
  }

  openEditDialog({name, second_name, email, phone, hire_date, work, salary}) {
    this.dialog.open(CreateEmployeeDialogComponent, {data: { header: 'Редактирование' , name, second_name, email, phone, hire_date, work, salary }})
      .afterClosed()
      .subscribe(result => {
        if (result.result === 'Yes'){

        }});
  }

  removeEmployee(row: any) {
    console.log('open remove');
    this.dialog.open(ConfirmDialogComponent, {data: { header: 'Удаление', dialogText: 'Вы уверены что хотите удалить?' }})
      .afterClosed()
      .subscribe(result => {
        if (result.result === 'Yes'){

        }});
  }
}
