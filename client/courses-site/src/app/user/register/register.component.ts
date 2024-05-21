import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user.model';




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  public registerForm!: FormGroup;
  private lastUserCode: number|undefined = 0; // הגדרת משתנה שיכיל את קוד המשתמש האחרון

  constructor(private _userService: UserService, private router: Router) { }

  ngOnInit(): void {
    // קביעת טופס ההרשמה
    this.registerForm = new FormGroup({
      "code": new FormControl(0),
      "name": new FormControl(this._userService.userName),
      "address": new FormControl("", [Validators.required]),
      "email": new FormControl("", [Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}')]),
      "password": new FormControl("", [Validators.required, Validators.minLength(9)]),
    });

    // קביעת ערך הקוד של המשתמש האחרון
    this._userService.getAllUsers().subscribe(
      {
        next: (res: User[]) => {
          const lastUser = res[res.length - 1];
          this.lastUserCode = lastUser ? lastUser.codeUser : 0;
        },
        error: (err: any) => {
          console.log(err);
        }
      }
    );
  }

  register() {
    let name = this.registerForm.value.name;
    let password = this.registerForm.value.password;
    let address = this.registerForm.value.address;
    let email = this.registerForm.value.email;
console.log("lastusercode",this.lastUserCode)
    let newUser: User = {
      codeUser: this.lastUserCode? + 1:0, // הגדרת קוד המשתמש כקוד האחרון + 1
      nameUser: name,
      address: address,
      email: email,
      password: password,
      IsLecturer:false
    };
 localStorage.setItem('IsLecturer','true');
    this._userService.saveUser(newUser).subscribe({
      next: (res) => {
        sessionStorage.setItem('username', name);
        sessionStorage.setItem('password', password);

        alert("registration completed");
        this.router.navigate(['courses']);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}