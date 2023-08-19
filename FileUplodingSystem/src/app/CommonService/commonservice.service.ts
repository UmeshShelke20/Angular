import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class CommonserviceService {

  constructor(private http:HttpClient ) {
    
   }
url :string="http://localhost:8081/";


   docUpload(a:any):Observable<Document>{
alert("Well-come to angular Service")
return this.http.post<Document>(this.url+"docUpload/",a);

   }

   getData():Observable<any>{
      return this.http.get<Document[]>(this.url+"getall")
   }
}
