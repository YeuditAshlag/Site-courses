import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isShow:boolean=false;
  constructor(private router:Router){}
  
  toHome(){
    this.router.navigate(['/home']);
  }
  toCourses(){
    const u = JSON.parse(localStorage.getItem("user")??'')
    if(u!=null){
      this.router.navigate(['/courses'])
    }
    else {
      Swal.fire({
        title: `Oops... `,
        text: "You are not registered yet, register now",
        icon: "warning"
      }); this.router.navigate(["/user/login"])

    }
  }
  to_logout(){
    this.router.navigate(['user/logout'])
  }
  toAdd(){

    //פהההה יש בעיההההההההההההההההההה!!!!!!!!!!!!!!!!!
     if(localStorage.getItem("IsLecturer")=="true")
    this.router.navigate(['/add'])
  }
  username: string | null = null;
  ngOnInit(): void {
    this.username = localStorage.getItem('user');
    console.log("user ",this.username)
    this.isShow=localStorage.getItem('IsLecturer')=="true"
    console.log( "000000000000000000000000000000000000")
  }

  about_func(){
    this.router.navigate(['about'])
  }

  to_login(){
    this.router.navigate(['user/login'])
  }
}


