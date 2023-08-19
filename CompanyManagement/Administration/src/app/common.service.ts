import { Injectable} from '@angular/core';
import { Employee } from './employee';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class CommonService{

  constructor(public http:HttpClient) { }
  emplo:Employee={
    "id":0,
    "ename":"",
    "eage":0,
    "emobile":0,
    "esalary":0,
    "edob":"",
    "ebloodgroup":"",
    "ereleno":0,
  }

url:string="http://localhost:3000/Employee";

public getAllEmp (){
return this.http.get(this.url);
}

info(n:number): Observable<Employee>{
 
 return this.http.get<Employee>(this.url+"/"+n);
 
  }
  update(em:Employee){
    return this.http.put(this.url+"/"+em.id,em)
  }
  addNewEmployee(em:Employee){
   return this.http.post(this.url,em);
  }
  eleteemployee(em:Employee){
    return this.http.delete(this.url+"/"+em.id)
  }
}
