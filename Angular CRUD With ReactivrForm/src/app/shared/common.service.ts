import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface UserData {
  id?: number;
  name: string;
  mob: string;
  email: string
  address: string;
}

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  constructor(private hppt$: HttpClient) { }

  public saveUserData(reqBody: UserData) {
    return this.hppt$.post('http://localhost:3000/users', reqBody)
  }

  public getUserData(): Observable<UserData[]> {
    return this.hppt$.get<UserData[]>("http://localhost:3000/users");
  }

  public deleteUserData(id: number): Observable<UserData[]> {
    return this.hppt$.delete<UserData[]>(`http://localhost:3000/users/${id}`);3
  }

  public editUserData(id: number, requestBody): Observable<UserData[]> {
    return this.hppt$.put<UserData[]>(`http://localhost:3000/users/${id}`, requestBody);
  }
}
