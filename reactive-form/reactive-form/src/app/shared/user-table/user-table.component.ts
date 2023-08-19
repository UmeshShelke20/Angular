import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserData } from '../common.service';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent {
@Input() userData:UserData[]=[];
@Output() deleteUser=new EventEmitter();
@Output() editUser= new EventEmitter();

public onDeleteUser(nu:number){
this.deleteUser.emit(nu);
}

public editUserData(user:UserData){
  this.editUser.emit(user);
}
}
