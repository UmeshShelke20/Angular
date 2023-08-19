import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'First';
public data1 : number=100;
public data : string="null";
public data2 : boolean= true;
public data3 : string='Umesh';

public add() {
  
}

public sum(name:string) {
  return '@'+name;
}
}
