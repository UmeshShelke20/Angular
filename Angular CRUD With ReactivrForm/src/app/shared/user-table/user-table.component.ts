import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent {
  @Input() userData = [];

  @Output() deleteUser = new EventEmitter();
  @Output() editUser = new EventEmitter();

  public onDeleteUser(id) {
    this.deleteUser.emit(id);
  }

  public editUserData(user){
    this.editUser.emit(user);
  }
}
