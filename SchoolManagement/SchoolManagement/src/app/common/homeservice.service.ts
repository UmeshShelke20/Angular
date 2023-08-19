import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Student } from '../model/student';
import { Observable, catchError, throwError } from 'rxjs';
import { SchoolClass } from '../model/school-class';
@Injectable({
  providedIn: 'root'
})
export class HomeserviceService  {

  constructor(private http:HttpClient) { }

  public stu: Student = new Student;
  
  url:string="http://localhost:8081/school/"

  saveClass(stu:SchoolClass){
   return this.http.post(this.url+"save",stu,{responseType:'text' as 'json'})
  }

  savewithOldStudents(stu:SchoolClass){
    return this.http.post(this.url+"saveClasswithOldStudents",stu,{responseType:'text' as 'json'})
   }
  updateall(stu:Student){
    return this.http.put(this.url+"update",stu,{responseType:'text' as 'json'})
  }
getclassById(n:number){
  return this.http.get(this.url+"getbyid/"+n);
}
addnewStudentinOldClass(s:Student,n:number){
return this.http.put(this.url+"addstudent/"+n,s,{responseType:'text' as 'json'});
}
  getallClass(){
    return this.http.get<Observable<SchoolClass>>(this.url+"getallClass")
  }
  getallStudent(){
    return this.http.get<Observable<Student>>(this.url+"getallStudent")
  }


  detetStu(s:Student){
    return this.http.delete(this.url+"delete/"+s.id,{responseType:'text' as 'json'})
  }

}

