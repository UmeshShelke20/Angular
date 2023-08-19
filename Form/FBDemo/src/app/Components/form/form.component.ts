import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Student } from 'src/app/Class/student';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  constructor(private fb:FormBuilder,public cs:CommonService){}
loginform:FormGroup;
listview=false;
addstudent=false;
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

alertdelete(){
  this.alertdel=true;
  this.alertf=false
}
alertadd(){
  this.alertdel=false;
  this.alertf=true;
}
addStudent(){
  this.addstudent=true;
  this.listview=false;
  
}
getStudent()
{

  this.cs.getdata().subscribe((data=>{
    this.cs.stu=Object.assign(data);
    console.log(this.loginform);
    
  }))
  this.listview=true;
  this.addstudent=false;
  this.deletestudent=false;
  this.alertf=false;
  this.alertdel=false;
}
deleteStu(s:Student){
this.cs.singleDelete(s).subscribe({});
this.deletestudent=false;
this.cs.getdata().subscribe((data=>{
  this.cs.stu=Object.assign(data);
  console.log(this.loginform);
  
}))
this.listview=true;
this.addstudent=false;
this.deletestudent=false;
this.alertdelete();
}
deleteStudent(){
this.getStudent();
this.deletestudent=true;
}
resetForm(){
this.loginform.reset
}
saveForm(){
console.log(this.loginform.value);
this.cs.stu=this.loginform.value;
console.log(this.cs.submitData());
this.getStudent();
this.alertadd();

}
}

