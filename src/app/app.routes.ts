import { Routes } from '@angular/router';
import { MainLayoutComponent } from './main-layout/main-layout.component';

export const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule) // Rota de login sem o layout principal
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      // Outras rotas filhas que usam o layout principal aqui...
    ]
  },
  { path: '**', redirectTo: 'home' }
];
