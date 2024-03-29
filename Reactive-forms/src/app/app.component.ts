import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Reactive-forms';

  registrationform= new FormGroup({
    userName:new FormControl('Umesh'),
    password: new FormControl(''),
    confirmpassword: new FormControl(''),
    address: new FormGroup({
      city:new FormControl(''),
      state:new FormControl(''),
      pincode:new FormControl(''),
    }),
  });

}
