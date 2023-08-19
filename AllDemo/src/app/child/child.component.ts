import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  /*event binding Binding*/
  onSave($event){    
    console.log("Save button is clicked!", $event); } 
/*Interpolation Binding*/
  title="ChildComponent"
   /*Proprty Binding*/
  imageurl="../assets/image/a.jpg"
 
  @Input() sname : string;
status: string ="Hi Umesh";
studentDetail(){
  return 'hello'
}
}
