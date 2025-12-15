import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home-screen',
  standalone: true,
  imports: [CommonModule, InputTextModule, ButtonModule, FormsModule, RouterOutlet],
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss']
})
export class HomeScreenComponent {

  userName = 'בן';

searchTerm: string = "";

allProducts = [
  {
    name: "שם המוצר",
    scanDate: "01.02.2025",
    expireDate: "01.02.2025",
    image: "../../../../assets/noPicture.png"
  },
  {
    name: "מלפפון",
    scanDate: "02.02.2025",
    expireDate: "09.02.2025",
    image: "../../../../assets/noPicture.png"
  },
   {
    name: "שם המוצר",
    scanDate: "01.02.2025",
    expireDate: "01.02.2025",
    image: "../../../../assets/noPicture.png"
  },
  {
    name: "מלפפון",
    scanDate: "02.02.2025",
    expireDate: "09.02.2025",
    image: "../../../../assets/noPicture.png"
  },
   {
    name: "שם המוצר",
    scanDate: "01.02.2025",
    expireDate: "01.02.2025",
    image: "../../../../assets/noPicture.png"
  },
  {
    name: "מלפפון",
    scanDate: "02.02.2025",
    expireDate: "09.02.2025",
    image: "../../../../assets/noPicture.png"
  }
];

products = [...this.allProducts];   // הצגה ראשונית
      // העותק המקורי שלא משתנה
filterProducts() {
  const term = this.searchTerm.trim().toLowerCase();

  // אם אין חיפוש — תחזיר את הכל
  if (term === "") {
    this.products = [...this.allProducts];
    return;
  }

  this.products = this.allProducts.filter(p =>
    p.name.toLowerCase().includes(term) ||
    p.scanDate.includes(term) ||
    p.expireDate.includes(term)
  );
}

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
