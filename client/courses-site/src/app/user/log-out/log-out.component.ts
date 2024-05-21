import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-log-out',
  // standalone: true,
  // imports: [],
  templateUrl: './log-out.component.html',
  styleUrl: './log-out.component.css'
})
export class LogOutComponent implements OnInit{
  constructor(private router:Router){}
  ngOnInit(): void {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, log out!"
  }).then((res) => {
    if (res.isConfirmed) {
      localStorage.removeItem('user');
      localStorage.removeItem('IsLecturer');
      this.router.navigate(['/user/login']);
      Swal.fire({
        title: "Goodbye!",
        text: "You successfully logged out",
        icon: "success"
      });

    }
    this.router.navigate(['/home']);
  });
}
}
