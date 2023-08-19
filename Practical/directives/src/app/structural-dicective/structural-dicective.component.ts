import { Component } from '@angular/core';
@Component({
  selector: 'app-structural-dicective',
  templateUrl: './structural-dicective.component.html',
  styleUrls: ['./structural-dicective.component.css']
})
export class StructuralDicectiveComponent {
[x: string]: any;
names:number[]=[1,2,3,4,5];
month:number[]=[];
// color ='yellow';
color = '';
public clist=[{"Id":1,"Name":"A","Country":"INDIA"},{"Id":2,"Name":"B","Country":"USA"},
{"Id":3,"Name":"C","Country":"CHINA"},{"Id":4,"Name":"D","Country":"PARIS"}];
public choice:string='';
public getcolor(){
  return {'color':'skyblue'}
}
}
