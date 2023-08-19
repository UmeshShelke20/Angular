import { Component } from '@angular/core';
import { CommonService } from '../common.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent {
constructor(public cs:CommonService){}
Employeedata:Employee[]=[]
getAll(){
this.cs.getData().subscribe((data:Employee));
}
}
