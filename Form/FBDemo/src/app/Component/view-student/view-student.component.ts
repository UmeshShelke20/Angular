import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Student } from 'src/app/Class/student';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class ViewStudentComponent{
  constructor(private fb:FormBuilder,public cs:CommonService){}
slist:Student[];

getStudent()
{
  this.cs.getdata().subscribe((data=>{
    this.slist=Object.assign(data);
    
  }))
}


}
