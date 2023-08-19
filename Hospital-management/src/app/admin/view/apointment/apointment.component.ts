import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Patient } from 'src/app/apointment/patient';

@Component({
  selector: 'app-apointment',
  templateUrl: './apointment.component.html',
  styleUrls: ['./apointment.component.css']
})
export class ApointmentComponent {
  @Input() newpatients :Patient[]=[];
  @Output() upadate = new EventEmitter();
  @Output() delete = new EventEmitter();
  DeleteMember(p:Patient){
    this.delete.emit(p);
    console.log(p,"at select ");
     
  }
  updateMamber(p:Patient){
    console.log(p,"at select");
    
    this.upadate.emit(p);
  
  }
}
