import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormGroup, Validators,FormControl } from '@angular/forms';
import { UserData } from '../common.service';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit ,OnChanges{
@Output() editDataevent = new EventEmitter();
@Output() userDataevent=new EventEmitter();
@Input() editUserData:UserData={
  id: 0,
  name: '',
  mob: '',
  email: '',
  address: ''
}
  @Input() isEditMode=false;
  public userForm!: FormGroup;
  ngOnInit(): void {
    this.userForm=new FormGroup({
name:new FormControl('',[Validators.required]),
address:new FormControl('',[Validators.required]),
mob:new FormControl('',[Validators.required]),
email:new FormControl('',[Validators.required,Validators.email]),
    })
  }
get f(){
  return this.userForm.controls
}  
onSubmit(){
  if (this.userForm.valid) {
    this.userDataevent.emit(this.userForm.value);
    this.userForm.reset();
  } else {
    this.f['name'].markAsTouched();
    this.f['address'].markAsTouched();
    this.f['mob'].markAsTouched();
    this.f['email'].markAsTouched();
  }
}

ngOnChanges(changes: SimpleChanges): void {
  if (changes && changes['editUserData'] && !changes['editUserData']['firstChange']) {
    this.f['name'].setValue(this.editUserData.name)
    this.f['address'].setValue(this.editUserData.address)
    this.f['mob'].setValue(this.editUserData.mob)
    this.f['email'].setValue(this.editUserData.email)
  }
}
resetForm() {
  this.userForm.reset();
  this.isEditMode = false;
}
public onUpdateuser() {
  const data = {
    id:this.editUserData.id,
    payload: this.userForm.value
  }
  this.editDataevent.emit(data);
  this.userForm.reset();
}
}
