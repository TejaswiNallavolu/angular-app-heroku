import { HttpClient } from '@angular/common/http';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../Shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};
  loginForm: FormGroup;
  constructor(private fb : FormBuilder, private http:HttpClient, private route: ActivatedRoute, private router : Router, private authService: AuthService) { }

  ngOnInit(): void {
     this.loginForm=this.fb.group({
      username : [''],
      password : ['']
     });

    this.CreateLoginForm();
  }
  // login(){
  //   this.http.get<any>('http://www.classreminder-1a.somee.com/api/login/allUser')
  //   .subscribe(res=>{
  //     const user = res.find((a:any)=>{
  //       return a.username === this.loginForm.value.username && a.password === this.loginForm.value.password;
  //     });
  //     if(user){
  //       alert("Login Success");
  //       this.loginForm.reset();
  //       this.router.navigate(['/list']);
  //     }else{
  //       alert("Login Failed");
  //     }
  //   }, err=>{
  //     alert("Login Failed");
  //   });
  // }


  CreateLoginForm() {
    console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
    // this.loginForm = this.fb.group({
    //   email: ['', [Validators.required, Validators.email]],
    //   password: ['', [Validators.required]],
    //   rememberMe: [true]
    // });
  }

  login() {
    // if (this.loginForm.valid) {
    //   this.model = Object.assign({}, this.loginForm.value);
    //   this.authService.login(this.model).subscribe(data => {
    //       alert("login success");
    //       this.router.navigate(['/list']);
    //     },
    //     (error) => {
         
    //       console.log(error);
    //     },
    //     () => {
    //       // window.location.href = localStorage.getItem('index');
    //       // window.location.href = '2fa';
    //     }
    //   );
    // } 
  }

}
