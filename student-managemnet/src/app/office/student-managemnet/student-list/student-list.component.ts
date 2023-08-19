import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/model/student';
import { StudentService } from 'src/app/shared/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit{
  constructor( public list:StudentService){

  }

  ngOnInit(): void {
    this.viewData();
  }
public slist:any;
  viewData(){
    console.log("student register",this.list);
    this.list.getAllData().subscribe((data)=>{
      console.log("responce",data);
this.slist=data;
    });
  }

  updatedata(s:Student){
console.log(s);
this.list.stu=Object.assign(s,{});
  }
  deletdata(s:Student){
console.log("delete id",s.id);
this.list.delete(s).subscribe({})
window.location.reload();
  }
}
