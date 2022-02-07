import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  classUrl:string = environment.baseUrl + 'api/ClassList/';

  

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

}
