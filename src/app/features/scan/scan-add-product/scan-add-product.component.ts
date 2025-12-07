import { Component } from '@angular/core';
import { AddSuccessComponent } from '../add-success/add-success.component';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { LoginComponent } from "../../auth/login/login.component";

@Component({
  selector: 'app-scan-add-product',
  standalone: true,
  imports: [
   CommonModule,
    FormsModule,
    DropdownModule,
    InputTextModule,
    ButtonModule,
    AddSuccessComponent,
],
  templateUrl: './scan-add-product.component.html',
  styleUrls: ['./scan-add-product.component.scss']   // ✔️ חייב להיות styleUrls
})
export class ScanAddProductComponent {
constructor() {
  console.log('AddProductComponent loaded!');
}
  // 🧾 שדות הטופס
  productName = '';
  barcode = '';
  expireDate = '';
  scanDate = new Date().toLocaleDateString('he-IL');
  productImage: string | null = null;

  // 📂 רשימת קטגוריות
  categories = [
    { label: 'מוצרי חלב', value: 'dairy' },
    { label: 'פירות', value: 'fruits' },
    { label: 'ירקות', value: 'vegetables' },
    { label: 'בשר ועוף', value: 'meat' }
  ];

  selectedCategory: any = null;

  // 🎉 פופאפ הצלחה
  showPopup = false;

  submit() {
    this.showPopup = true;
      console.log("טופס נשלח");
      
    // סגירה אוטומטית אחרי 3 שניות
    setTimeout(() => {
      this.showPopup = false;
    }, 3000);
  }
}
