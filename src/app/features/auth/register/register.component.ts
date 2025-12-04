import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, InputTextModule, ButtonModule],
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  showPass = false;
  showConfirm = false;
show = false;

}
