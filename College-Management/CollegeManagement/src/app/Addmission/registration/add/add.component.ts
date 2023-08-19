import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
@Input() isEditMode=false;
@Output() saveStudent= new EventEmitter

public Address= new FormGroup({
  id: new FormControl('',[Validators.required]),
  city: new FormControl('',[Validators.required]),
  taluka: new FormControl('',[Validators.required]),
  district: new FormControl('',[Validators.required]),
  state: new FormControl('',[Validators.required]),
  pincode: new FormControl('',[Validators.required]),
})
 public  Student = new FormGroup({
    id: new FormControl('',[Validators.required]),
    name: new FormControl('',[Validators.required]),
    rollno: new FormControl('',[Validators.required]),
    address: this.Address
    
  });
  get f(){
    return this.Student.controls
  } 
  get g(){
    return this.Address.controls
  } 
  onSubmit(){
this.saveStudent.emit(this.Student.value)

  }
}
