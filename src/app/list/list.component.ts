import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  allClassList :any;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.getAllList();
  }

  getAllList(){
    this.http.get<any>('http://www.classreminder-1a.somee.com/api/login/getAllList')
    .subscribe(res=>{
      console.log(res);
      this.allClassList=res;
    }, err=>{
      alert('Error');
    })
  }

}
