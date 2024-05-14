import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';


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