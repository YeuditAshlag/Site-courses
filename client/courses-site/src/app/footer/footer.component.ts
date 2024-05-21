import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { FacebookSharp, GitHub, LinkedIn, Twitter, YouTube, Instagram } from '@mui/icons-material';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';




@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MatIconModule,RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  
  constructor(private route: Router) {
  }

}
