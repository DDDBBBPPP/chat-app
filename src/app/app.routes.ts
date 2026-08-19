import { Routes } from '@angular/router';
import { welcomeGuard } from './guards/welcome/welcome-guard';
import { authGuard } from './guards/auth/auth-guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'tabs',
    pathMatch: 'full',
  },
  {
    path: 'welcome',
    loadComponent: () => import('./pages/welcome/welcome.page').then(m => m.WelcomePage)
  },
  {
    path: 'login',
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/login/login.page').then(m => m.LoginPage),
        canActivate: [welcomeGuard],

      },
      {
        path: 'signup',
        loadComponent: () => import('./pages/login/signup/signup.page').then(m => m.SignupPage)
      },
    ]

  },
  {
    path: 'tabs',
    loadComponent: () => import('./pages/tabs/tabs.page').then( m => m.TabsPage),
    canActivate: [authGuard]
  },

];
