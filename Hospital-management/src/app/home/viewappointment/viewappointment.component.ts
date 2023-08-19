import { Component, Input } from '@angular/core';
import { Patient } from 'src/app/apointment/patient';

@Component({
  selector: 'app-viewappointment',
  templateUrl: './viewappointment.component.html',
  styleUrls: ['./viewappointment.component.css']
})
export class ViewappointmentComponent {
@Input() newpatients :Patient[]=[];

}
