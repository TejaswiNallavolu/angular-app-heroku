import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {

  constructor(private http:HttpClient) { }

  classUrl:string = environment.baseUrl + 'api/ClassList/';
  apiUrl:string=environment.apiUrl;

  

  postClassList(data :any){
    return this.http.post<any>(this.classUrl+'saveClassList',data);
  }

  getClassById(id) {
    return this.http.get<any>(this.classUrl + 'getClassById?Id=' + id);
  }

  deleteClassList(id) {
    return this.http.get(this.classUrl + 'deleteClassList?Id=' + id);
  }

  getAllClassList(): Observable<any> {
    return this.http.get<any>(this.classUrl + 'getAllClassList');
  }


  login(model: any) {
    return this.http.post<any>(this.apiUrl + 'Account/Login', model)
    .pipe(
      map((response: any) => {
        console.log(response);
        const user = response;
        localStorage.setItem('token', user.email);
        
      })
    );
  }


  isLoggedIn() {
    const token = localStorage.getItem('token');
    return !!token;
  }

  register(model: any) {
    return this.http.post(this.apiUrl + 'Account/Register', model);
  }

}
