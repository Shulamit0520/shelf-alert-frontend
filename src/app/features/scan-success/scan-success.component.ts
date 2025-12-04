import { Component, Input, OnInit } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-scan-success',
  standalone: true,
  imports: [CommonModule, DialogModule, ButtonModule],
  templateUrl: './scan-success.component.html',
  styleUrl: './scan-success.component.scss'

})
export class ScanSuccessComponent  {

//  @Input() productName!: string;
//   @Input() productImage!: string | null;
//   @Input() scanDate!: string;
//   @Input() expireDate!: string;
//   @Input() category!: string;
productName = "שם המוצר";
productImage = null; // או URL
scanDate = "21.9.2025";
expireDate = "24.12.2025";
category = "מוצרי חלב";

  addToCart() {
    console.log("מוסיף לסל...");
  }

  scanAnother() {
    console.log("סריקה נוספת...");
  }
}