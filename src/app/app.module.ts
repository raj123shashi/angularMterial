import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeComponent } from './employees/employe/employe.component';
import {MaterialModule} from './Material/material.module';
import{EmployeeService} from './Shared/employee.service';
import { environment } from '../environments/environment';
import{DepartmentService} from'./Shared/department.service';
import { from } from 'rxjs';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';

   
@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmployeComponent,
    EmployeeListComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    
    
  ],
  providers: [EmployeeService,DepartmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
