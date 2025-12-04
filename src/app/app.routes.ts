import { Routes } from '@angular/router';
import { OpeningScreenComponent } from './features/start/opening-screen/opening-screen';
import { LoginComponent } from './features/auth/login/login.component';
import { RegisterComponent } from './features/auth/register/register.component';
import { ScanSuccessComponent } from './features/scan-success/scan-success.component';
// import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
      { path: '', component: OpeningScreenComponent },
      {path: 'login', component: LoginComponent },
      {path: 'register', component: RegisterComponent },
      {path: 'popupScanSuccrss', component: ScanSuccessComponent },

{
  path: 'scan',
  loadComponent: () =>
    import('./features/scan/scan-page/scan-page.component')
      .then(c => c.ScanPageComponent)
}

];

