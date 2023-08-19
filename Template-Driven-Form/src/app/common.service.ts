import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { User } from './Class/user';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CommonService {
url='http://localhost:3000/User';
// url='http://localhost:3000/enroll';
  constructor( private http:HttpClient) { }
  enroll(user:User){
return this.http.post(this.url,user).pipe(catchError(this.errorhandler));
  }
  errorhandler(error:HttpErrorResponse){
return throwError(error)
  }
}
