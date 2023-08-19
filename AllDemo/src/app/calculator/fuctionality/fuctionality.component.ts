import { Component } from '@angular/core';

@Component({
  selector: 'app-fuctionality',
  templateUrl: './fuctionality.component.html',
  styleUrls: ['./fuctionality.component.css']
})
export class FuctionalityComponent {
  num1:number;
  num2:number;
  Ans:number;
add(){
  this.Ans=this.num1+this.num2;
  return this.Ans;
}
clear(){
  window.location.reload()
}
sub(){
  this.Ans=this.num1-this.num2;
  return this.Ans;
  }
  mul(){
    this.Ans=this.num1*this.num2;
    return this.Ans;
    }
    div(){
      this.Ans=this.num1/this.num2;
      return this.Ans;
      }
}
