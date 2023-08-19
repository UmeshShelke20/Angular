import { Component } from '@angular/core';
import { Doctor } from 'src/app/apointment/doctor';
import { Patient } from 'src/app/apointment/patient';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-patientmanager',
  templateUrl: './patientmanager.component.html',
  styleUrls: ['./patientmanager.component.css']
})
export class PatientmanagerComponent {
  constructor(private com:CommonService){}
  doctor:Doctor={
    id:-1,
    dname: '',
    ddegree: '',
    dmobno: 0,
    daddress: ''
  }
  public data:Patient={
    id:-1,
    name: '',
    city: '',
    state: '',
    date: '',
    time: '',
    status: '',
    symptom: '',
    precautions: '',
    specialist:this.doctor
  }

  newpatient(p:Patient){
    this.data=p;
this.com.apointment(this.data).subscribe();
  }
}
