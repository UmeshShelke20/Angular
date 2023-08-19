import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
employees: string []=[
  "Umesh",
  "Ram",
  "Seeta",
  "Dattaji"
]
  constructor( ) {} 
  upname:string=""
  employeelist(sn:string){
    console.log(this.employees);
    this.employees.push(sn);
    console.log(this.employees);
  }
  empdetails(){
    return this.employees;
  }
  updateEmployee(emname:string){

   /*console.log(emname ,"service");
     this.upname=emname;*/
  }
}
