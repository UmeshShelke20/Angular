import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Student } from 'src/app/Class/student';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-delete-student',
  templateUrl: './delete-student.component.html',
  styleUrls: ['./delete-student.component.css']
})
export class DeleteStudentComponent{
  constructor(private fb:FormBuilder,public cs:CommonService){}
loginform:FormGroup;
listview=false;

deletestudent=false;
alertf=false;
alertdel=false;

ngOnInit(){
  this.loginform=this.fb.group({
    'id':[],
    'sname':[''],
    'rollno':[''],
    'address':this.fb.group({
      'town':[''],
'taluka':[''],
'distric':[''],
'state':[''],
'country':[''],
'pincode':[]
    })

  });
}
slist:Student[];
alertdelete(){
  this.alertdel=true;
  this.alertf=false
}
getStudent()
{

  this.cs.getdata().subscribe((data=>{
    this.slist=Object.assign(data);
  }))
  this.listview=true;
}
deleteStu(s:Student){
this.cs.singleDelete(s).subscribe({});
this.deletestudent=false;
this.cs.getdata().subscribe((data=>{
  this.slist=Object.assign(data);
  
}))
this.listview=true;
this.alertdelete();
}
deleteStudent(){
this.getStudent();
this.deletestudent=true;
}
resetForm(){
this.loginform.reset
}
}

