import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Output,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { HomeserviceService } from 'src/app/common/homeservice.service';
import { SchoolClass } from 'src/app/model/school-class';
import { Student } from 'src/app/model/student';

@Component({
  selector: 'app-viewmanager',
  templateUrl: './viewmanager.component.html',
  styleUrls: ['./viewmanager.component.css']
})
export class ViewmanagerComponent implements OnInit{
constructor(private com:HomeserviceService,public rout:Router){}

ngOnInit(): void {
  this.viewall();
}
public ClassList:any=[]

public viewall(){
  this.com.getallClass().subscribe(data=>{
    this.ClassList=data;
  })
  
}

public updatedata(s:Student){
  this.com.stu=s
this.rout.navigateByUrl('/addmission/addmission/update')
}
public deletedata(s:Student){
console.log(s.name);
this.com.detetStu(s).pipe(catchError(this.handleError)).subscribe(response => {
  console.log(response,"View mananger");
  alert(response) ;
  window.location.reload();
});
}

addstudent(ss:SchoolClass){

this.rout.navigateByUrl('addmission/addmission/addstudent/'+ss.id)
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
