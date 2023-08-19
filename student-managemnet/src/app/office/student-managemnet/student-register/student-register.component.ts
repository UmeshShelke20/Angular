import { Component } from '@angular/core';
import { Student } from 'src/app/model/student';
import { StudentService } from 'src/app/shared/student.service';

@Component({
  selector: 'app-student-register',
  templateUrl: './student-register.component.html',
  styleUrls: ['./student-register.component.css']
})
export class StudentRegisterComponent {
constructor( public ss: StudentService){

}
public slist={};
public n:number=0;
submitData(s:Student){
  console.log("student register",this.ss);
  if(s.id>0){
this.ss.update(s).subscribe(()=>{});
}
else{
  this.ss.saveData(s).subscribe(()=>{});
}
window.location.reload();
}
searchId(){
  this.ss.getById(this.n).subscribe(
    (data:Student)=>{
      console.log(data+"Hi");
      this.ss.stu=Object.assign(data,{})
      //this.slist=Object.assign(data,{})
    }
  );
}
}

