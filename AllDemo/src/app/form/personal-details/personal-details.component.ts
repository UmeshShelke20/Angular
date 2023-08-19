import { Component } from '@angular/core';
import { EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent {
Name:string;
Email:EmailValidator;
MobileNo:number;
AdharNo:number;
Pan:number;
n:number=0;
page:number=1;
/*Adress Details */
CityName :string;
Taluka:string;
District:string;
State:string;
Country:string
PinCode:string

/*<!--Educational Details--> */
CollegeName:string;
Degree:string;
Branch:string;
PassingYear:string="dd-MM-yyyy";
SGPA:string;
public nextpage(){
this.page ++; 
}
public previouspage(){
  this.page --;
  }
public submit(){
  this.page=4;
  this.submit;

}}
