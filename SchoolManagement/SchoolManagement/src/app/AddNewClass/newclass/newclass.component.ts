import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output, NgModule } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { catchError, throwError } from 'rxjs';
import { HomeserviceService } from 'src/app/common/homeservice.service';
import { SchoolClass } from 'src/app/model/school-class';
import { Student } from 'src/app/model/student';

@Component({
  selector: 'app-newclass',
  templateUrl: './newclass.component.html',
  styleUrls: ['./newclass.component.css']
})
export class NewclassComponent implements OnInit {
  public Student:any
public selected:any
  newclass:any
  dent:any=[];
  constructor(private com:HomeserviceService){
   
  }

  onchange(n:number ){
  //console.log(n,"at index",this.newclass.get("students")?.at(n).value);
  
     console.log(this.newclass.get("students")?.at(n)?.get("id")?.value);
     let data = this.Student.find((r:any) => r.id ==(this.newclass.get("students")?.at(n)?.get("id")?.value));
      console.log(data,"at change");
      this.dent.push(data)
      this.newclass.get('students')?.patchValue(this.dent)
      console.log(this.newclass.get("students")?.at(n).value);
      
    // this.selected.push(dent.push(data))
      //this.selected.push(Object().push(data))
    //  console.log(this.selected);
     
  //  const index =   this.students.controls.findIndex((s:any)=>s==data);
  //  console.log(index);
   
  //  this.students.controls.at(index)?.patchValue(dent)
    // this.students.insert(1,data)
  //  this. assign= this.newclass.get("students").get("id").at(n)
  //  console.log(this.assign);
  // console.log(n);
   
  }

  changedept(){
    // console.log(this.selected);
    // console.log(n);
    // let data = this.Student.find((r) => r.id == n);
    // console.log(data);
    // let student=[];
    // student.push(data)
    // this.students.patchValue(this.selected);
    // const creds = this.form.controls.countries as FormArray;
    // creds.at(1).get('country').setValue('USA');
    // let formArray = this.form.get('products') as FormArray;
    // this.newclass.get('students')['controls'].push(data)
    //this.newclass.get('students')['controls'].setValue(this.selected)
    
    console.log(this.students);
  }
  
  ngOnInit(): void {
    this.getallStudent(),
   this. newclass=new FormGroup({
    id: new FormControl('',[Validators.required]),
    classname: new FormControl("",[Validators.required]),
    students: new FormArray([new FormGroup({
      id: new FormControl('',[Validators.required]),
      name: new FormControl('',[Validators.required]),
      rollno: new FormControl('',[Validators.required]),
      address: new FormGroup({
        id: new FormControl('',[Validators.required]),
        city: new FormControl('',[Validators.required]),
        taluka: new FormControl('',[Validators.required]),
        district: new FormControl('',[Validators.required]),
        state: new FormControl('',[Validators.required]),
        pincode: new FormControl('',[Validators.required]),
      })
    })])
  })
   
  }
  

get students() {
  return <FormArray>this.newclass.controls['students'] as FormArray;
}

addStudent(){
  const students=new FormGroup({
    id: new FormControl('',[Validators.required]),
    name: new FormControl('',[Validators.required]),
    rollno: new FormControl('',[Validators.required]),
    address: new FormGroup({
      id: new FormControl('',[Validators.required]),
      city: new FormControl('',[Validators.required]),
      taluka: new FormControl('',[Validators.required]),
      district: new FormControl('',[Validators.required]),
      state: new FormControl('',[Validators.required]),
      pincode: new FormControl('',[Validators.required]),
    })
  });
this.students.push(students)
}
get e(){
  return this.newclass.controls
}
  onSubmit(){
   console.log(this.newclass.value);
    
  this.com.savewithOldStudents(this.newclass.value).pipe(catchError(this.handleError)).subscribe(response => {
  console.log(response,"New class old mananger");
  alert(response) ;
  window.location.reload();
})
  }
getallStudent(){
  this.com.getallStudent().pipe(catchError(this.handleError)).subscribe((data:any)=>{
this.Student=data
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
}
