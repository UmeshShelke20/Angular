import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/apointment/patient';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-patientview',
  templateUrl: './patientview.component.html',
  styleUrls: ['./patientview.component.css']
})
export class PatientviewComponent implements  OnInit{
constructor (private com:CommonService){}
  ngOnInit(): void {
    this.getPatients();
  }
patients :Patient[]=[];

getPatients(){
  this.com.viewapointment().subscribe((data:any)=>{
    this.patients=data;
  })
}

}
