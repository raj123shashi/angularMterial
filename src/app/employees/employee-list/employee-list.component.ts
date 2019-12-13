
import { EmployeeService } from '../../Shared/employee.service';

import { MatTableDataSource,MatSort,MatPaginator } from '@angular/material';
import { Component, OnInit,ViewChild  } from '@angular/core';
import { DepartmentService } from 'src/app/Shared/department.service';
import{MatDialog,MatDialogConfig} from "@angular/material";
import { EmployeComponent } from '../employe/employe.component';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private _ServiceEmployee:EmployeeService,private deptService:DepartmentService,
    private matDilog:MatDialog) { }
  listData:MatTableDataSource<any>;
  displayColumns:string[]=['fullName','email','mobile','city','gender','isParmanent','actions',];
 
  // @ViewChild (MatSort) sort: MatSort;
  // @ViewChild (MatPaginator) paginator: MatPaginator;
  searchKey:string;
  ngOnInit() { 
    this._ServiceEmployee.getEmployees().subscribe(
      list =>{
      let array= list.map(item =>{
       // let departmentName = this.deptService.getDepartmentName(item.payload.val()['department']);
      return {
      $key:item.key,
     // departmentName ,
     //It Will Return Employee Table Detail From Firebase    ...item.payload.val()
     ...item.payload.val()
        };
        });
       //It Will Convert array Into ListDataObject
       this.listData=new MatTableDataSource(array);
       //this.listData.sort = this.sort;
     });
  }
  applyFilter() {
    this.listData.filter = this.searchKey.trim().toLowerCase();
  }
  onSearchClear() {
    this.searchKey = "";
    this.applyFilter();
  }
  onCreate(){
   this._ServiceEmployee.intiallizeFormGroup();
    const dilogCongig=new MatDialogConfig();
    dilogCongig.disableClose=true;
    dilogCongig.autoFocus=true;
    dilogCongig.width="60%";

    this.matDilog.open(EmployeComponent,dilogCongig);

  }
  onEdit(row){
    this._ServiceEmployee.populateForm(row);
    const dilogCongig=new MatDialogConfig();
    dilogCongig.disableClose=true;
    dilogCongig.autoFocus=true;
    dilogCongig.width="60%";
    this.matDilog.open(EmployeComponent,dilogCongig);   
   }
}
