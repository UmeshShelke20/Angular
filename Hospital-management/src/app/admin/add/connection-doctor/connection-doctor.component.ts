import { Component } from '@angular/core';
import { Doctor } from 'src/app/apointment/doctor';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-connection-doctor',
  templateUrl: './connection-doctor.component.html',
  styleUrls: ['./connection-doctor.component.css']
})
export class ConnectionDoctorComponent {
  doc:Doctor={
    id: 0,
    dname: '',
    ddegree: '',
    dmobno: 0,
    daddress: ''
  }
saveDoctor($event: any) {
  console.log($event);
  
this.doc=$event;
this.con.addDoctor(this.doc).subscribe();
}
  constructor(private con:CommonService){}
}
