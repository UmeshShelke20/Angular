import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/apointment/doctor';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-doctor-manager',
  templateUrl: './doctor-manager.component.html',
  styleUrls: ['./doctor-manager.component.css']
})
export class DoctorManagerComponent implements OnInit{
doctor:Doctor[]=[];
constructor(public con:CommonService){}
  ngOnInit(): void {
    this.getDoctor();
  }
getDoctor(){
  this.con.getDoctor().subscribe((data:any)=>{
    this.doctor=data;
  })
}
}
