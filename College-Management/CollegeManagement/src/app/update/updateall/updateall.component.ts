import { HttpErrorResponse } from '@angular/common/http';
import { Component} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { HomeserviceService } from 'src/app/common/homeservice.service';
import { Student } from 'src/app/model/student';

@Component({
  selector: 'app-updateall',
  templateUrl: './updateall.component.html',
  styleUrls: ['./updateall.component.css']
})
export class UpdateallComponent {
constructor(public con:HomeserviceService,public rout:Router){}
  
public Address= new FormGroup({
  id: new FormControl('',[Validators.required]),
  city: new FormControl('',[Validators.required]),
  taluka: new FormControl('',[Validators.required]),
  district: new FormControl('',[Validators.required]),
  state: new FormControl('',[Validators.required]),
  pincode: new FormControl('',[Validators.required]),
})
 public  Student = new FormGroup({
    id: new FormControl('',[Validators.required]),
    name: new FormControl('',[Validators.required]),
    rollno: new FormControl('',[Validators.required]),
    address: this.Address
    
  });
  get f(){
    return this.Student.controls
  } 
  get g(){
    return this.Address.controls
  } 
  onUpdate(stu:Student){
this.con.updateall(stu).pipe(catchError(this.handleError)).subscribe(response => {
  console.log(response,"Update mananger");
  alert(response) ;
});
this.rout.navigateByUrl('/addmission/addmission/view');
  }
  
private handleError(error: HttpErrorResponse) {
  if (error.status === 0) {
    // A client-side or network error occurred. Handle it accordingly.
    alert('An error occurred:'+ error.error)
    console.error('An error occurred:', error.error);
  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong.
    alert( `Backend returned code ${error.status}, body was: `+ error.error)
    console.error(
      `Backend returned code ${error.status}, body was: `, error.error);
  }
  // Return an observable with a user-facing error message.
  return throwError(() => new Error('Something bad happened; please try again later.'));
}
}
