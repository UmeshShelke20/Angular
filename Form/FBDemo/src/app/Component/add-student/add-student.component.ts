import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})

export class AddStudentComponent {

  constructor(private fb:FormBuilder,public cs:CommonService){}
loginform:FormGroup;
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
resetForm(){
this.loginform.reset
}
saveForm(){
console.log(this.loginform.value);
this.cs.stu=this.loginform.value;
console.log(this.cs.submitData());
}
}
