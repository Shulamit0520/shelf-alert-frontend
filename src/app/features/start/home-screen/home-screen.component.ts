import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-home-screen',
  standalone: true,
  imports: [CommonModule, InputTextModule, ButtonModule],
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss']
})
export class HomeScreenComponent {

  userName = 'בן';

  products = [
    {
      name: 'שם המוצר',
      scanDate: '01.02.2025',
      expireDate: '01.02.2025',
      image: 'assets/placeholder.png'
    },
    {
      name: 'שם המוצר',
      scanDate: '01.02.2025',
      expireDate: '01.02.2025',
      image: 'assets/placeholder.png'
    },
    {
      name: 'שם המוצר',
      scanDate: '01.02.2025',
      expireDate: '01.02.2025',
      image: 'assets/placeholder.png'
    }
  ];

}
