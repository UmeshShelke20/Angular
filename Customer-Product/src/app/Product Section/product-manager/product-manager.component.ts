import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { catchError, throwError } from 'rxjs';
import { CommonserviceService } from 'src/app/common Service/commonservice.service';

@Component({
  selector: 'app-product-manager',
  templateUrl: './product-manager.component.html',
  styleUrls: ['./product-manager.component.css']
})
export class ProductManagerComponent {
  product:FormGroup=new FormGroup({})
  constructor (private com:CommonserviceService){
    this.product=new FormGroup({
      pid:new FormControl('',[Validators.required]),
      pname:new FormControl('',[Validators.required]),
      pquantity:new FormControl('',[Validators.required]),
      pprice: new FormControl('',[Validators.required])
    })
  }

  onSubmit(){
    this.com.saveProduct(this.product.value).pipe(catchError(this.handleError)).subscribe(response => {
      console.log(response,"Save Product mananger");
      alert(response) ;
      window.location.reload();
    })
    
  }
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      alert('An error occurred:'+ error.error)
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      alert(`Please fillup complete form ${error.status}, Fails to Save: `+ error.error)
      console.error(
        `Please fillup complete form ${error.status}, Fails to Save: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
