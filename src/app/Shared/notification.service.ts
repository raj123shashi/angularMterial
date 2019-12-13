import { Injectable } from '@angular/core';
import {MatSnackBar,MatSnackBarConfig} from '@angular/material/snack-bar';
import { SelectControlValueAccessor } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private snackBar:MatSnackBar) { 
 
}
config:MatSnackBarConfig={
  duration:3000,
  horizontalPosition:'right',
  verticalPosition:'top',
}
Success(msg){
  this.config['panelClass']=['notification','success'];
  this.snackBar.open(msg,'',this.config);
    
}
}
