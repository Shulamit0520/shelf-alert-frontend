import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
  import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'shelf-alert';

constructor(private router: Router) {}

goTo = (page: string) => {
  switch (page) {
    case 'home':
      this.router.navigate(['home']);
      break;

    case 'scan':
      this.router.navigate(['/addProduct']);
      break;

    case '':
      this.router.navigate(['home']);
      break;
  }
};

}
