import { HttpErrorResponse } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { catchError, throwError } from 'rxjs';
import { CommonserviceService } from 'src/app/common/commonservice.service';

@Component({
  selector: 'app-sendwithatachemnt',
  templateUrl: './sendwithatachemnt.component.html',
  styleUrls: ['./sendwithatachemnt.component.css']
})
export class SendwithatachemntComponent implements OnInit {

  attachment:any
constructor(private com:CommonserviceService){

}

email:any
imageSrc1:any
  ngOnInit(): void {
    this.email=new FormGroup({
      toEmail:new FormControl(''),
      subject:new FormControl(''),
      body:new FormControl(''),
    })
  }

  onSubmit(){

    const mail=JSON.stringify(this.email.value);
const email= new FormData();
email.append("email",mail)
email.append("attachment",this.attachment);

this.com.send(email).pipe(catchError(this.handleError)).subscribe(response => {
  console.log(response,"Send Mail mananger");
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
reder= new FileReader()
eventListner(e:any){
this.attachment=e.target.files[0];
const file=e.target.files[0];
this.reder.onload=a=>this.imageSrc1=this.reder.result;
this.reder.readAsDataURL(file);
}

}
