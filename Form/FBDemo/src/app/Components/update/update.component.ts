import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Student } from 'src/app/Class/student';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

constructor(public cs:CommonService,private fb:FormBuilder, private lo:Location){}  
  list=false;
  updateButton=true;
  forma=false;
  slist:Student[];
 updateform:FormGroup;
 ngOnInit(): void {
    this.updateform=this.fb.group({
      'id':[],
      'sname':[''],
      'rollno':[''],
      'address':this.fb.group({
      'town':[''],
      'taluka':[''],
      'distric':[''],
      'state':[''],
      'country':[''],
      'pincode':[]
      })
    });
 }
 selectUpdate(){
  this.cs.getdata().subscribe((stud:Student[])=>{
this.slist=stud

  });
  this.list=!this.list;
  this.updateButton=!this.updateButton;
 }

 resetForm(){
  this.updateform.reset
  }
}

