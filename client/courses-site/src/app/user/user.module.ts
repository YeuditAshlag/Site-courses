import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { UserRoutingModule } from "./user-routing.module";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { UserService } from "./user.service";
import { LogOutComponent } from "./log-out/log-out.component";
import { HeaderComponent } from "../header/header.component";



@NgModule({
    declarations: [LoginComponent, LogOutComponent, RegisterComponent],
    providers: [UserService],
    exports: [LoginComponent],
    imports: [FormsModule, ReactiveFormsModule, HttpClientModule, CommonModule, UserRoutingModule, MatFormFieldModule, MatIconModule, MatInputModule, HeaderComponent]
})
export class UserModule { }
