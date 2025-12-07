import { Routes } from '@angular/router';
import { OpeningScreenComponent } from './features/start/opening-screen/opening-screen';
import { LoginComponent } from './features/auth/login/login.component';
import { RegisterComponent } from './features/auth/register/register.component';
<<<<<<< HEAD
import { ScanSuccessComponent } from './features/scan-success/scan-success.component';
=======
import { ScanSuccessComponent } from './features/scan/scan-success/scan-success.component';
import { AddSuccessComponent } from './features/scan/add-success/add-success.component';
import { ScanAddProductComponent } from './features/scan/scan-add-product/scan-add-product.component';
import { HomeScreenComponent } from './features/start/home-screen/home-screen.component';
// import { ScanSuccessComponent } from './features/scan-success/scan-success.component';
>>>>>>> 2157729 (07/12/2025)
// import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
      { path: '', component: OpeningScreenComponent },
      {path: 'login', component: LoginComponent },
      {path: 'register', component: RegisterComponent },
      {path: 'popupScanSuccrss', component: ScanSuccessComponent },
<<<<<<< HEAD
=======
      {path: 'popupAddSuccrss', component: AddSuccessComponent },
      {path: 'addProduct', component: ScanAddProductComponent },
      {path: 'home', component: HomeScreenComponent },
>>>>>>> 2157729 (07/12/2025)



];

