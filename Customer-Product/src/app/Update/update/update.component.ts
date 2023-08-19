import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { CommonserviceService } from 'src/app/common Service/commonservice.service';
import { Customer } from 'src/app/model/customer';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent   {
id:number=0
customer:FormGroup=new FormGroup({})
cust:Customer={
  cid: 0,
  cname: '',
  caddress: '',
  cemail: '',
  product: {
    pid: 0,
    pname: '',
    pquantity: 0,
    pprice: 0
  }
}
  constructor (private approu:ActivatedRoute,private com:CommonserviceService, private route:Router){
    this.approu.paramMap.subscribe(s=>{
this.id=Number(s.get("id"));
this.getSingle();
    })
    console.log(this.id);
   
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
  })
  }
 
getSingle(){
  this.com.getSingleCustomer(this.id).subscribe(data=>{
    this.cust=Object.assign(data);
    
  })
 
  // console.log(this.cust, "at update");
  
}

onSubmit(){

  // console.log(this.customer.value);
  
  this.com.updateCustomer(this.customer.value).pipe(catchError(this.handleError)).subscribe(response => {
    console.log(response,"Update mananger");
    alert(response) ;
    
  })
this.route.navigateByUrl("/view")
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
