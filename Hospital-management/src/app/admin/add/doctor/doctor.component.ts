import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit{
  @Output() newDoctor= new EventEmitter();
  constructor (public fb:FormBuilder){}
  doctorDetails:any;
  ngOnInit(): void {
    this.doctorDetails=new FormGroup({
      "dname":new FormControl('',[Validators.required]),
      "ddegree":new FormControl('',[Validators.required]),
      "dmobno":new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
      "daddress":new FormControl('',[Validators.required])
    });
  }
  submitted=false;
  onSubmit(){
    console.log("VALIDITY ::"+this.doctorDetails.valid);
    this.submitted = true;
      if (this.doctorDetails.valid) {
        alert('Form Submitted succesfully!!!\n Check the values in browser console.');
         this.newDoctor.emit(this.doctorDetails.value);
        this.doctorDetails.reset();
      }
      else{
        alert('Some things went wrong!!!\n Check the Enter values.');
      }
  }
get fun(){
  return this.doctorDetails.controls;
}

}
