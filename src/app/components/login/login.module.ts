import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component'
import { UserService, UserSrv } from './../../services/user-service/user.service'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LoginComponent
  ],
  exports: [
    LoginComponent
  ],
  providers: [
  ]
})
export class LoginModule { }
