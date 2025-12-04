import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-splash-screen',
  standalone: true,
  imports: [RouterModule, ButtonModule],
  templateUrl: './opening-screen.html',
  styleUrl: './opening-screen.scss'
})
export class OpeningScreenComponent{

  // constructor(private router: Router) {}


}
