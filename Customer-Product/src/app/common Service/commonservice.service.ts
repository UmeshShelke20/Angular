import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../model/customer';
import { Product } from '../model/product';
@Injectable({
  providedIn: 'root'
})
export class CommonserviceService {
public customer:Customer[]=[]
  constructor( private http :HttpClient) { }
 save:string="http://localhost:8081/Product/saveCustpmer";
 view:string="http://localhost:8081/Product/getcustomer";
update:string="http://localhost:8081/Product/updateCustomer";
getsingle:string="http://localhost:8081/Product/singleCustomer/";
delCustomer:string="http://localhost:8081/Product/deleteCustomer/";
getproduct:string="http://localhost:8081/Product/getproduct";
url:string="http://localhost:8081/Product/";
saveCustomer(cus:Customer){
  return this.http.post(this.save,cus,{responseType:'text' as 'json'})
}

getallCustomer(){
  return this.http.get(this.view)
}
updateCustomer(cus:Customer){
  return this.http.put(this.update,cus,{responseType:'text' as 'json'})
}
getSingleCustomer(n:number){
return this.http.get(this.getsingle+n)
}

deleteCustomer(n:number){
  return this.http.delete(this.delCustomer+n,{responseType:'text' as 'json'})
}
getproductList(){
return this.http.get(this.getproduct)
}
updateProductList(stu:Product[]){
  return this.http.put(this.url+"updateProductList",stu,{responseType:'text' as 'json'})
}

deleteProduct(n:number){
return this.http.delete(this.url+"deleteProduct/"+n,{responseType:'text' as 'json'})
}
singleProduct(n:number){
  return this.http.get(this.url+"singleProduct/"+n)
}
updateProduct(p:Product){
  return this.http.put(this.url+"updateProduct",p,{responseType:'text' as 'json'})
}

saveProduct(p:Product){
return this.http.post(this.url+"saveProduct",p,{responseType:'text' as 'json'})
}
newCustomerOldProduct(c:Customer){
  return this.http.post(this.url+"newCustomerOldProduct",c,{responseType:'text' as 'json'})
}
}
