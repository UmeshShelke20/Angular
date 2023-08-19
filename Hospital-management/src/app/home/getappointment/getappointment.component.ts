import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-getappointment',
  templateUrl: './getappointment.component.html',
  styleUrls: ['./getappointment.component.css']
})
export class GetappointmentComponent implements OnInit {
patient:any;
  @Output() public newpatient= new EventEmitter();
  
status:string='Pending';
submitted=false;
ngOnInit(): void {
this.patient=new FormGroup({
name:new FormControl('',[Validators.required]),
city:new FormControl('',[Validators.required]),
state: new FormControl('',[Validators.required]),
date:new FormControl('',[Validators.required]),
time:new FormControl('',[Validators.required]),
status:new  FormControl('PENDING',[Validators.required]),
symptom:new FormControl('',[Validators.required]),
precautions:new FormControl('',[Validators.required]),
specialist:new FormGroup({
  dname: new FormControl('',[Validators.required]),
    ddegree: new FormControl('',[Validators.required]),
    dmobno: new FormControl('',[Validators.required,Validators.minLength(10)]),
    daddress: new FormControl('',[Validators.required])
})
  }) 
}
onSubmit() {
  console.log("VALIDITY ::"+this.patient.valid);
  this.submitted = true;
    if (this.patient.valid) {
      alert('Form Submitted succesfully!!!\n Check the values in browser console.');
       this.newpatient.emit(this.patient.value);
       console.log(this.newpatient.toString+" at getappointment");
      this.patient.reset();
    }
    else{
      alert('Some things went wrong!!!\n Check the Enter values.');
    }
  }
  
  get registerFormControl() {
    return this.patient.controls;
  }
  get specialist() { return this.patient.get('specialist').controls; }


}
