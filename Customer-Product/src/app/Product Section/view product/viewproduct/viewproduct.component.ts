import { HttpErrorResponse } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { CommonserviceService } from 'src/app/common Service/commonservice.service';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent  implements OnInit{

  datastore:any
  constructor(private com:CommonserviceService,private route:Router){
    
  }
  ngOnInit(): void {
    window.location.reload
    this.com.getproductList().subscribe((data:any)=>this.datastore=data)
  }
  update(n:number){
    this.route.navigateByUrl('/Product-Section/update/'+n);
  }

  deletes(n:number){
this.com.deleteProduct(n).pipe(catchError(this.handleError)).subscribe(response => {
  console.log(response,"deleteProduct mananger");
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
alert(`Please Cheached Details ${error.status}, Fails to Delete: `+ error.error)
console.error(
  `Please Cheached Details ${error.status}, Fails to Delete: `, error.error);
}
// Return an observable with a user-facing error message.
return throwError(() => new Error('Something bad happened; please try again later.'));
}

  }

