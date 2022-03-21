import { BrowserModule } from '@angular/platform-browser';
 import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
//import { ModalModule } from 'ngx-bootstrap/Modal';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HeaderComponent } from './user/header/header.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { NotificationComponent } from './user/notification/notification.component';
import { FooterComponent } from './user/footer/footer.component';
import { RegisterComponent } from './register/register.component';
import { ListComponent } from './list/list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ClassListComponent } from './class-list/class-list.component';
import { HomeComponent } from './home/home.component';
import { AuthService } from '../app/Shared/auth.service'
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HeaderComponent,
    LoginComponent,
    NotificationComponent,
    FooterComponent,
    RegisterComponent,
    ListComponent,
    ClassListComponent,
    HomeComponent
 
  ],
  providers: [ AuthService ],
  imports: [
    BrowserModule,
    // ModalModule.forRoot(),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'home', redirectTo: '', pathMatch: 'full'},

      {path: 'login', component: LoginComponent},

      {path: 'register', component: RegisterComponent},
      {path: 'list', component: ListComponent},
      {path: 'class-list', component: ClassListComponent},
      {path: '', component: UserComponent}
/*
*/
    ]),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
