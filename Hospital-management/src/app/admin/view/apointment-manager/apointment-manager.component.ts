import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Doctor } from 'src/app/apointment/doctor';
import { Patient } from 'src/app/apointment/patient';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-apointment-manager',
  templateUrl: './apointment-manager.component.html',
  styleUrls: ['./apointment-manager.component.css']
})
export class ApointmentManagerComponent implements  OnInit{
  
 

  constructor (private com:CommonService){}
    ngOnInit(): void {
    this.getPatients();
    this.selectDelete(this.patients1);
    this.selectUpdate(this.patient2);
    }
    patient2:Patient={
      id: 0,
      name: '',
      city: '',
      state: '',
      date: '',
      time: '',
      status: '',
      symptom: '',
      precautions: '',
      specialist: new Doctor
    }
    patients1 :Patient={
      id: 0,
      name: '',
      city: '',
      state: '',
      date: '',
      time: '',
      status: '',
      symptom: '',
      precautions: '',
      specialist: new Doctor
    };
  
  patients :Patient[]=[];
  selectUpdate(p:Patient){
this.com.acceptPatient(p);

  }

  selectDelete(p:Patient){
    this.com.RejectPatient(p).subscribe();
      }
  
  getPatients(){
    this.com.viewapointment().subscribe((data:any)=>{
      this.patients=data;
    })
  }
  
  }
