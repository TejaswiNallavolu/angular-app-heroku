import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm !: FormGroup;
  constructor(private formbBuilder : FormBuilder, private http:HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.loginForm=this.formbBuilder.group({
      username : [''],
      password : ['']
    });
  }
  login(){
    this.http.get<any>('http://www.classreminder-1a.somee.com/api/login/allUser')
    .subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.username === this.loginForm.value.username && a.password === this.loginForm.value.password;
      });
      if(user){
        alert("Login Success");
        this.loginForm.reset();
        this.router.navigate(['/list']);
      }else{
        alert("Login Failed");
      }
    }, err=>{
      alert("Login Failed");
    });
  }

}
