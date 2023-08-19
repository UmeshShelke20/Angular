import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directives';
  public isTitleEnable=true;
  isSpecial=true;
  onclick(){
    this.isTitleEnable=!this.isTitleEnable;
    this.isSpecial=!this.isSpecial;
  }
  
}
