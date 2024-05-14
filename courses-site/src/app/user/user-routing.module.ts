import { NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {Route, RouterModule } from '@angular/router';
import { LogOutComponent } from './log-out/log-out.component';

const APP_ROUTES:Route[]=[
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"logout",component:LogOutComponent}
]

@NgModule({
  
  imports: [RouterModule.forChild(APP_ROUTES)],
  exports:[RouterModule]
})
export class UserRoutingModule { 


}
