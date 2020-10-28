import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {CreateEmployeeDialogComponent} from "../../dialogs/create-employee-dialog/create-employee-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {ConfirmDialogComponent} from "../../dialogs/confirm-dialog/confirm-dialog.component";
import {LocationService} from "../../../services/location.service";
import {CreateLocationDialogComponent} from "../../dialogs/create-location-dialog/create-location-dialog.component";


export interface Location {
  id: number;
  street_address: string;
  postal_code: number;
  city: string;
  state_province: string;
  country? : string;
}

@Component({
  selector: 'app-location-page',
  templateUrl: './location-page.component.html',
  styleUrls: ['./location-page.component.css']
})
export class LocationPageComponent implements OnInit {

  pukeData: Location[] = [
    {id: 1, street_address: 'ASsdsddssdsd', postal_code: 12323, city: '1SWDlsd', state_province: 'asdsd'},
    {id: 2, street_address: 'ASsdsddssdsd', postal_code: 12323, city: '1SWDlsd', state_province: 'asdsd'},
    {id: 33, street_address: 'a', postal_code: 12323, city: '1SWDlsd', state_province: 'asdsd'},
    {id: 4, street_address: 'ASsdsddssdsd', postal_code: 12323, city: '1SWDlsd', state_province: 'asdsd'},
    {id: 5, street_address: '323', postal_code: 12323, city: '1SWDlsd', state_province: 'asdsd'},
    {id: 6, street_address: '666', postal_code: 12323, city: '1SWDlsd', state_province: 'asdsd'},
    {id: 7, street_address: 'ASsdsddssdsd', postal_code: 12323, city: '1SWDlsd', state_province: 'asdsd'},


  ]
  constructor(public locationService: LocationService,    private dialog: MatDialog) { }
  displayedColumns: string[] = [ 'street_address', 'postal_code', 'city', 'state_province', 'actions'];
  listData: MatTableDataSource<Location> = new MatTableDataSource<Location>();

  ngOnInit(): void {
    this.locationService.getLocationList().subscribe( (data: Location[]) => {
      console.log(data)
      this.listData.data = data;
    })
    this.listData.data = this.pukeData;

  }

  openCreateDialog() {
    console.log('open CreateDialog')
    this.dialog.open(CreateLocationDialogComponent, {data: { header: 'Создание' }})
      .afterClosed()
      .subscribe(result => {
        if (result.result === 'Yes'){

        }});
  }

  openEditDialog({street_address, postal_code, city, state_province}) {
    this.dialog.open(CreateLocationDialogComponent, {data: { header: 'Редактирование' , street_address, postal_code, city, state_province }})
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
