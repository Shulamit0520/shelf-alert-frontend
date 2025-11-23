// import { Routes } from '@angular/router';
// import { OpeningScreenComponent } from './features/start/opening-screen/opening-screen';
// import { LoginComponent } from './pages/login/login.component';

// export const routes: Routes = [
//       { path: '', component: OpeningScreenComponent },
//      { path: 'login', component: LoginComponent },

// ];
import { Routes } from '@angular/router';
import { OpeningComponent } from './features/opening/opening.component';

export const routes: Routes = [
  { path: 'opening', component: OpeningComponent },
  { path: '', redirectTo: '/opening', pathMatch: 'full' }
];
