import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext'; // ייבוא המודול בלבד
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { DividerModule } from 'primeng/divider';
import { ReactiveFormsModule } from '@angular/forms'; // ⬅️ יש לייבא מודול זה!
@Component({
 selector: 'app-login',
 standalone: true,
 imports: [RouterModule, ButtonModule, InputTextModule, PasswordModule, DividerModule, CommonModule, FormsModule, ReactiveFormsModule],
 templateUrl: './login.component.html',
 styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  // משתנה שיגדיר אם להציג שגיאות של הטופס
  submitted = false; 

  constructor(private fb: FormBuilder, private router: Router) { }
showPassword = false;

togglePassword() {
  this.showPassword = !this.showPassword;
}
  ngOnInit(): void {
    // יצירת הטופס עם ולידציה בסיסית
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  // פונקציה לקבלת ה-Controls של הטופס בקלות ב-HTML
  get f() { return this.loginForm.controls; }

  onSubmit(): void {
    this.submitted = true;

    // עצור כאן אם הטופס לא תקין
    if (this.loginForm.invalid) {
      // לדוגמה, הצגת הודעה כללית או פשוט עצירה
      console.log('Form is invalid');
      return;
    }

    // לוגיקה של כניסה (שליחת הנתונים לשרת)
    console.log('Form Submitted', this.loginForm.value);
    // דגש: יש להוסיף טיפול במצבי שגיאה (פרטים שגויים)

    // ניווט לאחר כניסה מוצלחת (דוגמה)
    // this.router.navigate(['/home']);
  }

  // פונקציה לכניסה דרך גוגל
  loginWithGoogle(): void {
    console.log('Login with Google');
    // לוגיקה של התחברות עם גוגל
  }

  // ניווט למסך הרשמה
  goToRegister(): void {
    this.router.navigate(['/register']);
  }

  // ניווט לכניסה ללא משתמש
  guestLogin(): void {
    console.log('Guest Login');
    // לוגיקה של כניסה ללא משתמש
  }
}