import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatDialog} from "@angular/material/dialog";
import {ConfirmDialogComponent} from "../../dialogs/confirm-dialog/confirm-dialog.component";
import {RegionService} from "../../../services/region.service";
import {CreateRegionDialogComponent} from "../../dialogs/create-region-dialog/create-region-dialog.component";


export interface Region {
  id: number;
  name: string;
}
@Component({
  selector: 'app-region-page',
  templateUrl: './region-page.component.html',
  styleUrls: ['./region-page.component.css']
})
export class RegionPageComponent implements OnInit {

  pukeData: Region[] = [
    {id: 1, name: 'Регион 1'},
    {id: 2, name: 'Регион 2'},
    {id: 3, name: 'Регион 3'},
    {id: 4, name: 'Регион 4'},
    {id: 5, name: 'Регион 5'},

  ]
  constructor(public regionService: RegionService,    private dialog: MatDialog) { }
  displayedColumns: string[] = [ 'name', 'actions'];
  listData: MatTableDataSource<Region> = new MatTableDataSource<Region>();

  ngOnInit(): void {
    this.regionService.getRegionList().subscribe( (data: Region[]) => {
      console.log(data)
      this.listData.data = data;
    })
    this.listData.data = this.pukeData;

  }

  openCreateDialog() {
    console.log('open CreateDialog')
    this.dialog.open(CreateRegionDialogComponent, {data: { header: 'Создание' }})
      .afterClosed()
      .subscribe(result => {
        if (result.result === 'Yes'){

        }});
  }

  openEditDialog({name}) {
    this.dialog.open(CreateRegionDialogComponent, {data: { header: 'Редактирование' , name }})
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
