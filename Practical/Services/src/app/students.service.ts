import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor() { }
  public data=[{"Rollno":1,"Name":"Umesh Shelke","Marks":50},
  {"Rollno":2,"Name":"Sunanda Shelke","Marks":50},
  {"Rollno":3,"Name":"Ganesh Shelke","Marks":50}]
  public change=false;
public changedata(){
  this.change=true;
  return this.change;
}
}
