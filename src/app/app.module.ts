import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {MatListModule} from '@angular/material/list';
import { MatIconModule } from "@angular/material/icon";
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import {HttpClientModule} from "@angular/common/http";
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from "@angular/forms";
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';

import { AppComponent } from './app.component';
import { RegionPageComponent } from './components/pages/region-page/region-page.component';
import { CountryPageComponent } from './components/pages/country-page/country-page.component';
import { LocationPageComponent } from './components/pages/location-page/location-page.component';
import { JobPageComponent } from './components/pages/job-page/job-page.component';
import { EmployeePageComponent } from './components/pages/employee-page/employee-page.component';
import { DepartmentPageComponent } from './components/pages/department-page/department-page.component';
import { JobHistoryPageComponent } from './components/pages/job-history-page/job-history-page.component';
import { CreateEmployeeDialogComponent } from './components/dialogs/create-employee-dialog/create-employee-dialog.component';
import { ConfirmDialogComponent } from './components/dialogs/confirm-dialog/confirm-dialog.component';
import { CreateCountryDialogComponent } from './components/dialogs/create-country-dialog/create-country-dialog.component';
import { CreateRegionDialogComponent } from './components/dialogs/create-region-dialog/create-region-dialog.component';
import { CreateJobDialogComponent } from './components/dialogs/create-job-dialog/create-job-dialog.component';
import { CreateLocationDialogComponent } from './components/dialogs/create-location-dialog/create-location-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    RegionPageComponent,
    CountryPageComponent,
    LocationPageComponent,
    JobPageComponent,
    EmployeePageComponent,
    DepartmentPageComponent,
    JobHistoryPageComponent,
    CreateEmployeeDialogComponent,
    ConfirmDialogComponent,
    CreateCountryDialogComponent,
    CreateRegionDialogComponent,
    CreateJobDialogComponent,
    CreateLocationDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatListModule,
    MatIconModule,
    MatTabsModule,
    MatTableModule,
    HttpClientModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatInputModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
