import { Component, Input } from '@angular/core';
import { Doctor } from 'src/app/apointment/doctor';

@Component({
  selector: 'app-doctorlist',
  templateUrl: './doctorlist.component.html',
  styleUrls: ['./doctorlist.component.css']
})
export class DoctorlistComponent {
@Input() newDoctor :Doctor[]=[];
}
