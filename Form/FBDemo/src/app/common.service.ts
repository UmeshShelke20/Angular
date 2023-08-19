import { Injectable } from '@angular/core';
import { Student } from './Class/student';
import { Address } from './Class/address';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  
stu:Student={
  'id':0,
'sname':'',
'rollno':0,
'address':{
  'town':'',
  'taluka':'',
  'distric':'',
  'state':'',
  'country':'',
  'pincode':''
}
}
  constructor(public http:HttpClient) { }
  url:string="http://localhost:3000/Student";
  getdata(){
    return this.http.get(this.url);
  }
  singleDelete(s:Student){
    return this.http.delete(this.url+"/"+s.id);
  }
submitData(){
 return this.http.post(this.url,this.stu).subscribe({});
}
update(s:Student){
  return this.http.put(this.url,s);
 }

}

