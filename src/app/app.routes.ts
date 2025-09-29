import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'menu',
    pathMatch: 'full',
  },
  {
    path: 'header',
    loadComponent: ()=> import('./components/header/header.component')
    .then(m=>m.HeaderComponent)
  },
  {
    path: 'menu',
    loadComponent: ()=> import("./components/menu/menu.component")
    .then(m=>m.MenuComponent)
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'passwordforget',
    loadComponent: ()=> import('./pages/passwordforget/passwordforget.page')
    .then( m => m.PasswordforgetPage)
  },
  {
    path: 'inscription',
    loadComponent: ()=> import("./pages/inscription/inscription.page")
    .then(m=>m.InscriptionPage)
  },
  {
    path: 'accueil',
    loadComponent: () => import('./pages/accueil/accueil.page').then( m => m.AccueilPage)
  },
  {
    path: 'demarrage',
    loadComponent: () => import('./pages/demarrage/demarrage.page').then( m => m.DemarragePage)
  },
  {
    path: 'welcome',
    loadComponent: () => import('./pages/welcome/welcome.page').then( m => m.WelcomePage)
  },
  {
    path: 'passwordforget',
    loadComponent: () => import('./pages/passwordforget/passwordforget.page').then( m => m.PasswordforgetPage)
  },
  
  



];
