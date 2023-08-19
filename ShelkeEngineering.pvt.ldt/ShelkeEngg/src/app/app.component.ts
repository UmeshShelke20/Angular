import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ShelkeEngg';
  status : String ='home';
  home():void{
    this.status='home'
  }
  Aboutus():void{
    this.status='Aboutus'
  }
  faq():void{
    this.status='faq'
  }
  Job():void{
    this.status='Job'
  }
  inquiry():void{
    this.status='inquiry'
  }
  login():void{
    this.status='login'
  }
}
