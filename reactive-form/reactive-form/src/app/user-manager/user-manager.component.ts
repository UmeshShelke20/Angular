import { Component, OnInit } from '@angular/core';
import { CommonService, UserData } from '../shared/common.service';

@Component({
  selector: 'app-user-manager',
  templateUrl: './user-manager.component.html',
  styleUrls: ['./user-manager.component.css']
})
export class UserManagerComponent implements OnInit{

  userEntries: UserData[] = [];
  public userDataForEdit:UserData={
    id: 0,
    name: '',
    mob: '',
    email: '',
    address: ''
  }
  public isEditMode = false;
  constructor(private commonSer: CommonService) { }
  ngOnInit(): void {
    this.getUserData();
  }


  public userDataFromChild(userData:UserData) {
    console.log('userData from child', userData);
    this.commonSer.saveUserData(userData).subscribe(() => {
      this.getUserData();
    });
  }


  public getUserData() {
    this.commonSer.getUserData().subscribe((res) => {
      this.userEntries = res;
    })
  }

  
  public onClickDeleteUser(id:number) {
    this.commonSer.deleteUserData(id).subscribe(() => {
      this.getUserData();
    })
  }

  public edituserData(user:UserData) {
    this.userDataForEdit = user;
    this.isEditMode = true;
  }
  public updateUserData(userData:any) {
    this.commonSer.editUserData(userData.id, userData.payload).subscribe(() => {
      this.getUserData();
    })
  }
  
}
