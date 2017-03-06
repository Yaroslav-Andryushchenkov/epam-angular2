import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { LoginComponent } from './login';

export const ROUTES: Routes = [
  { path: '',      component: HomeComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'login',  component: LoginComponent }
];
