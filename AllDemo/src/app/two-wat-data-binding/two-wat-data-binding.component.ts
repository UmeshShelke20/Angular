import { Component } from '@angular/core';

@Component({
  selector: 'app-two-wat-data-binding',
  templateUrl: './two-wat-data-binding.component.html',
  styleUrls: ['./two-wat-data-binding.component.css']
})
export class TwoWatDataBindingComponent {
  UserName: string="Umesh Shelke";
  Password: string="umesh12";
  mobileno: number;
  n:number=0;
  getdata(){
    console.log(this.UserName);
    console.log(this.Password);
    console.log(this.mobileno);
    this.n=1;
  }

}
