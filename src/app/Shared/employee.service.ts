import { Injectable } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import { AngularFireDatabase,AngularFireList } from 'angularfire2/database';
import { DatePipe } from '@angular/common';



@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private fireBase:AngularFireDatabase, private datePipe: DatePipe) { }

  //Define For FireList
  employeeList:AngularFireList<any>;
  form:FormGroup=new FormGroup({
  $key:new FormControl(null),
  fullName:new FormControl('',Validators.required),
  email:new FormControl('',Validators.email),
   mobile:new FormControl('',[Validators.required,Validators.minLength(8)]),
    city:new FormControl(''),
    gender:new FormControl('1'),
    department:new FormControl('0'),
    hireDate:new FormControl(''),
    isParmanent:new FormControl(false),
     });
  intiallizeFormGroup(){
    this.form.setValue({
      $key:null,
      fullName:'',
      email:'',
      mobile:'',
      city:'',
      gender:'1',
      department:0,
     hireDate:'',
      isParmanent:false,
    })
  }
  getEmployees(){
    this.employeeList=this.fireBase.list('employees');
    return this.employeeList.snapshotChanges();
    // snapshotChanges() It Will Return Obseable From Fire List
  }
  insertEmployee(employe){

    this.employeeList.push({
      fullName:employe.fullName,
      email:employe.email,
      mobile:employe.mobile,
      city:employe.city,
      gender:employe.gender,
      department:employe.department,
      hireDate:this.datePipe.transform(employe.hireDate,'YYYY-MM-DD'),
      isParmanent:employe.isParmanent
    });
  }
  upDateEmployee(employe){
    this.employeeList.update(employe.$key,{
      fullName:employe.fullName,
      email:employe.email,
      mobile:employe.mobile,
      city:employe.city,
      gender:employe.gender,
      department:employe.department,
      //hireDate:employe.hireDate,
      hireDate:this.datePipe.transform(employe.hireDate,'YYYY-MM-DD'),
      isParmanent:employe.isParmanent

    });
  }
  deleteEmployee($key:string){
    this.employeeList.remove($key);
    
  }
  populateForm(employe){
   this.form.setValue(employe);


 }
  //All Methods update,remove Present In AngularFireList Class.
}
