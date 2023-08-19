import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';
  public name="Umesh";
  public messege ="wellcome to pune";
  public person ={
    "First name":"Umesh",
    "last name":"Shelke"
  }
  public date= new Date();
  public i:number=0;
  public i1:number=0;  
  public sname:string[]=[
    "Ram","Seeta","Geeta"
  ]
  iinitial(){
   return this.i1=this.i; 
  }
}
