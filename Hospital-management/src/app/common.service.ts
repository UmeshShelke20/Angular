import { Injectable } from '@angular/core';
import { User } from './user/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Patient } from './apointment/patient';
import { Doctor } from './apointment/doctor';
@Injectable({
  providedIn: 'root'
})
export class CommonService {
  url:string="http://localhost:3000/";
  constructor(public http:HttpClient) { }
getuser():Observable <User[]>{
return this.http.get<User[]>(this.url+"User");
}
public apointment(p:Patient){
  return this.http.post(this.url+"Patient",p)
}
public viewapointment(){
  return this.http.get(this.url+"Patient");
}
public addDoctor(d:Doctor){
  console.log(d.dname,"at service");
return this.http.post(this.url+"Doctor",d)
}

public getDoctor(){
  return this.http.get(this.url+"Doctor");;
}
acceptPatient(patient:Patient){
return patient;
}
RejectPatient(patient:Patient){
  return this.http.delete(this.url+"Patient"+patient.id);
  }
}
