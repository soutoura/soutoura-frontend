import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'demarrage',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then( m => m.LoginPage)
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
    path: 'welcometwo',
    loadComponent: () => import('./pages/welcometwo/welcometwo.page').then( m => m.WelcometwoPage)
  },
  {
    path: 'tableaudebord',
    loadComponent: () => import('./pages/tableaudebord/tableaudebord.page').then( m => m.TableaudebordPage)
  },

];
