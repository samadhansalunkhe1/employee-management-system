import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeDataService } from './employee-data.service';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeFieldsComponent } from './employee-fields/employee-fields.component';
import { EmployeeHomeComponent } from './employee-home/employee-home.component';
import { HeaderComponent } from './header/header.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeAddComponent,
    EmployeeListComponent,
    EmployeeDetailsComponent,
    EmployeeFieldsComponent,
    EmployeeHomeComponent,
    HeaderComponent,
    EmployeeEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'home',
        component: EmployeeHomeComponent
      },
      {
        path: 'list',
        component: EmployeeListComponent
      },
      {
        path: 'add',
        component: EmployeeAddComponent
      },
      {
        path: 'edit/:id',
        component: EmployeeEditComponent
      },
      {
        path: 'view/:id',
        component: EmployeeDetailsComponent
      }
  ])
  ],
  providers: [EmployeeDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
