import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent {
  slist : string[]=[];
  constructor(private details:EmployeeService){

  }
  getdetails(){
   this.slist =this.details.empdetails();
   console.log(this.slist);
  }
  update(sn:string ){
console.log("update",sn);
this.details.updateEmployee(sn)
  }
}
