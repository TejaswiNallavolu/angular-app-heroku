import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../Shared/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // public signupForm !: FormGroup;

  model: any = {};
  registerForm: FormGroup;
  constructor(private fb : FormBuilder, private http:HttpClient, private router:Router, private authService: AuthService) { }

  ngOnInit() {
    this.CreateRegisterForm();  
  }


// passwordMatchValidator(g: FormGroup) {
//   return g.get('Password').value === g.get('ConfirmPassword').value ? null : { mismatch: true };
// }

  // signUp(){
  //   this.http.post<any>('http://www.classreminder-1a.somee.com/api/login/register',this.signupForm.value)
  //   .subscribe(res=>{
  //     alert('Registered Successfully');
  //     this.signupForm.reset();
  //     this.router.navigateByUrl('/login');
  //   }, err=>{
  //     alert('Error');
  //   })
  // }

  CreateRegisterForm() {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],

    });
  }

  register() {
    if (this.registerForm.valid) {
      this.model = Object.assign({}, this.registerForm.value);
      
        this.authService.register(this.model).subscribe(
          data => {
            alert("register success");
            this.router.navigate(['/login']);
          },
          (error) => {
            console.log(error);
          }
        );
      }else{
        console.log("invalid");
      }
    }

}