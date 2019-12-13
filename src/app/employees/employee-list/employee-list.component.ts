
import { EmployeeService } from '../../Shared/employee.service';

import { MatTableDataSource,MatSort,MatPaginator } from '@angular/material';
import { Component, OnInit,ViewChild  } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private _ServiceEmployee:EmployeeService) { }
  listData:MatTableDataSource<any>;
  displayColumns:string[]=['fullName','email','mobile','city','gender','department','isParmanent','actions',];
 
  @ViewChild (MatSort) sort: MatSort;
  @ViewChild (MatPaginator) paginator: MatPaginator;

  ngOnInit() { 
    this._ServiceEmployee.getEmployees().subscribe(
      list =>{
      let array= list.map(item =>{
      return {
      $key:item.key,
     //It Will Return Employee Table Detail From Firebase    ...item.payload.val()
     ...item.payload.val()
        };
        });
       //It Will Convert array Into ListDataObject
       this.listData=new MatTableDataSource(array);
       //this.listData.sort = this.sort;
     });
  }
}
