import { Component} from '@angular/core';
import { CommonService } from '../common.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-human-resource',
  templateUrl: './human-resource.component.html',
  styleUrls: ['./human-resource.component.css']
})

export class HumanResourceComponent  {
constructor(public hr:CommonService){

}
public allvar(){
  this.deleteempview=false;
this.empupdate=false
this.update=false;
this.addemp=false;
this.viewemp=false;
this.deleteemp=false;
this.hrid1=0;
this.id=0;
this.hrlogin=false;
this.emlogin=false;
this.home=!this.home;
this.hraddmin=false;
this.emid=false;
// this.adminchoice1=false;
// this.adminchoice2=false;
this.admingate=false;
}
public deleteempview=false;
public empupdate=false
public update=false;
public addemp=false;
public viewemp=false;
public deleteemp=false;

public messege:string='';
public elist:Employee[]=[]
public hrid1:number=0;
public password:string='';
public hrid:number=12345678;
public hrpass:string="@umesh";
public id:number=0;
public hrlogin=false;
public emlogin=false;
public home:boolean=false;
public hraddmin=false;
public emid=false;
// public adminchoice1=false;
// public adminchoice2=false;
public admingate=false;
// adminChoice(){
//   this.adminchoice1=false;
// this.adminchoice2=false;
// }
emloyeeback(){
  // this.allvar();
  this.emid=false;
  this.emlogin=true;
}
homeReturn(){
  //this.allvar();
  this.admingate=false;
  this.home=!this.home;
}
admincall(){
  //this.allvar();
    this.hr.getAllEmp().subscribe((list)=>{
      this.elist=Object.assign(list);
    })
    this.hrdpt();}
adminhome(){
  // this.allvar();
      this.admingate=true;
      this.viewemp=false;
      this.addemp=false;
      this.update=false;
this.hrlogin=false;
this.emid=false;
    }
admincheck(){
  //this.allvar();
  if(this.hrid==this.hrid1){
if(this.password==this.hrpass){ 
  //this.admincall();
this.admingate=true;
this.hrlogin=false;
}
else{
this.messege="Wrong Password";
}
  }
  else{
    this.messege="Wrong ID"
  }
}
uadateEmp(){
  // this.allvar();
  this.admincall();
  this.viewemp=true;
  this.update=true;
  this.addemp=false;
  this.admingate=false;
}
newEmp(){
  // this.addEmployee(this.hr.emplo);
  // this.allvar();
  this.addemp=true;
  this.viewemp=false;
  this.update=false;
  this.admingate=false;
  
}
viewallEmp(){
  // this.allvar();
  this.admincall();
  this.viewemp=true;
  this.admingate=false;
}
deleteEmp(){
 // this.allvar();
  this.viewemp=true;
this.deleteemp=true;
this.admincall();
  
  this.admingate=false;
}
deletStart(n:Employee){
  //this.allvar();
  this.hr.emplo=Object.assign(n);
  this.viewemp=false;
  this.admingate=false;
  this.deleteempview=true;
  this.deleteemp=false;
}
deleteempcomplete(em:Employee){
  //this.allvar();
this.hr.eleteemployee(em).subscribe({});
this.deleteempview=false;
this.adminhome();
}
  hrLogin(){
    // this.allvar();
    this.hrlogin=true;
    this.emlogin=false;
    this.home=!this.home;
    this.emid=false;
  }
  emLogin(){
    //this.allvar();
    this.emlogin=true;
    this.hrlogin=false;
    this.home=!this.home;
  }
  hrdpt(){
    // this.hraddmin=false
    this.emid=false;
  }
  empId(){
    
    this.emid=true;
    // this.hraddmin=false;
  }

eminfo(){
this.hr.info(this.id).subscribe((list1)=>{
  this.hr.emplo=Object.assign(list1)
  console.log(list1);
});
this.empId();
}
empUpdate(em:Employee){

this.hr.update(em).subscribe((list1)=>{
  this.hr.emplo=Object.assign(list1)
  console.log(list1);

});

}
updatestart(em:Employee){
this.viewemp=false;
this.empupdate=true;
this.hr.emplo=Object.assign(em);
}
empUpdatecomplete(em:Employee){
this.viewemp=false;
this.empupdate=false;
this.empUpdate(em);
this.adminhome();
}
addEmployee(em:Employee){
  console.log(em);
  this.hr.addNewEmployee(em).subscribe({});
  this.addemp=false;
  this.adminhome();
}
}
