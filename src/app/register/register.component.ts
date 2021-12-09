import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public signupForm !: FormGroup;
  constructor(private formbBuilder : FormBuilder, private http:HttpClient, private router:Router) { }

  ngOnInit() {
    this.signupForm=this.formbBuilder.group({
      username : ['', Validators.required],
      password : ['', Validators.required]
      
    })   
  }


// passwordMatchValidator(g: FormGroup) {
//   return g.get('Password').value === g.get('ConfirmPassword').value ? null : { mismatch: true };
// }

  signUp(){
    this.http.post<any>('http://www.classreminder-1a.somee.com/api/login/register',this.signupForm.value)
    .subscribe(res=>{
      alert('Registered Successfully');
      this.signupForm.reset();
      this.router.navigateByUrl('/login');
    }, err=>{
      alert('Error');
    })
  }

}