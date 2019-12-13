import { Injectable } from '@angular/core';
import { AngularFireDatabase,AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  departmentList:AngularFireList<any>;
  array=[];

  constructor(private fireBase:AngularFireDatabase) { 
    //Retrive Data From FirebaseDb
    this.departmentList=this.fireBase.list('department');
    //snapshotChanges() It will Convert AngularFireList to Obserable.
    this.departmentList.snapshotChanges().subscribe(
      list =>{
        this.array =list.map(item =>{
         return {
           $key:item.key,
          ...item.payload.val()

        };
        
        });

      } );
  }
}
