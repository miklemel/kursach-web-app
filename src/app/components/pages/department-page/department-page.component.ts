import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatDialog} from "@angular/material/dialog";
import {ConfirmDialogComponent} from "../../dialogs/confirm-dialog/confirm-dialog.component";
import {CreateJobDialogComponent} from "../../dialogs/create-job-dialog/create-job-dialog.component";
import {DepartmentService} from "../../../services/department.service";


export interface Department {
  id: number;
  name: string;
  min_salary: number;
  max_salary: number;
}
@Component({
  selector: 'app-department-page',
  templateUrl: './department-page.component.html',
  styleUrls: ['./department-page.component.css']
})
export class DepartmentPageComponent implements OnInit {

  pukeData: Department[] = [
    {id: 1, name: 'Грузчик', min_salary: 12323, max_salary: 12323},
    {id: 2, name: 'Слесарь', min_salary: 12323, max_salary: 12323},
    {id: 3, name: 'Вася', min_salary: 12323, max_salary: 12323},
    {id: 4, name: '1', min_salary: 12323, max_salary: 12323},
    {id: 5, name: '2', min_salary: 12323, max_salary: 12323},

  ]
  constructor(public departmentService: DepartmentService,    private dialog: MatDialog) { }
  displayedColumns: string[] = [ 'name', 'min_salary', 'max_salary', 'actions'];
  listData: MatTableDataSource<Department> = new MatTableDataSource<Department>();

  ngOnInit(): void {
    this.departmentService.getDepartmentList().subscribe( (data: Department[]) => {
      console.log(data)
      this.listData.data = data;
    })
    this.listData.data = this.pukeData;

  }

  openCreateDialog() {
    console.log('open CreateDialog')
    this.dialog.open(CreateJobDialogComponent, {data: { header: 'Создание' }})
      .afterClosed()
      .subscribe(result => {
        if (result.result === 'Yes'){

        }});
  }

  openEditDialog({name, min_salary, max_salary}) {
    this.dialog.open(CreateJobDialogComponent, {data: { header: 'Редактирование' , name, min_salary, max_salary }})
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
