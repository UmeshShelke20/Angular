import { HttpErrorResponse } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { CommonserviceService } from 'src/app/common Service/commonservice.service';
import { Customer } from 'src/app/model/customer';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  id:Number=0
  Custo:any
  constructor (public  com :CommonserviceService,private routes:Router){

  }
  ngOnInit(): void {
    this.com.getallCustomer().subscribe((data)=>
    this.Custo=data)
  }
  update(n:number){
this.routes.navigateByUrl("upadte/"+n)
  }
  deletes(n:number){
    this.com.deleteCustomer(n).pipe(catchError(this.handleError)).subscribe(response => {
      console.log(response,"Update mananger");
      alert(response) ;
      
    })
    window.location.reload();
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
