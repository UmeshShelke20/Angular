import { Component } from '@angular/core';
import { HomeserviceService } from 'src/app/common/homeservice.service';
import { Student } from 'src/app/model/student';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-registrationmanager',
  templateUrl: './registrationmanager.component.html',
  styleUrls: ['./registrationmanager.component.css']
})
export class RegistrationmanagerComponent {
  res:any

  constructor(private common:HomeserviceService){}
// saveStudent(student:Student){
// this.common.saveStudentData(student).subscribe((response) => {
//   this.results = response;
// },error=>this.results=error)
// alert(this.results)
// // window.location.reload()
// }
saveStudent(student:Student){
  this.common.saveStudentData(student).pipe(catchError(this.handleError)).subscribe(response => {
    console.log(response,"Registration mananger");
    alert(response) ;
    window.location.reload();
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
