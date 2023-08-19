import { Component, OnInit } from '@angular/core';
import { Patient } from '../apointment/patient';
import {  FormGroup,FormControl,Validators, FormBuilder} from '@angular/forms';
import { CommonService } from '../common.service';
import { User } from '../user/user';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public admin:boolean=false;
  user:User={
    id: 0,
    userid: '',
    password: '',
    firstname: '',
    lastname: ''
  }
  constructor(private com:CommonService, public routers:Router){}
  ngOnInit(): void {
    this.loginForm
  }

 public loginForm=new FormGroup({
      userid:new FormControl(''),
      password:new FormControl('')
    });

onSubmit(){
  console.log(this.admin," before wellcome");
  this.com.getuser().subscribe((data:User[])=>{ 
 
  for(let i=0;i<data.length;i++){
    if(this.loginForm.value.password==data[i].password && this.loginForm.value.userid==data[i].userid){
      this.admin=true;
    console.log(this.admin , "inside");
    
      alert('wellocme to admin home!')
      this.routers.navigateByUrl('/Admin/adminhome')
      break;
    }
    else{
      alert('Wong Usser details, please check once!')
    }
  }
this.loginForm.reset();
  });
 
console.log(this.admin,"wellcome after");
  }
}
