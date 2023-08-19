import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {
  constructor(public emplo:EmployeeService){

  }
  //ename:string="";
 getdata(){
  console.log(this.emplo.upname);
  this.emplo.employeelist(this.emplo.upname)
  
 }

}
