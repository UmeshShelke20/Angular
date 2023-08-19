import { Component } from '@angular/core';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent {
  constructor(public data:StudentsService){

  }
}
