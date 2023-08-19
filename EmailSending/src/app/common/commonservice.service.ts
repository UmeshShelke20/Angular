import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs'
import { Email } from '../NewEmail/email';
@Injectable({
  providedIn: 'root'
})
export class CommonserviceService {

  constructor(private http:HttpClient) { }
url:string="http://localhost:8081/API/sentemailWithAttachment"
  send(e:any):Observable<any>{
  return this.http.post<any>(this.url, e,{responseType:'Text' as'json'});
  }
}
