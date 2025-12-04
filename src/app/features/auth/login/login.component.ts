import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext'; // ייבוא המודול בלבד
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, ButtonModule, InputTextModule, PasswordModule, DividerModule, CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent{


}