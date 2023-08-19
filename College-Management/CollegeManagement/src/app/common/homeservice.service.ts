import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Student } from '../model/student';
import { catchError, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HomeserviceService  {

  constructor(private http:HttpClient) { }

  public stu: Student = new Student; 
  url:string="http://localhost:8081/college/"

  saveStudentData(stu:Student){
   return this.http.post(this.url+"save",stu,{responseType:'text' as 'json'})
  }
  updateall(stu:Student){
    return this.http.put(this.url+"update",stu,{responseType:'text' as 'json'})
  }
  getallStudent(){
    return this.http.get(this.url+"getallStudent")
  }

  detetStu(s:Student){
    return this.http.delete(this.url+"delete/"+s.id,{responseType:'text' as 'json'})
  }

}

