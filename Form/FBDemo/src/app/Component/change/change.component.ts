import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-change',
  templateUrl: './change.component.html',
  styleUrls: ['./change.component.css']
})
export class ChangeComponent implements OnInit {
  updateform:FormGroup;
  constructor(private fb:FormBuilder , private lo:Location, private cs:CommonService){
  }
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

    this.updateForm();
  }
  
  updateForm(){
    let st:any=this.lo.getState();
    console.log(st);
    this.updateform.get('id').setValue(st.id);
    this.updateform.get('sname').setValue(st.sname);
    this.updateform.get('rollno').setValue(st.rollno);
    //this.updateform.get('address').setValue(st.address);
    this.updateform.get('address.town').setValue(st.address.town);
    this.updateform.get('address.taluka').setValue(st.address.taluka);
    this.updateform.get('address.distric').setValue(st.address.distric);
    this.updateform.get('address.state').setValue(st.address.state);
    this.updateform.get('address.country').setValue(st.address.country);
    this.updateform.get('address.pincode').setValue(st.address.pincode);
  console.log(this.updateform.value);
 
   }
updatesubmit(){
this.cs.update(this.updateform.value).subscribe({});
}

}
