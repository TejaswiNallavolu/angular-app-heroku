import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allClassList :any;

  baseUrl:string = environment.baseUrl + 'api/login/';

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.getAllList();
  }

  getAllList(){
    this.http.get<any>(this.baseUrl + 'getAllList')
    .subscribe(res=>{
      console.log(res);
      this.allClassList=res;
    }, err=>{
      alert('Error');
    })
  }

}
