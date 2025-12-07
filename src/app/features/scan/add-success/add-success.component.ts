import { Component, Input } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-add-success',
  standalone: true,
  imports: [  CommonModule, DialogModule, ButtonModule  ],
  templateUrl: './add-success.component.html',
  styleUrls:['./add-success.component.scss'] 
})
export class AddSuccessComponent {
 @Input() productName!: string;
  @Input() productImage!: string | null;
  @Input() scanDate!: string;
  @Input() expireDate!: string;
  @Input() category!: string;
   @Input() visible!: boolean;

// productName = "שם המוצר";
// productImage = null; // או URL
// scanDate = "21.9.2025";
// expireDate = "24.12.2025";
// category = "מוצרי חלב";
constructor() {
  console.log('AddSuccessComponent loaded!');
}
  addToCart() {
    console.log("מוסיף לסל...");
  }

  scanAnother() {
    console.log("סריקה נוספת...");
  }

}