import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap';
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


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HeaderComponent,
    LoginComponent,
    NotificationComponent,
    FooterComponent,
    RegisterComponent
 
  ],
  imports: [
    BrowserModule,
    ModalModule.forRoot(),
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent},
      {path: '', component: UserComponent}
/*
*/
    ]),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
