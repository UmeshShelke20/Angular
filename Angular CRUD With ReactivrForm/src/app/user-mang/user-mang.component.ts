import { Component, OnInit } from '@angular/core';
import { CommonService } from '../shared/common.service';

@Component({
  selector: 'app-user-mang',
  templateUrl: './user-mang.component.html',
  styleUrls: ['./user-mang.component.scss']
})
export class UserMangComponent implements OnInit {

  constructor(private commonSer: CommonService) { }

  public userEntries = [];

  public userDataForEdit;

  public isEditMode = false;

  ngOnInit(): void {
    this.getUserData();
  }

  public userDataFromChild(userData) {
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

  public onClickDeleteUser(id) {
    this.commonSer.deleteUserData(id).subscribe(() => {
      this.getUserData();
    })
  }

  public edituserData(user) {
    this.userDataForEdit = user;
    this.isEditMode = true;
  }

  public updateUserData(userData) {
    this.commonSer.editUserData(userData.id, userData.payload).subscribe(() => {
      this.getUserData();
    })
  }
}

