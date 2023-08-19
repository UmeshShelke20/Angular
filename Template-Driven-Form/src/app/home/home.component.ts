import { Component } from '@angular/core';
import { User } from '../Class/user';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
topics = ['Angular', 'React ', 'Vue'];
pattern="^\d{10}$"
userModel=new User('', 'rob@rob', 9098787767, 'default', 'morning', true);
topicHasError=true;
validatetopic(value: string){
  if(value==='default'){
    this.topicHasError=true;
  }
  else{
    this.topicHasError=false;
  }
}
constructor(private cs:CommonService){}
errormsg='';
onSubmit(){
  console.log(this.userModel);
//   this.cs.enroll(this.userModel).subscribe((data)=>{
// console.log(data); },(error)=>{this.errormsg=error.statusText
// }) 
  
}

}
