import { Component } from '@angular/core';
import { MatIconModule } from "@angular/material/icon";
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatIconModule,HeaderComponent,FooterComponent , CommonModule,ButtonModule],
 
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  instructorImages: string[] = [
    
    '../../assets/images/lecturer1.png',
    '../../assets/images/lecturer2.png',
    '../../assets/images/lecturer1.png',
    '../../assets/images/lecturer2.png',
    '../../assets/images/lecturer1.png',
    '../../assets/images/lecturer2.png',
    '../../assets/images/lecturer1.png',
    '../../assets/images/lecturer2.png',
    // המשך רשימת נתיבי תמונות המרצים...
  ];
}
