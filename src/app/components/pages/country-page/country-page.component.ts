import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatDialog} from "@angular/material/dialog";
import {ConfirmDialogComponent} from "../../dialogs/confirm-dialog/confirm-dialog.component";
import {CountryService} from "../../../services/country.service";
import {CreateCountryDialogComponent} from "../../dialogs/create-country-dialog/create-country-dialog.component";


export interface Country {
  id: number;
  name: string;
  region_id? : number;
}
@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styleUrls: ['./country-page.component.css']
})
export class CountryPageComponent implements OnInit {

  pukeData: Country[] = [
    {id: 1, name: 'Страна 1'},
    {id: 2, name: 'Страна 2'},
    {id: 3, name: 'Страна 3'},
    {id: 4, name: 'Страна 4'},
    {id: 5, name: 'Страна 5'},

  ]
  constructor(public countryService: CountryService,    private dialog: MatDialog) { }
  displayedColumns: string[] = [ 'name', 'actions'];
  listData: MatTableDataSource<Country> = new MatTableDataSource<Country>();

  ngOnInit(): void {
    this.countryService.getCountryList().subscribe( (data: Country[]) => {
      console.log(data)
      this.listData.data = data;
    })
    this.listData.data = this.pukeData;

  }

  openCreateDialog() {
    console.log('open CreateDialog')
    this.dialog.open(CreateCountryDialogComponent, {data: { header: 'Создание' }})
      .afterClosed()
      .subscribe(result => {
        if (result.result === 'Yes'){

        }});
  }

  openEditDialog({name}) {
    this.dialog.open(CreateCountryDialogComponent, {data: { header: 'Редактирование' , name }})
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
