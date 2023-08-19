import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { CommonserviceService } from 'src/app/common Service/commonservice.service';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  product:Product={
    pid: 0,
    pname: '',
    pquantity: 0,
    pprice: 0
  }
  n:number=0
  pro:FormGroup=new FormGroup({})
  
constructor(private com: CommonserviceService,private acti:ActivatedRoute, private route:Router){
this.acti.paramMap.subscribe(m=>{
  this.n=Number(m.get('id'));
})
,
this.pro=new FormGroup({
  pid:new FormControl('',[Validators.required]),
  pname:new FormControl('',[Validators.required]),
  pquantity:new FormControl('',[Validators.required]),
  pprice: new FormControl('',[Validators.required])
})
}

  ngOnInit(): void {
    this.com.singleProduct(this.n).subscribe((data:any)=>this.product=data)
  }
  onSubmit(){
    this.com.updateProduct(this.pro.value).pipe(catchError(this.handleError)).subscribe(response => {
      console.log(response,"Update Product mananger");
      alert(response) ;
      
    })
  this.route.navigateByUrl("/Product-Section/viewproduct")
  }
  
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      alert('An error occurred:'+ error.error)
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      alert(`Please fillup complete form ${error.status}, Fails to Update: `+ error.error)
      console.error(
        `Please fillup complete form ${error.status}, Fails to Update: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
