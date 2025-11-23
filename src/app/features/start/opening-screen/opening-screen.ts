import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-splash-screen',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './opening-screen.html',
  styleUrl: './opening-screen.scss'
})
export class OpeningScreenComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
    // setTimeout(() => {
    //   this.router.navigate(['/auth/login']); 
    // }, 2000);
  }
}
