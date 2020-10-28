import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegionPageComponent} from "./components/pages/region-page/region-page.component";
import {CountryPageComponent} from "./components/pages/country-page/country-page.component";
import {LocationPageComponent} from "./components/pages/location-page/location-page.component";
import {JobPageComponent} from "./components/pages/job-page/job-page.component";
import {EmployeePageComponent} from "./components/pages/employee-page/employee-page.component";
import {DepartmentPageComponent} from "./components/pages/department-page/department-page.component";
import {JobHistoryPageComponent} from "./components/pages/job-history-page/job-history-page.component";


const routes: Routes = [
  {
    path: 'region',
    component: RegionPageComponent
  },
  {
    path: 'country',
    component: CountryPageComponent
  },
  {
    path: 'location',
    component: LocationPageComponent
  },
  {
    path: 'job',
    component: JobPageComponent
  },
  {
    path: 'employee',
    component: EmployeePageComponent
  },
  {
    path: 'department',
    component: DepartmentPageComponent
  },
  {
    path: 'job-history',
    component: JobHistoryPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
