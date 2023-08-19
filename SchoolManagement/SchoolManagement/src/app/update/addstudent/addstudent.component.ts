import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { HomeserviceService } from 'src/app/common/homeservice.service';
import { Student } from 'src/app/model/student';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent {
id:number=0;
Stu:Student=new Student
  constructor(private acti:ActivatedRoute, private com:HomeserviceService, private route:Router){
this.acti.paramMap.subscribe((param)=>{
  this.id=Number(param.get('id'))
})
console.log(this.id, " 1 at add student");
  }
  onSubmit(){
    this.Stu=Object.assign(this.Student.value);
    console.log(this.Stu);
    
this.sumbitstu();
this.route.navigateByUrl('addmission/addmission/view');

  }

  sumbitstu(){
    this.com.addnewStudentinOldClass(this.Stu,this.id).pipe(catchError(this.handleError)).subscribe(response => {
      console.log(response,"New Student add in Old Class");
      alert(response) ;
  });
  }
  
private handleError(error: HttpErrorResponse) {
  if (error.status === 0) {
    // A client-side or network error occurred. Handle it accordingly.
    alert('An error occurred:'+ error.error)
    console.error('An error occurred:', error.error);
  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong.
    alert(`Please fillup complete form ${error.status}, Fails to Submit: `+ error.error)
    console.error(
      `Please fillup complete form ${error.status}, Fails to Submit: `, error.error);
  }
  // Return an observable with a user-facing error message.
  return throwError(() => new Error('Something bad happened; please try again later.'));
}
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
}
