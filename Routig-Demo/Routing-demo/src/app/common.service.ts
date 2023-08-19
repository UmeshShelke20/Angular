import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
url:string="http://localhost:3000/Employee"
data={
  "id":0,
    "ename":"",
    "eage":0,
    "emobile":0,
    "esalary":0,
    "edob":"",
    "ebloodgroup":"",
    "ereleno":0,
}
  constructor(public http: HttpClient) {}
getData(){
  return this.http.get(this.url);
}
addData(n:Employee){
  return this.http.post(this.url+"/"+n,n);
}
updateData(n:Employee){
  return this.http.put(this.url+"/"+n,n);
}
deteData(n:Employee){
  return this.http.delete(this.url+"/"+n);
}
}
