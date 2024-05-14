import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router, RouterModule } from '@angular/router';
import { User } from '../user.model';
import { CommonModule } from '@angular/common';
import { LecturerService } from '../lecturer.service';
import { window } from 'rxjs';

@Component({
  selector: 'app-login',
  // standalone: true,
  // imports: [CommonModule,ReactiveFormsModule,RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {//?
   @Input() item = 'name';//?
  public users!: User[]
  public addForm!:FormGroup
   _user:User=new User
  public inValidPassWord!: boolean;
  public UserNotFound!: boolean;
  constructor(private _userService: UserService, private router: Router, private lecturerService:LecturerService ) { }
  ngOnInit(): void {
    // console.log(this.item)
    //throw new Error('Method not implemented.');
    this.addForm = new FormGroup({
      "nameUser": new FormControl('', Validators.required),
      "password": new FormControl('', [Validators.required, Validators.minLength(2)]),
    })
    this._userService.getAllUsers().subscribe(
      {
        next: (res: User[]) => {
          this.users = res;
          console.log("inittttttttttttttttttttt users",this.users)
        },
        error: (err: any) => {
          console.log(err);
        }
      });
      console.log("init users",this.users)
  }

save() {
  let u: User = this.addForm.value
  this.inValidPassWord = false
  this.UserNotFound = false
  console.log('name',u.nameUser)
  console.log('user',u.password)
  console.log("allusers",this.users)

  this.users?.forEach(element => {
    if (element.nameUser == u.nameUser) {
      this.UserNotFound = true

      if (element.password === u.password) {//
        //  this._userService.details = u;//?
        localStorage.setItem("user",element.nameUser?.toString()??"");
        console.log("user i localstorageeeeeeeeeeeeeeeeeeee",localStorage.getItem('user'));
        // if(element.IsLecturer==true)
        // localStorage.setItem("IsLecturer","true");

        console.log("good")
         this.router.navigate(["/courses"])
        return;
      }
      if (element.password != u.password) {
        this.inValidPassWord = true;
        console.log("good")

        return;
      }
    }
  });
  if (this.UserNotFound === false) {
  let name=this.addForm.value.name;
   //name = u.nameUser
  this._userService.userName=name;
    this.router.navigate(['/user/register'])
    console.log(this.inValidPassWord)
  }
 }
  loginAsLecturer() {
    const lecturerName = this.addForm.get('nameUser')?.value;
    const lecturerPassword = this.addForm.get('password')?.value;
    console.log(lecturerPassword)
    console.log(lecturerName)

    


    // Check if the lecturer exists in the database
    this.lecturerService.checkLecturerCredentials(lecturerName, lecturerPassword).subscribe(
   
      (lecturer) => {
        console.log(lecturer)
        if (lecturer) {
          
          localStorage.setItem("IsLecturer","true");

          // Lecturer found, store details in sessionStorage
          sessionStorage.setItem('lecturerName', lecturerName);
          sessionStorage.setItem('lecturerPassword', lecturerPassword);
          sessionStorage.setItem('lecturerCode', lecturer.codeLecturer);

          // Redirect to the courses page
          this.router.navigate(['/courses']);
       

        } else {
          // Handle case where lecturer credentials are incorrect
          console.log('Lecturer not found or credentials are incorrect');
        }
      },
      (error) => {
        console.error('Error occurred while checking lecturer credentials', error);
      }
    );
  }
}
 

