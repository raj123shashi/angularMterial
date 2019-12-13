import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../../Shared/employee.service';
import{DepartmentService} from'../../Shared/department.service';
import{NotificationService} from'../../Shared/notification.service';
  import { from } from 'rxjs';

@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.css']
})
export class EmployeComponent implements OnInit {

  constructor(private service:EmployeeService,
    private dept_Service:DepartmentService,private _Servicenotificaton:NotificationService) { }

  ngOnInit() {
    this.service.getEmployees();
   }


clear()
{
  this.service.form.reset();
  this.service.intiallizeFormGroup();
 
}
onSubmit(){
  if(this.service.form.valid){
    this.service.insertEmployee (this.service.form.value);
    this.service.form.reset();
    //It Will Inialze form Group value
    this.service.intiallizeFormGroup();
    this._Servicenotificaton.Success('Submit Successfullay');
    
  }
}

}
