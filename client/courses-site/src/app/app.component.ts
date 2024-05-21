import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserModule } from './user/user.module';
import { CourseModule } from './course/course.module';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CourseModule,HeaderComponent,UserModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'courses-site';
}
