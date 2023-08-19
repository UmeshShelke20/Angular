import { Injectable, OnInit } from '@angular/core';
import { Student } from '../model/student';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService implements OnInit{
  url : string = "http://localhost:8081/Student/"; 
  constructor( private http: HttpClient){ }
  ngOnInit(): void {
this.getAllData();

  }
  
stu : Student={
        id :0,
   			name : '',
   			mobile : 0,
  			dept :''
}
saveData(s:Student){
console.log("saveData",s);
return this.http.post(this.url+"save", s);

}
 public getAllData(){
 return this.http.get(this.url);
 
 }
update(s:Student){
  return this.http.put(this.url+"update"+"/"+s.id,s);
}
delete(s:Student){
  return this.http.delete(this.url+"delete"+"/"+s.id);
}
getById(id:number):Observable<Student>{
  return this.http.get<Student>(this.url+"getbyid"+"/"+id);
}
}