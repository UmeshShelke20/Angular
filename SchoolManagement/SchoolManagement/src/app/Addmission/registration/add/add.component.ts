import { Component, EventEmitter, Input,Output, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators, FormBuilder } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { Student } from 'src/app/model/student';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  
@Output() saveClass= new EventEmitter()
// @Input() isEditMode=false;
Studentform:any
constructor(){
  this.Studentform=new FormGroup({
    id: new FormControl('',[Validators.required]),
    classname: new FormControl("",[Validators.required]),
    students: new FormArray([
      new FormGroup ({id: new FormControl('',[Validators.required]),
      name: new FormControl('',[Validators.required]),
      rollno: new FormControl('',[Validators.required]),
      address: new FormGroup({
        id: new FormControl('',[Validators.required]),
        city: new FormControl('',[Validators.required]),
        taluka: new FormControl('',[Validators.required]),
        district: new FormControl('',[Validators.required]),
        state: new FormControl('',[Validators.required]),
        pincode: new FormControl('',[Validators.required]),
      })})
    ])
  })
}
 
get students() {
  return <FormArray>this.Studentform.controls['students'] as FormArray;
}
addStudent(){
  const students=new FormGroup({
    id: new FormControl('',[Validators.required]),
    name: new FormControl('',[Validators.required]),
    rollno: new FormControl('',[Validators.required]),
    address: new FormGroup({
      id: new FormControl('',[Validators.required]),
      city: new FormControl('',[Validators.required]),
      taluka: new FormControl('',[Validators.required]),
      district: new FormControl('',[Validators.required]),
      state: new FormControl('',[Validators.required]),
      pincode: new FormControl('',[Validators.required]),
    })
  });
this.students.push(students)
}
get e(){
  return this.Studentform.controls
}
 
  onSubmit(){
    console.log(this.Studentform.value,"Outside");
this.saveClass.emit(this.Studentform.value)
  }
}
