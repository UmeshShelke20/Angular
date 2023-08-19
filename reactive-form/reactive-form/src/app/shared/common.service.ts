import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export interface UserData {
  id: number;
  name: string;
  mob: string;
  email: string
  address: string;
}
@Injectable({
  providedIn: 'root'
})
export class CommonService {
url:string='http://localhost:3000/userData'
  constructor(private http$: HttpClient) { }

  saveUserData(userData :UserData){
return this.http$.post(this.url,userData);
  }

  getUserData():Observable<UserData[]>{
    return this.http$.get<UserData[]>(this.url);
  }

  
  public deleteUserData(id: number) {
    return this.http$.delete(this.url+"/"+id);
  }

  public editUserData(id:number,user:UserData): Observable<UserData[]> {
    return this.http$.put<UserData[]>(this.url+"/"+id, user);
  }
}
