import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { catchError, throwError } from 'rxjs';
import { CommonserviceService } from 'src/app/common Service/commonservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  Products:any
  selectedProducts:any
  ngOnInit(): void {
    this.com.getproductList().subscribe((data:any)=>{
      this.Products=data
    })

  }
  newproduct=true
  customer:FormGroup=new FormGroup({})
  oldcustomer:FormGroup=new FormGroup({})
  constructor(public com:CommonserviceService){
this.customer=new FormGroup({
  cid:new FormControl('',[Validators.required]),
cname:new FormControl('',[Validators.required]),
caddress:new FormControl('',[Validators.required]),
cemail:new FormControl('',[Validators.required]),
product:new FormGroup({
    pid:new FormControl('',[Validators.required]),
    pname:new FormControl('',[Validators.required]),
    pquantity:new FormControl('',[Validators.required]),
    pprice: new FormControl('',[Validators.required])
})
  }),
  this.oldcustomer=new FormGroup({
    cid:new FormControl('',[Validators.required]),
  cname:new FormControl('',[Validators.required]),
  caddress:new FormControl('',[Validators.required]),
  cemail:new FormControl('',[Validators.required]),
  product:new FormGroup({
    pid:new FormControl('',[Validators.required]),
    pname:new FormControl('',[Validators.required]),
    pquantity:new FormControl('',[Validators.required]),
    pprice: new FormControl('',[Validators.required])
  })
    })
  }
 

get e(){
  return this.customer.controls
}
withOldProduct(){
 this. newproduct=false
}
selectproduct(){

this.com.singleProduct(this.oldcustomer.get("product")?.get("pid")?.value).subscribe((data:any)=>{
  this.oldcustomer.get('product')?.patchValue(data)
})
}
newproducts(){
  this. newproduct=true
}



onSubmit(){
  this.com.saveCustomer(this.customer.value).pipe(catchError(this.handleError)).subscribe(response => {
    console.log(response,"Registration mananger");
    alert(response) ;
    window.location.reload();
  })


}
oldSubmit(){
  this.com.newCustomerOldProduct(this.oldcustomer.value).pipe(catchError(this.handleError)).subscribe(response => {
    console.log(response,"Registration mananger");
    alert(response) ;
    window.location.reload();
  })
  console.log(this.oldcustomer.value);
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